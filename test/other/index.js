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
	}
}



`