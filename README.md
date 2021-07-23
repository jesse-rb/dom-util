# javascript-dom-util
These are a few utility functions to help make some vanilla Javascript code more concise

## function appendElement

### example usage

```
exampleElement: {
  elem: document.createElement('p'), parentElem: document.getElementById('some-div'),
  textContent: 'Some text!', attrs: [['class', 'normal-text'], ['name', 'paragraph']]
}

appendElement(exampleElement);
```

### details

object to describe an element to be appended:
- `elem`: The element in question, to be appeneded
- `parentElem`: The element to use as the parent i.e. `parentElem.appendChild(elem);`
- `textContent`: The text content to be set for the element i.e. `elem.textContent = 'Some text!';`
- `attrs`: The attributes to be set for the element i.e.
```
elem.setAttribute(attrs[0][0], attrs[0][1]);
elem.setAttribute(attrs[1][0], attrs[1][1]);
...;
elem.setAttribute(attrs[n][0], attrs[n][1]);
```

### description

The appendElement function takes in a single object literal which is used to describe the element that you want to append, the element to use as the parent, text content and attributes.
