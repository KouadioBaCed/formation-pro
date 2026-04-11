// GlossaryAgile.tsx

type GlossaryItem = {
  term: string;
  english: string;
  description: string;
};

const baseGlossary: GlossaryItem[] = [
  {
    term: "A3",
    english: "A3",
    description:
      "Mode de pensée et approche de résolution systématique des problèmes permettant de collecter les informations pertinentes sur un simple document A3.",
  },
  {
    term: "Adapté au besoin (Fit for Purpose)",
    english: "Fit for Purpose",
    description: "Produit adapté aux objectifs prévus.",
  },
  {
    term: "Affinage du Backlog",
    english: "Backlog Refinement",
    description:
      "Élaboration progressive des exigences du projet durant laquelle l’équipe étudie, actualise et rédige les exigences pour répondre au besoin du client.",
  },
  {
    term: "Agile",
    english: "Agile",
    description:
      "Terme utilisé pour décrire un état d’esprit reposant sur les valeurs et principes énoncés dans le Manifeste Agile.",
  },
  {
    term: "Agile structuré (DA)",
    english: "Disciplined Agile (DA)",
    description:
      "Cadre permettant de prendre des décisions de processus simplifiées concernant la livraison de solutions itératives et incrémentielles.",
  },
  {
    term: "Agiliste",
    english: "Agilist",
    description: "Professionnel Agile.",
  },
  {
    term: "Analyse automatique de la qualité du code",
    english: "Automated Code Quality Analysis",
    description:
      "Test scripté de la base du code destiné à vérifier la présence de défauts et de vulnérabilités.",
  },
  {
    term: "Appariement",
    english: "Pairing",
    description: "Travail en binôme.",
  },
  {
    term: "Apprentissage en boucle simple",
    english: "Single-Loop Learning",
    description:
      "Résolution de problèmes avec des méthodes prédéfinies sans remise en question des méthodes utilisées.",
  },
  {
    term: "Apprentissage en double-boucle",
    english: "Double-Loop Learning",
    description:
      "Remise en question des valeurs et hypothèses fondamentales pour identifier les causes profondes et améliorer les solutions.",
  },
  {
    term: "Approche hybride",
    english: "Hybrid Approach",
    description:
      "Association d’éléments Agiles et non Agiles aboutissant à un résultat non Agile.",
  },
  {
    term: "Approche orientée par les plans",
    english: "Plan-Driven Approach",
    description: "Approche prédictive.",
  },
  {
    term: "Approche prédictive",
    english: "Predictive Approach",
    description:
      "Approche de gestion basée sur un plan de travail suivi tout au long du cycle de vie du projet.",
  },
  {
    term: "Appropriation collective du code",
    english: "Collective Code Ownership",
    description:
      "Technique où tout membre de l’équipe peut modifier un livrable avec une responsabilité collective.",
  },
  {
    term: "Apte à l’emploi",
    english: "Fit for Use",
    description:
      "Produit utilisable sous sa forme actuelle pour remplir sa fonction prévue.",
  },
  {
    term: "Backlog",
    english: "Backlog",
    description: "Voir Backlog de produit.",
  },
  {
    term: "Backlog de produit",
    english: "Product Backlog",
    description:
      "Liste ordonnée d’exigences client pour un produit, maintenue par une équipe.",
  },
  {
    term: "Backlog du Sprint",
    english: "Sprint Backlog",
    description:
      "Liste des éléments de travail identifiés par l’équipe à compléter lors du Sprint.",
  },
  {
    term: "Biais de l’organisation",
    english: "Organizational Bias",
    description:
      "Tendances d’une organisation entre exploration/exécution, vitesse/stabilité, quantité/qualité et flexibilité/prévisibilité.",
  },
];

// Ajoute cette suite dans le même fichier GlossaryAgile.tsx
// → continue simplement le tableau `glossary`

