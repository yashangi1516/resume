// Sample Resume Repository for Instant Recruiter Testing
const SAMPLE_RESUMES = {
    "Data Science": `John Doe
Email: john.doe@email.com | Phone: +1-555-0199 | Portfolio: github.com/johndoe

SUMMARY
Detail-oriented and analytical Data Scientist with 3+ years of experience leveraging machine learning, statistical modeling, and data visualization to drive business decisions. Proven record of developing predictive models and automating data pipelines.

TECHNICAL SKILLS
- Programming: Python, R, SQL
- Libraries: Pandas, NumPy, Scikit-Learn, TensorFlow, Keras, NLTK
- Data Storage: MySQL, PostgreSQL, MongoDB
- Tools & Visualization: Git, Tableau, PowerBI, Jupyter Notebooks
- Core Concepts: Linear Regression, Random Forests, Neural Networks, Natural Language Processing, Classification, Data Cleaning

EXPERIENCE
Data Scientist | TechCorp Solutions (June 2023 - Present)
- Developed and deployed a machine learning model using classification algorithms that predicted customer churn with 89% accuracy, saving $50k in quarterly retention.
- Automated data preparation workflows using Python, reducing processing time by 40%.
- Designed and maintained relational databases with MySQL, optimizing query performance for analytical dashboards.

Junior Data Analyst | Insight Analytics (Jan 2022 - May 2023)
- Conducted exploratory data analysis on large datasets to identify key market trends.
- Built interactive dashboards in Tableau to communicate performance metrics to senior executives.`,

    "Java Developer": `Jane Smith
Email: jane.smith@email.com | Phone: +1-555-0144 | LinkedIn: linkedin.com/in/janesmith

PROFESSIONAL SUMMARY
Talented Software Engineer with 4 years of hands-on experience building enterprise-grade backend systems. Expert in Java development, object-oriented design, and database integration. Adept at building RESTful microservices.

SKILLS
- Core Java, J2EE, Spring Framework, Spring Boot, Hibernate
- Web Services: RESTful APIs, SOAP, JSON
- Database: Oracle, MySQL, PostgreSQL, Spring Data JPA
- Build & DevOps: Maven, Git, Docker, Jenkins
- Methodologies: Agile/Scrum, JUnit Testing, Test-Driven Development (TDD)

PROFESSIONAL EXPERIENCE
Java Developer | Global Systems Inc. (March 2022 - Present)
- Architected and developed REST APIs using Spring Boot and Hibernate for a high-traffic banking application, improving response times by 25%.
- Implemented microservices architecture with Spring Cloud, enhancing system modularity and scalability.
- Managed database schemas and database integration using PostgreSQL.
- Conducted unit testing using JUnit to ensure 90%+ code coverage.

Backend Engineer | Innovate Software (Feb 2020 - Feb 2022)
- Collaborated with front-end designers to integrate user-facing web elements with Java backend APIs.
- Maintained legacy Java applications, migrating critical endpoints to Spring MVC.`,

    "DevOps Engineer": `Alex Mercer
DevOps Engineer | Denver, CO | alex.m@email.com | github.com/alexdevops

PROFILE
Automation-focused DevOps Engineer with 3+ years of experience in system administration, continuous integration, containerization, and cloud infrastructure management. Passionate about infrastructure-as-code and scaling operations.

TECHNICAL CAPABILITIES
- Cloud: Amazon Web Services (AWS) (EC2, S3, RDS, IAM, Route53)
- Containerization: Docker, Kubernetes
- CI/CD Tools: Jenkins, GitHub Actions, GitLab CI
- Configuration Management & IaC: Terraform, Ansible
- Operating Systems: Linux (Ubuntu, CentOS, RHEL), Bash scripting
- Monitoring: Prometheus, Grafana

WORK EXPERIENCE
DevOps Engineer | CloudScale Tech (July 2023 - Present)
- Automated cloud infrastructure deployment on AWS using Terraform, reducing environment provisioning time from days to minutes.
- Designed and optimized CI/CD pipelines in Jenkins to containerize and deploy Java and Python applications automatically.
- Orchestrated container clusters using Kubernetes (EKS), managing deployments, services, and ingress rules.
- Set up monitoring and alerting dashboards using Prometheus and Grafana, improving system uptime to 99.95%.

Systems Administrator | NetOps Solutions (June 2021 - June 2023)
- Maintained Linux servers, performing patches, backups, and user access management.
- Developed Bash scripts to automate routine system cleanups and logs monitoring.`,

    "HR": `Sarah Connor
Denver, CO | sarah.c@email.com | +1-555-0188

OBJECTIVE
Experienced Human Resources specialist seeking to leverage 4 years of recruiting, talent acquisition, and employee relations skills to support organizational growth and cultivate a positive corporate culture.

CORE COMPETENCIES
- Full-cycle Recruiting & Talent Acquisition
- Employee Onboarding & Offboarding
- Performance Management & Appraisals
- Conflict Resolution & Employee Relations
- Human Resources Information Systems (HRIS)
- Communication, Interpersonal Skills, Training

EXPERIENCE
HR Generalist | Apex Systems (September 2022 - Present)
- Managed full-cycle recruitment processes for technical and administrative positions, sourcing 60+ successful hires.
- Designed and implemented a new employee onboarding program, raising first-month retention by 15%.
- Mediated workplace conflicts, facilitating discussions to resolve employee relations issues.
- Administered performance management cycles, training managers on conducting appraisals.

HR Assistant | Pioneer Ltd. (Jan 2021 - Aug 2022)
- Maintained employee databases and files, ensuring compliance with labor laws.
- Screened resumes, scheduled interviews, and conducted initial phone screening for job applicants.`,

    "Web Designing": `Elena Rostova
Web Designer & Front-End Developer | Denver, CO | elena.design@email.com

ABOUT ME
Creative and detail-oriented Web Designer with 3+ years of experience designing and building beautiful, responsive, and user-centric websites. Combines graphic design skills with front-end development proficiency.

DESIGN & TECHNICAL SKILLS
- Design Tools: Figma, Adobe Photoshop, Illustrator
- Front-End Web: HTML5, CSS3, JavaScript, jQuery, Bootstrap
- CMS Platforms: WordPress, Webflow
- Principles: UI/UX Design, Wireframing, Prototyping, Responsive Web Design, Mobile-First Design

EXPERIENCE
Web Designer | Creative Digital Agency (November 2022 - Present)
- Created complete UI/UX mockups, wireframes, and prototypes in Figma for 20+ client websites.
- Developed responsive front-end pages using HTML, CSS, and Bootstrap, ensuring cross-browser compatibility.
- Customized WordPress themes and built custom landing pages that boosted client conversion rates by an average of 18%.
- Applied SEO best practices during web development to improve search visibility.

Junior Web Designer | Freelance / Contract (Jan 2021 - Oct 2022)
- Designed branding assets, logos, and web layouts for local small businesses.
- Coded static website designs using HTML and CSS.`,
    
    "Python Developer": `David Miller
Denver, CO | david.m@email.com | github.com/dmiller-python

SUMMARY
Experienced Python Developer with 3+ years of professional software engineering experience. Skilled in backend development, web scraping, and API integrations. Passionate about writing clean, maintainable, and efficient code.

TECHNICAL SKILLS
- Programming: Python (Expert), SQL, JavaScript
- Frameworks: Django, Flask, FastAPI
- Databases: PostgreSQL, SQLite, MySQL, Redis
- Tools: Git, Docker, Postman, Linux, Celery
- Key Libraries: Requests, BeautifulSoup, PyTest, Pandas

EXPERIENCE
Python Developer | CyberWeb Technologies (August 2023 - Present)
- Developed and optimized REST APIs for a web-based e-commerce platform using Django and PostgreSQL.
- Implemented background tasks using Celery and Redis to handle email notifications and report generation.
- Created automated web scraping scripts using Python BeautifulSoup and Requests to gather competitor pricing intelligence.
- Wrote unit tests using PyTest, maintaining 85%+ test coverage.

Software Engineer | DevGroup LLC (Jan 2022 - July 2023)
- Built lightweight microservices and API endpoints using Flask.
- Collaborated in an Agile team of 5 developers, performing code reviews and Git version control.`,

    "Testing": `Robert Vance
QA Automation Engineer | robert.v@email.com | +1-555-0177

SUMMARY
Quality Assurance Engineer with 4 years of experience specializing in test automation, manual testing, and QA methodologies. Expert in writing test plans, finding system defects, and developing automated test scripts for web applications.

TECHNICAL SKILLS
- Test Automation: Selenium WebDriver, PyTest, JUnit
- Languages: Java, Python, JavaScript
- Testing Types: Automation Testing, Functional, Regression, Integration, API Testing
- Tools: Postman, Git, Jira, Jenkins, Chrome DevTools
- Databases: SQL, Oracle

EXPERIENCE
QA Automation Engineer | QA Dynamics (May 2022 - Present)
- Designed and built a test automation framework using Selenium WebDriver and Python, reducing manual regression testing efforts by 60%.
- Created and executed API test suites in Postman for backend REST services validation.
- Documented bug reports and tracked issues in Jira, collaborating closely with developers.
- Integrated automated tests into Jenkins CI/CD pipeline for regression checks.

Manual Tester | SoftTest Inc. (Feb 2020 - April 2022)
- Performed functional, integration, and user acceptance testing (UAT) for diverse web projects.
- Authored 300+ detailed test cases and test scenarios based on business requirement documents.`,
    
    "DevOps Engineer (Spam / Stuffed)": `Alex Mercer
DevOps Engineer | Denver, CO | alex.m@email.com

AWS AWS AWS AWS AWS AWS AWS AWS AWS AWS AWS AWS AWS AWS AWS AWS AWS AWS AWS AWS AWS AWS AWS
Kubernetes Kubernetes Kubernetes Kubernetes Kubernetes Kubernetes Kubernetes Kubernetes
Docker Docker Docker Docker Docker Docker Docker Docker Docker Docker Docker Docker Docker Docker
Jenkins Jenkins Jenkins Jenkins Jenkins Jenkins Jenkins Jenkins Jenkins Jenkins Jenkins
Terraform Terraform Terraform Terraform Terraform Terraform Terraform Terraform Terraform
DevOps DevOps DevOps DevOps DevOps DevOps DevOps DevOps DevOps DevOps DevOps DevOps
CI/CD CI/CD CI/CD CI/CD CI/CD CI/CD CI/CD CI/CD CI/CD CI/CD CI/CD CI/CD CI/CD CI/CD CI/CD
Linux Linux Linux Linux Linux Linux Linux Linux Linux Linux Linux Linux Linux Linux Linux Linux
Automation Automation Automation Automation Automation Automation Automation Automation Automation
Cloud Cloud Cloud Cloud Cloud Cloud Cloud Cloud Cloud Cloud Cloud Cloud Cloud Cloud Cloud Cloud
Infrastructure Infrastructure Infrastructure Infrastructure Infrastructure Infrastructure Infrastructure`
};

