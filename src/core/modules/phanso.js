/* eslint-disable camelcase */

import UCLN from '@/core/utils/ucln'

class PhanSo {
  constructor (tu = 0, mau = 1) {
    this.tu = tu
    this.mau = mau
  }

  init () {
    this.tu = 0
    this.mau = 1
  }

  get giatri () {
    return this.tu / this.mau
  }

  RutGon () {
    const ucln = UCLN(this.tu, this.mau)
    this.tu /= ucln
    this.mau /= ucln
  }

  get Xuat () {
    let s = ''

    if (this.tu / this.mau === 0) {
      return '0'
    }

    if (this.tu / this.mau < 0) {
      s += '-'
    }

    s += (Math.abs(this.tu)).toString()

    if (this.mau !== 1) {
      s += '/' + (Math.abs(this.mau)).toString()
    }

    return s
  }

  get Xuat_duong () {
    let s = ''

    if (this.tu / this.mau === 0) {
      return '0'
    }

    s += (Math.abs(this.tu)).toString()

    if (this.mau !== 1) {
      s += '/' + (Math.abs(this.mau)).toString()
    }

    return s
  }
}

export default PhanSo
