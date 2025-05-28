// Library array to store books
const myLibrary = [];

// Class for books
class Book {
  constructor(name, author, read) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.author = author;
    this.read = read;
  }
}


//Book section 
const bookSection = document.createElement("div");
document.body.appendChild(bookSection);
bookSection.style.display = "flex";
bookSection.style.flexDirection = "row";
bookSection.style.flexWrap = "wrap";

// Function to add books into the library
function addBookToLibrary(name, author, read) {
    const newBook = new Book(name, author, read);
    myLibrary.push(newBook);


    //Book Card
    const bookCard = document.createElement("div");
    bookSection.appendChild(bookCard);
    bookCard.style.border = "0px solid"
    bookCard.style.backgroundColor = "bisque";
    bookCard.style.borderRadius = "5px";
    bookCard.style.height = "260px";
    bookCard.style.width = "200px"
    bookCard.style.overflow = "hidden";
    bookCard.style.textAlign = "center";
    bookCard.style.display = "flex";
    bookCard.style.flexDirection = "column";
    bookCard.style.alignItems = "center";
    bookCard.style.justifyContent = "space-between";
    bookCard.style.margin = "10px";
    bookCard.style.cursor = "pointer";
    
    //Book image
    const bookImg = document.createElement("img");
    bookImg.src = "bookImg.jpg";  
    bookImg.style.width = "100%"
    bookImg.style.height = "150px";
    bookImg.style.objectFit = "cover";
    bookCard.appendChild(bookImg); 


    //Book Text
    const newBookPara = document.createElement("p");
    newBookPara.textContent = `${newBook.name} by ${newBook.author} (${newBook.read ? "Read" : "Not Read"}) {ID: ${newBook.id}}`;
    newBookPara.dataset.id = newBook.id;
    newBookPara.style.padding = "0px 5px";
    newBookPara.style.display = "flex";
    newBookPara.style.flexDirection = "column";
    newBookPara.style.backgroundColor = "bisque";
    newBookPara.style.borderRadius = "5px";
    bookCard.appendChild(newBookPara);
     
    //Read status toggle checkbox
    const readToggleContainer = document.createElement("div");
    readToggleContainer.style.display = "flex";
    readToggleContainer.style.alignItems = "center"
    readToggleContainer.style.flexDirection = "row";
    bookCard.appendChild(readToggleContainer);

    //Read status toggle label
    const readToggleLabel = document.createElement("label");
    readToggleLabel.textContent = "Read:";
    readToggleContainer.appendChild(readToggleLabel);

    //Read status toggle box
    const readToggle = document.createElement("input");
    readToggle.type = "checkbox";
    readToggle.checked = newBook.read;
    readToggleContainer.appendChild(readToggle);

    //Toggle functionality
    readToggle.addEventListener("change", function(){
    newBook.read = readToggle.checked;
    
    newBookPara.textContent = `${newBook.name} by ${newBook.author} (${newBook.read ? "Read" : "Not Read"}) {ID: ${newBook.id}}`;

    });


    //Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.borderRadius = "5px";
    deleteButton.style.cursor = "pointer";
    deleteButton.style.backgroundColor = "#f44336";
    deleteButton.style.color = "white";
    deleteButton.style.padding = "8px 12px";
    deleteButton.style.border = "none";
    deleteButton.style.width = "90%";
    deleteButton.style.display = "block";
    bookCard.appendChild(deleteButton);
   
    

    //Delete button function
    deleteButton.addEventListener("click", function(){
    bookCard.remove();
    const index = myLibrary.findIndex(book=> book.id === newBook.id);
    if(index !== -1){
        myLibrary.splice(index, 1)
    }
    });

}

// New book button event listener
document.getElementById("newBook").addEventListener("click", function () {
    // Check if dialog already exists and remove it
    const existingDialog = document.querySelector("dialog");
    if (existingDialog) {
        existingDialog.remove();
    }

    // Create the dialog
    const dialog = document.createElement("dialog");
    document.body.appendChild(dialog);
    dialog.style.display = "flex";
    dialog.style.flexDirection = "column";
    dialog.style.justifyContent = "space-evenly";
    dialog.style.padding = "20px";
    dialog.style.borderRadius = "10px";
    dialog.style.width = "300px";
    dialog.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.3)";

    // Title
    const newBookCard = document.createElement("p");
    newBookCard.textContent = "Enter Book Details";
    newBookCard.style.fontWeight = "bold";
    dialog.appendChild(newBookCard);

    // Input for book name
    const dialogBookName = document.createElement("input");
    dialogBookName.placeholder = "Book name";
    dialogBookName.style.padding = "8px";
    dialogBookName.style.border = "1px solid #ccc";
    dialogBookName.style.borderRadius = "5px";
    dialog.appendChild(dialogBookName);

    // Input for author name
    const dialogAuthorName = document.createElement("input");
    dialogAuthorName.placeholder = "Author name";
    dialogAuthorName.style.padding = "8px";
    dialogAuthorName.style.border = "1px solid #ccc";
    dialogAuthorName.style.borderRadius = "5px";
    dialog.appendChild(dialogAuthorName);

    //Checkbox container 
    const checkBoxContainer = document.createElement("div");
    dialog.appendChild(checkBoxContainer);
    checkBoxContainer.style.display = "flex";
    checkBoxContainer.style.flexDirection = "row";

    //Checkbox label
    const readLabel = document.createElement("label");
    readLabel.htmlFor = "checkBox";
    readLabel.textContent = "Have you read this book?";
    checkBoxContainer.appendChild(readLabel);

    // Checkbox for "Read" status
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.id = "checkBox";
    checkBoxContainer.appendChild(checkBox);

    // Button Container
    const buttonContainer = document.createElement("div");
    dialog.appendChild(buttonContainer);
    buttonContainer.style.display = "flex";
    buttonContainer.style.justifyContent = "space-between";
    buttonContainer.style.gap = "10px";

    // Submit button
    const submitButton = document.createElement("button");
    submitButton.textContent = "Add Book";
    submitButton.style.padding = "8px 12px";
    submitButton.style.cursor = "pointer";
    submitButton.style.border = "none";
    submitButton.style.backgroundColor = "#4CAF50";
    submitButton.style.color = "white";
    submitButton.style.borderRadius = "5px";
    buttonContainer.appendChild(submitButton);

    // Close button
    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.style.padding = "8px 12px";
    closeButton.style.cursor = "pointer";
    closeButton.style.border = "none";
    closeButton.style.backgroundColor = "#f44336";
    closeButton.style.color = "white";
    closeButton.style.borderRadius = "5px";
    buttonContainer.appendChild(closeButton);

    // Show the dialog
    dialog.showModal();

    // Submit button function to add the book to the library
    submitButton.addEventListener("click", function () {
        const bookName = dialogBookName.value.trim();
        const authorName = dialogAuthorName.value.trim();
        const isRead = checkBox.checked; // ✅ Get checkbox value

        if (bookName && authorName) {
            addBookToLibrary(bookName, authorName, isRead);
            dialog.close(); // Close the dialog
            dialog.remove(); // Completely remove dialog to prevent issues
        } else {
            alert("Please fill in all fields to proceed!");
        }
    });

    // Close button function
    closeButton.addEventListener("click", function () {
        dialog.close();
        dialog.remove(); // Completely remove dialog when closed
    });
});
