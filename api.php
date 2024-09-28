<?php
if (isset($_POST['city'])) {
    $city = $_POST['city'];
    $apiKey = 'ddcbff1279e57c72e7504b454b453035';  // Replace with your OpenWeatherMap API key

    $apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={$city}&appid={$apiKey}&units=metric";

    // console.log("$apiUrl");

    // Get the weather data
    $weatherData = file_get_contents($apiUrl);
    
    if ($weatherData) {
        echo $weatherData;  // Send the JSON data back to the frontend
    } else {
        echo json_encode(["error" => "Unable to fetch weather data."]);
    }
} else {
    echo json_encode(["error" => "City name is required."]);
}
?>
