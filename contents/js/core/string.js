/*
	规则

	'min-max|lang'
	
	@min 最少出现个数，默认为 0
	@max 最大出现个数，默认等于 min
	@lang 语言，默认为英文字母,可选[zh-CN]


*/

import base from './base.js'

export default function string(option) {

	let result

	if(base.typeof(option) === 'array') {

		result = option[ base.integer(0, option.length-1) ]

	} else {
		
		let rules = option.split('|')
		let min, max

		if (rules[0]) {
			let s = rules[0].split('-')
			// 最小个数
			min = s[0]
			// 最大个数
			max = s[1]
		}

		switch (rules[1]) {
			case 'zh-CN':
				result = randomZhCN( base.integer(min, max) )
				break;

			default:
				result = randomEn( base.integer(min, max) )
		}
	}


	return result
}


/*
	随机生成中文
	--------------------------------
*/
function randomZhCN (length) {
	// 最常用的 500 个汉字 http://baike.baidu.com/view/568436.htm
	const str = '玲祝胡玉的一是在不了有和人这中大为上个国我以要他时来用们生到作地于出就分对成会可主发年动同工也能下过子说产种面而方后多定行学法所民得经十三之进着等部度家电力里如水化高自二理起小物现实加量都两体制机当使点从业本去把性好应开它合还因由其些然前外天政四日那社义事平形相全表间样与关各重新线内数正心反你明看原又么利比或但质气第向道命此变条只没结解问意建月公无系军很情者最立代想已通并提直题党程展五果料象员革位入常文总次品式活设及管特件长求老头基资边流路级少图山统接知较将组见计别她手角期根论运农指几九区强放决西被干做必战先回则任取据处队南给色光门即保治北造百规热领七海口东导器压志世金增争济阶油思术极交受联什认六共权收证改清己美再采转更单风切打白教速花带安场身车例真务具万每目至达走积示议声报斗完类八离华名确才科张信马节话米整空元况今集温传土许步群广石记需段研界拉林律叫且究观越织装影算低持音众书布复容儿须际商非验连断深难近矿千周委素技备半办青省列习响约支般史感劳便团往酸历市克何除消构府称太准精值号率族维划选标写存候毛亲快效斯院查江型眼王按格养易置派层片始却专状育厂京识适属圆包火住调满县局照参红细引听该铁价严龙飞';

	return returnStr(str, length)
}


/*
	随机生成英文
	--------------------------------
*/
function randomEn (length) {
	const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	
	return returnStr(str, length)
}


/*
	随机生成字符串
	--------------------------------
*/
function returnStr (str, size) {

	let l = str.length -1;
	let result = '';
	
	for (let i = 0; i < size; i++) {
		result += str.charAt( base.integer(0, l) )
	}

	return result;
}