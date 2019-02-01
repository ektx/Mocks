export default `
/*
	string
	字符串生成格式
*/
option = {
    type: 'object',
    data: {
        'index':{
            type: 'string',
            data: 'No.',
            step: 1,
            start: 0
        },
        
        str: {
            type: 'string',
            max: 10,
            // 默认英文
            data: ''
        },
        
        str2: {
            type: 'string',
            data: ['ued', 'f2e']
        },
        
        姓名: {
            type: 'string',
            max: 2,
            data: 'CNBJX'
        },
        
        article: {
            type: 'string',
            min: 20,
            data: 'article'
        }
       
    }
};

`