var myTextArea = document.getElementById('main-input')
var myCodeMirror = CodeMirror.fromTextArea(myTextArea, {
  viewportMargin: Infinity
})

$('.input-area').draggable()

$('#render-button').click(function(e) {
  e.preventDefault()
  window.eval(myCodeMirror.getValue())
})
