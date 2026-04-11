// @ts-nocheck
import type { Question, Chapter, Topic, Category } from '../types';

// CIA Part 1 - Exam Blanc 1 Chapters
export const ciaPart1EB1Chapters: Chapter[] = [
  { id: 'cia-p1-eb1-ch-1', name: 'Fondements de l\'audit interne', slug: 'cia-p1-eb1-fondements', questionCount: 15 },
  { id: 'cia-p1-eb1-ch-2', name: 'Code d\'éthique', slug: 'cia-p1-eb1-ethique', questionCount: 7 },
  { id: 'cia-p1-eb1-ch-3', name: 'Indépendance et objectivité', slug: 'cia-p1-eb1-independance', questionCount: 18 },
  { id: 'cia-p1-eb1-ch-4', name: 'Compétence et diligence raisonnable', slug: 'cia-p1-eb1-competence', questionCount: 20 },
  { id: 'cia-p1-eb1-ch-5', name: 'Programme d\'assurance qualité', slug: 'cia-p1-eb1-paaq', questionCount: 9 },
  { id: 'cia-p1-eb1-ch-6', name: 'Gouvernance organisationnelle', slug: 'cia-p1-eb1-gouvernance', questionCount: 9 },
  { id: 'cia-p1-eb1-ch-7', name: 'Gestion des risques', slug: 'cia-p1-eb1-risques', questionCount: 19 },
  { id: 'cia-p1-eb1-ch-8', name: 'Contrôle interne', slug: 'cia-p1-eb1-controle', questionCount: 18 },
  { id: 'cia-p1-eb1-ch-9', name: 'Risques de fraude', slug: 'cia-p1-eb1-fraude', questionCount: 10 },
];

// CIA Part 1 EB1 Topics
export const ciaPart1EB1Topics: Topic[] = [
  {
    id: 'cia-p1-eb1-topic-1',
    name: 'CIA Part 1 - Exam Blanc 1',
    slug: 'cia-p1-exam-blanc-1',
    description: '125 questions couvrant tous les domaines de la Partie 1 du CIA : Fondements, Éthique, Indépendance, Compétence, Assurance qualité, Gouvernance, Risques, Contrôles et Fraude.',
    icon: 'FileText',
    questionCount: 125,
    chapters: ciaPart1EB1Chapters,
  },
];

// CIA Part 1 EB1 Category
export const ciaPart1EB1Category: Category = {
  id: 'cia-p1-eb1-cat-1',
  name: 'CIA Part 1 - Exam Blanc 1',
  slug: 'cia-part-1-exam-blanc-1',
  description: 'Examen blanc complet pour la Partie 1 du CIA avec 125 questions couvrant l\'ensemble du programme : normes, éthique, gouvernance, risques et contrôles.',
  icon: 'GraduationCap',
  color: 'primary',
  topics: ciaPart1EB1Topics,
};

// CIA Part 1 EB1 Answer Key
export const ciaPart1EB1AnswerKey: Record<number, string> = {
  1: 'B', 2: 'D', 3: 'A', 4: 'A', 5: 'D', 6: 'D', 7: 'B', 8: 'B',
  9: 'A', 10: 'D', 11: 'D', 12: 'C', 13: 'C', 14: 'C', 15: 'D',
  16: 'B', 17: 'D', 18: 'B', 19: 'B', 20: 'B', 21: 'C', 22: 'C',
  23: 'B', 24: 'D', 25: 'A', 26: 'D', 27: 'B', 28: 'B', 29: 'C',
  30: 'B', 31: 'C', 32: 'D', 33: 'B', 34: 'A', 35: 'C', 36: 'A',
  37: 'C', 38: 'B', 39: 'C', 40: 'C', 41: 'C', 42: 'D', 43: 'D',
  44: 'B', 45: 'C', 46: 'D', 47: 'A', 48: 'C', 49: 'A', 50: 'C',
  51: 'C', 52: 'B', 53: 'C', 54: 'A', 55: 'C', 56: 'B', 57: 'D',
  58: 'A', 59: 'C', 60: 'B', 61: 'A', 62: 'B', 63: 'B', 64: 'D',
  65: 'D', 66: 'B', 67: 'D', 68: 'D', 69: 'A', 70: 'A', 71: 'B',
  72: 'C', 73: 'C', 74: 'A', 75: 'C', 76: 'A', 77: 'B', 78: 'C',
  79: 'B', 80: 'D', 81: 'C', 82: 'A', 83: 'B', 84: 'C', 85: 'B',
  86: 'B', 87: 'D', 88: 'B', 89: 'C', 90: 'B', 91: 'D', 92: 'C',
  93: 'A', 94: 'D', 95: 'D', 96: 'B', 97: 'C', 98: 'C', 99: 'A',
  100: 'B', 101: 'A', 102: 'C', 103: 'B', 104: 'B', 105: 'A', 106: 'B',
  107: 'C', 108: 'D', 109: 'C', 110: 'B', 111: 'A', 112: 'B', 113: 'C',
  114: 'D', 115: 'C', 116: 'C', 117: 'C', 118: 'A', 119: 'B', 120: 'C',
  121: 'A', 122: 'A', 123: 'D', 124: 'A', 125: 'B',
};

// CIA Part 1 EB1 Questions
export const ciaPart1EB1Questions: Question[] = [
  // Question 1 - Answer: B
  {
    id: 'cia-p1-eb1-q-001',
    number: 1,
    text: 'Lequel des énoncés suivants n\'est pas vrai en ce qui concerne la charte d\'audit interne ?',
    answers: [
      { id: 'a', text: 'Il définit les pouvoirs et les responsabilités de l\'activité d\'audit interne.', isCorrect: false },
      { id: 'b', text: 'Il précise les ressources minimales nécessaires à l\'activité d\'audit interne.', isCorrect: true },
      { id: 'c', text: 'Il fournit une base pour l\'évaluation de l\'activité d\'audit interne.', isCorrect: false },
      { id: 'd', text: 'Il devrait être approuvé par la direction générale et le conseil.', isCorrect: false },
    ],
    answerType: 'single',
    explanation: 'Le manuel d\'audit interne et le plan d\'audit annuel aident à déterminer les besoins en ressources. La charte d\'audit interne définit les pouvoirs et responsabilités nécessaires, fournit une référence pour l\'évaluation et devrait être approuvée par la direction générale et le conseil.',
    difficulty: 'medium',
    topic: 'cia-p1-exam-blanc-1',
    chapter: 'cia-p1-eb1-fondements',
    status: 'unseen',
  },
  // Question 2 - Answer: D
  {
    id: 'cia-p1-eb1-q-002',
    number: 2,
    text: 'La fonction de l\'audit interne, en ce qui concerne les rapports financiers internes, serait de :',
    answers: [
      { id: 'a', text: 'Veiller au respect des procédures de reporting.', isCorrect: false },
      { id: 'b', text: 'Examinez les postes de dépenses et faites correspondre chaque poste avec les dépenses engagées.', isCorrect: false },
      { id: 'c', text: 'Déterminez s\'il y a des employés qui dépensent des fonds sans autorisation.', isCorrect: false },
      { id: 'd', text: 'Identifier les contrôles inadéquats qui augmentent la probabilité de dépenses non autorisées.', isCorrect: true },
    ],
    answerType: 'single',
    explanation: 'Les auditeurs internes sont chargés d\'identifier les contrôles inadéquats, d\'évaluer l\'efficacité de la gestion et d\'identifier les risques communs.',
    difficulty: 'medium',
    topic: 'cia-p1-exam-blanc-1',
    chapter: 'cia-p1-eb1-fondements',
    status: 'unseen',
  },
  // Question 3 - Answer: A
  {
    id: 'cia-p1-eb1-q-003',
    number: 3,
    text: 'Le statut de l\'activité d\'audit interne ne doit pas être affecté par des changements de politique irresponsables de la part de la direction. Le moyen le plus efficace d\'assurer cette liberté est de :',
    answers: [
      { id: 'a', text: 'Faire approuver la charte d\'audit interne par le conseil.', isCorrect: true },
      { id: 'b', text: 'Adopter des politiques pour le fonctionnement de l\'activité d\'audit interne.', isCorrect: false },
      { id: 'c', text: 'Établir un comité d\'audit à titre de sous-comité du conseil.', isCorrect: false },
      { id: 'd', text: 'Élaborer des politiques et des procédures écrites qui serviront de normes de rendement pour les activités d\'audit interne.', isCorrect: false },
    ],
    answerType: 'single',
    explanation: 'Le but, les pouvoirs et les responsabilités de l\'AAI devraient être formellement définis dans la charte, qui est approuvée par la direction et le conseil.',
    difficulty: 'medium',
    topic: 'cia-p1-exam-blanc-1',
    chapter: 'cia-p1-eb1-fondements',
    status: 'unseen',
  },
  // Question 4 - Answer: A
  {
    id: 'cia-p1-eb1-q-004',
    number: 4,
    text: 'Si les normes de fonctionnement d\'un département sont vagues et donc sujettes à interprétation, un auditeur devrait :',
    answers: [
      { id: 'a', text: 'Chercher à s\'entendre avec le gestionnaire ministériel sur les critères nécessaires pour mesurer le rendement opérationnel.', isCorrect: true },
      { id: 'b', text: 'Déterminer les meilleures pratiques dans le domaine et les utiliser comme norme.', isCorrect: false },
      { id: 'c', text: 'Interpréter les normes dans leur sens le plus strict, car les normes ne sont autrement que des mesures minimales d\'acceptation.', isCorrect: false },
      { id: 'd', text: 'Omettre tout commentaire sur les normes et le rendement du département par rapport à ces normes, car une telle analyse serait inappropriée.', isCorrect: false },
    ],
    answerType: 'single',
    explanation: 'Selon la norme de mise en œuvre 2210.A3, si les critères de contrôle sont inadéquats, les auditeurs internes doivent collaborer avec la direction pour élaborer des critères d\'évaluation appropriés.',
    difficulty: 'medium',
    topic: 'cia-p1-exam-blanc-1',
    chapter: 'cia-p1-eb1-fondements',
    status: 'unseen',
  },
  // Question 5 - Answer: D
  {
    id: 'cia-p1-eb1-q-005',
    number: 5,
    text: 'Lesquels des éléments suivants ne seraient pas considérés comme des lignes directrices obligatoires ?',
    answers: [
      { id: 'a', text: 'La définition d\'audit interne.', isCorrect: false },
      { id: 'b', text: 'Le Code d\'éthique.', isCorrect: false },
      { id: 'c', text: 'Les Principes fondamentaux.', isCorrect: false },
      { id: 'd', text: 'La mission d\'audit interne.', isCorrect: true },
    ],
    answerType: 'single',
    explanation: 'La mission d\'audit interne n\'est pas considérée comme une orientation obligatoire. La définition de l\'audit interne, le Code d\'éthique et les Principes fondamentaux sont tous des directives obligatoires.',
    difficulty: 'easy',
    topic: 'cia-p1-exam-blanc-1',
    chapter: 'cia-p1-eb1-fondements',
    status: 'unseen',
  },
  // Question 6 - Answer: D
  {
    id: 'cia-p1-eb1-q-006',
    number: 6,
    text: 'L\'un des objectifs des normes est de :',
    answers: [
      { id: 'a', text: 'Encourager la professionnalisation de l\'audit interne.', isCorrect: false },
      { id: 'b', text: 'Établir l\'indépendance de l\'activité d\'audit interne et souligner l\'objectivité de l\'audit interne.', isCorrect: false },
      { id: 'c', text: 'Encourager les auditeurs externes à utiliser davantage le travail des auditeurs internes.', isCorrect: false },
      { id: 'd', text: 'Établir la base de l\'évaluation du rendement de l\'audit interne.', isCorrect: true },
    ],
    answerType: 'single',
    explanation: 'Selon l\'IIA, les normes sont destinées à établir la base de l\'évaluation du rendement de l\'audit interne, guider le respect des éléments obligatoires, fournir un cadre pour la prestation de services à valeur ajoutée, et favoriser l\'amélioration des processus organisationnels.',
    difficulty: 'medium',
    topic: 'cia-p1-exam-blanc-1',
    chapter: 'cia-p1-eb1-fondements',
    status: 'unseen',
  },
  // Question 7 - Answer: B
  {
    id: 'cia-p1-eb1-q-007',
    number: 7,
    text: 'Les normes exigent que le Responsable de l\'Audit Interne (RAI) ait une charte d\'audit interne officielle et écrite approuvée par la direction et le conseil. La charte d\'audit interne a pour but de :',
    answers: [
      { id: 'a', text: 'Protéger l\'activité d\'audit interne contre toute influence extérieure.', isCorrect: false },
      { id: 'b', text: 'Établir la mission, les pouvoirs et les responsabilités de l\'activité d\'audit interne.', isCorrect: true },
      { id: 'c', text: 'Définir la relation de l\'auditeur interne avec l\'auditeur externe.', isCorrect: false },
      { id: 'd', text: 'Définir le rôle du responsable de l\'audit interne en tant que membre du comité d\'audit.', isCorrect: false },
    ],
    answerType: 'single',
    explanation: 'La mission, les pouvoirs et les responsabilités de l\'AAI doivent être formellement définis dans la charte.',
    difficulty: 'easy',
    topic: 'cia-p1-exam-blanc-1',
    chapter: 'cia-p1-eb1-fondements',
    status: 'unseen',
  },
  // Question 8 - Answer: B
  {
    id: 'cia-p1-eb1-q-008',
    number: 8,
    text: 'Le meilleur moyen pour l\'activité d\'audit interne de déterminer si elle a atteint son objectif de mise en œuvre d\'une couverture d\'audit plus large des activités fonctionnelles :',
    answers: [
      { id: 'a', text: 'Consiste à cumuler les constatations d\'audit par domaine d\'audit.', isCorrect: false },
      { id: 'b', text: 'Consiste à comparer le plan d\'audit à l\'activité d\'audit réelle.', isCorrect: true },
      { id: 'c', text: 'Consiste à mener des enquêtes sur la satisfaction de la direction à l\'égard de l\'activité d\'audit interne.', isCorrect: false },
      { id: 'd', text: 'Consiste à la mise en œuvre d\'un programme d\'assurance et d\'amélioration de la qualité.', isCorrect: false },
    ],
    answerType: 'single',
    explanation: 'La mise en œuvre d\'un programme d\'assurance et d\'amélioration de la qualité (PQAI) peut aider le RAI à déterminer si les objectifs d\'audit de l\'AAI sont atteints. Le PQPI évalue et analyse l\'efficacité et l\'efficience des activités de l\'AAI.',
    difficulty: 'medium',
    topic: 'cia-p1-exam-blanc-1',
    chapter: 'cia-p1-eb1-fondements',
    status: 'unseen',
  },
  // Question 9 - Answer: A
  {
    id: 'cia-p1-eb1-q-009',
    number: 9,
    text: 'Si un département à l\'extérieur de l\'activité d\'audit interne (AAI) est chargé d\'examiner une fonction ou un processus, l\'auditeur interne devrait le faire :',
    answers: [
      { id: 'a', text: 'Tenir compte du travail de l\'autre département au moment d\'évaluer la fonction ou le processus.', isCorrect: true },
      { id: 'b', text: 'Ignorer le travail de l\'autre département et procéder à un audit indépendant.', isCorrect: false },
      { id: 'c', text: 'Réduire le périmètre de l\'audit parce que le travail a déjà été effectué par l\'autre département.', isCorrect: false },
      { id: 'd', text: 'Céder la responsabilité de l\'évaluation de la fonction ou du processus à l\'autre département.', isCorrect: false },
    ],
    answerType: 'single',
    explanation: 'L\'examen et la mise à l\'essai des procédures de l\'autre département peuvent réduire l\'étendue de l\'audit nécessaire de la fonction ou du processus.',
    difficulty: 'medium',
    topic: 'cia-p1-exam-blanc-1',
    chapter: 'cia-p1-eb1-fondements',
    status: 'unseen',
  },
  // Question 10 - Answer: D
  {
    id: 'cia-p1-eb1-q-010',
    number: 10,
    text: 'Dans le cadre d\'une mission d\'évaluation de la fonction des comptes fournisseurs de l\'organisation, un auditeur interne prévoit confirmer les soldes avec les fournisseurs. Quelle est la source d\'autorité pour le contact de l\'auditeur avec les unités extérieures à l\'organisation ?',
    answers: [
      { id: 'a', text: 'Politiques et procédures relatives aux activités d\'audit interne.', isCorrect: false },
      { id: 'b', text: 'Les normes.', isCorrect: false },
      { id: 'c', text: 'Le Code d\'éthique.', isCorrect: false },
      { id: 'd', text: 'La charte de l\'activité d\'audit interne.', isCorrect: true },
    ],
    answerType: 'single',
    explanation: 'La mission, les pouvoirs et les responsabilités de l\'activité d\'audit interne devraient être définis dans la charte. La charte devrait établir la position de l\'activité d\'audit interne au sein de l\'organisation, autoriser l\'accès aux dossiers, au personnel et aux biens matériels pertinents à l\'exécution des missions.',
    difficulty: 'medium',
    topic: 'cia-p1-exam-blanc-1',
    chapter: 'cia-p1-eb1-fondements',
    status: 'unseen',
  },
  // Question 11 - Answer: D
  {
    id: 'cia-p1-eb1-q-011',
    number: 11,
    text: 'Lequel des principes suivants n\'est pas l\'un des dix principes fondamentaux :',
    answers: [
      { id: 'a', text: 'Favorise l\'amélioration organisationnelle.', isCorrect: false },
      { id: 'b', text: 'Est bien positionné et dispose de ressources adéquates.', isCorrect: false },
      { id: 'c', text: 'Fournit une assurance fondée sur le risque.', isCorrect: false },
      { id: 'd', text: 'Est perspicace, proactif et axé sur le présent.', isCorrect: true },
    ],
    answerType: 'single',
    explanation: 'Le principe correct est : "Est perspicace, proactif et tourné vers l\'avenir" et non "axé sur le présent".',
    difficulty: 'easy',
    topic: 'cia-p1-exam-blanc-1',
    chapter: 'cia-p1-eb1-fondements',
    status: 'unseen',
  },
  // Question 12 - Answer: C
  {
    id: 'cia-p1-eb1-q-012',
    number: 12,
    text: 'Selon les Normes, les objectifs de l\'activité d\'audit interne doivent être précisés :',
    answers: [
      { id: 'a', text: 'Politiques et procédures pour guider le personnel d\'audit interne.', isCorrect: false },
      { id: 'b', text: 'Les calendriers de travail et les activités de la mission qui doivent être examinés.', isCorrect: false },
      { id: 'c', text: 'Critères de mesure et dates cibles d\'achèvement.', isCorrect: true },
      { id: 'd', text: 'Plans de dotation en personnel et budgets financiers.', isCorrect: false },
    ],
    answerType: 'single',
    explanation: 'Les objectifs de l\'AAI devraient pouvoir être atteints dans le cadre de plans et de budgets de fonctionnement précis et, dans la mesure du possible, ils devraient être mesurables. Elles devraient être accompagnées de critères de mesure et de dates cibles de réalisation.',
    difficulty: 'medium',
    topic: 'cia-p1-exam-blanc-1',
    chapter: 'cia-p1-eb1-fondements',
    status: 'unseen',
  },
  // Question 13 - Answer: C
  {
    id: 'cia-p1-eb1-q-013',
    number: 13,
    text: 'Lequel des énoncés suivants décrit le mieux l\'objectif d\'un auditeur interne lorsqu\'il examine les processus actuels de gestion des risques, de contrôle et de gouvernance de l\'organisation ?',
    answers: [
      { id: 'a', text: 'Aider à déterminer la nature, le calendrier et l\'étendue des tests nécessaires pour atteindre les objectifs de la mission.', isCorrect: false },
      { id: 'b', text: 'S\'assurer que les faiblesses du système de contrôle interne sont corrigées.', isCorrect: false },
      { id: 'c', text: 'Fournir l\'assurance raisonnable que les processus permettront d\'atteindre les objectifs et les buts de l\'organisation de façon efficiente et économique.', isCorrect: true },
      { id: 'd', text: 'Déterminer si les processus permettent de s\'assurer que les documents comptables sont exacts et que les états financiers sont présentés fidèlement.', isCorrect: false },
    ],
    answerType: 'single',
    explanation: 'L\'objectif premier des auditeurs internes lorsqu\'ils examinent les processus actuels de gestion des risques, de contrôle et de gouvernance d\'une organisation est de fournir une assurance raisonnable que ces processus fonctionnent comme prévu et permettront d\'atteindre les objectifs de l\'organisation.',
    difficulty: 'medium',
    topic: 'cia-p1-exam-blanc-1',
    chapter: 'cia-p1-eb1-fondements',
    status: 'unseen',
  },
  // Question 14 - Answer: C
  {
    id: 'cia-p1-eb1-q-014',
    number: 14,
    text: 'Parmi les activités suivantes, quelles sont celles qui relèvent de l\'audit interne ?\nI. Évaluer l\'efficacité d\'un service d\'exploitation à atteindre les objectifs organisationnels énoncés.\nII. Protéger les actifs.\nIII. Évaluer les contrôles de conformité aux lois et règlements.\nIV. Déterminer dans quelle mesure les objectifs et les buts ont été établis.',
    answers: [
      { id: 'a', text: 'I et III seulement.', isCorrect: false },
      { id: 'b', text: 'I et IV seulement.', isCorrect: false },
      { id: 'c', text: 'I, III et IV seulement.', isCorrect: true },
      { id: 'd', text: 'I, II et IV seulement.', isCorrect: false },
    ],
    answerType: 'single',
    explanation: 'L\'audit interne devrait évaluer l\'efficacité d\'un service d\'exploitation, évaluer les contrôles de conformité et vérifier dans quelle mesure les objectifs ont été établis. La protection des actifs relève de la responsabilité de la direction et non de l\'audit interne.',
    difficulty: 'medium',
    topic: 'cia-p1-exam-blanc-1',
    chapter: 'cia-p1-eb1-fondements',
    status: 'unseen',
  },
  // Question 15 - Answer: D
  {
    id: 'cia-p1-eb1-q-015',
    number: 15,
    text: 'L\'approche consultative en matière d\'audit interne met l\'accent :',
    answers: [
      { id: 'a', text: 'Imposition de mesures correctives.', isCorrect: false },
      { id: 'b', text: 'Participation avec les clients de la mission afin d\'améliorer les méthodes.', isCorrect: false },
      { id: 'c', text: 'Enquêtes sur les fraudes.', isCorrect: false },
      { id: 'd', text: 'Mise en œuvre des politiques et des procédures.', isCorrect: true },
    ],
    answerType: 'single',
    explanation: 'Les auditeurs internes doivent entretenir une relation satisfaisante avec les clients des missions. Le développement d\'une relation positive et la participation du client dans toutes les missions créent un environnement plus favorable à l\'effort d\'engagement.',
    difficulty: 'easy',
    topic: 'cia-p1-exam-blanc-1',
    chapter: 'cia-p1-eb1-fondements',
    status: 'unseen',
  },
];

