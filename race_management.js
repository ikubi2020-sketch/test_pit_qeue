import fs from 'fs';
import rl from "readline-sync";

const raceDetails = {}

async function writeToFile (my_cars){
        try{
            fs.writeFile("cars.json",JSON.stringify(my_cars), "utf-8")
        }catch (err)
        {console.error(err)}
    }

async function initializeRace (){
    console.log("loading file")
    const raceSnapchat = fetch("https://server-for-test-week-13.onrender.com/api/race")
    .then(raceSnapchat => raceSnapchat.json())
    raceDetails.raceName = raceSnapchat["raceName"]
    raceDetails.currentLap = raceSnapchat["currentLap"]
    raceDetails.totalLaps = raceSnapchat["totalLaps"]
    const my_cars = raceSnapchat.cars
    writeToFile(my_cars)
}

async function search_a_car (){
    const carId = rl.question("enter car id")
    try {
        const cars = await fs.readFile("car.json", "utf-8")
    }catch (err){console.log(err)}
    cars.forEach(car => {
        if (car["carNumber"] === carId)
        console.log(car)
        return;
    });
    return "car not found"
}

export {initializeRace, search_a_car, raceDetails}