const moreGlossary: GlossaryItem[] = [
  {
    term: "Bloc de temps",
    english: "Timebox",
    description:
      "Intervalle de temps de durée déterminée (1 semaine, 2 semaines, 3 semaines, 1 mois). Voir aussi Itération.",
  },
  {
    term: "Broken Comb",
    english: "Broken Comb",
    description:
      "Personne ayant différents niveaux de spécialisation dans plusieurs compétences requises par l’équipe. Aussi appelée Paint Drip.",
  },
  {
    term: "Bureau des Projets (PMO)",
    english: "Project Management Office (PMO)",
    description:
      "Structure de management qui normalise les processus de gouvernance des projets et facilite le partage des ressources et méthodologies.",
  },
  {
    term: "Burndown Chart",
    english: "Burndown Chart",
    description:
      "Représentation graphique de la quantité de travail restante par rapport au temps.",
  },
  {
    term: "Burnup Chart",
    english: "Burnup Chart",
    description:
      "Représentation graphique du travail réalisé en vue de la release d’un produit.",
  },
  {
    term: "Cadence",
    english: "Cadence",
    description: "Rythme d’exécution. Voir aussi Bloc de temps.",
  },
  {
    term: "Cadre de travail",
    english: "Framework",
    description:
      "Structure d’idées ou de faits qui soutient une approche ou une méthode.",
  },
  {
    term: "Cartographie d’impact",
    english: "Impact Mapping",
    description:
      "Technique de planification stratégique servant de feuille de route lors de la création de nouveaux produits.",
  },
  {
    term: "Cartographie des flux de valeur",
    english: "Value Stream Mapping",
    description:
      "Technique Lean pour documenter, analyser et améliorer le flux d’informations ou de matériaux nécessaires à la production.",
  },
  {
    term: "Cartographie des User Stories",
    english: "User Story Mapping",
    description:
      "Pratique visuelle d’organisation du travail pour comprendre les fonctionnalités à forte valeur et planifier les releases.",
  },
  {
    term: "Coach Agile",
    english: "Agile Coach",
    description:
      "Expert en agilité qui forme, encadre et guide les équipes et organisations dans leur transformation.",
  },
  {
    term: "Coalition",
    english: "Mobbing",
    description:
      "Technique où plusieurs membres de l’équipe travaillent simultanément sur un même élément.",
  },
  {
    term: "Combinaison Agile",
    english: "Blended Agile",
    description:
      "Utilisation combinée de plusieurs frameworks ou pratiques Agile (Scrum + XP + Kanban par exemple).",
  },
  {
    term: "Création évolutive de valeur",
    english: "Evolutionary Value Delivery (EVO)",
    description:
      "Méthode Agile axée sur la satisfaction mesurable des exigences des parties prenantes.",
  },
  {
    term: "Cycle de vie",
    english: "Life Cycle",
    description:
      "Processus complet depuis l’idée d’un produit jusqu’à sa mise en service.",
  },
  {
    term: "Cycle de vie Agile",
    english: "Agile Life Cycle",
    description:
      "Approche itérative et incrémentale avec livraisons fréquentes.",
  },
  {
    term: "Cycle de vie incrémental",
    english: "Incremental Life Cycle",
    description:
      "Approche fournissant des livrables utilisables immédiatement.",
  },
  {
    term: "Cycle de vie itératif",
    english: "Iterative Life Cycle",
    description:
      "Approche basée sur le feedback pour améliorer progressivement un travail non finalisé.",
  },
];

// 👉 Suite du glossaire — à ajouter dans le même fichier GlossaryAgile.tsx
// Continue simplement l’array avec ces éléments

