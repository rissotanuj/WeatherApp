const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8b864d41bfmshcd4033872e1623cp1a8574jsncab4f7ee29f8",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

getWeatherApp = (city) => {
    console.log(city);
    cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      console.log(response);
      // 
    })
    .catch((err) => console.error(err));
};


submit.addEventListener('click', (e) => {
	e.preventDefault();
	getWeatherApp(city.value);
});


getWeatherApp("Delhi")
