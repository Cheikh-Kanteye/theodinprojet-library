const myLibrary = [
  new Book("1984", "George Orwell", 328, true),
  new Book("To Kill a Mockingbird", "Harper Lee", 281, false),
  new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, true),
  new Book("C'est moment Là", "Falia", 417, false),
];
const books_container = document.querySelector(".book-list");
const addElement = document.createElement("li");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close");

addElement.innerHTML = ` 
    <div class="book-card add">
      <span>﹢</span>
    </div>`;

function Book(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function getObj(node) {
  return document.getElementById(node);
}

function addBookToLibrary() {
  const title = getObj("title").value;
  const author = getObj("author").value;
  const pages = getObj("pages").value;

  const book = new Book(title, author, pages);
  modal.classList.remove("show");
  myLibrary.push(book);
  displayBooks(myLibrary);
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks(myLibrary);
}

function displayBooks(books) {
  books_container.innerHTML = "";
  books.map((book, index) => {
    let li = document.createElement("li");
    li.innerHTML = `
    <li class="book-item" data-key="0">
      <div class="book-card">
        <div class="book-thumbnail">
          <img src="book.jpg" alt="book image" />
        </div>
        <div class="book-details">
          <h5 class="title">${book.title}</h5>
          <p class="author">${book.author}</p>
          <div class="info flex items-center">
            <span class="pages">${book.pages}</span>
            <span class="badge">${book.read ? "read" : "not read yet"}</span>
          </div>
          <div class="remove">&#128465;</div>
        </div>
      </div>
    </li>
    `;
    books_container.appendChild(li);
  });

  books_container.appendChild(addElement);

  const deleteButtons = document.querySelectorAll(".remove");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const index = this.getAttribute("data-index");
      removeBook(index);
    });
  });
}

addElement.addEventListener("click", function () {
  modal.classList.add("show");
  // alert("click");
});

closeModal.addEventListener("click", function () {
  modal.classList.remove("show");
});

displayBooks(myLibrary);

books_container.appendChild(addElement);
