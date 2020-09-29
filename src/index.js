  async function getCats() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=e099642ba8b7f8b636938fb26d4c6038', {mode: 'cors'});
    const weatherData = await response.json();
     console.log(weatherData);
  }

  getCats();
