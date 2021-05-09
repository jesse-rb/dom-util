//
// Append an element to it's specified parent
// Example: {
//				elem: document.createElement('p'), parentElem: document.getElementById('some-div'),
//				textContent: 'Some text!', attrs: [['class', 'normal-text'], ['name', 'paragraph']]
//			 }
//
function appendElement(elemObj) {
	// Update text content
	if (elemObj.textContent != null) {
		elemObj.elem.textContent = elemObj.textContent;
	}
	// Update attributes
	if (elemObj.attrs != null) {
		for (var i = 0; i < elemObj.attrs.length; i++) {
			var attr = elemObj.attrs[i][0];
			var val = elemObj.attrs[i][1];
			elemObj.elem.setAttribute(attr, val);
		}
	}
	// Update parent node
	if (elemObj.parentElem != null) {
		elemObj.parentElem.appendChild(elemObj.elem);
	}
}