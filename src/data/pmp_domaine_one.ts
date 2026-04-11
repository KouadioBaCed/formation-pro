// src/data/quizData.ts
export type Question = {
  id: number;
  question: string;
  options: string[];
  correct: string;
  rationale: string;
};

export const quizData: Question[] = [
  {
    id: 1,
    question: "Pendant l'exécution du projet, un membre de l’équipe n’accomplit pas ses tâches conformément au plan de management. Quelle est la première action ?",
    options: [
      "Créer une équipe matricielle pour examiner les relations",
      "Demander à tous les membres de se concentrer davantage sur le projet",
      "Réaffecter les tâches non terminées à un autre membre",
      "Engager le dialogue avec le membre pour comprendre les raisons de sa faible performance"
    ],
    correct: "Engager le dialogue avec le membre pour comprendre les raisons de sa faible performance",
    rationale: "Le chef de projet doit identifier les causes de la performance insuffisante avant de prendre des mesures. Les autres options ne ciblent pas la cause."
  },
  {
    id: 2,
    question: "Quels outils ou techniques sont appropriés pour surveiller les risques ? (Choisir 2)",
    options: [
      "Analyse de données",
      "Regroupement par affinités",
      "Transfert des risques",
      "Audits des risques"
    ],
    correct: "Analyse de données, Audits des risques",
    rationale: "L'analyse de données et les audits permettent de vérifier l’efficacité des réponses aux risques et de déclencher des actions correctives si nécessaire."
  },
  {
    id: 3,
    question: "Un fournisseur critique informe que la livraison sera fortement retardée, et la réserve de contingence couvre ce risque. Que doit faire le chef de projet en premier ?",
    options: [
      "Consulter le plan de réponse au risque et le contrat pour les prochaines étapes et pénalités",
      "Commander le composant à un autre fournisseur et soumettre une demande de changement",
      "Identifier un fournisseur pouvant livrer dans la réserve",
      "Mettre à jour le calendrier et le registre des leçons apprises"
    ],
    correct: "Consulter le plan de réponse au risque et le contrat pour les prochaines étapes et pénalités",
    rationale: "Le chef de projet doit suivre le plan de réponse au risque et les obligations contractuelles avant d’agir, pour rester aligné sur la stratégie de gestion des risques."
  },
  {
    id: 4,
    question: "Un projet bancaire subit une faille de sécurité majeure. Que doit faire le chef de projet ?",
    options: [
      "Consulter le plan d’engagement des parties prenantes pour identifier le responsable du risque",
      "Faire une analyse en arbre de décision",
      "Rencontrer le sponsor pour négocier un nouveau plan de gestion des exigences",
      "Mettre à jour le registre des problèmes et revoir la stratégie de réponse aux risques"
    ],
    correct: "Mettre à jour le registre des problèmes et revoir la stratégie de réponse aux risques",
    rationale: "Il faut documenter l’incident dans le registre des problèmes et suivre la stratégie prévue dans le registre des risques."
  },
  {
    id: 5,
    question: "Classez les risques par gravité (haut → bas) selon le tableau suivant :\n\nRisque | Probabilité | Impact\nA | 3 | 3\nB | 5 | 1\nC | 2 | 4\nD | 4 | 4",
    options: [
      "B, A, D, C",
      "B, C, A, D",
      "D, A, C, B",
      "C, D, A, B"
    ],
    correct: "D, A, C, B",
    rationale: "La gravité du risque = Probabilité × Impact. Calculs : D=16, A=9, C=8, B=5."
  },
  {
    id: 6,
    question: "Un membre propose de supprimer certains tests pour accélérer le projet. Que doit faire le chef de projet ?",
    options: [
      "Demander plus d’informations au membre",
      "Rejeter la proposition",
      "Discuter avec l’équipe",
      "Demander au responsable qualité d’évaluer la proposition"
    ],
    correct: "Rejeter la proposition",
    rationale: "Supprimer des tests est risqué et ne doit pas être fait pour gagner du temps. Le PM doit respecter les tests prévus dans le plan."
  },
  {
    id: 7,
    question: "Un événement météorologique peut retarder le projet. Quelle est la première action ?",
    options: [
      "Informer les parties prenantes et réviser le budget",
      "Prendre une action préventive basée sur la nouvelle information",
      "Vérifier le registre des risques",
      "Consigner l’événement dans le registre des problèmes"
    ],
    correct: "Vérifier le registre des risques",
    rationale: "Le PM doit toujours consulter le registre des risques avant d’agir, pour savoir si le risque a été identifié et quelles réponses sont prévues."
  },
  {
    id: 8,
    question: "Quelles informations de la charte du projet peuvent soutenir l’identification des risques ?",
    options: [
      "Résumé des rôles et responsabilités",
      "Exigences et périmètre détaillés",
      "Matrices de communication du projet",
      "Intérêt des parties prenantes"
    ],
    correct: "Intérêt des parties prenantes",
    rationale: "La charte contient des informations de haut niveau, dont l’intérêt des parties prenantes, utile pour identifier les risques."
  },
  {
    id: 9,
    question: "Quels sont les niveaux d’attitude face au risque ?",
    options: [
      "Conservateur, modéré, libéral",
      "Averse au risque, neutre, tolérant, chercheur de risque",
      "Mitigation, évitement, transfert, acceptation",
      "Élevé, moyen, faible",
      "Positif, négatif, indifférent"
    ],
    correct: "Averse au risque, neutre, tolérant, chercheur de risque",
    rationale: "L’attitude au risque décrit la disposition face à l’incertitude adoptée par les individus et groupes."
  },
  {
    id: 10,
    question: "Un chef de projet externalise un composant critique faute de ressources internes fiables. Quelle stratégie de réponse au risque est utilisée ?",
    options: [
      "Accepter",
      "Atténuer (Mitigate)",
      "Améliorer (Enhance)",
      "Escalader"
    ],
    correct: "Atténuer (Mitigate)",
    rationale: "Le chef de projet agit pour réduire la probabilité ou l’impact négatif du risque."
  },
  {
    id: 11,
    question: "Après un changement de composant, certains stakeholders n'ont pas reçu l’information. Que devait faire le chef de projet ?",
    options: [
      "Revoir le plan de communication",
      "Développer un rapport détaillé",
      "Discuter avec le sponsor",
      "Questionner les stakeholders sur leurs compétences technologiques"
    ],
    correct: "Revoir le plan de communication",
    rationale: "Le plan de communication définit le moyen le plus efficace pour chaque stakeholder."
  },
  {
    id: 12,
    question: "Un imprévu (urgence sanitaire) cause un dépassement budgétaire. Quelle action ?",
    options: [
      "Utiliser la réserve de gestion",
      "Exploiter le risque",
      "Utiliser la réserve de contingence",
      "Développer les références de coûts et performance"
    ],
    correct: "Utiliser la réserve de gestion",
    rationale: "La réserve de gestion couvre les imprévus non identifiés dans la baseline du projet."
  }
];
