const axios = require("axios");

const apiKey = "79373bd295795ed7a44afb4ab5380206";
const city = process.argv[2];

const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`;

axios
    .get(url)
    .then(res => {
        const temp = res.data.main.temp;
        const name = res.data.name;
        const country = res.data.sys.country;
        const weatherMain = res.data.weather[0].main;
        const weatherDescription = res.data.weather[0].description;
        console.log(
            `It is now ${temp}°C in ${name}, ${country} \nThe current weather conditions are: ${weatherMain} (${weatherDescription})`
        );
    })
    .catch(err => {
        console.log(err);
    });
