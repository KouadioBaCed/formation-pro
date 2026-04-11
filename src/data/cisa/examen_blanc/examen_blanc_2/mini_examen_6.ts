export const questionsCISA6 = [
    {
        id: 1,
        question: "An organization has established hiring policies and procedures designed specifically to ensure network administrators are well qualified. Which type of control is in place?",
        options: [
            "A. Directive.",
            "B. Detective.",
            "C. Compensating.",
            "D. Corrective."
        ],
        answer: "A",
        explanation: "Directive controls guide behavior and establish expectations to prevent issues before they occur. Hiring policies that ensure staff are well qualified direct the organization toward desired outcomes by specifying requirements upfront, rather than detecting or correcting problems after the fact."
    },
    {
        id: 2,
        question: "A review of IT interface controls finds an organization does not have a process to identify and correct records that do not get transferred to the receiving system. Which of the following is the IS auditor's BEST recommendation?",
        options: [
            "A. Automate the transfer of data between systems as much as feasible.",
            "B. Enable automatic encryption, decryption, and electronic signing of data files.",
            "C. Have coders perform manual reconciliation of data between systems.",
            "D. Implement software to perform automatic reconciliations of data between systems."
        ],
        answer: "D",
        explanation: "Implementing software for automatic reconciliation is the best recommendation because it systematically detects and flags records that fail to transfer, enabling prompt correction. Automated reconciliation is more reliable and complete than manual processes and specifically addresses the identified gap."
    },
    {
        id: 3,
        question: "Which of the following would BEST help to ensure that an incident receives attention from appropriate personnel in a timely manner?",
        options: [
            "A. Implementing incident escalation procedures.",
            "B. Completing the incident management log.",
            "C. Broadcasting an emergency message.",
            "D. Requiring a dedicated incident response team."
        ],
        answer: "A",
        explanation: "Incident escalation procedures define clear paths and triggers for elevating incidents to the appropriate level of attention based on severity and elapsed time. This ensures the right personnel are engaged promptly, preventing incidents from languishing without proper attention."
    },
    {
        id: 4,
        question: "A disaster recovery plan (DRP) should include steps for:",
        options: [
            "A. negotiating contracts with disaster planning consultants.",
            "B. identifying application control requirements.",
            "C. obtaining replacement supplies.",
            "D. assessing and quantifying risk."
        ],
        answer: "C",
        explanation: "Obtaining replacement supplies is an operational step that belongs in a DRP. The DRP must address the practical logistics of recovery, including how and where to obtain the equipment, consumables, and supplies needed to restore operations after a disaster."
    },
    {
        id: 5,
        question: "The use of which of the following is an inherent risk in the application container infrastructure?",
        options: [
            "A. Shared data.",
            "B. Shared registries.",
            "C. Shared kernel.",
            "D. Host operating system."
        ],
        answer: "C",
        explanation: "Shared kernel is the inherent risk in container infrastructure. Unlike virtual machines with separate OS kernels, containers share the host OS kernel. A vulnerability in or escape from one container can potentially affect the kernel and all other containers on the same host."
    },
    {
        id: 6,
        question: "An IS auditor reviewing a job scheduling tool notices performance and reliability problems. Which of the following is MOST likely affecting the tool?",
        options: [
            "A. Administrator passwords do not meet organizational security and complexity requirements.",
            "B. The number of support staff responsible for job scheduling has been reduced.",
            "C. Maintenance patches and the latest enhancement upgrades are missing.",
            "D. The scheduling tool was not classified as business-critical by the IT department."
        ],
        answer: "C",
        explanation: "Missing maintenance patches and upgrades are most likely causing performance and reliability problems. Unpatched software accumulates known bugs and performance issues that vendors address in updates. Without patches, these known problems persist and can worsen over time."
    },
    {
        id: 7,
        question: "Which of the following is the MOST important consideration when evaluating the data retention policy for a global organization with regional offices in multiple countries?",
        options: [
            "A. The policy aligns with business goals and objectives.",
            "B. The policy aligns with local laws and regulations.",
            "C. The policy aligns with corporate policies and practices.",
            "D. The policy aligns with global best practices."
        ],
        answer: "B",
        explanation: "Alignment with local laws and regulations is most important for a global retention policy. Different countries have legally mandated retention periods that the organization must comply with. Failure to meet local legal requirements can result in regulatory penalties regardless of alignment with corporate policy or best practices."
    },
    {
        id: 8,
        question: "During a project assessment, an IS auditor finds that business owners have been removed from the project initiation phase. Which of the following should be the auditor's GREATEST concern with this situation?",
        options: [
            "A. Incomplete requirements.",
            "B. Inadequate deliverables.",
            "C. Unclear benefits.",
            "D. Unrealistic milestones."
        ],
        answer: "A",
        explanation: "Incomplete requirements is the greatest concern when business owners are excluded from project initiation. Business owners define what the system must do. Without their input during initiation, requirements will be incomplete or incorrect, leading to a system that fails to meet business needs."
    },
    {
        id: 9,
        question: "When a data center is attempting to restore computing facilities at an alternative site following a disaster, which of the following should be restored FIRST?",
        options: [
            "A. Operating system.",
            "B. Data backups.",
            "C. Decision support system.",
            "D. Applications."
        ],
        answer: "A",
        explanation: "The operating system must be restored first because all other components depend on it. Applications and data cannot function without a running operating system. Restoring the OS establishes the foundational platform upon which all subsequent restoration steps depend."
    },
    {
        id: 10,
        question: "The PRIMARY reason to assign data ownership for protection of data is to establish:",
        options: [
            "A. reliability.",
            "B. traceability.",
            "C. accountability.",
            "D. authority."
        ],
        answer: "C",
        explanation: "Establishing accountability is the primary reason for assigning data ownership. A data owner is accountable for ensuring the data is appropriately protected, classified, and managed. Without clear ownership, no one is responsible for data protection decisions and actions."
    },
    {
        id: 11,
        question: "In which of the following system development life cycle (SDLC) phases would an IS auditor expect to find that controls have been incorporated into system specifications?",
        options: [
            "A. Design.",
            "B. Feasibility.",
            "C. Implementation.",
            "D. Development."
        ],
        answer: "A",
        explanation: "Controls should be incorporated into system specifications during the Design phase. This is when the technical architecture and control requirements are defined, translating business requirements into technical specifications that include the necessary controls before development begins."
    },
    {
        id: 12,
        question: "Which of the following is the GREATEST advantage of vulnerability scanning over penetration testing?",
        options: [
            "A. The testing process can be automated to cover large groups of assets.",
            "B. The testing produces a lower number of false positive results.",
            "C. Custom-developed applications can be tested more accurately.",
            "D. Network bandwidth is utilized more efficiently."
        ],
        answer: "A",
        explanation: "Automation enabling coverage of large groups of assets is the greatest advantage of vulnerability scanning. Automated scanning can assess entire networks and large asset inventories quickly and systematically, providing comprehensive coverage that manual penetration testing cannot match in scale."
    },
    {
        id: 13,
        question: "A CFO has requested an audit of IT capacity management due to a series of finance system slowdowns during month-end reporting. What would be MOST important to consider before including this audit in the program?",
        options: [
            "A. Whether the system's performance poses a significant risk to the organization.",
            "B. Whether stakeholders are committed to assisting with the audit.",
            "C. Whether system delays result in more frequent use of manual processing.",
            "D. Whether internal auditors have the required skills to perform the audit."
        ],
        answer: "A",
        explanation: "Whether the performance issues pose significant organizational risk is the most important consideration for inclusion in the audit program. Risk-based audit planning requires that audits address significant risks. The CFO's concern must be evaluated against the organization's risk profile to justify including it."
    },
    {
        id: 14,
        question: "An organization has introduced a capability maturity model to the system development life cycle (SDLC) to measure improvements. Which of the following is the BEST indication of successful process improvement?",
        options: [
            "A. Evaluation results align with defined business goals.",
            "B. Processes demonstrate the mitigation of inherent business risk.",
            "C. Evaluation results exceed process maturity benchmarks against competitors.",
            "D. Process maturity reaches the highest state of process optimization."
        ],
        answer: "A",
        explanation: "Evaluation results aligning with defined business goals is the best indication of successful process improvement. Process improvement is successful when it enables the organization to better achieve its business objectives, not simply when it reaches a particular maturity level or beats competitors."
    },
    {
        id: 15,
        question: "Which of the following is a concern associated with virtualization?",
        options: [
            "A. One host may have multiple versions of the same operating system.",
            "B. Performance issues with the host could impact the guest operating systems.",
            "C. The physical footprint of servers could decrease within the data center.",
            "D. Processing capacity may be shared across multiple operating systems."
        ],
        answer: "B",
        explanation: "Performance issues with the host impacting guest operating systems is a key concern with virtualization. Since guests share the host's physical resources, a performance problem — hardware failure, resource contention, or attack — on the host affects all guest systems simultaneously."
    },
    {
        id: 16,
        question: "An organization is planning to implement a work-from-home policy that allows users to work remotely as needed. Which of the following is the BEST solution for ensuring secure remote access to corporate resources?",
        options: [
            "A. Virtual desktop.",
            "B. Virtual private network (VPN).",
            "C. Multi-factor authentication.",
            "D. Additional firewall rules."
        ],
        answer: "B",
        explanation: "A VPN is the best solution for secure remote access to corporate resources. A VPN creates an encrypted tunnel between the remote user's device and the corporate network, protecting data in transit and enabling secure access to internal resources as if the user were on-site."
    },
    {
        id: 17,
        question: "An IS auditor is evaluating the progress of a web-based customer service application development project. Which of the following would be MOST helpful for this evaluation?",
        options: [
            "A. Developer status reports.",
            "B. Critical path analysis reports.",
            "C. Change management logs.",
            "D. Backlog consumption reports."
        ],
        answer: "D",
        explanation: "Backlog consumption reports are most helpful for evaluating agile project progress. They show how much work has been completed versus what remains, providing a clear, objective measure of velocity and progress toward completion that is directly aligned with agile methodology."
    },
    {
        id: 18,
        question: "Which of the following should be of GREATEST concern to an IS auditor assessing the effectiveness of an organization's release management processes?",
        options: [
            "A. Some releases are carried out with no supporting release documentation.",
            "B. Some releases exceeded the agreed-upon outage window.",
            "C. Release documentation does not follow a consistent format for all systems.",
            "D. Release management policies have not been updated in the past two years."
        ],
        answer: "A",
        explanation: "Releases carried out without supporting documentation is the greatest concern. Documentation provides the audit trail for change authorization, testing evidence, and rollback procedures. Releases without documentation cannot be reviewed for proper authorization or accountability, creating significant governance and security risks."
    },
    {
        id: 19,
        question: "Which of the following management decisions presents the GREATEST risk associated with data leakage?",
        options: [
            "A. Staff is allowed to work remotely.",
            "B. There is no requirement for desktops to be encrypted.",
            "C. Security awareness training is not provided to staff.",
            "D. Security policies have not been updated in the past year."
        ],
        answer: "B",
        explanation: "No requirement for desktop encryption presents the greatest data leakage risk. Unencrypted desktops expose all stored data if a device is lost, stolen, or accessed by unauthorized parties. This technical gap directly enables data leakage without any user action required."
    },
    {
        id: 20,
        question: "An IS auditor is reviewing an organization's incident management processes and procedures. Which of the following observations should be the auditor's GREATEST concern?",
        options: [
            "A. Ineffective incident classification.",
            "B. Ineffective post-incident review.",
            "C. Ineffective incident prioritization.",
            "D. Ineffective incident detection."
        ],
        answer: "D",
        explanation: "Ineffective incident detection is the greatest concern because it means incidents are occurring without being identified. All other incident management phases (classification, prioritization, review) are irrelevant if incidents are not detected in the first place, allowing harm to continue unaddressed."
    },
    {
        id: 21,
        question: "Which of the following is the MOST important factor when an organization is developing information security policies and procedures?",
        options: [
            "A. Consultation with security staff.",
            "B. Alignment with an information security framework.",
            "C. Inclusion of mission and objectives.",
            "D. Compliance with relevant regulations."
        ],
        answer: "D",
        explanation: "Compliance with relevant regulations is the most important factor in developing security policies. Regulatory requirements are legally binding and non-compliance carries significant penalties. Policies must at minimum satisfy regulatory obligations, which then form the baseline from which the organization can add additional controls."
    },
    {
        id: 22,
        question: "What should an IS auditor review FIRST to verify that an organization's IT strategy is effectively implemented?",
        options: [
            "A. Information security procedures.",
            "B. The IT governance framework.",
            "C. Process maturity of IT general controls.",
            "D. The most recent audit results."
        ],
        answer: "B",
        explanation: "The IT governance framework should be reviewed first. The governance framework establishes the structures, processes, and mechanisms for implementing IT strategy. Without an adequate governance framework, IT strategy implementation cannot be systematically achieved or verified."
    },
    {
        id: 23,
        question: "Which of the following is MOST important to include in an awareness program focused on information security risk?",
        options: [
            "A. Social engineering attacks.",
            "B. Laptop theft prevention.",
            "C. Restricted websites.",
            "D. Password parameters."
        ],
        answer: "A",
        explanation: "Social engineering attacks are most important to cover in security awareness programs. Social engineering exploits human psychology rather than technical vulnerabilities, and user education is the primary defense. Employees who can recognize and resist social engineering are better protected against the most common attack vector."
    },
    {
        id: 24,
        question: "Which of the following is a threat to IS auditor independence?",
        options: [
            "A. Internal auditors recommend appropriate controls for systems in development.",
            "B. Internal auditors attend IT steering committee meetings.",
            "C. Internal auditors design remediation plans to address control gaps identified by internal audit.",
            "D. Internal auditors share the audit plan and control test plans with management prior to audit commencement."
        ],
        answer: "C",
        explanation: "Internal auditors designing remediation plans is a threat to independence. If auditors design the corrective actions they will later evaluate, they would be assessing their own work, creating a direct self-review threat. Auditors can recommend and advise but should not design or implement remediation plans."
    },
    {
        id: 25,
        question: "Which of the following BEST supports an organization's efforts to reduce the impact of ransomware attacks?",
        options: [
            "A. Ensuring a payment method is available.",
            "B. Conducting periodic internal and external penetration testing.",
            "C. Conducting security awareness training for staff.",
            "D. Developing robust backup and recovery procedures."
        ],
        answer: "D",
        explanation: "Robust backup and recovery procedures best reduce ransomware impact. If reliable, tested backups exist, an organization can restore encrypted data without paying ransom, making the attack ineffective. This is the most direct way to reduce the business impact of a successful ransomware attack."
    },
    {
        id: 26,
        question: "Which of the following network topologies will provide the GREATEST fault tolerance?",
        options: [
            "A. Star configuration.",
            "B. Bus configuration.",
            "C. Ring configuration.",
            "D. Mesh configuration."
        ],
        answer: "D",
        explanation: "Mesh configuration provides the greatest fault tolerance. In a full mesh topology, every node is connected to every other node, providing multiple redundant paths. Any single link or node failure can be routed around, maintaining connectivity throughout the network."
    },
    {
        id: 27,
        question: "Which of the following findings should be of GREATEST concern to an IS auditor reviewing an organization's newly implemented online security awareness program?",
        options: [
            "A. Employees do not receive immediate notification of results.",
            "B. Only new employees are required to attend the program.",
            "C. The timing for program updates has not been determined.",
            "D. Metrics have not been established to assess training results."
        ],
        answer: "D",
        explanation: "Metrics not being established to assess training results is the greatest concern. Without metrics, there is no way to measure whether the awareness program is effective or achieving its objectives. An unmeasured program cannot be improved and provides no assurance that security awareness is actually increasing."
    },
    {
        id: 28,
        question: "Which of the following are used in a firewall to protect the entity's internal resources?",
        options: [
            "A. Failover services.",
            "B. Remote access servers.",
            "C. Internet Protocol (IP) address restrictions.",
            "D. Secure Sockets Layers (SSLs)."
        ],
        answer: "C",
        explanation: "IP address restrictions are used in firewalls to protect internal resources. Firewalls use IP address-based access control lists (ACLs) to permit or deny traffic based on source and destination addresses, controlling which external addresses can communicate with internal resources."
    },
    {
        id: 29,
        question: "Which of the following cloud capabilities BEST enables an organization to meet unexpectedly high service demand?",
        options: [
            "A. Flexibility.",
            "B. High availability.",
            "C. Alternate routing.",
            "D. Scalability."
        ],
        answer: "D",
        explanation: "Scalability best enables an organization to meet unexpected demand increases. Cloud scalability allows resources to be rapidly provisioned and released in response to demand fluctuations, handling unexpected traffic spikes without pre-provisioning expensive excess capacity."
    },
    {
        id: 30,
        question: "An organization has shifted from a bottom-up approach to a top-down approach in the development of IT policies. This should result in:",
        options: [
            "A. greater consistency across the organization.",
            "B. greater adherence to best practices.",
            "C. a more comprehensive risk assessment plan.",
            "D. a synthesis of existing operational policies."
        ],
        answer: "A",
        explanation: "Greater consistency across the organization is the primary result of a top-down policy approach. Top-down policies are developed centrally and applied uniformly, ensuring all business units follow the same standards rather than developing potentially inconsistent local policies."
    },
    {
        id: 31,
        question: "Which of the following methods would BEST help detect unauthorized disclosure of confidential documents sent over corporate email?",
        options: [
            "A. Monitoring all emails based on pre-defined criteria.",
            "B. Reporting all outgoing emails that are marked as confidential.",
            "C. Requiring all users to encrypt documents before sending.",
            "D. Installing firewalls on the corporate network."
        ],
        answer: "A",
        explanation: "Monitoring all emails based on pre-defined criteria (such as keywords, classification labels, or attachment types) is the best detection method. This approach systematically scans outbound email for indicators of confidential content, enabling detection of unauthorized disclosures regardless of whether the sender marked the email as confidential."
    },
    {
        id: 32,
        question: "An organization has engaged a third party to implement an application to perform business-critical calculations. Which of the following is the MOST important process to help ensure the application provides accurate calculations?",
        options: [
            "A. Quality assurance (QA).",
            "B. Change management.",
            "C. Key performance indicator (KPI) monitoring.",
            "D. Configuration management."
        ],
        answer: "A",
        explanation: "Quality assurance is the most important process for ensuring accurate calculations. QA validates that the application performs as specified through systematic testing, including verification that all calculation logic is correct and produces expected results for known inputs."
    },
    {
        id: 33,
        question: "Which of the following is the BEST approach to help ensure evidence from a computer forensics investigation is legally admissible?",
        options: [
            "A. The incident response team reviews and analyzes the evidence, and the evidence file is then securely deleted to avoid further damage.",
            "B. The relevant data is extracted from system, firewall, and intrusion detection system (IDS) logs, then consolidated as evidence.",
            "C. The media involved is preserved using imaging, and further analysis is performed on the image instead of the original.",
            "D. The computer suspected of storing the evidence is isolated, and the incident response team is contacted for investigation."
        ],
        answer: "C",
        explanation: "Preserving media using imaging and analyzing the image rather than the original is the best forensic approach. This preserves the original evidence in its pristine state, maintains chain of custody, and ensures the original cannot be inadvertently altered during investigation — all prerequisites for legal admissibility."
    },
    {
        id: 34,
        question: "Evaluating application development projects against a defined maturity model enables an IS auditor to determine whether:",
        options: [
            "A. effective security requirements have been designed.",
            "B. the development function's processes are efficient.",
            "C. the development function follows a robust process.",
            "D. the development project is likely to achieve its objectives."
        ],
        answer: "C",
        explanation: "A maturity model enables the auditor to determine whether the development function follows a robust process. Maturity models assess process capability and consistency — whether development activities are performed in a defined, managed, and repeatable manner rather than ad hoc."
    },
    {
        id: 35,
        question: "During data conversion, data cleansing is BEST performed prior to:",
        options: [
            "A. load.",
            "B. transformation.",
            "C. validation.",
            "D. extraction."
        ],
        answer: "D",
        explanation: "Data cleansing is best performed prior to extraction from the source system. Cleansing at the source ensures that only clean, quality data enters the conversion pipeline, preventing dirty data from propagating through transformation and loading stages and reducing rework downstream."
    },
    {
        id: 36,
        question: "Which of the following scenarios should raise a concern about auditor independence?",
        options: [
            "A. The auditor used to manage the same business process at a different company.",
            "B. The auditor consulted on the implementation portion of a project being audited.",
            "C. The auditor attended design and development meetings to monitor progress.",
            "D. The auditor has a personal relationship with an end user."
        ],
        answer: "B",
        explanation: "Consulting on the implementation of a project that is now being audited raises a significant independence concern. The auditor would be evaluating work they participated in, creating a direct self-review threat that impairs objectivity and the ability to provide unbiased audit conclusions."
    },
    {
        id: 37,
        question: "Which of the following is the BEST way for an IS auditor to determine whether an organization's disaster recovery plan (DRP) is current?",
        options: [
            "A. Review critical system documentation and related recovery time objectives (RTOs).",
            "B. Verify the DRP identifies appropriate staff with up-to-date contact details.",
            "C. Ensure all staff is trained on business continuity.",
            "D. Verify the DRP is periodically tested."
        ],
        answer: "B",
        explanation: "Verifying the DRP identifies appropriate staff with current contact details is the best currency check. Outdated staff information — people who have left, changed roles, or changed contact details — is one of the most common signs of a DRP that has not been maintained. Current personnel details indicate the plan has been recently reviewed."
    },
    {
        id: 38,
        question: "Which of the following BEST enables the authentication of an email from an untrusted network?",
        options: [
            "A. Secure Shell (SSH) connections.",
            "B. Email encryption.",
            "C. Digital signatures.",
            "D. Transport Layer Security (TLS)."
        ],
        answer: "C",
        explanation: "Digital signatures best enable email authentication. A digital signature uses the sender's private key to create a unique signature that the recipient can verify with the sender's public key, confirming the email genuinely came from the claimed sender and has not been altered in transit."
    },
    {
        id: 39,
        question: "When planning an audit, it is acceptable for an IS auditor to rely on a third-party provider's external audit report on service level management when the:",
        options: [
            "A. scope and methodology meet audit requirements.",
            "B. service provider is independently certified and accredited.",
            "C. report was released within the last 12 months.",
            "D. report confirms that service levels were not violated."
        ],
        answer: "A",
        explanation: "The scope and methodology meeting audit requirements is the criterion for relying on a third-party audit report. The external report must cover the relevant controls and use appropriate audit methods to provide the assurance needed. Without this alignment, the report cannot substitute for the auditor's own procedures."
    },
    {
        id: 40,
        question: "Which of the following should be the GREATEST concern to an IS auditor reviewing an organization's job scheduling practices?",
        options: [
            "A. Job dependencies are undefined.",
            "B. Job processing procedures are missing.",
            "C. Most jobs are run manually.",
            "D. Jobs are executed during working hours."
        ],
        answer: "A",
        explanation: "Undefined job dependencies are the greatest concern. Job dependencies determine the sequence and conditions under which scheduled jobs run. Without defined dependencies, jobs may execute in the wrong order, producing incorrect results or failing entirely when prerequisite jobs haven't completed successfully."
    },
    {
        id: 41,
        question: "Which of the following is the GREATEST benefit to an organization as a result of effective IS audit risk assessments?",
        options: [
            "A. Credibility with management is enhanced.",
            "B. The scope for future audits is established.",
            "C. Low-risk areas can be eliminated.",
            "D. Audits will be targeted to high-risk areas."
        ],
        answer: "D",
        explanation: "Targeting audits to high-risk areas is the greatest benefit of effective risk assessments. By directing audit resources where risks are greatest, the organization maximizes the value and impact of the audit function, ensuring the most significant threats to organizational objectives receive appropriate scrutiny."
    },
    {
        id: 42,
        question: "A white box testing method is applicable with which of the following testing processes?",
        options: [
            "A. Sociability testing.",
            "B. Integration testing.",
            "C. Parallel testing.",
            "D. User acceptance testing (UAT)."
        ],
        answer: "B",
        explanation: "White box testing, which involves testing with full knowledge of internal code and structure, is applicable to integration testing. Integration testing verifies that components work together correctly, and white box knowledge of the interfaces and internal logic enables thorough testing of integration points."
    },
    {
        id: 43,
        question: "Which of the following is the GREATEST risk related to the use of virtualized environments?",
        options: [
            "A. There may be increased potential for session hijacking.",
            "B. There may be insufficient processing capacity to assign to guests.",
            "C. Ability to change operating systems may be limited.",
            "D. The host may be a potential single point of failure within the system."
        ],
        answer: "D",
        explanation: "The host being a potential single point of failure is the greatest virtualization risk. If the physical host fails, all guest virtual machines fail simultaneously. This concentration of multiple systems on one physical host creates a high-impact single point of failure that could cause widespread outages."
    },
    {
        id: 44,
        question: "Which of the following is a deterrent security control that reduces the likelihood of an insider threat event?",
        options: [
            "A. Removing malicious code.",
            "B. Distributing disciplinary policies.",
            "C. Creating contingency plans.",
            "D. Executing data recovery procedures."
        ],
        answer: "B",
        explanation: "Distributing disciplinary policies is a deterrent control. By making employees aware of the consequences of policy violations and malicious insider activity, the organization discourages such behavior. Deterrent controls reduce the likelihood of threats by influencing the risk-benefit calculation potential insiders make."
    },
    {
        id: 45,
        question: "While evaluating the data classification process of an organization, an IS auditor's PRIMARY focus should be on whether:",
        options: [
            "A. data is correctly classified.",
            "B. a data dictionary is maintained.",
            "C. data retention requirements are clearly defined.",
            "D. data classifications are automated."
        ],
        answer: "A",
        explanation: "Whether data is correctly classified is the primary focus when evaluating the classification process. The fundamental purpose of the process is to assign accurate classification levels to data. Incorrect classification — either over or under — leads to inappropriate controls being applied, leaving data either over-restricted or inadequately protected."
    },
    {
        id: 46,
        question: "Which of the following auditing techniques would be used to detect the validity of a credit card transaction based on time, location, and date of purchase?",
        options: [
            "A. Integrated test facility (ITF).",
            "B. Data analytics.",
            "C. Hash totals.",
            "D. Check sums."
        ],
        answer: "B",
        explanation: "Data analytics is the technique used to detect transaction validity based on time, location, and date patterns. By analyzing transaction data for unusual patterns — such as transactions in two different locations within minutes of each other — data analytics identifies potentially fraudulent activity."
    },
    {
        id: 47,
        question: "Which of the following poses the GREATEST risk to a virtualized environment?",
        options: [
            "A. Server cloning occurs without appropriate approval from IT management.",
            "B. A network map has not been updated.",
            "C. Backup testing does not occur at regular intervals.",
            "D. Security zones within the environment are combined."
        ],
        answer: "D",
        explanation: "Combining security zones within a virtualized environment poses the greatest risk. Security zones enforce boundaries between systems of different sensitivity levels. Combining zones removes these boundaries, potentially allowing low-security guests to access high-security guests or enabling threats to move laterally across what were intended to be separate security domains."
    },
    {
        id: 48,
        question: "Capacity management tools are PRIMARILY used to ensure that:",
        options: [
            "A. available resources are used efficiently and effectively.",
            "B. concurrent use by a large number of users is enabled.",
            "C. proposed hardware acquisitions meet capacity requirements.",
            "D. computer systems are used to their maximum capacity most of the time."
        ],
        answer: "A",
        explanation: "Capacity management tools are primarily used to ensure available resources are used efficiently and effectively. They monitor utilization, identify bottlenecks, forecast future needs, and enable optimization of resource allocation to maintain performance while avoiding unnecessary over-provisioning."
    },
    {
        id: 49,
        question: "Which of the following is an example of personally identifiable information (PII)?",
        options: [
            "A. Office address.",
            "B. Marital status.",
            "C. Passport number.",
            "D. Date of birth."
        ],
        answer: "C",
        explanation: "A passport number is clearly PII because it uniquely identifies a specific individual and is directly linked to government-issued identity documents. It can be used alone to identify a person, making it a direct identifier and unambiguously PII under most privacy frameworks."
    },
    {
        id: 50,
        question: "Which of the following analytical methods would be MOST useful when trying to identify groups with similar behavior or characteristics in a large population?",
        options: [
            "A. Deviation detection.",
            "B. Cluster sampling.",
            "C. Random sampling.",
            "D. Classification."
        ],
        answer: "D",
        explanation: "Classification is the most useful analytical method for identifying groups with similar behavior or characteristics. Classification algorithms group data points based on shared attributes or behavioral patterns, enabling segmentation of large populations into meaningful categories for analysis."
    },
    {
        id: 51,
        question: "Which of the following BEST addresses the availability of an online store?",
        options: [
            "A. Online backups.",
            "B. A mirrored site at another location.",
            "C. Clustered architecture.",
            "D. RAID level 5 storage devices."
        ],
        answer: "C",
        explanation: "Clustered architecture best addresses online store availability. Clustering distributes load across multiple servers and enables automatic failover if one server fails, maintaining continuous availability. This architecture eliminates single points of failure and handles demand spikes better than the other options."
    },
    {
        id: 52,
        question: "Who would provide an IS auditor with the MOST helpful input during an interview to determine whether business requirements for an application were met?",
        options: [
            "A. User management.",
            "B. Project sponsors.",
            "C. Senior management.",
            "D. Project management."
        ],
        answer: "A",
        explanation: "User management would provide the most helpful input about whether business requirements were met. Users and their managers are the direct beneficiaries of the application and work with it daily, making them best positioned to assess whether it fulfills the original business requirements."
    },
    {
        id: 53,
        question: "Which of the following should be an IS auditor's GREATEST concern when assessing an IT service configuration database?",
        options: [
            "A. The database is not encrypted at rest.",
            "B. The database is read-accessible for all users.",
            "C. The database is executable for all users.",
            "D. The database is write-accessible for all users."
        ],
        answer: "D",
        explanation: "The database being write-accessible to all users is the greatest concern. Unauthorized modifications to the configuration database could alter the documented state of IT systems, undermining change management integrity and creating discrepancies between documented and actual configurations that could conceal unauthorized changes."
    },
    {
        id: 54,
        question: "Which of the following is PRIMARY responsibility of an IT steering committee?",
        options: [
            "A. Prioritizing IT projects in accordance with business requirements.",
            "B. Validating and monitoring the skill sets of IT department staff.",
            "C. Establishing IT budgets for the business.",
            "D. Reviewing periodic IT risk assessments."
        ],
        answer: "A",
        explanation: "Prioritizing IT projects in accordance with business requirements is the primary responsibility of the IT steering committee. The committee provides strategic direction and governance, ensuring IT investments and projects are aligned with and prioritized by their business value and strategic importance."
    },
    {
        id: 55,
        question: "Which of the following provides an IS auditor assurance that the interface between a point-of-sale (POS) system and the general ledger is transferring sales data completely and accurately?",
        options: [
            "A. Electronic copies of customer sales receipts are maintained.",
            "B. Monthly bank statements are reconciled without exception.",
            "C. The data transferred over the POS interface is encrypted.",
            "D. Nightly batch processing has been replaced with real-time processing."
        ],
        answer: "B",
        explanation: "Monthly bank statements being reconciled without exception provides assurance of interface completeness and accuracy. Successful bank reconciliation confirms that all sales transactions recorded in the general ledger match actual deposits, indirectly validating that the POS-to-general ledger interface transferred data correctly."
    },
    {
        id: 56,
        question: "An IS audit manager is reviewing workpapers for a recently completed audit of the corporate disaster recovery test. Which of the following should the IS audit manager specifically review to substantiate the conclusions?",
        options: [
            "A. Overviews of interviews between data center personnel and the auditor.",
            "B. Summary memos reflecting audit opinions regarding noted weaknesses.",
            "C. Detailed evidence of the successes and weaknesses of all contingency testing.",
            "D. Prior audit reports involving other corporate disaster recovery audits."
        ],
        answer: "C",
        explanation: "Detailed evidence of the successes and weaknesses of all contingency testing substantiates audit conclusions. Workpapers must contain sufficient evidence to support each conclusion. Detailed testing evidence directly supports conclusions about DRP effectiveness, while summaries and prior reports are secondary."
    },
    {
        id: 57,
        question: "Which of the following is an indication of possible hacker activity involving voice communications?",
        options: [
            "A. Direct inward system access (DISA) is found to be disabled on the company's exchange.",
            "B. Outbound calls are found to significantly increase in frequency during non-business hours.",
            "C. Inbound calls experience significant fluctuations based on time of day and day of week.",
            "D. The abandonment rate of service desk calls is increasing during the early morning."
        ],
        answer: "B",
        explanation: "Outbound calls significantly increasing during non-business hours is a key indicator of toll fraud hacking activity. Hackers who gain access to phone systems typically exploit them to make expensive international calls at off-hours when the activity is less likely to be noticed immediately."
    },
    {
        id: 58,
        question: "Which of the following is the MOST appropriate indicator of change management effectiveness?",
        options: [
            "A. Time lag between changes to the configuration and the update of records.",
            "B. Number of system software changes.",
            "C. Number of incidents resulting from changes.",
            "D. Time lag between changes and updates of documentation materials."
        ],
        answer: "C",
        explanation: "The number of incidents resulting from changes is the most appropriate effectiveness indicator. Effective change management prevents changes from causing unplanned disruptions. A low rate of change-induced incidents demonstrates that changes are well-designed, tested, and implemented without negative consequences."
    },
    {
        id: 59,
        question: "Which of the following should be an IS auditor's GREATEST concern when reviewing an organization's capacity management planning?",
        options: [
            "A. Many of the resource requirements are based on estimates.",
            "B. The organization is increasingly dependent on the use of cloud providers.",
            "C. Some planning areas are not well developed.",
            "D. Current resource utilization is not monitored."
        ],
        answer: "D",
        explanation: "Current resource utilization not being monitored is the greatest concern. Capacity planning is impossible without baseline data on current utilization. Without monitoring, the organization cannot identify trends, predict when capacity will be exhausted, or make informed decisions about when and how much to expand."
    },
    {
        id: 60,
        question: "Which of the following is the BEST source of information to determine the required level of data protection on a file server?",
        options: [
            "A. Acceptable use policy and privacy statements.",
            "B. Previous data breach incident reports.",
            "C. Data classification policy and procedures.",
            "D. Access rights of similar file servers."
        ],
        answer: "C",
        explanation: "The data classification policy and procedures are the best source for determining required data protection levels. Classification defines the sensitivity of data stored on the server and prescribes the protection requirements for each classification level, directly informing what controls are necessary."
    },
    {
        id: 61,
        question: "Which of the following is the PRIMARY objective of implementing IT governance?",
        options: [
            "A. Resource management.",
            "B. Performance measurement.",
            "C. Value delivery.",
            "D. Strategic planning."
        ],
        answer: "C",
        explanation: "Value delivery is the primary objective of IT governance. IT governance ensures that IT investments and activities create value for the organization by aligning IT capabilities with business objectives and ensuring IT delivers on its promises to stakeholders."
    },
    {
        id: 62,
        question: "During an information security audit of a mid-sized organization, an IS auditor notes that the organization's information security policy is not sufficient. What is the auditor's BEST recommendation for the organization?",
        options: [
            "A. Obtain an external consultant's support to rewrite the policy.",
            "B. Identify and close gaps compared to a best-practice framework.",
            "C. Perform a benchmark with competitors' policies.",
            "D. Define roles and responsibilities for regularly updating the policy."
        ],
        answer: "B",
        explanation: "Identifying and closing gaps compared to a best-practice framework is the best recommendation. Using an established framework (such as ISO 27001 or NIST) as a reference enables systematic identification of what the current policy is missing and provides a proven template for improvement."
    },
    {
        id: 63,
        question: "The GREATEST limitation of a network-based intrusion detection system (IDS) is that it:",
        options: [
            "A. provides only for active rather than passive IDS monitoring.",
            "B. does not monitor for denial of service (DoS) attacks.",
            "C. consumes excessive network resources for detection.",
            "D. does not detect attacks originating on the server hosting the IDS."
        ],
        answer: "D",
        explanation: "The greatest limitation of a network-based IDS is that it cannot detect attacks originating on the server hosting it. Network IDS monitors network traffic — it has no visibility into local processes, memory, or file system activity on the host, creating a blind spot for local attacks."
    },
    {
        id: 64,
        question: "Which of the following is the MOST efficient solution for a multi-location healthcare organization that wants to access patient data wherever patients present themselves for care?",
        options: [
            "A. Software as a Service (SaaS) provider.",
            "B. Network segmentation.",
            "C. Infrastructure as a Service (IaaS) provider.",
            "D. Dynamic localization."
        ],
        answer: "A",
        explanation: "SaaS is the most efficient solution for multi-location healthcare data access. A SaaS solution provides centralized, cloud-hosted patient data accessible from any location through a web browser, eliminating the need to manage infrastructure while enabling authorized access from all care locations."
    },
    {
        id: 65,
        question: "Which of the following would be MOST impacted if an IS auditor were to assist with the implementation of recommended control enhancements?",
        options: [
            "A. Materiality.",
            "B. Independence.",
            "C. Integrity.",
            "D. Accountability."
        ],
        answer: "B",
        explanation: "Independence would be most impacted if an IS auditor assists with implementing recommended controls. The auditor would then need to evaluate controls they helped implement, creating a self-review threat that fundamentally impairs the objectivity required for independent assurance."
    },
    {
        id: 66,
        question: "Which of the following is the BEST report for an IS auditor to reference when tasked with reviewing the security of code written for a newly developed website?",
        options: [
            "A. Black box testing report.",
            "B. Static software composition analysis.",
            "C. Penetration test report.",
            "D. Web application vulnerability report."
        ],
        answer: "B",
        explanation: "Static software composition analysis (SCA) is the best reference for reviewing code security. SCA analyzes the source code and its dependencies for known vulnerabilities, security weaknesses, and licensing issues without executing the code, providing detailed security findings at the code level."
    },
    {
        id: 67,
        question: "Which of the following observations should be of MOST concern to an IS auditor reviewing an organization's business impact analysis (BIA) practices?",
        options: [
            "A. A combination of questionnaires, workshops, and interviews is used.",
            "B. Outsourced business processes are excluded from the scope of the BIA.",
            "C. Resource dependencies for critical processes are not determined.",
            "D. Recovery objectives are identified without conducting risk assessments."
        ],
        answer: "B",
        explanation: "Outsourced business processes being excluded from BIA scope is the most significant concern. Outsourced processes still support critical business functions, and their disruption would impact the organization. Excluding them from the BIA means recovery planning for those processes is incomplete."
    },
    {
        id: 68,
        question: "During an audit, which of the following would be MOST helpful in establishing a baseline for measuring data quality?",
        options: [
            "A. Industry standard business definitions.",
            "B. Input from customers.",
            "C. Validation of rules by the business.",
            "D. Built-in data error prevention application controls."
        ],
        answer: "C",
        explanation: "Validation of rules by the business is most helpful for establishing data quality baselines. Business users define what constitutes valid data for their processes. Their validation of data quality rules establishes the authoritative standard against which current data quality can be measured."
    },
    {
        id: 69,
        question: "Which of the following approaches would BEST enable an e-commerce website to handle unpredictable amounts of traffic?",
        options: [
            "A. Index key databases to improve response time.",
            "B. Re-factor applications to improve efficiency.",
            "C. Cluster application servers to distribute web traffic.",
            "D. Configure resources to scale."
        ],
        answer: "D",
        explanation: "Configuring resources to scale — auto-scaling — is the best approach for handling unpredictable traffic. Auto-scaling automatically adds or removes capacity based on real-time demand, enabling the site to handle unexpected traffic spikes without over-provisioning resources for typical load."
    },
    {
        id: 70,
        question: "An organization is permanently transitioning from onsite to fully remote business operations. When should the existing business impact analysis (BIA) be reviewed?",
        options: [
            "A. At least one year after the transition.",
            "B. As soon as the new operating model is in place.",
            "C. During the next scheduled review.",
            "D. As soon as the decision about the transition is announced."
        ],
        answer: "D",
        explanation: "The BIA should be reviewed as soon as the transition decision is announced. A permanent change to fully remote operations fundamentally changes the business operating model, risk profile, and recovery requirements. The BIA must be updated proactively to reflect the new model before the transition occurs."
    },
    {
        id: 71,
        question: "Which of the following is a PRIMARY benefit of a maturity model?",
        options: [
            "A. It facilitates communication with regulatory bodies.",
            "B. It benchmarks the organization to peer performance levels.",
            "C. It facilitates the establishment of organizational capability.",
            "D. It provides the organization with a standard assessment tool."
        ],
        answer: "D",
        explanation: "Providing the organization with a standard assessment tool is a primary benefit of maturity models. Maturity models offer a consistent, repeatable framework for assessing the current state of processes and identifying improvement opportunities, enabling objective comparison over time and against defined standards."
    },
    {
        id: 72,
        question: "In the development of a new financial application, the IS auditor's FIRST involvement should be in the:",
        options: [
            "A. control design.",
            "B. application design.",
            "C. system test.",
            "D. feasibility study."
        ],
        answer: "D",
        explanation: "The IS auditor's first involvement should be in the feasibility study. Early involvement at the feasibility stage allows the auditor to ensure that audit requirements, control objectives, and audit trails are considered before development begins, making subsequent control implementation more effective and less costly."
    },
    {
        id: 73,
        question: "Which of the following tests would BEST indicate that a software development project is ready to be deployed into the production environment?",
        options: [
            "A. Performance.",
            "B. Parallel.",
            "C. Unit.",
            "D. Quality assurance (QA)."
        ],
        answer: "B",
        explanation: "Parallel testing best indicates production readiness by running the new system alongside the existing system and comparing results. If outputs match across real business transactions, it provides the strongest evidence that the new system is ready to replace the old one in production."
    },
    {
        id: 74,
        question: "Which of the following is the MOST important element of quality control with respect to an audit engagement?",
        options: [
            "A. Increase of audit quality through multiple follow-up audits.",
            "B. Responsibility of leadership for quality in audits.",
            "C. Assignment of engagement teams for audits.",
            "D. Resolution procedures for differences of opinion in audits."
        ],
        answer: "B",
        explanation: "Leadership responsibility for audit quality is the most important element. Leadership sets the tone for quality culture, allocates resources for quality activities, and is ultimately accountable for ensuring audit engagements meet professional standards. Without leadership commitment, other quality control elements cannot be sustained."
    },
    {
        id: 75,
        question: "Which of the following threats is mitigated by a firewall?",
        options: [
            "A. Asynchronous attack.",
            "B. Intrusion attack.",
            "C. Trojan horse.",
            "D. Passive assault."
        ],
        answer: "B",
        explanation: "Intrusion attacks are mitigated by firewalls. Firewalls control network access by filtering traffic based on rules, blocking unauthorized attempts to access internal systems from external networks — the primary mechanism of network intrusion attacks."
    },
    {
        id: 76,
        question: "Which of the following is the GREATEST advantage of maintaining an internal IS audit function within an organization?",
        options: [
            "A. Better understanding of the business and processes.",
            "B. Ability to negotiate recommendations with management.",
            "C. Increased IS audit staff visibility and availability throughout the year.",
            "D. Increased independence and impartiality of recommendations."
        ],
        answer: "A",
        explanation: "Better understanding of the business and processes is the greatest advantage of an internal IS audit function. Internal auditors develop deep knowledge of the organization's systems, processes, culture, and history over time, enabling more relevant, contextually appropriate audit work than external auditors who must learn the organization anew each engagement."
    },
    {
        id: 77,
        question: "The MOST appropriate person to chair the steering committee for an enterprise-wide system development should be the:",
        options: [
            "A. business analyst.",
            "B. project manager.",
            "C. IS director.",
            "D. executive level manager."
        ],
        answer: "D",
        explanation: "An executive level manager is the most appropriate chair for an enterprise-wide system development steering committee. The executive has the authority, cross-functional perspective, and organizational influence needed to make strategic decisions, resolve conflicts between business units, and ensure the project receives appropriate resources and priority."
    },
    {
        id: 78,
        question: "Which of the following should be of GREATEST concern to an IS auditor assessing the effectiveness of an organization's vulnerability scanning program?",
        options: [
            "A. Scans are performed less frequently than required by the organization's vulnerability scanning schedule.",
            "B. Steps taken to address identified vulnerabilities are not formally documented.",
            "C. Results are not approved by senior management.",
            "D. Results are not reported to individuals with authority to ensure resolution."
        ],
        answer: "D",
        explanation: "Results not being reported to individuals with authority to ensure resolution is the greatest concern. A vulnerability scanning program's effectiveness depends on identified vulnerabilities being remediated. Without reporting to those with authority and resources to direct remediation, findings will not be acted upon regardless of scan quality."
    },
    {
        id: 79,
        question: "An IS audit reveals an organization has decided not to implement a new regulation by the required deadline because the cost of rapid implementation is higher than the penalty for noncompliance. Which of the following is the auditor's BEST course of action?",
        options: [
            "A. Ensure a gap analysis is conducted.",
            "B. Ensure regulatory reporting is completed.",
            "C. Ensure the risk register is updated.",
            "D. Ensure risk acceptance is documented."
        ],
        answer: "D",
        explanation: "Ensuring risk acceptance is documented is the best course of action. Management has made a deliberate business decision to accept the regulatory penalty. While the auditor may disagree, this is a management decision. The auditor's role is to ensure the decision is properly documented as a formal risk acceptance."
    },
    {
        id: 80,
        question: "Which of the following is the BEST way for an IS auditor to determine the completeness of data migration?",
        options: [
            "A. Review migration logs to identify possible failures.",
            "B. Review the implemented data cleanup process.",
            "C. Reconcile migrated records with records in the source system.",
            "D. Examine formal departmental review of the data migration."
        ],
        answer: "C",
        explanation: "Reconciling migrated records with source system records is the best way to determine migration completeness. Direct comparison of record counts and key data fields between source and target provides objective evidence of whether all expected data was successfully transferred."
    },
    {
        id: 81,
        question: "Which of the following is MOST important to consider when establishing the retention period for customer data within a specific database or application?",
        options: [
            "A. Enterprise classification level.",
            "B. System performance.",
            "C. Hardware capacity.",
            "D. Minimum regulatory requirements."
        ],
        answer: "D",
        explanation: "Minimum regulatory requirements are most important when establishing retention periods. Regulations mandate minimum periods for retaining certain types of data, and failure to meet these minimums can result in legal penalties. Regulatory requirements establish the floor below which retention periods cannot fall."
    },
    {
        id: 82,
        question: "An organization has decided to purchase a web-based email service from a third-party vendor and eliminate its own email server infrastructure. What type of cloud computing environment would BEST meet the organization's objective?",
        options: [
            "A. Database as a Service (DBaaS).",
            "B. Infrastructure as a Service (IaaS).",
            "C. Software as a Service (SaaS).",
            "D. Platform as a Service (PaaS)."
        ],
        answer: "C",
        explanation: "Software as a Service (SaaS) best meets the objective. SaaS provides fully managed applications over the internet, including email services. The vendor manages all infrastructure, software, and maintenance, allowing the organization to eliminate its own servers and receive email as a ready-to-use service."
    },
    {
        id: 83,
        question: "Which of the following is the GREATEST advantage of utilizing guest operating systems in a virtual environment?",
        options: [
            "A. They can be logged into and monitored from any location.",
            "B. They prevent access to the greater environment via TCP/IP.",
            "C. They can be wiped quickly in the event of a security breach.",
            "D. They are easier to containerize with minimal impact to the rest of the environment."
        ],
        answer: "C",
        explanation: "Guest operating systems can be quickly wiped and rebuilt in the event of a security breach. Virtualization enables rapid VM destruction and recreation from clean templates, significantly reducing recovery time after a compromise compared to rebuilding physical systems."
    },
    {
        id: 84,
        question: "An IS auditor finds that a system receives identical information from two different upstream sources, even though redundancy is not required. Which of the following would BEST enable the organization to avoid this type of inefficiency?",
        options: [
            "A. Enterprise architecture (EA).",
            "B. Normalized relational databases.",
            "C. Centralized data warehouse.",
            "D. Cyber architecture review."
        ],
        answer: "A",
        explanation: "Enterprise architecture (EA) would best enable the organization to avoid redundant data flows. EA provides a holistic view of all systems, data flows, and integrations, enabling identification and elimination of unnecessary redundancies by designing efficient, standardized data exchange patterns across the enterprise."
    },
    {
        id: 85,
        question: "Which of the following is the BEST way to determine the effectiveness of an organization's current patch management system?",
        options: [
            "A. Perform a vulnerability assessment.",
            "B. Perform secure code review.",
            "C. Perform a network scan.",
            "D. Perform penetration testing."
        ],
        answer: "A",
        explanation: "A vulnerability assessment is the best way to evaluate patch management effectiveness. By identifying currently unpatched vulnerabilities across systems, it directly shows which patches are missing and whether the patch management process is successfully keeping systems current and protected."
    },
    {
        id: 86,
        question: "A large organization has a centralized infrastructure team and decentralized application support teams reporting into their respective business units. Which of the following is the GREATEST potential issue with this organizational structure?",
        options: [
            "A. Redundancy of IT resources used across the organization.",
            "B. Failure to align with industry best practices across the organization.",
            "C. Inconsistent allocation of IT spend across the organization.",
            "D. Inconsistent IT strategy across the organization."
        ],
        answer: "D",
        explanation: "Inconsistent IT strategy across the organization is the greatest risk of this structure. Decentralized application teams reporting to business units may develop conflicting technical directions, standards, and priorities that deviate from the overall IT strategy, creating fragmented and incompatible technology landscapes."
    },
    {
        id: 87,
        question: "An IS auditor is reviewing an organization's release management practices and observes inconsistent and inaccurate estimation of the size and complexity of business application development projects. Which of the following should the auditor recommend to address this issue?",
        options: [
            "A. Agile development approach.",
            "B. Critical path methodology.",
            "C. Rapid application development.",
            "D. Function point analysis."
        ],
        answer: "D",
        explanation: "Function point analysis should be recommended to address inconsistent estimation. It provides a standardized, objective method for measuring application size based on functional requirements, enabling more accurate and consistent estimation of development effort regardless of the estimator."
    },
    {
        id: 88,
        question: "Which of the following is the BEST way to foster continuous improvement of IS audit processes and practices?",
        options: [
            "A. Frequently review IS audit policies, procedures, and instruction manuals.",
            "B. Establish and embed quality assurance (QA) within the IS audit function.",
            "C. Invite external auditors and regulators to perform regular assessment of the IS audit function.",
            "D. Implement rigorous managerial review and sign-off of IS audit deliverables."
        ],
        answer: "B",
        explanation: "Establishing and embedding QA within the IS audit function is the best way to foster continuous improvement. An embedded QA process provides systematic, ongoing evaluation of audit quality, enabling identification of weaknesses and implementation of improvements as a routine part of audit operations."
    },
    {
        id: 89,
        question: "An IS auditor is preparing a plan for audits to be carried out over a specified period. Which of the following activities should the IS auditor perform FIRST?",
        options: [
            "A. Allocate audit resources.",
            "B. Determine the audit universe.",
            "C. Prioritize risks.",
            "D. Review prior audit reports."
        ],
        answer: "B",
        explanation: "Determining the audit universe is the first activity in audit planning. The audit universe identifies all auditable entities and processes. Without this comprehensive view of what could be audited, the auditor cannot systematically assess risks or prioritize which areas to include in the plan."
    },
    {
        id: 90,
        question: "During a review of system access, an IS auditor notes that an employee who has recently changed roles within the organization still has previous access rights. The auditor's NEXT step should be to:",
        options: [
            "A. recommend a control to automatically update access rights.",
            "B. determine the reason why access rights have not been revoked.",
            "C. direct management to revoke current access rights.",
            "D. determine if access rights are in violation of software licenses."
        ],
        answer: "B",
        explanation: "Determining why access rights have not been revoked is the appropriate next step. Understanding the root cause — whether it's a process failure, system limitation, or oversight — informs the appropriate recommendation. The auditor should understand the issue before directing action or making recommendations."
    },
    {
        id: 91,
        question: "An organization has developed processes to recover critical files in the event of a ransomware attack. Which type of control do these processes represent?",
        options: [
            "A. Corrective.",
            "B. Detective.",
            "C. Preventive.",
            "D. Compensating."
        ],
        answer: "A",
        explanation: "Recovery processes for ransomware attacks represent corrective controls. Corrective controls are activated after an incident occurs to restore normal operations and minimize damage. Recovery procedures address the consequences of a successful attack rather than preventing or detecting the attack itself."
    },
    {
        id: 92,
        question: "Which type of threat can utilize a large group of automated social media accounts to steal data, send spam, or launch distributed denial of service (DDoS) attacks?",
        options: [
            "A. Data mining.",
            "B. Botnet attack.",
            "C. Malware sharing.",
            "D. Phishing attempt."
        ],
        answer: "B",
        explanation: "A botnet attack uses a large group of automated, compromised accounts or devices (bots) to conduct coordinated malicious activities. Social media botnets use automated fake accounts to spread spam, steal data, or coordinate DDoS attacks by overwhelming targets with traffic from many sources simultaneously."
    },
    {
        id: 93,
        question: "Which of the following is the BEST preventative control to ensure that database integrity is maintained?",
        options: [
            "A. Mandatory annual user access reviews.",
            "B. Biometric authentication.",
            "C. Role-based access.",
            "D. Mandatory password changes."
        ],
        answer: "C",
        explanation: "Role-based access is the best preventive control for database integrity. By restricting what each user can do based on their role — preventing unauthorized users from modifying data — role-based access proactively prevents unauthorized changes that would compromise database integrity."
    },
    {
        id: 94,
        question: "During an information security review, an IS auditor learns an organizational policy requires all employees to attend information security training during the first week of each new year. What is the auditor's BEST recommendation to ensure employees hired after January receive adequate security guidance?",
        options: [
            "A. Require management of new employees to provide an overview of security.",
            "B. Revise the policy to require security training every six months for all employees.",
            "C. Ensure new employees read and sign acknowledgment of the acceptable use policy.",
            "D. Revise the policy to include security training during onboarding."
        ],
        answer: "D",
        explanation: "Revising the policy to include security training during onboarding is the best recommendation. This ensures every new hire receives training at the time of joining, regardless of when in the year they start, eliminating the gap for employees hired after January's annual training."
    },
    {
        id: 95,
        question: "An IS auditor observes a system performance monitoring tool that states a server critical to the organization averages high CPU utilization across a cluster of four virtual servers throughout the audit period. To determine if further investigation is required, an IS auditor should review:",
        options: [
            "A. system baselines.",
            "B. the system process activity log.",
            "C. the number of CPUs allocated to each virtual machine.",
            "D. organizational objectives."
        ],
        answer: "A",
        explanation: "System baselines should be reviewed to determine if further investigation is required. Baselines establish what normal CPU utilization looks like for this system. Without baselines, the auditor cannot determine whether high utilization is genuinely problematic or normal for the workload this server handles."
    },
    {
        id: 96,
        question: "In a review of the organization standards and guidelines for IT management, which of the following should be included in an IS development methodology?",
        options: [
            "A. Risk management techniques.",
            "B. Access control rules.",
            "C. Value-added activity analysis.",
            "D. Incident management techniques."
        ],
        answer: "A",
        explanation: "Risk management techniques should be included in an IS development methodology. Identifying and managing risks throughout the development lifecycle is essential for project success. Risk management techniques enable proactive identification and mitigation of threats to project objectives."
    },
    {
        id: 97,
        question: "When using data analytics to perform an audit, the IS auditor should FIRST:",
        options: [
            "A. identify testing models.",
            "B. define data needs.",
            "C. identify data sources.",
            "D. prepare the data."
        ],
        answer: "B",
        explanation: "Defining data needs is the first step when using data analytics in an audit. The auditor must determine what data is required to address the audit objectives before identifying where to source it or how to prepare it. Without clear data requirements, subsequent steps lack direction."
    },
    {
        id: 98,
        question: "An organization outsourced its IS functions. To meet its responsibility for disaster recovery, the organization should:",
        options: [
            "A. coordinate disaster recovery administration with the outsourcing vendor.",
            "B. delegate evaluation of disaster recovery to a third party.",
            "C. delegate evaluation of disaster recovery to internal audit.",
            "D. discontinue maintenance of the disaster recovery plan (DRP)."
        ],
        answer: "A",
        explanation: "Coordinating disaster recovery administration with the outsourcing vendor is the correct approach. While IS functions are outsourced, the organization retains ultimate responsibility for its own disaster recovery. Coordination ensures the vendor's recovery capabilities align with the organization's objectives and that gaps are identified and addressed."
    },
    {
        id: 99,
        question: "Which of the following is a preventive control that can protect against internal fraud in an organization?",
        options: [
            "A. Continuous auditing.",
            "B. Management review.",
            "C. External audits.",
            "D. Segregation of duties."
        ],
        answer: "D",
        explanation: "Segregation of duties is a preventive control against internal fraud. By requiring multiple people to complete a transaction or process, SoD prevents a single individual from committing and concealing fraud. It is the most fundamental preventive control against insider fraud."
    },
    {
        id: 100,
        question: "During a routine internal software licensing review, an IS auditor discovers instances where employees shared license keys to critical pieces of business software. Which of the following would be the auditor's BEST course of action?",
        options: [
            "A. Recommend the utilization of software licensing monitoring tools.",
            "B. Recommend the purchase of additional software license keys.",
            "C. Validate user need for shared software licenses.",
            "D. Verify whether the licensing agreement allows shared use."
        ],
        answer: "D",
        explanation: "Verifying whether the licensing agreement allows shared use is the best first action. Before concluding that a violation has occurred or recommending purchases, the auditor must determine whether the software license terms actually prohibit shared keys. Some licenses explicitly permit sharing under certain conditions."
    },
    {
        id: 101,
        question: "An organization has implemented segregation of duties with appropriate job definitions and restrictions on overlapping roles. Which type of control has been implemented?",
        options: [
            "A. Preventive.",
            "B. Detective.",
            "C. Physical.",
            "D. Corrective."
        ],
        answer: "A",
        explanation: "Segregation of duties is a preventive control. By structuring roles and responsibilities to prevent any single individual from having complete control over a sensitive process, SoD proactively prevents unauthorized actions and errors before they can occur."
    },
    {
        id: 102,
        question: "Which of the following is the MOST effective way to assess the controls over the hardware maintenance process?",
        options: [
            "A. Review the hardware maintenance logs to confirm all recorded dates are within one year.",
            "B. Compare the hardware maintenance log with the recommended maintenance schedule.",
            "C. Validate that management tracks the mean time between failures (MTBFs).",
            "D. Identify the required maintenance procedures and ensure the maintenance policy is in alignment."
        ],
        answer: "B",
        explanation: "Comparing the hardware maintenance log with the recommended maintenance schedule is the most effective assessment method. This comparison directly verifies whether maintenance is being performed as planned and required, identifying gaps between scheduled and actual maintenance activities."
    },
    {
        id: 103,
        question: "When auditing an organization's software acquisition process, the BEST way for an IS auditor to understand the software benefits to the organization would be to review the:",
        options: [
            "A. alignment with IT strategy.",
            "B. business case.",
            "C. feasibility study.",
            "D. request for proposal (RFP)."
        ],
        answer: "B",
        explanation: "Reviewing the business case provides the best understanding of software benefits. The business case articulates the expected benefits, costs, and value proposition of the acquisition, serving as the primary document justifying the software purchase and describing what the organization expects to gain."
    },
    {
        id: 104,
        question: "When building or upgrading enterprise cryptographic infrastructure, which of the following is the MOST critical requirement for growing business requirements?",
        options: [
            "A. Network throttling.",
            "B. Service discovery.",
            "C. Backup and restoration capabilities.",
            "D. Scalable architectures and systems."
        ],
        answer: "D",
        explanation: "Scalable architectures and systems are most critical for growing business requirements. As the organization expands, cryptographic infrastructure must handle increasing volumes of transactions, users, and data without redesign. Scalability ensures the infrastructure can grow with business needs without requiring replacement."
    },
    {
        id: 105,
        question: "After delivering an audit report, the audit manager discovers that evidence was overlooked during the audit. This evidence indicates that a procedural control may have failed and could contradict a conclusion of the audit. Which of the following risks is MOST affected by this oversight?",
        options: [
            "A. Operational.",
            "B. Audit.",
            "C. Financial.",
            "D. Inherent."
        ],
        answer: "B",
        explanation: "Audit risk is most affected by this oversight. Audit risk is the risk that the auditor reaches an incorrect conclusion — specifically, failing to detect a material issue or drawing a wrong conclusion. Overlooking evidence that contradicts an audit conclusion is a direct audit risk materialization."
    },
    {
        id: 106,
        question: "Which of the following is MOST effective for controlling visitor access to a data center?",
        options: [
            "A. Visitors sign in at the front desk upon arrival.",
            "B. Pre-approval of entry requests.",
            "C. Visitors are escorted by an authorized employee.",
            "D. Closed-circuit television (CCTV) is used to monitor the facilities."
        ],
        answer: "C",
        explanation: "Escorting visitors by authorized employees is the most effective access control for a data center. An escort ensures that visitors never have unsupervised access to sensitive equipment or areas, providing continuous oversight and preventing unauthorized activities regardless of other access controls in place."
    },
    {
        id: 107,
        question: "When reviewing a business impact analysis (BIA), it is MOST important for an IS auditor to ensure input was obtained from which group of stakeholders?",
        options: [
            "A. Business executives.",
            "B. Business process owners.",
            "C. Third-party consultants.",
            "D. Risk management."
        ],
        answer: "B",
        explanation: "Business process owners must provide input to the BIA. They have the most detailed and accurate knowledge of how their processes work, what resources are required, and what the impact of disruption would be. BIA conclusions about recovery priorities and objectives depend on this operational process knowledge."
    },
    {
        id: 108,
        question: "Which of the following observations should be of GREATEST concern to an IS auditor performing an audit of an organization's social media practices?",
        options: [
            "A. Some employees have not received adequate training in the use of social media.",
            "B. The organization does not have a social media policy.",
            "C. Employees are using corporate devices to access mainstream social media websites.",
            "D. Employees are using corporate branding on personal social media postings."
        ],
        answer: "B",
        explanation: "The absence of a social media policy is the greatest concern. Without a policy, employees have no guidance on acceptable use, confidentiality obligations, or approved behaviors. A policy is the foundation of social media governance — without it, all other social media risks cannot be systematically managed."
    },
    {
        id: 109,
        question: "Which of the following is the PRIMARY reason an IS auditor would recommend offsite backups although critical data is already on a redundant array of inexpensive disks (RAID)?",
        options: [
            "A. The array cannot recover from a natural disaster.",
            "B. The array relies on proper maintenance.",
            "C. The array cannot offer protection against disk corruption.",
            "D. Disks of the array cannot be hot-swapped for quick recovery."
        ],
        answer: "A",
        explanation: "RAID cannot protect against a natural disaster that destroys the physical data center. RAID provides protection against individual disk failures within a single location. Offsite backups address the risk of complete site loss from disasters like fire, flood, or earthquake that would destroy all on-site storage including RAID arrays."
    },
    {
        id: 110,
        question: "An organization's business continuity plan (BCP) should be:",
        options: [
            "A. updated based on changes to personnel and environments.",
            "B. tested whenever new applications are implemented.",
            "C. updated before an independent audit review.",
            "D. tested after an intrusion attempt into the organization's hot site."
        ],
        answer: "A",
        explanation: "A BCP should be updated based on changes to personnel and environments. Changes in staff (especially key roles), systems, processes, or locations alter recovery requirements and procedures. Keeping the BCP current with these changes ensures it remains accurate and executable when needed."
    },
    {
        id: 111,
        question: "An IS auditor has been asked to review a recently implemented quality management system (QMS). Which of the following should be the auditor's PRIMARY focus?",
        options: [
            "A. Training materials prepared for coaching employees.",
            "B. Processes to measure the performance of business-critical transactions.",
            "C. Cost-benefit analysis of the development and implementation of the QMS.",
            "D. Stability of the implemented QMS system over a period of time."
        ],
        answer: "B",
        explanation: "Processes to measure the performance of business-critical transactions should be the primary focus. The QMS's primary purpose is to ensure quality in critical business processes. Evaluating whether measurement processes are in place and effective directly assesses whether the QMS is achieving its core objective."
    },
    {
        id: 112,
        question: "An organization's IT risk assessment should include the identification of:",
        options: [
            "A. vulnerabilities.",
            "B. compensating controls.",
            "C. business process owners.",
            "D. business needs."
        ],
        answer: "A",
        explanation: "Identification of vulnerabilities is a fundamental component of IT risk assessment. Vulnerabilities represent weaknesses that threats can exploit. Without identifying vulnerabilities, the risk assessment cannot determine where the organization is exposed and what controls are needed to reduce risk to acceptable levels."
    },
    {
        id: 113,
        question: "Which of the following should be identified FIRST during the risk assessment process?",
        options: [
            "A. Vulnerability.",
            "B. Existing controls.",
            "C. Legal requirements.",
            "D. Information assets."
        ],
        answer: "D",
        explanation: "Information assets must be identified first in the risk assessment process. Risk assessment is fundamentally about protecting the organization's assets. Before identifying threats, vulnerabilities, or controls, the organization must know what needs to be protected and what value those assets represent."
    },
    {
        id: 114,
        question: "Which of the following is MOST important for an IS auditor to confirm when assessing the security of a new cloud-based IT application that is linked with the organization's existing technology?",
        options: [
            "A. The application programming interfaces (APIs) are adequately secured.",
            "B. The on-premise database has adequate encryption at rest.",
            "C. The cloud provider shares an external audit report.",
            "D. The organization has a flat network structure."
        ],
        answer: "A",
        explanation: "API security is most important to confirm for a cloud application linked to existing technology. APIs are the integration points between the cloud application and existing systems. Inadequately secured APIs are the primary attack surface for cloud integrations, potentially exposing both cloud and on-premises systems to unauthorized access."
    },
    {
        id: 115,
        question: "What would be the PRIMARY reason for an IS auditor to recommend using key risk indicators (KRIs)?",
        options: [
            "A. To keep the risk register updated.",
            "B. To eliminate unnecessary risk.",
            "C. To determine whether risk is changing.",
            "D. To align resources with the greatest risk."
        ],
        answer: "C",
        explanation: "The primary reason to recommend KRIs is to determine whether risk is changing. KRIs are metrics that provide early warning signals of increasing risk exposure, enabling management to detect when risk levels are trending toward unacceptable thresholds before issues become incidents."
    },
    {
        id: 116,
        question: "A matrix showing the current state and challenges of an organization's software release management practices is MOST useful for:",
        options: [
            "A. writing up an internal audit report.",
            "B. determining the overall maturity level.",
            "C. improving the developer experience.",
            "D. seeking approval for new tooling."
        ],
        answer: "B",
        explanation: "A current state and challenges matrix is most useful for determining the overall maturity level. By mapping current practices against defined capability levels, the matrix provides a structured basis for assessing where the organization sits on the maturity scale and what gaps must be addressed to improve."
    },
    {
        id: 117,
        question: "Which of the following is the BEST way to prevent social engineering incidents?",
        options: [
            "A. Ensure user workstations are running the most recent version of antivirus software.",
            "B. Include security responsibilities in job descriptions and require signed acknowledgment.",
            "C. Maintain an onboarding and annual security awareness program.",
            "D. Enforce strict email security gateway controls."
        ],
        answer: "C",
        explanation: "Maintaining an ongoing security awareness program is the best prevention for social engineering. Social engineering targets human behavior — training employees to recognize manipulation tactics and respond appropriately is the most effective countermeasure, as technical controls alone cannot address the human element."
    },
    {
        id: 118,
        question: "Which of the following is the BEST way to reduce the attack surface for a server farm?",
        options: [
            "A. Implement effective vulnerability management procedures.",
            "B. Uninstall unnecessary applications and services.",
            "C. Evaluate server configuration periodically.",
            "D. Ensure applications are periodically patched."
        ],
        answer: "B",
        explanation: "Uninstalling unnecessary applications and services is the best way to reduce attack surface. Every installed application, service, or open port represents a potential attack vector. Removing what is not needed eliminates these vectors entirely, reducing the total attack surface available to adversaries."
    },
    {
        id: 119,
        question: "Which of the following is the BEST indication that an IT service desk function needs to improve its incident management processes?",
        options: [
            "A. Information found in many incident records is incomplete.",
            "B. The service desk spends most of its time on recurring incidents.",
            "C. Back-end releases are the major cause of system disruptions.",
            "D. Service level metrics for resolution time have not been met several times."
        ],
        answer: "B",
        explanation: "Spending most time on recurring incidents is the best indication of poor incident management. Recurring incidents signal that root causes are not being identified and resolved. An effective incident management process should reduce recurrence by addressing underlying problems, not repeatedly handling the same symptoms."
    },
    {
        id: 120,
        question: "The PRIMARY benefit of automating application testing is to:",
        options: [
            "A. reduce the time to review code.",
            "B. provide test consistency.",
            "C. replace all manual test processes.",
            "D. provide more flexibility."
        ],
        answer: "B",
        explanation: "Test consistency is the primary benefit of automating application testing. Automated tests execute the same steps in the same way every time, eliminating variability from manual testing. This consistency ensures that regression testing reliably detects when changes break existing functionality."
    },
    {
        id: 121,
        question: "Which of the following BEST enables an IS auditor to prioritize financial reporting spreadsheets for an end-user computing (EUC) audit?",
        options: [
            "A. Understanding the purpose of each spreadsheet.",
            "B. Ascertaining which spreadsheets are most frequently used.",
            "C. Identifying the spreadsheets with built-in macros.",
            "D. Reviewing spreadsheets based on file size."
        ],
        answer: "A",
        explanation: "Understanding the purpose of each spreadsheet best enables prioritization for an EUC audit. A spreadsheet's purpose determines its criticality — spreadsheets that produce key financial report figures warrant higher scrutiny than those used for informal calculations. Purpose-based prioritization ensures audit focus aligns with risk."
    },
    {
        id: 122,
        question: "Which of the following is the MOST critical factor for the successful implementation of an IT governance framework?",
        options: [
            "A. Alignment with industry benchmarks.",
            "B. Alignment with business strategy.",
            "C. Alignment with information security standards.",
            "D. Alignment with a risk management framework."
        ],
        answer: "B",
        explanation: "Alignment with business strategy is the most critical factor for IT governance framework success. IT governance's fundamental purpose is to ensure IT supports and enables the business strategy. Without this alignment, the governance framework may optimize IT processes that don't contribute to what the business is trying to achieve."
    },
    {
        id: 123,
        question: "During an investigation, it was determined that an employee leaked company system administrative credentials on a public social media site. What is the IS auditor's FIRST recommendation?",
        options: [
            "A. Prosecute the employee.",
            "B. Change privileged passwords.",
            "C. Initiate forensic investigation.",
            "D. Initiate shutdown of the system."
        ],
        answer: "B",
        explanation: "Changing privileged passwords immediately is the most urgent recommendation. Exposed administrative credentials on a public site must be considered compromised and changed immediately to prevent unauthorized access. This is a time-sensitive action that addresses the immediate risk of exploitation."
    },
    {
        id: 124,
        question: "A transaction processing system interfaces with the general ledger. Data analytics has identified that some transactions are being recorded twice in the general ledger. While management states a system fix has been implemented, what should the IS auditor recommend to validate the interface is working in the future?",
        options: [
            "A. Perform periodic reconciliations.",
            "B. Improve user acceptance testing (UAT).",
            "C. Ensure system owner sign-off for the system fix.",
            "D. Conduct functional testing."
        ],
        answer: "A",
        explanation: "Performing periodic reconciliations is the best ongoing control recommendation. Regular reconciliation between the transaction system and general ledger on an ongoing basis provides continuous assurance that the interface is working correctly and detects any recurrence of duplicate recording promptly."
    },
    {
        id: 125,
        question: "Which of the following BEST enables an organization to control which software can be installed on a user's computer?",
        options: [
            "A. Access list.",
            "B. Capabilities list.",
            "C. Baseline list.",
            "D. Blocked list."
        ],
        answer: "A",
        explanation: "An access list (allowlist/whitelist) best controls software installation. By permitting only pre-approved software to be installed, an access list prevents unauthorized or potentially malicious software from being added to user computers, providing positive control over the software environment."
    },
    {
        id: 126,
        question: "Which of the following indicators would BEST demonstrate the efficiency of a help desk operation?",
        options: [
            "A. The percentage of system uptime supported.",
            "B. The percentage of tickets resolved over a period of time.",
            "C. Number of calls received per day.",
            "D. The number of users supported."
        ],
        answer: "B",
        explanation: "The percentage of tickets resolved over a period of time best demonstrates help desk efficiency. This metric measures how effectively the help desk converts incoming incidents into resolved ones, reflecting the team's productivity and ability to manage its workload."
    },
    {
        id: 127,
        question: "Which of the following should be identified FIRST when assessing the maturity level of an organization's vulnerability management practices?",
        options: [
            "A. Applicable IT governance framework.",
            "B. Key security team members to interview.",
            "C. Applicable security framework.",
            "D. Scope of vulnerability reports."
        ],
        answer: "C",
        explanation: "Identifying the applicable security framework should be done first. The security framework defines the expected practices and maturity levels for vulnerability management, providing the benchmark against which the organization's current state will be assessed. Without this reference point, the maturity assessment has no standard to measure against."
    },
    {
        id: 128,
        question: "An organization wants an independent measure of an outsourced system's availability. This measure is directly related to contractual payment obligations. Which of the following procedures would an IS auditor MOST likely recommend?",
        options: [
            "A. Requiring end users to report any service disruptions.",
            "B. Polling the remote service at regular intervals.",
            "C. Scanning for errors or warnings from system logs.",
            "D. Comparing downtime to approved maintenance windows."
        ],
        answer: "B",
        explanation: "Polling the remote service at regular intervals is the best independent availability measurement. Automated polling provides objective, consistent, time-stamped records of when the service is available or unavailable, independent of the provider's reporting and unaffected by user awareness or reporting behaviors."
    },
    {
        id: 129,
        question: "Which of the following should be of GREATEST concern to an IS auditor when using data analytics?",
        options: [
            "A. The data source lacks integrity.",
            "B. The data analytics software is open source.",
            "C. The data set contains irrelevant fields.",
            "D. The data was not extracted by the auditor."
        ],
        answer: "A",
        explanation: "A data source lacking integrity is the greatest concern for data analytics. If the underlying data is unreliable, inaccurate, or manipulated, all analytics conclusions will be flawed regardless of the sophistication of the analysis. Data integrity is the foundation of meaningful analytics results."
    },
    {
        id: 130,
        question: "Which of the following BEST indicates that an organization's risk management practices contribute to the effectiveness of internal IS audits?",
        options: [
            "A. The audit team participates in risk scenario development workshops.",
            "B. The audit department utilizes the corporate risk register.",
            "C. The audit department uses the existing risk analysis templates.",
            "D. The audit department follows the same reporting format used by the IT risk function."
        ],
        answer: "B",
        explanation: "The audit department utilizing the corporate risk register best indicates that risk management practices contribute to audit effectiveness. By integrating the risk register into audit planning, internal audit leverages the organization's risk intelligence to focus resources on the most significant risks."
    },
    {
        id: 131,
        question: "An IS auditor notes that an organization's DevOps team has both production and developer access. The head of IT operations agrees that there is a segregation of duties concern but considers both types of access to be necessary for the team. Which of the following is the auditor's BEST recommendation?",
        options: [
            "A. Implement weekly management reviews to confirm that no change was both developed and deployed by the same engineer.",
            "B. Require DevOps engineers' access to production systems to be reauthorized quarterly by the head of IT operations.",
            "C. Have developer access removed from the DevOps engineers.",
            "D. Implement an automated control to prevent deployment if the developer is also trying to deploy the change."
        ],
        answer: "D",
        explanation: "Implementing an automated control to prevent the same engineer from both developing and deploying a change is the best recommendation. This technical control enforces SoD at the transaction level without removing necessary access, preventing the specific SoD violation while accommodating legitimate DevOps workflow requirements."
    },
    {
        id: 132,
        question: "An organization has outsourced the maintenance of its customer database to an external vendor, and the vendor has requested live data to test the performance of the database. Which of the following is MOST important for the IS auditor to recommend?",
        options: [
            "A. Ensure sensitive field data is anonymized by random characters.",
            "B. Ensure both parties agree the data will be destroyed after the testing is complete.",
            "C. Ensure the data is backed up before providing it to the vendor.",
            "D. Ensure data transfer details are specified in the service engagement contract."
        ],
        answer: "A",
        explanation: "Ensuring sensitive field data is anonymized is most important before providing it to the vendor. Live customer data contains personally identifiable and potentially regulated information that must not be disclosed to third parties. Anonymization protects customer privacy while still allowing performance testing."
    },
    {
        id: 133,
        question: "The use of control totals satisfies which of the following control objectives?",
        options: [
            "A. Processing integrity.",
            "B. Transaction integrity.",
            "C. Distribution control.",
            "D. System recoverability."
        ],
        answer: "A",
        explanation: "Control totals satisfy the processing integrity objective. By comparing input totals against output totals, control totals verify that all transactions were processed completely and accurately without loss, duplication, or unauthorized modification during processing."
    },
    {
        id: 134,
        question: "An organization outsources its IT function to a third-party provider that supplies all hardware and support personnel. Which of the following poses the GREATEST risk that the provider's IT resources may not be available to meet the organization's objectives?",
        options: [
            "A. The service contract does not include penalty or termination provisions.",
            "B. The service provider does not make independent audit reports available.",
            "C. The service provider is located offshore.",
            "D. Service level agreements (SLAs) are not established and monitored."
        ],
        answer: "D",
        explanation: "SLAs not being established and monitored poses the greatest risk of resource unavailability. Without defined SLAs and monitoring, there is no contractual commitment to specific resource availability levels and no mechanism to detect or address shortfalls, leaving the organization with no basis to demand adequate service."
    },
    {
        id: 135,
        question: "Which of the following biometric authentication methods has the LOWEST false acceptance rate?",
        options: [
            "A. Fingerprint.",
            "B. Voice.",
            "C. Retina.",
            "D. Face."
        ],
        answer: "C",
        explanation: "Retina scanning has the lowest false acceptance rate of the listed biometric methods. Retina patterns are highly unique and stable, and the technology that reads them is very accurate. This makes retina scanning the most reliable biometric for preventing unauthorized access, though it is also the most intrusive."
    },
    {
        id: 136,
        question: "Which of the following is MOST important for an IS auditor to confirm upon learning that an organization utilizes storage virtualization for key systems in their environment?",
        options: [
            "A. Restoration testing is performed at regular intervals.",
            "B. Redundancy is included in the storage architecture.",
            "C. Backup drives are available at the disaster recovery hot site.",
            "D. Access to physical media is limited to authorized individuals."
        ],
        answer: "A",
        explanation: "Confirming that restoration testing is performed regularly is most important for storage virtualization. Storage virtualization adds complexity to recovery processes. Regular restoration testing verifies that the virtualization layer does not impede recovery and that data can actually be restored from the virtual storage architecture."
    },
    {
        id: 137,
        question: "As part of a payroll department IS audit, which of the following is the PRIMARY reason an IS auditor would recommend that a supervisor review exception reports before authorizing payments?",
        options: [
            "A. To identify unusual fluctuations or changes in any employee's monthly pay.",
            "B. To evaluate gaps between employee performance and salary adjustments.",
            "C. To verify the accuracy of bank account information for payroll deposit.",
            "D. To collect statistical information in preparation for future pay scale reviews."
        ],
        answer: "A",
        explanation: "Identifying unusual fluctuations or changes in employee pay is the primary reason for supervisor review of payroll exception reports. Such anomalies may indicate unauthorized pay rate changes, ghost employees, or payroll fraud. Supervisory review provides an independent check on payroll accuracy and integrity."
    },
    {
        id: 138,
        question: "Which of the following is the PRIMARY objective of enterprise architecture (EA)?",
        options: [
            "A. Enforcing the IT policy across the organization.",
            "B. Managing and planning for IT investments.",
            "C. Executing customized development and delivery of projects.",
            "D. Maintaining detailed system documentation."
        ],
        answer: "B",
        explanation: "Managing and planning for IT investments is the primary objective of enterprise architecture. EA provides a structured framework for understanding the current and desired future state of the organization's technology landscape, enabling informed decisions about where to invest in IT to best support business objectives."
    },
    {
        id: 139,
        question: "An IS auditor observes that each department follows a different approach for creating and securing spreadsheet macros. Which of the following is the auditor's BEST recommendation for management in this situation?",
        options: [
            "A. Provide end-user training on spreadsheet macro development.",
            "B. Prohibit further development of end-user computing (EUC) applications by end users.",
            "C. Implement an end-user computing (EUC) governance framework.",
            "D. Secure the folders where macro-enabled spreadsheets are stored."
        ],
        answer: "C",
        explanation: "Implementing an EUC governance framework is the best recommendation. The inconsistency indicates a lack of governance around EUC development. A framework establishes standards, policies, and procedures for creating, securing, and managing spreadsheets and other EUC tools consistently across all departments."
    },
    {
        id: 140,
        question: "Which of the following is the MOST effective method of destroying sensitive data stored on electronic media?",
        options: [
            "A. Physical destruction.",
            "B. Random character overwrite.",
            "C. Degaussing.",
            "D. Low-level formatting."
        ],
        answer: "A",
        explanation: "Physical destruction is the most effective method of destroying sensitive data on electronic media. Physical destruction — shredding, crushing, or incinerating — ensures data is completely unrecoverable by any means. All other methods leave some theoretical possibility of partial data recovery."
    },
    {
        id: 141,
        question: "Which of the following BEST enables an organization to verify whether an encrypted message sent by a client has been altered?",
        options: [
            "A. The date and time stamp of the received message.",
            "B. The digital signature.",
            "C. The sender's private key.",
            "D. The message header."
        ],
        answer: "B",
        explanation: "A digital signature best enables verification that a message has not been altered. The signature is computed from the message content using the sender's private key. Any modification to the message after signing will cause signature verification to fail, detecting alterations with certainty."
    },
    {
        id: 142,
        question: "Which of the following BEST enables an organization to improve the visibility of end-user computing (EUC) applications that support regulatory reporting?",
        options: [
            "A. EUC tests of operational effectiveness.",
            "B. EUC access control matrix.",
            "C. EUC availability controls.",
            "D. EUC inventory."
        ],
        answer: "D",
        explanation: "An EUC inventory best improves visibility of EUC applications. Without a comprehensive inventory, the organization cannot know what EUC applications exist, which support regulatory reporting, or what controls apply to them. An inventory is the foundational visibility tool that enables all subsequent governance activities."
    },
    {
        id: 143,
        question: "An IS auditor has been asked to investigate critical business applications that have been producing suspicious results. Which of the following should be done FIRST?",
        options: [
            "A. Evaluate control design.",
            "B. Evaluate incident management.",
            "C. Review configuration management.",
            "D. Review user access rights."
        ],
        answer: "D",
        explanation: "Reviewing user access rights should be done first when investigating suspicious application results. Unauthorized access by a user with elevated privileges is a common cause of suspicious application behavior. Identifying who has access and whether any access is inappropriate helps focus the investigation."
    },
    {
        id: 144,
        question: "Which of the following should be the FIRST step to successfully implement a corporate data classification program?",
        options: [
            "A. Check for the required regulatory requirements.",
            "B. Select a data loss prevention (DLP) protocol.",
            "C. Confirm that adequate resources are available for the project.",
            "D. Approve a data classification policy."
        ],
        answer: "D",
        explanation: "Approving a data classification policy is the first step. The policy establishes the classification framework — categories, criteria, and responsibilities — that the entire program will implement. Without an approved policy, there is no authoritative standard to guide classification decisions and program design."
    },
    {
        id: 145,
        question: "Which of the following is BEST supported by enforcing data definition standards within a database?",
        options: [
            "A. Data confidentiality.",
            "B. Data security.",
            "C. Data formatting.",
            "D. Data retention."
        ],
        answer: "C",
        explanation: "Data formatting is best supported by enforcing data definition standards. Data definition standards specify the format, type, length, and valid values for each data field. Enforcement ensures data is stored consistently in the defined format, enabling reliable processing, reporting, and integration."
    },
    {
        id: 146,
        question: "An IS auditor reviewing an information processing environment decides to conduct external penetration testing. Which of the following is MOST appropriate to include in the audit scope for the organization to distinguish between the auditor's penetration attacks and actual attacks?",
        options: [
            "A. Restricted host IP addresses of simulated attacks.",
            "B. Testing techniques of simulated attacks.",
            "C. Source IP addresses of simulated attacks.",
            "D. Timing of simulated attacks."
        ],
        answer: "C",
        explanation: "Including the source IP addresses of simulated attacks in the scope allows security teams to distinguish authorized penetration testing from actual attacks. When the security operations center sees traffic from the documented tester IP addresses, they know it is part of the authorized test rather than a real incident."
    },
    {
        id: 147,
        question: "Which of the following BEST protects private health information from data loss for clients that utilize remote health-monitoring devices?",
        options: [
            "A. Digital certificates.",
            "B. Remote device wipe functionality.",
            "C. Information security training.",
            "D. Encrypted device storage."
        ],
        answer: "D",
        explanation: "Encrypted device storage best protects health information on remote monitoring devices. Encryption ensures that health data stored on the device cannot be read if the device is lost, stolen, or accessed without authorization. This directly protects the confidentiality of sensitive health information at rest."
    },
    {
        id: 148,
        question: "The BEST way to prevent fraudulent payments is to implement segregation of duties between the vendor setup and:",
        options: [
            "A. product registration.",
            "B. procurement.",
            "C. payroll processing.",
            "D. payment processing."
        ],
        answer: "D",
        explanation: "Segregating vendor setup from payment processing best prevents fraudulent payments. If the same person can both add vendors to the system and make payments to them, they could create a fictitious vendor and pay themselves. Separating these duties requires collusion to execute this fraud."
    },
    {
        id: 149,
        question: "Which of the following should be the GREATEST concern for an IS auditor performing a post-implementation review for a major system upgrade?",
        options: [
            "A. Changes are promoted to production by the development group.",
            "B. Developers have access to the testing environment.",
            "C. Object code can be accessed by the development group.",
            "D. Change approvals are not formally documented."
        ],
        answer: "A",
        explanation: "Changes being promoted to production by the development group is the greatest concern. This represents a fundamental SoD violation — developers should not be able to move their own code to production. This control failure enables developers to bypass testing, review, and approval, enabling unauthorized changes."
    },
    {
        id: 150,
        question: "Which of the following observations noted by an IS auditor reviewing internal IT standards is MOST important to address?",
        options: [
            "A. The standards have no reference to an industry-recognized framework.",
            "B. The standards are not detailed in policies and procedures.",
            "C. The standards are not readily available to organization-wide users.",
            "D. The standards have not been revised within the last year."
        ],
        answer: "B",
        explanation: "Standards not being detailed in policies and procedures is most important to address. Standards define what should be achieved; policies and procedures specify how to achieve it. Without operational guidance in policies and procedures, standards remain aspirational rather than actionable, and compliance cannot be systematically achieved."
    },
    {
        id: 151,
        question: "Which of the following is MOST important for an organization to consider when planning to outsource data storage to a third-party provider?",
        options: [
            "A. The cost of delivering the service.",
            "B. The country in which the provider operates.",
            "C. The classification levels of the stored data.",
            "D. The skill set and experience of the provider."
        ],
        answer: "C",
        explanation: "The classification levels of the stored data are most important to consider. Data classification determines the sensitivity of the information and the required protection controls. Higher classification levels may impose contractual, regulatory, or legal restrictions on where and how data can be stored by third parties."
    },
    {
        id: 152,
        question: "An IS auditor has been tasked with analyzing an organization's capital expenditures against its repair and maintenance costs. Which of the following is the BEST reason to use a data analytics tool for this purpose?",
        options: [
            "A. It reduces the sample size required to perform the audit.",
            "B. It improves the reliability of the data.",
            "C. It reduces the error rate.",
            "D. It enables the auditor to work with 100% of the transactions."
        ],
        answer: "D",
        explanation: "Enabling analysis of 100% of transactions is the best reason to use data analytics. Data analytics tools can process the entire population of financial transactions quickly and systematically, providing comprehensive coverage and eliminating sampling risk — a significant advantage over manual sampling approaches."
    },
    {
        id: 153,
        question: "Which of the following presents the GREATEST risk associated with end-user computing (EUC) applications over financial reporting?",
        options: [
            "A. Lack of portability for users.",
            "B. Calculation errors in spreadsheets.",
            "C. Inability to quickly modify and deploy a solution.",
            "D. Loss of time due to manual processes."
        ],
        answer: "B",
        explanation: "Calculation errors in spreadsheets present the greatest risk for EUC financial reporting. Spreadsheets lack automated controls that prevent or detect formula errors. A calculation error in a key financial spreadsheet can propagate through reports and statements, potentially resulting in materially misstated financial information."
    },
    {
        id: 154,
        question: "An IS auditor should look for which of the following to ensure the risk associated with scope creep has been mitigated during software development?",
        options: [
            "A. Source code version control.",
            "B. Project change management controls.",
            "C. Existence of an architecture review board.",
            "D. Configuration management."
        ],
        answer: "B",
        explanation: "Project change management controls are the primary mitigation for scope creep risk. Formal change management requires all scope changes to be documented, analyzed for impact, approved by appropriate stakeholders, and tracked, preventing unauthorized additions to the project scope."
    },
    {
        id: 155,
        question: "Which of the following is MOST important to consider when defining disaster recovery strategies?",
        options: [
            "A. Mean time to restore (MTTR).",
            "B. Maximum time between failures (MTBF).",
            "C. Maximum tolerable downtime (MTD).",
            "D. Mean time to acknowledge (MTTA)."
        ],
        answer: "C",
        explanation: "Maximum tolerable downtime (MTD) is most important when defining recovery strategies. MTD defines the longest period a system can be unavailable before causing unacceptable business impact. Recovery strategies must ensure systems are restored within the MTD; strategies that cannot meet this threshold are inadequate."
    },
    {
        id: 156,
        question: "Which of the following is the GREATEST advantage of agile development over waterfall development?",
        options: [
            "A. Agile development values working software over static documentation.",
            "B. Agile development values processes and tools over individuals and interactions.",
            "C. Agile development values contract negotiation over customer collaboration.",
            "D. Agile development values following a plan over responding to change."
        ],
        answer: "A",
        explanation: "Agile's greatest advantage is valuing working software over comprehensive documentation. By focusing on delivering functional software incrementally, agile enables faster time to value, earlier validation of requirements, and more responsive adaptation to change compared to waterfall's documentation-heavy sequential approach."
    },
    {
        id: 157,
        question: "Which of the following controls provides the MOST protection against ransomware attacks?",
        options: [
            "A. Education and awareness training.",
            "B. Tested and reliable backups.",
            "C. A tested incident response plan.",
            "D. Signature based anti-malware tools."
        ],
        answer: "B",
        explanation: "Tested and reliable backups provide the most protection against ransomware. If an organization can restore from clean backups, it eliminates the leverage ransomware attackers have — the threat to permanently destroy data. Backups that have been tested and are known to work provide the strongest recovery capability."
    },
    {
        id: 158,
        question: "Which of the following is the BEST control to help ensure that security requirements are considered throughout the life cycle of an agile software development project?",
        options: [
            "A. Including project team members who can provide security expertise.",
            "B. Reverting to traditional waterfall software development life cycle (SDLC) techniques.",
            "C. Documenting security control requirements and obtaining internal audit sign off.",
            "D. Requiring the project to go through accreditation before release into production."
        ],
        answer: "A",
        explanation: "Including team members with security expertise is the best control for ensuring security throughout agile development. Embedding security knowledge within the team (DevSecOps approach) ensures security considerations are raised in every sprint, during design, and in code reviews rather than addressed only at the end."
    },
    {
        id: 159,
        question: "Which of the following is MOST important when assembling an internal team to perform penetration testing for the organization?",
        options: [
            "A. Obtain a listing of key systems for testing from management.",
            "B. Gain agreement from management on timing and scope.",
            "C. Perform a scan and identify in-scope assets.",
            "D. Query the company directory to find privileged users."
        ],
        answer: "B",
        explanation: "Gaining management agreement on timing and scope is most important before beginning penetration testing. Without documented authorization defining what can be tested and when, the testing could disrupt operations or be mistaken for an actual attack. Management agreement establishes the legal and operational boundaries for the engagement."
    },
    {
        id: 160,
        question: "Which of the following would a digital signature MOST likely prevent?",
        options: [
            "A. Disclosure.",
            "B. Repudiation.",
            "C. Corruption.",
            "D. Unauthorized change."
        ],
        answer: "B",
        explanation: "Digital signatures most likely prevent repudiation — the denial by the sender that they sent a message. A digital signature created with the sender's private key uniquely identifies them as the sender. They cannot credibly deny sending a message that bears their valid digital signature."
    },
    {
        id: 161,
        question: "An IS auditor is determining the scope for an upcoming audit. Which of the following BEST enables the auditor to ensure appropriate controls are considered?",
        options: [
            "A. Conducting interviews with IT staff.",
            "B. Reading recent industry journal articles.",
            "C. Using an IT-related framework.",
            "D. Reviewing previous audit reports."
        ],
        answer: "C",
        explanation: "Using an IT-related framework best ensures appropriate controls are considered during scope determination. Established frameworks (such as COBIT, ISO 27001, or NIST) provide comprehensive control catalogs and structured guidance that ensure the auditor does not overlook relevant control areas."
    },
    {
        id: 162,
        question: "A PRIMARY objective of risk management is to keep the total cost of risks below the:",
        options: [
            "A. estimated amount of losses included in the firm's budget.",
            "B. amount of losses that would materially damage the firm.",
            "C. costs of loss prevention measures, such as physical security measures.",
            "D. administrative costs of risk management."
        ],
        answer: "B",
        explanation: "The primary objective of risk management is to keep the total cost of risks below the level that would materially damage the firm. This threshold defines when risk becomes existential rather than manageable. Risk management investments are justified when they reduce risk below this critical level."
    },
    {
        id: 163,
        question: "Which of the following should be the role of internal audit in an organization's move to the cloud?",
        options: [
            "A. Identifying and mitigating risk to an acceptable level.",
            "B. Identifying impacts to organizational budgets and resources.",
            "C. Implementing security controls for data prior to migration.",
            "D. Serving as a trusted partner and advisor."
        ],
        answer: "D",
        explanation: "Serving as a trusted partner and advisor is the appropriate role for internal audit in a cloud migration. Internal audit can provide valuable perspective on risks and controls without taking operational responsibility. Identifying or mitigating risks and implementing controls are management responsibilities that would impair audit independence."
    },
    {
        id: 164,
        question: "How does a switched network reduce the risk of network sniffing?",
        options: [
            "A. Switches can detect active packet sniffing devices in their subnet.",
            "B. Packets are not broadcasted throughout the whole subnet.",
            "C. Network traffic is generally reduced.",
            "D. Source and destination addresses are encrypted."
        ],
        answer: "B",
        explanation: "Switched networks reduce sniffing risk because packets are not broadcast to all devices. Switches forward packets only to the specific port of the intended recipient, preventing other devices from seeing traffic not addressed to them — the fundamental mechanism that makes passive sniffing ineffective on switched networks."
    },
    {
        id: 165,
        question: "Which of the following is the MOST effective way for internal audit management to ensure the quality of IS audits is maintained?",
        options: [
            "A. Engage a third party to conduct regular quality assurance (QA) reviews.",
            "B. Include quality metrics in audit staff annual performance evaluations.",
            "C. Introduce a balanced scorecard for internal audit.",
            "D. Conduct control self-assessments (CSA) with IT management."
        ],
        answer: "A",
        explanation: "Engaging a third party for regular QA reviews is the most effective approach. External QA provides independent, objective assessment of audit quality against professional standards. This independence ensures unbiased evaluation that internal reviews and performance metrics cannot provide with the same level of objectivity."
    },
    {
        id: 166,
        question: "In an organization's feasibility study to acquire hardware to support a new web server, omission of which of the following would be of MOST concern?",
        options: [
            "A. Reputation of potential vendors.",
            "B. Alternatives for financing the acquisition.",
            "C. Financial stability of potential vendors.",
            "D. Cost-benefit analysis of available products."
        ],
        answer: "D",
        explanation: "Omission of a cost-benefit analysis is of most concern. The cost-benefit analysis is fundamental to any feasibility study — it determines whether the acquisition is financially justified by comparing expected costs against expected benefits. Without this analysis, there is no basis for concluding the acquisition is feasible."
    },
    {
        id: 167,
        question: "Which of the following is the BEST control to help ensure that security requirements are considered throughout the life cycle of an agile software development project? (repeated)",
        options: [
            "A. Including project team members who can provide security expertise.",
            "B. Reverting to traditional waterfall software development life cycle (SDLC) techniques.",
            "C. Documenting security control requirements and obtaining internal audit sign off.",
            "D. Requiring the project to go through accreditation before release into production."
        ],
        answer: "A",
        explanation: "Including team members with security expertise is the best control for ensuring security throughout agile development. Embedding security knowledge within the team ensures security considerations are addressed continuously in each sprint rather than as a late-stage gate that may delay delivery."
    },
    {
        id: 168,
        question: "Which of the following is the MOST effective way for internal audit to ensure IS audit quality is maintained over time?",
        options: [
            "A. Implement peer review processes within the audit team.",
            "B. Require all auditors to obtain and maintain professional certifications.",
            "C. Perform benchmarking of audit processes against peer organizations.",
            "D. Establish and embed quality assurance (QA) within the IS audit function."
        ],
        answer: "D",
        explanation: "Establishing and embedding QA within the IS audit function provides systematic, ongoing quality management. An embedded QA process evaluates audit quality throughout each engagement rather than only at specific intervals, providing continuous assurance that professional standards are maintained."
    },
    {
        id: 169,
        question: "Which of the following is the PRIMARY objective of enterprise architecture (EA) in IT governance?",
        options: [
            "A. Enforcing compliance with IT policies and standards.",
            "B. Aligning IT capabilities with business strategy and requirements.",
            "C. Documenting all IT systems and infrastructure components.",
            "D. Managing IT project portfolios and investment decisions."
        ],
        answer: "B",
        explanation: "The primary objective of enterprise architecture in IT governance is aligning IT capabilities with business strategy and requirements. EA provides the framework to ensure IT investments and designs support business objectives, creating a coherent technology landscape that enables the organization to achieve its goals."
    },
    {
        id: 170,
        question: "Which of the following BEST enables an organization to manage the risk of employees using unapproved cloud services for business activities?",
        options: [
            "A. Blocking access to all non-approved cloud service providers at the network level.",
            "B. Implementing a cloud access security broker (CASB) solution.",
            "C. Publishing a clear acceptable use policy for cloud services.",
            "D. Requiring employees to submit requests for cloud service approvals."
        ],
        answer: "B",
        explanation: "A cloud access security broker (CASB) best manages shadow IT cloud risk. A CASB provides visibility into cloud service usage, enforces security policies, and can block or restrict unapproved services while allowing approved ones — providing both visibility and control over employee cloud usage that policy alone cannot achieve."
    }
];