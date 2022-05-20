const container = document.getElementById('container'),
vid = document.getElementById('vid'),
tx = document.getElementById('tx');
function rfs() {
	if (vid.requestFullscreen) {
		vid.requestFullscreen();
	} else if (vid.webkitRequestFullscreen) { 
		vid.webkitRequestFullscreen();
	} else if (vid.mozRequestFullScreen) {
		vid.mozRequestFullScreen();
	} else if (vid.msRequestFullScreen) {
		vid.msRequestFullScreen();
	}
}
function roll() {
	tx.style.display = 'none';
	container.style.display = 'flex';
	rfs();
	vid.play();
}
var listeners = ['click', 'keydown', 'keyup', 'contextmenu','selectstart', 'touchstart', 'dragstart', 'mousedown'];
listeners.forEach(evt => {
	window.addEventListener(evt, (e) => {
		e.preventDefault();
		e.stopPropagation();
		roll();
	})
})
vid.addEventListener('pause', (e) => {
	e.preventDefault();
	e.stopPropagation();
	roll();
})