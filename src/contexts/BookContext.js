import React, { createContext, useState, useReducer } from 'react'
import { bookReducer } from '../reducers/bookReducer'

const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, 
    [
      {title: 'name of the wind', author: 'patrick rothfuss', id: 1},
      {title: 'the final empire', author: 'brandon sanderson', id: 2}
    ])
  
  return(
    <BookContext.Provider value={{books, dispatch}}>
      {props.children}
    </BookContext.Provider>
  )
  
}

export { BookContextProvider, BookContext }
  
// we dont need these functions since we are using a reducer
  // const addBook = (title, author) => {
  //   setBooks([...books, {
  //     title: title,
  //     author: author,
  //     id: uuid.v4()
  //   }])
  // }
  
  // const removeBook = (id) => {
  //   const newBooks = books.filter(book => {
  //     return book.id !== id
  //   })
    
  //   setBooks(newBooks)
  // }