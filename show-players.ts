// Show Players Button
import { URL } from "./main";
import { table } from "./main";

export async function renderPlayers() {
    // get the info from the players dB. Wait for the data. Don't do anything until we have it.
    let response = await fetch(URL)
    let data = await response.json()
  
    // delete all existing table rows. This while loop  elininates all the rows from the top down, so we'll have to create a new header row each time.
    while (table.rows.length > 0) {
      table.deleteRow(0);
    }
  
    // create new table headings
    let headerRow = document.createElement("tr")
    let headerID = document.createElement("td")
    let headerName = document.createElement("td")
    let headerPosition = document.createElement("td")
    let headerPhone = document.createElement("td")
  
    // set text for table headings
    headerID.innerText = "ID"
    headerName.innerText = "Full Name"
    headerPosition.innerText = "Position"
    headerPhone.innerText = "Phone"
  
    // header row styling
    headerRow.style.backgroundColor = "grey"
    headerRow.style.color = "white"
  
    // append the table headings to a new row
    headerRow.appendChild(headerID);
    headerRow.appendChild(headerName);
    headerRow.appendChild(headerPosition);
    headerRow.appendChild(headerPhone);
  
    // Append the new row to table body 
    table.appendChild(headerRow)
  
    // create a new row for each player
    for (let i = 0; i < data.length; i++) {
      // create a new table row for each player
      let row = document.createElement("tr")
      
      //create new cell elements in each row
      let listNo = document.createElement("td")
      let name = document.createElement("td")
      let position = document.createElement("td")
      let phone = document.createElement("td")
  
      // assign the player data to the new elements
      listNo.innerText = data[i].id;
      name.innerText = data[i].fullName;
      position.innerText = data[i].position;
      phone.innerText = data[i].phone;
  
      // Append the new cells to the new row (give them Earth Passes)
      row.appendChild(listNo);
      row.appendChild(name);
      row.appendChild(position);
      row.appendChild(phone);
          
      // Append the new row to table body 
      table.appendChild(row)
    }
  }