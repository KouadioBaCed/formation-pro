export const questions = [
    {
        id: 1,
        question: "An auditor is least likely to use computer software to",
        options: [
            "A. Construct parallel simulations.",
            "B. Access client data files.",
            "C. Prepare spreadsheets.",
            "D. Assess computer control risk."
        ],
        answer: "D",
        explanation: "Assessing computer control risk requires professional judgment. Although software can assist with data analysis, evaluating the adequacy and effectiveness of internal controls cannot be accomplished by a computer alone. The auditor must apply professional expertise and judgment."
    },
    {
        id: 2,
        question: "When auditing a computerized inventory file with over 20,000 items, the auditor can maintain independence and efficiency by",
        options: [
            "A. Asking the console operator to print items over $100.",
            "B. Using a generalized audit software package.",
            "C. Printing the entire file and selecting every nth item.",
            "D. Using the system programmer to write an extraction program."
        ],
        answer: "B",
        explanation: "Using generalized audit software (GAS) preserves auditor independence because it does not rely on client personnel. It is also efficient, allowing automated selection and analysis of large datasets."
    },
    {
        id: 3,
        question: "Which cannot be performed using generalized audit software (GAS)?",
        options: [
            "A. Identifying missing check numbers.",
            "B. Correcting erroneous data before audit testing.",
            "C. Matching identical product information in separate files.",
            "D. Aging accounts receivable."
        ],
        answer: "B",
        explanation: "GAS can identify errors but should not be used to correct client data before audit testing. Altering client data would compromise audit integrity and independence."
    },
    {
        id: 4,
        question: "Which statement is not true about audit use of the Internet?",
        options: [
            "A. It is useful for gathering audit-related information.",
            "B. It provides a secure medium for transmitting confidential information.",
            "C. Electronic communication is a major use.",
            "D. Web browsing creates an electronic record."
        ],
        answer: "B",
        explanation: "The Internet is not inherently secure for transmitting confidential information. Encryption and additional safeguards are necessary to ensure confidentiality."
    },
    {
        id: 5,
        question: "A primary advantage of using generalized audit software (GAS) is that the auditor may",
        options: [
            "A. Substantiate accuracy through self-checking digits.",
            "B. Reduce required tests of controls.",
            "C. Access computer files without detailed hardware/software knowledge.",
            "D. Replace analytical procedures with substantive tests."
        ],
        answer: "C",
        explanation: "GAS is designed to work across different systems, allowing auditors to analyze client data without deep technical knowledge of the client's hardware or software environment."
    },
    {
        id: 6,
        question: "In a paperless electronic system, the auditor is most likely to use",
        options: [
            "A. Continuous monitoring with an embedded audit module.",
            "B. Increased segregation of duties.",
            "C. Verification of encrypted digital certificates.",
            "D. Extensive firewall testing."
        ],
        answer: "A",
        explanation: "Embedded audit modules enable continuous monitoring of transactions in electronic systems, providing effective audit coverage in environments without paper trails."
    },
    {
        id: 7,
        question: "Auditors hesitate to use embedded audit modules primarily because",
        options: [
            "A. They are vulnerable to viruses.",
            "B. Continuous monitoring is required.",
            "C. Management can easily tamper with them.",
            "D. Auditor involvement in system design may impair independence."
        ],
        answer: "D",
        explanation: "If auditors participate in system design, independence may be impaired unless management retains full decision-making responsibility."
    },
    {
        id: 8,
        question: "Using GAS on employee credit card transactions would not readily identify",
        options: [
            "A. High-value transactions.",
            "B. Fraudulent transactions.",
            "C. Transactions for specific cardholders.",
            "D. Suppliers used by each cardholder."
        ],
        answer: "B",
        explanation: "Fraud often lacks clear indicators in transaction data. While GAS can identify unusual patterns, it cannot automatically determine fraud."
    },
    {
        id: 9,
        question: "The most effective control to detect fraud in electronic hospitalization claims is",
        options: [
            "A. Integrated test facilities.",
            "B. Monitoring programs for unusual claims.",
            "C. Matching claimant ID with valid policyholders.",
            "D. Batch controls."
        ],
        answer: "B",
        explanation: "Ongoing monitoring of unusual claim patterns is effective in detecting fraudulent activity by identifying anomalies over time."
    },
    {
        id: 10,
        question: "Computer-assisted audit techniques (CAATs) provide",
        options: [
            "A. Ease of system access.",
            "B. Ease of training.",
            "C. Quick deployment of software solutions.",
            "D. Ability to analyze large amounts of data."
        ],
        answer: "D",
        explanation: "CAATs automate data extraction and analysis, enabling auditors to process and analyze large datasets efficiently."
    },
    {
        id: 11,
        question: "Which is not a benefit of using IT in auditing?",
        options: [
            "A. Reducing audit risk.",
            "B. Improving timeliness.",
            "C. Increasing audit opportunities.",
            "D. Improving auditor judgment."
        ],
        answer: "D",
        explanation: "Auditor judgment is enhanced through experience and professional development, not by IT tools themselves."
    },
    {
        id: 12,
        question: "The most efficient source to evaluate overall control systems is",
        options: [
            "A. Control flowcharts.",
            "B. Standard operating procedures.",
            "C. Narrative descriptions.",
            "D. Industry standards."
        ],
        answer: "A",
        explanation: "Control flowcharts provide a comprehensive and visual overview of system processes and related controls."
    },
    {
        id: 13,
        question: "The best graphical representation of activities and decisions is a",
        options: [
            "A. Flowchart.",
            "B. Control chart.",
            "C. Histogram.",
            "D. Run chart."
        ],
        answer: "A",
        explanation: "Flowcharts visually represent sequences of activities and decisions using standardized symbols."
    },
    {
        id: 14,
        question: "The diamond symbol in flowcharting represents",
        options: [
            "A. A process.",
            "B. Terminal output.",
            "C. A decision point.",
            "D. A predefined process."
        ],
        answer: "C",
        explanation: "The diamond shape represents a decision point where branching logic occurs."
    },
    {
        id: 15,
        question: "An auditor’s flowchart represents the auditor’s",
        options: [
            "A. Risk assessment.",
            "B. Identification of weaknesses.",
            "C. Assessment of control environment effectiveness.",
            "D. Understanding of the system."
        ],
        answer: "D",
        explanation: "Flowcharts document the auditor’s understanding of the system and internal controls."
    },
    {
        id: 16,
        question: "A systems flowchart is best described as",
        options: [
            "A. Pictorial computer instruction flow.",
            "B. Organizational reporting structure.",
            "C. Replacement for questionnaires.",
            "D. Symbolic representation of sequential processes."
        ],
        answer: "D",
        explanation: "A systems flowchart symbolically represents document and process flow within an accounting system."
    },
    {
        id: 17,
        question: "The normal sequence in a systems flowchart is",
        options: [
            "A. Top to bottom and left to right.",
            "B. Bottom to top and left to right.",
            "C. Top to bottom and right to left.",
            "D. Bottom to top and right to left."
        ],
        answer: "A",
        explanation: "Flowcharts conventionally flow from top to bottom and left to right."
    },
    {
        id: 18,
        question: "The method that provides the best visual grasp of a system is",
        options: [
            "A. Flowcharting.",
            "B. Questionnaire.",
            "C. Matrix.",
            "D. Narrative."
        ],
        answer: "A",
        explanation: "Flowcharts visually display processes, controls, and weaknesses clearly."
    },
    {
        id: 19,
        question: "Flowcharting helps auditors primarily to",
        options: [
            "A. Determine management objectives.",
            "B. Meet international requirements.",
            "C. Prove accuracy of information.",
            "D. Gain understanding to test effectiveness."
        ],
        answer: "D",
        explanation: "Flowcharts provide understanding necessary before testing control effectiveness."
    },
    {
        id: 20,
        question: "An internal auditor develops a flowchart primarily to",
        options: [
            "A. Detect errors.",
            "B. Analyze systems and identify controls.",
            "C. Determine responsibilities.",
            "D. Reduce interviews."
        ],
        answer: "B",
        explanation: "Flowcharts are used to analyze systems and identify internal controls before testing."
    },
    {
        id: 21,
        question: "To develop a sales order processing flowchart, the auditor should",
        options: [
            "A. Start with pricing decisions.",
            "B. Start with shipped goods and trace backward.",
            "C. Walk through from order receipt to shipment and billing.",
            "D. Use only plant flowcharts."
        ],
        answer: "C",
        explanation: "A walkthrough from initiation to completion ensures full understanding of manual and computerized processing."
    },
    {
        id: 22,
        question: "Regarding systems flowcharts, they",
        options: [
            "A. Show specific edit tests.",
            "B. Guide identification of segregation of duties.",
            "C. Are always updated.",
            "D. Show only computer processing."
        ],
        answer: "B",
        explanation: "Systems flowcharts help identify segregation of duties by showing responsibilities across departments."
    },
    {
        id: 23,
        question: "Graphical notations showing data flow are called",
        options: [
            "A. Action diagrams.",
            "B. Program structure charts.",
            "C. Conceptual data models.",
            "D. Data flow diagrams."
        ],
        answer: "D",
        explanation: "Data flow diagrams illustrate how data moves and is transformed within systems."
    },
    {
        id: 24,
        question: "Compared to vertical flowcharts, horizontal flowcharts",
        options: [
            "A. Provide more room for descriptions.",
            "B. Highlight assignment of duties and checks.",
            "C. Are usually longer.",
            "D. Provide less overview."
        ],
        answer: "B",
        explanation: "Horizontal flowcharts emphasize departmental responsibilities and segregation of duties."
    },
    {
        id: 25,
        question: "In a payroll system flowchart, Symbol X likely represents",
        options: [
            "A. Erroneous time cards.",
            "B. An error report.",
            "C. Batched time cards.",
            "D. Unclaimed payroll checks."
        ],
        answer: "B",
        explanation: "A document symbol after validation typically represents an error report or output document."
    },
    {
        id: 26,
        question: "An advantage of systems flowcharts over questionnaires is that they",
        options: [
            "A. Identify deficiencies prominently.",
            "B. Provide visual depiction of activities.",
            "C. Indicate effectiveness of controls.",
            "D. Reduce observation needs."
        ],
        answer: "B",
        explanation: "Flowcharts visually represent document and process flows, making system understanding easier."
    },
    {
        id: 27,
        question: "The best summary-level description tool for a complex new system is",
        options: [
            "A. Control flowchart.",
            "B. Program code checking.",
            "C. System flowchart.",
            "D. Detailed narrative."
        ],
        answer: "C",
        explanation: "A system flowchart provides a high-level overview of responsibilities, document flows, and processes."
    },
    {
        id: 28,
        question: "Analytical information in accounts payable verification includes",
        options: [
            "A. Comparing schedule with ledger.",
            "B. Comparing balance with prior years.",
            "C. Comparing confirmations.",
            "D. Examining invoices."
        ],
        answer: "B",
        explanation: "Analytical procedures involve comparing financial data with expectations, such as prior-year balances."
    },
    {
        id: 29,
        question: "When determining extent of analytical procedures, the auditor considers",
        options: [
            "A. Adequacy of internal control.",
            "B. Significance of the area.",
            "C. Predictability of analytical results.",
            "D. All of the answers."
        ],
        answer: "D",
        explanation: "All listed factors influence the decision regarding the extent of analytical procedures."
    },
    {
        id: 30,
        question: "Comparing inventory turnover with industry standards helps to",
        options: [
            "A. Evaluate report accuracy.",
            "B. Test safeguarding controls.",
            "C. Determine compliance.",
            "D. Assess performance and need for further audit."
        ],
        answer: "D",
        explanation: "Inventory turnover comparison provides performance insight and identifies areas requiring further audit attention."
    },
    {
        id: 31,
        question: "Analytical procedures enable the internal auditor to predict the balance or quantity of an item. Information to develop this estimate can be obtained by all of the following except",
        options: [
            "A. Tracing transactions through the system to determine whether procedures are being applied as prescribed.",
            "B. Comparing financial data with prior periods, budgets, forecasts, and industry data.",
            "C. Studying relationships of financial data expected to conform to predictable patterns.",
            "D. Studying relationships of financial data with relevant nonfinancial data."
        ],
        answer: "A",
        explanation: "Tracing transactions is a test of controls, not an analytical procedure."
    },
    {
        id: 32,
        question: "Analytical procedures comparing current financial statements with budgets or previous statements are primarily intended to determine the",
        options: [
            "A. Adequacy of financial statement disclosure.",
            "B. Existence of specific errors or omissions.",
            "C. Overall reasonableness of statement contents.",
            "D. Use of an erroneous cutoff date."
        ],
        answer: "C",
        explanation: "Period-to-period comparisons primarily assess the overall reasonableness of financial statement contents."
    },
    {
        id: 33,
        question: "An analytical review of transaction codes and materials used would primarily aim to",
        options: [
            "A. Provide information about overstocked inventory items.",
            "B. Reveal shortages in perpetual inventory records.",
            "C. Determine whether inventory items are properly valued.",
            "D. Identify possible material lost due to employee theft."
        ],
        answer: "D",
        explanation: "Analytical procedures help identify unusual discrepancies that may indicate fraud such as employee theft."
    },
    {
        id: 34,
        question: "Analytical review would not be preferred to verify operating expenses if",
        options: [
            "A. There are strong indicators of specific fraud involving these accounts.",
            "B. Operations are stable.",
            "C. The auditor wants to identify unusual transactions.",
            "D. Operating expenses vary relative to each other."
        ],
        answer: "A",
        explanation: "If fraud is suspected, more direct audit procedures are required rather than analytical review."
    },
    {
        id: 35,
        question: "An inexperienced auditor noted a significant variance. The senior dismissed it based on hearsay. The most appropriate action is that the senior should have",
        options: [
            "A. Let the junior fully investigate alone.",
            "B. Properly curtailed unnecessary investigation.",
            "C. Halted the engagement.",
            "D. Helped formulate a plan to gather appropriate information."
        ],
        answer: "D",
        explanation: "Unexpected variances require proper evaluation and additional evidence gathering."
    },
    {
        id: 36,
        question: "After finding pension fund income substantially less than expected, the auditor should next",
        options: [
            "A. Inquire of the CFO.",
            "B. Prepare a more detailed income estimate using external dividend and interest data.",
            "C. Report suspected fraud immediately.",
            "D. Trace entries to the cash journal."
        ],
        answer: "B",
        explanation: "The auditor should refine the analytical estimate before discussing concerns or escalating."
    },
    {
        id: 37,
        question: "Unusual cycle count adjustments in the machining department should lead the auditor to",
        options: [
            "A. Investigate transaction controls in that department.",
            "B. Do no further work.",
            "C. Notify management of suspected fraud immediately.",
            "D. Review next year."
        ],
        answer: "A",
        explanation: "Unexpected results should be promptly investigated to assess control adequacy."
    },
    {
        id: 38,
        question: "In investigating unusual maintenance costs, which procedures should have highest priority?",
        options: [
            "A. 1, 6, and 4.",
            "B. 4, 5, and 6.",
            "C. 6, 5, and 1.",
            "D. 2, 3, and 4."
        ],
        answer: "B",
        explanation: "Verifying whether vehicles were actually out of service and coordinating with authorities provides stronger fraud evidence."
    },
    {
        id: 39,
        question: "After unsatisfactory explanations regarding auger expenses, the most appropriate action is to",
        options: [
            "A. Defer reporting.",
            "B. Expand observation of receipts.",
            "C. Report observations and recommend investigation.",
            "D. Report to construction manager and insist on controls."
        ],
        answer: "C",
        explanation: "Unexplained analytical results indicating potential fraud must be reported to senior management."
    },
    {
        id: 40,
        question: "A significant unexplained increase in gross margin is most likely caused by",
        options: [
            "A. More competitors.",
            "B. Fewer suppliers.",
            "C. Overstatement of ending inventory.",
            "D. Understatement of accounts receivable."
        ],
        answer: "C",
        explanation: "Overstating ending inventory understates cost of sales and increases gross margin."
    },
    {
        id: 41,
        question: "Which result suggests obsolete merchandise?",
        options: [
            "A. Decrease in inventory turnover rate.",
            "B. Decrease in gross profit ratio.",
            "C. Decrease in inventory to accounts payable ratio.",
            "D. Decrease in inventory to accounts receivable ratio."
        ],
        answer: "A",
        explanation: "A declining turnover rate suggests excess or obsolete inventory."
    },
    {
        id: 42,
        question: "Inventory turnover analysis is useful in identifying",
        options: [
            "A. Market demand issues.",
            "B. Purchasing problems.",
            "C. Obsolete inventory.",
            "D. All of the answers are correct."
        ],
        answer: "D",
        explanation: "Inventory turnover can reveal demand issues, purchasing problems, and obsolescence."
    },
    {
        id: 43,
        question: "A decreasing accounts receivable turnover is most likely caused by",
        options: [
            "A. Increased cash discounts.",
            "B. Liberalized credit policy.",
            "C. Shorter due dates.",
            "D. Increased cash sales."
        ],
        answer: "B",
        explanation: "Liberal credit policies increase receivables and decrease turnover."
    },
    {
        id: 44,
        question: "Based on meter replacement results below goal, the auditor should conclude",
        options: [
            "A. Standards are met.",
            "B. Corrective action taken.",
            "C. Deviations should be analyzed and corrected.",
            "D. Replace meters every 3 years."
        ],
        answer: "C",
        explanation: "Failure to meet goals requires corrective action and analysis."
    },
    {
        id: 45,
        question: "Based on unmetered water data returning to standard in Month 3, the auditor concludes",
        options: [
            "A. Standards are met.",
            "B. Further investigation is not warranted.",
            "C. Deviation was not corrected.",
            "D. Standard should change."
        ],
        answer: "B",
        explanation: "Return to acceptable level suggests deviation was corrected."
    },
    {
        id: 46,
        question: "Inventory turnover below 3.5 justifies which conclusion?",
        options: [
            "A. 1 and 3 only.",
            "B. 2 only.",
            "C. 1, 2, and 3.",
            "D. None of the answers are correct."
        ],
        answer: "D",
        explanation: "Turnover alone is insufficient to conclude obsolescence or misvaluation."
    },
    {
        id: 47,
        question: "All are plausible explanations for declining receivable turnover except",
        options: [
            "A. Fictitious sales recorded.",
            "B. Ineffective credit procedures.",
            "C. Understated bad debt allowance.",
            "D. Overstated sales returns."
        ],
        answer: "D",
        explanation: "Overstated returns would reduce receivables, not increase them."
    },
    {
        id: 48,
        question: "Which procedure provides least information about increased loan risk?",
        options: [
            "A. Compare interest income with peers.",
            "B. Compare loan samples across years.",
            "C. Chart interest income over 10 years.",
            "D. Multiple regression time-series analysis."
        ],
        answer: "C",
        explanation: "Trend alone ignores other influencing factors."
    },
    {
        id: 49,
        question: "Best way to assess advertising impact on fall sales is",
        options: [
            "A. Regression with advertising budget.",
            "B. Customer surveys.",
            "C. Same-store sales comparison with prior falls.",
            "D. Single-year trend."
        ],
        answer: "C",
        explanation: "Comparing similar seasonal periods gives best evidence."
    },
    {
        id: 50,
        question: "Which conclusions are justified?",
        options: [
            "A. 1 only.",
            "B. 1 and 2 only.",
            "C. 3 only.",
            "D. 1 and 3 only."
        ],
        answer: "D",
        explanation: "Average price increased each year and sales associates correlate with total sales."
    },
    {
        id: 51,
        question: "Strongest fraud indicator combination is",
        options: [
            "A. Sales increase and turnover.",
            "B. Gross margin and sales returns.",
            "C. Turnover and returns.",
            "D. Sales increase and gross margin."
        ],
        answer: "B",
        explanation: "Fictitious sales inflate gross margin and increase returns."
    },
    {
        id: 52,
        question: "Frank’s dilemma was least likely caused by",
        options: [
            "A. Not rotating engagements.",
            "B. Close personal relationship.",
            "C. Wrong analytical procedures.",
            "D. Accepting management explanations."
        ],
        answer: "C",
        explanation: "Proper procedures were applied but explanations were accepted without further testing."
    },
    {
        id: 53,
        question: "Unexpected decrease in which ratio indicates fictitious inventory?",
        options: [
            "A. Average collection period.",
            "B. Total asset turnover.",
            "C. Price-earnings ratio.",
            "D. Current ratio."
        ],
        answer: "B",
        explanation: "Inflated inventory increases total assets and lowers asset turnover."
    },
    {
        id: 54,
        question: "Workpapers should support conclusions primarily to",
        options: [
            "A. Support financial budget.",
            "B. Facilitate quality assurance reviews.",
            "C. Control workpapers.",
            "D. Allow audit committee review."
        ],
        answer: "B",
        explanation: "They enable supervisory and quality assurance review."
    },
    {
        id: 55,
        question: "A workpaper is complete when it",
        options: [
            "A. Meets format requirements.",
            "B. Contains all observation attributes.",
            "C. Is clear and concise.",
            "D. Satisfies the engagement objective."
        ],
        answer: "D",
        explanation: "Completeness is determined by achieving engagement objectives."
    },
    {
        id: 56,
        question: "Workpapers are prepared primarily for the benefit of",
        options: [
            "A. External auditor.",
            "B. Internal audit activity.",
            "C. Engagement client.",
            "D. Senior management."
        ],
        answer: "B",
        explanation: "They support the internal audit function’s conclusions."
    },
    {
        id: 57,
        question: "Primary purpose of payroll workpaper is to",
        options: [
            "A. Record payroll data to support recommendations.",
            "B. Verify auditor’s work.",
            "C. List employees.",
            "D. Support payroll taxes."
        ],
        answer: "A",
        explanation: "Workpapers document analyses supporting conclusions."
    },
    {
        id: 58,
        question: "Standardized workpapers allow preparation more",
        options: [
            "A. Efficiently.",
            "B. Professionally.",
            "C. Neatly.",
            "D. Accurately."
        ],
        answer: "A",
        explanation: "Standardization improves efficiency and consistency."
    },
    {
        id: 59,
        question: "Permanent file should include",
        options: [
            "A. Program documentation.",
            "B. Auditor test printouts.",
            "C. Revised prior-year workpapers.",
            "D. Administrative controls over computer operations."
        ],
        answer: "D",
        explanation: "Permanent files contain information relevant to continuing engagements."
    },
    {
        id: 60,
        question: "Primary purpose of indexing workpapers is to",
        options: [
            "A. Permit cross-referencing and simplify review.",
            "B. Support final communication.",
            "C. Eliminate follow-up.",
            "D. Ensure adequate support."
        ],
        answer: "A",
        explanation: "Indexing facilitates cross-referencing and supervisory review."
    },

    {
        "id": 61,
        "question": "Which of the following conditions constitutes inappropriate preparation of workpapers?",
        "options": [
            "A. All forms and directives used by the engagement client are included in the workpapers.",
            "B. Flowcharts are included in the workpapers.",
            "C. Engagement observations are cross-referenced to supporting documentation.",
            "D. Tick marks are explained in notes."
        ],
        "answer": "A",
        "explanation": "Workpapers should include only information that is material and relevant to the engagement; including all forms and directives regardless of relevance is inappropriate."
    },
    {
        "id": 62,
        "question": "Which type of workpaper summary is typically used to consolidate numerical data scattered among several schedules?",
        "options": [
            "A. Statistical summaries.",
            "B. Segment summaries.",
            "C. Results summaries.",
            "D. Pyramid summaries."
        ],
        "answer": "A",
        "explanation": "A statistical summary condenses related numerical information from engagement work programs for easier analysis and review."
    },
    {
        "id": 63,
        "question": "A deficiency in this workpaper is that",
        "options": [
            "A. A standardized cash reconciliation workpaper was not used.",
            "B. All verification symbols were not properly explained.",
            "C. Analytical review procedures were not performed.",
            "D. Cross-referencing of workpapers was not accomplished."
        ],
        "answer": "B",
        "explanation": "Verification symbols (tick marks) should be adequately explained; the workpaper failed to describe the procedures for tick mark (c)."
    },
    {
        "id": 64,
        "question": "Which of the following concepts distinguishes the retention of computerized audit documentation from the traditional hard copy form?",
        "options": [
            "A. Analyses, conclusions, and recommendations are filed on electronic media and are therefore subject to computer system controls and security procedures.",
            "B. Evidential support for all findings is copied and provided to local management during the closing conference and to each person receiving the final report.",
            "C. Computerized data files can be used in computer audit procedures.",
            "D. Audit programs can be standardized to eliminate the need for a preliminary survey at each location."
        ],
        "answer": "A",
        "explanation": "The primary distinction is that electronic audit documentation is stored on electronic media and is subject to system controls and security procedures, unlike hard copies."
    },
    {
        "id": 65,
        "question": "Which of the following actions constitutes a violation of the confidentiality concept regarding workpapers? An internal auditor",
        "options": [
            "A. Takes workpapers to his or her hotel room overnight.",
            "B. Shows workpapers on occasion to engagement clients.",
            "C. Allows the external auditor to copy workpapers.",
            "D. Misplaces workpapers occasionally."
        ],
        "answer": "D",
        "explanation": "Misplacing workpapers breaches confidentiality as the internal audit activity controls access to workpapers and they should only be available to authorized personnel."
    },
    {
        "id": 66,
        "question": "Workpapers contain a record of engagement work performed and much confidential information. They are the property of the organization and remain under control of the internal audit activity. Which of the following is the most important control requirement for workpapers?",
        "options": [
            "A. Allow access to workpapers only to internal audit activity personnel.",
            "B. Provide for the protection of workpapers at all times and to the extent appropriate.",
            "C. Make the administrative section of the internal audit activity responsible for the security of workpapers.",
            "D. Purge workpapers periodically of materials that are considered confidential."
        ],
        "answer": "B",
        "explanation": "The most important control is ensuring workpapers are always protected against loss, theft, or damage, whether in the field or in storage."
    },
    {
        "id": 67,
        "question": "A fire destroyed a large portion of an organization’s inventory. Management is filing an insurance claim and needs to use the internal auditors’ workpapers in preparing the claim. Management",
        "options": [
            "A. May not use the workpapers in preparing the claim.",
            "B. May use the workpapers in preparing the claim, but such use should be approved by the chief audit executive.",
            "C. Should be precluded from preparing the claim, and this function should be performed by the internal audit activity.",
            "D. May use the workpapers in preparing the claim, but such use should be approved by the organization’s external auditors."
        ],
        "answer": "B",
        "explanation": "Management may use internal audit workpapers for insurance claims or other business purposes, but only with approval from the chief audit executive."
    },
    {
        "id": 68,
        "question": "The internal auditor is most likely to make workpapers available to the engagement client when",
        "options": [
            "A. Fraud is suspected.",
            "B. The internal auditors have recorded specific damaging comments.",
            "C. The internal auditor considers the content noncontroversial.",
            "D. Engagement client comments are needed to evaluate significance and accuracy."
        ],
        "answer": "D",
        "explanation": "Workpapers may be shared with the engagement client to verify accuracy and significance, provided engagement objectives are not compromised."
    },
    {
        "id": 69,
        "question": "Workpapers should be disposed of when they are of no further use. Retention policies must",
        "options": [
            "A. Specify a minimum retention period of 3 years.",
            "B. Be prepared by the audit committee.",
            "C. Be approved by legal counsel.",
            "D. Be approved by the external auditor."
        ],
        "answer": "C",
        "explanation": "Retention requirements should align with organizational and legal requirements; approval by legal counsel is appropriate."
    },
    {
        "id": 70,
        "question": "When current-file workpapers are no longer of use to the internal audit activity, they should be",
        "options": [
            "A. Destroyed.",
            "B. Placed in the custody of the organizational legal department for safekeeping.",
            "C. Transferred to the permanent file.",
            "D. Transferred to the custody of the engagement client for ease of future records."
        ],
        "answer": "A",
        "explanation": "Workpapers that have served their purpose should be destroyed; only parts with continuing value are retained or transferred."
    },
    {
        "id": 71,
        "question": "The best description of the principal purpose for retaining workpapers is to",
        "options": [
            "A. Help perform the engagement in an orderly fashion.",
            "B. Maintain the engagement work program for reuse in the next engagement.",
            "C. Provide support for the final engagement communication.",
            "D. Provide a basis for supervisory review."
        ],
        "answer": "C",
        "explanation": "The principal purpose of retaining workpapers is to support engagement results and conclusions as presented in the final communication."
    },
    {
        "id": 72,
        "question": "Engagement workpapers are reviewed to ensure that",
        "options": [
            "A. They are properly cross-referenced to the engagement communications.",
            "B. No issues are open at the conclusion of the field work.",
            "C. They meet or exceed the work standards of the organization’s external auditors.",
            "D. They are properly referenced for easy follow-up within the next year."
        ],
        "answer": "B",
        "explanation": "Review ensures that workpapers support engagement communications and that all necessary audit procedures have been completed."
    },
    {
        "id": 73,
        "question": "During the workpaper review, an internal auditing supervisor finds that the internal auditor’s observations are not adequately cross-referenced to supporting documentation. The supervisor will most likely instruct the internal auditor to",
        "options": [
            "A. Prepare a workpaper to indicate that the full scope of the engagement was carried out.",
            "B. Familiarize himself or herself with the sequence of workpapers so that (s)he will be able to answer questions about the conclusions stated in the final engagement communication.",
            "C. Eliminate any cross-references to other workpapers because the system is unclear.",
            "D. Provide a cross-referencing system that shows the relationship among observations, conclusions, recommendations, and the related facts."
        ],
        "answer": "D",
        "explanation": "Cross-referencing ensures that observations, conclusions, and recommendations are clearly linked to supporting documentation, facilitating review and final communication."
    },
    {
        "id": 74,
        "question": "Which of the following workpaper types is used to summarize significant accounting estimates made by management?",
        "options": [
            "A. Statistical summary.",
            "B. Analytical review summary.",
            "C. Segment summary.",
            "D. Summary of estimates."
        ],
        "answer": "D",
        "explanation": "A summary of estimates consolidates management’s significant accounting estimates, providing a clear reference for review."
    },
    {
        "id": 75,
        "question": "Which workpaper is prepared to ensure that engagement objectives are met and that audit steps are performed in an orderly and complete manner?",
        "options": [
            "A. Planning workpaper.",
            "B. Completion checklist.",
            "C. Analytical review summary.",
            "D. Statistical summary."
        ],
        "answer": "B",
        "explanation": "A completion checklist ensures that all audit procedures are performed, engagement objectives are achieved, and documentation is complete."
    },
    {
        "id": 76,
        "question": "Which of the following is the most important reason for cross-referencing workpapers?",
        "options": [
            "A. To reduce the size of the workpaper file.",
            "B. To link observations to supporting evidence and conclusions.",
            "C. To make workpapers more attractive for management review.",
            "D. To comply with external auditors’ standards."
        ],
        "answer": "B",
        "explanation": "Cross-referencing ensures clarity, traceability, and support for audit conclusions and observations."
    },
    {
        "id": 77,
        "question": "Which of the following is the best method for controlling access to computerized workpapers?",
        "options": [
            "A. Password-protected electronic storage.",
            "B. Sharing copies with all engagement clients.",
            "C. Printing workpapers for field use.",
            "D. Saving workpapers on unencrypted shared drives."
        ],
        "answer": "A",
        "explanation": "Electronic workpapers should be password-protected and secured to prevent unauthorized access."
    },
    {
        "id": 78,
        "question": "Which of the following actions regarding workpapers is considered a violation of the internal audit confidentiality concept?",
        "options": [
            "A. Allowing access to authorized internal audit personnel only.",
            "B. Discussing workpaper content with external auditors under supervision.",
            "C. Sharing workpapers with unauthorized personnel.",
            "D. Using workpapers to support the final engagement communication."
        ],
        "answer": "C",
        "explanation": "Sharing workpapers with unauthorized personnel violates confidentiality rules."
    },
    {
        "id": 79,
        "question": "Retention of workpapers is primarily required to",
        "options": [
            "A. Provide support for audit conclusions and engagement communications.",
            "B. Avoid legal action against auditors.",
            "C. Serve as a training tool for new employees.",
            "D. Replace the need for supervisory review."
        ],
        "answer": "A",
        "explanation": "The main purpose of retaining workpapers is to document and support the conclusions reached during the audit."
    },
    {
        "id": 80,
        "question": "Electronic workpapers differ from traditional hardcopy workpapers primarily because",
        "options": [
            "A. They do not require cross-referencing.",
            "B. They are subject to computer system controls and security procedures.",
            "C. They can be shared freely with engagement clients.",
            "D. They eliminate the need for audit supervision."
        ],
        "answer": "B",
        "explanation": "Electronic workpapers are stored on computer systems and therefore require proper system controls and security."
    },
    {
        "id": 81,
        "question": "Which workpaper provides a condensed record of all findings, recommendations, and conclusions for management review?",
        "options": [
            "A. Statistical summary.",
            "B. Segment summary.",
            "C. Results summary.",
            "D. Analytical review summary."
        ],
        "answer": "C",
        "explanation": "The results summary condenses key findings, conclusions, and recommendations for management or supervisory review."
    },
    {
        "id": 82,
        "question": "If management requests workpapers for business purposes, the internal auditor should",
        "options": [
            "A. Refuse to provide any information.",
            "B. Provide workpapers only with approval of the chief audit executive.",
            "C. Share them freely with the management.",
            "D. Only provide copies to external auditors."
        ],
        "answer": "B",
        "explanation": "Management may use workpapers for business purposes, but approval from the chief audit executive is required."
    },
    {
        "id": 83,
        "question": "The internal auditor is reviewing workpapers prepared by a colleague. Observations are not clearly linked to supporting documents. The appropriate corrective action is to",
        "options": [
            "A. Ignore the deficiency as insignificant.",
            "B. Provide a cross-referencing system connecting observations, conclusions, and evidence.",
            "C. Reword the observations to make them more concise.",
            "D. Destroy the workpaper and recreate it."
        ],
        "answer": "B",
        "explanation": "Proper cross-referencing ensures that each observation is traceable to supporting evidence and conclusions."
    },
    {
        "id": 84,
        "question": "Analytical review summaries are primarily used to",
        "options": [
            "A. Present statistical findings in numerical form.",
            "B. Evaluate financial relationships and trends to identify unusual variations.",
            "C. Replace the need for completion checklists.",
            "D. Summarize engagement objectives for management."
        ],
        "answer": "B",
        "explanation": "Analytical review summaries highlight unusual fluctuations or relationships in financial data to aid audit analysis."
    },
    {
        "id": 85,
        "question": "A permanent file of workpapers would most likely contain",
        "options": [
            "A. Specific audit observations for the current engagement.",
            "B. Organizational charts, bylaws, and long-term agreements.",
            "C. Daily engagement field notes.",
            "D. Tick mark explanations for the current engagement."
        ],
        "answer": "B",
        "explanation": "Permanent files include reference materials that are relevant over multiple engagements."
    },
    {
        "id": 86,
        "question": "Which of the following is a key reason for retaining computerized workpapers rather than destroying them immediately?",
        "options": [
            "A. To comply with legal and regulatory retention requirements.",
            "B. To make space for new electronic files.",
            "C. To avoid system security procedures.",
            "D. To eliminate cross-referencing requirements."
        ],
        "answer": "A",
        "explanation": "Retention ensures that legal, regulatory, and organizational requirements for maintaining audit documentation are met."
    },
    {
        "id": 87,
        "question": "Internal auditors may provide copies of workpapers to external auditors",
        "options": [
            "A. Without restriction.",
            "B. Only under confidentiality agreements or approval from the chief audit executive.",
            "C. Only for financial statement audits.",
            "D. Only after the engagement client approves."
        ],
        "answer": "B",
        "explanation": "Sharing workpapers with external auditors requires confidentiality safeguards and approval by the chief audit executive."
    },
    {
        "id": 88,
        "question": "Which of the following workpapers is least likely to be included in a current-file engagement documentation?",
        "options": [
            "A. Statistical summaries of current year transactions.",
            "B. Field notes and schedules for the current audit.",
            "C. Copies of prior year organizational charts.",
            "D. Analytical review results for the current engagement."
        ],
        "answer": "C",
        "explanation": "Prior year organizational charts are typically part of the permanent file, not current-file workpapers."
    },
    {
        "id": 89,
        "question": "Engagement workpapers should always include",
        "options": [
            "A. Every piece of information related to the organization.",
            "B. Only information relevant to the engagement objectives.",
            "C. Confidential client information regardless of relevance.",
            "D. Personal notes of the auditor."
        ],
        "answer": "B",
        "explanation": "Workpapers should be relevant, sufficient, and appropriate to support engagement objectives."
    },
    {
        "id": 90,
        "question": "Which of the following ensures that the workpapers are prepared and reviewed consistently?",
        "options": [
            "A. Standardized audit programs and procedures.",
            "B. Sharing all workpapers with engagement clients.",
            "C. Destroying workpapers after completion.",
            "D. Avoiding cross-references between documents."
        ],
        "answer": "A",
        "explanation": "Standardized programs and procedures help maintain consistency and quality in audit documentation."
    },
    {
        "id": 91,
        "question": "Which of the following best describes the use of tick marks in workpapers?",
        "options": [
            "A. To indicate approval by management.",
            "B. To symbolize the performance of specific audit procedures and cross-reference supporting documents.",
            "C. To highlight errors for external auditors.",
            "D. To decorate workpapers for presentation."
        ],
        "answer": "B",
        "explanation": "Tick marks show which procedures have been performed and help cross-reference observations to evidence."
    },
    {
        "id": 92,
        "question": "Which workpaper serves as a bridge between detailed schedules and the final engagement communication?",
        "options": [
            "A. Segment summary.",
            "B. Analytical review summary.",
            "C. Results summary.",
            "D. Permanent file reference."
        ],
        "answer": "C",
        "explanation": "The results summary consolidates detailed findings into a concise format to support the final engagement report."
    },
    {
        "id": 93,
        "question": "Internal auditors must retain workpapers to",
        "options": [
            "A. Facilitate training for new auditors.",
            "B. Support engagement conclusions and facilitate quality reviews.",
            "C. Provide all organizational records to management.",
            "D. Reduce audit costs."
        ],
        "answer": "B",
        "explanation": "Retention ensures that documentation exists to support conclusions and allow supervisory or external review."
    },
    {
        "id": 94,
        "question": "Which of the following best describes the principal distinction between current-file and permanent-file workpapers?",
        "options": [
            "A. Current-file workpapers relate to the current engagement, permanent-file workpapers contain long-term reference information.",
            "B. Current-file workpapers are confidential; permanent-file workpapers are public.",
            "C. Current-file workpapers are only electronic; permanent-file workpapers are only hardcopy.",
            "D. Current-file workpapers require supervisory review; permanent-file workpapers do not."
        ],
        "answer": "A",
        "explanation": "Current-file workpapers document procedures for the current engagement, while permanent files provide reference information for multiple engagements."
    },
    {
        "id": 95,
        "question": "Which of the following is the most important control when using computerized audit documentation?",
        "options": [
            "A. Frequent printing of electronic files.",
            "B. Limiting access, implementing security controls, and protecting against unauthorized modification.",
            "C. Sharing files with all engagement personnel.",
            "D. Reducing retention periods to save storage space."
        ],
        "answer": "B",
        "explanation": "Computerized workpapers require proper access controls, security procedures, and protection against unauthorized changes to ensure integrity and confidentiality."
    },
    {
        "id": 96,
        "question": "An internal auditing manager is leading a three-person auditing team assigned to an assurance engagement at airport rental locations for a car rental company. All team members are experienced. In planning her own work schedule, the manager believes that it will be necessary to allow time to supervise the team during the execution phase, the planning process, and the drafting of the internal audit report. Is the manager taking the correct approach? Why?",
        "options": [
            "A. No. Once planning is completed, the most critical supervisory task is review of workpapers.",
            "B. No. When a team is experienced, supervision throughout the engagement is an unnecessary expense for the function.",
            "C. Yes. All engagements should be closely supervised in the same manner.",
            "D. Yes. Supervisory decisions must be made during all phases of the internal audit, regardless of the experience level of the team members."
        ],
        "answer": "D",
        "explanation": "All engagements must be supervised properly to ensure objectives are achieved, quality is assured, and staff is developed. These responsibilities require attention throughout the engagement. Thus, supervisory decisions must be made during all phases of the internal audit."
    },
    {
        "id": 97,
        "question": "Which of the following is(are) true about engagement supervision?\n1. Specific activities are prescribed in the Standards.\n2. The extent varies depending on the proficiency of the internal auditors.\n3. The extent varies depending on the complexity of the engagement.\n4. The lead auditor has primary responsibility for supervision.",
        "options": [
            "A. 1 only.",
            "B. 1 and 3 only.",
            "C. 1 and 4 only.",
            "D. 1, 2, and 3 only."
        ],
        "answer": "D",
        "explanation": "The extent of supervision required depends on the proficiency and experience of internal auditors and the complexity of the engagement. The chief audit executive (CAE) has primary responsibility, but may delegate responsibility to appropriately experienced members of the internal audit activity."
    },
    {
        "id": 98,
        "question": "A new staff auditor was told to perform an audit in an area with which the auditor was not familiar. Due to time constraints, the audit was not supervised. The auditor was given the assignment because it represented a good learning experience, but the area was clearly beyond the auditor’s competence. Nevertheless, the auditor prepared comprehensive workpapers and reported the results to management. In this situation,",
        "options": [
            "A. The audit department violated the Standards by not providing adequate supervision.",
            "B. The audit department violated the Standards by hiring an auditor without proficiency in the area.",
            "C. The chief audit executive (CAE) has not violated the Standards because they do not address supervision.",
            "D. The Standards and the Code of Ethics were followed by the audit department."
        ],
        "answer": "A",
        "explanation": "The extent of supervision required depends on the proficiency and experience of internal auditors and the complexity of the engagement. Because the auditor lacked adequate proficiency, supervision was required. Without adequate supervision, the Standards were violated."
    },
    {
        "id": 99,
        "question": "When conducting a performance appraisal of an internal auditor who has been a below-average performer, an inappropriate procedure is to",
        "options": [
            "A. Notify the internal auditor of the upcoming appraisal several days in advance.",
            "B. Use objective, impartial language.",
            "C. Use generalizations.",
            "D. Document the appraisal."
        ],
        "answer": "C",
        "explanation": "In a performance appraisal of a below-average performer, it is appropriate to notify the employee of the upcoming appraisal, use objective language, and document the appraisal. It is not appropriate to use generalizations; specific information and evidence must be cited."
    },
    {
        "id": 100,
        "question": "An internal auditor notices that a particular supervisor’s performance appraisal ratings for any given subordinate tend to be consistently high, consistently low, or consistently in the middle across all performance dimensions. Which one of the following is the best conclusion to draw based on this observation?",
        "options": [
            "A. The way individuals are rated may be systematically biased.",
            "B. The performance appraisal forms probably have too many leading questions.",
            "C. This supervisor is trying too hard to treat everyone the same.",
            "D. This supervisor is too lenient in performance ratings."
        ],
        "answer": "A",
        "explanation": "If an employee’s performance appraisal of any given subordinate tends to be consistently high, low, or in the middle across performance dimensions, a halo bias may exist in the ratings. The halo effect generalizes perception of one trait to others."
    }
]
