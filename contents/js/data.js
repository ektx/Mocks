
export default `
/* 
	Welcome Use Mocks!
	请点击 Go 按钮查看运行结果
	https://github.com/ektx/Mocks
*/

option = {
	// 规则
	tem: {
		// 字符串示例
		'object|string example': {
			// 默认生成英文字符串
			// 长度 1-10
			'string|default': '1-10',
			
			// 生成 1-10 个长度的中文字符串
			'string|zh-CN': '1-10|zh-CN'
		},

		// 数字示例
		'object|number example': {
			// 生成值在1到100之间的数字
			'number|default': '1-100',

			// 生成值在1到100之间的数字，保留2位小数
			'number|toFixed': '1-100|2',

			// 生成一个数字，长度在 1-10 之间
			'number|numLen': '[1-10]',

			// 生成一个数字，长度在 4-10 之间，保留 2位小数
			'number|numLenFix': '[4-10]|2'
		},

		// 布尔值示例
		'object|boolean example': {
			// 生成一个布尔值，返回true的概率为 50%
			'boolean|success': .5
		},

		// 数组示例
		'object|array example': {

			// 生成一个字符串数组
			'array|family|1-10': {
				'string': '1-10|zh-CN'
			},
			
			// 生成一个复杂数组
			'array|tel|1-10': {
				// 生成名为 title 的字符串
				// 长度在 3-10 之间的中文
				'string|title': '3-10|zh-CN',

				// 生成名为 value 的数字
				// 长度在 4-10 之间，保留 2 位小数
				'number|value': '[4-10]|2',

				// 生成名为 x 的数字
				// 取值范围在 0-100 之间
				'number|x': '0-100',
				
				// 生成名为 y 的数字，取值范围
				// 在 0-100 之间，保留 3 位小数
				'number|y': '0-100|3'
			}
		},

		// 邮箱示例
		'object|email example': {
			// 生成一个默认邮箱 
			'email|我的邮箱': '',

			// 生成一个指定名的邮箱 
			'email|gmail': 'gmail.com'
		}
	},

	// 生成 tem 模板规则的数据
	rules: 'object|tem'
};
`