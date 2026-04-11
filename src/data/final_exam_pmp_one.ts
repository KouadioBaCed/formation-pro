interface OptionObj { label?: string; value?: string; key?: string; text?: string; }
type Option = string | OptionObj;

interface Question {
  id: number;
  question: string;
  options: Option[];
  answer?: string;
  solution?: string;
  reponse?: string | string[];
  bonneReponse?: string | string[];
  explication?: string | string[];
  explanation?: string;
  rationale?: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Un projet hybride impliquant de nombreux acteurs est en cours. Conformément aux exigences du bureau de gestion de projet (PMO), les rapports d'avancement et autres documents relatifs au projet sont centralisés dans un référentiel. Lors de la consultation de ces documents, le chef de projet a constaté que certains n'étaient pas à jour ou étaient manquants.\n\nQue doit faire le chef de projet dans cette situation ?",
    options: [
      "A. Discutez de la situation avec le commanditaire du projet afin de réduire le niveau de documentation.",
      "B. Collaborer avec les chefs d'équipe pour mettre à jour les rapports de projet requis.",
      "C. Arrêtez toutes les activités du projet jusqu'à ce que les documents du projet soient mis à jour et téléchargés.",
      "D. Planifiez une séance de transfert de connaissances à la phase finale du projet."
    ],
    answer: "B. Collaborer avec les chefs d'équipe pour mettre à jour les rapports de projet requis.",
    explanation: "La première étape pour remédier à une documentation manquante ou insuffisante consiste à corriger cette lacune. Ensuite, le chef de projet doit collaborer avec l'équipe pour s'assurer du respect des procédures de documentation et de la mise à jour des rapports de projet requis.\nLes autres réponses sont incorrectes. Discuter du problème avec le commanditaire n'est pas la bonne solution, car il relève de la compétence du chef de projet pour le résoudre. Ce dernier n'a pas besoin d'interrompre toutes les autres activités du projet pour traiter ce problème. La documentation du projet doit être mise à jour et les connaissances doivent être partagées tout au long du projet, et non seulement à la fin."
  },
  {
    id: 2,
    question: "Une équipe projet est en phase de planification d'un projet complexe. Ce projet a pour échéance le lancement d'un nouveau produit pour lequel l'équipe n'a aucune expérience préalable. Le commanditaire demande un planning détaillé, mais l'équipe est incapable de prévoir le déroulement des tâches tout au long du cycle de vie du projet, d'autant plus que certaines dépendent des livrables d'autres unités opérationnelles.\n\nQuelle méthodologie de cycle de vie le chef de projet devrait-il utiliser dans cette situation ?",
    options: [
      "A. Un cycle de vie hybride comprenant un backlog produit priorisé approuvé par le sponsor",
      "B. Un cycle de vie prédictif comprenant un calendrier convenu avec toutes les unités opérationnelles",
      "C. Un cycle de vie agile comprenant un calendrier détaillé établi en accord avec toutes les unités opérationnelles.",
      "D. Un cycle de vie itératif comprenant la durée des tâches et un budget approuvé par le commanditaire"
    ],
    answer: "A. Un cycle de vie hybride comprenant un backlog produit priorisé approuvé par le sponsor",
    explanation: "Une approche de développement hybride combine les approches adaptatives et prédictives. Cette approche est utile en cas d'incertitude ou de risque lié aux exigences. Compte tenu de la complexité du projet, de ses multiples phases, de l'impossibilité pour l'équipe de prévoir le déroulement et la durée des tâches, et de l'impératif de respecter une date butoir, le chef de projet aurait tout intérêt à opter pour une approche hybride.\nUn cycle de vie prédictif est inapproprié car le périmètre n'est pas clairement défini. Un cycle de vie agile est inapproprié car l'établissement d'un calendrier détaillé n'est pas encore possible. Un cycle de vie itératif ne représente qu'une petite partie de la méthodologie agile et aucune information n'est disponible concernant la durée des tâches."
  },
  {
    id: 3,
    question: "Un désaccord sur la marche à suivre est apparu entre deux membres de l'équipe avant la mise en production. L'équipe doit collaborer pour mener à bien cette mise en production.\n\nQue doit faire en premier le chef de projet pour désamorcer la situation ?",
    options: [
      "A. Engagez un coach agile pour former les membres de l'équipe à gérer leurs conflits sans nuire au projet.",
      "B. Observez les interactions des membres de l'équipe et discutez avec eux de leurs griefs avant d'appliquer une technique de résolution des conflits.",
      "C. Organisez des réunions avec les membres de l'équipe et la direction des ressources humaines pour leur rappeler l'importance de la prochaine livraison du produit.",
      "D. Expliquez aux membres de l'équipe qu'ils perdent leur temps à se disputer et qu'ils ne fournissent pas les fonctionnalités du produit."
    ],
    answer: "B. Observez les interactions des membres de l'équipe et discutez avec eux de leurs griefs avant d'appliquer une technique de résolution des conflits.",
    explanation: "Le chef de projet doit d'abord analyser le conflit entre les membres de l'équipe avant de mettre en œuvre des techniques de résolution des conflits.\nLes autres réponses sont incorrectes car elles préconisent le recours à des ressources externes (coach agile), l'escalade du problème et la prise de mesures sans évaluation préalable de la situation."
  },
  {
    id: 4,
    question: "Dans le cadre d'un projet prédictif, le chef de projet finalise les critères de sortie d'un important projet de développement système. À ce stade, un responsable de la gestion des risques et de la conformité l'informe qu'un livrable supplémentaire doit être réalisé suite à l'adoption récente d'une loi par les autorités locales. Cette modification est susceptible d'impacter la date de livraison prévue du projet.\n\nQue doit faire le chef de projet ?",
    options: [
      "A. Rencontrez les parties prenantes et informez-les que la demande ne faisait pas partie des critères de sortie.",
      "B. Collaborer avec la partie prenante et soumettre une demande de changement au comité de contrôle des changements (CCB).",
      "C. Remontez le problème au commanditaire afin d'éviter de retarder la date de lancement du projet.",
      "D. Ajoutez ce nouveau risque au registre des risques et surveillez-le, car les modifications sont hors du périmètre du projet."
    ],
    answer: "B. Collaborer avec la partie prenante et soumettre une demande de changement au comité de contrôle des changements (CCB).",
    explanation: "Lorsqu'une partie prenante demande une modification ayant un impact sur le périmètre et le calendrier du projet, il est essentiel de collaborer avec elle afin de bien comprendre la nature et les implications de cette modification. Ensuite, la procédure appropriée consiste à soumettre une demande de modification formelle au CCB.\nInformer la partie prenante que sa demande ne faisait pas partie des critères de sortie ne suffit pas, car la législation exige un livrable supplémentaire. Il n'est peut-être pas nécessaire de saisir le promoteur, car le CCB est déjà habilité à approuver les modifications. L'ajout du nouveau risque au registre des risques ne suffit pas car cela ne permet pas d'approuver la demande de changement."
  },
  {
    id: 5,
    question: "Un membre clé d'une équipe agile a été remplacé par un membre moins expérimenté. L'une des parties prenantes craint que le projet ne soit pas livré dans les délais à cause de ce nouveau membre.\n\nQue doit faire le chef de projet pour garantir la réussite du projet ?",
    options: [
      "A. Ajoutez ce problème comme risque dans le registre des risques et faites-le remonter au bureau de gestion de projet (PMO).",
      "B. Rencontrez leur responsable fonctionnel pour évaluer la situation et obtenir des conseils sur la marche à suivre.",
      "C. Annulez la décision de remplacement et réintégrez l'ancien membre clé dans l'équipe.",
      "D. Évaluer l'impact du remplacement et procéder à des ajustements de ressources supplémentaires si nécessaire."
    ],
    answer: "D. Évaluer l'impact du remplacement et procéder à des ajustements de ressources supplémentaires si nécessaire.",
    explanation: "Le chef de projet doit être prêt à prendre des décisions éclairées en fonction de l'impact du remplacement. Cette évaluation, ainsi que l'ajustement des ressources nécessaires, contribueront à la réussite du projet malgré le changement de membres de l'équipe.\nIl serait prématuré d'ajouter ce problème au registre des risques et de le signaler au PMO. Solliciter l'avis du responsable fonctionnel ne répond pas aux besoins spécifiques du projet. Revenir sur cette décision pourrait s'avérer impossible et ignorerait les raisons justifiant le remplacement."
  },
  {
    id: 6,
    question: "Le responsable produit a demandé au chef de projet et à l'équipe agile de présenter les fonctionnalités finalisées aux principales parties prenantes. Le projet est à ses débuts et n'a réalisé que trois itérations fonctionnelles. C'est la première fois que les parties prenantes découvriront un projet agile.\n\nQue doit faire le chef de projet ?",
    options: [
      "A. Rappelez au responsable produit qu'il lui incombe de communiquer et de gérer directement les groupes de parties prenantes.",
      "B. Définissez clairement aux parties prenantes ce qu'est la méthode agile, l'approche adoptée, et précisez qu'elles ne verront qu'une petite partie des fonctionnalités.",
      "C. Présenter aux parties prenantes les fonctionnalités finalisées, ainsi que les exigences des utilisateurs et les prototypes de solution disponibles.",
      "D. Protégez l'équipe des distractions en fournissant un lien vers l'environnement de test d'acceptation utilisateur (UAT) afin que les parties prenantes puissent visualiser directement les fonctionnalités."
    ],
    answer: "B. Définissez clairement aux parties prenantes ce qu'est la méthode agile, l'approche adoptée, et précisez qu'elles ne verront qu'une petite partie des fonctionnalités.",
    explanation: "Puisqu'il s'agit de la première expérience de la partie prenante avec la méthode agile, le chef de projet doit définir les attentes des parties prenantes quant à ce qu'est la méthode agile, l'approche (qui consiste à livrer le projet par petits incréments) dans le contexte de ce qui est fait."
  },
  {
    id: 7,
    question: "Un membre de l'équipe est insatisfait de sa charge de travail et estime ne pas être suffisamment soutenu. Le chef de projet souhaite le rencontrer afin de discuter de ses préoccupations et de mettre en œuvre une approche de gestion des conflits fondée sur le compromis et la réconciliation.\n\nQue doit faire le chef de projet en premier ?",
    options: [
      "A. Expliquez les contraintes et les priorités du projet au membre de l'équipe.",
      "B. Écoutez les préoccupations du membre de l'équipe et essayez de comprendre son point de vue.",
      "C. Proposez une charge de travail révisée, plus gérable pour le membre de l'équipe.",
      "D. Proposer un soutien supplémentaire au membre de l'équipe."
    ],
    answer: "B. Écoutez les préoccupations du membre de l'équipe et essayez de comprendre son point de vue.",
    explanation: "La première étape de la gestion des conflits par le compromis et la réconciliation consiste à écouter les préoccupations du membre de l'équipe et à tenter de comprendre son point de vue. Cela permettra au chef de projet d'identifier les problèmes sous-jacents et d'élaborer une solution qui réponde aux besoins du membre de l'équipe et du projet.\nLes autres options sont également importantes, mais elles ne doivent pas être choisies avant d'avoir écouté les préoccupations du membre de l'équipe."
  },
  {
    id: 8,
    question: "Un projet de deux ans a été attribué à une entreprise il y a six mois, mais la procédure d'achat n'a pas encore été lancée.\n\nQue doit faire le chef de projet pour faire avancer le projet ?",
    options: [
      "A. Élaborer le plan de gestion des approvisionnements pour le projet.",
      "B. Réunissez les équipes pour élaborer un plan de gestion des approvisionnements.",
      "C. Suivre le processus d'approvisionnement conformément au plan de gestion des approvisionnements existant.",
      "D. Signalez la situation à la direction supérieure."
    ],
    answer: "B. Réunissez les équipes pour élaborer un plan de gestion des approvisionnements.",
    explanation: "Au début du projet, un plan d'approvisionnement doit être élaboré afin de préciser le calendrier de lancement du processus d'approvisionnement ainsi que les dates de commande et de livraison des livrables. Le chef de projet constate un retard et veille à ce que les équipes collaborent à l'élaboration de ce plan.\nLes autres réponses sont incorrectes. Il y a un manque de collaboration ; un plan existant pourrait ne pas convenir à ce projet ; et il n'est pas approprié de remonter les problèmes à la direction."
  },
  {
    id: 9,
    question: "En plein milieu d'un projet informatique, deux membres de l'équipe découvrent une nouvelle fonctionnalité qui modifiera l'apparence du produit et le rendra plus esthétique. Enthousiasmés par cette opportunité, ils sollicitent l'approbation du chef de projet pour l'intégrer aux livrables. Cette amélioration devrait accroître la satisfaction du client et potentiellement augmenter les chances de l'entreprise de remporter de nouveaux contrats.\n\nComment le chef de projet doit-il réagir ?",
    options: [
      "A. Approuver l'idée afin de répondre aux attentes des membres de l'équipe.",
      "B. Rappelez aux membres de l'équipe que, sans demande de modification approuvée, l'accent doit être mis sur le périmètre convenu.",
      "C. Obtenez l'adhésion des membres restants de l'équipe et implémentez la fonctionnalité une fois que les membres de l'équipe auront donné leur consentement.",
      "D. Mettez en œuvre ce changement au plus vite afin d'améliorer les perspectives de revenus futurs."
    ],
    answer: "B. Rappelez aux membres de l'équipe que, sans demande de modification approuvée, l'accent doit être mis sur le périmètre convenu.",
    explanation: "Toute modification apportée à un plan de projet déjà approuvé doit d'abord faire l'objet d'une procédure de gestion des changements. Le surdimensionnement excessif n'est pas acceptable selon les normes du PMI.\nBien que le chef de projet soit enthousiaste face à cette opportunité, il ne peut approuver et mettre en œuvre le changement sans suivre les procédures appropriées afin de respecter les exigences contractuelles."
  },
  {
    id: 10,
    question: "Pour fonctionner de manière optimale, une équipe projet doit disposer d'une charte de projet qui énonce la vision ou l'objectif du projet et un ensemble clair d'accords de travail.\n\nÀ quelle question la charte de projet doit-elle répondre pour ce faire ?",
    options: [
      "A. Pourquoi ce projet est-il réalisé ?",
      "B. Pourquoi l'organisation a-t-elle donné la priorité à ce projet ?",
      "C. Quels sont les principaux risques et comment les atténuer ?",
      "D. Qui effectuera les travaux ?"
    ],
    answer: "A. Pourquoi ce projet est-il réalisé ?",
    explanation: "Expliquer pourquoi ce projet est réalisé permettrait d'en expliquer l'objectif.\nLes autres options sont moins prioritaires pour répondre à la vision et aux objectifs du projet."
  },
  {
    id: 11,
    question: "Un projet agile est passé de la phase d'étude de faisabilité à la phase de mise en œuvre. Faute de temps, la même équipe a été affectée au projet, à l'exception d'un membre remplacé. Plusieurs membres de l'équipe ont des difficultés à s'entendre avec ce nouveau venu et refusent de participer à la phase suivante.\n\nComment le chef de projet peut-il s'assurer que l'équipe est prête pour la phase suivante ?",
    options: [
      "A. Effectuer une évaluation progressive de la livraison.",
      "B. Forcez l'équipe à rester unie.",
      "C. Demander un engagement formel de l'équipe.",
      "D. Supprimer le nouveau membre de l'équipe."
    ],
    answer: "C. Demander un engagement formel de l'équipe.",
    explanation: "Un mécanisme d'engagement interne permet de revoir les normes de l'équipe et de réaffirmer son engagement envers le projet et la nouvelle phase.\nL'évaluation progressive et forcer l'équipe ne répondent pas aux préoccupations des membres. Retirer le nouveau membre risque de ne pas résoudre le problème si le travail ne peut être réalisé avec une équipe réduite."
  },
  {
    id: 12,
    question: "Un projet agile en est à sa première itération sur douze, chaque itération durant deux semaines. Lors de la revue de la première itération, les parties prenantes demandent des rapports mensuels pour les itérations suivantes.\n\nQue doit faire le chef de projet ?",
    options: [
      "A. Demandez aux membres de l'équipe de créer des rapports d'itération mensuels.",
      "B. Élaborez des rapports mensuels et envoyez-les aux parties prenantes.",
      "C. Former et accompagner les parties prenantes aux méthodologies agiles.",
      "D. Demandez aux parties prenantes de participer aux revues d'itération mensuelles."
    ],
    answer: "C. Former et accompagner les parties prenantes aux méthodologies agiles.",
    explanation: "Les parties prenantes ne maîtrisent pas pleinement les pratiques agiles. Le chef de projet devrait les accompagner et les former afin d'améliorer leur compréhension. En environnement agile, l'accent est mis sur des boucles de rétroaction fréquentes et itératives, soit toutes les deux semaines dans ce cas. Un rapport mensuel ne serait pas conforme aux pratiques agiles.\nSi le chef de projet accepte de fournir des rapports mensuels, les parties prenantes ne comprendront pas pleinement le fonctionnement d'un environnement agile."
  },
  {
    id: 13,
    question: "Une entreprise, habituée aux méthodes prédictives, expérimente actuellement la méthodologie agile sur certaines parties d'un projet. Satisfaite des résultats, elle a demandé au commanditaire du projet de généraliser cette approche à l'ensemble du projet.\n\nQue doit faire le chef de projet ?",
    options: [
      "A. Proposer que le changement d'approche vers la méthode agile soit effectif pour les nouveaux projets.",
      "B. Soumettez une demande de modification au comité de contrôle des modifications (CCB).",
      "C. Consultez le responsable produit, car il peut avoir des raisons de continuer à utiliser une approche prédictive.",
      "D. Convertissez les livrables du projet en récits utilisateurs et informez-en l'équipe."
    ],
    answer: "B. Soumettez une demande de modification au comité de contrôle des modifications (CCB).",
    explanation: "Le projet passant d'une approche prédictive à une approche agile, une demande de changement doit être soumise au CCB. Le chef de projet doit obtenir l'approbation du CCB avant l'intégration des modifications. Dans ce cas, il n'est pas nécessaire de consulter le responsable produit."
  },
  {
    id: 14,
    question: "L'équipe projet A lance un programme complexe en collaboration avec les équipes projet B, C et D.\n\nQuelle devrait être la priorité du chef de projet de l'équipe A durant les premières phases du projet ?",
    options: [
      "A. Organisez une activité de team building avec les membres des équipes de projet A, B, C et D.",
      "B. Inclure un tableau de bord des indicateurs pour les équipes de projet B, C et D.",
      "C. Établir les mêmes priorités que celles des équipes de projet B, C et D.",
      "D. Demandez aux équipes de projet A, B, C et D d'identifier les dépendances critiques, les risques et les étapes clés."
    ],
    answer: "D. Demandez aux équipes de projet A, B, C et D d'identifier les dépendances critiques, les risques et les étapes clés.",
    explanation: "Identifier les risques dès le début d'un projet est un facteur clé de succès. Lorsque plusieurs équipes travaillent de concert, il est essentiel que le chef de projet repère les dépendances, les risques et les jalons, ainsi que leur impact sur le chemin critique.\nOrganiser une activité de cohésion d'équipe et mettre en place un tableau de bord ne sont pas prioritaires par rapport à l'identification des dépendances critiques."
  },
  {
    id: 15,
    question: "Un chef de projet gère des équipes multidisciplinaires. Lors de la dernière réunion de suivi de projet, il a constaté des tensions entre certains membres de l'équipe.\n\nQue doit faire le chef de projet ensuite ?",
    options: [
      "A. Identifiez les membres de l'équipe et évaluez leurs performances au sein du projet.",
      "B. Consultez le commanditaire pour trouver des remplaçants pour les membres de l'équipe.",
      "C. Évaluer le problème et appliquer des techniques de résolution de conflits.",
      "D. Signalez le problème dans le résumé exécutif mensuel du projet."
    ],
    answer: "C. Évaluer le problème et appliquer des techniques de résolution de conflits.",
    explanation: "La priorité du chef de projet doit être de s'attaquer à la cause profonde du conflit. Une fois la situation mieux comprise, il pourra appliquer des techniques de résolution de conflits appropriées.\nIdentifier les membres et analyser leurs performances ne résoudra pas le conflit. Consulter le commanditaire pour des remplaçants est une mesure radicale. Signaler le problème dans le rapport mensuel ne permettra pas de le résoudre."
  },
  {
    id: 16,
    question: "Un projet agile est à mi-parcours de ses dix cycles d'itération. Lors de la dernière itération, l'équipe a dû faire des heures supplémentaires pour atteindre l'objectif. Lors de la rétrospective de l'itération, l'équipe a reconnu avoir pris plus de temps que prévu car elle ne possédait pas l'expérience requise lors de la première exécution des tâches assignées.\n\nQue doit faire le chef de projet ?",
    options: [
      "A. Demandez au commanditaire du projet une formation supplémentaire pour l'équipe.",
      "B. Demandez au commanditaire d'approuver une demande de modification pour obtenir plus de temps lors des prochaines itérations.",
      "C. Demandez à l'équipe de réévaluer ses estimations d'effort lors de la séance de planification de l'itération.",
      "D. Demandez au responsable produit de redéfinir les priorités du backlog produit."
    ],
    answer: "C. Demandez à l'équipe de réévaluer ses estimations d'effort lors de la séance de planification de l'itération.",
    explanation: "L'équipe tire des enseignements des itérations précédentes pour améliorer ses méthodes de travail. Les actions correctives nécessaires sont planifiées lors de la prochaine séance de planification.\nLes options de formation et de redéfinition du backlog n'auront probablement pas d'incidence sur la capacité de l'équipe. Demander un report des échéances est inutile si l'équipe estime avoir acquis l'expérience nécessaire."
  },
  {
    id: 17,
    question: "Lors de la phase finale d'un projet, l'une des principales parties prenantes demande au chef de projet de faire un compte rendu au conseil d'administration sur le retour sur investissement (ROI) et sur toute nouvelle valeur commerciale pertinente identifiée au cours de la mise en œuvre du projet.\n\nQue doit faire le chef de projet ensuite ?",
    options: [
      "A. Présentez l'analyse coûts-avantages.",
      "B. Présentez les bénéfices obtenus.",
      "C. Présenter le plan de gestion des coûts.",
      "D. Présentez les facteurs de réussite financière."
    ],
    answer: "B. Présentez les bénéfices obtenus.",
    explanation: "La meilleure stratégie est de présenter les bénéfices obtenus. C'est l'information la plus pertinente pour la direction, car elle démontre la valeur ajoutée du projet pour l'organisation.\nPrésenter l'analyse coûts-avantages, le plan de gestion des coûts ou les facteurs de réussite financière ne constitue pas l'information la plus pertinente pour la direction à ce stade du projet."
  },
  {
    id: 18,
    question: "Lors d'un entretien individuel, un nouveau membre de l'équipe a fait part de sa frustration quant à son incapacité à mener à bien une tâche qui lui avait été confiée, même après avoir déployé tous ses efforts.\n\nQue doit faire en premier le chef de projet pour répondre aux préoccupations des membres de l'équipe ?",
    options: [
      "A. Encouragez le membre de l'équipe à continuer de travailler dur sur ses tâches.",
      "B. Identifiez la cause profonde pour laquelle le membre de l'équipe ne peut pas terminer le travail assigné et remédiez-y.",
      "C. Autoriser une formation complémentaire pour le membre de l'équipe lors des sessions de formation du mois prochain.",
      "D. Adapter leur style de leadership en fonction des besoins des membres de l'équipe."
    ],
    answer: "B. Identifiez la cause profonde pour laquelle le membre de l'équipe ne peut pas terminer le travail assigné et remédiez-y.",
    explanation: "Le chef de projet devra déterminer les raisons pour lesquelles ce membre ne parvient pas à accomplir ses tâches. Il devra identifier la cause profonde de ce problème et y remédier.\nLes autres réponses suggèrent que le chef de projet prenne d'autres mesures avant même d'avoir compris la cause profonde du problème."
  },
  {
    id: 19,
    question: "Une organisation qui utilisait une approche prédictive a décidé de passer à une approche agile. Convaincue de pouvoir ainsi apporter davantage de valeur à ses clients, elle a décidé d'étendre cette approche à tous ses projets.\n\nQue doit faire le chef de projet pour garantir la réalisation des bénéfices escomptés ?",
    options: [
      "A. Évaluer la concrétisation des bénéfices lors des réunions quotidiennes d'équipe.",
      "B. Alignez le plan de gestion des avantages avec le backlog produit.",
      "C. Évaluer le plan de gestion des avantages à la fin des sprints.",
      "D. Demandez au scrum master de fournir des mises à jour quotidiennes sur la réalisation des bénéfices."
    ],
    answer: "B. Alignez le plan de gestion des avantages avec le backlog produit.",
    explanation: "L'alignement du plan de gestion des bénéfices avec le backlog produit garantit que le projet est axé sur les fonctionnalités et les objectifs les plus importants, en adéquation avec les objectifs de l'organisation.\nÉvaluer lors des réunions quotidiennes ne suffit pas. Évaluer à la fin des sprints est trop tard. Le scrum master facilite le processus scrum et ne gère pas la réalisation des bénéfices."
  },
  {
    id: 20,
    question: "Une équipe de projet vient de franchir avec succès une étape importante. Le chef de projet a constaté que l'équipe avait réalisé une performance exceptionnelle.\n\nQuelle approche le chef de projet devrait-il utiliser pour communiquer avec l'équipe au sujet de ses performances ?",
    options: [
      "A. Évitez de communiquer quoi que ce soit sur leurs performances, car l'équipe est censée atteindre les objectifs fixés avec succès.",
      "B. Attendez la fin du projet et faites un rapport à l'équipe sur ce qui a bien et mal fonctionné à chaque étape.",
      "C. Faites part de vos commentaires à l'équipe de projet concernant leur bonne performance lors de la prochaine réunion de projet.",
      "D. Ne tenez pas compte de ce qui a déjà été fait dans le cadre de ce projet et demandez à l'équipe projet de se concentrer sur ce qui reste à faire."
    ],
    answer: "C. Faites part de vos commentaires à l'équipe de projet concernant leur bonne performance lors de la prochaine réunion de projet.",
    explanation: "Le chef de projet doit fournir un retour d'information sur les performances à l'équipe projet aussi souvent que possible, afin d'améliorer le bon travail et de corriger le travail inacceptable.\nEn fournissant un retour lors de la prochaine réunion, le chef de projet ne retardera ni ne retiendra ce retour, contrairement aux autres options."
  },
  {
    id: 21,
    question: "Un intervenant s'inquiète du retard pris par le projet, se basant sur des informations non officielles provenant de l'équipe. Bien que certaines tâches aient pris du retard, elles disposent d'une marge de manœuvre ; par ailleurs, le projet est sur la bonne voie. Le chef de projet a immédiatement contacté cet intervenant pour lui présenter et lui expliquer les derniers rapports d'avancement.\n\nQue doit faire le chef de projet ensuite ?",
    options: [
      "A. Diffuser une note de service précisant que l'état d'avancement du projet ne peut être communiqué que par les canaux autorisés.",
      "B. Inclure la partie prenante dans la liste de diffusion relative à l'état d'avancement du projet.",
      "C. Revoir le plan de gestion des communications du projet avec l'équipe projet et le mettre à jour si nécessaire.",
      "D. Revoir les rapports d'étape afin d'identifier clairement les retards qui nécessitent une intervention."
    ],
    answer: "C. Revoir le plan de gestion des communications du projet avec l'équipe projet et le mettre à jour si nécessaire.",
    explanation: "La partie prenante agissait sur la base d'informations non officielles. Un plan de gestion de la communication, s'il est correctement élaboré, permettra d'éviter cette situation. Après avoir traité le problème à court terme, le chef de projet devra réviser et mettre à jour le plan de gestion de la communication.\nDiffuser la note de service et inclure la partie prenante dans la liste de diffusion ne permettra pas d'empêcher la diffusion d'informations non officielles erronées. Réviser le rapport d'avancement n'est pas approprié car le projet est toujours en bonne voie."
  },
  {
    id: 22,
    question: "Il existe des risques qu'un produit dont la sortie est prévue ne réponde pas aux exigences convenues avec l'utilisateur final.\n\nComment un chef de projet peut-il éviter cette situation à l'avenir ?",
    options: [
      "A. Discutez des avantages avec le client.",
      "B. Assurez-vous qu'il existe un backlog produit.",
      "C. Fournissez des exemples d'autres projets similaires.",
      "D. Organisez une séance pour examiner le livrable en détail."
    ],
    answer: "D. Organisez une séance pour examiner le livrable en détail.",
    explanation: "Afin d'éviter que cette situation ne se reproduise, le chef de projet devrait organiser une réunion pour examiner en détail le livrable. Il est important de clarifier le périmètre du projet et d'obtenir l'adhésion des parties prenantes.\nDiscuter des avantages intervient dès les premières étapes ; le backlog ne résout pas le problème de l'inadéquation des exigences ; fournir des exemples ne permet pas d'éviter un problème car les livrables de chaque projet sont uniques."
  },
  {
    id: 23,
    question: "Un projet novateur exploite l'intelligence artificielle (IA) pour identifier des composés chimiques en vue du développement de nouveaux produits. La durée de la phase de traitement par l'IA est variable, allant de trois jours à deux semaines, et les résultats sont imprévisibles. L'objectif principal du projet est de fournir au moins une spécification de produit dans un délai fixe de deux mois, tout en respectant un budget strict non extensible.\n\nQuelles mesures le chef de projet doit-il prendre pour optimiser l'utilisation du budget fixe et obtenir la meilleure valeur commerciale possible ?",
    options: [
      "A. Veillez à ce que les itérations de spécification soient limitées à 50 % de la durée totale du projet.",
      "B. Veillez à ce que le traitement par IA soit limité à 25 % du budget total du projet.",
      "C. Planifiez une itération immédiatement après le traitement par l'IA afin d'analyser et de prioriser les objectifs de développement.",
      "D. Planifiez le travail de spécification comme une tâche prédictive à durée fixe afin de garantir la valeur ajoutée."
    ],
    answer: "C. Planifiez une itération immédiatement après le traitement par l'IA afin d'analyser et de prioriser les objectifs de développement.",
    explanation: "En planifiant une itération immédiatement après le traitement par l'IA, l'équipe projet peut analyser les résultats, prioriser les objectifs de développement en fonction des conclusions et concentrer le budget restant sur les tâches les plus importantes.\nLimiter les itérations ou le budget IA pourrait être irréalisable ou contre-productif. La planification prédictive à durée fixe ne tient pas compte de l'imprévisibilité du traitement par l'IA."
  },
  {
    id: 24,
    question: "Un projet de conception d'hôtel urbain mobilise une équipe internationale, multidisciplinaire et interculturelle. Le chef de projet est en train d'élaborer la première version du plan de gestion de projet.\n\nQue doit faire le chef de projet ?",
    options: [
      "A. Utilisez une approche en cascade pour la gestion de projet.",
      "B. Déléguez la plupart des tâches aux membres de l'équipe situés dans le même fuseau horaire.",
      "C. Utilisez un canal de communication unique pour toute l'équipe projet.",
      "D. Intégrez les considérations culturelles dans le plan de gestion de projet."
    ],
    answer: "D. Intégrez les considérations culturelles dans le plan de gestion de projet.",
    explanation: "Le chef de projet devrait intégrer les considérations culturelles et de communication dans le plan de gestion de projet, car cela contribuera à garantir que le plan soit compris et suivi par tous les membres de l'équipe.\nL'approche en cascade est inadaptée aux projets avec des interdépendances complexes. Déléguer par fuseau horaire n'est ni juste ni pratique. Un canal de communication unique peut s'avérer impossible pour les projets internationaux."
  },
  {
    id: 25,
    question: "Un chef de projet est entré dans un bureau de projet et a trouvé un membre de l'équipe et un représentant du fournisseur en désaccord au sujet d'une clause du contrat d'approvisionnement. Le chef de projet a invité le fournisseur à négocier avec l'équipe projet afin de résoudre le conflit.\n\nEn appliquant les principes de la négociation, quel objectif doivent viser le chef de projet et son équipe ?",
    options: [
      "A. Renoncer à l'objectif du projet pour un résultat gagnant-perdant.",
      "B. Atteindre l'objectif du projet, quitte à obtenir un résultat gagnant-perdant.",
      "C. Atteindre l'objectif du projet pour un résultat gagnant-gagnant.",
      "D. Atteindre l'objectif du projet, quel qu'en soit le résultat."
    ],
    answer: "C. Atteindre l'objectif du projet pour un résultat gagnant-gagnant.",
    explanation: "L'objectif ultime d'un projet est d'atteindre ses objectifs, et une négociation avec un fournisseur doit aboutir à un accord gagnant-gagnant."
  },
  {
    id: 26,
    question: "Un acteur clé est mécontent des nouvelles fonctionnalités de la version actuelle du produit. Il était indisponible lors de la dernière revue et n'a donc pas pu donner son avis.\n\nQu'aurait dû faire le chef de projet pour éviter de contrarier la partie prenante ?",
    options: [
      "A. Nous avons attendu que toutes les parties prenantes approuvent le changement avant de le mettre en œuvre.",
      "B. Nous avons veillé à ce que les informations mises à jour concernant le projet soient toujours accessibles à toutes les parties prenantes.",
      "C. J'ai rencontré individuellement chaque partie prenante afin d'éviter tout désaccord.",
      "D. Les réunions ne seront programmées que lorsque toutes les parties prenantes pourront être présentes."
    ],
    answer: "B. Nous avons veillé à ce que les informations mises à jour concernant le projet soient toujours accessibles à toutes les parties prenantes.",
    explanation: "Il est impératif que les parties prenantes disposent d'informations actualisées et accessibles sur le projet. Cette transparence est essentielle pour garantir que tous les acteurs partagent la même vision du produit final.\nAttendre la présence ou l'approbation des parties prenantes, ou les rencontrer individuellement, n'évite pas les désaccords et peut entraîner des retards inutiles."
  },
  {
    id: 27,
    question: "Un chef de projet a été chargé de gérer un projet complexe existant. Certains objectifs ont déjà été atteints par le chef de projet précédent. En examinant le plan de gestion de projet, le nouveau chef de projet constate qu'un livrable clé manque à l'objectif du projet.\n\nQue doit faire ensuite le chef de projet pour garantir la réalisation des objectifs du projet ?",
    options: [
      "A. Remontez le problème relatif au livrable au commanditaire du projet.",
      "B. Confirmer les livrables attendus et redéfinir le référentiel du projet.",
      "C. Suivez le livrable en consultant la matrice de traçabilité des exigences.",
      "D. Utilisez le fonds de réserve pour obtenir davantage de ressources afin de compléter le livrable manquant."
    ],
    answer: "B. Confirmer les livrables attendus et redéfinir le référentiel du projet.",
    explanation: "En confirmant les livrables attendus et en réajustant le projet, le chef de projet peut anticiper les livrables manquants et s'assurer que le projet est en bonne voie.\nL'escalade doit être un dernier recours. La matrice de traçabilité est utile mais ne suffit pas à garantir la réalisation du livrable. Le fonds de prévoyance ne doit pas constituer la première option."
  },
  {
    id: 28,
    question: "Un problème de conformité a été constaté au cours d'un projet. Cela a entraîné une inspection du produit par l'équipe d'audit interne. De ce fait, le projet a pris du retard.\n\nQu'aurait dû faire le chef de projet dès le départ pour éviter ce problème ?",
    options: [
      "A. Nous avons veillé à ce que les exigences de conformité soient documentées.",
      "B. Création de modèles pour documenter la conformité.",
      "C. J'ai engagé un consultant en conformité.",
      "D. Implication des parties prenantes dès le début du projet."
    ],
    answer: "A. Nous avons veillé à ce que les exigences de conformité soient documentées.",
    explanation: "Il est important que le chef de projet prenne en compte toutes les exigences potentielles en matière de conformité, de réglementation et de sécurité dès le début du projet.\nImpliquer les parties prenantes et faire appel à un consultant ne suffira pas. La création de modèles intervient après coup et n'empêche pas la non-conformité."
  },
  {
    id: 29,
    question: "À l'approche de la fin d'un projet, un conflit entre le responsable produit et le commanditaire du projet concernant la propriété des bénéfices tirés du livrable peut donner lieu à un litige.\n\nQu'aurait dû faire le chef de projet pour éviter ce conflit ?",
    options: [
      "A. Le commanditaire du projet a été identifié comme partie prenante dès le début du projet.",
      "B. Élaboration et approbation de l'analyse de rentabilité conjointement avec le responsable produit et le commanditaire du projet.",
      "C. Tous les problèmes potentiels ont été identifiés et consignés dans le journal des problèmes, et un suivi fréquent a été mis en place.",
      "D. Création d'une structure de répartition du travail (SRT) détaillée et mise en place d'un suivi systématique."
    ],
    answer: "B. Élaboration et approbation de l'analyse de rentabilité conjointement avec le responsable produit et le commanditaire du projet.",
    explanation: "L'élaboration et l'approbation conjointes du dossier d'opportunité avec le responsable produit et le commanditaire du projet constituent une étape cruciale. Il est important qu'ils s'accordent sur les bénéfices du projet avant son lancement afin d'éviter toute confusion.\nLes autres options ne s'attaquent pas à la source du conflit."
  },
  {
    id: 30,
    question: "Une équipe de projet géographiquement dispersée rencontre des problèmes de développement entre les équipes sur site et les équipes virtuelles, ce qui entraîne une baisse de productivité.\n\nQue doit faire le chef de projet pour remédier à ces problèmes ?",
    options: [
      "A. Obligez les membres de l'équipe à travailler depuis un seul et même endroit.",
      "B. Acquérir une expertise particulière pour conseiller les membres de l'équipe.",
      "C. Élaborer des protocoles pour résoudre les conflits entre les membres de l'équipe.",
      "D. Organisez des réunions en face à face avec les membres de l'équipe projet."
    ],
    answer: "C. Élaborer des protocoles pour résoudre les conflits entre les membres de l'équipe.",
    explanation: "Le chef de projet doit d'abord comprendre les causes des problèmes entre les équipes, puis mettre en place des protocoles pour une communication efficace et la résolution des conflits.\nCompte tenu de la répartition géographique, il pourrait être impossible d'obliger qui que ce soit à travailler au même endroit ni à tenir des réunions en présentiel."
  },
  {
    id: 31,
    question: "Un chef de projet a été affecté à un projet de plusieurs millions de dollars déjà en cours d'exécution. Lors d'une réunion de suivi, un membre de l'équipe signale des retards dus au fait qu'un cadre supérieur ne répond pas aux communications.\n\nQue doit faire le chef de projet ?",
    options: [
      "A. Mettre en place une procédure d'envoi de rappels quotidiens au cadre supérieur.",
      "B. Retirez la tâche du chemin critique afin qu'elle n'affecte pas le calendrier du projet.",
      "C. Utilisez votre réseau pour contacter le cadre supérieur et obtenir une réponse.",
      "D. Transmettez le problème au supérieur hiérarchique du cadre supérieur."
    ],
    answer: "C. Utilisez votre réseau pour contacter le cadre supérieur et obtenir une réponse.",
    explanation: "Le chef de projet devrait contacter directement le cadre supérieur pour obtenir une réponse. L'implication des parties prenantes est essentielle.\nLe cadre risque d'ignorer les rappels quotidiens ; la suppression de la tâche pourrait impacter le projet ; signaler le problème sans l'avoir contacté au préalable n'est pas de nature à instaurer de bonnes relations."
  },
  {
    id: 32,
    question: "En plein milieu d'une version, un développeur Scrum introduit un logiciel non prévu lors de la démonstration du sprint, perturbant ainsi plusieurs fonctionnalités prioritaires prévues pour les deux sprints suivants.\n\nQuelles mesures l'équipe devrait-elle prendre pour minimiser les perturbations ?",
    options: [
      "A. Collaborer avec le responsable produit pour mettre à jour le backlog et intégrer efficacement le nouveau logiciel.",
      "B. Prenez vos décisions de manière indépendante, en équipe auto-organisée, et ne présentez les changements que lors des démonstrations.",
      "C. Les développeurs doivent en informer le scrum master, qui décide quand et où discuter du changement.",
      "D. Évaluer le nouveau logiciel et informer le client de son impact sur le plan de déploiement."
    ],
    answer: "A. Collaborer avec le responsable produit pour mettre à jour le backlog et intégrer efficacement le nouveau logiciel.",
    explanation: "Dans Scrum, le responsable produit gère le backlog, en veillant à ce que les priorités correspondent à la valeur ajoutée. Collaborer avec lui pour évaluer, prioriser et intégrer le nouveau logiciel garantit la transparence et le respect des délais.\nL'auto-organisation ne signifie pas se dispenser du Product Owner. Le Scrum Master ne prend pas de décisions concernant le backlog. Informer le client avant l'évaluation interne peut engendrer de la confusion."
  },
  {
    id: 33,
    question: "Un vaste projet de transformation, nécessitant la collaboration de différentes équipes commerciales, est en cours.\n\nQuelles sont les deux premières actions que le chef de projet doit entreprendre pour compléter le registre des parties prenantes ? (Choisissez deux réponses.)",
    options: [
      "A. Organisez un atelier avec les principaux membres de l'équipe projet pour réfléchir ensemble et identifier les parties prenantes potentielles.",
      "B. Demandez des recommandations au commanditaire de l'entreprise ou à la haute direction.",
      "C. Analysez l'intérêt, l'influence et l'impact des parties prenantes potentielles de chaque équipe commerciale.",
      "D. Discutez du projet avec les membres de l'équipe et établissez le registre lors d'une réunion d'équipe.",
      "E. Contactez directement chaque partie prenante potentielle et demandez-lui si elle souhaite participer au projet."
    ],
    answer: "A, C",
    explanation: "Le chef de projet doit impliquer les membres clés de l'équipe afin de tirer parti de leurs connaissances pour identifier les parties prenantes. Il est essentiel de comprendre les intérêts, l'influence et l'impact de chaque partie prenante pour prioriser les stratégies d'implication.\nFinaliser le registre directement en réunion est inefficace. Se fier aux recommandations risque d'occulter des acteurs clés. Contacter directement chaque personne est inefficace et fastidieux."
  },
  {
    id: 34,
    question: "Une équipe de conseil travaille à distance de l'équipe projet principale. Les informations circulent en permanence entre ces deux équipes, et les documents du projet sont approuvés conjointement. Tout retard d'approbation engendrera des coûts supplémentaires.\n\nQuelle pratique permettrait de garantir au chef de projet que tous les documents sont disponibles, à jour et dûment approuvés ?",
    options: [
      "A. Laissons les équipes consultatives et les équipes centrales développer et maintenir leurs propres systèmes de catégorisation et de dénomination des documents.",
      "B. Exiger que chaque membre des équipes consultatives et de projet tienne des dossiers à jour.",
      "C. Le commanditaire doit tenir à jour et approuver les modifications au sein d'un registre de documents unique.",
      "D. Superviser un système unique de registre de documents et de contrôle des modifications utilisé par les deux équipes."
    ],
    answer: "D. Superviser un système unique de registre de documents et de contrôle des modifications utilisé par les deux équipes.",
    explanation: "La gestion documentaire est un élément essentiel du contrôle des modifications de projet. Un registre documentaire unique garantit le contrôle des versions et l'accessibilité de tous les documents depuis un référentiel unique.\nLa multiplication des systèmes d'archivage engendre des incohérences. Il n'incombe pas au promoteur de tenir un registre de documents."
  },
  {
    id: 35,
    question: "Un prestataire d’un projet d’envergure et complexe a réalisé davantage de travaux que prévu initialement dans le contrat au temps passé et aux matériaux utilisés. Ce type de contrat a entraîné des retards et des dépassements de budget. Le contrat arrive à échéance.\n\nQue doit faire le chef de projet ?",
    options: [
      "A. Créez une demande de devis (RFQ) pour constituer une liste de nouveaux fournisseurs.",
      "B. Passer à un contrat-cadre de services avec des annexes pour les travaux supplémentaires requis.",
      "C. Consultez le répertoire des leçons apprises pour établir une liste de nouveaux fournisseurs potentiels.",
      "D. Essayez de négocier un contrat à prix fixe avec le fournisseur actuel."
    ],
    answer: "B. Passer à un contrat-cadre de services avec des annexes pour les travaux supplémentaires requis.",
    explanation: "Un contrat-cadre de services couvre un large éventail de prestations, simplifie les modifications contractuelles et met l’accent sur la création de valeur.\nLancer un appel d’offres risque de perturber le projet. Consulter la base de retours d’expérience n’est pas idéale car le temps presse. Un contrat à prix fixe n’est pas adapté car le périmètre n’est pas stable."
  },
  {
    id: 36,
    question: "Le chef de projet constate qu’un intervenant fournit des rapports d’avancement inexacts au comité de pilotage. De plus, cet intervenant ne dispose pas d’informations exactes sur le projet.\n\nQue doit faire le chef de projet en premier ?",
    options: [
      "A. Mettre à jour le plan de gestion des communications afin de garantir que la partie prenante reçoive les informations nécessaires.",
      "B. Planifiez une réunion avec la partie prenante afin de discuter des informations inexactes et de lui fournir des informations exactes.",
      "C. Transmettez régulièrement des mises à jour au comité de pilotage afin de le tenir informé de l’avancement du projet.",
      "D. Signalez le problème à un niveau supérieur et demandez que tous les rapports soient préapprouvés avant d’être envoyés au comité de pilotage."
    ],
    answer: "B. Planifiez une réunion avec la partie prenante afin de discuter des informations inexactes et de lui fournir des informations exactes.",
    explanation: "En programmant une réunion, le chef de projet peut adopter une approche proactive pour résoudre le problème des rapports inexacts.\nMettre à jour le plan de communication est une bonne stratégie à long terme mais ne résout pas le problème immédiat. Envoyer des mises à jour régulières ne résout pas le problème. La préapprobation systématique est une mesure extrême."
  },
  {
    id: 37,
    question: "Une entreprise est en train de passer d’une approche prédictive à une mise en œuvre de projet hybride, combinant méthodes prédictives et agiles. Soucieuse de la concrétisation des bénéfices, la direction suit de près l’une des itérations du projet avec le chef de projet.\n\nQue doit faire le chef de projet dans cette situation ?",
    options: [
      "A. Fournir à l’équipe dirigeante un rapport de valeur quantifiable pour chaque itération.",
      "B. Démontrez la valeur ajoutée pour l’entreprise à l’équipe dirigeante et obtenez son adhésion.",
      "C. Continuez à proposer des itérations de la solution et à démontrer les améliorations apportées à l’équipe dirigeante.",
      "D. Attendez que l’équipe dirigeante partage avec la direction les mises à jour concernant la réalisation des bénéfices pour chaque itération."
    ],
    answer: "C. Continuez à proposer des itérations de la solution et à démontrer les améliorations apportées à l’équipe dirigeante.",
    explanation: "En environnement agile, la création de valeur ajoutée incombe à l’équipe projet, qui produira cette valeur de manière collaborative et progressive. Les KPI agiles fournissent un historique permettant aux équipes d’améliorer leurs prévisions et leur prise de décision."
  },
  {
    id: 38,
    question: "Un directeur est responsable produit d’un projet logiciel gouvernemental. Il se trouve régulièrement dans l’incapacité d’interagir avec l’équipe et de fournir des retours d’information réguliers et pertinents sur les livrables du projet.\n\nQue doit faire le chef de projet pour résoudre ce problème ?",
    options: [
      "A. Déterminer les préférences en matière de communication et examiner les responsabilités.",
      "B. Obtenir d’autres commentaires du client.",
      "C. Recommander une politique de porte ouverte pour ce projet.",
      "D. Adoptez une approche collaborative."
    ],
    answer: "A. Déterminer les préférences en matière de communication et examiner les responsabilités.",
    explanation: "La communication est un facteur clé de succès. Il incombe au chef de projet d’impliquer les parties prenantes et de mettre en place un canal de communication.\nLes retours alternatifs ne peuvent remplacer les contributions du responsable produit ; une politique de porte ouverte ne résout pas les problèmes spécifiques ; on ne peut supposer que l’entreprise n’adopte pas déjà une approche collaborative."
  },
  {
    id: 39,
    question: "Un chef de projet supervise actuellement un projet hybride aux exigences de périmètre et de qualité bien définies. Cependant, suite à des modifications récentes apportées au produit d’un concurrent, on craint de plus en plus que les livrables du projet ne deviennent obsolètes d’ici son achèvement.\n\nQue doit faire le chef de projet pour remédier à l’obsolescence potentielle des livrables ?",
    options: [
      "A. Réalisez une analyse d’impact commerciale complète et explorez les options d’utilisation de matériaux ou de ressources alternatifs.",
      "B. Évaluer l’impact des modifications apportées aux produits du concurrent et demander l’approbation du comité de contrôle des changements (CCB) pour y remédier.",
      "C. Poursuivre le projet comme prévu, en respectant le calendrier existant et en évitant toute modification de la portée ou de la qualité.",
      "D. Clôturer le projet actuel et lancer un nouveau projet mieux adapté à l’évolution du contexte concurrentiel."
    ],
    answer: "B. Évaluer l’impact des modifications apportées aux produits du concurrent et demander l’approbation du comité de contrôle des changements (CCB) pour y remédier.",
    explanation: "Le chef de projet doit évaluer l’impact des changements externes et consulter le CCB pour obtenir les approbations nécessaires.\nRéaliser une analyse d’impact n’est peut-être pas la mesure la plus immédiate. Poursuivre sans changement ignore les risques d’obsolescence. Lancer un nouveau projet est une mesure radicale."
  },
  {
    id: 40,
    question: "Un projet est en phase d’exécution lorsque de nouveaux membres sont intégrés à l’équipe. Avant cette intégration, que doit faire le chef de projet pour minimiser l’impact de cette action sur la performance du projet ?",
    options: [
      "A. Organiser une séance pour mettre à jour l’accord social existant sur la manière dont l’équipe travaillera en collaboration.",
      "B. Planifiez une séance pour permettre aux membres actuels de l’équipe d’expliquer aux nouveaux venus le contrat social en vigueur.",
      "C. Organisez une réunion avec tous les membres de l’équipe afin de communiquer l’accord social actuel.",
      "D. Organisez une réunion avec les nouveaux membres de l’équipe pour leur expliquer les règles incluses dans le contrat social."
    ],
    answer: "A. Organiser une séance pour mettre à jour l’accord social existant sur la manière dont l’équipe travaillera en collaboration.",
    explanation: "Lorsqu’un nouveau membre rejoint une équipe existante, une nouvelle équipe est créée. Le chef de projet doit organiser une réunion pour mettre à jour les règles de fonctionnement.\nLes autres réponses ne proposent pas de mettre à jour l’accord social actuel pour tenir compte des nouveaux membres."
  },
  {
    id: 41,
    question: "Dans une entreprise ayant récemment adopté des pratiques hybrides, un projet peine à atteindre ses objectifs. Ni le chef de projet ni les membres de l’équipe n’ont d’expérience préalable de cette nouvelle approche.\n\nQue doit faire le chef de projet ?",
    options: [
      "A. Participez activement à l’attribution des tâches aux membres de l’équipe et assurez le suivi de leurs résultats.",
      "B. Organisez une formation hybride de base pour les membres de l’équipe et assurez-vous que l’équipe effectue des réunions de coordination.",
      "C. Diffuser des rapports de performance à tous les membres de l’équipe afin qu’ils puissent les consulter et prendre les mesures nécessaires.",
      "D. Élaborez une structure de découpage du projet (WBS) et une matrice RACI pour garantir que tous les aspects du projet sont pris en charge."
    ],
    answer: "B. Organisez une formation hybride de base pour les membres de l’équipe et assurez-vous que l’équipe effectue des réunions de coordination.",
    explanation: "Pour que la transition vers le travail hybride soit réussie, le chef de projet doit veiller à ce que les membres de l’équipe reçoivent une formation de base.\nLes autres réponses ne tiennent pas compte du manque d’expérience avec la nouvelle approche hybride."
  },
  {
    id: 42,
    question: "Une équipe travaille dans un secteur très réglementé et le service de conformité impose sans cesse des documents et des procédures qui entravent son mode de fonctionnement. La frustration de l’équipe grandit et elle demande l’intervention du chef de projet.\n\nQuelle approche ce dernier devrait-il adopter ?",
    options: [
      "A. Aidez l’équipe à comprendre que la conformité est un élément important de la réussite globale du projet et de la création de valeur.",
      "B. Faites pression sur le service de conformité et réduisez le nombre de documents afin que l’équipe puisse se concentrer sur la création de valeur.",
      "C. Organisez un atelier quotidien pour évaluer la conformité et effectuez autant de travail de conformité que possible dans ce laps de temps.",
      "D. Invitez l’équipe de conformité à assister aux réunions quotidiennes afin d’éviter les interférences et les ressentiments entre les deux équipes."
    ],
    answer: "A. Aidez l’équipe à comprendre que la conformité est un élément important de la réussite globale du projet et de la création de valeur.",
    explanation: "En privilégiant la compréhension et la collaboration, le chef de projet peut répondre efficacement aux préoccupations de l’équipe, garantir la conformité réglementaire et assurer le succès global du projet.\nS’opposer au service conformité n’est pas viable. Des ateliers quotidiens risquent de perturber le flux de travail. Inviter l’équipe conformité aux réunions quotidiennes n’est pas forcément efficace."
  },
  {
    id: 43,
    question: "Un projet est presque terminé et une partie prenante souhaite savoir quel sera l’impact des résultats sur l’organisation.\n\nQue doit aborder le chef de projet avec cette partie prenante ?",
    options: [
      "A. Étude de cas",
      "B. Plan de gestion des avantages",
      "C. Charte de projet",
      "D. Journal des hypothèses"
    ],
    answer: "B. Plan de gestion des avantages",
    explanation: "Le chef de projet doit examiner le plan de gestion des avantages avec la partie prenante, car il s’agit du meilleur document pour décrire comment et quand les avantages seront fournis et l’impact des résultats sur l’organisation."
  },
  {
    id: 44,
    question: "Un chef de projet gère un projet de longue durée qui accuse du retard. Le client craint que le projet ne soit encore retardé.\n\nQuelles sont les deux actions que le chef de projet devrait entreprendre pour répondre aux préoccupations du client ? (Choisissez deux réponses.)",
    options: [
      "A. Créer un nouveau calendrier de référence.",
      "B. Examiner le processus de contrôle des changements.",
      "C. Ajouter des ressources aux tâches du chemin critique.",
      "D. Effectuer une analyse des réserves pour risques.",
      "E. Exécutez plusieurs activités simultanément."
    ],
    answer: "C, E",
    explanation: "Le chef de projet devrait allouer davantage de ressources aux tâches critiques (accélération) et exécuter certaines activités en parallèle (exécution accélérée).\nCréer un nouveau calendrier masque le problème ; revoir le processus de contrôle des changements et l’analyse des provisions ne répondent pas immédiatement aux préoccupations."
  },
  {
    id: 45,
    question: "Une équipe de projet installe un système de comptage fiscal pour un terminal pétrolier. Le chef de projet a commandé le système, réalisé un test de réception en usine et livré les compteurs au terminal pour installation. Sur place, les autorités locales ont refusé l’homologation des compteurs pour non-respect des procédures réglementaires.\n\nComment le chef de projet aurait-il pu éviter cette situation ?",
    options: [
      "A. Se référer aux leçons tirées des projets précédents.",
      "B. Les parties prenantes ont été informées des résultats des tests de réception en usine des compteurs.",
      "C. Respect des exigences des parties prenantes garanti.",
      "D. Plan de mobilisation des parties prenantes révisé."
    ],
    answer: "C. Respect des exigences des parties prenantes garanti.",
    explanation: "Le respect des besoins des principales parties prenantes, en l’occurrence les organismes de réglementation, aurait permis d’éviter le refus des autorisations et le retard du projet.\nTirer les leçons de l’expérience, informer les parties prenantes et le plan de mobilisation sont des options valables, mais garantir la prise en compte des besoins essentiels est la meilleure solution."
  },
  {
    id: 46,
    question: "Une organisation est à mi-parcours d’un projet quinquennal et tout s’est déroulé comme prévu. La dernière évaluation du projet indique qu’il ne sera pas conforme à une réglementation internationale récemment entrée en vigueur.\n\nQue doit faire le chef de projet ?",
    options: [
      "A. Poursuivez le projet car la nouvelle réglementation ne fait pas partie des exigences initiales du projet.",
      "B. Organiser un atelier avec le comité de pilotage du projet afin d’examiner la nouvelle réglementation et de trouver une solution.",
      "C. Utiliser la réserve de prévoyance pour financer les tâches supplémentaires requises par la nouvelle réglementation.",
      "D. Demander des fonds auprès de la réserve de gestion car la nouvelle réglementation représente un risque inconnu."
    ],
    answer: "B. Organiser un atelier avec le comité de pilotage du projet afin d’examiner la nouvelle réglementation et de trouver une solution.",
    explanation: "Le chef de projet doit collaborer avec le comité de pilotage afin de trouver une solution et de garantir la conformité.\nPoursuivre sans tenir compte de la réglementation entraînera une non-conformité. Le chef de projet ne doit pas demander de fonds ni utiliser la réserve sans l’approbation du CCB."
  },
  {
    id: 47,
    question: "Lors de la phase d’initiation d’un projet agile, un membre senior de l’équipe suggère d’utiliser un nouvel outil de documentation en se basant sur son expérience lors d’un projet précédent.\n\nQue doit faire le chef de projet en premier ?",
    options: [
      "A. Déconseiller l’utilisation du nouvel outil de documentation.",
      "B. Demander l’approbation du commanditaire pour le nouvel outil de documentation.",
      "C. Demandez à l’équipe de vous faire part de ses commentaires concernant le nouvel outil de documentation.",
      "D. Organisez une session de formation d’équipe sur l’utilisation du nouvel outil de documentation."
    ],
    answer: "C. Demandez à l’équipe de vous faire part de ses commentaires concernant le nouvel outil de documentation.",
    explanation: "En privilégiant les retours et la collaboration, le chef de projet fait preuve de leadership et d’adhésion aux principes agiles.\nSolliciter l’approbation du commanditaire pour chaque choix d’outil nuit à l’autonomie. Décourager une suggestion entrave l’innovation. Former sans recueillir les commentaires risque d’entraîner un gaspillage."
  },
  {
    id: 48,
    question: "Un nouveau chef de projet a récemment repris un projet suite au départ de son prédécesseur. Il sait que ce dernier avait un style de management très autoritaire et prenait toutes les décisions. Le nouveau chef de projet constate également une baisse de moral chez un superviseur senior.\n\nQue doit faire le nouveau chef de projet ?",
    options: [
      "A. Accroître le niveau d’autorité du superviseur.",
      "B. Identifier la cause du problème de moral.",
      "C. Modifier le rôle du superviseur dans le projet.",
      "D. Parlez-en au superviseur et mettez à jour le registre des problèmes du projet."
    ],
    answer: "B. Identifier la cause du problème de moral.",
    explanation: "Le nouveau chef de projet devrait d’abord recueillir des informations supplémentaires afin d’identifier la cause profonde du faible moral.\nAugmenter l’autorité, modifier le rôle ou mettre à jour le registre des problèmes n’améliorera pas le moral sans comprendre la cause."
  },
  {
    id: 49,
    question: "Au sein d’une organisation hybride en pleine expansion, un chef de projet est de plus en plus frustré par le rythme effréné des changements dans ses opérations quotidiennes. Plusieurs nouveaux membres de l’équipe ont déjà quitté l’entreprise ou ont été promus à d’autres postes.\n\nQue doit faire le chef de projet pour garantir la stabilité de la gouvernance du projet ?",
    options: [
      "A. Collaborer avec la direction pour mettre à jour les actifs de processus organisationnels (OPA).",
      "B. Élaborer un nouveau contrat social pour responsabiliser l’équipe.",
      "C. Mettre à jour la charte d’équipe avec les nouveaux membres.",
      "D. Mettez à jour régulièrement le plan de gestion de projet."
    ],
    answer: "A. Collaborer avec la direction pour mettre à jour les actifs de processus organisationnels (OPA).",
    explanation: "En collaborant avec la direction pour mettre à jour les procédures opérationnelles, le chef de projet contribue à garantir une compréhension claire et cohérente des méthodes de travail.\nUn contrat social, la charte d’équipe ou le plan de gestion ne suffisent pas à garantir la stabilité dans un contexte en constante évolution."
  },
  {
    id: 50,
    question: "Un changement majeur de politique gouvernementale peut entraîner un retard dans la date d’achèvement d’un projet. Le projet est réalisé à 90 %.\n\nQue doit faire le chef de projet ensuite ?",
    options: [
      "A. Suspendre le projet jusqu’à ce que le problème avec la politique gouvernementale soit résolu.",
      "B. Solliciter le comité de contrôle des changements (CCB) pour évaluer les impacts possibles sur le projet.",
      "C. Poursuivre le projet puisqu’il est presque terminé.",
      "D. Attribuez une nouvelle date d’achèvement au projet et informez-en les parties prenantes."
    ],
    answer: "B. Solliciter le comité de contrôle des changements (CCB) pour évaluer les impacts possibles sur le projet.",
    explanation: "Le chef de projet doit consulter le CCB afin d’évaluer les impacts potentiels sur le projet.\nSuspendre n’est peut-être pas nécessaire. Poursuivre sans évaluation pourrait compromettre la réussite. L’annonce d’une nouvelle date devrait intervenir après l’évaluation du CCB."
  },
  {
    id: 51,
    question: "Un membre de l’équipe est en arrêt maladie pour une semaine. Il est actuellement affecté à une tâche faisant partie du chemin critique.\n\nQuelle est la prochaine étape que le chef de projet devrait entreprendre ?",
    options: [
      "A. Choisissez un autre membre de l’équipe pour prendre immédiatement le relais.",
      "B. Évaluer les impacts possibles d’un retard de projet.",
      "C. Consultez le plan de réponse aux risques pour atténuer ce problème.",
      "D. Convaincre le membre de l’équipe de poursuivre la tâche."
    ],
    answer: "B. Évaluer les impacts possibles d’un retard de projet.",
    explanation: "L’évaluation des impacts potentiels devrait être la première action afin de déterminer l’effet sur les coûts, les délais et les autres contraintes.\nChoisir un autre membre ou convaincre le membre malade pourrait être préjudiciable sans passation de consignes. Il est impossible de remédier au problème avant qu’il n’ait été évalué."
  },
  {
    id: 52,
    question: "Un chef de projet planifie la prochaine version pour l’équipe de développement logiciel. L’équipe a déjà réalisé deux versions et le backlog produit pour la prochaine version est validé.\n\nLequel des outils suivants le chef de projet devrait-il utiliser pour planifier la durée de la prochaine version ?",
    options: [
      "A. Feuille de route produit",
      "B. Calendrier des ressources",
      "C. Structure de répartition du travail (SRT)",
      "D. Graphique de burndown"
    ],
    answer: "C. Structure de répartition du travail (SRT)",
    explanation: "L’organigramme des tâches (WBS) est une décomposition hiérarchique du travail à réaliser. En décomposant le travail en tâches plus petites, le chef de projet peut mieux appréhender le temps et les ressources requis.\nLa feuille de route est un plan de haut niveau. Le calendrier des ressources indique la disponibilité. Le graphique de burndown suit la progression mais n’estime pas la durée."
  },
  {
    id: 53,
    question: "Un projet complexe de développement de produit, d’une valeur de plusieurs millions de dollars et s’étalant sur plusieurs années, est achevé à 70 %. La résiliation du contrat est envisagée en raison de livrables jugés insatisfaisants. Malgré les tensions, le fournisseur est disposé à reprendre le projet sans pénalité.\n\nQue doit faire le chef de projet pour gérer cette situation ?",
    options: [
      "A. Demandez au client d’autoriser une nouvelle intervention, car le fournisseur possède une connaissance unique du produit.",
      "B. Finalisez la nouvelle définition de « terminé » (DoD) avec le client et faites en sorte que le fournisseur prenne en charge le coût des retouches.",
      "C. Faciliter la négociation des critères d’acceptation entre le client et le fournisseur.",
      "D. Demandez au fournisseur de retravailler le livrable puisqu’il n’a pas respecté les exigences."
    ],
    answer: "C. Faciliter la négociation des critères d’acceptation entre le client et le fournisseur.",
    explanation: "C’est l’approche la plus collaborative et consensuelle. Elle permet de s’assurer que les modifications répondent aux besoins des deux parties.\nDemander l’autorisation, finaliser le DoD ou demander la retouche directement sont moins efficaces et risquent de nuire à la relation."
  },
  {
    id: 54,
    question: "Dans une organisation hybride, un membre de l’équipe informe le chef de projet d’une nouvelle méthode permettant de réaliser une activité plus rapidement. Le chef de projet n’a jamais utilisé cette méthode, mais un membre de confiance explique que son expérience passée en confirme l’efficacité.\n\nQuelles sont les deux actions que le chef de projet doit entreprendre ? (Choisissez deux réponses.)",
    options: [
      "A. Impliquez le responsable fonctionnel du membre de l’équipe.",
      "B. Reportez la décision au prochain sprint.",
      "C. Mettre à jour la structure de répartition du travail (SRT).",
      "D. Évaluer l’impact de l’adoption du nouveau processus.",
      "E. Communiquer l’impact aux principales parties prenantes."
    ],
    answer: "D, E",
    explanation: "Le chef de projet doit évaluer les impacts et communiquer ses conclusions aux principales parties prenantes.\nImpliquer le responsable fonctionnel n’est pas nécessaire à ce stade. Reporter la décision n’est pas judicieux. La mise à jour de la SRT n’est pas nécessaire tant qu’aucune décision n’a été prise."
  },
  {
    id: 55,
    question: "Un contrat informatique relatif à un projet stipule que tous les membres de l’équipe doivent être certifiés en sécurité informatique. Le chef de projet découvre qu’un membre de l’équipe a présenté un faux certificat.\n\nQue doit faire en premier le chef de projet pour gérer cette situation ?",
    options: [
      "A. Mettre à jour le plan de gestion de projet afin d’y inclure les ressources nécessaires à la certification du membre de l’équipe.",
      "B. Mettez à jour le journal des problèmes et retirez le membre de l’équipe du projet.",
      "C. Assurez-vous que les autres membres de l’équipe possèdent des certificats valides.",
      "D. Enquêter sur les raisons pour lesquelles cette situation n’a pas été découverte plus tôt."
    ],
    answer: "B. Mettez à jour le journal des problèmes et retirez le membre de l’équipe du projet.",
    explanation: "La falsification de documents est contraire à l’éthique et peut nuire à la réputation de l’équipe. Le chef de projet doit signaler immédiatement le problème et retirer le membre concerné.\nLes autres réponses décrivent des mesures à prendre après le signalement du problème."
  },
  {
    id: 56,
    question: "Un pays met en œuvre une nouvelle législation du travail comportant des exigences spécifiques en matière de santé et de sécurité au travail. Les procédures internes de l’entreprise n’ont pas encore été mises à jour, mais la direction a informé tous les chefs de projet de cette réglementation.\n\nQue doivent faire en premier les chefs de projet ?",
    options: [
      "A. Examiner les impacts possibles de la réglementation mise à jour sur leurs projets.",
      "B. Mettre à jour leur registre des risques du projet pour les risques émergents.",
      "C. Demander au service des ressources humaines de mettre à jour les procédures.",
      "D. Demandez conseil au siège social pour définir la meilleure stratégie à adopter."
    ],
    answer: "A. Examiner les impacts possibles de la réglementation mise à jour sur leurs projets.",
    explanation: "En accordant la priorité à une analyse approfondie de l’impact, le chef de projet adopte une approche proactive et éclairée.\nLa mise à jour du registre doit reposer sur une compréhension approfondie. Les RH mettront à jour ultérieurement. Consulter le siège peut être utile mais l’analyse est prioritaire."
  },
  {
    id: 57,
    question: "Un membre de l’équipe projet, embauché pour six mois afin d’accomplir une tâche spécifique, a décidé de quitter le projet au bout de cinq mois pour saisir une autre opportunité professionnelle.\n\nQuelle devrait être la première action du chef de projet ?",
    options: [
      "A. Modifier le contrat afin de garantir que le membre de l’équipe terminera les livraisons au cours du cinquième mois.",
      "B. Déterminez quels colis restants pourraient être affectés et assurez-vous que des ressources adéquates sont disponibles.",
      "C. Confirmez les termes du contrat du membre de l’équipe afin de clore sa participation de manière appropriée.",
      "D. Vérifiez la réserve de prévoyance pour disposer de ressources supplémentaires afin d’embaucher un nouveau membre pour finaliser ces dossiers."
    ],
    answer: "C. Confirmez les termes du contrat du membre de l’équipe afin de clore sa participation de manière appropriée.",
    explanation: "Bien comprendre les termes du contrat, notamment le préavis et les livrables restant à fournir, permet de déterminer la marche à suivre.\nModifier le contrat à ce stade n’est ni pratique ni juridiquement viable. Identifier les lots concernés doit intervenir après la compréhension des obligations contractuelles."
  },
  {
    id: 58,
    question: "Un chef de projet fait le point avec son équipe sur l’état d’avancement du projet et constate qu’une ressource d’un prestataire peut être libérée plus tôt que prévu. Il vérifie le planning, confirme cette modification et en informe le prestataire. Ce dernier soutient que la ressource doit rester pendant une période déterminée.\n\nQue doit faire le chef de projet ?",
    options: [
      "A. Laissez le planning tel quel puisque la ressource doit rester activée.",
      "B. Confirmez les modifications d’horaire et examinez-les avec les parties prenantes.",
      "C. Préparez-vous à mettre la ressource à la disposition du fournisseur.",
      "D. Veuillez consulter les termes et conditions du contrat avec le fournisseur."
    ],
    answer: "D. Veuillez consulter les termes et conditions du contrat avec le fournisseur.",
    explanation: "En raison d’un désaccord contractuel, le chef de projet doit vérifier la documentation contractuelle afin de confirmer les termes et conditions."
  },
  {
    id: 59,
    question: "Lors d’une revue Scrum pour un projet hybride, un membre de l’équipe suggère d’ajouter une tâche hors du périmètre initial. Cette tâche pourrait réduire les risques liés au projet.\n\nQue doit faire le chef de projet ?",
    options: [
      "A. Évaluer la faisabilité et l’impact de l’inclusion de cette tâche et l’intégrer aux sprints futurs si nécessaire.",
      "B. Demandez au responsable produit d’évaluer l’intérêt de cette activité pour répondre aux exigences initiales du projet.",
      "C. Orientez l’équipe vers l’activité du chemin critique et ajoutez la tâche à la liste des tâches en attente pour un examen ultérieur.",
      "D. Documentez la tâche dans la documentation du projet, en précisant qu’elle peut réduire les risques mais qu’elle est hors du périmètre de référence."
    ],
    answer: "A. Évaluer la faisabilité et l’impact de l’inclusion de cette tâche et l’intégrer aux sprints futurs si nécessaire.",
    explanation: "Le chef de projet doit analyser l’impact. Si la tâche est faisable et bénéfique, elle doit être intégrée aux sprints suivants, conformément aux principes Scrum de flexibilité.\nDemander au PO n’est pas nécessairement requis. Orienter vers le chemin critique ne résout pas le problème. Documenter simplement ne prend pas en compte les avantages potentiels."
  },
  {
    id: 60,
    question: "Un chef de projet travaille dans une organisation dont la culture encourage le travail en équipes virtuelles. De nouveaux défis surgissent régulièrement, et le chef de projet se trouve dans les premières phases d’un nouveau projet agile.\n\nQue doit faire le chef de projet pour aider l’équipe à surmonter ces difficultés ?",
    options: [
      "A. Effectuez une analyse SWOT (forces, faiblesses, opportunités et menaces) pour identifier rapidement la situation de l’équipe et prendre les mesures appropriées.",
      "B. Suspendre toutes les activités et réunir l’équipe pour une réunion afin de discuter des nouveaux défis identifiés.",
      "C. Attendez la prochaine réunion scrum quotidienne pour aborder les difficultés.",
      "D. Collaborez avec le responsable produit pour déterminer la meilleure stratégie à adopter par l’équipe afin de lever tous les obstacles."
    ],
    answer: "A. Effectuez une analyse SWOT (forces, faiblesses, opportunités et menaces) pour identifier rapidement la situation de l’équipe et prendre les mesures appropriées.",
    explanation: "Le chef de projet doit d’abord comprendre les problèmes et les lacunes de l’équipe, ce qu’une analyse SWOT lui permet de faire.\nIl n’est pas nécessaire d’interrompre le projet. Le responsable produit n’a pas besoin d’être impliqué car les difficultés sont internes."
  },
  {
    id: 61,
    question: "Au sein d’une grande organisation, un projet rencontre des difficultés de communication. Les membres de l’équipe et les responsables fonctionnels déplorent d’être informés trop tard, de ne pas être inclus dans les discussions relatives au projet, ou de ne pas être au courant d’informations importantes.\n\nComment le chef de projet devrait-il gérer cette situation ?",
    options: [
      "A. Veillez à respecter le processus convenu tel qu’il est énoncé dans le plan de communication.",
      "B. Envoyez régulièrement un courriel de mise à jour à chaque responsable fonctionnel concernant l’état d’avancement du projet.",
      "C. Organisez une réunion avec les chefs d’équipe pour trouver une solution.",
      "D. Consultez le tableau RACI pour savoir qui doit savoir quoi et quand, et assurez-vous du respect de cette consigne."
    ],
    answer: "A. Veillez à respecter le processus convenu tel qu’il est énoncé dans le plan de communication.",
    explanation: "Le chef de projet doit examiner le plan de communication et s’assurer du respect du processus convenu. S’il y a des lacunes, il n’est jamais trop tard pour inclure les principales parties prenantes et améliorer la communication."
  },
  {
    id: 62,
    question: "Un chef de projet est désigné pour concevoir et élaborer une stratégie pour un organisme gouvernemental. Il constate que le projet dispose de peu d’informations détaillées pour établir des estimations. Cependant, plusieurs autres organismes gouvernementaux ont déjà adopté avec succès la même stratégie.\n\nQuelle méthode d’estimation le chef de projet doit-il choisir ?",
    options: [
      "A. Modélisation paramétrique",
      "B. Estimation analogue",
      "C. Estimation en trois points",
      "D. Avis d’expert"
    ],
    answer: "B. Estimation analogue",
    explanation: "L’estimation par analogie utilise les données historiques de projets similaires. Elle est particulièrement adaptée aux projets pour lesquels les informations sont limitées.\nLa modélisation paramétrique est moins adaptée avec des informations limitées. L’estimation à trois points et le recours à l’expertise sont également moins adaptés dans ce contexte."
  },
  {
    id: 63,
    question: "Dans le cadre d’un projet agile, un membre de l’équipe soulève des inquiétudes concernant la santé et la sécurité liées au livrable.\n\nComment le chef de projet doit-il gérer ces questions de santé et de sécurité ?",
    options: [
      "A. Fournir au client une documentation adéquate sur les informations relatives à la santé et à la sécurité.",
      "B. Transmettez le problème au service de santé et de sécurité.",
      "C. Élaborer une politique de santé et de sécurité pour l’organisation.",
      "D. S’assurer que les exigences nécessaires en matière de santé et de sécurité sont respectées dans la définition de ce qui est fait (DoD)."
    ],
    answer: "D. S’assurer que les exigences nécessaires en matière de santé et de sécurité sont respectées dans la définition de ce qui est fait (DoD).",
    explanation: "Il est important que le chef de projet s’assure que les exigences en matière de santé et sécurité sont incluses dans le DoD et que le livrable répond à ces exigences.\nFournir de la documentation, signaler le problème ou élaborer des politiques ne garantissent pas à elles seules le respect des exigences."
  },
  {
    id: 64,
    question: "Au début du projet, l’équipe a opté pour une approche agile, en utilisant des récits utilisateurs pour la collecte des exigences. Conformément au cadre de contrôle de l’organisation, le service de conformité interne demandera une copie du document d’exigences approuvé.\n\nQue faut-il faire pour satisfaire à cette demande de conformité ?",
    options: [
      "A. Examiner l’approche du projet avec le service de conformité, en s’assurant qu’ils comprennent comment elle permettra d’atteindre l’objectif de contrôle.",
      "B. À la fin du projet, imprimez et rassemblez toutes les user stories dans un seul package et faites-les approuver par le responsable produit.",
      "C. Attribuez l’exigence de conformité comme tâche sur le tableau Kanban du projet au responsable produit.",
      "D. Examiner l’approche du projet en matière de conformité, en indiquant que l’objectif de contrôle n’est pas requis car le projet utilise la méthode agile."
    ],
    answer: "A. Examiner l’approche du projet avec le service de conformité, en s’assurant qu’ils comprennent comment elle permettra d’atteindre l’objectif de contrôle.",
    explanation: "Le chef de projet doit revoir l’approche du projet avec la conformité pour garantir la compréhension de la méthode agile.\nImprimer et assembler est une méthode cascade. Attribuer au responsable produit renvoie indûment la responsabilité. Le développement agile n’implique pas le non-respect des objectifs de contrôle."
  },
  {
    id: 65,
    question: "Un projet a été mis en place pour créer une nouvelle fonction au sein de l’entreprise. Plusieurs mois après son achèvement, le chef de projet continue d’en assurer la gestion opérationnelle tout en travaillant sur un autre projet.\n\nQu’aurait dû faire le chef de projet dès le début du projet pour éviter cela ?",
    options: [
      "A. Nous avons veillé à ce que la révision de la structure organisationnelle soit un livrable.",
      "B. Le plan de transition a été inclus comme livrable dans le processus de clôture du projet.",
      "C. Nous avons clarifié le diagramme RACI avec le commanditaire du projet dès le début de celui-ci.",
      "D. Nous avons veillé à ce que le processus de recrutement soit inclus dans le plan de gestion de projet."
    ],
    answer: "B. Le plan de transition a été inclus comme livrable dans le processus de clôture du projet.",
    explanation: "En intégrant le plan de transition aux livrables de la clôture, le chef de projet peut anticiper les problèmes liés à la continuité des opérations et garantir une passation réussie.\nUne révision de la structure organisationnelle, un diagramme RACI ou le processus de recrutement ne traitent pas spécifiquement du transfert aux opérations."
  },
  {
    id: 66,
    question: "Un chef de projet supervise un projet agile dont le périmètre et les exigences de conformité sont finalisés. Lors d’une revue régulière, une partie prenante l’informe que des modifications proposées à la législation nationale en matière de sécurité pourraient impacter le périmètre du projet.\n\nQue doit faire le chef de projet ?",
    options: [
      "A. Concentrez-vous sur la réalisation des activités prévues dans le backlog produit.",
      "B. Analysez l’impact des modifications législatives sur le plan du projet.",
      "C. Intégrez les modifications dans le prochain sprint, conformément à la proposition.",
      "D. Demandez au commanditaire d’approuver le budget supplémentaire alloué à cette modification."
    ],
    answer: "B. Analysez l’impact des modifications législatives sur le plan du projet.",
    explanation: "Les modifications législatives peuvent avoir une incidence significative sur la portée, la conformité, le calendrier et le budget. Analyser cet impact est essentiel.\nSe concentrer sur les activités en attente ignore l’impact potentiel. Mettre en œuvre sans analyse pourrait perturber. Demander un budget sans analyse est prématuré."
  },
  {
    id: 67,
    question: "Lors d’une réunion de suivi, le chef de projet découvre des exigences imprécises susceptibles d’impacter le respect du calendrier prévu. Le commanditaire souhaite néanmoins maintenir l’échéance initiale.\n\nComment le chef de projet devrait-il aborder ce problème en utilisant les pratiques agiles ?",
    options: [
      "A. Utilisez une approche itérative et hiérarchisez les exigences en fonction de leur importance et de leur impact.",
      "B. Informez le commanditaire qu’une demande de modification du périmètre sera ajoutée à la prochaine itération.",
      "C. Signalez tout manque de clarté concernant le périmètre du projet comme un problème et transmettez-le au responsable produit.",
      "D. Demander au scrum master de clarifier le périmètre du projet avant de poursuivre."
    ],
    answer: "A. Utilisez une approche itérative et hiérarchisez les exigences en fonction de leur importance et de leur impact.",
    explanation: "Le chef de projet devrait privilégier une approche itérative, en priorisant les exigences selon leur importance et leur impact. Cela permet au projet d’avancer tout en traitant les exigences imprécises.\nInformer du changement de périmètre ne traite pas directement le problème. Consigner comme problème n’est pas la meilleure approche. Le scrum master n’est pas responsable de clarifier les exigences."
  },
  {
    id: 68,
    question: "Un entrepreneur a lancé un projet de développement logiciel. La charte du projet a été approuvée et un chef de projet a été désigné. En cours de développement, des risques politiques imprévus surviennent, rendant urgent d’accélérer le projet. Le commanditaire a demandé un rapport sur tout retard anticipé.\n\nQuel outil le chef de projet doit-il utiliser pour préparer le rapport sur les retards prévus ?",
    options: [
      "A. Analyse des tendances",
      "B. Analyse des causes profondes",
      "C. Rapports de qualité",
      "D. Liste des étapes importantes"
    ],
    answer: "A. Analyse des tendances",
    explanation: "L’analyse des tendances est une technique de prévision pour évaluer la performance dans le temps et prédire les performances futures. Elle peut aider à prévoir les retards.\nL’analyse des causes profondes identifie les raisons d’un problème mais ne prédit pas. Les rapports qualité ne prévoient pas les retards. La liste d’étapes n’a pas de capacités prédictives."
  },
  {
    id: 69,
    question: "Un chef de projet est affecté à un projet de transition vers l’adoption des principes agiles. La définition du périmètre est en cours, mais l’équipe souhaite une définition moins formelle.\n\nQue doit faire le chef de projet en premier ?",
    options: [
      "A. Examiner le périmètre du projet, identifier les livrables souhaités et élaborer des plans de contingence pour les risques identifiés.",
      "B. Organisez un atelier avec le responsable produit et l’équipe projet afin de créer un backlog produit et des critères d’acceptation.",
      "C. Créer un site web de communication pour partager la définition du périmètre et le backlog produit avec l’équipe projet.",
      "D. Rencontrez l’équipe de projet pour identifier les exigences obligatoires."
    ],
    answer: "B. Organisez un atelier avec le responsable produit et l’équipe projet afin de créer un backlog produit et des critères d’acceptation.",
    explanation: "La première étape consiste à organiser un atelier avec le responsable produit et l’équipe pour créer un backlog produit et des critères d’acceptation.\nExaminer le périmètre convient aux projets traditionnels. La création d’un site web est prématurée. Identifier les exigences obligatoires s’apparente à une approche cascade."
  },
  {
    id: 70,
    question: "Un chef de projet souhaite garantir l’efficacité des réunions d’équipe virtuelles.\n\nQue doit-il faire ?",
    options: [
      "A. Consignez toutes les réunions pour les participants qui ne peuvent pas y assister.",
      "B. Déterminer les meilleures méthodes de communication en fonction de la localisation.",
      "C. Priorisez l’ordre du jour en commençant par les points qui nécessitent davantage de discussion.",
      "D. Planifiez les réunions à des moments qui conviennent à la majorité des participants."
    ],
    answer: "B. Déterminer les meilleures méthodes de communication en fonction de la localisation.",
    explanation: "Pour garantir le succès des réunions virtuelles, le chef de projet doit choisir les méthodes de communication les plus adaptées en fonction de la situation géographique.\nEnregistrer les réunions ne garantit pas l’efficacité. Prioriser l’ordre du jour ne traite pas les problèmes sous-jacents. Planifier à des horaires convenant à la majorité ne répond pas aux besoins variés."
  },
  {
    id: 71,
    question:
      "Une nouvelle réglementation impose un délai critique avant le début d’un projet stratégique. Quelle est la première action du chef de projet ?",
    options: [
      { label: "Analyser l’impact de la non-initiation du projet et informer les parties prenantes", value: "A" },
      { label: "Externaliser les tâches à risque", value: "B" },
      { label: "Demander un budget supplémentaire", value: "C" },
      { label: "Construire des prototypes", value: "D" },
    ],
    solution: "A",
    rationale:
      "L’analyse d’impact permet aux parties prenantes de prendre des décisions éclairées face aux contraintes réglementaires."
  },
  {
    id: 72,
    question:
      "Un service de conformité demande un document de exigences approuvées dans un projet agile. Que doit faire le chef de projet ?",
    options: [
      { label: "Expliquer l’approche agile et comment elle répond aux objectifs de contrôle", value: "A" },
      { label: "Imprimer toutes les user stories en fin de projet", value: "B" },
      { label: "Ajouter la demande dans le Kanban", value: "C" },
      { label: "Indiquer que la conformité n’est pas requise en agile", value: "D" },
    ],
    solution: "A",
    rationale:
      "Le chef de projet doit sensibiliser la conformité à l’approche agile et démontrer comment les exigences sont bien contrôlées."
  },
  {
    id: 73,
    question:
      "Un membre recruté pour six mois quitte le projet au cinquième mois. Quelle est l’action immédiate ?",
    options: [
      { label: "Modifier le contrat", value: "A" },
      { label: "Analyser les lots impactés", value: "B" },
      { label: "Vérifier les termes du contrat et clôturer correctement sa participation", value: "C" },
      { label: "Utiliser la réserve de contingence", value: "D" },
    ],
    solution: "C",
    rationale:
      "Comprendre les obligations contractuelles est essentiel avant toute réorganisation des ressources."
  },
  {
    id: 74,
    question:
      "À 40 % d’avancement, le sponsor veut s’assurer que les parties prenantes sont toujours engagées. Quel outil utiliser ?",
    options: [
      { label: "Plan de communication", value: "A" },
      { label: "Registre des problèmes", value: "B" },
      { label: "Déclaration signée", value: "C" },
      { label: "Matrice d’évaluation de l’engagement des parties prenantes", value: "D" },
    ],
    solution: "D",
    rationale:
      "La matrice d’engagement permet de comparer l’état actuel et l’état souhaité de l’engagement des parties prenantes."
  },
  {
    id: 75,
    question:
      "Quelle question clé la charte de projet doit-elle impérativement répondre ?",
    options: [
      { label: "Pourquoi ce projet est-il réalisé ?", value: "A" },
      { label: "Pourquoi l’organisation l’a priorisé ?", value: "B" },
      { label: "Quels sont les risques ?", value: "C" },
      { label: "Qui fera le travail ?", value: "D" },
    ],
    solution: "A",
    rationale:
      "La charte doit clairement définir la vision et la raison d’être du projet."
  },
  {
    id: 76,
    question:
      "Une équipe virtuelle répartie sur plusieurs fuseaux horaires rencontre des retards dus à une mauvaise communication. Que doit faire le chef de projet ?",
    options: [
      { label: "Fournir la liste des livrables", value: "A" },
      { label: "Échanger avec les membres pour comprendre leurs difficultés", value: "B" },
      { label: "Former l’équipe à la gestion du temps", value: "C" },
      { label: "Colocaliser l’équipe", value: "D" },
    ],
    solution: "B",
    rationale:
      "L’engagement et l’écoute sont essentiels pour comprendre et résoudre les problèmes des équipes virtuelles."
  },
  {
    id: 77,
    question:
      "Avant une réunion d’évaluation, un stakeholder se plaint du manque de bénéfices métier. Que doit faire le chef de projet en premier ?",
    options: [
      { label: "Revoir le registre des changements", value: "A" },
      { label: "Revoir les plans de communication", value: "B" },
      { label: "Analyser les indicateurs de performance", value: "C" },
      { label: "Revoir les objectifs et critères de succès du projet", value: "D" },
    ],
    solution: "D",
    rationale:
      "Les bénéfices métier sont directement liés aux objectifs et critères de succès définis."
  },
  {
    id: 78,
    question:
      "Un cadre dirigeant ne répond pas aux communications, causant des retards. Que doit faire le chef de projet ?",
    options: [
      { label: "Envoyer des rappels quotidiens", value: "A" },
      { label: "Retirer la tâche du chemin critique", value: "B" },
      { label: "Utiliser son réseau pour contacter directement le dirigeant", value: "C" },
      { label: "Escalader immédiatement à son supérieur", value: "D" },
    ],
    solution: "C",
    rationale:
      "Le networking et la communication directe sont essentiels avant toute escalade."
  },
  {
    id: 79,
    question:
      "Plusieurs équipes collaborent sur un programme complexe. Quelle est la priorité initiale du chef de projet ?",
    options: [
      { label: "Organiser un événement de team building", value: "A" },
      { label: "Créer un tableau de bord", value: "B" },
      { label: "Aligner les priorités entre équipes", value: "C" },
      { label: "Identifier dépendances, risques et jalons majeurs", value: "D" },
    ],
    solution: "D",
    rationale:
      "L’identification précoce des dépendances et risques est essentielle au succès du programme."
  },
  {
    id: 80,
    question:
      "Un chef de projet découvre de forts conflits internes dans une équipe culturellement diverse. Quelle action doit-il entreprendre ?",
    options: [
      { label: "Organiser une réunion d’équipe pour comprendre les conflits", value: "A" },
      { label: "Demander à l’équipe de mieux collaborer", value: "B" },
      { label: "Mettre à jour le plan de gestion des ressources", value: "C" },
      { label: "Organiser des activités de team building", value: "D" },
    ],
    solution: "A",
    rationale:
      "Comprendre la cause des conflits est indispensable avant de proposer des solutions adaptées."
  },
  {
    id: 81,
    question:
      "Un projet de développement d’un nouveau logiciel est terminé et livré. Le logiciel est en production, mais les utilisateurs continuent de contacter l’équipe projet pour demander de l’aide ou signaler des problèmes, alors que le projet a été clôturé administrativement. Que devait faire le chef de projet pour éviter cette situation ?",
    options: [
      { label: "Inclure une activité de support post-production dans le périmètre du projet", value: "A" },
      { label: "Communiquer formellement la fin du projet à toute l’organisation", value: "B" },
      { label: "S’assurer que le produit final est transféré à une autre équipe pour son exploitation et support", value: "C" },
      { label: "Demander à l’équipe de ne plus répondre aux utilisateurs", value: "D" },
    ],
    solution: "C",
    rationale:
      "Lors de la clôture administrative, le chef de projet doit s’assurer que le produit est transféré à une entité chargée de l’exploitation, de la maintenance et du support tout au long de son cycle de vie."
  },
  {
    id: 82,
    question:
      "Une entreprise fournissait des services techniques via des ressources externes. Un nouveau chef de projet décide d’internaliser le service, mais les parties prenantes se plaignent des retards. Que doit faire le chef de projet ?",
    options: [
      { label: "Revoir le plan de communication", value: "A" },
      { label: "Améliorer la compréhension des parties prenantes sur l’approche du projet", value: "B" },
      { label: "Réembaucher le prestataire externe", value: "C" },
      { label: "Développer un plan de montée en compétence (glide path)", value: "D" },
    ],
    solution: "B",
    rationale:
      "Le chef de projet doit expliquer clairement l’approche choisie et ses bénéfices afin de réduire la frustration des parties prenantes."
  },
  {
    id: 83,
    question:
      "Un conflit est apparu entre deux membres de l’équipe juste avant une livraison. Quelle est la première action du chef de projet ?",
    options: [
      { label: "Faire appel à un coach agile", value: "A" },
      { label: "Observer et comprendre la source du conflit avant d’agir", value: "B" },
      { label: "Impliquer immédiatement les ressources humaines", value: "C" },
      { label: "Dire aux membres d’arrêter de perdre du temps", value: "D" },
    ],
    solution: "B",
    rationale:
      "Le chef de projet doit d’abord analyser et comprendre le conflit avant d’appliquer une technique de résolution."
  },
  {
    id: 84,
    question:
      "Un projet innovant utilise l’IA avec des durées imprévisibles. Le budget est fixe et l’objectif est de livrer au moins une spécification en deux mois. Que doit faire le chef de projet pour maximiser la valeur métier ?",
    options: [
      { label: "Limiter les itérations à 50 % de la durée du projet", value: "A" },
      { label: "Limiter le budget IA à 25 %", value: "B" },
      { label: "Planifier une itération d’analyse après le traitement IA", value: "C" },
      { label: "Planifier les spécifications de manière prédictive", value: "D" },
    ],
    solution: "C",
    rationale:
      "Une itération après le traitement IA permet d’analyser les résultats et de prioriser les objectifs les plus générateurs de valeur."
  },
  {
    id: 85,
    question:
      "Un projet de conception hôtelière réunit une équipe internationale et multiculturelle. Que doit faire le chef de projet lors de l’élaboration du plan de management ?",
    options: [
      { label: "Utiliser une approche en cascade", value: "A" },
      { label: "Déléguer selon les fuseaux horaires", value: "B" },
      { label: "Utiliser un seul canal de communication", value: "C" },
      { label: "Intégrer les considérations culturelles", value: "D" },
    ],
    solution: "D",
    rationale:
      "Les différences culturelles et de communication doivent être intégrées dans le plan afin d’assurer une collaboration efficace."
  },
  {
    id: 86,
    question:
      "Un client est mécontent car une équipe agile n’a pas résolu un problème critique depuis plusieurs semaines. Quelles actions le chef de projet doit-il entreprendre ? (Deux réponses)",
    options: [
      { label: "Faire appel à un expert via le manager fonctionnel", value: "A" },
      { label: "Expliquer la situation au client avec un plan d’action", value: "B" },
      { label: "Continuer à travailler sur le sprint backlog", value: "C" },
      { label: "Mettre à jour uniquement les registres", value: "D" },
      { label: "Fixer une nouvelle date de livraison", value: "E" },
    ],
    solution: "A,B",
    rationale:
      "Il faut obtenir un support technique externe et communiquer clairement avec le client pour restaurer la confiance."
  },
  {
    id: 87,
    question:
      "Lors d’une mise à niveau système, l’ancien système tombe en panne et ne peut être restauré. Quelle est la première action du chef de projet ?",
    options: [
      { label: "Abandonner l’ancien système", value: "A" },
      { label: "Demander plus de temps", value: "B" },
      { label: "Analyser les impacts et informer les parties prenantes", value: "C" },
      { label: "Dire que ce n’est pas la responsabilité de l’équipe", value: "D" },
    ],
    solution: "C",
    rationale:
      "Avant toute action, le chef de projet doit comprendre l’impact et communiquer avec les parties prenantes."
  },
  {
    id: 88,
    question:
      "Une équipe agile a dû faire des heures supplémentaires car elle manquait d’expérience. Que doit faire le chef de projet ?",
    options: [
      { label: "Demander une formation sponsorisée", value: "A" },
      { label: "Demander plus de temps pour les prochaines itérations", value: "B" },
      { label: "Demander à l’équipe de réévaluer ses estimations", value: "C" },
      { label: "Reprioriser le backlog", value: "D" },
    ],
    solution: "C",
    rationale:
      "Les leçons apprises doivent être intégrées dans la planification suivante via une meilleure estimation."
  },
  {
    id: 89,
    question:
      "Une équipe agile composée de juniors débute un projet. Que doit faire le chef de projet pour assurer la réussite du sprint ?",
    options: [
      { label: "Allouer du temps pour coacher et encadrer l’équipe", value: "A" },
      { label: "Insister sur la priorisation du backlog", value: "B" },
      { label: "Utiliser plus de techniques Scrum", value: "C" },
      { label: "Communiquer davantage", value: "D" },
    ],
    solution: "A",
    rationale:
      "Le leadership serviteur impose de développer les compétences de l’équipe, surtout lorsqu’elle débute en agile."
  },
  {
    id: 90,
    question:
      "Un membre clé est absent une semaine alors qu’il travaille sur une tâche du chemin critique. Quelle est la prochaine étape ?",
    options: [
      { label: "Remplacer immédiatement la ressource", value: "A" },
      { label: "Évaluer l’impact potentiel du retard", value: "B" },
      { label: "Appliquer le plan de réponse aux risques", value: "C" },
      { label: "Forcer le membre à travailler", value: "D" },
    ],
    solution: "B",
    rationale:
      "Avant toute action corrective, l’impact sur le coût, le délai et la qualité doit être évalué."
  },
  {
    id: 91,
    question:
      "À 70 % d’avancement, un stakeholder demande de nouvelles fonctionnalités non prévues. Que doit faire le chef de projet ?",
    options: [
      { label: "Analyser les changements avec l’équipe et suivre le processus de contrôle des changements", value: "A" },
      { label: "Reporter les changements après la livraison", value: "B" },
      { label: "Mettre à jour le plan directement", value: "C" },
      { label: "Soumettre immédiatement au CCB", value: "D" },
    ],
    solution: "A",
    rationale:
      "Toute demande doit être analysée avant de passer par le processus formel de gestion des changements."
  },
  {
    id: 92,
    question:
      "Lors de la dernière revue de sprint, le product owner estime que le produit n’apporte aucune valeur. Que doit faire le chef de projet en approche hybride ?",
    options: [
      { label: "Revoir le plan de gestion des bénéfices", value: "A" },
      { label: "Escalader au comité exécutif", value: "B" },
      { label: "Reprioriser le backlog", value: "C" },
      { label: "Arrêter le projet", value: "D" },
    ],
    solution: "A",
    rationale:
      "Le plan de gestion des bénéfices définit comment la valeur est mesurée et livrée."
  },
  {
    id: 93,
    question:
      "Une formation vidéo a été fournie mais l’équipe se sent mal préparée. Que devait faire le chef de projet ?",
    options: [
      { label: "Tester les connaissances après la formation", value: "A" },
      { label: "Demander d’autres formations", value: "B" },
      { label: "Imposer la lecture du manuel", value: "C" },
      { label: "Évaluer les styles d’apprentissage des membres", value: "D" },
    ],
    solution: "D",
    rationale:
      "Adapter la formation aux styles d’apprentissage améliore l’efficacité et l’appropriation."
  },
  {
    id: 94,
    question:
      "Une entreprise passe de cycles annuels à trimestriels. La direction hésite à adopter l’agile. Que doit faire le chef de projet ?",
    options: [
      { label: "Demander plus de budget", value: "A" },
      { label: "Identifier des quick wins dans le backlog", value: "B" },
      { label: "Former la direction", value: "C" },
      { label: "Faire travailler l’équipe à distance", value: "D" },
    ],
    solution: "B",
    rationale:
      "Les quick wins démontrent rapidement la valeur de l’approche agile et favorisent l’adhésion."
  },
  {
    id: 95,
    question:
      "Un projet attribué depuis six mois n’a toujours pas lancé les achats. Que doit faire le chef de projet ?",
    options: [
      { label: "Préparer seul le plan de gestion des achats", value: "A" },
      { label: "Réunir les équipes pour élaborer le plan de gestion des achats", value: "B" },
      { label: "Suivre un plan existant", value: "C" },
      { label: "Escalader immédiatement", value: "D" },
    ],
    solution: "B",
    rationale:
      "La collaboration permet d’initier correctement les processus d’approvisionnement."
  },
  {
    id: 96,
    question:
      "Pour définir une approche hybride, quels deux éléments culturels doivent être équilibrés ?",
    options: [
      { label: "Exploration et stabilité", value: "A" },
      { label: "Vitesse et modèles traditionnels", value: "B" },
      { label: "Flexibilité et prévisibilité", value: "C" },
      { label: "Disruption et conformité", value: "D" },
    ],
    solution: "C",
    rationale:
      "Une approche hybride nécessite un équilibre entre adaptabilité et contrôle."
  },
  {
    id: 97,
    question:
      "Une organisation passe à un modèle hybride et suit de près la réalisation des bénéfices. Que doit faire le chef de projet ?",
    options: [
      { label: "Fournir des rapports de valeur chiffrés", value: "A" },
      { label: "Démontrer la valeur métier", value: "B" },
      { label: "Livrer des itérations et montrer les bénéfices incrémentaux", value: "C" },
      { label: "Attendre les rapports de la direction", value: "D" },
    ],
    solution: "C",
    rationale:
      "La valeur doit être livrée et démontrée de manière incrémentale."
  },
  {
    id: 98,
    question:
      "Un membre de l’équipe doute de la conformité réglementaire de certains livrables. Que doit faire le chef de projet ?",
    options: [
      { label: "Réunir les parties prenantes et experts métier", value: "A" },
      { label: "Demander une lettre officielle du client", value: "B" },
      { label: "Interroger le PMO", value: "C" },
      { label: "Contacter le manager du membre", value: "D" },
    ],
    solution: "A",
    rationale:
      "Les parties prenantes clés et les experts sont les mieux placés pour clarifier les exigences réglementaires."
  },
  {
    id: 99,
    question:
      "Un problème récurrent concerne la validation avant mise en production. Quelles actions le chef de projet doit-il prendre ? (Deux réponses)",
    options: [
      { label: "Ajuster la vélocité", value: "A" },
      { label: "Inclure des tests unitaires et d’intégration", value: "B" },
      { label: "Passer au TDD", value: "C" },
      { label: "Revoir les critères d’acceptation avec l’équipe", value: "D" },
      { label: "Créer un backlog de tests", value: "E" },
    ],
    solution: "B,D",
    rationale:
      "Les critères de validation et d’acceptation doivent être clairement définis et partagés."
  },
  {
    id: 100,
    question:
      "Dès le début du projet, un stakeholder doute de la valeur du projet. Que doit faire le chef de projet en premier ?",
    options: [
      { label: "Revoir le business case et le plan de gestion des bénéfices", value: "A" },
      { label: "Communiquer régulièrement l’avancement", value: "B" },
      { label: "Former les utilisateurs", value: "C" },
      { label: "Effectuer un audit", value: "D" },
    ],
    solution: "A",
    rationale:
      "Le business case et le plan de bénéfices démontrent la finalité et la valeur du projet."
  },
  {
    id: 101,
    question:
      "Un chef de projet reprend un projet après le départ de son prédécesseur, connu pour un style de management très autoritaire. Le nouveau chef de projet constate que le moral d’un superviseur senior est bas. Que doit faire le chef de projet ?",
    options: [
      { label: "Augmenter le niveau d’autorité du superviseur", value: "A" },
      { label: "Identifier la cause du problème de motivation", value: "B" },
      { label: "Modifier le rôle du superviseur dans le projet", value: "C" },
      { label: "Discuter avec le superviseur et mettre à jour le registre des problèmes", value: "D" }
    ],
    solution: "B",
    rationale:
      "La première étape consiste à recueillir des informations afin d’identifier la cause racine du problème de motivation avant de prendre toute action corrective."
  },
  {
    id: 102,
    question:
      "Le chef de projet d’un projet hybride doit constituer son équipe. Les meilleurs profils sont géographiquement dispersés et la colocalisation est trop coûteuse. Que doit faire le chef de projet ?",
    options: [
      { label: "S’assurer que les outils de collaboration virtuelle sont disponibles", value: "A" },
      { label: "Imposer la colocalisation en réduisant le budget ailleurs", value: "B" },
      { label: "Demander des fonds supplémentaires au product owner", value: "C" },
      { label: "Organiser le travail selon la localisation des membres", value: "D" }
    ],
    solution: "A",
    rationale:
      "Fournir des outils de collaboration virtuelle est la solution la plus efficace et la plus économique pour assurer la collaboration."
  },
  {
    id: 103,
    question:
      "Un stakeholder de faible influence est promu et devient désormais un stakeholder clé. Que doit mettre à jour le chef de projet ?",
    options: [
      { label: "Le plan de management des communications", value: "A" },
      { label: "Le plan d’engagement des parties prenantes", value: "B" },
      { label: "Le plan de management des ressources", value: "C" },
      { label: "Le plan de management des risques", value: "D" }
    ],
    solution: "B",
    rationale:
      "Le plan d’engagement des parties prenantes doit être mis à jour lorsque l’influence ou l’importance d’un stakeholder change."
  },
  {
    id: 104,
    question:
      "Dans un projet agile d’automatisation industrielle, un fournisseur externe doit intervenir. Que doit faire le chef de projet avant son arrivée ?",
    options: [
      { label: "Déléguer toutes les décisions clés au fournisseur", value: "A" },
      { label: "Organiser une réunion d’orientation pour aligner les objectifs et exigences", value: "B" },
      { label: "Soumettre la matrice de communication", value: "C" },
      { label: "Rappeler à l’équipe qu’elle garde le contrôle final", value: "D" }
    ],
    solution: "B",
    rationale:
      "Une réunion d’orientation permet d’aligner toutes les parties sur les objectifs, attentes et responsabilités."
  },
  {
    id: 105,
    question:
      "Lors d’un sprint de quatre semaines, un membre clé de l’équipe est absent une semaine de manière imprévue. Quelle est la meilleure action ?",
    options: [
      { label: "Organiser un transfert de connaissances", value: "A" },
      { label: "Ajouter une ressource temporaire", value: "B" },
      { label: "Retirer certains éléments du sprint avec l’accord du product owner", value: "C" },
      { label: "Allonger la durée du sprint", value: "D" }
    ],
    solution: "C",
    rationale:
      "Réduire le périmètre du sprint avec l’accord du product owner permet de maintenir la valeur et la prévisibilité."
  },
  {
    id: 106,
    question:
      "Dans un projet prédictif, un stakeholder exige un livrable supplémentaire suite à une nouvelle loi, ce qui impacte le planning. Que doit faire le chef de projet ?",
    options: [
      { label: "Refuser car ce n’était pas prévu", value: "A" },
      { label: "Collaborer avec le stakeholder et soumettre une demande de changement au CCB", value: "B" },
      { label: "Escalader immédiatement au sponsor", value: "C" },
      { label: "Ajouter le risque au registre des risques", value: "D" }
    ],
    solution: "B",
    rationale:
      "Toute modification impactant le périmètre et le planning doit passer par le processus formel de gestion des changements."
  },
  {
    id: 107,
    question:
      "Une équipe atteint un jalon important avec une excellente performance. Que doit faire le chef de projet ?",
    options: [
      { label: "Ne rien dire car c’est attendu", value: "A" },
      { label: "Attendre la fin du projet", value: "B" },
      { label: "Donner un feedback positif lors de la prochaine réunion", value: "C" },
      { label: "Ignorer le passé et se concentrer sur la suite", value: "D" }
    ],
    solution: "C",
    rationale:
      "Le feedback régulier renforce les comportements positifs et la motivation de l’équipe."
  },
  {
    id: 108,
    question:
      "Un produit agile est conforme aux standards d’une région mais pas à ceux d’autres régions. Que doit faire le chef de projet ?",
    options: [
      { label: "Lancer dans la région conforme et planifier des itérations futures", value: "A" },
      { label: "Documenter la non-conformité uniquement", value: "B" },
      { label: "Replanifier toutes les itérations", value: "C" },
      { label: "Négocier avec les clients", value: "D" }
    ],
    solution: "A",
    rationale:
      "L’agilité permet de livrer rapidement puis d’améliorer progressivement via des itérations."
  },
  {
    id: 109,
    question:
      "Un projet combine matériel et logiciel avec un planning validé par le client. L’équipe logiciel propose l’agile. Que doit faire le chef de projet ?",
    options: [
      { label: "Évaluer la meilleure approche pour maximiser la valeur métier", value: "A" },
      { label: "Imposer l’agile", value: "B" },
      { label: "Suivre strictement le diagramme de Gantt", value: "C" },
      { label: "Faire valider les rôles clients par le PMO", value: "D" }
    ],
    solution: "A",
    rationale:
      "Le chef de projet doit analyser l’approche la plus adaptée, souvent hybride, pour maximiser la valeur."
  },
  {
    id: 110,
    question:
      "Un paiement réglementaire semble non reçu alors qu’un test critique est prévu. Que doit faire le chef de projet ?",
    options: [
      { label: "Attendre un retour administratif", value: "A" },
      { label: "Rencontrer l’agence avec les preuves de paiement", value: "B" },
      { label: "Continuer le test malgré tout", value: "C" },
      { label: "Forcer l’exécution du test", value: "D" }
    ],
    solution: "B",
    rationale:
      "Une action proactive avec l’autorité réglementaire permet d’éviter des retards et des sanctions."
  },
  {
    id: 111,
    question:
      "Un projet complexe est à 70 % terminé et les livrables sont jugés non conformes. Le fournisseur accepte la reprise sans pénalité. Que doit faire le chef de projet ?",
    options: [
      { label: "Demander au client d’accepter la reprise", value: "A" },
      { label: "Imposer un nouveau DoD", value: "B" },
      { label: "Faciliter la négociation des critères d’acceptation", value: "C" },
      { label: "Imposer la reprise au fournisseur", value: "D" }
    ],
    solution: "C",
    rationale:
      "La facilitation favorise la collaboration et une solution acceptable pour toutes les parties."
  },
  {
    id: 112,
    question:
      "Un changement majeur de politique gouvernementale peut retarder un projet achevé à 90 %. Que doit faire le chef de projet ?",
    options: [
      { label: "Suspendre le projet", value: "A" },
      { label: "Engager le comité de contrôle des changements (CCB)", value: "B" },
      { label: "Continuer sans ajustement", value: "C" },
      { label: "Fixer une nouvelle date", value: "D" }
    ],
    solution: "B",
    rationale:
      "Le CCB est responsable de l’évaluation et de l’approbation des changements majeurs."
  },
  {
    id: 113,
    question:
      "Un fournisseur stratégique se plaint d’un faible retour sur investissement. Que doit faire le chef de projet ?",
    options: [
      { label: "Offrir plus d’argent", value: "A" },
      { label: "Rappeler les obligations contractuelles", value: "B" },
      { label: "Chercher un autre fournisseur", value: "C" },
      { label: "Discuter avec les parties prenantes et définir un plan de remédiation", value: "D" }
    ],
    solution: "D",
    rationale:
      "Les décisions contractuelles doivent être prises avec les parties prenantes et selon les processus établis."
  },
  {
    id: 114,
    question:
      "Pour planifier la durée d’une prochaine release logicielle, quel outil utiliser ?",
    options: [
      { label: "Roadmap produit", value: "A" },
      { label: "Calendrier des ressources", value: "B" },
      { label: "Structure de découpage du projet (WBS)", value: "C" },
      { label: "Burndown chart", value: "D" }
    ],
    solution: "C",
    rationale:
      "La WBS permet d’estimer précisément l’effort et la durée en décomposant le travail."
  },
  {
    id: 115,
    question:
      "Un audit révèle un non-respect des exigences réglementaires. Que devait faire le chef de projet dès le départ ?",
    options: [
      { label: "Mettre à jour le journal des problèmes", value: "A" },
      { label: "Évaluer l’environnement réglementaire interne et externe", value: "B" },
      { label: "Faire auditer le plan projet", value: "C" },
      { label: "Intégrer un auditeur à l’équipe", value: "D" }
    ],
    solution: "B",
    rationale:
      "Identifier les exigences réglementaires dès le début réduit les risques et le rework."
  },
  {
    id: 116,
    question:
      "En fin de projet, le sponsor demande un briefing sur le ROI et la valeur créée. Que doit présenter le chef de projet ?",
    options: [
      { label: "L’analyse coûts-bénéfices", value: "A" },
      { label: "Les bénéfices réellement atteints", value: "B" },
      { label: "Le plan de gestion des coûts", value: "C" },
      { label: "Les facteurs financiers", value: "D" }
    ],
    solution: "B",
    rationale:
      "Les dirigeants s’intéressent avant tout à la valeur réellement livrée."
  },
  {
    id: 117,
    question:
      "Avant un test de validation, le responsable test conteste les critères. Que doit faire le chef de projet ?",
    options: [
      { label: "Comprendre le désaccord et soumettre une demande de changement si nécessaire", value: "A" },
      { label: "Changer les critères immédiatement", value: "B" },
      { label: "Maintenir les critères initiaux", value: "C" },
      { label: "Forcer l’accord", value: "D" }
    ],
    solution: "A",
    rationale:
      "Les critères doivent être alignés et validés formellement via le contrôle des changements."
  },
  {
    id: 118,
    question:
      "Deux alternatives techniques existent pour un sous-système critique, sans certitude de performance. Que doit faire le chef de projet en premier ?",
    options: [
      { label: "Faire évaluer les alternatives par l’équipe", value: "A" },
      { label: "Ajouter le risque au registre", value: "B" },
      { label: "Choisir l’option la plus prometteuse", value: "C" },
      { label: "Informer immédiatement les parties prenantes", value: "D" }
    ],
    solution: "A",
    rationale:
      "Une analyse factuelle doit précéder toute décision d’implémentation."
  },
  {
    id: 119,
    question:
      "En clôture de projet, le sponsor souhaite transférer un livrable à une ONG alors que le contrat en limite la propriété. Que doit faire le chef de projet ?",
    options: [
      { label: "Documenter la leçon apprise", value: "A" },
      { label: "Lancer une demande de changement", value: "B" },
      { label: "Considérer cela comme un problème ouvert", value: "C" },
      { label: "Revoir et modifier le contrat avec le fournisseur", value: "D" }
    ],
    solution: "D",
    rationale:
      "La modification contractuelle est nécessaire pour respecter les droits de propriété."
  },
  {
    id: 120,
    question:
      "Un chef de projet décide qu’une approche agile est la meilleure pour un nouveau projet. Cependant, certains membres de l’équipe résistent et continuent d’utiliser des approches prédictives. Que devait faire le chef de projet au début du projet ?",
    options: [
      { label: "Évaluer les compétences de l’équipe", value: "A" },
      { label: "Promouvoir et défendre l’utilisation des techniques agiles", value: "B" },
      { label: "Impliquer uniquement les ressources à l’aise avec l’agilité", value: "C" },
      { label: "Recruter des consultants agiles pour diriger l’équipe", value: "D" }
    ],
    solution: "B",
    rationale:
      "La gestion du changement exige que le chef de projet explique les bénéfices de l’agilité et fournisse les informations nécessaires pour favoriser l’adhésion de l’équipe."
  },
  {
    id: 121,
    question:
      "Une entreprise développe un produit nécessitant des exigences de sécurité non fonctionnelles. Le product owner s’inquiète de leur bonne implémentation. Que doit faire le chef de projet ?",
    options: [
      { label: "Nommer un expert sécurité pour revoir les critères d’acceptation", value: "A" },
      { label: "Transmettre les exigences à l’équipe sécurité", value: "B" },
      { label: "Discuter des exigences lors du prochain sprint", value: "C" },
      { label: "Inclure les exigences de sécurité dans la définition de terminé (DoD)", value: "D" }
    ],
    solution: "D",
    rationale:
      "Inclure la sécurité dans la DoD garantit que chaque incrément respecte systématiquement les exigences de sécurité."
  },
  {
    id: 122,
    question:
      "Un devis initial de 100 000 USD passe à plus de 250 000 USD après modification des exigences. Les fonds de contingence sont insuffisants. Que doit faire le chef de projet ?",
    options: [
      { label: "Relancer le processus d’approvisionnement", value: "A" },
      { label: "Revoir le type de contrat", value: "B" },
      { label: "Accepter la meilleure offre", value: "C" },
      { label: "Escalader le problème au comité de pilotage", value: "D" }
    ],
    solution: "D",
    rationale:
      "Le comité de pilotage peut décider d’un financement supplémentaire ou d’un arbitrage stratégique."
  },
  {
    id: 123,
    question:
      "De nouveaux membres rejoignent une équipe en phase d’exécution. Que doit faire le chef de projet pour limiter l’impact sur la performance ?",
    options: [
      { label: "Mettre à jour l’accord social de l’équipe", value: "A" },
      { label: "Faire expliquer les règles par l’équipe existante", value: "B" },
      { label: "Présenter l’accord social actuel", value: "C" },
      { label: "Expliquer les règles aux nouveaux membres uniquement", value: "D" }
    ],
    solution: "A",
    rationale:
      "L’arrivée de nouveaux membres crée une nouvelle équipe. Les règles de collaboration doivent être redéfinies collectivement."
  },
  {
    id: 124,
    question:
      "Une organisation passe d’une approche prédictive à agile pour tous ses projets. Que doit faire le chef de projet pour garantir la réalisation des bénéfices ?",
    options: [
      { label: "Évaluer les bénéfices en daily meeting", value: "A" },
      { label: "Aligner le plan de gestion des bénéfices avec le backlog produit", value: "B" },
      { label: "Évaluer les bénéfices en fin de sprint", value: "C" },
      { label: "Demander au Scrum Master un reporting quotidien", value: "D" }
    ],
    solution: "B",
    rationale:
      "Le backlog doit être priorisé selon la valeur métier afin de maximiser la réalisation des bénéfices."
  },
  {
    id: 125,
    question:
      "Des risques ont été identifiés et le sponsor souhaite en évaluer l’importance. Quelle analyse préparer ?",
    options: [
      { label: "Analyse qualitative des risques", value: "A" },
      { label: "Analyse quantitative des risques", value: "B" },
      { label: "Analyse Monte Carlo", value: "C" },
      { label: "Jugement d’expert", value: "D" }
    ],
    solution: "A",
    rationale:
      "L’analyse qualitative permet de prioriser les risques selon leur probabilité et leur impact."
  },
  {
    id: 126,
    question:
      "Un projet vise à améliorer la position d’un produit sur le marché. Quelle doit être la priorité lors de la définition des KPI ?",
    options: [
      { label: "Le développement individuel", value: "A" },
      { label: "Les besoins du client", value: "B" },
      { label: "Les objectifs du chef de projet", value: "C" },
      { label: "Les objectifs du sponsor", value: "D" }
    ],
    solution: "B",
    rationale:
      "La satisfaction du client est la priorité principale pour mesurer la performance d’un projet."
  },
  {
    id: 127,
    question:
      "Le chef de projet a identifié les parties prenantes. Quelle est la prochaine étape ?",
    options: [
      { label: "Rencontrer tous les stakeholders chaque semaine", value: "A" },
      { label: "Envoyer des mises à jour à tous", value: "B" },
      { label: "Analyser les parties prenantes et préparer le plan de communication", value: "C" },
      { label: "Copier les pratiques d’anciens projets", value: "D" }
    ],
    solution: "C",
    rationale:
      "Chaque partie prenante a des besoins de communication spécifiques qui doivent être analysés."
  },
  {
    id: 128,
    question:
      "Un stakeholder agit sur des informations non officielles. Après clarification, que doit faire le chef de projet ?",
    options: [
      { label: "Limiter les canaux de communication", value: "A" },
      { label: "Ajouter le stakeholder à la liste de diffusion", value: "B" },
      { label: "Revoir et mettre à jour le plan de communication", value: "C" },
      { label: "Modifier les rapports d’avancement", value: "D" }
    ],
    solution: "C",
    rationale:
      "Un plan de communication efficace évite la diffusion d’informations incorrectes."
  },
  {
    id: 129,
    question:
      "Un nouveau membre est frustré car il n’arrive pas à accomplir une tâche. Que doit faire le chef de projet en premier ?",
    options: [
      { label: "L’encourager à persévérer", value: "A" },
      { label: "Identifier la cause racine du problème", value: "B" },
      { label: "Prévoir une formation future", value: "C" },
      { label: "Adapter son style de leadership", value: "D" }
    ],
    solution: "B",
    rationale:
      "Comprendre la cause du problème est indispensable avant toute action corrective."
  },
  {
    id: 130,
    question:
      "Un membre modifie systématiquement le livrable d’un collègue. Que doit faire le chef de projet ?",
    options: [
      { label: "Comprendre la raison des modifications", value: "A" },
      { label: "Blâmer le collègue", value: "B" },
      { label: "Évaluer les performances avec les managers", value: "C" },
      { label: "Contrôler directement les livrables", value: "D" }
    ],
    solution: "A",
    rationale:
      "Comprendre la source du conflit est la première étape avant toute résolution."
  },
  {
    id: 131,
    question:
      "Un projet souffre de problèmes de communication dans une grande organisation. Que doit faire le chef de projet ?",
    options: [
      { label: "Appliquer strictement le plan de communication", value: "A" },
      { label: "Envoyer plus d’emails", value: "B" },
      { label: "Réunir les responsables d’équipe", value: "C" },
      { label: "S’appuyer uniquement sur la RACI", value: "D" }
    ],
    solution: "A",
    rationale:
      "Le plan de communication définit les canaux, la fréquence et le niveau d’information."
  },
  {
    id: 132,
    question:
      "Les parties prenantes sont dispersées géographiquement. Comment organiser le kickoff meeting ?",
    options: [
      { label: "Avec les parties disponibles uniquement", value: "A" },
      { label: "Reporter la réunion", value: "B" },
      { label: "Faire des réunions individuelles", value: "C" },
      { label: "Organiser une réunion de lancement virtuelle", value: "D" }
    ],
    solution: "D",
    rationale:
      "Une réunion virtuelle garantit l’alignement de tous les stakeholders."
  },
  {
    id: 133,
    question:
      "Un membre de l’équipe devient désengagé. Que doit faire le chef de projet ?",
    options: [
      { label: "Discuter avec lui et comprendre le problème", value: "A" },
      { label: "Le faire encadrer par un collègue", value: "B" },
      { label: "Réunir toute l’équipe", value: "C" },
      { label: "L’envoyer en formation", value: "D" }
    ],
    solution: "A",
    rationale:
      "L’empathie et la compréhension sont essentielles pour réengager un collaborateur."
  },
  {
    id: 134,
    question:
      "Quel élément confirme que les bénéfices du projet ont été atteints ?",
    options: [
      { label: "Le livrable est approuvé et la valeur est confirmée", value: "A" },
      { label: "Tous les problèmes ont été résolus", value: "B" },
      { label: "La prise de décision s’est améliorée", value: "C" },
      { label: "Le projet a respecté les délais", value: "D" }
    ],
    solution: "A",
    rationale:
      "La validation formelle de la valeur confirme la réalisation des bénéfices."
  },
  {
    id: 135,
    question:
      "Des stakeholders se plaignent de ne pas être préparés aux réunions. Que doit faire le chef de projet ?",
    options: [
      { label: "Envoyer les infos la veille", value: "A" },
      { label: "Partager l’ordre du jour à l’avance", value: "B" },
      { label: "Organiser des réunions séparées", value: "C" },
      { label: "Demander l’intervention du sponsor", value: "D" }
    ],
    solution: "B",
    rationale:
      "Un agenda partagé à l’avance permet une meilleure préparation et implication."
  },
  {
    id: 136,
    question:
      "Un fournisseur menace de ne pas livrer sans renégociation. Quelle est la première action ?",
    options: [
      { label: "Engager une action juridique", value: "A" },
      { label: "Chercher un autre fournisseur", value: "B" },
      { label: "Renégocier immédiatement", value: "C" },
      { label: "Activer le plan de réponse au risque", value: "D" }
    ],
    solution: "D",
    rationale:
      "Les réponses aux risques doivent suivre les plans définis."
  },
  {
    id: 137,
    question:
      "Un projet hybride risque l’obsolescence à cause d’un concurrent. Que faire ?",
    options: [
      { label: "Analyser l’impact et passer par le CCB", value: "B" },
      { label: "Continuer sans changement", value: "C" },
      { label: "Lancer un nouveau projet", value: "D" },
      { label: "Changer les ressources internes", value: "A" }
    ],
    solution: "B",
    rationale:
      "Les changements majeurs doivent être évalués et validés par le CCB."
  },
  {
    id: 138,
    question:
      "Un client demande de nouvelles fonctionnalités en cours d’itération agile. Que faire ?",
    options: [
      { label: "Refuser toute modification", value: "A" },
      { label: "Modifier l’itération en cours", value: "B" },
      { label: "Prioriser pour la prochaine itération", value: "C" },
      { label: "Reporter sans explication", value: "D" }
    ],
    solution: "C",
    rationale:
      "L’agilité permet le changement, mais sans perturber l’itération en cours."
  },
  {
    id: 139,
    question:
      "Une équipe se plaint des exigences de conformité. Quelle approche adopter ?",
    options: [
      { label: "Expliquer que la conformité crée de la valeur", value: "A" },
      { label: "Réduire la documentation", value: "B" },
      { label: "Faire des ateliers quotidiens", value: "C" },
      { label: "Inviter la conformité aux daily meetings", value: "D" }
    ],
    solution: "A",
    rationale:
      "La conformité fait partie intégrante du succès du projet et doit être comprise."
  },
  {
    id: 140,
    question:
      "Un chef de projet identifie qu’une ressource fournisseur peut être libérée plus tôt que prévu, mais le fournisseur s’y oppose. Que doit faire le chef de projet ?",
    options: [
      "Laisser le planning inchangé",
      "Confirmer le changement avec les parties prenantes",
      "Préparer la libération de la ressource",
      "Consulter les termes et conditions du contrat fournisseur"
    ],
    reponse: "Consulter les termes et conditions du contrat fournisseur"
  },
  {
    id: 141,
    question:
      "Comment un chef de projet peut-il s’assurer que les fournisseurs livrent des produits de qualité dans les délais ?",
    options: [
      "Ajouter les risques au registre des risques",
      "Effectuer régulièrement des revues de performance des fournisseurs",
      "Déléguer la gestion aux achats",
      "Revoir le plan de gestion des fournisseurs"
    ],
    reponse: "Effectuer régulièrement des revues de performance des fournisseurs"
  },
  {
    id: 142,
    question:
      "Un projet est menacé par une partie prenante influente non identifiée. Quelles actions auraient permis d’éviter cela ? (2 réponses)",
    options: [
      "Identifier les parties prenantes dès l’initiation",
      "Compter uniquement sur le sponsor",
      "Identifier et analyser les parties prenantes tout au long du projet",
      "Attendre que la partie prenante se manifeste",
      "Ignorer certaines préoccupations"
    ],
    reponse: [
      "Identifier les parties prenantes dès l’initiation",
      "Identifier et analyser les parties prenantes tout au long du projet"
    ]
  },
  {
    id: 143,
    question:
      "Dans un projet agile, comment gérer les exigences de santé et de sécurité ?",
    options: [
      "Fournir une documentation au client",
      "Envoyer le problème au service HSE",
      "Créer une politique organisationnelle",
      "Intégrer les exigences dans la Definition of Done"
    ],
    reponse: "Intégrer les exigences dans la Definition of Done"
  },
  {
    id: 144,
    question:
      "Des exigences floues risquent d’impacter l’échéance d’un projet agile. Quelle approche adopter ?",
    options: [
      "Livrer de manière itérative et prioriser les exigences",
      "Créer une demande de changement",
      "Escalader immédiatement",
      "Demander au Scrum Master de clarifier"
    ],
    reponse: "Livrer de manière itérative et prioriser les exigences"
  },
  {
    id: 145,
    question:
      "Un acteur clé est mécontent car il n’a pas participé à la dernière revue. Que fallait-il faire ?",
    options: [
      "Attendre l’approbation de tous",
      "Rendre les informations projet accessibles à tous",
      "Rencontrer chaque partie prenante individuellement",
      "Planifier uniquement quand tout le monde est disponible"
    ],
    reponse: "Rendre les informations projet accessibles à tous"
  },
  {
    id: 146,
    question:
      "Comment s’assurer que la valeur est délivrée à chaque phase d’un projet livré par étapes ?",
    options: [
      "Réaliser des enquêtes utilisateurs",
      "Contrôler les coûts",
      "Valider le périmètre",
      "Suivre les bénéfices via le plan de gestion des bénéfices"
    ],
    reponse: "Suivre les bénéfices via le plan de gestion des bénéfices"
  },
  {
    id: 147,
    question:
      "Des régulateurs refusent un système pour non-conformité. Comment éviter cette situation ?",
    options: [
      "Consulter les leçons apprises",
      "Informer les parties prenantes",
      "Assurer la conformité aux exigences des parties prenantes",
      "Mettre à jour le plan d’engagement"
    ],
    reponse: "Assurer la conformité aux exigences des parties prenantes"
  },
  {
    id: 148,
    question:
      "Un membre d’équipe se plaint de sa charge de travail. Quelle est la première action à mener ?",
    options: [
      "Expliquer les contraintes du projet",
      "Écouter et comprendre son point de vue",
      "Réduire immédiatement sa charge",
      "Fournir plus de soutien"
    ],
    reponse: "Écouter et comprendre son point de vue"
  },
  {
    id: 149,
    question:
      "À quel moment faut-il engager les parties prenantes dans un projet agile ?",
    options: [
      "Au début",
      "À la fin",
      "Uniquement en cas de problème",
      "Tout au long du cycle de vie"
    ],
    reponse: "Tout au long du cycle de vie"
  },
  {
    id: 150,
    question:
      "Deux membres d’une équipe Scrum sont en conflit et cela impacte le sprint. Que doit faire le chef de projet ?",
    options: [
      "Organiser des réunions séparées",
      "Analyser l’impact du conflit",
      "Les aider à collaborer pour résoudre le problème",
      "Attendre la rétrospective"
    ],
    reponse: "Les aider à collaborer pour résoudre le problème"
  },
  {
    id: 151,
    question:
      "Le sponsor demande un rapport sur les retards potentiels d’un projet. Quel outil utiliser ?",
    options: [
      "Analyse de tendance",
      "Analyse des causes racines",
      "Rapports qualité",
      "Liste des jalons"
    ],
    reponse: "Analyse de tendance"
  },
  {
    id: 152,
    question:
      "Comment gérer efficacement le registre des risques dans un projet agile ?",
    options: [
      "Les revoir uniquement en rétrospective",
      "Les discuter en daily scrum",
      "Mettre à jour et revoir régulièrement le registre des risques",
      "Éliminer tous les risques"
    ],
    reponse: "Mettre à jour et revoir régulièrement le registre des risques"
  },
  {
    id: 153,
    question:
      "Un projet est en retard. Quelles actions permettent d’accélérer le planning ? (2 réponses)",
    options: [
      "Créer une nouvelle ligne de base",
      "Revoir le processus de changement",
      "Ajouter des ressources sur le chemin critique",
      "Analyser les réserves de risques",
      "Exécuter des tâches en parallèle"
    ],
    reponse: [
      "Ajouter des ressources sur le chemin critique",
      "Exécuter des tâches en parallèle"
    ]
  },
  {
    id: 154,
    question:
      "Un contrat en régie cause des dépassements de coûts. Quelle action est la plus appropriée ?",
    options: [
      "Lancer un nouvel appel d’offres",
      "Passer à un contrat cadre avec annexes",
      "Consulter les leçons apprises",
      "Passer à un contrat à prix fixe"
    ],
    reponse: "Passer à un contrat cadre avec annexes"
  },
  {
    id: 155,
    question:
      "Une équipe distribuée souffre de latence de communication. Quelle solution adopter ?",
    options: [
      "Augmenter les daily meetings",
      "Recruter localement",
      "Créer une fishbowl window",
      "Réduire la communication"
    ],
    reponse: "Créer une fishbowl window"
  },
  {
    id: 156,
    question:
      "Des exigences d’un département clé sont absentes du plan projet. Que fallait-il faire ?",
    options: [
      "Gérer les attentes",
      "Consulter un expert",
      "Impliquer les parties prenantes dans la planification",
      "Créer un plan de changement"
    ],
    reponse: "Impliquer les parties prenantes dans la planification"
  },
  {
    id: 157,
    question:
      "Un membre d’équipe travaille pour son manager fonctionnel au lieu du projet. Que faire ?",
    options: [
      "Discuter avec le manager fonctionnel",
      "Exclure le membre de l’équipe",
      "Sanctionner le membre",
      "Ignorer la situation"
    ],
    reponse: "Discuter avec le manager fonctionnel"
  },
  {
    id: 158,
    question:
      "Un goulot d’étranglement récurrent est causé par un expert externe. Quelle est la première action ?",
    options: [
      "Allonger la durée du sprint",
      "Former l’équipe en interne",
      "Ajouter un autre expert externe",
      "Supprimer les revues"
    ],
    reponse: "Former l’équipe en interne"
  },
  {
    id: 159,
    question:
      "Un projet a un SPI de 0,8 et un CPI de 0,9. Quelles actions permettent d’accélérer le projet ? (2 réponses)",
    options: [
      "Optimiser les procédures de travail",
      "Modifier le chemin critique",
      "Ajouter des ressources",
      "Réaliser des tâches en parallèle",
      "Imposer des heures supplémentaires"
    ],
    reponse: [
      "Optimiser les procédures de travail",
      "Réaliser des tâches en parallèle"
    ]
  },
  {
    id: 160,
    question:
      "Une équipe projet agile a du mal à suivre les changements appliqués au produit car le processus est lourd et sujet aux erreurs. Que doit faire le chef de projet ?",
    options: [
      { key: "A", text: "Attribuer clairement la responsabilité du processus à une seule personne." },
      { key: "B", text: "Utiliser la prochaine rétrospective pour évaluer l’efficacité du processus." },
      { key: "C", text: "Demander au sponsor l’autorisation d’abandonner le processus." },
      { key: "D", text: "Obtenir des fonds pour acheter un outil logiciel." },
    ],
    bonneReponse: "B",
    explication:
      "La rétrospective permet à l’équipe d’analyser le processus, d’identifier les causes du problème et de mettre en œuvre une amélioration continue sans agir prématurément.",
  },

  {
    id: 161,
    question:
      "Une entreprise habituée aux méthodes prédictives souhaite introduire des initiatives itératives. Comment le chef de projet doit-il sensibiliser l’organisation à l’approche hybride ?",
    options: [
      { key: "A", text: "Définir les rôles et responsabilités avec l’équipe projet." },
      { key: "B", text: "Construire un planning itératif et le communiquer." },
      { key: "C", text: "Inviter les parties prenantes aux daily stand-ups." },
      { key: "D", text: "Recommander une formation aux méthodes itératives pour les managers seniors." },
    ],
    bonneReponse: "D",
    explication:
      "Former les managers seniors permet d’ancrer la compréhension et l’adhésion au niveau stratégique de l’organisation.",
  },

  {
    id: 162,
    question:
      "Une équipe projet est composée de membres ayant déjà travaillé ensemble. L’un d’eux remet souvent en cause les procédures. Que doit faire le chef de projet en premier ?",
    options: [
      { key: "A", text: "Revoir les actifs organisationnels et établir des règles de fonctionnement." },
      { key: "B", text: "Demander au sponsor de définir les règles." },
      { key: "C", text: "Demander le remplacement du membre concerné." },
      { key: "D", text: "Réunir l’équipe pour revoir le plan de management du projet." },
    ],
    bonneReponse: "A",
    explication:
      "Les actifs organisationnels (OPA) fournissent un cadre clair. Établir des règles communes dès le départ favorise une initiation fluide du projet.",
  },

  {
    id: 163,
    question:
      "Un membre senior d’une équipe agile assiste rarement aux réunions et demande ensuite des comptes rendus. Que doit faire le chef de projet ?",
    options: [
      { key: "A", text: "Demander son retrait du projet." },
      { key: "B", text: "Lui rappeler le respect de l’accord de fonctionnement de l’équipe." },
      { key: "C", text: "Faire remonter le problème à la direction." },
      { key: "D", text: "Demander aux autres membres de couvrir ses tâches." },
    ],
    bonneReponse: "B",
    explication:
      "La première action consiste à rappeler les règles définies par l’équipe avant toute escalade.",
  },

  {
    id: 164,
    question:
      "Un chef de projet doit estimer une durée réaliste pour un projet complexe soumis à une forte pression des parties prenantes. Que doit-il faire ?",
    options: [
      { key: "A", text: "Confirmer les attentes des parties prenantes." },
      { key: "B", text: "Estimer la durée de chaque tâche du projet." },
      { key: "C", text: "Analyser les benchmarks du secteur." },
      { key: "D", text: "Demander un plan de livraison détaillé." },
    ],
    bonneReponse: "B",
    explication:
      "L’estimation des durées des tâches permet de produire un calendrier réaliste et fiable.",
  },

  {
    id: 165,
    question:
      "80 % des ressources d’un projet sont concentrées sur le dernier mois. Que doit faire le chef de projet ?",
    options: [
      { key: "A", text: "Accélérer les activités par fast-tracking." },
      { key: "B", text: "Libérer certaines ressources pour d’autres projets." },
      { key: "C", text: "Proposer un nivellement intégré des ressources." },
      { key: "D", text: "Continuer selon le plan initial." },
    ],
    bonneReponse: "C",
    explication:
      "Le nivellement intégré des ressources permet d’équilibrer la charge entre plusieurs projets.",
  },

  {
    id: 166,
    question:
      "Une livraison critique venant de l’étranger est retardée et impacte le chemin critique. Quelle est la première action du chef de projet ?",
    options: [
      { key: "A", text: "Mettre à jour les leçons apprises." },
      { key: "B", text: "Réviser le planning et informer les parties prenantes." },
      { key: "C", text: "Enregistrer le problème dans le registre des problèmes et définir un plan d’action." },
      { key: "D", text: "Identifier les responsables et appliquer des pénalités." },
    ],
    bonneReponse: "C",
    explication:
      "Le registre des problèmes permet un suivi structuré et une réponse immédiate.",
  },

  {
    id: 167,
    question:
      "Après la première itération d’un projet agile, le livrable n’est pas aligné avec les objectifs. Que doit faire le chef de projet ?",
    options: [
      { key: "A", text: "Organiser une réunion avec les parties prenantes." },
      { key: "B", text: "Demander au Product Owner de revoir le backlog." },
      { key: "C", text: "Demander aux parties prenantes de prioriser leurs besoins." },
      { key: "D", text: "Demander au sponsor de fixer les priorités." },
    ],
    bonneReponse: "B",
    explication:
      "Le Product Owner est responsable de l’alignement du backlog avec les objectifs du projet.",
  },

  {
    id: 168,
    question:
      "Un projet adopte l’agilité et souhaite une définition du périmètre moins formelle. Que doit faire le chef de projet en premier ?",
    options: [
      { key: "A", text: "Analyser les risques et livrables." },
      { key: "B", text: "Organiser un atelier backlog avec le Product Owner et l’équipe." },
      { key: "C", text: "Créer un site de communication." },
      { key: "D", text: "Identifier les exigences obligatoires." },
    ],
    bonneReponse: "B",
    explication:
      "Le backlog produit et les critères d’acceptation sont centraux en environnement agile.",
  },

  {
    id: 169,
    question:
      "Un intervenant clé exige un changement en début de sprint. Quelle est la meilleure action ?",
    options: [
      { key: "A", text: "Discuter du changement au daily scrum." },
      { key: "B", text: "Modifier immédiatement le backlog." },
      { key: "C", text: "Planifier une réunion avec le Product Owner et la partie prenante." },
      { key: "D", text: "Annuler le sprint en cours." },
    ],
    bonneReponse: "C",
    explication:
      "Le Product Owner est le seul habilité à gérer le backlog et les priorités.",
  },
  {
    id: 170,
    question:
      "Une équipe projet agile a du mal à suivre les changements appliqués au produit car le processus est lourd et sujet aux erreurs. Que doit faire le chef de projet ?",
    options: [
      { key: "A", text: "Attribuer clairement la responsabilité du processus à une seule personne." },
      { key: "B", text: "Utiliser la prochaine rétrospective pour évaluer l’efficacité du processus." },
      { key: "C", text: "Demander au sponsor l’autorisation d’abandonner le processus." },
      { key: "D", text: "Obtenir des fonds pour acheter un outil logiciel." },
    ],
    bonneReponse: "B",
    explication:
      "La rétrospective permet à l’équipe d’analyser le processus, d’identifier les causes du problème et de mettre en œuvre une amélioration continue sans agir prématurément.",
  },

  {
    id: 171,
    question:
      "Une entreprise habituée aux méthodes prédictives souhaite introduire des initiatives itératives. Comment le chef de projet doit-il sensibiliser l’organisation à l’approche hybride ?",
    options: [
      { key: "A", text: "Définir les rôles et responsabilités avec l’équipe projet." },
      { key: "B", text: "Construire un planning itératif et le communiquer." },
      { key: "C", text: "Inviter les parties prenantes aux daily stand-ups." },
      { key: "D", text: "Recommander une formation aux méthodes itératives pour les managers seniors." },
    ],
    bonneReponse: "D",
    explication:
      "Former les managers seniors permet d’ancrer la compréhension et l’adhésion au niveau stratégique de l’organisation.",
  },

  {
    id: 172,
    question:
      "Une équipe projet est composée de membres ayant déjà travaillé ensemble. L’un d’eux remet souvent en cause les procédures. Que doit faire le chef de projet en premier ?",
    options: [
      { key: "A", text: "Revoir les actifs organisationnels et établir des règles de fonctionnement." },
      { key: "B", text: "Demander au sponsor de définir les règles." },
      { key: "C", text: "Demander le remplacement du membre concerné." },
      { key: "D", text: "Réunir l’équipe pour revoir le plan de management du projet." },
    ],
    bonneReponse: "A",
    explication:
      "Les actifs organisationnels (OPA) fournissent un cadre clair. Établir des règles communes dès le départ favorise une initiation fluide du projet.",
  },

  {
    id: 173,
    question:
      "Un membre senior d’une équipe agile assiste rarement aux réunions et demande ensuite des comptes rendus. Que doit faire le chef de projet ?",
    options: [
      { key: "A", text: "Demander son retrait du projet." },
      { key: "B", text: "Lui rappeler le respect de l’accord de fonctionnement de l’équipe." },
      { key: "C", text: "Faire remonter le problème à la direction." },
      { key: "D", text: "Demander aux autres membres de couvrir ses tâches." },
    ],
    bonneReponse: "B",
    explication:
      "La première action consiste à rappeler les règles définies par l’équipe avant toute escalade.",
  },
  {
    id: 174,
    question:
      "Un chef de projet doit estimer une durée réaliste pour un projet complexe soumis à une forte pression des parties prenantes. Que doit-il faire ?",
    options: [
      { key: "A", text: "Confirmer les attentes des parties prenantes." },
      { key: "B", text: "Estimer la durée de chaque tâche du projet." },
      { key: "C", text: "Analyser les benchmarks du secteur." },
      { key: "D", text: "Demander un plan de livraison détaillé." },
    ],
    bonneReponse: "B",
    explication:
      "L’estimation des durées des tâches permet de produire un calendrier réaliste et fiable.",
  },
  {
    id: 175,
    question:
      "80 % des ressources d’un projet sont concentrées sur le dernier mois. Que doit faire le chef de projet ?",
    options: [
      { key: "A", text: "Accélérer les activités par fast-tracking." },
      { key: "B", text: "Libérer certaines ressources pour d’autres projets." },
      { key: "C", text: "Proposer un nivellement intégré des ressources." },
      { key: "D", text: "Continuer selon le plan initial." },
    ],
    bonneReponse: "C",
    explication:
      "Le nivellement intégré des ressources permet d’équilibrer la charge entre plusieurs projets.",
  },

];
