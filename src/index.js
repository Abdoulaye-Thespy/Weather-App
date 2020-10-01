import { addInfo } from './town';
import { changeUnit } from './unit';

const searchBtn = document.getElementById('sbtn');


export const data = {};

async function getWeather(town) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=e099642ba8b7f8b636938fb26d4c6038&units=metric `, { mode: 'cors' });
  const weatherData = await response.json();
  console.log(weatherData);
  console.log('seperate');
  return weatherData;
}


const town = () => {
  const town = document.getElementById('inp').value;
  return town;
};

const getData = (twonWeather) => {
  data.townName = twonWeather.name;
  data.townTemp = twonWeather.main.temp;
  data.townCountry = twonWeather.sys.country;
  data.townDesc = twonWeather.weather[0].description;
};

async function findWeather(e) {
 	e.preventDefault();
 	const towns = town();
  const twonWeather = await getWeather(towns);
  getData(twonWeather);
  console.log(data);
  addInfo(data);
  return data;
}


async function defaults() {
  const twonWeather = await getWeather('Yaounde');
  getData(twonWeather);
  addInfo(data);
}


searchBtn.addEventListener('click', findWeather);
defaults();