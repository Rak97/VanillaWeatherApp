 
            function displayTemperature(response) { 
                let descripitionElement = document.querySelector("#descripition");
                let cityElement = document.querySelector("#city");
                let temperatureElement = document.querySelector("#temperature");
                let humidityElement = document.querySelector("#humidity");
                let windElement = document.querySelector("#wind");
                let iconElement = document.querySelector("#icon");

                celciusTemperature = response.data.main.temp; //Conversion 

                document.getElementById("year").innerHTML = new Date().getFullYear();
                temperatureElement.innerHTML = Math.round (celciusTemperature); //conversion
                cityElement.innerHTML = response.data.name;
                descripitionElement.innerHTML = response.data.weather[0].description;
                humidityElement.innerHTML = response.data.main.humidity;
                windElement.innerHTML = Math.round (response.data.wind.speed);
                iconElement.setAttribute(
                    "src",
                    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
                );
                
                celciusTemperature = response.data.main.temp;

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
            
            };
                //Time
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

              function search(city) {
                    let apiKey = "4603cd08f9aa4435f5a1a0fde738051c";
                    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
                    axios.get(apiUrl).then(displayTemperature);
                }

                function handleSubmit(event) {
                    event.preventDefault();
                    let cityInputElement = document.querySelector("#city-input");
                    search(cityInputElement.value);
                }

                let form = document.querySelector("#search-form");
                form.addEventListener("submit", handleSubmit);
             
                search("Yellowknife");

                //Conversion 

                let celciusTemperature = null;

                function convertToFa(event) {
                event.preventDefault();
                let temperature= document.querySelector("#temperature");
                temperature.innerHTML = Math.round((Math.round(`${celciusTemperature}`) * 9) / 5 + 32);
                faLink.classList.add("convert");
                celLink.classList.remove("convert");
                }

                let faLink = document.querySelector("#fahrenheit");
                faLink.addEventListener("click", convertToFa);

                function convertToCel(event) {
                event.preventDefault();
                let temperature = document.querySelector("#temperature");
                temperature.innerHTML = Math.round((Math.round(`${temperature.innerHTML}`) - 32) * (5 / 9));
                celLink.classList.add("convert");
                faLink.classList.remove("convert");
                }

                let celLink = document.querySelector("#celcius");
                celLink.addEventListener("click", convertToCel);

