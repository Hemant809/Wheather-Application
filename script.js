const inputbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const whetherimg=document.querySelector(".whether-img");
const temp=document.querySelector(".temprature");
const des=document.querySelector('.description');
const details=document.querySelector(".details");
const humidity=document.querySelector('.wind');
const wind=document.querySelector('.humi');

async function checkWeather(city){
    const API="7cce93c83bd9e94e8fdd36c4a8becab0";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`;

    const data=await fetch(`${url}`).then(Response => Response.json());

    console.log(data)
}


searchbtn.addEventListener('click',()=>{
    checkwhether(inputbox.value);
});



















// search.addEventListener("click",()=>{

//     const APi='7cce93c83bd9e94e8fdd36c4a8becab0';
//     const city= document.querySelector('.search input').value;

//     if(city==' '){
//         return;
//     }

//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API}`).then(Response => Response.json()).then(json =>{

//         const image=document.querySelector('.whether img');
//         const temp=document.querySelector('.whether .temprature');
//         const des=document.querySelector('.whether .city-name');
//         const humidity=document.querySelector('.whether .details .col1 .wind');
//         const wind=document.querySelector('..whether .details .col2 .humi');

//         switch(json.whether[0].main){
//             case 'clear':
//                 image.scr ='clear.png';
//                 break;

//             case 'clouds':
//                 image.scr ='clouds.png';
//                 break;

//             case 'drizzle':
//                 image.scr ='drizzle.png';
//                 break;        
            
//             case 'rain':
//                 image.scr ='rain.png';
//                 break;
                
//             case 'snow':
//                 image.scr ='snow.png';
//                 break;


//             default:
//                 image.scr ='mist.png';
//                 break;
//         }

//     })

// })


// async function checkWeather(city){
//     const api_key = "4cd0eee81294c867b4bc4cfc64e998c5";
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

//     const weather_data = await fetch(`${url}`).then(response => response.json());


//     if(weather_data.cod === `404`){
//         location_not_found.style.display = "flex";
//         weather_body.style.display = "none";
//         console.log("error");
//         return;
//     }

//     console.log("run");
//     location_not_found.style.display = "none";
//     weather_body.style.display = "flex";
//     temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
//     description.innerHTML = `${weather_data.weather[0].description}`;

//     humidity.innerHTML = `${weather_data.main.humidity}%`;
//     wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;


//     switch(weather_data.weather[0].main){
//         case 'Clouds':
//             weather_img.src = "/assets/cloud.png";
//             break;
//         case 'Clear':
//             weather_img.src = "/assets/clear.png";
//             break;
//         case 'Rain':
//             weather_img.src = "/assets/rain.png";
//             break;
//         case 'Mist':
//             weather_img.src = "/assets/mist.png";
//             break;
//         case 'Snow':
//             weather_img.src = "/assets/snow.png";
//             break;

//     }

//     console.log(weather_data);
// }


// searchBtn.addEventListener('click', ()=>{
//     checkWeather(inputBox.value);
// });