const apiKey = "2fdfbd4313e405d74e01921488b3de6a";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "°C";
    docujment.querySelector(".wind").innerHTML = data.wind.speed +" km/h";

}
searchbtn.addEventListener("click", ()=>{
    checkWeather(searchbox.value);
})

checkWeather();