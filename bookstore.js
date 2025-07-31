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
  titleInput = document.getElementById("Title");
  title = titleInput.value;
  if (title == ""){
    alert("Title must be filled out");
    return;
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
  jsonObj2 = jsonObj;
  for (let i = 0; i < jsonObj.length; i++) {
  if (jsonObj[i].Title == title && jsonObj[i].Author == author && jsonObj[i].Year == year && jsonObj[i].Genre == genre) {
    jsonObj2[i].Title = prompt("Please enter Title:")
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

let placeholder2 = document.querySelector("#data-output");
  let out = "";
  for(let i=0; i<jsonObj2.length; i++){
      out += `
         <tr>
            <td>${jsonObj2[i].Title}</td>
            <td>${jsonObj2[i].Author}</td>
            <td>${jsonObj2[i].Year}</td>
            <td>${jsonObj2[i].Genre}</td>
         </tr>
      `;
  }
      placeholder2.innerHTML = out;
}

function deleteJson(){
  titleInput = document.getElementById("Title");
  title = titleInput.value;
  if (title == ""){
    alert("Title must be filled out");
  }
  authorInput = document.getElementById("Author");
  author = authorInput.value;
  if (author == ""){
    alert("Author must be filled out");
  }
  yearInput = document.getElementById("Year");
  year = yearInput.value;
  if (year == ""){
    alert("Enter a valid year");
  } else if (year != ""){
    intYear3 = Number(year)
    if (intYear3 == NaN || intYear3>2025 || intYear3 < 0 || Number.isInteger(intYear3) == false){
      alert("Enter a valid year");
      return;
    }
    }
  genreInput = document.getElementById("Genre");
  genre = genreInput.value;
  if (genre == ""){
    alert("Genre must be filled out");
  }
  jsonObj3 = jsonObj
  for (let i = 0; i < jsonObj.length; i++) {
  if (jsonObj[i].Title == title && jsonObj[i].Author == author && jsonObj[i].Year == year && jsonObj[i].Genre == genre) {
    jsonObj3.splice(i, 1);
    //jsonObj3[i].splice(i, 1)
    document.getElementById("removedList").innerHTML = JSON.stringify(jsonObj3);
  }
}
let placeholder3 = document.querySelector("#data-output");
  let out = "";
  for(let i=0; i<jsonObj3.length; i++){
      out += `
         <tr>
            <td>${jsonObj3[i].Title}</td>
            <td>${jsonObj3[i].Author}</td>
            <td>${jsonObj3[i].Year}</td>
            <td>${jsonObj3[i].Genre}</td>
         </tr>
      `;
  }
      placeholder3.innerHTML = out;
}