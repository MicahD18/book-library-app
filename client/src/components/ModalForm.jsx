import React, { useState, useEffect } from "react";

import { Button, Modal, Typography, Box, TextField } from "@material-ui/core";

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
      setTitle("");
      setAuthor("");
      setPages("");
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
    setPages("");
  };

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
            onClick={handleSubmit}
            className="add-book"
            style={{
              backgroundColor: "rgb(58, 58, 153)",
              color: "white",
              marginTop: "5vh",
            }}
          >
            Add New Book
          </Button>
        </div>

        <div></div>
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
                handleOpen();
              }}
            >
              Remove All
            </button>
          </div>

          <div></div>
        </div>
      </div>

      <div className="flex-row-center">
        <div className="main-header">
          <div className="flex-row-around">
            <p className="main-text">Title</p>
            <p className="main-text">Author</p>
            <p className="main-text">Pages</p>
            <p className="main-text"></p>
            <p className="main-text"></p>
          </div>
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
                  <BiEdit className="edit" onClick={() => {}} />
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
          <h3>Are you sure you want to remove every book from your library?</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: "50px",
            }}
          >
            <button onClick={handleClose}>Cancel</button>
            <button
              className="remove-all"
              onClick={() => {
                if (bookList.length === 0) {
                  handleClose();
                }
                setBookList([]);
                handleClose();
              }}
            >
              Delete
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalForm;
