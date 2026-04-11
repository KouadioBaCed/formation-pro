export const quizQuestions = [
    {
        id: 1,
        question: "Lequel des éléments suivants ne serait pas approprié à prendre en compte dans la conception physique d'un centre de données ?",
        options: [
            "A. Évaluation des risques potentiels liés aux voies ferrées et aux autoroutes.",
            "B. Utilisation de systèmes d'accès biométriques.",
            "C. Conception de tables d'autorisation pour l'accès au système d'exploitation.",
            "D. Inclusion d'un système d'alimentation sans coupure et d'une protection contre les surtensions."
        ],
        answer: "C",
        explanation: "Les tables d'autorisation pour l'accès au système d'exploitation concernent les contrôles logiques et non les contrôles physiques. Les autres options sont toutes pertinentes pour la conception physique."
    },
    {
        id: 2,
        question: "Un pare-feu Internet est conçu pour fournir une protection adéquate contre lequel des éléments suivants ?",
        options: [
            "A. Un virus informatique.",
            "B. Logins non authentifiés d'utilisateurs externes.",
            "C. Fuite d'informations confidentielles par un initié.",
            "D. Application cheval de Troie."
        ],
        answer: "B",
        explanation: "Un pare-feu protège contre les connexions non authentifiées d'utilisateurs externes. Il ne peut pas arrêter les virus, les chevaux de Troie ou les fuites internes."
    },
    {
        id: 3,
        question: "L'authentification est le processus par lequel :",
        options: [
            "A. Le système vérifie que l'utilisateur est autorisé à saisir la transaction demandée.",
            "B. Le système vérifie l'identité de l'utilisateur.",
            "C. L'utilisateur s'identifie au système.",
            "D. L'utilisateur indique au système que la transaction a été traitée correctement."
        ],
        answer: "B",
        explanation: "L'identification distingue un utilisateur, l'authentification confirme que l'utilisateur est bien celui qu'il prétend être."
    },
    {
        id: 4,
        question: "Laquelle des questions suivantes serait la plus préoccupante pour un vérificateur en ce qui a trait à la politique de sécurité Internet d'une organisation ?",
        options: [
            "A. Documentation de l'auditeur.",
            "B. Efficacité du système.",
            "C. Intégrité des données.",
            "D. Contrôles des articles rejetés et des articles en suspens."
        ],
        answer: "C",
        explanation: "Les contrôles assurent l'intégrité, la confidentialité et la disponibilité de l'information. L'intégrité des données est cruciale pour la prise de décision du vérificateur."
    },
    {
        id: 5,
        question: "Les mots de passe pour les logiciels d'ordinateurs personnels sont conçus pour prévenir :",
        options: [
            "A. Traitement inexact des données.",
            "B. Accès non autorisé à l'ordinateur.",
            "C. Mise à jour incomplète des fichiers de données.",
            "D. Utilisation non autorisée du logiciel."
        ],
        answer: "D",
        explanation: "Les mots de passe contrôlent l'autorisation d'utiliser le logiciel et empêchent l'accès non autorisé."
    },
    {
        id: 6,
        question: "Un auditeur recommande l'authentification biométrique pour les travailleurs entrant dans un centre de données. La recommandation pourrait inclure tous les éléments suivants, sauf :",
        options: [
            "A. Empreintes digitales.",
            "B. Les motifs de la rétine.",
            "C. Les schémas de parole.",
            "D. Motifs de mots de passe."
        ],
        answer: "D",
        explanation: "Les mots de passe ne sont pas des dispositifs biométriques. Les empreintes digitales, la rétine et les schémas vocaux le sont."
    },
    {
        id: 7,
        question: "Quel contrôle empêcherait le mieux l'accès non autorisé à des données sensibles via un terminal sans surveillance ?",
        options: [
            "A. Utilisation d'un économiseur d'écran avec mot de passe.",
            "B. Utilisation des scripts de poste de travail.",
            "C. Cryptage des fichiers de données.",
            "D. Déconnexion automatique des utilisateurs inactifs."
        ],
        answer: "D",
        explanation: "La déconnexion automatique des utilisateurs inactifs sécurise un terminal laissé sans surveillance."
    },
    {
        id: 8,
        question: "Quel est un objectif des contrôles logiques de sécurité des systèmes d'information ?",
        options: [
            "A. Assurer un enregistrement complet et précis des données.",
            "B. Assurer un traitement complet et précis des données.",
            "C. Limiter l'accès à des données et ressources spécifiques.",
            "D. Fournir une piste de vérification des résultats du traitement."
        ],
        answer: "C",
        explanation: "Les contrôles logiques visent principalement à restreindre l'accès aux seules personnes autorisées."
    },
    {
        id: 9,
        question: "Quelle méthode est utilisée pour protéger les mots de passe contre le vol ?",
        options: [
            "A. Les afficher sur les écrans d'ordinateur mais pas sur papier.",
            "B. Définir la longueur maximale des caractères.",
            "C. Exiger que les mots de passe soient changés périodiquement.",
            "D. Éliminer tous les enregistrements d'anciens mots de passe."
        ],
        answer: "C",
        explanation: "La rotation régulière des mots de passe est une mesure de sécurité standard pour les protéger contre le vol."
    },
    {
        id: 10,
        question: "La meilleure source de preuve pour déterminer si d'anciens employés continuent d'avoir accès aux systèmes informatiques est :",
        options: [
            "A. Discuter du processus de suppression du mot de passe avec l'agent de sécurité.",
            "B. Examen des journaux informatiques des tentatives d'accès.",
            "C. Rapprocher les listes de paie actuelles avec les listes d'accès aux bases de données.",
            "D. Examiner le logiciel de contrôle d'accès pour vérifier sa version."
        ],
        answer: "C",
        explanation: "Comparer les listes de paie aux listes d'accès permet de vérifier si d'anciens employés ont encore accès."
    },
    {
        id: 11,
        question: "Les bibliothèques de programmes informatiques devraient être conservées en toute sécurité par :",
        options: [
            "A. Installation d'un système d'enregistrement pour l'accès au programme.",
            "B. Surveillance de l'accès physique aux supports de la bibliothèque du programme.",
            "C. Restreindre l'accès physique et logique.",
            "D. Refuser l'accès à distance via des terminaux."
        ],
        answer: "C",
        explanation: "La restriction de l'accès physique et logique protège les programmes contre toute utilisation non autorisée."
    },
    {
        id: 12,
        question: "La sécurité de l'accès aux données relatives aux applications peut être assurée par tous les moyens suivants, à l'exception de :",
        options: [
            "A. Fonctions d'identification et d'authentification de l'utilisateur incorporées dans l'application.",
            "B. Fonctions du logiciel utilitaire.",
            "C. Fonctions d'identification et d'authentification dans le logiciel de contrôle d'accès.",
            "D. Fonctions de sécurité fournies par un système de gestion de base de données."
        ],
        answer: "B",
        explanation: "Les programmes utilitaires peuvent contourner les contrôles d'accès et ne sont pas utilisés pour la sécurité."
    },
    {
        id: 13,
        question: "Quel contrôle aide le mieux à tenir les utilisateurs responsables des fonctions exécutées ?",
        options: [
            "A. Coupure programmée.",
            "B. Matériel redondant.",
            "C. Enregistrement de l'activité.",
            "D. Enregistrement des erreurs de transaction."
        ],
        answer: "C",
        explanation: "La journalisation des activités fournit une piste d'audit de l'activité de l'utilisateur."
    },
    {
        id: 14,
        question: "Quels nouveaux enjeux liés à l'évolution rapide de la technologie informatique créent de nouveaux risques ?",
        options: [
            "A. Changements dans les exigences organisationnelles en matière de rapports et de contrôle des abus informatiques.",
            "B. Contrôles des procédures relatives aux bandes de la bibliothèque.",
            "C. Complexité des systèmes d'exploitation et contrôles de la confidentialité des données.",
            "D. Changements dans le comportement organisationnel."
        ],
        answer: "C",
        explanation: "Les environnements complexes et l'accès à distance augmentent le risque de compromission des données."
    },
    {
        id: 15,
        question: "Une responsabilité importante de la haute direction en matière de sécurité des systèmes d'information est :",
        options: [
            "A. Évaluer les expositions.",
            "B. Attribution des privilèges d'accès.",
            "C. Détermination de la propriété des données.",
            "D. Formation des employés en matière de sécurité."
        ],
        answer: "A",
        explanation: "La direction doit identifier et évaluer les risques pour définir la politique de sécurité."
    },
    {
        id: 16,
        question: "Quel concept doit être pris en compte pour évaluer les coûts et avantages de la sécurité informatique ?",
        options: [
            "A. Perte potentielle si la sécurité n'est pas mise en œuvre.",
            "B. Probabilité d'occurrence.",
            "C. Coût et efficacité de la mise en œuvre et de l'exploitation de la sécurité.",
            "D. 1, 2 et 3."
        ],
        answer: "D",
        explanation: "Pour une analyse coûts-avantages complète, il faut considérer la perte potentielle, la probabilité et le coût/efficacité de la sécurité."
    },
    {
        id: 17,
        question: "Lequel des énoncés suivants est vrai concernant Internet comme réseau commercialement viable ?",
        options: [
            "A. Les organisations doivent utiliser des pare-feu si elles souhaitent maintenir la sécurité de leurs données internes.",
            "B. Les entreprises doivent demander une permission pour créer une page d'accueil.",
            "C. Les entreprises doivent respecter les normes de sécurité établies par la coalition des fournisseurs Internet.",
            "D. 1 et 3."
        ],
        answer: "A",
        explanation: "Les pare-feu sont nécessaires pour sécuriser les données. Les autres affirmations sont incorrectes."
    },
    {
        id: 18,
        question: "Quel est le plus grand risque pour la sécurité lorsqu'un administrateur quitte une entreprise sans suppression de comptes ?",
        options: [
            "A. Les mots de passe des utilisateurs ne sont pas alphanumériques.",
            "B. Les procédures de gestion des comptes utilisateurs ne sont pas documentées.",
            "C. Les comptes d'utilisateur ne sont pas supprimés à la cessation d'emploi.",
            "D. Les journaux de sécurité ne sont pas examinés périodiquement."
        ],
        answer: "C",
        explanation: "Les anciens employés ayant encore accès représentent le plus grand risque pour la sécurité."
    },
    {
        id: 19,
        question: "Quel est l'objectif premier des contrôles de sécurité des données ?",
        options: [
            "A. Établir un cadre de contrôle pour les programmes informatiques.",
            "B. S'assurer que les supports de stockage sont soumis à autorisation avant accès, modification ou destruction.",
            "C. Formaliser les normes et procédures de contrôle.",
            "D. Surveiller l'utilisation des logiciels système."
        ],
        answer: "B",
        explanation: "La priorité est de protéger les données en contrôlant l'accès aux supports de stockage."
    },
    {
        id: 20,
        question: "Lequel des éléments suivants est un dispositif électronique qui sépare un segment de réseau du réseau principal tout en maintenant la connexion ?",
        options: [
            "A. Programme d'interrogation.",
            "B. Pare-feu.",
            "C. Navigateur d'images.",
            "D. Mot-clé."
        ],
        answer: "B",
        explanation: "Un pare-feu isole un réseau et contrôle le trafic entre réseaux."
    },
    {
        id: 21,
        question: "Pourquoi un ordinateur portable connecté sans fil pouvait-il accéder aux fichiers du réseau d'Acme ?",
        options: [
            "A. Le routeur d'Acme a été mal configuré.",
            "B. L'ordinateur de Farmington avait le même mot de passe administrateur.",
            "C. Jones avait reçu l'accès root sur l'ordinateur d'Acme.",
            "D. Acme n'utilisait pas la sécurité sur le réseau."
        ],
        answer: "D",
        explanation: "Le réseau sans fil d'Acme n'était pas sécurisé, permettant l'accès à tout utilisateur."
    },
    {
        id: 22,
        question: "Lequel des mots de passe suivants serait le plus difficile à craquer ?",
        options: [
            "A. O.Ca!FlSi",
            "B. langue",
            "C. 12 MAISON 24",
            "D. pass56mot"
        ],
        answer: "A",
        explanation: "Un mot de passe complexe combine lettres, chiffres et symboles aléatoires et ne contient pas de mots existants."
    },
    {
        id: 23,
        question: "L'utilisation de la biométrie pour authentifier l'accès des utilisateurs remplace probablement :",
        options: [
            "A. Recours à des spécialistes de la sécurité.",
            "B. Tests de vraisemblance.",
            "C. Mots de passe.",
            "D. Logiciel de protection contre les virus."
        ],
        answer: "C",
        explanation: "La biométrie remplace les mots de passe pour l'authentification des utilisateurs."
    },
    {
        id: 24,
        question: "Quel problème de sécurité est lié aux mots de passe ?",
        options: [
            "A. Les mots de passe sont attribués aux utilisateurs mais ne sont pas modifiés.",
            "B. Les utilisateurs ont des comptes sur plusieurs systèmes avec différents mots de passe.",
            "C. Les utilisateurs copient leurs mots de passe sur du papier.",
            "D. Les utilisateurs choisissent des mots de passe non présents dans les dictionnaires en ligne."
        ],
        answer: "A",
        explanation: "Les mots de passe attribués et non changés posent un risque de sécurité important."
    },
    {
        id: 25,
        question: "Quel énoncé décrit le mieux un contrôle d'accès physique ?",
        options: [
            "A. Protège contre la transmission des chevaux de Troie.",
            "B. Fournit l'authentification des utilisateurs.",
            "C. Sépare les personnes non autorisées des ressources informatiques.",
            "D. Minimise le risque de panne de courant ou de matériel."
        ],
        answer: "C",
        explanation: "Les contrôles physiques limitent l'accès aux ressources et protègent contre les risques environnementaux."
    },
    {
        id: 26,
        question: "Lequel des énoncés est un exemple de contrôle général pour un système informatisé ?",
        options: [
            "A. Limiter la saisie des transactions de vente aux clients solvables.",
            "B. Création des totaux de hachage pour la paie.",
            "C. Restreindre l'entrée des opérations des comptes fournisseurs.",
            "D. Restreindre l'accès au centre informatique au moyen de dispositifs biométriques."
        ],
        answer: "D",
        explanation: "Les contrôles généraux concernent l'environnement global, et les dispositifs biométriques en font partie."
    },
    {
        id: 27,
        question: "Pourquoi la gestion des risques devient-elle plus importante avec les innovations en TI ?",
        options: [
            "A. L'objectif d'une sécurité totale devient réalisable.",
            "B. La sécurité est continuellement soumise à de nouvelles menaces.",
            "C. Les systèmes privés fermés ont proliféré.",
            "D. La protection de la vie privée n'intéresse que peu d'utilisateurs."
        ],
        answer: "B",
        explanation: "Les nouvelles technologies créent de nouvelles vulnérabilités et menaces, rendant la gestion des risques continue essentielle."
    },
    {
        id: 28,
        question: "Des questions préétablies et la déconnexion automatique des utilisateurs sont des exemples de quel type de contrôle informatique ?",
        options: [
            "A. Matériel.",
            "B. Logique.",
            "C. Entrée.",
            "D. Traitement."
        ],
        answer: "B",
        explanation: "Ces contrôles sont logiques et limitent l'accès aux utilisateurs autorisés."
    },
    {
        id: 29,
        question: "Lequel des énoncés suivants est faux concernant la sécurité des données ?",
        options: [
            "A. Les normes de structure des données doivent être cohérentes pour assurer la sécurité.",
            "B. Il est plus sûr de stocker les données sur un disque dur que sur un serveur commun.",
            "C. Il est important de supprimer tous les fichiers lorsque l'entité dispose de ses ordinateurs.",
            "D. Toutes les modifications apportées aux systèmes sont consignées pour fournir une piste de vérification."
        ],
        answer: "B",
        explanation: "Il est plus sûr de stocker les données sur un serveur commun, car il est régulièrement sauvegardé."
    },
    {
        "id": 30,
        "question": "Lorsqu'un utilisateur entre dans le système d'une entité et fournit son nom et la date de naissance de sa mère, à quel objectif cela correspond-il principalement ?",
        "options": [
            "A. Autorisation de traitement.",
            "B. Contrôle d'accès au matériel informatique.",
            "C. Authentification de l'utilisateur.",
            "D. Contrôle de l'intégrité des données."
        ],
        "answer": "C",
        "explanation": "Ces informations permettent au système d'identifier l'utilisateur et de limiter l'accès aux données et programmes."
    },
    {
        "id": 31,
        "question": "Quel est l'inconvénient majeur de l'utilisation d'une clé privée pour crypter les données ?",
        "options": [
            "A. L'expéditeur et le destinataire doivent tous deux avoir la clé privée pour que la méthode fonctionne.",
            "B. La clé privée ne peut pas être brisée en fragments et distribuée au récepteur.",
            "C. La clé privée est utilisée par l'expéditeur pour le cryptage mais pas par le destinataire pour le décryptage.",
            "D. La clé privée est utilisée par le destinataire pour le décryptage mais pas par l'expéditeur pour le cryptage."
        ],
        "answer": "A",
        "explanation": "Le chiffrement symétrique utilise une seule clé partagée entre l'expéditeur et le destinataire, ce qui constitue un risque si elle est compromise."
    },
    {
        "id": 32,
        "question": "Une signature numérique est utilisée principalement pour déterminer qu'un message est :",
        "options": [
            "A. Inaltéré dans la transmission.",
            "B. Non intercepté en route.",
            "C. Reçu par le destinataire prévu.",
            "D. Envoyé à la bonne adresse."
        ],
        "answer": "A",
        "explanation": "La signature numérique authentifie le document et garantit qu'il n'a pas été modifié pendant la transmission."
    },
    {
        "id": 33,
        "question": "Lequel des développements informatiques suivants présente le moins de risques pour la sécurité de l'organisation ?",
        "options": [
            "A. Adoption de la technologie sans fil.",
            "B. Utilisation du chiffrement à clé publique.",
            "C. Externalisation de l'infrastructure informatique.",
            "D. Intégration des fonctions à l'échelle de l'entreprise."
        ],
        "answer": "B",
        "explanation": "L'utilisation du chiffrement à clé publique réduit les risques en sécurisant les communications sur des réseaux publics."
    },
    {
        "id": 34,
        "question": "Lequel des éléments suivants ne présente aucun risque pour une entité sous cryptage à clé publique ?",
        "options": [
            "A. La transmission des clés privées entre les parties.",
            "B. La complexité de la clé privée.",
            "C. La complexité de la clé publique.",
            "D. La sécurité des informations après cryptage."
        ],
        "answer": "A",
        "explanation": "Avec le cryptage asymétrique, les clés privées ne sont jamais partagées, donc leur transmission n'est pas un risque."
    },
    {
        "id": 35,
        "question": "L'utilisation de l'authentification à deux niveaux nécessite :",
        "options": [
            "A. Nom d'utilisateur et mot de passe seulement.",
            "B. Protection contre une attaque de cheval de Troie.",
            "C. Informations connues uniquement de l'utilisateur.",
            "D. Protection contre une bombe logique."
        ],
        "answer": "C",
        "explanation": "L'authentification à deux facteurs combine un mot de passe et une information connue seulement de l'utilisateur (ou un objet possédé par lui)."
    },
    {
        "id": 36,
        "question": "Lequel des programmes suivants semble légitime mais exerce une activité illicite lorsqu'il est exécuté ?",
        "options": [
            "A. Hoax virus.",
            "B. Web crawler.",
            "C. Cheval de Troie.",
            "D. Killer application."
        ],
        "answer": "C",
        "explanation": "Un cheval de Troie semble convivial mais contient en réalité une application destructrice."
    },
    {
        "id": 37,
        "question": "Quelle est la meilleure mesure préventive contre un virus informatique ?",
        "options": [
            "A. Comparer les logiciels utilisés avec les versions autorisées.",
            "B. Exécuter périodiquement des programmes d'extermination de virus.",
            "C. N'autoriser que les logiciels provenant de sources connues.",
            "D. Préparer et tester un plan de rétablissement après infection."
        ],
        "answer": "C",
        "explanation": "Les contrôles préventifs consistent à n'utiliser que des logiciels autorisés provenant de sources fiables."
    },
    {
        "id": 38,
        "question": "Lequel des éléments suivants indique la présence d'un virus informatique ?",
        "options": [
            "A. Surtensions fréquentes qui nuisent à l'équipement informatique.",
            "B. Perte ou modification inexplicable de données.",
            "C. Insuffisance des plans de sauvegarde, de récupération et d'urgence.",
            "D. Nombreuses violations des droits d'auteur."
        ],
        "answer": "B",
        "explanation": "Les virus peuvent provoquer la perte ou la modification inattendue de données."
    },
    {
        "id": 39,
        "question": "Pour réduire la probabilité d'infection par un virus, une entreprise devrait :",
        "options": [
            "A. Restaurer les systèmes infectés avec les versions autorisées.",
            "B. Recompiler les programmes infectés à partir des sauvegardes du code source.",
            "C. Établir des procédures de contrôle des changements de programme.",
            "D. Tester tous les nouveaux logiciels sur un ordinateur personnel autonome."
        ],
        "answer": "D",
        "explanation": "Tester les logiciels en quarantaine permet de détecter des virus avant de les introduire dans le réseau de l'entreprise."
    },
    {
        id: 40,
        question: "L'utilisation de l'authentification à deux niveaux",
        options: [
            "A. Nécessite un nom d'utilisateur et un mot de passe seulement.",
            "B. Protège contre une attaque de cheval de Troie.",
            "C. Nécessite des informations connues uniquement de l'utilisateur.",
            "D. Protège contre une bombe logique."
        ],
        answer: "C",
        explanation: "L'authentification à deux niveaux nécessite un mot de passe et une information connue uniquement de l'utilisateur, comme une question de sécurité ou un jeton physique."
    },
    {
        id: 41,
        question: "Lequel des programmes suivants est un programme d'ordinateur qui semble légitime, mais qui exerce une activité illicite lorsqu'il est exécuté ?",
        options: [
            "A. Hoax virus.",
            "B. Web crawler.",
            "C. Cheval de Troie.",
            "D. Killer application."
        ],
        answer: "C",
        explanation: "Un cheval de Troie semble être un programme inoffensif mais contient un code destructeur ou malveillant."
    },
    {
        id: 42,
        question: "La meilleure mesure préventive contre un virus informatique est de",
        options: [
            "A. Comparer les logiciels utilisés avec les versions autorisées du logiciel.",
            "B. Exécuter périodiquement des programmes d'exterminateur de virus sur le système.",
            "C. N'autoriser l'utilisation sur le système que des logiciels autorisés provenant de sources connues.",
            "D. Préparer et tester un plan de rétablissement à la suite de l'incidence d'un virus."
        ],
        answer: "C",
        explanation: "Limiter l'utilisation du système à des logiciels autorisés provenant de sources fiables est une mesure préventive efficace contre les virus."
    },
    {
        id: 43,
        question: "Lequel des éléments suivants indique la présence d'un virus informatique ?",
        options: [
            "A. Surtensions fréquentes qui nuisent à l'équipement informatique.",
            "B. Perte ou modification inexplicable de données.",
            "C. Insuffisance des plans de sauvegarde, de récupération et d'urgence.",
            "D. Nombreuses violations des droits d'auteur dues à l'utilisation non autorisée de logiciels achetés."
        ],
        answer: "B",
        explanation: "Un symptôme typique d'un virus est la perte ou la modification inexplicable de données sur le système."
    },
    {
        id: 44,
        question: "Pour minimiser la probabilité que des virus informatiques infectent le système, une entreprise devrait également :",
        options: [
            "A. Restaurer les systèmes infectés avec les versions autorisées.",
            "B. Recompiler les programmes infectés à partir des sauvegardes du code source.",
            "C. Établir des procédures de contrôle des changements de programme.",
            "D. Tester tous les nouveaux logiciels sur un ordinateur personnel autonome."
        ],
        answer: "D",
        explanation: "Tester les logiciels sur une machine isolée permet de détecter d’éventuels virus avant d'introduire le logiciel dans le réseau de l’entreprise."
    },
    {
        id: 45,
        question: "Lequel des modes opératoires suivants augmente l'exposition d'une organisation aux virus informatiques ?",
        options: [
            "A. Cryptage des fichiers de données.",
            "B. Sauvegarde fréquente des fichiers.",
            "C. Téléchargement de logiciels du domaine public à partir de sites Web.",
            "D. Installation des copies originales des logiciels achetés sur les disques durs."
        ],
        answer: "C",
        explanation: "Le téléchargement de logiciels gratuits ou du domaine public comporte un risque élevé de virus ou de programmes contaminés."
    },
    {
        id: 46,
        question: "Le principal risque lié à l'utilisation d'un logiciel antivirus est que le logiciel antivirus puisse :",
        options: [
            "A. Ne pas détecter certains virus.",
            "B. Rendre l'installation du logiciel trop complexe.",
            "C. Interférer avec le fonctionnement du système.",
            "D. Consommer trop de ressources système."
        ],
        answer: "A",
        explanation: "Même les meilleurs logiciels antivirus peuvent ne pas détecter de nouveaux virus ou variantes de virus inconnus."
    },
    {
        id: 47,
        question: "Quelle est la meilleure ligne de conduite si le chargement ou l'exécution d'un programme prend plus de temps que d'habitude ?",
        options: [
            "A. Testez le système en exécutant un programme d'application différent.",
            "B. Redémarrez le système.",
            "C. Exécutez le logiciel antivirus.",
            "D. Sauvegardez les fichiers du disque dur sur des disquettes."
        ],
        answer: "C",
        explanation: "Une exécution plus lente qu'à l'habitude peut être un symptôme d'infection par un virus, donc lancer un antivirus est la première action appropriée."
    },
    {
        id: 48,
        question: "Relier les réseaux internes à des réseaux externes via un ordinateur hôte comporte le risque que :",
        options: [
            "A. Les virus peuvent pénétrer dans un ou plusieurs systèmes de l'entreprise.",
            "B. Les fichiers téléchargés peuvent ne pas être correctement édités et validés.",
            "C. Les données téléchargées peuvent ne pas être à jour.",
            "D. La maintenance des logiciels sur les ordinateurs personnels peut devenir plus coûteuse."
        ],
        answer: "A",
        explanation: "Connecter les ordinateurs internes à un réseau externe augmente le risque d'infection par des virus provenant de ce réseau."
    },
    {
        id: 49,
        question: "L'usurpation d'identité est :",
        options: [
            "A. Essayer un grand nombre de combinaisons de lettres et de chiffres pour accéder à un réseau.",
            "B. Écouter les informations envoyées par un utilisateur à l'ordinateur hôte d'un site Web.",
            "C. Accéder aux paquets circulant sur un réseau.",
            "D. Fausse représentation de l'identité dans le cyberespace."
        ],
        answer: "D",
        explanation: "L'usurpation d'identité consiste à se faire passer pour quelqu'un d'autre sur Internet afin d'obtenir des informations ou commettre des fraudes."
    },
    {
        id: 50,
        question: "Lequel des programmes suivants est un programme malveillant qui se reproduit sur le réseau et peut provoquer une attaque par déni de service ?",
        options: [
            "A. Bombe logique.",
            "B. Virus.",
            "C. Worm.",
            "D. Cheval de Troie."
        ],
        answer: "C",
        explanation: "Un ver (worm) est un programme indépendant qui se reproduit sur les réseaux et peut consommer excessivement les ressources système."
    },
    {
        id: 51,
        question: "Une bombe logique est :",
        options: [
            "A. Un programme qui s’exécute à un moment précis ou lors d’un événement précis et provoque des dommages.",
            "B. Un programme qui vole des informations personnelles.",
            "C. Un virus qui se propage par e-mail.",
            "D. Un cheval de Troie caché dans un logiciel utile."
        ],
        answer: "A",
        explanation: "Une bombe logique est un programme programmé pour s’exécuter à un moment ou un événement spécifique afin de causer des dommages au système."
    },
    {
        id: 52,
        question: "Lequel des éléments suivants est considéré comme une bonne pratique pour sécuriser les mots de passe ?",
        options: [
            "A. Réutiliser le même mot de passe pour plusieurs comptes.",
            "B. Écrire les mots de passe sur un papier à proximité de l’ordinateur.",
            "C. Utiliser des mots de passe complexes avec lettres, chiffres et symboles.",
            "D. Partager le mot de passe uniquement avec les collègues de confiance."
        ],
        answer: "C",
        explanation: "Utiliser des mots de passe complexes et uniques renforce la sécurité des comptes et réduit le risque d’intrusion."
    },
    {
        id: 53,
        question: "Le phishing consiste à :",
        options: [
            "A. Installer un logiciel antivirus.",
            "B. Envoyer des e-mails frauduleux pour obtenir des informations confidentielles.",
            "C. Bloquer l’accès à un site web.",
            "D. Créer un réseau privé sécurisé."
        ],
        answer: "B",
        explanation: "Le phishing est une technique de fraude où des e-mails ou messages trompeurs sont utilisés pour obtenir des informations personnelles ou financières."
    },
    {
        id: 54,
        question: "Pour protéger un ordinateur contre les logiciels espions (spyware), il est recommandé de :",
        options: [
            "A. Ne jamais installer de logiciels antivirus.",
            "B. Installer et mettre à jour régulièrement un anti-spyware.",
            "C. Partager les mots de passe avec des collègues.",
            "D. Télécharger uniquement des fichiers de n’importe quelle source."
        ],
        answer: "B",
        explanation: "Les anti-spywares aident à détecter et supprimer les logiciels espions qui collectent des informations sans le consentement de l’utilisateur."
    },
    {
        id: 55,
        question: "Lequel des éléments suivants n’est pas un type de virus informatique ?",
        options: [
            "A. Virus résident.",
            "B. Virus par macro.",
            "C. Virus d’agrégation de données.",
            "D. Virus de boot."
        ],
        answer: "C",
        explanation: "Le virus d’agrégation de données n’existe pas ; les virus informatiques connus incluent les virus résidents, par macro et de boot."
    },
    {
        id: 56,
        question: "Lequel des éléments suivants représente le mieux un cheval de Troie ?",
        options: [
            "A. Un logiciel qui s’installe automatiquement sans intervention de l’utilisateur.",
            "B. Un programme utile qui contient un code malveillant caché.",
            "C. Un programme qui supprime des fichiers aléatoires.",
            "D. Un virus qui se propage uniquement par e-mail."
        ],
        answer: "B",
        explanation: "Le cheval de Troie se présente comme un logiciel utile mais contient un code malveillant caché qui s’exécute à l’insu de l’utilisateur."
    },
    {
        id: 57,
        question: "La sauvegarde régulière des données informatiques permet de :",
        options: [
            "A. Accélérer l’ordinateur.",
            "B. Prévenir la propagation des virus.",
            "C. Restaurer les données en cas de perte ou de corruption.",
            "D. Supprimer automatiquement les virus."
        ],
        answer: "C",
        explanation: "Faire des sauvegardes régulières permet de restaurer les données perdues ou corrompues suite à un incident ou une attaque."
    },
    {
        id: 58,
        question: "Un réseau privé virtuel (VPN) est utilisé pour :",
        options: [
            "A. Partager ses mots de passe sur Internet.",
            "B. Se connecter à Internet de manière sécurisée et privée.",
            "C. Installer des logiciels malveillants sur un autre réseau.",
            "D. Accélérer le téléchargement des fichiers."
        ],
        answer: "B",
        explanation: "Le VPN chiffre la connexion Internet et protège la confidentialité et la sécurité des échanges sur des réseaux publics ou non sécurisés."
    },
    {
        id: 59,
        question: "Lequel des éléments suivants est une méthode efficace pour limiter l’accès non autorisé aux systèmes informatiques ?",
        options: [
            "A. Partager les mots de passe uniquement avec les responsables.",
            "B. Installer un pare-feu et des systèmes d’authentification forte.",
            "C. Télécharger des fichiers depuis n’importe quel site.",
            "D. Désactiver tous les antivirus pour éviter les conflits."
        ],
        answer: "B",
        explanation: "L’installation d’un pare-feu et l’utilisation d’une authentification forte aident à limiter l’accès non autorisé aux systèmes."
    },
    {
        id: 60,
        question: "Lequel des éléments suivants constitue une menace interne pour la sécurité informatique d’une organisation ?",
        options: [
            "A. Les virus téléchargés depuis Internet.",
            "B. Les employés qui abusent de leurs droits d’accès.",
            "C. Les hackers externes utilisant des attaques par force brute.",
            "D. Les sites web malveillants visités par les utilisateurs."
        ],
        answer: "B",
        explanation: "Une menace interne provient d’individus au sein de l’organisation, par exemple des employés qui abusent de leurs droits d’accès."
    },
    {
        id: 61,
        question: "Le ransomware est :",
        options: [
            "A. Un virus qui efface automatiquement toutes les données.",
            "B. Un logiciel qui crypte les fichiers d’un utilisateur et demande une rançon.",
            "C. Un programme antivirus avancé.",
            "D. Un cheval de Troie caché dans un fichier PDF."
        ],
        answer: "B",
        explanation: "Le ransomware bloque l’accès aux fichiers ou systèmes et demande une rançon pour restaurer l’accès."
    },
    {
        id: 62,
        question: "Lequel des éléments suivants est un exemple de phishing vocal (vishing) ?",
        options: [
            "A. Un e-mail demandant les informations de carte bancaire.",
            "B. Un appel téléphonique frauduleux demandant des informations sensibles.",
            "C. Un message SMS avec un lien malveillant.",
            "D. Un logiciel espion installé sur l’ordinateur."
        ],
        answer: "B",
        explanation: "Le vishing est une technique de phishing utilisant des appels téléphoniques pour obtenir des informations confidentielles."
    },
    {
        id: 63,
        question: "Lequel des éléments suivants est une bonne pratique pour protéger les appareils mobiles ?",
        options: [
            "A. Installer uniquement des applications depuis des sources officielles.",
            "B. Partager les mots de passe avec des amis de confiance.",
            "C. Éviter de mettre à jour le système pour ne pas perdre les applications.",
            "D. Connecter l’appareil à n’importe quel réseau Wi-Fi public."
        ],
        answer: "A",
        explanation: "Télécharger les applications uniquement depuis des sources officielles réduit le risque d’infection par des logiciels malveillants."
    },
    {
        id: 64,
        question: "Lequel des éléments suivants n’est pas un objectif principal de la cybersécurité ?",
        options: [
            "A. Confidentialité",
            "B. Intégrité",
            "C. Disponibilité",
            "D. Augmentation des ventes"
        ],
        answer: "D",
        explanation: "La cybersécurité vise à protéger la confidentialité, l’intégrité et la disponibilité des informations, pas à augmenter les ventes."
    },
    {
        id: 65,
        question: "L’authentification à deux facteurs (2FA) consiste à :",
        options: [
            "A. Utiliser uniquement un mot de passe complexe.",
            "B. Vérifier l’identité de l’utilisateur avec deux méthodes distinctes.",
            "C. Changer le mot de passe toutes les 24 heures.",
            "D. Partager le mot de passe avec un second utilisateur."
        ],
        answer: "B",
        explanation: "La 2FA combine deux méthodes d’identification (mot de passe + code envoyé par SMS ou application, par exemple) pour sécuriser l’accès."
    },
    {
        id: 66,
        question: "Lequel des éléments suivants est un protocole sécurisé pour la navigation web ?",
        options: [
            "A. HTTP",
            "B. FTP",
            "C. HTTPS",
            "D. Telnet"
        ],
        answer: "C",
        explanation: "HTTPS chiffre les communications entre le navigateur et le serveur, offrant une navigation sécurisée par rapport au HTTP non sécurisé."
    },
    {
        id: 67,
        question: "Pour protéger vos données sur un ordinateur public, il est recommandé de :",
        options: [
            "A. Se déconnecter de tous les comptes après utilisation.",
            "B. Laisser les sessions ouvertes pour plus de rapidité.",
            "C. Sauvegarder les mots de passe dans le navigateur.",
            "D. Installer des logiciels personnels."
        ],
        answer: "A",
        explanation: "Se déconnecter évite que d’autres utilisateurs accèdent à vos comptes ou données personnelles."
    },
    {
        id: 68,
        question: "Lequel des éléments suivants est un signe courant d’infection par un logiciel malveillant ?",
        options: [
            "A. L’ordinateur fonctionne plus vite que d’habitude.",
            "B. Apparition de messages d’erreur inhabituels et ralentissements.",
            "C. Les fichiers disparaissent de manière ordonnée.",
            "D. L’ordinateur ne nécessite jamais de mise à jour."
        ],
        answer: "B",
        explanation: "Les virus ou logiciels malveillants provoquent souvent des messages d’erreur, des ralentissements ou des comportements anormaux du système."
    },
    {
        id: 69,
        question: "Le pare-feu (firewall) sert à :",
        options: [
            "A. Bloquer ou filtrer le trafic réseau non autorisé.",
            "B. Crypter automatiquement tous les fichiers de l’ordinateur.",
            "C. Télécharger les mises à jour automatiquement.",
            "D. Scanner les emails pour détecter les spams uniquement."
        ],
        answer: "A",
        explanation: "Le pare-feu contrôle le trafic entrant et sortant du réseau pour empêcher les accès non autorisés."
    },
    {
        id: 70,
        question: "L’ingénierie sociale en cybersécurité consiste à :",
        options: [
            "A. Pirater les systèmes informatiques par force brute.",
            "B. Manipuler les individus pour obtenir des informations sensibles.",
            "C. Installer des antivirus sur un réseau.",
            "D. Chiffrer des fichiers pour les protéger."
        ],
        answer: "B",
        explanation: "L’ingénierie sociale exploite la confiance humaine pour obtenir des informations confidentielles ou accéder à des systèmes."
    },
    {
        id: 71,
        question: "Quel élément de la gestion de la continuité des opérations (GCA) nécessite la définition de l'objectif du point de reprise ?",
        options: [
            "A. Évaluation et atténuation des risques.",
            "B. Éducation, sensibilisation et entretien.",
            "C. Appui à la gestion.",
            "D. Analyse de l'impact sur les entreprises."
        ],
        answer: "D",
        explanation: "L'analyse de l'impact sur les activités identifie les processus essentiels au fonctionnement en cas de sinistre et détermine le moment où ils doivent être rétablis, incluant RTO et RPO."
    },
    {
        id: 72,
        question: "Quelle composante d'un programme de gestion des situations d'urgence d'une entreprise a normalement la période la plus longue ?",
        options: [
            "A. Intervention d'urgence.",
            "B. Gestion des crises.",
            "C. Gestion de la continuité.",
            "D. Gestion des communications."
        ],
        answer: "C",
        explanation: "La gestion de la continuité vise à rétablir les processus critiques et minimiser les conséquences financières sur des périodes mesurées en heures, jours ou semaines."
    },
    {
        id: 73,
        question: "En ce qui concerne les interruptions d'activité, quel est l'élément le plus crucial de la reprise d'activité ?",
        options: [
            "A. Sauvegarde des systèmes d'information.",
            "B. Systèmes de communication alternatifs et installations du site.",
            "C. Évaluations de l'impact des activités et plans de reprise des activités.",
            "D. Plan de reprise après sinistre."
        ],
        answer: "D",
        explanation: "Un plan de reprise après sinistre complet comprend procédures d'urgence, systèmes de communication alternatifs, systèmes d'information de secours, plans de reprise, et procédures de maintenance."
    },
    {
        id: 74,
        question: "L'objectif de la vérification du plan de continuité des opérations et de reprise après sinistre d'une organisation est le suivant :",
        options: [
            "A. 1 et 2.",
            "B. 1 et 3.",
            "C. 2 et 3.",
            "D. 1, 2 et 3."
        ],
        answer: "D",
        explanation: "La vérification du plan inclut : 1) assurer une reprise en temps opportun, 2) intégrer les changements importants, 3) refléter l'environnement opérationnel actuel."
    },
    {
        id: 75,
        question: "Quel élément de la gestion de la continuité des opérations implique l'identification des menaces et la détermination de leur impact ?",
        options: [
            "A. Analyse de l'impact sur les activités.",
            "B. Évaluation et atténuation des risques.",
            "C. Stratégie de reprise et de continuité des activités.",
            "D. Sensibilisation et formation."
        ],
        answer: "B",
        explanation: "L'évaluation et l'atténuation des risques identifie les menaces et évalue leur impact pour élaborer des stratégies d'atténuation."
    },
    {
        id: 76,
        question: "Laquelle des procédures suivantes devrait être incluse dans le plan de reprise après sinistre d'un service des technologies de l'information ?",
        options: [
            "A. Remplacement des ordinateurs personnels des ministères utilisateurs.",
            "B. Identification des applications critiques.",
            "C. Sécurité physique des entrepôts.",
            "D. Formation croisée du personnel d'exploitation."
        ],
        answer: "B",
        explanation: "La première étape d'un plan de continuité est d'identifier et prioriser les applications critiques."
    },
    {
        id: 77,
        question: "Dans lequel des endroits suivants une copie de la sauvegarde des données de fin d'année du système comptable devrait-elle être conservée ?",
        options: [
            "A. Emplacement hors site sécurisé.",
            "B. Serveur de sauvegarde des données dans la salle de réseau.",
            "C. Armoire à l'épreuve du feu dans la salle du réseau informatique.",
            "D. Classeur verrouillé dans le département de comptabilité."
        ],
        answer: "A",
        explanation: "Les sauvegardes critiques doivent être stockées hors site pour garantir la continuité des opérations en cas de sinistre."
    },
    {
        id: 78,
        question: "La principale raison pour laquelle les organisations élaborent des plans d'urgence pour leurs systèmes d'information informatisés est :",
        options: [
            "A. S'assurer qu'ils seront en mesure de traiter les transactions vitales en cas de sinistre.",
            "B. Assurer la sécurité des documents importants.",
            "C. Pour aider à contenir le coût de l'assurance.",
            "D. Planifier les sources de capital pour le relèvement à la suite de tout type de catastrophe."
        ],
        answer: "A",
        explanation: "Les plans d'urgence permettent de reprendre le traitement normal des transactions vitales après un sinistre."
    },
    {
        id: 79,
        question: "Lequel des énoncés suivants décrit le mieux un site chaud ?",
        options: [
            "A. L'endroit au sein de l'entreprise qui est le plus vulnérable à un sinistre.",
            "B. Endroit où une entreprise peut installer du matériel de traitement des données à court préavis.",
            "C. Emplacement équipé d'une configuration matérielle et logicielle redondante.",
            "D. Emplacement jugé trop proche d'une zone potentiellement sinistrée."
        ],
        answer: "C",
        explanation: "Un site chaud est entièrement opérationnel et immédiatement disponible pour assurer la continuité des opérations."
    },
    {
        id: 80,
        question: "Laquelle des configurations d'éléments suivantes représente le plan de reprise après sinistre le plus complet ?",
        options: [
            "A. Contrat avec le fournisseur pour un autre site de traitement, les procédures de sauvegarde, les noms des personnes de l'équipe de reprise après sinistre.",
            "B. Autre site de traitement, procédures de sauvegarde et de stockage hors site, identification des applications critiques, test du plan.",
            "C. Procédures de stockage hors site, identification des applications critiques, test du plan.",
            "D. Contrat du fournisseur pour un autre site de traitement, noms des membres de l'équipe de reprise après sinistre, procédures d'entreposage hors site."
        ],
        answer: "B",
        explanation: "La solution la plus complète comprend un autre site de traitement, la sauvegarde et le stockage hors site, l'identification des applications critiques et le test du plan de reprise après sinistre."
    },
    {
        id: 81,
        question: "Un contrôleur élabore un plan de reprise après sinistre pour les systèmes informatiques. En cas de sinistre, il a pris des dispositions pour utiliser un autre endroit et livrer du matériel informatique en double à cet endroit. Quel type de plan décrit le mieux cet arrangement ?",
        options: [
            "A. Site chaud.",
            "B. Site froid.",
            "C. Procédures de sauvegarde sur site.",
            "D. Accord de site de réserve à chaud."
        ],
        answer: "B",
        explanation: "Un site froid (centre de secours graduel) est un emplacement physique maintenu mais dépourvu de matériel, prêt à recevoir l’équipement nécessaire en cas de sinistre."
    },
    {
        id: 82,
        question: "Le rapport de vérification de gestion d'un service TI indiquait qu'il ne disposait pas d'un plan de reprise après sinistre. Quelle mesure la direction devrait-elle prendre en premier lieu ?",
        options: [
            "A. Protéger l'architecture de sécurité de l'information à l'épreuve des balles.",
            "B. Désigner un site chaud.",
            "C. Désigner un centre de secours graduel.",
            "D. Préparer un énoncé des responsabilités pour les tâches incluses dans le plan."
        ],
        answer: "D",
        explanation: "Préparer un énoncé des responsabilités pour les tâches du plan de reprise après sinistre est la première étape pour créer un plan complet et structuré."
    },
    {
        id: 83,
        question: "Bacchus, Inc. subit un incendie au siège et sur son plus grand site de fabrication. Quel plan aiderait à assurer un rétablissement rapide ?",
        options: [
            "A. Sauvegarde quotidienne.",
            "B. Sécurité du réseau.",
            "C. Continuité des opérations.",
            "D. Alimentation de secours."
        ],
        answer: "C",
        explanation: "La continuité des opérations permet de poursuivre les activités par d'autres moyens pendant la période où le traitement informatique n'est pas disponible."
    },
    {
        id: 84,
        question: "Quel terme fait référence à un site identifié et maintenu par l'organisation comme site de reprise après sinistre mais qui n'a pas de matériel installé ?",
        options: [
            "A. Hot.",
            "B. Froid.",
            "C. Warm.",
            "D. Démarrage à la volée."
        ],
        answer: "B",
        explanation: "Un site froid est une installation en coquille, sans matériel, mais disponible pour l'installation rapide en cas de sinistre."
    },
    {
        id: 85,
        question: "Un directeur TI rassemble les noms et emplacements des fournisseurs, la configuration matérielle, les membres de l'équipe et un autre site de traitement. Quel plan prépare-t-il probablement ?",
        options: [
            "A. Plan de restauration des données.",
            "B. Plan de reprise après sinistre.",
            "C. Politique de sécurité du système.",
            "D. Stratégie matérielle du système."
        ],
        answer: "B",
        explanation: "Le plan de reprise après sinistre comprend l'inventaire des fournisseurs, configurations, membres et sites alternatifs pour assurer la reprise après une interruption majeure."
    },
    {
        id: 86,
        question: "Une interruption totale dans un système distribué peut être minimisée grâce à :",
        options: [
            "A. Exception de rapport.",
            "B. Tolérance aux pannes.",
            "C. Sauvegarde et récupération.",
            "D. Sécurité du fichier."
        ],
        answer: "B",
        explanation: "La tolérance aux pannes permet de continuer le traitement sur les autres sites malgré la défaillance d'un site."
    },
    {
        id: 87,
        question: "L’orientation ou le passage en revue du plan est un type de méthode de test de la gestion de la continuité des activités. Cette méthode :",
        options: [
            "A. Est un type d'événement de faible intensité qui ne constitue pas un test.",
            "B. Révise le plan écrit pour assurer l'exactitude de la documentation.",
            "C. Implique de contacter les partenaires commerciaux et les employés.",
            "D. Valide la connectivité au site de production de l’organisation."
        ],
        answer: "A",
        explanation: "L’orientation du plan est un événement de faible intensité visant à ce que les membres comprennent leurs rôles, mais ne constitue pas un test réel."
    },
    {
        id: 88,
        question: "Quels énoncés sont corrects concernant la gestion de la continuité des activités et l'analyse de l'impact sur les activités (BIA) ?",
        options: [
            "A. Une BIA est limitée aux ressources internes pour la récupération.",
            "B. Une BIA définit séparément les objectifs de temps de récupération (RTO) et de point de récupération (RPO).",
            "C. Les processus métier critiques doivent être définis avant de réaliser un BIA.",
            "D. Un plan de gestion de la continuité des opérations est communiqué aux employés clés formés."
        ],
        answer: "B",
        explanation: "Une BIA définit les RTO et RPO pour les processus et ressources critiques, tant internes qu'externes."
    },
    {
        id: 89,
        question: "Parmi les préoccupations suivantes, laquelle est la principale lors de l’examen d’un accord réciproque de reprise après sinistre entre deux organisations ?",
        options: [
            "A. La fiabilité de l'analyse d'impact sur l'entreprise.",
            "B. Compatibilité matérielle et logicielle.",
            "C. Fréquence de test du système.",
            "D. Différences dans les politiques et procédures du système d'information."
        ],
        answer: "B",
        explanation: "La préoccupation majeure est que le matériel et les logiciels des organisations participantes soient compatibles pour assurer le partage des ressources après une interruption majeure."
    },
    {
        id: 90,
        question: "Lequel des éléments suivants décrit le mieux l'objectif du point de reprise (RPO) ?",
        options: [
            "A. La durée dans laquelle un processus doit être restauré.",
            "B. La quantité de données qu'une organisation peut se permettre de perdre.",
            "C. La priorité de restauration des applications critiques.",
            "D. Le budget alloué au plan de reprise après sinistre."
        ],
        answer: "B",
        explanation: "Le RPO définit la quantité de données qui peut être perdue sans conséquence inacceptable pour l'organisation."
    },
    {
        id: 91,
        question: "Lequel des éléments suivants décrit le mieux l'objectif de temps de reprise (RTO) ?",
        options: [
            "A. La quantité de données pouvant être perdue.",
            "B. Le délai et niveau de service pour restaurer un processus.",
            "C. La fréquence des sauvegardes.",
            "D. La stratégie de communication de crise."
        ],
        answer: "B",
        explanation: "Le RTO définit la durée et le niveau de service dans lesquels un processus doit être restauré après un sinistre."
    },
    {
        id: 92,
        question: "La stratégie de reprise et de continuité des activités comprend :",
        options: [
            "A. Identification des menaces uniquement.",
            "B. Procédures et ressources nécessaires à la reprise.",
            "C. Formation du personnel uniquement.",
            "D. Évaluation de la sécurité réseau uniquement."
        ],
        answer: "B",
        explanation: "Cette stratégie décrit en détail les procédures et les ressources nécessaires pour reprendre les activités après un incident."
    },
    {
        id: 93,
        question: "L'élément sensibilisation et formation dans la GCA vise :",
        options: [
            "A. La préparation du personnel aux procédures de continuité.",
            "B. La sauvegarde des données uniquement.",
            "C. La désignation d'un site chaud uniquement.",
            "D. La communication avec le public uniquement."
        ],
        answer: "A",
        explanation: "Il prépare le personnel afin qu'il connaisse ses rôles dans le plan de continuité des opérations."
    },
    {
        id: 94,
        question: "Lors de l'analyse de l'impact sur les activités, quelles informations sont identifiées ?",
        options: [
            "A. Les processus critiques, RTO et RPO.",
            "B. Les systèmes de communication uniquement.",
            "C. La formation du personnel uniquement.",
            "D. Les contrats fournisseurs uniquement."
        ],
        answer: "A",
        explanation: "L'analyse d'impact identifie les processus critiques et définit les objectifs de temps de reprise et de point de reprise."
    },
    {
        id: 95,
        question: "Lequel des éléments suivants fait partie d’un plan de reprise après sinistre complet ?",
        options: [
            "A. Systèmes de communication de rechange et installations sur site.",
            "B. Procédures d’entretien uniquement.",
            "C. Plan de sécurité réseau uniquement.",
            "D. Sauvegarde locale uniquement."
        ],
        answer: "A",
        explanation: "Un plan complet inclut systèmes de communication de rechange, installations, sauvegardes, plans de reprise et maintenance."
    },
    {
        id: 96,
        question: "La tolérance aux pannes dans un système distribué permet :",
        options: [
            "A. De signaler les erreurs uniquement.",
            "B. De continuer le traitement malgré la panne d’un site.",
            "C. De restaurer des données après un incident uniquement.",
            "D. De sécuriser les fichiers uniquement."
        ],
        answer: "B",
        explanation: "Elle permet au traitement de continuer sur les autres sites en cas de défaillance d’un site."
    },
    {
        id: 97,
        question: "Une méthode de test de la GCA de faible intensité qui garantit la compréhension des rôles par l’équipe est :",
        options: [
            "A. Orientation ou passage en revue du plan.",
            "B. Test documentaire.",
            "C. Test de communication.",
            "D. Test de bout en bout."
        ],
        answer: "A",
        explanation: "L’orientation ou passage en revue du plan est un événement de faible intensité pour familiariser l’équipe avec ses rôles."
    },
    {
        id: 98,
        question: "Le BIA définit séparément :",
        options: [
            "A. Les RTO et RPO pour les processus et ressources critiques.",
            "B. La sécurité physique uniquement.",
            "C. Les systèmes de communication uniquement.",
            "D. La formation du personnel uniquement."
        ],
        answer: "A",
        explanation: "La BIA définit les objectifs de temps de reprise (RTO) et de point de reprise (RPO) pour les processus et ressources critiques."
    },
    {
        id: 99,
        question: "Lors d’un accord réciproque de reprise après sinistre, la principale préoccupation est :",
        options: [
            "A. Fiabilité de l'analyse d'impact.",
            "B. Compatibilité matérielle et logicielle.",
            "C. Fréquence des tests.",
            "D. Différences dans les politiques et procédures."
        ],
        answer: "B",
        explanation: "La compatibilité des matériels et logiciels des organisations participantes est essentielle pour partager les ressources après une interruption majeure."
    },
    {
        id: 100,
        question: "Quel est l’élément clé pour assurer la continuité des activités lors d’un sinistre majeur ?",
        options: [
            "A. Sauvegardes quotidiennes.",
            "B. Sécurité du réseau.",
            "C. Continuité des opérations.",
            "D. Alimentation de secours."
        ],
        answer: "C",
        explanation: "La continuité des opérations permet à l’entreprise de poursuivre ses activités malgré l’indisponibilité temporaire des systèmes critiques."
    }

];
