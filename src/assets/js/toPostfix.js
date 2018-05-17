import algo from './algo'

export default function(infix) {
  infix = infix.replace(/\s*/g, '')
  let res = algo(infix)
  return res.replace(/\s\s+/g, ' ').trim()
}
