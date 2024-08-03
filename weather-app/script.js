

const apikey = "924be3c897dfc3da1c416f8a074219d5"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";

const searchbtn = document.querySelector('.searchbtn')
const inputcity = document.getElementById('inputcity')
async function checkweather(city) {
    const response = await fetch(apiurl + `&q=${city}` + `&appid=${apikey}`)
    var data = await response.json()
    console.log(data)

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";

    const condition = (data.weather[0].main).toLowerCase()
    const weathericon = document.querySelector('.weather-icon')
    weathericon.src = `images/${condition}.png`

}

searchbtn.addEventListener('click', () => {
    let city = document.getElementById('inputcity')

    checkweather(city.value)
    inputcity.value = ''
})



