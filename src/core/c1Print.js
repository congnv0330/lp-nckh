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
    rb.type = 'min'
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

function addBase (rb) {
  const hs = []
  for (let i = 0; i < rb.m; i++) {
    hs[i] = -1
    if (rb.d[i] === '>=') {
      rb.subVar.push(i)
      rb.rbdau[rb.n] = 1
      rb.rb[i][rb.n++] = new PhanSo(parseFloat(-1))
    } else if (rb.d[i] === '<=') {
      rb.subVar.push(i)
      rb.rbdau[rb.n] = 1
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
        rb.rbdau[rb.n] = 1
        rb.rb[i][rb.n++] = new PhanSo(parseFloat(1))
      }
    }
  }
  rb = setrb(rb)
  return rb
}

function processing (paramFx, paramMatrix, paramRB, paramFxType) {
  let rb = input(paramFx, paramMatrix, paramRB, paramFxType)
  let res = ''
  res = '<div class="overflow-auto"><p class="text-lg font-semibold">Bài toán</p><hr class="my-4"><table class="table-auto w-full mb-5"><tr><td><strong>Dạng chính tắc</strong></td><td></td><td><strong>Dạng chuẩn</strong></td></tr><tr><td nowrap="nowrap"><strong><font color = "DodgerBlue">F(x):</font></strong>  '
  let cnt = 0
  for (let i = 0; i < rb.fx.length; i++) {
    if (rb.fx[i].giatri === 0) {
      continue
    }
    if (cnt !== 0) {
      res += (rb.fx[i].giatri > 0 ? ' + ' : ' &#8722; ')
    } else if (rb.fx[i].giatri < 0) {
      res += '&#8722;'
    }
    if (rb.fx[i].giatri !== 1 && rb.fx[i].giatri !== -1) {
      res += rb.fx[i].Xuat_duong
    }
    res += 'x<sub>' + (i + 1).toString() + '</sub>'
    cnt += 1
  }
  res += ' &rarr; <font color = "Tomato"><strong>' + rb.type + '</strong></font><br><strong>Ràng buộc:</strong>&emsp;&emsp; <table>'
  for (let i = 0; i < rb.m; i++) {
    res += '<tr>'
    let cnt = 0
    for (let j = 0; j < rb.n; j++) {
      const rbValue = rb.rb[i][j].giatri
      if (rbValue === 0) {
        res += '<td></td>'
        continue
      }
      res += '<td>'
      if (cnt !== 0) {
        res += (rbValue > 0 ? ' + ' : ' &#8722; ')
      } else if (rbValue < 0) {
        res += '&#8722;'
      }
      if (rbValue !== 1 && rbValue !== -1) {
        res += rb.rb[i][j].Xuat_duong
      }
      res += 'x<sub>' + (j + 1).toString() + '</sub></td>'
      cnt += 1
    }
    res += '<td>'
    if (rb.d[i] === '>=') {
      res += '  &ge; '
    } else if (rb.d[i] === '<=') {
      res += '  &le; '
    } else {
      res += ' = '
    }
    res += '</td><td>' + rb.pa[i].Xuat + '</td></tr>'
  }
  res += '</table><font color = "DodgerBlue"><strong>Với:</strong></font><br>'
  for (let i = 0; i < rb.n; i++) {
    if (rb.rbdau[i] === undefined) {
      res += 'x<sub>' + (i + 1).toString() + '</sub> ' + 'tùy ý'
      if (i !== rb.n - 1) {
        res += ' , '
      }
      continue
    }
    res += 'x<sub>' + (i + 1).toString() + '</sub> '
    if (rb.rbdau[i] === 1) {
      res += ' &ge; '
    } else {
      res += ' &le; '
    }
    res += '0'
    if (i !== rb.n - 1) {
      res += ' , '
    }
  }
  res += '</td>'
  rb = setMatrix(rb)
  rb = addBase(rb)
  res += '<td><font size = "25" color = "DodgerBlue">&rarr;</font></td><td nowrap="nowrap"><strong><font color = "DodgerBlue">F(x):</font></strong>  '
  cnt = 0
  for (let i = 0; i < rb.fx.length; i++) {
    if (cnt !== 0) {
      res += (rb.fx[i].giatri >= 0 ? ' + ' : ' &#8722; ')
    } else if (rb.fx[i].giatri < 0) {
      res += '&#8722;'
    }
    if (rb.fx[i].giatri !== 1 && rb.fx[i].giatri !== -1) {
      if (rb.fx[i].giatri === 99999999) {
        res += 'M'
      } else {
        res += rb.fx[i].Xuat_duong
      }
    }
    res += 'x<sub>' + (i + 1).toString() + '</sub>'
    cnt += 1
  }
  res += ' &rarr; <font color = "Tomato"><strong>' + rb.type + '</strong></font><br><strong>Ràng buộc:</strong>&emsp;&emsp; <table>'
  for (let i = 0; i < rb.m; i++) {
    res += '<tr>'
    let cnt = 0
    for (let j = 0; j < rb.n; j++) {
      const rbValue = rb.rb[i][j].giatri
      if (rbValue === 0) {
        res += '<td></td>'
        continue
      }
      res += '<td>'
      if (cnt !== 0) {
        res += (rbValue >= 0 ? ' + ' : ' &#8722; ')
      } else if (rbValue < 0) {
        res += '&#8722;'
      }
      if (rbValue !== 1 && rbValue !== -1) {
        res += rb.rb[i][j].Xuat_duong
      }
      res += 'x<sub>' + (j + 1).toString() + '</sub></td>'
      cnt += 1
    }
    res += '<td>=</td><td>' + rb.pa[i].Xuat + '</td>'
  }
  res += '</table><font color = "DodgerBlue"><strong>Với:</strong></font><br>'
  for (let i = 0; i < rb.n; i++) {
    if (rb.rbdau[i] === undefined) {
      res += 'x<sub>' + (i + 1).toString() + '</sub> ' + 'tùy ý'
      if (i !== rb.n - 1) {
        res += ' , '
      }
      continue
    }
    res += 'x<sub>' + (i + 1).toString() + '</sub> '
    if (rb.rbdau[i] === 1) {
      res += ' &ge; '
    } else {
      res += ' &le; '
    }
    res += '0'
    if (i !== rb.n - 1) {
      res += ' , '
    }
  }
  res += '</td></tr></table></div>'
  return res
}

export default processing
