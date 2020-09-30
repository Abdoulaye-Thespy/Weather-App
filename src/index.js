 
const searchBtn = document.getElementById('sbtn');

  async function getWeather(town) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=e099642ba8b7f8b636938fb26d4c6038&units=metric `, {mode: 'cors'});
    const weatherData = await response.json();
     console.log(weatherData);
     console.log('seperate');
     return weatherData;
  }


const town = () => {
	const town = document.getElementById('inp').value;
	return town;
}


 async function findWeather (e) {
 	e.preventDefault()
 	const towns =town();
	const twonWeather = await getWeather(towns);

	const townName = twonWeather.name;
	const townTemp = twonWeather.main.temp;
	const townMain = twonWeather.weather[0].main;
	const townDesc = twonWeather.weather[0].description;
	console.log (townName, townTemp, townMain, townDesc);

}


searchBtn.addEventListener('click', findWeather);