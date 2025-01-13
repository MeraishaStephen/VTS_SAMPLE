import React from "react";
import './PythonLearn.css';

function PythonLearn() {
    const cards = [
        {
            icon: '💼',
            title: 'Career Opportunities',
            description: 'Explore roles like Full Stack Developer, Data Scientist, and AI Engineer.',
            additional: [
                { heading: 'Salary Range', content: '₹5,00,000 - ₹15,00,000 per year in India' },
                { heading: 'Top Employers', content: 'Google, TCS, Infosys, Accenture' }
            ]
        },
        {
            icon: '🎓',
            title: 'Comprehensive Learning',
            description: 'Understand both front-end and back-end development.',
            additional: [
                { heading: 'Topics', content: 'HTML, CSS, JavaScript, Python, Django, REST APIs' },
                { heading: 'Duration', content: '3-6 months for beginners' }
            ]
        },
        {
            icon: '📈',
            title: 'High Demand Skills',
            description: 'Python is one of the most in-demand programming languages.',
            additional: [
                { heading: 'Applications', content: 'Web Development, AI, Data Science' },
                { heading: 'Why Learn?', content: 'Python’s simplicity and versatility make it ideal for many domains.' }
            ]
        },
        {
            icon: '🧠',
            title: 'Personal Growth',
            description: 'Enhance problem-solving and logical thinking skills.',
            additional: [
                { heading: 'Key Skills', content: 'Algorithm building, clean coding practices' },
                { heading: 'Real-World Projects', content: 'Work on projects like e-commerce websites and dashboards.' }
            ]
        },
        {
            icon: '🌐',
            title: 'Global Opportunities',
            description: 'Work globally with Python’s widespread popularity.',
            additional: [
                { heading: 'International Jobs', content: 'Remote and onsite opportunities worldwide' },
                { heading: 'Communities', content: 'Join Python user groups and meetups.' }
            ]
        },
        {
            icon: '🔒',
            title: 'Secure Future',
            description: 'Stay relevant with a skillset that’s here to stay.',
            additional: [
                { heading: 'Certifications', content: 'Achieve certifications from Coursera, edX, etc.' },
                { heading: 'Upgrades', content: 'Constant updates with new Python libraries.' }
            ]
        }
    ];

    return (
        <div id='py-learn'>
        <div className="python-learn-container">
            <h1 className="python-learn-title">Why Learn Python?</h1>
            <div className="python-learn-cards">
                {cards.map((card, index) => (
                    <div key={index} className="python-learn-card">
                        <div className="learn-icon">{card.icon}</div>
                        <h2>{card.title}</h2>
                        <p>{card.description}</p>
                        {card.additional.map((item, i) => (
                            <div key={i} className="additional-info">
                                <strong>{item.heading}:</strong> {item.content}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}

export default PythonLearn;
