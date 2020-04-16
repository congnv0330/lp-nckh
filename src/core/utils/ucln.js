export default function (x, y) {
  let tmp
  while (y !== 0) {
    tmp = x % y
    x = y
    y = tmp
  }
  return x
}
