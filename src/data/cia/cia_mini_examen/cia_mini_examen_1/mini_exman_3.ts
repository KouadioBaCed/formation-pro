export interface Question {
  id: number;
  question: string;
  options: string[];
  solution: string;
  explication: string;
}

export const questions1to10: Question[] = [
  {
    id: 1,
    question:
      "Quel est le rôle de l'activité d’audit interne dans la culture éthique d'une organisation ?",
    options: [
      "Éviter de soutenir activement la culture éthique en raison d'une éventuelle perte d'indépendance.",
      "Évaluer l'efficacité du code de conduite officiel de l'organisation.",
      "Assumer la responsabilité de l'efficacité du processus de gouvernance.",
      "Devenir le déontologue en chef."
    ],
    solution: "Évaluer l'efficacité du code de conduite officiel de l'organisation.",
    explication:
      "L’audit interne évalue périodiquement le climat éthique et l’efficacité du code de conduite ainsi que des politiques associées."
  },
  {
    id: 2,
    question:
      "L'activité d’audit interne contribue le plus directement au processus de gouvernance d'une organisation en :",
    options: [
      "Identifiant les expositions importantes aux risques.",
      "Évaluant l'efficacité du contrôle interne à l'égard de l'information financière.",
      "Promouvant l'amélioration continue des contrôles.",
      "Évaluant la conception des activités liées à l'éthique."
    ],
    solution: "Évaluant la conception des activités liées à l'éthique.",
    explication:
      "Selon la norme 2110, l’audit interne doit évaluer les processus de gouvernance, notamment la promotion de l’éthique et des valeurs organisationnelles."
  },
  {
    id: 3,
    question:
      "Lequel des éléments suivants classe correctement les fonctions de gouvernance d'entreprise comme internes ou externes ?",
    options: [
      "Charte d'entreprise (interne) / Statuts (externe).",
      "Lois (interne) / Conseil d'administration (externe).",
      "Fonction d'audit interne (interne) / Charte d'entreprise (externe).",
      "Statuts (interne) / Réglementation gouvernementale (externe)."
    ],
    solution:
      "Statuts (interne) / Réglementation gouvernementale (externe).",
    explication:
      "Les statuts relèvent de la gouvernance interne, tandis que les lois et règlements gouvernementaux relèvent de la gouvernance externe."
  },
  {
    id: 4,
    question:
      "Lequel des énoncés suivants est faux concernant le rôle des auditeurs internes dans la culture éthique ?",
    options: [
      "Les rôles peuvent inclure celui de responsable de l'éthique.",
      "Le rôle de déontologue en chef peut parfois entrer en conflit avec l'indépendance.",
      "Dans un système plus mature, l’audit interne met l’accent sur la conformité.",
      "Dans un système de gouvernance mature, l’audit interne met l’accent sur l’optimisation des pratiques."
    ],
    solution:
      "Dans un système plus mature, l’audit interne met l’accent sur la conformité.",
    explication:
      "Dans un système moins mature, l’accent est mis sur la conformité. Dans un système plus mature, l’audit interne vise l’optimisation des structures et pratiques."
  },
  {
    id: 5,
    question:
      "La direction générale est principalement responsable de :",
    options: [
      "Mettre en place et suivre les contrôles conçus par le conseil.",
      "Veiller à ce que les auditeurs externes supervisent les risques.",
      "Évaluer les contrôles liés à la fiabilité de l'information.",
      "Déterminer qui seront les propriétaires des risques."
    ],
    solution:
      "Déterminer qui seront les propriétaires des risques.",
    explication:
      "La direction détermine où les risques doivent être gérés, qui en est responsable et comment ils seront traités."
  },
  {
    id: 6,
    question:
      "Veiller à l'efficacité de la gestion du rendement organisationnel et de la reddition de comptes est la fonction directe de :",
    options: [
      "Contrôle.",
      "Gouvernance.",
      "Gestion des risques.",
      "Programme d'assurance qualité."
    ],
    solution: "Gouvernance.",
    explication:
      "La gouvernance regroupe les processus permettant de diriger, gérer et surveiller l’organisation afin d’atteindre ses objectifs."
  },
  {
    id: 7,
    question:
      "Lequel des éléments suivants n'est pas un objectif de la gouvernance d'entreprise ?",
    options: [
      "Respecter les règles légales et réglementaires.",
      "Offrir un avantage global à la société.",
      "Rendre compte honnêtement aux parties prenantes.",
      "Maximiser la rémunération des dirigeants."
    ],
    solution: "Maximiser la rémunération des dirigeants.",
    explication:
      "La gouvernance vise la conformité, la transparence et la création de valeur pour les parties prenantes, non l’enrichissement des dirigeants."
  },
  {
    id: 8,
    question:
      "Quel rôle l’audit interne est-il le plus susceptible de jouer dans un processus de gouvernance moins structuré ?",
    options: [
      "Concevoir des processus de gouvernance.",
      "Optimiser la structure de gouvernance.",
      "Donner des conseils sur les risques fondamentaux.",
      "Évaluer l’efficacité de processus spécifiques."
    ],
    solution:
      "Donner des conseils sur les risques fondamentaux.",
    explication:
      "Dans un système moins mature, l’audit interne met l’accent sur la conformité et les risques fondamentaux."
  },
  {
    id: 9,
    question:
      "Dans quelle situation le rôle de déontologue en chef entre-t-il en conflit avec l'indépendance de l’audit interne ?",
    options: [
      "Demander aux auditeurs d’évaluer la conformité au code de conduite.",
      "Informer le conseil des recommandations de l’audit interne.",
      "Proposer et mettre en œuvre un nouveau programme de dénonciation.",
      "Informer que l’organisation respecte les lois."
    ],
    solution:
      "Proposer et mettre en œuvre un nouveau programme de dénonciation.",
    explication:
      "La mise en œuvre d’un programme relève d’une fonction de gestion, incompatible avec l’indépendance de l’audit interne."
  },
  {
    id: 10,
    question:
      "Le rôle de l'activité d'audit interne dans la culture éthique d'une organisation est de :",
    options: [
      "Évaluer son efficacité en matière de conformité aux lois.",
      "Éviter toute implication pour préserver l'objectivité.",
      "Devenir membre d'un conseil d'éthique.",
      "Assumer la responsabilité du processus de gouvernance."
    ],
    solution:
      "Évaluer son efficacité en matière de conformité aux lois.",
    explication:
      "L’audit interne évalue périodiquement l’efficacité du climat éthique et la conformité aux lois et politiques."
  },
  {
    id: 11,
    question:
      "Lequel des éléments suivants classe correctement les fonctions de gouvernance en fonctions internes ou externes ?",
    options: [
      "Fonction d'audit interne (interne) / Réglementation gouvernementale (externe).",
      "Direction générale (interne) / Charte d'entreprise (externe).",
      "Lois sur la protection de la vie privée (interne) / Commissaires aux comptes (externe).",
      "Charte d'entreprise (interne) / Culture éthique (externe)."
    ],
    solution:
      "Fonction d'audit interne (interne) / Réglementation gouvernementale (externe).",
    explication:
      "La fonction d’audit interne relève de la gouvernance interne, tandis que les lois et règlements gouvernementaux constituent des mécanismes de gouvernance externe."
  },
  {
    id: 12,
    question:
      "La gouvernance devrait contribuer à garantir que les objectifs des parties prenantes sont atteints. Qui sont les parties prenantes ?",
    options: [
      "Employés et clients seulement.",
      "Régulateurs et fournisseurs seulement.",
      "Régulateurs, fournisseurs et clients seulement.",
      "Employés, régulateurs, fournisseurs et clients."
    ],
    solution:
      "Employés, régulateurs, fournisseurs et clients.",
    explication:
      "Les parties prenantes comprennent toutes les personnes ou entités touchées par les activités de l’organisation : employés, clients, fournisseurs, régulateurs, actionnaires, etc."
  },
  {
    id: 13,
    question:
      "Les auditeurs internes et externes relèvent directement d’un comité d’audit composé d’administrateurs indépendants. Cette pratique est liée à quels principes de gouvernance ?",
    options: [
      "Recours efficace aux auditeurs internes et externes et interaction efficace entre le conseil, la direction et les fournisseurs d’assurance.",
      "Interaction efficace et structure organisationnelle stratégique.",
      "Structure stratégique et structure de mesure du rendement.",
      "Tous les principes mentionnés."
    ],
    solution:
      "Recours efficace aux auditeurs internes et externes et interaction efficace entre le conseil, la direction et les fournisseurs d’assurance.",
    explication:
      "Le rattachement au comité d’audit renforce l’indépendance et assure une interaction efficace entre les parties responsables de la gouvernance."
  },
  {
    id: 14,
    question:
      "Quels éléments devraient être énoncés dans le code de conduite d’une organisation ?",
    options: [
      "Les valeurs et objectifs de l’organisation ainsi que le comportement attendu.",
      "Les valeurs et des stratégies incompatibles avec les responsabilités légales.",
      "Le comportement attendu et des stratégies incompatibles avec les responsabilités légales.",
      "Les valeurs, objectifs et stratégies incompatibles avec les responsabilités légales."
    ],
    solution:
      "Les valeurs et objectifs de l’organisation ainsi que le comportement attendu.",
    explication:
      "Un code de conduite doit préciser les valeurs, les objectifs et le comportement attendu, ainsi que promouvoir une culture conforme aux responsabilités légales, éthiques et sociétales."
  },
  {
    id: 15,
    question:
      "La direction générale est principalement responsable de :",
    options: [
      "Établir et maintenir une culture organisationnelle.",
      "Examiner la fiabilité de l'information financière.",
      "Faire superviser la gestion des risques par les auditeurs.",
      "Mettre en place les contrôles conçus par le conseil."
    ],
    solution:
      "Établir et maintenir une culture organisationnelle.",
    explication:
      "La direction planifie, organise et dirige les activités et maintient un climat éthique favorisant un contrôle interne efficace."
  },
  {
    id: 16,
    question:
      "Lequel des énoncés suivants concernant la gouvernance d’entreprise n’est pas correct ?",
    options: [
      "Les mécanismes de contrôle comprennent des mécanismes internes et externes.",
      "La rémunération des dirigeants fait partie des mécanismes de contrôle.",
      "La dilution liée aux stock-options est une question comptable.",
      "L’auditeur interne a plus de responsabilités que le conseil en matière de gouvernance."
    ],
    solution:
      "L’auditeur interne a plus de responsabilités que le conseil en matière de gouvernance.",
    explication:
      "La gouvernance relève du conseil d’administration. L’audit interne évalue les processus de gouvernance et recommande des améliorations."
  },
  {
    id: 17,
    question:
      "Lequel des énoncés suivants sur la gouvernance organisationnelle est vrai ?",
    options: [
      "L’auditeur interne a plus de responsabilités que le conseil.",
      "Les fonctions de gouvernance sont uniquement internes.",
      "La rémunération de la direction est un processus de gouvernance.",
      "La dilution par stock-options est une question de gouvernance."
    ],
    solution:
      "La rémunération de la direction est un processus de gouvernance.",
    explication:
      "La rémunération de la direction fait partie de l’environnement de contrôle et relève des mécanismes de gouvernance."
  },
  {
    id: 18,
    question:
      "Quelle est une fonction de l’activité d’audit interne dans la gouvernance organisationnelle ?",
    options: [
      "Exécuter les directives du conseil.",
      "Assurer la mise en œuvre des recommandations.",
      "Contrôler le respect du code de conduite.",
      "Définir la gouvernance."
    ],
    solution:
      "Contrôler le respect du code de conduite.",
    explication:
      "L’audit interne surveille la conformité au code de conduite établi par le conseil et la direction."
  },
  {
    id: 19,
    question:
      "Quelle est la meilleure approche pour fournir au conseil le plus haut niveau d’assurance concernant un code de conduite ?",
    options: [
      "Évaluer l’exhaustivité du code et la conformité, puis faire rapport au conseil.",
      "Évaluer uniquement les pratiques organisationnelles.",
      "Examiner les activités des employés.",
      "Tester diverses transactions des employés."
    ],
    solution:
      "Évaluer l’exhaustivité du code et la conformité, puis faire rapport au conseil.",
    explication:
      "L’auditeur interne doit évaluer à la fois l’exhaustivité du code et le niveau de conformité afin d’offrir une assurance complète."
  },
  {
    id: 20,
    question:
      "Dans une mission d’assurance, quelle est la responsabilité de l’auditeur interne concernant les activités liées à l’éthique ?",
    options: [
      "Évaluer leur conception, leur mise en œuvre et leur efficacité.",
      "Évaluer uniquement leur conception.",
      "Examiner les activités des employés.",
      "Tester diverses transactions."
    ],
    solution:
      "Évaluer leur conception, leur mise en œuvre et leur efficacité.",
    explication:
      "L’audit interne doit évaluer la conception, la mise en œuvre et l’efficacité des objectifs, programmes et activités liés à l’éthique."
  },
  {
    id: 21,
    question:
      "Quelles sont les principales composantes de la gouvernance ?",
    options: [
      "Orientation stratégique et surveillance seulement.",
      "Orientation stratégique, surveillance et éthique seulement.",
      "Règlements et éthique seulement.",
      "Surveillance et éthique seulement."
    ],
    solution: "Orientation stratégique et surveillance seulement.",
    explication:
      "Les composantes majeures de la gouvernance sont l’orientation stratégique (modèle d’affaires, objectifs, appétit pour le risque) et la surveillance (gestion des risques et assurance)."
  },
  {
    id: 22,
    question:
      "Quels sont les éléments de la composante surveillance de la gouvernance ?",
    options: [
      "Limites de la conduite et audit interne seulement.",
      "Assurance externe et audit interne seulement.",
      "Modèle d'affaires, limites de conduite et audit interne.",
      "Modèle d'affaires, limites de conduite, assurance externe et audit interne."
    ],
    solution: "Assurance externe et audit interne seulement.",
    explication:
      "La surveillance comprend les activités d’assurance internes et externes ainsi que les activités de gestion des risques exercées par la direction et le conseil."
  },
  {
    id: 23,
    question:
      "Lequel des éléments suivants est un objectif des pratiques de gouvernance ?",
    options: [
      "Renforcer uniquement les intérêts à court terme de certaines parties prenantes.",
      "Satisfaire les principes éthiques sans tenir compte des attentes sociales.",
      "Déléguer la surveillance organisationnelle à l’audit interne.",
      "Rendre compte pleinement et honnêtement au public."
    ],
    solution: "Rendre compte pleinement et honnêtement au public.",
    explication:
      "Les pratiques de gouvernance visent la conformité, le respect des normes éthiques et la reddition de comptes transparente envers les parties prenantes."
  },
  {
    id: 24,
    question:
      "Qui aurait dû être un défenseur de l’éthique concernant des résultats trop optimistes ?",
    options: [
      "La direction générale seulement.",
      "La direction générale et les auditeurs internes seulement.",
      "La direction générale et les employés comptables seulement.",
      "La direction générale, les auditeurs internes et les employés comptables."
    ],
    solution:
      "La direction générale, les auditeurs internes et les employés comptables.",
    explication:
      "Chaque individu dans l’organisation doit agir comme défenseur de l’éthique, surtout en cas de doute sur l’exactitude des résultats."
  },
  {
    id: 25,
    question:
      "Dans un processus de gouvernance moins structuré, quelle est la fonction la plus probable de l’audit interne ?",
    options: [
      "Évaluer des processus de gouvernance spécifiques distincts du contrôle.",
      "Vérifier la conformité aux procédures, politiques et lois.",
      "Optimiser les pratiques de gouvernance en tant que consultant.",
      "Concevoir des processus pour gérer les risques."
    ],
    solution:
      "Vérifier la conformité aux procédures, politiques et lois.",
    explication:
      "Dans un système moins mature, l’audit interne met l’accent sur la conformité et les risques fondamentaux."
  },
  {
    id: 26,
    question:
      "Dans quelle situation le rôle de l’auditeur interne entre-t-il en conflit avec l’indépendance ?",
    options: [
      "Recommander un nouveau programme de dénonciation.",
      "Informer le conseil qu’un programme d’éthique a été mis en œuvre par l’audit interne.",
      "Évaluer la conformité au code de conduite.",
      "Présenter au conseil des recommandations sur la conformité."
    ],
    solution:
      "Informer le conseil qu’un programme d’éthique a été mis en œuvre par l’audit interne.",
    explication:
      "La conception et la mise en œuvre de programmes relèvent de la gestion et compromettent l’indépendance de l’audit interne."
  },
  {
    id: 27,
    question:
      "L’examen des transactions entre une société mère et sa filiale est lié à quel principe de gouvernance ?",
    options: [
      "Surveillance des opérations entre apparentés et des conflits d’intérêts.",
      "Interaction efficace entre le conseil et la direction.",
      "Structure organisationnelle stratégique.",
      "Structure de mesure du rendement."
    ],
    solution:
      "Surveillance des opérations entre apparentés et des conflits d’intérêts.",
    explication:
      "Les transactions entre parties liées nécessitent une surveillance spécifique afin d’éviter les conflits d’intérêts."
  },
  {
    id: 28,
    question:
      "Lequel des énoncés suivants est conforme à un principe de gouvernance ?",
    options: [
      "Les membres du comité d’audit sont des cadres supérieurs.",
      "L’activité d’audit interne est indépendante organisationnellement.",
      "L’entité effectue des transactions non divulguées avec des parties liées.",
      "Un dirigeant reçoit des options liées aux bénéfices qu’il peut influencer."
    ],
    solution:
      "L’activité d’audit interne est indépendante organisationnellement.",
    explication:
      "L’indépendance organisationnelle de l’audit interne est un principe fondamental de bonne gouvernance."
  },
  {
    id: 29,
    question:
      "Quel énoncé concernant la surveillance comme élément de gouvernance est faux ?",
    options: [
      "Les activités de gestion des risques sont exécutées par la direction et les propriétaires des risques.",
      "La surveillance comprend les activités d’assurance internes et externes.",
      "La surveillance est l’élément qui préoccupe le plus l’audit interne.",
      "La surveillance détermine les objectifs généraux."
    ],
    solution:
      "La surveillance détermine les objectifs généraux.",
    explication:
      "C’est l’orientation stratégique, et non la surveillance, qui détermine les objectifs généraux."
  },
  {
    id: 30,
    question:
      "L’orientation stratégique comprend :",
    options: [
      "Les activités de gestion des risques des propriétaires des risques.",
      "Les activités d’assurance externe.",
      "La composante qui préoccupe le plus l’audit interne.",
      "L’appétit pour le risque de l’organisation."
    ],
    solution:
      "L’appétit pour le risque de l’organisation.",
    explication:
      "L’orientation stratégique détermine le modèle d’affaires, les objectifs, l’appétit pour le risque et les limites de conduite."
  },
{
    id: 31,
    question:
      "Lesquelles des fonctions suivantes sont celles des comités des risques ?",
    options: [
      "1 et 2 seulement.",
      "1 seulement.",
      "2, 3 et 4 seulement.",
      "1, 2, 3 et 4."
    ],
    solution: "1, 2, 3 et 4.",
    explication:
      "Un comité des risques identifie les principaux risques, les relie aux processus de gestion des risques, les délègue aux propriétaires de risques et vérifie la compatibilité des niveaux de tolérance avec l’appétit pour le risque."
  },
  {
    id: 32,
    question:
      "Lequel des énoncés suivants sur la culture organisationnelle est faux ?",
    options: [
      "La culture établit les valeurs, objectifs et stratégies.",
      "L’efficacité de la gouvernance ne dépend pas de la culture organisationnelle.",
      "La culture définit les rôles et comportements.",
      "La culture influence le respect des responsabilités sociales."
    ],
    solution:
      "L’efficacité de la gouvernance ne dépend pas de la culture organisationnelle.",
    explication:
      "Les pratiques de gouvernance reflètent et dépendent fortement de la culture organisationnelle pour leur efficacité."
  },
  {
    id: 33,
    question:
      "Quel élément devrait le plus probablement figurer dans l’énoncé de vision d’une entité ?",
    options: [
      "Politiques du personnel.",
      "Le plan stratégique détaillé.",
      "La stratégie visant à maintenir une culture conforme aux responsabilités légales.",
      "Principes détaillés de contrôle interne."
    ],
    solution:
      "La stratégie visant à maintenir une culture conforme aux responsabilités légales.",
    explication:
      "Un énoncé de vision présente les valeurs, objectifs et stratégies visant à maintenir une culture conforme aux responsabilités légales, éthiques et sociétales."
  },
  {
    id: 34,
    question:
      "Lequel des éléments suivants est considéré comme une partie prenante potentielle d’une entité ?",
    options: [
      "Actionnaires.",
      "Employés.",
      "Fournisseurs.",
      "Toutes les réponses sont correctes."
    ],
    solution: "Toutes les réponses sont correctes.",
    explication:
      "Les parties prenantes incluent toute personne ou entité affectée par les activités de l’organisation : actionnaires, employés, fournisseurs, clients, etc."
  },
  {
    id: 35,
    question:
      "Lequel des éléments suivants est le plus susceptible d’être considéré comme partie prenante potentielle ?",
    options: [
      "Proches concurrents.",
      "Autorités fiscales.",
      "Créanciers des salariés.",
      "Voisins des installations."
    ],
    solution: "Voisins des installations.",
    explication:
      "Les voisins des installations sont directement affectés par les activités de l’entité et sont donc considérés comme parties prenantes."
  },
  {
    id: 36,
    question:
      "La répartition claire des responsabilités entre directeurs illustre quel principe de gouvernance ?",
    options: [
      "Lignes de responsabilité et de responsabilisation claires.",
      "Comité indépendant avec ressources suffisantes.",
      "Renforcement d’une culture éthique.",
      "Définition et mise en œuvre des politiques de gestion des risques."
    ],
    solution:
      "Lignes de responsabilité et de responsabilisation claires.",
    explication:
      "Attribuer des responsabilités distinctes à chaque directeur illustre des lignes de responsabilité claires et appliquées."
  },
  {
    id: 37,
    question:
      "Quelle combinaison est correcte concernant gouvernance, gestion des risques et contrôle interne ?",
    options: [
      "Gouvernance → Gestion des risques → Contrôle interne.",
      "Gestion des risques → Gouvernance → Contrôle interne.",
      "Contrôle interne → Gestion des risques → Gouvernance.",
      "Gestion des risques → Contrôle interne → Gouvernance."
    ],
    solution:
      "Gouvernance → Gestion des risques → Contrôle interne.",
    explication:
      "La gouvernance fournit l’orientation générale, la gestion des risques applique cette orientation, et le contrôle interne constitue un élément clé de la gestion des risques."
  },
  {
    id: 38,
    question:
      "Dans la structure de gouvernance, les propriétaires des risques :",
    options: [
      "Sont des cadres supérieurs.",
      "Sont responsables des opérations quotidiennes.",
      "Identifient les parties prenantes et résultats inacceptables.",
      "Exécutent les directives du conseil."
    ],
    solution:
      "Sont responsables des opérations quotidiennes.",
    explication:
      "Les propriétaires de risques sont des gestionnaires responsables d’activités opérationnelles quotidiennes spécifiques."
  },
  {
    id: 39,
    question:
      "Selon la définition de l’IIA, le conseil d’administration :",
    options: [
      "Est nommé par les cadres supérieurs.",
      "Peut être le chef de l’organisation.",
      "Exerce les fonctions quotidiennes de gestion.",
      "Établit les exigences de rapport des propriétaires de risques."
    ],
    solution:
      "Peut être le chef de l’organisation.",
    explication:
      "Le conseil est l’organe directeur suprême. En l’absence d’un groupe distinct, il peut être le chef de l’organisation."
  },
  {
    id: 40,
    question:
      "Les auditeurs internes évaluent l’efficacité de quelles mesures liées au climat éthique ?",
    options: [
      "1 et 2 seulement.",
      "2 et 3 seulement.",
      "1 et 3 seulement.",
      "1, 2 et 3."
    ],
    solution: "1, 2 et 3.",
    explication:
      "L’audit interne évalue les examens réguliers des processus, le signalement confidentiel des inconduites et les pratiques favorisant les contributions des employés."
  },
  {
    id: 41,
    question:
      "L’évaluation du climat éthique par l’audit interne s’étend à quels éléments ?",
    options: [
      "1 et 2 seulement.",
      "2 et 3 seulement.",
      "1 et 3 seulement.",
      "1, 2 et 3."
    ],
    solution: "1 et 3 seulement.",
    explication:
      "L’audit interne évalue l’efficacité des vérifications d’antécédents et des déclarations des fournisseurs concernant le comportement éthique. La définition des rôles relève de la direction."
  },
  {
    id: 42,
    question:
      "Le conseil d’administration n’a pas la responsabilité de :",
    options: [
      "Élire ou révoquer les administrateurs.",
      "Sélectionner et révoquer les dirigeants.",
      "Coordonner les activités d’audit.",
      "Fixer la rémunération de la direction."
    ],
    solution: "Élire ou révoquer les administrateurs.",
    explication:
      "Les actionnaires élisent ou révoquent les administrateurs. Le conseil sélectionne les dirigeants, coordonne l’audit et fixe la rémunération."
  },
  {
    id: 43,
    question:
      "La responsabilité première du conseil en matière de contrôle interne consiste à :",
    options: [
      "Identifier les parties prenantes et les résultats inacceptables.",
      "Examiner la fiabilité de l’information financière.",
      "Établir un système de gestion des risques.",
      "Mettre en œuvre et surveiller les contrôles."
    ],
    solution:
      "Identifier les parties prenantes et les résultats inacceptables.",
    explication:
      "Le conseil agit au nom des parties prenantes et identifie les attentes ainsi que les résultats inacceptables."
  },
  {
    id: 44,
    question:
      "Le code de conduite d’une organisation devrait aborder :",
    options: [
      "Les valeurs, objectifs et responsabilités légales.",
      "Les contrôles internes détaillés.",
      "La complexité organisationnelle.",
      "Les principaux domaines à risque."
    ],
    solution:
      "Les valeurs, objectifs et responsabilités légales.",
    explication:
      "Le code de conduite traite des valeurs, objectifs, responsabilités légales et attentes éthiques."
  },
  {
    id: 45,
    question:
      "Le code de conduite d’une organisation devrait :",
    options: [
      "Établir des activités de surveillance.",
      "Aborder les comportements attendus et responsabilités sociétales.",
      "Préciser les principaux risques.",
      "Mesurer le rendement."
    ],
    solution:
      "Aborder les comportements attendus et responsabilités sociétales.",
    explication:
      "Un code de conduite définit les valeurs, comportements attendus et responsabilités sociales."
  },
  {
    id: 46,
    question:
      "Quel élément est le moins susceptible d’influencer la gouvernance d’entreprise ?",
    options: [
      "Régulateurs gouvernementaux.",
      "Fonction d’audit interne.",
      "Prestataires de services extérieurs.",
      "Chartes et statuts."
    ],
    solution: "Prestataires de services extérieurs.",
    explication:
      "Les prestataires externes complètent l’audit interne mais influencent peu directement la gouvernance."
  },
  {
    id: 47,
    question:
      "Selon les normes, la gouvernance est :",
    options: [
      "Un processus d’identification et gestion des risques.",
      "L’ensemble des processus et structures mis en œuvre par le conseil.",
      "Le leadership assurant l’alignement IT.",
      "L’organe directeur suprême."
    ],
    solution:
      "L’ensemble des processus et structures mis en œuvre par le conseil.",
    explication:
      "La gouvernance regroupe les processus et structures permettant d’informer, diriger, gérer et surveiller l’organisation."
  },
  {
    id: 48,
    question:
      "Quel énoncé est correct concernant la gouvernance ?",
    options: [
      "Elle est plus efficace si copiée des sociétés cotées.",
      "Elle implique des relations entre direction, conseil, actionnaires et parties prenantes.",
      "Elle est indépendante de la culture organisationnelle.",
      "Elle est distincte de la gestion des risques."
    ],
    solution:
      "Elle implique des relations entre direction, conseil, actionnaires et parties prenantes.",
    explication:
      "La gouvernance repose sur un ensemble de relations entre direction, conseil, actionnaires et autres parties prenantes."
  },
  {
    id: 49,
    question:
      "Quel est l’objectif le moins probable de la gouvernance ?",
    options: [
      "Influencer les régulateurs gouvernementaux.",
      "Établir des structures appropriées.",
      "Donner une orientation à l’organisation.",
      "Établir des processus appropriés."
    ],
    solution:
      "Influencer les régulateurs gouvernementaux.",
    explication:
      "La gouvernance vise à orienter et superviser l’organisation, non à influencer les régulateurs."
  },
  {
    id: 50,
    question:
      "Les propriétaires de risques sont responsables de :",
    options: [
      "I et II seulement.",
      "I et III seulement.",
      "I, III et IV seulement.",
      "III et IV seulement."
    ],
    solution: "I, III et IV seulement.",
    explication:
      "Les propriétaires de risques évaluent la conception des activités de gestion des risques, établissent des activités de surveillance et assurent la fiabilité de l’information communiquée."
  },
  {
    id: 51,
    question:
      "Quel groupe est responsable de l’initiation des changements fondamentaux pour l’organisation ?",
    options: [
      "La direction générale.",
      "Comité des risques.",
      "Activité d’audit interne.",
      "Conseil d’administration."
    ],
    solution: "Conseil d’administration.",
    explication:
      "Le conseil d’administration est responsable d’amorcer les changements fondamentaux (fusions, acquisitions, restructurations) et assure la supervision ultime."
  },
  {
    id: 52,
    question:
      "Dans une mission d’assurance sur l’éthique, l’activité d’audit interne doit :",
    options: [
      "Évaluer la conception et l’efficacité des activités liées à l’éthique.",
      "Promouvoir et donner l’exemple d’un comportement éthique.",
      "Établir et maintenir des programmes d’éthique.",
      "Superviser directement le climat éthique."
    ],
    solution:
      "Évaluer la conception et l’efficacité des activités liées à l’éthique.",
    explication:
      "Selon les normes, l’audit interne doit évaluer la conception, la mise en œuvre et l’efficacité des programmes d’éthique."
  },
  {
    id: 53,
    question:
      "Selon le COSO, la culture est :",
    options: [
      "Le comportement attendu dans l’organisation.",
      "L’attitude du conseil concernant le contrôle.",
      "La combinaison de processus et structures.",
      "Le reflet de la mission et vision composé d’attitudes, comportements et compréhension du risque."
    ],
    solution:
      "Le reflet de la mission et vision composé d’attitudes, comportements et compréhension du risque.",
    explication:
      "Selon le COSO ERM, la culture comprend les attitudes, comportements et perception du risque reflétant la mission et les valeurs."
  },
  {
    id: 54,
    question:
      "La culture organisationnelle se reflète dans :",
    options: [
      "I seulement.",
      "I et II seulement.",
      "II et III seulement.",
      "I, II et III."
    ],
    solution: "I, II et III.",
    explication:
      "La culture se reflète dans la mesure de la performance, la responsabilisation et le respect des responsabilités sociales."
  },
  {
    id: 55,
    question:
      "Une culture organisationnelle peu encline au risque entraîne généralement :",
    options: [
      "Importance élevée du contrôle et risques jugés plus probables.",
      "Importance élevée du contrôle et risques jugés moins probables.",
      "Importance faible du contrôle et risques jugés plus probables.",
      "Importance faible du contrôle et risques jugés moins probables."
    ],
    solution:
      "Importance élevée du contrôle et risques jugés moins probables.",
    explication:
      "Une culture peu encline au risque valorise fortement le contrôle et considère les risques liés à la mission comme moins élevés."
  },
  {
    id: 56,
    question:
      "Dans le plan d’audit interne pour évaluer la gouvernance, il faut définir :",
    options: [
      "1 et 2 seulement.",
      "2 et 3 seulement.",
      "1 et 3 seulement.",
      "1, 2 et 3."
    ],
    solution: "1, 2 et 3.",
    explication:
      "Le plan d’audit doit préciser la nature du travail, les processus de gouvernance concernés et la nature des évaluations."
  },
  {
    id: 57,
    question:
      "Un principe fondamental de la gouvernance est :",
    options: [
      "Évaluation du processus de gouvernance par un audit interne indépendant.",
      "Responsabilité directe de l’audit interne dans la gouvernance.",
      "Recours exclusif aux auditeurs externes.",
      "Séparation entre gouvernance et culture éthique."
    ],
    solution:
      "Évaluation du processus de gouvernance par un audit interne indépendant.",
    explication:
      "L’audit interne doit évaluer le processus de gouvernance et recommander des améliorations."
  },
  {
    id: 58,
    question:
      "Dans le processus de gouvernance, l’audit interne doit principalement :",
    options: [
      "Coordonner directement les auditeurs externes.",
      "Communiquer l’information sur les risques.",
      "Évaluer le processus de gestion du rendement.",
      "Promouvoir directement l’éthique."
    ],
    solution:
      "Évaluer le processus de gestion du rendement.",
    explication:
      "Selon la norme 2110, l’audit interne évalue notamment l’efficacité de la gestion du rendement organisationnel."
  },
  {
    id: 59,
    question:
      "Lorsqu’il évalue la gouvernance, l’auditeur interne doit considérer :",
    options: [
      "1 et 3 seulement.",
      "2 et 4 seulement.",
      "1, 2 et 3 seulement.",
      "1, 2, 3 et 4."
    ],
    solution: "1, 2, 3 et 4.",
    explication:
      "L’évaluation de la gouvernance doit prendre en compte les audits spécifiques, les questions émergentes, les travaux d’autres certificateurs et les incidents révélateurs."
  },
  {
    id: 60,
    question:
      "L’audit interne contribue à la gouvernance en évaluant les processus par lesquels :",
    options: [
      "1 seulement.",
      "4 seulement.",
      "2 et 3 seulement.",
      "1, 2, 3 et 4."
    ],
    solution: "1, 2, 3 et 4.",
    explication:
      "L’audit interne évalue la promotion de l’éthique, la gestion du rendement, la communication des risques et la coordination des activités d’assurance."
  },
  {
    id: 61,
    question:
      "La conception et la pratique d'une gouvernance efficace varient selon :",
    options: [
      "1 et 2 seulement.",
      "2 et 3 seulement.",
      "1 et 3 seulement.",
      "1, 2 et 3."
    ],
    solution: "1, 2 et 3.",
    explication:
      "La gouvernance efficace varie selon la taille, la complexité et la maturité de l’organisation, la structure des parties prenantes ainsi que les exigences juridiques et culturelles."
  },
  {
    id: 62,
    question:
      "Lors de la planification d’une évaluation de la gouvernance, Craig (RAI) devrait considérer :",
    options: [
      "Si toutes les décisions importantes ont été autorisées par la direction générale.",
      "S’il peut se fier à l’évaluation du contrôle interne des auditeurs externes.",
      "Si les employés adhèrent au code d’éthique.",
      "Toutes les réponses sont correctes."
    ],
    solution: "Toutes les réponses sont correctes.",
    explication:
      "Le RAI doit considérer les autorisations, la fiabilité des travaux externes et l’adhésion au code d’éthique lors de la planification."
  },
  {
    id: 63,
    question:
      "Dans la planification de l’évaluation de la gouvernance, il est pertinent de :",
    options: [
      "Vérifier que toutes les décisions ont été autorisées par le conseil.",
      "S’appuyer sur l’évaluation du contrôle interne réalisée dans d’autres audits.",
      "Se conformer uniquement à la définition interne de la gouvernance.",
      "Considérer que contrôle et risque ne sont pas liés."
    ],
    solution:
      "S’appuyer sur l’évaluation du contrôle interne réalisée dans d’autres audits.",
    explication:
      "Le RAI peut s’appuyer sur d’autres audits évaluant les contrôles des processus de gouvernance."
  },
  {
    id: 64,
    question:
      "Dans les meilleures pratiques de gouvernance, l’audit interne joue les rôles suivants :",
    options: [
      "1 et 3 seulement.",
      "2 et 4 seulement.",
      "1, 2 et 3 seulement.",
      "1, 2, 3 et 4."
    ],
    solution: "1, 2 et 3 seulement.",
    explication:
      "L’audit interne signale les questions importantes, soutient le conseil et assure le suivi des réponses aux audits externes, mais n’agit pas comme gardien des biens."
  },
  {
    id: 65,
    question:
      "La conception et la mise en œuvre des processus de gouvernance relèvent de :",
    options: [
      "Conseil : Oui / Direction : Oui",
      "Conseil : Oui / Direction : Non",
      "Conseil : Non / Direction : Oui",
      "Conseil : Non / Direction : Non"
    ],
    solution: "Conseil : Oui / Direction : Oui",
    explication:
      "Le conseil et la direction sont responsables de la conception et de la mise en œuvre des processus de gouvernance."
  },
  {
    id: 66,
    question:
      "Lequel des énoncés suivants concernant la gouvernance est faux ?",
    options: [
      "La gouvernance a plusieurs définitions selon les circonstances.",
      "Les modèles de gouvernance la considèrent comme un système statique.",
      "Les exigences varient selon le type d’entité.",
      "Elle n’existe pas indépendamment de la gestion et du contrôle des risques."
    ],
    solution:
      "Les modèles de gouvernance la considèrent comme un système statique.",
    explication:
      "La gouvernance n’est pas statique ; elle évolue selon le contexte organisationnel."
  },
  {
    id: 67,
    question:
      "Quel énoncé au sujet de la gouvernance est vrai ?",
    options: [
      "Elle existe comme processus distinct des contrôles.",
      "Le RAI fera appel à des consultants uniquement si le processus est mature.",
      "Elle est un processus statique.",
      "Elle possède plusieurs définitions selon les circonstances."
    ],
    solution:
      "Elle possède plusieurs définitions selon les circonstances.",
    explication:
      "La gouvernance varie selon les contextes et peut être définie différemment selon l’organisation."
  },
  {
    id: 68,
    question:
      "L’évaluation de la coordination entre conseil, direction et auditeurs relève principalement de :",
    options: [
      "Assurance qualité.",
      "Gestion des risques.",
      "Gouvernance.",
      "Environnement de contrôle."
    ],
    solution: "Gouvernance.",
    explication:
      "La coordination des activités du conseil, des auditeurs et de la direction relève directement de la gouvernance."
  },
  {
    id: 69,
    question:
      "Lequel des éléments suivants n’est PAS un rôle de l’audit interne en gouvernance ?",
    options: [
      "Appuyer le conseil dans l’évaluation des risques.",
      "Assurer la mise en œuvre en temps voulu des recommandations.",
      "Surveiller le respect du code de conduite.",
      "Discuter des domaines à risques importants."
    ],
    solution:
      "Assurer la mise en œuvre en temps voulu des recommandations.",
    explication:
      "La direction est responsable de la mise en œuvre des recommandations ; l’audit interne en assure le suivi."
  },
  {
    id: 70,
    question:
      "L’audit interne contribue le plus directement à la gouvernance en :",
    options: [
      "Évaluant la gestion du rendement organisationnel.",
      "Évaluant les contrôles de protection des actifs.",
      "Évaluant le système de gestion des risques.",
      "Évaluant la conformité des objectifs à la mission."
    ],
    solution:
      "Évaluant la gestion du rendement organisationnel.",
    explication:
      "L’évaluation de la gestion du rendement organisationnel relève directement des responsabilités de gouvernance selon la norme 2110."
  },
  {
    id: 71,
    question: "Des exemples de RSE comprennent tous les éléments suivants, à l'exception de :",
    options: [
      "Une société pharmaceutique qui fait des dons à des établissements de traitement de la toxicomanie.",
      "Une compagnie de tabac donne de l'argent à des initiatives de sevrage tabagique à la suite du règlement d'une poursuite judiciaire.",
      "Une entreprise de services professionnels verse chaque année une prime à ses employés pour leur bénévolat.",
      "A utilise son réseau de distribution pour livrer gratuitement des fournitures lors de catastrophes."
    ],
    solution: "Une compagnie de tabac donne de l'argent à des initiatives de sevrage tabagique à la suite du règlement d'une poursuite judiciaire.",
    explication: "Le don n'est pas volontaire ; il résulte d'une action en justice et ne constitue pas de la RSE."
  },
  {
    id: 72,
    question: "Lequel des éléments suivants n'est pas un avantage de la mise en œuvre d'ISO 14000 ?",
    options: [
      "Augmentation du coût de la gestion des déchets.",
      "Économies de consommation d'énergie.",
      "Réduction des coûts de distribution.",
      "Amélioration de l'image de marque."
    ],
    solution: "Augmentation du coût de la gestion des déchets.",
    explication: "ISO 14000 permet de réduire les coûts liés à la gestion des déchets, pas de les augmenter."
  },
  {
    id: 73,
    question: "Parmi les intervenants suivants, lesquels doivent être pris en compte pour un programme RSE ?",
    options: [
      "Actionnaires seulement",
      "Société seulement",
      "Actionnaires et concurrents seulement",
      "Actionnaires, employés et société seulement"
    ],
    solution: "Actionnaires, employés et société seulement",
    explication: "Les besoins des actionnaires, employés et société doivent être équilibrés dans un programme RSE ; les concurrents ne sont pas considérés."
  },
  {
    id: 74,
    question: "Comment la RSE peut-elle produire des avantages malgré certains coûts ?",
    options: [
      "Perception positive du public et charité seulement",
      "Rétention des travailleurs et déductibilité des dons seulement",
      "Rétention des travailleurs, charité et déductibilité des dons",
      "Perception positive du public, rétention des travailleurs, charité et déductibilité des dons"
    ],
    solution: "Perception positive du public, rétention des travailleurs, charité et déductibilité des dons",
    explication: "La RSE peut générer des avantages tels qu'une image positive, la fidélisation des employés, la publicité par charité et la déductibilité fiscale."
  },
  {
    id: 75,
    question: "Lequel des énoncés suivants est vrai concernant ISO 14000 ?",
    options: [
      "Ensemble de critères pour rapports financiers",
      "Détaille exigences de performance environnementale et sanctions",
      "Peut engendrer des coûts plus élevés mais améliore l'image publique",
      "Aucune des réponses n'est correcte"
    ],
    solution: "Aucune des réponses n'est correcte",
    explication: "ISO 14000 est un ensemble de normes pour un système de management environnemental, non obligatoire, et non spécifiquement lié aux finances ou aux sanctions."
  },
  {
    id: 76,
    question: "Lequel des énoncés suivants est vrai concernant ISO 14000 ?",
    options: [
      "Elle s'applique aux systèmes de management environnemental.",
      "Il prévoit des enquêtes sur les violations.",
      "Elle énonce des exigences de performance environnementale.",
      "Il s'agit d'un critère pour un programme de gestion de la qualité."
    ],
    solution: "Elle s'applique aux systèmes de management environnemental.",
    explication: "ISO 14000 fournit des critères pour établir et maintenir un système de management environnemental."
  },
  {
    id: 77,
    question: "Selon Archie B. Carroll, laquelle des responsabilités suivantes n'est PAS parmi les quatre principales pour la RSE ?",
    options: [
      "Responsabilité environnementale dans la consommation d'énergie",
      "Responsabilité philanthropique d'être un bon citoyen",
      "Responsabilité économique d'être rentable",
      "Responsabilité éthique d'être éthique dans ses pratiques"
    ],
    solution: "Responsabilité environnementale dans la consommation d'énergie",
    explication: "Les quatre responsabilités identifiées par Carroll sont : économique, légale, éthique et philanthropique ; la responsabilité environnementale n'en fait pas partie directement."
  },
  {
    id: 78,
    question: "La Global Reporting Initiative (GRI) a développé un cadre qui :",
    options: [
      "Insiste sur la mise en œuvre d'une initiative RSE",
      "Fournit des directives précises sur la mesure du rendement en RSE",
      "Gère la divulgation RSE aux parties prenantes",
      "Fournit un forum pour les gouvernements"
    ],
    solution: "Fournit des directives précises sur la mesure du rendement en RSE",
    explication: "La GRI fournit un cadre pour mesurer et rapporter le rendement RSE de manière standardisée."
  },
  {
    id: 79,
    question: "Une entreprise nie depuis des années sa responsabilité pour des dommages causés par ses camions. Quelle stratégie RSE illustre-t-elle ?",
    options: [
      "Pro-action",
      "Accommodation",
      "Défense",
      "Réaction"
    ],
    solution: "Réaction",
    explication: "La stratégie 'réaction' consiste à nier ou ignorer les responsabilités et maintenir le statu quo."
  },
  {
    id: 80,
    question: "Qui est généralement responsable de l'établissement des objectifs RSE et de la mesure du rendement ?",
    options: [
      "Management",
      "Le conseil",
      "Tous les employés",
      "Auditeurs internes"
    ],
    solution: "Management",
    explication: "La direction fixe les objectifs RSE, mesure le rendement et supervise les activités RSE ; le conseil supervise et les employés participent mais ne fixent pas les objectifs."
  },
  {
    id: 81,
    question: "Lequel des éléments suivants est le risque le moins probable de ne pas mettre en œuvre un programme efficace de RSE ?",
    options: [
      "Perte de réputation",
      "Non-respect de la réglementation",
      "Défaut de fixer des objectifs de performance",
      "Perte d'employés"
    ],
    solution: "Défaut de fixer des objectifs de performance",
    explication: "Ne pas établir d'objectifs de rendement n'est pas considéré comme un risque ; l'établissement d'objectifs est une activité normale de RSE."
  },
  {
    id: 82,
    question: "Dans quelle activité commerciale de RSE une organisation tiendrait-elle compte des risques liés à la RSE avant d'approuver des projets ?",
    options: [
      "Intégrer les principes et les contrôles de la RSE dans le processus décisionnel",
      "Établissement et communication des politiques et procédures",
      "Rapports externes et internes sur les résultats",
      "Suivi, évaluation des résultats et Benchmarking"
    ],
    solution: "Intégrer les principes et les contrôles de la RSE dans le processus décisionnel",
    explication: "Cette activité permet de prendre en compte les risques liés à la RSE avant l'approbation des projets."
  },
  {
    id: 83,
    question: "Une procédure d'audit RSE exige que l'auditeur interne vérifie si le code de conduite contient des dispositions sur la lutte contre la corruption. Quel élément RSE cela teste-t-il ?",
    options: [
      "Conditions de travail",
      "Environnement",
      "Gouvernance",
      "Éthique"
    ],
    solution: "Éthique",
    explication: "L'élément éthique couvre la culture anti-corruption, reflétée dans le code de conduite et les politiques de l'organisation."
  },
  {
    id: 84,
    question: "Lors d'un audit RSE par parties prenantes, lequel des groupes suivants représente un groupe d'intervenants ?",
    options: [
      "Actionnaires et employés seulement",
      "Actionnaires, communautés voisines et employés seulement",
      "Actionnaires, communautés voisines et environnement seulement",
      "Actionnaires, communautés voisines, employés et leurs familles, et l'environnement"
    ],
    solution: "Actionnaires, communautés voisines, employés et leurs familles, et l'environnement",
    explication: "Les parties prenantes typiques incluent clients, employés et familles, environnement, communautés voisines, actionnaires et fournisseurs."
  }
];
