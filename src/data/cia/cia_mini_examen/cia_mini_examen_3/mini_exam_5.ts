export const quizQuestions = [
    {
        id: 1,
        question: "De ce qui suit, le plus grand avantage d'une architecture de base de données (serveur) est le suivant :",
        options: [
            "A. La redondance des données peut être réduite.",
            "B. La conversion à un système de base de données est peu coûteuse et peut être effectuée rapidement.",
            "C. Les occurrences multiples d'éléments de données sont utiles pour vérifier la cohérence.",
            "D. Les procédures de sauvegarde et de restauration sont réduites au minimum."
        ],
        answer: "A",
        explanation: "Dans un système de base de données, des structures de stockage sont créées qui rendent les programmes d'application indépendants de la disposition physique ou logique des données, réduisant ainsi considérablement la redondance."
    },
    {
        id: 2,
        question: "Un commis à l'inventaire voit à l'écran : numéro de pièce, description, quantité en stock, quantité commandée et point de commande. Collectivement, ces données forment un ensemble de :",
        options: [
            "A. Sur le terrain.",
            "B. Dossier.",
            "C. Base de données.",
            "D. Enregistrer."
        ],
        answer: "D",
        explanation: "Un enregistrement est un ensemble d'éléments de données connexes (champs) comme le numéro de pièce, la description, etc."
    },
    {
        id: 3,
        question: "Laquelle des unités suivantes est l'unité élémentaire de stockage de données utilisée pour représenter les attributs individuels d'une entité ?",
        options: [
            "A. Base de données.",
            "B. Champ de données.",
            "C. Dossier.",
            "D. Enregistrer."
        ],
        answer: "B",
        explanation: "Un élément de données (ou champ) représente les attributs individuels d'une entité, comme l'adresse d'un employé."
    },
    {
        id: 4,
        question: "Une approche du stockage des données axée sur les fichiers nécessite une clé d'enregistrement primaire pour chaque fichier. Lequel est une clé primaire ?",
        options: [
            "A. Numéro fournisseur dans un fichier principal des comptes fournisseurs.",
            "B. Numéro fournisseur dans un fichier d'opération de commande clôturé.",
            "C. Numéro fournisseur dans un fichier de base de commande en cours.",
            "D. Toutes les réponses sont correctes."
        ],
        answer: "A",
        explanation: "La clé d'enregistrement primaire identifie chaque enregistrement de manière unique. Le numéro fournisseur dans le fichier principal convient car il y a un enregistrement unique par fournisseur."
    },
    {
        id: 5,
        question: "Les vérificateurs combinent souvent plusieurs tables pour obtenir l'information voulue. Cette approche est connue sous le nom de :",
        options: [
            "A. Extraction.",
            "B. Jointure.",
            "C. Triage.",
            "D. Compression."
        ],
        answer: "B",
        explanation: "Une jointure combine des tables basées sur un élément de données commun pour fournir des informations consolidées."
    },
    {
        id: 6,
        question: "Dans un système de base de données, le verrouillage des données préserve l'intégrité, mais peut conduire à :",
        options: [
            "A. Traitement incohérent.",
            "B. Défaillances de Rollback.",
            "C. Transactions irrécouvrables.",
            "D. Embrassades mortelles (contention de récupération)."
        ],
        answer: "D",
        explanation: "Une étreinte mortelle se produit lorsque deux transactions ont besoin de la même ressource en même temps, causée par le verrouillage des données."
    },
    {
        id: 7,
        question: "Un des avantages d'un système de gestion de base de données (SGBD) est :",
        options: [
            "A. Chaque unité organisationnelle assume la responsabilité de ses données.",
            "B. Le coût du département de traitement des données diminue.",
            "C. Une vulnérabilité réduite grâce aux contrôles de sécurité.",
            "D. L'indépendance des données par rapport aux programmes d'application."
        ],
        answer: "D",
        explanation: "Les applications sont indépendantes de la structure de la base de données, permettant de développer des programmes pour des besoins spécifiques sans se soucier de la structure physique."
    },
    {
        id: 8,
        question: "Lequel des éléments suivants ne relève pas de la responsabilité d'un administrateur de base de données ?",
        options: [
            "A. Concevoir le contenu et l'organisation de la base de données.",
            "B. Développer des applications pour accéder à la base de données.",
            "C. Protéger la base de données et son logiciel.",
            "D. Surveiller et améliorer l'efficacité de la base de données."
        ],
        answer: "B",
        explanation: "Développer des applications relève des analystes de systèmes et programmeurs, pas de l'administrateur de base de données."
    },
    {
        id: 9,
        question: "Pour retracer les données à travers plusieurs programmes, un auditeur utiliserait :",
        options: [
            "A. Dictionnaire de données.",
            "B. Schéma de base de données.",
            "C. Crypteur de données.",
            "D. Table de décision."
        ],
        answer: "A",
        explanation: "Le dictionnaire de données contient tous les éléments de données et leur utilisation, permettant de retracer les données dans le système."
    },
    {
        id: 10,
        question: "Quelle interface de langage un administrateur utiliserait pour établir la structure des tables ?",
        options: [
            "A. Langage de définition des données.",
            "B. Langage de contrôle des données.",
            "C. Langage de manipulation des données.",
            "D. Langage d'interrogation des données."
        ],
        answer: "A",
        explanation: "Le DDL (Data Definition Language) est utilisé pour définir la structure logique de la base de données."
    },
    {
        id: 11,
        question: "Les fonctions d'interrogation d'un SGBD comprendraient toutes sauf :",
        options: [
            "A. Capacité de sortie graphique.",
            "B. Accès au dictionnaire de données.",
            "C. Un contrôleur de validité des données.",
            "D. Une interface requête par exemple."
        ],
        answer: "C",
        explanation: "Le système de base de données impose déjà des contraintes de validité lors de l'insertion des données ; la vérification supplémentaire est faite par l'application."
    },
    {
        id: 12,
        question: "Un auditeur confronté à une paie traitée par lots avec éléments de données de même taille devrait utiliser :",
        options: [
            "A. Structure de fichier plat unique.",
            "B. Structure hiérarchique.",
            "C. Structure du réseau.",
            "D. Structure relationnelle."
        ],
        answer: "A",
        explanation: "Une structure de fichier plat unique est adaptée aux enregistrements uniformes, typiquement représentés sous forme de table ou feuille de calcul."
    },
    {
        id: 13,
        question: "Lequel des modèles de base de données suivants est le plus polyvalent ?",
        options: [
            "A. Modèle arborescent.",
            "B. Modèle hiérarchique.",
            "C. Modèle réseau.",
            "D. Modèle relationnel."
        ],
        answer: "D",
        explanation: "Le modèle relationnel organise les données en tables bidimensionnelles, offrant flexibilité et facilité de jointure pour diverses requêtes."
    },
    {
        id: 14,
        question: "La collecte de données pour tous les fournisseurs dans une base relationnelle correspond à :",
        options: [
            "A. Enregistrer.",
            "B. Sur le terrain.",
            "C. Dossier.",
            "D. Octet."
        ],
        answer: "C",
        explanation: "Un fichier (dossier) est un groupe d'enregistrements représentant les données de tous les fournisseurs."
    },
    {
        id: 15,
        question: "Quelle est la hiérarchie ascendante correcte des données dans un système ?",
        options: [
            "A. Caractère, enregistrement, fichier, champ.",
            "B. Champ, caractère, fichier, enregistrement.",
            "C. Caractère, champ, enregistrement, fichier.",
            "D. Champ, enregistrement, fichier, caractère."
        ],
        answer: "C",
        explanation: "Un caractère (octet) → champ → enregistrement → fichier."
    },
    {
        id: 16,
        question: "Lequel des champs ou combinaison peut être utilisé comme clé unique ?",
        options: [
            "A. Colonne I et II combinées.",
            "B. Colonne I et V combinées.",
            "C. Colonne III seule.",
            "D. Colonne IV et V combinées."
        ],
        answer: "C",
        explanation: "Une clé doit identifier chaque enregistrement de façon unique. Seule la colonne III le fait."
    },
    {
        id: 17,
        question: "Hiérarchie du stockage dans les bases de données, de la moins complexe à la plus complexe :",
        options: [
            "A. Octet, champ, fichier, enregistrement.",
            "B. Octet, champ, enregistrement, fichier.",
            "C. Champ, octet, enregistrement, fichier.",
            "D. Champ, octet, fichier, enregistrement."
        ],
        answer: "B",
        explanation: "Un octet → champ → enregistrement → fichier."
    },
    {
        id: 18,
        question: "Une commande client ne peut exister que si le client correspondant existe. Ce type de contrainte est :",
        options: [
            "A. Normalisation.",
            "B. Intégrité de l'entité.",
            "C. Schéma interne.",
            "D. Intégrité référentielle."
        ],
        answer: "D",
        explanation: "L'intégrité référentielle impose que les enregistrements référencés existent avant d'insérer des données liées."
    },
    {
        id: 19,
        question: "L'objectif principal d'un système de base de données est d'avoir un emplacement unique pour :",
        options: [
            "A. Dossier.",
            "B. Enregistrer.",
            "C. Base de données.",
            "D. Élément de données."
        ],
        answer: "D",
        explanation: "Chaque élément de données a une définition, un nom et un format standard, ce qui permet de réduire la redondance et l'incohérence."
    },
    {
        id: 20,
        question: "Une base de données avec enregistrements fournisseurs, pièces et achats a une :",
        options: [
            "A. Structure de fichier plat unique.",
            "B. Structure hiérarchique.",
            "C. Structure relationnelle.",
            "D. Structure du réseau."
        ],
        answer: "C",
        explanation: "Chaque type d'enregistrement correspond à une table relationnelle reliée par des champs communs."
    },
    {
        id: 21,
        question: "Un des principaux objectifs d'un SGBD est :",
        options: [
            "A. Réduire la complexité globale.",
            "B. Fournir des fichiers séparés par application.",
            "C. Utiliser concepts d'organisation physique.",
            "D. Améliorer la cohérence des données en réduisant la redondance."
        ],
        answer: "D",
        explanation: "Le SGBD gère le stockage et la récupération des données pour réduire la redondance et l'incohérence."
    },
    {
        id: 22,
        question: "Une base de données est :",
        options: [
            "A. Indispensable pour le stockage de grands ensembles de données.",
            "B. Une collection de fichiers liés.",
            "C. Un système en temps réel.",
            "D. Un réseau de terminaux informatiques."
        ],
        answer: "B",
        explanation: "La base de données est une collection intégrée de fichiers permettant un accès multiple et une mise à jour efficace."
    },
    {
        id: 23,
        question: "Une fonction principale d'un SGBD est :",
        options: [
            "A. Personnalisation des rapports.",
            "B. Possibilité de créer et modifier la base de données.",
            "C. Saisie des transactions financières.",
            "D. Autorisations d'accès aux bases de données."
        ],
        answer: "B",
        explanation: "Le SGBD permet de gérer la structure physique et logique de la base indépendamment des programmes applicatifs."
    },
    {
        id: 24,
        question: "Dans un système d'inventaire, un enregistrement contient le numéro de pièce, nom, couleur et poids. Ces éléments individuels sont :",
        options: [
            "A. Champs.",
            "B. Fichiers stockés.",
            "C. Octets.",
            "D. Événements."
        ],
        answer: "A",
        explanation: "Chaque champ représente une unité d'information distincte dans un enregistrement."
    },
    {
        id: 25,
        question: "Une description globale d'une base de données avec noms, caractéristiques et relations des éléments de données est définie à l'aide de :",
        options: [
            "A. Langage de définition des données.",
            "B. Langage de contrôle des données.",
            "C. Langage de manipulation des données.",
            "D. Langage d'interprétation des commandes de données."
        ],
        answer: "A",
        explanation: "Le DDL définit le schéma de la base et les vues logiques nécessaires pour les applications."
    },
    {
        id: 26,
        question: "Permettre aux utilisateurs d'avoir des vues différentes des mêmes données est une fonction de :",
        options: [
            "A. Le système d'exploitation.",
            "B. Un système de gestion de bibliothèque de programme.",
            "C. Le SGBD.",
            "D. Un programme utilitaire."
        ],
        answer: "C",
        explanation: "Le SGBD fournit l'indépendance des applications vis-à-vis de la disposition physique des données et permet différentes vues."
    },
    {
        id: 27,
        question: "La fonction d'un dictionnaire de données est de :",
        options: [
            "A. Marquer la limite entre deux transactions.",
            "B. Décrire et partager l'information sur les objets et ressources.",
            "C. Spécifier les utilisateurs du système.",
            "D. Spécifier les privilèges et règles de sécurité."
        ],
        answer: "B",
        explanation: "Le dictionnaire de données contient des informations organisées et partagées sur les objets et ressources utilisés par le système d'information."
    },
    {
        id: 28,
        question: "Une fonction importante d'un administrateur de base de données est :",
        options: [
            "A. Examiner la sortie pour déceler les erreurs.",
            "B. Planification des opérations quotidiennes.",
            "C. Redéfinition et restructuration de la base de données.",
            "D. Évaluation des contrôles internes pour le matériel."
        ],
        answer: "C",
        explanation: "L'administrateur utilise le DDL pour définir, redéfinir et restructurer la base tout en établissant les contrôles d'intégrité."
    },
    {
        id: 29,
        question: "Une vue logique de l'ensemble d'une base de données est un :",
        options: [
            "A. Hiérarchie.",
            "B. Réseau.",
            "C. Schéma.",
            "D. Sous-schéma."
        ],
        answer: "C",
        explanation: "Le schéma décrit la structure de la base de données et peut être modifié sans affecter les programmes utilisant les données."
    },
    {
        id: 30,
        question: "Les fonctions d'un administrateur de base de données incluent :",
        options: [
            "A. Préparation de l'entrée des données, conception et opérations.",
            "B. Conception, exploitation et sécurité.",
            "C. Conception, fonctionnement et matériel.",
            "D. Conception, support logiciel et sécurité."
        ],
        answer: "B",
        explanation: "Le DBA est responsable de la conception, de l'exploitation et de la sécurité de la base de données."
    },
    {
        id: 31,
        question: "DB2, Oracle, SQL Server et Access sont les suivants :",
        options: [
            "A. Systèmes de bibliothèques.",
            "B. Systèmes de contrôle d'accès.",
            "C. Langages de programmation.",
            "D. Systèmes de gestion de bases de données."
        ],
        answer: "D",
        explanation: "DB2, Oracle, SQL Server et Access sont des systèmes de gestion de bases de données (SGBD) permettant de créer, maintenir, sécuriser et interroger des bases de données."
    },
    {
        id: 32,
        question: "Lequel des facteurs suivants est un facteur critique de succès dans l'exploration de données d'un grand entrepôt de données ?",
        options: [
            "A. Reconnaissance de formes.",
            "B. Moteurs de recherche efficaces.",
            "C. Systèmes de traitement d'images.",
            "D. Localisateur de ressources universel (URL) précis."
        ],
        answer: "A",
        explanation: "L'exploration de données repose sur la reconnaissance de formes pour identifier des associations, classifications et tendances cachées."
    },
    {
        id: 33,
        question: "Une base de données modélisée selon une arborescence correspond à quel type de modèle ?",
        options: [
            "A. Relationnel.",
            "B. Hiérarchique.",
            "C. Réseau.",
            "D. Distribué."
        ],
        answer: "B",
        explanation: "Le modèle hiérarchique utilise une structure arborescente où chaque enregistrement a un parent unique mais peut avoir plusieurs enfants."
    },
    {
        id: 34,
        question: "Quels concepts de fichiers permettent de répondre immédiatement aux demandes des clients ?",
        options: [
            "A. Stockage séquentiel et chaînes.",
            "B. Stockage séquentiel et index.",
            "C. Clé d'enregistrement, index et pointeurs.",
            "D. Structure de fichier inversée, index et étiquettes internes."
        ],
        answer: "C",
        explanation: "La clé identifie l’enregistrement, l’index permet l’accès rapide et les pointeurs relient logiquement les données."
    },
    {
        id: 35,
        question: "La stratégie des systèmes d'information est déterminée par :",
        options: [
            "A. Les besoins des entreprises.",
            "B. Les besoins de chaque département.",
            "C. La technologie disponible.",
            "D. Les stratégies des concurrents."
        ],
        answer: "A",
        explanation: "La stratégie SI doit être alignée sur les besoins globaux de l’entreprise."
    },
    {
        id: 36,
        question: "Lesquels sont des types de stratégies commerciales ?",
        options: [
            "A. Stratégie au niveau de l'entreprise.",
            "B. Stratégie au niveau de l'unité d'affaires.",
            "C. Stratégie au niveau fonctionnel.",
            "D. Ce sont tous des types de stratégies."
        ],
        answer: "D",
        explanation: "Les organisations élaborent des stratégies au niveau global, par unité d’affaires et au niveau fonctionnel."
    },
    {
        id: 37,
        question: "Tous les énoncés suivants sont vrais sauf :",
        options: [
            "A. L'énoncé de vision définit le but principal.",
            "B. L'énoncé de mission développe la vision.",
            "C. Le plan stratégique SI répond aux besoins d’un seul ministère.",
            "D. Les objectifs guident l’infrastructure TI."
        ],
        answer: "C",
        explanation: "Le plan stratégique SI doit couvrir l’ensemble de l’organisation, pas un seul département."
    },
    {
        id: 38,
        question: "Quels énoncés sont vrais concernant les facteurs stratégiques ?",
        options: [
            "A. 1 seulement.",
            "B. 2 seulement.",
            "C. 3 seulement.",
            "D. 1, 2 et 3."
        ],
        answer: "D",
        explanation: "Les nouvelles technologies, la GRC et les SI sont tous des moteurs stratégiques."
    },
    {
        id: 39,
        question: "Tous les énoncés suivants sont exacts sauf :",
        options: [
            "A. La stratégie TI détermine la technologie nécessaire.",
            "B. La stratégie SI détermine ce qui doit être fourni.",
            "C. La stratégie TI se concentre sur la fourniture de l'information.",
            "D. La stratégie TI élabore l’architecture de l'information."
        ],
        answer: "B",
        explanation: "La stratégie SI détermine les informations nécessaires, pas directement les TI."
    },
    {
        id: 40,
        question: "Quel est un avantage probable de la TI pour le contrôle interne ?",
        options: [
            "A. Traitement des opérations inhabituelles.",
            "B. Amélioration de l'actualité de l'information.",
            "C. Perte potentielle de données.",
            "D. Enregistrement des transactions non autorisées."
        ],
        answer: "B",
        explanation: "La TI permet l’enregistrement en temps réel et améliore l’actualité des informations."
    },
    {
        id: 41,
        question: "Les systèmes GRC sont représentatifs de tous sauf :",
        options: [
            "A. Mise en œuvre de programmes de gouvernance.",
            "B. Concentration sur une seule fonction.",
            "C. Aide à la conformité.",
            "D. Réduction potentielle des coûts."
        ],
        answer: "B",
        explanation: "Les systèmes GRC couvrent plusieurs fonctions organisationnelles."
    },
    {
        id: 42,
        question: "Lequel n’est pas représentatif des systèmes GRC ?",
        options: [
            "A. Associés aux contrôles de surveillance.",
            "B. Prennent en compte les règles fédérales et locales.",
            "C. N'identifient pas la source des risques.",
            "D. Permettent de gérer la stratégie de gouvernance."
        ],
        answer: "C",
        explanation: "Les systèmes GRC aident justement à identifier et gérer les risques."
    },
    {
        id: 43,
        question: "La réapparition d’erreurs de codage est due à un contrôle inadéquat de :",
        options: [
            "A. Sauvegardes.",
            "B. Contrôle des changements.",
            "C. Contrôle d'accès.",
            "D. Essais."
        ],
        answer: "B",
        explanation: "Un mauvais contrôle des changements permet la réutilisation de code erroné."
    },
    {
        id: 44,
        question: "Un contrôle efficace du développement d'applications inclut :",
        options: [
            "A. I et III seulement.",
            "B. I, II et IV seulement.",
            "C. I, III et IV seulement.",
            "D. II, III et IV seulement."
        ],
        answer: "C",
        explanation: "Comité de pilotage, études de faisabilité et normes sont essentiels."
    },
    {
        id: 45,
        question: "Qui doit établir la priorité entre deux projets TI ?",
        options: [
            "A. Prioriser la sécurité.",
            "B. Le responsable informatique.",
            "C. Augmenter la production.",
            "D. Le comité directeur des SI."
        ],
        answer: "D",
        explanation: "Le comité directeur évalue les priorités selon l’analyse coûts-avantages."
    },
    {
        id: 46,
        question: "Une étude de faisabilité doit inclure :",
        options: [
            "A. Fournisseurs potentiels.",
            "B. Exposition aux virus.",
            "C. Méthodes de mise en œuvre.",
            "D. Technologie et coûts connexes."
        ],
        answer: "D",
        explanation: "La faisabilité technique et les coûts sont évalués à cette étape."
    },
    {
        id: 47,
        question: "Responsabilité directe d’un utilisateur individuel EUC :",
        options: [
            "A. Acquisition matériel/logiciel.",
            "B. Inventaire équipement.",
            "C. Planification stratégique.",
            "D. Sécurité physique."
        ],
        answer: "D",
        explanation: "L’utilisateur individuel est responsable de la sécurité physique de son équipement."
    },
    {
        id: 48,
        question: "Risque principal en environnement EUC :",
        options: [
            "A. Manque d’UPS.",
            "B. Absence d’interface GUI.",
            "C. Difficulté d’intégration.",
            "D. Manque d’utilitaires."
        ],
        answer: "C",
        explanation: "Les applications développées localement peuvent être difficiles à intégrer."
    },
    {
        id: 49,
        question: "Avantage principal du CASE :",
        options: [
            "A. Aucun nouvel outil requis.",
            "B. Aucune formation nécessaire.",
            "C. Amélioration de la gestion du développement.",
            "D. Réduction des tests."
        ],
        answer: "C",
        explanation: "CASE améliore la gestion du développement grâce à l’automatisation et aux outils intégrés."
    },
    {
        id: 50,
        question: "La documentation du programme assure que :",
        options: [
            "A. Les programmeurs accèdent à la production.",
            "B. Pas d’erreurs mathématiques.",
            "C. Les programmes fonctionnent comme prévu.",
            "D. Aucun usage personnel du matériel."
        ],
        answer: "C",
        explanation: "La documentation garantit maintenance et bon fonctionnement."
    },
    {
        id: 51,
        question: "Dans le RAD, le système est développé :",
        options: [
            "A. Documentation différée.",
            "B. Sans gestion de projet.",
            "C. Module par module.",
            "D. Sans réutilisation de code."
        ],
        answer: "C",
        explanation: "Le développement rapide d’applications se fait par modules successifs."
    },
    {
        id: 52,
        question: "Avant conception descendante, il faut examiner :",
        options: [
            "A. Systèmes concurrents.",
            "B. Matériel nécessaire.",
            "C. Besoins d'information des gestionnaires.",
            "D. Contrôles existants."
        ],
        answer: "C",
        explanation: "Les besoins d'information déterminent la conception."
    },
    {
        id: 53,
        question: "Accès des programmeurs à production = lacune dans :",
        options: [
            "A. Contrôle des changements.",
            "B. Annulation de la gestion.",
            "C. Intégrité des données.",
            "D. Opérations informatiques."
        ],
        answer: "A",
        explanation: "L’absence de séparation des tâches indique un défaut de contrôle des changements."
    },
    {
        id: 54,
        question: "La formation a lieu durant :",
        options: [
            "A. Planification.",
            "B. Analyse.",
            "C. Conception.",
            "D. Mise en œuvre."
        ],
        answer: "D",
        explanation: "La formation intervient lors de l’installation et exploitation."
    },
    {
        id: 55,
        question: "Projet le plus risqué :",
        options: [
            "A. Technologie stable + conception définie.",
            "B. Technologie nouvelle + conception sommaire.",
            "C. Technologie stable + conception définie.",
            "D. Conception définie."
        ],
        answer: "B",
        explanation: "Nouvelle technologie et conception imprécise augmentent le risque."
    },
    {
        id: 56,
        question: "Outil pour choisir meilleure solution système :",
        options: [
            "A. Essais pilotes.",
            "B. Sélection utilisateur.",
            "C. Arbre de décision.",
            "D. Analyse coûts-avantages."
        ],
        answer: "D",
        explanation: "L’analyse coûts-avantages permet de choisir la solution optimale."
    },
    {
        id: 57,
        question: "N’est pas une étape de lancement du projet :",
        options: [
            "A. Préparation de la proposition.",
            "B. Informer les gestionnaires.",
            "C. Rassembler l'équipe.",
            "D. Formation du personnel."
        ],
        answer: "A",
        explanation: "La proposition fait partie de la définition du projet."
    },
    {
        id: 58,
        question: "Processus d’apprentissage du système actuel :",
        options: [
            "A. Maintenance.",
            "B. Analyse des systèmes.",
            "C. Étude de faisabilité.",
            "D. Conception."
        ],
        answer: "B",
        explanation: "L’analyse des systèmes étudie l’existant et définit les exigences."
    },
    {
        id: 59,
        question: "Élaboration des spécifications matérielles et logicielles :",
        options: [
            "A. Analyse.",
            "B. Faisabilité.",
            "C. Maintenance.",
            "D. Conception."
        ],
        answer: "D",
        explanation: "La conception définit les spécifications détaillées."
    },
    {
        id: 60,
        question: "Stratégie la moins risquée de conversion :",
        options: [
            "A. Conversion directe.",
            "B. Conversion parallèle.",
            "C. Conversion pilote.",
            "D. Conversion base de données."
        ],
        answer: "B",
        explanation: "La conversion parallèle fait fonctionner ancien et nouveau système simultanément."
    },
    {
        id: 61,
        question: "Workwell Company met en œuvre le nouveau système dans une seule région pour tester son efficacité. Ce type de conversion s'appelle :",
        options: [
            "A. Conversion parallèle.",
            "B. Conversion directe.",
            "C. Conversion de prototype.",
            "D. Conversion pilote."
        ],
        answer: "D",
        explanation: "La conversion pilote consiste à tester le nouveau système dans un segment spécifique (région, division) avant un déploiement global."
    },
    {
        id: 62,
        question: "Les erreurs sont les plus coûteuses à corriger durant la phase de :",
        options: [
            "A. Programmation.",
            "B. Conception conceptuelle.",
            "C. Analyse.",
            "D. Mise en œuvre."
        ],
        answer: "D",
        explanation: "Plus une erreur est détectée tard dans le cycle de vie, plus sa correction est coûteuse. La mise en œuvre étant la dernière étape, les corrections y sont les plus coûteuses."
    },
    {
        id: 63,
        question: "Le processus de surveillance, d’évaluation et de modification d’un système au besoin est appelé :",
        options: [
            "A. Analyse des systèmes.",
            "B. Étude de faisabilité des systèmes.",
            "C. Maintenance des systèmes.",
            "D. Mise en œuvre de systèmes."
        ],
        answer: "C",
        explanation: "La maintenance consiste à modifier et améliorer un système pour corriger des défauts ou répondre à de nouveaux besoins."
    },
    {
        id: 64,
        question: "À quelle étape du cycle de vie l’analyste sera-t-il principalement utilisé pour tester un nouveau système ?",
        options: [
            "A. Analyse coûts-avantages.",
            "B. Définition des besoins.",
            "C. Organigramme.",
            "D. Développement."
        ],
        answer: "D",
        explanation: "Les tests sont principalement réalisés durant la phase de développement."
    },
    {
        id: 65,
        question: "Un avantage de la technologie CASE est qu’elle permet de garantir que :",
        options: [
            "A. Aucun champ de données obsolètes n'apparaît.",
            "B. Les utilisateurs s'engagent dans le système.",
            "C. Tous les programmes sont optimisés.",
            "D. Les règles d’intégrité des données sont appliquées de manière cohérente."
        ],
        answer: "D",
        explanation: "CASE permet d’assurer l’application cohérente des règles d’intégrité et de validation des données."
    },
    {
        id: 66,
        question: "La meilleure approche de développement lorsque les besoins évoluent rapidement est :",
        options: [
            "A. Prototypage.",
            "B. Cycle de vie classique.",
            "C. Analyse structurée.",
            "D. Hiérarchie entrée-processus-sortie."
        ],
        answer: "A",
        explanation: "Le prototypage permet d’ajuster rapidement le système grâce à des itérations successives."
    },
    {
        id: 67,
        question: "Quel élément ne peut pas être généré automatiquement par les outils CASE ?",
        options: [
            "A. Détermination des besoins en information.",
            "B. Conception logique du programme.",
            "C. Code du programme.",
            "D. Documentation."
        ],
        answer: "A",
        explanation: "Les besoins en information doivent être identifiés par les utilisateurs avant l’utilisation de CASE."
    },
    {
        id: 68,
        question: "L’approche produisant rapidement un modèle d’interface utilisateur et de logique de traitement est appelée :",
        options: [
            "A. Réseaux neuronaux.",
            "B. Prototypage.",
            "C. Réingénierie.",
            "D. Génération d’applications."
        ],
        answer: "B",
        explanation: "Le prototypage permet de créer rapidement un modèle fonctionnel pour validation."
    },
    {
        id: 69,
        question: "L’approche du cycle de vie est mal adaptée aux projets :",
        options: [
            "A. Structurés.",
            "B. Grands.",
            "C. Complexes.",
            "D. Non structurés."
        ],
        answer: "D",
        explanation: "Le cycle de vie est efficace pour les projets structurés. Pour les projets non structurés, le prototypage est plus adapté."
    },
    {
        id: 70,
        question: "Un avantage des méthodologies du cycle de vie est :",
        options: [
            "A. Réduction des coûts si les besoins changent souvent.",
            "B. Système fonctionnel rapide.",
            "C. Réduction du temps de développement.",
            "D. Amélioration du contrôle du processus."
        ],
        answer: "D",
        explanation: "Le cycle de vie structure le développement en phases contrôlées et améliore la gestion."
    },
    {
        id: 71,
        question: "Quel est un risque lié aux fichiers développés par l'utilisateur final (EUC) ?",
        options: [
            "A. La direction leur accorde le même degré de confiance qu’aux systèmes mainframe.",
            "B. Manque de flexibilité.",
            "C. Réaction lente à la concurrence.",
            "D. Augmentation des coûts."
        ],
        answer: "A",
        explanation: "Les applications EUC peuvent manquer de contrôles formels, mais être utilisées avec la même confiance que les systèmes officiels."
    },
    {
        id: 72,
        question: "Quelle est la dernière étape avant la mise en service ?",
        options: [
            "A. Conversion par étapes.",
            "B. Tests d’acceptation utilisateur.",
            "C. Tests dynamiques.",
            "D. Tests statiques."
        ],
        answer: "B",
        explanation: "Les tests d’acceptation utilisateur valident officiellement le système avant lancement."
    },
    {
        id: 73,
        question: "Laquelle n’est pas une stratégie de conversion ?",
        options: [
            "A. Fonctionnement en parallèle.",
            "B. Conversion directe.",
            "C. Conversion pilote.",
            "D. Tests de boîtes blanches."
        ],
        answer: "D",
        explanation: "Les tests de boîtes blanches sont une méthode de test, pas une stratégie de conversion."
    },
    {
        id: 74,
        question: "Quels sont les objectifs des tests durant le développement ?",
        options: [
            "A. I et III seulement.",
            "B. II, III et IV seulement.",
            "C. I, II et IV seulement.",
            "D. I, II, III et IV."
        ],
        answer: "D",
        explanation: "Les tests vérifient la conformité aux exigences, la performance et la validité des résultats."
    },
    {
        id: 75,
        question: "Les tests de boîte grise impliquent :",
        options: [
            "A. Test des structures internes.",
            "B. Exécution du code.",
            "C. Connaissance partielle des structures internes.",
            "D. Aucune connaissance du code."
        ],
        answer: "C",
        explanation: "Les tests de boîte grise utilisent une connaissance partielle du fonctionnement interne."
    },
    {
        id: 76,
        question: "Les tests de boîte blanche se concentrent principalement sur :",
        options: [
            "A. Les fonctionnalités visibles par l’utilisateur.",
            "B. Les structures internes et les chemins logiques du code.",
            "C. Les performances du système en production.",
            "D. Les interfaces utilisateur uniquement."
        ],
        answer: "B",
        explanation: "Les tests de boîte blanche analysent la logique interne, les structures et les chemins d’exécution du programme."
    },
    {
        id: 77,
        question: "Les tests de boîte noire sont basés sur :",
        options: [
            "A. L’analyse du code source.",
            "B. La structure interne des bases de données.",
            "C. Les spécifications fonctionnelles.",
            "D. Les commentaires du programmeur."
        ],
        answer: "C",
        explanation: "Les tests de boîte noire évaluent le système selon les exigences fonctionnelles sans examiner le code interne."
    },
    {
        id: 78,
        question: "Une conversion directe comporte principalement :",
        options: [
            "A. Un risque élevé.",
            "B. Un coût élevé.",
            "C. Une longue période de transition.",
            "D. Une double saisie permanente."
        ],
        answer: "A",
        explanation: "La conversion directe remplace immédiatement l’ancien système, ce qui augmente le risque en cas de problème."
    },
    {
        id: 79,
        question: "Le fonctionnement en parallèle consiste à :",
        options: [
            "A. Supprimer immédiatement l’ancien système.",
            "B. Tester uniquement un module.",
            "C. Utiliser simultanément l’ancien et le nouveau système.",
            "D. Déployer progressivement par département."
        ],
        answer: "C",
        explanation: "La conversion parallèle implique l’exécution simultanée des deux systèmes pour réduire les risques."
    },
    {
        id: 80,
        question: "La conversion par étapes signifie :",
        options: [
            "A. Déploiement progressif par modules.",
            "B. Remplacement complet immédiat.",
            "C. Utilisation limitée dans une région.",
            "D. Abandon du système après test."
        ],
        answer: "A",
        explanation: "La conversion par étapes implémente le système module par module."
    },
    {
        id: 81,
        question: "La maintenance adaptative vise à :",
        options: [
            "A. Corriger des erreurs.",
            "B. Améliorer les performances.",
            "C. Adapter le système à un nouvel environnement.",
            "D. Supprimer des fonctionnalités."
        ],
        answer: "C",
        explanation: "La maintenance adaptative modifie le système pour l’adapter à de nouveaux besoins ou environnements."
    },
    {
        id: 82,
        question: "La maintenance corrective sert à :",
        options: [
            "A. Ajouter de nouvelles fonctions.",
            "B. Corriger des défauts détectés.",
            "C. Améliorer l’interface utilisateur.",
            "D. Optimiser la vitesse."
        ],
        answer: "B",
        explanation: "La maintenance corrective consiste à corriger des erreurs ou dysfonctionnements."
    },
    {
        id: 83,
        question: "La maintenance perfective concerne :",
        options: [
            "A. L’élimination des virus.",
            "B. L’adaptation légale.",
            "C. L’amélioration des performances ou fonctionnalités.",
            "D. La sauvegarde des données."
        ],
        answer: "C",
        explanation: "La maintenance perfective améliore les performances ou ajoute des fonctionnalités."
    },
    {
        id: 84,
        question: "La phase d’analyse vise principalement à :",
        options: [
            "A. Programmer le système.",
            "B. Identifier et définir les besoins.",
            "C. Installer le matériel.",
            "D. Former les utilisateurs."
        ],
        answer: "B",
        explanation: "L’analyse consiste à comprendre et documenter les besoins du système."
    },
    {
        id: 85,
        question: "Un diagramme de flux de données (DFD) sert à :",
        options: [
            "A. Décrire le matériel utilisé.",
            "B. Montrer la structure organisationnelle.",
            "C. Illustrer le flux d’informations.",
            "D. Programmer en langage machine."
        ],
        answer: "C",
        explanation: "Le DFD représente les flux d’informations entre processus, données et entités externes."
    },
    {
        id: 86,
        question: "La faisabilité économique évalue :",
        options: [
            "A. Les compétences techniques.",
            "B. Les impacts sociaux.",
            "C. Le rapport coûts-bénéfices.",
            "D. La conformité légale."
        ],
        answer: "C",
        explanation: "La faisabilité économique compare les coûts du projet aux bénéfices attendus."
    },
    {
        id: 87,
        question: "La faisabilité technique vérifie :",
        options: [
            "A. L’acceptation des utilisateurs.",
            "B. La disponibilité des technologies nécessaires.",
            "C. La rentabilité.",
            "D. La conformité aux lois."
        ],
        answer: "B",
        explanation: "La faisabilité technique analyse si les technologies et compétences nécessaires sont disponibles."
    },
    {
        id: 88,
        question: "La faisabilité organisationnelle concerne :",
        options: [
            "A. Les performances réseau.",
            "B. L’architecture logicielle.",
            "C. L’acceptation par les utilisateurs et la direction.",
            "D. Le budget matériel."
        ],
        answer: "C",
        explanation: "Elle évalue l’adhésion et l’impact organisationnel du nouveau système."
    },
    {
        id: 89,
        question: "La documentation système est importante car elle :",
        options: [
            "A. Remplace les tests.",
            "B. Facilite la maintenance future.",
            "C. Élimine les erreurs.",
            "D. Réduit les coûts matériels."
        ],
        answer: "B",
        explanation: "Une documentation claire facilite la maintenance et les futures modifications."
    },
    {
        id: 90,
        question: "Un système d’information réussi doit :",
        options: [
            "A. Être le plus complexe possible.",
            "B. Minimiser les coûts uniquement.",
            "C. Répondre aux besoins des utilisateurs.",
            "D. Être développé rapidement."
        ],
        answer: "C",
        explanation: "Le succès d’un système repose sur sa capacité à répondre efficacement aux besoins des utilisateurs."
    },
    {
        id: 91,
        question: "L’implication des utilisateurs est essentielle pour :",
        options: [
            "A. Réduire la documentation.",
            "B. Accélérer la programmation.",
            "C. Garantir l’acceptation du système.",
            "D. Éliminer les tests."
        ],
        answer: "C",
        explanation: "La participation des utilisateurs favorise l’acceptation et l’adéquation aux besoins réels."
    },
    {
        id: 92,
        question: "Un prototype évolutif :",
        options: [
            "A. Est jeté après test.",
            "B. Devient progressivement le système final.",
            "C. Sert uniquement à la formation.",
            "D. Remplace la maintenance."
        ],
        answer: "B",
        explanation: "Un prototype évolutif est continuellement amélioré jusqu’à devenir le système final."
    },
    {
        id: 93,
        question: "Un prototype jetable est :",
        options: [
            "A. Transformé en système final.",
            "B. Utilisé uniquement en production.",
            "C. Abandonné après validation des besoins.",
            "D. Maintenu en parallèle."
        ],
        answer: "C",
        explanation: "Un prototype jetable sert à clarifier les besoins puis est abandonné."
    },
    {
        id: 94,
        question: "La gestion de projet vise à :",
        options: [
            "A. Éliminer tous les risques.",
            "B. Contrôler le temps, les coûts et la qualité.",
            "C. Supprimer la maintenance.",
            "D. Automatiser la programmation."
        ],
        answer: "B",
        explanation: "La gestion de projet supervise délais, coûts et qualité pour assurer le succès."
    },
    {
        id: 95,
        question: "Un diagramme de Gantt est utilisé pour :",
        options: [
            "A. Programmer en langage C.",
            "B. Visualiser le calendrier du projet.",
            "C. Tester le système.",
            "D. Concevoir la base de données."
        ],
        answer: "B",
        explanation: "Le diagramme de Gantt permet de planifier et suivre les tâches dans le temps."
    },
    {
        id: 96,
        question: "Le succès d’un projet informatique dépend principalement :",
        options: [
            "A. De la technologie uniquement.",
            "B. Du budget uniquement.",
            "C. De la combinaison technologie, personnes et processus.",
            "D. De la rapidité de développement."
        ],
        answer: "C",
        explanation: "Le succès repose sur l’équilibre entre technologie, ressources humaines et processus organisationnels."
    }

];
