export default `
/*
    Array API
    -------------------------------
*/
option = {
    type: 'object',
    data: {
        // 生成数组
        array: {
            type: 'array',
            max: 10,
            min: 5,
            data: [{
                type: 'string',
                data: '1-10'
            },{
                type: 'number',
                length: 10
            },{
                type: 'object',
                data: {
                    hello: {
                        type: 'string',
                        data: '1-10'
                    }
                }
            }]
        },
        
        // 生成二维数组
        array2: {
            type: 'array',
            min: 10,
            data: [
                {
                    type: 'array',
                    min: 5,
                    data: [{
                        type: 'string',
                        data: '1-10'
                    }]
                }
            ]
        },
        
        // 生成指定内容
        array3: {
            type: 'array',
            min: 5,
            data: ['ued', 'f2e']
        }
    }
};


`