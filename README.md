# 🐦 Flappy Dusk — Enhanced Flappy Bird (PWA)

![Gameplay](./screenshots/gameplay.gif)


A polished browser remake of Flappy Bird featuring power-ups, combo mechanics, and a fully installable PWA experience.

Built to practice **canvas rendering**, **game feel tuning**, and **mobile-first web deployment**.

🔗 **Play here:** https://kragenz.github.io/Flappy-Dusk/

---

## ✨ Features

### 🎮 Core Gameplay

* Classic flap-through-pipes mechanics
* 3-life system with damage feedback
* Dynamic difficulty scaling
* Ground collision detection

### ⚡ Advanced Mechanics

* 🔥 Combo multiplier system
* ⚡ Near-miss bonus detection
* 🎁 Random power-ups:

  * Shield (invincibility)
  * Slow World
  * Auto-Aim assist
  * Tiny Bird (smaller hitbox)

### 🎨 Visual Polish

* Multi-layer parallax dusk background
* Fireflies, dust, and leaf particles
* Screen shake & ring pulse effects
* Bird trail system
* 6 unlockable bird skins

### 🏆 Leaderboard

* Global leaderboard (Firebase)
* Local best score tracking
* Medal system for top runs
* Player name persistence

### 🎵 Audio

* Procedural ambient background music
* Soft synthesized sound effects
* Separate toggles for Music / SFX
* Mobile haptic feedback

### 📱 Progressive Web App

* Installable on mobile & desktop
* Offline support via service worker
* Custom install prompt
* Network status detection

---

## 🛠 Tech Stack

* **HTML5 Canvas**
* **Vanilla JavaScript**
* **Web Audio API**
* **Firebase Firestore**
* **PWA (Service Worker + Manifest)**

No frameworks — everything built from scratch.

---

## 🎯 What I Focused On

This project was mainly an exercise in:

* Game feel and responsiveness
* Smooth canvas animation
* Mobile performance
* Clean UI/UX polish
* Real-time leaderboard integration
* PWA deployment pipeline

Most gameplay values were tuned manually through playtesting.

---

## 🎮 Controls

| Input       | Action |
| ----------- | ------ |
| Tap / Click | Flap   |
| Space / ↑   | Flap   |
| P / Esc     | Pause  |

---

## 🧪 Devlog

### v1.3.0

* Fixed slow-mo affecting player physics
* Improved auto-aim strength
* Corrected flamingo hitbox alignment
* Added Firebase global leaderboard

### v1.2.0

* Added power-up system
* Added combo multiplier
* Added near-miss bonus

### v1.1.0

* Initial playable release

---

## 🚀 Running Locally

```bash
git clone https://github.com/KragenZ/Flappy-Dusk.git
cd Flappy-Dusk
```

Then open `index.html` in your browser
(or use VS Code Live Server).

---

## 📌 Future Improvements

* [ ] Ghost replay system
* [ ] Daily challenge mode
* [ ] Additional bird skins
* [ ] Performance optimizations on low-end mobile

---

## 👤 Author

**Srijit Roy**
CSE (AI/ML) student

GitHub: https://github.com/KragenZ

---

⭐ If you like the project, consider starring the repo!
