import algo from './algo'

export default function(infix) {
  infix = infix.replace(/\s*/g, '').split('').reverse()

  // convert ( ) to vice versa
  for (let i = 0; i < infix.length; i++) {
    if (infix[i] == '(') {
      infix[i] = ')'
      i++
    } else if (infix[i] == ')') {
      infix[i] = '('
      i++
    }
  }

  let res = algo(infix.join(''))
  return res.split('').reverse().join('').replace(/\s\s+/g, ' ').trim()
}
