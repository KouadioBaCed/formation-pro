export const questionsCISA5 = [
    {
        id: 1,
        question: "Which of the following would BEST help to ensure that potential security issues are considered by the development team as part of incremental changes to agile-developed software?",
        options: [
            "A. Deploy changes in a controlled environment and observe for security defects.",
            "B. Mandate that the change analyses are documented in a standard format.",
            "C. Assign the security risk analysis to a specially trained member of the project management office.",
            "D. Include a mandatory step to analyze the security impact when making changes."
        ],
        answer: "D",
        explanation: "Including a mandatory security impact analysis step for every change ensures security is systematically considered throughout agile development. Making it mandatory and embedded in the change process prevents security from being skipped under time pressure."
    },
    {
        id: 2,
        question: "The waterfall life cycle model of software development is BEST suited for which of the following situations?",
        options: [
            "A. The project will involve the use of new technology.",
            "B. The project intends to apply an object-oriented design approach.",
            "C. The project is subject to time pressures.",
            "D. The project requirements are well understood."
        ],
        answer: "D",
        explanation: "The waterfall model is best suited when project requirements are well understood and stable. Its sequential phases (requirements, design, implementation, testing) depend on complete requirements upfront, making it unsuitable for projects with evolving or unclear requirements."
    },
    {
        id: 3,
        question: "Which of the following is the GREATEST impact as a result of the ongoing deterioration of a detective control?",
        options: [
            "A. Increased number of false negatives in security logs.",
            "B. Decreased effectiveness of root cause analysis.",
            "C. Decreased overall recovery time.",
            "D. Increased demand for storage space for logs."
        ],
        answer: "A",
        explanation: "An increasing number of false negatives — real threats missed by the detection system — is the greatest impact of detective control deterioration. False negatives mean actual incidents go undetected, allowing threats to persist and cause harm without triggering any response."
    },
    {
        id: 4,
        question: "A proper audit trail of changes to server start-up procedures would include evidence of:",
        options: [
            "A. program execution.",
            "B. operator overrides.",
            "C. subsystem structure.",
            "D. security control options."
        ],
        answer: "B",
        explanation: "Operator overrides are the most important evidence in a server start-up audit trail. Overrides represent deviations from standard procedures and could indicate unauthorized changes. Documenting overrides provides accountability and enables investigation of anomalies."
    },
    {
        id: 5,
        question: "An audit identified that a computer system is not assigning sequential purchase order numbers to order requests. The IS auditor is conducting an audit follow-up to determine if management has resolved this finding. Which of the following is the MOST reliable follow-up procedure?",
        options: [
            "A. Inquire with management if the system has been configured and tested to generate sequential order numbers.",
            "B. Review the documentation of recent changes to implement sequential order numbering.",
            "C. Inspect the system settings and transaction logs to determine if sequential order numbers are generated.",
            "D. Examine a sample of system generated purchase orders obtained from management."
        ],
        answer: "C",
        explanation: "Inspecting system settings and transaction logs directly verifies that the control is implemented and functioning. This is the most reliable evidence because it is objective, system-generated, and not dependent on management representations or documentation that may not reflect actual system behavior."
    },
    {
        id: 6,
        question: "Which of the following is the BEST way to enforce the principle of least privilege on a server containing data with different security classifications?",
        options: [
            "A. Limiting access to the data files based on frequency of use.",
            "B. Using scripted access control lists to prevent unauthorized access to the server.",
            "C. Obtaining formal agreement by users to comply with the data classification policy.",
            "D. Applying access controls determined by the data owner."
        ],
        answer: "D",
        explanation: "Applying access controls determined by the data owner best enforces least privilege because the data owner has the authority and knowledge to determine who legitimately needs access to each classified data set, ensuring access is restricted to only those with a justified business need."
    },
    {
        id: 7,
        question: "Which of the following is the BEST way to determine whether a test of a disaster recovery plan (DRP) was successful?",
        options: [
            "A. Analyze whether predetermined test objectives were met.",
            "B. Perform testing at the backup data center.",
            "C. Test offsite backup files.",
            "D. Evaluate participation by key personnel."
        ],
        answer: "A",
        explanation: "Analyzing whether predetermined test objectives were met is the best measure of DRP test success. Clearly defined objectives provide measurable success criteria, enabling objective assessment of whether the DRP performed as required during the test."
    },
    {
        id: 8,
        question: "If enabled within firewall rules, which of the following services would present the GREATEST risk?",
        options: [
            "A. File transfer protocol (FTP).",
            "B. Simple object access protocol (SOAP).",
            "C. Hypertext transfer protocol (HTTP).",
            "D. Simple mail transfer protocol (SMTP)."
        ],
        answer: "A",
        explanation: "FTP presents the greatest risk if enabled in firewall rules because it transmits data including credentials in clear text, supports anonymous access by default, and can be exploited for unauthorized file access and data exfiltration. Its inherent insecurity makes it the most dangerous service to expose."
    },
    {
        id: 9,
        question: "Which of the following is the MOST effective way for an organization to protect against data loss?",
        options: [
            "A. Conduct periodic security awareness training.",
            "B. Limit employee Internet access.",
            "C. Review firewall logs for anomalies.",
            "D. Implement data classification procedures."
        ],
        answer: "D",
        explanation: "Implementing data classification procedures is the most effective protection against data loss. Classification identifies what data is sensitive, enabling the organization to apply appropriate controls proportional to data value and sensitivity, forming the foundation of a data loss prevention strategy."
    },
    {
        id: 10,
        question: "Which of the following is the BEST control to minimize the risk of unauthorized access to lost company-owned mobile devices?",
        options: [
            "A. Device encryption.",
            "B. Device tracking software.",
            "C. Password/PIN protection.",
            "D. Periodic backup."
        ],
        answer: "A",
        explanation: "Device encryption is the best control for lost mobile devices because it renders data unreadable without the encryption key. Even if the device is physically accessed, encrypted data cannot be read, protecting confidentiality regardless of the physical security of the device."
    },
    {
        id: 11,
        question: "In a RACI model, which of the following roles must be assigned to only one individual?",
        options: [
            "A. Responsible.",
            "B. Accountable.",
            "C. Informed.",
            "D. Consulted."
        ],
        answer: "B",
        explanation: "Accountable must be assigned to only one individual in a RACI model. Having a single accountable person ensures clear ownership and prevents ambiguity about who is ultimately answerable for a task or decision. Multiple accountable parties would diffuse responsibility."
    },
    {
        id: 12,
        question: "An IS auditor has found that a vendor has gone out of business and the escrow has an older version of the source code. What is the auditor's BEST recommendation for the organization?",
        options: [
            "A. Perform an analysis to determine the business risk.",
            "B. Develop a maintenance plan to support the application using the existing code.",
            "C. Bring the escrow version up to date.",
            "D. Analyze a new application that meets the current requirements."
        ],
        answer: "A",
        explanation: "Performing a business risk analysis is the best first step. The organization needs to understand the impact of having outdated source code — can the application still be maintained, what gaps exist between the escrowed version and current production, and what business risks these gaps present — before deciding on a course of action."
    },
    {
        id: 13,
        question: "An IS auditor is reviewing the installation of a new server. The IS auditor's PRIMARY objective is to ensure that:",
        options: [
            "A. security parameters are set in accordance with the manufacturer's standards.",
            "B. security parameters are set in accordance with the organization's policies.",
            "C. a detailed business case was formally approved prior to the purchase.",
            "D. the procurement project invited tenders from at least three different suppliers."
        ],
        answer: "B",
        explanation: "Ensuring security parameters align with the organization's policies is the primary objective. The organization's policies define its required security standards, which may be more stringent than manufacturer defaults. Compliance with organizational policy is the auditor's primary concern."
    },
    {
        id: 14,
        question: "An IS auditor finds a high-risk vulnerability in a public-facing web server used to process online customer payments. The IS auditor should FIRST:",
        options: [
            "A. notify the audit committee.",
            "B. review security incident reports.",
            "C. identify compensating controls.",
            "D. document the exception in an audit report."
        ],
        answer: "C",
        explanation: "Identifying compensating controls is the first step to assess the actual risk. Before escalating or reporting, the auditor must determine whether existing controls mitigate the vulnerability's impact. This assessment informs the severity of the finding and appropriate response."
    },
    {
        id: 15,
        question: "An IS auditor discovers that an IT organization serving several business units assigns equal priority to all initiatives, creating a risk of delays in securing project funding. Which of the following would be MOST helpful in matching demand for projects and services with available resources in a way that supports business objectives?",
        options: [
            "A. Risk assessment results.",
            "B. IT governance framework.",
            "C. Project management.",
            "D. Portfolio management."
        ],
        answer: "D",
        explanation: "Portfolio management is most helpful for matching project demand with resources aligned to business objectives. Portfolio management prioritizes investments based on business value and strategic alignment, ensuring resources flow to the most important initiatives rather than treating all projects equally."
    },
    {
        id: 16,
        question: "Which of the following is the MOST efficient way to identify segregation of duties violations in a new system?",
        options: [
            "A. Observe the performance of business processes.",
            "B. Develop a process to identify authorization conflicts.",
            "C. Review a report of security rights in the system.",
            "D. Examine recent system access rights violations."
        ],
        answer: "C",
        explanation: "Reviewing a report of security rights in the system is the most efficient way to identify SoD violations. This provides a complete view of all user permissions that can be analyzed against SoD rules, enabling systematic identification of conflicting access rights across the user population."
    },
    {
        id: 17,
        question: "An internal audit team is deciding whether to use an audit management application hosted by a third party in a different country. What should be the MOST important consideration related to the uploading of payroll audit documentation in the hosted application?",
        options: [
            "A. Per-unit cost charged by the hosting services provider for storage.",
            "B. Privacy regulations affecting the organization.",
            "C. Financial regulations affecting the organization.",
            "D. Data center physical access controls where the application is hosted."
        ],
        answer: "B",
        explanation: "Privacy regulations are the most important consideration when transferring payroll data to a third party in a different country. Payroll data contains personally identifiable information, and cross-border data transfers are subject to privacy laws that may restrict or require specific protections for such transfers."
    },
    {
        id: 18,
        question: "Which of the following is the PRIMARY reason for an IS auditor to conduct post-implementation reviews?",
        options: [
            "A. To document lessons learned to improve future project delivery.",
            "B. To align project objectives with business needs.",
            "C. To determine whether project objectives in the business case have been achieved.",
            "D. To ensure key stakeholder sign-off has been obtained."
        ],
        answer: "C",
        explanation: "The primary reason for post-implementation reviews is to determine whether project objectives in the business case have been achieved. This accountability check confirms that the investment delivered its promised value and that the organization has obtained the expected benefits."
    },
    {
        id: 19,
        question: "Which of the following is the BEST metric to measure the alignment of IT and business strategy?",
        options: [
            "A. Frequency of business process capability maturity assessments.",
            "B. Percentage of enterprise risk assessments that include IT-related risk.",
            "C. Percentage of staff satisfied with their IT-related roles.",
            "D. Level of stakeholder satisfaction with the scope of planned IT projects."
        ],
        answer: "D",
        explanation: "Stakeholder satisfaction with the scope of planned IT projects best measures IT-business alignment. If business stakeholders are satisfied that planned IT projects address their needs, it indicates the IT strategy is effectively aligned with business priorities and objectives."
    },
    {
        id: 20,
        question: "Which of the following is the MOST important activity in the data classification process?",
        options: [
            "A. Determining accountability of data owners.",
            "B. Labeling the data appropriately.",
            "C. Identifying risk associated with the data.",
            "D. Determining the adequacy of privacy controls."
        ],
        answer: "A",
        explanation: "Determining accountability of data owners is the most important activity in data classification. Data owners are responsible for classifying data, making access decisions, and ensuring appropriate controls are applied. Without defined ownership, classification cannot be effectively initiated or maintained."
    },
    {
        id: 21,
        question: "Which of the following is MOST appropriate to prevent unauthorized retrieval of confidential information stored in a business application system?",
        options: [
            "A. Implement segregation of duties.",
            "B. Enforce an internal data access policy.",
            "C. Enforce the use of digital signatures.",
            "D. Apply single sign-on for access control."
        ],
        answer: "B",
        explanation: "Enforcing an internal data access policy is most appropriate for preventing unauthorized retrieval. A well-defined and enforced access policy establishes who can access which data, under what circumstances, providing the governance framework for controlling confidential information access."
    },
    {
        id: 22,
        question: "A project team has decided to switch to an agile approach to develop a replacement for an existing business application. Which of the following should an IS auditor do FIRST to ensure the effectiveness of the project audit?",
        options: [
            "A. Understand the specific agile methodology that will be followed.",
            "B. Interview business process owners to compile a list of business requirements.",
            "C. Compare the agile process with previous methodology.",
            "D. Identify and assess existing agile process controls."
        ],
        answer: "A",
        explanation: "Understanding the specific agile methodology being used is the first step. Different agile approaches (Scrum, Kanban, SAFe) have different processes, artifacts, and controls. The auditor must understand the methodology to identify applicable controls and appropriate audit procedures."
    },
    {
        id: 23,
        question: "During an external review, an IS auditor observes an inconsistent approach in classifying system criticality within the organization. Which of the following should be recommended as the PRIMARY factor to determine system criticality?",
        options: [
            "A. Maximum allowable downtime (MAD).",
            "B. Mean time to restore (MTTR).",
            "C. Recovery point objective (RPO).",
            "D. Key performance indicators (KPIs)."
        ],
        answer: "A",
        explanation: "Maximum allowable downtime (MAD) is the primary factor for determining system criticality. MAD represents the maximum time a system can be unavailable before causing unacceptable business impact, directly reflecting how critical the system is to business operations."
    },
    {
        id: 24,
        question: "Which of the following is the MOST significant risk that IS auditors are required to consider for each engagement?",
        options: [
            "A. Irregularities and illegal acts.",
            "B. Noncompliance with organizational policies.",
            "C. Misalignment with business objectives.",
            "D. Process and resource inefficiencies."
        ],
        answer: "A",
        explanation: "Irregularities and illegal acts are the most significant risk IS auditors must consider for each engagement. These represent fraud, intentional misstatement, and legal violations that can cause severe harm to the organization and its stakeholders, requiring professional skepticism throughout the audit."
    },
    {
        id: 25,
        question: "An externally facing system containing sensitive data is configured such that users have either read-only or administrator rights. Most users of the system have administrator access. Which of the following is the GREATEST risk associated with this situation?",
        options: [
            "A. Users can make unauthorized changes.",
            "B. Users can export application logs.",
            "C. Users can install open-licensed software.",
            "D. Users can view sensitive data."
        ],
        answer: "A",
        explanation: "Users with administrator access being able to make unauthorized changes is the greatest risk. Administrator rights typically allow modification of system configurations, user accounts, and data — creating risk of unauthorized changes to critical system settings and sensitive data."
    },
    {
        id: 26,
        question: "Which of the following is the GREATEST risk associated with utilizing spreadsheets for financial reporting in end-user computing (EUC)?",
        options: [
            "A. Lack of password protection.",
            "B. Lack of processing integrity.",
            "C. Increase in operational incidents.",
            "D. Increase in regulatory violations."
        ],
        answer: "B",
        explanation: "Lack of processing integrity is the greatest risk in spreadsheet-based financial reporting. Spreadsheets are prone to formula errors, incorrect data entry, and undetected changes that can produce materially incorrect financial results without any automated controls to prevent or detect the errors."
    },
    {
        id: 27,
        question: "The decision to accept an IT control risk related to data quality should be the responsibility of the:",
        options: [
            "A. IS audit manager.",
            "B. chief information officer (CIO).",
            "C. information security team.",
            "D. business owner."
        ],
        answer: "D",
        explanation: "The business owner should be responsible for accepting IT control risk related to data quality. As the owner of the data and its associated business processes, the business owner is accountable for the consequences of data quality risk and is best positioned to make informed risk acceptance decisions."
    },
    {
        id: 28,
        question: "An organization's audit charter PRIMARILY:",
        options: [
            "A. describes the auditor's authority to conduct audits.",
            "B. formally records the annual and quarterly audit plans.",
            "C. documents the audit process and reporting standards.",
            "D. defines the auditors' code of conduct."
        ],
        answer: "A",
        explanation: "The audit charter primarily describes the auditor's authority to conduct audits. It establishes the mandate, independence, scope, and access rights of the internal audit function, providing the formal authorization that enables audit activities to be conducted."
    },
    {
        id: 29,
        question: "Following a security breach in which a hacker exploited a well-known vulnerability in the domain controller, an IS auditor has been asked to conduct a control assessment. The auditor's BEST course of action would be to determine if:",
        options: [
            "A. the patches were updated.",
            "B. the logs were monitored.",
            "C. the domain controller was classified for high availability.",
            "D. the network traffic was being monitored."
        ],
        answer: "A",
        explanation: "Determining if patches were updated is the most direct and relevant action after a breach exploiting a known vulnerability. Since the vulnerability was well-known, the absence of patching is the primary control failure. The auditor should verify the patch management process to identify systemic gaps."
    },
    {
        id: 30,
        question: "What is MOST important to verify during an external assessment of network vulnerability?",
        options: [
            "A. Regular review of the network security policy.",
            "B. Location of intrusion detection systems (IDS).",
            "C. Update of security information event management (SIEM) rules.",
            "D. Completeness of network asset inventory."
        ],
        answer: "D",
        explanation: "Completeness of network asset inventory is most important to verify during a network vulnerability assessment. Without a complete inventory, the assessment cannot cover all network assets, leaving unidentified systems potentially vulnerable. You cannot assess what you don't know exists."
    },
    {
        id: 31,
        question: "Which of the following environments is BEST used for copying data and transformation into a compatible data warehouse format?",
        options: [
            "A. Development.",
            "B. Testing.",
            "C. Replication.",
            "D. Staging."
        ],
        answer: "D",
        explanation: "The staging environment is best suited for copying and transforming data into data warehouse format. Staging acts as an intermediate area where data is extracted from source systems, cleansed, transformed, and validated before being loaded into the data warehouse."
    },
    {
        id: 32,
        question: "Which of the following is the BEST recommendation to include in an organization's bring your own device (BYOD) policy to help prevent data leakage?",
        options: [
            "A. Specify employee responsibilities for reporting lost or stolen BYOD devices.",
            "B. Require multi-factor authentication on BYOD devices.",
            "C. Require employees to waive privacy rights related to data on BYOD devices.",
            "D. Allow only registered BYOD devices to access the network."
        ],
        answer: "D",
        explanation: "Allowing only registered BYOD devices to access the network is the best data leakage prevention recommendation. Device registration enables the organization to enforce security requirements, monitor access, and block unregistered devices that cannot be secured or monitored."
    },
    {
        id: 33,
        question: "Which type of testing BEST determines whether a new system meets business requirements and is ready to be placed into production?",
        options: [
            "A. Load testing.",
            "B. User acceptance testing (UAT).",
            "C. Volume testing.",
            "D. Performance testing."
        ],
        answer: "B",
        explanation: "User acceptance testing (UAT) best determines whether a system meets business requirements and is ready for production. UAT involves business users verifying that the system fulfills their requirements in realistic scenarios, providing formal confirmation of business readiness."
    },
    {
        id: 34,
        question: "During audit planning, the IS audit manager is considering whether to budget for audits of entities regarded by the business as having low risk. Which of the following is the BEST course of action in this situation?",
        options: [
            "A. Outsource low-risk audits to external audit service providers.",
            "B. Challenge the risk rating and include the low-risk entities in the plan.",
            "C. Conduct limited-scope audits of low-risk business entities.",
            "D. Validate the low-risk entity ratings and apply professional judgment."
        ],
        answer: "D",
        explanation: "Validating the low-risk ratings and applying professional judgment is the best approach. The audit manager should independently assess whether the business's risk ratings are accurate before making planning decisions. Low-risk classifications may be incorrect, and professional judgment may identify unrecognized risks."
    },
    {
        id: 35,
        question: "An organization has virtualized its server environment without making any other changes to the network or security infrastructure. Which of the following is the MOST significant risk?",
        options: [
            "A. Data center environmental controls not aligning with new configuration.",
            "B. System documentation not being updated to reflect changes in the environment.",
            "C. Vulnerability in the virtualization platform affecting multiple hosts.",
            "D. Inability of the network intrusion detection system (IDS) to monitor virtual server-to-server communications."
        ],
        answer: "D",
        explanation: "The inability of existing network IDS to monitor virtual server-to-server (east-west) traffic is the most significant risk. When servers communicate internally within a virtual environment, traditional network-based monitoring cannot see this traffic, creating a significant visibility blind spot for detecting threats moving laterally."
    },
    {
        id: 36,
        question: "During an audit of an organization's risk management practices, an IS auditor finds several documented IT risk acceptances have not been renewed in a timely manner after the assigned expiration date. When assessing the severity of this finding, which mitigating factor would MOST significantly minimize the associated impact?",
        options: [
            "A. There are documented compensating controls over the business processes.",
            "B. The risk acceptances with issues reflect a small percentage of the total population.",
            "C. The business environment has not significantly changed since the risk acceptances were approved.",
            "D. The risk acceptances were previously reviewed and approved by appropriate senior management."
        ],
        answer: "C",
        explanation: "The business environment not having significantly changed since the risk acceptances were approved most minimizes the impact. If circumstances haven't changed, the expired risk acceptances remain essentially valid in substance even if not renewed in form, reducing the practical risk of the lapse."
    },
    {
        id: 37,
        question: "Which of the following is MOST important for an IS auditor to consider when performing the risk assessment prior to an audit engagement?",
        options: [
            "A. Industry standards and best practices.",
            "B. The amount of time since the previous audit.",
            "C. The results of the previous audit.",
            "D. The design of controls."
        ],
        answer: "C",
        explanation: "The results of the previous audit are most important for the pre-engagement risk assessment. Previous audit findings indicate where controls have failed and where risks have been identified, helping the auditor focus current audit resources on areas with a demonstrated history of issues."
    },
    {
        id: 38,
        question: "An IS auditor is reviewing the deployment of a new automated system. Which of the following findings presents the MOST significant risk?",
        options: [
            "A. Users have not been trained on the new system.",
            "B. The new system is not platform agnostic.",
            "C. Data from the legacy system is not migrated correctly to the new system.",
            "D. The new system has resulted in layoffs of key experienced personnel."
        ],
        answer: "C",
        explanation: "Incorrect data migration is the most significant risk because it directly compromises data integrity from the system's inception. Incorrect historical data in the new system creates a flawed operational foundation, potentially affecting all future decisions and processes dependent on that data."
    },
    {
        id: 39,
        question: "Which of the following is an executive management concern that could be addressed by the implementation of a security metrics dashboard?",
        options: [
            "A. Effectiveness of the security program.",
            "B. Total number of false positives.",
            "C. Total number of hours budgeted to security.",
            "D. Security incidents vs. industry benchmarks."
        ],
        answer: "A",
        explanation: "Effectiveness of the security program is an executive management concern that a security metrics dashboard addresses. Executives need high-level visibility into whether the security program is achieving its objectives, and a dashboard provides this at an appropriate level of abstraction."
    },
    {
        id: 40,
        question: "Which of the following is the BEST way to mitigate the risk associated with unintentional modifications of complex calculations in end-user computing (EUC)?",
        options: [
            "A. Have an independent party review the source calculations.",
            "B. Verify EUC results through manual calculations.",
            "C. Execute copies of EUC programs out of a secure library.",
            "D. Implement complex password controls."
        ],
        answer: "A",
        explanation: "Having an independent party review source calculations is the best mitigation. An independent reviewer can identify formula errors, logic flaws, and unintentional modifications that the creator may overlook. Independence ensures objective verification of calculation accuracy."
    },
    {
        id: 41,
        question: "Which of the following must be in place before an IS auditor initiates audit follow-up activities?",
        options: [
            "A. A management response in the final report with a committed implementation date.",
            "B. A heat map with the gaps and recommendations displayed in terms of risk.",
            "C. Supporting evidence for the gaps and recommendations mentioned in the audit report.",
            "D. Available resources for the activities included in the action plan."
        ],
        answer: "A",
        explanation: "A management response with a committed implementation date must be in place before follow-up activities begin. This documented commitment establishes the baseline against which the auditor assesses whether management has fulfilled its obligations during follow-up."
    },
    {
        id: 42,
        question: "Which of the following is the BEST way to address segregation of duties issues in an organization with budget constraints?",
        options: [
            "A. Perform an independent audit.",
            "B. Implement compensating controls.",
            "C. Hire temporary staff.",
            "D. Rotate job duties periodically."
        ],
        answer: "B",
        explanation: "Implementing compensating controls is the best approach under budget constraints. When additional staff cannot be hired to achieve proper SoD, compensating controls such as enhanced monitoring, transaction log reviews, and supervisory approvals reduce the risk created by the SoD deficiency."
    },
    {
        id: 43,
        question: "The due date of an audit project is approaching, and the audit manager has determined that only 60% of the audit has been completed. Which of the following should the audit manager do FIRST?",
        options: [
            "A. Extend the audit deadline.",
            "B. Escalate to the audit committee.",
            "C. Assign additional resources to supplement the audit.",
            "D. Determine where delays have occurred."
        ],
        answer: "D",
        explanation: "Determining where delays have occurred is the first step. Before deciding on a course of action, the audit manager must understand the root cause of the delays — whether it's scope creep, resource issues, auditee cooperation, or other factors — to select the most appropriate response."
    },
    {
        id: 44,
        question: "During a security audit, an IS auditor is tasked with reviewing log entries obtained from an enterprise intrusion prevention system (IPS). Which type of risk would be associated with the potential for the auditor to miss a sequence of logged events that could indicate an error in the IPS configuration?",
        options: [
            "A. Detection risk.",
            "B. Control risk.",
            "C. Sampling risk.",
            "D. Inherent risk."
        ],
        answer: "A",
        explanation: "Detection risk is the risk that audit procedures will fail to detect a material misstatement or issue. The risk that the auditor misses a significant sequence of log events represents detection risk — the possibility that the audit procedures are insufficient to identify the problem."
    },
    {
        id: 45,
        question: "Which of the following backup schemes is the BEST option when storage media is limited?",
        options: [
            "A. Real-time backup.",
            "B. Differential backup.",
            "C. Virtual backup.",
            "D. Full backup."
        ],
        answer: "B",
        explanation: "Differential backup is the best option when storage media is limited. It backs up only changes since the last full backup, requiring less storage than full backups while being simpler to restore than incremental backups (which require the full backup plus every incremental)."
    },
    {
        id: 46,
        question: "Which of the following should be of GREATEST concern for an IS auditor reviewing an organization's disaster recovery plan (DRP)?",
        options: [
            "A. The DRP has not been updated since an IT infrastructure upgrade.",
            "B. The DRP has not been distributed to end users.",
            "C. The DRP has not been formally approved by senior management.",
            "D. The DRP contains recovery procedures for critical servers only."
        ],
        answer: "A",
        explanation: "The DRP not being updated after an IT infrastructure upgrade is of greatest concern. The infrastructure changes likely altered recovery procedures, dependencies, and system configurations. An outdated DRP may be ineffective or counterproductive during an actual disaster because it doesn't reflect the current environment."
    },
    {
        id: 47,
        question: "A system administrator recently informed the IS auditor about the occurrence of several unsuccessful intrusion attempts from outside the organization. Which of the following is MOST effective in detecting such an intrusion?",
        options: [
            "A. Periodically reviewing log files.",
            "B. Configuring the router as a firewall.",
            "C. Installing biometrics-based authentication.",
            "D. Using smart cards with one-time passwords."
        ],
        answer: "A",
        explanation: "Periodically reviewing log files is the most effective detective control for identifying intrusion attempts. Log reviews reveal patterns of failed access attempts, unusual traffic, and suspicious activities that indicate intrusion attempts, even when individual events don't trigger automated alerts."
    },
    {
        id: 48,
        question: "According to the three lines of defense model for risk management, the second line of defense includes functions that:",
        options: [
            "A. own risks.",
            "B. oversee risks.",
            "C. define risk appetite.",
            "D. provide independent assurance."
        ],
        answer: "B",
        explanation: "The second line of defense oversees risks. It includes functions such as risk management, compliance, and information security that monitor and challenge the first line's risk-taking activities, setting policies and frameworks without owning the risks themselves."
    },
    {
        id: 49,
        question: "Which of the following should be an IS auditor's PRIMARY focus when developing a risk-based IS audit program?",
        options: [
            "A. Business processes.",
            "B. Business plans.",
            "C. Portfolio management.",
            "D. IT strategic plans."
        ],
        answer: "A",
        explanation: "Business processes should be the primary focus when developing a risk-based audit program. Business processes are where risks to organizational objectives materialize. Understanding and assessing risks in business processes enables the auditor to focus audit resources where the impact on business outcomes is greatest."
    },
    {
        id: 50,
        question: "Which of the following is the MOST appropriate and effective fire suppression method for an unstaffed computer room?",
        options: [
            "A. Water sprinkler.",
            "B. Fire extinguishers.",
            "C. Carbon dioxide (CO2).",
            "D. Dry pipe."
        ],
        answer: "C",
        explanation: "Carbon dioxide (CO2) is the most appropriate fire suppression for an unstaffed computer room. CO2 suppresses fire by displacing oxygen without using water that damages equipment. Since the room is unstaffed, an automated gaseous system that doesn't harm electronics is ideal."
    },
    {
        id: 51,
        question: "Which of the following is MOST important for an IS auditor to examine when reviewing an organization's privacy policy?",
        options: [
            "A. Whether there is explicit permission from regulators to collect personal data.",
            "B. The organization's legitimate purpose for collecting personal data.",
            "C. The encryption mechanism selected by the organization for protecting personal data.",
            "D. Whether sharing of personal information with third-party service providers is prohibited."
        ],
        answer: "B",
        explanation: "The organization's legitimate purpose for collecting personal data is most important to examine. Privacy regulations require that personal data collection have a lawful basis and legitimate purpose. Without a documented legitimate purpose, all other privacy controls cannot justify the data collection."
    },
    {
        id: 52,
        question: "An IS auditor reviewing security incident processes realizes incidents are resolved and closed, but root causes are not investigated. Which of the following should be the MAJOR concern with this situation?",
        options: [
            "A. Security incident policies are out of date.",
            "B. Lessons learned have not been properly documented.",
            "C. Vulnerabilities have not been properly addressed.",
            "D. Abuses by employees have not been reported."
        ],
        answer: "C",
        explanation: "Vulnerabilities not being properly addressed is the major concern. Without root cause investigation, the underlying vulnerabilities that enabled incidents remain unaddressed, guaranteeing future incidents. Closing tickets without fixing root causes creates a cycle of recurring security incidents."
    },
    {
        id: 53,
        question: "Which of the following provides the MOST assurance of the integrity of a firewall log?",
        options: [
            "A. The log is retained per policy.",
            "B. Authorized access is required to view the log.",
            "C. The log cannot be modified.",
            "D. The log is reviewed on a monthly basis."
        ],
        answer: "C",
        explanation: "A log that cannot be modified provides the most assurance of integrity. An immutable log cannot be tampered with to hide unauthorized activities, ensuring the log accurately reflects all firewall activity. Read-only or cryptographically protected logs that prevent modification are the highest assurance control."
    },
    {
        id: 54,
        question: "Which of the following is MOST important for an IS auditor to determine during the detailed design phase of a system development project?",
        options: [
            "A. Acceptance test criteria have been developed.",
            "B. Data conversion procedures have been established.",
            "C. The design has been approved by senior management.",
            "D. Program coding standards have been followed."
        ],
        answer: "A",
        explanation: "Acceptance test criteria being developed during the design phase is most important. These criteria define what constitutes successful implementation and must be established before development begins to ensure the system is built to meet agreed specifications rather than adjusted after the fact."
    },
    {
        id: 55,
        question: "Which of the following should an IS auditor consider FIRST when evaluating firewall rules?",
        options: [
            "A. The firewalls' default settings.",
            "B. The physical location of the firewalls.",
            "C. The number of remote nodes.",
            "D. The organization's security policy."
        ],
        answer: "D",
        explanation: "The organization's security policy should be considered first when evaluating firewall rules. The security policy defines what traffic should be permitted or denied. Firewall rules are the technical implementation of policy — without understanding the policy, the auditor cannot assess whether rules are appropriate."
    },
    {
        id: 56,
        question: "An IS auditor has discovered that a software system still in regular use is years out of date and no longer supported. The auditee has stated that it will take six months until the software is running on the current version. Which of the following is the BEST way to reduce the immediate risk associated with using an unsupported version of the software?",
        options: [
            "A. Verify all patches have been applied to the software system's outdated version.",
            "B. Monitor network traffic attempting to reach the outdated software system.",
            "C. Close all unused ports on the outdated software system.",
            "D. Segregate the outdated software system from the main network."
        ],
        answer: "D",
        explanation: "Segregating the outdated software system from the main network is the best immediate risk reduction. Network isolation limits an attacker's ability to reach the vulnerable system and prevents lateral movement if it is compromised, significantly reducing exploitability during the six-month remediation period."
    },
    {
        id: 57,
        question: "The PRIMARY purpose of running a new system in parallel is to:",
        options: [
            "A. validate the operation of the new system against its predecessor.",
            "B. determine which of the two systems is more efficient and effective.",
            "C. resolve any errors in the program and file interfaces.",
            "D. provide the basis for comprehensive unit and system testing."
        ],
        answer: "A",
        explanation: "The primary purpose of parallel running is to validate the new system by comparing its outputs against the established predecessor. Both systems process the same transactions, allowing discrepancies to be identified and resolved before the old system is decommissioned."
    },
    {
        id: 58,
        question: "During the planning phase of a data loss prevention (DLP) audit, management expresses a concern about mobile computing. Which of the following should the IS auditor identify as the associated risk?",
        options: [
            "A. Lack of governance and oversight for IT infrastructure and applications.",
            "B. Increased need for user awareness training.",
            "C. The use of the cloud negatively impacting IT availability.",
            "D. Increased vulnerability due to anytime, anywhere accessibility."
        ],
        answer: "D",
        explanation: "Increased vulnerability due to anytime, anywhere accessibility is the key DLP risk in mobile computing. Mobile devices access organizational data from diverse, uncontrolled environments, making data exposure more likely through insecure networks, device theft, or improper data handling outside the office."
    },
    {
        id: 59,
        question: "An organization has recently acquired and implemented intelligent-agent software for granting loans to customers. During the post-implementation review, which of the following is the MOST important procedure for the IS auditor to perform?",
        options: [
            "A. Review signed approvals to ensure responsibilities for decisions of the system are well defined.",
            "B. Review system documentation to ensure completeness.",
            "C. Review system and error logs to verify transaction accuracy.",
            "D. Review input and output control reports to verify the accuracy of the system decisions."
        ],
        answer: "D",
        explanation: "Reviewing input and output control reports to verify accuracy of system decisions is most important for AI loan decision systems. The system's outputs (loan approvals/denials) must be accurate and consistent with the intended decision criteria, as errors have direct financial and compliance implications."
    },
    {
        id: 60,
        question: "During a new system implementation, an IS auditor has been assigned to review risk management at each milestone. The auditor finds that several risks to project benefits have not been addressed. Who should be accountable for managing these risks?",
        options: [
            "A. Project manager.",
            "B. Information security officer.",
            "C. Project sponsor.",
            "D. Enterprise risk manager."
        ],
        answer: "C",
        explanation: "The project sponsor is accountable for managing risks to project benefits. As the executive champion who approved the business case and owns the benefits realization, the project sponsor is ultimately responsible for ensuring that risks threatening those benefits are identified and addressed."
    },
    {
        id: 61,
        question: "In a post-implementation review of a recently purchased system, it is MOST important for the IS auditor to determine whether the:",
        options: [
            "A. vendor product offered a viable solution.",
            "B. user requirements were met.",
            "C. test scenarios reflected operating activities.",
            "D. stakeholder expectations were identified."
        ],
        answer: "B",
        explanation: "Determining whether user requirements were met is most important in a post-implementation review. This directly assesses whether the system delivered its intended value. Meeting user requirements is the fundamental success criterion for any system implementation."
    },
    {
        id: 62,
        question: "Which of the following strategies BEST optimizes data storage without compromising data retention practices?",
        options: [
            "A. Allowing employees to store large emails on flash drives.",
            "B. Automatically deleting emails older than one year.",
            "C. Moving emails to a virtual email vault after 30 days.",
            "D. Limiting the size of file attachments being sent via email."
        ],
        answer: "C",
        explanation: "Moving emails to a virtual email vault after 30 days best optimizes storage while maintaining retention. The vault uses more efficient compressed storage while preserving all data for required retention periods. This approach reduces primary storage costs without deleting data prematurely."
    },
    {
        id: 63,
        question: "Which of the following will be the MOST effective method to verify that a service vendor keeps control levels as required by the client?",
        options: [
            "A. Obtain evidence of the vendor's control self-assessment (CSA).",
            "B. Periodically review the service level agreement (SLA) with the vendor.",
            "C. Conduct periodic on-site assessments using agreed-upon criteria.",
            "D. Conduct an unannounced vulnerability assessment of vendor's IT systems."
        ],
        answer: "C",
        explanation: "Conducting periodic on-site assessments using agreed-upon criteria is the most effective verification method. On-site assessments using predefined criteria provide direct, objective evidence of control effectiveness rather than relying on the vendor's self-reporting or documentation alone."
    },
    {
        id: 64,
        question: "An IS auditor is reviewing the maturity of a large organization's IT governance. Which of the following BEST demonstrates that IT governance has been effectively implemented?",
        options: [
            "A. The board reviews compliance with legal and regulatory requirements.",
            "B. The board monitors adherence to the organization's information security policy.",
            "C. The board reviews strategic IT key performance indicators (KPIs).",
            "D. The board approves necessary resources for IT security reviews."
        ],
        answer: "C",
        explanation: "The board reviewing strategic IT KPIs best demonstrates effective IT governance implementation. This shows the board is actively engaged in monitoring IT performance against strategic objectives, which is the hallmark of mature IT governance where the board provides meaningful oversight of IT."
    },
    {
        id: 65,
        question: "What should an IS auditor do FIRST upon discovering that a service provider did not notify its customers of a security breach?",
        options: [
            "A. Notify law enforcement of the finding.",
            "B. Require the third party to notify customers.",
            "C. Issue the audit report with a significant finding.",
            "D. Notify audit management of the finding."
        ],
        answer: "D",
        explanation: "Notifying audit management of the finding is the first appropriate action. This is a significant legal and regulatory issue requiring a coordinated response. The IS auditor should escalate to audit management, who will determine the appropriate course of action including involving legal and compliance teams."
    },
    {
        id: 66,
        question: "An IS auditor is reviewing an organization's primary router access control list. Which of the following should result in a finding?",
        options: [
            "A. There are conflicting permit and deny rules for the IT group.",
            "B. There is only one rule per group with access privileges.",
            "C. Individual permissions are overriding group permissions.",
            "D. The network security group can change network address translation (NAT)."
        ],
        answer: "A",
        explanation: "Conflicting permit and deny rules for the IT group should result in a finding. Conflicting rules create ambiguity in access control — depending on rule order and router logic, traffic may be permitted or denied unpredictably, undermining the intended security posture and making the ACL unreliable."
    },
    {
        id: 67,
        question: "Which of the following is the GREATEST risk of using a reciprocal site for disaster recovery?",
        options: [
            "A. Inability to utilize the site when required.",
            "B. Inability to test the recovery plans onsite.",
            "C. Mismatched organizational security policies.",
            "D. Equipment compatibility issues at the site."
        ],
        answer: "A",
        explanation: "Inability to utilize the site when required is the greatest risk of a reciprocal agreement. If both organizations experience a disaster simultaneously (or one organization's site is in use for other purposes), the other organization may not be able to use the site when needed, defeating the recovery strategy."
    },
    {
        id: 68,
        question: "Which of the following BEST enables the timely identification of risk exposure?",
        options: [
            "A. Control self-assessment (CSA).",
            "B. Internal audit review.",
            "C. Stress testing.",
            "D. External audit review."
        ],
        answer: "A",
        explanation: "Control self-assessment (CSA) best enables timely identification of risk exposure. CSA engages operational staff who are closest to risks in continuously assessing their control environment, enabling rapid identification of emerging risks without waiting for periodic formal audit reviews."
    },
    {
        id: 69,
        question: "An IT balanced scorecard is the MOST effective means of monitoring:",
        options: [
            "A. change management effectiveness.",
            "B. return on investment (ROI).",
            "C. governance of enterprise IT.",
            "D. control effectiveness."
        ],
        answer: "C",
        explanation: "An IT balanced scorecard is most effective for monitoring governance of enterprise IT. It measures IT performance across multiple dimensions — financial, customer, internal process, and learning — providing a comprehensive governance dashboard that shows whether IT is aligned with and delivering value to the enterprise."
    },
    {
        id: 70,
        question: "When an IS audit reveals that a firewall was unable to recognize a number of attack attempts, the auditor's BEST recommendation is to place an intrusion detection system (IDS) between the firewall and:",
        options: [
            "A. the organization's web server.",
            "B. the demilitarized zone (DMZ).",
            "C. the Internet.",
            "D. the organization's network."
        ],
        answer: "D",
        explanation: "Placing an IDS between the firewall and the internal network is the best recommendation. This positioning monitors traffic that has passed through the firewall, detecting attacks that evaded firewall rules before they reach internal systems, compensating for the firewall's detection limitations."
    },
    {
        id: 71,
        question: "An organization with many desktop PCs is considering moving to a thin client architecture. Which of the following is the MAJOR advantage?",
        options: [
            "A. Administrative security can be provided for the client.",
            "B. System administration can be better managed.",
            "C. The security of the desktop PC is enhanced.",
            "D. Desktop application software will never have to be upgraded."
        ],
        answer: "B",
        explanation: "Better system administration management is the major advantage of thin client architecture. Centralizing application and data processing on servers allows administrators to manage, update, and secure systems from a single point, significantly reducing the overhead of managing individual PC configurations."
    },
    {
        id: 72,
        question: "Which of the following is MOST important for an IS auditor to look for in a project feasibility study?",
        options: [
            "A. An assessment indicating the benefits will exceed the investment.",
            "B. An assessment indicating security controls will operate effectively.",
            "C. An assessment of whether the expected benefits can be achieved.",
            "D. An assessment of whether requirements will be fully met."
        ],
        answer: "C",
        explanation: "An assessment of whether expected benefits can be achieved is most important in a feasibility study. The feasibility study must demonstrate that the project is viable — that the proposed solution can realistically deliver the promised benefits. This is the core justification for proceeding with the project."
    },
    {
        id: 73,
        question: "An IS auditor wants to determine who has oversight of staff performing a specific task and is referencing the organization's RACI chart. Which of the following roles within the chart would provide this information?",
        options: [
            "A. Accountable.",
            "B. Consulted.",
            "C. Responsible.",
            "D. Informed."
        ],
        answer: "A",
        explanation: "Accountable in the RACI model is the person who has oversight — the one who is ultimately answerable for the correct and thorough completion of the task. The Accountable role provides management oversight of those who are Responsible for performing the work."
    },
    {
        id: 74,
        question: "Which of the following should an IS auditor consider the MOST significant risk associated with a new health records system that replaces a legacy system?",
        options: [
            "A. The deployment project experienced significant overruns, exceeding budget projections.",
            "B. The new system has capacity issues, leading to slow response times for users.",
            "C. Data is not converted correctly, resulting in inaccurate patient records.",
            "D. Staff were not involved in the procurement process, creating user resistance to the new system."
        ],
        answer: "C",
        explanation: "Incorrect data conversion resulting in inaccurate patient records is the most significant risk. In a health records system, data accuracy is critical to patient safety. Inaccurate medical records could lead to incorrect diagnoses or treatments, with potentially life-threatening consequences."
    },
    {
        id: 75,
        question: "During an audit of a multinational bank's disposal process, an IS auditor notes several findings. Which of the following should be the auditor's GREATEST concern?",
        options: [
            "A. Backup media are not reviewed before disposal.",
            "B. Degaussing is used instead of physical shredding.",
            "C. Backup media are disposed before the end of the retention period.",
            "D. Hardware is not destroyed by a certified vendor."
        ],
        answer: "C",
        explanation: "Disposing of backup media before the end of the retention period is the greatest concern. This violates data retention requirements — potentially destroying data needed for regulatory compliance, legal proceedings, or business recovery — and may result in regulatory penalties for the bank."
    },
    {
        id: 76,
        question: "Which of the following BEST enables the effectiveness of an agile project for the rapid development of a new software application?",
        options: [
            "A. The work is separated into phases.",
            "B. The work is separated into sprints.",
            "C. Project milestones are created.",
            "D. Project segments are established."
        ],
        answer: "B",
        explanation: "Separating work into sprints best enables agile project effectiveness. Sprints are the core mechanism of agile development — time-boxed iterations that deliver working software incrementally, enabling rapid feedback, course correction, and continuous value delivery throughout the project."
    },
    {
        id: 77,
        question: "Which of the following would MOST effectively help to reduce the number of repeated incidents in an organization?",
        options: [
            "A. Linking incidents to problem management activities.",
            "B. Training incident management teams on current incident trends.",
            "C. Prioritizing incidents after impact assessment.",
            "D. Testing incident response plans with a wide range of scenarios."
        ],
        answer: "A",
        explanation: "Linking incidents to problem management activities most effectively reduces repeated incidents. Problem management identifies and eliminates root causes of recurring incidents. By connecting each incident to a problem record, the organization ensures underlying causes are investigated and permanently resolved."
    },
    {
        id: 78,
        question: "An IS auditor notes that several employees are spending an excessive amount of time using social media sites for personal reasons. Which of the following should the auditor recommend be performed FIRST?",
        options: [
            "A. Implement policies addressing acceptable usage of social media during working hours.",
            "B. Adjust budget for network usage to include social media usage.",
            "C. Implement a process to actively monitor postings on social networking sites.",
            "D. Use data loss prevention (DLP) tools on endpoints."
        ],
        answer: "A",
        explanation: "Implementing acceptable use policies for social media should be done first. Before implementing monitoring or technical controls, the organization must establish the policy that defines acceptable behavior. The policy provides the governance basis for all subsequent enforcement and technical measures."
    },
    {
        id: 79,
        question: "An organization's software developers need access to personally identifiable information (PII) stored in a particular data format. Which of the following is the BEST way to protect this sensitive information while allowing the developers to use it in development and test environments?",
        options: [
            "A. Data masking.",
            "B. Data encryption.",
            "C. Data tokenization.",
            "D. Data abstraction."
        ],
        answer: "A",
        explanation: "Data masking is the best approach for protecting PII in development and test environments. It replaces sensitive data with realistic but fictitious data that retains the original format and characteristics, allowing developers to work with realistic data without exposing actual PII."
    },
    {
        id: 80,
        question: "Which of the following is MOST important to verify when determining the completeness of the vulnerability scanning process?",
        options: [
            "A. The organization is using a cloud-hosted scanning tool for identification of vulnerabilities.",
            "B. Vulnerability scanning results are reported to the CISO.",
            "C. Access to the vulnerability scanning tool is periodically reviewed.",
            "D. The organization's systems inventory is kept up to date."
        ],
        answer: "D",
        explanation: "An up-to-date systems inventory is most important for vulnerability scanning completeness. The scan can only cover systems it knows about — if the inventory is incomplete, systems will be missed, leaving undiscovered vulnerabilities. A complete inventory is the foundation of comprehensive vulnerability management."
    },
    {
        id: 81,
        question: "Which of the following is the BEST evidence that an organization's IT strategy is aligned to its business objectives?",
        options: [
            "A. The IT strategy has significant impact on the business strategy.",
            "B. The IT strategy is modified in response to organizational changes.",
            "C. The IT strategy is based on IT operational best practices.",
            "D. The IT strategy is approved by executive management."
        ],
        answer: "B",
        explanation: "The IT strategy being modified in response to organizational changes is the best evidence of alignment. Dynamic alignment means IT strategy continuously adapts to reflect changes in business objectives, demonstrating that IT remains responsive to and supportive of evolving business needs."
    },
    {
        id: 82,
        question: "What should be the PRIMARY basis for selecting which IS audits to perform in the coming year?",
        options: [
            "A. Previous audit coverage and scope.",
            "B. Organizational risk assessment.",
            "C. Prior year's audit findings.",
            "D. Senior management's request."
        ],
        answer: "B",
        explanation: "Organizational risk assessment should be the primary basis for annual audit selection. A risk-based approach directs audit resources to areas with the highest risk, ensuring audit coverage is aligned with organizational priorities and provides the most value in addressing significant risks."
    },
    {
        id: 83,
        question: "Which of the following is the BEST method to safeguard data on an organization's laptop computers?",
        options: [
            "A. Two-factor authentication.",
            "B. Full disk encryption.",
            "C. Disabled USB ports.",
            "D. Biometric access control."
        ],
        answer: "B",
        explanation: "Full disk encryption is the best method for safeguarding laptop data. It protects all data on the device regardless of which files are accessed, ensuring that if the laptop is lost or stolen, the data cannot be read without the encryption key — even if the storage is removed from the device."
    },
    {
        id: 84,
        question: "Which of the following is MOST important to determine during the planning phase of a cloud-based messaging and collaboration platform acquisition?",
        options: [
            "A. Processes for on-boarding and off-boarding users to the platform.",
            "B. Processes for reviewing administrator activity.",
            "C. Types of data that can be uploaded to the platform.",
            "D. Role-based access control policies."
        ],
        answer: "C",
        explanation: "Determining what types of data can be uploaded to the platform is most important during planning. Understanding data classification and what sensitive information may flow to the cloud platform enables the organization to assess privacy and security risks before commitment, ensuring appropriate controls are in place from the start."
    },
    {
        id: 85,
        question: "A new regulation requires organizations to report significant security incidents to the regulator within 24 hours of identification. Which of the following is the IS auditor's BEST recommendation to facilitate compliance with the regulation?",
        options: [
            "A. Include the requirement in the incident management response plan.",
            "B. Enhance the alert functionality of the intrusion detection system (IDS).",
            "C. Engage an external security incident response expert for incident handling.",
            "D. Establish key performance indicators (KPIs) for timely identification of security incidents."
        ],
        answer: "A",
        explanation: "Including the 24-hour reporting requirement in the incident management response plan is the best recommendation. The response plan provides the operational procedures for incident handling, and embedding the regulatory notification requirement ensures it is systematically executed for every qualifying incident."
    },
    {
        id: 86,
        question: "A finance group recently implemented new technologies and processes. Which type of IS audit would provide the GREATEST level of assurance that the department's objectives have been met?",
        options: [
            "A. Financial audit.",
            "B. Performance audit.",
            "C. Integrated audit.",
            "D. Cyber audit."
        ],
        answer: "C",
        explanation: "An integrated audit provides the greatest assurance for a finance group with new technologies and processes. It combines both IT and financial audit procedures, assessing whether IT controls support the achievement of financial objectives — providing comprehensive coverage of both the technology and business aspects."
    },
    {
        id: 87,
        question: "Which of the following is the BEST way to verify the effectiveness of a data restoration process?",
        options: [
            "A. Performing periodic reviews of physical access to backup media.",
            "B. Validating offline backups using software utilities.",
            "C. Reviewing and updating data restoration policies annually.",
            "D. Performing periodic complete data restorations."
        ],
        answer: "D",
        explanation: "Performing periodic complete data restorations is the best verification of restoration process effectiveness. Only by actually restoring data and confirming successful recovery can the organization verify that backup data is intact, restoration procedures work, and recovery objectives can be met."
    },
    {
        id: 88,
        question: "Which of the following would BEST help to support an auditor's conclusion about the effectiveness of an implemented data classification program?",
        options: [
            "A. Access rights provisioned according to scheme.",
            "B. Detailed data classification scheme.",
            "C. Purchase of information management tools.",
            "D. Business use cases and scenarios."
        ],
        answer: "A",
        explanation: "Access rights provisioned according to the classification scheme provides the best evidence of program effectiveness. When access controls align with data classifications — more restricted access for higher sensitivity data — it demonstrates that the classification scheme is actively used to drive security decisions."
    },
    {
        id: 89,
        question: "An IS auditor notes that not all security tests were completed for an online sales system recently promoted to production. Which of the following is the auditor's BEST course of action?",
        options: [
            "A. Determine exposure to the business.",
            "B. Increase monitoring for security incidents.",
            "C. Hire a third party to perform security testing.",
            "D. Adjust future testing activities accordingly."
        ],
        answer: "A",
        explanation: "Determining the exposure to the business is the best first action. The auditor must assess what risk exists due to incomplete security testing — what vulnerabilities might be present and what business impact could result — before recommending appropriate compensating or corrective actions."
    },
    {
        id: 90,
        question: "A new system is being developed by a vendor for a consumer service organization. The vendor will provide its proprietary software once system development is completed. Which of the following is the MOST important requirement to include in the vendor contract to ensure continuity?",
        options: [
            "A. Source code for the software must be placed in escrow.",
            "B. Continuous 24/7 support must be available.",
            "C. The vendor must have a documented disaster recovery plan (DRP) in place.",
            "D. The vendor must train the organization's staff to manage the new software."
        ],
        answer: "A",
        explanation: "Source code escrow is the most important continuity requirement for proprietary vendor software. If the vendor goes out of business or discontinues support, the escrowed source code enables the organization or a third party to maintain, modify, and continue operating the software."
    },
    {
        id: 91,
        question: "An auditee disagrees with a recommendation for corrective action that appears in the draft engagement report. Which of the following is the IS auditor's BEST course of action when preparing the final report?",
        options: [
            "A. Come to an agreement prior to issuing the final report.",
            "B. Ensure the auditee's comments are included in the working papers.",
            "C. Exclude the disputed recommendation from the final engagement report.",
            "D. Include the position supported by senior management in the final engagement report."
        ],
        answer: "A",
        explanation: "Coming to an agreement prior to issuing the final report is the best approach. The exit meeting and review process provide an opportunity to resolve disagreements before finalizing the report. This collaborative approach improves the quality of the report and increases the likelihood of management action."
    },
    {
        id: 92,
        question: "Which of the following should an IS auditor ensure is classified at the HIGHEST level of sensitivity?",
        options: [
            "A. Emergency change records.",
            "B. Penetration test results.",
            "C. IT security incidents.",
            "D. Server room access history."
        ],
        answer: "B",
        explanation: "Penetration test results should be classified at the highest sensitivity level. They contain detailed information about exploitable vulnerabilities in the organization's systems. If this information were disclosed to unauthorized parties (especially attackers), it would directly enable exploitation of the identified weaknesses."
    },
    {
        id: 93,
        question: "Which of the following is the MOST important reason to classify a disaster recovery plan (DRP) as confidential?",
        options: [
            "A. Ensure compliance with the data classification policy.",
            "B. Reduce the risk of data leakage that could lead to an attack.",
            "C. Comply with business continuity best practice.",
            "D. Protect the plan from unauthorized alteration."
        ],
        answer: "B",
        explanation: "Reducing the risk of data leakage that could lead to an attack is the most important reason to classify a DRP as confidential. The DRP contains details about system architecture, recovery procedures, and alternate site locations — information that adversaries could exploit to make attacks more effective or target recovery operations."
    },
    {
        id: 94,
        question: "A company has implemented an IT segregation of duties policy. In a role-based environment, which of the following roles may be assigned to an application developer?",
        options: [
            "A. Emergency support.",
            "B. System administration.",
            "C. IT operator.",
            "D. Database administration."
        ],
        answer: "A",
        explanation: "Emergency support can be assigned to an application developer as it is consistent with their knowledge of the application. System administration, database administration, and IT operations are separate roles that would conflict with development, as they provide access to production environments that developers should not routinely access."
    },
    {
        id: 95,
        question: "Which of the following is the MOST effective way to identify exfiltration of sensitive data by a malicious insider?",
        options: [
            "A. Provide ongoing information security awareness training.",
            "B. Establish behavioral analytics monitoring.",
            "C. Review perimeter firewall logs.",
            "D. Implement data loss prevention (DLP) software."
        ],
        answer: "B",
        explanation: "Behavioral analytics monitoring is the most effective way to identify malicious insider exfiltration. By establishing baseline behavior patterns and detecting deviations, behavioral analytics can identify unusual access patterns and data movements that indicate insider threat activity, even when the insider uses legitimate credentials."
    },
    {
        id: 96,
        question: "What is the PRIMARY purpose of documenting audit objectives when preparing for an engagement?",
        options: [
            "A. To identify areas with relatively high probability of material problems.",
            "B. To help ensure maximum use of audit resources during the engagement.",
            "C. To help prioritize and schedule auditee meetings.",
            "D. To address the overall risk associated with the activity under review."
        ],
        answer: "D",
        explanation: "The primary purpose of documenting audit objectives is to address the overall risk associated with the activity under review. Audit objectives define what the audit will assess and why, ensuring the engagement is focused on the risks most relevant to the auditee's activities and organizational objectives."
    },
    {
        id: 97,
        question: "Which of the following should be the IS auditor's PRIMARY focus when evaluating an organization's offsite storage facility?",
        options: [
            "A. Adequacy of physical and environmental controls.",
            "B. Results of business continuity plan (BCP) tests.",
            "C. Shared facilities.",
            "D. Retention policy and period."
        ],
        answer: "A",
        explanation: "Adequacy of physical and environmental controls is the primary focus for offsite storage evaluation. The offsite facility must protect backup media from physical threats such as unauthorized access, fire, flood, and environmental damage — its primary purpose is to provide secure, separate storage for disaster recovery."
    },
    {
        id: 98,
        question: "Which of the following is an example of a preventative control in an accounts payable system?",
        options: [
            "A. Backups of the system and its data are performed on a nightly basis and tested periodically.",
            "B. Policies and procedures are clearly communicated to all members of the accounts payable department.",
            "C. The system only allows payments to vendors who are included in the system's master vendor list.",
            "D. The system produces daily payment summary reports that staff use to compare against invoice totals."
        ],
        answer: "C",
        explanation: "The system restricting payments to vendors in the master vendor list is a preventative control. It proactively prevents payments to unauthorized vendors by technically blocking such transactions before they occur, rather than detecting or correcting them afterward."
    },
    {
        id: 99,
        question: "What is the GREATEST concern for an IS auditor reviewing contracts for licensed software that executes a critical business process?",
        options: [
            "A. An operational level agreement (OLA) was not negotiated.",
            "B. Software escrow was not negotiated.",
            "C. The contract does not contain a right-to-audit clause.",
            "D. Several vendor deliverables missed the commitment date."
        ],
        answer: "B",
        explanation: "Software escrow not being negotiated is the greatest concern for critical business process software. Without escrow, if the software vendor ceases operations or discontinues the product, the organization has no access to the source code needed to maintain or modify the critical software, creating significant business continuity risk."
    },
    {
        id: 100,
        question: "Which of the following would BEST ensure that a backup copy is available for restoration of mission critical data after a disaster?",
        options: [
            "A. Use both tape and disk backup systems.",
            "B. Deploy a fully automated backup maintenance system.",
            "C. Use an electronic vault for incremental backups.",
            "D. Periodically test backups stored in a remote location."
        ],
        answer: "D",
        explanation: "Periodically testing backups stored in a remote location best ensures availability for restoration. Testing verifies that backups are complete, readable, and can be successfully restored. Remote storage ensures availability even if the primary site is destroyed, and testing confirms the backup will actually work when needed."
    },
    {
        id: 101,
        question: "An IS auditor would MOST likely recommend that IT management use a balanced scorecard to:",
        options: [
            "A. assess IT functions and processes.",
            "B. indicate whether the organization meets quality standards.",
            "C. train and educate IT staff.",
            "D. ensure that IT staff meet performance requirements."
        ],
        answer: "A",
        explanation: "An IS auditor would most likely recommend the balanced scorecard to assess IT functions and processes. The balanced scorecard's multi-dimensional measurement framework provides comprehensive assessment of IT performance across financial, customer, process, and learning perspectives."
    },
    {
        id: 102,
        question: "Which of the following would be the BEST process for continuous auditing in a large financial institution?",
        options: [
            "A. Validating performance of help desk metrics.",
            "B. Testing encryption standards on the disaster recovery system.",
            "C. Performing parallel testing between systems.",
            "D. Validating access controls for real time data systems."
        ],
        answer: "D",
        explanation: "Validating access controls for real-time data systems is the best continuous auditing process for a financial institution. Continuous monitoring of who accesses financial data and how, in real time, provides ongoing assurance over the integrity and confidentiality of the most sensitive and rapidly changing financial information."
    },
    {
        id: 103,
        question: "Which of the following occurs during the issues management process for a system development project?",
        options: [
            "A. Configuration management.",
            "B. Help desk management.",
            "C. Contingency planning.",
            "D. Impact assessment."
        ],
        answer: "D",
        explanation: "Impact assessment occurs during the issues management process. When an issue is identified in a development project, its potential impact on scope, schedule, cost, and quality must be assessed to prioritize resolution and inform decision-making about the appropriate response."
    },
    {
        id: 104,
        question: "An IS auditor has been asked to advise on measures to improve IT governance within the organization. Which of the following is the BEST recommendation?",
        options: [
            "A. Implement annual third-party audits.",
            "B. Require executive management to draft IT strategy.",
            "C. Benchmark organizational performance against industry peers.",
            "D. Implement key performance indicators (KPIs)."
        ],
        answer: "D",
        explanation: "Implementing KPIs is the best recommendation for improving IT governance. KPIs provide the measurement framework essential for governance, enabling the organization to track whether IT is meeting its objectives, identify areas for improvement, and demonstrate accountability to stakeholders."
    },
    {
        id: 105,
        question: "An IS auditor finds that capacity management for a key system is being performed by IT with no input from the business. The auditor's PRIMARY concern would be:",
        options: [
            "A. failure to maximize the use of equipment.",
            "B. unanticipated increase in business's capacity needs.",
            "C. cost of excessive data center storage capacity.",
            "D. impact to future business project funding."
        ],
        answer: "B",
        explanation: "Unanticipated increases in business capacity needs is the primary concern. Without business input, IT cannot anticipate future capacity requirements driven by business growth, new initiatives, or seasonal peaks. This misalignment can result in systems being unable to support the business when demand increases."
    },
    {
        id: 106,
        question: "From an IS auditor's perspective, which of the following would be the GREATEST risk associated with an incomplete inventory of deployed software in an organization?",
        options: [
            "A. Inability to determine the cost of deployed software.",
            "B. Inability to close unused ports on critical servers.",
            "C. Inability to identify unused licenses within the organization.",
            "D. Inability to deploy updated security patches."
        ],
        answer: "D",
        explanation: "Inability to deploy security patches is the greatest risk of an incomplete software inventory. Unknown software cannot be patched, leaving unidentified vulnerabilities unaddressed. From a security perspective, unpatched software represents exploitable vulnerabilities that can result in breaches."
    },
    {
        id: 107,
        question: "An IS auditor finds that firewalls are outdated and not supported by vendors. Which of the following should be the auditor's NEXT course of action?",
        options: [
            "A. Report the security posture of the organization.",
            "B. Determine the risk of not replacing the firewall.",
            "C. Report the mitigating controls.",
            "D. Determine the value of the firewall."
        ],
        answer: "B",
        explanation: "Determining the risk of not replacing the firewall is the next appropriate action. The auditor must assess what specific risks the outdated, unsupported firewalls create — what vulnerabilities exist, what attacks they cannot defend against — to accurately characterize the finding and appropriate urgency of remediation."
    },
    {
        id: 108,
        question: "A third-party consultant is managing the replacement of an accounting system. Which of the following should be the IS auditor's GREATEST concern?",
        options: [
            "A. The replacement is occurring near year-end reporting.",
            "B. Data migration is not part of the contracted activities.",
            "C. Testing was performed by the third-party consultant.",
            "D. The user department will manage access rights."
        ],
        answer: "B",
        explanation: "Data migration not being part of the contracted activities is the greatest concern. For an accounting system, complete and accurate migration of historical financial data is essential. If this critical activity is not contracted, there is no assurance it will be performed correctly or at all, risking data loss and integrity issues."
    },
    {
        id: 109,
        question: "Which of the following techniques provides the BEST assurance of server availability over time?",
        options: [
            "A. Analyzing logs in the server administration console.",
            "B. Reviewing reported downtime from users.",
            "C. Evaluating downtime based on planned outages.",
            "D. Manually pinging the server on a daily basis."
        ],
        answer: "A",
        explanation: "Analyzing logs in the server administration console provides the best assurance of availability over time. Server logs capture all uptime and downtime events automatically and objectively, providing a comprehensive, tamper-evident record of actual availability that is more complete than user reports or manual checks."
    },
    {
        id: 110,
        question: "Which of the following is the BEST approach for determining the overall IT risk appetite of an organization when business units use different methods for managing IT risks?",
        options: [
            "A. Average the business units' IT risk levels.",
            "B. Identify the highest-rated IT risk level among the business units.",
            "C. Establish a global IT risk scoring criteria.",
            "D. Prioritize the organization's IT risk scenarios."
        ],
        answer: "C",
        explanation: "Establishing a global IT risk scoring criteria is the best approach. A standardized risk scoring framework allows all business units to assess and communicate IT risks using the same scale, enabling meaningful comparison and aggregation to determine the overall organizational IT risk appetite and exposure."
    },
    {
        id: 111,
        question: "In data warehouse (DW) management, what is the BEST way to prevent data quality issues caused by changes from a source system?",
        options: [
            "A. Restrict access to changes in the extract/transfer/load (ETL) process between the two systems.",
            "B. Include the data warehouse in the impact analysis for any changes in the source system.",
            "C. Configure data quality alerts to check variances between the data warehouse and the source system.",
            "D. Require approval for changes in the extract/transfer/load (ETL) process between the two systems."
        ],
        answer: "B",
        explanation: "Including the data warehouse in impact analysis for source system changes is the best prevention. This ensures that before any source system change is implemented, its downstream effect on the data warehouse is evaluated and the ETL process is updated accordingly, preventing data quality issues proactively."
    },
    {
        id: 112,
        question: "Which of the following would provide an IS auditor with the GREATEST assurance that data disposal controls support business strategic objectives?",
        options: [
            "A. Media shredding policy.",
            "B. Media recycling policy.",
            "C. Media sanitization policy.",
            "D. Media labeling policy."
        ],
        answer: "C",
        explanation: "A media sanitization policy provides the greatest assurance that disposal controls support business objectives. Sanitization ensures data is rendered unrecoverable before media disposal, directly protecting the business from data breaches, regulatory violations, and reputational harm that would undermine strategic objectives."
    },
    {
        id: 113,
        question: "Which of the following is MOST helpful for measuring benefits realization for a new system?",
        options: [
            "A. Balanced scorecard review.",
            "B. Post-implementation review.",
            "C. Business impact analysis (BIA).",
            "D. Function point analysis."
        ],
        answer: "B",
        explanation: "A post-implementation review is most helpful for measuring benefits realization. It specifically compares actual outcomes achieved by the implemented system against the benefits projected in the original business case, directly measuring whether promised value was delivered."
    },
    {
        id: 114,
        question: "Which of the following audit procedures would be MOST conclusive in evaluating the effectiveness of an e-commerce application system's edit routine?",
        options: [
            "A. Review of program documentation.",
            "B. Review of source code.",
            "C. Use of test transactions.",
            "D. Interviews with knowledgeable users."
        ],
        answer: "C",
        explanation: "Using test transactions is the most conclusive procedure for evaluating edit routine effectiveness. By submitting known valid and invalid data and observing the system's responses, the auditor directly verifies that the edit routines function as designed rather than relying on documentation or code review."
    },
    {
        id: 115,
        question: "An IT balanced scorecard is PRIMARILY used for:",
        options: [
            "A. monitoring risk in IT-related processes.",
            "B. measuring IT strategic performance.",
            "C. evaluating the IT project portfolio.",
            "D. allocating IT budget and resources."
        ],
        answer: "B",
        explanation: "An IT balanced scorecard is primarily used for measuring IT strategic performance. It translates IT strategy into measurable objectives across financial, customer, internal process, and learning dimensions, providing a comprehensive view of whether IT is achieving its strategic goals."
    },
    {
        id: 116,
        question: "Which of the following is the BEST way to sanitize a hard disk for reuse to ensure the organization's information cannot be accessed?",
        options: [
            "A. Re-partitioning.",
            "B. Degaussing.",
            "C. Formatting.",
            "D. Data wiping."
        ],
        answer: "D",
        explanation: "Data wiping (secure overwrite) is the best sanitization method for hard disks intended for reuse. It overwrites all data with random patterns multiple times, making recovery effectively impossible while keeping the disk functional for reuse. Degaussing destroys the disk; formatting and re-partitioning do not adequately protect data."
    },
    {
        id: 117,
        question: "Which of the following is the BEST indication of effective IT investment management?",
        options: [
            "A. IT investments are mapped to specific business objectives.",
            "B. The IT investment budget is significantly below industry benchmarks.",
            "C. IT investments are implemented and monitored following a system development life cycle (SDLC).",
            "D. Key performance indicators (KPIs) are defined for each business requiring IT investment."
        ],
        answer: "A",
        explanation: "IT investments being mapped to specific business objectives is the best indication of effective investment management. This alignment ensures IT spending is justified by business value, enabling management to assess whether investments are achieving their intended business outcomes."
    },
    {
        id: 118,
        question: "Which of the following is MOST important with regard to an application development acceptance test?",
        options: [
            "A. User management approves the test design before the test is started.",
            "B. All data files are tested for valid information before conversion.",
            "C. The quality assurance (QA) team is in charge of the testing process.",
            "D. The programming team is involved in the testing process."
        ],
        answer: "A",
        explanation: "User management approving the test design before testing begins is most important. The test design determines what will be tested and how success is measured. Without prior approval, testing may not cover the right scenarios, and results may not be accepted as evidence of system readiness."
    },
    {
        id: 119,
        question: "Which of the following should be an IS auditor's GREATEST concern when an international organization intends to roll out a global data privacy policy?",
        options: [
            "A. Requirements may become unreasonable.",
            "B. Local management may not accept the policy.",
            "C. Local regulations may contradict the policy.",
            "D. The policy may conflict with existing application requirements."
        ],
        answer: "C",
        explanation: "Local regulations contradicting the global policy is the greatest concern. Different jurisdictions have varying and sometimes conflicting privacy requirements. A global policy that contradicts local law creates legal compliance violations that cannot simply be overridden by internal policy, exposing the organization to regulatory sanctions."
    },
    {
        id: 120,
        question: "An IS auditor is conducting a physical security audit of a healthcare facility and finds closed-circuit television (CCTV) systems located in a patient care area. Which of the following is the GREATEST concern?",
        options: [
            "A. There are no notices indicating recording is in progress.",
            "B. Cameras are not monitored 24/7.",
            "C. There are no backups of the videos.",
            "D. The retention period for video recordings is undefined."
        ],
        answer: "A",
        explanation: "The absence of recording notices is the greatest concern in a healthcare patient care area. Recording patients without visible notice may violate privacy laws and healthcare regulations, as patients have a right to know they are being recorded. Failure to notify can result in significant legal and regulatory consequences."
    },
    {
        id: 121,
        question: "Which of the following is the BEST audit procedure to determine whether a firewall is configured in compliance with the organization's security policy?",
        options: [
            "A. Reviewing the system log.",
            "B. Reviewing the actual procedures.",
            "C. Reviewing the parameter settings.",
            "D. Interviewing the firewall administrator."
        ],
        answer: "C",
        explanation: "Reviewing the parameter settings is the best procedure for assessing firewall compliance. The actual configured rules and parameters directly reveal what the firewall permits and denies, enabling the auditor to compare them against the security policy requirements to identify any discrepancies."
    },
    {
        id: 122,
        question: "Which of the following would BEST indicate the effectiveness of a security awareness training program?",
        options: [
            "A. Employee satisfaction with training.",
            "B. Reduced unintentional violations.",
            "C. Results of third-party social engineering tests.",
            "D. Increased number of employees completing training."
        ],
        answer: "B",
        explanation: "Reduced unintentional violations is the best indicator of training effectiveness. A security awareness program's purpose is to change employee behavior. A measurable reduction in unintentional security violations demonstrates that employees have internalized the training and are applying it in their daily work."
    },
    {
        id: 123,
        question: "An organization recently migrated its data warehouse from a legacy system to a different architecture in the cloud. Which of the following should be GREATEST concern to the IS auditor reviewing the new data architecture?",
        options: [
            "A. The cloud data warehouse uses a hybrid cloud architecture.",
            "B. There is increased latency in the data source synchronization to the cloud data warehouse.",
            "C. The migration analyst is not fully trained on the new tools.",
            "D. The data was not cleansed before moving from the source to the cloud data warehouse."
        ],
        answer: "D",
        explanation: "Data not being cleansed before migration is the greatest concern. Migrating uncleansed data perpetuates existing data quality issues in the new environment. Poor data quality in a data warehouse undermines the reliability of all analytics and reporting derived from it, potentially leading to flawed business decisions."
    },
    {
        id: 124,
        question: "Which of the following is the BEST means of defense against social engineering attacks?",
        options: [
            "A. Controlling access to confidential and sensitive information.",
            "B. Performing background checks on all employees.",
            "C. Conducting ongoing security awareness training.",
            "D. Installing antivirus and anti-spyware software."
        ],
        answer: "C",
        explanation: "Ongoing security awareness training is the best defense against social engineering attacks. Social engineering targets human psychology rather than technical vulnerabilities. Training employees to recognize and respond appropriately to social engineering attempts is the most effective countermeasure."
    },
    {
        id: 125,
        question: "The FIRST step in auditing a data communication system is to determine:",
        options: [
            "A. physical security for network equipment.",
            "B. business use and types of messages to be transmitted.",
            "C. traffic volumes and response-time criteria.",
            "D. the level of redundancy in the various communication paths."
        ],
        answer: "B",
        explanation: "Determining the business use and types of messages to be transmitted is the first step. Understanding what the communication system is used for establishes the context for the audit — the business criticality, sensitivity of data transmitted, and applicable regulatory requirements that should inform all subsequent audit procedures."
    },
    {
        id: 126,
        question: "Which of the following is the BEST indicator to measure service quality of change and incident management processes outsourced to an external provider?",
        options: [
            "A. Total number of resolved service requests.",
            "B. Average wait time for service request resolution.",
            "C. Total number of reopened service requests.",
            "D. Percentage of requests resolved within the service level agreement (SLA)."
        ],
        answer: "D",
        explanation: "Percentage of requests resolved within the SLA is the best service quality indicator. This metric directly measures whether the provider is meeting contractual commitments, combining both resolution rate and timeliness into a single measure aligned with agreed service expectations."
    },
    {
        id: 127,
        question: "For the implementation of a program change in a production environment, the MOST important approval required is from:",
        options: [
            "A. the security administrator.",
            "B. the project manager.",
            "C. user management.",
            "D. IS management."
        ],
        answer: "C",
        explanation: "User management approval is most important for implementing program changes in production. Business users are the owners of the processes and systems being changed, and their approval confirms that the change meets business requirements and that they accept the associated risks and impacts."
    },
    {
        id: 128,
        question: "An organization that has decided to approve the use of end-user computing (EUC) should FIRST ensure:",
        options: [
            "A. an EUC policy is developed.",
            "B. EUC controls are reviewed.",
            "C. a business impact analysis (BIA) is conducted.",
            "D. EUC use cases are assessed and documented."
        ],
        answer: "A",
        explanation: "Developing an EUC policy should be the first action. The policy establishes the governance framework for EUC, defining what is permitted, required controls, ownership responsibilities, and approval processes. Without a policy, there is no basis for consistently managing EUC risks across the organization."
    },
    {
        id: 129,
        question: "During a vendor management database audit, an IS auditor identifies multiple instances of duplicate vendor records. In order to prevent recurrence of the same issue, which of the following is the IS auditor's BEST recommendation to management?",
        options: [
            "A. Run system reports of full vendor listings periodically to identify duplication.",
            "B. Perform system verification checks for unique data values on key fields.",
            "C. Request senior management approval of all new vendor details.",
            "D. Build a segregation of duties control into the vendor creation process."
        ],
        answer: "B",
        explanation: "Performing system verification checks for unique data values on key fields is the best recommendation. Automated uniqueness validation at the point of data entry prevents duplicate records from being created in the first place, providing a preventive technical control that is more effective than periodic detective reviews."
    },
    {
        id: 130,
        question: "An organization is modernizing its technology policy framework to demonstrate compliance with external industry standards. Which of the following would be MOST useful to an IS auditor for validating the outcome?",
        options: [
            "A. Mapping of relevant standards against the organization's controls.",
            "B. Inventory of the organization's approved policy exceptions.",
            "C. Policy recommendations from a leading external consulting agency.",
            "D. Benchmarking of internal standards against peer organizations."
        ],
        answer: "A",
        explanation: "Mapping of relevant standards against the organization's controls is most useful for validating compliance. This control-to-standard mapping directly shows which requirements are addressed by which controls and identifies gaps where the organization's controls don't satisfy external standard requirements."
    },
    {
        id: 131,
        question: "Which of the following system implementation approaches allows for the LONGEST overlap period between the old and new systems?",
        options: [
            "A. Phased.",
            "B. Modular.",
            "C. Pilot.",
            "D. Parallel."
        ],
        answer: "D",
        explanation: "Parallel implementation allows for the longest overlap period. In parallel running, both the old and new systems operate simultaneously for an extended period, with users working in both systems until confidence in the new system is established. This provides the maximum safety net but also the longest transition period."
    },
    {
        id: 132,
        question: "Which of the following provides the BEST assurance that a new process for purging transactions does not have a detrimental impact on the integrity of the database?",
        options: [
            "A. Reviewing the entity relationship diagram of the database.",
            "B. Reviewing results of the process in a test environment.",
            "C. Assessing the design of triggers.",
            "D. Analyzing the database structure."
        ],
        answer: "B",
        explanation: "Reviewing results of the process in a test environment provides the best assurance. Actual testing of the purge process against a copy of the production database demonstrates whether referential integrity, cascade effects, and data dependencies are correctly handled, directly validating that the process doesn't harm database integrity."
    },
    {
        id: 133,
        question: "The MOST critical security weakness of a packet level firewall is that it can be circumvented by:",
        options: [
            "A. deciphering the signature information of the packets.",
            "B. using a dictionary attack of encrypted passwords.",
            "C. intercepting packets and viewing passwords sent in clear text.",
            "D. changing the source address on incoming packets."
        ],
        answer: "D",
        explanation: "Changing the source address on incoming packets (IP spoofing) is the most critical weakness of packet-level firewalls. Packet-level firewalls make filtering decisions based on IP addresses. If an attacker spoofs a trusted source address, the firewall may allow malicious traffic it would otherwise block."
    },
    {
        id: 134,
        question: "Which of the following should be the FIRST step when conducting an IT risk assessment?",
        options: [
            "A. Assess vulnerabilities.",
            "B. Evaluate controls in place.",
            "C. Identify assets to be protected.",
            "D. Identify potential threats."
        ],
        answer: "C",
        explanation: "Identifying assets to be protected is the first step in an IT risk assessment. Before assessing threats, vulnerabilities, or controls, the organization must know what it is trying to protect. Asset identification defines the scope and subject of the risk assessment."
    },
    {
        id: 135,
        question: "Which of the following BEST enables alignment of IT with business objectives?",
        options: [
            "A. Benchmarking against peer organizations.",
            "B. Completing an IT risk assessment.",
            "C. Developing key performance indicators (KPIs).",
            "D. Leveraging an IT governance framework."
        ],
        answer: "D",
        explanation: "Leveraging an IT governance framework best enables IT-business alignment. A governance framework provides the structures, processes, and mechanisms needed to systematically align IT strategy, investments, and operations with business objectives — providing a sustainable approach to ongoing alignment."
    },
    {
        id: 136,
        question: "At the end of each business day, a business-critical application generates a report of financial transactions greater than a certain value, and an employee then checks these transactions for errors. What type of control is in place?",
        options: [
            "A. Deterrent.",
            "B. Preventive.",
            "C. Corrective.",
            "D. Detective."
        ],
        answer: "D",
        explanation: "This is a detective control — the end-of-day report and employee review identify errors after transactions have been processed. Detective controls find problems that have already occurred, as opposed to preventive controls that stop errors before they happen."
    },
    {
        id: 137,
        question: "A data center's physical access log system captures each visitor's identification document numbers along with the visitor's photo. Which of the following sampling methods would be MOST useful to an IS auditor conducting compliance testing for the effectiveness of the system?",
        options: [
            "A. Attribute sampling.",
            "B. Quota sampling.",
            "C. Variable sampling.",
            "D. Haphazard sampling."
        ],
        answer: "A",
        explanation: "Attribute sampling is most useful for compliance testing of the access log system. Attribute sampling tests whether each log entry has or does not have required attributes (complete ID number, photo present), measuring the rate of compliance with defined requirements — perfect for binary compliance testing."
    },
    {
        id: 138,
        question: "Which of the following BEST enables an organization to determine the priority of applications to be recovered in the event of a disaster?",
        options: [
            "A. Business impact analysis (BIA).",
            "B. Return on investment (ROI) analysis.",
            "C. Threat analysis.",
            "D. Legal and regulatory needs analysis."
        ],
        answer: "A",
        explanation: "A BIA best enables recovery priority determination. The BIA identifies the business impact of losing each application over time, establishing which applications are most critical to business survival and therefore must be recovered first — forming the foundation of recovery prioritization."
    },
    {
        id: 139,
        question: "Which of the following methods would BEST ensure that IT strategy is in line with business strategy?",
        options: [
            "A. Break-even point analysis.",
            "B. Business impact analysis (BIA).",
            "C. Critical path analysis.",
            "D. IT value analysis."
        ],
        answer: "D",
        explanation: "IT value analysis best ensures IT strategy aligns with business strategy by evaluating whether IT initiatives deliver the business value articulated in the strategy. IT value analysis directly measures strategic contribution, confirming that IT investments are directed at and achieving business strategic objectives."
    },
    {
        id: 140,
        question: "Which of the following has the GREATEST potential impact on the independence of an IS auditor?",
        options: [
            "A. Prior experience in IS audit.",
            "B. Prior relationship with vendors.",
            "C. Prior knowledge of technology.",
            "D. Prior job responsibilities."
        ],
        answer: "D",
        explanation: "Prior job responsibilities have the greatest potential impact on IS auditor independence. If an auditor previously performed or was responsible for the activities being audited, they would be reviewing their own work, creating a direct conflict of interest that significantly impairs objectivity."
    },
    {
        id: 141,
        question: "Which of the following should an IS auditor do FIRST when assessing the level of compliance for an organization in the banking industry?",
        options: [
            "A. Review internal documentation to evaluate adherence to external requirements.",
            "B. Confirm there are procedures in place to ensure organizational agreements address legal requirements.",
            "C. Determine whether the organization has established benchmarks against industry peers for compliance.",
            "D. Identify industry-specific requirements that apply to the organization."
        ],
        answer: "D",
        explanation: "Identifying industry-specific requirements that apply to the organization is the first step. Before assessing compliance, the auditor must know what the organization is required to comply with. The applicable regulatory landscape defines the compliance framework against which the organization will be assessed."
    },
    {
        id: 142,
        question: "Which of the following is the MOST effective control to mitigate against the risk of inappropriate activity by employees?",
        options: [
            "A. Two-factor authentication.",
            "B. Network segmentation.",
            "C. User activity monitoring.",
            "D. Access recertification."
        ],
        answer: "C",
        explanation: "User activity monitoring is the most effective control for mitigating inappropriate employee activity. It detects unauthorized or policy-violating actions in real time or through log analysis, creating accountability and enabling rapid response to inappropriate behavior by employees with legitimate system access."
    },
    {
        id: 143,
        question: "Which of the following is MOST important for an IS auditor to test when reviewing market data received from external providers?",
        options: [
            "A. Data transformation configurations.",
            "B. Data loading controls.",
            "C. Data quality controls.",
            "D. Data encryption configurations."
        ],
        answer: "C",
        explanation: "Data quality controls are most important to test for external market data. The reliability of financial decisions based on market data depends entirely on its accuracy, completeness, and timeliness. Inadequate data quality controls could result in erroneous financial analysis and decisions."
    },
    {
        id: 144,
        question: "Who is PRIMARILY responsible for the design of IT controls to meet control objectives?",
        options: [
            "A. IT manager.",
            "B. Internal auditor.",
            "C. Business management.",
            "D. Risk management."
        ],
        answer: "A",
        explanation: "The IT manager is primarily responsible for designing IT controls. IT management owns the systems and processes that controls protect and has the technical expertise to design controls that effectively address the identified objectives. Internal audit assesses these controls but should not design them."
    },
    {
        id: 145,
        question: "Which of the following should an organization do to anticipate the effects of a disaster?",
        options: [
            "A. Develop a business impact analysis (BIA).",
            "B. Define recovery point objectives (RPO).",
            "C. Simulate a disaster recovery.",
            "D. Analyze capability maturity model gaps."
        ],
        answer: "A",
        explanation: "Developing a BIA is the best approach to anticipate the effects of a disaster. The BIA systematically analyzes the potential impact of disruptions on business processes, functions, and resources, providing the foundation for understanding what a disaster would mean for the organization."
    },
    {
        id: 146,
        question: "Which of the following risk scenarios is BEST addressed by implementing policies and procedures related to full disk encryption?",
        options: [
            "A. Data leakage as a result of employees leaving to work for competitors.",
            "B. Physical theft of media on which information is stored.",
            "C. Unauthorized logical access to information through an application interface.",
            "D. Noncompliance fines related to storage of regulated information."
        ],
        answer: "B",
        explanation: "Full disk encryption best addresses the risk of physical theft of storage media. Encryption renders data unreadable without the decryption key, so stolen physical media cannot be accessed by unauthorized parties even if they extract the storage device from the device."
    },
    {
        id: 147,
        question: "Which of the following is the BEST indication to an IS auditor that management's post-implementation review was effective?",
        options: [
            "A. Internal audit follow-up was completed without any findings.",
            "B. Lessons learned were documented and applied.",
            "C. Post-implementation review is a formal phase in the system development life cycle (SDLC).",
            "D. Business and IT stakeholders participated in the post-implementation review."
        ],
        answer: "B",
        explanation: "Lessons learned being documented and applied is the best indication of an effective PIR. A PIR is effective when it produces actionable insights that are actually used to improve future projects. Documented and applied lessons demonstrate the review generated lasting organizational learning."
    },
    {
        id: 148,
        question: "Which of the following provides the MOST reliable method of preventing unauthorized logon?",
        options: [
            "A. Limiting after-hours usage.",
            "B. Reinforcing current security policies.",
            "C. Issuing authentication tokens.",
            "D. Installing an automatic password generator."
        ],
        answer: "C",
        explanation: "Issuing authentication tokens provides the most reliable unauthorized logon prevention. Tokens generate one-time passwords or provide a second authentication factor that cannot be easily guessed or stolen like traditional passwords, significantly reducing the risk of unauthorized access through stolen credentials."
    },
    {
        id: 149,
        question: "When designing a data analytics process, which of the following should be the stakeholder's role in automating data extraction and validation?",
        options: [
            "A. Allocating the resources necessary to purchase the appropriate software packages.",
            "B. Indicating which data elements are necessary to make informed decisions.",
            "C. Designing the workflow necessary for the data analytics tool to evaluate the appropriate data.",
            "D. Performing the business case analysis for the data analytics initiative."
        ],
        answer: "B",
        explanation: "Indicating which data elements are necessary to make informed decisions is the stakeholder's role. Stakeholders understand the business context and decision-making requirements, enabling them to specify what data the analytics process must include. Technical implementation of the process is the role of data and analytics professionals."
    },
    {
        id: 150,
        question: "An organization has an acceptable use policy in place, but users do not formally acknowledge the policy. Which of the following is the MOST significant risk from this finding?",
        options: [
            "A. Violation of industry standards.",
            "B. Lack of data for measuring compliance.",
            "C. Noncompliance with documentation requirements.",
            "D. Lack of user accountability."
        ],
        answer: "D",
        explanation: "Lack of user accountability is the most significant risk. Without formal acknowledgment, users cannot be held accountable for policy violations, as they can claim ignorance of the policy. Formal acknowledgment creates the legal and disciplinary basis for enforcing the policy and holding violators accountable."
    },
    {
        id: 151,
        question: "Data from a system of sensors located outside of a network is received by the open ports on a server. Which of the following is the BEST way to ensure the integrity of the data being collected from the sensor system?",
        options: [
            "A. Implement network address translation on the sensor system.",
            "B. Route the frame from the sensor system through a proxy server.",
            "C. Transmit the sensor data via a virtual private network (VPN) to the server.",
            "D. Hash the data that is transmitted from the sensor system."
        ],
        answer: "D",
        explanation: "Hashing the transmitted sensor data best ensures integrity. A hash function creates a unique fingerprint of the data that changes if any data is altered during transmission. The server can verify the received hash against an expected value to confirm the data arrived intact and unmodified."
    },
    {
        id: 152,
        question: "The PRIMARY benefit of a risk-based audit methodology is to:",
        options: [
            "A. identify key controls.",
            "B. understand business processes.",
            "C. reduce audit scope.",
            "D. prioritize audit resources."
        ],
        answer: "D",
        explanation: "The primary benefit of a risk-based audit methodology is to prioritize audit resources. By focusing on areas with the highest risk, the organization ensures audit effort is directed where it provides the greatest value in identifying and addressing significant threats to organizational objectives."
    },
    {
        id: 153,
        question: "Which of the following is MOST helpful to an IS auditor when assessing the effectiveness of controls?",
        options: [
            "A. Interviews with management.",
            "B. A control self-assessment (CSA).",
            "C. Results of control testing.",
            "D. A control matrix."
        ],
        answer: "C",
        explanation: "Results of control testing are most helpful for assessing control effectiveness. Direct testing provides objective, evidence-based evaluation of whether controls are actually working as intended. Testing produces more reliable evidence than interviews, self-assessments, or documentation that may not reflect actual control performance."
    },
    {
        id: 154,
        question: "A bank's transactional services are exclusively conducted online via Internet and mobile banking. Both its primary and disaster recovery sites are supported by the same ISP. Which of the following is the BEST way for the bank to minimize risk in this situation?",
        options: [
            "A. Conduct incremental backups of transactional data every two hours.",
            "B. Conduct real-time data synchronization between the primary and disaster recovery sites.",
            "C. Revise the current contract to require 99.99% connection availability with the current ISP.",
            "D. Establish a contractual agreement with a second ISP to cover connection to the disaster recovery site."
        ],
        answer: "D",
        explanation: "Establishing a contract with a second ISP for the disaster recovery site best minimizes risk. If both sites use the same ISP and that ISP fails, both sites lose connectivity simultaneously. A second ISP for the recovery site eliminates this single point of failure in the connectivity architecture."
    },
    {
        id: 155,
        question: "An IS auditor notes that a mortgage origination team receives customer loan applications via a shared repository. Which of the following findings presents the GREATEST privacy risk for this process?",
        options: [
            "A. Shared repository lacks dual access controls.",
            "B. Customer data is not updated in the origination system.",
            "C. Loan documentation is not purged from the system.",
            "D. Duplicate loan applications are not flagged for attention."
        ],
        answer: "C",
        explanation: "Loan documentation not being purged from the system is the greatest privacy risk. Retaining customer loan applications indefinitely beyond their required retention period increases the scope of data at risk in a breach and may violate privacy regulations requiring data minimization and timely disposal of personal information."
    },
    {
        id: 156,
        question: "An IS auditor previously worked in an organization's IT department and was involved with the design of the business continuity plan (BCP). The IS auditor has now been asked to review this same BCP. What should the auditor do FIRST?",
        options: [
            "A. Document the conflict in the audit report.",
            "B. Report the conflict of interest to the chief compliance officer.",
            "C. Communicate the conflict of interest to the audit manager.",
            "D. Decline the audit assignment."
        ],
        answer: "C",
        explanation: "Communicating the conflict of interest to the audit manager is the first appropriate action. The audit manager has the authority and responsibility to determine how to handle the conflict — whether to reassign the audit, add additional oversight, or take other measures — rather than the individual auditor unilaterally declining."
    },
    {
        id: 157,
        question: "Which of the following is MOST important when evaluating the design effectiveness of multi-factor authentication?",
        options: [
            "A. Reviewing the physical controls related to the storage of the hardware tokens.",
            "B. Ensuring segregation is maintained by storing the two factors in separate databases.",
            "C. Determining the identification process for each factor and ensuring they are synchronized.",
            "D. Evaluating whether false rejection and false acceptance rates have been adequately defined."
        ],
        answer: "D",
        explanation: "Evaluating whether false rejection and false acceptance rates have been adequately defined is most important for MFA design effectiveness. These rates determine the balance between security and usability — high false acceptance allows unauthorized access; high false rejection frustrates legitimate users. Proper calibration is essential to effective MFA design."
    },
    {
        id: 158,
        question: "Which of the following technologies has the SMALLEST maximum range for data transmission between devices?",
        options: [
            "A. Wi-Fi.",
            "B. Bluetooth.",
            "C. Long-term evolution (LTE).",
            "D. Near-field communication (NFC)."
        ],
        answer: "D",
        explanation: "Near-field communication (NFC) has the smallest maximum range, operating effectively only within a few centimeters (typically less than 20cm). This extremely limited range is intentional for secure contactless transactions, making it the shortest-range of the listed wireless technologies."
    },
    {
        id: 159,
        question: "Which of the following is the BEST way for management to ensure the effectiveness of the cybersecurity incident response process?",
        options: [
            "A. Periodic tabletop exercises involving key stakeholders.",
            "B. Periodic update of incident response process documentation.",
            "C. Periodic cybersecurity training for staff involved in incident response.",
            "D. Periodic reporting of cybersecurity incidents to key stakeholders."
        ],
        answer: "A",
        explanation: "Periodic tabletop exercises involving key stakeholders are the best way to ensure incident response effectiveness. Exercises simulate real incidents, identifying gaps in the process, testing coordination between teams, and building the organizational muscle memory needed for effective real-world response."
    },
    {
        id: 160,
        question: "When reviewing a project to replace multiple manual data entry systems with an artificial intelligence (AI) system, the IS auditor should be MOST concerned with the impact AI will have on:",
        options: [
            "A. future task updates.",
            "B. enterprise architecture (EA).",
            "C. task capacity output.",
            "D. employee retention."
        ],
        answer: "B",
        explanation: "The impact on enterprise architecture is the most important concern. Replacing multiple manual systems with an AI system fundamentally changes the technology landscape, data flows, integration points, and system dependencies. These architectural changes affect the entire IT ecosystem and must be carefully managed."
    },
    {
        id: 161,
        question: "Which of the following is a core functionality of a configuration and release management system?",
        options: [
            "A. Identifying other configuration items that will be impacted by a given change.",
            "B. Identifying vulnerabilities in configuration settings.",
            "C. Deploying a configuration change to the sandbox environment.",
            "D. Managing privileged access to databases, servers, and infrastructure."
        ],
        answer: "A",
        explanation: "Identifying configuration items impacted by a given change is a core function of configuration management. By maintaining a configuration database (CMDB) with relationships between components, the system can identify dependencies and determine what else will be affected when a change is made."
    },
    {
        id: 162,
        question: "In an annual audit cycle, the audit of an organization's IT department resulted in many findings. Which of the following would be the MOST important consideration when planning the next audit?",
        options: [
            "A. Limiting the review to the deficient areas.",
            "B. Following up on the status of all recommendations.",
            "C. Verifying that all recommendations have been implemented.",
            "D. Postponing the review until all of the findings have been rectified."
        ],
        answer: "B",
        explanation: "Following up on the status of all recommendations is the most important consideration. After many findings, the next audit must include follow-up to verify whether management has addressed the identified risks. This accountability check is fundamental to the audit cycle and should not be deprioritized."
    },
    {
        id: 163,
        question: "An IS auditor finds ad hoc vulnerability scanning is in place with no clear alignment to the organization's wider security threat and vulnerability management program. Which of the following would BEST enable the organization to work toward improvement in this area?",
        options: [
            "A. Outsourcing the threat and vulnerability management function to a third party.",
            "B. Maintaining a catalog of vulnerabilities that may impact mission-critical systems.",
            "C. Using a capability maturity model to identify a path to an optimized program.",
            "D. Implementing security logging to enhance threat and vulnerability management."
        ],
        answer: "C",
        explanation: "Using a capability maturity model is best for improving from ad hoc scanning to an optimized program. The maturity model provides a structured roadmap of improvement steps from the current unstructured state, identifying what capabilities need to be developed and in what sequence to achieve a mature program."
    },
    {
        id: 164,
        question: "Which of the following will BEST help detect software licensing issues in a networked environment where all software is purchased and loaded by IT?",
        options: [
            "A. Comparing the software on each machine to the listing of software purchased.",
            "B. Comparing the number of individual software instances installed to the license inventory.",
            "C. Reviewing listings of software on each machine for known versions of unlicensed software.",
            "D. Reviewing reports demonstrating that metering software is not being used to access per-seat software."
        ],
        answer: "B",
        explanation: "Comparing the number of installed software instances against the license inventory best detects licensing issues. This comparison directly identifies over-deployment (more installations than licenses purchased), which is the primary licensing compliance risk when all software is purchased and loaded by IT."
    },
    {
        id: 165,
        question: "Which of the following would be the BEST criteria for monitoring an IT vendor's service levels?",
        options: [
            "A. Performance metrics.",
            "B. Surprise visit to vendor.",
            "C. Service auditor's report.",
            "D. Interview with vendor."
        ],
        answer: "A",
        explanation: "Performance metrics are the best criteria for monitoring vendor service levels. Quantitative metrics provide objective, measurable evidence of actual service delivery against SLA commitments, enabling consistent tracking and comparison over time without reliance on vendor self-reporting or periodic visit observations."
    },
    {
        id: 166,
        question: "Which of the following is the PRIMARY reason for using a hash function?",
        options: [
            "A. To verify the integrity of data.",
            "B. To encrypt private keys.",
            "C. To create a fixed length value of a public key.",
            "D. To authorize the receiver of data."
        ],
        answer: "A",
        explanation: "The primary reason for using a hash function is to verify the integrity of data. A hash produces a unique fixed-length value (digest) for given input data. Any change to the data produces a different hash, enabling detection of unauthorized modifications by comparing computed hashes."
    },
    {
        id: 167,
        question: "A sample for testing must include the 80 largest client balances and a random sample of the rest. What should the IS auditor recommend?",
        options: [
            "A. Query the database.",
            "B. Use generalized audit software.",
            "C. Develop an integrated test facility (ITF).",
            "D. Leverage a random number generator."
        ],
        answer: "B",
        explanation: "Generalized audit software (GAS) is the best recommendation. GAS can automatically identify the 80 largest balances and generate a statistically valid random sample of the remaining population, combining both targeted and random sampling in a single efficient process while maintaining an audit trail."
    },
    {
        id: 168,
        question: "A bank has a combination of corporate customer accounts (higher monetary value) and small business accounts (lower monetary value) as part of online banking. Which of the following is the BEST sampling approach for an IS auditor to use for these accounts?",
        options: [
            "A. Unstratified mean per unit sampling.",
            "B. Stratified mean per unit sampling.",
            "C. Customer unit sampling.",
            "D. Difference estimation sampling."
        ],
        answer: "B",
        explanation: "Stratified mean per unit sampling is the best approach for a population with two distinct groups of different monetary value. By stratifying the population into corporate and small business accounts, the auditor can allocate sampling effort proportionally to risk (higher for large-value corporate accounts) and achieve more precise estimates."
    },
    {
        id: 169,
        question: "Which of the following is the BEST way to sanitize a hard disk that is no longer needed for organizational use?",
        options: [
            "A. Formatting the hard disk multiple times.",
            "B. Physically destroying the hard disk.",
            "C. Using certified data wiping software.",
            "D. Removing and storing the hard disk securely."
        ],
        answer: "B",
        explanation: "Physically destroying the hard disk is the best sanitization method for media that will no longer be used. Physical destruction — shredding, crushing, or degaussing — ensures data cannot be recovered by any means, providing the highest assurance of data elimination when the media has no further use."
    },
    {
        id: 170,
        question: "Which of the following is MOST important for an IS auditor to consider when evaluating an organization's IT outsourcing arrangement?",
        options: [
            "A. The cost savings achieved through the outsourcing arrangement.",
            "B. The service provider's financial stability and reputation.",
            "C. The right-to-audit clause included in the outsourcing contract.",
            "D. The alignment of the service provider's controls with organizational requirements."
        ],
        answer: "C",
        explanation: "The right-to-audit clause is most important for an IS auditor evaluating an outsourcing arrangement. Without the contractual right to audit, the IS auditor cannot independently verify that the service provider's controls are effective, making it impossible to provide assurance about the outsourced activities."
    }
];