import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [isModalOpen, setModalOpen] = useState(false);

  function deleteHandler() {
    setModalOpen(true);
  }

  function closeModalHandler() {
    setModalOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>

      {isModalOpen && <Modal onCancel={closeModalHandler} onConfirm={null}/>}
      {isModalOpen && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
}

export default Todo;
