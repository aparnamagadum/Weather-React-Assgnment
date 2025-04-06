
# Aparna Weather App

This is a weather application built using **React** that allows users to get weather information for predefined cities, search for specific cities, and manage the list of cities with real-time weather data.
[Deploy Link](https://weather-fawn-ten.vercel.app/)

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Technologies Used](#technologies-used)

## Features

- **Get Weather**: Fetch weather information for predefined cities like New York, Las Vegas, London, etc.
- **Search**: Search for weather information of a specific city.
- **Real-time Data**: Fetches and displays the latest weather data using a weather API.
- **Highlighting Search Results**: When a city is searched, the corresponding row in the table is highlighted for easy reference.
- **Delete Data**: Ability to remove a city’s weather data from the table.
- **Long-press Search Timeout**: The search highlight resets after 3 seconds.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/PritiranjanPatra2/Weather.git
   ```

2. **Navigate into the project directory**:

   ```bash
   cd Weather

   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Run the application**:

   ```bash
   npm start
   ```

## Usage

1. Open the application.
2. Click the **Get Weather** button to fetch weather data for a city.
3. Search for a city using the search bar.
4. Highlighted city results will appear for 3 seconds before resetting.
5. You can delete a city's weather information by clicking the delete button (trash icon).

## Components

### App Component
- The main component that manages the city list, weather data, and interactions like fetching weather and searching for cities.

### New Component
- Responsible for displaying the fetched weather data in a table format, allowing deletion of weather records.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Icons**: For displaying icons like the search and delete buttons.
- **CSS**: For styling the app.
## <span style="color:#29c4f6"> Projects Outputs:

![Wether-1](./src/assets/Screenshot%202024-09-17%20154828.png)



