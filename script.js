var myTextArea = document.getElementById('main-input')
var myCodeMirror = CodeMirror.fromTextArea(myTextArea, {
  value: 'this is the starting value',
  viewportMargin: Infinity
})

$('#render-button').click(function(e) {
  e.preventDefault()
})

