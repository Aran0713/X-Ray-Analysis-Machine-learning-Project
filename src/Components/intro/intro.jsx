import "./intro.css"

const Intro = () => {
    return (
        <div className = "i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h1 className="i-name">X-Ray Insight: The AI-Powered Diagnosis Platform</h1>
                    <div className="i-title">
                        <div className ="i-title-wrapper">
                            <div className="i-title-item">X-Ray Analysis</div>
                            <div className="i-title-item">Medical Library</div>
                            <div className="i-title-item">Support</div>
                        </div>
                    </div>

                    <p className="i-desc">
                    Our goal is to make medical diagnosis a faster, more efficient and cost-effective process for everyone. Join us in our mission to improve healthcare and change the way we detect and diagnose diseases.
                    </p>

                </div>
            </div>


            <div className="i-right">
                <div className="i-bg"></div>
            </div>

        </div>
    )
}

export default Intro;