import React from "react";
import "./Video.css";

import newYearGift from "../../videos/new-year-gift.mp4";
import praveena1 from "../../videos/praveena-1.mp4";
import newYear from "../../videos/new-year.mp4";
import newGitHub from "../../videos/gitHub.mp4";
import vetriOffice from "../../videos/vetri-office.mp4";
import techDoubt from "../../videos/tech-doubt.mp4";
import meraisha from "../../videos/meraisha.mp4";
import vetriItOffer from "../../videos/vetri-it-offer.mp4";
import mahesh from "../../videos/mahesh.mp4";
// import mockInterview from "../../videos/mock-interview.mp4";

import vt from '../../videos/vetri-tech.mp4';


const videos = [
  { name: "New Year Gifts", file: newYearGift },
  { name: "Java Framework", file: praveena1 },
  { name: "Happy New Year 2025", file: newYear },
  { name: "New VTS Training Hub", file: newGitHub },
  { name: "Vetri Office Tour", file: vetriOffice },
  { name: "Technical Doubt", file: techDoubt },
  { name: "React State Management", file: meraisha },
  { name: "Vetri Offer Letter", file: vetriItOffer },
  { name: "Technical Doubt", file: mahesh },
  {name:"vt" , file:vt}
//   { name: "Mock Interview", file: mockInterview },
];

function Video() {
  return (
    <div className="video-container">
      {videos.map((video, index) => (
        <div className="video-card" key={index}>
          <video src={video.file} controls preload="metadata" width="300" height="200">
            Your browser does not support the video tag.
          </video>
          <div className="video-content">
            <h4>{video.name}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Video;
