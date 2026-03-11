# SDD Revision Platform

An interactive, browser-based revision tool gamified for NSW HSC Software Design and Development students.

## Features
- **18+ Topics**: Practice questions ranging from Flowchart Matching and EBNF Metalanguage to Data Structures and Hardware.
- **Diagnostics**: Start with a diagnostic quiz to pinpoint strengths and weaknesses.
- **Gamification**: Earn points, build streaks, and use hints (at a cost to your points).
- **Rich Media**: Beautifully rendered Mermaid.js diagrams, step-by-step algorithm trace tables, and syntax-highlighted pseudocode.
- **Local Persistence**: Your progress, scores, and topic masteries are saved locally in your browser.

## Getting Started

To play the game locally, clone the repository and run a local web server. (A local server is required because some browsers aggressively block Mermaid.js CDN scripts on bare `file:///` URLs).

```bash
git clone https://github.com/SSLdaemon/sdd-revision-platform.git
cd sdd-revision-platform
python -m http.server 8000
```

Then, open your browser and navigate to `http://localhost:8000/index.html`.

## Project Structure
- `index.html`: The fully compiled, standalone application.
- `questions.js`: The central database of quiz questions, explanations, and diagram data.
- `build_platform.py`: A Python compiler script used to inject the `questions.js` database into the platform UI.

## Development

The architecture is designed to be self-contained in a single file eventually. If you add new questions to `questions.js` or tweak the HTML/CSS/JS code inside `build_platform.py`, you'll need to rebuild the project:

```bash
python build_platform.py
```

This updates `index.html` with your latest changes.
