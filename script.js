/* ==========================================================================
   Next-HIRE Main JavaScript Application Logic (Bug-Fixed & Fully Expanded)
   ========================================================================== */

// Comprehensive Question Bank Data for All Domains
const questionBank = {
  "Frontend Development": [
    {
      id: 1,
      question: "Which HTML5 element is used to specify a footer for a document or section?",
      options: ["<bottom>", "<footer>", "<section>", "<aside>"],
      answer: 1,
      explanation: "The <footer> element represents a footer for its nearest sectioning content or sectioning root element."
    },
    {
      id: 2,
      question: "In CSS, what is the default value of the position property?",
      options: ["relative", "fixed", "absolute", "static"],
      answer: 3,
      explanation: "By default, HTML elements are positioned static (according to the normal flow of the page)."
    },
    {
      id: 3,
      question: "Which method is used to remove the last element from an array in JavaScript?",
      options: ["pop()", "push()", "shift()", "slice()"],
      answer: 0,
      explanation: "The pop() method removes the last element from an array and returns that element."
    },
    {
      id: 4,
      question: "What does CSS flex-direction default to?",
      options: ["column", "row", "row-reverse", "column-reverse"],
      answer: 1,
      explanation: "The default value for flex-direction is 'row'."
    },
    {
      id: 5,
      question: "Which Hook in React is used to manage side effects in functional components?",
      options: ["useState", "useContext", "useEffect", "useReducer"],
      answer: 2,
      explanation: "useEffect lets you perform side effects in function components."
    }
  ],
  "Backend Engineering": [
    {
      id: 1,
      question: "Which HTTP status code corresponds to 'Unauthorized'?",
      options: ["200", "401", "403", "500"],
      answer: 1,
      explanation: "401 Unauthorized indicates that the request has not been applied because it lacks valid authentication credentials."
    },
    {
      id: 2,
      question: "In Node.js, which module is used to work with file pathways?",
      options: ["fs", "path", "http", "url"],
      answer: 1,
      explanation: "The path module provides utilities for working with file and directory paths."
    },
    {
      id: 3,
      question: "Which SQL clause is used to filter records after aggregation?",
      options: ["WHERE", "GROUP BY", "HAVING", "ORDER BY"],
      answer: 2,
      explanation: "HAVING was added to SQL because the WHERE keyword could not be used with aggregate functions."
    },
    {
      id: 4,
      question: "What does ACID stand for in Database Systems?",
      options: [
        "Atomicity, Consistency, Isolation, Durability",
        "Accuracy, Control, Integration, Data",
        "Array, Column, Index, Database",
        "Asynchronous, Concurrent, Isolated, Distributed"
      ],
      answer: 0,
      explanation: "ACID stands for Atomicity, Consistency, Isolation, and Durability."
    },
    {
      id: 5,
      question: "Which data structure operates on a First In, First Out (FIFO) basis?",
      options: ["Stack", "Queue", "Tree", "Graph"],
      answer: 1,
      explanation: "A Queue operates on a FIFO basis."
    }
  ],
  "Data Science & AI": [
    {
      id: 1,
      question: "Which evaluation metric is best suited for imbalanced classification datasets?",
      options: ["Accuracy", "F1-Score", "Mean Squared Error", "R-Squared"],
      answer: 1,
      explanation: "F1-Score balances precision and recall, making it robust for imbalanced classes where accuracy can be misleading."
    },
    {
      id: 2,
      question: "What technique is commonly used to prevent overfitting in neural networks?",
      options: ["Increasing learning rate", "Dropout", "Removing validation split", "Adding redundant layers"],
      answer: 1,
      explanation: "Dropout randomly deactivates neurons during training to prevent co-adaptation and overfitting."
    },
    {
      id: 3,
      question: "Which Python library is primarily used for dataframe manipulation and analysis?",
      options: ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
      answer: 1,
      explanation: "Pandas provides high-performance, easy-to-use data structures and data analysis tools for Python."
    },
    {
      id: 4,
      question: "What does the 'K' stand for in the K-Means clustering algorithm?",
      options: ["Kernel matrix", "Number of clusters", "Key features", "Kolmogorov complexity"],
      answer: 1,
      explanation: "K represents the predetermined number of clusters you want the algorithm to identify."
    },
    {
      id: 5,
      question: "Which activation function can suffer from the vanishing gradient problem?",
      options: ["ReLU", "Leaky ReLU", "Sigmoid", "ELU"],
      answer: 2,
      explanation: "Sigmoid squashes input values between 0 and 1, causing gradients to become extremely small during backpropagation."
    }
  ],
  "Product Management": [
    {
      id: 1,
      question: "What framework is commonly used for prioritizing product backlog items based on Customer Satisfaction?",
      options: ["MoSCoW Method", "Kano Model", "SWOT Analysis", "PERT Chart"],
      answer: 1,
      explanation: "The Kano Model categorizes customer preferences into features that delight, satisfy, or dissatisfy users."
    },
    {
      id: 2,
      question: "What does MVP stand for in product development?",
      options: ["Maximum Viable Product", "Minimum Viable Product", "Multi-Version Plan", "Market Validation Protocol"],
      answer: 1,
      explanation: "An MVP is a version of a new product with just enough features to be usable by early customers who can then provide feedback."
    },
    {
      id: 3,
      question: "Which metric measures the percentage of users who stop using a product over a given time period?",
      options: ["Conversion Rate", "Churn Rate", "Retention Rate", "ARPU"],
      answer: 1,
      explanation: "Churn rate tracks customer attrition and indicates how many users leave your service."
    },
    {
      id: 4,
      question: "In Agile methodology, who is primarily responsible for managing and prioritizing the Product Backlog?",
      options: ["Scrum Master", "Lead Developer", "Product Owner", "QA Engineer"],
      answer: 2,
      explanation: "The Product Owner owns the product backlog and ensures it aligns with business goals and customer value."
    },
    {
      id: 5,
      question: "What is a User Story format typically structured as?",
      options: [
        "As a [user], I want [action] so that [benefit]",
        "If [condition], then [result]",
        "Problem, Solution, Metric",
        "Task, Assignee, Deadline"
      ],
      answer: 0,
      explanation: "User stories follow the classic 'As a... I want... So that...' format to keep user needs central."
    }
  ],
  "DevOps & Cloud": [
    {
      id: 1,
      question: "Which containerization tool is widely used to package applications with their dependencies?",
      options: ["Ansible", "Docker", "Terraform", "Nagios"],
      answer: 1,
      explanation: "Docker packages applications into standardized containers that run reliably across any computing environment."
    },
    {
      id: 2,
      question: "What is Infrastructure as Code (IaC) primarily used for?",
      options: ["Writing application backend logic", "Managing and provisioning computing infrastructure through code", "Automating browser testing", "Designing cloud UI dashboards"],
      answer: 1,
      explanation: "IaC (e.g., Terraform, AWS CloudFormation) allows DevOps teams to manage infrastructure using configuration files."
    },
    {
      id: 3,
      question: "Which AWS service provides scalable object storage for data backup and static websites?",
      options: ["Amazon EC2", "Amazon RDS", "Amazon S3", "Amazon EBS"],
      answer: 2,
      explanation: "Amazon Simple Storage Service (S3) is an object storage service offering industry-leading scalability and data availability."
    },
    {
      id: 4,
      question: "What is CI/CD an abbreviation for?",
      options: [
        "Code Integration / Cloud Deployment",
        "Continuous Integration / Continuous Delivery (or Deployment)",
        "Container Inspection / Cluster Distribution",
        "Centralized Infrastructure / Core Directory"
      ],
      answer: 1,
      explanation: "CI/CD automates the building, testing, and deployment stages of software release pipelines."
    },
    {
      id: 5,
      question: "Which Kubernetes object is used to expose a running application deployment to external traffic?",
      options: ["Pod", "Service", "ConfigMap", "Volume"],
      answer: 1,
      explanation: "A Kubernetes Service abstracts and exposes an application running on a set of Pods to network traffic."
    }
  ]
};

