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
    question: "Un facteur qui distingue la fraude des autres crimes commis par les employés est que la fraude implique",
    options: [
      "La tromperie intentionnelle.",
      "Gain personnel pour l'auteur de l'infraction.",
      "Collusion avec une partie extérieure à l'organisation.",
      "Motifs malveillants."
    ],
    solution: "La tromperie intentionnelle.",
    explication: "La fraude est définie dans le Glossaire de l'IIA comme tout acte illégal caractérisé par la tromperie, la dissimulation ou l'abus de confiance. Ces actes ne dépendent pas de la menace de violence ou de force physique."
  },
  {
    id: 2,
    question: "La caractéristique importante qui distingue la fraude des autres formes de criminalité en col blanc est que",
    options: [
      "La fraude se caractérise par la tromperie, la dissimulation ou l'abus de confiance.",
      "Contrairement aux autres crimes en col blanc, la fraude est toujours perpétrée contre un tiers.",
      "Les crimes en col blanc sont généralement perpétrés au profit d'une organisation, mais la fraude profite à un individu.",
      "Les crimes en col blanc sont généralement perpétrés par des personnes de l'extérieur au détriment d'une organisation, mais la fraude est perpétrée par des personnes de l'intérieur au profit de l'organisation."
    ],
    solution: "La fraude se caractérise par la tromperie, la dissimulation ou l'abus de confiance.",
    explication: "La fraude est définie dans le Glossaire de l'IIA comme tout acte illégal caractérisé par la tromperie, la dissimulation ou l'abus de confiance. La fraude peut être commise à l'interne ou à l'externe, et peut être bénéfique ou préjudiciable à une organisation."
  },
  {
    id: 3,
    question: "Une caractéristique clé qui distingue la fraude des autres types de crimes ou d'irrégularités est que la fraude implique toujours",
    options: [
      "Prise violente ou par la force de biens.",
      "Actes répréhensibles frauduleux à l'égard du personnel d'encadrement.",
      "La conversion illégale de biens qui sont légalement sous la garde de l'auteur de l'infraction.",
      "Fausse représentation ou dissimulation d'un fait important."
    ],
    solution: "Fausse représentation ou dissimulation d'un fait important.",
    explication: "La fraude est définie dans le Glossaire de l'IIA comme tout acte illégal caractérisé par la tromperie, la dissimulation ou l'abus de confiance. Ces actes ne dépendent pas de la menace de violence ou de force physique."
  },
  {
    id: 4,
    question: "Quelle est la responsabilité de l'auditeur interne en matière de fraude ?",
    options: [
      "L'auditeur interne devrait avoir suffisamment de connaissances pour identifier les indicateurs de fraude, mais il n'est pas censé être un expert.",
      "L'auditeur interne devrait avoir la même capacité de détection de la fraude qu'une personne dont la responsabilité première est de détecter et d'enquêter sur la fraude.",
      "Un auditeur interne doit avoir des connaissances et une formation suffisante pour être en mesure de détecter les fraudes.",
      "Le rôle premier d'un auditeur interne est de détecter et d'enquêter sur les fraudes."
    ],
    solution: "L'auditeur interne devrait avoir suffisamment de connaissances pour identifier les indicateurs de fraude, mais il n'est pas censé être un expert.",
    explication: "Les vérificateurs internes doivent avoir des connaissances suffisantes pour évaluer le risque de fraude et la façon dont il est géré par l'organisation. On ne s'attend pas à ce qu'ils possèdent l'expertise d'une personne dont la responsabilité première est de détecter et d'enquêter sur la fraude (Impl. Std. 1210.A2)."
  },
  {
    id: 5,
    question: "Parmi les facteurs suivants, lesquels n'ont généralement pas été associés à la fraude en gestion ?",
    options: [
      "Des systèmes de récompense généreux basés sur la performance.",
      "Une gestion dominatrice.",
      "Comparaison régulière des résultats réels et des budgets.",
      "Préoccupation de la direction à l'égard de l'amélioration du rendement financier."
    ],
    solution: "Comparaison régulière des résultats réels et des budgets.",
    explication: "La comparaison régulière des résultats réels par rapport aux budgets fournit une rétroaction et constitue un élément normal et nécessaire de la boucle de contrôle. Un contrôle inefficace est un indicateur de fraude possible."
  },
  {
    id: 6,
    question: "Lors de l'audit de l'attribution d'un marché important, lequel des éléments suivants un auditeur interne devrait-il soupçonner comme un signal d'alarme dans le cadre d'un système de fraude à l'appel d'offres ?",
    options: [
      "Les ordres de modification subséquents augmentent les exigences relatives aux articles à bas prix.",
      "Les exigences du contrat important sont différentes dans le contrat réel que dans l'appel d'offres.",
      "Un pourcentage élevé d'employés sont imputés aux comptes indirects.",
      "Les soumissionnaires perdants ne reçoivent pas de rétroaction."
    ],
    solution: "Les exigences du contrat important sont différentes dans le contrat réel que dans l'appel d'offres.",
    explication: "Il est frauduleux que les exigences du contrat important de l'appel d'offres diffèrent de celles du contrat réel. Ce type de fraude gonfle le montant des soumissions en imposant des exigences plus favorables aux soumissionnaires dans l'appel d'offres que dans le contrat lui-même."
  },
  {
    id: 7,
    question: "Une entreprise de distribution a découvert qu'il manquait des quantités importantes d'articles dans les camions de livraison. Lequel des énoncés suivants suggère une faiblesse du contrôle qui pourrait donner lieu à de la fraude ?",
    options: [
      "Le manuel des politiques et des procédures définit clairement les actions autorisées et interdites.",
      "Des comptages soigneux sont effectués au fur et à mesure que l'inventaire est chargé dans les camions.",
      "L'accès à l'entrepôt est limité à quelques employés de confiance.",
      "Les conducteurs de camions sont autorisés à utiliser les camions pour des raisons personnelles, y compris pour les ramener à la maison la nuit, à titre d'avantage professionnel."
    ],
    solution: "Les conducteurs de camions sont autorisés à utiliser les camions pour des raisons personnelles, y compris pour les ramener à la maison la nuit, à titre d'avantage professionnel.",
    explication: "L'accès illimité aux camions crée des possibilités de vol de marchandises par les chauffeurs."
  },
  {
    id: 8,
    question: "Dans une organisation ayant une division distincte principalement responsable de la prévention de la fraude, l'activité d'audit interne a les responsabilités suivantes :",
    options: [
      "Examiner et évaluer la pertinence et l'efficacité des mesures prises par cette division pour prévenir la fraude.",
      "Établir et maintenir le système de contrôle interne de cette division.",
      "Planification des activités de prévention de la fraude de cette division.",
      "Contrôler les activités de prévention de la fraude de cette division."
    ],
    solution: "Examiner et évaluer la pertinence et l'efficacité des mesures prises par cette division pour prévenir la fraude.",
    explication: "Le contrôle est le principal moyen de prévenir la fraude. La direction est principalement responsable de l'établissement et du maintien du contrôle. Les vérificateurs internes sont principalement responsables de prévenir la fraude en examinant et en évaluant le caractère adéquat et l'efficacité des contrôles."
  },
  {
    id: 9,
    question: "Lequel des actes fautifs suivants commis par un employé constitue une fraude ?",
    options: [
      "Diffamation.",
      "Détournement de fonds.",
      "Agression.",
      "Harcèlement."
    ],
    solution: "Détournement de fonds.",
    explication: "Le détournement de fonds est l'appropriation intentionnelle de biens confiés à ses soins. L'escroc convertit les biens pour son propre usage et cache le vol. La diffamation, l'agression et le harcèlement ne correspondent pas à la définition de la fraude."
  },
  {
    id: 10,
    question: "Le chef de la sécurité a reçu un appel anonyme accusant un directeur marketing d'avoir reçu des pots-de-vin. S'il n'est pas possible d'obtenir l'accès aux dossiers et au personnel des médias extérieurs, la meilleure mesure qu'un auditeur interne pourrait prendre est la suivante :",
    options: [
      "Recherche de passifs non enregistrés dans les médias.",
      "Obtenir une liste des médias approuvés.",
      "Établir un profil financier et comportemental du suspect.",
      "Vérification de toutes les radiations de créances importantes passées."
    ],
    solution: "Établir un profil financier et comportemental du suspect.",
    explication: "Un indicateur courant de fraude par un employé est un changement inexpliqué de sa situation financière. Un niveau de vie qui n'est pas proportionnel au revenu de l'employé peut constituer un acte répréhensible. Le profil peut aider à corroborer les revenus illégaux."
  },
  {
    id: 11,
    question: "Après avoir noté quelques signaux d'alerte, un auditeur interne est de plus en plus conscient qu'il peut y avoir fraude. Lequel des énoncés suivants décrit le mieux sa responsabilité ?",
    options: [
      "Élargir les activités pour déterminer si une enquête est justifiée.",
      "Signaler la possibilité de fraude à la direction générale et au conseil et leur demander comment ils aimeraient procéder.",
      "Consulter un conseiller juridique externe pour déterminer la marche à suivre.",
      "Signaler l'affaire au comité d'audit et demander des fonds à des fournisseurs de services externes."
    ],
    solution: "Élargir les activités pour déterminer si une enquête est justifiée.",
    explication: "Les responsabilités d'un auditeur interne en matière de détection des fraudes consistent notamment à évaluer les indicateurs de fraude et à décider si des mesures supplémentaires sont nécessaires ou si une enquête doit être recommandée."
  },
  {
    id: 12,
    question: "Un auditeur interne qui soupçonne une fraude devrait :",
    options: [
      "Déterminer qu'une perte a été subie.",
      "Interviewer les personnes qui ont participé au contrôle des actifs.",
      "Identifier les employés qui pourraient être impliqués dans l'affaire.",
      "Recommander une enquête s'il y a lieu."
    ],
    solution: "Recommander une enquête s'il y a lieu.",
    explication: "Les responsabilités d'un auditeur interne en matière de détection des fraudes consistent notamment à évaluer les indicateurs de fraude et à décider si des mesures supplémentaires sont nécessaires ou si une enquête doit être recommandée."
  },
  {
    id: 13,
    question: "Pour une organisation internationale à but non lucratif finançant la recherche médicale, laquelle des fraudes possibles suivantes devrait être considérée comme le secteur présentant le plus grand risque ?",
    options: [
      "Le président utilise les fonds de déplacement et de divertissement de l'entreprise pour des activités douteuses.",
      "Les achats de fournitures sont effectués auprès de vendeurs fictifs.",
      "Les subventions sont accordées à des organisations associées au président ou non destinées à des fins dictées dans la charte.",
      "Le commis à la paie a ajouté des employés fantômes."
    ],
    solution: "Les subventions sont accordées à des organisations associées au président ou non destinées à des fins dictées dans la charte.",
    explication: "Les subventions représentent 83,6 % (418 $ ÷ 500 $) des revenus courants. Par conséquent, les subventions frauduleuses constituent un risque beaucoup plus élevé que tous les autres éléments énumérés."
  },
  {
    id: 14,
    question: "Les auditeurs internes sont plus susceptibles de déceler la fraude en développant ou en renforçant leur capacité à",
    options: [
      "Reconnaître et remettre en question les changements qui surviennent dans les organisations.",
      "Interroger les fraudeurs pour découvrir pourquoi la fraude a été commise.",
      "Élaborer des contrôles internes pour prévenir la fraude.",
      "Documenter les programmes du système d'exploitation informatisé."
    ],
    solution: "Reconnaître et remettre en question les changements qui surviennent dans les organisations.",
    explication: "Les responsabilités d'un auditeur interne en matière de détection des fraudes consistent notamment à évaluer les indicateurs de fraude et à décider si des mesures supplémentaires sont nécessaires ou si une enquête doit être recommandée. Les signaux de danger de fraude impliquent souvent des changements organisationnels négatifs."
  },
  {
    id: 15,
    question: "Lorsqu'un auditeur interne identifie des facteurs multiples liés à des conditions potentiellement frauduleuses et soupçonne qu'une fraude a eu lieu, il doit :",
    options: [
      "Faire immédiatement rapport à la direction générale et au conseil.",
      "Faire immédiatement rapport au conseil d'administration.",
      "Recommander une enquête.",
      "Étendre les tests pour déterminer l'étendue de la fraude."
    ],
    solution: "Recommander une enquête.",
    explication: "Les responsabilités d'un auditeur interne consistent à évaluer les indicateurs de fraude et à décider si des mesures supplémentaires sont nécessaires ou si une enquête doit être recommandée. Le RAI ne fait rapport à la haute direction qu'après qu'une enquête suffisante a établi avec une certitude raisonnable qu'une fraude importante a été commise."
  },
  {
    id: 16,
    question: "Un auditeur interne soupçonne qu'un commis de la salle du courrier détourne des fonds. Dans l'exercice de ses fonctions, l'auditeur interne doit :",
    options: [
      "Réaffecter le commis à un autre service.",
      "Instaurer des contrôles plus stricts sur les opérations de la salle du courrier.",
      "Évaluer les indicateurs de fraude et décider si d'autres mesures sont nécessaires.",
      "Confronter le greffier aux soupçons de l'auditeur."
    ],
    solution: "Évaluer les indicateurs de fraude et décider si d'autres mesures sont nécessaires.",
    explication: "Les responsabilités d'un auditeur interne en matière de détection des fraudes consistent notamment à évaluer les indicateurs de fraude et à décider si des mesures supplémentaires sont nécessaires ou si une enquête doit être recommandée. Un auditeur interne ne devrait pas confronter un suspect tant que les autorités compétentes n'ont pas été informées."
  },
  {
    id: 17,
    question: "Le travail sur le terrain d'un auditeur interne permet de découvrir une série d'opérations indiquant un détournement de fonds possible. Quelle mesure le RAI devrait-il prendre ?",
    options: [
      "Confronter le fraudeur présumé pour déterminer si les faits sont exacts.",
      "Examiner la conclusion avec les collègues du suspect pour voir s'ils peuvent fournir des preuves supplémentaires.",
      "Décider s'il y a lieu de recommander une enquête.",
      "Discuter de l'affaire avec le conseil."
    ],
    solution: "Décider s'il y a lieu de recommander une enquête.",
    explication: "Les responsabilités d'un auditeur interne consistent à évaluer les indicateurs de fraude et à décider si des mesures supplémentaires sont nécessaires. L'auditeur interne doit éviter de confronter des employés suspects car ils ont certains droits prévus par la loi."
  },
  {
    id: 18,
    question: "Lequel des éléments suivants décrit le mieux la responsabilité d'un auditeur après avoir relevé certains indicateurs de fraude ?",
    options: [
      "Élargir les activités pour déterminer si une enquête est justifiée.",
      "Signaler la possibilité de fraude à la direction générale et lui demander comment procéder.",
      "Consulter un conseiller juridique externe pour déterminer les mesures à prendre.",
      "Signaler l'affaire au comité d'audit et demander des fonds à des spécialistes de l'extérieur."
    ],
    solution: "Élargir les activités pour déterminer si une enquête est justifiée.",
    explication: "Les responsabilités d'un auditeur interne consistent à évaluer les indicateurs de fraude et à décider si des mesures supplémentaires sont nécessaires ou si une enquête doit être recommandée. L'auditeur ne doit informer la direction que s'il a établi que les indicateurs sont suffisants pour recommander une enquête."
  },
  {
    id: 19,
    question: "Laquelle des politiques suivantes est la plus susceptible de créer un environnement propice à la fraude ?",
    options: [
      "La préparation du budget par les employés qui sont responsables de l'exécution du budget.",
      "Objectifs de vente et de production déraisonnables.",
      "Le processus d'embauche entraîne souvent le rejet de candidats adéquatement formés.",
      "L'application de certains contrôles comptables par sondage."
    ],
    solution: "Objectifs de vente et de production déraisonnables.",
    explication: "Des ventes ou des quotas de production anormalement élevés peuvent inciter à falsifier les dossiers ou à prendre d'autres mesures inappropriées pour améliorer les mesures de rendement afin que les quotas semblent avoir été atteints."
  },
  {
    id: 20,
    question: "Une filiale présente : de bonnes marges malgré la récession, un ratio de fonds de roulement passé de 3:1 à 0,9:1, un fort roulement des postes financiers, et une politique d'approvisionnement à fournisseur unique. Lors d'un audit financier, l'auditeur interne doit :",
    options: [
      "Très probablement pas détecter 1, 2 ou 3.",
      "Ignorer 2 car l'économie a connu un ralentissement durant cette période.",
      "Considérer 3 comme un chiffre d'affaires normal, mais être préoccupé par 2 et 4 comme des signaux d'avertissement.",
      "Considérer 1, 2, 3 et 4 comme des signes avant-coureurs de fraude."
    ],
    solution: "Considérer 1, 2, 3 et 4 comme des signes avant-coureurs de fraude.",
    explication: "Des profits élevés malgré la récession peut indiquer une inexactitude dans les états financiers. L'insuffisance du fonds de roulement peut indiquer des problèmes de détournement. La rotation rapide des postes financiers et l'approvisionnement à fournisseur unique indiquent du favoritisme ou des pots-de-vin potentiels."
  },
  {
    id: 21,
    question: "Lorsqu'on compare les auteurs de détournements de fonds avec ceux d'une fraude dans les états financiers, ceux qui ont falsifié les états financiers sont moins enclins à :",
    options: [
      "Avoir fait l'expérience d'un style de gestion autocratique.",
      "Vivre au-delà de leurs moyens de subsistance évidents.",
      "Rationaliser le comportement frauduleux.",
      "Se servir des attentes de l'organisation pour justifier leurs actes."
    ],
    solution: "Vivre au-delà de leurs moyens de subsistance évidents.",
    explication: "Le fait de vivre au-delà de ses moyens a été lié à la fraude des employés (détournement de fonds), et non à la fraude dans les états financiers. La fraude perpétrée au profit de l'organisation profite habituellement indirectement à l'auteur."
  },
  {
    id: 22,
    question: "Lequel des éléments suivants ne représente pas une difficulté dans l'utilisation des signaux d'alerte comme indicateurs de fraude ?",
    options: [
      "De nombreux signaux d'alerte courants sont également associés à des situations dans lesquelles il n'y a pas de fraude.",
      "Certains signaux d'alerte sont difficiles à quantifier ou à évaluer.",
      "L'information sur les signaux d'alerte n'est pas recueillie dans le cadre d'une mission normale.",
      "La documentation sur les signaux d'alerte n'est pas suffisamment bien établie pour avoir un impact positif sur l'audit interne."
    ],
    solution: "La documentation sur les signaux d'alerte n'est pas suffisamment bien établie pour avoir un impact positif sur l'audit interne.",
    explication: "L'état de la littérature sur les signaux d'alerte est une aide, et non une difficulté, dans le domaine de la vérification interne. Il est bien établi et sera peaufiné à l'avenir au fur et à mesure que la recherche sera effectuée."
  },
  {
    id: 23,
    question: "Un auditeur interne devrait s'inquiéter de la possibilité d'une fraude dans le cas où :",
    options: [
      "Les rentrées de fonds, nettes des montants utilisés pour payer les dépenses de type petite caisse, sont déposées quotidiennement à la banque.",
      "Le rapprochement mensuel de l'état de compte bancaire est effectué par le même employé qui tient les registres d'inventaire permanents.",
      "Le grand livre auxiliaire des comptes débiteurs et des comptes créditeurs sont tenus par la même personne.",
      "Une personne, agissant seule, a seul accès à la petite caisse avec des contrôles inopinés occasionnels par un superviseur."
    ],
    solution: "Les rentrées de fonds, nettes des montants utilisés pour payer les dépenses de type petite caisse, sont déposées quotidiennement à la banque.",
    explication: "Le fait d'effectuer des dépenses de petite caisse à partir des reçus de caisse facilite le retrait non autorisé de l'argent avant le dépôt. Tous les reçus en espèces doivent être déposés intacts chaque jour. Les dépenses de petite caisse devraient être réglées au moyen d'une caisse d'avances temporaires."
  },
  {
    id: 24,
    question: "Dans le cas de John et Randy, le fait que John se soit vu confier entièrement toutes les fonctions financières sans que personne ne vérifie son travail est un exemple de :",
    options: [
      "Documenter les symptômes.",
      "Pression situationnelle.",
      "Opportunité de s'engager.",
      "Symptôme physique."
    ],
    solution: "Opportunité de s'engager.",
    explication: "La confiance totale en une personne est une occasion de commettre une fraude. Les actions de John n'ont pas fait l'objet d'un examen scrutin en raison de l'absence d'une séparation appropriée des fonctions et de sa capacité à outrepasser les procédures de contrôle en place."
  },
  {
    id: 25,
    question: "Dans le cas de John et Randy, le fait que Randy s'occupait toujours du problème le plus urgent (gestion de crise) est un exemple de :",
    options: [
      "L'occasion de s'engager.",
      "Symptôme analytique.",
      "Pression situationnelle.",
      "Rationalisation."
    ],
    solution: "L'occasion de s'engager.",
    explication: "Lorsqu'un gestionnaire s'occupe continuellement des questions les plus urgentes d'une organisation, il peut commettre une fraude. L'absence de planification à long terme crée un risque de fraude parce que les objectifs organisationnels peuvent avoir été remplacés par des initiatives individuelles."
  },
  {
    id: 26,
    question: "Dans le cas de John et Randy, les difficultés de John avec des problèmes financiers personnels constituent un exemple de :",
    options: [
      "Symptôme comportemental.",
      "Pression situationnelle.",
      "Rationalisation.",
      "L'occasion de s'engager."
    ],
    solution: "Pression situationnelle.",
    explication: "Les difficultés financières créent des pressions situationnelles ou des tentations qui peuvent contribuer à la fraude. Ces pressions situationnelles résultent d'un endettement personnel élevé, de modes de vie extravagants, de problèmes de jeu, etc."
  },
  {
    id: 27,
    question: "Dans le cas de John et Randy, le fait que John estimait qu'il avait contribué beaucoup plus au succès de l'entreprise que ce qui était représenté par son salaire est un exemple de :",
    options: [
      "Rationalisation.",
      "Symptôme comportemental.",
      "Pression situationnelle.",
      "Symptôme physique."
    ],
    solution: "Rationalisation.",
    explication: "La rationalisation se produit lorsqu'une personne attribue ses actes à des motifs rationnels et crédibles sans analyse de ses motifs réels. Le sentiment que l'on n'est pas payé autant qu'on le mérite est une rationalisation courante de la fraude de bas niveau."
  },
  {
    id: 28,
    question: "Dans le cas de John et Randy, le fait que John ait équilibré les livres comptables est un exemple de :",
    options: [
      "Symptôme physique.",
      "Symptôme analytique.",
      "Symptôme du mode de vie.",
      "Documenter les symptômes."
    ],
    solution: "Documenter les symptômes.",
    explication: "La falsification des registres comptables est un symptôme de la falsification d'un document. L'indicateur de fraude est constitué par les changements dans les registres réels de l'entreprise."
  },
  {
    id: 29,
    question: "Dans le cas de John et Randy, le fait que John ait rejoint un country club très cher est un exemple de :",
    options: [
      "Rationalisation.",
      "Symptôme lié au mode de vie.",
      "Symptôme comportemental.",
      "Symptôme physique."
    ],
    solution: "Symptôme lié au mode de vie.",
    explication: "John vivait au-dessus de ses moyens. Le changement de mode de vie était un symptôme qui indiquait la présence d'une fraude."
  },
  {
    id: 30,
    question: "Dans le cas de John et Randy, le fait que la famille de John ait observé qu'il était souvent argumentatif et déprimé est un exemple de :",
    options: [
      "Rationalisation.",
      "Symptôme lié au mode de vie.",
      "Symptôme comportemental.",
      "Symptôme physique."
    ],
    solution: "Symptôme comportemental.",
    explication: "Un changement radical dans le comportement d'un employé peut indiquer la présence d'une fraude. La culpabilité et les autres formes de stress associées à la perpétration et à la dissimulation de la fraude peuvent induire des changements de comportement notables."
  },
  {
    id: 31,
    question: "Lequel des indicateurs suivants est un indicateur d'une fraude possible en matière d'information financière perpétrée par la direction d'un fabricant ?",
    options: [
      "Une analyse des tendances révèle une augmentation des ventes de 50 % et une augmentation du coût des marchandises vendues de 25 %.",
      "Une analyse des ratios révèle que le coût des marchandises vendues représente 50 % des ventes.",
      "Une analyse transversale révèle que le pourcentage du coût des marchandises vendues de l'entreprise est de 40 % et la moyenne du secteur est de 50 %.",
      "Une analyse transversale révèle que le pourcentage du coût des marchandises vendues de l'entreprise est de 50 % et la moyenne du secteur est de 40 %."
    ],
    solution: "Une analyse des tendances révèle une augmentation des ventes de 50 % et une augmentation du coût des marchandises vendues de 25 %.",
    explication: "Une augmentation des ventes largement disproportionnée par rapport à l'augmentation du coût des marchandises vendues est un indicateur de fraude possible. L'augmentation des ventes s'accompagne habituellement d'une augmentation presque proportionnelle du coût des marchandises vendues."
  },
  {
    id: 32,
    question: "Lequel des éléments suivants indiquerait qu'il peut y avoir fraude dans un service marketing ?",
    options: [
      "Il n'y a pas de documentation pour certaines dépenses importantes faites à un nouveau fournisseur.",
      "Un directeur semble avoir un style de vie qui dépasse ce qui pourrait être fourni par le salaire d'un directeur du marketing.",
      "L'environnement de contrôle peut être décrit comme très lâche, justifié par la direction comme nécessaire à la créativité.",
      "Toutes les réponses sont correctes."
    ],
    solution: "Toutes les réponses sont correctes.",
    explication: "L'absence de documentation opportune pour les opérations importantes, les caractéristiques de style de vie suspectes des employés et l'incapacité de la direction à afficher une attitude appropriée à l'égard du contrôle interne sont tous des indicateurs de fraude possibles."
  },
  {
    id: 33,
    question: "Dans la situation du bon de commande général signé par le directeur général en faveur de son père, lequel des éléments suivants n'est PAS un symptôme de fraude ?",
    options: [
      "Le matériel acheté n'est pas reçu par le personnel autorisé de l'organisation.",
      "Les contrôles de routine sont suspendus pour certaines transactions.",
      "Le matériel acheté n'est pas livré à un endroit central dans les locaux de l'organisation.",
      "L'utilisation de commandes d'achat forfaitaires."
    ],
    solution: "L'utilisation de commandes d'achat forfaitaires.",
    explication: "L'utilisation de bons de commande globaux est une pratique commerciale normale. En revanche, la réception de biens par du personnel non organisationnel, la suspension des procédures normales et la réception de biens hors site sont des symptômes de fraude."
  },
  {
    id: 34,
    question: "Dans la situation du bon de commande général, quel est l'indicateur commun de fraude reconnu par l'auditeur interne ?",
    options: [
      "Les procédures analytiques ont révélé une augmentation extraordinaire des soldes des comptes.",
      "La peinture et les fournitures sont achetées pour un entrepreneur.",
      "L'agent acheteur sélectionne le contractant sur la base d'une commande globale.",
      "Le paiement des factures est autorisé par le directeur général."
    ],
    solution: "Les procédures analytiques ont révélé une augmentation extraordinaire des soldes des comptes.",
    explication: "Les procédures analytiques sont généralement effectuées par les auditeurs internes pour évaluer les informations recueillies. Une augmentation extraordinaire du solde d'un compte devrait être détectée et étudiée à la suite de l'application de méthodes analytiques."
  },
  {
    id: 35,
    question: "Concernant un agent de crédit bancaire soupçonné d'avoir accordé des prêts à des entités fictives, lesquels des indicateurs suivants ne sont PAS typiques de la fraude soupçonnée ?",
    options: [
      "Ne pas prendre de vacances annuelles.",
      "S'irriter facilement des demandes de renseignements des auditeurs au sujet de prêts douteux.",
      "Expliquer le niveau de vie élevé résultant des investissements.",
      "Soumettre des factures d'essence et de réparation supérieures à la moyenne de l'entreprise."
    ],
    solution: "Soumettre des factures d'essence et de réparation supérieures à la moyenne de l'entreprise.",
    explication: "Le fait de soumettre des factures d'essence et de réparation plus élevées que la moyenne n'est pas lié à l'octroi de prêts frauduleux. Ces facteurs ne sont pas contrôlables par l'agent de crédit, de sorte qu'ils ne peuvent être des indicateurs d'une activité inhabituelle de sa part."
  },
  {
    id: 36,
    question: "Lequel des indicateurs suivants est un indicateur d'un risque accru de fraude pour un contrôleur ?",
    options: [
      "Prend toutes les vacances et vient d'accepter une promotion au poste de vice-président des finances.",
      "Ne prend pas de vacances et vient d'accepter une promotion au poste de vice-président des finances.",
      "Prend toutes les vacances et refuse la promotion au poste de vice-président des finances.",
      "Ne prend pas de vacances et a refusé d'être promu au poste de vice-président des finances."
    ],
    solution: "Ne prend pas de vacances et a refusé d'être promu au poste de vice-président des finances.",
    explication: "Ne pas prendre de vacances et refuser une promotion peut indiquer une crainte de détection. Le manque apparent d'ambition n'est pas compatible avec la diligence du contrôleur."
  },
  {
    id: 37,
    question: "Un programme de comptage des cycles a été installé dans une salle de stockage. Les possibilités de fraude ont été accrues parce que :",
    options: [
      "Les articles pour le comptage des cycles sont sélectionnés par le personnel de l'entrepôt.",
      "Un programme de comptage des cycles a été installé à la place d'un programme moins efficace.",
      "Seuls neuf ajustements mineurs ont été enregistrés à la suite du processus de comptage des cycles.",
      "L'information sur le nombre de cycles est enregistrée par le personnel de la salle de stockage."
    ],
    solution: "Les articles pour le comptage des cycles sont sélectionnés par le personnel de l'entrepôt.",
    explication: "Les risques de fraude ont été accrus parce que le personnel de la salle d'entreposage sélectionne les articles en fonction du nombre de cycles (mauvais contrôle interne). La sélection des éléments doit être fondée sur des valeurs relatives, et le personnel sans responsabilités de garde devrait contrôler les dénombrements."
  },
  {
    id: 38,
    question: "Lors d'un audit d'une division, avec des ventes en hausse de 10%, coût des marchandises en hausse de 2%, stocks en hausse de 15% et bénéfice net en hausse de 8%, lequel des éléments suivants pourrait alerter l'auditeur d'une possible fraude ?",
    options: [
      "Il n'est pas prévu que la division fasse l'objet d'un audit externe cette année.",
      "Les ventes ont augmenté de 10%.",
      "Une part importante de la rémunération de la direction est directement liée au bénéfice net déclaré de la division.",
      "Toutes les réponses sont correctes."
    ],
    solution: "Une part importante de la rémunération de la direction est directement liée au bénéfice net déclaré de la division.",
    explication: "Le rendement peut être faussé parce que la promotion et la rémunération (p. ex., les primes) sont liées à la rentabilité. Les ventes ayant normalement augmenté d'environ 7%, une hausse de 10% n'est pas en soi un signal d'alerte."
  },
  {
    id: 39,
    question: "Un auditeur interne enquête sur une division dont les ventes, la marge brute et le bénéfice ont augmenté de façon inhabituellement importante. Lequel des indicateurs est le MOINS susceptible d'indiquer une fraude liée aux ventes ?",
    options: [
      "Une partie importante de la rémunération de la direction est fondée sur les bénéfices déclarés.",
      "Un nombre inhabituellement élevé de retours sur ventes est enregistré après la fin de l'exercice.",
      "L'auditeur ne peut localiser un document d'expédition pour un certain nombre de transactions de vente sélectionnées pour novembre et décembre.",
      "Un des principaux concurrents de la division a fait faillite au cours de l'année."
    ],
    solution: "Un des principaux concurrents de la division a fait faillite au cours de l'année.",
    explication: "Une diminution du nombre de concurrents au cours de l'exercice pourrait expliquer l'augmentation des ventes et des bénéfices, ce qui constitue une explication légitime ne suggérant pas de fraude."
  },
  {
    id: 40,
    question: "Lequel des éléments suivants est le plus susceptible d'être considéré comme une indication de fraude possible ?",
    options: [
      "Le remplacement de l'équipe de direction après une prise de contrôle hostile.",
      "Roulement rapide des cadres financiers de l'organisation.",
      "Expansion rapide sur de nouveaux marchés.",
      "Une vérification gouvernementale des déclarations de revenus de l'organisme."
    ],
    solution: "Roulement rapide des cadres financiers de l'organisation.",
    explication: "Un taux de roulement élevé des cadres financiers peut suggérer une tendance à l'inflation des profits pour obtenir des primes, pour obtenir des avantages sur le marché ou pour dissimuler de l'incompétence ou des actions irréfléchies."
  },
  {
    id: 41,
    question: "Lequel des éléments suivants n'est pas considéré comme un signal d'alarme (drapeau rouge) ?",
    options: [
      "La direction a délégué le pouvoir d'effectuer des achats d'une valeur inférieure à une certaine valeur à des subordonnés.",
      "Une personne a occupé le même poste de manutention de l'argent pendant une période prolongée sans rotation des fonctions.",
      "Une personne qui manipule des titres négociables est responsable d'effectuer les achats, d'enregistrer les achats et de signaler tout écart.",
      "L'attribution des responsabilités au sein du service des comptes débiteurs n'est pas claire."
    ],
    solution: "La direction a délégué le pouvoir d'effectuer des achats d'une valeur inférieure à une certaine valeur à des subordonnés.",
    explication: "La délégation du pouvoir d'effectuer des achats d'une certaine valeur à des subordonnés est une pratique acceptable et courante qui vise à limiter les risques tout en favorisant l'efficience."
  },
  {
    id: 42,
    question: "La motivation la plus courante de la fraude en matière de gestion est l'existence de :",
    options: [
      "Vices, comme une habitude de jeu.",
      "Insatisfaction professionnelle.",
      "Pressions financières sur l'organisation.",
      "Défi de commettre le crime parfait."
    ],
    solution: "Pressions financières sur l'organisation.",
    explication: "La fraude en gestion profite aux organisations plutôt qu'aux particuliers, de sorte que l'existence de pressions financières est la motivation la plus courante. Les dirigeants tentent de rendre leurs états financiers plus attrayants en raison des pressions financières exercées par des clauses restrictives sur les prêts, une mauvaise situation de trésorerie, la perte de clients importants, etc."
  },
  {
    id: 43,
    question: "Laquelle des écritures frauduleuses suivantes est la plus susceptible d'être utilisée pour dissimuler le vol d'un bien ?",
    options: [
      "Débiter les dépenses et créditer l'actif.",
      "Débiter l'actif et créditer un autre compte d'actif.",
      "Débiter les revenus et créditer l'actif.",
      "Débiter un compte d'actif et créditer un autre d'actif."
    ],
    solution: "Débiter les dépenses et créditer l'actif.",
    explication: "La plupart des fraudeurs tentent de dissimuler leur vol en l'imputant à un compte de dépenses. Par conséquent, le solde de l'actif enregistré est égal au montant réel en main, et l'application de procédures à cet égard ne permettra pas de détecter le vol."
  },
  {
    id: 44,
    question: "Une mission d'audit interne à venir comporte la possibilité d'une fraude. Les normes exigent que les auditeurs internes possèdent lesquelles des compétences suivantes ?",
    options: [
      "Détenir un certificat valide d'examinateur agréé en matière de fraude.",
      "Être titulaire d'un certificat d'audit interne certifié en vigueur.",
      "Être en mesure d'identifier les indicateurs d'une éventuelle fraude.",
      "Posséder une expertise technique dans un domaine particulier de l'examen des fraudes, comme le piratage informatique."
    ],
    solution: "Être en mesure d'identifier les indicateurs d'une éventuelle fraude.",
    explication: "Les responsabilités d'un auditeur interne en matière de détection des fraudes comprennent : avoir une connaissance suffisante pour identifier les indicateurs de fraude, être attentif aux opportunités qui pourraient permettre la fraude et être en mesure d'évaluer les indicateurs pour déterminer si une enquête doit être conduite."
  },
  {
    id: 45,
    question: "Lequel des éléments suivants constitue une fraude dans les états financiers ?",
    options: [
      "Un salarié vend la liste des clients d'une organisation à un concurrent.",
      "Un entrepreneur soumissionne toujours en dernier, soumissionne le moins cher et reçoit régulièrement des contrats.",
      "La direction générale surestime l'actif et dissimule le passif.",
      "Un employé soumet une facture à l'employeur pour un achat personnel."
    ],
    solution: "La direction générale surestime l'actif et dissimule le passif.",
    explication: "La fraude dans les états financiers consiste à tromper les utilisateurs des états financiers en faussant délibérément les montants présentés ou en omettant les renseignements nécessaires. Les autres options représentent respectivement un vol d'actifs, des pots-de-vin et un déboursement frauduleux."
  },
  {
    id: 46,
    question: "Lequel des facteurs suivants pourrait le mieux indiquer la possibilité d'une activité frauduleuse dans le processus de production ?",
    options: [
      "Les heures supplémentaires des employés ont augmenté de 50 % au cours de la dernière année.",
      "Bien que la ferraille soit générée, aucun revenu n'est déclaré au titre des ventes de ferraille.",
      "Les entrevues avec les employés indiquent qu'ils sont généralement insatisfaits de la gestion.",
      "Les stocks ont diminué en même temps que le coût des marchandises vendues a augmenté."
    ],
    solution: "Bien que la ferraille soit générée, aucun revenu n'est déclaré au titre des ventes de ferraille.",
    explication: "Le détournement de biens implique le vol d'argent ou d'autres biens. Le rebut est constitué de restes d'articles issus de la production qui sont vendus s'ils ne sont pas réutilisés. L'absence de recettes provenant de la vente de ferraille est une indication de détournement."
  },
  {
    id: 47,
    question: "Lequel des exemples suivants est un exemple de décaissement frauduleux ?",
    options: [
      "Une organisation a conservé les montants retenus sur les chèques de paie des employés pour son propre usage.",
      "Un gestionnaire inclut des articles personnels dans les commandes hebdomadaires des fournisseurs de l'organisation sans remboursement.",
      "Deux amis s'arrangent pour que le premier arrivé pointe pour les deux à l'horloge.",
      "Un chauffeur de limousine demande aux clients 300 $ pour un trajet facturé 250 $ et empoche la différence."
    ],
    solution: "Un chauffeur de limousine demande aux clients 300 $ pour un trajet facturé 250 $ et empoche la différence.",
    explication: "Le décaissement frauduleux est un vol d'argent liquide avant que l'écriture comptable ne soit enregistrée, comme facturer des frais excessifs à un client et conserver la différence. Il est très difficile à détecter car il n'y a pas de piste de vérification."
  },
  {
    id: 48,
    question: "Deux employés ont été congédiés pour avoir pris de la nourriture dans la cafétéria sans la payer via le kiosque en libre-service. C'est un exemple de quel type de fraude ?",
    options: [
      "Fraude au remboursement des dépenses.",
      "Détournement de biens.",
      "Usage abusif.",
      "Détournement."
    ],
    solution: "Détournement de biens.",
    explication: "La fraude par détournement de biens consiste à voler de l'argent comptant ou d'autres biens, tels que des fournitures, des stocks, du matériel et des renseignements. Les employés qui prennent de la nourriture sans la payer seraient considérés comme une fraude par détournement de biens."
  },
  {
    id: 49,
    question: "Lequel des énoncés suivants au sujet du Check Kiting est FAUX ?",
    options: [
      "Le Check Kiting est une personne qui a accès aux paiements des clients et aux enregistrements des comptes clients et qui vole le paiement d'un client.",
      "Le Check kiting exploite le temps de flottement entre le dépôt du chèque et la compensation du chèque dans la banque.",
      "Le Check Kiting électronique est difficile en raison de l'utilisation généralisée du transfert électronique de fonds.",
      "Le processus de Check Kiting peut se dérouler dans un cercle de comptes auprès d'un nombre quelconque de banques."
    ],
    solution: "Le Check Kiting est une personne qui a accès aux paiements des clients et aux enregistrements des comptes clients et qui vole le paiement d'un client.",
    explication: "Ce qui est décrit correspond au recouvrement des créances, et non au check kiting. Le check kiting exploite le délai entre le dépôt d'un chèque et sa compensation, en écrivant des chèques de fonds insuffisants entre plusieurs comptes bancaires."
  },
  {
    id: 50,
    question: "Une fraude importante a été commise peu après une mission d'audit. L'auditeur ne s'est peut-être pas correctement acquitté de sa responsabilité en omettant de noter et de signaler que :",
    options: [
      "Les politiques de surveillance des activités étaient moins nombreuses dans les secteurs à faible risque que dans les secteurs à risque élevé.",
      "Un système de contrôle qui dépend de la séparation des tâches pourrait être contourné par collusion entre trois employés.",
      "Il n'y avait pas de politiques écrites décrivant les activités interdites et les mesures à prendre lorsque des infractions sont découvertes.",
      "Les employés n'avaient pas reçu la formation nécessaire pour faire la distinction entre les signatures authentiques et les signatures falsifiées."
    ],
    solution: "Il n'y avait pas de politiques écrites décrivant les activités interdites et les mesures à prendre lorsque des infractions sont découvertes.",
    explication: "L'environnement de contrôle d'un programme de prévention de la fraude comprend un code de conduite, une politique en matière d'éthique pour donner le ton approprié au sommet. Les organisations devraient mettre en place des pratiques efficaces d'information et de communication sur la fraude."
  },
  {
    id: 51,
    question: "Les auditeurs internes ont la responsabilité d'aider à prévenir la fraude. Lequel des énoncés suivants décrit le mieux la façon dont cette responsabilité est habituellement assumée ?",
    options: [
      "En coordonnant avec le personnel de sécurité et les organismes d'application de la loi les enquêtes sur d'éventuelles fraudes.",
      "En effectuant des tests de dépistage de la fraude dans le cadre de chaque mission.",
      "En aidant à la conception de systèmes de contrôle pour prévenir la fraude.",
      "En évaluant la pertinence et l'efficacité des contrôles à la lumière de l'exposition ou du risque potentiel."
    ],
    solution: "En évaluant la pertinence et l'efficacité des contrôles à la lumière de l'exposition ou du risque potentiel.",
    explication: "Le contrôle est le principal moyen de prévenir la fraude. Dans le cadre d'une mission de certification, les auditeurs internes sont principalement chargés de prévenir la fraude en examinant et en évaluant l'adéquation et l'efficacité du contrôle (Impl. Std. 2130.A1)."
  },
  {
    id: 52,
    question: "Lequel des énoncés suivants décrit l'une des responsabilités de l'auditeur interne en matière de dissuasion de la fraude dans une organisation ?",
    options: [
      "Mise en œuvre de systèmes visant à décourager la fraude.",
      "Poursuivre les auteurs de fraudes.",
      "Signaler les soupçons de fraude au personnel chargé de l'application de la loi.",
      "Évaluer l'adéquation des contrôles pour prévenir la fraude."
    ],
    solution: "Évaluer l'adéquation des contrôles pour prévenir la fraude.",
    explication: "L'activité de vérification interne aide l'organisation à maintenir des contrôles efficaces en évaluant leur efficacité et leur efficience et en favorisant l'amélioration continue (Perf. Std. 2130). La mise en œuvre, les poursuites et le signalement aux forces de l'ordre sont des responsabilités de la direction."
  },
  {
    id: 53,
    question: "L'audit interne est chargé de contribuer à la prévention de la fraude en :",
    options: [
      "Informant les autorités compétentes et recommandant toute enquête jugée nécessaire lorsqu'un acte répréhensible est soupçonné.",
      "Établissant la gouvernance, les opérations et les systèmes d'information concernant la conformité aux lois et règlements.",
      "Examinant et évaluant le caractère adéquat et l'efficacité du contrôle, en fonction de l'ampleur de l'exposition ou du risque potentiel.",
      "Déterminant si les normes d'exploitation sont acceptables et respectées."
    ],
    solution: "Examinant et évaluant le caractère adéquat et l'efficacité du contrôle, en fonction de l'ampleur de l'exposition ou du risque potentiel.",
    explication: "L'activité de vérification interne aide l'organisation à maintenir des contrôles efficaces en évaluant leur efficacité et leur efficience et en favorisant l'amélioration continue (Perf. Std. 2130)."
  },
  {
    id: 54,
    question: "La responsabilité des auditeurs internes à l'égard de la fraude comprend tous les éléments suivants, À L'EXCEPTION de :",
    options: [
      "Déterminer si l'environnement de contrôle donne le ton approprié en haut.",
      "S'assurer qu'il n'y aura pas de fraude.",
      "Connaître les activités dans lesquelles une fraude est susceptible de se produire.",
      "Évaluer l'efficacité des activités de contrôle."
    ],
    solution: "S'assurer qu'il n'y aura pas de fraude.",
    explication: "Le contrôle est le principal moyen de prévention de la fraude et la direction est responsable de l'établissement et du maintien du contrôle interne. Par conséquent, les vérificateurs internes ne peuvent donner l'assurance absolue qu'il n'y a pas de non-conformité ou de fraude."
  },
  {
    id: 55,
    question: "Un agent acheteur a acquis des articles pour son usage personnel avec les fonds de l'organisation en allant chercher les fournitures directement à l'entrepôt du vendeur. Lequel des contrôles suivants aurait été le plus efficace pour prévenir cette fraude ?",
    options: [
      "N'autoriser les achats qu'à partir d'une liste de fournisseurs pré-approuvés.",
      "Exiger l'utilisation de bons de commande pré-numérotés pour tous les achats.",
      "Annuler les pièces justificatives au moment du paiement des factures.",
      "Établir une séparation des tâches entre la commande et la réception des marchandises."
    ],
    solution: "Établir une séparation des tâches entre la commande et la réception des marchandises.",
    explication: "La séparation des fonctions d'achat et de réception aurait amélioré le contrôle interne. Si les fournitures avaient été envoyées à l'organisation et qu'un rapport de réception avait été préparé par un employé autre que celui qui a commandé, la fraude n'aurait pu se produire."
  },
  {
    id: 56,
    question: "Dans le cas de l'agent acheteur qui s'approvisionnait pour usage personnel, laquelle des procédures de mission est la plus susceptible de détecter cette fraude ?",
    options: [
      "Suivi des chèques annulés sélectionnés jusqu'au journal des paiements en espèces et aux factures des fournisseurs.",
      "Effectuer une analyse des tendances des dépenses en fournitures d'impression pour une période de 2 ans.",
      "Suivi des prix et des quantités sur les factures des fournisseurs sélectionnés jusqu'aux bons de commande.",
      "Recalculer l'exactitude administrative des factures des fournisseurs sélectionnés."
    ],
    solution: "Effectuer une analyse des tendances des dépenses en fournitures d'impression pour une période de 2 ans.",
    explication: "L'analyse des tendances des dépenses en fournitures d'imprimerie sur une période de deux ans devrait permettre de déceler une utilisation excessive de ces fournitures, car on peut s'attendre à ce que des relations plausibles entre les données se poursuivent en l'absence de conditions contraires."
  },
  {
    id: 57,
    question: "L'accumulation par un programmeur d'erreurs d'arrondi dans un compte, auquel le programmeur accède par la suite, est un type de fraude informatique. La meilleure façon de prévenir ce type de fraude est de :",
    options: [
      "Intégrer le jugement à l'aide de tests de raisonnabilité.",
      "Tester les programmes de manière indépendante pendant le développement et limiter l'accès aux programmes.",
      "Séparer les tâches d'élaboration et de programmation des systèmes.",
      "Utiliser les totaux de contrôle et vérifier les résultats de l'ordinateur."
    ],
    solution: "Tester les programmes de manière indépendante pendant le développement et limiter l'accès aux programmes.",
    explication: "Les programmeurs ne devraient pas avoir accès aux programmes utilisés dans le traitement. L'accumulation des erreurs d'arrondi est une procédure écrite dans le programme. La mise à l'essai indépendante d'un programme mènera à la découverte de cette fraude programmée."
  },
  {
    id: 58,
    question: "Un agent acheteur recevait des cadeaux coûteux d'un vendeur en échange d'affaires dirigées vers ce vendeur. Laquelle des politiques organisationnelles suivantes prévient le plus efficacement une telle situation ?",
    options: [
      "Tous les achats dépassant des montants monétaires spécifiés doivent être approuvés par un fonctionnaire.",
      "Il convient d'acheter régulièrement des matériaux importants en grandes quantités auprès d'au moins deux sources différentes.",
      "La fonction d'achat devrait être décentralisée afin que chaque chef de service fasse ses propres achats.",
      "Les appels d'offres concurrentiels devraient être lancés pour les achats dans toute la mesure du possible."
    ],
    solution: "Les appels d'offres concurrentiels devraient être lancés pour les achats dans toute la mesure du possible.",
    explication: "L'appel d'offres concurrentiel est un moyen efficace d'obtenir le prix le plus bas compatible avec la qualité. Il permet également de contrôler la fraude en limitant la capacité d'un agent d'achat à récompenser un fournisseur privilégié."
  },
  {
    id: 59,
    question: "Lequel des contrôles suivants est le MOINS efficace pour prévenir une fraude en envoyant des bons de commande à de faux vendeurs ?",
    options: [
      "Exiger que tous les achats soient effectués à partir d'une liste de fournisseurs autorisés tenue à jour indépendamment.",
      "Exiger que seuls les fournisseurs approuvés soient payés pour les achats, en fonction de la production réelle.",
      "Exiger des contrats avec tous les principaux fournisseurs auprès desquels les composants de production sont achetés.",
      "Exiger que le total des achats d'un mois ne dépasse pas le total des achats prévus au budget pour ce mois."
    ],
    solution: "Exiger que le total des achats d'un mois ne dépasse pas le total des achats prévus au budget pour ce mois.",
    explication: "Exiger que le total des achats d'un mois ne dépasse pas le budget permet de contrôler le montant total des dépenses, mais non de savoir si un achat a été demandé et autorisé, auprès de qui les commandes sont passées, ou si les biens achetés sont reçus."
  },
  {
    id: 60,
    question: "Pour prévenir les pots-de-vin ou cadeaux de vendeurs aux agents d'achat, lequel des éléments suivants est le MOINS efficace ?",
    options: [
      "Une politique organisationnelle spécifique interdisant l'acceptation de toute chose de valeur d'un fournisseur.",
      "Un code d'éthique organisationnel qui interdit une telle activité.",
      "Obligation pour l'agent d'achat d'établir un profil de tous les fournisseurs avant qu'ils ne soient ajoutés à la liste.",
      "L'établissement de contrats à long terme avec les principaux fournisseurs, dont les conditions sont approuvées par la direction générale."
    ],
    solution: "Obligation pour l'agent d'achat d'établir un profil de tous les fournisseurs avant qu'ils ne soient ajoutés à la liste.",
    explication: "L'exigence pour l'agent d'achat d'établir un profil de tous les fournisseurs est l'approche la moins efficace. Elle ne s'applique qu'à l'autorisation des fournisseurs, une fonction qui doit être exécutée indépendamment de l'agent d'achat, et ne traite pas des relations de l'agent avec les fournisseurs approuvés."
  },
  {
    id: 61,
    question: "Un commis comptable a soumis des factures frauduleuses d'un ancien fournisseur et déposé les chèques dans un compte ouvert au nom de ce fournisseur. Lequel des contrôles suivants aurait été le MOINS susceptible de prévenir ou de détecter cette fraude ?",
    options: [
      "Exiger l'autorisation des paiements par quelqu'un d'autre que le commis qui négocie le contrat.",
      "Comparaison par le signataire des chèques de factures avec un audit indépendant des services reçus.",
      "La préparation du budget par quelqu'un d'autre que la personne qui signe les contrats et approuve le paiement.",
      "Envoi des chèques par une personne autre que la personne responsable de la signature du chèque ou de l'approbation de la facture."
    ],
    solution: "Envoi des chèques par une personne autre que la personne responsable de la signature du chèque ou de l'approbation de la facture.",
    explication: "Après l'approbation des factures et la préparation et la signature des chèques, l'envoi du chèque par une personne indépendante ne fournit aucun moyen d'empêcher les paiements irréguliers. La personne responsable de la fonction de trésorerie doit signer les chèques, les transmettre et annuler les pièces justificatives."
  },
  {
    id: 62,
    question: "Dans le cas du commis comptable qui soumettait des factures frauduleuses, laquelle des procédures de mission est la plus susceptible de détecter la fraude ?",
    options: [
      "Prélever un échantillon des factures payées et vérifier la réception des services par les services concernés.",
      "Tracer un échantillon des chèques versés jusqu'aux factures approuvées pour les services.",
      "Effectuer un rapprochement bancaire et comptabiliser tous les chèques en suspens.",
      "Tracer un échantillon des documents de réception des factures et des chèques décaissés."
    ],
    solution: "Prélever un échantillon des factures payées et vérifier la réception des services par les services concernés.",
    explication: "Confirmer avec le ministère utilisateur la réception des services qui ont été payés permettrait de découvrir la fraude. Les factures frauduleuses avaient été approuvées par le commis et chaque chèque était appuyé par une facture approuvée."
  },
  {
    id: 63,
    question: "La responsabilité de l'activité d'audit interne en matière de prévention de la fraude consiste à :",
    options: [
      "Établir un contrôle interne.",
      "Maintenir le contrôle interne.",
      "Évaluer le système de contrôle interne.",
      "Exercer l'autorité opérationnelle sur les activités de prévention de la fraude."
    ],
    solution: "Évaluer le système de contrôle interne.",
    explication: "Le contrôle est le principal moyen de prévenir la fraude. La direction est principalement responsable de l'établissement et du maintien du contrôle. Les auditeurs internes sont principalement chargés de prévenir la fraude en examinant et en évaluant l'adéquation et l'efficacité du contrôle (Impl. Std. 2130.A1)."
  },
  {
    id: 64,
    question: "Le risque d'ajout d'employés fictifs à la paie par la personne qui exécute la fonction de traitement de la paie est réduit par :",
    options: [
      "Exiger que les ajouts à la liste de paye soient approuvés par le contrôleur.",
      "Exiger que le même employé effectue le rapprochement mensuel de la banque de paie.",
      "Exécution de contrôles périodiques des salariés de la paie.",
      "Exiger un rapprochement des heures entre les fiches de temps et les heures payées."
    ],
    solution: "Exécution de contrôles périodiques des salariés de la paie.",
    explication: "L'un des contrôles utilisés pour détecter l'ajout de personnes fictives à la masse salariale consiste pour l'auditeur à effectuer une comparaison périodique des noms figurant sur la masse salariale avec les personnes observées travaillant pour l'entreprise."
  },
  {
    id: 65,
    question: "Un auditeur interne a appris qu'un vendeur récompensait les acheteurs proportionnellement au volume des commandes reçues. Quelles recommandations l'auditeur devrait-il faire pour réduire la probabilité que les acheteurs acceptent ces récompenses ?",
    options: [
      "Établir un programme de counseling pour les employés.",
      "Revue périodique des modes de vie des acheteurs.",
      "Une politique d'identification et de réduction des pressions situationnelles des acheteurs.",
      "Un énoncé écrit solide de la mission de la direction à l'égard de l'éthique organisationnelle."
    ],
    solution: "Un énoncé écrit solide de la mission de la direction à l'égard de l'éthique organisationnelle.",
    explication: "Un engagement ferme de la direction à l'égard d'une conduite éthique se reflétant dans ses politiques écrites, ses pratiques en matière de personnel, son intérêt pour un contrôle efficace, favorisera la création d'un environnement approprié."
  },
  {
    id: 66,
    question: "Laquelle des procédures de contrôle interne suivantes permet de réduire au minimum l'utilisation frauduleuse des cartes de crédit de l'organisation ?",
    options: [
      "Établir une politique organisationnelle sur l'émission de cartes de crédit aux employés autorisés.",
      "Examiner périodiquement la validité des besoins en matière de cartes de crédit au niveau de la direction.",
      "Rapprocher le relevé mensuel de l'émetteur de la carte de crédit avec les copies soumises des bordereaux de paiement.",
      "Soumettre les frais de carte de crédit aux mêmes contrôles de dépenses que ceux utilisés sur les formulaires de frais habituels."
    ],
    solution: "Soumettre les frais de carte de crédit aux mêmes contrôles de dépenses que ceux utilisés sur les formulaires de frais habituels.",
    explication: "Le problème d'imputer à l'organisation des dépenses non autorisées est le même pour tout type de compte de dépenses. Par conséquent, les contrôles normaux des dépenses devraient empêcher la fraude par carte de crédit."
  },
  {
    id: 67,
    question: "Une organisation a embauché un gestionnaire des comptes fournisseurs qui avait été congédié pour actes répréhensibles présumés. Six mois plus tard, il a détourné 12 000 $ en envoyant des paiements doubles à un parent. Quel contrôle aurait pu prévenir cette situation ?",
    options: [
      "Vérifier adéquatement les antécédents professionnels de tous les nouveaux employés.",
      "Ne pas embaucher des personnes qui semblent surqualifiées pour un emploi.",
      "Vérifier les antécédents scolaires de tous les nouveaux employés.",
      "Vérifier si les proches parents travaillent pour les vendeurs."
    ],
    solution: "Vérifier adéquatement les antécédents professionnels de tous les nouveaux employés.",
    explication: "Un personnel honnête et compétent contribue à créer un environnement favorisant un contrôle interne efficace. La vérification des antécédents peut écarter les candidats dont le caractère est douteux et servir à prévenir la fraude potentielle."
  },
  {
    id: 68,
    question: "Laquelle des procédures de contrôle suivantes est la MOINS importante pour prévenir la fraude informatique ?",
    options: [
      "Contrôle des changements de programme nécessitant une distinction entre les programmes de production et les programmes de test.",
      "Test de nouvelles applications par les utilisateurs au cours du processus de développement des systèmes.",
      "Séparation des tâches entre le programmeur d'applications et la fonction de bibliothécaire de programme.",
      "Séparation des tâches entre le programmeur et l'analyste de systèmes."
    ],
    solution: "Séparation des tâches entre le programmeur et l'analyste de systèmes.",
    explication: "La séparation des fonctions de programmation et d'analyse des systèmes est moins préoccupante étant donné que l'analyste est responsable de communiquer la nature de la conception au programmeur. Programmeur-analyste est d'ailleurs un titre de poste courant."
  },
  {
    id: 69,
    question: "Un moyen de s'assurer que les chèques de paie sont tirés pour des montants dûment autorisés consiste à :",
    options: [
      "Effectuer un audit périodique de l'effectif des employés inscrits sur la liste de paie.",
      "Exiger que les chèques non livrés soient retournés au caissier.",
      "Exiger l'approbation des superviseurs pour les relevés de temps des employés.",
      "Assister à la distribution des chèques de paie."
    ],
    solution: "Exiger l'approbation des superviseurs pour les relevés de temps des employés.",
    explication: "L'examen et l'approbation des fiches de présence par les superviseurs hiérarchiques sont appropriés parce qu'ils devraient savoir si le travail a été effectué. De plus, comme ils ne distribuent pas de chèques de paie, ils ne sont pas en mesure de détourner des chèques faussement autorisés."
  },
  {
    id: 70,
    question: "Un commis à la paie a augmenté le taux de rémunération horaire de deux employés et a partagé les paiements en trop avec eux. Laquelle des mesures suivantes aurait le mieux servi à prévenir cet acte illégal ?",
    options: [
      "Exiger que tous les changements apportés aux dossiers de paye soient consignés sur un formulaire standard.",
      "Limiter l'accès aux fichiers de paie maîtres au personnel de supervision du service de la paie.",
      "Rapprocher annuellement les taux de rémunération par dossier du personnel avec ceux du système de paie.",
      "Suivi mensuel des coûts salariaux par les chefs de service."
    ],
    solution: "Limiter l'accès aux fichiers de paie maîtres au personnel de supervision du service de la paie.",
    explication: "Le meilleur contrôle préventif consiste à restreindre la capacité des employés d'avoir accès à des renseignements de nature délicate. Le système de sécurité informatique devrait comprendre des mesures comme la protection par mot de passe pour empêcher une personne non autorisée de modifier les renseignements stockés."
  },
  {
    id: 71,
    question: "Lequel des énoncés suivants est (sont) vrai(s) en ce qui concerne la dissuasion de la fraude ? (1) Le principal moyen de décourager la fraude consiste à mettre en place des contrôles efficaces par la direction. (2) Les auditeurs internes sont chargés de contribuer à la dissuasion en examinant et évaluant l'adéquation des contrôles. (3) Les auditeurs internes sont responsables de la conception et de la mise en œuvre des contrôles. (4) Les auditeurs internes devraient déterminer si les voies de communication fournissent à la direction une information adéquate.",
    options: [
      "1 seulement.",
      "2 seulement.",
      "2 et 3 seulement.",
      "1, 2 et 4 seulement."
    ],
    solution: "1, 2 et 4 seulement.",
    explication: "Les contrôles sont le principal moyen de prévenir la fraude (1). Les auditeurs internes aident l'organisation à maintenir des contrôles efficaces en évaluant leur efficacité (2). Les auditeurs internes devraient déterminer si les voies de communication fournissent à la direction des renseignements fiables (4). Mais les auditeurs internes ne sont PAS responsables de la conception et de la mise en œuvre des contrôles (3) - c'est la responsabilité de la direction."
  },
  {
    id: 72,
    question: "Dans une division où les factures sont envoyées à l'agent acheteur qui passe la commande, et où celui-ci rapproche facture, bon de réception et bon de commande avant d'envoyer aux comptes fournisseurs, la fraude non détectée la plus probable est que :",
    options: [
      "L'agent d'achat achète la majorité des produits d'un fournisseur préféré car il n'y a pas de rotation entre agents.",
      "L'agent des achats envoie de faux bons de commande à un vendeur fictif, insère un bordereau de réception et fait effectuer les paiements au vendeur fictif.",
      "Le service destinataire détourne les reçus vers différents endroits et omet de créer des rapports de réception.",
      "Le département de production dégonfle le prix des produits achetés et augmente ainsi la marge brute."
    ],
    solution: "L'agent des achats envoie de faux bons de commande à un vendeur fictif, insère un bordereau de réception et fait effectuer les paiements au vendeur fictif.",
    explication: "Il est peu probable que le contrôle interne détecte la fraude de l'agent acheteur, car cette personne est en mesure de commettre et de dissimuler des irrégularités. Les documents de réception et les factures des fournisseurs doivent être envoyés aux comptes fournisseurs et non à l'agent d'achat."
  },
  {
    id: 73,
    question: "Lequel des éléments suivants ne relève PAS de la responsabilité des auditeurs internes en matière de prévention, de dissuasion et de détection de la fraude ?",
    options: [
      "Élaborer une approche que l'organisation peut utiliser pour soutenir les principes anticorruptions dans tous les pays où elle est présente.",
      "Appuyer la surveillance exercée par le comité d'audit pour s'assurer que la direction a mis en œuvre un système efficace de contrôles internes.",
      "Surveiller la divulgation annuelle de l'existence d'un code d'éthique qui s'applique au chef de la direction et aux cadres supérieurs des finances.",
      "Sensibiliser l'organisation à la fraude en encourageant le comité d'audit et la direction générale à donner le ton."
    ],
    solution: "Élaborer une approche que l'organisation peut utiliser pour soutenir les principes anticorruptions dans tous les pays où elle est présente.",
    explication: "Il incombe à la direction, et non aux vérificateurs internes, d'établir et de maintenir des contrôles efficaces pour décourager et prévenir la fraude. La traduction des principes de prévention de la corruption dans l'ensemble des opérations est une responsabilité de gestion."
  },
  {
    id: 74,
    question: "Le but premier de l'exploitation d'une ligne d'assistance téléphonique en cas de fraude au sein d'une organisation est de :",
    options: [
      "Réduire les coûts totaux d'exploitation.",
      "Se concentrer sur les domaines qui méritent notre attention.",
      "Établir des voies de communication pour permettre aux gens de signaler les irrégularités soupçonnées.",
      "Mesurer dans quelle mesure les unités organisationnelles atteignent les objectifs de l'organisation."
    ],
    solution: "Établir des voies de communication pour permettre aux gens de signaler les irrégularités soupçonnées.",
    explication: "Les pratiques d'information et de communication en matière de fraude favorisent la gestion des risques de fraude. Les lignes d'assistance téléphonique sont un moyen pratique pour les employés de signaler des irrégularités présumées."
  },
  {
    id: 75,
    question: "Dans le contexte où les factures sont envoyées à l'agent acheteur et non aux comptes fournisseurs, lequel des contrôles suivants, s'il est correctement mis en œuvre, est le plus susceptible de réduire la probabilité de fraude ?",
    options: [
      "Exiger une rotation périodique des achats entre les différents fournisseurs.",
      "Exiger la rotation des fonctions entre les trois acheteurs.",
      "Exiger que les rapports de réception soient envoyés directement aux comptes créditeurs.",
      "Exiger que les mises à jour du registre d'inventaire permanent soient effectuées par le service destinataire."
    ],
    solution: "Exiger que les rapports de réception soient envoyés directement aux comptes créditeurs.",
    explication: "Cette modification des procédures empêche l'agent d'achat de falsifier les documents de réception. Une procédure encore plus efficace consiste à envoyer les rapports de réception ET les factures des fournisseurs aux comptes créditeurs."
  },
  {
    id: 76,
    question: "Lequel des énoncés suivants est (sont) vrai(s) en ce qui concerne la prévention de la fraude ? (1) Le principal moyen de prévenir la fraude est le contrôle interne établi et maintenu par la direction. (2) Les auditeurs internes sont chargés de contribuer à la prévention de la fraude en examinant et en évaluant l'adéquation du système de contrôle interne. (3) Les auditeurs internes devraient évaluer l'efficacité opérationnelle des systèmes de communication liés à la fraude.",
    options: [
      "1 seulement.",
      "1 et 2 seulement.",
      "2 seulement.",
      "1, 2 et 3."
    ],
    solution: "1, 2 et 3.",
    explication: "Le contrôle est le principal moyen de prévenir la fraude, la direction en est responsable. Les vérificateurs internes contribuent à la prévention en évaluant l'efficacité des contrôles. Les auditeurs internes devraient également évaluer l'efficacité opérationnelle des systèmes et des pratiques de communication liés à la fraude, et ils devraient soutenir la formation dans ce domaine."
  },
  {
    id: 77,
    question: "Comment la formation de sensibilisation à la fraude contribue-t-elle à la prévention de la fraude ?",
    options: [
      "Limite la rationalisation.",
      "Réduit les occasions de commettre des fraudes.",
      "Aide à élaborer des réponses crédibles aux risques potentiels.",
      "Facilite la mise à l'essai des contrôles."
    ],
    solution: "Limite la rationalisation.",
    explication: "Un individu justifie des actions frauduleuses par la rationalisation. La formation sur la sensibilisation à la fraude minimise la rationalisation en appuyant le ton éthique au sommet, favorisant un environnement anti-fraude et soulignant que l'organisation ne tolère aucune forme d'inconduite."
  },
  {
    id: 78,
    question: "Lequel des éléments suivants donne à l'auditeur interne le pouvoir d'enquêter sur une fraude ?",
    options: [
      "Les normes.",
      "La loi.",
      "Le management.",
      "Le code éthique de l'IIA."
    ],
    solution: "Le management.",
    explication: "Toute enquête pour fraude entreprise par les vérificateurs internes doit être autorisée par la direction. Le vérificateur interne n'a le pouvoir que de recommander une enquête. Il n'a aucun pouvoir en vertu de la common law et le Code de déontologie de l'IIA ne mentionne pas les enquêtes sur les fraudes."
  },
  {
    id: 79,
    question: "Lorsqu'ils mènent des enquêtes sur des fraudes, les auditeurs internes devraient :",
    options: [
      "Indiquer clairement l'étendue des connaissances des auditeurs internes sur la fraude lors de l'interrogatoire des suspects.",
      "Affecter du personnel à l'enquête conformément au calendrier de mission établi au début de l'exercice.",
      "Mener leur enquête indépendamment des avocats, du personnel de sécurité et des spécialistes de l'extérieur.",
      "Évaluer le niveau probable et l'étendue de la complicité de la fraude au sein de l'organisation."
    ],
    solution: "Évaluer le niveau probable et l'étendue de la complicité de la fraude au sein de l'organisation.",
    explication: "Lorsqu'ils mènent des enquêtes sur des fraudes, les vérificateurs internes devraient évaluer le niveau et l'étendue de la complicité au sein de l'organisation. Cette évaluation peut être essentielle pour s'assurer que les éléments de preuve cruciaux ne sont pas corrompus ou détruits et qu'aucune information trompeuse n'est obtenue."
  },
  {
    id: 80,
    question: "Les questions utilisées pour interroger les personnes soupçonnées de fraude doivent :",
    options: [
      "Respecter un ordre prédéterminé.",
      "Couvrir plus d'un sujet ou plus d'un thème.",
      "Passer du général au spécifique.",
      "Diriger la personne vers la réponse désirée."
    ],
    solution: "Passer du général au spécifique.",
    explication: "Les questions initiales d'une entrevue sur la fraude devraient être générales. Contrairement à une approche directive qui met l'accent sur des questions étroitement ciblées, cette approche non directive est plus susceptible d'obtenir des éclaircissements et des observations inattendues de la part des employés soupçonnés."
  },
  {
    id: 81,
    question: "L'activité d'audit interne a conclu une enquête sur une fraude qui a révélé une incidence défavorable importante sur la situation financière de deux années déjà publiées. Le RAI doit immédiatement informer :",
    options: [
      "Le cabinet d'audit externe responsable des états financiers touchés.",
      "L'organisme gouvernemental ou réglementaire approprié.",
      "La direction générale et le conseil d'administration.",
      "La fonction comptable interne responsable des écritures de correction."
    ],
    solution: "La direction générale et le conseil d'administration.",
    explication: "Il incombe au RAI de signaler en temps opportun à la haute direction et au conseil tout incident de fraude importante ou d'érosion de confiance. La direction devrait ensuite communiquer avec les vérificateurs externes, les organismes gouvernementaux et la fonction comptable."
  },
  {
    id: 82,
    question: "Après avoir terminé une enquête, l'audit interne a conclu qu'un employé avait volé un montant important de rentrées de fonds. Un projet de communication sur cette observation devrait être soumis pour examen à :",
    options: [
      "Conseiller juridique.",
      "Le conseil d'administration.",
      "Le directeur général de l'organisation.",
      "Les auditeurs externes de l'organisation."
    ],
    solution: "Conseiller juridique.",
    explication: "Le vérificateur interne doit se préoccuper de la possibilité d'inclure une déclaration pour laquelle l'employé accusé pourrait poursuivre l'organisation. Ainsi, une ébauche des communications finales proposées sur la fraude devrait être soumise à l'examen d'un conseiller juridique."
  },
  {
    id: 83,
    question: "Si un auditeur interne interroge trois personnes, dont l'une est soupçonnée d'avoir commis une fraude, laquelle des méthodes suivantes est la MOINS efficace ?",
    options: [
      "Demander à chaque personne de préparer une déclaration écrite expliquant ses actions.",
      "Jouer le rôle de celui qui cherche la vérité.",
      "Écouter attentivement ce que chaque personne interrogée a à dire.",
      "Tenter de faire avouer le suspect."
    ],
    solution: "Tenter de faire avouer le suspect.",
    explication: "La tentative d'obtenir des aveux est menaçante, contraire à la présomption d'innocence, et peu susceptible de gagner la confiance de la personne interrogée. Les vérificateurs internes devraient souvent s'en remettre à des spécialistes de la sécurité en raison de leur responsabilité juridique potentielle."
  },
  {
    id: 84,
    question: "Lequel des énoncés suivants est correct en ce qui concerne la documentation des documents de travail dans le cadre d'une enquête sur une fraude ? (1) Toutes les preuves incriminantes devraient être incluses dans les documents de travail. (2) Toutes les preuves testimoniales importantes devraient être examinées. (3) Si des entrevues ont lieu avec un auteur présumé, des transcriptions ou des déclarations écrites devraient être incluses.",
    options: [
      "1 seulement.",
      "2 seulement.",
      "2 et 3 seulement.",
      "1, 2 et 3."
    ],
    solution: "1, 2 et 3.",
    explication: "Les auditeurs internes doivent documenter les informations pertinentes à l'appui des conclusions et des résultats de la mission (Perf. Std. 2330). Les preuves à charge, les témoignages importants et les entrevues avec les auteurs présumés sont clairement pertinents et doivent être documentés."
  },
  {
    id: 85,
    question: "Un auditeur découvre un plan visant à surévaluer les stocks pour augmenter les bénéfices déclarés d'une division, avec des preuves substantielles que le directeur de la division était au courant et avait approuvé le plan. L'auditeur doit :",
    options: [
      "Continuer à mener des entrevues avec les subalternes jusqu'à ce qu'un cas précis soit présenté, puis en faire rapport au comité d'audit.",
      "Informer la direction générale et le comité d'audit des constatations et discuter d'une éventuelle enquête plus poussée.",
      "Informer le gestionnaire de la division des soupçons de l'auditeur et obtenir son explication avant de poursuivre.",
      "Documenter le cas en détail et signaler les soupçons à l'auditeur externe."
    ],
    solution: "Informer la direction générale et le comité d'audit des constatations et discuter d'une éventuelle enquête plus poussée.",
    explication: "Une fois que le vérificateur interne est convaincu qu'un acte de fraude a été commis, il convient d'en informer la haute direction et le comité de vérification et de déterminer comment procéder. Il serait inapproprié de retarder cette information ou de signaler les soupçons à des tiers."
  },
  {
    id: 86,
    question: "Une fois qu'il a obtenu de la documentation factuelle sur les pratiques commerciales contraires à l'éthique de la part du vice-président dont il relève, le RAI devrait :",
    options: [
      "Mener une enquête pour déterminer l'étendue de l'implication du vice-président dans les actes contraires à l'éthique.",
      "Confronter le vice-président avec les faits avant de procéder.",
      "Planifier un audit de la fonction opérationnelle concernée.",
      "Rapporter les faits au chef de la direction et au comité d'audit."
    ],
    solution: "Rapporter les faits au chef de la direction et au comité d'audit.",
    explication: "Une fois que l'activité de vérification interne découvre qu'il y a eu fraude ou conduite commerciale contraire à l'éthique, le RAI signale ces faits à la haute direction et au conseil, qui déterminent ensuite la marche à suivre."
  },
  {
    id: 87,
    question: "Lorsqu'il interroge une personne soupçonnée de fraude, l'intervieweur doit :",
    options: [
      "S'assurer que le superviseur du suspect est présent pendant l'entrevue.",
      "Verrouiller la porte pour s'assurer que personne n'interrompra l'entrevue.",
      "Faire attention aux choix de formulation du suspect.",
      "Demander si le suspect a commis la fraude."
    ],
    solution: "Faire attention aux choix de formulation du suspect.",
    explication: "En choisissant ses mots, un suspect peut révéler beaucoup de choses sans le vouloir. L'utilisation excessive et/ou inappropriée de la voix passive ou de pronoms impersonnels peut indiquer un désir d'être détaché du sujet."
  },
  {
    id: 88,
    question: "Un RAI soupçonne que plusieurs employés ont utilisé des ordinateurs de bureau à des fins personnelles. La principale raison pour laquelle le RAI a choisi de retenir les services d'un auditeur des systèmes d'information judiciaire plutôt que d'utiliser l'auditeur des SI de l'organisation est que l'auditeur judiciaire possède :",
    options: [
      "Connaissance du système informatique qui permettrait une évaluation plus complète de l'utilisation et des abus.",
      "Connaissance de ce qui constitue une preuve acceptable devant un tribunal.",
      "Compétences analytiques supérieures qui faciliteraient l'identification des abus informatiques.",
      "Compétences supérieures en matière de documentation et d'organisation pour présenter les constatations."
    ],
    solution: "Connaissance de ce qui constitue une preuve acceptable devant un tribunal.",
    explication: "La caractéristique distinctive de la vérification judiciaire est la connaissance nécessaire pour témoigner en tant que témoin expert devant une cour de justice. Le vérificateur des SI de l'organisation aurait probablement une meilleure connaissance des systèmes informatiques de l'organisation."
  },
  {
    id: 89,
    question: "L'audit judiciaire diffère de l'audit interne parce qu'elle repose :",
    options: [
      "Davantage sur les compétences en matière d'enquête.",
      "Sur une concentration sur l'identification et la prévention des erreurs.",
      "Sur une concentration moins grande sur les questions juridiques.",
      "Sur moins d'emphase sur les habiletés de communication."
    ],
    solution: "Davantage sur les compétences en matière d'enquête.",
    explication: "La vérification judiciaire est l'utilisation des connaissances et des compétences en comptabilité et en vérification dans les affaires ayant des implications juridiques civiles ou criminelles. Les compétences en matière d'enquête sont nécessaires pour recueillir, analyser et évaluer les preuves financières, ce qui distingue l'audit judiciaire de l'audit interne."
  },
  {
    id: 90,
    question: "Avant de publier une communication finale sur une enquête en matière de fraude, l'auditeur interne devrait soumettre une ébauche proposée à l'examen de :",
    options: [
      "Conseiller juridique de l'organisation.",
      "Gestion de la mission du client.",
      "Service des relations publiques de l'organisation.",
      "Conseil."
    ],
    solution: "Conseiller juridique de l'organisation.",
    explication: "Une ébauche des communications finales proposées sur la fraude devrait être soumise à l'examen d'un conseiller juridique. Lorsque le vérificateur interne veut invoquer le privilège du secret professionnel, il devrait envisager d'adresser son rapport à un conseiller juridique. Le conseil devrait recevoir la communication finale, et non l'ébauche proposée."
  },
  {
    id: 91,
    question: "Une enquête montre que des états financiers publiés antérieurement ont été faussés de façon importante en raison de la comptabilisation inappropriée des ventes. La prochaine étape de l'auditeur interne devrait consister à :",
    options: [
      "Informer immédiatement l'auditeur externe et le responsable de la division.",
      "Informer la direction de la division de l'observation préliminaire, mais attendre une communication officielle pour en informer le conseil.",
      "Informer l'auditeur externe, la direction générale et le conseil.",
      "Informer la direction générale et le conseil d'administration."
    ],
    solution: "Informer la direction générale et le conseil d'administration.",
    explication: "Lorsque les résultats d'une enquête sur une fraude indiquent une incidence défavorable importante sur des états financiers déjà publiés, les vérificateurs internes devraient informer la direction appropriée et le comité de vérification du conseil d'administration."
  },
  {
    id: 92,
    question: "Au cours d'un examen des contrats, un RAI soupçonne qu'un fournisseur s'est vu accorder un avantage indu. Il apprend que le chef de la direction est membre du conseil d'administration du fournisseur. Comment le RAI devrait-il procéder ?",
    options: [
      "Soumettre une ébauche de rapport à la direction générale, à l'exclusion du chef de la direction.",
      "Communiquer avec les auditeurs externes de l'organisme pour obtenir de l'aide.",
      "Obtenir la documentation à l'appui et présenter les conclusions au président du comité d'audit.",
      "Aviser immédiatement le conseil d'administration."
    ],
    solution: "Obtenir la documentation à l'appui et présenter les conclusions au président du comité d'audit.",
    explication: "Après avoir déterminé l'existence d'un conflit d'intérêts de la part d'un cadre supérieur, le RAI devrait obtenir des documents à l'appui et présenter ses conclusions au président du comité de vérification. Il faut d'abord obtenir les documents justificatifs avant d'en informer le comité."
  },
  {
    id: 93,
    question: "Pourquoi le Code d'éthique en matière de règles de conduite 4.2 de l'IIA exige-t-il que l'on fasse preuve de conscience professionnelle dans l'obtention d'informations à l'appui d'une opinion de mission ?",
    options: [
      "Une information suffisante, fiable, pertinente et utile donne de la crédibilité à l'opinion.",
      "Pour éviter tout conflit d'intérêts.",
      "Exiger l'honnêteté dans l'exécution du travail.",
      "Pour éviter que les auditeurs internes acceptent des honoraires ou des cadeaux des clients de la mission."
    ],
    solution: "Une information suffisante, fiable, pertinente et utile donne de la crédibilité à l'opinion.",
    explication: "Les missions doivent être exécutées avec compétence et soin professionnel (Attr. Std. 1200). Si les vérificateurs internes exprimaient des opinions sans procéder à une enquête approfondie et sans se conformer aux normes, ces communications n'auraient aucun sens. Les auditeurs internes doivent identifier des informations suffisantes, fiables, pertinentes et utiles pour atteindre les objectifs de la mission (Perf. Std. 2310)."
  }
];