const QUESTIONS = [
  {
    "id": "FC001",
    "category": "FLOWCHART_MATCH",
    "subcategory": "LOOP_IDENTIFICATION",
    "marks": 1,
    "type": "MCQ",
    "difficulty": 1,
    "question": "Consider the following flowchart fragment:\n\n[START] --> [Set Counter = 1] --> [DECISION: Counter <= 10?]\n  YES --> [Process] --> [Counter = Counter + 1] --> [back to DECISION]\n  NO --> [END]\n\nWhich set of pseudocode keywords matches this flowchart?",
    "options": [
      "A. FOR ... NEXT",
      "B. WHILE ... ENDWHILE",
      "C. REPEAT ... UNTIL",
      "D. IF ... THEN ... ENDIF"
    ],
    "correctAnswer": "B",
    "explanation": "The flowchart shows a pre-test loop: the condition (Counter <= 10) is checked BEFORE the process block executes. This matches WHILE ... ENDWHILE, which is a pre-test loop. FOR ... NEXT is also pre-test but uses an automatic counter; the flowchart shows manual counter management.",
    "diagramData": "FLOWCHART:node_start-->node_set(Counter=1)-->node_decision(Counter<=10)-->YES:node_process-->node_increment(Counter=Counter+1)-->node_decision;NO:node_end"
  },
  {
    "id": "FC002",
    "category": "FLOWCHART_MATCH",
    "subcategory": "SELECTION_IDENTIFICATION",
    "marks": 1,
    "type": "MCQ",
    "difficulty": 1,
    "question": "Consider the following flowchart fragment:\n\n[DECISION: Score >= 50?]\n  YES --> [Display \"Pass\"]\n  NO --> [Display \"Fail\"]\nBoth paths --> [END]\n\nWhich set of pseudocode keywords matches this flowchart?",
    "options": [
      "A. FOR ... NEXT",
      "B. WHILE ... ENDWHILE",
      "C. CASEWHERE ... ENDCASE",
      "D. IF ... THEN ... ELSE ... ENDIF"
    ],
    "correctAnswer": "D",
    "explanation": "The flowchart shows a single binary decision with two branches (YES/NO), each leading to a different action. This is a simple IF ... THEN ... ELSE ... ENDIF selection structure. CASEWHERE would require multiple distinct value checks, not a single condition.",
    "diagramData": "FLOWCHART:node_decision(Score>=50)-->YES:node_display(Pass);NO:node_display(Fail)-->node_end"
  },
  {
    "id": "FC003",
    "category": "FLOWCHART_MATCH",
    "subcategory": "POST_TEST_LOOP",
    "marks": 1,
    "type": "MCQ",
    "difficulty": 1,
    "question": "Consider the following flowchart fragment:\n\n[START] --> [Get Password] --> [DECISION: Password = \"secret\"?]\n  YES --> [END]\n  NO --> [back to Get Password]\n\nWhich set of pseudocode keywords matches this flowchart?",
    "options": [
      "A. WHILE ... ENDWHILE",
      "B. FOR ... NEXT",
      "C. REPEAT ... UNTIL",
      "D. IF ... THEN ... ENDIF"
    ],
    "correctAnswer": "C",
    "explanation": "The flowchart shows a post-test loop: the process (Get Password) executes BEFORE the condition is checked. The loop continues until the condition is TRUE. This matches REPEAT ... UNTIL, which executes the body at least once before testing the exit condition.",
    "diagramData": "FLOWCHART:node_start-->node_get(Password)-->node_decision(Password=secret)-->YES:node_end;NO:node_get(Password)"
  },
  {
    "id": "FC004",
    "category": "FLOWCHART_MATCH",
    "subcategory": "NESTED_SELECTION",
    "marks": 1,
    "type": "MCQ",
    "difficulty": 2,
    "question": "Consider the following flowchart fragment:\n\n[DECISION: Age >= 18?]\n  NO --> [Display \"Minor\"]\n  YES --> [DECISION: Age >= 65?]\n    YES --> [Display \"Senior\"]\n    NO --> [Display \"Adult\"]\nAll paths --> [Continue]\n\nWhich pseudocode structure matches this flowchart?",
    "options": [
      "A. CASEWHERE Age\\n  18: Display \"Adult\"\\n  65: Display \"Senior\"\\n  OTHERWISE: Display \"Minor\"\\nENDCASE",
      "B. IF Age >= 18 THEN\\n  IF Age >= 65 THEN\\n    Display \"Senior\"\\n  ELSE\\n    Display \"Adult\"\\n  ENDIF\\nELSE\\n  Display \"Minor\"\\nENDIF",
      "C. WHILE Age >= 18\\n  IF Age >= 65 THEN\\n    Display \"Senior\"\\n  ENDIF\\nENDWHILE",
      "D. IF Age >= 65 THEN\\n  Display \"Senior\"\\nELSE\\n  Display \"Adult\"\\nENDIF"
    ],
    "correctAnswer": "B",
    "explanation": "The flowchart shows nested selection: the first decision (Age >= 18) leads to a second decision (Age >= 65) on the YES branch. This is a nested IF structure. Option A (CASEWHERE) tests exact values, not ranges. Option C incorrectly uses a loop. Option D misses the \"Minor\" branch entirely.",
    "diagramData": "FLOWCHART:node_decision(Age>=18)-->NO:node_display(Minor);YES:node_decision2(Age>=65)-->YES:node_display(Senior);NO:node_display(Adult)"
  },
  {
    "id": "FC005",
    "category": "FLOWCHART_MATCH",
    "subcategory": "CASE_STRUCTURE",
    "marks": 1,
    "type": "MCQ",
    "difficulty": 2,
    "question": "Consider the following flowchart fragment:\n\n[Get Grade] --> [DECISION: Grade value?]\n  Grade = \"A\" --> [Display \"Excellent\"]\n  Grade = \"B\" --> [Display \"Good\"]\n  Grade = \"C\" --> [Display \"Fair\"]\n  OTHERWISE --> [Display \"Fail\"]\nAll paths --> [END]\n\nWhich set of pseudocode keywords matches this flowchart?",
    "options": [
      "A. IF ... THEN ... ELSE ... ENDIF",
      "B. WHILE ... ENDWHILE",
      "C. CASEWHERE ... ENDCASE",
      "D. FOR ... NEXT"
    ],
    "correctAnswer": "C",
    "explanation": "The flowchart shows a multi-way branch based on the VALUE of a single variable (Grade). This matches CASEWHERE ... ENDCASE, which selects from multiple discrete values. An IF ... THEN ... ELSE only handles binary (two-way) decisions per level.",
    "diagramData": "FLOWCHART:node_get(Grade)-->node_multi_decision(Grade)-->A:node_display(Excellent);B:node_display(Good);C:node_display(Fair);OTHERWISE:node_display(Fail)-->node_end"
  },
  {
    "id": "FC006",
    "category": "FLOWCHART_MATCH",
    "subcategory": "COUNTED_LOOP",
    "marks": 1,
    "type": "MCQ",
    "difficulty": 1,
    "question": "Consider the following flowchart fragment:\n\n[START] --> [Set i = 1] --> [DECISION: i > 5?]\n  YES --> [END]\n  NO --> [Display i] --> [i = i + 1] --> [back to DECISION]\n\nWhich pseudocode structure BEST matches this flowchart?",
    "options": [
      "A. REPEAT\\n  Display i\\n  i = i + 1\\nUNTIL i > 5",
      "B. FOR i = 1 TO 5\\n  Display i\\nNEXT",
      "C. WHILE i <= 5\\n  Display i\\n  i = i + 1\\nENDWHILE",
      "D. Both B and C correctly match"
    ],
    "correctAnswer": "D",
    "explanation": "Both FOR ... NEXT and WHILE ... ENDWHILE are pre-test loops that check the condition before executing. The flowchart initialises i = 1 and tests i > 5 (equivalent to testing i <= 5 continuing). FOR i = 1 TO 5 does the same implicitly. Both produce identical output: 1 2 3 4 5.",
    "diagramData": "FLOWCHART:node_start-->node_set(i=1)-->node_decision(i>5)-->YES:node_end;NO:node_display(i)-->node_increment(i=i+1)-->node_decision"
  },
  {
    "id": "FC007",
    "category": "FLOWCHART_MATCH",
    "subcategory": "SENTINEL_LOOP",
    "marks": 1,
    "type": "MCQ",
    "difficulty": 2,
    "question": "Consider the following flowchart fragment:\n\n[START] --> [Total = 0] --> [Get Number] --> [DECISION: Number = -1?]\n  YES --> [Display Total] --> [END]\n  NO --> [Total = Total + Number] --> [back to Get Number]\n\nWhich pseudocode fragment matches this flowchart?",
    "options": [
      "A. Total = 0\\nGet Number\\nWHILE Number <> -1\\n  Total = Total + Number\\n  Get Number\\nENDWHILE\\nDisplay Total",
      "B. Total = 0\\nREPEAT\\n  Get Number\\n  Total = Total + Number\\nUNTIL Number = -1\\nDisplay Total",
      "C. Total = 0\\nFOR Number = 1 TO -1\\n  Total = Total + Number\\nNEXT\\nDisplay Total",
      "D. Total = 0\\nGet Number\\nIF Number <> -1 THEN\\n  Total = Total + Number\\nENDIF\\nDisplay Total"
    ],
    "correctAnswer": "A",
    "explanation": "The flowchart shows a sentinel-controlled pre-test loop with a priming read. The first Get Number occurs before the decision. If Number is not -1, it accumulates and gets another number. This is a classic WHILE loop with priming read. Option B would add the sentinel value -1 to Total before checking.",
    "diagramData": "FLOWCHART:node_start-->node_set(Total=0)-->node_get(Number)-->node_decision(Number=-1)-->YES:node_display(Total)-->node_end;NO:node_accumulate(Total=Total+Number)-->node_get(Number)-->node_decision"
  },
  {
    "id": "FC008",
    "category": "FLOWCHART_MATCH",
    "subcategory": "LOOP_AND_SELECTION",
    "marks": 1,
    "type": "MCQ",
    "difficulty": 3,
    "question": "Consider the following flowchart fragment:\n\n[START] --> [Count = 0] --> [Get Value] --> [DECISION: Value >= 0?]\n  NO --> [Display Count] --> [END]\n  YES --> [DECISION: Value MOD 2 = 0?]\n    YES --> [Count = Count + 1]\n    NO --> [skip]\n  Both paths --> [back to Get Value]\n\nWhich pseudocode fragment matches this flowchart?",
    "options": [
      "A. Count = 0\\nGet Value\\nWHILE Value >= 0\\n  IF Value MOD 2 = 0 THEN\\n    Count = Count + 1\\n  ENDIF\\n  Get Value\\nENDWHILE\\nDisplay Count",
      "B. Count = 0\\nREPEAT\\n  Get Value\\n  IF Value MOD 2 = 0 THEN\\n    Count = Count + 1\\n  ENDIF\\nUNTIL Value < 0\\nDisplay Count",
      "C. Count = 0\\nFOR Value = 0 TO 100\\n  IF Value MOD 2 = 0 THEN\\n    Count = Count + 1\\n  ENDIF\\nNEXT\\nDisplay Count",
      "D. Count = 0\\nGet Value\\nWHILE Value MOD 2 = 0\\n  Count = Count + 1\\n  Get Value\\nENDWHILE\\nDisplay Count"
    ],
    "correctAnswer": "A",
    "explanation": "The flowchart has a priming read, then a pre-test loop (WHILE Value >= 0) containing an IF selection checking even numbers. Option B (REPEAT) would process the negative sentinel before exiting. Option C uses a FOR loop which does not match the sentinel-controlled structure. Option D loops on the wrong condition.",
    "diagramData": "FLOWCHART:node_start-->node_set(Count=0)-->node_get(Value)-->node_decision1(Value>=0)-->NO:node_display(Count)-->node_end;YES:node_decision2(ValueMOD2=0)-->YES:node_increment(Count=Count+1);NO:node_skip-->node_get(Value)-->node_decision1"
  },
  {
    "id": "SD001",
    "category": "STRUCTURE_DIAGRAM",
    "subcategory": "SEQUENCE_SELECTION",
    "marks": 1,
    "type": "DIAGRAM_MATCH",
    "difficulty": 2,
    "question": "Refer to the following structure diagram:\n\n        P\n       /|\\\\\n      / | \\\\\n     A  B  C\n         o\n\nNote: 'o' on C indicates a conditional (selection) component.\n\nWhich of the following algorithm fragments corresponds to the diagram?",
    "options": [
      "A. BEGIN P\\n  A\\n  B\\n  IF condition THEN\\n    C\\n  ENDIF\\nEND P",
      "B. BEGIN P\\n  A\\n  IF condition THEN\\n    B\\n  ELSE\\n    C\\n  ENDIF\\nEND P",
      "C. BEGIN P\\n  FOR Counter = 1 TO 5\\n    A\\n    B\\n    C\\n  NEXT\\nEND P",
      "D. BEGIN P\\n  A\\n  C\\n  B\\nEND P"
    ],
    "correctAnswer": "A",
    "explanation": "In a structure diagram, an 'o' symbol on a component indicates it is conditional (selected based on a condition). Components without 'o' are sequential. Reading left to right: A executes, then B executes, then C executes only if a condition is met. This matches option A: A, B, then IF condition THEN C.",
    "diagramData": "STRUCTURE:root(P)-->child_seq(A)-->child_seq(B)-->child_cond(C,o)"
  },
  {
    "id": "SD002",
    "category": "STRUCTURE_DIAGRAM",
    "subcategory": "SEQUENCE_ITERATION",
    "marks": 1,
    "type": "DIAGRAM_MATCH",
    "difficulty": 2,
    "question": "Refer to the following structure diagram:\n\n        Q\n       / \\\\\n      /   \\\\\n     X     Y\n           *\n\nNote: '*' on Y indicates an iterative (repeating) component.\n\nWhich of the following algorithm fragments corresponds to the diagram?",
    "options": [
      "A. BEGIN Q\\n  WHILE condition\\n    X\\n    Y\\n  ENDWHILE\\nEND Q",
      "B. BEGIN Q\\n  X\\n  WHILE condition\\n    Y\\n  ENDWHILE\\nEND Q",
      "C. BEGIN Q\\n  X\\n  Y\\nEND Q",
      "D. BEGIN Q\\n  WHILE condition\\n    X\\n  ENDWHILE\\n  Y\\nEND Q"
    ],
    "correctAnswer": "B",
    "explanation": "In a structure diagram, '*' indicates iteration (loop). Only Y has the iteration marker, meaning Y repeats but X does not. Reading left to right: X executes once (sequence), then Y repeats in a loop. This matches option B. Option A incorrectly puts X inside the loop.",
    "diagramData": "STRUCTURE:root(Q)-->child_seq(X)-->child_iter(Y,*)"
  },
  {
    "id": "SD003",
    "category": "STRUCTURE_DIAGRAM",
    "subcategory": "COMPLEX_MIXED",
    "marks": 1,
    "type": "DIAGRAM_MATCH",
    "difficulty": 3,
    "question": "Refer to the following structure diagram:\n\n            M\n          / | \\\\\n         / | \\\\\n        A   B   C\n            *\n           / \\\\\n          D   E\n              o\n\nNote: '*' on B indicates iteration. 'o' on E indicates selection.\n\nWhich of the following algorithm fragments corresponds to the diagram?",
    "options": [
      "A. BEGIN M\\n  A\\n  WHILE condition1\\n    D\\n    IF condition2 THEN\\n      E\\n    ENDIF\\n  ENDWHILE\\n  C\\nEND M",
      "B. BEGIN M\\n  A\\n  B\\n  FOR i = 1 TO 10\\n    D\\n    E\\n  NEXT\\n  C\\nEND M",
      "C. BEGIN M\\n  A\\n  WHILE condition1\\n    D\\n    E\\n  ENDWHILE\\n  C\\nEND M",
      "D. BEGIN M\\n  FOR i = 1 TO 10\\n    A\\n    D\\n    IF condition2 THEN\\n      E\\n    ENDIF\\n    C\\n  NEXT\\nEND M"
    ],
    "correctAnswer": "A",
    "explanation": "Reading the diagram: A is sequential (runs once first). B has '*' meaning it iterates; B's children are D (sequential within loop) and E (conditional within loop, marked 'o'). C is sequential (runs once after loop). Option A correctly shows: A first, then a loop containing D and conditional E, then C after the loop.",
    "diagramData": "STRUCTURE:root(M)-->child_seq(A)-->child_iter(B,*)-->grandchild_seq(D)-->grandchild_cond(E,o);root-->child_seq(C)"
  },
  {
    "id": "SD004",
    "category": "STRUCTURE_DIAGRAM",
    "subcategory": "ITERATION_WITH_COUNTER",
    "marks": 1,
    "type": "DIAGRAM_MATCH",
    "difficulty": 2,
    "question": "Refer to the following structure diagram:\n\n          R\n         /|\\\\\n        / | \\\\\n       A  B  C\n       *\n\nNote: '*' on A indicates iteration.\n\nWhich of the following algorithm fragments corresponds to the diagram?",
    "options": [
      "A. BEGIN R\\n  A\\n  B\\n  C\\nEND R",
      "B. BEGIN R\\n  WHILE condition\\n    A\\n  ENDWHILE\\n  B\\n  C\\nEND R",
      "C. BEGIN R\\n  WHILE condition\\n    A\\n    B\\n    C\\n  ENDWHILE\\nEND R",
      "D. BEGIN R\\n  B\\n  WHILE condition\\n    A\\n  ENDWHILE\\n  C\\nEND R"
    ],
    "correctAnswer": "B",
    "explanation": "Only A has the iteration marker '*'. Reading left to right: A repeats in a loop, then B and C execute once each in sequence after the loop ends. Option B correctly shows the WHILE loop around only A, followed by sequential B and C.",
    "diagramData": "STRUCTURE:root(R)-->child_iter(A,*)-->child_seq(B)-->child_seq(C)"
  },
  {
    "id": "SD005",
    "category": "STRUCTURE_DIAGRAM",
    "subcategory": "EITHER_OR_SELECTION",
    "marks": 1,
    "type": "DIAGRAM_MATCH",
    "difficulty": 2,
    "question": "Refer to the following structure diagram:\n\n          S\n         / \\\\\n        /   \\\\\n       X     Y\n       o     o\n\nNote: 'o' on both X and Y indicates they are alternatives in a selection.\n\nWhich of the following algorithm fragments corresponds to the diagram?",
    "options": [
      "A. BEGIN S\\n  X\\n  Y\\nEND S",
      "B. BEGIN S\\n  IF condition THEN\\n    X\\n  ENDIF\\n  IF condition THEN\\n    Y\\n  ENDIF\\nEND S",
      "C. BEGIN S\\n  IF condition THEN\\n    X\\n  ELSE\\n    Y\\n  ENDIF\\nEND S",
      "D. BEGIN S\\n  WHILE condition\\n    X\\n    Y\\n  ENDWHILE\\nEND S"
    ],
    "correctAnswer": "C",
    "explanation": "When two sibling components both have 'o' markers, they represent mutually exclusive alternatives in a selection: either X or Y executes, but not both. This is an IF ... THEN ... ELSE pattern. Option A runs both sequentially (wrong). Option B tests two separate conditions.",
    "diagramData": "STRUCTURE:root(S)-->child_cond(X,o)-->child_cond(Y,o)"
  },
  {
    "id": "SD006",
    "category": "STRUCTURE_DIAGRAM",
    "subcategory": "DEEP_NESTING",
    "marks": 1,
    "type": "DIAGRAM_MATCH",
    "difficulty": 3,
    "question": "Refer to the following structure diagram:\n\n              T\n             / \\\\\n            /   \\\\\n           A     B\n                 *\n                / \\\\\n               C   D\n                   o\n                  / \\\\\n                 E   F\n\nNote: '*' on B = iteration. 'o' on D = selection. E and F are children of D.\n\nWhich of the following algorithm fragments corresponds to the diagram?",
    "options": [
      "A. BEGIN T\\n  A\\n  WHILE condition1\\n    C\\n    IF condition2 THEN\\n      E\\n    ELSE\\n      F\\n    ENDIF\\n  ENDWHILE\\nEND T",
      "B. BEGIN T\\n  A\\n  WHILE condition1\\n    C\\n    IF condition2 THEN\\n      E\\n      F\\n    ENDIF\\n  ENDWHILE\\nEND T",
      "C. BEGIN T\\n  WHILE condition1\\n    A\\n    C\\n    IF condition2 THEN\\n      E\\n    ELSE\\n      F\\n    ENDIF\\n  ENDWHILE\\nEND T",
      "D. BEGIN T\\n  A\\n  C\\n  WHILE condition1\\n    IF condition2 THEN\\n      E\\n    ELSE\\n      F\\n    ENDIF\\n  ENDWHILE\\nEND T"
    ],
    "correctAnswer": "A",
    "explanation": "A is sequential (outside loop). B iterates (contains the loop body). Inside B: C is sequential, D is conditional. D has two children E and F as alternatives. So the loop body is: C then IF/ELSE choosing E or F. Option A matches. Option C incorrectly puts A inside the loop. Option D incorrectly puts C outside the loop.",
    "diagramData": "STRUCTURE:root(T)-->child_seq(A)-->child_iter(B,*)-->grandchild_seq(C)-->grandchild_cond(D,o)-->leaf(E)-->leaf(F)"
  },
  {
    "id": "AT001",
    "category": "ALGORITHM_TRACE",
    "subcategory": "WHILE_LOOP",
    "marks": 1,
    "type": "ALGORITHM_TRACE",
    "difficulty": 1,
    "question": "Consider the following algorithm:\n\nBEGIN\n  X = 3\n  Y = 1\n  WHILE Y <= 4\n    X = X + Y\n    Y = Y + 1\n  ENDWHILE\n  Display X\nEND\n\nWhat is the output?",
    "options": [
      "A. 13",
      "B. 10",
      "C. 7",
      "D. 3"
    ],
    "correctAnswer": "A",
    "explanation": "Trace: Initial X=3, Y=1.\nIteration 1: Y=1<=4, X=3+1=4, Y=2.\nIteration 2: Y=2<=4, X=4+2=6, Y=3.\nIteration 3: Y=3<=4, X=6+3=9, Y=4.\nIteration 4: Y=4<=4, X=9+4=13, Y=5.\nY=5>4, loop ends. Display X = 13.",
    "diagramData": "NONE"
  },
  {
    "id": "AT002",
    "category": "ALGORITHM_TRACE",
    "subcategory": "FOR_LOOP_STEP",
    "marks": 1,
    "type": "ALGORITHM_TRACE",
    "difficulty": 2,
    "question": "Consider the following algorithm:\n\nBEGIN\n  Input X\n  FOR Index = 0 TO 10 STEP 3\n    X = X + Index\n  NEXT\n  Input Y\n  X = X - Y\n  Display X\nEND\n\nWhat is the output if the input data is 5 and 8?",
    "options": [
      "A. 15",
      "B. 12",
      "C. 20",
      "D. 23"
    ],
    "correctAnswer": "A",
    "explanation": "X=5 (input). Loop: Index takes values 0, 3, 6, 9.\nIndex=0: X=5+0=5.\nIndex=3: X=5+3=8.\nIndex=6: X=8+6=14.\nIndex=9: X=14+9=23.\nIndex=12>10, loop ends. Y=8 (input). X=23-8=15. Display 15.",
    "diagramData": "NONE"
  },
  {
    "id": "AT003",
    "category": "ALGORITHM_TRACE",
    "subcategory": "NESTED_LOOP",
    "marks": 1,
    "type": "ALGORITHM_TRACE",
    "difficulty": 2,
    "question": "Consider the following algorithm:\n\nBEGIN\n  Total = 0\n  FOR i = 1 TO 3\n    FOR j = 1 TO 2\n      Total = Total + i\n    NEXT\n  NEXT\n  Display Total\nEND\n\nWhat is the output?",
    "options": [
      "A. 6",
      "B. 12",
      "C. 9",
      "D. 18"
    ],
    "correctAnswer": "B",
    "explanation": "For each value of i, the inner loop runs 2 times adding i each time.\ni=1: Total = 0+1+1 = 2.\ni=2: Total = 2+2+2 = 6.\ni=3: Total = 6+3+3 = 12.\nDisplay 12.",
    "diagramData": "NONE"
  },
  {
    "id": "AT004",
    "category": "ALGORITHM_TRACE",
    "subcategory": "CONDITIONAL_INPUT",
    "marks": 1,
    "type": "ALGORITHM_TRACE",
    "difficulty": 2,
    "question": "Consider the following algorithm:\n\nBEGIN\n  Get A, B, C\n  WHILE A < B AND B < C\n    Get A, B, C\n  ENDWHILE\n  Display A, B, C\nEND\n\nWhat is the output if the input data is 2, 5, 8, 7, 3, 9?",
    "options": [
      "A. 2 5 8",
      "B. 7 3 9",
      "C. 5 8 7",
      "D. 2 5 8 7 3 9"
    ],
    "correctAnswer": "B",
    "explanation": "First read: A=2, B=5, C=8. Test: 2<5 AND 5<8 = TRUE, so loop.\nSecond read: A=7, B=3, C=9. Test: 7<3 = FALSE, so 7<3 AND 3<9 = FALSE. Loop ends.\nDisplay A=7, B=3, C=9.",
    "diagramData": "NONE"
  },
  {
    "id": "AT005",
    "category": "ALGORITHM_TRACE",
    "subcategory": "ARRAY_PROCESSING",
    "marks": 1,
    "type": "ALGORITHM_TRACE",
    "difficulty": 2,
    "question": "Consider the following algorithm:\n\nBEGIN\n  Nums(1) = 4\n  Nums(2) = 7\n  Nums(3) = 2\n  Nums(4) = 9\n  Max = Nums(1)\n  FOR i = 2 TO 4\n    IF Nums(i) > Max THEN\n      Max = Nums(i)\n    ENDIF\n  NEXT\n  Display Max\nEND\n\nWhat is the output?",
    "options": [
      "A. 4",
      "B. 7",
      "C. 2",
      "D. 9"
    ],
    "correctAnswer": "D",
    "explanation": "Max starts at 4. i=2: Nums(2)=7>4, Max=7. i=3: Nums(3)=2<7, no change. i=4: Nums(4)=9>7, Max=9. Display 9. This is a standard find-maximum algorithm.",
    "diagramData": "NONE"
  },
  {
    "id": "AT006",
    "category": "ALGORITHM_TRACE",
    "subcategory": "STRING_PROCESSING",
    "marks": 1,
    "type": "ALGORITHM_TRACE",
    "difficulty": 3,
    "question": "Consider the following algorithm:\n\nBEGIN\n  Word = \"COMPUTER\"\n  Result = \"\"\n  FOR i = Length(Word) TO 1 STEP -1\n    Result = Result + Mid(Word, i, 1)\n  NEXT\n  Display Result\nEND\n\nNote: Mid(string, position, count) returns a substring.\nLength(string) returns the number of characters.\n\nWhat is the output?",
    "options": [
      "A. COMPUTER",
      "B. RETUPMOC",
      "C. CMPTR",
      "D. COMPU"
    ],
    "correctAnswer": "B",
    "explanation": "The loop starts from the last character (position 8) and works backwards to position 1, appending each character to Result. This reverses the string. \"COMPUTER\" reversed is \"RETUPMOC\".",
    "diagramData": "NONE"
  },
  {
    "id": "AT007",
    "category": "ALGORITHM_TRACE",
    "subcategory": "ACCUMULATOR_WITH_CONDITION",
    "marks": 1,
    "type": "ALGORITHM_TRACE",
    "difficulty": 2,
    "question": "Consider the following algorithm:\n\nBEGIN\n  Sum = 0\n  Count = 0\n  FOR i = 1 TO 6\n    Get Number\n    IF Number > 0 THEN\n      Sum = Sum + Number\n      Count = Count + 1\n    ENDIF\n  NEXT\n  IF Count > 0 THEN\n    Average = Sum / Count\n    Display Average\n  ELSE\n    Display \"No positive numbers\"\n  ENDIF\nEND\n\nWhat is the output if the input data is 3, -2, 7, 0, -5, 10?",
    "options": [
      "A. 2.17",
      "B. 6.67",
      "C. 5.0",
      "D. 20"
    ],
    "correctAnswer": "B",
    "explanation": "Only positive numbers (>0): 3, 7, 10. Sum = 20, Count = 3. Note: 0 is NOT positive and -2, -5 are negative. Average = 20/3 = 6.67 (rounded to 2dp).",
    "diagramData": "NONE"
  },
  {
    "id": "AT008",
    "category": "ALGORITHM_TRACE",
    "subcategory": "REPEAT_UNTIL",
    "marks": 1,
    "type": "ALGORITHM_TRACE",
    "difficulty": 1,
    "question": "Consider the following algorithm:\n\nBEGIN\n  X = 1\n  REPEAT\n    X = X * 2\n  UNTIL X > 20\n  Display X\nEND\n\nWhat is the output?",
    "options": [
      "A. 16",
      "B. 20",
      "C. 32",
      "D. 24"
    ],
    "correctAnswer": "C",
    "explanation": "REPEAT executes body THEN checks condition.\nX=1: X=1*2=2. 2>20? No.\nX=2: X=2*2=4. 4>20? No.\nX=4: X=4*2=8. 8>20? No.\nX=8: X=8*2=16. 16>20? No.\nX=16: X=16*2=32. 32>20? Yes. Loop ends.\nDisplay 32.",
    "diagramData": "NONE"
  },
  {
    "id": "EA001",
    "category": "EQUIVALENT_ALGORITHM",
    "subcategory": "WHILE_TO_REPEAT",
    "marks": 1,
    "type": "MCQ",
    "difficulty": 2,
    "question": "Consider the following algorithm:\n\nBEGIN\n  Get N\n  WHILE N > 0\n    Display N\n    N = N - 1\n  ENDWHILE\nEND\n\nIf N is guaranteed to be a positive integer, which of the following produces the same output?",
    "options": [
      "A. BEGIN\\n  Get N\\n  REPEAT\\n    Display N\\n    N = N - 1\\n  UNTIL N <= 0\\nEND",
      "B. BEGIN\\n  Get N\\n  REPEAT\\n    N = N - 1\\n    Display N\\n  UNTIL N <= 0\\nEND",
      "C. BEGIN\\n  Get N\\n  FOR i = N TO 1 STEP -1\\n    Display N\\n  NEXT\\nEND",
      "D. BEGIN\\n  Get N\\n  FOR i = 0 TO N\\n    Display i\\n  NEXT\\nEND"
    ],
    "correctAnswer": "A",
    "explanation": "Option A: REPEAT loop mirrors the WHILE body exactly (Display N, then decrement). Since N is guaranteed positive, the REPEAT executes at least once just like WHILE would. The exit condition N <= 0 is the inverse of the WHILE condition N > 0. Option B decrements before displaying, producing N-1 first. Option C displays N every iteration (never changes N inside the loop for display). Option D counts upward.",
    "diagramData": "NONE"
  },
  {
    "id": "EA002",
    "category": "EQUIVALENT_ALGORITHM",
    "subcategory": "FLOWCHART_TO_CODE",
    "marks": 1,
    "type": "MCQ",
    "difficulty": 2,
    "question": "Consider the following algorithm:\n\nBEGIN\n  REPEAT\n    Get X\n  UNTIL X >= 0\n  Display X\nEND\n\nWhich flowchart correctly represents this algorithm?",
    "options": [
      "A. [Start]-->[Get X]-->[X >= 0?]-->Yes:[Display X]-->[End]",
      "No:[back to Get X]",
      "B. [Start]-->[X >= 0?]-->Yes:[Display X]-->[End]",
      "No:[Get X]-->[back to decision]",
      "C. [Start]-->[Get X]-->[X < 0?]-->Yes:[Display X]-->[End]",
      "No:[back to Get X]",
      "D. [Start]-->[Get X]-->[Display X]-->[X >= 0?]-->Yes:[End]",
      "No:[back to Get X]"
    ],
    "correctAnswer": "A",
    "explanation": "A REPEAT ... UNTIL loop executes the body first, then tests the condition. In a flowchart, the process (Get X) must come BEFORE the decision diamond. The loop exits when the condition is TRUE (X >= 0). Option A correctly shows: Get X first, then test X >= 0, exit on Yes, loop back on No. Option B tests before getting input (pre-test).",
    "diagramData": "FLOWCHART_OPTIONS:A:process_first_then_test;B:test_first;C:wrong_condition;D:display_before_test"
  },
  {
    "id": "EA003",
    "category": "EQUIVALENT_ALGORITHM",
    "subcategory": "LOOP_CONVERSION",
    "marks": 1,
    "type": "MCQ",
    "difficulty": 3,
    "question": "The following algorithm counts even numbers from 2 to 20:\n\nBEGIN\n  Count = 0\n  N = 2\n  WHILE N <= 20\n    Count = Count + 1\n    N = N + 2\n  ENDWHILE\n  Display Count\nEND\n\nWhich of the following produces the SAME output?",
    "options": [
      "A. BEGIN\\n  Count = 0\\n  FOR N = 2 TO 20 STEP 2\\n    Count = Count + 1\\n  NEXT\\n  Display Count\\nEND",
      "B. BEGIN\\n  Count = 0\\n  FOR N = 1 TO 20\\n    IF N MOD 2 = 0 THEN\\n      Count = Count + 1\\n    ENDIF\\n  NEXT\\n  Display Count\\nEND",
      "C. BEGIN\\n  Count = 20 / 2\\n  Display Count\\nEND",
      "D. All of the above"
    ],
    "correctAnswer": "D",
    "explanation": "All three produce Count = 10. Option A steps by 2 from 2 to 20 (10 iterations). Option B checks each number 1-20 for evenness (10 even numbers found). Option C directly calculates 20/2 = 10. All display 10.",
    "diagramData": "NONE"
  },
  {
    "id": "SP001",
    "category": "SUBROUTINE_PARAMS",
    "subcategory": "PARAMETER_MATCHING",
    "marks": 1,
    "type": "MCQ",
    "difficulty": 2,
    "question": "The following algorithm calculates the area of a rectangle.\n\nBEGIN Main\n  Display \"Enter length\"\n  Get L\n  Display \"Enter width\"\n  Get W\n  REM **** Place subroutine call here ****\n  Display \"The area is \", A\nEND Main\n\nBEGIN CalcArea(Result, Side1, Side2)\n  Result = Side1 * Side2\nEND CalcArea\n\nWhich of the following correctly calls the subroutine?",
    "options": [
      "A. CalcArea(L, W, A)",
      "B. CalcArea(A, L, W)",
      "C. CalcArea(Result, Side1, Side2)",
      "D. CalcArea(L, A, W)"
    ],
    "correctAnswer": "B",
    "explanation": "Parameters are matched by POSITION, not by name. The subroutine definition is CalcArea(Result, Side1, Side2) where Result = Side1 * Side2. We need: Result-->A (to store the answer), Side1-->L, Side2-->W. So the call is CalcArea(A, L, W). Option A puts L first (would compute L = W * A). Option C uses formal parameter names (meaningless outside the subroutine).",
    "diagramData": "NONE"
  },
  {
    "id": "SP002",
    "category": "SUBROUTINE_PARAMS",
    "subcategory": "GLOBAL_VS_LOCAL",
    "marks": 1,
    "type": "MCQ",
    "difficulty": 2,
    "question": "Consider the following two programs:\n\nProgram 1:\nBEGIN Prog1\n  X is Global\n  X = 50\n  Change\n  Print X\nEND Prog1\n\nBEGIN Change\n  X = 25\nEND Change\n\nProgram 2:\nBEGIN Prog2\n  X = 50\n  Change\n  Print X\nEND Prog2\n\nBEGIN Change\n  X is Local\n  X = 25\nEND Change\n\nWhat is the output of each program?",
    "options": [
      "A. Program 1: 25, Program 2: 50",
      "B. Program 1: 50, Program 2: 25",
      "C. Program 1: 25, Program 2: 25",
      "D. Program 1: 50, Program 2: 50"
    ],
    "correctAnswer": "A",
    "explanation": "Program 1: X is global, so when Change sets X = 25, it modifies the same global X. Print X outputs 25.\nProgram 2: X in main is 50. Change declares X as local, so X = 25 only affects the local copy inside Change. The main program's X remains 50. Print X outputs 50.",
    "diagramData": "NONE"
  },
  {
    "id": "SP003",
    "category": "SUBROUTINE_PARAMS",
    "subcategory": "RETURN_VALUE",
    "marks": 1,
    "type": "MCQ",
    "difficulty": 2,
    "question": "Consider the following algorithm:\n\nBEGIN Main\n  A = 10\n  B = 3\n  C = Calculate(A, B)\n  Display C\nEND Main\n\nBEGIN Calculate(X, Y)\n  Result = X MOD Y\n  RETURN Result\nEND Calculate\n\nWhat is the output?",
    "options": [
      "A. 3",
      "B. 1",
      "C. 10",
      "D. 0"
    ],
    "correctAnswer": "B",
    "explanation": "The function Calculate receives X=10, Y=3. Result = 10 MOD 3 = 1 (remainder when 10 is divided by 3). RETURN 1. C = 1. Display 1.",
    "diagramData": "NONE"
  },
  {
    "id": "SP004",
    "category": "SUBROUTINE_PARAMS",
    "subcategory": "MULTIPLE_CALLS",
    "marks": 1,
    "type": "ALGORITHM_TRACE",
    "difficulty": 2,
    "question": "Consider the following algorithm:\n\nBEGIN Main\n  A = 10\n  B = 20\n  Swap(A, B)\n  Display A, B\nEND Main\n\nBEGIN Swap(X, Y)\n  Temp = X\n  X = Y\n  Y = Temp\nEND Swap\n\nAssuming parameters are passed by reference, what is the output?",
    "options": [
      "A. 10 20",
      "B. 20 10",
      "C. 10 10",
      "D. 20 20"
    ],
    "correctAnswer": "B",
    "explanation": "Pass by reference: changes to X and Y inside Swap directly modify A and B in Main. Temp=X=A=10. X=Y means A=B=20. Y=Temp means B=10. Display A=20, B=10.",
    "diagramData": "NONE"
  },
  {
    "id": "SP005",
    "category": "SUBROUTINE_PARAMS",
    "subcategory": "PASS_BY_VALUE",
    "marks": 1,
    "type": "MCQ",
    "difficulty": 2,
    "question": "Using the same algorithm as SP004, but assuming parameters are passed by VALUE, what is the output?",
    "options": [
      "A. 10 20",
      "B. 20 10",
      "C. 10 10",
      "D. 20 20"
    ],
    "correctAnswer": "A",
    "explanation": "Pass by value: X and Y are COPIES of A and B. Changes to X and Y inside Swap do NOT affect the originals. A remains 10, B remains 20. Display 10, 20. The swap only happens on the local copies.",
    "diagramData": "NONE"
  },
  {
    "id": "SA001",
    "category": "SORT_ALGORITHMS",
    "subcategory": "FIRST_PASS_ID",
    "marks": 1,
    "type": "MCQ",
    "difficulty": 2,
    "question": "An array contains the following values:\n\nOriginal: [5, 3, 8, 1, 4]\n\nAfter the first pass of a sort, the array is:\n[3, 5, 1, 4, 8]\n\nWhich sort method could have been used?",
    "options": [
      "A. Selection sort only",
      "B. Bubble sort only",
      "C. Insertion sort only",
      "D. Bubble sort or insertion sort"
    ],
    "correctAnswer": "B",
    "explanation": "After one pass of bubble sort (comparing adjacent pairs left to right and swapping), the largest element (8) bubbles to the end. The intermediate swaps produce [3,5,1,4,8]. Selection sort would place the smallest (1) in position 1: [1,3,8,5,4]. Insertion sort would have sorted the first two elements: [3,5,8,1,4]. Only bubble sort matches.",
    "diagramData": "NONE"
  },
  {
    "id": "SA002",
    "category": "SORT_ALGORITHMS",
    "subcategory": "FIRST_PASS_ID",
    "marks": 1,
    "type": "MCQ",
    "difficulty": 2,
    "question": "An array contains the following values:\n\nOriginal: [7, 2, 9, 4, 1, 6]\n\nAfter the first pass of a sort, the array is:\n[1, 2, 9, 4, 7, 6]\n\nWhich sort method was most likely used?",
    "options": [
      "A. Bubble sort",
      "B. Selection sort",
      "C. Insertion sort",
      "D. Quick sort"
    ],
    "correctAnswer": "B",
    "explanation": "Selection sort's first pass finds the minimum value (1) and swaps it with the first element (7). This gives [1, 2, 9, 4, 7, 6]. The rest of the array after position 1 reflects only the single swap of 1 and 7. Bubble sort would have moved 9 to the end. Insertion sort would show a sorted sub-array at the start.",
    "diagramData": "NONE"
  },
  {
    "id": "SA003",
    "category": "SORT_ALGORITHMS",
    "subcategory": "LAST_ELEMENTS_CHANGED",
    "marks": 1,
    "type": "MCQ",
    "difficulty": 3,
    "question": "After the first pass of a sort, only the last two elements of an array have changed value.\n\nOriginal: [3, 5, 8, 12, 15, 9]\nAfter first pass: [3, 5, 8, 12, 9, 15]\n\nWhich list identifies ALL the possible sort methods that could have been used?",
    "options": [
      "A. Bubble sort only",
      "B. Selection sort only",
      "C. Bubble and selection sort",
      "D. Bubble, insertion, and selection sort"
    ],
    "correctAnswer": "A",
    "explanation": "Bubble sort (left to right): 3<5 no swap, 5<8 no swap, 8<12 no swap, 12<15 no swap, 15>9 swap. Result: [3,5,8,12,9,15]. Only the last two changed. Selection sort would find minimum (3) and swap with position 1 -- no change since 3 is already there, so the array stays the same after selection sort's first pass. Insertion sort's first pass only considers element 2 (5), which is already in order. Only bubble sort matches.",
    "diagramData": "NONE"
  },
  {
    "id": "SA004",
    "category": "SORT_ALGORITHMS",
    "subcategory": "MULTIPLE_PASSES",
    "marks": 1,
    "type": "ALGORITHM_TRACE",
    "difficulty": 2,
    "question": "Perform a desk check showing the state of the array after EACH pass of a bubble sort (ascending) on the following array:\n\n[6, 3, 8, 2, 5]\n\nShow the array state after each complete pass.",
    "options": [
      "N/A (short answer)"
    ],
    "correctAnswer": "N/A",
    "explanation": "Pass 1: Compare adjacent pairs left to right.\n6>3 swap: [3,6,8,2,5]\n6<8 no swap\n8>2 swap: [3,6,2,8,5]\n8>5 swap: [3,6,2,5,8]\nAfter pass 1: [3,6,2,5,8]\n\nPass 2:\n3<6 no swap\n6>2 swap: [3,2,6,5,8]\n6>5 swap: [3,2,5,6,8]\nAfter pass 2: [3,2,5,6,8]\n\nPass 3:\n3>2 swap: [2,3,5,6,8]\n3<5 no swap\nAfter pass 3: [2,3,5,6,8]\n\nPass 4: No swaps needed. Array sorted.",
    "diagramData": "NONE"
  },
  {
    "id": "BS001",
    "category": "BINARY_SEARCH",
    "subcategory": "DESK_CHECK_INFINITE",
    "marks": 3,
    "type": "DESK_CHECK",
    "difficulty": 3,
    "question": "The following binary search algorithm searches for the value 25 in a sorted array.\n\nList() = [5, 10, 15, 20, 25, 30, 35, 40]\nIndex:    1   2   3   4   5   6   7   8\n\nThe algorithm has errors that cause an infinite loop:\n\n1 BEGIN BinarySearch\n2   Set Low to 1\n3   Set High to 8\n4   Set Found to False\n5   WHILE High >= Low AND Found = False\n6     Set Middle to integer part of (High + Low) / 2\n7     IF 25 < List(Middle) THEN\n8       Set High to Middle\n9     ELSE\n10      IF 25 = List(Middle) THEN\n11        Set Found to True\n12      ELSE\n13        Set Low to Middle\n14      ENDIF\n15    ENDIF\n16  ENDWHILE\n17  IF Found = True THEN\n18    Display \"Found at index\", Middle\n19  ELSE\n20    Display \"Not found\"\n21  ENDIF\n22 END\n\n(a) Perform a desk check to show the infinite loop.\n(b) Correct the errors.",
    "options": [
      "N/A (short answer)"
    ],
    "correctAnswer": "N/A",
    "explanation": "(a) Desk check:\nLow=1, High=8, Found=False\nIteration 1: Middle=(1+8)/2=4. List(4)=20. 25<20? No. 25=20? No. Low=Middle=4.\nIteration 2: Middle=(4+8)/2=6. List(6)=30. 25<30? Yes. High=Middle=6.\nIteration 3: Middle=(4+6)/2=5. List(5)=25. 25<25? No. 25=25? Yes. Found=True.\nActually this finds it. Let me try searching for a value that causes infinite loop, like 22.\n\nSearch for 22:\nIteration 1: Low=1,High=8. Middle=4. List(4)=20. 22<20? No. 22=20? No. Low=4.\nIteration 2: Low=4,High=8. Middle=6. List(6)=30. 22<30? Yes. High=6.\nIteration 3: Low=4,High=6. Middle=5. List(5)=25. 22<25? Yes. High=5.\nIteration 4: Low=4,High=5. Middle=4. List(4)=20. 22<20? No. 22=20? No. Low=4.\nIteration 5: Low=4,High=5. Middle=4. INFINITE LOOP -- Low and High never converge.\n\n(b) Corrections:\nLine 8: Change \"Set High to Middle\" to \"Set High to Middle - 1\"\nLine 13: Change \"Set Low to Middle\" to \"Set Low to Middle + 1\"",
    "diagramData": "NONE"
  },
  {
    "id": "BS002",
    "category": "BINARY_SEARCH",
    "subcategory": "LINEAR_VS_BINARY",
    "marks": 3,
    "type": "SHORT_ANSWER",
    "difficulty": 2,
    "question": "An array contains the following values:\n\nIndex: 1  2  3  4  5  6  7\nList() 10 25 42 42 42 60 85\n\nExplain whether a linear search or a binary search should be used to find ALL occurrences of the value 42.",
    "options": [
      "N/A (short answer)"
    ],
    "correctAnswer": "N/A",
    "explanation": "A linear search should be used because:\n1. A binary search can only confirm whether a value EXISTS and finds ONE occurrence. To find ALL occurrences of 42, a binary search would need significant modification.\n2. A linear search naturally traverses every element from start to end, counting or recording all positions where the value matches.\n3. The array has multiple consecutive occurrences of 42 (indices 3, 4, 5). A linear search reliably finds all three.\n4. Although binary search is faster for finding a single element (O(log n) vs O(n)), the requirement to find ALL occurrences negates this advantage.",
    "diagramData": "NONE"
  },
  {
    "id": "AW001",
    "category": "ALGORITHM_WRITE",
    "subcategory": "DIVISIBILITY_COUNTER",
    "marks": 4,
    "type": "ALGORITHM_WRITE",
    "difficulty": 2,
    "question": "Write an algorithm that:\n- Reads integers as input until a negative number is entered\n- For each positive integer, determines if it is:\n  (a) divisible by 5 but not by 3\n  (b) divisible by 3 but not by 5\n  (c) divisible by both 3 and 5\n  (d) divisible by neither 3 nor 5\n- When a negative number is entered, displays the counts for each category.\n\nNote: Divisible(x, y) returns TRUE if x is divisible by y.",
    "options": [
      "N/A (algorithm response)"
    ],
    "correctAnswer": "N/A",
    "explanation": "BEGIN\n  CountA = 0\n  CountB = 0\n  CountC = 0\n  CountD = 0\n  Get Number\n  WHILE Number >= 0\n    IF Divisible(Number, 5) AND Divisible(Number, 3) THEN\n      CountC = CountC + 1\n    ELSE\n      IF Divisible(Number, 5) AND NOT Divisible(Number, 3) THEN\n        CountA = CountA + 1\n      ELSE\n        IF Divisible(Number, 3) AND NOT Divisible(Number, 5) THEN\n          CountB = CountB + 1\n        ELSE\n          CountD = CountD + 1\n        ENDIF\n      ENDIF\n    ENDIF\n    Get Number\n  ENDWHILE\n  Display \"Divisible by 5 only: \", CountA\n  Display \"Divisible by 3 only: \", CountB\n  Display \"Divisible by both: \", CountC\n  Display \"Divisible by neither: \", CountD\nEND",
    "diagramData": "NONE"
  },
  {
    "id": "AW002",
    "category": "ALGORITHM_WRITE",
    "subcategory": "SHOPPING_CART",
    "marks": 5,
    "type": "ALGORITHM_WRITE",
    "difficulty": 3,
    "question": "A bookstore has a stock array and a cart array:\n\nStock()\nStockIndex | BookTitle | NumInStock | PricePerItem\n1 | Novel A | 15 | 19.99\n2 | Novel B | 3 | 24.50\n...\n\nCart()\nCartIndex | BookTitle | Quantity\n1 | Novel B | 2\n...\n\nWrite an algorithm for the purchase module that:\n- Allows the customer to select a book and specify quantity\n- Checks if sufficient stock exists\n- If yes, adds to cart and updates stock\n- If no, informs the customer\n- Allows the customer to continue shopping or checkout\n- At checkout, calculates and displays total price",
    "options": [
      "N/A (algorithm response)"
    ],
    "correctAnswer": "N/A",
    "explanation": "BEGIN Purchase\n  CartCount = 0\n  Shopping = TRUE\n  WHILE Shopping = TRUE\n    Display \"Enter book title\"\n    Get BookTitle\n    Display \"Enter quantity\"\n    Get Quantity\n    Found = FALSE\n    FOR i = 1 TO Length(Stock)\n      IF Stock(i).BookTitle = BookTitle THEN\n        Found = TRUE\n        IF Stock(i).NumInStock >= Quantity THEN\n          CartCount = CartCount + 1\n          Cart(CartCount).BookTitle = BookTitle\n          Cart(CartCount).Quantity = Quantity\n          Stock(i).NumInStock = Stock(i).NumInStock - Quantity\n          Display \"Added to cart\"\n        ELSE\n          Display \"Insufficient stock. Only \", Stock(i).NumInStock, \" available\"\n        ENDIF\n      ENDIF\n    NEXT\n    IF Found = FALSE THEN\n      Display \"Book not found\"\n    ENDIF\n    Display \"Continue shopping? (Y/N)\"\n    Get Choice\n    IF Choice = \"N\" THEN\n      Shopping = FALSE\n    ENDIF\n  ENDWHILE\n  TotalPrice = 0\n  FOR j = 1 TO CartCount\n    FOR k = 1 TO Length(Stock)\n      IF Cart(j).BookTitle = Stock(k).BookTitle THEN\n        TotalPrice = TotalPrice + Cart(j).Quantity * Stock(k).PricePerItem\n      ENDIF\n    NEXT\n  NEXT\n  Display \"Total price: $\", TotalPrice\nEND Purchase",
    "diagramData": "NONE"
  },
  {
    "id": "AW003",
    "category": "ALGORITHM_WRITE",
    "subcategory": "VALIDATION_LOOP",
    "marks": 3,
    "type": "ALGORITHM_WRITE",
    "difficulty": 1,
    "question": "Write an algorithm that:\n- Asks the user to enter a test score between 0 and 100\n- Validates the input (rejects values outside 0-100)\n- Classifies the score as: \"High Distinction\" (85-100), \"Distinction\" (70-84), \"Credit\" (50-69), or \"Fail\" (0-49)\n- Displays the classification",
    "options": [
      "N/A (algorithm response)"
    ],
    "correctAnswer": "N/A",
    "explanation": "BEGIN\n  REPEAT\n    Display \"Enter a test score (0-100)\"\n    Get Score\n    IF Score < 0 OR Score > 100 THEN\n      Display \"Invalid. Must be between 0 and 100.\"\n    ENDIF\n  UNTIL Score >= 0 AND Score <= 100\n  CASEWHERE\n    Score >= 85: Display \"High Distinction\"\n    Score >= 70: Display \"Distinction\"\n    Score >= 50: Display \"Credit\"\n    OTHERWISE: Display \"Fail\"\n  ENDCASE\nEND",
    "diagramData": "NONE"
  },
  {
    "id": "AW004",
    "category": "ALGORITHM_WRITE",
    "subcategory": "FILE_PROCESSING",
    "marks": 4,
    "type": "ALGORITHM_WRITE",
    "difficulty": 3,
    "question": "A sequential file called StudentFile contains records with fields: StudentName (string), Mark1 (integer), Mark2 (integer), Mark3 (integer).\n\nWrite an algorithm that:\n- Reads all records from the file\n- Calculates the average of the three marks for each student\n- Determines the overall class average\n- Displays each student's name and average, and the class average\n- Identifies and displays the name of the student with the highest average",
    "options": [
      "N/A (algorithm response)"
    ],
    "correctAnswer": "N/A",
    "explanation": "BEGIN\n  OPEN StudentFile\n  TotalClassMarks = 0\n  StudentCount = 0\n  HighestAvg = 0\n  TopStudent = \"\"\n  READ StudentName, Mark1, Mark2, Mark3 FROM StudentFile\n  WHILE NOT EOF\n    StudentAvg = (Mark1 + Mark2 + Mark3) / 3\n    TotalClassMarks = TotalClassMarks + StudentAvg\n    StudentCount = StudentCount + 1\n    Display StudentName, \" Average: \", StudentAvg\n    IF StudentAvg > HighestAvg THEN\n      HighestAvg = StudentAvg\n      TopStudent = StudentName\n    ENDIF\n    READ StudentName, Mark1, Mark2, Mark3 FROM StudentFile\n  ENDWHILE\n  CLOSE StudentFile\n  IF StudentCount > 0 THEN\n    ClassAverage = TotalClassMarks / StudentCount\n    Display \"Class Average: \", ClassAverage\n    Display \"Top Student: \", TopStudent, \" with \", HighestAvg\n  ELSE\n    Display \"No student records found\"\n  ENDIF\nEND",
    "diagramData": "NONE"
  },
  {
    "id": "ML001",
    "category": "METALANGUAGE",
    "subcategory": "EBNF_TO_CODE",
    "marks": 3,
    "type": "CONVERSION",
    "difficulty": 2,
    "question": "A simple drawing language called DRAW is described by the following EBNF:\n\nprogram = BEGIN {<statement> ;} END\nstatement = <move> | <turn> | <colour> | <loop>\nmove = (FWD <integer>) | (BWD <integer>)\nturn = (LEFT <integer>) | (RIGHT <integer>)\ncolour = CLR <colourname>\ncolourname = RED | GREEN | BLUE | BLACK\nloop = LOOP <integer> # {<statement> ;} #\ninteger = <digit> {<digit>}\ndigit = 0|1|2|3|4|5|6|7|8|9\n\nConvert the following algorithm into DRAW code:\n\nBEGIN\n  Set colour to red\n  FOR loop = 1 to 4\n    go forward 100 steps\n    turn right 90 degrees\n  NEXT\nEND",
    "options": [
      "N/A (conversion response)"
    ],
    "correctAnswer": "N/A",
    "explanation": "BEGIN\n  CLR RED ;\n  LOOP 4 #\n    FWD 100 ;\n    RIGHT 90 ;\n  #\nEND\n\nExplanation: \"Set colour to red\" maps to \"CLR RED\". The FOR loop (1 to 4) maps to \"LOOP 4 # ... #\". \"go forward 100\" maps to \"FWD 100\". \"turn right 90\" maps to \"RIGHT 90\". Each statement ends with a semicolon. The LOOP uses # delimiters. This draws a red square.",
    "diagramData": "NONE"
  },
  {
    "id": "ML002",
    "category": "METALANGUAGE",
    "subcategory": "CODE_TO_EBNF",
    "marks": 3,
    "type": "CONVERSION",
    "difficulty": 3,
    "question": "Consider the following EBNF definition for a simple calculator expression:\n\nexpression = <term> {<addop> <term>}\nterm = <factor> {<mulop> <factor>}\nfactor = <number> | ( <expression> )\naddop = + | -\nmulop = * | /\nnumber = <digit> {<digit>}\ndigit = 0|1|2|3|4|5|6|7|8|9\n\nDetermine which of the following are VALID expressions according to this EBNF:\n(a) 42\n(b) 3 + 5 * 2\n(c) (10 - 3) * (2 + 1)\n(d) + 5\n(e) 3 *",
    "options": [
      "A. All are valid",
      "B. a, b, c only",
      "C. a, b, c, d",
      "D. a, c only"
    ],
    "correctAnswer": "B",
    "explanation": "(a) 42: number-->factor-->term-->expression. VALID.\n(b) 3 + 5 * 2: term(3) addop(+) term(factor(5) mulop(*) factor(2)). VALID.\n(c) (10-3)*(2+1): factor((expression)) mulop(*) factor((expression)). VALID.\n(d) +5: expression must start with a term, which starts with a factor, which must be a number or parenthesised expression. A leading + is not defined. INVALID.\n(e) 3*: term starts 3 mulop(*) but no second factor follows. INVALID.",
    "diagramData": "NONE"
  },
  {
    "id": "ML003",
    "category": "METALANGUAGE",
    "subcategory": "ROBO_CONVERSION",
    "marks": 3,
    "type": "CONVERSION",
    "difficulty": 2,
    "question": "Using the ROBO language from the 2017 HSC:\n\nprogram = BEGIN {<statement> ;} END\nstatement = <turn>|<forward>|<back>|<repetition>\nturn = (LT <integer>)|(RT <integer>)\nforward = FD <integer>\nback = BK <integer>\nrepetition = REP <integer> # {<statement> ;} #\n\nConvert the following algorithm into ROBO code:\n\nBEGIN\n  FOR loop = 1 to 3\n    go forward 50 steps\n    turn right 120 degrees\n  NEXT\n  go forward 200 steps\n  turn left 180 degrees\n  go forward 200 steps\nEND",
    "options": [
      "N/A (conversion response)"
    ],
    "correctAnswer": "N/A",
    "explanation": "BEGIN\n  REP 3 #\n    FD 50 ;\n    RT 120 ;\n  #\n  FD 200 ;\n  LT 180 ;\n  FD 200 ;\nEND\n\nThis draws an equilateral triangle (3 sides, 120 degree turns), then moves forward 200, turns around, and returns.",
    "diagramData": "NONE"
  },
  {
    "id": "ML004",
    "category": "METALANGUAGE",
    "subcategory": "EBNF_VALIDATION",
    "marks": 3,
    "type": "MCQ",
    "difficulty": 2,
    "question": "Given the EBNF for the ROBO language:\n\nprogram = BEGIN {<statement> ;} END\nstatement = <turn>|<forward>|<back>|<repetition>\nturn = (LT <integer>)|(RT <integer>)\nforward = FD <integer>\nback = BK <integer>\nrepetition = REP <integer> # {<statement> ;} #\ninteger = <digit> {<digit>}\ndigit = 0|1|2|3|4|5|6|7|8|9\n\nWhich of the following is a VALID ROBO program?",
    "options": [
      "A. BEGIN FD 100",
      "RT 90",
      "END",
      "B. BEGIN FD 100 RT 90 END",
      "C. FD 100",
      "RT 90 ;",
      "D. BEGIN REP 3 # FD 100",
      "# END"
    ],
    "correctAnswer": "A",
    "explanation": "Option A: BEGIN, then two valid statements each ending with ;, then END. Valid.\nOption B: Missing semicolons after statements. Invalid.\nOption C: Missing BEGIN and END. Invalid.\nOption D: Appears valid -- BEGIN, then REP 3 # FD 100 ; #, then END. But REP 3 # FD 100; # needs a semicolon after the closing #. Actually, looking at the EBNF, <repetition> is a type of <statement>, and each statement in the program needs a ; after it. So it should be: BEGIN REP 3 # FD 100 ; # ; END. Option D is missing that trailing semicolon. So only A is fully valid.",
    "diagramData": "NONE"
  },
  {
    "id": "DS001",
    "category": "DATA_STRUCTURES",
    "subcategory": "BOOLEAN_ARRAY",
    "marks": 1,
    "type": "MCQ",
    "difficulty": 1,
    "question": "For which of the following is a one-dimensional array of Booleans an appropriate data structure?",
    "options": [
      "A. Storing RGB pixel colours for an image row",
      "B. Recording whether each seat in a cinema row is occupied",
      "C. Storing the names of students in a class",
      "D. Recording the temperature at each hour of the day"
    ],
    "correctAnswer": "B",
    "explanation": "A Boolean array stores TRUE/FALSE values. Cinema seat occupancy is binary (occupied or not), making a 1D Boolean array ideal. Pixel colours need integers (RGB values). Student names need strings. Temperatures need numeric values (integers or reals).",
    "diagramData": "NONE"
  },
  {
    "id": "DS002",
    "category": "DATA_STRUCTURES",
    "subcategory": "TWO_DIM_ARRAY",
    "marks": 1,
    "type": "MCQ",
    "difficulty": 1,
    "question": "Which of the following scenarios requires a two-dimensional array?",
    "options": [
      "A. Storing the names of 30 students",
      "B. Storing the marks of 30 students across 5 subjects",
      "C. Storing the total mark for each of 30 students",
      "D. Storing whether each of 30 students passed or failed"
    ],
    "correctAnswer": "B",
    "explanation": "A 2D array is needed when data has two dimensions (rows AND columns). 30 students x 5 subjects creates a grid/matrix. Options A, C, and D each only need a single list (one dimension) of 30 elements.",
    "diagramData": "NONE"
  },
  {
    "id": "DS003",
    "category": "DATA_STRUCTURES",
    "subcategory": "ARRAY_OF_RECORDS",
    "marks": 1,
    "type": "MCQ",
    "difficulty": 2,
    "question": "A school library system needs to store the following for each book: Title (string), Author (string), ISBN (string), Available (Boolean), DueDate (date).\n\nWhat is the most appropriate data structure?",
    "options": [
      "A. Five separate one-dimensional arrays",
      "B. A two-dimensional array",
      "C. A one-dimensional array of records",
      "D. A single record variable"
    ],
    "correctAnswer": "C",
    "explanation": "An array of records is most appropriate because: each book has multiple fields of DIFFERENT data types (strings, Boolean, date), which a record handles. Multiple books require an array. A 2D array requires all elements to be the same type. Separate arrays are harder to maintain. A single record only stores one book.",
    "diagramData": "NONE"
  },
  {
    "id": "DS004",
    "category": "DATA_STRUCTURES",
    "subcategory": "STACK_VS_QUEUE",
    "marks": 1,
    "type": "MCQ",
    "difficulty": 2,
    "question": "A print server manages print jobs. Jobs are processed in the order they are received.\n\nWhich data structure principle applies?",
    "options": [
      "A. Stack (LIFO -- Last In First Out)",
      "B. Queue (FIFO -- First In First Out)",
      "C. Array (random access)",
      "D. Tree (hierarchical)"
    ],
    "correctAnswer": "B",
    "explanation": "A print queue processes jobs in the order received: the first job submitted is the first to print. This is FIFO (First In First Out), which is a queue. A stack would process the most recent job first (LIFO), which would be unfair to earlier submissions.",
    "diagramData": "NONE"
  },
  {
    "id": "ER001",
    "category": "ERROR_TYPES",
    "subcategory": "LOGIC_ERROR",
    "marks": 1,
    "type": "MCQ",
    "difficulty": 1,
    "question": "A program calculates a discount of 10% for purchases over $100. When tested with a $150 purchase, the discount is applied correctly. When tested with a $100 purchase, the discount is also applied, but it should not be.\n\nWhat type of error is this?",
    "options": [
      "A. Syntax",
      "B. Runtime",
      "C. Logic",
      "D. Overflow"
    ],
    "correctAnswer": "C",
    "explanation": "The program runs without crashing but produces incorrect results due to a flaw in the condition (likely using >= instead of >). This is a logic error -- the algorithm's logic does not match the requirements. Syntax errors prevent compilation. Runtime errors cause crashes during execution.",
    "diagramData": "NONE"
  },
  {
    "id": "ER002",
    "category": "ERROR_TYPES",
    "subcategory": "RUNTIME_ERROR",
    "marks": 1,
    "type": "MCQ",
    "difficulty": 1,
    "question": "A program attempts to divide a number by a variable that the user set to zero. The program crashes.\n\nWhat type of error caused this?",
    "options": [
      "A. Syntax",
      "B. Runtime",
      "C. Logic",
      "D. Compilation"
    ],
    "correctAnswer": "B",
    "explanation": "Division by zero causes an error during program execution (runtime). The code is syntactically correct and compiles, but the error only manifests when the program runs with specific input. This is a classic runtime error.",
    "diagramData": "NONE"
  },
  {
    "id": "ER003",
    "category": "ERROR_TYPES",
    "subcategory": "OVERFLOW_ERROR",
    "marks": 1,
    "type": "MCQ",
    "difficulty": 2,
    "question": "A program stores a counter in a single byte (unsigned, range 0-255). The counter successfully counts up to 255, but when incremented once more, the displayed value is 0.\n\nWhat type of error caused this?",
    "options": [
      "A. Logic",
      "B. Syntax",
      "C. Overflow",
      "D. Runtime"
    ],
    "correctAnswer": "C",
    "explanation": "The counter exceeded the maximum value storable in a single byte (255). Adding 1 to 255 in an 8-bit unsigned integer wraps around to 0. This is an overflow error -- the data exceeds the capacity of its storage type.",
    "diagramData": "NONE"
  },
  {
    "id": "SC001",
    "category": "VARIABLE_SCOPE",
    "subcategory": "GLOBAL_MODIFICATION",
    "marks": 1,
    "type": "ALGORITHM_TRACE",
    "difficulty": 2,
    "question": "Consider the following program:\n\nBEGIN Main\n  X is Global\n  X = 100\n  ModifyX\n  Display X\nEND Main\n\nBEGIN ModifyX\n  X = X + 50\nEND ModifyX\n\nWhat is the output?",
    "options": [
      "A. 100",
      "B. 150",
      "C. 50",
      "D. Error"
    ],
    "correctAnswer": "B",
    "explanation": "X is declared as global, so both Main and ModifyX access the same variable. Main sets X = 100. ModifyX adds 50, making X = 150. Back in Main, Display X shows 150.",
    "diagramData": "NONE"
  },
  {
    "id": "SC002",
    "category": "VARIABLE_SCOPE",
    "subcategory": "LOCAL_ISOLATION",
    "marks": 1,
    "type": "ALGORITHM_TRACE",
    "difficulty": 2,
    "question": "Consider the following program:\n\nBEGIN Main\n  X = 100\n  ModifyX\n  Display X\nEND Main\n\nBEGIN ModifyX\n  X is Local\n  X = 999\nEND ModifyX\n\nWhat is the output?",
    "options": [
      "A. 100",
      "B. 999",
      "C. 0",
      "D. Error"
    ],
    "correctAnswer": "A",
    "explanation": "X in Main is 100. ModifyX declares its own local X and sets it to 999. This local X is a completely separate variable that exists only inside ModifyX. When ModifyX ends, its local X is destroyed. Main's X is unaffected and remains 100.",
    "diagramData": "NONE"
  },
  {
    "id": "SC003",
    "category": "VARIABLE_SCOPE",
    "subcategory": "MIXED_SCOPE",
    "marks": 1,
    "type": "ALGORITHM_TRACE",
    "difficulty": 3,
    "question": "Consider the following program:\n\nBEGIN Main\n  A is Global\n  A = 5\n  B = 10\n  Process\n  Display A, B\nEND Main\n\nBEGIN Process\n  B is Local\n  A = A * 2\n  B = A + 3\n  Display B\nEND Process\n\nWhat is the complete output (all Display statements in order)?",
    "options": [
      "A. 13 then 10 10",
      "B. 13 then 5 10",
      "C. 13 then 10 13",
      "D. 10 then 10 10"
    ],
    "correctAnswer": "A",
    "explanation": "A is global. B in Main and B in Process are separate (Process has local B).\nProcess: A = 5*2 = 10 (global A modified). Local B = 10+3 = 13. Display B shows 13.\nBack in Main: A is now 10 (modified by Process). B in Main is still 10 (unaffected by Process's local B). Display A, B shows 10, 10.\nComplete output: 13 then 10 10.",
    "diagramData": "NONE"
  },
  {
    "id": "CS001",
    "category": "COMPILATION",
    "subcategory": "STEP_ORDER",
    "marks": 1,
    "type": "MCQ",
    "difficulty": 1,
    "question": "The translation of source code into object code involves several steps.\n\nWhich of the following lists the steps in the correct order?",
    "options": [
      "A. Syntactical analysis, lexical analysis, code generation",
      "B. Lexical analysis, code generation, syntactical analysis",
      "C. Lexical analysis, syntactical analysis, code generation",
      "D. Code generation, lexical analysis, syntactical analysis"
    ],
    "correctAnswer": "C",
    "explanation": "The compilation process follows this order:\n1. Lexical analysis: breaks source code into tokens (keywords, identifiers, operators)\n2. Syntactical analysis: checks tokens form valid grammatical structures according to language rules\n3. Code generation: produces the object/machine code from the validated syntax tree\nThis is a fundamental sequence in compiler design.",
    "diagramData": "NONE"
  },
  {
    "id": "CS002",
    "category": "COMPILATION",
    "subcategory": "INTERPRETER_VS_COMPILER",
    "marks": 1,
    "type": "MCQ",
    "difficulty": 1,
    "question": "Which row correctly describes a difference between a compiler and an interpreter?",
    "options": [
      "A. A compiler translates one line at a time",
      "an interpreter translates the whole program at once",
      "B. A compiler produces an executable file",
      "an interpreter executes code line by line",
      "C. A compiler is used for web languages only",
      "an interpreter is used for system languages only",
      "D. A compiler requires less memory",
      "an interpreter produces faster-running programs"
    ],
    "correctAnswer": "B",
    "explanation": "A compiler translates the entire source code into an executable object file before execution. An interpreter translates and executes the source code one statement at a time, without producing a separate executable file. Option A reverses the definitions.",
    "diagramData": "NONE"
  },
  {
    "id": "SE001",
    "category": "PROGRAMMING_PARADIGMS",
    "subcategory": "SEQ_VS_EVENT",
    "marks": 1,
    "type": "MCQ",
    "difficulty": 2,
    "question": "Which row contains a true statement for both sequential and event-driven software?",
    "options": [
      "A. Sequential: User input does not significantly affect execution order. Event-driven: Execution involves a fixed sequence of events",
      "B. Sequential: User input is restricted to self-validating interface elements. Event-driven: The order of execution is not predetermined by the developer",
      "C. Sequential: User input does not significantly affect the order of execution. Event-driven: The order of execution is not predetermined by the developer",
      "D. Sequential: User input is restricted to self-validating interface elements. Event-driven: Execution involves a fixed sequence of events"
    ],
    "correctAnswer": "C",
    "explanation": "In sequential software, the program follows a predetermined path; user input provides data but does not change which code runs next. In event-driven software, the user's actions (clicks, key presses) trigger event handlers, so the execution order depends on user behaviour and is not predetermined.",
    "diagramData": "NONE"
  },
  {
    "id": "FI001",
    "category": "FILE_STRUCTURES",
    "subcategory": "SEQ_VS_RELATIVE",
    "marks": 1,
    "type": "MCQ",
    "difficulty": 2,
    "question": "Which row contains a true statement for both sequential and relative (random access) files?",
    "options": [
      "A. Sequential: A priming read is used to check that the file is not empty. Relative: Must include at least one integer field",
      "B. Sequential: A priming read is used to check that the file is not empty. Relative: Must contain a fixed number of records",
      "C. Sequential: A priming read is needed to open the file. Relative: Must include at least one integer field",
      "D. Sequential: A priming read is needed to open the file. Relative: Must contain a fixed number of records"
    ],
    "correctAnswer": "A",
    "explanation": "A priming read in sequential file processing reads the first record before entering a WHILE NOT EOF loop, which checks the file is not empty. A relative (direct access) file requires an integer key field to calculate the physical storage location of each record. Option B is wrong: relative files do not require fixed record counts. Options C and D are wrong: priming reads do not open files.",
    "diagramData": "NONE"
  },
  {
    "id": "CD001",
    "category": "SYSTEM_MODELLING",
    "subcategory": "DFD_TO_CONTEXT",
    "marks": 3,
    "type": "SHORT_ANSWER",
    "difficulty": 2,
    "question": "A data flow diagram for a school enrolment system shows the following:\n\nExternal entities: Parents, Teachers, Administration\nProcesses: Register Student, Assign Class, Generate Report\nData stores: Student File, Class File\nData flows:\n- Parents submit Enrolment Form to Register Student\n- Register Student writes Student Record to Student File\n- Register Student sends Confirmation to Parents\n- Administration requests Report from Generate Report\n- Generate Report reads from Student File and Class File\n- Generate Report sends Report to Administration\n- Assign Class reads from Student File, writes to Class File\n- Assign Class sends Class Assignment to Teachers\n\nDraw a context diagram for this system.",
    "options": [
      "N/A (diagram response)"
    ],
    "correctAnswer": "N/A",
    "explanation": "A context diagram shows:\n- ONE central process: \"School Enrolment System\" (represents the entire system as a single process)\n- External entities: Parents, Teachers, Administration (shown outside the system boundary)\n- Data flows between entities and the system:\n  Parents --> Enrolment Form --> School Enrolment System\n  School Enrolment System --> Confirmation --> Parents\n  School Enrolment System --> Class Assignment --> Teachers\n  Administration --> Report Request --> School Enrolment System\n  School Enrolment System --> Report --> Administration\n- NO data stores shown (context diagrams do not include data stores)\n- NO internal processes shown (everything is collapsed into one process)",
    "diagramData": "CONTEXT_DIAGRAM:entities(Parents,Teachers,Administration);central_process(School_Enrolment_System);flows(Parents-->EnrolmentForm-->System,System-->Confirmation-->Parents,System-->ClassAssignment-->Teachers,Administration-->ReportRequest-->System,System-->Report-->Administration)"
  },
  {
    "id": "FE001",
    "category": "HARDWARE",
    "subcategory": "FETCH_EXECUTE",
    "marks": 3,
    "type": "SHORT_ANSWER",
    "difficulty": 2,
    "question": "Describe what happens during each phase of the fetch-execute cycle.",
    "options": [
      "N/A (short answer)"
    ],
    "correctAnswer": "N/A",
    "explanation": "FETCH phase:\n1. The Program Counter (PC) holds the memory address of the next instruction.\n2. The address in the PC is placed on the address bus and sent to memory.\n3. The instruction at that memory address is retrieved via the data bus.\n4. The instruction is placed in the Instruction Register (IR).\n5. The PC is incremented to point to the next instruction.\n\nDECODE phase:\n6. The Control Unit decodes the instruction in the IR.\n7. It determines what operation is required and what operands are needed.\n\nEXECUTE phase:\n8. The ALU or other components carry out the instruction.\n9. This may involve arithmetic/logic operations, data movement, or branching.\n10. Results may be stored in registers or written back to memory.\n\nThe cycle then repeats from the fetch phase with the next instruction.",
    "diagramData": "NONE"
  },
  {
    "id": "TR001",
    "category": "TESTING",
    "subcategory": "TEST_REPORT",
    "marks": 3,
    "type": "SHORT_ANSWER",
    "difficulty": 1,
    "question": "Outline the information that a testing report should contain prior to the release of software.",
    "options": [
      "N/A (short answer)"
    ],
    "correctAnswer": "N/A",
    "explanation": "A testing report should contain:\n\n1. Test cases used: description of each test scenario, including normal data, boundary data, and abnormal/invalid data that was tested.\n\n2. Expected results: what the correct output should be for each test case, as determined from the specifications.\n\n3. Actual results: what the software actually produced when each test case was run.\n\n4. Comparison: analysis of whether actual results matched expected results, identifying any discrepancies.\n\n5. Errors found: documentation of any bugs, defects, or unexpected behaviours discovered during testing.\n\n6. Corrective actions: what changes were made to fix identified errors, and whether retesting confirmed the fixes.\n\n7. Test environment: hardware and software configurations used during testing.\n\n8. Sign-off: confirmation that all critical tests passed and the software meets the specified requirements.",
    "diagramData": "NONE"
  }
];
