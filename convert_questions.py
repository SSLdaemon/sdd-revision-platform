"""
Manually parse the question library to handle pipe chars inside content.
Strategy: Each question starts with an ID like FC001 | ... at column 0.
We split only on ' | ' (space-pipe-space) and limit to 11 fields.
For questions that still break, we hardcode fixes.
"""
import json, re

raw = open(r"c:\Users\rfard\OneDrive\Documents\Lessons\NSW ICT-20260311T121637Z-3-001\NSW ICT\sdd_question_library.txt", encoding="utf-8").read()

# Find all question lines - they start with an ID pattern at line start
lines = raw.split('\n')
question_lines = []
current = None
for line in lines:
    stripped = line.strip()
    if not stripped or stripped.startswith('#'):
        if current:
            question_lines.append(current)
            current = None
        continue
    # Check if this line starts a new question (ID pattern)
    if re.match(r'^[A-Z]{2}\d{3}\s*\|', stripped):
        if current:
            question_lines.append(current)
        current = stripped
    elif current:
        current += '\n' + stripped

if current:
    question_lines.append(current)

print(f"Found {len(question_lines)} raw question lines")

# Now parse each. We need exactly 11 fields.
# The trick is some fields contain | chars (especially EBNF questions).
# We'll split carefully: first 6 fields are simple, then we need smarter parsing.
questions = []
broken_ids = []

for qline in question_lines:
    # Split on ' | ' 
    parts = [p.strip() for p in qline.split(' | ')]
    
    if len(parts) >= 11:
        # Take first 6 fields, then rejoin middle parts for question text etc.
        qid = parts[0]
        cat = parts[1]
        subcat = parts[2]
        marks = int(parts[3])
        qtype = parts[4]
        diff = int(parts[5])
        
        # For questions with exactly 11 parts, direct assignment
        if len(parts) == 11:
            question_text = parts[6].replace('\\n', '\n')
            options_raw = parts[7]
            correct = parts[8]
            explanation = parts[9].replace('\\n', '\n')
            diagram = parts[10]
        else:
            # Too many parts - merge extras into the right fields
            # The last part is always diagramData, second-to-last is explanation,
            # third-to-last is correctAnswer (usually single char)
            diagram = parts[-1]
            explanation = parts[-2].replace('\\n', '\n')
            correct = parts[-3]
            options_raw = parts[-4]
            # Everything between index 6 and -4 is part of the question
            question_text = ' | '.join(parts[6:-4]).replace('\\n', '\n')
        
        # Parse options - split on '; ' for MCQ choices  
        if options_raw.startswith('A.') or options_raw.startswith('A '):
            options = [o.strip() for o in options_raw.split('; ')]
        else:
            options = [o.strip() for o in options_raw.split(';')]
        
        q = {
            "id": qid,
            "category": cat,
            "subcategory": subcat,
            "marks": marks,
            "type": qtype,
            "difficulty": diff,
            "question": question_text,
            "options": options,
            "correctAnswer": correct,
            "explanation": explanation,
            "diagramData": diagram
        }
        questions.append(q)
    else:
        broken_ids.append(parts[0] if parts else "???")

print(f"Parsed {len(questions)} questions successfully")
if broken_ids:
    print(f"Broken: {broken_ids}")

# Filter to only questions that have proper MCQ-style options (4 choices with A/B/C/D)
mcq_ready = []
for q in questions:
    has_abcd = len(q['options']) >= 4 and q['options'][0].startswith('A')
    if has_abcd:
        mcq_ready.append(q)

print(f"MCQ-ready questions: {len(mcq_ready)}")

# Print categories
cats = {}
for q in mcq_ready:
    cats.setdefault(q['category'], 0)
    cats[q['category']] += 1
for c, n in sorted(cats.items()):
    print(f"  {c}: {n}")

js = "const QUESTIONS = " + json.dumps(questions, indent=2, ensure_ascii=False) + ";\n"
open(r"c:\Users\rfard\Documents\Coding game\questions.js", "w", encoding="utf-8").write(js)
print(f"\nWrote {len(questions)} questions to questions.js")
