const axios = require("axios");

const apiKey = "79373bd295795ed7a44afb4ab5380206";
const city = process.argv[2];

const urlWeather = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`;

const urlForecast = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${apiKey}&units=metric`;

// request for weather now
// axios
//     .get(urlWeather)
//     .then(res => {
//         const temp = res.data.main.temp;
//         const name = res.data.name;
//         const country = res.data.sys.country;
//         const weatherMain = res.data.weather[0].main;
//         const weatherDescription = res.data.weather[0].description;
//         console.log(
//             `It is now ${temp}°C in ${name}, ${country} \nThe current weather conditions are: ${weatherMain} (${weatherDescription})`
//         );
//     })
//     .catch(err => {
//         console.log(err);
//     });

// try {
//     const response = await axios.get('/user?ID=12345');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }

getWeather = async () => {
    try {
        return await axios.get(urlWeather);
    } catch (error) {
        console.log(error);
    }
};

getForecast = async () => {
    try {
        return await axios.get(urlForecast);
    } catch (error) {
        console.log(error);
    }
};

// let date = new Date();

axios
    .all([getWeather(), getForecast()])
    .then(
        axios.spread((weather, forecast) => {
            let weatherData = weather.data;
            currentWeather(weatherData);
            let forecastList = forecast.data.list;
            forecastNextDays(forecastList);
        })
    )
    .catch(err => {
        console.log(err);
    });

currentWeather = obj => {
    const temp = obj.main.temp;
    const name = obj.name;
    const country = obj.sys.country;
    const weatherMain = obj.weather[0].main;
    const weatherDescription = obj.weather[0].description;
    console.log(
        `It is now ${temp}°C in ${name}, ${country} \nThe current weather conditions are: ${weatherMain} (${weatherDescription})`
    );
};

forecastNextDays = arr => {
    // console.log(arr);
    // let date = new Date(forecast.data.list[1].dt * 1000);
    // console.log("==>", forecast.data.list);
    // let fiveDays = [];
    // list.forEach(element => {
    //     if (element.dt_txt.includes("12:")) fiveDays.push(element);
    // });
    // console.log(fiveDays, fiveDays.length);
};
