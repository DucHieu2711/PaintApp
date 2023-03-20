var colorEl = document.querySelector('#color');
var saveEl = document.querySelector('#save');
var undoEl = document.querySelector('#undo');
var clearEl = document.querySelector('#clear');
var penEl = document.querySelector('#pen');
var brushEl = document.querySelector('#brush');
var circleEl = document.querySelector('#circle');
var fillEl = document.querySelector('#fill');
var sizeEl = document.querySelector('#size');
var earaserEl = document.querySelector('#earaser');
var canvas = document.querySelector('#myCanvas');
var context = canvas.getContext('2d');

let size = 1
let isPressed = false
let color = colorEl.value
let x, y
let flash = false
canvas.addEventListener('mousedown', (e) => {
	isPressed = true

	x = e.offsetX
	y = e.offsetY
})

document.addEventListener('mouseup', (e) => {
	isPressed = false

	x = undefined
	y = undefined
})
function DrawPen(){
canvas.addEventListener('mousemove', (e) => {
	if (isPressed) {
		const x2 = e.offsetX
		const y2 = e.offsetY
		drawCircle(x2, y2)
		drawLine(x, y, x2, y2)
		x = x2
		y = y2
	}
})
}

penEl.addEventListener('click',function(){
	DrawPen();
	size = sizeEl.value
})

circleEl.addEventListener('click',function(){
	drawcircle();
})

brushEl.addEventListener('click',function(){
	DrawPen();
	size = 15
})

function drawcircle(x, y) {
	context.beginPath()
	context.arc(x, y, size, 0, Math.PI * 2)
	context.fillStyle = color
	context.fill()
	if(flash)
	{
		context.beginPath()
		context.arc(x, y, size, 0, Math.PI * 2)
		context.fillStyle = 'black'
		context.fill()
	}
	else
	{
		context.beginPath()
		context.arc(x, y, size, 0, Math.PI * 2)
		context.fillStyle = color
		context.fill()
	}

}

function drawCircle(x, y) {
	context.beginPath()
	context.arc(x, y, size, 0, Math.PI * 2)
	context.fillStyle = color
	context.fill()
}

function drawLine(x1, y1, x2, y2) {
	context.beginPath()
	context.moveTo(x1, y1)
	context.lineTo(x2, y2)
	context.lineWidth = size * 2
	context.stroke()
	context.strokeStyle = color;
}

colorEl.addEventListener('change', (e) => (color = e.target.value))

earaserEl.addEventListener('click', () => {
	color = '#fff'
	size = 50;
})

saveEl.addEventListener('click', (e) => {
	const imageURI = canvas.toDataURL('image/png')
	e.currentTarget.href = imageURI
})


clearEl.addEventListener('click',function(){
	context.clearRect(0, 0, canvas.width, canvas.height)
	canvas.style.background = '#fff';
})

fillEl.addEventListener('click',function(){
	canvas.style.background = color;
})


