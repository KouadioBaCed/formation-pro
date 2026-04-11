export interface Question {
  id: number;
  question: string;
  options: string[];
  solution: string;
  explication: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Laquelle des professions concomitantes suivantes pourrait sembler porter atteinte au comportement éthique d'un auditeur interne ?",
    options: [
      "Auditeur interne et membre auxiliaire du corps professoral d'une école de commerce locale.",
      "Auditeur interne et président local du conseil d'administration d'un organisme de bienfaisance.",
      "Auditeur interne et courtier en assurance des entreprises à temps partiel.",
      "Auditeur interne et propriétaire d'immeubles d'habitation à logements multiples."
    ],
    solution: "Auditeur interne et courtier en assurance des entreprises à temps partiel.",
    explication: "Selon la règle de conduite 2.1 du principe d’objectivité, l’auditeur interne ne doit pas participer à une activité susceptible de compromettre son jugement impartial. Être courtier en assurance peut créer un conflit d’intérêts."
  },
  {
    id: 2,
    question: "Quel élément un code de conduite devrait-il contenir pour améliorer son efficacité ?",
    options: [
      "Examen périodique et reconnaissance par tous les employés.",
      "Implication des salariés dans son développement.",
      "Dispositions prévoyant des mesures disciplinaires en cas de violation.",
      "Connaissance publique de son contenu."
    ],
    solution: "Dispositions prévoyant des mesures disciplinaires en cas de violation.",
    explication: "La présence de sanctions dissuade les comportements inappropriés et renforce l’efficacité du code."
  },
  {
    id: 3,
    question: "Selon le Code d'éthique de l'IIA, quel principe s'applique à l'établissement de la confiance ?",
    options: [
      "Confidentialité.",
      "Compétence.",
      "Intégrité.",
      "Objectivité."
    ],
    solution: "Intégrité.",
    explication: "Le principe d’intégrité établit la confiance et constitue la base du jugement professionnel."
  },
  {
    id: 4,
    question: "Dans leur communication des résultats, les auditeurs internes doivent :",
    options: [
      "Obtenir des informations factuelles dans les délais.",
      "Divulguer uniquement les informations obtenues à la date finale.",
      "Révéler les faits importants pouvant fausser le rapport s’ils ne sont pas divulgués.",
      "Présenter des informations sans révéler de données confidentielles."
    ],
    solution: "Révéler les faits importants pouvant fausser le rapport s’ils ne sont pas divulgués.",
    explication: "La règle 2.3 impose de divulguer tous les faits importants pour éviter toute présentation trompeuse."
  },
  {
    id: 5,
    question: "Un auditeur interne omet d’informer la direction d’une activité potentiellement illégale faute de preuves. A-t-il enfreint les normes ?",
    options: [
      "Oui, il aurait dû signaler à un organisme de réglementation.",
      "Non, il répondra aux questions si nécessaire.",
      "Oui, il doit informer les autorités compétentes si une fraude peut être signalée.",
      "Non, la confidentialité prime sur tout."
    ],
    solution: "Oui, il doit informer les autorités compétentes si une fraude peut être signalée.",
    explication: "L’auditeur a l’obligation d’informer les autorités compétentes lorsqu’il existe des indicateurs suffisants de fraude."
  },
  {
    id: 6,
    question: "Quelles normes s'étendent aux autres catégories de normes ?",
    options: [
      "Normes de qualification.",
      "Normes de mise en œuvre.",
      "Normes de fonctionnement.",
      "Toutes les réponses sont correctes."
    ],
    solution: "Normes de mise en œuvre.",
    explication: "Les normes de mise en œuvre complètent les normes de qualification et de fonctionnement."
  },
  {
    id: 7,
    question: "Quels sont les types de services fournis par l’activité d’audit interne ?",
    options: [
      "Audit et conseil.",
      "Audit et assurance.",
      "Assurance et conseil.",
      "Vérification et mission."
    ],
    solution: "Assurance et conseil.",
    explication: "Selon la définition de l’audit interne, les services fournis sont l’assurance et la consultation."
  },
  {
    id: 8,
    question: "Lequel des éléments suivants est permis en vertu du Code d'éthique de l'IIA ?",
    options: [
      "Utiliser des informations d’audit pour acheter des actions.",
      "Divulguer des informations confidentielles en réponse à une citation à comparaître.",
      "Ne pas informer le conseil d’activités illégales.",
      "Accepter un cadeau d’un employé audité."
    ],
    solution: "Divulguer des informations confidentielles en réponse à une citation à comparaître.",
    explication: "Les auditeurs doivent respecter la loi et se conformer aux obligations légales telles qu’une citation à comparaître."
  },
  {
    id: 9,
    question: "Un auditeur interne omet une pratique douteuse après avis juridique indiquant qu’elle ne viole pas le contrat. A-t-il enfreint le code ?",
    options: [
      "Non, il a suivi le personnel approprié et aucune fraude n’a été confirmée.",
      "Oui, il devait consulter un conseiller juridique externe.",
      "Non, la fraude doit être résolue au niveau divisionnaire.",
      "Oui, toute information importante doit être signalée."
    ],
    solution: "Non, il a suivi le personnel approprié et aucune fraude n’a été confirmée.",
    explication: "L’auditeur n’a pas délibérément dissimulé des faits importants et a obtenu un avis juridique suffisant."
  },
  {
    id: 10,
    question: "Un auditeur découvre des inefficacités dans le service d’achat dirigé par son meilleur ami. Que doit-il faire ?",
    options: [
      "Ne pas signaler par loyauté.",
      "Informer uniquement son ami.",
      "Inclure objectivement les faits dans la communication de mission.",
      "Ne signaler que si c’est illégal."
    ],
    solution: "Inclure objectivement les faits dans la communication de mission.",
    explication: "Le principe d’objectivité impose de divulguer tous les faits importants indépendamment des relations personnelles."
  },
  {
    id: 11,
    question: "Lequel des éléments suivants constitue le plus probablement une violation du Code de déontologie de l'IIA ?",
    options: [
      "Un auditeur ne suit aucune formation professionnelle continue depuis trois ans.",
      "Un auditeur accepte une mission dans une division qu’il auditait auparavant comme auditeur externe.",
      "Un auditeur accepte une mission future et s’inscrit à une formation avant son exécution.",
      "Un auditeur discute d’une fraude corrigée avec l’auditeur externe."
    ],
    solution: "Un auditeur ne suit aucune formation professionnelle continue depuis trois ans.",
    explication: "La règle 4.3 (principe de compétence) exige l’amélioration continue des compétences. Ne suivre aucune formation constitue une violation."
  },
  {
    id: 12,
    question: "Dans la mesure 1 prise par le RAI, quels éléments sont jugés inappropriés ?",
    options: [
      "1 et 3.",
      "1 et 2.",
      "1 seulement.",
      "2 et 3."
    ],
    solution: "1 et 2.",
    explication: "Le RAI a modifié l’étendue du travail sans consulter le conseil et a omis des observations négatives, ce qui viole la règle 2.3."
  },
  {
    id: 13,
    question: "Quel élément devrait être inclus dans l’énoncé des objectifs d’une charte d’audit interne ?",
    options: [
      "Communiquer tous les résultats au conseil chaque trimestre.",
      "Avertir les organismes gouvernementaux des pratiques contraires à l’éthique.",
      "Évaluer la pertinence et l’efficacité des contrôles de l’organisation.",
      "Soumettre des rapports mensuels sur les écarts budgétaires."
    ],
    solution: "Évaluer la pertinence et l’efficacité des contrôles de l’organisation.",
    explication: "La charte définit la mission d’évaluation des processus de gestion des risques, de contrôle et de gouvernance."
  },
  {
    id: 14,
    question: "Un auditeur divulgue à un ami proche (directeur financier) une information confidentielle sur son remplacement. Y a-t-il violation ?",
    options: [
      "Non, aucun gain personnel.",
      "Oui, il n’a pas fait preuve de prudence avec une information confidentielle.",
      "Non, il était simplement honnête.",
      "Oui, il y avait conflit d’intérêts."
    ],
    solution: "Oui, il n’a pas fait preuve de prudence avec une information confidentielle.",
    explication: "La règle 3.1 exige la prudence dans l’utilisation des informations confidentielles."
  },
  {
    id: 15,
    question: "Quelle situation constitue le plus probablement une violation du Code de déontologie de l'IIA ?",
    options: [
      "Signaler un crime violent aux autorités.",
      "Signaler directement aux organismes gouvernementaux des infractions antitrust.",
      "Signaler au conseil des violations apparentes des lois antitrust.",
      "Collaborer à une enquête criminelle."
    ],
    solution: "Signaler directement aux organismes gouvernementaux des infractions antitrust.",
    explication: "L’auditeur doit d’abord signaler au conseil. Aller directement aux autorités peut violer les obligations organisationnelles."
  },
  {
    id: 16,
    question: "Quelle est la source d’autorité permettant à l’auditeur interne de contacter des unités extérieures ?",
    options: [
      "La charte de l’activité d’audit interne.",
      "Les normes.",
      "Les politiques et procédures.",
      "Le Code d’éthique."
    ],
    solution: "La charte de l’activité d’audit interne.",
    explication: "La charte définit l’autorité et l’accès aux informations internes et externes."
  },
  {
    id: 17,
    question: "Selon le principe d’intégrité du Code de l’IIA, les auditeurs doivent :",
    options: [
      "Ne rien accepter pouvant nuire à leur jugement.",
      "Respecter et contribuer aux objectifs légitimes et éthiques de l’organisation.",
      "Améliorer continuellement leur compétence.",
      "Protéger les informations acquises."
    ],
    solution: "Respecter et contribuer aux objectifs légitimes et éthiques de l’organisation.",
    explication: "La règle 1.4 impose de respecter et contribuer aux objectifs légitimes et éthiques."
  },
  {
    id: 18,
    question: "Lequel des éléments suivants n’est PAS un principe fondamental de l’audit interne ?",
    options: [
      "Être objectif et indépendant.",
      "Démontrer la qualité et l’amélioration continue.",
      "Éliminer les processus de gestion des risques inadéquats.",
      "S’aligner sur les stratégies et objectifs de l’organisation."
    ],
    solution: "Éliminer les processus de gestion des risques inadéquats.",
    explication: "L’audit interne évalue les risques, mais c’est la direction qui élimine les processus inadéquats."
  },
  {
    id: 19,
    question: "Quelle est la fonction la plus appropriée d’une réunion régulière du personnel d’audit interne ?",
    options: [
      "Réviser les politiques de rémunération.",
      "Expliquer les politiques administratives et obtenir les suggestions du personnel.",
      "Élaborer le calendrier de mission.",
      "Élaborer des programmes de formation à long terme."
    ],
    solution: "Expliquer les politiques administratives et obtenir les suggestions du personnel.",
    explication: "Les réunions servent à clarifier les questions administratives et encourager les échanges."
  },
  {
    id: 20,
    question: "Un nouvel auditeur effectue une mission hors de son domaine sans supervision. Quelle est la conclusion ?",
    options: [
      "Violation pour mauvaise embauche.",
      "Violation pour absence de supervision adéquate.",
      "Aucune violation.",
      "Le Code ne traite pas de la supervision."
    ],
    solution: "Violation pour absence de supervision adéquate.",
    explication: "Les normes exigent une supervision adéquate (Norme 2340) et une exécution compétente des missions."
  },
  {
    id: 21,
    question: "Pour éviter les malentendus, les clients de la mission doivent :",
    options: [
      "Être informés du but, des pouvoirs et des responsabilités de l'activité d’audit interne.",
      "Définir le niveau d'autorité requis par les auditeurs internes pour chaque mission.",
      "Établir la position de l'activité d’audit interne au sein de l'organisation.",
      "Autoriser l'accès aux dossiers, au personnel et aux biens matériels pertinents."
    ],
    solution: "Être informés du but, des pouvoirs et des responsabilités de l'activité d’audit interne.",
    explication: "La charte d’audit interne définit les objectifs, l’autorité et les responsabilités. Elle est approuvée par le conseil et permet d’éviter les malentendus concernant l’accès aux informations."
  },
  {
    id: 22,
    question: "Laquelle des actions suivantes pourrait être interprétée comme une violation du Code de déontologie de l'IIA ?",
    options: [
      "Inclure un problème de contrôle interne corrigé avant la fin de la mission.",
      "Transmettre un cas suspect au service de sécurité sans preuve formelle.",
      "Exprimer une opinion sur des états financiers internes.",
      "Ne pas communiquer à la direction des informations importantes pour son jugement."
    ],
    solution: "Ne pas communiquer à la direction des informations importantes pour son jugement.",
    explication: "La règle 2.3 impose de divulguer tous les faits importants. Omettre une information significative peut fausser le rapport."
  },
  {
    id: 23,
    question: "Selon le Code de déontologie de l'IIA, quels sont les quatre principes fondamentaux ?",
    options: [
      "Intégrité, objectivité, confidentialité et compétence.",
      "Confiance, communication, valeur et performance.",
      "Jugement, intérêt, autorité et expérience.",
      "Dépendance, évaluation, information et service."
    ],
    solution: "Intégrité, objectivité, confidentialité et compétence.",
    explication: "Les quatre principes fondamentaux du Code d’éthique de l’IIA sont l’intégrité, l’objectivité, la confidentialité et la compétence."
  },
  {
    id: 24,
    question: "Un directeur propose un paiement pour omettre des observations importantes du rapport final. Que doit faire l’auditeur interne ?",
    options: [
      "Refuser le paiement car cela viole le Code d’éthique.",
      "Accepter car cela correspond aux pratiques locales.",
      "Accepter car cela profite à toutes les parties.",
      "Refuser le paiement mais omettre les observations."
    ],
    solution: "Refuser le paiement car cela viole le Code d’éthique.",
    explication: "La règle 2.2 interdit d’accepter tout avantage susceptible d’altérer le jugement professionnel."
  },
  {
    id: 25,
    question: "Un aspect essentiel de l’objectivité exige de :",
    options: [
      "Ne pas utiliser d’informations confidentielles à des fins illégales.",
      "Respecter les lois pertinentes.",
      "Éviter les conflits d’intérêts.",
      "Maintenir un niveau d’expertise approprié."
    ],
    solution: "Éviter les conflits d’intérêts.",
    explication: "L’objectivité implique l’indépendance et l’absence de conflits d’intérêts pouvant influencer le jugement."
  },
  {
    id: 26,
    question: "Quelle action serait contraire à l’éthique lorsqu’un employé demande l’anonymat pour signaler des informations sensibles ?",
    options: [
      "Informer l’employé d’autres canaux de communication.",
      "Suggérer de consulter un conseiller juridique.",
      "Promettre de tenter de garder la source confidentielle.",
      "Garantir l’anonymat absolu."
    ],
    solution: "Garantir l’anonymat absolu.",
    explication: "Un auditeur interne ne peut garantir l’anonymat. Il doit divulguer les faits importants conformément à la règle 2.3."
  },
  {
    id: 27,
    question: "Respecter la loi et effectuer les divulgations prévues relève du principe de :",
    options: [
      "Compétence.",
      "Objectivité.",
      "Intégrité.",
      "Responsabilité."
    ],
    solution: "Intégrité.",
    explication: "Le principe d’intégrité impose de respecter la loi et d’effectuer les divulgations requises."
  },
  {
    id: 28,
    question: "Un chef de division offre un cadeau de valeur modérée après une mission réussie. Que prévoit le Code d’éthique ?",
    options: [
      "Toujours refuser si la valeur est importante.",
      "Refuser si cela peut altérer ou sembler altérer le jugement.",
      "Toujours accepter si la valeur est faible.",
      "Refuser uniquement avant le rapport final."
    ],
    solution: "Refuser si cela peut altérer ou sembler altérer le jugement.",
    explication: "La règle 2.2 interdit d’accepter tout élément pouvant compromettre ou sembler compromettre l’objectivité."
  },
  {
    id: 29,
    question: "Quelle activité est la moins susceptible d’affecter négativement le comportement éthique d’un auditeur interne ?",
    options: [
      "Discuter des résultats de mission avec des parties externes.",
      "Recevoir une rémunération d’une organisation professionnelle pour du conseil.",
      "Être consultant pour un fournisseur.",
      "Être consultant pour un concurrent."
    ],
    solution: "Recevoir une rémunération d’une organisation professionnelle pour du conseil.",
    explication: "Les organisations professionnelles ne créent généralement pas de conflit d’intérêts direct avec l’employeur."
  },
  {
    id: 30,
    question: "Les auditeurs internes doivent faire preuve de prudence dans leurs relations externes principalement afin de :",
    options: [
      "Éviter toute discussion sur les missions.",
      "Préserver la confidentialité et éviter les conflits d’intérêts.",
      "Augmenter leurs opportunités professionnelles.",
      "Améliorer la réputation personnelle."
    ],
    solution: "Préserver la confidentialité et éviter les conflits d’intérêts.",
    explication: "Les règles 2.1, 2.2 et 3.1 imposent d’éviter les conflits d’intérêts et de protéger les informations obtenues."
  },
  {
    id: 30,
    question: "Toutes les activités suivantes seraient considérées comme des services de conseil, à l'exception de :",
    options: {
      A: "Former les employés au nouveau système de comptes débiteurs.",
      B: "Fournir une opinion sur l'affirmation de la direction concernant la rentabilité du secteur.",
      C: "Examiner et recommander des améliorations des contrôles de trésorerie.",
      D: "Estimer les économies réalisées grâce à l'externalisation de la paie."
    },
    correctAnswer: "B",
    explanation:
      "Donner une opinion sur la rentabilité constitue un service d’assurance (assurance engagement), et non un service de conseil."
  },
  {
    id: 31,
    question: "Les objectifs des normes comprennent tous les éléments suivants, sauf :",
    options: {
      A: "Adhésion aux éléments obligatoires de l'IPPF.",
      B: "Établir une base pour mesurer les performances de l’audit interne.",
      C: "Favoriser l’amélioration des processus organisationnels.",
      D: "Guider la conduite éthique des auditeurs internes."
    },
    correctAnswer: "D",
    explanation:
      "La conduite éthique est encadrée par le Code de déontologie, et non par les Normes."
  },
  {
    id: 32,
    question: "La nature et le périmètre d'une mission d’assurance sont déterminés par :",
    options: {
      A: "Le client de la mission.",
      B: "La direction générale.",
      C: "Le conseil.",
      D: "L’auditeur interne."
    },
    correctAnswer: "D",
    explanation:
      "La nature et la portée d’une mission d’assurance sont déterminées par l’auditeur interne."
  },
  {
    id: 33,
    question: "Quelle action est la plus susceptible de violer le Code de déontologie de l’IIA ?",
    options: {
      A: "Être payé pour enseigner l’audit.",
      B: "Utiliser le titre CIA en dehors du contexte professionnel.",
      C: "Accepter un cadeau modéré d’un client.",
      D: "Détenir une participation importante dans un concurrent."
    },
    correctAnswer: "C",
    explanation:
      "Accepter un cadeau peut compromettre ou sembler compromettre l’objectivité de l’auditeur."
  },
  {
    id: 34,
    question: "Quelle divulgation constituerait une violation du Code de déontologie ?",
    options: {
      A: "Mettre en œuvre une méthode d’échantillonnage utilisée chez l’ancien employeur.",
      B: "Utiliser des recherches personnelles sur les meilleures pratiques.",
      C: "Appliquer une approche d’évaluation des risques utilisée précédemment.",
      D: "Aucune des réponses."
    },
    correctAnswer: "D",
    explanation:
      "Aucune de ces actions ne constitue une violation car elles relèvent de bonnes pratiques professionnelles générales."
  },
  {
    id: 35,
    question: "Le code de déontologie d’une organisation professionnelle énonce :",
    options: {
      A: "Une base de mesure de performance.",
      B: "Des normes générales de conduite pour ses membres.",
      C: "La structure de l’organe directeur.",
      D: "Une liste d’activités illégales."
    },
    correctAnswer: "B",
    explanation:
      "Le code de déontologie établit les valeurs et normes de conduite applicables aux membres."
  },
  {
    id: 36,
    question: "Le moyen le plus efficace de protéger la position organisationnelle de l’audit interne est :",
    options: {
      A: "Faire approuver la charte par le conseil.",
      B: "Élaborer des procédures écrites.",
      C: "Adopter des politiques internes.",
      D: "Créer un comité d’audit."
    },
    correctAnswer: "A",
    explanation:
      "La charte d’audit interne doit être approuvée par le conseil pour garantir son indépendance."
  },
  {
    id: 37,
    question: "Selon le Code de déontologie, une entité fournissant des services d’audit interne doit :",
    options: {
      A: "Maintenir des exigences fixes en personnel.",
      B: "Participer à une formation continue formelle.",
      C: "Se conformer aux Normes internationales.",
      D: "Respecter la politique organisationnelle."
    },
    correctAnswer: "C",
    explanation:
      "Le Code exige le respect des Normes internationales pour la pratique professionnelle."
  },
  {
    id: 38,
    question: "Quelle situation viole le principe de compétence ?",
    options: {
      A: "Conseiller un membre de la famille de vendre des actions.",
      B: "Ne pas suivre la formation nécessaire pour la mission.",
      C: "Ne pas déclarer certains revenus.",
      D: "Accepter des cadeaux significatifs."
    },
    correctAnswer: "B",
    explanation:
      "Un auditeur ne doit fournir des services que s’il possède les compétences nécessaires."
  },
  {
    id: 39,
    question: "Quelle situation viole le principe de confidentialité ?",
    options: {
      A: "Divulgation suite à une ordonnance judiciaire.",
      B: "Divulgation d’un secret commercial à un membre de la famille.",
      C: "Signaler une déficience au comité d’audit.",
      D: "Fournir des états financiers avec autorisation du CFO."
    },
    correctAnswer: "B",
    explanation:
      "Divulguer des informations confidentielles à un membre de la famille viole le principe de confidentialité."
  },
  {
    id: 40,
    question: "L'objet, l'autorité et la responsabilité de l'activité d'audit interne sont formellement définis dans :",
    options: {
      A: "Une charte formelle et écrite.",
      B: "Un protocole d'accord.",
      C: "Les statuts de la société.",
      D: "Les procès-verbaux du conseil d'administration."
    },
    correctAnswer: "A",
    explanation:
      "La mission, l'autorité et les responsabilités de l’audit interne doivent être définies dans une charte écrite conforme à l’IPPF."
  },
  {
    id: 41,
    question: "Quelles normes s’appliquent aux caractéristiques des prestataires de services d’audit interne ?",
    options: {
      A: "Normes de qualification.",
      B: "Normes de mise en œuvre.",
      C: "Normes de fonctionnement.",
      D: "Normes d'indépendance."
    },
    correctAnswer: "A",
    explanation:
      "Les normes de qualification décrivent les caractéristiques requises des organisations et individus fournissant des services d’audit interne."
  },
  {
    id: 42,
    question: "Un RAI signale une fraude potentielle du CFO au comité d’audit. Il :",
    options: {
      A: "A violé le principe d'objectivité.",
      B: "A maintenu le principe d'intégrité.",
      C: "A violé le principe d'intégrité.",
      D: "A violé le principe de confidentialité."
    },
    correctAnswer: "B",
    explanation:
      "Signaler une fraude potentielle démontre honnêteté et responsabilité, respectant ainsi le principe d’intégrité."
  },
  {
    id: 43,
    question: "Quelle situation viole le principe de compétence ?",
    options: {
      A: "Reporter la formation continue pendant 12 mois.",
      B: "Suivre une formation avant une mission.",
      C: "Embaucher un RAI expérimenté dans le secteur.",
      D: "Superviser un audit avec expérience pertinente."
    },
    correctAnswer: "A",
    explanation:
      "Les auditeurs doivent continuellement améliorer leurs compétences. Reporter la formation viole ce principe."
  },
  {
    id: 44,
    question: "Un CIA accepte un cadeau important d’un fournisseur après signature d’un contrat. Cela :",
    options: {
      A: "Ne viole pas le Code car le contrat est signé.",
      B: "Est permis si ce n’est pas inhabituel.",
      C: "Relève uniquement du code interne de l’organisation.",
      D: "Viole le Code de déontologie de l’IIA."
    },
    correctAnswer: "D",
    explanation:
      "Accepter un cadeau important peut compromettre l’objectivité, ce qui viole le Code de déontologie."
  },
  {
    id: 45,
    question: "Les règles de conduite du Code de déontologie de l’IIA :",
    options: {
      A: "Décrivent les normes de comportement attendues.",
      B: "Ne s’appliquent qu’aux comportements mentionnés.",
      C: "Sont des lignes directrices pour les missions.",
      D: "Sont interprétées par les Principes."
    },
    correctAnswer: "A",
    explanation:
      "Les règles de conduite définissent les normes de comportement attendues des auditeurs internes."
  },
  {
    id: 46,
    question: "Un auditeur divulgue les salaires d’employés à un directeur logistique. Quel principe est violé ?",
    options: {
      A: "Confidentialité.",
      B: "Compétence.",
      C: "Objectivité.",
      D: "Autorité."
    },
    correctAnswer: "A",
    explanation:
      "Divulguer des informations sensibles sans autorisation viole le principe de confidentialité."
  },
  {
    id: 47,
    question: "L'exigence d’accomplir son travail avec honnêteté et diligence relève de quel principe ?",
    options: {
      A: "Compétence.",
      B: "Confidentialité.",
      C: "Intégrité.",
      D: "Objectivité."
    },
    correctAnswer: "C",
    explanation:
      "Le principe d’intégrité exige honnêteté, diligence et responsabilité."
  },
  {
    id: 48,
    question: "Quel élément ne doit PAS être inclus dans la charte d’audit interne ?",
    options: {
      A: "Autorisation donnée au conseil d’approuver la charte.",
      B: "Accès aux dossiers et au personnel.",
      C: "Définition du périmètre des activités.",
      D: "Relation fonctionnelle entre le RAI et le conseil."
    },
    correctAnswer: "A",
    explanation:
      "Le conseil possède déjà l’autorité d’approuver la charte ; cela n’a pas besoin d’être inclus."
  },
  {
    id: 49,
    question: "Quel est le but principal de l’audit interne ?",
    options: {
      A: "Ajouter de la valeur et améliorer les opérations.",
      B: "Concevoir les systèmes de gestion des risques.",
      C: "Évaluer uniquement le système comptable.",
      D: "Servir les auditeurs externes."
    },
    correctAnswer: "A",
    explanation:
      "L’audit interne est une activité indépendante visant à ajouter de la valeur et améliorer les opérations."
  },
  {
    id: 50,
    question: "Si un client conteste la portée d’une mission d’audit qualité, l’auditeur doit :",
    options: {
      A: "Demander à la direction de trancher.",
      B: "Mettre fin à la mission.",
      C: "Se référer à la charte et au plan approuvé.",
      D: "Limiter la mission aux normes qualité."
    },
    correctAnswer: "C",
    explanation:
      "La charte d’audit interne approuvée par le conseil définit la portée des missions."
  },
  {
    id: 51,
    question:
      "Un auditeur interne effectue une mission dans une filiale étrangère. Lequel des énoncés suivants est faux concernant les missions internationales ?",
    options: {
      A: "Les normes de l'IIA ne s'appliquent pas à l'extérieur des États-Unis.",
      B: "L'auditeur interne doit vérifier la conformité aux lois locales.",
      C: "Il est préférable que des auditeurs multilingues réalisent les missions internationales.",
      D: "Des politiques différentes peuvent être justifiées dans des succursales étrangères."
    },
    correctAnswer: "A",
    explanation:
      "Les normes de l’IIA s’appliquent sans limite géographique. Elles doivent être respectées quel que soit le pays."
  },
  {
    id: 52,
    question:
      "Un auditeur interne prépare des déclarations fiscales pendant la saison d'impôt. Dans quel cas est-il le plus susceptible de violer le Code de déontologie de l’IIA ?",
    options: {
      A: "Donner un séminaire fiscal rémunéré en soirée.",
      B: "Préparer gratuitement les déclarations de personnes âgées.",
      C: "Préparer, moyennant honoraires, la déclaration d’un directeur de division de son organisation.",
      D: "Rédiger un guide fiscal destiné au public."
    },
    correctAnswer: "C",
    explanation:
      "Préparer la déclaration d’un dirigeant interne contre rémunération peut compromettre l’objectivité et créer un conflit d’intérêts."
  },
  {
    id: 53,
    question:
      "Un auditeur interne a transmis des informations confidentielles à un parent. Quelle est l’action la plus appropriée pour le RAI ?",
    options: {
      A: "Ne rien faire car l’auditeur n’a pas tiré profit personnel.",
      B: "Le congédier immédiatement et informer l’IIA.",
      C: "Le réprimander verbalement.",
      D: "Informer le conseil de l’IIA et appliquer les mesures disciplinaires internes."
    },
    correctAnswer: "D",
    explanation:
      "Il s’agit d’une violation du principe de confidentialité. Le cas doit être signalé à l’IIA et traité selon la politique organisationnelle."
  },
  {
    id: 54,
    question:
      "Laquelle des activités suivantes est la plus acceptable selon le Code de déontologie de l’IIA ?",
    options: {
      A: "Accepter un cadeau important d’un fournisseur.",
      B: "Entretenir des relations sociales fréquentes avec des fournisseurs sans autorisation.",
      C: "Exploiter une activité indépendante en dehors des heures de travail.",
      D: "Arriver régulièrement en retard parce que c’est courant."
    },
    correctAnswer: "C",
    explanation:
      "Une activité externe non liée, exercée hors heures de travail et sans conflit d’intérêts, est acceptable."
  },
  {
    id: 55,
    question:
      "Quelle est une responsabilité de l'activité d’audit interne ?",
    options: {
      A: "Évaluer les risques.",
      B: "Éliminer les risques.",
      C: "Contrôler les risques.",
      D: "Gérer les risques."
    },
    correctAnswer: "A",
    explanation:
      "L’audit interne évalue et améliore les processus de gestion des risques. La gestion et l’élimination relèvent de la direction."
  },
  {
    id: 56,
    question:
      "Un auditeur interne accepte de siéger au conseil d’une banque concurrente. Cela :",
    options: {
      A: "Viole uniquement le point 2.",
      B: "Viole uniquement le point 1.",
      C: "Ne viole ni le point 1 ni le point 2.",
      D: "Viole les points 1 et 2."
    },
    correctAnswer: "D",
    explanation:
      "Siéger au conseil d’une banque concurrente crée un conflit d’intérêts et nuit à l’objectivité."
  },
  {
    id: 57,
    question:
      "Quel élément d’autorité doit figurer dans la charte d’audit interne ?",
    options: {
      A: "Accès aux dossiers des auditeurs externes.",
      B: "Accès aux dossiers, au personnel et aux biens pertinents.",
      C: "Liste des unités à auditer.",
      D: "Exemples d’informations à fournir au comité d’audit."
    },
    correctAnswer: "B",
    explanation:
      "La charte doit autoriser l’accès aux dossiers, au personnel et aux biens nécessaires à l’exécution des missions."
  },
  {
    id: 58,
    question:
      "Le Code de déontologie exige que les auditeurs internes exécutent leur travail avec :",
    options: {
      A: "Connaissances et compétences.",
      B: "Rapidité et clarté.",
      C: "Ponctualité et objectivité.",
      D: "Honnêteté, diligence et responsabilité."
    },
    correctAnswer: "D",
    explanation:
      "Le principe d’intégrité impose honnêteté, diligence et responsabilité."
  },
  {
    id: 59,
    question:
      "Quel élément doit être inclus dans la charte d’audit interne ?",
    options: {
      A: "La responsabilité de l’audit interne.",
      B: "Le nombre minimum d’auditeurs.",
      C: "Le plan de rémunération du RAI.",
      D: "L’objectivité individuelle des auditeurs."
    },
    correctAnswer: "A",
    explanation:
      "La mission, l’autorité et la responsabilité doivent être définies dans la charte."
  },
  {
    id: 60,
    question:
      "Une mission à l’étranger révèle des paiements à des fonctionnaires en échange de commandes. Que doit faire l’auditeur interne ?",
    options: {
      A: "Signaler aux autorités réglementaires.",
      B: "Informer le conseil de l’IIA.",
      C: "Ne rien faire pour protéger l’organisation.",
      D: "Informer les responsables organisationnels appropriés."
    },
    correctAnswer: "D",
    explanation:
      "Le Code exige de divulguer les faits importants aux responsables organisationnels appropriés."
  },
  {
    id: 61,
    question:
      "Lequel des énoncés suivants n'est pas approprié à inclure dans la politique sur les conflits d'intérêts d'un fabricant ? L'employé ne doit pas :",
    options: {
      A: "Utiliser l'information organisationnelle à des fins privées.",
      B: "Participer (directement ou indirectement) à la gestion d'un organisme public.",
      C: "Emprunter ou prêter de l'argent aux fournisseurs.",
      D: "Accepter de l'argent, des cadeaux ou des services d'un client."
    },
    correctAnswer: "B",
    explanation:
      "Une interdiction de service public est inappropriée. Le service public est un droit ou un devoir civique."
  },
  {
    id: 62,
    question:
      "Au cours d'une mission, un auditeur interne découvre qu'un commis détourne des fonds. L'auditeur interroge le suspect. Quelle règle du Code de déontologie de l'IIA pourrait être violée ?",
    options: {
      A: "Non-respect de la loi.",
      B: "Manque de loyauté envers l'organisation.",
      C: "Manque de compétences dans ce domaine.",
      D: "Manquement à l'obligation de diligence raisonnable."
    },
    correctAnswer: "C",
    explanation:
      "Selon la règle 4.1 du principe de compétence, l'auditeur ne doit fournir que des services pour lesquels il possède les compétences et l'expérience nécessaires. L'interrogation de suspects peut nécessiter des compétences spécialisées en enquête de fraude."
  },
  {
    id: 63,
    question:
      "Le RAI est invité par un associé d'un cabinet externe pour une semaine de chasse à son pavillon privé. Que doit faire le RAI ?",
    options: {
      A: "Refuser en raison d'un conflit d'intérêts.",
      B: "Accepter si leurs horaires le permettent.",
      C: "Demander au contrôleur si l'invitation constitue une violation du code.",
      D: "Accepter tant qu'il n'est pas imputé au temps de l'employeur."
    },
    correctAnswer: "A",
    explanation:
      "Selon la règle 2.1 et 2.2 du principe d'objectivité, accepter une telle invitation pourrait nuire à l'évaluation impartiale et au jugement professionnel."
  },
  {
    id: 64,
    question:
      "Quel est le soutien le plus important pour le succès de l'activité d’audit interne ?",
    options: {
      A: "Le comité d'audit.",
      B: "La direction et le conseil d'administration.",
      C: "Le président-directeur général.",
      D: "Le chef de la direction et le chef des finances."
    },
    correctAnswer: "B",
    explanation:
      "Le soutien conjoint de la direction et du conseil d'administration est crucial, surtout lorsque surviennent des conflits avec les fonctions auditées."
  },
  {
    id: 65,
    question:
      "Selon le Cadre international des pratiques professionnelles de l'IIA, quel élément constitue une orientation obligatoire pour la mise en œuvre des normes ?",
    options: {
      A: "Normes de fonctionnement.",
      B: "Guides de mise en œuvre.",
      C: "Aides à la pratique.",
      D: "Aides au développement."
    },
    correctAnswer: "A",
    explanation:
      "Les normes de fonctionnement font partie des éléments obligatoires de l'IPPF. Les guides de mise en œuvre sont recommandés mais non obligatoires."
  },
  {
    id: 66,
    question:
      "Une entreprise embauche de nouveaux diplômés pour des postes d’audit interne. Quelle pratique n’appuie pas la règle de conduite sur la compétence ?",
    options: {
      A: "Séminaire annuel sur les mises à jour des normes et directives de l'IIA.",
      B: "Faire appel à des conférenciers motivateurs pour inspirer les employés.",
      C: "Cours de formation continue obligatoire pour tous les employés professionnels.",
      D: "Programme de formation pour auditeurs débutants."
    },
    correctAnswer: "B",
    explanation:
      "Bien que motivants, les conférenciers inspireurs n'améliorent pas les connaissances et compétences techniques nécessaires."
  },
  {
    id: 67,
    question:
      "Lors d’un examen des subventions, des attributions ont été approuvées rétroactivement par le président. Que doit faire l’auditeur interne ?",
    options: {
      A: "Inclure les éléments dans la communication comme dérogation aux contrôles et enquêter sur les fraudes.",
      B: "Signaler la dérogation de contrôle au conseil d'administration.",
      C: "Discuter de la raison avec le président et omettre la communication si les subventions sont de routine.",
      D: "Ne pas déclarer les subventions car elles ont été approuvées avant la communication."
    },
    correctAnswer: "B",
    explanation:
      "Le principe d'objectivité exige de signaler tout fait important qui pourrait fausser le rapport. Le conseil d'administration doit être informé de la violation des contrôles."
  },
  {
    id: 68,
    question:
      "Le Code de déontologie de l'IIA comprend deux éléments essentiels. Lequel des éléments ci-dessous en fait partie ?",
    options: {
      A: "Principes pertinents pour la profession et la pratique de l’audit interne.",
      B: "Activités fournissant des services d’assurance et de conseil.",
      C: "Critères de qualité pour l’évaluation de la performance de l’audit interne.",
      D: "Gouvernance des responsabilités et actions de l’activité d’audit interne."
    },
    correctAnswer: "A",
    explanation:
      "Le Code d’éthique inclut (1) les principes pour la profession et (2) les règles de conduite définissant le comportement attendu des auditeurs internes."
  },
  {
    id: 69,
    question:
      "“Les auditeurs internes doivent faire preuve de prudence dans l'utilisation et la protection des informations acquises dans l'exercice de leurs fonctions” relève de quel principe fondamental ?",
    options: {
      A: "Assurance fondée sur les risques.",
      B: "Compétence.",
      C: "Divulgation.",
      D: "Confidentialité."
    },
    correctAnswer: "D",
    explanation:
      "La règle 3.1 sous le principe de confidentialité stipule que les auditeurs doivent protéger les informations obtenues dans le cadre de leurs fonctions."
  },
  {
    id: 70,
    question:
      "Lors d’un examen des frais de déplacement, un agent rembourse indûment certaines dépenses et promet de ne plus réclamer. Que doit faire l’auditeur interne ?",
    options: {
      A: "Informer l'administration fiscale.",
      B: "Ignorer l’imputation initiale.",
      C: "Inclure la constatation dans la communication finale de la mission.",
      D: "Recommander que l’agent renonce aux milles de grand voyageur."
    },
    correctAnswer: "C",
    explanation:
      "Le principe d'objectivité (règle 2.3) exige de divulguer tous les faits importants, même si l’agent corrige son comportement."
  },
  {
    id: 71,
    question:
      "Lequel des énoncés suivants viole le principe fondamental de confidentialité du Code d'éthique de l'IIA ?",
    options: {
      A: "La charte d'audit interne prévoit la communication des atteintes à l’indépendance.",
      B: "L'auditeur interne achète des actions après avoir pris connaissance d'états financiers non publiés.",
      C: "Un auditeur demande de l'aide à un collègue sur la même mission.",
      D: "Le RAI enquête sur des frais de déplacement suspects."
    },
    correctAnswer: "B",
    explanation:
      "La règle 3.2 du principe de confidentialité interdit l'utilisation d'informations obtenues dans le cadre professionnel à des fins personnelles. L'achat d'actions constitue un délit d'initié."
  },
  {
    id: 72,
    question:
      "Une organisation nomme un RAI non membre de l’IIA et décide de ne pas suivre les normes de l’IIA. Quelle est la meilleure ligne de conduite pour les auditeurs internes membres de l’IIA ?",
    options: {
      A: "Ignorer les normes et suivre uniquement les directives internes.",
      B: "Démissionner immédiatement.",
      C: "Se conformer aux Normes internationales pour la pratique professionnelle de l’audit interne.",
      D: "Ne rien faire car ils ne sont pas CIA."
    },
    correctAnswer: "C",
    explanation:
      "Les membres de l’IIA doivent respecter les Normes internationales, conformément à la règle 4.2 du principe de compétence."
  },
  {
    id: 73,
    question:
      "Le RAI est mieux défini comme :",
    options: {
      A: "Le responsable de la fonction d’audit interne.",
      B: "Un prestataire externe d’audit.",
      C: "Un superviseur de contrat d’audit externe.",
      D: "Un inspecteur général."
    },
    correctAnswer: "A",
    explanation:
      "Le RAI est le cadre supérieur responsable de la gestion efficace de l’activité d’audit interne conformément à la charte."
  },
  {
    id: 74,
    question:
      "Pourquoi le RAI doit-il organiser une formation sectorielle avant l’audit d’une société nouvellement acquise ?",
    options: {
      A: "Pour protéger la confidentialité.",
      B: "Pour renforcer l’intégrité.",
      C: "Parce que les auditeurs n’ont pas les connaissances nécessaires.",
      D: "Pour éviter de fausser les rapports."
    },
    correctAnswer: "C",
    explanation:
      "Le principe de compétence exige que les auditeurs possèdent les connaissances, compétences et expériences nécessaires."
  },
  {
    id: 75,
    question:
      "La charte d’audit interne comprend tous les éléments suivants, sauf :",
    options: {
      A: "Les valeurs fondamentales et la vision de l’organisation.",
      B: "La responsabilité de fournir des services d’assurance et de conseil.",
      C: "La définition des pouvoirs et responsabilités.",
      D: "La relation fonctionnelle du RAI avec le conseil."
    },
    correctAnswer: "A",
    explanation:
      "La charte définit la mission, les pouvoirs et responsabilités de l’audit interne, mais pas la vision ou les valeurs globales de l’organisation."
  },
  {
    id: 76,
    question:
      "Un code éthique pour les gestionnaires financiers exige tout sauf :",
    options: {
      A: "L’indépendance vis-à-vis des conflits d’intérêts professionnels.",
      B: "La subjectivité dans la présentation des informations.",
      C: "L’intégrité professionnelle.",
      D: "L’indépendance vis-à-vis des conflits économiques."
    },
    correctAnswer: "B",
    explanation:
      "Un code éthique exige l’objectivité et non la subjectivité dans la présentation des informations."
  },
  {
    id: 77,
    question:
      "L’autorité de l’activité d’audit interne est accordée par :",
    options: {
      A: "La charte et le contrôleur.",
      B: "La direction et le conseil d’administration.",
      C: "Les normes uniquement.",
      D: "Le directeur financier."
    },
    correctAnswer: "B",
    explanation:
      "La mission, les pouvoirs et responsabilités sont formellement définis dans la charte approuvée par la direction et le conseil."
  },
  {
    id: 78,
    question:
      "Quel cadeau un auditeur interne peut-il accepter sans violer le Code de déontologie ?",
    options: {
      A: "Des billets sportifs d’un service audité.",
      B: "Une bouteille offerte par le directeur financier.",
      C: "Un dîner d’un service en cours d’audit.",
      D: "Un stylo promotionnel de faible valeur."
    },
    correctAnswer: "D",
    explanation:
      "Un petit article promotionnel de valeur négligeable n’est pas susceptible d’influencer le jugement professionnel."
  },
  {
    id: 79,
    question:
      "La meilleure raison d’établir un code de conduite dans une organisation est :",
    options: {
      A: "Évaluer quantitativement le personnel.",
      B: "Répondre à une exigence gouvernementale.",
      C: "Exprimer les normes de comportement attendues.",
      D: "Améliorer l’image publique."
    },
    correctAnswer: "C",
    explanation:
      "Un code de conduite établit des normes éthiques et des lignes directrices pour guider les comportements."
  },
  {
    id: 80,
    question:
      "Quel principe fondamental est violé si un auditeur assume temporairement des tâches opérationnelles, audite le service d’un proche ou reçoit un bonus basé sur les constats ?",
    options: {
      A: "Intégrité.",
      B: "Compétence.",
      C: "Indépendance.",
      D: "Objectivité."
    },
    correctAnswer: "D",
    explanation:
      "Le principe d’objectivité exige une évaluation impartiale et l’absence de conflits d’intérêts réels ou apparents."
  },
  {
    id: 81,
    question:
      "Lequel des énoncés suivants fait partie des Règles de conduite de l'IIA en matière de compétence ?",
    options: {
      A: "Divulguer tous les faits importants pouvant fausser le rapport.",
      B: "Respecter et contribuer aux objectifs légitimes et éthiques de l'organisation.",
      C: "S'engager uniquement dans les services pour lesquels ils possèdent les connaissances, compétences et expérience nécessaires.",
      D: "Faire preuve de prudence dans l'utilisation et la protection des informations obtenues."
    },
    correctAnswer: "C",
    explanation:
      "La règle 4.1 relative à la compétence stipule que les auditeurs internes ne doivent fournir que les services pour lesquels ils possèdent les connaissances, compétences et expérience nécessaires."
  },
  {
    id: 82,
    question:
      "Le degré de conformité volontaire avec le code d'éthique adopté par une organisation est une mesure de :",
    options: {
      A: "La culture éthique de l'organisation.",
      B: "L'intégrité des professionnels.",
      C: "Les normes de compétence.",
      D: "La cohésion et du professionnalisme de l'organisation."
    },
    correctAnswer: "D",
    explanation:
      "Le degré de conformité volontaire reflète la cohésion et le professionnalisme d'une organisation, au-delà de la simple existence d’un code."
  },
  {
    id: 83,
    question:
      "Laquelle des activités suivantes serait considérée comme un service d'assurance par les auditeurs internes ?",
    options: {
      A: "Collaborer avec un gestionnaire pour promouvoir un changement organisationnel.",
      B: "Aider à préparer des déclarations fiscales.",
      C: "Donner une formation sur les contrôles des stocks.",
      D: "Donner un avis au conseil sur la structure de la dette d’une acquisition."
    },
    correctAnswer: "D",
    explanation:
      "Les services d’assurance impliquent une évaluation objective pour fournir une opinion ou une conclusion à une tierce partie, comme le conseil d’administration."
  },
  {
    id: 84,
    question:
      "Après approbation du conseil pour offrir des services de conseil, que faut-il faire ?",
    options: {
      A: "Obtenir l’approbation des auditeurs internes.",
      B: "Modifier la charte d’audit interne.",
      C: "Laisser le conseil établir les procédures.",
      D: "Commencer immédiatement les missions de conseil."
    },
    correctAnswer: "B",
    explanation:
      "La nature des services de conseil doit être formellement définie dans la charte d’audit interne conformément aux normes."
  },
  {
    id: 85,
    question:
      "Laquelle des situations suivantes constitue une violation du Code de déontologie de l'IIA ?",
    options: {
      A: "Omettre volontairement une pratique illégale dans le rapport final.",
      B: "Accepter un cadeau symbolique sans influence sur le jugement.",
      C: "Partager des techniques avec d'autres auditeurs internes.",
      D: "Investir dans un fonds commun de placement du même secteur."
    },
    correctAnswer: "A",
    explanation:
      "La règle 2.3 exige de divulguer tous les faits importants. Omettre une pratique illégale viole les principes d’objectivité et d’intégrité."
  },
  {
    id: 86,
    question:
      "Dans leurs rapports, les auditeurs internes sont tenus de :",
    options: {
      A: "Divulguer tous les faits importants pouvant fausser le rapport.",
      B: "Divulguer toute information obtenue.",
      C: "Respecter les délais et budgets établis.",
      D: "Fournir des informations sans révéler d’éléments confidentiels."
    },
    correctAnswer: "A",
    explanation:
      "La règle 2.3 du principe d’objectivité exige la divulgation de tous les faits importants pouvant influencer le rapport."
  },
  {
    id: 87,
    question:
      "Pourquoi l'activité d’audit interne devrait-elle refuser d'examiner les spécifications d’un nouvel entrepôt ?",
    options: {
      A: "Relations personnelles entre dirigeants.",
      B: "La mission ne relève pas de la charte d’audit interne.",
      C: "Un audit récent a déjà été effectué.",
      D: "Impact budgétaire faible."
    },
    correctAnswer: "B",
    explanation:
      "L’autorité de l’audit interne est définie par la charte approuvée par le conseil. Toute mission hors périmètre doit être refusée."
  },
  {
    id: 88,
    question:
      "Un auditeur découvre des erreurs dans ses documents de travail mais choisit de ne rien dire. Quel principe est violé ?",
    options: {
      A: "Compétence.",
      B: "Respect de la loi.",
      C: "Confidentialité.",
      D: "Intégrité."
    },
    correctAnswer: "D",
    explanation:
      "La règle 1.1 exige que le travail soit exécuté avec honnêteté, diligence et responsabilité. Ne pas corriger les erreurs viole le principe d’intégrité."
  },
  {
    id: 89,
    question:
      "Laquelle des situations suivantes constitue une violation du Code de déontologie de l'IIA ?",
    options: {
      A: "Acheter des actions après avoir appris le lancement d’un nouveau produit confidentiel.",
      B: "Présenter un programme d’audit lors d’une réunion professionnelle.",
      C: "Offrir un service de conseil à une organisation non concurrente.",
      D: "Divulguer des informations confidentielles suite à une obligation légale."
    },
    correctAnswer: "A",
    explanation:
      "Utiliser une information confidentielle pour un gain personnel viole la règle 3.2 du principe de confidentialité."
  },
  {
    id: 90,
    question:
      "Les Règles de conduite du Code de déontologie de l'IIA sont :",
    options: {
      A: "Organisées selon intégrité, autorité, capacité et objectivité.",
      B: "Destinées à guider la conduite éthique des auditeurs internes.",
      C: "Utilisées pour mesurer la conformité aux principes fondamentaux.",
      D: "Utilisées pour approuver la nomination du RAI."
    },
    correctAnswer: "B",
    explanation:
      "Les règles de conduite interprètent les principes fondamentaux (intégrité, objectivité, confidentialité, compétence) et guident la conduite éthique des auditeurs internes."
  },
  {
    id: 91,
    question:
      "Le but de l'activité d’audit interne peut être décrit comme suit :",
    options: {
      A: "Formuler un avis sur la conception et le fonctionnement du contrôle interne.",
      B: "Fournir une assurance supplémentaire sur la présentation fidèle des états financiers.",
      C: "S'assurer de l'absence de fraude ayant un impact significatif.",
      D: "Ajouter de la valeur à l'organisation."
    },
    correctAnswer: "D",
    explanation:
      "Selon la définition de l’audit interne, il s’agit d’une activité indépendante et objective d’assurance et de conseil conçue pour ajouter de la valeur et améliorer les opérations d’une organisation."
  },
  {
    id: 92,
    question:
      "Un auditeur interne découvre que le directeur marketing a une habitude de jeu sans lien direct avec la mission et informe le RAI sans suivi. Ses actions :",
    options: {
      A: "Violent les normes pour absence de suivi d’un signal de fraude.",
      B: "Violent le Code pour dissimulation d'information.",
      C: "Violent à la fois le Code et les Normes.",
      D: "Ne violent ni le Code ni les Normes."
    },
    correctAnswer: "D",
    explanation:
      "L’auditeur a transmis l'information au RAI. Il n’a ni dissimulé l’information ni violé les Normes."
  },
  {
    id: 93,
    question:
      "Quel est l'un des principaux objectifs d'un code d'éthique pour une association professionnelle ?",
    options: {
      A: "Fournir un cadre pour élaborer des conventions comptables.",
      B: "Définir des critères d’entrevue.",
      C: "Établir des normes techniques comptables.",
      D: "Définir les critères de comportement professionnel pour maintenir intégrité et objectivité."
    },
    correctAnswer: "D",
    explanation:
      "Le but principal d’un code d’éthique est de promouvoir une culture éthique et de définir les standards de comportement professionnel."
  },
  {
    id: 94,
    question:
      "Quelle situation est la plus susceptible de violer le principe d'intégrité du Code d'éthique de l'IIA ?",
    options: {
      A: "Employée réduisant ses heures tout en restant productive.",
      B: "Directeur assumant la responsabilité et félicitant son équipe.",
      C: "Superviseur organisant une formation pour un employé en difficulté.",
      D: "Gestionnaire arrivant en retard et laissant un subordonné faire son travail."
    },
    correctAnswer: "D",
    explanation:
      "Le gestionnaire ne respecte pas ses responsabilités et manque d’intégrité en laissant un subordonné assumer sa charge de travail."
  },
  {
    id: 95,
    question:
      "Face à un dilemme éthique non explicitement abordé dans le Code, l’auditeur interne devrait :",
    options: {
      A: "Consulter systématiquement un avocat.",
      B: "Suivre uniquement le code de l’organisation.",
      C: "Demander l’avis du conseil.",
      D: "Appliquer les principes du Code de déontologie de l’IIA."
    },
    correctAnswer: "D",
    explanation:
      "Les auditeurs internes doivent appliquer et respecter les principes d’intégrité, objectivité, confidentialité et compétence."
  },
  {
    id: 96,
    question:
      "Laquelle des situations suivantes constitue une violation du Code de déontologie de l'IIA ?",
    options: {
      A: "La direction retire des commentaires du rapport.",
      B: "Signaler une défaillance comme étant celle du client alors qu’elle provient d’un contrôle recommandé.",
      C: "Ne pas inclure des faits immatériels.",
      D: "Réduire des tests sur instruction de la direction."
    },
    correctAnswer: "B",
    explanation:
      "Attribuer à tort la défaillance au client viole l’obligation de divulguer fidèlement tous les faits importants."
  },
  {
    id: 97,
    question:
      "Un code d’éthique officiel devrait faire tout ce qui suit, sauf :",
    options: {
      A: "Communiquer les valeurs à l’extérieur.",
      B: "Prévoir des sanctions disciplinaires.",
      C: "Se limiter uniquement aux normes légales minimales.",
      D: "Communiquer les valeurs aux membres."
    },
    correctAnswer: "C",
    explanation:
      "Un code d’éthique doit aller au-delà de la simple conformité légale et promouvoir des standards éthiques élevés."
  },
  {
    id: 98,
    question:
      "Lequel des énoncés définit le mieux les services de conseil ?",
    options: {
      A: "Politiques et procédures de contrôle.",
      B: "Examen objectif pour fournir une évaluation indépendante.",
      C: "Activités visant à ajouter de la valeur et améliorer les processus sans responsabilité de gestion.",
      D: "Approche systématique pour atteindre les objectifs."
    },
    correctAnswer: "C",
    explanation:
      "Les services de conseil visent à ajouter de la valeur et améliorer les processus sans que l’auditeur interne n’assume de responsabilités de gestion."
  },
  {
    id: 99,
    question:
      "Lors d’une mission d’assurance, combien de parties participent ?",
    options: {
      A: "Une.",
      B: "Trois.",
      C: "Deux.",
      D: "Toute l’organisation."
    },
    correctAnswer: "B",
    explanation:
      "Trois parties interviennent : le propriétaire du processus, l’auditeur interne et l’utilisateur du rapport."
  },
  {
    id: 100,
    question:
      "Pour se conformer au Code de déontologie de l'IIA, l’auditeur interne doit :",
    options: {
      A: "Appliquer principalement le principe de compétence.",
      B: "Faire preuve de jugement individuel dans l'application des principes.",
      C: "Respecter les objectifs même s’ils sont illégaux.",
      D: "Aller au-delà de ses compétences techniques."
    },
    correctAnswer: "B",
    explanation:
      "L’application des principes du Code nécessite un jugement professionnel individuel, même si toutes les situations ne sont pas explicitement mentionnées."
  }
];
