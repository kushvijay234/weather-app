Real-Time Weather Information System
A simple web application that allows users to get real-time weather information by entering a city name. The application fetches weather data from the OpenWeatherMap API and displays the current temperature, weather conditions, humidity, and wind speed.

Features
Enter a city name to get real-time weather information.
Displays temperature, weather condition, humidity, and wind speed.
Easy-to-use interface with form input and weather display.
Uses the OpenWeatherMap API for real-time data.
Project Structure
bash
Copy code
/weather-app
│
├── /css
│   └── style.css               # CSS for the application layout and styling
│
├── /js
│   └── script.js               # JavaScript file that handles user input and API calls
│
├── api.php                     # PHP file to fetch weather data from OpenWeatherMap API
│
├── index.html                  # Main HTML file with the form and display areas
│
└── README.md                   # Project documentation
Prerequisites
A basic web server with PHP support (e.g., XAMPP, WAMP, LAMP, or a live server like Apache or Nginx).
An OpenWeatherMap API key. You can get one by registering at OpenWeatherMap.
Getting Started
Follow these steps to set up the project on your local machine:

1. Clone the Repository
bash
Copy code
git clone https://github.com/yourusername/weather-app.git
2. OpenWeatherMap API Key
Sign up at OpenWeatherMap and get your API key.
In the api.php file, replace your_api_key with your actual OpenWeatherMap API key:
php
Copy code
$apiKey = 'your_api_key';  // Replace with your OpenWeatherMap API key
3. Run the Project
If you are using a local server (e.g., XAMPP, WAMP, etc.), place the project folder in the appropriate server directory (e.g., htdocs for XAMPP).
Start your local server, and navigate to the project in your browser:
arduino
Copy code
http://localhost/weather-app/
Enter a city name and click "Get Weather" to retrieve real-time weather data.
Usage
Open the application in a web browser.
Enter the name of a city in the input field.
Click on the Get Weather button.
The application will display the current weather data including:
Temperature in Celsius
Weather conditions (e.g., sunny, cloudy, etc.)
Humidity percentage
Wind speed in meters/second
Technologies Used
HTML: For structuring the layout of the webpage.
CSS: For styling and making the webpage visually appealing.
JavaScript: For handling the frontend logic, sending requests, and displaying data.
PHP: For backend processing to fetch data from the OpenWeatherMap API.
OpenWeatherMap API: To provide real-time weather data.
Debugging
If you encounter errors such as Unexpected token '<', this likely indicates an issue with your PHP script returning an error instead of JSON data.
Use browser developer tools (F12) to inspect the network request and check if the response is valid JSON.
Make sure your API key is valid and properly configured.