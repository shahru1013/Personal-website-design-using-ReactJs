import React, { Component } from 'react';
import './mainbody.css';
import ProfileImage from '../Images/profile.jpg';
import {faFacebook,faLinkedin,faGithub,faTwitter} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown,faBars} from '@fortawesome/free-solid-svg-icons';
import Aboutme from '../AboutMe/Aboutme'
import Resume from '../Resume/Resume'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact';
export default class Mainbody extends Component {
    constructor(){
        super();
        this.state={
            initialText : "I'm",
            allTextToAnimate : [" Shahru Islam"," a Learner"," a Programmer"," a Software Engineer"," a Web Developer"],//
            animateCount : 0,
            isStartAnimation : 0,
            navOpen : false
        }
    }
    /* Componentdidmount method for start animate function call */
    componentDidMount(){
       this.animateText();
    }


    /* Move to the clicked section with smooth scroll and change clicked buttons color*/
    navClickHandle(destinationId,clickedId){
        let elem = document.getElementById('responsive-nav-id');
        
        if(this.state.navOpen){
            elem.style.height='0px';

        }
        setTimeout(()=>{
            let destin = document.getElementById(destinationId);
           // let clicked = document.getElementById(clickedId);
            destin.scrollIntoView({
                block: "start",
                behavior: "smooth"
            });
        },300);
    }

    /*Animate text into Home Section */
    animateText(){
        let step = 0;
        let textToAnimate = this.state.isStartAnimation===0? this.state.initialText+this.state.allTextToAnimate[this.state.animateCount]:this.state.allTextToAnimate[this.state.animateCount];
        //let decrementSize = this.state.allTextToAnimate[this.state.animateCount];
        let animateElem = document.getElementById('animate-home-text');
        if( textToAnimate[0]!=='I' && animateElem.innerHTML[0]!=='I'){
            textToAnimate="I'm"+textToAnimate;
         }
        this.incrementText(textToAnimate,animateElem,step);
    }

    /*Increment Text for animate */
    incrementText(textToAnimate,animateElem,step){
        setTimeout(()=>{
           let textSize = textToAnimate.length;
           animateElem.innerHTML += textToAnimate[step];
           if(textSize>step+1){
               this.incrementText(textToAnimate,animateElem,step+1);
           }
           else{
            // alert(textToAnimate+" "+textSize);
             this.decrementText(textSize,animateElem,textToAnimate,0);
           }
        },150);
    }
    /*Decrement Text for animate */
    decrementText(decrementSize,animateElem,textToAnimate,checkFirstCall){
           let delay = checkFirstCall===0?2000:50;
           if(checkFirstCall === 0){
               let blinkT = document.getElementById('blink-text'); //start animation
               this.blinkText(blinkT);
           }
           else{
            let blinkT = document.getElementById('blink-text');
            blinkT.style.animation=""; //delete the animation of blink when decrement
           }
          setTimeout(()=>{
            
                 if( textToAnimate[0]!=='I'){
                    textToAnimate="I'm"+textToAnimate;
                 }
             
             animateElem.innerHTML=textToAnimate;
             textToAnimate = textToAnimate.substring(0,decrementSize-1);
             if(decrementSize > 4){
                 this.decrementText(decrementSize-1,animateElem,textToAnimate,checkFirstCall+1);
             }
             else{
                 this.setState({
                     animateCount:this.state.animateCount<4 ? this.state.animateCount+1:0
                 });
                 this.animateText();
             }
          },delay);
          this.setState({
            isStartAnimation:1
        });
        
    }

    /*Blink Text */
    blinkText(blinkT){
        setTimeout(()=>{
            blinkT.style.animation="animate-blink 0.7s infinite";
        },500);
    }

    /* Responsive navbar open */
    responsiveNavOpen(){
        let elem = document.getElementById('responsive-nav-id');
        
        if(!this.state.navOpen){
            elem.style.height='430px';

        }
        else{
            elem.style.height='0px';
        }
        this.setState({
            navOpen:!this.state.navOpen
        })
    }

