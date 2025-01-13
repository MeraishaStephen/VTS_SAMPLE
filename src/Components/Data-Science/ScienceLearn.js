import React from 'react';
import './ScienceLearn.css';

function ScienceLearn() {
  return (
    <div id="data-learn">
      <div className="data-learn-container">
        <h1 className="data-learn-title">Why Learn Data Science?</h1>
        <div className="data-learn-grid">
          <div className="data-learn-card">
            <div className="data-icon">📊</div>
            <h2 className='d-h2'>Data Analysis</h2>
            <p className='d-p'>Learn how to analyze large datasets to uncover trends, patterns, and insights.</p>
            <p className='d-p1'><strong>Tools to Learn:</strong> Pandas, NumPy, SQL, and more.</p>
            <p className='d-p1'><strong>Techniques:</strong> Data cleaning, exploratory data analysis, and visualization.</p>
          </div>

          <div className="data-learn-card">
            <div className="data-icon">💻</div>
            <h2 className='d-h2'>Data Science Careers</h2>
            <p className='d-p'>Explore career opportunities in data science and machine learning.</p>
            <p className='d-p1'><strong>Average Salary:</strong> ₹6,00,000 - ₹20,00,000 per year in India.</p>
            <p className='d-p1'><strong>Job Roles:</strong> Data Scientist, Machine Learning Engineer, Data Analyst.</p>
          </div>

          <div className="data-learn-card">
            <div className="data-icon">⚙️</div>
            <h2 className='d-h2'>Machine Learning</h2>
            <p className='d-p'>Understand machine learning algorithms to build predictive models.</p>
            <p className='d-p1'><strong>Algorithms:</strong> Linear Regression, Decision Trees, Neural Networks.</p>
            <p className='d-p1'><strong>Libraries to Learn:</strong> Scikit-learn, TensorFlow, PyTorch.</p>
          </div>

          <div className="data-learn-card">
            <div className="data-icon">🌐</div>
            <h2 className='d-h2'>Big Data</h2>
            <p className='d-p'>Learn to work with large-scale datasets and big data technologies.</p>
            <p className='d-p1'><strong>Technologies:</strong> Hadoop, Spark, and NoSQL databases.</p>
            <p className='d-p1'><strong>Processing Power:</strong> How to scale data processing efficiently.</p>
          </div>

          <div className="data-learn-card">
            <div className="data-icon">📈</div>
            <h2 className='d-h2'>Data Visualization</h2>
            <p className='d-p'>Create compelling visualizations to communicate insights effectively.</p>
            <p className='d-p1'><strong>Tools:</strong> Tableau, Power BI, Matplotlib, Seaborn.</p>
            <p className='d-p1'><strong>Metrics:</strong> Learn key metrics for business intelligence and reporting.</p>
          </div>

          <div className="data-learn-card">
            <div className="data-icon">📚</div>
            <h2 className='d-h2'>Statistical Methods</h2>
            <p className='d-p'>Master statistical techniques for hypothesis testing, regression, and data sampling.</p>
            <p className='d-p1'><strong>Statistical Concepts:</strong> Mean, Median, Mode, Variance, and Correlation.</p>
            <p className='d-p1'><strong>Hypothesis Testing:</strong> T-tests, ANOVA, and Chi-Square tests.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScienceLearn;
