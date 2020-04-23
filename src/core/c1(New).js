/* eslint-disable camelcase */

import PhanSo from './modules/phanso'
import { decimalToFraction } from './utils/fraction'

const hsM = []
const pa = []
const d = []
let m = 0
let n = 0
const subVar = []
const fakeVar = []
const freeVar = []
let fx
let rb
let orginN = n

const failed = {
  success: false,
  result: 'Không có patu tối ưu'
}

function Sum (p1, p2) { const sum = new PhanSo(); sum.tu = p1.tu * p2.mau + p2.tu * p1.mau; sum.mau = p1.mau * p2.mau; sum.RutGon(); return sum }

function Sub (p1, p2) { const sub = new PhanSo(); sub.tu = p1.tu * p2.mau - p2.tu * p1.mau; sub.mau = p1.mau * p2.mau; sub.RutGon(); return sub }

function Multi (p1, p2) { const mul = new PhanSo(); mul.tu = p1.tu * p2.tu; mul.mau = p1.mau * p2.mau; mul.RutGon(); return mul }

function Div (p1, p2) { const div = new PhanSo(); div.tu = p1.tu * p2.mau; div.mau = p1.mau * p2.tu; div.RutGon(); return div }

function inputFx (input) {
  const fxString = input.trim()
  const fxOrgin = fxString.split(' ')
  const fx = []
  for (let i = 0; i < fxOrgin.length; i++) {
    const tmp = fxOrgin[i].split('/')
    if (tmp.length === 2) {
      fx[i] = new PhanSo(parseFloat(tmp[0]), parseFloat(tmp[1]))
    } else {
      fx[i] = new PhanSo(parseFloat(tmp[0]))
    }
  }
  n = fxOrgin.length
  return fx
}

function inputMatrix (inputMatrix, inputRB, fxType) {
  const matrixrb = inputMatrix
  const matrixArr = matrixrb.split('\n')
  m = matrixArr.length
  let maxLine = 0
  const rbdau = []
  const rb = []

  let RBin = inputRB.trim()
  RBin = RBin.split(';')
  for (let i = 0; i < RBin.length; i++) {
    RBin[i] = RBin[i].trim()
    const tmp = RBin[i].split(' ')
    const len = tmp.length - 2
    for (let j = 0; j < len; j++) {
      const col = parseInt(tmp[j]) - 1
      rbdau[col] = 1
      if (tmp[len] === '<=') {
        rbdau[col] = -1
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (rbdau[i] === -1) {
      fx[i].tu *= -1
    }
  }
  let before = 0;
  for (let i = 0; i < m; i++) {
    matrixArr[i] = matrixArr[i].trim()
    const line = matrixArr[i].split(' ')
    maxLine = Math.max(maxLine, line.length - 2)
    rb[i] = []
    let check = 0;
    for (let j = 0; j < line.length - 2; j++) {
      const tmp = line[j].split('/')
      if (tmp.length === 2) {
        rb[i][j] = new PhanSo(parseFloat(tmp[0]), parseFloat(tmp[1]))
      } else {
        rb[i][j] = new PhanSo(parseFloat(tmp[0]))
      }
      if (rbdau[j] === -1) {
        rb[i][j].tu *= -1
      }
      if (rbdau[j] === undefined) {
        check = 1;
        if (fx[n+before] == undefined){fx[n+before] = new PhanSo(fx[i].tu*-1);}
        rb[j][n+before] = new PhanSo(rb[j][i].tu*-1)
      }
    }
    if (rbdau[i] == undefined){
      freeVar.push(n+before);
    }
    if (check == 1){before+=1;}
    d[i] = line[line.length - 2]
    const tmp = line[line.length - 1].split('/')
    if (tmp.length === 2) {
      pa[i] = new PhanSo(parseFloat(tmp[0]), parseFloat(tmp[1]))
    } else {
      pa[i] = new PhanSo(parseFloat(tmp[0]))
    }
    if (pa[i].giatri < 0) {
      pa[i].tu *= -1
      for (let j = 0; j < line.length - 2; j++) {
        rb[i][j].tu *= -1
      }
      if (d[i] === '<=') d[i] = '>='
      else if (d[i] === '>=') d[i] = '<='
    }
  }
  orginN = maxLine;
  n = n+before;
  if (fxType === 'max') {
    for (let i = 0; i < n; i++) {
      fx[i].tu *= -1
    }
  }
  for (let i = 0; i < n; i++) {
    if (fx[i] === undefined) { fx[i] = new PhanSo() }
  }
  rb[m] = [] // delta
  return rb
}

function setrb (rb, m, n) {
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      rb[m][j] = new PhanSo()
      hsM[j] = new PhanSo()
      if (fx[j] === undefined) {
        fx[j] = new PhanSo()
      }
      if (rb[i][j] === undefined) {
        rb[i][j] = new PhanSo()
      }
    }
  }
  return rb
}

