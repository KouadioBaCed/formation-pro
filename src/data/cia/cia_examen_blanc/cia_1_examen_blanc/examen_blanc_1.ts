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
    question: "Lequel des énoncés suivants n'est pas vrai en ce qui concerne la charte d'audit interne ?",
    options: [
      "Il définit les pouvoirs et les responsabilités de l'activité d'audit interne.",
      "Il précise les ressources minimales nécessaires à l'activité d'audit interne.",
      "Il fournit une base pour l'évaluation de l'activité d'audit interne.",
      "Il devrait être approuvé par la direction générale et le conseil."
    ],
    solution: "Il précise les ressources minimales nécessaires à l'activité d'audit interne.",
    explication: "Le manuel d'audit interne et le plan d'audit annuel aident à déterminer les besoins en ressources, et non la charte. La charte définit les pouvoirs et responsabilités, fournit une base pour l'évaluation de la fonction d'audit, et doit être approuvée par la direction générale et le conseil."
  },
  {
    id: 2,
    question: "La fonction de l'audit interne, en ce qui concerne les rapports financiers internes, serait de :",
    options: [
      "Veiller au respect des procédures de reporting.",
      "Examiner les postes de dépenses et faire correspondre chaque poste avec les dépenses engagées.",
      "Déterminer s'il y a des employés qui dépensent des fonds sans autorisation.",
      "Identifier les contrôles inadéquats qui augmentent la probabilité de dépenses non autorisées."
    ],
    solution: "Identifier les contrôles inadéquats qui augmentent la probabilité de dépenses non autorisées.",
    explication: "Les auditeurs internes sont chargés d'identifier les contrôles inadéquats, d'évaluer l'efficacité de la gestion et d'identifier les risques communs. Les normes n'exigent pas que les auditeurs internes s'assurent du respect des procédures de rapport ou procèdent à un appariement des flux de fonds."
  },
  {
    id: 3,
    question: "Le moyen le plus efficace d'assurer que le statut de l'activité d'audit interne ne soit pas affecté par des changements de politique irresponsables de la part de la direction est de :",
    options: [
      "Faire approuver la charte d'audit interne par le conseil.",
      "Adopter des politiques pour le fonctionnement de l'activité d'audit interne.",
      "Établir un comité d'audit à titre de sous-comité du conseil.",
      "Élaborer des politiques et des procédures écrites qui serviront de normes de rendement."
    ],
    solution: "Faire approuver la charte d'audit interne par le conseil.",
    explication: "Le but, les pouvoirs et les responsabilités de l'AAI devraient être formellement définis dans la charte, qui est approuvée par la direction et le conseil. Les politiques guident le personnel d'audit interne mais ne protègent pas son statut, et la création d'un comité d'audit ne garantit pas le statut sans son implication."
  },
  {
    id: 4,
    question: "Si les normes de fonctionnement d'un département sont vagues et donc sujettes à interprétation, un auditeur devrait :",
    options: [
      "Chercher à s'entendre avec le gestionnaire ministériel sur les critères nécessaires pour mesurer le rendement opérationnel.",
      "Déterminer les meilleures pratiques dans le domaine et les utiliser comme norme.",
      "Interpréter les normes dans leur sens le plus strict.",
      "Omettre tout commentaire sur les normes et le rendement du département."
    ],
    solution: "Chercher à s'entendre avec le gestionnaire ministériel sur les critères nécessaires pour mesurer le rendement opérationnel.",
    explication: "Selon la norme de mise en œuvre 2210.A3, si les critères de contrôle sont inadéquats, les auditeurs internes doivent collaborer avec la direction pour élaborer des critères d'évaluation appropriés. L'auditeur doit s'efforcer de comprendre les normes d'exploitation telles qu'elles sont appliquées dans l'organisation."
  },
  {
    id: 5,
    question: "Lesquels des éléments suivants ne seraient pas considérés comme des lignes directrices obligatoires ?",
    options: [
      "La définition d'audit interne.",
      "Le Code d'éthique.",
      "Les Principes fondamentaux.",
      "La mission d'audit interne."
    ],
    solution: "La mission d'audit interne.",
    explication: "La mission d'audit interne n'est pas considérée comme une orientation obligatoire. En revanche, la définition de l'audit interne, le Code d'éthique et les Principes fondamentaux pour la pratique professionnelle de l'audit interne sont tous considérés comme des directives obligatoires."
  },
  {
    id: 6,
    question: "L'un des objectifs des normes est de :",
    options: [
      "Encourager la professionnalisation de l'audit interne.",
      "Établir l'indépendance de l'activité d'audit interne et souligner l'objectivité de l'audit interne.",
      "Encourager les auditeurs externes à utiliser davantage le travail des auditeurs internes.",
      "Établir la base de l'évaluation du rendement de l'audit interne."
    ],
    solution: "Établir la base de l'évaluation du rendement de l'audit interne.",
    explication: "Selon l'IIA, les normes sont destinées à : guider le respect des éléments obligatoires du Cadre international des pratiques professionnelles, fournir un cadre pour la prestation de services d'audit interne à valeur ajoutée, établir la base de l'évaluation du rendement de l'audit interne, et favoriser l'amélioration des processus organisationnels."
  },
  {
    id: 7,
    question: "La charte d'audit interne a pour but de :",
    options: [
      "Protéger l'activité d'audit interne contre toute influence extérieure.",
      "Établir la mission, les pouvoirs et les responsabilités de l'activité d'audit interne.",
      "Définir la relation de l'auditeur interne avec l'auditeur externe.",
      "Définir le rôle du responsable de l'audit interne en tant que membre du comité d'audit."
    ],
    solution: "Établir la mission, les pouvoirs et les responsabilités de l'activité d'audit interne.",
    explication: "La mission, les pouvoirs et les responsabilités de l'AAI doivent être formellement définis dans la charte. La charte ne protège pas l'AAI des influences extérieures, ne définit pas la relation entre les auditeurs internes et externes, et le RAI ne devrait en aucun cas être membre du comité d'audit."
  },
  {
    id: 8,
    question: "Le meilleur moyen pour l'activité d'audit interne de déterminer si elle a atteint son objectif de mise en œuvre d'une couverture d'audit plus large des activités fonctionnelles est de :",
    options: [
      "Cumuler les constatations d'audit par domaine d'audit.",
      "Comparer le plan d'audit à l'activité d'audit réelle.",
      "Mener des enquêtes sur la satisfaction de la direction à l'égard de l'activité d'audit interne.",
      "Mettre en œuvre un programme d'assurance et d'amélioration de la qualité."
    ],
    solution: "Mettre en œuvre un programme d'assurance et d'amélioration de la qualité.",
    explication: "La mise en œuvre d'un programme d'assurance et d'amélioration de la qualité (PQAI) peut aider le RAI à déterminer si les objectifs d'audit de l'AAI sont atteints. Le PQAI évalue et analyse l'efficacité et l'efficience des activités de l'AAI."
  },
  {
    id: 9,
    question: "Si un département à l'extérieur de l'activité d'audit interne (AAI) est chargé d'examiner une fonction ou un processus, l'auditeur interne devrait :",
    options: [
      "Tenir compte du travail de l'autre département au moment d'évaluer la fonction ou le processus.",
      "Ignorer le travail de l'autre département et procéder à un audit indépendant.",
      "Réduire le périmètre de l'audit parce que le travail a déjà été effectué par l'autre département.",
      "Céder la responsabilité de l'évaluation de la fonction ou du processus à l'autre département."
    ],
    solution: "Tenir compte du travail de l'autre département au moment d'évaluer la fonction ou le processus.",
    explication: "L'examen et la mise à l'essai des procédures de l'autre département peuvent réduire l'étendue de l'audit nécessaire. L'auditeur interne ne peut pas se fier au travail des autres sans vérifier les résultats, et la responsabilité globale d'évaluer la fonction ou le processus n'est pas affectée par la couverture de l'autre département."
  },
  {
    id: 10,
    question: "Dans le cadre d'une mission d'évaluation de la fonction des comptes fournisseurs, un auditeur interne prévoit confirmer les soldes avec les fournisseurs. Quelle est la source d'autorité pour le contact de l'auditeur avec les unités extérieures à l'organisation ?",
    options: [
      "Politiques et procédures relatives aux activités d'audit interne.",
      "Les normes.",
      "Le Code d'éthique.",
      "La charte de l'activité d'audit interne."
    ],
    solution: "La charte de l'activité d'audit interne.",
    explication: "La mission, les pouvoirs et les responsabilités de l'activité d'audit interne devraient être définis dans la charte. La charte devrait établir la position de l'AAI au sein de l'organisation, autoriser l'accès aux dossiers, au personnel et aux biens pertinents, et définir le périmètre des activités d'audit interne."
  },
  {
    id: 11,
    question: "Lequel des principes suivants n'est pas l'un des dix principes fondamentaux ?",
    options: [
      "Favorise l'amélioration organisationnelle.",
      "Est bien positionné et dispose de ressources adéquates.",
      "Fournit une assurance fondée sur le risque.",
      "Est perspicace, proactif et axé sur le présent."
    ],
    solution: "Est perspicace, proactif et axé sur le présent.",
    explication: "Le principe correct est : 'Est perspicace, proactif et tourné vers l'avenir' et non 'axé sur le présent'. Les trois autres options sont bien des principes fondamentaux."
  },
  {
    id: 12,
    question: "Selon les Normes, les objectifs de l'activité d'audit interne doivent être précisés par :",
    options: [
      "Des politiques et procédures pour guider le personnel d'audit interne.",
      "Les calendriers de travail et les activités de la mission qui doivent être examinés.",
      "Des critères de mesure et des dates cibles d'achèvement.",
      "Des plans de dotation en personnel et des budgets financiers."
    ],
    solution: "Des critères de mesure et des dates cibles d'achèvement.",
    explication: "Les objectifs de l'AAI devraient pouvoir être atteints dans le cadre de plans et de budgets de fonctionnement précis et, dans la mesure du possible, ils devraient être mesurables. Ils devraient être accompagnés de critères de mesure et de dates cibles de réalisation."
  },
  {
    id: 13,
    question: "Lequel des énoncés suivants décrit le mieux l'objectif d'un auditeur interne lorsqu'il examine les processus actuels de gestion des risques, de contrôle et de gouvernance de l'organisation ?",
    options: [
      "Aider à déterminer la nature, le calendrier et l'étendue des tests nécessaires pour atteindre les objectifs de la mission.",
      "S'assurer que les faiblesses du système de contrôle interne sont corrigées.",
      "Fournir l'assurance raisonnable que les processus permettront d'atteindre les objectifs et les buts de l'organisation de façon efficiente et économique.",
      "Déterminer si les processus permettent de s'assurer que les documents comptables sont exacts et que les états financiers sont présentés fidèlement."
    ],
    solution: "Fournir l'assurance raisonnable que les processus permettront d'atteindre les objectifs et les buts de l'organisation de façon efficiente et économique.",
    explication: "Comme le décrit l'IIA, l'objectif premier des auditeurs internes lorsqu'ils examinent les processus actuels de gestion des risques, de contrôle et de gouvernance est de fournir une assurance raisonnable que ces processus fonctionnent comme prévu et permettront d'atteindre les objectifs de l'organisation."
  },
  {
    id: 14,
    question: "Parmi les activités suivantes, quelles sont celles qui relèvent de l'audit interne ? I. Évaluer l'efficacité d'un service d'exploitation. II. Protéger les actifs. III. Évaluer les contrôles de conformité aux lois et règlements. IV. Déterminer dans quelle mesure les objectifs et les buts ont été établis.",
    options: [
      "I et III seulement.",
      "I et IV seulement.",
      "I, III et IV seulement.",
      "I, II et IV seulement."
    ],
    solution: "I, III et IV seulement.",
    explication: "L'audit interne devrait évaluer l'efficacité d'un service d'exploitation (I), évaluer les contrôles de conformité aux lois et règlements (III), et vérifier dans quelle mesure les objectifs et les buts ont été établis (IV). La protection des actifs (II) relève de la responsabilité de la direction et non de l'audit interne."
  },
  {
    id: 15,
    question: "L'approche consultative en matière d'audit interne met l'accent sur :",
    options: [
      "L'imposition de mesures correctives.",
      "La participation avec les clients de la mission afin d'améliorer les méthodes.",
      "Les enquêtes sur les fraudes.",
      "La mise en œuvre des politiques et des procédures."
    ],
    solution: "La participation avec les clients de la mission afin d'améliorer les méthodes.",
    explication: "Les auditeurs internes doivent entretenir une relation satisfaisante avec les clients des missions. Afin d'améliorer cette relation, il est bon d'impliquer le client dans toutes les missions. Le développement d'une relation positive crée un environnement plus favorable à l'effort d'engagement."
  },
  {
    id: 16,
    question: "Un CIA agissant comme directeur des achats signe un contrat, puis le fournisseur lui présente un don d'une valeur monétaire importante. Laquelle des affirmations concernant l'acceptation du cadeau est correcte ?",
    options: [
      "L'acceptation du cadeau ne serait interdite que s'il n'était pas habituel.",
      "L'acceptation du cadeau violerait le Code de déontologie de l'IIA et serait interdite.",
      "Comme le CIA n'agit pas à titre d'auditeur interne, l'acceptation du don serait régie uniquement par le code de conduite de l'organisme.",
      "Étant donné que le contrat a été signé avant que le cadeau ne soit offert, l'acceptation du cadeau ne violerait ni le Code de déontologie de l'IIA ni le code de conduite."
    ],
    solution: "L'acceptation du cadeau violerait le Code de déontologie de l'IIA et serait interdite.",
    explication: "Tant que la personne détient la désignation du CIA, elle devrait être guidée par le code de déontologie de la profession en plus du code de conduite de l'organisation. La règle de conduite 2.2 exclut de tels cadeaux parce qu'on peut présumer qu'ils ont influencé la décision de l'individu."
  },
  {
    id: 17,
    question: "Un examen du code de conduite d'une organisation a révélé que les employés connaissaient ses dispositions mais ne les respectaient pas. Quel élément un code de conduite devrait-il contenir pour améliorer son efficacité ?",
    options: [
      "Examen périodique et reconnaissance par tous les employés.",
      "L'implication des salariés dans son développement.",
      "Connaissance par le public de son contenu et de sa finalité.",
      "Dispositions prévoyant des mesures disciplinaires en cas d'infraction."
    ],
    solution: "Dispositions prévoyant des mesures disciplinaires en cas d'infraction.",
    explication: "Des dispositions prévoyant des mesures disciplinaires en cas d'infraction constitueraient le moyen le plus efficace de décourager l'inconduite. Un examen périodique ou l'implication des employés ne seraient pas très utiles puisque l'acceptation du code n'est pas le problème."
  },
  {
    id: 18,
    question: "Lequel des énoncés suivants n'est pas approprié à inclure dans la politique sur les conflits d'intérêts d'un fabricant ? Un employé ne doit pas :",
    options: [
      "Accepter de l'argent, des cadeaux ou des services d'un client.",
      "Participer (directement ou indirectement) à la gestion d'un organisme public.",
      "Emprunter ou prêter de l'argent à des fournisseurs.",
      "Utiliser l'information organisationnelle à des fins privées."
    ],
    solution: "Participer (directement ou indirectement) à la gestion d'un organisme public.",
    explication: "Une personne a le droit de participer à la gestion d'un organisme public (un organisme gouvernemental). Par conséquent, il ne serait pas inclus dans la politique sur les conflits d'intérêts d'un fabricant. Les autres options représentent des conflits d'intérêts légitimes."
  },
  {
    id: 19,
    question: "Un auditeur interne a découvert que la direction avait capitalisé des frais d'entretien qui auraient dû être passés en charges. Si l'auditeur omet de communiquer cette information à la direction générale ou au comité d'audit, il enfreindrait quelle règle de conduite ?",
    options: [
      "Intégrité.",
      "Objectivité.",
      "Confidentialité.",
      "Compétence."
    ],
    solution: "Objectivité.",
    explication: "L'auditeur interne ne respecterait pas la règle d'objectivité. Conformément à la règle 2.3, les auditeurs internes doivent divulguer tous les faits importants dont ils ont connaissance qui, s'ils ne sont pas divulgués, risquent de fausser les rapports sur les activités examinées."
  },
  {
    id: 20,
    question: "Laquelle des professions concomitantes suivantes pourrait sembler porter atteinte au comportement éthique d'un auditeur interne ?",
    options: [
      "Auditeur interne et président local d'un organisme de bienfaisance bien connu.",
      "Auditeur interne et courtier en assurance des entreprises à temps partiel.",
      "Auditeur interne et membre auxiliaire du corps professoral d'une école de commerce locale.",
      "Auditeur interne et propriétaire d'immeubles d'habitation à logements multiples."
    ],
    solution: "Auditeur interne et courtier en assurance des entreprises à temps partiel.",
    explication: "Selon le Code, un auditeur interne ne doit pas participer à une activité ou à une relation qui pourrait nuire ou être présumée nuire à son évaluation impartiale. Un auditeur interne et un courtier en assurance à temps partiel seraient considérés comme incompatibles."
  },
  {
    id: 21,
    question: "Dans le cadre d'un programme de prix parrainé par l'entreprise, un auditeur interne se voit offrir un prix d'une valeur monétaire importante en reconnaissance des économies de coûts découlant de ses recommandations. Quelle est la mesure la plus appropriée à prendre ?",
    options: [
      "Accepter le cadeau parce que la mission est déjà terminée et le rapport déjà émis.",
      "Accepter le prix à la condition que tous les profits aillent à des œuvres de charité.",
      "Informer la direction de l'audit et demander des directives sur l'acceptation ou le refus du cadeau.",
      "Refuser le cadeau et aviser le supérieur du chef de division."
    ],
    solution: "Informer la direction de l'audit et demander des directives sur l'acceptation ou le refus du cadeau.",
    explication: "Même si le don a une valeur importante, étant donné qu'il fait partie d'un programme parrainé par l'entreprise, il pourrait être acceptable que l'auditeur interne l'accepte. Toutefois, il est toujours recommandé que l'auditeur interne confirme d'abord l'acceptation auprès du RAI."
  },
  {
    id: 22,
    question: "Vers la fin d'une mission, l'auditeur découvre que le directeur du marketing a une habitude de jeu non directement liée à la mission. L'auditeur note le problème, le transmet au RAI, mais n'effectue aucun suivi supplémentaire. Les actions de l'auditeur le feraient :",
    options: [
      "Violer le Code d'éthique de l'IIA pour avoir dissimulé des renseignements utiles.",
      "Enfreindre les normes parce que l'auditeur n'a pas donné suite comme il se doit à un signal d'alerte qui pourrait indiquer l'existence d'une fraude.",
      "Ne pas contrevenir au Code de déontologie ou aux normes de l'IIA.",
      "Violer à la fois le Code d'éthique et les normes."
    ],
    solution: "Ne pas contrevenir au Code de déontologie ou aux normes de l'IIA.",
    explication: "Il n'y a aucune violation du Code d'éthique ou des Normes. L'auditeur ne retient pas d'information parce que l'information a été transmise au RAI. L'information peut être utile dans le cadre d'une mission ultérieure dans le domaine du marketing."
  },
  {
    id: 23,
    question: "Dans lequel des cas suivants un auditeur interne manquerait-il potentiellement d'objectivité ?",
    options: [
      "L'auditeur interne examine les procédures pour une nouvelle connexion EDI avec un client important avant sa mise en œuvre.",
      "Un ancien assistant aux achats effectue un examen des contrôles internes sur les achats quatre mois après avoir été transféré à l'activité d'audit interne.",
      "Un auditeur interne recommande des normes de contrôle et des mesures de rendement pour un contrat avec un organisme de services.",
      "Un employé de la comptabilité de la paie aide un auditeur interne à vérifier l'inventaire physique des petits moteurs."
    ],
    solution: "Un ancien assistant aux achats effectue un examen des contrôles internes sur les achats quatre mois après avoir été transféré à l'activité d'audit interne.",
    explication: "Selon les normes, les personnes mutées à l'activité d'audit interne ne devraient pas être affectées à des activités d'audit qu'elles ont déjà exécutées avant qu'une période raisonnable (au moins un an) ne se soit écoulée."
  },
  {
    id: 24,
    question: "L'objectivité d'un auditeur pourrait être compromise dans toutes les situations suivantes, SAUF :",
    options: [
      "Un conflit d'intérêts.",
      "Familiarité de l'entité vérifiée avec l'auditeur en raison de l'absence de rotation dans l'affectation.",
      "Prise en charge temporaire de fonctions opérationnelles par l'auditeur.",
      "S'en remettre à l'opinion d'experts externes, s'il y a lieu."
    ],
    solution: "S'en remettre à l'opinion d'experts externes, s'il y a lieu.",
    explication: "Il est fort probable qu'un auditeur doive à un moment donné se fier à l'opinion d'un expert externe, ce qui ne compromet pas l'objectivité. En revanche, un conflit d'intérêts, la trop grande familiarité avec l'entité auditée et la prise en charge de tâches opérationnelles peuvent compromettre l'objectivité."
  },
  {
    id: 25,
    question: "L'indépendance est très probablement compromise par celle d'un auditeur interne :",
    options: [
      "Poursuite d'une mission dans une division dont il sera bientôt responsable à la suite d'une promotion.",
      "Réduction du périmètre de la mission en raison de restrictions budgétaires.",
      "Participation à un groupe de travail qui recommande des normes pour le contrôle d'un nouveau système de distribution.",
      "Examen des projets de contrat d'un agent d'achat avant leur exécution."
    ],
    solution: "Poursuite d'une mission dans une division dont il sera bientôt responsable à la suite d'une promotion.",
    explication: "Lorsque l'AAI ou un auditeur interne est responsable, ou peut être responsable, d'une opération qu'il pourrait vérifier, l'indépendance et l'objectivité de l'auditeur interne peuvent être compromises. Les restrictions budgétaires ne constituent pas une atteinte à une mission."
  },
  {
    id: 26,
    question: "Lequel des éléments suivants contribue à l'indépendance de l'auditeur interne ?",
    options: [
      "La direction devrait aider l'AAI en examinant et en transmettant les communications de mission au comité d'audit.",
      "L'AAI relève directement du comité d'audit, sans corroborer les communications de mission avec la direction.",
      "L'AAI relève fonctionnellement du comité d'audit, mais rend compte au chef de l'exploitation de toutes les missions liées aux opérations.",
      "L'exactitude des communications de la mission devrait être vérifiée auprès de la direction, et l'AAI devrait ensuite faire rapport à la direction et au comité d'audit."
    ],
    solution: "L'exactitude des communications de la mission devrait être vérifiée auprès de la direction, et l'AAI devrait ensuite faire rapport à la direction et au comité d'audit.",
    explication: "Les auditeurs internes doivent d'abord discuter des conclusions et recommandations avec la direction afin que celle-ci soit en mesure de vérifier l'exactitude des communications de la mission. Les communications finales relatives à la mission seraient ensuite envoyées au comité d'audit."
  },
  {
    id: 27,
    question: "Les auditeurs internes doivent faire la distinction entre une limitation du périmètre et d'autres limitations. Lequel des éléments suivants n'est pas considéré comme une limitation du périmètre ?",
    options: [
      "Le chef de division a indiqué que la partie informatique de la mission prévue devra être reportée à l'année prochaine.",
      "Le conseil revoit le calendrier des travaux de la mission pour l'année et supprime une mission que le RAI jugeait importante.",
      "Le client de la mission a indiqué que certains clients ne peuvent être contactés car l'organisation est en train de négocier des contrats.",
      "Aucune des réponses n'est correcte."
    ],
    solution: "Le conseil revoit le calendrier des travaux de la mission pour l'année et supprime une mission que le RAI jugeait importante.",
    explication: "Le conseil a le droit de supprimer une mission du calendrier de travail annuel de l'AAI. Par conséquent, cela n'est pas considéré comme une limitation du champ d'application. L'impossibilité de réaliser un test prévu ou de contacter certains clients sont des limitations du périmètre."
  },
  {
    id: 28,
    question: "Laquelle des combinaisons suivantes illustre le mieux une limitation du périmètre et la réponse appropriée du RAI ?",
    options: [
      "Le client limite la portée en fonction d'informations exclusives → Signaler uniquement au contrôleur.",
      "Le client ne donnera pas accès aux documents nécessaires pour un programme de travail approuvé → Signaler au Conseil.",
      "Le client demande que la mission soit retardée de 2 semaines pour lui permettre de clôturer ses livres → Signaler directement au Directeur général.",
      "Le client ne permettra pas à l'auditeur de contacter les principaux clients → Aucun rapport n'est nécessaire."
    ],
    solution: "Le client ne donnera pas accès aux documents nécessaires pour un programme de travail approuvé → Signaler au Conseil.",
    explication: "C'est la meilleure combinaison. Si l'auditeur interne n'a pas accès aux dossiers nécessaires pour un programme de travail approuvé, il doit en informer le conseil. Retarder l'audit de deux semaines ne serait pas une limitation du périmètre. Ne pas permettre à l'auditeur de contacter des clients importants est une limitation qui doit être signalée au conseil."
  },
  {
    id: 29,
    question: "L'idéal pour le RAI d'une entreprise en matière de double processus d'établissement de rapports est de :",
    options: [
      "Rendre compte fonctionnellement au directeur financier et administrativement au comité d'audit.",
      "Relever administrativement du conseil d'administration et fonctionnellement de la direction générale.",
      "Relever fonctionnellement du conseil d'administration et administrativement de la direction générale.",
      "Relever administrativement de la direction générale et fonctionnellement de l'auditeur externe."
    ],
    solution: "Relever fonctionnellement du conseil d'administration et administrativement de la direction générale.",
    explication: "Le RAI devrait relever fonctionnellement du conseil ou du comité d'audit et relever administrativement de la direction générale. Ce double processus d'établissement de rapports permet à l'audit interne de s'acquitter de ses responsabilités de manière indépendante."
  },
  {
    id: 30,
    question: "Les rapports administratifs comprennent généralement tous les éléments suivants, À L'EXCEPTION de :",
    options: [
      "Élaborer et soumettre le budget annuel d'audit interne.",
      "Approuver le plan d'audit interne axé sur les risques.",
      "Administration des politiques et procédures relatives aux activités d'audit interne.",
      "Administration des ressources humaines, y compris les évaluations du personnel et la rémunération."
    ],
    solution: "Approuver le plan d'audit interne axé sur les risques.",
    explication: "L'approbation du plan d'audit interne axé sur les risques est liée aux rapports fonctionnels et non aux rapports administratifs. Les rapports administratifs comprennent le budget annuel, l'administration des politiques et procédures, et l'administration des ressources humaines."
  },
  {
    id: 31,
    question: "On s'attend à ce que les auditeurs internes soient objectifs dans l'exécution de leur travail. Laquelle des circonstances suivantes ne compromettrait PAS l'objectivité d'un auditeur interne ? I. L'auditeur a audité un domaine dont il était responsable il y a plus d'un an. II. L'auditeur a accepté un don important d'un client à la suite d'un audit réussie. III. L'auditeur a conçu certaines procédures de contrôle pour un client en mission. IV. L'auditeur a reçu une petite marque d'appréciation d'un client après la fin d'un audit.",
    options: [
      "I et II seulement.",
      "II et III seulement.",
      "I et IV seulement.",
      "II et IV seulement."
    ],
    solution: "I et IV seulement.",
    explication: "L'audit d'un domaine dont l'auditeur était responsable il y a plus d'un an (I) et l'acceptation d'une petite marque d'appréciation (IV) ne compromettent pas l'objectivité. En revanche, l'acceptation d'un don important (II) et la conception de procédures de contrôle pour un client (III) sont perçues comme des atteintes à l'objectivité."
  },
  {
    id: 32,
    question: "La participation d'un auditeur interne à l'évaluation de la fonction des comptes créditeurs de l'organisation devrait comprendre tous les éléments suivants, SAUF :",
    options: [
      "Vérifier si les soldes des fournisseurs de l'organisation sont déclarés avec exactitude.",
      "Recommander des domaines à améliorer.",
      "Élaborer des plans d'audit pour les vérifications futures.",
      "Rédaction de procédures visant à améliorer le contrôle de la fonction des comptes fournisseurs."
    ],
    solution: "Rédaction de procédures visant à améliorer le contrôle de la fonction des comptes fournisseurs.",
    explication: "Les auditeurs internes ne devraient pas rédiger ou concevoir de procédures de contrôle, car cela nuirait à leur objectivité lors des missions futures. Ils peuvent vérifier l'exactitude des soldes, recommander des améliorations et élaborer des plans d'audit."
  },
  {
    id: 33,
    question: "Lequel des énoncés suivants est correct concernant une mission de conseil ?",
    options: [
      "L'auditeur fournit une évaluation et émet une opinion sur le bon fonctionnement de l'entreprise.",
      "L'auditeur n'a pas besoin d'être indépendant, mais il doit être objectif.",
      "L'auditeur doit être objectif dans son enquête et indépendant dans sa décision.",
      "Les missions sont une analyse des événements passés."
    ],
    solution: "L'auditeur n'a pas besoin d'être indépendant, mais il doit être objectif.",
    explication: "Dans une mission de conseil, l'auditeur n'a pas besoin d'être indépendant, mais il doit être objectif. Les autres affirmations décrivent des caractéristiques des missions d'assurance et non des missions de conseil."
  },
  {
    id: 34,
    question: "L'objectivité individuelle signifie que :",
    options: [
      "Les auditeurs internes doivent tirer des conclusions basées sur des faits sans être influencés par des sentiments, des émotions, des relations ou toute autre influence extérieure.",
      "Les auditeurs internes doivent faire rapport à un niveau de l'organisation qui permet à l'activité d'audit interne de s'acquitter de ses responsabilités.",
      "Ni a ni b ne sont corrects.",
      "a et b sont corrects."
    ],
    solution: "Les auditeurs internes doivent tirer des conclusions basées sur des faits sans être influencés par des sentiments, des émotions, des relations ou toute autre influence extérieure.",
    explication: "L'objectivité individuelle signifie que les auditeurs internes doivent tirer des conclusions basées sur des faits sans être influencés par des sentiments, des émotions, des relations, des pots-de-vin ou toute autre influence extérieure. L'autre affirmation porte sur l'indépendance et non sur l'objectivité."
  },
  {
    id: 35,
    question: "Pour être efficaces, les auditeurs internes doivent jouir d'une indépendance organisationnelle. Sur cette base, le conseil autorise l'activité d'audit interne à : I. Avoir un accès illimité à toutes les fonctions, dossiers, biens et personnel. II. Avoir un accès illimité à tous les documents de travail d'audit externe. III. Affecter les ressources nécessaires pour atteindre les objectifs de l'audit.",
    options: [
      "I seulement.",
      "II et III seulement.",
      "I et III seulement.",
      "I et II seulement."
    ],
    solution: "I et III seulement.",
    explication: "L'indépendance de l'audit interne est atteinte lorsque les auditeurs internes ont un accès illimité à toutes les fonctions, tous les dossiers, tous les biens et tout le personnel pertinents (I), et lorsqu'ils disposent des ressources nécessaires pour atteindre les objectifs de l'audit (III). L'audit interne n'aura pas un accès illimité aux documents de travail de l'auditeur externe (II)."
  },
  {
    id: 36,
    question: "La direction envisage de remplacer son ancien système par un système ERP. Lequel des éléments suivants serait un rôle d'audit interne approprié dans l'achat du système ERP ?",
    options: [
      "Déterminer si l'étude de faisabilité traite de la relation coûts-avantages.",
      "Solliciter des soumissions auprès des fournisseurs.",
      "Déterminer les exigences pour la préparation d'un manuel de spécifications.",
      "Participer à l'acquisition et à la mise en œuvre de l'ERP."
    ],
    solution: "Déterminer si l'étude de faisabilité traite de la relation coûts-avantages.",
    explication: "L'audit interne aurait un rôle à jouer pour déterminer si l'étude de faisabilité traite de la relation coûts-avantages. L'appel d'offres auprès des fournisseurs, la détermination des exigences pour un manuel de spécifications et la participation à l'acquisition et à la mise en œuvre du PGI sont des rôles de gestion."
  },
  {
    id: 37,
    question: "Lequel des énoncés suivants n'est pas vrai en ce qui concerne un conflit d'intérêts ?",
    options: [
      "Il y a conflit d'intérêts même s'il n'en résulte aucun acte contraire à l'éthique ou inapproprié.",
      "Un conflit d'intérêts peut créer une apparence d'irrégularité qui mine la confiance dans l'auditeur interne.",
      "Un auditeur interne qui se trouve en situation de conflit d'intérêts dans le cadre d'une activité de consultation devrait être démis de ses fonctions.",
      "Un conflit d'intérêts pourrait nuire à la capacité d'un auditeur d'exercer ses fonctions de façon objective."
    ],
    solution: "Un auditeur interne qui se trouve en situation de conflit d'intérêts dans le cadre d'une activité de consultation devrait être démis de ses fonctions.",
    explication: "Cette affirmation est fausse. Un auditeur qui se trouve en situation de conflit d'intérêts dans le cadre d'une activité de consultation devrait divulguer ce conflit au client. Si le client n'a pas d'objection, l'auditeur peut rester dans la mission de conseil."
  },
  {
    id: 38,
    question: "Lequel des éléments suivants ne constituerait pas une procédure de maintien de l'objectivité par le RAI ?",
    options: [
      "Veiller à ce que les affectations minimisent les conflits d'intérêts potentiels.",
      "Promouvoir le perfectionnement professionnel continu.",
      "Élaborer un solide système de PAAQ pour assurer l'indépendance et l'objectivité.",
      "Faire une rotation périodique des missions d'audit interne."
    ],
    solution: "Promouvoir le perfectionnement professionnel continu.",
    explication: "La promotion du perfectionnement professionnel continu améliore les compétences et les connaissances, mais ne favorise pas directement l'objectivité. Les autres options (minimiser les conflits d'intérêts, le PAAQ et la rotation des missions) contribuent directement à maintenir l'objectivité."
  },
  {
    id: 39,
    question: "Au cours d'un audit interne, l'auditeur interne doit faire preuve de la diligence professionnelle requise. Le soin professionnel dû signifie que l'auditeur interne doit prendre en considération : I. L'étendue du travail nécessaire. II. La complexité relative et l'importance relative. III. La probabilité d'erreurs, d'irrégularités ou de non-conformités importantes. IV. Les procédures nécessaires pour s'assurer que tous les risques significatifs ont été identifiés.",
    options: [
      "I et II seulement.",
      "I, II et IV seulement.",
      "I, II, III et IV.",
      "I, II et III seulement."
    ],
    solution: "I, II et III seulement.",
    explication: "Seuls les points I, II et III sont corrects. L'auditeur interne ne peut fournir qu'une assurance raisonnable que les risques significatifs seront identifiés (IV), et non une garantie. Les procédures de mission, même lorsqu'elles sont exercées avec la diligence professionnelle requise, ne peuvent garantir que tous les risques importants seront identifiés."
  },
  {
    id: 40,
    question: "Du point de vue de la direction, quelle attitude de l'audit interne est susceptible d'être la plus propice à une perception positive ?",
    options: [
      "Interrogatoire.",
      "Enquête.",
      "Conseil.",
      "Objectif."
    ],
    solution: "Conseil.",
    explication: "Une attitude consultative conduit à une communication bidirectionnelle, ce qui est perçu positivement par la direction. Une attitude interrogative ou d'enquête n'est pas susceptible d'améliorer la relation, et l'objectivité seule ne mène pas à une relation meilleure et plus positive."
  },
  {
    id: 41,
    question: "Les auditeurs internes doivent avoir la compréhension dans quelle discipline ?",
    options: [
      "Procédures et techniques d'audit interne.",
      "Principes et techniques comptables.",
      "Principes de gestion.",
      "Techniques de marketing."
    ],
    solution: "Principes de gestion.",
    explication: "L'auditeur interne doit comprendre les principes de gestion. L'auditeur interne doit maîtriser les procédures et techniques d'audit et avoir une bonne connaissance des principes et techniques comptables. Les techniques de marketing ne sont pas une discipline pertinente pour les auditeurs internes."
  },
  {
    id: 42,
    question: "Les normes exigent que les auditeurs internes possèdent lesquelles des compétences suivantes ? I. Comprendre les relations humaines et être capables de traiter avec les gens. II. Être en mesure de reconnaître et d'évaluer l'importance relative des écarts par rapport aux bonnes pratiques commerciales. III. Être des experts dans des domaines tels que l'économie, le droit commercial, la fiscalité, les finances et les technologies de l'information. IV. Être compétents en communication orale et écrite.",
    options: [
      "I et II seulement.",
      "I, II et III seulement.",
      "I, II, III et IV.",
      "I, II et IV seulement."
    ],
    solution: "I, II et IV seulement.",
    explication: "Les auditeurs internes doivent comprendre les relations humaines (I), évaluer l'importance relative des écarts (II) et être compétents en communication (IV). On ne s'attend pas à ce que les auditeurs internes soient des experts dans une grande variété de domaines spécialisés (III)."
  },
  {
    id: 43,
    question: "Votre organisation vous a choisi pour développer une activité d'audit interne. Votre approche sera très probablement d'embaucher :",
    options: [
      "Des auditeurs internes qui possèdent toutes les compétences requises pour mener à bien toutes les missions.",
      "Le personnel inexpérimenté et les former dans la façon dont l'organisation veut qu'ils soient formés.",
      "Les personnes titulaires d'un diplôme en comptabilité parce que la plupart des travaux d'audit interne sont liés à la comptabilité.",
      "Les auditeurs internes qui possèdent collectivement les connaissances et les compétences nécessaires pour s'acquitter des responsabilités de l'AAI."
    ],
    solution: "Les auditeurs internes qui possèdent collectivement les connaissances et les compétences nécessaires pour s'acquitter des responsabilités de l'AAI.",
    explication: "Collectivement, l'AAI devrait posséder les compétences, les connaissances et l'expérience nécessaires pour mener à bien ses activités. L'AAI peut faire appel à des ressources internes et externes qualifiées dans des disciplines comme la comptabilité, la fiscalité, le génie, le droit, l'environnement et les TI."
  },
  {
    id: 44,
    question: "Les normes de l'IIA exigent que les auditeurs internes possèdent les connaissances essentielles pour effectuer un audit. Lequel des énoncés suivants est vrai ? I. Être compétent dans l'application des normes et procédures d'audit sans avoir recours à la recherche étendue. II. Maîtriser les principes comptables lors de l'audit des registres et des rapports financiers. III. Maîtriser l'application des connaissances de la comptabilité et des systèmes d'information informatisés.",
    options: [
      "I seulement.",
      "I et II seulement.",
      "II et III seulement.",
      "I, II et III."
    ],
    solution: "I et II seulement.",
    explication: "Les auditeurs internes doivent être compétents dans l'application des normes (I) et maîtriser les principes comptables lors de l'audit des états financiers (II). Pour la comptabilité et les systèmes d'information informatisés (III), les auditeurs internes doivent avoir une appréciation et non une compétence."
  },
  {
    id: 45,
    question: "Dans le cadre du contrôle de la qualité, l'objectif premier de la formation professionnelle continue est de permettre à l'activité d'audit interne de fournir à son personnel :",
    options: [
      "Formation technique pour que ses auditeurs internes soient des experts en évaluation.",
      "La formation professionnelle nécessaire à l'exécution d'une mission avec toute l'attention professionnelle requise.",
      "Connaissances requises pour s'acquitter des responsabilités assignées.",
      "Connaissances requises pour effectuer un examen par les pairs."
    ],
    solution: "Connaissances requises pour s'acquitter des responsabilités assignées.",
    explication: "Une formation professionnelle continue est nécessaire pour que les auditeurs internes aient les connaissances et les compétences nécessaires pour s'acquitter des responsabilités qui leur sont confiées. L'objectif n'est pas de former des experts en évaluation ni de préparer des examens par les pairs."
  },
  {
    id: 46,
    question: "Lorsqu'un auditeur interne n'est pas qualifié pour exécuter une mission, il doit :",
    options: [
      "Acquérir les connaissances et les compétences requises.",
      "Proposer quelqu'un d'autre qui est qualifié pour effectuer le travail.",
      "Refuser les fiançailles.",
      "L'une ou l'autre de ces réponses."
    ],
    solution: "L'une ou l'autre de ces réponses.",
    explication: "Lorsqu'un auditeur interne n'est pas qualifié pour exécuter une mission, toutes ces options peuvent être appropriées selon le contexte : acquérir les compétences requises, proposer quelqu'un de qualifié, ou refuser la mission."
  },
  {
    id: 47,
    question: "Lors de l'embauche d'un auditeur interne éventuel, il faut obtenir une assurance raisonnable quant aux qualifications et à la compétence du candidat. Lequel des éléments suivants est l'application la MOINS utile de ce principe ?",
    options: [
      "Déterminer que tous les candidats sont titulaires d'un diplôme en comptabilité.",
      "Obtenir des relevés de notes d'université.",
      "Vérification des références d'un candidat.",
      "Déterminer l'expérience professionnelle antérieure."
    ],
    solution: "Déterminer que tous les candidats sont titulaires d'un diplôme en comptabilité.",
    explication: "Il n'est pas nécessaire que chaque membre du personnel d'audit interne possède un diplôme en comptabilité. L'activité d'audit interne doit posséder ou acquérir collectivement les connaissances, les aptitudes et les autres compétences nécessaires pour s'acquitter de ses responsabilités (norme 1210)."
  },
  {
    id: 48,
    question: "L'activité d'audit interne (AAI) peut jouer un rôle important dans la prévention et la détection des fraudes importantes en se voyant confier toutes les tâches suivantes, SAUF :",
    options: [
      "Examiner les dépenses importantes, anormales ou inexpliquées.",
      "Examiner les dépenses délicates comme les frais juridiques et les honoraires d'experts-conseils.",
      "Passer en revue toutes les fonctions de contrôle relatives aux rentrées de petite caisse.",
      "Examiner les contributions de l'organisation qui semblent inhabituelles."
    ],
    solution: "Passer en revue toutes les fonctions de contrôle relatives aux rentrées de petite caisse.",
    explication: "L'auditeur interne doit faire preuve de la diligence professionnelle requise en tenant compte de la complexité et de l'importance relative des questions. Le coût de l'assurance par rapport aux avantages potentiels devrait également être pris en compte. L'examen de tous les contrôles relatifs à la petite caisse serait considéré comme excessif et inefficace."
  },
  {
    id: 49,
    question: "Un nouveau RAI d'une grande entreprise de vente au détail remet en question le recours généralisé aux tests de conformité en magasin, déclarant que l'approche ne tient pas compte de l'importance relative. Lesquels des énoncés suivants sont valides en réponse ? I. L'importance relative n'est pas seulement basée sur la taille des points de vente individuels, mais aussi sur la structure de contrôle. II. Tout écart par rapport à une procédure de contrôle prescrite est, par définition, important. III. La seule façon d'examiner un montant important de la structure de contrôle est un audit complet de tous les magasins.",
    options: [
      "I seulement.",
      "III seulement.",
      "I et II seulement.",
      "I, II et III."
    ],
    solution: "I seulement.",
    explication: "Seul le point I est correct. L'importance relative est définie par l'impact potentiel d'un élément sur l'organisation et ne se limite pas aux éléments évalués uniquement en termes quantitatifs. Il peut y avoir des défaillances de contrôle d'une nature mineure qui ne seraient pas considérées comme importantes (II faux). Des méthodes d'échantillonnage peuvent être utilisées (III faux)."
  },
  {
    id: 50,
    question: "Un auditeur interne publie un rapport sur l'évaluation des procédures visant à accroître la diversité de l'effectif et a formulé des recommandations. En ce qui concerne la diligence professionnelle requise, l'auditeur interne effectuerait un suivi pour s'assurer que :",
    options: [
      "Le client a suivi les recommandations de l'auditeur interne.",
      "L'organisation est conforme à ses politiques en matière de diversité.",
      "Le client a tenu compte des constatations de l'audit et a pris des mesures pour améliorer la diversité.",
      "Tout ce qui précède est vrai."
    ],
    solution: "Le client a tenu compte des constatations de l'audit et a pris des mesures pour améliorer la diversité.",
    explication: "L'exercice d'une diligence professionnelle appropriée comprend le suivi pour s'assurer que le client a pris les mesures appropriées. Cela ne signifie pas que le client doit mettre en œuvre toutes les recommandations présentées par l'auditeur, mais on s'attend à ce qu'il les examine."
  },
  {
    id: 51,
    question: "En ce qui concerne les missions d'assurance, il faut faire preuve de la diligence professionnelle requise. Cela implique :",
    options: [
      "Un examen détaillé de toutes les transactions.",
      "L'infaillibilité et la performance extraordinaire lorsque le système de contrôle interne est connu pour être faible.",
      "La prise en compte de la possibilité d'irrégularités matérielles lors de chaque mission.",
      "Des essais suffisamment détaillés pour donner l'assurance absolue qu'il n'y a pas de non-conformité."
    ],
    solution: "La prise en compte de la possibilité d'irrégularités matérielles lors de chaque mission.",
    explication: "La diligence professionnelle raisonnable implique un soin et une compétence raisonnables, et non l'infaillibilité ou une performance extraordinaire. L'auditeur interne n'est pas en mesure de donner une assurance absolue à 100 %, mais seulement une assurance raisonnable."
  },
  {
    id: 52,
    question: "Le soin professionnel requis dans le cadre d'un examen des contrôles internes à l'égard de l'information financière devrait tenir compte de tous les éléments suivants, SAUF :",
    options: [
      "Le contenu des documents de travail est suffisant pour étayer l'opinion de l'auditeur interne.",
      "Les éléments probants contenus dans les documents de travail sont principalement utilisés pour protéger la société dans le cas d'une poursuite intentée par des investisseurs.",
      "La probabilité d'erreurs significatives, de fraude ou de non-conformité.",
      "Le coût de la mission par rapport aux avantages potentiels."
    ],
    solution: "Les éléments probants contenus dans les documents de travail sont principalement utilisés pour protéger la société dans le cas d'une poursuite intentée par des investisseurs.",
    explication: "S'assurer que l'entreprise est protégée contre de futures poursuites judiciaires n'est pas un aspect du soin professionnel dû. La diligence raisonnable comprend l'adéquation des documents de travail, la probabilité d'erreurs significatives et le coût de la mission par rapport aux avantages."
  },
  {
    id: 53,
    question: "Lorsqu'il a recours aux services d'un fournisseur de services externe, le RAI doit :",
    options: [
      "Participer à l'embauche du fournisseur de services.",
      "Vérifier que le fournisseur de services possède la désignation du CIA.",
      "Évaluer les compétences et la réputation du fournisseur de services.",
      "Vérifier si le fournisseur de services connaît les normes d'audit interne."
    ],
    solution: "Évaluer les compétences et la réputation du fournisseur de services.",
    explication: "Lorsqu'il a recours aux services d'un fournisseur de services externe, le RAI doit évaluer les compétences et la réputation du fournisseur de services. Le fournisseur n'a pas besoin d'avoir la désignation du CIA ni de connaître spécifiquement les normes d'audit interne."
  },
  {
    id: 54,
    question: "Un auditeur interne devrait avoir une idée de quelle discipline ?",
    options: [
      "Méthodes quantitatives.",
      "Techniques d'audit.",
      "Procédures d'audit.",
      "Normes d'audit interne."
    ],
    solution: "Méthodes quantitatives.",
    explication: "Les auditeurs internes doivent avoir une idée des méthodes quantitatives. En revanche, ils doivent être compétents (et non seulement avoir une idée) dans l'application des techniques d'audit, des procédures d'audit et des normes d'audit interne."
  },
  {
    id: 55,
    question: "Un auditeur interne effectue un audit des opérations de caisse d'un grand magasin. Laquelle des actions suivantes serait considérée comme manquant des soins professionnels appropriés ?",
    options: [
      "Un organigramme de toutes les opérations de caisse a été élaboré, mais seul un échantillon de transactions a été testé.",
      "Le rapport incluait une recommandation de réduction des effectifs, même s'il était reconnu qu'une telle réduction aurait un impact négatif sur le moral.",
      "En raison du système de contrôle interne très développé, le rapport d'audit a assuré à la direction générale qu'il n'y avait aucune irrégularité.",
      "L'auditeur a informé les autorités compétentes de l'organisation de tout soupçon de faute."
    ],
    solution: "En raison du système de contrôle interne très développé, le rapport d'audit a assuré à la direction générale qu'il n'y avait aucune irrégularité.",
    explication: "Il n'est pas possible pour un auditeur d'affirmer avec une assurance absolue qu'aucune irrégularité n'existe. Il convient de ne sélectionner qu'un échantillon des transactions à tester, et si une inefficacité est détectée, il convient de l'inclure dans le rapport."
  },
  {
    id: 56,
    question: "Le RAI s'inquiète du fait qu'une fraude récemment divulguée n'a pas été découverte lors de la dernière mission. Un examen des documents de travail révèle que l'opération frauduleuse n'a pas été incluse dans un échantillon statistique bien conçu. Lequel des énoncés suivants s'applique à cette situation ?",
    options: [
      "Étant donné que les opérations de caisse constituent un secteur à risque élevé, il aurait fallu procéder à un contrôle à 100 % des opérations.",
      "L'auditeur interne a agi avec la diligence professionnelle requise car un échantillon statistique approprié de transactions significatives a été testé.",
      "La fraude n'aurait pas dû passer inaperçue dans une zone récemment examinée.",
      "Une attention particulière est nécessaire et l'auditeur interne devrait être tenu responsable de la surveillance."
    ],
    solution: "L'auditeur interne a agi avec la diligence professionnelle requise car un échantillon statistique approprié de transactions significatives a été testé.",
    explication: "L'auditeur interne n'est en mesure de donner qu'une assurance raisonnable et non absolue. En l'espèce, on a fait preuve de diligence raisonnable parce que l'auditeur interne a utilisé des méthodes d'échantillonnage appropriées. L'auditeur interne ne devrait pas être tenu responsable de la surveillance parce que des méthodes d'échantillonnage appropriées ont été utilisées."
  },
  {
    id: 57,
    question: "Le RAI a interviewé une personne pour un poste d'employé. La personne possède de solides connaissances en comptabilité et en finances, mais une connaissance limitée des systèmes de gestion de l'environnement (SME). Quelle est la mesure la plus appropriée que le RAI doit prendre ?",
    options: [
      "Rejeter l'individu en raison de son manque de connaissance du SME.",
      "Offrir à la personne un poste malgré le manque de connaissance du SME.",
      "Encourager la personne à obtenir une formation supplémentaire sur le SME, puis à présenter une nouvelle demande.",
      "Offrir un poste à la personne si les autres membres du personnel ont une connaissance suffisante du SME."
    ],
    solution: "Offrir un poste à la personne si les autres membres du personnel ont une connaissance suffisante du SME.",
    explication: "Le RAI devrait offrir à la personne un poste d'état-major si les autres membres du personnel ont une connaissance suffisante du SGE. Les normes n'exigent pas que chaque auditeur interne possède toutes les connaissances sur tous les sujets, mais que l'AAI les possède collectivement."
  },
  {
    id: 58,
    question: "La première tâche d'un auditeur interne récemment embauché est d'examiner les activités de gestion de la trésorerie, domaine dans lequel il n'a pas d'expérience. Dans quelles conditions cet arrangement serait-il approprié ? I. L'auditeur interne senior est compétent dans le domaine et supervise étroitement l'auditeur interne du personnel. II. L'auditeur interne du personnel effectue le travail et prépare une communication de mission examinée en détail par le RAI.",
    options: [
      "I seulement.",
      "I et II.",
      "II seulement.",
      "Ni I ni II."
    ],
    solution: "I seulement.",
    explication: "Tant que l'auditeur interne supérieur supervise étroitement l'auditeur interne du personnel (I), il s'agit d'un arrangement approprié. La supervision ne se limite pas à l'examen de la mission (II seul n'est pas suffisant)."
  },
  {
    id: 59,
    question: "Si les auditeurs internes ne parviennent pas à maintenir leur compétence grâce à la formation professionnelle continue, ils pourraient être reconnus coupables d'une infraction à :",
    options: [
      "Les Normes internationales pour la pratique professionnelle de l'audit interne.",
      "Le code d'éthique de l'IIA.",
      "Les normes et le code de déontologie de l'IIA.",
      "Aucune de ces réponses."
    ],
    solution: "Les normes et le code de déontologie de l'IIA.",
    explication: "La règle de conduite 4.3 stipule que les auditeurs internes doivent continuellement améliorer leurs compétences. La règle de conduite 4.2 stipule qu'ils doivent fournir des services conformément aux Normes. La norme 1230 stipule qu'ils doivent améliorer leurs connaissances par la formation professionnelle continue. Ainsi, les normes ET le code de déontologie de l'IIA sont violés."
  },
  {
    id: 60,
    question: "Un auditeur interne soupçonne que les états financiers sont erronés, mais n'a pas de preuves concluantes. L'auditeur interne n'a pas fait preuve de la diligence professionnelle requise s'il :",
    options: [
      "Détermine les façons possibles par lesquelles une inexactitude pourrait se produire et classe les éléments devant faire l'objet d'une enquête.",
      "N'a pas vérifié la présence d'inexactitudes possibles parce que le programme de travail de la mission avait déjà été approuvé par la direction.",
      "Informe le responsable de la mission des soupçons et lui demande conseil sur la marche à suivre.",
      "Élargit le programme de travail de la mission sans l'approbation du client afin de tenir compte des façons les mieux classées pour lesquelles une inexactitude a pu se produire."
    ],
    solution: "N'a pas vérifié la présence d'inexactitudes possibles parce que le programme de travail de la mission avait déjà été approuvé par la direction.",
    explication: "On s'attend à ce que les programmes de travail puissent être modifiés si les changements dans l'environnement de travail l'exigent. Ainsi, l'auditeur interne ne ferait pas preuve de la diligence professionnelle requise s'il n'enquêtait pas sur une éventuelle inexactitude en raison du fait que le programme de travail avait déjà été approuvé."
  },
  {
    id: 61,
    question: "Les évaluations de la qualité des programmes peuvent être effectuées à l'interne ou à l'externe. L'une des caractéristiques distinctives d'une évaluation externe est son objectif de :",
    options: [
      "Fournir une assurance indépendante.",
      "Présenter les recommandations d'amélioration.",
      "Déterminer si les services d'audit interne répondent aux normes professionnelles.",
      "Identifier les tâches qui peuvent être mieux exécutées."
    ],
    solution: "Fournir une assurance indépendante.",
    explication: "Les évaluations externes de l'AAI devraient évaluer et exprimer une opinion quant à la conformité de l'AAI aux Normes internationales pour la pratique professionnelle de l'audit interne et devraient comprendre des recommandations d'amélioration. C'est l'évaluation interne qui déterminera si les services répondent aux normes et identifiera les tâches qui peuvent être mieux exécutées."
  },
  {
    id: 62,
    question: "L'évaluation externe d'une activité d'audit interne n'est pas susceptible d'évaluer :",
    options: [
      "Les outils et techniques utilisés par l'activité d'audit interne.",
      "Une analyse coûts-avantages détaillée de l'activité d'audit interne.",
      "Le respect des Normes pour la pratique professionnelle internationale de l'audit interne.",
      "Le respect de la charte de l'activité d'audit interne."
    ],
    solution: "Une analyse coûts-avantages détaillée de l'activité d'audit interne.",
    explication: "L'évaluation externe porte sur un vaste champ d'application incluant les outils et techniques, la conformité aux normes et à la charte. Une analyse coûts-avantages détaillée de l'AAI ne ferait pas partie de l'évaluation externe."
  },
  {
    id: 63,
    question: "Vous avez été nommé RAI d'une organisation il y a une semaine. Un client s'est plaint qu'un de vos auditeurs internes prend trop de temps à une mission qui semble manquer d'un but clair. Dans la gestion de ce conflit, vous devez prendre en considération :",
    options: [
      "Promettre au client que l'auditeur interne terminera le travail dans un délai d'une semaine.",
      "Si les procédures existantes au sein de l'activité d'audit interne permettent une planification et une assurance de la qualité adéquates.",
      "Présenter une défense immédiate de l'auditeur interne sur la base de faits actuellement connus.",
      "Ne pas tenir compte de ce qui est dit, mais documenter la plainte."
    ],
    solution: "Si les procédures existantes au sein de l'activité d'audit interne permettent une planification et une assurance de la qualité adéquates.",
    explication: "Le RAI aurait la responsabilité d'examiner les procédures existantes pour déterminer si l'AAI a prévu une planification et une assurance de la qualité adéquates. Promettre sans information de base compromettrait l'autorité de l'AAI, et rejeter les plaintes potentiellement valides serait inapproprié."
  },
  {
    id: 64,
    question: "À l'issue de l'évaluation externe périodique du programme d'assurance et d'amélioration de la qualité, un rapport officiel doit exprimer une opinion sur :",
    options: [
      "L'adéquation du contrôle interne.",
      "L'efficacité de la couverture de l'audit interne.",
      "La conformité à la charte de l'activité d'audit interne.",
      "La conformité de l'activité d'audit interne aux normes."
    ],
    solution: "La conformité de l'activité d'audit interne aux normes.",
    explication: "L'évaluation externe devrait porter sur un vaste champ d'application qui comprend la conformité à la définition de l'audit interne, au Code de déontologie et aux normes. L'opinion exprimée porte sur la conformité aux normes et non sur l'adéquation du contrôle interne ou l'efficacité de la couverture de l'audit."
  },
  {
    id: 65,
    question: "Les évaluations du rendement des auditeurs externes de l'organisation devraient :",
    options: [
      "Ne doit être effectuée qu'au moment de la nomination de l'auditeur externe.",
      "Ne pas inclure la participation de l'activité d'audit interne.",
      "N'inclure l'activité d'audit interne que lorsque l'auditeur externe est nommé.",
      "Inclure les activités d'audit interne au moment de la nomination et régulièrement par la suite."
    ],
    solution: "Inclure les activités d'audit interne au moment de la nomination et régulièrement par la suite.",
    explication: "La direction et le conseil pourraient demander à l'AAI de participer au rendement de l'auditeur externe, y compris l'évaluation de son indépendance. Cette évaluation devrait être effectuée au moins une fois par an."
  },
  {
    id: 66,
    question: "L'interprétation relative à l'assurance de la qualité donnée par les normes est la suivante :",
    options: [
      "L'AAI est principalement mesurée en fonction du Code de déontologie de l'IIA.",
      "Les évaluations externes peuvent fournir à la direction générale et au conseil une assurance indépendante de la qualité de l'AAI.",
      "La supervision continue se limite au processus de planification, d'examen, d'évaluation, de communication et de suivi.",
      "Le suivi approprié d'une évaluation externe relève de la responsabilité du superviseur immédiat du RAI."
    ],
    solution: "Les évaluations externes peuvent fournir à la direction générale et au conseil une assurance indépendante de la qualité de l'AAI.",
    explication: "Les évaluations externes d'une activité d'audit interne évaluent et expriment une opinion quant à la conformité de l'AAI aux normes et, le cas échéant, devraient comprendre des recommandations d'amélioration. Il incombe au RAI (et non à son superviseur immédiat) d'assurer un suivi approprié."
  },
  {
    id: 67,
    question: "Laquelle des personnes suivantes pourrait être prise en considération dans le cadre d'un examen externe périodique de l'AAI au bureau régional d'une organisation ? I. Un auditeur du siège. II. Un pair d'audit interne provenant de l'AAI d'une autre organisation. III. Un conseiller fiscal sans expérience en vérification qui n'examinera que les questions techniques liées aux vérifications fiscales. IV. Un comptable agréé externe ayant de l'expérience en audit interne qui a été auditeur externe des rapports financiers de l'organisation.",
    options: [
      "I et II seulement.",
      "II et III seulement.",
      "I, II, III et IV.",
      "I, II et IV seulement."
    ],
    solution: "I, II et IV seulement.",
    explication: "Un auditeur du siège (I), un pair d'audit interne d'une autre organisation (II), et un comptable agréé ayant de l'expérience en audit interne (IV) pourraient participer à l'examen externe. Seul le conseiller fiscal sans expérience en vérification (III) ne devrait pas faire partie de l'équipe d'évaluation externe."
  },
  {
    id: 68,
    question: "Les procédures décrivant comment l'examen de supervision des auditeurs internes sera effectué devraient être entièrement documentées afin que l'activité d'audit interne :",
    options: [
      "Ait une base pour les promotions, les augmentations de salaire ou les mesures disciplinaires.",
      "Ait la justification de son programme de qualité.",
      "Se conforme aux normes.",
      "Dispose d'un cadre cohérent pour l'évaluation des performances du personnel."
    ],
    solution: "Dispose d'un cadre cohérent pour l'évaluation des performances du personnel.",
    explication: "Le programme de qualité de l'AAI devrait fournir une assurance raisonnable que les travaux d'audit interne sont conformes aux normes, au Code de déontologie, à la charte de l'AAI et aux autres normes applicables. Un cadre cohérent pour l'évaluation des performances du personnel est l'objectif premier."
  },
  {
    id: 69,
    question: "Une activité d'audit interne fait l'objet de son premier examen externe d'assurance qualité depuis sa création il y a trois ans. Laquelle des activités suivantes pourrait influer sur l'évaluation de l'objectivité des auditeurs internes par l'équipe d'examen ?",
    options: [
      "Un auditeur interne a accepté d'effectuer des travaux comptables pour le gestionnaire de la paie à un tarif réduit en dehors des heures de travail.",
      "Dans le cadre d'une mission, le vice-président a remis à l'auditeur une tasse commémorative distribuée à tous les employés présents.",
      "Après avoir examiné la mise en place d'un système informatique, l'auditeur a accepté d'examiner certaines procédures trois mois plus tard à la demande du client.",
      "La participation d'un auditeur interne à un groupe de travail chargé de réduire les pertes de stocks, en tant que première mission de conseil."
    ],
    solution: "Un auditeur interne a accepté d'effectuer des travaux comptables pour le gestionnaire de la paie à un tarif réduit en dehors des heures de travail.",
    explication: "Il est contraire à l'éthique qu'un auditeur interne accepte des honoraires ou un cadeau d'un employé, client, fournisseur ou associé. L'acceptation d'une rémunération ou d'un don peut donner l'impression que l'objectivité de l'auditeur a été compromise et peut s'appliquer aux missions actuelles et futures."
  },
  {
    id: 70,
    question: "L'IIA a élaboré un exposé de position intitulé 'The Three Lines of Defense in Effective Risk Management and Control'. Lequel des énoncés suivants décrit le mieux l'objet du document ?",
    options: [
      "Fournir un moyen simple et efficace d'améliorer les communications sur la gestion et le contrôle des risques.",
      "Présenter les fonctions du comité d'audit.",
      "Décrire les fonctions de contrôle de l'activité d'audit interne.",
      "Un moyen d'alerter la direction opérationnelle des questions émergentes et de l'évolution des scénarios réglementaires."
    ],
    solution: "Fournir un moyen simple et efficace d'améliorer les communications sur la gestion et le contrôle des risques.",
    explication: "Le document présente un moyen simple et efficace d'améliorer les communications sur la gestion et le contrôle des risques. L'audit interne est la troisième ligne de défense, mais le document ne décrit pas spécialement ses fonctions de surveillance. La deuxième ligne de défense consiste à alerter la direction opérationnelle des questions émergentes."
  },
  {
    id: 71,
    question: "Lequel des énoncés suivants décrit le mieux la gouvernance organisationnelle ?",
    options: [
      "La gouvernance organisationnelle est la façon dont les entreprises sont planifiées et dirigées.",
      "La gouvernance organisationnelle est l'ensemble des processus et des structures mis en œuvre par le conseil pour informer, diriger, gérer et surveiller l'atteinte de ses objectifs.",
      "La gouvernance organisationnelle comprend le suivi et la réduction au minimum des lacunes en matière de contrôle.",
      "Les processus de gouvernance organisationnelle sont fondés sur des règles plutôt que sur des principes."
    ],
    solution: "La gouvernance organisationnelle est l'ensemble des processus et des structures mis en œuvre par le conseil pour informer, diriger, gérer et surveiller l'atteinte de ses objectifs.",
    explication: "Le Glossaire des normes de l'IIA définit la gouvernance organisationnelle comme l'ensemble des processus et des structures mis en œuvre par le conseil d'administration pour informer, diriger, gérer et surveiller la réalisation de ses objectifs. Les processus de gouvernance sont fondés sur des principes et non sur des règles."
  },
  {
    id: 72,
    question: "Un auditeur interne devrait jouer un rôle essentiel dans l'évaluation et l'amélioration du processus de gouvernance d'une entreprise. Le rôle de l'audit interne comprendrait tous les éléments suivants, À L'EXCEPTION de :",
    options: [
      "Examiner la documentation existante sur la gouvernance.",
      "Élaborer le plan d'audit.",
      "Signaler les violations aux autorités extérieures.",
      "Exécuter le plan d'audit approuvé."
    ],
    solution: "Signaler les violations aux autorités extérieures.",
    explication: "En règle générale, l'audit interne ne signalerait pas les violations de la gouvernance aux autorités externes, à moins qu'on ne lui demande expressément de le faire ou qu'il y ait une obligation légale de le faire. L'audit interne examinerait la documentation, élaborerait et exécuterait le plan d'audit."
  },
  {
    id: 73,
    question: "L'environnement de contrôle d'une entreprise est le fondement d'un système de contrôle interne efficace. Lequel des éléments suivants n'est pas une composante de l'environnement de contrôle d'une entreprise ?",
    options: [
      "Philosophie de gestion et style de fonctionnement.",
      "Intégrité et valeurs éthiques.",
      "Formuler des objectifs d'affaires.",
      "Compétence du personnel."
    ],
    solution: "Formuler des objectifs d'affaires.",
    explication: "La formulation des objectifs commerciaux vient après l'évaluation de l'environnement de contrôle d'une entreprise et fait partie du processus d'évaluation des risques. La philosophie de gestion, l'intégrité et les valeurs éthiques, et la compétence du personnel font partie intégrante de l'environnement de contrôle."
  },
  {
    id: 74,
    question: "Lequel des éléments suivants représente la meilleure structure de gouvernance ?",
    options: [
      "Direction : Responsabilité du risque | Conseil et comité d'audit : Rôle de supervision | Audit interne : Rôle de conseil.",
      "Direction : Rôle de supervision | Conseil et comité d'audit : Responsabilité du risque | Audit interne : Rôle de conseil.",
      "Direction : Responsabilité du risque | Conseil et comité d'audit : Rôle de conseil | Audit interne : Rôle de supervision.",
      "Direction : Rôle de supervision | Conseil et comité d'audit : Rôle de conseil | Audit interne : Responsabilité du risque."
    ],
    solution: "Direction : Responsabilité du risque | Conseil et comité d'audit : Rôle de supervision | Audit interne : Rôle de conseil.",
    explication: "La direction générale est responsable de la gestion des risques, le conseil d'administration et le comité d'audit assurent une fonction de surveillance, et les auditeurs internes jouent un rôle de surveillance et de consultation. C'est la direction générale qui est responsable des risques, et non le conseil d'administration ni l'audit interne."
  },
  {
    id: 75,
    question: "Les méthodes d'évaluation du climat éthique d'une organisation comprennent toutes les méthodes suivantes, À L'EXCEPTION de :",
    options: [
      "Examiner les politiques et les processus liés à l'éthique.",
      "Réalisation d'un sondage sur l'éthique.",
      "Faciliter un programme de formation lié à l'éthique.",
      "Effectuer des vérifications de fonctions précises liées à l'éthique."
    ],
    solution: "Faciliter un programme de formation lié à l'éthique.",
    explication: "Faciliter un programme de formation lié à l'éthique est un moyen de promouvoir un climat éthique au sein de l'organisation, et non de l'évaluer. En revanche, examiner les politiques, réaliser des sondages et effectuer des vérifications de fonctions sont des méthodes d'évaluation du climat éthique."
  },
  {
    id: 76,
    question: "La responsabilité sociale des entreprises (RSE) reconnaît que :",
    options: [
      "Les entreprises ont une responsabilité quant à leur impact sur la société et l'environnement.",
      "L'environnement naturel est l'objectif premier de chaque organisation.",
      "Les droits de l'homme sont appliqués uniquement par les gouvernements nationaux.",
      "Les entreprises doivent accorder la même attention aux intérêts des actionnaires."
    ],
    solution: "Les entreprises ont une responsabilité quant à leur impact sur la société et l'environnement.",
    explication: "La RSE est généralement comprise comme signifiant que les entreprises ont une certaine responsabilité non seulement pour les conséquences économiques de leurs activités, mais aussi pour les implications sociales et environnementales. La RSE reconnaît le rôle des entreprises dans les droits de l'homme, et non que leur responsabilité se limite aux actionnaires."
  },
  {
    id: 77,
    question: "L'un des plus grands défis de la responsabilité sociale des entreprises (RSE) est :",
    options: [
      "Identifier les différents groupes qui ont un intérêt légitime dans la société.",
      "Décider de l'information à communiquer.",
      "Identifier les questions financières qui préoccupent les parties prenantes.",
      "Décider du rôle de l'audit interne dans la RSE."
    ],
    solution: "Décider de l'information à communiquer.",
    explication: "L'un des plus grands défis en matière de RSE est de décider quelles informations communiquer car, contrairement aux rapports financiers, il n'existe pas de normes pour les rapports RSE. La RSE s'intéresse aux questions non financières, et non aux questions financières. Décider du rôle de l'audit interne dans la RSE est une décision du conseil d'administration et de la direction."
  },
  {
    id: 78,
    question: "Lequel des éléments suivants ne serait pas une critique de la RSE ?",
    options: [
      "C'est trop coûteux.",
      "Le concept de RSE manque de clarté.",
      "Cela peut améliorer la réputation de la marque.",
      "Le profit l'emporte sur les principes."
    ],
    solution: "Cela peut améliorer la réputation de la marque.",
    explication: "L'amélioration de la réputation de la marque est un avantage de la RSE et non une critique. Être trop coûteux, le manque de clarté du concept, et le fait que le profit l'emporte sur les principes sont toutes des critiques de la RSE."
  },
  {
    id: 79,
    question: "Le rôle de l'AAI au sein d'une organisation peut englober tous les éléments suivants, SAUF :",
    options: [
      "Vérification du processus de gestion des risques dans le cadre du plan d'audit interne.",
      "Gérer et coordonner le risque d'une opération commerciale.",
      "Fournir un soutien et une participation continus au processus de gestion des risques.",
      "Aucun rôle."
    ],
    solution: "Gérer et coordonner le risque d'une opération commerciale.",
    explication: "L'AAI est en mesure de gérer et de coordonner le processus de gestion des risques, mais elle ne peut pas gérer les risques eux-mêmes. La gestion des risques relève de la responsabilité de la direction. L'AAI peut vérifier le processus de GR, fournir un soutien continu, ou ne jouer aucun rôle selon les décisions du conseil et de la direction."
  },
  {
    id: 80,
    question: "Lequel des énoncés suivants est le plus exact en ce qui concerne le risque inhérent ?",
    options: [
      "La direction peut éliminer le risque inhérent en prenant des mesures d'atténuation.",
      "Le risque inhérent est le niveau de risque qui demeure après que la direction a pris des mesures pour atténuer le risque.",
      "Le risque inhérent entraîne des pertes plus importantes que le risque opérationnel.",
      "Aucune de ces réponses."
    ],
    solution: "Aucune de ces réponses.",
    explication: "Aucune des réponses n'est correcte. La direction ne peut pas éliminer le risque inhérent (elle peut seulement l'atténuer). Le niveau de risque qui subsiste après atténuation est le risque résiduel et non le risque inhérent. Le risque inhérent peut être de tout type de risque."
  },
  {
    id: 81,
    question: "Le conseil d'administration craint qu'un nouveau jouet pour enfants ne soit pas assez sécuritaire et que la réputation de l'entreprise en souffre si cette information est divulguée. Ce qui préoccupe le conseil d'administration, c'est quel type de risque ?",
    options: [
      "Risque financier.",
      "Risque opérationnel.",
      "Risque stratégique.",
      "Risque de danger."
    ],
    solution: "Risque stratégique.",
    explication: "Le risque de réputation est un risque stratégique. Si la réputation d'une entreprise en souffre, il faut parfois beaucoup de temps pour regagner la confiance du public. Les risques liés aux aléas sont des événements qui peuvent être atténués par l'assurance."
  },
  {
    id: 82,
    question: "La première étape du processus de gestion des risques est l'identification des risques. Les événements à risque peuvent être internes ou externes. Lequel des événements suivants constituerait un événement à risque interne ?",
    options: [
      "La perte d'employés clés.",
      "Nouveaux règlements.",
      "Évolution démographique.",
      "Augmentation de l'inflation."
    ],
    solution: "La perte d'employés clés.",
    explication: "La perte d'employés clés est un événement à risque interne. En revanche, les nouveaux règlements, les changements démographiques et l'augmentation de l'inflation sont tous des événements à risque externes."
  },
  {
    id: 83,
    question: "Laquelle des techniques suivantes n'est pas une technique d'identification des risques ?",
    options: [
      "Organiser une séance de remue-méninges.",
      "Effectuer un échantillonnage variable.",
      "Effectuer une analyse de scénarios.",
      "Analyser la rétroaction provenant des questionnaires sur les risques et des enquêtes sur les risques."
    ],
    solution: "Effectuer un échantillonnage variable.",
    explication: "L'échantillonnage variable est un processus utilisé pour prédire la valeur d'une variable spécifique, et non une technique d'identification des risques. Le remue-méninges, l'analyse de scénarios et l'analyse de la rétroaction des questionnaires sur les risques sont toutes des techniques d'identification des risques."
  },
  {
    id: 84,
    question: "Il est courant que les polices d'assurance comportent une clause de franchise, ce qui signifie que la partie assurée devra payer une partie de la réparation. Le montant payé par l'assuré est appelé quel type de risque ?",
    options: [
      "Risque opérationnel.",
      "Risque inhérent.",
      "Risque résiduel.",
      "Risque transactionnel."
    ],
    solution: "Risque résiduel.",
    explication: "Le risque résiduel est le niveau de risque qui demeure après que la direction a pris des mesures pour atténuer le risque. La franchise représente la partie du risque que l'assuré conserve après la couverture d'assurance, ce qui en fait un risque résiduel."
  },
  {
    id: 85,
    question: "Quatre termes généraux sont utilisés pour exprimer l'évaluation de la perte potentielle. La différence entre la perte attendue et la perte inattendue est :",
    options: [
      "La perte prévue est la perte potentielle maximale qui pourrait survenir, tandis que la perte imprévue est la perte potentielle minimale.",
      "La perte prévue est la perte que la direction s'attend à perdre au cours de la période, tandis que la perte imprévue est la perte qui, selon la direction, pourrait être perdue au-delà du montant prévu au budget.",
      "La perte prévue est la perte que la direction s'attend à subir au cours de la période, tandis que la perte imprévue est la perte la plus probable dans le pire des scénarios.",
      "La perte prévue est la perte qui devrait survenir à court terme, tandis que la perte imprévue est la perte qui devrait survenir à long terme."
    ],
    solution: "La perte prévue est la perte que la direction s'attend à perdre au cours de la période, tandis que la perte imprévue est la perte qui, selon la direction, pourrait être perdue au-delà du montant prévu au budget.",
    explication: "La perte prévue est le montant que la direction s'attend à perdre en raison d'un risque donné en moyenne au cours d'une année. La perte imprévue est le montant qu'un gestionnaire prudent pourrait penser pouvoir perdre au cours d'une très mauvaise année, en sus du montant de la perte prévue."
  },
  {
    id: 86,
    question: "La valeur à risque (VaR) est un outil d'évaluation quantitative du risque utilisé par les gestionnaires financiers pour toutes les raisons suivantes, À L'EXCEPTION de :",
    options: [
      "Mesurer et contrôler le niveau de risque que l'entreprise prend.",
      "Mesurer et contrôler la distribution des queues de lard d'une entreprise.",
      "Donner à la direction l'assurance que le niveau de perte ne sera pas dépassé pendant une certaine période de temps.",
      "Veiller à ce que les risques ne soient pas pris au-delà de la capacité de l'entreprise d'absorber les pertes."
    ],
    solution: "Mesurer et contrôler la distribution des queues de lard d'une entreprise.",
    explication: "La VaR est basée sur une distribution normale, alors qu'une distribution à queue-de-boule présente une grande asymétrie ou kurtose lorsque l'événement s'éloigne de la moyenne. Par conséquent, la VaR n'est pas utilisée pour mesurer et contrôler la distribution des queues de lard."
  },
  {
    id: 87,
    question: "Il est possible que certains risques soient corrélés négativement entre eux. Lorsque cette situation se produit, la meilleure ligne de conduite à adopter est de :",
    options: [
      "Compenser le risque.",
      "Mettre en place des contrôles supplémentaires pour atténuer le risque.",
      "Concevoir une stratégie de couverture.",
      "Ne rien faire."
    ],
    solution: "Ne rien faire.",
    explication: "Si les risques sont corrélés négativement les uns aux autres, ils servent de couverture naturelle les uns pour les autres et n'ont pas besoin d'être atténués. Des risques corrélés négativement agissent naturellement comme une couverture, rendant toute action supplémentaire inutile."
  },
  {
    id: 88,
    question: "Le processus de gestion des risques comprend tous les éléments suivants, SAUF :",
    options: [
      "Suivi et contrôle des risques.",
      "Évitement des risques.",
      "Planification de l'intervention en cas de risque.",
      "Évaluation des risques."
    ],
    solution: "Évitement des risques.",
    explication: "L'évitement du risque est une méthode de réaction au risque, mais il ne s'agit pas d'une étape du processus de gestion du risque. Les étapes du processus incluent l'évaluation des risques, la planification de la réponse au risque, et la surveillance et le contrôle des risques."
  },
  {
    id: 89,
    question: "Une réponse au risque qui consiste à éliminer la menace du risque est appelée :",
    options: [
      "Atténuation du risque.",
      "Risque de déviation.",
      "Évitement des risques.",
      "Risque résiduel."
    ],
    solution: "Évitement des risques.",
    explication: "L'évitement du risque implique que l'entreprise élimine l'événement ou l'élément à risque. L'atténuation des risques consiste à réduire le risque et non à l'éliminer. La déviation du risque consiste à assigner les risques à une autre partie. Le risque résiduel est le risque qui subsiste après la mise en œuvre des contrôles."
  },
  {
    id: 90,
    question: "Une entreprise a un projet de valeur comportant de nombreux dangers susceptibles de causer des blessures corporelles. Il n'y a aucun moyen d'éviter le risque potentiel de dommages. Pour détourner le risque, le gestionnaire de projet devrait prendre en considération :",
    options: [
      "Éliminer le projet.",
      "Souscrire une assurance pour couvrir les risques de dommages corporels.",
      "Établir un fonds de prévoyance.",
      "Accepter le risque."
    ],
    solution: "Souscrire une assurance pour couvrir les risques de dommages corporels.",
    explication: "Afin de détourner le risque (transfert du risque), l'entreprise pourrait souscrire une forme d'assurance pour couvrir le risque potentiel de dommages corporels. Étant donné la valeur du projet, son élimination n'est pas une option. L'établissement d'un fonds de prévoyance est une méthode comptable et non un transfert de risque."
  },
  {
    id: 91,
    question: "L'appétit pour le risque est le niveau de risque qu'une organisation est prête à poursuivre, à conserver ou à prendre. Les facteurs qui pourraient influencer l'appétit pour le risque d'une organisation pourraient inclure :",
    options: [
      "Points de vue des principales parties prenantes.",
      "La complexité du système comptable de l'organisation.",
      "Facteurs externes, tels que l'évolution des considérations économiques, les changements technologiques, les changements dans l'industrie.",
      "Toutes ces réponses."
    ],
    solution: "Toutes ces réponses.",
    explication: "Les facteurs qui pourraient influencer l'appétit pour le risque d'une organisation incluent : les points de vue des principales parties prenantes, les facteurs comptables comme la complexité du système comptable, et les facteurs externes comme l'évolution des considérations économiques, les changements dans l'industrie et les changements technologiques."
  },
  {
    id: 92,
    question: "La Gestion des risques d'entreprise (GRE) :",
    options: [
      "Garantit l'atteinte des objectifs organisationnels.",
      "Exige l'établissement d'activités de risque et de contrôle par les auditeurs internes.",
      "Comprend l'identification des événements ayant des répercussions négatives sur les objectifs de l'organisation.",
      "Comprend la sélection de la meilleure réponse au risque pour l'organisation."
    ],
    solution: "Comprend l'identification des événements ayant des répercussions négatives sur les objectifs de l'organisation.",
    explication: "La GRE comprend l'identification des événements potentiels qui pourraient avoir une incidence sur l'entité et la gestion du risque afin de respecter son goût du risque. La GRE fournit une assurance raisonnable (non une garantie) que les objectifs seront atteints, et les processus de risque et de contrôle sont établis par la direction, non par les auditeurs internes."
  },
  {
    id: 93,
    question: "L'établissement d'un processus de GRE comporte tous les avantages suivants, À L'EXCEPTION de :",
    options: [
      "Déterminer l'appétit pour le risque de l'entreprise.",
      "Identifier les événements à risque potentiel.",
      "Améliorer la capacité de l'entreprise à saisir les occasions qui se présentent.",
      "Améliorer l'utilisation du capital et des ressources de l'entreprise."
    ],
    solution: "Déterminer l'appétit pour le risque de l'entreprise.",
    explication: "La GRE est en mesure d'aligner la stratégie de l'entité sur le niveau de risque que l'entreprise est prête à prendre (appétit pour le risque) ; cependant, elle ne peut déterminer l'appétit pour le risque de l'entreprise. La détermination de la propension au risque est une fonction du conseil d'administration et de la direction."
  },
  {
    id: 94,
    question: "L'élaboration d'un plan stratégique vise à accroître le rendement à long terme d'une entreprise. Lequel des objectifs suivants ne constituerait probablement pas un objectif stratégique ?",
    options: [
      "Croissance financière.",
      "Amélioration de la satisfaction de la clientèle.",
      "Innovation produit.",
      "Réduction des coûts administratifs."
    ],
    solution: "Réduction des coûts administratifs.",
    explication: "La réduction des coûts administratifs serait plus probablement un objectif à court terme qu'un objectif stratégique. La croissance financière, l'amélioration de la satisfaction de la clientèle et l'innovation en matière de produits sont tous des objectifs stratégiques à long terme."
  },
  {
    id: 95,
    question: "Le modèle de GRE comporte cinq composantes. Dans le cadre de quelle composante l'entreprise identifierait-elle des événements à risque précis ?",
    options: [
      "Gouvernance et culture.",
      "Stratégie et fixation d'objectifs.",
      "Activités de contrôle.",
      "Performance."
    ],
    solution: "Performance.",
    explication: "L'identification des risques est l'un des principes de la composante Performance. La gouvernance et la culture, et la stratégie et fixation d'objectifs sont d'autres composantes du modèle de GRE. Les activités de contrôle sont une composante du modèle de contrôle du COSO, et non du modèle ERM."
  },
  {
    id: 96,
    question: "La mise en œuvre d'un système de GRE bien développé présente de nombreux avantages. Parmi les suivants : I. L'entité anticipe tous les risques qui pourraient entraîner une perte. II. Meilleur alignement de la stratégie sur l'appétit pour le risque. III. Meilleur déploiement des ressources. IV. Tous les risques inconnus seront connus.",
    options: [
      "I et II seulement.",
      "II et III seulement.",
      "III et IV seulement.",
      "II et IV seulement."
    ],
    solution: "II et III seulement.",
    explication: "La GRE aligne mieux la stratégie sur l'appétit pour le risque (II) et améliore l'affectation des ressources (III). La GRE n'est pas en mesure de prévoir ou d'identifier tous les risques (I et IV sont faux). Malheureusement, tous les risques ne seront pas identifiés."
  },
  {
    id: 97,
    question: "En ce qui concerne la GRE, lequel des rôles suivants n'est pas un rôle que l'audit interne devrait assumer ?",
    options: [
      "Donner une assurance sur les processus de gestion des risques.",
      "Élaborer une stratégie de gestion des risques aux fins d'approbation par le conseil.",
      "Établir l'appétit pour le risque.",
      "Coordonner les activités de GRE."
    ],
    solution: "Établir l'appétit pour le risque.",
    explication: "L'établissement de l'appétit pour le risque est un rôle de la direction et du conseil d'administration. Les rôles légitimes d'audit interne en ce qui concerne la GRE comprennent : donner une assurance sur les processus de gestion des risques, élaborer une stratégie de gestion des risques aux fins d'approbation, et coordonner les activités de GRE."
  },
  {
    id: 98,
    question: "Lequel des énoncés suivants n'est pas sous-entendu par la définition du contrôle ?",
    options: [
      "Mesure des progrès vers l'atteinte des objectifs.",
      "Mise au jour des écarts par rapport aux plans.",
      "Attribution de la responsabilité des écarts.",
      "Indication de la nécessité d'une action corrective."
    ],
    solution: "Attribution de la responsabilité des écarts.",
    explication: "Le processus de base du contrôle consiste à fixer des objectifs, à mesurer le rendement et à prendre des mesures correctives si des lacunes sont décelées. L'attribution des responsabilités ne fait pas partie de la fonction de contrôle. Le contrôle mesure les progrès, détecte les écarts et indique la nécessité d'une action corrective."
  },
  {
    id: 99,
    question: "Des contrôles devraient être conçus pour s'assurer que :",
    options: [
      "Les opérations sont effectuées efficacement.",
      "Les plans de la direction n'ont pas été contournés par la collusion des travailleurs.",
      "L'orientation et la surveillance du rendement de la direction par l'AAI sont assurées de façon économique.",
      "Les processus de planification, d'organisation et de direction de la direction sont correctement évalués."
    ],
    solution: "Les opérations sont effectuées efficacement.",
    explication: "Le processus de contrôle a pour but d'aider le personnel de l'organisation à gérer les risques et à atteindre ses objectifs établis et communiqués. On s'attend à ce que les processus de contrôle permettent de s'assurer que les opérations sont exécutées efficacement. La collusion des travailleurs est une limite inhérente au contrôle."
  },
  {
    id: 100,
    question: "Lequel des énoncés suivants est vrai en ce qui concerne la différence entre les contrôles au niveau de l'entreprise et les contrôles au niveau opérationnel ?",
    options: [
      "Les contrôles au niveau de l'entreprise sont pour la plupart automatisés, tandis que les contrôles au niveau opérationnel sont surtout manuels.",
      "Les contrôles au niveau opérationnel comprennent des contrôles manuels et automatisés, tandis que les contrôles au niveau de l'entreprise sont surtout manuels et comprennent des énoncés de politique générale qui concernent l'éthique et les valeurs de l'entreprise.",
      "Les contrôles au niveau de l'entreprise sont principalement manuels, alors que les contrôles au niveau opérationnel sont principalement automatisés.",
      "Les contrôles au niveau opérationnel comprennent les contrôles manuels et automatisés, tandis que les contrôles au niveau de l'organisation englobent la planification et la surveillance du rendement."
    ],
    solution: "Les contrôles au niveau opérationnel comprennent des contrôles manuels et automatisés, tandis que les contrôles au niveau de l'entreprise sont surtout manuels et comprennent des énoncés de politique générale qui concernent l'éthique et les valeurs de l'entreprise.",
    explication: "Les contrôles au niveau de l'entreprise sont surtout manuels et comprennent des énoncés de politique générale, des valeurs et des procédures générales de surveillance. Les contrôles au niveau opérationnel comprennent à la fois des contrôles manuels et automatisés."
  },
  {
    id: 101,
    question: "Lequel des types de contrôles suivants est souvent difficile à évaluer en raison de l'absence de critères ou de normes établis ?",
    options: [
      "Commandes d'exploitation.",
      "Contrôles financiers.",
      "Contrôles directifs.",
      "Contrôles préventifs."
    ],
    solution: "Commandes d'exploitation.",
    explication: "Les contrôles d'exploitation sont ceux applicables aux activités de production et de soutien. Dans certains cas, une activité d'exploitation comme le service à la clientèle ou la sécurité est difficile à mesurer parce qu'il n'existe aucune norme de contrôle établie. Les contrôles financiers, directifs et préventifs sont plus spécifiques et donc plus faciles à mesurer."
  },
  {
    id: 102,
    question: "Lequel des éléments suivants n'est pas un contrôle préventif ?",
    options: [
      "Le fichier de base du grand livre est bloqué dans un coffre-fort chaque nuit.",
      "Toutes les factures portent la mention 'Payé' pour éviter les paiements en double.",
      "Le rapprochement du grand livre auxiliaire des comptes débiteurs et du total de contrôle est effectué.",
      "Les numéros de client sont vérifiés par l'ordinateur avant l'acceptation d'une commande client."
    ],
    solution: "Le rapprochement du grand livre auxiliaire des comptes débiteurs et du total de contrôle est effectué.",
    explication: "Les contrôles préventifs permettent d'éviter les erreurs. Le rapprochement ne fournira que la preuve qu'une erreur s'est déjà produite (un contrôle de rétroaction). Le verrouillage du grand livre, la mention 'Payé' sur les factures et la vérification des numéros de clients sont tous des contrôles préventifs."
  },
  {
    id: 103,
    question: "Le processus de contrôle peut être divisé en contrôles anticipés, simultanés et de rétroaction. Lequel des éléments suivants est un contrôle simultané ?",
    options: [
      "Formation sur le contrôle de la qualité des produits.",
      "Surveillance de l'activité en ligne.",
      "Analyse des écarts sur matières premières.",
      "Budget de trésorerie à 90 jours."
    ],
    solution: "Surveillance de l'activité en ligne.",
    explication: "Le contrôle concomitant (simultané) est une technique utilisée pour surveiller les processus et les comportements afin de s'assurer qu'ils sont conformes aux réglementations, en temps réel. La formation sur le contrôle de la qualité et le budget de trésorerie sont des contrôles anticipés. L'analyse des écarts sur matières premières est un contrôle de rétroaction."
  },
  {
    id: 104,
    question: "Lequel des éléments suivants est un exemple de mesure de l'efficacité ?",
    options: [
      "Le taux d'absentéisme.",
      "L'objectif de devenir un fabricant de premier plan.",
      "Le nombre de demandes de règlement d'assurance traitées par jour.",
      "Le taux de plaintes des clients."
    ],
    solution: "L'objectif de devenir un fabricant de premier plan.",
    explication: "L'efficacité est liée à l'atteinte des objectifs. Devenir un fabricant de premier plan est un objectif à atteindre. Le taux d'absentéisme et le nombre de demandes traitées par jour sont des mesures d'efficience (comparaison entre intrants et extrants). Le taux de plaintes n'est pas une mesure de l'efficience car il n'y a pas de comparaison intrants/extrants."
  },
  {
    id: 105,
    question: "Une différence importante entre l'information de planification budgétaire nécessaire et l'information de contrôle budgétaire nécessaire est que l'information de planification est plus :",
    options: [
      "Probablement générée à l'aide de données externes.",
      "Détaillée.",
      "Probablement quantifiable.",
      "Probablement exacte."
    ],
    solution: "Probablement générée à l'aide de données externes.",
    explication: "Comme la planification est davantage influencée par l'environnement de l'organisation, l'information de planification est plus susceptible d'être générée à l'aide de données externes. Les informations de contrôle sont plus détaillées, et c'est plus susceptible d'être vrai pour l'information de contrôle en termes d'exactitude."
  },
  {
    id: 106,
    question: "Lequel des exemples suivants illustre une limitation inhérente du contrôle interne ?",
    options: [
      "Un contrôleur effectue et enregistre les dépôts en espèces.",
      "Un gardien de sécurité permet à un employé d'entrepôt de sortir les biens de l'entreprise des lieux sans autorisation.",
      "La société vend à des clients à crédit sans approbation de crédit appropriée.",
      "Un employé qui ne sait pas lire se voit confier la garde de la bandothèque de l'entreprise."
    ],
    solution: "Un gardien de sécurité permet à un employé d'entrepôt de sortir les biens de l'entreprise des lieux sans autorisation.",
    explication: "Il s'agit d'un exemple de collusion, où l'agent de sécurité laisse l'employé voler les biens de l'entreprise. La collusion est une limite inhérente au contrôle interne, car peu importe à quel point les contrôles sont stricts, deux personnes ou plus peuvent travailler ensemble pour les contourner. Les autres situations pourraient être évitées par des contrôles appropriés."
  },
  {
    id: 107,
    question: "Voici les étapes d'un processus de contrôle typique. Quel est l'ordre correct de ces étapes ? 1) Sélectionnez les moments où recueillir des informations. 2) Définir les normes. 3) Observez le processus. 4) Signaler tout écart important. 5) Examiner et réviser les normes. 6) Consigner les renseignements recueillis. 7) Mettre en œuvre les corrections nécessaires. 8) Évaluer si le rendement est satisfaisant.",
    options: [
      "2, 1, 6, 3, 8, 7, 4, 5.",
      "1, 2, 3, 6, 5, 7, 8, 4.",
      "2, 1, 3, 6, 8, 4, 7, 5.",
      "1, 3, 2, 6, 7, 5, 8, 4."
    ],
    solution: "2, 1, 3, 6, 8, 4, 7, 5.",
    explication: "L'ordre correct est : 1) Définir les normes. 2) Sélectionner les moments. 3) Observer le processus. 4) Consigner l'information. 5) Évaluer si le rendement est satisfaisant. 6) Signaler tout écart important. 7) Mettre en œuvre les corrections. 8) Examiner et réviser les normes."
  },
  {
    id: 108,
    question: "Un auditeur interne évaluait les contrôles d'application de la compagnie à l'égard de l'information financière. Lequel des éléments suivants ne constituerait pas un objectif de contrôle de l'application ?",
    options: [
      "Les données d'entrée sont exactes, complètes, autorisées et correctes.",
      "Les données sont traitées comme prévu dans un délai acceptable.",
      "Les extrants sont précis et complets.",
      "Seul le personnel autorisé peut accéder aux informations du réseau."
    ],
    solution: "Seul le personnel autorisé peut accéder aux informations du réseau.",
    explication: "Le fait de n'autoriser que l'accès du personnel autorisé aux informations sur le réseau est un contrôle général, et non un contrôle d'application. Les contrôles d'application garantissent que les données d'entrée sont exactes et complètes, que les données sont traitées correctement, et que les extrants sont précis."
  },
  {
    id: 109,
    question: "Un contrôle susceptible d'empêcher les acheteurs de favoriser des fournisseurs spécifiques est :",
    options: [
      "Exiger l'examen par la direction d'un rapport mensuel des totaux dépensés par chaque acheteur.",
      "Exiger des acheteurs qu'ils respectent les spécifications détaillées des matériaux.",
      "La rotation périodique des affectations d'acheteurs.",
      "Suivi du nombre de commandes passées par chaque acheteur."
    ],
    solution: "La rotation périodique des affectations d'acheteurs.",
    explication: "La rotation périodique des affectations d'acheteurs limitera la possibilité pour tout acheteur de faire preuve de favoritisme à l'égard d'un fournisseur particulier. Le montant total des fonds engagés et le nombre de commandes passées ne permettraient pas de déceler le favoritisme. Les spécifications détaillées n'empêcheront pas le favoritisme lors de la passation des commandes."
  },
  {
    id: 110,
    question: "Un audit des contrôles de caisse a indiqué que le comptable avait signé les chèques de dépenses et rapproché le compte courant. Si les rapprochements étaient à jour et qu'aucune insuffisance de trésorerie n'a été décelée, un auditeur interne devrait conclure que le système de contrôle interne sur les comptes de trésorerie est adéquat dans lequel des aspects suivants ?",
    options: [
      "L'enregistrement des rentrées de fonds est adéquat.",
      "La comptabilisation de l'encaisse est inadéquate.",
      "Les rapprochements du compte de caisse sont adéquats.",
      "Les mesures de protection physique de l'argent liquide sont adéquates."
    ],
    solution: "La comptabilisation de l'encaisse est inadéquate.",
    explication: "Le comptable ne devrait pas signer les chèques ET rapprocher le compte chèque. Ces fonctions devraient être séparées. Cette situation crée une faiblesse de contrôle où la comptabilisation de l'encaisse est inadéquate, car la même personne exerce des fonctions incompatibles."
  },
  {
    id: 111,
    question: "Lequel des éléments suivants est une faiblesse du contrôle plutôt qu'un point fort à l'égard du commis à la paie ? Le commis à la paie :",
    options: [
      "A la garde du cachet de la signature du chèque.",
      "Prépare le registre de paie.",
      "Transmet le registre de paie au chef comptable pour approbation.",
      "Tire les chèques de paie sur un compte chèque de paie séparé."
    ],
    solution: "A la garde du cachet de la signature du chèque.",
    explication: "Pour assurer une séparation adéquate des tâches, le commis à la paie ne devrait pas avoir la garde du timbre de signature du chèque. La préparation du registre de paie, sa transmission au chef comptable pour approbation, et le tirage des chèques sur un compte séparé sont tous des éléments appropriés."
  },
  {
    id: 112,
    question: "Laquelle des situations suivantes amènerait un auditeur interne à s'interroger sur le caractère adéquat des contrôles exercés sur une fonction d'achat ?",
    options: [
      "L'original et une copie du bon de commande sont envoyés par la poste au fournisseur et l'exemplaire accepté est retourné au service Achats.",
      "Les rapports de réception sont acheminés aux achats où ils sont appariés aux bons de commande et envoyés aux comptes créditeurs.",
      "Le service des comptes fournisseurs prépare la documentation pour les paiements.",
      "Les dossiers des bons impayés et les registres d'inventaire permanent sont tenus à jour de façon indépendante."
    ],
    solution: "Les rapports de réception sont acheminés aux achats où ils sont appariés aux bons de commande et envoyés aux comptes créditeurs.",
    explication: "Il s'agit d'une faiblesse du contrôle. Les rapports de réception doivent être envoyés directement au service des comptes créditeurs, où ils sont appariés au bon de commande. Envoyer les rapports de réception aux achats crée un risque de fraude car l'achat et la réception ne sont pas séparés."
  },
  {
    id: 113,
    question: "Une séparation adéquate des tâches réduit les possibilités pour une personne d'avoir les deux possibilités de :",
    options: [
      "Établir des contrôles et les exécuter.",
      "Concevoir les contrôles et les surveiller.",
      "Commettre des erreurs et des fraudes et les dissimuler.",
      "Enregistrer les opérations dans le journal comptable et le grand livre général."
    ],
    solution: "Commettre des erreurs et des fraudes et les dissimuler.",
    explication: "L'objectif de la séparation des tâches est de rendre difficile la perpétration d'erreurs et de fraudes, puis de les dissimuler. L'établissement et l'exécution de contrôles, la conception et la surveillance des contrôles, ou l'enregistrement des opérations dans le journal et le grand livre ne constituent pas des violations de la séparation des tâches."
  },
  {
    id: 114,
    question: "Les auditeurs internes utilisent le modèle COSO pour évaluer la solidité du système de contrôle interne. Lequel des éléments suivants n'est pas un principe fondamental de l'environnement de contrôle ?",
    options: [
      "S'engager à être compétent en matière d'information financière.",
      "Avoir la bonne philosophie de gestion et le bon style de fonctionnement.",
      "Avoir les bonnes politiques et procédures en matière de ressources humaines.",
      "Déterminer les objectifs de l'entreprise en matière de présentation de l'information financière."
    ],
    solution: "Déterminer les objectifs de l'entreprise en matière de présentation de l'information financière.",
    explication: "La détermination des objectifs de l'entreprise en matière d'information financière fait partie du processus d'évaluation des risques et non de l'environnement de contrôle. L'engagement à l'égard de la compétence, la philosophie de gestion et les politiques en matière de ressources humaines sont tous des principes de l'environnement de contrôle."
  },
  {
    id: 115,
    question: "Un système de contrôle efficace devrait présenter toutes les caractéristiques suivantes, À L'EXCEPTION de :",
    options: [
      "Le système de contrôle devrait en fait refléter ce que l'organisation tente de mesurer et de contrôler.",
      "Le système de commande doit être compréhensible par toutes les personnes qui l'utilisent.",
      "L'organisation économise moins que le coût du contrôle.",
      "Les informations fournies par le système de contrôle doivent être disponibles en temps utile."
    ],
    solution: "L'organisation économise moins que le coût du contrôle.",
    explication: "Un système de contrôle efficace a un rapport coûts-avantages positif, ce qui signifie que l'organisation économise plus que le coût du contrôle. Si l'organisation économise moins que le coût du contrôle, le système n'est pas efficace. Les autres caractéristiques (pertinence, compréhensibilité, information opportune) sont toutes des attributs d'un système de contrôle efficace."
  },
  {
    id: 116,
    question: "Laquelle des mesures suivantes peut aider à réduire la capacité d'une personne à rationaliser la fraude ?",
    options: [
      "Disposer d'un service des ressources humaines et de politiques du personnel solides.",
      "Disposer d'un système de contrôle interne solide.",
      "Une formation à l'éthique et une culture d'entreprise fondée sur des principes.",
      "Avoir un problème de drogue ou de jeu."
    ],
    solution: "Une formation à l'éthique et une culture d'entreprise fondée sur des principes.",
    explication: "Une formation en matière d'éthique et une culture d'entreprise fondée sur des principes peuvent aider une entreprise à réduire la capacité d'un individu à rationaliser la fraude. Disposer de ressources humaines solides peut réduire la motivation à commettre des fraudes. Un système de contrôle interne solide peut réduire les risques de fraude. Avoir un problème de drogue ou de jeu est un facteur de motivation pour commettre une fraude."
  },
  {
    id: 117,
    question: "Lesquels des exemples suivants sont des exemples de fraude qui ne profiteraient PAS à une organisation ?",
    options: [
      "Prix de transfert intentionnels/impropres.",
      "Fraude fiscale.",
      "Demandes de remboursement présentées pour des services ou des biens qui n'ont pas été effectivement fournis à l'organisation.",
      "Vente ou cession d'actifs fictifs ou faussement représentés."
    ],
    solution: "Demandes de remboursement présentées pour des services ou des biens qui n'ont pas été effectivement fournis à l'organisation.",
    explication: "Les demandes de remboursement présentées pour des services ou des biens qui ne sont pas réellement fournis à l'organisation ne lui seraient pas bénéfiques (c'est une fraude contre l'organisation). Les prix de transfert impropres, la fraude fiscale et la vente d'actifs fictifs profiteraient tous à l'organisation."
  },
  {
    id: 118,
    question: "Lequel des énoncés suivants décrit le mieux la responsabilité d'un auditeur après avoir relevé des indicateurs de fraude ?",
    options: [
      "Élargir les activités d'audit pour déterminer si une enquête est justifiée.",
      "Signaler la possibilité de fraude à la direction générale et demander comment procéder.",
      "Consulter un conseiller juridique externe pour déterminer les mesures à prendre.",
      "Signaler l'affaire au comité d'audit et demander le financement de spécialistes de l'extérieur."
    ],
    solution: "Élargir les activités d'audit pour déterminer si une enquête est justifiée.",
    explication: "Si un auditeur interne constate qu'il y a une possibilité de fraude, il doit étendre ses activités d'audit pour déterminer si une enquête est justifiée. L'auditeur ne doit signaler l'affaire à la direction, au conseiller juridique ou au comité d'audit qu'après avoir déterminé l'existence d'une fraude par des travaux supplémentaires."
  },
  {
    id: 119,
    question: "Le directeur d'une chaîne de production avait le pouvoir de commander et de recevoir des pièces de rechange. Il a commandé plus de pièces que nécessaire auprès d'un membre de sa famille, a traité les documents de réception pour des pièces jamais livrées, et a partagé les paiements avec ce membre de sa famille. Lequel des contrôles internes suivants aurait le plus probablement empêché cette fraude ?",
    options: [
      "Établir des niveaux de dépenses prédéfinis pour tous les fournisseurs pendant le processus d'appel d'offres.",
      "Séparer la fonction de réception de l'autorisation d'achat de pièces.",
      "Comparaison du connaissement pour les pièces de rechange à la commande approuvée.",
      "Utiliser le système d'inventaire de l'entreprise pour faire correspondre les quantités demandées aux quantités reçues."
    ],
    solution: "Séparer la fonction de réception de l'autorisation d'achat de pièces.",
    explication: "Une autorisation supplémentaire (séparation des fonctions de réception et d'autorisation d'achat) serait la méthode la plus probable pour prévenir la fraude. Les niveaux de dépenses prédéfinis incluraient probablement déjà les montants frauduleux. La comparaison des connaissements ou l'appariement informatique ne ferait que vérifier des documents frauduleux déjà créés."
  },
  {
    id: 120,
    question: "Dans le contexte de la fraude du directeur de chaîne de production, lequel des tests suivants aiderait le mieux l'auditeur à décider s'il doit enquêter davantage sur l'avis anonyme reçu ?",
    options: [
      "Comparaison des charges d'entretien du trimestre en cours avec l'activité de la période précédente.",
      "Contrôle de l'inventaire physique des pièces de rechange pour l'existence et la valorisation.",
      "Analyse des pièces de rechange imputées à l'entretien afin d'examiner le caractère raisonnable du nombre d'articles remplacés.",
      "Examen d'un échantillon d'essai de factures de pièces pour en vérifier l'autorisation et la réception."
    ],
    solution: "Analyse des pièces de rechange imputées à l'entretien afin d'examiner le caractère raisonnable du nombre d'articles remplacés.",
    explication: "L'analyse des pièces de rechange imputées à l'entretien permettrait de quantifier le nombre excessif d'articles et de détecter les abus. Les charges du trimestre correspondent probablement à l'activité passée si la fraude dure depuis longtemps. Les essais physiques ne localisent pas des pièces inexistantes. L'absence de séparation des tâches fait que les documents frauduleux semblent valides."
  },
  {
    id: 121,
    question: "Laquelle des écritures frauduleuses suivantes est la plus susceptible d'être faite pour dissimuler le vol d'un bien ?",
    options: [
      "Débitez les dépenses et créditez l'actif.",
      "Débitez l'actif et créditez un autre compte d'actif.",
      "Débitez le produit et créditez l'immobilisation.",
      "Débitez un autre compte d'actif et créditez l'actif."
    ],
    solution: "Débitez les dépenses et créditez l'actif.",
    explication: "La plupart des fraudeurs tenteraient de dissimuler leur vol en l'imputant à un compte de dépenses. Débiter le compte de biens volés irait dans la mauvaise direction. Une entrée à la baisse des revenus serait inhabituelle et se démarquerait. Transférer le solde vers un autre compte d'actif ne dissimulerait pas la fraude de façon permanente."
  },
  {
    id: 122,
    question: "Lequel des éléments suivants n'est pas considéré comme une condition indiquant une probabilité plus élevée de fraude ?",
    options: [
      "La direction a délégué le pouvoir d'effectuer des achats d'une valeur inférieure à un certain plafond à des subordonnés.",
      "Une personne a occupé le même poste de manutention de l'argent pendant une période prolongée sans rotation des fonctions.",
      "Il incombe aux particuliers qui manipulent des titres négociables d'effectuer les achats, de consigner les achats et de signaler tout écart.",
      "L'attribution des responsabilités et de l'obligation de rendre compte au sein du service des comptes débiteurs n'est pas claire."
    ],
    solution: "La direction a délégué le pouvoir d'effectuer des achats d'une valeur inférieure à un certain plafond à des subordonnés.",
    explication: "Il s'agit d'une procédure de contrôle acceptable, qui vise à limiter les risques tout en favorisant l'efficacité. Elle n'est pas, en soi, considérée comme une condition indiquant une probabilité plus élevée de fraude. L'absence de rotation des tâches, la ségrégation inappropriée des tâches et le manque de clarté des responsabilités sont tous des signaux d'alarme."
  },
  {
    id: 123,
    question: "Lequel des énoncés suivants est (sont) vrai(s) en ce qui concerne la prévention de la fraude ? I. Les contrôles internes établis et maintenus par la direction constituent le principal moyen de prévenir la fraude. II. Les auditeurs internes sont chargés de contribuer à la prévention de la fraude en examinant et en évaluant l'adéquation du système de contrôle interne. III. Les auditeurs internes devraient évaluer l'efficacité opérationnelle des systèmes de communication liés à la fraude.",
    options: [
      "I seulement.",
      "II seulement.",
      "I et II seulement.",
      "I, II et III."
    ],
    solution: "I, II et III.",
    explication: "Les trois affirmations sont vraies : la meilleure façon de prévenir la fraude est d'établir et de maintenir des contrôles internes solides (I), les auditeurs internes sont chargés d'aider la direction à prévenir et à détecter les fraudes (II), et les auditeurs internes devraient évaluer l'efficacité opérationnelle des systèmes de communication liés à la fraude (III)."
  },
  {
    id: 124,
    question: "Les auditeurs internes sont plus susceptibles de détecter la fraude en développant et en renforçant leur capacité à :",
    options: [
      "Reconnaître et remettre en question les changements qui surviennent dans les organisations.",
      "Interroger les fraudeurs pour découvrir pourquoi la fraude a été commise.",
      "Élaborer des contrôles internes pour prévenir la fraude.",
      "Documenter les systèmes d'exploitation informatisés."
    ],
    solution: "Reconnaître et remettre en question les changements qui surviennent dans les organisations.",
    explication: "La responsabilité des auditeurs internes en matière de détection des fraudes consiste notamment à avoir une connaissance suffisante pour identifier les indicateurs d'une éventuelle fraude. La fraude peut être indiquée par des changements organisationnels négatifs. L'interrogatoire des fraudeurs vise à vérifier que la fraude a été commise. L'élaboration de contrôles et la documentation des systèmes visent à prévenir et non à détecter la fraude."
  },
  {
    id: 125,
    question: "Dans certains cas de fraude, il est nécessaire de recourir aux services d'un auditeur judiciaire. Lequel des éléments suivants n'est généralement pas un type d'enquête menée par les auditeurs judiciaires ?",
    options: [
      "Falsification délibérée de documents comptables.",
      "Rémunération des dirigeants.",
      "Des actes d'extorsion.",
      "Vol des biens de l'entreprise."
    ],
    solution: "Rémunération des dirigeants.",
    explication: "Le niveau de la rémunération de la direction n'est pas un problème pour un auditeur judiciaire. En revanche, la falsification délibérée de documents comptables, les actes d'extorsion et le vol des biens de l'entreprise sont tous des types d'enquêtes menées par les auditeurs judiciaires."
  }
];