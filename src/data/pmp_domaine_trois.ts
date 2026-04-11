// src/data/closureQuizData.ts
export type Question = {
  id: number;
  question: string;
  options: string[];
  correct: string;
  rationale: string;
};

export const closureQuizData: Question[] = [
  {
    id: 1,
    question: "Un projet a des composants externalisés et le chef de projet est dans la phase de contrôle des approvisionnements. Sur quoi doit-il se concentrer ?",
    options: [
      "Finaliser le contrat et payer les fournisseurs",
      "Élaborer un plan d’approvisionnement et identifier les fournisseurs potentiels",
      "Émettre des appels d’offres et sélectionner les fournisseurs",
      "Évaluer la performance d’un fournisseur majeur du projet"
    ],
    correct: "Évaluer la performance d’un fournisseur majeur du projet",
    rationale: "Dans la phase de contrôle des approvisionnements, le chef de projet doit surveiller la performance des fournisseurs et résoudre les problèmes éventuels."
  },
  {
    id: 2,
    question: "Lequel des éléments suivants ne fait pas partie de la validation d’une release dans la phase de transition ?",
    options: [
      "Tests de déploiement en production",
      "Participation active des parties prenantes",
      "Enquête de satisfaction des parties prenantes",
      "Enregistrer le déploiement"
    ],
    correct: "Enregistrer le déploiement",
    rationale: "L’enregistrement du déploiement relève de la mise en production et non de la validation de la release."
  },
  {
    id: 3,
    question: "Vous êtes chef de projet sur un projet livré par une équipe Scrum. Quels sont les objectifs d’un événement de rétrospective ? (Choisir 3)",
    options: [
      "Identifier ce qui fonctionne bien et définir des actions pour le renforcer",
      "Identifier ce qui ne fonctionne pas et définir des actions pour rectifier",
      "Identifier les principales zones d’amélioration et définir des actions pour les mettre en œuvre",
      "Identifier les livrables non terminés et définir des actions pour les compléter"
    ],
    correct: "Identifier ce qui fonctionne bien et définir des actions pour le renforcer, Identifier ce qui ne fonctionne pas et définir des actions pour rectifier, Identifier les principales zones d’amélioration et définir des actions pour les mettre en œuvre",
    rationale: "La rétrospective Scrum se concentre sur l’amélioration continue du processus, pas sur la complétion des livrables."
  },
  {
    id: 4,
    question: "Un projet arrive à sa phase de clôture après 6 mois de contributions. L’objectif stratégique est atteint et l’acceptation formelle est obtenue. Que doit faire le chef de projet ensuite ?",
    options: [
      "Revoir tous les contrats avec l’équipe et les fournisseurs",
      "Dissoudre l’équipe projet et réaffecter les ressources",
      "S’assurer que les équipes service client sont formées",
      "Documenter les leçons apprises pour référence future"
    ],
    correct: "Revoir tous les contrats avec l’équipe et les fournisseurs",
    rationale: "Le chef de projet doit s’assurer que toutes les obligations contractuelles ont été respectées avant de clôturer le projet."
  },
  {
    id: 5,
    question: "La livraison d’un composant essentiel sera retardée, retardant ainsi la complétion du projet. Que doit faire le chef de projet ?",
    options: [
      "Consulter les parties prenantes et réviser le calendrier",
      "Vérifier le plan de gestion du périmètre pour l’acceptation des livrables",
      "Vérifier le contrat d’approvisionnement pour les pénalités",
      "Évaluer l’impact du retard avant de décider des actions nécessaires"
    ],
    correct: "Évaluer l’impact du retard avant de décider des actions nécessaires",
    rationale: "Il faut d’abord comprendre l’impact du retard sur le projet avant de réviser le calendrier ou prendre des mesures."
  },
  {
    id: 6,
    question: "Un projet a été annulé lors de sa phase d’initiation pour manque de ressources. Que doit faire le chef de projet ?",
    options: [
      "Informer tous les membres de l’équipe selon le plan de communication",
      "Se référer aux directives de clôture de projet de l’entreprise",
      "Réaliser une analyse des risques pour évaluer l’impact de l’annulation",
      "Réaffecter toutes les ressources et réallouer le budget"
    ],
    correct: "Se référer aux directives de clôture de projet de l’entreprise",
    rationale: "Les directives de clôture contiennent la procédure officielle à suivre pour clore un projet, même annulé."
  },
  {
    id: 7,
    question: "Le chef de projet doit clôturer une phase. Quelle étape doit-il suivre ?",
    options: [
      "S’assurer que les livrables ont l’adhésion complète selon le processus décisionnel",
      "Comparer les livrables avec la charte projet et demander la validation du client",
      "Revoir les hypothèses stratégiques et contraintes avec les parties prenantes",
      "Revoir le plan de management du projet pour s’assurer que les objectifs de la phase sont atteints"
    ],
    correct: "Revoir le plan de management du projet pour s’assurer que les objectifs de la phase sont atteints",
    rationale: "La révision du plan de management garantit que tout le travail de la phase est terminé et que les objectifs sont atteints."
  },
  {
    id: 8,
    question: "Lequel des éléments suivants n’est pas considéré lors de la clôture projet/phase ?",
    options: [
      "Idées pour célébration d’équipe",
      "Facteurs critiques de succès",
      "Fast-tracking",
      "Transfert de connaissances"
    ],
    correct: "Fast-tracking",
    rationale: "Le fast-tracking est utilisé pour accélérer le planning et se produit avant la clôture du projet ou de la phase."
  },
  {
    id: 9,
    question: "Lequel des éléments suivants est effectué lors de la clôture projet/phase ?",
    options: [
      "Planifier et tenir une réunion de lancement du projet",
      "Planifier et tenir une réunion de leçons apprises",
      "Planifier et tenir une réunion de contrôle des changements",
      "Planifier et tenir une réunion de suivi du projet"
    ],
    correct: "Planifier et tenir une réunion de leçons apprises",
    rationale: "La réunion de leçons apprises permet de capitaliser les expériences pour améliorer les projets futurs."
  },
  {
    id: 10,
    question: "Un chef de projet doit clôturer un projet mais n’a pas le temps de mettre à jour le registre des leçons apprises. Quelle pourrait être la conséquence ?",
    options: [
      "Les données de performance seraient incomplètes et indisponibles",
      "Les opportunités de prévenir des problèmes similaires dans le futur pourraient être manquées",
      "Le plan de management projet pourrait être incorrect",
      "Les parties prenantes clés refuseraient de participer à de futurs projets"
    ],
    correct: "Les opportunités de prévenir des problèmes similaires dans le futur pourraient être manquées",
    rationale: "Ne pas enregistrer les leçons apprises empêche l’organisation de capitaliser sur l’expérience pour éviter des problèmes similaires dans les futurs projets."
  },
  {
    id: 11,
    question: "Un chef de projet examine les historiques, ressources et données de performance pour appliquer la connaissance stockée à un nouveau projet. Où doit-il chercher en premier ?",
    options: [
      "Chartes de projets précédemment acceptées",
      "Système d’information de gestion de projet (PMIS)",
      "Outils de management de la qualité",
      "Rapports comparant performance réelle vs planifiée"
    ],
    correct: "Système d’information de gestion de projet (PMIS)",
    rationale: "Le PMIS contient l’ensemble des informations, historiques et leçons apprises nécessaires pour guider de nouveaux projets."
  }
];
