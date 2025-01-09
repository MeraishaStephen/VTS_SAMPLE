import React from 'react';
import './WhyChooseUs.css'; 
import img1 from '../images/placement.841bc569c4d462ef2f82.png';
import img2 from '../images/abt5.png';
import img3 from '../images/abt4.png';
import img4 from '../images/flexible_timing.dd2cb17e748fc19f34cc.png';
import img5 from '../images/emi options.1edccd1dc66f1c3d4089.jpg';
import img6 from '../images/work_from_home.2c0073bce492379c6560.png';
import img7 from '../images/of.8fa4d324accede68a79e.png';
import img8 from '../images/certification_approval.574c8de330ff79802a87.png';


const WhyChooseUs = () => {
  return (
    <section className="vts-difference">
      <div className="container-difference">
        <h2>How <span>VTS</span> Is Different From <span>Other</span> Training Institutes???</h2>
        <div className="features">
          <div className="feature-difference">
            <img src={img1} alt="100% Guaranteed Placement" />
            <p>100% Guaranteed Placement</p>
          </div>
          <div className="feature-difference">
            <img src={img2} alt="Industry Expert Trainers" />
            <p>Industry Expert Trainers</p>
          </div>
          <div className="feature-difference">
            <img src={img3} alt="1 - 1 Expert Mentorship" />
            <p>1 - 1 Expert Mentorship</p>
          </div>
          <div className="feature-difference">
            <img src={img4} alt="Flexible Batch Timings" />
            <p>Flexible Batch Timings</p>
          </div>
          <div className="feature-difference">
            <img src={img5} alt="EMI Options Available" />
            <p>EMI Options Available</p>
          </div>
          <div className="feature-difference">
            <img src={img6} alt="Online Training" />
            <p>Online Training with Work From Home Opportunity</p>
          </div>
          <div className="feature-difference">
            <img src={img7} alt="Work in Live Projects" />
            <p>Work in Live Projects</p>
          </div>
          <div className="feature-difference">
            <img src={img8} alt="Certification Approval Guaranteed" />
            <p>Certification Approval Guaranteed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
