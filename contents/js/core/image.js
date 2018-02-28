
export default function image (options) {

    let defaultOption = {
        width: 8,
        height: 8,
        text: '',
        bgColor: '#fff',
        textColor: '#333'
    }

    options = Object.assign(defaultOption, options)

    options.text = options.text.replace(/\s+/, '+')

    return `https://dummyimage.com/${options.width}x${options.height}/${options.bgColor}/${options.textColor}.png&text=${options.text}`
    
}