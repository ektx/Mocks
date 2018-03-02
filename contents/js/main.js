
import Mocks from './mocks.js'

/*
	测试
*/
import data from '../../test/string/index.js'
// 自动补全功能列表
import languageData from './languageData.js'

let option = {}
let editorMod = null;
let resultMod = null;

// 生成
let goBtn = document.querySelector('.go-btn')
// 复制
let copyBtn = document.getElementById('copy-result')
// 下载
let downloadBtn = document.querySelector('.download-btn')

require.config({
	baseUrl: 'contents',
});

require(['ace/ace', 'ace/ext/language_tools', 'js/clipboard.min'], function(ace, language, Clipboard) {

	editorMod = ace.edit('editor-mod')
	resultMod = ace.edit('result-mod')
	
	editorMod.setShowPrintMargin(false)
	resultMod.setShowPrintMargin(false)
	
	editorMod.$blockScrolling = Infinity
	resultMod.$blockScrolling = Infinity
	
	editorMod.session.setMode("ace/mode/javascript")
	resultMod.session.setMode("ace/mode/javascript")

	editorMod.setOptions({
		enableBasicAutocompletion: true,
		enableSnippets: true,
		enableLiveAutocompletion: true
	})

	language.addCompleter({
		getCompletions: function(editor, session, pos, prefix, callback) {
			callback(null, languageData)
		}
	})

	// 设置默认值
	editorMod.insert(localStorage.option ? JSON.parse(localStorage.option) : data)

	goBtn.click()

	// 快速复制功能
	let clipEvt = new Clipboard('#copy-result', {
		text: function() {
			return resultMod.getValue()
		}
	})

	// 复制完成时提示功能
	clipEvt.on('success', function(e) {
		copyBtn.classList.add('copied')

		setTimeout(function() {
			copyBtn.classList.toggle('copied')
		}, 2000)
	})
})

// 生成数据
goBtn.addEventListener('click', function(evt) {

	let getValue = editorMod.getValue() 
	let saveArr = localStorage.optionArr ?  JSON.parse(localStorage.optionArr) : []
	let getValueStr = JSON.stringify(getValue)
	// 获取输入内容
	option = eval( getValue )

	if (!saveArr.includes(getValueStr))
		saveArr.push( getValueStr )
	// 本地保存
	localStorage.option = getValueStr
	localStorage.optionArr = JSON.stringify(saveArr)

	setEditVal(resultMod, JSON.stringify( Mocks(option), '', '\t' ))

	materialAni(this, evt)
}, false)

// 保存事件
downloadBtn.addEventListener('click', function(){
	let name = window.prompt('文件保存为:')

	if (name) {
		let file = new File([resultMod.getValue()], name, {type: "text/plain;charset=utf-8"})
		saveAs(file)
	}
})

/* 设置编辑器内容 */
function setEditVal(el, data) {
	// 清空旧数据
	el.setValue('')

	// 添加新数据
	el.insert(data)
}

/*
	Google Material Animation
	-------------------------------------
*/
function materialAni (el, evt) {

	let temEl = document.createElement('span')
	temEl.classList.add('animate-tem')
	temEl.style.top = evt.offsetY + 'px'
	temEl.style.left = evt.offsetX + 'px'

	el.appendChild( temEl )

	temEl.addEventListener('animationend', function() {
		el.removeChild(this)
	}, false)
}

let historyUl = document.querySelector('.history-ul')
let optionsArr = null

document.querySelector('.api-mod').addEventListener('click', (evt) => {
	let _ = evt.target

	if (_.tagName === 'A' && _.dataset.type) {
		
		import(`../../test/${evt.target.dataset.type}/index.js`).then(data => {
			setEditVal(resultMod, data.default)
		})
		.catch(err => {
			console.error(err)
		})

		materialAni(evt.target, evt)
	}
})

// 打开历史记录
document.getElementById('historyBtn').addEventListener('click', (evt) => {
	optionsArr = JSON.parse(localStorage.optionArr)
	let _html = ''

	optionsArr.forEach((val, index) => {
		_html += `<li data-i=${index}><p>${JSON.parse(val)}</p></li>`
	})

	historyUl.innerHTML = _html
	document.querySelector('.history-mod').classList.toggle('show')
})

// 关闭历史记录
document.querySelector('.hide-history').addEventListener('click', (evt) => {
	document.querySelector('.history-mod').classList.toggle('show')
})

// 使用历史记录
historyUl.addEventListener('click', (evt)=> {
	if (evt.target.tagName === 'P') {
		let inner = optionsArr[evt.target.parentElement.dataset.i]
		console.log()
		setEditVal(editorMod, JSON.parse(inner) )
	}
})