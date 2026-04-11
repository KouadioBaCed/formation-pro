export const PMP_Q1to10 = [
  {
    numero: 1,
    question:
      "An organization requires project managers to conduct a standardized audit monthly. After an audit, the team complained that the auditor was not fair. The project manager reviewed the audit results and agrees with the findings. What should the project manager do?",
    choix: {
      a: "Request that mandatory audits be conducted less frequently.",
      b: "Use status meetings to review deliverables instead of formal audits.",
      c: "Explain that audits are conducted based on standardized measures.",
      d: "Report the project manager who conducted the unfair audit.",
    },
    reponse: "c",
    explication: `
The audit process is standardized and designed to be objective. Since the project manager agrees with the auditor’s findings, there is no indication of unfair bias. The PM must explain to the team that audits follow standardized criteria and ensure transparency of the process.
    `,
    reference: "PMBOK 7th Edition (2021) – Team Performance Domain 2.2",
  },

  {
    numero: 2,
    question:
      "A sponsor calls for an urgent meeting after the client requests drastic schedule compression to meet a legal deadline. What should the project manager do to prepare?",
    choix: {
      a: "Initiate procedures to fast-track the project.",
      b: "Implement the required changes to the schedule.",
      c: "Analyze tools to crash the project activities.",
      d: "Prepare a change impact assessment report.",
    },
    reponse: "d",
    explication: `
Before acting, the PM must first prepare a change impact assessment outlining effects on scope, schedule, cost, risks, and resources. Fast-tracking or crashing should only occur after review and approval.
    `,
    reference:
      "Fundamentals of Project Management – Heagney (Ch. 11) / PMI Managing Change Guide (4.3.3.1)",
  },

  {
    numero: 3,
    question:
      "A new project manager notices that quality has been consistent so far. The project has a large quality-assurance budget, and other areas could benefit from the funds. What should the project manager do?",
    choix: {
      a: "Implement a budget reduction strategy to reallocate funds.",
      b: "Perform a full inspection since there is no margin for error.",
      c: "Introduce sampling as a cost-effective way to ensure quality.",
      d: "Keep the budget intact for now and continue monitoring.",
    },
    reponse: "d",
    explication: `
The PM is new and quality is stable. Reducing QA funding prematurely could introduce risks. The best approach is to continue monitoring until the PM has sufficient insight.
    `,
    reference: "PMBOK 7th Edition (2022) – Delivery Performance Domain 2.6",
  },

  {
    numero: 4,
    question:
      "A project has a three-year duration. How should the project manager plan near-term versus long-term activities?",
    choix: {
      a: "Focus on acquiring a team and deliver as soon as possible.",
      b: "Engage the sponsor in the validation and prioritization processes.",
      c: "Conduct workshops with the client to define delivery dates.",
      d: "Validate requirements and perform rolling wave planning.",
    },
    reponse: "d",
    explication: `
Rolling wave planning allows detailed short-term planning and high-level long-term planning, progressively elaborated as more information becomes available.
    `,
    reference:
      "O’Reilly Platform – Rolling Wave Planning / The Agile Developer’s Handbook",
  },

  {
    numero: 5,
    question:
      "In a hybrid project, the PM sees that the team’s velocity will not meet the next review-gate requirements. What should the PM do?",
    choix: {
      a: "Prioritize backlog items and remove some stories.",
      b: "Increase the sprint duration to allow more time.",
      c: "Use the daily coordination meeting to assess impediments.",
      d: "Create a change request to modify the review gate goals.",
    },
    reponse: "c",
    explication: `
Daily stand-ups are used to identify impediments quickly. The PM should leverage agile ceremonies instead of altering backlog priorities or timeline rules.
    `,
    reference:
      "Agile Foundations – Daily Standups / Agile Practice Guide – 5.2.4",
  },

  {
    numero: 6,
    question:
      "A project manager is verbally told during a governance meeting that an external audit is coming. What should the PM do first?",
    choix: {
      a: "Update all project documentation.",
      b: "Put the project on hold to ensure compliance.",
      c: "Contact the auditors to understand the scope and requirements.",
      d: "Inform the team of the scope and requirements.",
    },
    reponse: "c",
    explication: `
The PM must first clarify audit scope and requirements. Only then can documentation updates or team preparation be correctly aligned.
    `,
    reference:
      "PMBOK 7th Edition (2021) – Project Work Performance Domain 2.5",
  },

  {
    numero: 7,
    question:
      "A construction project will last two years in a high-inflation environment. What contract type should the PM choose?",
    choix: {
      a: "Cost plus incentive fee (CPIF)",
      b: "Firm fixed price (FFP)",
      c: "Fixed price with economic price adjustment (FPEPA)",
      d: "Time and materials (T&M)",
    },
    reponse: "c",
    explication: `
FPEPA is appropriate for multi-year engagements subject to inflation or commodity price fluctuations, allowing predefined adjustments to the contract price.
    `,
    reference: "PMBOK 6th Edition – 12.1.1.6 / Procurement Skill Guide",
  },

  {
    numero: 8,
    question:
      "In a hybrid project, the team cannot agree on the scope for the next increment. What should the PM do?",
    choix: {
      a: "Facilitate a team discussion to understand the issue.",
      b: "Escalate to the sponsor so risks become visible.",
      c: "Ask an SME to determine the scope.",
      d: "Have the team vote on a majority-based scope.",
    },
    reponse: "a",
    explication: `
The PM must facilitate collaboration and uncover root causes. Escalation or outsourcing the decision bypasses team ownership and may cause conflict.
    `,
    reference:
      "Essential Scrum – Rubin (Ch. 11) / Agile Practice Guide – 4.2.1.1",
  },

  {
    numero: 9,
    question:
      "A project has 250 story points. Planned per iteration: 40. Delivered: 40, 10, 20, 15. What should the PM do?",
    choix: {
      a: "Reassign undelivered tasks for the next iteration.",
      b: "Adjust planned story points with the team.",
      c: "Remove features that cannot be delivered.",
      d: "Negotiate an extension due to holiday schedules.",
    },
    reponse: "b",
    explication: `
The team averages ~21 points per iteration. Planning for 40 is unrealistic. The PM must collaboratively adjust future estimates.
    `,
    reference:
      "O’Reilly Platform – Great Big Agile (Ch. 71) / Agile Practice Guide 5.2.6",
  },

  {
    numero: 10,
    question:
      "A PM notices low interaction between team members. An after-work event had poor attendance. What should the PM do?",
    choix: {
      a: "Send a survey for new after-work ideas.",
      b: "Continue events to improve morale.",
      c: "Provide incentives to top performers.",
      d: "Confidentially poll the team to identify the root cause.",
    },
    reponse: "d",
    explication: `
Polling confidentially allows team members to express real concerns. After-work activities or incentives do not address the fundamental cause.
    `,
    reference:
      "Choose Your WoW! – Ambler & Lines (Ch. 22) / Strengths-Based Project Teams",
  },
];

export const PMP_Q11to20 = [
  {
    numero: 11,
    question:
      "The project manager of a large team notices team members are not interacting together, which is impacting project performance and the quality of the project outcome. What should the project manager do to help grow team dynamics?",
    choix: {
      a: "Conduct face-to-face group meetings to understand what the issues are.",
      b: "Notify the project team members' supervisors about the lack of cooperation.",
      c: "Add the lack of team communication as a risk in the risk register and monitor the situation.",
      d: "Refer to the lessons learned to understand how other projects handled similar issues.",
    },
    reponse: "a",
    explication: `
Face-to-face meetings help the PM understand issues directly, encourage open communication, and nurture collaboration. Lessons learned do not solve the current issue, and notifying supervisors or adding a risk does not resolve the root cause.

Derived from: Choose Your WoW!, Ambler & Lines (2019) – Grow team members; PMBOK 6th Ed – 9.1.4`,
    reference:
      "Choose Your WoW! (2019) – Grow Team Members / PMBOK 6th Ed – 9.1.4",
  },

  {
    numero: 12,
    question:
      "A project is in the planning phase and requires tremendous time and effort for data collection and analysis. The sponsor asks the project manager to skip a planned focus group discussion and brainstorming session to accelerate the process. What should the project manager do next?",
    choix: {
      a: "Report the issue to the project steering committee.",
      b: "Acknowledge the request and skip the sessions.",
      c: "Tell the sponsor that skipping the sessions will jeopardize the project.",
      d: "Meet with the project sponsor to understand the reasons for the time constraints.",
    },
    reponse: "d",
    explication: `
The PM must first understand the sponsor's constraints and discuss impacts before taking action. Skipping requirement-gathering activities too quickly can degrade quality. Escalation is premature.

Derived from: Effective Project Management – Wysocki; PMBOK 6th Ed – 5.1`,
    reference:
      "Effective Project Management – Wysocki / PMBOK 6th Ed – 5.1 Requirements",
  },

  {
    numero: 13,
    question:
      "A project manager is handling multiple projects in different countries and issues a new directive on workplace attire. It is met with resistance in three countries, leading to misunderstandings and potential legal issues. What should the project manager have done?",
    choix: {
      a: "Asked senior management for clarity before issuing the directive.",
      b: "Evaluated cultural norms and values in the various countries.",
      c: "Determined the socioeconomic status of team members.",
      d: "Collected personal preferences from team members.",
    },
    reponse: "b",
    explication: `
Cultural norms vary across regions; directives must be adapted accordingly. Understanding cultural contexts avoids resistance and misunderstandings.

Derived from: O’Reilly — Successful Cross-Cultural Management; PMBOK 7th Ed – Planning Domain`,
    reference:
      "O’Reilly Platform – Cross-Cultural Management / PMBOK 7th Ed – Planning Domain",
  },

  {
    numero: 14,
    question:
      "An ongoing project has a high degree of change. To evaluate how a new IT security team may influence project performance, what should the project manager do?",
    choix: {
      a: "Update the stakeholder engagement assessment matrix.",
      b: "Analyze corporate political and power structures.",
      c: "Create a project communications management plan.",
      d: "Manage stakeholders’ expectations.",
    },
    reponse: "d",
    explication: `
With high uncertainty, expectation management is essential. The PM must ensure stakeholders understand impacts and changes.

Derived from: O’Reilly—Stakeholder Engagement; PMBOK 7th Ed – Stakeholder Engagement`,
    reference:
      "O’Reilly – Stakeholder Engagement / PMBOK 7th Ed – 2.1 & 2.5",
  },

  {
    numero: 15,
    question:
      "A team member proposes dividing a construction project into two phases to deliver an MVP and reduce potential damages by 90%. What should the project manager do next?",
    choix: {
      a: "Conduct a feasibility study.",
      b: "Reject the proposal and continue as planned.",
      c: "Implement the proposed changes immediately.",
      d: "Discuss the proposal with the client and stakeholders.",
    },
    reponse: "d",
    explication: `
The PM must involve stakeholders before modifying delivery strategy. Their input determines feasibility and alignment.

Derived from: O’Reilly – Project Decisions; PMI Standard – Tailoring & Stakeholder Engagement`,
    reference:
      "O’Reilly – Project Decisions / PMI Standard for PM (2021) – Tailoring & Stakeholders",
  },

  {
    numero: 16,
    question:
      "A pilot agile project delivers increments on time, but top management does not see the value. How should the PM communicate value?",
    choix: {
      a: "Include top management in all future sprint reviews.",
      b: "Send weekly status reports and invite them to retrospectives.",
      c: "Demonstrate alignment with strategic goals.",
      d: "Customize progress reports to address their requirements.",
    },
    reponse: "c",
    explication: `
Top management cares about strategic alignment, not delivery mechanics. Showing how the project supports business objectives demonstrates value.

Derived from: Choose Your WoW! – Accelerate Value; PMBOK 7th Ed – Delivery of Value`,
    reference:
      "Choose Your WoW! – Ch. 19 / PMBOK 7th Ed – 2.6.1",
  },

  {
    numero: 17,
    question:
      "A project in a regulated industry has an MVP defined. The regulatory body requires a prototype for inspection, which is not part of the MVP. What should the PM do?",
    choix: {
      a: "Ask the product owner to prioritize compliance activities in the backlog.",
      b: "Add regulatory work directly into the backlog and assign it.",
      c: "Reschedule the launch until a prototype is available.",
      d: "Create a new MVP definition including the prototype.",
    },
    reponse: "a",
    explication: `
Compliance work must be prioritized with the product owner. The PO controls the backlog. Collaboration ensures alignment and regulatory compliance.

Derived from: Kendrick – Managing Complex Programs; PMBOK 7th Ed – Change & Delivery Domain`,
    reference:
      "How to Manage Complex Programs – Kendrick / PMBOK 7th Ed – 2.6 & 2.4.7",
  },

  {
    numero: 18,
    question:
      "A senior team member struggles with a new team member and seeks the project manager’s advice. What should the PM do?",
    choix: {
      a: "Check performance and the RAM to assess the conflict.",
      b: "Tell the senior member to confront the new member publicly.",
      c: "Coach the senior member on conflict resolution models.",
      d: "Privately ask the new member to avoid the senior member.",
    },
    reponse: "c",
    explication: `
The PM should coach team members to resolve conflicts independently using appropriate models. Avoiding confrontation or blaming worsens teamwork.

Derived from: O'Reilly – Managing Conflict; PMBOK 7th Ed – Interpersonal Skills`,
    reference:
      "O’Reilly – Conflict Management / PMBOK 7th Ed – 2.2.4.4 & 4.2.7.1",
  },

  {
    numero: 19,
    question:
      "In a matrix organization, software errors increase as the deadline approaches. The team insists this is normal. What should the project manager do?",
    choix: {
      a: "Update the WBS and extend schedule durations.",
      b: "Continue development to avoid missing the deadline.",
      c: "Check quality metrics for compliance with requirements.",
      d: "Submit a change request to extend the deadline.",
    },
    reponse: "c",
    explication: `
Quality metrics determine whether error levels are acceptable. The PM must check compliance before altering scope, schedule, or deadlines.

Derived from: PMBOK 6th Ed – Quality Metrics (8.1.3.2)`,
    reference: "PMBOK 6th Ed – 8.1.3.2 Quality Metrics",
  },

  {
    numero: 20,
    question:
      "Company A is moving from predictive to agile. After a disappointing prototype, the product owner wants escalation and a new team. Team conflict emerges. How should the PM resolve this?",
    choix: {
      a: "Follow conflict resolution rules in the project charter.",
      b: "Use retrospective sessions to identify the cause.",
      c: "Revisit the project vision with the team.",
      d: "Review the definition of done with the product owner.",
    },
    reponse: "b",
    explication: `
Retrospectives allow the team to analyze issues, learn, and improve. Charter conflict rules do not exist, and revisiting the vision won't fix interpersonal issues.

Derived from: O’Reilly – The DNA of Strategy Execution; Agile Practice Guide Annex A1`,
    reference:
      "O’Reilly – DNA of Strategy Execution / Agile Practice Guide – Annex A1",
  },
];

