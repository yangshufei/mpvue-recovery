export function getDpr () {
  let dpr = document.querySelector('html').getAttribute('data-dpr')
  return parseInt(dpr)
}

export function basedOnDpr (number) {
  return getDpr() * number
}

export function px2Rem (number) {
  let rem = 750 / 10
  let val = parseFloat(number) / rem
  if (typeof number === 'string' && number.match(/px$/)) {
    val += 'rem'
  }
  return val
}

export function editorFontOfDpr (str) {
  return str.replace(/font-size:\s(\d+)(?=px)/ig, (match, p) => {
    if (p === 0) {
      return 'font-size: 12px'
    }
    return 'font-size: ' + p * getDpr()
  })
}
