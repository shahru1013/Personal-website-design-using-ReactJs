import React, { Component } from 'react';
import './portfolio.css';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShare,faBoxOpen,faAngleRight,faAngleLeft,faTimes} from '@fortawesome/free-solid-svg-icons';
import image from '../Images/project1.PNG'
export default class Portfolio extends Component {
    constructor(){
        super();
        this.state={
            isHover : 0,
            openProject:0
        }
    }
   /* animate div when hover-over*/
    workHov(isTrue,elemId){
       let elem = document.getElementById(elemId+'-hov');
       let shareBtn = document.getElementById(elemId+'-hov'+'-share');
       if(isTrue===1){
        elem.style.height='100%';
        shareBtn.style.animation='btn 0.5s';
       }
       else{
        elem.style.height='0%';     
        shareBtn.style.animation='';
       }
    }
    /* Open project brief*/
    openProjectBrief(id,stat){
        //alert('post-brief-id-'+id);
        console.log('post-brief-id-'+id+' '+stat);
       let elem = document.getElementById('post-brief-id-'+id);
       if(stat === 1){
           elem.style.width='90%';
       }
       else{
        elem.style.width='0%';
       }
    }
    // mouse into image
    mouseIntoBrief(val){
     let elem = document.querySelectorAll('#change-pic');
     let list = [...elem];
     console.log(list);
     if(val===1){
         list.forEach(el =>{
             el.style.opacity='1';
         })
     }
     else{
        list.forEach(el =>{
            el.style.opacity='0';
        })
     }
    }

    render() {
        return (
            <div className="portfolio-section">
            <div className="portfolio-body">
              <div className="about-tag">
                    <div className="bg-text">
                         <h2>Portfolio</h2>
                    </div>
                    <div className="main-text">
                          <h2>My Work</h2>
                          <h1></h1>
                    </div>
                </div>
            <div className="work-section">
                
            <div className="my-work"  onMouseOver={(e)=>this.workHov(1,2)} onMouseLeave={(e)=>this.workHov(0,2)}>
                    <div className="work-div">
                        
                        <div className="work-image">
                            
                        </div>
                        <div className="work-hover" id='2'>
                            <div className="text-sec" id="2-hov">
                            <h1 style={{color:'#20c997'}}>Chess Moves Finder</h1>
                            <p>This project shows the basic chess pieces moves in a 8*8 Board.</p>
                            <p style={{color:'#20c997'}}>Making with #ReactJs #JavaScript #CSS</p>
                            <div className="share" id="2-hov-share">
                                <ul>
                                    <li><FontAwesomeIcon icon={faBoxOpen}/></li>
                                    <li><FontAwesomeIcon icon={faGithub}/></li>
                                    <li><FontAwesomeIcon icon={faShare}/></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-work"  onMouseOver={(e)=>this.workHov(1,3)} onMouseLeave={(e)=>this.workHov(0,3)}>
                    <div className="work-div">
                        
                        <div className="work-image">
                        </div>
                        <div className="work-hover" id="3">
                            <div className="text-sec" id="3-hov">
                            <h1 style={{color:'#20c997'}}>Chess Moves Finder</h1>
                            <p>This project shows the basic chess pieces moves in a 8*8 Board.</p>
                            <p style={{color:'#20c997'}}>Making with #ReactJs #JavaScript #CSS</p>
                            <div className="share" id="3-hov-share">
                                <ul>
                                    <li><FontAwesomeIcon icon={faBoxOpen}/></li>
                                    <li><FontAwesomeIcon icon={faGithub}/></li>
                                    <li><FontAwesomeIcon icon={faShare}/></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-work"  onMouseOver={(e)=>this.workHov(1,5)} onMouseLeave={(e)=>this.workHov(0,5)}>
                    <div className="work-div">
                        
                        <div className="work-image">
                        </div>
                        <div className="work-hover" id="5">
                            <div className="text-sec" id="5-hov">
                            <h1 style={{color:'#20c997'}}>Chess Moves Finder</h1>
                            <p>This project shows the basic chess pieces moves in a 8*8 Board.</p>
                            <p style={{color:'#20c997'}}>Making with #ReactJs #JavaScript #CSS</p>
                            <div className="share" id="5-hov-share">
                                <ul>
                                    <li><FontAwesomeIcon icon={faBoxOpen}/></li>
                                    <li><FontAwesomeIcon icon={faGithub}/></li>
                                    <li><FontAwesomeIcon icon={faShare}/></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-work"  onMouseOver={(e)=>this.workHov(1,4)} onMouseLeave={(e)=>this.workHov(0,4)}>
                    <div className="work-div">
                        
                        <div className="work-image">
                            
                        </div>
                        <div className="work-hover" id="4">
                            <div className="text-sec" id="4-hov">
                            <h1 style={{color:'#20c997'}}>Chess Moves Finder</h1>
                            <p>This project shows the basic chess pieces moves in a 8*8 Board.</p>
                            <p style={{color:'#20c997'}}>Making with #ReactJs #JavaScript #CSS</p>
                            <div className="share" id="4-hov-share">
                                <ul>
                                    <li id="4" onClick={(e)=>this.openProjectBrief(4,1)}><FontAwesomeIcon icon={faBoxOpen}/></li>
                                    <li><FontAwesomeIcon icon={faGithub}/></li>
                                    <li><FontAwesomeIcon icon={faShare}/></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
            </div>
            <div className="post-brief" id="post-brief-id-4">
                  <h1>Chess Pieces Moves Visualizer <span id='cross' onClick={()=>this.openProjectBrief(4,0)}><FontAwesomeIcon icon={faTimes}/></span></h1>
                  <div className="brief-main">
                      <div className="image-showcase" onMouseOver={()=>this.mouseIntoBrief(1)} onMouseLeave={()=>this.mouseIntoBrief(0)}>
                          <h3 id='change-pic'><FontAwesomeIcon icon={faAngleLeft}/></h3>
                            <img src={image}></img>
                          <h3 id='change-pic'><FontAwesomeIcon icon={faAngleRight}/></h3>
                      </div>
                      <div className="about-project">
                          <h2>Project Info</h2>
                          <p>This project build with REactJs , Here I am using Javascript for making the path and visualize it. Its a good practice with 2d Grid implement in web.</p>
                          <h2>Project Details</h2>
                          <div className="details">
                              <ul>
                                  <li><p><b>Client</b>: Shahru Islam</p></li>
                                  <li><p><b>Technology</b>: ReactJs , JavaScript</p></li>
                                  <li><p><b>URL</b>: https://shahru1013.github.io</p></li>
                              </ul>
                          </div>
                      </div>
                  </div>
            </div>
         </div>
        )
    }
}
