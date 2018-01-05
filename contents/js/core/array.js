
import base from './base.js'
import string from './string.js'
import object from './object.js'

function arrayFun(rules) {

	rules = rules[0]

	let result = []
	let tem
	let min = rules.min || 0
	let max = rules.max || min
	let size = base.integer(min, max)

	for (let i = 0; i < size; i++) {
		switch (base.typeof(rules.data)) {
			case 'string':
				tem = string(rules.data)
				break;

			case 'array':
				tem = arrayFun(rules.data)
				break

			case 'object':
				tem = object(rules.data)
				break;
		}
		
		result.push( tem )
	}

	return result
}

export default arrayFun