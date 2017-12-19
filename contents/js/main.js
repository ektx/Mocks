
import Mocks from './mocks.js'
import data from './data.js'

let option = {}
// 生成
let goBtn = document.querySelector('.go-btn')
// 复制
let copyBtn = document.getElementById('copy-result')
// 下载
let downloadBtn = document.querySelector('.download-btn')
// api
let apiBtn = document.querySelector('#view-api')

let JavaScriptMode = ace.require('ace/mode/javascript').Mode
let editorMod = ace.edit('editor-mod')
let resultMod = ace.edit('result-mod')

editorMod.setShowPrintMargin(false)
resultMod.setShowPrintMargin(false)

editorMod.$blockScrolling = Infinity
resultMod.$blockScrolling = Infinity


editorMod.session.setMode(new JavaScriptMode())
resultMod.session.setMode(new JavaScriptMode())

// 生成数据
goBtn.addEventListener('click', function() {
	let getValue = editorMod.getValue() 
	// 获取输入内容
	option = eval( getValue )

	setEditVal(resultMod, JSON.stringify( new Mocks(option), '', '\t' ))
}, false)

downloadBtn.addEventListener('click', function(){
	let name = window.prompt('文件保存为:')

	if (name) {
		let file = new File([resultMod.getValue()], name + '.json', {type: "text/plain;charset=utf-8"})
		saveAs(file)
	}
})

let clipEvt = new Clipboard('#copy-result', {
	text: function() {
		return resultMod.getValue()
	}
})

clipEvt.on('success', function(e) {
	copyBtn.classList.add('copied')

	setTimeout(function() {
		copyBtn.classList.toggle('copied')
	}, 2000)
})

editorMod.insert(data)

goBtn.click()

apiBtn.addEventListener('click', function() {
	setEditVal(resultMod, data)
})

/* 设置编辑器内容 */
function setEditVal(el, data) {
	// 清空旧数据
	el.setValue('')

	// 添加新数据
	el.insert(data)
}