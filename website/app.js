/* Global Variables */
const baseUrl = "https://api.openweathermap.org/data/2.5/weather"; // OpenWeatherMap API base URL
const apiKey = "0d5d69bec65bf5a6b1009dd86f871e0b";
let d = new Date();
let newDate = `${d.getMonth() + 1}.${d.getDate()}.${d.getFullYear()}`; // Format: MM.DD.YYYY

// Function to fetch weather data
const getWeather = (zip) => {
  return fetch(`${baseUrl}?zip=${zip}&appid=${apiKey}`)
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
};

// Function to post data to the server
const postData = (url, data) => {
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error posting data:", error);
    });
};

// Function to update the UI dynamically
const updateUI = () => {
  fetch("/all")
    .then((request) => request.json())
    .then((allData) => {
      document.getElementById("date").innerHTML = `Date: ${allData.date}`;
      document.getElementById(
        "temp"
      ).innerHTML = `Temperature: ${allData.temperature}°F`;
      document.getElementById(
        "content"
      ).innerHTML = `Feeling: ${allData.userResponse}`;
    })
    .catch((error) => {
      console.error("Error updating UI:", error);
    });
};

// Event listener for the 'generate' button
document.getElementById("generate").addEventListener("click", () => {
  const zip = document.getElementById("zip").value; // Get user input for zip code
  const feelings = document.getElementById("feelings").value; // Get user input for feelings

  if (zip && feelings) {
    getWeather(zip).then((weatherData) => {
      if (weatherData && weatherData.main) {
        const data = {
          temperature: weatherData.main.temp, // Extract temperature
          date: newDate, // Use the dynamically generated date
          userResponse: feelings, // User's feelings
        };

        postData("/add", data) // Post data to server
          .then(() => {
            updateUI(); // Update the UI with the new data
          })
          .catch((error) => {
            console.error("Error posting data:", error);
          });
      } else {
        alert("Invalid zip code. Please try again.");
      }
    });
  } else {
    alert("Please enter both zip code and feelings.");
  }
});
