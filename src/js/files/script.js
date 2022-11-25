// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Таби в блоці "Сhoise"
const tabsButton = document.querySelectorAll('.tabs__title');
const tabsBox = document.querySelectorAll('.tabs__box');

tabsButton.forEach(function (item) {
	item.addEventListener('click', function () {
		let dataId = item.getAttribute('data-tab');
		let tabsContent = document.querySelector(dataId);

		if (!item.classList.contains('active')) {
			tabsBox.forEach(function (item) {
				item.classList.remove('active')
			});

			tabsButton.forEach(function (item) {
				item.classList.remove('active')
			});

			tabsContent.classList.add('active');
			item.classList.add('active');
		}
	});
});

document.querySelector('.tabs__title').click();

// Анімація почергового повороту зображень в блоці "Аdvantages"
export function animateAdvantagesImg() {
	const advantagesImg = document.querySelectorAll('.advantages__img');
	let time = 0;
	for (let i = 0; i <= advantagesImg.length; i++) {
		advantagesImg[i].style = `animation-delay: ${time}s`;
		time += 0.5;
	}
}