// Global Variables
let categoriesList = [];

// Document Ready Initialization
document.addEventListener("DOMContentLoaded", () => {
    fetchCategories();
    setupEventListeners();
});

// Setup Form and Count Event Listeners
function setupEventListeners() {
    const resumeTextarea = document.getElementById("resume-text");
    const wordCounter = document.getElementById("word-counter");

    if (resumeTextarea && wordCounter) {
        resumeTextarea.addEventListener("input", () => {
            const text = resumeTextarea.value.trim();
            const words = text ? text.split(/\s+/).length : 0;
            wordCounter.textContent = `${words} word${words !== 1 ? 's' : ''}`;
        });
    }
}

// Fetch categories from Backend API
function fetchCategories() {
    const screenerSelect = document.getElementById("category-select");
    const encyclopediaSelect = document.getElementById("encyclopedia-select");

    fetch('/api/categories')
        .then(response => response.json())
        .then(data => {
            if (data.status === "success") {
                categoriesList = data.categories;
                
                // Clear and populate screener select
                screenerSelect.innerHTML = '<option value="" disabled selected>Select Position...</option>';
                // Populate encyclopedia select
                encyclopediaSelect.innerHTML = '<option value="" disabled selected>Select Position...</option>';
                
                categoriesList.forEach(category => {
                    const opt1 = document.createElement("option");
                    opt1.value = category;
                    opt1.textContent = category;
                    screenerSelect.appendChild(opt1);

                    const opt2 = document.createElement("option");
                    opt2.value = category;
                    opt2.textContent = category;
                    encyclopediaSelect.appendChild(opt2);
                });
            } else {
                console.error("API returned error:", data.message);
                showNotification("Error loading categories", "error");
            }
        })
        .catch(err => {
            console.error("Failed to fetch categories:", err);
            showNotification("Failed to connect to backend", "error");
        });
}