// Ajouter les 110 questions restantes en suivant la même structure...
// (Pour des raisons de longueur, je continue avec quelques exemples supplémentaires)

// Question 16 - Answer: B
export const question16: Question = {
  id: 'cia-p1-eb1-q-016',
  number: 16,
  text: 'Un CIA, agissant en tant que directeur des achats, signe un contrat pour passer une commande importante auprès du fournisseur avec le meilleur prix, la meilleure qualité et les meilleures performances. Peu après la signature du contrat, le fournisseur présente au CIA un don d\'une valeur monétaire importante. Laquelle des affirmations suivantes concernant l\'acceptation du cadeau est correcte ?',
  answerType: 'single',
  explanation: 'Tant que la personne détient la désignation du CIA, elle devrait être guidée par le code de déontologie de la profession en plus du code de conduite de l\'organisation. La règle de conduite 2.2 exclut de tels cadeaux parce qu\'on peut présumer qu\'ils ont influencé la décision de l\'individu.',
  difficulty: 'medium',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-ethique',
  status: 'unseen',
};

// Question 17 - Answer: D
export const question17: Question = {
  id: 'cia-p1-eb1-q-017',
  number: 17,
  text: 'Un examen du code de conduite d\'une organisation a révélé qu\'il contenait des lignes directrices exhaustives conçues pour inspirer des niveaux élevés de comportement éthique. L\'examen a également révélé que les employés connaissaient ses dispositions. Toutefois, certains employés n\'ont toujours pas respecté le code. Quel élément un code de conduite devrait-il contenir pour améliorer son efficacité ?',
  answers: [
    { id: 'a', text: 'Examen périodique et reconnaissance par tous les employés.', isCorrect: false },
    { id: 'b', text: 'L\'implication des salariés dans son développement.', isCorrect: false },
    { id: 'c', text: 'Connaissance par le public de son contenu et de sa finalité.', isCorrect: false },
    { id: 'd', text: 'Dispositions prévoyant des mesures disciplinaires en cas d\'infraction.', isCorrect: true },
  ],
  answerType: 'single',
  explanation: 'Des dispositions prévoyant des mesures disciplinaires en cas d\'infraction constitueraient le moyen le plus efficace de décourager l\'inconduite.',
  difficulty: 'medium',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-ethique',
  status: 'unseen',
};

// Question 18 - Answer: B
export const question18: Question = {
  id: 'cia-p1-eb1-q-018',
  number: 18,
  text: 'Lequel des énoncés suivants n\'est pas approprié à inclure dans la politique sur les conflits d\'intérêts d\'un fabricant ? Un employé ne doit pas le faire :',
  answers: [
    { id: 'a', text: 'Accepter de l\'argent, des cadeaux ou des services d\'un client.', isCorrect: false },
    { id: 'b', text: 'Participer (directement ou indirectement) à la gestion d\'un organisme public.', isCorrect: true },
    { id: 'c', text: 'Emprunter ou prêter de l\'argent à des fournisseurs.', isCorrect: false },
    { id: 'd', text: 'Utiliser l\'information organisationnelle à des fins privées.', isCorrect: false },
  ],
  answerType: 'single',
  explanation: 'Une personne a le droit de participer à la gestion d\'un organisme public (un organisme gouvernemental). Par conséquent, il ne serait pas inclus dans la politique sur les conflits d\'intérêts d\'un fabricant.',
  difficulty: 'medium',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-ethique',
  status: 'unseen',
};

// Question 19 - Answer: B
export const question19: Question = {
  id: 'cia-p1-eb1-q-019',
  number: 19,
  text: 'Un auditeur interne, au cours de l\'évaluation des politiques et procédures de capitalisation des immobilisations, a découvert certains renseignements indiquant que la direction avait capitalisé certains frais d\'entretien généraux qui auraient dû être passés en charges. Le montant est considéré comme important. Si l\'auditeur interne omet de communiquer cette information à la direction générale ou au comité d\'audit, il enfreindrait quelle règle de conduite ?',
  answers: [
    { id: 'a', text: 'Intégrité.', isCorrect: false },
    { id: 'b', text: 'Objectivité.', isCorrect: true },
    { id: 'c', text: 'Confidentialité.', isCorrect: false },
    { id: 'd', text: 'Compétence.', isCorrect: false },
  ],
  answerType: 'single',
  explanation: 'L\'auditeur interne ne respecterait pas la règle d\'objectivité. Conformément à la règle 2.3, les auditeurs internes doivent divulguer tous les faits importants dont ils ont connaissance qui, s\'ils ne sont pas divulgués, risquent de fausser les rapports sur les activités examinées.',
  difficulty: 'medium',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-ethique',
  status: 'unseen',
};

// Question 20 - Answer: B
export const question20: Question = {
  id: 'cia-p1-eb1-q-020',
  number: 20,
  text: 'Laquelle des professions concomitantes suivantes pourrait sembler porter atteinte au comportement éthique d\'un auditeur interne ?',
  answers: [
    { id: 'a', text: 'Auditeur interne et président local d\'un organisme de bienfaisance bien connu.', isCorrect: false },
    { id: 'b', text: 'Auditeur interne et courtier en assurance des entreprises à temps partiel.', isCorrect: true },
    { id: 'c', text: 'Auditeur interne et membre auxiliaire du corps professoral d\'une école de commerce locale qui forme des employés potentiels.', isCorrect: false },
    { id: 'd', text: 'Auditeur interne et propriétaire d\'immeubles d\'habitation à logements multiples qui font de la publicité pour les locataires dans un journal communautaire local.', isCorrect: false },
  ],
  answerType: 'single',
  explanation: 'Selon le Code, un auditeur interne ne doit pas participer à une activité ou à une relation qui pourrait nuire ou être présumée nuire à son évaluation impartiale. Ainsi, un auditeur interne et un courtier à temps partiel seraient considérés comme incompatibles.',
  difficulty: 'medium',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-ethique',
  status: 'unseen',
};

// Question 21 - Answer: C
export const question21: Question = {
  id: 'cia-p1-eb1-q-021',
  number: 21,
  text: 'Dans le cadre d\'un programme de prix parrainé par l\'entreprise, un auditeur interne s\'est vu offrir un prix d\'une valeur monétaire importante par une division en reconnaissance des économies de coûts découlant des recommandations de l\'auditeur. Selon l\'International Professional Practices Framework (IPPF), quelle est la mesure la plus appropriée à prendre par l\'auditeur ?',
  answers: [
    { id: 'a', text: 'Acceptez le cadeau parce que la mission est déjà terminé et le rapport déjà émis.', isCorrect: false },
    { id: 'b', text: 'Accepter le prix à la condition que tous les profits aillent à des œuvres de charité.', isCorrect: false },
    { id: 'c', text: 'Informez la direction de l\'audit et demandez-lui des directives sur l\'acceptation ou le refus du cadeau.', isCorrect: true },
    { id: 'd', text: 'Refuser le cadeau et aviser le supérieur du chef de division.', isCorrect: false },
  ],
  answerType: 'single',
  explanation: 'Même si le don a une valeur importante, étant donné qu\'il fait partie d\'un programme parrainé par l\'entreprise, il pourrait être acceptable que l\'auditeur interne l\'accepte. Toutefois, il est toujours recommandé que l\'auditeur interne confirme d\'abord l\'acceptation auprès du RAI.',
  difficulty: 'medium',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-ethique',
  status: 'unseen',
};

// Question 22 - Answer: C
export const question22: Question = {
  id: 'cia-p1-eb1-q-022',
  number: 22,
  text: 'Vers la fin d\'une mission, l\'auditeur découvre que le directeur du marketing a une habitude de jeu. La question du jeu n\'est pas directement liée à la mission existante et il y a des pressions pour terminer la mission actuelle. L\'auditeur note le problème et transmet l\'information au responsable de l\'audit interne, mais n\'effectue aucun suivi supplémentaire. Les actions de l\'auditeur le feraient :',
  answers: [
    { id: 'a', text: 'Violer le Code d\'éthique de l\'IIA pour avoir dissimulé des renseignements utiles.', isCorrect: false },
    { id: 'b', text: 'Enfreindre les normes parce que l\'auditeur n\'a pas donné suite comme il se doit à un signal d\'alerte qui pourrait indiquer l\'existence d\'une fraude.', isCorrect: false },
    { id: 'c', text: 'Ne pas contrevenir au Code de déontologie ou aux normes de l\'IIA.', isCorrect: true },
    { id: 'd', text: 'a et b à la fois.', isCorrect: false },
  ],
  answerType: 'single',
  explanation: 'Il n\'y a aucune violation du Code d\'éthique ou des Normes. L\'auditeur ne retient pas d\'information parce que l\'information a été transmise au RAI. L\'information peut être utile dans le cadre d\'une mission ultérieure dans le domaine du marketing.',
  difficulty: 'medium',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-ethique',
  status: 'unseen',
};

