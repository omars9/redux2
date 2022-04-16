import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { Edit } from "../redux/Action";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const EditTask = ({ task }) => {
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [text, setText] = useState(task.action);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const editedTask = {
      id: task.id,
      isDone: task.isDone,
      action: text,
    };
    dispatch(Edit(editedTask));
    closeModal();
  };
  return (
    <div>
      <button onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      </Modal>
    </div>
  );
};

export default EditTask;