function calculateDelta (n, m, hs) {
  let posOfMaxDelta = 0
  for (let i = 0; i < n; i++) {
    let hs_M = new PhanSo(); let cons = new PhanSo()
    for (let j = 0; j < m; j++) {
      if (fx[hs[j]].giatri !== 123456) {
        cons = Sum(cons, Multi(fx[hs[j]], rb[j][i]))
      } else {
        hs_M = Sum(hs_M, rb[j][i])
      }
    }
    rb[m][i] = fx[i].giatri !== 123456 ? Sub(cons, fx[i]) : cons
    const hs_M1 = new PhanSo(1)
    hsM[i] = fx[i].giatri !== 123456 ? hs_M : Sub(hs_M, hs_M1)
    if (hsM[i].giatri > hsM[posOfMaxDelta].giatri || (hsM[i].giatri === hsM[posOfMaxDelta].giatri && rb[m][posOfMaxDelta].giatri < rb[m][i].giatri)) {
      posOfMaxDelta = i
    }
  }
  return posOfMaxDelta
}

function checkAlNegative (n, m, delta) {
  for (let i = 0; i < delta.length; i++) {
    let negative = 0
    for (let j = 0; j < m; j++) {
      if (rb[j][delta[i]].giatri <= 0) {
        ++negative
      }
    }
    if (negative === m) {
      return false
    }
  }
  return true
}

function checkDelta (n, m) {
  let pa_tu = 1
  const delta = []
  for (let i = 0; i < n; i++) {
    if (hsM[i].giatri > 0 || (!hsM[i].giatri && rb[m][i].giatri > 0)) {
      pa_tu = 0
      delta.push(i)
    }
  }
  if (pa_tu) {
    return 1
  } else if (!checkAlNegative(n, m, delta)) {
    return 0
  }
  return 2
}

function addBase () {
  const hs = []
  for (let i = 0; i < m; i++) {
    hs[i] = -1
    if (d[i] === '>=') {
      subVar.push(i)
      rb[i][n++] = new PhanSo(parseFloat(-1))
    } else if (d[i] === '<=') {
      subVar.push(i)
      rb[i][n++] = new PhanSo(parseFloat(1))
    }
  }
  rb = setrb(rb, m, n)
  let varbase = 0
  // Tìm ẩn cơ sở
  for (let i = 0; i < n; i++) {
    let cnt_one = 0; let cnt_zero = 0
    let posj = 0
    for (let j = 0; j < m; j++) {
      if (rb[j][i].giatri === 1) {
        posj = j
        ++cnt_one
      } else if (rb[j][i].giatri === 0) {
        ++cnt_zero
      }
    }

    if (cnt_one === 1 && cnt_zero === m - 1) {
      hs[posj] = i
      varbase += 1
    }
  }
  if (varbase < m) {
    for (let i = 0; i < m; i++) {
      if (hs[i] === -1) {
        fakeVar.push(n)
        fx[n] = new PhanSo(parseFloat(123456))
        hs[i] = n
        rb[i][n++] = new PhanSo(parseFloat(1))
      }
    }
  }
  rb = setrb(rb, m, n)
  return hs
}

function findMin (rb, posOfMaxDelta) {
  let minlet = parseFloat(10000)
  let posOfMin = 0
  for (let j = 0; j < m; j++) {
    if (rb[j][posOfMaxDelta].giatri > 0) {
      if (pa[j].giatri / rb[j][posOfMaxDelta].giatri < minlet) {
        minlet = pa[j].giatri / rb[j][posOfMaxDelta].giatri
        posOfMin = j
      }
    }
  }
  return posOfMin
}

function calculateFx (fx, x) {
  let pa_result = new PhanSo()
  for (let i = 0; i < orginN; i++) {
    pa_result = Sum(pa_result, Multi(fx[i], x[i]))
  }
  pa_result.RutGon()
  return pa_result
}

function Savesol (hs) {
  const res = []
  for (let i = 0; i < m + 1; i++) {
    const tmp = []
    if (i < m) {
      if (fx[hs[i]].giatri !== 99999999) {
        tmp.push(fx[hs[i]].giatri)
      } else {
        tmp.push('M')
      }

      tmp.push(hs[i] + 1)
      tmp.push(decimalToFraction(pa[i].giatri))
    }

    for (let j = 0; j < n; j++) {
      tmp.push(decimalToFraction(rb[i][j].giatri))
    }
    res.push(tmp)
  }
  return res
}

