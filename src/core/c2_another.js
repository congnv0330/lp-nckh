/* eslint-disable camelcase */

import PhanSo from './modules/phanso'
// import { decimalToFraction } from './utils/fraction'

class LinearProgramming {
  constructor () {
    this.fx = []
    this.rb = []
    this.rbdau = []
    this.n = 0
    this.m = 0
    this.orginN = 0
    this.pa = []
    this.hsM = []
    this.d = []
    this.subVar = []
    this.fakeVar = []
    this.freeVar = []
    this.type = ''
  }
}

class OptimalPlan{
  constructor(){
    this.x = [];
    this.optimalFx = 0;
  }
}

const failed = {
  success: false,
  result: 'Không có patu tối ưu'
}

function Sum (p1, p2) { const sum = new PhanSo(); sum.tu = p1.tu * p2.mau + p2.tu * p1.mau; sum.mau = p1.mau * p2.mau; sum.RutGon(); return sum }

function Sub (p1, p2) { const sub = new PhanSo(); sub.tu = p1.tu * p2.mau - p2.tu * p1.mau; sub.mau = p1.mau * p2.mau; sub.RutGon(); return sub }

function Multi (p1, p2) { const mul = new PhanSo(); mul.tu = p1.tu * p2.tu; mul.mau = p1.mau * p2.mau; mul.RutGon(); return mul }

function Div (p1, p2) { const div = new PhanSo(); div.tu = p1.tu * p2.mau; div.mau = p1.mau * p2.tu; div.RutGon(); return div }

function input (inputFx, inputMatrix, inputRB, fxType) {
  const orgin = new LinearProgramming()
  const fxString = inputFx.trim()
  const fxOrgin = fxString.split(' ')
  for (let i = 0; i < fxOrgin.length; i++) {
    const tmp = fxOrgin[i].split('/')
    if (tmp.length === 2) {
      orgin.fx[i] = new PhanSo(parseFloat(tmp[0]), parseFloat(tmp[1]))
    } else {
      orgin.fx[i] = new PhanSo(parseFloat(tmp[0]))
    }
  }
  orgin.n = fxOrgin.length
  orgin.orginN = orgin.n

  const matrixrb = inputMatrix
  const matrixArr = matrixrb.split('\n')
  orgin.m = matrixArr.length
  let maxLine = 0

  let RBin = inputRB.trim()
  RBin = RBin.split(';')
  for (let i = 0; i < RBin.length; i++) {
    RBin[i] = RBin[i].trim()
    const tmp = RBin[i].split(' ')
    const len = tmp.length - 2
    for (let j = 0; j < len; j++) {
      const col = parseInt(tmp[j]) - 1
      orgin.rbdau[col] = 1
      if (tmp[len] === '<=') {
        orgin.rbdau[col] = -1
      }
    }
  }

  for (let i = 0; i < orgin.m; i++) {
    matrixArr[i] = matrixArr[i].trim()
    const line = matrixArr[i].split(' ')
    maxLine = Math.max(maxLine, line.length - 2)
    orgin.rb[i] = []
    for (let j = 0; j < line.length - 2; j++) {
      const tmp = line[j].split('/')
      if (tmp.length === 2) {
        orgin.rb[i][j] = new PhanSo(parseFloat(tmp[0]), parseFloat(tmp[1]))
      } else {
        orgin.rb[i][j] = new PhanSo(parseFloat(tmp[0]))
      }
    }
    orgin.d[i] = line[line.length - 2]
    const tmp = line[line.length - 1].split('/')
    if (tmp.length === 2) {
      orgin.pa[i] = new PhanSo(parseFloat(tmp[0]), parseFloat(tmp[1]))
    } else {
      orgin.pa[i] = new PhanSo(parseFloat(tmp[0]))
    }
  }
  orgin.n = maxLine
  for (let i = 0; i < orgin.n; i++) {
    if (orgin.fx[i] === undefined) {
      orgin.fx[i] = new PhanSo()
    }
  }

  orgin.type = fxType.trim()
  return orgin
}


function changeMatrixRb (orginLN) {
  const dn = new LinearProgramming()
  dn.orginN = orginLN.m
  if (orginLN.type === 'min') {
    dn.type = 'max'
    for (let i = 0; i < orginLN.m; i++) {
      if (orginLN.d[i] === '<=') { dn.rbdau[i] = -1 } else if (orginLN.d[i] === '>=') { dn.rbdau[i] = 1 }
    }
    for (let i = 0; i < orginLN.n; i++) {
      if (orginLN.rbdau[i] === undefined) { dn.d[i] = '=' } else if (orginLN.rbdau[i] === 1) { dn.d[i] = '<=' } else if (orginLN.rbdau[i] === -1) { dn.d[i] = '>=' }
    }
  } else {
    dn.type = 'min'
    for (let i = 0; i < orginLN.m; i++) {
      if (orginLN.d[i] === '<=') { dn.rbdau[i] = 1 } else if (orginLN.d[i] === '>=') { dn.rbdau[i] = -1 }
    }
    for (let i = 0; i < orginLN.n; i++) {
      if (orginLN.rbdau[i] === undefined) { dn.d[i] = '=' } else if (orginLN.rbdau[i] === 1) { dn.d[i] = '>=' } else if (orginLN.rbdau[i] === -1) { dn.d[i] = '<=' }
    }
  }
  dn.n = orginLN.m
  dn.m = orginLN.n
  for (let i = 0; i < orginLN.m; i++) {
    dn.fx[i] = orginLN.pa[i]
  }
  for (let i = 0; i < orginLN.n; i++) {
    dn.pa[i] = orginLN.fx[i]
    dn.rb[i] = []
    for (let j = 0; j < orginLN.m; j++) {
      dn.rb[i][j] = orginLN.rb[j][i]
    }
  }
  return dn
}

