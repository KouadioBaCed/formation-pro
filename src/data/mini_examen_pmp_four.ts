// Mini Examen PMP 4

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
    question: `Après avoir terminé un projet, l'équipe constate que tous les livrables sont conformes, mais de nombreux erreurs ont été détectées lors des tests. Que devrait faire le chef de projet dans cette situation ?`,
    options: {
      A: 'Organiser une réunion avec l’équipe de test pour obtenir plus d’informations sur les méthodes de test.',
      B: 'Évaluer quand la stratégie d’atténuation sera mise en œuvre pour préparer les projets futurs.',
      C: 'Réaliser une analyse Monte Carlo pour déterminer les résultats et réponses potentiels.',
      D: 'Planifier ces erreurs dans le registre des risques pour les surveiller dans les projets futurs.'
    },
    correctAnswer: 'C',
    explanation: 'Les risques de variabilité ne peuvent pas être anticipés. Une analyse Monte Carlo permet de simuler différents scénarios et de préparer des réponses adaptées aux variations.',
  },
  {
    id: 2,
    question: `Plusieurs parties prenantes sont insatisfaites d’un livrable. Que doit faire le chef de projet ?`,
    options: {
      A: 'Revoir l’énoncé final de la portée.',
      B: 'Mettre à jour le plan de gestion des risques.',
      C: 'Revoir les exigences documentées du projet.',
      D: 'Planifier une réunion avec les parties prenantes.'
    },
    correctAnswer: 'D',
    explanation: 'Une communication ouverte et la gestion des préoccupations des parties prenantes sont essentielles. Organiser une réunion permet de comprendre leurs besoins et de collaborer sur des solutions.',
  },
  {
    id: 3,
    question: `Lors d’un projet à haut risque, plusieurs risques se sont matérialisés mais le projet reste en difficulté. Que doit faire le chef de projet pour identifier les faiblesses du processus de gestion des risques ?`,
    options: {
      A: 'Transférer les risques.',
      B: 'Mettre à jour le registre des risques.',
      C: 'Demander un audit des risques.',
      D: 'Analyser les risques.'
    },
    correctAnswer: 'C',
    explanation: 'Un audit des risques permet d’identifier les forces et faiblesses du processus, et de vérifier si les règles de gestion des risques sont respectées et efficaces.',
  },
  {
    id: 4,
    question: `Un chef de projet rejoint un méga projet industriel. Les indices de performance sont CPI=0,42 et SPI=0,20. Le projet est :`,
    options: {
      A: 'En avance sur le planning et sous budget',
      B: 'En avance sur le planning et sur budget',
      C: 'En retard sur le planning et sous budget',
      D: 'En retard sur le planning et sur budget'
    },
    correctAnswer: 'D',
    explanation: 'CPI < 1 indique un dépassement de budget, SPI < 1 indique un retard sur le planning. Donc le projet est en retard et sur budget.',
  },
  {
    id: 5,
    question: `Les sponsors d’un projet multinational ont mis en place un processus générant emails et rapports à la fin de chaque phase. Que doit faire le chef de projet ?`,
    options: {
      A: 'Mettre à jour le plan de gestion de la communication pour inclure les emails et rapports.',
      B: 'Inclure une approbation formelle à la fin de chaque phase.',
      C: 'Tenir des réunions de suivi pour solliciter l’avis des sponsors.',
      D: 'Mettre à jour le plan d’engagement des parties prenantes à la fin de chaque phase.'
    },
    correctAnswer: 'A',
    explanation: 'Le plan de communication doit inclure les détails des emails et rapports afin d’assurer la cohérence et la standardisation des communications du projet.',
  },
  {
    id: 6,
    question: `Pour un projet impliquant des équipes dans quatre pays, pourquoi le sponsor doit-il signer l’acceptation des livrables ?`,
    options: {
      A: 'Parce qu’il est responsable du financement et de l’allocation des ressources.',
      B: 'Parce qu’il communique directement avec le client.',
      C: 'Parce que les managers fonctionnels approuvent les objectifs mais pas les livrables finaux.',
      D: 'Parce que les managers fonctionnels sont géographiquement dispersés.'
    },
    correctAnswer: 'A',
    explanation: 'Le sponsor a fourni les ressources et doit signer officiellement l’acceptation des livrables.',
  },
  {
    id: 7,
    question: `Un projet agile de 100 user stories (US$100 chacune) a dépensé 4500$ et livré 50 user stories après 5 itérations. Quelle affirmation est correcte ?`,
    options: {
      A: 'Le projet est en retard et sur budget.',
      B: 'Le projet est à l’heure et sous budget.',
      C: 'Le projet est à l’heure et dans le budget.',
      D: 'Le projet est en retard et sous budget.'
    },
    correctAnswer: 'B',
    explanation: '50 user stories sur 100 après 5 itérations = sur le planning. Dépenses 4500$ < budget attendu 5000$ = sous budget.',
  },
  {
    id: 8,
    question: `Pour un projet à haut risque et stratégique, quelle est la première priorité du chef de projet ?`,
    options: {
      A: 'Mettre en œuvre la méthode de déploiement en priorité selon la valeur métier.',
      B: 'Développer un plan de communication détaillé.',
      C: 'Obtenir l’accord unanime des parties prenantes et du sponsor sur le plan, la portée et les livrables.',
      D: 'Collaborer avec le marketing pour aligner les produits finaux.'
    },
    correctAnswer: 'C',
    explanation: 'Assurer l’alignement des parties prenantes et du sponsor sur le projet est essentiel au début pour garantir le succès et minimiser les risques de malentendus.',
  },
  {
    id: 9,
    question: `Lors d’une réunion d’équipe, un conflit survient entre trois membres aux personnalités différentes. Que doit faire le chef de projet en premier ?`,
    options: {
      A: 'Planifier un team-building pour résoudre des problèmes.',
      B: 'Rappeler aux membres que les émotions ne doivent pas nuire au travail.',
      C: 'Attribuer les tâches pour éviter les contacts entre eux.',
      D: 'Identifier la cause du conflit et soutenir sa résolution.'
    },
    correctAnswer: 'D',
    explanation: 'Comprendre la cause du conflit permet de trouver la solution la plus efficace et durable.',
  },
  {
    id: 10,
    question: `Un changement réglementaire affecte le projet en cours. Que doit faire le chef de projet ?`,
    options: {
      A: 'Arrêter immédiatement le projet.',
      B: 'Déléguer l’évaluation de l’impact à un membre.',
      C: 'Continuer le projet comme prévu.',
      D: 'Chercher un jugement d’expert pour évaluer l’impact sur planning et budget.'
    },
    correctAnswer: 'D',
    explanation: 'Faire appel à un expert permet d’évaluer correctement l’impact de la réglementation avant de prendre des décisions.',
  },
  {
    id: 11,
    question: `Le lancement d’un logiciel approche, mais l’équipe est en retard et peu motivée. Que doit faire le chef de projet en premier ?`,
    options: {
      A: 'Rencontrer le sponsor pour discuter et réviser le plan du projet.',
      B: 'Demander un report de délai et continuer à motiver l’équipe.',
      C: 'Forcer l’équipe à faire des heures supplémentaires.',
      D: 'Escalader à un manager fonctionnel pour des ressources supplémentaires.'
    },
    correctAnswer: 'A',
    explanation: 'Il est crucial de discuter avec le sponsor et d’établir un plan réaliste avant de prendre d’autres mesures.',
  },
  {
    id: 12,
    question: `Le PDG demande de réduire de 30% le délai d’un projet d’unités IRM. Avec qui le chef de projet doit-il consulter pour obtenir une estimation réaliste ?`,
    options: {
      A: 'L’équipe de radiologie de l’hôpital',
      B: 'L’équipe projet',
      C: 'Le sponsor du projet',
      D: 'Le responsable des achats de l’hôpital'
    },
    correctAnswer: 'A',
    explanation: 'L’équipe de radiologie a l’expertise technique nécessaire pour proposer des délais réalistes.',
  },
  {
    id: 13,
    question: `Un stakeholder clé devient moins actif et refuse un livrable. Comment le chef de projet aurait-il pu éviter ce problème ?`,
    options: {
      A: 'Mettre à jour le plan de gestion des risques pour documenter sa promotion.',
      B: 'Surveiller les attributs du stakeholder et ajuster l’engagement.',
      C: 'Contacter le sponsor pour gérer le stakeholder.',
      D: 'Retirer le stakeholder du processus décisionnel.'
    },
    correctAnswer: 'B',
    explanation: 'Analyser les changements dans l’engagement du stakeholder et ajuster son implication aurait évité le rejet tardif.',
  },
  {
    id: 14,
    question: `Projet avec portée vague et livrables peu clairs. Comment le chef de projet doit-il procéder ?`,
    options: {
      A: 'Programmer une réunion avec l’équipe et le sponsor pour clarifier la portée.',
      B: 'Développer le plan basé sur la portée actuelle.',
      C: 'Escalader au PMO pour clarifier la portée.',
      D: 'Demander au PMO d’être jumelé avec un expert organisationnel.'
    },
    correctAnswer: 'A',
    explanation: 'Il faut d’abord clarifier la portée avec l’équipe et le sponsor avant de planifier le projet.',
  },
  {
    id: 15,
    question: `Lors d’un test d’un logiciel de paiement, l’application ne peut pas accepter les cartes étrangères. Que fallait-il faire pour prévenir ce problème ?`,
    options: {
      A: 'Présenter une user story détaillée à l’équipe projet.',
      B: 'Faire implémenter la user story dans le prochain sprint.',
      C: 'Assurer un raffinement itératif du backlog.',
      D: 'Recueillir les exigences détaillées auprès des parties prenantes.'
    },
    correctAnswer: 'A',
    explanation: 'Une user story claire spécifiant les cartes acceptées aurait permis de prioriser et prévenir ce problème.',
  },
  {
    id: 16,
    question: `Lors d’un daily standup, un membre demande de l’aide pour certaines tâches. Que doit faire le chef de projet ?`,
    options: {
      A: 'Réassigner les tâches sans demander l’avis des autres membres.',
      B: 'Demander au membre d’identifier les tâches nécessitant de l’aide dans une autre réunion.',
      C: 'Envoyer le membre en formation pour rattraper le travail.',
      D: 'Ignorer la demande et continuer le daily.'
    },
    correctAnswer: 'B',
    explanation: 'Identifier les tâches nécessitant de l’aide permet de planifier un soutien approprié sans interrompre le daily standup.',
  },
  {
    id: 17,
    question: `Projet à 45% d’avancement alors que 90% étaient attendus. Budget US$110,000, coût réel US$60,000. Que peut-on déterminer ?`,
    options: {
      A: 'Sous budget, CPI = 1,21',
      B: 'Sur budget, CPI = 0,83',
      C: 'Sous budget, CPI = 0,83',
      D: 'Sur budget, CPI = 1,21'
    },
    correctAnswer: 'B',
    explanation: 'EV = 45% * 110,000 = 49,500, AC = 60,000, CPI = EV/AC = 0,83 < 1 donc sur budget.',
  },
  {
    id: 18,
    question: `Lors d’un daily standup, un stakeholder critique un membre. Que doit faire le membre affecté ?`,
    options: {
      A: 'Programmer une réunion avec le stakeholder pour discuter.',
      B: 'Envoyer un email pour que les communications passent par le chef de projet.',
      C: 'Rencontrer le Scrum Master pour discuter de l’incident.',
      D: 'Demander à être réassigné à un autre projet.'
    },
    correctAnswer: 'C',
    explanation: 'Le Scrum Master doit gérer les obstacles et conflits, et intervenir auprès du stakeholder pour protéger l’équipe.',
  },
  {
    id: 19,
    question: `Quel paramètre agile est le moins susceptible de changer pendant l’exécution d’un projet ?`,
    options: {
      A: 'Vision du projet',
      B: 'Definition of Done',
      C: 'Product Owner',
      D: 'Backlog produit'
    },
    correctAnswer: 'A',
    explanation: 'La vision du projet reste constante ; changer la vision modifierait tous les autres paramètres et le but du projet.',
  },
  {
    id: 20,
    question: `Un nouveau chef de projet remplace le précédent sur un projet actif. Quelle est la première chose à faire ?`,
    options: {
      A: 'Programmer des réunions avec les stakeholders pour connaître les livrables.',
      B: 'Organiser des réunions avec l’équipe pour discuter du statut et des risques.',
      C: 'Réaliser une analyse Pareto pour prioriser les tâches.',
      D: 'Revoir le registre des risques et stratégies d’atténuation.'
    },
    correctAnswer: 'B',
    explanation: 'Comprendre le statut et les risques directement avec l’équipe permet d’avoir une vue complète et précise des enjeux du projet.',
  },
   {
    id: 21,
    question: `Dans un cadre Agile à grande échelle (SAFe), quelles responsabilités d'un Release Train Engineer peuvent également être assurées par un chef de projet ? (Choisir 3)`,
    options: {
      A: 'Gérer les risques',
      B: 'Former sur l’excellence technique globale',
      C: 'Escalader les obstacles',
      D: 'Former sur l’amélioration continue globale',
      E: 'Former sur l’amélioration continue des équipes'
    },
    correctAnswer: 'A, C, D',
    explanation: `Les responsabilités pouvant être partagées avec le chef de projet sont : gérer les risques, escalader les obstacles et former sur l’amélioration continue globale. Les autres responsabilités restent spécifiques au Release Train Engineer.`,
  },
  {
    id: 22,
    question: `Un développeur travaillant sur un composant critique doit prendre un congé d’urgence. Le chef de projet ne peut pas recruter un remplaçant à temps. Que doit-il faire ?`,
    options: {
      A: 'Reporter le composant à la dernière itération après le retour du développeur.',
      B: 'Demander au sponsor de prolonger le projet jusqu’au retour du développeur.',
      C: 'Prolonger l’itération pour attendre le développeur.',
      D: 'Demander aux autres membres de l’équipe de compléter le travail du développeur pendant cette itération.'
    },
    correctAnswer: 'D',
    explanation: `La meilleure approche est de maintenir le travail prévu dans l’itération et de s’appuyer sur les autres membres de l’équipe pour compléter le travail absent, afin de respecter le planning du projet.`,
  },
  {
    id: 23,
    question: `Lors d’un projet Agile à mi-parcours, l’équipe a travaillé plus d’heures que prévu. Que doit faire le chef de projet ?`,
    options: {
      A: 'Noter les heures supplémentaires dans le budget et utiliser les réserves.',
      B: 'Demander au sponsor d’ajouter des membres pour augmenter la vélocité.',
      C: 'Travailler avec l’équipe pour identifier la cause et éviter que cela se reproduise.',
      D: 'Donner à l’équipe la responsabilité de résoudre le problème et présenter la solution au sponsor.'
    },
    correctAnswer: 'C',
    explanation: `Le chef de projet doit analyser avec l’équipe pourquoi des heures supplémentaires ont été nécessaires et comment éviter ce problème dans les futurs sprints.`,
  },
  {
    id: 24,
    question: `Un client est exigeant et vague sur les exigences. Il a refusé les livrables précédents sans feedback clair. Que doit faire le chef de projet ?`,
    options: {
      A: 'Rencontrer le sponsor pour définir un calendrier détaillé.',
      B: 'Travailler avec le client et le Product Owner pour définir le produit minimum viable (MVP).',
      C: 'Mettre en place une approche itérative pour obtenir l’acceptation de chaque livrable.',
      D: 'Demander l’arrêt du projet jusqu’à ce que le client fournisse des attentes claires.'
    },
    correctAnswer: 'B',
    explanation: `Travailler avec le client et le Product Owner pour définir le MVP permet de clarifier les attentes et d’assurer que les livrables seront acceptés.`,
  },
  {
    id: 25,
    question: `Lors d’une itération, l’équipe réalise que le projet dépassera le budget à cause d’une utilisation prolongée des ressources de support. Que doit faire le chef de projet ?`,
    options: {
      A: 'Estimer le coût supplémentaire et proposer un nouveau budget au comité de changement.',
      B: 'Réduire les ressources et demander à l’équipe de gérer les tâches dans le coût prévu.',
      C: 'Discuter avec l’équipe pour réduire l’utilisation des ressources de support.',
      D: 'Accepter le dépassement de coût en fonction des contingences du projet.'
    },
    correctAnswer: 'C',
    explanation: `Pour gérer le budget dans un projet Agile, le chef de projet doit optimiser l’utilisation des ressources et collaborer avec l’équipe pour réduire les coûts.`,
  },
  {
    id: 26,
    question: `L’équipe Agile a du mal à compléter une checklist car les membres interprètent différemment l’objectif du projet. Comment le chef de projet peut-il les aider ?`,
    options: {
      A: 'Revoir la vision du projet',
      B: 'Revoir la liste complète des user stories',
      C: 'Revoir le Manifeste Agile',
      D: 'Organiser la première rétrospective de sprint'
    },
    correctAnswer: 'A',
    explanation: `Partager la vision du projet assure une compréhension commune des objectifs et des bénéfices attendus, ce qui aligne l’équipe sur le but global.`,
  },
  {
    id: 27,
    question: `Un chef de projet du PMO doit implémenter un cadre Agile avec une équipe sans expérience Agile. Quels trois facteurs doivent être prioritaires ? (Choisir 3)`,
    options: {
      A: 'Identifier les parties prenantes clés et les impliquer dans la transformation Agile',
      B: 'Fournir formation et coaching extensifs sur les principes et pratiques Agile',
      C: 'Promouvoir une culture de collaboration, transparence et amélioration continue',
      D: 'Ignorer le feedback client au début et se concentrer sur l’équipe',
      E: 'Établir un plan rigide et inflexible'
    },
    correctAnswer: 'A, B, C',
    explanation: `Impliquer les parties prenantes, former l’équipe et promouvoir une culture collaborative sont essentiels pour réussir une transformation Agile. Les autres options vont à l’encontre des principes Agile.`,
  },
  {
    id: 28,
    question: `Quelles actions un chef de projet Agile d’une équipe virtuelle nouvellement formée doit-il prendre pour aider l’organisation à réussir ? (Choisir 2)`,
    options: {
      A: 'Fournir des objectifs et priorités clairs',
      B: 'Favoriser la coopération et la confiance',
      C: 'Laisser l’équipe décider et évoluer dans ses rôles',
      D: 'Négliger les interactions et check-ins réguliers'
    },
    correctAnswer: 'B, C',
    explanation: `En Agile, l’équipe est auto-organisée. Le chef de projet doit construire la confiance et laisser l’équipe évoluer dans ses responsabilités.`,
  },
  {
    id: 29,
    question: `Un membre de l’équipe informe le chef de projet qu’une tâche n’a pas été terminée à temps à cause d’une urgence. Que doit faire le chef de projet ?`,
    options: {
      A: 'Vérifier les dépendances et l’impact du retard',
      B: 'Demander au membre de faire des heures supplémentaires',
      C: 'Demander à d’autres membres de compléter la tâche',
      D: 'Revoir l’avancement de la tâche avec l’équipe et décider de l’action à prendre'
    },
    correctAnswer: 'D',
    explanation: `Le chef de projet doit évaluer l’avancement réel de la tâche avec l’équipe et planifier la suite. D’autres membres peuvent ne pas avoir les compétences nécessaires.`,
  },
  {
    id: 30,
    question: `L’équipe Scrum confond risques et problèmes et préfère utiliser le terme "obstacles". Pour lequel des cas suivants le concept d’obstacle ne s’applique pas ?`,
    options: {
      A: 'Un membre junior ne peut pas travailler à pleine capacité pendant une semaine',
      B: 'Un concurrent annonce la sortie imminente d’une nouvelle version de son produit',
      C: 'La maintenance de la climatisation affectera le bâtiment pendant deux semaines',
      D: 'Le chef de projet est en congé et le Scrum Master doit gérer les distinctions'
    },
    correctAnswer: 'B',
    explanation: `La sortie d’un produit concurrent n’empêche pas l’équipe de travailler et n’impacte pas directement sa vélocité. Ce n’est donc pas un obstacle selon Scrum.`,
  }
];

