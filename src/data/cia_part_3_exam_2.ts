export const examenAAI_Q1to10 = [
  {
    numero: 1,
    question: "Dans quelles circonstances les actions de l'AAI indiqueraient-elles que l'AAI n'est pas bien gérée ?",
    choix: {
      a: "Le RAI relève fonctionnellement du comité d’audit.",
      b: "Le RAI priorise principalement les missions en fonction des demandes de la direction générale.",
      c: "Le RAI examine périodiquement la charte d’audit interne et la présente pour approbation.",
      d: "Le RAI élabore des politiques et des procédures guidant l'AAI et les auditeurs.",
    },
    reponse: "b",
    explication: `
      La priorité des missions doit être fondée sur le risque et non sur les demandes de la direction générale. Les autres choix indiquent une gestion appropriée.
    `,
  },

  {
    numero: 2,
    question: "Concernant l'établissement de politiques et procédures pour guider l'AAI, lequel est vrai ?",
    choix: {
      a: "Forme et contenu adaptés à la taille de l'organisation.",
      b: "Toutes les AAI ont besoin de manuels de vérification technique officiels.",
      c: "Toutes les AAI ont besoin de manuels administratifs officiels.",
      d: "Une petite AAI peut être gérée informellement via supervision et notes de service.",
    },
    reponse: "d",
    explication: `
      Une petite AAI peut être gérée de manière informelle avec supervision étroite et notes de service, contrairement aux autres options qui sont incorrectes.
    `,
  },

  {
    numero: 3,
    question: "L'utilisation de l'évaluation des risques dans le processus de planification permet :",
    choix: {
      a: "Un processus d'évaluation et d'intégration du jugement professionnel sur les événements indésirables probables.",
      b: "Une liste des missions qui devraient être exécutées.",
      c: "Une liste des moments où les missions doivent être exécutées.",
      d: "Une façon de gérer les événements pouvant nuire à l'organisation.",
    },
    reponse: "a",
    explication: `
      L'évaluation des risques permet d'intégrer le jugement professionnel sur les événements probables affectant l'organisation.
    `,
  },

  {
    numero: 4,
    question: "Pourquoi le plan annuel du RAI est-il défectueux si l'ordonnancement se base uniquement sur le temps écoulé depuis la dernière mission ?",
    choix: {
      a: "Mentionner si le plan a été approuvé par la direction générale et le comité d’audit.",
      b: "Tenir compte de facteurs comme le risque et l'efficacité du processus de gestion des risques.",
      c: "Indiquer si des ressources ont été dûment engagées pour chaque mission.",
      d: "Inclure les programmes d'engagement individuels.",
    },
    reponse: "b",
    explication: `
      Le plan doit être fondé sur une évaluation des risques, pas seulement sur l'ancienneté des missions.
    `,
  },

  {
    numero: 5,
    question: "Lors du recrutement de deux nouveaux auditeurs internes pour un programme de travail à long terme, quels critères sont les plus importants ?",
    choix: {
      a: "Expérience et formation continue.",
      b: "Éducation et vérification des antécédents.",
      c: "Expérience et description du poste.",
      d: "Formation et expérience.",
    },
    reponse: "d",
    explication: `
      Le RAI doit prioriser la formation et l'expérience pour s'assurer que le candidat peut accomplir les missions.
    `,
  },

  {
    numero: 6,
    question: "Lequel n'est pas exact concernant les politiques et procédures de l'AAI ?",
    choix: {
      a: "À mesure que l'AAI prend de l'expansion, ses politiques deviennent plus officielles.",
      b: "Les politiques guident les auditeurs dans leur travail.",
      c: "Elles aident à se conformer aux normes de l'IIA.",
      d: "L'étendue et l'officialisation dépendent de la taille de l'entreprise.",
    },
    reponse: "d",
    explication: `
      L'étendue et l'officialisation dépendent de la taille de l'AAI, pas de l'entreprise.
    `,
  },

  {
    numero: 7,
    question: "Quels facteurs ne déterminent pas la taille du budget d’audit interne ?",
    choix: {
      a: "Nombre et expertise du personnel.",
      b: "Nombre de recommandations acceptées.",
      c: "Besoins de formation du personnel.",
      d: "Achats d'immobilisations comme ordinateurs ou mobilier.",
    },
    reponse: "b",
    explication: `
      Le nombre de recommandations acceptées reflète l'efficacité, mais n'affecte pas directement le budget.
    `,
  },

  {
    numero: 8,
    question: "Lors de l'embauche d'un auditeur environnemental, quel élément serait le moins préoccupant ?",
    choix: {
      a: "Connaissance des réglementations environnementales.",
      b: "Lieu de recrutement (interne ou externe).",
      c: "Expérience en audit environnemental ou domaine connexe.",
      d: "Intégration au personnel d’audit interne.",
    },
    reponse: "b",
    explication: `
      L'endroit où le candidat a été recruté est moins important que ses compétences, expérience et intégration.
    `,
  },

  {
    numero: 9,
    question: "Lors de l'établissement de l'ordre de priorité des missions, quel facteur n'est pas pris en compte ?",
    choix: {
      a: "Techniques de vérification par sondages.",
      b: "Compétence en matière de gestion.",
      c: "Qualité des contrôles internes.",
      d: "Incidence financière.",
    },
    reponse: "a",
    explication: `
      Les techniques de vérification sont appliquées après la priorité des missions, elles ne déterminent pas cette priorité.
    `,
  },

  {
    numero: 10,
    question: "Lequel des éléments suivants ne serait généralement pas une mission de l'audit interne ?",
    choix: {
      a: "Gestion des prix.",
      b: "Rémunération des dirigeants.",
      c: "Conservation/destruction des dossiers.",
      d: "Sécurité par mot de passe.",
    },
    reponse: "b",
    explication: `
      La rémunération des dirigeants est décidée par le conseil et ne relève pas de l'audit interne.
    `,
  },
];

interface LocalQuestion {
id: number;
question: string;
options: string[];
correct: string;
explanation: string;
}