export const PMP_Q21to30 = [
  {
    numero: 21,
    question:
      "Company A is moving from a predictive approach to an agile one. After the second incremental release, the product owner is disappointed and wants to escalate and request a new team. Team members begin blaming each other. How should the project manager resolve the team's differences?",
    choix: {
      a: "Follow the conflict resolution process documented in the project charter.",
      b: "Use retrospective sessions to allow the team to determine the cause of the dispute.",
      c: "Revisit the project vision to ensure that the project goal is understood.",
      d: "Review the definition of done (DoD) with the product owner to identify the cause of the gap.",
    },
    reponse: "b",
    explication: `
Retrospectives enable the team to analyze what happened and identify improvements. Conflict resolution is not part of the charter, revisiting the vision does not address conflict, and reviewing the DoD is too narrow for this issue.

Derived from: O’Reilly – The DNA of Strategy Execution; Agile Practice Guide Annex A1`,
    reference:
      "O’Reilly – DNA of Strategy Execution / Agile Practice Guide Annex A1",
  },

  {
    numero: 22,
    question:
      "A hybrid project team learns after the fourth sprint that exchange rates for imported goods will significantly increase. What should the project manager do to ensure the final product launches on time and as defined?",
    choix: {
      a: "Work with stakeholders to develop incremental budgeting approaches.",
      b: "Reduce product specifications to use less imported material.",
      c: "Spend the extra money and compensate later.",
      d: "Review the backlog to assess the impact of a budget increase.",
    },
    reponse: "a",
    explication: `
Incremental and flexible budgeting allows the team to adapt to cost variability without compromising delivery. Reducing specs or overspending prematurely is inappropriate.

Derived from: Mike Cohn – Agile Estimating & Planning; Agile Practice Guide 4.2.1.3`,
    reference:
      "Agile Estimating & Planning – Mike Cohn / Agile Practice Guide 4.2.1.3",
  },

  {
    numero: 23,
    question:
      "A project manager receives a complaint that the team responded incorrectly to a client request. The PM knows the team received many out-of-scope requests. What should the PM do?",
    choix: {
      a: "Encourage team members to use the 'five whys' technique with the client.",
      b: "Ask the client to better explain their requests.",
      c: "Review the scope with the client and document extra requests as change requests.",
      d: "Request to be copied in all future communications.",
    },
    reponse: "c",
    explication: `
Reviewing scope clarifies what is in or out of scope and ensures additional requests follow the formal change control process.

Derived from: O’Reilly – Active Listening 2nd Ed.; PMBOK 6th – Communications (10)`,
    reference:
      "Active Listening (O’Reilly) / PMBOK 6th Ed – Communications 10.1–10.3",
  },

  {
    numero: 24,
    question:
      "During acceptance testing, the sponsor says the deliverable will only pass if the theme color changes from red to blue, even though the plan specifies red. What should the project manager do?",
    choix: {
      a: "Request that the sponsor submit a formal change request.",
      b: "Tell the sponsor to accept the red theme as per the contract.",
      c: "Agree to change the color to avoid conflict.",
      d: "Ask procurement to change the color immediately.",
    },
    reponse: "a",
    explication: `
A change request must be submitted for a requirement change. It allows impact analysis and ensures all stakeholders approve the modification.

Derived from: Wysocki – Effective Project Management; PMBOK 7th Ed – Deliverables & Monitoring New Work`,
    reference:
      "Effective Project Management – Wysocki / PMBOK 7th Ed – 2.6.2 & 2.5.7",
  },

  {
    numero: 25,
    question:
      "An agile team completes high-priority items faster than expected. What KPI best demonstrates this to the project manager?",
    choix: {
      a: "Number of defects identified by the product owner.",
      b: "Number of action items from retrospectives.",
      c: "Number of user stories completed per iteration.",
      d: "Team staying within Kanban WIP limits.",
    },
    reponse: "c",
    explication: `
Completed user stories per iteration indicate delivered value and productivity. Defects relate to quality, WIP limits to flow, and action items to improvement—not throughput.

Derived from: Agile Foundations – Peter Measey; O’Reilly Agile Frameworks`,
    reference:
      "Agile Foundations – Measey / O’Reilly – Agile Frameworks Ch. 14",
  },

  {
    numero: 26,
    question:
      "A project incurred additional costs, and during sign-off the PM failed to justify the added expenses. What should the PM have done to avoid this situation?",
    choix: {
      a: "Argued that business case benefits justify additional costs.",
      b: "Measured and tracked benefits throughout the project life cycle.",
      c: "Performed a reassessment after implementation to show realized benefits.",
      d: "Highlighted intangible benefits like satisfaction or reputation.",
    },
    reponse: "b",
    explication: `
Benefit realization must be tracked continuously. One cannot rely solely on initial assumptions or post-implementation justification.

Derived from: PMBOK 6th Ed – Benefits; The DNA of Strategy Execution`,
    reference:
      "PMBOK 6th Ed – Benefits Management / DNA of Strategy Execution",
  },

  {
    numero: 27,
    question:
      "During kick-off, the PM announces a hybrid approach. Many team members are concerned because they are used to predictive methods. What should the PM do?",
    choix: {
      a: "Escalate to the sponsor.",
      b: "Consult the PMO for delivery approach guidance.",
      c: "Educate the team on agile and its benefits.",
      d: "Switch back to a predictive approach.",
    },
    reponse: "c",
    explication: `
Before changing approaches or escalating, the PM should educate the team on agile principles to reduce resistance and align understanding.

Derived from: Agile Foundations – BCS Learning & Development; Agile Practice Guide`,
    reference:
      "Agile Foundations (BCS) – Roles / Agile Practice Guide p.37",
  },

  {
    numero: 28,
    question:
      "A critical team member must leave for two weeks and will be unavailable. They have only three days left. What should the agile PM do?",
    choix: {
      a: "Adjust the project plan and timeline.",
      b: "Identify critical tasks and dependencies that may be affected.",
      c: "Introduce a replacement resource.",
      d: "Ask the team member to complete as much as possible quickly.",
    },
    reponse: "b",
    explication: `
The PM must first analyze which deliverables and dependencies will be impacted. Only then can schedule adjustments or resource changes be considered.

Derived from: Agile for Everybody – Ch. 5; Agile Practice Guide 4.3.6`,
    reference:
      "Agile for Everybody – Ch.5 / Agile Practice Guide 4.3.6",
  },

  {
    numero: 29,
    question:
      "A predictive project added an agile phase. A team member keeps assigning tasks instead of letting the team self-organize, causing conflict and delays. What should the PM do?",
    choix: {
      a: "Replace the team member with someone experienced in agile.",
      b: "Wait until the team resolves the conflict alone.",
      c: "Reaffirm agile principles and roles to create helpful structures.",
      d: "Take control of the backlog and assign tasks directly.",
    },
    reponse: "c",
    explication: `
The PM must reinforce agile values, roles, and structures so the team can self-organize effectively. Replacing members or taking over the backlog is premature and harmful.

Derived from: Lyssa Adkins – Coaching Agile Teams Ch. 9; Agile Practice Guide 4.3.2`,
    reference:
      "Coaching Agile Teams – Adkins Ch.9 / Agile Practice Guide 4.3.2",
  },

  {
    numero: 30,
    question:
      "A PM with remote team members notices they work independently. What should the PM do to promote collaboration?",
    choix: {
      a: "Include all members in every project email.",
      b: "Call members individually for weekly updates.",
      c: "Promote regular meetings using video conferencing.",
      d: "Ask members to complete daily task logs.",
    },
    reponse: "c",
    explication: `
Video meetings allow real-time interaction, relationship building, and collaborative work. Emails, individual calls, or task logs do not create synergy.

Derived from: O’Reilly – Managing Virtual Teams; PMBOK 6th – Communications; Agile Practice Guide 4.3.6`,
    reference:
      "Managing Virtual Teams (O’Reilly) / PMBOK 6th – 10.2 / Agile Practice Guide 4.3.6",
  },
];


// Agile Project Questions Converted to JS Objects

