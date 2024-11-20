# Weather Journal App

A simple web application that allows users to enter their zip code and feelings, fetches the current weather data using the OpenWeatherMap API, and displays the data along with their mood on the page.

## Features

- **Fetch weather data**: Allows users to input a zip code and fetch weather data for that location.
- **User input for feelings**: Users can also share how they are feeling, which is saved and displayed with the weather data.
- **Most Recent Entry Display**: Shows the most recent weather and user entry, including temperature, date, and the user's mood.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js with Express.js
- **API**: OpenWeatherMap API (for weather data)
- **Database**: Simple in-memory data storage (for project data)

## Installation

To run this project locally, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/SaraMahran/weather-journal-app
cd weather-journal-app

  ```


2. ** Install dependencies**

This project uses Express.js for the server and Fetch API to interact with the OpenWeatherMap API.

Install the dependencies by running:

```bash

npm install
```

   
3.  **Start the server**
   Run the following command to start the server:
```bash

node server.js

```
The server will start on http://localhost:3000.


**Usage**

1-Open the app in your browser at http://localhost:3000.
2-Enter a valid zip code and your feelings in the input fields.
3-Click the "Generate" button to fetch weather data and save the information.
4-View the most recent entry with weather data and your feelings.

