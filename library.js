let countBook = -1;
////////////////constucteur function "book"
function Book(title, author, pages, read, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;
  
  this.info = function () {
    console.log(`the ${title}, ${author}, number of pages ${pages}, not ${read}`);
  };
}

let Library = [];

function addBoooktoLibrary() {
  let title = document.getElementById('titleinput').value;
  let author = document.getElementById('authorinput').value;
  let pages = document.getElementById('numberofpagesinput').value;
  let read = document.getElementById('readinput').value;
  afficheLivre(title,author,pages,read)

  countBook += 1;

  const objectBook = new Book(title, author, pages, read, countBook);
  console.log(objectBook);
  Library.push(objectBook);


updateLocalStorage();
 
}
////////////loading data from localstorage
function updateLocalStorage() {
  // Store the Library  in local storage
  localStorage.setItem("Library", JSON.stringify(Library));
}

function loadLocalStorage(){
  const libraryData=localStorage.getItem("Library")
  if(libraryData){
    Library=JSON.parse(libraryData);
    for(const book of Library)
      afficheLivre(book.title,book.author,book.pages,book.read);

  }
}
/////////Calling the function to load data when the page reloads.
document.addEventListener("DOMContentLoaded", loadLibraryFromLocalStorage);

////////////:the "add new book" button
const addbookButton = document.getElementById('addnewbook');
addbookButton.addEventListener("click", function(event) {
  const Modal = document.getElementById('dialogue');
  Modal.showModal();
  const resetModal = document.getElementById('myForm');
  resetModal.reset();
});
///////////////////// Close button code

const closeButtonn = document.getElementById('close-button');
closeButtonn.addEventListener('click', function (event) {
  event.preventDefault();
  const Modal = document.getElementById('dialogue');
  Modal.close();
});

/////////add button code 

const addButtonmodal = document.getElementById('add-button');
addButtonmodal.addEventListener('click', function (event) {
  event.preventDefault();
  addBoooktoLibrary();
  const resetModal = document.getElementById('myForm');
  resetModal.reset();
  const Modal = document.getElementById('dialogue');
  Modal.close();
 
 
 

});

//////////////////////:"display the book on the web page."
function afficheLivre(title,author,pages,read) {


   ///////////:add the first button "Reading button"
  const readingButton=document.createElement('button');
  readingButton.innerText=`Already reading?`
  readingButton.id="readingbutton";
  readingButton.addEventListener("click",function(event){
      var changeButton=document.getElementById('readingbutton')
      if(changeButton.innerText==='Already reading?'){
        changeButton.innerText='redead';
      }
      else{
        changeButton.innerText='Already reading?';
      }
  })
  /////////add the second button "Remove button"
  const removeButton = document.createElement('button');
  removeButton.innerText=`Remove`;
  removeButton.id='removebook';
  removeButton.addEventListener('click', function (event) {
    const element1 = document.getElementById('bagage');
    element1.remove();
});



const bookDiv = document.createElement('div')
bookDiv.id="bagage";
const title1 = document.createElement('div');
const author1 = document.createElement('div');
const pages1 = document.createElement('div');
const read1 = document.createElement('div');


title1.innerText=` the title:${title}`
author1.innerText=`the author :${author}`
pages1.innerText=`number of pages is:${pages}`
read1.innerText=`the resume:${read}`
/////////adding a css class to buttons
removeButton.classList.add("two-button");
readingButton.classList.add("two-button");

bookDiv.classList.add("bookDivedit")
title1.classList.add("affichage");
author1.classList.add("affichage");
pages1.classList.add("affichage");
read1.classList.add("affichage");

bookDiv.appendChild(title1);
bookDiv.appendChild(author1);
bookDiv.appendChild(pages1);
bookDiv.appendChild(read1);
bookDiv.appendChild(removeButton);
bookDiv.appendChild(readingButton);

document.body.appendChild(bookDiv);

  }

 

//////////////////

  
  
  


  



