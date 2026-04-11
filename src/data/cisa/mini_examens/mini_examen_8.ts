export const questionsCISA8 = [
    {
        id: 1,
        question: "Which of the following BEST ensures that effective change management is in place in an IS environment?",
        options: [
            "A. Adequate testing was carried out by the development team.",
            "B. User-prepared detailed test criteria for acceptance testing of the software.",
            "C. User authorization procedures for application access are well established.",
            "D. Access to production source and object programs is well controlled."
        ],
        answer: "D",
        explanation: "Access to production source and object programs being well controlled is the best indicator of effective change management. It ensures that only authorized changes reach production, preventing unauthorized modifications and maintaining integrity of the production environment."
    },
    {
        id: 2,
        question: "What is the PRIMARY reason for an organization to classify the data stored on its internal networks?",
        options: [
            "A. To comply with the organization's data policies.",
            "B. To follow industry best practices.",
            "C. To implement data protection requirements.",
            "D. To determine data retention policy."
        ],
        answer: "C",
        explanation: "The primary reason for data classification is to implement appropriate data protection requirements. By classifying data, organizations can apply the right level of security controls based on sensitivity and criticality, ensuring adequate protection of information assets."
    },
    {
        id: 3,
        question: "An IS auditor's draft report recommends the development of a procedure for IT server backups. During the closing meeting, the IT manager agrees to implement only part of the recommendations in the report. Which action should the auditor take FIRST to address this situation?",
        options: [
            "A. Finalize the audit report.",
            "B. Schedule a follow-up audit.",
            "C. Provide industry best practice documentation.",
            "D. Escalate the issue to audit management."
        ],
        answer: "D",
        explanation: "When management agrees to implement only part of audit recommendations, the auditor should first escalate to audit management. This ensures appropriate oversight is applied before finalizing the report and determines the proper course of action regarding the partially accepted finding."
    },
    {
        id: 4,
        question: "Effective separation of duties in an online environment can BEST be achieved by utilizing:",
        options: [
            "A. appropriate supervision.",
            "B. access authorization tables.",
            "C. transaction logging.",
            "D. written procedure manuals."
        ],
        answer: "B",
        explanation: "Access authorization tables best achieve separation of duties in an online environment by systematically defining and enforcing which users have access to which functions, preventing any single user from performing incompatible duties within the system."
    },
    {
        id: 5,
        question: "Which of the following provides the GREATEST assurance that a middleware application compiling data from multiple sales transaction databases for forecasting is operating effectively?",
        options: [
            "A. Automated reconciliations.",
            "B. Exception reporting.",
            "C. Manual checks.",
            "D. Continuous auditing."
        ],
        answer: "A",
        explanation: "Automated reconciliations provide the greatest assurance for middleware effectiveness by systematically verifying that data compiled from multiple sources is complete and accurate, detecting discrepancies in real time without reliance on manual intervention."
    },
    {
        id: 6,
        question: "An IS auditor has learned that access privileges are not periodically reviewed or updated. Which of the following would provide the BEST evidence to determine whether transactions have been executed by authorized employees?",
        options: [
            "A. Reconciliations.",
            "B. Control totals.",
            "C. Changelogs.",
            "D. Audit trails."
        ],
        answer: "D",
        explanation: "Audit trails provide the best evidence of who executed transactions, recording user identity, time, and actions taken. They enable the auditor to trace transactions back to specific users and determine whether those users were authorized to perform such actions."
    },
    {
        id: 7,
        question: "A financial institution suspects that a manager has been crediting customer accounts without authorization. Which of the following is the MOST effective method to validate this concern?",
        options: [
            "A. Variable sampling.",
            "B. Discovery sampling.",
            "C. Stop-or-go sampling.",
            "D. Haphazard sampling."
        ],
        answer: "B",
        explanation: "Discovery sampling is most effective when the objective is to find at least one occurrence of a specific type of irregularity or fraud. It is designed to detect rare but critical events such as unauthorized account credits, making it ideal for fraud investigation scenarios."
    },
    {
        id: 8,
        question: "Identifying and documenting project-related risks BEST enables project managers to:",
        options: [
            "A. prioritize tasks.",
            "B. track deliverables.",
            "C. define the scope.",
            "D. complete the project on time."
        ],
        answer: "A",
        explanation: "Identifying and documenting project risks best enables project managers to prioritize tasks by focusing resources and attention on the highest-risk areas. This risk-based prioritization ensures critical issues are addressed before they impact project outcomes."
    },
    {
        id: 9,
        question: "During an access review, an IS auditor observes a workstation message indicating the operating system has an expired software license. What should be done FIRST?",
        options: [
            "A. Disregard the error because it is out of audit scope.",
            "B. Document the event for inclusion in the audit report.",
            "C. Communicate the issue to the auditee for validation.",
            "D. Add software licensing controls to the scope of the audit."
        ],
        answer: "C",
        explanation: "Communicating the issue to the auditee for validation should be done first. This allows the auditee to confirm whether the observation is accurate and provides context before the auditor decides how to handle it (document it, expand scope, etc.)."
    },
    {
        id: 10,
        question: "An IS auditor reviewing the physical access section of a security plan for a data center should expect to find that:",
        options: [
            "A. entry points requiring different rules of access have been identified.",
            "B. access to environmental controls is well labeled.",
            "C. the data center has mantraps on entrances and exits.",
            "D. the access devices are connected to a remote management system."
        ],
        answer: "A",
        explanation: "A security plan for a data center should identify entry points that require different access rules, establishing a layered access control approach. This ensures that varying levels of sensitivity within the data center are protected with appropriate and differentiated controls."
    },
    {
        id: 11,
        question: "Which of the following is the PRIMARY objective when encrypting a database?",
        options: [
            "A. Preserving the ability to query data.",
            "B. Protecting data from unauthorized changes.",
            "C. Preserving the ability to access data securely.",
            "D. Protecting data from unauthorized viewing."
        ],
        answer: "D",
        explanation: "The primary objective of database encryption is to protect data from unauthorized viewing (confidentiality). Encryption ensures that even if an unauthorized party gains access to the database files, they cannot read the sensitive data without the decryption key."
    },
    {
        id: 12,
        question: "Which of the following should be of GREATEST concern to an IS auditor reviewing a system interface used to download credit card numbers from a cloud service provider?",
        options: [
            "A. Errors and warnings during the transfer are not logged.",
            "B. The data transfer is performed manually instead of using a scheduler.",
            "C. The data transfer has not been encrypted.",
            "D. Checksums are not used to validate the data transfer."
        ],
        answer: "C",
        explanation: "The lack of encryption for credit card data in transit is the greatest concern. Credit card numbers are highly sensitive PCI DSS-regulated data, and transmitting them unencrypted exposes them to interception and data breach, posing severe compliance and security risks."
    },
    {
        id: 13,
        question: "Audit observations should be FIRST communicated with the auditee:",
        options: [
            "A. during fieldwork.",
            "B. at the end of fieldwork.",
            "C. within the audit report.",
            "D. when drafting the report."
        ],
        answer: "A",
        explanation: "Audit observations should first be communicated during fieldwork. Early communication allows the auditee to provide clarification, correct misunderstandings, and offer additional evidence, improving the accuracy and fairness of the final audit report."
    },
    {
        id: 14,
        question: "Which of the following would be an IS auditor's GREATEST concern when reviewing the organization's business continuity plan (BCP)?",
        options: [
            "A. The recovery plan does not contain the process and application dependencies.",
            "B. The duration of tabletop exercises is longer than the recovery point objective (RPO).",
            "C. The recovery point objective (RPO) and recovery time objective (RTO) are not the same.",
            "D. The duration of tabletop exercises is longer than the recovery time objective (RTO)."
        ],
        answer: "A",
        explanation: "The absence of process and application dependencies in the recovery plan is the greatest concern. Without understanding dependencies, recovery efforts may fail because critical upstream or downstream systems are not restored in the correct order or timeframe."
    },
    {
        id: 15,
        question: "Which of the following provides the BEST evidence that IT portfolio management is aligned with organizational strategies?",
        options: [
            "A. IT steering committee minutes that include approval for prioritization of IT projects.",
            "B. Project sponsor sign-off on all project documents from beginning to end.",
            "C. Project sponsor sign-off on IT project proposals and milestones.",
            "D. Finance committee minutes that include approval for the annual IT budget."
        ],
        answer: "A",
        explanation: "IT steering committee minutes showing approval for IT project prioritization best evidence alignment with organizational strategy. The steering committee's role is to ensure IT investments reflect business priorities, making their documented decisions the strongest indicator of strategic alignment."
    },
    {
        id: 16,
        question: "Which of the following is the BEST reason for software developers to use automated testing versus manual testing?",
        options: [
            "A. Reduces the scope of acceptance testing.",
            "B. Improved regression testing.",
            "C. CAATs are easily developed.",
            "D. Ease of maintaining automated test scripts."
        ],
        answer: "B",
        explanation: "Improved regression testing is the best reason for automated testing. Automated tests can be repeatedly and consistently run after code changes to ensure existing functionality has not been broken, which is impractical to do manually at scale and speed."
    },
    {
        id: 17,
        question: "An organization's senior management thinks current security controls may be excessive and requests an IS auditor's advice on how to assess the adequacy of current measures. What is the auditor's BEST recommendation to management?",
        options: [
            "A. Introduce automated security monitoring tools.",
            "B. Downgrade security controls on low-risk systems.",
            "C. Perform correlation analysis between incidents and investments.",
            "D. Re-evaluate the organization's risk and control framework."
        ],
        answer: "D",
        explanation: "Re-evaluating the organization's risk and control framework is the best recommendation. This structured approach ensures security controls are properly matched to actual risks, identifying whether controls are excessive, insufficient, or appropriately calibrated to the organization's risk appetite."
    },
    {
        id: 18,
        question: "An IS auditor reviewing an IT organization should be MOST concerned if the IT steering committee:",
        options: [
            "A. does not meet regularly for oversight of IT investments and projects.",
            "B. consults the board of directors on procedural and standard changes.",
            "C. reviews IT-related policies and standards only once per year.",
            "D. does not include business-level representation."
        ],
        answer: "A",
        explanation: "Irregular meetings of the IT steering committee is the greatest concern because it indicates a lack of active oversight over IT investments and projects. Without regular meetings, the committee cannot fulfill its governance role of ensuring IT aligns with business objectives."
    },
    {
        id: 19,
        question: "A bank performed minor changes to the interest calculation computer program. Which of the following techniques would provide the STRONGEST evidence to determine whether the interest calculations are correct?",
        options: [
            "A. Review of the quality assurance (QA) test results.",
            "B. Manual verification of a sample of the results.",
            "C. Source code review.",
            "D. Parallel simulation using audit software."
        ],
        answer: "D",
        explanation: "Parallel simulation using audit software provides the strongest evidence by independently recalculating interest using the auditor's own software and comparing results against the production system. This directly tests the accuracy of outputs without relying on the auditee's own testing."
    },
    {
        id: 20,
        question: "Which of the following is the MOST important responsibility of data owners when implementing a data classification process?",
        options: [
            "A. Reviewing emergency changes to data.",
            "B. Implementing access rules over database tables.",
            "C. Determining appropriate user access levels.",
            "D. Authorizing application code changes."
        ],
        answer: "C",
        explanation: "Determining appropriate user access levels is the most important responsibility of data owners. Data owners understand the sensitivity and business value of their data, making them best positioned to decide who should have access and at what level."
    },
    {
        id: 21,
        question: "Which of the following controls is MOST important for ensuring the integrity of system interfaces?",
        options: [
            "A. File checksums.",
            "B. IT operator monitoring.",
            "C. File counts.",
            "D. Periodic audits."
        ],
        answer: "A",
        explanation: "File checksums are the most important control for ensuring interface integrity. Checksums detect any alteration, corruption, or incomplete transfer of data by verifying that the data received matches what was sent, providing a mathematically reliable integrity check."
    },
    {
        id: 22,
        question: "Which of the following is the MOST important consideration when developing tabletop exercises within a cybersecurity incident response plan?",
        options: [
            "A. Identify the scope and scenarios that are relevant to current threats faced by the organization.",
            "B. Ensure participants are selected from all cross-functional units in the organization.",
            "C. Ensure the incident response team will have enough distractions to simulate real-life situations.",
            "D. Create exercises that are challenging enough to prove inadequacies in the current incident response plan."
        ],
        answer: "A",
        explanation: "Identifying relevant scope and scenarios based on current threats is most important. Tabletop exercises must reflect realistic threats the organization actually faces to be meaningful and actionable, ensuring the incident response plan is tested against genuine risk scenarios."
    },
    {
        id: 23,
        question: "When multiple applications are hosted on the same virtualized server, the procedures to restore the server should be based on which of the following?",
        options: [
            "A. The application with the most frequent backups.",
            "B. The critical application with the shortest recovery time objective (RTO).",
            "C. The critical application with the longest recovery point objective (RPO).",
            "D. The mean recovery time of all applications."
        ],
        answer: "B",
        explanation: "Recovery procedures should be based on the critical application with the shortest RTO. Since all applications share the same server, the most time-sensitive application dictates the recovery timeline to ensure the most critical business needs are met first."
    },
    {
        id: 24,
        question: "A source code repository should be designed to:",
        options: [
            "A. provide automatic incorporation and distribution of modified code.",
            "B. provide secure versioning and backup capabilities for existing code.",
            "C. prevent developers from accessing secure source code.",
            "D. prevent changes from being incorporated into existing code."
        ],
        answer: "B",
        explanation: "A source code repository should provide secure versioning and backup capabilities. This ensures code integrity, enables rollback to previous versions if needed, and protects the organization's intellectual property while supporting controlled development workflows."
    },
    {
        id: 25,
        question: "An organization plans to deploy a data loss prevention (DLP) solution. Which of the following is the BEST control to implement along with the DLP solution?",
        options: [
            "A. Train staff in classifying and handling information assets appropriately based on sensitivity and criticality.",
            "B. Deploy the default DLP solution and assign the security operation center (SOC) to follow up on alerts.",
            "C. Disable and block all removable device ports on all servers and laptops.",
            "D. Configure the firewall rule sets to only allow connections that have legitimate business needs."
        ],
        answer: "A",
        explanation: "Training staff in data classification and handling best complements a DLP solution. DLP effectiveness depends on accurate data classification; without staff awareness and proper classification practices, the DLP system cannot accurately identify and protect sensitive information."
    },
    {
        id: 26,
        question: "An IS auditor has been asked to review an event log aggregation system to ensure risk management practices have been applied. Which of the following should be of MOST concern to the auditor?",
        options: [
            "A. Completeness testing has not been performed on the log data.",
            "B. Log feeds are uploaded via batch process.",
            "C. The log data is not normalized.",
            "D. Data encryption standards have not been considered."
        ],
        answer: "A",
        explanation: "The lack of completeness testing on log data is the greatest concern. If log data is incomplete, the organization may be unaware of security events or incidents, undermining the entire purpose of the log aggregation system for risk management."
    },
    {
        id: 27,
        question: "Concerned about a major data security breach, the chief executive officer (CEO) has asked for a detailed audit of the network security function. A recent reorganization has left the IS audit department with limited technical experience. The BEST course of action for the IS audit manager is to:",
        options: [
            "A. assign the most senior IS auditors to the network security audit.",
            "B. accept the audit request but postpone the audit until network training can be obtained.",
            "C. contract with an external organization to perform the audit.",
            "D. give the audit high priority in next year's audit plan."
        ],
        answer: "C",
        explanation: "Contracting with an external organization is the best course of action when the internal team lacks the required technical expertise. This ensures the audit is performed competently and with the necessary technical skills, maintaining audit quality and credibility."
    },
    {
        id: 28,
        question: "Which of the following is MOST likely to increase if an organization increases its risk appetite?",
        options: [
            "A. Audit findings.",
            "B. Key controls.",
            "C. Opportunities.",
            "D. Security incidents."
        ],
        answer: "C",
        explanation: "Increasing risk appetite allows the organization to pursue more opportunities that were previously considered too risky. A higher risk tolerance enables bolder strategic decisions, investments, and initiatives that can generate greater business value."
    },
    {
        id: 29,
        question: "Which of the following is the MOST important consideration for patching mission critical business application servers against known vulnerabilities?",
        options: [
            "A. Network vulnerability scans are conducted after patches are implemented.",
            "B. Patches are implemented in a test environment prior to rollout into production.",
            "C. Vulnerability assessments are periodically conducted according to defined schedules.",
            "D. Roles and responsibilities for implementing patches are defined."
        ],
        answer: "B",
        explanation: "Testing patches in a non-production environment before deploying to mission critical servers is most important. This prevents patches from introducing new issues or incompatibilities that could disrupt critical business operations."
    },
    {
        id: 30,
        question: "An IS auditor finds that the cost of developing an application is now projected to significantly exceed the budget. Which of the following is the GREATEST risk to communicate to senior management?",
        options: [
            "A. Project abandonment.",
            "B. Noncompliance with project methodology.",
            "C. Inability to achieve expected benefits.",
            "D. Increased staff turnover."
        ],
        answer: "C",
        explanation: "The inability to achieve expected benefits is the greatest risk to communicate. Budget overruns often lead to scope reduction or compromised quality, which can mean the system fails to deliver the business value that justified the investment in the first place."
    },
    {
        id: 31,
        question: "Which of the following biometric access controls has the HIGHEST rate of false negatives?",
        options: [
            "A. Iris recognition.",
            "B. Fingerprint scanning.",
            "C. Retina scanning.",
            "D. Face recognition."
        ],
        answer: "D",
        explanation: "Face recognition has the highest rate of false negatives among common biometric methods. It is more susceptible to environmental factors such as lighting, aging, facial hair, and angle of capture, leading to more frequent failures to authenticate legitimate users."
    },
    {
        id: 32,
        question: "An IS audit review identifies inconsistencies in privacy requirements across third-party service provider contracts. Which of the following is the BEST recommendation to address this situation?",
        options: [
            "A. Prioritize contract amendments for third-party providers.",
            "B. Review privacy requirements when contracts come up for renewal.",
            "C. Suspend contracts with third-party providers that handle sensitive data.",
            "D. Require third-party providers to sign nondisclosure agreements (NDAs)."
        ],
        answer: "A",
        explanation: "Prioritizing contract amendments for third-party providers is the best recommendation. Inconsistent privacy requirements create compliance gaps and data protection risks that should be addressed proactively rather than waiting for contract renewals."
    },
    {
        id: 33,
        question: "The FIRST step in an incident response plan is to:",
        options: [
            "A. notify the head of the IT department.",
            "B. initiate root cause analysis.",
            "C. isolate systems impacted by the incident.",
            "D. validate the incident."
        ],
        answer: "D",
        explanation: "Validating the incident is the first step in incident response. Before taking any action, the team must confirm that an actual incident has occurred rather than a false alarm, preventing unnecessary disruption from responding to non-incidents."
    },
    {
        id: 34,
        question: "Which of the following control measures is the MOST effective against unauthorized access of confidential information on stolen or lost laptops?",
        options: [
            "A. Disk encryption.",
            "B. User awareness.",
            "C. Password-protected files.",
            "D. Remote wipe capabilities."
        ],
        answer: "A",
        explanation: "Disk encryption is the most effective control against unauthorized access on stolen or lost laptops. It renders all data on the device unreadable without the encryption key, protecting data even if the device is physically accessed or the hard drive is removed."
    },
    {
        id: 35,
        question: "What should an IS auditor recommend to management as the MOST important action before selecting a Software as a Service (SaaS) vendor?",
        options: [
            "A. Determine service level requirements.",
            "B. Perform a business impact analysis (BIA).",
            "C. Complete a risk assessment.",
            "D. Conduct a vendor audit."
        ],
        answer: "C",
        explanation: "Completing a risk assessment before selecting a SaaS vendor is most important. It identifies potential risks associated with each vendor option — such as data security, compliance, availability, and vendor viability — enabling informed decision-making based on the organization's risk tolerance."
    },
    {
        id: 36,
        question: "An IS auditor discovers from patch logs that some in-scope systems are not compliant with the regular patching schedule. What should the auditor do NEXT?",
        options: [
            "A. Request a plan of action to be established as a follow-up item.",
            "B. Interview IT management to clarify the current procedure.",
            "C. Review the organization's patch management policy.",
            "D. Report this finding to senior management."
        ],
        answer: "C",
        explanation: "Reviewing the organization's patch management policy should be done next. The auditor needs to understand what the required patching schedule is and what exceptions or compensating controls may be permitted before drawing conclusions about noncompliance."
    },
    {
        id: 37,
        question: "Which of the following provides the MOST effective protection against ransomware attacks?",
        options: [
            "A. Ensuring appropriate backups are secured and isolated from the primary facility.",
            "B. Ensuring the primary facility is compatible with the hot site.",
            "C. Familiarizing employees with the business continuity plan (BCP) and routinely testing.",
            "D. Obtaining cybersecurity and ransomware insurance."
        ],
        answer: "A",
        explanation: "Secured and isolated backups are the most effective protection against ransomware. If backups are isolated from the network, ransomware cannot encrypt them, enabling the organization to restore operations without paying a ransom."
    },
    {
        id: 38,
        question: "Which of the following observations should be of GREATEST concern to an IS auditor performing an audit of change and release management controls for a new complex system developed by a small in-house IT team?",
        options: [
            "A. IT administrators have access to the production and development environment.",
            "B. Some user acceptance testing (UAT) was completed by members of the IT team.",
            "C. Post-implementation testing is not conducted for all system releases.",
            "D. Access to change testing strategy and results is not restricted to staff outside the IT team."
        ],
        answer: "A",
        explanation: "IT administrators having access to both production and development environments is the greatest concern. This eliminates segregation of duties, allowing developers to introduce unauthorized or untested changes directly into production without independent review or approval."
    },
    {
        id: 39,
        question: "For effective IT governance, it is MOST important to have an independent reporting line for which of the following IT functions?",
        options: [
            "A. Risk management.",
            "B. Infrastructure.",
            "C. Operations.",
            "D. Security."
        ],
        answer: "D",
        explanation: "Security requires the most independent reporting line for effective IT governance. An independent security function ensures that security decisions are not compromised by operational or development pressures, enabling objective assessment and enforcement of security controls."
    },
    {
        id: 40,
        question: "The record-locking option of a database management system (DBMS) serves to:",
        options: [
            "A. allow users to lock others out of their files.",
            "B. eliminate the risk of concurrent updates to a record.",
            "C. restrict users from changing certain values within records.",
            "D. allow database administrators (DBAs) to record the activities of users."
        ],
        answer: "B",
        explanation: "Record locking in a DBMS eliminates the risk of concurrent updates to a record. It prevents multiple users from simultaneously modifying the same record, which could result in data corruption or inconsistency due to conflicting updates."
    },
    {
        id: 41,
        question: "During an audit of payment services of a branch based in a foreign country, a large global bank's audit team identifies an opportunity to use data analytics techniques to identify abnormal payments. Which of the following is the team's MOST important course of action?",
        options: [
            "A. Request the data from the branch as the team audit charter covers the country where it is based.",
            "B. Conduct a walk through of the analytical strategy with stakeholders of the audited branch to obtain their buy-in.",
            "C. Consult the legal department to understand the procedure for requesting data from a different jurisdiction.",
            "D. Agree on a data extraction and sharing strategy with the IT team of the audited branch."
        ],
        answer: "C",
        explanation: "Consulting the legal department is the most important first action. Data from a foreign jurisdiction may be subject to local data privacy, sovereignty, and transfer laws. Proceeding without legal guidance could violate regulations and invalidate the audit findings."
    },
    {
        id: 42,
        question: "IT governance should be driven by:",
        options: [
            "A. organizational strategies.",
            "B. business unit initiatives.",
            "C. policies and standards.",
            "D. balanced scorecards."
        ],
        answer: "A",
        explanation: "IT governance should be driven by organizational strategies. IT must support and enable the achievement of organizational goals, so governance frameworks must be aligned with and directed by the overall strategic direction of the business."
    },
    {
        id: 43,
        question: "Which of the following would provide management with the MOST reasonable assurance that a new data warehouse will meet the needs of the organization?",
        options: [
            "A. Integrating data requirements into the system development life cycle (SDLC).",
            "B. Facilitating effective communication between management and developers.",
            "C. Classifying data quality issues by the severity of their impact to the organization.",
            "D. Appointing data stewards to provide effective data governance."
        ],
        answer: "A",
        explanation: "Integrating data requirements into the SDLC provides the most assurance that the data warehouse will meet organizational needs. This ensures requirements are captured, validated, and built into the system from the start, reducing the risk of misalignment with business expectations."
    },
    {
        id: 44,
        question: "Which of the following is MOST important to include in a business case for an IT-enabled investment?",
        options: [
            "A. Business impact analysis (BIA).",
            "B. Security requirements.",
            "C. Risk assessment.",
            "D. Cost-benefit analysis."
        ],
        answer: "D",
        explanation: "A cost-benefit analysis is most important in a business case because it quantifies the financial justification for the investment. It enables decision-makers to evaluate whether the expected benefits outweigh the costs and determine the investment's value to the organization."
    },
    {
        id: 45,
        question: "Which of the following should be the PRIMARY consideration when designing a backup strategy for an online reservation system that requires high availability?",
        options: [
            "A. Data classification.",
            "B. Scheduled maintenance.",
            "C. Recovery time objective (RTO).",
            "D. Recovery point objective (RPO)."
        ],
        answer: "C",
        explanation: "RTO is the primary consideration for a high-availability system. It defines how quickly the system must be restored after a failure. For an online reservation system requiring high availability, minimizing downtime is critical to maintaining business operations and customer service."
    },
    {
        id: 46,
        question: "During recent post-implementation reviews, an IS auditor has noted that several deployed applications are not being used by the business. The MOST likely cause would be the lack of:",
        options: [
            "A. change management.",
            "B. IT portfolio management.",
            "C. IT resource management.",
            "D. system support documentation."
        ],
        answer: "B",
        explanation: "The lack of IT portfolio management is the most likely cause. Without portfolio management, IT investments may not be properly aligned with business needs, resulting in applications being developed and deployed that do not meet actual user requirements or solve real business problems."
    },
    {
        id: 47,
        question: "Which of the following is the PRIMARY way in which data analytics tools increase audit quality and execution efficiencies?",
        options: [
            "A. Enabling the evaluation of data within IT systems to allow full population testing.",
            "B. Facilitating access to confidential client data for analysis.",
            "C. Providing a narrowed risk focus for more targeted testing procedures.",
            "D. Detecting certain types of fraud in order to predict future fraud scenarios."
        ],
        answer: "A",
        explanation: "Data analytics tools primarily increase audit quality by enabling full population testing rather than sampling. This allows auditors to analyze 100% of transactions, significantly improving the likelihood of detecting anomalies, errors, and fraud that sampling might miss."
    },
    {
        id: 48,
        question: "Which of the following is the BEST way for an IS auditor to assess the design of an automated application control?",
        options: [
            "A. Interview the application developer.",
            "B. Obtain management attestation and sign-off.",
            "C. Review system configuration parameters and output.",
            "D. Review the application implementation documents."
        ],
        answer: "C",
        explanation: "Reviewing system configuration parameters and output is the best way to assess automated application control design. This provides direct evidence of how the control is actually configured and operating, rather than relying on documentation or assertions that may not reflect reality."
    },
    {
        id: 49,
        question: "An IS auditor is evaluating an enterprise resource planning (ERP) migration from local systems to the cloud. Who should be responsible for the data classification in this project?",
        options: [
            "A. Information security officer.",
            "B. Data architect.",
            "C. Database administrator (DBA).",
            "D. Information owner."
        ],
        answer: "D",
        explanation: "The information owner is responsible for data classification. They understand the business value, sensitivity, and criticality of the data they are accountable for, making them best positioned to determine the appropriate classification level for protection purposes."
    },
    {
        id: 50,
        question: "An IS auditor has been tasked with auditing the inventory control process for a large organization that processes millions of data transactions. Which of the following is the BEST testing strategy to adopt?",
        options: [
            "A. Continuous monitoring.",
            "B. Control self-assessments (CSAs).",
            "C. Risk assessments.",
            "D. Stop-or-go sampling."
        ],
        answer: "A",
        explanation: "Continuous monitoring is the best strategy for auditing high-volume transaction processing. It enables ongoing, real-time analysis of all transactions rather than periodic sampling, providing timely detection of anomalies and control failures across millions of transactions."
    },
    {
        id: 51,
        question: "Which of the following BEST describes the role of a document owner when implementing a data classification policy in an organization?",
        options: [
            "A. Classifies documents to correctly reflect the level of sensitivity of information they contain.",
            "B. Ensures documents are handled in accordance with the sensitivity of information they contain.",
            "C. Defines the conditions under which documents containing sensitive information may be transmitted.",
            "D. Classifies documents in accordance with industry standards and best practices."
        ],
        answer: "A",
        explanation: "The document owner's primary role is to classify documents based on the sensitivity of their contents. As the person accountable for the document, they are best positioned to determine the appropriate classification level that reflects the sensitivity and value of the information."
    },
    {
        id: 52,
        question: "The PRIMARY reason to perform internal quality assurance (QA) for an internal audit function is to ensure:",
        options: [
            "A. inherent risk in audits is minimized.",
            "B. audit resources are used most effectively.",
            "C. internal audit activity conforms with audit standards and methodology.",
            "D. the audit function is adequately governed and meets performance metrics."
        ],
        answer: "C",
        explanation: "The primary reason for internal QA in audit functions is to ensure conformance with audit standards and methodology. This maintains the quality, consistency, and credibility of audit work, ensuring results are reliable and defensible."
    },
    {
        id: 53,
        question: "Which of the following would be of GREATEST concern to an IS auditor conducting an audit of an organization's network security with the focus of preventing system breaches?",
        options: [
            "A. Computer names are available to the Internet.",
            "B. The data loss prevention (DLP) system does not monitor malicious incoming traffic.",
            "C. Help desk personnel are able to remote into other external systems.",
            "D. The guest wireless system does not have content filtering."
        ],
        answer: "C",
        explanation: "Help desk personnel being able to remote into external systems is the greatest concern. This capability could be exploited to exfiltrate data or provide unauthorized access to external parties, creating a significant security vulnerability and potential breach vector."
    },
    {
        id: 54,
        question: "An IS auditor determines that the vendor's deliverables do not include the source code for a newly acquired product. To address this issue, which of the following should the auditor recommend be included in the contract?",
        options: [
            "A. Software escrow agreement.",
            "B. Service level agreement (SLA).",
            "C. Confidentiality and data protection clauses.",
            "D. Right-to-audit clause."
        ],
        answer: "A",
        explanation: "A software escrow agreement is the appropriate recommendation. It ensures that source code is held by a trusted third party and released to the organization under defined conditions (such as vendor insolvency), protecting the organization's ability to maintain the software."
    },
    {
        id: 55,
        question: "Which of the following presents the GREATEST risk of data leakage in the cloud environment?",
        options: [
            "A. Multi-tenancy within the same database.",
            "B. Lack of role-based access.",
            "C. Expiration of security certificate.",
            "D. Lack of data retention policy."
        ],
        answer: "A",
        explanation: "Multi-tenancy within the same database presents the greatest risk of data leakage. When multiple customers share the same database infrastructure, a misconfiguration or vulnerability could allow one tenant's data to be accessed by another, causing a data breach."
    },
    {
        id: 56,
        question: "Which of the following would provide multi-factor authentication for physical access to a data center?",
        options: [
            "A. Key card with owner's photo on it.",
            "B. Proximity badge and fingerprint scan.",
            "C. Retina scan and voice recognition.",
            "D. Facial recognition and presence of a security guard."
        ],
        answer: "B",
        explanation: "A proximity badge and fingerprint scan provide multi-factor authentication by combining something you have (the badge) with something you are (biometric fingerprint). This satisfies two distinct authentication factors, which is the definition of multi-factor authentication."
    },
    {
        id: 57,
        question: "Which of the following should be of GREATEST concern to an IS auditor reviewing controls around a system interface for two applications with high volumes of transferred data?",
        options: [
            "A. The system administrator has access rights to the transaction summary files.",
            "B. Transactions from the source and destination systems are reconciled on a weekly basis.",
            "C. Transactions from the source and destination systems are in different formats.",
            "D. There are duplicate transactions on the destination system."
        ],
        answer: "D",
        explanation: "Duplicate transactions on the destination system are the greatest concern. Duplicates indicate a data integrity issue that could cause financial errors, incorrect reporting, or regulatory compliance failures, especially in high-volume transaction environments."
    },
    {
        id: 58,
        question: "An audit program indicates that a specific number of transactions are to be sampled for testing a particular control. However, it has been determined that the control design is deficient. What should the IS auditor do in response to this information?",
        options: [
            "A. Recommend a change to the audit program to increase the sample size.",
            "B. Recommend a change to the audit program and testing methodology used.",
            "C. Document the observation and the testing methodology used.",
            "D. Notify audit management and continue to use the sample size."
        ],
        answer: "B",
        explanation: "When a control design is found to be deficient, the auditor should recommend changing both the audit program and the testing methodology. A deficient control design means the control cannot effectively prevent or detect errors, so the audit approach must be revised to focus on substantive testing rather than controls testing."
    },
    {
        id: 59,
        question: "Following a discussion on the results of a recent audit engagement, the process owner of the audited area has provided an action plan addressing the gaps and recommendations. The auditor disagrees with some of the responses where the process owner is accepting a level of residual risk that is not within the organization's risk appetite. What is the auditor's BEST course of action?",
        options: [
            "A. Include the issue in the next report to the audit committee.",
            "B. Escalate the situation to audit management.",
            "C. Inform executive management of the residual risk.",
            "D. Accept the action plan proposed by the process owner."
        ],
        answer: "B",
        explanation: "Escalating to audit management is the best course of action. When a process owner accepts residual risk beyond the organization's risk appetite, audit management must be informed to determine the appropriate escalation path, whether to the audit committee, executive management, or another governance body."
    },
    {
        id: 60,
        question: "An IS auditor is assessing the adequacy of management's remediation action plan. Which of the following should be the MOST important consideration?",
        options: [
            "A. Plan approval by the audit committee.",
            "B. Impacts on future audit work.",
            "C. Potential cost savings.",
            "D. Criticality of audit findings."
        ],
        answer: "D",
        explanation: "The criticality of audit findings is the most important consideration. Higher-risk findings require more robust and timely remediation. Assessing whether the action plan adequately addresses the most critical findings ensures that the most significant risks are mitigated first."
    },
    {
        id: 61,
        question: "Which of the following would be of GREATEST concern to an IS auditor reviewing access controls for an organization's data?",
        options: [
            "A. The organization does not utilize single sign-on (SSO) authentication.",
            "B. Multi-factor authentication has not been implemented for some information assets.",
            "C. Changes in data sensitivity levels do not change the level of access control.",
            "D. Access control requests do not require approvals from multiple authorities."
        ],
        answer: "C",
        explanation: "When changes in data sensitivity levels do not trigger corresponding changes in access controls, sensitive data may be under-protected. This fundamental disconnect between data classification and access control is the greatest concern as it can leave critical data exposed."
    },
    {
        id: 62,
        question: "An IS auditor learns of a new regulation which imposes penalties based on the number of individuals whose personally identifiable information (PII) is exposed by a security breach. What would be the BEST recommendation to help the organization limit the liability associated with a breach to its customer information database?",
        options: [
            "A. Database harmonization.",
            "B. Database normalization.",
            "C. Database segmentation.",
            "D. Database optimization."
        ],
        answer: "C",
        explanation: "Database segmentation limits breach liability by dividing customer data into separate segments. If a breach occurs in one segment, the exposure is limited to that subset of PII, reducing the number of affected individuals and therefore the regulatory penalties."
    },
    {
        id: 63,
        question: "Which of the following is the BEST way to identify whether the IT help desk is meeting service level agreements (SLAs)?",
        options: [
            "A. Analyze help desk ticket logs.",
            "B. Conduct IT management interviews.",
            "C. Review IT staffing schedules.",
            "D. Review exception reports."
        ],
        answer: "A",
        explanation: "Analyzing help desk ticket logs provides the best evidence of SLA compliance. Ticket logs contain objective data on response times, resolution times, and issue volumes, enabling direct comparison against SLA targets with factual evidence."
    },
    {
        id: 64,
        question: "Where should photoelectric smoke detectors be installed to improve fire detection at an offsite data processing facility?",
        options: [
            "A. Entry points.",
            "B. Air vents.",
            "C. Server cages.",
            "D. Exit points."
        ],
        answer: "B",
        explanation: "Photoelectric smoke detectors should be installed in air vents because smoke travels through ventilation systems before becoming visible in a room. Placing detectors at air vents enables early detection of fire in its initial stages, before it spreads to critical equipment."
    },
    {
        id: 65,
        question: "Which of the following is MOST important to effectively manage risk associated with application programming interfaces (APIs) and third-party virtual environments?",
        options: [
            "A. Compliance monitoring.",
            "B. Backups of virtual environments.",
            "C. Inventory of APIs.",
            "D. API single sign-on (SSO) capability."
        ],
        answer: "C",
        explanation: "An inventory of APIs is most important for managing associated risks. Without a complete inventory, the organization cannot assess which APIs exist, what data they access, or what vulnerabilities they may introduce, making risk management impossible."
    },
    {
        id: 66,
        question: "Which of the following should an IS auditor use when verifying a three-way match has occurred in an enterprise resource planning (ERP) system?",
        options: [
            "A. Goods delivery notification.",
            "B. Purchase order.",
            "C. Purchase requisition.",
            "D. Bank confirmation."
        ],
        answer: "B",
        explanation: "A purchase order is central to a three-way match, which compares the purchase order, goods receipt, and vendor invoice. The purchase order establishes the authorized terms; the three-way match verifies that what was ordered, received, and billed are all consistent."
    },
    {
        id: 67,
        question: "Which of the following is an example of inherent risk?",
        options: [
            "A. Quality assurance (QA) processes may not effectively reduce errors.",
            "B. An approval process may not detect significant errors.",
            "C. The organization may not comply with regulations.",
            "D. Projects may still be delayed despite management controls."
        ],
        answer: "C",
        explanation: "Inherent risk is the risk that exists before any controls are applied. The risk of regulatory noncompliance is an inherent risk because it exists regardless of controls — it reflects the natural exposure of operating in a regulated environment."
    },
    {
        id: 68,
        question: "Which of the following is the MOST important consideration when establishing vulnerability scanning on critical IT infrastructure?",
        options: [
            "A. The scanning will be cost-effective.",
            "B. The scanning will be performed during non-peak hours.",
            "C. The scanning will be followed by penetration testing.",
            "D. The scanning will not degrade system performance."
        ],
        answer: "D",
        explanation: "Ensuring scanning does not degrade system performance is the most important consideration for critical IT infrastructure. Vulnerability scans can be resource-intensive; if they disrupt critical systems, the cure becomes worse than the disease, impacting business operations."
    },
    {
        id: 69,
        question: "Which of the following is the MOST important advantage of participating in beta testing of software products?",
        options: [
            "A. It improves vendor support and training.",
            "B. It increases an organization's ability to retain staff who prefer to work with new technology.",
            "C. It enables an organization to gain familiarity with new products and their functionality.",
            "D. It enhances security and confidentiality."
        ],
        answer: "C",
        explanation: "Gaining familiarity with new products and their functionality is the most important advantage of beta testing. Early exposure allows the organization to assess fit, identify issues, prepare staff, and plan for integration before full deployment."
    },
    {
        id: 70,
        question: "Which of the following should an IS auditor be MOST concerned with when a system uses RFID?",
        options: [
            "A. Scalability.",
            "B. Nonrepudiation.",
            "C. Maintainability.",
            "D. Privacy."
        ],
        answer: "D",
        explanation: "Privacy is the greatest concern with RFID systems. RFID tags can be read without the knowledge of the tag holder, enabling tracking and surveillance. This creates significant privacy risks related to unauthorized collection and use of personal location or identity data."
    },
    {
        id: 71,
        question: "Which of the following will enable a customer to authenticate an online Internet vendor?",
        options: [
            "A. Vendor signs a reply using a hash function and the customer's public key.",
            "B. Vendor decrypts incoming orders using its own private key.",
            "C. Customer verifies the vendor's certificate with a certificate authority (CA).",
            "D. Customer encrypts an order using the vendor's public key."
        ],
        answer: "C",
        explanation: "Verifying the vendor's digital certificate with a Certificate Authority (CA) authenticates the vendor. The CA vouches for the vendor's identity, and the certificate proves the vendor is who they claim to be, enabling trust in online transactions."
    },
    {
        id: 72,
        question: "When reviewing an IT strategic plan, the GREATEST concern would be that:",
        options: [
            "A. the plan was not formally approved by the board of directors.",
            "B. there are no key performance indicators (KPIs).",
            "C. an IT strategy committee has not been created.",
            "D. the plan does not support relevant organizational goals."
        ],
        answer: "D",
        explanation: "An IT strategic plan that does not support organizational goals is the greatest concern. IT strategy must be aligned with business strategy to deliver value. Misalignment means IT investments and efforts may not contribute to the achievement of what matters most to the organization."
    },
    {
        id: 73,
        question: "An IS auditor is reviewing project development controls for a recently upgraded data warehouse system. Which of the following would provide the BEST evidence that the application will meet its intended functional requirements?",
        options: [
            "A. Integrated system testing results.",
            "B. A formal software development life cycle process.",
            "C. User acceptance testing (UAT) results.",
            "D. Business approval prior to implementation."
        ],
        answer: "C",
        explanation: "UAT results provide the best evidence that an application meets functional requirements because it is performed by end users who validate that the system works as intended in real business scenarios. It is the final validation before production deployment."
    },
    {
        id: 74,
        question: "An IS auditor found that operations personnel failed to run a script contributing to year-end financial statements. Which of the following is the BEST recommendation?",
        options: [
            "A. Implement a closing checklist.",
            "B. Update the operations manual.",
            "C. Bring staff with financial experience into operations.",
            "D. Retrain operations personnel."
        ],
        answer: "A",
        explanation: "Implementing a closing checklist is the best recommendation. A checklist ensures all required steps — including running critical scripts — are completed systematically and in order, reducing the risk of omissions during complex period-end processes."
    },
    {
        id: 75,
        question: "Which of the following is the MOST significant risk when an application uses individual end-user accounts to access the underlying database?",
        options: [
            "A. Users may be able to circumvent application controls.",
            "B. Application may not capture a complete audit trail.",
            "C. User accounts may remain active after a termination.",
            "D. Multiple connects to the database are used and slow the process."
        ],
        answer: "A",
        explanation: "When users access the database directly using their own accounts, they may bypass application-layer controls such as validation rules, authorization checks, and workflow restrictions. This represents a significant risk of unauthorized or improper data manipulation."
    },
    {
        id: 76,
        question: "In a high-volume, real-time system, the MOST effective technique by which to continuously monitor and analyze transaction processing is:",
        options: [
            "A. transaction tagging.",
            "B. embedded audit modules.",
            "C. integrated test facility (ITF).",
            "D. parallel simulation."
        ],
        answer: "B",
        explanation: "Embedded audit modules are the most effective technique for continuous monitoring of high-volume real-time systems. They are built directly into the application and capture and analyze transactions as they occur, enabling ongoing automated audit without disrupting processing."
    },
    {
        id: 77,
        question: "An organization performs virtual machine (VM) replication instead of daily backups of its critical servers. Which of the following is MOST important to validate when evaluating the adequacy of recovery procedures?",
        options: [
            "A. Periodic testing of VM replication is completed.",
            "B. Replication servers are located offsite.",
            "C. VM load balancing is configured.",
            "D. Internet access is restricted for VM backup administrators."
        ],
        answer: "A",
        explanation: "Periodic testing of VM replication is most important to validate. Without testing, the organization cannot confirm that replication is working correctly and that systems can actually be recovered. A replication strategy that has never been tested may fail when needed most."
    },
    {
        id: 78,
        question: "An IS auditor is performing a project review and finds that scope reductions have been made without proper authorization. The IS auditor should be MOST concerned that:",
        options: [
            "A. there could be significant delays in project completion.",
            "B. the project has not followed project management standards.",
            "C. project costs could increase above the original project budget.",
            "D. anticipated business functionality may not be delivered."
        ],
        answer: "D",
        explanation: "Unauthorized scope reductions present the greatest risk that anticipated business functionality will not be delivered. Scope was likely defined to meet specific business requirements; unauthorized reductions mean those requirements may go unmet, undermining the purpose of the project."
    },
    {
        id: 79,
        question: "Which of the following would be the MOST significant finding when reviewing a data backup process?",
        options: [
            "A. The key to the data safe is kept by the backup administrator.",
            "B. Tapes are not consistently rotated offsite.",
            "C. Recovery testing is not performed.",
            "D. The data backup process is not documented."
        ],
        answer: "C",
        explanation: "The absence of recovery testing is the most significant finding. Without testing, the organization has no assurance that data can actually be restored when needed. A backup process that has never been validated may fail during an actual disaster or recovery event."
    },
    {
        id: 80,
        question: "Which of the following is the BEST method to validate that a cloud service provider has implemented information security controls?",
        options: [
            "A. Obtain a third-party audit report of controls from the service provider.",
            "B. Perform a review of security configuration settings for network devices.",
            "C. Conduct an interview with the service provider's information security officer.",
            "D. Perform a review of documented control policies and procedures."
        ],
        answer: "A",
        explanation: "A third-party audit report (such as SOC 2 Type II) provides the best validation of a cloud provider's security controls. It represents an independent, professional assessment of whether controls are effectively designed and operating, offering objective assurance that cannot be obtained through interviews or document reviews alone."
    },
    {
        id: 81,
        question: "An IS auditor is assigned to perform a post-implementation review of an application system. Which of the following would impair the auditor's independence?",
        options: [
            "A. The auditor provided advice concerning best practices.",
            "B. The auditor designed an embedded audit module exclusively for audit.",
            "C. The auditor implemented a specific control during the development of the system.",
            "D. The auditor participated as a member of the project team without operational responsibilities."
        ],
        answer: "C",
        explanation: "Implementing a specific control during system development impairs independence because the auditor would be reviewing their own work in the post-implementation review. This creates a self-review threat that compromises the auditor's objectivity and the credibility of the audit."
    },
    {
        id: 82,
        question: "Which of the following is the BEST indication that an organization follows best practices for system access authorization?",
        options: [
            "A. Controls align to the degree of sensitivity of the information being accessed.",
            "B. System access control logs are reviewed on a regular basis.",
            "C. Users are required to acknowledge the organization's acceptable use policy.",
            "D. Complexity requirements for system passwords are strictly enforced."
        ],
        answer: "A",
        explanation: "Controls aligned to the sensitivity of information accessed is the best indication of best-practice access authorization. This demonstrates a risk-based approach where the level of access control is proportional to the value and sensitivity of the data being protected."
    },
    {
        id: 83,
        question: "How does a continuous integration/continuous development (CI/CD) process help to reduce software failure risk?",
        options: [
            "A. Fewer manual milestones.",
            "B. Easy software version rollback.",
            "C. Automated software testing.",
            "D. Smaller incremental changes."
        ],
        answer: "D",
        explanation: "Smaller incremental changes reduce software failure risk in CI/CD by limiting the scope of each deployment. Smaller changes are easier to test, review, and troubleshoot, reducing the complexity and potential impact of any individual deployment failure."
    },
    {
        id: 84,
        question: "In reviewing the IT strategic plan, the IS auditor should consider whether it identifies the:",
        options: [
            "A. project management methodologies used.",
            "B. allocation of IT staff.",
            "C. major IT initiatives.",
            "D. links to operational tactical plans."
        ],
        answer: "D",
        explanation: "The IT strategic plan should identify links to operational tactical plans. Strategic plans must translate into actionable operational plans; without explicit links, there is no assurance that strategic intent will be implemented through day-to-day IT activities."
    },
    {
        id: 85,
        question: "Which of the following would the IS auditor MOST likely review to determine whether modifications to the operating system parameters were authorized?",
        options: [
            "A. Change control log.",
            "B. Documentation of exit routines.",
            "C. Security system parameters.",
            "D. System initialization logs."
        ],
        answer: "A",
        explanation: "The change control log would most likely be reviewed to determine authorization for OS parameter modifications. It records approved changes and the authorization chain, providing evidence of whether modifications were properly reviewed and sanctioned before implementation."
    },
    {
        id: 86,
        question: "An organization is disposing of removable onsite media which contains sensitive information. Which of the following is the MOST effective method to prevent disclosure of sensitive data?",
        options: [
            "A. Wiping and rewriting three times.",
            "B. Software formatting.",
            "C. Encrypting and destroying keys.",
            "D. Machine shredding."
        ],
        answer: "D",
        explanation: "Machine shredding is the most effective method for preventing sensitive data disclosure during media disposal. Physical destruction renders the media completely unusable and unrecoverable, unlike software methods which may leave residual data that can be recovered with forensic tools."
    },
    {
        id: 87,
        question: "Which of the following is the MAIN responsibility of the IT steering committee?",
        options: [
            "A. Developing and implementing the secure system development framework.",
            "B. Implementing processes to integrate security with business objectives.",
            "C. Developing and assessing the IT security strategy.",
            "D. Reviewing and assisting with IT strategy integration efforts."
        ],
        answer: "D",
        explanation: "The main responsibility of the IT steering committee is reviewing and assisting with IT strategy integration. The committee provides oversight to ensure IT initiatives are aligned with and integrated into overall business strategy, acting as the bridge between IT and the board."
    },
    {
        id: 88,
        question: "During the review of a data conversion process for a retail application, an IS auditor noticed changes were made to a price listing. Whose approval is MOST appropriate for these changes?",
        options: [
            "A. Marketing manager.",
            "B. Warehouse manager.",
            "C. System analyst.",
            "D. Business owner."
        ],
        answer: "D",
        explanation: "The business owner's approval is most appropriate for changes to price listings. As the accountable party for the business data and outcomes, the business owner has the authority and responsibility to authorize changes that directly impact business operations and revenue."
    },
    {
        id: 89,
        question: "Which of the following is MOST important for the effective implementation of an intrusion detection system (IDS)?",
        options: [
            "A. Providing logs for monitoring and reporting.",
            "B. Configuring the security policy in line with best practice.",
            "C. Setting alarms for late night traffic.",
            "D. Auto-installing updates."
        ],
        answer: "B",
        explanation: "Configuring the security policy in line with best practices is most important for IDS effectiveness. The IDS must be properly configured to detect relevant threats; misconfigured policies lead to excessive false positives or missed detections, making the system ineffective."
    },
    {
        id: 90,
        question: "Which of the following is the PRIMARY reason an IS auditor should recommend that management create an IT risk register?",
        options: [
            "A. To facilitate internal audit's testing of IT-risk-related controls.",
            "B. To document root causes of IT-related risk events and lessons learned.",
            "C. To ensure an inventory of potential IT risks is maintained and reported.",
            "D. To ensure there is appropriate funding for IT risk mitigation efforts."
        ],
        answer: "C",
        explanation: "The primary reason for an IT risk register is to maintain and report an inventory of potential IT risks. Without a comprehensive inventory, risks may go unidentified and unmanaged, making the register the foundational tool for any structured risk management program."
    },
    {
        id: 91,
        question: "Which of the following is MOST important to include in a feasibility study when developing a business case for an IT investment?",
        options: [
            "A. Key stakeholders responsible for review and approval of proposed solutions.",
            "B. Evidence that all possible risk scenarios have been considered.",
            "C. Availability of IT resources proposed for the project.",
            "D. An analysis of costs and benefits associated with proposed solutions."
        ],
        answer: "D",
        explanation: "A cost-benefit analysis is most important in a feasibility study. It determines whether the proposed investment is financially viable and delivers sufficient value to justify the expenditure, which is the fundamental question a feasibility study must answer."
    },
    {
        id: 92,
        question: "During an audit, the IS auditor finds that in many cases excessive rights were not removed from a system. Which of the following is the auditor's BEST recommendation?",
        options: [
            "A. IT security should regularly revoke excessive system rights.",
            "B. System administrators should ensure consistency of assigned rights.",
            "C. Human resources (HR) should delete access rights of terminated employees.",
            "D. Line management should regularly review and request modification of access rights."
        ],
        answer: "D",
        explanation: "Line management should regularly review and request modification of access rights. Managers are best positioned to know what access their staff actually need; periodic access reviews by management ensure rights remain appropriate and excessive privileges are removed promptly."
    },
    {
        id: 93,
        question: "Which incident response team activity contributes the MOST to preventing future incidents?",
        options: [
            "A. Establishing escalation procedures.",
            "B. Participating in lessons learned exercises.",
            "C. Involving management in the response process.",
            "D. Isolating affected hosts."
        ],
        answer: "B",
        explanation: "Participating in lessons learned exercises contributes most to preventing future incidents. By systematically analyzing what happened, why it happened, and what can be improved, the organization can implement changes that reduce the likelihood and impact of similar incidents."
    },
    {
        id: 94,
        question: "Which type of review is MOST important to conduct when an IS auditor is informed that a recent internal exploitation of a bug has been discovered in a business application?",
        options: [
            "A. Application security testing.",
            "B. Forensic audit.",
            "C. Server security audit.",
            "D. Penetration testing."
        ],
        answer: "B",
        explanation: "A forensic audit is most important following the internal exploitation of an application bug. It investigates what happened, who was involved, what data was affected, and how the exploit was carried out, providing evidence needed for potential legal action and remediation."
    },
    {
        id: 95,
        question: "The BEST way to provide assurance that a project is adhering to the project plan is to:",
        options: [
            "A. conduct compliance audits at major system milestones.",
            "B. require design reviews at appropriate points in the life cycle.",
            "C. have an IS auditor participate on the quality assurance (QA) team.",
            "D. have an IS auditor participate on the steering committee."
        ],
        answer: "A",
        explanation: "Conducting compliance audits at major system milestones provides the best assurance of adherence to the project plan. Milestone audits verify that required deliverables have been completed as planned before proceeding to the next phase, ensuring systematic compliance throughout the project."
    },
    {
        id: 96,
        question: "Which of the following would provide the BEST evidence that a cloud provider's change management process is effective?",
        options: [
            "A. The results of a third-party review provided by the vendor.",
            "B. Minutes from regular change management meetings with the vendor.",
            "C. A copy of change management policies provided by the vendor.",
            "D. Written assurances from the vendor's CEO and CIO."
        ],
        answer: "A",
        explanation: "A third-party review report (such as SOC 2 Type II) provides the best evidence of change management effectiveness. It represents an independent, objective assessment of whether the vendor's controls are actually operating as intended, rather than self-reported information."
    },
    {
        id: 97,
        question: "An organization requires any travel and entertainment expenses over $10,000 to be approved by senior management. Which of the following is the MOST effective way to mitigate the risk that employees will split invoices to avoid the approval process?",
        options: [
            "A. Develop computer-assisted audit techniques (CAATs) to check the full year's transactions.",
            "B. Adopt a zero-tolerance policy that requires termination of employees who submitted fraudulent claims.",
            "C. Establish a whistle-blowing policy that allows employees to report suspicious activity anonymously.",
            "D. Review alerts generated from continuous auditing scripts for suspicious claims submitted."
        ],
        answer: "D",
        explanation: "Reviewing alerts from continuous auditing scripts is the most effective mitigation. Automated scripts can detect patterns of invoice splitting in real time (e.g., multiple claims from the same person for similar amounts below the threshold on the same date), enabling timely detection and response."
    },
    {
        id: 98,
        question: "Which of the following provides the BEST quality control for data being loaded into an organization's data warehouse?",
        options: [
            "A. Source.",
            "B. Landing.",
            "C. Warehouse.",
            "D. Staging."
        ],
        answer: "D",
        explanation: "The staging area provides the best quality control for data loaded into a data warehouse. Data is validated, cleansed, and transformed in the staging layer before being moved to the warehouse, preventing corrupt or inaccurate data from entering the production environment."
    },
    {
        id: 99,
        question: "An organization's networking team wants to route data between two virtual local area networks (VLANs). Which type of device is the BEST recommendation for installation of the VLANs?",
        options: [
            "A. Firewall.",
            "B. Hub.",
            "C. Switch.",
            "D. Bridge."
        ],
        answer: "C",
        explanation: "A managed switch is the best device for routing between VLANs. Layer 3 switches support inter-VLAN routing natively and efficiently, providing the logical separation and traffic routing needed for VLAN segmentation within a network."
    },
    {
        id: 100,
        question: "Which of the following is the GREATEST risk associated with hypervisors in virtual environments?",
        options: [
            "A. Lack of patches.",
            "B. Single point of failure.",
            "C. Virtual sprawl.",
            "D. Availability issues."
        ],
        answer: "B",
        explanation: "A single point of failure is the greatest risk with hypervisors. Because multiple virtual machines run on a single hypervisor, if the hypervisor fails, all hosted VMs go down simultaneously, creating a potentially catastrophic availability impact across many systems at once."
    },
    {
        id: 101,
        question: "Which of the following is the BEST sampling method to use when relatively few errors are expected to be found in a population?",
        options: [
            "A. Variable sampling.",
            "B. Stop-or-go sampling.",
            "C. Discovery sampling.",
            "D. Judgmental sampling."
        ],
        answer: "B",
        explanation: "Stop-or-go sampling is best when few errors are expected. It allows the auditor to stop testing as soon as sufficient evidence has been gathered that the error rate is below an acceptable threshold, improving efficiency when defects are rare."
    },
    {
        id: 102,
        question: "Following a security incident, which of the following BEST enables the integrity of the data captured during a forensic investigation?",
        options: [
            "A. An expert presenting the results of forensic analysis.",
            "B. Comparison of the hash of data files in storage.",
            "C. Comparison of the data with printouts from the investigation.",
            "D. Maintenance of chain of custody."
        ],
        answer: "D",
        explanation: "Maintaining chain of custody best enables forensic data integrity. Chain of custody documents who had access to evidence, when, and for what purpose, ensuring that evidence has not been tampered with and is admissible in legal proceedings."
    },
    {
        id: 103,
        question: "During an audit, an IT finding is agreed upon by all IT teams involved, but no team wants to be responsible for remediation or considers the finding within its area of responsibility. Which of the following is the IS auditor's BEST course of action?",
        options: [
            "A. Determine the most appropriate team and assign accordingly.",
            "B. Issue the finding without identifying an owner.",
            "C. Escalate to IT management for resolution.",
            "D. Assign shared responsibility to all IT teams."
        ],
        answer: "C",
        explanation: "Escalating to IT management is the best course of action when no team accepts ownership of a finding. Management has the authority to assign accountability and enforce remediation responsibilities across teams, resolving organizational disputes the auditor cannot resolve directly."
    },
    {
        id: 104,
        question: "An IS auditor is reviewing an organization's business intelligence infrastructure. The BEST recommendation to help the organization achieve a reasonable level of data quality would be to:",
        options: [
            "A. analyze the data against predefined specifications.",
            "B. consolidate data stored across separate databases into a warehouse.",
            "C. outsource data cleansing to skilled service providers.",
            "D. review data against data classification standards."
        ],
        answer: "A",
        explanation: "Analyzing data against predefined specifications is the best way to achieve data quality. This approach validates that data meets defined accuracy, completeness, consistency, and format standards, directly measuring and improving the quality of data in the business intelligence system."
    },
    {
        id: 105,
        question: "Which of the following should an IS auditor expect to see as a role of an IT strategy committee during the review of an organization's IT governance framework?",
        options: [
            "A. Advising senior management on IT-related risk.",
            "B. Performing quality assurance (QA) for IT business functions.",
            "C. Executing IT-enabled programs.",
            "D. Evaluating return on IT investment."
        ],
        answer: "A",
        explanation: "Advising senior management on IT-related risk is a core role of the IT strategy committee. The committee provides strategic guidance and risk intelligence to leadership, helping management make informed decisions about IT governance, investments, and risk tolerance."
    },
    {
        id: 106,
        question: "During an organization's implementation of a data loss prevention (DLP) solution, which of the following activities should be completed FIRST?",
        options: [
            "A. Configuring rule sets.",
            "B. Enabling detection points.",
            "C. Establishing exceptions workflow.",
            "D. Configuring reports."
        ],
        answer: "A",
        explanation: "Configuring rule sets should be completed first when implementing a DLP solution. Rules define what constitutes sensitive data and what actions to take; without properly configured rules, the DLP system has no basis for detecting or preventing data loss."
    },
    {
        id: 107,
        question: "Which of the following is the BEST course of action when an IS auditor learns that evidence being gathered as part of an audit may be used in future litigation?",
        options: [
            "A. Review the situation with the client.",
            "B. Review chain of custody rules.",
            "C. Consult with legal counsel.",
            "D. Inform the auditee of their legal rights."
        ],
        answer: "C",
        explanation: "Consulting with legal counsel is the best course of action when audit evidence may be used in litigation. Legal counsel can advise on evidence handling requirements, privilege considerations, and proper procedures to ensure evidence remains admissible and the auditor is not exposed to liability."
    },
    {
        id: 108,
        question: "Which of the following is the GREATEST risk associated with granting local administrative privileges to users for their laptops?",
        options: [
            "A. Users may obtain unrestricted access on all other laptops.",
            "B. Users may not have received training in using administrative privileges.",
            "C. Users may download large files, slowing down networks and the local system.",
            "D. Security features may be disabled by the user on the local system."
        ],
        answer: "D",
        explanation: "The greatest risk of local admin privileges is that users may disable security features such as antivirus, firewall, or endpoint detection tools. This creates significant vulnerabilities that could be exploited by malware or attackers, undermining the organization's security posture."
    },
    {
        id: 109,
        question: "When physical destruction is not practical, which of the following is the MOST effective means of disposing of sensitive data on a hard disk?",
        options: [
            "A. Encrypting the disk.",
            "B. Deleting files sequentially.",
            "C. Overwriting multiple times.",
            "D. Reformatting."
        ],
        answer: "C",
        explanation: "Overwriting multiple times is the most effective non-destructive method for disposing of sensitive data. Multiple overwrites with random data patterns make data recovery extremely difficult or impossible with standard forensic tools, unlike simple deletion or formatting."
    },
    {
        id: 110,
        question: "Which of the following should be done FIRST when a major security incident has been confirmed?",
        options: [
            "A. Contain the incident to limit the impact.",
            "B. Notify business management of the incident.",
            "C. Document the root cause analysis of the incident.",
            "D. Perform an assessment to determine the risk tolerance."
        ],
        answer: "A",
        explanation: "Containment is the first action after confirming a major security incident. Stopping the spread of the incident limits damage, prevents further compromise of systems or data, and preserves evidence for subsequent investigation."
    },
    {
        id: 111,
        question: "An IS auditor noted a recent production incident in which a teller transaction system incorrectly charged fees to customers due to a defect from a recent release. Which of the following should be the auditor's NEXT step?",
        options: [
            "A. Evaluate developer training.",
            "B. Evaluate secure code practices.",
            "C. Evaluate the incident management process.",
            "D. Evaluate the change management process."
        ],
        answer: "D",
        explanation: "Evaluating the change management process is the most appropriate next step. A production defect from a recent release indicates the change management process — including testing, review, and approval before deployment — may have failed to catch the defect."
    },
    {
        id: 112,
        question: "During a pre-deployment assessment, what is the BEST indication that a business case will lead to the achievement of business objectives?",
        options: [
            "A. The business case reflects stakeholder requirements.",
            "B. The business case passed a quality review by an independent party.",
            "C. The business case is based on a proven methodology.",
            "D. The business case identifies specific plans for cost allocation."
        ],
        answer: "A",
        explanation: "A business case that reflects stakeholder requirements provides the best indication of achieving business objectives. When the business case is grounded in actual stakeholder needs and expectations, the resulting solution is more likely to be adopted and deliver the intended value."
    },
    {
        id: 113,
        question: "Which of the following changes intended to improve and streamline an organization's incident management process would be a potential concern to an IS auditor?",
        options: [
            "A. Implementing automatic reporting for all open incidents over three months old.",
            "B. Enabling the capability for the individual reporting the incident to assign priority to a ticket.",
            "C. Configuring automated messaging to service lines notifying them of the status of the ticket.",
            "D. Introducing self-service functions for selected low-complexity incident types."
        ],
        answer: "B",
        explanation: "Allowing the individual reporting an incident to assign priority is a concern because it introduces subjectivity and potential manipulation. Reporters may inflate priority to get faster service, or underestimate severity, leading to misallocation of resources and improper prioritization of incidents."
    },
    {
        id: 114,
        question: "Which type of risk would MOST influence the selection of a sampling methodology?",
        options: [
            "A. Inherent.",
            "B. Residual.",
            "C. Control.",
            "D. Detection."
        ],
        answer: "D",
        explanation: "Detection risk most influences the selection of a sampling methodology. Detection risk is the risk that audit procedures will not detect a material misstatement; the choice of sampling method directly determines how effectively the auditor can control detection risk."
    },
    {
        id: 115,
        question: "Which of the following should be responsible for verifying changes to an application are authorized?",
        options: [
            "A. Project oversight board.",
            "B. Business line management.",
            "C. Release management team.",
            "D. Steering committee."
        ],
        answer: "C",
        explanation: "The release management team is responsible for verifying that changes to an application are authorized before deployment. They ensure changes have been properly reviewed, tested, and approved through the change management process prior to release to production."
    },
    {
        id: 116,
        question: "Which of the following findings should be of GREATEST concern to an IS auditor reviewing a system interface between two internal systems used for financial reporting?",
        options: [
            "A. The successful completion of the data transfer is not documented.",
            "B. There is a lack of controls to ensure the integrity of transferred data.",
            "C. The data transfer has not been encrypted in transit.",
            "D. The data transfer is performed manually instead of using a scheduler."
        ],
        answer: "B",
        explanation: "The lack of integrity controls is the greatest concern for a financial reporting interface. Without integrity controls, data could be altered, corrupted, or incomplete during transfer, leading to inaccurate financial reports and potentially material misstatements."
    },
    {
        id: 117,
        question: "Which of the following is the PRIMARY reason an IS auditor should discuss observations with management before delivering a final report?",
        options: [
            "A. Identify business risks associated with the observations.",
            "B. Validate the audit observations.",
            "C. Assist the management with control enhancements.",
            "D. Record the proposed course of corrective action."
        ],
        answer: "B",
        explanation: "Validating audit observations with management before finalizing the report is the primary reason for pre-report discussions. This ensures facts are accurate, provides management an opportunity to clarify misunderstandings, and strengthens the quality and fairness of the final audit report."
    },
    {
        id: 118,
        question: "An IS auditor is testing the accuracy of transactions in a system to ensure financial statements are reasonably accurate. Which of the following is the BEST testing methodology to use in this situation?",
        options: [
            "A. Stratified sampling.",
            "B. Attribute testing.",
            "C. Substantive testing.",
            "D. Statistical sampling."
        ],
        answer: "C",
        explanation: "Substantive testing is the best methodology for verifying the accuracy of transactions affecting financial statements. It directly tests the amounts and disclosures in financial records to detect material misstatements, which is the goal when assessing financial statement accuracy."
    },
    {
        id: 119,
        question: "A business has requested an audit to determine whether information stored in an application is adequately protected. Which of the following is the MOST important action before the audit work begins?",
        options: [
            "A. Assess the threat landscape.",
            "B. Perform penetration testing.",
            "C. Review remediation reports.",
            "D. Establish control objectives."
        ],
        answer: "D",
        explanation: "Establishing control objectives is the most important action before audit work begins. Control objectives define what the audit is trying to accomplish and what adequate protection means in context, providing the framework against which the auditor will evaluate the application's security controls."
    },
    {
        id: 120,
        question: "Compared to developing a system in-house, acquiring a software package means that the need for testing by end users is:",
        options: [
            "A. increased.",
            "B. reduced.",
            "C. eliminated.",
            "D. unchanged."
        ],
        answer: "D",
        explanation: "The need for end-user testing is unchanged when acquiring a software package versus in-house development. End users must still validate that the acquired software meets their specific business requirements, even though the vendor has already performed its own testing."
    },
    {
        id: 121,
        question: "Which of the following management actions would BEST enable an IS auditor to make the most efficient use of analytics software during an audit?",
        options: [
            "A. Reviewing audit findings to determine accuracy and relevance.",
            "B. Deploying analytics tools that use natural language processing.",
            "C. Providing access to data that is complete and accurate.",
            "D. Granting the auditor access to anonymized customer data."
        ],
        answer: "C",
        explanation: "Providing access to complete and accurate data best enables efficient use of analytics software. Analytics tools are only as effective as the data they analyze; incomplete, inaccurate, or inaccessible data severely limits the auditor's ability to perform meaningful analysis."
    },
    {
        id: 122,
        question: "An IS auditor is reviewing an organization's overall incident response capability following recovery from a cybersecurity incident. Which of the following findings should be of MOST concern to the auditor?",
        options: [
            "A. Risk analysis errors were identified as part of the post-incident review.",
            "B. Logs were only collected as part of the post-incident review.",
            "C. The incident was caused by a known vulnerability with a documented risk acceptance.",
            "D. Lessons learned were not documented after the incident."
        ],
        answer: "B",
        explanation: "Logs only being collected post-incident is the most concerning finding. Without continuous log collection, the organization lacks the visibility needed to detect incidents in real time, investigate them effectively, and determine the full scope of what occurred."
    },
    {
        id: 123,
        question: "Which of the following is the BEST way to ensure email confidentiality in transit?",
        options: [
            "A. Complex user passwords.",
            "B. Digital signatures.",
            "C. End-to-end encryption.",
            "D. Encryption of corporate network traffic."
        ],
        answer: "C",
        explanation: "End-to-end encryption is the best way to ensure email confidentiality in transit. It ensures that messages are encrypted from sender to recipient, preventing interception or reading by unauthorized parties — including email servers — at any point in the transmission path."
    },
    {
        id: 124,
        question: "During the walk-through procedures for an upcoming audit, an IS auditor notes that the key application in scope is part of a Software as a Service (SaaS) agreement. What should the auditor do NEXT?",
        options: [
            "A. Verify whether a third-party security attestation exists.",
            "B. Verify whether IT management monitors the effectiveness of the environment.",
            "C. Verify whether a right-to-audit clause exists.",
            "D. Verify whether service level agreements (SLAs) are defined and monitored."
        ],
        answer: "A",
        explanation: "Verifying whether a third-party security attestation exists (such as SOC 2 Type II) should be done next. This report provides independent assurance over the SaaS provider's controls and will significantly influence the audit approach and scope for the in-scope application."
    },
    {
        id: 125,
        question: "Halfway through an enterprise-wide project to implement business solutions, an IS auditor is called in to do a project risk evaluation. The results from this audit are to be communicated directly to the project steering committee. What should the auditor do FIRST?",
        options: [
            "A. Assess the project organization and actual cost incurred.",
            "B. Interview the project manager about the project scope and current status.",
            "C. Review the organization's project management framework.",
            "D. Perform a risk assessment of the project based on best practices."
        ],
        answer: "B",
        explanation: "Interviewing the project manager about scope and current status should be done first. Before any evaluation or testing, the auditor must understand the project's current state, objectives, and progress to properly scope the risk evaluation and identify the most relevant areas to assess."
    },
    {
        id: 126,
        question: "Which of the following BEST describes a digital signature?",
        options: [
            "A. It dynamically validates modifications of data.",
            "B. It is under control of the receiver.",
            "C. It is capable of authorization.",
            "D. It is unique to the sender using it."
        ],
        answer: "D",
        explanation: "A digital signature is unique to the sender because it is created using the sender's private key, which only they possess. This uniqueness provides authentication, nonrepudiation, and integrity verification, as only the true sender could have generated that specific signature."
    },
    {
        id: 127,
        question: "A small IT department has embraced DevOps, which allows members of this group to deploy code to production and maintain some development access to automate releases. Which of the following is the MOST effective control?",
        options: [
            "A. Enforce approval prior to deployment by a member of the team who has not taken part in the development.",
            "B. Annual training reinforces the need to maintain segregation between developers and deployers of code.",
            "C. The DevOps team provides an annual policy acknowledgment that they did not develop and deploy the same code.",
            "D. The IT compliance manager performs weekly reviews to ensure the same person did not develop and deploy code."
        ],
        answer: "A",
        explanation: "Requiring approval from a team member uninvolved in development before deployment is the most effective control. This peer review provides a real-time segregation of duties compensating control, preventing a single person from both writing and releasing code to production."
    },
    {
        id: 128,
        question: "During an administrative access audit, an IS auditor identified two accounts with administrative privileges that belong to employees from the accounting department. During discussion of the finding, the department manager insisted that accounting employees need administrative access to perform urgent data changes. Which of the following is the auditor's BEST course of action?",
        options: [
            "A. Notify IT management and ask to remove administrative access privileges from the accounting employees' accounts.",
            "B. Recommend implementing multi-factor authentication on administrative access accounts.",
            "C. Exclude the finding from the final report based on the information provided by the accounting department manager.",
            "D. Document the finding and explain the risk associated with employees having excessive access privileges."
        ],
        answer: "D",
        explanation: "Documenting the finding and explaining the associated risk is the best course of action. The auditor's role is to report findings objectively and ensure management understands the risk. The decision to accept or remediate the risk belongs to management, not the auditor."
    },
    {
        id: 129,
        question: "The PRIMARY objective when reviewing processes for monitoring risk is to ensure key risk indicators (KRIs) enable:",
        options: [
            "A. monitoring of IT resource utilization.",
            "B. the identification of unacceptable risk levels.",
            "C. the discovery of new IT risks.",
            "D. alignment with industry best practices."
        ],
        answer: "B",
        explanation: "The primary objective of KRIs is to enable the identification of unacceptable risk levels. KRIs are designed to provide early warning signals when risk exposure is approaching or exceeding defined thresholds, enabling management to take corrective action before issues escalate."
    },
    {
        id: 130,
        question: "An organization that processes credit card information employs a remote workforce. Which of the following is the MOST effective way to mitigate risk associated with data exfiltration?",
        options: [
            "A. Enable a web application firewall (WAF) along with an intrusion detection system (IDS).",
            "B. Implement a security information and event management (SIEM) solution.",
            "C. Deploy a data loss prevention (DLP) system.",
            "D. Require employees to sign acknowledgment of the data security policy."
        ],
        answer: "C",
        explanation: "A data loss prevention (DLP) system is the most effective control against data exfiltration for a remote workforce handling credit card data. DLP actively monitors, detects, and blocks unauthorized transmission of sensitive data across endpoints and network channels."
    },
    {
        id: 131,
        question: "An organization relies on an external vendor that uses a cloud-based Software as a Service (SaaS) model to backup its data. Which of the following is the GREATEST risk to the organization related to data backup and retrieval?",
        options: [
            "A. The organization may be locked into an unfavorable contract with the vendor.",
            "B. The organization may not be allowed to inspect the vendor's data center.",
            "C. The vendor may be unable to restore critical data.",
            "D. The vendor may be unable to restore data by recovery time objective (RTO) requirements."
        ],
        answer: "D",
        explanation: "The greatest risk is the vendor's inability to restore data within RTO requirements. If the vendor cannot meet the RTO, the organization's critical systems remain unavailable longer than acceptable, leading to significant operational, financial, and reputational damage."
    },
    {
        id: 132,
        question: "A security administrator is called in the middle of the night by the on-call programmer. A number of programs have failed, and the programmer has asked for access to the live system. What is the BEST course of action?",
        options: [
            "A. Review activity logs the following day and investigate any suspicious activity.",
            "B. Give the programmer read-only access to investigate the problem.",
            "C. Require that a change request be completed and approved.",
            "D. Give the programmer an emergency ID for temporary access and review the activity."
        ],
        answer: "D",
        explanation: "Issuing an emergency ID for temporary access with subsequent activity review balances operational need with security control. Emergency access procedures allow business continuity while ensuring accountability through monitoring, which is the standard approach to firefighter or emergency access."
    },
    {
        id: 133,
        question: "Which of the following should an IS auditor recommend be performed FIRST when evaluating potential enterprise resource planning (ERP) implementation vendors?",
        options: [
            "A. Review the vendors' past implementations.",
            "B. Investigate the vendors' financial history.",
            "C. Check the vendors' client references.",
            "D. Develop the vendor response scorecard."
        ],
        answer: "D",
        explanation: "Developing the vendor response scorecard should be done first. The scorecard establishes the evaluation criteria and weighting before any vendor assessment begins, ensuring the evaluation process is objective, consistent, and aligned with the organization's requirements."
    },
    {
        id: 134,
        question: "Which of the following is the BEST way to ensure an organization's data classification policies are preserved during the process of data transformation?",
        options: [
            "A. Conduct a data discovery exercise across all business applications.",
            "B. Control access to extract, transform, and load (ETL) tools.",
            "C. Implement classification labels in metadata during data creation.",
            "D. Map data classification controls to data sets."
        ],
        answer: "C",
        explanation: "Implementing classification labels in metadata during data creation is the best way to preserve classification through transformation. Embedded metadata labels travel with the data through transformation processes, ensuring classification and associated handling requirements are maintained regardless of format changes."
    },
    {
        id: 135,
        question: "When evaluating an information security risk assessment, what is MOST important to review to gain an understanding of how risk is reduced?",
        options: [
            "A. Inherent risk.",
            "B. Residual risk.",
            "C. Mitigation efforts.",
            "D. Control effectiveness."
        ],
        answer: "D",
        explanation: "Control effectiveness is most important to review to understand how risk is reduced. Effective controls reduce inherent risk to an acceptable residual level; understanding how well controls work explains the mechanism by which risk is actually managed and reduced."
    },
    {
        id: 136,
        question: "Which of the following would be the GREATEST concern to an IS auditor when reviewing the outsourcing contract for an organization's cloud service provider?",
        options: [
            "A. There is no dispute resolution process defined in the contract.",
            "B. There is no change management process defined in the contract.",
            "C. There is no right-to-audit clause defined in the contract.",
            "D. There are no procedures for incident escalation."
        ],
        answer: "C",
        explanation: "The absence of a right-to-audit clause is the greatest concern. Without this clause, the organization has no contractual right to independently verify the cloud provider's controls, making it impossible to obtain assurance that the provider is meeting its security and compliance obligations."
    },
    {
        id: 137,
        question: "Which of the following is the GREATEST risk when using application programming interfaces (APIs) in a third-party hosted virtual environment?",
        options: [
            "A. Data exfiltration.",
            "B. Lack of accountability.",
            "C. Inability to test third-party APIs.",
            "D. Lack of redundancy."
        ],
        answer: "A",
        explanation: "Data exfiltration is the greatest risk when using APIs in third-party virtual environments. APIs provide programmatic access to data and systems; if improperly secured or compromised, they can be exploited to extract sensitive data from the virtual environment without detection."
    },
    {
        id: 138,
        question: "An IS auditor reviewing a financial organization's identity management solution finds that application owners are not identified for some critical business applications. Which of the following is the GREATEST risk in this situation?",
        options: [
            "A. Users may have inappropriate levels of access.",
            "B. The applications may not be backed up.",
            "C. Security patches may not be applied.",
            "D. The organization may be using unlicensed software."
        ],
        answer: "A",
        explanation: "The greatest risk is that users may have inappropriate access levels. Without identified application owners, there is no one accountable for reviewing and approving access requests, meaning excessive or unauthorized access may go undetected and uncorrected."
    },
    {
        id: 139,
        question: "Which of the following is MOST important for the successful establishment of a security vulnerability management program?",
        options: [
            "A. A comprehensive asset inventory.",
            "B. A tested incident response plan.",
            "C. A robust tabletop exercise plan.",
            "D. An approved patching policy."
        ],
        answer: "A",
        explanation: "A comprehensive asset inventory is most important for vulnerability management. You cannot identify or remediate vulnerabilities in assets you don't know exist. The inventory provides the foundation — the complete list of what needs to be assessed and protected."
    },
    {
        id: 140,
        question: "Which of the following is the BEST way for senior audit leadership to be engaged during the planning phase of an audit in order to improve audit quality?",
        options: [
            "A. Meet with auditee leadership.",
            "B. Prepare audit planning documents.",
            "C. Review the proposed audit scope.",
            "D. Attend planning walk-throughs."
        ],
        answer: "C",
        explanation: "Reviewing the proposed audit scope is the best way for senior audit leadership to improve audit quality during planning. Scope review ensures the audit focuses on the most significant risks, is appropriately resourced, and aligns with audit objectives and organizational priorities."
    },
    {
        id: 141,
        question: "Which of the following ensures components of an IT system are identified and baselined, and that changes to them are implemented in a controlled manner?",
        options: [
            "A. Restricted production access.",
            "B. Software versioning control.",
            "C. Configuration management process.",
            "D. Change management process."
        ],
        answer: "C",
        explanation: "Configuration management ensures IT system components are identified, baselined, and changed in a controlled manner. It provides a structured approach to managing the configuration items throughout their lifecycle, maintaining a known and approved state for all system components."
    },
    {
        id: 142,
        question: "In which of the following sampling methods is the entire sample considered to be irregular if a single error is found?",
        options: [
            "A. Discovery sampling.",
            "B. Stop-or-go sampling.",
            "C. Variable sampling.",
            "D. Judgmental sampling."
        ],
        answer: "A",
        explanation: "Discovery sampling treats the entire sample as irregular if a single error is found. It is designed to find at least one occurrence of a specific type of irregularity; finding even one is sufficient to conclude that the attribute being tested is present in the population."
    },
    {
        id: 143,
        question: "An audit of an organization's data privacy procedures reveals that the original purpose for which customer personal data was collected has changed. What is the BEST way for the auditor to address this situation?",
        options: [
            "A. Advise management to immediately take the customer database offline.",
            "B. Recommend that future customers be informed of the new use of their data.",
            "C. Review the original consent given by customers against the current use of data.",
            "D. Confirm that customer data has not been used for unsolicited marketing."
        ],
        answer: "C",
        explanation: "Reviewing original consent against current use is the best approach. Data privacy regulations (such as GDPR) require that data be used only for the purposes for which consent was obtained; comparing consent to current use determines whether there is a compliance violation."
    },
    {
        id: 144,
        question: "Which of the following provides the BEST overview of an organization's audit universe when developing a long-term audit plan?",
        options: [
            "A. IT strategy.",
            "B. Risk register.",
            "C. Logical data architecture.",
            "D. Enterprise architecture (EA)."
        ],
        answer: "D",
        explanation: "Enterprise architecture (EA) provides the best overview of the audit universe. EA documents the full landscape of business processes, applications, data flows, and technology — giving the auditor a comprehensive view of all auditable entities and their interrelationships."
    },
    {
        id: 145,
        question: "Which of the following is the GREATEST risk when relying on reports generated by end-user computing (EUC)?",
        options: [
            "A. Reports may not be timely.",
            "B. Historical data may not be available.",
            "C. Reports may not work efficiently.",
            "D. Data may be inaccurate."
        ],
        answer: "D",
        explanation: "Data inaccuracy is the greatest risk with EUC reports. End-user-developed tools (such as spreadsheets) often lack formal controls, validation, and version management, making them susceptible to errors such as broken formulas, incorrect data inputs, and unauthorized modifications."
    },
    {
        id: 146,
        question: "During a security access review, an IS auditor identifies a segregation of duties issue involving financial reporting for which there are no mitigating controls. Which of the following stakeholders should be notified of this finding FIRST?",
        options: [
            "A. The audit committee.",
            "B. External auditors.",
            "C. Operational management.",
            "D. The board of directors."
        ],
        answer: "C",
        explanation: "Operational management should be notified first. Management is the primary recipient of audit findings and is responsible for implementing remediation. They should be given the first opportunity to respond and develop corrective actions before the issue is escalated further."
    },
    {
        id: 147,
        question: "An organization uses system interfaces to disburse money to various banks. Which of the following features in the system interfaces is MOST important to provide assurance that the money is going to the right bank account?",
        options: [
            "A. Audit logging.",
            "B. Nonrepudiation.",
            "C. Encryption.",
            "D. Digital signature."
        ],
        answer: "B",
        explanation: "Nonrepudiation is most important to ensure money reaches the correct bank account. It provides assurance that transactions cannot be denied after the fact, holding parties accountable for transactions that were authorized and executed, which is critical in financial disbursements."
    },
    {
        id: 148,
        question: "Which of the following is MOST helpful to an IS auditor reviewing the alignment of planned IT budget with the organization's goals and strategic objectives?",
        options: [
            "A. Enterprise architecture (EA).",
            "B. Audit recommendations.",
            "C. Risk assessment report.",
            "D. Business impact analysis (BIA)."
        ],
        answer: "A",
        explanation: "Enterprise architecture (EA) is most helpful for assessing IT budget alignment with strategic objectives. EA maps the organization's current and future state technology landscape, making it possible to evaluate whether budget allocations support the technology needed to achieve business goals."
    },
    {
        id: 149,
        question: "Which of the following BEST facilitates strategic program management?",
        options: [
            "A. Aligning projects with business portfolios.",
            "B. Implementing stage gates.",
            "C. Establishing a quality assurance (QA) process.",
            "D. Tracking key project milestones."
        ],
        answer: "A",
        explanation: "Aligning projects with business portfolios best facilitates strategic program management. This ensures all projects within a program collectively support the organization's strategic objectives, enabling coordinated management of related initiatives for maximum business impact."
    },
    {
        id: 150,
        question: "Which of the following is the PRIMARY advantage of performing incremental backups instead of full backups?",
        options: [
            "A. Incremental backups copy all data that has been updated and created.",
            "B. Incremental backups are a more accurate method of backing up data.",
            "C. Incremental backup restoration is faster and easier.",
            "D. Incremental backups require less media space and backup time."
        ],
        answer: "D",
        explanation: "The primary advantage of incremental backups is that they require less media space and take less time. By only backing up data changed since the last backup, incremental backups are significantly more efficient than full backups for routine data protection."
    },
    {
        id: 151,
        question: "As part of the risk management process, threats and vulnerabilities should be mapped to:",
        options: [
            "A. existing controls.",
            "B. information assets.",
            "C. business objectives.",
            "D. key performance indicators (KPIs)."
        ],
        answer: "B",
        explanation: "Threats and vulnerabilities should be mapped to information assets. This mapping identifies which assets are exposed to which threats, enabling the organization to assess risk impact and prioritize protective measures based on the value and criticality of the affected assets."
    },
    {
        id: 152,
        question: "An IS auditor has been asked to review an organization's IT resource management practices. Which of the following findings should be of GREATEST concern?",
        options: [
            "A. An existing vacancy for an IT administrator.",
            "B. The lack of a confidentiality agreement for IT management.",
            "C. Insufficient IT training.",
            "D. An undocumented IT strategy."
        ],
        answer: "D",
        explanation: "An undocumented IT strategy is the greatest concern for IT resource management. Without a documented strategy, IT resources cannot be aligned with business objectives, making it impossible to plan, allocate, and manage IT capabilities effectively to support organizational goals."
    },
    {
        id: 153,
        question: "Attribute sampling is BEST suited to estimate:",
        options: [
            "A. the true monetary value of a population.",
            "B. standard deviation from the mean.",
            "C. the degree of compliance with approved procedures.",
            "D. the total error amount in the population."
        ],
        answer: "C",
        explanation: "Attribute sampling is best suited to estimate the degree of compliance with approved procedures. It measures whether a characteristic (attribute) is present or absent in sample items, making it ideal for testing whether controls or procedures are being followed."
    },
    {
        id: 154,
        question: "Which of the following should be the PRIMARY objective of an organization's incident management program?",
        options: [
            "A. Preventing recurrence of similar incidents in the future.",
            "B. Reducing the number and severity of security incidents throughout the organization.",
            "C. Closing incidents in accordance with service level agreements (SLAs).",
            "D. Enabling the organization to resume normal business operations."
        ],
        answer: "D",
        explanation: "Enabling the organization to resume normal business operations is the primary objective of incident management. The fundamental purpose is to restore services as quickly as possible, minimizing the impact of incidents on business continuity."
    },
    {
        id: 155,
        question: "An IS auditor is asked to review an organization's technology relationships, interfaces, and data. Which of the following enterprise architecture (EA) areas is MOST appropriate for this review?",
        options: [
            "A. Application architecture.",
            "B. Infrastructure architecture.",
            "C. Reference architecture.",
            "D. Information security architecture."
        ],
        answer: "A",
        explanation: "Application architecture is the most appropriate EA area for reviewing technology relationships, interfaces, and data. It documents how applications interact, share data, and interface with each other, providing the view needed to assess integration and data flow patterns."
    },
    {
        id: 156,
        question: "Which of the following responsibilities associated with a disaster recovery plan (DRP) can be outsourced to a Disaster Recovery as a Service (DRaaS) provider?",
        options: [
            "A. Stakeholder communications during a disaster.",
            "B. Validation of recovered data.",
            "C. System recovery procedures.",
            "D. Processes for maintaining currency of data."
        ],
        answer: "C",
        explanation: "System recovery procedures can be outsourced to a DRaaS provider. The provider specializes in executing technical recovery steps for systems, making this a suitable outsourced function. However, responsibilities like stakeholder communication and data validation remain with the organization."
    },
    {
        id: 157,
        question: "An IS auditor finds that irregularities have occurred and that auditee management has chosen to ignore them. If reporting to external authorities is required, which of the following is the BEST action for the IS auditor to take?",
        options: [
            "A. Obtain approval from audit management to submit the report.",
            "B. Obtain approval from auditee management to release the report.",
            "C. Obtain approval from both audit and auditee management to release the report.",
            "D. Submit the report to appropriate regulators immediately."
        ],
        answer: "A",
        explanation: "Obtaining approval from audit management before submitting the report to external authorities is the best action. Audit management must be informed and must authorize external reporting to ensure proper processes are followed, including legal considerations and organizational accountability."
    },
    {
        id: 158,
        question: "Which of the following areas is MOST important for an IS auditor to focus on when reviewing the maturity model for a technology organization?",
        options: [
            "A. Service level agreements (SLAs).",
            "B. Standard operating procedures.",
            "C. Roles and responsibility matrix.",
            "D. Business resiliency."
        ],
        answer: "C",
        explanation: "The roles and responsibility matrix is most important when reviewing a maturity model. Clearly defined roles and responsibilities are foundational to process maturity; without accountability and ownership, processes cannot be consistently executed, measured, or improved."
    },
    {
        id: 159,
        question: "When is it MOST important for an IS auditor to apply the concept of materiality in an audit?",
        options: [
            "A. When planning an audit engagement.",
            "B. When a violation of a regulatory requirement has been identified.",
            "C. When evaluating representations from the auditee.",
            "D. When gathering information for the fieldwork."
        ],
        answer: "A",
        explanation: "Materiality is most important during the planning phase. Determining materiality thresholds during planning helps the auditor focus resources on areas with the greatest potential impact, ensuring the audit is scoped appropriately to address the most significant risks."
    },
    {
        id: 160,
        question: "Which of the following should be an IS auditor's GREATEST concern when a data owner assigns an incorrect classification level to data?",
        options: [
            "A. Data may not be encrypted by the system administrator.",
            "B. Control costs may exceed the intrinsic value of the IT asset.",
            "C. Competitors may be able to view the data.",
            "D. Controls to adequately safeguard the data may not be applied."
        ],
        answer: "D",
        explanation: "The greatest concern is that appropriate controls may not be applied to protect the data. Incorrect classification — whether too high or too low — results in misaligned controls, meaning sensitive data may be under-protected or resources may be wasted over-protecting non-sensitive data."
    }
];