// Switch between navigation tabs
function switchTab(tabId) {
    // Update nav links
    document.querySelectorAll(".nav-link").forEach(btn => btn.classList.remove("active"));
    const activeBtn = document.getElementById(`nav-btn-${tabId}`);
    if (activeBtn) activeBtn.classList.add("active");

    // Update content views
    document.querySelectorAll(".tab-content").forEach(content => content.classList.add("hidden"));
    const activeContent = document.getElementById(`tab-${tabId}`);
    if (activeContent) activeContent.classList.remove("hidden");
}

// Insert Sample Resume based on Selected Category
function insertSampleResume() {
    const categorySelect = document.getElementById("category-select");
    const resumeTextarea = document.getElementById("resume-text");
    const wordCounter = document.getElementById("word-counter");

    if (!categorySelect.value) {
        showNotification("Please select a target position first!", "info");
        return;
    }

    let catKey = categorySelect.value;
    
    // Check if we have a sample, otherwise fallback
    let sampleText = "";
    if (SAMPLE_RESUMES[catKey]) {
        sampleText = SAMPLE_RESUMES[catKey];
    } else {
        // Build a generic fallback sample
        sampleText = `Candidate Resume for ${catKey}
Email: candidate@email.com | Phone: 555-0100

SUMMARY
Skilled professional with experience working in ${catKey} domain.

SKILLS
- Professional Skills: ${catKey} concepts, problem-solving, communication
- Technical: MS Office, Git, SQL, specialized tools
- Soft Skills: Teamwork, leadership, organization

EXPERIENCE
Professional | Company Name (2023 - Present)
- Worked on various projects related to ${catKey} activities.
- Implemented solutions to improve overall team productivity.`;
    }

    // Special trigger for testing keyword stuffing
    if (catKey === "DevOps Engineer" && Math.random() > 0.5) {
        // Give option for stuffed resume
        if (confirm("Would you like to load a keyword-stuffed resume to test the spam detector?")) {
            sampleText = SAMPLE_RESUMES["DevOps Engineer (Spam / Stuffed)"];
        }
    }

    resumeTextarea.value = sampleText;
    const words = sampleText.trim().split(/\s+/).length;
    wordCounter.textContent = `${words} words`;
    showNotification("Sample resume loaded!", "success");
}

