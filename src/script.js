import changeBg from "./test1.js";
import changeColor from "./test2.js";

document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('button').onclick = () => {
		changeBg();
		changeColor();
	}


	let visitCount = parseInt(localStorage.getItem('visitCount')) || 0;
	let totalTime = parseInt(localStorage.getItem('totalTime')) || 0;

	// Налаштування обробника закриття вкладки
	window.addEventListener('beforeunload', function () {
		// Вираховуємо тривалість візиту з поміччю sessionStorage
		let startTime = parseInt(sessionStorage.getItem('startTime')) || 0;
		let currentTime = new Date().getTime();
		let duration = currentTime - startTime;

		totalTime += duration;

		visitCount++;
		localStorage.setItem('visitCount', visitCount);
		localStorage.setItem('totalTime', totalTime);
	});

	sessionStorage.setItem('startTime', new Date().getTime());

	console.log(`Кількість візитів: ${visitCount}`);
	let averageTime = visitCount > 0 ? Math.round(totalTime / visitCount / 1000) : 0;
	console.log(`Середня тривалість візиту: ${averageTime} сек`);


})