// Flashcards Data Bank
const flashcardsData = {
  "Frontend Development": [
    { concept: "What is the Virtual DOM in React?", explanation: "A lightweight copy of the actual DOM in memory. React uses diffing algorithms to update only the changed elements efficiently." },
    { concept: "Explain CSS Specificity", explanation: "An algorithm used by browsers to determine which CSS declaration is most relevant to an element, weighed by inline styles, IDs, classes, and elements." },
    { concept: "What is Event Bubbling?", explanation: "A type of event propagation where an event triggered on a child element bubbles up and triggers handlers on its parent elements." },
    { concept: "What are Closures in JavaScript?", explanation: "A function bundled together with references to its lexical environment, allowing inner functions to access outer scope variables." }
  ],
  "Backend Engineering": [
    { concept: "What is REST API?", explanation: "An architectural style for designing networked applications using HTTP requests (GET, POST, PUT, DELETE) with stateless client-server communication." },
    { concept: "Explain Database Indexing", explanation: "A data structure technique (like B-Trees) that improves the speed of data retrieval operations on a database table at the cost of writes." },
    { concept: "What is JWT (JSON Web Token)?", explanation: "An open standard for securely transmitting information between parties as a JSON object, digitally signed using a secret or public/private key." },
    { concept: "What is Connection Pooling?", explanation: "A cache of database connections maintained so that connections can be reused for future requests rather than creating a new one each time." }
  ],
  "Data Science & AI": [
    { concept: "What is Overfitting?", explanation: "When a model learns the training data too well—including noise and random fluctuations—resulting in poor generalization on unseen test data." },
    { concept: "Explain Precision vs Recall", explanation: "Precision measures how many selected items were relevant, while Recall measures how many relevant items were successfully selected." }
  ],
  "Product Management": [
    { concept: "What is Product-Market Fit?", explanation: "The degree to which a product satisfies a strong market demand, resulting in sustainable organic growth and user retention." },
    { concept: "Explain RICE Prioritization", explanation: "A prioritization framework scoring features based on Reach, Impact, Confidence, and Effort." }
  ],
  "DevOps & Cloud": [
    { concept: "What is Container Orchestration?", explanation: "Automating the deployment, scaling, networking, and management of containers using tools like Kubernetes." },
    { concept: "Explain Blue-Green Deployment", explanation: "A release management technique that shifts traffic between two identical production environments (Blue and Green) for zero-downtime updates." }
  ]
};

