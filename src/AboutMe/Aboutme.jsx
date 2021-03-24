import React, { Component } from 'react'
import './aboutme.css'
export default class Aboutme extends Component {
    render() {
        return (
            <div className="about-me-section">
                <div className="about-me-body">
                <div className="about-tag">
                        <div className="bg-text">
                             <h2>About Me</h2>
                        </div>
                        <div className="main-text">
                              <h2>Know More About Me</h2>
                              <h1></h1>
                        </div>
                        
                    </div>
                    <div className="about-me-mid">
                        <div className="about-me-brief-l">
                            <h1>I'm <span style={{color:'#20c997'}}>Shahru Islam</span></h1>
                            <p>A self-learner, programmer with knowledge of object-oriented programming, Data Structure and problem-solving skills. Passionate with full stack web development, Mobile apps and Programming problem solving .Very much interested about learn new things with making live project.</p>
                            <h1 style={{marginTop:'20px',fontSize:'19px',color:'#20c997'}}>Hobby</h1>
                            <p>I like to play cricket in leisor time, then Visiting new place,specially hill site I love to visit most. Writting or Reading something,Cycling I like too.</p>
                        </div>
                        <div className="about-me-extra-r">
                             <ul>
                                 <li><b>Name</b> : <span style={{color:'#20c997'}}>Shahru Islam</span></li>
                                 <li><b>Age</b> : 22</li>
                                 <li><b>Email</b> : Shahruislam2000@gmail.com</li>
                                 <li><b>Address</b> : Dhaka,Bangladesh</li>
                                 <li><button className="download-cv-btn">Download Cv</button></li>
                             </ul>
                        </div>
                    </div>
                   
                </div>
            </div>
        )
    }
}
