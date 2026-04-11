export interface Question {
  id: number;
  question: string;
  options: string[];
  solution: string;
  explication: string;
}

export const section4Questions: Question[] = [
  {
    id: 1,
    question: "Quelle visualisation est la plus adaptée pour afficher l'évolution d'une valeur dans le temps ?",
    options: ["Carte", "Histogramme", "Graphique en courbes", "Secteur"],
    solution: "Graphique en courbes",
    explication: "Le graphique en courbes est le plus adapté pour visualiser l'évolution d'une valeur dans le temps car il permet de suivre facilement les tendances et variations."
  },
  {
    id: 2,
    question: "Quelle fonctionnalité permet d'explorer les données à différents niveaux de hiérarchie ?",
    options: ["Segments", "Drill-through", "Décomposition", "Drill-down"],
    solution: "Drill-down",
    explication: "Le Drill-down permet de naviguer dans les différents niveaux d'une hiérarchie de données, par exemple de l'année au trimestre puis au mois."
  },
  {
    id: 3,
    question: "Quel type de filtre affecte uniquement un visuel spécifique ?",
    options: ["Filtre de rapport", "Filtre de page", "Filtre de visuel", "Segment"],
    solution: "Filtre de visuel",
    explication: "Le filtre de visuel s'applique uniquement au visuel sélectionné, sans affecter les autres visuels de la page ou du rapport."
  },
  {
    id: 4,
    question: "Quelle fonctionnalité permet de naviguer entre deux pages de rapport avec un filtre actif ?",
    options: ["Drill-down", "Segments synchronisés", "Drill-through", "Signets"],
    solution: "Drill-through",
    explication: "Le Drill-through permet de naviguer vers une page de détail en conservant le contexte de filtre de l'élément sélectionné."
  },
  {
    id: 5,
    question: "Quel est le rôle d'un signet dans Power BI ?",
    options: ["Créer des mesures", "Filtrer les données", "Capturer l'état du rapport (filtres, affichage)", "Partager un rapport"],
    solution: "Capturer l'état du rapport (filtres, affichage)",
    explication: "Un signet (bookmark) capture l'état actuel d'un rapport incluant les filtres, les sélections et la visibilité des visuels."
  },
  {
    id: 6,
    question: "Quelle visualisation permet une analyse interactive de la contribution des facteurs ?",
    options: ["Carte", "Arbre de décomposition", "Histogramme", "Matrice"],
    solution: "Arbre de décomposition",
    explication: "L'arbre de décomposition permet d'analyser de manière interactive comment différents facteurs contribuent à une valeur cible."
  },
  {
    id: 7,
    question: "Quel visuel utiliser pour comparer des catégories avec plusieurs valeurs ?",
    options: ["Carte", "Matrice", "Courbe", "KPI"],
    solution: "Matrice",
    explication: "La matrice permet de comparer plusieurs catégories et valeurs dans un format tabulaire avec des totaux et sous-totaux."
  },
  {
    id: 8,
    question: "Quelle est la différence entre un KPI et une carte ?",
    options: ["Le KPI montre une cible et une tendance", "La carte affiche des données géographiques", "Le KPI est un visuel avancé uniquement pour Pro", "Aucun"],
    solution: "Le KPI montre une cible et une tendance",
    explication: "Un KPI (Key Performance Indicator) affiche une valeur actuelle, une cible à atteindre et une indication de tendance, contrairement à une carte qui affiche simplement une valeur."
  },
  {
    id: 9,
    question: "Qu'est-ce qu'un visuel combiné dans Power BI ?",
    options: ["Un visuel contenant plusieurs rapports", "Un visuel regroupant plusieurs mesures", "Un graphique mixte (courbe + histogramme)", "Une carte + tableau"],
    solution: "Un graphique mixte (courbe + histogramme)",
    explication: "Un visuel combiné permet de superposer différents types de graphiques, typiquement une courbe et un histogramme sur le même visuel."
  },
  {
    id: 10,
    question: "Quel élément permet de filtrer plusieurs pages d'un rapport en même temps ?",
    options: ["Filtre de visuel", "Filtre de page", "Filtre de rapport", "Drill-through"],
    solution: "Filtre de rapport",
    explication: "Le filtre de rapport s'applique à toutes les pages du rapport, permettant un filtrage global."
  },
  {
    id: 11,
    question: "Quel type de filtre est conservé lorsqu'on publie un rapport sur Power BI Service ?",
    options: ["Filtre de page", "Filtre visuel", "Filtre persistant (Bookmark)", "Aucun filtre"],
    solution: "Filtre persistant (Bookmark)",
    explication: "Les signets (bookmarks) conservent l'état des filtres même après publication sur Power BI Service."
  },
  {
    id: 12,
    question: "Quelle est la meilleure façon de comparer des valeurs positives et négatives ?",
    options: ["Carte", "Histogramme en cascade", "Courbe", "KPI"],
    solution: "Histogramme en cascade",
    explication: "L'histogramme en cascade (waterfall chart) est idéal pour visualiser comment des valeurs positives et négatives contribuent à un total."
  },
  {
    id: 13,
    question: "Quelle fonctionnalité permet d'identifier automatiquement des tendances ou anomalies ?",
    options: ["Segments", "Q&A", "Arbre de décomposition", "Analyse intelligente (Insights)"],
    solution: "Analyse intelligente (Insights)",
    explication: "L'analyse intelligente (Insights) utilise l'IA pour détecter automatiquement des tendances, anomalies et patterns dans les données."
  },
  {
    id: 14,
    question: "Quelle est la fonction de la zone \"Analyse\" dans un visuel ?",
    options: ["Modifier les données", "Ajouter des lignes de tendance, moyenne, etc.", "Appliquer un thème", "Ajouter des images"],
    solution: "Ajouter des lignes de tendance, moyenne, etc.",
    explication: "La zone Analyse permet d'ajouter des éléments analytiques comme des lignes de tendance, des moyennes ou des lignes de référence."
  },
  {
    id: 15,
    question: "Quelle est la fonction de Q&A dans Power BI ?",
    options: ["Générer des mesures", "Répondre à des questions en langage naturel", "Créer des visualisations manuelles", "Lancer un audit"],
    solution: "Répondre à des questions en langage naturel",
    explication: "Q&A permet aux utilisateurs de poser des questions en langage naturel et obtient automatiquement des visualisations correspondantes."
  },
  {
    id: 16,
    question: "Quel format de publication est utilisé pour partager un rapport Power BI ?",
    options: [".xls", ".pbi", ".pbix", ".pdf"],
    solution: ".pbix",
    explication: "Le format .pbix est le format de fichier Power BI Desktop contenant le rapport et le modèle de données."
  },
  {
    id: 17,
    question: "Quelle action est requise pour publier un rapport Power BI Desktop vers le cloud ?",
    options: ["Exporter en Excel", "Enregistrer sous", "Cliquer sur \"Publier\"", "Partager par e-mail"],
    solution: "Cliquer sur \"Publier\"",
    explication: "L'action Publier dans Power BI Desktop permet de télécharger le rapport vers Power BI Service dans le cloud."
  },
  {
    id: 18,
    question: "Comment partager un rapport avec des collègues sans qu'ils modifient les visuels ?",
    options: ["Partager le fichier PBIX", "Publier dans le workspace et donner accès en lecture", "Utiliser Power BI Mobile", "Envoyer une capture d'écran"],
    solution: "Publier dans le workspace et donner accès en lecture",
    explication: "Publier dans un workspace et accorder des droits de lecture uniquement empêche la modification tout en permettant la consultation."
  },
  {
    id: 19,
    question: "Que permet l'abonnement à un rapport Power BI Service ?",
    options: ["Recevoir des mises à jour automatiques par e-mail", "Modifier les données", "Exporter vers PDF automatiquement", "Créer un dashboard"],
    solution: "Recevoir des mises à jour automatiques par e-mail",
    explication: "L'abonnement permet de recevoir régulièrement par e-mail des captures d'écran du rapport avec les données actualisées."
  },
  {
    id: 20,
    question: "Quel composant Power BI permet de regrouper plusieurs rapports sur une même page ?",
    options: ["Workspace", "Tableau de bord (Dashboard)", "Rapport", "Application"],
    solution: "Tableau de bord (Dashboard)",
    explication: "Un tableau de bord permet de regrouper des vignettes de visuels provenant de différents rapports sur une seule page."
  },
  {
    id: 21,
    question: "Quelle est la limite d'un dashboard comparé à un rapport ?",
    options: ["Ne peut pas contenir de données", "Pas interactif", "N'affiche que des vignettes de visuels", "Pas publiable"],
    solution: "N'affiche que des vignettes de visuels",
    explication: "Un dashboard affiche uniquement des vignettes épinglées depuis des rapports, sans la richesse interactive d'un rapport complet."
  },
  {
    id: 22,
    question: "Quel est l'intérêt de créer une alerte sur une carte KPI ?",
    options: ["Ajouter une animation", "Être notifié si une valeur dépasse un seuil", "Changer la couleur du rapport", "Afficher les données sources"],
    solution: "Être notifié si une valeur dépasse un seuil",
    explication: "Les alertes permettent de recevoir des notifications automatiques lorsqu'une valeur KPI dépasse ou descend sous un seuil défini."
  },
  {
    id: 23,
    question: "Quel outil permet de combiner plusieurs rapports et jeux de données en un package ?",
    options: ["Application Power BI", "Workspace", "Rapport", "Visual Studio"],
    solution: "Application Power BI",
    explication: "Une application Power BI permet de packager plusieurs rapports et datasets pour une distribution facile aux utilisateurs finaux."
  },
  {
    id: 24,
    question: "Que permet l'option \"Analyser dans Excel\" dans Power BI Service ?",
    options: ["Exporter vers CSV", "Créer une connexion pivot Excel avec le dataset Power BI", "Télécharger un rapport PBIX", "Créer une copie"],
    solution: "Créer une connexion pivot Excel avec le dataset Power BI",
    explication: "Analyser dans Excel crée une connexion live permettant d'utiliser les tableaux croisés dynamiques Excel avec les données Power BI."
  },
  {
    id: 25,
    question: "Quelle est la fonctionnalité de \"Points chauds\" (Key Influencers) ?",
    options: ["Identifier les valeurs aberrantes", "Analyser les facteurs qui influencent une valeur cible", "Créer des segments", "Colorer automatiquement les visuels"],
    solution: "Analyser les facteurs qui influencent une valeur cible",
    explication: "Key Influencers identifie automatiquement quels facteurs ont le plus d'impact sur une métrique ou valeur cible."
  },
  {
    id: 26,
    question: "Qu'est-ce que l'option \"Smart Narrative\" ?",
    options: ["Résumer automatiquement les données affichées sous forme de texte", "Ajouter une légende", "Créer un visuel KPI", "Ajouter un drill-down"],
    solution: "Résumer automatiquement les données affichées sous forme de texte",
    explication: "Smart Narrative génère automatiquement un résumé textuel des données et insights du rapport."
  },
  {
    id: 27,
    question: "Quelle fonctionnalité permet d'exporter un rapport Power BI sous forme de fichier fixe ?",
    options: ["Publier", "Exporter vers PowerPoint", "Sauvegarder", "Partager"],
    solution: "Exporter vers PowerPoint",
    explication: "L'export vers PowerPoint crée un fichier fixe avec des captures d'écran des visuels du rapport."
  },
  {
    id: 28,
    question: "Quel outil Power BI permet de consulter les performances d'un rapport ?",
    options: ["Outil de diagnostic", "Performances Analyzer", "Dataflow", "Gateway"],
    solution: "Performances Analyzer",
    explication: "Performance Analyzer mesure le temps de chargement de chaque visuel et requête pour optimiser les performances."
  },
  {
    id: 29,
    question: "Que signifie une étoile dans un champ de table dans Power BI ?",
    options: ["Champ filtré", "Champ principal de la table", "Champ masqué", "Champ calculé"],
    solution: "Champ principal de la table",
    explication: "L'étoile indique la clé primaire ou le champ principal identifiant de manière unique chaque ligne de la table."
  },
  {
    id: 30,
    question: "Quel rôle joue le Workspace dans Power BI Service ?",
    options: ["Créer des visuels", "Gérer les rapports, tableaux de bord et jeux de données", "Ajouter des champs calculés", "Supprimer des colonnes"],
    solution: "Gérer les rapports, tableaux de bord et jeux de données",
    explication: "Le Workspace est un espace de travail collaboratif pour organiser et gérer rapports, dashboards et datasets."
  },
  {
    id: 31,
    question: "Quelle est la fonction d'un \"Dataset\" dans Power BI ?",
    options: ["Contenir les données importées ou connectées", "Afficher un rapport", "Créer une mesure", "Gérer les utilisateurs"],
    solution: "Contenir les données importées ou connectées",
    explication: "Un Dataset contient le modèle de données (tables, relations, mesures) qui alimente les rapports."
  },
  {
    id: 32,
    question: "Comment pouvez-vous actualiser un dataset dans Power BI Service ?",
    options: ["Manuellement ou planifier une actualisation", "Uniquement manuellement", "En exportant puis important les données", "En créant un nouveau rapport"],
    solution: "Manuellement ou planifier une actualisation",
    explication: "Les datasets peuvent être actualisés manuellement à la demande ou selon une planification automatique configurée."
  },
  {
    id: 33,
    question: "Quel service Power BI permet d'automatiser la préparation et transformation des données ?",
    options: ["Power Query", "Power BI Desktop", "Power BI Dataflows", "Power BI Gateway"],
    solution: "Power BI Dataflows",
    explication: "Les Dataflows permettent de créer des pipelines de transformation de données réutilisables dans le cloud."
  },
  {
    id: 34,
    question: "Quelle est la différence principale entre Power BI Dataflows et Power BI Datasets ?",
    options: ["Dataflows stockent les données transformées dans Azure Data Lake", "Datasets sont des visualisations", "Dataflows ne peuvent pas être actualisés", "Datasets sont utilisés uniquement en local"],
    solution: "Dataflows stockent les données transformées dans Azure Data Lake",
    explication: "Les Dataflows stockent les données transformées dans Azure Data Lake Storage, permettant leur réutilisation par plusieurs datasets."
  },
  {
    id: 35,
    question: "Quelle licence Power BI permet de partager un rapport dans un workspace collaboratif ?",
    options: ["Power BI Free", "Power BI Pro", "Power BI Premium", "Power BI Desktop"],
    solution: "Power BI Pro",
    explication: "Une licence Power BI Pro est nécessaire pour partager et collaborer sur des rapports dans des workspaces."
  },
  {
    id: 36,
    question: "Que permet une \"Gateway\" dans Power BI ?",
    options: ["Publier un rapport", "Actualiser les données de sources locales vers le service cloud", "Créer des rapports", "Partager des dashboards"],
    solution: "Actualiser les données de sources locales vers le service cloud",
    explication: "La Gateway établit un pont sécurisé entre les sources de données on-premise et Power BI Service dans le cloud."
  },
  {
    id: 37,
    question: "Quel type de connexion permet d'interroger les données en temps réel dans Power BI ?",
    options: ["Import", "DirectQuery", "Live Connection", "Dataflow"],
    solution: "DirectQuery",
    explication: "DirectQuery interroge directement la source de données en temps réel sans importer les données dans Power BI."
  },
  {
    id: 38,
    question: "Quel est le principal avantage de l'utilisation de DirectQuery ?",
    options: ["Les données sont actualisées en temps réel", "La taille du fichier PBIX est réduite", "Plus de possibilités de transformation des données", "Meilleure performance"],
    solution: "Les données sont actualisées en temps réel",
    explication: "DirectQuery permet d'avoir toujours les données les plus récentes car chaque requête interroge directement la source."
  },
  {
    id: 39,
    question: "Que signifie \"RLS\" dans Power BI ?",
    options: ["Relation Layer Security", "Row-Level Security", "Report Level Sharing", "Role Licensing System"],
    solution: "Row-Level Security",
    explication: "RLS (Row-Level Security) permet de restreindre l'accès aux données au niveau des lignes selon les utilisateurs."
  },
  {
    id: 40,
    question: "Quel mécanisme est utilisé pour configurer la sécurité au niveau des lignes dans un dataset ?",
    options: ["Création de groupes Office 365", "Définition de rôles avec des filtres DAX", "Partage du rapport avec des permissions", "Application de filtres dans Power Query"],
    solution: "Définition de rôles avec des filtres DAX",
    explication: "La RLS utilise des rôles définis avec des expressions DAX pour filtrer les données selon l'utilisateur."
  },
  {
    id: 41,
    question: "Quel outil permet de surveiller l'utilisation des rapports et datasets dans Power BI Service ?",
    options: ["Audit Logs", "Power BI Usage Metrics Reports", "Gateway Monitor", "Performance Analyzer"],
    solution: "Power BI Usage Metrics Reports",
    explication: "Les rapports d'utilisation fournissent des statistiques détaillées sur la consultation et l'usage des rapports et datasets."
  },
  {
    id: 42,
    question: "Quelle fonctionnalité permet de tester un rapport avec les droits d'un utilisateur spécifique ?",
    options: ["Tester les rôles", "Partager avec l'utilisateur", "Créer une copie du rapport", "Exporter le rapport"],
    solution: "Tester les rôles",
    explication: "La fonction 'Afficher en tant que' permet de tester la RLS en simulant l'affichage avec les droits d'un rôle ou utilisateur spécifique."
  },
  {
    id: 43,
    question: "Quel type de licence est nécessaire pour utiliser Power BI Premium ?",
    options: ["Licence gratuite", "Licence par utilisateur", "Licence par capacité dédiée", "Licence desktop uniquement"],
    solution: "Licence par capacité dédiée",
    explication: "Power BI Premium est une licence basée sur la capacité (serveurs dédiés) plutôt que par utilisateur."
  },
  {
    id: 44,
    question: "Quelle caractéristique est propre à Power BI Premium par rapport à Power BI Pro ?",
    options: ["Partage illimité avec utilisateurs Free", "Fonctionnalités de base uniquement", "Pas de limitations d'espace disque", "Pas d'actualisation des données"],
    solution: "Partage illimité avec utilisateurs Free",
    explication: "Power BI Premium permet de partager du contenu avec des utilisateurs disposant d'une licence gratuite."
  },
  {
    id: 45,
    question: "Quel est le rôle du Power BI Service ?",
    options: ["Créer des modèles de données", "Héberger, partager et gérer rapports et dashboards", "Développer des rapports localement", "Exécuter des scripts Python"],
    solution: "Héberger, partager et gérer rapports et dashboards",
    explication: "Power BI Service est la plateforme cloud pour publier, partager, collaborer et consommer des rapports."
  },
  {
    id: 46,
    question: "Quelle est la fonction principale du Power BI Report Server ?",
    options: ["Publier uniquement des rapports Power BI Desktop", "Héberger des rapports On-premise (local)", "Gérer les utilisateurs Power BI", "Exécuter des analyses en temps réel"],
    solution: "Héberger des rapports On-premise (local)",
    explication: "Power BI Report Server permet d'héberger des rapports sur des serveurs locaux pour les organisations ne pouvant pas utiliser le cloud."
  },
  {
    id: 47,
    question: "Que permet la fonction \"Export to PDF\" dans Power BI Service ?",
    options: ["Modifier les rapports", "Exporter un rapport au format PDF figé", "Partager le rapport avec édition", "Envoyer un e-mail automatique"],
    solution: "Exporter un rapport au format PDF figé",
    explication: "L'export PDF crée un document statique du rapport pour distribution ou archivage."
  },
  {
    id: 48,
    question: "Quel format de fichier Power BI Desktop peut être importé dans Power BI Service ?",
    options: [".xlsx", ".pbix", ".csv", ".docx"],
    solution: ".pbix",
    explication: "Seuls les fichiers .pbix (Power BI Desktop) peuvent être publiés dans Power BI Service."
  },
  {
    id: 49,
    question: "Quel est le moyen le plus simple d'intégrer un rapport Power BI dans un site web public ?",
    options: ["Publier sur le web (Publish to Web)", "Exporter en PDF", "Créer un tableau de bord", "Partager par e-mail"],
    solution: "Publier sur le web (Publish to Web)",
    explication: "La fonction 'Publier sur le web' génère un code d'intégration iframe pour afficher le rapport publiquement."
  },
  {
    id: 50,
    question: "Quel est un risque lié à l'option \"Publish to Web\" ?",
    options: ["Les données sont accessibles publiquement", "Le rapport n'est plus modifiable", "Le rapport est protégé par mot de passe", "Le rapport devient privé"],
    solution: "Les données sont accessibles publiquement",
    explication: "Publish to Web rend le rapport accessible à tous sans authentification, ce qui peut exposer des données sensibles."
  },
  {
    id: 51,
    question: "Quelle méthode permet de restreindre l'accès à un rapport Power BI intégré dans une application d'entreprise ?",
    options: ["Utiliser RLS", "Authentification Azure AD", "Publier sur le web", "Envoyer un fichier PBIX"],
    solution: "Authentification Azure AD",
    explication: "L'authentification Azure AD permet de sécuriser l'accès aux rapports intégrés avec les identités de l'organisation."
  },
  {
    id: 52,
    question: "Que signifie la fonction \"Analyze in Excel\" pour un rapport Power BI ?",
    options: ["Créer un rapport Excel lié en temps réel", "Exporter les données vers CSV", "Exporter en PDF", "Copier les données dans Excel"],
    solution: "Créer un rapport Excel lié en temps réel",
    explication: "Analyze in Excel crée une connexion live permettant d'analyser les données Power BI via des tableaux croisés dynamiques Excel."
  },
  {
    id: 53,
    question: "Quel outil Power BI permet d'automatiser des actions en fonction d'un événement dans un rapport ?",
    options: ["Power Automate", "Power Query", "Power BI Desktop", "Power Apps"],
    solution: "Power Automate",
    explication: "Power Automate permet de créer des workflows automatisés déclenchés par des événements dans Power BI."
  },
  {
    id: 54,
    question: "Quel est l'intérêt d'utiliser Power Automate avec Power BI ?",
    options: ["Envoyer des alertes, générer des tâches ou notifications automatisées", "Modifier les données sources", "Créer des rapports plus rapidement", "Gérer les utilisateurs"],
    solution: "Envoyer des alertes, générer des tâches ou notifications automatisées",
    explication: "Power Automate permet d'automatiser des actions comme l'envoi d'emails, la création de tâches ou notifications basées sur les données Power BI."
  },
  {
    id: 55,
    question: "Quel est le principal avantage des tableaux de bord Power BI par rapport aux rapports ?",
    options: ["Interaction avancée", "Vue consolidée de plusieurs rapports", "Possibilité d'édition", "Création de rapports"],
    solution: "Vue consolidée de plusieurs rapports",
    explication: "Les dashboards permettent de regrouper sur une seule page des vignettes provenant de différents rapports et sources."
  },
  {
    id: 56,
    question: "Quel composant Power BI permet de créer des rapports à partir de modèles de données publiés ?",
    options: ["Dataset", "Dashboard", "Dataflow", "Gateway"],
    solution: "Dataset",
    explication: "Un dataset publié peut être utilisé comme source pour créer plusieurs rapports différents."
  },
  {
    id: 57,
    question: "Quelle est la fonction de la section \"Modélisation\" dans Power BI Desktop ?",
    options: ["Créer des rapports", "Créer des relations, mesures et colonnes calculées", "Actualiser les données", "Partager les rapports"],
    solution: "Créer des relations, mesures et colonnes calculées",
    explication: "L'onglet Modélisation permet de définir les relations entre tables et de créer des mesures et colonnes calculées."
  },
  {
    id: 58,
    question: "Quel langage est utilisé pour écrire des mesures dans Power BI ?",
    options: ["SQL", "M", "DAX", "Python"],
    solution: "DAX",
    explication: "DAX (Data Analysis Expressions) est le langage de formules utilisé pour créer des mesures et colonnes calculées."
  },
  {
    id: 59,
    question: "Quel type de visuel Power BI peut afficher plusieurs couches géographiques ?",
    options: ["Carte simple", "Carte ArcGIS", "Histogramme", "Arbre de décomposition"],
    solution: "Carte ArcGIS",
    explication: "Les cartes ArcGIS permettent d'afficher plusieurs couches d'informations géographiques avec des fonctionnalités avancées."
  },
  {
    id: 60,
    question: "Quelle option Power BI permet de gérer les versions et historiques des rapports ?",
    options: ["Power BI Desktop", "Intégration Git (via externe)", "Gateway", "Workspace"],
    solution: "Intégration Git (via externe)",
    explication: "Power BI peut s'intégrer avec des systèmes de contrôle de version comme Git pour gérer l'historique des modifications."
  },
  {
    id: 61,
    question: "Quel est le but principal de la fonction \"Calculate\" en DAX ?",
    options: ["Ajouter une nouvelle colonne", "Modifier le contexte de filtre pour une mesure", "Créer une relation", "Trier les données"],
    solution: "Modifier le contexte de filtre pour une mesure",
    explication: "CALCULATE permet de modifier le contexte de filtre dans lequel une expression est évaluée, crucial pour les calculs avancés."
  },
  {
    id: 62,
    question: "Quelle est la différence entre une mesure et une colonne calculée dans Power BI ?",
    options: ["Les mesures sont calculées au moment de l'exécution, les colonnes calculées sont statiques", "Les colonnes calculées sont plus rapides", "Les mesures ne peuvent pas être utilisées dans les rapports", "Les colonnes calculées sont stockées dans le service cloud"],
    solution: "Les mesures sont calculées au moment de l'exécution, les colonnes calculées sont statiques",
    explication: "Les mesures sont calculées dynamiquement selon le contexte, tandis que les colonnes calculées sont évaluées une fois et stockées."
  },
  {
    id: 63,
    question: "Que signifie \"Incremental Refresh\" dans Power BI ?",
    options: ["Rafraîchir toutes les données à chaque fois", "Rafraîchir uniquement les données modifiées ou nouvelles", "Supprimer les données anciennes", "Sauvegarder les données dans un fichier"],
    solution: "Rafraîchir uniquement les données modifiées ou nouvelles",
    explication: "L'actualisation incrémentielle ne charge que les données nouvelles ou modifiées, économisant du temps et des ressources."
  },
  {
    id: 64,
    question: "Quel est l'avantage principal de « l'Incremental Refresh » ?",
    options: ["Améliorer la performance d'actualisation", "Augmenter la taille du fichier PBIX", "Simplifier la modélisation", "Supprimer les anciennes données"],
    solution: "Améliorer la performance d'actualisation",
    explication: "L'actualisation incrémentielle réduit considérablement le temps d'actualisation en ne traitant qu'un sous-ensemble des données."
  },
  {
    id: 65,
    question: "Quel est le rôle d'un \"Bookmark\" dans Power BI ?",
    options: ["Créer un instantané de l'état d'un rapport", "Ajouter une mesure", "Modifier le modèle de données", "Partager un rapport"],
    solution: "Créer un instantané de l'état d'un rapport",
    explication: "Un bookmark capture l'état complet d'un rapport (filtres, sélections, visibilité) pour une navigation facilitée."
  },
  {
    id: 66,
    question: "Quelle fonctionnalité Power BI permet de créer des rapports interactifs pour les utilisateurs finaux ?",
    options: ["Dashboard", "Rapport Power BI Desktop", "Dataset", "Dataflow"],
    solution: "Rapport Power BI Desktop",
    explication: "Power BI Desktop est l'outil principal pour créer des rapports interactifs riches en visualisations."
  },
  {
    id: 67,
    question: "Comment pouvez-vous optimiser la performance d'un rapport Power BI ?",
    options: ["Réduire la taille des données importées", "Ajouter plus de visuels", "Importer plus de données", "Désactiver les relations"],
    solution: "Réduire la taille des données importées",
    explication: "Limiter les données importées aux seules colonnes et lignes nécessaires améliore significativement les performances."
  },
  {
    id: 68,
    question: "Quelle est la différence entre \"Import\" et \"DirectQuery\" dans Power BI ?",
    options: ["Import charge les données dans Power BI, DirectQuery interroge la source en temps réel", "DirectQuery est plus rapide dans tous les cas", "Import ne permet pas de transformations", "DirectQuery est uniquement disponible sur Power BI Desktop"],
    solution: "Import charge les données dans Power BI, DirectQuery interroge la source en temps réel",
    explication: "Import stocke les données dans le modèle Power BI, tandis que DirectQuery interroge la source à chaque interaction."
  },
  {
    id: 69,
    question: "Quel outil Power BI permet de comprendre la performance d'un rapport pendant la conception ?",
    options: ["Performance Analyzer", "Audit Logs", "Usage Metrics", "Dataflow"],
    solution: "Performance Analyzer",
    explication: "Performance Analyzer affiche le temps d'exécution de chaque visuel et requête pour identifier les goulots d'étranglement."
  },
  {
    id: 70,
    question: "Quel est l'intérêt d'utiliser des \"Aggregations\" dans Power BI ?",
    options: ["Simplifier le modèle", "Améliorer la vitesse d'exécution sur des données volumineuses", "Créer des rapports plus esthétiques", "Exporter les données plus facilement"],
    solution: "Améliorer la vitesse d'exécution sur des données volumineuses",
    explication: "Les agrégations pré-calculent des résumés pour accélérer les requêtes sur de gros volumes de données."
  },
  {
    id: 71,
    question: "Quelle commande DAX permet de créer un filtre dynamique dans une mesure ?",
    options: ["FILTER", "SUM", "COUNT", "RELATED"],
    solution: "FILTER",
    explication: "La fonction FILTER retourne une table filtrée qui peut être utilisée dans des calculs pour appliquer des filtres dynamiques."
  },
  {
    id: 72,
    question: "Quelle fonctionnalité Power BI permet de combiner plusieurs sources de données dans un seul dataset ?",
    options: ["Power Query", "Power BI Gateway", "Dataflow", "Dashboard"],
    solution: "Power Query",
    explication: "Power Query permet de connecter, transformer et combiner des données de multiples sources dans un seul modèle."
  },
  {
    id: 73,
    question: "Que permet le paramètre \"Enable Load\" dans Power Query ?",
    options: ["Charger les données dans le modèle", "Partager les données", "Exporter les données", "Planifier l'actualisation"],
    solution: "Charger les données dans le modèle",
    explication: "Enable Load détermine si une requête doit être chargée dans le modèle de données ou servir uniquement de requête intermédiaire."
  },
  {
    id: 74,
    question: "Comment limiter les données visibles dans un rapport selon l'utilisateur ?",
    options: ["Par filtre visuel uniquement", "Par Row-Level Security (RLS)", "Par partager plusieurs rapports", "Par filtre de page"],
    solution: "Par Row-Level Security (RLS)",
    explication: "La RLS applique des filtres automatiques au niveau des lignes selon l'identité de l'utilisateur connecté."
  },
  {
    id: 75,
    question: "Quel type de jointure Power Query propose-t-il pour combiner deux tables ?",
    options: ["Inner, Left Outer, Right Outer, Full Outer, Anti", "Union, Intersection uniquement", "Merge uniquement", "Append uniquement"],
    solution: "Inner, Left Outer, Right Outer, Full Outer, Anti",
    explication: "Power Query offre tous les types de jointures SQL standards plus la jointure Anti pour identifier les lignes non correspondantes."
  },
  {
    id: 76,
    question: "Quelle licence Power BI est nécessaire pour accéder aux fonctionnalités de « l'App Workspace » ?",
    options: ["Power BI Free", "Power BI Pro", "Power BI Premium par utilisateur", "Power BI Desktop"],
    solution: "Power BI Pro",
    explication: "Une licence Pro est requise pour créer et collaborer dans des workspaces d'application."
  },
  {
    id: 77,
    question: "Quel composant Power BI permet de définir les tables et relations pour un rapport ?",
    options: ["Power Query", "Modèle de données", "Dataflow", "Dashboard"],
    solution: "Modèle de données",
    explication: "Le modèle de données définit la structure, les relations entre tables et les calculs utilisés par les rapports."
  },
  {
    id: 78,
    question: "Quelle option Power BI Desktop permet de créer des colonnes calculées ?",
    options: ["Onglet Rapport", "Onglet Modélisation", "Onglet Accueil", "Onglet Données"],
    solution: "Onglet Modélisation",
    explication: "L'onglet Modélisation contient les outils pour créer des colonnes calculées, mesures et gérer les relations."
  },
  {
    id: 79,
    question: "Quel est le format d'export recommandé pour un rapport destiné à une analyse hors ligne ?",
    options: ["Excel", "PDF", "CSV", "PowerPoint"],
    solution: "PDF",
    explication: "Le PDF préserve la mise en forme visuelle du rapport pour une consultation hors ligne sans modification possible."
  },
  {
    id: 80,
    question: "Quel type de relation entre tables dans Power BI permet une navigation à sens unique ?",
    options: ["Relation bidirectionnelle", "Relation unidirectionnelle", "Relation inactive", "Relation multiple"],
    solution: "Relation unidirectionnelle",
    explication: "Une relation unidirectionnelle propage les filtres dans un seul sens, généralement de la table de dimension vers la table de faits."
  },
  {
    id: 81,
    question: "Quelle méthode permet de créer une alerte basée sur un seuil dans un dashboard Power BI ?",
    options: ["Ajouter une mesure DAX", "Configurer une alerte dans Power BI Service", "Créer un rapport personnalisé", "Exporter les données vers Excel"],
    solution: "Configurer une alerte dans Power BI Service",
    explication: "Les alertes de données peuvent être configurées directement sur les vignettes de dashboard dans Power BI Service."
  },
  {
    id: 82,
    question: "Quel est l'objectif principal d'un \"Workspace\" dans Power BI Service ?",
    options: ["Créer des rapports", "Gérer des collections de rapports, datasets et dashboards", "Analyser les données", "Actualiser les données"],
    solution: "Gérer des collections de rapports, datasets et dashboards",
    explication: "Les workspaces servent à organiser et gérer de manière centralisée tous les artefacts Power BI d'un projet."
  },
  {
    id: 83,
    question: "Que fait la fonction \"ALL\" en DAX ?",
    options: ["Supprime tous les filtres d'une table ou colonne", "Compte toutes les lignes", "Applique un filtre global", "Crée une nouvelle table"],
    solution: "Supprime tous les filtres d'une table ou colonne",
    explication: "ALL ignore les filtres appliqués sur une table ou colonne spécifiée, utile pour les calculs de pourcentage du total."
  },
  {
    id: 84,
    question: "Quelle est la fonctionnalité Power BI permettant de déclencher une action dans une autre application ?",
    options: ["Power Automate", "Power Query", "Power Apps", "Azure Functions"],
    solution: "Power Automate",
    explication: "Power Automate permet de créer des flux automatisés qui déclenchent des actions dans d'autres applications basées sur des événements Power BI."
  },
  {
    id: 85,
    question: "Quel format de fichier Power BI est utilisé pour stocker des rapports et modèles locaux ?",
    options: [".xlsx", ".pbix", ".csv", ".docx"],
    solution: ".pbix",
    explication: "Le format .pbix contient l'ensemble du rapport, du modèle de données et des transformations Power Query."
  },
  {
    id: 86,
    question: "Quel est l'avantage d'utiliser un Dataflow plutôt que d'importer les données directement dans Power BI Desktop ?",
    options: ["Reutilisation des données nettoyées par plusieurs datasets", "Moins de configuration", "Meilleure visualisation", "Moins de stockage cloud"],
    solution: "Reutilisation des données nettoyées par plusieurs datasets",
    explication: "Les Dataflows centralisent la préparation des données qui peut ensuite être réutilisée par plusieurs rapports et datasets."
  },
  {
    id: 87,
    question: "Quelle fonctionnalité permet de gérer les mises à jour automatiques d'un rapport Power BI dans Power BI Service ?",
    options: ["Actualisation planifiée", "Gateway", "Power Query", "Dataflow"],
    solution: "Actualisation planifiée",
    explication: "L'actualisation planifiée permet de configurer des horaires automatiques pour rafraîchir les données des datasets."
  },
  {
    id: 88,
    question: "Quel type d'authentification Power BI Gateway supporte-t-il ?",
    options: ["Windows et OAuth", "Anonyme uniquement", "Basic uniquement", "SAML uniquement"],
    solution: "Windows et OAuth",
    explication: "La Gateway supporte plusieurs méthodes d'authentification dont Windows et OAuth pour se connecter aux sources de données."
  },
  {
    id: 89,
    question: "Quel est l'objectif d'une relation inactive dans Power BI ?",
    options: ["Relation non utilisée par défaut, activable par DAX", "Relation désactivée définitivement", "Relation bidirectionnelle", "Relation multiple"],
    solution: "Relation non utilisée par défaut, activable par DAX",
    explication: "Les relations inactives peuvent être activées dans des mesures spécifiques via la fonction USERELATIONSHIP en DAX."
  },
  {
    id: 90,
    question: "Quel composant permet de créer des visualisations interactives dans Power BI ?",
    options: ["Dataset", "Rapport", "Dataflow", "Gateway"],
    solution: "Rapport",
    explication: "Les rapports Power BI contiennent les pages avec visualisations interactives que les utilisateurs peuvent explorer."
  },
  {
    id: 91,
    question: "Quelle fonctionnalité permet de partager un rapport Power BI avec des utilisateurs externes à l'organisation ?",
    options: ["Publier sur le web", "Partage direct avec licences Pro ou Premium", "Exporter en PDF", "Envoyer par email"],
    solution: "Partage direct avec licences Pro ou Premium",
    explication: "Le partage avec utilisateurs externes nécessite des licences appropriées et peut être fait via Azure AD B2B."
  },
  {
    id: 92,
    question: "Quelle est la meilleure pratique pour améliorer la sécurité des données dans Power BI ?",
    options: ["Utiliser des RLS (Row-Level Security)", "Partager les rapports sans restrictions", "Exporter les données en Excel", "Supprimer les relations entre tables"],
    solution: "Utiliser des RLS (Row-Level Security)",
    explication: "La RLS est la méthode recommandée pour sécuriser l'accès aux données en limitant les lignes visibles selon l'utilisateur."
  },
  {
    id: 93,
    question: "Quelle est la différence entre un dashboard et un rapport dans Power BI ?",
    options: ["Un dashboard est une collection de visuels issus de différents rapports", "Un rapport est un résumé statique", "Un dashboard est uniquement disponible dans Power BI Desktop", "Un rapport ne peut pas être partagé"],
    solution: "Un dashboard est une collection de visuels issus de différents rapports",
    explication: "Les dashboards consolident des vignettes de plusieurs rapports sur une seule page, contrairement aux rapports qui contiennent des pages complètes."
  },
  {
    id: 94,
    question: "Quelle licence est nécessaire pour utiliser les fonctionnalités de rafraîchissement automatique dans Power BI ?",
    options: ["Power BI Free", "Power BI Pro ou Premium", "Power BI Desktop", "Power BI Mobile"],
    solution: "Power BI Pro ou Premium",
    explication: "L'actualisation planifiée automatique des datasets nécessite une licence Power BI Pro ou Premium."
  },
  {
    id: 95,
    question: "Quelle fonctionnalité permet d'optimiser le modèle en réduisant le nombre de colonnes dans Power BI ?",
    options: ["Supprimer les colonnes inutiles dans Power Query", "Ajouter plus de mesures", "Utiliser plus de tables", "Désactiver les relations"],
    solution: "Supprimer les colonnes inutiles dans Power Query",
    explication: "Éliminer les colonnes non nécessaires dès Power Query réduit la taille du modèle et améliore les performances."
  },
  {
    id: 96,
    question: "Quelle fonction DAX permet de retourner la date actuelle ?",
    options: ["TODAY()", "NOW()", "DATE()", "CURRENTDATE()"],
    solution: "TODAY()",
    explication: "La fonction TODAY() retourne la date du jour sans l'heure, tandis que NOW() inclut également l'heure."
  },
  {
    id: 97,
    question: "Quel type de rapport permet de créer des rapports mobiles dans Power BI ?",
    options: ["Rapport classique", "Rapport Power BI Mobile Layout", "Dashboard", "Dataflow"],
    solution: "Rapport Power BI Mobile Layout",
    explication: "Power BI permet de créer une mise en page spécifique optimisée pour l'affichage sur téléphones mobiles."
  },
  {
    id: 98,
    question: "Quelle est la fonction de Power BI Gateway ?",
    options: ["Connecter Power BI Service à des sources de données locales", "Créer des rapports", "Partager des dashboards", "Nettoyer des données"],
    solution: "Connecter Power BI Service à des sources de données locales",
    explication: "La Gateway agit comme un pont sécurisé entre les sources de données on-premise et Power BI Service dans le cloud."
  },
  {
    id: 99,
    question: "Quelle est la différence entre une mesure et un KPI dans Power BI ?",
    options: ["Une mesure est un calcul, un KPI inclut un indicateur de performance visuel", "KPI est une colonne calculée", "Mesure est statique", "KPI ne peut pas être utilisé dans des rapports"],
    solution: "Une mesure est un calcul, un KPI inclut un indicateur de performance visuel",
    explication: "Un KPI est un visuel spécial qui affiche une mesure avec une cible et un indicateur de tendance, tandis qu'une mesure est juste un calcul."
  },
  {
    id: 100,
    question: "Quel type de jointure Power Query utilisez-vous pour combiner deux tables et garder toutes les lignes de la table de gauche ?",
    options: ["Inner", "Left Outer", "Right Outer", "Full Outer"],
    solution: "Left Outer",
    explication: "Une jointure Left Outer conserve toutes les lignes de la table de gauche et ajoute les correspondances de la table de droite."
  },
  {
    id: 101,
    question: "Quel est le format d'export pour un dataset Power BI utilisé pour analyse externe ?",
    options: ["PBIX", "CSV", "XLSX", "PDF"],
    solution: "CSV",
    explication: "Le format CSV est idéal pour exporter des données Power BI vers des outils d'analyse externes car il est universel et facilement importable."
  },
  {
    id: 102,
    question: "Quel est le rôle principal de Power BI Dataflow ?",
    options: ["Centraliser la préparation des données pour plusieurs datasets", "Créer des rapports", "Visualiser les données", "Gérer les utilisateurs"],
    solution: "Centraliser la préparation des données pour plusieurs datasets",
    explication: "Les Dataflows permettent de centraliser et réutiliser la logique de préparation de données à travers plusieurs datasets et rapports."
  },
  {
    id: 103,
    question: "Quel est l'avantage d'utiliser Power BI Premium ?",
    options: ["Capacité dédiée pour un meilleur rendement et partage large", "Logiciel gratuit", "Interface simplifiée", "Moins de fonctionnalités"],
    solution: "Capacité dédiée pour un meilleur rendement et partage large",
    explication: "Power BI Premium offre des ressources dédiées garantissant de meilleures performances et permet de partager du contenu avec des utilisateurs sans licence Pro."
  },
  {
    id: 104,
    question: "Comment pouvez-vous restreindre l'accès aux données en fonction de l'utilisateur dans Power BI ?",
    options: ["En utilisant la sécurité au niveau des lignes (RLS)", "En partageant plusieurs rapports", "En filtrant les pages", "En exportant les données"],
    solution: "En utilisant la sécurité au niveau des lignes (RLS)",
    explication: "La RLS permet de définir des règles qui limitent les données visibles pour chaque utilisateur en fonction de leur identité."
  },
  {
    id: 105,
    question: "Que signifie \"drill through\" dans Power BI ?",
    options: ["Naviguer vers un rapport détaillé à partir d'un visuel", "Importer des données", "Ajouter un filtre", "Supprimer des colonnes"],
    solution: "Naviguer vers un rapport détaillé à partir d'un visuel",
    explication: "Le drill through permet de cliquer sur un élément d'un visuel pour accéder à une page de détails avec le contexte de filtre conservé."
  },
  {
    id: 106,
    question: "Quelle est la différence entre Power BI Desktop et Power BI Service ?",
    options: ["Desktop est pour créer des rapports, Service pour les publier et partager", "Desktop ne supporte pas les données", "Service est gratuit", "Desktop permet d'analyser des données en temps réel"],
    solution: "Desktop est pour créer des rapports, Service pour les publier et partager",
    explication: "Power BI Desktop est l'outil de création de rapports, tandis que Power BI Service est la plateforme cloud pour publier, partager et collaborer."
  },
  {
    id: 107,
    question: "Quelle est la limite de taille maximale d'un fichier PBIX importé dans Power BI Service ?",
    options: ["100 MB", "1 GB", "10 GB", "5 GB"],
    solution: "1 GB",
    explication: "La taille maximale d'un fichier PBIX que vous pouvez télécharger dans Power BI Service est de 1 GB."
  },
  {
    id: 108,
    question: "Que fait la fonction DAX \"RELATED()\" ?",
    options: ["Récupère une valeur d'une table liée", "Filtre une table", "Compte les lignes", "Crée une relation"],
    solution: "Récupère une valeur d'une table liée",
    explication: "RELATED() permet d'accéder à une valeur d'une table liée via une relation existante, utile pour les colonnes calculées."
  },
  {
    id: 109,
    question: "Quel est l'avantage d'utiliser des \"Aggregations\" dans un modèle Power BI ?",
    options: ["Améliorer la performance sur de gros volumes de données", "Rendre les rapports plus beaux", "Ajouter plus de colonnes calculées", "Simplifier la modélisation"],
    solution: "Améliorer la performance sur de gros volumes de données",
    explication: "Les agrégations pré-calculent des résumés de données volumineuses, accélérant considérablement les requêtes sur ces données."
  },
  {
    id: 110,
    question: "Quelle option permet de gérer l'actualisation des données dans Power BI ?",
    options: ["Planification d'actualisation", "Rafraîchir manuellement uniquement", "Power Query uniquement", "Export des données"],
    solution: "Planification d'actualisation",
    explication: "La planification d'actualisation permet de configurer des horaires automatiques pour rafraîchir les datasets dans Power BI Service."
  },
  {
    id: 111,
    question: "Quel composant Power BI permet de créer des rapports interactifs ?",
    options: ["Dataset", "Rapport", "Dataflow", "Gateway"],
    solution: "Rapport",
    explication: "Les rapports Power BI sont les composants qui contiennent les visualisations interactives permettant l'exploration des données."
  },
  {
    id: 112,
    question: "Quel est le rôle de la fonction \"SUMX()\" en DAX ?",
    options: ["Calculer la somme d'une expression sur une table", "Additionner des colonnes uniquement", "Compter les lignes", "Filtrer des données"],
    solution: "Calculer la somme d'une expression sur une table",
    explication: "SUMX() itère sur chaque ligne d'une table et calcule la somme d'une expression évaluée pour chaque ligne."
  },
  {
    id: 113,
    question: "Quelle option Power BI permet de créer un rapport personnalisé pour un appareil mobile ?",
    options: ["Power BI Desktop", "Mode Mise en page mobile", "Power BI Service", "Power BI Mobile"],
    solution: "Mode Mise en page mobile",
    explication: "Le mode Mise en page mobile dans Power BI Desktop permet de créer une disposition optimisée spécifiquement pour les téléphones."
  },
  {
    id: 114,
    question: "Quel est l'effet de la fonction \"REMOVEFILTERS()\" en DAX ?",
    options: ["Supprimer tous les filtres sur une table ou colonne", "Appliquer un filtre", "Créer une relation", "Retourner la date"],
    solution: "Supprimer tous les filtres sur une table ou colonne",
    explication: "REMOVEFILTERS() supprime les filtres appliqués sur une ou plusieurs colonnes/tables, similaire à ALL() mais avec une syntaxe plus claire."
  },
  {
    id: 115,
    question: "Comment partager un rapport Power BI avec plusieurs utilisateurs au sein d'une organisation ?",
    options: ["Publier dans un workspace", "Envoyer un fichier PBIX", "Exporter en PDF", "Utiliser un dataset"],
    solution: "Publier dans un workspace",
    explication: "Publier un rapport dans un workspace permet à plusieurs utilisateurs d'y accéder avec les permissions appropriées."
  },
  {
    id: 116,
    question: "Quelle fonction DAX permet de filtrer une table en fonction d'une condition ?",
    options: ["FILTER", "ALL", "SUM", "RELATED"],
    solution: "FILTER",
    explication: "La fonction FILTER retourne une table filtrée contenant uniquement les lignes qui satisfont la condition spécifiée."
  },
  {
    id: 117,
    question: "Quel type de relation Power BI permet d'avoir un filtre dans les deux sens ?",
    options: ["Relation unidirectionnelle", "Relation bidirectionnelle", "Relation inactive", "Relation multiple"],
    solution: "Relation bidirectionnelle",
    explication: "Une relation bidirectionnelle permet aux filtres de se propager dans les deux directions entre les tables liées."
  },
  {
    id: 118,
    question: "Quel outil Power BI permet de surveiller l'utilisation d'un rapport ?",
    options: ["Usage Metrics", "Performance Analyzer", "Audit Logs", "Gateway"],
    solution: "Usage Metrics",
    explication: "Les métriques d'utilisation fournissent des informations détaillées sur qui consulte les rapports, quand et à quelle fréquence."
  },
  {
    id: 119,
    question: "Quel est le rôle d'un \"Theme\" dans Power BI ?",
    options: ["Appliquer une palette de couleurs et styles à un rapport", "Créer une nouvelle table", "Ajouter une mesure", "Filtrer les données"],
    solution: "Appliquer une palette de couleurs et styles à un rapport",
    explication: "Un thème permet d'appliquer de manière cohérente des couleurs, polices et styles à tous les visuels d'un rapport."
  },
  {
    id: 120,
    question: "Quel est le format de fichier pour un modèle Power BI qui ne contient que les données et la structure sans les rapports ?",
    options: ["PBIX", "PBIT", "CSV", "XLSX"],
    solution: "PBIT",
    explication: "Le format PBIT (Power BI Template) contient la structure du modèle et les requêtes sans les données, permettant de créer des modèles réutilisables."
  },
  {
    id: 121,
    question: "Quel est l'avantage principal d'utiliser les rapports paginés dans Power BI ?",
    options: ["Créer des rapports adaptés à l'impression et aux formats PDF détaillés", "Améliorer les performances des rapports", "Partager facilement avec les utilisateurs", "Créer des rapports interactifs"],
    solution: "Créer des rapports adaptés à l'impression et aux formats PDF détaillés",
    explication: "Les rapports paginés sont optimisés pour l'impression avec un contrôle précis de la mise en page, idéaux pour les factures, relevés, etc."
  },
  {
    id: 122,
    question: "Quelle fonctionnalité Power BI permet d'automatiser la génération et la distribution de rapports ?",
    options: ["Power Automate", "Power Query", "Power BI Gateway", "Dataflows"],
    solution: "Power Automate",
    explication: "Power Automate permet de créer des workflows automatisés pour générer et distribuer des rapports selon des déclencheurs spécifiques."
  },
  {
    id: 123,
    question: "Quelle est la principale différence entre un dataset importé et un dataset DirectQuery dans Power BI ?",
    options: ["Importé stocke les données dans Power BI, DirectQuery interroge la source en temps réel", "Importé est plus lent", "DirectQuery ne supporte pas les filtres", "Importé ne peut pas être rafraîchi"],
    solution: "Importé stocke les données dans Power BI, DirectQuery interroge la source en temps réel",
    explication: "Le mode Import charge les données dans Power BI, tandis que DirectQuery interroge la source de données à chaque interaction."
  },
  {
    id: 124,
    question: "Comment gérer les conflits lorsque plusieurs utilisateurs modifient un rapport dans Power BI Service ?",
    options: ["Utiliser le contrôle de version et sauvegarder régulièrement", "Supprimer les versions précédentes", "Exporter en PDF", "Partager uniquement en lecture seule"],
    solution: "Utiliser le contrôle de version et sauvegarder régulièrement",
    explication: "Le contrôle de version externe (Git, OneDrive) et les sauvegardes régulières permettent de gérer les conflits et tracer les modifications."
  },
  {
    id: 125,
    question: "Quel outil permet d'optimiser la performance d'un modèle Power BI en identifiant les visuels lents ?",
    options: ["Performance Analyzer", "Power Query Editor", "Dataflow", "Usage Metrics"],
    solution: "Performance Analyzer",
    explication: "Performance Analyzer mesure le temps d'exécution de chaque visuel et requête DAX pour identifier les goulots d'étranglement."
  },
  {
    id: 126,
    question: "Que signifie l'option \"Incremental Refresh\" dans Power BI ?",
    options: ["Rafraîchir uniquement les données modifiées ou nouvelles", "Rafraîchir toutes les données chaque fois", "Importer des données en double", "Exporter les données"],
    solution: "Rafraîchir uniquement les données modifiées ou nouvelles",
    explication: "L'actualisation incrémentielle ne rafraîchit que les partitions de données récentes ou modifiées, économisant du temps et des ressources."
  },
  {
    id: 127,
    question: "Quel est le format recommandé pour créer un thème personnalisé dans Power BI ?",
    options: ["JSON", "XML", "TXT", "CSV"],
    solution: "JSON",
    explication: "Les thèmes Power BI sont définis dans des fichiers JSON contenant les définitions de couleurs, polices et autres propriétés visuelles."
  },
  {
    id: 128,
    question: "Quelle fonctionnalité Power BI permet d'inclure un script Python ou R dans un rapport ?",
    options: ["Visuals personnalisés", "Dataflows", "Gateways", "DAX"],
    solution: "Visuals personnalisés",
    explication: "Power BI permet d'utiliser des visuels Python et R pour créer des visualisations personnalisées et exécuter des scripts analytiques."
  },
  {
    id: 129,
    question: "Quelle est la limite de fréquence maximale pour l'actualisation automatique d'un dataset Power BI dans un workspace Premium ?",
    options: ["8 fois par jour", "48 fois par jour", "1 fois par jour", "Illimitée"],
    solution: "48 fois par jour",
    explication: "Power BI Premium permet jusqu'à 48 actualisations par jour, offrant une fraîcheur de données bien supérieure à Pro (8 par jour)."
  },
  {
    id: 130,
    question: "Quel est l'avantage d'utiliser un workspace Premium dans Power BI ?",
    options: ["Capacités dédiées, distribution à grande échelle sans licence Pro pour les utilisateurs", "Interface simplifiée", "Moins de contrôle sur les données", "Fonctionnalités limitées"],
    solution: "Capacités dédiées, distribution à grande échelle sans licence Pro pour les utilisateurs",
    explication: "Un workspace Premium offre des ressources dédiées et permet de partager du contenu avec des utilisateurs ayant uniquement une licence gratuite."
  },
  {
    id: 131,
    question: "Que permet de faire la fonction DAX \"CALCULATE()\" ?",
    options: ["Modifier le contexte de filtre pour un calcul", "Additionner des colonnes", "Créer une table", "Supprimer des filtres"],
    solution: "Modifier le contexte de filtre pour un calcul",
    explication: "CALCULATE() est la fonction DAX la plus puissante, permettant de modifier le contexte de filtre dans lequel une expression est évaluée."
  },
  {
    id: 132,
    question: "Quel type de visualisation Power BI est le plus approprié pour afficher une tendance dans le temps ?",
    options: ["Graphique en barres", "Graphique en lignes", "Carte", "Diagramme circulaire"],
    solution: "Graphique en lignes",
    explication: "Le graphique en lignes est optimal pour visualiser l'évolution et les tendances de données chronologiques."
  },
  {
    id: 133,
    question: "Quelle est la différence entre un filtre de page et un filtre de rapport dans Power BI ?",
    options: ["Le filtre de page affecte une seule page, le filtre de rapport affecte toutes les pages", "Le filtre de page affecte tout le rapport", "Le filtre de rapport affecte une seule page", "Pas de différence"],
    solution: "Le filtre de page affecte une seule page, le filtre de rapport affecte toutes les pages",
    explication: "Les filtres de page s'appliquent uniquement à la page courante, tandis que les filtres de rapport s'appliquent à toutes les pages du rapport."
  },
  {
    id: 134,
    question: "Quel composant Power BI permet d'automatiser la préparation et le nettoyage des données ?",
    options: ["Power Query", "DAX", "Dashboard", "Gateway"],
    solution: "Power Query",
    explication: "Power Query est l'outil ETL (Extract, Transform, Load) de Power BI pour automatiser la préparation et le nettoyage des données."
  },
  {
    id: 135,
    question: "Comment configure-t-on la sécurité au niveau des lignes (RLS) dans Power BI ?",
    options: ["En définissant des rôles et des règles dans Power BI Desktop", "En partageant uniquement le rapport", "En filtrant dans Power Query", "En créant plusieurs rapports"],
    solution: "En définissant des rôles et des règles dans Power BI Desktop",
    explication: "La RLS se configure en créant des rôles avec des expressions DAX qui filtrent les données dans l'onglet Modélisation de Power BI Desktop."
  },
  {
    id: 136,
    question: "Quel est l'impact de l'utilisation excessive de colonnes calculées dans Power BI ?",
    options: ["Augmentation de la taille du modèle et ralentissement", "Amélioration des performances", "Réduction de la taille du fichier", "Facilite le partage"],
    solution: "Augmentation de la taille du modèle et ralentissement",
    explication: "Les colonnes calculées sont stockées dans le modèle et consomment de la mémoire, augmentant la taille du fichier et ralentissant l'actualisation."
  },
  {
    id: 137,
    question: "Quelle méthode permet d'actualiser un dataset Power BI connecté à une source locale ?",
    options: ["Utiliser une gateway configurée", "Rafraîchir manuellement dans Power BI Desktop", "Exporter et réimporter les données", "Utiliser un filtre"],
    solution: "Utiliser une gateway configurée",
    explication: "Une gateway on-premise est nécessaire pour connecter Power BI Service aux sources de données locales et permettre l'actualisation automatique."
  },
  {
    id: 138,
    question: "Quel est le rôle d'un \"Bookmark\" dans Power BI ?",
    options: ["Enregistrer un état particulier d'un rapport pour navigation rapide", "Ajouter un filtre permanent", "Créer un nouveau visuel", "Partager un rapport"],
    solution: "Enregistrer un état particulier d'un rapport pour navigation rapide",
    explication: "Les bookmarks capturent l'état complet du rapport (filtres, sélections, visibilité) permettant une navigation rapide entre différentes vues."
  },
  {
    id: 139,
    question: "Quelle est la fonction de Power BI Premium Per User (PPU) ?",
    options: ["Offrir des fonctionnalités Premium sur une base utilisateur", "Remplacer Power BI Pro", "Fournir uniquement le stockage cloud", "Créer des rapports paginés uniquement"],
    solution: "Offrir des fonctionnalités Premium sur une base utilisateur",
    explication: "PPU offre les fonctionnalités Premium (rapports paginés, actualisations fréquentes, etc.) avec une licence par utilisateur plutôt que par capacité."
  },
  {
    id: 140,
    question: "Quelle est la limite de taille maximale d'un dataset dans un workspace Power BI Pro ?",
    options: ["1 GB", "10 GB", "5 GB", "100 MB"],
    solution: "1 GB",
    explication: "Dans Power BI Pro, la taille maximale d'un dataset est limitée à 1 GB, alors que Premium offre des limites beaucoup plus élevées."
  },
  {
    id: 141,
    question: "Quelle est la meilleure approche pour gérer plusieurs versions d'un rapport Power BI ?",
    options: ["Utiliser un système de contrôle de version externe (Git, SharePoint)", "Sauvegarder dans différents fichiers PBIX", "Utiliser uniquement Power BI Service", "Ne pas modifier les rapports"],
    solution: "Utiliser un système de contrôle de version externe (Git, SharePoint)",
    explication: "L'utilisation d'un système de contrôle de version permet de tracer l'historique, gérer les branches et collaborer efficacement."
  },
  {
    id: 142,
    question: "Quelle est la fonction de \"Quick Insights\" dans Power BI ?",
    options: ["Fournir automatiquement des analyses et insights sur un dataset", "Créer un rapport automatiquement", "Exporter les données", "Partager un rapport"],
    solution: "Fournir automatiquement des analyses et insights sur un dataset",
    explication: "Quick Insights utilise l'IA pour analyser automatiquement les données et découvrir des tendances, anomalies et patterns intéressants."
  },
  {
    id: 143,
    question: "Comment pouvez-vous réduire la latence dans un rapport Power BI utilisant DirectQuery ?",
    options: ["Optimiser la source de données et les requêtes", "Ajouter plus de visuels", "Désactiver les relations", "Importer les données"],
    solution: "Optimiser la source de données et les requêtes",
    explication: "Optimiser les index de la base de données source, simplifier les requêtes DAX et limiter les visuels améliore les performances DirectQuery."
  },
  {
    id: 144,
    question: "Quelle est la meilleure pratique pour modéliser des données dans Power BI ?",
    options: ["Utiliser des relations en étoile (Star Schema)", "Utiliser des tables plates", "Fusionner toutes les tables", "Éviter les relations"],
    solution: "Utiliser des relations en étoile (Star Schema)",
    explication: "Le schéma en étoile avec des tables de faits et de dimensions optimise les performances et facilite la compréhension du modèle."
  },
  {
    id: 145,
    question: "Que signifie \"Composite Model\" dans Power BI ?",
    options: ["Combiner des données importées et DirectQuery dans un même modèle", "Utiliser plusieurs rapports", "Créer un modèle simplifié", "Importer uniquement les mesures"],
    solution: "Combiner des données importées et DirectQuery dans un même modèle",
    explication: "Un modèle composite permet de mélanger des tables en mode Import et DirectQuery dans le même dataset pour optimiser performance et fraîcheur."
  },
  {
    id: 146,
    question: "Quelle fonctionnalité permet de planifier des actualisations en fonction d'un calendrier personnalisé ?",
    options: ["Planification d'actualisation", "Power Automate uniquement", "Gateway", "Power Query"],
    solution: "Planification d'actualisation",
    explication: "La planification d'actualisation dans Power BI Service permet de configurer des horaires personnalisés quotidiens ou hebdomadaires."
  },
  {
    id: 147,
    question: "Comment limiter l'accès à un workspace Power BI ?",
    options: ["Gérer les membres et leurs rôles (Admin, Member, Viewer)", "Partager le lien uniquement", "Supprimer les rapports", "Exporter les données"],
    solution: "Gérer les membres et leurs rôles (Admin, Member, Viewer)",
    explication: "Les workspaces utilisent un système de rôles (Admin, Member, Contributor, Viewer) pour contrôler les permissions de chaque utilisateur."
  },
  {
    id: 148,
    question: "Quel est le rôle des \"Dataflows\" dans Power BI ?",
    options: ["Centraliser la préparation de données pour réutilisation", "Créer des rapports", "Visualiser des dashboards", "Exporter les données"],
    solution: "Centraliser la préparation de données pour réutilisation",
    explication: "Les Dataflows permettent de créer des pipelines ETL réutilisables qui peuvent alimenter plusieurs datasets différents."
  },
  {
    id: 149,
    question: "Quel est l'impact d'un rapport Power BI mal conçu sur la performance ?",
    options: ["Ralentissement et mauvaises expériences utilisateur", "Amélioration de la vitesse", "Aucun impact", "Plus de fonctionnalités"],
    solution: "Ralentissement et mauvaises expériences utilisateur",
    explication: "Un rapport mal optimisé (trop de visuels, requêtes inefficaces, modèle mal conçu) entraîne lenteur et frustration des utilisateurs."
  },
  {
    id: 150,
    question: "Quelle fonctionnalité Power BI permet d'intégrer un rapport dans une application web externe ?",
    options: ["Intégration Power BI Embedded", "Export PDF", "Power BI Mobile", "Dataflow"],
    solution: "Intégration Power BI Embedded",
    explication: "Power BI Embedded permet d'intégrer des rapports Power BI dans des applications web ou mobiles personnalisées avec authentification sécurisée."
  }
];