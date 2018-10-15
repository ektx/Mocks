/**
 * 国际字冠+国家代码+地区代码(区号)+电话号码
 * International prefix + country code + area code (area code) + phone number
 * @param {objetc} obj 
 * @param {boolean} int 国际字冠
 * @param {boolean} cc 国家代码
 * @param {boolean} privacy 安全，区号是否为加 ****
 */
export default function (obj) {
    console.log(obj)
    let result = ''

    if (obj.int) {
        let _int = defaultCountryCode[obj.cc || navigator.language]

        if (_int) {
            result = '+' + _int
        }
    }

    return result
}

// 国际电话区号：http://www.renrencall.com/rebtel-sign-up/international-call-format/
//各国语言缩写：https://www.jianshu.com/p/99acd1bad729
const defaultCountryCode = {
    // 中国大陆
    'zh-CN': '86',
    // 阿尔巴尼亚
    'sq': '355',
    // 美国
    'en-US': '1',
    // 英国
    'en': '44',
    // 法国
    'fr': '33',
    // 日本
    'ja': '81',
    // 韩国
    'ko': '82',
    // 俄罗斯
    'be': '7',
    // 泰国
    'th': '66',
    // 加拿大
    'en-CA': '1'
}