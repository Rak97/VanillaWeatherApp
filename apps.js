   function displayTemperature(response) { 
                let descripitionElement = document.querySelector("#descripition");
                let cityElement = document.querySelector("#city");
                let temperatureElement = document.querySelector("#temperature");
                let humidityElement = document.querySelector("#humidity");
                let windElement = document.querySelector("#wind");
                document.getElementById("year").innerHTML = new Date().getFullYear();
                temperatureElement.innerHTML = Math.round (response.data.main.temp);
                cityElement.innerHTML = response.data.name;
                descripitionElement.innerHTML = response.data.weather[0].description;
                humidityElement.innerHTML = response.data.main.humidity;
                windElement.innerHTML = Math.round (response.data.wind.speed);
                let currentDate = new Date();
                let date = document.querySelector("#date");
                let weekdays = [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                ];
                let months = [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                ];
                date.innerHTML = `${weekdays[currentDate.getDay()]} ${months[currentDate.getUTCMonth()]
                    } ${currentDate.getDate()}`;
                }
                var dt = new Date();
                document.getElementById("time").innerHTML = (("0" + dt.getHours()).slice(-2)) + ":" + (("0" + dt.getMinutes()).slice(-2));
                
                const hour = new Date().getHours();
                    let greeting;

                    if (hour < 12) {
                        greeting = "AM";
                    } else {
                        greeting = "PM";
                    }

                    document.getElementById("format").innerHTML = greeting;

                let apiKey = "4603cd08f9aa4435f5a1a0fde738051c";
                let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Markham&appid=${apiKey}&units=metric`;
                axios.get(apiUrl).then(displayTemperature);
