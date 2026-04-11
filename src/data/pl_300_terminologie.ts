export type GlossaryItem = {
  term: string;
  english: string;
  description: string;
};

export const powerBiGlossary: GlossaryItem[] = [
  {
    term: "Sources de données",
    english: "Data Sources",
    description:
      "Origines à partir desquelles les données sont extraites, telles que les bases de données, fichiers, services cloud ou API.",
  },
  {
    term: "Modes de connexion",
    english: "Connection Modes",
    description:
      "Méthodes d’accès aux données (Import, DirectQuery, Live Connection) influençant les performances et la fraîcheur des données.",
  },
  {
    term: "Power Query",
    english: "Power Query",
    description:
      "Outil de transformation permettant de nettoyer, restructurer et préparer les données avant leur chargement dans le modèle.",
  },
  {
    term: "Nettoyage des données",
    english: "Data Cleaning",
    description:
      "Processus visant à corriger, supprimer ou gérer les données manquantes, incorrectes ou incohérentes.",
  },
  {
    term: "Transformation des données",
    english: "Data Transformation",
    description:
      "Modification de la structure ou du format des données afin de les rendre exploitables pour l’analyse.",
  },
  {
    term: "Qualité des données",
    english: "Data Quality",
    description:
      "Degré de fiabilité, de cohérence et de précision des données utilisées pour l’analyse.",
  },
  {
    term: "Actualisation des données",
    english: "Data Refresh",
    description:
      "Mécanisme permettant de maintenir les données à jour selon une fréquence définie.",
  },
  {
    term: "Modèle de données",
    english: "Data Model",
    description:
      "Structure logique représentant les relations entre les tables de données.",
  },
  {
    term: "Schéma en étoile",
    english: "Star Schema",
    description:
      "Modèle optimisé composé d’une table de faits centrale reliée à plusieurs tables de dimensions.",
  },
  {
    term: "Tables de faits",
    english: "Fact Tables",
    description:
      "Tables contenant les données quantitatives mesurables comme les ventes, coûts ou quantités.",
  },
  {
    term: "Tables de dimensions",
    english: "Dimension Tables",
    description:
      "Tables décrivant le contexte des données telles que le temps, les produits ou les clients.",
  },
  {
    term: "Relations",
    english: "Relationships",
    description:
      "Liens entre les tables permettant la navigation et l’analyse croisée des données.",
  },
  {
    term: "Cardinalité",
    english: "Cardinality",
    description:
      "Type de relation entre les tables, par exemple un-à-un ou un-à-plusieurs.",
  },
  {
    term: "Granularité",
    english: "Granularity",
    description:
      "Niveau de détail des données stockées dans une table.",
  },
  {
    term: "Optimisation du modèle",
    english: "Model Optimization",
    description:
      "Ensemble de bonnes pratiques visant à améliorer les performances et la lisibilité du modèle.",
  },
  {
    term: "Mesures",
    english: "Measures",
    description:
      "Calculs dynamiques évalués en fonction du contexte d’analyse.",
  },
  {
    term: "Colonnes calculées",
    english: "Calculated Columns",
    description:
      "Calculs effectués ligne par ligne lors du chargement des données.",
  },
  {
    term: "Contexte de filtre",
    english: "Filter Context",
    description:
      "Ensemble de filtres appliqués à une mesure lors de son évaluation.",
  },
  {
    term: "Contexte de ligne",
    english: "Row Context",
    description:
      "Contexte lié à une ligne spécifique d’une table lors des calculs.",
  },
  {
    term: "Fonctions d’agrégation",
    english: "Aggregation Functions",
    description:
      "Fonctions permettant de résumer les données, telles que SUM, AVERAGE ou COUNT.",
  },
  {
    term: "Fonctions itératives",
    english: "Iterator Functions",
    description:
      "Fonctions effectuant des calculs ligne par ligne comme SUMX ou AVERAGEX.",
  },
  {
    term: "Intelligence temporelle",
    english: "Time Intelligence",
    description:
      "Fonctions permettant d’analyser les données dans le temps (YTD, MTD, comparaisons annuelles).",
  },
  {
    term: "Performance DAX",
    english: "DAX Performance",
    description:
      "Impact des formules DAX sur la rapidité et l’efficacité des calculs.",
  },
  {
    term: "Rapports",
    english: "Reports",
    description:
      "Collections de pages interactives permettant l’analyse des données.",
  },
  {
    term: "Tableaux de bord",
    english: "Dashboards",
    description:
      "Vues synthétiques regroupant les indicateurs clés de performance.",
  },
  {
    term: "Visuels",
    english: "Visuals",
    description:
      "Représentations graphiques des données comme les graphiques, tableaux ou cartes.",
  },
  {
    term: "Interactivité",
    english: "Interactivity",
    description:
      "Capacité des visuels à réagir aux filtres, segments et sélections.",
  },
  {
    term: "Drill-down / Drill-through",
    english: "Drill-down / Drill-through",
    description:
      "Navigation permettant d’explorer les données à différents niveaux de détail.",
  },
  {
    term: "Indicateurs de performance",
    english: "Key Performance Indicators (KPIs)",
    description:
      "Mesures utilisées pour suivre l’atteinte des objectifs.",
  },
  {
    term: "Analyse de tendances",
    english: "Trend Analysis",
    description:
      "Étude de l’évolution des données dans le temps.",
  },
  {
    term: "Paramètres What-if",
    english: "What-if Parameters",
    description:
      "Outils permettant de simuler des scénarios hypothétiques.",
  },
  {
    term: "Power BI Service",
    english: "Power BI Service",
    description:
      "Plateforme cloud permettant la publication, le partage et la collaboration autour des rapports.",
  },
  {
    term: "Sécurité au niveau des lignes",
    english: "Row-Level Security",
    description:
      "Mécanisme limitant l’accès aux données selon le profil utilisateur.",
  },
  {
    term: "Gouvernance des données",
    english: "Data Governance",
    description:
      "Ensemble de règles garantissant la conformité, la sécurité et la cohérence des données.",
  },
  {
    term: "Schéma en flocon",
    english: "Snowflake Schema",
    description:
      "Variante plus normalisée du schéma en étoile avec des dimensions éclatées.",
  },
];
