import { addPlayer } from './add-player';
import { renderPlayers } from './show-players';
import { removePlayer } from './remove-player';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { tableFormat } from "./table"; // contains the HTML and styling for the table

// STATE VARIABLES
export const URL = "http://localhost:3000/playersRoster/" // this is the json file
export const table = document.getElementById("roster"); // get the table from the HTML

document.getElementById("addPlayerButton")?.addEventListener("click", addPlayer);
document.getElementById("updatePlayersButton")?.addEventListener("click",renderPlayers);
document.getElementById("removePlayerButton")?.addEventListener("click",removePlayer);
