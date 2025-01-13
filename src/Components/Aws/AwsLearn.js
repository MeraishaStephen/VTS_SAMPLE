import React from "react";
import './AwsLearn.css'; 
import { FaCloud, FaAws, FaServer, FaDatabase, FaBook } from 'react-icons/fa';

function AWSLearn() {
    return (
        <div id="aws-learn">
<div className="aws-learn-container">
                <h1 className="aws-section-title">Why Learn AWS Cloud?</h1>
                <div className="aws-content-wrapper">
        <div className="aws-content-item">
            <div className="aws-lines"></div>
                <div className="aws-icons">
                        <FaAws className="aws-icon" />
                </div>
            <div className="aws-content">
                <div className="aws-c-detail">
                        <h3 className="aws-h3">Master Cloud Computing</h3>
                        <p className="aws-p">Grasp the basics of cloud computing and explore AWS's flexible, scalable solutions to transform businesses globally.</p>
                </div>
            </div>
        </div>

                    <div className="aws-content-item">
                    <div className="aws-lines"></div>
                    <div className="aws-icons">
                        <FaCloud className="aws-icon" />
                        </div>
                        <div className="aws-content">
                            <div className="aws-c-detail">
                        <h3 className="aws-h3">Explore Cloud Services</h3>
                        <p className="aws-p">Dive into essential AWS services like EC2, S3, and Lambda to optimize your cloud applications.</p>
                        </div>
                        </div>
                    </div>

                    <div className="aws-content-item">
                    <div className="aws-lines"></div>
                    <div className="aws-icons">
                        <FaServer className="aws-icon" />
                        </div>
                        <div className="aws-content">
                            <div className="aws-c-detail">
                        <h3 className="aws-h3"> Serverless Solutions</h3>
                        <p className="aws-p">Understand how serverless computing with AWS Lambda revolutionizes code execution without server.</p>
                        </div>
                        </div>
                    </div>

                    <div className="aws-content-item">
                    <div className="aws-lines"></div>
                    <div className="aws-icons">
                        <FaDatabase className="aws-icon" />
                        </div>
                        <div className="aws-content">
                            <div className="aws-c-detail">
                        <h3 className="aws-h3">Master AWS Databases</h3>
                        <p className="aws-p">Learn efficient database management with AWS services such as RDS, DynamoDB, and Redshift.</p>
                        </div>
                        </div>
                    </div>

                    <div className="aws-content-item">
                    <div className="aws-lines"></div>
                    <div className="aws-icons">
                        <FaBook className="aws-icon" />
                    </div>
                    <div className="aws-content">
                        <div className="aws-c-detail">
                        <h3 className="aws-h3">Access Learning Resources</h3>
                        <p className="aws-p">Discover tutorials, certification paths, and community support to advance your AWS expertise.</p>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AWSLearn;