// Global App State
let currentUser = null;
let currentConfig = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = {};
let quizTimer = null;
let timeLeft = 300;
let userHistory = [];
let userMistakes = [];

// Flashcard State
let activeFcDomain = "Frontend Development";
let currentFcIndex = 0;
let isFcFlipped = false;

// DOM Sections
const sections = {
  hero: document.getElementById('heroSection'),
  auth: document.getElementById('authSection'),
  dashboard: document.getElementById('dashboardSection'),
  setup: document.getElementById('setupSection'),
  quiz: document.getElementById('quizSection'),
  result: document.getElementById('resultSection'),
  flashcards: document.getElementById('flashcardsSection'),
  mistakes: document.getElementById('mistakesSection')
};

const navBtns = {
  home: document.getElementById('navHome'),
  dashboard: document.getElementById('navDashboard'),
  flashcards: document.getElementById('navFlashcards'),
  mistakes: document.getElementById('navMistakes'),
  setup: document.getElementById('navSetup')
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  loadStoredData();
  setupEventListeners();
});

// Load persistent storage
function loadStoredData() {
  const history = localStorage.getItem('next_hire_history');
  if (history) userHistory = JSON.parse(history);

  const mistakes = localStorage.getItem('next_hire_mistakes');
  if (mistakes) userMistakes = JSON.parse(mistakes);
}

// Navigation Helper
function navigateTo(sectionName) {
  Object.keys(sections).forEach(key => {
    if (sections[key]) {
      if (key === sectionName) {
        sections[key].classList.remove('hidden');
      } else {
        sections[key].classList.add('hidden');
      }
    }
  });

  Object.keys(navBtns).forEach(key => {
    if (navBtns[key]) {
      if (key === sectionName) {
        navBtns[key].classList.add('active');
      } else {
        navBtns[key].classList.remove('active');
      }
    }
  });
}

