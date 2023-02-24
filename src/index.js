import { openModal, closeModal } from "./modal.js"
import Book from "./book.js"
import './css/style.css';
import favicon from './images/bookshelf.svg'
import checkicon from './images/check.svg'
import placeholder from './images/placeholder.jpg'
import bcanna from './images/book-cover-anna-karenina.jpg'

// Elements
const addBtn = document.querySelector(".add-btn")
const addForm = document.querySelector(".add-form")
const cards = document.querySelector(".cards")

// Initial render from local storage
let myLibrary = localStorage.getItem('myLibrary') ? JSON.parse(localStorage.getItem('myLibrary')) : []
renderCards()

function renderCards() {
  cards.replaceChildren()
  if (myLibrary.length) {
  myLibrary.forEach ( ({title, author, pages, language, publishDate, isRead }, index) => {
    const newCard = htmlToElements(
      `<article class="card" data-id="${index}">
        <figure>
          <img src="./images/placeholder.jpg" alt="${title}">
          <figcaption><h2 class="card-title">${title} - ${index}</h2></figcaption>
        </figure>
        <ul class="card-meta">
          <li><i class="icon-account-edit" aria-label="Author" title="Author"></i><span>By ${author}</span></li>
          <li><i class="icon-pages" aria-label="Number of pages" title="Number of pages"></i><span>${pages} pages</span></li>
          <li><i class="icon-translate" aria-label="Language" title="Language"></i><span>${language}</span></li>
          <li><i class="icon-calendar-clock" aria-label="Publish date" title="Publish date"></i><span>${new Date(publishDate).toLocaleDateString('en-GB')}</span></li>
        </ul>
        <div class="isread-toggle">
          <small>Is Read?</small>
          <div class="switch-field">
            <input type="radio" id="toggle-radio-${index}-yes" name="isreadradio-${index}" value="yes" ${isRead ? 'checked' : ''} onInput="handleToggleRead({item: ${index}, value: true})">
            <label for="toggle-radio-${index}-yes">Yes</label>
            <input type="radio" id="toggle-radio-${index}-no" name="isreadradio-${index}" value="no" ${!isRead ? 'checked' : ''} onInput="handleToggleRead({item: ${index}, value: false})">
            <label for="toggle-radio-${index}-no">No</label>
          </div>
        </div>
        <i class="icon-close" aria-label="Delete book" onClick="handleDelete(this.parentNode.getAttribute('data-id'))"></i>
      </article>`)
  cards.appendChild(newCard[0])
  })
  } else {
    cards.textContent = 'No books present in the library.'
  }
}

const addBookToLibrary = ({title, author, pages, language, publishDate, isreadradio}) => {
  // TODO: Add validator https://www.npmjs.com/package/validator
  let isRead = false
  if (isreadradio === "yes") isRead = true
  const book = new Book (title, author, pages, language, publishDate, isRead)
  myLibrary.push (book)
  updateLocalStorage()
  renderCards()
}

// Helpers
function updateLocalStorage () {
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary))
}

function htmlToElements (html) {
  let template = document.createElement('template')
  template.innerHTML = html
  return template.content.childNodes
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

window.handleDelete = (targetIndex) => {
  myLibrary.splice(targetIndex, 1)
  updateLocalStorage()
  renderCards()
}

window.handleToggleRead = ({item, value}) => {
  myLibrary[item].isRead=value
  updateLocalStorage()
  renderCards()
}

// Event listeners
if (addBtn) {
  addBtn.addEventListener('click', handleAddBookButton)
}

if (addForm) {
  addForm.addEventListener('submit', handleSubmit)
}

