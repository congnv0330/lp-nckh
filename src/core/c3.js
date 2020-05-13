/* eslint-disable camelcase */

class LinearProgramming {
  constructor () {
    this.nPhat = 0
    this.mThu = 0
    this.thu = []
    this.phat = []
    this.cp = []
    this.xx = []
    this.yy = []
    this.pp = []
    this.kt = []
  }
}

class Point {
  constructor () {
    this.x = 0
    this.y = 0
  }
}

function createInputMatrix (inputPhat, inputThu, inputMatrix) {
  const orgin = new LinearProgramming()
  const phatString = inputPhat.trim()
  const phatOrgin = phatString.split(' ')
  const thuString = inputThu.trim()
  const thuOrgin = thuString.split(' ')
  orgin.nPhat = phatOrgin.length
  orgin.mThu = thuOrgin.length

  let sumPhat = 0
  let sumThu = 0
  for (let i = 0; i < orgin.nPhat; i++) {
    orgin.phat.push(parseInt(phatOrgin[i]))
    sumPhat += parseInt(phatOrgin[i])
  }

  for (let i = 0; i < orgin.mThu; i++) {
    orgin.thu.push(parseInt(thuOrgin[i]))
    sumThu += parseInt(thuOrgin[i])
  }

  const matrixkt = inputMatrix.trim()
  const matrixArr = matrixkt.split('\n')
  for (let i = 0; i < matrixArr.length; i++) {
    const line = matrixArr[i].split(' ')
    orgin.cp[i] = []
    for (let j = 0; j < line.length; j++) {
      orgin.cp[i][j] = parseInt(line[j])
    }
  }

  if (sumThu > sumPhat) {
    orgin.nPhat += 1
    phatOrgin[orgin.nPhat] = sumThu - sumPhat
    orgin.cp[orgin.nPhat] = []
    for (let i = 0; i < orgin.mThu; i++) orgin.cp[orgin.nPhat][i] = Number.MAX_SAFE_INTEGER
  } else if (sumPhat > sumThu) {
    orgin.mThu += 1
    thuOrgin[orgin.mThu] = sumPhat - sumThu
    for (let j = 0; j < orgin.nPhat; j++) orgin.cp[j][origin.m] = Number.MAX_SAFE_INTEGER
  }

  for (let i = 0; i < orgin.nPhat; i++) orgin.xx[i] = orgin.phat[i]
  for (let i = 0; i < orgin.mThu; i++) orgin.yy[i] = orgin.thu[i]

  for (let i = 0; i < orgin.nPhat; i++) {
    orgin.pp[i] = []
    for (let j = 0; j < orgin.mThu; j++) {
      orgin.pp[i][j] = 0
    }
  }

  for (let i = 0; i < orgin.nPhat; i++) {
    orgin.kt[i] = []
    for (let j = 0; j < orgin.mThu; j++) {
      orgin.kt[i][j] = 1
    }
  }

  return orgin
}

function TayBac (orgin, i, j) {
  if (orgin.xx[i] > orgin.yy[j]) {
    orgin.pp[i][j] = orgin.yy[j]
    orgin.xx[i] -= orgin.yy[j]
    orgin.yy[j] = 0
    if (j + 1 < orgin.mThu) { TayBac(orgin, i, j + 1) }
  } else {
    orgin.pp[i][j] = orgin.xx[i]
    orgin.yy[j] -= orgin.xx[i]
    orgin.xx[i] = 0
    if (i + 1 < orgin.nPhat) { TayBac(orgin, i + 1, j) }
  }
  return orgin
}

function findmin (orgin) {
  let min = Number.MAX_SAFE_INTEGER
  const ms = new Point()

  for (let i = 0; i < orgin.nPhat; i++) {
    for (let j = 0; j < orgin.mThu; j++) {
      if (orgin.kt[i][j] === 1) {
        if (orgin.cp[i][j] < min) {
          min = orgin.cp[i][j]
          ms.x = i
          ms.y = j
        }
      }
    }
  }

  return ms
}
function minsheet (orgin, ij) {
  const i = ij.x
  const j = ij.y
  if (orgin.xx[i] > orgin.yy[j]) {
    orgin.pp[i][j] = orgin.yy[j]
    orgin.xx[i] -= orgin.yy[j]
    orgin.yy[j] = 0
    for (let k = 0; k < orgin.nPhat; k++) orgin.kt[k][j] = 0
  } else {
    orgin.pp[i][j] = orgin.xx[i]
    orgin.yy[j] -= orgin.xx[i]
    orgin.xx[i] = 0
    for (let k = 0; k < orgin.mThu; k++) orgin.kt[i][k] = 0
  }
  ij = findmin(orgin)
  if (ij.x === 0 && ij.y === 0) return
  else { minsheet(orgin, ij) }
  return orgin
}

export default {
  tayBac (inputPhat, inputThu, inputMatrix) {
    let vt = createInputMatrix(inputPhat, inputThu, inputMatrix)
    vt = TayBac(vt, 0, 0)
    return vt
  },
  cucTieu (inputPhat, inputThu, inputMatrix) {
    let vt = createInputMatrix(inputPhat, inputThu, inputMatrix)
    vt = minsheet(vt, findmin(vt))
    return vt
  }
}
