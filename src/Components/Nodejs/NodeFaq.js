import React, { useState } from "react";
import "../software/SoftwareFaq.css";

const NodeFaq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "The Training will be Live Classes or Recorded Sessions?",
      answer:
        "All the IT Trainings are Live Classes only via Microsoft Teams/Offline. If the online candidate misses any class, the recording will be shared only for the missed date. Complete recordings will be shared with lifetime access for future reference post-training completion of 3 months.",
    },
    {
      question: "Is there any Placement Guidance/Placement Assistance provided?",
      answer:
        "Yes, all VTS Trainees are eligible for the Placement Training Program, which is free of cost. This includes resume building, portfolio creation, business English, mock interviews, etc. If the candidate wishes to go to another organization, the Placement Assistance Program can be utilized to secure IT offers.",
    },
    {
      question:
        "What would be the Training Fees for 3 Months of IT Training with Placement Assistance?",
      answer:
        "The Training Fees would be between ₹15,000 to ₹25,000 (Inclusive of GST) based on the chosen IT Training. Payment can be made in 2 to 3 no-cost EMI instalments.",
    },
    {
      question: "Does the Placement Assistance Program include an Internship?",
      answer:
        "Yes, all candidates in the Placement Assistance Program are eligible for a 3-month internship (after completing the training and obtaining the completion certificate) with a stipend to gain real-world practical experience.",
    },
    {
      question: "What would be the Training Hours per Day?",
      answer:
        "Training will be 3 hours per day: 1.5 hours of Classroom/Virtual Classroom Training followed by 1.5 hours of Project Training. Training is available Monday to Saturday (9:00 AM to 8:00 PM).",
    },
    {
      question: "How Many Candidates Per Batch will be Allocated?",
      answer:
        "We restrict batches to 5 to 10 trainees to ensure effective learning.",
    },
    {
      question: "Will there be Exams during the Training Period?",
      answer:
        "Yes, weekly exams and reviews will be conducted by the mentors.",
    },
    {
      question: "Will IT Training Certificates be provided post-training completion?",
      answer:
        "Yes, both physical and soft copies of the certificate will be provided with online login and QR code verification. The certificate is ISO 9001:2015 certified and can be downloaded anytime from our website.",
    },
    {
      question: "Who will get the Internship with a Stipend?",
      answer:
        "All VTS Trainees are eligible to receive the internship with a stipend upon successful completion of their 3 months of IT Training.",
    },
    {
      question: "What is the Internship Period?",
      answer:
        "The internship period is 3 months post-training completion. It involves 7 hours of work per day with VETRI IT SYSTEMS PRIVATE LIMITED (Online/Offline).",
    },
    {
      question: "Will Projects be provided during the Internship Period?",
      answer:
        "Yes, projects will be allocated by the Project Manager and must be completed within the given timeline.",
    },
    {
      question: "Will an Internship Certificate be provided post-completion?",
      answer:
        "Yes, an Internship Certificate will be provided upon successful completion. It will include details of all projects completed during the internship.",
    },
    {
      question: "How Many Months of Placement Support will be provided?",
      answer:
        "Placement Training Program is free of cost and will be conducted for 20 to 25 days (2 hours per day). Placement support will have lifetime validity along with access to the WhatsApp Community Channel.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="assistance-faq-container">
      <h1 className="assistance-faq-title">
        Frequently <span>Asked</span> Questions
      </h1>
      <div className="assistance-faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="assistance-faq-item">
            <div
              className="assistance-faq-question"
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
              <span className="assistance-toggle-icon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="assistance-faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NodeFaq;
