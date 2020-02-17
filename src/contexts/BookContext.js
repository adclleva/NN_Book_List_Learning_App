import React, { createContext, useState } from 'react'
import uuid from 'uuid'

const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    {title: 'name of the wind', author: 'patrick rothfuss', id: 1},
    {title: 'the final empire', author: 'brandon sanderson', id: 2},
  ])

  const addBook = (title, author) => {
    setBooks([...books, {
      title: title,
      author: author,
      id: uuid.v4()
    }])
  }

  const removeBook = (id) => {
    const newBooks = books.filter(book => {
      return book.id !== id
    })
    
    setBooks(newBooks)
  }

  return(
    <BookContext.Provider value={{books, addBook, removeBook}}>
      {props.children}
    </BookContext.Provider>
  )

}

export { BookContextProvider, BookContext }