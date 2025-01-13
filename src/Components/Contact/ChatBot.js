
import React, { useState } from 'react';
import './ChatBot.css'; 

const specificAnswers = {
    "What about our solution?": "Our solutions are tailored specifically for veterinary practices, integrating advanced technology to enhance care and efficiency.",
    "What does Vetritechnology Solutions offer?": "Vetritechnology Solutions provides a variety of technological solutions tailored for veterinary services.",
    "How can I register for your services?": "You can register by visiting our website and filling out the registration form.",
    "What are your hours of operation?": "Our hours are from 9 AM to 5 PM, Monday to Friday.",
    "How can I contact customer support?": "You can reach our customer support via the contact form on our website or by phone during business hours.",
    "What training do you offer?": "We provide extensive training for our software solutions, helping your team to become proficient.",
    "What types of software are available?": "Our software includes practice management, billing, and client management tools.",
    "How do I update my payment information?": "You can update your payment information from your account settings on our website.",
    "Is there a mobile app available?": "Yes, we have a mobile app that allows you to manage your practice on the go.",
    "What should I do if I encounter a bug?": "Please report any bugs through our support system for immediate assistance.",
    "How often is your software updated?": "We release updates regularly to enhance features and security.",
    "Do you provide technical support?": "Yes, we offer 24/7 technical support for all our users.",
    "Are there any training resources available?": "Yes, we have an extensive library of training resources including videos and guides.",
    "What is the process for onboarding new clients?": "Our onboarding process includes a series of training sessions and support for seamless integration.",
    "Can I use the software for multiple locations?": "Yes, our software can manage multiple locations under a single account.",
    "What payment methods do you accept?": "We accept credit cards, bank transfers, and other common payment methods.",
    "Are there any discounts for non-profits?": "Yes, we offer discounts for registered non-profit organizations.",
    "What should I do if I forget my password?": "You can reset your password using the 'Forgot Password' link on the login page.",
    "Do you offer a free trial?": "Yes, we offer a 30-day free trial for new users.",
    "How do I terminate my subscription?": "You can terminate your subscription via your account settings or by contacting support.",
    "Will I receive a confirmation after registration?": "Yes, a confirmation email will be sent upon successful registration.",
    "What analytics tools are included?": "Our software includes a variety of analytics tools to help you track performance.",
    "Can I export my data?": "Yes, you can export your data in several formats from your account settings.",
    "Are there custom solutions available?": "Yes, we can develop custom solutions tailored to your practice's specific needs.",
    "How do you handle data security?": "We prioritize data security by using encryption and secure servers.",
    "What is your refund policy?": "Refund information is detailed on our website; please review it carefully.",
    "Can I access the software internationally?": "Yes, our software is accessible globally with an internet connection.",
    "Is training included with the software purchase?": "Yes, all purchases come with complimentary training options.",
    "What do I do if my license key is lost?": "Contact our support team for assistance in retrieving your license key.",
    "Are there any additional fees?": "All fees are clearly outlined during the registration process, with no hidden costs.",
    "What integrations do you offer?": "We offer integrations with several major veterinary products and services.",
    "How can I provide feedback on the software?": "We welcome feedback through our website or directly to our support team.",
    "What features are being planned for future updates?": "We regularly share our product roadmap with users; please check our blog for updates.",
    "What web technologies does Vetritechnology Solutions use?": "We utilize the latest web technologies including HTML5, CSS3, JavaScript, and back-end frameworks to ensure robust and scalable solutions.",
    "How do I start a new project with Vetritechnology Solutions?": "To start a new project, please contact us through our website to schedule a consultation.",
    "Can I view project updates online?": "Yes, project updates can be accessed through our project management portal.",
    "What type of projects do you specialize in?": "We specialize in software development, web applications, and systems integration for veterinary practices.",
    "How can I communicate with my project team?": "You can communicate with your project team through our project management tools and via direct email.",
    "What is the expected timeline for project completion?": "Project timelines vary based on scope; we will provide a detailed timeline after consultation.",
    "What support do you provide during the project phase?": "We offer continuous support and updates throughout the project phase to ensure everything runs smoothly.",
    "Can I collaborate with your team on my project?": "Absolutely! We promote collaboration and welcome your input during the project development process.",
    "What is the process for making changes to my project?": "You can request changes through our project management portal, and we will discuss the feasibility and timeline.",
    "Are there any project management tools you recommend?": "We use industry-standard project management tools such as Trello, JIRA, and Asana for effective project tracking."
};

