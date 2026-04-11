// src/data/projectRiskQuizData.ts
export type Question = {
  id: number;
  question: string;
  options: string[];
  correct: string;
  rationale: string;
};

export const projectRiskQuizData: Question[] = [
  {
    id: 1,
    question: "Un chef de projet identifie que le travail commencé par l’équipe n’est pas conforme aux réglementations de l’industrie. Que doit-il mettre à jour ?",
    options: [
      "Actifs des processus organisationnels",
      "Données de performance du travail",
      "Journal des problèmes",
      "Plan de management du projet"
    ],
    correct: "Journal des problèmes",
    rationale: "Le journal des problèmes enregistre et suit tous les problèmes rencontrés. La non-conformité aux réglementations est un problème qui doit être documenté et suivi."
  },
  {
    id: 2,
    question: "Lors d’une rétrospective agile, plusieurs membres de l’équipe disent être confus sur l’avancement de l’itération. Que doit faire le chef de projet pour éviter cette confusion ?",
    options: [
      "Former l’équipe à consulter le tableau de l’itération",
      "Préparer un rapport quotidien d’état du projet",
      "Demander à l’équipe de se référer au backlog de l’itération",
      "Aborder le problème lors de la prochaine rétrospective"
    ],
    correct: "Former l’équipe à consulter le tableau de l’itération",
    rationale: "En agile, il est essentiel que l’équipe se coach pour auto-gérer le travail et suivre l’avancement via le tableau de l’itération. Les rapports de statut et backlogs ne remplacent pas ce mécanisme."
  },
  {
    id: 3,
    question: "Un scrum master rappelle l’importance de la qualité en se concentrant sur le Coût du Changement. Quelle option n’est pas concernée ?",
    options: [
      "Réduire le temps de cycle des défauts",
      "Corriger les défauts échappés",
      "Supporter plus de fonctionnalités",
      "Réduire la dette technique"
    ],
    correct: "Supporter plus de fonctionnalités",
    rationale: "Le Coût du Changement concerne la prévention et la correction des défauts et la réduction de la dette technique. Ajouter des fonctionnalités n’est pas lié au coût de la qualité."
  },
  {
    id: 4,
    question: "Lors d’un projet agile, un risque identifié se matérialise et bloque le développement. Que doit faire le chef de projet ensuite ?",
    options: [
      "Augmenter la fréquence des communications et impliquer les parties prenantes pour résoudre le problème",
      "Attribuer le plan de communication à un membre senior",
      "Inviter les parties prenantes à la prochaine rétrospective et les informer",
      "Reporter le développement à la prochaine itération"
    ],
    correct: "Augmenter la fréquence des communications et impliquer les parties prenantes pour résoudre le problème",
    rationale: "La gestion efficace des problèmes nécessite une communication accrue et l’inclusion des parties prenantes pour résoudre rapidement les blocages."
  },
  {
    id: 5,
    question: "Le chef de projet constate que le taux de production de béton a varié les trois derniers mois et veut prévoir les trois prochains mois. Quelle analyse doit-il effectuer ?",
    options: [
      "Analyse de la valeur acquise",
      "Analyse du chemin critique",
      "Analyse des tendances",
      "Analyse coûts-bénéfices"
    ],
    correct: "Analyse des tendances",
    rationale: "L’analyse des tendances permet de prévoir l’évolution future d’un indicateur, ici le taux de production de béton."
  },
  {
    id: 6,
    question: "Un membre clé de l’équipe quitte l’organisation à mi-projet. Quelle est la première action du chef de projet ?",
    options: [
      "Rencontrer l’équipe pour réaffecter les charges",
      "Travailler avec le manager fonctionnel pour trouver un remplaçant",
      "Évaluer l’impact du départ sur le projet",
      "Réévaluer les rôles et la composition de l’équipe"
    ],
    correct: "Évaluer l’impact du départ sur le projet",
    rationale: "Avant de prendre toute décision, le chef de projet doit comprendre l’impact du départ sur le projet pour orienter les actions suivantes."
  },
  {
    id: 7,
    question: "Après plusieurs conflits dans une équipe à distance, le chef de projet forme les membres sur l’agréabilité. Quel comportement peut-il attendre ?",
    options: [
      "Les membres prendront la responsabilité de leur travail",
      "Les membres échangeront librement des idées sans jugement",
      "Les membres communiqueront leurs idées de façon non conflictuelle",
      "Les membres seront extravertis et spontanés"
    ],
    correct: "Les membres communiqueront leurs idées de façon non conflictuelle",
    rationale: "L’agréabilité favorise la coopération et la communication respectueuse, réduisant les conflits au sein de l’équipe."
  },
  {
    id: 8,
    question: "Une équipe projet est en conflit avec un fournisseur à l’étranger. Que doit faire le chef de projet après avoir revu la charte de l’équipe ?",
    options: [
      "Rencontrer le manager du fournisseur en personne",
      "Organiser une réunion virtuelle avec le fournisseur pour résoudre le conflit",
      "Envoyer une copie du contrat au manager du fournisseur",
      "Envoyer un e-mail expliquant le problème et demandant une réponse"
    ],
    correct: "Organiser une réunion virtuelle avec le fournisseur pour résoudre le conflit",
    rationale: "Le conflit doit être traité rapidement et de manière collaborative ; une réunion virtuelle permet de communiquer et résoudre efficacement le problème."
  },
  {
    id: 9,
    question: "Dans un projet hybride, le scrum master fait face à un conflit entre deux membres de l’équipe. Quelle stratégie doit-il utiliser ?",
    options: [
      "Mettre les conflits sur une liste partagée visible",
      "Classer les conflits en positifs et négatifs",
      "Revoir les conflits lors du daily standup",
      "Organiser les conflits en catégories : structurels et interpersonnels"
    ],
    correct: "Organiser les conflits en catégories : structurels et interpersonnels",
    rationale: "Identifier la nature du conflit permet de comprendre la cause et de mettre en place des mesures adaptées pour le résoudre efficacement."
  },
  {
    id: 10,
    question: "Un projet avec sept partenaires est en retard. Le comité de pilotage demande de supprimer les concessions. Quelle technique de résolution des conflits doit être éliminée ?",
    options: [
      "Retrait/Évitement",
      "Lissage/Accommodement",
      "Force/Directive",
      "Compromis/Réconciliation"
    ],
    correct: "Compromis/Réconciliation",
    rationale: "Le compromis implique que les parties fassent des concessions. Si le comité supprime cette exigence, cette technique devient impossible."
  },
  {
    id: 11,
    question: "Deux membres doivent travailler ensemble sur un module critique mais se disputent. Comment résoudre le conflit ?",
    options: [
      "Ignorer le conflit",
      "Les séparer sur des tâches différentes",
      "Planifier une réunion d’équipe pour discuter et trouver une solution",
      "Réaffecter l’un à un autre projet"
    ],
    correct: "Planifier une réunion d’équipe pour discuter et trouver une solution",
    rationale: "Le chef de projet doit favoriser un espace de résolution constructive, où les membres communiquent et trouvent ensemble une solution."
  },
  {
    id: 12,
    question: "Lors d’une réunion, deux stakeholders se disputent sur le développement d’un composant logiciel. Que doit faire le chef de projet ?",
    options: [
      "Suspendez la réunion et consultez les autres stakeholders",
      "Identifier la cause du conflit, désescalader et trouver une solution commune",
      "Prendre des notes et demander aux autres de voter",
      "Informer le sponsor et lui demander de résoudre le conflit"
    ],
    correct: "Identifier la cause du conflit, désescalader et trouver une solution commune",
    rationale: "Le chef de projet doit adresser le conflit de manière proactive et collaborative, en identifiant la cause et en facilitant la recherche d’une solution commune."
  },
  {
    id: 13,
    question: "Un nouveau chef de projet rejoint un projet existant et constate une baisse des KPI et de l’enthousiasme de l’équipe. Que doit-il faire ?",
    options: [
      "Rencontrer le sponsor pour exprimer ses préoccupations",
      "Identifier d’autres ressources pour remplacer l’équipe",
      "Rencontrer l’équipe pour discuter du niveau de performance actuel",
      "Demander aux managers fonctionnels d’agir sur la performance"
    ],
    correct: "Rencontrer l’équipe pour discuter du niveau de performance actuel",
    rationale: "Le chef de projet doit analyser directement avec l’équipe les causes de la baisse de performance avant de prendre d’autres mesures."
  }
];

