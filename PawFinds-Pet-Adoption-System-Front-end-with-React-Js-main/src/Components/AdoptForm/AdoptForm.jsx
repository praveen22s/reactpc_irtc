import React, { useState } from "react";
import "./AdoptForm.css";

function AdoptForm(props) {
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [livingSituation, setLivingSituation] = useState("");
  const [previousExperience, setPreviousExperience] = useState("");
  const [familyComposition, setFamilyComposition] = useState("");
  const [formError, setFormError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const isEmailValid = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError(false);

    if (
      !email ||
      !phoneNo ||
      !livingSituation ||
      !previousExperience ||
      !familyComposition
    ) {
      setFormError(true);
      return;
    }

    if (!isEmailValid(email)) {
      setEmailError(true);
      return;
    }

    setEmailError(false);
    setFormError(false);
    setEmail("");
    setPhoneNo("");
    setLivingSituation("");
    setPreviousExperience("");
    setFamilyComposition("");
    togglePopup();
  };

  return (
    <div className="custom-adopt-form-container">
      <h2 className="custom-form-heading">Pet Adoption Application</h2>
      <div className="form-pet-container">
        <div className="pet-details">
          <div className="pet-pic">
            <img src={props.pet.picture} alt={props.pet.name} />
          </div>
          <div className="pet-info">
            <h2>{props.pet.name}</h2>
            <p>
              <b>Type:</b> {props.pet.type}
            </p>
            <p>
              <b>Age:</b> {props.pet.age}
            </p>
            <p>
              <b>Location:</b> {props.pet.location}
            </p>
          </div>
        </div>
        <div className="form-div">
          <form onSubmit={handleSubmit} className="custom-form">
            <div className="custom-input-box">
              <div className="email-not-valid">
                <label className="custom-label">Email:</label>
                {emailError && (
                  <p>
                    Please provide valid email address.
                  </p>
                )}
              </div>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="custom-input"
              />
            </div>
            <div className="custom-input-box">
              <label className="custom-label">Phone No.</label>
              <input
                type="text"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                className="custom-input"
              />
            </div>
            <div className="custom-input-box">
              <label className="custom-label">Living Situation:</label>
              <input
                type="text"
                value={livingSituation}
                onChange={(e) => setLivingSituation(e.target.value)}
                className="custom-input"
              />
            </div>
            <div className="custom-input-box">
              <label className="custom-label">Previous Pet Experience:</label>
              <input
                type="text"
                value={previousExperience}
                onChange={(e) => setPreviousExperience(e.target.value)}
                className="custom-input"
              />
            </div>
            <div className="custom-input-box">
              <label className="custom-label">Family and Other Pets:</label>
              <input
                type="text"
                value={familyComposition}
                onChange={(e) => setFamilyComposition(e.target.value)}
                className="custom-input"
              />
            </div>
            {formError && (
              <p className="error-message">Please fill out all fields.</p>
            )}
            <button type="submit" className="custom-cta-button custom-m-b">
              Submit
            </button>
            {showPopup && (
              <div className="popup">
                <div className="popup-content">
                  <h4>
                    Application Submitted; we'll get in touch with you soon.
                  </h4>
                </div>
                <button onClick={togglePopup} className="close-btn">
                  Close <i className="fa fa-times"></i>
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdoptForm;
