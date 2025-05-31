import { URL } from "./main";

// Add New Player Button
export async function addPlayer() {
  //Get the new Player data from the form
  let playerName = document.getElementById("name");
  let playerPosition = document.getElementById("position");
  let playerPhone = document.getElementById("phone");

  let fullName: string | null = playerName.value 
  let position: string | null = playerPosition.value
  let phone: string | null = playerPhone.value

  //Create new player
  let newPlayer = {
    fullName,
    position,
    phone
  }

  // POST the new player to the players database
    await fetch(URL, {
        method: "POST", // create request. Can also be GET, PUT, DELETE
        // headers and body are needed only if sending data in request
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPlayer) // must match "Content-Type"
    })
}