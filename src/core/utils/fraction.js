import gcd from './ucln'

function formatFraction (fraction) {
  if (fraction.bottom === 1) return fraction.top
  if (fraction.bottom === -1) return fraction.top * -1
  return fraction.display
}

export function decimalToFraction (_decimal) {
  if (_decimal === parseInt(_decimal)) {
    return parseInt(_decimal)
  } else {
    var top = _decimal.toString().includes('.') ? _decimal.toString().replace(/\d+[.]/, '') : 0
    var bottom = Math.pow(10, top.toString().replace('-', '').length)
    if (_decimal >= 1) {
      top = +top + (Math.floor(_decimal) * bottom)
    } else if (_decimal <= -1) {
      top = +top + (Math.ceil(_decimal) * bottom)
    }

    var x = Math.abs(gcd(top, bottom))
    return formatFraction({
      top: (top / x),
      bottom: (bottom / x),
      display: (top / x) + '/' + (bottom / x)
    })
  }
}
