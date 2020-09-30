  async function getWeather(town) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=e099642ba8b7f8b636938fb26d4c6038`, {mode: 'cors'});
    const weatherData = await response.json();
     console.log(weatherData);
     console.log('seperate');
     return weatherData;
  }


 async function findWeather () {
	const twonWeather = await getWeather('London');
	console.log(twonWeather.main.temp);

}

findWeather();