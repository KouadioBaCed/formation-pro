import type { Question } from '../types';

export const question1: Question = {
  id: 'cia-p1-eb3-q-1',
  number: 1,
  text: "L'AAI est considérée comme étant gérée efficacement dans toutes les circonstances suivantes, sauf dans les cas suivants :",
  answers: [
    { id: 'a', text: "Les personnes qui font partie de l'AAI ne fournissent que des recommandations acceptables pour la direction.", isCorrect: true },
    { id: 'b', text: "Le travail de l'AAI permet d'atteindre l'objectif et d'assumer les responsabilités énoncées dans sa charte.", isCorrect: false },
    { id: 'c', text: "L'AAI est conforme aux normes.", isCorrect: false },
    { id: 'd', text: "Les personnes qui font partie de l'AAI se conforment au Code d'éthique et aux normes.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "L’AAI doit recommander ce qui est le mieux pour l’organisation, même si la direction n’est pas toujours d’accord.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-3",
  chapter: "internal-audit-effectiveness",
  status: "unseen",
};

export const question2: Question = {
  id: 'cia-p1-eb3-q-2',
  number: 2,
  text: "Les politiques et procédures de l'AAI devraient être établies pour guider l'AAI et les auditeurs individuels dans leur travail. Lequel des énoncés suivants est vrai ?",
  answers: [
    { id: 'a', text: "Une petite AAI peut être gérée de façon informelle au moyen d'une supervision étroite et de notes de service écrites.", isCorrect: true },
    { id: 'b', text: "La forme et le contenu des politiques et procédures écrites devraient être les mêmes pour toutes les AAI.", isCorrect: false },
    { id: 'c', text: "Toutes les AAI devraient avoir un manuel détaillé de politiques et de procédures.", isCorrect: false },
    { id: 'd', text: "Tous les énoncés ci-dessus sont vrais.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Les petites AAI peuvent fonctionner avec des procédures moins formelles.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-3",
  chapter: "policies-procedures",
  status: "unseen",
};

export const question3: Question = {
  id: 'cia-p1-eb3-q-3',
  number: 3,
  text: "Un nouveau RAI examinait le manuel de vérification pour s'assurer qu'il était à jour et complet. Lequel des éléments suivants ne serait généralement pas inclus ?",
  answers: [
    { id: 'a', text: "Méthodes d'évaluation des risques.", isCorrect: false },
    { id: 'b', text: "Rendre compte au comité de vérification.", isCorrect: false },
    { id: 'c', text: "Niveau de financement nécessaire pour appuyer les activités de vérification interne.", isCorrect: true },
    { id: 'd', text: "Instructions pour la préparation des rapports d'audit.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Le financement est traité dans le budget, pas dans le manuel d’audit.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-3",
  chapter: "audit-manual",
  status: "unseen",
};

export const question4: Question = {
  id: 'cia-p1-eb3-q-4',
  number: 4,
  text: "Les objectifs que le RAI établit pour l'AAI devraient :",
  answers: [
    { id: 'a', text: "I et III seulement.", isCorrect: false },
    { id: 'b', text: "II et IV seulement.", isCorrect: false },
    { id: 'c', text: "I et IV seulement.", isCorrect: true },
    { id: 'd', text: "III et IV seulement.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Les objectifs doivent être clairement définis (I) et mesurables (IV).",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-3",
  chapter: "planning-objectives",
  status: "unseen",
};

export const question5: Question = {
  id: 'cia-p1-eb3-q-5',
  number: 5,
  text: "La raison la plus importante pour le RAI de s'assurer que l'AAI dispose de ressources adéquates et suffisantes est de :",
  answers: [
    { id: 'a', text: "S'assurer que la fonction est adéquatement protégée contre l'impartition.", isCorrect: false },
    { id: 'b', text: "Démontrer une capacité suffisante pour satisfaire aux exigences du plan de vérification.", isCorrect: true },
    { id: 'c', text: "Établir la crédibilité auprès du comité de vérification et de la direction.", isCorrect: false },
    { id: 'd', text: "Répondre au besoin d'une planification efficace de la relève.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Les ressources doivent permettre d’exécuter le plan d’audit approuvé (Norme 2030).",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-3",
  chapter: "resources",
  status: "unseen",
};

export const question6: Question = {
  id: 'cia-p1-eb3-q-6',
  number: 6,
  text: "Lequel des énoncés suivants n'est probablement pas vrai en ce qui concerne le recrutement à l'intérieur de l'organisation ?",
  answers: [
    { id: 'a', text: "Les personnes internes connaissent mieux les politiques et procédures.", isCorrect: false },
    { id: 'b', text: "La promotion interne est bonne pour le moral.", isCorrect: false },
    { id: 'c', text: "Il peut y avoir des personnes qualifiées en interne.", isCorrect: false },
    { id: 'd', text: "Les coûts de formation seraient plus élevés pour un employé interne.", isCorrect: true },
  ],
  answerType: "single",
  explanation: "En interne, les coûts de formation sont généralement plus faibles.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-3",
  chapter: "recruitment",
  status: "unseen",
};

export const question7: Question = {
  id: 'cia-p1-eb3-q-7',
  number: 7,
  text: "Au cours du processus d'entrevue, l’auditeur interne principal ne devrait pas :",
  answers: [
    { id: 'a', text: "Poser des questions ouvertes.", isCorrect: false },
    { id: 'b', text: "Interroger le candidat sur ses antécédents professionnels.", isCorrect: false },
    { id: 'c', text: "Demander l'affiliation politique du candidat.", isCorrect: true },
    { id: 'd', text: "Demander comment le candidat réagirait dans une situation donnée.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Les questions politiques sont inadéquates et non professionnelles.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-3",
  chapter: "interviewing",
  status: "unseen",
};

export const question8: Question = {
  id: 'cia-p1-eb3-q-8',
  number: 8,
  text: "Lequel des éléments suivants ne relève pas de la responsabilité du RAI ?",
  answers: [
    { id: 'a', text: "Communiquer les plans et besoins en ressources à la haute direction et au conseil.", isCorrect: false },
    { id: 'b', text: "Assurer la coordination avec les autres fournisseurs de services d’assurance.", isCorrect: false },
    { id: 'c', text: "Superviser l’établissement et l’évaluation du système de gestion des risques.", isCorrect: true },
    { id: 'd', text: "Vérifier la prise de mesures appropriées pour les risques importants signalés.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "La gestion des risques relève de la direction, pas du RAI.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-3",
  chapter: "responsibilities",
  status: "unseen",
};

export const question9: Question = {
  id: 'cia-p1-eb3-q-9',
  number: 9,
  text: "Pourquoi le RAI doit-il tenir compte du plan stratégique lors de l’élaboration du plan de vérification annuel ?",
  answers: [
    { id: 'a', text: "S'assurer que le plan de vérification interne appuie les objectifs opérationnels généraux.", isCorrect: true },
    { id: 'b', text: "S'assurer que le plan sera approuvé par la haute direction.", isCorrect: false },
    { id: 'c', text: "Faire des recommandations pour améliorer le plan stratégique.", isCorrect: false },
    { id: 'd', text: "Souligner l’importance de l’AAI.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Le plan stratégique permet d’aligner l’audit sur les objectifs organisationnels.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-3",
  chapter: "strategic-planning",
  status: "unseen",
};

export const question10: Question = {
  id: 'cia-p1-eb3-q-10',
  number: 10,
  text: "Quelles missions de vérification le RAI devrait-il mener si tous les facteurs sont pondérés également ?",
  answers: [
    { id: 'a', text: "1 et 2 seulement.", isCorrect: false },
    { id: 'b', text: "1 et 3 seulement.", isCorrect: false },
    { id: 'c', text: "2 et 4 seulement.", isCorrect: true },
    { id: 'd', text: "3 et 4 seulement.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Les audits 2 et 4 ont le score total le plus élevé.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-3",
  chapter: "audit-prioritization",
  status: "unseen",
};

export const question11: Question = {
  id: 'cia-p1-exam3-q-11',
  number: 11,
  text: "Si l'organisation a demandé au RAI de considérer que le facteur de réduction des coûts est deux fois plus important que tout autre facteur, quelles missions le RAI devrait-il poursuivre ?",
  answers: [
    { id: 'a', text: "1 et 2 seulement.", isCorrect: false },
    { id: 'b', text: "1 et 3 seulement.", isCorrect: false },
    { id: 'c', text: "2 et 4 seulement.", isCorrect: false },
    { id: 'd', text: "3 et 4 seulement.", isCorrect: true },
  ],
  answerType: "single",
  explanation: "Les missions 3 et 4 offrent le potentiel d'économies de coûts le plus élevé lorsque ce critère est pondéré doublement.",
  difficulty: "medium",
  topic: "cia-p1-exam-3",
  chapter: "cia-p1-eb3-risk",
  status: "unseen",
};

export const question12: Question = {
  id: 'cia-p1-exam3-q-12',
  number: 12,
  text: "Laquelle ou lesquelles des mesures de vérification interne suivantes représente(nt) une mesure appropriée en réponse au processus d'évaluation des risques ?",
  answers: [
    { id: 'a', text: "Déléguer les secteurs à faible risque à l’auditeur externe.", isCorrect: false },
    { id: 'b', text: "N'inclure au calendrier que les secteurs à haut risque.", isCorrect: false },
    { id: 'c', text: "Effectuer l'analyse des risques uniquement une fois l'an.", isCorrect: false },
    { id: 'd', text: "Rien de ce qui précède.", isCorrect: true },
  ],
  answerType: "single",
  explanation: "Aucune des propositions ne correspond aux bonnes pratiques en matière de planification basée sur les risques.",
  difficulty: "medium",
  topic: "cia-p1-exam-3",
  chapter: "cia-p1-eb3-risk",
  status: "unseen",
};

export const question13: Question = {
  id: 'cia-p1-exam3-q-13',
  number: 13,
  text: "Selon les normes, les auditeurs internes fournissent des services d'assurance et de consultation. Lequel des services suivants serait considéré comme consultation ?",
  answers: [
    { id: 'a', text: "I et II seulement.", isCorrect: false },
    { id: 'b', text: "I, II et III seulement.", isCorrect: false },
    { id: 'c', text: "II, III et IV seulement.", isCorrect: true },
    { id: 'd', text: "I, II, III et IV.", isCorrect: false },
  ],
  answerType: "multiple",
  explanation: "La facilitation, la formation et la conception de processus sont des services de consultation, contrairement aux missions de conformité.",
  difficulty: "medium",
  topic: "cia-p1-exam-3",
  chapter: "cia-p1-eb3-advisory",
  status: "unseen",
};

export const question14: Question = {
  id: 'cia-p1-exam3-q-14',
  number: 14,
  text: "Quel type de mission tente d'obtenir de l'information sur les coûts, les extrants, les avantages et les effets d'un programme ?",
  answers: [
    { id: 'a', text: "Engagement à l’égard des résultats du programme.", isCorrect: true },
    { id: 'b', text: "Engagement du processus.", isCorrect: false },
    { id: 'c', text: "Engagement de conformité.", isCorrect: false },
    { id: 'd', text: "Engagement en matière de protection de la vie privée.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Les missions axées sur les résultats d’un programme évaluent coûts, extrants et impacts.",
  difficulty: "medium",
  topic: "cia-p1-exam-3",
  chapter: "cia-p1-eb3-engagements",
  status: "unseen",
};

export const question15: Question = {
  id: 'cia-p1-exam3-q-15',
  number: 15,
  text: "Une organisation veut améliorer ses mesures de rendement pour un nouveau secteur d'activité. Quel type d'analyse comparative est le plus utile ?",
  answers: [
    { id: 'a', text: "Fonctionnelle.", isCorrect: true },
    { id: 'b', text: "Compétitive.", isCorrect: false },
    { id: 'c', text: "Générique.", isCorrect: false },
    { id: 'd', text: "Interne.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "L’analyse fonctionnelle compare les meilleures pratiques d’organisations leaders dans une même fonction.",
  difficulty: "medium",
  topic: "cia-p1-exam-3",
  chapter: "cia-p1-eb3-benchmarking",
  status: "unseen",
};

export const question16: Question = {
  id: 'cia-p1-exam3-q-16',
  number: 16,
  text: "La direction demande aux auditeurs internes de développer une méthode pour contrôler les coûts de téléphonie mobile. Quel élément serait le plus approprié dans la portée du projet ?",
  answers: [
    { id: 'a', text: "Auto-évaluation du contrôle.", isCorrect: false },
    { id: 'b', text: "Benchmarking avec d'autres organisations.", isCorrect: false },
    { id: 'c', text: "Examen des processus opérationnels (BPR).", isCorrect: true },
    { id: 'd', text: "Mesure du rendement et conception des prévisions.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Un BPR permet d’évaluer l'efficience et les contrôles des processus liés aux achats et facturations.",
  difficulty: "medium",
  topic: "cia-p1-exam-3",
  chapter: "cia-p1-eb3-consulting",
  status: "unseen",
};

export const question17: Question = {
  id: 'cia-p1-exam3-q-17',
  number: 17,
  text: "Quelles procédures sont appropriées pour vérifier si les dépassements d’un projet proviennent de coûts mal comptabilisés dans les ordres de modification ?",
  answers: [
    { id: 'a', text: "I seulement.", isCorrect: false },
    { id: 'b', text: "III seulement.", isCorrect: false },
    { id: 'c', text: "I et II seulement.", isCorrect: true },
    { id: 'd', text: "I et III seulement.", isCorrect: false },
  ],
  answerType: "multiple",
  explanation: "Les tests I et II vérifient l’exactitude et la validité des coûts associés aux ordres de modification.",
  difficulty: "medium",
  topic: "cia-p1-exam-3",
  chapter: "cia-p1-eb3-construction",
  status: "unseen",
};

export const question18: Question = {
  id: 'cia-p1-exam3-q-18',
  number: 18,
  text: "Pour décider de mener une mission de commerce électronique, le RAI doit évaluer :",
  answers: [
    { id: 'a', text: "Indépendance et objectivité.", isCorrect: false },
    { id: 'b', text: "Niveau de compétence et capacité.", isCorrect: true },
    { id: 'c', text: "Niveau de compétence et objectivité.", isCorrect: false },
    { id: 'd', text: "Indépendance et capacité.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Le e-commerce exige des ressources et des compétences techniques spécifiques.",
  difficulty: "medium",
  topic: "cia-p1-exam-3",
  chapter: "cia-p1-eb3-ecommerce",
  status: "unseen",
};

export const question19: Question = {
  id: 'cia-p1-exam3-q-19',
  number: 19,
  text: "Dans une mission de protection de la vie privée, quelle question l’auditeur interne ne doit-il PAS examiner ?",
  answers: [
    { id: 'a', text: "Conformité aux lois.", isCorrect: false },
    { id: 'b', text: "Exactitude des renseignements personnels.", isCorrect: true },
    { id: 'c', text: "Protection et contrôles sur les données personnelles.", isCorrect: false },
    { id: 'd', text: "Respect de la confidentialité.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "L’exactitude des données n’est pas du ressort de l’audit de vie privée.",
  difficulty: "medium",
  topic: "cia-p1-exam-3",
  chapter: "cia-p1-eb3-privacy",
  status: "unseen",
};

export const question20: Question = {
  id: 'cia-p1-exam3-q-20',
  number: 20,
  text: "Dans quel type d’atelier l’animateur identifie-t-il les principaux risques et contrôles avant le début ?",
  answers: [
    { id: 'a', text: "Basé sur le processus.", isCorrect: false },
    { id: 'b', text: "Basé sur le contrôle.", isCorrect: true },
    { id: 'c', text: "Basé sur les risques.", isCorrect: false },
    { id: 'd', text: "Basé sur les objectifs.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Le format basé sur les contrôles exige une identification préalable des risques et contrôles par l’animateur.",
  difficulty: "medium",
  topic: "cia-p1-exam-3",
  chapter: "cia-p1-eb3-workshops",
  status: "unseen",
};

export const examen3Part2 = [
  {
    numero: 21,
    question: "Quels sont les principaux avantages de la mise en œuvre d'un processus d'auto-évaluation des risques et du contrôle ?",
    choix: {
      a: "I et II seulement",
      b: "III et IV seulement",
      c: "I et IV seulement",
      d: "II et IV seulement",
    },
    reponse: "c",
    explication: `
      I est correct : L’ACOR aide les employés à mieux comprendre les risques et les contrôles.
      II est incorrect : Elle ne garantit pas directement une réduction d’erreurs.
      III est incorrect : Elle n’assure pas la détection précoce, seulement un mécanisme possible.
      IV est correct : Elle responsabilise davantage les employés et améliore la reddition de comptes.
    `,
  },

  {
    numero: 22,
    question: "Pourquoi l'utilisation de l'AAI pour coordonner les efforts des examinateurs de la réglementation est-elle bénéfique ?",
    choix: {
      a: "Influencer l'interprétation de la loi",
      b: "Recommander des changements de portée",
      c: "Effectuer le travail de terrain pour les examinateurs",
      d: "Fournir des preuves de conformité via les documents de travail",
    },
    reponse: "d",
    explication: `
      L’AAI peut fournir immédiatement des documents et preuves utiles aux examinateurs.
      Elle ne doit pas influencer, restreindre la portée ou faire le travail des examinateurs.
    `,
  },

  {
    numero: 23,
    question: "Quel est l'objectif du RAI dans une rencontre avec l’auditeur externe pour un audit externe du régime de retraite ?",
    choix: {
      a: "Déterminer les soldes déjà vérifiés",
      b: "Coordonner pour éviter le double emploi",
      c: "Aligner les méthodes et techniques",
      d: "Remplacer l’auditeur externe",
    },
    reponse: "b",
    explication: `
      L'objectif est la coordination (Norme 2050). 
      Le but : éviter les chevauchements et optimiser la couverture d’audit.
    `,
  },

  {
    numero: 24,
    question: "Le RAI doit communiquer le plan de vérification annuel au conseil pour toutes les raisons suivantes, sauf :",
    choix: {
      a: "Fournir informations sur le plan de travail et budget",
      b: "Permettre de vérifier si l’AAI supporte bien les objectifs",
      c: "Fournir de l'information sur l’indépendance de l’auditeur externe",
      d: "Communiquer les limitations possibles de la portée",
    },
    reponse: "c",
    explication: `
      Le plan de vérification ne traite pas de l’indépendance de l’auditeur externe.
    `,
  },

  {
    numero: 25,
    question: "Quel élément NE serait PAS un indicateur clé de rendement (ICR) approprié pour l’AAI ?",
    choix: {
      a: "Taux de roulement du personnel",
      b: "Nombre d’audits réalisés par auditeur",
      c: "Vérifications terminées vs prévues",
      d: "Taux de répartition des frais généraux",
    },
    reponse: "d",
    explication: `
      Le taux de répartition des frais généraux concerne la direction générale, pas l’AAI.
    `,
  },

  {
    numero: 26,
    question: "Quel objectif principal est visé lors d’un audit pour vérifier l’enregistrement rapide et exact des ventes à crédit ?",
    choix: {
      a: "I et II",
      b: "I et IV",
      c: "I, II et IV",
      d: "II, III et IV",
    },
    reponse: "b",
    explication: `
      I : Fiabilité et intégrité de l'information — OUI.
      II : Conformité — NON.
      IV : Sauvegarde des biens — OUI (éviter pertes liées à erreurs).
    `,
  },

  {
    numero: 27,
    question: "Le processus de planification d’une mission inclut tout sauf :",
    choix: {
      a: "Établir les objectifs et la portée",
      b: "Obtenir les renseignements généraux",
      c: "Identifier suffisamment d'informations pour atteindre les objectifs",
      d: "Déterminer comment et à qui les résultats seront communiqués",
    },
    reponse: "c",
    explication: `
      L'identification d'informations suffisantes se fait pendant le travail sur le terrain, pas en planification.
    `,
  },

  {
    numero: 28,
    question: "Quel est un objectif de conformité externe pour le cycle de paie ?",
    choix: {
      a: "Validation indépendante des feuilles de temps",
      b: "Calcul et comptabilisation correcte des avantages",
      c: "Retenir le bon montant des charges sociales",
      d: "Payer au taux convenu",
    },
    reponse: "c",
    explication: `
      C relève d’une obligation légale (déductions sociales).
    `,
  },

  {
    numero: 29,
    question: "Objectif approprié lors d’un audit du service du personnel ?",
    choix: {
      a: "Rémunération des employés à l’heure adéquate",
      b: "Programme de formation égal pour tous",
      c: "Vérification des références des candidats",
      d: "Recrutement délégué par département",
    },
    reponse: "c",
    explication: `
      Le service du personnel est responsable des embauches et doit vérifier les références.
    `,
  },

  {
    numero: 30,
    question: "Un programme de travail doit inclure tout sauf :",
    choix: {
      a: "Objectifs spécifiques",
      b: "Procédures d’audit",
      c: "Fiabilité de l’information",
      d: "Nature et étendue des essais",
    },
    reponse: "c",
    explication: `
      La fiabilité de l'information est déterminée durant l’exécution, pas dans le programme de travail.
    `,
  },
];

export const question31: Question = {
  id: 'cia-p1-eb2-q-31',
  number: 31,
  text: "Lors de la planification d'une mission, l'auditeur interne doit établir des objectifs pour faire face au risque associé à l'activité à auditer. Lequel des éléments suivants serait considéré comme un risque potentiel associé à la paie ?",
  answers: [
    { id: 'a', text: "I et II seulement.", isCorrect: false },
    { id: 'b', text: "I, II et III seulement.", isCorrect: true },
    { id: 'c', text: "I, III et IV seulement.", isCorrect: false },
    { id: 'd', text: "I, II, III et IV.", isCorrect: false },
  ],
  answerType: "single",
  explanation:
    "I, II et III sont des risques potentiels : heures incorrectes, employés fictifs, non-respect des lois. IV est une force de contrôle, pas un risque.",
  difficulty: "medium",
  topic: "audit-planning",
  chapter: "payroll",
  status: "unseen",
};

export const question32: Question = {
  id: 'cia-p1-eb2-q-32',
  number: 32,
  text: "L'auditeur interne responsable vient d'être informé de la prochaine mission et l'équipe a été affectée. À quel moment finaliser le budget de la mission ?",
  answers: [
    { id: 'a', text: "Lors de la formulation du plan à long terme.", isCorrect: false },
    { id: 'b', text: "Après l'enquête préliminaire.", isCorrect: true },
    { id: 'c', text: "Au cours de la première réunion de planification.", isCorrect: false },
    { id: 'd', text: "Après l’achèvement de tous les travaux sur le terrain.", isCorrect: false },
  ],
  answerType: "single",
  explanation:
    "Le budget final est élaboré une fois l’enquête préliminaire terminée et les informations nécessaires recueillies.",
  difficulty: "medium",
  topic: "audit-planning",
  chapter: "engagement-planning",
  status: "unseen",
};

export const question33: Question = {
  id: 'cia-p1-eb2-q-33',
  number: 33,
  text: "Lors de la détermination des ressources nécessaires à une mission, quels sont les éléments à considérer ?",
  answers: [
    { id: 'a', text: "I et II seulement.", isCorrect: true },
    { id: 'b', text: "I et IV seulement.", isCorrect: false },
    { id: 'c', text: "II et III seulement.", isCorrect: false },
    { id: 'd', text: "III et IV seulement.", isCorrect: false },
  ],
  answerType: "single",
  explanation:
    "Les auditeurs doivent tenir compte du nombre, de l'expérience, et des compétences nécessaires. III et IV concernent la planification des tests, pas la détermination des ressources.",
  difficulty: "medium",
  topic: "audit-planning",
  chapter: "resources",
  status: "unseen",
};

export const question34: Question = {
  id: 'cia-p1-eb2-q-34',
  number: 34,
  text: "La dernière étape de la planification consiste à élaborer le programme de travail. Quels éléments doivent y figurer ?",
  answers: [
    { id: 'a', text: "I et III seulement.", isCorrect: true },
    { id: 'b', text: "I et IV seulement.", isCorrect: false },
    { id: 'c', text: "I, III et IV seulement.", isCorrect: false },
    { id: 'd', text: "II, III et IV seulement.", isCorrect: false },
  ],
  answerType: "single",
  explanation:
    "Le programme de travail doit inclure les objectifs et les éléments techniques/risques à examiner. Il ne nécessite pas l'approbation du client.",
  difficulty: "medium",
  topic: "audit-planning",
  chapter: "work-program",
  status: "unseen",
};

export const question35: Question = {
  id: 'cia-p1-eb2-q-35',
  number: 35,
  text: "Un contrôleur rapproche les relevés d'heures et la répartition des coûts. Si aucune exception n'est constatée, cela prouve que :",
  answers: [
    { id: 'a', text: "Les comptes WIP ne contiennent aucun coût salarial injustifié.", isCorrect: false },
    { id: 'b', text: "Les relevés d'heures ont été dûment autorisés.", isCorrect: false },
    { id: 'c', text: "Les coûts salariaux ont été correctement répartis entre les comptes WIP.", isCorrect: true },
    { id: 'd', text: "Les employés n’ont été payés que pour le temps réellement travaillé.", isCorrect: false },
  ],
  answerType: "single",
  explanation:
    "Le rapprochement établit que les charges salariales sont imputées aux bons comptes WIP, pas qu’elles sont autorisées ou réellement travaillées.",
  difficulty: "medium",
  topic: "internal-control",
  chapter: "payroll-cost-accounting",
  status: "unseen",
};

export const question36: Question = {
  id: 'cia-p1-eb2-q-36',
  number: 36,
  text: "Lors d'un audit des achats, les procédures appliquées diffèrent de celles codifiées, mais elles sont plus efficaces sans diminuer le contrôle. Que doit faire l’auditeur ?",
  answers: [
    { id: 'a', text: "Signaler une lacune opérationnelle.", isCorrect: false },
    { id: 'b', text: "Élaborer un organigramme des nouvelles procédures.", isCorrect: false },
    { id: 'c', text: "Signaler le changement et recommander de documenter les nouvelles procédures.", isCorrect: true },
    { id: 'd', text: "Suspendre la mission jusqu'à documentation officielle.", isCorrect: false },
  ],
  answerType: "single",
  explanation:
    "Le changement doit être documenté pour refléter la réalité opérationnelle. Ce n’est ni une lacune ni une raison d’arrêter la mission.",
  difficulty: "medium",
  topic: "procurement",
  chapter: "process-changes",
  status: "unseen",
};

export const question37: Question = {
  id: 'cia-p1-eb2-q-37',
  number: 37,
  text: "Les données comptables internes constituent-elles une preuve suffisante pour une conclusion d’audit ?",
  answers: [
    { id: 'a', text: "Oui, car c'est la preuve la plus compétente.", isCorrect: false },
    { id: 'b', text: "Non, car ce type de preuve est interne et doit être corroboré.", isCorrect: true },
    { id: 'c', text: "Oui, car c'est une preuve concluante.", isCorrect: false },
    { id: 'd', text: "Non, car cette preuve est générée à l'extérieur.", isCorrect: false },
  ],
  answerType: "single",
  explanation:
    "Les données comptables internes ne sont pas suffisantes : elles doivent être corroborées par des documents externes.",
  difficulty: "medium",
  topic: "audit-evidence",
  chapter: "evidence-types",
  status: "unseen",
};

export const question38: Question = {
  id: 'cia-p1-eb2-q-38',
  number: 38,
  text: "Lors de l'évaluation des risques liés aux contrats de vente et aux commissions, quelle situation entraînerait une extension de la portée ?",
  answers: [
    { id: 'a', text: "Hausse des ventes + hausse des commissions.", isCorrect: false },
    { id: 'b', text: "Hausse des retours + hausse des commissions.", isCorrect: true },
    { id: 'c', text: "Baisse des commissions + baisse des ventes.", isCorrect: false },
    { id: 'd', text: "Baisse des retours + hausse des ventes.", isCorrect: false },
  ],
  answerType: "single",
  explanation:
    "Une augmentation simultanée des retours et des commissions peut indiquer une surévaluation des ventes.",
  difficulty: "medium",
  topic: "risk-assessment",
  chapter: "sales-commissions",
  status: "unseen",
};

export const question39: Question = {
  id: 'cia-p1-eb2-q-39',
  number: 39,
  text: "Un programme de travail standardisé ne serait pas approprié dans quel cas ?",
  answers: [
    { id: 'a', text: "Environnement stable.", isCorrect: false },
    { id: 'b', text: "Environnement complexe ou changeant.", isCorrect: true },
    { id: 'c', text: "Succursales ayant des opérations similaires.", isCorrect: false },
    { id: 'd', text: "Audit d'inventaire répété au même endroit.", isCorrect: false },
  ],
  answerType: "single",
  explanation:
    "Dans un environnement complexe ou changeant, un programme standardisé ne serait plus pertinent.",
  difficulty: "medium",
  topic: "audit-planning",
  chapter: "work-programs",
  status: "unseen",
};

export const question40: Question = {
  id: 'cia-p1-eb2-q-40',
  number: 40,
  text: "Les programmes de travail testant les contrôles internes doivent être :",
  answers: [
    { id: 'a', text: "Adaptés à chaque opération.", isCorrect: true },
    { id: 'b', text: "Généralisés pour toutes les situations.", isCorrect: false },
    { id: 'c', text: "Uniformes pour tous les sites internationaux.", isCorrect: false },
    { id: 'd', text: "Conçus pour couvrir tous les aspects de l'opération.", isCorrect: false },
  ],
  answerType: "single",
  explanation:
    "Les contrôles étant propres à chaque processus, les programmes doivent être adaptés à chaque opération.",
  difficulty: "medium",
  topic: "internal-control",
  chapter: "work-programs",
  status: "unseen",
};

export const examen3Part5 = [
  {
    numero: 41,
    question: "Tous les facteurs suivants sont des facteurs de risque sauf :",
    choix: {
      a: "Possibilité que les soldes ou opérations contiennent des inexactitudes importantes.",
      b: "Échec de l'auditeur interne à négocier avec le client sur le contenu de la communication finale.",
      c: "Défaut de se conformer aux politiques, plans, procédures ou lois applicables.",
      d: "Incapacité d’atteindre les objectifs et buts opérationnels.",
    },
    reponse: "b",
    explication: `
      Seule la réponse b n'est pas un facteur de risque.
      L'auditeur interne ne négocie pas le contenu du rapport ; il confirme seulement l'exactitude factuelle.
    `,
  },

  {
    numero: 42,
    question: "Lors de la préparation d’un programme de travail, l’auditeur interne ne serait pas préoccupé par :",
    choix: {
      a: "Les constatations de l’évaluation préliminaire des risques.",
      b: "Le matériel provenant des communications de missions antérieures.",
      c: "La modification du programme de travail, si nécessaire.",
      d: "Les critères établis par la direction pour mesurer les objectifs opérationnels.",
    },
    reponse: "c",
    explication: `
      Modifier le programme de travail peut être nécessaire, mais ce n’est pas une préoccupation initiale
      lors de sa préparation. Les autres éléments influencent directement la construction du programme.
    `,
  },

  {
    numero: 43,
    question: "Quelle procédure est appropriée pour vérifier si les chèques annulés portent des signatures autorisées ?",
    choix: {
      a: "Comparer la date de contrôle avec la première date d’annulation.",
      b: "S’assurer que tous les chèques sont signés par des personnes autorisées.",
      c: "Examiner un échantillon de chèques signés et vérifier les signatures dans le cahier des signatures.",
      d: "Terminer les tests de contrôle des signatures en 4 heures.",
    },
    reponse: "c",
    explication: `
      Tester un échantillon de chèques et comparer avec la liste des signataires autorisés
      est la procédure de mission correcte.
    `,
  },

  {
    numero: 44,
    question: "L’auditeur interne veut vérifier si tous les débits du compte de dépenses de sécurité informatique sont appropriés. Quelle est la procédure la plus appropriée ?",
    choix: {
      a: "Échantillonner des caractéristiques de factures et vérifier leur classification.",
      b: "Comparer les dépenses actuelles avec celles des cinq années précédentes.",
      c: "Échantillonner les dépenses salariales imputées par l’entreprise d’impartition.",
      d: "Échantillonner tous les débits au compte et vérifier les documents sources.",
    },
    reponse: "d",
    explication: `
      Pour valider la nature et l’autorisation de chaque dépense, il faut comparer
      directement aux pièces justificatives. Les autres techniques ne permettent pas
      ce niveau de précision.
    `,
  },

  {
    numero: 45,
    question: "Les preuves qui appuient une proposition déjà étayée par une preuve initiale sont :",
    choix: {
      a: "Preuves directes",
      b: "Preuves corroboratives",
      c: "Preuves circonstancielles",
      d: "Preuves concluantes",
    },
    reponse: "b",
    explication: `
      La preuve corroborative vient renforcer une preuve initiale.
    `,
  },

  {
    numero: 46,
    question: "Quel énoncé décrit le mieux une enquête préliminaire ?",
    choix: {
      a: "Questionnaire standardisé pour comprendre les objectifs de gestion.",
      b: "Échantillonnage statistique des attitudes et compétences des employés.",
      c: "Revue du système de contrôle financier pour identifier les risques.",
      d: "Processus visant à se familiariser avec les activités et risques pour cibler la mission.",
    },
    reponse: "d",
    explication: `
      L’enquête préliminaire permet de comprendre les activités, risques et
      contrôles afin de définir l’orientation de la mission.
    `,
  },

  {
    numero: 47,
    question: "Lors d'une enquête préliminaire, un organigramme révèle une faiblesse de contrôle. Que doit faire l’auditeur ?",
    choix: {
      a: "Tester immédiatement pour déterminer la cause et l'effet.",
      b: "Rapporter la faiblesse immédiatement à la direction.",
      c: "Planifier une mission distincte.",
      d: "Inclure des procédures pour tester cette faiblesse dans le programme de travail.",
    },
    reponse: "d",
    explication: `
      À ce stade, l’auditeur doit simplement s’assurer que la faiblesse
      sera examinée durant le travail sur le terrain.
    `,
  },

  {
    numero: 48,
    question: "Quel élément ne contribue PAS à l'efficacité de l’enquête préliminaire ?",
    choix: {
      a: "Lire les informations de base pertinentes.",
      b: "Identifier les risques implicites.",
      c: "Identifier les personnes ressources.",
      d: "Examiner la pertinence et l’efficacité des contrôles.",
    },
    reponse: "d",
    explication: `
      L’évaluation détaillée des contrôles fait partie du travail sur le terrain, pas de l’enquête préliminaire.
    `,
  },

  {
    numero: 49,
    question: "Quelle observation reflète une force de contrôle dans le cycle de décaissement ?",
    choix: {
      a: "Les chefs de service utilisent des formulaires prénumérotés pour commander.",
      b: "Le service de réception reçoit une copie complète du bon de commande.",
      c: "Le trésorier prépare les paiements à partir des pièces du service comptes fournisseurs.",
      d: "Les chefs de service déplacent eux-mêmes les marchandises du quai.",
    },
    reponse: "c",
    explication: `
      La séparation des tâches entre comptes fournisseurs et trésorier
      constitue une force majeure de contrôle.
    `,
  },

  {
    numero: 50,
    question: "Si l’évaluation préliminaire révèle que les contrôles peuvent être inadéquats, l’étape suivante consiste à :",
    choix: {
      a: "Élargir les tests avant la communication finale.",
      b: "Préparer un organigramme.",
      c: "Noter une exception si des pertes sont survenues.",
      d: "Mettre en œuvre les contrôles nécessaires.",
    },
    reponse: "a",
    explication: `
      Lorsqu’un risque de contrôle faible apparaît, l’auditeur doit étendre les tests
      pour obtenir davantage de preuves avant de conclure.
    `,
  },
];

export const examen3Part7 = [
  {
    numero: 61,
    question: "L'information est considérée comme pertinente lorsque :",
    choix: {
      a: "Il est obtenu par un échantillonnage statistique valide.",
      b: "Elle est objective et impartiale.",
      c: "Elle est factuelle, adéquate et convaincante.",
      d: "Elle est conforme à l'objectif de la mission.",
    },
    reponse: "d",
    explication: `
      L'information pertinente appuie les observations, conclusions et recommandations et est alignée sur les objectifs de la mission.
    `,
  },

  {
    numero: 62,
    question: "Pour déterminer la suffisance de l'information concernant l'interprétation d'un contrat, un auditeur interne utilise :",
    choix: {
      a: "La meilleure information possible.",
      b: "Jugements subjectifs.",
      c: "Évaluations objectives.",
      d: "Relations logiques entre l'information et les enjeux.",
    },
    reponse: "c",
    explication: `
      La suffisance exige un jugement objectif de l'auditeur basé sur des preuves factuelles et convaincantes.
    `,
  },

  {
    numero: 63,
    question: "L'information est considérée comme suffisante lorsque :",
    choix: {
      a: "Il s'appuie sur des références considérées comme fiables.",
      b: "Elle est bien documentée et fait l'objet de renvois dans les documents de travail.",
      c: "Elle est directement liée aux observations de la mission et comprend tous les éléments d'une observation.",
      d: "Elle est suffisamment convaincante pour qu'une personne prudente en arrive à la même conclusion.",
    },
    reponse: "d",
    explication: `
      L'information suffisante est convaincante et permet à une personne prudente et bien informée d'arriver à la même conclusion que l'auditeur.
    `,
  },

  {
    numero: 64,
    question: "Les informations recueillies devraient aider à atteindre les objectifs de la mission. Elles doivent :",
    choix: {
      a: "Fournir une base solide pour les conclusions de la mission.",
      b: "Fournir une base absolue pour les conclusions de la mission.",
      c: "Être utile et convaincante.",
      d: "Être utile et fiable.",
    },
    reponse: "a",
    explication: `
      Les informations doivent être suffisantes, fiables, pertinentes et utiles pour soutenir les conclusions et recommandations.
    `,
  },

  {
    numero: 65,
    question: "Pour vérifier l'existence et l'exhaustivité de l'équipement opérationnel, l'inspection de l'équipement est :",
    choix: {
      a: "Suffisante et fiable.",
      b: "Suffisante et pertinente.",
      c: "Fiable et pertinente.",
      d: "Suffisante, fiable et pertinente.",
    },
    reponse: "c",
    explication: `
      L'inspection permet de constater la présence de l'équipement (fiable) et est directement liée à l'objectif de la mission (pertinente).
    `,
  },

  {
    numero: 66,
    question: "Concernant RiskSoft et l'examen des contrats signés pour vérifier l'exactitude des revenus, quelles qualités d'information sont présentes ?",
    choix: {
      a: "I et II seulement.",
      b: "II et III seulement.",
      c: "II, III et IV seulement.",
      d: "I, II, III et IV.",
    },
    reponse: "c",
    explication: `
      Les informations issues des contrats signés sont fiables (II), pertinentes (III) et utiles (IV), mais pas suffisantes (I) pour vérifier pleinement l'exactitude des revenus.
    `,
  },

  {
    numero: 67,
    question: "Concernant les dépôts en espèces non quotidiens, les informations issues des listes de rentrées et des dépôts bancaires sont :",
    choix: {
      a: "Suffisante mais non fiable ou pertinente.",
      b: "Suffisante, fiable et pertinente.",
      c: "Pas suffisant, fiable ou pertinent.",
      d: "Pertinent mais pas suffisant ou fiable.",
    },
    reponse: "b",
    explication: `
      L'information est suffisante (permet une conclusion raisonnable), fiable (vérifiée avec la banque) et pertinente (porte sur le dépôt quotidien des fonds).
    `,
  },

  {
    numero: 68,
    question: "Pour développer un organigramme du processus de traitement des commandes et expéditions, l'auditeur devrait :",
    choix: {
      a: "Commencer par les décisions de la direction sur les prix et préparer un organigramme de synthèse.",
      b: "Commencer par l'expédition des marchandises et retracer la transaction jusqu'à la commande.",
      c: "Commencer par la réception d'une commande et suivre le traitement manuel et informatisé jusqu'à l'expédition et la facturation.",
      d: "Obtenir l'organigramme du système de l'usine et interroger le personnel concerné.",
    },
    reponse: "c",
    explication: `
      L'auditeur commence par la réception de la commande et suit le flux complet pour créer un organigramme reflétant le processus réel.
    `,
  },

  {
    numero: 69,
    question: "À propos des organigrammes horizontaux pour comprendre le flux d'information, lequel est vrai ?",
    choix: {
      a: "Montrer les procédures de contrôle spécifiques utilisées.",
      b: "Constituent un bon guide sur la ségrégation des tâches.",
      c: "Sont généralement tenus à jour pour les changements des systèmes.",
      d: "Afficher uniquement le traitement informatique, pas le traitement manuel.",
    },
    reponse: "b",
    explication: `
      Les organigrammes permettent d'identifier la ségrégation possible des tâches et le transfert de données entre départements.
    `,
  },

  {
    numero: 70,
    question: "Quel outil permet de déterminer les problèmes fondamentaux d'un processus, comme les mauvaises responsabilités ?",
    choix: {
      a: "Diagramme de flux de données.",
      b: "Organigramme.",
      c: "Diagramme des spaghettis.",
      d: "Diagramme RACI.",
    },
    reponse: "d",
    explication: `
      Un diagramme RACI identifie qui est Responsable, Autorisé, Consulté ou Informé pour chaque étape, révélant les lacunes de responsabilité dans le processus.
    `,
  },
];
export const examen3Part8 = [
  {
    numero: 71,
    question: "Lequel des éléments suivants pourrait constituer un obstacle à l'analyse des causes fondamentales d'un auditeur interne ?",
    choix: {
      a: "Il peut être difficile et subjectif de déterminer la véritable cause profonde.",
      b: "L'auditeur interne peut ne pas être qualifié pour effectuer l'analyse.",
      c: "Déterminer s'il en coûte plus cher d'éliminer la cause profonde que de traiter le symptôme.",
      d: "La direction peut résister à l'analyse en raison de ressources limitées.",
    },
    reponse: "c",
    explication: `
      Décider du coût d'éliminer la cause profonde relève de la direction et ne constitue pas un obstacle à l'analyse.
    `,
  },

  {
    numero: 72,
    question: "Une entreprise possède 80 entrepôts avec 100 à 500 produits chacun. Que peut conclure l'auditeur ?",
    choix: {
      a: "Il y a au moins deux entrepôts avec le même nombre de produits.",
      b: "La majorité des entrepôts ont plus de 250 produits.",
      c: "Le nombre total de produits dans tous les entrepôts est d'au moins 8 400.",
      d: "Le nombre moyen de produits dans les entrepôts est de 300.",
    },
    reponse: "c",
    explication: `
      Au minimum, 79 entrepôts avec 100 produits + 1 avec 500 = 8 400 produits.
    `,
  },

  {
    numero: 73,
    question: "Pourquoi un auditeur compare le taux de rotation des stocks d'une filiale aux normes industrielles ?",
    choix: {
      a: "Évaluer l'exactitude des rapports financiers internes.",
      b: "Mettre à l'essai des contrôles de protection des actifs.",
      c: "Vérifier la conformité aux procédures internes sur les stocks.",
      d: "Évaluer le rendement et indiquer où des travaux supplémentaires sont nécessaires.",
    },
    reponse: "d",
    explication: `
      La procédure analytique évalue l'efficacité de la gestion des stocks et guide les travaux d'audit supplémentaires.
    `,
  },

  {
    numero: 74,
    question: "Compte débiteurs : 3 ans de données indiquent 23,4%, 27,3%, 30,8% avec ratios 6,98, 6,05, 5,21. Quelle explication ?",
    choix: {
      a: "Des ventes fictives peuvent avoir été enregistrées.",
      b: "Les procédures de crédit et recouvrement sont devenues inefficaces.",
      c: "La provision pour mauvaises créances est sous-estimée.",
      d: "Toutes les réponses sont correctes.",
    },
    reponse: "d",
    explication: `
      Tous les facteurs énumérés peuvent expliquer l'augmentation des comptes débiteurs nets et la baisse du ratio de rotation.
    `,
  },

  {
    numero: 75,
    question: "Division : chiffre d'affaires stable, stocks et marge brute augmentés. Quelles explications ?",
    choix: {
      a: "I seulement (nouveau procédé plus efficace).",
      b: "III seulement (inventaire sous-estimé).",
      c: "I et II seulement (nouveau procédé + augmentation prix unité).",
      d: "I, II et III.",
    },
    reponse: "c",
    explication: `
      Le nouveau procédé ou la hausse des prix peut augmenter la marge. Une sous-estimation des stocks réduirait la marge.
    `,
  },

  {
    numero: 76,
    question: "Les documents de travail de la mission sont examinés pour :",
    choix: {
      a: "Renvois appropriés aux communications de la mission.",
      b: "Aucune question en suspens à la fin du travail sur le terrain.",
      c: "Respecter ou dépasser les normes de travail des auditeurs externes.",
      d: "Faciliter le suivi au cours de la prochaine année.",
    },
    reponse: "b",
    explication: `
      L'examen s'assure que toutes les procédures nécessaires ont été effectuées et que rien n'est en suspens.
    `,
  },

  {
    numero: 77,
    question: "Fonctions des documents de travail de mission :",
    choix: {
      a: "I, III et IV seulement",
      b: "II, III et IV seulement",
      c: "I, II et III seulement",
      d: "I, II, III et IV",
    },
    reponse: "c",
    explication: `
      Les documents de travail facilitent l'examen par des tiers, soutiennent les résultats et aident à la planification, exécution, supervision et revue. Ils ne développent pas le personnel comptable.
    `,
  },

  {
    numero: 78,
    question: "Quel document de travail est déficient s'il manque des renvois à d'autres documents pertinents ?",
    choix: {
      a: "Compte de petite caisse",
      b: "Confirmation du solde de trésorerie auprès de la banque",
      c: "Copies des bordereaux de dépôt",
      d: "Déclaration du client sur l'exactitude du solde",
    },
    reponse: "b",
    explication: `
      La confirmation bancaire externe est la procédure standard pour valider le solde de trésorerie et doit être correctement référencée.
    `,
  },

  {
    numero: 79,
    question: "Lacune du document de travail mentionné :",
    choix: {
      a: "Document de travail normalisé non utilisé",
      b: "Symboles de vérification non expliqués",
      c: "Pas de procédure d'analyse analytique",
      d: "Renvois aux documents non effectués",
    },
    reponse: "b",
    explication: `
      Chaque symbole de vérification sur un document de travail doit être expliqué ; ici, il manque l'explication pour les chèques en souffrance.
    `,
  },

  {
    numero: 80,
    question: "Type de résumé de document de travail pour consolider des données numériques dispersées ?",
    choix: {
      a: "Résumés statistiques",
      b: "Résumés des segments",
      c: "Résumés des résultats",
      d: "Résumés pyramidaux",
    },
    reponse: "a",
    explication: `
      Les résumés statistiques consolidant plusieurs annexes sont utilisés pour synthétiser des données numériques.
    `,
  },
];

interface LocalQuestion {
id: number;
question: string;
options: string[];
correct: string;
explanation: string;
}

export const ciaPart2Questions81to90: LocalQuestion[] = [
{
id: 81,
question: "Les auditeurs internes utilisent diverses méthodes d'indexation et de recoupement dans leurs documents de travail. Quelle raison explique la différence entre une méthode spécifique à une organisation et une méthode uniforme pour un organisme gouvernemental ?",
options: [
"Le directeur de la vérification interne conçoit une méthode qui simplifie le processus d'examen au sein d'une organisation particulière, mais l'organisme gouvernemental conçoit une méthode uniforme pour simplifier le processus d'examen des organisations très différentes qui doivent être examinées.",
"La méthode du gestionnaire de la vérification interne est prescrite par les normes, mais la méthode de l'organisme gouvernemental est exigée par l'organisme de réglementation.",
"La méthode du responsable de l'audit interne est prescrite par les normes, mais la méthode de l'organisme gouvernemental est requise par la loi.",
"Le responsable de l'audit interne élabore la méthode spécifiée par le conseil d'administration de l'organisation, mais l'agence gouvernementale élabore une méthode uniforme requise par la loi."
],
correct: "a",
explanation: "Le auditeur interne d'une organisation privée élabore les méthodes qui conviennent le mieux à l'organisation, alors qu'un organisme gouvernemental élabore des méthodes uniformes applicables à toutes les organisations sous sa juridiction."
},
{
id: 82,
question: "Un coefficient de corrélation de -0,90 signifie que :",
options: [
"La relation entre les variables est faible.",
"La relation entre les variables est forte et positive.",
"La relation entre les variables est forte et négative.",
"Aucune de ces réponses n'est correcte."
],
correct: "c",
explanation: "Un coefficient de corrélation varie entre -1 et +1. Une valeur de -0,90 indique une relation forte et négative entre les variables."
},
{
id: 83,
question: "Parmi les outils pour aider un superviseur de vérification interne, lequel serait le moins utile pour superviser une mission particulière ?",
options: [
"Tableau des affectations",
"Budget temps",
"Rapport de situation hebdomadaire",
"Rapport de temps"
],
correct: "a",
explanation: "Le tableau des affectations fournit un aperçu minimal des membres du personnel et n'aide pas directement à superviser la mission."
},
{
id: 84,
question: "La supervision du travail des auditeurs internes devrait être assurée en permanence. Quels énoncés sont vrais ?",
options: [
"II seulement",
"I seulement",
"I et III seulement",
"I, II et III"
],
correct: "d",
explanation: "La supervision doit être continue tout au long de la mission, inclure la formation, le suivi du temps et des dépenses, et être documentée."
},
{
id: 85,
question: "Une supervision adéquate comprend tous les éléments suivants, sauf :",
options: [
"S'assurer que le personnel possède les compétences nécessaires",
"Les modifications apportées aux missions ont été approuvées par le client",
"S'assurer que les communications sont exactes, objectives, concises et opportunes",
"Assurer le contrôle budgétaire des engagements"
],
correct: "b",
explanation: "Les modifications à la mission doivent être approuvées par le responsable de l'audit interne (RAI) et non par le client."
},
{
id: 86,
question: "Laquelle des situations suivantes n'est pas considérée comme une dénonciation ?",
options: [
"Un contrôleur écrit à un journal local pour accuser le CFO de fraude",
"Un contrôleur informe le directeur du service de la fraude du CFO",
"Un contrôleur informe le CEO des fraudes commises par le CFO",
"Un contrôleur expose la fraude à la commission des valeurs mobilières"
],
correct: "c",
explanation: "La dénonciation implique de signaler un problème en dehors de la chaîne de commandement. Ici, informer le CEO fait partie de la chaîne de commandement, donc ce n'est pas une dénonciation."
},
{
id: 87,
question: "Lorsqu'un auditeur interne constate des fuites d'eau sur des produits frais, quel type de communication est approprié ?",
options: [
"Communication sommaire",
"Dernière communication d'engagement",
"Communication de sortie",
"Communication orale"
],
correct: "d",
explanation: "Les communications orales sont appropriées lorsque la situation est urgente et nécessite une notification immédiate à la direction."
},
{
id: 88,
question: "Qui trouverait le rapport final le plus utile pour des faiblesses dans le recouvrement des créances ?",
options: [
"PDG",
"Président du comité de vérification",
"Gestionnaire des créances",
"Directeur du crédit"
],
correct: "c",
explanation: "Les faiblesses de contrôle du service des comptes débiteurs sont les plus pertinentes pour le gestionnaire des créances."
},
{
id: 89,
question: "Que devrait faire le RAI après qu'un gestionnaire de l'entrepôt promet des mesures correctives sur des fuites d'eau ?",
options: [
"Modifier la portée de la prochaine vérification régulière",
"Surveiller l'état d'avancement des mesures correctives et prévoir une mission de suivi si nécessaire",
"Prévoir une mission de suivi dans les trois mois",
"Discuter des constatations avec le comité de vérification et demander les mesures de suivi"
],
correct: "b",
explanation: "Le RAI doit surveiller l'avancement des mesures correctives et planifier une mission de suivi si nécessaire."
},
{
id: 90,
question: "Quelle est la responsabilité de l'auditeur interne lorsqu'une organisation n'a pas de système pour assurer la conformité aux lois ?",
options: [
"I seulement",
"I et II seulement",
"II et III seulement",
"I, II, III et IV"
],
correct: "d",
explanation: "L'auditeur doit signaler qu'aucun problème de conformité majeur n'a été relevé, identifier la lacune, rencontrer la direction pour déterminer les mesures et contrôler leur mise en œuvre."
}
];
export const examen3Part9 = [
  {
    numero: 91,
    question: "Quelle mesure est la plus appropriée en cas d'observation répétée de violations de la politique de l'entreprise en matière d'appels d'offres ?",
    choix: {
      a: "Indiquer dans la communication finale que cette condition avait été signalée précédemment.",
      b: "Informer la direction lors de l'entrevue de départ que la violation n'a pas été corrigée.",
      c: "Le responsable de l'audit interne doit déterminer si la direction ou le conseil d'administration assume le risque de ne pas prendre de mesures correctives.",
      d: "Déterminer si cette condition doit être communiquée à l'auditeur externe et aux régulateurs.",
    },
    reponse: "c",
    explication: `
      La direction peut décider d'assumer le risque de ne pas corriger une condition signalée pour diverses raisons (coût, priorité, etc.).
    `,
  },

  {
    numero: 92,
    question: "Un comité de vérification constate que la direction ne donne pas suite aux recommandations de l'audit interne. Que doit faire le comité ?",
    choix: {
      a: "Exiger des gestionnaires des plans d'action détaillés.",
      b: "Exiger que tous les gestionnaires confirment avoir pris les mesures.",
      c: "Exiger que le chef de la direction signale les raisons de non-action.",
      d: "Exiger que le responsable de l'audit interne établisse des procédures de suivi.",
    },
    reponse: "d",
    explication: `
      Il appartient au RAI de mettre en place des procédures de suivi pour surveiller les progrès sur toutes les observations et recommandations.
    `,
  },

  {
    numero: 93,
    question: "Lors d'une mission de suivi des comptes fournisseurs, que doit vérifier l'auditeur pour corriger un problème de séparation des tâches ?",
    choix: {
      a: "Transférer les personnes à un autre département.",
      b: "Comparer les fichiers de base des fournisseurs pour détecter des entrées non autorisées.",
      c: "Modifier le système de contrôle d'accès pour empêcher la saisie et l'approbation par les mêmes employés.",
      d: "Modifier le système des comptes fournisseurs pour empêcher les personnes du fichier principal d'entrer des factures.",
    },
    reponse: "d",
    explication: `
      Cette action corrige directement la lacune identifiée en séparant les responsabilités.
    `,
  },

  {
    numero: 94,
    question: "Quelle technique l'AAI peut-elle utiliser pour surveiller les transferts de coûts inappropriés d'immobilisations vers l'inventaire ?",
    choix: {
      a: "Identifier les écarts mensuels entre capitalisation et budget.",
      b: "Analyser un échantillon de transactions trimestrielles.",
      c: "Examiner toutes les écritures ayant transféré les coûts du capital à l'inventaire.",
      d: "Comparer les entrées d'inventaire avec les débits au compte d'inventaire.",
    },
    reponse: "c",
    explication: `
      Cette méthode cible spécifiquement le problème des transferts inappropriés.
    `,
  },

  {
    numero: 95,
    question: "Quelle est la responsabilité de l'audit interne concernant le suivi d'une mission antérieure ?",
    choix: {
      a: "Déterminer si des mesures correctives ont été prises et si les résultats attendus sont atteints ou si le risque de non-action a été assumé.",
      b: "Déterminer seulement si la direction a pris des mesures correctives, pas leur efficacité.",
      c: "Le suivi est discrétionnaire sauf demande du comité ou direction.",
      d: "Aucune responsabilité.",
    },
    reponse: "a",
    explication: `
      Le suivi permet de vérifier l'efficacité des mesures correctives ou si la direction a assumé le risque de non-action.
    `,
  },

  {
    numero: 96,
    question: "Lors du suivi d'une vérification sur les routines de gestion de trésorerie, quel élément n'est pas pris en compte ?",
    choix: {
      a: "Le risque inhérent a été éliminé.",
      b: "Les mesures ont résolu la condition révélée.",
      c: "Des contrôles ont été mis en place pour éviter la récurrence.",
      d: "L'entité a bénéficié d'avantages de la résolution.",
    },
    reponse: "a",
    explication: `
      L'élimination du risque inhérent n'est pas réaliste ni nécessairement mesurable.
    `,
  },

  {
    numero: 97,
    question: "Le suivi des recommandations n'a pas été prévu par le gestionnaire en raison de la rareté des ressources. Était-ce approprié ?",
    choix: {
      a: "Oui, le suivi n'est pas habituel.",
      b: "Non, l'audit interne doit vérifier la mise en œuvre.",
      c: "Non, la rareté des ressources n'excuse pas l'absence de suivi.",
      d: "Oui, si la motivation du client est suffisante.",
    },
    reponse: "c",
    explication: `
      Un suivi est nécessaire selon la norme 2500 ; la rareté des ressources n'est pas une excuse.
    `,
  },

  {
    numero: 98,
    question: "Que doit faire le RAI si des mesures correctives n'ont pas été prises par la direction malgré l'accord initial ?",
    choix: {
      a: "Décider de l'ampleur du travail de suivi nécessaire.",
      b: "Laisser la direction décider du moment du suivi.",
      c: "Effectuer un suivi seulement si demandé par la direction.",
      d: "Rédiger une communication de suivi sans planification préalable.",
    },
    reponse: "a",
    explication: `
      Le RAI planifie les activités de suivi en fonction du risque et de l'importance de la situation.
    `,
  },

  {
    numero: 99,
    question: "Après un rapport défavorable, quelle action doit prendre la vérification interne ?",
    choix: {
      a: "Planifier une mission de suivi.",
      b: "Mettre en œuvre les mesures correctives.",
      c: "Examiner plus en détail les données.",
      d: "Rassembler de nouvelles données.",
    },
    reponse: "a",
    explication: `
      Le RAI doit surveiller l'application des recommandations via un suivi.
    `,
  },

  {
    numero: 100,
    question: "Responsabilité des auditeurs internes pour des observations nécessitant une intervention immédiate de la direction ?",
    choix: {
      a: "I seulement",
      b: "II seulement",
      c: "II et III seulement",
      d: "I, II et III",
    },
    reponse: "d",
    explication: `
      Les auditeurs doivent surveiller activement la correction, informer la haute direction et le comité, et tester l'efficacité des mesures.
    `,
  },
];
