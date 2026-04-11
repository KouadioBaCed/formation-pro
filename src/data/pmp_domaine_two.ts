// src/data/qualityQuizData.ts
export type Question = {
  id: number;
  question: string;
  options: string[];
  correct: string;
  rationale: string;
};

export const qualityQuizData: Question[] = [
  {
    id: 1,
    question: "Un livrable majeur du projet est terminé. Que doivent faire le chef de projet et l'équipe pour confirmer que les spécifications ont été respectées ?",
    options: [
      "Vérifier les actifs de processus organisationnels",
      "Valider les rapports d'audit qualité",
      "Effectuer le contrôle qualité",
      "Valider le périmètre"
    ],
    correct: "Valider le périmètre",
    rationale: "La validation du périmètre permet de confirmer que les livrables respectent les spécifications et standards prédéfinis."
  },
  {
    id: 2,
    question: "Une entreprise reçoit des plaintes de clients concernant un produit défectueux. Que doit utiliser le chef de projet pour analyser la cause et la quantité de défauts ?",
    options: [
      "Organigramme (Flowchart)",
      "Diagramme d’affinité",
      "Carte de contrôle",
      "Histogramme"
    ],
    correct: "Histogramme",
    rationale: "L’histogramme permet de visualiser le nombre de défauts et de classer les causes, contrairement aux autres outils qui ne quantifient pas directement les défauts."
  },
  {
    id: 3,
    question: "Un client craint que le livrable actuel ne réponde pas aux exigences. Que faire pour apaiser ses inquiétudes ?",
    options: [
      "Planifier une réunion pour rappeler les exigences déjà communiquées",
      "Documenter la préoccupation comme un risque dans le registre",
      "Gérer la préoccupation lors de la revue de chaque livrable",
      "Demander au product owner de revoir les critères d’acceptation discutés avec le client"
    ],
    correct: "Demander au product owner de revoir les critères d’acceptation discutés avec le client",
    rationale: "Le product owner aligne les attentes du client avec les livrables en rappelant les critères d’acceptation (Definition of Done)."
  },
  {
    id: 4,
    question: "Le projet est clos et le service client doit mesurer la satisfaction. Quelle est la prochaine action ?",
    options: [
      "Négocier un contrat supplémentaire avec le client",
      "Planifier une réunion avec les parties prenantes pour les leçons apprises",
      "Évaluer les livrables et examiner les retours clients",
      "Auditer le succès du projet via la documentation de clôture"
    ],
    correct: "Évaluer les livrables et examiner les retours clients",
    rationale: "L’évaluation des livrables et des retours permet de mesurer la satisfaction client et de formaliser l’acceptation."
  },
  {
    id: 5,
    question: "Un livrable n’a pas été accepté et nécessitera du travail supplémentaire retardant le projet de 2 mois. Que doit faire le chef de projet ensuite ?",
    options: [
      "Allouer la réserve de contingence pour les ressources",
      "Mettre à jour le calendrier et réaliser le travail",
      "Soumettre une demande de changement au Change Control Board (CCB)",
      "Mettre à jour la watch list dans le registre des risques"
    ],
    correct: "Soumettre une demande de changement au Change Control Board (CCB)",
    rationale: "Le livrable non accepté peut nécessiter une demande de changement, qui doit passer par le processus de contrôle intégré."
  },
  {
    id: 6,
    question: "Après l’approbation du sponsor, le chef de projet organise une réunion avec sponsor, équipe et parties prenantes. Quel document sera produit en sortie ?",
    options: [
      "Journal des changements",
      "Registre des parties prenantes",
      "Plan de management du périmètre",
      "Plan de management des exigences"
    ],
    correct: "Plan de management du périmètre",
    rationale: "Le plan de management du périmètre décrit comment le périmètre sera défini, contrôlé et validé."
  },
  {
    id: 7,
    question: "Le chef de projet veut vérifier que toutes les étapes d’une tâche fréquemment réalisée ont été accomplies par l’équipe. Que doit-il utiliser ?",
    options: [
      "Organigramme (Flowchart)",
      "Checklist",
      "Histogramme",
      "Facilitation"
    ],
    correct: "Checklist",
    rationale: "La checklist permet de vérifier l’exécution complète des étapes. Les autres outils ne garantissent pas la validation des étapes effectuées."
  },
  {
    id: 8,
    question: "Une équipe n’a pas effectué les tests d’acceptation car le produit fonctionnait ailleurs. Après implémentation, le produit ne fonctionne pas. Que doit faire le chef de projet pour identifier la source du problème ?",
    options: [
      "Revoir le document des métriques qualité",
      "Élaborer un diagramme de dispersion",
      "Réaliser une analyse des causes racines",
      "Effectuer un audit"
    ],
    correct: "Réaliser une analyse des causes racines",
    rationale: "L’analyse des causes racines identifie la cause fondamentale d’un défaut ou d’un problème de qualité."
  },
  {
    id: 9,
    question: "Un livrable ne répond pas aux exigences fonctionnelles et le client refuse l’acceptation. Comment les métriques qualité auraient pu éviter cela ?",
    options: [
      "Le plan de gestion des tests aurait évalué le livrable avant l’acceptation",
      "Les métriques dans le WBS auraient identifié les spécifications",
      "Les métriques qualité décrivent les attributs du livrable et comment les mesurer",
      "Les métriques dans le plan des exigences auraient permis un nouveau processus d’approvisionnement"
    ],
    correct: "Les métriques qualité décrivent les attributs du livrable et comment les mesurer",
    rationale: "Les métriques qualité définissent les attributs et mesures objectives, permettant de vérifier la conformité aux attentes client."
  },
  {
    id: 10,
    question: "Le client accepte des standards pour évaluer les livrables, mais demande des améliorations car les livrables ne respectent pas les standards. Quel document consulter ?",
    options: [
      "Plan de management du périmètre",
      "Plan de management de la qualité",
      "Documentation des exigences",
      "Charte du projet"
    ],
    correct: "Plan de management de la qualité",
    rationale: "Le plan qualité définit les standards des livrables et comment démontrer la conformité. La charte ou le périmètre ne fournissent pas ce niveau de détail."
  }
];
