import "./intro.css"

const Intro = () => {
    return (
        <div className = "i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My Name is</h2>
                    <h1 className="i-name">Aran Abrahamlingam</h1>

                    <div className="i-title">
                        <div className ="i-title-wrapper">
                            <div className="i-title-item">Backend Engineer</div>
                            <div className="i-title-item">Software Developer</div>
                            <div className="i-title-item">Physics Researcher</div>
                        </div>
                    </div>

                    <p className="i-desc">
                    Solution-driven software developer empowered by innovation 
                    and creativity. Experience in prioritizing customer 
                    satisfaction in a highly collaborative and fast paced 
                    work environment. I have had a passion for creating 
                    applications ever since I started coding. I enjoy the 
                    creativity it involves and the satisfaction of creating a 
                    working product.
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