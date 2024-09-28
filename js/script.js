function getWeather() {
    var city = document.getElementById('city').value;

    if (city === '') {
        alert('Please enter a city name.');
        return;
    }

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'api.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onload = function () {
        if (xhr.status === 200) {
            try {
                // Parse the JSON response
                var response = JSON.parse(xhr.responseText);

                // Check if the response contains an error message
                if (response.error) {
                    document.getElementById('weather-info').innerHTML = `<p>${response.error}</p>`;
                } else if (response.cod && response.cod !== 200) {
                    // Check if the API returned an error (e.g., invalid city name)
                    document.getElementById('weather-info').innerHTML = `<p>Error: ${response.message}</p>`;
                } else {
                    // Display the weather data if no errors
                    displayWeather(response);
                }
            } catch (e) {
                // Log any errors in JSON parsing
                document.getElementById('weather-info').innerHTML = `<p>Invalid response from server. Please try again.</p>`;
                console.error('Error parsing JSON:', e);
            }
        } else {
            alert('Error fetching weather data.');
        }
    };

    xhr.onerror = function () {
        alert('Request failed. Please check your network connection.');
    };

    // Send the city name to the PHP backend
    xhr.send('city=' + encodeURIComponent(city));
}

// Function to display the weather data
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
