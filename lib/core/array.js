import base from './base.js'
import object from './object.js'

function arr(rules) {
	let min = rules.min || 0
	let max = rules.max || min
	let size = base.integer(min, max)
	let l = rules.data.length -1
	let result = []

	for (let i = 0; i < size; i++) {
		let tem = rules.data[base.integer(0, l)]

		if (typeof tem === 'object') {
			// 如果 tem 是数组直接返回，是对象，我们继续生成
			result.push(Array.isArray(tem) ? tem : object(tem))
		} else {
			result.push(tem)
		}
	}

	return result
}

export default arr

