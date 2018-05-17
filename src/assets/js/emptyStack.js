export default function(res, stack) {
  while (stack.length) {
    let popped = stack.pop()
    res += ' ' + popped + ' '
  }
  return {
    res: res,
    stack: stack
  }
}
