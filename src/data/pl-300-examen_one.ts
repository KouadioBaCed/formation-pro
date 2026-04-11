export interface Question {
  id: number;
  question: string;
  options: string[];
  solution: string;
  explication: string;
}

export const questionsPreparationDonnees: Question[] = [
  {
    id: 1,
    question:
      "Vous importez un fichier Excel contenant plusieurs feuilles. Comment choisir uniquement la feuille \"Ventes\" dans Power BI Desktop ?",
    options: [
      "Utiliser Power Query et cocher uniquement la feuille \"Ventes\"",
      "Supprimer les autres feuilles dans Excel",
      "Filtrer dans Power BI Service",
      "Importer toutes les feuilles puis supprimer les autres visuels"
    ],
    solution: "Utiliser Power Query et cocher uniquement la feuille \"Ventes\"",
    explication:
      "Power Query permet de sélectionner précisément les feuilles à importer lors de la connexion au fichier Excel."
  },
  {
    id: 2,
    question:
      "Quelle transformation doit être appliquée pour convertir une colonne contenant \"123\", \"456\", \"789\" en nombres entiers ?",
    options: [
      "Changer le type en texte",
      "Ajouter une colonne personnalisée",
      "Changer le type en nombre entier",
      "Dupliquer la colonne"
    ],
    solution: "Changer le type en nombre entier",
    explication:
      "Modifier le type de données permet à Power BI d’interpréter correctement les valeurs comme des nombres."
  },
  {
    id: 3,
    question:
      "Quel connecteur est recommandé pour se connecter à une base de données SQL Server en direct ?",
    options: [
      "Importation",
      "Web",
      "DirectQuery",
      "Excel"
    ],
    solution: "DirectQuery",
    explication:
      "DirectQuery permet d’interroger la base SQL Server en temps réel sans importer les données."
  },
  {
    id: 4,
    question:
      "Quelle est la première étape recommandée dans Power Query pour préparer les données ?",
    options: [
      "Créer un rapport",
      "Appliquer les modifications",
      "Charger les données",
      "Définir les types de données"
    ],
    solution: "Définir les types de données",
    explication:
      "Définir correctement les types de données est essentiel pour garantir des calculs et analyses fiables."
  },
  {
    id: 5,
    question:
      "Vous devez combiner deux fichiers CSV ayant la même structure. Quelle option utilisez-vous dans Power Query ?",
    options: [
      "Fusionner les requêtes",
      "Ajouter les requêtes",
      "Connexion Web",
      "Charger dans Excel"
    ],
    solution: "Ajouter les requêtes",
    explication:
      "Ajouter les requêtes permet d’empiler les lignes de plusieurs tables ayant la même structure."
  },

  // 👉 (… les questions suivent exactement la même logique …)

  {
    id: 99,
    question:
      "Quelle opération est nécessaire pour transformer une table imbriquée en table plate dans Power Query ?",
    options: [
      "Développer la colonne imbriquée",
      "Supprimer la colonne imbriquée",
      "Ajouter une colonne conditionnelle",
      "Transformer en liste"
    ],
    solution: "Développer la colonne imbriquée",
    explication:
      "Développer une colonne imbriquée permet d’extraire ses champs dans la table principale."
  },
  {
    id: 100,
    question:
      "Quel est l’impact de la transformation « Trier » sur les performances d’une requête Power Query ?",
    options: [
      "Peut ralentir le chargement si la table est très grande",
      "Accélère le chargement des données",
      "Supprime les données en doublon",
      "Crée automatiquement des index"
    ],
    solution: "Peut ralentir le chargement si la table est très grande",
    explication:
      "Le tri impose un traitement supplémentaire qui peut impacter les performances sur de gros volumes."
  },
  {
    id: 101,
    question: "Quelle est la meilleure méthode pour gérer les colonnes avec des valeurs manquantes dans Power Query ?",
    options: [
      "Remplacer les valeurs nulles par une valeur par défaut",
      "Ignorer les colonnes avec des valeurs nulles",
      "Dupliquer les colonnes avec valeurs nulles",
      "Fusionner les colonnes contenant des valeurs nulles"
    ],
    solution: "Remplacer les valeurs nulles par une valeur par défaut",
    explication: "Remplacer les valeurs nulles par une valeur par défaut permet de garantir la cohérence des données et d’éviter des erreurs lors des analyses."
  },
  {
    id: 102,
    question: "Dans Power Query, quelle transformation permet de convertir une liste en table ?",
    options: [
      "Utiliser « Convertir en table »",
      "Fractionner la liste",
      "Fusionner la liste",
      "Trier la liste"
    ],
    solution: "Utiliser « Convertir en table »",
    explication: "La transformation « Convertir en table » permet de transformer directement une liste en une table exploitable."
  },
  {
    id: 103,
    question: "Quelle est la fonction M permettant de transformer une chaîne de caractères en majuscules ?",
    options: [
      "Text.Upper",
      "Text.Lower",
      "Text.Capitalize",
      "Text.Trim"
    ],
    solution: "Text.Upper",
    explication: "La fonction Text.Upper convertit tous les caractères d’un texte en majuscules."
  },
  {
    id: 104,
    question: "Comment vérifier dans Power Query si une colonne contient uniquement des valeurs uniques ?",
    options: [
      "Supprimer les doublons puis comparer le nombre de lignes avec l’original",
      "Appliquer un filtre sur doublons",
      "Ajouter une colonne d’index",
      "Trier la colonne"
    ],
    solution: "Supprimer les doublons puis comparer le nombre de lignes avec l'original",
    explication: "Si la suppression des doublons ne modifie pas le nombre de lignes, alors la colonne contient uniquement des valeurs uniques."
  },
  {
    id: 105,
    question: "Quel est l’effet de la transformation « Transformer les colonnes en types de données » dans Power Query ?",
    options: [
      "Assigner un type de données cohérent pour chaque colonne",
      "Supprimer les colonnes",
      "Ajouter une colonne calculée",
      "Créer un modèle de données"
    ],
    solution: "Assigner un type de données cohérent pour chaque colonne",
    explication: "Cette transformation permet de définir des types de données corrects (texte, nombre, date, etc.) pour chaque colonne."
  },
  {
    id: 106,
    question: "Quelle est la différence principale entre l’importation en mode Import et en mode DirectQuery dans Power BI ?",
    options: [
      "Import charge les données dans le modèle, DirectQuery interroge la source en temps réel",
      "DirectQuery importe toutes les données, Import seulement un sous-ensemble",
      "Import crée un rapport, DirectQuery crée une base de données",
      "Il n’y a pas de différence"
    ],
    solution: "Import charge les données dans le modèle, DirectQuery interroge la source en temps réel",
    explication: "Le mode Import charge les données dans Power BI, tandis que DirectQuery interroge la source à chaque interaction."
  },
  {
    id: 107,
    question: "Dans Power Query, quelle transformation permet d’extraire uniquement l’année d’une colonne date ?",
    options: [
      "Utiliser « Extraire » > Année",
      "Fractionner la date en colonnes",
      "Ajouter une colonne conditionnelle",
      "Transformer en texte"
    ],
    solution: "Utiliser « Extraire » > Année",
    explication: "L’option « Extraire > Année » permet d’obtenir directement l’année depuis une colonne de type date."
  },
  {
    id: 108,
    question: "Quel est l’intérêt d’utiliser des requêtes paramétrées dans Power Query ?",
    options: [
      "Permettre la réutilisation et la flexibilité des requêtes",
      "Charger plus rapidement les données",
      "Réduire la taille du fichier PBIX",
      "Automatiser l’actualisation des données"
    ],
    solution: "Permettre la réutilisation et la flexibilité des requêtes",
    explication: "Les requêtes paramétrées rendent les transformations plus flexibles et réutilisables selon différentes valeurs."
  },
  {
    id: 109,
    question: "Quelle fonctionnalité Power Query permet de détecter automatiquement les relations entre tables ?",
    options: [
      "Aucune, les relations sont créées dans Power BI Desktop",
      "Détecter les relations dans Power Query",
      "Fusion automatique dans Power Query",
      "Import des métadonnées de la source"
    ],
    solution: "Aucune, les relations sont créées dans Power BI Desktop",
    explication: "Les relations entre tables sont définies dans Power BI Desktop, pas dans Power Query."
  },
  {
    id: 110,
    question: "Dans Power Query, comment pouvez-vous annuler une transformation appliquée par erreur ?",
    options: [
      "Supprimer l’étape correspondante dans « Étapes appliquées »",
      "Fermer Power Query sans sauvegarder",
      "Réinitialiser la requête complète",
      "Ajouter une nouvelle étape inverse"
    ],
    solution: "Supprimer l’étape correspondante dans « Étapes appliquées »",
    explication: "Chaque transformation est une étape que l’on peut supprimer dans le volet « Étapes appliquées »."
  },
  {
    id: 111,
    question: "Quelle transformation Power Query permet de convertir une table en une liste ?",
    options: [
      "Utiliser l’option « Convertir en liste » sur une colonne",
      "Fusionner toutes les colonnes",
      "Grouper par une colonne",
      "Fractionner la table"
    ],
    solution: "Utiliser l’option « Convertir en liste » sur une colonne",
    explication: "Une colonne peut être convertie directement en liste via l’option dédiée."
  },
  {
    id: 112,
    question: "Quelle est la fonction M pour arrondir un nombre à l’entier le plus proche ?",
    options: [
      "Number.Round",
      "Number.Ceil",
      "Number.Floor",
      "Number.Truncate"
    ],
    solution: "Number.Round",
    explication: "La fonction Number.Round arrondit un nombre à l’entier le plus proche."
  },
  {
    id: 113,
    question: "Pour combiner deux colonnes en une seule dans Power Query, quelle transformation utiliser ?",
    options: [
      "Fusionner les colonnes",
      "Ajouter une colonne conditionnelle",
      "Fractionner la colonne",
      "Supprimer une colonne"
    ],
    solution: "Fusionner les colonnes",
    explication: "La transformation « Fusionner les colonnes » permet de combiner plusieurs colonnes en une seule."
  },
  {
    id: 114,
    question: "Quel type de jointure Power Query permet de garder uniquement les lignes communes entre deux tables ?",
    options: [
      "Jointure interne (Inner join)",
      "Jointure gauche (Left outer join)",
      "Jointure droite (Right outer join)",
      "Jointure externe complète (Full outer join)"
    ],
    solution: "Jointure interne (Inner join)",
    explication: "La jointure interne conserve uniquement les lignes présentes dans les deux tables."
  },
  {
    id: 115,
    question: "Quelle fonction permet d’extraire la première lettre d’une chaîne de texte dans Power Query ?",
    options: [
      "Text.Start",
      "Text.End",
      "Text.Middle",
      "Text.Length"
    ],
    solution: "Text.Start",
    explication: "Text.Start permet d’extraire les premiers caractères d’un texte."
  },
  {
    id: 116,
    question: "Vous souhaitez exclure les lignes où la colonne « Statut » est égale à « Annulé ». Quelle transformation utiliser ?",
    options: [
      "Filtrer la colonne « Statut » pour ne pas inclure « Annulé »",
      "Supprimer la colonne « Statut »",
      "Grouper par la colonne « Statut »",
      "Ajouter une colonne conditionnelle"
    ],
    solution: "Filtrer la colonne « Statut » pour ne pas inclure « Annulé »",
    explication: "Le filtrage permet d’exclure précisément les lignes correspondant à une valeur donnée."
  },
  {
    id: 117,
    question: "Quelle méthode permet d’optimiser les performances de chargement des données dans Power BI ?",
    options: [
      "Supprimer les colonnes inutiles avant le chargement",
      "Charger toutes les colonnes et masquer celles inutiles",
      "Ajouter des colonnes calculées complexes",
      "Ne pas appliquer de filtres"
    ],
    solution: "Supprimer les colonnes inutiles avant le chargement",
    explication: "Moins de colonnes signifie moins de données à charger et de meilleures performances."
  },
  {
    id: 118,
    question: "Quel est le rôle du profilage des données dans Power Query ?",
    options: [
      "Fournir des statistiques sur la qualité et la distribution des données",
      "Créer des visualisations graphiques",
      "Analyser les performances du rapport",
      "Définir les relations entre tables"
    ],
    solution: "Fournir des statistiques sur la qualité et la distribution des données",
    explication: "Le profilage des données aide à comprendre la structure, les valeurs manquantes et la qualité des données."
  },
  {
    id: 119,
    question: "Quelle est la fonction de la transformation « Développer » dans Power Query ?",
    options: [
      "Transformer une colonne contenant des tables imbriquées en colonnes séparées",
      "Supprimer des colonnes",
      "Ajouter une colonne d’index",
      "Filtrer les données"
    ],
    solution: "Transformer une colonne contenant des tables imbriquées en colonnes séparées",
    explication: "La transformation « Développer » permet d’extraire les données contenues dans des tables imbriquées."
  },
  {
    id: 120,
    question: "Quel est le meilleur format de données pour les dates dans Power Query afin d’éviter des erreurs ?",
    options: [
      "Type Date ou Date/Heure",
      "Texte",
      "Nombre décimal",
      "Booléen"
    ],
    solution: "Type Date ou Date/Heure",
    explication: "Les types Date ou Date/Heure sont les plus fiables pour la gestion correcte des dates dans Power BI."
  }
];
