import  {initializeRace, search_a_car, raceDetails} from "./race_management.js"
import { menu } from "./utils.js"
import rl from "readline-sync";


const choice = 0
do{
console.log(menu)
let choice = rl.question("what is your activity:")
if (choice == 1) {
    initializeRace()}
if (choice == 2) {}
}while(choice == 5)