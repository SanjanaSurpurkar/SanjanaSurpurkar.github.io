const DATA = {
  home: `
    <section class="section">
      <h1 class="section-title">Home</h1>
      <img src="assets/profile.jpeg" alt="Profile Pic" class="profile-pic">
      <div class="card">
        <p><strong>About</strong><br>
        Proactive individual with a sound academic background and practical experience in projects, seeking opportunities to apply and expand my technical skills.
Committed to continuous learning and contributing effectively to organizational goals while upholding integrity and responsibility. Noted for adaptability, proactivity,
and the ability to work effectively in both individual and team-oriented environments</p>

        <p><strong>Email Id:</strong> surpurkarsanjana@gmail.com </p>
        <p><strong>Mobile:</strong> 8432805566 </p>
        <p><strong>Date of Birth:</strong> 2004-06-04 </p>
        <p><strong>Location:</strong> Solapur, Maharashtra, India</p>

        <div class="social-links">
  <a href="https://www.linkedin.com/in/sanjana-surpurkar" target="_blank">
    <img src="assets/social/linkedin.png" alt="LinkedIn">
  </a>
  <a href="https://github.com/SanjanaSurpurkar" target="_blank">
    <img src="assets/social/git.png" alt="GitHub">
  </a>
  <a href="https://leetcode.com" target="_blank">
    <img src="assets/social/leet.png" alt="LeetCode">
  </a>
</div>

      </div>
    </section>
  `,
  // rest remains same

education: `
<section class="section">
  <h1 class="section-title">Education</h1>

  <div class="grid">

    <div class="card edu-card">
      <h3>BTech CSE (AI/ML)</h3>
      <p>Walchand Institute of Technology, Solapur</p>
      <p><strong>CGPA:</strong> 9.93</p>

      <a href="assets/marksheets/UG.pdf" target="_blank" class="marksheet-btn">
        📄 View Marksheet
      </a>
    </div>

    <div class="card edu-card">
      <h3>HSC</h3>
      <p>A.D. Joshi Junior College, Solapur</p>
      <p><strong>Percentage:</strong> 92.17%</p>

      <a href="assets/marksheets/HSC.pdf" target="_blank" class="marksheet-btn">
        📄 View Marksheet
      </a>
    </div>

    <div class="card edu-card">
      <h3>SSC</h3>
      <p>Siddheshwar English Medium School, Solapur</p>
      <p><strong>Percentage:</strong> 95.80%</p>

      <a href="assets/marksheets/SSC.pdf" target="_blank" class="marksheet-btn">
        📄 View Marksheet
      </a>
    </div>

  </div>
</section>
`,


experience: `
<section class="section">
  <h1 class="section-title">Experience</h1>

  <div class="card experience-card">
    <div class="exp-header">
      <h3>Infosys Springboard 5.0 – Full Stack Developer Intern</h3>
      <a href="assets/internships/Infosys Springboard Internship.pdf" 
         target="_blank" 
         class="cert-icon" 
         title="View Certificate">View📜</a>
    </div>
    <span class="muted">2025</span>
    <p>
      Developed an online bidding system using Spring Boot, enabling secure,
      real-time auctions for 150+ users and reducing bid latency by 30%.
    </p>
    <a href="https://github.com/SanjanaSurpurkar/FSD.git" target="_blank">
      View Project
    </a>
  </div>

  <div class="card experience-card">
    <div class="exp-header">
      <h3>Path2Placement – Backend Developer Intern</h3>
      <a href="assets/internships/P2P.pdf" 
         target="_blank" 
         class="cert-icon" 
         title="View Certificate">View📜</a>
    </div>
    <span class="muted">2025</span>
    <p>
      Implemented backend integration using Firebase with React, automating
      CRUD operations and managing data for 50+ users to improve reliability
      and efficiency.
    </p>
    <a href="https://github.com/KarewarGaurav/P2P-Frontend.git" target="_blank">
      View Project
    </a>
  </div>

  <div class="card experience-card">
    <div class="exp-header">
      <h3>Microsoft Training (TechSaksham) – Trainee</h3>
      <a href="assets/internships/IR.pdf" 
         target="_blank" 
         class="cert-icon" 
         title="View Certificate">View📜</a>
    </div>
    <span class="muted">2025</span>
    <p>
      Completed 40+ hours of hands-on training in Shell Programming, Python,
      and Data Analytics, building practical scripts and analysis workflows
      to strengthen backend and data fundamentals.
    </p>
  </div>

</section>
`,

  projects: `
<section class="section">
  <h1 class="section-title">Projects</h1>

  <div class="grid">

    <div class="card">
      <h3>Bid Center – Online Auction & Bidding Platform</h3>
      <p>
        Developed a secure, real-time auction system using Spring Boot with
        RESTful APIs to handle live bidding and auction workflows efficiently.
      </p>
      <p><strong>Tech Stack:</strong> React · Spring Boot · REST APIs</p>
      <a href="https://github.com/SanjanaSurpurkar/FSD.git" target="_blank">View Project</a>
    </div>

    <div class="card">
      <h3>Python-Driven Postal Scheme Recommendation System</h3>
      <p>
        Built a rule-based recommendation engine that analyzes demographic data
        to suggest suitable postal schemes, supported by a visualization-driven website.
      </p>
      <p><strong>Tech Stack:</strong> Python · Data Analysis · Visualization</p>
      <a href="https://github.com/SanjanaSurpurkar/Postal_Schemes.git" target="_blank">View Project</a>
    </div>

    <div class="card">
      <h3>Website for Campus Preparation</h3>
      <p>
        Implemented backend services to manage users, courses, and test events
        using Firebase Collections and DynamoDB for scalable data handling.
      </p>
      <p><strong>Tech Stack:</strong> React · Firebase · DynamoDB</p>
      <a href="https://github.com/KarewarGaurav/P2P-Frontend.git" target="_blank">View Project</a><br>
    </div>

    <div class="card">
      <h3>XAI-Powered Multimodal Fake Job Detection</h3>
      <p>
        Built an explainable AI system using DistilBERT and metadata signals,
        achieving ~92% accuracy with interpretable predictions via LIME.
      </p>
      <p>
        Deployed a PMML-based inference pipeline with REST APIs, reducing false
        positives by ~30% and enabling real-time risk assessment.
      </p>
      <p><strong>Tech Stack:</strong> React · Spring Boot · MongoDB · XAI (Python)</p>
      <a href="https://github.com/SanjanaSurpurkar/MultiModal-XAI-FakeJobDetector.git" target="_blank">View Project</a>
    </div>

  </div>
</section>
`,

  skills: `
<section class="section">
  <h1 class="section-title">Skills</h1>
  <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));">
    <!-- Technical Skills with logos -->
    <div class="skill-card"><img src="assets/skills/java.png" alt="Java"><p>Java</p></div>
    <div class="skill-card"><img src="assets/skills/python.png" alt="Python"><p>Python</p></div>
    <div class="skill-card"><img src="assets/skills/atom.png" alt="React"><p>React</p></div>
    <div class="skill-card"><img src="assets/skills/spring.png" alt="Spring Boot"><p>Spring Boot</p></div>
    <div class="skill-card"><img src="assets/skills/sql-server.png" alt="SQL"><p>SQL</p></div>
    <div class="skill-card"><img src="assets/skills/dsa.png" alt="DSA"><p>DSA</p></div>
    <div class="skill-card"><img src="assets/skills/aws.png" alt="AWS"><p>AWS</p></div>
    <div class="skill-card"><img src="assets/skills/firebase.png" alt="Firebase"><p>Firebase</p></div>
    <div class="skill-card"><img src="assets/skills/github.png" alt="GitHub"><p>GitHub</p></div>
    <div class="skill-card"><img src="assets/skills/html-5.png" alt="HTML"><p>HTML</p></div>
    <div class="skill-card"><img src="assets/skills/css-3.png" alt="CSS"><p>CSS</p></div>
    <div class="skill-card"><img src="assets/skills/social.png" alt="Git"><p>Git</p></div>
    <!-- Add remaining skills similarly -->
    <div class="skill-card"><img src="assets/skills/leadership.png" alt="Leadership"><p>Leadership</p></div>
    <div class="skill-card"><img src="assets/skills/team.png" alt="Teamwork"><p>Teamwork</p></div>
    <div class="skill-card"><img src="assets/skills/multitasking.png" alt="Multitasking"><p>Multitasking</p></div>
    <div class="skill-card"><img src="assets/skills/study.png" alt="Learnability"><p>Learnability</p></div>
    <div class="skill-card"><img src="assets/skills/conversation.png" alt="Communication"><p>Communication</p></div>
    <div class="skill-card"><img src="assets/skills/presentation.png" alt="Presentation Skills"><p>Presentation Skills</p></div>
    <div class="skill-card"><img src="assets/skills/adaptability.png" alt="Adaptability"><p>Adaptabilit</p></div>
    <div class="skill-card"><img src="assets/skills/tenacity.png" alt="Persistency"><p>Persistency</p></div>
  </div>

  <h1 class="section-title" style="margin-top:3rem;">Certificates</h1>
  <div class="grid">
    <div class="cert-card"><a href="assets/certificates/AWS Academy Graduate - AWS Academy Cloud Foundations.pdf" target="_blank">AWS Academy Cloud Foundations</a></div>
    <div class="cert-card"><a href="assets/certificates/GenAI.pdf" target="_blank">Generative AI by Guvi</a></div>
    <div class="cert-card"><a href="assets/certificates/DevOps.pdf" target="_blank">DevOps</a></div>
    <div class="cert-card"><a href="assets/certificates/AICTE_Certificate.pdf" target="_blank">Deep Learning Forest fire Detection</a></div>
    <div class="cert-card"><a href="assets/certificates/PYTHON FOUDATION CERTIFICATION.pdf" target="_blank">Python Programming</a></div>
    <div class="cert-card"><a href="assets/certificates/Programming using Java.pdf" target="_blank">Java Programming</a></div>
    <div class="cert-card"><a href="assets/certificates/Foundation course on IR4.0 Technologies.pdf" target="_blank">Python + Data Analystics (Edunet)</a></div>
    <div class="cert-card"><a href="assets/certificates/Google Cloud Career Launchpad Certificate.pdf" target="_blank">Google Cloud</a></div>
    <div class="cert-card"><a href="assets/certificates/Vikasit Bharat.pdf" target="_blank">Vikasit Bharat Elocution Competition</a></div>
  </div>
</section>
`,
  contact: `
<section class="section">
  <h1 class="section-title">Contact</h1>

  <div class="grid contact-grid">
    <div class="card contact-card">
      <h3>Let’s Connect</h3>
      <form id="contactForm">
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <textarea name="message" placeholder="Your Message" required></textarea>

  <button type="submit">Send Message</button>

  <p id="formStatus" class="form-status"></p>
</form>

    </div>

    <div class="card location-card">
  <h3>Location</h3>

  <div class="map-wrapper">
    <iframe
      src="https://www.google.com/maps?q=Solapur,Maharashtra&output=embed"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  </div>
</div>
</section>
`,
};
