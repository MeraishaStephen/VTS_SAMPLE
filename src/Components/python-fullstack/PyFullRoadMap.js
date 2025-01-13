import React from "react";
import  "../uiux/UiUxRoadMap.css";
import img1 from '../images/Placement Assurance Program (1).jpg';


function PyFullRoadMap(){
    return(
        <div className="uiux-roadmap-container">
           <h1>VTS <span>Python Fullstack</span> Placement Assurance Roadmap</h1>
           <div className="uiux-roadmap-img">
               <img src={img1}  alt="wait" />
           </div>
        </div>
    )
}
export default PyFullRoadMap;