// Question 23 - Answer: B
export const question23: Question = {
  id: 'cia-p1-eb1-q-023',
  number: 23,
  text: 'Dans lequel des cas suivants un auditeur interne manquerait-il potentiellement d\'objectivité ?',
  answers: [
    { id: 'a', text: 'L\'auditeur interne examine les procédures pour une nouvelle connexion d\'échange de données informatisées (EDI) avec un client important avant sa mise en œuvre.', isCorrect: false },
    { id: 'b', text: 'Un ancien assistant aux achats effectue un examen des contrôles internes sur les achats quatre mois après avoir été transféré à l\'activité d\'audit interne.', isCorrect: true },
    { id: 'c', text: 'Un auditeur interne recommande des normes de contrôle et des mesures de rendement pour un contrat avec un organisme de services pour le traitement de la paie et des avantages sociaux.', isCorrect: false },
    { id: 'd', text: 'Un employé de la comptabilité de la paie aide un auditeur interne à vérifier l\'inventaire physique des petits moteurs.', isCorrect: false },
  ],
  answerType: 'single',
  explanation: 'Selon les normes, les personnes mutées à l\'activité d\'audit interne ne devraient pas être affectées à des activités d\'audit qu\'elles ont déjà exécutées avant qu\'une période raisonnable (au moins un an) ne se soit écoulée.',
  difficulty: 'medium',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-independance',
  status: 'unseen',
};

// Question 24 - Answer: D
export const question24: Question = {
  id: 'cia-p1-eb1-q-024',
  number: 24,
  text: 'L\'objectivité d\'un auditeur pourrait être compromise dans toutes les situations suivantes, sauf :',
  answers: [
    { id: 'a', text: 'Un conflit d\'intérêts.', isCorrect: false },
    { id: 'b', text: 'Familiarité de l\'entité vérifiée avec l\'auditeur en raison de l\'absence de rotation dans l\'affectation.', isCorrect: false },
    { id: 'c', text: 'Prise en charge temporaire de fonctions opérationnelles par l\'auditeur.', isCorrect: false },
    { id: 'd', text: 'S\'en remettre à l\'opinion d\'experts externes, s\'il y a lieu.', isCorrect: true },
  ],
  answerType: 'single',
  explanation: 'Il est fort probable qu\'un auditeur doive à un moment donné se fier à l\'opinion d\'un expert externe.',
  difficulty: 'easy',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-independance',
  status: 'unseen',
};

// Question 25 - Answer: A
export const question25: Question = {
  id: 'cia-p1-eb1-q-025',
  number: 25,
  text: 'L\'indépendance est très probablement compromise par celle d\'un auditeur interne :',
  answers: [
    { id: 'a', text: 'Poursuite d\'une mission dans une division dont il sera bientôt responsable à la suite d\'une promotion.', isCorrect: true },
    { id: 'b', text: 'Réduction du périmètre de la mission en raison de restrictions budgétaires.', isCorrect: false },
    { id: 'c', text: 'Participation à un groupe de travail qui recommande des normes pour le contrôle d\'un nouveau système de distribution.', isCorrect: false },
    { id: 'd', text: 'Examen des projets de contrat d\'un agent d\'achat avant leur exécution.', isCorrect: false },
  ],
  answerType: 'single',
  explanation: 'Lorsque l\'AAI ou un auditeur interne est responsable, ou peut être responsable, d\'une opération qu\'il pourrait vérifier, l\'indépendance et l\'objectivité de l\'auditeur interne peuvent être compromises.',
  difficulty: 'medium',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-independance',
  status: 'unseen',
};

// Question 26 - Answer: D
export const question26: Question = {
  id: 'cia-p1-eb1-q-026',
  number: 26,
  text: 'L\'indépendance vis-à-vis des pressions extérieures est un facteur important pour que l\'activité d\'audit interne puisse travailler librement et objectivement. Lequel des éléments suivants contribue à l\'indépendance de l\'auditeur interne ?',
  answers: [
    { id: 'a', text: 'La direction devrait aider l\'AAI en examinant, en révisant et en transmettant les communications de mission au comité d\'audit.', isCorrect: false },
    { id: 'b', text: 'L\'AAI relève directement du comité d\'audit, sans corroborer les communications de mission avec la direction.', isCorrect: false },
    { id: 'c', text: 'Idéalement, l\'AAI relève fonctionnellement du comité d\'audit, mais elle rend compte au chef de l\'exploitation de toutes les missions liées aux opérations.', isCorrect: false },
    { id: 'd', text: 'L\'exactitude des communications de la mission devrait être vérifiée auprès de la direction, et l\'AAI devrait ensuite faire rapport à la direction et au comité d\'audit.', isCorrect: true },
  ],
  answerType: 'single',
  explanation: 'Les auditeurs internes doivent d\'abord discuter des conclusions et recommandations avec la direction afin que celle-ci soit en mesure de vérifier l\'exactitude des communications de la mission. Les communications finales relatives à la mission seraient ensuite envoyées au comité d\'audit.',
  difficulty: 'hard',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-independance',
  status: 'unseen',
};

// Question 27 - Answer: B
export const question27: Question = {
  id: 'cia-p1-eb1-q-027',
  number: 27,
  text: 'Les auditeurs internes doivent faire la distinction entre une limitation du périmètre et d\'autres limitations. Lequel des éléments suivants n\'est pas considéré comme une limitation du périmètre ?',
  answers: [
    { id: 'a', text: 'Le chef de division d\'un client en mission a indiqué que la division est en train de convertir un important système informatique et que la partie informatique de la mission prévue devra être reportée à l\'année prochaine.', isCorrect: false },
    { id: 'b', text: 'Le conseil revoit le calendrier des travaux de la mission pour l\'année et supprime une mission que le RAI jugeait importante de mener.', isCorrect: true },
    { id: 'c', text: 'Le client de la mission a indiqué que certains clients ne peuvent être contactés parce que l\'organisation est en train de négocier des contrats à long terme et qu\'elle ne veut pas déranger les clients.', isCorrect: false },
    { id: 'd', text: 'Aucune des réponses n\'est correcte.', isCorrect: false },
  ],
  answerType: 'single',
  explanation: 'Le conseil a le droit de supprimer une mission du calendrier de travail annuel de l\'AAI. Par conséquent, cela n\'est pas considéré comme une limitation du champ d\'application.',
  difficulty: 'medium',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-independance',
  status: 'unseen',
};

// Question 28 - Answer: B
export const question28: Question = {
  id: 'cia-p1-eb1-q-028',
  number: 28,
  text: 'Laquelle des combinaisons suivantes illustre le mieux une limitation du périmètre et la réponse appropriée du RAI ?',
  answers: [
    { id: 'a', text: 'Le client de mission limite la portée en fonction des informations exclusives - Signaler uniquement au contrôleur', isCorrect: false },
    { id: 'b', text: 'Le client de mission ne donnera pas accès aux documents nécessaires pour un programme de travail approuvé - Signaler au Conseil', isCorrect: true },
    { id: 'c', text: 'Le client de mission demande que la mission soit retardée de 2 semaines pour lui permettre de clôturer ses livres - Signaler directement au Directeur général et au contrôleur', isCorrect: false },
    { id: 'd', text: 'Le client de mission ne permettra pas à l\'auditeur interne de contacter les principaux clients dans le cadre d\'une mission pour évaluer l\'efficacité des opérations - Aucun rapport n\'est nécessaire', isCorrect: false },
  ],
  answerType: 'single',
  explanation: 'C\'est la meilleure combinaison. Si l\'auditeur interne n\'a pas accès aux dossiers, il doit en informer le conseil.',
  difficulty: 'hard',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-independance',
  status: 'unseen',
};

// Question 29 - Answer: C
export const question29: Question = {
  id: 'cia-p1-eb1-q-029',
  number: 29,
  text: 'Dans la pratique, l\'audit interne devrait comporter un double processus d\'établissement de rapports. Le RAI doit rendre compte à un niveau de l\'organisation qui permet à l\'audit interne de s\'acquitter de ses responsabilités. L\'idéal pour le CAE d\'une entreprise est de :',
  answers: [
    { id: 'a', text: 'Rendre compte fonctionnellement au directeur financier et administrativement au comité d\'audit.', isCorrect: false },
    { id: 'b', text: 'Relevant administrativement du conseil d\'administration et fonctionnellement de la direction générale.', isCorrect: false },
    { id: 'c', text: 'Relevant fonctionnellement du conseil d\'administration et administrativement de la direction générale.', isCorrect: true },
    { id: 'd', text: 'Relevant administrativement de la direction générale et fonctionnellement de l\'auditeur externe.', isCorrect: false },
  ],
  answerType: 'single',
  explanation: 'C\'est exact parce que le RAI devrait relever fonctionnellement du conseil ou du comité d\'audit et relever administrativement de la direction générale.',
  difficulty: 'medium',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-independance',
  status: 'unseen',
};

// Question 30 - Answer: B
export const question30: Question = {
  id: 'cia-p1-eb1-q-030',
  number: 30,
  text: 'Les rapports administratifs comprennent généralement tous les éléments suivants, à l\'exception des éléments suivants',
  answers: [
    { id: 'a', text: 'Élaborer et soumettre le budget annuel d\'audit interne.', isCorrect: false },
    { id: 'b', text: 'Approuver le plan d\'audit interne axé sur les risques.', isCorrect: true },
    { id: 'c', text: 'Administration des politiques et procédures relatives aux activités d\'audit interne.', isCorrect: false },
    { id: 'd', text: 'Administration des ressources humaines, y compris les évaluations du personnel et la rémunération.', isCorrect: false },
  ],
  answerType: 'single',
  explanation: 'L\'approbation du plan d\'audit interne axé sur les risques est liée aux rapports fonctionnels et non aux rapports administratifs.',
  difficulty: 'medium',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-independance',
  status: 'unseen',
};

// Question 31 - Answer: C
export const question31: Question = {
  id: 'cia-p1-eb1-q-031',
  number: 31,
  text: 'On s\'attend à ce que les auditeurs internes soient objectifs dans l\'exécution de leur travail. Laquelle des circonstances suivantes ne compromettrait pas l\'objectivité d\'un auditeur interne ?\nI. L\'auditeur interne a audité un domaine dont il était responsable il y a plus d\'un an.\nII. L\'auditeur interne a accepté un don important d\'un client à la suite d\'un audit réussie.\nIII. L\'auditeur interne a conçu certaines procédures de contrôle pour un client en mission.\nIV. L\'auditeur interne a reçu une petite marque d\'appréciation de la part d\'un client après la fin d\'un audit.',
  answers: [
    { id: 'a', text: 'I et II seulement', isCorrect: false },
    { id: 'b', text: 'II et III seulement', isCorrect: false },
    { id: 'c', text: 'I et IV seulement', isCorrect: true },
    { id: 'd', text: 'II et IV seulement', isCorrect: false },
  ],
  answerType: 'single',
  explanation: 'L\'audit d\'un domaine dont l\'auditeur était responsable il y a plus d\'un an et l\'acceptation d\'une petite marque d\'appréciation ne portent pas atteinte à l\'objectivité. L\'acceptation d\'un don important et la conception de procédures de contrôle compromettent l\'objectivité.',
  difficulty: 'medium',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-independance',
  status: 'unseen',
};

// Question 32 - Answer: D
export const question32: Question = {
  id: 'cia-p1-eb1-q-032',
  number: 32,
  text: 'La participation d\'un auditeur interne à l\'évaluation de la fonction des comptes créditeurs de l\'organisation devrait comprendre tous les éléments suivants, sauf les suivants :',
  answers: [
    { id: 'a', text: 'Vérifier si les soldes des fournisseurs de l\'organisation sont déclarés avec exactitude.', isCorrect: false },
    { id: 'b', text: 'Recommander des domaines à améliorer.', isCorrect: false },
    { id: 'c', text: 'Élaborer des plans d\'audit pour les vérifications futures.', isCorrect: false },
    { id: 'd', text: 'Rédaction de procédures visant à améliorer le contrôle de la fonction des comptes fournisseurs.', isCorrect: true },
  ],
  answerType: 'single',
  explanation: 'Les auditeurs internes ne devraient pas rédiger ou concevoir de procédures de contrôle car cela compromettrait leur objectivité.',
  difficulty: 'medium',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-independance',
  status: 'unseen',
};

// Question 33 - Answer: B
export const question33: Question = {
  id: 'cia-p1-eb1-q-033',
  number: 33,
  text: 'Lequel des énoncés suivants est correct ? Dans une mission de conseil :',
  answers: [
    { id: 'a', text: 'L\'auditeur fournit une évaluation et émet une opinion sur le bon fonctionnement de l\'entreprise.', isCorrect: false },
    { id: 'b', text: 'L\'auditeur n\'a pas besoin d\'être indépendant, mais il doit être objectif.', isCorrect: true },
    { id: 'c', text: 'L\'auditeur doit être objectif dans son enquête et indépendant dans sa décision.', isCorrect: false },
    { id: 'd', text: 'Les missions sont une analyse des événements passés.', isCorrect: false },
  ],
  answerType: 'single',
  explanation: 'Il s\'agit d\'une déclaration véridique concernant une mission de conseil. L\'auditeur n\'a pas besoin d\'être indépendant, mais il doit être objectif.',
  difficulty: 'medium',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-independance',
  status: 'unseen',
};

// Question 34 - Answer: A
export const question34: Question = {
  id: 'cia-p1-eb1-q-034',
  number: 34,
  text: 'L\'objectivité individuelle signifie cela :',
  answers: [
    { id: 'a', text: 'Les auditeurs internes doivent tirer des conclusions basées sur des faits sans être influencés par des sentiments, des émotions, des relations, des pots-de-vin ou toute autre influence extérieure.', isCorrect: true },
    { id: 'b', text: 'Les auditeurs internes doivent faire rapport à un niveau de l\'organisation qui permet à l\'activité d\'audit interne de s\'acquitter de ses responsabilités.', isCorrect: false },
    { id: 'c', text: 'Ni a ni b ne sont corrects.', isCorrect: false },
    { id: 'd', text: 'a et b sont corrects.', isCorrect: false },
  ],
  answerType: 'single',
  explanation: 'Il s\'agit d\'une déclaration correcte au sujet de l\'objectivité individuelle. La réponse (b) porte sur l\'indépendance et non sur l\'objectivité.',
  difficulty: 'easy',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-independance',
  status: 'unseen',
};

// Question 35 - Answer: C
export const question35: Question = {
  id: 'cia-p1-eb1-q-035',
  number: 35,
  text: 'Pour être efficaces, les auditeurs internes doivent jouir d\'une indépendance organisationnelle. L\'indépendance organisationnelle est atteinte en grande partie grâce au statut de l\'activité d\'audit interne et à l\'autorité que le conseil lui accorde. Sur cette base, le conseil autorise l\'activité d\'audit interne à :\nI. Avoir un accès illimité à toutes les fonctions, à tous les dossiers, à tous les biens et à tout le personnel nécessaires à l\'exécution de la mission.\nII. Avoir un accès illimité à tous les documents de travail d\'audit externe.\nIII. Affecter les ressources nécessaires pour atteindre les objectifs de l\'audit.',
  answers: [
    { id: 'a', text: 'I seulement.', isCorrect: false },
    { id: 'b', text: 'II et III seulement.', isCorrect: false },
    { id: 'c', text: 'I et III seulement.', isCorrect: true },
    { id: 'd', text: 'I et II seulement.', isCorrect: false },
  ],
  answerType: 'single',
  explanation: 'L\'indépendance de l\'audit interne est atteinte lorsque les auditeurs internes ont un accès illimité à toutes les fonctions, tous les dossiers, tous les biens et tout le personnel pertinents et disposent des ressources nécessaires. L\'audit interne n\'aura pas un accès illimité aux documents de travail de l\'auditeur externe.',
  difficulty: 'medium',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-independance',
  status: 'unseen',
};

// Question 36 - Answer: A
export const question36: Question = {
  id: 'cia-p1-eb1-q-036',
  number: 36,
  text: 'Une entreprise a vu son chiffre d\'affaires augmenter considérablement au cours des dernières années et la direction envisage de remplacer son ancien système par un système ERP. La direction croit qu\'un système ERP permettra à l\'entreprise d\'intégrer des applications pour mieux gérer l\'entreprise. Lequel des éléments suivants serait un rôle d\'audit interne approprié dans l\'achat du système ERP ?',
  answers: [
    { id: 'a', text: 'Déterminer si l\'étude de faisabilité traite de la relation coûts-avantages.', isCorrect: true },
    { id: 'b', text: 'Solliciter des soumissions auprès des fournisseurs.', isCorrect: false },
    { id: 'c', text: 'Déterminer les exigences pour la préparation d\'un manuel de spécifications.', isCorrect: false },
    { id: 'd', text: 'Participer à l\'acquisition et à la mise en œuvre de l\'ERP.', isCorrect: false },
  ],
  answerType: 'single',
  explanation: 'L\'audit interne aurait un rôle à jouer pour déterminer si l\'étude de faisabilité traite de la relation coûts-avantages. Les autres activités sont des rôles de gestion.',
  difficulty: 'medium',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-independance',
  status: 'unseen',
};