// Perform Resume Analysis
function analyzeResume() {
    const categorySelect = document.getElementById("category-select");
    const resumeTextarea = document.getElementById("resume-text");
    
    const category = categorySelect.value;
    const text = resumeTextarea.value.trim();

    if (!category) {
        showNotification("Please select a job position.", "warning");
        return;
    }
    if (!text) {
        showNotification("Please paste or write the resume content.", "warning");
        return;
    }

    // Toggle states
    document.getElementById("results-idle").classList.add("hidden");
    document.getElementById("results-data").classList.add("hidden");
    document.getElementById("results-loading").classList.remove("hidden");

    fetch('/api/score', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            resume_text: text,
            target_category: category
        })
    })
    .then(response => response.json())
    .then(res => {
        document.getElementById("results-loading").classList.add("hidden");

        if (res.status === "success" && res.data) {
            renderAnalysisResults(res.data);
            document.getElementById("results-data").classList.remove("hidden");
        } else {
            document.getElementById("results-idle").classList.remove("hidden");
            showNotification(res.message || "Analysis failed.", "error");
        }
    })
    .catch(err => {
        document.getElementById("results-loading").classList.add("hidden");
        document.getElementById("results-idle").classList.remove("hidden");
        console.error("Error analyzing resume:", err);
        showNotification("An error occurred during API call.", "error");
    });
}

