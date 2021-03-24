import React, { Component } from 'react'
import './resume.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload,faShare} from '@fortawesome/free-solid-svg-icons';
export default class Resume extends Component {
    constructor(){
        super();
        this.state={
            event:'scroll',
            isVisit:0
        }
    }

    componentDidMount(){
        window.addEventListener(this.state.event, ()=>{
            var elem2 = document.getElementById("myBar2");
            var elem1 = document.getElementById("myBar1");
            var elem3 = document.getElementById("myBar3");
            var elem4 = document.getElementById("myBar4");
            var elem5 = document.getElementById("myBar5");
            var elem6 = document.getElementById("myBar6");
            var elem7 = document.getElementById("myBar7");
            var elem8 = document.getElementById("myBar8");
            var ar =[elem1,elem2,elem3,elem4,elem5,elem6,elem7,elem8];
            var tm = [95,80,85,85,60,60,80,69];
            var i=new Array(8).fill(0);
            var wi=new Array(8).fill(0);
            var element = document.getElementById('skill');
            this.isScrolledIntoView(element,ar,tm,i,wi);
            //alert('ha'+isVisible)
            //console.log('ha'+isVisible)
           //
        } );
    }
    //check is visible into screen
    isScrolledIntoView(el,ar,tm,i,wi) {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;
    
        // Only completely visible elements return true:
        var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight+200);
        if(isVisible===true && this.state.isVisit===0){
            this.move(ar,tm,i,wi);
        
            this.setState({
                isVisit:1,
                event:''
            })
        }
      
        //console.log('v '+isVisible+' '+elemTop+' '+elemBottom+' '+window.innerHeight)
    }
    move(elem,k,ze,wi) {
        //animate on Skill List
        for(let pos=0;pos<elem.length;pos++){
           ze[pos]=1;
           wi[pos]=1;
           var id = setInterval(frame, 15);
           function frame() {
           if (wi[pos] >= k[pos]) {
            clearInterval(id);
            ze[pos] = 0;
            } else {
            wi[pos]++;
            elem[pos].style.width = wi[pos] + "%";
            }
          }
        }
      }
       
 
    render() {
        return (
            <div className="resume-section">
              <div className="resume-body">
                <div className="resume-tag">
                    <div className="bg-text">
                         <h2>Summary</h2>
                    </div>
                    <div className="main-text">
                          <h2>Resume</h2>
                          <h1></h1>
                    </div>
                </div>
                <div className="resume-mid-designation">
                    <div className="my-education">
                        <p className='title'>My Education</p>
                        <div className="job-details">
                            <p className="date">2019-2023</p>
                            <h3>Computer Science and Engineering</h3>
                            <p className='where' style={{color:'tomato'}}>UITS</p>
                            <div className="detail">Bachelor of Science.</div>
                        </div>
                    </div>
                    <div className="my-experience">
                         <p className="title">My Experience</p>
                         <div className="job-details">
                            <p className="date">2022-2023</p>
                            <h3>Jr. Software Engineer</h3>
                            <p className='where' style={{color:'tomato'}}>Adu Tech.</p>
                            <div className="detail">Work with a lot of energy .</div>
                        </div>
                    </div>
                </div>

                <div className="my-skills-section" id="skill">
                 <h2 className="skill-title">My Skills</h2>
                <div class="skill-list">
                    <div className="f-sec">
                    <ul>
                        <li>
                            <p>HTML</p>
                            <div id="myProgress">
                                <div class="myBar" id="myBar1"></div>
                              </div>
                        </li>
                        <li>
                            <p>CSS</p>
                            <div id="myProgress">
                                <div class="myBar" id="myBar2"></div>
                              </div>
                        </li>
                        <li>
                            <p>JS</p>
                            <div id="myProgress">
                                <div class="myBar" id="myBar3"></div>
                              </div>
                        </li>
                        <li>
                            <p>ReactJs</p>
                            <div id="myProgress">
                                <div class="myBar" id="myBar4"></div>
                              </div>
                        </li>
                        </ul>
                        </div>
                        <div className="s-sec">
                        <ul>
                        <li>
                            <p>NodeJs</p>
                            <div id="myProgress">
                                <div class="myBar" id="myBar5"></div>
                              </div>
                        </li>
                        <li>
                            <p>PHP</p>
                            <div id="myProgress">
                                <div class="myBar" id="myBar6"></div>
                              </div>
                        </li>
                        <li>
                            <p>C++</p>
                            <div id="myProgress">
                                <div class="myBar" id="myBar7"></div>
                              </div>
                        </li>
                        <li>
                            <p>Java</p>
                            <div id="myProgress">
                                <div class="myBar" id="myBar8"></div>
                              </div>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
                <button className="download-cv">Download Cv<FontAwesomeIcon style={{fontSize:'12px',color:'gray',marginTop:'5px',marginLeft:'10px'}} icon={faDownload}/> </button>
              </div>
            </div>
        )
    }
}
