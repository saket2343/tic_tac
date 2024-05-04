
const temperatureDisplay = document.querySelector("#Select");
const rashmi = document.querySelector("#kundan");

const kavya = document.getElementById("temperatureDisplay")

temperatureDisplay.addEventListener("input", event => {
    let answer=event.target.value
    console.log("#Select")
    kavya.innerHTML="The Temperature of the day is: "
    fetch( "https://archive-api.open-meteo.com/v1/archive?latitude=52.52&longitude=13.41&start_date=2023-04-10&end_date=2023-04-15&daily=temperature_2m_max&timezone=GMT").then((response) => {
        
        if (response.ok){
        return response.json();
    }
    else{    
        throw new Error("some problem is their")
    }
    
    }).then(data => {
        console.log(data);
        const a = new Map() 
        a.set(data.daily.time[0],data.daily.temperature_2m_max[0])
        a.set(data.daily.time[1],data.daily.temperature_2m_max[1])
        a.set(data.daily.time[2],data.daily.temperature_2m_max[2])
        a.set(data.daily.time[3],data.daily.temperature_2m_max[3])
        a.set(data.daily.time[4],data.daily.temperature_2m_max[4])
        a.set(data.daily.time[5],data.daily.temperature_2m_max[5])
        
        console.log(a)
        for(let [key,value] of a.entries()){
            if (key==answer){
                kavya.innerHTML=`The Temperature of the day is: ${value}`
            }
        }

    }).catch((err) => {
        console.log("rejected", err);
    })
    
    

    //document.getElementsByID("temperatureDisplay").innerHTML="Max temperature of the day"
})