// Event Listeners Setup
function setupEventListeners() {
  const logoBtn = document.getElementById('logoBtn');
  if (logoBtn) logoBtn.addEventListener('click', () => navigateTo('hero'));

  if (navBtns.home) navBtns.home.addEventListener('click', () => navigateTo('hero'));
  if (navBtns.dashboard) navBtns.dashboard.addEventListener('click', () => {
    renderDashboard();
    navigateTo('dashboard');
  });
  if (navBtns.flashcards) navBtns.flashcards.addEventListener('click', () => {
    initFlashcards();
    navigateTo('flashcards');
  });
  if (navBtns.mistakes) navBtns.mistakes.addEventListener('click', () => {
    renderMistakesNotebook();
    navigateTo('mistakes');
  });
  if (navBtns.setup) navBtns.setup.addEventListener('click', () => navigateTo('setup'));

  // Hero Buttons
  const getStartedBtn = document.getElementById('getStartedBtn');
  if (getStartedBtn) {
    getStartedBtn.addEventListener('click', () => {
      if (currentUser) navigateTo('setup');
      else navigateTo('auth');
    });
  }

  const heroLearnBtn = document.getElementById('heroLearnBtn');
  if (heroLearnBtn) {
    heroLearnBtn.addEventListener('click', () => {
      alert("Next-HIRE helps you prepare with timed tests, flashcards, mistake notebooks, and weakness analytics!");
    });
  }

  // Auth Tabs
  const tabEmail = document.getElementById('tabEmail');
  const tabPhone = document.getElementById('tabPhone');
  const emailGroup = document.getElementById('emailGroup');
  const phoneGroup = document.getElementById('phoneGroup');

  if (tabEmail && tabPhone) {
    tabEmail.addEventListener('click', () => {
      tabEmail.classList.add('active');
      tabPhone.classList.remove('active');
      if (emailGroup) emailGroup.classList.remove('hidden');
      if (phoneGroup) phoneGroup.classList.add('hidden');
    });

    tabPhone.addEventListener('click', () => {
      tabPhone.classList.add('active');
      tabEmail.classList.remove('active');
      if (phoneGroup) phoneGroup.classList.remove('hidden');
      if (emailGroup) emailGroup.classList.add('hidden');
    });
  }

  // Auth Submit
  const authForm = document.getElementById('authForm');
  if (authForm) {
    authForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('userEmail')?.value;
      const phoneInput = document.getElementById('userPhone')?.value;
      currentUser = emailInput || phoneInput || 'Candidate';
      updateUserNav();
      navigateTo('setup');
    });
  }

  // Logout
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      currentUser = null;
      const userProfile = document.getElementById('userProfile');
      if (userProfile) userProfile.classList.add('hidden');
      Object.values(navBtns).forEach(btn => btn && btn.classList.add('hidden'));
      if (navBtns.home) navBtns.home.classList.remove('hidden');
      navigateTo('hero');
    });
  }

  // Setup Submit
  const setupForm = document.getElementById('setupForm');
  if (setupForm) {
    setupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const domain = document.getElementById('selectDomain').value;
      const jobType = document.getElementById('selectJobType').value;
      const levelEl = document.querySelector('input[name="level"]:checked');
      const level = levelEl ? levelEl.value : 'Mid Level';
      const interviewType = document.getElementById('selectInterviewType').value;

      currentConfig = { domain, jobType, level, interviewType };
      startQuiz();
    });
  }

  const dashStartNewBtn = document.getElementById('dashStartNewBtn');
  if (dashStartNewBtn) dashStartNewBtn.addEventListener('click', () => navigateTo('setup'));

  // Quiz buttons
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const submitBtn = document.getElementById('submitBtn');

  if (prevBtn) prevBtn.addEventListener('click', navigatePrevQuestion);
  if (nextBtn) nextBtn.addEventListener('click', navigateNextQuestion);
  if (submitBtn) submitBtn.addEventListener('click', submitQuiz);

  // Results buttons
  const backToDashBtn = document.getElementById('backToDashBtn');
  const retakeBtn = document.getElementById('retakeBtn');

  if (backToDashBtn) {
    backToDashBtn.addEventListener('click', () => {
      renderDashboard();
      navigateTo('dashboard');
    });
  }
  if (retakeBtn) retakeBtn.addEventListener('click', () => startQuiz());

  // Flashcard Controls
  const fcTabContainer = document.getElementById('flashcardTabs');
  if (fcTabContainer) {
    fcTabContainer.innerHTML = `
      <button class="tab-btn active" data-domain="Frontend Development">Frontend</button>
      <button class="tab-btn" data-domain="Backend Engineering">Backend</button>
      <button class="tab-btn" data-domain="Data Science & AI">Data Science</button>
      <button class="tab-btn" data-domain="Product Management">Product</button>
      <button class="tab-btn" data-domain="DevOps & Cloud">DevOps</button>
    `;

    document.querySelectorAll('#flashcardTabs .tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('#flashcardTabs .tab-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        activeFcDomain = e.target.getAttribute('data-domain');
        currentFcIndex = 0;
        isFcFlipped = false;
        renderFlashcard();
      });
    });
  }

  const fcCardBox = document.getElementById('fcCardBox');
  const fcFlipBtn = document.getElementById('fcFlipBtn');
  const fcNextBtn = document.getElementById('fcNextBtn');
  const fcPrevBtn = document.getElementById('fcPrevBtn');

  if (fcCardBox) fcCardBox.addEventListener('click', toggleFlashcardFlip);
  if (fcFlipBtn) fcFlipBtn.addEventListener('click', toggleFlashcardFlip);
  if (fcNextBtn) {
    fcNextBtn.addEventListener('click', () => {
      const cards = flashcardsData[activeFcDomain] || flashcardsData["Frontend Development"];
      if (currentFcIndex < cards.length - 1) {
        currentFcIndex++;
        isFcFlipped = false;
        renderFlashcard();
      }
    });
  }
  if (fcPrevBtn) {
    fcPrevBtn.addEventListener('click', () => {
      if (currentFcIndex > 0) {
        currentFcIndex--;
        isFcFlipped = false;
        renderFlashcard();
      }
    });
  }

  // Clear Mistakes
  const clearMistakesBtn = document.getElementById('clearMistakesBtn');
  if (clearMistakesBtn) {
    clearMistakesBtn.addEventListener('click', () => {
      userMistakes = [];
      localStorage.removeItem('next_hire_mistakes');
      renderMistakesNotebook();
    });
  }
}

