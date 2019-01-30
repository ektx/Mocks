import base from './base.js'
import object from './object.js'

function arr (rules) {
	let min = rules.min || 0
	let max = rules.max || min
	let size = base.integer(min, max)

	switch (base.typeof(rules.data)) {
		case 'string':
			return setStr(rules, size)
		case 'number':
			return setNum(rules, size)
		case 'array':
			return setArr(rules, size)
		case 'object':
			return setObj(rules, size)
	}
}

export default arr

function setStr (rules, size) {
	let arr = []
	if (Reflect.has(rules, 'step')) {
		let tem = 0
		for (let i = 0; i < size; i++) {
			tem += rules.step
			arr.push(rules.data + tem)
		}
	} else {
		for (let i = 0; i < size; i++) {
			arr.push(rules.data)
		}
	}

	return arr
}

function setNum (rules, size) {
	let arr = []
	if (Reflect.has(rules, 'step')) {
		let tem = rules.data

		for (let i = 0; i < size; i++) {
			arr.push(tem)
			tem += rules.step
		}		
	} else {
		for (let i = 0; i < size; i++) {
			arr.push(rules.data)
		}
	}

	return arr
}

function setArr (rules, size) {
	let arr = []
	let l = rules.data.length -1

	for (let i = 0; i < size; i++) {
		let tem = rules.data[base.integer(0, l)]

		if (typeof tem === 'object') {
			// 如果 tem 是数组直接返回，是对象，我们继续生成
			if (Array.isArray(tem)) {
				arr.push(tem)
			} else {
				if (Reflect.has(tem, 'type')) {
					arr.push( object(tem) )
				} else {
					arr.push(tem)
				}
			}
		} else {
			arr.push(tem)
		}
	}
	return arr
}

function setObj (rules, size) {
	let arr = []
	if (Reflect.has(rules.data, 'type')) {
		for (let i = 0; i < size; i++) {
			arr.push( object(rules.data) )
		}
	} else {
		for (let i = 0; i < size; i++) {
			arr.push(rules.data)
		}
	}

	return arr
}