const moreGlossary2: GlossaryItem[] = [
  {
    term: "Daily Scrum",
    english: "Daily Scrum",
    description:
      "Brève réunion quotidienne où l’équipe partage les progrès, les objectifs du jour et les obstacles. Aussi appelée Daily Standup.",
  },
  {
    term: "Définition d’accompli (DoD)",
    english: "Definition of Done (DoD)",
    description:
      "Checklist des critères à satisfaire pour qu’un livrable soit considéré prêt à être utilisé.",
  },
  {
    term: "Définition de prêt (DoR)",
    english: "Definition of Ready (DoR)",
    description:
      "Checklist contenant toutes les informations nécessaires pour qu’une exigence puisse être traitée par l’équipe.",
  },
  {
    term: "Dette technique",
    english: "Technical Debt",
    description:
      "Coût futur engendré par des choix techniques ou du travail non réalisé plus tôt.",
  },
  {
    term: "BDD",
    english: "Behavior-Driven Development (BDD)",
    description:
      "Approche de conception basée sur le test-first et des scénarios en langage naturel.",
  },
  {
    term: "Développement orienté fonctionnalités",
    english: "Feature-Driven Development",
    description:
      "Méthode Agile orientée autour des fonctionnalités importantes pour le client.",
  },
  {
    term: "TDD",
    english: "Test-Driven Development (TDD)",
    description:
      "Technique consistant à écrire les tests avant le code afin de valider en continu et viser zéro défaut.",
  },
  {
    term: "ATDD",
    english: "Acceptance Test-Driven Development (ATDD)",
    description:
      "Approche collaborative définissant les tests d’acceptation avant la livraison.",
  },
  {
    term: "DevOps",
    english: "DevOps",
    description:
      "Pratiques visant à améliorer la collaboration Dev + Ops pour livrer en continu.",
  },
  {
    term: "BRD",
    english: "Business Requirement Documents (BRD)",
    description:
      "Document listant toutes les exigences business d’un projet.",
  },
  {
    term: "DSDM",
    english: "Dynamic Systems Development Model (DSDM)",
    description:
      "Cadre Agile de livraison de projets.",
  },
  {
    term: "Élaboration progressive",
    english: "Progressive Elaboration",
    description:
      "Affinage itératif du plan au fur et à mesure que l’information devient disponible.",
  },
  {
    term: "Équipe auto-organisée",
    english: "Self-Organizing Team",
    description:
      "Équipe où les membres prennent naturellement le leadership pour atteindre les objectifs.",
  },
  {
    term: "Équipe pluridisciplinaire",
    english: "Cross-Functional Team",
    description:
      "Équipe possédant toutes les compétences nécessaires pour livrer un incrément.",
  },
  {
    term: "Équipe Scrum",
    english: "Scrum Team",
    description:
      "Composée de l’équipe de développement, du Scrum Master et du Product Owner.",
  },
  {
    term: "État d’esprit Agile",
    english: "Agile Mindset",
    description:
      "Mode de pensée basé sur les valeurs et principes du Manifeste Agile.",
  },
  {
    term: "Événements Kaizen",
    english: "Kaizen Events",
    description:
      "Événements dédiés à l’amélioration continue du système.",
  },
  {
    term: "Exigence fonctionnelle",
    english: "Functional Requirement",
    description:
      "Comportement spécifique attendu d’un produit ou service.",
  },
  {
    term: "eXtreme Programming",
    english: "eXtreme Programming (XP)",
    description:
      "Méthode Agile visant haute qualité logicielle, adaptation rapide et releases fréquentes.",
  },
];

// 👉 Suite du glossaire — à ajouter dans GlossaryAgile.tsx
// Toujours le même type : GlossaryItem[]