export const ciaPart2Questions11to20: LocalQuestion[] = [
{
id: 11,
question: "Laquelle des missions de vérification financière le RAI devrait-il poursuivre, compte tenu des points de chaque mission ?",
options: [
"1 et 3",
"2 et 3",
"1 et 4",
"3 et 4"
],
correct: "a",
explanation: "Audit 1: 3+1+3=7, Audit 2: 3+2+1=6, Audit 3: 2+2+3=7, Audit 4: 1+3+2=6. Les audits 1 et 3 ont le score le plus élevé."
},
{
id: 12,
question: "Si la susceptibilité est deux fois plus importante que les autres facteurs, quelles missions le RAI poursuivrait-il ?",
options: [
"1 et 3",
"2 et 3",
"1 et 4",
"3 et 4"
],
correct: "d",
explanation: "Scores pondérés: Audit 1: 3+(1x2)+3=8, Audit 2: 3+(2x2)+1=8, Audit 3: 2+(2x2)+3=9, Audit 4: 1+(3x3)+2=12. Audits 3 et 4 sont les plus élevés."
},
{
id: 13,
question: "Quels sont les avantages d'un programme RCSA ?",
options: [
"I et III seulement",
"I et IV seulement",
"I, II et III",
"II, III et IV"
],
correct: "b",
explanation: "Avantages: I. meilleure compréhension des risques, IV. encourager l'amélioration des opérations. Les autres ne sont pas des avantages."
},
{
id: 14,
question: "Lequel des énoncés suivants n'est pas vrai concernant l'appréhension du RAI à l'égard de l'ACOR ?",
options: [
"Les employés pourraient prendre plus de risques sans formation adéquate",
"La fonction d’audit interne est diminuée avec un programme ACOR",
"Sensibiliser les employés ne garantit pas une amélioration des contrôles",
"Les employés craignent d'assumer davantage de responsabilités"
],
correct: "b",
explanation: "La fonction d’audit interne n'est pas diminuée ; un programme ACOR bien exécuté améliore le contrôle et soutient l'audit interne."
},
{
id: 15,
question: "Lequel des énoncés suivants n'est pas vrai concernant l'analyse comparative ?",
options: [
"L'analyse comparative consiste toujours à se comparer à la concurrence",
"Les sources de données doivent être fiables, précises et appropriées",
"L'analyse comparative peut amener à ne plus se concentrer sur ce qui est important",
"Une mise en œuvre incorrecte compromet l'utilité"
],
correct: "a",
explanation: "L'analyse comparative peut être interne ou externe et ne consiste pas toujours à se comparer à la concurrence."
},
{
id: 16,
question: "Toutes les raisons suivantes sont des raisons d'effectuer une vérification environnementale, sauf :",
options: [
"Être un producteur à faible coût",
"Les investisseurs veulent connaître l'empreinte environnementale",
"Les questions environnementales sont des risques potentiels",
"Les investisseurs s'intéressent aux sociétés durables"
],
correct: "a",
explanation: "Pour devenir un producteur à faible coût, une vérification opérationnelle est plus pertinente qu'une vérification environnementale."
},
{
id: 17,
question: "Le risque que les procédures de l'auditeur ne détectent pas une anomalie significative s'appelle :",
options: [
"Risque de vérification",
"Risque de détection",
"Risque inhérent",
"Risque de contrôle"
],
correct: "b",
explanation: "Le risque de détection est la possibilité que l'auditeur ne découvre pas une anomalie significative."
},
{
id: 18,
question: "Lequel des énoncés suivants n'est pas vrai concernant les risques et les états financiers ?",
options: [
"Le risque inhérent est la possibilité d'erreurs dans les états financiers",
"Les auditeurs peuvent influencer le risque inhérent et de contrôle au cours de la période",
"Le risque de détection est entièrement sous le contrôle de l'auditeur",
"Plus le risque de contrôle est élevé, plus il y a de tests à effectuer"
],
correct: "b",
explanation: "Le risque inhérent et le risque de contrôle pour les périodes passées ne peuvent pas être influencés par l'auditeur pendant la mission."
},
{
id: 19,
question: "Lorsque le niveau acceptable de risque de détection diminue, l'auditeur peut tout faire sauf :",
options: [
"Choisir des procédures d'audit plus efficaces",
"Choisir des procédures d'audit plus efficaces",
"Appliquer les procédures plus près de la fin de l'année",
"Augmenter le niveau des tests"
],
correct: "a",
explanation: "Choisir des procédures plus efficaces seul ne suffit pas à compenser un risque de détection plus faible ; il faut aussi les appliquer au bon moment et augmenter le volume de tests."
},
{
id: 20,
question: "Pour une mission d'efficacité d'un processus de production, quelle est une mesure de l'efficacité ?",
options: [
"L'objectif est de produire 350 unités par machine",
"Le nombre d'unités produites par machine et par jour",
"Le nombre d'unités défectueuses",
"Le nombre de plaintes des clients"
],
correct: "b",
explanation: "L'efficacité mesure le rapport entre les extrants et les intrants ; ici, la production réelle par machine par jour reflète l'efficacité."
}
];
export const examenAAI_Q21to30 = [
  {
    numero: 21,
    question: "Lors d'une mission de consultation, les auditeurs internes doivent faire preuve de diligence professionnelle. Que doivent-ils faire ?",
    choix: {
      a: "Assurez-vous que le client signe le contrat.",
      b: "Comprendre l'étendue du travail nécessaire pour atteindre les objectifs de la mission.",
      c: "Aider le client à développer les objectifs de la mission.",
      d: "S'assurer que le coût d'exécution de la mission est supérieur aux avantages reçus.",
    },
    reponse: "b",
    explication: `
      Les auditeurs doivent évaluer l'étendue du travail, les besoins du client, le calendrier et la communication, et veiller à ce que les avantages de la mission surpassent les coûts.
    `,
  },

  {
    numero: 22,
    question: "Exemple d'un repère fonctionnel :",
    choix: {
      a: "Taux de main d'œuvre des employés comparativement qualifiés de l'usine du concurrent.",
      b: "Pourcentage d'unités défectueuses dans l'usine la plus efficace de l'entreprise.",
      c: "Efficacité de la R&D comparée à celle d'une entreprise de taille similaire dans une autre industrie.",
      d: "Niveau des ventes par employé dans la succursale la plus prospère de l'entreprise.",
    },
    reponse: "c",
    explication: `
      L'analyse comparative fonctionnelle compare les performances avec des organisations œuvrant dans le même domaine technologique ou fonctionnel.
    `,
  },

  {
    numero: 23,
    question: "Indicateurs clés de performance (KPI) :",
    choix: {
      a: "Sont des mesures quantifiables et financières uniquement.",
      b: "Ce sont des éléments dans lesquels l'organisation doit exceller pour surpasser la concurrence.",
      c: "Aident les entreprises à évaluer l'efficacité de fonctions et processus pour atteindre les objectifs organisationnels.",
      d: "Doivent être mesurés sur une base annuelle.",
    },
    reponse: "c",
    explication: `
      Les KPI aident à mesurer l'efficacité des processus critiques pour atteindre les objectifs stratégiques, et peuvent être financiers ou non financiers.
    `,
  },

  {
    numero: 24,
    question: "Lequel n'est pas vrai concernant les missions de consultation ?",
    choix: {
      a: "La nature des services de conseil doit être définie dans la charte du comité d'audit.",
      b: "Elles s'adressent principalement aux clients internes.",
      c: "Elles peuvent découler de missions de certification.",
      d: "Elles visent à faire de l'AAI une activité à plus forte valeur ajoutée.",
    },
    reponse: "a",
    explication: `
      La nature des missions de consultation doit être définie dans la charte d'audit interne, pas dans celle du comité d'audit.
    `,
  },

  {
    numero: 25,
    question: "Coordination de l'audit interne avec l'auditeur externe, avantages selon Darby :",
    choix: {
      a: "I et II seulement",
      b: "II et IV seulement",
      c: "I et III seulement",
      d: "II et III seulement",
    },
    reponse: "c",
    explication: `
      La coordination réduit les coûts de l'audit externe (I) et évite le dédoublement du travail (III). Les autres points ne sont pas des avantages pour l'entreprise.
    `,
  },

  {
    numero: 26,
    question: "Coordination de l’audit interne avec les organismes de réglementation :",
    choix: {
      a: "Est spécifiquement mentionné dans les normes de l'IIA.",
      b: "Donne aux auditeurs gouvernementaux l'assurance d'un minimum de duplication de travail.",
      c: "Doit être approuvé par le conseil ou comité d’audit.",
      d: "Est mandaté par les organismes de réglementation.",
    },
    reponse: "a",
    explication: `
      La norme 2050 recommande de coordonner les activités avec d'autres fournisseurs internes et externes pour assurer la couverture et minimiser le chevauchement.
    `,
  },

  {
    numero: 27,
    question: "Paquet d’informations du RAI à la direction et au comité de vérification comprendrait tous les éléments sauf :",
    choix: {
      a: "Besoins en personnel",
      b: "Description des missions à mener",
      c: "Plans de travail d'audit pour les missions à mener",
      d: "Montant d'argent nécessaire au maintien de l'activité d'audit interne pour l'année à venir",
    },
    reponse: "c",
    explication: `
      Le RAI soumet le plan et les besoins en ressources, mais pas le détail complet des plans de travail pour chaque mission.
    `,
  },

  {
    numero: 28,
    question: "Conséquences de ne pas signaler les risques et problèmes de contrôle importants :",
    choix: {
      a: "I, III et IV",
      b: "II, III et IV",
      c: "I, II et IV",
      d: "I, II, III et IV",
    },
    reponse: "b",
    explication: `
      Ne pas signaler ces risques peut empêcher d'atteindre les objectifs commerciaux (II), réduire l'efficacité opérationnelle (III) et négliger les possibilités d'amélioration (IV). I est incorrect.
    `,
  },

  {
    numero: 29,
    question: "Mesures que l'AAI peut prendre pour promouvoir l'amélioration continue, sauf :",
    choix: {
      a: "Offrir une formation sur les risques et les contrôles",
      b: "Aider la direction à suivre les nouveaux enjeux et régulations",
      c: "Aider à élaborer un processus d'identification et correction des lacunes",
      d: "Faciliter la mise en œuvre de contrôles pour atténuer les risques",
    },
    reponse: "d",
    explication: `
      L'AAI ne peut pas directement mettre en œuvre des contrôles pour atténuer les risques, seulement recommander et surveiller.
    `,
  },

  {
    numero: 30,
    question: "Mesure du rendement de l’audit interne, laquelle n'est généralement pas utilisée ?",
    choix: {
      a: "Pourcentage de recommandations d’audit interne acceptées",
      b: "Coût réel du maintien de l'audit interne vs budget",
      c: "Pourcentage de vérifications achevées par rapport aux prévues",
      d: "Nombre d'audits prévus",
    },
    reponse: "d",
    explication: `
      Le nombre d'audits prévus seul ne mesure pas la performance. Comparer prévus vs réalisés serait une mesure pertinente.
    `,
  },
];

