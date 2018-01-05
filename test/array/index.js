export default `
option = {

    // 生成一个随机数组
    array: [{
    	// 最少1
    	min: 1,
    	// 最多3
    	max: 3,
    	// 返回的是字符串
    	data: '1-10|zh-CN'
    }],

    // 
    array3: [{
    	// 最少3 （最多也是3）
    	min: 3,
    	// 返回的是对象
    	data: {
	    	user: '3-10'
    	}
    }],

    // 生成一个二维数组
    array4: [{
    	min: 1,
    	max: 10,
    	data: [{
    		min: 1,
    		max: 2,
    		data: '1-10|zh-CN'
    	}]
    }],

    // 生成一个多维数组
    array5: [{
        min: 1,
        max: 10,
        data: [{
            min: 2,
            data: [{
                min: 3,
                data: '1-10'
            }]
        }]
    }],
};
`