function updateUserNav() {
  if (currentUser) {
    const userProfile = document.getElementById('userProfile');
    const userName = document.getElementById('userName');
    const avatarText = document.getElementById('avatarText');

    if (userProfile) userProfile.classList.remove('hidden');
    if (userName) userName.textContent = currentUser.split('@')[0];
    if (avatarText) avatarText.textContent = currentUser.charAt(0).toUpperCase();

    Object.values(navBtns).forEach(btn => btn && btn.classList.remove('hidden'));
  }
}

// Flashcard Renderer
function initFlashcards() {
  currentFcIndex = 0;
  isFcFlipped = false;
  renderFlashcard();
}

function renderFlashcard() {
  const cards = flashcardsData[activeFcDomain] || flashcardsData["Frontend Development"];
  const card = cards[currentFcIndex] || cards[0];

  const countEl = document.getElementById('fcCardCount');
  const domainEl = document.getElementById('fcDomainTitle');
  const frontEl = document.getElementById('fcFrontText');
  const backTextEl = document.getElementById('fcBackText');

  if (countEl) countEl.textContent = `Card ${currentFcIndex + 1} of ${cards.length}`;
  if (domainEl) domainEl.textContent = activeFcDomain;
  if (frontEl) frontEl.textContent = card.concept;
  if (backTextEl) backTextEl.textContent = card.explanation;

  const backSec = document.getElementById('fcBackSection');
  if (backSec) {
    if (isFcFlipped) {
      backSec.classList.remove('hidden');
    } else {
      backSec.classList.add('hidden');
    }
  }
}

function toggleFlashcardFlip() {
  isFcFlipped = !isFcFlipped;
  const backSec = document.getElementById('fcBackSection');
  if (backSec) {
    if (isFcFlipped) backSec.classList.remove('hidden');
    else backSec.classList.add('hidden');
  }
}

// Start Quiz Session
function startQuiz() {
  const domain = (currentConfig && currentConfig.domain) ? currentConfig.domain : "Frontend Development";
  const level = (currentConfig && currentConfig.level) ? currentConfig.level : "Mid Level";

  currentQuestions = questionBank[domain] || questionBank["Frontend Development"];
  currentQuestionIndex = 0;
  userAnswers = {};
  timeLeft = 300;

  const badgeDomain = document.getElementById('quizDomainBadge');
  const badgeLevel = document.getElementById('quizLevelBadge');

  if (badgeDomain) badgeDomain.textContent = domain;
  if (badgeLevel) badgeLevel.textContent = level;

  startTimer();
  renderQuestion();
  navigateTo('quiz');
}

