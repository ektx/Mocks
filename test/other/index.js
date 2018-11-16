export default `
/*
	其它 API
	一些简单的 API 示例
*/
option = {
	// 布尔值
	boolean: {
		type: 'boolean',
		// true 的概率为 50%
		data: 0.5
	},

	/* 
		时间
		得到当前时间，格式为：年-朋-日 时:分:秒
	*/
	datetime1: {
		type: 'datetime',
		data: 'YYYY-MM-DD hh:mm:ss'
	},

	/* 
		时间
		得到指定时间，格式为：年-朋-日 时:分:秒
	*/
	datetime2: {
		type: 'datetime',
		data: 'YYYY-MM-DD',
		time: '2018-1-1'
	},

	/**
	 * 生成一个 email
	 */
	email: {
		type: 'email',
		// data 可以省略，省略时内容为：mocks.com
		data: 'hello.com'
	},

	/**
	 * image
	 * 生成一个图片
	 */
	image: {
		type: 'image',
		// 以下为默认设置，你可以修改其中一项或多项
		data: {
			width: 100,
			height: 80,
			text: '',
			bgColor: '06f',
			textColor: 'fff'
		}
	},

	/**
	 * phone
	 * 生成手机号码
	 */
	phone: {
		type: 'phone',
		data: {
			// International 国际字冠 默认无
			// true => +,可以添加,如：'00'
			int: false,
			// 国家代码 true 时为自动添加本地
			country: false,
			// 手机号模糊处理
			privacy: false
		}
	}
}



`