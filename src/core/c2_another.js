/* eslint-disable camelcase */

import PhanSo from './modules/phanso'
// import { decimalToFraction } from './utils/fraction'

class OptimalPlan {
  constructor () {
    this.x = []
    this.optimalFx = 0
  }
}

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
  }
}

function Sum (p1, p2) { const sum = new PhanSo(); sum.tu = p1.tu * p2.mau + p2.tu * p1.mau; sum.mau = p1.mau * p2.mau; sum.RutGon(); return sum }

function Sub (p1, p2) { const sub = new PhanSo(); sub.tu = p1.tu * p2.mau - p2.tu * p1.mau; sub.mau = p1.mau * p2.mau; sub.RutGon(); return sub }

function Multi (p1, p2) { const mul = new PhanSo(); mul.tu = p1.tu * p2.tu; mul.mau = p1.mau * p2.mau; mul.RutGon(); return mul }

function Div (p1, p2) { const div = new PhanSo(); div.tu = p1.tu * p2.mau; div.mau = p1.mau * p2.tu; div.RutGon(); return div }

function inputMatrix (ipFx, ipMatrix, ipRB, rbType) {
  const orgin = new LinearProgramming()
  const fxString = ipFx.trim()
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

  const matrixrb = ipMatrix.trim()
  const matrixArr = matrixrb.split('\n')
  orgin.m = matrixArr.length
  let maxLine = 0

  let RBin = ipRB.trim()
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
    if (orgin.fx[i] === undefined) { orgin.fx[i] = new PhanSo() }
  }

  orgin.type = rbType.trim()
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

/***********************************************************/
// Thêm Line 385,386,387,388,443
// trong hàm week có xóa đoạn code dưới
// if (patuY.x.length === 0 && cntDifZero < originaLp.m){
//  cur_ex += 1
//  patuY.x[0] = new PhanSo()
// }
function printDualityOptimal (patuY, dualityLp, originaLp, differentZeroX, patuX, devirb, devival, freeX) {
  for (let i = 0; i < patuY.x.length; i++) {
    if (patuY.x[i] === undefined) {
      return '<p class="font-semibold">Không tìm được phương án tối ưu</p><hr class="my-4">'
    }
  }
  let res = '<div class="overflow-auto"><p class="text-lg font-semibold">Phương án tối ưu của bài toán đối ngẫu:</p><hr class="my-4"><table class="table-auto w-full mb-5"><tr><td nowrap="nowrap">'
  res += 'Ta có:<br>'
  for (let i = 0; i < differentZeroX.length; i++) {
    res += 'x' + '<sub>' + (differentZeroX[i] + 1).toString() + '</sub>' + ' = ' + patuX.x[differentZeroX[i]].Xuat + ' &ne; 0 &rarr; '
    let s2 = ''
    let cnt = 0
    for (let j = 0; j < dualityLp.rb[differentZeroX[i]].length; j++) {
      const dualityLpValue = dualityLp.rb[differentZeroX[i]][j].giatri
      if (dualityLpValue === 0) {
        continue
      }
      if (cnt !== 0) {
        s2 += (dualityLpValue > 0 ? ' + ' : ' - ')
      } else {
        if (dualityLpValue < 0) {
          s2 += '-'
        }
      }
      if (dualityLpValue !== 1 && dualityLpValue !== -1) {
        s2 += (dualityLp.rb[differentZeroX[i]][j].Xuat_duong).toString()
      }
      s2 += 'y<sub>' + (j + 1).toString() + '</sub>'
      cnt += 1
    }
    s2 += ' = ' + dualityLp.pa[differentZeroX[i]].Xuat + '<br>'
    res += s2
  }
  res += '<br>'
  if (devirb.length !== 0) {
    res += '\n'
    let tmps = ''
    for (let i = 0; i < devirb.length; i++) {
      tmps += '(' + (devirb[i] + 1).toString() + ')'
    }
    res += 'Thay X* vào ràng buộc ' + tmps + ' của bài toán gốc<br>'
    for (let i = 0; i < devirb.length; i++) {
      let s2 = ''; let s3 = ''
      let cnt = 0
      for (let j = 0; j < originaLp.n; j++) {
        const originaLpValue = originaLp.rb[devirb[i]][j].giatri
        if (originaLpValue === 0) {
          continue
        }
        if (cnt !== 0) {
          s2 += (originaLpValue > 0 ? ' + ' : ' - ')
          s3 += (originaLpValue > 0 ? ' + ' : ' - ')
        } else {
          if (originaLpValue < 0) {
            s2 += '-'
            s3 += '-'
          }
        }
        if (originaLpValue !== 1 && originaLpValue !== -1) {
          s2 += (originaLp.rb[devirb[i]][j].Xuat_duong).toString()
          s3 += (originaLp.rb[devirb[i]][j].Xuat_duong).toString()
        }
        s2 += 'x<sub>' + (j + 1).toString() + '</sub>'
        s3 += (originaLpValue !== 1 && originaLpValue !== 1 ? '.' : '') + (patuX.x[j].Xuat).toString()
        cnt += 1
      }
      s2 += (originaLp.pa[devirb[i]].giatri > 0 ? ' - ' : ' + ') + originaLp.pa[devirb[i]].Xuat_duong + ' = '
      s3 += (originaLp.pa[devirb[i]].giatri > 0 ? ' - ' : ' + ') + originaLp.pa[devirb[i]].Xuat_duong + ' = '
      res += s2 + s3 + devival[i].Xuat + '<br>'
    }
    res += '<br>Nên:<br>'
    for (let i = 0; i < devirb.length; i++) {
      res = res + 'y<sub>' + (devirb[i] + 1).toString() + '</sub> = 0<br>'
    }
  }
  if (freeX.length !== 0) {
    res += 'Ta lấy: '
    for (let i = 0; i < freeX.length; i++) {
      res += 'y<sub>' + (freeX[i] + 1).toString() + '</sub> = 0'
    }
  }
  res += '<br>Giải các phương trình ta được: '
  res += '<br><span class="font-semibold">Y*</span> = ('
  for (let i = 0; i < patuY.x.length; i++) {
    res += patuY.x[i].Xuat
    if (i !== dualityLp.n - 1) {
      res += ', '
    }
  }
  res += ') và <span class="font-semibold">g(Y*)</span> = '
  let pa_result = new PhanSo()
  for (let i = 0; i < dualityLp.n; i++) {
    pa_result = Sum(pa_result, Multi(dualityLp.fx[i], patuY.x[i]))
  }
  res += pa_result.Xuat + ' = <span class = "font-semibold"> f(X*)</span>'
  res += '</td></tr></table></div>'
  return res
}

