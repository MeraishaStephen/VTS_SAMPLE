import React, { useState } from "react";
import "./UiUxFaq.css";

const UiUxFaq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How VTS Gives 100% Placement Assurance Training Programs?",
      answer:
        "VTS is India’s First IT Training Institute to Provide IT Job Offers for all IT Trainees who complete the Training Program with us. We place our VTS Trainees with our Own IT Startup - VETRI IT SYSTEMS PRIVATE LIMITED.",
    },
    {
      question: "What Would be the Training Fees for 3 Months of IT Training?",
      answer:
        "The Training Fees would be between ₹25,000 to ₹36,000 (Inclusive of GST) based on the IT Training Chosen by the Candidate. Payment can be made in 2 to 3 No Cost EMI Instalments.",
    },
    {
      question:
        "Any Placement Fees collected Additionally apart from Training Fees to Provide Job Offer?",
      answer:
        "No, the Placement is completely free of cost for those who successfully complete the Training & Internship (with Stipend). The fees paid are only for IT Training and not for Placement.",
    },
    {
      question:
        "What is the Eligibility to Join the 100% Placement Assurance Training Programs?",
      answer:
        "Career Gap candidates are eligible for this Program. Any Degree Candidates (No Arrears) below the age of 35 are eligible. Candidates must have a Laptop & Stable Internet Connection.",
    },
    {
      question:
        "How to Join the Placement Assurance Program?",
      answer:
        "Kindly reach out to our Customer Support team at +91 8438164827. The Customer Support team will assist you on the documents required to Join the Program. A Preliminary Test may get conducted to assess your Skillset. (Depends on your skills) Once the assessment gets over, your shared documents would be forwarded to the Background Verification team. The Verification team will call you to verify the identity and fact check also they do a Background check on your Profile before allocating the seat of Placement Assurance Program. Post Successful completion of Verification you will get a Welcome Email from our VETRI COMPANIES Onboarding team then you can make your First instalment of your Training Fees to Join the Placement Assurance Program. The Classes will get Started within two days after you make your First Instalment payment made. There is no waiting Period with us. Once the payment made within 2 days the classes will get started as per your available slots. A Complementary Welcome Kit (VETRI Companies BackBag, Writing Kit, VTS ID Card & Some Goodies) from VETRI COMPANIES will be mailed to your Communication Address if you choose for Online Training & Work From Home (Only for Tamilnadu Candidates). Offline Candidates can collect the Welcome Kit Instantly at our VTS Head Office. All the New Joiners will get the official email address before the Training gets started and the same will be communicated by our Onboarding Team over WhatsApp/Mobile. The Practical Tasks & Projects will be shared via Official email address only. The Trainings will be conducted via Microsoft Teams and the recordings would be shared by EOD (End of the Day).",
    },
    {
      question:
        "What is the Eligibility Criteria Required to Get the Job Offer from VETRI IT SYSTEMS PRIVATE LIMITED?",
      answer:
        "Candidates must complete the 3 Months of IT Training Program with 80% attendance, complete all tasks & projects, and complete a mandatory Internship (with Stipend).",
    },
    {
      question: "The Training will be Live Classes or Recorded Sessions?",
      answer:
        "All the IT Trainings are Live Classes via Microsoft Teams/Offline. If a class is missed, recordings will be provided for that date. Lifetime access to recordings is granted post-training completion.",
    },
    {
      question:
        "Which IT Trainings are Available with 100% Placement Assurance and Work From Home?",
      answer:
        "Python Full-Stack, Java Full-Stack, and UI/UX Designing are available with 100% Placement Assurance and Work From Home. Other trainings are available with Lifetime Placement Assistance.",
    },
    {
      question: "What would be the Training Hours Per Day?",
      answer:
        "Training will be 3 Hours per day: 1.5 hours of Classroom/Virtual Classroom Training followed by 1.5 hours of Project Training. Available Monday to Saturday (9:00 AM to 8:00 PM).",
    },
    {
      question: "How Many Candidates Per Batch will be Allocated?",
      answer: "We restrict batches to 5 to 10 trainees to ensure effective learning.",
    },
    {
      question: "Any Exams will be Conducted in the Training Period?",
      answer:
        "Yes, weekly exams and reviews will be conducted. Successful completion of Training and Internship is required for placement.",
    },
    {
      question:
        "IT Training Certificate will be given Post Completion of IT Training?",
      answer:
        "Yes, a Physical & Soft Copy of Certificate with Online Login & QR Code Verification will be provided. The certificate is ISO 9001:2015 certified and can be downloaded anytime.",
    },
    {
      question: "Who will get the Internship with Stipend?",
      answer:
        "All VTS Trainees are eligible to get the Internship with Stipend after successfully completing their 3 Months of IT Training.",
    },
    {
      question: "What is the Internship Period?",
      answer:
        "The Internship Period is 3 months post-training completion. It involves 7 hours of work per day with VETRI IT SYSTEMS PRIVATE LIMITED (Online/Offline).",
    },
    {
      question: "Any Projects Would be Provided in the Internship Period?",
      answer:
        "Yes, projects will be allocated by the Project Manager, and candidates must complete them within the allocated timeline.",
    },
    {
      question: "Internship Certificate will be provided Post Completion?",
      answer:
        "Yes, an Internship Certificate will be provided upon successful completion. It will include details of all projects completed during the internship.",
    },
    {
      question: "Internship Completion is Mandatory for Job Offer from VETRI IT SYSTEMS ?",
      answer:
        "Yes, Internship Completion is Mandatory for IT JOB Offer Process from VETRI IT SYSTEMS PRIVATE LIMITED.",
    },
    {
      question: "Any Background Verification will be Taken Place Before Providing the Job Offer from VETRI IT SYSTEMS PRIVATE LIMITED ?",
      answer:
        "Yes, Definitely. A Background verification will be performed before Providing the IT Job Offer from VETRI IT SYSTEMS PRIVATE LIMITED.",
    },
    {
      question: "What is the role will be given by VETRI IT SYSTEMS after the successful completion of VTS Training & VIS Internship?",
      answer:
        "All Successful IT Trainees will be tagged with either Junior Developer or Junior Designer roles at VETRI IT SYSTEMS PRIVATE LIMITED.",
    },
    {
      question: "How many months of placement support would be provided?",
      answer:
        "Placement Training Program is free of cost and will be given for 20 to 25 days (2 hours per day). Placement support will be provided with lifetime validity along with access to the WhatsApp Community Channel.",
    },
    {
      question: "Any bond/agreement associated with the VETRI IT SYSTEMS Job offer?",
      answer:
        "There is no bond associated with the VETRI IT SYSTEMS job offer.",
    },
    {
      question: "Any PF/UAN created for the VETRI IT SYSTEMS employees?",
      answer:
        "Yes, all the confirmed employees will receive PF and ESI benefits, and the UAN will be tagged against their employment.",
    },
    {
      question: "Does the candidate take 3 months of training alone?",
      answer:
        "Yes, it’s the candidate’s choice. If the candidate doesn’t want to continue the internship and job offer from VETRI IT SYSTEMS PRIVATE LIMITED, he/she will get the Training Completion Certificate along with the Placement Assistance Program free of cost.",
    },
    {
      question:
        "Does the candidate leave after completing the 3 months of training and 3 months of internship?",
      answer:
        "Yes, it’s the candidate’s choice. If the candidate doesn’t want to take the job offer from VETRI IT SYSTEMS PRIVATE LIMITED, he/she will get the Training Completion Certificate along with the Internship Certificate. The candidate can use the free Placement Training Program to get a job from other organizations.",
    },
    {
      question: "What is the the office working timings?",
      answer:
        "You can call us between 10.00 AM to 07.00 PM (Monday to Saturday - excluding public holidays). Our office number is - 8438164827.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="assurance-faq">Frequently <span>Asked</span> Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              {faq.question}
              <span className="toggle-icon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UiUxFaq;
