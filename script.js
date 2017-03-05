var myTextArea = document.getElementById('main-input')
var myCodeMirror = CodeMirror.fromTextArea(myTextArea, {
  viewportMargin: Infinity
})

$('.input-area').draggable()

$('#save-button').click(function(e) {
  e.preventDefault()

})

$('#render-button').click(function(e) {
  e.preventDefault()
  window.eval(
    myCodeMirror.getValue()
  )
})

function setup() {

}

function draw() {
  ellipse(50, 50, 80, 80);
}