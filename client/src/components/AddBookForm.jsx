import React, { useState } from "react";

import { Button } from "@material-ui/core";

const AddBookForm = (props) => {
  const initialFormState = { id: null, title: "", author: "", pages: "" };
  const [book, setBook] = useState(initialFormState);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100vw",
          justifyContent: "center",
        }}
      >
        <div></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "350px",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <label for="fname" className="label">
            Title:
          </label>
          <input
            type="text"
            className="input"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="title of the book"
            required
          />
          <label for="fname" className="label">
            Author:
          </label>
          <input
            type="text"
            className="input"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
            placeholder="author of the book"
            required
          />
          <label for="fname" className="label">
            Pages:
          </label>
          <input
            type="number"
            className="input"
            value={pages}
            onChange={(event) => setPages(event.target.value)}
            placeholder="number of pages in book"
            required
          />
          <Button
            className="add-book"
            style={{
              backgroundColor: "rgb(58, 58, 153)",
              color: "white",
              marginTop: "5vh",
            }}
            onClick={() => {
              if (title === "" || author === "" || pages === "") {
                alert("Please enter something in every input field");
                setTitle("");
                setAuthor("");
                setPages("");
                return;
              }
              props.addBook(title, author, pages);
              setBook(initialFormState);
              setTitle("");
              setAuthor("");
              setPages("")
            }}
          >
            New Add New Book
          </Button>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default AddBookForm;
