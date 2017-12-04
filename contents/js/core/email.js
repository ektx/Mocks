
import string from './string.js'
import number from './number.js'

export default function(str) {
	return string('0-10') + number('[1-5]') +'@'+ (str ? str : 'mocks.com')
}