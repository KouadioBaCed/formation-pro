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
    question: "What type of data analytics tool should be used to determine the correlation between the variables and a specific outcome?",
    options: [
      "A. Descriptive",
      "B. Predictive",
      "C. Prescriptive",
      "D. Diagnostic"
    ],
    solution: "B",
    explication: "Predictive analytics uses statistical algorithms and machine learning techniques to identify the likelihood of future outcomes based on historical data. It specifically examines correlations between variables and outcomes to forecast results. Descriptive analytics summarizes past data. Diagnostic analytics explains why something happened. Prescriptive analytics recommends actions to take. Only predictive analytics focuses on correlations to project future outcomes."
  },
  {
    id: 2,
    question: "Which of the following is the BEST approach for testing the change management process for an application?",
    options: [
      "A. Examine change management documentation for evidence of completeness and accuracy.",
      "B. Review change authorization based on change management records.",
      "C. Trace from system-generated information to the change management documents.",
      "D. Conduct end-to-end testing from change management documentation to a system-generated audit trail."
    ],
    solution: "D",
    explication: "End-to-end testing from change management documentation to a system-generated audit trail provides the most comprehensive evidence of the entire change management process. It verifies that every documented change was properly authorized, implemented as documented, and that the resulting system changes are traceable back to approved requests. Other options test only portions of the process. End-to-end testing closes the loop and provides the best assurance of process integrity."
  },
  {
    id: 3,
    question: "What should an IS auditor verify FIRST when evaluating the implementation of a data classification scheme?",
    options: [
      "A. Users are aware of data classification types.",
      "B. Data classification types have been defined.",
      "C. Data classification levels have been used.",
      "D. The latest technology has been used to enforce data classification."
    ],
    solution: "B",
    explication: "Before anything else can be evaluated, the classification types themselves must be defined. Without defined classification types, there is nothing to implement, enforce, or train users on. The logical sequence is: define types → train users → apply levels → enforce with technology. Verifying that definitions exist is the foundational first step. If types are not defined, the rest of the scheme cannot function regardless of user awareness or enforcement mechanisms."
  },
  {
    id: 4,
    question: "Which of the following is MOST important for an organization to consider when selecting a third-party provider for data center hosting services?",
    options: [
      "A. Number of resources the vendor has to support the data center",
      "B. Right-to-audit clause in the agreement with the vendor",
      "C. Regulatory requirements regarding location of data",
      "D. Availability of an independent report on data center controls"
    ],
    solution: "C",
    explication: "Regulatory requirements regarding data location are the most important consideration because they are legally mandatory. Many jurisdictions have data sovereignty laws that restrict where certain categories of data (especially personal, financial, or government data) can be stored and processed. Violating these requirements can result in severe legal penalties regardless of other contract terms. Right-to-audit, staffing, and independent reports are all important due diligence factors but are secondary to mandatory legal compliance."
  },
  {
    id: 5,
    question: "Which of the following is the BEST audit procedure to determine whether a firewall is configured in compliance with the organization's security policy?",
    options: [
      "A. Reviewing the parameter settings",
      "B. Performing a vulnerability assessment",
      "C. Reviewing the system log",
      "D. Conducting penetration testing"
    ],
    solution: "A",
    explication: "Reviewing the firewall parameter settings (rule base) directly compares the actual configuration against the organization's security policy requirements. This allows the auditor to verify each rule for compliance with policy. Vulnerability assessments identify weaknesses but don't directly confirm policy compliance. System logs show traffic history but not configuration. Penetration testing tests what's exploitable, not whether the configuration matches policy. Parameter review is the most direct method."
  },
  {
    id: 6,
    question: "Which of the following is MOST important for an IS auditor to evaluate when auditing proposed investments for the acquisition of an enterprise-wide application?",
    options: [
      "A. Whether management has approved a business case for the application",
      "B. Whether there are independent case studies regarding use of the application",
      "C. Whether there are multiple business units interested in the application",
      "D. Whether business units have approved user acceptance testing (UAT) for the application"
    ],
    solution: "A",
    explication: "Management approval of a business case is the foundational governance requirement for any IT investment. The business case documents the justification, costs, benefits, risks, and alternatives — the basis for the investment decision. Without an approved business case, the investment lacks proper authorization and governance. Case studies, business unit interest, and UAT approval are all secondary — they may be components of the business case or occur later, but management approval of the case is the primary governance control."
  },
  {
    id: 7,
    question: "Which of the following should an IS auditor do FIRST when assessing an organization's ability to effectively secure its data?",
    options: [
      "A. Ensure that data is accessible to key personnel.",
      "B. Ensure that high-risk data has been encrypted and secured.",
      "C. Ensure management has identified the data and where it resides.",
      "D. Ensure management has properly classified the data."
    ],
    solution: "C",
    explication: "Before data can be secured, classified, or protected, it must first be identified and its location known. You cannot protect what you don't know you have. Identifying data and where it resides is the most fundamental first step — it forms the inventory upon which all subsequent security activities are based. Classification (D) logically follows identification. Encryption and access controls are applied after data is identified and classified. Identification is always the starting point for data security."
  },
  {
    id: 8,
    question: "Which of the following is the MOST appropriate procedure for an organization to use when classifying data?",
    options: [
      "A. Have the information security manager assign data classification levels.",
      "B. Review data classification questionnaires completed by data owners.",
      "C. Use results from business impact analyses to classify data.",
      "D. Publish data classification templates on the corporate intranet."
    ],
    solution: "B",
    explication: "Data owners are the most appropriate parties to classify data because they understand its business context, sensitivity, and value. Reviewing questionnaires completed by data owners captures this knowledge systematically. The information security manager (A) may not know the business context of every data set. BIA results (C) assess impact of disruption, not sensitivity. Publishing templates (D) is a communication tool, not a classification procedure. Owner-driven classification is the most accurate and accountable approach."
  },
  {
    id: 9,
    question: "The PRIMARY purpose of a configuration management system is to:",
    options: [
      "A. support the release procedure.",
      "B. track software updates.",
      "C. standardize change approval.",
      "D. define baselines for software."
    ],
    solution: "D",
    explication: "The primary purpose of a configuration management system is to define and maintain baselines — known, approved states of software and hardware configurations. These baselines serve as reference points against which all changes are measured. Supporting releases and tracking updates are functions that rely on the baseline. Standardizing change approval is a change management function. The baseline is the core output and purpose of configuration management."
  },
  {
    id: 10,
    question: "Which of the following is MOST important for an IS auditor to identify in a project business case?",
    options: [
      "A. Security controls to be implemented during the project",
      "B. A comprehensive listing of business requirements",
      "C. An assessment of expected benefits versus projected cost",
      "D. Selection criteria for vendors involved in the project"
    ],
    solution: "C",
    explication: "The assessment of expected benefits versus projected cost (cost-benefit analysis) is the most critical element of a business case because it justifies the investment. It answers whether the project is worth pursuing. Without this assessment, decision-makers cannot evaluate the financial viability or ROI. Security controls and vendor criteria are components of implementation planning. Business requirements define scope. The cost-benefit analysis is the core financial justification that management uses to approve or reject the investment."
  },
  {
    id: 11,
    question: "An IS auditor is reviewing a network diagram. Which of the following would be the BEST location for placement of a firewall?",
    options: [
      "A. Between virtual local area networks (VLANs)",
      "B. At borders of network segments with different security levels",
      "C. Between each host and the local network switch/hub",
      "D. Inside the demilitarized zone (DMZ)"
    ],
    solution: "B",
    explication: "Firewalls should be placed at borders between network segments with different security levels to inspect and control traffic crossing security boundaries. This is the fundamental principle of network segmentation — firewalls enforce security policy where different trust zones meet. Placing them between all VLANs may not be practical. Between each host and the switch is cost-prohibitive and better handled by host firewalls. Inside the DMZ does not protect the boundary. Security-level boundaries are the optimal placement."
  },
  {
    id: 12,
    question: "A security review focused on data loss prevention (DLP) revealed the organization has no visibility to data stored in the cloud. What is the IS auditor's BEST recommendation to address this issue?",
    options: [
      "A. Implement a file system scanner to discover data stored in the cloud.",
      "B. Employ a cloud access security broker (CASB).",
      "C. Enhance the firewall at the network perimeter.",
      "D. Utilize a DLP tool on desktops to monitor user activities."
    ],
    solution: "B",
    explication: "A Cloud Access Security Broker (CASB) sits between the organization and cloud services, providing visibility, control, and security for cloud-stored data. It can discover what cloud services are in use, monitor data stored and transferred to the cloud, and enforce DLP policies across cloud environments. A file system scanner (A) works on local/network storage. Perimeter firewalls (C) don't address data already in the cloud. Desktop DLP (D) monitors endpoints but not cloud-resident data. CASB is purpose-built for cloud visibility."
  },
  {
    id: 13,
    question: "When designing metrics for information security, the MOST important consideration is that the metrics:",
    options: [
      "A. provide actionable data.",
      "B. are easy to understand.",
      "C. apply to all business units.",
      "D. conform to industry standards."
    ],
    solution: "A",
    explication: "Security metrics must provide actionable data — information that enables decision-makers to take specific actions to improve security. Metrics that don't lead to action are just data collection exercises. Ease of understanding (B) and industry conformance (D) are desirable but secondary qualities. Applicability across business units (C) may not always be appropriate. The ultimate purpose of security metrics is to drive informed decisions and concrete improvement actions."
  },
  {
    id: 14,
    question: "Which of the following can BEST reduce the impact of a long-term power failure?",
    options: [
      "A. Battery bank",
      "B. Redundant power source",
      "C. Power conditioning unit",
      "D. Emergency power-off switches"
    ],
    solution: "B",
    explication: "A redundant power source (such as a generator or alternate utility feed) can provide power indefinitely during a long-term failure, making it the best solution for extended outages. Battery banks (UPS) provide short-term bridge power but are limited in duration. Power conditioning units protect against power quality issues (surges, sags) but don't provide power during an outage. Emergency power-off switches are safety devices that cut power, not restore it."
  },
  {
    id: 15,
    question: "The process of applying a hash function to a message and obtaining and ciphering a digest refers to:",
    options: [
      "A. digital signatures.",
      "B. public key infrastructure (PKI).",
      "C. authentication.",
      "D. digital certificates."
    ],
    solution: "A",
    explication: "A digital signature is created by applying a hash function to a message to produce a digest, then encrypting (ciphering) that digest with the sender's private key. This two-step process — hashing then ciphering the digest — is the definition of creating a digital signature. PKI is the overall infrastructure that manages keys and certificates. Authentication verifies identity. Digital certificates bind public keys to identities. Only digital signatures specifically involve hashing a message and then ciphering the resulting digest."
  },
  {
    id: 16,
    question: "Which of the following control objectives is BEST addressed by using a virtual private network (VPN)?",
    options: [
      "A. Completeness",
      "B. Nonrepudiation",
      "C. Confidentiality",
      "D. Availability"
    ],
    solution: "C",
    explication: "A VPN creates an encrypted tunnel between two endpoints, ensuring that data transmitted over public networks cannot be intercepted and read by unauthorized parties. This directly addresses confidentiality. Completeness relates to ensuring all data is processed. Nonrepudiation requires digital signatures, not VPNs. Availability ensures systems are accessible when needed. VPN encryption is the primary mechanism for maintaining confidentiality of data in transit over untrusted networks."
  },
  {
    id: 17,
    question: "Which of the following BEST reflects a mature strategic planning process?",
    options: [
      "A. Action plans with IT requirements built into all projects",
      "B. An IT strategic plan that supports the corporate strategy",
      "C. IT projects from the strategic plan are approved by management",
      "D. An IT strategic plan with specifications of controls and safeguards"
    ],
    solution: "B",
    explication: "The hallmark of a mature IT strategic planning process is an IT strategic plan that is derived from and supports the overall corporate strategy. This demonstrates true business-IT alignment — IT strategy is not developed in isolation but as a direct enabler of business objectives. Action plans and project approvals (A, C) are tactical outcomes. Control specifications (D) are operational details. Strategic maturity means the IT plan is a deliberate translation of business strategy into IT terms."
  },
  {
    id: 18,
    question: "An organization is ready to implement a new IT solution consisting of multiple modules. The last module updates the processed data into the database. Which of the following findings should be of MOST concern to the IS auditor?",
    options: [
      "A. Absence of a formal change approval process",
      "B. Lack of input validation",
      "C. Lack of a data dictionary",
      "D. Use of weak encryption"
    ],
    solution: "B",
    explication: "Lack of input validation is the most critical concern because the last module writes data directly to the database. Without input validation, malformed, malicious, or erroneous data can corrupt the database — affecting data integrity for all downstream processes and users. A missing change approval process (A) is a governance concern. A missing data dictionary (C) affects documentation. Weak encryption (D) affects confidentiality. Invalid data entering the database can have catastrophic, irreversible effects on data integrity."
  },
  {
    id: 19,
    question: "Which of the following should an IS auditor recommend as a PRIMARY area of focus when an organization decides to outsource technical support for its external customers?",
    options: [
      "A. Monitor customer satisfaction with the change.",
      "B. Align service level agreements (SLAs) with current needs.",
      "C. Ensure right to audit is included within the contract.",
      "D. Minimize costs related to the third-party agreement."
    ],
    solution: "B",
    explication: "When outsourcing customer-facing technical support, aligning SLAs with current business needs is the primary focus because SLAs define the contractual service standards that the vendor must meet. They must reflect actual customer expectations and business requirements. Without aligned SLAs, the vendor may technically meet contract terms while failing to deliver adequate service. Customer satisfaction monitoring (A), right-to-audit (C), and cost minimization (D) are all important but secondary to establishing the right performance framework."
  },
  {
    id: 20,
    question: "What should be an IS auditor's MOST important consideration when assessing whether an organization's IT project portfolio is appropriately prioritized?",
    options: [
      "A. Cost-benefit analysis results",
      "B. The organization's business plan",
      "C. Business impact analysis (BIA)",
      "D. The organization's IT budget"
    ],
    solution: "B",
    explication: "The organization's business plan is the most important consideration because IT project prioritization should reflect and enable the organization's strategic business priorities. Projects that support the most critical business objectives should receive the highest priority. Cost-benefit analysis (A) informs individual project value. BIA (C) addresses recovery priorities. The IT budget (D) constrains what's possible but shouldn't determine prioritization. Alignment with the business plan ensures IT investments deliver maximum strategic value."
  },
  {
    id: 21,
    question: "During a follow-up audit, an IS auditor learns that management has deferred the implementation of a previously agreed-upon recommendation. What is the responsibility of the auditor?",
    options: [
      "A. Report the decision to defer the implementation to the steering committee.",
      "B. Assess the impact of any risks the decision may pose to the organization.",
      "C. Obtain commitment from management to implement the recommendations.",
      "D. Amend the final report to reflect the decision to defer the implementation."
    ],
    solution: "B",
    explication: "When management defers a recommendation, the auditor's responsibility is to assess the risk impact of that deferral. This professional obligation ensures that management and appropriate governance bodies understand the continued exposure. Reporting to the steering committee (A) may follow but is not the first step. Obtaining commitment (C) may not be the auditor's role to enforce. Amending the report (D) is a documentation action. Risk assessment comes first so the auditor can provide an informed view of the consequences."
  },
  {
    id: 22,
    question: "An IS auditor can BEST evaluate the business impact of system failures by:",
    options: [
      "A. assessing user satisfaction levels.",
      "B. analyzing equipment maintenance logs.",
      "C. reviewing system-generated logs.",
      "D. interviewing the security administrator."
    ],
    solution: "A",
    explication: "Assessing user satisfaction levels most directly captures the business impact of system failures because users are the ones experiencing the effects — lost productivity, inability to complete transactions, and service disruptions. Business impact is ultimately about how failures affect people and operations. Equipment logs (B) show technical events. System logs (C) show technical errors. The security administrator (D) focuses on security, not business impact. User satisfaction is the human, business-facing measure of failure impact."
  },
  {
    id: 23,
    question: "In a data center audit, an IS auditor finds that the humidity level is very low. The IS auditor would be MOST concerned because of an expected increase in:",
    options: [
      "A. risk of fire.",
      "B. backup tape failures.",
      "C. static electricity problems.",
      "D. employee discomfort."
    ],
    solution: "C",
    explication: "Low humidity causes a buildup of static electricity, which can discharge and damage sensitive electronic components, causing hardware failures and data loss. This is the primary technical risk of low humidity in data centers. Fire risk is associated with other environmental factors. Backup tape failures are more affected by high humidity. Employee discomfort is a concern but not the primary IT risk. Static electricity discharge is the direct, well-known consequence of low-humidity environments for electronic equipment."
  },
  {
    id: 24,
    question: "Following an IT audit, management has decided to accept the risk highlighted in the audit report. Which of the following would provide the MOST assurance to the IS auditor that management is adequately balancing the needs of the business with the need to manage risk?",
    options: [
      "A. Potential impact and likelihood are adequately documented.",
      "B. Established criteria exist for accepting and approving risk.",
      "C. A communication plan exists for informing parties impacted by the risk.",
      "D. Identified risk is reported into the organization's risk committee."
    ],
    solution: "B",
    explication: "Established criteria for accepting and approving risk provide the most assurance that management's acceptance decision is informed, consistent, and governed. When risk acceptance follows defined criteria (risk tolerance thresholds, required approval levels), it demonstrates a mature risk management process rather than ad hoc decisions. Documenting impact and likelihood (A) is part of the process. Communication plans (C) are good practice. Risk committee reporting (D) is governance. Only pre-established criteria ensure decisions are made within a proper framework."
  },
  {
    id: 25,
    question: "Which of the following observations regarding change management should be considered the MOST serious risk by an IS auditor?",
    options: [
      "A. The change is deployed two weeks after approval.",
      "B. The change is not approved by the business owners.",
      "C. There is no software used to track change management.",
      "D. The development of the change is not cost-effective."
    ],
    solution: "B",
    explication: "A change not approved by business owners represents the most serious risk because it means changes to business-critical systems are being made without the authorization of those responsible for the business processes. This is a fundamental governance failure — unauthorized changes could disrupt operations, introduce errors, or create security vulnerabilities without business knowledge or consent. Deployment timing (A) is an operational concern. No tracking software (C) is a process gap. Cost-effectiveness (D) is financial."
  },
  {
    id: 26,
    question: "An IS auditor finds that the access-controlled doors to a work area are kept unlocked during power outages. Which of the following is the auditor's BEST course of action?",
    options: [
      "A. Recommend keeping the doors locked at all times.",
      "B. Determine whether there are compensating controls.",
      "C. Confirm whether the practice complies with the security policy.",
      "D. Report the finding to management as high-risk."
    ],
    solution: "B",
    explication: "Before concluding this is a finding, the auditor should determine whether compensating controls exist during power outages (e.g., security guards, manual locking procedures, alarms). Also, doors that fail open during power outages may be a life-safety requirement (fail-safe mode) mandated by fire codes. The auditor must first understand the full control environment. Recommending always-locked doors (A) could violate fire codes. Confirming policy compliance (C) is secondary. Reporting as high-risk (D) is premature without investigating compensating controls."
  },
  {
    id: 27,
    question: "Which of the following is the PRIMARY benefit of moving from desktop PCs to a thin client architecture?",
    options: [
      "A. Thin client architecture enhances scalability.",
      "B. Administrative security can be provided for the client.",
      "C. Maintenance costs are reduced.",
      "D. System administration can be better managed."
    ],
    solution: "C",
    explication: "The primary benefit of thin client architecture is reduced maintenance costs. Thin clients have minimal local hardware and software — computing happens on servers. This eliminates most desktop hardware failures, software installations, patch management at the endpoint, and individual PC maintenance. Scalability (A) and better administration (D) are benefits but are secondary. Administrative security (B) is also improved but is not the primary driver. Cost reduction through centralized management is the main business justification for thin clients."
  },
  {
    id: 28,
    question: "Which of the following is the BEST way to ensure a vendor complies with system security requirements?",
    options: [
      "A. Require security training for vendor staff.",
      "B. Review past audits on the vendor's security compliance.",
      "C. Require a compliance clause in the vendor contract.",
      "D. Review past incidents reported by the vendor."
    ],
    solution: "C",
    explication: "A compliance clause in the vendor contract creates a legally binding obligation for the vendor to meet the organization's security requirements. Contractual requirements are enforceable and provide remedies (penalties, termination) if not met. Past audits (B) and incidents (D) show historical behavior but don't ensure future compliance. Training (A) builds capability but doesn't create accountability. Contractual compliance clauses are the most binding and enforceable mechanism for ensuring vendor security compliance."
  },
  {
    id: 29,
    question: "Which of the following constitutes an effective detective control in a distributed processing environment?",
    options: [
      "A. Users are required to request additional access via an electronic mail system.",
      "B. A disaster recovery plan (DRP) is in place for the entire system.",
      "C. A log of privileged account use is reviewed.",
      "D. User IDs are suspended after three incorrect passwords have been entered."
    ],
    solution: "C",
    explication: "Reviewing logs of privileged account use is a detective control — it examines records of activity to identify unauthorized or inappropriate use of privileged accounts after the fact. Email-based access requests (A) is a preventive/procedural control. A DRP (B) is a corrective/recovery control. Account suspension after failed logins (D) is a preventive control. Log review detects what has already occurred, making it definitively a detective control in the distributed environment."
  },
  {
    id: 30,
    question: "Which of the following findings related to segregation of duties should be of GREATEST concern to an IS auditor?",
    options: [
      "A. The person who edits source code also has write access to production.",
      "B. The person who tests source code also approves changes.",
      "C. The person who administers servers is also part of the infrastructure management team.",
      "D. The person who creates new user accounts also modifies user access levels."
    ],
    solution: "A",
    explication: "A developer with write access to production represents the most critical segregation of duties violation because it allows unauthorized code changes to be made directly in production without any oversight, testing, or approval process. This is the highest-risk scenario — a developer can introduce malicious or erroneous code directly into live systems. Testing and approving changes (B) is also a concern but less severe. Server admin and infrastructure overlap (C) is acceptable. Account creation and modification (D) is a user admin concern but less critical."
  },
  {
    id: 31,
    question: "Which of the following is the PRIMARY benefit of effective implementation of appropriate data classification?",
    options: [
      "A. Management of business risk to sensitive data",
      "B. Ability to meet business requirements",
      "C. Increased accuracy of sensitive data",
      "D. Assurance that sensitive data is encrypted"
    ],
    solution: "A",
    explication: "The primary benefit of data classification is enabling the appropriate management of business risk to sensitive data by applying proportional controls based on sensitivity levels. When data is classified, the organization can direct its most rigorous security measures to its most sensitive data, optimizing risk management. Meeting business requirements (B) and ensuring encryption (D) are outcomes of good classification but not its primary benefit. Data accuracy (C) is a data quality concern, not a classification benefit."
  },
  {
    id: 32,
    question: "An auditee has not implemented an internal IS auditor's recommended remediation actions, citing cost and capacity constraints. Which of the following would be the BEST course of action for the auditor?",
    options: [
      "A. Provide industry documentation supporting the recommendations.",
      "B. Work with the auditee to develop a mitigation plan.",
      "C. Invite an independent third party to review the recommendations.",
      "D. Escalate to the audit committee."
    ],
    solution: "B",
    explication: "Working with the auditee to develop a mitigation plan acknowledges the practical constraints while still addressing the underlying risk. This collaborative approach may involve phased implementation, interim compensating controls, or alternative risk treatment strategies. Providing industry documentation (A) doesn't solve the capacity issue. Involving a third party (C) adds cost and delays action. Escalating to the audit committee (D) may be appropriate eventually, but working with management first is the right approach."
  },
  {
    id: 33,
    question: "The purpose of a checksum on an amount field in an electronic data interchange (EDI) communication of financial transactions is to ensure:",
    options: [
      "A. authorization.",
      "B. integrity.",
      "C. nonrepudiation.",
      "D. authenticity."
    ],
    solution: "B",
    explication: "A checksum is calculated from the data values and transmitted with the data. Upon receipt, the checksum is recalculated and compared to detect any changes in the data during transmission. This ensures data integrity — that the data arrived exactly as sent, without modification or corruption. Authorization confirms the sender's right to transact. Nonrepudiation ensures the sender cannot deny sending. Authenticity confirms the sender's identity. Only checksums specifically detect data integrity violations."
  },
  {
    id: 34,
    question: "Which of the following is MOST important for an IS auditor to consider when reviewing a data retention policy?",
    options: [
      "A. Data confidentiality",
      "B. Business requirements",
      "C. Regulatory obligations",
      "D. Industry best practices"
    ],
    solution: "C",
    explication: "Regulatory obligations are the most important consideration for a data retention policy because they are legally mandatory. Many regulations specify minimum retention periods (e.g., financial records, healthcare data, employment records) and failure to comply results in legal penalties. Regulatory requirements set the floor below which the policy cannot go. Business requirements (B) and industry practices (D) are also important but voluntary. Data confidentiality (A) is a separate security concern. Regulatory obligations are non-negotiable."
  },
  {
    id: 35,
    question: "Which of the following should an IS auditor verify FIRST when evaluating data quality and life cycle management?",
    options: [
      "A. Funding has been approved and allocated for data storage and preservation.",
      "B. Guidance is available for the creation, management, and preservation of data.",
      "C. The data audit framework methodology has been tested before approval.",
      "D. Proper version control for data has been implemented and tested."
    ],
    solution: "B",
    explication: "The first thing to verify is whether guidance exists for data creation, management, and preservation — the policy and procedural foundation. Without documented guidance, data life cycle management is ad hoc and inconsistent. Funding (A), methodology testing (C), and version control (D) are all components that can only be properly evaluated once the foundational guidance exists. The existence of governance guidance is the prerequisite for evaluating all other data quality and life cycle controls."
  },
  {
    id: 36,
    question: "Which of the following must be done FIRST before relying on data for analytics testing?",
    options: [
      "A. Verify the completeness and accuracy of the data.",
      "B. Document the extraction tool used to obtain the data.",
      "C. Select the analytical sampling and testing model.",
      "D. Verify data analytics test scripts."
    ],
    solution: "A",
    explication: "Before relying on any data for analytics testing, the auditor must first verify the completeness and accuracy of that data. If the data is incomplete or inaccurate, any analysis performed will produce unreliable results — garbage in, garbage out. This is the foundational step that validates the quality of the data being analyzed. Documenting tools (B), selecting models (C), and verifying scripts (D) are all subsequent steps that depend on having verified the data quality first."
  },
  {
    id: 37,
    question: "Which of the following is MOST important for an IS auditor to verify when reviewing an organization's data classification policy?",
    options: [
      "A. The policy requires the implementation of data loss prevention (DLP) tools.",
      "B. The policy defines a classification scheme for different levels of sensitivity.",
      "C. The policy aligns with industry best practice for data classification.",
      "D. The policy provides for a uniform level of protection for the organization's data."
    ],
    solution: "B",
    explication: "The most fundamental element of a data classification policy is the definition of a classification scheme with distinct levels of sensitivity. Without clearly defined categories, data cannot be consistently classified or protected. DLP tools (A) are one possible control mechanism. Industry best practice alignment (C) is desirable but not the primary requirement. A uniform level of protection (D) contradicts the purpose of classification, which is differentiated protection based on sensitivity. The scheme definition is the policy's core element."
  },
  {
    id: 38,
    question: "Which of the following is MOST important to review during the project initiation phase of developing and deploying a new application?",
    options: [
      "A. User requirements",
      "B. Deployment plans",
      "C. User acceptance testing (UAT) plans",
      "D. Architectural design"
    ],
    solution: "A",
    explication: "User requirements are the most important element to review during project initiation because they define what the application must do — the entire foundation of the project. All subsequent phases (design, development, testing, deployment) are based on requirements. Deployment plans (B) and UAT plans (C) are developed later. Architectural design (D) follows requirements gathering. Without clear user requirements established at initiation, the project has no reliable direction, and changes discovered later are far more costly to address."
  },
  {
    id: 39,
    question: "An IS auditor is evaluating the log management system for an organization with devices and systems in multiple geographic locations. Which of the following is MOST important for the auditor to verify?",
    options: [
      "A. Log files are reviewed in multiple locations.",
      "B. Log files are encrypted and digitally signed.",
      "C. Log files of the servers are synchronized.",
      "D. Log files are concurrently updated."
    ],
    solution: "C",
    explication: "In a distributed multi-location environment, time synchronization of log files is critical. When investigating incidents or correlating events across systems, accurate timestamps are essential. If servers have different time settings, events cannot be reliably sequenced or correlated, making forensic investigation and security monitoring unreliable. Multiple-location review (A) may be impractical. Encryption (B) protects confidentiality. Concurrent updates (D) are expected. Time synchronization is the unique challenge in geographically distributed logging."
  },
  {
    id: 40,
    question: "During an emergency change management audit, an IS auditor notes that one of the changes sampled was a standard change, which follows a different process. What should the auditor do NEXT?",
    options: [
      "A. Obtain evidence that the change was approved.",
      "B. Notify auditee management of the finding.",
      "C. Perform supplemental sampling of standard changes.",
      "D. Redefine population and sample changes accordingly."
    ],
    solution: "D",
    explication: "If the auditor discovers that the sample population included the wrong type of changes, the population must be redefined to include only the correct change type (emergency changes), and a new sample must be drawn from the correct population. Testing a standard change against emergency change criteria would produce meaningless results. Redefining the population ensures the audit tests what it is intended to test. Approving the wrong change (A) and notifying management (B) are premature. Supplemental sampling (C) doesn't correct the sample error."
  },
  {
    id: 41,
    question: "Which of the following reliably associates users with their public keys and includes attributes that uniquely identify the users?",
    options: [
      "A. Encryption",
      "B. Nonrepudiation",
      "C. Digital certificate",
      "D. Multi-factor authentication (MFA)"
    ],
    solution: "C",
    explication: "Digital certificates are documents issued by a Certificate Authority (CA) that bind a public key to an identified entity (user, server, or organization) and include attributes that uniquely identify the subject. They are the standard mechanism for associating identities with public keys in a trustworthy, verifiable way. Encryption uses keys but doesn't bind them to identities. Nonrepudiation is a security property enabled by digital certificates. MFA authenticates users but doesn't associate them with public keys."
  },
  {
    id: 42,
    question: "The PRIMARY purpose for establishing checkpoints in information processing systems is to provide for:",
    options: [
      "A. monitoring system performance against preestablished specifications.",
      "B. restart of processing after system failure without having to start from the beginning.",
      "C. reentry of corrected transactions rejected in previous processing phases.",
      "D. periodic balancing of processing results during system execution."
    ],
    solution: "B",
    explication: "Checkpoints in information processing systems capture the state of a process at regular intervals, allowing the system to restart from the last checkpoint rather than from the very beginning if a failure occurs. This dramatically reduces recovery time and reprocessing effort. Monitoring performance (A) is the purpose of performance measurement tools. Reentry of corrected transactions (C) is a separate error handling function. Periodic balancing (D) is a control function. Checkpoint-restart capability is the primary purpose."
  },
  {
    id: 43,
    question: "Which of the following should an IS auditor do FIRST upon finding that a business impact analysis (BIA) was not conducted during a business continuity audit?",
    options: [
      "A. Perform a BIA.",
      "B. Conduct additional compliance testing.",
      "C. Notify external regulators.",
      "D. Evaluate the impact on recoverability."
    ],
    solution: "D",
    explication: "Upon discovering that a BIA was not conducted, the auditor should first evaluate the impact of this omission on the organization's recoverability. Without a BIA, recovery priorities, RTO/RPO objectives, and critical process identification may be flawed or undefined, leaving the organization vulnerable. The auditor should assess this risk before taking other actions. Performing the BIA (A) is management's responsibility. Compliance testing (B) is secondary. Notifying regulators (C) is premature. Evaluating the recoverability impact is the first step."
  },
  {
    id: 44,
    question: "Which of the following is MOST beneficial to executive management in achieving IT and business alignment?",
    options: [
      "A. Benchmarking",
      "B. Performance measurement",
      "C. Balanced scorecard",
      "D. Risk assessment"
    ],
    solution: "C",
    explication: "The balanced scorecard translates IT strategy into a set of integrated measures across multiple perspectives (financial, customer, internal processes, innovation/learning), directly linking IT activities to business outcomes. It provides executive management with a holistic view of how IT contributes to business objectives. Benchmarking compares against external peers. Performance measurement tracks individual metrics. Risk assessment identifies threats. The balanced scorecard is specifically designed to show and manage business-IT alignment from an executive perspective."
  },
  {
    id: 45,
    question: "Which of the following BEST explains how local area network (LAN) servers can contribute to a rapid spread of malware?",
    options: [
      "A. The server's file sharing function facilitates the distribution of files and applications.",
      "B. The server's software is the prime target and is the first to be infected.",
      "C. The server's users share applications and files.",
      "D. The servers are reimaged on startup."
    ],
    solution: "A",
    explication: "LAN servers' file sharing function is the primary mechanism for rapid malware distribution because a single infected file on a shared folder is immediately accessible to all users who access that share. The malware can propagate to all connected workstations that access the shared resource. Server software is not necessarily infected first (B). User sharing (C) is enabled by the server's file sharing function, making (A) more precise. Server reimaging (D) would prevent, not cause, spread."
  },
  {
    id: 46,
    question: "A business area received an audit finding because an administrator made unapproved emergency changes to a critical system. Which of the following would BEST prevent unapproved changes in the future?",
    options: [
      "A. Two-factor authentication on emergency access accounts",
      "B. Updated emergency change management procedures",
      "C. Regular emergency change-control log reviews",
      "D. Dual-control temporary emergency access accounts"
    ],
    solution: "D",
    explication: "Dual-control temporary emergency access accounts require two authorized individuals to jointly approve and access the emergency account, preventing any single person from making unapproved changes unilaterally. This is a preventive control that directly addresses the root cause of the finding. Two-factor authentication (A) verifies identity but doesn't prevent unapproved actions. Updated procedures (B) can be bypassed. Log reviews (C) are detective, not preventive. Dual-control ensures no individual can act alone."
  },
  {
    id: 47,
    question: "Which type of data analytics can be used to identify invalid data, extreme values, or linear correlations between data elements?",
    options: [
      "A. Exploratory",
      "B. Predictive",
      "C. Prescriptive",
      "D. Descriptive"
    ],
    solution: "A",
    explication: "Exploratory data analytics is used to examine datasets without a predefined hypothesis to discover patterns, anomalies, outliers (extreme values), invalid data, and relationships (linear correlations) between variables. It is an open-ended investigative approach. Predictive analytics forecasts outcomes. Prescriptive analytics recommends actions. Descriptive analytics summarizes what has already happened using aggregations and statistics. Exploratory analytics is specifically designed for data discovery and quality assessment."
  },
  {
    id: 48,
    question: "Which of the following provides the BEST evidence that system requirements are met when evaluating a project before implementation?",
    options: [
      "A. Integration testing results",
      "B. User acceptance testing (UAT) results",
      "C. Regression testing results",
      "D. Sign-off from senior management"
    ],
    solution: "B",
    explication: "UAT results provide the best evidence that system requirements have been met because UAT is conducted by actual business users who verify that the system performs as required from a business perspective. It directly validates requirements fulfillment. Integration testing (A) verifies component interactions. Regression testing (C) verifies that existing functionality hasn't broken. Senior management sign-off (D) is an approval, not evidence of requirements fulfillment. UAT is the final business validation step."
  },
  {
    id: 49,
    question: "Which of the following is the GREATEST benefit of adopting an Agile audit methodology?",
    options: [
      "A. Better ability to address key risks",
      "B. Annual cost savings",
      "C. Reduced documentation requirements",
      "D. Less frequent client interaction"
    ],
    solution: "A",
    explication: "The greatest benefit of Agile audit methodology is the enhanced ability to address key risks through iterative, flexible audit cycles. Agile audits can adapt quickly as risks emerge or change, delivering timely insights rather than waiting for an annual audit. This is especially valuable in rapidly changing environments. Cost savings (B) may not always materialize. Agile may actually require more documentation (C) per cycle. Agile typically involves more client interaction (D), not less. Risk responsiveness is the primary benefit."
  },
  {
    id: 50,
    question: "Which of the following findings would be of GREATEST concern when evaluating an organization's endpoint computer patch management process?",
    options: [
      "A. Patching is performed every three months.",
      "B. Patch implementation took longer than expected.",
      "C. Rollbacks were required for some patches.",
      "D. Patching is performed manually for some systems."
    ],
    solution: "A",
    explication: "Quarterly patching is of greatest concern because critical security patches should be applied much more frequently — typically within days to weeks of release. A three-month cycle leaves endpoints exposed to known vulnerabilities for an extended period, during which attacks can exploit them. Implementation delays (B) and rollbacks (C) are operational issues. Manual patching (D) is a process concern. Extended patching cycles are the most dangerous gap in patch management as they leave known vulnerabilities unaddressed for too long."
  },
  {
    id: 51,
    question: "What should be the PRIMARY objective of performing a risk assessment when planning for an IS audit engagement?",
    options: [
      "A. To reduce risk to an acceptable level",
      "B. To identify high-risk business processes",
      "C. To minimize the level of substantive testing required",
      "D. To minimize the number of resources allocated to the engagement"
    ],
    solution: "B",
    explication: "The primary objective of performing a risk assessment during audit planning is to identify high-risk business processes and areas that should receive the most audit attention. This ensures audit resources are directed where they will have the greatest impact on organizational risk. Reducing risk (A) is management's responsibility. Minimizing substantive testing (C) and resources (D) are efficiency considerations but not primary objectives. Risk assessment guides audit scope and focus toward areas of highest risk."
  },
  {
    id: 52,
    question: "During the evaluation of controls for a major application development project, the MOST effective use of an IS auditor's time would be to review and evaluate:",
    options: [
      "A. requirements documentation.",
      "B. acceptance testing.",
      "C. project plans.",
      "D. cost-benefit analysis."
    ],
    solution: "B",
    explication: "Acceptance testing is the most effective use of audit time during a development project because it provides the most direct evidence of whether the application meets requirements and controls are functioning correctly. The auditor can evaluate the testing process, coverage, and results to assess overall control effectiveness. Requirements documentation (A) defines what should be done. Project plans (C) show timelines. Cost-benefit (D) justifies the investment. Acceptance testing shows whether what was built actually works as required."
  },
  {
    id: 53,
    question: "Which of the following would be of GREATEST concern to an IS auditor when a multi-function printer device is sent offsite for maintenance?",
    options: [
      "A. The printout has to be redirected to another department.",
      "B. Maintenance costs exceed the value of the device.",
      "C. Business impact during the maintenance period.",
      "D. Internal memory does not automatically clear."
    ],
    solution: "D",
    explication: "Modern multi-function printers store copies of all processed documents in internal memory or storage. If this memory does not automatically clear, sensitive documents (financial, HR, legal, confidential) could be accessible to maintenance personnel or be extracted when the device is offsite. This is a significant data confidentiality risk. Redirecting printouts (A) is an operational issue. Maintenance costs (B) are financial. Business impact (C) is an availability concern. Data residue in device memory is the most critical security risk."
  },
  {
    id: 54,
    question: "Which of the following BEST enables an IS auditor to confirm the batch processing to post transactions from an input source is successful?",
    options: [
      "A. Error log review",
      "B. Hash totals",
      "C. Aggregate monetary amount",
      "D. Total number of items"
    ],
    solution: "B",
    explication: "Hash totals are control totals calculated from non-financial fields (e.g., account numbers, employee IDs) that have no inherent business meaning but serve as integrity checks. They detect missing, added, or altered records during batch processing. They confirm completeness and accuracy of the entire batch. Error logs show processing failures. Aggregate monetary amounts detect financial discrepancies. Total item counts detect missing records. Hash totals are the most comprehensive control for confirming batch integrity."
  },
  {
    id: 55,
    question: "Which of the following BEST indicates to an IS auditor that an organization handles emergency changes appropriately and transparently?",
    options: [
      "A. Emergency changes are applied to production libraries immediately.",
      "B. The application operations manual contains procedures to ensure emergency fixes do not compromise system integrity.",
      "C. Change management controls are retroactively applied.",
      "D. Special logon IDs are used to grant programmers permanent access to the production environment."
    ],
    solution: "B",
    explication: "Having documented procedures in the operations manual for emergency fixes that specifically protect system integrity indicates mature, transparent emergency change management. These procedures define how to implement emergency changes safely while maintaining audit trails and minimizing risk. Immediate production changes (A) without controls are a risk. Retroactive controls (C) are better than none but not ideal. Permanent special access (D) violates least privilege. Documented procedures that protect integrity are the best indicator of proper handling."
  },
  {
    id: 56,
    question: "What should be an IS auditor's PRIMARY focus when reviewing a patch management procedure in an environment where availability is a top priority?",
    options: [
      "A. Validity certification prior to deployment",
      "B. Comprehensive testing prior to deployment",
      "C. Deployment automation to all servers",
      "D. Technical skills of the deployment team"
    ],
    solution: "B",
    explication: "In an environment where availability is the top priority, comprehensive testing before deployment is critical to ensure patches do not break existing functionality or cause system outages. A patch that causes downtime defeats the very objective of maintaining availability. Validity certification (A) is important but a subset of testing. Automation (C) can speed deployment but may push untested patches. Team skills (D) matter but are less controllable than a testing process. Thorough pre-deployment testing protects availability."
  },
  {
    id: 57,
    question: "An IS auditor discovers that a developer has used the same key to grant access to multiple applications making calls to an application programming interface (API). Which of the following is the BEST recommendation to address this situation?",
    options: [
      "A. Coordinate an API key rotation exercise with all impacted application owners.",
      "B. Replace the API key with time-limited tokens that grant least privilege access.",
      "C. Authorize the API key to allow read-only access by all applications.",
      "D. Implement a process to expire the API key after a previously agreed-upon period of time."
    ],
    solution: "B",
    explication: "Replacing shared API keys with time-limited tokens that grant least privilege addresses multiple risks simultaneously: it eliminates key sharing (each application gets its own access), limits the scope of access (least privilege), and limits the window of exposure (time-limited tokens expire automatically). Key rotation (A) only rotates a still-shared key. Read-only access (C) may not meet application needs. Expiration (D) is good but doesn't address the sharing problem. Time-limited, least-privilege tokens are the most comprehensive solution."
  },
  {
    id: 58,
    question: "An organization performs both full and incremental database backups. Which of the following will BEST enable full restoration in the event of the destruction of the data center?",
    options: [
      "A. Require manager to take home weekly backups.",
      "B. Secure alternative data centers.",
      "C. Enable a remote workforce capability.",
      "D. Rotate all backups to an offsite location daily."
    ],
    solution: "D",
    explication: "Daily rotation of all backups (full and incremental) to an offsite location ensures that in the event of a data center disaster, the most current backups are available at a separate location. This minimizes data loss to at most one day. Taking backups home (A) is insecure and unreliable. Alternative data centers (B) are a recovery solution but don't specifically address backup availability. Remote workforce (C) doesn't address data recovery. Daily offsite backup rotation directly addresses the destruction scenario."
  },
  {
    id: 59,
    question: "Which of the following provides the BEST evidence of an IT strategy committee's effectiveness?",
    options: [
      "A. Increase in the number of strategic objectives",
      "B. The IT strategy committee charter",
      "C. Alignment of IT activities with corporate objectives",
      "D. Business unit satisfaction survey results"
    ],
    solution: "C",
    explication: "The alignment of IT activities with corporate objectives is the best evidence of an IT strategy committee's effectiveness because it demonstrates that the committee's oversight is producing the desired outcome — IT operating in support of business strategy. More strategic objectives (A) indicates activity, not effectiveness. The charter (B) establishes the committee's mandate but doesn't prove it's working. Satisfaction surveys (D) measure perception. Actual alignment is the direct outcome measure of strategic committee effectiveness."
  },
  {
    id: 60,
    question: "Which of the following would be MOST useful to an IS auditor when making recommendations to enable continual improvement of IT processes over time?",
    options: [
      "A. IT incident log",
      "B. IT risk register",
      "C. Maturity model",
      "D. Benchmarking studies"
    ],
    solution: "C",
    explication: "A maturity model provides a structured framework describing progressive levels of process capability and maturity. It allows the auditor to assess the current maturity level of IT processes and recommend specific improvements needed to reach higher maturity levels. This provides a roadmap for continual improvement. Incident logs (A) and risk registers (B) identify problems. Benchmarking (D) compares to external peers. A maturity model specifically enables structured, progressive improvement recommendations over time."
  },
  {
    id: 61,
    question: "An employee approaches an IS auditor and expresses concern about a critical security issue in a newly installed application. Which of the following should the auditor do FIRST?",
    options: [
      "A. Conduct a review of the application.",
      "B. Recommend reverting to the previous application.",
      "C. Disclose the concern to legal counsel.",
      "D. Discuss the concern with audit management."
    ],
    solution: "D",
    explication: "When an employee raises a security concern directly to an IS auditor, the auditor's first step should be to discuss it with audit management. This ensures the concern is addressed through proper channels, that an appropriate response is coordinated, and that the auditor is not acting unilaterally. Conducting a review (A) may be the next step after management discussion. Reverting the application (B) is a management decision. Legal counsel (C) may be involved if warranted. Audit management must be informed first."
  },
  {
    id: 62,
    question: "Data centers that want to prevent unauthorized personnel from entering during a power outage should ensure external access doors:",
    options: [
      "A. have physical key backup.",
      "B. are alarmed and monitored.",
      "C. operate in fail-safe mode.",
      "D. operate in fail-secure mode."
    ],
    solution: "D",
    explication: "Fail-secure (also called fail-locked) mode means that access doors default to the locked/secured state when power fails, preventing unauthorized entry during outages. Fail-safe mode opens doors during power failure (for life-safety compliance), which would allow unauthorized access. Physical key backup (A) requires keys to be available and doesn't automatically secure during outages. Alarms and monitoring (B) are detective, not preventive. Fail-secure mode is the correct choice when security (not life-safety) is the priority."
  },
  {
    id: 63,
    question: "Which of the following practices associated with capacity planning provides the GREATEST assurance that future incidents related to existing server performance will be prevented?",
    options: [
      "A. Duplicating existing disk drive systems to improve redundancy and data storage",
      "B. Reviewing results from simulated high-demand stress test scenarios",
      "C. Performing a root cause analysis for past performance incidents",
      "D. Anticipating current service level agreements (SLAs) will remain unchanged"
    ],
    solution: "B",
    explication: "Reviewing results from simulated high-demand stress tests proactively identifies performance bottlenecks before they cause real incidents. Stress testing validates server capacity under peak conditions, enabling capacity planning decisions based on actual performance data under extreme scenarios. Root cause analysis (C) is reactive — it addresses past incidents after they occur. Duplicating disks (A) improves redundancy but not performance capacity. Assuming SLAs won't change (D) is a risky assumption, not a planning practice."
  },
  {
    id: 64,
    question: "Which of the following is the BEST control to help detect input errors in the customer account number field during accounts receivable transaction processing?",
    options: [
      "A. Checksum",
      "B. Validity check",
      "C. Limit check",
      "D. Parity check"
    ],
    solution: "B",
    explication: "A validity check verifies that entered data matches an accepted list of valid values or formats. For a customer account number field, it would verify the entered number exists in the customer master file, directly detecting invalid account numbers. A checksum verifies data transmission integrity. A limit check verifies numeric values fall within acceptable ranges — not appropriate for account numbers. A parity check detects data transmission bit errors. Only a validity check confirms the account number actually exists and is valid."
  },
  {
    id: 65,
    question: "If a recent release of a program has to be backed out of production, the corresponding changes within the delta version of the code should be:",
    options: [
      "A. filed in production for future reference in researching the problem.",
      "B. eliminated from the source code that reflects the version in production.",
      "C. reinstalled when replacing the version back into production.",
      "D. applied to the source code that reflects the version in production."
    ],
    solution: "B",
    explication: "When backing out a production release, the source code repository must be updated to reflect the version actually running in production. The changes from the backed-out release must be eliminated (removed) from the production source code baseline to ensure consistency between what's running and what's in source control. Filing changes (A) or applying them (D) to production source code when the release has been backed out creates a mismatch. The production source code must match the production executable."
  },
  {
    id: 66,
    question: "Shortly after a system was deployed into production, it was identified that some key scenarios were not tested during user acceptance testing (UAT). Which of the following is the GREATEST concern with this situation?",
    options: [
      "A. The system may have gone into production with defects.",
      "B. System functions may not meet business requirements.",
      "C. Significant security risks may not have been assessed.",
      "D. Extra funding may be required to complete the testing."
    ],
    solution: "A",
    explication: "The greatest concern is that untested scenarios may harbor defects that are now present in the production environment. Production defects can cause data corruption, processing errors, or system failures affecting real business operations and customers. Business requirements not met (B) is a consequence of defects. Security risks (C) are a subset of the defect concern. Extra funding (D) is an operational concern. Active production defects from missed testing scenarios represent the most immediate and serious risk."
  },
  {
    id: 67,
    question: "An organization has both an IT strategy committee and an IT steering committee. When reviewing the minutes of the IT steering committee, an IS auditor would expect to find that the committee:",
    options: [
      "A. acquired and assigned appropriate resources for projects.",
      "B. compared the risk and return of IT investments.",
      "C. reviewed the achievement of the strategic IT objective.",
      "D. assessed the contribution of IT to the business."
    ],
    solution: "A",
    explication: "The IT steering committee focuses on operational governance — overseeing IT projects and ensuring they have the necessary resources. Acquiring and assigning resources for projects is a steering committee function. The IT strategy committee handles higher-level strategic functions like comparing risk/return of investments (B), reviewing strategic objectives (C), and assessing IT's contribution to the business (D). The steering committee ensures projects are resourced and executed; the strategy committee sets direction."
  },
  {
    id: 68,
    question: "An IS auditor learns that a business owner violated the organization's security policy by creating a web page with access to production data. The auditor's NEXT step should be to:",
    options: [
      "A. escalate to senior management.",
      "B. assess the sensitivity of the production data.",
      "C. determine if sufficient access controls exist.",
      "D. shut down the web page."
    ],
    solution: "B",
    explication: "The auditor's next step should be to assess the sensitivity of the production data exposed through the unauthorized web page. The appropriate response depends heavily on what data is accessible — highly sensitive data requires urgent action, while less sensitive data may allow more measured response. Escalating (A) may follow after understanding the risk. Determining access controls (C) is relevant but secondary to understanding data sensitivity. Shutting down (D) is management's decision, not the auditor's. Risk assessment through data sensitivity evaluation is the logical next step."
  },
  {
    id: 69,
    question: "Which of the following should be done FIRST when a computer is compromised?",
    options: [
      "A. Disconnect it from the network.",
      "B. Run anti-malware software.",
      "C. Disconnect the power source.",
      "D. Copy the contents of the hard drive."
    ],
    solution: "A",
    explication: "Disconnecting a compromised computer from the network is the first step to contain the incident — it stops the attack from spreading to other systems, prevents further data exfiltration, and cuts off any command-and-control communication. Running anti-malware (B) is done during cleanup. Cutting power (C) destroys volatile memory evidence and can corrupt files. Hard drive copying (D) is forensic evidence preservation, done after containment. Network isolation is the immediate containment priority."
  },
  {
    id: 70,
    question: "An organization allows programmers to change production systems in emergency situations without seeking prior approval. Which of the following controls should an IS auditor consider MOST important?",
    options: [
      "A. Programmers' subsequent reports",
      "B. Operator logs",
      "C. Automated log of changes",
      "D. Limited number of super users"
    ],
    solution: "C",
    explication: "An automated, tamper-resistant log of changes is the most important control when emergency changes bypass the normal approval process. It provides an unalterable audit trail of what was changed, when, and by whom — enabling subsequent review and accountability. Subsequent reports (A) can be falsified. Operator logs (B) show system activity but may not capture code changes. Limiting super users (D) reduces risk but doesn't compensate for lack of approval tracking. Automated logging provides the accountability record essential for ungoverned emergency changes."
  },
  {
    id: 71,
    question: "Which of the following is the PRIMARY reason for an IS auditor to meet with the auditee before communicating audit results to senior management?",
    options: [
      "A. To recommend control enhancements",
      "B. To determine the timing of the next audit",
      "C. To gain agreement on the findings",
      "D. To identify new findings"
    ],
    solution: "C",
    explication: "The primary reason for an exit meeting with the auditee before reporting to senior management is to gain agreement on the findings — to ensure facts are accurate, interpretations are fair, and management's perspective is captured. This prevents misunderstandings and unfair surprises in the final report. Recommending controls (A) may occur but is not the primary purpose. Scheduling (B) is administrative. New findings (D) should have been identified during fieldwork. Agreement on findings ensures report accuracy and fairness."
  },
  {
    id: 72,
    question: "A senior IS auditor suspects that a PC may have been used to perpetrate fraud in a finance department. The auditor should FIRST report this suspicion to:",
    options: [
      "A. auditee line management.",
      "B. the police.",
      "C. audit management.",
      "D. the audit committee."
    ],
    solution: "C",
    explication: "When fraud is suspected, the IS auditor should first report to audit management. This follows proper reporting protocol within the audit function and ensures that the matter is handled appropriately — including decisions about escalation, investigation, and external notification. Reporting to auditee line management (A) could tip off the perpetrator or be inappropriate if management is involved. Police (B) and the audit committee (D) are subsequent escalation steps that audit management will coordinate. Internal escalation comes first."
  },
  {
    id: 73,
    question: "Which of the following will BEST ensure that archived electronic information of permanent importance remains accessible over time?",
    options: [
      "A. Regularly migrating data to current technology",
      "B. Acquiring applications that emulate old software",
      "C. Performing preventive maintenance on old hardware",
      "D. Periodically backing up archived data"
    ],
    solution: "A",
    explication: "Regularly migrating archived data to current technology (media, formats, systems) is the most effective long-term strategy for preserving accessibility. As technologies become obsolete, data on old media or in old formats becomes inaccessible. Migration keeps data on current, readable media in current formats. Emulating old software (B) is complex and unsustainable. Maintaining old hardware (C) is impractical and unreliable long-term. Backing up archived data (D) preserves copies but doesn't address format or media obsolescence."
  },
  {
    id: 74,
    question: "Which of the following practices is MOST helpful in eliminating potential bias during the vendor proposal review process?",
    options: [
      "A. A procurement professional is the point of contact for all vendors responding with proposals.",
      "B. The project sponsor is available to all vendors to explain proposal requirements.",
      "C. Internal software development teams are not permitted to provide proposals to the project.",
      "D. The services of an internal or external auditor are available when vendor proposals are reviewed."
    ],
    solution: "A",
    explication: "Using a procurement professional as the single point of contact for all vendors ensures that all vendors receive the same information, questions are answered consistently, no vendor receives preferential treatment, and all communications are documented. This is the standard procurement practice for preventing bias. Having an auditor present (D) is oversight, not bias elimination. Excluding internal teams (C) prevents one type of conflict. Sponsor availability (B) could introduce bias if interactions are inconsistent."
  },
  {
    id: 75,
    question: "Management has agreed to move the organization's data center due to recent flood map changes in its current location. Which risk response has been adopted?",
    options: [
      "A. Risk elimination",
      "B. Risk avoidance",
      "C. Risk acceptance",
      "D. Risk transfer"
    ],
    solution: "B",
    explication: "Moving the data center to a location outside the flood zone avoids the flood risk entirely by removing the asset from the risk environment. This is risk avoidance — the organization changes its activities or environment to eliminate exposure to the risk. Risk elimination is not a standard risk response category. Risk acceptance would mean staying and accepting the flood risk. Risk transfer would mean purchasing flood insurance. Physically relocating to avoid the flood zone is the textbook definition of risk avoidance."
  },
  {
    id: 76,
    question: "When auditing the adequacy of a cooling system for a data center, which of the following is MOST important for the IS auditor to review?",
    options: [
      "A. Environmental performance metrics",
      "B. Disaster recovery plan (DRP) testing results",
      "C. Geographical location of the data center",
      "D. Facilities maintenance records"
    ],
    solution: "A",
    explication: "Environmental performance metrics (temperature, humidity, airflow readings over time) directly measure whether the cooling system is maintaining conditions within acceptable parameters for equipment operation. These are the empirical proof of cooling system adequacy. DRP testing (B) covers recovery, not cooling. Geographical location (C) affects cooling requirements but doesn't measure performance. Maintenance records (D) show service history but not actual cooling effectiveness. Performance metrics are the most direct evidence of cooling adequacy."
  },
  {
    id: 77,
    question: "What should be the PRIMARY focus during a review of a business process improvement project?",
    options: [
      "A. The cost of new controls",
      "B. Continuous monitoring plans",
      "C. Business project plan",
      "D. Business impact"
    ],
    solution: "D",
    explication: "The primary focus of reviewing a business process improvement project should be the business impact — whether the improvements achieve the intended business outcomes, how they affect operations, and whether the changes deliver the expected value. Control costs (A), monitoring plans (B), and project plans (C) are all secondary to the fundamental question of whether the project actually improves the business. Impact assessment is the core of evaluating whether a process improvement was worthwhile."
  },
  {
    id: 78,
    question: "An IS auditor is reviewing an organization's plan to migrate a legacy database platform to a cloud-based database service. Which of the following steps is MOST important during the migration to preserve data integrity?",
    options: [
      "A. Run the application in parallel for a determined period of time.",
      "B. Establish data validation checks during the migration process.",
      "C. Implement new access controls and user authentication on the cloud.",
      "D. Ensure data in the legacy platform has been normalized."
    ],
    solution: "B",
    explication: "Data validation checks during migration verify that data is transferred completely and accurately — detecting missing records, corrupted data, or transformation errors as they occur. This is the most direct control for preserving data integrity during the migration process. Parallel running (A) helps validate results but is a comparison technique, not a migration integrity control. Access controls (C) protect data post-migration. Data normalization (D) is a pre-migration quality activity. Validation checks during migration directly protect integrity."
  },
  {
    id: 79,
    question: "Which of the following is an effective way to ensure the integrity of file transfers in a peer-to-peer (P2P) computing environment?",
    options: [
      "A. Ensure the files are transferred through an intrusion detection system (IDS).",
      "B. Encrypt the packets shared between peers within the environment.",
      "C. Associate a message authentication code with each file transferred.",
      "D. Connect the client computers in the environment to a jump server."
    ],
    solution: "C",
    explication: "A message authentication code (MAC) is a cryptographic checksum that allows the recipient to verify both that the file has not been altered and that it came from an authorized source. It directly addresses file transfer integrity. IDS (A) detects network threats but doesn't verify file integrity. Encryption (B) protects confidentiality but not necessarily integrity against authorized modification. A jump server (D) provides access control but not integrity verification. MACs are specifically designed to ensure data integrity and authenticity."
  },
  {
    id: 80,
    question: "A post-implementation review was conducted by issuing a survey to users. Which of the following should be of GREATEST concern to an IS auditor?",
    options: [
      "A. The survey form template did not allow additional feedback to be provided.",
      "B. The survey results were not presented in detail to management.",
      "C. The survey questions did not address the scope of the business case.",
      "D. The survey was issued to employees a month after implementation."
    ],
    solution: "C",
    explication: "If survey questions don't address the scope of the business case, the post-implementation review cannot determine whether the project achieved its intended objectives. The business case defines success criteria — a survey that doesn't measure against these criteria provides no useful information about whether the investment delivered value. Limited feedback options (A) and timing (D) affect survey quality but not its fundamental purpose. Detailed presentation (B) is a governance issue. Missing business case alignment is the most critical gap."
  },
  {
    id: 81,
    question: "End users with read access to a central database can extract data to their desktops for analysis and reporting to management. What should be the GREATEST concern with this situation?",
    options: [
      "A. The gap between the time of data delivery and report preparation",
      "B. The difference between the state of the current data and the downloaded data",
      "C. Backup of reports on end users' desktops",
      "D. The accuracy and completeness of reports"
    ],
    solution: "D",
    explication: "The greatest concern is the accuracy and completeness of reports generated from data extracted to desktops. Users may manipulate, filter, or aggregate data incorrectly when working in desktop tools, leading to inaccurate management reports. Management decisions based on these reports could be flawed. The data gap (B) is a subset of the accuracy concern. Timing (A) is an operational issue. Desktop backups (C) are an IT concern. Report accuracy directly affects management decision quality, making it the most critical concern."
  },
  {
    id: 82,
    question: "An organization has established three IT processing environments: development, test, and production. The MAJOR reason for separating the development and test environments is to:",
    options: [
      "A. obtain segregation of duties between IT staff and end users.",
      "B. protect the programs under development from unauthorized testing.",
      "C. perform testing in a stable environment.",
      "D. limit the users' access rights to the development environment."
    ],
    solution: "C",
    explication: "The major reason for separating development and test environments is to ensure testing occurs in a stable, controlled environment that is not disrupted by ongoing development activities. If testing occurred in the development environment, developers making changes could alter the conditions under which testing is performed, producing unreliable results. Segregation of duties (A) is a governance benefit. Protecting programs from unauthorized testing (B) is minor. Access restrictions (D) follow from the separation but are not its primary reason."
  },
  {
    id: 83,
    question: "Which of the following provides the MOST useful information regarding an organization's risk appetite and tolerance?",
    options: [
      "A. Risk profile",
      "B. Audit reports",
      "C. Gap analysis",
      "D. Risk register"
    ],
    solution: "A",
    explication: "A risk profile documents the organization's current risk exposure across all risk domains and is developed in the context of the organization's stated risk appetite and tolerance levels. It shows what risks exist and whether they fall within acceptable bounds — directly revealing risk appetite and tolerance in practice. Audit reports identify control weaknesses. Gap analysis compares current to desired states. Risk registers list identified risks. The risk profile synthesizes risk exposure against appetite and tolerance."
  },
  {
    id: 84,
    question: "What is the MOST effective way to manage contractors' access to a data center?",
    options: [
      "A. Management approval of visitor access",
      "B. Escort requirement for visitor access",
      "C. Badge identification worn by visitors",
      "D. Verification of visitor identification"
    ],
    solution: "B",
    explication: "Requiring escorts for contractor visits to the data center is the most effective control because it ensures contractors are supervised at all times and cannot access areas, equipment, or data beyond what is required for their work. Management approval (A) provides authorization but not supervision. Badges (C) identify visitors but don't control their movements. ID verification (D) confirms identity but allows unsupervised access. Escort requirements prevent unauthorized access and ensure accountability for contractor activities."
  },
  {
    id: 85,
    question: "Which of the following is the PRIMARY benefit of using a SIEM tool to collate high amounts of data collected across various security tools?",
    options: [
      "A. Reducing the number of false positive incidents",
      "B. Reducing the number of isolated events noted as incidents",
      "C. Correlating many isolated events to create a single source of record",
      "D. Decreasing the effort needed to monitor security events"
    ],
    solution: "C",
    explication: "A SIEM's primary benefit is correlating events from multiple disparate security tools into a unified view, enabling analysts to see connections between isolated events that individually may not appear significant. This correlation creates a single source of record and reveals attack patterns that span multiple systems. Reducing false positives (A) and effort (D) are secondary benefits. Reducing isolated events (B) is also a benefit. Correlation is the unique, primary capability that justifies a SIEM's complexity and cost."
  },
  {
    id: 86,
    question: "Which of the following should be the GREATEST concern to an IS auditor performing an IT governance review?",
    options: [
      "A. IT and business goals are not well defined.",
      "B. IT reports to the chief financial officer (CFO).",
      "C. The IT steering committee does not capture meeting minutes.",
      "D. IT security and IT operations are using two separate frameworks."
    ],
    solution: "A",
    explication: "If IT and business goals are not well defined, IT governance has no foundation — governance exists to ensure IT enables defined business goals. Without clear goals, IT investments and activities cannot be aligned, evaluated, or governed meaningfully. This is the most fundamental governance failure. Reporting to the CFO (B) is a structural question. No meeting minutes (C) is a documentation gap. Separate frameworks (D) may create complexity but not necessarily failure. Undefined goals undermine the entire purpose of IT governance."
  },
  {
    id: 87,
    question: "Which of the following is the MOST effective way to evaluate the physical security of a data center?",
    options: [
      "A. Review camera footage from the data center.",
      "B. Perform a data center tour.",
      "C. Review data center access logs.",
      "D. Interview data center stakeholders."
    ],
    solution: "B",
    explication: "A physical tour of the data center allows the auditor to directly observe physical security controls — access barriers, badge readers, camera placements, locked cabinets, environmental controls, fire suppression, and visitor management. Physical observation provides firsthand evidence of what controls exist and whether they are properly implemented. Camera footage (A) and access logs (C) provide historical data. Interviews (D) provide stakeholder perspectives. Only a physical tour allows direct, comprehensive observation of physical security."
  },
  {
    id: 88,
    question: "When is the MOST appropriate time to establish metrics for assessing the effectiveness of an outsourced IT project?",
    options: [
      "A. During the acquisition phase",
      "B. During the initiation phase",
      "C. During the testing phase",
      "D. During the configuration phase"
    ],
    solution: "B",
    explication: "Metrics for outsourced IT project effectiveness should be established during the initiation phase — at the very beginning of the project. Early establishment of metrics ensures that baseline measurements can be taken, data collection begins from the start, and success criteria are agreed upon before work begins. Acquisition phase (A) is before project initiation. Testing (C) and configuration (D) are mid-project phases — too late to establish baseline metrics and too late to influence project structure."
  },
  {
    id: 89,
    question: "Which of the following is the GREATEST concern related to an organization's data classification processes?",
    options: [
      "A. Users responsible for managing records are unaware of the data classification processes.",
      "B. The data classification processes have not been updated in the last year.",
      "C. Systems used to manage the data classification processes are not synchronized.",
      "D. The data classification processes are not aligned with industry standards."
    ],
    solution: "A",
    explication: "If users responsible for managing records are unaware of data classification processes, the processes will not be applied in practice. The entire classification program depends on users correctly identifying and labeling data. Without user awareness, data will be misclassified or unclassified, rendering all downstream controls (access controls, encryption requirements, retention policies) ineffective. Outdated processes (B), unsynchronized systems (C), and non-alignment with standards (D) are operational concerns. People not knowing the process is the most critical failure."
  },
  {
    id: 90,
    question: "Which of the following BEST indicates a need to review an organization's information security policy?",
    options: [
      "A. Increasing exceptions approved by management",
      "B. Completion of annual IT risk assessment",
      "C. High number of low-risk findings in the audit report",
      "D. Increasing complexity of business transactions"
    ],
    solution: "A",
    explication: "Increasing exceptions approved by management strongly indicates that the security policy may no longer reflect business reality — it's too restrictive, outdated, or misaligned with current operations. A pattern of exceptions suggests the policy needs revision to be practical and enforceable. Annual risk assessments (B) trigger review as a scheduled process, not a need indicator. Low-risk findings (C) suggest good controls. Increasing transaction complexity (D) may indicate need but is less direct than systematic policy exceptions."
  },
  {
    id: 91,
    question: "An IS auditor is auditing the operating effectiveness of weekly user access reviews. Of the five weekly reviews sampled, one has not been signed or dated. What is the MAIN reason to note this observation as a finding?",
    options: [
      "A. The review may not be in compliance with industry standards.",
      "B. The review may not have been performed.",
      "C. The review may not be accurate.",
      "D. The review may not contain the appropriate content."
    ],
    solution: "B",
    explication: "An unsigned and undated access review provides no evidence that it was actually performed. The absence of a signature and date means there is no attestation that anyone completed the review at the required time. This is the most critical concern — without evidence of performance, the control cannot be considered operating. Industry standards (A), accuracy (C), and content (D) are secondary concerns. The fundamental issue is that there is no evidence the control was executed."
  },
  {
    id: 92,
    question: "An IS auditor is reviewing a project that involves creating a secure mobile app for claims processing. As part of a security-in-development model for the program, threat modeling should begin during which project phase?",
    options: [
      "A. Coding",
      "B. Architectural review",
      "C. Testing",
      "D. Requirements definition"
    ],
    solution: "D",
    explication: "In a security-in-development (shift-left) model, threat modeling should begin during requirements definition — the earliest phase. Identifying threats when requirements are being defined allows security requirements to be built into the application design from the start, at the lowest cost. Threat modeling during architectural review (B) is also early but still after requirements. Coding (A) and testing (C) are too late — addressing threats found this late is far more expensive and disruptive."
  },
  {
    id: 93,
    question: "Which of the following would be an IS auditor's BEST recommendation to senior management when several IT initiatives are found to be misaligned with the organization's strategy?",
    options: [
      "A. Modify IT initiatives that do not map to business strategies.",
      "B. Define key performance indicators (KPIs) for IT.",
      "C. Reassess IT initiatives that do not map to business strategies.",
      "D. Reassess the return on investment (ROI) for the IT initiatives."
    ],
    solution: "C",
    explication: "Reassessing misaligned IT initiatives is the most appropriate recommendation because it allows management to evaluate each initiative in light of current strategy — some may be modified, some terminated, and some may reveal strategy gaps. Simply modifying (A) assumes all initiatives have value worth preserving. Defining KPIs (B) is a monitoring activity. Reassessing ROI (D) is financial, not strategic. Reassessment provides the comprehensive review needed to make informed decisions about misaligned initiatives."
  },
  {
    id: 94,
    question: "Which of the following should be an IS auditor's GREATEST concern when reviewing a reciprocal disaster recovery agreement between two organizations?",
    options: [
      "A. Right to terminate the agreement",
      "B. Differences in IT policies and procedures",
      "C. Frequency of system testing",
      "D. Maintenance of hardware and software compatibility"
    ],
    solution: "D",
    explication: "Hardware and software compatibility is the greatest concern in a reciprocal DR agreement because if the partner organization's systems cannot run the other's applications during a disaster, the agreement is worthless. Incompatibility means recovery will fail at the most critical moment. Right to terminate (A) is a legal concern. Policy differences (B) create friction but can be managed. Testing frequency (C) is important but addressable. Compatibility is the technical prerequisite without which the agreement cannot function."
  },
  {
    id: 95,
    question: "As part of control self-assessment (CSA) activities in the finance department, an IS auditor identified that some of the controls were not tested and documented properly. Which of the following should the auditor do NEXT?",
    options: [
      "A. Provide guidance regarding control objectives to staff involved in the CSA.",
      "B. Expand the scope of the next internal audit planned for the finance department.",
      "C. Issue an audit report to the finance manager regarding the inadequate testing of controls.",
      "D. Perform additional testing to complement CSA activities in the finance department."
    ],
    solution: "A",
    explication: "In a CSA, the IS auditor's role is to facilitate the process and support the department in properly assessing controls. Providing guidance on control objectives helps the finance department staff understand what they need to test and document, enabling them to complete the CSA properly. Expanding audit scope (B) is premature. Issuing a formal audit report (C) is excessive for a CSA support role. Additional auditor testing (D) undermines the CSA purpose of management self-assessment. Guidance enables the CSA to succeed."
  },
  {
    id: 96,
    question: "An external attacker spoofing an internal Internet Protocol (IP) address can BEST be detected by which of the following?",
    options: [
      "A. Comparing the source address to the domain name server (DNS) entry",
      "B. Using static IP addresses for identification",
      "C. Using a state table to compare the message states of each packet as it enters the system",
      "D. Comparing the source address to the interface used as the entry point"
    ],
    solution: "D",
    explication: "Comparing the source address to the interface used as the entry point (egress/ingress filtering) detects IP spoofing by verifying that packets claiming to originate from internal IP addresses are actually arriving on internal interfaces. A packet claiming an internal source arriving on the external interface reveals spoofing. DNS comparison (A) may not detect all spoofing. Static IPs (B) don't detect spoofing. State tables (C) track connection states but are less direct for source IP spoofing detection. Interface-based source verification is the most direct method."
  },
  {
    id: 97,
    question: "During an audit of a data center with updated technology, the auditee indicates that environmental controls are the same as those used in the previous environment. The IS auditor should FIRST:",
    options: [
      "A. test selected controls.",
      "B. recommend changes to the maintenance schedule.",
      "C. determine whether the controls are active.",
      "D. review equipment specifications."
    ],
    solution: "D",
    explication: "When new technology is deployed, the first step is to review equipment specifications to determine whether the existing environmental controls are adequate for the new equipment's requirements. New technology may have different power, cooling, humidity, or space requirements than the previous equipment. Recommending maintenance changes (B), testing controls (A), and verifying controls are active (C) are all appropriate next steps, but only after confirming that the controls are even suited to the new environment's specifications."
  },
  {
    id: 98,
    question: "An IS auditor determines elevated administrator accounts for servers that are not properly checked out and then back in after each use. Which of the following is the MOST appropriate sampling technique to determine the scope of the problem?",
    options: [
      "A. Haphazard sampling",
      "B. Random sampling",
      "C. Statistical sampling",
      "D. Stratified sampling"
    ],
    solution: "C",
    explication: "Statistical sampling is the most appropriate technique for determining the scope of a problem because it uses mathematical probability to allow auditors to make statistically valid conclusions about the entire population based on the sample. This enables the auditor to quantify the extent of the problem with a measurable confidence level. Haphazard sampling (A) is nonstatistical and subjective. Random sampling (B) is a method within statistical sampling. Stratified sampling (D) divides populations into groups. Statistical sampling provides the rigorous, defensible scope assessment needed."
  },
  {
    id: 99,
    question: "Which of the following is MOST important to ensure during the design phase of a system development project?",
    options: [
      "A. Data cleansing procedures have been established.",
      "B. The design has been approved by internal audit.",
      "C. Acceptance test criteria have been developed.",
      "D. Program coding standards have been followed."
    ],
    solution: "C",
    explication: "Developing acceptance test criteria during the design phase is critical because it ensures that what will be tested is defined before development begins, based on requirements and design specifications. This allows development to target measurable success criteria. Data cleansing (A) is a data management activity. Internal audit approval (B) is not the auditor's appropriate role during design. Coding standards (D) are enforced during implementation. Acceptance criteria defined during design ensure the project has clear, objective success measures from the outset."
  },
  {
    id: 100,
    question: "Which component of a business case provides the BEST indication that due diligence was performed during the vendor selection process?",
    options: [
      "A. Management approval",
      "B. Problem statement",
      "C. Alternative solutions",
      "D. Cost-benefit analysis"
    ],
    solution: "C",
    explication: "The presentation of alternative solutions (including vendor alternatives) demonstrates that due diligence was performed — that multiple options were evaluated before selecting the recommended approach. This shows the decision was not predetermined and that the selected vendor was chosen through a competitive, objective analysis. Management approval (A) is the outcome. Problem statement (B) defines the need. Cost-benefit analysis (D) evaluates one solution. Alternative solutions analysis is the hallmark of thorough vendor due diligence."
  },
  {
    id: 101,
    question: "Which of the following should be done FIRST when auditing an IT portfolio management process at a large organization?",
    options: [
      "A. Conduct walk-through meetings with IT project managers.",
      "B. Calculate the IT portfolio return on investment (ROI).",
      "C. Verify whether the IT project portfolio is kept up to date.",
      "D. Confirm industry best practices for IT portfolio management are followed."
    ],
    solution: "C",
    explication: "The first step in auditing IT portfolio management is to verify whether the portfolio itself is current and up to date. An outdated portfolio cannot provide reliable information for decision-making. If the portfolio is not maintained, all subsequent audit steps — ROI calculation, walk-throughs, and best practice assessment — will be based on stale information. Confirming portfolio currency is the foundational step that validates the reliability of the portfolio as an audit input."
  },
  {
    id: 102,
    question: "Which of the following should an IS auditor do FIRST when determining whether unauthorized changes have been made to production code?",
    options: [
      "A. Review access control permissions operating within the production program libraries.",
      "B. Examine the change control system records and trace them forward to object code files.",
      "C. Review change-approved designations established within the change control system.",
      "D. Examine object code to find instances of changes and trace them back to change control records."
    ],
    solution: "D",
    explication: "The most effective way to detect unauthorized changes is to start with the production object code and trace changes back to change control records. This approach identifies changes that occurred in production regardless of whether they are in the change control system — unauthorized changes may have no corresponding records. Starting from the system (D) is more reliable than starting from documentation (B, C) because unauthorized changes won't be documented. Access review (A) shows who could make changes, not what was actually changed."
  },
  {
    id: 103,
    question: "Which of the following security information and event management (SIEM) issues should be of MOST concern to an IS auditor?",
    options: [
      "A. Log source times are not synchronized to a common time source.",
      "B. The log sources include a wide range of operating systems and technologies.",
      "C. Some of the log sources have proprietary log formats.",
      "D. Some of the log sources generate a large number of log events."
    ],
    solution: "A",
    explication: "Unsynchronized log source times are of greatest concern because a SIEM's primary value is correlating events across multiple systems in sequence. If timestamps are inconsistent, it is impossible to accurately reconstruct the timeline of an attack or incident, making the SIEM unreliable for forensic and incident response purposes. Diverse technologies (B) and proprietary formats (C) create integration complexity but can be addressed. Large log volumes (D) require storage and processing but don't compromise reliability. Time synchronization is foundational to SIEM effectiveness."
  },
  {
    id: 104,
    question: "Which of the following would be a weakness in procedures for controlling the migration of changes to production libraries?",
    options: [
      "A. Allowing a synchronized release of executable and source code",
      "B. Requiring only the programming project leader to review test results",
      "C. Separating test and production programs in distinct libraries",
      "D. Restricting access to production libraries to only operations personnel"
    ],
    solution: "B",
    explication: "Requiring only the programming project leader to review test results is a weakness because it lacks independent oversight. The project leader has a vested interest in the project's success and may not provide objective review. Independent review (by QA, users, or separate team) is essential for catching issues the development team might overlook or dismiss. Synchronized releases (A) are good practice. Separating environments (C) is good control. Restricting access (D) is appropriate segregation."
  },
  {
    id: 105,
    question: "During the audit of an enterprise resource planning (ERP) system, an IS auditor found an application patch was applied to the production environment. It is MOST important for the IS auditor to verify approval from the:",
    options: [
      "A. information security officer.",
      "B. system administrator.",
      "C. project manager.",
      "D. information asset owner."
    ],
    solution: "D",
    explication: "The information asset owner (business owner) is accountable for the ERP system and its data. They must approve patches to production because patches can affect business functionality, data integrity, and operations. The asset owner has the authority and accountability to accept the risk of applying a patch. The security officer (A) may review security implications. The system administrator (B) implements patches. The project manager (C) manages projects. The asset owner is the appropriate approver for changes to their system."
  },
  {
    id: 106,
    question: "An IS auditor reviewing the system development life cycle (SDLC) finds there is no requirement for business cases. Which of the following should be of GREATEST concern to the organization?",
    options: [
      "A. Project costs exceed established budgets.",
      "B. Vendor selection criteria are not sufficiently evaluated.",
      "C. Business impacts of projects are not adequately analyzed.",
      "D. Business resources have not been optimally assigned."
    ],
    solution: "C",
    explication: "Without business cases, the business impacts of projects — including expected benefits, risks, costs, and alignment with strategy — are not systematically analyzed before resources are committed. This means projects may be approved without understanding their value or impact. Budget overruns (A), vendor selection (B), and resource assignment (D) are all symptoms or related concerns, but the fundamental problem is that business impact analysis is absent from the decision-making process, leading to uninformed investment decisions."
  },
  {
    id: 107,
    question: "What is the PRIMARY reason an IS auditor would recommend an automated management review process for network administration activity on a daily basis instead of quarterly?",
    options: [
      "A. To identify system changes",
      "B. To detect unauthorized transactions",
      "C. To identify failed login attempts",
      "D. To detect network intrusions"
    ],
    solution: "B",
    explication: "Daily automated review of network administration activity is primarily recommended to detect unauthorized transactions in a timely manner. Quarterly reviews would allow months of unauthorized activity to go undetected, significantly increasing potential damage. Daily monitoring reduces the window of exposure dramatically. Identifying system changes (A) and failed logins (C) are also benefits. Network intrusion detection (D) is typically handled by dedicated IDS/IPS. The primary driver for daily vs. quarterly frequency is timely detection of unauthorized activity."
  },
  {
    id: 108,
    question: "While reviewing the effectiveness of an incident response program, an IS auditor notices a high number of reported incidents involving malware originating from removable media found by employees. Which of the following is the MOST appropriate recommendation to management?",
    options: [
      "A. Restrict access to removable media ports on company devices.",
      "B. Implement an organization-wide removable media policy.",
      "C. Install an additional antivirus program to increase protection.",
      "D. Ensure the antivirus program contains up-to-date signature files for all company devices."
    ],
    solution: "B",
    explication: "Implementing an organization-wide removable media policy addresses the root cause — employees are connecting found media (a high-risk behavior) because there is no policy prohibiting or governing this. A comprehensive policy can prohibit connecting unknown media, require scanning before use, and educate employees on the risk. Port restriction (A) is a technical control that may interfere with legitimate use. Additional antivirus (C) and updates (D) address detection but not the behavioral cause of the incidents."
  },
  {
    id: 109,
    question: "Which of the following is MOST important to the effectiveness of smoke detectors installed in a data processing facility?",
    options: [
      "A. Detectors are linked to wet pipe fire suppression systems.",
      "B. Detectors are linked to dry pipe fire suppression systems.",
      "C. Detectors have the correct industry certification.",
      "D. Detectors trigger audible alarms when activated."
    ],
    solution: "D",
    explication: "Triggering audible alarms when activated is most important to effectiveness because it ensures that people in the facility are immediately alerted and can respond — evacuating and notifying the fire department. Without audible alarms, smoke detection alone has limited value if no one is notified. Wet pipe systems (A) use water which can damage equipment. Dry pipe systems (B) are better for data centers but this describes the suppression system, not the detector's effectiveness. Certification (C) ensures quality but audible alerting drives response."
  },
  {
    id: 110,
    question: "Which of the following would be the MOST useful metric for senior management to consider when reviewing the current project portfolio?",
    options: [
      "A. Expected return divided by the projected cost",
      "B. Cost of projects divided by total IT cost",
      "C. Total cost of each project",
      "D. Annualized loss expectancy (ALE) of the portfolio"
    ],
    solution: "A",
    explication: "Expected return divided by projected cost is the benefit-cost ratio — it shows the relative value of each project and enables senior management to compare and prioritize projects based on their value efficiency. Projects with higher ratios provide more return per dollar invested. Cost as a percentage of IT spend (B) shows budget allocation. Total cost (C) shows investment size but not value. ALE (D) measures risk cost, not project value. The benefit-cost ratio is the most useful metric for portfolio prioritization decisions."
  },
  {
    id: 111,
    question: "Who is accountable for an organization's enterprise risk management (ERM) program?",
    options: [
      "A. Board of directors",
      "B. Steering committee",
      "C. Chief risk officer (CRO)",
      "D. Executive management"
    ],
    solution: "A",
    explication: "The board of directors holds ultimate accountability for enterprise risk management. They are responsible to shareholders and other stakeholders for the overall risk governance of the organization. The board sets risk appetite and ensures ERM is functioning. The CRO (C) is responsible for managing and operating the ERM program. Executive management (D) owns risks. The steering committee (B) oversees specific programs. Accountability — the highest level of answerability — rests with the board."
  },
  {
    id: 112,
    question: "Which of the following metrics would BEST indicate compliance with a policy that requires all new employees to receive security awareness training?",
    options: [
      "A. Percentage of new hires that have completed the training",
      "B. Percentage of new hires who report incidents",
      "C. Number of terminations for policy violations",
      "D. Average security awareness training scores"
    ],
    solution: "A",
    explication: "The percentage of new hires who have completed the training directly measures compliance with the stated policy requirement — that all new employees receive security awareness training. It is the most direct and straightforward compliance metric. Incident reporting rates (B) measure one outcome. Terminations for violations (C) measure a different compliance area. Training scores (D) measure quality, not completion compliance. Completion percentage is the metric that directly answers 'are we complying with the policy?'"
  },
  {
    id: 113,
    question: "An IS auditor reviewing the IS strategic planning process should FIRST review the:",
    options: [
      "A. current technology trends.",
      "B. business continuity strategy.",
      "C. business plan.",
      "D. existing information technology environment."
    ],
    solution: "C",
    explication: "The IS auditor should first review the business plan because IT strategy must be derived from and aligned with the business strategy. The business plan defines organizational direction, priorities, and objectives that the IT strategy must support. Without understanding the business plan, there is no basis for evaluating whether the IT strategy is appropriate. Technology trends (A), continuity strategy (B), and the current IT environment (D) are reviewed in the context of the business plan, not before it."
  },
  {
    id: 114,
    question: "Which of the following tasks should be assigned to two or more payroll department staff to avoid a segregation of duties conflict?",
    options: [
      "A. Approving payroll payments and inputting salary rates into the system",
      "B. Approving vacation requests and reviewing time sheets",
      "C. Viewing lists of terminated employees and editing payroll information",
      "D. Adding and removing new users of the payroll system"
    ],
    solution: "A",
    explication: "Approving payroll payments and inputting salary rates into the system should be segregated because a single person who can both enter salary rates and approve payments could fraudulently increase their own salary and approve the payment. This combination creates an opportunity for financial fraud. Approving vacations and reviewing timesheets (B) are HR functions without financial fraud risk. Viewing terminated employees and editing payroll (C) is also a concern. User administration (D) is an IT function. The salary input plus payment approval combination is the highest-risk combination."
  },
  {
    id: 115,
    question: "During a closing meeting, the IT manager disagrees with a valid audit finding presented by the IS auditor and requests the finding be excluded from the final report. Which of the following is the auditor's BEST course of action?",
    options: [
      "A. Remove the finding from the report and continue presenting the remaining findings.",
      "B. Provide the evidence which supports the finding and keep the finding in the report.",
      "C. Modify the finding to include the IT manager's comments and inform the audit manager of the changes.",
      "D. Request that the IT manager be removed from the remaining meetings and future audits."
    ],
    solution: "B",
    explication: "If the finding is valid and supported by evidence, the auditor should present the evidence to address the disagreement and maintain the finding in the report. Audit independence requires that valid findings not be removed due to management pressure. The auditor should also offer to include management's response in the report. Removing the finding (A) compromises independence. Removing the manager (D) is inappropriate. Modifying the finding without basis (C) compromises integrity. Evidence-based, independent reporting is non-negotiable."
  },
  {
    id: 116,
    question: "At which stage of the system development life cycle (SDLC) is it MOST beneficial to perform a risk assessment?",
    options: [
      "A. Prior to system development",
      "B. At each stage of the life cycle",
      "C. During business case development",
      "D. Prior to system deployment"
    ],
    solution: "B",
    explication: "Risk assessment is most beneficial when performed at each stage of the SDLC because risks change as the project progresses. New risks emerge during design, development, testing, and deployment. A single risk assessment at any one point misses risks that arise in later phases. Risk assessment during business case development (C) is important but not sufficient. Pre-development (A) and pre-deployment (D) are critical points but only two of many. Continuous risk assessment throughout the SDLC provides the most comprehensive risk management."
  },
  {
    id: 117,
    question: "An IS auditor is reviewing vulnerability scanning results of an organization's critical systems. Which of the following is the BEST way to validate that the vulnerabilities have been remediated?",
    options: [
      "A. Re-scan the vulnerable systems.",
      "B. Interview owners of vulnerability scanning systems for evidence.",
      "C. Review patch management documentation.",
      "D. Review change management documentation for remediation."
    ],
    solution: "A",
    explication: "Re-scanning the vulnerable systems is the most direct and reliable validation that vulnerabilities have been remediated. A follow-up scan either confirms the vulnerability is gone (remediated) or shows it still exists. Documentation review (C, D) shows what was supposed to be done but not whether it was effective. Interviews (B) provide subjective assertions. Only a re-scan provides empirical, objective evidence that the vulnerability is no longer present on the system."
  },
  {
    id: 118,
    question: "Which of the following is the MOST important consideration of any disaster response plan?",
    options: [
      "A. Personnel safety",
      "B. IT asset protection",
      "C. Lost revenue",
      "D. Adequate resource capacity"
    ],
    solution: "A",
    explication: "Personnel safety is always the most important consideration in any disaster response plan. Human life takes precedence over all other concerns — IT assets, revenue, and capacity can all be recovered or replaced, but lives cannot. Disaster response plans must prioritize evacuation, communication, and protection of people before addressing any other objectives. IT asset protection (B), lost revenue (C), and resources (D) are all addressed after ensuring personnel safety. This is a fundamental principle of emergency management."
  },
  {
    id: 119,
    question: "An IS auditor finds that a new network connection allows communication between the internet and the internal enterprise resource planning (ERP) system. Which of the following is the PRIMARY business impact to include when presenting this observation to management?",
    options: [
      "A. A decrease in data quality in the ERP system",
      "B. An increase in potential fines from regulators",
      "C. A decrease in network performance",
      "D. An increase to the threat landscape"
    ],
    solution: "D",
    explication: "A direct connection between the internet and the internal ERP system dramatically increases the threat landscape — the ERP system is now exposed to all internet-based attacks (unauthorized access, data theft, ransomware, injection attacks). This is the primary business impact because it fundamentally changes the security risk profile of the most critical business application. Data quality (A) and network performance (C) are secondary. Regulatory fines (B) are a potential consequence. The expanded threat landscape is the immediate, direct business impact."
  },
  {
    id: 120,
    question: "IT management has not implemented action plans for a previous audit report finding and has decided to accept the associated risk. Which of the following is the auditor's BEST course of action?",
    options: [
      "A. Document noncompliance with the agreed-upon plan.",
      "B. Validate compliance with the risk acceptance process.",
      "C. Update the enterprise risk register to reflect the observation.",
      "D. Check for implementation of compensating controls."
    ],
    solution: "B",
    explication: "When management decides to accept risk rather than implement recommended controls, the auditor's role is to verify that this decision followed the organization's formal risk acceptance process — including proper authorization levels, documentation, and acknowledgment of the risk. If the process was followed correctly, management has legitimately exercised its risk governance authority. Documenting noncompliance (A) is appropriate if the process wasn't followed. Updating the risk register (C) and checking compensating controls (D) are secondary steps."
  },
  {
    id: 121,
    question: "Which of the following provides the BEST assurance that vendor-supported software remains up to date?",
    options: [
      "A. Software asset management",
      "B. Version management",
      "C. Licensing agreement and escrow",
      "D. Release and patch management"
    ],
    solution: "D",
    explication: "Release and patch management processes ensure that vendor-issued updates, patches, and new releases are evaluated, tested, and deployed in a timely manner. This directly keeps vendor-supported software current. Software asset management (A) tracks what is installed but doesn't ensure updates. Version management (B) tracks versions but doesn't drive updates. Licensing and escrow (C) are legal protections, not update mechanisms. Only release and patch management actively drives the process of keeping software current."
  },
  {
    id: 122,
    question: "Which of the following findings should be of GREATEST concern during an audit of IT governance and management?",
    options: [
      "A. There is no chief information security officer (CISO) position.",
      "B. The organization is not aligned with an international IT control standard.",
      "C. There is no IT representation in business strategy committee meetings.",
      "D. The IT strategy development process is not documented."
    ],
    solution: "C",
    explication: "The absence of IT representation in business strategy committee meetings means IT has no voice in shaping business strategy, and business decisions will be made without considering IT implications, constraints, or opportunities. This is a fundamental governance failure — IT and business strategy become disconnected, leading to misalignment. No CISO (A) is a risk management gap. Non-alignment with standards (B) is a framework concern. Undocumented IT strategy process (D) is a process gap. Business strategy exclusion is the most critical governance deficiency."
  },
  {
    id: 123,
    question: "An IS auditor detects the presence of known ransomware indicators. What should the auditor do NEXT?",
    options: [
      "A. Research the type of ransomware to determine the associated risk.",
      "B. Recommend a tool to remove the ransomware from the server.",
      "C. Notify the parties responsible for the server.",
      "D. Determine whether documented procedures exist for ransomware removal."
    ],
    solution: "C",
    explication: "When an IS auditor detects known ransomware indicators during an audit, the immediate next step is to notify the parties responsible for the server — this is an active security incident requiring immediate response. The auditor is not an incident responder; they must alert those with authority and responsibility to act. Researching ransomware (A), recommending removal tools (B), and checking procedures (D) are all secondary to notifying the right people who can take immediate containment action."
  },
  {
    id: 124,
    question: "Which of the following would BEST enhance the capability of a web server to accommodate a significant increase in web traffic?",
    options: [
      "A. Solid state drives",
      "B. Virtualized environments",
      "C. Additional network connections",
      "D. Elastic cloud architecture"
    ],
    solution: "D",
    explication: "Elastic cloud architecture enables automatic scaling of computing resources in response to demand changes. When web traffic increases significantly, elastic architecture dynamically provisions additional server instances, load balancing, and bandwidth to accommodate the load, then scales down when traffic decreases. Solid state drives (A) improve I/O performance but have limited impact on traffic scalability. Virtualization (B) improves resource utilization. Additional network connections (C) address bandwidth but not compute capacity. Elasticity directly addresses unpredictable traffic increases."
  },
  {
    id: 125,
    question: "Which of the following attack types is MOST effectively addressed by an organization's security awareness program?",
    options: [
      "A. Man-in-the-middle",
      "B. Phishing",
      "C. Structured query language (SQL) injection",
      "D. Distributed denial of service (DDoS)"
    ],
    solution: "B",
    explication: "Phishing attacks exploit human behavior — convincing individuals to click malicious links, provide credentials, or download malware. Security awareness training directly addresses the human element by teaching employees to recognize and avoid phishing attempts. Man-in-the-middle (A) and SQL injection (C) are technical attacks requiring technical controls. DDoS (D) is mitigated through network controls. Phishing is the attack type where human behavior is the primary attack vector and awareness is the primary mitigation."
  },
  {
    id: 126,
    question: "What is the BEST way to identify unforeseen risk that may impact IT processes?",
    options: [
      "A. Review metrics and historical incident response reports.",
      "B. Perform application control self-assessments (CSAs).",
      "C. Assess IT policies and procedures.",
      "D. Conduct a threat and vulnerability analysis."
    ],
    solution: "D",
    explication: "A threat and vulnerability analysis proactively identifies potential risks — including those not yet experienced — by examining what threats exist in the environment and what vulnerabilities could be exploited. It is specifically designed to surface unforeseen risks before they materialize. Metrics and incident reports (A) only reveal risks that have already occurred. CSAs (B) assess known controls. Policy review (C) examines what should happen. Threat-vulnerability analysis identifies future and unknown risks."
  },
  {
    id: 127,
    question: "Which of the following is the PRIMARY purpose of a rollback plan for a system change?",
    options: [
      "A. To ensure a backup exists before implementing a change",
      "B. To ensure testing can be re-performed if required",
      "C. To ensure steps exist to remove the change if necessary",
      "D. To ensure the system change is effective"
    ],
    solution: "C",
    explication: "A rollback plan documents the specific steps to reverse or remove a system change if it causes problems after implementation. Its primary purpose is to provide a tested, ready procedure to restore the previous state. This ensures that if a change causes failures, the system can be quickly returned to a known-good state. Backup existence (A) is a prerequisite. Re-testing capability (B) is a testing concern. Change effectiveness (D) is what implementation aims for. Rollback plans specifically enable recovery from failed changes."
  },
  {
    id: 128,
    question: "A firewall has been installed on the company's web server. Which concern does the firewall address?",
    options: [
      "A. Accessing information by the outside world",
      "B. Availability of the information",
      "C. Connectivity to the Internet",
      "D. Unauthorized modification of information by internal users"
    ],
    solution: "A",
    explication: "A firewall on the web server controls what traffic is allowed to reach the server and what connections the server can make. It prevents unauthorized external access to information on the server by filtering incoming traffic based on rules. Availability (B) is addressed by redundancy and failover systems. Connectivity (C) is a network function that the firewall manages but doesn't specifically address as a concern. Internal unauthorized modification (D) is an access control and internal segregation issue. External unauthorized access is the primary concern a firewall addresses."
  },
  {
    id: 129,
    question: "Which of the following is acceptable to be left out of a final audit report?",
    options: [
      "A. The nature and extent of audit procedures conducted",
      "B. Significant findings previously communicated to management",
      "C. Findings of minimal risk to the overall organization",
      "D. The cause and risk associated with a reported issue"
    ],
    solution: "C",
    explication: "Findings of minimal risk that are not significant enough to merit formal reporting can be omitted from the final audit report and communicated informally. Audit reports should focus on material findings. The nature and extent of procedures (A), previously communicated significant findings (B), and cause and risk for reported issues (D) are all required components of a complete audit report. Low-risk findings below the reporting threshold are the appropriate items to omit from formal reports."
  },
  {
    id: 130,
    question: "An IS auditor finds that communication closets requiring electronic swipe card access are missing access logs. Which of the following should be done NEXT?",
    options: [
      "A. Determine whether there are video cameras covering the entrances.",
      "B. Determine whether management approved the access policy.",
      "C. Determine whether anything is missing from the closets.",
      "D. Determine whether any access swipe cards have been lost or stolen."
    ],
    solution: "A",
    explication: "The absence of access logs means there is no record of who entered the communication closets. The auditor's next step is to determine whether compensating controls exist — specifically video cameras covering the entrances. If cameras record access, they compensate for the missing electronic logs. If no compensating controls exist, the finding is more serious. Verifying policy approval (B) is secondary. Checking for missing items (C) is a separate physical security concern. Lost cards (D) are relevant but secondary to assessing compensating controls."
  },
  {
    id: 131,
    question: "Which of the following should be the PRIMARY focus when communicating an IS audit issue to management?",
    options: [
      "A. How the issue was found and who bears responsibility",
      "B. The risk to which the organization is exposed due to the issue",
      "C. The nature, extent, and timing of subsequent audit follow-up",
      "D. A detailed solution for resolving the issue"
    ],
    solution: "B",
    explication: "The primary focus when communicating an audit issue to management should be the risk the organization faces because of the issue. Management needs to understand the business impact and exposure to make informed decisions about remediation priority and resource allocation. How the issue was found (A) is methodology. Follow-up timing (C) is process. Detailed solutions (D) may be inappropriate — the auditor identifies risks and may suggest general improvements, but management determines solutions. Risk exposure is the most actionable information."
  },
  {
    id: 132,
    question: "Which of the following is a benefit of increasing the use of data analytics in audits?",
    options: [
      "A. More time spent on selecting and reviewing samples for testing",
      "B. Less time spent interviewing process owners on underlying data",
      "C. More time spent on analyzing the identified outliers and the root cause",
      "D. Less time spent on selecting adequate audit programs and scope"
    ],
    solution: "C",
    explication: "Increased data analytics use automates data extraction, processing, and anomaly identification. This shifts auditor time from manual data selection and testing to higher-value activities — analyzing outliers and understanding root causes. Rather than spending time on sampling mechanics, auditors can focus on interpreting what the data reveals. More time on samples (A) is the opposite of what analytics achieves. Analytics doesn't replace interviews (B) or planning (D) — it enhances the quality of the analysis phase."
  },
  {
    id: 133,
    question: "Which of the following is MOST important for an IS auditor to review when evaluating a business case for increasing the capacity of a critical application?",
    options: [
      "A. Accuracy of projected return on investment (ROI) calculations",
      "B. Historical and future volumes of processed transactions",
      "C. Sufficient budget allocation for acquiring new hardware and software",
      "D. Functional and technical specifications"
    ],
    solution: "B",
    explication: "Historical and future transaction volumes are most important because capacity planning must be based on realistic demand. Historical volumes establish the baseline, and projected future volumes justify the capacity increase. Without accurate volume data, any capacity decision is speculative. ROI accuracy (A) depends on volume data. Budget (C) must align with the capacity needed. Specifications (D) describe what to build. Transaction volume data is the fundamental input that drives all other elements of the capacity business case."
  },
  {
    id: 134,
    question: "An IT asset management review finds that routers and switches are not sanitized before disposal. What is the GREATEST concern with this situation?",
    options: [
      "A. Configuration files may be extracted from the devices and compromise a network's security.",
      "B. Confidential data files may be extracted from the devices and result in a privacy breach.",
      "C. Staff are not following the organization's sanitization policies and procedures.",
      "D. Sanitization is not part of the IT department's security awareness training program."
    ],
    solution: "A",
    explication: "Routers and switches store configuration files containing network topology, routing tables, access control lists, SNMP community strings, and potentially credentials. If extracted from disposed devices, this information enables attackers to understand and penetrate the organization's network. This is the greatest security risk. Confidential data files (B) are rarely stored on network devices. Policy non-compliance (C) is a process concern. Training gaps (D) are root cause issues. Configuration-based network compromise is the immediate, most severe risk."
  },
  {
    id: 135,
    question: "Which of the following is an IS audit requirement when evaluating assertions made by management?",
    options: [
      "A. To ensure all risks have been addressed",
      "B. To verify alignment with strategic goals",
      "C. To form conclusions about each assertion",
      "D. To assess whether the assertions comply with the law"
    ],
    solution: "C",
    explication: "When evaluating management assertions (claims about controls, compliance, or conditions), the IS auditor is required to gather sufficient appropriate evidence and form conclusions about whether each assertion is accurate. This is the fundamental audit obligation — assertions must be tested and conclusions must be reached. Ensuring all risks are addressed (A) is management's responsibility. Strategic alignment (B) is one dimension. Legal compliance (D) is one type of assertion. Forming conclusions about each assertion is the core audit requirement."
  },
  {
    id: 136,
    question: "Which of the following is the MOST appropriate control to ensure the identity of an email sender?",
    options: [
      "A. Automatic return receipt",
      "B. Digital signature",
      "C. Multi-factor authentication (MFA)",
      "D. Transport Layer Security (TLS)"
    ],
    solution: "B",
    explication: "A digital signature uses the sender's private key to sign the email, allowing recipients to verify the sender's identity using the sender's public key. It provides cryptographic proof that the email was sent by the holder of the private key and has not been altered. Return receipts (A) confirm delivery, not sender identity. MFA (C) authenticates users to systems, not email senders to recipients. TLS (D) encrypts the transmission channel but doesn't verify the sender's identity. Digital signatures are the only method that cryptographically binds identity to email content."
  },
  {
    id: 137,
    question: "Which of the following provides the BEST estimate of the complexity associated with a software development project for a web-based application?",
    options: [
      "A. Function point analysis",
      "B. Value adjustment factor",
      "C. Lines of code",
      "D. Constructive cost model"
    ],
    solution: "A",
    explication: "Function point analysis measures software complexity based on functional requirements — inputs, outputs, user interactions, files, and external interfaces — independently of the programming language or implementation. This provides a technology-neutral, user-perspective complexity measure ideal for web-based applications. Value adjustment factors (B) modify function points but don't stand alone as complexity measures. Lines of code (C) depends on language choice. COCOMO (D) uses lines of code and other factors but starts with a language-dependent measure."
  },
  {
    id: 138,
    question: "When initiating an IT project, which of the following should be completed FIRST?",
    options: [
      "A. Request for proposal (RFP)",
      "B. Feasibility study",
      "C. IT resource plan",
      "D. Milestone plan"
    ],
    solution: "B",
    explication: "A feasibility study is completed first during project initiation because it determines whether the project is viable — technically, operationally, financially, and legally. Without establishing feasibility, all subsequent planning activities (RFP, resource planning, milestones) may be wasted effort on an unviable project. The feasibility study is the decision gate that authorizes further investment in planning. An RFP (A) is issued to vendors later. Resource and milestone plans (C, D) are developed after viability is confirmed."
  },
  {
    id: 139,
    question: "Which of the following controls BEST mitigates the risk associated with password compromise?",
    options: [
      "A. Passwords are stored in the cloud.",
      "B. Passwords are unique for each application.",
      "C. Passwords have format restrictions.",
      "D. Passwords are masked."
    ],
    solution: "B",
    explication: "Unique passwords for each application mitigate password compromise risk by limiting the blast radius — if one password is compromised, attackers cannot use it to access other applications. Password reuse is one of the most exploited vulnerabilities. Cloud storage (A) depends on the cloud provider's security. Format restrictions (C) improve password strength but a strong password compromised in one application still affects others if reused. Masking (D) prevents shoulder surfing but doesn't affect compromise risk. Uniqueness per application is the most effective compromise mitigation."
  },
  {
    id: 140,
    question: "Which of the following findings would be of GREATEST concern when reviewing project risk management practices?",
    options: [
      "A. Qualitative risk analyses have not been updated.",
      "B. There are no formal milestone sign-offs.",
      "C. Project management software is not being used.",
      "D. Ongoing issues are not formally tracked."
    ],
    solution: "D",
    explication: "Not formally tracking ongoing issues is of greatest concern because issues that are not tracked are not managed. Untracked project issues can escalate into major problems — scope changes, cost overruns, schedule delays, or quality failures — without anyone taking action. Outdated risk analyses (A) is a process gap. Missing milestone sign-offs (B) is a governance gap. No PM software (C) is a tooling concern. Active issue tracking is the most critical operational control for project success."
  },
  {
    id: 141,
    question: "Which of the following BEST reduces sampling risk?",
    options: [
      "A. Increasing the risk appetite",
      "B. Decreasing the sampling size",
      "C. Using a statistical sampling method",
      "D. Outsourcing the sampling process"
    ],
    solution: "C",
    explication: "Statistical sampling methods use mathematical probability theory to ensure that samples are representative of the population and allow auditors to quantify and control sampling risk. They enable the auditor to determine the required sample size to achieve a desired confidence level. Increasing risk appetite (A) accepts more risk rather than reducing it. Decreasing sample size (B) increases sampling risk. Outsourcing (D) doesn't reduce sampling risk. Statistical methods are specifically designed to manage and minimize sampling risk."
  },
  {
    id: 142,
    question: "During preparation for an IS audit of an organization's IT security processes, which of the following documents would BEST enable the IS auditor to understand the ownership of specific operational tasks?",
    options: [
      "A. IT service delivery procedures",
      "B. RACI chart",
      "C. Security risk register",
      "D. Documentation of non-functional requirements"
    ],
    solution: "B",
    explication: "A RACI chart (Responsible, Accountable, Consulted, Informed) explicitly maps operational tasks to specific roles and individuals, clearly showing ownership and accountability for each task. It is the most direct document for understanding who owns what. Service delivery procedures (A) describe how tasks are performed. The risk register (C) tracks security risks. Non-functional requirements (D) specify system characteristics. Only the RACI chart specifically documents ownership and accountability for operational tasks."
  },
  {
    id: 143,
    question: "Which of the following roles is PRIMARILY responsible for mitigating the risk of benefits not being realized in an IT project?",
    options: [
      "A. Chief risk officer (CRO)",
      "B. Project sponsor",
      "C. Project manager",
      "D. Quality assurance (QA) manager"
    ],
    solution: "B",
    explication: "The project sponsor is primarily responsible for benefits realization because they champion the project, own the business case, and are accountable for ensuring the project delivers the promised benefits. They are the bridge between the project and the business strategy. The CRO (A) manages organizational risk. The project manager (C) manages execution. The QA manager (D) ensures quality. The sponsor's accountability for the business case and benefits is the primary ownership of benefits realization risk mitigation."
  },
  {
    id: 144,
    question: "An IS auditor finds an emergency change request where an IT manager approved the change, modified the code on the production platform, and resolved the ticket. Which of the following should be the auditor's GREATEST concern?",
    options: [
      "A. There was no user acceptance testing (UAT) prior to making the change.",
      "B. There was no follow-up approval from the business.",
      "C. The IT manager performed the change.",
      "D. The change did not go through the change advisory board."
    ],
    solution: "C",
    explication: "The IT manager approving and then personally performing the production change is the most serious segregation of duties violation. The approver and implementer should be different people to provide checks and balances. A single person who approves and implements can introduce unauthorized changes without oversight. No UAT (A) is a testing concern for emergencies. No business approval (B) is a governance gap. Missing CAB (D) is procedurally required. The approver-implementer conflict is the most critical control failure."
  },
  {
    id: 145,
    question: "Which of the following can be used to implement dual-factor authentication?",
    options: [
      "A. A physical key and nondescript electronic-swipe employee badge used for access to the building",
      "B. An RFID card and proximity reader used for access to the computer room",
      "C. A personalized keypad access code and combination lock to the server room",
      "D. A fully functional smart card and user-specific PIN used for access to the network room"
    ],
    solution: "D",
    explication: "A smart card (something you have) combined with a user-specific PIN (something you know) represents genuine two-factor authentication using two different authentication categories. Option A (physical key + badge) represents two physical factors — both 'something you have.' Option B (RFID card + proximity reader) is one factor (card) and one reader. Option C (keypad code + combination lock) could be two 'something you know' factors. Only option D combines two distinctly different authentication factors."
  },
  {
    id: 146,
    question: "When multiple IT projects have to be run simultaneously for a data loss prevention (DLP) initiative, which of the following should be introduced to BEST minimize the associated risk?",
    options: [
      "A. Resource management",
      "B. Portfolio management",
      "C. Change management",
      "D. Program management"
    ],
    solution: "D",
    explication: "Program management coordinates multiple related projects (in this case, the various DLP initiative projects) as a cohesive program, managing interdependencies, shared resources, and overall risk. A program manager ensures the projects work together toward the DLP initiative's overarching goal. Portfolio management (B) manages all IT investments, not specifically related projects. Resource management (A) and change management (C) are components of program management. Program management is specifically designed for coordinating multiple related projects."
  },
  {
    id: 147,
    question: "An IS auditor is scheduled to conduct a follow-up and is told by operational management that new priorities prevented them from implementing the action plan. Management plans to address the audit issues after the next quarter. What should be the auditor's NEXT course of action?",
    options: [
      "A. Defer the follow-up engagement for later in the year.",
      "B. Report management's lack of action to the audit committee.",
      "C. Assess the risk of the delayed implementation.",
      "D. Conduct the follow-up engagement as scheduled."
    ],
    solution: "C",
    explication: "When management delays implementation of audit recommendations, the auditor's next step is to assess the risk impact of this delay. Understanding the ongoing exposure enables the auditor to determine appropriate next steps — whether to escalate, whether compensating controls exist, and what to report. Deferring the engagement (A) abandons oversight responsibility. Escalating to the audit committee (B) may be appropriate but should follow risk assessment. Conducting the follow-up as planned (D) without understanding the delay context may be premature."
  },
  {
    id: 148,
    question: "What type of control has been implemented when secure code reviews are conducted as part of a deployment program?",
    options: [
      "A. Monitoring",
      "B. Deterrent",
      "C. Corrective",
      "D. Detective"
    ],
    solution: "D",
    explication: "Secure code reviews conducted during the deployment program detect security vulnerabilities in code before the code goes into production. This is a detective control — it finds problems that already exist in the code. Monitoring (A) is ongoing observation. Deterrent controls discourage bad behavior. Corrective controls fix problems after detection. Code reviews examine existing code to detect vulnerabilities, making them detective controls that catch issues before deployment."
  },
  {
    id: 149,
    question: "Which of the following is the MOST important privacy consideration for an organization that uses a cloud service provider to process customer data?",
    options: [
      "A. Customer data transferred to the service provider must be reported to the regulatory authority.",
      "B. Data privacy must be managed in accordance with the regulations applicable to the organization.",
      "C. No personal information may be transferred to the service provider without notifying the customer.",
      "D. Data privacy must be monitored in accordance with industry standards and best practices."
    ],
    solution: "B",
    explication: "The most important consideration is that data privacy management must comply with regulations applicable to the organization — regardless of where processing occurs or who processes it. Regulatory obligations follow the data controller (the organization), not the processor (cloud provider). These obligations don't disappear when data is transferred to a cloud provider. Regulatory reporting (A) may be required in some cases but is not universal. Customer notification (C) varies by regulation. Industry standards (D) are voluntary. Regulatory compliance is mandatory."
  },
  {
    id: 150,
    question: "Which of the following data provides the MOST useful input when performing a business impact analysis (BIA)?",
    options: [
      "A. Projected cost of goods sold",
      "B. Cost of regulatory compliance",
      "C. Cost-benefit analysis of running the current business",
      "D. Expected costs for recovering the business"
    ],
    solution: "D",
    explication: "A BIA assesses the impact of disruptions and informs recovery planning. The expected costs for recovering the business — including recovery time objectives, recovery costs, and the financial impact of downtime — are the most directly relevant input. Recovery costs help prioritize which business processes need the most protection and investment. Cost of goods sold (A) is operational. Regulatory compliance costs (B) are fixed expenses. Cost-benefit analysis (C) is strategic. Recovery costs are the specific financial data that drives BIA conclusions."
  },
  {
    id: 151,
    question: "An organization's information security policies should be developed PRIMARILY on the basis of:",
    options: [
      "A. industry best practices.",
      "B. enterprise architecture (EA).",
      "C. a risk management process.",
      "D. past information security incidents."
    ],
    solution: "C",
    explication: "Information security policies should be developed primarily based on the organization's risk management process because policies must reflect the actual risks the organization faces and the risk tolerance of the organization. Risk management identifies what needs to be protected, from what threats, and to what degree. Industry best practices (A) provide benchmarks. EA (B) provides context. Past incidents (D) are informative. Risk management is the foundation because it defines what the policies are trying to protect against."
  },
  {
    id: 152,
    question: "Which of the following is the FIRST step when determining the feasibility of using data analytics in an audit?",
    options: [
      "A. Determine if the data can be analyzed.",
      "B. Review the results of prior audits in the same area.",
      "C. Establish the availability of relevant data.",
      "D. Review the data classification schema."
    ],
    solution: "C",
    explication: "The first step in assessing the feasibility of data analytics is to establish whether relevant data is available. If the data needed for analysis doesn't exist, is inaccessible, or cannot be obtained, no analytics is possible. Data availability is the prerequisite gate that determines whether any further steps make sense. Analyzing data (A) assumes availability. Prior audit results (B) are context. Data classification (D) helps understand sensitivity. Availability confirmation is always the logical first step."
  },
  {
    id: 153,
    question: "The BEST approach for validating the effectiveness of the software patch management process is to review the:",
    options: [
      "A. date of the last patch installed on the system.",
      "B. installed patches against the patch release list.",
      "C. patch management policy and procedures.",
      "D. patch review memos for proper authorization."
    ],
    solution: "B",
    explication: "Comparing installed patches against the complete patch release list from vendors validates whether all available patches have been applied. This directly measures effectiveness — the gap between available patches and installed patches shows what vulnerabilities remain unaddressed. The last patch date (A) shows recency but not completeness. Reviewing policies (C) shows what should happen. Authorization memos (D) show governance. Only comparing installed vs. available patches directly measures how effective the patching process is."
  },
  {
    id: 154,
    question: "An IS auditor identifies that an accounts payable clerk has direct access to a payment file after it has been generated. The MOST significant risk to the organization is that payments may be:",
    options: [
      "A. rejected.",
      "B. unreconcilable.",
      "C. altered.",
      "D. late to customers."
    ],
    solution: "C",
    explication: "An accounts payable clerk with direct access to the payment file after generation could alter payment amounts, change beneficiary account numbers, or add fraudulent payments before they are processed. This is the most significant risk — direct financial fraud through unauthorized modification of payment instructions. Rejected payments (A) are operational issues. Unreconcilable payments (B) might follow alteration but are secondary. Late payments (D) are operational. Unauthorized alteration of payment files is the direct fraud risk."
  },
  {
    id: 155,
    question: "To help determine whether a controls-reliant approach to auditing financial systems in a company should be used, which sequence of IS audit work is MOST appropriate?",
    options: [
      "A. Review of the general IS controls followed by a review of the application controls",
      "B. Review of application controls followed by a test of key business process controls",
      "C. Review of major financial applications followed by a review of IT governance processes",
      "D. Detailed examination of financial transactions followed by review of the general ledger"
    ],
    solution: "A",
    explication: "A controls-reliant approach is only appropriate if the controls are reliable. General IS controls (IT general controls covering the IT environment) are the foundation — if they are weak, application controls cannot be relied upon regardless of their design. Therefore, evaluating general IS controls first determines whether it's safe to rely on application controls. If general controls are strong, the auditor can rely on application controls and reduce substantive testing. This sequence establishes the control reliability foundation first."
  },
  {
    id: 156,
    question: "Which of the following would be of GREATEST concern to an IS auditor evaluating an organization's change management process?",
    options: [
      "A. Change management meeting minutes are not available for several meetings.",
      "B. A list of authorized requestors for emergency changes does not exist.",
      "C. Changes are approved after being moved to production.",
      "D. Change requests are not subject to prioritization."
    ],
    solution: "C",
    explication: "Approving changes after they have already been moved to production is the most critical finding — it means changes are implemented without prior authorization, rendering the change management approval process completely ineffective. Post-implementation approval is a rubber stamp that provides no real control. Missing minutes (A) are documentation gaps. No authorized requestor list (B) is a governance gap. No prioritization (D) is a process efficiency concern. Pre-implementation approval is the core purpose of change management control."
  },
  {
    id: 157,
    question: "Which of the following should be the PRIMARY purpose of conducting tabletop exercises when reviewing a security incident response plan?",
    options: [
      "A. To provide efficiencies for alignment with incident response test scenarios",
      "B. To gather documentation for responding to security audit inquiries",
      "C. To determine process improvement options for the incident response plan",
      "D. To confirm that technology is in place to support the incident response plan"
    ],
    solution: "C",
    explication: "The primary purpose of tabletop exercises is to identify gaps and process improvement opportunities in the incident response plan. By walking through scenarios with key stakeholders, organizations discover what works, what doesn't, where the plan is unclear, and what needs to be updated. Efficiency alignment (A) and documentation (B) are secondary benefits. Technology confirmation (D) is better done through technical exercises. Process improvement through scenario discussion is the fundamental purpose of tabletop exercises."
  },
  {
    id: 158,
    question: "During a follow-up, an IS auditor learns the auditee has not implemented agreed-upon monitoring controls over a critical legacy system due to a business decision to migrate to a new system in six months. Which of the following is the auditor's BEST course of action?",
    options: [
      "A. Document and close the finding due to the upcoming migration.",
      "B. Schedule a post-implementation review of the new system.",
      "C. Reassess the residual risk and defer to senior management to accept the risk.",
      "D. Update the original audit report to reflect management's decision."
    ],
    solution: "C",
    explication: "The auditor's best course of action is to reassess the residual risk during the six-month period while controls are not implemented, and escalate to senior management to formally accept that risk. The system remains critical and in operation for six months — that period of uncontrolled risk must be acknowledged and formally accepted by appropriate management. Closing the finding (A) without risk acceptance is inappropriate. Scheduling future review (B) doesn't address current risk. Updating the report (D) is insufficient without risk acceptance."
  },
  {
    id: 159,
    question: "During a change management audit, an IS auditor identifies that some changes were implemented in the production environment without user acceptance testing (UAT). Which of the following is the auditor's BEST course of action?",
    options: [
      "A. Postpone the audit until adequate UAT can be performed.",
      "B. Document the finding and explain the risk of implementing changes without appropriate testing.",
      "C. Recommend the IT manager roll back the changes and continue with the audit.",
      "D. Perform post-implementation testing to verify that the changes do not impact financial data."
    ],
    solution: "B",
    explication: "The auditor's role is to identify and document findings with the associated risks, not to make operational decisions. Documenting that changes were implemented without UAT and explaining the risk (defects in production, unvalidated business requirements) is the appropriate audit response. Postponing the audit (A) doesn't serve audit objectives. Demanding rollbacks (C) exceeds the auditor's authority. Performing testing (D) is management's responsibility. The auditor reports findings and risks; management decides corrective action."
  },
  {
    id: 160,
    question: "For which of the following is the documentation of workaround processes critical to keeping business functions operational during recovery of IT systems?",
    options: [
      "A. Business continuity plan (BCP)",
      "B. Business impact analysis (BIA)",
      "C. Incident management process",
      "D. Threat and risk assessment"
    ],
    solution: "A",
    explication: "Workaround processes are documented in the Business Continuity Plan. When IT systems are unavailable during recovery, workarounds (manual processes, alternative systems, temporary procedures) enable business functions to continue operating. The BCP specifically documents how the business operates when normal IT support is disrupted. The BIA assesses impact. Incident management addresses IT incident response. Risk assessment identifies threats. Only the BCP specifically addresses how the business will continue functioning during IT system recovery."
  },
  {
    id: 161,
    question: "Which of the following backup types BEST enables an organization to recover data following a ransomware attack?",
    options: [
      "A. Online data synchronization",
      "B. Incremental backup",
      "C. Differential backup",
      "D. Offline backup"
    ],
    solution: "D",
    explication: "Offline backups are stored on media not connected to the network. Ransomware encrypts all accessible data including connected backup systems and online synchronization. Offline backups are unaffected by ransomware because they are physically isolated. Online synchronization (A) would replicate the encryption. Incremental (B) and differential (C) backups that are network-connected would be encrypted by ransomware. Only physically isolated offline backups survive ransomware attacks intact."
  },
  {
    id: 162,
    question: "What would be the BEST way to incorporate a new data classification program into daily operations?",
    options: [
      "A. Require and enforce encryption of confidential information.",
      "B. Ensure the data classification policy is updated on a regular basis.",
      "C. Ensure the organizational focus is on data classified as high priority.",
      "D. Make data classification part of employee security awareness training."
    ],
    solution: "D",
    explication: "Incorporating data classification into security awareness training ensures that all employees learn how to identify, classify, and handle data according to the classification scheme as part of their regular training. This embeds classification into daily practice across the organization. Encrypting confidential data (A) is a control applied after classification. Policy updates (B) maintain the framework. Focusing on high-priority data (C) is partial. Training is the mechanism that operationalizes the classification program across all employees in daily work."
  },
  {
    id: 163,
    question: "When auditing an organization's procurement process, which of the following observations should be of MOST concern to an IS auditor?",
    options: [
      "A. Purchasing procedures and processes have not been updated during the past two years.",
      "B. Contracts can be approved after expenses have been incurred.",
      "C. The procurement manager is new to the organization.",
      "D. Thresholds for requesting and approving payments for purchase requests have not been established."
    ],
    solution: "B",
    explication: "Contracts being approved after expenses are incurred means the organization is committing financial resources without contractual authorization — creating legal, financial, and control risks. Expenses are paid without a binding agreement on terms, prices, and obligations. This is a fundamental procurement control failure. Outdated procedures (A) are a currency concern. A new manager (C) is a staffing issue. Missing thresholds (D) are a control gap. Post-hoc contract approval represents the most serious procurement governance failure."
  },
  {
    id: 164,
    question: "Which of the following is MOST important for an IS auditor to review during an audit of an automated continuous monitoring process being used by the finance department?",
    options: [
      "A. Management sign-off of test documentation",
      "B. Dual control and approvals embedded in processes",
      "C. Configuration of the monitoring tool",
      "D. Resiliency of the monitoring service"
    ],
    solution: "C",
    explication: "The configuration of the monitoring tool is most critical because the entire value of automated continuous monitoring depends on the tool being correctly configured to monitor the right things, with appropriate thresholds, alert conditions, and scope. An incorrectly configured tool may miss critical exceptions or generate meaningless alerts. Management sign-off (A) and dual controls (B) are governance. Resiliency (D) affects availability. Configuration determines whether the monitoring actually detects what it's supposed to detect."
  },
  {
    id: 165,
    question: "When reviewing hard disk utilization reports, an IS auditor observes that utilization is routinely above 95%. Which of the following should be the GREATEST concern to the IS auditor?",
    options: [
      "A. Availability",
      "B. Consistency",
      "C. Data security",
      "D. Denial of service (DoS) attacks"
    ],
    solution: "A",
    explication: "Hard disk utilization routinely above 95% is primarily an availability concern. At this level, disks have minimal free space, which can cause systems to fail to write new data, crash, or be unable to create temporary files or logs. This creates significant risk of system unavailability and data loss. Data consistency (B) may be affected by full disks. Data security (C) is not directly related to utilization. DoS (D) could exploit this condition but the primary risk is system failure due to full disks — an availability issue."
  },
  {
    id: 166,
    question: "Which of the following is the MOST important consideration when designing a risk-based incident response management program?",
    options: [
      "A. Monitoring recurring low-risk events",
      "B. Minimizing false-positive and false-negative alerts",
      "C. Testing and updating the incident response plan annually",
      "D. Assigning roles and responsibilities"
    ],
    solution: "D",
    explication: "Assigning roles and responsibilities is the most important design consideration because during an incident, people must know exactly who does what. Without clear role assignments, response is disorganized, delayed, and ineffective — the most common cause of poor incident response outcomes. Monitoring low-risk events (A) is secondary. Minimizing false alerts (B) is operational tuning. Annual testing (C) is important maintenance. Clear role assignments are the human foundation that makes all other elements of the program work during an actual incident."
  },
  {
    id: 167,
    question: "Which of the following conditions should be of GREATEST concern to an IS auditor reviewing change management?",
    options: [
      "A. Vendors do not have access to apply changes to the quality assurance (QA) environment.",
      "B. The individual applying the changes is not responsible for approving the changes.",
      "C. Change management documentation is not submitted prior to development.",
      "D. The change management process does not include vendor-supplied changes."
    ],
    solution: "D",
    explication: "If the change management process does not include vendor-supplied changes, then patches, updates, and software provided by vendors bypass all change controls. These changes go directly to production without testing, approval, or documentation — creating significant risk of uncontrolled changes affecting production systems. Vendors not having QA access (A) is appropriate security. Separate approver and implementer (B) is good control. Late documentation (C) is a process issue. Excluding vendor changes from change management creates a major uncontrolled change risk."
  },
  {
    id: 168,
    question: "An IS auditor is tasked with reviewing an organization's purchase invoices to discover fictitious entries that may have been created as part of a suspected fraud scheme. Which of the following is the MOST effective data analysis technique for this situation?",
    options: [
      "A. Benford's law",
      "B. Predictive analysis",
      "C. Data mining",
      "D. Regression analysis"
    ],
    solution: "A",
    explication: "Benford's law predicts the expected frequency distribution of leading digits in naturally occurring financial data sets. In legitimate purchase invoices, the first digits follow a specific logarithmic distribution. Fictitious entries often fail this test because fraudsters tend to create amounts that don't follow natural patterns. Benford's law is specifically designed to detect anomalies in financial data that may indicate fraud. Predictive analysis (B) forecasts. Data mining (C) discovers patterns. Regression (D) identifies relationships. Benford's law is the standard fraud detection tool for invoice analysis."
  },
  {
    id: 169,
    question: "Which of the following should be of GREATEST concern to an IS auditor conducting an audit of an organization's data center?",
    options: [
      "A. The data center is in a high flood zone.",
      "B. Employees working in the data center have not been trained in the use of fire extinguishers.",
      "C. The data center has a wet-pipe sprinkler system.",
      "D. Employees working in the data center are not trained on emergency evacuation procedures."
    ],
    solution: "D",
    explication: "Employees not trained on emergency evacuation procedures is the greatest concern because it poses a direct risk to human safety. If an emergency occurs (fire, flooding, power failure), untrained employees may panic, choose wrong exits, or fail to evacuate in time — resulting in injuries or deaths. Personnel safety is always the highest priority. A high flood zone (A) is an environmental risk that can be mitigated. Wet-pipe sprinklers (C) risk water damage but protect lives. Fire extinguisher training (B) is less critical than overall evacuation knowledge."
  },
  {
    id: 170,
    question: "An IS auditor is reviewing an artificial intelligence (AI) and expert system application. The system has produced several critical errors with severe impact. Which of the following should the IS auditor do NEXT to understand the cause of the errors?",
    options: [
      "A. Review the decision-making logic built into the system.",
      "B. Verify system adherence to corporate policy.",
      "C. Understand the purpose and functionality of the system.",
      "D. Interview the system owner."
    ],
    solution: "C",
    explication: "Before reviewing decision-making logic or assigning blame, the auditor must first understand the system's intended purpose and functionality. Without this foundational understanding, the auditor cannot determine whether the errors represent system malfunction or misuse. Understanding purpose and functionality provides the context needed to evaluate whether the system behaved as designed and whether the design was appropriate. All other steps — reviewing logic (A), policy compliance (B), and owner interviews (D) — are more effective with this foundational understanding."
  }
];