import React from "react";
import './UiUxRoadMap.css';
import img1 from '../images/uiux-roadmap.png';


function UiUxRoadMap(){
    return(
        <div className="uiux-roadmap-container">
           <h1>vts <span>uiux</span> placement assurance roadmap</h1>
           <div className="uiux-roadmap-img">
               <img src={img1}  alt="wait" />
           </div>
        </div>
    )
}
export default UiUxRoadMap;