const keywords = {
    "solution": ["What about our solution?", "What does Vetritechnology Solutions offer?"],
    "register": ["How can I register for your services?", "Will I receive a confirmation after registration?"],
    "contact": ["How can I contact customer support?", "What should I do if I encounter a bug?"],
    "hours": ["What are your hours of operation?", "What training do you offer?"],
    "software": ["What types of software are available?", "How often is your software updated?", "Do you offer a free trial?"],
    "payment": ["How do I update my payment information?", "What payment methods do you accept?", "Are there any discounts for non-profits?"],
    "support": ["Do you provide technical support?", "What should I do if I forget my password?", "How can I provide feedback on the software?"],
    "data": ["Can I export my data?", "What do I do if my license key is lost?", "How do you handle data security?"],
    "subscription": ["Can I use the software for multiple locations?", "How do I terminate my subscription?", "Are there any additional fees?"],
    "analytics": ["What analytics tools are included?", "What features are being planned for future updates?"],
    "international": ["Can I access the software internationally?", "Is training included with the software purchase?"],
    "custom": ["Are there custom solutions available?", "What integrations do you offer?"],
    "web": ["What web technologies does Vetritechnology Solutions use?", "What support do you provide during the project phase?"],
    "project": ["How do I start a new project with Vetritechnology Solutions?", "Can I view project updates online?", "What type of projects do you specialize in?", "How can I communicate with my project team?"]
};


const ChatBot = () => {
    const [isChatVisible, setChatVisible] = useState(false);
    const [userQuestion, setUserQuestion] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [responses, setResponses] = useState([]);

    const toggleChat = () => {
        setChatVisible(!isChatVisible);
        // The button should only be hidden when the chat opens.
    };

    const handleCloseChat = () => {
        setChatVisible(false);
        setUserQuestion('');
        setResponses([]);
    };

    const handleInputChange = (event) => {
        const input = event.target.value;
        setUserQuestion(input);
        displaySuggestions(input);
    };

    const displaySuggestions = (input) => {
        const lowerCaseInput = input.toLowerCase();
        const newSuggestions = [];

        for (const question in specificAnswers) {
            if (question.toLowerCase().includes(lowerCaseInput) && lowerCaseInput && question !== userQuestion) {
                newSuggestions.push(question);
            }
        }

        for (const keyword in keywords) {
            if (lowerCaseInput.includes(keyword)) {
                newSuggestions.push(...keywords[keyword].filter(s => s !== userQuestion));
            }
        }

        setSuggestions(newSuggestions);
    };

    const handleQuestionSubmission = () => {
        if (userQuestion.trim()) {
            const response = specificAnswers[userQuestion] || "I'm sorry, I don't have an answer for that question.";
            setResponses([...responses, { question: userQuestion, answer: response }]);
            setUserQuestion('');
            setSuggestions([]);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleQuestionSubmission();
        }
    };

    return (
        <div>
            {/* Conditionally render the button only if the chat is not visible */}
            {!isChatVisible && (
                <button className="start-chat chat-button" onClick={toggleChat}>
                    🗨️
                </button>
            )}

            {isChatVisible && (
                <div className="chat-container" id="qa-container">
                    <button className="close-button" onClick={handleCloseChat}>✖️</button>
                    <div id="responseContainer">
                        {responses.map((res, index) => (
                            <div key={index}>
                                <div className='response'>{res.question}</div>
                                <div className='response'>{res.answer}</div>
                            </div>
                        ))}
                    </div>
                    <div className="question-input">
                        <input
                            type="text"
                            className="question-field"
                            value={userQuestion}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            placeholder="Type your question here..."
                        />
                        <button className="chat-button" onClick={handleQuestionSubmission}>
                            Submit
                        </button>
                    </div>
                    <div id="suggestionsContainer" className="suggestions">
                        {suggestions.map((suggestion, index) => (
                            <div key={index} onClick={() => setUserQuestion(suggestion)}>
                                {suggestion}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatBot;