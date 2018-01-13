export default `
/*
    number API
    -------------------------------
*/
option = {

    // 固定值 100
    number: 100,

    // 错误参数，没有 max（最大值范围）
    errorNu: {
        type: 'number',
        min: 0
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

    // 取一个数字，长度为 11 位
    length: {
        type: 'number',
        length: 11,
    },

    // 取一个数字，长度为 11 位
    // 开头是 86
    // 结束为 110
    lengthPro: {
        type: 'number',
        length: 11,
        start: '86',
        end: '110',
        include: true
    },

    // 取一个数字，长度为 11 位
    lengthProToFixed: {
        type: 'number',
        length: 11,
        // 开头是 86
        start: '86',
        // 结束为 119
        end: '119',
        // 保留 4 位小数
        toFixed: 4,
        include: true
    },

    // 取一个数字，中间长度为 11 位 
    // 开头是 86
    // 结束为 110
    lengthPro2: {
        type: 'number',
        length: 11,
        start: '86',
        end: '110',
        include: false
    }
};
`