var myTextArea = document.getElementById('main-input')
var myCodeMirror = CodeMirror.fromTextArea(myTextArea, {
  viewportMargin: Infinity
})

var code = `var angles = [ 30, 10, 45, 35, 60, 38, 75, 67 ];

function draw() {
  background(100)
  pieChart(300, angles)

  translate(width*0.8, height*0.5);
  rotate(frameCount / -100.0);
  star(0, 0, 30, 70, 10);

  // dragSegment(0, mouseX, mouseY);
  // for(var i=0; i < x.length-1; i++) {
  //   dragSegment(i+1, x[i], y[i]);
  // }
}

function pieChart(diameter, data) {
  var lastAngle = 0;
  for (var i = 0; i < data.length; i++) {
    var gray = map(i, 0, data.length, 0, 255);
    fill(gray);
    arc(width/2, height/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i]));
    lastAngle += radians(angles[i]);
  }
}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

var x = [],
  y = [],
  segNum = 20,
  segLength = 18;

for (var i = 0; i < segNum; i++) {
  x[i] = 0;
  y[i] = 0;
}

function dragSegment(i, xin, yin) {
  var dx = xin - x[i];
  var dy = yin - y[i];
  var angle = atan2(dy, dx);
  x[i] = xin - cos(angle) * segLength;
  y[i] = yin - sin(angle) * segLength;
  segment(x[i], y[i], angle);
}

function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}
`

if (Cookies.get('savedCode')) {
  code = Cookies.get('savedCode')
}

myCodeMirror.setValue(code)

runTheCode(myCodeMirror.getValue())

$('.input-area').draggable({
  handle: '#handle',
  containment: 'parent'
})

$('#save-button').click(function(e) {
  e.preventDefault()
  Cookies.set('savedCode', myCodeMirror.getValue())
})

$('#render-button').click(function(e) {
  e.preventDefault()
  runTheCode(myCodeMirror.getValue())
})

function setup() {
  createCanvas(windowWidth,windowHeight)
}

function runTheCode(theCode) {
  window.eval(theCode)
}

// so what can the initial eval statement do?

// Something rotating
// conditional: if the rotating thing meets a condition, something else happens
// The rotating thing's angle determines the size of the star
// you can set the dimensions of the star
// Maybe have an array of dials and star objects, where