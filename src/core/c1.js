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

// const failed = {
//   success: false,
//   result: 'Không có patu tối ưu'
// }

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

function setMatrix (lp) {
  const rb = Object.assign(new LinearProgramming(), lp)
  for (let i = 0; i < rb.n; i++) {
    if (rb.rbdau[i] === -1) {
      rb.fx[i].tu *= -1
    }
  }
  for (let i = 0; i < rb.m; i++) {
    if (rb.pa[i].giatri < 0) {
      rb.pa[i].tu *= -1
      rb.d[i] = (rb.d[i] === '>=' ? '<=' : '>=')
      for (let j = 0; j < rb.n; j++) {
        rb.rb[i][j].tu *= -1
      }
    }
  }
  let before = 0
  for (let i = 0; i < rb.n; i++) {
    let check = 0
    for (let j = 0; j < rb.m; j++) {
      if (rb.rbdau[i] === -1) {
        rb.rb[j][i].tu *= -1
      }
      if (rb.rbdau[i] === undefined) {
        check = 1
        if (rb.fx[rb.n + before] === undefined) { rb.fx[rb.n + before] = new PhanSo(rb.fx[i].tu * -1) }
        rb.rb[j][rb.n + before] = new PhanSo(rb.rb[j][i].tu * -1)
      }
    }
    if (rb.rbdau[i] === undefined) {
      rb.freeVar.push(rb.n + before)
    }
    if (check === 1) { before += 1 }
  }
  rb.n = rb.n + before
  if (rb.type === 'max') {
    for (let i = 0; i < rb.n; i++) {
      rb.fx[i].tu *= -1
    }
  }

  for (let i = 0; i < rb.n; i++) {
    if (rb.fx[i] === undefined) { rb.fx[i] = new PhanSo() }
  }
  rb.rb[rb.m] = [] // delta
  return rb
}

function setrb (rb) {
  for (let i = 0; i < rb.m; i++) {
    for (let j = 0; j < rb.n; j++) {
      rb.rb[rb.m][j] = new PhanSo()
      rb.hsM[j] = new PhanSo()
      if (rb.fx[j] === undefined) {
        rb.fx[j] = new PhanSo()
      }
      if (rb.rb[i][j] === undefined) {
        rb.rb[i][j] = new PhanSo()
      }
    }
  }
  return rb
}

function calculateDelta (rb, hs) {
  let posOfMaxDelta = 0
  for (let i = 0; i < rb.n; i++) {
    let hs_M = new PhanSo(); let cons = new PhanSo()
    for (let j = 0; j < rb.m; j++) {
      if (rb.fx[hs[j]].giatri !== 99999999) {
        cons = Sum(cons, Multi(rb.fx[hs[j]], rb.rb[j][i]))
      } else {
        hs_M = Sum(hs_M, rb.rb[j][i])
      }
    }
    rb.rb[rb.m][i] = rb.fx[i].giatri !== 99999999 ? Sub(cons, rb.fx[i]) : cons
    const hs_M1 = new PhanSo(1)
    rb.hsM[i] = rb.fx[i].giatri !== 99999999 ? hs_M : Sub(hs_M, hs_M1)
    if (rb.hsM[i].giatri > rb.hsM[posOfMaxDelta].giatri || (rb.hsM[i].giatri === rb.hsM[posOfMaxDelta].giatri && rb.rb[rb.m][posOfMaxDelta].giatri < rb.rb[rb.m][i].giatri)) {
      posOfMaxDelta = i
    }
  }
  return posOfMaxDelta
}

function checkAlNegative (rb, delta) {
  for (let i = 0; i < delta.length; i++) {
    let negative = 0
    for (let j = 0; j < rb.m; j++) {
      if (rb.rb[j][delta[i]].giatri <= 0) {
        ++negative
      }
    }
    if (negative === rb.m) {
      return false
    }
  }
  return true
}

function checkDelta (rb) {
  let pa_tu = 1
  const delta = []
  for (let i = 0; i < rb.n; i++) {
    if (rb.hsM[i].giatri > 0 || (!rb.hsM[i].giatri && rb.rb[rb.m][i].giatri > 0)) {
      pa_tu = 0
      delta.push(i)
    }
  }
  if (pa_tu) {
    return 1
  } else if (!checkAlNegative(rb, delta)) {
    return 0
  }
  return 2
}

