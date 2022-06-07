import React from "react";

import { BiEdit } from "react-icons/bi";
import { BsFillTrashFill } from "react-icons/bs";

const BookList = (props) => {

  return (
    <div>
      {props.books.length > 0 ? (
        props.books.map((book) => {
          return (
            <div
              key={book.id}
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
                    props.deleteBook(book.id);
                  }}
                  className="remove"
                />
              </div>

              <div></div>
            </div>
          );
        })
      ) : (
        <div>
          <p>No books are in your library.</p>
        </div>
      )}
    </div>
  );
};

export default BookList;
