import "./about.css"
import Feynman from "../../../src/img/feynman.png"

const about = () => {
    return (
        <div className="a">

            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={Feynman} alt="" className="a-img"/>

                </div>
            </div>


            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    I have had a passion for creating applications ever since I started coding. I enjoy the creativity it involves and the satisfaction of creating a working product.
                </p><br/>

                <p className="a-sub">
                    In my internship as a Backend Software Engineer at CAR SHAiR, I worked at an agile startup working directly with senior engineers to add new features and web APIs using TypeScript, test APIs using Jest and Postman, test user workflows using cypress, fix bugs, and flesh out devops infrastructure for a version 3 release of the app and website and for weekly releases to add more features and improve user satisfaction. I also led the AI component of the project (e.g., facial recognition, text to speech and currently working towards driver fatigue recognition) in python while assisting the robotics team to build and design a prototype device for cars.
                </p><br/>
 
                <p className="a-sub">
                In my Physics research position supervised by Dr. Rangan, we work on evaluating the interaction between light and matter at the nanoscale and the control of this interaction. Also, I have led teams in creating Python programming projects for research purposes. Lastly, worked on learning and applying my knowledge in programming quantum computers.
                </p><br/>
 
                <p className="a-sub">
                    In my free time, I volunteer at Newton's Taekwon-do as a 2nd degree black belt. I developed effective interpersonal and communication skills through leading group trainings, various open houses and events.
                </p>

                
            </div>

        </div>
    )
}

export default about