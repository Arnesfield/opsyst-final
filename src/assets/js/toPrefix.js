import algo from './algo'

export default function(infix) {
  infix = infix.replace(/\s*/g, '').split('').reverse()
  let res = algo(infix, 'prefix')
  return res.split('').reverse().join('').replace(/\s\s+/g, ' ').trim()
}
