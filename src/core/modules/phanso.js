import UCLN from '@/core/utils/ucln'

class PhanSo {
  constructor (tu = 0, mau = 1) {
    this.tu = tu
    this.mau = mau
  }

  get giatri () {
    return this.tu / this.mau
  }

  rutGon () {
    var ucln = UCLN(this.tu, this.mau)
    this.tu /= ucln
    this.mau /= ucln
  }
}

export default PhanSo
