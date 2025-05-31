import { URL } from "./main";

// Remove a Player Button
export function removePlayer(){
  let indexToDelete = prompt("Which player would you like to delete from this list?\n Enter the player's ID number: ")

  fetch(URL + indexToDelete, {
    method: "DELETE", // delete request
  })
}