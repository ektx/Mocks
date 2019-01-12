export default `
/*
	其它 API
	一些简单的 API 示例
*/
option = {
    type: 'object',
    data: {

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
    	localDateTime: {
    		type: 'datetime',
    		data: 'YYYY-MM-DD hh:mm:ss'
    	},
    
    	/* 
    		时间
    		得到指定时间，格式为：年-朋-日 时:分:秒
    	*/
    	localDate: {
    		type: 'datetime',
    		data: 'YYYY/MM/DD',
    		time: '2018-1-1'
    	},
    	
    	localTime: {
    	    type: 'datetime',
    	    data: 'hh:mm:ss'
    	},
    	
    	email: {
    		type: 'email',
    		// data 可以省略，省略时内容为：mocks.com
    		data: 'hello.com'
    	},
    	
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
    	
    	phone: {
    		type: 'phone',
    		data: {
    			// 手机号模糊处理
    			privacy: true
    		}
    	}
    }
};


`