# Bihar Police SI Exam CBT

A Computer-Based Test (CBT) platform for Bihar Police Sub-Inspector (SI) exam preparation with full mobile and desktop responsiveness.

## Features

✅ **Responsive Design** - Works seamlessly on both desktop and mobile devices (phones, tablets, desktops)
- ✓ Optimized for mobile (320px+)
- ✓ Tablet support (480px+)
- ✓ Desktop optimized (768px+)
- ✓ Large screen support (1024px+)

✅ **Core Features**
- 12 practice sets with 50 questions each
- Bilingual questions (English & Hindi)
- Real-time timer and question palette
- Instant result calculation with detailed review
- Test history tracking with view functionality
- Language toggle (English, Hindi, Both)
- Touch-friendly interface for mobile devices

## Getting Started

1. **Start the Application**
   - Open `si_login.html` in a web browser (desktop or mobile)
   - Can be run locally or on a web server

2. **Login**
   - Enter your roll number to start
   - Demo: Roll: 12345, Password: any

3. **Practice**
   - Select a practice set from the dashboard
   - Complete the test within 60 minutes
   - Language can be switched anytime

4. **Review Results**
   - Instant result display with score breakdown
   - Detailed review of all questions
   - Color-coded answers (correct, incorrect, skipped)

5. **Check History**
   - View past test performance
   - Review previous test answers
   - Track your progress

## Files

- `si_login.html` - Login page (responsive)
- `si_paper_selection.html` - Practice set selection (grid layout adapts to screen size)
- `si_exam.html` - Exam engine (flexible mobile/desktop layout)
- `si_result.html` - Result display (mobile-optimized)
- `si_history.html` - Test history with scrollable table
- `siset1.js` to `siset12.js` - Question sets

## Responsive Design Features

### Mobile (320px - 767px)
- Single-column layout for questions
- Sidebar moves below questions
- Touch-friendly button sizing
- Optimized font sizes for readability
- Flexible grid layout for question palette
- Scrollable content areas

### Tablet (768px - 1023px)
- Adaptive grid layouts
- Flexible sidebar placement
- Adjusted padding and spacing
- Medium-sized controls

### Desktop (1024px+)
- Side-by-side question/palette layout
- Full-sized controls
- Optimized for large screens
- Horizontal scrolling where needed

## Scoring

- Correct answer: +2 marks
- Wrong answer: -0.2 marks
- Unanswered: 0 marks
- **Total: 100 marks**

## Responsive CSS Features Used

- ✓ CSS Media Queries for breakpoints
- ✓ Flexbox for flexible layouts
- ✓ CSS Grid for adaptive grids
- ✓ Viewport meta tag for proper mobile scaling
- ✓ Relative units (em, rem, %)
- ✓ Aspect ratio for square buttons
- ✓ Min-width constraints for readability
- ✓ Touch-friendly spacing (min 44px tap targets)

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile, Firefox Mobile)

## Testing on Different Devices

### Desktop
```
Open: http://localhost:8000/si_login.html
```

### Mobile Simulation
- Chrome DevTools: Press F12, click device icon (toggle device toolbar)
- Test viewport sizes: 320px, 480px, 768px, 1024px

### Real Mobile Device
- Open on phone/tablet browser
- Test orientation change (portrait/landscape)
- Test touch interactions

## License

MIT License - See LICENSE file for details

## Author

AP

## Version History

- **v2.0** - Added full responsive design for mobile and desktop support
- **v1.0** - Initial release with desktop focus

