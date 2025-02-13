---
layout: archive
title: ""
permalink: /experience/
author_profile: true
redirect_from:
  - /experience
---

{% include base_path %}

<style>
  .section-title {
    font-size: 22px;
    font-weight: 550;
    margin-bottom: 10px;
    font-family: var(--artdeco-reset-typography-font-family-sans);
    color: black;
  }

  .box-container {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
  }

  .experience-container {
    display: flex;
    align-items: flex-start;
    margin-bottom: 25px;
  }

  .experience-container img {
    width: 50px;
    height: 50px;
    margin-right: 15px;
  }

  .experience-content {
    flex: 1;
  }

  .job-title {
    font-weight: 550;
    font-size: 16px;
    font-family: var(--artdeco-reset-typography-font-family-sans);
    color: black;
  }

  .company-type {
    font-size: 14px;
    color: black;
  }

  .date-duration {
    font-size: 13px;
    color: #666; /* Dark gray */
  }

  .location {
    font-size: 13px;
    color: #666; /* Dark gray */
  }

.sub-role {
  margin-left: 10px; /* Reduced margin */
  padding-left: 0px; /* Reduced padding */
  border-left: 2px solid #ccc;
  margin-top: 10px;
}


  .timeline-dot {
    width: 8px;
    height: 8px;
    background-color: #666;
    border-radius: 50%;
    position: absolute;
    left: -5px;
    top: 6px;
  }

  .sub-role-content {
    position: relative;
    padding-left: 20px;
  }

  .sub-role-title {
    font-weight: bold;
    font-size: 14px;
  }

  .sub-role-dates {
    font-size: 13px;
    color: #666;
  }

  .sub-role-description {
    font-size: 13px;
    color: #444;
    margin-top: 5px;
  }
</style>

<!-- Experience Section -->
<div class="box-container">
  <div class="section-title">Experience</div>

  <!-- Meta Internship -->
  <div class="experience-container">
    <img src="/images/meta.png" alt="Meta Logo">
    <div class="experience-content">
      <div class="job-title">Incoming Software Engineer Intern</div>
      <div class="company-type">Meta · Internship</div>
      <div class="date-duration">May 2025 - Aug 2025 · 4 mos</div>
      <div class="location">Menlo Park, California, United States · On-site</div>
    </div>
  </div>

  <!-- Undergraduate Teaching Assistant at Georgia Tech -->
  <div class="experience-container">
    <img src="/images/gt.png" alt="Georgia Tech Logo">
    <div class="experience-content">
      <div class="job-title">Undergraduate Teaching Assistant</div>
      <div class="company-type">Georgia Institute of Technology · Part-time</div>
      <div class="date-duration">May 2023 – Present · 1 yr 10 mos</div>
      <div class="location">Atlanta, Georgia, United States · On-site</div>

      <!-- First Sub-Role -->
      <div class="sub-role">
        <div class="sub-role-content">
          <div class="sub-role-title">UTA for CS 3600: Intro to Artificial Intelligence</div>
          <div class="sub-role-dates">Aug 2024 – Present · 7 mos</div>
          <div class="sub-role-description">Prof. Mark Riedl, Prof. Weicheng Ma</div>
          <div class="sub-role-description">Search Algorithms, Markov Decision Processes, Probabilistic Reasoning, Neural Networks</div>
        </div>
      </div>

      <!-- Second Sub-Role -->
      <div class="sub-role">
        <div class="sub-role-content">
          <div class="sub-role-title">UTA for CS 2340: Objects &amp; Design</div>
          <div class="sub-role-dates">Jan 2024 – Aug 2024 · 8 mos</div>
          <div class="sub-role-description">Prof. Nimisha Roy</div>
          <div class="sub-role-description">Agile, Git, Object-Oriented Design, SOLID &amp; GRASP, App Development</div>
        </div>
      </div>

      <!-- Third Sub-Role -->
      <div class="sub-role">
        <div class="sub-role-content">
          <div class="sub-role-title">UTA for CS 2050: Intro to Discrete Math</div>
          <div class="sub-role-dates">May 2023 – Jan 2024 · 9 mos</div>
          <div class="sub-role-description">Prof. Ronnie Howard</div>
          <div class="sub-role-description">Logic, Proofs, Number Theory, Counting &amp; Probability</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Amazon Internship -->
  <div class="experience-container">
    <img src="/images/amazon.png" alt="Amazon Logo">
    <div class="experience-content">
      <div class="job-title">Software Engineer Intern</div>
      <div class="company-type">Amazon · Internship</div>
      <div class="date-duration">May 2024 - Aug 2024 · 4 mos</div>
      <div class="location">Sunnyvale, California, United States · On-site</div>
      <p class="sub-role-description">
        Developed a scalable service for generating personalized market research newsletters with user-defined filters and summary levels. Automated data extraction using 
        <strong>PhantomJSCloud API</strong> and <strong>BeautifulSoup</strong>, while integrating <strong>LLMs</strong> to detect, filter, and curate relevant updates based on user specifications. <br><br>

        Designed and deployed an <strong>AWS CDK pipeline</strong> that orchestrates multiple AWS services, including <strong>Lambda, S3, DynamoDB, Bedrock, SNS, EventBridge, and API Gateway</strong>. 
        Implemented <strong>Lambda functions</strong> to support both scheduled and on-demand processing, ensuring timely and accurate newsletter delivery. <br><br>

        Built an intuitive web interface that allows users to customize and configure newsletter preferences effortlessly. Automated email distribution using 
        <strong>AWS SNS</strong>, ensuring consistency in branding and formatting through professionally designed email templates.
      </p>
    </div>
  </div>
