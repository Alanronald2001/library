const library = document.getElementById("library");
const submit = document.getElementById("submit");
const dialog = document.getElementById("dialog");
const add = document.getElementById("add");

const author = document.getElementById("author");
const title = document.getElementById("title");
const pages = document.getElementById("pages");
const isRead = document.getElementById("isRead");
const myLibrary = [
  {
    id: crypto.randomUUID(),
    author: "alan",
    title: "Live In Present",
    pages: 200,
    isRead: false,
  },
];

function Book({ author, title, pages, isRead }) {
  this.id = crypto.randomUUID();
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(book) {
  const newBook = new Book(book);
  myLibrary.push(newBook);
  loadLibrary();
}

function loadLibrary() {
  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    const title = document.createElement("div");
    const author = document.createElement("span");
    const pages = document.createElement("div");
    const isRead = document.createElement("input");
    isRead.setAttribute("type", "checkbox");
    title.innerText = book.title;
    card.appendChild(title);
    author.innerText = book.author;
    card.appendChild(author);
    pages.innerText = book.pages;
    card.appendChild(pages);
    isRead.setAttribute("checked", book.isRead);
    card.appendChild(isRead);
    library.appendChild(card);
  });
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const book = {
    author: author.value,
    title: title.value,
    pages: pages.value,
    isRead: isRead.checked,
  };
  addBookToLibrary(book);
  author.value = "";
  title.value = "";
  pages.value = "";
  isRead.checked = "";
  dialog.removeAttribute("open");
});

add.addEventListener("click", () => {
  dialog.setAttribute("open", "");
});
loadLibrary();
