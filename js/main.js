// import * as stuff from "./utils.js"

// console.log(new stuff.Color("#c0ffee").asString.hex);



const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};


// const today = HIGH_TEMPERATURES.today;
// const tomorrow = HIGH_TEMPERATURES.tomorrow;

const {today,tomorrow}=HIGH_TEMPERATURES

// const highToday = HIGH_TEMPERATURES.today;
// const highTomorrow = HIGH_TEMPERATURES.tomorrow; 

// const {today:highToday,tomorrow:highTomorrow}=HIGH_TEMPERATURES




const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};


// const lowToday = LOCAL_FORECAST.today.low;
// const highToday = LOCAL_FORECAST.today.high;

const {today: { low: lowToday, high: highToday }}= LOCAL_FORECAST
