
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

export default function (rules) {
	let result = 0

	if (base.typeof(rules) === 'number') {
		result = rules
	} else {

		if ('length' in rules) {
			result = numLength(rules)
		} else {
			result = minAndMax (rules)
		}

	}

	return result
}


function minAndMax (rules) {
	let result = 0

	if ('min' in rules) {
		if (!('max' in rules)) {
			return '请输入 max 的值'
		} else {
			result = base.integer(rules.min, rules.max)				
		}
	} else {
		if ('max' in rules) {
			result = base.integer(rules.min, rules.max)	
		}
	}

	if ('toFixed' in rules) {
		result = parseFloat(result - Math.random()).toFixed( rules.toFixed )
	}

	return parseFloat(result)	
}

function numLength (rules) {
	let result = ''
	let length = rules.length
	let startL = rules.start ? rules.start.length : 0
	let endL   = rules.end   ? rules.end.length   : 0

	if ('include' in rules && rules.include) {
		length = length - startL - endL
	}

	if (length < 0) {
		return '长度要大于 0'
	}

	for (let i = 0; i < length; i++) {
		result += base.integer(0, 9)
	}

	if (result.startsWith(0)) {
		result = base.integer(1, 9) + result.substr(1)
	}

	if (startL) {
		result = rules.start + result
	}

	if (endL) {
		result += rules.end
	}

	return parseFloat(result)
}