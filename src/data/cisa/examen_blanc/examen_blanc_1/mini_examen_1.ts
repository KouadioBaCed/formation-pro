export const questionsCISA = [
    {
        id: 1,
        question: "Which of the following should be of GREATEST concern to an IS auditor reviewing an organization's business continuity plan (BCP)?",
        options: [
            "A. The BCP has not been tested since it was first issued.",
            "B. The BCP is not version-controlled.",
            "C. The BCP's contact information needs to be updated.",
            "D. The BCP has not been approved by senior management."
        ],
        answer: "A",
        explanation: "A BCP that has never been tested since it was first issued is the greatest concern because without testing, there is no assurance the plan will work when needed. Version control, contact updates, and even management approval are important but secondary to ensuring the plan is actually functional."
    },
    {
        id: 2,
        question: "Which of the following would be MOST useful when analyzing computer performance?",
        options: [
            "A. Tuning of system software to optimize resource usage.",
            "B. Operations report of user dissatisfaction with response time.",
            "C. Statistical metrics measuring capacity utilization.",
            "D. Report of off-peak utilization and response time."
        ],
        answer: "C",
        explanation: "Statistical metrics measuring capacity utilization provide objective, quantitative data that is most useful for analyzing computer performance. User dissatisfaction reports are subjective, tuning is a corrective action not an analysis tool, and off-peak reports only cover a subset of usage."
    },
    {
        id: 3,
        question: "Which of the following is the GREATEST risk if two users have concurrent access to the same database record?",
        options: [
            "A. Entity integrity.",
            "B. Availability integrity.",
            "C. Referential integrity.",
            "D. Data integrity."
        ],
        answer: "D",
        explanation: "Concurrent access to the same database record by two users risks data integrity — one user's changes may overwrite the other's, resulting in lost updates or inconsistent data. This is managed by concurrency controls such as record locking."
    },
    {
        id: 4,
        question: "Which of the following is the MOST effective way for an organization to help ensure agreed-upon action plans from an IS audit will be implemented?",
        options: [
            "A. Ensure ownership is assigned.",
            "B. Test corrective actions upon completion.",
            "C. Ensure sufficient audit resources are allocated.",
            "D. Communicate audit results organization-wide."
        ],
        answer: "A",
        explanation: "Assigning ownership to action plans ensures accountability. Without a named owner, action plans may be ignored. Testing corrective actions, communicating results, and allocating resources are supportive but less directly effective than clear ownership."
    },
    {
        id: 5,
        question: "Which of the following issues associated with a data center's closed circuit television (CCTV) surveillance cameras should be of MOST concern to an IS auditor?",
        options: [
            "A. CCTV recordings are not regularly reviewed.",
            "B. CCTV records are deleted after one year.",
            "C. CCTV footage is not recorded 24 x 7.",
            "D. CCTV cameras are not installed in break rooms."
        ],
        answer: "C",
        explanation: "CCTV footage not being recorded 24x7 means security incidents occurring outside recording hours would go undetected. This is the greatest concern as it creates gaps in physical security monitoring. Not reviewing recordings regularly is also a concern, but gaps in recording are more fundamental."
    },
    {
        id: 6,
        question: "An IS auditor has been asked to audit the proposed acquisition of new computer hardware. The auditor's PRIMARY concern is that:",
        options: [
            "A. a clear business case has been established.",
            "B. the new hardware meets established security standards.",
            "C. a full, visible audit trail will be included.",
            "D. the implementation plan meets user requirements."
        ],
        answer: "A",
        explanation: "The primary concern when auditing a proposed acquisition is that a clear business case has been established, justifying the investment and ensuring it aligns with organizational objectives. Security, audit trails, and user requirements are important but secondary to validating the business justification."
    },
    {
        id: 7,
        question: "To confirm integrity for a hashed message, the receiver should use:",
        options: [
            "A. the same hashing algorithm as the sender's to create a binary image of the file.",
            "B. a different hashing algorithm from the sender's to create a numerical representation of the file.",
            "C. a different hashing algorithm from the sender's to create a binary image of the file.",
            "D. the same hashing algorithm as the sender's to create a numerical representation of the file."
        ],
        answer: "D",
        explanation: "To verify message integrity, the receiver must use the same hashing algorithm as the sender and generate a hash (numerical representation) of the received message. If the computed hash matches the received hash, integrity is confirmed."
    },
    {
        id: 8,
        question: "An organization is implementing a new system that supports a month-end business process. Which of the following implementation strategies would be MOST efficient to decrease business downtime?",
        options: [
            "A. Cutover.",
            "B. Phased.",
            "C. Pilot.",
            "D. Parallel."
        ],
        answer: "A",
        explanation: "A cutover (direct cutover) strategy switches completely from the old system to the new system at once, minimizing downtime for a month-end process by making the transition at a single point. Parallel runs double the workload, phased takes longer, and pilot is limited to a subset."
    },
    {
        id: 9,
        question: "Which of the following should be the FIRST step in managing the impact of a recently discovered zero-day attack?",
        options: [
            "A. Estimating potential damage.",
            "B. Identifying vulnerable assets.",
            "C. Evaluating the likelihood of attack.",
            "D. Assessing the impact of vulnerabilities."
        ],
        answer: "B",
        explanation: "The first step in managing a zero-day attack is to identify which assets are vulnerable. Without knowing what is at risk, it is impossible to prioritize response actions, estimate damage, or assess impact effectively."
    },
    {
        id: 10,
        question: "Which of the following is the BEST way to ensure that an application is performing according to its specifications?",
        options: [
            "A. Pilot testing.",
            "B. System testing.",
            "C. Integration testing.",
            "D. Unit testing."
        ],
        answer: "B",
        explanation: "System testing evaluates the complete, integrated system to verify it meets specified requirements. It is the best way to ensure the application performs according to its specifications as a whole, whereas unit and integration testing address individual components and interfaces."
    },
    {
        id: 11,
        question: "Which of the following would be MOST effective to protect information assets in a data center from theft by a vendor?",
        options: [
            "A. Conceal data devices and information labels.",
            "B. Issue an access card to the vendor.",
            "C. Monitor and restrict vendor activities.",
            "D. Restrict use of portable and wireless devices."
        ],
        answer: "C",
        explanation: "Monitoring and restricting vendor activities is the most effective control to prevent theft by vendors. It directly limits what vendors can do and observe, providing oversight. Concealing labels or restricting devices alone does not prevent a determined vendor from stealing assets."
    },
    {
        id: 12,
        question: "An employee loses a mobile device resulting in loss of sensitive corporate data. Which of the following would have BEST prevented data leakage?",
        options: [
            "A. Data encryption on the mobile device.",
            "B. The triggering of remote data wipe capabilities.",
            "C. Awareness training for mobile device users.",
            "D. Complex password policy for mobile devices."
        ],
        answer: "A",
        explanation: "Data encryption on the mobile device ensures that even if the device is lost, the data cannot be read by unauthorized parties. Remote wipe requires action after the fact, awareness training is preventive for behavior but not technical protection, and passwords can potentially be bypassed."
    },
    {
        id: 13,
        question: "During the evaluation of controls over a major application development project, the MOST effective use of an IS auditor's time would be to review and evaluate:",
        options: [
            "A. cost-benefit analysis.",
            "B. acceptance testing.",
            "C. application test cases.",
            "D. project plans."
        ],
        answer: "D",
        explanation: "Reviewing project plans is the most effective use of an IS auditor's time during a major application development project evaluation, as it provides a comprehensive view of the project's scope, timeline, resources, and controls. It allows the auditor to identify risks early."
    },
    {
        id: 14,
        question: "Upon completion of audit work, an IS auditor should:",
        options: [
            "A. provide a report to the auditee stating the initial findings.",
            "B. provide a report to senior management prior to discussion with the auditee.",
            "C. distribute a summary of general findings to the members of the auditing team.",
            "D. review the working papers with the auditee."
        ],
        answer: "A",
        explanation: "Upon completion of audit work, the IS auditor should provide a report to the auditee stating the initial findings. This allows the auditee to review, respond, and correct any factual errors before the final report is issued."
    },
    {
        id: 15,
        question: "During an IT general controls audit of a high-risk area where both internal and external audit teams are reviewing the same areas simultaneously, which of the following is the BEST approach to optimize resources?",
        options: [
            "A. Leverage the work performed by external audit for the internal audit testing.",
            "B. Ensure both the internal and external auditors perform the work simultaneously.",
            "C. Roll forward the general controls audit to the subsequent audit year.",
            "D. Request that the external audit team leverage the internal audit work."
        ],
        answer: "A",
        explanation: "Leveraging the work performed by the external audit team for internal audit testing optimizes resources by avoiding duplication of effort. Internal auditors can rely on external audit findings where appropriate, reducing redundancy while maintaining coverage."
    },
    {
        id: 16,
        question: "The GREATEST benefit of using a prototyping approach in software development is that it helps to:",
        options: [
            "A. improve efficiency of quality assurance (QA) testing.",
            "B. conceptualize and clarify requirements.",
            "C. decrease the time allocated for user testing and review.",
            "D. minimize scope changes to the system."
        ],
        answer: "B",
        explanation: "The greatest benefit of prototyping is that it helps to conceptualize and clarify requirements by giving stakeholders a tangible model to review and refine. This reduces misunderstandings and improves the final system's alignment with user needs."
    },
    {
        id: 17,
        question: "After an employee termination, a network account was removed, but the application account remained active. To keep this issue from recurring, which of the following is the BEST recommendation?",
        options: [
            "A. Integrate application accounts with network single sign-on.",
            "B. Perform periodic access reviews.",
            "C. Retrain system administration staff.",
            "D. Leverage shared accounts for the application."
        ],
        answer: "A",
        explanation: "Integrating application accounts with network single sign-on (SSO) ensures that disabling the network account automatically revokes access to all integrated applications, preventing orphaned accounts after termination."
    },
    {
        id: 18,
        question: "During an IT governance audit, an IS auditor notes that IT policies and procedures are not regularly reviewed and updated. The GREATEST concern to the IS auditor is that policies and procedures might not:",
        options: [
            "A. reflect current practices.",
            "B. be subject to adequate quality assurance (QA).",
            "C. include new systems and corresponding process changes.",
            "D. incorporate changes to relevant laws."
        ],
        answer: "D",
        explanation: "The greatest concern is that policies and procedures might not incorporate changes to relevant laws and regulations, which could result in non-compliance and legal exposure for the organization. Regulatory non-compliance typically carries the most significant risk."
    },
    {
        id: 19,
        question: "Management receives information indicating a high level of risk associated with potential flooding near the organization's data center within the next few years. As a result, a decision has been made to move data center operations to another facility on higher ground. Which approach has been adopted?",
        options: [
            "A. Risk reduction.",
            "B. Risk acceptance.",
            "C. Risk transfer.",
            "D. Risk avoidance."
        ],
        answer: "D",
        explanation: "Moving the data center to avoid the flood risk entirely is risk avoidance — the organization eliminates the risk by changing its strategy to ensure the risk can no longer occur."
    },
    {
        id: 20,
        question: "An emergency power-off switch should:",
        options: [
            "A. not be in the computer room.",
            "B. not be identified.",
            "C. be protected.",
            "D. be illuminated."
        ],
        answer: "C",
        explanation: "An emergency power-off switch should be protected (e.g., covered with a guard) to prevent accidental activation, while still being accessible in an emergency. It should be clearly marked and located appropriately within or near the computer room."
    },
    {
        id: 21,
        question: "Which of the following is the PRIMARY role of the IS auditor in an organization's information classification process?",
        options: [
            "A. Securing information assets in accordance with the classification assigned.",
            "B. Validating that assets are protected according to assigned classification.",
            "C. Ensuring classification levels align with regulatory guidelines.",
            "D. Defining classification levels for information assets within the organization."
        ],
        answer: "B",
        explanation: "The IS auditor's primary role is to validate that assets are protected according to their assigned classification. The auditor does not define classification levels (that is management's role) nor implement security controls — the auditor independently verifies compliance."
    },
    {
        id: 22,
        question: "When evaluating whether the expected benefits of a project have been achieved, it is MOST important for an IS auditor to review:",
        options: [
            "A. the project schedule.",
            "B. quality assurance (QA) results.",
            "C. post-implementation issues.",
            "D. the business case."
        ],
        answer: "D",
        explanation: "The business case defines the expected benefits of a project. Reviewing the business case allows the IS auditor to compare what was promised against what was actually delivered, making it the most important document for this evaluation."
    },
    {
        id: 23,
        question: "Which of the following is the MOST important reason for IS auditors to perform post-implementation reviews for critical IT projects?",
        options: [
            "A. To determine whether vendors should be paid for project deliverables.",
            "B. To provide the audit committee with an assessment of project team performance.",
            "C. To provide guidance on the financial return on investment (ROI) of projects.",
            "D. To determine whether the organization's objectives were met as expected."
        ],
        answer: "D",
        explanation: "The most important reason for post-implementation reviews is to determine whether the organization's objectives were met as expected. This confirms whether the investment delivered the intended value and informs future project management decisions."
    },
    {
        id: 24,
        question: "Which of the following BEST indicates that an incident management process is effective?",
        options: [
            "A. Decreased number of calls to the help desk.",
            "B. Increased number of incidents reviewed by IT management.",
            "C. Decreased time for incident resolution.",
            "D. Increased number of reported critical incidents."
        ],
        answer: "C",
        explanation: "Decreased time for incident resolution is the best indicator of an effective incident management process. It shows that incidents are being identified, escalated, and resolved efficiently, minimizing business impact."
    },
    {
        id: 25,
        question: "Which of the following MOST effectively minimizes downtime during system conversions?",
        options: [
            "A. Phased approach.",
            "B. Parallel run.",
            "C. Direct cutover.",
            "D. Pilot study."
        ],
        answer: "B",
        explanation: "A parallel run minimizes downtime risk by running both the old and new systems simultaneously. If the new system fails, the old system is still available, ensuring business continuity during the conversion."
    },
    {
        id: 26,
        question: "Which of the following would MOST effectively ensure the integrity of data transmitted over a network?",
        options: [
            "A. Message encryption.",
            "B. Steganography.",
            "C. Certificate authority (CA).",
            "D. Message digest."
        ],
        answer: "D",
        explanation: "A message digest (hash) ensures data integrity by generating a fixed-length value from the data. Any alteration to the data will produce a different hash, detecting tampering. Encryption provides confidentiality, not necessarily integrity."
    },
    {
        id: 27,
        question: "Which of the following would be MOST useful to an IS auditor assessing the effectiveness of IT resource planning?",
        options: [
            "A. Budget execution status.",
            "B. A capacity analysis of IT operations.",
            "C. A succession plan for key IT personnel.",
            "D. A list of new applications to be implemented."
        ],
        answer: "B",
        explanation: "A capacity analysis of IT operations is most useful for assessing IT resource planning effectiveness as it shows whether current resources are sufficient to meet current and future demands, identifying gaps or over-provisioning."
    },
    {
        id: 28,
        question: "An IS auditor is evaluating controls for monitoring the regulatory compliance of a third party that provides IT services to the organization. Which of the following should be the auditor's GREATEST concern?",
        options: [
            "A. A gap analysis against regulatory requirements has not been conducted.",
            "B. The third-party disclosed a policy-related issue of noncompliance.",
            "C. The organization has not reviewed the third party's policies and procedures.",
            "D. The organization has not communicated regulatory requirements to the third party."
        ],
        answer: "D",
        explanation: "If the organization has not communicated regulatory requirements to the third party, the third party cannot be expected to comply with them. This is the greatest concern as it is a fundamental prerequisite for any compliance monitoring."
    },
    {
        id: 29,
        question: "Which of the following is an audit reviewer's PRIMARY role with regard to evidence?",
        options: [
            "A. Ensuring appropriate statistical sampling methods were used.",
            "B. Ensuring evidence is labeled to show it was obtained from an approved source.",
            "C. Ensuring unauthorized individuals do not tamper with evidence after it has been captured.",
            "D. Ensuring evidence is sufficient to support audit conclusions."
        ],
        answer: "D",
        explanation: "The primary role of an audit reviewer regarding evidence is to ensure it is sufficient, appropriate, and reliable enough to support the audit conclusions. This is the fundamental quality check of audit evidence."
    },
    {
        id: 30,
        question: "When an intrusion into an organization's network is detected, which of the following should be done FIRST?",
        options: [
            "A. Contact law enforcement.",
            "B. Identify nodes that have been compromised.",
            "C. Block all compromised network nodes.",
            "D. Notify senior management."
        ],
        answer: "B",
        explanation: "The first step when an intrusion is detected is to identify which nodes have been compromised. This scoping activity is necessary before containment, escalation, or law enforcement notification can be performed effectively."
    },
    {
        id: 31,
        question: "An IS auditor is reviewing processes for importing market price data from external data providers. Which of the following findings should the auditor consider MOST critical?",
        options: [
            "A. The quality of the data is not monitored.",
            "B. The transfer protocol does not require authentication.",
            "C. Imported data is not disposed of frequently.",
            "D. The transfer protocol is not encrypted."
        ],
        answer: "B",
        explanation: "The transfer protocol not requiring authentication is the most critical finding because it means anyone could inject fraudulent market price data into the organization's systems, leading to potentially severe financial consequences."
    },
    {
        id: 32,
        question: "In a controlled application development environment, the MOST important segregation of duties should be between the person who implements changes into the production environment and the:",
        options: [
            "A. application programmer.",
            "B. quality assurance (QA) personnel.",
            "C. computer operator.",
            "D. systems programmer."
        ],
        answer: "A",
        explanation: "The most important segregation of duties is between the person who implements changes into production and the application programmer. If the same person writes and deploys code, unauthorized changes could go undetected."
    },
    {
        id: 33,
        question: "A small startup organization does not have the resources to implement segregation of duties. Which of the following is the MOST effective compensating control?",
        options: [
            "A. Rotation of log monitoring and analysis responsibilities.",
            "B. Additional management reviews and reconciliations.",
            "C. Mandatory vacations.",
            "D. Third-party assessments."
        ],
        answer: "B",
        explanation: "Additional management reviews and reconciliations are the most effective compensating control when segregation of duties cannot be implemented. They provide oversight and detection of errors or fraud that SoD would otherwise prevent."
    },
    {
        id: 34,
        question: "When planning an audit to assess application controls of a cloud-based system, it is MOST important for the IS auditor to understand the:",
        options: [
            "A. availability reports associated with the cloud-based system.",
            "B. architecture and cloud environment of the system.",
            "C. policies and procedures of the business area being audited.",
            "D. business process supported by the system."
        ],
        answer: "B",
        explanation: "Understanding the architecture and cloud environment of the system is most important for planning, as it determines the scope of controls that can be audited, the responsibilities shared between the organization and the cloud provider, and the applicable audit approach."
    },
    {
        id: 35,
        question: "Which of the following data would be used when performing a business impact analysis (BIA)?",
        options: [
            "A. Projected impact of current business on future business.",
            "B. Expected costs for recovering the business.",
            "C. Cost of regulatory compliance.",
            "D. Cost-benefit analysis of running the current business."
        ],
        answer: "B",
        explanation: "A BIA focuses on the impact of disruptions and the expected costs for recovering the business. It identifies critical functions and the resources required to restore them, informing recovery time and point objectives."
    },
    {
        id: 36,
        question: "Which of the following is the BEST indicator of the effectiveness of an organization's incident response program?",
        options: [
            "A. Number of successful penetration tests.",
            "B. Percentage of protected business applications.",
            "C. Number of security vulnerability patches.",
            "D. Financial impact per security event."
        ],
        answer: "D",
        explanation: "Financial impact per security event is the best indicator of incident response effectiveness. A lower financial impact suggests that incidents are being detected and contained quickly, demonstrating an effective response program."
    },
    {
        id: 37,
        question: "An organization recently implemented a cloud document storage solution and removed the ability for end users to save data to their local workstation hard drives. Which of the following findings should be the IS auditor's GREATEST concern?",
        options: [
            "A. Mobile devices are not encrypted.",
            "B. Users are not required to sign updated acceptable use agreements.",
            "C. The business continuity plan (BCP) was not updated.",
            "D. Users have not been trained on the new system."
        ],
        answer: "C",
        explanation: "The greatest concern is that the BCP was not updated to reflect the new cloud storage solution. In a disaster scenario, the organization may follow outdated recovery procedures that no longer apply, jeopardizing business continuity."
    },
    {
        id: 38,
        question: "Which of the following security measures will reduce the risk of propagation when a cyberattack occurs?",
        options: [
            "A. Data loss prevention (DLP) system.",
            "B. Perimeter firewall.",
            "C. Network segmentation.",
            "D. Web application firewall."
        ],
        answer: "C",
        explanation: "Network segmentation limits the spread of a cyberattack by isolating network zones. If one segment is compromised, segmentation prevents the attack from propagating to other parts of the network."
    },
    {
        id: 39,
        question: "An IS auditor notes that the previous year's disaster recovery test was not completed within the scheduled time frame due to insufficient hardware allocated by a third-party vendor. Which of the following provides the BEST evidence that adequate resources are now allocated to successfully recover the systems?",
        options: [
            "A. Hardware change management policy.",
            "B. An up-to-date RACI chart.",
            "C. Vendor memo indicating problem correction.",
            "D. Service level agreement (SLA)."
        ],
        answer: "D",
        explanation: "A service level agreement (SLA) with the vendor formally commits to specific resource levels and recovery timeframes, providing the best contractual evidence that adequate resources are now guaranteed for disaster recovery."
    },
    {
        id: 40,
        question: "When implementing Internet Protocol security (IPsec) architecture, the servers involved in application delivery:",
        options: [
            "A. channel access only through the public-facing firewall.",
            "B. channel access through authentication.",
            "C. communicate via Transport Layer Security (TLS).",
            "D. block authorized users from unauthorized activities."
        ],
        answer: "B",
        explanation: "In IPsec architecture, servers channel access through authentication to verify the identity of communicating parties before establishing secure communications, ensuring only authorized entities can access the servers."
    },
    {
        id: 41,
        question: "During audit fieldwork, an IS auditor learns that employees are allowed to connect their personal devices to company-owned computers. How can the auditor BEST validate that appropriate security controls are in place to prevent data loss?",
        options: [
            "A. Verify the data loss prevention (DLP) tool is properly configured by the organization.",
            "B. Review compliance with data loss and applicable mobile device user acceptance policies.",
            "C. Verify employees have received appropriate mobile device security awareness training.",
            "D. Conduct a walk-through to view results of an employee plugging in a device to transfer confidential data."
        ],
        answer: "D",
        explanation: "Conducting a walk-through and observing an actual test of a device connection provides the most direct evidence of whether controls are effective in preventing data loss. It tests the actual control in practice rather than relying on documentation or policy reviews."
    },
    {
        id: 42,
        question: "Management has requested a post-implementation review of a newly implemented purchasing package to determine to what extent business requirements are being met. Which of the following is MOST likely to be assessed?",
        options: [
            "A. Implementation methodology.",
            "B. Test results.",
            "C. Purchasing guidelines and policies.",
            "D. Results of live processing."
        ],
        answer: "D",
        explanation: "Results of live processing are the most relevant assessment for determining whether business requirements are being met after implementation. They provide real-world evidence of how the system is performing in the production environment."
    },
    {
        id: 43,
        question: "Which of the following is an advantage of using agile software development methodology over the waterfall methodology?",
        options: [
            "A. Quicker end user acceptance.",
            "B. Clearly defined business expectations.",
            "C. Quicker deliverables.",
            "D. Less funding required overall."
        ],
        answer: "C",
        explanation: "Agile methodology delivers working software in short iterations (sprints), resulting in quicker deliverables compared to waterfall, which delivers a complete product only at the end of the project. This allows for faster feedback and value realization."
    },
    {
        id: 44,
        question: "In an online application, which of the following would provide the MOST information about the transaction audit trail?",
        options: [
            "A. File layouts.",
            "B. Data architecture.",
            "C. System/process flowchart.",
            "D. Source code documentation."
        ],
        answer: "C",
        explanation: "A system/process flowchart provides the most comprehensive view of transaction flows, showing how transactions move through the system, where they are recorded, and what controls exist, making it most useful for understanding the audit trail."
    },
    {
        id: 45,
        question: "On a public-key cryptosystem when there is no previous knowledge between parties, which of the following will BEST help to prevent one person from using a fictitious key to impersonate someone else?",
        options: [
            "A. Send a certificate that can be verified by a certification authority with the public key.",
            "B. Encrypt the message containing the sender's public key, using the recipient's public key.",
            "C. Send the public key to the recipient prior to establishing the connection.",
            "D. Encrypt the message containing the sender's public key, using a private-key cryptosystem."
        ],
        answer: "A",
        explanation: "A digital certificate issued by a trusted certification authority (CA) binds a public key to an identity. This prevents key impersonation because the CA verifies the identity before issuing the certificate, providing assurance that the public key belongs to the claimed sender."
    },
    {
        id: 46,
        question: "The IS quality assurance (QA) group is responsible for:",
        options: [
            "A. monitoring the execution of computer processing tasks.",
            "B. designing procedures to protect data against accidental disclosure.",
            "C. ensuring that program changes adhere to established standards.",
            "D. ensuring that the output received from system processing is complete."
        ],
        answer: "C",
        explanation: "The IS QA group is responsible for ensuring that program changes adhere to established standards, including coding standards, testing requirements, and change management procedures, maintaining the quality of software deliverables."
    },
    {
        id: 47,
        question: "Which of the following approaches will ensure recovery time objectives (RTOs) are met for an organization's disaster recovery plan (DRP)?",
        options: [
            "A. Performing a full interruption test.",
            "B. Performing a parallel test.",
            "C. Performing a tabletop test.",
            "D. Performing a cyber-resilience test."
        ],
        answer: "A",
        explanation: "A full interruption test is the most rigorous DRP test, fully simulating a real disaster by shutting down production systems. It is the only test that definitively validates whether RTOs can actually be met in a real scenario."
    },
    {
        id: 48,
        question: "Which audit approach is MOST helpful in optimizing the use of IS audit resources?",
        options: [
            "A. Agile auditing.",
            "B. Continuous auditing.",
            "C. Risk-based auditing.",
            "D. Outsourced auditing."
        ],
        answer: "C",
        explanation: "Risk-based auditing focuses audit resources on the areas of highest risk, ensuring that time and effort are allocated where they can have the greatest impact. This is the most efficient use of limited audit resources."
    },
    {
        id: 49,
        question: "Which of the following would provide the MOST important input during the planning phase for an audit on the implementation of a bring your own device (BYOD) program?",
        options: [
            "A. Results of a risk assessment.",
            "B. Policies including BYOD acceptable use statements.",
            "C. Findings from prior audits.",
            "D. An inventory of personal devices to be connected to the corporate network."
        ],
        answer: "A",
        explanation: "Results of a risk assessment provide the most important input for audit planning because they identify the key risks associated with the BYOD program, which should drive the audit scope and objectives."
    },
    {
        id: 50,
        question: "An IS auditor concludes that logging and monitoring mechanisms within an organization are ineffective because central servers are not included within the central log repository. Which of the following audit procedures would have MOST likely identified this exception?",
        options: [
            "A. Comparing all servers included in the current central log repository with the listing used for the prior-year audit.",
            "B. Inspecting a sample of alerts generated from the central log repository.",
            "C. Comparing a list of all servers from the directory server against a list of all servers present in the central log repository.",
            "D. Inspecting a sample of alert settings configured in the central log repository."
        ],
        answer: "C",
        explanation: "Comparing the complete server list from the directory server against servers in the central log repository would directly identify any servers that are missing from the logging system, including the central servers."
    },
    {
        id: 51,
        question: "An IS auditor learns the organization has experienced several server failures in its distributed environment. Which of the following is the BEST recommendation to limit the potential impact of server failures in the future?",
        options: [
            "A. Failover power.",
            "B. Clustering.",
            "C. Parallel testing.",
            "D. Redundant pathways."
        ],
        answer: "B",
        explanation: "Clustering provides high availability by grouping multiple servers so that if one fails, another automatically takes over. This directly limits the impact of server failures by ensuring continuous service availability."
    },
    {
        id: 52,
        question: "During an ongoing audit, management requests a briefing on the findings to date. Which of the following is the IS auditor's BEST course of action?",
        options: [
            "A. Request management wait until a final report is ready for discussion.",
            "B. Request the auditee provide management responses.",
            "C. Review working papers with the auditee.",
            "D. Present observations for discussion only."
        ],
        answer: "D",
        explanation: "Presenting observations for discussion only is the best approach for an interim briefing. Since fieldwork is not complete, findings are preliminary and should be presented as observations to avoid premature conclusions while keeping management informed."
    },
    {
        id: 53,
        question: "Which of the following BEST demonstrates that IT strategy is aligned with organizational goals and objectives?",
        options: [
            "A. IT strategies are communicated to all business stakeholders.",
            "B. Organizational strategies are communicated to the chief information officer (CIO).",
            "C. The chief information officer (CIO) is involved in approving the organizational strategies.",
            "D. Business stakeholders are involved in approving the IT strategy."
        ],
        answer: "D",
        explanation: "Business stakeholders being involved in approving the IT strategy best demonstrates alignment, as it ensures the IT strategy has been reviewed and endorsed by those responsible for organizational objectives, confirming mutual agreement on direction."
    },
    {
        id: 54,
        question: "An accounting department uses a spreadsheet to calculate sensitive financial transactions. Which of the following is the MOST important control for maintaining the security of data in the spreadsheet?",
        options: [
            "A. A separate copy of the spreadsheet is routinely backed up.",
            "B. Access to the spreadsheet is given only to those who require access.",
            "C. There is a reconciliation process between the spreadsheet and the finance system.",
            "D. The spreadsheet is locked down to avoid inadvertent changes."
        ],
        answer: "B",
        explanation: "Restricting access to only those who require it (least privilege) is the most important security control, as it prevents unauthorized viewing or modification of sensitive financial data."
    },
    {
        id: 55,
        question: "Which of the following is the MOST important responsibility of user departments associated with program changes?",
        options: [
            "A. Analyzing change requests.",
            "B. Providing unit test data.",
            "C. Updating documentation to reflect latest changes.",
            "D. Approving changes before implementation."
        ],
        answer: "D",
        explanation: "Approving changes before implementation is the most important responsibility of user departments, as it ensures that only authorized and properly reviewed changes are implemented into production systems."
    },
    {
        id: 56,
        question: "Which of the following would be of GREATEST concern when reviewing an organization's security information and event management (SIEM) solution?",
        options: [
            "A. SIEM reporting is ad hoc.",
            "B. SIEM reporting is customized.",
            "C. SIEM configuration is reviewed annually.",
            "D. The SIEM is decentralized."
        ],
        answer: "D",
        explanation: "A decentralized SIEM is the greatest concern as it creates silos of security event data, preventing comprehensive visibility and correlation across the organization. This significantly reduces the SIEM's ability to detect complex, multi-vector attacks."
    },
    {
        id: 57,
        question: "A manager identifies active privileged accounts belonging to staff who have left the organization. Which of the following is the threat actor in this scenario?",
        options: [
            "A. Hacktivists.",
            "B. Deleted log data.",
            "C. Terminated staff.",
            "D. Unauthorized access."
        ],
        answer: "C",
        explanation: "The threat actor is the terminated staff, as they are the entity whose credentials could be misused to gain unauthorized access. The active privileged accounts represent the vulnerability, while unauthorized access is the threat action."
    },
    {
        id: 58,
        question: "An IS auditor is evaluating the access controls for a shared customer relationship management (CRM) system. Which of the following would be the GREATEST concern?",
        options: [
            "A. Audit logging is not enabled.",
            "B. Single sign-on is not enabled.",
            "C. Complex passwords are not required.",
            "D. Security baseline is not consistently applied."
        ],
        answer: "D",
        explanation: "A security baseline not being consistently applied means some instances of the CRM system may be inadequately secured, creating exploitable vulnerabilities. Inconsistent controls create gaps that can be targeted by attackers."
    },
    {
        id: 59,
        question: "Which of the following findings from an IT governance review should be of GREATEST concern?",
        options: [
            "A. IT value analysis has not been completed.",
            "B. All IT services are provided by third parties.",
            "C. IT supports two different operating systems.",
            "D. The IT budget is not monitored."
        ],
        answer: "D",
        explanation: "An unmonitored IT budget is the greatest concern as it indicates a lack of financial governance and control over IT spending, which can lead to waste, fraud, and misalignment with organizational objectives."
    },
    {
        id: 60,
        question: "What would be an IS auditor's BEST course of action when an auditee is unable to close all audit recommendations by the time of the follow-up audit?",
        options: [
            "A. Ensure the open issues are retained in the audit results.",
            "B. Recommend compensating controls for open issues.",
            "C. Evaluate the residual risk due to open issues.",
            "D. Terminate the follow-up because open issues are not resolved."
        ],
        answer: "C",
        explanation: "Evaluating the residual risk due to open issues is the best course of action, as it allows the auditor to assess the current risk exposure and determine whether management's inaction is acceptable or requires escalation."
    },
    {
        id: 61,
        question: "Which of the following is the BEST performance indicator for the effectiveness of an incident management program?",
        options: [
            "A. Incident alert meantime.",
            "B. Number of incidents reported.",
            "C. Average time between incidents.",
            "D. Incident resolution meantime."
        ],
        answer: "D",
        explanation: "Incident resolution meantime (mean time to resolve) is the best indicator of incident management effectiveness as it directly measures how quickly incidents are resolved, reflecting the program's efficiency and capability."
    },
    {
        id: 62,
        question: "Backups will MOST effectively minimize a disruptive incident's impact on a business if they are:",
        options: [
            "A. taken according to recovery point objectives (RPOs).",
            "B. scheduled according to the service delivery objectives.",
            "C. performed by automated backup software on a fixed schedule.",
            "D. stored on write-once read-many media."
        ],
        answer: "A",
        explanation: "Taking backups according to RPOs ensures the frequency and timing of backups aligns with how much data loss the business can tolerate. This directly links backup strategy to business recovery requirements."
    },
    {
        id: 63,
        question: "An IS audit reveals that an organization is not proactively addressing known vulnerabilities. Which of the following should the IS auditor recommend the organization do FIRST?",
        options: [
            "A. Ensure the intrusion prevention system (IPS) is effective.",
            "B. Verify the disaster recovery plan (DRP) has been tested.",
            "C. Assess the security risks to the business.",
            "D. Confirm the incident response team understands the issue."
        ],
        answer: "C",
        explanation: "Assessing the security risks to the business should be the first step, as it establishes the priority and severity of unaddressed vulnerabilities, enabling the organization to focus remediation efforts on the most critical risks first."
    },
    {
        id: 64,
        question: "An IS auditor has completed the fieldwork phase of a network security review and is preparing the initial draft of the audit report. Which of the following findings should be ranked as the HIGHEST risk?",
        options: [
            "A. Network penetration tests are not performed.",
            "B. The network firewall policy has not been approved by the information security officer.",
            "C. Network firewall rules have not been documented.",
            "D. The network device inventory is incomplete."
        ],
        answer: "A",
        explanation: "Not performing network penetration tests means the organization has no assurance about the effectiveness of its network security controls. This represents the highest risk as unknown vulnerabilities could be actively exploited without detection."
    },
    {
        id: 65,
        question: "Which of the following is the PRIMARY advantage of parallel processing for a new system implementation?",
        options: [
            "A. Assurance that the new system meets functional requirements.",
            "B. Significant cost savings over other system implementation approaches.",
            "C. More time for users to complete training for the new system.",
            "D. Assurance that the new system meets performance requirements."
        ],
        answer: "A",
        explanation: "The primary advantage of parallel processing is the assurance that the new system meets functional requirements by comparing outputs from both the old and new systems simultaneously, validating accuracy and completeness."
    },
    {
        id: 66,
        question: "During an internal audit of automated controls, an IS auditor identifies that the integrity of data transfer between systems has not been tested since successful implementation two years ago. Which of the following should the auditor do NEXT?",
        options: [
            "A. Review previous system interface testing records.",
            "B. Document the finding in the audit report.",
            "C. Review relevant system changes.",
            "D. Review IT testing policies and procedures."
        ],
        answer: "C",
        explanation: "Reviewing relevant system changes is the next step because system changes since implementation may have introduced new risks to data transfer integrity. This context is essential before documenting a finding or recommending action."
    },
    {
        id: 67,
        question: "The MAIN benefit of using an integrated test facility (ITF) as an online auditing technique is that it enables:",
        options: [
            "A. the integration of financial and audit tests.",
            "B. auditors to test without impacting production data.",
            "C. a cost-effective approach to application controls audit.",
            "D. auditors to investigate fraudulent transactions."
        ],
        answer: "B",
        explanation: "The main benefit of ITF is that auditors can test application controls by introducing test transactions into a live system without affecting production data, allowing real-time testing in the production environment."
    },
    {
        id: 68,
        question: "Which of the following should be the MOST important consideration when conducting a review of IT portfolio management?",
        options: [
            "A. Adherence to best practice and industry approved methodologies.",
            "B. Frequency of meetings where the business discusses the IT portfolio.",
            "C. Assignment of responsibility for each project to an IT team member.",
            "D. Controls to minimize risk and maximize value for the IT portfolio."
        ],
        answer: "D",
        explanation: "The most important consideration in IT portfolio management is that controls exist to minimize risk and maximize value. Portfolio management exists to optimize the balance of investment, risk, and return across IT initiatives."
    },
    {
        id: 69,
        question: "Which of the following would BEST facilitate the successful implementation of an IT-related framework?",
        options: [
            "A. Establishing committees to support and oversee framework activities.",
            "B. Documenting IT-related policies and procedures.",
            "C. Aligning the framework to industry best practices.",
            "D. Involving appropriate business representation within the framework."
        ],
        answer: "D",
        explanation: "Involving appropriate business representation is most critical because business buy-in and participation ensures the framework addresses real business needs and has the organizational support necessary for successful implementation."
    },
    {
        id: 70,
        question: "What is the MAIN reason to use incremental backups?",
        options: [
            "A. To increase backup resiliency and redundancy.",
            "B. To reduce costs associated with backups.",
            "C. To improve key availability metrics.",
            "D. To minimize the backup time and resources."
        ],
        answer: "D",
        explanation: "The main reason for incremental backups is to minimize backup time and resource consumption by only backing up data that has changed since the last backup, rather than copying all data each time."
    },
    {
        id: 71,
        question: "When auditing the security architecture of an online application, an IS auditor should FIRST review the:",
        options: [
            "A. location of the firewall within the network.",
            "B. firewall standards.",
            "C. firmware version of the firewall.",
            "D. configuration of the firewall."
        ],
        answer: "B",
        explanation: "The auditor should first review the firewall standards to understand what the firewall configuration should look like before evaluating the actual configuration. Standards provide the benchmark against which compliance is measured."
    },
    {
        id: 72,
        question: "An organization is planning an acquisition and has engaged an IS auditor to evaluate the IT governance framework of the target company. Which of the following would be MOST helpful in determining the effectiveness of the framework?",
        options: [
            "A. Recent third-party IS audit reports.",
            "B. Current and previous internal IS audit reports.",
            "C. IT performance benchmarking reports with competitors.",
            "D. Self-assessment reports of IT capability and maturity."
        ],
        answer: "A",
        explanation: "Recent third-party IS audit reports provide independent, objective assessments of the target company's IT governance framework, making them the most reliable source for evaluating effectiveness without bias."
    },
    {
        id: 73,
        question: "Due to limited storage capacity, an organization has decided to reduce the actual retention period for media containing completed low-value transactions. Which of the following is MOST important for the organization to ensure?",
        options: [
            "A. The policy includes a strong risk-based approach.",
            "B. The retention period complies with data owner responsibilities.",
            "C. The retention period allows for review during the year-end audit.",
            "D. The total transaction amount has no impact on financial reporting."
        ],
        answer: "D",
        explanation: "It is most important to ensure that low-value transactions being deleted early have no impact on financial reporting, as premature disposal of financially relevant data could create compliance and audit issues."
    },
    {
        id: 74,
        question: "Which of the following should an IS auditor be MOST concerned with during a post-implementation review?",
        options: [
            "A. The system does not have a maintenance plan.",
            "B. The system contains several minor defects.",
            "C. The system deployment was delayed by three weeks.",
            "D. The system was over budget by 15%."
        ],
        answer: "A",
        explanation: "The absence of a maintenance plan is the greatest concern because without it, the system will degrade over time, with defects unresolved and updates not applied, jeopardizing long-term system integrity and availability."
    },
    {
        id: 75,
        question: "Which of the following is the PRIMARY basis on which audit objectives are established?",
        options: [
            "A. Audit risk.",
            "B. Consideration of risks.",
            "C. Assessment of prior audits.",
            "D. Business strategy."
        ],
        answer: "B",
        explanation: "Audit objectives are primarily established based on the consideration of risks. The audit scope and objectives should be driven by the risks relevant to the area being audited, ensuring the audit addresses the most significant concerns."
    },
    {
        id: 76,
        question: "An IS auditor is following up on prior period items and finds management did not address an audit finding. Which of the following should be the IS auditor's NEXT course of action?",
        options: [
            "A. Note the exception in a new report as the item was not addressed by management.",
            "B. Interview management to determine why the finding was not addressed.",
            "C. Recommend alternative solutions to address the repeat finding.",
            "D. Conduct a risk assessment of the repeat finding."
        ],
        answer: "B",
        explanation: "The IS auditor should first interview management to understand why the finding was not addressed. There may be legitimate reasons (e.g., risk acceptance, resource constraints) that should be understood before drawing conclusions or escalating."
    },
    {
        id: 77,
        question: "The PRIMARY focus of a post-implementation review is to verify that:",
        options: [
            "A. enterprise architecture (EA) has been complied with.",
            "B. user requirements have been met.",
            "C. acceptance testing has been properly executed.",
            "D. user access controls have been adequately designed."
        ],
        answer: "B",
        explanation: "The primary focus of a post-implementation review is to verify that user requirements have been met by the implemented system. It assesses whether the system delivers the expected business value and functionality."
    },
    {
        id: 78,
        question: "Which of the following BEST protects an organization's proprietary code during a joint-development activity involving a third party?",
        options: [
            "A. Privacy agreement.",
            "B. Statement of work (SOW).",
            "C. Nondisclosure agreement (NDA).",
            "D. Service level agreement (SLA)."
        ],
        answer: "C",
        explanation: "A nondisclosure agreement (NDA) legally prohibits the third party from sharing or using the organization's proprietary code outside of the agreed purposes, providing the best protection for intellectual property during joint development."
    },
    {
        id: 79,
        question: "During which process is regression testing MOST commonly used?",
        options: [
            "A. Unit testing.",
            "B. System modification.",
            "C. Stress testing.",
            "D. Program development."
        ],
        answer: "B",
        explanation: "Regression testing is most commonly used during system modifications to verify that changes have not broken previously working functionality. It ensures existing features continue to work correctly after updates."
    },
    {
        id: 80,
        question: "Which of the following should be of GREATEST concern to an IS auditor reviewing a network printer disposal process?",
        options: [
            "A. Business units are allowed to dispose of printers directly to authorized vendors.",
            "B. Inoperable printers are stored in an unsecured area.",
            "C. Disposal policies and procedures are not consistently implemented.",
            "D. Evidence is not available to verify printer hard drives have been sanitized prior to disposal."
        ],
        answer: "D",
        explanation: "The greatest concern is that there is no evidence that printer hard drives have been sanitized. Modern network printers store copies of documents, so unsanitized drives could expose sensitive corporate data when disposed of."
    },
    {
        id: 81,
        question: "Which of the following activities provides an IS auditor with the MOST insight regarding potential single person dependencies that might exist within the organization?",
        options: [
            "A. Reviewing vacation patterns.",
            "B. Interviewing senior IT management.",
            "C. Mapping IT processes to roles.",
            "D. Reviewing user activity logs."
        ],
        answer: "C",
        explanation: "Mapping IT processes to roles reveals where single individuals are the only resource for critical processes, directly identifying single person dependencies. Vacation patterns may indicate dependencies but are less systematic."
    },
    {
        id: 82,
        question: "Which of the following metrics is the BEST indicator of the performance of a web application?",
        options: [
            "A. Server thread count.",
            "B. Server uptime.",
            "C. HTTP server error rate.",
            "D. Average response time."
        ],
        answer: "D",
        explanation: "Average response time is the best indicator of web application performance from a user perspective, as it directly measures how quickly the application responds to requests, reflecting the user experience."
    },
    {
        id: 83,
        question: "An IS auditor suspects an organization's computer may have been used to commit a crime. Which of the following is the auditor's BEST course of action?",
        options: [
            "A. Contact the incident response team to conduct an investigation.",
            "B. Advise management of the crime after the investigation.",
            "C. Examine the computer to search for evidence supporting the suspicions.",
            "D. Notify local law enforcement of the potential crime before further investigation."
        ],
        answer: "A",
        explanation: "Contacting the incident response team is the best course of action. The IR team has the expertise and authority to investigate properly while preserving evidence and chain of custody. The IS auditor should not independently examine evidence, as this could compromise any subsequent legal proceedings."
    },
    {
        id: 84,
        question: "An IS auditor follows up on a recent security incident and finds the incident response was not adequate. Which of the following findings should be considered MOST critical?",
        options: [
            "A. The attack could not be traced back to the originating person.",
            "B. The attack was not automatically blocked by the intrusion detection system (IDS).",
            "C. Appropriate response documentation was not maintained.",
            "D. The security weakness facilitating the attack was not identified."
        ],
        answer: "D",
        explanation: "Not identifying the security weakness that facilitated the attack is the most critical finding because without understanding the root cause, the organization remains vulnerable to the same attack recurring."
    },
    {
        id: 85,
        question: "Which of the following is the MOST important prerequisite for the protection of physical information assets in a data center?",
        options: [
            "A. Knowledge of the IT staff regarding data protection requirements.",
            "B. Complete and accurate list of information assets that have been deployed.",
            "C. Segregation of duties between staff ordering and staff receiving information assets.",
            "D. Availability and testing of onsite backup generators."
        ],
        answer: "B",
        explanation: "A complete and accurate inventory of information assets is the most important prerequisite. Without knowing what assets exist and where they are located, it is impossible to effectively protect them."
    },
    {
        id: 86,
        question: "During an audit of a reciprocal disaster recovery agreement between two companies, the IS auditor would be MOST concerned with the:",
        options: [
            "A. allocation of resources during an emergency.",
            "B. maintenance of hardware and software compatibility.",
            "C. differences in IS policies and procedures.",
            "D. frequency of system testing."
        ],
        answer: "B",
        explanation: "Maintaining hardware and software compatibility is the most critical concern in a reciprocal agreement. If the hardware or software at the backup site is incompatible with the disaster-affected organization's systems, recovery may be impossible."
    },
    {
        id: 87,
        question: "Which of the following BEST indicates the effectiveness of an organization's risk management program?",
        options: [
            "A. Residual risk is minimized.",
            "B. Inherent risk is eliminated.",
            "C. Control risk is minimized.",
            "D. Overall risk is quantified."
        ],
        answer: "A",
        explanation: "Minimized residual risk best indicates risk management effectiveness. Residual risk is what remains after controls are applied; minimizing it shows that the risk management program is successfully reducing risk to acceptable levels. Inherent risk cannot be eliminated."
    },
    {
        id: 88,
        question: "Providing security certification for a new system should include which of the following prior to the system's implementation?",
        options: [
            "A. End-user authorization to use the system in production.",
            "B. Testing of the system within the production environment.",
            "C. An evaluation of the configuration management practices.",
            "D. External audit sign-off on financial controls."
        ],
        answer: "C",
        explanation: "An evaluation of configuration management practices is essential prior to certification, ensuring that the system has been configured securely and that processes exist to maintain secure configurations over time."
    },
    {
        id: 89,
        question: "Which of the following should be the FIRST step when developing a data loss prevention (DLP) solution for a large organization?",
        options: [
            "A. Create the DLP policies and templates.",
            "B. Conduct a threat analysis against sensitive data usage.",
            "C. Conduct a data inventory and classification exercise.",
            "D. Identify approved data workflows across the enterprise."
        ],
        answer: "C",
        explanation: "Conducting a data inventory and classification exercise must be the first step. Without knowing what sensitive data exists and where it is located, it is impossible to define meaningful DLP policies or identify data workflows."
    },
    {
        id: 90,
        question: "Which of the following activities would allow an IS auditor to maintain independence while facilitating a control self-assessment (CSA)?",
        options: [
            "A. Implementing the remediation plan.",
            "B. Developing the remediation plan.",
            "C. Developing the CSA questionnaire.",
            "D. Partially completing the CSA."
        ],
        answer: "C",
        explanation: "Developing the CSA questionnaire allows the IS auditor to facilitate the process without compromising independence. The auditor helps design the tool but does not make management decisions or complete the assessment on management's behalf."
    },
    {
        id: 91,
        question: "Which of the following is MOST important for an IS auditor to confirm when reviewing an organization's plans to implement robotic process automation (RPA) to automate routine business tasks?",
        options: [
            "A. A benchmarking exercise of industry peers who use RPA has been completed.",
            "B. The end-to-end process is understood and documented.",
            "C. A request for proposal (RFP) has been issued to qualified vendors.",
            "D. Roles and responsibilities are defined for the business processes in scope."
        ],
        answer: "B",
        explanation: "Ensuring the end-to-end process is understood and documented is most critical before implementing RPA. Without a thorough understanding of the process, automation may introduce errors, replicate inefficiencies, or miss critical exception handling."
    },
    {
        id: 92,
        question: "Which of the following BEST facilitates the legal process in the event of an incident?",
        options: [
            "A. Right to perform e-discovery.",
            "B. Preserving the chain of custody.",
            "C. Results of a root cause analysis.",
            "D. Advice from legal counsel."
        ],
        answer: "B",
        explanation: "Preserving the chain of custody ensures that evidence is collected, handled, and stored in a manner that maintains its integrity and admissibility in legal proceedings. Without proper chain of custody, evidence may be inadmissible in court."
    },
    {
        id: 93,
        question: "Cross-site scripting (XSS) attacks are BEST prevented through:",
        options: [
            "A. secure coding practices.",
            "B. use of common industry frameworks.",
            "C. a three-tier web architecture.",
            "D. application firewall policy settings."
        ],
        answer: "A",
        explanation: "XSS attacks are best prevented through secure coding practices, specifically input validation and output encoding. These address the root cause of XSS vulnerabilities, whereas firewalls and frameworks provide secondary layers of defense."
    },
    {
        id: 94,
        question: "Prior to a follow-up engagement, an IS auditor learns that management has decided to accept a level of residual risk related to an audit finding without remediation. The IS auditor is concerned about management's decision. Which of the following should be the IS auditor's NEXT course of action?",
        options: [
            "A. Present the issue to executive management.",
            "B. Report the disagreement to the board.",
            "C. Accept management's decision and continue the follow-up.",
            "D. Report the issue to IS audit management."
        ],
        answer: "D",
        explanation: "The IS auditor should first report the concern to IS audit management. It is management's prerogative to accept risk, but the auditor has a professional obligation to escalate concerns internally before taking further action."
    },
    {
        id: 95,
        question: "An IS auditor observes that a bank's web page address is prefixed 'https://'. The auditor would be correct to conclude that:",
        options: [
            "A. the bank has established a virtual private network (VPN).",
            "B. transactions are encrypted.",
            "C. the bank has a restricted Internet protocol (IP) address.",
            "D. the customer is connected to the bank's intranet."
        ],
        answer: "B",
        explanation: "The 'https://' prefix indicates that the connection uses SSL/TLS encryption, meaning transactions between the browser and the server are encrypted. It does not indicate a VPN, restricted IP, or intranet connection."
    },
    {
        id: 96,
        question: "Which of the following is the BEST control to mitigate attacks that redirect Internet traffic to an unauthorized website?",
        options: [
            "A. Utilize a network-based firewall.",
            "B. Conduct regular user security awareness training.",
            "C. Enforce a strong password policy meeting complexity requirements.",
            "D. Perform domain name system (DNS) server security hardening."
        ],
        answer: "D",
        explanation: "DNS server security hardening best mitigates DNS-based attacks (such as DNS poisoning or hijacking) that redirect traffic to unauthorized websites. Hardening the DNS server prevents attackers from manipulating name resolution."
    },
    {
        id: 97,
        question: "During a follow-up audit, an IS auditor learns that some key management personnel have been replaced since the original audit, and current management has decided not to implement some previously accepted recommendations. What is the auditor's BEST course of action?",
        options: [
            "A. Retest the control.",
            "B. Notify the audit manager.",
            "C. Close the audit finding.",
            "D. Notify the chair of the audit committee."
        ],
        answer: "B",
        explanation: "Notifying the audit manager is the best immediate course of action. The audit manager should be aware of management's reversal on accepted recommendations and can determine the appropriate escalation or reporting actions."
    },
    {
        id: 98,
        question: "An organization wants to classify database tables according to its data classification scheme. From an IS auditor's perspective, the tables should be classified based on the:",
        options: [
            "A. specific functional contents of each single table.",
            "B. frequency of updates to the table.",
            "C. number of end users with access to the table.",
            "D. descriptions of column names in the table."
        ],
        answer: "A",
        explanation: "Database tables should be classified based on the specific functional contents of each table, as classification should reflect the sensitivity and nature of the data stored, regardless of update frequency or access counts."
    },
    {
        id: 99,
        question: "Management is concerned about sensitive information being intentionally or unintentionally emailed as attachments outside the organization by employees. What is the MOST important task before implementing any associated email controls?",
        options: [
            "A. Provide notification to employees about possible email monitoring.",
            "B. Develop an information classification scheme.",
            "C. Develop an acceptable use policy for end-user computing (EUC).",
            "D. Require all employees to sign nondisclosure agreements (NDAs)."
        ],
        answer: "B",
        explanation: "Developing an information classification scheme is the most important prerequisite. Without knowing which information is sensitive and should be protected, it is impossible to implement effective email controls or define what constitutes a violation."
    },
    {
        id: 100,
        question: "While auditing a small organization's data classification processes and procedures, an IS auditor noticed that data is often classified at the incorrect level. What is the MOST effective way for the organization to improve this situation?",
        options: [
            "A. Conduct awareness presentations and seminars for information classification policies.",
            "B. Use automatic document classification based on content.",
            "C. Have IT security staff conduct targeted training for data owners.",
            "D. Publish the data classification policy on the corporate web portal."
        ],
        answer: "B",
        explanation: "Automatic document classification based on content is the most effective solution as it removes the human error element from the classification process. It ensures consistent classification regardless of individual knowledge or judgment."
    },
    {
        id: 101,
        question: "An IS auditor finds that a key Internet-facing system is vulnerable to attack and that patches are not available. What should the auditor recommend be done FIRST?",
        options: [
            "A. Implement additional firewalls to protect the system.",
            "B. Decommission the server.",
            "C. Implement a new system that can be patched.",
            "D. Evaluate the associated risk."
        ],
        answer: "D",
        explanation: "The first step is to evaluate the associated risk to understand the severity and likelihood of exploitation. This informs the appropriate response, whether that is implementing compensating controls, decommissioning, or accepting the risk."
    },
    {
        id: 102,
        question: "During a review of an organization's network threat response process, the IS auditor noticed that the majority of alerts were closed without resolution. Management responded that those alerts were unworkable due to lack of actionable intelligence, and therefore the support team is allowed to close them. What is the BEST way for the auditor to address this situation?",
        options: [
            "A. Further review closed unactioned alerts to identify mishandling of threats.",
            "B. Reopen unactioned alerts and report to the audit committee.",
            "C. Recommend that management enhance the policy and improve threat awareness training.",
            "D. Omit the finding from the report as this practice is in compliance with the current policy."
        ],
        answer: "C",
        explanation: "Recommending that management enhance the policy and improve threat awareness training addresses the root cause — the lack of actionable intelligence and inadequate alert triage processes — rather than just addressing individual incidents."
    },
    {
        id: 103,
        question: "Which of the following BEST helps to ensure data integrity across system interfaces?",
        options: [
            "A. Reconciliations.",
            "B. Environment segregation.",
            "C. Access controls.",
            "D. System backups."
        ],
        answer: "A",
        explanation: "Reconciliations compare data between systems at interface points to detect discrepancies, directly ensuring data integrity across interfaces. They identify data loss, corruption, or unauthorized modifications during transfer."
    },
    {
        id: 104,
        question: "Due to system limitations, segregation of duties (SoD) cannot be enforced in an accounts payable system. Which of the following is the IS auditor's BEST recommendation for a compensating control?",
        options: [
            "A. Require written authorization for all payment transactions.",
            "B. Review payment transaction history.",
            "C. Reconcile payment transactions with invoices.",
            "D. Restrict payment authorization to senior staff members."
        ],
        answer: "C",
        explanation: "Reconciling payment transactions with invoices is the best compensating control because it detects unauthorized or fraudulent payments by comparing what was paid against approved invoices, providing detection where prevention through SoD is not possible."
    },
    {
        id: 105,
        question: "Spreadsheets are used to calculate project cost estimates. Totals for each cost category are then keyed into the job-costing system. What is the BEST control to ensure that data is accurately entered into the system?",
        options: [
            "A. Display back of project detail after entry.",
            "B. Reconciliation of total amounts by project.",
            "C. Reasonableness checks for each cost type.",
            "D. Validity checks, preventing entry of character data."
        ],
        answer: "B",
        explanation: "Reconciliation of total amounts by project is the best control to ensure accurate data entry, as it compares the spreadsheet totals with those entered into the job-costing system, detecting any discrepancies introduced during manual keying."
    },
    {
        id: 106,
        question: "An organization plans to receive an automated data feed into its enterprise data warehouse from a third-party service provider. Which of the following would be the BEST way to prevent accepting bad data?",
        options: [
            "A. Purchase data cleansing tools from a reputable vendor.",
            "B. Appoint data quality champions across the organization.",
            "C. Obtain error codes indicating failed data feeds.",
            "D. Implement business rules to reject invalid data."
        ],
        answer: "D",
        explanation: "Implementing business rules to reject invalid data is the best preventive control, as it automatically validates incoming data against defined criteria before it enters the data warehouse, preventing bad data from contaminating the system."
    },
    {
        id: 107,
        question: "Which task should an IS auditor complete FIRST during the preliminary planning phase of a database security review?",
        options: [
            "A. Determine which databases will be in scope.",
            "B. Identify the most critical database controls.",
            "C. Evaluate the types of databases being used.",
            "D. Perform a business impact analysis (BIA)."
        ],
        answer: "A",
        explanation: "Determining which databases will be in scope must be done first during planning. Without defining scope, the auditor cannot identify relevant controls, assess risk, or allocate resources appropriately."
    },
    {
        id: 108,
        question: "Which of the following is an IS auditor's GREATEST concern when an organization does not regularly update software on individual workstations in the internal environment?",
        options: [
            "A. The organization may not be in compliance with licensing agreements.",
            "B. System functionality may not meet business requirements.",
            "C. The system may have version control issues.",
            "D. The organization may be more susceptible to cyber-attacks."
        ],
        answer: "D",
        explanation: "The greatest concern is increased susceptibility to cyber-attacks. Unpatched workstations have known vulnerabilities that attackers can exploit, representing a significant security risk compared to compliance or functionality concerns."
    },
    {
        id: 109,
        question: "An organization has assigned two new IS auditors to audit a new system implementation. One of the auditors has an IT-related degree, and one has a business degree. Which of the following is MOST important to meet the IS audit standard for proficiency?",
        options: [
            "A. The standard is met as long as a supervisor reviews the new auditors' work.",
            "B. The standard is met as long as one member has a globally recognized audit certification.",
            "C. Team member assignments must be based on individual competencies.",
            "D. Technical co-sourcing must be used to help the new staff."
        ],
        answer: "C",
        explanation: "IS audit standards require that assignments be based on individual competencies. The team must collectively possess the knowledge and skills required to perform the audit, with each member assigned to tasks matching their competencies."
    },
    {
        id: 110,
        question: "Which of the following is a social engineering attack method?",
        options: [
            "A. A hacker walks around an office building using scanning tools to search for a wireless network to gain access.",
            "B. An employee is induced to reveal confidential IP addresses and passwords by answering questions over the phone.",
            "C. An unauthorized person attempts to gain access to secure premises by following an authorized person through a secure door.",
            "D. An intruder eavesdrops and collects sensitive information flowing through the network and sells it to third parties."
        ],
        answer: "B",
        explanation: "Social engineering manipulates people into divulging confidential information. An employee being induced to reveal passwords over the phone is a classic social engineering (phishing/vishing) attack. Option C is tailgating/piggybacking, and options A and D are technical attacks."
    },
    {
        id: 111,
        question: "Which of the following will BEST ensure that a proper cutoff has been established to reinstate transactions and records to their condition just prior to a computer system failure?",
        options: [
            "A. Rotating backup copies of transaction files offsite.",
            "B. Ensuring bisynchronous capabilities on all transmission lines.",
            "C. Maintaining system console logs in electronic format.",
            "D. Using a database management system (DBMS) to dynamically back-out partially processed transactions."
        ],
        answer: "D",
        explanation: "A DBMS with rollback capability dynamically backs out partially processed transactions, ensuring data is restored to a consistent state at the point of failure. This provides the most accurate and reliable cutoff for recovery."
    },
    {
        id: 112,
        question: "Which of the following fire suppression systems needs to be combined with an automatic switch to shut down the electricity supply in the event of activation?",
        options: [
            "A. FM-200.",
            "B. Dry pipe.",
            "C. Carbon dioxide.",
            "D. Halon."
        ],
        answer: "C",
        explanation: "Carbon dioxide fire suppression systems displace oxygen and can be lethal to humans. They must be combined with an automatic electricity shutoff to prevent electrical hazards and ensure safety, as CO2 is also a conductor risk in live electrical environments."
    },
    {
        id: 113,
        question: "Which of the following is the PRIMARY purpose of a post-implementation review?",
        options: [
            "A. To ensure project resources were optimized.",
            "B. To ensure project deliverables were provided on time.",
            "C. To determine whether expected benefits were realized from a project.",
            "D. To calculate a project's actual cost against the projected cost."
        ],
        answer: "C",
        explanation: "The primary purpose of a post-implementation review is to determine whether the expected benefits were realized. This validates the business case and informs future project investment decisions."
    },
    {
        id: 114,
        question: "An organization's security policy mandates that all new employees must receive appropriate security awareness training. Which of the following metrics would BEST assure compliance with this policy?",
        options: [
            "A. Number of new hires who have violated enterprise security policies.",
            "B. Percentage of new hires that have completed the training.",
            "C. Number of reported incidents by new hires.",
            "D. Percentage of new hires who report incidents."
        ],
        answer: "B",
        explanation: "The percentage of new hires that have completed the training directly measures compliance with the policy mandate. It is the most straightforward metric for verifying that the policy requirement is being met."
    },
    {
        id: 115,
        question: "Which of the following business continuity activities prioritizes the recovery of critical functions?",
        options: [
            "A. Business impact analysis (BIA).",
            "B. Risk assessment.",
            "C. Business continuity plan (BCP) testing.",
            "D. Disaster recovery plan (DRP) testing."
        ],
        answer: "A",
        explanation: "A Business Impact Analysis (BIA) identifies and prioritizes critical business functions based on the impact of their disruption, determining recovery time objectives and recovery point objectives. It is the foundation for prioritizing recovery activities."
    },
    {
        id: 116,
        question: "An IS auditor found that a company executive is encouraging employee use of social networking sites for business purposes. Which of the following recommendations would BEST help to reduce the risk of data leakage?",
        options: [
            "A. Requiring policy acknowledgment and nondisclosure agreements (NDAs) signed by employees.",
            "B. Monitoring employees' social networking usage.",
            "C. Establishing strong access controls on confidential data.",
            "D. Providing education and guidelines to employees on use of social networking sites."
        ],
        answer: "D",
        explanation: "Providing education and guidelines to employees on the use of social networking sites is the best recommendation, as it empowers employees to make informed decisions about what to share, directly addressing the behavioral risk of data leakage."
    },
    {
        id: 117,
        question: "Which of the following is the MOST efficient way to assess the controls in a service provider's environment?",
        options: [
            "A. Review testing performed by the service provider's internal audit department.",
            "B. Require the service provider to conduct control self-assessments (CSAs).",
            "C. Review the service provider's master service agreement (MSA).",
            "D. Obtain an independent auditor's report from the service provider."
        ],
        answer: "D",
        explanation: "Obtaining an independent auditor's report (such as SOC 2) is the most efficient and reliable method, as it provides an independent, professional assessment of the service provider's controls without requiring the organization to conduct its own audit."
    },
    {
        id: 118,
        question: "The PRIMARY focus of audit follow-up reports should be to:",
        options: [
            "A. assess if new risks have developed.",
            "B. determine if audit recommendations have been implemented.",
            "C. determine if past findings are still relevant.",
            "D. verify the completion date of the implementation."
        ],
        answer: "B",
        explanation: "The primary focus of audit follow-up reports is to determine whether audit recommendations have been implemented by management. This is the core purpose of the follow-up process — verifying that agreed remediation actions have been completed."
    },
    {
        id: 119,
        question: "Which of the following is the BEST way to mitigate the risk associated with technology obsolescence?",
        options: [
            "A. Create tactical and strategic IS plans.",
            "B. Make provisions in the budgets for potential upgrades.",
            "C. Invest in current technology.",
            "D. Create a technology watch team that evaluates emerging trends."
        ],
        answer: "D",
        explanation: "Creating a technology watch team that evaluates emerging trends proactively identifies obsolescence risks and opportunities, allowing the organization to plan timely technology refreshes before systems become obsolete."
    },
    {
        id: 120,
        question: "Which of the following is MOST important to ensure when reviewing a global organization's controls to protect data held on its IT infrastructure across all of its locations?",
        options: [
            "A. The capacity of underlying communications infrastructure in the host locations is sufficient.",
            "B. The threat of natural disasters in each location hosting infrastructure has been accounted for.",
            "C. Relevant data protection legislation and regulations for each location are adhered to.",
            "D. Technical capabilities exist in each location to manage the data and recovery operations."
        ],
        answer: "C",
        explanation: "Ensuring adherence to relevant data protection legislation and regulations in each location is most important for a global organization, as non-compliance can result in significant legal penalties, reputational damage, and regulatory sanctions."
    },
    {
        id: 121,
        question: "An organization is planning to re-purpose workstations that were used to handle confidential information. Which of the following would be the IS auditor's BEST recommendation to dispose of this information?",
        options: [
            "A. Overwrite the disks with random data.",
            "B. Reformat the disks.",
            "C. Erase the disks by degaussing.",
            "D. Delete the disk partitions."
        ],
        answer: "C",
        explanation: "Degaussing physically destroys the magnetic properties of the disk, making data recovery impossible. It is the most thorough method for disposing of confidential data. Reformatting and deleting partitions do not reliably remove data."
    },
    {
        id: 122,
        question: "External experts were used on a recent IT audit engagement. While assessing the external experts' work, the internal audit team found some gaps in the evidence that may have impacted their conclusions. What is the internal audit team's BEST course of action?",
        options: [
            "A. Engage another expert to conduct the same testing.",
            "B. Report a scope limitation in their conclusions.",
            "C. Recommend the external experts conduct additional testing.",
            "D. Escalate to senior management."
        ],
        answer: "C",
        explanation: "Recommending the external experts conduct additional testing to fill the identified gaps is the most appropriate first step, as the external experts already have context and can address the specific gaps most efficiently."
    },
    {
        id: 123,
        question: "The practice of periodic secure code reviews is which type of control?",
        options: [
            "A. Compensating.",
            "B. Detective.",
            "C. Preventive.",
            "D. Corrective."
        ],
        answer: "B",
        explanation: "Periodic secure code reviews are a detective control — they identify security vulnerabilities and flaws that already exist in the code. They detect problems rather than preventing them from occurring in the first place."
    },
    {
        id: 124,
        question: "Which of the following is the PRIMARY role of key performance indicators (KPIs) in supporting business process effectiveness?",
        options: [
            "A. To analyze workflows in order to optimize business processes and eliminate tasks that do not provide value.",
            "B. To evaluate the cost-benefit of tools implemented to monitor control performance.",
            "C. To enable conclusions about the performance of the processes and target variances for follow-up analysis.",
            "D. To assess the functionality of a software deliverable based on business processes."
        ],
        answer: "C",
        explanation: "KPIs primarily enable conclusions about process performance and identify variances from targets that require investigation or corrective action. They are measurement tools that drive management decision-making."
    },
    {
        id: 125,
        question: "Which of the following would BEST enable an organization to address the security risks associated with a recently implemented bring your own device (BYOD) strategy?",
        options: [
            "A. Mobile device testing program.",
            "B. Mobile device upgrade program.",
            "C. Mobile device awareness program.",
            "D. Mobile device tracking program."
        ],
        answer: "C",
        explanation: "A mobile device awareness program educates employees on security risks and responsibilities associated with BYOD, which is the foundation for reducing human-factor risks. Employee behavior is often the greatest security risk in BYOD environments."
    },
    {
        id: 126,
        question: "An organization has outsourced the development of a core application. However, the organization plans to bring the support and future maintenance of the application back in-house. Which of the following findings should be the IS auditor's GREATEST concern?",
        options: [
            "A. The data model is not clearly documented.",
            "B. The vendor development team is located overseas.",
            "C. The cost of outsourcing is lower than in-house development.",
            "D. A training plan for business users has not been developed."
        ],
        answer: "A",
        explanation: "An undocumented data model is the greatest concern when bringing application support in-house. Without clear documentation, the in-house team cannot effectively maintain, troubleshoot, or enhance the application, risking data integrity and operational continuity."
    },
    {
        id: 127,
        question: "An employee has accidentally posted confidential data to the company's social media page. Which of the following is the BEST control to prevent this from recurring?",
        options: [
            "A. Establish two-factor access control for social media accounts.",
            "B. Implement a moderator approval process.",
            "C. Require all updates to be made by the marketing director.",
            "D. Perform periodic audits of social media updates."
        ],
        answer: "B",
        explanation: "Implementing a moderator approval process is the best preventive control, as it requires all posts to be reviewed and approved before publication, preventing accidental posting of confidential information."
    },
    {
        id: 128,
        question: "Which of the following is MOST important to include in a contract with a software development service provider?",
        options: [
            "A. A list of key performance indicators (KPIs).",
            "B. Service level agreement (SLA).",
            "C. Ownership of intellectual property.",
            "D. Explicit contract termination requirements."
        ],
        answer: "C",
        explanation: "Ownership of intellectual property is most critical to include in a software development contract. Without clear IP ownership terms, the organization may not have the legal right to use, modify, or maintain the software developed on its behalf."
    },
    {
        id: 129,
        question: "An IS auditor is reviewing the perimeter security design of a network. Which of the following provides the GREATEST assurance that both incoming and outgoing internet traffic is controlled?",
        options: [
            "A. Load balancer.",
            "B. Security information and event management (SIEM) system.",
            "C. Intrusion detection system (IDS).",
            "D. Stateful firewall."
        ],
        answer: "D",
        explanation: "A stateful firewall provides the greatest assurance for controlling both incoming and outgoing traffic by tracking the state of network connections and applying rules based on context, providing comprehensive bidirectional traffic control."
    },
    {
        id: 130,
        question: "An organization needs to comply with data privacy regulations forbidding the display of personally identifiable information (PII) on customer bills or receipts. However, it is a business requirement to display at least one attribute so that customers can verify the bills or receipts are intended for them. What is the BEST recommendation?",
        options: [
            "A. Data sanitization.",
            "B. Data masking.",
            "C. Data encryption.",
            "D. Data tokenization."
        ],
        answer: "B",
        explanation: "Data masking partially obscures PII (e.g., showing only the last four digits of an account number) while still allowing customers to verify their identity. It satisfies both the privacy requirement and the business need to display a recognizable attribute."
    },
    {
        id: 131,
        question: "Which of the following development practices would BEST mitigate the risk associated with theft of user credentials transmitted between mobile devices and the corporate network?",
        options: [
            "A. Enforce the validation of digital certificates used in the communication sessions.",
            "B. Release mobile applications in debugging mode to allow for easy troubleshooting.",
            "C. Embed cryptographic keys within the mobile application source code.",
            "D. Allow persistent sessions between mobile applications and the corporate network."
        ],
        answer: "A",
        explanation: "Enforcing validation of digital certificates prevents man-in-the-middle attacks by ensuring the mobile device communicates only with the legitimate corporate server, protecting credentials from interception during transmission."
    },
    {
        id: 132,
        question: "Which of the following is MOST useful for determining whether the goals of IT are aligned with the organization's goals?",
        options: [
            "A. Enterprise architecture (EA).",
            "B. Key performance indicators (KPIs).",
            "C. Balanced scorecard.",
            "D. Enterprise dashboard."
        ],
        answer: "C",
        explanation: "A balanced scorecard translates organizational strategy into measurable objectives across multiple perspectives (financial, customer, internal processes, learning), making it the most useful tool for assessing whether IT goals align with organizational goals."
    },
    {
        id: 133,
        question: "Which of the following cloud deployment models would BEST meet the needs of a startup software development organization with limited initial capital?",
        options: [
            "A. Community.",
            "B. Hybrid.",
            "C. Private.",
            "D. Public."
        ],
        answer: "D",
        explanation: "A public cloud deployment model is best for a startup with limited capital, as it offers pay-as-you-go pricing with no upfront infrastructure investment, providing scalable resources without capital expenditure."
    },
    {
        id: 134,
        question: "Which of the following is MOST effective in detecting an intrusion attempt?",
        options: [
            "A. Using packet filter software.",
            "B. Using smart cards with one-time passwords.",
            "C. Installing biometrics-based authentication.",
            "D. Analyzing system logs."
        ],
        answer: "D",
        explanation: "Analyzing system logs is most effective for detecting intrusion attempts, as logs record all system activities including failed login attempts, unusual access patterns, and other indicators of compromise that can reveal intrusion attempts."
    },
    {
        id: 135,
        question: "The MOST important reason why an IT risk assessment should be updated on a regular basis is to:",
        options: [
            "A. utilize IT resources in a cost-effective manner.",
            "B. react to changes in the IT environment.",
            "C. comply with data classification changes.",
            "D. comply with risk management policies."
        ],
        answer: "B",
        explanation: "The most important reason for regular risk assessment updates is to react to changes in the IT environment. New threats, vulnerabilities, systems, and business changes all affect the risk profile and must be reflected in current assessments."
    },
    {
        id: 136,
        question: "An organization's strategy to source certain IT functions from a software as a service (SaaS) provider should be approved by the:",
        options: [
            "A. IT steering committee.",
            "B. chief financial officer (CFO).",
            "C. IT operations manager.",
            "D. chief risk officer (CRO)."
        ],
        answer: "A",
        explanation: "The IT steering committee, which typically includes senior business and IT leadership, is the appropriate body to approve IT sourcing strategies. It ensures alignment with business objectives and governance requirements."
    },
    {
        id: 137,
        question: "An organization experienced a domain name system (DNS) attack caused by default user accounts not being removed from one of the servers. Which of the following would have been the BEST way to mitigate the risk of this DNS attack?",
        options: [
            "A. Require all employees to attend training for secure configuration management.",
            "B. Have a third party configure the virtual servers.",
            "C. Configure the servers from an approved standard configuration.",
            "D. Configure the intrusion prevention system (IPS) to identify DNS attacks."
        ],
        answer: "C",
        explanation: "Configuring servers from an approved standard (hardened) configuration ensures default accounts are removed as part of the baseline setup, directly preventing this type of vulnerability from occurring."
    },
    {
        id: 138,
        question: "The BEST indicator of an optimized quality management system (QMS) is that it:",
        options: [
            "A. is endorsed by senior management.",
            "B. aligns with an industry recognized framework.",
            "C. is integrated and enforced in all IT activities.",
            "D. defines and monitors all IT QMS activities."
        ],
        answer: "C",
        explanation: "The best indicator of an optimized QMS is that it is integrated and enforced in all IT activities. Integration ensures quality is embedded throughout the organization rather than being a separate oversight function."
    },
    {
        id: 139,
        question: "When developing customer-facing IT applications, in which stage of the system development life cycle (SDLC) is it MOST beneficial to consider data privacy principles?",
        options: [
            "A. User acceptance testing (UAT).",
            "B. Systems design and architecture.",
            "C. Requirements definition.",
            "D. Software selection and acquisition."
        ],
        answer: "C",
        explanation: "Data privacy principles are most beneficially considered during requirements definition, as this is when privacy requirements can be incorporated from the outset (privacy by design). Addressing privacy in later stages is costlier and less effective."
    },
    {
        id: 140,
        question: "An organization is shifting to a remote workforce. In preparation, the IT department is performing stress and capacity testing of remote access infrastructure and systems. What type of control is being implemented?",
        options: [
            "A. Directive.",
            "B. Detective.",
            "C. Preventive.",
            "D. Compensating."
        ],
        answer: "C",
        explanation: "Stress and capacity testing is a preventive control — it proactively identifies potential performance issues before they occur in production, preventing system failures from impacting the remote workforce."
    },
    {
        id: 141,
        question: "What is the BEST method for securing credit card numbers stored temporarily on a file server prior to transmission to the downstream system for payment processing?",
        options: [
            "A. Masking the full credit card number.",
            "B. Encryption with strong cryptography.",
            "C. Truncating the credit card number.",
            "D. One-way hash with strong cryptography."
        ],
        answer: "B",
        explanation: "Encryption with strong cryptography is the best method for securing credit card numbers that need to be stored and later transmitted, as it protects the data while allowing it to be decrypted for legitimate processing. Masking and truncation would prevent use in payment processing."
    },
    {
        id: 142,
        question: "When removing a financial application system from production, which of the following is MOST important?",
        options: [
            "A. Media used by the retired system has been sanitized.",
            "B. Software license agreements are retained.",
            "C. End-user requests for changes are recorded and tracked.",
            "D. Data retained for regulatory purposes can be retrieved."
        ],
        answer: "D",
        explanation: "Ensuring that data retained for regulatory purposes can still be retrieved is most important when decommissioning a financial application. Inability to access regulatory data during an audit or legal proceeding could result in significant penalties."
    },
    {
        id: 143,
        question: "In a 24/7 processing environment, a database contains several privileged application accounts with passwords set to 'never expire.' Which of the following recommendations would BEST address the risk with minimal disruption to the business?",
        options: [
            "A. Schedule downtime to implement password changes.",
            "B. Introduce database access monitoring into the environment.",
            "C. Modify the access management policy to make allowances for application accounts.",
            "D. Modify applications to no longer require direct access to the database."
        ],
        answer: "B",
        explanation: "Introducing database access monitoring compensates for the risk of non-expiring passwords by detecting unusual or unauthorized access patterns, providing a detective control that minimizes business disruption while reducing risk."
    },
    {
        id: 144,
        question: "The risk of communication failure in an e-commerce environment is BEST minimized through the use of:",
        options: [
            "A. alternative or diverse routing.",
            "B. compression software to minimize transmission duration.",
            "C. functional or message acknowledgments.",
            "D. a packet filtering firewall to reroute messages."
        ],
        answer: "A",
        explanation: "Alternative or diverse routing provides redundant communication paths, ensuring that if one path fails, communications can be rerouted through alternative paths, minimizing the risk of communication failure."
    },
    {
        id: 145,
        question: "What is the PRIMARY benefit of an audit approach which requires reported findings to be issued together with related action plans, owners, and target dates?",
        options: [
            "A. It establishes accountability for the action plans.",
            "B. It enforces action plan consensus between auditors and auditees.",
            "C. It facilitates easier audit follow-up.",
            "D. It helps to ensure factual accuracy of findings."
        ],
        answer: "A",
        explanation: "Requiring action plans with assigned owners and target dates establishes clear accountability, ensuring that specific individuals are responsible for implementing remediation and can be held accountable if actions are not completed."
    },
    {
        id: 146,
        question: "An organization has made a strategic decision to split into separate operating entities to improve profitability. However, the IT infrastructure remains shared between the entities. Which of the following would BEST help to ensure that IS audit still covers key risk areas within the IT environment as part of its annual plan?",
        options: [
            "A. Developing a risk-based plan considering each entity's business processes.",
            "B. Conducting an audit of newly introduced IT policies and procedures.",
            "C. Revising IS audit plans to focus on IT changes introduced after the split.",
            "D. Increasing the frequency of risk-based IS audits for each business entity."
        ],
        answer: "A",
        explanation: "Developing a risk-based plan that considers each entity's business processes ensures that the audit plan addresses the specific risks introduced by the organizational split, including shared infrastructure risks, while maintaining comprehensive coverage."
    },
    {
        id: 147,
        question: "The PRIMARY advantage of object-oriented technology is enhanced:",
        options: [
            "A. grouping of objects into methods for data access.",
            "B. management of sequential program execution for data access.",
            "C. management of a restricted variety of data types for a data object.",
            "D. efficiency due to the re-use of elements of logic."
        ],
        answer: "D",
        explanation: "The primary advantage of object-oriented technology is efficiency through the reuse of objects and logic. Objects encapsulate data and behavior and can be reused across applications, reducing development time and improving consistency."
    },
    {
        id: 148,
        question: "An IT governance body wants to determine whether IT service delivery is based on consistently effective processes. Which of the following is the BEST approach?",
        options: [
            "A. Develop a maturity model.",
            "B. Evaluate key performance indicators (KPIs).",
            "C. Conduct a gap analysis.",
            "D. Implement a control self-assessment (CSA)."
        ],
        answer: "A",
        explanation: "Developing a maturity model allows the governance body to assess the consistency and effectiveness of IT processes across a defined capability scale, providing a structured framework for evaluating process maturity over time."
    },
    {
        id: 149,
        question: "A warehouse employee of a retail company has been able to conceal the theft of inventory items by entering adjustments of either damaged or lost stock items to the inventory system. Which control would have BEST prevented this type of fraud in a retail environment?",
        options: [
            "A. Statistical sampling of adjustment transactions.",
            "B. Separate authorization for input of transactions.",
            "C. An edit check for the validity of the inventory transaction.",
            "D. Unscheduled audits of lost stock lines."
        ],
        answer: "B",
        explanation: "Requiring separate authorization for inventory adjustment transactions would have best prevented this fraud by ensuring a second person must approve adjustments, making it much harder for a single employee to conceal theft through fraudulent entries."
    },
    {
        id: 150,
        question: "Which type of testing is MOST important to perform during a project audit to help ensure business objectives are met?",
        options: [
            "A. Regression testing.",
            "B. Pilot testing.",
            "C. Functional testing.",
            "D. System testing."
        ],
        answer: "C",
        explanation: "Functional testing verifies that the system functions according to business requirements and meets the defined business objectives. It is the most directly relevant test type for ensuring business objectives are achieved."
    },
    {
        id: 151,
        question: "Which of the following is MOST important for an IS auditor to review when assessing the integrity of encryption controls for data at rest?",
        options: [
            "A. Protection of encryption keys.",
            "B. Encryption of test data.",
            "C. Frequency of encryption key changes.",
            "D. Length of encryption keys."
        ],
        answer: "A",
        explanation: "Protection of encryption keys is most important because if keys are compromised, all encrypted data is effectively unprotected regardless of the strength of the encryption algorithm or key length. Key management is the foundation of encryption security."
    },
    {
        id: 152,
        question: "An IS audit manager finds that data manipulation logic developed by the audit analytics team leads to incorrect conclusions. This inaccurate logic is MOST likely an indication of which of the following?",
        options: [
            "A. The team's poor understanding of the business process being analyzed.",
            "B. Incompatibility between data volume and analytics processing capacity.",
            "C. Poor change controls over data sets collected from the business.",
            "D. Poor security controls that grant inappropriate access to analysis produced."
        ],
        answer: "A",
        explanation: "Inaccurate data manipulation logic that leads to incorrect conclusions most likely indicates the team's poor understanding of the business process. Without understanding what the data represents, the team cannot correctly manipulate or interpret it."
    },
    {
        id: 153,
        question: "Which of the following is the BEST control to mitigate the malware risk associated with an instant messaging (IM) system?",
        options: [
            "A. Blocking external IM traffic.",
            "B. Blocking attachments in IM.",
            "C. Allowing only corporate IM solutions.",
            "D. Encrypting IM traffic."
        ],
        answer: "B",
        explanation: "Blocking attachments in IM is the best control to mitigate malware risk, as attachments are the primary vector for malware transmission via instant messaging. This directly prevents malware delivery while allowing IM communication to continue."
    },
    {
        id: 154,
        question: "An IS auditor noted that a change to a critical calculation was placed into the production environment without being tested. Which of the following is the BEST way to obtain assurance that the calculation functions correctly?",
        options: [
            "A. Check regular execution of the calculation batch job.",
            "B. Interview the lead system developer.",
            "C. Obtain post-change approval from management.",
            "D. Perform substantive testing using computer-assisted audit techniques (CAATs)."
        ],
        answer: "D",
        explanation: "Performing substantive testing using CAATs directly verifies the accuracy of the calculation by processing test data through the production system and comparing results to expected outcomes, providing the strongest assurance."
    },
    {
        id: 155,
        question: "The use of cookies constitutes the MOST significant security threat when they are used for:",
        options: [
            "A. obtaining a public key from a certification authority (CA).",
            "B. forwarding email and Internet Protocol (IP) addresses.",
            "C. authenticating using username and password.",
            "D. downloading files from the host server."
        ],
        answer: "C",
        explanation: "Cookies used for authentication (storing session tokens or credentials) represent the most significant security threat, as stolen authentication cookies can be used for session hijacking, allowing attackers to impersonate legitimate users without needing their passwords."
    },
    {
        id: 156,
        question: "To address issues related to privileged users identified in an IS audit, management implemented a security information and event management (SIEM) system. Which type of control is in place?",
        options: [
            "A. Directive.",
            "B. Detective.",
            "C. Preventive.",
            "D. Corrective."
        ],
        answer: "B",
        explanation: "A SIEM system is a detective control — it monitors and analyzes security events to detect suspicious activities, including privileged user misuse, after they occur. It does not prevent unauthorized actions but identifies them for response."
    },
    {
        id: 157,
        question: "A new privacy regulation requires a customer's privacy information to be deleted within 72 hours, if requested. Which of the following would be an IS auditor's GREATEST concern regarding compliance to this regulation?",
        options: [
            "A. Outdated online privacy policies.",
            "B. End user access to applications with customer information.",
            "C. Incomplete backup and retention policies.",
            "D. Lack of knowledge of where customers' information is saved."
        ],
        answer: "D",
        explanation: "Not knowing where customer information is stored is the greatest concern, as it makes it impossible to comply with the 72-hour deletion requirement. You cannot delete data you cannot locate, making this the fundamental barrier to compliance."
    },
    {
        id: 158,
        question: "A computer forensic audit is MOST relevant in which of the following situations?",
        options: [
            "A. Inadequate controls in the IT environment.",
            "B. Mismatches in transaction data.",
            "C. Data loss due to hacking of servers.",
            "D. Missing server patches."
        ],
        answer: "C",
        explanation: "Computer forensic audits are most relevant when investigating potential crimes or security incidents such as hacking. Data loss due to server hacking requires forensic investigation to determine how the breach occurred and to preserve evidence."
    },
    {
        id: 159,
        question: "A month after a company purchased and implemented system and performance monitoring software, reports were too large and therefore were not reviewed or acted upon. The MOST effective plan of action would be to:",
        options: [
            "A. evaluate replacement systems and performance monitoring software.",
            "B. use analytical tools to produce exception reports from the system and performance monitoring software.",
            "C. re-install the system and performance monitoring software.",
            "D. restrict functionality of system monitoring software to security-related events."
        ],
        answer: "B",
        explanation: "Using analytical tools to produce exception reports addresses the root cause — information overload. Exception reports highlight only significant deviations, making reports manageable and actionable without replacing the monitoring system."
    },
    {
        id: 160,
        question: "An organization seeks to control costs related to storage media throughout the information life cycle while still meeting business and regulatory requirements. Which of the following is the BEST way to achieve this objective?",
        options: [
            "A. Perform periodic tape backups.",
            "B. Utilize solid state memory.",
            "C. Stream backups to the cloud.",
            "D. Implement a data retention policy."
        ],
        answer: "D",
        explanation: "Implementing a data retention policy is the best approach because it defines how long different types of data must be kept and when they should be destroyed. This directly manages storage costs while ensuring compliance with regulatory requirements."
    },
    {
        id: 161,
        question: "An IS auditor is reviewing a recent security incident and is seeking information about the approval of a recent modification to a database system's security settings. Where would the auditor MOST likely find this information?",
        options: [
            "A. Security incident and event management (SIEM) report.",
            "B. Change log.",
            "C. System event correlation report.",
            "D. Database log."
        ],
        answer: "B",
        explanation: "A change log records all modifications made to systems, including who approved and implemented them. It is the most appropriate source for finding information about the approval of a specific change to database security settings."
    },
    {
        id: 162,
        question: "A review of an organization's IT portfolio revealed several applications that are not in use. The BEST way to prevent this situation from recurring would be to implement:",
        options: [
            "A. an information asset acquisition policy.",
            "B. business case development procedures.",
            "C. a formal request for proposal (RFP) process.",
            "D. asset life cycle management."
        ],
        answer: "D",
        explanation: "Asset life cycle management encompasses the entire lifespan of IT assets from acquisition through retirement. It ensures applications are actively managed, used, and decommissioned when no longer needed, preventing accumulation of unused applications."
    },
    {
        id: 163,
        question: "In an environment that automatically reports all program changes, which of the following is the MOST efficient way to detect unauthorized changes to production programs?",
        options: [
            "A. Periodically running and reviewing test data against production programs.",
            "B. Verifying user management approval of modifications.",
            "C. Reviewing the last compile date of production programs.",
            "D. Manually comparing code in production programs to controlled copies."
        ],
        answer: "C",
        explanation: "Reviewing the last compile date of production programs is the most efficient method in an automated change reporting environment. Compile dates that don't align with authorized change records indicate potential unauthorized modifications."
    },
    {
        id: 164,
        question: "An IS auditor is observing transaction processing and notes that a high-priority update job ran out of sequence. What is the MOST significant risk from this observation?",
        options: [
            "A. Daily schedules lack change control.",
            "B. Previous jobs may have failed.",
            "C. The job may not have run to completion.",
            "D. The job completes with invalid data."
        ],
        answer: "D",
        explanation: "The most significant risk is that the job completes with invalid data because running out of sequence means the job may have processed data that was not yet complete or updated by preceding jobs, resulting in inaccurate outputs."
    },
    {
        id: 165,
        question: "Which of the following is the BEST source of information for an IS auditor to use when determining whether an organization's information security policy is adequate?",
        options: [
            "A. Risk assessment results.",
            "B. Penetration test results.",
            "C. Industry benchmarks.",
            "D. Information security program plans."
        ],
        answer: "A",
        explanation: "Risk assessment results are the best source because an adequate security policy should address the specific risks faced by the organization. Comparing the policy against identified risks reveals gaps and ensures the policy is relevant and comprehensive."
    },
    {
        id: 166,
        question: "Which of the following is the MOST significant risk associated with the use of virtualization?",
        options: [
            "A. Insufficient network bandwidth.",
            "B. Single point of failure.",
            "C. Inadequate configuration.",
            "D. Performance issues of hosts."
        ],
        answer: "B",
        explanation: "A single point of failure is the most significant risk in virtualization environments. If the physical host server fails, all virtual machines running on it become unavailable simultaneously, potentially causing widespread outages."
    },
    {
        id: 167,
        question: "Which of the following is MOST important to consider when scheduling follow-up audits?",
        options: [
            "A. The impact if corrective actions are not taken.",
            "B. The amount of time the auditee has agreed to spend with auditors.",
            "C. The efforts required for independent verification with new auditors.",
            "D. Controls and detection risks related to the observations."
        ],
        answer: "A",
        explanation: "The impact if corrective actions are not taken is most important for scheduling follow-up audits. High-impact findings warrant earlier follow-up to ensure timely remediation, while lower-risk items can be reviewed less urgently."
    },
    {
        id: 168,
        question: "Secure code reviews as part of a continuous deployment program are which type of control?",
        options: [
            "A. Detective.",
            "B. Corrective.",
            "C. Logical.",
            "D. Preventive."
        ],
        answer: "D",
        explanation: "Secure code reviews as part of continuous deployment are preventive controls — they identify and remediate security vulnerabilities before code is deployed to production, preventing insecure code from reaching the live environment."
    },
    {
        id: 169,
        question: "Which of the following would BEST detect unauthorized modification of data by a database administrator (DBA)?",
        options: [
            "A. Audit database change requests.",
            "B. Audit database activity logs.",
            "C. Review changes to edit checks.",
            "D. Compare data to input records."
        ],
        answer: "B",
        explanation: "Auditing database activity logs captures all actions performed on the database, including those by DBAs. Since DBAs have elevated privileges and can bypass many controls, activity logs provide the most effective means of detecting unauthorized data modifications."
    },
    {
        id: 170,
        question: "In a typical system development life cycle (SDLC), which group is PRIMARILY responsible for confirming compliance with requirements?",
        options: [
            "A. Steering committee.",
            "B. Risk management.",
            "C. Quality assurance (QA).",
            "D. Internal audit."
        ],
        answer: "C",
        explanation: "Quality assurance (QA) is primarily responsible for confirming that system development complies with requirements, standards, and processes. QA verifies that deliverables meet defined acceptance criteria throughout the SDLC."
    }
];