    render() {
        return (
            <div className="main-body">
                <div className="body-resize">
                    {/* Left Navbar start */}
                    <div className="left-section">
                        {/* Image and name section start */}
                         <div className="img-name-sec">
                             <img src={ProfileImage} alt="profile"/>
                             <p>Shahru Islam</p>
                         </div>
                         {/* Image and name section end */}

                         {/* Navbar section start */}
                         <div className="navbar-sec">
                             <ul>
                                 <li tabIndex="1" onClick={()=>this.navClickHandle('home','li-home')} id='li-home'> Home</li>
                                 <li tabIndex="1" onClick={()=>this.navClickHandle('about-me','li-about')} id='li-about'> About Me</li>
                                 <li tabIndex="1" onClick={()=>this.navClickHandle('resume','li-resume')} id='li-resume'>Resume</li>
                                 <li tabIndex="1" onClick={()=>this.navClickHandle('portfolio','li-portfolio')} id='li-portfolio'>Portfolio</li>
                                 <li tabIndex="1" onClick={()=>this.navClickHandle('contact','li-contact')} id='li-contact'>Contact</li>
                             </ul>
                         </div>

                        { /*responsive navbar */}
                        

                         {/* Navbar section end */}
                         <div className="social-section">
                              <ul>
                                  <li id='nav-bars-res' onClick={()=>this.responsiveNavOpen()}><FontAwesomeIcon icon={faBars}/></li>
                                  <li><FontAwesomeIcon icon={faLinkedin}/></li>
                                  <li><FontAwesomeIcon icon={faGithub}/></li>
                                  <li><FontAwesomeIcon icon={faTwitter}/></li>
                                  <li><FontAwesomeIcon icon={faFacebook}/></li>
                              </ul>
                         </div>
                    </div>
                   
                    {/* Left Navbar end */}
                    <div className="right-section">
                    <div className="responsive-navbar" id="responsive-nav-id">
                              <ul>
                              
                                <img src={ProfileImage} alt="profile"/>
                               
                                 <li tabIndex="1" onClick={()=>this.navClickHandle('home','li-home')} id='li-home'> Home</li>
                                 <li tabIndex="1" onClick={()=>this.navClickHandle('about-me','li-about')} id='li-about'> About Me</li>
                                 <li tabIndex="1" onClick={()=>this.navClickHandle('resume','li-resume')} id='li-resume'>Resume</li>
                                 <li tabIndex="1" onClick={()=>this.navClickHandle('portfolio','li-portfolio')} id='li-portfolio'>Portfolio</li>
                                 <li tabIndex="1" onClick={()=>this.navClickHandle('contact','li-contact')} id='li-contact'>Contact</li>
                             </ul>
                         </div>
                        {/* Home with fixed bg start */}
                        <div className="home-section" id="home">
                            <div className="home-body">
                                <div className="text-animate-section" id="text-animate-section-id">
                                    <h3>Hey, Welcome to here</h3>
                                    <div className="anim-text">
                                       <span className="animate-text" id="animate-home-text"></span>
                                       <span id="blink-text" style={{marginLeft:'5px'}}>|</span>
                                    </div>
                                    <p>Be stronger than Yesterday!</p>
                                </div>
                                <div className="hire-button-section" id="hire-button-section-id">
                                     <button>Connect With Me</button>
                                     <h2 id="angle-down"><FontAwesomeIcon icon={faAngleDown}/></h2>
                                </div>
                            </div>
                        </div>
                     
                        {/* Home section end */}

                        {/* About me section start */}
                        <div className="about-me" id="about-me">
                            <Aboutme/>
                        </div>
                         {/* About me section end */}

                         <div className="resume" id="resume">
                             <Resume/>
                         </div>
                         <div className="portfolio" id="portfolio">
                             <Portfolio/>
                         </div>
                         <div className="contact-se" id="contact">
                              <Contact/>
                        </div>
                     </div>
                    </div>
            </div>
        )
    }
}
