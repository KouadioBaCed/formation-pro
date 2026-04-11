export interface Question {
  id: number;
  question: string;
  options: string[];
  solution: string;
  explication: string;
}

export const questions: Question[] = [
  {
    id: 101,
    question: "Quelle fonction DAX permet de compter le nombre de lignes d’une table filtrée ?",
    options: ["COUNTROWS", "COUNT", "SUM", "DISTINCTCOUNT"],
    solution: "COUNTROWS",
    explication: "COUNTROWS permet de compter le nombre de lignes d’une table, y compris après application de filtres."
  },
  {
    id: 102,
    question: "Quelle est la meilleure méthode pour optimiser un modèle volumineux dans Power BI ?",
    options: [
      "Réduire le nombre de colonnes inutiles",
      "Ajouter plus de mesures",
      "Importer toutes les données",
      "Utiliser uniquement des colonnes calculées"
    ],
    solution: "Réduire le nombre de colonnes inutiles",
    explication: "Moins de colonnes réduit la taille du modèle et améliore les performances."
  },
  {
    id: 103,
    question: "Dans Power Query, que fait l’étape « Détection du type » ?",
    options: [
      "Convertit les colonnes calculées",
      "Détecte et applique les types de données",
      "Crée des relations",
      "Crée des mesures"
    ],
    solution: "Détecte et applique les types de données",
    explication: "Cette étape identifie automatiquement les types comme texte, nombre ou date."
  },
  {
    id: 104,
    question: "Que fait la fonction DAX LOOKUPVALUE() ?",
    options: [
      "Cherche une valeur dans une colonne en fonction d’une autre colonne",
      "Trouve la première valeur non vide",
      "Agrège les données",
      "Crée une relation"
    ],
    solution: "Cherche une valeur dans une colonne en fonction d’une autre colonne",
    explication: "LOOKUPVALUE permet de retrouver une valeur correspondante selon des critères."
  },
  {
    id: 105,
    question: "Comment Power BI traite-t-il les relations inactives par défaut ?",
    options: [
      "Elles sont ignorées sauf si USERELATIONSHIP() est utilisée",
      "Elles s’appliquent automatiquement",
      "Elles remplacent les relations actives",
      "Elles doublent les données"
    ],
    solution: "Elles sont ignorées sauf si USERELATIONSHIP() est utilisée",
    explication: "Les relations inactives doivent être activées explicitement dans une mesure."
  },

  {
    id: 110,
    question: "Quel type de données est conseillé pour une colonne contenant des codes postaux ?",
    options: ["Nombre entier", "Texte", "Décimal", "Booléen"],
    solution: "Texte",
    explication: "Les codes postaux peuvent contenir des zéros en début, donc le texte est recommandé."
  },
  {
    id: 111,
    question: "Quelle est la meilleure approche pour gérer les erreurs dans Power Query ?",
    options: [
      "Supprimer les lignes contenant des erreurs",
      "Remplacer ou corriger les erreurs",
      "Ignorer les erreurs",
      "Importer les données sans modification"
    ],
    solution: "Remplacer ou corriger les erreurs",
    explication: "Corriger les erreurs permet de préserver les données utiles."
  },
  {
    id: 112,
    question: "Que signifie le concept de « grain » d’une table ?",
    options: [
      "Le niveau de détail des lignes",
      "Le nombre de colonnes",
      "La taille du fichier",
      "La fréquence de mise à jour"
    ],
    solution: "Le niveau de détail des lignes",
    explication: "Le grain définit ce que représente une ligne unique dans une table."
  },
  {
    id: 113,
    question: "Quelle fonction DAX permet d’obtenir la date maximale dans une colonne ?",
    options: ["MAX", "MAXX", "MAX(Dates[Date])", "LASTDATE"],
    solution: "MAX(Dates[Date])",
    explication: "MAX sur une colonne de dates retourne la date la plus récente."
  },
  {
    id: 114,
    question: "Quel est l’avantage principal des mesures par rapport aux colonnes calculées ?",
    options: [
      "Les mesures sont recalculées selon le contexte",
      "Les colonnes sont plus dynamiques",
      "Les mesures ne peuvent pas être filtrées",
      "Les colonnes sont toujours statiques"
    ],
    solution: "Les mesures sont recalculées selon le contexte",
    explication: "Les mesures s’adaptent dynamiquement aux filtres et visuels."
  },

  {
    id: 130,
    question: "Quelle fonctionnalité Power BI permet d’ajouter un filtre global sur plusieurs pages ?",
    options: ["Filtre de page", "Filtre de rapport", "Slicer", "Drillthrough"],
    solution: "Filtre de rapport",
    explication: "Le filtre de rapport s’applique à toutes les pages."
  },
  {
    id: 131,
    question: "Comment gérer les doublons dans Power Query ?",
    options: [
      "Supprimer les doublons",
      "Créer une colonne index",
      "Appliquer un filtre",
      "Fusionner les colonnes"
    ],
    solution: "Supprimer les doublons",
    explication: "Cette option permet de conserver une seule occurrence par valeur."
  },
  {
    id: 132,
    question: "Quelle fonction permet de calculer une somme avec un filtre en DAX ?",
    options: ["SUM()", "CALCULATE(SUM(), filtre)", "COUNT()", "FILTER()"],
    solution: "CALCULATE(SUM(), filtre)",
    explication: "CALCULATE modifie le contexte de filtre d’un calcul."
  },
  {
    id: 133,
    question: "Quel est le rôle d’une table de dimension ?",
    options: [
      "Contenir les attributs descriptifs",
      "Contenir les mesures",
      "Agréger les données",
      "Créer les relations"
    ],
    solution: "Contenir les attributs descriptifs",
    explication: "Les dimensions décrivent les faits (date, produit, client, etc.)."
  },

  {
    id: 156,
    question: "Quel visuel est le plus adapté pour analyser une tendance dans le temps ?",
    options: [
      "Graphique en colonnes",
      "Graphique en ligne",
      "Carte",
      "Tableau croisé"
    ],
    solution: "Graphique en ligne",
    explication: "Le graphique en ligne est idéal pour visualiser l’évolution temporelle."
  },
  {
    id: 157,
    question: "Quel est le rôle d’un slicer dans Power BI ?",
    options: [
      "Filtrer les données du rapport",
      "Modifier les relations",
      "Créer des mesures",
      "Transformer les données"
    ],
    solution: "Filtrer les données du rapport",
    explication: "Le slicer permet à l’utilisateur d’interagir avec les filtres."
  },
  {
    id: 158,
    question: "Quel type de données n’est pas supporté nativement dans Power BI ?",
    options: ["Texte", "Image", "Vidéo", "Nombre"],
    solution: "Vidéo",
    explication: "Power BI ne prend pas en charge les vidéos comme type de données natif."
  },
  {
    id: 159,
    question: "Quel est le rôle d’un Gateway dans Power BI Service ?",
    options: [
      "Connecter Power BI à des sources locales",
      "Partager les rapports",
      "Créer des rapports",
      "Automatiser les mesures"
    ],
    solution: "Connecter Power BI à des sources locales",
    explication: "Le gateway permet l’accès sécurisé aux données locales."
  },
  {
    id: 180,
    question: "Quel est le principal avantage du mode DirectQuery ?",
    options: [
      "Données toujours à jour",
      "Meilleures performances",
      "Colonnes calculées uniquement",
      "Moins de configuration"
    ],
    solution: "Données toujours à jour",
    explication: "Les requêtes sont exécutées directement sur la source de données."
  }
];
