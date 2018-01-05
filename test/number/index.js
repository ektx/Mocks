export default `
option = {
    number: 100,

    errorNu: {
        type: 'number',
        min: 0
    },

    max: {
        type: 'number',
        max: 100
    },

    betweenMinAndMax: {
        type: 'number',
        min: 0,
        max: 100
    },

    hasFixed: {
        type: 'number',
        min: 0,
        max: 100,
        toFixed: 2
    },

    length: {
        type: 'number',
        length: 11,
    },

    lengthPro: {
        type: 'number',
        length: 11,
        start: '+86',
        end: '110',
        include: true
    },

    lengthPro2: {
        type: 'number',
        length: 11,
        start: '+86',
        end: '110',
        include: false
    }
};
`