const moreGlossary3: GlossaryItem[] = [
  {
    term: "Famille de méthodes Crystal",
    english: "Crystal Family of Methods",
    description:
      "Ensemble de méthodologies Agiles de développement logiciel adaptées au contexte spécifique.",
  },
  {
    term: "Flow Master",
    english: "Flowmaster",
    description:
      "Coach d’équipe en flux continu ou Kanban. Rôle équivalent au Scrum Master.",
  },
  {
    term: "Flux de valeur",
    english: "Value Stream",
    description:
      "Ensemble d’activités nécessaires pour livrer de la valeur au client.",
  },
  {
    term: "Gestion des changements organisationnels",
    english: "Organizational Change Management",
    description:
      "Processus structuré de transition vers un état futur avec bénéfices business attendus.",
  },
  {
    term: "Hoshin Kanri",
    english: "Hoshin Kanri",
    description:
      "Méthode de déploiement stratégique des politiques et objectifs.",
  },
  {
    term: "IDEAL",
    english: "IDEAL",
    description:
      "Modèle d’amélioration organisationnelle : Initiating, Diagnosing, Establishing, Acting, Learning.",
  },
  {
    term: "Incrément",
    english: "Increment",
    description:
      "Livrable fonctionnel testé et accepté représentant une partie du produit final.",
  },
  {
    term: "Intégration continue",
    english: "Continuous Integration",
    description:
      "Pratique d’intégration fréquente et validation du travail de toute l’équipe.",
  },
  {
    term: "Itération",
    english: "Iteration",
    description:
      "Cycle de développement limité dans le temps produisant de la valeur.",
  },
  {
    term: "Large-Scale Scrum",
    english: "Large-Scale Scrum (LeSS)",
    description:
      "Cadre d’extension de Scrum pour les environnements à grande échelle.",
  },
  {
    term: "Lean Software Development",
    english: "Lean Software Development (LSD)",
    description:
      "Adaptation des principes Lean à la création de logiciels.",
  },
  {
    term: "Livraison continue",
    english: "Continuous Delivery",
    description:
      "Livraison fréquente d’incréments via automatisation et petits lots.",
  },
  {
    term: "Manifeste Agile",
    english: "Agile Manifesto",
    description:
      "Texte fondateur définissant valeurs et principes Agiles.",
  },
  {
    term: "Méthode Kanban",
    english: "Kanban Method",
    description:
      "Méthode Agile issue du Kanban industriel pour les travaux intellectuels.",
  },
  {
    term: "Obstacle",
    english: "Impediment",
    description:
      "Blocage empêchant l’équipe d’atteindre ses objectifs.",
  },
  {
    term: "Organisation en silo",
    english: "Siloed Organization",
    description:
      "Structure où chaque unité ne contribue qu’à une partie de la valeur globale.",
  },
  {
    term: "Paint Drip",
    english: "Paint Drip",
    description: "Voir Broken Comb (profil multi-compétences).",
  },
  {
    term: "Persona",
    english: "Personas",
    description:
      "Archétype représentant un groupe d’utilisateurs aux caractéristiques similaires.",
  },
  {
    term: "Pivot",
    english: "Pivot",
    description:
      "Changement stratégique pour tester une nouvelle hypothèse produit.",
  },
];

// 👉 Suite du glossaire — à ajouter dans GlossaryAgile.tsx

const moreGlossary4: GlossaryItem[] = [
  {
    term: "Planification du Sprint",
    english: "Sprint Planning",
    description:
      "Événement Scrum où l’équipe planifie le travail du Sprint en cours. Aussi appelé planification d’itération.",
  },
  {
    term: "Planification par vagues",
    english: "Rolling Wave Planning",
    description:
      "Planification itérative : court terme détaillé, long terme à haut niveau.",
  },
  {
    term: "PDCA",
    english: "Plan–Do–Check–Act (PDCA)",
    description:
      "Méthode itérative d’amélioration continue des processus et produits.",
  },
  {
    term: "Point de blocage",
    english: "Blocker",
    description:
      "Élément qui empêche l’avancement. Voir Obstacle.",
  },
  {
    term: "Principes Agile",
    english: "Agile Principles",
    description:
      "Les 12 principes guidant l’exécution des projets Agiles.",
  },
  {
    term: "Processus unifié Agile",
    english: "Agile Unified Process",
    description:
      "Version simplifiée du RUP intégrant des concepts Agiles.",
  },
  {
    term: "Product Owner",
    english: "Product Owner",
    description:
      "Responsable de la valeur du produit et des priorités. Responsable final du produit.",
  },
  {
    term: "Professionnel Agile",
    english: "Agile Practitioner",
    description:
      "Personne appliquant l’état d’esprit Agile en équipe pluridisciplinaire.",
  },
  {
    term: "Profil en I",
    english: "I-shaped",
    description:
      "Personne spécialisée dans un seul domaine.",
  },
  {
    term: "Profil en T",
    english: "T-shaped",
    description:
      "Expert dans un domaine avec compétences transverses.",
  },
  {
    term: "Programmation en binôme",
    english: "Pair Programming",
    description:
      "Deux développeurs travaillent ensemble sur le même code.",
  },
  {
    term: "Radiateur d’information",
    english: "Information Radiator",
    description:
      "Affichage visible d’informations projet pour partage rapide.",
  },
  {
    term: "Remaniement",
    english: "Refactoring",
    description:
      "Amélioration de la conception sans changer le comportement.",
  },
  {
    term: "Responsable des requêtes de service",
    english: "Service Request Manager",
    description:
      "Priorise les requêtes en flux continu / Kanban. Équivalent Product Owner.",
  },
  {
    term: "Rétrospective",
    english: "Retrospective",
    description:
      "Atelier d’amélioration continue du processus et du produit.",
  },
  {
    term: "SAFe",
    english: "Scaled Agile Framework (SAFe)",
    description:
      "Framework Lean-Agile pour organisations à grande échelle.",
  },
  {
    term: "Scrum",
    english: "Scrum",
    description:
      "Cadre Agile avec rôles, événements et artefacts définis.",
  },
  {
    term: "Scrum Master",
    english: "Scrum Master",
    description:
      "Coach Scrum qui supprime les obstacles et protège l’équipe.",
  },
];

