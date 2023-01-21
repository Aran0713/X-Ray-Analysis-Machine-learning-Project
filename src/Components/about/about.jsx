import "./about.css";
import Feynman from "../../../src/img/feynman.png";

const about = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Feynman} alt="" className="a-img" />
        </div>
      </div>

      <div className="a-right">
        <h1 className="a-title">About Us</h1>
        <p className="a-sub">Text</p>
        <br />
      </div>
    </div>
  );
};

export default about;
