export interface Question {
    id: number;
    question: string;
    options: string[];
    solution: string;
    explication: string;
}

export const questions: Question[] = [
    {
        "id": 1,
        "question": "Internal auditing is an assurance and consulting activity. An example of an assurance service is a(n)",
        "options": {
            "A": "Advisory engagement.",
            "B": "Facilitation engagement.",
            "C": "Training engagement.",
            "D": "Compliance engagement."
        },
        "correctAnswer": "D",
        "explanation": "Un service d’assurance consiste en un examen objectif des preuves afin de fournir une évaluation indépendante des processus de gouvernance, de gestion des risques et de contrôle. Un engagement de conformité est un exemple typique de mission d’assurance."
    },
    {
        "id": 2,
        "question": "Which of the following potentially are subject to the internal auditors’ evaluations? 1. The human resources function. 2. The purchasing process. 3. The manufacturing and production database system.",
        "options": {
            "A": "1 only.",
            "B": "2 only.",
            "C": "1, 2, and 3.",
            "D": "None of the answers are correct."
        },
        "correctAnswer": "C",
        "explanation": "L’audit interne peut évaluer toute fonction ou processus de l’organisation, y compris les ressources humaines, les achats et les systèmes de production."
    },
    {
        "id": 3,
        "question": "What is the most accurate term for the procedures used by the board to oversee activities performed to achieve organizational objectives?",
        "options": {
            "A": "Governance.",
            "B": "Control.",
            "C": "Risk management.",
            "D": "Monitor."
        },
        "correctAnswer": "A",
        "explanation": "La gouvernance est l’ensemble des processus et structures mis en place par le conseil pour orienter et surveiller l’organisation afin d’atteindre ses objectifs."
    },
    {
        "id": 4,
        "question": "A basic principle of governance is",
        "options": {
            "A": "Assessment of the governance process by an independent internal audit activity.",
            "B": "Holding the board, senior management, and the internal audit activity accountable for its effectiveness.",
            "C": "Exclusive use of external auditors to provide assurance about the governance process.",
            "D": "Separation of governance from promoting an ethical culture."
        },
        "correctAnswer": "A",
        "explanation": "L’audit interne doit évaluer le processus de gouvernance et formuler des recommandations pour son amélioration."
    },
    {
        "id": 5,
        "question": "Internal audit is better able to perform a cost-effectiveness engagement because",
        "options": {
            "A": "External auditors may not possess the same depth of understanding of the organization.",
            "B": "Internal auditors are required to be objective.",
            "C": "Internal procedures differ from external procedures.",
            "D": "Internal auditors are not concerned with fraud and waste."
        },
        "correctAnswer": "A",
        "explanation": "L’audit interne possède une connaissance approfondie des opérations de l’organisation, ce qui lui permet d’évaluer plus efficacement la rentabilité."
    },
    {
        "id": 6,
        "question": "Which request is within the normal scope of internal audit work?",
        "options": {
            "A": "Evaluate management’s planning process.",
            "B": "Negotiate financing alternatives with banks.",
            "C": "Analyze financing alternatives and present to audit committee.",
            "D": "Undertake a make-or-buy decision."
        },
        "correctAnswer": "A",
        "explanation": "L’audit interne peut évaluer les processus de planification de la direction, mais ne prend pas de décisions opérationnelles ou financières."
    },
    {
        "id": 7,
        "question": "Control by management is the result of",
        "options": {
            "A": "Planning, organizing, and directing activities.",
            "B": "Setting standards and comparing outcomes.",
            "C": "Authorizing and monitoring performance.",
            "D": "Determining efficiency of operations."
        },
        "correctAnswer": "A",
        "explanation": "Le contrôle est le résultat de la planification, de l’organisation et de la direction exercées par la direction."
    },
    {
        "id": 8,
        "question": "Controls should be designed to provide reasonable assurance that",
        "options": {
            "A": "Organizational objectives will be achieved economically and efficiently.",
            "B": "Collusion will not occur.",
            "C": "Internal audit oversight is efficient.",
            "D": "Management processes are evaluated."
        },
        "correctAnswer": "A",
        "explanation": "Les contrôles visent à fournir une assurance raisonnable que les objectifs seront atteints de manière efficace et économique."
    },
    {
        "id": 9,
        "question": "The internal audit activity is responsible for implementing 1. Risk management 2. Governance 3. Control",
        "options": {
            "A": "1 only.",
            "B": "2 only.",
            "C": "3 only.",
            "D": "None of the answers are correct."
        },
        "correctAnswer": "D",
        "explanation": "La mise en œuvre de la gouvernance, de la gestion des risques et du contrôle relève de la direction, pas de l’audit interne."
    },
    {
        "id": 10,
        "question": "When assessing risk, an internal auditor should",
        "options": {
            "A": "Determine how risk should be managed.",
            "B": "Provide assurance on risk management.",
            "C": "Update risk management process.",
            "D": "Design controls."
        },
        "correctAnswer": "B",
        "explanation": "L’audit interne fournit une assurance indépendante sur l’efficacité de la gestion des risques."
    },
    {
        "id": 11,
        "question": "Which item is least likely considered when assessing governance, risk management, and control?",
        "options": {
            "A": "Maturity of processes.",
            "B": "Seniority of responsible persons.",
            "C": "Organizational culture.",
            "D": "Members of the audit committee."
        },
        "correctAnswer": "D",
        "explanation": "Les membres du comité d’audit sont moins susceptibles d’être considérés dans la stratégie d’évaluation que la maturité des processus ou la culture organisationnelle."
    },
    {
        "id": 12,
        "question": "When are governance, risk management, and control processes adequate?",
        "options": {
            "A": "When designed by management to provide reasonable assurance.",
            "B": "When designed to provide absolute assurance.",
            "C": "When designed by internal audit.",
            "D": "When the company is profitable."
        },
        "correctAnswer": "A",
        "explanation": "Ces processus sont adéquats lorsqu’ils sont conçus par la direction pour fournir une assurance raisonnable."
    },
    {
        "id": 13,
        "question": "Most essential for guiding internal audit staff is",
        "options": {
            "A": "Quality program assessments.",
            "B": "Position descriptions.",
            "C": "Performance appraisals.",
            "D": "Policies and procedures."
        },
        "correctAnswer": "D",
        "explanation": "Le responsable de l’audit doit établir des politiques et procédures pour guider l’activité."
    },
    {
        "id": 14,
        "question": "Key factor in HR program success is",
        "options": {
            "A": "Informal development program.",
            "B": "Compensation plan.",
            "C": "Well-developed selection criteria.",
            "D": "Recognition of special interests."
        },
        "correctAnswer": "C",
        "explanation": "La sélection de personnel qualifié repose sur des critères de recrutement bien définis."
    },
    {
        "id": 15,
        "question": "Written policies should",
        "options": {
            "A": "Ensure compliance with standards.",
            "B": "Consider structure and complexity.",
            "C": "Guarantee consistency.",
            "D": "Prescribe communication formats."
        },
        "correctAnswer": "B",
        "explanation": "La forme et le contenu des politiques dépendent de la structure et de la complexité de l’activité."
    },
    {
        "id": 16,
        "question": "Which is not an appropriate staffing issue?",
        "options": {
            "A": "Selecting competent individuals.",
            "B": "Providing competitive employee benefits.",
            "C": "Continuing education.",
            "D": "Annual performance appraisal."
        },
        "correctAnswer": "B",
        "explanation": "La rémunération relève des ressources humaines, pas directement de la gestion technique de l’audit interne."
    },
    {
        "id": 17,
        "question": "Exception to documenting policies relates to",
        "options": {
            "A": "Departmentation.",
            "B": "Division of labor.",
            "C": "Size of the internal audit activity.",
            "D": "Authority."
        },
        "correctAnswer": "C",
        "explanation": "La nécessité de documentation détaillée dépend de la taille et de la complexité de l’activité."
    },
    {
        "id": 18,
        "question": "Which statement is false?",
        "options": {
            "A": "Policies depend on size.",
            "B": "All activities must have detailed manuals.",
            "C": "Formal manuals may not always be needed.",
            "D": "Small activities may be managed informally."
        },
        "correctAnswer": "B",
        "explanation": "Toutes les activités d’audit interne ne nécessitent pas un manuel détaillé."
    },
    {
        "id": 19,
        "question": "Policies for large internal audit activities should",
        "options": {
            "A": "Define scope.",
            "B": "Contain authority.",
            "C": "Be specific as to activities.",
            "D": "Be in considerable detail."
        },
        "correctAnswer": "D",
        "explanation": "Les grandes structures nécessitent des politiques plus détaillées."
    },
    {
        "id": 20,
        "question": "Most practical guidance for a newly acquired small internal audit activity?",
        "options": {
            "A": "Select key procedures and use informal supervision.",
            "B": "Use informal supervision only.",
            "C": "Use the complete existing manual.",
            "D": "Adopt old procedures."
        },
        "correctAnswer": "A",
        "explanation": "Il est préférable d’adapter les procédures clés du manuel existant tout en gardant une gestion informelle adaptée à la petite taille."
    },
    {
        "id": 21,
        "question": "Which of the following, though not appropriate for use with a large internal audit activity, is an acceptable approach for managing a small internal audit activity?",
        "options": {
            "A": "Preparing comprehensive policies and procedures.",
            "B": "Writing detailed instructions and guidelines for each engagement area.",
            "C": "Using only daily, close supervision and written memoranda.",
            "D": "Developing technical manuals to guide performance."
        },
        "correctAnswer": "C",
        "explanation": "Une petite activité d’audit interne peut être gérée de manière informelle grâce à une supervision quotidienne étroite et des mémorandums écrits, contrairement aux grandes structures qui nécessitent des manuels formels."
    },
    {
        "id": 22,
        "question": "Policies concerning compensation should",
        "options": {
            "A": "Link internal auditors’ compensation to the pay for comparable positions in the controller’s department.",
            "B": "Provide for cost-of-living, longevity, and merit increases annually.",
            "C": "Be informal and as flexible as possible.",
            "D": "Be clearly stated and based on evaluations of position requirements and individual performance."
        },
        "correctAnswer": "D",
        "explanation": "Les politiques de rémunération doivent être formelles, clairement définies et basées sur les exigences du poste et la performance individuelle."
    },
    {
        "id": 23,
        "question": "Inquiring how an employment candidate handled situations in their past is an example of which interview method?",
        "options": {
            "A": "Behavioral.",
            "B": "Stress.",
            "C": "Structured.",
            "D": "Unstructured."
        },
        "correctAnswer": "A",
        "explanation": "L’entretien comportemental repose sur le principe que le comportement passé est un indicateur fiable de la performance future."
    },
    {
        "id": 24,
        "question": "According to the International Professional Practices Framework, the internal audit activity is effectively managed when",
        "options": {
            "A": "Policies are included in the operations manual.",
            "B": "Its members conform with the Code of Ethics and the Standards.",
            "C": "Management oversees daily operations.",
            "D": "It has the necessary skill set."
        },
        "correctAnswer": "B",
        "explanation": "Une activité d’audit interne est efficace lorsqu’elle respecte les Normes et que ses membres se conforment au Code d’éthique."
    },
    {
        "id": 25,
        "question": "Which statement is false regarding administration of the internal audit activity?",
        "options": {
            "A": "Management oversees daily operations.",
            "B": "An audit manager may monitor processes and emerging issues.",
            "C": "The audit committee creates the operating and financial budget.",
            "D": "Selection criteria for hiring should be well-developed."
        },
        "correctAnswer": "C",
        "explanation": "Le budget est préparé par le CAE, puis soumis pour approbation. Il ne relève pas de la responsabilité du comité d’audit."
    },
    {
        "id": 26,
        "question": "Audit committees should be composed of",
        "options": {
            "A": "A rotating subcommittee of the board.",
            "B": "Members from regulatory agencies.",
            "C": "Representatives from all constituencies.",
            "D": "Only external members of the board."
        },
        "correctAnswer": "D",
        "explanation": "Le comité d’audit doit être composé uniquement de membres indépendants de la direction afin de préserver l’indépendance."
    },
    {
        "id": 27,
        "question": "The most important limitation on the effectiveness of audit committees is",
        "options": {
            "A": "Personal and professional friendships with management.",
            "B": "Compensation by the organization.",
            "C": "Focus on external audits only.",
            "D": "Lack of accounting degrees."
        },
        "correctAnswer": "A",
        "explanation": "Les relations personnelles avec la direction peuvent compromettre l’indépendance et limiter l’efficacité du comité."
    },
    {
        "id": 28,
        "question": "The audit committee strengthens control processes by",
        "options": {
            "A": "Assigning IA responsibility for government interaction.",
            "B": "Using the CAE to select external auditors.",
            "C": "Following up on CAE recommendations.",
            "D": "Approving IA policies."
        },
        "correctAnswer": "C",
        "explanation": "Le suivi des recommandations renforce directement l’environnement de contrôle."
    },
    {
        "id": 29,
        "question": "The most significant benefit provided by the audit committee to internal audit is",
        "options": {
            "A": "Protecting independence from management influence.",
            "B": "Reviewing schedules.",
            "C": "Approving staffing.",
            "D": "Reviewing procedures manuals."
        },
        "correctAnswer": "A",
        "explanation": "Le principal rôle du comité d’audit est de garantir l’indépendance de l’audit interne."
    },
    {
        "id": 30,
        "question": "To avoid conflict between CEO and audit committee, the CAE should",
        "options": {
            "A": "Submit all communications to both.",
            "B": "Strengthen independence only.",
            "C": "Discuss all pending communications.",
            "D": "Request board policies defining relationships."
        },
        "correctAnswer": "D",
        "explanation": "Des relations de reporting clairement définies évitent les conflits."
    },
    {
        "id": 31,
        "question": "Which action improves public perception of financial reporting?",
        "options": {
            "A": "Adoption of audit committees composed of outside directors.",
            "B": "Viewing IA as transient profession.",
            "C": "Reporting illegal acts only to CEO.",
            "D": "Separating internal and external audits."
        },
        "correctAnswer": "A",
        "explanation": "Un comité d’audit indépendant renforce la confiance du public."
    },
    {
        "id": 32,
        "question": "Which is not an appropriate audit committee member?",
        "options": {
            "A": "Vice president of local bank.",
            "B": "Academic specializing in business.",
            "C": "Retired executive.",
            "D": "Vice president of operations."
        },
        "correctAnswer": "D",
        "explanation": "Le vice-président des opérations fait partie de la direction et n’est pas indépendant."
    },
    {
        "id": 33,
        "question": "Greatest benefit of audit committee to IA?",
        "options": {
            "A": "Review work programs.",
            "B": "Ensure reliance by external auditor.",
            "C": "Approve communications.",
            "D": "Ensure no scope limitations."
        },
        "correctAnswer": "D",
        "explanation": "Le comité doit s’assurer qu’aucune limitation de portée ne compromet l’audit interne."
    },
    {
        "id": 34,
        "question": "Which is a control weakness?",
        "options": {
            "A": "IS reports to president.",
            "B": "CFO reports to CEO.",
            "C": "Audit committee includes CEO and CFO.",
            "D": "Controller reports to CFO."
        },
        "correctAnswer": "C",
        "explanation": "Le comité d’audit doit être indépendant de la direction."
    },
    {
        "id": 35,
        "question": "Audit committee responsibility regarding IA?",
        "options": {
            "A": "Approve selection/dismissal of CAE.",
            "B": "Develop annual work schedule.",
            "C": "Approve work programs.",
            "D": "Determine engagement observations."
        },
        "correctAnswer": "A",
        "explanation": "Le comité d’audit participe à la nomination ou révocation du CAE pour garantir l’indépendance."
    },
    {
        "id": 36,
        "question": "Why must CAE have direct access to board?",
        "options": {
            "A": "Board are financial experts.",
            "B": "To achieve organizational independence.",
            "C": "Stock exchange requirement.",
            "D": "Build relationships."
        },
        "correctAnswer": "B",
        "explanation": "L’accès direct au conseil garantit l’indépendance organisationnelle."
    },
    {
        "id": 37,
        "question": "Which statement regarding external auditor is true?",
        "options": {
            "A": "Disputes resolved by arbitrator.",
            "B": "Reports reviewed by other firm.",
            "C": "Work overseen by audit committee.",
            "D": "Fee negotiated by officers."
        },
        "correctAnswer": "C",
        "explanation": "Le comité d’audit supervise et examine le travail de l’auditeur externe."
    },
    {
        "id": 38,
        "question": "When determining resource sufficiency, CAE must consider all except",
        "options": {
            "A": "Communication from management and board.",
            "B": "The audit universe.",
            "C": "Knowledge of IA staff.",
            "D": "Consequences of delays."
        },
        "correctAnswer": "B",
        "explanation": "La suffisance des ressources concerne le plan d’audit, pas l’univers d’audit complet."
    },
    {
        "id": 39,
        "question": "If outsourcing IA activity, the organization",
        "options": {
            "A": "Cannot outsource.",
            "B": "Must give control responsibility to external auditor.",
            "C": "Must outsource all to maintain independence.",
            "D": "May outsource but retains responsibility for internal controls."
        },
        "correctAnswer": "D",
        "explanation": "Même en cas d’externalisation, la responsabilité du contrôle interne reste celle de l’organisation."
    },
    {
        "id": 40,
        "question": "Who is primarily responsible for IA resource management?",
        "options": {
            "A": "1 and 2.",
            "B": "2 and 3.",
            "C": "1 only.",
            "D": "1 and 3."
        },
        "correctAnswer": "C",
        "explanation": "Le CAE est principalement responsable de la gestion et de la suffisance des ressources."
    },
    {
        id: 41,
        question: "Which of the following statements about the chief audit executive’s responsibilities for internal audit resources is most accurate?",
        options: {
            A: "The CAE is responsible for ensuring that audit coverage is based on the skills of the internal audit activity.",
            B: "The CAE is responsible for presenting a detailed summary of audit resources to management.",
            C: "The CAE is responsible for the effective deployment of resources to achieve the approved audit plan.",
            D: "The CAE is responsible for administering the organization’s compensation program."
        },
        correctAnswer: "C",
        explanation: "The CAE must ensure that internal audit resources are appropriate, sufficient, and effectively deployed to achieve the approved audit plan."
    },
    {
        id: 42,
        question: "Internal audit resources should be appropriate, sufficient, and effectively deployed. Consequently,",
        options: {
            A: "Resource planning should be limited to expected activities.",
            B: "The chief audit executive should perform a periodic skills assessment.",
            C: "Only members of the internal audit staff should perform internal audit activities.",
            D: "The chief audit executive ultimately must ensure the adequacy of resources."
        },
        correctAnswer: "B",
        explanation: "The CAE should perform a periodic skills assessment to ensure that staff competencies match the needs identified in the risk assessment and audit plan."
    },
    {
        id: 43,
        question: "When determining the number and experience level of an internal audit staff to be assigned to an engagement, the chief audit executive should consider which of the following? 1. Complexity of the engagement. 2. Length of the engagement. 3. Available internal audit activity resources. 4. Lapsed time since the last engagement.",
        options: {
            A: "1 and 2 only.",
            B: "2 and 3 only.",
            C: "1 and 3 only.",
            D: "1, 2, 3, and 4."
        },
        correctAnswer: "C",
        explanation: "The complexity of the engagement and available internal audit resources determine the required experience and skills for staffing decisions."
    },
    {
        id: 44,
        question: "Which of the following statements most accurately reflects the chief audit executive’s responsibilities for internal audit resources?",
        options: {
            A: "The CAE is responsible for ensuring that audit coverage is based on the periodic skills assessment.",
            B: "The CAE is responsible for evaluating the detailed summary of audit resources presented by management to the board.",
            C: "The CAE is not responsible for such human resource functions as evaluation and development.",
            D: "The CAE is responsible for communicating resource needs to the board but has no explicit responsibility for administering the organization’s compensation program."
        },
        correctAnswer: "D",
        explanation: "The CAE communicates resource needs to senior management and the board but is not responsible for administering the organization's compensation program."
    },
    {
        id: 45,
        question: "The most important reason for the chief audit executive to ensure that the internal audit department has adequate and sufficient resources is to",
        options: {
            A: "Ensure that the function is adequately protected from outsourcing.",
            B: "Demonstrate sufficient capability to meet the audit plan requirements.",
            C: "Establish credibility with the audit committee and management.",
            D: "Fulfill the need for effective succession planning."
        },
        correctAnswer: "B",
        explanation: "The CAE must ensure that internal audit resources are sufficient to achieve the approved audit plan."
    },
    {
        id: 46,
        question: "The internal audit activity has recently experienced the departure of two internal auditors who cannot be immediately replaced due to budget constraints. Which of the following is the least desirable option?",
        options: {
            A: "Using self-assessment questionnaires to address audit objectives.",
            B: "Employing information technology in audit planning, sampling, and documentation.",
            C: "Eliminating consulting engagements from the engagement work schedule.",
            D: "Filling vacancies with personnel from operating departments that are not being audited."
        },
        correctAnswer: "C",
        explanation: "Reducing the audit schedule should be a last resort after exploring all other alternatives to manage resource constraints."
    },
    {
        id: 47,
        question: "Which of the following is the least significant issue in determining whether to reallocate audit resources?",
        options: {
            A: "The potential fraud discovered during the operational audit.",
            B: "Potential cost to the organization for noncompliance with new environmental laws and regulations.",
            C: "The knowledge, skills, and competencies of the internal audit staff.",
            D: "The results from the prior financial audits."
        },
        correctAnswer: "D",
        explanation: "Information from unrelated prior financial audits is not relevant when reallocating resources under time constraints."
    },
    {
        id: 48,
        question: "Which of the following is the least appropriate criterion for assigning a staff internal auditor to a specific engagement?",
        options: {
            A: "The staff internal auditor’s desire for training in the area.",
            B: "The complexity of the engagement.",
            C: "The experience level of the internal auditor.",
            D: "Special skills possessed by the staff internal auditor."
        },
        correctAnswer: "A",
        explanation: "Staffing decisions must prioritize engagement needs over personal training preferences."
    },
    {
        id: 49,
        question: "Which of the following should be the most important consideration in making assignments that will allow staff members to develop properly?",
        options: {
            A: "The skills and experience levels of individual auditors.",
            B: "Specific training requirements imposed by the Standards.",
            C: "The importance of giving all staff members extensive supervisory experience.",
            D: "Special interests of individual staff members."
        },
        correctAnswer: "A",
        explanation: "Assignments must align with auditors’ skills and experience to ensure effective development and performance."
    },
    {
        id: 50,
        question: "In selecting an instructional strategy for developing internal audit staff, a chief audit executive begins by reviewing",
        options: {
            A: "Organizational objectives.",
            B: "Learning content.",
            C: "Learners’ readiness.",
            D: "Budget constraints."
        },
        correctAnswer: "A",
        explanation: "Training strategy should begin with organizational objectives to ensure alignment with the approved audit plan."
    },
    {
        id: 51,
        question: "The advantage attributed to the establishment of internal auditing field offices for work at foreign locations is best described as",
        options: {
            A: "The possibility of increased objectivity of personnel assigned to a field office.",
            B: "A reduction of travel time and related travel expense.",
            C: "The increased ease of maintaining uniform organization-wide standards.",
            D: "More contact with senior personnel leading to an increase in control."
        },
        correctAnswer: "B",
        explanation: "Field offices reduce travel time and related expenses while improving service to local operations."
    },
    {
        id: 52,
        question: "According to the International Professional Practices Framework, the CAE must ensure that internal audit resources are",
        options: {
            A: "Relevant, adequate, and practical.",
            B: "Applicable, competent, and well-founded.",
            C: "Appropriate, sufficient, and effectively deployed.",
            D: "Suitable, satisfactory, and competently displayed."
        },
        correctAnswer: "C",
        explanation: "Performance Standard 2030 states that resources must be appropriate, sufficient, and effectively deployed."
    },
    {
        id: 53,
        question: "Internal audit resources are effectively deployed when",
        options: {
            A: "The internal audit staff has the necessary attributes for the planned activities.",
            B: "The resources needed to accomplish the plan are adequate.",
            C: "There are more opportunities to achieve operating benefits for the engagement client.",
            D: "They are used in a way that optimizes the achievement of the approved plan."
        },
        correctAnswer: "D",
        explanation: "Resources are effectively deployed when they optimize achievement of the approved audit plan."
    },
    {
        id: 54,
        question: "In managing internal audit resources, the CAE considers all of the following except",
        options: {
            A: "Benchmarking.",
            B: "Succession planning.",
            C: "Staff evaluation and development.",
            D: "Resourcing needs."
        },
        correctAnswer: "A",
        explanation: "Benchmarking is not a direct component of managing internal audit resources."
    },
    {
        id: 55,
        question: "In addressing internal audit resource needs for a complex engagement, the CAE may include all of the following except",
        options: {
            A: "Other employees of the organization.",
            B: "Members of the audit committee.",
            C: "Specialized consultants.",
            D: "External service providers."
        },
        correctAnswer: "B",
        explanation: "Audit committee members should not be used as internal audit resources."
    },
    {
        id: 56,
        question: "Which of the following is the best source of a chief audit executive’s information for planning staffing requirements?",
        options: {
            A: "Discussions of internal audit needs with senior management and the board.",
            B: "Review of internal audit staff education and training records.",
            C: "Review staff size of similarly sized organizations in the same industry.",
            D: "Interviews with existing internal audit staff."
        },
        correctAnswer: "A",
        explanation: "Senior management and the board ultimately ensure resource sufficiency, making discussions with them the best planning source."
    },
    {
        id: 57,
        question: "What is the primary consideration used when staffing an internal audit activity?",
        options: {
            A: "Background checks.",
            B: "Job descriptions.",
            C: "Continuing education.",
            D: "Organizational orientation."
        },
        correctAnswer: "B",
        explanation: "Properly formulated job descriptions define qualifications and skills required for staffing decisions."
    },
    {
        id: 58,
        question: "By comparing job descriptions with the qualifications and duties of the individuals currently holding those jobs, a manager can",
        options: {
            A: "Complete the human resource planning cycle.",
            B: "Determine whether the organization is appropriately staffed.",
            C: "Forecast future personnel needs.",
            D: "Determine which employees should be promoted."
        },
        correctAnswer: "B",
        explanation: "Comparing job descriptions with actual qualifications helps determine if individuals are appropriately placed."
    },
    {
        id: 59,
        question: "When determining staffing for an engagement, the chief audit executive should consider all of the following except",
        options: {
            A: "Complexity of the engagement.",
            B: "Available internal audit activity resources.",
            C: "Training needs of internal auditors.",
            D: "Lapsed time since the last engagement."
        },
        correctAnswer: "D",
        explanation: "Lapsed time since the last engagement affects scheduling, not staffing decisions."
    },
    {
        id: 60,
        question: "What is the main purpose of continual training in internal auditing?",
        options: {
            A: "To comply with continuing education requirements of professional organizations.",
            B: "To use slack periods in engagement scheduling.",
            C: "To help individuals achieve personal career goals.",
            D: "To achieve both individual and organizational goals."
        },
        correctAnswer: "D",
        explanation: "Training supports both individual development and the effective achievement of organizational audit objectives."
    },
    { "question": 61, "answer": "A", "explanation": "Un manager expérimenté réduit les coûts de formation en gestion." },
    { "question": 62, "answer": "A", "explanation": "L’échange de communications et lettres de gestion est cohérent avec la coordination du CAE." },
    { "question": 63, "answer": "A", "explanation": "La coordination de l’audit interne/externe est la responsabilité du CAE." },
    { "question": 64, "answer": "D", "explanation": "Le CAE doit coordonner avec d’autres fournisseurs, comprendre le travail externe et fournir des informations aux auditeurs externes." },
    { "question": 65, "answer": "B", "explanation": "Le CAE est responsable de la coordination de l’audit interne/externe." },
    { "question": 66, "answer": "D", "explanation": "Utiliser techniques, méthodes et terminologie similaires augmente l’efficacité." },
    { "question": 67, "answer": "B", "explanation": "Le CAE informe le board sur les bénéfices de la coordination." },
    { "question": 68, "answer": "A", "explanation": "La supervision des auditeurs externes incombe au board, pas au CAE." },
    { "question": 69, "answer": "C", "explanation": "Le travail externe doit être coordonné avec l’audit interne pour que ce dernier s’y fie." },
    { "question": 70, "answer": "B", "explanation": "Notifier le cabinet parent et demander autorisation avant de fournir leurs working papers." },
    { "question": 71, "answer": "A", "explanation": "Le CAE peut fournir les working papers internes aux auditeurs externes pour qu’ils se fassent confiance." },
    { "question": 72, "answer": "A", "explanation": "L’auditeur externe n’évalue l’audit interne que s’il prévoit de s’appuyer sur son travail." },
    { "question": 73, "answer": "D", "explanation": "Évaluation de la coordination entre auditeurs internes et externes par le CAE." },
    { "question": 74, "answer": "B", "explanation": "Attester de la présentation fidèle de la trésorerie est réservé aux auditeurs externes." },
    { "question": 75, "answer": "C", "explanation": "Le CAE doit s’assurer du suivi et des actions correctives suite aux lettres de gestion externes." },
    { "question": 76, "answer": "B", "explanation": "Coordonner le travail pour éviter les duplications et respecter les responsabilités." },
    { "question": 77, "answer": "A", "explanation": "L’audit interne doit considérer le travail d’autres départements dans son évaluation." },
    { "question": 78, "answer": "D", "explanation": "Identifier des activités de liaison pour coordonner audit interne et fonction qualité." },
    { "question": 79, "answer": "C", "explanation": "Les Trois Lignes de Défense clarifient et coordonnent les responsabilités de gestion des risques." },
    { "question": 80, "answer": "A", "explanation": "Calculer et mesurer les risques n’est pas une fonction des Trois Lignes de Défense." },
    { "question": 81, "answer": "D", "explanation": "Partager les résultats avec d’autres fournisseurs ne viole pas l’accord de coordination." },
    { "question": 82, "answer": "D", "explanation": "La raisonabilité des honoraires n’est pas un critère pour s’appuyer sur un autre prestataire." }
]
