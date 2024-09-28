<?php
// Enable error reporting to see potential issues during development (remove in production)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Check if 'city' is set in the POST request
if (isset($_POST['city'])) {
    $city = $_POST['city'];
    $apiKey = 'Api Key';  // Replace with your OpenWeatherMap API key

    // OpenWeatherMap API URL
    $apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={$city}&appid={$apiKey}&units=metric";

    // Fetch the weather data from OpenWeatherMap
    $weatherData = file_get_contents($apiUrl);

    // Check if data is returned successfully
    if ($weatherData) {
        // Set the content type to JSON
        header('Content-Type: application/json');
        echo $weatherData;  // Return the JSON data directly from the API
    } else {
        // If unable to fetch the weather data
        echo json_encode(["error" => "Unable to fetch weather data."]);
    }
} else {
    // If the 'city' parameter is missing in the request
    echo json_encode(["error" => "City name is required."]);
}
?>
