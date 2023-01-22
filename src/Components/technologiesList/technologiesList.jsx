import "./technologiesList.css";
import React, { useState } from "react";

export default function technologiesList(props) {
  function ImageUpload() {
    const [image, setImage] = useState(null);

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
            Upload Image:{" "}
            <input type="file" name="image" onChange={this.handleChange} />
          </label>
          <br />
          <button id="btn" type="submit" onClick={this.handleSubmit}>
            {" "}
            Submit{" "}
          </button>
        </form>
      </div>
    </div>
  );
}
