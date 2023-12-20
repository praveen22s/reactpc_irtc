import React, { useState } from "react";
import postPet from "./images/postPet.png";
import "./PostPetSection.css";

const PostPetSection = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [area, setArea] = useState("");
  const [justification, setJustification] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [formError, setFormError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [type, setType] = useState("None");
  const [picture, setPicture] = useState(null);
  const [fileName, setFileName] = useState("");

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const isEmailValid = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    return emailPattern.test(email);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setPicture(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError(false);

    if (
      !name ||
      !age ||
      !area ||
      !justification ||
      !email ||
      !phone ||
      type === "None" ||
      !picture
    ) {
      setFormError(true);
      return;
    }

    if (!isEmailValid(email)) {
      setEmailError(true);
      return;
    }

    console.log("Form submitted:", {
      name,
      age,
      area,
      justification,
      email,
      phone,
      picture,
    });

    setEmailError(false);
    setFormError(false);
    setName("");
    setAge("");
    setArea("");
    setJustification("");
    setEmail("");
    setPhone("");
    setPicture(null);
    setFileName("");
    togglePopup();
  };

  return (
    <section className="post-pet-section">
      <h2>Post a Pet for Adoption</h2>
      <img src={postPet} alt="Pet Looking for a Home" />

      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="input-box">
          <label>Age:</label>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>


        <div className="input-box">
          <label>Picture:</label>
          <label className="file-input-label">
            <span className="file-input-text">
              {fileName || "Choose a Picture"}
            </span>
            <input
              className="file-input"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </label>
        </div>

        <div className="input-box">
          <label>Area:</label>
          <input
            type="text"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
        </div>

        <div className="filter-selection-service">
          <label>Type:</label>
          <select
            value={type}
            onChange={(event) => setType(event.target.value)}
          >
            <option value="None">None</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Rabbit">Rabbit</option>
            <option value="Bird">Bird</option>
            <option value="Fish">Fish</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="input-box">
          <h3>Justification for giving a pet</h3>
          <textarea
            rows="4"
            value={justification}
            onChange={(e) => setJustification(e.target.value)}
          ></textarea>
        </div>

        <h3>Contact Information</h3>

        <div className="input-box">
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {emailError && (
          <p className="error-message">Please provide a valid email address.</p>
        )}

        <div className="input-box">
          <label>Ph.No:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {formError && (
          <p className="error-message">Please fill out all fields.</p>
        )}

        <button type="submit" className="cta-button">
          Submit Your Pet
        </button>
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h4>Application Submitted; we'll get in touch with you soon.</h4>
            </div>
            <button onClick={togglePopup} className="close-btn">
              Close <i className="fa fa-times"></i>
            </button>
          </div>
        )}
      </form>
    </section>
  );
};

export default PostPetSection;
