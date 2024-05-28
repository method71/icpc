import {CountUp} from './countUp.min.js';

// welcome to astana slider
(()=>{
	let section_el = document.querySelector('.s-slider'),
		slider_el = document.querySelector('.s-slider > .s-slider__list');
	
	if(slider_el) {
		let slider = new Swiper(slider_el, {
			slidesPerView: "auto",
			spaceBetween: 8,
			navigation: {
				nextEl: section_el.querySelector('.s-slider__controls-item[data-direction="next"]'),
				prevEl: section_el.querySelector('.s-slider__controls-item[data-direction="prev"]'),
			},
			breakpoints: {
				1240: {
					spaceBetween: 40
				}
			}
		});
	}
})();


// mainmenu
(()=>{
	let toggle = document.querySelector('.mainmenu__toggle'),
		overlay = document.querySelector('.mainmenu__overlay'),
		mainmenu = document.querySelector('.mainmenu');

	let toggleMenu = () => {
		mainmenu.classList.toggle('mainmenu--visible');
	}

	toggle.addEventListener('click', () => toggleMenu());
	overlay.addEventListener('click', () => toggleMenu());
})();


// video
(()=>{
	let play_button = document.querySelector('.play-button');

	if(play_button) {
		let close_button = document.querySelector('.teaser__close'),
			overlay = document.querySelector('.teaser__overlay'),
			video = document.querySelector('.teaser__video');

		let open_video = () => {
			document.querySelector('.teaser').classList.add('teaser--visible');
			video.play();
		}

		let close_video = () => {
			video.pause();
			video.currentTime = 0;
			document.querySelector('.teaser').classList.remove('teaser--visible');
		}
		
		play_button.addEventListener('click', () => open_video());
		close_button.addEventListener('click', () => close_video());
		overlay.addEventListener('click', () => close_video());
	}
})();

// stats
(()=>{
	let counters = document.querySelectorAll('.s-stats-item__value');
	if (!counters) return;

	counters.forEach(el => {
		let value = +el.dataset.value;

		let counter = new CountUp(el, value, {
			decimalPlaces: value % 1 ? 1 : 0,
			duration: 2,
			separator: '',
			enableScrollSpy: true,
		});
		counter.start();
	});
})();

// spoiler
(() => {
	let spoiler = document.querySelectorAll('.spoiler');
	if (!spoiler) return;

	spoiler.forEach(el => {
		el.querySelector('.spoiler__header').addEventListener('click', ()=>{
			el.classList.toggle('spoiler--expanded');
		});
	});
})();