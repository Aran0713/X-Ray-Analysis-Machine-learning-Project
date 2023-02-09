import "./contact.css";
import Linkedin from "../../img/linkedin.png";
import GitHub from "../../img/GitHub-Logo.png";
import React, { useRef, useState } from "react";
import emailjs from 'emailjs-com';

const Contact = () => {
    const formRef = useRef()
    const [name, setName] = useState("");
    const form = document.getElementById('my_form');
 
    const handleChange = e => {
        setName(e.target.value);
    };

    const sendEmail = (e) =>{
        e.preventDefault();
        alert(name + "has successfully sent an email!")

        emailjs.sendForm('service_jclm1rl', 'template_mxb0gvl', formRef.current, 'QorUSfyGMetQIKlrc') // You need to pay using emailjs to actually send the email
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });    
        
        form.reset();
        setName();
    };




    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss the opportunity</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img
                                src={Linkedin}
                                alt=""
                                className="c-icon"
                            />
                            https://www.linkedin.com/in/aranabrahamlingam1313/
                        </div>
                        <div className="c-info-item">
                            <img
                                src={Linkedin}
                                alt=""
                                className="c-icon"
                            />
                            https://www.linkedin.com/in/ethan-kunce/
                        </div>

                        <div className="c-info-item">
                            <img
                                src={Linkedin}
                                alt=""
                                className="c-icon"
                            />
                            https://www.linkedin.com/in/kaleellawrence-boxx/
                        </div>

                        <div className="c-info-item">
                            <img
                                src={GitHub}
                                alt=""
                                className="c-icon"
                            />
                            https://github.com/Aran0713/X-Ray-Analysis-Machine-learning-Project

                        </div>
                    </div>
                </div>


                <div className="c-right">
                    <form ref={formRef} onSubmit={sendEmail} id="my_form" action="">
                        <input type="text" placeholder="Name" name="user_name" value = {name} onChange={handleChange}/>
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message"/>
                        <button id="btn" type="submit"> Submit </button>
                        
                    </form>

                </div>
            </div>
        </div>
    )
} 

export default Contact