function addBase (rb) {
  const hs = []
  for (let i = 0; i < rb.m; i++) {
    hs[i] = -1
    if (rb.d[i] === '>=') {
      rb.subVar.push(i)
      rb.rb[i][rb.n++] = new PhanSo(parseFloat(-1))
    } else if (rb.d[i] === '<=') {
      rb.subVar.push(i)
      rb.rb[i][rb.n++] = new PhanSo(parseFloat(1))
    }
  }
  rb = setrb(rb)
  let varbase = 0
  // Tìm ẩn cơ sở
  for (let i = 0; i < rb.n; i++) {
    let cnt_one = 0; let cnt_zero = 0
    let posj = 0
    for (let j = 0; j < rb.m; j++) {
      if (rb.rb[j][i].giatri === 1) {
        posj = j
        ++cnt_one
      } else if (rb.rb[j][i].giatri === 0) {
        ++cnt_zero
      }
    }

    if (cnt_one === 1 && cnt_zero === rb.m - 1) {
      hs[posj] = i
      varbase += 1
    }
  }
  if (varbase < rb.m) {
    for (let i = 0; i < rb.m; i++) {
      if (hs[i] === -1) {
        rb.fakeVar.push(rb.n)
        rb.fx[rb.n] = new PhanSo(parseFloat(99999999))
        hs[i] = rb.n
        rb.rb[i][rb.n++] = new PhanSo(parseFloat(1))
      }
    }
  }
  rb = setrb(rb)
  return hs
}

function findMin (rb, posOfMaxDelta) {
  let minlet = parseFloat(10000)
  let posOfMin = 0
  for (let j = 0; j < rb.m; j++) {
    if (rb.rb[j][posOfMaxDelta].giatri > 0) {
      if (rb.pa[j].giatri / rb.rb[j][posOfMaxDelta].giatri < minlet) {
        minlet = rb.pa[j].giatri / rb.rb[j][posOfMaxDelta].giatri
        posOfMin = j
      }
    }
  }
  return posOfMin
}

function calculateFx (x, rb) {
  let pa_result = new PhanSo()
  for (let i = 0; i < rb.orginN; i++) {
    pa_result = Sum(pa_result, Multi(rb.fx[i], x[i]))
  }
  pa_result.RutGon()
  return pa_result
}

function Savesol (hs, lp, posOfMaxDelta, posOfMinVar, checkDeltaNow) {
  const res = []
  for (let i = 0; i < lp.m + 1; i++) {
    const tmp = []
    if (i < lp.m) {
      if (lp.fx[hs[i]].giatri !== 99999999) {
        tmp.push(lp.fx[hs[i]].giatri)
      } else {
        tmp.push('M')
      }

      tmp.push(hs[i] + 1)
      // tmp.push(lp.pa[i].tu.toString() + '/' + lp.pa[i].mau.toString())
      tmp.push(lp.pa[i].Xuat)
    }
    if (i === lp.m) {
      for (let j = 0; j < lp.n; j++) {
        let s = ''
        if (lp.hsM[j].giatri === 0) {
          s = lp.rb[i][j].Xuat
          if (j === posOfMaxDelta) { s = '(' + s + ')' }
          tmp.push(s)
          continue
        } else if (lp.hsM[j].giatri === 1) {
          s = 'M'
        } else if (lp.hsM[j].giatri === -1) {
          s = '-M'
        } else if (lp.hsM[j].giatri !== 0) {
          s = lp.hsM[j].Xuat + 'M'
        }
        if (lp.hsM[j].giatri !== 0 && lp.rb[i][j].giatri === 0) {
          if (j === posOfMaxDelta) { s = '(' + s + ')' }
          tmp.push(s)
          continue
        }
        s += (lp.rb[i][j].giatri < 0 ? '-' : '+')
        s += lp.rb[i][j].Xuat_duong
        if (posOfMaxDelta !== -1 && j === posOfMaxDelta) { s = '(' + s + ')' }
        tmp.push(s)
      }
    } else {
      for (let j = 0; j < lp.n; j++) {
        // tmp.push(lp.rb[i][j].tu.toString() + '/' + lp.rb[i][j].mau.toString())
        let s = lp.rb[i][j].Xuat
        if (((posOfMaxDelta !== -1 && i === posOfMinVar) || checkDeltaNow === 0) && j === posOfMaxDelta) { s = '[' + s + ']' }
        tmp.push(s)
      }
    }
    res.push(tmp)
  }
  return res
}

