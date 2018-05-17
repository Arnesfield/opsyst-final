// e.g. 1 * 1 / 2 + 2 ^ 3 - 1 * 2

import precedence from './precedence'

export default function(infix) {
  let res = '', stack = []
  infix = '(' + infix + ')'

  infix.split('').forEach(c => {
    let currPr = precedence(c)

    // if current character is not an operator
    if (currPr == 0) {
      res += ' ' + c + ' '
    } else if (c == '(') {
      stack.push(c)
    } else if (c == ')') {
      while (stack.length && stack[stack.length-1] != '(') {
        res += ' ' + stack[stack.length-1] + ' '
        stack.pop()
      }

      // remove '(' from stack
      stack.pop()
    } else if (stack.length) {
      // operator
      let top = stack[stack.length-1]
      if (precedence(top) != 0) {
        while (stack.length && precedence(c) <= precedence(stack[stack.length-1])) {
          res += ' ' + stack[stack.length-1] + ' '
          stack.pop()
        }

        // push curr op
        stack.push(c)
      }
    }
    
  })

  return res
}
