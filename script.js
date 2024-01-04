const locationHead=document.getElementById("locationHead");
const flexBox=document.getElementById("flex-box");
const API=document.getElementById("weatherAPI");
const weatherIcon=document.getElementById("weatherIcon");
const temp=document.getElementById("temp");
const realfeel=document.getElementById("realfeel");
const humidityValue=document.getElementById("humidityValue");
const uvValue=document.getElementById("uvValue");
const windValue=document.getElementById("windValue");
const weather=document.getElementById("weather");
const city=document.getElementById('city');
const cloudValue=document.getElementById("cloudValue");
const precipitationValue=document.getElementById("precipitationValue");
const windDegreeValue=document.getElementById("windDegreeValue");
const pressureValue=document.getElementById("pressureValue");
const more=document.getElementById("more");
const moreDetails=document.getElementById("moreDetails");


const timer=setInterval(()=>{
     const date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();

    document.getElementById("time").innerHTML=`${hours} : ${minutes>9?minutes:"0"+minutes} ${hours>=12?"PM":"AM"}`;

},1000);

function dataFromAPI(){
    
      
    
     const response=fetch(`https://api.weatherapi.com/v1/current.json?key=2f1a5f47063b4d3c96390406240201&q=${city.value}`);
    
     response.then((res)=>res.json()).then((data)=>{
       
       locationHead.innerHTML=`City - ${data.location.name}, ${data.location.region} <span id="deg">${data.current.temp_c}<sup> o</sup><sub>c</sub></span>`;
       weatherIcon.src=`${data.current.condition.icon}`;
       temp.innerHTML=data.current.temp_c;
       realfeel.innerHTML=`Realfeel ${data.current.feelslike_c}`;
       humidityValue.innerHTML=data.current.humidity;
       uvValue.innerHTML=data.current.uv;
       windValue.innerHTML=`${data.current.wind_dir} ${data.current.wind_kph} km/h`;
       gustValue.innerHTML=`${data.current.gust_kph} km/h`;
       weather.innerHTML=`Condition - ${data.current.condition.text}`;
       windDegreeValue.innerHTML= `${data.current.wind_degree}`;
       cloudValue.innerHTML=`${data.current.cloud} %`;
       pressureValue.innerHTML=`${data.current.pressure_mb} mb`;
       precipitationValue.innerHTML=`${data.current.precip_mm} mm`;
      

    
     });
     setTimeout(()=>{
        flexBox.classList.add("collapse");
        moreDetails.classList.add("makeVisible");
     },1000);
    
   
}
city.addEventListener("keypress",(event)=>{
    event.key==="Enter"?API.click():"";
})
API.addEventListener("click",dataFromAPI);


more.addEventListener("click",()=>{

moreDetails.classList.toggle("collapse");
if(moreDetails.classList.contains("collapse")){
    more.innerHTML=`Less Details <i class="fa-solid fa-up-down"></i>`;
}
else{
    more.innerHTML=`More Details <i class="fa-solid fa-up-down"></i>`;

}
});



