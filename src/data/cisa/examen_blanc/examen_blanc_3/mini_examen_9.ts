export const questionsCISA9 = [
    {
        id: 1,
        question: "A small organization is experiencing rapid growth and plans to create a new information security policy. Which of the following is MOST relevant to creating the policy?",
        options: [
            "A. Enterprise architecture (EA).",
            "B. Business impact analysis (BIA).",
            "C. Business objectives.",
            "D. Recent incident trends."
        ],
        answer: "C",
        explanation: "Business objectives are most relevant when creating an information security policy. The policy must support and align with what the organization is trying to achieve, ensuring security controls enable rather than hinder business goals."
    },
    {
        id: 2,
        question: "Which of the following is the MOST appropriate control to have in place after data migration?",
        options: [
            "A. Review of representative samples of migrated data.",
            "B. Clearly defined and documented data migration roles.",
            "C. Formal sign-off by senior management after completion.",
            "D. Mapping of transactions from source to receiving system."
        ],
        answer: "D",
        explanation: "Mapping transactions from source to receiving system is the most appropriate post-migration control. It provides direct evidence that all data was completely and accurately transferred by tracing each record from origin to destination, validating both completeness and integrity."
    },
    {
        id: 3,
        question: "Due to technical limitations, an organization is not able to implement encryption of credit card details in the customer database. Which of the following would provide the BEST assurance of data confidentiality?",
        options: [
            "A. Tokenization of credit card details.",
            "B. Encryption of credit card details in transit.",
            "C. Multi-factor authentication to access the database.",
            "D. Data masking of credit card details on screen."
        ],
        answer: "A",
        explanation: "Tokenization replaces sensitive credit card data with non-sensitive placeholder tokens, meaning actual card data is never stored in the database. This provides strong confidentiality assurance even without database encryption, as exposed tokens have no exploitable value."
    },
    {
        id: 4,
        question: "Which of the following issues identified during a formal review of an organization's information security policies presents the GREATEST potential risk to the organization?",
        options: [
            "A. The policies have not been reviewed by the risk management committee.",
            "B. The policies are not based on industry best practices for information security.",
            "C. The policies are not aligned with the information security risk appetite.",
            "D. The policies are not available to key risk stakeholders."
        ],
        answer: "C",
        explanation: "Policies not aligned with the organization's risk appetite present the greatest risk. If security policies are either too restrictive or too permissive relative to the organization's defined tolerance for risk, controls will be improperly calibrated, leaving the organization either over-exposed or operationally impeded."
    },
    {
        id: 5,
        question: "The objectives of business process reengineering (BPR) should PRIMARILY include:",
        options: [
            "A. incremental changes in productivity.",
            "B. organizational structure changes.",
            "C. system improvements.",
            "D. performance efficiencies."
        ],
        answer: "D",
        explanation: "BPR primarily aims to achieve performance efficiencies through fundamental redesign of business processes. Unlike incremental improvement, BPR seeks dramatic gains in cost, quality, service, and speed by rethinking how work is done from the ground up."
    },
    {
        id: 6,
        question: "Which of the following is the BEST method for reducing data redundancy in a database?",
        options: [
            "A. Data normalization.",
            "B. Transaction logging.",
            "C. Periodic data review.",
            "D. Concurrent controls."
        ],
        answer: "A",
        explanation: "Data normalization is the best method for reducing data redundancy. It organizes database tables to minimize duplication by ensuring each piece of data is stored only once, reducing storage requirements and the risk of inconsistent data across the database."
    },
    {
        id: 7,
        question: "Which of the following IT processes should be correlated to incidents as the BEST way to support continuous improvement in service management?",
        options: [
            "A. Risk management.",
            "B. Incident management.",
            "C. Change management.",
            "D. Problem management."
        ],
        answer: "D",
        explanation: "Problem management should be correlated to incidents for continuous improvement. Problem management identifies root causes of recurring incidents and implements permanent fixes, preventing future occurrences and driving ongoing improvement in service quality and reliability."
    },
    {
        id: 8,
        question: "Which of the following is the PRIMARY reason to perform user acceptance testing (UAT) prior to production release for a new system?",
        options: [
            "A. It validates that users are trained on the system before moving to production.",
            "B. It provides assurance that all initial requirements have been developed and implemented.",
            "C. It demonstrates that developed functions are operating effectively according to requirements.",
            "D. It demonstrates that hot fixes meet expected results before moving to production."
        ],
        answer: "C",
        explanation: "The primary reason for UAT is to demonstrate that developed functions operate effectively according to business requirements. End users validate the system works as intended in real-world scenarios before it goes live, confirming it meets operational needs."
    },
    {
        id: 9,
        question: "Which of the following should be the GREATEST concern for an IS auditor reviewing the implementation of a security information and event management (SIEM) system?",
        options: [
            "A. SIEM rule tuning is only reviewed annually.",
            "B. Network monitoring events are not aggregated into the SIEM.",
            "C. Only the last seven days of logs from the SIEM are maintained for review.",
            "D. Security operations center (SOC) staff have not been fully trained on how to use the SIEM."
        ],
        answer: "B",
        explanation: "Network monitoring events not being aggregated into the SIEM is the greatest concern. Without network data, the SIEM has significant blind spots, making it unable to detect network-based threats or correlate events across the full IT environment, undermining its core purpose."
    },
    {
        id: 10,
        question: "Which of the following is the MOST important action to ensure timely detection and triage for potential security incidents within an organization?",
        options: [
            "A. Train help desk staff to identify potential symptoms of security incidents when users initiate service tickets.",
            "B. Engage a third-party service provider for incident response and forensic investigation.",
            "C. Install an agent to forward logs to a security information and event management (SIEM) solution for real-time analysis.",
            "D. Ensure all network components and endpoints are hardened."
        ],
        answer: "C",
        explanation: "Installing agents to forward logs to a SIEM for real-time analysis is the most important action for timely detection and triage. Centralized, automated log aggregation and correlation enables rapid, continuous detection of security events across the entire environment."
    },
    {
        id: 11,
        question: "To reduce operational costs, IT management plans to reduce the number of servers currently used to run business applications. Which of the following is MOST helpful to review when identifying which servers are no longer required?",
        options: [
            "A. Mean time between failure (MTBF) of each server.",
            "B. Contract with the server vendor.",
            "C. Performance feedback from the user community.",
            "D. Server CPU usage trends."
        ],
        answer: "D",
        explanation: "Server CPU usage trends are most helpful for identifying underutilized or unused servers. Consistently low CPU utilization indicates a server may not be needed, making usage trend data the most objective and direct evidence for consolidation decisions."
    },
    {
        id: 12,
        question: "Which of the following is the MOST effective method to identify new errors introduced as a result of program changes?",
        options: [
            "A. Interface testing.",
            "B. Unit testing.",
            "C. Regression testing.",
            "D. Integration testing."
        ],
        answer: "C",
        explanation: "Regression testing is most effective for identifying errors introduced by program changes. It re-runs previously passing tests after a change to detect any unintended side effects or newly introduced defects, ensuring the change has not broken existing functionality."
    },
    {
        id: 13,
        question: "When utilizing attribute sampling, which of the following would cause the sample size to increase?",
        options: [
            "A. Tolerable error rate decrease.",
            "B. Expected error rate decrease.",
            "C. Population size decrease.",
            "D. Acceptable risk level increase."
        ],
        answer: "A",
        explanation: "A decrease in the tolerable error rate increases sample size. When the auditor sets a lower threshold for acceptable errors, more samples are required to achieve sufficient confidence that the actual error rate falls within that tighter tolerance."
    },
    {
        id: 14,
        question: "Aligning IT strategy with business strategy PRIMARILY helps an organization to:",
        options: [
            "A. create risk awareness across business units.",
            "B. optimize investments in IT.",
            "C. monitor the effectiveness of IT.",
            "D. increase involvement of senior management in IT."
        ],
        answer: "B",
        explanation: "Aligning IT strategy with business strategy primarily helps optimize IT investments. When IT initiatives directly support business goals, resources are directed toward technology that generates real business value, eliminating spending on initiatives that do not contribute to organizational objectives."
    },
    {
        id: 15,
        question: "Which of the following would present the GREATEST concern during a review of internal audit quality assurance (QA) and continuous improvement processes?",
        options: [
            "A. Quarterly reports are not distributed to the audit committee.",
            "B. Substantive testing is not performed during the assessment phase of some audits.",
            "C. Results of corrective actions are not tracked consistently.",
            "D. The audit program does not involve periodic engagement with external assessors."
        ],
        answer: "C",
        explanation: "Inconsistent tracking of corrective action results is the greatest concern. Without consistent tracking, there is no assurance that identified issues are being remediated, continuous improvement cannot be verified, and the audit function cannot demonstrate effectiveness over time."
    },
    {
        id: 16,
        question: "An IS auditor is reviewing a client's outsourced payroll system to assess whether the financial audit team can rely on the application. Which of the following findings would be the auditor's GREATEST concern?",
        options: [
            "A. Payroll processing costs have not been included in the IT budget.",
            "B. User access rights have not been periodically reviewed by the client.",
            "C. The third-party contract does not comply with the vendor management policy.",
            "D. The third-party contract has not been reviewed by the legal department."
        ],
        answer: "B",
        explanation: "The lack of periodic user access reviews is the greatest concern. Without regular reviews, unauthorized or excessive access to the payroll system may persist, creating a significant risk of fraud, data manipulation, or privacy breaches affecting the integrity of payroll data."
    },
    {
        id: 17,
        question: "Which of the following is the MOST efficient control that helps to ensure complete data transfer through an interface?",
        options: [
            "A. Use transmission encryption for data transfer between systems.",
            "B. Use protocols that allow full duplex communication between source and destination systems.",
            "C. Compare data hash values between the source and destination systems.",
            "D. Conduct code reviews of data transfer encoders and decoders in source and destination systems."
        ],
        answer: "C",
        explanation: "Comparing hash values between source and destination systems is the most efficient completeness control. Hash comparison mathematically verifies that the exact same data was transferred without alteration or loss, providing reliable integrity and completeness assurance with minimal overhead."
    },
    {
        id: 18,
        question: "Which of the following helps to ensure the integrity of data for a system interface?",
        options: [
            "A. User acceptance testing (UAT).",
            "B. Validation checks.",
            "C. System interface testing.",
            "D. Audit logs."
        ],
        answer: "B",
        explanation: "Validation checks help ensure data integrity for system interfaces by verifying that data conforms to expected formats, ranges, and business rules during transfer. They detect corruption, truncation, or format errors in real time, preventing invalid data from entering the receiving system."
    },
    {
        id: 19,
        question: "Which of the following is MOST important to review when auditing an identity provider's use of access tokens to control the interaction between an application programming interface (API) and a server?",
        options: [
            "A. Token escrow.",
            "B. Token expiration.",
            "C. Token length.",
            "D. Token metadata."
        ],
        answer: "B",
        explanation: "Token expiration is most important to review. Access tokens that do not expire or have excessively long lifetimes remain valid even after a user's session should have ended, creating a significant window of opportunity for unauthorized access if a token is compromised."
    },
    {
        id: 20,
        question: "Which of the following is the GREATEST risk associated with security patches being automatically downloaded and applied to production servers?",
        options: [
            "A. Patches may result in major service failures.",
            "B. Patches may be installed regardless of their criticality.",
            "C. Supporting documentation is not updated.",
            "D. Anti-malware is disabled during patch installation."
        ],
        answer: "A",
        explanation: "The greatest risk of automatic patching to production servers is that patches may cause major service failures. Without testing in a non-production environment first, incompatible or faulty patches can crash critical systems, causing significant business disruption."
    },
    {
        id: 21,
        question: "Which of the following findings from a database security audit presents the GREATEST risk of critical security exposures?",
        options: [
            "A. Default settings have not been changed.",
            "B. Admin account passwords are not set to expire.",
            "C. Legacy data has not been purged.",
            "D. Database activity logging is not complete."
        ],
        answer: "A",
        explanation: "Unchanged default settings present the greatest risk of critical security exposure. Default usernames and passwords are publicly known and widely exploited by attackers; leaving them unchanged essentially provides an open invitation for unauthorized access to the entire database."
    },
    {
        id: 22,
        question: "Which of the following is an objective of IT project portfolio management?",
        options: [
            "A. Selection of sound, strategically aligned investment opportunities.",
            "B. Successful implementation of projects.",
            "C. Validation of business case benefits.",
            "D. Establishment of tracking mechanisms."
        ],
        answer: "A",
        explanation: "Selection of sound, strategically aligned investment opportunities is the primary objective of IT portfolio management. It ensures that IT projects and investments are evaluated and selected based on their strategic value and alignment with organizational goals."
    },
    {
        id: 23,
        question: "An IS auditor is reviewing enterprise governance and finds there is no defined organizational structure for technology risk governance. Which of the following is the GREATEST concern with this lack of structure?",
        options: [
            "A. Key decision-making entities for technology risk have not been identified.",
            "B. Project managers may accept technology risks exceeding the organization's risk appetite.",
            "C. There is no clear approval entity for organizational security standards.",
            "D. Software developers may adopt inappropriate technology."
        ],
        answer: "A",
        explanation: "The greatest concern is that key decision-making entities for technology risk have not been identified. Without defined governance roles and accountability, no one has clear authority or responsibility to make risk decisions, creating a governance vacuum that can allow significant risks to go unmanaged."
    },
    {
        id: 24,
        question: "Which of the following observations should be of GREATEST concern to an IS auditor reviewing an organization's enterprise architecture (EA) program?",
        options: [
            "A. The EA program governs projects that are not IT-related.",
            "B. Information security requirements are reviewed by the EA program.",
            "C. IT application owners have sole responsibility for architecture approval.",
            "D. The architecture review board is chaired by the chief information officer (CIO)."
        ],
        answer: "C",
        explanation: "IT application owners having sole responsibility for architecture approval is the greatest concern. This creates a conflict of interest and lacks independent oversight, as application owners may approve architectures that serve their immediate needs but are inconsistent with the enterprise's broader strategic and security requirements."
    },
    {
        id: 25,
        question: "Which of the following will invalidate the authenticity of digital evidence in a forensic investigation?",
        options: [
            "A. The investigator installed forensic software on the original drive that contained the evidence.",
            "B. The evidence was collected from analysis of a copy of the disk data.",
            "C. A software write blocker was used in the collection of the evidence.",
            "D. The investigator collected the evidence while the machine was still powered on."
        ],
        answer: "A",
        explanation: "Installing forensic software on the original evidence drive invalidates authenticity because it modifies the drive being examined. Any changes to the original evidence — even minor ones — can compromise its integrity, making it inadmissible in legal proceedings."
    },
    {
        id: 26,
        question: "An IS auditor is planning an audit of an organization's risk management practices. Which of the following would provide the MOST useful information about risk appetite?",
        options: [
            "A. Prior audit reports.",
            "B. Risk policies.",
            "C. Management assertion.",
            "D. Risk assessments."
        ],
        answer: "B",
        explanation: "Risk policies provide the most useful information about risk appetite. Formally approved risk policies document the organization's defined tolerance for risk, providing the authoritative and documented statement of risk appetite against which actual practices can be evaluated."
    },
    {
        id: 27,
        question: "Which of the following findings related to an organization's information security policy should be of GREATEST concern to an IS auditor?",
        options: [
            "A. The policy has not been communicated to all staff members and training has not been scheduled.",
            "B. The policy has not addressed requirements for regular penetration testing.",
            "C. The policy has not defined organizational roles and responsibilities for information security.",
            "D. The policy is not developed in accordance with a globally accepted information security standard."
        ],
        answer: "C",
        explanation: "The absence of defined roles and responsibilities for information security is the greatest concern. Without clear accountability, no one is specifically responsible for implementing, enforcing, or maintaining security controls, creating a fundamental governance gap that undermines the entire security program."
    },
    {
        id: 28,
        question: "An IS auditor should be MOST concerned with the placement of environmental detectors for heat, water, and smoke in which of the following locations?",
        options: [
            "A. Inside ventilation ducts.",
            "B. Around cooling units.",
            "C. Above the ceiling.",
            "D. Under the floor."
        ],
        answer: "D",
        explanation: "Detectors placed under the floor are most concerning. Data center floors are raised to allow cabling and airflow, making the under-floor space a common pathway for smoke, water, and heat accumulation. Detectors there provide early warning before hazards reach equipment level."
    },
    {
        id: 29,
        question: "An IS auditor finds a computer that is suspected to have been involved in a cybercrime. Which of the following activities is MOST critical to ensure data collected is admissible in a court of law?",
        options: [
            "A. Notify law enforcement upon detection.",
            "B. Track possession of the computer.",
            "C. Collect audit logs from the affected computer.",
            "D. Power off the computer to ensure data is not changed."
        ],
        answer: "B",
        explanation: "Tracking possession of the computer — maintaining chain of custody — is most critical for legal admissibility. A documented and unbroken chain of custody proves the evidence has not been tampered with since collection, which is a foundational requirement for evidence to be accepted in court."
    },
    {
        id: 30,
        question: "Which of the following provides the BEST evidence of the validity and integrity of logs in an organization's security information and event management (SIEM) system?",
        options: [
            "A. Compliance testing.",
            "B. Substantive testing.",
            "C. Stop-or-go sampling.",
            "D. Variable sampling."
        ],
        answer: "B",
        explanation: "Substantive testing provides the best evidence of SIEM log validity and integrity. It directly examines the actual log data for completeness, accuracy, and consistency, rather than simply testing whether controls exist, providing concrete evidence of the data's reliability."
    },
    {
        id: 31,
        question: "When planning a follow-up, the IS auditor is informed by operational management that recent organizational changes have addressed the previously identified risk and implementing the action plan is no longer necessary. What should the auditor do NEXT?",
        options: [
            "A. Review the changes and determine whether the risks have been addressed.",
            "B. Accept management's assertion and report that the risks have been addressed.",
            "C. Report that the changes make it impractical to determine whether the risks have been addressed.",
            "D. Determine whether the changes have introduced new risks that need to be addressed."
        ],
        answer: "A",
        explanation: "The auditor should review the changes and independently determine whether risks have been adequately addressed. Accepting management's assertion without verification would fail the auditor's professional obligation to independently validate remediation and maintain an objective, evidence-based conclusion."
    },
    {
        id: 32,
        question: "Which of the following is the BEST starting point for tailoring an IT framework to design a governance system?",
        options: [
            "A. Considering the threat and vulnerability landscape.",
            "B. Determining the scope of the governance system.",
            "C. Understanding IT implementation methods.",
            "D. Understanding the enterprise environment and strategy."
        ],
        answer: "D",
        explanation: "Understanding the enterprise environment and strategy is the best starting point. IT governance must be tailored to fit the unique context, goals, and operating environment of the organization; without this foundation, the governance framework will not be relevant or effective."
    },
    {
        id: 33,
        question: "A bank wants to outsource a system to a cloud provider residing in another country. Which of the following would be the MOST appropriate IS audit recommendation?",
        options: [
            "A. Find an alternative provider in the bank's home country.",
            "B. Proceed as intended, as the provider has to observe all laws of the clients' countries.",
            "C. Ensure the provider has disaster recovery capability.",
            "D. Ensure the provider's internal control system meets bank requirements."
        ],
        answer: "D",
        explanation: "Ensuring the provider's internal control system meets bank requirements is the most appropriate recommendation. Regardless of geography, the bank must verify the provider's controls meet regulatory and operational requirements; this is the primary governance and risk management concern in any outsourcing arrangement."
    },
    {
        id: 34,
        question: "Which of the following is the GREATEST concern when consolidating several applications from two outdated servers onto one new server?",
        options: [
            "A. Network traffic may increase.",
            "B. Power usage will increase.",
            "C. The new server will not be fully utilized after migration.",
            "D. System maintenance may require more coordination."
        ],
        answer: "D",
        explanation: "Increased maintenance coordination is the greatest concern. When multiple applications share a single server, maintenance activities such as patching or rebooting affect all applications simultaneously, requiring careful coordination to avoid unplanned downtime for multiple business functions at once."
    },
    {
        id: 35,
        question: "Which of the following responses to risk associated with segregation of duties would incur the LOWEST initial cost?",
        options: [
            "A. Risk transference.",
            "B. Risk mitigation.",
            "C. Risk acceptance.",
            "D. Risk reduction."
        ],
        answer: "C",
        explanation: "Risk acceptance incurs the lowest initial cost because it requires no investment in controls, insurance, or process changes. Management simply acknowledges and documents the risk without taking action, though this creates potential for future losses that may far exceed avoided upfront costs."
    },
    {
        id: 36,
        question: "Which of the following BEST indicates that the effectiveness of an organization's security awareness program has improved?",
        options: [
            "A. An increase in the number of staff who complete awareness training.",
            "B. A decrease in the number of malware outbreaks.",
            "C. An increase in the number of phishing emails reported by employees.",
            "D. A decrease in the number of information security audit findings."
        ],
        answer: "C",
        explanation: "An increase in phishing email reports best indicates improved security awareness. It demonstrates that employees are actively recognizing and reporting threats rather than ignoring or falling for them, showing that training has changed behavior in a measurable and security-positive way."
    },
    {
        id: 37,
        question: "An IS auditor is conducting an IT governance audit and notices many initiatives are managed informally by isolated project managers. Which of the following recommendations would have the GREATEST impact on improving the maturity of the IT team?",
        options: [
            "A. Document and track all IT decisions in a project management tool.",
            "B. Create an interdisciplinary IT steering committee to oversee IT prioritization and spending.",
            "C. Schedule a follow-up audit in the next year to confirm whether IT processes have matured.",
            "D. Discontinue all current IT projects until formal approval is obtained and documented."
        ],
        answer: "B",
        explanation: "Creating an IT steering committee would have the greatest impact on governance maturity. A steering committee provides formal, cross-functional oversight of IT investments and priorities, replacing informal management with structured governance that aligns IT with business strategy."
    },
    {
        id: 38,
        question: "An IS auditor learns that an organization's business continuity plan (BCP) has not been updated in the last 18 months and that the organization recently closed a production plant. Which of the following is the auditor's BEST course of action?",
        options: [
            "A. Assess the risk to operations from the closing of the plant.",
            "B. Determine whether the business impact analysis (BIA) is current with the organization's structure and context.",
            "C. Perform testing to determine the impact to the recovery time objective (RTO).",
            "D. Determine the types of technologies used at the plant and how they may affect the BCP."
        ],
        answer: "B",
        explanation: "Determining whether the BIA is current is the best course of action. The BIA is the foundation of the BCP; a closed plant represents a significant organizational change that may have altered critical processes, dependencies, and recovery priorities, making BIA currency the most critical thing to verify."
    },
    {
        id: 39,
        question: "Which of the following would be of GREATEST concern to an IS auditor assessing the organizational risk associated with fraud?",
        options: [
            "A. Unauthorized changes to the production environment have been detected.",
            "B. Periodic user access reviews to financial systems are inconsistent.",
            "C. A major financial application is developed and maintained by the application team.",
            "D. The organization does not require employees to take mandatory leave."
        ],
        answer: "D",
        explanation: "The absence of mandatory leave is the greatest fraud concern. Mandatory leave (job rotation) is a key fraud detection control because it forces others to perform a person's duties, which often reveals concealed fraudulent activities that the perpetrator had been managing continuously."
    },
    {
        id: 40,
        question: "The introduction of a data analytics tool to an IS audit engagement is MOST likely to reduce which type of risk?",
        options: [
            "A. Technology risk.",
            "B. Control risk.",
            "C. Inherent risk.",
            "D. Detection risk."
        ],
        answer: "D",
        explanation: "Data analytics tools primarily reduce detection risk. By enabling full population testing and automated analysis of large data sets, analytics significantly improves the auditor's ability to detect errors, anomalies, and fraud that manual sampling might miss."
    },
    {
        id: 41,
        question: "What is the PRIMARY reason to include a business management review at the end of each IT project phase?",
        options: [
            "A. To obtain approval for the IT solution design.",
            "B. To obtain funding to continue to the next phase.",
            "C. To obtain approval from stakeholders to proceed to the next phase.",
            "D. To obtain sign-off that user acceptance testing (UAT) has been completed."
        ],
        answer: "C",
        explanation: "The primary reason for phase-end business reviews is to obtain stakeholder approval to proceed to the next phase. This stage-gate process ensures business management remains engaged, validates that deliverables meet requirements, and provides formal authorization before committing further resources."
    },
    {
        id: 42,
        question: "Which of the following controls is MOST crucial to ensure an organization will be able to recover its data from backup media in the event of a disaster?",
        options: [
            "A. Keeping a current inventory of backup media.",
            "B. Encrypting data on backup media.",
            "C. Periodically restoring backup media for key databases.",
            "D. Storing backup media at an offsite facility."
        ],
        answer: "C",
        explanation: "Periodically restoring backup media is the most crucial control. Without testing restoration, the organization cannot confirm that backups are actually recoverable. Unverified backups may fail when needed most, making tested restoration the only true assurance that recovery is possible."
    },
    {
        id: 43,
        question: "Which of the following is the BEST way to mitigate the risk of services no longer being available from a bankrupt Software as a Service (SaaS) provider?",
        options: [
            "A. Including service level agreements (SLAs) in the contract.",
            "B. Retaining copies of the software for emergency situations.",
            "C. Having a software escrow agreement with a third party.",
            "D. Backing up the data processed by the software."
        ],
        answer: "C",
        explanation: "A software escrow agreement best mitigates vendor bankruptcy risk. It ensures that source code and related assets are held by a neutral third party and released to the organization if the vendor becomes insolvent, enabling continued operation or migration of the service."
    },
    {
        id: 44,
        question: "An IS auditor finds that periodic reviews of read-only users for a reporting system are not being performed. Which of the following should be the IS auditor's NEXT course of action?",
        options: [
            "A. Obtain a verbal confirmation from IT for this exemption.",
            "B. Review the list of end users and evaluate for authorization.",
            "C. Report this control process weakness to senior management.",
            "D. Verify management's approval for this exemption."
        ],
        answer: "B",
        explanation: "Reviewing the list of end users and evaluating for authorization is the best next step. The auditor should perform substantive testing to assess the actual impact of the missing access review, determining whether unauthorized users have access before formulating a finding."
    },
    {
        id: 45,
        question: "Which of the following is the MOST important reason for an IS auditor to examine the results of a post-incident review performed after a security incident?",
        options: [
            "A. To re-analyze the incident to identify any hidden backdoors planted by the attacker.",
            "B. To evaluate the effectiveness of the network firewall against future security breaches.",
            "C. To compare incident response metrics with industry benchmarks.",
            "D. To evaluate the effectiveness of continuous improvement efforts."
        ],
        answer: "D",
        explanation: "Examining post-incident review results is most important to evaluate the effectiveness of continuous improvement efforts. Post-incident reviews should produce lessons learned and corrective actions; assessing them shows whether the organization is genuinely learning from incidents and improving its security posture."
    },
    {
        id: 46,
        question: "Which test approach provides the GREATEST assurance of the completeness of transactions transferred between systems?",
        options: [
            "A. Testing the reconciliations of the totals of transactions in the two systems.",
            "B. Testing a sample of transactions in the source system from a list of all transactions in the destination system.",
            "C. Testing the processes used to review processing exceptions.",
            "D. Testing a sample of transactions in the destination system from a list of all transactions in the source system."
        ],
        answer: "D",
        explanation: "Testing destination transactions against a complete source list provides the greatest assurance of completeness. This approach detects transactions that exist in the source but did not arrive at the destination, directly identifying any missing or lost records during transfer."
    },
    {
        id: 47,
        question: "Which of the following is a PRIMARY benefit of using risk assessments to determine areas to be included in an audit plan?",
        options: [
            "A. Timely audit execution.",
            "B. Effective allocation of audit resources.",
            "C. Reduced travel and expense costs.",
            "D. Effective risk mitigation."
        ],
        answer: "B",
        explanation: "Effective allocation of audit resources is the primary benefit of risk-based audit planning. By focusing resources on the highest-risk areas, the audit function maximizes its impact and value, ensuring that limited audit capacity is directed where it matters most."
    },
    {
        id: 48,
        question: "Which of the following is the BEST security control to validate the integrity of data communicated between production databases and a big data analytics system?",
        options: [
            "A. Hashing in-scope data sets.",
            "B. Hosting a digital certificate for in-scope data sets.",
            "C. Encrypting in-scope data sets.",
            "D. Running and comparing the count function within the in-scope data sets."
        ],
        answer: "A",
        explanation: "Hashing in-scope data sets is the best control for validating data integrity. Hash functions produce a unique fingerprint of data that changes if any bit is altered; comparing hashes between source and destination confirms the data has not been modified during communication."
    },
    {
        id: 49,
        question: "A contract for outsourcing IS functions should always include:",
        options: [
            "A. a provision for an independent audit of the contractor's operations.",
            "B. data transfer protocols.",
            "C. the names and roles of staff to be employed in the operation.",
            "D. full details of security procedures to be observed by the contractor."
        ],
        answer: "A",
        explanation: "A provision for independent audit is the most important contractual element for outsourced IS functions. It ensures the organization retains the right to verify that the contractor is meeting its obligations and maintaining adequate controls, which is fundamental for ongoing governance and accountability."
    },
    {
        id: 50,
        question: "During an IS audit, it is discovered that data classification rules are often ignored by programmers developing in-house software. Which of the following recommendations would BEST mitigate the risk in this situation?",
        options: [
            "A. Revise the organization's data classification policy.",
            "B. Require application owners to classify data used by programmers.",
            "C. Ensure code reviews include data classification checks.",
            "D. Prevent programmers from accessing sensitive data during development."
        ],
        answer: "C",
        explanation: "Including data classification checks in code reviews is the best mitigation. It embeds compliance into the development process, creating a systematic checkpoint that ensures classification rules are verified before code advances, rather than relying on individual programmer awareness."
    },
    {
        id: 51,
        question: "Which of the following is an IS auditor's BEST course of action when senior management disagrees with audit findings during the closeout meeting?",
        options: [
            "A. Finalize the audit report without any changes.",
            "B. Present supporting facts for the findings to senior management.",
            "C. Include senior management proposals in the report.",
            "D. Re-perform the audit testing for the findings in question."
        ],
        answer: "B",
        explanation: "Presenting supporting facts for the findings is the best course of action. The auditor should substantiate findings with evidence to resolve disagreements objectively. If management disagrees, the auditor can present the facts supporting the finding while remaining open to new information that may warrant reconsideration."
    },
    {
        id: 52,
        question: "A network review is being undertaken to evaluate security risks. Which of the following would be of MOST concern if identified during the review?",
        options: [
            "A. Router access to the Internet from the internal network.",
            "B. Direct network access from PCs to the Internet.",
            "C. Firewall access to the internal network from the Internet.",
            "D. Remote access to the internal network from internal PCs."
        ],
        answer: "C",
        explanation: "Firewall access to the internal network from the Internet is the greatest concern. A firewall that permits inbound access from the Internet to the internal network defeats its primary purpose of protecting internal systems, creating a direct pathway for external attacks."
    },
    {
        id: 53,
        question: "A secure server room has a badge reader system that records name, date, and time information whenever a staff member uses a badge to enter or exit. When reviewing the system logs, an IS auditor notices records for some employees entering, but not exiting, the room. Which of the following would be the MOST effective compensating control to recommend?",
        options: [
            "A. Installing security cameras at the doors.",
            "B. Implementing a monitored mantrap at entrance and exit points.",
            "C. Changing to a biometric access control system.",
            "D. Requiring two-factor authentication at entrance and exit points."
        ],
        answer: "B",
        explanation: "A monitored mantrap at entrance and exit points is the most effective compensating control. It physically prevents tailgating and piggybacking, ensuring every person entering or exiting is individually authenticated and recorded, eliminating the possibility of unlogged access."
    },
    {
        id: 54,
        question: "Which of the following should be the PRIMARY objective of an IS audit exit interview?",
        options: [
            "A. To categorize risk ratings of the findings and prioritize with management.",
            "B. To determine the materiality and extent of the findings.",
            "C. To gain agreement on the findings and corrective action plans.",
            "D. To ensure the audit recommendations are cost effective to implement."
        ],
        answer: "C",
        explanation: "Gaining agreement on findings and corrective action plans is the primary objective of the exit interview. This ensures both parties understand and agree on what was found and what remediation is committed to, setting the foundation for effective follow-up and accountability."
    },
    {
        id: 55,
        question: "Which of the following is the MOST appropriate testing approach when auditing a daily data flow between two systems via an automated interface to confirm that it is complete and accurate?",
        options: [
            "A. Conduct code review for both systems and inspect design documentation.",
            "B. Inspect interface configurations and an example output of the systems.",
            "C. Confirm that the encryption standard applied to the interface is in line with best practice.",
            "D. Perform data reconciliation between the two systems for a sample of 25 days."
        ],
        answer: "D",
        explanation: "Performing data reconciliation between the two systems for a sample of days is the most appropriate approach. It directly tests whether data transferred is complete and accurate by comparing actual source and destination records, providing objective evidence of interface effectiveness."
    },
    {
        id: 56,
        question: "An IS auditor reviewing incident response management processes notices that resolution times for reoccurring incidents have not shown improvement. Which of the following is the auditor's BEST recommendation?",
        options: [
            "A. Implement a survey to determine future incident response training needs.",
            "B. Introduce problem management into incident response.",
            "C. Incorporate a security information and event management (SIEM) system into incident response.",
            "D. Harden IT system and application components based on best practices."
        ],
        answer: "B",
        explanation: "Introducing problem management is the best recommendation. Recurring incidents without improvement indicate root causes are not being identified or addressed. Problem management focuses on finding and eliminating underlying causes of repeat incidents, which directly addresses the observed pattern."
    },
    {
        id: 57,
        question: "Which of the following is the BEST justification for using data analytics when testing the effectiveness of controls?",
        options: [
            "A. Data analytics can be applied to any type of control.",
            "B. Automation can reduce errors induced by human judgment.",
            "C. Audit risk can be eliminated during an engagement.",
            "D. Data can be utilized to validate whether the control is working properly."
        ],
        answer: "D",
        explanation: "The best justification is that data analytics validates whether controls are actually working. By analyzing transaction data directly, auditors can confirm that controls are operating as designed and producing the intended outcomes, rather than just verifying that controls exist."
    },
    {
        id: 58,
        question: "Which of the following should be of GREATEST concern to an IS auditor reviewing the business continuity plan (BCP) of an organization with multiple vendors?",
        options: [
            "A. The recovery point objective (RPO) and recovery time objective (RTO) are the same.",
            "B. Recovery test plans are not updated annually.",
            "C. The business impact analysis (BIA) is only updated after a significant event.",
            "D. Critical system interfaces are not documented or tested regularly."
        ],
        answer: "D",
        explanation: "Undocumented and untested critical system interfaces are the greatest BCP concern for a multi-vendor organization. If interfaces between systems fail during a disaster and the organization does not know how to restore them, recovery efforts will fail regardless of how well other BCP elements are prepared."
    },
    {
        id: 59,
        question: "Which of the following is the MOST efficient approach for backing up large quantities of information in a critical system that must be online 24 hours a day?",
        options: [
            "A. Full backup to tape daily and incremental backup weekly.",
            "B. Hot site with identical server and storage.",
            "C. Fault-tolerant disk-to-disk solution.",
            "D. Storage area network (SAN)."
        ],
        answer: "C",
        explanation: "A fault-tolerant disk-to-disk solution is most efficient for 24/7 critical systems. It provides continuous data protection without taking the system offline, automatically maintaining up-to-date copies of data in real time with minimal performance impact on the production system."
    },
    {
        id: 60,
        question: "Which of the following should be an IS auditor's GREATEST concern when evaluating an organization's ability to recover from system failures?",
        options: [
            "A. Data backups being stored onsite.",
            "B. Inadequate backup job monitoring.",
            "C. Lack of documentation for data backup procedures.",
            "D. Lack of periodic data backup restoration testing."
        ],
        answer: "D",
        explanation: "The lack of periodic backup restoration testing is the greatest concern. Without testing, the organization has no assurance that backups can actually be restored when needed. A backup process that has never been validated may fail completely during an actual disaster recovery scenario."
    },
    {
        id: 61,
        question: "Which of the following processes is MOST important to define within a data classification policy?",
        options: [
            "A. Auditing access to data assets.",
            "B. Backing up data assets.",
            "C. Disposing of data assets.",
            "D. Recovering data assets."
        ],
        answer: "C",
        explanation: "Defining data disposal processes is most important within a data classification policy. Improper disposal of classified data — especially sensitive or confidential information — can lead to data breaches even after the data's useful life has ended, making disposal procedures critical to maintaining data confidentiality."
    },
    {
        id: 62,
        question: "Which of the following is the GREATEST security concern specific to virtualized environments?",
        options: [
            "A. A management console grants administrative access.",
            "B. Unmanaged memory may leak data between guests.",
            "C. Performance issues of the host can affect security capabilities.",
            "D. Vulnerabilities can result in exposure of sensitive data."
        ],
        answer: "B",
        explanation: "Unmanaged memory leaking data between guest VMs is the greatest virtualization-specific concern. In a shared physical environment, improper memory isolation can allow one VM to read another's memory contents, creating a unique risk of data exposure that does not exist in physical server environments."
    },
    {
        id: 63,
        question: "Which of the following is the BEST recommendation to mitigate the risk associated with remote access through the hypervisor interface?",
        options: [
            "A. Presentation-layer and application-layer controls.",
            "B. Enterprise security policies and controls.",
            "C. Secure configuration of guest systems.",
            "D. Network-layer and transport-layer controls."
        ],
        answer: "D",
        explanation: "Network-layer and transport-layer controls are the best mitigation for remote hypervisor access risks. These controls restrict which networks can reach the hypervisor management interface and encrypt communications, preventing unauthorized network access to the most privileged layer of the virtual environment."
    },
    {
        id: 64,
        question: "An IS auditor is verifying the adequacy of an organization's internal controls and is concerned about potential circumvention of regulations. Which of the following is the BEST sampling method to use?",
        options: [
            "A. Cluster sampling.",
            "B. Attribute sampling.",
            "C. Random sampling.",
            "D. Variable sampling."
        ],
        answer: "B",
        explanation: "Attribute sampling is best suited for testing compliance with regulations. It tests whether a specific attribute (such as regulatory compliance) is present or absent in each sample item, making it ideal for determining whether controls designed to prevent regulatory circumvention are being followed."
    },
    {
        id: 65,
        question: "Which of the following is the GREATEST advantage of outsourcing the development of an e-banking solution when in-house technical expertise is not available?",
        options: [
            "A. Increased ability to adapt the system.",
            "B. Reduced risk of system downtime.",
            "C. Direct oversight of risks.",
            "D. Lower start-up costs."
        ],
        answer: "D",
        explanation: "Lower start-up costs are the greatest advantage of outsourcing when in-house expertise is unavailable. Building internal expertise requires significant investment in recruitment and training; outsourcing provides immediate access to specialized skills at a lower initial cost, accelerating time to market."
    },
    {
        id: 66,
        question: "Which of the following should be of MOST concern to an IS auditor reviewing a system interface that exchanges data across borders?",
        options: [
            "A. The managed file transfer (MFT) systems do not have auto-restart capability during interruptions.",
            "B. Operational reports indicate there are interface errors during data transfer with frequent timeouts.",
            "C. Bandwidth consumption is near capacity during peak hours.",
            "D. The data encryption standard is not aligned with government regulations."
        ],
        answer: "D",
        explanation: "Non-compliant data encryption for cross-border transfers is the most significant concern. Many jurisdictions impose specific encryption standards for data transmitted across borders, particularly for sensitive data; non-compliance can result in regulatory penalties, legal liability, and data exposure."
    },
    {
        id: 67,
        question: "The PRIMARY advantage of using open source-based solutions is that they:",
        options: [
            "A. offer better security features.",
            "B. reduce dependence on vendors.",
            "C. are easily implemented.",
            "D. have well-defined support levels."
        ],
        answer: "B",
        explanation: "Reducing vendor dependence is the primary advantage of open source solutions. Organizations are not locked into a single vendor's pricing, roadmap, or support terms; they can modify the software, source alternative support, or continue using it even if the original developer ceases operations."
    },
    {
        id: 68,
        question: "What is a PRIMARY benefit of using Transport Layer Security (TLS) in an e-commerce application?",
        options: [
            "A. TLS transmits digital certificates to a web server providing secure e-commerce services.",
            "B. TLS ensures nonrepudiation of secure transactions.",
            "C. TLS provides security tools and resources to Internet service providers (ISPs).",
            "D. TLS enables a web browser and a web server to communicate securely."
        ],
        answer: "D",
        explanation: "The primary benefit of TLS is enabling secure communication between a web browser and web server. TLS encrypts the connection and authenticates the server, protecting data in transit from interception, eavesdropping, and tampering during e-commerce transactions."
    },
    {
        id: 69,
        question: "Which of the following is the BEST compensating control against segregation of duties conflicts in new code development?",
        options: [
            "A. Creation of staging environments.",
            "B. Post-implementation change review.",
            "C. Adding the developers to the change approval board.",
            "D. A small number of people have access to deploy code."
        ],
        answer: "B",
        explanation: "Post-implementation change review is the best compensating control for SoD conflicts in development. It provides an independent review of changes after deployment, detecting unauthorized or erroneous modifications that occurred due to the SoD conflict, maintaining accountability even when full separation is not possible."
    },
    {
        id: 70,
        question: "Which of the following BEST demonstrates to senior management and the board that an audit function is compliant with standards and the code of ethics?",
        options: [
            "A. Quality control reviews.",
            "B. Audit staff interviews.",
            "C. Corrective action plans.",
            "D. Control self-assessments (CSAs)."
        ],
        answer: "A",
        explanation: "Quality control reviews best demonstrate compliance with standards and the code of ethics. Formal QA processes provide independent, structured assessment of whether audit work meets professional standards, producing objective evidence for senior management and the board about audit function quality."
    },
    {
        id: 71,
        question: "When assessing the quality of personnel data, an IS auditor finds that the data values reconcile to values outside of the database and logical access is appropriately restricted. Which of the following should also be reviewed to provide a comprehensive assessment of the data quality?",
        options: [
            "A. Whether the data can be used in the correct context.",
            "B. Whether the data is classified appropriately.",
            "C. Whether procedures for using the database are followed.",
            "D. Whether users are appropriately trained."
        ],
        answer: "A",
        explanation: "Reviewing whether data can be used in the correct context is essential for a comprehensive data quality assessment. Data quality encompasses not just accuracy and access, but also fitness for purpose — whether the data is appropriate and meaningful for its intended use cases."
    },
    {
        id: 72,
        question: "Which of the following is the BEST way to evaluate customer satisfaction and system reliability when considering a prospective IT vendor during the request for proposal (RFP) process?",
        options: [
            "A. Conduct onsite demonstrations and evaluations with multiple vendors.",
            "B. Perform a gap analysis between requirements and vendor responses.",
            "C. Interview current users with similar requirements.",
            "D. Review vendor documentation and testimonials."
        ],
        answer: "C",
        explanation: "Interviewing current users with similar requirements provides the best insight into customer satisfaction and reliability. Real users can share firsthand experience with actual performance, support quality, and reliability under conditions similar to the evaluating organization's needs."
    },
    {
        id: 73,
        question: "Which of the following would be MOST effective in detecting the presence of an unauthorized wireless access point on an internal network?",
        options: [
            "A. Physical security reviews.",
            "B. Review of electronic access logs.",
            "C. Continuous network monitoring.",
            "D. Periodic network vulnerability assessments."
        ],
        answer: "C",
        explanation: "Continuous network monitoring is most effective for detecting unauthorized wireless access points. Real-time monitoring can identify new or unexpected wireless signals and network connections as they appear, enabling prompt detection of rogue access points before they can be exploited."
    },
    {
        id: 74,
        question: "When evaluating evidence as part of an IS audit, which of the following sources should be considered MOST reliable?",
        options: [
            "A. Evidence demonstrated in front of the auditor.",
            "B. Evidence provided directly from the auditee.",
            "C. Evidence curated by senior management.",
            "D. Evidence provided by a third party."
        ],
        answer: "A",
        explanation: "Evidence demonstrated directly in front of the auditor is the most reliable. When the auditor observes a process or system operating in real time, there is no opportunity for the evidence to be falsified or selectively prepared, providing the most direct and objective form of audit evidence."
    },
    {
        id: 75,
        question: "Which of the following should be done FIRST to ensure that a data loss prevention (DLP) process is appropriately implemented?",
        options: [
            "A. Classify the data stored on its systems.",
            "B. Determine methods used to transmit data.",
            "C. Measure the volume of data stored.",
            "D. Identify the locations of the data on its systems."
        ],
        answer: "A",
        explanation: "Classifying data should be done first. DLP systems rely on data classification to identify what is sensitive and needs protection; without knowing which data requires protection and at what level, a DLP system cannot be effectively configured to detect and prevent data loss."
    },
    {
        id: 76,
        question: "Which of the following should be the GREATEST concern to an IS auditor reviewing the information security framework of an organization?",
        options: [
            "A. A list of critical information assets was not included in the information security policy.",
            "B. Senior management was not involved in the development of the information security policy.",
            "C. The information security policy is not aligned with regulatory requirements.",
            "D. The information security policy has not been updated in the last two years."
        ],
        answer: "C",
        explanation: "Non-alignment with regulatory requirements is the greatest concern. Failing to comply with applicable regulations exposes the organization to legal penalties, fines, and reputational damage. Regulatory compliance is a mandatory obligation that takes precedence over internal governance preferences."
    },
    {
        id: 77,
        question: "Which of the following roles is BEST suited to resolve disputes over which IT function should have operational responsibility for a new IT system?",
        options: [
            "A. IT steering committee.",
            "B. Enterprise risk committee.",
            "C. IT project manager.",
            "D. Service delivery manager."
        ],
        answer: "A",
        explanation: "The IT steering committee is best suited to resolve operational responsibility disputes. As the senior governance body overseeing IT priorities and organizational structure, it has the authority and cross-functional perspective needed to make binding decisions about IT operational accountabilities."
    },
    {
        id: 78,
        question: "Which of the following should an IS auditor regard as the PRIMARY role of IT governance when considering an outsourcing arrangement for IT services?",
        options: [
            "A. Ensuring the risk associated with outsourcing has been mitigated.",
            "B. Ensuring stakeholder input in the outsourcing decision process.",
            "C. Ensuring vendor due diligence during the vendor selection process.",
            "D. Ensuring the outsourcing contract includes a right-to-audit clause."
        ],
        answer: "B",
        explanation: "Ensuring stakeholder input in the outsourcing decision is the primary IT governance role. Governance ensures that decisions affecting the organization are made with appropriate involvement from all relevant parties, providing accountability and alignment with organizational needs and strategy."
    },
    {
        id: 79,
        question: "Which of the following is MOST important when defining the IS audit scope?",
        options: [
            "A. Involving business in the formulation of the scope statement.",
            "B. Minimizing the time and cost to the organization of IS audit procedures.",
            "C. Aligning the IS audit procedures with IT management priorities.",
            "D. Understanding the relationship between IT and business risks."
        ],
        answer: "D",
        explanation: "Understanding the relationship between IT and business risks is most important for defining audit scope. This understanding ensures the scope focuses on IT areas that have the greatest potential impact on business outcomes, making the audit relevant and value-adding to the organization."
    },
    {
        id: 80,
        question: "When reviewing a business case for a proposed implementation of a third-party system, which of the following should be an IS auditor's GREATEST concern?",
        options: [
            "A. Lack of training materials.",
            "B. Lack of plan for pilot implementation.",
            "C. Lack of detailed work breakdown structure.",
            "D. Lack of ongoing maintenance costs."
        ],
        answer: "D",
        explanation: "The absence of ongoing maintenance costs is the greatest concern. A business case without total cost of ownership — including maintenance, licensing, support, and upgrades — presents an incomplete financial picture that may lead management to approve an investment based on understated costs."
    },
    {
        id: 81,
        question: "Which of the following would minimize the risk of losing transactions as a result of a disaster?",
        options: [
            "A. Encrypting a copy of the transaction logs and store on a local server.",
            "B. Signing a copy of the transaction logs and store on a local server.",
            "C. Sending a copy of the transaction logs to offsite storage on a daily basis.",
            "D. Storing a copy of the transaction logs onsite in a fireproof vault."
        ],
        answer: "C",
        explanation: "Sending transaction logs to offsite storage daily minimizes transaction loss risk from a disaster. A disaster affecting the primary site could destroy locally stored backups; offsite storage ensures logs survive and can be used for recovery, protecting transaction history from site-wide events."
    },
    {
        id: 82,
        question: "In the review of a feasibility study for an IS acquisition, the MOST important step is to:",
        options: [
            "A. determine whether the cost-benefits are achievable.",
            "B. ensure that a contingency plan is in place should the project fail.",
            "C. determine whether security and control requirements have been specified.",
            "D. ensure that the right to audit the vendor has been considered."
        ],
        answer: "A",
        explanation: "Determining whether cost-benefits are achievable is the most important step in a feasibility study. The fundamental question of any feasibility study is whether the investment makes financial sense; if projected benefits are not realistically achievable, the acquisition should not proceed regardless of other considerations."
    },
    {
        id: 83,
        question: "Which of the following should be an IS auditor's PRIMARY consideration when determining which issues to include in an audit report?",
        options: [
            "A. Inherent risk.",
            "B. Materiality.",
            "C. Professional skepticism.",
            "D. Management's agreement."
        ],
        answer: "B",
        explanation: "Materiality is the primary consideration for determining what to include in an audit report. Only findings that are significant enough to influence the decisions of report users should be included; reporting immaterial issues wastes time and dilutes the impact of genuinely important findings."
    },
    {
        id: 84,
        question: "Which of the following should be the GREATEST concern for an IS auditor reviewing data management of a data warehouse?",
        options: [
            "A. A database re-index process is run infrequently.",
            "B. A data dictionary has not been formally approved.",
            "C. A data retention policy has not been developed.",
            "D. Users can build their own database reports."
        ],
        answer: "C",
        explanation: "The absence of a data retention policy is the greatest concern. Without defined retention rules, data may be kept longer than required (creating compliance and privacy risks) or deleted prematurely (destroying records needed for regulatory, legal, or business purposes)."
    },
    {
        id: 85,
        question: "Which of the following should be of GREATEST concern to an IS auditor reviewing a report of an unsuccessful disaster recovery test?",
        options: [
            "A. A root cause analysis was not performed.",
            "B. The report was not discussed with the IT steering committee.",
            "C. The disaster recovery procedures are not up to date.",
            "D. The disaster recovery test was conducted during non-peak hours."
        ],
        answer: "A",
        explanation: "The absence of root cause analysis is the greatest concern. Without understanding why the disaster recovery test failed, the organization cannot implement effective corrective actions, meaning the next actual disaster may also result in failed recovery, with potentially catastrophic consequences."
    },
    {
        id: 86,
        question: "Which of the following protocols should be used when transferring data via the Internet?",
        options: [
            "A. Hypertext Transfer Protocol (HTTP).",
            "B. Secure File Transfer Protocol (SFTP).",
            "C. User Datagram Protocol (UDP).",
            "D. Remote Desktop Protocol (RDP)."
        ],
        answer: "B",
        explanation: "SFTP should be used for Internet data transfers. It encrypts both the authentication credentials and the data being transferred, protecting against interception and eavesdropping unlike plain FTP or HTTP, which transmit data in cleartext."
    },
    {
        id: 87,
        question: "Which of the following should be done FIRST to protect evidence on a computer suspected to be involved in online fraud?",
        options: [
            "A. Unplug the computer from its power source.",
            "B. Eject removable media.",
            "C. Use the computer to trace the source of the crime.",
            "D. Make a copy of the affected system."
        ],
        answer: "D",
        explanation: "Making a forensic copy of the affected system should be done first. This preserves the evidence in its current state before any further action is taken. Working from a copy rather than the original protects the integrity of the evidence and maintains its admissibility."
    },
    {
        id: 88,
        question: "Which of the following BEST enables an organization to balance value delivery and risk management?",
        options: [
            "A. Utilizing an IT governance framework.",
            "B. Executing gap assessments against a capability maturity model.",
            "C. Performing risk assessments.",
            "D. Developing dashboards and management reporting."
        ],
        answer: "A",
        explanation: "An IT governance framework best enables the balance between value delivery and risk management. Governance frameworks provide structured processes for making IT decisions that simultaneously maximize business value while maintaining acceptable levels of risk."
    },
    {
        id: 89,
        question: "Which of the following organizational functions is MOST appropriate to monitor the budget associated with an IT project?",
        options: [
            "A. Risk committee.",
            "B. Executive committee.",
            "C. IT strategy committee.",
            "D. IT steering committee."
        ],
        answer: "D",
        explanation: "The IT steering committee is most appropriate for monitoring IT project budgets. It has operational oversight responsibility for IT investments and projects, making it the right body to track spending against approved budgets and take corrective action when variances occur."
    },
    {
        id: 90,
        question: "Which of the following is MOST important for an IS auditor to review when an audit identifies that the business continuity plan (BCP) does not address scenarios involving extended system outages?",
        options: [
            "A. Risk rating of business non-continuity.",
            "B. Disaster recovery plan (DRP).",
            "C. Historical incidents resulting in extended system outages.",
            "D. Enterprise risk assessment."
        ],
        answer: "B",
        explanation: "Reviewing the DRP is most important. The DRP is the technical component that addresses specific recovery procedures for system outages; if the BCP does not address extended outages, the DRP should be reviewed to determine if it covers these scenarios and how it integrates with the BCP."
    },
    {
        id: 91,
        question: "Which of the following would BEST enable long-term improvements in overall data quality?",
        options: [
            "A. Deploying an enterprise data warehouse.",
            "B. Developing data validation controls within IT systems.",
            "C. Implementing a data governance framework.",
            "D. Utilizing big data technologies."
        ],
        answer: "C",
        explanation: "Implementing a data governance framework best enables long-term data quality improvement. A governance framework establishes sustained accountability, standards, policies, and processes for managing data quality across the organization, creating the structural foundation for continuous improvement."
    },
    {
        id: 92,
        question: "An IS auditor is reviewing the backup procedures in an organization that has high volumes of data with frequent changes to transactions. Which of the following is the BEST backup scheme to recommend given the need for a shorter restoration time in the event of a disruption?",
        options: [
            "A. Mirror backup.",
            "B. Differential backup.",
            "C. Full backup.",
            "D. Incremental backup."
        ],
        answer: "B",
        explanation: "Differential backup is the best scheme for shorter restoration time with high-volume, frequently changing data. Restoration requires only the last full backup plus the latest differential backup (two sets), whereas incremental requires the full backup plus all incremental sets, making differential faster to restore."
    },
    {
        id: 93,
        question: "Which of the following is an IS auditor's BEST approach when low-risk anomalies have been identified?",
        options: [
            "A. Document the anomalies in audit work papers.",
            "B. Deprioritize further testing of the anomalies and refocus on issues with higher risk.",
            "C. Update the audit plan to include the information collected during the audit.",
            "D. Ask auditees to promptly remediate the anomalies."
        ],
        answer: "A",
        explanation: "Documenting low-risk anomalies in audit work papers is the best approach. Even low-risk findings should be documented to maintain a complete record, support future audits, and create an audit trail. Documentation does not preclude focusing primary attention on higher-risk areas."
    },
    {
        id: 94,
        question: "An organization plans to replace its nightly batch processing backup to magnetic tape with real-time replication to a second data center. Which of the following is the GREATEST risk associated with this change?",
        options: [
            "A. Reduced system performance.",
            "B. Inability to recover from cybersecurity attacks.",
            "C. Version control issues.",
            "D. Increase in IT investment cost."
        ],
        answer: "B",
        explanation: "The inability to recover from cybersecurity attacks is the greatest risk. Real-time replication immediately mirrors all changes — including those caused by ransomware or malware — to the second data center, eliminating the ability to recover from a point in time before the attack occurred."
    },
    {
        id: 95,
        question: "Which of the following BEST contributes to the quality of an audit of a business-critical application?",
        options: [
            "A. Involving the application owner early in the audit planning process.",
            "B. Assigning the audit to independent external auditors.",
            "C. Identifying common coding errors made by the development team.",
            "D. Reviewing previous findings reported by the application owner."
        ],
        answer: "A",
        explanation: "Involving the application owner early in planning best contributes to audit quality. Early engagement ensures the auditor understands the application's business context, risks, and processes, enabling a more focused and relevant audit scope that addresses the most significant areas of concern."
    },
    {
        id: 96,
        question: "Which of the following is MOST helpful to a data owner when classifying the organization's data?",
        options: [
            "A. Risk assessment results.",
            "B. Existing protection levels.",
            "C. Data retention policy.",
            "D. Corporate privacy statement."
        ],
        answer: "A",
        explanation: "Risk assessment results are most helpful to data owners when classifying data. Risk assessments identify the potential impact of unauthorized disclosure, modification, or loss of data, giving data owners the information needed to assign appropriate sensitivity levels based on actual risk exposure."
    },
    {
        id: 97,
        question: "Which of the following presents the GREATEST threat to an organization's entire virtual infrastructure?",
        options: [
            "A. Change management processes are inefficient.",
            "B. Changes are pushed to production during business hours.",
            "C. Local authentication is used for guest systems.",
            "D. The virtual machine image has not been standardized."
        ],
        answer: "C",
        explanation: "Local authentication for guest systems presents the greatest threat to the entire virtual infrastructure. Local authentication bypasses centralized identity management and access controls, making it difficult to enforce security policies, detect unauthorized access, or revoke credentials across the environment."
    },
    {
        id: 98,
        question: "Which of the following is MOST useful when planning to audit an organization's compliance with cybersecurity regulations in foreign countries?",
        options: [
            "A. Develop a template that standardizes the reporting of findings from each country's audit team.",
            "B. Map the different regulatory requirements to the organization's IT governance framework.",
            "C. Follow the cybersecurity regulations of the country with the most stringent requirements.",
            "D. Prioritize the audit to focus on the country presenting the greatest amount of operational risk."
        ],
        answer: "B",
        explanation: "Mapping different regulatory requirements to the IT governance framework is most useful. This approach identifies gaps between current controls and each jurisdiction's requirements, enabling systematic compliance assessment and remediation planning across multiple regulatory environments."
    },
    {
        id: 99,
        question: "During an IT governance review, an IS auditor finds that all IT expenditures are included as a single line item in the enterprise-wide budget. Which of the following documentation would provide the BEST evidence for evaluating how IT expenditures support business objectives?",
        options: [
            "A. Profit and loss statements.",
            "B. IT steering committee approval.",
            "C. Business impact analysis (BIA).",
            "D. IT purchase orders."
        ],
        answer: "B",
        explanation: "IT steering committee approval documents provide the best evidence. Steering committee records show which IT investments were reviewed, prioritized, and approved in the context of business objectives, demonstrating how spending decisions were linked to strategic and operational goals."
    },
    {
        id: 100,
        question: "Which of the following controls BEST ensures the integrity of data exchanged between two systems?",
        options: [
            "A. Data classification.",
            "B. Encryption.",
            "C. Hash values.",
            "D. Control totals."
        ],
        answer: "C",
        explanation: "Hash values best ensure data integrity between systems. A hash is a unique mathematical fingerprint of data; if any data is altered during exchange, the hash will not match, immediately detecting any modification, corruption, or tampering with the transferred data."
    },
    {
        id: 101,
        question: "An IS auditor suspects a company-owned computer may have been involved in illegal trading activities. What is the BEST way for the auditor to proceed?",
        options: [
            "A. Notify law enforcement.",
            "B. Install monitoring tools on the computer.",
            "C. Isolate and save backups.",
            "D. Escalate the concern to audit management."
        ],
        answer: "D",
        explanation: "Escalating to audit management is the best immediate action. The auditor should not independently decide how to handle suspected illegal activity; audit management must be informed so the organization can engage legal counsel, determine appropriate investigative steps, and ensure evidence is handled properly."
    },
    {
        id: 102,
        question: "Which of the following BEST enables an organization to improve the effectiveness of its incident response team?",
        options: [
            "A. Ensuring all team members understand information systems technology.",
            "B. Increasing the mean resolution time and publishing key performance indicator (KPI) metrics.",
            "C. Conducting periodic testing and incorporating lessons learned.",
            "D. Disseminating incident response procedures and requiring signed acknowledgment by team members."
        ],
        answer: "C",
        explanation: "Conducting periodic testing and incorporating lessons learned best improves incident response effectiveness. Regular exercises expose gaps in capabilities and procedures, while incorporating lessons learned ensures the team continuously improves based on real experience and exercise outcomes."
    },
    {
        id: 103,
        question: "An IS auditor detects that event logging has been disabled on a critical server. Which of the following is the GREATEST concern?",
        options: [
            "A. Users have the ability to disable logging.",
            "B. Organizational policies do not prohibit disabling of event logs.",
            "C. The ability to troubleshoot incidents is limited.",
            "D. Unauthorized transactions may go undetected."
        ],
        answer: "D",
        explanation: "Unauthorized transactions going undetected is the greatest concern. Without event logging, there is no audit trail to detect or investigate unauthorized access or transactions on a critical server, removing a fundamental detective control and creating significant accountability and security gaps."
    },
    {
        id: 104,
        question: "An IS auditor has identified deficiencies within the organization's software development life cycle policies. Which of the following should be done NEXT?",
        options: [
            "A. Escalate the situation to the lead auditor.",
            "B. Identify who approved the policies.",
            "C. Document the findings in the audit report.",
            "D. Communicate the observation to the auditee."
        ],
        answer: "D",
        explanation: "Communicating the observation to the auditee should be done next. Per audit standards, findings should be discussed with the auditee before being finalized in the report, giving them the opportunity to provide additional context, clarify misunderstandings, or acknowledge the issue."
    },
    {
        id: 105,
        question: "Which of the following is MOST important for an IS auditor to confirm when reviewing an organization's incident response management program?",
        options: [
            "A. All identified incidents are escalated to the CEO and the CISO.",
            "B. The alerting tools and incident response team can detect incidents.",
            "C. Incident response is within defined service level agreements (SLAs).",
            "D. All incidents have a severity level assigned."
        ],
        answer: "B",
        explanation: "Confirming that alerting tools and the incident response team can actually detect incidents is most important. Detection capability is the foundational requirement; if incidents cannot be detected, all downstream response processes are irrelevant and the organization is effectively blind to security events."
    },
    {
        id: 106,
        question: "Which of the following is the MOST important area of focus for an IS auditor when developing a risk-based audit strategy?",
        options: [
            "A. Business processes.",
            "B. Recent audit results.",
            "C. Critical business applications.",
            "D. Existing IT controls."
        ],
        answer: "A",
        explanation: "Business processes are the most important focus area when developing a risk-based audit strategy. Business processes are where value is created and where risks ultimately manifest; aligning the audit strategy to business processes ensures the audit addresses risks that matter most to the organization."
    },
    {
        id: 107,
        question: "Which of the following is MOST important for an IS auditor to verify during an audit closing meeting?",
        options: [
            "A. The findings and agreed-upon resolutions are communicated to executive management.",
            "B. The agreed-upon resolutions are cost-effective and do not disrupt the business.",
            "C. The organization has the applicable resources to implement the agreed-upon resolutions.",
            "D. The agreed-upon resolutions and the time allotted to address the findings are correct."
        ],
        answer: "D",
        explanation: "Verifying that agreed-upon resolutions and timeframes are correct is most important at the closing meeting. This ensures both parties have a shared, accurate understanding of commitments before the meeting concludes, forming the basis for effective follow-up and accountability."
    },
    {
        id: 108,
        question: "Which of the following is the GREATEST benefit of an effective data classification process?",
        options: [
            "A. Data retention periods are well defined.",
            "B. Data is protected according to its sensitivity.",
            "C. Data custodians are identified.",
            "D. Appropriate ownership over data is assigned."
        ],
        answer: "B",
        explanation: "Protecting data according to its sensitivity is the greatest benefit of data classification. Classification ensures that the level of security controls applied to data is proportional to its value and risk, preventing both under-protection of sensitive data and wasteful over-protection of non-sensitive data."
    },
    {
        id: 109,
        question: "Which of the following is MOST important for an IS auditor to verify when an organization is preparing to implement a data loss prevention (DLP) system?",
        options: [
            "A. Whether the organization has defined what data it wants to protect.",
            "B. Whether the organization has developed DLP training.",
            "C. Whether the system rollout covers the entire organization.",
            "D. Whether decisions have been made about handling false positives."
        ],
        answer: "A",
        explanation: "Verifying that the organization has defined what data to protect is most important. A DLP system requires clearly defined sensitive data types and policies to function; without this definition, the system cannot be configured to detect and prevent the loss of the right information."
    },
    {
        id: 110,
        question: "Which of the following is the BEST indication of effective governance over IT infrastructure?",
        options: [
            "A. A decrease in the number of information security incidents.",
            "B. A requirement for annual security awareness programs.",
            "C. The ability to deliver continuous, reliable performance.",
            "D. An increase in the number of IT infrastructure servers."
        ],
        answer: "C",
        explanation: "The ability to deliver continuous, reliable performance is the best indication of effective IT infrastructure governance. Reliability and availability demonstrate that infrastructure is well-managed, maintained, and governed to meet business needs consistently."
    },
    {
        id: 111,
        question: "During a physical security audit, an IS auditor was provided a proximity badge that granted access to three specific floors in a corporate office building. Which of the following issues should be of MOST concern?",
        options: [
            "A. There was no requirement for an escort during fieldwork.",
            "B. The proximity badge did not work for the first two days of audit fieldwork.",
            "C. There was no follow-up for unsuccessful attempted access violations.",
            "D. The proximity badge incorrectly granted access to restricted areas."
        ],
        answer: "D",
        explanation: "The proximity badge incorrectly granting access to restricted areas is the most significant concern. This indicates a failure in access control configuration, meaning unauthorized individuals (or those with incorrectly provisioned badges) could access sensitive areas, creating a serious physical security vulnerability."
    },
    {
        id: 112,
        question: "An IS auditor learns that a web application within the audit scope has a vulnerability that could lead to the exposure of sensitive data. Which of the following should the auditor do FIRST?",
        options: [
            "A. Assess the risk and include all systems using the web application in the audit.",
            "B. Determine the current version of the application.",
            "C. Recommend implementing compensating controls.",
            "D. Notify management and system business owners of the issue."
        ],
        answer: "D",
        explanation: "Notifying management and system business owners is the first action. When a significant vulnerability is identified that could immediately expose sensitive data, the auditor has a professional obligation to communicate this promptly so management can take timely action to reduce the risk."
    },
    {
        id: 113,
        question: "Which of the following documents is MOST likely to include an audit's quality assurance (QA) process?",
        options: [
            "A. Audit charter.",
            "B. Post-audit review.",
            "C. Audit scope.",
            "D. Audit report."
        ],
        answer: "A",
        explanation: "The audit charter is most likely to include the QA process. The charter is the foundational governance document for the audit function, establishing its purpose, authority, responsibilities, and quality standards — including the processes used to ensure audit quality and compliance with professional standards."
    },
    {
        id: 114,
        question: "A review of an organization's balance sheet for material transactions and an application review of the program that produced the balance sheet would use which of the following sampling methods?",
        options: [
            "A. Variable sampling.",
            "B. Judgmental sampling.",
            "C. Discovery sampling.",
            "D. Stop-or-go sampling."
        ],
        answer: "B",
        explanation: "Judgmental sampling is used when the auditor applies professional expertise to select specific items based on their significance or risk characteristics. Reviewing material transactions on a balance sheet involves selecting items based on size, nature, or risk — classic judgmental sampling criteria."
    },
    {
        id: 115,
        question: "During an operational audit on the procurement department, the audit team encounters a key system that uses an artificial intelligence (AI) algorithm. The audit team does not have the necessary knowledge to proceed with the audit. Which of the following is the BEST way to handle this situation?",
        options: [
            "A. Delay the audit until the team receives training on AI.",
            "B. Perform a skills assessment to identify members from other business units with knowledge of AI.",
            "C. Remove the AI portion from the audit scope and proceed with the audit.",
            "D. Engage external consultants who have audit experience and knowledge of AI."
        ],
        answer: "D",
        explanation: "Engaging external consultants with both audit experience and AI knowledge is the best approach. This ensures the audit can proceed on schedule with the appropriate expertise, maintaining audit quality and completeness without removing a potentially critical risk area from scope."
    },
    {
        id: 116,
        question: "Which of the following is the BEST way for an IS auditor to verify whether help desk tickets are being managed by IT support in accordance with business expectations?",
        options: [
            "A. Compare the response and resolution times against the service level agreement (SLA).",
            "B. Review end user satisfaction survey results.",
            "C. Review IT management metrics reported quarterly to the board.",
            "D. Compare the resolved date and the due date recorded on the help desk tickets."
        ],
        answer: "A",
        explanation: "Comparing response and resolution times against SLAs is the best verification method. SLAs represent the formal, agreed-upon business expectations; direct comparison of actual performance data against SLA targets provides objective, measurable evidence of compliance with business expectations."
    },
    {
        id: 117,
        question: "Which of the following should be given GREATEST consideration when implementing the use of an open-source product?",
        options: [
            "A. Usability.",
            "B. Confidentiality.",
            "C. Performance.",
            "D. Support."
        ],
        answer: "D",
        explanation: "Support is the greatest consideration for open-source products. Unlike commercial software, open-source products may lack dedicated vendor support, meaning the organization must rely on community forums, internal expertise, or third-party support contracts — making support availability and quality a critical implementation risk."
    },
    {
        id: 118,
        question: "Who is responsible for authorizing data access for users?",
        options: [
            "A. Information owner.",
            "B. Chief information officer (CIO).",
            "C. Security administrator.",
            "D. Database administrator (DBA)."
        ],
        answer: "A",
        explanation: "The information owner is responsible for authorizing data access. As the accountable party for specific data assets, the information owner determines who should have access and at what level, while the security administrator implements those access decisions technically."
    },
    {
        id: 119,
        question: "Which of the following BEST facilitates compliance with requirements mandating the security of confidential data?",
        options: [
            "A. Encryption of external data transmissions.",
            "B. Standardized escalation protocols for breaches.",
            "C. Classification of data.",
            "D. Signed acknowledgment of security policies."
        ],
        answer: "C",
        explanation: "Classification of data best facilitates compliance with confidentiality requirements. Classification identifies which data is confidential, enabling appropriate security controls to be applied consistently to the right data, ensuring compliance requirements are met for the data that actually needs protection."
    },
    {
        id: 120,
        question: "Which of the following MOST effectively reduces the probability of a brute force attack being successful?",
        options: [
            "A. Establishing an account lockout policy.",
            "B. Establishing account activity timeouts.",
            "C. Increasing password change frequency.",
            "D. Requiring minimum password length."
        ],
        answer: "A",
        explanation: "An account lockout policy most effectively reduces brute force attack success probability. By locking accounts after a defined number of failed attempts, it prevents attackers from making the unlimited attempts needed to guess passwords through brute force, rendering the attack impractical."
    },
    {
        id: 121,
        question: "Which of the following software versions would an IS auditor MOST likely find in the production environment during a post-deployment review?",
        options: [
            "A. The version used in the test environment.",
            "B. The version used in the staging environment.",
            "C. The version used in the development environment.",
            "D. The version used in the integration environment."
        ],
        answer: "B",
        explanation: "The version used in the staging environment should be in production. Staging serves as the final pre-production environment where the release candidate is validated; the version promoted from staging to production should be identical to what was tested there, ensuring no unauthorized changes were introduced."
    },
    {
        id: 122,
        question: "Which of the following is the MOST significant issue that could result when two separate release management schedules are maintained by different areas within IT?",
        options: [
            "A. The appropriate IT resources may not be available to deploy releases.",
            "B. Releases may not be approved by the appropriate individuals.",
            "C. Conflicting IT changes may be released at the same time.",
            "D. Inefficiencies may result in increased costs."
        ],
        answer: "C",
        explanation: "Conflicting IT changes being released simultaneously is the most significant risk. Without a unified release schedule, changes from different teams may interact unpredictably, causing system failures, data corruption, or application errors that are difficult to diagnose and reverse."
    },
    {
        id: 123,
        question: "The business case for an information system investment should be available for review until the:",
        options: [
            "A. information system investment is retired.",
            "B. formal investment decision is approved.",
            "C. information system has reached end of life.",
            "D. benefits have been fully realized."
        ],
        answer: "D",
        explanation: "The business case should be available until benefits have been fully realized. It serves as the benchmark for measuring whether the investment delivered its promised value; keeping it available enables ongoing benefits realization tracking and accountability throughout the system's productive life."
    },
    {
        id: 124,
        question: "Which of the following sampling methodologies is PRIMARILY used to detect significant deficiencies?",
        options: [
            "A. Discovery sampling.",
            "B. Compliance testing.",
            "C. Attribute sampling.",
            "D. Substantive testing."
        ],
        answer: "A",
        explanation: "Discovery sampling is primarily used to detect significant deficiencies. It is designed to find at least one occurrence of a specific type of irregularity or critical error within a population, making it ideal for uncovering significant control deficiencies or fraud indicators."
    },
    {
        id: 125,
        question: "Management has learned the implementation of a new IT system will not be completed on time and has requested an audit. Which of the following audit findings should be of GREATEST concern?",
        options: [
            "A. Milestones have not been defined for all project products.",
            "B. The project manager lacks formal certification.",
            "C. Tasks defined on the critical path do not have resources allocated.",
            "D. The actual start times of some activities were later than originally scheduled."
        ],
        answer: "C",
        explanation: "Critical path tasks without allocated resources are the greatest concern. The critical path determines the minimum project duration; tasks on this path without resources will definitely cause delays and there is no float to absorb overruns, making this a direct and certain cause of the delay."
    },
    {
        id: 126,
        question: "Which of the following is MOST important to include when developing a business continuity plan (BCP)?",
        options: [
            "A. Details of linked security policies.",
            "B. Plans for addressing all types of threats.",
            "C. Criteria for triggering the plan.",
            "D. Details of a comprehensive asset inventory."
        ],
        answer: "C",
        explanation: "Criteria for triggering the plan are most important to include in a BCP. Without clear trigger criteria, the organization may fail to activate the BCP when needed, activate it prematurely, or spend time debating whether the situation warrants activation during a crisis, delaying effective response."
    },
    {
        id: 127,
        question: "During a project audit, an IS auditor notes that project reporting does not accurately reflect current progress. Which of the following is the GREATEST resulting impact?",
        options: [
            "A. The project manager will have to be replaced.",
            "B. The project steering committee cannot provide effective governance.",
            "C. The project reporting to the board of directors will be incomplete.",
            "D. The project will not withstand a quality assurance (QA) review."
        ],
        answer: "B",
        explanation: "The inability to provide effective governance is the greatest impact. The steering committee depends on accurate reporting to make informed decisions about resources, scope, and direction; inaccurate reports lead to misinformed decisions that can cause project failure or significant cost and schedule overruns."
    },
    {
        id: 128,
        question: "Which of the following is an IS auditor's BEST recommendation for mitigating risk associated with inadvertent disclosure of sensitive information by employees?",
        options: [
            "A. Cryptographic protection.",
            "B. Data loss prevention (DLP) technologies.",
            "C. Intrusion prevention system (IPS) and firewalls.",
            "D. Email phishing simulation exercises."
        ],
        answer: "B",
        explanation: "DLP technologies are the best mitigation for inadvertent sensitive information disclosure. DLP monitors and controls data in motion, in use, and at rest, automatically detecting and blocking the transmission of sensitive information regardless of whether the disclosure is intentional or accidental."
    },
    {
        id: 129,
        question: "Which of the following is the MOST effective control over visitor access to highly secured areas?",
        options: [
            "A. Visitors are required to enter through dead-man doors.",
            "B. Visitors are monitored online by security cameras.",
            "C. Visitors are required to be escorted by authorized personnel.",
            "D. Visitors are required to use biometric authentication."
        ],
        answer: "C",
        explanation: "Requiring escorts by authorized personnel is the most effective control for visitor access to highly secured areas. An escort provides active, continuous supervision of visitors, preventing them from accessing unauthorized areas, tampering with equipment, or gathering sensitive information unobserved."
    },
    {
        id: 130,
        question: "Which of the following BEST supports the effectiveness of a compliance program?",
        options: [
            "A. Assessing and tracking all compliance audit findings.",
            "B. Implementing a governance, risk, and compliance (GRC) tool to track compliance to regulations.",
            "C. Monitoring which compliance regulations apply to the organization.",
            "D. Implementing an awareness plan regarding compliance regulation requirements."
        ],
        answer: "A",
        explanation: "Assessing and tracking all compliance audit findings best supports program effectiveness. Systematic tracking ensures findings are not lost, remediation progress is monitored, recurring issues are identified, and the program demonstrates accountability for addressing compliance gaps."
    },
    {
        id: 131,
        question: "Which of the following is MOST important for an IS auditor to confirm during the implementation phase of a new system?",
        options: [
            "A. Accuracy of error reports in recognizing erroneous data.",
            "B. Whether system objectives and requirements were documented.",
            "C. Whether appropriate internal controls are in place.",
            "D. System parameters for scheduling and running the system."
        ],
        answer: "C",
        explanation: "Confirming that appropriate internal controls are in place during implementation is most important. Implementation is the critical juncture where controls must be correctly built into the system; inadequate controls discovered after go-live are significantly more costly and disruptive to remediate."
    },
    {
        id: 132,
        question: "Which of the following BEST enables an organization to identify potential security threats associated with a virtualization technique proposed by the vendor of a popular virtual machine (VM) system?",
        options: [
            "A. Architecture design.",
            "B. Functional specifications.",
            "C. Risk assessment.",
            "D. Hypervisor logs."
        ],
        answer: "C",
        explanation: "A risk assessment best identifies potential security threats associated with a proposed virtualization technique. It systematically evaluates the technology, its attack surface, known vulnerabilities, and threat scenarios, providing a structured and comprehensive view of security risks before adoption."
    },
    {
        id: 133,
        question: "During a follow-up audit, an IS auditor finds that the auditee has updated virus scanner definitions without adopting the original audit recommendation to increase the frequency of using the scanner. The MOST appropriate action for the auditor is to:",
        options: [
            "A. modify the audit opinion based on the new information available.",
            "B. prepare a follow-up audit report reiterating the recommendation.",
            "C. escalate the issue to senior management.",
            "D. conclude that the residual risk is beyond tolerable levels of risk."
        ],
        answer: "B",
        explanation: "Preparing a follow-up audit report reiterating the recommendation is the most appropriate action. The original recommendation was not implemented as required; the auditor should formally document this in a follow-up report, maintaining the finding until management either implements the recommendation or formally accepts the risk."
    },
    {
        id: 134,
        question: "Which of the following BEST demonstrates alignment of the IT department with the corporate mission?",
        options: [
            "A. Annual board meetings.",
            "B. Biweekly reporting to senior management.",
            "C. Quarterly steering committee meetings.",
            "D. Analysis of IT department functionality."
        ],
        answer: "C",
        explanation: "Quarterly steering committee meetings best demonstrate IT-business alignment. Regular steering committee meetings provide a structured forum where IT direction, investments, and priorities are reviewed against corporate mission and strategy, ensuring ongoing, documented alignment."
    },
    {
        id: 135,
        question: "What is the FIRST step when creating a data classification program?",
        options: [
            "A. Develop a policy.",
            "B. Develop data process maps.",
            "C. Categorize and prioritize data.",
            "D. Categorize information by owner."
        ],
        answer: "A",
        explanation: "Developing a policy is the first step in creating a data classification program. The policy establishes the framework, classification categories, roles and responsibilities, and requirements that guide all subsequent activities such as identifying data, assigning classifications, and implementing controls."
    },
    {
        id: 136,
        question: "Which of the following presents the GREATEST concern for an organization that plans to interconnect client databases across national borders?",
        options: [
            "A. Accountability to domestic clients.",
            "B. Secure communication protocols.",
            "C. Legal compliance requirements.",
            "D. Ownership of the client databases."
        ],
        answer: "C",
        explanation: "Legal compliance requirements are the greatest concern for cross-border database interconnection. Different countries have varying data protection, privacy, and sovereignty laws governing how personal and business data can be stored, transferred, and processed across borders, creating complex and potentially conflicting compliance obligations."
    },
    {
        id: 137,
        question: "Which of the following indicates an effective change control environment?",
        options: [
            "A. There is version control for the program documentation.",
            "B. User management formally approves change requests.",
            "C. Release management is automated.",
            "D. The quality assurance (QA) group reports to the application development manager."
        ],
        answer: "B",
        explanation: "Formal user management approval of change requests best indicates an effective change control environment. This demonstrates that changes are subject to proper authorization before implementation, ensuring business stakeholders review and sanction changes that will affect their operations."
    },
    {
        id: 138,
        question: "Which of the following would provide an organization with the GREATEST assurance that a service provider's controls for destroying personally identifiable information (PII) are operating effectively?",
        options: [
            "A. Documentation of internal review of privacy controls conducted by the service provider's IT audit department.",
            "B. Crypto-shredding policy obtained from the service provider's secure media disposal vendor.",
            "C. External review of the service provider's implementation of privacy and security controls.",
            "D. Service provider management assertions of compliance with privacy laws and regulations."
        ],
        answer: "C",
        explanation: "An external review of the service provider's privacy and security control implementation provides the greatest assurance. Independent third-party assessment is the most objective and credible form of assurance, free from the conflicts of interest inherent in self-reported or internally conducted reviews."
    },
    {
        id: 139,
        question: "Which of the following findings would be of GREATEST concern to an IS auditor assessing an organization's patch management process?",
        options: [
            "A. The organization's software inventory is not complete.",
            "B. Testing patches takes significant time.",
            "C. Applications frequently need to be rebooted for patches to take effect.",
            "D. Software vendors are bundling patches."
        ],
        answer: "A",
        explanation: "An incomplete software inventory is the greatest concern. Without knowing all the software installed in the environment, the organization cannot ensure all systems are patched, leaving unknown vulnerabilities unaddressed. Patch management is fundamentally impossible without a complete picture of what needs to be patched."
    },
    {
        id: 140,
        question: "During planning for a cloud service audit, audit management becomes aware that the assigned IS auditor is unfamiliar with the technologies in use and their associated risks to the business. To ensure audit quality, which of the following actions should audit management consider FIRST?",
        options: [
            "A. Conduct a follow-up audit after a suitable period has elapsed.",
            "B. Reassign the audit to an internal audit subject matter expert.",
            "C. Reschedule the audit assignment for the next financial year.",
            "D. Extend the duration of the audit to give the auditor more time."
        ],
        answer: "B",
        explanation: "Reassigning to an internal subject matter expert is the first action to consider. Audit quality standards require that audit work be performed by personnel with appropriate knowledge and skills; reassigning to a qualified internal expert ensures the audit proceeds with the necessary technical competence."
    },
    {
        id: 141,
        question: "An IS audit reveals that an organization operating in business continuity mode during a pandemic situation has not performed a simulation test of the business continuity plan (BCP). Which of the following is the auditor's BEST course of action?",
        options: [
            "A. Raise an audit issue for the lack of simulated testing.",
            "B. Review the effectiveness of the business response.",
            "C. Interview staff members to obtain commentary on the BCP's effectiveness.",
            "D. Confirm the BCP has been recently updated."
        ],
        answer: "B",
        explanation: "Reviewing the effectiveness of the actual business response is the best course of action. Since the organization is actively operating in business continuity mode, the auditor has a unique opportunity to evaluate real-world BCP effectiveness, which is more valuable than noting the absence of a simulation."
    },
    {
        id: 142,
        question: "Which of the following is BEST used for detailed testing of a business application's data and configuration files?",
        options: [
            "A. Utility software.",
            "B. Audit hooks.",
            "C. Audit analytics tool.",
            "D. Version control software."
        ],
        answer: "C",
        explanation: "An audit analytics tool is best for detailed testing of application data and configuration files. These tools can analyze large volumes of data, apply complex test conditions, identify anomalies, and produce comprehensive results that demonstrate whether application data and configurations meet control requirements."
    },
    {
        id: 143,
        question: "Which of the following BEST enables a benefits realization process for a system development project?",
        options: [
            "A. Metrics are evaluated immediately after the project has been implemented.",
            "B. Metrics for the project have been selected before the project begins.",
            "C. Project budget includes costs to execute the project and costs associated with the solution.",
            "D. Estimates of business benefits are backed by similar previously completed projects."
        ],
        answer: "B",
        explanation: "Selecting metrics before the project begins best enables benefits realization. Pre-defined metrics establish baseline measurements and success criteria against which outcomes can be objectively measured after implementation, making it possible to determine whether the project delivered its intended benefits."
    },
    {
        id: 144,
        question: "When auditing IT organizational structure, which of the following findings presents the GREATEST risk to an organization?",
        options: [
            "A. Increase in the frequency of software upgrades.",
            "B. Significantly higher turnover.",
            "C. Aging staff.",
            "D. Lack of customer satisfaction surveys."
        ],
        answer: "B",
        explanation: "Significantly higher IT staff turnover presents the greatest risk. High turnover leads to loss of institutional knowledge, increased errors by inexperienced replacements, project delays, service disruptions, and potential security risks as departing staff may take sensitive knowledge or access credentials."
    },
    {
        id: 145,
        question: "The PRIMARY objective of a control self-assessment (CSA) is to:",
        options: [
            "A. educate functional areas on risks and controls.",
            "B. ensure appropriate access controls are implemented.",
            "C. gain assurance for business functions that cannot be audited.",
            "D. eliminate the audit risk by leveraging management's analysis."
        ],
        answer: "A",
        explanation: "The primary objective of a CSA is to educate functional areas on risks and controls. CSAs engage process owners and staff in assessing their own control environment, building risk awareness, accountability, and a risk-conscious culture within the business."
    },
    {
        id: 146,
        question: "A staff accountant regularly uploads spreadsheets with inventory levels to the organization's financial reporting system. The transfers are executed through a customized interface created by an in-house developer. Which of the following is MOST important for the IS auditor to confirm during a review of the interface?",
        options: [
            "A. The data in the spreadsheet is correctly recorded in the financial system.",
            "B. The financial system transfers are performed by the accountant at predefined intervals.",
            "C. The spreadsheets do not contain malware or malicious macros.",
            "D. The data transfer connection does not support full duplex communication."
        ],
        answer: "A",
        explanation: "Confirming that spreadsheet data is correctly recorded in the financial system is most important. This validates the accuracy and completeness of the interface, ensuring that inventory data used for financial reporting is faithfully transferred without errors, omissions, or distortions."
    },
    {
        id: 147,
        question: "A new regulation has been enacted that mandates specific information security practices for the protection of customer data. Which of the following is MOST useful for an IS auditor to review when auditing against the regulation?",
        options: [
            "A. Compliance gap analysis.",
            "B. Customer data protection roles and responsibilities.",
            "C. Customer data flow diagram.",
            "D. Benchmarking studies of adaptation to the new regulation."
        ],
        answer: "A",
        explanation: "A compliance gap analysis is most useful when auditing against a new regulation. It systematically maps the regulation's requirements against existing controls, identifying specific areas where the organization falls short, enabling focused audit testing on the most significant compliance gaps."
    },
    {
        id: 148,
        question: "What is the BEST way for an IS auditor to test the effectiveness of physical security controls for an organization's data center?",
        options: [
            "A. Compare physical security controls against industry best practice.",
            "B. Inspect surveillance footage of the data center.",
            "C. Conduct an onsite inspection of physical security at the data center.",
            "D. Review badge access logs for the data center."
        ],
        answer: "C",
        explanation: "An onsite inspection is the best way to test physical security controls. It allows the auditor to directly observe, test, and verify controls such as locks, access readers, mantraps, cameras, and environmental controls, obtaining first-hand evidence of their presence and effectiveness."
    },
    {
        id: 149,
        question: "Which of the following is the PRIMARY benefit of a tabletop exercise for an incident response plan?",
        options: [
            "A. It increases confidence in the team's response readiness.",
            "B. It reduces the likelihood of an incident occurring.",
            "C. It identifies deficiencies in the operating environment.",
            "D. It demonstrates the maturity of the incident response program."
        ],
        answer: "A",
        explanation: "Increasing confidence in the team's response readiness is the primary benefit. Tabletop exercises walk team members through incident scenarios in a structured discussion, building familiarity with procedures, roles, and decision points so they can respond more effectively during an actual incident."
    },
    {
        id: 150,
        question: "Which of the following would BEST guide an IS auditor when determining an appropriate time to schedule the follow-up of agreed corrective actions for reported audit issues?",
        options: [
            "A. Business management has completed the implementation of agreed actions on schedule.",
            "B. Progress updates indicate that the implementation of agreed actions is on track.",
            "C. Sufficient time has elapsed since implementation to provide evidence of control operation.",
            "D. Regulators have announced a timeline for an inspection visit."
        ],
        answer: "C",
        explanation: "Sufficient time elapsed to provide evidence of control operation is the best guide for scheduling follow-up. The purpose of a follow-up is to verify that controls are operating effectively; this requires enough time to accumulate evidence of sustained operation, not just proof of initial implementation."
    },
    {
        id: 151,
        question: "An IS auditor finds that management has signed a contract with a new application service provider but did not obtain third-party audit reports as part of the due diligence process. Which of the following is the GREATEST risk associated with this finding?",
        options: [
            "A. Roles and responsibilities may not be understood.",
            "B. Service level agreements (SLAs) may not be achievable.",
            "C. Service provider controls may not be in place.",
            "D. Service provider policies may not be properly documented."
        ],
        answer: "C",
        explanation: "Service provider controls may not be in place is the greatest risk. Without third-party audit reports, the organization has no independent assurance that the provider has implemented adequate controls to protect data, ensure availability, and meet security requirements, creating significant unknown risk."
    },
    {
        id: 152,
        question: "In which of the following situations is it MOST appropriate to implement data mirroring as part of a recovery strategy?",
        options: [
            "A. When the mean time between failures (MTBF) is long.",
            "B. When the recovery point objective (RPO) is short.",
            "C. When disaster tolerance is low.",
            "D. When the risk of a ransomware attack is high."
        ],
        answer: "B",
        explanation: "Data mirroring is most appropriate when the RPO is short. Mirroring provides near-zero data loss by synchronously replicating all data changes in real time, making it ideal when the organization cannot tolerate losing more than seconds or minutes of data in a recovery scenario."
    },
    {
        id: 153,
        question: "An organization outsources its payroll function to a third-party service provider. Which of the following is MOST important for an IS auditor to verify when reviewing the outsourcing agreement?",
        options: [
            "A. The provider has agreed to a right-to-audit clause.",
            "B. The provider aligns with payroll industry best practices.",
            "C. The provider has a good service reputation.",
            "D. The provider has an extensive security training program."
        ],
        answer: "A",
        explanation: "A right-to-audit clause is most important to verify. Without this contractual right, the organization cannot independently assess the provider's controls over sensitive payroll data, making it impossible to obtain the assurance needed to meet governance, compliance, and fiduciary responsibilities."
    },
    {
        id: 154,
        question: "An IS audit team is evaluating documentation of the most recent application user access review. It is determined that the user list was not system generated. Which of the following should be of MOST concern?",
        options: [
            "A. Timeliness of the user list review.",
            "B. Availability of the user list.",
            "C. Completeness of the user list.",
            "D. Confidentiality of the user list."
        ],
        answer: "C",
        explanation: "Completeness of the user list is the most significant concern. A manually compiled user list may be incomplete, meaning some users — potentially unauthorized ones — may not have been included in the access review, leaving excessive or inappropriate access undetected and unremediated."
    },
    {
        id: 155,
        question: "Which of the following is MOST important for an organization to include in a software escrow agreement when outsourcing software development to a third party?",
        options: [
            "A. The escrow agent repository is to be updated as the software product evolves.",
            "B. The escrow agent repository is to be subject to periodic audits by the organization.",
            "C. The escrow agent repository is to be securely protected against vendor access.",
            "D. The escrow agent repository is to be held in the organization's own country."
        ],
        answer: "A",
        explanation: "Ensuring the escrow repository is updated as the software evolves is most important. An escrow agreement only protects the organization if the deposited source code reflects the current version of the software; outdated code would be useless for maintaining or modifying the system in an emergency."
    },
    {
        id: 156,
        question: "During an annual payroll audit, an IS auditor identifies issues that were also in the previous year's audit. Which of the following is the GREATEST concern?",
        options: [
            "A. The client implemented alternative controls.",
            "B. Management has accepted the risk for this issue.",
            "C. The management action plan for the issue was extended.",
            "D. The client does not understand the issue."
        ],
        answer: "D",
        explanation: "The client not understanding the issue is the greatest concern. Without understanding the problem, management cannot implement effective remediation regardless of time or resources allocated. Lack of understanding suggests that even future action plans will be inadequate and the issue will recur indefinitely."
    },
    {
        id: 157,
        question: "An organization produces control reports with a desktop application that accesses data in the central production database. Which of the following would give an IS auditor concern about the reliability of these reports?",
        options: [
            "A. The reports are available to all end users.",
            "B. The report definitions file is not included in routine backups.",
            "C. The reports are printed by the same person who reviews them.",
            "D. The report definitions can be modified by end users."
        ],
        answer: "D",
        explanation: "User-modifiable report definitions are the greatest reliability concern. If end users can change how reports are generated — including which data is included, filtered, or calculated — reports may be intentionally or inadvertently manipulated to produce inaccurate or misleading results."
    },
    {
        id: 158,
        question: "Which of the following would BEST prevent an arbitrary application of a patch?",
        options: [
            "A. Database access control.",
            "B. Network based access controls.",
            "C. Established maintenance windows.",
            "D. Change management."
        ],
        answer: "D",
        explanation: "Change management best prevents arbitrary patch application. A formal change management process requires patches to be reviewed, tested, approved, and scheduled before deployment, preventing ad hoc or unauthorized patching that could destabilize systems or introduce new problems."
    },
    {
        id: 159,
        question: "In order for a firewall to effectively protect a network against external attacks, what fundamental practice must be followed?",
        options: [
            "A. Only essential external services should be permitted.",
            "B. The firewall must be placed in the demilitarized zone (DMZ).",
            "C. Filters for external information must be defined.",
            "D. All external communication must be via the firewall."
        ],
        answer: "A",
        explanation: "Permitting only essential external services is the fundamental practice for effective firewall protection. The principle of least privilege applied to network access ensures the attack surface is minimized; every permitted service that is not necessary represents an unnecessary risk."
    },
    {
        id: 160,
        question: "Which of the following tasks would cause the GREATEST segregation of duties (SoD) concern if performed by the person who reconciles the organization's device inventory?",
        options: [
            "A. Issuing devices to employees.",
            "B. Tracking devices used for spare parts.",
            "C. Approving the issuing of devices.",
            "D. Creating the device policy."
        ],
        answer: "C",
        explanation: "Approving device issuance while also reconciling inventory creates the greatest SoD concern. A person who both approves issuances and reconciles inventory could approve unauthorized device assignments and then conceal them during reconciliation, enabling asset fraud with no independent check."
    },
    {
        id: 161,
        question: "A client reviewing a preliminary version of the audit report asks whether a finding in the report could be eliminated or have its risk rating lowered upon retest and audit validation. What would be the auditor's MOST appropriate response?",
        options: [
            "A. The risk rating of the finding would need to be reassessed.",
            "B. The risk rating could be reduced once the issue is resolved.",
            "C. The finding could be removed from the report after being remediated.",
            "D. The report can reflect that a finding was identified but immediately fixed."
        ],
        answer: "A",
        explanation: "The risk rating would need to be reassessed based on new information. If the client has already implemented remediation, the auditor should evaluate the effectiveness of the fix and reassess the risk accordingly, maintaining objectivity rather than simply accepting the client's claim that the risk is resolved."
    },
    {
        id: 162,
        question: "Which of the following is the MOST effective audit approach to verify whether the projected benefits described in an IT project's business case are realistic?",
        options: [
            "A. Review of mitigation plans against business risk.",
            "B. Comparison against industry business practices.",
            "C. Review of the cost-benefit analysis performed by management.",
            "D. Interviews with business stakeholders."
        ],
        answer: "C",
        explanation: "Reviewing the cost-benefit analysis performed by management is the most effective approach. This analysis contains the assumptions, calculations, and supporting evidence behind projected benefits; reviewing it allows the auditor to assess whether the projections are based on realistic assumptions and sound methodology."
    },
    {
        id: 163,
        question: "When an organization is developing data classification standards, it is MOST important to ensure the standards:",
        options: [
            "A. are based on the business requirements for confidentiality of the information.",
            "B. are based on the business requirements for authentication of the information.",
            "C. align with the organization's IT capability maturity framework.",
            "D. align with the organization's segregation of duties requirements."
        ],
        answer: "A",
        explanation: "Data classification standards must be based on business requirements for confidentiality. Classification exists primarily to ensure information receives appropriate confidentiality protections; standards grounded in actual business confidentiality needs produce relevant, actionable categories that protect the right data."
    },
    {
        id: 164,
        question: "An IS auditor recommends that the most recent patches be applied to all virtualized devices. Management objects because it does not consider the recommendation feasible. Which of the following is the auditor's BEST course of action?",
        options: [
            "A. Insist that management create an action plan to address this risk.",
            "B. Conduct a cost-benefit analysis to determine the feasibility.",
            "C. Work with management to determine an acceptable alternative action plan.",
            "D. Perform additional analysis to demonstrate the actual impact of missing patches."
        ],
        answer: "C",
        explanation: "Working with management to determine an acceptable alternative action plan is the best course of action. When management raises feasibility concerns, the auditor should engage collaboratively to find a workable solution that adequately addresses the risk while accounting for operational constraints."
    },
    {
        id: 165,
        question: "During an IS audit of a data center, it was found that programmers are allowed to make emergency fixes to operational programs. Which of the following should be the IS auditor's PRIMARY recommendation?",
        options: [
            "A. Emergency program changes should be subject to program migration and testing procedures before they are applied to operational systems.",
            "B. Programmers should be allowed to implement emergency fixes only after obtaining verbal agreement from the application owner.",
            "C. Bypass user ID procedures should be put in place to ensure that the changes are subject to after-the-event approval and testing.",
            "D. The ability to undertake emergency fixes should be restricted to selected key personnel."
        ],
        answer: "A",
        explanation: "Emergency program changes should still follow migration and testing procedures before being applied to operational systems. Even in emergencies, untested code can cause additional failures; proper procedures — even expedited ones — reduce the risk of compounding problems with poorly tested fixes."
    },
    {
        id: 166,
        question: "An organization is establishing a steering committee for the implementation of a new enterprise resource planning (ERP) system that uses Agile project management methodology. What is the MOST important criterion for the makeup of this committee?",
        options: [
            "A. Agile project management experience.",
            "B. Senior management representation.",
            "C. Ability to meet the time commitment required.",
            "D. ERP implementation experience."
        ],
        answer: "B",
        explanation: "Senior management representation is the most important criterion. The steering committee's role is to provide governance, make key decisions, resolve escalations, and ensure resources are available; without senior management, the committee lacks the authority and organizational influence needed to fulfill this role."
    },
    {
        id: 167,
        question: "An organization's sensitive data is stored in a cloud computing environment and is encrypted. Which of the following findings should be of GREATEST concern to an IS auditor?",
        options: [
            "A. The cloud vendor does not have multi-regional presence.",
            "B. Symmetric keys are used for encryption.",
            "C. Data encryption keys are accessible to the service provider.",
            "D. The encryption keys are not kept under dual control."
        ],
        answer: "C",
        explanation: "The service provider having access to encryption keys is the greatest concern. If the cloud provider can access the keys, they can decrypt and read the sensitive data, rendering the encryption ineffective as a confidentiality control against insider threats or provider compromise."
    },
    {
        id: 168,
        question: "Which of the following is the BEST way to reduce the chance of false positive alerts in an intrusion prevention system (IPS) from interrupting network communications?",
        options: [
            "A. Classify alerts from the IPS by event category.",
            "B. Shift the architecture to a host-based IPS configuration.",
            "C. Complement IPS return signals with firewall alerts.",
            "D. Conduct periodic IPS performance fine-tuning."
        ],
        answer: "D",
        explanation: "Periodic IPS performance fine-tuning is the best way to reduce false positives. Regular tuning adjusts detection rules and thresholds based on the organization's specific traffic patterns and environment, progressively reducing misidentification of legitimate traffic as malicious."
    },
    {
        id: 169,
        question: "To ensure adequate security and controls in e-commerce applications, which of the following manages the certificate life cycle of public key pairs?",
        options: [
            "A. Certification revocation list (CRL).",
            "B. Certification practice statement (CPS).",
            "C. Registration authority (RA).",
            "D. Certification authority (CA)."
        ],
        answer: "D",
        explanation: "The Certification Authority (CA) manages the certificate life cycle of public key pairs. The CA issues, renews, and revokes digital certificates, maintaining the trustworthiness of the public key infrastructure upon which e-commerce security depends."
    },
    {
        id: 170,
        question: "In an online application, which of the following would provide the MOST information about the transaction audit trail?",
        options: [
            "A. System/process flowchart.",
            "B. Source code documentation.",
            "C. File layouts.",
            "D. Data classification schema."
        ],
        answer: "A",
        explanation: "A system/process flowchart provides the most information about transaction audit trails. It visually maps how transactions flow through the system — including all processing steps, decision points, inputs, and outputs — enabling the auditor to understand where audit trail data is captured at each stage."
    }
];