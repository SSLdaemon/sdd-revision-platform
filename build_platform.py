"""Build the index.html platform by combining questions.js with HTML/CSS/JS."""
import json

# Read the questions data
questions_js = open(r"c:\Users\rfard\Documents\Coding game\questions.js", encoding="utf-8").read()

html = r'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SDD Revision Platform — NSW HSC</title>
<meta name="description" content="Interactive revision platform for NSW HSC Software Design and Development. Practice MCQ, algorithm tracing, and more.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@700;800&display=swap" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js"></script>
<style>
:root {
  --bg: #0b0b14;
  --bg2: #111120;
  --card: #161628;
  --card-hover: #1c1c35;
  --card-border: #252540;
  --accent: #6C63FF;
  --accent-glow: rgba(108,99,255,0.25);
  --accent2: #00D4AA;
  --accent2-glow: rgba(0,212,170,0.2);
  --danger: #FF5A5A;
  --danger-glow: rgba(255,90,90,0.2);
  --warn: #FFB347;
  --text: #E8E8F4;
  --text-dim: #8888A8;
  --text-muted: #555570;
  --success: #4ADE80;
  --streak-gold: #FFD700;
  --code-bg: #0d1117;
}

*{margin:0;padding:0;box-sizing:border-box}

body{
  font-family:'DM Sans',sans-serif;
  background:var(--bg);
  color:var(--text);
  min-height:100vh;
  overflow-x:hidden;
}

/* ===== SCREEN SYSTEM ===== */
.screen{display:none;min-height:100vh;animation:screenIn .4s ease}
.screen.active{display:block}
@keyframes screenIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}

/* ===== TOP NAV ===== */
.topnav{
  position:sticky;top:0;z-index:100;
  background:rgba(11,11,20,0.88);
  backdrop-filter:blur(16px);
  border-bottom:1px solid var(--card-border);
  padding:0 clamp(16px,3vw,40px);
  height:60px;display:flex;align-items:center;justify-content:space-between;
}
.topnav .logo{font-family:'Space Grotesk',sans-serif;font-size:1.1rem;font-weight:800;color:var(--accent);letter-spacing:.5px}
.topnav .logo span{color:var(--accent2)}
.topnav .stats{display:flex;gap:16px;align-items:center}
.stat-pill{
  background:var(--card);border:1px solid var(--card-border);
  padding:6px 14px;border-radius:20px;font-size:.78rem;font-weight:600;
  display:flex;align-items:center;gap:6px;
}
.stat-pill .val{color:var(--accent2)}
.streak-pill .val{color:var(--streak-gold)}
.back-btn{
  background:var(--card);border:1px solid var(--card-border);color:var(--text);
  padding:8px 16px;border-radius:10px;cursor:pointer;font-family:'DM Sans';
  font-size:.85rem;font-weight:600;transition:all .2s;display:flex;align-items:center;gap:6px;
}
.back-btn:hover{background:var(--card-hover);border-color:var(--accent)}

/* ===== HOME SCREEN ===== */
.home-hero{
  text-align:center;padding:clamp(60px,12vh,140px) 20px 40px;
  position:relative;overflow:hidden;
}
.home-hero::before{
  content:'';position:absolute;top:-200px;left:50%;transform:translateX(-50%);
  width:800px;height:800px;border-radius:50%;
  background:radial-gradient(circle,var(--accent-glow) 0%,transparent 70%);
  pointer-events:none;
}
.home-hero h1{
  font-family:'Space Grotesk',sans-serif;
  font-size:clamp(2.2rem,5vw,4rem);font-weight:900;
  line-height:1.1;margin-bottom:.4em;position:relative;
  background:linear-gradient(135deg,#fff 0%,var(--accent) 50%,var(--accent2) 100%);
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
}
.home-hero .sub{
  font-size:clamp(1rem,2vw,1.3rem);color:var(--text-dim);
  max-width:600px;margin:0 auto 2em;line-height:1.6;position:relative;
}
.home-actions{
  display:flex;gap:16px;justify-content:center;flex-wrap:wrap;position:relative;
}
.home-btn{
  font-family:'DM Sans';font-size:1rem;font-weight:700;
  padding:16px 36px;border-radius:14px;border:none;cursor:pointer;
  transition:all .25s;display:flex;align-items:center;gap:10px;
}
.home-btn.primary{
  background:linear-gradient(135deg,var(--accent),#8B5CF6);color:#fff;
  box-shadow:0 6px 24px var(--accent-glow);
}
.home-btn.primary:hover{transform:translateY(-2px);box-shadow:0 10px 36px var(--accent-glow)}
.home-btn.secondary{
  background:var(--card);color:var(--text);
  border:1px solid var(--card-border);
}
.home-btn.secondary:hover{border-color:var(--accent2);color:var(--accent2)}

/* Stats summary on home */
.home-stats{
  display:flex;gap:20px;justify-content:center;flex-wrap:wrap;
  margin-top:50px;position:relative;
}
.home-stat-card{
  background:var(--card);border:1px solid var(--card-border);border-radius:16px;
  padding:24px 32px;text-align:center;min-width:140px;
}
.home-stat-card .num{font-size:2rem;font-weight:800;color:var(--accent2)}
.home-stat-card .label{font-size:.8rem;color:var(--text-dim);margin-top:4px}

/* ===== TOPIC SELECT ===== */
.topic-grid{
  display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));
  gap:16px;padding:24px clamp(16px,3vw,40px) 40px;max-width:1200px;margin:0 auto;
}
.topic-card{
  background:var(--card);border:1px solid var(--card-border);border-radius:16px;
  padding:24px;cursor:pointer;transition:all .25s;position:relative;overflow:hidden;
}
.topic-card:hover{border-color:var(--accent);transform:translateY(-3px);box-shadow:0 8px 24px rgba(0,0,0,.3)}
.topic-card.empty{opacity:.35;cursor:default;pointer-events:none}
.topic-card .cat-name{font-weight:700;font-size:1.05rem;margin-bottom:6px}
.topic-card .cat-count{font-size:.82rem;color:var(--text-dim)}
.topic-card .cat-bar{
  height:4px;border-radius:2px;background:var(--card-border);margin-top:14px;overflow:hidden;
}
.topic-card .cat-bar-fill{height:100%;border-radius:2px;background:linear-gradient(90deg,var(--accent),var(--accent2));transition:width .6s ease}
.topic-card .diff-dots{display:flex;gap:4px;margin-top:10px}
.diff-dot{width:8px;height:8px;border-radius:50%;background:var(--card-border)}
.diff-dot.active{background:var(--accent2)}
.section-header{
  padding:24px clamp(16px,3vw,40px) 8px;max-width:1200px;margin:0 auto;
  font-size:1.4rem;font-weight:800;
}
.section-sub{color:var(--text-dim);font-size:.9rem;font-weight:400;margin-top:4px}

