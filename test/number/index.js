export default `
/*
    number API
    -------------------------------
*/
option = {
    type: 'object',
    data: {

        // 固定值 100
        number: {
            type: 'number',
            data: 100
        },
        
        // 多选择
        number2: {
            type: 'string',
            data: [100, 200]
        },
    
        // 取 0 到 100 之间的值，默认 min 为 0
        max: {
            type: 'number',
            max: 100
        },
    
        // 取 0 到 100 之间的值
        betweenMinAndMax: {
            type: 'number',
            min: 0,
            max: 100
        },
    
        // 取 0 到 100 之间的值
        // 保留 2 位小数 
        hasFixed: {
            type: 'number',
            min: 0,
            max: 100,
            toFixed: 2
        },
        
        // 生成4个长度的数字
        length: {
            type: 'number',
            length: 4
        }
    }
};

`