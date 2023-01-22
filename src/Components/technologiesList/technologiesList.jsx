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

  fetch("", {
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
        </div>
        <br />
        <div style={{ width: 600 }}>
          <p className="c-desc">
            The application is meant to take an image of a patient's lungs and
            detect wether the cells in their body are cancerous.
          </p>
          <img
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fnews.mit.edu%2F2019%2Fmimic-chest-x-ray-database-0201&psig=AOvVaw0R-RgUhVktXiAqwdkh8o4K&ust=1674429144481000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNjs4OXk2fwCFQAAAAAdAAAAABAJ"
            alt=""
          />
          ;
        </div>

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