export const agileQuestion1 = {
  id: 'agile-q-1',
  number: 1,
  text: "The first iteration of an agile project consists of a minimum viable product (MVP) that is now successfully completed. The team members are eager to hand the product over to the customer. How should the product be confirmed as ready for customer use?",
  answers: [
    { id: 'a', text: "The scrum master determines that all requirements are satisfied.", isCorrect: false },
    { id: 'b', text: "The project team agrees the MVP meets the definition of done (DoD).", isCorrect: true },
    { id: 'c', text: "The senior manager and customer approve and accept the product.", isCorrect: false },
    { id: 'd', text: "The product owner decides that the MVP passes all required quality tests.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "The decision is based on whether the MVP meets the definition of done (DoD), assessed by the whole team.",
  topic: "agile",
};

export const agileQuestion2 = {
  id: 'agile-q-2',
  number: 2,
  text: "An agile project manager in country A is working with remote teams. During sprint 2, all test cases fail because the business analyst changed acceptance criteria without notifying all teams. What should the PM implement to prevent this?",
  answers: [
    { id: 'a', text: "Password protection on the user stories.", isCorrect: false },
    { id: 'b', text: "Signed change control documentation.", isCorrect: false },
    { id: 'c', text: "Automated change notifications from the user story tool.", isCorrect: false },
    { id: 'd', text: "Backlog grooming.", isCorrect: true },
  ],
  answerType: "single",
  explanation: "Backlog grooming ensures backlog transparency, alignment, and shared understanding.",
  topic: "agile",
};

export const agileQuestion3 = {
  id: 'agile-q-3',
  number: 3,
  text: "During the daily standup, a team member reports a user story is now invalid due to a new policy. What should the project manager do?",
  answers: [
    { id: 'a', text: "Close the story and explain it is no longer valid.", isCorrect: true },
    { id: 'b', text: "Move the story to the next sprint.", isCorrect: false },
    { id: 'c', text: "Notify stakeholders that sprint commitments cannot change.", isCorrect: false },
    { id: 'd', text: "Remove the story and expedite sprint completion.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Invalid user stories should be closed to keep the sprint backlog clean and accurate.",
  topic: "agile",
};

export const agileQuestion4 = {
  id: 'agile-q-4',
  number: 4,
  text: "A predictive project is behind schedule and over budget because a stakeholder submits excessive change requests. What should the PM do?",
  answers: [
    { id: 'a', text: "Review the risk management plan.", isCorrect: false },
    { id: 'b', text: "Use contingency reserve to fast-track.", isCorrect: false },
    { id: 'c', text: "Review and improve the change control process.", isCorrect: true },
    { id: 'd', text: "Escalate to the sponsor.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Improving change control addresses the root cause: excessive, unmanaged change requests.",
  topic: "predictive",
};

export const agileQuestion5 = {
  id: 'agile-q-5',
  number: 5,
  text: "A process improvement system was developed in-house but adoption is below 50% due to misalignment. Which actions should have been taken? (Choose 3)",
  answers: [
    { id: 'a', text: "Conduct a full needs assessment.", isCorrect: true },
    { id: 'b', text: "Pilot in a core business unit.", isCorrect: true },
    { id: 'c', text: "Engage stakeholders widely.", isCorrect: true },
    { id: 'd', text: "Marketing team collects customer feedback.", isCorrect: false },
    { id: 'e', text: "Create a change management plan with training.", isCorrect: false },
  ],
  answerType: "multiple",
  explanation: "A, B, C ensure alignment, validation, and buy-in—key for adoption.",
  topic: "benefits-realization",
};

export const agileQuestion6 = {
  id: 'agile-q-6',
  number: 6,
  text: "During testing, some requirements were not met and adding work causes overruns. What should the PM do first?",
  answers: [
    { id: 'a', text: "Escalate to management.", isCorrect: false },
    { id: 'b', text: "Perform an impact analysis.", isCorrect: true },
    { id: 'c', text: "Call a stakeholder meeting.", isCorrect: false },
    { id: 'd', text: "Update the risk register.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Impact analysis must precede any escalation or corrective action.",
  topic: "predictive",
};

export const agileQuestion7 = {
  id: 'agile-q-7',
  number: 7,
  text: "A PM is addressing PO concerns about MVP delivery in sprint 4. Which metric should be used?",
  answers: [
    { id: 'a', text: "SPI", isCorrect: false },
    { id: 'b', text: "SCI", isCorrect: false },
    { id: 'c', text: "Burndown rate", isCorrect: true },
    { id: 'd', text: "Qualitative risk analysis", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Burndown rate shows if the team is on track to complete MVP work.",
  topic: "agile",
};

export const agileQuestion8 = {
  id: 'agile-q-8',
  number: 8,
  text: "A customer wants a business case at project completion, but the PM feels it's premature. What should the PM do?",
  answers: [
    { id: 'a', text: "Collaborate to create the business case now.", isCorrect: false },
    { id: 'b', text: "Acknowledge request but explain limitations.", isCorrect: true },
    { id: 'c', text: "Refer customer to team for benefits details.", isCorrect: false },
    { id: 'd', text: "State that more resources are required.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "A business case should be done when benefits are fully measured.",
  topic: "benefits-realization",
};

export const agileQuestion9 = {
  id: 'agile-q-9',
  number: 9,
  text: "Velocity is 65 story points per iteration (2 weeks). 1,040 points remain. How many months to finish?",
  answers: [
    { id: 'a', text: "2 months", isCorrect: false },
    { id: 'b', text: "4 months", isCorrect: false },
    { id: 'c', text: "8 months", isCorrect: true },
    { id: 'd', text: "16 months", isCorrect: false },
  ],
  answerType: "single",
  explanation: "1040 / 65 = 16 iterations → 32 weeks → 8 months.",
  topic: "agile",
};

export const agileQuestion10 = {
  id: 'agile-q-10',
  number: 10,
  text: "An agile team finds an architecture gap causing rework. Which practice should the PM use?",
  answers: [
    { id: 'a', text: "Increment planning", isCorrect: false },
    { id: 'b', text: "Team retrospective", isCorrect: true },
    { id: 'c', text: "Stakeholder demo", isCorrect: false },
    { id: 'd', text: "Daily standup", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Retrospectives allow deep analysis of causes and improvements.",
  topic: "agile",
};


export const questionPM1: Question = {
  id: "pm-agile-training-1",
  number: 1,
  text: "A project manager notices that conflicts between team members are occurring in every sprint. After an investigation, the project manager discovers that the team needs to be trained in agile techniques in order to address these conflicts. What should the project manager do first?",
  answers: [
    { id: "a", text: "Develop a training plan for the team.", isCorrect: false },
    { id: "b", text: "Schedule training sessions for the team.", isCorrect: false },
    { id: "c", text: "Conduct a training needs assessment for the team.", isCorrect: true },
    { id: "d", text: "Instruct the team to begin using agile techniques.", isCorrect: false },
  ],
  answerType: "single",
  explanation:
    "The first step is to conduct a training needs assessment to identify the specific agile techniques required. This ensures training is relevant and addresses the root causes of conflict.",
  difficulty: "medium",
  topic: "pmi-agile",
  chapter: "agile-training",
  status: "unseen",
};


export const questionPM2: Question = {
  id: "pm-agile-coaching-2",
  number: 2,
  text: "Members of an agile team are struggling. While there is trust among the team members, the majority of team decisions are made by a few of the more experienced team members. What should the project manager do to enable a high-performing team?",
  answers: [
    { id: "a", text: "Discourage the experienced team members from speaking first.", isCorrect: false },
    { id: "b", text: "Facilitate meetings to ensure all members take part.", isCorrect: false },
    { id: "c", text: "Coach the team to ensure all members offer ideas and team consensus is achieved.", isCorrect: true },
    { id: "d", text: "Raise the issue in a retrospective and formalize new agreements.", isCorrect: false },
  ],
  answerType: "single",
  explanation:
    "The project manager should adopt a servant-leader coaching approach to help the team make decisions collaboratively and reach consensus.",
  difficulty: "medium",
  topic: "pmi-agile",
  chapter: "team-performance",
  status: "unseen",
};


export const questionPM3: Question = {
  id: "pm-hybrid-dod-3",
  number: 3,
  text: "A company is working on a hybrid project in which the deliverables have quality issues at the end of one of the sprints. Which action should the project manager take?",
  answers: [
    { id: "a", text: "Review the definition of done (DoD).", isCorrect: true },
    { id: "b", text: "Look for a clear set of working agreements.", isCorrect: false },
    { id: "c", text: "Apply value stream mapping.", isCorrect: false },
    { id: "d", text: "Use a plan-driven approach.", isCorrect: false },
  ],
  answerType: "single",
  explanation:
    "Reviewing the Definition of Done helps identify quality gaps and ensure deliverables meet expected standards.",
  difficulty: "medium",
  topic: "hybrid-projects",
  chapter: "quality-control",
  status: "unseen",
};


export const questionPM4: Question = {
  id: "pm-supplier-delay-4",
  number: 4,
  text: "A key supplier has indicated they will not be able to supply critical materials as scheduled. What should the project manager do first?",
  answers: [
    { id: "a", text: "Submit a change request to the CCB.", isCorrect: false },
    { id: "b", text: "Review the performance against the project baseline.", isCorrect: true },
    { id: "c", text: "Initiate legal action against the supplier.", isCorrect: false },
    { id: "d", text: "Terminate the supplier contract immediately.", isCorrect: false },
  ],
  answerType: "single",
  explanation:
    "The project manager should first compare the supplier impact with the scope, time, and cost baselines to assess consequences before deciding next steps.",
  difficulty: "medium",
  topic: "procurement",
  chapter: "supplier-management",
  status: "unseen",
};


export const questionPM5: Question = {
  id: "pm-virtual-team-5",
  number: 5,
  text: "A project manager is preparing a kickoff meeting for a virtual multicultural team. What should the project manager do?",
  answers: [
    { id: "a", text: "Set strict project rules and regulations.", isCorrect: false },
    { id: "b", text: "Ask the sponsor for different resources.", isCorrect: false },
    { id: "c", text: "Consider time zones, communication capabilities, and constraints.", isCorrect: true },
    { id: "d", text: "Use the sponsor's language as the official communication language.", isCorrect: false },
  ],
  answerType: "single",
  explanation:
    "Effective virtual team management requires considering time zones, culture, communication preferences, and technological constraints.",
  difficulty: "medium",
  topic: "virtual-teams",
  chapter: "kickoff-preparation",
  status: "unseen",
};


export const questionPM6: Question = {
  id: "pm-ground-rules-6",
  number: 6,
  text: "A senior team member dominates discussions and criticizes others, causing low engagement. What should the project manager do?",
  answers: [
    { id: "a", text: "Remove the senior team member.", isCorrect: false },
    { id: "b", text: "Organize a team-building activity.", isCorrect: false },
    { id: "c", text: "Enforce the existing ground rules.", isCorrect: true },
    { id: "d", text: "Escalate to the functional manager.", isCorrect: false },
  ],
  answerType: "single",
  explanation:
    "Ground rules exist to maintain psychological safety. The PM must ensure they are followed to prevent disruptive behaviors.",
  difficulty: "medium",
  topic: "team-dynamics",
  chapter: "conflict-management",
  status: "unseen",
};


export const questionPM7: Question = {
  id: "pm-servant-leader-7",
  number: 7,
  text: "A project manager moving from predictive to hybrid methods wants to help the team focus on their mission. What should they do?",
  answers: [
    { id: "a", text: "Implement Scrum.", isCorrect: false },
    { id: "b", text: "Adopt servant leadership.", isCorrect: true },
    { id: "c", text: "Apply lean methods.", isCorrect: false },
    { id: "d", text: "Innovate with new processes.", isCorrect: false },
  ],
  answerType: "single",
  explanation:
    "Servant leadership supports and empowers team members to perform at their highest potential in hybrid environments.",
  difficulty: "medium",
  topic: "leadership",
  chapter: "servant-leadership",
  status: "unseen",
};


export const questionPM8: Question = {
  id: "pm-product-owner-8",
  number: 8,
  text: "A stakeholder asked a team member to describe the final product, but they could not respond. What should have been done differently?",
  answers: [
    { id: "a", text: "Advise the stakeholder to ask the Scrum master.", isCorrect: false },
    { id: "b", text: "Advise the stakeholder to ask the product owner.", isCorrect: true },
    { id: "c", text: "Delay questions until the next sprint review.", isCorrect: false },
    { id: "d", text: "Direct the stakeholder to the project manager.", isCorrect: false },
  ],
  answerType: "single",
  explanation:
    "The product owner is accountable for product value and is the best person to explain the final product vision.",
  difficulty: "medium",
  topic: "scrum-roles",
  chapter: "product-owner",
  status: "unseen",
};


export const questionPM9: Question = {
  id: "pm-missing-skill-9",
  number: 9,
  text: "Several team members exit the project, including the only person with a critical skill. A task requiring that skill appears in a new sprint. What should the project manager do?",
  answers: [
    { id: "a", text: "Rescope the project.", isCorrect: false },
    { id: "b", text: "Assess the impact of the missing skill.", isCorrect: true },
    { id: "c", text: "Postpone the task.", isCorrect: false },
    { id: "d", text: "Reassign the task to another team.", isCorrect: false },
  ],
  answerType: "single",
  explanation:
    "Assessing impact allows the PM to evaluate alternatives like training, external resources, or reallocation.",
  difficulty: "medium",
  topic: "resource-management",
  chapter: "skills-gap",
  status: "unseen",
};


export const questionPM10: Question = {
  id: "pm-scope-validation-10",
  number: 10,
  text: "Two weeks after product acceptance, the customer claims functionality requirements were not met. What should the project manager do first?",
  answers: [
    { id: "a", text: "Escalate to the sponsor.", isCorrect: false },
    { id: "b", text: "Review the scope validation process.", isCorrect: true },
    { id: "c", text: "Schedule an inspection.", isCorrect: false },
    { id: "d", text: "Validate scope with the customer again.", isCorrect: false },
  ],
  answerType: "single",
  explanation:
    "If a customer reports missing requirements after acceptance, the issue likely lies in the validation process. Reviewing it identifies the root cause.",
  difficulty: "medium",
  topic: "scope-management",
  chapter: "scope-validation",
  status: "unseen",
};


export const questionPM11: Question = {
  id: "pm-change-request-11",
  number: 11,
  text: "During project execution, a customer asks to replace a piece of planned hardware with one that has more features and a lower price. What should the project manager do first?",
  answers: [
    { id: "a", text: "Evaluate the new features to ensure they align with the customer's business needs.", isCorrect: true },
    { id: "b", text: "Incorporate the hardware immediately as it will reduce the overall project cost.", isCorrect: false },
    { id: "c", text: "Meet with the team to plan the implementation of the new hardware as requested.", isCorrect: false },
    { id: "d", text: "Seek approval from the procurement manager and develop a prototype.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Any change requests should be evaluated to ensure alignment with project goals before taking action. Immediate implementation without evaluation could lead to risks, incompatibilities, or hidden costs.",
  difficulty: "medium",
  topic: "scope-management",
  chapter: "change-management",
  status: "unseen",
};


export const questionPM12: Question = {
  id: "pm-risk-assessment-12",
  number: 12,
  text: "At the end of the first phase of a stadium expansion project, the project manager realizes they will be running behind schedule due to new safety requirements. How could this have been avoided?",
  answers: [
    { id: "a", text: "Increase the project's contingency reserve to accommodate unforeseen safety issues.", isCorrect: false },
    { id: "b", text: "Hold regular communication meetings with the site supervisor.", isCorrect: false },
    { id: "c", text: "Implement a proactive risk assessment process during project initiation.", isCorrect: true },
    { id: "d", text: "Request additional resources and personnel as safety concerns arise.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Proactive risk assessment during project initiation identifies potential delays and allows communication to stakeholders, avoiding surprises.",
  difficulty: "medium",
  topic: "risk-management",
  chapter: "risk-identification",
  status: "unseen",
};


export const questionPM13: Question = {
  id: "pm-agile-training-13",
  number: 13,
  text: "A project manager is assigned to a mobile application project, but most of the team is not experienced in agile approaches. The organization is open to using agile. What should the project manager do next?",
  answers: [
    { id: "a", text: "Request the project be reassigned to an agile-experienced team.", isCorrect: false },
    { id: "b", text: "Ask to replace the inexperienced team members.", isCorrect: false },
    { id: "c", text: "Arrange training on agile principles and mindset for the existing team.", isCorrect: true },
    { id: "d", text: "Use a predictive approach since the team is familiar with it.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Training the existing team on agile principles ensures they can effectively transition to the new approach while leveraging current team members.",
  difficulty: "medium",
  topic: "agile-transition",
  chapter: "team-development",
  status: "unseen",
};


export const questionPM14: Question = {
  id: "pm-virtual-comms-14",
  number: 14,
  text: "A new team is formed for an agile project with members in three countries across five time zones. What should the project manager do first to ensure effective communication?",
  answers: [
    { id: "a", text: "Schedule a virtual meeting and introduce the team members.", isCorrect: false },
    { id: "b", text: "Establish guidelines for team communications.", isCorrect: true },
    { id: "c", text: "Set up recurring meetings until all team members are familiar.", isCorrect: false },
    { id: "d", text: "Colocate the team for a short duration.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Establishing communication guidelines ensures all team members understand expectations, methods, and frequency of communication from the start.",
  difficulty: "medium",
  topic: "virtual-teams",
  chapter: "communication-management",
  status: "unseen",
};


export const questionPM15: Question = {
  id: "pm-training-needs-15",
  number: 15,
  text: "As part of a project deliverable, a PM demonstrates a product via a 30-minute virtual call, but the client's employees complain that a two-day workshop would have been better. What should the PM have done to prevent this complaint?",
  answers: [
    { id: "a", text: "Assessed the training needs of the client's employees.", isCorrect: true },
    { id: "b", text: "Included this risk in the risk management plan.", isCorrect: false },
    { id: "c", text: "Provided a contingency reserve for additional training.", isCorrect: false },
    { id: "d", text: "Developed an asynchronous training plan.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Assessing the training needs beforehand allows the PM to plan a training format that aligns with the employees’ knowledge, experience, and desired outcomes.",
  difficulty: "medium",
  topic: "training-management",
  chapter: "training-planning",
  status: "unseen",
};


export const questionPM16: Question = {
  id: "pm-mvp-prioritization-16",
  number: 16,
  text: "During iteration 3 of 6 for a new-to-market MVP, a customer notifies the team that a competitor intends to release a similar product soon. How should the PM address this competitive challenge?",
  answers: [
    { id: "a", text: "Acknowledge the issue and include it in the status report.", isCorrect: false },
    { id: "b", text: "Increase the team size to expedite delivery.", isCorrect: false },
    { id: "c", text: "Meet with the customer to reduce the backlog.", isCorrect: false },
    { id: "d", text: "Work with the team to prioritize core features and redefine the MVP.", isCorrect: true },
  ],
  answerType: "single",
  explanation: "The PM should collaborate with the team to redefine the MVP, focusing on core differentiating features to beat the competitor to market.",
  difficulty: "medium",
  topic: "agile-management",
  chapter: "mvp-prioritization",
  status: "unseen",
};


export const questionPM17: Question = {
  id: "pm-mentoring-17",
  number: 17,
  text: "A new PM discovers the team has no prior experience with the technology used in the project. Functional managers do have experience. What should the PM do first?",
  answers: [
    { id: "a", text: "Ask functional managers to act as mentors or coaches for the team.", isCorrect: true },
    { id: "b", text: "Request the sponsor to substitute experienced team members.", isCorrect: false },
    { id: "c", text: "Identify risks associated with team inexperience.", isCorrect: false },
    { id: "d", text: "Develop status reports to monitor skills and competencies.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Mentoring from experienced functional managers helps the team gain knowledge and perform successfully, addressing gaps proactively.",
  difficulty: "medium",
  topic: "team-management",
  chapter: "mentoring",
  status: "unseen",
};


export const questionPM18: Question = {
  id: "pm-scope-coaching-18",
  number: 18,
  text: "Some agile team members often raise requirements not in the approved scope. How should the PM address this behavior?",
  answers: [
    { id: "a", text: "Coach the team to manage scope using the appropriate framework.", isCorrect: true },
    { id: "b", text: "Escalate to the sponsor and request replacement.", isCorrect: false },
    { id: "c", text: "Conduct daily standups with team and stakeholders.", isCorrect: false },
    { id: "d", text: "Explain that requirements cannot be changed without approval.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Coaching the team on scope management within the agile framework helps prevent scope creep while empowering self-organizing teams.",
  difficulty: "medium",
  topic: "scope-management",
  chapter: "agile-coaching",
  status: "unseen",
};


export const questionPM19: Question = {
  id: "pm-team-values-19",
  number: 19,
  text: "At the start of an agile project, the team cannot agree on values. What should the PM discuss with the team to address the conflict?",
  answers: [
    { id: "a", text: "Sustainable pace.", isCorrect: true },
    { id: "b", text: "Definition of done (DoD).", isCorrect: false },
    { id: "c", text: "Respecting the timebox.", isCorrect: false },
    { id: "d", text: "Project ceremonies.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Team values, such as sustainable pace, help create predictable and healthy workloads while supporting agile principles.",
  difficulty: "medium",
  topic: "agile-values",
  chapter: "team-values",
  status: "unseen",
};


export const questionPM20: Question = {
  id: "pm-conflict-emotions-20",
  number: 20,
  text: "Two team members are frustrated due to workload conflicts, affecting morale. What should the PM do to resolve the underlying dispute?",
  answers: [
    { id: "a", text: "Find common ground to show agreement on workload.", isCorrect: false },
    { id: "b", text: "Recognize that emotions are part of the issue and address them first.", isCorrect: true },
    { id: "c", text: "Initiate conflict resolution to identify blame.", isCorrect: false },
    { id: "d", text: "Use stakeholder engagement and escalate.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Addressing emotional factors first helps build trust, improves communication, and creates a positive environment for problem-solving.",
  difficulty: "medium",
  topic: "team-dynamics",
  chapter: "conflict-resolution",
  status: "unseen",
};


export const questionPM21: Question = {
  id: "pm-schedule-estimates-21",
  number: 21,
  text: "During the planning phase, temporary resources are used to assist with planning and task duration estimation. What should the project manager do before finalizing the project schedule?",
  answers: [
    { id: "a", text: "Review the estimates with the designated team.", isCorrect: true },
    { id: "b", text: "Check the task durations of previous projects.", isCorrect: false },
    { id: "c", text: "Update duration estimation in the risk register.", isCorrect: false },
    { id: "d", text: "Request approval from the project sponsor.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Reviewing estimates with the actual project team ensures accuracy, identifies discrepancies, and aligns expectations before finalizing the schedule.",
  difficulty: "medium",
  topic: "schedule-management",
  chapter: "planning-phase",
  status: "unseen",
};


export const questionPM22: Question = {
  id: "pm-cross-training-22",
  number: 22,
  text: "Several team members are unavailable for two weeks per month, causing increased cost of quality. Team velocity is stable. How should the project manager address this issue?",
  answers: [
    { id: "a", text: "Add resources to the team.", isCorrect: false },
    { id: "b", text: "Expand the testing effort.", isCorrect: false },
    { id: "c", text: "Provide cross-training.", isCorrect: true },
    { id: "d", text: "Increase the sprint duration.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Cross-training increases team adaptability, allowing members to cover for each other during absences, improving output quality.",
  difficulty: "medium",
  topic: "team-management",
  chapter: "high-performing-teams",
  status: "unseen",
};


export const questionPM23: Question = {
  id: "pm-agile-backlog-23",
  number: 23,
  text: "A project is complex with unclear requirements, putting the agile schedule at risk. What should the project manager do to get back on track?",
  answers: [
    { id: "a", text: "Rebaseline the schedule to accept delays.", isCorrect: false },
    { id: "b", text: "Review the product backlog with the product owner and team.", isCorrect: true },
    { id: "c", text: "Increase standups and implement daily status updates.", isCorrect: false },
    { id: "d", text: "Adjust the plan to use more iterative and incremental life cycle features.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Reviewing the backlog helps clarify requirements, prioritize work correctly, and align the team and product owner to address schedule risks.",
  difficulty: "medium",
  topic: "agile-management",
  chapter: "backlog-management",
  status: "unseen",
};


export const questionPM24: Question = {
  id: "pm-product-backlog-prioritization-24",
  number: 24,
  text: "The business manager and product owner want a flexible way to incorporate changes into the product backlog to reduce go-to-market time. What should the project manager do?",
  answers: [
    { id: "a", text: "Coach the product owner to prioritize backlog items according to business goals.", isCorrect: true },
    { id: "b", text: "Review the assumption log and project management plan for potential changes.", isCorrect: false },
    { id: "c", text: "Establish a comprehensive change control process and select a CCB.", isCorrect: false },
    { id: "d", text: "Authorize all key stakeholders to make modifications.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "The product owner is responsible for backlog prioritization; coaching ensures alignment with business goals while maintaining flexibility.",
  difficulty: "medium",
  topic: "agile-management",
  chapter: "backlog-prioritization",
  status: "unseen",
};


export const questionPM25: Question = {
  id: "pm-dynamic-scope-contract-25",
  number: 25,
  text: "The client wants to increase project scope at the end while having a fixed budget and deadline. What should the project manager do?",
  answers: [
    { id: "a", text: "Create the contract based on agreed scope and plan addendum changes.", isCorrect: false },
    { id: "b", text: "Ensure a change control process is documented in the contract.", isCorrect: false },
    { id: "c", text: "Propose a dynamic scope contract with a fixed number of iterations.", isCorrect: true },
    { id: "d", text: "Increase the number of resources in the contract.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "A dynamic scope contract allows best-effort scope changes within fixed increments, maintaining schedule and cost control.",
  difficulty: "medium",
  topic: "contract-management",
  chapter: "scope-flexibility",
  status: "unseen",
};


export const questionPM26: Question = {
  id: "pm-evolving-requirements-26",
  number: 26,
  text: "Requirements are constantly evolving in a project. What should the project manager do to achieve success?",
  answers: [
    { id: "a", text: "Provide regular updates and request deliverable-based approvals from the product owner.", isCorrect: true },
    { id: "b", text: "Work with the team to ensure they are on schedule.", isCorrect: false },
    { id: "c", text: "Maintain a comfortable working atmosphere for cohesion.", isCorrect: false },
    { id: "d", text: "Ensure documentation and processes are filed appropriately.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "For evolving projects, regular engagement with the product owner ensures approval and alignment with changing deliverables.",
  difficulty: "medium",
  topic: "agile-management",
  chapter: "adaptive-projects",
  status: "unseen",
};


export const questionPM27: Question = {
  id: "pm-stakeholder-communication-27",
  number: 27,
  text: "During a workshop for the second project phase, some stakeholders complain they were not informed of benefits already delivered. What should the PM do?",
  answers: [
    { id: "a", text: "Escalate to the steering committee.", isCorrect: false },
    { id: "b", text: "Escalate to the sponsor.", isCorrect: false },
    { id: "c", text: "Record the issue in the issue log, discuss with the change manager, and update the communications plan.", isCorrect: true },
    { id: "d", text: "Record the issue in the register, update stakeholder matrix, and risk management plan.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "The PM is responsible for stakeholder communication. Updating the issue log, consulting the change manager, and adjusting the communications plan ensures stakeholders are informed.",
  difficulty: "medium",
  topic: "stakeholder-management",
  chapter: "communications",
  status: "unseen",
};


export const questionPM28: Question = {
  id: "pm-new-pm-assessment-28",
  number: 28,
  text: "A new project manager takes over a project behind schedule due to delays in document approvals. What should they do first?",
  answers: [
    { id: "a", text: "Meet with the customer to negotiate a new deadline.", isCorrect: false },
    { id: "b", text: "Talk to the previous project manager to understand the situation.", isCorrect: true },
    { id: "c", text: "Request expedited document approvals from the customer.", isCorrect: false },
    { id: "d", text: "Assess the impact of delays on schedule and budget.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Understanding the situation from the previous PM provides context, identifies root causes, and informs next steps before interacting with the customer.",
  difficulty: "medium",
  topic: "project-handover",
  chapter: "transition",
  status: "unseen",
};


export const questionPM29: Question = {
  id: "pm-team-dynamics-29",
  number: 29,
  text: "Team members are not collaborating or proactive. What should the project manager have done at the beginning to achieve a better environment?",
  answers: [
    { id: "a", text: "Conducted an assessment of team dynamics.", isCorrect: true },
    { id: "b", text: "Assigned all tasks at the beginning.", isCorrect: false },
    { id: "c", text: "Facilitated additional team meetings.", isCorrect: false },
    { id: "d", text: "Split the project into more iterations.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Assessing team dynamics early helps identify potential issues, leverage strengths, and promote collaboration proactively.",
  difficulty: "medium",
  topic: "team-management",
  chapter: "team-dynamics",
  status: "unseen",
};


export const questionPM30: Question = {
  id: "pm-fast-tracking-30",
  number: 30,
  text: "A critical path task is behind schedule, but higher management declines additional resources. What is the best practice to address this situation?",
  answers: [
    { id: "a", text: "Resource leveling", isCorrect: false },
    { id: "b", text: "Crashing", isCorrect: false },
    { id: "c", text: "Fast tracking", isCorrect: true },
    { id: "d", text: "What-if scenario analysis", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Fast tracking allows parallel execution of normally sequential tasks, compressing the schedule without additional resources.",
  difficulty: "medium",
  topic: "schedule-management",
  chapter: "critical-path",
  status: "unseen",
};


export const questionPM31: Question = {
  id: "pm-benefits-metrics-31",
  number: 31,
  text: "At the end of a large project, the stakeholders realize that the achieved benefits are not the same as the expected benefits. Which item, if poorly defined at the start, could have led to this issue?",
  answers: [
    { id: "a", text: "Requirements documentation", isCorrect: false },
    { id: "b", text: "Project scope", isCorrect: false },
    { id: "c", text: "Business case", isCorrect: false },
    { id: "d", text: "Benefits metrics", isCorrect: true },
  ],
  answerType: "single",
  explanation: "To detect achieved benefits, proper metrics must be defined to monitor and verify them throughout the project life cycle.",
  difficulty: "medium",
  topic: "benefits-management",
  chapter: "project-closeout",
  status: "unseen",
};


export const questionPM32: Question = {
  id: "pm-abnormal-procurement-32",
  number: 32,
  text: "A new project manager discovers major deviations in the procurement process used by the previous PM. What should the project manager do next?",
  answers: [
    { id: "a", text: "Call the previous PM to understand the rationale.", isCorrect: false },
    { id: "b", text: "Contact service providers and demand resolution.", isCorrect: false },
    { id: "c", text: "Report to the ethics committee.", isCorrect: false },
    { id: "d", text: "Flag the abnormal procurement process as a critical issue for senior management.", isCorrect: true },
  ],
  answerType: "single",
  explanation: "Flagging the issue to senior management ensures proper oversight and prevents legal or regulatory consequences.",
  difficulty: "medium",
  topic: "procurement-management",
  chapter: "issue-escalation",
  status: "unseen",
};


export const questionPM33: Question = {
  id: "pm-compliance-concern-33",
  number: 33,
  text: "During global solution planning, a team member proposes an alternative technology for better data privacy compliance. What should the project manager do first?",
  answers: [
    { id: "a", text: "Ask the architecture owner to evaluate the proposal.", isCorrect: false },
    { id: "b", text: "Assess the validity of the concern and compliance of current and proposed technology.", isCorrect: true },
    { id: "c", text: "Meet with the customer for approval.", isCorrect: false },
    { id: "d", text: "Involve the IT department regarding feasibility.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "The PM should first validate the concern and ensure compliance with policies before escalating or involving others.",
  difficulty: "medium",
  topic: "compliance-management",
  chapter: "technology-evaluation",
  status: "unseen",
};


export const questionPM34: Question = {
  id: "pm-resource-workload-34",
  number: 34,
  text: "A high-priority project misses deadlines because an experienced team member has limited bandwidth. What should the PM do?",
  answers: [
    { id: "a", text: "Report the issue to the project sponsor.", isCorrect: false },
    { id: "b", text: "Adjust schedule and issue a change request.", isCorrect: false },
    { id: "c", text: "Discuss the issue with the team immediately.", isCorrect: false },
    { id: "d", text: "Evaluate the workload of the experienced team member.", isCorrect: true },
  ],
  answerType: "single",
  explanation: "Evaluating workload helps determine if redistribution or additional resources are required to meet deadlines effectively.",
  difficulty: "medium",
  topic: "team-management",
  chapter: "workload-assessment",
  status: "unseen",
};


export const questionPM35: Question = {
  id: "pm-key-resource-retirement-35",
  number: 35,
  text: "A key resource announces retirement during a multi-year project. What should the project manager do?",
  answers: [
    { id: "a", text: "Require remaining team members to work extra hours.", isCorrect: false },
    { id: "b", text: "Inform stakeholders that tasks will be delayed.", isCorrect: false },
    { id: "c", text: "Work with the resource manager to identify and train a replacement.", isCorrect: true },
    { id: "d", text: "Encourage the retiring team member to postpone retirement.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Proactively identifying and training a replacement ensures continuity and minimizes project disruption.",
  difficulty: "medium",
  topic: "resource-management",
  chapter: "succession-planning",
  status: "unseen",
};


export const questionPM36: Question = {
  id: "pm-procurement-negotiation-36",
  number: 36,
  text: "Midway through a project, a supplier wants to increase prices. Which document should the PM reference to understand their negotiating authority?",
  answers: [
    { id: "a", text: "Risk register", isCorrect: false },
    { id: "b", text: "Procurement management plan", isCorrect: true },
    { id: "c", text: "Project charter", isCorrect: false },
    { id: "d", text: "Communication strategy", isCorrect: false },
  ],
  answerType: "single",
  explanation: "The procurement management plan outlines how procurements are handled and who has authority to negotiate or approve contracts.",
  difficulty: "medium",
  topic: "procurement-management",
  chapter: "contract-authority",
  status: "unseen",
};


export const questionPM37: Question = {
  id: "pm-quality-improvement-37",
  number: 37,
  text: "The deliverable quality is inconsistent, and the team is not adhering to standards. What should the PM do to ensure higher quality?",
  answers: [
    { id: "a", text: "Perform a full inspection.", isCorrect: false },
    { id: "b", text: "Introduce sampling for quality assurance.", isCorrect: false },
    { id: "c", text: "Implement a continuous improvement process.", isCorrect: true },
    { id: "d", text: "Add a unit of work to prove the solution.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Continuous improvement ensures adherence to standards and promotes consistent quality outcomes over time.",
  difficulty: "medium",
  topic: "quality-management",
  chapter: "continuous-improvement",
  status: "unseen",
};


export const questionPM38: Question = {
  id: "pm-customer-engagement-38",
  number: 38,
  text: "In a hybrid project, lack of customer involvement leads to excessive rework. What should the PM do?",
  answers: [
    { id: "a", text: "Submit a change request for customer involvement.", isCorrect: false },
    { id: "b", text: "Add the customer issue to the backlog.", isCorrect: false },
    { id: "c", text: "Meet with the customer to highlight the importance of their engagement.", isCorrect: true },
    { id: "d", text: "Instruct senior management to enforce customer participation.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Directly engaging the customer ensures their commitment and understanding of the importance of involvement for project success.",
  difficulty: "medium",
  topic: "stakeholder-management",
  chapter: "customer-engagement",
  status: "unseen",
};


export const questionPM39: Question = {
  id: "pm-functional-resource-39",
  number: 39,
  text: "A functional manager removes a key team member without informing the PM. What should the PM do first?",
  answers: [
    { id: "a", text: "Check the resource calendar for another team member.", isCorrect: false },
    { id: "b", text: "Report to project sponsor and executive management.", isCorrect: false },
    { id: "c", text: "Communicate with the functional manager and request the return of the key member.", isCorrect: true },
    { id: "d", text: "Review the impact and schedule a meeting with the functional manager.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Direct communication with the functional manager is the most immediate and effective way to resolve the situation.",
  difficulty: "medium",
  topic: "resource-management",
  chapter: "conflict-resolution",
  status: "unseen",
};


export const questionPM40: Question = {
  id: "pm-risk-mitigation-40",
  number: 40,
  text: "A risk occurs with a much higher impact than planned, and a more effective response is developed. What should the PM do?",
  answers: [
    { id: "a", text: "Implement only the initial response.", isCorrect: false },
    { id: "b", text: "Update the risk management plan and implement the new response.", isCorrect: true },
    { id: "c", text: "Defer response until next progress meeting.", isCorrect: false },
    { id: "d", text: "Implement a contingency response and inform stakeholders afterward.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Updating the risk management plan ensures stakeholders are informed and the most effective response is implemented promptly.",
  difficulty: "medium",
  topic: "risk-management",
  chapter: "agile-risk",
  status: "unseen",
};


export const questionPM41: Question = {
  id: "pm-legal-requirements-41",
  number: 41,
  text: "A complex project has undefined legal, regulatory, and contractual requirements. What should the PM do?",
  answers: [
    { id: "a", text: "Focus on project deliverables and ignore requirements.", isCorrect: false },
    { id: "b", text: "Contact the product owner and highlight the risks.", isCorrect: false },
    { id: "c", text: "Meet with the product owner and legal department to review status and progress.", isCorrect: true },
    { id: "d", text: "Delay finalization until project end.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Engaging the product owner and legal team ensures timely identification and mitigation of risks related to compliance and contractual obligations.",
  difficulty: "medium",
  topic: "regulatory-management",
  chapter: "legal-compliance",
  status: "unseen",
};


export const questionPM42: Question = {
  id: "pm-velocity-estimate-42",
  number: 42,
  text: "A company is kicking off a new hybrid project. The team has established a velocity of 50 story points per iteration (1 week each). There are 1,500 story points remaining. How long will it take to complete the project?",
  answers: [
    { id: "a", text: "30 weeks", isCorrect: true },
    { id: "b", text: "15 weeks", isCorrect: false },
    { id: "c", text: "4 weeks", isCorrect: false },
    { id: "d", text: "1 week", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Number of iterations = 1,500 / 50 = 30. Each iteration lasts 1 week, so 30 weeks are required.",
  difficulty: "medium",
  topic: "agile-estimation",
  chapter: "velocity-planning",
  status: "unseen",
};

export const questionPM43: Question = {
  id: "pm-task-assignment-43",
  number: 43,
  text: "A PM has a new team and must assign tasks effectively. What approach should be used?",
  answers: [
    { id: "a", text: "Distribute tasks evenly.", isCorrect: false },
    { id: "b", text: "Allocate complex tasks to senior members.", isCorrect: false },
    { id: "c", text: "Evaluate background, experience, and capabilities of the team, then assign tasks.", isCorrect: true },
    { id: "d", text: "Assign experienced members to assist less experienced ones.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Assigning tasks based on individual skills ensures efficient use of resources and better project outcomes.",
  difficulty: "medium",
  topic: "team-management",
  chapter: "task-assignment",
  status: "unseen",
};

export const questionPM44: Question = {
  id: "pm-fast-track-44",
  number: 44,
  text: "A construction project has SPI=0.68. The PM intends to complete the project as planned without extra cost. What should the PM do?",
  answers: [
    { id: "a", text: "Crash the schedule.", isCorrect: false },
    { id: "b", text: "Fast track the schedule.", isCorrect: true },
    { id: "c", text: "Reduce project scope.", isCorrect: false },
    { id: "d", text: "Reduce project quality.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Fast tracking accelerates the schedule without additional cost, although it may add some risks.",
  difficulty: "medium",
  topic: "schedule-management",
  chapter: "schedule-compression",
  status: "unseen",
};

export const questionPM45: Question = {
  id: "pm-communication-expectation-45",
  number: 45,
  text: "A key stakeholder increasingly requests redundant ad-hoc communication. How should the PM address this?",
  answers: [
    { id: "a", text: "Continue with phone calls.", isCorrect: false },
    { id: "b", text: "Meet with the stakeholder to discuss needs and expectations.", isCorrect: true },
    { id: "c", text: "Send an email requesting a communication change.", isCorrect: false },
    { id: "d", text: "Assign a team liaison.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Meeting with the stakeholder helps clarify their needs and allows a communication plan to be created that meets expectations.",
  difficulty: "medium",
  topic: "communication-management",
  chapter: "stakeholder-communication",
  status: "unseen",
};

export const questionPM46: Question = {
  id: "pm-regression-testing-46",
  number: 46,
  text: "Regression tests required by the Quality Management Plan were not included in the WBS. What should the PM do first?",
  answers: [
    { id: "a", text: "Submit a change request to add regression testing work packages.", isCorrect: true },
    { id: "b", text: "Request extra test resources.", isCorrect: false },
    { id: "c", text: "Suggest removing regression testing.", isCorrect: false },
    { id: "d", text: "Seek sponsor approval to remove regression testing.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "The PM must submit a change request to ensure regression testing is formally added to project scope as required by QMP.",
  difficulty: "medium",
  topic: "quality-management",
  chapter: "scope-changes",
  status: "unseen",
};

export const questionPM47: Question = {
  id: "pm-sponsor-replacement-47",
  number: 47,
  text: "The sponsor cannot attend project meetings for the first half of the project and wants to assign a replacement. What should the PM do?",
  answers: [
    { id: "a", text: "Request replacement has substantial influence and authority.", isCorrect: false },
    { id: "b", text: "Set up a meeting with replacement to discuss agenda.", isCorrect: false },
    { id: "c", text: "Request full attention of sponsor and escalate to PMO.", isCorrect: false },
    { id: "d", text: "Analyze the impact and work with sponsor to identify a suitable replacement.", isCorrect: true },
  ],
  answerType: "single",
  explanation: "The PM should proactively analyze the impact and collaborate with the sponsor to ensure a capable replacement is identified.",
  difficulty: "medium",
  topic: "stakeholder-management",
  chapter: "sponsor-replacement",
  status: "unseen",
};

export const questionPM48: Question = {
  id: "pm-quality-issue-48",
  number: 48,
  text: "A serious quality issue is identified that may substantially delay project completion. What should the PM do?",
  answers: [
    { id: "a", text: "Ignore the issue.", isCorrect: false },
    { id: "b", text: "Delay project until fully resolved.", isCorrect: false },
    { id: "c", text: "Implement solution without notifying stakeholders.", isCorrect: false },
    { id: "d", text: "Meet with project team and stakeholders to discuss the issue and solutions.", isCorrect: true },
  ],
  answerType: "single",
  explanation: "Engaging team and stakeholders ensures transparency, collaboration, and effective resolution.",
  difficulty: "medium",
  topic: "quality-management",
  chapter: "issue-resolution",
  status: "unseen",
};

export const questionPM49: Question = {
  id: "pm-team-communication-49",
  number: 49,
  text: "A large-scale project struggles with complex stories and maintaining velocity due to inefficient collaboration. What should the PM do?",
  answers: [
    { id: "a", text: "Focus on servant leadership.", isCorrect: false },
    { id: "b", text: "Perform root cause analysis.", isCorrect: false },
    { id: "c", text: "Seek insight from a mentor.", isCorrect: false },
    { id: "d", text: "Improve team communications.", isCorrect: true },
  ],
  answerType: "single",
  explanation: "Enhancing communication helps the team better understand roles, resolve issues, and maintain productivity.",
  difficulty: "medium",
  topic: "team-management",
  chapter: "communication-improvement",
  status: "unseen",
};

export const questionPM50: Question = {
  id: "pm-technology-training-50",
  number: 50,
  text: "The team requires training on a specific technology. What should the PM do to mitigate this risk?",
  answers: [
    { id: "a", text: "Assess team's knowledge and look for recommended training options.", isCorrect: true },
    { id: "b", text: "Contract an expert provider to do the work.", isCorrect: false },
    { id: "c", text: "Create a risk log item and notify sponsor.", isCorrect: false },
    { id: "d", text: "Fix gaps as they arise during the project.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Proactively assessing skills and providing training ensures the team can successfully complete project tasks.",
  difficulty: "medium",
  topic: "risk-management",
  chapter: "team-training",
  status: "unseen",
};

export const questionPM51: Question = {
  id: "pm-action-plan-feedback-51",
  number: 51,
  text: "The lead sales manager and team are unable to submit a project status report on time, and the report does not meet expectations. What should the PM do first?",
  answers: [
    { id: "a", text: "Evaluate team's understanding of the action plan by requesting feedback.", isCorrect: true },
    { id: "b", text: "Confirm plan is documented and shared.", isCorrect: false },
    { id: "c", text: "Increase frequency of team meetings.", isCorrect: false },
    { id: "d", text: "Provide more time to deliberate and plan.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Understanding the team's comprehension ensures root causes are identified before taking further action.",
  difficulty: "medium",
  topic: "team-management",
  chapter: "status-reporting",
  status: "unseen",
};

export const questionPM52: Question = {
  id: "pm-sponsor-trust-52",
  number: 52,
  text: "A project sponsor is anxious about ROI and wants original dates met. How should the PM convince the sponsor the project is on track?",
  answers: [
    { id: "a", text: "Emphasize value delivered at phase gate.", isCorrect: false },
    { id: "b", text: "Increase number of status reports.", isCorrect: false },
    { id: "c", text: "Present past forecasts and current performance.", isCorrect: true },
    { id: "d", text: "Invite sponsor to daily meetings.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Presenting forecasts versus current performance shows progress and likelihood of achieving intended value.",
  difficulty: "medium",
  topic: "stakeholder-management",
  chapter: "sponsor-trust",
  status: "unseen",
};


export const examenAAI_Q91to100 = [
  {
    numero: 91,
    question: "A project manager is assigned to a top innovation project that has high visibility with the company executives. Recently, one of the project requirements changed and requires the use of new and innovative technology. The change requires the creation of a new position to be filled by someone familiar with the new technology. During a status meeting, a current team member expresses interest in the new role and confirms they are certified in this new technology. What should the project manager do?",
    choix: {
      a: "Reassign the team member to the task to support their growth at the organization, and acquire a resource to replace the team member's old role.",
      b: "Ask the team member to continue the current job assignment while also taking on the new assignment as time allows.",
      c: "Escalate the request to the project sponsor in order to determine if the team member can be assigned to the new assignment.",
      d: "Hire a new team member and ask the existing team member to provide the training needed for the new team member to obtain certification."
    },
    reponse: "a",
    rationale: "The project manager should reassign the team member to the new role to support their growth and acquire a resource to replace the team member's old role. Asking the team member to perform both roles is unreasonable. Escalating the request or hiring a new resource is less efficient and ignores the team member's qualifications."
  },
  {
    numero: 92,
    question: "A project is currently in progress. The project manager has been notified of a new process that may be helpful if it is incorporated into the project. What should the project manager do?",
    choix: {
      a: "Evaluate how the new process can be incorporated.",
      b: "Issue a priority order for the change.",
      c: "Determine the benefit of the change.",
      d: "Modify the requirements document for the change."
    },
    reponse: "c",
    rationale: "The first step is to determine the benefit of the change. This helps assess if it is worth the effort and resources. Other actions like evaluating incorporation or updating documents should happen after confirming the benefit."
  },
  {
    numero: 93,
    question: "A project team has completed project deliverables, but the project manager would like to evaluate whether the project has delivered the intended value to the sponsor. What is the most appropriate factor for the project manager to evaluate?",
    choix: {
      a: "The alignment of the achieved deliverable against the sponsor's expectations.",
      b: "Whether the project's deliverables maximized potential income for the sponsor.",
      c: "Whether delivery performance variances were within the sponsor's thresholds.",
      d: "The project's overall adherence to scope, time, and budget constraints."
    },
    reponse: "a",
    rationale: "The most appropriate factor is alignment of deliverables against the sponsor's expectations. Maximizing income or tracking variances does not necessarily reflect value delivery."
  },
  {
    numero: 94,
    question: "A project manager is not sure if the team has the critical skills needed to implement a key feature of an upcoming deliverable. In order to mitigate the risk of sprint failure, what should the project manager do?",
    choix: {
      a: "Ask for support from the sponsor to replace the low performers with new team members with a specific skill set.",
      b: "Negotiate with the stakeholder to postpone this key feature to a later release while figuring out a better alternative.",
      c: "Identify the potential skill gap and propose a strategy to address the gaps with training, mentoring, or coaching.",
      d: "Embrace the risk, accept the sprint failure, and try to motivate the team toward better performance in the future."
    },
    reponse: "c",
    rationale: "The project manager should identify skill gaps and address them with training, mentoring, or coaching. Replacing team members or postponing work does not proactively mitigate the risk."
  },
  {
    numero: 95,
    question: "At an agile project meeting, a team member gives an update on the status of their important task. A new team member interrupts them when they hear their task mentioned and gives a status update before the first team member has finished. What should the project manager do?",
    choix: {
      a: "Privately talk to the two team members after the meeting.",
      b: "Tell the new team member that they are acting unprofessionally.",
      c: "Pause to discuss appropriate meeting protocol with the team.",
      d: "Ask the new team member to wait until their teammate finishes."
    },
    reponse: "d",
    rationale: "The project manager should politely ask the new team member to wait until the first team member finishes. This maintains meeting efficiency and respect for contributions."
  },
  {
    numero: 96,
    question: "The opening of a new overseas office faces potential delays as the required permit has not yet been issued by the local government. The project team met to evaluate the appropriate course of action as outlined in the risk register. After a thorough assessment, the team decided to postpone the opening to another date. Which document should the project manager use to update the project management plan?",
    choix: {
      a: "Risk management plan",
      b: "Risk report",
      c: "Risk register",
      d: "Lessons learned register"
    },
    reponse: "c",
    rationale: "The risk register should be updated to reflect the new status of the risk and communicate the response taken. Other documents do not record real-time risk management decisions."
  },
  {
    numero: 97,
    question: "A project manager is developing a project management plan. The project duration is set for three months due to regulatory compliance and dependency on senior staff. Which two project objectives should be defined well enough to be included in the project management plan? (Choose two)",
    choix: {
      a: "Improve the processes and reduce rework by keeping senior staff turnover to a minimum level.",
      b: "Develop detailed process maps to align operational activities with the new software system.",
      c: "Enhance the development process by redesigning new templates for the design documentation.",
      d: "Reduce the company's environmental footprint by using detailed recycling guidelines for all employees.",
      e: "Identify training needs and create a development plan to complete the delivery in three months."
    },
    reponse: "a,c",
    rationale: "Improving processes and reducing rework addresses the risk of senior staff turnover. Enhancing development via new templates contributes directly to achieving project goals within constraints."
  },
  {
    numero: 98,
    question: "During a standup meeting, some of the team members strongly disagreed about how tasks were distributed. They feel tired and frustrated because task distribution has been a frequent complaint throughout the project. What should the project manager do?",
    choix: {
      a: "Review the project management plan to determine how to manage this situation.",
      b: "Discuss with other project managers if they had to address similar complaints.",
      c: "Organize a team-building workshop to improve collaboration and communication.",
      d: "Work with the team to develop a plan for addressing the task distribution concerns."
    },
    reponse: "d",
    rationale: "The project manager should work with the team to develop a fair plan to address task distribution concerns. Other actions do not directly solve the immediate problem."
  },
  {
    numero: 99,
    question: "A project manager is assigned to redesign a store's point-of-sale system. The team is currently testing the new functionality when a key stakeholder proposes a change. The change can bring a significant benefit and increase customer satisfaction, but it also requires more resources. What actions should the project manager take?",
    choix: {
      a: "Stop the testing and schedule a meeting to review the proposed changes with the resources.",
      b: "Complete testing while the project manager meets with the key stakeholder to review the proposed changes.",
      c: "Document the proposed changes and assess any impact on time, cost, and resources.",
      d: "Postpone the proposed changes and allow the team to complete the testing and implementation activities."
    },
    reponse: "c",
    rationale: "The project manager should document the proposed changes and assess the impact on resources, time, and cost before deciding on further actions."
  },
  {
    numero: 100,
    question: "A project manager is managing a project for a successful startup. The startup has shown exponential growth with multiple benefits to the team members, including flexible work hours and a work-from-home policy. During the last retrospective, one of the team members noted that the team velocity improved when the team was physically gathered in the project room. What should the project manager do?",
    choix: {
      a: "Gather feedback and analyze the impact of physical location on team velocity.",
      b: "Refine the backlog to improve team velocity and maintain current policies.",
      c: "Share the idea with senior management and suggest updating company policies.",
      d: "Update the resource management plan and team charter to promote colocation."
    },
    reponse: "a",
    rationale: "The project manager should gather feedback and analyze how physical location affects team velocity to make informed decisions on optimizing productivity."
  }
];


export const examenAAI_Q101to110 = [
  {
    numero: 101,
    question: "A project manager is responsible for leading a product release that has aggressive go-to-market timelines. A total of 600 story points is estimated with a velocity of 60 points per iteration. A team of up to 12 members has been assigned to this project. Which statement about this scenario is true?",
    choix: {
      a: "A velocity of 60 points per iteration represents the minimum work to be done, and 12 team members represent the maximum size of the team.",
      b: "A velocity of 60 points per iteration means the project is under control, and 12 team members mean that the project is out of control.",
      c: "A velocity of 60 points per iteration means the project is under control, and 12 team members represent the maximum size of the team.",
      d: "A velocity of 60 points per iteration represents the minimum work to be done, and 12 team members means the project is under control."
    },
    reponse: "a",
    rationale: "A velocity of 60 points per iteration represents the minimum work to be done, and 12 team members represent the maximum size of the team. Velocity is a measure of work capacity and not a direct indicator of project control."
  },
  {
    numero: 102,
    question: "A new project manager takes over a construction project. Upon reviewing the project management plan, the project manager realizes that the health and safety requirements have not been adequately addressed. What is the primary concern in this situation?",
    choix: {
      a: "Failing to address health and safety issues could damage the client's trust and reputation.",
      b: "The project must comply with all legal and regulatory requirements and responsibilities.",
      c: "The project timeline may be jeopardized by implementing additional safety measures.",
      d: "The project manager knows that it is crucial to meet the established performance metrics."
    },
    reponse: "b",
    rationale: "The primary concern is regulatory compliance and ethical responsibility for worker safety. Client relations and performance metrics are secondary to ensuring compliance."
  },
  {
    numero: 103,
    question: "A project manager working in an agile environment realizes that some new team members are having difficulty understanding how more senior team members accomplished certain results on the project. What should the project manager do?",
    choix: {
      a: "Arrange a review meeting with stakeholders.",
      b: "Ensure team members focus on their tasks.",
      c: "Assess the need for knowledge transfer.",
      d: "Encourage and facilitate peer mentoring."
    },
    reponse: "d",
    rationale: "Peer mentoring allows new team members to learn from experienced team members and fosters collaboration. Other options do not directly address the learning challenge."
  },
  {
    numero: 104,
    question: "During a project schedule review meeting, the project team identified that one of the critical path activities has slipped due to external dependencies. What should the project manager prioritize as the initial response?",
    choix: {
      a: "Issue a change request and meet with the customer.",
      b: "Rebaseline the schedule and notify the project sponsor.",
      c: "Update the documentation and identify corrective actions.",
      d: "Notify the customer and request that the timeline be extended."
    },
    reponse: "c",
    rationale: "The project manager should first update documentation and identify corrective actions to ensure the team and stakeholders have accurate information. External communications or major changes follow after internal assessment."
  },
  {
    numero: 105,
    question: "A new project involving team members from two countries has just begun. Due to a time difference, one site finishes work an hour after the other site starts for the day. What should the project manager do to promote communication between the two sites?",
    choix: {
      a: "Praise the team members who are available after hours.",
      b: "Schedule online meetings during the overlapping hours.",
      c: "Ask the team members to adhere to uniform working hours.",
      d: "Draft a team charter to establish a decision-making method."
    },
    reponse: "b",
    rationale: "Scheduling meetings during overlapping hours ensures both sites can communicate effectively. Other options either risk burnout or do not directly facilitate communication."
  },
  {
    numero: 106,
    question: "In a software development project, a stakeholder wants to add a major requirement that is not aligned with documented project objectives. What should the project manager do next?",
    choix: {
      a: "Ensure the stakeholder understands the purpose of the project.",
      b: "Encourage the stakeholder to follow the written business requirements.",
      c: "Include the additional requirement into the project and inform the business owner.",
      d: "Fast-track the project and suggest the new requirement to the business owner."
    },
    reponse: "a",
    rationale: "The project manager must ensure alignment between stakeholder needs and project objectives. Other actions can follow once understanding and alignment are established."
  },
  {
    numero: 107,
    question: "A global, cross-functional team has been assembled to deliver a multinational initiative. What should the project manager do to ensure full team participation throughout the project?",
    choix: {
      a: "Coordinate time zone information and agree to meeting times.",
      b: "Ensure software is delivered in multiple languages.",
      c: "Translate the project documentation.",
      d: "Provide guidance on common tools and practices."
    },
    reponse: "a",
    rationale: "Coordinating meeting times across time zones ensures participation. Other options do not guarantee that all team members can actively participate."
  },
  {
    numero: 108,
    question: "A project is currently behind schedule when a new team member, known for high performance, is assigned. The new member lacks specific project training but has relevant skills. What should the project manager do?",
    choix: {
      a: "Ensure that the team member receives training before joining the team.",
      b: "Assign the new team member to critical activities under close monitoring while they receive training.",
      c: "Assign the new team member to noncritical activities without close monitoring while training is provided.",
      d: "Decline the addition of the new team member to the team."
    },
    reponse: "c",
    rationale: "Assigning to noncritical activities allows the new member to contribute while gaining necessary training. Delaying or restricting contributions would be inefficient given the project is behind schedule."
  }
];


export const examenAAI_Q111to120 = [
  {
    numero: 111,
    question: "During a design workshop for a new robot, the engineers ask the project manager about safety and environmental protocols for its operating procedures. What should the project manager do?",
    choix: {
      a: "Hire a specialized engineer to support the design team.",
      b: "Provide the team with the organizational process assets and the project charter.",
      c: "Look into lessons learned documentation for similar projects.",
      d: "Run a benchmark with similar plants to capture their compliance constraints."
    },
    reponse: "b",
    rationale: "Organizational process assets and the project charter provide the team with the necessary plans, processes, policies, procedures, and knowledge bases to ensure compliance with safety and environmental regulations."
  },
  {
    numero: 112,
    question: "A company is about to start a project in a remote place known for extreme weather. What should the project manager do in the event of extreme weather?",
    choix: {
      a: "Pause work until a specialized team arrives to assess the damage.",
      b: "Consult the initial plans in case of an emergency, then update and follow corrective procedures.",
      c: "Advise management to reconsider the investment and continuity of the project.",
      d: "Stop the iteration, run a retrospective, and move to the next phase."
    },
    reponse: "b",
    rationale: "The project manager should follow preplanned risk response procedures. Consulting the initial plans ensures that approved risk strategies are correctly applied."
  },
  {
    numero: 113,
    question: "A gas pipeline construction project was suspended after 24 months due to a breach of social impact procedures. What should the project manager have done to avoid this?",
    choix: {
      a: "Developed a contingency plan in case of suspension.",
      b: "Reviewed local regulations and procedures and planned accordingly.",
      c: "Requested additional resources to expedite construction after suspension.",
      d: "Established a regular communication channel with the local government."
    },
    reponse: "b",
    rationale: "Compliance with governmental regulations and procedures must be planned from the start. Reviewing regulations proactively avoids project suspension."
  },
  {
    numero: 114,
    question: "During project planning, a senior stakeholder suggests releasing the product at the end of the project to show all features. What should the project manager do?",
    choix: {
      a: "Ask the team to propose a release schedule based on feature complexity.",
      b: "Recommend three releases: beginning, middle, and end of project.",
      c: "Create release plans for each completed product feature.",
      d: "Propose delivering the product over multiple iterations to gather customer feedback."
    },
    reponse: "d",
    rationale: "Iterative delivery allows for early feedback and incremental value, reducing risk and aligning the product with customer needs."
  },
  {
    numero: 115,
    question: "A project is delivering incremental business value. Success criteria is a 20% increase in market share. When should the project be considered a success?",
    choix: {
      a: "When sprint reviews demonstrate each iteration delivers a 20% increase.",
      b: "After documentation is completed and team is reassigned.",
      c: "At the conclusion of project execution, as part of project closure report approval.",
      d: "When 75% of the project is complete and EVM indicates value is on track."
    },
    reponse: "c",
    rationale: "Business metrics, such as market share, can only be measured at project completion. Success is determined during the closure phase."
  },
  {
    numero: 116,
    question: "A project manager is nine months into a 12-month waterfall project when a customer suggests a new technology reducing costs by 10%. What should the project manager do?",
    choix: {
      a: "Update the configuration management plan to include the new technology.",
      b: "Continue as planned since the technology was not in the original plan.",
      c: "Create a change request to evaluate feasibility and impact of the new technology.",
      d: "Ask the team to implement remaining components with the new technology."
    },
    reponse: "c",
    rationale: "A change request ensures structured evaluation of feasibility and impact, enabling informed decisions without disrupting project control."
  },
  {
    numero: 117,
    question: "During a daily status meeting, it is discovered that the team did not complete a critical task, delaying the iteration. Actions needed are beyond the team's authority. What should the project manager do?",
    choix: {
      a: "Delay the iteration and inform stakeholders.",
      b: "Invite the team to a swarming session to define a solution.",
      c: "Adjust the project timeline to accommodate the delay.",
      d: "Escalate the issue to the project sponsor to define next steps."
    },
    reponse: "d",
    rationale: "Issues beyond the team's authority require escalation to the project sponsor for decision-making and direction."
  },
  {
    numero: 118,
    question: "The CTO requests that all project managers apply servant leadership practices but is unsure of practical applications. How should the project manager respond?",
    choix: {
      a: "Explain that servant leadership can be adapted and applied to any project situation.",
      b: "Remind the CTO that servant leadership is suited for agile projects.",
      c: "Clarify that servant leadership focuses on client preferences.",
      d: "Affirm that servant leadership only works for projects with substantial resources."
    },
    reponse: "a",
    rationale: "Servant leadership focuses on team member development and can be applied in any project context, regardless of methodology or resources."
  },
  {
    numero: 119,
    question: "A hybrid scrum team has completed must-have and should-have features for an MVP. What should the project manager recommend in the monthly report?",
    choix: {
      a: "Reschedule the MVP release until all features are complete.",
      b: "Update the plan to include only completed features in the release.",
      c: "Complete the sprint review and release the MVP with completed features.",
      d: "Estimate effort and submit a change request for more resources."
    },
    reponse: "c",
    rationale: "The MVP should be released with core features to validate the product and obtain user feedback. Remaining features can be developed iteratively."
  },
  {
    numero: 120,
    question: "A project team struggles to adjust to frequent changes in requirements and status. What should the project manager do to improve adaptability?",
    choix: {
      a: "Request that the sponsor communicate directly with the team.",
      b: "Communicate with stakeholders regularly to avoid frequent changes.",
      c: "Provide one-on-one guidance to each team member consistently.",
      d: "Establish clear and consistent communication channels and protocols."
    },
    reponse: "d",
    rationale: "Clear and consistent communication channels ensure the team is informed of changes and can adjust efficiently, improving overall performance."
  }
];


export const examenAAI_Q121to130 = [
  {
    numero: 121,
    question: "After nine months, a project concludes its first phase with the release of a new product to the customer. The client is dissatisfied and states that many key features are missing. What should the project manager do first?",
    choix: {
      a: "Evaluate the missing features with the client and develop a plan to include them in the next nine-month project phase.",
      b: "Review the project plan to determine if the missing features were part of the original scope or if they were added later.",
      c: "Request additional funding to reduce the current release cycle timeline.",
      d: "Restart the project by implementing an agile life cycle and create a minimum viable product (MVP)."
    },
    reponse: "b",
    rationale: "The project manager should first review the project plan and scope to determine if the missing features were part of the original scope or added later. This ensures understanding of the issue before developing a corrective plan."
  },
  {
    numero: 122,
    question: "During the execution phase of a project, a previously unforeseen risk is identified that could delay the project. What should the project manager do first?",
    choix: {
      a: "Update the risk register.",
      b: "Perform qualitative risk analysis.",
      c: "Update the project sponsors.",
      d: "Plan for additional budget."
    },
    reponse: "a",
    rationale: "Updating the risk register ensures the risk is properly documented and tracked, forming the basis for subsequent analysis and mitigation."
  },
  {
    numero: 123,
    question: "A project manager is working on an internal project where the PMO sponsor has changed and the new leader does not see the project's value. What should the project manager do?",
    choix: {
      a: "Organize a second project kick-off meeting with the new PMO leader.",
      b: "Use previous data to obtain sponsorship from the new leader.",
      c: "Use the benefits tracked throughout the project to prove the project's value.",
      d: "Continue the project as planned because it is already approved."
    },
    reponse: "c",
    rationale: "Demonstrating the tracked benefits of the project shows its value and alignment with organizational goals to the new PMO leader."
  },
  {
    numero: 124,
    question: "A project is underway with team members from two countries and complaints arise about response times and work/life balance. What should the project manager do?",
    choix: {
      a: "Reevaluate the team charter with team members.",
      b: "Revisit the communications management plan.",
      c: "Remind team members to consider cultural differences.",
      d: "Investigate the root cause of misunderstandings."
    },
    reponse: "a",
    rationale: "Reevaluating the team charter clarifies expectations, operating guidelines, and behavioral norms to address work/life balance and communication issues."
  },
  {
    numero: 125,
    question: "A project team's performance has declined over the last three iterations, with team members raising concerns during retrospectives. What should the project manager do?",
    choix: {
      a: "Identify potential failure points based on iteration workload.",
      b: "Motivate the team to perform better.",
      c: "Focus on remediation, not merely on correcting symptoms.",
      d: "Compare the team's performance against other project teams."
    },
    reponse: "c",
    rationale: "Root cause analysis focuses on remediation by addressing underlying causes rather than superficial symptoms, ensuring long-term performance improvement."
  },
  {
    numero: 126,
    question: "During product development, two functional departments indicate insufficient resources to deliver all products on time. What should the project manager do?",
    choix: {
      a: "Escalate the issue to the sponsor and request confirmation of project scope.",
      b: "Ask the functional manager to hire additional resources.",
      c: "Request team members work extra hours.",
      d: "Analyze the critical path to deliver the minimum viable product (MVP)."
    },
    reponse: "d",
    rationale: "Analyzing the critical path to identify the MVP allows the project manager to deliver an acceptable outcome within constraints of time and resources."
  },
  {
    numero: 127,
    question: "A project manager plans development activities for team members to improve performance. What should be done first?",
    choix: {
      a: "Conduct a skills assessment of the team members.",
      b: "Ask the team to determine their development plans.",
      c: "Distribute clear development plans to the team members.",
      d: "Implement a reward system based on performance."
    },
    reponse: "a",
    rationale: "A skills assessment identifies individual strengths and weaknesses, allowing tailored development activities that align with project goals."
  },
  {
    numero: 128,
    question: "A remote project team has members from two countries, and one team expects three days off for a national holiday. The project manager requires them to work. What should have been clearly defined at the start?",
    choix: {
      a: "Team agreements",
      b: "Milestones",
      c: "Individual roles",
      d: "Team hierarchy"
    },
    reponse: "a",
    rationale: "Team agreements set behavioral norms, including holidays and time-off expectations, avoiding misunderstandings and setting clear commitments."
  },
  {
    numero: 129,
    question: "During planning of an upgrade project, benchmarking revealed longer outages due to frequent maintenance. What is the next step for the project manager?",
    choix: {
      a: "Benchmark projects using other technologies.",
      b: "Compare other similar technologies and recommend alternatives.",
      c: "Create a risk item in the risk register and incorporate thresholds.",
      d: "Discuss probable downtime with the sponsor and obtain approval."
    },
    reponse: "c",
    rationale: "Creating a risk item in the risk register ensures the project incorporates identified risks and threshold values for mitigation planning."
  },
  {
    numero: 130,
    question: "An events company is planning a new event and a past issue may reoccur. How should the project manager proceed?",
    choix: {
      a: "Identify the root cause and consult with stakeholders.",
      b: "Handle the issue if it arises during planning.",
      c: "Recommend rescheduling the conference.",
      d: "Implement the same strategies used in the last event."
    },
    reponse: "a",
    rationale: "Proactively identifying the root cause and consulting stakeholders allows the project manager to develop a risk management plan and mitigate potential issues."
  }
];


export const examenAAI_Q131to140 = [
  {
    numero: 131,
    question: "A project manager in the execution phase discovers that several stakeholders identified at project initiation are no longer involved. These removed stakeholders are frustrated with unnecessary communication. What should the project manager have done to prevent this?",
    choix: {
      a: "Identified and documented all stakeholder requirements at the start of the project.",
      b: "Reported all project information to every stakeholder throughout the project lifecycle.",
      c: "Updated the stakeholder engagement plan through the change control process.",
      d: "Relied on existing stakeholders to inform the project manager about missing stakeholders."
    },
    reponse: "c",
    rationale: "The stakeholder engagement plan should be updated when stakeholders are removed to reflect changes and ensure effective engagement."
  },
  {
    numero: 132,
    question: "A newly identified stakeholder bypasses the project manager to get feedback from the sponsor. What should the project manager do next?",
    choix: {
      a: "Call a project meeting of all stakeholders to discuss the matter.",
      b: "Email the communications management plan to the stakeholder.",
      c: "Meet the project sponsor and confirm single point of contact.",
      d: "Meet with the stakeholder to understand their needs and update the communication management plan."
    },
    reponse: "d",
    rationale: "Meeting the stakeholder ensures their needs are understood and incorporated into the communications management plan, preventing future ad hoc escalations."
  },
  {
    numero: 133,
    question: "An agile team receives multiple unplanned product enhancement requests during an iteration. How should the project manager address this?",
    choix: {
      a: "Tell the team to increase their efforts to accommodate the requests.",
      b: "Ask the product owner to include requests in the current iteration.",
      c: "Request the team to reprioritize all committed activities.",
      d: "Ask the product owner to add the enhancement requests to the product backlog."
    },
    reponse: "d",
    rationale: "Unplanned requests should be added to the backlog by the product owner to maintain focus on the current iteration's commitments."
  },
  {
    numero: 134,
    question: "A project manager engaged a vendor for testing. What should be provided before testing starts?",
    choix: {
      a: "Test plan and requirements traceability matrix.",
      b: "Test plan and quality risk assessment.",
      c: "Defect reports and test scripts.",
      d: "Requirements traceability matrix and defect reports."
    },
    reponse: "a",
    rationale: "Providing the test plan and requirements traceability matrix ensures structured testing and coverage of all requirements."
  },
  {
    numero: 135,
    question: "A team member unfamiliar with a subject struggles with a deliverable. What should the agile project manager do?",
    choix: {
      a: "Ensure the team member receives adequate training.",
      b: "Encourage the member to take on more stories until comfortable.",
      c: "Ask the member to avoid stories on this subject until comfortable.",
      d: "Replace the member with a more experienced person."
    },
    reponse: "a",
    rationale: "Providing adequate training ensures the team member can handle similar tasks in the future, improving capability and team performance."
  },
  {
    numero: 136,
    question: "A new team member joins during a long-term project and asks for reiteration of roles during a retrospective. What should the project manager do?",
    choix: {
      a: "Direct them to review the project plan after the meeting.",
      b: "Inform them this is best addressed in another meeting.",
      c: "Ask each member to explain their role in the retrospective.",
      d: "Ask the functional manager to review the onboarding process."
    },
    reponse: "b",
    rationale: "Maintaining the retrospective's focus prevents disruption while allowing a separate meeting to onboard the new member effectively."
  },
  {
    numero: 137,
    question: "During an iteration, a team member suggests a new method requiring several days but may improve efficiency. How should the project manager respond?",
    choix: {
      a: "Immediately implement the change.",
      b: "Reject the suggestion.",
      c: "Document the idea for future consideration.",
      d: "Acknowledge and assess the new method's impact."
    },
    reponse: "d",
    rationale: "Acknowledging and assessing ensures informed decisions and encourages collaboration without disrupting current work unnecessarily."
  },
  {
    numero: 138,
    question: "An agile team experiences feature reprioritization mid-iteration by the product owner. What should the project manager do first?",
    choix: {
      a: "Escalate to senior management.",
      b: "Tell the team to ignore changes.",
      c: "Explain implications of mid-iteration changes to the product owner.",
      d: "Allow the product owner to make changes as needed."
    },
    reponse: "c",
    rationale: "Educating the product owner on the impact prevents scope creep and ensures informed prioritization decisions."
  },
  {
    numero: 139,
    question: "A key resource expresses inability to deliver tasks due to other priorities. What should the project manager do?",
    choix: {
      a: "Schedule a team meeting to assess and manage priorities.",
      b: "Document the lack of availability as a risk.",
      c: "Escalate to the project sponsor.",
      d: "Update the project plan to reflect potential delay."
    },
    reponse: "a",
    rationale: "Managing priorities collaboratively addresses conflicts proactively and ensures alignment on resource allocation."
  },
  {
    numero: 140,
    question: "A key stakeholder complains about not receiving progress updates. What should the project manager do?",
    choix: {
      a: "Copy the stakeholder on weekly emails.",
      b: "Review and update the communications management plan.",
      c: "Send a copy of the latest status report.",
      d: "Invite them to the next project meeting."
    },
    reponse: "b",
    rationale: "Updating the communications plan addresses the root cause, ensuring stakeholder information needs are systematically met."
  }
];

export const examenAAI_Q_TS = [
  {
    numero: 141,
    question: "In a review meeting, a project manager detects a misunderstanding about one critical deliverable. What should the project manager do first?",
    choix: {
      a: "Ask the team members to clarify the deliverable.",
      b: "Ask the customer to clarify the deliverable.",
      c: "Ask the product owner to clarify the deliverable.",
      d: "Ask the sponsor to clarify the deliverable."
    },
    reponse: "a",
    rationale: "The team members are the ones who will be working on the deliverable, so they are the best people to clarify it. The project manager should facilitate a discussion between the team members to ensure they all have a shared understanding of the deliverable. If the team members are unable to reach a consensus, the project manager can escalate to the customer or product owner, but this is not the first step. Asking the sponsor should be a last resort.",
    reference: "PMBOK Guide Seventh Edition (2021) /190-193 [Section 4: Models, Methods and Artifacts, 4.6.7 Reports]"
  },
  {
    numero: 142,
    question: "In a project where a third-party provider is implementing a custom solution, the project manager must ensure that the local team will have the capacity to support the solution. What should the project manager do?",
    choix: {
      a: "Delegate the responsibility of supporting the custom solution to the third-party provider.",
      b: "Conduct comprehensive training sessions for the local team on the new solution.",
      c: "Reduce the responsibilities of the local team to minimize the need for support.",
      d: "Hire additional personnel to provide ongoing support for the local team."
    },
    reponse: "b",
    rationale: "It is important to ensure team members understand and fulfill their roles by identifying knowledge gaps and providing training. Training the local team ensures they can support the custom solution independently, reducing reliance on third-party resources.",
    reference: "The Standard for Project Management (2021) /// Proj Managers Portable HB, 3rd Ed, 7.1/280"
  },
  {
    numero: 143,
    question: "During an iteration, a key project team member announces their resignation. The project manager realizes one product feature will be impacted. What should the project manager do?",
    choix: {
      a: "Submit a change request to modify the delivery date.",
      b: "Request that HR retain the team member until the end of the project.",
      c: "Accelerate knowledge sharing with the cross-functional team.",
      d: "Discuss the situation with the product owner and determine if resources should be added to the team."
    },
    reponse: "d",
    rationale: "The project manager should collaborate with the product owner to plan how to mitigate the impact of the resignation, including assessing resource needs. Knowledge sharing is important but insufficient alone; extending delivery or retaining staff is not feasible.",
    reference: "PMBOK Guide Seventh Edition (2022) PMI /// 2.2.1 PROJECT TEAM MANAGEMENT AND LEADERSHIP"
  },
  {
    numero: 144,
    question: "A project manager is working on a new project. Two key project resources have a disagreement regarding a requirement. One resource is unwilling to meet. What should the project manager do?",
    choix: {
      a: "Escalate the issue to the project sponsor.",
      b: "Accept the position of the senior project resource.",
      c: "Review the organizational process assets (OPAs).",
      d: "Refer to the team's ground rules and project vision."
    },
    reponse: "d",
    rationale: "The project manager should use established ground rules and the project vision to resolve conflicts. Escalating or favoring a senior resource does not promote collaborative conflict resolution.",
    reference: "Choose Your WoW! A Disciplined Agile Delivery Handbook (2019) / PMBOK Guide Sixth Edition (2018) 349"
  },
  {
    numero: 145,
    question: "A senior team member was influential in past projects but is now demotivated. What should the project manager do?",
    choix: {
      a: "Arrange a team meeting to discuss motivation.",
      b: "Provide incentives to increase motivation.",
      c: "Ask the functional manager to speak with the team member.",
      d: "Arrange a one-on-one meeting with the team member."
    },
    reponse: "d",
    rationale: "A one-on-one feedback session allows the project manager to assess concerns and increase motivation using soft skills and personal engagement.",
    reference: "O'Reilly Platform (No Date) /// PMBOK Guide Sixth Edition (2018) 3.1"
  },
  {
    numero: 146,
    question: "An agile project team consistently delivers value but is over budget with backlog items remaining. Stakeholders are concerned. What should the project manager do?",
    choix: {
      a: "Measure user satisfaction and present results to the steering committee.",
      b: "Remove deliverables from the backlog that were not in the charter.",
      c: "Request additional budget based on remaining backlog.",
      d: "Emphasize finishing committed work on time."
    },
    reponse: "a",
    rationale: "Demonstrating delivered value through user satisfaction helps stakeholders see the project’s benefits and aligns with agile principles.",
    reference: "Lean-Agile Software Development / The Agile Practice Guide (2017) PMI/PMI 5.4.1"
  },
  {
    numero: 147,
    question: "A sponsor refuses a budget increase for the current iteration. What should the project manager do?",
    choix: {
      a: "Submit a change request for formal approval.",
      b: "Work with stakeholders to develop flexible budgeting approaches.",
      c: "Explain to the sponsor the risk of not having the budget.",
      d: "Spend the extra money and compensate in the next sprint."
    },
    reponse: "b",
    rationale: "Developing flexible budgeting approaches allows the team to continue work without exceeding approved funds. Submitting a change request may not be feasible, and spending extra money is irresponsible.",
    reference: "O'Reilly Platform (No Date) /// The Agile Practice Guide (2017) PMI/PMI 4.2.1.3"
  },
  {
    numero: 148,
    question: "During week two of a two-week sprint, a core team member is unavailable. What should the project manager do first?",
    choix: {
      a: "Request the product manager increase the timeline.",
      b: "Identify tasks that can be reassigned to other team members.",
      c: "Extend the sprint to offset the loss.",
      d: "Get additional resources from other teams."
    },
    reponse: "b",
    rationale: "Reassigning tasks ensures continuity without delay. Other options may be disruptive or unnecessary.",
    reference: "O'Reilly Platform (No Date) / PMI, First edition, Wysocki, Sprint Planning Meeting"
  },
  {
    numero: 149,
    question: "While validating deliverables, a team member used an outdated scope document, causing errors. What should the project manager do?",
    choix: {
      a: "Discuss the latest deliverables in the next meeting.",
      b: "Update the project document register.",
      c: "Perform a change control process.",
      d: "Share the updated scope document with the team."
    },
    reponse: "c",
    rationale: "A formal change control process ensures the error is documented, impacts assessed, and corrective actions implemented. Other actions alone are insufficient.",
    reference: "Mastering Project Time Management, Cost Control, and Quality Management (No Date) / PMBOK Guide Seventh Edition (2022) 2.4.7"
  },
  {
    numero: 150,
    question: "A company in a heavily regulated industry is releasing a new product. How should the project manager ensure competitors do not enter first?",
    choix: {
      a: "Use a predictive approach.",
      b: "Include resources to fast-track the project.",
      c: "Implement iterations early and schedule predictive tasks just before rollout.",
      d: "Request an agile coach to increase release speed."
    },
    reponse: "c",
    rationale: "Early iterations allow rapid feedback and compliance while scheduling predictive tasks ensures regulatory adherence, facilitating a faster and safer market entry.",
    reference: "Practices for Scaling Lean & Agile Development / The Agile Practice Guide (No Date) PMI/PMI 3.1.6"
  },
  {
    numero: 151,
    question: "A project manager is assembling a team with new and experienced members. Cohesion issues arise due to skill gaps. What should the project manager do?",
    choix: {
      a: "Offer bonuses to experienced members to mentor new members.",
      b: "Analyze skills of all members, identify gaps, and develop plans to address them.",
      c: "Reassign new members to other projects.",
      d: "Explain team members must resolve issues themselves."
    },
    reponse: "b",
    rationale: "Assessing skills and addressing gaps through training or mentoring fosters collaboration and growth, rather than bypassing or isolating team members.",
    reference: "O'Reilly Platform (No Date) /// PMBOK Guide Seventh Edition (2022) 2.2 TEAM PERFORMANCE DOMAIN"
  },
  {
    numero: 152,
    question: "Managing several interconnected projects with dependencies. What is the most appropriate action?",
    choix: {
      a: "Identify and document all inter-project dependencies.",
      b: "Adjust project timelines to remove dependencies.",
      c: "Eliminate all potential dependencies.",
      d: "Ensure all projects can proceed independently."
    },
    reponse: "a",
    rationale: "Documenting dependencies ensures clear understanding, facilitates planning, and identifies risks. Other options may be impractical or ineffective.",
    reference: "Choose Your WoW! A Disciplined Agile Delivery Handbook (2019) /// PMBOK Guide Seventh Edition (2022) 2.4.2 / 2.6.2"
  },
  {
    numero: 153,
    question: "In early team formation, members constantly ask for help resolving conflicts about client requirements. What should the project manager do?",
    choix: {
      a: "Empower the team to resolve conflicts themselves.",
      b: "Spend time resolving these conflicts with the team.",
      c: "Use the conflict resolution committee.",
      d: "Escalate conflicts to the program manager."
    },
    reponse: "a",
    rationale: "Empowering the team develops problem-solving skills and frees the project manager to focus on main tasks. Escalation or heavy involvement is a last resort.",
    reference: "PMBOK Guide Seventh Edition (2021) /166 Section 4.2.6.1"
  },
  {
    numero: 154,
    question: "In an agile project 95% complete, stakeholders are concerned about business value. What should the project manager do?",
    choix: {
      a: "Communicate with stakeholders to mitigate concerns.",
      b: "Instruct the sponsor to review goals and work.",
      c: "Meet with the product owner to re-evaluate scope and deliverables.",
      d: "Request the business analyst adjust project goals."
    },
    reponse: "c",
    rationale: "Meeting with the product owner ensures scope and deliverables align with business goals. Other options do not adequately address value alignment.",
    reference: "Agile Practice Guide (2017) PMI /// PMBOK Guide – Seventh Edition (2021) 2.6 DELIVERY PERFORMANCE DOMAIN"
  },
  {
    numero: 155,
    question: "Due to a lack of local skills, a company employs an international virtual team. How should the project manager ensure engagement?",
    choix: {
      a: "Ensure the team attends the kickoff meeting.",
      b: "Adopt a past virtual team’s communication plan.",
      c: "Rely on asynchronous communication for all major status reports.",
      d: "Conduct recurring check-ins and meetings at scheduled intervals."
    },
    reponse: "d",
    rationale: "Recurring check-ins ensure engagement, accountability, and alignment. Other options do not provide ongoing interaction or feedback.",
    reference: "PMBOK Guide – Seventh Edition (2021) PMI /// Succeeding with Agile (No Date) 18 Distributed Teams"
  }
];

// ============================================================
// PMP EXAM STRUCTURE - Chapters, Topics, Category, Questions
// ============================================================

import type { Question, Chapter, Topic, Category } from '../types';

// PMP Exam Chapters
export const pmpExamChapters: Chapter[] = [
  { id: 'pmp-ch-1', name: 'People Domain', slug: 'pmp-people', questionCount: 50 },
  { id: 'pmp-ch-2', name: 'Process Domain', slug: 'pmp-process', questionCount: 45 },
  { id: 'pmp-ch-3', name: 'Business Environment Domain', slug: 'pmp-business', questionCount: 35 },
  { id: 'pmp-ch-4', name: 'Agile & Hybrid', slug: 'pmp-agile-hybrid', questionCount: 25 },
];

// PMP Topics
export const pmpExamTopics: Topic[] = [
  {
    id: 'pmp-topic-1',
    name: 'PMP Exam Blanc',
    slug: 'pmp-exam-blanc',
    description: 'Complete PMP exam practice with 155 questions covering People, Process, Business Environment domains with Agile/Hybrid approaches.',
    icon: 'Target',
    questionCount: 155,
    chapters: pmpExamChapters,
  },
];

// PMP Category
export const pmpExamCategory: Category = {
  id: 'pmp-cat-1',
  name: 'PMP - Project Management Professional',
  slug: 'pmp-exam',
  description: 'PMP certification exam preparation with comprehensive questions covering all ECO domains: People, Process, and Business Environment.',
  icon: 'Award',
  color: 'warning',
  topics: pmpExamTopics,
};

// PMP Answer Key
export const pmpExamAnswerKey: Record<number, string> = {
  1: 'C', 2: 'D', 3: 'D', 4: 'D', 5: 'C', 6: 'C', 7: 'C', 8: 'A', 9: 'B', 10: 'D',
  11: 'A', 12: 'D', 13: 'B', 14: 'D', 15: 'D', 16: 'C', 17: 'A', 18: 'C', 19: 'C', 20: 'B',
  21: 'B', 22: 'A', 23: 'C', 24: 'A', 25: 'C', 26: 'B', 27: 'C', 28: 'B', 29: 'C', 30: 'C',
  31: 'D', 32: 'D', 33: 'B', 34: 'D', 35: 'C', 36: 'B', 37: 'C', 38: 'C', 39: 'C', 40: 'B',
  41: 'C', 42: 'A', 43: 'C', 44: 'B', 45: 'B', 46: 'A', 47: 'D', 48: 'D', 49: 'D', 50: 'A',
  51: 'A', 52: 'C', 91: 'A', 92: 'C', 93: 'A', 94: 'C', 95: 'D', 96: 'C', 97: 'A', 98: 'D',
  99: 'C', 100: 'A', 101: 'A', 102: 'B', 103: 'D', 104: 'C', 105: 'B', 106: 'A', 107: 'A', 108: 'C',
  111: 'B', 112: 'B', 113: 'B', 114: 'D', 115: 'C', 116: 'C', 117: 'D', 118: 'A', 119: 'C', 120: 'D',
  121: 'B', 122: 'A', 123: 'C', 124: 'A', 125: 'C', 126: 'D', 127: 'A', 128: 'A', 129: 'C', 130: 'A',
  131: 'C', 132: 'D', 133: 'D', 134: 'A', 135: 'A', 136: 'B', 137: 'D', 138: 'C', 139: 'A', 140: 'B',
  141: 'A', 142: 'B', 143: 'D', 144: 'D', 145: 'D', 146: 'A', 147: 'B', 148: 'B', 149: 'C', 150: 'C',
  151: 'B', 152: 'A', 153: 'A', 154: 'C', 155: 'D',
};

// Helper function to convert question format
function convertQuestion(q: any, index: number): Question {
  const numero = q.numero || q.number || index + 1;
  const questionText = q.question || q.text || '';
  const choix = q.choix || {};
  const answers = q.answers || [];
  const reponse = (q.reponse || '').toLowerCase();

  // Determine chapter based on question number
  let chapter = 'pmp-people';
  if (numero > 50 && numero <= 95) chapter = 'pmp-process';
  else if (numero > 95 && numero <= 130) chapter = 'pmp-business';
  else if (numero > 130) chapter = 'pmp-agile-hybrid';

  // If already in Question format
  if (answers.length > 0) {
    return {
      id: q.id || `pmp-q-${String(numero).padStart(3, '0')}`,
      number: numero,
      text: questionText,
      answers: answers,
      answerType: q.answerType || 'single',
      explanation: q.explanation || '',
      difficulty: q.difficulty || 'medium',
      topic: 'pmp-exam-blanc',
      chapter: chapter,
      status: 'unseen',
    };
  }

  // Convert from legacy format (choix object)
  const convertedAnswers = Object.entries(choix).map(([key, text]) => ({
    id: key,
    text: text as string,
    isCorrect: reponse.includes(key.toLowerCase()),
  }));

  return {
    id: `pmp-q-${String(numero).padStart(3, '0')}`,
    number: numero,
    text: questionText,
    answers: convertedAnswers,
    answerType: reponse.includes(',') ? 'multiple' : 'single',
    explanation: q.explication || q.rationale || q.explanation || '',
    difficulty: 'medium',
    topic: 'pmp-exam-blanc',
    chapter: chapter,
    status: 'unseen',
  };
}

// Combine all question arrays
const allRawQuestions = [
  ...PMP_Q1to10,
  ...PMP_Q11to20,
  ...PMP_Q21to30,
  ...[agileQuestion1, agileQuestion2, agileQuestion3, agileQuestion4, agileQuestion5,
      agileQuestion6, agileQuestion7, agileQuestion8, agileQuestion9, agileQuestion10],
  ...[questionPM1, questionPM2, questionPM3, questionPM4, questionPM5,
      questionPM6, questionPM7, questionPM8, questionPM9, questionPM10,
      questionPM11, questionPM12, questionPM13, questionPM14, questionPM15,
      questionPM16, questionPM17, questionPM18, questionPM19, questionPM20,
      questionPM21, questionPM22, questionPM23, questionPM24, questionPM25,
      questionPM26, questionPM27, questionPM28, questionPM29, questionPM30,
      questionPM31, questionPM32, questionPM33, questionPM34, questionPM35,
      questionPM36, questionPM37, questionPM38, questionPM39, questionPM40,
      questionPM41, questionPM42, questionPM43, questionPM44, questionPM45,
      questionPM46, questionPM47, questionPM48, questionPM49, questionPM50,
      questionPM51, questionPM52],
  ...examenAAI_Q91to100,
  ...examenAAI_Q101to110,
  ...examenAAI_Q111to120,
  ...examenAAI_Q121to130,
  ...examenAAI_Q131to140,
  ...examenAAI_Q_TS,
];

// Export formatted questions
export const pmpExamQuestions: Question[] = allRawQuestions.map((q, i) => convertQuestion(q, i));

// Default export
export default {
  questions: pmpExamQuestions,
  chapters: pmpExamChapters,
  topics: pmpExamTopics,
  category: pmpExamCategory,
  answerKey: pmpExamAnswerKey,
};
