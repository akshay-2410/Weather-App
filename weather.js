var submit = document.getElementById('submit')
var search = document.getElementById('search')
var city;
var cityn
function info(cityn){
document.getElementById("city-name").innerHTML="Weather For "+cityn;
}
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '797c22ca2fmsh9234aad6f4dc5bbp11b574jsnb0418987b002',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
async function getWeather(city){
try {
 
	const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options);
	const result = await response.json();
	console.log(result);
    document.getElementById('cloud_pct').innerHTML="Cloud_pct : "+result.cloud_pct+"<br>"
    document.getElementById('temp').innerHTML="Temp : "+result.temp+"&#8451;"+"<br>"
    document.getElementById('feels_like').innerHTML="Feels_like : "+result.feels_like+"<br>"
    document.getElementById('humidity').innerHTML="Humidity : "+result.humidity+"<br>"
    document.getElementById('min_temp').innerHTML="Min_temp : "+result.min_temp+"<br>"
    document.getElementById('max_temp').innerHTML="Max_temp : "+result.max_temp+"<br>"
    document.getElementById('wind_speed').innerHTML="Wind_speed : "+result.wind_speed+"<br>"
    document.getElementById('wind_degrees').innerHTML="Wind_degrees : "+result.wind_degrees+"<br>"
    document.getElementById('sunrise').innerHTML="Sunrise : "+Date(result.sunrise*1000)+"<br>"
    document.getElementById('sunset').innerHTML="Sunset : "+Date(result.sunset*1000)+"<br>"
} catch (error) {
	console.error(error);
}
}
submit.addEventListener('click', (e)=>{

  e.preventDefault()

  var city = search.value;
  getWeather(city)
  info(city)
 
})

getWeather("delhi")
info("Delhi")

var city1= document.getElementById("delhi").text;

var city2= document.getElementById("mumbai").text;

var city3=document.getElementById("bhopal").text;

document.getElementById("delhi").onclick=()=>{
  getWeather(city1)
  info(city1)
}

document.getElementById("mumbai").onclick=()=>{
  getWeather(city2)
  info(city2)

}

document.getElementById("bhopal").onclick=()=>{
  getWeather(city3)
  info(city3)
}


search.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    submit.click();
    search.value=''
  }
});

