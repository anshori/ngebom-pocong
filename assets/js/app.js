// get element
var imgbomb = document.getElementById('img-bomb');
var imgpocong = document.getElementById('img-pocong');
var color = document.getElementById('color');
var area = document.getElementById('area');
var skor = document.getElementById('skor');
var ngece = document.getElementById('ngece');

// set variable
var bombTop = 0;
var bombLeft = 0;
var speed = 10;
var skorval = 0;

// random position pocong
var pocongrandomTop = Math.floor(Math.random() * 420) + 'px';
var pocongrandomLeft = Math.floor(Math.random() * 420) + 'px';
var pocongTop = parseInt(pocongrandomTop);
var pocongLeft = parseInt(pocongrandomLeft);
imgpocong.style.top = pocongrandomTop;
imgpocong.style.left = pocongrandomLeft;

// moving object with keyboard arrow keys
document.addEventListener('keydown', function (e) {
	if (e.key == 'ArrowUp') {
		bombTop -= speed;
		imgbomb.style.top = bombTop + 'px';
		if (bombTop <= 0) {
			bombTop = 0;
			imgbomb.style.top = bombTop + 'px';
		}
	} else if (e.key == 'ArrowDown') {
		bombTop += speed;
		imgbomb.style.top = bombTop + 'px';
		if (bombTop >= 450) {
			bombTop = 450;
			imgbomb.style.top = bombTop + 'px';
		}
	} else if (e.key == 'ArrowLeft') {
		bombLeft -= speed;
		imgbomb.style.left = bombLeft + 'px';
		if (bombLeft <= 0) {
			bombLeft = 0;
			imgbomb.style.left = bombLeft + 'px';
		}
	} else if (e.key == 'ArrowRight') {
		bombLeft += speed;
		imgbomb.style.left = bombLeft + 'px';
		if (bombLeft >= 450) {
			bombLeft = 450;
			imgbomb.style.left = bombLeft + 'px';
		}
	}

	// space key to change image
	if (e.key == ' ') {
		imgbomb.src = 'assets/images/explotion.png';
		// play sound
		var audio = new Audio('assets/sounds/bomb.mp3');
		audio.play();


		// Check the bomb position, there is a difference of -10px to 10px with the pocong position
		if (pocongTop - 10 <= bombTop && bombTop <= pocongTop + 10 && pocongLeft - 10 <= bombLeft && bombLeft <= pocongLeft + 10) {
			skorval += 1;
			skor.innerHTML = skorval;
		} else {
			ngece.innerHTML = 'Yee... gak kena!';
		}

		setTimeout(function () {
			// change image bomb to explotion
			imgbomb.src = 'assets/images/bomb.png';

			// random position bomb
			var bombrandomTop = Math.floor(Math.random() * 450) + 'px';
			var bombrandomLeft = Math.floor(Math.random() * 450) + 'px';
			// set bomb position to new position
			imgbomb.style.top = bombrandomTop;
			imgbomb.style.left = bombrandomLeft;

			// random position pocong
			var newpocongrandomTop = Math.floor(Math.random() * 420) + 'px';
			var newpocongrandomLeft = Math.floor(Math.random() * 420) + 'px';
			// set pocong position to new position
			imgpocong.style.top = newpocongrandomTop;
			imgpocong.style.left = newpocongrandomLeft;

			// set position to new position
			bombTop = parseInt(bombrandomTop);
			bombLeft = parseInt(bombrandomLeft);
			pocongTop = parseInt(newpocongrandomTop);
			pocongLeft = parseInt(newpocongrandomLeft);

			// set color to red
			color.style.backgroundColor = 'red';

			// remove text ngece
			ngece.innerHTML = '';
		}, 1000);

	}
	
	// check the bomb position, there is a difference of -10px to 10px with the pocong position
	if (pocongTop - 10 <= bombTop && bombTop <= pocongTop + 10 && pocongLeft - 10 <= bombLeft && bombLeft <= pocongLeft + 10) {
		// change color to green
		color.style.backgroundColor = 'green';
	} else {
		// change color to red
		color.style.backgroundColor = 'red';
	}

	// reset with r key
	if (e.key == 'r') {
		bombTop = 0;
		bombLeft = 0;
		imgbomb.style.top = bombTop + 'px';
		imgbomb.style.left = bombLeft + 'px';
		skorval = 0;
		skor.innerHTML = skorval;
		color.style.backgroundColor = 'red';
		ngece.innerHTML = '';
	}
});