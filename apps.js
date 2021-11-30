function displayTemperature(response) { 
                let descripitionElement = document.querySelector("#descripition");
                let cityElement = document.querySelector("#city");
                let temperatureElement = document.querySelector("#temperature");
                let humidityElement = document.querySelector("#humidity");
                let windElement = document.querySelector("#wind");
                temperatureElement.innerHTML = Math.round (response.data.main.temp);
                cityElement.innerHTML = response.data.name;
                descripitionElement.innerHTML = response.data.weather[0].description;
                humidityElement.innerHTML = response.data.main.humidity;
                windElement.innerHTML = Math.round (response.data.wind.speed);
                }
                let apiKey = "4603cd08f9aa4435f5a1a0fde738051c";
                let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Markham&appid=${apiKey}&units=metric`;
                axios.get(apiUrl).then(displayTemperature);
