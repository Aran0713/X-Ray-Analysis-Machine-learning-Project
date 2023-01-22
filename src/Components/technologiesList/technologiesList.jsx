import "./technologiesList.css";
import React, { useState } from "react";

<<<<<<< HEAD

const TechnologiesList = () => {
  const [image, setImage] = useState(null);
=======
export default function technologiesList(props) {
  function ImageUpload() {
    const [image, setImage] = useState(null);
>>>>>>> f79ad0ca2a863d4ed3a046d66885cfc77262f961

    let handleChange = (event) => {
      setImage(event.target.files[0]);
    };
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("image", "image");

    fetch("", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

<<<<<<< HEAD
  const handleSubmit = (event) => {
    event.preventDefault();
    // handleChange(event);
    // setImage(event.target.files[0]);
    let formData = new FormData();
    // formData.append(event.target.files[0]);
    formData.append('file', image);
    console.log(formData);
  
    fetch("http://localhost:5000", {
      method: "POST",
      body: formData,
    }).then((response) => response.json()).then((data) => console.log(data)).catch((error) => console.error(error));
  
  };


=======
>>>>>>> f79ad0ca2a863d4ed3a046d66885cfc77262f961
  return (
    <div>
      {" "}
      <div className="tl">
        <div className="t-store">
          <div className="t-bg"></div>
        </div>

        <div className="tl-text">
          <h1 className="tl-title">Our Technology</h1>
        </div>
        <br />
        <div style={{ width: 600 }}>
          <p className="c-desc">
            The application is meant to take an image of a patient's lungs and
            detect wether the cells in their body are cancerous.
          </p>
          <img src="" alt="" />
        </div>

        <form action="">
          <label>
            {" "}
<<<<<<< HEAD
            Upload Image: <input type="file" name="image" onChange={handleChange} />
          </label>
          <br />
          <button id="btn" type="submit" onClick={handleSubmit}>
            Submit
=======
            Upload Image:{" "}
            <input type="file" name="image" onChange={this.handleChange} />
          </label>
          <br />
          <button id="btn" type="submit" onClick={this.handleSubmit}>
            {" "}
            Submit{" "}
>>>>>>> f79ad0ca2a863d4ed3a046d66885cfc77262f961
          </button>
        </form>
      </div>
    </div>
  );
}
