
/*
	规则

	'number|key': '[minLen - maxLen]|toFixed'
	'number|key': 'minVal - maxVal|toFixed'

	@key 返回字段，用于返回的关键字
	@minLen 最小长度
	@maxLen 最大长度
	@minVal 最小值
	@maxVal 最大值
	@toFixed 保留几位小数

	示例：

	{
		'number|val': '[5-10]|2'
	}

	// => { val: 2.13 } or { val: 1.08 }
*/

import base from './base.js'

export default function (option) {

	let result = '';
	let rules = option.split('|')
	let range = rules[0]
	let toFixed = parseInt(rules[1]) || 0

	let loop = function(l) {
		let r = '';
		for (let i = 0; i < l; i++) {
			r += base.integer(0, 9)
		}
		return r
	}

	if (option.includes('[')) {
		let sizeRange = option.slice(1,-1).split('-')
		let len = base.integer(sizeRange[0], sizeRange[1])

		if (toFixed && toFixed + 2 > sizeRange[0]) {
			return `ERR: 规则最短要 ${toFixed + 2}`
		}
		
		// 第一和最后一位不能是0
		result = base.integer(1,9) + loop(len -2) + base.integer(1,9)

		result = result.split('')
		result.splice(len - toFixed -1, 1, '.')
		result = result.join('')
	
	} else {

		let valRange = range.split('-')
		let minVal = parseFloat(valRange[0])
		let maxVal = parseFloat(valRange[1])

		result = base.integer(minVal, maxVal)

		result = parseFloat(result - Math.random()).toFixed(toFixed)

	}

	return parseFloat(result)
}