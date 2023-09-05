function search(event) {
  event.preventDefault();

  let inputCity = document.getElementById("InputCity");
  let cityName = document.querySelector("h1");
  if (inputCity.value) {
    cityName.innerHTML = `${inputCity.value}`;
  } else {
    cityName.innerHTML = null;
    alert("Please type a city");
  }
  let API_KEY = "5fb519d105ba2585d612a32cd2bb54cb";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&appid=${API_KEY}&units=metric`;
  axios.get(`${apiUrl}`).then(displayTemp);
}

let searchCityForm = document.getElementById("searchCity");
searchCityForm.addEventListener("click", search);
let temperatureElement = document.getElementById("temperature");

function getCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}
function showPosition(position) {
  let apiKey = "5354b60afda2b7800186c06153932396";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}$units=metric`;
  axios.get(apiUrl).then(displayTemp);
}

let currentLoc = document.querySelector("#CurrentCity");
currentLoc.addEventListener("click", getCurrentPosition);

function displayTemp(response) {
  let temper = Math.round(response.data.main.temp);
  let tempshow = document.querySelector("#temprature");
  tempshow.innerHTML = `${temper}°C`;
}
// let weather = {
//   paris: {
//     temp: 19.7,
//     humidity: 80,
//   },
//   tokyo: {
//     temp: 17.3,
//     humidity: 50,
//   },
//   lisbon: {
//     temp: 30.2,
//     humidity: 20,
//   },
//   "san francisco": {
//     temp: 20.9,
//     humidity: 100,
//   },
//   oslo: {
//     temp: -5,
//     humidity: 20,
//   },
// };

// write your code here
// function changeCity() {
//   let city = prompt("what is the name of city?");
//   city = city.toLowerCase();
//   if (weather[city] !== undefined) {
//     let tempreture = weather[city].temp;
//     let humid = weather[city].humidity;
//     let tempretureC = Math.floor(tempreture);
//     let tempretureF = Math.floor(tempreture * 1.8 + 32);

//     alert(
//       "It is currently " +
//         tempretureC +
//         "°C (" +
//         tempretureF +
//         "°F) " +
//         "in " +
//         city +
//         " with a humidity of " +
//         humid +
//         "%"
//     );
//   } else {
//     alert(
//       "Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather" +
//         city
//     );
//   }
// }

// changeCity();

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let hours = now.getHours();
if (hours < 10) {
  hours = ` 0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = ` 0${minutes}`;
}
let day = days[now.getDay()];
let h2 = document.querySelector("h2");
h2.innerHTML = `${day} ${hours}: ${minutes}`;

//function changeTemp1(event) {
//  event.preventDefault();
// let CFC = document.querySelector("#tempreture");
//  CFC.innerHTML = "19°C";
//}
//let degreeC = document.querySelector("#CFC");
//degreeC.addEventListener("click", changeTemp1);

//function changeTemp2(event) {
//event.preventDefault();
//  let CFC = document.querySelector("#tempreture");
//  CFC.innerHTML = "66°F";
//}
//let degreeF = document.querySelector("#CFF");
//degreeF.addEventListener("click", changeTemp2);
