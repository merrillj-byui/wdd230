temperature_element = document.querySelector("#temperature");
wind_speed_element = document.querySelector("#wind_speed");
wind_chill_element = document.querySelector("#wind_chill");

temperature = parseInt(temperature_element.textContent);
wind_speed = parseInt(wind_speed_element.textContent);
wind_chill = 35.74 + (.6215 * temperature) - (35.75 * (wind_speed ** .16)) + (.4275 * temperature * (wind_speed ** .16));

wind_chill_element.textContent = wind_chill.toFixed(2);