function print (hs, fxType) {
  const x = []
  for (let i = 0; i < n; i++) {
    x[i] = new PhanSo()
  }
  for (let i = 0; i < m; i++) {
    x[hs[i]].tu = pa[i].tu
    x[hs[i]].mau = pa[i].mau
  }

  for (let i = 0; i < fakeVar.length; i++) {
    if (x[fakeVar[i]].giatri !== 0) {
      return failed
    }
  }
  for (let i = 0; i < n; i++){
    if (rbdau[i] == -1){x[i].tu*=-1;fx[i].tu*=-1;}
  }

  const res = { success: true, result: { fx: 0, x: [] } }
  const pa_result = calculateFx(fx, x)

  if (fxType === 'max') {
    for (let i = 0; i < n; i++){
      fx[i].tu*=-1;
    }
    pa_result.tu *= -1
  }

  if (freeVar.length != 0){
    for (let i = 0; i < freeVar.length; i++){
      pa_result = Sum(pa_result,Multi(fx[freeVar[i]],x[freeVar[i]]));
    }
  }
  res.result.fx = pa_result.tu.toString() + '/' + pa_result.mau.toString()

  // let s = pa_result.tu.toString() + '/' + pa_result.mau.toString() + '<br>'
  for (let i = 0; i < n; i++) {
    res.result.x.push(x[i].tu.toString() + '/' + x[i].mau.toString())
    // s = s + x[i].tu.toString() + '/' + x[i].mau.toString() + ' '
  }
  return res
}

function processing (paramFx, paramMatrix, paramRB, paramFxType) {
  fx = inputFx(paramFx)
  rb = inputMatrix(paramMatrix, paramRB, paramFxType)
  orginN = n

  const hs = addBase()
  const allS = []
  let s = ''
  const mp = []
  const res = { nX: n, nLine: m, steps: [], answer: {} }
  for (const x in hs) {
    s = s + hs[x].toString()
  }
  if (mp[s] === undefined) { mp[s] = 0 }
  mp[s] += 1
  while (true) {
    let posOfMaxDelta = calculateDelta(n, m, hs)
    allS.push(Savesol(hs))
    const checkDeltaNow = checkDelta(n, m)
    if (checkDeltaNow === 0) {
      res.answer = failed
      return res
    } else if (checkDeltaNow === 1) {
      res.steps = allS
      res.answer = print(hs, paramFxType)
      return res
    }

    let posOfMinVar = findMin(rb, posOfMaxDelta)
    hs[posOfMinVar] = posOfMaxDelta
    s = ''
    for (const x in hs) {
      s = s + hs[x].toString()
    }
    if (mp[s] === undefined) { mp[s] = 0 }
    mp[s] += 1
    if (mp[s] !== 1) {
      posOfMaxDelta = 0
      for (let i = 0; i < n; ++i) {
        if ((hsM[i].giatri < hsM[posOfMaxDelta].giatri) || (hsM[i].giatri === hsM[posOfMaxDelta].giatri && rb[m][posOfMaxDelta].giatri > rb[m][i].giatri && rb[m][i].giatri > 0)) {
          posOfMaxDelta = i
        }
      }
      posOfMinVar = findMin(rb, posOfMaxDelta)
      hs[posOfMinVar] = posOfMaxDelta
    }
    const minValue = rb[posOfMinVar][posOfMaxDelta]
    for (let i = 0; i < m; i++) {
      if (i !== posOfMinVar) {
        pa[i] = Div(Sub(Multi(pa[i], minValue), Multi(pa[posOfMinVar], rb[i][posOfMaxDelta])), minValue)
        for (let j = 0; j < n; j++) {
          if (j !== posOfMaxDelta) {
            rb[i][j] = Div(Sub(Multi(rb[i][j], minValue), Multi(rb[posOfMinVar][j], rb[i][posOfMaxDelta])), minValue)
          }
        }
      }
    }

    for (let i = 0; i < m; i++) {
      if (i !== posOfMinVar) {
        rb[i][posOfMaxDelta].init()
      }
    }
    pa[posOfMinVar] = Div(pa[posOfMinVar], rb[posOfMinVar][posOfMaxDelta])
    for (let i = 0; i < n; ++i) {
      rb[posOfMinVar][i] = Div(rb[posOfMinVar][i], minValue)
    }
  }
}

export default processing
