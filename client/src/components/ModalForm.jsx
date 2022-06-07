import React, { useState, useEffect } from "react";

import { Button, Modal, Typography, Box } from "@material-ui/core";

import "./ModalForm.css";

import { BiEdit } from "react-icons/bi";
import { BsFillTrashFill } from "react-icons/bs";

const ModalForm = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");
  const [status, setStatus] = useState(false);

  const [bookList, setBookList] = useState([]);

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setTitle("");
    setAuthor("");
    setPages("");
  };

  const handleSubmit = () => {
    if (title === "" || author === "" || pages === "") {
      alert("Please enter something in every input field");
      return;
    }
    bookList.push({
      title: `${title}`,
      author: `${author}`,
      pages: `${pages}`,
    });
    console.log(bookList);
    setTitle("");
    setAuthor("");
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        style={{
          backgroundColor: "rgb(58, 58, 153)",
          color: "white",
          marginTop: "10vh",
        }}
      >
        Add a New Book
      </Button>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div></div>
        <div
          style={{
            width: "85%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginTop: "75px",
            paddingTop: "15px",
            paddingBottom: "15px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            {/* <Typography className="text">BOOKS READ: 0</Typography>
            <Typography className="text">BOOKS UNREAD: 0</Typography> */}
            <Typography className="text">
              TOTAL BOOKS: {bookList.length}
            </Typography>
            <button
              className="remove-all"
              onClick={() => {
                alert("Are you sure you want to remove all books?");
                setBookList([]);
              }}
            >
              Remove All
            </button>
          </div>

          <div></div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div></div>
        <div
          style={{
            width: "85%",
            backgroundColor: "rgb(58, 58, 153)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginTop: "25px",
            paddingTop: "15px",
            paddingBottom: "15px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <p className="main-text">Title</p>
            <p className="main-text">Author</p>
            <p className="main-text">Pages</p>
            <p className="main-text"></p>
          </div>

          <div></div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          {bookList.map((book, index) => {
            return (
              <div
                key={index}
                style={{
                  width: "85%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  marginTop: "25px",
                  paddingTop: "15px",
                  paddingBottom: "15px",
                  borderBottom: "solid",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <p className="text">{book.title}</p>
                  <p className="text">{book.author}</p>
                  <p className="text">{book.pages}</p>
                  {/* <input
                    type="checkbox"
                    className="status"
                    onClick={() => {
                      setStatus(true);
                    }}
                  /> */}
                  <BsFillTrashFill
                    variant="contained"
                    onClick={() => {
                      // use spread operator to remove book.
                      const list = [...bookList];
                      list.splice(index, 1);
                      setBookList(list);
                      console.log(bookList);
                    }}
                    className="remove"
                  />
                </div>

                <div></div>
              </div>
            );
          })}
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Box className="modal">
          <form className="form">
            <label for="fname">Title:</label>
            <input
              type="text"
              className="input"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="title of the book"
              required
            />
            <label for="fname">Author:</label>
            <input
              type="text"
              className="input"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
              placeholder="author of the book"
              required
            />
            <label for="fname">Pages:</label>
            <input
              type="number"
              className="input"
              value={pages}
              onChange={(event) => setPages(event.target.value)}
              placeholder="number of pages in book"
              required
            />
            <button
              onClick={() => {
                handleClose();
                handleSubmit();
              }}
              className="submit"
              type="submit"
            >
              Submit
            </button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalForm;