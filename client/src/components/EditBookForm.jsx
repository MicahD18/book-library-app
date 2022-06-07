import React, { useState } from "react";

import { Modal } from "@material-ui/core";

import ModalForm from "./ModalForm";

const EditBookForm = (props) => {
  const [book, setBook] = useState(props.currentBook);

  const handleInputChange = (event) => {
    const { title, value } = event.target;

    setBook({ ...book, [title]: value });
  };

  return (
    <div>
      <button>edit</button>
      {/* <Modal>
        <label>Title</label>
        <input type="text" value={book.title} onChange={handleInputChange} />
        <button>Update Book</button>
        <button
          onClick={() => {
            props.setEditing(false);
          }}
        >
          Cancel
        </button>
      </Modal> */}
    </div>
  );
};

export default EditBookForm;
