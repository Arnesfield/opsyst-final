import algo from './algo'

export default function(infix) {
  infix = infix.replace(/\s*/g, '').split('')
  let res = algo(infix, 'postfix')
  return res.replace(/\s\s+/g, ' ').trim()
}