export const ciaPart2Questions31to40: LocalQuestion[] = [
{
id: 31,
question: "La responsabilité du responsable de l’audit interne à l'égard du processus de planification comprend tous les éléments suivants, sauf :",
options: [
"Approuver le budget de l'AAI",
"S'assurer que les buts et objectifs de l'AAI sont clairement définis",
"Approuver l'horaire de travail de la mission",
"S'assurer que les rapports d'activités sont remis au comité d’audit"
],
correct: "a",
explanation: "Le RAI soumet le budget à la direction ou au PDG, il n'a pas le pouvoir de l'approuver lui-même."
},
{
id: 32,
question: "La meilleure procédure pour vérifier la présence d'employés fictifs dans la paie :",
options: [
"Demander au directeur des RH",
"Vérifier que les feuilles de temps sont approuvées",
"Faire correspondre les modifications autorisées dans le fichier de paie avec les feuilles de temps approuvées",
"Vérifier que le chef de service a approuvé les feuilles de temps"
],
correct: "c",
explanation: "Comparer les modifications dans le fichier principal avec les feuilles de temps approuvées permet de détecter les employés fictifs."
},
{
id: 33,
question: "Le périmètre de la mission concernant l'évaluation des immobilisations comprendrait tous les éléments suivants, sauf :",
options: [
"Élaborer le programme de vérification",
"Examen du registre des immobilisations",
"Discuter des méthodes d'amortissement avec le bureau comptable",
"Revoir la propriété des immobilisations"
],
correct: "a",
explanation: "Le programme de vérification est établi après la planification ; il ne fait pas partie du périmètre de la mission."
},
{
id: 34,
question: "Tous les risques suivants concernent la valorisation des actifs, sauf :",
options: [
"L'enregistrement incorrect de l'actif",
"L'estimation incorrecte de la durée de vie utile",
"La capitalisation inappropriée des coûts",
"La comptabilisation abusive des coûts de maintenance"
],
correct: "d",
explanation: "Les coûts de maintenance passés en charges n'affectent pas la valorisation des actifs."
},
{
id: 35,
question: "Pour déterminer si l'information est suffisante, l’auditeur doit tenir compte de tous les éléments suivants, sauf :",
options: [
"Le jugement professionnel de l'auditeur",
"L'importance relative de l'élément à l'étude",
"Le risque inhérent d'erreur",
"L'origine de l'information"
],
correct: "d",
explanation: "L'origine de l'information concerne la fiabilité, pas la suffisance de la preuve."
},
{
id: 36,
question: "La source d'information la plus fiable pour vérifier l'existence des immobilisations :",
options: [
"Inspection physique des biens",
"Entretien avec le comptable responsable de la dépréciation",
"Examen du registre des immobilisations",
"Examen des rapports de vérification antérieurs"
],
correct: "a",
explanation: "L'inspection physique par l'auditeur est la source la plus fiable pour confirmer l'existence d'un actif."
},
{
id: 37,
question: "Lequel des éléments suivants ne serait pas considéré comme pertinent pour la mission ?",
options: [
"Liste des paiements pour les immobilisations",
"Erreur lors de la consolidation des informations financières d’une filiale",
"Capitalisation incorrecte de certains coûts de maintenance",
"Changement de politique dans la détermination de la durée de vie utile"
],
correct: "b",
explanation: "Une erreur dans une filiale non concernée par la mission n'est pas pertinente pour l'évaluation des immobilisations."
},
{
id: 38,
question: "Les éléments probants utiles pour l'auditeur interne en matière d'immobilisations sont :",
options: [
"Informations pour les objectifs de rentabilité de la direction",
"Informations pour les objectifs des actionnaires",
"Informations qui aident à déterminer si l'évaluation au bilan est correcte",
"Informations utilisées par les analystes financiers"
],
correct: "c",
explanation: "Les preuves utiles permettent à l'auditeur de déterminer si les immobilisations sont correctement évaluées au bilan."
},
{
id: 39,
question: "La preuve corroborante se décrit mieux comme :",
options: [
"Une preuve étayée par un témoignage d'expert",
"Preuve primaire qui soutient les informations secondaires",
"Une preuve secondaire utilisée pour soutenir les informations primaires",
"Preuve directe"
],
correct: "c",
explanation: "La preuve corroborante est une preuve secondaire qui soutient d'autres informations recueillies."
},
{
id: 40,
question: "Pour vérifier que l'entreprise n'a pas payé les biens non reçus, la meilleure procédure est :",
options: [
"Observer le processus de vérification et d’approbation des paiements",
"S’assurer que le récépissé de paiement est correctement approuvé",
"Comparer les quantités facturées aux quantités déclarées dans les rapports de réception et de contrôle des stocks",
"Vérifier si le fichier des comptes fournisseurs est mis à jour"
],
correct: "c",
explanation: "Comparer les quantités facturées aux quantités reçues permet de s'assurer qu'aucun paiement n'a été effectué pour des biens non reçus."
}
];
export const examenAAI_Q41to50 = [
  {
    numero: 41,
    question: "La meilleure procédure d'audit pour vérifier la propriété d'une usine serait :",
    choix: {
      a: "Examinez le titre de l'usine et vérifiez son existence.",
      b: "Interrogez la direction et vérifiez son existence.",
      c: "Interrogez la direction et examinez le titre de l'usine.",
      d: "Examiner les sorties de fonds pour son achat et vérifier son existence.",
    },
    reponse: "a",
    explication: `
      L'existence d'immobilisations est souvent vérifiée par observation et examen des titres. L'interrogation seule ou l'analyse des sorties de fonds n'est pas suffisante.
    `,
  },

  {
    numero: 42,
    question: "Lequel n'est pas vrai en ce qui concerne les programmes de travail de mission ?",
    choix: {
      a: "Elles doivent être terminées avant le début de l’audit.",
      b: "Ils ne peuvent pas être modifiés une fois que l'audit a commencé.",
      c: "Ils devraient disposer d'informations sur les objectifs du domaine à auditer.",
      d: "Elles devraient comprendre des procédures détaillées pour atteindre les objectifs de l’audit.",
    },
    reponse: "b",
    explication: `
      Les programmes de travail peuvent être ajustés au fur et à mesure de l'audit selon les circonstances.
    `,
  },

  {
    numero: 43,
    question: "Le RAI doit déterminer les ressources nécessaires à la réalisation d'une mission. Quel élément n'est pas pertinent ?",
    choix: {
      a: "Le nombre et l'expérience du personnel de vérification.",
      b: "La complexité de la mission.",
      c: "Les compétences du personnel du client.",
      d: "Les besoins de formation des auditeurs internes.",
    },
    reponse: "c",
    explication: `
      Les compétences du personnel du client n'ont pas d'impact sur l'affectation des ressources internes pour la mission.
    `,
  },

  {
    numero: 44,
    question: "L'utilisation de documents à l'appui des opérations enregistrées est appelée :",
    choix: {
      a: "Demande de renseignements.",
      b: "Traçage.",
      c: "Suivi.",
      d: "Confirmation.",
    },
    reponse: "c",
    explication: `
      Le suivi consiste à partir d'un montant enregistré dans les livres et rechercher les documents justificatifs correspondants.
    `,
  },

  {
    numero: 45,
    question: "Exemple de preuve documentaire :",
    choix: {
      a: "Examen d'un questionnaire envoyé au client.",
      b: "Examen d'une pièce d'équipement pour s'assurer qu'elle appartient à l'entreprise.",
      c: "Comparaison des noms des fournisseurs et des montants sur les factures d'achat avec le journal des achats.",
      d: "Examen du total des coûts de réparation pour chaque mois.",
    },
    reponse: "c",
    explication: `
      La preuve documentaire consiste à vérifier la cohérence des informations enregistrées à l'aide de documents existants, comme des factures et journaux comptables.
    `,
  },

  {
    numero: 46,
    question: "Lequel n'est pas vrai sur les avantages d'un diagramme de Gantt pour planifier les missions ?",
    choix: {
      a: "Il peut aider à allouer les ressources de l'AAI en fonction de leur disponibilité.",
      b: "Il aide à coordonner les besoins en dotation entre les multiples missions.",
      c: "Il peut suivre en temps réel les progrès et les jalons de la mission.",
      d: "Elle peut aider le RAI à minimiser les coûts d'engagement.",
    },
    reponse: "d",
    explication: `
      Le diagramme de Gantt planifie et coordonne, mais ne réduit pas directement les coûts d'engagement.
    `,
  },

  {
    numero: 47,
    question: "Après l'enquête préliminaire sur les comptes débiteurs, quel objectif n'est pas valide pour l'auditeur interne ?",
    choix: {
      a: "Vérifier la séparation des tâches pour paiements et notes de crédit.",
      b: "Vérifier que le solde des comptes débiteurs est correctement indiqué.",
      c: "Vérifier que les radiations de créances irrécouvrables sont approuvées par le gestionnaire des comptes débiteurs.",
      d: "Vérifier que les rentrées de fonds sont correctement enregistrées dans le bon compte client.",
    },
    reponse: "c",
    explication: `
      La radiation des créances irrécouvrables ne doit pas être approuvée par le gestionnaire des comptes débiteurs lui-même.
    `,
  },

  {
    numero: 48,
    question: "Première étape pour planifier une mission d'audit interne dans un nouveau service :",
    choix: {
      a: "Finaliser les objectifs de la mission.",
      b: "Obtenir l'autorisation du gestionnaire de l'approvisionnement.",
      c: "Déterminer les risques liés à l'activité.",
      d: "Effectuer une étude préliminaire du processus.",
    },
    reponse: "d",
    explication: `
      L'étude préliminaire ("survey") permet de collecter des informations initiales avant de finaliser les objectifs et évaluer les risques.
    `,
  },

  {
    numero: 49,
    question: "Lors d'une étude préliminaire du service des achats, quelle action n'est pas nécessaire ?",
    choix: {
      a: "Préparer un questionnaire basé sur l'évaluation des risques.",
      b: "Identifier où obtenir des renseignements supplémentaires sur le processus.",
      c: "Créer un organigramme du processus.",
      d: "Déterminer le risque de paiements en double.",
    },
    reponse: "d",
    explication: `
      Le risque de paiements en double est un risque pour le service des comptes créditeurs, pas pour le service des achats.
    `,
  },

  {
    numero: 50,
    question: "Découverte d'un fournisseur moins cher mais de qualité inférieure affectant les ventes. L'auditeur interne doit :",
    choix: {
      a: "Communiquer immédiatement le problème à la direction.",
      b: "Informer le responsable de l'approvisionnement de changer de fournisseur.",
      c: "Demander conseil au président du conseil.",
      d: "Informer le PDG de changer de fournisseur.",
    },
    reponse: "a",
    explication: `
      L'auditeur interne doit signaler immédiatement toute défaillance du contrôle interne à la direction. Les actions spécifiques sont de la responsabilité de la direction.
    `,
  },
];

