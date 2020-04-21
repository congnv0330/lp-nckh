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
}

export default PhanSo
