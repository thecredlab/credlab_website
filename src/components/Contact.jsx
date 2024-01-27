import React, { useState } from "react";
import Form from "./Form";

const Contact = () => {
  const [load, setLoad] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <Form
        setLoad={setLoad}
        submitted={submitted}
        load={load}
        setSubmitted={setSubmitted}
        applyForm={false}
      />
      {/* {load && <div className="spinner" />} */}
    </>
  );
};

export default Contact;
