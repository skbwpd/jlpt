// Theme Management
const htmlElement = document.documentElement;

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateThemeButton();
}

function updateThemeButton() {
  const button = document.querySelector('.theme-toggle');
  const isDark = document.body.classList.contains('dark-mode');
  button.textContent = isDark ? '☀️' : '🌙';
}

// Initialize theme from localStorage
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
  updateThemeButton();
  loadUserData();
});

// Keyboard shortcut for theme toggle (Ctrl+D)
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 'd') {
    e.preventDefault();
    toggleTheme();
  }
});

// Smooth scroll to section
function scrollTo(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Quiz System
const quizzes = [
  {
    question: 'What is the hiragana for "a"?',
    options: ['あ', 'い', 'う', 'え'],
    correct: 0
  },
  {
    question: 'What does "こんにちは" mean?',
    options: ['Good morning', 'Hello', 'Good night', 'Goodbye'],
    correct: 1
  },
  {
    question: 'Which is the correct kanji for "tree"?',
    options: ['木', '水', '火', '土'],
    correct: 0
  },
  {
    question: 'What is "thank you" in Japanese?',
    options: ['ありがとう', 'すみません', 'お願いします', 'どうぞ'],
    correct: 0
  },
  {
    question: 'How do you say "good morning" in Japanese?',
    options: ['おやすみなさい', 'おはよう', 'おはようございます', 'お疲れ様です'],
    correct: 2
  }
];

let currentQuizIndex = 0;
let quizAnswered = false;

function checkAnswer(button, isCorrect) {
  if (quizAnswered) return;
  quizAnswered = true;
  
  const options = document.querySelectorAll('.option');
  options.forEach((opt, idx) => {
    if (idx === quizzes[currentQuizIndex].correct) {
      opt.classList.add('correct');
    } else if (opt === button && !isCorrect) {
      opt.classList.add('incorrect');
    }
  });
  
  // Update score
  if (isCorrect) {
    updateUserData({ quizzesScore: getQuizScore() + 1 });
    showNotification('Correct! Well done! 🎉');
  } else {
    showNotification('Try again next time! 💪');
  }
}

function nextQuestion() {
  currentQuizIndex = (currentQuizIndex + 1) % quizzes.length;
  quizAnswered = false;
  
  const quiz = quizzes[currentQuizIndex];
  const questionEl = document.querySelector('.question p');
  const optionsEl = document.querySelectorAll('.option');
  
  questionEl.textContent = quiz.question;
  optionsEl.forEach((opt, idx) => {
    opt.textContent = quiz.options[idx];
    opt.className = 'option';
    opt.onclick = function() {
      checkAnswer(this, idx === quiz.correct);
    };
  });
}

// User Data Management
function getUserData() {
  return JSON.parse(localStorage.getItem('userData')) || {
    totalLessons: 0,
    quizzesScore: 0,
    totalQuizzes: 0,
    streak: 0,
    studyTime: 0,
    lastStudyDate: new Date().toDateString()
  };
}

function updateUserData(updates) {
  const data = getUserData();
  const newData = { ...data, ...updates };
  localStorage.setItem('userData', JSON.stringify(newData));
  updateStatsDisplay();
}

function loadUserData() {
  updateStatsDisplay();
}

function updateStatsDisplay() {
  const data = getUserData();
  
  document.getElementById('totalLessons').textContent = data.totalLessons;
  
  const avgScore = data.totalQuizzes > 0 
    ? Math.round((data.quizzesScore / data.totalQuizzes) * 100) 
    : 0;
  document.getElementById('quizzesScore').textContent = avgScore + '%';
  
  document.getElementById('streak').textContent = calculateStreak();
  document.getElementById('studyTime').textContent = Math.floor(data.studyTime / 60) + 'h';
}

function calculateStreak() {
  const data = getUserData();
  const today = new Date().toDateString();
  
  if (data.lastStudyDate === today) {
    return data.streak;
  } else {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (data.lastStudyDate === yesterday) {
      data.streak += 1;
    } else {
      data.streak = 1;
    }
    data.lastStudyDate = today;
    localStorage.setItem('userData', JSON.stringify(data));
  }
  
  return data.streak;
}

// Notification System
function showNotification(message) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #ff6b9d 0%, #4ecdc4 100%);
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    z-index: 10000;
    animation: slideInRight 0.3s ease;
  `;
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Add slide animations to global styles
if (!document.querySelector('style[data-notifications]')) {
  const style = document.createElement('style');
  style.setAttribute('data-notifications', '');
  style.textContent = `
    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    @keyframes slideOutRight {
      from {
        opacity: 1;
        transform: translateX(0);
      }
      to {
        opacity: 0;
        transform: translateX(50px);
      }
    }
  `;
  document.head.appendChild(style);
}

// Simulate study time increase
setInterval(() => {
  const data = getUserData();
  data.studyTime += 1;
  localStorage.setItem('userData', JSON.stringify(data));
  updateStatsDisplay();
}, 60000); // Every minute

// Level card click handler
document.addEventListener('DOMContentLoaded', () => {
  const levelCards = document.querySelectorAll('.level-card');
  levelCards.forEach(card => {
    card.addEventListener('click', () => {
      const level = card.dataset.level.toUpperCase();
      showNotification(`Starting ${level} lessons... 📚`);
    });
  });
});

function getQuizScore() {
  const data = getUserData();
  return data.quizzesScore;
}