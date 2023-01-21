import "./intro.css";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro"></h2>
          <h1 className="i-name">X-Ray Analysis</h1>

          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Something</div>
              <div className="i-title-item">Something else</div>
              <div className="i-title-item">More</div>
            </div>
          </div>

          <p className="i-desc">Text</p>
        </div>
      </div>

      <div className="i-right">
        <div className="i-bg"></div>
      </div>
    </div>
  );
};

export default Intro;
