import "./technologiesList.css";
import React, { useState } from "react";


const TechnologiesList = () => {
  // src={require("../../img/src/MIMIC-CXR-Chest-X-Ray-00_0.jpeg")}
  const [image, setImage] = useState(require("../../img/MIMIC-CXR-Chest-X-Ray-00_0.jpeg"));
  const [previewImage, setPreviewImage] = useState(require("../../img/MIMIC-CXR-Chest-X-Ray-00_0.jpeg"));

  const [Diagnosis, setDiagnosis] = useState([]);



  // const 

  const handleChange = (event) => {
    setImage(event.target.files[0]);
    setPreviewImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(image);

    // handleChange(event);
    // setImage(event.target.files[0]);
    let formData = new FormData();
    // formData.append(event.target.files[0]);
    formData.append('file', image);
    // console.log(formData);
  
    fetch("http://localhost:5000", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) =>{ 
        console.log(data);
        setDiagnosis(data.Diagnosis);
      })
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
          <img
            src={previewImage}
            // height={200} width={200}
          />
        </div>

        <form action="">
          <label>
            {" "}
            Upload Image: <input type="file" name="image" onChange={handleChange} />
          </label>
          <br />
          <button id="btn" type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>

        <div className="tl-Navbar">
test

        </div>

        
      </div>
    </div>
  );
};

export default TechnologiesList;
