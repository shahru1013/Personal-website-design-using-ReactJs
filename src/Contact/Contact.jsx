import React, { Component } from 'react'
import './contact.css'
import {faFacebook,faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMobile,faEnvelope} from '@fortawesome/free-solid-svg-icons';
export default class Contact extends Component {
    render() {
        return (
            <div className="contact-section">
            <div className="contact-body">
              <div className="about-tag">
                    <div className="bg-text">
                         <h2>Contact</h2>
                    </div>
                    <div className="main-text">
                          <h2>Keep In Touch</h2>
                          <h1></h1>
                    </div>
                </div>
                <div className="main-section">
                    <div className="left-sec">
                       <div className="address">
                           <h1>ADDRESS</h1>
                           <p>
                               <span>Dhaka,Bangladesh</span>
                           </p>
                           <div className="contact">
                               <p><FontAwesomeIcon style={{color:'rgba(0, 0, 0,0.4)',marginRight:'5px'}} icon={faMobile}/>+8801787418344</p>
                               <p><FontAwesomeIcon style={{color:'rgba(0, 0, 0,0.4)',marginRight:'5px'}} icon={faMobile} icon={faEnvelope}/>Shahruislam2000@gmail.com</p>
                           </div>
                           <div className="follow-icons">
                           <h1>FOLLOW ME</h1>
                           <div className="icon">
                               <ul>
                                   <li><FontAwesomeIcon icon={faLinkedin}/></li>
                                   <li><FontAwesomeIcon icon={faGithub}/></li>
                                   <li><FontAwesomeIcon icon={faFacebook}/></li>
                               </ul>
                           </div>
                       </div>
                       </div>
                      
                    </div>
                    <div className="right-sec">
                        <h1>SEND ME A MESSAGE</h1>
                       <div className="input-div">
                           <div className="inputs">
                               <input type="text" placeholder="Name"></input>
                               <input type="text" placeholder="E-mail"></input>
                           </div>
                           <div className="text-area">
                               <textarea type='text' placeholder="Write About...."></textarea>
                           </div>
                       </div>
                       <button className="send-msg-btn">SEND</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
