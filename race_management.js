import {readFile, writeFile } from 'fs/promises';


const raceDetails = {}

async function writeToFile (){
        try{
            fs.writeFile("cars.json",JSON.stringify(my_cars), "utf-8")
        }catch (err)
        {console.error(err)}
    }

async function initializeRace (){
    const raceSnapchat = fetch("https://server-for-test-week-13.onrender.com/api/race")
    .then(raceSnapchat => raceSnapchat.json())
    raceDetails.raceName = raceSnapchat["raceName"]
    raceDetails.currentLap = raceSnapchat["currentLap"]
    raceDetails.totalLaps = raceSnapchat["totalLaps"]
    const my_cars = raceSnapchat.cars
}


export {initializeRace}
