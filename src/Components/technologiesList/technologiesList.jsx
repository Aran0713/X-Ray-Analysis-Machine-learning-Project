import "./technologiesList.css"


const TechnologiesList = () => {
    return (

        <div className="tl"> 

            <div className="t-store">
                <div className="t-bg"></div>
            </div>

            <div className="tl-text">
                <h1 className="tl-title">Technologies</h1>
                <p className="tl-desc">
                    I've worked with a range of technologies in the web development world. From Back-end to Design.
                </p>
            </div>

            <div className="tl-list">
                <div className="t"> 
                    <div className="t-browser">Frontend</div>
                    <ul>                                
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>Node.js</li>
                    </ul>
                </div>

                <div className="t"> 
                    <div className="t-browser">Backend</div>
                    <ul>
                        <li>Python</li>
                        <li>Java</li>
                        <li>C++</li>
                        <li>C</li>
                        <li>C#</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                    </ul>
                </div>

                <div className="t"> 
                    <div className="t-browser">Tools</div>
                    <ul>
                        <li>MySQL</li>
                        <li>Docker</li>
                        <li>Postman</li>
                        <li>Git</li>
                        <li>Bitbucket</li>
                        <li>Xcode</li>
                        <li>Terminal</li>
                        <li>Jira</li>
                        <li>AWS</li>
                        <li>Confluence</li>
                        <li>TensorFlow</li>
                    </ul>
                </div>

                <div className="t"> 
                    <div className="t-browser">Applications</div>
                    <ul>
                        <li>Visual Studio</li>
                        <li>SolidWorks</li>
                        <li>AutoCAD</li>
                        <li>Arduino IDE</li>
                        <li>MS Suites</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TechnologiesList;