const bookstore = [{Title: "Pride and Prejudice", Author: "Jane Austen", Year: "1813", Genre: "Historic"},
    {Title: "1984", Author: "George Orwell", Year: "1949", Genre: "Dystopian"},
    {Title: "The Old Man and The Sea", Author: "Ernest Hemingway", Year: "1952", Genre: "Adventure"}];
const bookstoreString = JSON.stringify(bookstore);
jsonObj = JSON.parse(bookstoreString);
let placeholder = document.querySelector("#data-output");
let out = "";
  for(let i=0; i<jsonObj.length; i++){
      out += `
         <tr>
            <td>${jsonObj[i].Title}</td>
            <td>${jsonObj[i].Author}</td>
            <td>${jsonObj[i].Year}</td>
            <td>${jsonObj[i].Genre}</td>
         </tr>
      `;
  }
placeholder.innerHTML = out;

function updateJson(){
  //take user input
  titleInput = document.getElementById("Title");
  title = titleInput.value;
  if (title == ""){
    alert("Title must be filled out");
    throw new Error("Title must be filled out");
  } 
  authorInput = document.getElementById("Author");
  author = authorInput.value;
  if (author == ""){
    alert("Author must be filled out");
    return;
  }
  yearInput = document.getElementById("Year");
  year = yearInput.value;
  if (year == ""){
    alert("Enter a valid year");
    return;
  } else if (year != ""){
    intYear = Number(year)
    if (intYear == NaN || intYear>2025 || intYear < 0 || Number.isInteger(intYear) == false){
      alert("Enter a valid year");
      return;
    }
    }
  genreInput = document.getElementById("Genre");
  genre = genreInput.value;
  if (genre == ""){
    alert("Genre must be filled out");
    return;
  }
  //create a new jsonObject, problems occurred by simply updating the original JSON object
  jsonObj2 = jsonObj;
  //loop through the JSON to find if the user entry corresponds to one of the JSON entries
  for (let i = 0; i < jsonObj.length; i++) {
  //if the user entries correspond to the original jsonObj entry then take in user input
  if (jsonObj[i].Title == title && jsonObj[i].Author == author && jsonObj[i].Year == year && jsonObj[i].Genre == genre) {
    jsonObj2[i].Title = prompt("Please enter Title:")
    //if the user input is empty alert the user to enter a valid entry
    if (jsonObj2[i].Title == ""){
    alert("Title must be filled out");
    return;
  }
    jsonObj2[i].Author = prompt("Please enter Author:")
    if (jsonObj2[i].Author == ""){
    alert("Author must be filled out");
    return;
  } 
    jsonObj2[i].Year = prompt("Please enter Year:")
    //if the year is not a valid entry alert the user
    if (jsonObj2[i].Year == ""){
    alert("Enter a valid year");
    return;
  } else if (jsonObj2[i].Year != ""){
    intYear2 = Number(jsonObj2[i].Year)
    if (intYear2 == NaN || intYear2>2025 || intYear2 < 0 || Number.isInteger(intYear2) == false){
      alert("Enter a valid year");
      return;
    }
    }
    jsonObj2[i].Genre = prompt("Please enter Genre:")
    if (jsonObj2[i].Genre == ""){
    alert("Genre must be filled out");
    return;
  } 
    document.getElementById("updatedTitle").innerHTML = JSON.stringify(jsonObj2[i]);  
  }
  }
  //looping through jsonObj2 to avoid code running on the second click
  //when taking in faulty user input, this allows the table construction to 
  //only execute when no errors are thrown

  if (jsonObj2[i].Title == ""){
    throw new error("Title must be filled out");
  }
  else if (jsonObj2[i].Author == "") {
    throw new error("Author must be filled out");
  }
  else if (jsonObj2[i].Year == "" || Number(jsonObj2[i].Year) > 2025 || Number(jsonObj2[i].Year) < 0 || Number.isInteger(Number(jsonObj2[i].Year)) == false || Number(jsonObj2[i].Year) == NaN) {
    throw new error("Enter a valid year");
  }
  else if (jsonObj2[i].Genre == ""){
    throw new error("Genre must be filled out");
  }
  else {
    let placeholder2 = document.querySelector("#data-output");
    let out = "";
    for (let j=0; j < jsonObj2.length; j++){
    out += `
         <tr>
            <td>${jsonObj2[j].Title}</td>
            <td>${jsonObj2[j].Author}</td>
            <td>${jsonObj2[j].Year}</td>
            <td>${jsonObj2[j].Genre}</td>
         </tr>
      `;
    }
    placeholder2.innerHTML = out;
  }
}     

function deleteJson(){
  //take in user input
  titleInput = document.getElementById("Title");
  title = titleInput.value;
  if (title == ""){
    throw new error("Title must be filled out");
  }
  authorInput = document.getElementById("Author");
  author = authorInput.value;
  if (author == ""){
    throw new error("Author must be filled out");
  }
  yearInput = document.getElementById("Year");
  year = yearInput.value;
  //making sure a valid year is input by the user
  if (year == "" || Number(year) > 2025 || Number(year) < 0 || Number.isInteger(Number(year)) == false || Number(year) == NaN){
    throw new error("Enter valid year");
  }  
  genreInput = document.getElementById("Genre");
  genre = genreInput.value;
  if (genre == ""){
    throw new error("Title must be filled out");
  }
  
  //defining a new JSON object from which the new table will be created
  //putting a for loop to stop the code from executing after the wrong input is inserted
  jsonObj3 = jsonObj
  //
  if (title == ""){
    throw new error("Title must be filled out");
  }
  else if (author == "") {
    throw new error("Author must be filled out");
  }
  else if (year == "" || Number(year) > 2025 || Number(year) < 0 || Number.isInteger(Number(year)) == false || Number(year) == NaN) {
    throw new error("Enter a valid year");
  }
  else if (genre == ""){
    throw new error("Genre must be filled out");
  }
  else {
  //looping through jsonObj to check if the user input is in the jsonObj 
  for (let i = 0; i < jsonObj.length; i++) {
  if (jsonObj[i].Title == title && jsonObj[i].Author == author && jsonObj[i].Year == year && jsonObj[i].Genre == genre) {
    jsonObj3.splice(i, 1);
    //jsonObj3[i].splice(i, 1)
    document.getElementById("removedList").innerHTML = JSON.stringify(jsonObj3);
  }
}

let placeholder3 = document.querySelector("#data-output");
  let outp = "";
  for(let i=0; i<jsonObj3.length; i++){
      outp += `
         <tr>
            <td>${jsonObj3[i].Title}</td>
            <td>${jsonObj3[i].Author}</td>
            <td>${jsonObj3[i].Year}</td>
            <td>${jsonObj3[i].Genre}</td>
         </tr>
      `;
  }
      placeholder3.innerHTML = outp;
  }
}