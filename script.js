var myTextArea = document.getElementById('main-input')
var myCodeMirror = CodeMirror.fromTextArea(myTextArea, {
  viewportMargin: Infinity
})

var code = `function draw() {
  ellipse(500, 50, 800, 300)
}`

if (Cookies.get('savedCode')) {
  code = Cookies.get('savedCode')
}

myCodeMirror.setValue(code)

$('.input-area').draggable({ handle: '#handle' })

$('#save-button').click(function(e) {
  e.preventDefault()
  Cookies.set('savedCode', myCodeMirror.getValue())
})

$('#render-button').click(function(e) {
  e.preventDefault()
  window.eval(
    myCodeMirror.getValue()
  )
})

function setup() {
  createCanvas(windowWidth,windowHeight)
}
