const apiKey = "3e2518964c5d87c51e30bc57788244e9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const input = document.querySelector("input");
const button = document.querySelector("button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    input.value="";
    const response = await fetch(apiUrl+`&appid=${apiKey}`+`&q=${city}`)
    if(response.ok){
        // console.log(response);
        var data = await response.json();
        // console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp+"°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity;
        document.querySelector(".wind").innerHTML = data.wind.speed;
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }
    }
    else{
        document.querySelector(".city").innerHTML = "please enter a valid city";

        document.querySelector(".temp").innerHTML = "__";
        document.querySelector(".humidity").innerHTML = "__";
        document.querySelector(".wind").innerHTML = "__";
    }
    
}


button.addEventListener("click",()=>{
    let city = input.value;
    checkWeather(city);
})