function print (hs, fxType, lp) {
  const x = []
  for (let i = 0; i < lp.n; i++) {
    x[i] = new PhanSo()
  }
  for (let i = 0; i < lp.m; i++) {
    x[hs[i]].tu = lp.pa[i].tu
    x[hs[i]].mau = lp.pa[i].mau
  }

  // for (let i = 0; i < lp.fakeVar.length; i++) {
  //   if (x[lp.fakeVar[i]].giatri !== 0) {
  //     return failed
  //   }
  // }
  for (let i = 0; i < lp.n; i++) {
    if (lp.rbdau[i] === -1) { x[i].tu *= -1; lp.fx[i].tu *= -1 }
  }

  const res = { success: true, result: { fx: 0, x: [] } }
  let pa_result = calculateFx(x, lp)

  if (lp.type === 'max') {
    for (let i = 0; i < lp.n; i++) {
      lp.fx[i].tu *= -1
    }
    pa_result.tu *= -1
  }

  if (lp.freeVar.length !== 0) {
    for (let i = 0; i < lp.freeVar.length; i++) {
      pa_result = Sum(pa_result, Multi(lp.fx[lp.freeVar[i]], x[lp.freeVar[i]]))
    }
  }
  // res.result.fx = pa_result.tu.toString() + '/' + pa_result.mau.toString()
  res.result.fx = pa_result.Xuat
  // let s = pa_result.tu.toString() + '/' + pa_result.mau.toString() + '<br>'
  for (let i = 0; i < lp.n; i++) {
    // res.result.x.push(x[i].tu.toString() + '/' + x[i].mau.toString())
    res.result.x.push(x[i].Xuat)
    // s = s + x[i].tu.toString() + '/' + x[i].mau.toString() + ' '
  }
  return res
}

function processing (paramFx, paramMatrix, paramRB, paramFxType) {
  let rb = input(paramFx, paramMatrix, paramRB, paramFxType)
  rb = setMatrix(rb)
  const hs = addBase(rb)
  const allS = []
  const mp = []
  let s = ''
  for (let i = 0; i < rb.m; i++) { s = s + hs[i].toString() }
  if (mp[s] === undefined) { mp[s] = 0 }
  mp[s] += 1
  const res = { nX: rb.n, nLine: rb.m, steps: [], answer: {} }
  while (true) {
    let posOfMaxDelta = calculateDelta(rb, hs)
    let posOfMinVar = findMin(rb, posOfMaxDelta)
    s = ''
    for (let i = 0; i < rb.m; i++) {
      if (i === posOfMinVar) {
        s = s + (posOfMaxDelta).toString()
      } else {
        s = s + hs[i].toString()
      }
    }
    if (mp[s] === undefined) { mp[s] = 0 }
    mp[s] += 1
    if (mp[s] !== 1) {
      posOfMaxDelta = 0
      for (let i = 0; i < rb.n; ++i) {
        if ((rb.hsM[i].giatri < rb.hsM[posOfMaxDelta].giatri) || (rb.hsM[i].giatri === rb.hsM[posOfMaxDelta].giatri && rb.rb[rb.m][posOfMaxDelta].giatri > rb.rb[rb.m][i].giatri && rb.rb[rb.m][i].giatri > 0)) {
          posOfMaxDelta = i
        }
      }
      posOfMinVar = findMin(rb, posOfMaxDelta)
    }
    const checkDeltaNow = checkDelta(rb)
    if (checkDeltaNow === 1) {
      posOfMaxDelta = -1
    }
    allS.push(Savesol(hs, rb, posOfMaxDelta, posOfMinVar, checkDeltaNow))
    if (checkDeltaNow === 0) {
      res.steps = allS
      res.answer = false
      return res
    } else if (checkDeltaNow === 1) {
      res.steps = allS
      res.answer = print(hs, paramFxType, rb)
      return res
    }
    if (posOfMaxDelta !== -1) { hs[posOfMinVar] = posOfMaxDelta }
    const minValue = rb.rb[posOfMinVar][posOfMaxDelta]
    for (let i = 0; i < rb.m; i++) {
      if (i !== posOfMinVar) {
        rb.pa[i] = Div(Sub(Multi(rb.pa[i], minValue), Multi(rb.pa[posOfMinVar], rb.rb[i][posOfMaxDelta])), minValue)
        for (let j = 0; j < rb.n; j++) {
          if (j !== posOfMaxDelta) {
            rb.rb[i][j] = Div(Sub(Multi(rb.rb[i][j], minValue), Multi(rb.rb[posOfMinVar][j], rb.rb[i][posOfMaxDelta])), minValue)
          }
        }
      }
    }

    for (let i = 0; i < rb.m; i++) {
      if (i !== posOfMinVar) {
        rb.rb[i][posOfMaxDelta].init()
      }
    }
    rb.pa[posOfMinVar] = Div(rb.pa[posOfMinVar], rb.rb[posOfMinVar][posOfMaxDelta])
    for (let i = 0; i < rb.n; ++i) {
      rb.rb[posOfMinVar][i] = Div(rb.rb[posOfMinVar][i], minValue)
    }
  }
}

export default processing