// Question 37 - Answer: C
export const question37: Question = {
  id: 'cia-p1-eb1-q-037',
  number: 37,
  text: 'Lequel des énoncés suivants n\'est pas vrai en ce qui concerne un conflit d\'intérêts ?',
  answers: [
    { id: 'a', text: 'Il y a conflit d\'intérêts même s\'il n\'en résulte aucun acte contraire à l\'éthique ou inapproprié.', isCorrect: false },
    { id: 'b', text: 'Un conflit d\'intérêts peut créer une apparence d\'irrégularité qui mine la confiance dans l\'auditeur interne.', isCorrect: false },
    { id: 'c', text: 'Un auditeur interne qui se trouve en situation de conflit d\'intérêts dans le cadre d\'une activité de consultation devrait être démis de ses fonctions.', isCorrect: true },
    { id: 'd', text: 'Un conflit d\'intérêts pourrait nuire à la capacité d\'un auditeur d\'exercer ses fonctions et d\'assumer ses responsabilités de façon objective.', isCorrect: false },
  ],
  answerType: 'single',
  explanation: 'Cette affirmation est fausse. Un auditeur qui se trouve en situation de conflit d\'intérêts dans le cadre d\'une activité de consultation devrait divulguer la situation au client. Si le client n\'a pas d\'objection, l\'auditeur peut rester dans la mission de conseil.',
  difficulty: 'medium',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-independance',
  status: 'unseen',
};

// Question 38 - Answer: B
export const question38: Question = {
  id: 'cia-p1-eb1-q-038',
  number: 38,
  text: 'Le responsable de l\'audit interne peut suivre un certain nombre de procédures afin de maintenir l\'objectivité de l\'activité d\'audit interne. Lequel des éléments suivants ne constituerait pas une procédure de maintien de l\'objectivité ?',
  answers: [
    { id: 'a', text: 'Veillez à ce que les affectations minimisent les conflits d\'intérêts potentiels.', isCorrect: false },
    { id: 'b', text: 'Promouvoir le perfectionnement professionnel continu.', isCorrect: true },
    { id: 'c', text: 'Élaborer un solide système de PAAQ pour assurer l\'indépendance et l\'objectivité de l\'organisation.', isCorrect: false },
    { id: 'd', text: 'Faire une rotation périodique des missions d\'audit interne afin d\'éviter que les relations entre l\'auditeur et l\'entité auditée n\'altèrent le jugement de l\'auditeur.', isCorrect: false },
  ],
  answerType: 'single',
  explanation: 'La promotion du perfectionnement professionnel continu améliore les compétences et les connaissances. Elle ne favorise pas l\'objectivité.',
  difficulty: 'medium',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-independance',
  status: 'unseen',
};

// Question 39 - Answer: C
export const question39: Question = {
  id: 'cia-p1-eb1-q-039',
  number: 39,
  text: 'Au cours d\'un audit interne, l\'auditeur interne doit faire preuve de la diligence professionnelle requise. Le soin professionnel dû signifie que l\'auditeur interne doit prendre en considération :\nI. L\'étendue du travail nécessaire pour atteindre les objectifs de la mission.\nII. La complexité relative et l\'importance relative auxquelles les procédures d\'assurance sont appliquées.\nIII. La probabilité d\'erreurs, d\'irrégularités ou de non-conformités importantes.\nIV. Les procédures de mission nécessaires pour s\'assurer que tous les risques significatifs ont été identifiés.',
  answers: [
    { id: 'a', text: 'I et II seulement.', isCorrect: false },
    { id: 'b', text: 'I, II et IV seulement.', isCorrect: false },
    { id: 'c', text: 'I, II, III et IV.', isCorrect: true },
    { id: 'd', text: 'I, II et III seulement.', isCorrect: false },
  ],
  answerType: 'single',
  explanation: 'Les points I, II et III sont corrects. Le point IV n\'est pas correct car les procédures de mission, même lorsqu\'elles sont exercées avec la diligence professionnelle requise, ne peuvent garantir que tous les risques importants seront identifiés. L\'auditeur ne peut fournir qu\'une assurance raisonnable.',
  difficulty: 'hard',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-independance',
  status: 'unseen',
};

// Question 40 - Answer: C
export const question40: Question = {
  id: 'cia-p1-eb1-q-040',
  number: 40,
  text: 'Dans le cadre du processus visant à améliorer la relation entre l\'auditeur interne et le client de la mission, il est très important de traiter de la façon dont l\'activité d\'audit interne est perçue. Certains types d\'attitudes dans le travail accompli contribueront à créer ces perceptions. Du point de vue de la direction, quelle attitude est susceptible d\'être la plus propice à une perception positive ?',
  answers: [
    { id: 'a', text: 'Interrogatoire.', isCorrect: false },
    { id: 'b', text: 'Enquête.', isCorrect: false },
    { id: 'c', text: 'Conseil.', isCorrect: true },
    { id: 'd', text: 'Objectif.', isCorrect: false },
  ],
  answerType: 'single',
  explanation: 'Une attitude consultative conduit à une communication bidirectionnelle et est susceptible d\'améliorer la relation.',
  difficulty: 'easy',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-independance',
  status: 'unseen',
};

// Question 41 - Answer: C
export const question41: Question = {
  id: 'cia-p1-eb1-q-041',
  number: 41,
  text: 'Les auditeurs internes doivent avoir la compréhension dans quelle discipline ?',
  answers: [
    { id: 'a', text: 'Procédures et techniques d\'audit interne.', isCorrect: false },
    { id: 'b', text: 'Principes et techniques comptables.', isCorrect: false },
    { id: 'c', text: 'Principes de gestion.', isCorrect: true },
    { id: 'd', text: 'Techniques de marketing.', isCorrect: false },
  ],
  answerType: 'single',
  explanation: 'L\'auditeur interne doit comprendre les principes de gestion. L\'auditeur doit maîtriser les procédures et techniques d\'audit ainsi que les principes comptables.',
  difficulty: 'easy',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-competence',
  status: 'unseen',
};

// Question 42 - Answer: D
export const question42: Question = {
  id: 'cia-p1-eb1-q-042',
  number: 42,
  text: 'Les normes exigent que les auditeurs internes possèdent lesquelles des compétences suivantes ?\nI. Les auditeurs internes doivent comprendre les relations humaines et être capables de traiter avec les gens.\nII. Les auditeurs internes devraient être en mesure de reconnaître et d\'évaluer l\'importance relative et l\'importance des écarts par rapport aux bonnes pratiques commerciales.\nIII. Les auditeurs internes devraient être des experts dans des domaines tels que l\'économie, le droit commercial, la fiscalité, les finances et les technologies de l\'information.\nIV. Les auditeurs internes doivent être compétents en communication orale et écrite.',
  answers: [
    { id: 'a', text: 'I et II seulement.', isCorrect: false },
    { id: 'b', text: 'I, II et III seulement.', isCorrect: false },
    { id: 'c', text: 'I, II, III et IV.', isCorrect: false },
    { id: 'd', text: 'I, II et IV seulement.', isCorrect: true },
  ],
  answerType: 'single',
  explanation: 'Les points I, II et IV sont corrects. On ne s\'attend pas à ce que les auditeurs internes soient des experts dans une grande variété de domaines liés à leurs responsabilités d\'audit.',
  difficulty: 'medium',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-competence',
  status: 'unseen',
};

// Question 43 - Answer: D
export const question43: Question = {
  id: 'cia-p1-eb1-q-043',
  number: 43,
  text: 'Votre organisation vous a choisi pour développer une activité d\'audit interne. Votre approche sera très probablement d\'embaucher :',
  answers: [
    { id: 'a', text: 'Des auditeurs internes qui possèdent toutes les compétences requises pour mener à bien toutes les missions.', isCorrect: false },
    { id: 'b', text: 'Le personnel inexpérimenté et les former dans la façon dont l\'organisation veut qu\'ils soient formés.', isCorrect: false },
    { id: 'c', text: 'Les personnes titulaires d\'un diplôme en comptabilité parce que la plupart des travaux d\'audit interne sont liés à la comptabilité.', isCorrect: false },
    { id: 'd', text: 'Les auditeurs internes qui possèdent collectivement les connaissances et les compétences nécessaires pour s\'acquitter des responsabilités de l\'AAI.', isCorrect: true },
  ],
  answerType: 'single',
  explanation: 'Collectivement, l\'AAI devrait posséder les compétences, les connaissances et l\'expérience nécessaires pour mener à bien ses activités. L\'AAI peut faire appel à des ressources internes et externes qualifiées.',
  difficulty: 'easy',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-competence',
  status: 'unseen',
};

// Question 44 - Answer: B
export const question44: Question = {
  id: 'cia-p1-eb1-q-044',
  number: 44,
  text: 'Les normes de l\'IIA exigent que les auditeurs internes possèdent les connaissances, les compétences et les disciplines essentielles pour effectuer un audit. Lequel des énoncés suivants est vrai compte tenu du niveau de connaissances ou de compétences exigé par les normes ? Les auditeurs internes doivent :\nI. Être compétent dans l\'application des normes et procédures d\'audit à des situations spécifiques sans avoir recours à la recherche et à l\'assistance techniques à grande échelle.\nII. Maîtriser les principes comptables lors de l\'audit des registres et des rapports financiers de l\'organisation.\nIII. Maîtriser l\'application des connaissances de la comptabilité et des systèmes d\'information informatisés à des problèmes spécifiques ou potentiels.',
  answers: [
    { id: 'a', text: 'I seulement.', isCorrect: false },
    { id: 'b', text: 'I et II seulement.', isCorrect: true },
    { id: 'c', text: 'II et III seulement.', isCorrect: false },
    { id: 'd', text: 'I, II et III.', isCorrect: false },
  ],
  answerType: 'single',
  explanation: 'Les points I et II sont corrects. Les auditeurs internes doivent avoir une appréciation, et non une compétence, de la comptabilité et des systèmes d\'information informatisés.',
  difficulty: 'medium',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-competence',
  status: 'unseen',
};

// Question 45 - Answer: C
export const question45: Question = {
  id: 'cia-p1-eb1-q-045',
  number: 45,
  text: 'Dans le cadre du contrôle de la qualité, l\'objectif premier de la formation professionnelle continue est de permettre à l\'activité d\'audit interne de fournir à son personnel :',
  answers: [
    { id: 'a', text: 'Formation technique pour que ses auditeurs internes soient des experts en évaluation.', isCorrect: false },
    { id: 'b', text: 'La formation professionnelle nécessaire à l\'exécution d\'une mission avec toute l\'attention professionnelle requise.', isCorrect: false },
    { id: 'c', text: 'Connaissances requises pour s\'acquitter des responsabilités assignées.', isCorrect: true },
    { id: 'd', text: 'Connaissances requises pour effectuer un examen par les pairs.', isCorrect: false },
  ],
  answerType: 'single',
  explanation: 'Une formation professionnelle continue est nécessaire pour que les auditeurs internes aient les connaissances et les compétences nécessaires pour s\'acquitter des responsabilités qui leur sont confiées.',
  difficulty: 'medium',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-competence',
  status: 'unseen',
};

// Question 46 - Answer: D
export const question46: Question = {
  id: 'cia-p1-eb1-q-046',
  number: 46,
  text: 'Lorsqu\'un auditeur interne n\'est pas qualifié pour exécuter une mission, il doit :',
  answers: [
    { id: 'a', text: 'Acquérir les connaissances et les compétences requises.', isCorrect: false },
    { id: 'b', text: 'Proposez quelqu\'un d\'autre qui est qualifié pour effectuer le travail.', isCorrect: false },
    { id: 'c', text: 'Refuser les fiançailles.', isCorrect: false },
    { id: 'd', text: 'L\'une ou l\'autre de ces réponses.', isCorrect: true },
  ],
  answerType: 'single',
  explanation: 'L\'une ou l\'autre de ces réponses serait acceptable selon les circonstances.',
  difficulty: 'easy',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-competence',
  status: 'unseen',
};

// Question 47 - Answer: A
export const question47: Question = {
  id: 'cia-p1-eb1-q-047',
  number: 47,
  text: 'Lors de l\'embauche d\'un auditeur interne éventuel, il faut obtenir une assurance raisonnable quant aux qualifications et à la compétence du candidat. Lequel des éléments suivants est l\'application la moins utile de ce principe ?',
  answers: [
    { id: 'a', text: 'Déterminer que tous les candidats sont titulaires d\'un diplôme en comptabilité.', isCorrect: true },
    { id: 'b', text: 'Obtenir des relevés de notes d\'université.', isCorrect: false },
    { id: 'c', text: 'Vérification des références d\'un candidat.', isCorrect: false },
    { id: 'd', text: 'Déterminer l\'expérience professionnelle antérieure.', isCorrect: false },
  ],
  answerType: 'single',
  explanation: 'Il n\'est pas nécessaire que chaque membre du personnel d\'audit interne possède un diplôme en comptabilité. L\'activité d\'audit interne doit posséder ou acquérir collectivement les connaissances, les aptitudes et les autres compétences nécessaires.',
  difficulty: 'easy',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-competence',
  status: 'unseen',
};

// Question 48 - Answer: C
export const question48: Question = {
  id: 'cia-p1-eb1-q-048',
  number: 48,
  text: 'L\'activité d\'audit interne (AAI) peut jouer un rôle important dans la prévention et la détection des fraudes importantes en se voyant confier toutes les tâches suivantes, sauf laquelle ?',
  answers: [
    { id: 'a', text: 'Examinez les dépenses importantes, anormales ou inexpliquées.', isCorrect: false },
    { id: 'b', text: 'Examinez les dépenses délicates comme les frais juridiques, les honoraires d\'experts-conseils et les commissions de vente à l\'étranger.', isCorrect: false },
    { id: 'c', text: 'Passez en revue toutes les fonctions de contrôle relatives aux rentrées de petite caisse.', isCorrect: true },
    { id: 'd', text: 'Examiner les contributions de l\'organisation qui semblent inhabituelles.', isCorrect: false },
  ],
  answerType: 'single',
  explanation: 'L\'auditeur interne doit faire preuve de la diligence professionnelle requise en tenant compte de la complexité, de l\'importance relative ou de l\'importance des questions. Le coût de l\'assurance par rapport aux avantages potentiels devrait également être pris en compte. L\'examen de tous les contrôles relatifs à la petite caisse serait considéré comme excessif et inefficace.',
  difficulty: 'medium',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-competence',
  status: 'unseen',
};

export const question49: Question = {
  id: 'cia-p1-eb1-q-049',
  number: 49,
  text: 'Un nouveau Responsable de l’Audit Interne (RAI) remet en question le recours généralisé aux tests de conformité en magasin, déclarant que l\'approche ne tient pas compte des concepts d\'importance relative. Lesquels des énoncés suivants sont valides en réponse aux réclamations du RAI ?',
  answers: [
    { id: 'a', text: 'I seulement.', isCorrect: true },
    { id: 'b', text: 'III seulement.', isCorrect: false },
    { id: 'c', text: 'I et II seulement.', isCorrect: false },
    { id: 'd', text: 'I, II et III.', isCorrect: false },
  ],
  answerType: 'single',
  explanation: 'Seul l’énoncé I est correct : l’importance relative concerne l’impact sur l’ensemble de l’organisation. II est faux car un écart n’est pas automatiquement significatif, et III est faux car l’échantillonnage peut couvrir efficacement la structure de contrôle.',
  difficulty: 'medium',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-competence',
  status: 'unseen',
};

