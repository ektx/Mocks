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
            mark: '生成一个数字数组',
            data: {
                type: 'number',
                max: 100,
            }
        },
        
        // 生成二维数组
        arrAir: {
            type: 'array',
            min: 3,
            data: {
                type: 'array',
                min: 5,
                data: {
                    type: 'number',
                    max: 100
                }
            }
        },

        // 生成成绩单数组
        pro: {
            type: 'array',
            max: 4,
            min: 2,
            data: {
                type: 'object',
                data: {
                    name: {
                        type: 'string',
                        max: 2,
                        data: 'CNBJX'
                    },
                    sex:  {
                        type: 'string',
                        data: ['男','女']
                    },
                    grade: {
                        type: 'number',
                        max: 100
                    }
                }
            }
        },
        
        // 固定内容的生成
        // 生成指定数组中的内容
        array3: {
            type: 'array',
            min: 3,
            data: ['ued', 'f2e']
        },
        
        // array
        // 随机生成数组或是 'hello world'
        array4: {
            type: 'array',
            min: 2,
            data: [
                // 输出此数组
                ['ued', 'f2e'],
                // 或此字符串
                'hello world'
            ]
        },
        
        // array
        array5: {
            type: 'array',
            max: 5,
            min: 1,
            data: [
                // 生成随机数字
                {
                    type: 'number',
                    max: 100
                },
                // 直接输出
                [{
                    type: 'string',
                    max: 5
                }],
                // 直接输出
                [{
                    name: 'ektx',
                    age: 28,
                    type: 'test'
                }]
            ]
        },
        
        // Number - step+
        // 生成 2019之后的年份，最多生成5年
        increment: {
            type: 'array',
            min: 3,
            data: 2019,
            step: 1
        },
        
        // Number - step-
        // 生成到2019年的前几年，最多前5年
        decrement: {
            type: 'array',
            min: 3,
            data: 2019,
            step: -1
        },
        
        // Number
        repeatNum: {
            type: 'array',
            max: 5,
            data: 2019
        },
        
        // String - step
        // 在有 step 时，字符串会生成递增
        // 如：生成Top5 
        stepStr: {
            type: 'array',
            min: 5,
            step: 1,
            data: 'TOP.'
        },
        
        // String
        // 对于字符串直接随机生成个数
        str: {
            type: 'array',
            max: 5,
            data: 'hello'
        }
    }
};




`