import "./technologiesList.css";
import React, { useState } from "react";

function ImageUpload() {
  const [image, setImage] = useState(null);

  const handleChange = (event) => {
    setImage(event.target.files[0]);
  };
}

const handleSubmit = (event) => {
  event.preventDefault();
  let formData = new FormData();
  formData.append("image", "image");

  fetch("https://your-server-url.com/upload", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};

const TechnologiesList = () => {
  return (
    <div>
      {" "}
      <div className="tl">
        <div className="t-store">
          <div className="t-bg"></div>
        </div>

        <div className="tl-text">
          <h1 className="tl-title">Our Technology</h1>
          <p className="tl-desc">Text</p>
        </div>
        {/* /// */}
        <p className="c-desc">
          Please fill out the form. I will get back to you as soon as possible.
        </p>
        <form action="">
          <label>
            {" "}
            Upload Image: <input type="file" name="image" />
          </label>
          <br />
          <button id="btn" type="submit">
            {" "}
            Submit{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TechnologiesList;
