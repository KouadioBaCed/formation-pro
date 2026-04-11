// src/data/pmp_domaine_six.ts - Valeur et Performance
export type Question = {
  id: number;
  question: string;
  options: string[];
  correct: string;
  rationale: string;
};

export const valuePerformanceQuizData: Question[] = [
  {
    id: 1,
    question: "La valeur acquise d'un projet de développement est de 640 000 USD, et la valeur planifiée est de 800 000 USD. Que devrait faire le chef de projet pour contrôler cet écart ?",
    options: [
      "Calculer la valeur acquise et modifier la base du projet pour refléter le dernier état.",
      "Réallouer 160 000 USD aux tâches en retard.",
      "Utiliser les mesures de performance du projet et décider des actions correctives.",
      "Libérer 160 000 USD au fournisseur pour accélérer le projet et le terminer à temps et dans le budget."
    ],
    correct: "Utiliser les mesures de performance du projet et décider des actions correctives.",
    rationale: "La valeur acquise étant inférieure à la valeur planifiée, le chef de projet doit décider des actions correctives pour remettre le projet sur la bonne voie."
  },
  {
    id: 2,
    question: "À mi-parcours d'un projet de trois ans, le comité de l'entreprise devient incertain sur le fait que le projet livrera la valeur attendue. Quelle action proactive devrait entreprendre le chef de projet ?",
    options: [
      "Prolonger le calendrier du projet pour permettre plus de tests.",
      "Développer un prototype à présenter au comité.",
      "Augmenter le budget du projet pour accommoder les changements potentiels.",
      "Mettre à jour le planning avec des jalons détaillés."
    ],
    correct: "Développer un prototype à présenter au comité.",
    rationale: "Un prototype permet de démontrer concrètement la valeur attendue du projet et de recueillir un retour précoce du comité."
  },
  {
    id: 3,
    question: "Lors d'une réunion, il a été constaté que certains membres de l'équipe ne connaissent pas la vision et la valeur business du projet. Que doit faire le chef de projet ?",
    options: [
      "Planifier des réunions régulières entre l'équipe et la direction.",
      "Demander aux membres de l'équipe de se référer aux documents stratégiques de l'entreprise.",
      "Tenir l'équipe responsable car elle a eu le temps de s'informer.",
      "Engager régulièrement l'équipe sur le business case et clarifier tous les doutes."
    ],
    correct: "Engager régulièrement l'équipe sur le business case et clarifier tous les doutes.",
    rationale: "Le chef de projet doit s'assurer que chaque membre comprend clairement la valeur business et la vision du projet."
  },
  {
    id: 4,
    question: "Un chef de projet agile constate que les projets précédents ont souffert de l'absence d'objectifs clairs et de définition de 'done'. Que doit-il faire pour éviter ces problèmes ?",
    options: [
      "Planifier des réunions pour inclure chaque tâche dans le plan de projet.",
      "Convaincre le sponsor d'inclure des experts qualité pour tester le produit.",
      "Convaincre le product owner de définir les objectifs du projet.",
      "Organiser des réunions avec les parties prenantes pour créer la charte agile et clarifier les attentes."
    ],
    correct: "Organiser des réunions avec les parties prenantes pour créer la charte agile et clarifier les attentes.",
    rationale: "La charte agile permet de clarifier les objectifs et les attentes du projet pour éviter les problèmes rencontrés par les collègues."
  },
  {
    id: 5,
    question: "Une entreprise engage un prestataire pour implémenter un logiciel. Quels sont les livrables clés du projet ?",
    options: [
      "Business case",
      "Contrats",
      "Déclaration de portée du projet",
      "Planning du projet"
    ],
    correct: "Déclaration de portée du projet",
    rationale: "La déclaration de portée décrit les objectifs, livrables et critères d'acceptation du projet, essentiels pour comprendre ce que le projet doit accomplir."
  },
  {
    id: 6,
    question: "Après avoir complété la charte du projet, que doit faire le chef de projet avant de commencer la planification ?",
    options: [
      "Tenir la réunion de lancement du projet (kick-off).",
      "Développer le registre des risques.",
      "Créer la structure de découpage du projet (WBS).",
      "Obtenir l'approbation de la charte du projet."
    ],
    correct: "Obtenir l'approbation de la charte du projet.",
    rationale: "La charte doit être approuvée avant toute autre action, car tout changement affecterait la planification et la WBS."
  },
  {
    id: 7,
    question: "Un chef de projet développe un plan de gestion des ressources mais ne connaît pas les compétences nécessaires. Comment les experts (SME) peuvent l'aider ?",
    options: [
      "En montrant comment déterminer les actifs de processus organisationnels.",
      "En aidant à comprendre les relations d'autorité dans l'organigramme.",
      "En permettant de déterminer les compétences requises pour atteindre les objectifs.",
      "En aidant à gérer des équipes virtuelles."
    ],
    correct: "En permettant de déterminer les compétences requises pour atteindre les objectifs.",
    rationale: "Les experts fournissent des informations sur les compétences nécessaires pour atteindre les objectifs du projet et planifier les ressources."
  },
  {
    id: 8,
    question: "Lors d'une livraison incrémentale, un utilisateur demande de retirer un membre de l'équipe. Que doit faire le chef de projet ?",
    options: [
      "Reconnaître le problème et promettre une solution.",
      "Informer que c'est un membre clé et promettre une solution.",
      "Retirer le membre pour ne pas retarder l'acceptation.",
      "Discuter lors de la réunion régulière et prendre des mesures pour résoudre le problème."
    ],
    correct: "Discuter lors de la réunion régulière et prendre des mesures pour résoudre le problème.",
    rationale: "Il est important de discuter avec les parties prenantes pour comprendre et résoudre le problème de manière appropriée."
  },
  {
    id: 9,
    question: "Un membre clé de l'équipe a une faible motivation à cause de l'incertitude des critères d'évaluation. Que devrait faire le chef de projet ?",
    options: [
      "Expliquer les règles de base de l'équipe.",
      "Informer sur les incitations et récompenses.",
      "Partager les retours et résultats de performance.",
      "Définir des stratégies de team building."
    ],
    correct: "Partager les retours et résultats de performance.",
    rationale: "Partager les feedbacks et résultats de performance minimise les mauvaises performances et maximise les performances attendues."
  },
  {
    id: 10,
    question: "Une équipe marketing développe un produit existant. Sur quoi le chef de projet doit-il se concentrer ?",
    options: [
      "Assurer le plan de gestion de portée pour tous les objectifs.",
      "Assurer que l'équipe suit le plan de gestion du changement.",
      "Planifier des mises à jour régulières sur les livrables critiques.",
      "Déterminer et aligner les indicateurs de performance pour évaluer la réussite."
    ],
    correct: "Déterminer et aligner les indicateurs de performance pour évaluer la réussite.",
    rationale: "Les indicateurs de performance permettent de mesurer la réussite et la livraison correcte des objectifs du projet."
  },
  {
    id: 11,
    question: "Dans un projet hybride, quand fournir les feedbacks ?",
    options: [
      "Selon le plan de mesure de performance défini au début.",
      "Le chef de projet communique les feedbacks lors de réunions internes.",
      "À chaque livraison, le chef de projet reçoit et partage le feedback.",
      "Les feedbacks doivent être réguliers et continus."
    ],
    correct: "Les feedbacks doivent être réguliers et continus.",
    rationale: "Dans un projet hybride, les feedbacks réguliers et continus permettent d'améliorer la performance de l'équipe et de réduire les écarts."
  },
  {
    id: 12,
    question: "La performance et le moral de l'équipe diminuent, un membre maintient sa performance. Que doit faire le chef de projet ?",
    options: [
      "Demander à l'équipe d'imiter le membre performant.",
      "Mentorer le membre performant pour qu'il forme les autres.",
      "Recommander de revenir à la gestion traditionnelle.",
      "Noter les problèmes dans le registre des risques."
    ],
    correct: "Mentorer le membre performant pour qu'il forme les autres.",
    rationale: "Encourager le partage des connaissances permet de former l'équipe et de reconnaître les efforts du membre performant."
  },
  {
    id: 13,
    question: "Un stakeholder dit être trop occupé pour assister aux revues fréquentes. Que doit faire le chef de projet ?",
    options: [
      "Expliquer les bénéfices des revues fréquentes pour plus de valeur et moins de retouches.",
      "Négocier une présence réduite et mettre à jour le plan d'engagement.",
      "Expliquer que le plan d'engagement exige leur présence à toutes les revues.",
      "Enregistrer le problème et escalader au sponsor."
    ],
    correct: "Expliquer les bénéfices des revues fréquentes pour plus de valeur et moins de retouches.",
    rationale: "Le chef de projet doit démontrer l'importance des revues fréquentes pour la valeur et la réduction des retouches."
  },
  {
    id: 14,
    question: "Dans une organisation matricielle, l'équipe ne travaille pas bien. Que doit faire le chef de projet ?",
    options: [
      "Organiser une réunion d'équipe pour discuter du problème.",
      "Rencontrer chaque membre individuellement.",
      "Créer un plan de communication.",
      "Réassigner les rôles des membres."
    ],
    correct: "Organiser une réunion d'équipe pour discuter du problème.",
    rationale: "La réunion permet d'identifier la cause et de développer un plan pour améliorer la performance de l'équipe."
  },
  {
    id: 15,
    question: "Un chef de projet doit s'assurer qu'un projet apporte de la valeur à l'organisation. Qui est responsable ?",
    options: [
      "Sponsor du projet",
      "Chef de projet",
      "Architecte de solution",
      "Comité directeur"
    ],
    correct: "Sponsor du projet",
    rationale: "Le sponsor est responsable de l'alignement stratégique et de la livraison de la valeur attendue du projet."
  },
  {
    id: 16,
    question: "Après avoir préparé le plan de gestion du projet et une réunion avec les parties prenantes, que doit faire le chef de projet pour passer à l'exécution ?",
    options: [
      "Définir le projet et créer la charte.",
      "Mettre le plan en action.",
      "S'assurer que tous les livrables sont terminés.",
      "Gérer les risques pour rester sur la bonne voie."
    ],
    correct: "Mettre le plan en action.",
    rationale: "La phase d'exécution consiste à mettre le plan en action pour atteindre les objectifs et livrables du projet."
  },
  {
    id: 17,
    question: "Après un rapport de valeur acquise, deux tâches ont un CPI de 0,5. Quelle conclusion tirer ?",
    options: [
      "Chaque tâche a dépensé deux fois le budget prévu.",
      "Chaque tâche a dépensé la moitié du budget prévu.",
      "Chaque tâche a dépensé la moitié du montant prévu.",
      "Chaque tâche a dépensé un quart du budget prévu."
    ],
    correct: "Chaque tâche a dépensé deux fois le budget prévu.",
    rationale: "Un CPI de 0,5 signifie que pour chaque unité de valeur acquise, deux unités de coût ont été dépensées."
  },
  {
    id: 18,
    question: "L'équipe a du mal à vérifier les livrables car il n'existe pas de documents de référence. Quel document utiliser pour relier les besoins clients aux livrables ?",
    options: [
      "Business case",
      "Charte du projet",
      "Matrice de traçabilité des exigences",
      "Matrice de responsabilités"
    ],
    correct: "Matrice de traçabilité des exigences",
    rationale: "Elle permet de relier chaque besoin client aux livrables et aux informations documentées."
  },
  {
    id: 19,
    question: "Pour motiver l'équipe à respecter les processus dans un environnement strict, que doit faire le chef de projet ?",
    options: [
      "Offrir des bonus basés sur la performance.",
      "Mettre en place des audits et contrôles fréquents.",
      "Développer et communiquer une vision convaincante.",
      "Faciliter des ateliers pour identifier et résoudre les problèmes de conformité."
    ],
    correct: "Faciliter des ateliers pour identifier et résoudre les problèmes de conformité.",
    rationale: "Les ateliers collaboratifs engagent l'équipe à trouver des solutions et améliorent la motivation et l'adhésion aux processus."
  }
];