</div>

<!-- Education Section -->
<div class="box-container">
  <div class="section-title">Education</div>

  <!-- Master of Science -->
  <div class="experience-container">
    <img src="/images/gt.png" alt="Georgia Tech Logo">
    <div class="experience-content">
      <div class="job-title">Georgia Institute of Technology</div>
      <div class="company-type">Master of Science - MS, Computer Science</div>
      <div class="date-duration">Aug 2025 - May 2026</div>
    </div>
  </div>

  <!-- Bachelor of Science -->
  <div class="experience-container">
    <img src="/images/gt.png" alt="Georgia Tech Logo">
    <div class="experience-content">
      <div class="job-title">Georgia Institute of Technology</div>
      <div class="company-type">Bachelor of Science - BS, Computer Science</div>
      <div class="date-duration">Aug 2022 - May 2025</div>
    </div>
  </div>

  <!-- High School Diploma -->
  <div class="experience-container">
    <img src="/images/northview.png" alt="Northview Logo">
    <div class="experience-content">
      <div class="job-title">Northview High School</div>
      <div class="company-type">High School Diploma</div>
      <div class="date-duration">Aug 2018 - May 2022</div>
    </div>
  </div>
</div>

<!-- Skills Section -->
<div class="box-container">
  <div class="section-title">Skills</div>
  <div class="experience-content">
    <div class="sub-role">
      <div class="sub-role-content">
        <div class="sub-role-title">Programming Languages</div>
        <div class="sub-role-description">
          Python, Java, C, C++, C#, JavaScript, TypeScript, LC3 Assembly
        </div>
      </div>
    </div>

    <div class="sub-role">
      <div class="sub-role-content">
        <div class="sub-role-title">Technologies &amp; Frameworks</div>
        <div class="sub-role-description">
          SQL (Postgres, MySQL), NumPy, Keras, TensorFlow, React, Node.js, Firebase, Git, REST APIs, MongoDB, Docker, OpenCV, Kubernetes, Jupyter Notebook
        </div>
      </div>
    </div>

    <div class="sub-role">
      <div class="sub-role-content">
        <div class="sub-role-title">Cloud Platforms</div>
        <div class="sub-role-description">
          AWS (Lambda, S3, DynamoDB, SNS, Bedrock, EventBridge, API Gateway), Google Cloud Platform, Microsoft Azure
        </div>
      </div>
    </div>
  </div>
</div>
