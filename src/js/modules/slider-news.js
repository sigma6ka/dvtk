// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function sliderNews() {
	const swiperNews = new Swiper('.slider-news__swiper', {
		modules: [Navigation],

		// Default parameters
		slidesPerView: 3,
		spaceBetween: 30,

		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			// when window width is >= 480px
			920: {
				slidesPerView: 2,
				spaceBetween: 30
			},
			// when window width is >= 640px
			1500: {
				slidesPerView: 3,
				spaceBetween: 30
			}
		},
	
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next-news',
			prevEl: '.swiper-button-prev-news',
		},
	});
}

export default sliderNews;