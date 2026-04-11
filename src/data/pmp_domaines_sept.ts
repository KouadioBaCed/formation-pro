// src/data/pmp_domaines_sept.ts - Communication et Équipes Virtuelles
export type Question = {
  id: number;
  question: string;
  options: string[];
  correct: string;
  rationale: string;
};

export const virtualTeamsQuizData: Question[] = [
  {
    id: 1,
    question: "Quelles sont les raisons pour lesquelles un leader peut ignorer le potentiel de leadership partagé dans son équipe ? (Choisissez 2)",
    options: [
      "Trop de confiance en son propre rôle",
      "Fournir autonomie et contrôle",
      "Peur de devenir superflu",
      "Faire confiance à l'équipe"
    ],
    correct: "Trop de confiance en son propre rôle, Peur de devenir superflu",
    rationale: "Les leaders peuvent penser que seul un leader formel peut fournir un leadership adéquat (trop de confiance en leur rôle) ou craindre d'être remplacés (peur de devenir superflu). La confiance et l'autonomie ne font pas ignorer le leadership partagé."
  },
  {
    id: 2,
    question: "Lequel des éléments suivants réduit la complexité dans un projet ?",
    options: [
      "Les membres de l'équipe sont répartis dans différents fuseaux horaires",
      "Les membres viennent de plusieurs bureaux internationaux",
      "Les membres ont des origines culturelles variées",
      "Les membres utilisent un processus convenu pour accomplir le travail"
    ],
    correct: "Les membres utilisent un processus convenu pour accomplir le travail",
    rationale: "Dans les équipes virtuelles, avoir des processus et procédures convenus réduit la complexité et garantit l'efficacité du projet."
  },
  {
    id: 3,
    question: "Lequel des éléments suivants n'est pas une manière efficace de bâtir la confiance dans une équipe virtuelle ?",
    options: [
      "Passer une partie de la réunion à créer des liens et découvrir les compétences des membres",
      "Aider à gérer les conflits et ne pas les éviter",
      "S'assurer que les membres se sentent habilités à prendre des décisions",
      "Vérifications horaires, quotidiennes et hebdomadaires avec les membres"
    ],
    correct: "Vérifications horaires, quotidiennes et hebdomadaires avec les membres",
    rationale: "Trop de réunions est contre-productif et peut être perçu comme du micro-management. La confiance se construit par l'autonomie et la communication adaptée."
  },
  {
    id: 4,
    question: "Un chef de projet identifie un nouvel acteur influent qui demande les documents du projet dans sa langue locale. Que doit-il faire ensuite ?",
    options: [
      "Escalader le problème au sponsor du projet",
      "Dire que les documents ne sont disponibles qu'en langue de l'organisation",
      "Mettre à jour le registre des parties prenantes",
      "Ignorer la demande et continuer le travail"
    ],
    correct: "Mettre à jour le registre des parties prenantes",
    rationale: "Le premier réflexe face à un nouveau stakeholder est de l'ajouter au registre. Il faut ensuite considérer ses besoins, comme la langue pour les documents."
  },
  {
    id: 5,
    question: "Le cas ABC Electric Company montre l'importance de quel attribut clé de la communication ?",
    options: [
      "La communication interactive maintient l'engagement de l'équipe/stakeholders",
      "Une communication efficace inclut qui, comment, quand, à quelle fréquence et le contexte",
      "La communication pull inclut les informations recherchées par les stakeholders",
      "Aucun des éléments ci-dessus"
    ],
    correct: "Une communication efficace inclut qui, comment, quand, à quelle fréquence et le contexte",
    rationale: "Une communication efficace nécessite de déterminer qui a besoin de quoi, quand, comment et le contexte pour garantir l'engagement et le succès du projet."
  },
  {
    id: 6,
    question: "Pour éviter que la proposition d'ABC soit ignorée, quelles mesures auraient dû être prises, sauf ?",
    options: [
      "Adapter le message au contexte",
      "S'en tenir à la méthode de communication existante",
      "Adapter le style de communication",
      "Réévaluer le besoin de communication",
      "Valider la qualité de la proposition"
    ],
    correct: "S'en tenir à la méthode de communication existante",
    rationale: "Pour réussir, il faut adapter la communication aux stakeholders et au contexte. Respecter uniquement la méthode existante conduit à l'échec."
  },
  {
    id: 7,
    question: "Quelle action aurait pu augmenter les chances de succès pour ABC ?",
    options: [
      "Surveiller le marché pour le besoin de conducteurs électriques",
      "Nommer un chef de projet ayant une expertise spécifique",
      "Analyser et adapter efficacement les méthodes de communication aux parties prenantes",
      "Lancer le produit dans plusieurs régions simultanément",
      "Organiser une séance de brainstorming avec les parties prenantes"
    ],
    correct: "Analyser et adapter efficacement les méthodes de communication aux parties prenantes",
    rationale: "La communication efficace du produit et de sa valeur business aux stakeholders est la clé du succès du projet."
  },
  {
    id: 8,
    question: "Un chef de projet consolide des documents multimédias du projet (vidéos, photos, audios) pour partager l'expérience. Où doit-il les placer ?",
    options: [
      "Registre des leçons apprises",
      "Registre de partage des connaissances",
      "Registre des risques",
      "Journal des problèmes"
    ],
    correct: "Registre des leçons apprises",
    rationale: "Le registre des leçons apprises peut inclure des vidéos, images et audio pour documenter les situations, impacts, recommandations et actions proposées."
  }
];
