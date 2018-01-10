export default `
/*
    Array API
    -------------------------------
*/
option = {

    // 生成一个随机数组
    array: [
        // 返回字符串
        {
            // 最少1
            min: 1,
            // 最多3
            max: 3,
            // 返回的是字符串
            data: '1-10|zh-CN'
        },
        // 返回数字
        {
            min: 1,
            max: 5,
            data: {
                type: 'number',
                length: 11
            }
        }
    ],

    // 返回 3 个元素的数组
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
        // 最多 4 个，最少 1个一维
        min: 1,
        max: 4,
        // 要求二维数据
        data: [{
            // 2个子集的数组
            min: 2,
            data: {
                // 最多5最少3个元素
                // 并且是在给定的数组中选择
                type: 'string',
                data: [2015, 2016, 2017, 2018, 2019]
            }
        }]
    }],
};

`