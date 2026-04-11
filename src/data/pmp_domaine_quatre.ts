// src/data/stakeholderQuizData.ts
export type Question = {
  id: number;
  question: string;
  options: string[];
  correct: string;
  rationale: string;
};

export const stakeholderQuizData: Question[] = [
  {
    id: 1,
    question: "Un chef de projet reconnaît le besoin d’améliorer la dynamique d’équipe et le partage des connaissances lors d’un mégaprojet. Que doit-il faire ?",
    options: [
      "Organiser des sessions de partage de connaissances où les membres expérimentés présentent leur expertise",
      "Attribuer aux juniors des tâches qui dépassent leur niveau et offrir un soutien minimal",
      "Mettre en place un programme de mentorat formel avec des objectifs structurés et des réunions régulières",
      "Faciliter des discussions ouvertes pour identifier et résoudre les défis et préoccupations individuels"
    ],
    correct: "Faciliter des discussions ouvertes pour identifier et résoudre les défis et préoccupations individuels",
    rationale: "Les discussions ouvertes encouragent le dialogue et créent un espace sûr pour partager les difficultés, favorisant la collaboration et la résolution de problèmes."
  },
  {
    id: 2,
    question: "Un acteur clé refuse de valider un produit car il ne répond pas aux attentes définies dans le périmètre. Que devait faire le chef de projet pour éviter cela ?",
    options: [
      "Solliciter les retours des parties prenantes tout au long du projet",
      "Réaliser une analyse des risques basée sur les attentes du stakeholder",
      "Appliquer des techniques de gestion de conflit lors de la validation",
      "Impliquer l’acteur clé pendant la phase de tests"
    ],
    correct: "Solliciter les retours des parties prenantes tout au long du projet",
    rationale: "L’engagement des parties prenantes assure que leurs attentes sont comprises et prises en compte tout au long du projet."
  },
  {
    id: 3,
    question: "Un stagiaire remplace une ressource critique en plein sprint, retardant la livraison. Que devait faire le chef de projet pour éviter cela ?",
    options: [
      "Convaincre la ressource critique de rester sur le projet",
      "Négocier du temps supplémentaire pour compléter le projet",
      "Demander une ressource expérimentée en remplacement",
      "Allouer du temps supplémentaire pour le mentorat"
    ],
    correct: "Demander une ressource expérimentée en remplacement",
    rationale: "Remplacer immédiatement la ressource critique par quelqu’un d’expérimenté prévient le risque lié à un manque de compétence."
  },
  {
    id: 4,
    question: "Lors de la mise en service d’un équipement, deux parties locales demandent l’arrêt du projet car elles n’ont pas été consultées. Comment un plan d’engagement des parties prenantes aurait aidé ?",
    options: [
      "Utiliser les techniques de gestion de conflit pour obtenir leur approbation",
      "Inclure les parties locales dans le plan pour garantir leur validation de la charte",
      "Comprendre leurs attentes et négocier leur engagement",
      "Identifier les parties locales comme stakeholders pour les inclure dans les communications"
    ],
    correct: "Identifier les parties locales comme stakeholders pour les inclure dans les communications",
    rationale: "L’identification des parties prenantes garantit qu’elles sont informées et impliquées dans les communications pertinentes."
  },
  {
    id: 5,
    question: "Lors de l’élaboration de la charte projet, un acteur clé ne fournit pas d’information sur les bénéfices attendus. Pourquoi rencontrer le sponsor projet ?",
    options: [
      "Le sponsor gère à la fois les connaissances tacites et explicites du projet",
      "Le sponsor peut traiter les enjeux politiques et stratégiques internes affectant la qualité",
      "Le sponsor peut demander au CCB de modifier la communauté des stakeholders",
      "Le sponsor gère les mesures disciplinaires sur les stakeholders"
    ],
    correct: "Le sponsor peut traiter les enjeux politiques et stratégiques internes affectant la qualité",
    rationale: "Le sponsor peut intervenir pour faciliter la contribution d’un stakeholder qui ne fournit pas les informations nécessaires."
  },
  {
    id: 6,
    question: "Le calendrier d’un projet nécessite que deux équipes travaillent simultanément sur des parties dépendantes. Que doit faire le chef de projet pour gérer d’éventuels conflits en premier ?",
    options: [
      "Mettre en place des réunions hebdomadaires entre les équipes pour suivre leur travail",
      "Prioriser la résolution des conflits sur le chemin critique",
      "Revoir le registre des leçons apprises pour anticiper les conflits",
      "Impliquer les parties prenantes pour garantir leur soutien lors des conflits"
    ],
    correct: "Mettre en place des réunions hebdomadaires entre les équipes pour suivre leur travail",
    rationale: "Une communication ouverte entre équipes prévient les conflits et l’incohérence lors de la combinaison des livrables."
  },
  {
    id: 7,
    question: "Un nouveau chef de projet rejoint un projet en pleine livraison d’un jalon critique. Comment déterminer le niveau de détail à communiquer aux parties prenantes ?",
    options: [
      "Plan de management de la communication",
      "Registre des stakeholders",
      "Plan d’engagement des stakeholders",
      "Plan de management du projet"
    ],
    correct: "Plan d’engagement des stakeholders",
    rationale: "Le plan d’engagement des stakeholders définit la stratégie de communication selon le niveau d’intérêt et les besoins de chaque stakeholder."
  },
  {
    id: 8,
    question: "Un stakeholder manque aux ateliers et délègue ses tâches. Que doit faire le chef de projet pour l’engager ?",
    options: [
      "Revoir avec le stakeholder les rôles et responsabilités de tous selon la charte projet",
      "Expliquer les différences des tâches assignées à chaque membre",
      "Demander au programme manager de briefer le stakeholder et exiger sa présence",
      "Associer le stakeholder à un membre expérimenté comme mentor"
    ],
    correct: "Revoir avec le stakeholder les rôles et responsabilités de tous selon la charte projet",
    rationale: "Clarifier les rôles et responsabilités aide le stakeholder à comprendre son rôle et à s’engager correctement."
  },
  {
    id: 9,
    question: "Un stakeholder a peu d’autorité mais est intéressé par le projet. Comment le gérer ?",
    options: [
      "Keep satisfied",
      "Manage closely",
      "Monitor",
      "Keep informed"
    ],
    correct: "Keep informed",
    rationale: "Les stakeholders à faible pouvoir mais à intérêt élevé doivent être tenus informés des évolutions pertinentes."
  },
  {
    id: 10,
    question: "Un nouveau stakeholder identifié a intérêt mais peu d’autorité ou d’influence. Comment le gérer ?",
    options: [
      "Fournir des informations selon les besoins",
      "Travailler étroitement avec lui pour résoudre ses préoccupations",
      "Suivre le stakeholder et répondre à ses besoins",
      "Inclure le stakeholder dans les mises à jour standard et le tenir satisfait"
    ],
    correct: "Fournir des informations selon les besoins",
    rationale: "Un stakeholder avec peu de pouvoir ou d’influence nécessite uniquement des informations adaptées à ses besoins."
  }
];