function startTimer() {
  clearInterval(quizTimer);
  updateTimerDisplay();

  quizTimer = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 0) {
      clearInterval(quizTimer);
      alert("Time is up! Submitting your assessment.");
      submitQuiz();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timerEl = document.getElementById('quizTimer');
  if (timerEl) {
    timerEl.innerHTML = `<i class="fa-regular fa-clock"></i> ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }
}

function renderQuestion() {
  const q = currentQuestions[currentQuestionIndex];
  const progressPercent = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
  
  const progressBar = document.getElementById('quizProgressBar');
  if (progressBar) progressBar.style.width = `${progressPercent}%`;

  const counterEl = document.getElementById('questionCounter');
  const textEl = document.getElementById('questionText');

  if (counterEl) counterEl.textContent = `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;
  if (textEl) textEl.textContent = q.question;

  const container = document.getElementById('optionsContainer');
  if (container) {
    container.innerHTML = '';

    q.options.forEach((optText, idx) => {
      const isSelected = userAnswers[currentQuestionIndex] === idx;
      const optionEl = document.createElement('div');
      optionEl.className = `option-item ${isSelected ? 'selected' : ''}`;
      optionEl.innerHTML = `
        <input type="radio" name="option" class="option-radio" ${isSelected ? 'checked' : ''}>
        <span>${optText}</span>
      `;

      optionEl.addEventListener('click', () => {
        userAnswers[currentQuestionIndex] = idx;
        renderQuestion();
      });

      container.appendChild(optionEl);
    });
  }

  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const submitBtn = document.getElementById('submitBtn');

  if (prevBtn) prevBtn.disabled = currentQuestionIndex === 0;

  if (currentQuestionIndex === currentQuestions.length - 1) {
    if (nextBtn) nextBtn.classList.add('hidden');
    if (submitBtn) submitBtn.classList.remove('hidden');
  } else {
    if (nextBtn) nextBtn.classList.remove('hidden');
    if (submitBtn) submitBtn.classList.add('hidden');
  }
}

function navigateNextQuestion() {
  if (currentQuestionIndex < currentQuestions.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  }
}

function navigatePrevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
  }
}

// Submit Quiz & Evaluate + Mistakes Notebook Logging
function submitQuiz() {
  clearInterval(quizTimer);

  let score = 0;
  const reviewList = document.getElementById('reviewList');
  if (reviewList) reviewList.innerHTML = '';

  const domain = (currentConfig && currentConfig.domain) ? currentConfig.domain : "Frontend Development";

  currentQuestions.forEach((q, index) => {
    const userAns = userAnswers[index];
    const isCorrect = userAns === q.answer;

    if (isCorrect) {
      score++;
    } else {
      const mistakeObj = {
        domain: domain,
        question: q.question,
        userAnswer: userAns !== undefined ? q.options[userAns] : 'Not Answered',
        correctAnswer: q.options[q.answer],
        explanation: q.explanation,
        date: new Date().toLocaleDateString()
      };
      if (!userMistakes.some(m => m.question === q.question)) {
        userMistakes.unshift(mistakeObj);
      }
    }

    if (reviewList) {
      const item = document.createElement('div');
      item.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;
      item.innerHTML = `
        <div class="review-q">${index + 1}. ${q.question}</div>
        <div class="review-ans">
          <strong>Your Answer:</strong> ${userAns !== undefined ? q.options[userAns] : 'Not Answered'}<br>
          <strong>Correct Answer:</strong> ${q.options[q.answer]}
        </div>
        <small style="margin-top:0.5rem; display:block; color:var(--text-muted);">${q.explanation}</small>
      `;
      reviewList.appendChild(item);
    }
  });

  localStorage.setItem('next_hire_mistakes', JSON.stringify(userMistakes));

  const percentage = Math.round((score / currentQuestions.length) * 100);
  const scorePct = document.getElementById('scorePercentage');
  const scoreFrac = document.getElementById('scoreFraction');

  if (scorePct) scorePct.textContent = `${percentage}%`;
  if (scoreFrac) scoreFrac.textContent = `${score}/${currentQuestions.length}`;

  const attemptRecord = {
    domain: domain,
    jobType: (currentConfig && currentConfig.jobType) ? currentConfig.jobType : "Full Time",
    level: (currentConfig && currentConfig.level) ? currentConfig.level : "Mid Level",
    score: `${score}/${currentQuestions.length}`,
    percentage: percentage,
    date: new Date().toLocaleDateString()
  };

  userHistory.unshift(attemptRecord);
  localStorage.setItem('next_hire_history', JSON.stringify(userHistory));

  navigateTo('result');
}

