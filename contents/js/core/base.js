
export default {
	boolean: function(probability) {
		let result

		if (!isNaN(probability)) {
			result = Math.random() > 1 - probability
		} else {
			result = Boolean(Math.round(Math.random() * 2))
		}

		return result
	},
	/*
		随机生成一个整数
	*/
	integer: function(min, max) {
		min = min ? parseInt(min, 10) : 0
		max = max ? parseInt(max, 10) : min
		return Math.round(Math.random() * (max - min)) + min
	}
}