export const question50: Question = {
  id: 'cia-p1-eb1-q-050',
  number: 50,
  text: 'Un auditeur interne publie un rapport final portant sur l\'évaluation des procédures visant à accroître la diversité. Au titre de la diligence professionnelle requise, quel suivi doit-il effectuer ?',
  answers: [
    { id: 'a', text: 'Vérifier si le client a suivi les recommandations de l’auditeur interne.', isCorrect: false },
    { id: 'b', text: 'Vérifier si l\'organisation est conforme à ses politiques de diversité.', isCorrect: false },
    { id: 'c', text: 'Vérifier si le client a tenu compte des constatations et a pris des mesures pour améliorer la diversité.', isCorrect: true },
    { id: 'd', text: 'Tout ce qui précède.', isCorrect: false },
  ],
  answerType: 'single',
  explanation: 'La diligence professionnelle requise implique de vérifier si la direction a tenu compte des constatations et a pris des mesures appropriées, sans exiger qu’elle applique toutes les recommandations.',
  difficulty: 'medium',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-competence',
  status: 'unseen',
};

export const question51: Question = {
  id: 'cia-p1-eb1-q-051',
  number: 51,
  text: 'En ce qui concerne les missions d’assurance, il faut faire preuve de la diligence professionnelle requise :',
  answers: [
    { id: 'a', text: 'Un examen détaillé de toutes les transactions.', isCorrect: false },
    { id: 'b', text: 'L’infaillibilité et une performance extraordinaire.', isCorrect: false },
    { id: 'c', text: 'La prise en compte de la possibilité d’irrégularités matérielles.', isCorrect: true },
    { id: 'd', text: 'Des essais suffisamment détaillés pour donner l’assurance absolue.', isCorrect: false },
  ],
  answerType: 'single',
  explanation: 'La diligence professionnelle implique de considérer la possibilité d’erreurs matérielles mais ne requiert ni infallibilité ni examen exhaustif.',
  difficulty: 'medium',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-competence',
  status: 'unseen',
};

export const question52: Question = {
  id: 'cia-p1-eb1-q-052',
  number: 52,
  text: "Le travail effectué par l'auditeur interne fait l'objet d'un soin professionnel approprié. Par exemple, le soin professionnel requis dans le cadre d'un examen des contrôles internes à l'égard de l'information financière devrait tenir compte de tous les éléments suivants, sauf les suivants :",
  answers: [
    { id: 'a', text: "Le contenu des documents de travail est suffisant pour étayer l'opinion de l'auditeur interne.", isCorrect: false },
    { id: 'b', text: "Les éléments probants contenus dans les documents de travail sont principalement utilisés pour protéger la société dans le cas d'une poursuite intentée par des investisseurs.", isCorrect: true },
    { id: 'c', text: "La probabilité d'erreurs significatives, de fraude ou de non-conformité.", isCorrect: false },
    { id: 'd', text: "Le coût de la mission par rapport aux avantages potentiels.", isCorrect: false },
  ],
  answerType: 'single',
  explanation: "La protection juridique future de l’entreprise ne fait pas partie du soin professionnel requis. Les autres éléments relèvent bien de la diligence professionnelle.",
  difficulty: 'medium',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-competence',
  status: 'unseen',
};

export const question53: Question = {
  id: 'cia-p1-eb1-q-053',
  number: 53,
  text: "Lorsqu'il a recours aux services d'un fournisseur de services externe, le RAI doit :",
  answers: [
    { id: 'a', text: "Participer à l'embauche du fournisseur de services.", isCorrect: false },
    { id: 'b', text: "Vérifier que le fournisseur de services possède la désignation du CIA.", isCorrect: false },
    { id: 'c', text: "Évaluer les compétences et la réputation du fournisseur de services.", isCorrect: true },
    { id: 'd', text: "Vérifier si le fournisseur de services connaît les normes d’audit interne.", isCorrect: false },
  ],
  answerType: 'single',
  explanation: "Le RAI doit évaluer les compétences et la réputation du fournisseur externe. Les autres exigences ne sont pas obligatoires.",
  difficulty: 'medium',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-competence',
  status: 'unseen',
};

export const question54: Question = {
  id: 'cia-p1-eb1-q-054',
  number: 54,
  text: "Un auditeur interne devrait avoir une idée de quelle discipline ?",
  answers: [
    { id: 'a', text: "Méthodes quantitatives.", isCorrect: true },
    { id: 'b', text: "Techniques d'audit.", isCorrect: false },
    { id: 'c', text: "Procédures d'audit.", isCorrect: false },
    { id: 'd', text: "Normes d’audit interne.", isCorrect: false },
  ],
  answerType: 'single',
  explanation: "Les auditeurs internes doivent comprendre les méthodes quantitatives, en plus d'être compétents dans les autres domaines cités.",
  difficulty: 'easy',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-competence',
  status: 'unseen',
};

export const question55: Question = {
  id: 'cia-p1-eb1-q-055',
  number: 55,
  text: "Un auditeur interne a réalisé une mission sur les opérations de caisse d’un magasin. Laquelle des actions suivantes serait considérée comme manquant de soins professionnels appropriés ?",
  answers: [
    { id: 'a', text: "Un organigramme a été élaboré et seul un échantillon de transactions a été testé.", isCorrect: false },
    { id: 'b', text: "Le rapport incluait une recommandation soutenue en faveur d'une réduction des effectifs, malgré l’impact sur le moral.", isCorrect: false },
    { id: 'c', text: "Le rapport assure la direction qu'il n'y a aucune irrégularité en raison d’un système de contrôle interne très développé.", isCorrect: true },
    { id: 'd', text: "L’auditeur a informé les autorités internes de soupçons de faute, sans rapporter à l’externe.", isCorrect: false },
  ],
  answerType: 'single',
  explanation: "Un auditeur ne peut jamais garantir l’absence d'irrégularités. Cela constitue un manque de diligence professionnelle.",
  difficulty: 'medium',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-competence',
  status: 'unseen',
};

export const question56: Question = {
  id: 'cia-p1-eb1-q-056',
  number: 56,
  text: "Une fraude récemment révélée n’a pas été détectée lors d’une mission d’audit. La transaction frauduleuse ne faisait pas partie de l’échantillon statistique pourtant bien conçu. Quel énoncé s'applique ?",
  answers: [
    { id: 'a', text: "Un contrôle à 100 % des opérations aurait dû être réalisé.", isCorrect: false },
    { id: 'b', text: "L'auditeur interne a agi avec diligence car l'échantillon statistique était approprié.", isCorrect: true },
    { id: 'c', text: "La fraude n’aurait pas dû passer inaperçue dans une zone examinée.", isCorrect: false },
    { id: 'd', text: "L’auditeur interne doit être tenu responsable de la surveillance dans ce cas.", isCorrect: false },
  ],
  answerType: 'single',
  explanation: "Un échantillonnage approprié donne une assurance raisonnable, pas absolue. La diligence professionnelle a donc été respectée.",
  difficulty: 'medium',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-competence',
  status: 'unseen',
};

export const question57: Question = {
  id: 'cia-p1-eb1-q-057',
  number: 57,
  text: "Le RAI d'une entreprise de fabrication a interviewé une personne pour un poste d'employé. La personne possède de solides connaissances en comptabilité et en finances, mais une connaissance limitée des systèmes de gestion de l'environnement (SME). Quelle est la mesure la plus appropriée que le RAI doit prendre ?",
  answers: [
    { id: 'a', text: "Rejeter l'individu en raison de son manque de connaissance du SME.", isCorrect: false },
    { id: 'b', text: "Offrir à la personne un poste malgré le manque de connaissance du SME.", isCorrect: false },
    { id: 'c', text: "Encourager la personne à obtenir une formation supplémentaire sur le SME, puis à présenter une nouvelle demande.", isCorrect: false },
    { id: 'd', text: "Offrir un poste à la personne si les autres membres du personnel ont une connaissance suffisante du SME.", isCorrect: true },
  ],
  answerType: 'single',
  explanation: "Le RAI peut embaucher la personne si l’équipe possède déjà la compétence SME nécessaire. Les normes n’exigent pas que chaque auditeur maîtrise tous les sujets.",
  difficulty: 'medium',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-competence',
  status: 'unseen',
};

export const question58: Question = {
  id: 'cia-p1-eb1-q-058',
  number: 58,
  text: "Un auditeur interne récemment embauché examine la gestion de la trésorerie alors qu'il n'a pas d'expérience dans ce domaine. Dans quelles conditions cet arrangement serait-il approprié ?",
  answers: [
    { id: 'a', text: "I seulement.", isCorrect: true },
    { id: 'b', text: "I et II.", isCorrect: false },
    { id: 'c', text: "II seulement.", isCorrect: false },
    { id: 'd', text: "Ni I ni II.", isCorrect: false },
  ],
  answerType: 'single',
  explanation: "L’auditeur interne peut réaliser la mission si un auditeur senior compétent supervise étroitement. L’examen du rapport seul ne constitue pas une supervision suffisante.",
  difficulty: 'medium',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-competence',
  status: 'unseen',
};

export const question59: Question = {
  id: 'cia-p1-eb1-q-059',
  number: 59,
  text: "Si les auditeurs internes ne parviennent pas à maintenir leur compétence grâce à la formation professionnelle continue, ils pourraient être reconnus coupables d'une infraction :",
  answers: [
    { id: 'a', text: "Les Normes internationales pour la pratique professionnelle de l'audit interne.", isCorrect: false },
    { id: 'b', text: "Le code d'éthique de l'IIA.", isCorrect: false },
    { id: 'c', text: "Les normes et le code de déontologie de l'IIA.", isCorrect: true },
    { id: 'd', text: "Aucune de ces réponses.", isCorrect: false },
  ],
  answerType: 'single',
  explanation: "Ne pas maintenir ses compétences viole à la fois les Normes (1230) et le Code de déontologie (règles 4.2 et 4.3).",
  difficulty: 'easy',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-competence',
  status: 'unseen',
};

export const question60: Question = {
  id: 'cia-p1-eb1-q-060',
  number: 60,
  text: "Un auditeur interne soupçonne que les états financiers sont erronés, mais ne dispose pas de preuves concluantes. Il n'a pas fait preuve de diligence professionnelle requise s'il :",
  answers: [
    { id: 'a', text: "Détermine les façons possibles dont une inexactitude pourrait se produire et classe les éléments à investiguer.", isCorrect: false },
    { id: 'b', text: "N'a pas vérifié des inexactitudes possibles parce que le programme de travail avait déjà été approuvé.", isCorrect: true },
    { id: 'c', text: "Informe le responsable de mission et demande conseil.", isCorrect: false },
    { id: 'd', text: "Élargit le programme de travail sans l'approbation du client afin d'examiner les causes possibles.", isCorrect: false },
  ],
  answerType: 'single',
  explanation: "L’approbation préalable du programme ne dispense jamais l’auditeur d’investiguer lorsqu'un risque apparaît. Ne pas enquêter viole la diligence professionnelle.",
  difficulty: 'medium',
  topic: 'cia-p1-exam-blanc-1',
  chapter: 'cia-p1-eb1-competence',
  status: 'unseen',
};

