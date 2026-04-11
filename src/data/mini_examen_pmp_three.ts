// src/data/projectManagementQuestions.ts
export interface Question {
  id: number;
  question: string;
  options: { label: string; text: string }[];
  solution: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Un projet subit des retards à cause de différences culturelles provoquant des malentendus parmi certains intervenants. Que doit faire le chef de projet pour gérer cette situation ?",
    options: [
      { label: "A", text: "Revoir le registre des intervenants pour identifier des remplaçants pour les parties prenantes rencontrant des difficultés." },
      { label: "B", text: "Revoir le plan d'engagement des parties prenantes pour déterminer les stratégies visant à améliorer la communication." },
      { label: "C", text: "Soumettre une demande de changement au comité de contrôle des changements (CCB) pour remplacer les parties prenantes." },
      { label: "D", text: "Surveiller la communication entre les parties prenantes pour identifier les malentendus." }
    ],
    solution: "B",
    explanation: "Le chef de projet doit revoir le plan d'engagement des parties prenantes pour améliorer la communication. Les différences culturelles sont la cause principale des retards, et améliorer la communication permet de les atténuer. Les autres options sont moins efficaces car remplacer les parties prenantes est perturbant, et la simple surveillance de la communication est réactive et pas proactive."
  },
  {
    id: 2,
    question: "Une entreprise suit une approche prédictive et attend toujours la fin de la phase précédente pour évaluer la qualité des produits. Un nouveau chef de projet avec une expérience en approche hybride est assigné pour améliorer l'efficacité du processus de gestion de la qualité. Que doit-il faire ?",
    options: [
      { label: "A", text: "Continuer le processus tel quel et attendre la prochaine phase pour suggérer des améliorations." },
      { label: "B", text: "Définir une règle de base pour respecter la norme de qualité et demander à l'équipe de l'appliquer." },
      { label: "C", text: "Discuter de l'amélioration du processus avec le PMO pour mettre à jour le cadre de livraison du projet." },
      { label: "D", text: "Comprendre le contexte et les interdépendances du processus auprès de l'équipe, puis définir des améliorations." }
    ],
    solution: "D",
    explanation: "Dans une approche hybride, comprendre le contexte et résoudre les problèmes avec l'équipe améliore l'efficacité. Les autres options sont prédictives et n'augmentent pas l'efficacité du processus de gestion de la qualité."
  },
  {
    id: 3,
    question: "Un nouveau diplômé en informatique est assigné à un projet de développement d'application à court terme. Que doit faire le chef de projet pour assurer le succès ?",
    options: [
      { label: "A", text: "Demander au sponsor de remplacer le nouvel employé par quelqu'un de plus familier avec l'organisation." },
      { label: "B", text: "Accélérer la formation du nouvel employé pour mieux comprendre l'organisation." },
      { label: "C", text: "Assigner le nouvel employé à des tâches moins importantes du projet." },
      { label: "D", text: "Associer le nouvel employé à un membre expérimenté de l'équipe pour qu'ils travaillent ensemble." }
    ],
    solution: "D",
    explanation: "Associer le nouvel employé à un membre expérimenté lui permet de monter rapidement en compétence. Les autres options ne favorisent pas l'intégration et l'apprentissage pratique."
  },
  {
    id: 4,
    question: "Un chef de projet suit l'actualité internationale et constate une législation imminente sur la protection des données clients, plus stricte que celle de son projet. Que doit-il faire ?",
    options: [
      { label: "A", text: "Rencontrer le client pour immédiatement mettre à jour la protection des données dans le contrat." },
      { label: "B", text: "Demander au service juridique de renégocier le contrat avec le client." },
      { label: "C", text: "Noter cette information dans le registre des risques et travailler avec le client et le sponsor pour définir un plan d'atténuation." },
      { label: "D", text: "Travailler avec le service juridique pour mettre à jour le contrat afin d'inclure les protections." }
    ],
    solution: "C",
    explanation: "Le registre des risques doit inclure cette information pour surveiller et atténuer le risque. Il n'est pas nécessaire de modifier immédiatement le contrat, car la législation n'est pas encore en vigueur."
  },
  {
    id: 5,
    question: "Lors de tests non destructifs, certains composants échouent aux tests de fonctionnalité. La solution nécessite un budget supplémentaire et la date limite est serrée. Que doit faire le chef de projet ?",
    options: [
      { label: "A", text: "Inviter les fournisseurs à soumettre des offres pour une solution moins coûteuse." },
      { label: "B", text: "Soumettre une demande de changement au comité de contrôle des changements (CCB)." },
      { label: "C", text: "Demander des fonds supplémentaires au sponsor." },
      { label: "D", text: "Mettre à jour le plan de gestion des risques pour inclure la solution." }
    ],
    solution: "B",
    explanation: "Le CCB évalue et approuve les changements de manière structurée, en considérant le coût et l'impact. Les autres options ne garantissent pas une approbation formelle avant implémentation."
  },
  {
    id: 6,
    question: "Quels deux styles de prise de décision sont les plus rapides lorsque le temps est limité ?",
    options: [
      { label: "A", text: "Style Commandement" },
      { label: "B", text: "Style Consultatif" },
      { label: "C", text: "Style Consensus" },
      { label: "D", text: "Vote à la majorité" }
    ],
    solution: "A et D",
    explanation: "Le style commandement (décision unilatérale du leader) et le vote à la majorité sont rapides. Les styles consultatif et consensus sont plus longs."
  },
  {
    id: 7,
    question: "Lors d'une réunion sur les leçons apprises, l'équipe mentionne qu'elle n'est pas toujours informée des progrès des sprints. Que peut faire le chef de projet ?",
    options: [
      { label: "A", text: "Mentorer l'équipe sur l'utilisation du tableau d'itération du projet." },
      { label: "B", text: "Désigner un membre pour préparer des rapports quotidiens." },
      { label: "C", text: "Former l'équipe à l'utilisation du backlog du projet." },
      { label: "D", text: "Établir un processus pour la prochaine rétrospective." }
    ],
    solution: "A",
    explanation: "Mentorer l'équipe sur le tableau d'itération permet à chacun de suivre le statut du projet. Les autres options ne donnent pas la maîtrise directe de l'information à l'équipe."
  },
  {
    id: 8,
    question: "Pour un projet technologique, de grandes lacunes dans la documentation sont découvertes, sans possibilité de retarder la date de lancement ni d'augmenter le budget. Comment structurer le projet ?",
    options: [
      { label: "A", text: "Doubler la taille de l'équipe avec des ressources moins coûteuses." },
      { label: "B", text: "Séparer le transfert et le test des connaissances pour les exécuter en parallèle." },
      { label: "C", text: "Éliminer tous les marges et replanifier avec une approche rolling wave." },
      { label: "D", text: "Utiliser des sprints agiles et Kanban pour accélérer l'apprentissage et la détection des erreurs." }
    ],
    solution: "D",
    explanation: "Les sprints agiles et Kanban permettent d'améliorer rapidement le transfert de connaissances et de corriger les erreurs. Les autres options n'améliorent pas efficacement le transfert de connaissances."
  },
  {
    id: 9,
    question: "Pour un projet de 12 mois avec un petit groupe de parties prenantes, quelles activités sont les plus importantes pour l'engagement ? (Choisir 2)",
    options: [
      { label: "A", text: "Créer et maintenir la carte des parties prenantes tout au long du projet." },
      { label: "B", text: "Prioriser les parties prenantes et revoir les hypothèses annuellement." },
      { label: "C", text: "Créer des structures hiérarchiques supplémentaires parmi les parties prenantes." },
      { label: "D", text: "Engager les parties prenantes clés et renforcer leur engagement dans le projet." }
    ],
    solution: "A et D",
    explanation: "Créer la carte des parties prenantes et engager les parties prenantes clés sont essentiels pour assurer le succès avec un petit groupe et un calendrier serré. Les autres options sont moins critiques dans ce contexte."
  },
  {
    id: 10,
    question: "Le comité d'approbation s'inquiète qu'un projet de 3 ans pourrait ne pas répondre aux besoins du secteur. Que peut faire le chef de projet ?",
    options: [
      { label: "A", text: "Ajouter un sprint supplémentaire pour modifications." },
      { label: "B", text: "Faire un prototype à partager avec les parties prenantes." },
      { label: "C", text: "Enregistrer les préoccupations du comité dans le registre des problèmes." },
      { label: "D", text: "Ajouter le comité au plan de communication." }
    ],
    solution: "B",
    explanation: "Le prototype permet de démontrer la valeur tangible du livrable aux parties prenantes et de recueillir des retours. Les autres options n'apportent pas de démonstration directe de valeur."
  },
  {
    id: 11,
    question: "En phase d'exécution, un changement de exigences de base est nécessaire. Que doit faire le chef de projet ?",
    options: [
      { label: "A", text: "Appliquer la procédure de gestion des changements du projet." },
      { label: "B", text: "Réestimer l'impact sur les coûts et le planning." },
      { label: "C", text: "Valider auprès des parties prenantes." },
      { label: "D", text: "Effectuer une analyse des causes profondes." }
    ],
    solution: "A",
    explanation: "Tout changement des exigences de base doit passer par la procédure de gestion des changements. Les autres actions sont secondaires et peuvent faire partie de la procédure."
  },
  {
    id: 12,
    question: "À mi-parcours, l'application de gestion de projet ne met pas à jour les informations. Que doit faire le chef de projet ?",
    options: [
      { label: "A", text: "Tâcher un membre de l'équipe de mettre à jour manuellement." },
      { label: "B", text: "Informer le PMO pour résoudre le problème." },
      { label: "C", text: "Mettre à jour le plan de projet pour que l'équipe se concentre sur les livrables." },
      { label: "D", text: "Enregistrer dans le registre des problèmes et demander un nouvel outil." }
    ],
    solution: "C",
    explanation: "Le chef de projet doit résoudre l'impédiment et protéger l'équipe pour qu'elle se concentre sur les livrables. Les autres options ne priorisent pas la production."
  },
  {
    id: 13,
    question: "Pour un projet avec un planning très serré, les parties prenantes craignent de ne pas répondre aux besoins critiques. Que faire ?",
    options: [
      { label: "A", text: "Travailler avec le sponsor pour réviser le périmètre." },
      { label: "B", text: "Identifier le produit minimum viable (MVP) avec l'équipe et les parties prenantes." },
      { label: "C", text: "Assurer aux parties prenantes que le projet respectera le planning." },
      { label: "D", text: "Mettre à jour le planning et les communications pour informer les parties prenantes." }
    ],
    solution: "B",
    explanation: "Définir le MVP permet de garantir que les besoins critiques sont satisfaits dans le temps imparti et d'aligner l'équipe et les parties prenantes."
  },
  {
    id: 14,
    question: "Un projet redémarré a consommé 70% du budget et présente CPI=0.42 et SPI=0.2. Des changements majeurs de périmètre sont attendus. Quelle est la meilleure action ?",
    options: [
      { label: "A", text: "Changer la technique de suivi de la valeur acquise." },
      { label: "B", text: "Modifier le contrat selon les nouveaux changements." },
      { label: "C", text: "Négocier les changements de périmètre pour les minimiser." },
      { label: "D", text: "Clore ce projet et demander un nouveau projet au sponsor." }
    ],
    solution: "D",
    explanation: "Étant donné les problèmes historiques et les changements majeurs, il est préférable de clore le projet et de lancer un nouveau projet."
  },
  {
    id: 15,
    question: "Dans un projet hybride, le sponsor demande plus de détails dans la charte. Comment répondre ?",
    options: [
      { label: "A", text: "Fournir une charte d'un projet similaire à titre de référence." },
      { label: "B", text: "Obtenir d'abord l'approbation du planning auprès des parties prenantes." },
      { label: "C", text: "Informer le sponsor que la charte doit être approuvée avant la planification détaillée." },
      { label: "D", text: "Inviter le sponsor à la rétrospective de l'équipe." }
    ],
    solution: "C",
    explanation: "La charte doit être approuvée avant de commencer la planification détaillée, même si des jalons sont connus."
  },
  {
    id: 16,
    question: "Un projet multi-national nécessite des livrables de plusieurs départements. Quelle est l'action la plus importante pour assurer le succès ?",
    options: [
      { label: "A", text: "Créer des règles de communication et un plan de projet avec l'équipe." },
      { label: "B", text: "Faciliter des sessions avec les parties prenantes pour définir les exigences détaillées." },
      { label: "C", text: "Rencontrer les responsables fonctionnels pour aligner les objectifs du projet." },
      { label: "D", text: "Développer un plan de gestion des ressources par département." }
    ],
    solution: "C",
    explanation: "Rencontrer les responsables fonctionnels assure que tous les départements sont alignés sur les objectifs et réduit les conflits de priorité."
  },
  {
    id: 17,
    question: "Lors d'une expansion de services, le CCB approuve un changement de service plus efficace. Que doit faire le chef de projet ?",
    options: [
      { label: "A", text: "Mettre en œuvre le changement tel qu'approuvé." },
      { label: "B", text: "Modifier le changement pour réduire l'impact sur le planning et le budget." },
      { label: "C", text: "Demander une justification au CCB." },
      { label: "D", text: "Réaliser une analyse coûts-bénéfices du service alternatif." }
    ],
    solution: "A",
    explanation: "Le CCB a approuvé le changement en considérant tous les impacts, il doit donc être mis en œuvre."
  },
  {
    id: 18,
    question: "Un intervenant pense que seuls certains reçoivent les mises à jour de projet et se sent exclu. Que doit faire le chef de projet ?",
    options: [
      { label: "A", text: "Préparer un rapport de statut et l'envoyer à tous les intervenants." },
      { label: "B", text: "Rencontrer tous les intervenants et leur demander de comparer l'information." },
      { label: "C", text: "Vérifier le plan de communication pour s'assurer que tous sont inclus." },
      { label: "D", text: "Réviser la stratégie de communication pour envoyer plus fréquemment des rapports." }
    ],
    solution: "C",
    explanation: "Vérifier que tous les intervenants sont inclus dans le plan de communication est la meilleure approche pour résoudre le problème."
  },
  {
    id: 19,
    question: "Lors de l'élaboration de la planification initiale, deux ressources nécessaires pour une tâche critique sont réaffectées. Que doit faire le chef de projet ?",
    options: [
      { label: "A", text: "Réaliser une analyse quantitative des risques." },
      { label: "B", text: "Demander au CCB de revoir la réaffectation." },
      { label: "C", text: "Rencontrer le responsable fonctionnel pour négocier des ressources de remplacement." },
      { label: "D", text: "Escalader le problème au sponsor." }
    ],
    solution: "C",
    explanation: "Le responsable fonctionnel contrôle les ressources, il est donc le mieux placé pour fournir des remplaçants adaptés."
  },
  {
    id: 20,
    question: "Un projet revisite un projet précédent. Pourquoi consulter d'abord les leçons apprises et les informations historiques ?",
    options: [
      { label: "A", text: "Identifier les ressources ayant travaillé sur le projet précédent." },
      { label: "B", text: "Définir les exigences et finaliser le périmètre." },
      { label: "C", text: "Déterminer une base pour le budget." },
      { label: "D", text: "Comprendre les problèmes rencontrés dans le projet précédent." }
    ],
    solution: "D",
    explanation: "Consulter les leçons apprises permet de comprendre les problèmes rencontrés précédemment et de planifier le projet revisité efficacement."
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