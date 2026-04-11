// Mini Examen PMP 7

export interface Question {
  id: number;
  question: string;
  options: { key: string; text: string }[] | string[];
  solution: string;
  explanation: string;
}

export const questions1to20: Question[] = [
  {
    id: 1,
    question: "Un sponsor de projet assigne un chef de projet à un nouveau projet critique avec des contraintes de budget et de temps strictes. Quelle devrait être la première action du chef de projet ?",
    options: [
      { key: "A", text: "Rencontrer les managers fonctionnels pour planifier les ressources de l'équipe." },
      { key: "B", text: "Rencontrer les parties prenantes pour obtenir leur adhésion et soutien." },
      { key: "C", text: "Rencontrer le sponsor pour comprendre l'objectif du projet et les exigences de haut niveau." },
      { key: "D", text: "Mettre à jour le plan de gestion des exigences pour refléter les contraintes de budget et de temps." },
    ],
    solution: "C",
    explanation: "La première étape pour initier un projet est de comprendre l'objectif et les exigences du projet, et de créer une charte. Il est donc nécessaire de rencontrer le sponsor pour comprendre l'objectif et les exigences de haut niveau avant de planifier les ressources ou d'impliquer d'autres parties prenantes.",
  },
  {
    id: 2,
    question: "Un client informe le chef de projet qu'il n'accepte pas les livrables du projet. Que doit faire le chef de projet pour obtenir l'approbation ?",
    options: [
      { key: "A", text: "Revoir les critères d'acceptation avec le client pour clarifier les exigences des livrables." },
      { key: "B", text: "Revoir la charte du projet et le plan d'engagement des parties prenantes avec le client." },
      { key: "C", text: "Examiner le plan de gestion de la qualité avec le client." },
      { key: "D", text: "Identifier les objections du client et réaliser une analyse des risques." },
    ],
    solution: "A",
    explanation: "Pour clore un projet, le chef de projet doit obtenir l'acceptation du client concernant les livrables. Les critères d'acceptation sont le seul document pertinent pour cette étape.",
  },
  {
    id: 3,
    question: "Une augmentation imminente du prix du carburant a été identifiée comme un risque à faible impact mais haute probabilité. Le projet débute et le prix du carburant augmente de 20%. Que doit faire le chef de projet ?",
    options: [
      { key: "A", text: "Mettre à jour le registre des risques." },
      { key: "B", text: "Mettre à jour le journal des hypothèses." },
      { key: "C", text: "Mettre à jour le registre des problèmes." },
      { key: "D", text: "Mettre à jour le registre des leçons apprises." },
    ],
    solution: "C",
    explanation: "L'augmentation réelle du prix dépasse la prévision initiale. Ce qui était un risque devient un problème actuel, qui doit être documenté dans le registre des problèmes.",
  },
  {
    id: 4,
    question: "Lors de la phase d'exécution d'un projet prédictif, un manager fonctionnel propose de changer un matériau pour un plus respectueux de l'environnement. Quelle est la première réponse du chef de projet ?",
    options: [
      { key: "A", text: "Développer un plan de preuve de concept pour évaluer la faisabilité et l'impact du changement et le présenter au sponsor." },
      { key: "B", text: "Autoriser immédiatement le changement de matériau." },
      { key: "C", text: "Informer le manager que les changements ne sont pas autorisés à cette phase." },
      { key: "D", text: "Demander au manager de soumettre une demande de changement formelle." },
    ],
    solution: "A",
    explanation: "Le projet étant prédictif, tout changement doit être évalué avant mise en œuvre. Une preuve de concept permet d'évaluer l'impact et de soumettre la décision au sponsor.",
  },
  {
    id: 5,
    question: "Un membre d'équipe d'un projet multinational arrive régulièrement en retard aux réunions de suivi. Que doit faire le chef de projet ?",
    options: [
      { key: "A", text: "Réaffecter le membre à un autre projet." },
      { key: "B", text: "Documenter ce comportement dans le dossier du personnel." },
      { key: "C", text: "Encourager la participation mais rester flexible si le travail critique n'est pas affecté." },
      { key: "D", text: "Rencontrer l'équipe pour clarifier que la présence aux réunions est obligatoire." },
    ],
    solution: "D",
    explanation: "Le chef de projet doit clarifier les attentes avec l'ensemble de l'équipe. C'est la meilleure façon d'assurer la communication et le respect des processus.",
  },
  {
    id: 6,
    question: "Après comparaison des résultats réels avec la ligne de base des performances, le chef de projet constate que les mesures de travail et de coût sont meilleures que prévu. Que doit-il faire ?",
    options: [
      { key: "A", text: "Effectuer des revues de performance avec les membres de l'équipe." },
      { key: "B", text: "Mettre à jour le registre des risques." },
      { key: "C", text: "Informer les parties prenantes." },
      { key: "D", text: "Revoir le plan de gestion de projet." },
    ],
    solution: "B",
    explanation: "Le chef de projet identifie un risque potentiel de détérioration des performances futures et doit le documenter dans le registre des risques.",
  },
  {
    id: 7,
    question: "Un projet doit respecter les délais et dépasser les niveaux de qualité. Le chef de projet sollicite les idées de l'équipe pour améliorer les méthodes de travail. Cette approche correspond à quelle théorie ?",
    options: [
      { key: "A", text: "Théorie X" },
      { key: "B", text: "Théorie Q" },
      { key: "C", text: "Théorie Y" },
      { key: "D", text: "Théorie T" },
    ],
    solution: "C",
    explanation: "La théorie Y suppose que les membres de l'équipe souhaitent contribuer et participent activement, ce qui correspond au comportement du chef de projet.",
  },
  {
    id: 8,
    question: "Pourquoi un chef de projet devrait-il estimer le coût de la qualité (COQ) lorsqu'un client identifie des problèmes de performance sur un produit ?",
    options: [
      { key: "A", text: "Pour déterminer le coût optimal pour prévenir les échecs futurs." },
      { key: "B", text: "Pour évaluer le coût de conformité et non-conformité pendant la durée de vie du produit." },
      { key: "C", text: "Pour évaluer la qualité et minimiser les coûts de contrôle futurs." },
      { key: "D", text: "Pour minimiser le retouche et les rebuts liés aux coûts d'échec." },
    ],
    solution: "B",
    explanation: "Le COQ permet d'évaluer le coût lié à la qualité, incluant conformité et non-conformité, afin de mieux gérer le projet et identifier les économies potentielles.",
  },
  {
    id: 9,
    question: "Un manager fonctionnel quitte l'entreprise alors qu'un projet est en développement. Que doit faire le chef de projet en premier ?",
    options: [
      { key: "A", text: "Mettre à jour le journal des changements." },
      { key: "B", text: "Mettre à jour le registre des risques." },
      { key: "C", text: "Mettre à jour le registre des parties prenantes." },
      { key: "D", text: "Mettre à jour le journal des hypothèses." },
    ],
    solution: "C",
    explanation: "Lorsqu'un manager fonctionnel quitte le projet, le registre des parties prenantes doit être mis à jour pour refléter les changements de responsabilités et contacts.",
  },
  {
    id: 10,
    question: "Après réception de la charte du projet, le chef de projet prépare le plan de gestion. Avec peu d'informations détaillées, comment déterminer la durée attendue du projet ?",
    options: [
      { key: "A", text: "Estimation analogique" },
      { key: "B", text: "Estimation ascendante" },
      { key: "C", text: "Feedback de la réunion de lancement" },
      { key: "D", text: "Input du sponsor" },
    ],
    solution: "A",
    explanation: "L'estimation analogique utilise les données historiques de projets similaires pour estimer la durée ou le coût d'un nouveau projet, utile en début de projet avec peu d'information détaillée.",
  },
  {
    id: 11,
    question: "Un projet montre un écart de calendrier négatif. Une équipe cause des retards. Que doit faire le chef de projet ?",
    options: [
      { key: "A", text: "Rencontrer l'équipe pour identifier des stratégies pour résoudre les retards." },
      { key: "B", text: "Rencontrer le sponsor pour définir une approche de rattrapage." },
      { key: "C", text: "Effectuer une analyse des risques." },
      { key: "D", text: "Consulter les ressources humaines pour envisager des actions correctives." },
    ],
    solution: "A",
    explanation: "Le chef de projet doit collaborer directement avec l'équipe pour résoudre les retards, c'est l'approche proactive la plus efficace.",
  },
  {
    id: 12,
    question: "Lors de la planification, le sponsor identifie le besoin d'un spécialiste étranger mais le budget ne permet pas ses déplacements. Que faire ?",
    options: [
      { key: "A", text: "Former une ressource existante." },
      { key: "B", text: "Soumettre une demande de changement budgétaire." },
      { key: "C", text: "Trouver un remplaçant local." },
      { key: "D", text: "Assigner le spécialiste à une équipe virtuelle." },
    ],
    solution: "D",
    explanation: "L'utilisation d'équipes virtuelles permet d'impliquer des spécialistes à distance sans coûts de déplacement.",
  },
  {
    id: 13,
    question: "Plusieurs nouveaux membres internationaux rejoignent un projet en exécution. Quel document mettre à jour en priorité ?",
    options: [
      { key: "A", text: "Plan de gestion des achats." },
      { key: "B", text: "Plan de gestion des risques." },
      { key: "C", text: "Charte du projet." },
      { key: "D", text: "Plan de gestion de la communication." },
    ],
    solution: "D",
    explanation: "Pour assurer une communication efficace avec de nouveaux membres provenant de différents pays, le plan de gestion de la communication doit être mis à jour en priorité.",
  },
  {
    id: 14,
    question: "Lors d'une réunion de suivi, un membre indique qu'une solution temporaire a été trouvée pour un échec persistant d'un équipement. Quel document mettre à jour ?",
    options: [
      { key: "A", text: "Journal des problèmes." },
      { key: "B", text: "Plan de gestion des risques." },
      { key: "C", text: "Journal des hypothèses." },
      { key: "D", text: "Registre des parties prenantes." },
    ],
    solution: "A",
    explanation: "L'information sur un problème existant doit être enregistrée dans le journal des problèmes pour suivi et résolution.",
  },
  {
    id: 15,
    question: "Au milieu d'un projet impliquant six entreprises, un stakeholder change d'entreprise. Quel document mettre à jour ?",
    options: [
      { key: "A", text: "Plan d'engagement des parties prenantes." },
      { key: "B", text: "Charte du projet." },
      { key: "C", text: "Registre des parties prenantes." },
      { key: "D", text: "Plan de gestion de projet." },
    ],
    solution: "C",
    explanation: "Le registre des parties prenantes doit être mis à jour pour refléter l'organisation et les contacts actuels du stakeholder.",
  },
  {
    id: 16,
    question: "Un chef de projet menant un projet agile souhaite motiver l'équipe projet pour améliorer les performances. Comment le chef de projet devrait-il procéder ?",
    options: [
      "Mettre en place un système de récompenses pour garder l'équipe motivée et impliquée dans le projet",
      "Travailler avec le sponsor pour financer une célébration une fois le projet terminé",
      "Travailler avec le département des ressources humaines pour fournir des primes financières à tous les membres de l'équipe",
      "Surveiller les réalisations quotidiennes de l'équipe et les reconnaître après la mise en production réussie du projet"
    ],
    solution: "Mettre en place un système de récompenses pour garder l'équipe motivée et impliquée dans le projet",
    explanation: "Mettre en place un système de récompenses est la meilleure façon de maintenir la motivation de l'équipe tout au long du projet. Les célébrations ou primes après le projet ne motivent pas pendant l'exécution."
  },
  {
    id: 17,
    question: "Un chef de projet pour une implémentation IT utilise plusieurs ressources IT. Le manager fonctionnel d'un spécialiste technique retire ce spécialiste du projet pour gérer un problème client critique. Cela retarde le jalon prévu. Que devrait faire le chef de projet en premier ?",
    options: [
      "Analyser l'impact et le retard causé par la perte du spécialiste sur le planning et le budget",
      "S'assurer que le temps du spécialiste consacré au problème client n'est pas facturé au projet",
      "Planifier une réunion avec les parties prenantes pour examiner le plan de communication",
      "Parler avec le manager fonctionnel et obtenir son engagement pour récupérer le spécialiste dès que possible"
    ],
    solution: "Parler avec le manager fonctionnel et obtenir son engagement pour récupérer le spécialiste dès que possible",
    explanation: "Le plus important est de récupérer le spécialiste pour éviter d'autres retards. L'analyse du retard ou le budget peut être fait ensuite."
  },
  {
    id: 18,
    question: "Un chef de projet doit importer certains composants mais choisit de ne rien faire face au risque de taux de change défavorable. Quelle stratégie de réponse au risque a-t-il utilisée ?",
    options: [
      "Transférer",
      "Éviter",
      "Minimiser",
      "Accepter"
    ],
    solution: "Accepter",
    explanation: "Le chef de projet a choisi d'accepter le risque. Aucune action de mitigation ou transfert n'a été entreprise."
  },
  {
    id: 19,
    question: "Une équipe de projet manque régulièrement les jalons. Le chef de projet apprend qu'un membre n'a pas certaines compétences nécessaires. Que devrait-il faire ?",
    options: [
      "Réaffecter le membre à une autre tâche",
      "Rencontrer l'équipe pour discuter des problèmes et élaborer un plan pour les résoudre",
      "Informer les parties prenantes que le projet sera en retard et qu'il n'y a rien à faire",
      "Licencier le membre et en recruter un autre"
    ],
    solution: "Rencontrer l'équipe pour discuter des problèmes et élaborer un plan pour les résoudre",
    explanation: "Discuter avec l'équipe permet d'identifier les causes profondes, résoudre les conflits et fournir la formation nécessaire."
  },
  {
    id: 20,
    question: "Lors de la planification d'itération, certaines user stories à haute valeur sont également à haut risque. Que devrait faire le chef de projet ?",
    options: [
      "Inclure les stories à risque élevé dans les premières sprints",
      "Inclure les stories à faible risque dans les premières sprints pour motiver l'équipe",
      "Travailler avec les parties prenantes pour planifier les stories dans les sprints",
      "Faire une analyse Monte Carlo pour identifier quelles stories commencer"
    ],
    solution: "Inclure les stories à risque élevé dans les premières sprints",
    explanation: "Traiter les stories à risque élevé tôt permet de gérer les risques dès le début et d'avoir plus de temps pour résoudre les problèmes éventuels."
  },
  {
    id: 21,
    question: "Un chef de projet mène un projet pour un client dans un autre pays et doit se conformer à certaines réglementations. Le client pense que l'audit n'est pas nécessaire et demande de ne pas déranger l'équipe. Que doit faire le chef de projet ?",
    options: [
      "Exclure l'équipe de l'audit",
      "Commencer l'audit sans informer le client",
      "Planifier une réunion du comité de pilotage",
      "Rencontrer le client pour expliquer la nécessité de l'audit et procéder"
    ],
    solution: "Rencontrer le client pour expliquer la nécessité de l'audit et procéder",
    explanation: "Il est essentiel d'expliquer au client l'obligation réglementaire et de maintenir la transparence tout en minimisant l'impact sur l'équipe."
  },
  {
    id: 22,
    question: "Un chef de projet identifie de nouveaux risques pouvant affecter des tâches critiques. Outre le rapport de risques, quel document doit-il consulter pour le rapport mensuel ?",
    options: [
      "Registre des risques",
      "Journal des hypothèses",
      "Plan de gestion des risques",
      "Matrice probabilité/impact"
    ],
    solution: "Registre des risques",
    explanation: "Le registre des risques contient tous les risques identifiés et les réponses prévues, ce qui est essentiel pour préparer le rapport de situation."
  },
  {
    id: 23,
    question: "Une entreprise multinationale souhaite mettre en place un nouveau logiciel impactant plusieurs départements. Que doit développer l'équipe projet pour aligner les attentes des parties prenantes ?",
    options: [
      "Cahier des charges (SOW)",
      "Plan de gestion des parties prenantes",
      "Matrice d'évaluation de l'engagement des parties prenantes",
      "Structure de répartition des risques (RBS)"
    ],
    solution: "Plan de gestion des parties prenantes",
    explanation: "Le plan de gestion des parties prenantes définit comment engager les parties prenantes pour gérer leurs attentes vis-à-vis des livrables."
  },
  {
    id: 24,
    question: "Suite à une forte réduction budgétaire, le comité de pilotage du projet est remplacé par un seul sponsor. Que doit faire le chef de projet ?",
    options: [
      "Rédiger une mise à jour projet et la partager avec le sponsor",
      "Modifier le plan de communication pour refléter le changement",
      "Soumettre une demande de changement au CCB pour enregistrer le changement",
      "Planifier une réunion avec le sponsor pour discuter du budget"
    ],
    solution: "Modifier le plan de communication pour refléter le changement",
    explanation: "Le plan de communication doit être adapté au nouveau profil des parties prenantes pour garantir une communication appropriée."
  },
  {
    id: 25,
    question: "L'équipe projet travaille sur un serveur ancien pour développer une application. Le nouveau serveur n'est pas arrivé pour les tests utilisateurs, retardant le processus. Que devrait faire le chef de projet ?",
    options: [
      "Revoir et ajuster le planning en attendant le serveur",
      "Effectuer les tests sur le serveur actuel",
      "Passer les tests et continuer la tâche suivante",
      "Demander au fournisseur d'accélérer la livraison"
    ],
    solution: "Revoir et ajuster le planning en attendant le serveur",
    explanation: "Le serveur actuel ne permet pas les tests. L'ajustement du planning est la solution la plus appropriée."
  },
  {
    id: 26,
    question: "Un chef de projet tente d'engager les parties prenantes à un nouveau projet via les réunions quotidiennes. Personne n'y assiste. Que doit-il faire ?",
    options: [
      "Contacter individuellement les parties prenantes pour comprendre leurs raisons",
      "Continuer les réunions en espérant qu'ils se joignent",
      "Annuler les réunions et chercher d'autres méthodes",
      "Escalader à la direction"
    ],
    solution: "Contacter individuellement les parties prenantes pour comprendre leurs raisons",
    explanation: "Comprendre les raisons de l'absence permet de trouver des solutions adaptées et d'améliorer l'engagement."
  },
  {
    id: 27,
    question: "Un chef de projet a du mal à gérer les parties prenantes car le registre ne distingue pas leur niveau d'implication nécessaire. Que doit-il faire ?",
    options: [
      "Rencontrer le CCB pour identifier de nouvelles parties prenantes",
      "Mettre à jour le plan de communication",
      "Déterminer le seuil de risque de chaque partie prenante",
      "Développer une matrice d'évaluation de l'engagement des parties prenantes"
    ],
    solution: "Développer une matrice d'évaluation de l'engagement des parties prenantes",
    explanation: "Cette matrice compare le niveau actuel d'engagement des parties prenantes avec le niveau désiré pour le succès du projet."
  },
  {
    id: 28,
    question: "Un projet approche de sa fin quand un changement de réglementation peut l'impacter. Que doit faire le chef de projet ?",
    options: [
      "Vérifier le registre des parties prenantes",
      "Mettre à jour la ligne de base des coûts",
      "Consulter le plan de gestion des risques",
      "Réaliser une analyse coûts-bénéfices"
    ],
    solution: "Consulter le plan de gestion des risques",
    explanation: "Le plan de gestion des risques décrit comment gérer les risques, y compris ceux dus à des changements réglementaires."
  },
  {
    id: 29,
    question: "Une équipe agile atteint ses objectifs mais perd sa motivation et s'ennuie lors des daily standups. Que pourrait-on faire ?",
    options: [
      "Fixer des objectifs plus ambitieux pour l'équipe",
      "Planifier des activités de team-building pour augmenter l'engagement",
      "Faire intervenir le sponsor lors des standups",
      "Identifier un budget pour inciter l'équipe"
    ],
    solution: "Planifier des activités de team-building pour augmenter l'engagement",
    explanation: "Le team-building renforce la dynamique de groupe et l'engagement intrinsèque, contrairement aux motivations extrinsèques."
  },
  {
    id: 30,
    question: "Qui a l'autorité pour agir en tant que partie prenante intégrale et décideur clé tout au long du projet afin de l'aligner sur les objectifs de l'entreprise ?",
    options: [
      "PMO",
      "Chef de projet",
      "Sponsor projet",
      "Client"
    ],
    solution: "PMO",
    explanation: "Le PMO peut agir comme partie prenante intégrale et décideur clé pour garantir l'alignement avec les objectifs de l'entreprise."
  }
];