function inputOpitmalPlan (ipOpitmalFx, ipOpitmalX) {
  const patu = new OptimalPlan()
  const inFX = ipOpitmalFx.trim()
  patu.optimalFx = parseFloat(inFX)
  let inX = ipOpitmalX.trim()
  inX = inX.split(' ')
  for (let i = 0; i < inX.length; i++) {
    const tmp = inX[i].split('/')
    if (tmp.length === 2) { patu.x.push(new PhanSo(parseFloat(tmp[0]), parseFloat(tmp[1]))) } else {
      patu.x.push(new PhanSo(parseFloat(tmp[0])))
    }
  }
  return patu
}

function gaussMethod (matrix, pos) {
  for (let i = 0; i < matrix.length; i++) {
    if (i !== pos) {
      const neone = new PhanSo(parseFloat(-1))
      const pivot = Multi(Div(matrix[i][pos], matrix[pos][pos]), neone)
      for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j] = Sum(matrix[i][j], Multi(matrix[pos][j], pivot))
      }
    }
  }
  return matrix
}

function findSolution (matrix) {
  // const mtx = matrix
  const lenmtx = matrix.length
  let pos = 0
  while (lenmtx > pos) {
    matrix = gaussMethod(matrix, pos)
    pos += 1
  }
  for (let i = 0; i < lenmtx; i++) {
    const pivot = matrix[i][i]
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = Div(matrix[i][j], pivot)
    }
  }
  const x = []
  for (let i = 0; i < lenmtx; i++) {
    x.push(matrix[i][matrix[i].length - 1])
  }
  return x
}

function weakCompensationDeviation (originaLp, dualityLp, ipOpitmalFx, ipOpitmalX) {
  const patuX = inputOpitmalPlan(ipOpitmalFx, ipOpitmalX)
  const patuY = new OptimalPlan()
  let cur_ex = 0
  const differentZeroX = []
  const devirb = []
  const devival = []
  const freeX = []

  for (let i = 0; i < originaLp.m; i++) {
    let devi = new PhanSo()
    for (let j = 0; j < originaLp.n; j++) {
      devi = Sum(devi, Multi(originaLp.rb[i][j], patuX.x[j]))
    }
    devi = Sub(devi, originaLp.pa[i])
    if (devi.giatri !== 0) {
      patuY.x[i] = new PhanSo()
      cur_ex += 1
      devirb.push(i)
      devival.push(devi)
    }
  }

  // let cntDifZero = 0

  for (let i = 0; i < originaLp.n; i++) {
    if (patuX.x[i].giatri !== 0) {
      differentZeroX.push(i)
      // cntDifZero += 1
    }
  }

  const matrix = []
  for (let i = 0; i < dualityLp.m; i++) {
    if (patuX.x[i].giatri !== 0) {
      const tmp = []
      for (let j = 0; j < dualityLp.n; j++) {
        if (patuY.x[j] === undefined) {
          tmp.push(dualityLp.rb[i][j])
        }
      }
      tmp.push(dualityLp.pa[i])
      matrix.push(tmp)
    }
  }
  // Because the i-th of matrix sometime unorrdered so we need to sort again
  const tmpZero = []
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j].giatri !== 0) {
        const tmp = { key: i, value: j }
        tmpZero.push(tmp)
        break
      }
    }
  }

  tmpZero.sort((a, b) => (a.value > b.value) ? 1 : -1)
  const mt = [...matrix]
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = mt[tmpZero[i].key]
  }

  // This situation happen when the number of ex not equal to the number of row
  if (matrix.length < originaLp.m - cur_ex) {
    let pos = 0
    const orLp = originaLp.m - cur_ex
    while (matrix.length < orLp) {
      freeX.push(pos)
      const l = matrix.length
      matrix[l] = []
      matrix[l][pos] = new PhanSo(parseFloat(1))
      for (let i = 0; i < matrix[0].length; i++) {
        if (i !== pos) {
          matrix[l][i] = new PhanSo(parseFloat(0))
        }
      }
      pos += 1
    }
  }

  const findEx = findSolution(matrix)
  let cnt = 0
  for (let i = 0; i < dualityLp.n; i++) {
    if (patuY.x[i] === undefined) {
      patuY.x[i] = findEx[cnt]
      cnt += 1
    }
  }
  return printDualityOptimal(patuY, dualityLp, originaLp, differentZeroX, patuX, devirb, devival, freeX)
}

function processing (ipFx, ipMatrix, ipRB, rbType, ipOpitmalFx, ipOpitmalX) {
  const orginLN = inputMatrix(ipFx, ipMatrix, ipRB, rbType)
  const dnLN = changeMatrixRb(orginLN)
  return weakCompensationDeviation(orginLN, dnLN, ipOpitmalFx, ipOpitmalX)
}

export default processing
