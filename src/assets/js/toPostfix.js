import algo from './infixAlgo'

export default function(infix) {
  infix = infix.replace(/\s*/g, '')
  let res = algo(infix)
  return res.replace(/\s\s+/g, ' ').trim()
}
