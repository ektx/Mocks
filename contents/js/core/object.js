
import base from './base.js'
import string from './string.js'
import number from './number.js'
import email from './email.js'
import color from './color.js'
import array from './array.js'
import boolean from './boolean.js'
import datetime from './dateTime.js'

function objFun (json) {

		let result = ''

	if (base.typeof(json) === 'array') {
	
		result = array(json)
	
	} else {

		result = {}

		for (let [key, val] of Object.entries(json)) {

			switch (base.typeof(val)) {
				case 'string':
					result[key] = string(val)
					break;

				case 'array':
					result[key] = array(val)
					break;

				case 'number':
					result[key] = number(val)
					break;

				case 'object':

					if (val.hasOwnProperty('type') && base.typeof(val.type) === 'string') {
						switch (val.type) {
							case 'string':
								result[key] = string(val.data)
								break;

							case 'number':
								result[key] = number(val)
								break;

							case 'boolean':
								result[key] = boolean(val.data)
								break;

							case 'datetime':
								result[key] = datetime(val.data, val.time);
								break;
						}
					} else {
						result[key] = objFun(val)
					}

					break;
			}
		}

	}

	return result
}

export default objFun