/* ===== QUIZ SCREEN ===== */
.quiz-container{
  max-width:800px;margin:0 auto;padding:24px clamp(16px,3vw,40px) 100px;
}
.quiz-progress{
  display:flex;align-items:center;gap:12px;margin-bottom:24px;
}
.quiz-progress-bar{flex:1;height:6px;border-radius:3px;background:var(--card-border);overflow:hidden}
.quiz-progress-fill{height:100%;border-radius:3px;background:linear-gradient(90deg,var(--accent),var(--accent2));transition:width .4s ease}
.quiz-progress-text{font-size:.8rem;color:var(--text-dim);font-weight:600;white-space:nowrap}

.question-card{
  background:var(--card);border:1px solid var(--card-border);border-radius:20px;
  padding:clamp(20px,4vw,36px);margin-bottom:20px;
}
.q-category{
  font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;
  color:var(--accent);margin-bottom:12px;
}
.q-difficulty{
  display:inline-flex;gap:3px;margin-left:12px;vertical-align:middle;
}
.q-difficulty .dot{width:6px;height:6px;border-radius:50%;background:var(--card-border)}
.q-difficulty .dot.on{background:var(--accent2)}
.q-text{
  font-size:clamp(.92rem,1.8vw,1.08rem);line-height:1.7;white-space:pre-wrap;
  font-family:'DM Sans',sans-serif;
}
.q-text code,.q-code-block{
  font-family:'JetBrains Mono',monospace;background:var(--code-bg);
  padding:2px 6px;border-radius:4px;font-size:.88em;
  border:1px solid #252540;
}
.q-code-block{
  display:block;padding:16px 20px;border-radius:12px;margin:12px 0;
  white-space:pre;overflow-x:auto;line-height:1.6;font-size:.85rem;
}

