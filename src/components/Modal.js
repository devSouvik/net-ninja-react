import ReactDOM from "react-dom";
import "./Modal.css";

export default function Modal({ children, closeModal, isSalesModal }) {
  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div
        className="modal"
        style={{
          border: "4px solid",
          borderColor: isSalesModal ? "green" : "#ff4500",
          textAlign: "center",
        }}
      >
        {children}
        <button
          onClick={closeModal}
          className={isSalesModal ? "sales-btn" : ""}
        >
          close
        </button>
      </div>
    </div>,
    document.body
  );
}
