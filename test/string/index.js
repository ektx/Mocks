export default `
/*
	string
	字符串生成格式
*/

option = {
    
    // 简单模式
    // 生成随机 1-10 个字符
    hello: '1-10',

    // 简单模式
    // 生成中文 1-10 个字
    name: '1-10|zh-CN',
    
    // 高级模式
    // 生成指定的数据中一个
    year: {
    	type: 'string',
    	data: [2016, 2017, 2018, 2019]
    },

    // 高级模式
    // 生成随机 1-10 个字符
    hello2: {
    	type: 'string',
    	data: '1-10'
    },

    // 中国百家姓
    // 生成一个中国百家姓，名字长度1-2
    name: {
        type: 'string',
        data: '1-2|CNBJX'
    },

    // 取一个姓在中国百家姓中
    name: {
        type: 'string',
        data: '0|CNBJX'
    },
};
`