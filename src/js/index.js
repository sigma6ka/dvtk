// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();

// Аккордион специальностей
import accordion from './modules/accordion.js';
accordion();

// Аккордион навигации
import accordionNav from './modules/accordion-nav.js';
accordionNav();

// Слайдер новостей
import sliderNews from './modules/slider-news.js';
sliderNews();

// Слайдер главный экран
import sliderMainScreen from './modules/main-screen-slider.js';
sliderMainScreen();

// Проверка страницы
let checkBody = document.body;

// Кнопки
document.querySelectorAll('.sidebar-menu__link').forEach((el) => {
	if (checkBody.classList.contains('main-page')) {
		if (el.classList.contains('main-page')) {
			el.classList.add('_active');
		}
	} else if (checkBody.classList.contains('intelligence-page')) {
		if (el.classList.contains('intelligence-page')) {
			el.classList.add('_active');
		}
	} else if (checkBody.classList.contains('docs-page')) {
		if (el.classList.contains('docs-page')) {
			el.classList.add('_active');
		}
	}
});