/* Options */
.options-grid{display:flex;flex-direction:column;gap:10px;margin-top:20px}
.option-btn{
  background:var(--bg2);border:2px solid var(--card-border);border-radius:14px;
  padding:16px 20px;cursor:pointer;transition:all .2s;text-align:left;
  font-family:'DM Sans';font-size:.95rem;line-height:1.5;color:var(--text);
  display:flex;align-items:flex-start;gap:14px;white-space:pre-wrap;
}
.option-btn:hover:not(.locked){border-color:var(--accent);background:rgba(108,99,255,.06)}
.option-btn .opt-letter{
  background:var(--card);min-width:34px;height:34px;border-radius:10px;
  display:flex;align-items:center;justify-content:center;
  font-weight:800;font-size:.85rem;color:var(--text-dim);flex-shrink:0;
  transition:all .3s;
}
.option-btn.correct{border-color:var(--success);background:rgba(74,222,128,.08)}
.option-btn.correct .opt-letter{background:var(--success);color:#000}
.option-btn.wrong{border-color:var(--danger);background:rgba(255,90,90,.06)}
.option-btn.wrong .opt-letter{background:var(--danger);color:#fff}
.option-btn.locked{cursor:default;opacity:.6}
.option-btn.locked.correct{opacity:1}

/* Feedback panel */
.feedback-panel{
  border-radius:16px;padding:20px 24px;margin-top:16px;
  animation:slideUp .3s ease;
}
@keyframes slideUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
.feedback-panel.correct-fb{background:rgba(74,222,128,.08);border:1px solid rgba(74,222,128,.2)}
.feedback-panel.wrong-fb{background:rgba(255,90,90,.06);border:1px solid rgba(255,90,90,.15)}
.feedback-panel h4{font-size:.95rem;margin-bottom:8px}
.feedback-panel h4.correct-h{color:var(--success)}
.feedback-panel h4.wrong-h{color:var(--danger)}
.feedback-panel p{font-size:.88rem;color:var(--text-dim);line-height:1.65;white-space:pre-wrap}

.next-btn{
  font-family:'DM Sans';margin-top:20px;padding:14px 32px;
  font-size:1rem;font-weight:700;border:none;border-radius:12px;
  cursor:pointer;background:linear-gradient(135deg,var(--accent),#8B5CF6);
  color:#fff;box-shadow:0 4px 16px var(--accent-glow);transition:all .25s;
  display:flex;align-items:center;gap:8px;margin-left:auto;
}
.next-btn:hover{transform:translateY(-2px);box-shadow:0 6px 24px var(--accent-glow)}

/* Hint button */
.hint-row{display:flex;align-items:center;gap:12px;margin-top:16px}
.hint-btn{
  font-family:'DM Sans';background:var(--bg2);border:1px solid var(--card-border);
  color:var(--warn);padding:10px 18px;border-radius:10px;cursor:pointer;
  font-size:.85rem;font-weight:600;transition:all .2s;
}
.hint-btn:hover{border-color:var(--warn);background:rgba(255,179,71,.06)}
.hint-btn:disabled{opacity:.3;cursor:default}
.hint-cost{font-size:.75rem;color:var(--text-muted)}
.hint-panel{
  background:rgba(255,179,71,.06);border:1px solid rgba(255,179,71,.15);
  border-left:3px solid var(--warn);border-radius:12px;
  padding:14px 18px;margin-top:12px;font-size:.88rem;color:var(--text-dim);line-height:1.6;
}

/* ===== RESULTS SCREEN ===== */
.results-container{
  max-width:600px;margin:0 auto;padding:60px 20px;text-align:center;
}
.results-score{
  font-size:4rem;font-weight:900;
  background:linear-gradient(135deg,var(--accent),var(--accent2));
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
}
.results-label{color:var(--text-dim);font-size:1.1rem;margin-top:8px}
.results-stats{
  display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;margin:32px 0;
}
.r-stat{background:var(--card);border:1px solid var(--card-border);border-radius:14px;padding:20px}
.r-stat .r-val{font-size:1.8rem;font-weight:800;color:var(--accent2)}
.r-stat .r-lbl{font-size:.78rem;color:var(--text-dim);margin-top:4px}
.results-btns{display:flex;gap:12px;justify-content:center;margin-top:24px}

/* ===== DIAGNOSTIC RESULTS ===== */
.diag-results{max-width:600px;margin:0 auto;padding:40px 20px}
.diag-item{
  display:flex;align-items:center;gap:14px;padding:14px 0;
  border-bottom:1px solid var(--card-border);
}
.diag-icon{font-size:1.4rem}
.diag-cat{flex:1;font-weight:600;font-size:.95rem}
.diag-verdict{font-size:.82rem;font-weight:700;padding:4px 12px;border-radius:8px}
.diag-verdict.pass{background:rgba(74,222,128,.12);color:var(--success)}
.diag-verdict.fail{background:rgba(255,90,90,.1);color:var(--danger)}

/* ===== RESPONSIVE ===== */
@media(max-width:600px){
  .topic-grid{grid-template-columns:1fr}
  .results-stats{grid-template-columns:1fr}
  .home-actions{flex-direction:column;align-items:center}
  .stat-pill{padding:4px 10px;font-size:.72rem}
  .topnav .stats{gap:8px}
}

/* ===== MERMAID DIAGRAM ===== */
.diagram-container{
  background:var(--code-bg);border:1px solid #252540;border-radius:16px;
  padding:24px;margin:16px 0;text-align:center;overflow-x:auto;
}
.diagram-container svg{max-width:100%;height:auto}

/* ===== PSEUDOCODE HIGHLIGHTING ===== */
.q-code-block .pseudo-kw{color:#ff7b72;font-weight:700}
.q-code-block .pseudo-io{color:#79c0ff;font-weight:600}
.q-code-block .pseudo-str{color:#a5d6ff}
.q-code-block .pseudo-cmt{color:#8b949e;font-style:italic}
.q-code-block .pseudo-num{color:#79c0ff}

/* ===== FLOWCHART NODES IN TEXT ===== */
.flow-container{
  display:flex;flex-direction:column;align-items:center;gap:8px;
  margin:16px 0;padding:20px;background:var(--code-bg);
  border:1px solid #252540;border-radius:14px;
}
.flow-row{display:flex;align-items:center;gap:10px;flex-wrap:wrap;justify-content:center}
.flow-node{
  display:inline-flex;align-items:center;justify-content:center;
  padding:8px 16px;font-family:'JetBrains Mono',monospace;font-size:.8rem;
  font-weight:600;text-align:center;
}
.flow-start,.flow-end{background:rgba(74,222,128,.12);border:2px solid var(--success);color:var(--success);border-radius:24px}
.flow-process{background:rgba(108,99,255,.1);border:2px solid var(--accent);color:#c4c0ff;border-radius:10px}
.flow-decision{background:rgba(255,179,71,.1);border:2px solid var(--warn);color:var(--warn);border-radius:10px}
.flow-decision::before{content:'\25C7 ';font-size:.9em}
.flow-arrow{color:var(--text-muted);font-size:1.1rem}
.flow-label{font-size:.72rem;font-weight:700;padding:3px 10px;border-radius:6px;text-transform:uppercase}
.flow-label.yes{color:var(--success);background:rgba(74,222,128,.12)}
.flow-label.no{color:var(--danger);background:rgba(255,90,90,.1)}

/* ===== STRUCTURE DIAGRAM ===== */
.struct-container{
  background:var(--code-bg);border:1px solid #252540;border-radius:14px;
  padding:20px;margin:16px 0;font-family:'JetBrains Mono',monospace;
  font-size:.9rem;line-height:1.5;white-space:pre;text-align:center;
  overflow-x:auto;color:var(--text);
}
.struct-marker{color:var(--warn);font-weight:700;font-size:1.1em}

/* ===== CODE OPTIONS ===== */
.option-btn.has-code{font-family:'JetBrains Mono',monospace;font-size:.84rem;line-height:1.65}
.option-btn.has-code span:last-child{white-space:pre-wrap}
</style>
</head>
<body>

<!-- ========== HOME SCREEN ========== -->
<div class="screen active" id="screen-home">
  <div class="topnav">
    <div class="logo">SDD<span>Rev</span></div>
    <div class="stats">
      <div class="stat-pill"><span>&#x1F3AF;</span> <span class="val" id="homeScore">0</span> pts</div>
    </div>
  </div>
  <div class="home-hero">
    <h1>Master Your<br>HSC Exam</h1>
    <p class="sub">Interactive revision for NSW Software Design & Development. Practice questions, build streaks, and track your progress across every topic.</p>
    <div class="home-actions">
      <button class="home-btn primary" onclick="showTopics()">&#x1F4DA; Topic Practice</button>
      <button class="home-btn secondary" onclick="startDiagnostic()">&#x26A1; Quick Diagnostic</button>
    </div>
    <div class="home-stats">
      <div class="home-stat-card"><div class="num" id="homeTotalQ">0</div><div class="label">Questions Answered</div></div>
      <div class="home-stat-card"><div class="num" id="homeAccuracy">—</div><div class="label">Accuracy</div></div>
      <div class="home-stat-card"><div class="num" id="homeBestStreak">0</div><div class="label">Best Streak</div></div>
      <div class="home-stat-card"><div class="num" id="homeCatsComplete">0</div><div class="label">Topics Done</div></div>
    </div>
  </div>
</div>

<!-- ========== TOPIC SELECT SCREEN ========== -->
<div class="screen" id="screen-topics">
  <div class="topnav">
    <button class="back-btn" onclick="goHome()">&#x2190; Home</button>
    <div class="logo">SDD<span>Rev</span></div>
    <div class="stats">
      <div class="stat-pill"><span>&#x1F3AF;</span> <span class="val" id="topicScore">0</span> pts</div>
    </div>
  </div>
  <div class="section-header">Choose a Topic<div class="section-sub">Practice one category at a time. Complete all questions to master a topic.</div></div>
  <div class="topic-grid" id="topicGrid"></div>
</div>

<!-- ========== QUIZ SCREEN ========== -->
<div class="screen" id="screen-quiz">
  <div class="topnav">
    <button class="back-btn" onclick="exitQuiz()">&#x2190; Topics</button>
    <div class="logo" id="quizCatName"></div>
    <div class="stats">
      <div class="stat-pill streak-pill">&#x1F525; <span class="val" id="streakCount">0</span></div>
      <div class="stat-pill"><span>&#x1F3AF;</span> <span class="val" id="quizScore">0</span></div>
    </div>
  </div>
  <div class="quiz-container">
    <div class="quiz-progress">
      <div class="quiz-progress-bar"><div class="quiz-progress-fill" id="quizProgressFill"></div></div>
      <div class="quiz-progress-text" id="quizProgressText">1/5</div>
    </div>
    <div id="questionArea"></div>
  </div>
</div>

<!-- ========== RESULTS SCREEN ========== -->
<div class="screen" id="screen-results">
  <div class="topnav">
    <button class="back-btn" onclick="showTopics()">&#x2190; Topics</button>
    <div class="logo">SDD<span>Rev</span></div>
    <div></div>
  </div>
  <div class="results-container" id="resultsArea"></div>
</div>

<script>
''' + questions_js + r'''

/* ===== CATEGORY METADATA ===== */
const CAT_LABELS = {
  FLOWCHART_MATCH: {name:"Flowchart Matching", icon:"📊"},
  STRUCTURE_DIAGRAM: {name:"Structure Diagrams", icon:"🏗️"},
  ALGORITHM_TRACE: {name:"Algorithm Tracing", icon:"🔍"},
  EQUIVALENT_ALGORITHM: {name:"Equivalent Algorithms", icon:"🔄"},
  SUBROUTINE_PARAMS: {name:"Subroutines & Parameters", icon:"📦"},
  SORT_ALGORITHMS: {name:"Sort Algorithms", icon:"📶"},
  BINARY_SEARCH: {name:"Binary Search", icon:"🎯"},
  ALGORITHM_WRITE: {name:"Algorithm Writing", icon:"✍️"},
  METALANGUAGE: {name:"EBNF & Metalanguage", icon:"🗂️"},
  DATA_STRUCTURES: {name:"Data Structures", icon:"🧱"},
  ERROR_TYPES: {name:"Error Types", icon:"🐛"},
  VARIABLE_SCOPE: {name:"Variable Scope", icon:"🔬"},
  COMPILATION: {name:"Compilation Steps", icon:"⚙️"},
  PROGRAMMING_PARADIGMS: {name:"Programming Paradigms", icon:"🧩"},
  FILE_STRUCTURES: {name:"File Structures", icon:"📁"},
  DOCUMENTATION: {name:"Documentation", icon:"📋"},
  TESTING: {name:"Testing & Reporting", icon:"✅"},
  HARDWARE: {name:"Fetch-Execute Cycle", icon:"🖥️"},
  SYSTEM_MODELLING: {name:"System Modelling", icon:"🗺️"},
};

/* ===== STATE ===== */
let state = loadProgress();
let currentQuiz = null; // {category, questions, index, score, streak, hintsUsed}

function getDefaultState(){
  return {totalScore:0, totalAnswered:0, totalCorrect:0, bestStreak:0, categories:{}};
}
function loadProgress(){
  try{const s=localStorage.getItem('sdd_revision_progress');return s?JSON.parse(s):getDefaultState()}
  catch(e){return getDefaultState()}
}
function saveProgress(){localStorage.setItem('sdd_revision_progress',JSON.stringify(state))}

/* ===== HELPERS ===== */
function getMCQQuestions(category){
  return QUESTIONS.filter(q => q.category===category && q.options.length>=4 && q.options[0].startsWith('A'));
}
function getAllMCQCategories(){
  const cats={};
  QUESTIONS.forEach(q=>{
    if(q.options.length>=4 && q.options[0].startsWith('A')){
      if(!cats[q.category])cats[q.category]={count:0,maxDiff:0};
      cats[q.category].count++;
      cats[q.category].maxDiff=Math.max(cats[q.category].maxDiff,q.difficulty);
    }
  });
  return cats;
}
function shuffle(arr){const a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function highlightPseudo(line){
  let s = line;
  s = s.replace(/\b(BEGIN|END|IF|THEN|ELSE|ENDIF|WHILE|ENDWHILE|FOR|TO|STEP|NEXT|REPEAT|UNTIL|CASEWHERE|ENDCASE|OTHERWISE|AND|OR|NOT|RETURN|TRUE|FALSE|EOF)\b/g, '<span class="pseudo-kw">$1</span>');
  s = s.replace(/\b(Display|Get|Input|Print|Read|DISPLAY|GET|INPUT|PRINT|READ|OPEN|CLOSE|WRITE|Set)\b/g, '<span class="pseudo-io">$1</span>');
  s = s.replace(/\b(REM\b.*)/g, '<span class="pseudo-cmt">$1</span>');
  return s;
}

function formatFlowchartText(html){
  const lines = html.split('\n');
  let result = [];
  let flowLines = [];
  let collecting = false;
  for(let line of lines){
    const trimmed = line.trim();
    const hasNodes = /\[.+?\]/.test(trimmed);
    const hasArrows = trimmed.includes('--&gt;');
    const isBranch = /^(YES|NO|All paths|Both paths)/i.test(trimmed);
    if(hasNodes && (hasArrows || isBranch)){
      if(!collecting) collecting = true;
      flowLines.push(trimmed);
    } else {
      if(collecting){
        result.push(renderFlowLines(flowLines));
        flowLines = []; collecting = false;
      }
      result.push(line);
    }
  }
  if(collecting && flowLines.length) result.push(renderFlowLines(flowLines));
  return result.join('\n');
}

function renderFlowLines(lines){
  let html = '<div class="flow-container">';
  for(const line of lines){
    html += '<div class="flow-row">';
    const segs = line.split(/\s*--&gt;\s*/);
    for(let i=0; i<segs.length; i++){
      let seg = segs[i].trim();
      if(!seg) continue;
      if(i > 0) html += '<span class="flow-arrow">→</span>';
      let label = '';
      const lm = seg.match(/^(YES|NO)\s+/);
      if(lm){ label = lm[1]; seg = seg.substring(lm[0].length); }
      if(label) html += '<span class="flow-label '+label.toLowerCase()+'">'+label+'</span><span class="flow-arrow">→</span>';
      const nodeRe = /\[([^\]]+)\]/g;
      let nm, lastI=0, parsed=false;
      while((nm = nodeRe.exec(seg)) !== null){
        const before = seg.substring(lastI, nm.index).trim();
        if(before && /^(YES|NO)$/.test(before)){
          html += '<span class="flow-label '+before.toLowerCase()+'">'+before+'</span><span class="flow-arrow">→</span>';
        }
        const c = nm[1];
        let cls='flow-process', disp=c;
        if(/^START$/i.test(c)) cls='flow-start';
        else if(/^END$/i.test(c)) cls='flow-end';
        else if(/^DECISION:/i.test(c)){ cls='flow-decision'; disp=c.replace(/^DECISION:\s*/i,''); }
        else if(/^back to/i.test(c)){ disp='↺ '+c.replace(/^back to\s*/i,''); }
        else if(/^Continue$/i.test(c)) cls='flow-end';
        html += '<span class="flow-node '+cls+'">'+disp+'</span>';
        lastI = nm.index + nm[0].length; parsed = true;
      }
      if(!parsed){
        if(/^(YES|NO)$/.test(seg)){
          html += '<span class="flow-label '+seg.toLowerCase()+'">'+seg+'</span>';
        } else if(seg.match(/^(All paths|Both paths)/i)){
          html += '<span style="color:var(--text-dim);font-size:.8rem;font-style:italic">'+seg+'</span>';
        }
      }
    }
    html += '</div>';
  }
  html += '</div>';
  return html;
}

function diagramDataToMermaid(data){
  if(!data || data==='NONE') return null;
  if(!data.startsWith('FLOWCHART:') && !data.startsWith('STRUCTURE:')) return null;
  if(data.startsWith('FLOWCHART_OPTIONS:') || data.startsWith('CONTEXT_DIAGRAM:')) return null;
  const isStruct = data.startsWith('STRUCTURE:');
  const raw = data.substring(data.indexOf(':')+1);
  const branches = raw.split(';');
  const nodeMap = new Map();
  const edges = [];
  let lastDecision = null;
  function regNode(str){
    str = str.trim();
    const m = str.match(/^(\w+)\((.+)\)$/);
    let id, content;
    if(m){ id=m[1]; content=m[2]; } else { id=str; content=str.replace(/^node_/,'').replace(/_/g,' '); }
    let shape='rect';
    if(id.includes('start')||id.includes('end')) shape='stadium';
    else if(id.includes('decision')||id.includes('multi')) shape='diamond';
    else if(isStruct && id.includes('root')) shape='rect';
    if(!nodeMap.has(id)) nodeMap.set(id,{shape,content});
    if(shape==='diamond') lastDecision=id;
    return id;
  }
  for(const branch of branches){
    const parts = branch.split('-->').map(s=>s.trim()).filter(Boolean);
    let prev = null;
    for(const seg of parts){
      let lbl='', ns=seg;
      const lm = seg.match(/^(YES|NO):/);
      if(lm){ lbl=lm[1]; ns=seg.substring(lm[0].length); }
      const nid = regNode(ns);
      if(prev) edges.push({from:prev,to:nid,label:lbl});
      else if(lbl && lastDecision) edges.push({from:lastDecision,to:nid,label:lbl});
      prev = nid;
    }
  }
  let mmd = 'flowchart TD\n';
  for(const [id,{shape,content}] of nodeMap){
    const safe = content.replace(/"/g,"'");
    if(shape==='stadium') mmd += '  '+id+'(["'+safe+'"])\n';
    else if(shape==='diamond') mmd += '  '+id+'{"'+safe+'"}\n';
    else mmd += '  '+id+'["'+safe+'"]\n';
  }
  for(const {from,to,label} of edges){
    mmd += label ? '  '+from+' -->|'+label+'| '+to+'\n' : '  '+from+' --> '+to+'\n';
  }
  return mmd;
}

async function renderMermaidDiagram(data, containerId){
  const mmd = diagramDataToMermaid(data);
  if(!mmd) return;
  try {
    const {svg} = await mermaid.render('mmd-'+containerId, mmd);
    const el = document.getElementById(containerId);
    if(el) el.innerHTML = svg;
  } catch(e){ console.warn('Mermaid render failed:', e); }
}

function formatQuestion(text){
  let html = text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  // Symbol upgrades
  html = html.replace(/&gt;=/g,'\u2265');
  html = html.replace(/&lt;=/g,'\u2264');
  html = html.replace(/&lt;&gt;/g,'\u2260');
  
  // Algorithm Trace formatting (Desk checks)
  if(html.includes('Iteration 1')){
    html = html.replace(/(Iteration \d+:.*?)(?=\n|$)/g, '<div style="font-family:\'JetBrains Mono\',monospace; padding:6px 10px; border-left:3px solid var(--accent); background:rgba(108,99,255,0.05); margin:4px 0">$1</div>');
  }
  
  // Check for flowchart notation
  if(html.match(/\[.+?\].*--&gt;/)){ return formatFlowchartText(html); }
  // Check for structure diagram ASCII art
  if(html.match(/^\s+[\/|\\]{1,4}\s*$/m)){
    const parts = html.split('\n');
    let pre=[], dia=[], post=[], phase=0;
    for(const ln of parts){
      if(phase===0 && (ln.trim().match(/^[\/|\\\s]+$/) || ln.trim().match(/^\w(\s+\w)+$/))){
        phase=1; dia.push(ln);
      } else if(phase===1 && (ln.trim().match(/^[\/|\\\s*o]+$/) || ln.trim().match(/^\w(\s+\w)*\s*[o*]*$/) || ln.trim().match(/^[\/|\\]/) || ln.trim()==='' && dia.length<8)){
        dia.push(ln);
      } else if(phase===1){ phase=2; post.push(ln); }
      else if(phase===0) pre.push(ln);
      else post.push(ln);
    }
    return pre.join('\n') + '<div class="struct-container">' + dia.join('\n').replace(/([o*])/g,'<span class="struct-marker">$1</span>') + '</div>' + post.join('\n');
  }
  // Standard pseudocode formatting
  const lines = html.split('\n');
  let inCode = false;
  let result = [];
  for(let line of lines){
    const trimmed = line.trim();
    const isCodeLine = /^(BEGIN|END|SET|WHILE|FOR|IF|ELSE|ENDIF|ENDWHILE|NEXT|REPEAT|UNTIL|Display|Get|Input|CASEWHERE|ENDCASE|RETURN|REM|Print|Read|OPEN|CLOSE|Total|Count|Sum|Average|Result|Max|X|Y|A|B|C|N|i|j|Nums|Word|Temp|Low|High|Middle|Found|List)/.test(trimmed)
      && !trimmed.startsWith('Note:');
    if(isCodeLine && !inCode){
      result.push('<div class="q-code-block">');
      inCode = true;
    } else if(!isCodeLine && inCode && trimmed===''){
      result.push('</div>');
      inCode = false;
    }
    result.push(inCode ? highlightPseudo(line) : line);
  }
  if(inCode) result.push('</div>');
  return result.join('\n');
}
function formatOption(text){
  let s = text.replace(/\\n/g,'\n').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  s = s.replace(/&gt;=/g,'\u2265').replace(/&lt;=/g,'\u2264').replace(/&lt;&gt;/g,'\u2260');
  return s;
}
function hasCodeContent(text){
  return /\b(BEGIN|END|IF|THEN|ELSE|ENDIF|WHILE|ENDWHILE|FOR|NEXT|REPEAT|UNTIL|DISPLAY|INPUT)\b/.test(text);
}

/* ===== SCREEN MANAGEMENT ===== */
function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById('screen-'+id).classList.add('active');
  window.scrollTo(0,0);
}

function updateHomeStats(){
  document.getElementById('homeScore').textContent = state.totalScore;
  document.getElementById('homeTotalQ').textContent = state.totalAnswered;
  const acc = state.totalAnswered>0 ? Math.round(state.totalCorrect/state.totalAnswered*100)+'%' : '—';
  document.getElementById('homeAccuracy').textContent = acc;
  document.getElementById('homeBestStreak').textContent = state.bestStreak;
  const cats = getAllMCQCategories();
  let done = 0;
  for(let c in cats){
    const cs = state.categories[c];
    if(cs && cs.correct >= cats[c].count) done++;
  }
  document.getElementById('homeCatsComplete').textContent = done;
}

function goHome(){
  updateHomeStats();
  showScreen('home');
}

/* ===== TOPIC SELECT ===== */
function showTopics(){
  document.getElementById('topicScore').textContent = state.totalScore;
  const cats = getAllMCQCategories();
  const grid = document.getElementById('topicGrid');
  grid.innerHTML = '';
  
  // Sort categories: ones with questions first
  const sorted = Object.entries(cats).sort((a,b)=>b[1].count-a[1].count);
  
  for(const [cat, info] of sorted){
    const meta = CAT_LABELS[cat] || {name:cat.replace(/_/g,' '), icon:'📝'};
    const cs = state.categories[cat] || {answered:0, correct:0};
    const pct = info.count>0 ? Math.round(cs.correct/info.count*100) : 0;
    
    const card = document.createElement('div');
    card.className = 'topic-card';
    card.innerHTML = `
      <div class="cat-name">${meta.icon} ${meta.name}</div>
      <div class="cat-count">${info.count} questions · ${pct}% mastered</div>
      <div class="cat-bar"><div class="cat-bar-fill" style="width:${pct}%"></div></div>
      <div class="diff-dots">
        ${[1,2,3].map(d=>`<div class="diff-dot ${d<=info.maxDiff?'active':''}"></div>`).join('')}
      </div>
    `;
    card.onclick = () => startQuiz(cat);
    grid.appendChild(card);
  }
  showScreen('topics');
}

/* ===== QUIZ ENGINE ===== */
function startQuiz(category){
  const questions = shuffle(getMCQQuestions(category));
  if(!questions.length) return;
  
  currentQuiz = {
    category,
    questions,
    index: 0,
    score: 0,
    correct: 0,
    streak: 0,
    maxStreak: 0,
    hintLevel: 0,
    answered: false
  };
  
  const meta = CAT_LABELS[category] || {name:category.replace(/_/g,' ')};
  document.getElementById('quizCatName').textContent = meta.name || category;
  document.getElementById('streakCount').textContent = '0';
  document.getElementById('quizScore').textContent = '0';
  
  showScreen('quiz');
  renderQuestion();
}

function renderQuestion(){
  const q = currentQuiz.questions[currentQuiz.index];
  const total = currentQuiz.questions.length;
  const idx = currentQuiz.index;
  
  // Progress
  document.getElementById('quizProgressFill').style.width = ((idx+1)/total*100)+'%';
  document.getElementById('quizProgressText').textContent = `${idx+1}/${total}`;
  
  // Reset hint state for new question
  currentQuiz.hintLevel = 0;
  currentQuiz.answered = false;
  
  const area = document.getElementById('questionArea');
  const diffDots = [1,2,3].map(d=>`<span class="dot ${d<=q.difficulty?'on':''}"></span>`).join('');
  const meta = CAT_LABELS[q.category] || {name:q.category};
  
  let optionsHtml = q.options.map((opt, i) => {
    const letter = String.fromCharCode(65+i);
    const cleanOpt = formatOption(opt.replace(/^[A-D]\.\s*/,''));
    const codeClass = hasCodeContent(opt) ? ' has-code' : '';
    return `<button class="option-btn${codeClass}" data-letter="${letter}" onclick="selectAnswer('${letter}',this)">
      <span class="opt-letter">${letter}</span>
      <span>${cleanOpt}</span>
    </button>`;
  }).join('');
  
  const hasDiagram = q.diagramData && q.diagramData !== 'NONE' && !q.diagramData.startsWith('FLOWCHART_OPTIONS:');
  const diagHtml = hasDiagram ? '<div class="diagram-container" id="diagramArea"></div>' : '';
  
  area.innerHTML = `
    <div class="question-card">
      <div class="q-category">${meta.name} <span class="q-difficulty">${diffDots}</span></div>
      <div class="q-text">${formatQuestion(q.question)}</div>
      ${diagHtml}
    </div>
    <div class="options-grid" id="optionsGrid">${optionsHtml}</div>
    <div class="hint-row">
      <button class="hint-btn" id="hintBtn" onclick="showHint()">💡 Hint</button>
      <span class="hint-cost" id="hintCost">Using hints reduces points</span>
    </div>
    <div id="hintArea"></div>
    <div id="feedbackArea"></div>
  `;
  
  if(hasDiagram) renderMermaidDiagram(q.diagramData, 'diagramArea');
}

function selectAnswer(letter, btn){
  if(currentQuiz.answered) return;
  currentQuiz.answered = true;
  
  const q = currentQuiz.questions[currentQuiz.index];
  const correct = q.correctAnswer.trim();
  const isCorrect = letter === correct;
  
  // Lock all options
  document.querySelectorAll('.option-btn').forEach(b => {
    b.classList.add('locked');
    const l = b.dataset.letter;
    if(l === correct) b.classList.add('correct');
    if(l === letter && !isCorrect) b.classList.add('wrong');
  });
  
  // Calculate points
  let basePoints = 10;
  const hintPenalty = [0, 3, 6, 8][currentQuiz.hintLevel] || 8;
  let points = Math.max(2, basePoints - hintPenalty);
  
  // Streak multiplier
  let multiplier = 1;
  if(currentQuiz.streak >= 6) multiplier = 3;
  else if(currentQuiz.streak >= 3) multiplier = 2;
  
  if(isCorrect){
    points *= multiplier;
    currentQuiz.score += points;
    currentQuiz.correct++;
    currentQuiz.streak++;
    currentQuiz.maxStreak = Math.max(currentQuiz.maxStreak, currentQuiz.streak);
    state.totalCorrect++;
  } else {
    points = 0;
    currentQuiz.streak = 0;
  }
  
  state.totalAnswered++;
  state.totalScore += points;
  state.bestStreak = Math.max(state.bestStreak, currentQuiz.maxStreak);
  
  // Update category progress
  if(!state.categories[currentQuiz.category]){
    state.categories[currentQuiz.category] = {answered:0, correct:0, bestStreak:0};
  }
  state.categories[currentQuiz.category].answered++;
  if(isCorrect) state.categories[currentQuiz.category].correct++;
  state.categories[currentQuiz.category].bestStreak = Math.max(
    state.categories[currentQuiz.category].bestStreak, currentQuiz.maxStreak
  );
  
  saveProgress();
  
  // Update UI
  document.getElementById('streakCount').textContent = currentQuiz.streak;
  document.getElementById('quizScore').textContent = currentQuiz.score;
  
  // Hide hint button
  document.getElementById('hintBtn').style.display = 'none';
  document.getElementById('hintCost').style.display = 'none';
  
  // Show feedback
  const fb = document.getElementById('feedbackArea');
  const isLast = currentQuiz.index >= currentQuiz.questions.length - 1;
  const nextLabel = isLast ? '📊 See Results' : 'Next Question →';
  const nextAction = isLast ? 'showResults()' : 'nextQuestion()';
  
  fb.innerHTML = `
    <div class="feedback-panel ${isCorrect?'correct-fb':'wrong-fb'}">
      <h4 class="${isCorrect?'correct-h':'wrong-h'}">${isCorrect ? '✅ Correct!' + (multiplier>1?' (x'+multiplier+' streak bonus!)':'') + ' +'+points+' pts' : '❌ Incorrect'}</h4>
      <div style="font-size:0.95em; line-height:1.6; margin-top:12px">${formatQuestion(q.explanation)}</div>
    </div>
    <button class="next-btn" onclick="${nextAction}">${nextLabel}</button>
  `;
}

function nextQuestion(){
  currentQuiz.index++;
  renderQuestion();
  window.scrollTo(0,0);
}

function showHint(){
  if(currentQuiz.answered || currentQuiz.hintLevel >= 3) return;
  currentQuiz.hintLevel++;
  
  const q = currentQuiz.questions[currentQuiz.index];
  const hints = generateHints(q);
  const hint = hints[currentQuiz.hintLevel - 1] || "Review the question carefully.";
  
  const area = document.getElementById('hintArea');
  area.innerHTML = `<div class="hint-panel">💡 <strong>Hint ${currentQuiz.hintLevel}/3:</strong> ${hint}</div>`;
  
  const costs = ['−3 pts', '−6 pts', 'Max penalty'];
  document.getElementById('hintCost').textContent = costs[currentQuiz.hintLevel-1] || '';
  
  if(currentQuiz.hintLevel >= 3){
    document.getElementById('hintBtn').disabled = true;
  }
}

function generateHints(q){
  const exp = q.explanation;
  // Level 1: category-based nudge
  const nudges = {
    FLOWCHART_MATCH: "Think about whether the condition is checked BEFORE or AFTER the process runs.",
    STRUCTURE_DIAGRAM: "Remember: 'o' means conditional, '*' means iteration. Read the diagram left to right.",
    ALGORITHM_TRACE: "Try tracing through the algorithm step by step. Write down each variable's value.",
    EQUIVALENT_ALGORITHM: "Focus on what the algorithm OUTPUTS, not how it looks. Two different structures can produce identical results.",
    SUBROUTINE_PARAMS: "Parameters are matched by POSITION, not by name.",
    SORT_ALGORITHMS: "Compare the original and sorted arrays. Which elements changed position?",
    DATA_STRUCTURES: "Think about what TYPE of data needs to be stored and how it's organised.",
    ERROR_TYPES: "Does the program crash, produce wrong results, or fail to compile?",
    VARIABLE_SCOPE: "Global variables can be changed from anywhere. Local variables only exist inside their subroutine.",
    COMPILATION: "The compilation process has a specific order: tokens first, then grammar, then code.",
  };
  
  // Level 2: eliminate wrong answers
  const correct = q.correctAnswer.trim();
  const letters = ['A','B','C','D'];
  const wrong = letters.filter(l => l !== correct);
  const eliminate = wrong[Math.floor(Math.random()*wrong.length)];
  
  // Level 3: first sentence of explanation
  const firstSentence = exp.split(/[.!]\s/)[0] + '.';
  
  return [
    nudges[q.category] || "Look at the key concepts in the question carefully.",
    `You can eliminate option ${eliminate} — it doesn't match the pattern described.`,
    firstSentence
  ];
}

function exitQuiz(){
  showTopics();
}

/* ===== RESULTS ===== */
function showResults(){
  const q = currentQuiz;
  const pct = q.questions.length>0 ? Math.round(q.correct/q.questions.length*100) : 0;
  const meta = CAT_LABELS[q.category] || {name:q.category};
  
  document.getElementById('resultsArea').innerHTML = `
    <div style="font-size:3rem;margin-bottom:16px">${pct>=80?'🏆':pct>=60?'⭐':'💪'}</div>
    <div class="results-score">${pct}%</div>
    <div class="results-label">${meta.name}</div>
    <div class="results-stats">
      <div class="r-stat"><div class="r-val">${q.correct}/${q.questions.length}</div><div class="r-lbl">Correct</div></div>
      <div class="r-stat"><div class="r-val">${q.score}</div><div class="r-lbl">Points Earned</div></div>
      <div class="r-stat"><div class="r-val">${q.maxStreak}</div><div class="r-lbl">Best Streak</div></div>
    </div>
    <div class="results-btns">
      <button class="home-btn secondary" onclick="startQuiz('${q.category}')">🔄 Retry</button>
      <button class="home-btn primary" onclick="showTopics()">📚 More Topics</button>
    </div>
  `;
  showScreen('results');
}

/* ===== DIAGNOSTIC ===== */
function startDiagnostic(){
  // Pick one MCQ from 6 key categories
  const diagCats = ['FLOWCHART_MATCH','ALGORITHM_TRACE','SORT_ALGORITHMS','SUBROUTINE_PARAMS','DATA_STRUCTURES','ERROR_TYPES'];
  let questions = [];
  for(const cat of diagCats){
    const pool = getMCQQuestions(cat);
    if(pool.length > 0){
      questions.push(shuffle(pool)[0]);
    }
  }
  if(questions.length === 0) return;
  
  currentQuiz = {
    category: 'DIAGNOSTIC',
    questions,
    index: 0,
    score: 0,
    correct: 0,
    streak: 0,
    maxStreak: 0,
    hintLevel: 0,
    answered: false,
    isDiagnostic: true,
    diagResults: []
  };
  
  document.getElementById('quizCatName').textContent = '⚡ Quick Diagnostic';
  document.getElementById('streakCount').textContent = '0';
  document.getElementById('quizScore').textContent = '0';
  
  showScreen('quiz');
  renderQuestion();
}

// Override showResults for diagnostic
const _origShowResults = showResults;
showResults = function(){
  if(!currentQuiz.isDiagnostic) return _origShowResults();
  
  // Build diagnostic results
  let html = `
    <div style="font-size:2.5rem;margin-bottom:12px">📋</div>
    <h2 style="font-size:1.6rem;font-weight:800;margin-bottom:8px">Diagnostic Results</h2>
    <p style="color:var(--text-dim);margin-bottom:32px">Here's how you did across key topics:</p>
  `;
  
  // We need to track which questions were correct
  // We'll reconstruct from the quiz
  const qs = currentQuiz.questions;
  let recItems = '';
  let passCount = 0;
  
  for(let i=0; i<qs.length; i++){
    const q = qs[i];
    const meta = CAT_LABELS[q.category] || {name:q.category};
    const wasCorrect = currentQuiz.diagResults && currentQuiz.diagResults[i];
    if(wasCorrect) passCount++;
    recItems += `
      <div class="diag-item">
        <span class="diag-icon">${wasCorrect ? '🟢' : '🔴'}</span>
        <span class="diag-cat">${meta.icon} ${meta.name}</span>
        <span class="diag-verdict ${wasCorrect?'pass':'fail'}">${wasCorrect?'Strong':'Practice needed'}</span>
      </div>
    `;
  }
  
  html += `<div class="diag-results" style="padding:0">${recItems}</div>`;
  html += `
    <div style="margin-top:32px">
      <button class="home-btn primary" onclick="showTopics()" style="margin:0 auto">📚 Start Practising</button>
    </div>
  `;
  
  document.getElementById('resultsArea').innerHTML = html;
  showScreen('results');
};

// Patch selectAnswer for diagnostic tracking
const _origSelectAnswer = selectAnswer;
selectAnswer = function(letter, btn){
  if(currentQuiz.isDiagnostic && !currentQuiz.diagResults) currentQuiz.diagResults = [];
  
  // Track before calling original
  if(currentQuiz.isDiagnostic && !currentQuiz.answered){
    const q = currentQuiz.questions[currentQuiz.index];
    currentQuiz.diagResults[currentQuiz.index] = (letter === q.correctAnswer.trim());
  }
  
  _origSelectAnswer(letter, btn);
};

/* ===== INIT ===== */
mermaid.initialize({startOnLoad:false, theme:'dark', themeVariables:{primaryColor:'#6C63FF',primaryTextColor:'#E8E8F4',primaryBorderColor:'#252540',lineColor:'#555570',secondaryColor:'#1c1c35',tertiaryColor:'#161628',background:'#0d1117',mainBkg:'#161628',nodeBorder:'#6C63FF',clusterBkg:'#111120',titleColor:'#E8E8F4',edgeLabelBackground:'#161628'}});
updateHomeStats();
</script>
</body>
</html>
'''

open(r"c:\Users\rfard\Documents\Coding game\index.html", "w", encoding="utf-8").write(html)
print(f"Built index.html ({len(html)} bytes)")
