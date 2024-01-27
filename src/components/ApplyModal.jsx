import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Form from "./Form";

const ApplyModal = (props) => {
  const { item } = props;
  const [open, setOpen] = useState(false);
  const [load, setLoad] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => {
    setLoad(false);
    setOpen(false);
    setSubmitted(false);
  };

  return (
    <div className="careers-modal">
      <button className="apply-btn" onClick={onOpenModal}>
        Apply
      </button>
      <Modal classNames="modal-ext" open={open} onClose={onCloseModal} center>
        <div className="modal-content">
          <h2>{submitted ? "Submitted !" : "You're one step away..."}</h2>
          {submitted ? (
            <>
              <p>You will hear from us soon.</p>
              <div className="submitted" />
            </>
          ) : (
            <>
              <h3>
                {item.title}{" "}
                <span className="small-text">
                  Req Id: {item.jobId} | {item.location}
                </span>
              </h3>
              <p className="med-text">{item.responsibilities}</p>
              {load ? (
                <div className="spinner" />
              ) : (
                <Form
                  setLoad={setLoad}
                  submitted={submitted}
                  setSubmitted={setSubmitted}
                  applyForm={true}
                />
              )}
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};
export default ApplyModal;
