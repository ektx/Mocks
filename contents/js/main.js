
import Mocks from './mocks.js'

/*
	测试
*/
import data from '../../test/string/index.js'

let option = {}
// 生成
let goBtn = document.querySelector('.go-btn')
// 复制
let copyBtn = document.getElementById('copy-result')
// 下载
let downloadBtn = document.querySelector('.download-btn')

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
goBtn.addEventListener('click', function(evt) {

	let getValue = editorMod.getValue() 
	// 获取输入内容
	option = eval( getValue )
	// 本地保存
	localStorage.option = JSON.stringify(getValue)

	setEditVal(resultMod, JSON.stringify( new Mocks(option), '', '\t' ))

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

// 设置默认值
editorMod.insert(localStorage.option ? JSON.parse(localStorage.option) : data)

goBtn.click()

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


document.querySelector('.api-mod').addEventListener('click', (evt) => {

	if (evt.target.tagName === 'A') {

		import(`../../test/${evt.target.dataset.type}/index.js`).then(data => {
			setEditVal(resultMod, data.default)
		})
		.catch(err => {
			console.error(err)
		})

		materialAni (evt.target, evt)
	}
})