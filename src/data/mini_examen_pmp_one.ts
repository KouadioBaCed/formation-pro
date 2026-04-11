export interface Question {
  id: number;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Que peut faire un chef de projet pour communiquer l’annonce officielle du projet et obtenir l’engagement des parties prenantes ?",
    options: {
      A: "Créer la charte du projet",
      B: "Organiser une réunion de lancement",
      C: "Développer le plan de gestion des communications",
      D: "Préparer et diffuser la matrice RACI",
    },
    correctAnswer: "C",
    explanation:
      "Le plan de gestion des communications permet de définir comment, quand et à qui les informations seront communiquées. Il favorise l’engagement et évite les incompréhensions avec les parties prenantes.",
  },
  {
    id: 2,
    question:
      "Un chef de projet dirige un projet avec sept parties prenantes clés. Quel est l’aspect le plus important de la gestion des parties prenantes ?",
    options: {
      A: "Éviter de contester les parties prenantes",
      B: "Modifier le planning en temps réel",
      C: "Diffuser les mêmes informations à tous",
      D: "Établir de bonnes relations de travail",
    },
    correctAnswer: "D",
    explanation:
      "La gestion des parties prenantes repose avant tout sur les relations. De bonnes relations favorisent la confiance, l’engagement et le succès du projet.",
  },
  {
    id: 3,
    question:
      "Un chef de projet débute un projet complexe avec une grande équipe et souhaite assurer une communication efficace. Que doit-il faire ?",
    options: {
      A: "Organiser des activités d’équipe",
      B: "Mettre en place un processus de partage d’informations",
      C: "Évaluer régulièrement la situation",
      D: "Autoriser les échanges libres uniquement",
    },
    correctAnswer: "B",
    explanation:
      "Un processus clair de partage de l’information garantit que tous les membres sont informés et alignés sur l’avancement du projet.",
  },
  {
    id: 4,
    question:
      "Une organisation passe progressivement d’un mode prédictif à l’agilité. Que doit faire le chef de projet ? (Choisir 3 réponses)",
    options: {
      A: "Comprendre l’état actuel et tester l’agilité",
      B: "Créer une WBS",
      C: "Définir une feuille de route de transformation",
      D: "Maintenir l’approche prédictive",
    },
    correctAnswer: "A, C, E",
    explanation:
      "Comprendre l’existant, former les équipes et planifier de façon itérative sont essentiels pour réussir une transformation agile.",
  },
  {
    id: 5,
    question:
      "Un client demande un changement pour la prochaine itération mais la ressource clé est affectée à un autre projet. Que doit faire le chef de projet en premier ?",
    options: {
      A: "Demander une nouvelle ressource aux RH",
      B: "Demander une nouvelle ressource au sponsor",
      C: "Négocier la disponibilité de la ressource",
      D: "Refuser la demande du client",
    },
    correctAnswer: "C",
    explanation:
      "La première action consiste à négocier la disponibilité de la ressource avant d’envisager d’autres solutions.",
  },
  {
    id: 6,
    question:
      "Après l’analyse des parties prenantes, que faire avec celles ayant peu d’intérêt ou d’influence ?",
    options: {
      A: "Les surveiller de près",
      B: "Les encourager fortement",
      C: "Se concentrer intensivement sur elles",
      D: "Les mobiliser activement",
    },
    correctAnswer: "A",
    explanation:
      "Même peu influentes, ces parties prenantes doivent être surveillées afin d’éviter tout impact négatif inattendu.",
  },
  {
    id: 7,
    question:
      "Un fournisseur accepte d’élargir le périmètre sans modifier le planning, en ajoutant des ressources. Quelle technique est utilisée ?",
    options: {
      A: "Fast tracking",
      B: "Crashing",
      C: "Nivellement des ressources",
      D: "Avance et retard",
    },
    correctAnswer: "B",
    explanation:
      "Le crashing consiste à réduire la durée du projet en ajoutant des ressources.",
  },
  {
    id: 8,
    question:
      "Un département R&D développe un produit innovant. Que doit faire le chef de projet pour maximiser le succès ?",
    options: {
      A: "Utiliser un plan type du PMO",
      B: "Faire une analyse d’impact",
      C: "Clarifier la vision et la mission",
      D: "Faire du benchmarking",
    },
    correctAnswer: "C",
    explanation:
      "Définir clairement la vision et la mission est essentiel avant toute planification détaillée.",
  },
  {
    id: 9,
    question:
      "Une équipe reporte les tests utilisateurs faute de serveur adapté. Que doit faire le chef de projet ?",
    options: {
      A: "Supprimer les tests",
      B: "Utiliser l’ancien serveur",
      C: "Accélérer la livraison du serveur",
      D: "Attendre et réévaluer le planning",
    },
    correctAnswer: "D",
    explanation:
      "Il est nécessaire d’attendre l’infrastructure adéquate et d’ajuster les délais en conséquence.",
  },
  {
    id: 10,
    question:
      "Le Product Owner se concentre excessivement sur le budget pendant les cérémonies agiles. Que fallait-il faire plus tôt ?",
    options: {
      A: "Changer la méthode d’estimation",
      B: "Créer des rapports financiers",
      C: "Clarifier le rôle du Product Owner",
      D: "Utiliser un contrat à prix fixe",
    },
    correctAnswer: "C",
    explanation:
      "Le chef de projet aurait dû clarifier le rôle du Product Owner et l’objectif des cérémonies agiles.",
  },
  {
    id: 11,
    question:
      "Des parties prenantes refusent des réunions de suivi. Que doit faire le chef de projet ?",
    options: {
      A: "Comprendre la raison du refus",
      B: "Renvoyer le plan de communication",
      C: "Définir des règles d’équipe",
      D: "Organiser une réunion de lancement",
    },
    correctAnswer: "A",
    explanation:
      "Il est essentiel de comprendre les raisons du refus avant toute action corrective.",
  },
  {
    id: 12,
    question:
      "Avant de définir le périmètre d’un projet lié à une transformation métier, que faut-il faire ?",
    options: {
      A: "Réunion d’achat",
      B: "Créer une WBS",
      C: "Adapter les actifs existants",
      D: "Valider le business case",
    },
    correctAnswer: "C",
    explanation:
      "Adapter et réutiliser les actifs existants est une bonne pratique avant la définition du périmètre.",
  },
  {
    id: 13,
    question:
      "Le sponsor souhaite voir rapidement les estimations de ressources. Que partager en priorité ?",
    options: {
      A: "La WBS",
      B: "Le budget",
      C: "Le SOW",
      D: "La structure de répartition des ressources (RBS)",
    },
    correctAnswer: "D",
    explanation:
      "La RBS permet de visualiser clairement les ressources et leurs estimations.",
  },
  {
    id: 14,
    question:
      "Certaines user stories à forte valeur présentent plus de risques. Que doit faire le chef de projet agile ?",
    options: {
      A: "Les traiter tôt",
      B: "Les repousser",
      C: "Laisser le PO décider seul",
      D: "Utiliser Pareto",
    },
    correctAnswer: "A",
    explanation:
      "Les risques doivent être traités le plus tôt possible dans les projets agiles.",
  },
  {
    id: 15,
    question:
      "Des retards dus aux livraisons apparaissent dans le 3ᵉ rapport d’avancement. Que doit faire le chef de projet ?",
    options: {
      A: "Consulter l’équipe",
      B: "Enregistrer dans le journal des problèmes",
      C: "Accélérer les livraisons",
      D: "Escalader immédiatement",
    },
    correctAnswer: "B",
    explanation:
      "Les problèmes doivent être enregistrés et suivis dans le journal des incidents.",
  },
  {
    id: 16,
    question:
      "Quelle combinaison d’approches un chef d’équipe devrait-il adopter pour avoir une équipe projet très motivée et performante ? (Choisir trois)",
    options: [
      "Construire des relations solides, donner du contexte au travail et à la vision globale, mettre en place des incitations personnalisées",
      "Assurer des revues par les pairs, mettre l’accent sur la performance de l’équipe, prioriser les récompenses individuelles",
      "Mettre l’accent sur la dynamique d’équipe, planifier des formations régulières, organiser des activités de team building",
      "Favoriser un environnement compétitif, récompenser l’excellence individuelle, organiser des réunions régulières"
    ],
    correctAnswers: [
      "Construire des relations solides, donner du contexte au travail et à la vision globale, mettre en place des incitations personnalisées",
      "Assurer des revues par les pairs, mettre l’accent sur la performance de l’équipe, prioriser les récompenses individuelles",
      "Mettre l’accent sur la dynamique d’équipe, planifier des formations régulières, organiser des activités de team building"
    ],
    explanation:
      "Les équipes très performantes sont motivées par des relations solides, une vision claire, des incitations adaptées, une bonne gestion de la performance et une forte dynamique d’équipe. Un environnement compétitif nuit souvent à la motivation collective."
  },
  {
    id: 17,
    question:
      "Quel est le processus permettant de prioriser les risques du projet en évaluant leur probabilité et leur impact ?",
    options: [
      "Analyse quantitative des risques",
      "Analyse qualitative des risques",
      "Identifier les risques",
      "Planifier la gestion des risques"
    ],
    correctAnswers: ["Analyse qualitative des risques"],
    explanation:
      "L’analyse qualitative des risques permet de classer les risques selon leur probabilité et leur impact afin de concentrer les efforts sur les plus critiques."
  },
  {
    id: 18,
    question:
      "Un projet accuse un retard de 4 semaines. L’équipe reçoit une prime financière et des jours de congé pour livrer à temps. Quelle théorie de motivation est appliquée ?",
    options: [
      "Théorie de l’accomplissement",
      "Théorie de l’expectation",
      "Pyramide de Maslow",
      "Théorie de la contingence"
    ],
    correctAnswers: ["Théorie de l’expectation"],
    explanation:
      "La théorie de l’expectation indique que les individus sont motivés lorsqu’ils croient pouvoir atteindre l’objectif et valorisent la récompense proposée."
  },
  {
    id: 19,
    question:
      "Un chef de projet a du mal à convaincre les parties prenantes d’adopter une nouvelle technologie. Que devait-il faire pour éviter cette résistance ?",
    options: [
      "Investir davantage dans la communication",
      "Fournir un support technique",
      "Proposer un accord formel",
      "Impliquer les parties prenantes le plus tôt possible"
    ],
    correctAnswers: ["Impliquer les parties prenantes le plus tôt possible"],
    explanation:
      "L’implication précoce des parties prenantes permet d’anticiper les résistances, de créer de la confiance et d’obtenir l’adhésion au changement."
  },
  {
    id: 20,
    question:
      "Après l’exécution d’un plan de réponse à un risque majeur, que doit faire le chef de projet ?",
    options: [
      "Mettre à jour le plan de gestion des risques",
      "Réviser le planning et le budget",
      "Mettre à jour les leçons apprises",
      "Identifier de nouveaux risques et surveiller les risques résiduels"
    ],
    correctAnswers: [
      "Identifier de nouveaux risques et surveiller les risques résiduels"
    ],
    explanation:
      "Une fois les actions de réponse terminées, il est essentiel d’identifier de nouveaux risques et de surveiller les risques résiduels."
  },
  {
    id: 21,
    question:
      "Un chef de projet au style directif dirige une équipe virtuelle sur un projet complexe et urgent. Comment doit-il diriger l’équipe ?",
    options: [
      "Créer des relations solides",
      "Motiver par des récompenses",
      "Contrôler et influencer les décisions",
      "Mettre en place des canaux de communication pour suivre l’avancement"
    ],
    correctAnswers: [
      "Mettre en place des canaux de communication pour suivre l’avancement"
    ],
    explanation:
      "Un style directif est orienté résultats et nécessite une communication claire et structurée pour assurer la performance."
  },
  {
    id: 22,
    question:
      "Un changement approuvé concerne le cadre de gouvernance du projet. Que doit faire le chef de projet ?",
    options: [
      "Analyser le changement et mettre à jour les documents de planification",
      "Recalculer immédiatement les durées",
      "Mettre le projet en pause",
      "Soumettre la demande au comité de pilotage"
    ],
    correctAnswers: [
      "Analyser le changement et mettre à jour les documents de planification"
    ],
    explanation:
      "Un changement approuvé doit être compris et intégré dans les documents de planification afin d’assurer l’alignement du projet."
  },
  {
    id: 23,
    question:
      "Un fournisseur indique être en surcapacité, ce qui pourrait retarder la livraison. Quel document doit être mis à jour ?",
    options: [
      "Registre des risques",
      "Registre des parties prenantes",
      "Journal des problèmes",
      "Planning du projet"
    ],
    correctAnswers: ["Registre des risques"],
    explanation:
      "Une livraison potentiellement retardée constitue un risque et doit être enregistrée dans le registre des risques."
  },
  {
    id: 24,
    question:
      "Après résolution des conflits et atteinte des objectifs, l’équipe documente les leçons apprises. Dans quelle phase se trouve-t-elle ?",
    options: ["Formation", "Conflit", "Performance", "Dissolution"],
    correctAnswers: ["Dissolution"],
    explanation:
      "La phase de dissolution (Adjourning) correspond à la clôture du projet et à la documentation des leçons apprises."
  },
  {
    id: 25,
    question:
      "Le budget d’un projet dépend fortement des fluctuations financières. Pour mettre à jour la probabilité et l’impact du risque, à quel document se référer ?",
    options: [
      "Registre des parties prenantes",
      "Registre des risques",
      "Leçons apprises",
      "Conditions du marché"
    ],
    correctAnswers: ["Registre des risques"],
    explanation:
      "Le registre des risques contient les informations sur la probabilité, l’impact et les scénarios de risque."
  },
  {
    id: 26,
    question:
      "Un fournisseur peut livrer plus tôt que prévu, créant une opportunité. Quelle est la première action du chef de projet ?",
    options: [
      "Demander une approbation",
      "Utiliser immédiatement l’équipement",
      "Réviser le planning",
      "Analyser les risques"
    ],
    correctAnswers: ["Analyser les risques"],
    explanation:
      "Avant d’exploiter une opportunité, le chef de projet doit analyser les risques potentiels associés."
  },
  {
    id: 27,
    question:
      "Un fournisseur demande une augmentation de prix affectant le contrat. Que doit faire le chef de projet ?",
    options: [
      "Réunir le comité de changement",
      "Appliquer immédiatement le changement",
      "Mettre à jour le plan projet",
      "Analyser l’impact et soumettre une demande de changement"
    ],
    correctAnswers: [
      "Analyser l’impact et soumettre une demande de changement"
    ],
    explanation:
      "Toute modification contractuelle doit être analysée et formalisée via une demande de changement."
  },
  {
    id: 28,
    question:
      "Après une analyse qualitative des risques, quels documents doivent être mis à jour ?",
    options: [
      "Registre des risques, rapport des risques, leçons apprises",
      "Plan de gestion des risques et journal des hypothèses",
      "Registre des risques, journal des hypothèses, journal des problèmes, rapport des risques",
      "Registre des risques et rapport des risques"
    ],
    correctAnswers: [
      "Registre des risques, journal des hypothèses, journal des problèmes, rapport des risques"
    ],
    explanation:
      "L’analyse qualitative impacte plusieurs documents clés utilisés pour le suivi et la prise de décision."
  },
  {
    id: 29,
    question:
      "Une équipe souhaite comprendre la perception du client et la valeur de son travail. Que doit faire le chef de projet ?",
    options: [
      "Partager les retours et inviter l’équipe aux réunions avec le client",
      "Rassurer l’équipe sans détails",
      "Présenter uniquement le planning",
      "Comparer les tâches terminées"
    ],
    correctAnswers: [
      "Partager les retours et inviter l’équipe aux réunions avec le client"
    ],
    explanation:
      "Impliquer l’équipe dans les échanges avec le client renforce la confiance et l’engagement."
  },
  {
    id: 30,
    question:
      "Après la mise en place de mesures de sécurité, un risque subsiste. Quel type de risque est-ce ?",
    options: [
      "Risque secondaire",
      "Risque résiduel",
      "Risque primaire",
      "Risque de conformité"
    ],
    correctAnswers: ["Risque résiduel"],
    explanation:
      "Le risque résiduel est la part de risque qui subsiste après la mise en œuvre des réponses prévues."
  }
];