export const ciaPart2Questions51to60: LocalQuestion[] = [
{
id: 51,
question: "Toutes les raisons suivantes justifient une rencontre préliminaire avec le gestionnaire du service des comptes débiteurs, à l'exception de :",
options: [
"Expliquer comment l’audit sera effectué",
"Déterminer la méthode d'essai des contrôles",
"Effectuer un 'walkthrough' des contrôles",
"Pour recueillir plus d'informations sur les contrôles"
],
correct: "b",
explanation: "La méthode d'essai des contrôles est décidée après la rencontre préliminaire et l'analyse des informations collectées, pas lors de la première réunion."
},
{
id: 52,
question: "Quel élément ne figurerait pas dans le dossier permanent du client ?",
options: [
"Diagramme visuel des processus de contrôle du ministère",
"Objectifs et buts du ministère à vérifier",
"Portée de la mission",
"Structure organisationnelle du ministère"
],
correct: "c",
explanation: "La portée de la mission fait partie du dossier temporaire et non du dossier permanent."
},
{
id: 53,
question: "Une enquête préliminaire est effectuée pour toutes les raisons suivantes, sauf :",
options: [
"Pour en savoir plus sur les intentions de la direction",
"Se familiariser avec le système d'information du domaine audité",
"Pour en savoir plus sur le processus de gestion des risques",
"Se forger une opinion sur les lacunes de contrôle du secteur"
],
correct: "d",
explanation: "Former une opinion sur les lacunes de contrôle vient après la réalisation de la mission, pas durant l'enquête préliminaire."
},
{
id: 54,
question: "Comment l'auditeur interne doit-il procéder après une enquête préliminaire indiquant que les revenus sont correctement comptabilisés ?",
options: [
"Poursuivre la mission en élargissant les tests",
"Informer la direction que la mission est annulée",
"Résumer les résultats du sondage et informer que la mission est annulée",
"Informer le vérificateur externe et demander conseil"
],
correct: "a",
explanation: "En raison de l'importance des revenus, l'auditeur doit élargir les tests pour confirmer les conclusions préliminaires."
},
{
id: 55,
question: "Afin de diminuer l'anxiété d'un superviseur pendant une entrevue, quelle action ne serait pas appropriée ?",
options: [
"Expliquer comment la mission peut être bénéfique",
"Rappeler les conséquences en cas de non-coopération",
"Prendre le temps d'écouter le superviseur",
"Souligner que l'auditeur est là pour aider"
],
correct: "b",
explanation: "Rappeler les conséquences augmente l'anxiété, contrairement aux autres actions qui visent à la réduire."
},
{
id: 56,
question: "Quelle est la meilleure approche face à des informations contradictoires recueillies pendant la mission ?",
options: [
"Envoyer une note au superviseur pour poser des questions",
"Informer le comité d’audit et demander la permission d'enquêter pour fraude",
"Envoyer une note au superviseur pour demander une réunion de suivi",
"Se présenter à l'improviste"
],
correct: "c",
explanation: "Demander une réunion de suivi est la méthode la plus appropriée pour clarifier les informations sans créer de tension."
},
{
id: 57,
question: "Lequel des énoncés suivants n'est pas vrai concernant les échelles d'évaluation ?",
options: [
"Faciles à administrer et à noter",
"Expriment la force des sentiments d'une personne",
"Génèrent des données quantifiables pour analyse statistique",
"Les répondants n'ont pas de difficulté à distinguer les degrés"
],
correct: "d",
explanation: "Un inconvénient des échelles est que les répondants peuvent avoir du mal à distinguer les différents niveaux."
},
{
id: 58,
question: "Quel facteur est le plus susceptible de produire un biais de non-réponse dans une enquête ?",
options: [
"Questions formulées de façon biaisée",
"Seules la moitié des personnes de l'échantillon répondent",
"Mener les entrevues par téléphone",
"Envoyer l'enquête à des personnes similaires"
],
correct: "b",
explanation: "Le biais de non-réponse survient lorsque certains répondants ne répondent pas, créant un écart potentiel dans les résultats."
},
{
id: 59,
question: "Quelle méthode d'échantillonnage utiliser pour tester les contrôles internes sur les demandes de crédit ?",
options: [
"Échantillonnage variable",
"Échantillonnage stratifié",
"Échantillonnage des attributs",
"Échantillonnage discrétionnaire"
],
correct: "c",
explanation: "L'échantillonnage des attributs est utilisé pour tester la conformité des contrôles internes, comme l'autorisation des demandes de crédit."
},
{
id: 60,
question: "Le type de risque lié à une conclusion basée sur un échantillon qui pourrait être différente si toute la population était examinée est :",
options: [
"Risque de jugement",
"Risque d'erreur statistique",
"Risque tolérable",
"Risque d'échantillonnage"
],
correct: "d",
explanation: "Le risque d'échantillonnage est le risque que les conclusions tirées d'un échantillon ne reflètent pas exactement celles de l'ensemble de la population."
}
];

