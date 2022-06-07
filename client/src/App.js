import React, { Fragment, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import ModalForm from "./components/ModalForm";
import "./components/ModalForm.css";
import EditBookForm from "./components/EditBookForm";
import AddBookForm from "./components/AddBookForm";
import BookList from "./components/BookList";

const App = () => {
  // Data
  const bookData = [];

  const initialFormState = { id: null, title: "", author: "", pages: "" };

  // Setting state
  const [books, setBooks] = useState(bookData);
  
  const [currentBook, setCurrentBook] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // CRUD Operations
  const addBook = (title, author, pages) => {
    books.push({
      title: `${title}`,
      author: `${author}`,
      pages: `${pages}`,
    });
    console.log(books);
    setBooks(books);
  };

  const deleteBook = (id) => {
    setEditing(false);

    setBooks(books.filter((book) => book.id !== id));
  };

  const updateBook = (id, updatedBook) => {
    setEditing(false);

    setBooks(books.map((book) => (book.id === id ? updatedBook : book)));
  };

  const editRow = (book) => {
    setEditing(true);

    setCurrentBook({
      id: book.id,
      title: book.title,
      author: book.author,
      pages: book.pages,
    });
  };

  return (
    <div className="App">
      {/* {editing ? (
        <Fragment>
          <h2>Edit Book</h2>
          <EditBookForm />
        </Fragment>
      ) : (
        <Fragment>
          <h2>Add Book</h2>
          <AddBookForm addBook={addBook} />
        </Fragment>
      )} */}
      <ModalForm />
      {/* <div className="flex-row-center">
        <div className="main-header">
          <div className="flex-row-around">
            <p className="main-text">Title</p>
            <p className="main-text">Author</p>
            <p className="main-text">Pages</p>
            <p className="main-text"></p>
            <p className="main-text"></p>
          </div>
        </div>
      </div> */}

      {/* <BookList books={books} deleteBook={deleteBook} /> */}
    </div>
  );
};

export default App;
