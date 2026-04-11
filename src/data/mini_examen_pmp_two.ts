// src/data/projectManagementQuestions.ts
export interface Question {
  id: number;
  question: string;
  options: { [key: string]: string };
  solution: string;
  explanation: string;
}

export const projectManagementQuestions: Question[] = [
  {
    id: 1,
    question: "Un chef de projet travaille sur un projet critique pour lequel les données historiques sont indisponibles. Que doit-il faire ?",
    options: {
      A: "Planifier l'exécution du projet en fonction de l'appétit pour le risque des parties prenantes.",
      B: "Développer le plan de management du projet pour identifier et prioriser les opportunités et menaces.",
      C: "Informer le sponsor du risque et continuer la livraison du projet.",
      D: "Élaborer un plan de gestion des risques et informer les parties prenantes clés des risques identifiés."
    },
    solution: "D",
    explanation: "Sans données historiques, le chef de projet doit élaborer un plan détaillé de gestion des risques et informer les parties prenantes clés pour s'assurer que tous sont conscients des risques potentiels. C'est crucial pour le succès du projet."
  },
  {
    id: 2,
    question: "Quelle qualité de leadership un chef de projet doit-il posséder ?",
    options: {
      A: "Honnêteté",
      B: "Agressivité",
      C: "Pouvoir",
      D: "Leader serviteur"
    },
    solution: "A",
    explanation: "L'honnêteté est essentielle pour un chef de projet afin de rapporter les réalités du projet et rester transparent. Les autres options ne sont pas adaptées à tous les contextes de gestion de projet."
  },
  {
    id: 3,
    question: "Les outils tels que checklists, brainstorming, analyse SWOT et analyse des hypothèses sont utilisés pour :",
    options: {
      A: "Partage des risques",
      B: "Identification des risques",
      C: "Analyse des risques",
      D: "Renforcement des risques"
    },
    solution: "B",
    explanation: "Ces outils sont utilisés spécifiquement pour identifier les risques. Les autres options ne correspondent pas aux usages de ces outils."
  },
  {
    id: 4,
    question: "Un audit externe remarque que le chef de projet utilise un ancien modèle de registre des risques, générant une non-conformité. Comment cela aurait-il pu être évité ?",
    options: {
      A: "Ce n'est pas une erreur du chef de projet, il suit le modèle fourni.",
      B: "Il vaut mieux faire un audit interne avant l'audit externe.",
      C: "Élaborer un plan de gestion des risques avant de préparer le registre des risques.",
      D: "Mettre à jour le registre avec le nouveau modèle et fermer la non-conformité."
    },
    solution: "C",
    explanation: "Le plan de gestion des risques doit être élaboré avant la création du registre pour structurer correctement l'identification, la surveillance et la mise à jour des risques."
  },
  {
    id: 5,
    question: "Après la réunion de lancement d'un projet industriel avec des membres répartis dans 6 pays, quelle méthode d'identification des risques est la plus appropriée ?",
    options: {
      A: "Diagramme d'affinité",
      B: "Analyse par arbre de décision",
      C: "Technique Delphi",
      D: "Analyse Monte Carlo"
    },
    solution: "C",
    explanation: "La technique Delphi utilise des sondages anonymes pour générer un consensus à distance, idéale pour des équipes réparties géographiquement."
  },
  {
    id: 6,
    question: "Une entreprise impose une clause de pénalité pour non-exécution dans un processus d'appel d'offres. Comment le chef de projet du fournisseur doit-il budgétiser le risque ?",
    options: {
      A: "Augmenter le prix pour couvrir le risque.",
      B: "Ne pas participer à l'appel d'offres.",
      C: "Acheter une assurance pour transférer le risque et l'inclure dans le budget.",
      D: "Enregistrer le risque dans le registre et le revoir régulièrement."
    },
    solution: "C",
    explanation: "Le transfert de risque via une assurance est la stratégie appropriée pour gérer ce type de risque moyen dans un projet attractif."
  },
  {
    id: 7,
    question: "L'équipe débat si le chef de projet agit en gestion ou en leadership. Le chef de projet met l'accent sur le contrôle, l'efficacité et la réalisation des objectifs. Quelle est l'évaluation correcte ?",
    options: {
      A: "Le chef agit en leader en maintenant l'autorité.",
      B: "Le chef agit en leader en alignant les personnes et en dirigeant le travail.",
      C: "Le chef agit en manager en maintenant la motivation.",
      D: "Le chef agit en manager en se concentrant sur le contrôle, l'efficacité et l'efficience."
    },
    solution: "D",
    explanation: "Les actions décrites sont typiques de la gestion : contrôle, efficacité et réalisation des objectifs, plutôt que du leadership."
  },
  {
    id: 8,
    question: "Pour cultiver des relations solides avec des parties prenantes diverses, que doit faire le chef de projet ?",
    options: {
      A: "Organiser des ateliers interactifs pour discuter des objectifs et attentes.",
      B: "Effectuer un mapping détaillé des parties prenantes.",
      C: "Faire des présentations formelles de suivi du projet.",
      D: "Distribuer la documentation du projet pour examen individuel."
    },
    solution: "A",
    explanation: "Les ateliers interactifs permettent d'engager les parties prenantes et de construire une compréhension partagée, contrairement aux options moins interactives."
  },
  {
    id: 9,
    question: "Lors de la perte d'un actif dans un projet de data center offshore, quelle est l'action correcte du chef de projet ?",
    options: {
      A: "Demander au membre de l'équipe de remplacer l'actif.",
      B: "Informer le client et acheter un nouvel actif.",
      C: "Informer la direction et remplacer via assurance.",
      D: "Informer client et direction, enquêter, mettre à jour le registre des risques et agir selon le résultat."
    },
    solution: "D",
    explanation: "L'information immédiate, l'investigation et la mise à jour du registre de risques garantissent une gestion complète et responsable de l'incident."
  },
  {
    id: 10,
    question: "Quel type de risque est introduit par la planification de travaux nocturnes pour éviter les interruptions des applications critiques ?",
    options: {
      A: "Risque secondaire",
      B: "Risque résiduel",
      C: "Risque primaire",
      D: "Risque de conformité"
    },
    solution: "A",
    explanation: "Le risque secondaire est un nouveau risque directement généré par la mise en œuvre d'une réponse à un autre risque (fatigue du personnel, erreurs)."
  },
  {
    id: 11,
    question: "Un projet B rencontre des problèmes identifiés tardivement. Que peut-on demander au projet A pour prévenir ou corriger ces problèmes ?",
    options: {
      A: "Rapports de performance",
      B: "Registre des leçons apprises",
      C: "Journal des problèmes",
      D: "Liste des activités"
    },
    solution: "B",
    explanation: "Le registre des leçons apprises permet au projet B de bénéficier des expériences du projet A."
  },
  {
    id: 12,
    question: "Quels risques doivent être évalués pour éviter l'échec d'un projet ?",
    options: {
      A: "Tous les risques identifiés",
      B: "Risques à forte probabilité seulement",
      C: "Risques à fort impact seulement",
      D: "Risques à forte probabilité et fort impact"
    },
    solution: "A",
    explanation: "Tous les risques identifiés doivent être évalués pour éviter les surprises et améliorer la prévisibilité du projet."
  },
  {
    id: 13,
    question: "Quel est le premier pas dans la gestion des risques d'une entreprise aérospatiale privée ?",
    options: {
      A: "Analyse des risques",
      B: "Acceptation des risques",
      C: "Identification des risques",
      D: "Registre des risques"
    },
    solution: "C",
    explanation: "L'identification des risques précède toute analyse, acceptation ou enregistrement."
  },
  {
    id: 14,
    question: "Un projet hybride doit intégrer une nouvelle exigence suite à une décision de justice. Que doit faire le chef de projet ?",
    options: {
      A: "Accepter l'exigence dans le périmètre",
      B: "Exclure l'exigence",
      C: "Soumettre une demande de changement au CCB",
      D: "Incorporer après discussion avec les parties prenantes"
    },
    solution: "C",
    explanation: "Le CCB doit évaluer et approuver formellement les changements de périmètre pour maintenir contrôle et traçabilité."
  },
  {
    id: 15,
    question: "Pour enregistrer et suivre les problèmes qui impactent le projet, quel document utiliser ?",
    options: {
      A: "Journal des problèmes",
      B: "Registre des risques",
      C: "Leçons apprises",
      D: "Plan de management du projet"
    },
    solution: "A",
    explanation: "Le journal des problèmes documente tous les problèmes actifs et permet leur suivi jusqu'à résolution."
  },
  {
    id: 16,
    question: "Lors d'un projet agile, le calendrier glisse malgré la planification initiale. Que devait faire le chef de projet ?",
    options: {
      A: "Travailler avec l'équipe pour comprendre leurs attentes",
      B: "Permettre aux membres de s'auto-organiser pour atteindre les objectifs",
      C: "Prioriser les tâches à finition anticipée",
      D: "Sélectionner et séquencer le travail pour atteindre les objectifs"
    },
    solution: "B",
    explanation: "En agile, le chef de projet doit expliquer les objectifs et laisser l'équipe s'auto-organiser pour créer des plans pratiques et engageants."
  },
  {
    id: 17,
    question: "Le directeur de la conformité n'a pas été informé des décisions de l'équipe agile. Que doit faire le chef de projet ?",
    options: {
      A: "Inviter un délégué aux réunions quotidiennes",
      B: "Demander un délégué à temps plein",
      C: "Rencontrer le directeur pour définir une stratégie de conformité",
      D: "Augmenter le budget pour corriger les itérations"
    },
    solution: "C",
    explanation: "La première étape est de collaborer pour comprendre les exigences de conformité avant de mettre en œuvre d'autres actions."
  },
  {
    id: 18,
    question: "Un nouveau membre d'équipe se sent exclu d'une activité sociale et ne participe plus aux standups. Que doit faire le chef de projet ?",
    options: {
      A: "Organiser un autre événement après les heures",
      B: "Rencontrer le membre pour discuter de ses préoccupations",
      C: "Demander au membre de participer plus",
      D: "Inviter le membre après les heures pour discuter du projet"
    },
    solution: "B",
    explanation: "Le chef de projet doit aborder individuellement les préoccupations pour identifier la cause réelle et soutenir l'intégration."
  },
  {
    id: 19,
    question: "Un acteur clé soumet plusieurs demandes de nouvelles fonctionnalités après la définition du périmètre. Que doit faire le chef de projet ?",
    options: {
      A: "Réviser le plan de communication",
      B: "Vérifier les critères d'acceptation",
      C: "Rencontrer les parties prenantes pour l'alignement",
      D: "Consulter le plan de gestion du périmètre pour intégrer les nouvelles fonctionnalités"
    },
    solution: "D",
    explanation: "Le plan de gestion du périmètre définit comment traiter les demandes de changements et maintenir le contrôle du périmètre."
  },
  {
    id: 20,
    question: "Pourquoi discuter des problèmes lors d'une rétrospective est important ?",
    options: {
      A: "C'est une opportunité de résoudre et améliorer via la collaboration",
      B: "Pour les adresser pendant une démo",
      C: "Pour que le membre résolve le problème avant la rétrospective",
      D: "Pour maximiser le temps de résolution"
    },
    solution: "A",
    explanation: "La rétrospective permet d'identifier et de discuter des problèmes de manière collaborative et de développer le travail d'équipe et l'amélioration continue."
  },
  {
  id: 21,
    question: `Un chef de projet a été assigné à un grand projet. Le sponsor du projet souhaite que le chef de projet effectue une analyse des parties prenantes. 
Quels points le chef de projet doit-il considérer lors de cette analyse ?`,
    options: [
      "Intérêts, droits, propriété, connaissances et contribution.",
      "Intérêts, exigences, droits, connaissances et impact.",
      "Pouvoir, impact, influence, exigences et attentes.",
      "Rôle dans le projet, impact, droits, connaissances et intérêts."
    ],
    answer: "Pouvoir, impact, influence, exigences et attentes.",
    explanation: `Lors de l'analyse des parties prenantes, le chef de projet doit considérer la dynamique de pouvoir, l'impact potentiel des parties prenantes sur le projet, leur niveau d'influence, ainsi que leurs exigences et attentes. Cela permet de mieux comprendre leurs perspectives et de gérer efficacement leur implication.`
  },
  {
    id: 22,
    question: `Un chef de projet travaille avec une nouvelle équipe sur un projet agile. L'équipe rate régulièrement les jalons et n'arrive pas à suivre le rythme des sprints.  
Comment le chef de projet devrait-il procéder ?`,
    options: [
      "Contacter le sponsor pour voir si un budget supplémentaire peut être alloué afin d'inciter financièrement les membres de l'équipe.",
      "Se baser sur les sprints précédents et modifier les futurs sprints pour aligner le rythme sur la vélocité de l'équipe.",
      "Contacter les parties prenantes pour identifier des personnes plus expérimentées pour remplacer les membres moins rapides.",
      "Former l'équipe à l'utilisation de Kanban pour améliorer leur performance globale."
    ],
    answer: "Se baser sur les sprints précédents et modifier les futurs sprints pour aligner le rythme sur la vélocité de l'équipe.",
    explanation: `Le meilleur indicateur de la capacité de l'équipe est la vélocité historique. Le plan de livraison doit en tenir compte avant tout engagement ferme de l'équipe. Les autres options ne tiennent pas compte de la réalité de la vélocité de l'équipe.`
  },
  {
    id: 23,
    question: `Un chef de projet est responsable d'un nouveau projet agile de portée globale. Après quelques sprints, l'équipe assurance qualité, située dans un autre pays, fournit une longue liste de défauts.  
Le chef de projet est certain que ces problèmes sont dus à une mauvaise interprétation linguistique et non à la qualité du projet. Que doit-il faire ?`,
    options: [
      "Demander un budget supplémentaire pour embaucher une équipe locale d'assurance qualité.",
      "Fusionner l'équipe développement avec l'équipe assurance qualité à la fin du projet pour tester les livrables.",
      "Rencontrer l'équipe assurance qualité pour critiquer la liste qu'ils ont fournie.",
      "Lors de sessions avec l'équipe entière, revoir les exigences du projet et leurs descriptions."
    ],
    answer: "Lors de sessions avec l'équipe entière, revoir les exigences du projet et leurs descriptions.",
    explanation: `La meilleure approche est de revoir les exigences du projet avec toute l'équipe afin d'atteindre une compréhension commune et corriger les malentendus linguistiques.`
  },
  {
    id: 24,
    question: `Un membre de l'équipe travaille sur une tâche critique et informe le chef de projet juste avant le début d'une réunion que la tâche n'a pas été terminée à temps. Que doit faire le chef de projet ?`,
    options: [
      "Exclure le membre de l'équipe de la réunion et lui demander de continuer la tâche.",
      "Réaffecter la tâche à un autre membre et souligner l'importance de la terminer à temps.",
      "Envoyer un e-mail à toute l'équipe pour demander de l'aide sur cette tâche spécifique.",
      "Lors de la réunion, revoir toutes les tâches ouvertes et décider collectivement de la marche à suivre."
    ],
    answer: "Lors de la réunion, revoir toutes les tâches ouvertes et décider collectivement de la marche à suivre.",
    explanation: `L'approche la plus efficace est d'utiliser l'intelligence collective de l'équipe pour décider comment traiter les tâches en retard.`
  },
  {
    id: 25,
    question: `Un chef de projet a commencé un nouveau projet sur 24 mois. Peu après le démarrage, le sponsor indique que le délai doit être réduit à 6 mois. Que doit faire le chef de projet ?`,
    options: [
      "Se concentrer sur le développement d'un produit minimum viable (MVP) en priorisant les éléments les plus importants pouvant être livrés dans le nouveau délai.",
      "Identifier les éléments du backlog les plus rapides à terminer et les inclure dans le projet.",
      "Travailler avec le sponsor pour augmenter le budget et engager des prestataires pour livrer plus vite.",
      "Mettre en œuvre le fast tracking et enregistrer ce changement dans le registre des risques."
    ],
    answer: "Se concentrer sur le développement d'un produit minimum viable (MVP) en priorisant les éléments les plus importants pouvant être livrés dans le nouveau délai.",
    explanation: `Face à un délai très réduit, il est préférable de réduire la portée en se concentrant sur les fonctionnalités les plus prioritaires pouvant être livrées dans le temps imparti (MVP).`
  },
  {
    id: 26,
    question: `Une équipe et un chef de projet ayant travaillé 5 ans dans un environnement prédictif passent à la gestion agile. Après 5 sprints, l'équipe dépend encore du chef de projet pour prendre des décisions. Que doit faire le chef de projet ?`,
    options: [
      "Donner régulièrement un feedback sur toutes les tâches.",
      "Informer l'équipe qu'elle peut prendre ses propres décisions.",
      "Nommer une autre équipe ayant de l'expérience en agile.",
      "Soutenir et encadrer l'équipe pour qu'elle apprenne à prendre ses propres décisions."
    ],
    answer: "Soutenir et encadrer l'équipe pour qu'elle apprenne à prendre ses propres décisions.",
    explanation: `Le rôle du chef de projet en agile est de coacher et mentor l'équipe pour qu'elle devienne auto-organisée. Informer simplement l'équipe qu'elle peut décider ne suffit pas.`
  },
  {
    id: 27,
    question: `Lors de la quatrième itération d'un projet agile, le client demande un changement technique sur le livrable. Que doit faire le chef de projet ?`,
    options: [
      "Mettre à jour le périmètre et informer le sponsor.",
      "Informer l'équipe de la demande, les laisser décider comment procéder et coordonner avec les parties prenantes.",
      "Travailler avec les parties prenantes pour décider et communiquer les changements à l'équipe.",
      "Calculer l'impact sur l'indice de performance du calendrier (SPI) et informer le sponsor."
    ],
    answer: "Informer l'équipe de la demande, les laisser décider comment procéder et coordonner avec les parties prenantes.",
    explanation: `Dans un projet agile, l'équipe est responsable de la mise en œuvre des changements techniques et décide comment les intégrer, avec coordination des parties prenantes appropriées.`
  },
  {
    id: 28,
    question: `Une équipe agile a mis en œuvre des changements de conception sur plusieurs itérations. Le responsable de la protection des données est préoccupé car son équipe n’a pas été impliquée. Que doit faire le chef de projet ?`,
    options: [
      "S'assurer qu'un membre de l'équipe protection des données participe à chaque standup futur.",
      "Demander au responsable de désigner un membre de son équipe pour rejoindre le projet.",
      "Organiser une réunion avec le responsable pour identifier et mettre en place un processus pour répondre aux exigences.",
      "Rencontrer le propriétaire du produit pour annuler les changements faits sans consulter l'équipe protection des données."
    ],
    answer: "Organiser une réunion avec le responsable pour identifier et mettre en place un processus pour répondre aux exigences.",
    explanation: `La meilleure approche est d'établir un processus collaboratif avec le responsable pour intégrer les exigences de sécurité dans les futures itérations.`
  },
  {
    id: 29,
    question: `Après les trois premières releases d'un produit, le product owner souhaite lancer le produit même s’il manque certaines fonctionnalités définies dans le MVP. Un stakeholder n'est pas satisfait. Que doit faire le chef de projet ?`,
    options: [
      "Analyser les avantages et inconvénients du lancement et en discuter avec le sponsor.",
      "Travailler avec le stakeholder et le product owner pour trouver un alignement tout en soutenant le product owner.",
      "Organiser une réunion avec tous les stakeholders pour revoir le diagramme de Pareto du projet.",
      "Permettre à l'équipe projet de décider comment procéder."
    ],
    answer: "Travailler avec le stakeholder et le product owner pour trouver un alignement tout en soutenant le product owner.",
    explanation: `En agile, le product owner est responsable de prioriser le backlog. Le chef de projet doit aider à trouver un alignement entre stakeholders et product owner.`
  },
  {
    id: 30,
    question: `Une organisation doit évaluer la performance de deux équipes ayant terminé des projets identiques. L'équipe 1 (virtuelle) a réalisé 100 story points, l'équipe 2 (en présentiel) 80 story points. Quelle équipe a mieux performé ?`,
    options: [
      "Équipe 1 parce qu'elle travaille virtuellement.",
      "Équipe 2 parce qu'elle travaille au bureau.",
      "Équipe 1 avec 100 story points a mieux performé que l'équipe 2 avec 80 points.",
      "Équipe 2 avec 80 story points a mieux performé que l'équipe 1 avec 100 points."
    ],
    answer: "Équipe 1 avec 100 story points a mieux performé que l'équipe 2 avec 80 points.",
    explanation: `En agile, les story points mesurent l'effort et la complexité. Plus de points complétés indiquent plus de travail accompli, donc l'équipe 1 a mieux performé.`
  }
];
