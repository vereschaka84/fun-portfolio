import changeBg from "./test1.js";
import changeColor from "./test2.js";

document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('button').onclick = () => {
		changeBg();
		changeColor();
	}
})