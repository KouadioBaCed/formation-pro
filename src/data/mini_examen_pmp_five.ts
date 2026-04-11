export interface Question {
  id: number;
  question: string;
  options: string[];
  solution: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "À mi-parcours d'un projet, le chef de projet identifie de nouveaux parties prenantes. Chacune de ces nouvelles parties prenantes joue un rôle différent dans le projet. Que doit faire le chef de projet en premier ?",
    options: [
      "Rencontrer le sponsor du projet pour savoir si de nouveaux rôles ont été créés.",
      "Examiner le registre des parties prenantes.",
      "Soumettre une demande de changement au comité de contrôle des changements (CCB).",
      "Mettre à jour le plan de gestion des parties prenantes."
    ],
    solution: "Mettre à jour le plan de gestion des parties prenantes.",
    explanation: "L'identification, la priorisation et l'engagement des parties prenantes doivent être examinés et mis à jour régulièrement. Ajouter de nouveaux noms ne suffit pas ; le plan de gestion doit être mis à jour pour refléter les changements."
  },
  {
    id: 2,
    question: "Pendant la phase d'exécution d'un projet, deux parties prenantes se plaignent de ne pas recevoir suffisamment d'informations sur l'état du projet. Ces parties prenantes assistent aux réunions de suivi et reçoivent les rapports d'avancement. Pourquoi le chef de projet devrait-il les rencontrer ?",
    options: [
      "Recueillir des données sur le problème pour mettre à jour le registre des problèmes.",
      "Déterminer quelles informations leur manquent et comprendre leurs besoins en communication.",
      "Envoyer aux parties prenantes des copies des emails précédemment envoyés pour prouver qu'elles sont incluses dans le plan de communication.",
      "Développer une meilleure relation de travail pour hiérarchiser et classer leurs exigences."
    ],
    solution: "Déterminer quelles informations leur manquent et comprendre leurs besoins en communication.",
    explanation: "Les parties prenantes sont déjà incluses dans les réunions et rapports. Le chef de projet doit les rencontrer individuellement pour comprendre leurs besoins spécifiques en communication."
  },
  {
    id: 3,
    question: "Un chef de projet doit engager des fournisseurs pour un projet international dont la durée de performance s'étend sur plusieurs années. Il doit tenir compte de conditions telles que les variations des taux d'inflation. Quel type de contrat devrait-il utiliser ?",
    options: [
      "Temps et matériaux (T&M)",
      "Coût plus honoraires fixes (CPFF)",
      "Coût plus incitation (FPIF)",
      "Prix fixe avec ajustement économique (FPEPA)"
    ],
    solution: "Prix fixe avec ajustement économique (FPEPA)",
    explanation: "Le contrat FP-EPA est utilisé lorsque la période de performance du vendeur s'étend sur plusieurs années ou si les paiements sont dans une devise différente. Il permet des ajustements prédéfinis du prix du contrat en cas de changement des conditions économiques comme l'inflation."
  },
  {
    id: 4,
    question: "Quelques jours avant le sixième et dernier sprint d'un projet de développement logiciel, le chef de projet présente les livrables aux parties prenantes. Une partie prenante récemment ajoutée déclare que le livrable ne répondra pas aux attentes du marché. Que doit faire le chef de projet ?",
    options: [
      "Rencontrer le sponsor et la nouvelle partie prenante pour résoudre le problème.",
      "Rencontrer la nouvelle partie prenante pour examiner le périmètre et le plan du projet.",
      "Conduire une réunion de priorisation des tâches avec la partie prenante et l'équipe de développement.",
      "Appliquer le plan de gestion des changements pour réviser le périmètre afin de satisfaire les attentes."
    ],
    solution: "Rencontrer la nouvelle partie prenante pour examiner le périmètre et le plan du projet.",
    explanation: "Le chef de projet doit d'abord comprendre la raison du commentaire de la partie prenante avant de décider des actions à entreprendre."
  },
  {
    id: 5,
    question: "Les membres de l'équipe sont frustrés car leur manager fonctionnel n'écoute pas leurs opinions. Ils semblent réticents à s'investir dans le reste du projet. Que doit faire le chef de projet ?",
    options: [
      "Montrer son soutien à l'équipe en discutant de leurs objectifs et convictions.",
      "Diviser le reste du travail en tâches plus petites et les répartir.",
      "Demander à l'équipe de prioriser les tâches restantes.",
      "Discuter des préoccupations de l'équipe avec le manager fonctionnel."
    ],
    solution: "Montrer son soutien à l'équipe en discutant de leurs objectifs et convictions.",
    explanation: "Le rôle principal du chef de projet est de s'assurer que l'équipe a le temps et les ressources pour travailler efficacement et de lever les obstacles. Défendre les convictions de l'équipe montre le soutien et aide à maintenir la motivation."
  },
  {
    id: 6,
    question: "Un chef de projet est affecté à un nouveau projet. Le client mentionne que le projet repose sur des idées et hypothèses de ses partenaires commerciaux. Que doit faire le chef de projet pour comprendre clairement les objectifs du projet ?",
    options: [
      "Conduire des interviews approfondies avec les partenaires pour découvrir leurs attentes.",
      "Rencontrer toutes les parties prenantes, y compris les partenaires, pour définir les objectifs.",
      "Lancer le projet et élaborer un plan basé sur les informations et hypothèses disponibles.",
      "Rencontrer le client pour clarifier les idées et la vision initiale."
    ],
    solution: "Rencontrer toutes les parties prenantes, y compris les partenaires, pour définir les objectifs.",
    explanation: "Impliquer toutes les parties prenantes permet de recueillir une vision complète et de définir collectivement les objectifs du projet, assurant une compréhension partagée."
  },
  {
    id: 7,
    question: "Lors de la planification d'une release, certains membres de l'équipe se disputent sur les tâches à effectuer en priorité, ce qui cause de la frustration. Quelle méthode de résolution de conflit le chef de projet doit-il appliquer ?",
    options: [
      "Compromis / Réconciliation",
      "Force / Direct",
      "Retrait / Évitement",
      "Adoucissement / Accommodation"
    ],
    solution: "Compromis / Réconciliation",
    explanation: "La méthode de compromis consiste à travailler avec l'équipe pour trouver une solution qui satisfait toutes les parties. Les autres méthodes sont moins efficaces dans ce scénario."
  },
  {
    id: 8,
    question: "Une organisation relance un produit clé. Les parties prenantes sont tous des dirigeants et veulent assurer le succès du lancement. Que doit faire le chef de projet ?",
    options: [
      "Mettre en œuvre un plan de communication détaillé.",
      "Communiquer l'importance du projet à l'équipe et escalader les problèmes.",
      "S'assurer que toutes les parties prenantes assistent aux standups quotidiens.",
      "Identifier et aligner les indicateurs de performance avec le livrable."
    ],
    solution: "Identifier et aligner les indicateurs de performance avec le livrable.",
    explanation: "Pour mesurer le succès du projet, il est crucial de définir les indicateurs de performance à l'avance et de les aligner sur le livrable."
  },
  {
    id: 9,
    question: "Pendant l'exécution, l'équipe doit modifier un composant provenant d'un fournisseur externe. Que doit faire le chef de projet ?",
    options: [
      "Rencontrer le fournisseur pour discuter de la garantie.",
      "Examiner les termes du contrat et le plan de gestion des approvisionnements.",
      "Lister les risques potentiels du changement.",
      "Soumettre une demande de changement."
    ],
    solution: "Examiner les termes du contrat et le plan de gestion des approvisionnements.",
    explanation: "Le contrat et le plan d'approvisionnement déterminent comment gérer les changements. Il faut les examiner avant toute autre action."
  },
  {
    id: 10,
    question: "Un chef de projet est affecté à un projet multinational pour la première fois avec des membres venant de différents pays. Que doit-il faire pour se préparer ?",
    options: [
      "Suivre une formation sur la sensibilité culturelle.",
      "Améliorer ses compétences linguistiques.",
      "Faire des exercices de team-building.",
      "Apprendre les coutumes locales."
    ],
    solution: "Suivre une formation sur la sensibilité culturelle.",
    explanation: "Comprendre les différences culturelles est crucial pour communiquer et collaborer efficacement avec une équipe multiculturelle."
  },
  {
    id: 11,
    question: "Le chef de projet doit intégrer de nouvelles ressources dans une équipe existante. Que doit-il faire pour s'assurer que l'équipe travaille efficacement et respecte les délais ?",
    options: [
      "Créer des services de bibliothèque accessibles.",
      "Organiser une session de brainstorming.",
      "Intégrer des activités de développement des compétences.",
      "Surveiller la cohésion de l'équipe."
    ],
    solution: "Intégrer des activités de développement des compétences.",
    explanation: "L'intégration de nouvelles ressources nécessite des activités pour développer les compétences afin que tous puissent accomplir leurs tâches efficacement."
  },
  {
    id: 12,
    question: "Une société de conseil lance un projet pour élargir son offre de services. Elle souhaite évaluer et classer des critères comme l'incertitude et la valorisation. Quelle technique le chef de projet doit-il utiliser ?",
    options: [
      "Diagramme causes-effets",
      "Prévisions",
      "Analyse multicritères",
      "Matrice d'évaluation des risques"
    ],
    solution: "Analyse multicritères",
    explanation: "L'analyse multicritères permet d'évaluer et de prioriser plusieurs critères pouvant avoir un impact positif ou négatif sur les décisions."
  },
  {
    id: 13,
    question: "La SOW d'un projet exige une livraison en neuf mois, mais le chef de projet estime le délai irréaliste. Que doit-il faire ?",
    options: [
      "Impliquer le CCB dans le processus de contrôle intégré des changements",
      "Demander au sponsor des ressources et budget supplémentaires",
      "Rencontrer les experts et le sponsor pour fixer les attentes",
      "Négocier un nouveau calendrier avec le sponsor"
    ],
    solution: "Rencontrer les experts et le sponsor pour fixer les attentes",
    explanation: "Le chef de projet doit fournir des preuves et fixer des attentes réalistes avec le sponsor en utilisant les informations des experts."
  },
  {
    id: 14,
    question: "À quel stade du modèle de Tuckman les membres de l'équipe commencent-ils à résoudre les conflits efficacement ?",
    options: [
      "Formation (Forming)",
      "Tempête (Storming)",
      "Normalisation (Norming)",
      "Performance (Performing)"
    ],
    solution: "Normalisation (Norming)",
    explanation: "Après la phase de conflit, l'équipe apprend à travailler efficacement ensemble, y compris à résoudre les conflits lors de la phase de normalisation."
  },
  {
    id: 15,
    question: "Lors de l'initiation d'un projet, le chef de projet apprend qu'une partie prenante clé sera absente un mois pour un autre projet stratégique. Que doit-il faire en premier ?",
    options: [
      "Mettre à jour le registre des problèmes et notifier les autres parties prenantes.",
      "Demander au manager fonctionnel de fournir un remplaçant.",
      "Interroger la partie prenante pour recueillir les informations nécessaires.",
      "Mettre à jour le plan de gestion des risques pour inclure l'impact de l'absence."
    ],
    solution: "Mettre à jour le registre des problèmes et notifier les autres parties prenantes.",
    explanation: "La première étape est de capturer cette situation comme problème et d'informer les parties prenantes concernées."
  },
  {
    id: 16,
    question: "Une organisation modernise ses systèmes informatiques et machines. Les systèmes existants doivent rester opérationnels pendant les mises à niveau. Comment le chef de projet doit-il procéder pour garantir le respect des délais ?",
    options: [
      "Planifier des sessions hebdomadaires avec l'équipe et les parties prenantes clés.",
      "Envoyer un e-mail hebdomadaire au projet.",
      "Rencontrer individuellement les parties prenantes chaque semaine.",
      "Conduire des téléconférences quotidiennes avec le sponsor."
    ],
    solution: "Planifier des sessions hebdomadaires avec l'équipe et les parties prenantes clés.",
    explanation: "La communication étant critique, les réunions co-localisées hebdomadaires permettent d'assurer collaboration, suivi et prise de décision efficace."
  },
  {
    id: 17,
    question: "Un nouveau projet finance des produits et services dans plusieurs pays. Le chef de projet s'inquiète que certains produits n'offrent pas assez de protection aux consommateurs. Que doit-il faire en premier ?",
    options: [
      "Identifier tous les risques du projet.",
      "Quantifier les risques dans le registre.",
      "Développer une stratégie de réponse aux risques.",
      "Effectuer des audits de risques planifiés."
    ],
    solution: "Identifier tous les risques du projet.",
    explanation: "La première étape est l'identification des risques potentiels afin de pouvoir les gérer ensuite. Cela inclut les risques liés aux réglementations locales."
  },
  {
    id: 18,
    question: "Le chef de projet et l'équipe ont identifié des risques et préparé un plan de réponse. Cependant, des retards surviennent dans la mise en œuvre des réponses. Comment l'attribution de propriétaires de risques peut-elle aider ?",
    options: [
      "Les propriétaires travaillent avec le sponsor pour garantir l'efficacité du plan.",
      "Ils identifient les contraintes et hypothèses avant les événements.",
      "Ils sont responsables de la mise en œuvre des stratégies de réponse.",
      "Le rapport de risques attribue la gestion des retards au propriétaire approprié."
    ],
    solution: "Ils sont responsables de la mise en œuvre des stratégies de réponse.",
    explanation: "Attribuer un propriétaire de risque assure que chaque risque est traité en temps voulu, évitant les retards."
  },
  {
    id: 19,
    question: "En examinant le calendrier approuvé, le chef de projet constate que les jalons sont irréalistes à cause des délais d'approvisionnement plus longs que prévu. Que doit-il faire en premier ?",
    options: [
      "Modifier la WBS",
      "Mettre à jour le registre des hypothèses",
      "Modifier le plan de gestion des approvisionnements",
      "Soumettre une demande de changement"
    ],
    solution: "Soumettre une demande de changement",
    explanation: "Tout changement de ligne de base doit passer par le processus de contrôle intégré des changements. Les délais d'approvisionnement nécessitent donc une demande de changement avant toute modification."
  },
  {
    id: 20,
    question: "Lors de l'initiation d'un projet, le chef de projet apprend qu'une partie prenante clé sera absente un mois pour un autre projet stratégique. Que doit-il faire en premier ?",
    options: [
      "Mettre à jour le registre des problèmes et notifier les autres parties prenantes.",
      "Demander au manager fonctionnel de fournir un remplaçant.",
      "Interroger la partie prenante pour recueillir les informations nécessaires.",
      "Mettre à jour le plan de gestion des risques pour inclure l'impact de l'absence."
    ],
    solution: "Mettre à jour le registre des problèmes et notifier les autres parties prenantes.",
    explanation: "La première étape est de capturer cette situation comme problème et d'informer les parties prenantes concernées."
  },
  {
    id: 21,
    question: "Un projet de fabrication complexe a plusieurs parties prenantes à différents endroits. Le projet entre dans une phase très active et le chef de projet doit s'assurer que toutes les parties prenantes sont informées en temps voulu. Que doit faire le chef de projet en premier ?",
    options: [
      { label: "A", text: "Planifier des sessions de formation sur la communication efficace avec toutes les parties prenantes." },
      { label: "B", text: "Déterminer la technologie la plus appropriée pour communiquer avec toutes les parties prenantes." },
      { label: "C", text: "Planifier l'envoi de rapports d'état réguliers à toutes les parties prenantes." },
      { label: "D", text: "Réviser le plan de gestion des communications pour augmenter la fréquence des mises à jour." }
    ],
    solution: "D",
    explanation: "Le chef de projet doit d'abord réviser le plan de gestion des communications pour augmenter la fréquence des mises à jour, car le projet entre dans une phase à forte activité et les parties prenantes ont besoin d'informations en temps utile pour prendre des décisions éclairées."
  },
  {
    id: 22,
    question: "Une partie prenante demande des rapports d'état plus fréquents et détaillés que prévu initialement et souhaite s'impliquer davantage dans le projet. Comment le chef de projet doit-il gérer cette situation ?",
    options: [
      { label: "A", text: "Fournir à la partie prenante une mise à jour immédiate et envoyer des rapports détaillés dès que possible." },
      { label: "B", text: "Réviser la matrice d'évaluation de l'engagement des parties prenantes pour montrer un niveau d'engagement soutenant." },
      { label: "C", text: "Mettre à jour le plan de communication des parties prenantes et s'assurer que l'équipe est alignée sur les nouvelles exigences de reporting." },
      { label: "D", text: "Développer un cube des parties prenantes définissant la relation entre la partie prenante et le projet." }
    ],
    solution: "C",
    explanation: "Mettre à jour le plan de communication et aligner l'équipe sur les nouvelles exigences garantit que la partie prenante reçoit le niveau de détail et la fréquence souhaités, tout en permettant à l'équipe de répondre efficacement."
  },
  {
    id: 23,
    question: "Lors de la revue de la qualité des livrables avec l'équipe, le chef de projet constate que plusieurs problèmes de qualité auraient pu être évités en utilisant une checklist. Il met en place une checklist pour les livrables futurs. Que vient-il de faire ?",
    options: [
      { label: "A", text: "Définir de nouvelles métriques de qualité." },
      { label: "B", text: "Utiliser une action corrective." },
      { label: "C", text: "Faciliter une rétrospective." },
      { label: "D", text: "Organiser une réunion de leçons apprises." }
    ],
    solution: "B",
    explanation: "L'action corrective est une activité intentionnelle qui réaligne la performance du travail du projet avec le plan de gestion du projet. Les autres options ne traitent pas directement la correction des écarts de qualité."
  },
  {
    id: 24,
    question: "Lors d'une réunion de suivi, le chef de projet découvre que les attentes des parties prenantes ne sont pas alignées, ce qui crée des tensions. Que doit-il faire pour avancer dans le projet ?",
    options: [
      { label: "A", text: "Mettre à jour le registre des risques pour refléter cette différence comme un risque élevé." },
      { label: "B", text: "Demander aux parties prenantes d'envoyer leurs attentes par email pour les inclure dans le plan." },
      { label: "C", text: "Rencontrer les parties prenantes individuellement et mettre à jour la matrice des responsabilités." },
      { label: "D", text: "Montrer aux parties prenantes que le statut actuel est aligné avec la structure de découpage du projet (WBS)." }
    ],
    solution: "C",
    explanation: "Le chef de projet doit d'abord rencontrer les parties prenantes individuellement pour comprendre leurs attentes et mettre à jour la matrice des responsabilités, clarifiant ainsi les rôles et évitant les malentendus futurs."
  },
  {
    id: 25,
    question: "Un projet complexe est en phase de planification. Le sponsor assigne un chef de projet récemment certifié. Après examen de la charte, plusieurs facteurs imprévisibles pouvant impacter le projet sont identifiés. Que doit faire le chef de projet ?",
    options: [
      { label: "A", text: "Mettre à jour le plan de projet avec des détails sur le planning et les prévisions budgétaires." },
      { label: "B", text: "Informer le sponsor des impacts possibles de ces facteurs sur le projet." },
      { label: "C", text: "Développer un plan de gestion des risques détaillant les différents facteurs." },
      { label: "D", text: "Étendre le registre des problèmes pour inclure une analyse de scénarios hypothétiques." }
    ],
    solution: "C",
    explanation: "Le plan de gestion des risques permet d'identifier et de gérer les événements incertains potentiels du projet. Mettre à jour le plan de projet ou informer le sponsor sans plan de risque structuré ne suffit pas."
  },
  {
    id: 26,
    question: "Le chef de projet identifie un risque pendant la phase de mise en œuvre qui n'était pas prévu lors de la planification. Comment une séance de brainstorming peut-elle aider à atténuer ce risque tout en respectant le planning ?",
    options: [
      { label: "A", text: "Appliquer des techniques d'analyse qualitative des données." },
      { label: "B", text: "Identifier rapidement de multiples idées avec l'équipe projet." },
      { label: "C", text: "Obtenir de nouvelles hypothèses concernant la tolérance au risque avec les parties prenantes." },
      { label: "D", text: "Trouver des moyens d'ajouter du financement pour compenser le risque et accélérer le planning." }
    ],
    solution: "B",
    explanation: "Le brainstorming avec l'équipe projet permet de générer de nombreuses idées rapidement, ce qui est le moyen le plus efficace pour trouver des solutions au risque identifié."
  },
  {
    id: 27,
    question: "Le projet entre dans la phase de tests d'acceptation utilisateur. Des utilisateurs finaux soulèvent des questions sur des exigences critiques omises lors de l'analyse des besoins. Que doit faire le chef de projet ?",
    options: [
      { label: "A", text: "Interroger l'équipe qui a effectué l'analyse pour comprendre pourquoi ces besoins ont été omis." },
      { label: "B", text: "Modifier le plan de gestion des exigences et informer les parties prenantes que le planning peut être impacté." },
      { label: "C", text: "Planifier une réunion avec le sponsor pour rapporter les préoccupations des utilisateurs." },
      { label: "D", text: "Rencontrer le comité de contrôle des changements (CCB) pour examiner les demandes de changement." }
    ],
    solution: "D",
    explanation: "Si des exigences critiques ont été omises, une demande de changement doit être soumise au CCB pour commencer le processus d'évaluation et d'approbation avant toute modification."
  },
  {
    id: 28,
    question: "Un nouveau projet doit démarrer avec des contraintes strictes de temps et de budget. L'analyse des leçons apprises montre que le 'scope creep' a fait échouer un projet similaire. Que doit faire le chef de projet ?",
    options: [
      { label: "A", text: "Refuser les demandes de changement hors périmètre qui augmenteraient le temps et le budget." },
      { label: "B", text: "Gérer les attentes des parties prenantes pour exclure tout changement." },
      { label: "C", text: "Ajuster le périmètre et le planning pour rester dans les contraintes." },
      { label: "D", text: "Établir un processus formel d'approbation des changements pour prioriser les fonctionnalités essentielles." }
    ],
    solution: "D",
    explanation: "Mettre en place un processus formel de gestion des changements permet de maintenir la base du périmètre, de gérer les impacts sur le budget et le planning, et de minimiser les risques de 'scope creep'."
  },
  {
    id: 29,
    question: "Un responsable fonctionnel souhaite utiliser des ressources déjà affectées à un projet. Que doit faire le chef de projet ?",
    options: [
      { label: "A", text: "Escalader le problème au sponsor du projet." },
      { label: "B", text: "Demander au responsable fonctionnel de retarder son projet." },
      { label: "C", text: "Accepter le retard du projet dû à la réaffectation des ressources." },
      { label: "D", text: "Négocier les besoins en ressources avec le responsable fonctionnel." }
    ],
    solution: "D",
    explanation: "Les ressources sont sous la responsabilité des managers fonctionnels. Le chef de projet doit négocier avec eux pour satisfaire les besoins du projet tout en évitant un retard inutile."
  },
  {
    id: 30,
    question: "Une équipe projet est composée d'individus aux origines, âges et centres d'intérêt différents et a des difficultés à collaborer. Comment une réunion pour développer des valeurs mutuelles et une vision partagée peut-elle aider le chef de projet ?",
    options: [
      { label: "A", text: "Une réunion officielle sur l'importance du travail en équipe motivera l'équipe et améliorera la performance." },
      { label: "B", text: "Comprendre les priorités des membres permettra de créer un langage commun favorisant la coopération." },
      { label: "C", text: "Comprendre le point de vue de chaque membre identifiera les besoins en formation." },
      { label: "D", text: "En développant sa propre compréhension des objectifs, l'équipe gagnera en confiance." }
    ],
    solution: "B",
    explanation: "Comprendre les priorités de chaque membre crée un langage commun et une vision partagée, ce qui améliore la coopération et la performance de l'équipe."
  }
];
