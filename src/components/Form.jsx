import React, { useState } from "react";

const Form = (props) => {
  const { setLoad, setSubmitted, applyForm, submitted, load } = props;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    file: null,
    message: "",
  });
  const handleChange = (e) => {
    //destructure from HTML input element
    const { name, value, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoad(true);

    setTimeout(() => {
      setSubmitted(true);
      setLoad(false);
    }, 3000);
    // You can handle form submission here, for example, send the data to a server or perform client-side validation.
    // console.log("Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>
        <span>First Name:</span>
        <input
          required
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        <span>Last Name:</span>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        <span>Email:</span>
        <input
          required
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      {applyForm ? (
        <>
          <label className="file">
            <span>Upload File:</span>
            <input type="file" name="file" onChange={handleChange} />
          </label>
          <br />
        </>
      ) : (
        <>
          <label className="message">
            <span>Message:</span>
            <textarea
              required
              name="message"
              onChange={handleChange}
              rows="4"
              cols="50"
            />
          </label>
        </>
      )}

      {!applyForm && load && load && <div className="spinner" />}
      {!applyForm && submitted && (
        <p className="something-wrong">Sorry, something went wrong!</p>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