export interface AuditQuestion {
id: number;
question: string;
options: string[];
correctAnswer: string;
}

export const auditQuestions: AuditQuestion[] = [
{
id: 71,
question: "Parmi les éléments suivants, lequel constituerait la forme la plus convaincante d'éléments probants en vérification ?",
options: [
"L'auditeur interne a reçu une confirmation positive d'un client.",
"L'auditeur interne a observé la distribution des chèques de paie.",
"L'auditeur interne a demandé au responsable des achats comment remplir un bon de commande.",
"L’auditeur interne a examiné les fiches de temps des employés pour justifier les frais de main-d’œuvre directe."
],
correctAnswer: "L'auditeur interne a reçu une confirmation positive d'un client."
},
{
id: 72,
question: "Quelle source est la plus fiable et laquelle est la moins fiable ?",
options: [
"II et III",
"I et III",
"II et IV",
"I et IV"
],
correctAnswer: "I et IV"
},
{
id: 73,
question: "Lequel des éléments suivants ne serait pas un inconvénient d'utiliser l'approche narrative ?",
options: [
"Cela peut devenir très long et prendre beaucoup de temps.",
"Il peut être fait sur mesure pour chaque processus.",
"Les faiblesses du processus ne sont pas toujours évidentes.",
"L'examinateur peut négliger des éléments importants du contrôle interne."
],
correctAnswer: "Il peut être fait sur mesure pour chaque processus."
},
{
id: 74,
question: "Lequel des énoncés suivants n'est pas vrai concernant les diagrammes spaghetti ?",
options: [
"Peuvent identifier les inefficacités dans l'aménagement de la zone ou du travail.",
"Fonctionnent mieux dans des environnements répétitifs.",
"Peuvent aider à identifier le gaspillage de transport, de mouvement et de temps d'attente.",
"Sont capables d'analyser et d'optimiser l'utilisation des matériaux."
],
correctAnswer: "Sont capables d'analyser et d'optimiser l'utilisation des matériaux."
},
{
id: 75,
question: "Lequel n'aiderait pas l’auditeur interne à s'attaquer à la cause profonde de l'augmentation des mauvaises créances ?",
options: [
"Y a-t-il eu des changements dans les conditions du prêt de crédit ?",
"Quel pourcentage des comptes débiteurs datent de plus de 90 jours ?",
"Y avait-il une autorisation de prêt de crédit appropriée ?",
"Y a-t-il eu des changements dans le processus de vérification des antécédents ?"
],
correctAnswer: "Quel pourcentage des comptes débiteurs datent de plus de 90 jours ?"
},
{
id: 76,
question: "Parmi les propositions suivantes, laquelle n'influencera pas la force (r²) de la formule de régression linéaire ?",
options: [
"Niveau actuel de la capacité de production de l'usine.",
"La précision des unités produites au cours des quatre trimestres.",
"La précision des coûts de fabrication entrés au cours des quatre trimestres.",
"Modifications apportées au processus de production au cours du deuxième trimestre."
],
correctAnswer: "Niveau actuel de la capacité de production de l'usine."
},
{
id: 77,
question: "Tous les éléments suivants sont les fonctions des documents de travail, à l'exception de :",
options: [
"Faciliter les examens par des tiers.",
"Fournir des documents indiquant si les objectifs de la mission ont été atteints.",
"Aider à la planification, à l'exécution, à la supervision et à l'examen des missions.",
"Aider au développement professionnel des cadres."
],
correctAnswer: "Aider au développement professionnel des cadres."
},
{
id: 78,
question: "Dans quelles circonstances un auditeur pourrait-il ne pas accorder la permission à un tiers ?",
options: [
"Un agent fiscal peut avoir besoin des documents de travail pour résoudre une question fiscale.",
"Un organisme de réglementation bancaire pourrait avoir besoin des documents de travail pour vérifier la conformité.",
"L'auditeur externe souhaite utiliser les documents de travail pour son programme de formation interne.",
"Un juge peut ordonner l'accès aux documents de travail pour une poursuite."
],
correctAnswer: "L'auditeur externe souhaite utiliser les documents de travail pour son programme de formation interne."
},
{
id: 79,
question: "Lesquelles des déclarations suivantes faites par le RAI sont vraies ?",
options: [
"I et II seulement",
"I seulement",
"I et III seulement",
"I, II et IV"
],
correctAnswer: "I seulement"
},
{
id: 80,
question: "Lequel constitue une raison valable de reconnaître un rendement satisfaisant ?",
options: [
"Il peut aider à valider la raison de la promotion du gestionnaire.",
"Les ressources peuvent être économisées parce qu'une mission de suivi n'est pas nécessaire.",
"Le directeur du département sera récompensé pour son travail.",
"Il peut être utilisé pour gagner la confiance et la coopération des clients."
],
correctAnswer: "Il peut être utilisé pour gagner la confiance et la coopération des clients."
}
];


