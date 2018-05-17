// e.g. 1 * 1 / 2 + 2 ^ 3 - 1 * 2

import precedence from './precedence'
import emptyStack from './emptyStack'

export default function(infix, mode) {
  let res = '', stack = []

  infix.forEach(c => {
    let currPr = precedence(c)

    // if current character is not an operator
    if (currPr == 0) {
      res += c
    } else {
      res += ' '
      // if operator
      let operator = c
      let poppedOp = stack.pop()

      // if no operator
      if (typeof poppedOp === 'undefined') {
        stack.push(operator)
      } else {
        // if has operator
        // check difference of precedence of popped and current
        let poppedPr = precedence(poppedOp)

        if (mode == 'postfix') {
          if (poppedPr == currPr) {
            res += ' ' + poppedOp + ' '
          } else if (poppedPr < currPr) {
            stack.push(poppedOp)
          } else if (poppedPr > currPr) {
            stack.push(poppedOp)
            // pop all here then push operator
            let temp = emptyStack(res, stack)
            res = temp.res
            stack = temp.stack
          }
        } else if (mode == 'prefix') {
          if (poppedPr == currPr) {
            stack.push(poppedOp)
          } else if (poppedPr < currPr) {
            stack.push(poppedOp)
          } else if (poppedPr > currPr) {
            // write popped
            res += ' ' + poppedOp + ' '
          }
        }

        stack.push(operator)
      }
    }
  })

  // reempty stack
  if (mode == 'prefix') {
    console.warn(stack)
  }

  let temp = emptyStack(res, stack)
  res = temp.res
  stack = temp.stack

  return res
}
