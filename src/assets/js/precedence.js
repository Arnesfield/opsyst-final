export default function(o) {
  switch(o) {
		case '^': return 3
		case '*': case '/': return 2
		case '+': case '-': return 1
		case '(': case ')': return -1
		default: return 0
  }
}
