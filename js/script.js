function getWeather() {
    var city = document.getElementById('city').value;

    if (city === '') {
        alert('Please enter a city name.');
        return;
    }

    // Create an XMLHttpRequest object
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'api.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // When the request is complete
    xhr.onload = function () {
        if (xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            if (response.error) {
                document.getElementById('weather-info').innerHTML = `<p>${response.error}</p>`;
            } else {
                displayWeather(response);
            }
        } else {
            alert('Error fetching weather data.');
        }
    };

    // Send the city name to the PHP script
    xhr.send('city=' + city);
}

// Function to display the weather data on the page
function displayWeather(data) {
    var weatherInfo = `
        <h2>Weather in ${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;

    document.getElementById('weather-info').innerHTML = weatherInfo;
}
