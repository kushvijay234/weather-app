<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Real-Time Weather Information</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <div class="container">
    <h1>Real-Time Weather Information</h1>
    <div class="search-box">
      <input type="text" id="city" placeholder="Enter city name" required>
      <button onclick="getWeather()">Get Weather</button>
    </div>
    <div id="weather-info"></div>
  </div>

  <script src="js/script.js"></script>
</body>
</html>
