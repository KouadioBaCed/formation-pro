export interface FormulaItem {
  abbreviation: string; // Abréviation ou nom de la fonction
  name: string; // Nom complet
  definition: string; // Définition du lexique
  usage: string; // Utilisation
  formula?: string; // Formule ou syntaxe
  interpretation?: string; // Interprétation du résultat
}

export const formulas: FormulaItem[] = [
  // 🔹 AGRÉGATIONS DE BASE
  {
    abbreviation: "SUM",
    name: "Somme",
    definition: "Calcule la somme d’une colonne numérique.",
    usage: "Utilisée pour totaliser des montants comme le chiffre d’affaires.",
    formula: "SUM(Ventes[Montant])",
    interpretation: "Retourne le total des valeurs de la colonne."
  },
  {
    abbreviation: "AVERAGE",
    name: "Moyenne",
    definition: "Calcule la moyenne arithmétique d’une colonne.",
    usage: "Analyse des valeurs moyennes (panier moyen, moyenne des ventes).",
    formula: "AVERAGE(Ventes[Montant])",
    interpretation: "Donne la valeur moyenne sur l’ensemble des données."
  },
  {
    abbreviation: "COUNT",
    name: "Comptage",
    definition: "Compte le nombre de valeurs non vides.",
    usage: "Utilisé pour compter les enregistrements.",
    formula: "COUNT(Ventes[Montant])",
    interpretation: "Retourne le nombre de lignes contenant une valeur."
  },
  {
    abbreviation: "DISTINCTCOUNT",
    name: "Comptage distinct",
    definition: "Compte les valeurs uniques d’une colonne.",
    usage: "Compter le nombre de clients distincts.",
    formula: "DISTINCTCOUNT(Ventes[ClientID])",
    interpretation: "Retourne le nombre de valeurs différentes."
  },

  // 🔹 FONCTIONS ITÉRATIVES
  {
    abbreviation: "SUMX",
    name: "Somme itérative",
    definition: "Additionne une expression évaluée ligne par ligne.",
    usage: "Calculs complexes ligne par ligne.",
    formula: "SUMX(Ventes, Ventes[Quantité] * Ventes[Prix])",
    interpretation: "Calcule un total basé sur une expression personnalisée."
  },
  {
    abbreviation: "AVERAGEX",
    name: "Moyenne itérative",
    definition: "Calcule la moyenne d’une expression ligne par ligne.",
    usage: "Moyennes calculées dynamiquement.",
    formula: "AVERAGEX(Ventes, Ventes[Montant])",
    interpretation: "Retourne une moyenne basée sur un calcul."
  },
  {
    abbreviation: "COUNTX",
    name: "Comptage itératif",
    definition: "Compte les lignes selon une expression.",
    usage: "Comptage conditionnel avancé.",
    formula: "COUNTX(Ventes, Ventes[Montant])",
    interpretation: "Compte les résultats évalués."
  },

  // 🔹 CONTEXTE ET FILTRES
  {
    abbreviation: "CALCULATE",
    name: "Calcul avec contexte",
    definition: "Modifie le contexte de filtre d’un calcul.",
    usage: "Calculs dépendants de filtres spécifiques.",
    formula: "CALCULATE(SUM(Ventes[Montant]), Région[Nom] = \"Abidjan\")",
    interpretation: "Applique un filtre avant d’effectuer le calcul."
  },
  {
    abbreviation: "FILTER",
    name: "Filtrage de table",
    definition: "Retourne une table filtrée selon une condition.",
    usage: "Créer des sous-ensembles de données.",
    formula: "FILTER(Ventes, Ventes[Montant] > 100000)",
    interpretation: "Ne conserve que les lignes répondant à la condition."
  },
  {
    abbreviation: "ALL",
    name: "Suppression des filtres",
    definition: "Supprime tous les filtres appliqués.",
    usage: "Calculs globaux indépendants des filtres.",
    formula: "CALCULATE(SUM(Ventes[Montant]), ALL(Région))",
    interpretation: "Ignore les filtres existants."
  },

  // 🔹 CONDITIONS
  {
    abbreviation: "IF",
    name: "Condition logique",
    definition: "Teste une condition logique.",
    usage: "Classer ou catégoriser des valeurs.",
    formula: "IF(Ventes[Montant] > 50000, \"Élevé\", \"Faible\")",
    interpretation: "Retourne un résultat selon la condition."
  },
  {
    abbreviation: "SWITCH",
    name: "Condition multiple",
    definition: "Alternative avancée à IF.",
    usage: "Gérer plusieurs conditions.",
    formula: "SWITCH(TRUE(), Ventes[Montant] > 100000, \"Très élevé\", \"Normal\")",
    interpretation: "Retourne la valeur correspondant à la première condition vraie."
  },

  // 🔹 INTELLIGENCE TEMPORELLE
  {
    abbreviation: "TOTALYTD",
    name: "Cumul annuel",
    definition: "Calcule le total depuis le début de l’année.",
    usage: "Analyse annuelle cumulative.",
    formula: "TOTALYTD(SUM(Ventes[Montant]), Date[Date])",
    interpretation: "Retourne le cumul annuel."
  },
  {
    abbreviation: "SAMEPERIODLASTYEAR",
    name: "Période année précédente",
    definition: "Compare une période à l’année précédente.",
    usage: "Analyse de croissance annuelle.",
    formula: "SAMEPERIODLASTYEAR(Date[Date])",
    interpretation: "Permet la comparaison N / N-1."
  },

  // 🔹 RELATIONS
  {
    abbreviation: "USERELATIONSHIP",
    name: "Relation inactive",
    definition: "Active une relation inactive.",
    usage: "Calculs alternatifs sur différentes dates.",
    formula:
      "CALCULATE(SUM(Ventes[Montant]), USERELATIONSHIP(Date[Date], Ventes[DateLivraison]))",
    interpretation: "Utilise une relation non active par défaut."
  },

  // 🔹 CALCULS AVANCÉS
  {
    abbreviation: "DIVIDE",
    name: "Division sécurisée",
    definition: "Effectue une division sans erreur.",
    usage: "Calcul de ratios et marges.",
    formula: "DIVIDE(SUM(Ventes[Profit]), SUM(Ventes[Montant]))",
    interpretation: "Évite les erreurs de division par zéro."
  },
  {
    abbreviation: "SELECTEDVALUE",
    name: "Valeur sélectionnée",
    definition: "Retourne la valeur sélectionnée dans un filtre.",
    usage: "Interactions avec les segments.",
    formula: "SELECTEDVALUE(Année[Année])",
    interpretation: "Retourne la valeur unique sélectionnée."
  },

  // 🔹 KPI
  {
    abbreviation: "KPI_CA",
    name: "Chiffre d’affaires",
    definition: "Somme totale des ventes.",
    usage: "Suivi de la performance commerciale.",
    formula: "SUM(Ventes[Montant])",
    interpretation: "Indique le revenu total."
  },
  {
    abbreviation: "KPI_MARGE",
    name: "Marge",
    definition: "Rapport entre le profit et le chiffre d’affaires.",
    usage: "Analyse de rentabilité.",
    formula: "DIVIDE(SUM(Ventes[Profit]), SUM(Ventes[Montant]))",
    interpretation: "Mesure la performance financière."
  }
];
