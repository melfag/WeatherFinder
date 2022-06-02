import './style.scss';
const API_Key = 'f0407e1c3816dce358fc8d4da2e09409';

const cityName = document.querySelector('.city-name');
const temp = document.querySelector('.temp');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const form = document.getElementById('btnSearch');

const info = document.querySelector('.info');

document.addEventListener('DOMContentLoaded', findWeather);

function findWeather() {
	form.addEventListener('click', (e) => {
		e.preventDefault();

		info.classList.add('info-style');
		let city_name = document.getElementById('search').value;

		fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_Key}&units=metric`, {
			mode: 'cors'
		})
			.then((response) => response.json())
			.then((content) => {
				console.log('test: ' + content.main.temp);
				cityName.textContent = content.name;
				temp.textContent = content.main.temp + ' °C';
				humidity.textContent = 'Humidity: ' + content.main.humidity + '%';
				wind.textContent = 'Wind: ' + content.wind.speed + ' MPH';
			})
			.catch((err) => {
				console.log('Error is ', err);
			});
	});
}