export const examenAAI_Q81to90 = [
  {
    numero: 81,
    question: "Lequel des éléments suivants d'une observation n'est pas traité correctement ?",
    choix: {
      a: "Cause",
      b: "État",
      c: "Impact",
      d: "Critères ou norme",
    },
    reponse: "d",
    explication: `
      Les critères ou normes ne font pas partie de l'observation de mission ; ils indiquent ce qui devrait exister, pas ce qui a été observé.
    `,
  },

  {
    numero: 82,
    question: "La cause de l'observation de la mission est :",
    choix: {
      a: "Les ventes se font souvent à perte",
      b: "Pour que le personnel de vente atteigne ses objectifs de vente",
      c: "Le personnel de vente accorde souvent des rabais sans autorisation appropriée",
      d: "La société n'atteint pas son objectif de marge brute",
    },
    reponse: "b",
    explication: `
      La cause est la raison expliquant la différence entre ce qui devrait exister et ce qui existe, ici la pression sur les objectifs de vente.
    `,
  },

  {
    numero: 83,
    question: "Quelle raison n'entrave pas la circulation de l'information chez un superviseur ?",
    choix: {
      a: "Le superviseur aime mieux écouter que parler",
      b: "Le superviseur ne répond pas bien aux critiques",
      c: "Le superviseur n'est pas doué pour se concentrer sur les questions d'actualité",
      d: "Le superviseur n'est pas disposé à demander de l'aide lorsqu'il en a besoin",
    },
    reponse: "a",
    explication: `
      Écouter plus que parler n'empêche pas la circulation de l'information ; les autres facteurs peuvent créer des obstacles.
    `,
  },

  {
    numero: 84,
    question: "Raisons d'envoyer un questionnaire au client de mission :",
    choix: {
      a: "I et II seulement",
      b: "II et IV seulement",
      c: "I et III seulement",
      d: "III et IV seulement",
    },
    reponse: "d",
    explication: `
      La rétroaction du client vise à améliorer le rendement de l'auditeur et identifier les domaines d'amélioration.
    `,
  },

  {
    numero: 85,
    question: "Quels énoncés sont vrais concernant la supervision adéquate ?",
    choix: {
      a: "I et III seulement",
      b: "I et II seulement",
      c: "II, III et IV",
      d: "I, II et III",
    },
    reponse: "d",
    explication: `
      La supervision adéquate inclut les connaissances des auditeurs, l'instruction et l'approbation du programme, et la documentation appropriée. Le gestionnaire client n'approuve pas les recommandations.
    `,
  },

  {
    numero: 86,
    question: "Quel élément ne fait pas partie du processus d'examen des documents de travail ?",
    choix: {
      a: "Vérifier qu'aucun changement n'a été apporté au programme de travail",
      b: "S'assurer que les conclusions de l'auditeur sont suffisantes et compétentes",
      c: "Vérifier que les directives pour la préparation des documents de travail ont été suivies",
      d: "S'assurer que les documents contiennent tous les renseignements pertinents",
    },
    reponse: "a",
    explication: `
      Le programme de travail peut être modifié pour refléter des changements ; il n'est pas nécessaire qu'aucune modification n'ait été apportée.
    `,
  },

  {
    numero: 87,
    question: "Le rapport de mission final comprendra tous les éléments suivants, sauf :",
    choix: {
      a: "Une évaluation du rendement de l’auditeur interne",
      b: "Les conclusions de l'auditeur interne",
      c: "Le périmètre et les objectifs de la mission",
      d: "Recommandation finale de l’auditeur interne",
    },
    reponse: "a",
    explication: `
      L'évaluation du rendement de l'auditeur est réalisée par le RAI après l'audit, pas incluse dans le rapport final.
    `,
  },

  {
    numero: 88,
    question: "Une limitation du champ d'application correspond à :",
    choix: {
      a: "Une procédure que l'auditeur a décidé de ne pas suivre",
      b: "Une procédure que le RAI a dit de ne pas exécuter",
      c: "Une procédure planifiée mais non exécutée après la mission",
      d: "Une procédure que l'auditeur devait exécuter mais que le client a refusé",
    },
    reponse: "d",
    explication: `
      Une limitation du périmètre se produit lorsqu'une procédure obligatoire ne peut être exécutée à cause du refus du client.
    `,
  },

  {
    numero: 89,
    question: "Quel élément n'est pas un exemple de communication adéquate des résultats ?",
    choix: {
      a: "Présenter l'information pour persuader le client d'accepter la recommandation",
      b: "S'assurer qu'il y a un suivi après l'acceptation de la recommandation",
      c: "Présenter l'information de manière compréhensible pour le client",
      d: "S'assurer que l'information est exacte et concise",
    },
    reponse: "b",
    explication: `
      Le suivi se fait après la communication et l'acceptation de la recommandation, ce n'est pas une partie directe de la communication initiale.
    `,
  },

  {
    numero: 90,
    question: "Quelles sont les caractéristiques d'une communication de qualité ?",
    choix: {
      a: "III et IV seulement",
      b: "II et IV seulement",
      c: "I et III seulement",
      d: "II et III seulement",
    },
    reponse: "c",
    explication: `
      Une communication de qualité doit être précise (exacte) et compréhensible. Elle ne doit pas être partielle ou insuffisamment détaillée.
    `,
  },
];
export const examenAAI_Q91to100 = [
{
numero: 91,
question: "La recommandation suivante a été présentée au responsable de l’audit interne (RAI) par un auditeur interne : « L’audit interne recommande de mieux séparer les tâches lors de l’octroi de crédit aux clients... » Le RAI a critiqué le style de la recommandation pour :",
choix: {
a: "Utilisation de la voix passive",
b: "Utiliser trop de jargon",
c: "Ne pas être clair et concis",
d: "C'est trop long",
},
reponse: "a",
explication: `       L'auditeur interne doit utiliser la voix active et non la voix passive pour rendre la recommandation plus directe et compréhensible.
    `,
},
{
numero: 92,
question: "Au cours d'une mission, il peut être nécessaire de fournir un rapport intérimaire à la direction et au client. Une raison possible d'établir un rapport intérimaire pourrait être :",
choix: {
a: "Expliquez pourquoi la mission a été annulée",
b: "Donnez les raisons pour lesquelles le périmètre de la mission a changé",
c: "Faire une recommandation préliminaire",
d: "Remplace le rapport final",
},
reponse: "b",
explication: `       Les rapports intérimaires sont utilisés pour communiquer les changements du périmètre de la mission avant le rapport final.
    `,
},
{
numero: 93,
question: "Dans laquelle des situations suivantes une communication orale serait-elle appropriée ?",
choix: {
a: "L’auditeur interne avait de la difficulté à rapprocher l'état de compte bancaire et le compte de caisse",
b: "L'auditeur interne voulait s'assurer que le client était d'accord avec les raisons de la mission",
c: "L’auditeur interne a découvert qu'il y avait une brèche dans la sécurité pouvant entraîner la perte de renseignements sur les clients",
d: "L'auditeur interne craignait que l'audit ne soit pas terminé dans les délais prévus",
},
reponse: "c",
explication: `       Une communication orale est appropriée lorsqu'une information critique doit être transmise immédiatement, comme une violation de sécurité.
    `,
},
{
numero: 94,
question: "Avant de rédiger le rapport de mission final, l'auditeur interne a rencontré le client. Le but de la réunion était de :",
choix: {
a: "S'assurer que l'information contenue dans le rapport est exacte et véridique",
b: "Négocier avec le client afin que les deux parties soient satisfaites",
c: "Recueillir des renseignements supplémentaires",
d: "Présenter un plan d'action pour la mise en œuvre des recommandations",
},
reponse: "a",
explication: `       La réunion vise à valider les faits et éviter tout malentendu avant la publication du rapport final.
    `,
},
{
numero: 95,
question: "Une conférence de fin de mission est organisée pour toutes les raisons suivantes, à l'exception de :",
choix: {
a: "Pour assurer l'exactitude de l'information",
b: "Confirmer de nouveau les objectifs de la mission",
c: "Susciter une action de gestion appropriée",
d: "S'assurer qu'il n'y a pas eu de malentendus",
},
reponse: "b",
explication: `       La confirmation des objectifs de mission se fait plutôt au début (planification) et non lors de la conférence de fin.
    `,
},
{
numero: 96,
question: "Après discussion avec le directeur du crédit qui n'était pas d'accord avec la recommandation, quelle est la meilleure ligne de conduite de l'auditeur interne ?",
choix: {
a: "Faire ce que le responsable du crédit dit pour éviter les conflits",
b: "Ignorer la demande et soumettre la recommandation",
c: "Discuter de la situation avec l'auditeur externe",
d: "Soumettre la recommandation et inclure le désaccord du responsable du crédit",
},
reponse: "d",
explication: `       L'auditeur doit soumettre la recommandation tout en documentant le désaccord du client pour assurer transparence et conformité.
    `,
},
{
numero: 97,
question: "Lorsqu'il établit le calendrier de suivi, le RAI doit tenir compte de tous les éléments suivants, sauf :",
choix: {
a: "Le risque et l'exposition impliqués",
b: "Le degré de difficulté",
c: "Les désirs du client",
d: "Importance du calendrier de mise en œuvre des mesures correctives",
},
reponse: "c",
explication: `       Les désirs du client ne déterminent pas le calendrier de suivi ; ce dernier dépend du risque, de la difficulté et de l'importance des mesures.
    `,
},
{
numero: 98,
question: "Laquelle des méthodes suivantes n'est pas une méthode d’audit interne pour surveiller les progrès ?",
choix: {
a: "Recevoir des mises à jour périodiques de la direction",
b: "Recevoir et évaluer les réponses de la direction et les plans d'action",
c: "Faire part des observations et recommandations aux niveaux appropriés de la direction",
d: "Faire rapport aux organismes externes sur l'état des réponses",
},
reponse: "d",
explication: `       L'AAI ne rapporte pas aux organismes externes sauf obligation légale ; le suivi est interne.
    `,
},
{
numero: 99,
question: "Quel élément ne constitue pas une raison valable pour le client de ne pas appliquer la recommandation ?",
choix: {
a: "Le coût de mise en œuvre est supérieur à l'avantage reçu",
b: "L'audit interne est soumis à des contraintes financières",
c: "Plus de ressources que prévu étaient nécessaires",
d: "La recommandation n'aurait pas fonctionné",
},
reponse: "b",
explication: `       Les contraintes financières de l'audit interne n'affectent pas la décision du client d'implémenter la recommandation.
    `,
},
{
numero: 100,
question: "Un client a accepté une recommandation mais le résultat a été un échec. Que devrait faire le RAI ?",
choix: {
a: "Décider si une autre mission est nécessaire pour déterminer la nature de l'échec",
b: "Ne rien faire",
c: "Discuter avec le vérificateur externe",
d: "Signaler immédiatement au comité d’audit",
},
reponse: "a",
explication: ` Le RAI doit évaluer si un suivi ou une mission supplémentaire est nécessaire pour analyser la cause de l'échec.
    `,
},
];
