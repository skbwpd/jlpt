# 🗾 JLPT Mastery - Master Japanese Language

![JLPT Mastery](https://img.shields.io/badge/JLPT-Learning%20Platform-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Status](https://img.shields.io/badge/status-Active-success)

## Overview

**JLPT Mastery** is a smart, interactive web-based platform designed to help learners prepare for the Japanese Language Proficiency Test (JLPT). Built with modern web technologies, it provides a comprehensive learning experience with progress tracking, interactive quizzes, and a user-friendly dashboard.

## ✨ Features

### 🎓 Learning System
- **5 JLPT Levels**: N5 (Beginner) to N1 (Advanced)
- **Interactive Lessons**: Structured content covering vocabulary, grammar, and kanji
- **Progress Tracking**: Visual progress bars for each level
- **Daily Vocabulary Cards**: New vocabulary every day

### 🎯 Smart Interactive Tools
- **Interactive Quiz Module**: Multiple-choice questions with instant feedback
- **10+ Pre-built Questions**: Covering hiragana, katakana, vocabulary, and more
- **Real-time Score Tracking**: Track your quiz performance
- **Study Streak Counter**: Maintain motivation with daily streaks

### 📊 Analytics Dashboard
- **Key Statistics**:
  - Lessons Completed
  - Quiz Average Score
  - Study Day Streak
  - Total Study Time
- **Weekly Activity Chart**: Visualize your study patterns
- **Data Persistence**: All progress saved locally

### 🌙 User Experience
- **Dark Mode**: Toggle between light and dark themes (Ctrl+D)
- **Responsive Design**: Perfect on desktop, tablet, and mobile
- **Smooth Animations**: Professional feel with CSS animations
- **Keyboard Shortcuts**: Quick theme toggle with Ctrl+D
- **Notifications**: Real-time feedback and encouragement

### 📱 Technical Features
- **LocalStorage**: Automatic data persistence
- **No Backend Required**: Runs entirely in the browser
- **Lightweight**: Fast loading and smooth performance
- **Progressive Enhancement**: Works offline

## 🚀 Getting Started

### Option 1: GitHub Pages (Recommended)

The website is already configured to run on GitHub Pages!

1. Go to your repository settings
2. Scroll to **GitHub Pages**
3. Set Source to `main` branch
4. Your site will be live at: `https://yourusername.github.io/jlpt/`

### Option 2: Local Development

```bash
# Clone the repository
git clone https://github.com/yourusername/jlpt.git
cd jlpt

# Open in your browser (no build step needed!)
open index.html
```

## 📁 Project Structure

```
jlpt/
├── index.html          # Main application (HTML)
├── styles.css          # Styling (CSS)
├── script.js           # Interactivity (JavaScript)
└── README.md           # This file
```

## 🎮 How to Use

### 1. **Start Learning**
   - Click on a JLPT level card (N5, N4, N3, N2, N1)
   - Progress bars show your completion percentage

### 2. **Take Quizzes**
   - Scroll to the dashboard
   - Answer quiz questions
   - Get instant feedback on your answers
   - Track your score automatically

### 3. **Learn Vocabulary**
   - Check "Today's Vocabulary" section
   - Learn Japanese (kanji), readings (hiragana), and meanings
   - New words refreshed daily

### 4. **Track Progress**
   - Dashboard shows your statistics
   - Weekly activity chart visualizes study patterns
   - Streak counter motivates daily learning

### 5. **Theme Toggle**
   - Click the 🌙 button in the navbar
   - Or press `Ctrl+D` for quick toggle

## 🌙 Dark Mode

Automatic dark mode support with CSS variables:
- Light theme (default)
- Dark theme (toggle anytime)
- Theme preference saved in browser

## 📊 Quiz Questions

The platform includes questions like:
1. Hiragana/Katakana character recognition
2. Basic vocabulary (greetings, numbers, etc.)
3. Kanji meanings
4. Common phrases
5. Grammar basics

## 💾 Data Storage

All progress is saved locally in your browser:
- Quiz scores
- Lessons completed
- Study time
- Day streak
- Theme preference

**Note**: Data persists until browser cache is cleared

## 🔮 Roadmap

Planned features:
- [ ] Backend API integration for cloud sync
- [ ] User authentication
- [ ] Advanced grammar lessons
- [ ] Audio pronunciation guides
- [ ] Spaced repetition system
- [ ] Exam simulation mode
- [ ] Community forum
- [ ] Mobile app version
- [ ] Video lessons
- [ ] Speaking practice

## 🎨 Customization

### Colors
Edit the CSS variables in `styles.css`:

```css
:root {
  --primary: #ff6b9d;      /* Pink accent */
  --secondary: #4ecdc4;    /* Teal accent */
  --accent: #ffa502;       /* Orange button */
  /* ... more colors ... */
}
```

### Add More Quiz Questions

Edit the `quizzes` array in `script.js`:

```javascript
const quizzes = [
  {
    question: 'Your question?',
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    correct: 0  // Index of correct answer
  },
  // Add more...
];
```

## 📱 Browser Compatibility

✅ **Supported**: Chrome, Firefox, Safari, Edge  
✅ **Mobile**: iOS Safari, Android Chrome  
✅ **Responsive**: All screen sizes (320px - 2560px)

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Inspired by Japanese language learners worldwide
- Built with modern web standards
- Icons from Unicode emoji set
- Colors inspired by vibrant Japanese culture

## 📧 Support

Have questions or issues? 
- Open an issue on GitHub
- Check existing issues for solutions
- Review the documentation above

## 🎯 Goals

Our mission is to:
- Make JLPT preparation accessible to everyone
- Provide engaging, interactive learning experience
- Track progress and maintain motivation
- Build a supportive community
- Continuously improve based on user feedback

---

**Made with ❤️ for Japanese language learners worldwide**

🗾 Start learning today: Visit your deployed site on GitHub Pages!