export const question61: Question = {
  id: 'cia-p1-eb1-q-061',
  number: 61,
  text: "Les évaluations de la qualité des programmes peuvent être effectuées à l'interne ou à l'externe. L'une des caractéristiques distinctives d'une évaluation externe est son objectif :",
  answers: [
    { id: 'a', text: "Fournir une assurance indépendante.", isCorrect: true },
    { id: 'b', text: "Présenter les recommandations d'amélioration.", isCorrect: false },
    { id: 'c', text: "Déterminer si les services d’audit interne répondent aux normes professionnelles.", isCorrect: false },
    { id: 'd', text: "Identifier les tâches qui peuvent être mieux exécutées.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "L'évaluation externe vise principalement à fournir une assurance indépendante sur la conformité de l'AAI aux Normes (PA 1312-1).",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-qualite",
  status: "unseen",
};

export const question62: Question = {
  id: 'cia-p1-eb1-q-062',
  number: 62,
  text: "L'évaluation externe d'une activité d'audit interne n'est pas susceptible d'évaluer :",
  answers: [
    { id: 'a', text: "Les outils et techniques utilisés par l'activité d'audit interne.", isCorrect: false },
    { id: 'b', text: "Analyse coûts-avantages détaillée de l'activité d'audit interne.", isCorrect: true },
    { id: 'c', text: "Respect des Normes pour la pratique professionnelle internationale de l'audit interne.", isCorrect: false },
    { id: 'd', text: "Respect de la charte de l'activité d'audit interne.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Une évaluation externe couvre un champ large incluant outils, normes et charte. Une analyse coûts-avantages détaillée ne fait pas partie de son champ.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-qualite",
  status: "unseen",
};

export const question63: Question = {
  id: 'cia-p1-eb1-q-063',
  number: 63,
  text: "Un client mission se plaint qu’un auditeur interne prend trop de temps et manque de but clair. Que doit considérer le RAI ?",
  answers: [
    { id: 'a', text: "Promettre que l'auditeur interne terminera le travail dans une semaine.", isCorrect: false },
    { id: 'b', text: "Si les procédures internes garantissent une planification et une assurance qualité adéquates.", isCorrect: true },
    { id: 'c', text: "Présenter immédiatement une défense de l'auditeur interne.", isCorrect: false },
    { id: 'd', text: "Ignorer la plainte mais la documenter.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Le RAI doit d'abord vérifier si les processus internes (planification et AQ) fonctionnent correctement avant toute action.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-qualite",
  status: "unseen",
};

export const question64: Question = {
  id: 'cia-p1-eb1-q-064',
  number: 64,
  text: "À l’issue d’une évaluation externe du programme qualité de l’AAI, un rapport doit exprimer une opinion sur :",
  answers: [
    { id: 'a', text: "Adéquation du contrôle interne.", isCorrect: false },
    { id: 'b', text: "Efficacité de la couverture de l'audit interne.", isCorrect: false },
    { id: 'c', text: "Conformité à la charte de l'AAI.", isCorrect: false },
    { id: 'd', text: "Conformité de l’activité d’audit interne aux Normes.", isCorrect: true },
  ],
  answerType: "single",
  explanation: "L'évaluation externe exprime une opinion sur la conformité globale à la définition, au Code de déontologie et aux Normes (PA 1312-1.10).",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-qualite",
  status: "unseen",
};

export const question65: Question = {
  id: 'cia-p1-eb1-q-065',
  number: 65,
  text: "Les évaluations du rendement des auditeurs externes de l'organisation devraient :",
  answers: [
    { id: 'a', text: "Ne doit être effectuée qu'au moment de la nomination de l’auditeur externe.", isCorrect: false },
    { id: 'b', text: "Ne pas inclure la participation de l'activité d'audit interne.", isCorrect: false },
    { id: 'c', text: "N'inclure l'activité d’audit interne que lorsque l’auditeur externe est nommé.", isCorrect: false },
    { id: 'd', text: "Inclure l'activité d'audit interne lors de la nomination et régulièrement ensuite.", isCorrect: true },
  ],
  answerType: "single",
  explanation: "Le conseil peut demander à l’AAI de participer à l’évaluation de l’auditeur externe, y compris son indépendance, au moins une fois par an.",
  difficulty: "easy",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-qualite",
  status: "unseen",
};

export const question66: Question = {
  id: 'cia-p1-eb1-q-066',
  number: 66,
  text: "Selon les normes, quelle est l'interprétation correcte relative à l'assurance de la qualité ?",
  answers: [
    { id: 'a', text: "L’AAI est principalement mesurée en fonction du Code de déontologie de l’IIA.", isCorrect: false },
    { id: 'b', text: "Les évaluations externes peuvent fournir une assurance indépendante de la qualité de l’AAI.", isCorrect: true },
    { id: 'c', text: "La supervision continue se limite à la planification, l'examen, l'évaluation, la communication et le suivi.", isCorrect: false },
    { id: 'd', text: "Le suivi d'une évaluation externe relève du superviseur du RAI.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Les évaluations externes fournissent une assurance indépendante sur la conformité et la qualité globale de l’AAI.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-qualite",
  status: "unseen",
};

export const question67: Question = {
  id: 'cia-p1-eb1-q-067',
  number: 67,
  text: "Laquelle des personnes suivantes pourrait être prise en considération dans le cadre d'un examen externe périodique de l'AAI au bureau régional d'une organisation ?",
  answers: [
    { id: 'a', text: "I et II seulement.", isCorrect: false },
    { id: 'b', text: "II et III seulement.", isCorrect: false },
    { id: 'c', text: "I, II, III et IV.", isCorrect: false },
    { id: 'd', text: "I, II et IV seulement.", isCorrect: true },
  ],
  answerType: "single",
  explanation: "I. Un auditeur du siège peut participer. II. Un pair d’une autre AAI peut participer. IV. Un comptable agréé expérimenté en audit interne peut participer. III est exclu car le conseiller fiscal n'a pas d'expérience en audit.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-qualite",
  status: "unseen",
};

export const question68: Question = {
  id: 'cia-p1-eb1-q-068',
  number: 68,
  text: "Les procédures décrivant comment l'examen de supervision des auditeurs internes sera effectué devraient être entièrement documentées afin que l'activité d'audit interne :",
  answers: [
    { id: 'a', text: "Avoir une base pour les promotions, les augmentations de salaire ou les mesures disciplinaires.", isCorrect: false },
    { id: 'b', text: "Avoir la justification de son programme de qualité.", isCorrect: false },
    { id: 'c', text: "Se conformer aux normes.", isCorrect: false },
    { id: 'd', text: "Dispose d'un cadre cohérent pour l'évaluation des performances du personnel.", isCorrect: true },
  ],
  answerType: "single",
  explanation: "La documentation des procédures de supervision assure un cadre cohérent pour l’évaluation des performances du personnel conformément aux normes et au code de déontologie.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-qualite",
  status: "unseen",
};

export const question69: Question = {
  id: 'cia-p1-eb1-q-069',
  number: 69,
  text: "Lors du premier examen externe d'assurance qualité, quelle activité pourrait influer sur l'évaluation de l'objectivité des auditeurs internes ?",
  answers: [
    { id: 'a', text: "Un auditeur interne accepte un travail de comptabilité à temps partiel pour un gestionnaire de la paie à tarif réduit.", isCorrect: true },
    { id: 'b', text: "L'auditeur interne reçoit une tasse commémorative symbolique de l'organisation.", isCorrect: false },
    { id: 'c', text: "L'auditeur interne examine des procédures après leur mise en œuvre sur demande du client.", isCorrect: false },
    { id: 'd', text: "L'auditeur interne conseille un groupe de travail sur les techniques de contrôle appropriées.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Accepter un travail rémunéré ou un cadeau peut nuire à l'objectivité perçue de l'auditeur, même pour les missions futures.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-qualite",
  status: "unseen",
};

export const question70: Question = {
  id: 'cia-p1-eb1-q-070',
  number: 70,
  text: "L'IIA a publié 'The Three Lines of Defense in Effective Risk Management and Control'. Quel est l'objet principal du document ?",
  answers: [
    { id: 'a', text: "Fournir un moyen simple et efficace d'améliorer les communications sur la gestion et le contrôle des risques.", isCorrect: true },
    { id: 'b', text: "Présenter les fonctions du comité d’audit.", isCorrect: false },
    { id: 'c', text: "Décrire les fonctions de contrôle de l'activité d'audit interne.", isCorrect: false },
    { id: 'd', text: "Alerter la direction opérationnelle des questions émergentes et de l'évolution des risques.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Le document vise à simplifier et améliorer la communication sur la gestion et le contrôle des risques au sein de l'organisation.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-qualite",
  status: "unseen",
};

export const question71: Question = {
  id: 'cia-p1-eb1-q-071',
  number: 71,
  text: "Lequel des énoncés suivants décrit le mieux la gouvernance organisationnelle ?",
  answers: [
    { id: 'a', text: "La gouvernance organisationnelle est la façon dont les entreprises sont planifiées et dirigées.", isCorrect: false },
    { id: 'b', text: "La gouvernance organisationnelle est l'ensemble des processus et des structures mis en œuvre par le conseil pour informer, diriger, gérer et surveiller l'atteinte de ses objectifs.", isCorrect: true },
    { id: 'c', text: "La gouvernance organisationnelle comprend le suivi et la réduction au minimum des lacunes en matière de contrôle.", isCorrect: false },
    { id: 'd', text: "Les processus de gouvernance organisationnelle sont fondés sur des règles plutôt que sur des principes.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "La gouvernance organisationnelle est définie par le Glossaire des normes de l'IIA comme l'ensemble des processus et structures mis en œuvre par le conseil pour informer, diriger, gérer et surveiller l'atteinte des objectifs.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-governance",
  status: "unseen",
};

export const question72: Question = {
  id: 'cia-p1-eb1-q-072',
  number: 72,
  text: "Le rôle de l’audit interne comprendrait tous les éléments suivants, à l'exception des suivants :",
  answers: [
    { id: 'a', text: "Examiner la documentation existante sur la gouvernance.", isCorrect: false },
    { id: 'b', text: "Élaborer le plan d’audit.", isCorrect: false },
    { id: 'c', text: "Signaler les violations aux autorités extérieures.", isCorrect: true },
    { id: 'd', text: "Exécuter le plan d’audit approuvé.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "En général, l'audit interne n'est pas chargé de signaler les violations aux autorités externes, sauf obligation légale ou instruction spécifique.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-governance",
  status: "unseen",
};

export const question73: Question = {
  id: 'cia-p1-eb1-q-073',
  number: 73,
  text: "L'environnement de contrôle d'une entreprise est le fondement d'un système de contrôle interne efficace. Lequel des éléments suivants n'est pas une composante de l'environnement de contrôle ?",
  answers: [
    { id: 'a', text: "Philosophie de gestion et style de fonctionnement.", isCorrect: false },
    { id: 'b', text: "Intégrité et valeurs éthiques.", isCorrect: false },
    { id: 'c', text: "Formuler des objectifs d'affaires.", isCorrect: true },
    { id: 'd', text: "Compétence du personnel.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "La formulation des objectifs commerciaux n'est pas une composante de l'environnement de contrôle; elle intervient après l'évaluation de cet environnement.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-controle",
  status: "unseen",
};

export const question74: Question = {
  id: 'cia-p1-eb1-q-074',
  number: 74,
  text: "Lequel des éléments suivants représente la meilleure structure de gouvernance ?",
  answers: [
    { id: 'a', text: "Direction: Responsabilité du risque, Conseil et comité d'audit: Rôle de supervision, Audit interne: Rôle de conseil", isCorrect: true },
    { id: 'b', text: "Direction: Rôle de supervision, Conseil et comité d'audit: Responsabilité du risque, Audit interne: Rôle de conseil", isCorrect: false },
    { id: 'c', text: "Direction: Responsabilité du risque, Conseil et comité d'audit: Rôle de conseil, Audit interne: Rôle de supervision", isCorrect: false },
    { id: 'd', text: "Direction: Rôle de supervision, Conseil et comité d'audit: Rôle de conseil, Audit interne: Responsabilité du risque", isCorrect: false },
  ],
  answerType: "single",
  explanation: "La direction générale gère les risques, le conseil et le comité d’audit supervisent, et l’audit interne fournit conseil et surveillance.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-governance",
  status: "unseen",
};

export const question75: Question = {
  id: 'cia-p1-eb1-q-075',
  number: 75,
  text: "Les méthodes d'évaluation du climat éthique d'une organisation comprennent toutes les méthodes suivantes, à l'exception de :",
  answers: [
    { id: 'a', text: "Examiner les politiques et les processus liés à l'éthique.", isCorrect: false },
    { id: 'b', text: "Réalisation d'un sondage sur l'éthique.", isCorrect: false },
    { id: 'c', text: "Faciliter un programme de formation lié à l'éthique.", isCorrect: true },
    { id: 'd', text: "Effectuer des vérifications de fonctions précises liées à l'éthique.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Faciliter un programme de formation lié à l'éthique promeut un climat éthique mais ne constitue pas une méthode d’évaluation.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-ethique",
  status: "unseen",
};

export const question76: Question = {
  id: 'cia-p1-eb1-q-076',
  number: 76,
  text: "La responsabilité sociale des entreprises (RSE) reconnaît :",
  answers: [
    { id: 'a', text: "Les entreprises ont une responsabilité quant à leur impact sur la société et l'environnement.", isCorrect: true },
    { id: 'b', text: "L'environnement naturel est l'objectif premier de chaque organisation.", isCorrect: false },
    { id: 'c', text: "Les droits de l'homme sont appliqués par les gouvernements nationaux.", isCorrect: false },
    { id: 'd', text: "Les entreprises doivent accorder la même attention aux intérêts des actionnaires.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "La RSE implique que les entreprises prennent en compte l'impact social et environnemental de leurs activités, en complément de leurs objectifs économiques.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-rse",
  status: "unseen",
};

export const question77: Question = {
  id: 'cia-p1-eb1-q-077',
  number: 77,
  text: "L'un des plus grands défis de la responsabilité sociale des entreprises (RSE) est :",
  answers: [
    { id: 'a', text: "Identifier les différents groupes qui ont un intérêt légitime dans la société.", isCorrect: false },
    { id: 'b', text: "Décider de l'information à communiquer.", isCorrect: true },
    { id: 'c', text: "Identifier les questions financières qui préoccupent les parties prenantes.", isCorrect: false },
    { id: 'd', text: "Décider du rôle de l'audit interne dans la RSE.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Un des plus grands défis de la RSE est de décider quelles informations communiquer, car il n’existe pas de normes universelles comme pour les rapports financiers.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-rse",
  status: "unseen",
};

export const question78: Question = {
  id: 'cia-p1-eb1-q-078',
  number: 78,
  text: "Lequel des éléments suivants ne serait pas une critique de la RSE ?",
  answers: [
    { id: 'a', text: "C'est trop coûteux.", isCorrect: false },
    { id: 'b', text: "Le concept de RSE manque de clarté.", isCorrect: false },
    { id: 'c', text: "Cela peut améliorer la réputation de la marque.", isCorrect: true },
    { id: 'd', text: "Le profit l'emporte sur les principes.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Améliorer la réputation de la marque est un avantage de la RSE, non une critique.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-rse",
  status: "unseen",
};

export const question79: Question = {
  id: 'cia-p1-eb1-q-079',
  number: 79,
  text: "Le rôle de l'AAI au sein d'une organisation peut englober tous les éléments suivants, sauf :",
  answers: [
    { id: 'a', text: "Vérification du processus de gestion des risques dans le cadre du plan d’audit interne.", isCorrect: false },
    { id: 'b', text: "Gérer et coordonner le risque d'une opération commerciale.", isCorrect: true },
    { id: 'c', text: "Fournir un soutien et une participation continus au processus de gestion des risques.", isCorrect: false },
    { id: 'd', text: "Aucun rôle.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "L'AAI peut fournir un soutien et participer au processus, mais la gestion effective des risques est une responsabilité de la direction.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-risk",
  status: "unseen",
};

export const question80: Question = {
  id: 'cia-p1-eb1-q-080',
  number: 80,
  text: "Lequel des énoncés suivants est le plus exact en ce qui concerne le risque inhérent ?",
  answers: [
    { id: 'a', text: "La direction peut éliminer le risque inhérent en prenant des mesures d'atténuation.", isCorrect: false },
    { id: 'b', text: "Le risque inhérent est le niveau de risque qui demeure après que la direction a pris des mesures pour atténuer le risque.", isCorrect: false },
    { id: 'c', text: "Le risque inhérent entraîne des pertes plus importantes que le risque opérationnel.", isCorrect: false },
    { id: 'd', text: "Aucune de ces réponses.", isCorrect: true },
  ],
  answerType: "single",
  explanation: "Le risque inhérent correspond au niveau de risque avant que des mesures d'atténuation ne soient prises, donc aucune des réponses proposées n'est correcte.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-risk",
  status: "unseen",
};

export const question81: Question = {
  id: 'cia-p1-eb1-q-081',
  number: 81,
  text: "Le conseil d'administration craint que la réputation de l'entreprise ne s'en ressente si un jouet pour enfants n'est pas sécuritaire. Ce qui préoccupe le conseil, c'est qu'il n'y a pas de problème :",
  answers: [
    { id: 'a', text: "Risque financier.", isCorrect: false },
    { id: 'b', text: "Risque opérationnel.", isCorrect: false },
    { id: 'c', text: "Risque stratégique.", isCorrect: true },
    { id: 'd', text: "Risque de danger.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Le risque de réputation est un risque stratégique, car il affecte la confiance et la position de l'entreprise sur le marché.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-risk",
  status: "unseen",
};

export const question82: Question = {
  id: 'cia-p1-eb1-q-082',
  number: 82,
  text: "La première étape du processus de gestion des risques est l'identification des risques. Lequel des événements suivants constitue un risque interne ?",
  answers: [
    { id: 'a', text: "La perte d'employés clés.", isCorrect: true },
    { id: 'b', text: "Nouveaux règlements.", isCorrect: false },
    { id: 'c', text: "Évolution démographique.", isCorrect: false },
    { id: 'd', text: "Augmentation de l'inflation.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "La perte d'employés clés est un événement à risque interne; les autres sont externes.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-risk",
  status: "unseen",
};


export const question83: Question = {
  id: 'cia-p1-eb1-q-083',
  number: 83,
  text: "Laquelle des techniques suivantes n'est pas une technique d'identification des risques ?",
  answers: [
    { id: 'a', text: "Organiser une séance de remue-méninges.", isCorrect: false },
    { id: 'b', text: "Effectuer un échantillonnage variable.", isCorrect: true },
    { id: 'c', text: "Effectuer une analyse de scénarios.", isCorrect: false },
    { id: 'd', text: "Analyser la rétroaction provenant des questionnaires et enquêtes sur les risques.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "L'échantillonnage variable est une méthode statistique, pas une technique d'identification des risques.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-risk",
  status: "unseen",
};

export const question84: Question = {
  id: 'cia-p1-eb1-q-084',
  number: 84,
  text: "Le montant payé par l'assuré dans une police d'assurance avec franchise est quel type de risque ?",
  answers: [
    { id: 'a', text: "Risque opérationnel.", isCorrect: false },
    { id: 'b', text: "Risque inhérent.", isCorrect: false },
    { id: 'c', text: "Risque résiduel.", isCorrect: true },
    { id: 'd', text: "Risque transactionnel.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Le risque résiduel est le risque qui subsiste après que la direction a pris des mesures pour atténuer le risque.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-risk",
  status: "unseen",
};


export const question85: Question = {
  id: 'cia-p1-eb1-q-085',
  number: 85,
  text: "Différence entre la perte prévue et la perte imprévue :",
  answers: [
    { id: 'a', text: "La perte prévue est maximale, la perte imprévue minimale.", isCorrect: false },
    { id: 'b', text: "La perte prévue est la perte attendue, la perte imprévue est la perte supplémentaire possible lors d'une très mauvaise année.", isCorrect: true },
    { id: 'c', text: "La perte prévue est la perte attendue, la perte imprévue est la perte la plus probable dans le pire scénario.", isCorrect: false },
    { id: 'd', text: "La perte prévue survient à court terme, la perte imprévue à long terme.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "La perte prévue correspond au montant attendu en moyenne; la perte imprévue est ce qui pourrait survenir au-delà de la perte prévue dans une année exceptionnellement mauvaise.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-risk",
  status: "unseen",
};

export const question86: Question = {
  id: 'cia-p1-eb1-q-086',
  number: 86,
  text: "La valeur à risque (VaR) est utilisée pour toutes les raisons suivantes, sauf :",
  answers: [
    { id: 'a', text: "Mesurer et contrôler le niveau de risque que l'entreprise prend.", isCorrect: false },
    { id: 'b', text: "Mesurer et contrôler la distribution des queues de lard d'une entreprise.", isCorrect: true },
    { id: 'c', text: "Donner à la direction l'assurance que le niveau de perte ne sera pas dépassé.", isCorrect: false },
    { id: 'd', text: "Veiller à ce que les risques ne soient pas pris au-delà de la capacité d'absorber les pertes.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "La VaR est basée sur une distribution normale; elle ne contrôle pas directement les distributions à queue épaisse ou asymétriques.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-risk",
  status: "unseen",
};

export const question87: Question = {
  id: 'cia-p1-eb1-q-087',
  number: 87,
  text: "Lorsque certains risques sont corrélés négativement, quelle est la meilleure ligne de conduite ?",
  answers: [
    { id: 'a', text: "Compenser le risque.", isCorrect: false },
    { id: 'b', text: "Mettre en place des contrôles supplémentaires.", isCorrect: false },
    { id: 'c', text: "Concevoir une stratégie de couverture.", isCorrect: false },
    { id: 'd', text: "Ne rien faire.", isCorrect: true },
  ],
  answerType: "single",
  explanation: "Les risques corrélés négativement se couvrent naturellement, donc aucune action n'est nécessaire.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-risk",
  status: "unseen",
};

export const question88: Question = {
  id: 'cia-p1-eb1-q-088',
  number: 88,
  text: "Le processus de gestion des risques comprend tous les éléments suivants, sauf :",
  answers: [
    { id: 'a', text: "Suivi et contrôle des risques.", isCorrect: false },
    { id: 'b', text: "Évitement des risques.", isCorrect: true },
    { id: 'c', text: "Planification de l'intervention en cas de risque.", isCorrect: false },
    { id: 'd', text: "Évaluation des risques.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "L'évitement du risque est une réponse au risque, pas une étape du processus de gestion.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-risk",
  status: "unseen",
};

export const question89: Question = {
  id: 'cia-p1-eb1-q-089',
  number: 89,
  text: "Une réponse au risque qui consiste à éliminer la menace du risque est appelée :",
  answers: [
    { id: 'a', text: "Atténuation du risque.", isCorrect: false },
    { id: 'b', text: "Risque de déviation.", isCorrect: false },
    { id: 'c', text: "Évitement des risques.", isCorrect: true },
    { id: 'd', text: "Risque résiduel.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "L'évitement du risque implique de supprimer l'événement ou l'activité à risque.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-risk",
  status: "unseen",
};


export const question90: Question = {
  id: 'cia-p1-eb1-q-090',
  number: 90,
  text: "Pour un projet risqué où il est impossible d'éviter tout risque de dommages corporels, quelle mesure de détournement du risque le gestionnaire devrait-il prendre en compte ?",
  answers: [
    { id: 'a', text: "Éliminer le projet.", isCorrect: false },
    { id: 'b', text: "Souscrire une assurance pour couvrir les risques de dommages corporels.", isCorrect: true },
    { id: 'c', text: "Établir un fonds de prévoyance.", isCorrect: false },
    { id: 'd', text: "Accepter le risque.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Pour détourner le risque lorsque l'évitement est impossible, l'assurance permet de transférer financièrement le risque potentiel.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-risk",
  status: "unseen",
};

export const question91: Question = {
  id: 'cia-p1-eb1-q-091',
  number: 91,
  text: "L'appétit pour le risque est le niveau de risque qu'une organisation est prête à poursuivre, à conserver ou à prendre. Quels facteurs pourraient influencer cet appétit ?",
  answers: [
    { id: 'a', text: "Points de vue des principales parties prenantes.", isCorrect: false },
    { id: 'b', text: "La complexité du système comptable de l'organisation.", isCorrect: false },
    { id: 'c', text: "Facteurs externes, tels que l'évolution des considérations économiques, les changements technologiques, les changements dans l'industrie, etc.", isCorrect: false },
    { id: 'd', text: "Toutes ces réponses.", isCorrect: true },
  ],
  answerType: "single",
  explanation: "Tous ces facteurs – parties prenantes, système comptable, facteurs externes – influencent l'appétit pour le risque.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-risk",
  status: "unseen",
};


export const question92: Question = {
  id: 'cia-p1-eb1-q-092',
  number: 92,
  text: "Concernant la gestion des risques d'entreprise (GRE), laquelle des affirmations est correcte ?",
  answers: [
    { id: 'a', text: "Garantit l'atteinte des objectifs organisationnels.", isCorrect: false },
    { id: 'b', text: "Exige l'établissement d'activités de risque et de contrôle par les auditeurs internes.", isCorrect: false },
    { id: 'c', text: "Comprend l'identification des événements ayant des répercussions négatives sur les objectifs de l'organisation.", isCorrect: true },
    { id: 'd', text: "Comprend la sélection de la meilleure réponse au risque pour l'organisation.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "La GRE identifie les événements à risque et fournit une assurance raisonnable concernant la réalisation des objectifs, mais ne garantit pas leur atteinte.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-risk",
  status: "unseen",
};


export const question93: Question = {
  id: 'cia-p1-eb1-q-093',
  number: 93,
  text: "L'établissement d'un processus de GRE comporte tous les avantages suivants, sauf :",
  answers: [
    { id: 'a', text: "Déterminer l'appétit pour le risque de l'entreprise.", isCorrect: true },
    { id: 'b', text: "Identifier les événements à risque potentiel.", isCorrect: false },
    { id: 'c', text: "Améliorer la capacité de l'entreprise à saisir les occasions.", isCorrect: false },
    { id: 'd', text: "Améliorer l'utilisation du capital et des ressources.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "La détermination de l'appétit pour le risque est une fonction du conseil d'administration et de la direction, pas de la GRE.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-risk",
  status: "unseen",
};


export const question94: Question = {
  id: 'cia-p1-eb1-q-094',
  number: 94,
  text: "Lequel des objectifs suivants ne constitue probablement pas un objectif stratégique ?",
  answers: [
    { id: 'a', text: "Croissance financière.", isCorrect: false },
    { id: 'b', text: "Amélioration de la satisfaction de la clientèle.", isCorrect: false },
    { id: 'c', text: "Innovation produit.", isCorrect: false },
    { id: 'd', text: "Réduction des coûts administratifs.", isCorrect: true },
  ],
  answerType: "single",
  explanation: "La réduction des coûts administratifs est généralement un objectif opérationnel à court terme plutôt qu'un objectif stratégique.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-risk",
  status: "unseen",
};


export const question95: Question = {
  id: 'cia-p1-eb1-q-095',
  number: 95,
  text: "Dans le modèle GRE, dans quelle composante l'entreprise identifierait-elle des événements à risque précis ?",
  answers: [
    { id: 'a', text: "Gouvernance et culture.", isCorrect: false },
    { id: 'b', text: "Stratégie et fixation d'objectifs.", isCorrect: false },
    { id: 'c', text: "Activités de contrôle.", isCorrect: false },
    { id: 'd', text: "Performance.", isCorrect: true },
  ],
  answerType: "single",
  explanation: "L'identification des risques est un principe clé de la composante Performance du modèle ERM/COSO.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-risk",
  status: "unseen",
};


export const question96: Question = {
  id: 'cia-p1-eb1-q-096',
  number: 96,
  text: "Quels sont les avantages réels de la mise en œuvre d'un système de GRE ?",
  answers: [
    { id: 'a', text: "I et II seulement.", isCorrect: false },
    { id: 'b', text: "II et III seulement.", isCorrect: true },
    { id: 'c', text: "III et IV seulement.", isCorrect: false },
    { id: 'd', text: "II et IV seulement.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "La GRE aligne mieux la stratégie sur l'appétit pour le risque (II) et améliore l'affectation des ressources (III). Elle ne peut prévoir tous les risques et ne garantit pas que tous seront connus.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-risk",
  status: "unseen",
};


export const question97: Question = {
  id: 'cia-p1-eb1-q-097',
  number: 97,
  text: "Dans la GRE, lequel des rôles suivants n'est pas assumé par l'audit interne ?",
  answers: [
    { id: 'a', text: "Donner une assurance sur les processus de gestion des risques.", isCorrect: false },
    { id: 'b', text: "Élaborer une stratégie de gestion des risques aux fins d'approbation par le conseil.", isCorrect: false },
    { id: 'c', text: "Établir l'appétit pour le risque.", isCorrect: true },
    { id: 'd', text: "Coordonner les activités de GRE.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "L'établissement de l'appétit pour le risque relève de la direction et du conseil d'administration, pas de l'audit interne.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-risk",
  status: "unseen",
};


export const question98: Question = {
  id: 'cia-p1-eb1-q-098',
  number: 98,
  text: "Lequel des énoncés suivants n'est pas sous-entendu par la définition du contrôle ?",
  answers: [
    { id: 'a', text: "Mesure des progrès vers l'atteinte des objectifs.", isCorrect: false },
    { id: 'b', text: "Mise au jour des écarts par rapport aux plans.", isCorrect: false },
    { id: 'c', text: "Attribution de la responsabilité des écarts.", isCorrect: true },
    { id: 'd', text: "Indication de la nécessité d'une action corrective.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Le contrôle implique de fixer des objectifs, mesurer le rendement et prendre des mesures correctives. L'attribution des responsabilités ne fait pas partie de la fonction de contrôle.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-control",
  status: "unseen",
};

export const question99: Question = {
  id: 'cia-p1-eb1-q-099',
  number: 99,
  text: "Les contrôles doivent être conçus pour s'assurer que :",
  answers: [
    { id: 'a', text: "Les opérations sont effectuées efficacement.", isCorrect: true },
    { id: 'b', text: "Les plans de la direction n'ont pas été contournés par la collusion des travailleurs.", isCorrect: false },
    { id: 'c', text: "L'orientation et la surveillance du rendement de la direction par l'AAI sont assurées.", isCorrect: false },
    { id: 'd', text: "Les processus de planification, d'organisation et de direction de la direction sont correctement évalués.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Le but du contrôle est de fournir une assurance raisonnable que les opérations atteignent les objectifs fixés.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-control",
  status: "unseen",
};

export const question100: Question = {
  id: 'cia-p1-eb1-q-100',
  number: 100,
  text: "Différence entre contrôles au niveau de l'entreprise et contrôles au niveau opérationnel :",
  answers: [
    { id: 'a', text: "Les contrôles au niveau de l'entreprise sont pour la plupart automatisés, tandis que les contrôles au niveau opérationnel sont surtout manuels.", isCorrect: false },
    { id: 'b', text: "Les contrôles au niveau opérationnel comprennent des contrôles manuels et automatisés, tandis que les contrôles au niveau de l'entreprise sont surtout manuels et incluent des énoncés de politique générale, l'éthique et les valeurs.", isCorrect: true },
    { id: 'c', text: "Les contrôles au niveau de l'entreprise sont principalement manuels, alors que les contrôles au niveau opérationnel sont principalement automatisés.", isCorrect: false },
    { id: 'd', text: "Les contrôles au niveau opérationnel comprennent les contrôles manuels et automatisés, tandis que les contrôles au niveau de l'organisation englobent la planification et la surveillance du rendement.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Les contrôles au niveau de l'entreprise sont surtout manuels et visent des politiques générales et la culture, tandis que les contrôles opérationnels incluent des contrôles manuels et automatisés appliqués aux procédures spécifiques.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-control",
  status: "unseen",
};

export const question101: Question = {
  id: 'cia-p1-eb1-q-101',
  number: 101,
  text: "Lequel des types de contrôles suivants est souvent difficile à évaluer en raison de l'absence de critères ou de normes établis ?",
  answers: [
    { id: 'a', text: "Contrôles d'exploitation.", isCorrect: true },
    { id: 'b', text: "Contrôles financiers.", isCorrect: false },
    { id: 'c', text: "Contrôles directifs.", isCorrect: false },
    { id: 'd', text: "Contrôles préventifs.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Les contrôles d'exploitation sont appliqués aux activités comme la production ou le service, et peuvent être difficiles à évaluer faute de normes établies.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-control",
  status: "unseen",
};

export const question102: Question = {
  id: 'cia-p1-eb1-q-102',
  number: 102,
  text: "Lequel des éléments suivants n'est pas un contrôle préventif ?",
  answers: [
    { id: 'a', text: "Le fichier de base du grand livre est bloqué dans un coffre-fort chaque nuit.", isCorrect: false },
    { id: 'b', text: "Toutes les factures portent la mention 'Payé' pour éviter les paiements en double.", isCorrect: false },
    { id: 'c', text: "Le rapprochement du grand livre auxiliaire des comptes débiteurs et du total de contrôle du grand livre général.", isCorrect: true },
    { id: 'd', text: "Les numéros de client sont vérifiés par l'ordinateur avant l'acceptation d'une commande client.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Les contrôles préventifs visent à éviter les erreurs. Le rapprochement est un contrôle de rétroaction, détectant les erreurs après qu'elles se sont produites.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-control",
  status: "unseen",
};

export const question103: Question = {
  id: 'cia-p1-eb1-q-103',
  number: 103,
  text: "Lequel des éléments suivants est un contrôle simultané ?",
  answers: [
    { id: 'a', text: "Formation sur le contrôle de la qualité des produits.", isCorrect: false },
    { id: 'b', text: "Surveillance de l'activité en ligne.", isCorrect: true },
    { id: 'c', text: "Analyse des écarts sur matières premières.", isCorrect: false },
    { id: 'd', text: "Budget de trésorerie à 90 jours.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Le contrôle simultané (ou concomitant) intervient pendant le processus pour surveiller et corriger en temps réel, comme la surveillance en ligne.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-control",
  status: "unseen",
};

export const question104: Question = {
  id: 'cia-p1-eb1-q-104',
  number: 104,
  text: "Lequel des éléments suivants est un exemple de mesure de l'efficacité ?",
  answers: [
    { id: 'a', text: "Le taux d'absentéisme.", isCorrect: false },
    { id: 'b', text: "L'objectif de devenir un fabricant de premier plan.", isCorrect: true },
    { id: 'c', text: "Le nombre de demandes de règlement d'assurance traitées par jour.", isCorrect: false },
    { id: 'd', text: "Le taux de plaintes des clients.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "L'efficacité est liée à l'atteinte des objectifs organisationnels, contrairement à l'efficience qui mesure les intrants et extrants.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-control",
  status: "unseen",
};

export const question105: Question = {
  id: 'cia-p1-eb1-q-105',
  number: 105,
  text: "Une différence importante entre l'information de planification budgétaire et l'information de contrôle budgétaire est que l'information de planification est plus importante :",
  answers: [
    { id: 'a', text: "Probablement générée à l'aide de données externes.", isCorrect: true },
    { id: 'b', text: "Détaillée.", isCorrect: false },
    { id: 'c', text: "Probablement quantifiable.", isCorrect: false },
    { id: 'd', text: "Probablement exacte.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Les informations de planification doivent souvent intégrer des données externes pour prendre en compte l'environnement de l'organisation.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-control",
  status: "unseen",
};


export const question106: Question = {
  id: 'cia-p1-eb1-q-106',
  number: 106,
  text: "Lequel des exemples suivants illustre une limitation inhérente du contrôle interne ?",
  answers: [
    { id: 'a', text: "Un contrôleur effectue et enregistre les dépôts en espèces.", isCorrect: false },
    { id: 'b', text: "Un gardien de sécurité permet à un employé de sortir les biens de l'entreprise sans autorisation.", isCorrect: true },
    { id: 'c', text: "La société vend à des clients à crédit sans approbation de crédit appropriée.", isCorrect: false },
    { id: 'd', text: "Un employé qui ne sait pas lire se voit confier la garde de la bandothèque de l'entreprise.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "La collusion entre employés est une limitation inhérente des contrôles internes : même des contrôles stricts peuvent être contournés.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-control",
  status: "unseen",
};

export const question107: Question = {
  id: 'cia-p1-eb1-q-107',
  number: 107,
  text: "Quel est l'ordre correct des étapes d'un processus de contrôle typique ?",
  answers: [
    { id: 'a', text: "2, 1, 6, 3, 8, 7, 4, 5.", isCorrect: false },
    { id: 'b', text: "1, 2, 3, 6, 5, 7, 8, 4.", isCorrect: false },
    { id: 'c', text: "2, 1, 3, 6, 8, 4, 7, 5.", isCorrect: true },
    { id: 'd', text: "1, 3, 2, 6, 7, 5, 8, 4.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "L'ordre correct suit la logique : définir les normes, sélectionner les points de contrôle, observer, consigner, évaluer, signaler, corriger et réviser.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-control",
  status: "unseen",
};

export const question108: Question = {
  id: 'cia-p1-eb1-q-108',
  number: 108,
  text: "Lequel ne constitue pas un objectif de contrôle de l'application pour un auditeur interne ?",
  answers: [
    { id: 'a', text: "Les données d'entrée sont exactes, complètes, autorisées et correctes.", isCorrect: false },
    { id: 'b', text: "Les données sont traitées comme prévu dans un délai acceptable.", isCorrect: false },
    { id: 'c', text: "Les extrants sont précis et complets.", isCorrect: false },
    { id: 'd', text: "Seul le personnel autorisé peut accéder aux informations du réseau.", isCorrect: true },
  ],
  answerType: "single",
  explanation: "L'accès autorisé relève des contrôles généraux, pas des contrôles d'application.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-control",
  status: "unseen",
};

export const question109: Question = {
  id: 'cia-p1-eb1-q-109',
  number: 109,
  text: "Un contrôle susceptible d'empêcher les acheteurs de favoriser des fournisseurs spécifiques est :",
  answers: [
    { id: 'a', text: "Exiger l'examen par la direction d'un rapport mensuel des totaux dépensés par chaque acheteur.", isCorrect: false },
    { id: 'b', text: "Exiger des acheteurs qu'ils respectent les spécifications détaillées des matériaux.", isCorrect: false },
    { id: 'c', text: "La rotation périodique des affectations d'acheteurs.", isCorrect: true },
    { id: 'd', text: "Suivi du nombre de commandes passées par chaque acheteur.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "La rotation périodique empêche un acheteur de favoriser constamment le même fournisseur.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-control",
  status: "unseen",
};

export const question110: Question = {
  id: 'cia-p1-eb1-q-110',
  number: 110,
  text: "Un auditeur interne constate que le comptable signe les chèques et rapproche le compte courant. Le système de contrôle interne sur les comptes de trésorerie est :",
  answers: [
    { id: 'a', text: "L'enregistrement des rentrées de fonds est adéquat.", isCorrect: false },
    { id: 'b', text: "La comptabilisation de l'encaisse est inadéquate.", isCorrect: true },
    { id: 'c', text: "Les rapprochements du compte de caisse sont adéquats.", isCorrect: false },
    { id: 'd', text: "Les mesures de protection physique de l'argent liquide sont adéquates.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Signer les chèques et rapprocher le compte ne devraient pas être effectués par la même personne. Cette absence de séparation des fonctions rend la comptabilisation inadéquate.",
  difficulty: "medium",
  topic: "cia-p1-exam-blanc-1",
  chapter: "cia-p1-eb1-control",
  status: "unseen",
};

export const question111: Question = {
id: 'cia-p1-eb1-q-111',
number: 111,
text: "Lequel des éléments suivants est une faiblesse du contrôle plutôt qu'un point fort du contrôle à l'égard du commis à la paie ?",
answers: [
{ id: 'a', text: "A la garde du cachet de la signature du chèque.", isCorrect: true },
{ id: 'b', text: "Prépare le registre de paie.", isCorrect: false },
{ id: 'c', text: "Transmet le registre de paie au chef comptable pour approbation.", isCorrect: false },
{ id: 'd', text: "Tire les chèques de paie sur un compte chèque de paie séparé.", isCorrect: false },
],
answerType: "single",
explanation: "Le commis à la paie ne devrait pas avoir la garde du timbre de signature afin d'assurer une séparation adéquate des tâches.",
difficulty: "medium",
topic: "cia-p1-exam-blanc-1",
chapter: "cia-p1-eb1-control",
status: "unseen",
};

export const question112: Question = {
id: 'cia-p1-eb1-q-112',
number: 112,
text: "Laquelle des situations suivantes amènerait un auditeur interne à s'interroger sur le caractère adéquat des contrôles exercés sur une fonction d'achat ?",
answers: [
{ id: 'a', text: "L'original et une copie du bon de commande sont envoyés au fournisseur et l'exemplaire sur lequel le fournisseur accuse réception est retourné au service Achats.", isCorrect: false },
{ id: 'b', text: "Les rapports de réception sont acheminés aux achats où ils sont appariés aux bons de commande et envoyés aux comptes créditeurs.", isCorrect: true },
{ id: 'c', text: "Le service des comptes fournisseurs prépare la documentation pour les paiements.", isCorrect: false },
{ id: 'd', text: "Les dossiers des bons impayés et les registres d'inventaire permanent sont tenus à jour de façon indépendante.", isCorrect: false },
],
answerType: "single",
explanation: "Les rapports de réception doivent être envoyés directement au service des comptes créditeurs, et non aux achats, pour éviter des conflits de contrôle.",
difficulty: "medium",
topic: "cia-p1-exam-blanc-1",
chapter: "cia-p1-eb1-control",
status: "unseen",
};

export const question113: Question = {
id: 'cia-p1-eb1-q-113',
number: 113,
text: "Une séparation adéquate des tâches réduit les possibilités pour une personne d'avoir les deux possibilités :",
answers: [
{ id: 'a', text: "Établir des contrôles et les exécuter.", isCorrect: false },
{ id: 'b', text: "Conçoit les contrôles et les surveille.", isCorrect: false },
{ id: 'c', text: "Commettre des erreurs et des fraudes et les dissimuler.", isCorrect: true },
{ id: 'd', text: "Enregistrer les opérations dans le journal comptable et le grand livre général.", isCorrect: false },
],
answerType: "single",
explanation: "La séparation des tâches vise à empêcher une personne de commettre une fraude et de la masquer.",
difficulty: "medium",
topic: "cia-p1-exam-blanc-1",
chapter: "cia-p1-eb1-control",
status: "unseen",
};

export const question114: Question = {
id: 'cia-p1-eb1-q-114',
number: 114,
text: "Lequel des éléments suivants n'est pas un principe fondamental de l'environnement de contrôle selon le modèle COSO ?",
answers: [
{ id: 'a', text: "S'engager à être compétent en matière d'information financière.", isCorrect: false },
{ id: 'b', text: "Avoir la bonne philosophie de gestion et le bon style de fonctionnement.", isCorrect: false },
{ id: 'c', text: "Avoir les bonnes politiques et procédures en matière de ressources humaines.", isCorrect: false },
{ id: 'd', text: "Déterminer les objectifs de l'entreprise en matière de présentation de l'information financière.", isCorrect: true },
],
answerType: "single",
explanation: "La détermination des objectifs de l'entreprise relève du processus d'évaluation des risques, et non de l'environnement de contrôle.",
difficulty: "medium",
topic: "cia-p1-exam-blanc-1",
chapter: "cia-p1-eb1-control",
status: "unseen",
};

export const question115: Question = {
id: 'cia-p1-eb1-q-115',
number: 115,
text: "Un système de contrôle efficace devrait présenter toutes les caractéristiques suivantes, à l'exception de :",
answers: [
{ id: 'a', text: "Le système de contrôle reflète ce que l'organisation tente de mesurer et de contrôler.", isCorrect: false },
{ id: 'b', text: "Le système de contrôle doit être compréhensible par toutes les personnes qui l'utilisent.", isCorrect: false },
{ id: 'c', text: "L'organisation économise moins que le coût du contrôle.", isCorrect: true },
{ id: 'd', text: "Les informations fournies par le système de contrôle doivent être disponibles en temps utile.", isCorrect: false },
],
answerType: "single",
explanation: "Un système efficace doit avoir un rapport coûts-avantages positif : les économies doivent dépasser le coût du contrôle.",
difficulty: "medium",
topic: "cia-p1-exam-blanc-1",
chapter: "cia-p1-eb1-control",
status: "unseen",
};

export const question116: Question = {
id: 'cia-p1-eb1-q-116',
number: 116,
text: "Laquelle des mesures suivantes peut aider à réduire la capacité d'une personne à rationaliser la fraude ?",
answers: [
{ id: 'a', text: "Disposer d'un service des ressources humaines et de politiques du personnel solides.", isCorrect: false },
{ id: 'b', text: "Disposer d'un système de contrôle interne solide.", isCorrect: false },
{ id: 'c', text: "Une formation à l'éthique et une culture d'entreprise fondée sur des principes.", isCorrect: true },
{ id: 'd', text: "Avoir un problème de drogue ou de jeu.", isCorrect: false },
],
answerType: "single",
explanation: "Une culture éthique et une formation appropriée aident à limiter la rationalisation de la fraude.",
difficulty: "medium",
topic: "cia-p1-exam-blanc-1",
chapter: "cia-p1-eb1-control",
status: "unseen",
};

export const question117: Question = {
id: 'cia-p1-eb1-q-117',
number: 117,
text: "Lesquels des exemples suivants sont des fraudes qui ne profiteraient pas à l'organisation ?",
answers: [
{ id: 'a', text: "Prix de transfert intentionnels/impropres.", isCorrect: false },
{ id: 'b', text: "Fraude fiscale.", isCorrect: false },
{ id: 'c', text: "Demandes de remboursement pour des services ou biens non fournis.", isCorrect: true },
{ id: 'd', text: "Vente ou cession d'actifs fictifs ou faussement représentés.", isCorrect: false },
],
answerType: "single",
explanation: "Les demandes de remboursement pour des biens ou services non fournis ne profitent pas à l'organisation.",
difficulty: "medium",
topic: "cia-p1-exam-blanc-1",
chapter: "cia-p1-eb1-fraud",
status: "unseen",
};

export const question118: Question = {
id: 'cia-p1-eb1-q-118',
number: 118,
text: "Lequel des énoncés suivants décrit le mieux la responsabilité d'un auditeur après avoir relevé des indicateurs de fraude ?",
answers: [
{ id: 'a', text: "Élargir les activités d’audit pour déterminer si une enquête est justifiée.", isCorrect: true },
{ id: 'b', text: "Signalez la possibilité de fraude à la direction générale et demandez-lui comment procéder.", isCorrect: false },
{ id: 'c', text: "Consulter un conseiller juridique externe pour déterminer les mesures à prendre.", isCorrect: false },
{ id: 'd', text: "Signaler l'affaire au comité d’audit et demander le financement de spécialistes externes.", isCorrect: false },
],
answerType: "single",
explanation: "L'auditeur doit d'abord élargir ses travaux pour confirmer les indicateurs avant d'informer la direction ou d'autres parties.",
difficulty: "medium",
topic: "cia-p1-exam-blanc-1",
chapter: "cia-p1-eb1-fraud",
status: "unseen",
};

export const question119: Question = {
id: 'cia-p1-eb1-q-119',
number: 119,
text: "Lequel des contrôles internes suivants aurait le plus probablement empêché la fraude du directeur de production sur les pièces de rechange ?",
answers: [
{ id: 'a', text: "Établir des niveaux de dépenses prédéfinis pour tous les fournisseurs.", isCorrect: false },
{ id: 'b', text: "Séparer la fonction de réception de l'autorisation d'achat de pièces.", isCorrect: true },
{ id: 'c', text: "Comparer le connaissement pour les pièces de rechange à la commande approuvée.", isCorrect: false },
{ id: 'd', text: "Utiliser le système d'inventaire pour faire correspondre les quantités demandées aux quantités reçues.", isCorrect: false },
],
answerType: "single",
explanation: "La séparation des tâches aurait empêché le directeur de traiter à la fois l'achat et la réception, limitant la fraude.",
difficulty: "medium",
topic: "cia-p1-exam-blanc-1",
chapter: "cia-p1-eb1-fraud",
status: "unseen",
};

export const question120: Question = {
id: 'cia-p1-eb1-q-120',
number: 120,
text: "Lequel des tests suivants aiderait l'auditeur à décider s'il doit enquêter davantage sur le tuyau anonyme concernant les pièces de rechange ?",
answers: [
{ id: 'a', text: "Comparaison des charges d'entretien du trimestre avec la période précédente.", isCorrect: false },
{ id: 'b', text: "Contrôle de l'inventaire physique pour existence et valorisation.", isCorrect: false },
{ id: 'c', text: "Analyse des pièces de rechange imputées à l'entretien pour examiner le nombre d'articles.", isCorrect: true },
{ id: 'd', text: "Examen d'un échantillon de factures pour en vérifier l'autorisation et la réception.", isCorrect: false },
],
answerType: "single",
explanation: "L'analyse des pièces imputées permet de détecter des quantités excessives et identifier la fraude.",
difficulty: "medium",
topic: "cia-p1-exam-blanc-1",
chapter: "cia-p1-eb1-fraud",
status: "unseen",
};

export const question121: Question = {
id: 'cia-p1-eb1-q-121',
number: 121,
text: "Laquelle des écritures frauduleuses est la plus susceptible d'être faite pour dissimuler le vol d'un bien ?",
answers: [
{ id: 'a', text: "Débitez les dépenses et créditez l'actif.", isCorrect: true },
{ id: 'b', text: "Débitez l'actif et créditez un autre compte d'actif.", isCorrect: false },
{ id: 'c', text: "Débitez le produit et créditez l'immobilisation.", isCorrect: false },
{ id: 'd', text: "Débitez un autre compte d'actif et créditez l'actif.", isCorrect: false },
],
answerType: "single",
explanation: "Les fraudeurs tentent souvent de masquer le vol en l'imputant à un compte de dépenses.",
difficulty: "medium",
topic: "cia-p1-exam-blanc-1",
chapter: "cia-p1-eb1-fraud",
status: "unseen",
};

export const question122: Question = {
id: 'cia-p1-eb1-q-122',
number: 122,
text: "Lequel des éléments suivants n'est pas considéré comme une condition indiquant une probabilité plus élevée de fraude ?",
answers: [
{ id: 'a', text: "La direction a délégué le pouvoir d'effectuer des achats d'une valeur inférieure à un certain plafond à des subordonnés.", isCorrect: true },
{ id: 'b', text: "Une personne a occupé le même poste de manutention de l'argent pendant une période prolongée sans rotation des fonctions.", isCorrect: false },
{ id: 'c', text: "Il incombe aux personnes manipulant les titres négociables d'effectuer les achats, de consigner les achats et de signaler tout écart à la direction générale.", isCorrect: false },
{ id: 'd', text: "L'attribution des responsabilités et de l'obligation de rendre compte au sein du service des comptes débiteurs n'est pas claire.", isCorrect: false },
],
answerType: "single",
explanation: "La délégation d'achat en dessous d'un certain seuil n'indique pas une probabilité plus élevée de fraude.",
difficulty: "medium",
topic: "cia-p1-exam-blanc-1",
chapter: "cia-p1-eb1-fraud",
status: "unseen",
};

export const question123: Question = {
id: 'cia-p1-eb1-q-123',
number: 123,
text: "Concernant la prévention de la fraude, quels énoncés sont vrais ?",
answers: [
{ id: 'a', text: "I seulement.", isCorrect: false },
{ id: 'b', text: "II seulement.", isCorrect: false },
{ id: 'c', text: "I et II seulement.", isCorrect: false },
{ id: 'd', text: "I, II et III.", isCorrect: true },
],
answerType: "single",
explanation: "Les trois énoncés reflètent le rôle des contrôles internes et des auditeurs internes dans la prévention de la fraude.",
difficulty: "medium",
topic: "cia-p1-exam-blanc-1",
chapter: "cia-p1-eb1-fraud",
status: "unseen",
};

export const question124: Question = {
id: 'cia-p1-eb1-q-124',
number: 124,
text: "Les auditeurs internes sont plus susceptibles de détecter la fraude en développant et en renforçant leur capacité à :",
answers: [
{ id: 'a', text: "Reconnaître et remettre en question les changements dans les organisations.", isCorrect: true },
{ id: 'b', text: "Interroger les fraudeurs pour découvrir pourquoi la fraude a été commise.", isCorrect: false },
{ id: 'c', text: "Élaborer des contrôles internes pour prévenir la fraude.", isCorrect: false },
{ id: 'd', text: "Documenter les systèmes d'exploitation informatisés.", isCorrect: false },
],
answerType: "single",
explanation: "La reconnaissance et la remise en question des changements organisationnels aident à détecter les signaux de fraude.",
difficulty: "medium",
topic: "cia-p1-exam-blanc-1",
chapter: "cia-p1-eb1-fraud",
status: "unseen",
};

export const question125: Question = {
id: 'cia-p1-eb1-q-125',
number: 125,
text: "Dans certains cas de fraude, il est nécessaire de recourir aux services d'un auditeur judiciaire. Lequel des éléments suivants n'est généralement pas un type d'enquête menée par les auditeurs judiciaires ?",
answers: [
{ id: 'a', text: "Falsification délibérée de documents comptables.", isCorrect: false },
{ id: 'b', text: "Rémunération des dirigeants.", isCorrect: true },
{ id: 'c', text: "Des actes d'extorsion.", isCorrect: false },
{ id: 'd', text: "Vol des biens de l'entreprise.", isCorrect: false },
],
answerType: "single",
explanation: "Le niveau de rémunération de la direction n'est pas un sujet d'enquête pour un auditeur judiciaire.",
difficulty: "medium",
topic: "cia-p1-exam-blanc-1",
chapter: "cia-p1-eb1-fraud",
status: "unseen",
};
