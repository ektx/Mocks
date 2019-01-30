export default `

/*
    Array API
    -------------------------------
*/
option = {
    type: 'object',
    data: {
        arr: {
            type: 'array',
            // 最小 2个元素
            min: 2,
            // 最多 10个元素
            max: 10,
            data: [{
                type: 'string',
                // 最长 10 个字母
                max: 10,
                // 最少 2 个字母
                min: 2
            }]
        },
        
        // 生成二维数组
        arrAir: {
            type: 'array',
            min: 3,
            data: [
                {
                    type: 'array',
                    min: 5,
                    data: [{
                        type: 'string',
                        max: 10
                    }]
                }
            ]
        },

        // 生成数组
        pro: {
            type: 'array',
            max: 4,
            min: 2,
            data: [{
                type: 'string',
                max: 10
            },{
                type: 'number',
                length: 10
            },{
                type: 'object',
                data: {
                    hello: {
                        type: 'string',
                        max: 10
                    }
                }
            }]
        },
        
        // 固定内容的生成
        // 生成指定数组中的内容
        array3: {
            type: 'array',
            min: 5,
            data: ['ued', 'f2e']
        },

        // 随机生成 数组或是 'hello world'
        array4: {
            type: 'array',
            max: 5,
            data: [
                ['ued', 'f2e'],
                'hello world'
            ]
        },
        
        // Step 示例
        // 生成 2019之后的年份，最多生成5年
        stepUp: {
            type: 'array',
            max: 5,
            step: 1,
            data: 2019
        },
        
        // 生成到2019年的前几年，最多前5年
        stepDown: {
            type: 'array',
            max: 5,
            step: -1,
            data: 2019
        },
        
        // 生成项目编号 
        stepStr: {
            type: 'array',
            min: 5,
            step: 1,
            data: 'TOP.'
        }
    }
};

`