function printDualityOptimal(patu,originaLp,dualityLp){
  console.log(patu)
  console.log(originaLp)
  console.log(dualityLp)
}

function inputOpitmalPlan(){
  let patu = new OptimalPlan()
  const inFX = $("#inputOpitmalFx").val().trim()
  patu.optimalFx = parseFloat(inFX)
  let inX = $("#inputOpitmalX").val().trim()
  inX = inX.split(" ")
  for (let i = 0; i < inX.length; i++){
    const tmp = inX[i].split("/")
    if (tmp.length === 2)
      patu.x.push(new PhanSo(parseFloat(tmp[0]),parseFloat(tmp[1])))
    else{
      patu.x.push(new PhanSo(parseFloat(tmp[0])))
    }
  }
  return patu
}

function gaussMethod(matrix,pos){
  for (let i = 0; i < matrix.length; i++){
    if (i !== pos){
      const neone = new PhanSo(parseFloat(-1))
      let pivot = Multi(Div(matrix[i][pos],matrix[pos][pos]),neone)
      for (let j = 0; j < matrix[i].length; j++){
        matrix[i][j] = Sum(matrix[i][j],Multi(matrix[pos][j],pivot))
      }
    }
  }
  return matrix;
}

function findSolution(matrix){
  let mtx  = matrix
  let lenmtx = matrix.length
  let pos = 0
  while (lenmtx > pos){
    matrix = gaussMethod(matrix,pos)
    pos += 1
  }
  for (let i = 0; i < lenmtx; i++){
    let pivot = matrix[i][i]
    for (let j = 0; j < matrix[i].length; j++){
      matrix[i][j] = Div(matrix[i][j],pivot)
    }
  }
  let x = []
  for (let i = 0; i < lenmtx; i++){
    x.push(matrix[i][matrix[i].length-1])
  }
  return x
}

function weakCompensationDeviation(originaLp,dualityLp){
  let patuX = inputOpitmalPlan()
  let patuY = new OptimalPlan()
  let cntDifZero = 0
  let cur_ex = 0
  for (let i = 0; i < originaLp.m; i++){
    let devi = new PhanSo()
    for (let j = 0; j < originaLp.n; j++){
      devi = Sum(devi,Multi(originaLp.rb[i][j],patuX.x[j]))
    }
    devi = Sub(devi, originaLp.pa[i])
    if (devi.giatri !== 0){
      patuY.x[i] = new PhanSo()
      cur_ex += 1
    }
  }
  for (let i = 0; i < originaLp.n; i++) {
    if (patuX.x[i].giatri !== 0){
      cntDifZero += 1
    }
  }
  if (patuY.x.length === 0 && cntDifZero < originaLp.m){
    cur_ex += 1
    patuY.x[0] = new PhanSo()
  }
  let matrix = []
  for (let i = 0; i < dualityLp.m; i++){
    if (patuX.x[i].giatri != 0){
      let tmp = []
      for (let j = 0; j < dualityLp.n; j++){
        if (patuY.x[j] === undefined){
          tmp.push(dualityLp.rb[i][j])
        }
      }
      tmp.push(dualityLp.pa[i])
      matrix.push(tmp)
    }
  }
  // Because the i-th of matrix sometime unorrdered so we need to sort agian
  let tmpZero = []
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j].giatri !== 0){
        let tmp = {key:i,value:j}
        tmpZero.push(tmp)
        break
      }
    }
  }
  tmpZero.sort((a,b) => (a.value > b.value) ? 1 : -1)
  let mt = jQuery.extend([], matrix)
  for (let i = 0; i < matrix.length; i++){
    matrix[i] = mt[tmpZero[i].key]
  }

  // This situation happen when the number of ex not equal to the number of row 
  if (matrix.length < originaLp.m - cur_ex){
    pos = 0
    const orLp = originaLp.m - cur_ex;
    while (matrix.length < orLp){
      matrix[pos+1] = []
      matrix[pos+1][pos] = new PhanSo(parseFloat(1))
      for (let i = 0; i < matrix[0].length; i++){
        if (i !== pos){
          matrix[pos+1][i] = new PhanSo(parseFloat(0))
        }
      }
      pos += 1
    }
  }

  let findEx = findSolution(matrix)
  let cnt = 0
  for (let i = 0; i < dualityLp.n; i++) {
    if (patuY.x[i] === undefined){
      patuY.x[i] = findEx[cnt]
      cnt += 1
    }
  }
  printDualityOptimal(patuY,originaLp,dualityLp)
}

function processing (paramFx, paramMatrix, paramRB, paramFxType) {
  const orginLN = input(paramFx, paramMatrix, paramRB, paramFxType)
  let dnLN = changeMatrixRb(orginLN)
  weakCompensationDeviation(orginLN,dnLN)
}

export default processing
