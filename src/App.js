import React from 'react';
import './App.css';
import { BookContextProvider } from './contexts/BookContext';
import Navbar from './components/NavBar';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar/>
        <BookList/>
        <BookForm />
       </BookContextProvider>
    </div>
  );
}

export default App;
