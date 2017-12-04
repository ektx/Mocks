
import base from './core/base.js'
import string from './core/string.js'
import number from './core/number.js'
import email from './core/email.js'


export default class Mock {
	constructor (option) {
		this.option = option

		this.string = string
		this.number = number
		this.boolean = base.boolean
		this.email = email

		return this.init()
	}

	loopObj (obj) {

		let result

		switch (typeof obj) {
			case 'string':
				console.warn('String');
				result = this.string( obj )
				break;

			case 'object':

				if (Array.isArray(obj)) {
					console.log('Array')
				} else {
					
					result = {}

					for (let [key, val] of Object.entries(obj)) {

						let rules = key.split('|')
						let type = rules[0]
						let name = rules[1] || 'PLACEHOLDER_VAL'

						switch (type) {

							case 'array':
								result[name] = []

								let range = rules[2].split('-')
								let size = base.integer(range[0], range[1])

								for (let i = 0; i < size; i++) {
									result[name].push( this.loopObj(val) )
								}

								break;

							case 'object':
								result[name] = {}
								result[name] = Object.assign({}, this.loopObj(val))
								break;

							default:
								result[name] = this[type](val)
						}

						// 对于没有分隔线的规则，我们输入字符串
						if (name === 'PLACEHOLDER_VAL') {
							result = result.PLACEHOLDER_VAL
						}

					}
					
				}

				break;

			default:
				console.log('Dont Know!')
		}

		return result

	}

	init () {

		return this.loopObj({
			[this.option.rules]: this.option.tem
		}).tem
	}
}

