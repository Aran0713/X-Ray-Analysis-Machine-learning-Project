import "./technologiesList.css";
import DDiagnosis from "./diagnosis.jsx";
import React, { useState } from "react";


const TechnologiesList = () => {
  // src={require("../../img/src/MIMIC-CXR-Chest-X-Ray-00_0.jpeg")}
  const [image, setImage] = useState(require("../../img/MIMIC-CXR-Chest-X-Ray-00_0.jpeg"));
  const [previewImage, setPreviewImage] = useState(require("../../img/MIMIC-CXR-Chest-X-Ray-00_0.jpeg"));

  const [diagnosis, setDiagnosis] = useState(["No Diagnosis"]);


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
  
    fetch("http://kunce.ca:8264", {
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
      <div className="tl">
        <div className="tl-text">
          <h1 className="tl-title">Our Technology: Insight</h1>
        </div>
     
        <div className="tl-desc">
          <p className="c-desc">
            Upload a Chest X-ray and our application will let you what type of illness you have.
          </p>
          <img src={previewImage} alt="default"/>
        </div>

        <form action="">
          <label className="t-uploadText">
            Upload Image: <input className = "t-inputFile" type="file" name="image" onChange={handleChange} />
          </label>
          <br />
          <button className="t-Submitbutton" id="btn" type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>

        {/* </Diagnosis> */}
        <div className="t-diagnosis">
          <DDiagnosis dataSet={diagnosis}/>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesList;