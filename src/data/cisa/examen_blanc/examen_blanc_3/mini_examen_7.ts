export interface Question {
  id: number;
  question: string;
  options: string[];
  solution: string;
  explication: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Which of the following is MOST helpful for understanding an organization's key driver to modernize application platforms?",
    options: [
      "A. Network architecture diagrams",
      "B. Inventory of end-of-life software",
      "C. Vendor software invoices",
      "D. System-wide incident reports"
    ],
    solution: "B",
    explication: "An inventory of end-of-life software directly reveals which platforms are no longer supported by vendors, creating security vulnerabilities and operational risks. This is the primary driver for modernization, as end-of-life software cannot receive patches or updates. Network diagrams show topology, invoices show costs, and incident reports show past issues — none directly explain the modernization need as clearly as an EOL inventory."
  },
  {
    id: 2,
    question: "An IS auditor is reviewing results from the testing of an organization's disaster recovery plan (DRP). Which of the following findings should be of GREATEST concern?",
    options: [
      "A. The testing was done after implementing a business application.",
      "B. The backups at the DR site are not encrypted.",
      "C. The testing was done during critical business hours.",
      "D. The backups at the DR site are unreadable."
    ],
    solution: "D",
    explication: "Unreadable backups at the DR site represent the most critical finding because they render the entire disaster recovery plan ineffective. If backups cannot be read, data cannot be restored, meaning the organization has no real recovery capability. Lack of encryption is a confidentiality risk but doesn't prevent recovery. Testing during business hours is a scheduling concern. Testing after a new application may be a timing issue but is less severe than having no usable backups."
  },
  {
    id: 3,
    question: "Demonstrated support from which of the following roles in an organization has the MOST influence over information security governance?",
    options: [
      "A. Information security steering committee",
      "B. Chief information security officer (CISO)",
      "C. Board of directors",
      "D. Chief information officer (CIO)"
    ],
    solution: "C",
    explication: "The board of directors holds ultimate accountability for the organization and sets the tone at the top. Their demonstrated commitment to information security governance provides the highest level of influence because it drives organizational culture, resource allocation, and strategic priorities. While the CISO leads security operations and the steering committee coordinates, it is board-level support that gives information security its organizational mandate and legitimacy."
  },
  {
    id: 4,
    question: "An employee performs computer operations and, when the situation demands, program modifications. Which of the following should the IS auditor recommend?",
    options: [
      "A. Automated logging of changes to development libraries should be instituted.",
      "B. Procedures should be established to ensure that program changes are identified and approved.",
      "C. Additional staff should be recruited to provide separation of duties.",
      "D. Access control should prevent the operator from making program modifications."
    ],
    solution: "D",
    explication: "The root issue is a segregation of duties violation: the same person performs operations and makes program modifications. The best control is to technically prevent the operator from making program changes through access controls, which addresses the risk at the source. Logging (A) is a detective control that doesn't prevent the problem. Procedures (B) can be bypassed. Hiring staff (C) is costly and may not be feasible. Access control directly removes the ability to perform incompatible functions."
  },
  {
    id: 5,
    question: "A national bank recently migrated a large number of business-critical applications to the cloud. Which of the following is MOST important to ensuring the resiliency of the applications?",
    options: [
      "A. Conducting periodic system stress testing",
      "B. Negotiating a service level agreement (SLA) with the provider",
      "C. Using a monitoring tool to assess uptime",
      "D. Creating restore points for critical applications"
    ],
    solution: "B",
    explication: "An SLA formally defines the provider's obligations regarding availability, performance, recovery time, and support. For a bank migrating critical applications to the cloud, the SLA is the contractual foundation that ensures the cloud provider is legally obligated to maintain resiliency standards. Without an SLA, the bank has no recourse if the provider fails to meet expectations. Stress testing, monitoring, and restore points are all good practices but are secondary to having a binding agreement."
  },
  {
    id: 6,
    question: "Which of the following should be an IS auditor's PRIMARY consideration when evaluating the development and design of a privacy program?",
    options: [
      "A. Policies and procedures consistent with privacy guidelines",
      "B. Industry practice and regulatory compliance guidance",
      "C. Information security and incident management practices",
      "D. Privacy training and awareness program for employees"
    ],
    solution: "B",
    explication: "The primary consideration for any privacy program is adherence to applicable laws and regulations. Industry practices and regulatory compliance guidance establish the mandatory baseline that the organization must meet. Without regulatory alignment, a privacy program may be well-designed but still expose the organization to legal penalties. Policies, security practices, and training are important components but are subordinate to the legal and regulatory framework."
  },
  {
    id: 7,
    question: "Which of the following should be of GREATEST concern to an IS auditor reviewing an organization's newly established enterprise architecture (EA)?",
    options: [
      "A. The business leaders were not consulted when designing the IT architecture.",
      "B. Standard architecture methodology was not adopted for designing the IT architecture.",
      "C. Staff responsible for designing the IT architecture do not hold a related certification.",
      "D. External experts were not consulted when designing the IT architecture."
    ],
    solution: "A",
    explication: "Enterprise architecture must align IT with business objectives. If business leaders were not consulted during design, the resulting EA may not support business strategy, leading to misalignment between IT investments and organizational goals. This is a fundamental flaw. Not using a standard methodology or lacking certifications are concerns but may still yield effective architecture. Excluding external experts is also less critical than missing the primary stakeholders — the business itself."
  },
  {
    id: 8,
    question: "Which of the following BEST enables an organization to manage unexpected or on-request jobs?",
    options: [
      "A. Service level agreements (SLAs)",
      "B. Job scheduling software",
      "C. Job scheduling by the service desk",
      "D. Console logs"
    ],
    solution: "B",
    explication: "Job scheduling software provides automated, centralized management of both planned and ad-hoc jobs. It allows operators to prioritize, queue, and monitor unexpected or on-request jobs efficiently without manual intervention. SLAs set performance expectations but don't manage jobs operationally. Service desk scheduling introduces human bottlenecks and inconsistency. Console logs are for monitoring, not managing job execution."
  },
  {
    id: 9,
    question: "When protecting mobile devices, which of the following is the PRIMARY risk mitigated by authentication controls?",
    options: [
      "A. Software updates",
      "B. Data availability and integrity",
      "C. Internal or external security breaches",
      "D. IT service failure"
    ],
    solution: "C",
    explication: "Authentication controls on mobile devices (PINs, biometrics, passwords) primarily prevent unauthorized access by internal or external parties. If a device is lost or stolen, authentication prevents an attacker from accessing corporate data. This directly addresses the risk of security breaches. Software updates relate to patch management, data availability/integrity are affected by other controls, and IT service failure is unrelated to authentication."
  },
  {
    id: 10,
    question: "During a review of an organization's technology policies, which of the following observations should be of MOST concern to the IS auditor?",
    options: [
      "A. Business objectives are not defined.",
      "B. Legal requirements are not considered.",
      "C. A globally acknowledged framework is not used.",
      "D. The policies have not been reviewed within the last three years."
    ],
    solution: "B",
    explication: "Technology policies that do not consider legal requirements expose the organization to regulatory penalties, legal liability, and compliance failures. Legal requirements are mandatory, not optional. Not defining business objectives is a strategic concern. Not using a global framework is a best practice concern. Policies not reviewed in three years may be outdated but may still be compliant. The absence of legal considerations is the most critical gap."
  },
  {
    id: 11,
    question: "Which of the following provides a new IS auditor with the MOST useful information to evaluate overall IT performance?",
    options: [
      "A. Prior audit reports",
      "B. IT balanced scorecard",
      "C. Vulnerability assessment report",
      "D. IT value analysis"
    ],
    solution: "B",
    explication: "An IT balanced scorecard provides a comprehensive, multi-dimensional view of IT performance across financial, customer, internal process, and learning/growth perspectives. It aligns IT performance with business strategy and provides both leading and lagging indicators. Prior audit reports show historical issues but are limited in scope. Vulnerability assessments focus only on security. Value analysis focuses on financial return, not overall performance."
  },
  {
    id: 12,
    question: "Which risk response has been adopted by a risk owner postponing the implementation of proper controls due to budget constraints?",
    options: [
      "A. Transfer",
      "B. Acceptance",
      "C. Avoidance",
      "D. Mitigation"
    ],
    solution: "B",
    explication: "When a risk owner knowingly decides not to implement controls and continues operations with the existing risk level — even due to budget constraints — this constitutes risk acceptance. The organization accepts that the risk exists and takes no immediate action. Transfer would involve shifting the risk (e.g., insurance). Avoidance would mean stopping the activity. Mitigation would mean partially reducing the risk."
  },
  {
    id: 13,
    question: "Before the release of a new application into an organization's production environment, which of the following should be in place to ensure that proper testing has occurred and rollback plans are in place?",
    options: [
      "A. Independent third-party approval",
      "B. Standardized change requests",
      "C. Secure code review",
      "D. Change approval board"
    ],
    solution: "D",
    explication: "A Change Approval Board (CAB) is the formal governance body that reviews, authorizes, and ensures that all required steps — including testing and rollback planning — have been completed before a change goes to production. It is specifically designed for this purpose. Third-party approval is not always required. Change requests are documentation. Secure code review is part of development but doesn't govern the overall release process."
  },
  {
    id: 14,
    question: "Which of the following BEST describes the role of the IS auditor in a control self-assessment (CSA)?",
    options: [
      "A. Implementer",
      "B. Approver",
      "C. Reviewer",
      "D. Facilitator"
    ],
    solution: "D",
    explication: "In a Control Self-Assessment (CSA), management and staff assess their own controls. The IS auditor's role is to facilitate the process — organizing workshops, guiding participants, and ensuring methodology is followed — not to perform the assessment. The auditor does not implement controls (A), approve results (B), or serve as primary reviewer (C). Facilitating allows the auditor to maintain independence while supporting the process."
  },
  {
    id: 15,
    question: "Which of the following is the BEST indication that there are potential problems within an organization's IT service desk function?",
    options: [
      "A. Lack of key performance indicators (KPIs)",
      "B. An excessive backlog of user requests",
      "C. Undocumented operating procedures",
      "D. Lack of segregation of duties"
    ],
    solution: "B",
    explication: "An excessive backlog of user requests is a direct, observable symptom of service desk dysfunction — it indicates the function is not resolving issues in a timely manner, impacting user productivity. It is an outcome measure of poor performance. Lack of KPIs and undocumented procedures are process gaps but may not immediately affect service quality. Lack of segregation of duties is a control concern but is less characteristic of service desk effectiveness."
  },
  {
    id: 16,
    question: "Which of the following is the PRIMARY objective of cyber resiliency?",
    options: [
      "A. To efficiently and effectively recover from an incident with limited operational impact",
      "B. To prevent potential attacks or disruptions in operations",
      "C. To limit the severity of security breaches and maintain continuous operations",
      "D. To resume normal operations after service disruptions"
    ],
    solution: "C",
    explication: "Cyber resiliency is about an organization's ability to anticipate, withstand, recover from, and adapt to adverse conditions involving cyber systems. Its primary objective is to limit the impact of breaches and maintain continuous operations — not just to recover (which is business continuity) or prevent (which is security). Resiliency acknowledges that breaches will occur and focuses on minimizing damage while keeping operations running."
  },
  {
    id: 17,
    question: "During a post-implementation review, which of the following provides the BEST evidence that user requirements have been met?",
    options: [
      "A. Operator error logs",
      "B. End-user documentation",
      "C. User acceptance testing (UAT)",
      "D. Management interviews"
    ],
    solution: "C",
    explication: "User Acceptance Testing (UAT) is specifically designed to verify that the system meets user requirements before and after implementation. It directly tests whether functionality aligns with what users needed. Error logs show operational problems. Documentation shows what was intended but not whether it was achieved. Management interviews provide opinions but are subjective. UAT provides the most direct, documented evidence of requirements fulfillment."
  },
  {
    id: 18,
    question: "An IS auditor assessing an organization's information systems needs to understand management's approach regarding controls. Which documentation should the auditor review FIRST?",
    options: [
      "A. Policies",
      "B. Standards",
      "C. Guidelines",
      "D. Procedures"
    ],
    solution: "A",
    explication: "Policies are the highest-level documents that express management's intent, values, and approach to controls. They set the overall framework within which standards, guidelines, and procedures operate. Reviewing policies first gives the auditor a foundational understanding of the organization's control philosophy. Standards translate policy into specific requirements; guidelines provide optional guidance; procedures detail operational steps — all flow from policies."
  },
  {
    id: 19,
    question: "Which of the following is MOST useful for matching records of incoming and outgoing personnel to identify tailgating in physical security logs?",
    options: [
      "A. Discovery sampling methodology",
      "B. Continuous auditing",
      "C. Data analytics tools",
      "D. Reconciliation with HR records"
    ],
    solution: "C",
    explication: "Data analytics tools can process large volumes of physical access log data to identify anomalies such as entries without corresponding exits (or vice versa), indicating potential tailgating. These tools can automate pattern detection across thousands of records. Discovery sampling is for finding at least one occurrence. Continuous auditing monitors over time but may not have the specific analytical capability. HR reconciliation identifies terminated employees, not tailgating patterns."
  },
  {
    id: 20,
    question: "An IS auditor assesses an organization's backup management practices for optimization potential. Which of the following features of a regular backup tape reorganization job BEST enables the organization to realize cost savings?",
    options: [
      "A. Refreshed data written on tapes",
      "B. Rotation of backup tapes",
      "C. Decommissioning of old tapes",
      "D. Defragmentation of data on tapes"
    ],
    solution: "D",
    explication: "Defragmentation of data on tapes consolidates fragmented data blocks, allowing more data to be stored on each tape and improving read/write efficiency. This directly reduces the number of tapes needed and lowers storage costs. Refreshing data ensures data integrity but doesn't save costs. Rotation manages tape lifecycle. Decommissioning eliminates unusable tapes but doesn't maximize use of current tapes. Defragmentation optimizes existing storage capacity."
  },
  {
    id: 21,
    question: "Which of the following is MOST important to define within a disaster recovery plan (DRP)?",
    options: [
      "A. Roles and responsibilities for recovery team members",
      "B. Test results for backup data restoration",
      "C. A comprehensive list of disaster recovery scenarios and priorities",
      "D. Business continuity plan (BCP)"
    ],
    solution: "A",
    explication: "Clearly defined roles and responsibilities are the most critical element of a DRP because they determine who does what during a disaster. Without knowing who is responsible for each action, even a well-documented plan will fail during execution. Test results are historical evidence. Scenarios and priorities are important but secondary to execution readiness. The BCP is a separate but related document; the DRP is focused on IT recovery specifically."
  },
  {
    id: 22,
    question: "Which of the following findings should be of MOST concern to an IS auditor assessing agile software development practices?",
    options: [
      "A. There is a low acceptance rate by the business of delivered software.",
      "B. Testing is performed by both software developers and testers.",
      "C. Release plans have been revised several times before actual release.",
      "D. The IT team feels unable to strictly follow standard agile practices."
    ],
    solution: "A",
    explication: "A low acceptance rate by the business means that delivered software does not meet business requirements, which is the fundamental failure of any development approach. This is the most critical concern because it indicates that the agile process is not producing value. Testing by multiple parties (B) is expected. Revised release plans (C) are normal in agile. Inability to follow standard agile practices (D) may indicate adaptation, not failure, as agile is flexible."
  },
  {
    id: 23,
    question: "Which of the following would BEST integrate multiple data warehouses while reducing the workload required for moving data between the warehouses?",
    options: [
      "A. Extract, transform, and load",
      "B. Data virtualization",
      "C. Real-time data mirroring",
      "D. Streaming data integration"
    ],
    solution: "B",
    explication: "Data virtualization creates a unified, virtual view of data across multiple warehouses without physically moving the data. This dramatically reduces the workload because data remains in place — it is queried virtually as needed. ETL involves physical data movement. Real-time mirroring duplicates data continuously, increasing storage and processing load. Streaming integration requires continuous data movement. Virtualization eliminates the need to move data while providing integrated access."
  },
  {
    id: 24,
    question: "A confidential file was sent to a legal entity, and hashing was used on the file. Which type of control has been applied?",
    options: [
      "A. Detective",
      "B. Compensating",
      "C. Corrective",
      "D. Preventive"
    ],
    solution: "A",
    explication: "Hashing creates a unique digital fingerprint of a file that allows detection of any changes to the file after transmission. If the file is altered, the hash value changes, detecting the modification. This is a detective control — it identifies when something has gone wrong (data integrity violation) but does not prevent the alteration from occurring. Preventive controls stop events before they happen; corrective controls fix issues; compensating controls replace primary controls."
  },
  {
    id: 25,
    question: "An IS auditor is performing a follow-up audit and notes that some critical deficiencies have not been addressed. The auditor's BEST course of action is to:",
    options: [
      "A. document management's reasons for not addressing deficiencies.",
      "B. postpone the audit until the deficiencies are addressed.",
      "C. provide new recommendations.",
      "D. assess the impact of not addressing deficiencies."
    ],
    solution: "D",
    explication: "When critical deficiencies remain unaddressed, the auditor's primary responsibility is to assess the current risk impact of those unresolved issues. This assessment informs management and the audit committee about the actual exposure. Documenting management's reasons (A) is part of the process but not the primary action. Postponing the audit (B) does not serve audit objectives. Providing new recommendations (C) may be premature before assessing ongoing impact."
  },
  {
    id: 26,
    question: "Which of the following is the BEST way to help ensure new IT implementations align with enterprise architecture (EA) principles and requirements?",
    options: [
      "A. Consider stakeholder concerns when defining the EA.",
      "B. Conduct EA reviews as part of the change advisory board.",
      "C. Perform mandatory post-implementation reviews of IT implementations.",
      "D. Document the security view as part of the EA."
    ],
    solution: "B",
    explication: "Integrating EA reviews into the Change Advisory Board (CAB) process ensures that every proposed IT change is evaluated against EA principles before approval. This is a preventive, systematic approach that catches misalignment before implementation. Stakeholder input (A) is useful in defining EA but doesn't enforce alignment for new implementations. Post-implementation reviews (C) are detective, finding issues after the fact. Documenting security views is important but doesn't govern implementation decisions."
  },
  {
    id: 27,
    question: "Which of the following is MOST important to confirm when evaluating an IT organization's structure?",
    options: [
      "A. Clear reporting and lines of authority",
      "B. Documented provisions for interdepartmental cross-training",
      "C. Comprehensive system architecture documentation",
      "D. Policies and procedures that define requirements for periodic job rotation"
    ],
    solution: "A",
    explication: "Clear reporting lines and lines of authority are foundational to organizational effectiveness and accountability. Without clear authority, decision-making becomes ambiguous, responsibilities overlap, and accountability is lost. This is the most fundamental structural element. Cross-training (B) supports resilience. System architecture documentation (C) supports IT planning. Job rotation (D) supports segregation of duties. All are important but secondary to organizational clarity."
  },
  {
    id: 28,
    question: "Which feature associated with an Infrastructure as a Service (IaaS) cloud service provider allows for the provisioning of new servers as demand changes?",
    options: [
      "A. Measured service",
      "B. Resource pooling",
      "C. Rapid elasticity",
      "D. Load balancing"
    ],
    solution: "C",
    explication: "Rapid elasticity is the NIST-defined cloud characteristic that allows resources to be provisioned and released quickly (automatically or manually) to scale with demand. It enables organizations to provision new servers rapidly when demand increases. Measured service refers to metered usage billing. Resource pooling is about multi-tenant sharing of resources. Load balancing distributes traffic but does not provision new servers."
  },
  {
    id: 29,
    question: "Which of the following provides the BEST evidence that all elements of a business continuity plan (BCP) are operating effectively?",
    options: [
      "A. Walk-through test results",
      "B. Full operational test results",
      "C. Simulation test results",
      "D. Tabletop test results"
    ],
    solution: "B",
    explication: "A full operational test (also called a full interruption test) actually shuts down primary systems and activates the BCP in a real environment, testing all elements under actual conditions. It provides the most comprehensive evidence that all BCP components work together effectively. Walk-through, tabletop, and simulation tests are progressively less comprehensive — they involve discussion, role-playing, or partial activation, not full real-world execution."
  },
  {
    id: 30,
    question: "Email required for business purposes is being stored on employees' personal devices. Which of the following is an IS auditor's BEST recommendation?",
    options: [
      "A. Prohibit employees from storing company email on personal devices.",
      "B. Implement an email containerization solution on personal devices.",
      "C. Require employees to utilize passwords on personal devices.",
      "D. Ensure antivirus protection is installed on personal devices."
    ],
    solution: "B",
    explication: "Email containerization (e.g., mobile device management with containerized apps) separates business email from personal data on the device. This allows business data to be managed, secured, and remotely wiped independently of personal content, while still permitting business use. Prohibiting storage (A) may be operationally impractical. Requiring passwords (C) and antivirus (D) are basic controls but don't address the fundamental risk of data commingling on personal devices."
  },
  {
    id: 31,
    question: "Which of the following steps of data conversion requires users to define the flow and relationship between the source and target objects on a field-by-field basis?",
    options: [
      "A. Transformation",
      "B. Extraction",
      "C. Load",
      "D. Validation"
    ],
    solution: "A",
    explication: "Transformation in the ETL process involves mapping source fields to target fields, converting data formats, and defining how data flows from one structure to another on a field-by-field basis. This requires explicit rules for each data element. Extraction pulls data from the source. Load inserts transformed data into the target. Validation checks data quality after the process. Only transformation involves the detailed field mapping activity described."
  },
  {
    id: 32,
    question: "An application development team is also promoting changes to production for a critical financial application. Which of the following is the BEST control to reduce the associated risk?",
    options: [
      "A. Performing periodic audits",
      "B. Implementing a change management code review",
      "C. Performing regression tests",
      "D. Exporting change logs to a secure server"
    ],
    solution: "B",
    explication: "When developers also promote changes to production, there is a segregation of duties risk — they could introduce unauthorized code. A change management code review requires independent review of code changes before promotion, compensating for the lack of separation. Audits (A) are after-the-fact. Regression tests (C) verify functionality but don't address unauthorized changes. Change logs (D) are detective controls that record but don't prevent unauthorized promotions."
  },
  {
    id: 33,
    question: "A vendor requires privileged access to a key business application. Which of the following is the BEST recommendation to reduce the risk of data leakage?",
    options: [
      "A. Perform a review of privileged roles and responsibilities.",
      "B. Implement real-time activity monitoring for privileged roles.",
      "C. Require the vendor to implement job rotation for privileged roles.",
      "D. Include the right-to-audit in the vendor contract."
    ],
    solution: "B",
    explication: "Real-time activity monitoring of vendor privileged access provides continuous visibility into what the vendor is doing within the application. This directly addresses data leakage risk by detecting suspicious activities as they occur and enabling rapid response. Role reviews (A) are periodic. Job rotation (C) for a vendor is impractical and doesn't prevent leakage during access. Right-to-audit (D) is important but is reactive, not preventive against data leakage."
  },
  {
    id: 34,
    question: "An IS auditor is reviewing a bank's service level agreement (SLA) with a third-party provider that hosts the bank's secondary data center. Which of the following findings should be of GREATEST concern to the auditor?",
    options: [
      "A. The SLA has not been reviewed in more than a year.",
      "B. The recovery time objective (RTO) has a longer duration than documented in the disaster recovery plan (DRP).",
      "C. The recovery point objective (RPO) has a shorter duration than documented in the disaster recovery plan (DRP).",
      "D. Backup data is hosted online only."
    ],
    solution: "B",
    explication: "If the SLA's RTO is longer than the bank's DRP requires, the third-party provider cannot meet the bank's recovery timeframes during a disaster. This creates a critical gap: the bank's plan assumes faster recovery than the provider can deliver. An RPO shorter than the DRP (C) means the provider offers better data recovery, which is not a concern. Online-only backup (D) is a risk but manageable. An SLA not reviewed in a year (A) is a compliance issue but less critical than an RTO mismatch."
  },
  {
    id: 35,
    question: "An IS auditor may be justified in using a SMALLER sample size under which of the following circumstances?",
    options: [
      "A. Lower confidence coefficient",
      "B. Higher expected error rate",
      "C. Higher reliability factor",
      "D. Lower precision amount"
    ],
    solution: "A",
    explication: "A lower confidence coefficient means the auditor is willing to accept a higher risk that the sample does not represent the population. This reduced confidence requirement allows for a smaller sample size. A higher expected error rate requires a larger sample. A higher reliability factor also requires a larger sample. Lower precision (larger tolerable deviation) would allow smaller samples, but among the options, a lower confidence coefficient most directly justifies using a smaller sample."
  },
  {
    id: 36,
    question: "An IS auditor is reviewing the service management of an outsourced help desk. Which of the following is the BEST indicator of how effectively the service provider is performing this function?",
    options: [
      "A. Number of calls worked",
      "B. Call transcript reviews",
      "C. Customer satisfaction ratings",
      "D. Average ticket age"
    ],
    solution: "C",
    explication: "Customer satisfaction ratings directly measure the end-user perception of service quality, which is the ultimate objective of a help desk function. High call volumes (A) could indicate inefficiency. Call transcripts (B) show individual interactions. Average ticket age (D) measures speed but not resolution quality. Customer satisfaction captures the overall effectiveness of the service from the perspective of those being served, making it the best overall effectiveness indicator."
  },
  {
    id: 37,
    question: "Which of the following is the BEST preventive control to protect the confidentiality of data on a corporate smartphone in the event it is lost?",
    options: [
      "A. Encryption of the data stored on the device",
      "B. Remote data wipe program",
      "C. Password for device authentication",
      "D. Biometric authentication for the device"
    ],
    solution: "A",
    explication: "Encryption of stored data is the best preventive control for protecting confidentiality if a device is lost. Even if someone bypasses authentication or before a remote wipe is activated, encrypted data remains unreadable without the decryption key. Remote wipe (B) requires connectivity and action after the fact. Passwords and biometrics (C, D) can potentially be bypassed and do not protect data if storage is extracted directly. Encryption renders the data itself inaccessible."
  },
  {
    id: 38,
    question: "Which of the following would be MOST important to include in an IS audit report?",
    options: [
      "A. Observations not reported as findings due to inadequate evidence",
      "B. The roadmap for addressing the various risk areas",
      "C. Specific technology solutions for each audit observation",
      "D. The level of unmitigated risk along with business impact"
    ],
    solution: "D",
    explication: "The most important content in an IS audit report is the level of unmitigated risk and its business impact. This gives management and stakeholders the information needed to make informed decisions about risk prioritization and remediation. Observations without evidence (A) should not be included as findings. Prescribing roadmaps (B) and technology solutions (C) is typically management's role. Risk levels with business impact directly serve the audit's core purpose of informing decision-makers."
  },
  {
    id: 39,
    question: "Which of the following should be an IS auditor's PRIMARY focus when evaluating the response process for cybercrimes?",
    options: [
      "A. Communication with law enforcement",
      "B. Notification to regulators",
      "C. Evidence collection",
      "D. Root cause analysis"
    ],
    solution: "C",
    explication: "Evidence collection is the primary focus during cybercrime response because improperly handled evidence can be inadmissible in legal proceedings and may compromise investigations. Chain of custody and forensic integrity must be maintained from the outset. Communicating with law enforcement and notifying regulators are important steps that depend on having proper evidence. Root cause analysis is a later-stage activity. Evidence collection is the foundation that enables all subsequent actions."
  },
  {
    id: 40,
    question: "Which of the following audit procedures would provide the BEST assurance that an application program is functioning as designed?",
    options: [
      "A. Interviewing business management",
      "B. Using a continuous auditing module",
      "C. Confirming accounts",
      "D. Reviewing program documentation"
    ],
    solution: "B",
    explication: "A continuous auditing module is embedded within the application and continuously tests transactions against programmed criteria, providing real-time assurance that the application processes data as designed. Interviews provide subjective opinions. Account confirmations verify balances, not program logic. Documentation reviews show what was intended, not what is actually happening. Continuous auditing directly tests actual application functioning against design specifications."
  },
  {
    id: 41,
    question: "To mitigate the risk of exposing data through application programming interface (API) queries, which of the following design considerations is MOST important?",
    options: [
      "A. Data quality",
      "B. Data integrity",
      "C. Data minimization",
      "D. Data retention"
    ],
    solution: "C",
    explication: "Data minimization means that API responses should return only the data that is necessary for the specific request, nothing more. By limiting the amount of data exposed through API queries, the attack surface for data exposure is reduced. Even if an API is compromised, data minimization limits what an attacker can access. Data quality ensures accuracy, integrity ensures data isn't tampered with, and retention governs storage duration — none directly limit exposure through API responses."
  },
  {
    id: 42,
    question: "One advantage of monetary unit sampling is the fact that:",
    options: [
      "A. large-value population items are segregated and audited separately.",
      "B. it can easily be applied manually when computer resources are not available.",
      "C. it increases the likelihood of selecting material items from the population.",
      "D. results are stated in terms of the frequency of items in error."
    ],
    solution: "C",
    explication: "Monetary unit sampling (MUS) is a statistical technique where each monetary unit (e.g., each dollar) has an equal probability of selection. Since larger-value items contain more monetary units, they have a higher probability of being selected. This naturally increases the likelihood that material (high-value) items are included in the sample. MUS is not easier to apply manually, doesn't segregate items, and results are stated as monetary amounts, not frequency."
  },
  {
    id: 43,
    question: "Backup procedures for an organization's critical data are considered to be which type of control?",
    options: [
      "A. Compensating",
      "B. Directive",
      "C. Corrective",
      "D. Detective"
    ],
    solution: "C",
    explication: "Backup procedures are corrective controls because they are used to restore data and resume operations after an incident (data loss, corruption, system failure). Corrective controls fix problems after they occur. Detective controls identify problems. Directive controls guide behavior (policies). Compensating controls substitute for primary controls. Backups don't prevent or detect issues — they correct them by enabling recovery."
  },
  {
    id: 44,
    question: "An IS auditor is reviewing the system development practices of an organization that is about to move from a waterfall to an agile approach. Which of the following is MOST important for the auditor to focus on as a result of this move?",
    options: [
      "A. Capacity planning",
      "B. Code versioning",
      "C. Secure code review",
      "D. Release management"
    ],
    solution: "D",
    explication: "In agile development, software is released frequently in short sprints, making release management a critical control. Without proper release management, frequent deployments can introduce instability, bypass controls, or lack proper approvals. Waterfall releases are infrequent and heavily gated; agile requires robust release controls to compensate for the higher release frequency. Capacity planning, code versioning, and secure code review are also important but are not uniquely impacted by the waterfall-to-agile transition as much as release management."
  },
  {
    id: 45,
    question: "Which of the following is the PRIMARY objective of implementing privacy-related controls within an organization?",
    options: [
      "A. To comply with legal and regulatory requirements",
      "B. To prevent confidential data loss",
      "C. To provide options to individuals regarding use of their data",
      "D. To identify data at rest and data in transit for encryption"
    ],
    solution: "C",
    explication: "Privacy is fundamentally about individuals' rights to control their personal data. The primary objective of privacy controls is to provide individuals with options and control over how their data is collected, used, and shared. Legal compliance (A) is a driver but not the primary objective. Preventing data loss (B) is a security objective. Identifying data for encryption (D) is a technical control. Privacy programs exist to respect and protect individual rights regarding personal information."
  },
  {
    id: 46,
    question: "An IS auditor conducts a review of a third-party vendor's reporting of key performance indicators (KPIs). Which of the following findings should be of MOST concern to the auditor?",
    options: [
      "A. Some KPIs are not documented.",
      "B. KPIs are not clearly defined.",
      "C. KPIs have never been updated.",
      "D. KPI data is not being analyzed."
    ],
    solution: "D",
    explication: "If KPI data is collected but never analyzed, the entire KPI reporting process serves no purpose — performance problems cannot be identified or addressed. This makes the KPI function completely ineffective. Lack of documentation (A) and poor definition (B) impair clarity but still allow some monitoring. KPIs that are never updated (C) may be stale but still tracked. Unanalyzed data means no actionable insight is derived from the monitoring effort."
  },
  {
    id: 47,
    question: "Which of the following is critical to the successful establishment of an enterprise IT architecture?",
    options: [
      "A. Comparison of the architecture with that of other organizations",
      "B. A well-defined data migration policy",
      "C. Organizational support for standardization",
      "D. An architecture encompassing only critical systems"
    ],
    solution: "C",
    explication: "Organizational support for standardization is critical because enterprise architecture requires consistent adoption of standards, platforms, and frameworks across the organization. Without buy-in and support for standardization, different business units will pursue disparate solutions, undermining the enterprise architecture. Benchmarking with others is informative. Data migration policy is one component. Limiting architecture to critical systems defeats the enterprise scope of EA."
  },
  {
    id: 48,
    question: "Which of the following would protect the confidentiality of information sent in email messages?",
    options: [
      "A. Encryption",
      "B. Secure Hash Algorithm 1 (SHA-1)",
      "C. Digital certificates",
      "D. Digital signatures"
    ],
    solution: "A",
    explication: "Encryption converts email content into an unreadable format that can only be deciphered by authorized recipients with the correct key, directly protecting confidentiality. SHA-1 is a hashing algorithm that ensures integrity, not confidentiality. Digital certificates authenticate identity. Digital signatures provide non-repudiation and integrity. Only encryption directly prevents unauthorized parties from reading email content."
  },
  {
    id: 49,
    question: "Which of the following would be of GREATEST concern to an IS auditor when evaluating governance processes for a user-developed tool?",
    options: [
      "A. Penetration testing has not been conducted.",
      "B. Significant changes to the tool were not documented.",
      "C. The backup strategy has not been tested.",
      "D. A risk assessment has not been performed."
    ],
    solution: "D",
    explication: "A risk assessment is the foundation of governance for any tool. Without it, the organization does not understand the risks associated with the tool, cannot make informed decisions about necessary controls, and cannot prioritize remediation efforts. It is the first and most fundamental governance step. Penetration testing, change documentation, and backup testing are all important controls — but they flow from and are justified by a risk assessment."
  },
  {
    id: 50,
    question: "Which of the following is an IS auditor's BEST course of action when the auditee indicates that a corrective action plan for a high-risk finding will take longer than expected?",
    options: [
      "A. Determine if an interim compensating control has been implemented.",
      "B. Require that remediation is completed in the agreed timeframe.",
      "C. Accept the longer target date and document it in the audit system.",
      "D. Escalate the overdue finding to the audit committee."
    ],
    solution: "A",
    explication: "When remediation of a high-risk finding is delayed, the auditor should first determine whether the organization has implemented interim compensating controls to manage the risk during the delay. This is the most practical and risk-focused response. Requiring the original timeline (B) may be impossible. Simply accepting the new date (C) without checking for interim controls leaves risk unaddressed. Escalating immediately (D) may be premature before understanding whether risk is being managed in the interim."
  },
  {
    id: 51,
    question: "Which type of framework is BEST suited to illustrate the traceability of information and communications technologies and their alignment with business objectives?",
    options: [
      "A. Enterprise architecture (EA) framework",
      "B. Service management framework",
      "C. Project management framework",
      "D. IT governance framework"
    ],
    solution: "A",
    explication: "Enterprise Architecture (EA) frameworks (such as TOGAF or Zachman) are specifically designed to document and illustrate how an organization's technology components align with and support business objectives. They provide views and models that trace ICT assets to business goals. Service management focuses on IT service delivery. Project management focuses on execution. IT governance frameworks set policies and oversight structures. EA is the only type that specifically provides technology-to-business traceability."
  },
  {
    id: 52,
    question: "Which of the following is the BEST way for an organization that is using a Software as a Service (SaaS) application to reduce its risk associated with the collection and protection of personal information?",
    options: [
      "A. Limit the amount of personal information collected to industry standards.",
      "B. Encrypt personal information held by the organization.",
      "C. Limit the amount of personal information collected to the minimum required.",
      "D. Only allow remote access to personal information from an alternate site."
    ],
    solution: "C",
    explication: "Limiting personal information collection to the minimum required is the data minimization principle — a fundamental privacy practice. By collecting only what is truly necessary, the organization reduces the volume of data at risk, limits exposure in case of a breach, and minimizes regulatory liability. Industry standards (A) may allow more data than necessary. Encrypting data held by the organization (B) doesn't address SaaS-held data. Remote access restriction (D) doesn't reduce the data risk."
  },
  {
    id: 53,
    question: "Which of the following is the PRIMARY risk when business units procure IT assets without IT involvement?",
    options: [
      "A. Data security requirements are not considered.",
      "B. Additional training is required for end users.",
      "C. The system is not supported by the IT department.",
      "D. Corporate procurement standards are not followed."
    ],
    solution: "A",
    explication: "When business units procure IT assets without IT involvement (shadow IT), the primary risk is that data security requirements — including encryption, access controls, data classification, and compliance requirements — are not evaluated or implemented. This creates significant security vulnerabilities. Training and support (B, C) are operational concerns. Procurement standard violations (D) are process concerns. The most critical risk is that sensitive data may be exposed on unsecured, unvetted systems."
  },
  {
    id: 54,
    question: "A database administrator (DBA) should be prevented from:",
    options: [
      "A. accessing sensitive information.",
      "B. having end user responsibilities.",
      "C. having access to production files.",
      "D. using an emergency user ID."
    ],
    solution: "B",
    explication: "A DBA having end user responsibilities creates a segregation of duties conflict. End users input and process business data; DBAs manage the database infrastructure. Combining these roles allows the DBA to manipulate data that they also process as a user, creating opportunity for fraud or undetected errors. DBAs typically need access to sensitive information and production files to manage the database. Emergency IDs are used for legitimate break-glass situations."
  },
  {
    id: 55,
    question: "Which of the following provides the MOST protection against emerging threats?",
    options: [
      "A. Real-time updating of antivirus software",
      "B. Signature-based intrusion detection system (IDS)",
      "C. Demilitarized zone (DMZ)",
      "D. Heuristic intrusion detection system (IDS)"
    ],
    solution: "D",
    explication: "A heuristic IDS detects threats based on behavioral analysis and anomaly detection rather than known signatures. This allows it to identify novel, previously unseen (emerging) threats that have no existing signature. Signature-based IDS (B) and antivirus updates (A) only detect known threats. A DMZ (C) creates network segmentation but doesn't actively detect new threats. Heuristic analysis is inherently suited for detecting unknown and emerging threats."
  },
  {
    id: 56,
    question: "Which of the following is MOST important to ensure when removing a financial application from production?",
    options: [
      "A. The data retention period is still observed.",
      "B. End user requests for changes are canceled.",
      "C. End user training is updated.",
      "D. Software license agreements are retained."
    ],
    solution: "A",
    explication: "When decommissioning a financial application, the most critical concern is ensuring that data retention requirements continue to be met. Financial data is subject to regulatory retention requirements (often 7+ years). Removing the application cannot mean deleting the data prematurely. Canceling change requests (B) and updating training (C) are administrative tasks. Retaining license agreements (D) is a legal/procurement matter. Data retention compliance is a legal obligation."
  },
  {
    id: 57,
    question: "Which of the following should be of concern to an IS auditor reviewing an organization's network to ensure attack vectors from the Internet are minimized?",
    options: [
      "A. The organization employs different types of firewalls in the demilitarized zone (DMZ).",
      "B. The organization's email server is in the demilitarized zone (DMZ).",
      "C. A data loss prevention (DLP) system is behind the organization's firewalls.",
      "D. A router is Internet-facing at the network perimeter."
    ],
    solution: "D",
    explication: "A router being Internet-facing at the network perimeter means traffic flows directly to the router before reaching any firewall, potentially exposing the router to attacks. Firewalls should be the outermost security device. Different firewall types in the DMZ (A) is a defense-in-depth approach. Email servers in the DMZ (B) is appropriate for publicly accessible services. DLP behind firewalls (C) is a standard architecture for internal monitoring."
  },
  {
    id: 58,
    question: "Which of the following controls associated with software development would be classified as a preventive control to address scope creep?",
    options: [
      "A. Iteration retrospective",
      "B. System demo",
      "C. Iteration review",
      "D. Backlog grooming"
    ],
    solution: "D",
    explication: "Backlog grooming (refinement) is the process of reviewing, prioritizing, and managing the product backlog before new work enters a sprint. This prevents scope creep by ensuring that new features or changes are properly evaluated and approved before being added to the development scope. Retrospectives (A) and reviews (C) are post-iteration reflections. System demos (B) showcase completed work. Only backlog grooming proactively controls what enters the development pipeline."
  },
  {
    id: 59,
    question: "A web application is developed in-house by an organization. Which of the following would provide the BEST evidence to an IS auditor that the application is secure from external attack?",
    options: [
      "A. Database application monitoring logs",
      "B. Code review by a third party",
      "C. Penetration test results",
      "D. Web application firewall implementation"
    ],
    solution: "C",
    explication: "Penetration test results provide direct evidence of the application's security from external attack by simulating real-world attack scenarios. Penetration testers actively attempt to exploit vulnerabilities, providing empirical evidence of what an attacker can and cannot do. Code reviews (B) identify potential vulnerabilities but don't test them under attack conditions. Monitoring logs are detective. A web application firewall reduces attack surface but doesn't prove the application itself is secure."
  },
  {
    id: 60,
    question: "Which of the following provides the BEST audit evidence that a firewall is configured in compliance with the organization's security policy?",
    options: [
      "A. Analyzing how the configuration changes are performed",
      "B. Performing penetration testing",
      "C. Reviewing the rule base",
      "D. Analyzing log files"
    ],
    solution: "C",
    explication: "Reviewing the firewall rule base directly shows the configured rules and allows comparison with the security policy to determine compliance. The rule base contains the actual access control decisions (allow/deny rules) that should reflect the security policy requirements. Analyzing change processes shows governance but not current configuration. Penetration testing shows what's exploitable but not policy compliance. Log files show traffic but not configuration rules."
  },
  {
    id: 61,
    question: "During a follow-up audit, an IS auditor finds that senior management has implemented a different remediation action plan than what was previously agreed upon. Which of the following is the auditor's BEST course of action?",
    options: [
      "A. Report the deviation by the control owner in the audit report.",
      "B. Cancel the follow-up audit and reschedule for the next audit period.",
      "C. Evaluate the implemented control to ensure it mitigates the risk to an acceptable level.",
      "D. Request justification from management for not implementing the recommended control."
    ],
    solution: "C",
    explication: "Management has the right to choose how to address risks, including implementing alternative controls. The auditor's role is to evaluate whether the implemented control effectively mitigates the original risk to an acceptable level, regardless of whether it matches the original recommendation. If the alternative control achieves the same risk reduction, the finding can be closed. The auditor evaluates effectiveness, not adherence to the specific recommendation."
  },
  {
    id: 62,
    question: "Which of the following is MOST important for an IS auditor to verify when reviewing a management information system (MIS)?",
    options: [
      "A. Backup frequency",
      "B. Data quality",
      "C. Data access",
      "D. System performance"
    ],
    solution: "B",
    explication: "An MIS is used for management decision-making. If the underlying data quality is poor — inaccurate, incomplete, or untimely — management decisions based on MIS reports will be flawed. Data quality is the most important factor for a system whose primary purpose is to provide reliable information for management. Backup frequency ensures availability. Access controls ensure security. Performance ensures speed. None matter if the data itself is incorrect."
  },
  {
    id: 63,
    question: "Which of the following BEST enables an IS auditor to combine and compare access control lists from various applications and devices?",
    options: [
      "A. Audit hooks",
      "B. Integrated test facility (ITF)",
      "C. Snapshots",
      "D. Data analytics"
    ],
    solution: "D",
    explication: "Data analytics tools can ingest, normalize, and analyze access control lists from multiple disparate sources (applications, network devices, directories) and perform cross-system comparisons. This enables identification of segregation of duties conflicts, excessive privileges, and policy violations across the entire technology environment. Audit hooks capture transaction data. ITF tests system processing. Snapshots capture system state at a point in time. None match data analytics for combining multi-source data."
  },
  {
    id: 64,
    question: "An organization's database administrator (DBA) has implemented native database auditing. Which of the following is the GREATEST concern with this situation?",
    options: [
      "A. Configuration management resilience may be impaired.",
      "B. Development of supplementary tools for database monitoring may be required.",
      "C. Production database performance may be negatively affected.",
      "D. Policy-driven event logging may be impaired."
    ],
    solution: "C",
    explication: "Native database auditing runs within the database engine itself, consuming database resources (CPU, memory, I/O). This can significantly degrade production database performance, affecting business operations and application response times. Configuration resilience (A) is a secondary concern. Supplementary tools (B) would add cost but not harm operations. Policy-driven logging (D) is a governance concern. Performance degradation is the most immediate operational risk."
  },
  {
    id: 65,
    question: "When protecting the confidentiality of information assets, the MOST effective control practice is the:",
    options: [
      "A. awareness training of personnel on regulatory requirements.",
      "B. enforcement of a need-to-know access control philosophy.",
      "C. utilization of a dual-factor authentication mechanism.",
      "D. configuration of read-only access to all users."
    ],
    solution: "B",
    explication: "The need-to-know principle (least privilege) ensures users can only access information required for their specific job function. This is the most effective confidentiality control because it limits exposure at the data level — even authorized users cannot access data beyond their scope. Training (A) is preventive but relies on human behavior. Dual-factor authentication (C) verifies identity but doesn't limit what an authenticated user can see. Read-only access (D) prevents modification but not unauthorized viewing."
  },
  {
    id: 66,
    question: "Which of the following is the MOST important consideration when relying on the work of the prior auditor?",
    options: [
      "A. Management agreement with recommendations",
      "B. Qualifications of the prior auditor",
      "C. Duration of the prior audit",
      "D. Number of findings identified by the prior auditor"
    ],
    solution: "B",
    explication: "When relying on the work of a prior auditor, the most important consideration is the qualifications and professional competence of that auditor. If the prior auditor lacked relevant expertise or independence, their work cannot be relied upon regardless of the number of findings or management agreement. The quality of the work depends on the competence of who performed it. Duration, findings count, and management agreement are less indicative of reliability than the auditor's qualifications."
  },
  {
    id: 67,
    question: "A bank uses a system that requires monetary amounts found on check images to be input twice by two separate individuals. The system then identifies any mismatches between the first and second input. Which type of control has the bank implemented?",
    options: [
      "A. Detective",
      "B. Corrective",
      "C. Compensating",
      "D. Deterrent"
    ],
    solution: "A",
    explication: "The dual-input system identifies mismatches after both entries have been made — it detects discrepancies. This is a detective control because it discovers errors or inconsistencies after the fact. It does not prevent incorrect entry (preventive) or fix the error (corrective). It compensates for potential data entry errors. The mismatch detection notifies operators of a discrepancy, requiring human intervention to resolve."
  },
  {
    id: 68,
    question: "An organization is migrating its HR application to an Infrastructure as a Service (IaaS) model in a private cloud. Who is PRIMARILY responsible for the security configurations of the deployed application's operating system?",
    options: [
      "A. The cloud provider",
      "B. The cloud provider's external auditor",
      "C. The operating system vendor",
      "D. The organization"
    ],
    solution: "D",
    explication: "In the IaaS shared responsibility model, the cloud provider manages physical infrastructure, networking, and virtualization. The organization (customer) is responsible for everything above that layer — including operating system configuration, security hardening, patch management, and application security. In IaaS, the OS is managed by the customer, unlike PaaS or SaaS where the provider manages more layers. The auditor and OS vendor have no operational security responsibility."
  },
  {
    id: 69,
    question: "Which of the following is the BEST way to reduce the risk of vulnerabilities introduced by rapid deployment of applications?",
    options: [
      "A. Review a sample of historical production changes to identify abnormalities.",
      "B. Perform security audits during the development life cycle.",
      "C. Review change management policies and procedures.",
      "D. Conduct a post-deployment security audit to identify vulnerabilities."
    ],
    solution: "B",
    explication: "Performing security audits during the development life cycle (shift-left security) catches vulnerabilities before they reach production. Integrating security testing into each development phase — requirements, design, coding, and testing — reduces the risk that rapid deployment introduces vulnerabilities. Historical reviews and post-deployment audits (A, D) are after-the-fact. Reviewing policies (C) does not directly prevent vulnerabilities. Building security into the process is the most proactive approach."
  },
  {
    id: 70,
    question: "Which of the following is the ULTIMATE objective of performing a phishing simulation test?",
    options: [
      "A. To improve the level of security awareness",
      "B. To remove the need to install spam filtering",
      "C. To reduce the likelihood of cyber incidents",
      "D. To identify the occurrence of cyber events"
    ],
    solution: "A",
    explication: "Phishing simulation tests are designed to educate employees by exposing them to simulated phishing attempts and then providing immediate training when they fall for the simulation. The ultimate objective is to improve security awareness so employees can recognize and report real phishing attempts. Reducing incidents (C) and identifying events (D) are outcomes, but awareness improvement is the purpose of the simulation itself. Spam filtering is a technical control unrelated to simulations."
  },
  {
    id: 71,
    question: "Which of the following is MOST important to include in a data retention policy to reduce legal liabilities associated with information life cycle management?",
    options: [
      "A. Ensuring that unnecessary data is not stored.",
      "B. Reducing the cost of data storage through media sanitization.",
      "C. Ensuring that personal information is destroyed.",
      "D. Requiring that data be securely wiped so it cannot be restored for legal discovery."
    ],
    solution: "A",
    explication: "Storing data beyond its required retention period increases legal liability — it can be subject to discovery in litigation, creates privacy risks, and may violate regulatory requirements. Ensuring unnecessary data is not retained (data minimization over time) is the primary way to reduce legal exposure. Media sanitization reduces cost. Destruction of personal information is part of the policy. Preventing legal discovery by wiping data could constitute obstruction. Not retaining unneeded data is the safest legal approach."
  },
  {
    id: 72,
    question: "An IS auditor is performing an integrated audit covering payment processing activities using point-of-sale (POS) systems. Which of the following findings related to personal identification numbers (PINs) should be of GREATEST concern?",
    options: [
      "A. Cardholder PINs are encrypted and stored on the local POS terminal.",
      "B. Cardholders are not required to enter their PINs.",
      "C. Cardholders may select any 4-digit PIN without restrictions.",
      "D. Cardholder PINs are not encrypted on the central computer."
    ],
    solution: "D",
    explication: "Unencrypted PINs on the central computer represents the most critical risk because the central system contains PINs for all cardholders, and a breach would expose a massive volume of sensitive authentication data. PINs stored encrypted on local terminals (A) is acceptable practice. Not requiring PINs (B) is an authentication weakness but may be policy-based. Any 4-digit PIN (C) is a weak PIN policy. Unencrypted PINs centrally is a direct, severe violation of PCI-DSS and data protection requirements."
  },
  {
    id: 73,
    question: "Data from a revenue collection system is uploaded into an enterprise data warehouse to be used for reporting purposes. An IS audit identifies that some revenue transactions were uploaded into the warehouse twice. Which of the following is the GREATEST risk in this situation?",
    options: [
      "A. Data in the warehouse may not be secure.",
      "B. Reports generated from the data warehouse may lead to incorrect decisions.",
      "C. Data in the revenue collection system may not match data in the warehouse.",
      "D. Significant time may be required to identify double-counted transactions."
    ],
    solution: "B",
    explication: "Duplicate transactions in the data warehouse inflate revenue figures, leading management to make decisions based on overstated performance data. Incorrect decisions based on flawed reports are the ultimate risk — they can affect resource allocation, forecasting, and strategic planning. Data security (A) is not the issue here. Mismatch with the source system (C) is a symptom, not the impact. Time to identify duplicates (D) is an operational cost, not the primary risk."
  },
  {
    id: 74,
    question: "Which of the following is an IS auditor's BEST recommendation to protect an organization from attacks when its file server needs to be accessible to external users?",
    options: [
      "A. Enhance internal firewalls.",
      "B. Enforce a secure tunnel connection.",
      "C. Set up a demilitarized zone (DMZ).",
      "D. Implement a secure protocol."
    ],
    solution: "C",
    explication: "Placing the file server in a DMZ isolates it from both the public internet and the internal network, limiting attack exposure. External users can access the server through the DMZ without gaining access to the internal network. This provides network segmentation that is the most comprehensive architectural protection for externally accessible servers. Internal firewalls (A) protect internal resources. Secure tunnels (B) and protocols (D) encrypt communication but don't isolate the server from attack."
  },
  {
    id: 75,
    question: "Which of the following is the BEST evidence that a project is ready for production?",
    options: [
      "A. A parallel test over a full processing cycle has been successful.",
      "B. A pilot implementation with reduced scope has been tested and approved.",
      "C. A detailed conversion plan has been rehearsed in two desktop exercises.",
      "D. Rollback procedures have been successfully tested."
    ],
    solution: "A",
    explication: "A successful parallel test over a full processing cycle is the strongest evidence of production readiness. Parallel testing runs the new system alongside the old system simultaneously, comparing outputs over a complete cycle. This validates that the new system produces correct results under real business conditions. A pilot with reduced scope (B) tests only part of the system. Desktop exercises (C) are not actual testing. Rollback procedures (D) are important but indicate readiness for recovery, not production operation."
  },
  {
    id: 76,
    question: "An IS auditor has been tasked to review the processes that prevent fraud within a business expense claim system. Which of the following stakeholders is MOST important to involve in this review?",
    options: [
      "A. Quality assurance (QA) manager",
      "B. Business department executive",
      "C. Information security manager",
      "D. Business process owner"
    ],
    solution: "D",
    explication: "The business process owner is responsible for the expense claim process and owns the controls within it. They understand the workflow, the risks, and the control design. Involving the process owner provides the most relevant knowledge for evaluating fraud prevention controls. The business executive provides strategic oversight. QA manages quality. Information security manages technical security. The process owner has the deepest operational knowledge of how fraud prevention is built into the process."
  },
  {
    id: 77,
    question: "Which of the following is the MOST likely reason that local area network (LAN) servers can contribute to the rapid distribution of viruses?",
    options: [
      "A. Users of a server often load the same programs.",
      "B. Server software is the first to be infected.",
      "C. The server exchanges data with each workstation at logon time.",
      "D. The server's file-sharing function facilitates distribution of files."
    ],
    solution: "D",
    explication: "LAN servers facilitate rapid virus distribution because their file-sharing function allows files to be accessed by many workstations simultaneously. A virus in a shared file on the server is instantly accessible to all users who access that file. Exchanging data at logon (C) is limited in scope. Loading the same programs (A) is about software uniformity, not virus spread mechanism. Server software is not necessarily first infected (B). The shared file access model is the primary vector for rapid distribution."
  },
  {
    id: 78,
    question: "Which of the following is an example of a preventive control for physical access?",
    options: [
      "A. Implementing a fingerprint-based access control system for the building",
      "B. Installing closed-circuit television (CCTV) cameras for all ingress and egress points",
      "C. Keeping log entries for all visitors to the building",
      "D. Implementing a centralized logging server to record instances of staff logging into workstations"
    ],
    solution: "A",
    explication: "A fingerprint-based access control system prevents unauthorized individuals from entering the building by physically blocking entry unless biometric authentication is successful. This is a preventive control — it stops unauthorized access before it occurs. CCTV cameras (B) and visitor logs (C) are detective controls that record what happened. Centralized logging (D) is also a detective control for workstation access. Only biometric access control actively prevents unauthorized physical entry."
  },
  {
    id: 79,
    question: "Which of the following should be considered when examining fire suppression systems as part of a data center environmental controls review?",
    options: [
      "A. Maintenance procedures",
      "B. Onsite replacement availability",
      "C. Installation manuals",
      "D. Insurance coverage"
    ],
    solution: "A",
    explication: "Maintenance procedures are critical for fire suppression systems because these systems must be regularly tested, inspected, and serviced to ensure they will function correctly in an emergency. Without proper maintenance, suppression agents may be depleted, nozzles may be blocked, or sensors may fail. Replacement availability and installation manuals are operational reference documents. Insurance coverage is a financial risk management measure. Maintenance ensures the system is operationally ready."
  },
  {
    id: 80,
    question: "A new system development project is running late against a critical implementation deadline. Which of the following is the MOST important activity?",
    options: [
      "A. Ensure that code has been reviewed.",
      "B. Perform user acceptance testing (UAT).",
      "C. Document last-minute enhancements.",
      "D. Perform a pre-implementation audit."
    ],
    solution: "B",
    explication: "User Acceptance Testing (UAT) is the most important activity before any system goes live because it validates that the system meets business requirements and is fit for purpose. Even under time pressure, skipping UAT risks deploying a system that does not work as expected, potentially causing greater business disruption than a short delay. Code review (A) is important but secondary. Last-minute enhancements (C) add scope risk. A pre-implementation audit (D) is less critical than ensuring users have validated the system."
  },
  {
    id: 81,
    question: "A finance department has a multi-year project to upgrade the enterprise resource planning (ERP) system hosting the general ledger, and in year one, the system version upgrade will be applied. Which of the following should be the PRIMARY focus of the IS auditor reviewing the first year of the project?",
    options: [
      "A. Network performance testing",
      "B. User acceptance testing (UAT)",
      "C. Unit testing",
      "D. Regression testing"
    ],
    solution: "D",
    explication: "When upgrading a version of an existing ERP system, regression testing is the primary concern — it verifies that existing functionality still works correctly after the upgrade. Since the general ledger is financial, any regression in existing processes (calculations, reports, postings) is critical. UAT (B) validates new features. Unit testing (C) is for individual code components, typically used in new development. Network performance (A) is unrelated to ERP version upgrade validation."
  },
  {
    id: 82,
    question: "Which of the following provides the MOST useful information to an IS auditor when selecting projects for inclusion in an IT audit plan?",
    options: [
      "A. Project charter",
      "B. Project business case",
      "C. Project issue log",
      "D. Project plan"
    ],
    solution: "B",
    explication: "The project business case describes the purpose, expected benefits, costs, risks, and strategic importance of a project. This is the most useful document for determining whether a project warrants audit attention based on risk, materiality, and strategic value. The project charter defines authority and scope. The issue log shows current problems. The project plan shows timeline and tasks. The business case provides the risk-based rationale needed for audit planning decisions."
  },
  {
    id: 83,
    question: "Which type of device sits on the perimeter of a corporate or home network, where it obtains a public IP address and then generates private IP addresses internally?",
    options: [
      "A. Gateway",
      "B. Switch",
      "C. Intrusion prevention system (IPS)",
      "D. Router"
    ],
    solution: "D",
    explication: "A router at the network perimeter receives a public IP address from the ISP and uses Network Address Translation (NAT) to assign private IP addresses to internal devices. This is the standard function of a perimeter router. A gateway translates between different network protocols. A switch connects devices within a network segment. An IPS monitors and blocks malicious traffic. Only a router performs NAT to generate internal private addresses from a public address."
  },
  {
    id: 84,
    question: "An IS auditor observes that a large number of departed employees have not been removed from the accounts payable system. Which of the following is MOST important to determine in order to assess the risk?",
    options: [
      "A. The ability of departed employees to actually access the system",
      "B. The frequency of user access reviews performed by management",
      "C. The process for terminating access of departed employees",
      "D. The frequency of intrusion attempts associated with the accounts payable"
    ],
    solution: "A",
    explication: "Stale accounts are a concern, but the actual risk depends on whether those accounts can still be used to access the system. If accounts are disabled or passwords have been changed by IT at termination, the risk is minimal despite the accounts remaining in the system. If accounts are still active, the risk is high. Understanding whether actual access is possible is the most critical factor in assessing the magnitude of the risk."
  },
  {
    id: 85,
    question: "Which of the following audit findings should be given the HIGHEST priority?",
    options: [
      "A. IT key risk indicators (KRIs) are calculated internally by the IT team.",
      "B. The organization's IT investment exceeds industry benchmarks.",
      "C. IT key risk indicators (KRIs) are not periodically reviewed.",
      "D. The board's agenda does not include the progress of IT projects."
    ],
    solution: "D",
    explication: "The board not including IT project progress on its agenda represents a governance failure at the highest level. Board-level oversight of material IT initiatives is a fundamental IT governance requirement. Without board engagement, significant IT risks and project failures may go unaddressed at the strategic level. KRIs calculated internally (A) may have bias but still provide monitoring. Exceeding IT benchmarks (B) may be justified. Infrequent KRI reviews (C) are a monitoring weakness but less severe than board disengagement."
  },
  {
    id: 86,
    question: "Which of the following provides the MOST useful information for performing a business impact analysis (BIA)?",
    options: [
      "A. Policies for business procurement",
      "B. Inventory of relevant business processes",
      "C. Results of business resumption planning efforts",
      "D. Documentation of application configurations"
    ],
    solution: "B",
    explication: "A business impact analysis assesses the consequences of disruption to business processes. An inventory of relevant business processes is the foundational input — it identifies what processes exist, their interdependencies, and their criticality, which are the basis for impact assessment. Procurement policies are irrelevant. Resumption planning results are outputs of the BCP, not BIA inputs. Application configurations are technical details. The process inventory is the starting point for any BIA."
  },
  {
    id: 87,
    question: "When auditing the feasibility study of a system development project, the IS auditor should:",
    options: [
      "A. review the request for proposal (RFP) to ensure that it covers the scope of work.",
      "B. ensure that vendor contracts are reviewed by legal counsel.",
      "C. review cost-benefit documentation for reasonableness.",
      "D. review qualifications of key members of the project team."
    ],
    solution: "C",
    explication: "A feasibility study assesses whether a project is viable — technically, operationally, and financially. The most important element for the IS auditor is reviewing the cost-benefit documentation for reasonableness, ensuring that projected costs and benefits are realistic and support the decision to proceed. RFPs and vendor contracts are later-stage activities. Team qualifications are HR concerns. Cost-benefit analysis is the core of feasibility assessment."
  },
  {
    id: 88,
    question: "Which of the following observations should be of GREATEST concern to an IS auditor when auditing web application security control as part of an IT general controls audit?",
    options: [
      "A. The application control configuration is not available.",
      "B. An application control assessment has not been performed.",
      "C. An application control matrix has not been established.",
      "D. Application control is not aligned with an IT framework."
    ],
    solution: "A",
    explication: "If the application control configuration is not available to the auditor, the audit cannot proceed effectively — the auditor cannot review what controls exist, how they are configured, or whether they are appropriate. This is a fundamental obstruction to the audit. The other options (no assessment, no matrix, no framework alignment) are governance gaps but still allow the auditor to gather information. Inability to access configuration is the most critical impediment."
  },
  {
    id: 89,
    question: "Transaction records from a business database were inadvertently deleted, and system operators decided to restore from a snapshot copy. Which of the following provides the BEST assurance that the transactions were recovered successfully?",
    options: [
      "A. Recount the transaction records to ensure no records are missing.",
      "B. Compare transaction values against external statements to verify accuracy.",
      "C. Rerun the process on a backup machine to verify the results are the same.",
      "D. Review transaction recovery logs to ensure no errors were recorded."
    ],
    solution: "B",
    explication: "Comparing recovered transaction values against external statements (e.g., bank statements, vendor confirmations) provides independent verification of data accuracy and completeness. External sources are not subject to the same failure that caused the original data loss, making them reliable reference points. Recounting records (A) only checks quantity, not accuracy. Rerunning on a backup (C) tests the process, not the data. Recovery logs (D) indicate technical success but not data accuracy."
  },
  {
    id: 90,
    question: "Which of the following is the BEST method to delete sensitive information from storage media that will be reused?",
    options: [
      "A. Re-partitioning",
      "B. Crypto-shredding",
      "C. Reformatting",
      "D. Multiple overwriting"
    ],
    solution: "D",
    explication: "Multiple overwriting (also called degaussing or overwriting with patterns) writes over the existing data multiple times with random or zero data, making original data unrecoverable. This is the most thorough method for media that will be reused. Re-partitioning only changes the partition table, not the underlying data. Reformatting erases file system references but data remains recoverable with forensic tools. Crypto-shredding destroys encryption keys (for encrypted data) but is not applicable to all media."
  },
  {
    id: 91,
    question: "An IS auditor is reviewing how password resets are performed for users working remotely. Which type of documentation should be requested to understand the detailed steps required for this activity?",
    options: [
      "A. Procedures",
      "B. Policies",
      "C. Standards",
      "D. Guidelines"
    ],
    solution: "A",
    explication: "Procedures are step-by-step instructions that describe exactly how to perform a specific task. For understanding the detailed steps of a password reset process, procedures provide the operational detail needed. Policies state what must be done and why (high-level). Standards define minimum requirements. Guidelines provide optional recommendations. Only procedures describe the actual, sequential steps for executing an activity like a remote password reset."
  },
  {
    id: 92,
    question: "Internal audit is evaluating an organization's IT portfolio management. Which of the following would be the BEST recommendation for prioritizing the funding of IT projects?",
    options: [
      "A. Direct funds toward projects that reduce the organization's technology risk exposure.",
      "B. Group projects into portfolios based on their potential to increase market share and reduce costs.",
      "C. Direct funds toward projects that increase the availability of the organization's technology infrastructure.",
      "D. Group projects with common themes into portfolios and assess them against strategic objectives."
    ],
    solution: "D",
    explication: "The best approach to IT portfolio management is to group projects by common themes and evaluate them against strategic objectives. This ensures that investment decisions are aligned with organizational strategy, not just individual project metrics. Directing funds based solely on risk reduction (A) or availability (C) is too narrow. Grouping by market share/cost (B) is financial but misses strategic alignment. Portfolio management assessed against strategy provides the most balanced, governance-oriented approach."
  },
  {
    id: 93,
    question: "Which of the following is MOST important for an IS auditor to validate when auditing network device management?",
    options: [
      "A. Devices cannot be accessed through service accounts.",
      "B. Backup policies include device configuration files.",
      "C. All devices are located within a protected network segment.",
      "D. All devices have current security patches assessed."
    ],
    solution: "D",
    explication: "Ensuring that all network devices have current security patches is the most important validation because unpatched devices contain known vulnerabilities that attackers can exploit to compromise the network. Patch management is a fundamental and continuous security requirement. Service account access (A) is a privilege management concern. Configuration backups (B) are important for recovery. Physical protection (C) is a physical security concern. Patch status is the most critical ongoing security control."
  },
  {
    id: 94,
    question: "A programmer has made unauthorized changes to key fields in a payroll system report. Which of the following control weaknesses would have contributed MOST to this problem?",
    options: [
      "A. The programmer has access to the production programs.",
      "B. The user requirements were not documented.",
      "C. Payroll files were not under the control of a librarian.",
      "D. The programmer did not involve the user in testing."
    ],
    solution: "A",
    explication: "The programmer having access to production programs is the fundamental segregation of duties failure that enabled the unauthorized change. Developers should not have access to production environments — changes should go through a controlled promotion process with appropriate approvals. Without this control, programmers can make and implement unauthorized changes directly. Undocumented requirements, no librarian, and no user testing are secondary weaknesses."
  },
  {
    id: 95,
    question: "The chief information officer (CIO) has requested there be no IS audits in the upcoming year, as more time is needed to address a large number of recommendations from the previous year. Which of the following should the auditor do FIRST?",
    options: [
      "A. Notify the chief operating officer (COO) and discuss the audit plan risks.",
      "B. Escalate to audit management to discuss the audit plan.",
      "C. Increase the number of IS audits in the plan.",
      "D. Exclude IS audits from the upcoming year's plan."
    ],
    solution: "B",
    explication: "When a business leader attempts to interfere with the audit plan, the IS auditor should first escalate to audit management (the chief audit executive). Audit independence requires that the audit plan be determined by risk, not management preference. Audit management must address this through appropriate governance channels. Notifying the COO directly (A) bypasses the audit hierarchy. Increasing audits (C) is reactive. Excluding IS audits (D) would compromise audit independence and risk coverage."
  },
  {
    id: 96,
    question: "Which of the following is the MOST important outcome of an information security program?",
    options: [
      "A. Operating system weaknesses are more easily identified.",
      "B. Emerging security technologies are better understood and accepted.",
      "C. The cost to mitigate information security risk is reduced.",
      "D. Organizational awareness of security responsibilities is improved."
    ],
    solution: "D",
    explication: "The most important outcome of an information security program is improved organizational awareness of security responsibilities. People are the first line of defense, and awareness ensures that employees understand their role in protecting information. Technical controls (A, B) and cost reduction (C) are important outcomes but are secondary. A security-aware organization is better equipped to identify and respond to threats across all layers, making awareness the foundational outcome."
  },
  {
    id: 97,
    question: "Which of the following concerns is MOST effectively addressed by implementing an IT framework for alignment between IT and business objectives?",
    options: [
      "A. Lack of a benchmark analysis",
      "B. Inadequate IT portfolio management",
      "C. Inadequate IT change management practices",
      "D. Inaccurate business impact analysis (BIA)"
    ],
    solution: "B",
    explication: "IT portfolio management is directly concerned with aligning IT investments and initiatives with business objectives. An IT governance framework (such as COBIT) provides the structure and practices for ensuring IT portfolio decisions are made in alignment with business strategy. Benchmark analysis is an assessment tool. Change management is an operational process. BIA accuracy is a risk management concern. Portfolio management is the domain most directly addressed by IT-business alignment frameworks."
  },
  {
    id: 98,
    question: "An organization has implemented a distributed security administration system to replace the previous centralized one. Which of the following presents the GREATEST potential concern?",
    options: [
      "A. A distributed security system is inherently a weak security system.",
      "B. The new system will require additional resources.",
      "C. Security procedures may be inadequate to support the change.",
      "D. End-user acceptance of the new system may be difficult to obtain."
    ],
    solution: "C",
    explication: "Distributed security administration increases complexity — security decisions and controls are managed in multiple locations rather than centrally. If security procedures are not updated and extended to support this distributed model, inconsistent application of security policies, gaps in coverage, and coordination failures may result. Distributed systems are not inherently weak (A). Resource needs (B) and user acceptance (D) are concerns but manageable. Inadequate procedures create direct security risks."
  },
  {
    id: 99,
    question: "Which of the following is the GREATEST benefit of adopting an international IT governance framework rather than establishing a new framework based on the actual situation of a specific organization?",
    options: [
      "A. Comprehensive coverage of fundamental and critical risk and control areas for IT governance",
      "B. Fewer resources expended on trial-and-error attempts to fine-tune implementation methodologies",
      "C. Readily available resources such as domains and risk and control methodologies",
      "D. Wide acceptance by different business and support units with IT governance objectives"
    ],
    solution: "B",
    explication: "The greatest benefit of adopting an established international framework is that it incorporates proven best practices developed from extensive real-world experience, eliminating the need for an organization to learn through costly trial-and-error when creating its own framework. Comprehensive coverage (A) and available resources (C) are benefits but derivative. Wide acceptance (D) is a benefit for implementation. Avoiding trial-and-error represents the largest time and cost saving."
  },
  {
    id: 100,
    question: "Which of the following would provide the BEST evidence of the effectiveness of mandated annual security awareness training?",
    options: [
      "A. Trending of social engineering test results",
      "B. Surveys completed by randomly selected employees",
      "C. Number of security incidents",
      "D. Results of a third-party penetration test"
    ],
    solution: "A",
    explication: "Trending social engineering test results (such as phishing simulations conducted over time) directly measures how employee behavior changes in response to training. Consistent improvement in social engineering test scores demonstrates that the training is effective in changing behavior. Surveys (B) measure awareness but not behavior change. Incident counts (C) are influenced by many factors. Penetration tests (D) assess technical controls, not human awareness effectiveness."
  },
  {
    id: 101,
    question: "An organization uses public key infrastructure (PKI) to provide email security. Which of the following would be the MOST efficient method to determine whether email messages have been modified in transit?",
    options: [
      "A. The message is sent along with an encrypted hash of the message.",
      "B. The message is sent using Transport Layer Security (TLS) protocol.",
      "C. The message is encrypted using a symmetric algorithm.",
      "D. The message is encrypted using the private key of the sender."
    ],
    solution: "A",
    explication: "Sending an encrypted hash (digital signature) of the message alongside it allows the recipient to decrypt the hash using the sender's public key and compare it with their own hash of the received message. Any modification in transit changes the hash, immediately revealing tampering. This is the most efficient method for detecting modification. TLS protects transmission but not message integrity after receipt. Symmetric encryption provides confidentiality. Encrypting with a private key creates a digital signature, which is essentially option A."
  },
  {
    id: 102,
    question: "An IT steering committee assists the board of directors in fulfilling IT governance duties by:",
    options: [
      "A. overseeing major projects and IT resource allocation.",
      "B. approving IT security awareness training content.",
      "C. assigning IT services to infrastructure components.",
      "D. developing IT policies and procedures for project tracking."
    ],
    solution: "A",
    explication: "An IT steering committee's primary role is to provide oversight of major IT projects and oversee IT resource allocation, ensuring IT investments align with business strategy and priorities. This assists the board in fulfilling governance duties at the operational level. Approving training content (B) is an operational task below steering committee level. Assigning services to infrastructure (C) is IT operations. Developing tracking procedures (D) is an operational management activity."
  },
  {
    id: 103,
    question: "Which of the following provides the MOST comprehensive information about inherent risk within an organization?",
    options: [
      "A. Vulnerability analysis",
      "B. Risk assessments",
      "C. Risk-based audit findings",
      "D. Business impact analysis (BIA)"
    ],
    solution: "B",
    explication: "Risk assessments provide the most comprehensive view of inherent risk because they systematically identify, analyze, and evaluate risks across the entire organization before considering controls. Inherent risk is the risk in the absence of controls, and a comprehensive risk assessment addresses this across all risk domains. Vulnerability analysis focuses on technical weaknesses. Audit findings are based on selected areas. BIA focuses on impact of disruption, not inherent risk across the organization."
  },
  {
    id: 104,
    question: "Which of the following is MOST critical to the success of an information security program?",
    options: [
      "A. User accountability for information security",
      "B. Alignment of information security with IT objectives",
      "C. Integration of business and information security",
      "D. Management's commitment to information security"
    ],
    solution: "D",
    explication: "Management's commitment is the most critical success factor for any information security program. Without management support, resources will not be allocated, policies will not be enforced, and the security culture will not develop. Management commitment drives organizational culture, provides funding, and establishes accountability. User accountability (A), business integration (C), and IT alignment (B) are important but flow from and depend on management's commitment."
  },
  {
    id: 105,
    question: "The MOST important measure of the effectiveness of an organization's security program is the:",
    options: [
      "A. comparison with critical incidents experienced by competitors.",
      "B. adverse impact of incidents on critical business activities.",
      "C. number of vulnerability alerts escalated to senior management.",
      "D. number of new vulnerabilities reported."
    ],
    solution: "B",
    explication: "The most important measure of security program effectiveness is the adverse impact of security incidents on critical business activities. This outcome measure shows whether the security program is actually protecting what matters most — business operations. Competitor comparisons (A) may not be relevant to the organization's specific risk profile. Vulnerability alerts (C) and new vulnerabilities (D) measure activity, not business impact. Impact on critical activities is the ultimate effectiveness measure."
  },
  {
    id: 106,
    question: "Which of the following is the MOST important environmental equipment that should be located above the false ceiling of a data center?",
    options: [
      "A. Air pressure sensors",
      "B. Motion detectors",
      "C. Smoke detectors",
      "D. Humidity sensors"
    ],
    solution: "C",
    explication: "Smoke detectors above the false ceiling of a data center are most important because fires often originate or spread in the space above the ceiling where cables and electrical equipment are located. Early smoke detection in this concealed space allows for rapid response before a fire spreads to the main data center floor. Air pressure, motion, and humidity sensors serve other functions but are not critical life-safety devices in that location. Smoke detection in concealed spaces is a fire protection fundamental."
  },
  {
    id: 107,
    question: "Which of the following is the MOST important control for virtualized environments?",
    options: [
      "A. Hardening for the hypervisor and guest machines",
      "B. Regular updates of policies for the operation of the virtualized environment",
      "C. Redundancy of hardware resources and network components",
      "D. Monitoring utilization of resources at the guest operating system level"
    ],
    solution: "A",
    explication: "In a virtualized environment, the hypervisor manages all virtual machines. A compromise of the hypervisor could expose all guest machines simultaneously. Hardening both the hypervisor and guest machines is the most critical control because it reduces the attack surface at the most sensitive layer of the virtualization stack. Policy updates (B), redundancy (C), and monitoring (D) are important but secondary. The hypervisor's integrity is foundational to the security of the entire virtual environment."
  },
  {
    id: 108,
    question: "Which of the following would aid an IS auditor reviewing the integrity of program changes migrated into production?",
    options: [
      "A. Configuration management system",
      "B. Database schema",
      "C. Tape management system",
      "D. Operating system log data"
    ],
    solution: "A",
    explication: "A configuration management system (CMS) tracks the authorized versions of software and configurations, providing a baseline for comparison. The IS auditor can use it to verify that only authorized changes have been migrated to production and that the production environment matches the approved configuration. Database schema shows data structure. Tape management handles backup media. OS logs show system activities. Only the CMS specifically manages and tracks program change integrity."
  },
  {
    id: 109,
    question: "Which of the following provides the BEST assurance of data integrity after file transfers?",
    options: [
      "A. Check digits",
      "B. Monetary unit sampling",
      "C. Reasonableness check",
      "D. Hash values"
    ],
    solution: "D",
    explication: "Hash values (checksums) are computed from the file content before and after transfer. Comparing hash values verifies that not a single bit has changed during transmission. Any alteration, even of a single character, produces a completely different hash, immediately revealing any integrity issue. Check digits verify specific numeric fields. Monetary unit sampling is an audit technique. Reasonableness checks validate data against expected ranges. Hashing provides cryptographic-level integrity assurance for the entire file."
  },
  {
    id: 110,
    question: "Which of the following is MOST important to consider when reviewing an organization's defined data backup and restoration procedures?",
    options: [
      "A. Mean time to restore (MTTR)",
      "B. Mean time between failures (MTBF)",
      "C. Recovery point objective (RPO)",
      "D. Business continuity plan (BCP)"
    ],
    solution: "C",
    explication: "The Recovery Point Objective (RPO) defines the maximum acceptable amount of data loss, determining how frequently backups must occur. When reviewing backup procedures, the auditor must verify that backup frequency and retention align with the organization's RPO requirements. MTTR relates to recovery time after failure. MTBF measures reliability between failures. The BCP is the overarching document. RPO directly drives backup frequency decisions and is the key parameter for backup procedure design."
  },
  {
    id: 111,
    question: "When assessing a proposed project for the two-way replication of a customer database with a remote call center, the IS auditor should ensure that:",
    options: [
      "A. end users are trained in the replication process.",
      "B. the source database is backed up on both sites.",
      "C. user rights are identical on both databases.",
      "D. database conflicts are managed during replication."
    ],
    solution: "D",
    explication: "In two-way (bidirectional) database replication, the same data can be updated on both databases simultaneously, creating conflict scenarios where the same record is changed differently on each side. Without conflict management rules, data integrity cannot be maintained. Training (A) is operational. Backup at both sites (B) is good practice but secondary to operational integrity. Identical user rights (C) may not be appropriate for different roles at each site. Conflict management is unique and critical to bidirectional replication."
  },
  {
    id: 112,
    question: "In which phase of the audit life cycle process are audit observations initially discussed with the client?",
    options: [
      "A. Follow-up phase",
      "B. Planning phase",
      "C. Execution phase",
      "D. Reporting phase"
    ],
    solution: "C",
    explication: "Audit observations are initially discussed with the client (management) during the execution phase, specifically at the conclusion of fieldwork. This is when the auditor presents preliminary findings to obtain management's input, clarify facts, and allow management to respond before the formal report is issued. The follow-up phase addresses prior findings. Planning is for scoping. The reporting phase formalizes observations that were already initially discussed during execution."
  },
  {
    id: 113,
    question: "Management states that a recommendation made during a prior audit has been implemented, but the IS auditor doubts the effectiveness of the actions taken. Which of the following is the auditor's MOST appropriate course of action?",
    options: [
      "A. Report to audit management that the actions taken have not effectively addressed the original risk.",
      "B. Make an additional recommendation on how to remediate the finding.",
      "C. Perform testing or other audit procedures to confirm the status of the original risk.",
      "D. Recommend external verification of management's preferred actions."
    ],
    solution: "C",
    explication: "When the auditor doubts management's assertion that a recommendation has been implemented, the professional obligation is to perform testing or audit procedures to independently verify the status. Auditors should not accept unverified management claims for significant findings. Reporting negatively to management (A) without testing is premature. Making new recommendations (B) is premature. External verification (D) is an option but more costly than performing the testing directly."
  },
  {
    id: 114,
    question: "Which of the following types of testing BEST ensures business requirements are met prior to software release?",
    options: [
      "A. Load balance testing",
      "B. User acceptance testing (UAT)",
      "C. End-to-end testing",
      "D. Functional testing"
    ],
    solution: "B",
    explication: "User Acceptance Testing (UAT) is conducted by actual business users to verify that the software meets their requirements before it goes live. It is the final validation from a business perspective. Load testing checks performance under load. End-to-end testing verifies complete workflows. Functional testing checks individual functions against specifications. UAT is the only type that directly involves business users confirming that business requirements are satisfied, making it the best for business requirements validation."
  },
  {
    id: 115,
    question: "Which of the following methods BEST enforces data leakage prevention in a multi-tenant cloud environment?",
    options: [
      "A. Monitoring tools are configured to alert in case of downtime.",
      "B. A comprehensive security review is performed every quarter.",
      "C. Data for different tenants is segregated by database schema.",
      "D. Tenants are required to implement data classification policies."
    ],
    solution: "C",
    explication: "In a multi-tenant cloud environment, the fundamental risk is that one tenant's data could be exposed to another. Database schema segregation ensures that each tenant's data is stored in separate, isolated schemas, preventing cross-tenant data access at the technical level. Monitoring downtime (A) is availability-related. Quarterly reviews (B) are detective, not preventive. Data classification policies (D) are organizational requirements that don't technically enforce segregation. Schema segregation is the technical control that prevents leakage."
  },
  {
    id: 116,
    question: "An IS auditor requests direct access to data required to perform audit procedures instead of asking management to provide the data. Which of the following is the PRIMARY advantage of this approach?",
    options: [
      "A. Professionalism",
      "B. Audit efficiency",
      "C. Audit transparency",
      "D. Data confidentiality"
    ],
    solution: "B",
    explication: "Direct access to data eliminates the time and effort required to request, wait for, and receive data from management, significantly improving audit efficiency. The auditor can access the data when needed, in the format needed, without delays. Professionalism is not specifically enhanced by direct access. Transparency is about openness in communication. Data confidentiality is a concern that must be managed regardless of access method. Efficiency is the primary advantage."
  },
  {
    id: 117,
    question: "An IS auditor finds a segregation of duties issue in an enterprise resource planning (ERP) system. Which of the following is the BEST way to prevent the misconfiguration from recurring?",
    options: [
      "A. Monitoring access rights on a regular basis",
      "B. Referencing a standard user-access matrix",
      "C. Correcting the segregation of duties conflicts",
      "D. Granting user access using a role-based model"
    ],
    solution: "B",
    explication: "A standard user-access matrix defines the authorized combinations of roles and functions, explicitly documenting which role combinations are incompatible. By referencing this matrix during access provisioning, administrators can prevent segregation of duties conflicts from being granted in the first place. Monitoring (A) detects conflicts after they occur. Correcting conflicts (C) fixes current issues but doesn't prevent future ones. Role-based access (D) is good practice but without a reference matrix, conflicts can still be introduced."
  },
  {
    id: 118,
    question: "Which of the following should be the FIRST consideration when deciding whether data should be moved to a cloud provider for storage?",
    options: [
      "A. Data classification",
      "B. Vendor cloud certification",
      "C. Data storage costs",
      "D. Service level agreements (SLAs)"
    ],
    solution: "A",
    explication: "Data classification is the first consideration because it determines what security requirements, regulatory obligations, and handling restrictions apply to the data. Highly sensitive or regulated data may not be suitable for certain cloud environments, or may require specific controls. Without knowing the classification, the organization cannot evaluate whether a cloud provider is appropriate. Cloud certification, costs, and SLAs are evaluated after understanding what type of data is involved."
  },
  {
    id: 119,
    question: "Which of the following is the MOST cost-effective way to determine the effectiveness of a business continuity plan (BCP)?",
    options: [
      "A. Stress test",
      "B. Tabletop exercise",
      "C. Full operational test",
      "D. Post-implementation review"
    ],
    solution: "B",
    explication: "A tabletop exercise involves key personnel discussing and walking through the BCP scenarios in a meeting room, without actually activating any systems. It identifies gaps and tests understanding of roles and procedures at minimal cost. A full operational test is the most effective but most expensive. Stress tests and post-implementation reviews serve different purposes. Tabletop exercises provide the best balance of insight and cost-effectiveness for evaluating BCP readiness."
  },
  {
    id: 120,
    question: "An IT balanced scorecard is BEST used for which of the following purposes?",
    options: [
      "A. Monitoring strategic performance",
      "B. Evaluating IT's financial position",
      "C. Measuring risk in IT processes",
      "D. Evaluating business processes"
    ],
    solution: "A",
    explication: "The IT balanced scorecard translates IT strategy into measurable objectives across multiple perspectives (financial, customer, internal processes, learning/growth), enabling organizations to monitor whether IT is executing its strategy. It is a strategic performance management tool. Financial position is only one of its four perspectives. Risk measurement and business process evaluation are specific analyses, not the holistic purpose of a balanced scorecard."
  },
  {
    id: 121,
    question: "The following findings are the result of an IS auditor's post-implementation review of a newly implemented system. Which of the following findings is of GREATEST significance?",
    options: [
      "A. The project's 10% budget overrun was not reported to senior management.",
      "B. A lessons-learned session was never conducted.",
      "C. Measurable benefits were not defined.",
      "D. Monthly dashboards did not always contain deliverables."
    ],
    solution: "C",
    explication: "If measurable benefits were not defined before or during implementation, the organization has no way to evaluate whether the system delivered value. This is a fundamental project governance failure — without success criteria, the investment cannot be justified or evaluated. A 10% budget overrun not reported (A) is a governance issue. No lessons learned (B) affects future projects. Incomplete dashboards (D) are reporting gaps. Undefined benefits mean the project's value proposition was never established."
  },
  {
    id: 122,
    question: "A company requires that all program change requests (PCRs) be approved and all modifications be automatically logged. Which of the following IS audit procedures will BEST determine whether unauthorized changes have been made to production programs?",
    options: [
      "A. Use source code comparison software to determine whether any changes have been made to a sample of programs since the last audit date.",
      "B. Review a sample of PCRs for proper approval throughout the program change process.",
      "C. Trace a sample of complete PCR forms to the log of all program changes.",
      "D. Trace a sample of program changes from the log to completed PCR forms."
    ],
    solution: "A",
    explication: "Source code comparison software directly compares current production programs against a known-good baseline, identifying any changes regardless of whether they went through the change control process. This is the most effective way to detect unauthorized changes that may not appear in PCRs or logs. Options B and C test the change control process. Option D traces logged changes to PCRs — but unauthorized changes may not appear in logs or PCRs, making direct code comparison the most reliable method."
  },
  {
    id: 123,
    question: "Which of the following should be restricted from a network administrator's privileges in an adequately segregated IT environment?",
    options: [
      "A. Hardening network ports",
      "B. Monitoring network traffic",
      "C. Changing existing configurations for applications",
      "D. Ensuring transmission protocols are functioning correctly"
    ],
    solution: "C",
    explication: "Network administrators should manage network infrastructure — routers, switches, firewalls, and protocols. Changing application configurations is an application management responsibility, not a network administration function. Allowing network administrators to modify application configurations violates segregation of duties. Hardening ports, monitoring traffic, and ensuring protocols are functioning are all legitimate network administration tasks. Application configuration changes should be restricted to application administrators."
  },
  {
    id: 124,
    question: "An incident response team has been notified of a virus outbreak in a network subnet. Which of the following should be the NEXT step?",
    options: [
      "A. Remove and restore the affected systems.",
      "B. Verify that the compromised systems are fully functional.",
      "C. Focus on limiting the damage.",
      "D. Document the incident."
    ],
    solution: "C",
    explication: "Upon notification of an active virus outbreak, the immediate priority is containment — limiting the damage by preventing the virus from spreading to additional systems. This typically involves isolating the affected subnet. Removing and restoring systems (A) comes after containment. Verifying functionality (B) comes after remediation. Documentation (D) is ongoing but not the immediate next step during an active outbreak. Containment is always the first operational response to an active incident."
  },
  {
    id: 125,
    question: "Which of the following is the BEST source of information for examining the classification of new data?",
    options: [
      "A. Current level of protection",
      "B. Input by data custodians",
      "C. Security policy requirements",
      "D. Risk assessment results"
    ],
    solution: "C",
    explication: "Security policy requirements define the data classification scheme — the categories, criteria, and handling requirements for data at each classification level. When examining whether new data has been classified correctly, the security policy is the authoritative reference. Current protection levels reflect existing classifications. Data custodians manage data but classification authority rests with data owners guided by policy. Risk assessment informs risk appetite but not classification criteria."
  },
  {
    id: 126,
    question: "Which of the following should be of concern to an IS auditor reviewing an organization's configuration and release management process?",
    options: [
      "A. The organization does not use an industry-recognized methodology.",
      "B. Changes and change approvals are not documented.",
      "C. There is no centralized configuration management database (CMDB).",
      "D. All changes require middle and senior management approval."
    ],
    solution: "B",
    explication: "Undocumented changes and approvals mean that the change management process has no audit trail — it cannot be determined who authorized a change, when, or why. This represents a fundamental breakdown in governance and accountability. Not using a specific methodology (A) is less critical if the process works. No CMDB (C) is a gap but processes may still work. Requiring management approval for all changes (D) may create bottlenecks but is a control, not a deficiency."
  },
  {
    id: 127,
    question: "A web proxy server for corporate connections to external resources reduces organizational risk by:",
    options: [
      "A. load balancing traffic to optimize data pathways.",
      "B. providing multi-factor authentication for additional security.",
      "C. anonymizing users through changed IP addresses.",
      "D. providing faster response than direct access."
    ],
    solution: "C",
    explication: "A web proxy server routes corporate internet traffic through a central point, replacing the internal IP addresses of users with the proxy's IP address. This anonymizes corporate users and hides the internal network structure from external entities, reducing the attack surface. Load balancing optimizes performance, not security risk. Proxies don't typically provide MFA. Faster response is a caching benefit, not risk reduction. Anonymization and traffic filtering are the primary security functions."
  },
  {
    id: 128,
    question: "An organization is planning to hire a third party to develop software. What is the MOST appropriate way for the organization to ensure access to code if the software development company goes out of business?",
    options: [
      "A. Establish a software escrow agreement.",
      "B. Request a copy of the software.",
      "C. Establish a service level agreement (SLA).",
      "D. Request software licenses."
    ],
    solution: "A",
    explication: "A software escrow agreement places the source code with a neutral third-party escrow agent. If the development company ceases to operate, the escrow agent releases the source code to the organization. This is the standard legal mechanism for protecting software access rights in case of vendor failure. Requesting a copy (B) gives no ongoing update mechanism. An SLA (C) is unenforceable if the company goes out of business. Software licenses (D) cover usage rights, not source code access."
  },
  {
    id: 129,
    question: "An organization is enhancing the security of a client-facing web application following a proposal to acquire personal information for a business purpose. Which of the following is MOST important to review before implementing this initiative?",
    options: [
      "A. Data ownership assignments",
      "B. Regulatory compliance requirements",
      "C. Customer notification procedures",
      "D. Encryption capabilities"
    ],
    solution: "B",
    explication: "Before acquiring personal information, the organization must understand its regulatory obligations — including what data can be collected, how it must be protected, and what rights individuals have. Privacy regulations (GDPR, CCPA, etc.) define the legal framework for personal data collection. Regulatory compliance is the foundational review. Data ownership, notification procedures, and encryption are all important elements of compliance, but they cannot be properly designed without first understanding regulatory requirements."
  },
  {
    id: 130,
    question: "An organization is considering using production data for testing a new application's functionality. Which of the following data protection techniques would BEST ensure that personal data cannot be inadvertently recovered in test environments while also reducing the need for strict confidentiality of the data?",
    options: [
      "A. Data normalization",
      "B. Data encryption",
      "C. Data minimization",
      "D. Data anonymization"
    ],
    solution: "D",
    explication: "Data anonymization irreversibly removes or modifies personal identifiers from production data, making individuals unidentifiable in the test environment. This means the data cannot be recovered to reveal personal information AND does not require strict confidentiality controls because it is no longer personal data. Encryption (B) still requires protection of keys and access. Minimization (C) reduces data volume but doesn't protect remaining data. Normalization (A) is a database structure technique, not a privacy control."
  },
  {
    id: 131,
    question: "What should an IS auditor evaluate FIRST when reviewing an organization's response to new privacy legislation?",
    options: [
      "A. Implementation plan for restricting the collection of personal information",
      "B. Analysis of systems that contain privacy components",
      "C. Privacy legislation in other countries that may contain similar requirements",
      "D. Operational plan for achieving compliance with the legislation"
    ],
    solution: "B",
    explication: "Before planning a compliance response, the organization must first understand what personal data it holds and which systems contain privacy components. This inventory is the foundation for assessing the scope of compliance work. Without knowing what data exists and where, no meaningful compliance plan can be developed. Understanding similar legislation (C) provides context but is secondary. Implementation and operational plans (A, D) require the systems analysis as their input."
  },
  {
    id: 132,
    question: "Which of the following should be of GREATEST concern to an IS auditor reviewing on-site preventive maintenance for an organization's business-critical server hardware?",
    options: [
      "A. The preventive maintenance schedule is based on mean time between failures (MTBF) parameters.",
      "B. Preventive maintenance is outsourced to multiple vendors without requiring nondisclosure agreements (NDAs).",
      "C. Preventive maintenance has not been approved by the information system owner.",
      "D. Preventive maintenance costs exceed the business's allocated budget."
    ],
    solution: "B",
    explication: "Maintenance technicians have physical access to servers containing sensitive business-critical data. Without NDAs, there is no legal obligation for vendors to protect confidential information they may encounter during maintenance. This creates a significant data confidentiality risk. MTBF-based scheduling (A) is standard practice. Owner approval (C) is a governance concern. Budget overruns (D) are financial concerns. The confidentiality risk from vendors without NDAs is the most significant security issue."
  },
  {
    id: 133,
    question: "An IS auditor is concerned that unauthorized access to a highly sensitive data center might be gained by piggybacking or tailgating. Which of the following is the BEST recommendation?",
    options: [
      "A. Airlock entrance",
      "B. Intruder alarms",
      "C. Procedures for escorting visitors",
      "D. Biometrics"
    ],
    solution: "A",
    explication: "An airlock (mantrap) entrance is a physical security mechanism where a person must pass through one door and wait for it to close before the second door opens. Only one person can pass through at a time, and entry requires individual authentication at each door. This physically prevents tailgating and piggybacking. Intruder alarms detect after the fact. Visitor escort procedures are administrative and reliant on compliance. Biometrics verifies identity but doesn't prevent someone from following an authorized person through."
  },
  {
    id: 134,
    question: "Which of the following is MOST likely to increase non-sampling risk?",
    options: [
      "A. Improperly stratified populations",
      "B. Decreased tolerance rate",
      "C. Inappropriate materiality ratings",
      "D. Poor knowledge of the audit process"
    ],
    solution: "D",
    explication: "Non-sampling risk is the risk that an auditor reaches incorrect conclusions for reasons unrelated to sampling — poor judgment, incomplete procedures, misinterpretation of evidence, or failure to recognize an error. Poor knowledge of the audit process directly causes non-sampling risk. Improperly stratified populations and inappropriate materiality (A, C) affect sampling risk. Decreased tolerance rate (B) affects required sample size. Auditor knowledge and judgment issues are the primary source of non-sampling risk."
  },
  {
    id: 135,
    question: "An organization has decided to outsource a critical application due to a lack of specialized resources. Which risk response has been adopted?",
    options: [
      "A. Mitigation",
      "B. Avoidance",
      "C. Sharing",
      "D. Acceptance"
    ],
    solution: "C",
    explication: "Outsourcing is a form of risk sharing (or risk transfer) — the organization transfers the operational responsibility and some associated risks to a third party. While the organization retains ultimate accountability, the vendor shares the operational risk. Mitigation would mean reducing the risk while keeping the activity internal. Avoidance would mean stopping the activity. Acceptance would mean continuing with the risk without action. Outsourcing is the classic example of risk sharing/transfer."
  },
  {
    id: 136,
    question: "Which of the following would be MOST helpful to an IS auditor assessing the reliability of an organization's network?",
    options: [
      "A. Protocol analyzer",
      "B. Online monitoring",
      "C. Downtime report",
      "D. Response time report"
    ],
    solution: "C",
    explication: "A downtime report provides historical data on network outages — frequency, duration, and causes — which directly measures network reliability (uptime). Reliability is measured by how often and how long the network is unavailable. Protocol analyzers examine traffic content and are used for troubleshooting or security analysis. Online monitoring shows current status. Response time reports show performance speed, not reliability. Downtime data is the definitive measure of reliability."
  },
  {
    id: 137,
    question: "While conducting an IT operations audit, an internal IS auditor discovers there are backup media missing that potentially contain unencrypted data. Which of the following should be the IS auditor's NEXT step?",
    options: [
      "A. Review the backup media policy and procedures.",
      "B. Notify legal and regulatory authorities of the lost media.",
      "C. Write a report regarding the missing media.",
      "D. Determine what data is on the missing media."
    ],
    solution: "D",
    explication: "Before any other action, the auditor must determine what data was on the missing media to assess the severity of the situation. The appropriate response depends entirely on the sensitivity and regulatory classification of the lost data. If the media contained public data, the impact is minimal. If it contained sensitive personal or financial data, regulatory notification may be required. Reviewing policies (A) and reporting (C) come after assessing the situation. Regulatory notification (B) depends on what data was lost."
  },
  {
    id: 138,
    question: "An IS auditor has found that despite an increase in phishing attacks over the past two years, there has been a significant decrease in the success rate. Which of the following is the MOST likely reason for this decline?",
    options: [
      "A. Implementation of a security awareness program",
      "B. Enhanced training for incident responders",
      "C. Implementation of an intrusion detection system (IDS)",
      "D. Development of an incident response plan"
    ],
    solution: "A",
    explication: "Phishing attacks succeed through human error — employees clicking malicious links or providing credentials. A security awareness program directly educates employees to recognize and avoid phishing attempts, which most effectively explains a declining success rate despite more attacks. IDS (C) detects network intrusions but doesn't prevent employees from responding to phishing emails. Incident responder training (B) and response plans (D) address what happens after an incident, not prevention of successful phishing."
  },
  {
    id: 139,
    question: "Which of the following risks is BEST mitigated by implementing an automated three-way match?",
    options: [
      "A. Inaccurate customer records.",
      "B. Invalid payment processing.",
      "C. Inaccurate customer discounts.",
      "D. Purchase order delays."
    ],
    solution: "B",
    explication: "An automated three-way match compares the purchase order, receiving document, and vendor invoice. Payment is only authorized when all three documents match, ensuring that the organization only pays for goods that were ordered and received at the agreed price. This directly mitigates invalid payment processing (paying for goods not ordered, not received, or at incorrect prices). Customer records, discounts, and purchase order timing are not addressed by the three-way match process."
  },
  {
    id: 140,
    question: "A configuration management audit identified that predefined automated procedures are used when deploying and configuring application infrastructure in a cloud-based environment. Which of the following is MOST important for the IS auditor to review?",
    options: [
      "A. Contracts of vendors responsible for maintaining provisioning tools",
      "B. Number of administrators with access to cloud management consoles",
      "C. Processes for making changes to cloud environment specifications",
      "D. Storage location of configuration management documentation"
    ],
    solution: "C",
    explication: "When infrastructure is deployed via automated procedures (Infrastructure as Code), the specifications that define those procedures are the critical control point. Any unauthorized change to these specifications would propagate across all deployments. The auditor must review the change processes for these specifications to ensure they have proper authorization, testing, and approval. Vendor contracts, admin access, and documentation location are secondary concerns compared to the integrity of the automated deployment specifications."
  },
  {
    id: 141,
    question: "Which of the following is the PRIMARY reason to perform a risk assessment?",
    options: [
      "A. To determine the current risk profile",
      "B. To ensure alignment with the business impact analysis (BIA)",
      "C. To help allocate budget for risk mitigation controls",
      "D. To achieve compliance with regulatory requirements"
    ],
    solution: "A",
    explication: "The primary purpose of a risk assessment is to determine the organization's current risk profile — identifying what risks exist, their likelihood and impact, and the current state of controls. This profile then informs all subsequent decisions about risk treatment, budget allocation, and compliance. BIA alignment, budget allocation, and compliance are all outcomes or uses of the risk assessment, not its primary purpose. Understanding the risk landscape is the fundamental objective."
  },
  {
    id: 142,
    question: "Which of the following is the GREATEST benefit related to disaster recovery for an organization that has converted its infrastructure to a virtualized environment?",
    options: [
      "A. Virtual servers decrease the recovery time objective (RTO).",
      "B. Virtual servers reduce the time and complexity associated with backup procedures.",
      "C. Virtual servers can be recreated on similar hardware faster than restoring from backups.",
      "D. Virtual servers eliminate the need to verify backups."
    ],
    solution: "C",
    explication: "Virtual machine images can be rapidly deployed on any compatible hardware, eliminating the need to configure and restore physical hardware from scratch. This dramatically speeds recovery compared to traditional bare-metal restoration. RTO reduction (A) is a consequence, not the specific benefit. Backup simplification (B) is also a benefit but less significant. Backups still need verification (D) — this statement is incorrect. The ability to rapidly recreate VMs on any hardware is the greatest DR advantage of virtualization."
  },
  {
    id: 143,
    question: "Which of the following should be the GREATEST concern to an IS auditor reviewing an organization's method to transport sensitive data between offices?",
    options: [
      "A. The method relies exclusively on the use of 128-bit encryption.",
      "B. The method relies exclusively on the use of digital signatures.",
      "C. The method relies exclusively on the use of asymmetric encryption algorithms.",
      "D. The method relies exclusively on the use of public key infrastructure (PKI)."
    ],
    solution: "B",
    explication: "Digital signatures provide authentication and integrity — they verify who sent the data and that it hasn't been altered. However, they do not provide confidentiality. If sensitive data is transported using only digital signatures without encryption, the content is transmitted in plaintext and can be read by anyone who intercepts it. The other options all involve encryption of the data, providing confidentiality. Using only digital signatures for sensitive data transport is a critical confidentiality gap."
  },
  {
    id: 144,
    question: "During a database management evaluation, an IS auditor discovers that some accounts with database administrator (DBA) privileges have been assigned a default password with an unlimited number of failed login attempts. Which of the following is the auditor's BEST course of action?",
    options: [
      "A. Postpone the audit until adequate security and password management practices are established.",
      "B. Document the finding and explain the risk of having administrator accounts with inappropriate security settings.",
      "C. Identify accounts that have had excessive failed login attempts and request they be disabled.",
      "D. Request the IT manager to change administrator security parameters and update the finding."
    ],
    solution: "B",
    explication: "The auditor's role is to identify, document, and report findings with the associated risks, not to make operational changes. Documenting the finding with a clear risk explanation provides management with the information needed to take corrective action. Postponing the audit (A) is inappropriate. Identifying specific accounts (C) goes beyond the audit scope. Requesting specific parameter changes (D) encroaches on management's remediation responsibility. The auditor reports findings and risks; management decides the response."
  },
  {
    id: 145,
    question: "Which of the following is the PRIMARY purpose of performing a parallel run of a new system?",
    options: [
      "A. To verify the new system provides required business functionality",
      "B. To identify any errors in the program and file interfaces immediately",
      "C. To compare the key performance indicators (KPIs) of the new and old systems",
      "D. To verify the new system produces the expected results"
    ],
    solution: "D",
    explication: "A parallel run operates both the old and new systems simultaneously, comparing outputs to verify that the new system produces the same expected results as the proven old system. This is the definitive validation that the new system functions correctly under real conditions. Verifying business functionality (A) and identifying interface errors (B) are also outcomes of parallel runs, but comparing outputs to verify expected results is the primary purpose. KPI comparison (C) is a secondary analytical outcome."
  },
  {
    id: 146,
    question: "Which of the following is a method to prevent disclosure of classified documents printed on a shared printer?",
    options: [
      "A. Producing a header page with classification level for printed documents",
      "B. Encrypting the data stream between the user's computer and the printer",
      "C. Using passwords to allow authorized users to send documents to the printer",
      "D. Requiring a key code to be entered on the printer to produce hard copy"
    ],
    solution: "D",
    explication: "Requiring a key code at the printer (PIN-based printing or secure print release) prevents documents from being printed until the authorized user is physically present at the printer to enter the code. This prevents others from picking up classified documents from the output tray. Header pages (A) identify classification but don't prevent pickup. Data stream encryption (B) protects transmission, not physical pickup. Password-based submission (C) controls who sends but not when documents are printed and who can retrieve them."
  },
  {
    id: 147,
    question: "Which of the following should be done FIRST when planning to conduct internal and external penetration testing for a client?",
    options: [
      "A. Establish the timing of testing.",
      "B. Identify milestones.",
      "C. Determine the test reporting.",
      "D. Establish the rules of engagement."
    ],
    solution: "D",
    explication: "Establishing the rules of engagement is the mandatory first step for penetration testing. This defines the scope, boundaries, systems to be tested, testing methods allowed, contact persons for emergencies, legal authorization, and what happens if a critical vulnerability is discovered. Without rules of engagement, the testing could inadvertently cause system outages, legal issues, or scope violations. Timing, milestones, and reporting are all defined within or after the rules of engagement are established."
  },
  {
    id: 148,
    question: "Due to advancements in technology and electronic records, an IS auditor has completed an engagement by email only. Which of the following did the IS auditor potentially compromise?",
    options: [
      "A. Reporting",
      "B. Proficiency",
      "C. Due professional care",
      "D. Sufficient evidence"
    ],
    solution: "C",
    explication: "Completing an audit engagement entirely by email without conducting direct observations, interviews, or on-site reviews fails to meet the standard of due professional care. Auditing requires appropriate audit procedures to gather sufficient, reliable evidence. Relying solely on email communications limits the auditor's ability to observe, verify, and corroborate — a violation of professional care standards. Reporting is the output, proficiency relates to knowledge/skills, and evidence depends on procedures performed."
  },
  {
    id: 149,
    question: "Which of the following provides the BEST evidence of effective IT portfolio management?",
    options: [
      "A. Programs in the IT portfolio are prioritized by each business function.",
      "B. The IT portfolio is updated on the basis of current industry benchmarks.",
      "C. The IT portfolio is updated as business strategy changes.",
      "D. IT portfolio updates are communicated when approved."
    ],
    solution: "C",
    explication: "Effective IT portfolio management ensures that the IT portfolio remains aligned with and responsive to changes in business strategy. When business strategy evolves, the portfolio should be updated to reflect new priorities, ensuring IT investments continue to support organizational goals. Prioritization by individual business functions (A) may create silos. Benchmark-based updates (B) may not reflect the specific organization's strategy. Communicating updates (D) is governance, not effectiveness evidence."
  },
  {
    id: 150,
    question: "Which of the following is the PRIMARY responsibility of an internal IS auditor regarding IT controls?",
    options: [
      "A. Providing independent assurance to the public over IT controls implemented by the organization",
      "B. Continuously monitoring IT control operations and reporting any abnormal or exceptional cases",
      "C. Designing and deploying IT controls as part of normal operations",
      "D. Validating IT control effectiveness after implementation across the organization"
    ],
    solution: "D",
    explication: "The primary responsibility of an internal IS auditor is to independently evaluate and validate the effectiveness of IT controls after they have been implemented. Internal auditors do not provide assurance to the public (that is external auditors' role). Continuous monitoring is a management function. Designing and deploying controls is management's responsibility — doing so would compromise auditor independence. Auditors evaluate what management has implemented."
  },
  {
    id: 151,
    question: "Which of the following should an IS auditor be MOST concerned with when reviewing the IT asset disposal process?",
    options: [
      "A. Data stored on the asset",
      "B. Certificate of destruction",
      "C. Monetary value of the asset",
      "D. Data migration to the new asset"
    ],
    solution: "A",
    explication: "The primary concern during IT asset disposal is the data stored on the asset. Improperly disposed assets that still contain sensitive data can lead to data breaches, regulatory violations, and reputational damage. Ensuring data is properly sanitized or destroyed before disposal is the most critical step. Certificates of destruction (B) document the process but come after ensuring data is addressed. Monetary value (C) is a financial concern. Data migration (D) should be completed before disposal begins."
  },
  {
    id: 152,
    question: "A firewall between internal network segments improves security and reduces risk by:",
    options: [
      "A. inspecting all traffic flowing between network segments and applying security policies.",
      "B. ensuring all connecting systems have appropriate security controls enabled.",
      "C. monitoring and reporting on sessions between network participants.",
      "D. logging all packets passing through network segments."
    ],
    solution: "A",
    explication: "An internal firewall's core function is to inspect traffic flowing between segments and enforce security policies — allowing permitted traffic and blocking unauthorized traffic. This implements network segmentation and limits lateral movement if one segment is compromised. Firewalls do not verify the security posture of connecting systems (B), which is a NAC function. Monitoring sessions (C) is IDS/IPS functionality. Logging all packets (D) is network capture. Traffic inspection and policy enforcement are the defining firewall functions."
  },
  {
    id: 153,
    question: "Which of the following BEST enables an IS auditor to understand the shared control requirements between multiple cloud service providers and the customer organization?",
    options: [
      "A. Roles and responsibilities of the IT professionals working under a shared responsibility model",
      "B. An industry-accepted cloud security framework for which all parties have obtained certification",
      "C. Logs produced by a cloud access security broker (CASB) monitoring the multi-cloud solution",
      "D. A risk and controls matrix that documents a clear set of actions for each party"
    ],
    solution: "D",
    explication: "A risk and controls matrix that explicitly documents which controls are the responsibility of each party (provider vs. customer) provides the clearest, most actionable understanding of shared responsibilities across multiple cloud providers. Roles and responsibilities (A) provide context but may be less specific. Certification (B) confirms compliance but may not map controls to parties. CASB logs (C) show activities but don't describe control assignments. The matrix directly maps controls to accountable parties."
  },
  {
    id: 154,
    question: "The BEST way to evaluate the effectiveness of a newly developed application is to:",
    options: [
      "A. perform a post-implementation review.",
      "B. review acceptance testing results.",
      "C. perform a secure code review.",
      "D. analyze load testing results."
    ],
    solution: "A",
    explication: "A post-implementation review evaluates whether the application has achieved its intended objectives after it has been in operation. It assesses actual business benefits delivered, user satisfaction, performance in production, and whether requirements were met. Acceptance testing (B) occurs before go-live and validates requirements. Code review (C) evaluates security, not effectiveness. Load testing (D) evaluates performance under stress. Only a post-implementation review assesses real-world effectiveness of a deployed application."
  },
  {
    id: 155,
    question: "Which of the following is an IS auditor's BEST recommendation to mitigate the risk of eavesdropping associated with an application programming interface (API) integration implementation?",
    options: [
      "A. Implement Simple Object Access Protocol (SOAP).",
      "B. Encrypt the extensible markup language (XML) file.",
      "C. Mask the API endpoints.",
      "D. Implement Transport Layer Security (TLS)."
    ],
    solution: "D",
    explication: "Transport Layer Security (TLS) encrypts all data in transit between API clients and servers, preventing eavesdroppers from intercepting and reading the communication. This is the standard and most effective control for API communication security. SOAP (A) is a messaging protocol, not a security control. Encrypting only the XML file (B) may leave metadata and headers exposed. Masking endpoints (C) provides some obscurity but not encryption. TLS provides comprehensive encryption of the entire communication channel."
  },
  {
    id: 156,
    question: "Which of the following should be used to evaluate an IT development project before an investment is committed?",
    options: [
      "A. Feasibility study",
      "B. Function point analysis",
      "C. Rapid application development",
      "D. Earned value analysis (EVA)"
    ],
    solution: "A",
    explication: "A feasibility study evaluates whether a proposed project is viable — technically, operationally, financially, and legally — before any investment commitment is made. It answers the question 'should we proceed?' Function point analysis measures software size after development is underway. Rapid application development is a development methodology. Earned value analysis measures project performance against plan during execution. Only a feasibility study occurs before investment commitment."
  },
  {
    id: 157,
    question: "A small business unit is implementing a control self-assessment (CSA) program and leveraging the internal audit function to test its internal controls annually. Which of the following is the MOST significant benefit of this approach?",
    options: [
      "A. Line management is more motivated to avoid control exceptions.",
      "B. Business owners can focus more on their core roles.",
      "C. Risks are detected earlier.",
      "D. Compliance costs are reduced."
    ],
    solution: "C",
    explication: "The most significant benefit of a CSA program combined with audit involvement is that risks and control weaknesses are detected earlier — through the self-assessment process that occurs between formal audits. This continuous monitoring approach reduces the time that control gaps remain undetected. Management motivation (A) is a behavioral benefit. Freeing business owners (B) is operational. Cost reduction (D) is financial. Earlier risk detection directly reduces the organization's exposure to uncontrolled risks."
  },
  {
    id: 158,
    question: "An organization has recently become aware of a pervasive chip-level security vulnerability that affects all of its processors. Which of the following is the BEST way to prevent this vulnerability from being exploited?",
    options: [
      "A. Install vendor patches.",
      "B. Review security log incidents.",
      "C. Implement security awareness training.",
      "D. Review hardware vendor contracts."
    ],
    solution: "A",
    explication: "For a hardware/firmware vulnerability at the chip level, vendor-provided patches (microcode updates or OS patches that mitigate the hardware vulnerability) are the most direct and effective remediation. Hardware vendors typically release patches that address or mitigate chip-level vulnerabilities (such as Spectre/Meltdown). Log reviews (B) and awareness training (C) are detective or preventive for different attack types. Reviewing contracts (D) does not remediate the vulnerability."
  },
  {
    id: 159,
    question: "A request for proposal (RFP) for the acquisition of computer hardware should include:",
    options: [
      "A. support and maintenance requirements.",
      "B. detailed specification of the current hardware infrastructure.",
      "C. the requirement that the supplier allow a right of audit.",
      "D. maximum cost restriction."
    ],
    solution: "A",
    explication: "Support and maintenance requirements in an RFP ensure that vendors provide warranties, technical support, spare parts availability, and service levels for the hardware after purchase. This is a critical operational requirement that must be specified in the RFP for long-term hardware management. Detailed current infrastructure (B) is background information, not a procurement requirement. Right-to-audit (C) is more relevant for service providers. Maximum cost is a budget constraint, typically set internally."
  },
  {
    id: 160,
    question: "Which of the following BEST protects evidence in a forensic investigation?",
    options: [
      "A. Protecting the hardware of the affected system",
      "B. Powering down the affected system",
      "C. Imaging the affected system",
      "D. Rebooting the affected system"
    ],
    solution: "C",
    explication: "Imaging the affected system creates a bit-for-bit copy of the storage media, preserving all data including deleted files, metadata, and artifacts. The investigation proceeds on the image while the original is preserved unchanged, maintaining chain of custody. Physical hardware protection (A) is important but doesn't preserve digital evidence. Powering down (B) preserves volatile memory temporarily but loses it permanently. Rebooting (D) destroys volatile memory and may alter system state, compromising evidence."
  },
  {
    id: 161,
    question: "What is the BEST way to reduce the risk of inaccurate or misleading data proliferating through business intelligence systems?",
    options: [
      "A. Develop a metadata repository to store and access metadata.",
      "B. Implement data entry controls for new and existing applications.",
      "C. Implement a consistent database indexing strategy.",
      "D. Establish rules for converting data from one format to another."
    ],
    solution: "B",
    explication: "Data entry controls (validation, input controls, referential integrity checks) prevent inaccurate data from entering the system at the source. If bad data is prevented from entering source systems, it cannot proliferate into business intelligence systems. Metadata repositories (A) document data structure but don't prevent inaccuracy. Database indexing (C) improves performance, not data quality. Data conversion rules (D) ensure format consistency but don't address accuracy at entry. Preventing bad data at the source is the most effective approach."
  },
  {
    id: 162,
    question: "As part of the architecture of virtualized environments, in a bare metal or native virtualization the hypervisor runs without:",
    options: [
      "A. any applications on the guest operating system.",
      "B. a guest operating system.",
      "C. any applications on the host operating system.",
      "D. a host operating system."
    ],
    solution: "D",
    explication: "In bare metal (Type 1) virtualization, the hypervisor runs directly on the physical hardware without a host operating system underneath it. The hypervisor itself is the operating environment. This contrasts with Type 2 (hosted) virtualization where the hypervisor runs on top of a host OS. Bare metal hypervisors (like VMware ESXi, Hyper-V) install directly on hardware, providing better performance and security than Type 2 hypervisors that require a host OS layer."
  },
  {
    id: 163,
    question: "An e-commerce company wants to ensure customers can update payment information securely through their phones. On which servers should Transport Layer Security (TLS) certificates be installed?",
    options: [
      "A. Proxy servers",
      "B. Web servers",
      "C. Database servers",
      "D. Application servers"
    ],
    solution: "B",
    explication: "TLS certificates are installed on web servers to secure HTTPS connections between browsers/apps and the web server. The web server terminates the TLS connection and presents the certificate to authenticate itself to the client. Customers' phones connect to the web server, making it the endpoint where TLS must be implemented. Proxy servers may also use TLS, but web servers are the primary location. Database servers use other encryption methods. Application servers receive traffic from web servers internally."
  },
  {
    id: 164,
    question: "Which of the following is the BEST indication that a software development project is on track to meet its completion deadline?",
    options: [
      "A. Issues identified during user acceptance testing (UAT) have been addressed prior to the original implementation date.",
      "B. Technical specifications and development requirements have been agreed upon and formally recorded.",
      "C. Project plan due dates have been documented for each phase of the software development life cycle.",
      "D. The planned software go-live date has been communicated in advance to end users and stakeholders."
    ],
    solution: "A",
    explication: "Successfully addressing UAT issues before the original implementation date demonstrates that development is progressing as planned, testing has been completed, and the team has capacity to resolve issues within the timeline. This is an actual outcome measure of on-track delivery. Documented specifications (B) and plan dates (C) are planning artifacts, not delivery indicators. Communicating the go-live date (D) is stakeholder management but doesn't indicate whether the project is on schedule."
  },
  {
    id: 165,
    question: "An IS auditor has identified potential fraud activity perpetrated by the network administrator. What should the auditor do FIRST?",
    options: [
      "A. Review the audit finding with the audit committee prior to any other discussions.",
      "B. Share the potential audit finding with the security administrator.",
      "C. Perform more detailed tests prior to disclosing the audit results.",
      "D. Notify the audit committee to ensure a timely resolution."
    ],
    solution: "C",
    explication: "When potential fraud is identified, the auditor must first gather additional evidence through more detailed testing before making any disclosures. Premature disclosure without sufficient evidence could be defamatory, could alert the perpetrator to cover tracks, or could compromise a future investigation. Disclosing unverified suspicions to the audit committee (A, D) or security administrator (B) without evidence is premature. Detailed testing builds the evidentiary foundation for a proper report."
  },
  {
    id: 166,
    question: "Which of the following is the MOST effective accuracy control for entry of a valid numeric part number?",
    options: [
      "A. Comparison to historical order pattern",
      "B. Hash totals",
      "C. Online review of description",
      "D. Self-checking digit"
    ],
    solution: "D",
    explication: "A self-checking digit (check digit) is calculated mathematically from the other digits of the part number and appended to it. When the number is entered, the system recalculates and verifies the check digit, immediately detecting any transposition or single-digit error. This is the most automated and reliable accuracy control for numeric entry. Historical comparison (A) validates reasonableness, not format accuracy. Hash totals (B) verify batch totals. Online description review (C) requires manual verification."
  },
  {
    id: 167,
    question: "Which of the following is MOST important to ensuring the IT governance function can fulfill its responsibilities?",
    options: [
      "A. IT governance has created a roadmap for realizing business gains.",
      "B. IT governance takes leadership on control cost reduction.",
      "C. IT governance ensures that IT strategies are openly shared across the organization.",
      "D. IT governance remains independent from production processes."
    ],
    solution: "D",
    explication: "IT governance must remain independent from production processes to provide objective oversight, accountability, and strategic direction without conflicts of interest. If governance is entangled with day-to-day production, it cannot objectively evaluate performance, enforce compliance, or make unbiased decisions. A roadmap (A), cost reduction (B), and strategy sharing (C) are all activities that governance supports, but independence is the foundational characteristic that enables governance to function effectively."
  },
  {
    id: 168,
    question: "Which of the following would be an auditor's GREATEST concern when reviewing data inputs from spreadsheets into the core finance system?",
    options: [
      "A. Spreadsheets are accessible by all members of the finance department.",
      "B. Undocumented code formats data and transmits directly to the database.",
      "C. There is not a complete inventory of spreadsheets, and file naming is inconsistent.",
      "D. The department data protection policy has not been reviewed or updated for two years."
    ],
    solution: "B",
    explication: "Undocumented code that formats and directly transmits data to the database represents the greatest risk. Without documentation, the code cannot be reviewed, tested, or maintained. It could introduce errors or manipulations into financial data without detection, and there is no change control or oversight. Broad access (A) is an access control concern. No spreadsheet inventory (C) is a governance gap. Outdated policies (D) are a compliance concern. Undocumented, uncontrolled code directly writing to a financial database is the most critical risk."
  },
  {
    id: 169,
    question: "To ensure confidentiality through the use of asymmetric encryption, a message is encrypted with which of the following?",
    options: [
      "A. Recipient's public key",
      "B. Sender's public key",
      "C. Sender's private key",
      "D. Recipient's private key"
    ],
    solution: "A",
    explication: "In asymmetric encryption for confidentiality, the sender encrypts the message using the recipient's public key. Only the recipient's corresponding private key can decrypt it. Since the private key is kept secret by the recipient, only they can read the message, ensuring confidentiality. Encrypting with the sender's private key creates a digital signature (authenticity/non-repudiation). The sender's public key is available to everyone and would not ensure confidentiality."
  },
  {
    id: 170,
    question: "Which of the following is of GREATEST concern with open USB ports on end-user PCs?",
    options: [
      "A. Data leakage",
      "B. Data corruption",
      "C. Installation of unauthorized software",
      "D. Connection of a personal device"
    ],
    solution: "A",
    explication: "Open USB ports on end-user PCs present the greatest risk of data leakage — employees can easily copy sensitive corporate data to a USB device and remove it from the organization. This is a major data loss prevention concern. Data corruption (B) is less likely from USB. Unauthorized software (C) is also a concern but secondary. Connecting personal devices (D) is a symptom of the broader issue. Data exfiltration via USB is a well-known and significant security threat."
  }
];