// Render Mistakes Notebook
function renderMistakesNotebook() {
  const container = document.getElementById('mistakesListContainer');
  const noMistakesEl = document.getElementById('noMistakes');

  if (!container) return;
  container.innerHTML = '';

  if (userMistakes.length > 0) {
    if (noMistakesEl) noMistakesEl.classList.add('hidden');
    userMistakes.forEach((m, idx) => {
      const el = document.createElement('div');
      el.className = 'mistake-item';
      el.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
          <span class="badge badge-primary">${m.domain}</span>
          <small style="color:var(--text-muted);">${m.date}</small>
        </div>
        <div class="mistake-question">${idx + 1}. ${m.question}</div>
        <div class="mistake-answer">
          <span style="color:var(--danger)"><strong>Your Answer:</strong> ${m.userAnswer}</span><br>
          <span style="color:var(--success)"><strong>Correct Answer:</strong> ${m.correctAnswer}</span>
        </div>
        <small style="margin-top:0.5rem; display:block; color:var(--text-dark);"><strong>Insight:</strong> ${m.explanation}</small>
      `;
      container.appendChild(el);
    });
  } else {
    if (noMistakesEl) noMistakesEl.classList.remove('hidden');
  }
}

// Render Dashboard Data & Skill Weakness Breakdown (FULLY FIXED)
function renderDashboard() {
  const statTests = document.getElementById('statTests');
  const statAvg = document.getElementById('statAvg');
  const statTopDomain = document.getElementById('statTopDomain');
  const historyContainer = document.getElementById('dashboardHistoryTable');
  const domainBreakdownContainer = document.getElementById('domainBreakdownList');

  if (statTests) statTests.textContent = userHistory.length;

  if (userHistory.length > 0) {
    // 1. Calculate Average Score
    const totalPercentage = userHistory.reduce((acc, curr) => acc + curr.percentage, 0);
    const avg = Math.round(totalPercentage / userHistory.length);
    if (statAvg) statAvg.textContent = `${avg}%`;

    // 2. Count Most Attempted Domain & Calculate Per-Domain Average
    const domainCounts = {};
    const domainScores = {};

    userHistory.forEach(h => {
      domainCounts[h.domain] = (domainCounts[h.domain] || 0) + 1;

      if (!domainScores[h.domain]) {
        domainScores[h.domain] = { totalPct: 0, count: 0 };
      }
      domainScores[h.domain].totalPct += h.percentage;
      domainScores[h.domain].count += 1;
    });

    const topDomain = Object.keys(domainCounts).reduce((a, b) => domainCounts[a] > domainCounts[b] ? a : b);
    if (statTopDomain) statTopDomain.textContent = topDomain;

    // 3. Render Domain Breakdown List
    if (domainBreakdownContainer) {
      domainBreakdownContainer.innerHTML = '';
      Object.keys(domainScores).forEach(domainName => {
        const stats = domainScores[domainName];
        const domainAverage = Math.round(stats.totalPct / stats.count);
        
        const row = document.createElement('div');
        row.className = 'domain-stat-item';
        row.style.marginBottom = '1rem';
        row.innerHTML = `
          <div style="display:flex; justify-content:space-between; margin-bottom:0.25rem;">
            <span><strong>${domainName}</strong></span>
            <span>${domainAverage}% Avg</span>
          </div>
          <div style="width:100%; background:#e2e8f0; height:8px; border-radius:4px; overflow:hidden;">
            <div style="width:${domainAverage}%; background:${domainAverage >= 70 ? 'var(--success, #10b981)' : 'var(--danger, #ef4444)'}; height:100%;"></div>
          </div>
        `;
        domainBreakdownContainer.appendChild(row);
      });
    }
  } else {
    if (statAvg) statAvg.textContent = '0%';
    if (statTopDomain) statTopDomain.textContent = 'None';
    if (domainBreakdownContainer) {
      domainBreakdownContainer.innerHTML = '<p style="color:var(--text-muted);">No assessments taken yet.</p>';
    }
  }

  // 4. Render History Table
  if (historyContainer) {
    historyContainer.innerHTML = '';
    if (userHistory.length === 0) {
      historyContainer.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--text-muted);">No attempts logged yet.</td></tr>`;
    } else {
      userHistory.slice(0, 5).forEach(h => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td><strong>${h.domain}</strong></td>
          <td>${h.level}</td>
          <td>${h.score}</td>
          <td><span class="badge ${h.percentage >= 70 ? 'badge-success' : 'badge-danger'}">${h.percentage}%</span></td>
          <td>${h.date}</td>
        `;
        historyContainer.appendChild(tr);
      });
    }
  }
}