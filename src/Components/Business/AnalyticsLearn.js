import React from "react";
import './AnalyticsLearn.css'; 

function AnalyticsLearn() {
    const cards = [
        {
            icon: '📊',
            title: 'Data Analysis',
            description: 'Learn how to analyze and interpret data to make informed business decisions.',
            additional: [
                { heading: 'Tools', content: 'Excel, Power BI, Tableau' },
                { heading: 'Techniques', content: 'Data visualization, Predictive analysis' }
            ]
        },
        {
            icon: '📈',
            title: 'Business Intelligence',
            description: 'Utilize data to optimize business strategies and improve performance.',
            additional: [
                { heading: 'Techniques', content: 'Dashboards, Reports, KPI tracking' },
                { heading: 'Key Areas', content: 'Market analysis, Financial analysis' }
            ]
        },
        {
            icon: '💡',
            title: 'Data-Driven Decisions',
            description: 'Make decisions based on data insights rather than intuition.',
            additional: [
                { heading: 'Key Areas', content: 'Sales forecasting, Operational efficiency' },
                { heading: 'Why Learn?', content: 'Data-driven decisions help businesses stay competitive.' }
            ]
        },
        {
            icon: '🧠',
            title: 'Problem Solving',
            description: 'Enhance your problem-solving skills with real-world data challenges.',
            additional: [
                { heading: 'Skills Developed', content: 'Critical thinking, Logical reasoning' },
                { heading: 'Projects', content: 'Market research, Business modeling' }
            ]
        },
        {
            icon: '🌐',
            title: 'Global Trends',
            description: 'Stay ahead by analyzing global business trends and data.',
            additional: [
                { heading: 'Global Insights', content: 'Emerging markets, Technology impact' },
                { heading: 'Resources', content: 'Global research reports, Industry conferences' }
            ]
        },
        {
            icon: '🔐',
            title: 'Data Security',
            description: 'Learn how to protect business data and ensure privacy compliance.',
            additional: [
                { heading: 'Tools', content: 'Encryption, Data masking' },
                { heading: 'Certifications', content: 'GDPR, Data privacy certifications' }
            ]
        }
    ];

    return (
        <div id='business-learn'>
            <div className="business-learn-container">
                <h1 className="business-learn-title">Why Learn Business Analytics?</h1>
                <div className="business-learn-cards">
                    {cards.map((card, index) => (
                        <div key={index} className="business-learn-card">
                            <div className="business-icon">{card.icon}</div>
                            <h2>{card.title}</h2>
                            <p>{card.description}</p>
                            {card.additional.map((item, i) => (
                                <div key={i} className="business-additional-info">
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

export default AnalyticsLearn;
