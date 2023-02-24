import { openModal, closeModal } from "./modal.js"
import Book from "./book.js"
import './css/style.css';
import favicon from './images/bookshelf.svg'
import checkicon from './images/check.svg'
import bodyBgImg from './images/chuttersnap-Zf64Osndqvc-unsplash.jpg'
import placeholder from './images/placeholder.jpg'
import bcanna from './images/book-cover-anna-karenina.jpg'

// Elements
const addBtn = document.querySelector(".add-btn")
const addForm = document.querySelector(".add-form")
const cards = document.querySelector(".cards")

const myLibrary = localStorage.getItem('myLibrary') ? JSON.parse(localStorage.getItem('myLibrary')) : []
renderCards()

// Render cards
function renderCards() {
  myLibrary.forEach ( ({title, author, pages, language, publishDate, isRead }) => {
    const newCard = htmlToElements(`<article class="card">
      <figure>
        <img src="./images/placeholder.jpg" alt="${title}">
        <figcaption><h2 class="card-title">${title}</h2></figcaption>
      </figure>
      <ul class="card-meta">
        <li><i class="icon-account-edit" aria-label="Author" title="Author"></i><span>${author}</span></li>
        <li><i class="icon-pages" aria-label="Number of pages"></i><span>${pages} pages</span></li>
        <li><i class="icon-translate" aria-label="Language"></i><span>${language}</span></li>
        <li><i class="icon-calendar-clock" aria-label="Publish date"></i><span>${new Date(publishDate).toLocaleDateString('en-GB')}</span></li>
      </ul>
    </article>`)
  cards.appendChild(newCard[0])
  })
}


function htmlToElements(html) {
  let template = document.createElement('template');
  template.innerHTML = html;
  return template.content.childNodes;
}

const addBookToLibrary = ({title, author, pages, language, publishDate, isreadradio}) => {
  // TODO: Add validator https://www.npmjs.com/package/validator
  let isRead = false
  if (isreadradio === "yes") isRead = true
  const book = new Book (title, author, pages, language, publishDate, isRead)
  myLibrary.push (book)
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary))
  renderCards()
}

// Handlers
const handleAddBookButton = () => {
  addForm.reset()   // Reset form before opening modal
  openModal()
}

const handleSubmit = (e) => {
  e.preventDefault()
  closeModal(e)
  const formData = new FormData(e.target)
  const formProps = Object.fromEntries(formData)
  addBookToLibrary (formProps)
}

// Event listeners
if (addBtn) {
  addBtn.addEventListener('click', handleAddBookButton)
}

if (addForm) {
  addForm.addEventListener('submit', handleSubmit)
}
