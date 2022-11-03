const API_KEY = '14a2e8a4d572074e04d7536831be18c4';
const DEFAULT_VALUE = '...';

const searchInput = document.getElementById('search-input');
const cityName = document.getElementById('name-city');
const weatherStatus = document.getElementById('weather-status');
const iconStatus = document.getElementById('icon-status');
const temperature = document.getElementById('temperature');
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');
const humidity = document.getElementById('humidity');
const speed = document.getElementById('speed');
const button = document.getElementById('button');

button.addEventListener('click', (e) => {
  e.preventDefault();
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${API_KEY}&units=metric&lang=vi`
  ).then(async (res) => {
    const data = await res.json();
    console.log('🚀 ~ file: script.js ~ line 10 ~ ).then ~ data', data);
    cityName.innerHTML = data.name || DEFAULT_VALUE;
    weatherStatus.innerHTML = data.weather[0].description;
    iconStatus.setAttribute(
      'src',
      `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    );
    temperature.innerHTML =
      Math.round(data.main.temp) + '&#176;' || DEFAULT_VALUE;

    sunrise.innerHTML =
      moment.unix(data.sys.sunrise).format('H:mm') || DEFAULT_VALUE;
    sunset.innerHTML =
      moment.unix(data.sys.sunset).format('H:mm') || DEFAULT_VALUE;
    humidity.innerHTML = data.main.humidity + '%' || DEFAULT_VALUE;
    speed.innerHTML =
      (data.wind.speed * 3.6).toFixed(2) + 'km/h' || DEFAULT_VALUE;
    searchInput.value = '';
  });
});
