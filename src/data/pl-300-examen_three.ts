export interface Question {
  id: number;
  question: string;
  options: string[];
  solution: string;
  explication: string;
}


export const section3Questions: Question[] = [
  {
    id: 1,
    question: "Quel visuel est le plus approprié pour montrer une tendance dans le temps ?",
    options: [
      "Carte géographique",
      "Histogramme",
      "Graphique en courbes",
      "Matrice"
    ],
    solution: "Graphique en courbes",
    explication: "Le graphique en courbes est idéal pour visualiser l’évolution d’une valeur dans le temps."
  },
  {
    id: 2,
    question: "Quel type de visuel permet d’afficher plusieurs mesures sous forme de cartes individuelles ?",
    options: [
      "Graphique en aires",
      "Carte multi-lignes",
      "Carte KPI",
      "Carte de tableau de bord (Card visual)"
    ],
    solution: "Carte de tableau de bord (Card visual)",
    explication: "Le visuel Card permet d’afficher une mesure unique de manière claire."
  },
  {
    id: 3,
    question: "Quelle fonctionnalité permet d’afficher une page de rapport différente selon l’élément sélectionné ?",
    options: [
      "Filtres visuels",
      "Pages drillthrough",
      "Slicers",
      "Drill up"
    ],
    solution: "Pages drillthrough",
    explication: "Les pages drillthrough permettent de naviguer vers une page détaillée selon une sélection."
  },
  {
    id: 4,
    question: "Quel élément permet aux utilisateurs de filtrer les rapports par eux-mêmes ?",
    options: [
      "Mesures",
      "Slicers",
      "Colonnes calculées",
      "Valeurs par défaut"
    ],
    solution: "Slicers",
    explication: "Les slicers offrent un filtrage interactif directement dans le rapport."
  },
  {
    id: 5,
    question: "Quel visuel est le plus approprié pour comparer des valeurs entre plusieurs catégories ?",
    options: [
      "Graphique en courbes",
      "Graphique à barres",
      "Carte géographique",
      "KPI"
    ],
    solution: "Graphique à barres",
    explication: "Les graphiques à barres facilitent la comparaison entre catégories."
  },

  {
    id: 6,
    question: "Quel visuel permet d'explorer des données hiérarchiques comme Pays > Province > Ville ?",
    options: [
      "Nuage de points",
      "Graphique à barres",
      "Graphique en courbes",
      "Treemap"
    ],
    solution: "Treemap",
    explication: "Le Treemap est adapté aux structures hiérarchiques."
  },
  {
    id: 7,
    question: "Quelle option doit être activée pour permettre le Drill Down dans un graphique ?",
    options: [
      "Filtres croisés",
      "Sélection unique",
      "Flèche de hiérarchie",
      "Mode Focus"
    ],
    solution: "Flèche de hiérarchie",
    explication: "La flèche permet de naviguer dans les niveaux de hiérarchie."
  },
  {
    id: 8,
    question: "À quoi sert la fonctionnalité tooltip personnalisé ?",
    options: [
      "Changer la couleur du visuel",
      "Ajouter des images",
      "Afficher une page contextuelle avec plus de détails",
      "Filtrer toutes les pages"
    ],
    solution: "Afficher une page contextuelle avec plus de détails",
    explication: "Les tooltips personnalisés affichent des informations supplémentaires au survol."
  },
  {
    id: 9,
    question: "Quel est le rôle d’un slicer ?",
    options: [
      "Créer un modèle",
      "Filtrer de manière interactive",
      "Calculer des mesures",
      "Appliquer des thèmes"
    ],
    solution: "Filtrer de manière interactive",
    explication: "Le slicer permet à l’utilisateur de contrôler les filtres du rapport."
  },
  {
    id: 10,
    question: "Quel visuel est le mieux adapté pour suivre des indicateurs clés de performance (KPI) ?",
    options: [
      "Graphique en aires",
      "Carte KPI",
      "Nuage de points",
      "Graphique combiné"
    ],
    solution: "Carte KPI",
    explication: "La carte KPI est conçue pour suivre la performance par rapport à un objectif."
  },

  {
    id: 20,
    question: "Quelle est la meilleure pratique pour présenter des indicateurs financiers mensuels ?",
    options: [
      "Carte KPI avec seuil",
      "Graphique en aires avec axe temporel",
      "Carte géographique",
      "Treemap"
    ],
    solution: "Graphique en aires avec axe temporel",
    explication: "Ce visuel montre clairement l’évolution mensuelle des indicateurs."
  },

  {
    id: 30,
    question: "Comment personnaliser l’expérience utilisateur pour qu’il voie uniquement ses données ?",
    options: [
      "Slicers",
      "RLS – Sécurité au niveau des lignes",
      "Filtres manuels",
      "Paramètres de colonne"
    ],
    solution: "RLS – Sécurité au niveau des lignes",
    explication: "La RLS restreint l’accès aux données selon l’utilisateur."
  },

  {
    id: 40,
    question: "Quelle est la fonction de la transformation Colonnes personnalisées ?",
    options: [
      "Ajouter des colonnes calculées à l’aide de M",
      "Appliquer un format",
      "Modifier les en-têtes",
      "Appliquer une jointure"
    ],
    solution: "Ajouter des colonnes calculées à l’aide de M",
    explication: "Elle permet d’écrire des formules M pour créer de nouvelles colonnes."
  },

  {
    id: 50,
    question: "Pourquoi filtrer les données dans Power Query plutôt que dans DAX ?",
    options: [
      "Car DAX est plus rapide",
      "Pour alléger le modèle de données",
      "Car Power Query ne supporte pas le filtrage",
      "Pour obtenir plus de lignes"
    ],
    solution: "Pour alléger le modèle de données",
    explication: "Filtrer tôt réduit la taille du modèle et améliore les performances."
  },

  {
    id: 60,
    question: "Quelle fonction DAX combine deux tables verticalement ?",
    options: [
      "INTERSECT",
      "UNION",
      "CROSSJOIN",
      "NATURALLEFTOUTERJOIN"
    ],
    solution: "UNION",
    explication: "UNION empile les lignes de deux tables compatibles."
  },

  {
    id: 70,
    question: "Quelle fonction retourne le nombre de lignes d’une table ?",
    options: [
      "COUNT",
      "COUNTA",
      "COUNTROWS",
      "ROWCOUNT"
    ],
    solution: "COUNTROWS",
    explication: "COUNTROWS compte le nombre total de lignes d’une table."
  },

  {
    id: 80,
    question: "Quelle fonction DAX permet d’appliquer un filtre sur une table dans une mesure ?",
    options: [
      "SUMMARIZE",
      "CALCULATE avec FILTER",
      "VALUES",
      "IF"
    ],
    solution: "CALCULATE avec FILTER",
    explication: "CALCULATE permet de modifier le contexte de filtre d’une mesure."
  },

  {
    id: 90,
    question: "Que permet la fonction LOOKUPVALUE() en DAX ?",
    options: [
      "Créer une nouvelle table",
      "Chercher une valeur selon une condition",
      "Appliquer une agrégation",
      "Trier une table"
    ],
    solution: "Chercher une valeur selon une condition",
    explication: "LOOKUPVALUE récupère une valeur correspondante selon des critères."
  },

  {
    id: 100,
    question: "Quelle fonction DAX peut être utilisée pour filtrer les lignes contenant des dates après aujourd’hui ?",
    options: [
      "CALCULATE",
      "FILTER avec TODAY()",
      "VALUES",
      "DATEDIFF"
    ],
    solution: "FILTER avec TODAY()",
    explication: "FILTER combiné à TODAY permet de conserver uniquement les dates futures."
  },
  {
    id: 101,
    question: "Quelle est la fonction de USERPRINCIPALNAME() en DAX ?",
    options: [
      "Retourner le rôle de sécurité",
      "Retourner l’identifiant du rapport",
      "Retourner le nom d’utilisateur connecté",
      "Retourner le nom du visuel"
    ],
    solution: "Retourner le nom d’utilisateur connecté",
    explication: "USERPRINCIPALNAME() renvoie l’utilisateur actuellement connecté, utile pour la sécurité au niveau des lignes (RLS)."
  },
  {
    id: 102,
    question: "Quel type de colonne doit être utilisé comme clé unique dans une table de dimension ?",
    options: [
      "Colonne Date",
      "Colonne numérique séquentielle",
      "Colonne texte",
      "Colonne booléenne"
    ],
    solution: "Colonne numérique séquentielle",
    explication: "Une clé numérique séquentielle garantit l’unicité et optimise les relations avec les tables de faits."
  },
  {
    id: 103,
    question: "Quelle pratique est recommandée pour les tables de faits ?",
    options: [
      "Inclure des textes descriptifs",
      "Éviter les colonnes numériques",
      "N’inclure que des mesures et identifiants",
      "Activer toutes les relations"
    ],
    solution: "N’inclure que des mesures et identifiants",
    explication: "Les tables de faits doivent contenir principalement des mesures numériques et des clés de liaison vers les dimensions."
  },
  {
    id: 104,
    question: "Quelle fonction retourne la différence entre deux dates en DAX ?",
    options: ["DATEDIFF", "DATEVALUE", "TIMEVALUE", "DURATION"],
    solution: "DATEDIFF",
    explication: "DATEDIFF permet de calculer la différence entre deux dates selon différentes unités (jours, mois, années, etc.)."
  },
  {
    id: 105,
    question: "Que fait la fonction DISTINCTCOUNT ?",
    options: [
      "Compte le nombre total de lignes",
      "Compte le nombre de valeurs uniques",
      "Compte le nombre de lignes vides",
      "Compte le nombre de colonnes"
    ],
    solution: "Compte le nombre de valeurs uniques",
    explication: "DISTINCTCOUNT compte uniquement les valeurs distinctes dans une colonne."
  },
  {
    id: 106,
    question: "Quelle est la meilleure méthode pour connecter une table de faits à plusieurs dimensions temporelles (ex : commande, expédition) ?",
    options: [
      "Utiliser plusieurs tables de dates avec relations actives",
      "Utiliser une seule table de dates avec une relation active et des USERELATIONSHIP() dans les mesures",
      "Ajouter des colonnes conditionnelles",
      "Activer toutes les relations"
    ],
    solution: "Utiliser une seule table de dates avec une relation active et des USERELATIONSHIP() dans les mesures",
    explication: "Cela permet de gérer plusieurs relations temporelles sans créer de conflits ou de redondance de tables."
  },
  {
    id: 107,
    question: "Quelle transformation est recommandée pour convertir des valeurs de colonnes en lignes distinctes ?",
    options: ["Transposer", "Colonnes non déployées", "Fusionner des requêtes", "Ajouter des colonnes"],
    solution: "Colonnes non déployées",
    explication: "La transformation 'colonnes non déployées' permet de convertir plusieurs colonnes en lignes distinctes, facilitant l’analyse."
  },
  {
    id: 108,
    question: "Quelle fonction DAX retourne une table avec les colonnes et les lignes visibles dans le contexte actuel ?",
    options: ["VALUES", "SUMMARIZE", "ALLSELECTED", "SELECTCOLUMNS"],
    solution: "ALLSELECTED",
    explication: "ALLSELECTED renvoie toutes les lignes et colonnes visibles selon les filtres appliqués par l’utilisateur, contrairement à ALL qui ignore tous les filtres."
  },
  {
    id: 109,
    question: "Que signifie la cardinalité 'Plusieurs à Plusieurs' (Many to Many) ?",
    options: [
      "Une table peut être reliée à plusieurs visuels",
      "Les deux colonnes liées peuvent contenir des valeurs dupliquées",
      "Une table est unique",
      "Une relation est inactive"
    ],
    solution: "Les deux colonnes liées peuvent contenir des valeurs dupliquées",
    explication: "Dans une relation plusieurs-à-plusieurs, les deux colonnes peuvent avoir des valeurs répétées, nécessitant souvent une table de pont."
  },
  {
    id: 110,
    question: "Quelle méthode est utilisée dans Power Query pour filtrer les lignes selon une condition ?",
    options: ["Colonnes personnalisées", "Étapes appliquées", "Filtrage des lignes", "Remplacer les erreurs"],
    solution: "Filtrage des lignes",
    explication: "Le filtrage des lignes permet de ne garder que les données répondant à une condition spécifique."
  },
  {
    id: 111,
    question: "Quelle fonction DAX permet de créer une table contenant toutes les valeurs distinctes d'une colonne ?",
    options: ["SELECTCOLUMNS", "DISTINCT", "VALUES", "ADDCOLUMNS"],
    solution: "DISTINCT",
    explication: "DISTINCT renvoie une table avec toutes les valeurs uniques d’une colonne."
  },
  {
    id: 112,
    question: "Quelle fonction DAX permet de remplacer un filtre dans un contexte d’évaluation ?",
    options: ["FILTER", "REMOVEFILTERS", "EARLIER", "SELECTEDVALUE"],
    solution: "REMOVEFILTERS",
    explication: "REMOVEFILTERS supprime les filtres existants sur une colonne ou une table dans le calcul d’une mesure."
  },
  {
    id: 113,
    question: "Quelle est la principale utilité d’une table de pont (bridge table) ?",
    options: [
      "Filtrer plusieurs tables de faits",
      "Connecter deux tables ayant une relation plusieurs-à-plusieurs",
      "Remplacer une table de dimensions",
      "Optimiser les visuels"
    ],
    solution: "Connecter deux tables ayant une relation plusieurs-à-plusieurs",
    explication: "Une table de pont permet de résoudre les relations plusieurs-à-plusieurs en Power BI."
  },
  {
    id: 114,
    question: "Lorsqu’une relation est inactive, comment peut-on l’activer temporairement ?",
    options: ["SWITCH", "USERELATIONSHIP", "ACTIVERELATION", "SWITCHRELATION"],
    solution: "USERELATIONSHIP",
    explication: "USERELATIONSHIP() active temporairement une relation inactive dans une mesure DAX."
  },
  {
    id: 115,
    question: "Quelle fonction DAX retourne la dernière valeur non vide selon un tri ?",
    options: ["LASTNONBLANK", "LAST", "MAX", "TOPN"],
    solution: "LASTNONBLANK",
    explication: "LASTNONBLANK renvoie la dernière valeur non vide dans un contexte donné, utile pour des séries temporelles."
  },
  {
    id: 116,
    question: "Quelle fonction DAX peut retourner une colonne contenant des noms de mois triés correctement ?",
    options: ["FORMAT", "MONTH", "Utiliser 'Trier par colonne' sur un numéro de mois", "TEXT"],
    solution: "Utiliser 'Trier par colonne' sur un numéro de mois",
    explication: "Pour trier correctement les mois (Janvier à Décembre), on crée une colonne numérique correspondante et on trie par celle-ci."
  },
  {
    id: 117,
    question: "Quel type de jointure est réalisé dans Power BI lors de la fusion de requêtes ?",
    options: ["FULL OUTER JOIN", "LEFT OUTER JOIN (par défaut)", "RIGHT JOIN", "CROSS JOIN"],
    solution: "LEFT OUTER JOIN (par défaut)",
    explication: "Par défaut, Power Query effectue une jointure gauche (Left Outer Join) lors de la fusion de tables."
  },
  {
    id: 118,
    question: "Quelle fonction DAX permet de combiner deux tables avec les mêmes colonnes ?",
    options: ["UNION", "JOIN", "MERGE", "CROSSJOIN"],
    solution: "UNION",
    explication: "UNION combine verticalement deux tables ayant la même structure de colonnes."
  },
  {
    id: 119,
    question: "Dans Power BI, que signifie une relation « inactive » ?",
    options: [
      "Elle est désactivée définitivement",
      "Elle est active dans tous les visuels",
      "Elle peut être activée avec USERELATIONSHIP dans une mesure",
      "Elle empêche la modélisation"
    ],
    solution: "Elle peut être activée avec USERELATIONSHIP dans une mesure",
    explication: "Une relation inactive n’est pas utilisée par défaut, mais peut être activée temporairement dans une mesure via USERELATIONSHIP()."
  },
  {
    id: 120,
    question: "Quelle fonction DAX retourne une table contenant toutes les lignes visibles dans le contexte actuel ?",
    options: ["VALUES", "FILTER", "ALLSELECTED", "DISTINCT"],
    solution: "ALLSELECTED",
    explication: "ALLSELECTED renvoie toutes les lignes visibles en respectant les filtres appliqués par l’utilisateur."
  },
  {
    id: 121,
    question: "Quel type de champ est recommandé pour les segments temporels (slicers) ?",
    options: ["Mesure", "Colonne Date", "Table de faits", "Clé primaire"],
    solution: "Colonne Date",
    explication: "Les slicers temporels fonctionnent mieux avec des colonnes de type Date pour permettre un filtrage dynamique."
  },
  {
    id: 122,
    question: "Quelle transformation Power Query permet de supprimer les lignes en double ?",
    options: ["Colonnes fusionnées", "Grouper", "Supprimer les doublons", "Trier"],
    solution: "Supprimer les doublons",
    explication: "Cette transformation supprime toutes les lignes identiques afin d’éviter la redondance de données."
  },
  {
    id: 123,
    question: "Quel est l’avantage d’utiliser des relations à sens unique (single direction) ?",
    options: [
      "Accélère les performances",
      "Plus de flexibilité",
      "Permet des visuels plus riches",
      "Active toutes les relations"
    ],
    solution: "Accélère les performances",
    explication: "Les relations à sens unique simplifient le modèle et améliorent la performance des calculs."
  },
  {
    id: 124,
    question: "Quel type de champ est idéal pour la jointure entre tables de faits et dimensions ?",
    options: ["Identifiant unique (clé de substitution)", "Nom de produit", "Valeur numérique agrégée", "Champ booléen"],
    solution: "Identifiant unique (clé de substitution)",
    explication: "Une clé unique dans la dimension assure une jointure fiable et performante avec la table de faits."
  },
  {
    id: 125,
    question: "Quelle fonction DAX retourne le rang d’un élément dans une liste ?",
    options: ["RANKX", "INDEX", "ORDERBY", "POSITION"],
    solution: "RANKX",
    explication: "RANKX calcule le rang d’un élément dans un contexte donné, utile pour des classements."
  },
  {
    id: 126,
    question: "Quel type de table est souvent appelé 'table satellite' dans les modèles en étoile ?",
    options: ["Table de faits", "Table de dates", "Table de dimensions", "Table de mesure"],
    solution: "Table de dimensions",
    explication: "Les tables de dimensions contiennent les attributs descriptifs des faits et sont parfois appelées tables satellites."
  },
  {
    id: 127,
    question: "Quel est l’effet de la fonction ALL() dans DAX ?",
    options: [
      "Applique un filtre sur toutes les colonnes",
      "Supprime tous les filtres sur les colonnes spécifiées",
      "Ajoute des filtres à une mesure",
      "Affiche toutes les colonnes"
    ],
    solution: "Supprime tous les filtres sur les colonnes spécifiées",
    explication: "ALL() est utilisée pour ignorer les filtres et obtenir des totaux globaux."
  },
  {
    id: 128,
    question: "Quelle pratique permet de garder un modèle de données bien organisé ?",
    options: [
      "Cacher les colonnes inutiles dans la vue rapport",
      "Supprimer les tables",
      "Renommer toutes les mesures en chiffres",
      "Activer toutes les relations"
    ],
    solution: "Cacher les colonnes inutiles dans la vue rapport",
    explication: "Cacher les colonnes inutiles simplifie la vue rapport pour les utilisateurs finaux."
  },
  {
    id: 129,
    question: "Pourquoi faut-il éviter les relations bidirectionnelles sauf si nécessaire ?",
    options: [
      "Elles ralentissent les rapports et peuvent créer des ambiguïtés",
      "Elles suppriment les filtres",
      "Elles obligent à recréer des colonnes",
      "Elles sont désactivées par défaut"
    ],
    solution: "Elles ralentissent les rapports et peuvent créer des ambiguïtés",
    explication: "Les relations bidirectionnelles peuvent provoquer des boucles et compliquer le modèle, affectant les performances."
  },
  {
    id: 130,
    question: "Quelle fonction DAX retourne les valeurs visibles dans le contexte actuel, mais pas en ignorant les filtres ?",
    options: ["VALUES", "ALL", "DISTINCT", "FILTER"],
    solution: "VALUES",
    explication: "VALUES retourne les valeurs visibles dans le contexte actuel, y compris BLANK si présent."
  },
  {
    id: 131,
    question: "Quelle est la principale fonction DAX pour filtrer une table ?",
    options: ["CALCULATE", "FILTER", "LOOKUPVALUE", "VALUES"],
    solution: "FILTER",
    explication: "FILTER applique un filtre sur une table et retourne uniquement les lignes respectant la condition."
  },
  {
    id: 132,
    question: "Quelle est la différence entre VALUES et DISTINCT en DAX ?",
    options: [
      "Aucune",
      "VALUES peut inclure BLANK ; DISTINCT les ignore",
      "DISTINCT est plus lent",
      "VALUES est une fonction de transformation"
    ],
    solution: "VALUES peut inclure BLANK ; DISTINCT les ignore",
    explication: "VALUES conserve les valeurs BLANK dans le résultat, contrairement à DISTINCT."
  },
  {
    id: 133,
    question: "Quel outil Power BI permet de visualiser le schéma relationnel entre les tables ?",
    options: ["Vue Rapport", "Vue Données", "Vue Modèle", "Vue Relation"],
    solution: "Vue Modèle",
    explication: "La vue Modèle montre les tables, leurs relations et cardinalités dans Power BI."
  },
  {
    id: 134,
    question: "Quelle est la structure typique d’un modèle en étoile ?",
    options: [
      "Une table de faits et plusieurs tables de dimensions",
      "Plusieurs tables de faits",
      "Tables fusionnées en une seule",
      "Relations circulaires"
    ],
    solution: "Une table de faits et plusieurs tables de dimensions",
    explication: "Le modèle en étoile centralise les mesures dans la table de faits et les dimensions descriptives autour."
  },
  {
    id: 135,
    question: "Quelle méthode Power Query permet de détecter automatiquement les types de données ?",
    options: ["Promouvoir en-têtes", "Modifier type de données", "Détecter automatiquement le type", "Remplacer les valeurs"],
    solution: "Détecter automatiquement le type",
    explication: "Cette option analyse les colonnes pour attribuer le type de données correct automatiquement."
  },
  {
    id: 136,
    question: "Quelle option permet d'empêcher une table de propager un filtre à une autre ?",
    options: [
      "Changer le sens de la relation",
      "Supprimer la relation",
      "Appliquer un filtre manuel",
      "Activer la relation"
    ],
    solution: "Changer le sens de la relation",
    explication: "En sens unique, une table n’applique pas ses filtres à la table liée."
  },
  {
    id: 137,
    question: "Quelle fonction DAX combine des chaînes de texte ?",
    options: ["JOIN", "CONCATENATE", "MERGE", "UNION"],
    solution: "CONCATENATE",
    explication: "CONCATENATE permet de joindre deux chaînes de texte en une seule."
  },
  {
    id: 138,
    question: "Quelle fonction DAX permet de compter les lignes d’une table respectant une condition ?",
    options: ["COUNT", "COUNTA", "COUNTX", "CALCULATE"],
    solution: "COUNTX",
    explication: "COUNTX évalue une expression pour chaque ligne et compte celles qui ne sont pas vides."
  },
  {
    id: 139,
    question: "Quel est l’effet de l’option 'Afficher comme table de date' ?",
    options: [
      "Elle crée une table de dates",
      "Elle permet l’usage de fonctions Time Intelligence",
      "Elle génère automatiquement un calendrier",
      "Elle supprime les doublons"
    ],
    solution: "Elle permet l’usage de fonctions Time Intelligence",
    explication: "Cette option transforme la table en table de dates reconnue par Power BI pour Time Intelligence."
  },
  {
    id: 140,
    question: "Quel type de relation permet une propagation des filtres dans les deux sens ?",
    options: ["Inactive", "Single", "Bidirectionnelle", "Croisée"],
    solution: "Bidirectionnelle",
    explication: "Une relation bidirectionnelle permet aux filtres de se propager dans les deux tables liées."
  },
  {
    id: 141,
    question: "Quelle pratique est recommandée pour éviter la duplication de données dans Power BI ?",
    options: [
      "Désactiver les relations",
      "Utiliser des vues dans la base de données source",
      "Normaliser le modèle avec des dimensions partagées",
      "Supprimer les tables"
    ],
    solution: "Normaliser le modèle avec des dimensions partagées",
    explication: "Partager des dimensions entre faits évite la duplication et simplifie le modèle."
  },
  {
    id: 142,
    question: "À quoi sert la fonction DAX RELATEDTABLE() ?",
    options: ["Retourner une mesure liée", "Retourner une table associée via une relation", "Fusionner deux tables", "Créer une nouvelle table"],
    solution: "Retourner une table associée via une relation",
    explication: "RELATEDTABLE() retourne toutes les lignes d’une table liée selon la relation définie."
  },
  {
    id: 143,
    question: "Comment Power BI détecte-t-il les relations entre tables ?",
    options: ["Types de données identiques uniquement", "Noms identiques de colonnes et données compatibles", "Basé sur les valeurs", "Il ne détecte rien automatiquement"],
    solution: "Noms identiques de colonnes et données compatibles",
    explication: "Power BI suggère automatiquement des relations si les colonnes ont des noms identiques et des données compatibles."
  },
  {
    id: 144,
    question: "Quelle fonction DAX retourne la valeur associée d’une autre table selon une clé ?",
    options: ["RELATED", "LOOKUP", "FIND", "VALUE"],
    solution: "RELATED",
    explication: "RELATED permet de récupérer la valeur correspondante d’une colonne dans une table liée."
  },
  {
    id: 145,
    question: "Que se passe-t-il si deux tables ont une relation plusieurs-à-plusieurs sans table de pont ?",
    options: ["Modèle invalide", "Power BI crée une jointure automatique", "Ambiguïtés possibles et erreurs de totalisation", "Fusion automatique des données"],
    solution: "Ambiguïtés possibles et erreurs de totalisation",
    explication: "Sans table de pont, les relations plusieurs-à-plusieurs peuvent générer des erreurs et des totaux incorrects."
  },
  {
    id: 146,
    question: "Quelle est la différence entre les colonnes calculées et les mesures ?",
    options: [
      "Les colonnes calculées sont dynamiques",
      "Les colonnes sont calculées au moment de l'import, les mesures au moment de l’interaction",
      "Les mesures consomment plus de mémoire",
      "Aucune"
    ],
    solution: "Les colonnes sont calculées au moment de l'import, les mesures au moment de l’interaction",
    explication: "Les colonnes calculées sont stockées physiquement, tandis que les mesures sont calculées à la volée selon le contexte."
  },
  {
    id: 147,
    question: "Que signifie un triangle jaune dans le schéma de modèle ?",
    options: ["Relation inactive", "Problème de données", "Données en double", "Table non chargée"],
    solution: "Relation inactive",
    explication: "Un triangle jaune indique qu’une relation n’est pas active par défaut."
  },
  {
    id: 148,
    question: "Quelle fonction DAX retourne une valeur unique si elle est la seule dans le contexte ?",
    options: ["FIRSTNONBLANK", "ONLYVALUE", "SELECTEDVALUE", "SINGLE"],
    solution: "SELECTEDVALUE",
    explication: "SELECTEDVALUE retourne la valeur si elle est unique dans le contexte, sinon BLANK ou valeur par défaut."
  },
  {
    id: 149,
    question: "Quel est l’effet de la fonction DAX KEEPFILTERS() dans un CALCULATE() ?",
    options: ["Supprime tous les filtres", "Ignore les filtres croisés", "Applique les nouveaux filtres en conservant les existants", "Supprime les filtres précédents"],
    solution: "Applique les nouveaux filtres en conservant les existants",
    explication: "KEEPFILTERS permet de combiner les filtres existants avec les nouveaux filtres dans CALCULATE."
  },
  {
    id: 150,
    question: "Dans Power BI, pourquoi est-il recommandé d’avoir une table de dates dédiée ?",
    options: [
      "Pour éviter les erreurs de format",
      "Pour permettre l’analyse temporelle avec Time Intelligence",
      "Pour réduire la taille du modèle",
      "Pour activer toutes les relations"
    ],
    solution: "Pour permettre l’analyse temporelle avec Time Intelligence",
    explication: "Une table de dates dédiée permet d’utiliser les fonctions DAX Time Intelligence comme TOTALYTD, SAMEPERIODLASTYEAR, etc."
  }
];
