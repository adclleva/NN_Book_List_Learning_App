import React, { createContext, useEffect, useReducer } from 'react'
import { bookReducer } from '../reducers/bookReducer'

const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [] ,
    () => {
      const localData = localStorage.getItem('books');
      return localData ? JSON.parse(localData) : [];
    }) // the third value in a reducer will be the default value

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books)) // this line basically persists the data into local storage
  }, [books])

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