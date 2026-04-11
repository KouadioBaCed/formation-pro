export const quizQuestions = [
    {
        "id": 1,
        "question": "La séparation des tâches est principalement un contrôle :",
        "options": [
            "A. Détectif.",
            "B. Correctif.",
            "C. Préventif.",
            "D. Compensatoire."
        ],
        "answer": "C",
        "explanation": "La séparation des tâches est un contrôle préventif visant à réduire les risques de fraude ou d’erreur."
    },
    {
        "id": 2,
        "question": "Un grand centre de traitement de données a des goulots d'étranglement de traitement aux heures de pointe de traitement par lots. Lorsqu'un auditeur interne enquête sur ce problème, sur quels contrôles doit-il se concentrer en premier ?",
        "options": [
            "A. Console logs.",
            "B. Procédures de sauvegarde et de redémarrage.",
            "C. Planification des tâches.",
            "D. Documentation du programme."
        ],
        "answer": "C",
        "explanation": "Le contrôle de l'ordonnancement des tâches est essentiel pour optimiser l'utilisation des ressources informatiques et devrait donner la meilleure indication initiale de la nature du problème."
    },
    {
        "id": 3,
        "question": "Lors de l'évaluation des procédures de contrôle de l'accès et de l'utilisation d'un SGBD supportant des applications utilisateurs, quel point est particulièrement préoccupant pour l'auditeur ?",
        "options": [
            "A. Les utilisateurs finaux font approuver leurs applications en lecture seule avant d'accéder à la base de données.",
            "B. Des contrôles de mise à jour de la simultanéité sont en place.",
            "C. Les applications sont développées et testées sur des ordinateurs personnels avant d'être portées sur l'ordinateur central.",
            "D. Un modèle de base de données relationnelle est adopté pour permettre plusieurs utilisateurs simultanément."
        ],
        "answer": "B",
        "explanation": "Les contrôles de concomitance gèrent les situations où deux utilisateurs ou plus tentent d'accéder simultanément à une base de données, protégeant ainsi l'intégrité des données."
    },
    {
        "id": 4,
        "question": "Les objectifs de contrôle d'application n'incluent normalement pas l'assurance que :",
        "options": [
            "A. Les transactions autorisées sont entièrement traitées une seule fois.",
            "B. Les données de transaction sont complètes et exactes.",
            "C. Les procédures d'examen et d'approbation des nouveaux systèmes sont établies et respectées.",
            "D. Les résultats du traitement sont reçus par l'utilisateur prévu."
        ],
        "answer": "C",
        "explanation": "Les procédures d'examen et d'approbation des nouveaux systèmes font partie des contrôles généraux et non des contrôles d'application."
    },
    {
        "id": 5,
        "question": "La mise en page d'un écran de saisie imitant un formulaire imprimé est un exemple de :",
        "options": [
            "A. Vérifications du format.",
            "B. Écriture pour mémoire.",
            "C. Préformatage.",
            "D. Contrôles d'intégralité."
        ],
        "answer": "C",
        "explanation": "Le préformatage aide l'opérateur à saisir les données dans les bons champs en configurant l'écran pour imiter le formulaire imprimé."
    },
    {
        "id": 6,
        "question": "Le commis à la saisie de données ne trouve pas le nom du client lors de la saisie de la commande. Il s'agit d'un exemple de :",
        "options": [
            "A. Contrôle de la simultanéité.",
            "B. Contrôles de validité.",
            "C. Vérifications de la portée.",
            "D. Contrôles de séquence."
        ],
        "answer": "B",
        "explanation": "Les contrôles de validité comparent les données saisies avec une table des valeurs valides. L'absence du nom du client indique que ce contrôle a échoué."
    },
    {
        "id": 7,
        "question": "Une écriture de journal de paiement est rejetée car la somme des débits et crédits n'est pas égale à zéro. Quel contrôle a été appliqué ?",
        "options": [
            "A. Zero balance checks.",
            "B. Contrôles arithmétiques.",
            "C. Chiffres de contrôle.",
            "D. Intégrité de la clé."
        ],
        "answer": "A",
        "explanation": "Les contrôles de solde nul rejettent toute transaction ou lot de transactions dont le total des débits et crédits n'est pas égal à zéro."
    },
    {
        "id": 8,
        "question": "Le contrôle connu sous le nom de vérification en boucle fermée est le plus utile dans les cas suivants :",
        "options": [
            "A. Assurer la transmission précise des données des dossiers.",
            "B. Suivi du nombre de chèques de paie traités.",
            "C. Contrôles des opérations réseau.",
            "D. Mise à jour et vérification des adresses des clients."
        ],
        "answer": "D",
        "explanation": "La vérification en boucle fermée consiste à afficher les entrées de l'utilisateur pour qu'il puisse les vérifier, comme lors de la mise à jour d'adresses."
    },
    {
        "id": 9,
        "question": "Toutes les affirmations suivantes sont correctes concernant les grandes données, à l'exception de :",
        "options": [
            "A. Les grandes données incluent des données structurées, semi-structurées et non structurées.",
            "B. Les informations sont converties de données à haute densité en données à faible densité.",
            "C. Elles sont souvent caractérisées par les 4 Vs : volume, variété, vitesse et véracité.",
            "D. Elles sont traitées avec des outils analytiques et algorithmiques pour révéler des informations significatives."
        ],
        "answer": "B",
        "explanation": "Les données collectées sont converties de faible densité à haute densité, pas l'inverse."
    },
    {
        "id": 10,
        "question": "Lequel des énoncés décrit le mieux les données non structurées ?",
        "options": [
            "A. Données avec un haut niveau d'organisation.",
            "B. Données stockées avec des marqueurs hiérarchiques.",
            "C. Informations non organisées d'une manière prédéfinie (faits, dates, chiffres, images).",
            "D. Conforme aux modèles de données relationnels."
        ],
        "answer": "C",
        "explanation": "Les données non structurées ne suivent pas une organisation prédéfinie et incluent des éléments tels que texte ou images lourdes."
    },
    {
        "id": 11,
        "question": "Toutes les caractéristiques suivantes sont typiques des grandes données, à l'exception de :",
        "options": [
            "A. Taille",
            "B. Mélange",
            "C. Vitesse",
            "D. Uniformité"
        ],
        "answer": "D",
        "explanation": "Les grandes données sont caractérisées par volume, variété, vitesse et véracité. L'uniformité n'en fait pas partie."
    },
    {
        "id": 12,
        "question": "Parmi les technologies suivantes, lesquelles sont des technologies clés des grandes données ?",
        "options": [
            "I. Analyse en mémoire",
            "II. Exploration de données",
            "III. Exploration de texte",
            "A. I seulement",
            "B. II seulement",
            "C. I et III seulement",
            "D. I, II et III"
        ],
        "answer": "D",
        "explanation": "Les technologies clés des grandes données incluent l'analyse en mémoire, l'exploration de données et l'exploration de texte."
    },
    {
        "id": 13,
        "question": "Quelle affirmation est correcte concernant l'analyse en mémoire ?",
        "options": [
            "A. Cadre logiciel open source pour stocker de grandes données sur clusters.",
            "B. Analyse des données en mémoire système au lieu des disques durs.",
            "C. Utilisation d'algorithmes et machine learning pour prédire des résultats futurs.",
            "D. Analyse de grandes quantités de données pour découvrir des tendances."
        ],
        "answer": "B",
        "explanation": "L'analyse en mémoire traite les données directement depuis la mémoire du système, accélérant l'analyse."
    },
    {
        "id": 14,
        "question": "Toutes les affirmations suivantes sont exactes concernant les grandes données, à l'exception de :",
        "options": [
            "A. Les grandes données doivent être transformées en Smart Data pour être utiles.",
            "B. Elles utilisent des statistiques et concepts inductifs pour déduire des lois et prévoir des comportements.",
            "C. Les outils d'analyse complètent les pièces manquantes par fusion de données.",
            "D. Elles concernent uniquement des données structurées."
        ],
        "answer": "D",
        "explanation": "Les grandes données incluent des données structurées, semi-structurées et non structurées."
    },
    {
        "id": 15,
        "question": "Concernant l'utilisation du cloud pour les grands projets de données, quelle affirmation est incorrecte ?",
        "options": [
            "A. Les entreprises hésitent à investir dans des infrastructures qu'elles utilisent occasionnellement.",
            "B. Les entreprises ne paient que pour le stockage et calcul réellement utilisé.",
            "C. Un fournisseur de cloud peut stocker des pétaoctets et mettre à l'échelle des milliers de serveurs juste pour le projet.",
            "D. Les analystes n'ont pas besoin de comprendre en détail les données ni savoir quelles réponses rechercher."
        ],
        "answer": "D",
        "explanation": "Les analystes doivent comprendre les données disponibles et savoir quelles réponses rechercher pour que les données aient de la valeur."
    },
    {
        "id": 16,
        "question": "Les mesures quantitatives démontrant les progrès d'une organisation par rapport à ses objectifs sont appelées :",
        "options": [
            "A. Normalisation des données",
            "B. Valeur basée sur la performance",
            "C. Visualisation des données",
            "D. Indicateurs de performance"
        ],
        "answer": "D",
        "explanation": "Les indicateurs de performance clés (KPI) sont des mesures quantifiables utilisées pour suivre les progrès vers les objectifs."
    },
    {
        "id": 17,
        "question": "Quelle méthode d'analyse de données aide une organisation à déterminer ce qu'elle doit faire pour réaliser son avenir ?",
        "options": [
            "A. Analyse prédictive",
            "B. Analyse descriptive",
            "C. Détection d'anomalies",
            "D. Analyse de réseau"
        ],
        "answer": "B",
        "explanation": "L'analyse prescriptive répond à la question de ce qu'il faut faire. L'analyse descriptive est utilisée pour rapporter les résultats réels."
    },
    {
        "id": 18,
        "question": "Quelle méthode d'analyse de données un auditeur doit-il utiliser pour rendre compte des résultats réels ?",
        "options": [
            "A. Analyse descriptive",
            "B. Découverte de l'information",
            "C. Analyse de texte",
            "D. Analyse diagnostique"
        ],
        "answer": "A",
        "explanation": "L'analyse descriptive se concentre sur la communication des résultats réels et est la méthode la plus utilisée."
    },
    {
        "id": 19,
        "question": "Un système de traitement par lots présente des goulots d'étranglement. Quelle procédure permet d'optimiser l'utilisation des ressources informatiques ?",
        "options": [
            "A. Vérification des journaux de console",
            "B. Procédures de sauvegarde et redémarrage",
            "C. Planification des tâches",
            "D. Documentation du programme"
        ],
        "answer": "C",
        "explanation": "L’ordonnancement des tâches de traitement assure l’optimisation de l’utilisation des ressources et permet de détecter les problèmes de goulot d’étranglement."
    },
    {
        "id": 20,
        "question": "Quel contrôle est essentiel pour protéger l'intégrité des données dans un SGBD lorsque plusieurs utilisateurs mettent à jour la base de données ?",
        "options": [
            "A. Approbation en lecture seule des applications",
            "B. Contrôles de simultanéité",
            "C. Test des applications sur ordinateur personnel",
            "D. Utilisation d'une base de données relationnelle"
        ],
        "answer": "B",
        "explanation": "Les contrôles de simultanéité gèrent l'accès simultané et protègent l'intégrité des données."
    },
    {
        "id": 21,
        "question": "Lequel des objectifs suivants n'est pas celui des contrôles d'application ?",
        "options": [
            "A. Traitement complet des transactions autorisées",
            "B. Exactitude et intégralité des données de transaction",
            "C. Respect des procédures d'examen et d'approbation des nouveaux systèmes",
            "D. Réception des résultats par l'utilisateur prévu"
        ],
        "answer": "C",
        "explanation": "Les procédures d'examen et d'approbation des systèmes font partie des contrôles généraux, pas des contrôles d'application."
    },
    {
        "id": 22,
        "question": "La mise en page d'écran de saisie imitant un formulaire papier est un exemple de :",
        "options": [
            "A. Vérification du format",
            "B. Écriture pour mémoire",
            "C. Préformatage",
            "D. Contrôles d'intégralité"
        ],
        "answer": "C",
        "explanation": "Le préformatage aide l'opérateur à saisir les données correctement en reproduisant la disposition du formulaire papier."
    },
    {
        "id": 23,
        "question": "Le commis ne trouve pas le nom du client lors de la saisie. Il s'agit d'un contrôle :",
        "options": [
            "A. De simultanéité",
            "B. De validité",
            "C. De portée",
            "D. De séquence"
        ],
        "answer": "B",
        "explanation": "Le contrôle de validité compare les données saisies avec une liste de valeurs valides. L'absence du client indique l'échec du contrôle."
    },
    {
        "id": 24,
        "question": "Une écriture de journal rejetée car les débits et crédits ne s'équilibrent pas utilise quel contrôle ?",
        "options": [
            "A. Zero balance checks",
            "B. Contrôles arithmétiques",
            "C. Chiffres de contrôle",
            "D. Intégrité de la clé"
        ],
        "answer": "A",
        "explanation": "Le contrôle de solde nul rejette toute transaction dont le total des débits et crédits n'est pas égal à zéro."
    },
    {
        "id": 25,
        "question": "La vérification en boucle fermée est utile pour :",
        "options": [
            "A. Assurer la transmission précise des données",
            "B. Suivi du nombre de chèques traités",
            "C. Contrôles réseau",
            "D. Mise à jour et vérification des adresses clients"
        ],
        "answer": "D",
        "explanation": "La vérification en boucle fermée consiste à renvoyer les données saisies à l'utilisateur pour confirmation, comme lors de la mise à jour d'adresses."
    },
    {
        "id": 26,
        "question": "Les grandes données sont caractérisées par :",
        "options": [
            "A. Volume, variété, vitesse, véracité",
            "B. Volume, vitesse, uniformité, véracité",
            "C. Taille, format, vitesse, exactitude",
            "D. Taille, uniformité, vitesse, véracité"
        ],
        "answer": "A",
        "explanation": "Les grandes données sont caractérisées par les 4 Vs : volume, variété, vitesse et véracité."
    },
    {
        "id": 27,
        "question": "Lequel des énoncés suivants sur les grandes données est incorrect ?",
        "options": [
            "A. Incluent des données structurées, semi-structurées et non structurées",
            "B. Incluent des données sociales, machine, vidéo et voix converties de haute densité à faible densité",
            "C. Utilisent les 4 Vs",
            "D. Traitées avec des outils analytiques pour révéler des informations"
        ],
        "answer": "B",
        "explanation": "Les données sont converties de faible densité à haute densité, donc l'affirmation est incorrecte."
    },
    {
        "id": 28,
        "question": "Les données non structurées sont :",
        "options": [
            "A. Hautement organisées",
            "B. Stockées avec des marqueurs hiérarchiques",
            "C. Non organisées d'une manière prédéfinie",
            "D. Conformes aux bases relationnelles"
        ],
        "answer": "C",
        "explanation": "Les données non structurées ne suivent pas de format prédéfini, comme texte ou images."
    },
    {
        "id": 29,
        "question": "Toutes les caractéristiques suivantes sont typiques des grandes données sauf :",
        "options": [
            "A. Taille",
            "B. Mélange",
            "C. Vitesse",
            "D. Uniformité"
        ],
        "answer": "D",
        "explanation": "L'uniformité n'est pas une caractéristique des grandes données."
    },
    {
        "id": 30,
        "question": "Technologies clés des grandes données incluent :",
        "options": [
            "I. Analyse en mémoire",
            "II. Exploration de données",
            "III. Exploration de texte",
            "A. I seulement",
            "B. II seulement",
            "C. I et III seulement",
            "D. I, II et III"
        ],
        "answer": "D",
        "explanation": "Les technologies clés incluent l'analyse en mémoire, l'exploration de données et l'exploration de texte."
    },
    {
        "id": 31,
        "question": "Analyse en mémoire signifie :",
        "options": [
            "A. Cadre open source pour clusters",
            "B. Analyse depuis la mémoire système au lieu des disques",
            "C. Utilisation de l'IA pour prédiction",
            "D. Analyse de grandes données pour tendances"
        ],
        "answer": "B",
        "explanation": "L'analyse en mémoire traite les données directement depuis la RAM pour accélérer le traitement."
    },
    {
        "id": 32,
        "question": "L'énoncé incorrect sur les grandes données est :",
        "options": [
            "A. Doivent être transformées en Smart Data",
            "B. Utilisent des concepts inductifs pour découvrir relations et prévisions",
            "C. Fusionnent les données manquantes pour cohérence",
            "D. Concernent uniquement les données structurées"
        ],
        "answer": "D",
        "explanation": "Les grandes données incluent structurées, semi-structurées et non structurées."
    },
    {
        "id": 33,
        "question": "Concernant le cloud pour les projets de données, l'énoncé incorrect est :",
        "options": [
            "A. Les entreprises hésitent à investir dans des infrastructures peu utilisées",
            "B. Elles paient seulement pour l'utilisation réelle",
            "C. Les clouds peuvent stocker des pétaoctets et scaler temporairement",
            "D. Les analystes n'ont pas besoin de comprendre les données"
        ],
        "answer": "D",
        "explanation": "Les analystes doivent connaître les données et savoir quelles réponses chercher."
    },
    {
        "id": 34,
        "question": "Les mesures quantitatives pour suivre les objectifs d'une organisation sont :",
        "options": [
            "A. Normalisation des données",
            "B. Valeur basée sur la performance",
            "C. Visualisation",
            "D. Indicateurs de performance"
        ],
        "answer": "D",
        "explanation": "Les KPI permettent de mesurer les progrès vers les objectifs organisationnels."
    },
    {
        "id": 35,
        "question": "Analyse de données pour déterminer ce qu'il faut faire pour atteindre l'avenir :",
        "options": [
            "A. Analyse prédictive",
            "B. Analyse descriptive",
            "C. Détection d'anomalies",
            "D. Analyse réseau"
        ],
        "answer": "B",
        "explanation": "L'analyse prescriptive répond à ce que l'organisation doit faire; l'analyse descriptive rapporte les résultats réels."
    },
    {
        "id": 36,
        "question": "Méthode d'analyse de données pour rendre compte des résultats réels :",
        "options": [
            "A. Analyse descriptive",
            "B. Découverte de l'information",
            "C. Analyse texte",
            "D. Analyse diagnostique"
        ],
        "answer": "A",
        "explanation": "L'analyse descriptive se concentre sur les résultats réels et est la plus utilisée."
    },
    {
        "id": 37,
        "question": "La séparation des tâches est principalement un contrôle :",
        "options": [
            "A. Détectif",
            "B. Correctif",
            "C. Préventif",
            "D. Compensatoire"
        ],
        "answer": "C",
        "explanation": "La séparation des tâches est un contrôle préventif visant à réduire les risques de fraude ou d’erreur."
    },
    {
        "id": 38,
        "question": "Quels contrôles initiaux un auditeur examine-t-il lorsqu'un centre de traitement a des goulots d'étranglement aux heures de pointe ?",
        "options": [
            "A. Console logs",
            "B. Procédures de sauvegarde et de redémarrage",
            "C. Planification des tâches",
            "D. Documentation du programme"
        ],
        "answer": "C",
        "explanation": "Le contrôle de l'ordonnancement des tâches de traitement est essentiel pour optimiser l'utilisation des ressources et identifier la cause du goulot d'étranglement."
    },
    {
        "id": 39,
        "question": "En SGBD, quel contrôle protège l'intégrité des données lorsque plusieurs utilisateurs mettent à jour la base de données simultanément ?",
        "options": [
            "A. Approbation des applications en lecture seule",
            "B. Contrôles de mise à jour de la simultanéité",
            "C. Développement sur ordinateur personnel",
            "D. Modèle relationnel de la base"
        ],
        "answer": "B",
        "explanation": "Les contrôles de simultanéité gèrent les accès simultanés afin de protéger l'intégrité des données."
    },
    {
        "id": 40,
        "question": "Quel objectif n'est pas celui des contrôles d'application ?",
        "options": [
            "A. Traiter les transactions autorisées une seule fois",
            "B. Garantir l'exactitude et l'intégralité des données",
            "C. Assurer l'examen et l'approbation des nouveaux systèmes",
            "D. Recevoir les résultats par l'utilisateur prévu"
        ],
        "answer": "C",
        "explanation": "Les procédures d'examen et d'approbation des nouveaux systèmes relèvent des contrôles généraux, pas des contrôles d'application."
    },
    {
        "id": 41,
        "question": "La mise en page de saisie imitant un formulaire papier est un exemple de :",
        "options": [
            "A. Vérification du format",
            "B. Écriture pour mémoire",
            "C. Préformatage",
            "D. Contrôles d'intégralité"
        ],
        "answer": "C",
        "explanation": "Le préformatage facilite la saisie correcte en imitant la disposition du formulaire papier."
    },
    {
        "id": 42,
        "question": "Le commis ne trouve pas le nom du client lors de la saisie. Quel contrôle est utilisé ?",
        "options": [
            "A. Contrôle de simultanéité",
            "B. Contrôle de validité",
            "C. Contrôle de portée",
            "D. Contrôle de séquence"
        ],
        "answer": "B",
        "explanation": "Les contrôles de validité comparent les données saisies à une table de valeurs valides."
    },
    {
        "id": 43,
        "question": "Une écriture de journal rejetée car les débits et crédits ne s'équilibrent pas est un exemple de :",
        "options": [
            "A. Zero balance checks",
            "B. Contrôles arithmétiques",
            "C. Chiffres de contrôle",
            "D. Intégrité de la clé"
        ],
        "answer": "A",
        "explanation": "Les contrôles de solde nul rejettent les transactions où la somme des débits et crédits n'est pas égale à zéro."
    },
    {
        "id": 44,
        "question": "Le contrôle en boucle fermée est utilisé pour :",
        "options": [
            "A. Assurer la transmission exacte des données",
            "B. Suivi du nombre de chèques traités",
            "C. Contrôles des opérations réseau",
            "D. Mise à jour et vérification des adresses clients"
        ],
        "answer": "D",
        "explanation": "La vérification en boucle fermée renvoie les données à l'utilisateur pour confirmation, comme pour les adresses clients."
    },
    {
        "id": 45,
        "question": "Les grandes données sont souvent caractérisées par :",
        "options": [
            "A. Volume, variété, vitesse, véracité",
            "B. Volume, vitesse, uniformité, véracité",
            "C. Taille, format, vitesse, exactitude",
            "D. Taille, uniformité, vitesse, véracité"
        ],
        "answer": "A",
        "explanation": "Les 4 Vs des grandes données sont le volume, la variété, la vitesse et la véracité."
    },
    {
        "id": 46,
        "question": "Lequel des énoncés suivants sur les grandes données est incorrect ?",
        "options": [
            "A. Comprennent données structurées, semi-structurées et non structurées",
            "B. Incluent données sociales, machine, vidéo et voix converties de haute densité à faible densité",
            "C. Caractérisées par les 4 Vs",
            "D. Traitées avec des outils analytiques pour révéler informations"
        ],
        "answer": "B",
        "explanation": "Les données sont converties de faible densité à haute densité, donc l'énoncé est incorrect."
    },
    {
        "id": 47,
        "question": "Les données non structurées :",
        "options": [
            "A. Hautement organisées",
            "B. Stockées avec marqueurs hiérarchiques",
            "C. Non organisées d'une manière prédéfinie",
            "D. Conformes aux bases relationnelles"
        ],
        "answer": "C",
        "explanation": "Les données non structurées n'ont pas de format prédéfini, par exemple des textes ou images."
    },
    {
        "id": 48,
        "question": "Toutes les caractéristiques suivantes sont typiques des grandes données sauf :",
        "options": [
            "A. Taille",
            "B. Mélange",
            "C. Vitesse",
            "D. Uniformité"
        ],
        "answer": "D",
        "explanation": "L'uniformité n'est pas une caractéristique des grandes données."
    },
    {
        "id": 49,
        "question": "Technologies clés des grandes données :",
        "options": [
            "I. Analyse en mémoire",
            "II. Exploration de données",
            "III. Exploration de texte",
            "A. I seulement",
            "B. II seulement",
            "C. I et III seulement",
            "D. I, II et III"
        ],
        "answer": "D",
        "explanation": "Les technologies clés incluent l'analyse en mémoire, l'exploration de données et l'exploration de texte."
    },
    {
        "id": 50,
        "question": "Analyse en mémoire signifie :",
        "options": [
            "A. Cadre open source pour clusters",
            "B. Analyse depuis la mémoire système",
            "C. Utilisation d'IA pour prédiction",
            "D. Analyse de grandes données pour tendances"
        ],
        "answer": "B",
        "explanation": "Elle consiste à traiter les données directement depuis la RAM pour accélérer les traitements."
    },
    {
        "id": 51,
        "question": "L'énoncé incorrect sur les grandes données est :",
        "options": [
            "A. Doivent être transformées en Smart Data",
            "B. Utilisent concepts inductifs pour découvrir relations et prévisions",
            "C. Fusionnent les données manquantes pour cohérence",
            "D. Concernent uniquement les données structurées"
        ],
        "answer": "D",
        "explanation": "Les grandes données incluent des données structurées, semi-structurées et non structurées."
    },
    {
        "id": 52,
        "question": "Concernant le cloud computing pour grandes données, l'énoncé incorrect est :",
        "options": [
            "A. Entreprises hésitent à investir dans infrastructures peu utilisées",
            "B. Elles paient seulement pour le stockage et calcul utilisé",
            "C. Les clouds peuvent stocker pétaoctets et scaler temporairement",
            "D. Les analystes n'ont pas besoin de comprendre les données"
        ],
        "answer": "D",
        "explanation": "Les analystes doivent comprendre les données et savoir quelles réponses rechercher."
    },
    {
        "id": 53,
        "question": "Mesures quantitatives pour suivre les objectifs d'une organisation :",
        "options": [
            "A. Normalisation des données",
            "B. Valeur basée sur la performance",
            "C. Visualisation",
            "D. Indicateurs de performance"
        ],
        "answer": "D",
        "explanation": "Les KPI permettent de mesurer les progrès vers les objectifs de l'organisation."
    },
    {
        "id": 54,
        "question": "Analyse de données pour déterminer ce qu'il faut faire pour atteindre les objectifs futurs :",
        "options": [
            "A. Analyse prédictive",
            "B. Analyse descriptive",
            "C. Détection d'anomalies",
            "D. Analyse réseau"
        ],
        "answer": "B",
        "explanation": "L'analyse prescriptive répond à ce qu'il faut faire; l'analyse descriptive rapporte les résultats réels."
    },
    {
        "id": 55,
        "question": "Méthode d'analyse pour rendre compte des résultats réels :",
        "options": [
            "A. Analyse descriptive",
            "B. Découverte de l'information",
            "C. Analyse texte",
            "D. Analyse diagnostique"
        ],
        "answer": "A",
        "explanation": "L'analyse descriptive est utilisée pour communiquer les résultats réels."
    },
    {
        "id": 56,
        "question": "Quel contrôle de traitement permet de gérer plusieurs utilisateurs accédant simultanément à une base de données ?",
        "options": [
            "A. Contrôle de séquence",
            "B. Contrôle de validité",
            "C. Contrôle de simultanéité",
            "D. Contrôle de format"
        ],
        "answer": "C",
        "explanation": "Les contrôles de simultanéité protègent l'intégrité des données lorsque plusieurs utilisateurs mettent à jour ou consultent la même base de données."
    },
    {
        "id": 57,
        "question": "Quels contrôles assurent que les transactions autorisées sont traitées une seule fois et complètement ?",
        "options": [
            "A. Contrôles de l'application",
            "B. Contrôles d'entrée",
            "C. Contrôles généraux",
            "D. Contrôles physiques"
        ],
        "answer": "A",
        "explanation": "Les contrôles d'application garantissent que les transactions sont traitées intégralement et une seule fois."
    },
    {
        "id": 58,
        "question": "Quel contrôle permet de vérifier que les champs obligatoires ne sont pas laissés vides ?",
        "options": [
            "A. Contrôle de validité",
            "B. Contrôle d'intégrité",
            "C. Contrôle de séquence",
            "D. Contrôle de format"
        ],
        "answer": "A",
        "explanation": "Les contrôles de validité comparent les données saisies à des valeurs valides ou exigées."
    },
    {
        "id": 59,
        "question": "Quel contrôle de saisie en ligne rejette une transaction dont la somme des débits et crédits n'est pas égale à zéro ?",
        "options": [
            "A. Contrôle arithmétique",
            "B. Zero balance checks",
            "C. Chiffres de contrôle",
            "D. Intégrité de la clé"
        ],
        "answer": "B",
        "explanation": "Le contrôle de solde nul rejette toute transaction où les débits et crédits ne sont pas équilibrés."
    },
    {
        "id": 60,
        "question": "Quel type de contrôle assure que les entrées utilisateur sont traitées et renvoyées pour confirmation ?",
        "options": [
            "A. Contrôle en boucle fermée",
            "B. Contrôle de séquence",
            "C. Contrôle de simultanéité",
            "D. Contrôle de validité"
        ],
        "answer": "A",
        "explanation": "La vérification en boucle fermée renvoie les données saisies pour confirmation, améliorant l'exactitude."
    },
    {
        "id": 61,
        "question": "Les grandes données sont caractérisées par les 4 Vs, sauf :",
        "options": [
            "A. Volume",
            "B. Uniformité",
            "C. Vitesse",
            "D. Véracité"
        ],
        "answer": "B",
        "explanation": "L'uniformité n'est pas une caractéristique des grandes données, contrairement au volume, à la vitesse et à la véracité."
    },
    {
        "id": 62,
        "question": "Quelle affirmation sur les grandes données est incorrecte ?",
        "options": [
            "A. Comprennent données structurées, semi-structurées et non structurées",
            "B. Incluent données sociales, machines, vidéos et voix converties de haute densité à faible densité",
            "C. Caractérisées par les 4 Vs",
            "D. Traitées avec des outils analytiques pour révéler des informations"
        ],
        "answer": "B",
        "explanation": "Les grandes données sont converties de faible densité à haute densité, pas l’inverse."
    },
    {
        "id": 63,
        "question": "Les données non structurées sont :",
        "options": [
            "A. Hautement organisées",
            "B. Stockées avec marqueurs hiérarchiques",
            "C. Non organisées d'une manière prédéfinie",
            "D. Conformes aux bases relationnelles"
        ],
        "answer": "C",
        "explanation": "Elles ne suivent pas de structure prédéfinie et incluent texte, images, vidéos, etc."
    },
    {
        "id": 64,
        "question": "Quelles sont les technologies clés des grandes données ?",
        "options": [
            "I. Analyse en mémoire",
            "II. Exploration de données",
            "III. Exploration de texte",
            "A. I seulement",
            "B. II seulement",
            "C. I et III seulement",
            "D. I, II et III"
        ],
        "answer": "D",
        "explanation": "L'analyse en mémoire, l'exploration de données et l'exploration de texte sont toutes des technologies clés des big data."
    },
    {
        "id": 65,
        "question": "Analyse en mémoire signifie :",
        "options": [
            "A. Cadre open source pour clusters",
            "B. Analyse directement depuis la mémoire système",
            "C. Utilisation d'algorithmes statistiques pour prédiction",
            "D. Analyse de grandes quantités de données pour tendances"
        ],
        "answer": "B",
        "explanation": "Les données sont traitées directement depuis la RAM, ce qui accélère le traitement par rapport aux disques durs."
    },
    {
        "id": 66,
        "question": "Les grandes données doivent être transformées pour produire :",
        "options": [
            "A. Données brutes",
            "B. Smart Data",
            "C. Statistiques basiques",
            "D. Information non analysée"
        ],
        "answer": "B",
        "explanation": "Smart Data est le résultat de l'analyse et de la validation des grandes données pour en extraire une valeur réelle."
    },
    {
        "id": 67,
        "question": "Les analystes de données dans le cloud doivent :",
        "options": [
            "A. Ignorer les détails des données",
            "B. Connaître en détail les données et les résultats attendus",
            "C. Se concentrer uniquement sur les serveurs",
            "D. Ne pas utiliser d'outils analytiques"
        ],
        "answer": "B",
        "explanation": "Pour tirer pleinement parti des données, les analystes doivent comprendre leur contenu et les réponses recherchées."
    },
    {
        "id": 68,
        "question": "Indicateurs quantitatifs mesurant la progression d’une organisation :",
        "options": [
            "A. Normalisation des données",
            "B. Visualisation des données",
            "C. Indicateurs de performance",
            "D. Valeur basée sur la performance"
        ],
        "answer": "C",
        "explanation": "Les KPI sont utilisés pour mesurer les progrès vers les objectifs de l’organisation."
    },
    {
        "id": 69,
        "question": "Méthode d'analyse qui communique les résultats réels :",
        "options": [
            "A. Analyse descriptive",
            "B. Analyse prédictive",
            "C. Détection d'anomalies",
            "D. Analyse réseau"
        ],
        "answer": "A",
        "explanation": "L’analyse descriptive est utilisée pour rapporter ce qui s'est réellement passé."
    },
    {
        "id": 70,
        "question": "Analyse qui prévoit des résultats futurs à partir de données historiques :",
        "options": [
            "A. Analyse descriptive",
            "B. Analyse prédictive",
            "C. Détection d'anomalies",
            "D. Analyse réseau"
        ],
        "answer": "B",
        "explanation": "L’analyse prédictive applique des modèles et des hypothèses pour estimer des résultats futurs."
    },
    {
        "id": 71,
        "question": "Les contrôles d’intégrité des clés servent à :",
        "options": [
            "A. Contrôler les transactions autorisées",
            "B. Identifier les écarts arithmétiques",
            "C. Identifier de façon unique chaque enregistrement",
            "D. Vérifier la validité des données saisies"
        ],
        "answer": "C",
        "explanation": "L’intégrité des clés assure qu’aucune modification ne corrompt l’identification unique des enregistrements."
    },
    {
        "id": 72,
        "question": "Quel contrôle prévient la saisie de caractères incorrects dans un champ spécifique ?",
        "options": [
            "A. Contrôle de format",
            "B. Contrôle de séquence",
            "C. Contrôle de simultanéité",
            "D. Contrôle arithmétique"
        ],
        "answer": "A",
        "explanation": "Le contrôle de format garantit que les données sont du type correct, comme des nombres dans un champ numérique."
    },
    {
        "id": 73,
        "question": "Les procédures de sauvegarde et de redémarrage s’appliquent :",
        "options": [
            "A. Avant les interruptions",
            "B. Après des interruptions anormales",
            "C. Pour planifier les tâches",
            "D. Pour examiner les journaux de la console"
        ],
        "answer": "B",
        "explanation": "Ces procédures sont mises en œuvre après des interruptions imprévues pour restaurer les systèmes."
    },
    {
        "id": 74,
        "question": "Le préformatage des écrans de saisie est un contrôle de type :",
        "options": [
            "A. Contrôle de traitement",
            "B. Contrôle d’entrée en ligne",
            "C. Contrôle général",
            "D. Contrôle physique"
        ],
        "answer": "B",
        "explanation": "Il aide à saisir correctement les données en alignant les champs sur le formulaire imprimé."
    },
    {
        "id": 75,
        "question": "Quel contrôle permet de comparer la saisie d’un utilisateur à une table de valeurs valides ?",
        "options": [
            "A. Contrôle de séquence",
            "B. Contrôle de validité",
            "C. Contrôle de format",
            "D. Contrôle d'intégrité"
        ],
        "answer": "B",
        "explanation": "Les contrôles de validité vérifient que les données entrées appartiennent à des valeurs autorisées."
    },
    {
        "id": 76,
        "question": "Les contrôles de portée (range checks) servent à :",
        "options": [
            "A. Comparer les données à une table de valeurs valides",
            "B. Vérifier que les valeurs sont dans des limites acceptables",
            "C. Assurer l'unicité des enregistrements",
            "D. Vérifier le format des données"
        ],
        "answer": "B",
        "explanation": "Les contrôles de portée comparent la valeur saisie avec des limites connues pour s'assurer qu'elle est acceptable."
    },
    {
        "id": 77,
        "question": "Les contrôles de séquence assurent :",
        "options": [
            "A. L'efficacité du traitement en triant les dossiers sur une clé",
            "B. La validité des données saisies",
            "C. L'intégrité des clés",
            "D. La simultanéité de l'accès aux fichiers"
        ],
        "answer": "A",
        "explanation": "Les contrôles de séquence vérifient que les dossiers sont correctement triés pour optimiser le traitement."
    },
    {
        "id": 78,
        "question": "Les chiffres de contrôle sont utilisés pour :",
        "options": [
            "A. Rejeter des transactions non équilibrées",
            "B. Vérifier l'exactitude des données grâce à un code supplémentaire",
            "C. Assurer l'intégrité des clés",
            "D. Planifier les tâches de traitement"
        ],
        "answer": "B",
        "explanation": "Un chiffre de contrôle est calculé à partir des autres chiffres pour détecter les erreurs de saisie."
    },
    {
        "id": 79,
        "question": "Les journaux de la console sont principalement utilisés pour :",
        "options": [
            "A. Planifier les tâches",
            "B. Identifier les problèmes après coup",
            "C. Assurer l'intégrité des données",
            "D. Prévenir les erreurs de saisie"
        ],
        "answer": "B",
        "explanation": "Ils fournissent des indications sur les problèmes survenus et sont utiles pour le diagnostic."
    },
    {
        "id": 80,
        "question": "Dans un SGBD, la préoccupation principale d’un auditeur concernant l’accès simultané est :",
        "options": [
            "A. Les utilisateurs approuvent leurs applications en lecture seule",
            "B. Les contrôles de mise à jour simultanée",
            "C. Les tests sur ordinateur personnel",
            "D. Le modèle relationnel"
        ],
        "answer": "B",
        "explanation": "Les contrôles de simultanéité protègent l'intégrité des données lorsqu'il y a plusieurs accès concurrents."
    },
    {
        "id": 81,
        "question": "Les objectifs de contrôle d’application n’incluent pas :",
        "options": [
            "A. Que les transactions autorisées sont traitées une seule fois",
            "B. Que les données sont complètes et exactes",
            "C. Que les procédures d’examen des nouveaux systèmes sont respectées",
            "D. Que les résultats sont reçus par l’utilisateur prévu"
        ],
        "answer": "C",
        "explanation": "L’examen et l’approbation des systèmes relèvent des contrôles généraux, pas des contrôles d’application."
    },
    {
        "id": 82,
        "question": "Le contrôle préventif de séparation des tâches vise à :",
        "options": [
            "A. Détecter les fraudes",
            "B. Corriger les erreurs après occurrence",
            "C. Réduire les risques de fraude ou d’erreur avant qu’ils ne se produisent",
            "D. Compenser les faiblesses d'autres contrôles"
        ],
        "answer": "C",
        "explanation": "La séparation des tâches est conçue pour prévenir les fraudes ou erreurs en répartissant les responsabilités."
    },
    {
        "id": 83,
        "question": "Le préformatage de l’écran de saisie facilite :",
        "options": [
            "A. L'écriture en mémoire",
            "B. La saisie correcte des données dans les bons champs",
            "C. Le contrôle d'intégrité",
            "D. Les contrôles arithmétiques"
        ],
        "answer": "B",
        "explanation": "Le préformatage aligne l’écran sur le formulaire imprimé pour aider l’opérateur à saisir correctement les données."
    },
    {
        "id": 84,
        "question": "Zero balance checks vérifient :",
        "options": [
            "A. La validité des champs de saisie",
            "B. Que le total des débits et crédits est nul",
            "C. L’intégrité des clés",
            "D. Le format des données"
        ],
        "answer": "B",
        "explanation": "Ce contrôle rejette les transactions où les débits et crédits ne sont pas équilibrés."
    },
    {
        "id": 85,
        "question": "Vérification en boucle fermée est utilisée pour :",
        "options": [
            "A. Assurer la transmission précise des données",
            "B. Suivi du nombre de chèques traités",
            "C. Contrôles des opérations réseau",
            "D. Mise à jour et vérification des adresses des clients"
        ],
        "answer": "D",
        "explanation": "Les données saisies sont renvoyées à l'utilisateur pour confirmation, typiquement pour les adresses des clients."
    },
    {
        "id": 86,
        "question": "Les grandes données sont souvent caractérisées par :",
        "options": [
            "A. Volume, variété, vitesse, véracité",
            "B. Uniformité, vitesse, volume, véracité",
            "C. Taille, mélange, uniformité, vitesse",
            "D. Volume, uniformité, vitesse, véracité"
        ],
        "answer": "A",
        "explanation": "Les 4 Vs sont le volume, la variété, la vitesse et la véracité."
    },
    {
        "id": 87,
        "question": "L’analyse en mémoire se distingue par :",
        "options": [
            "A. Traitement des données depuis les disques durs",
            "B. Traitement des données directement depuis la mémoire",
            "C. Analyse prédictive",
            "D. Exploration de texte"
        ],
        "answer": "B",
        "explanation": "Les données sont analysées depuis la RAM pour une vitesse accrue."
    },
    {
        "id": 88,
        "question": "L'analyse descriptive est utilisée pour :",
        "options": [
            "A. Prévoir les résultats futurs",
            "B. Identifier des anomalies",
            "C. Communiquer les résultats réels",
            "D. Analyser des réseaux"
        ],
        "answer": "C",
        "explanation": "L’analyse descriptive rapporte ce qui s'est passé."
    },
    {
        "id": 89,
        "question": "Les grandes données doivent être transformées en :",
        "options": [
            "A. Données brutes",
            "B. Smart Data",
            "C. Statistiques non analysées",
            "D. Données volumineuses sans traitement"
        ],
        "answer": "B",
        "explanation": "Smart Data est le résultat de la transformation et validation des big data pour générer de la valeur."
    },
    {
        "id": 90,
        "question": "Les indicateurs de performance (KPI) servent à :",
        "options": [
            "A. Nettoyer les données",
            "B. Visualiser les données",
            "C. Mesurer la progression vers les objectifs",
            "D. Évaluer la véracité des données"
        ],
        "answer": "C",
        "explanation": "Les KPI mesurent le progrès par rapport aux objectifs définis."
    },
    {
        "id": 91,
        "question": "Le contrôle de format vérifie :",
        "options": [
            "A. La validité d'un champ par rapport à des règles de type",
            "B. L'intégrité des clés",
            "C. La séquence des fichiers",
            "D. La simultanéité"
        ],
        "answer": "A",
        "explanation": "Il empêche la saisie de caractères incorrects pour un type de champ spécifique."
    },
    {
        "id": 92,
        "question": "Les contrôles de simultanéité :",
        "options": [
            "A. Sont des contrôles d’entrée",
            "B. Sont des contrôles de traitement",
            "C. Vérifient la validité des champs",
            "D. Gèrent la mise en forme des écrans"
        ],
        "answer": "B",
        "explanation": "Ils garantissent l’intégrité des données lorsque plusieurs utilisateurs accèdent ou modifient simultanément des fichiers ou bases de données."
    },
    {
        "id": 93,
        "question": "La documentation du programme sert principalement à :",
        "options": [
            "A. Identifier la cause des goulots d’étranglement initialement",
            "B. Fournir un support après l’identification du problème",
            "C. Planifier les tâches",
            "D. Contrôler les journaux de la console"
        ],
        "answer": "B",
        "explanation": "La documentation aide à comprendre pourquoi un programme pose problème mais n’indique pas directement la cause initiale."
    },
    {
        "id": 94,
        "question": "Le contrôle des tâches (job scheduling) est essentiel pour :",
        "options": [
            "A. Corriger les erreurs de traitement",
            "B. Optimiser l’utilisation des ressources informatiques",
            "C. Créer la documentation du programme",
            "D. Contrôler les journaux de la console"
        ],
        "answer": "B",
        "explanation": "L’ordonnancement des tâches permet d’éviter les goulots d’étranglement et d’améliorer l’efficacité des traitements."
    },
    {
        "id": 95,
        "question": "Les grandes données incluent toutes les informations suivantes, sauf :",
        "options": [
            "A. Médias sociaux",
            "B. Données machine",
            "C. Vidéos et voix converties de haute densité en faible densité",
            "D. Données non structurées"
        ],
        "answer": "C",
        "explanation": "Elles sont converties de faible densité en haute densité, pas l’inverse."
    },
    {
        "id": 96,
        "question": "L’analyse prédictive sert à :",
        "options": [
            "A. Communiquer les résultats réels",
            "B. Identifier des anomalies",
            "C. Prévoir des résultats futurs",
            "D. Analyser des réseaux"
        ],
        "answer": "C",
        "explanation": "Elle utilise des données historiques pour prédire des événements futurs."
    },
    {
        "id": 97,
        "question": "Les grands outils d’analyse de données permettent de :",
        "options": [
            "A. Fusionner des données représentant le même objet",
            "B. Se concentrer uniquement sur les statistiques brutes",
            "C. Ignorer les données semi-structurées",
            "D. Exclure les informations manquantes"
        ],
        "answer": "A",
        "explanation": "La fusion de données consolide plusieurs sources pour une représentation cohérente et utile."
    },
    {
        "id": 98,
        "question": "L’objectif principal d’une organisation dans l’analyse de données pour planification future est :",
        "options": [
            "A. Analyse descriptive",
            "B. Analyse prédictive",
            "C. Analyse prescriptive",
            "D. Analyse réseau"
        ],
        "answer": "C",
        "explanation": "L’analyse prescriptive indique ce que l’organisation doit faire pour atteindre les résultats futurs souhaités."
    },
    {
        "id": 99,
        "question": "Le contrôle arithmétique compare :",
        "options": [
            "A. Un montant avec la somme de ses composantes",
            "B. La validité des champs de saisie",
            "C. La séquence des fichiers",
            "D. La simultanéité"
        ],
        "answer": "A",
        "explanation": "Le cross-footing ou contrôle arithmétique compare un montant à la somme de ses sous-composantes pour détecter les erreurs."
    },
    {
        "id": 100,
        "question": "Quelle méthode d'analyse un auditeur utilise pour rendre compte des résultats réels ?",
        "options": [
            "A. Analyse descriptive",
            "B. Découverte de l'information",
            "C. Analyse de texte",
            "D. Analyse diagnostique"
        ],
        "answer": "A",
        "explanation": "L’analyse descriptive est utilisée pour communiquer les résultats réels observés."
    }
    // Ici, il faudrait continuer avec les questions 19 à 100 en suivant exactement le même format.
]
