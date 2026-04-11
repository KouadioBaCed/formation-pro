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
    question: "Lors de la quatrième itération du développement produit, le chef de projet se rend compte que le logiciel utilisé pour le plan de gestion de projet ne permet pas de mises à jour prévues. Quelle action le chef de projet doit-il entreprendre ?",
    options: [
      "Sélectionner une ressource de l'équipe capable de mettre à jour le modèle de plan de gestion de projet.",
      "En fonction de la valeur commerciale des prochaines itérations, choisir une priorité pour les activités.",
      "Résoudre le problème de manière autonome afin que les membres de l'équipe ne soient pas distraits.",
      "Ajouter le problème comme un nouveau risque de projet dans le registre des risques et proposer des actions correctives."
    ],
    solution: "Résoudre le problème de manière autonome afin que les membres de l'équipe ne soient pas distraits.",
    explication: "Le rôle du chef de projet est de lever les obstacles à la performance de l'équipe. Les déficiences logicielles doivent être traitées au niveau administratif et non au niveau de l'équipe. Les autres options ne sont pas correctes car elles impliquent des ressources de l'équipe au lieu de ressources administratives."
  },
  {
    id: 2,
    question: "Un chef de projet travaille sur un projet informatique. Lors d'une réunion de revue d'itération, deux parties prenantes clés s'engagent dans une discussion animée sur les capacités du prototype. Que doit faire le chef de projet ensuite ?",
    options: [
      "Planifier une séance de brainstorming avec l'équipe projet pour trouver une solution.",
      "Identifier la source du conflit entre les parties prenantes et traiter le problème.",
      "Lister les points positifs et négatifs de la situation pour déterminer l'impact du conflit.",
      "Inviter le sponsor du projet à intervenir et agir en tant que médiateur pour les parties prenantes."
    ],
    solution: "Identifier la source du conflit entre les parties prenantes et traiter le problème.",
    explication: "Pour résoudre efficacement un conflit, le chef de projet doit d'abord comprendre sa source. Les autres options ne garantissent pas la résolution du problème sans connaître l'origine du conflit."
  },
  {
    id: 3,
    question: "Un chef de projet travaille sur un projet complexe avec plusieurs parties prenantes et des priorités concurrentes. Chaque partie prenante veut maximiser sa part des ressources allouées pour les fonctionnalités demandées. Sur quoi le chef de projet doit-il se concentrer ?",
    options: [
      "Répondre aux intérêts personnels des parties prenantes.",
      "Répondre aux intérêts mutuels de toutes les parties prenantes.",
      "Préserver les relations et la complicité avec les parties prenantes.",
      "Pousser les parties prenantes à accepter le point de vue du chef de projet."
    ],
    solution: "Répondre aux intérêts mutuels de toutes les parties prenantes.",
    explication: "Le chef de projet doit chercher une solution qui satisfait les besoins de tous les intervenants, même si cela implique des compromis, pour assurer le succès du projet et maintenir de bonnes relations."
  },
  {
    id: 4,
    question: "Un objectif a été fixé à quatre mois pour qu'une équipe de projet distribue un produit. Il sera difficile de respecter ce délai car les membres ont des tâches individuelles à accomplir. Comment le chef de projet doit-il gérer cette situation ?",
    options: [
      "Encourager les membres à modifier leurs tâches pour ne pas retarder le projet.",
      "Aider les membres à prioriser leurs tâches personnelles par rapport aux objectifs du projet.",
      "Reporter la date de livraison pour permettre aux membres de finir leurs tâches personnelles.",
      "Demander un délai pour les tâches individuelles et aider à trouver des moments alternatifs pour les accomplir."
    ],
    solution: "Aider les membres à prioriser leurs tâches personnelles par rapport aux objectifs du projet.",
    explication: "Dans un temps limité, l'équipe doit prioriser les tâches liées à la livraison du produit. Le chef de projet doit aider à aligner les priorités personnelles sur les objectifs du projet."
  },
  {
    id: 5,
    question: "Une demande de changement approuvée ajoute un incitatif à un contrat forfaitaire si l'entrepreneur maintient le calendrier de base actuel. Que doit-on mettre à jour maintenant ?",
    options: [
      "Base de référence du périmètre",
      "Plan de gestion de projet",
      "Base de référence des coûts",
      "Base de référence du calendrier"
    ],
    solution: "Base de référence des coûts",
    explication: "La demande de changement approuvée affecte les coûts. La base de référence des coûts doit être mise à jour pour refléter le paiement incitatif. La portée et le calendrier ne changent pas."
  },
  {
    id: 6,
    question: "Quelle est la raison du changement du réseau de relations ?",
    options: [
      "Les rôles et titres sont assignés officiellement",
      "Évolue avec le temps à mesure que les personnes gagnent ou perdent de l'influence",
      "Planifié à l'avance par la direction",
      "Visible par tous dans l'organisation"
    ],
    solution: "Évolue avec le temps à mesure que les personnes gagnent ou perdent de l'influence",
    explication: "Le réseau relationnel change au fur et à mesure que le projet progresse et que les individus gagnent ou perdent en influence."
  },
  {
    id: 7,
    question: "Un chef de projet dirige une initiative clé mettant l'accent sur l'agilité, l'adaptation au marché et la réponse rapide aux tendances du marché. Quelle activité doit-il prioriser pour assurer le succès ?",
    options: [
      "Effectuer des revues périodiques des plans, objectifs et livrables pour s'assurer que toutes les données sont capturées.",
      "Demander plus de financement pour embaucher des ressources qualifiées et améliorer la qualité.",
      "Revoir collaborativement les objectifs avec le sponsor pour convenir de plans et livrables réalisables.",
      "Créer un business case après une étude de marché pour ajuster les livrables en fonction des nouveaux objectifs."
    ],
    solution: "Revoir collaborativement les objectifs avec le sponsor pour convenir de plans et livrables réalisables.",
    explication: "La collaboration avec le sponsor permet d'aligner les objectifs du projet sur les réalités du marché et de définir des objectifs atteignables."
  },
  {
    id: 8,
    question: "Une organisation développe un nouveau produit. Que doit faire en premier le chef de projet pour améliorer le succès du projet ?",
    options: [
      "Travailler avec le PMO pour développer un calendrier détaillé.",
      "Travailler avec l'équipe marketing pour effectuer une analyse d'impact et identifier le marché cible.",
      "Travailler avec le sponsor pour définir la vision et l'initiative globale du projet.",
      "Travailler avec les parties prenantes pour identifier les membres appropriés de l'équipe projet."
    ],
    solution: "Travailler avec le sponsor pour définir la vision et l'initiative globale du projet.",
    explication: "Pour réussir le projet, il est crucial de définir d'abord la vision et la mission avant de passer à la planification détaillée et à l'analyse d'impact."
  },
  {
    id: 9,
    question: "Un projet doit livrer un résultat dans un délai réduit : initialement un mois, maintenant deux semaines. Le chef de projet sait qu'aucune ressource technique n'est disponible, mais connaît un gestionnaire de ressources techniques d'un projet précédent. Quelle est la première action à entreprendre ?",
    options: [
      "Informer le product owner du problème de ressources techniques.",
      "Escalader le problème de ressources techniques à la direction.",
      "Vérifier la disponibilité des ressources en rencontrant le gestionnaire connu.",
      "Contacter un fournisseur tiers pour obtenir une ressource technique."
    ],
    solution: "Vérifier la disponibilité des ressources en rencontrant le gestionnaire connu.",
    explication: "Il est préférable de vérifier directement la disponibilité réelle des ressources techniques avant d'alerter le sponsor ou la direction."
  },
  {
    id: 10,
    question: "Un projet hybride a un excellent rendement pendant les phases prédictives, mais lors des phases incrémentales, l'équipe montre un moral faible, peu d'engagement et des conflits. Un membre reste performant. Que doit faire le chef de projet en premier ?",
    options: [
      "Reconnaître le membre performant comme exemple.",
      "Fournir une formation supplémentaire sur les processus agiles.",
      "Discuter avec le sponsor et revenir à une approche prédictive.",
      "Rencontrer l'équipe pour discuter des problèmes et développer un plan d'action."
    ],
    solution: "Rencontrer l'équipe pour discuter des problèmes et développer un plan d'action.",
    explication: "Le chef de projet doit identifier les causes profondes des problèmes et élaborer des stratégies pour y remédier."
  },
  {
    id: 11,
    question: "Quatre parties prenantes sont préoccupées par le fait que le plan de release actuel ne répondra pas aux besoins urgents. Que doit faire le chef de projet ?",
    options: [
      "Évaluer le WBS et renégocier la portée avec le sponsor.",
      "Collaborer avec parties prenantes et équipe pour déterminer le produit minimum viable (MVP).",
      "Calculer l'indice de performance du calendrier et escalader le risque au sponsor.",
      "Modifier la baseline du calendrier et suivre les progrès via un burndown chart."
    ],
    solution: "Collaborer avec parties prenantes et équipe pour déterminer le produit minimum viable (MVP).",
    explication: "Définir le MVP permet de livrer de la valeur rapidement en se concentrant uniquement sur les éléments essentiels."
  },
  {
    id: 12,
    question: "Un changement de portée est nécessaire dans un projet technologique. Quels outils peuvent aider à comprendre l'impact du changement ?",
    options: [
      "Diagramme de Pareto",
      "Diagramme en arêtes de poisson",
      "Cycle PDCA de Deming",
      "Diagramme cause-effet"
    ],
    solution: "Cycle PDCA de Deming",
    explication: "Le cycle PDCA (Plan-Do-Check-Act) est utilisé pour analyser l'impact des changements et améliorer les processus."
  },
  {
    id: 13,
    question: "Une entreprise utilisant des approches prédictives embauche un chef de projet utilisant une approche hybride. La portée contient plusieurs exigences floues. Comment planifier la livraison ?",
    options: [
      "Escalader le problème et attendre l'autorisation finale.",
      "Décomposer et prioriser les exigences en packages de travail itératifs.",
      "Ignorer les exigences floues et se concentrer sur le plan de livraison.",
      "Attendre que les exigences soient plus claires avant d'agir."
    ],
    solution: "Décomposer et prioriser les exigences en packages de travail itératifs.",
    explication: "Dans une approche hybride, il faut prioriser les exigences connues et avancer de manière itérative."
  },
  {
    id: 14,
    question: "Lors de la quatrième revue, le client demande de changer l'approche technique du produit. Que doit faire le chef de projet ?",
    options: [
      "Informer l'équipe d'implémenter immédiatement la nouvelle approche.",
      "Permettre à l'équipe de choisir l'approche la plus appropriée et vérifier avec les parties prenantes.",
      "Rechercher l'approche proposée avec les parties prenantes et choisir la meilleure pour l'équipe.",
      "Faire benchmarker l'approche pour obtenir le soutien du sponsor."
    ],
    solution: "Permettre à l'équipe de choisir l'approche la plus appropriée et vérifier avec les parties prenantes.",
    explication: "C'est une question technique, le chef de projet doit autonomiser l'équipe pour choisir la meilleure option et améliorer l'engagement."
  },
  {
    id: 15,
    question: "Un projet hybride est au début avec une équipe totalement nouvelle. Le chef de projet sera très occupé les deux premières semaines. Comment développer l'équipe ?",
    options: [
      "S'assurer que l'équipe comprend les principes d'auto-organisation.",
      "Planifier plusieurs activités de team-building.",
      "Fournir des mises à jour quotidiennes sur le projet.",
      "Apprendre à connaître chaque membre individuellement."
    ],
    solution: "S'assurer que l'équipe comprend les principes d'auto-organisation.",
    explication: "L'équipe doit être capable de s'auto-organiser pendant l'absence du chef de projet pour atteindre les objectifs."
  },
  {
    id: 16,
    question: "Un projet avec un haut niveau d'incertitude et des exigences non totalement définies. Quelle méthodologie utiliser ?",
    options: [
      "Agile",
      "Hybride",
      "Prédictive",
      "Waterfall"
    ],
    solution: "Agile",
    explication: "Les projets avec forte incertitude et exigences floues bénéficient de cycles adaptatifs et itératifs, donc Agile est approprié."
  },
  {
    id: 17,
    question: "Le Product Owner décide de lancer un produit après quelques releases, sachant que le MVP manque de fonctionnalités. Le VP marketing est mécontent. Que doit faire le chef de projet ?",
    options: [
      "Former l'équipe sur la prise de décision avec stratégie de prudence.",
      "Soutenir la décision du Product Owner et chercher un meilleur alignement avec le VP.",
      "Assumer la responsabilité des releases et décider du lancement.",
      "Escalader le problème au sponsor en remettant en question l'autorité du VP."
    ],
    solution: "Soutenir la décision du Product Owner et chercher un meilleur alignement avec le VP.",
    explication: "Le Product Owner a la responsabilité des releases. Le chef de projet doit faciliter l'alignement et la communication pour éviter les conflits futurs."
  },
  {
    id: 18,
    question: "Une équipe agile est régulièrement en retard aux stand-ups et ne respecte pas les délais. Que doit faire le chef de projet ?",
    options: [
      "Aider l'équipe à construire un accord définissant les normes comportementales.",
      "Réunir l'équipe pour examiner les problèmes et définir des actions.",
      "Prendre un rôle de leadership plus élevé et montrer l'exemple.",
      "Organiser une formation agile et gestion du temps."
    ],
    solution: "Aider l'équipe à construire un accord définissant les normes comportementales.",
    explication: "L'équipe doit s'auto-organiser et être responsable de ses propres règles comportementales. Les autres options impliquent plus le chef de projet."
  },
  {
    id: 19,
    question: "Un membre de l'équipe propose de modifier une fonctionnalité pour sa popularité. Un autre s'inquiète de l'expérience utilisateur. Comment le chef de projet corrige-t-il cela ?",
    options: [
      "Présenter l'option au Product Owner pour placer la demande dans le backlog en donnant des suggestions.",
      "Utiliser un vote pour décider de la version à appliquer.",
      "Mettre le problème dans le backlog du sprint et laisser l'équipe décider plus tard.",
      "Organiser une réunion avec tous les stakeholders pour une décision finale."
    ],
    solution: "Présenter l'option au Product Owner pour placer la demande dans le backlog en donnant des suggestions.",
    explication: "Le Product Owner est responsable du backlog et décide si la fonctionnalité apporte de la valeur. Le chef de projet facilite uniquement la suggestion."
  },
  {
    id: 20,
    question: "Une organisation agile a une équipe non co-localisée et un management avec règles strictes. Que doit faire le chef de projet agile ?",
    options: [
      "Organiser un kick-off en présentiel pour améliorer les relations.",
      "Discuter avec la direction pour aligner les objectifs individuels avec ceux du projet.",
      "Programmer un intervenant pour inspirer une vision collective.",
      "Favoriser l'engagement et la planification de l'équipe."
    ],
    solution: "Favoriser l'engagement et la planification de l'équipe.",
    explication: "L'engagement et la planification participative permettent d'aligner l'équipe sur les résultats souhaités. Les autres options dépendent d'éléments externes et limitent l'implication de l'équipe."
  },
  {
    id: 21,
    question: "Un chef de projet apprend que quelques parties prenantes ont un désaccord concernant les résultats d'un livrable du projet. Quelle est la prochaine étape que le chef de projet doit entreprendre ?",
    options: [
      "Examiner et analyser le document des exigences du projet.",
      "Examiner la version approuvée de la déclaration de périmètre.",
      "Organiser une réunion avec les parties prenantes.",
      "Mettre à jour les risques documentés du projet et leurs réponses."
    ],
    solution: "Organiser une réunion avec les parties prenantes.",
    explication: "La meilleure étape pour le chef de projet est d'organiser une réunion avec les parties prenantes. Cela permet de discuter des divergences et de tenter de trouver un accord. Les autres options peuvent être réalisées après la réunion, mais il est crucial de comprendre rapidement les différences et de créer de l'harmonie."
  },
  {
    id: 22,
    question: "Une entreprise de produits transforme sa manière de développer et de lancer des produits sur le marché. Les dirigeants considèrent que c'est une initiative à haut risque qui doit réussir. Que devrait faire le chef de projet ?",
    options: [
      "Développer un plan de gestion de la communication pour informer les employés du nouveau modèle.",
      "Élaborer un plan de sprint détaillé avec des livrables clairs.",
      "Adopter une approche itérative permettant de livrer la plus grande valeur commerciale en premier.",
      "Développer un business case avec des hypothèses pour le nouveau modèle."
    ],
    solution: "Adopter une approche itérative permettant de livrer la plus grande valeur commerciale en premier.",
    explication: "L'approche itérative est essentielle pour réaliser la valeur maximale dès le début. Les autres options ne sont pertinentes qu'après avoir défini cette approche de déploiement."
  },
  {
    id: 23,
    question: "Un chef de projet agile dirige un projet de développement logiciel en phase de tests d'acceptation utilisateur. La majorité des parties prenantes sont satisfaites, mais le directeur informatique ne l'est pas. Que doit faire le chef de projet en premier ?",
    options: [
      "Examiner la participation du directeur informatique lors des réunions précédentes.",
      "Analyser les exigences approuvées avec le directeur informatique.",
      "Discuter des préoccupations du directeur informatique avec l'équipe projet.",
      "Recueillir directement les commentaires du directeur informatique."
    ],
    solution: "Recueillir directement les commentaires du directeur informatique.",
    explication: "La meilleure façon de résoudre l'insatisfaction est de comprendre directement les préoccupations du directeur informatique afin de développer un plan approprié. Les autres options sont moins efficaces pour identifier la cause principale."
  },
  {
    id: 24,
    question: "Un product owner présente le backlog à l'équipe, et l'équipe exprime des préoccupations pour certaines fonctionnalités à cause d'impédiments. Que doit suggérer le chef de projet au product owner ?",
    options: [
      "Estimer l'impact financier des impédiments et demander un financement supplémentaire.",
      "Capturer les impédiments et informer la direction que leur aide est nécessaire.",
      "S'assurer que les impédiments sont capturés et priorisés selon les fonctionnalités les plus importantes.",
      "Commencer à éliminer les impédiments les plus faciles pour encourager l'accomplissement de l'équipe."
    ],
    solution: "S'assurer que les impédiments sont capturés et priorisés selon les fonctionnalités les plus importantes.",
    explication: "Les impédiments doivent être enregistrés dans le backlog et priorisés en fonction de la valeur des fonctionnalités afin de garantir qu'ils soient levés avant le travail correspondant."
  },
  {
    id: 25,
    question: "Pendant l'exécution d'un projet, l'équipe financière constate qu'elle n'a pas participé à l'élaboration du business case et n'approuvera pas le ROI estimé. Que doit faire le chef de projet ?",
    options: [
      "Continuer le développement selon le plan de projet et traiter le problème après la livraison.",
      "Revoir le plan de gestion du périmètre et noter ceci comme un risque.",
      "Planifier une réunion avec le product owner et l'équipe financière pour convenir des corrections à apporter.",
      "Revoir le plan de communication et effectuer les ajustements nécessaires."
    ],
    solution: "Planifier une réunion avec le product owner et l'équipe financière pour convenir des corrections à apporter.",
    explication: "Le chef de projet doit identifier le problème et planifier une correction avec les parties prenantes critiques. Reporter ou considérer ceci comme un risque n'est pas approprié."
  },
  {
    id: 26,
    question: "Une nouvelle équipe agile dispose de peu de temps pour livrer un produit. Comment le chef de projet doit-il renforcer la collaboration pour maintenir la solidarité de l'équipe ?",
    options: [
      "Mettre en place des protocoles pour gérer les sprints lors d'une réunion d'équipe.",
      "Faciliter des réunions individuelles avec chaque membre pour comprendre les objectifs du projet.",
      "Communiquer l'avancement du produit avec des burndown charts.",
      "Analyser la carte du projet pour la livraison du produit avec les membres."
    ],
    solution: "Faciliter des réunions individuelles avec chaque membre pour comprendre les objectifs du projet.",
    explication: "La collaboration rapide est essentielle. Comprendre les objectifs avec chaque membre favorise l'intégration et la solidarité de l'équipe dans un délai limité."
  },
  {
    id: 27,
    question: "Une équipe démarre un projet avec un client difficile, incapable de décrire précisément ce qu'il souhaite. Quelle approche le chef de projet doit-il adopter pour lever cet obstacle ?",
    options: [
      "Élaborer et suivre un plan avec des dates limites pour réduire le temps de réalisation.",
      "Travailler avec le product owner pour définir le Minimum Viable Product (MVP).",
      "Suivre une approche prédictive pour obtenir l'acceptation formelle de chaque livrable.",
      "Renforcer les compétences en négociation et soft skills de l'équipe via la formation."
    ],
    solution: "Travailler avec le product owner pour définir le Minimum Viable Product (MVP).",
    explication: "Définir un MVP permet de tester rapidement ce que le client souhaite. Sans MVP, les autres options ne permettent pas d'avancer efficacement."
  },
  {
    id: 28,
    question: "Un chef de projet est transféré dans une nouvelle division et prend en charge un projet existant dans un domaine inconnu. Quel outil principal doit-il utiliser pour comprendre les risques de ce projet agile ?",
    options: [
      "Interview avec le sponsor du projet.",
      "Discussions collaboratives.",
      "Évaluations de probabilité.",
      "Ateliers pour éviter les risques."
    ],
    solution: "Discussions collaboratives.",
    explication: "Pour un domaine inconnu, il est crucial de favoriser des discussions collaboratives pour partager connaissances et expertise, permettant ainsi de mieux comprendre les risques."
  },
  {
    id: 29,
    question: "La date de livraison des livrables d'un projet approche, mais la performance d'un membre de l'équipe impacte le planning. Que doit faire le chef de projet ?",
    options: [
      "Acquérir une ressource plus qualifiée.",
      "Retirer le membre de l'équipe du projet.",
      "Mentorer le membre de l'équipe.",
      "Demander au manager du membre de fournir une formation."
    ],
    solution: "Mentorer le membre de l'équipe.",
    explication: "Le coaching et le mentorat sont efficaces pour développer le membre afin qu'il contribue mieux. Les autres options n'adressent pas la cause sous-jacente du problème."
  },
  {
    id: 30,
    question: "Lors d'un projet agile, des problèmes liés au budget et à la gestion du temps sont apparus. L'équipe QA distante a fourni une longue liste de défauts après quelques sprints, mais le chef de projet estime que le problème vient d'une mauvaise interprétation linguistique. Que doit faire le chef de projet ?",
    options: [
      "Préparer et animer des sessions avec toute l'équipe pour revoir les tâches et leurs descriptions.",
      "Créer une réunion avec l'équipe QA pour exprimer les préoccupations sur leur retour.",
      "Demander une augmentation financière au CCB pour employer une équipe QA locale.",
      "Combiner l'équipe QA et l'équipe développement pour tester à la fin du projet."
    ],
    solution: "Préparer et animer des sessions avec toute l'équipe pour revoir les tâches et leurs descriptions.",
    explication: "Le chef de projet doit s'assurer que l'équipe comprend les tâches et leurs exigences afin d'éviter les malentendus. Les autres options ne ciblent pas la cause réelle."
  }
];
