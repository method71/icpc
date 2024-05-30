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

// Карта (Google Maps)
(() => {
	let map, mapElement = document.getElementById("map");

	function initMap() {
		const position = { lat: 51.09353780393544, lng: 71.41753412701154 };

		const map = new google.maps.Map(mapElement, {
			zoom: 15,
			center: position,
			disableDefaultUI: true,
			styles: [
				{
					"featureType": "all",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#202c3e"
						}
					]
				},
				{
					"featureType": "all",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"gamma": 0.01
						},
						{
							"lightness": 20
						},
						{
							"weight": "1.39"
						},
						{
							"color": "#ffffff"
						}
					]
				},
				{
					"featureType": "all",
					"elementType": "labels.text.stroke",
					"stylers": [
						{
							"weight": "0.96"
						},
						{
							"saturation": "9"
						},
						{
							"visibility": "on"
						},
						{
							"color": "#000000"
						}
					]
				},
				{
					"featureType": "all",
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "geometry",
					"stylers": [
						{
							"lightness": 30
						},
						{
							"saturation": "9"
						},
						{
							"color": "#29446b"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "geometry",
					"stylers": [
						{
							"saturation": 20
						}
					]
				},
				{
					"featureType": "poi.park",
					"elementType": "geometry",
					"stylers": [
						{
							"lightness": 20
						},
						{
							"saturation": -20
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "geometry",
					"stylers": [
						{
							"lightness": 10
						},
						{
							"saturation": -30
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#193a55"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"saturation": 25
						},
						{
							"lightness": 25
						},
						{
							"weight": "0.01"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "all",
					"stylers": [
						{
							"lightness": -20
						}
					]
				}
			]
		});

		var marker1 = new google.maps.Marker({
			position: new google.maps.LatLng(51.09237258687083, 71.41140018432453),
			map: map,
			title: 'Congress Center'
		});

		var marker2 = new google.maps.Marker({
			position: new google.maps.LatLng(51.09290359119403, 71.42210347720625),
			map: map,
			title: 'Expo International Exhibition Center'
		});
	}

	if (mapElement) initMap();
})();