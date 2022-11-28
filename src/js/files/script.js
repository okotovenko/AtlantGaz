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

// Анімація почергового повороту зображень в блоці "Аdvantages" на розширеннях, які більше ніж 768рх
export function animateAdvantagesImg() {
	if (window.innerWidth >= 768) {
		const advantagesImg = document.querySelectorAll('.advantages__img');
		let time = 0;
		for (let i = 0; i <= advantagesImg.length; i++) {
			advantagesImg[i].style = `animation-delay: ${time}s`;
			time += 0.5;
		}
	}
};

// Видалення атрибуту data-fp-section на розширеннях, які менше ніж 700рх
const sectionDataFpSection = document.querySelectorAll("[data-fp-section]");
const sectionDataFp = document.querySelector("[data-fp]");

if (window.innerHeight < 768) {
	sectionDataFp.removeAttribute("data-fp");
	// sectionDataFp.classList.remove('slider-mode');
	sectionDataFpSection.forEach(function (item) {
		item.removeAttribute("data-fp-section");
		item.removeAttribute("data-fp-id");

		item.removeAttribute("style");
		item.classList.remove("active-section");
		item.classList.remove("next-section");
	})
}


