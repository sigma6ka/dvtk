// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function sliderMainScreen() {
  const sliderMainScreen = new Swiper(".main-screen-slider__swiper", {
    modules: [Navigation, Pagination],

    // Default parameters
    slidesPerView: 1,

    // If we need pagination
    pagination: {
      el: ".main-screen-slider-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".main-screen-slider-button-next",
      prevEl: ".main-screen-slider-button-prev",
    },
  });
}

export default sliderMainScreen;
