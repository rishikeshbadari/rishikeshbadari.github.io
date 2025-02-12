---
title: "Predictive Analysis for Olympic Wins"
excerpt: "Semester Project for CS 7641: Machine Learning"
collection: portfolio
---

<style>
.project__buttons {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
}

.btn {
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-weight: 500;
    transition: all 0.2s ease;
}

.btn--github {
    background-color: #24292e;
    color: white;
}

.btn--report {
    background-color: #2ea44f;
    color: white;
}

.btn:hover {
    opacity: 0.9;
    transform: translateY(-1px);
}

.btn i {
    margin-right: 0.5rem;
}

.project__summary {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #333;
}

.project__methods {
    /* margin-top: 1.5rem;
    padding-top: 1.5rem; */
}

.methods-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    margin-top: 1rem;
}

.method-card {
    background: #f8f9fa;
    padding: 1.25rem;
    border-radius: 6px;
    border: 1px solid #e9ecef;
}

.method-card h4 {
    color: #2d3748;
    margin: 0 0 0.75rem 0;
    font-size: 1.1rem;
    font-weight: 600;
}

.method-card p {
    margin: 0;
    color: #4a5568;
    font-size: 0.95rem;
    line-height: 1.5;
}
</style>

<div class="project__buttons">
    <a href="https://github.com/rishikeshbadari/cs7641" class="btn btn--github" title="View on GitHub" style="text-decoration: none;">
        <i class="fab fa-github" aria-hidden="true"></i><span>GitHub</span>
    </a>
    <a href="https://github.gatech.edu/pages/Machine-Learning-CS7641/Project_Repo/final_report.html" class="btn btn--report" title="View Final Report" style="text-decoration: none;">
        <i class="fas fa-file-alt" aria-hidden="true"></i><span>Final Report</span>
    </a>
</div>
<div class="project__summary">
    <p>This project explores predictive modeling for Olympic medal outcomes using machine learning techniques. The study analyzes a comprehensive dataset of Olympic athletes, examining factors such as age, gender, physical attributes, and historical performance to predict medal likelihood.</p>
    <div class="methods-grid">
        <div class="method-card">
            <h4>Supervised Learning</h4>
                <p>Implemented Random Forest (85.7% accuracy) and Logistic Regression (85.3% accuracy) for medal prediction.</p>
        </div>
        <div class="method-card">
            <h4>Unsupervised Learning</h4>
                <p>Used Gaussian Mixture Models and DBSCAN for athlete clustering and pattern discovery.</p>
        </div>
        <div class="method-card">
            <h4>Data Enhancement</h4>
                <p>Extended original dataset (271,116 entries) with Tokyo 2020 and Beijing 2022 data.</p>
        </div>
        <div class="method-card">
            <h4>Feature Engineering</h4>
                <p>Processed complex Olympic data including athlete demographics and performance metrics.</p>
        </div>
    </div>
</div>
