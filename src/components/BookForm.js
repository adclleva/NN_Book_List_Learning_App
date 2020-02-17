import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext'

const BookForm = () => {
  const { dispatch } = useContext(BookContext) 
  const [bookData, setBookData] = useState({
    title:'',
    author:''
  })

  const handleChange = (event) => {
    const newBookData = {...bookData, [event.target.name]: event.target.value}
    setBookData(newBookData)
  }

  const handleSubmit = (event) => {
    const { title, author } = bookData

    event.preventDefault()
    dispatch({ type: 'ADD_BOOK', book: {
      title: title,
      author: author
    }
    })
    setBookData({    
      title:'',
      author:''
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        required
        type="text"
        name="title"
        placeholder="Enter the book title"
        onChange={handleChange}
        value={bookData.title}
      />
      <input 
        required
        type="text"
        name="author"
        placeholder="Enter the book author"
        onChange={handleChange}
        value={bookData.author}
      />
      <input 
        type="submit"
        name="title"
        value="Add book"
      />
    </form>
  )
}

export default BookForm