// 👉 Suite du glossaire — à ajouter dans GlossaryAgile.tsx

const moreGlossary5: GlossaryItem[] = [
  {
    term: "Scrum of Scrums",
    english: "Scrum of Scrums",
    description:
      "Technique de coordination Scrum multi-équipes travaillant sur un même produit.",
  },
  {
    term: "Scrumban",
    english: "Scrumban",
    description:
      "Cadre hybride combinant pilotage Scrum et amélioration continue Kanban.",
  },
  {
    term: "Servant Leadership",
    english: "Servant Leadership",
    description:
      "Leadership centré sur le service de l’équipe et le développement des membres.",
  },
  {
    term: "Smoke Testing",
    english: "Smoke Testing",
    description:
      "Tests rapides vérifiant les fonctions critiques du système.",
  },
  {
    term: "Spécification fonctionnelle",
    english: "Functional Specification",
    description:
      "Description des fonctions qu’un système doit remplir.",
  },
  {
    term: "Spécification par l’exemple",
    english: "Specification by Example (SBE)",
    description:
      "Définition collaborative des exigences via exemples concrets.",
  },
  {
    term: "Spike",
    english: "Spike",
    description:
      "Courte exploration technique pour valider une approche.",
  },
  {
    term: "Sprint",
    english: "Sprint",
    description:
      "Itération Scrum limitée dans le temps.",
  },
  {
    term: "Story Point",
    english: "Story Point",
    description:
      "Unité relative d’estimation d’effort des user stories.",
  },
  {
    term: "Swarming",
    english: "Swarming",
    description:
      "Plusieurs membres se concentrent sur la résolution d’un obstacle.",
  },
  {
    term: "Tableau Kanban",
    english: "Kanban Board",
    description:
      "Outil visuel de suivi de flux et détection des goulets.",
  },
  {
    term: "Tableau Scrum",
    english: "Scrum Board",
    description:
      "Tableau visuel de gestion du Sprint Backlog.",
  },
  {
    term: "Travail en binôme",
    english: "Pair Work",
    description:
      "Deux membres travaillent sur le même élément.",
  },
  {
    term: "Travers",
    english: "Anti-Pattern",
    description:
      "Pratique reconnue comme inefficace ou nuisible.",
  },
  {
    term: "User Story",
    english: "User Story",
    description:
      "Courte description de valeur pour un utilisateur.",
  },
  {
    term: "UX Design",
    english: "UX Design",
    description:
      "Démarche d’amélioration de l’expérience utilisateur.",
  },
];

// 👉 Fusion complète finale
export const allAgileTerminologies: GlossaryItem[] = [
  ...baseGlossary,
  ...moreGlossary,
  ...moreGlossary2,
  ...moreGlossary3,
  ...moreGlossary4,
  ...moreGlossary5,
];
