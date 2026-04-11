export const questionsCISA2 = [
    {
        id: 1,
        question: "Which of the following BEST facilitates detection of zero-day exploits?",
        options: [
            "A. Anti-malware software.",
            "B. User behavior analytics.",
            "C. Intrusion detection systems (IDS).",
            "D. Intrusion prevention systems (IPS)."
        ],
        answer: "B",
        explanation: "User behavior analytics (UBA) detects anomalies in user behavior patterns that may indicate zero-day exploits, even when no known signature exists. Traditional anti-malware, IDS, and IPS rely on known signatures or patterns and are less effective against previously unknown threats."
    },
    {
        id: 2,
        question: "Which of the following is MOST important to review when evaluating the performance of a critical web application?",
        options: [
            "A. Business-defined application response times.",
            "B. Feedback from customer satisfaction surveys.",
            "C. Roles and responsibilities for reporting.",
            "D. Strategy for application performance monitoring in the cloud."
        ],
        answer: "A",
        explanation: "Business-defined application response times provide measurable, objective criteria against which actual performance can be compared. These SLA-based metrics directly reflect whether the application is meeting business expectations and are the most relevant measure of performance."
    },
    {
        id: 3,
        question: "Which of the following would be an IS auditor's GREATEST concern when reviewing the early stages of a software development project?",
        options: [
            "A. The lack of acceptance criteria behind user requirements.",
            "B. The lack of completion of all requirements at the end of each sprint.",
            "C. The lack of technical documentation to support the program code.",
            "D. The lack of a detailed unit and system test plan."
        ],
        answer: "A",
        explanation: "Lack of acceptance criteria behind user requirements is the greatest concern in early stages, as without clear acceptance criteria, there is no way to objectively determine whether requirements have been fulfilled. This foundational gap affects the entire project."
    },
    {
        id: 4,
        question: "The PRIMARY reason for an IS auditor to use data analytics techniques is to reduce which type of audit risk?",
        options: [
            "A. Technology risk.",
            "B. Inherent risk.",
            "C. Detection risk.",
            "D. Control risk."
        ],
        answer: "C",
        explanation: "Data analytics reduces detection risk by enabling auditors to analyze complete data populations rather than samples, improving the likelihood of identifying errors, fraud, or anomalies. Detection risk is the risk that the auditor fails to detect material misstatements."
    },
    {
        id: 5,
        question: "Which type of control has been established when an organization implements a security information and event management (SIEM) system?",
        options: [
            "A. Preventive.",
            "B. Detective.",
            "C. Directive.",
            "D. Corrective."
        ],
        answer: "B",
        explanation: "A SIEM system is a detective control. It monitors, collects, and analyzes security events to identify suspicious activities after they occur. It does not prevent incidents but detects them so that a response can be initiated."
    },
    {
        id: 6,
        question: "In the case of a disaster where the data center is no longer available, which of the following tasks should be done FIRST?",
        options: [
            "A. Arrange for a secondary site.",
            "B. Analyze risk.",
            "C. Perform data recovery.",
            "D. Activate the call tree."
        ],
        answer: "D",
        explanation: "Activating the call tree should be the first step in a disaster scenario, as it notifies all key personnel and stakeholders, enabling coordinated response. Without proper notification, recovery efforts cannot be organized or initiated effectively."
    },
    {
        id: 7,
        question: "An organization shares some of its customers' personally identifiable information (PII) with third-party suppliers for business purposes. What is MOST important for the IS auditor to evaluate to ensure that risk associated with leakage of privacy-related data during transmission is effectively managed?",
        options: [
            "A. Encrypting and masking of customer data.",
            "B. The third party's privacy and data security policies.",
            "C. Nondisclosure and indemnity agreements.",
            "D. Service and operational level agreements."
        ],
        answer: "A",
        explanation: "Encrypting and masking customer data during transmission is the most direct technical control to prevent data leakage. Even if intercepted, encrypted and masked data cannot be read by unauthorized parties, directly managing the transmission risk."
    },
    {
        id: 8,
        question: "Following an internal audit of a database, management has committed to enhance password management controls. Which of the following provides the BEST evidence that management has remediated the audit finding?",
        options: [
            "A. Screenshots from end users showing updated password settings.",
            "B. Interviews with management about remediation completion.",
            "C. Change tickets of recent password configuration updates.",
            "D. Observation of updated password settings with database administrators (DBAs)."
        ],
        answer: "D",
        explanation: "Direct observation of updated password settings with DBAs provides the most reliable evidence of remediation, as the auditor independently verifies the actual configuration rather than relying on secondhand documentation or testimony."
    },
    {
        id: 9,
        question: "Reviewing project plans and status reports throughout the development life cycle will:",
        options: [
            "A. eliminate the need to perform a risk assessment.",
            "B. postpone documenting the project's progress until the final phase.",
            "C. guarantee that the project will meet its intended deliverables.",
            "D. facilitate the optimal use of resources over the life of the project."
        ],
        answer: "D",
        explanation: "Reviewing project plans and status reports throughout the development life cycle facilitates optimal resource use by providing visibility into progress, identifying bottlenecks, and enabling timely adjustments to resource allocation. It does not guarantee outcomes or eliminate risk assessments."
    },
    {
        id: 10,
        question: "An organization is experiencing a large number of phishing attacks targeting employees and executives following a press release announcing an acquisition. Which of the following would provide the BEST defense against these attacks?",
        options: [
            "A. Conduct organization-wide awareness training.",
            "B. Deploy intrusion detection and prevention systems.",
            "C. Install spam filters on the acquired systems.",
            "D. Require signed acknowledgment of the organization's security policy."
        ],
        answer: "A",
        explanation: "Organization-wide awareness training is the best defense against phishing attacks, as phishing relies on human error. Educating employees to recognize and avoid phishing attempts directly addresses the attack vector."
    },
    {
        id: 11,
        question: "When evaluating the management practices at a third-party organization providing outsourced services, the IS auditor considers relying on an independent auditor's report. The IS auditor would FIRST:",
        options: [
            "A. review the objectives of the audit.",
            "B. examine the independent auditor's workpapers.",
            "C. discuss the report with the independent auditor.",
            "D. determine if recommendations have been implemented."
        ],
        answer: "A",
        explanation: "The IS auditor should first review the objectives of the independent audit to determine whether they are relevant and sufficient to support reliance. If the audit objectives do not cover the areas of concern, the report cannot be relied upon."
    },
    {
        id: 12,
        question: "What is the BEST control to address SQL injection vulnerabilities?",
        options: [
            "A. Digital signatures.",
            "B. Input validation.",
            "C. Unicode translation.",
            "D. Secure Sockets Layer (SSL) encryption."
        ],
        answer: "B",
        explanation: "Input validation is the best control against SQL injection. It ensures that user-supplied data is sanitized and validated before being processed, preventing malicious SQL code from being executed by the database."
    },
    {
        id: 13,
        question: "In a typical network architecture used for e-commerce, a load balancer is normally found between the:",
        options: [
            "A. routers and the web servers.",
            "B. mail servers and the mail repositories.",
            "C. users and the external gateways.",
            "D. databases and internal firewalls."
        ],
        answer: "A",
        explanation: "In a typical e-commerce network architecture, a load balancer is positioned between the routers and web servers to distribute incoming traffic across multiple web servers, ensuring availability and optimal performance."
    },
    {
        id: 14,
        question: "During an audit of a financial application, it was determined that many terminated users' accounts were not disabled. Which of the following should be the IS auditor's NEXT step?",
        options: [
            "A. Perform a review of terminated users' account activity.",
            "B. Conclude that IT general controls are ineffective.",
            "C. Communicate risks to the application owner.",
            "D. Perform substantive testing of terminated users' access rights."
        ],
        answer: "A",
        explanation: "The IS auditor should next review terminated users' account activity to determine whether any unauthorized access occurred using those accounts. This assesses the actual impact of the finding before drawing conclusions or communicating risks."
    },
    {
        id: 15,
        question: "When developing metrics to measure the contribution of IT to the achievement of business goals, the MOST important consideration is that the metrics:",
        options: [
            "A. measure the effectiveness of IT controls in the achievement of IT strategy.",
            "B. provide quantitative measurement of IT initiatives in relation with business targets.",
            "C. are expressed in terms of how IT risk impacts the achievement of business goals.",
            "D. are used by similar industries to measure the effect of IT on business strategy."
        ],
        answer: "B",
        explanation: "Metrics must provide quantitative measurement of IT initiatives in relation to business targets to meaningfully demonstrate IT's contribution. Quantitative metrics tied to business targets allow objective assessment of alignment and value delivery."
    },
    {
        id: 16,
        question: "The MOST important function of a business continuity plan (BCP) is to:",
        options: [
            "A. ensure that the critical business functions can be recovered.",
            "B. provide procedures for evaluating tests of the BCP.",
            "C. provide a schedule of events that has to occur if there is a disaster.",
            "D. ensure that all business functions are restored."
        ],
        answer: "A",
        explanation: "The most important function of a BCP is to ensure that critical business functions can be recovered after a disruption. Not all business functions need to be restored immediately — the BCP prioritizes the most critical ones to maintain business viability."
    },
    {
        id: 17,
        question: "A small financial institution is preparing to implement a check image processing system to support planned mobile banking product offerings. Which of the following is MOST critical to the successful implementation of the system?",
        options: [
            "A. Feasibility studies.",
            "B. Control design.",
            "C. Integration testing.",
            "D. End user training."
        ],
        answer: "C",
        explanation: "Integration testing is most critical for a check image processing system that must interface with existing banking systems and mobile platforms. It verifies that all components work together correctly, which is essential for a system spanning multiple platforms."
    },
    {
        id: 18,
        question: "A characteristic of a digital signature is that it:",
        options: [
            "A. is under control of the receiver.",
            "B. is unique to the message.",
            "C. has a reproducible hashing algorithm.",
            "D. is validated when data are changed."
        ],
        answer: "B",
        explanation: "A digital signature is unique to the message because it is created by hashing the specific message content and encrypting with the sender's private key. Any change to the message produces a different hash, making the signature invalid."
    },
    {
        id: 19,
        question: "What is the BEST way to control updates to the vendor master file in an accounts payable system?",
        options: [
            "A. Using prenumbered and authorized request forms.",
            "B. Having only one person updating the master file.",
            "C. Periodically reviewing the entire vendor master file.",
            "D. Comparing updates against authorization."
        ],
        answer: "D",
        explanation: "Comparing updates against authorization ensures that each change to the vendor master file has been properly approved before being applied, providing direct control over unauthorized or fraudulent modifications."
    },
    {
        id: 20,
        question: "A PRIMARY benefit derived by an organization employing control self-assessment (CSA) techniques is that CSA:",
        options: [
            "A. can identify high-risk areas for detailed review.",
            "B. allows IS auditors to independently assess risk.",
            "C. can be used as a replacement for traditional audits.",
            "D. allows management to relinquish responsibility for control."
        ],
        answer: "A",
        explanation: "A primary benefit of CSA is that it can identify high-risk areas that warrant more detailed audit review. By involving management and staff in the assessment process, CSA surfaces risks and control weaknesses that may not be visible from the outside."
    },
    {
        id: 21,
        question: "During an audit of an organization's financial statements, an IS auditor finds that the IT general controls are deficient. What should the IS auditor recommend?",
        options: [
            "A. Increase the compliance testing of the application controls.",
            "B. Place greater reliance on the application controls.",
            "C. Increase the substantive testing of the financial balances.",
            "D. Place greater reliance on the framework of control."
        ],
        answer: "C",
        explanation: "When IT general controls are deficient, the auditor cannot rely on the integrity of automated controls. Therefore, the auditor should increase substantive testing of financial balances to directly verify the accuracy of financial data."
    },
    {
        id: 22,
        question: "An organization is considering allowing users to connect personal devices to the corporate network. Which of the following should be done FIRST?",
        options: [
            "A. Configure users on the mobile device management (MDM) solution.",
            "B. Create inventory records of personal devices.",
            "C. Implement an acceptable use policy.",
            "D. Conduct security awareness training."
        ],
        answer: "C",
        explanation: "Implementing an acceptable use policy should be done first, as it establishes the rules, expectations, and boundaries for BYOD usage. Without a policy framework, other technical and administrative measures lack a governance foundation."
    },
    {
        id: 23,
        question: "During an incident management audit, an IS auditor finds that several similar incidents were logged during the audit period. Which of the following is the auditor's MOST important course of action?",
        options: [
            "A. Document the finding and present it to management.",
            "B. Determine if a root cause analysis was conducted.",
            "C. Validate whether all incidents have been actioned.",
            "D. Confirm the resolution time of the incidents."
        ],
        answer: "B",
        explanation: "Determining whether a root cause analysis was conducted is most important when multiple similar incidents occur. Without root cause analysis, the underlying issue is not addressed, ensuring recurring incidents. This points to a systemic control failure."
    },
    {
        id: 24,
        question: "Stress testing should ideally be carried out under a:",
        options: [
            "A. test environment with test data.",
            "B. production environment with test data.",
            "C. test environment with production workloads.",
            "D. production environment with production workloads."
        ],
        answer: "C",
        explanation: "Stress testing should be conducted in a test environment with production workloads. This simulates real production volumes and usage patterns while protecting the actual production environment from potential disruption during testing."
    },
    {
        id: 25,
        question: "An audit of environmental controls at a data center could include a review of the:",
        options: [
            "A. local alarms on emergency exits.",
            "B. logs recording visitors to the data center.",
            "C. list of employees authorized to enter the data center.",
            "D. ceiling space to ensure that there are no wet pipes."
        ],
        answer: "D",
        explanation: "Reviewing ceiling space for wet pipes is a relevant environmental control review for a data center. Water leaks from pipes above the data center represent a significant physical threat to IT equipment and are a key environmental risk."
    },
    {
        id: 26,
        question: "A data breach has occurred due to malware. Which of the following should be the FIRST course of action?",
        options: [
            "A. Shut down the affected systems.",
            "B. Quarantine the impacted systems.",
            "C. Notify customers of the breach.",
            "D. Notify the cyber insurance company."
        ],
        answer: "B",
        explanation: "Quarantining the impacted systems is the first step, as it contains the spread of malware while preserving evidence and maintaining some system availability. A full shutdown may destroy volatile forensic evidence and is more disruptive than quarantine."
    },
    {
        id: 27,
        question: "An online retailer is receiving customer complaints about receiving different items from what they ordered. The root cause has been traced to poor data quality. Despite efforts to clean erroneous data, multiple data quality issues continue to occur. Which of the following recommendations would be the BEST way to reduce the likelihood of future occurrences?",
        options: [
            "A. Outsource data cleansing activities to reliable third parties.",
            "B. Assign responsibility for improving data quality.",
            "C. Implement business rules to validate employee data entry.",
            "D. Invest in additional employee training for data entry."
        ],
        answer: "C",
        explanation: "Implementing business rules to validate data entry addresses the root cause by preventing bad data from entering the system in the first place. Reactive cleansing and training do not prevent data quality issues at the source."
    },
    {
        id: 28,
        question: "During an operational audit of a biometric system used to control physical access, which of the following should be of GREATEST concern to an IS auditor?",
        options: [
            "A. False positives.",
            "B. User acceptance of biometrics.",
            "C. False negatives.",
            "D. Lack of biometric training."
        ],
        answer: "C",
        explanation: "False negatives (when the system incorrectly denies access to authorized individuals) are of greatest concern in a biometric access control system. While false positives grant access to unauthorized individuals, false negatives prevent legitimate access, but more critically, they indicate the system may be failing to correctly authenticate, which can have safety and security implications. However, from a security perspective, false positives (unauthorized access granted) are typically the greatest security concern — but in the context of physical access control, false negatives can also trigger circumvention behaviors."
    },
    {
        id: 29,
        question: "During a software acquisition review, an IS auditor should recommend that there be a software escrow agreement when:",
        options: [
            "A. the product is new in the market.",
            "B. the deliverables do not include the source code.",
            "C. there is no service level agreement (SLA).",
            "D. the estimated life for the product is less than 3 years."
        ],
        answer: "B",
        explanation: "A software escrow agreement is most important when the deliverables do not include the source code. Escrow ensures the organization can access source code if the vendor goes out of business or is unable to support the software, protecting the organization's investment."
    },
    {
        id: 30,
        question: "When reviewing a data classification scheme, it is MOST important for an IS auditor to determine if:",
        options: [
            "A. the information owner is required to approve access to the asset.",
            "B. senior IT managers are identified as information owners.",
            "C. the security criteria are clearly documented for each classification.",
            "D. each information asset is assigned to a different classification."
        ],
        answer: "C",
        explanation: "It is most important to verify that security criteria are clearly documented for each classification level. Without clear criteria, classifications cannot be consistently applied or enforced, making the scheme ineffective."
    },
    {
        id: 31,
        question: "During a project meeting for the implementation of an enterprise resource planning (ERP), a new requirement is requested by the finance department. Which of the following would BEST indicate to an IS auditor that the resulting risk to the project has been assessed?",
        options: [
            "A. The project status as reported in the meeting minutes.",
            "B. The analysis of the cost and time impact of the requirement.",
            "C. The updated business requirements.",
            "D. The approval of the change by the finance department."
        ],
        answer: "B",
        explanation: "Analysis of the cost and time impact of the new requirement best indicates that the resulting project risk has been assessed. This impact analysis demonstrates that the project team has evaluated how the change affects schedule, budget, and scope."
    },
    {
        id: 32,
        question: "An organization has implemented a quarterly job schedule to update database tables so prices are adjusted in line with a price index. These changes do not go through the regular change management process. Which of the following is the MOST important control to have in place?",
        options: [
            "A. An overarching approval is obtained from the change advisory board.",
            "B. User acceptance testing (UAT) is performed after the production run.",
            "C. Each production run is approved by an authorized individual.",
            "D. Exception reports are generated to identify anomalies."
        ],
        answer: "C",
        explanation: "Each production run being approved by an authorized individual is the most important control when changes bypass the standard change management process. Individual approval ensures accountability and authorization for each update, compensating for the lack of formal change management."
    },
    {
        id: 33,
        question: "Which of the following methods will BEST reduce the risk associated with the transition to a new system using technologies that are not compatible with the old system?",
        options: [
            "A. Pilot operation.",
            "B. Parallel changeover.",
            "C. Modular changeover.",
            "D. Phased operation."
        ],
        answer: "A",
        explanation: "Pilot operation tests the new system with a limited group of users or at a single location before full rollout. When systems are incompatible, parallel running is not feasible, making pilot operation the best risk mitigation strategy as it limits exposure to a controlled environment."
    },
    {
        id: 34,
        question: "Following a merger, a review of an international organization determines the IT steering committee's decisions do not extend to regional offices as required in the consolidated IT operating model. Which of the following is the IS auditor's BEST recommendation?",
        options: [
            "A. Create regional centers of excellence.",
            "B. Engage an IT governance consultant.",
            "C. Update the IT steering committee's formal charter.",
            "D. Create regional IT steering committees."
        ],
        answer: "C",
        explanation: "Updating the IT steering committee's formal charter to explicitly include authority over regional offices best addresses the governance gap. The charter defines the committee's scope of authority, and updating it provides the formal mandate needed to extend governance across all regions."
    },
    {
        id: 35,
        question: "An organization recently decided to send the backup of its customer relationship management (CRM) system to its cloud provider for recovery. Which of the following should be of GREATEST concern to an IS auditor reviewing this process?",
        options: [
            "A. Testing of restore data has not been performed.",
            "B. Validation of backup data has not been performed.",
            "C. Backups are sent and stored in unencrypted format.",
            "D. The cloud provider is located in a different country."
        ],
        answer: "C",
        explanation: "Backups being sent and stored in unencrypted format is the greatest concern when transmitting sensitive CRM data to a cloud provider. Unencrypted backup data containing customer information is exposed to interception and unauthorized access during transit and storage."
    },
    {
        id: 36,
        question: "A checksum is classified as which type of control?",
        options: [
            "A. Preventive control.",
            "B. Detective control.",
            "C. Administrative control.",
            "D. Corrective control."
        ],
        answer: "B",
        explanation: "A checksum is a detective control. It detects errors or modifications in data by comparing computed values against expected values, identifying when data has been corrupted or altered during transmission or storage."
    },
    {
        id: 37,
        question: "During a follow-up audit, an IS auditor finds that some critical recommendations have not been addressed as management has decided to accept the risk. Which of the following is the IS auditor's BEST course of action?",
        options: [
            "A. Adjust the annual risk assessment accordingly.",
            "B. Require the auditee to address the recommendations in full.",
            "C. Evaluate senior management's acceptance of the risk.",
            "D. Update the audit program based on management's acceptance of risk."
        ],
        answer: "C",
        explanation: "The IS auditor should evaluate senior management's acceptance of the risk to determine whether it is appropriate and formally documented. Management has the authority to accept risk, but the auditor must verify this decision is made at the right level and is informed."
    },
    {
        id: 38,
        question: "Management has asked internal audit to prioritize and perform a specialized cybersecurity audit, but the IS audit team has no experience in this area. Which of the following is the BEST course of action?",
        options: [
            "A. Delay the audit until the IS auditors are sufficiently trained.",
            "B. Delay the audit until an experienced IS auditor has been hired.",
            "C. Perform the audit as requested using third-party support.",
            "D. Perform the audit with the most experienced IS auditors."
        ],
        answer: "C",
        explanation: "Performing the audit with third-party support is the best course of action. IS audit standards require that auditors possess sufficient competency for their work. Engaging experts ensures the audit meets professional standards without unnecessary delay."
    },
    {
        id: 39,
        question: "When implementing a new IT maturity model, which of the following should occur FIRST?",
        options: [
            "A. Determine the model elements to be evaluated.",
            "B. Benchmark with industry peers.",
            "C. Define the target IT maturity level.",
            "D. Develop performance metrics."
        ],
        answer: "C",
        explanation: "Defining the target IT maturity level should occur first because it establishes the goal state that the organization is working toward. Without a defined target, it is impossible to determine which elements to evaluate or what metrics to develop."
    },
    {
        id: 40,
        question: "When reviewing an organization's information security policies, an IS auditor should verify that the policies have been defined PRIMARILY on the basis of:",
        options: [
            "A. an information security framework.",
            "B. past information security incidents.",
            "C. a risk management process.",
            "D. industry best practices."
        ],
        answer: "C",
        explanation: "Information security policies should be primarily defined based on a risk management process, as policies must address the specific risks faced by the organization. Risk management ensures policies are relevant, prioritized, and proportionate to actual threats."
    },
    {
        id: 41,
        question: "An organization that has suffered a cyberattack is performing a forensic analysis of the affected users' computers. Which of the following should be of GREATEST concern for the IS auditor reviewing this process?",
        options: [
            "A. The chain of custody has not been documented.",
            "B. An imaging process was used to obtain a copy of the data from each computer.",
            "C. Audit was only involved during extraction of the information.",
            "D. The legal department has not been engaged."
        ],
        answer: "A",
        explanation: "The greatest concern is that the chain of custody has not been documented. Without documented chain of custody, forensic evidence may be inadmissible in legal proceedings, and the integrity of the investigation is compromised."
    },
    {
        id: 42,
        question: "The members of an emergency incident response team should be:",
        options: [
            "A. assigned at the time of each incident.",
            "B. appointed by the CISO.",
            "C. restricted to IT personnel.",
            "D. selected from multiple departments."
        ],
        answer: "D",
        explanation: "Emergency incident response team members should be selected from multiple departments because incidents often have business, legal, communications, and IT dimensions. A cross-functional team ensures all aspects of an incident can be effectively addressed."
    },
    {
        id: 43,
        question: "Which of the following is the BEST indicator that an application system's agreed-upon level of service has been met?",
        options: [
            "A. Transaction response time.",
            "B. Bandwidth usage logs.",
            "C. CPU utilization reports.",
            "D. Security incident reports."
        ],
        answer: "A",
        explanation: "Transaction response time is the best indicator of whether agreed service levels have been met, as SLAs for application systems are typically defined in terms of acceptable response times. It directly measures the user experience against defined thresholds."
    },
    {
        id: 44,
        question: "The PRIMARY benefit to using a dry-pipe fire-suppression system rather than a wet-pipe system is that a dry-pipe system:",
        options: [
            "A. disperses dry chemical suppressants exclusively.",
            "B. has a decreased risk of leakage.",
            "C. allows more time to abort release of the suppressant.",
            "D. is more effective at suppressing flames."
        ],
        answer: "B",
        explanation: "The primary benefit of a dry-pipe system is decreased risk of leakage. Since the pipes contain pressurized air rather than water, there is no risk of water leaking from the system due to pipe damage or corrosion, making it safer for environments with sensitive equipment."
    },
    {
        id: 45,
        question: "After the merger of two organizations, which of the following is the MOST important task for an IS auditor to perform?",
        options: [
            "A. Updating the continuity plan for critical resources.",
            "B. Updating the security policy.",
            "C. Verifying that access privileges have been reviewed.",
            "D. Investigating access rights for expiration dates."
        ],
        answer: "C",
        explanation: "Verifying that access privileges have been reviewed is the most important task after a merger. Merging organizations introduces significant access control risks as employees from both entities may gain inappropriate access to systems from the other organization."
    },
    {
        id: 46,
        question: "An organization sends daily backup media by courier to an offsite location. Which of the following provides the BEST evidence that the media is transported reliably?",
        options: [
            "A. Documented backup media transport procedures.",
            "B. Signed acknowledgments by offsite manager.",
            "C. Certification of the courier company.",
            "D. Delivery schedule of the backup media."
        ],
        answer: "B",
        explanation: "Signed acknowledgments by the offsite manager provide the best evidence of reliable transport, as they confirm receipt of each specific delivery. They create a traceable record of successful delivery for each shipment."
    },
    {
        id: 47,
        question: "As part of a recent business-critical initiative, an organization is re-purposing its customer data. However, its customers are unaware that their data is being used for another purpose. What is the BEST recommendation to address the associated data privacy risk to the organization?",
        options: [
            "A. Ensure the data processing activity remains onshore.",
            "B. Maintain an audit trail of the data analysis activity.",
            "C. Obtain customer consent for secondary use of the data.",
            "D. Adjust the existing data retention requirements."
        ],
        answer: "C",
        explanation: "Obtaining customer consent for secondary use of data directly addresses the privacy risk and is a fundamental requirement under most data protection regulations (such as GDPR). Processing data for purposes beyond what was originally consented to without authorization violates privacy principles."
    },
    {
        id: 48,
        question: "An organization has adopted a backup and recovery strategy that involves copying on-premise virtual machine (VM) images to a cloud service provider. Which of the following provides the BEST assurance that VMs can be recovered in the event of a disaster?",
        options: [
            "A. Existence of a disaster recovery plan (DRP) with specified roles for emergencies.",
            "B. Periodic on-site restoration of VM images obtained from the cloud provider.",
            "C. Procurement of adequate storage for the VM images from the cloud service provider.",
            "D. Inclusion of the right to audit in the cloud service provider contract."
        ],
        answer: "B",
        explanation: "Periodic on-site restoration of VM images from the cloud provider is the best assurance because it demonstrates in practice that the images can actually be successfully recovered. Documented plans and storage capacity do not verify that recovery works."
    },
    {
        id: 49,
        question: "During the implementation of an enterprise resource planning (ERP) system, an IS auditor is reviewing the results of user acceptance testing (UAT). The auditor's PRIMARY focus should be to determine if:",
        options: [
            "A. application interfaces have been satisfactorily tested.",
            "B. all errors found in the testing process have been corrected.",
            "C. the business process owner has signed off on the results.",
            "D. system integration testing was performed."
        ],
        answer: "C",
        explanation: "The IS auditor's primary focus during UAT review should be to determine if the business process owner has signed off on the results. Sign-off indicates that the business has formally accepted that the system meets their requirements, which is the ultimate objective of UAT."
    },
    {
        id: 50,
        question: "A help desk has been contacted regarding a lost business mobile device. The FIRST course of action should be to:",
        options: [
            "A. consult the legal team regarding the impact of intellectual property loss.",
            "B. verify the user's identity through a challenge response system.",
            "C. involve the security response team to launch an investigation.",
            "D. attempt to locate the device remotely."
        ],
        answer: "B",
        explanation: "The first step is to verify the user's identity to ensure the report is legitimate and to prevent social engineering attacks. Without identity verification, sensitive actions like remote wipe could be triggered by an unauthorized caller."
    },
    {
        id: 51,
        question: "When conducting a requirements analysis for a project, the BEST approach would be to:",
        options: [
            "A. conduct a control self-assessment (CSA).",
            "B. test operational deliverables.",
            "C. prototype the requirements.",
            "D. consult key stakeholders."
        ],
        answer: "D",
        explanation: "Consulting key stakeholders is the best approach for requirements analysis, as stakeholders possess the business knowledge needed to define accurate and complete requirements. Without their input, requirements risk being incomplete or misaligned with actual needs."
    },
    {
        id: 52,
        question: "When evaluating information security governance within an organization, which of the following findings should be of MOST concern to an IS auditor?",
        options: [
            "A. An information security governance audit was not conducted within the past year.",
            "B. Information security policies are updated annually.",
            "C. The data center manager has final sign-off on security projects.",
            "D. The information security department has difficulty filling vacancies."
        ],
        answer: "C",
        explanation: "The data center manager having final sign-off on security projects is the most concerning finding as it indicates inadequate security governance. Security decisions should be escalated to appropriate senior leadership with strategic authority, not left to operational managers."
    },
    {
        id: 53,
        question: "During a post-implementation review, an IS auditor learns that while benefits were realized according to the business case, complications during implementation added to the cost of the solution. Which of the following is the auditor's BEST course of action?",
        options: [
            "A. Design controls that will prevent future added costs.",
            "B. Verify that lessons learned were documented for future projects.",
            "C. Determine if project deliverables were provided on time.",
            "D. Ensure costs related to the complications were subtracted from realized benefits."
        ],
        answer: "B",
        explanation: "Verifying that lessons learned were documented is the best course of action. Since benefits were realized, the focus should shift to organizational improvement — ensuring that implementation complications are captured so future projects can avoid similar issues."
    },
    {
        id: 54,
        question: "When reviewing an organization's IT governance processes, which of the following provides the BEST indication that information security expectations are being met at all levels?",
        options: [
            "A. Achievement of established security metrics.",
            "B. Approval of the security program by senior management.",
            "C. Utilization of an internationally recognized security standard.",
            "D. Implementation of a comprehensive security awareness program."
        ],
        answer: "A",
        explanation: "Achievement of established security metrics provides the best objective evidence that security expectations are being met at all levels. Metrics translate expectations into measurable outcomes and demonstrate actual performance rather than intent."
    },
    {
        id: 55,
        question: "When assessing whether an organization's IT performance measures are comparable to other organizations in the same industry, which of the following would be MOST helpful to review?",
        options: [
            "A. Balanced scorecard.",
            "B. IT governance frameworks.",
            "C. Benchmarking surveys.",
            "D. Utilization reports."
        ],
        answer: "C",
        explanation: "Benchmarking surveys provide comparative data from peer organizations in the same industry, making them the most helpful source for assessing whether IT performance measures are comparable to industry standards."
    },
    {
        id: 56,
        question: "An employee approaches an IS auditor and expresses concern about a critical security issue in a newly installed application. Which of the following would be the MOST appropriate action for the auditor to take?",
        options: [
            "A. Discuss the concern with audit management.",
            "B. Recommend reverting to the previous application.",
            "C. Immediately conduct a review of the application.",
            "D. Discuss the concern with additional end users."
        ],
        answer: "A",
        explanation: "Discussing the concern with audit management is the most appropriate first action. The IS auditor should not act unilaterally on an employee tip but should escalate to audit management to determine the appropriate response and whether a formal review is warranted."
    },
    {
        id: 57,
        question: "An organization has outsourced its data processing function to a service provider. Which of the following would BEST determine whether the service provider continues to meet the organization's objectives?",
        options: [
            "A. Periodic audits of controls by an independent auditor.",
            "B. Adequacy of the service provider's insurance.",
            "C. Assessment of the personnel training processes of the provider.",
            "D. Review of performance against service level agreements (SLAs)."
        ],
        answer: "D",
        explanation: "Review of performance against SLAs is the best ongoing mechanism to determine whether the service provider meets the organization's objectives. SLAs define measurable commitments, and monitoring performance against them provides continuous evidence of compliance."
    },
    {
        id: 58,
        question: "The PRIMARY objective of value delivery in reference to IT governance is to:",
        options: [
            "A. increase efficiency.",
            "B. optimize investments.",
            "C. ensure compliance.",
            "D. promote best practices."
        ],
        answer: "B",
        explanation: "The primary objective of value delivery in IT governance is to optimize investments — ensuring that IT investments deliver the maximum business value at an acceptable cost and risk level. It is about getting the best return from IT resources."
    },
    {
        id: 59,
        question: "What is the MAIN purpose of an organization's internal IS audit function?",
        options: [
            "A. Provide assurance to management about the effectiveness of the organization's risk management and internal controls.",
            "B. Identify and initiate necessary changes in the control environment to help ensure sustainable improvement.",
            "C. Review the organization's policies and procedures against industry best practice and standards.",
            "D. Independently attest the organization's compliance with applicable legal and regulatory requirements."
        ],
        answer: "A",
        explanation: "The main purpose of the internal IS audit function is to provide assurance to management about the effectiveness of risk management and internal controls. This independent assurance helps management make informed decisions about control adequacy."
    },
    {
        id: 60,
        question: "Following a recent internal data breach, an IS auditor was asked to evaluate information security practices within the organization. Which of the following findings would be MOST important to report to senior management?",
        options: [
            "A. Employees are not required to sign a non-compete agreement.",
            "B. Security education and awareness workshops have not been completed.",
            "C. Users lack technical knowledge related to security and data protection.",
            "D. Desktop passwords do not require special characters."
        ],
        answer: "B",
        explanation: "Incomplete security education and awareness workshops are the most important finding to report, as they indicate that employees may not understand their security responsibilities. This directly contributes to the conditions that enabled the internal data breach."
    },
    {
        id: 61,
        question: "A business unit cannot achieve desired segregation of duties between operations and programming due to size constraints. Which of the following is MOST important for the IS auditor to identify?",
        options: [
            "A. Unauthorized user controls.",
            "B. Compensating controls.",
            "C. Controls over operational effectiveness.",
            "D. Additional control weaknesses."
        ],
        answer: "B",
        explanation: "When SoD cannot be achieved due to size constraints, identifying compensating controls is most important. Compensating controls mitigate the risk created by the SoD gap, and without them, the organization is exposed to unacceptable risk."
    },
    {
        id: 62,
        question: "The BEST way to determine whether programmers have permission to alter data in the production environment is by reviewing:",
        options: [
            "A. the access control system's configuration.",
            "B. how the latest system changes were implemented.",
            "C. the access rights that have been granted.",
            "D. the access control system's log settings."
        ],
        answer: "C",
        explanation: "Reviewing the access rights that have been granted directly shows what permissions programmers actually have in the production environment, providing definitive evidence of whether they can alter production data."
    },
    {
        id: 63,
        question: "Several unattended laptops containing sensitive customer data were stolen from personnel offices. Which of the following would be an IS auditor's BEST recommendation to protect data in case of recurrence?",
        options: [
            "A. Enhance physical security.",
            "B. Require the use of cable locks.",
            "C. Require two-factor authentication.",
            "D. Encrypt the disk drive."
        ],
        answer: "D",
        explanation: "Encrypting the disk drive is the best recommendation to protect data if a laptop is stolen. Even if a thief bypasses authentication, full disk encryption renders the data unreadable without the encryption key, directly protecting the sensitive customer data."
    },
    {
        id: 64,
        question: "When classifying information, it is MOST important to align the classification to:",
        options: [
            "A. business risk.",
            "B. data retention requirements.",
            "C. industry standards.",
            "D. security policy."
        ],
        answer: "A",
        explanation: "Information classification must be aligned to business risk, as classification determines the level of protection applied to data. Classifying based on business risk ensures that the most sensitive and critical data receives the highest level of protection."
    },
    {
        id: 65,
        question: "An organization's information security department has recently created a centralized governance model to ensure that network-related findings are remediated within the SLA. What should the IS auditor use to assess the maturity and capability of this governance model?",
        options: [
            "A. Key risk indicators (KRIs).",
            "B. Key process controls.",
            "C. Key data elements.",
            "D. Key performance indicators (KPIs)."
        ],
        answer: "D",
        explanation: "Key performance indicators (KPIs) are the best tool to assess the maturity and capability of the governance model. KPIs measure whether the governance model is achieving its objectives, such as remediating findings within SLA timeframes."
    },
    {
        id: 66,
        question: "The performance, risks, and capabilities of an IT infrastructure are BEST measured using a:",
        options: [
            "A. risk management review.",
            "B. control self-assessment (CSA).",
            "C. service level agreement (SLA).",
            "D. balanced scorecard."
        ],
        answer: "D",
        explanation: "A balanced scorecard provides a comprehensive view of IT performance across multiple dimensions — financial, customer, internal processes, and learning — making it the best tool for measuring performance, risks, and capabilities of an IT infrastructure holistically."
    },
    {
        id: 67,
        question: "To develop meaningful recommendations for findings, which of the following is MOST important for an IS auditor to determine and understand?",
        options: [
            "A. Criteria.",
            "B. Responsible party.",
            "C. Impact.",
            "D. Root cause."
        ],
        answer: "D",
        explanation: "Understanding the root cause is most important for developing meaningful recommendations. Recommendations that address root causes resolve the underlying problem, whereas recommendations that address symptoms may not prevent recurrence."
    },
    {
        id: 68,
        question: "An organization allows employees to use personally owned mobile devices to access customers' personal information. Which of the following is MOST important for an IS auditor to verify?",
        options: [
            "A. Employees have signed off on an acceptable use policy.",
            "B. Devices have adequate storage and backup capabilities.",
            "C. Mobile devices are compatible with company infrastructure.",
            "D. Mobile device security policies have been implemented."
        ],
        answer: "D",
        explanation: "Verifying that mobile device security policies have been implemented is most important. When personal devices access sensitive customer information, security policies (such as encryption, MDM enrollment, and remote wipe) are critical to protecting that data."
    },
    {
        id: 69,
        question: "When is the BEST time to commence continuity planning for a new application system?",
        options: [
            "A. Immediately after implementation.",
            "B. Following successful user testing.",
            "C. During the design phase.",
            "D. Just prior to the handover to the system maintenance group."
        ],
        answer: "C",
        explanation: "Continuity planning should commence during the design phase, when recovery requirements can be incorporated into the system architecture. Addressing continuity early is less costly and more effective than retrofitting recovery capabilities after implementation."
    },
    {
        id: 70,
        question: "Prior to the migration of acquired software into production, it is MOST important that the IS auditor review the:",
        options: [
            "A. user acceptance test (UAT) report.",
            "B. vendor testing report.",
            "C. system documentation.",
            "D. source code escrow agreement."
        ],
        answer: "A",
        explanation: "The UAT report is most important to review before production migration as it provides evidence that business users have verified the software meets their requirements. It represents the final business sign-off before deployment."
    },
    {
        id: 71,
        question: "Which type of attack poses the GREATEST risk to an organization's most sensitive data?",
        options: [
            "A. Spear phishing attack.",
            "B. Insider attack.",
            "C. Password attack.",
            "D. Eavesdropping attack."
        ],
        answer: "B",
        explanation: "Insider attacks pose the greatest risk to sensitive data because insiders already have authorized access to systems and knowledge of where sensitive data is stored. They can bypass many external security controls, making detection and prevention more difficult."
    },
    {
        id: 72,
        question: "Using swipe cards to limit employee access to restricted areas requires implementing which additional control?",
        options: [
            "A. Physical sign-in of all employees for access to restricted areas.",
            "B. Initial escort of all new hires by a current employee.",
            "C. Periodic review of access profiles by management.",
            "D. Employee-access criteria determined on the basis of IS experience."
        ],
        answer: "C",
        explanation: "Periodic review of access profiles by management is the most important additional control for swipe card systems. This ensures that access rights remain appropriate as employee roles change and prevents accumulation of excessive access over time."
    },
    {
        id: 73,
        question: "To enable the alignment of IT staff development plans with IT strategy, which of the following should be done FIRST?",
        options: [
            "A. Include strategic objectives in IT staff performance objectives.",
            "B. Review IT staff job descriptions for alignment.",
            "C. Identify required IT skill sets that support key business processes.",
            "D. Develop quarterly training for each IT staff member."
        ],
        answer: "C",
        explanation: "Identifying the required IT skill sets that support key business processes must be done first. Without understanding what skills are needed to execute the IT strategy, it is impossible to design relevant staff development plans or performance objectives."
    },
    {
        id: 74,
        question: "An internal audit department reports directly to the chief financial officer (CFO) of an organization. This MOST likely leads to:",
        options: [
            "A. audit findings becoming more business-oriented.",
            "B. concern over the independence of the auditor.",
            "C. audit recommendations receiving greater attention.",
            "D. biased audit findings and recommendations."
        ],
        answer: "B",
        explanation: "Reporting directly to the CFO raises concern over auditor independence, as the CFO is responsible for the financial areas that internal audit should independently review. This reporting structure creates a potential conflict of interest that impairs objectivity."
    },
    {
        id: 75,
        question: "An internal audit department recently established a quality assurance (QA) program. Which of the following activities is MOST important to include as part of the QA program requirements?",
        options: [
            "A. Long-term internal audit resource planning.",
            "B. Feedback from internal audit staff.",
            "C. Analysis of user satisfaction reports from business lines.",
            "D. Ongoing monitoring of the audit activities."
        ],
        answer: "D",
        explanation: "Ongoing monitoring of audit activities is the most important QA element, as it provides continuous assurance that the internal audit function is operating effectively and conforming to standards. Ongoing monitoring enables timely identification and correction of deficiencies."
    },
    {
        id: 76,
        question: "While planning a review of IT governance, the IS auditor is MOST likely to:",
        options: [
            "A. obtain information about the framework of control adopted by management.",
            "B. examine audit committee minutes for IS-related matters and their control.",
            "C. assess whether business process owner responsibilities are consistent across the organization.",
            "D. review compliance with policies and procedures issued by the board of directors."
        ],
        answer: "A",
        explanation: "During IT governance review planning, the IS auditor would first obtain information about the framework of control adopted by management. This provides the baseline understanding needed to scope the review and identify key governance elements to assess."
    },
    {
        id: 77,
        question: "Many departments of an organization have not implemented audit recommendations by their agreed-upon target dates. Who should address this situation?",
        options: [
            "A. Head of internal audit.",
            "B. External auditor.",
            "C. Department managers.",
            "D. Senior management."
        ],
        answer: "D",
        explanation: "Senior management should address the situation when multiple departments fail to implement audit recommendations. Senior management has the authority and accountability to enforce compliance across departments and ensure organizational-level follow-through."
    },
    {
        id: 78,
        question: "An advantage of object-oriented system development is that it:",
        options: [
            "A. is easier to code than procedural languages.",
            "B. partitions systems into a client/server architecture.",
            "C. decreases the need for system documentation.",
            "D. is suited to data with complex relationships."
        ],
        answer: "D",
        explanation: "Object-oriented development is well-suited to data with complex relationships because objects encapsulate data and related behaviors, naturally modeling real-world entities and their interactions. This makes it effective for complex domain modeling."
    },
    {
        id: 79,
        question: "Which of the following MUST be completed as part of the annual audit planning process?",
        options: [
            "A. Fieldwork.",
            "B. Risk control matrix.",
            "C. Risk assessment.",
            "D. Business impact analysis (BIA)."
        ],
        answer: "C",
        explanation: "A risk assessment must be completed as part of the annual audit planning process. IS audit standards require that audit plans be based on risk assessments to ensure audit resources are directed to the highest-risk areas."
    },
    {
        id: 80,
        question: "Code changes are compiled and placed in a change folder by the developer. An implementation team migrates changes to production from the change folder. Which of the following BEST indicates separation of duties is in place during the migration process?",
        options: [
            "A. A second individual performs code review before the change is released to production.",
            "B. The implementation team does not have access to change the source code.",
            "C. The implementation team does not have experience writing code.",
            "D. The developer approves changes prior to moving them to the change folder."
        ],
        answer: "B",
        explanation: "The implementation team not having access to change the source code best demonstrates separation of duties. It ensures that the team migrating code to production cannot modify the code, preventing unauthorized changes from being introduced during migration."
    },
    {
        id: 81,
        question: "Management has decided to include a compliance manager in the approval process for a new business that may require changes to the IT infrastructure. Which of the following is the GREATEST benefit of this approach?",
        options: [
            "A. Process accountabilities to external stakeholders are improved.",
            "B. Security breach incidents can be identified in early stages.",
            "C. Regulatory risk exposures can be identified before they materialize.",
            "D. Fewer reviews are needed when updating the IT compliance process."
        ],
        answer: "C",
        explanation: "The greatest benefit is that regulatory risk exposures can be identified before they materialize. Involving a compliance manager early in the approval process enables proactive identification and mitigation of compliance risks before IT changes are implemented."
    },
    {
        id: 82,
        question: "Malicious program code was found in an application and corrected prior to release into production. After the release, the same issue was reported. Which of the following is the IS auditor's BEST recommendation?",
        options: [
            "A. Ensure corrected program code is compiled in a dedicated server.",
            "B. Ensure change management reports are independently reviewed.",
            "C. Ensure programmers cannot access code after the completion of program edits.",
            "D. Ensure the business signs off on end-to-end user acceptance test (UAT) results."
        ],
        answer: "C",
        explanation: "Ensuring programmers cannot access code after completion of edits prevents them from reintroducing malicious code post-review. If the same issue recurred after correction, it suggests the code was modified again after being fixed, pointing to inadequate access controls."
    },
    {
        id: 83,
        question: "For an organization that has plans to implement web-based trading, it would be MOST important for an IS auditor to verify the organization's information security plan includes:",
        options: [
            "A. security training prior to implementation.",
            "B. the firewall configuration for the web server.",
            "C. security requirements for the new application.",
            "D. attributes for system passwords."
        ],
        answer: "C",
        explanation: "Verifying that security requirements for the new application are included in the security plan is most important. Security requirements define what controls must be built into the web-based trading application to protect transactions and customer data."
    },
    {
        id: 84,
        question: "Which cloud deployment model is MOST likely to be limited in scalability?",
        options: [
            "A. Hybrid.",
            "B. Private.",
            "C. Community.",
            "D. Public."
        ],
        answer: "B",
        explanation: "A private cloud is most likely to be limited in scalability because it is built and maintained using the organization's own infrastructure. Unlike public cloud models, private clouds cannot easily expand beyond the organization's physical hardware capacity."
    },
    {
        id: 85,
        question: "After the release of an application system, an IS auditor wants to verify that the system is providing value to the organization. The auditor's BEST course of action would be to:",
        options: [
            "A. review the results of compliance testing.",
            "B. perform a gap analysis against the benefits defined in the business case.",
            "C. quantify improvements in client satisfaction.",
            "D. confirm that risk has declined since the application system release."
        ],
        answer: "B",
        explanation: "Performing a gap analysis against the benefits defined in the business case directly assesses whether the system is delivering the intended value. The business case defines the expected benefits, making it the benchmark for value realization assessment."
    },
    {
        id: 86,
        question: "A chief information officer (CIO) has asked an IS auditor to implement several security controls for an organization's IT processes and systems. The auditor should:",
        options: [
            "A. refuse due to independence issues.",
            "B. communicate the conflict of interest to audit management.",
            "C. perform the assignment and future audits with due professional care.",
            "D. obtain approval from executive management for the implementation."
        ],
        answer: "B",
        explanation: "The IS auditor should communicate the conflict of interest to audit management. Implementing controls would impair the auditor's independence and objectivity, as they could not subsequently audit those same controls. Audit management must decide how to proceed."
    },
    {
        id: 87,
        question: "An algorithm in an email program analyzes traffic to quarantine emails identified as spam. The algorithm in the program is BEST characterized as which type of control?",
        options: [
            "A. Detective.",
            "B. Directive.",
            "C. Preventive.",
            "D. Corrective."
        ],
        answer: "C",
        explanation: "An algorithm that quarantines spam emails is a preventive control. It stops unwanted emails from reaching users before they can cause harm, preventing phishing, malware delivery, and other email-borne threats from being acted upon."
    },
    {
        id: 88,
        question: "During the implementation of a new system, an IS auditor must assess whether certain automated calculations comply with the regulatory requirements. Which of the following is the BEST way to obtain this assurance?",
        options: [
            "A. Re-perform the calculation with audit software.",
            "B. Review the source code related to the calculation.",
            "C. Review sign-off documentation.",
            "D. Inspect user acceptance test (UAT) results."
        ],
        answer: "A",
        explanation: "Re-performing the calculation with audit software provides the most direct and objective assurance that automated calculations produce correct results in compliance with regulatory requirements. It independently verifies outputs rather than relying on documentation."
    },
    {
        id: 89,
        question: "When testing the adequacy of tape backup procedures, which step BEST verifies that regularly scheduled backups are timely and run to completion?",
        options: [
            "A. Reviewing a sample of system-generated backup logs.",
            "B. Interviewing key personnel involved in the backup process.",
            "C. Observing the execution of a daily backup run.",
            "D. Evaluating the backup policies and procedures."
        ],
        answer: "A",
        explanation: "Reviewing a sample of system-generated backup logs provides objective, automated evidence of whether backups ran on schedule and completed successfully. Logs capture timestamps and completion status for each backup job, directly addressing the test objective."
    },
    {
        id: 90,
        question: "During the planning stage of a compliance audit, an IS auditor discovers that a bank's inventory of compliance requirements does not include recent regulatory changes related to managing data risk. What should the auditor do FIRST?",
        options: [
            "A. Ask management why the regulatory changes have not been included.",
            "B. Report the missing regulatory updates to the chief information officer (CIO).",
            "C. Discuss potential regulatory issues with the legal department.",
            "D. Exclude recent regulatory changes from the audit scope."
        ],
        answer: "A",
        explanation: "The IS auditor should first ask management why the regulatory changes have not been included. There may be a legitimate explanation (e.g., the changes are not yet effective, or they are tracked elsewhere), and the auditor should understand management's position before drawing conclusions."
    },
    {
        id: 91,
        question: "An organization has replaced all of the storage devices at its primary data center with new, higher capacity units. The replaced devices have been installed at the disaster recovery site to replace older units. An IS auditor's PRIMARY concern would be whether:",
        options: [
            "A. the recovery site devices can handle the storage requirements.",
            "B. the procurement was in accordance with corporate policies and procedures.",
            "C. the relocation plan has been communicated to all concerned parties.",
            "D. a hardware maintenance contract is in place for both old and new storage devices."
        ],
        answer: "A",
        explanation: "The primary concern is whether the disaster recovery site's storage devices (now using the older, replaced units) can handle the storage requirements. If the primary site needed higher capacity, the old devices at the DR site may be inadequate for recovery."
    },
    {
        id: 92,
        question: "Which of the following should be of GREATEST concern to an IS auditor reviewing data conversion and migration during the implementation of a new application system?",
        options: [
            "A. Data conversion was performed using manual processes.",
            "B. Unauthorized data modifications occurred during conversion.",
            "C. The change management process was not formally documented.",
            "D. Backups of the old system and data are not available online."
        ],
        answer: "B",
        explanation: "Unauthorized data modifications during conversion are the greatest concern because they compromise data integrity in the new system. If data is altered without authorization during migration, the new system will contain corrupted or fraudulent data from the start."
    },
    {
        id: 93,
        question: "When auditing the alignment of IT to the business strategy, it is MOST important for the IS auditor to:",
        options: [
            "A. ensure an IT steering committee is appointed to monitor new IT projects.",
            "B. evaluate deliverables of new IT initiatives against planned business services.",
            "C. interview senior managers for their opinion of the IT function.",
            "D. compare the organization's strategic plan against industry best practice."
        ],
        answer: "B",
        explanation: "Evaluating deliverables of new IT initiatives against planned business services is most important for assessing IT-business alignment. It directly measures whether IT is delivering the services required to achieve business objectives."
    },
    {
        id: 94,
        question: "An organization is acquiring a new customer relationship management (CRM) system. In which of the following would the IS auditor find the MOST relevant information on projected cost savings?",
        options: [
            "A. Request for proposal (RFP).",
            "B. Feasibility study document.",
            "C. Business case.",
            "D. Results of prototype testing."
        ],
        answer: "C",
        explanation: "The business case contains projected cost savings and other financial benefits used to justify the CRM acquisition. It is the primary document for understanding the expected financial return from the investment."
    },
    {
        id: 95,
        question: "During the implementation of an upgraded enterprise resource planning (ERP) system, which of the following is the MOST important consideration for a go-live decision?",
        options: [
            "A. Post-implementation review objectives.",
            "B. Business case.",
            "C. Rollback strategy.",
            "D. Test cases."
        ],
        answer: "C",
        explanation: "A rollback strategy is the most important consideration for a go-live decision, as it ensures the organization can revert to the previous system if the new ERP encounters critical issues. Without a rollback strategy, a failed go-live could cause irreversible business disruption."
    },
    {
        id: 96,
        question: "When reviewing the functionality of an intrusion detection system (IDS), the IS auditor should be MOST concerned if:",
        options: [
            "A. legitimate packets blocked by the system have increased.",
            "B. false positives have been reported.",
            "C. detected events have increased.",
            "D. actual attacks have not been identified."
        ],
        answer: "D",
        explanation: "The IS auditor should be most concerned if actual attacks have not been identified. This indicates the IDS is failing to detect real threats — its primary purpose. False positives are a nuisance but do not represent a fundamental failure of the IDS."
    },
    {
        id: 97,
        question: "An organization is disposing of a system containing sensitive data and has deleted all files from the hard disk. An IS auditor should be concerned because:",
        options: [
            "A. deleted data cannot easily be retrieved.",
            "B. backup copies of files were not deleted as well.",
            "C. deleting all files separately is not as efficient as formatting the hard disk.",
            "D. deleting the files logically does not overwrite the files' physical data."
        ],
        answer: "D",
        explanation: "Logically deleting files removes directory pointers but does not overwrite the physical data on the disk. The data remains recoverable using data recovery tools, meaning sensitive information could be accessed from the disposed device."
    },
    {
        id: 98,
        question: "What is the MOST difficult aspect of access control in a multiplatform, multiple-site client/server environment?",
        options: [
            "A. Restricting a local user to necessary resources on a local platform.",
            "B. Creating new user IDs valid only on a few hosts.",
            "C. Maintaining consistency throughout all platforms.",
            "D. Restricting a local user to necessary resources on the host server."
        ],
        answer: "C",
        explanation: "Maintaining consistency of access controls throughout all platforms is the most difficult challenge in a multiplatform, multiple-site environment. Different systems have different authentication mechanisms, making uniform policy enforcement technically complex."
    },
    {
        id: 99,
        question: "Following significant business model changes, which of the following is the MOST important consideration when updating the IT policy?",
        options: [
            "A. The policy is endorsed by IT leadership.",
            "B. The policy is compliant with relevant laws and regulations.",
            "C. The policy is integrated into job descriptions.",
            "D. The policy is aligned with industry standards and best practice."
        ],
        answer: "B",
        explanation: "Compliance with relevant laws and regulations is the most important consideration when updating IT policy, as non-compliance can result in legal penalties, regulatory sanctions, and reputational damage. Legal requirements are non-negotiable constraints on policy design."
    },
    {
        id: 100,
        question: "During the design phase of a software development project, the PRIMARY responsibility of an IS auditor is to evaluate the:",
        options: [
            "A. development methodology employed.",
            "B. controls incorporated into the system specifications.",
            "C. future compatibility of the design.",
            "D. proposed functionality of the application."
        ],
        answer: "B",
        explanation: "During the design phase, the IS auditor's primary responsibility is to evaluate whether controls are incorporated into the system specifications. This is the ideal time to ensure that security and control requirements are built into the design before development begins."
    },
    {
        id: 101,
        question: "During an audit of a disaster recovery plan (DRP) for a critical business area, an IS auditor finds that not all critical systems are covered. What should the auditor do NEXT?",
        options: [
            "A. Evaluate the impact of not covering the systems.",
            "B. Escalate the finding to senior management.",
            "C. Evaluate the prior year's audit results regarding critical system coverage.",
            "D. Verify whether the systems are part of the business impact analysis (BIA)."
        ],
        answer: "D",
        explanation: "The IS auditor should next verify whether the uncovered systems are part of the BIA. If they appear in the BIA as critical, their exclusion from the DRP is a significant gap. If they are not in the BIA, the BIA itself may be incomplete."
    },
    {
        id: 102,
        question: "Due to a recent business divestiture, an organization has limited IT resources to deliver critical projects. Reviewing the IT staffing plan against which of the following would BEST guide IT management when estimating resource requirements for future projects?",
        options: [
            "A. Peer organization staffing benchmarks.",
            "B. Human resources (HR) sourcing strategy.",
            "C. Budgeted forecast for the next financial year.",
            "D. Records of actual time spent on projects."
        ],
        answer: "D",
        explanation: "Records of actual time spent on projects provide the most accurate basis for estimating future resource requirements. Historical data reflects real productivity rates and effort levels within the organization's specific context, making estimates more reliable."
    },
    {
        id: 103,
        question: "A bank's web-hosting provider has just completed an internal IT security audit and provides only a summary of the findings to the bank's auditor. Which of the following should be the bank's GREATEST concern?",
        options: [
            "A. The audit scope may not have addressed critical areas.",
            "B. The audit procedures are not provided to the bank.",
            "C. The bank's auditors are not independent of the service provider.",
            "D. The audit may be duplicative of the bank's internal audit procedures."
        ],
        answer: "A",
        explanation: "The greatest concern is that the audit scope may not have addressed critical areas relevant to the bank. Without access to the full audit report, the bank cannot verify whether all relevant security areas were covered, limiting its ability to rely on the audit."
    },
    {
        id: 104,
        question: "An incorrect version of source code was amended by a development team. This MOST likely indicates a weakness in:",
        options: [
            "A. change management.",
            "B. project management.",
            "C. incident management.",
            "D. quality assurance (QA)."
        ],
        answer: "A",
        explanation: "Amending an incorrect version of source code most likely indicates a weakness in change management. Effective change management includes version control processes that ensure developers work on the correct version of code."
    },
    {
        id: 105,
        question: "An organization allows employees to retain confidential data on personal mobile devices. Which of the following is the BEST recommendation to mitigate the risk of data leakage from lost or stolen devices?",
        options: [
            "A. Configure to auto-wipe after multiple failed access attempts.",
            "B. Require employees to attend security awareness training.",
            "C. Enable device auto-lock function.",
            "D. Password protect critical data files."
        ],
        answer: "A",
        explanation: "Configuring devices to auto-wipe after multiple failed access attempts is the best recommendation to protect confidential data on lost or stolen devices. It automatically removes data when unauthorized access is attempted, preventing data leakage."
    },
    {
        id: 106,
        question: "A new regulation in one country of a global organization has recently prohibited cross-border transfer of personal data. An IS auditor has been asked to determine the organization's level of exposure in the affected country. Which of the following would be MOST helpful in making this assessment?",
        options: [
            "A. Identifying data security threats in the affected jurisdiction.",
            "B. Reviewing data classification procedures associated with the affected jurisdiction.",
            "C. Identifying business processes associated with personal data exchange with the affected jurisdiction.",
            "D. Developing an inventory of all business entities that exchange personal data with the affected jurisdiction."
        ],
        answer: "C",
        explanation: "Identifying business processes associated with personal data exchange with the affected jurisdiction is most helpful, as it reveals which specific processes are subject to the new regulation. This directly maps the organization's exposure to the regulatory requirement."
    },
    {
        id: 107,
        question: "When responding to an ongoing denial of service (DoS) attack, an organization's FIRST course of action should be to:",
        options: [
            "A. minimize impact.",
            "B. investigate damage.",
            "C. analyze the attack path.",
            "D. restore service."
        ],
        answer: "A",
        explanation: "Minimizing impact should be the first course of action during an ongoing DoS attack. Immediate containment measures (such as traffic filtering or rate limiting) reduce harm while investigations and service restoration proceed."
    },
    {
        id: 108,
        question: "Which of the following BEST describes an audit risk?",
        options: [
            "A. The financial report may contain undetected material errors.",
            "B. Employees have been misappropriating funds.",
            "C. The company is being sued for false accusations.",
            "D. Key employees have not taken vacation for 2 years."
        ],
        answer: "A",
        explanation: "Audit risk is the risk that the auditor fails to detect material misstatements in financial reports. The possibility that financial reports contain undetected material errors directly describes audit risk — the failure of the audit process to identify significant problems."
    },
    {
        id: 109,
        question: "In an IT organization where many responsibilities are shared, which of the following is the BEST control for detecting unauthorized data changes?",
        options: [
            "A. Users are required to periodically rotate responsibilities.",
            "B. Segregation of duties conflicts are periodically reviewed.",
            "C. Data changes are logged in an outside application.",
            "D. Data changes are independently reviewed by another group."
        ],
        answer: "D",
        explanation: "Independent review of data changes by another group is the best detective control in an environment with shared responsibilities. An independent review provides an objective check on data modifications, identifying unauthorized changes that internal processes might miss."
    },
    {
        id: 110,
        question: "End users have been demanding the ability to use their own devices for work, but want to keep personal information out of corporate control. Which of the following would be MOST effective at reducing the risk of security incidents while satisfying end user requirements?",
        options: [
            "A. Encrypt corporate data on the devices.",
            "B. Enable remote wipe capabilities for the devices.",
            "C. Require complex passwords.",
            "D. Implement an acceptable use policy."
        ],
        answer: "A",
        explanation: "Encrypting corporate data on personal devices protects organizational information while leaving personal data untouched, satisfying both the security requirement and the user's desire for separation of personal and corporate data."
    },
    {
        id: 111,
        question: "Following the sale of a business division, employees will be transferred to a new organization, but they will retain access to IT equipment from the previous employer. An IS auditor has recommended that both organizations agree to and document an acceptable use policy for the equipment. What type of control has been recommended?",
        options: [
            "A. Corrective control.",
            "B. Preventive control.",
            "C. Detective control.",
            "D. Directive control."
        ],
        answer: "D",
        explanation: "An acceptable use policy is a directive control — it provides instructions and guidelines governing how employees should use IT equipment. Directive controls guide behavior through policies and rules rather than technically preventing or detecting problems."
    },
    {
        id: 112,
        question: "What is the BEST way for an IS auditor to assess the adequacy of an expert consultant who was selected to be involved in an audit engagement?",
        options: [
            "A. Obtain an understanding of the expert's relevant experience.",
            "B. Verify that the engagement letter outlines the expert's responsibilities.",
            "C. Review the independence and objectivity of the expert.",
            "D. Review the industry reputation of the expert consultant's firm."
        ],
        answer: "A",
        explanation: "Obtaining an understanding of the expert's relevant experience is the best way to assess adequacy, as it directly evaluates whether the expert possesses the specific knowledge and skills needed for the audit engagement."
    },
    {
        id: 113,
        question: "In a small IT web development company where developers must have write access to production, the BEST recommendation of an IS auditor would be to:",
        options: [
            "A. perform a user access review for the development team.",
            "B. hire another person to perform migration to production.",
            "C. implement continuous monitoring controls.",
            "D. remove production access from the developers."
        ],
        answer: "C",
        explanation: "Implementing continuous monitoring controls is the best recommendation when SoD cannot be achieved (developers need production access). Continuous monitoring provides ongoing detection of unauthorized or inappropriate changes, compensating for the lack of SoD."
    },
    {
        id: 114,
        question: "Of the following, who are the MOST appropriate staff for ensuring the alignment of user authorization tables with approved authorization forms?",
        options: [
            "A. Security administrators.",
            "B. System owners.",
            "C. Database administrators (DBAs).",
            "D. IT managers."
        ],
        answer: "A",
        explanation: "Security administrators are the most appropriate staff for ensuring alignment of user authorization tables with approved authorization forms. They are responsible for implementing and maintaining access control configurations in accordance with approved access rights."
    },
    {
        id: 115,
        question: "As part of business continuity planning, which of the following is MOST important to assess when conducting a business impact analysis (BIA)?",
        options: [
            "A. Risk appetite.",
            "B. Completeness of critical asset inventory.",
            "C. Critical applications in the cloud.",
            "D. Recovery scenarios."
        ],
        answer: "B",
        explanation: "Completeness of the critical asset inventory is most important during a BIA, as an incomplete inventory means some critical assets may be excluded from the analysis. Without knowing all critical assets, the BIA cannot accurately assess impacts or set appropriate recovery objectives."
    },
    {
        id: 116,
        question: "During the post-implementation review of an application that was implemented six months ago, which of the following would be MOST helpful in determining whether the application meets business requirements?",
        options: [
            "A. Project closure report and lessons-learned documents from the project management office (PMO).",
            "B. User acceptance testing (UAT) results and sign-off from users on meeting business requirements.",
            "C. Difference between approved budget and actual project expenditures determined post implementation.",
            "D. Comparison between expected benefits from the business case and actual benefits after implementation."
        ],
        answer: "D",
        explanation: "Comparing expected benefits from the business case against actual benefits realized after implementation is the most helpful measure. It directly assesses whether the application has delivered the business value it was designed to provide."
    },
    {
        id: 117,
        question: "An organization maintains an inventory of the IT applications used by its staff. Which of the following would pose the GREATEST concern with regard to the quality of the inventory data?",
        options: [
            "A. Inventory data is available on and downloadable from the corporate intranet.",
            "B. The inventory does not contain a formal risk ranking for all the IT applications.",
            "C. The application owner and contact information fields are not required to be completed.",
            "D. The organization has not established a formal recertification process for the inventory data."
        ],
        answer: "D",
        explanation: "The lack of a formal recertification process for inventory data is the greatest concern, as it means the inventory is never validated or updated systematically. Over time, the inventory will become inaccurate, making it unreliable for security, licensing, and continuity planning."
    },
    {
        id: 118,
        question: "What is BEST for an IS auditor to review when assessing the effectiveness of changes recently made to processes and tools related to an organization's business continuity plan (BCP)?",
        options: [
            "A. Change management processes.",
            "B. Updated inventory of systems.",
            "C. Full test results.",
            "D. Completed test plans."
        ],
        answer: "C",
        explanation: "Full test results provide the most direct evidence of whether BCP process and tool changes are effective. Testing validates that changes work as intended in practice, whereas plans and inventories only document intentions."
    },
    {
        id: 119,
        question: "IS management has recently disabled certain referential integrity controls in the database management system (DBMS) software to provide users increased query performance. Which of the following controls will MOST effectively compensate for the lack of referential integrity?",
        options: [
            "A. More frequent data backups.",
            "B. Periodic table link checks.",
            "C. Performance monitoring tools.",
            "D. Concurrent access controls."
        ],
        answer: "B",
        explanation: "Periodic table link checks compensate for disabled referential integrity by regularly verifying that relationships between database tables are consistent and valid. This detective control identifies integrity violations that the disabled DBMS controls would have prevented."
    },
    {
        id: 120,
        question: "What would be an IS auditor's BEST recommendation upon finding that a third-party IT service provider hosts the organization's human resources (HR) system in a foreign country?",
        options: [
            "A. Review third-party audit reports.",
            "B. Conduct a privacy impact analysis.",
            "C. Implement change management review.",
            "D. Perform background verification checks."
        ],
        answer: "B",
        explanation: "Conducting a privacy impact analysis is the best recommendation when HR data (which contains sensitive personal information) is hosted abroad. Different countries have different data protection laws, and a privacy impact analysis identifies compliance gaps and associated risks."
    },
    {
        id: 121,
        question: "The PRIMARY role of a control self-assessment (CSA) facilitator is to:",
        options: [
            "A. provide solutions for control weaknesses.",
            "B. focus the team on internal controls.",
            "C. report on the internal control weaknesses.",
            "D. conduct interviews to gain background information."
        ],
        answer: "B",
        explanation: "The primary role of a CSA facilitator is to focus the team on internal controls. The facilitator guides the workshop process to ensure productive discussion around control objectives and effectiveness, without taking responsibility for the assessment outcomes."
    },
    {
        id: 122,
        question: "IT disaster recovery time objectives (RTOs) should be based on the:",
        options: [
            "A. maximum tolerable downtime (MTD).",
            "B. nature of the outage.",
            "C. maximum tolerable loss of data.",
            "D. business-defined criticality of the systems."
        ],
        answer: "D",
        explanation: "RTOs should be based on the business-defined criticality of the systems. Critical systems that support key business processes require shorter RTOs, while less critical systems can tolerate longer recovery times. Business impact determines the appropriate RTO."
    },
    {
        id: 123,
        question: "A data analytics team has developed a process automation bot for internal audit that scans user access to all servers in the environment and then randomly selects a sample of new users for testing. Which of the following presents the GREATEST concern with this approach?",
        options: [
            "A. The bot can only select samples from the current period.",
            "B. Auditor judgment is removed from the process.",
            "C. Evidence of population completeness is not maintained.",
            "D. Data must be validated manually before being loaded into the bot."
        ],
        answer: "C",
        explanation: "The greatest concern is that evidence of population completeness is not maintained. Without documenting that the bot's population is complete and accurate, the auditor cannot provide assurance that the sample is drawn from the full, correct population of new users."
    },
    {
        id: 124,
        question: "What is the MOST critical finding when reviewing an organization's information security management?",
        options: [
            "A. No official charter for the information security management system.",
            "B. No employee awareness training and education program.",
            "C. No dedicated security officer.",
            "D. No periodic assessments to identify threats and vulnerabilities."
        ],
        answer: "D",
        explanation: "No periodic assessments to identify threats and vulnerabilities is the most critical finding. Without ongoing identification of threats and vulnerabilities, the organization cannot know what risks it faces and therefore cannot appropriately protect its information assets."
    },
    {
        id: 125,
        question: "The operations team of an organization has reported an IS security attack. Which of the following should be the FIRST step for the security incident response team?",
        options: [
            "A. Report results to management.",
            "B. Document lessons learned.",
            "C. Perform a damage assessment.",
            "D. Prioritize resources for corrective action."
        ],
        answer: "C",
        explanation: "Performing a damage assessment should be the first step for the incident response team. Understanding the scope and impact of the attack is necessary before resources can be prioritized, corrective actions determined, or management briefed."
    },
    {
        id: 126,
        question: "A company converted its payroll system from an external service to an internal package. Payroll processing in April was run in parallel. To validate the completeness of data after the conversion, which of the following comparisons from the old to the new system would be MOST effective?",
        options: [
            "A. Cut-off dates and overwrites for a sample of employees.",
            "B. Turnaround time for payroll processing.",
            "C. Master file employee data to payroll journals.",
            "D. Employee counts and year-to-date payroll totals."
        ],
        answer: "D",
        explanation: "Comparing employee counts and year-to-date payroll totals between the old and new systems is most effective for validating completeness. These aggregate figures quickly reveal whether all employees and payroll amounts were successfully converted."
    },
    {
        id: 127,
        question: "Following an IS audit, which of the following types of risk would be MOST critical to communicate to key stakeholders?",
        options: [
            "A. Control.",
            "B. Inherent.",
            "C. Audit.",
            "D. Residual."
        ],
        answer: "D",
        explanation: "Residual risk is most critical to communicate to stakeholders because it represents the risk that remains after controls have been applied. Stakeholders need to know the remaining exposure to make informed decisions about whether to accept, transfer, or further mitigate the risk."
    },
    {
        id: 128,
        question: "An organization has installed blade server technology in its data center. To determine whether higher cooling demands are maintained, which of the following should the IS auditor review?",
        options: [
            "A. Air conditioning capacity.",
            "B. Ventilation systems.",
            "C. Uninterruptible power supply (UPS) systems.",
            "D. Duct maintenance."
        ],
        answer: "A",
        explanation: "Reviewing air conditioning capacity is most relevant for determining whether the data center's cooling systems can handle the increased heat generated by blade server technology. Blade servers generate significantly more heat per rack than traditional servers."
    },
    {
        id: 129,
        question: "The use of control totals reduces the risk of:",
        options: [
            "A. posting to the wrong record.",
            "B. improper backup.",
            "C. improper authorization.",
            "D. incomplete processing."
        ],
        answer: "D",
        explanation: "Control totals reduce the risk of incomplete processing by verifying that the total count or value of records processed matches the expected total. Discrepancies indicate that some records were not processed, enabling detection and correction."
    },
    {
        id: 130,
        question: "The application systems quality assurance (QA) function should:",
        options: [
            "A. compare programs to approved system changes.",
            "B. ensure adherence of programs to standards.",
            "C. assist programmers in designing and developing applications.",
            "D. design and develop quality applications by employing system development methodology."
        ],
        answer: "B",
        explanation: "The QA function should ensure adherence of programs to standards. QA verifies that development work conforms to established coding standards, testing requirements, and methodologies, maintaining the quality of software deliverables."
    },
    {
        id: 131,
        question: "An organization has begun using social media to communicate with current and potential clients. Which of the following should be of PRIMARY concern to the auditor?",
        options: [
            "A. Using a third-party provider to host and manage content.",
            "B. Lack of guidance on appropriate social media usage and monitoring.",
            "C. Negative posts by customers affecting the organization's image.",
            "D. Reduced productivity of staff using social media."
        ],
        answer: "B",
        explanation: "Lack of guidance on appropriate social media usage and monitoring is the primary concern. Without clear policies, employees may inadvertently share confidential information, make inappropriate statements, or engage in activities that expose the organization to legal or reputational risk."
    },
    {
        id: 132,
        question: "An organization is developing data classification standards and has asked internal audit for advice on aligning the standards with best practices. Internal audit would MOST likely recommend the standards should be:",
        options: [
            "A. based on the business requirements for confidentiality of the information.",
            "B. aligned with the organization's segregation of duties requirements.",
            "C. based on the results of an organization-wide risk assessment.",
            "D. based on the business requirements for authentication of the information."
        ],
        answer: "A",
        explanation: "Data classification standards should be based on the business requirements for confidentiality of the information. Classification levels should reflect the sensitivity of data and the potential harm from unauthorized disclosure, driving appropriate protective controls."
    },
    {
        id: 133,
        question: "An organization considers implementing a system that uses a technology that is not in line with the organization's IT strategy. Which of the following is the BEST justification for deviating from the IT strategy?",
        options: [
            "A. The system makes use of state-of-the-art technology.",
            "B. The system has a reduced cost of ownership.",
            "C. The organization has staff familiar with the technology.",
            "D. The business benefits are achieved even with extra costs."
        ],
        answer: "D",
        explanation: "The business benefits being achieved even with extra costs is the best justification for deviating from IT strategy. A strategic deviation must demonstrate clear business value that outweighs the risks and costs of non-standard technology."
    },
    {
        id: 134,
        question: "An organization is running servers with critical business applications that are in an area subject to frequent but brief power outages. Knowledge of which of the following would allow the organization's management to monitor the ongoing adequacy of the uninterruptible power supply (UPS)?",
        options: [
            "A. Duration and interval of the power outages.",
            "B. Business impact of server downtime.",
            "C. Number of servers supported by the UPS.",
            "D. Mean time to recover servers after failure."
        ],
        answer: "A",
        explanation: "Knowledge of the duration and interval of power outages allows management to compare outage characteristics against UPS battery capacity and backup generator startup times, enabling them to assess whether the UPS provides adequate protection."
    },
    {
        id: 135,
        question: "An organization implemented a cybersecurity policy last year. Which of the following is the GREATEST indicator that the policy may need to be revised?",
        options: [
            "A. A significant increase in authorized connections to third parties.",
            "B. A significant increase in cybersecurity audit findings.",
            "C. A significant increase in external attack attempts.",
            "D. A significant increase in approved exceptions."
        ],
        answer: "D",
        explanation: "A significant increase in approved exceptions indicates the policy is no longer aligned with current business practices. When many exceptions are needed, the policy may be too restrictive or outdated, suggesting it requires revision to reflect the current environment."
    },
    {
        id: 136,
        question: "An organization's enterprise architecture (EA) department decides to change a legacy system's components while maintaining its original functionality. Which of the following is MOST important for an IS auditor to understand when reviewing this decision?",
        options: [
            "A. The current business capabilities delivered by the legacy system.",
            "B. The database entity relationships within the legacy system.",
            "C. The proposed network topology to be used by the redesigned system.",
            "D. The data flows between the components to be used by the redesigned system."
        ],
        answer: "A",
        explanation: "Understanding the current business capabilities delivered by the legacy system is most important, as these capabilities must be preserved in the redesigned system. Without this understanding, there is a risk that business-critical functionality will be inadvertently lost."
    },
    {
        id: 137,
        question: "A legacy application is running on an operating system that is no longer supported by the vendor. If the organization continues to use the current application, which of the following should be the IS auditor's GREATEST concern?",
        options: [
            "A. Potential exploitation of zero-day vulnerabilities in the system.",
            "B. Inability to update the legacy application database.",
            "C. Increased cost of maintaining the system.",
            "D. Inability to use the operating system due to potential license issues."
        ],
        answer: "A",
        explanation: "Potential exploitation of zero-day vulnerabilities is the greatest concern for an unsupported operating system. Without vendor security patches, newly discovered vulnerabilities will remain permanently unpatched, creating persistent and growing security exposure."
    },
    {
        id: 138,
        question: "A system development project is experiencing delays due to ongoing staff shortages. Which of the following strategies would provide the GREATEST assurance of system quality at implementation?",
        options: [
            "A. Utilize new system development tools to improve productivity.",
            "B. Deliver only the core functionality on the initial target date.",
            "C. Implement overtime pay and bonuses for all development staff.",
            "D. Recruit IS staff to expedite system development."
        ],
        answer: "B",
        explanation: "Delivering only core functionality on the initial target date is the best strategy for quality assurance. Reducing scope maintains quality standards for what is delivered, rather than rushing a full-scope delivery that compromises quality."
    },
    {
        id: 139,
        question: "When reviewing past results of a recurring annual audit, an IS auditor notes that findings may not have been reported and independence may not have been maintained. Which of the following is the auditor's BEST course of action?",
        options: [
            "A. Reevaluate internal controls.",
            "B. Re-perform past audits to ensure independence.",
            "C. Inform senior management.",
            "D. Inform audit management."
        ],
        answer: "D",
        explanation: "Informing audit management is the most appropriate first action when an IS auditor suspects that past findings were not reported and independence was not maintained. This is an internal audit quality and integrity issue that audit management must address."
    },
    {
        id: 140,
        question: "An information systems security officer's PRIMARY responsibility for business process applications is to:",
        options: [
            "A. create role-based rules for each business process.",
            "B. approve the organization's security policy.",
            "C. ensure access rules agree with policies.",
            "D. authorize secured emergency access."
        ],
        answer: "C",
        explanation: "The information systems security officer's primary responsibility is to ensure access rules agree with policies. This means verifying that the technical access controls implemented in systems align with the organization's security policy requirements."
    },
    {
        id: 141,
        question: "Coding standards provide which of the following?",
        options: [
            "A. Access control tables.",
            "B. Data flow diagrams.",
            "C. Field naming conventions.",
            "D. Program documentation."
        ],
        answer: "C",
        explanation: "Coding standards provide field naming conventions and other guidelines that ensure consistency, readability, and maintainability of code across the development team. They establish rules for variable names, code formatting, and programming practices."
    },
    {
        id: 142,
        question: "During which IT project phase is it MOST appropriate to conduct a benefits realization analysis?",
        options: [
            "A. Post-implementation review phase.",
            "B. Design review phase.",
            "C. User acceptance testing (UAT) phase.",
            "D. Final implementation phase."
        ],
        answer: "A",
        explanation: "A benefits realization analysis is most appropriately conducted during the post-implementation review phase, when the system has been in production long enough to demonstrate whether the projected benefits from the business case have actually been achieved."
    },
    {
        id: 143,
        question: "Due to a high volume of customer orders, an organization plans to implement a new application for customers to use for online ordering. Which type of testing is MOST important to ensure the security of the application prior to go-live?",
        options: [
            "A. Stress testing.",
            "B. User acceptance testing (UAT).",
            "C. Vulnerability testing.",
            "D. Regression testing."
        ],
        answer: "C",
        explanation: "Vulnerability testing is most important for ensuring the security of a customer-facing online ordering application prior to go-live. It identifies security weaknesses that could be exploited by attackers, directly assessing the application's security posture."
    },
    {
        id: 144,
        question: "During an audit of identity and access management, an IS auditor finds that the engagement audit plan does not include the testing of controls that regulate access by third parties. Which of the following would be the auditor's BEST course of action?",
        options: [
            "A. Add testing of third-party access controls to the scope of the audit.",
            "B. Plan to test these controls in another audit.",
            "C. Determine whether the risk has been identified in the planning documents.",
            "D. Escalate the deficiency to audit management."
        ],
        answer: "C",
        explanation: "The auditor should first determine whether the risk related to third-party access was identified in the planning documents. If the risk was identified and excluded from scope intentionally, that decision should be understood. If it was overlooked, scope adjustment may be warranted."
    },
    {
        id: 145,
        question: "What is the PRIMARY reason for conducting a risk assessment when developing an annual IS audit plan?",
        options: [
            "A. Identify and prioritize audit areas.",
            "B. Determine the existence of controls in audit areas.",
            "C. Provide assurance material items will be covered.",
            "D. Decide which audit procedures and techniques to use."
        ],
        answer: "A",
        explanation: "The primary reason for conducting a risk assessment in audit planning is to identify and prioritize audit areas based on risk level. This ensures that limited audit resources are allocated to the areas of highest risk to the organization."
    },
    {
        id: 146,
        question: "An employee transfers from an organization's risk management department to become the lead IS auditor. While in the risk management department, the employee helped develop the key performance indicators (KPIs) now used by the organization. Which of the following would pose the GREATEST threat to the independence of this auditor?",
        options: [
            "A. Evaluating the effectiveness of IT risk management processes.",
            "B. Recommending controls to address the IT risks identified by KPIs.",
            "C. Developing KPIs to measure the internal audit team.",
            "D. Training the IT audit team on IT risk management processes."
        ],
        answer: "A",
        explanation: "Evaluating the effectiveness of IT risk management processes poses the greatest threat to independence, because the auditor helped develop the KPIs used by those processes. Auditing something you helped design impairs objectivity and independence."
    },
    {
        id: 147,
        question: "As part of an audit response, an auditee has concerns with the recommendations and is hesitant to implement them. Which of the following would be the BEST course of action for the IS auditor?",
        options: [
            "A. Suggest hiring a third-party consultant to perform a current state assessment.",
            "B. Issue a final report without including the opinion of the auditee.",
            "C. Conduct further discussions with the auditee to develop a mitigation plan.",
            "D. Accept the auditee's response and perform additional testing."
        ],
        answer: "C",
        explanation: "Conducting further discussions with the auditee to develop a mutually acceptable mitigation plan is the best approach. Engaging collaboratively respects the auditee's concerns while working toward risk remediation, leading to more effective and supported action plans."
    },
    {
        id: 148,
        question: "After discussing findings with an auditee, an IS auditor is required to obtain approval of the report from the CEO before issuing it to the audit committee. This requirement PRIMARILY affects the IS auditor's:",
        options: [
            "A. judgment.",
            "B. effectiveness.",
            "C. independence.",
            "D. integrity."
        ],
        answer: "C",
        explanation: "Requiring CEO approval before issuing an audit report to the audit committee primarily affects the IS auditor's independence. This creates a situation where the auditor's conclusions could be influenced by executive management, undermining the independence required for objective reporting."
    },
    {
        id: 149,
        question: "During a review of IT service desk practices, an IS auditor notes that help desk personnel are spending more time fulfilling user requests for password resets than resolving critical incidents. Which of the following recommendations to IT management would BEST address this situation?",
        options: [
            "A. Calculate the age of incident tickets and alert senior IT personnel when they exceed service level agreements (SLAs).",
            "B. Provide annual password management training to end users to reduce the number of instances requiring password resets.",
            "C. Incentivize service desk personnel to close incidents within agreed service levels.",
            "D. Implement a self-service solution and redirect users to access frequently requested services."
        ],
        answer: "D",
        explanation: "Implementing a self-service solution for common requests like password resets is the best recommendation. It frees help desk personnel to focus on critical incidents by redirecting routine, high-volume requests to an automated self-service portal."
    },
    {
        id: 150,
        question: "During which phase of a system development project should key performance indicators (KPIs) be established?",
        options: [
            "A. Planning phase.",
            "B. Initiation phase.",
            "C. Execution phase.",
            "D. Closure phase."
        ],
        answer: "A",
        explanation: "KPIs should be established during the planning phase so that success criteria are defined before the project begins. Early establishment of KPIs enables ongoing measurement of project performance against defined targets throughout execution."
    },
    {
        id: 151,
        question: "An organization wants to change its project methodology to address increasing costs and process changes. Which of the following is the BEST methodology to use?",
        options: [
            "A. Agile application development.",
            "B. Waterfall application development.",
            "C. Joint application development.",
            "D. Object-oriented application development."
        ],
        answer: "A",
        explanation: "Agile methodology is best for addressing increasing costs and process changes because it delivers value incrementally, adapts to changing requirements, and enables frequent cost-benefit reassessment. Its iterative nature allows continuous adjustment to manage costs effectively."
    },
    {
        id: 152,
        question: "A USB device containing sensitive production data was lost by an employee, and its contents were subsequently found published online. Which of the following controls is the BEST recommendation to prevent a similar recurrence?",
        options: [
            "A. Monitoring data being downloaded on USB devices.",
            "B. Using a strong encryption algorithm.",
            "C. Training users on USB device security.",
            "D. Electronically tracking portable devices."
        ],
        answer: "B",
        explanation: "Using strong encryption on USB devices is the best recommendation to prevent data exposure if a device is lost. Encrypted data cannot be read without the decryption key, meaning that even if the device is found, the contents cannot be published."
    },
    {
        id: 153,
        question: "During an IT operations audit, multiple unencrypted backup tapes containing sensitive credit card information cannot be found. Which of the following presents the GREATEST risk to the organization?",
        options: [
            "A. Human resource cost of responding to the incident.",
            "B. Business disruption if a data restore cannot be completed.",
            "C. Reputational damage due to potential identity theft.",
            "D. The cost of recreating the missing backup tapes."
        ],
        answer: "C",
        explanation: "Reputational damage due to potential identity theft is the greatest risk. Sensitive, unencrypted credit card data on missing tapes could enable financial fraud and identity theft for customers, resulting in regulatory penalties, legal liability, and severe reputational harm."
    },
    {
        id: 154,
        question: "An organization uses multiple offsite data center facilities. Which of the following is MOST important to consider when choosing related backup devices and media?",
        options: [
            "A. Associated costs.",
            "B. Standardization.",
            "C. Backup media capacity.",
            "D. Restoration speed."
        ],
        answer: "B",
        explanation: "Standardization is most important when using multiple offsite facilities, as it ensures that backup media and devices are compatible across all locations. Inconsistent standards create recovery risks when backups from one location must be restored at another."
    },
    {
        id: 155,
        question: "Which of the following is MOST important to determine when conducting a post-implementation review?",
        options: [
            "A. Whether the solution architecture complies with IT standards.",
            "B. Whether success criteria have been achieved.",
            "C. Whether lessons learned have been documented.",
            "D. Whether the project has been delivered within the approved budget."
        ],
        answer: "B",
        explanation: "Determining whether success criteria have been achieved is the most important objective of a post-implementation review. Success criteria, defined in the business case, represent the goals the project was meant to accomplish and provide the basis for evaluating overall success."
    },
    {
        id: 156,
        question: "While reviewing an organization's business continuity plan (BCP), an IS auditor observes that a recently developed application is not included. The IS auditor should:",
        options: [
            "A. ensure that the criticality of the application is determined.",
            "B. include in the audit findings that the BCP is incomplete.",
            "C. recommend that the application be incorporated in the BCP.",
            "D. ignore the observation as the application is not mission critical."
        ],
        answer: "A",
        explanation: "The IS auditor should first ensure that the criticality of the application is determined. Before concluding the BCP is incomplete, the auditor must understand whether the application is critical enough to warrant BCP coverage. This assessment drives the appropriate recommendation."
    },
    {
        id: 157,
        question: "Data anonymization helps to prevent which types of attacks in a big data environment?",
        options: [
            "A. Man-in-the-middle.",
            "B. Denial of service (DoS).",
            "C. Correlation.",
            "D. Spoofing."
        ],
        answer: "C",
        explanation: "Data anonymization helps prevent correlation attacks, where an attacker attempts to re-identify individuals by combining anonymized data with other datasets. Proper anonymization breaks the linkages that enable such correlation, protecting individual privacy in big data environments."
    },
    {
        id: 158,
        question: "During a review of a production schedule, an IS auditor observes that a staff member is not complying with mandatory operational procedures. The auditor's NEXT step should be to:",
        options: [
            "A. note the noncompliance in the audit working papers.",
            "B. determine why the procedures were not followed.",
            "C. issue an audit memorandum identifying the noncompliance.",
            "D. include the noncompliance in the audit report."
        ],
        answer: "B",
        explanation: "The auditor's next step is to determine why the procedures were not followed. Understanding the reason for noncompliance provides essential context — whether it was a one-off error, systemic issue, or intentional deviation affects how it should be documented and reported."
    },
    {
        id: 159,
        question: "The PRIMARY objective of IT service level management is to:",
        options: [
            "A. improve IT cost control.",
            "B. manage computer operations activities.",
            "C. satisfy customer requirements.",
            "D. increase awareness of IT services."
        ],
        answer: "C",
        explanation: "The primary objective of IT service level management is to satisfy customer requirements by ensuring IT services are delivered at agreed levels of quality, availability, and performance. It aligns IT service delivery with business needs."
    },
    {
        id: 160,
        question: "The use of which of the following would BEST enhance a process improvement program?",
        options: [
            "A. Balanced scorecard.",
            "B. Project management methodologies.",
            "C. Capability maturity models.",
            "D. Model-based design notations."
        ],
        answer: "C",
        explanation: "Capability maturity models (such as CMMI) are specifically designed to guide process improvement by providing a structured framework for assessing current process maturity and defining a path toward higher capability levels."
    },
    {
        id: 161,
        question: "Reconciliations have identified data discrepancies between an enterprise data warehouse and a revenue system for key financial reports. What is the GREATEST risk to the organization in this situation?",
        options: [
            "A. The key financial reports may no longer be produced.",
            "B. Financial reports may be delayed.",
            "C. Undetected fraud may occur.",
            "D. Decisions may be made based on incorrect information."
        ],
        answer: "D",
        explanation: "The greatest risk is that decisions may be made based on incorrect information. Data discrepancies between the warehouse and revenue system mean financial reports contain unreliable data, which could lead to flawed business decisions with significant financial consequences."
    },
    {
        id: 162,
        question: "An organization has recently implemented a Voice-over IP (VoIP) communication system. Which of the following should be the IS auditor's PRIMARY concern?",
        options: [
            "A. Voice quality degradation due to packet loss.",
            "B. Lack of integration of voice and data communications.",
            "C. A single point of failure for both voice and data communications.",
            "D. Inability to use virtual private networks (VPNs) for internal traffic."
        ],
        answer: "C",
        explanation: "A single point of failure for both voice and data communications is the primary concern with VoIP. Because VoIP runs over the data network, a network failure disables both voice and data simultaneously, whereas traditional telephony provided independent communication channels."
    },
    {
        id: 163,
        question: "When evaluating the ability of a disaster recovery plan (DRP) to enable the recovery of IT processing capabilities, it is MOST important for the IS auditor to verify the plan is:",
        options: [
            "A. stored at an offsite location.",
            "B. communicated to department heads.",
            "C. regularly reviewed.",
            "D. periodically tested."
        ],
        answer: "D",
        explanation: "Periodic testing is most important to verify a DRP's effectiveness. Only through testing can an organization validate that the plan actually works in practice. A plan that has never been tested provides no assurance of actual recovery capability."
    },
    {
        id: 164,
        question: "During a disaster recovery audit, an IS auditor finds that a business impact analysis (BIA) has not been performed. The auditor should FIRST:",
        options: [
            "A. conduct additional compliance testing.",
            "B. issue an intermediate report to management.",
            "C. perform a business impact analysis (BIA).",
            "D. evaluate the impact on current disaster recovery capability."
        ],
        answer: "D",
        explanation: "The IS auditor should first evaluate the impact on current disaster recovery capability of not having a BIA. This assessment determines the severity of the gap and informs the audit finding's risk rating and recommended actions."
    },
    {
        id: 165,
        question: "During a review, an IS auditor discovers that corporate users are able to access cloud-based applications and data from any Internet-connected web browser. Which of the following is the auditor's BEST recommendation to help prevent unauthorized access?",
        options: [
            "A. Utilize strong anti-malware controls on all computing devices.",
            "B. Implement an intrusion detection system (IDS).",
            "C. Update security policies and procedures.",
            "D. Implement multi-factor authentication."
        ],
        answer: "D",
        explanation: "Implementing multi-factor authentication is the best recommendation to prevent unauthorized access to cloud applications. MFA requires more than a password to authenticate, significantly reducing the risk of unauthorized access even if credentials are compromised."
    },
    {
        id: 166,
        question: "To create a digital signature in a message using asymmetric encryption, it is necessary to:",
        options: [
            "A. encrypt the authentication sequence using a public key.",
            "B. first use a symmetric algorithm for the authentication sequence.",
            "C. transmit the actual digital signature in unencrypted clear text.",
            "D. encrypt the authentication sequence using a private key."
        ],
        answer: "D",
        explanation: "To create a digital signature, the sender encrypts the message hash using their private key. The recipient uses the sender's public key to decrypt and verify the signature, confirming the message's authenticity and integrity."
    },
    {
        id: 167,
        question: "During an audit of an access control system, an IS auditor finds that RFID card readers are not connected via the network to a central server. Which of the following is the GREATEST risk associated with this finding?",
        options: [
            "A. Lost or stolen cards cannot be disabled immediately.",
            "B. Card reader firmware updates cannot be rolled out automatically.",
            "C. The system is not easily scalable to accommodate a new device.",
            "D. Incidents cannot be investigated without a centralized log file."
        ],
        answer: "A",
        explanation: "The greatest risk is that lost or stolen cards cannot be disabled immediately. Without network connectivity to a central server, revocation of access credentials cannot be pushed to readers in real time, meaning compromised cards remain valid until readers are updated manually."
    },
    {
        id: 168,
        question: "Invoking a business continuity plan (BCP) is demonstrating which type of control?",
        options: [
            "A. Preventive.",
            "B. Corrective.",
            "C. Directive.",
            "D. Detective."
        ],
        answer: "B",
        explanation: "Invoking a BCP is a corrective control. It is activated after a disruptive event to restore normal business operations. Corrective controls minimize the impact of incidents after they occur by enabling recovery."
    },
    {
        id: 169,
        question: "When determining whether a project in the design phase will meet organizational objectives, what is BEST to compare against the business case?",
        options: [
            "A. Project plan.",
            "B. Requirements analysis.",
            "C. Implementation plan.",
            "D. Project budget provisions."
        ],
        answer: "B",
        explanation: "Comparing the requirements analysis against the business case is the best approach during the design phase. The requirements analysis defines what the system will do; comparing it against the business case verifies that the solution addresses the stated objectives and expected benefits."
    },
    {
        id: 170,
        question: "The results of an IS audit indicating the need to strengthen controls has been communicated to the appropriate stakeholders. Which of the following is the BEST way for management to enforce implementation of the recommendations?",
        options: [
            "A. Copy senior management on communications related to the audit.",
            "B. Have stakeholders develop a business case for control changes.",
            "C. Assign ownership to each remediation activity.",
            "D. Request auditors to design a roadmap for closure."
        ],
        answer: "C",
        explanation: "Assigning ownership to each remediation activity is the best way to enforce implementation. Clear ownership establishes accountability — specific individuals are responsible for completing each recommendation and can be held accountable for progress."
    }
];