// Render Results Dashboard
function renderAnalysisResults(data) {
    const score = data.score;
    const feedback = data.feedback;
    const warnings = data.warnings || [];
    const details = data.details || {};
    const metrics = data.metrics || {};

    // 1. Render Score Gauge
    const scoreNum = document.getElementById("score-num");
    const scoreRing = document.getElementById("score-ring");
    
    scoreNum.textContent = score.toFixed(1);
    
    // Radial calculation: circumference = 2 * PI * r = 2 * 3.14159 * 40 = 251.2
    const circumference = 251.2;
    const offset = circumference - (score / 10) * circumference;
    scoreRing.style.strokeDashoffset = offset;
    
    // Assign status badge
    const badge = document.getElementById("status-badge");
    const title = document.getElementById("status-title");
    
    // Reset classes
    badge.className = "status-badge";
    
    if (score >= 8.0) {
        badge.textContent = "Highly Recommended";
        badge.classList.add("highly-recommended");
        title.textContent = "Excellent Candidate Fit";
        scoreRing.style.stroke = "var(--accent-emerald)";
    } else if (score >= 5.0) {
        badge.textContent = "Good Match";
        badge.classList.add("good-match");
        title.textContent = "Standard Candidate Fit";
        scoreRing.style.stroke = "var(--accent-cyan)";
    } else {
        badge.textContent = "Underqualified";
        badge.classList.add("underqualified");
        title.textContent = "Weak Candidate Fit";
        scoreRing.style.stroke = "var(--accent-rose)";
    }
    
    document.getElementById("status-feedback").textContent = feedback;

    // 2. Render Mini Metrics Cards
    const overlapPct = Math.round(metrics.average_overlap * 100);
    const coveragePct = Math.round(metrics.cluster_coverage * 100);
    const penaltyVal = metrics.keyword_stuffing_penalty.toFixed(1);

    document.getElementById("metric-overlap").textContent = `${overlapPct}%`;
    document.getElementById("bar-overlap").style.width = `${overlapPct}%`;

    document.getElementById("metric-coverage").textContent = `${coveragePct}%`;
    document.getElementById("bar-coverage").style.width = `${coveragePct}%`;

    document.getElementById("metric-penalty").textContent = `-${penaltyVal}`;
    // Scale penalty visual: 3.0 is max visual penalty bar width
    const penaltyBarWidth = Math.min(100, (metrics.keyword_stuffing_penalty / 3.0) * 100);
    document.getElementById("bar-penalty").style.width = `${penaltyBarWidth}%`;
    
    const penaltyCard = document.getElementById("keyword-stuffing-card");
    if (metrics.keyword_stuffing_penalty > 0.4) {
        penaltyCard.style.boxShadow = "0 0 10px rgba(255, 42, 95, 0.15)";
        penaltyCard.style.borderColor = "rgba(255, 42, 95, 0.2)";
    } else {
        penaltyCard.style.boxShadow = "none";
        penaltyCard.style.borderColor = "var(--border-color)";
    }

    // 3. Render Warnings
    const warningPanel = document.getElementById("warnings-panel");
    const warningList = document.getElementById("warnings-list");
    
    warningList.innerHTML = "";
    if (warnings.length > 0) {
        warningPanel.classList.remove("hidden");
        warnings.forEach(w => {
            const li = document.createElement("li");
            li.textContent = w;
            warningList.appendChild(li);
        });
    } else {
        warningPanel.classList.add("hidden");
    }

    // 4. Render Skill Clusters Accordion
    const accordion = document.getElementById("clusters-accordion");
    accordion.innerHTML = "";

    // Sort clusters by score descending
    const sortedClusterIds = Object.keys(details).sort((a, b) => details[b].score - details[a].score);

    sortedClusterIds.forEach((cid, index) => {
        const cluster = details[cid];
        const clusterScore = Math.round(cluster.score * 100);
        
        // Pick representative terms for cluster title
        const topWordsStr = cluster.cluster_words.slice(0, 3).join(", ");
        
        const itemDiv = document.createElement("div");
        itemDiv.className = `cluster-item ${index === 0 ? 'expanded' : ''}`;
        
        itemDiv.innerHTML = `
            <div class="cluster-trigger" onclick="toggleAccordionItem(this)">
                <div class="cluster-info">
                    <div class="cluster-title-row">
                        <span class="cluster-title">Skill Dimension ${parseInt(cid)+1}: ${topWordsStr}...</span>
                        <span class="cluster-pct">${clusterScore}% Match</span>
                    </div>
                    <div class="cluster-progress-bg">
                        <div class="cluster-progress-fill" style="width: ${clusterScore}%"></div>
                    </div>
                </div>
                <i class="fa-solid fa-chevron-down cluster-chevron"></i>
            </div>
            <div class="cluster-details-panel">
                <div class="cluster-content-inner">
                    <!-- Matched Skills -->
                    <div class="skill-list-section">
                        <div class="skill-list-label">Exact Matches Found (${cluster.matched_skills.length})</div>
                        <div class="tag-container" id="cluster-${cid}-exact">
                            ${cluster.matched_skills.length > 0 
                                ? cluster.matched_skills.map(s => `<span class="tag-capsule matched"><i class="fa-solid fa-circle-check"></i> ${s}</span>`).join('')
                                : '<span class="section-helper">None</span>'}
                        </div>
                    </div>

                    <!-- Semantic Synonyms -->
                    <div class="skill-list-section">
                        <div class="skill-list-label">Contextual Synonyms Matches (${cluster.semantic_matches.length})</div>
                        <div class="tag-container" id="cluster-${cid}-semantic">
                            ${cluster.semantic_matches.length > 0 
                                ? cluster.semantic_matches.map(s => `
                                    <span class="tag-capsule semantic-tag" title="Matched contextually via Word2Vec similarity of ${Math.round(s.similarity * 100)}%">
                                        <i class="fa-solid fa-circle-nodes"></i> ${s.domain_skill} 
                                        <small>(${s.resume_word})</small>
                                    </span>
                                  `).join('')
                                : '<span class="section-helper">None</span>'}
                        </div>
                    </div>

                    <!-- Favourability/Missing -->
                    <div class="skill-list-section">
                        <div class="skill-list-label">Missing Skills (${cluster.missing_skills.length})</div>
                        <div class="tag-container" id="cluster-${cid}-missing">
                            ${cluster.missing_skills.length > 0 
                                ? cluster.missing_skills.map(s => `<span class="tag-capsule missing"><i class="fa-regular fa-circle"></i> ${s}</span>`).join('')
                                : '<span class="tag-capsule matched"><i class="fa-solid fa-star"></i> All matched!</span>'}
                        </div>
                    </div>
                </div>
            </div>
        `;
        accordion.appendChild(itemDiv);
    });

    // 5. Populate Semantic Table
    const tableBody = document.getElementById("semantic-table-body");
    tableBody.innerHTML = "";

    // Gather all semantic matches across all clusters
    let allSemanticMatches = [];
    Object.keys(details).forEach(cid => {
        allSemanticMatches = allSemanticMatches.concat(details[cid].semantic_matches);
    });

    if (allSemanticMatches.length > 0) {
        allSemanticMatches.forEach(match => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td><strong>${match.domain_skill}</strong></td>
                <td><span class="text-secondary">${match.resume_word}</span></td>
                <td><span class="sim-badge">${Math.round(match.similarity * 100)}% Similarity</span></td>
            `;
            tableBody.appendChild(tr);
        });
    } else {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td colspan="3" class="table-empty">
                No contextual synonyms detected. All matches were exact matches.
            </td>
        `;
        tableBody.appendChild(tr);
    }
}

// Toggle accordion items manually
function toggleAccordionItem(trigger) {
    const item = trigger.closest(".cluster-item");
    const isExpanded = item.classList.contains("expanded");
    
    // Contract all items
    document.querySelectorAll(".cluster-item").forEach(el => el.classList.remove("expanded"));
    
    // Expand current if it wasn't expanded
    if (!isExpanded) {
        item.classList.add("expanded");
    }
}

// Load AI Domain Encyclopedia details
function loadEncyclopediaDetails() {
    const select = document.getElementById("encyclopedia-select");
    const category = select.value;

    if (!category) return;

    // Toggle views
    document.getElementById("encyclopedia-idle").classList.add("hidden");
    document.getElementById("encyclopedia-details").classList.remove("hidden");

    fetch(`/api/category_details/${encodeURIComponent(category)}`)
        .then(response => response.json())
        .then(res => {
            if (res.status === "success") {
                // Populate TF-IDF tag terms
                const tagsContainer = document.getElementById("top-words-tags");
                tagsContainer.innerHTML = "";
                
                res.top_words.forEach(word => {
                    const tag = document.createElement("span");
                    tag.className = "tag-capsule-large";
                    tag.textContent = word;
                    tagsContainer.appendChild(tag);
                });

                // Populate Skill Matrix Clusters Grid
                const grid = document.getElementById("encyclopedia-cluster-grid");
                grid.innerHTML = "";

                Object.keys(res.clusters).forEach((cid, index) => {
                    const words = res.clusters[cid];
                    const card = document.createElement("div");
                    card.className = "card encyclopedia-cluster-card";
                    
                    card.innerHTML = `
                        <div class="card-header">
                            <i class="fa-solid fa-code-fork"></i>
                            <h3>Skill Cluster ${parseInt(cid)+1}</h3>
                        </div>
                        <div class="card-body">
                            <p class="section-helper">AI-grouped semantically related concepts:</p>
                            <div class="tag-container">
                                ${words.map(w => `<span class="tag-capsule matched">${w}</span>`).join('')}
                            </div>
                        </div>
                    `;
                    grid.appendChild(card);
                });
            } else {
                showNotification(res.message || "Failed to load details.", "error");
            }
        })
        .catch(err => {
            console.error("Error loading encyclopedia:", err);
            showNotification("Failed to fetch domain details.", "error");
        });
}

// Helper to show custom micro-notification in browser
function showNotification(message, type = "info") {
    // Create notification element
    const container = document.body;
    const notification = document.createElement("div");
    
    // Styling classes
    notification.style.position = "fixed";
    notification.style.bottom = "20px";
    notification.style.right = "20px";
    notification.style.zIndex = "1000";
    notification.style.padding = "12px 24px";
    notification.style.borderRadius = "8px";
    notification.style.fontFamily = "var(--font-main)";
    notification.style.fontSize = "0.9rem";
    notification.style.fontWeight = "600";
    notification.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.4)";
    notification.style.display = "flex";
    notification.style.alignItems = "center";
    notification.style.gap = "10px";
    notification.style.animation = "slideIn 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)";
    notification.style.transition = "all 0.3s ease";
    
    // Background and icons based on type
    let iconHTML = "";
    if (type === "success") {
        notification.style.backgroundColor = "rgba(0, 255, 135, 0.95)";
        notification.style.color = "#070913";
        iconHTML = '<i class="fa-solid fa-circle-check"></i>';
    } else if (type === "error") {
        notification.style.backgroundColor = "rgba(255, 42, 95, 0.95)";
        notification.style.color = "#fff";
        iconHTML = '<i class="fa-solid fa-triangle-exclamation"></i>';
    } else if (type === "warning") {
        notification.style.backgroundColor = "rgba(255, 183, 3, 0.95)";
        notification.style.color = "#070913";
        iconHTML = '<i class="fa-solid fa-circle-exclamation"></i>';
    } else {
        notification.style.backgroundColor = "rgba(20, 26, 46, 0.95)";
        notification.style.color = "#fff";
        notification.style.border = "1px solid var(--border-color)";
        iconHTML = '<i class="fa-solid fa-circle-info"></i>';
    }

    notification.innerHTML = `${iconHTML} <span>${message}</span>`;
    container.appendChild(notification);

    // Slide in animations
    const style = document.createElement("style");
    style.id = "notification-style";
    style.innerHTML = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(120%); opacity: 0; }
        }
    `;
    if (!document.getElementById("notification-style")) {
        document.head.appendChild(style);
    }

    // Dismiss notification
    setTimeout(() => {
        notification.style.animation = "slideOut 0.3s forwards";
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3500);
}
