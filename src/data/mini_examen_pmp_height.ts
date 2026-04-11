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
    question: "Une organisation a mis en place l'agilité pour ses projets récents, mais tous les projets agiles récents ont manqué leurs jalons de livraison. Les sponsors ajoutent régulièrement de nouvelles demandes. Un chef de projet reçoit un nouveau projet agile avec un objectif vague et aucune définition claire de terminé (DoD). Que doit faire le chef de projet ?",
    options: [
      "A. Organiser une réunion avec les parties prenantes pour clarifier le plan de communication.",
      "B. S'assurer que le sponsor permette à l'équipe d'inclure les ressources techniques les plus compétentes pour garantir le succès du projet.",
      "C. Travailler en étroite collaboration avec l'équipe pour développer et définir clairement la vision du projet.",
      "D. Travailler avec les parties prenantes pour clarifier la charte du projet et les livrables."
    ],
    solution: "C. Travailler en étroite collaboration avec l'équipe pour développer et définir clairement la vision du projet.",
    explication: "Le chef de projet doit collaborer avec l'équipe pour définir clairement la vision du projet et la DoD pour chaque élément du backlog afin que tous travaillent vers le même objectif."
  },
  {
    id: 2,
    question: "Un chef de projet gère un projet agile important. Lors du lancement, il définit les politiques et procédures à suivre. À mi-projet, certains membres ne suivent pas ces procédures. Que doit faire le chef de projet ?",
    options: [
      "A. Travailler avec le service juridique pour faire signer un document aux membres de l'équipe.",
      "B. Remplacer les membres qui ne suivent pas les procédures.",
      "C. Réunir l'équipe pour revoir les politiques et insister sur leur importance.",
      "D. Mettre en place un programme d'incitation pour ceux qui respectent les règles."
    ],
    solution: "C. Réunir l'équipe pour revoir les politiques et insister sur leur importance.",
    explication: "Le chef de projet doit être un leader serviteur et rappeler les règles à l'équipe. Demander des signatures ou remplacer des membres démotive l'équipe, et un programme d'incitation n'est pas nécessaire."
  },
  {
    id: 3,
    question: "Deux équipes agiles collaborent sur un projet. Les livrables de l'équipe A ne sont pas assez complets pour que l'équipe B les intègre. Selon le leadership serviteur, comment le chef de projet doit-il résoudre cette situation ?",
    options: [
      "A. Aider l'équipe A à résoudre le problème, et laisser l'équipe A décider comment implémenter la solution.",
      "B. L'équipe B soumet une demande de changement à l'équipe A, et l'équipe A valide.",
      "C. L'équipe B décide comment l'équipe A implémente le changement, le chef de projet supervise.",
      "D. Le chef de projet décide comment l'équipe A implémente le changement et définit les critères d'acceptation."
    ],
    solution: "A. Aider l'équipe A à résoudre le problème, et laisser l'équipe A décider comment implémenter la solution.",
    explication: "Le leader serviteur aide à résoudre les blocages mais laisse les équipes décider comment mettre en œuvre la solution pour encourager l'auto-organisation."
  },
  {
    id: 4,
    question: "Un client envoie un e-mail exprimant des réserves sur les livrables. Comment le chef de projet doit-il réagir ?",
    options: [
      "A. Rencontrer le client pour discuter de la portée du projet.",
      "B. Noter les réserves dans le registre des risques et préparer un plan d'atténuation.",
      "C. Prévoir du temps supplémentaire pour discuter des réserves lors de la remise des livrables.",
      "D. Organiser une réunion avec le product owner et le client pour discuter des critères de livrable acceptable."
    ],
    solution: "D. Organiser une réunion avec le product owner et le client pour discuter des critères de livrable acceptable.",
    explication: "Le product owner doit travailler avec le client pour définir les critères d'acceptation afin d'aligner les attentes sur les livrables."
  },
  {
    id: 5,
    question: "Un chef de projet a perdu un membre clé il y a deux mois, le projet a manqué plusieurs jalons et est maintenant critique. Que devrait-il avoir fait pour éviter cette situation ?",
    options: [
      "A. Remplacer le membre clé par un plus expérimenté.",
      "B. Réaffecter les tâches du membre clé à d'autres membres.",
      "C. Motiver l'équipe à respecter les jalons.",
      "D. Identifier les risques tôt et développer un plan d'atténuation."
    ],
    solution: "D. Identifier les risques tôt et développer un plan d'atténuation.",
    explication: "Le chef de projet aurait dû anticiper la perte d'un membre clé et planifier des mesures d'atténuation. Les autres options ne résolvent pas le problème fondamental."
  },
  {
    id: 6,
    question: "Quel est le facteur clé que le leadership serviteur vise à établir pour améliorer la performance de l'équipe ?",
    options: ["A. Confiance", "B. Concentration", "C. Rapidité", "D. Précision"],
    solution: "A. Confiance",
    explication: "Les leaders serviteurs développent la confiance pour renforcer la collaboration et la sécurité de l'équipe."
  },
  {
    id: 7,
    question: "Dans un projet agile utilisant Kanban, le tableau Kanban agit comme un radiateur d'information. Comment est considéré ce type de technologie ?",
    options: [
      "A. Low-tech, high-touch",
      "B. Outil utilisé dans le PDCA",
      "C. Utilisé pour montrer le travail effectué",
      "D. Tableau pour les estimations en points d'histoire"
    ],
    solution: "A. Low-tech, high-touch",
    explication: "Le tableau Kanban fournit des informations à jour de manière simple et visuelle, accessible à tous."
  },
  {
    id: 8,
    question: "Un sponsor demande de réduire ou supprimer les rétrospectives. Quel pourrait être le résultat ?",
    options: [
      "A. L'accent se déplace sur la discussion des problèmes plutôt que sur l'amélioration future",
      "B. L'opportunité d'améliorer les processus basée sur les observations est manquée",
      "C. L'accent est mis sur les observations des parties prenantes",
      "D. Le plan de gestion du temps n'est pas mis à jour"
    ],
    solution: "A. L'accent se déplace sur la discussion des problèmes plutôt que sur l'amélioration future",
    explication: "Réduire les rétrospectives empêche l'équipe d'apprendre et de s'améliorer pour les prochains projets."
  },
  {
    id: 9,
    question: "Un projet agile est repris par un nouveau chef de projet et un stakeholder plus expérimenté est intégré. Quelle est la prochaine étape du chef de projet actuel ?",
    options: [
      "A. Recommander au nouveau stakeholder de rencontrer le product owner.",
      "B. Clarifier les attentes du nouveau stakeholder et mettre à jour le plan d'engagement.",
      "C. Rencontrer le nouveau stakeholder et informer les autres parties prenantes des modifications proposées.",
      "D. S'assurer que le stakeholder assiste à tous les sprints et mettre à jour le plan."
    ],
    solution: "B. Clarifier les attentes du nouveau stakeholder et mettre à jour le plan d'engagement.",
    explication: "Une transition réussie nécessite de comprendre les besoins du nouveau stakeholder et de mettre à jour le plan d'engagement."
  },
  {
    id: 10,
    question: "Lors d'un standup, un membre propose une modification pour saisir une opportunité, mais un autre s'inquiète de l'expérience utilisateur. Que doit faire le chef de projet ?",
    options: [
      "A. Rencontrer le product owner pour discuter de l'opportunité et des préoccupations.",
      "B. Faire voter l'équipe sur la modification.",
      "C. Noter l'opportunité dans le backlog et en discuter lors de la prochaine réunion.",
      "D. Réunir parties prenantes et équipe pour décider."
    ],
    solution: "A. Rencontrer le product owner pour discuter de l'opportunité et des préoccupations.",
    explication: "Le product owner est responsable des décisions produit et doit arbitrer entre opportunité et expérience utilisateur."
  },
  {
    id: 11,
    question: "Lors d'un sprint, l'équipe rencontre des complexités techniques imprévues. Quelle action est la plus appropriée ?",
    options: [
      "A. Demander des ressources supplémentaires.",
      "B. Analyser avec l'équipe la cause des problèmes et demander au product owner d'ajuster le backlog.",
      "C. Demander au sponsor de prolonger le sprint.",
      "D. Rencontrer le client pour demander une extension du délai."
    ],
    solution: "B. Analyser avec l'équipe la cause des problèmes et demander au product owner d'ajuster le backlog.",
    explication: "Il est essentiel de comprendre les causes profondes et de réajuster le backlog pour maintenir la valeur et l'adaptation."
  },
  {
    id: 12,
    question: "Le PMO passe de Waterfall à Agile. Les exécutifs rencontrent des difficultés à adopter le nouveau processus. Que doit faire le chef de projet ?",
    options: [
      "A. Inviter les exécutifs aux standups.",
      "B. Former les exécutifs aux pratiques agiles.",
      "C. Informer le PMO d'utiliser Waterfall.",
      "D. Remplacer les stakeholders par les exécutifs."
    ],
    solution: "B. Former les exécutifs aux pratiques agiles.",
    explication: "Les exécutifs doivent comprendre l'agilité et suivre une formation pour soutenir correctement les projets."
  },
  {
    id: 13,
    question: "Lors d'une réunion, l'équipe discute des dépendances externes. Que doit demander le chef de projet à l'équipe ?",
    options: [
      "A. Lister les produits concurrents et les copier.",
      "B. Lister toutes les dépendances externes et évaluer leur impact.",
      "C. Lister l'impact d'un nouveau concurrent.",
      "D. Se concentrer uniquement sur leur travail assigné."
    ],
    solution: "B. Lister toutes les dépendances externes et évaluer leur impact.",
    explication: "Il est essentiel d'identifier les dépendances externes (lois, régulations, influences politiques) pour évaluer les risques sur les livrables."
  },
  {
    id: 14,
    question: "Un projet est approuvé avec un budget limité. Le product owner craint que cela impacte le projet. Que doit prioriser le chef de projet ?",
    options: [
      "A. Surveiller le budget et démontrer la valeur du projet.",
      "B. Demander une augmentation du budget au sponsor.",
      "C. Supprimer les livrables secondaires et surveiller le budget par itération.",
      "D. Demander des fonds supplémentaires pour l'année suivante."
    ],
    solution: "A. Surveiller le budget et démontrer la valeur du projet.",
    explication: "Avec un budget limité, la priorité est le suivi proactif et la communication de la valeur, tout en respectant les contraintes."
  },
  {
    id: 15,
    question: "Un chef de projet remarque que certains membres expérimentés vérifient trop de détails et des juniors prennent trop de temps. Que doit-il faire ?",
    options: [
      "A. Identifier les lacunes de connaissances et proposer des formations.",
      "B. Noter le problème dans le registre des risques.",
      "C. Informer le sponsor que le livrable sera retardé.",
      "D. Demander aux ressources humaines de corriger."
    ],
    solution: "A. Identifier les lacunes de connaissances et proposer des formations.",
    explication: "L'amélioration des compétences individuelles par la formation est la meilleure façon d'améliorer la performance globale de l'équipe."
  },
  {
    id: 16,
    question: "Un sponsor demande d'élargir le scope pour livrer une version 'évoluée' du produit. Que doit faire le chef de projet ?",
    options: [
      "A. Demander une confirmation formelle.",
      "B. Obtenir l'approbation du stakeholder pour réviser le budget.",
      "C. Lancer le processus de contrôle intégré des changements.",
      "D. Mettre à jour le plan de gestion de projet."
    ],
    solution: "C. Lancer le processus de contrôle intégré des changements.",
    explication: "Tout changement de scope peut affecter le plan projet. Il est essentiel de suivre le processus intégré pour évaluer l'impact sur planning, coûts et périmètre."
  },
  {
    id: 17,
    question: "Une équipe met en œuvre un changement approuvé par le CCB, mais il a eu l'effet inverse. Que devait faire le chef de projet ?",
    options: [
      "A. Confirmer l'efficacité de la réponse au risque et suivre l'avancement.",
      "B. Mettre à jour le registre des hypothèses.",
      "C. Effectuer une analyse des risques pour quantifier l'exposition.",
      "D. Développer une matrice probabilité/impact."
    ],
    solution: "A. Confirmer l'efficacité de la réponse au risque et suivre l'avancement.",
    explication: "Le suivi des risques et des réponses est crucial pour vérifier leur efficacité et éviter des impacts négatifs."
  },
  {
    id: 18,
    question: "Un fournisseur livre un outil en retard. Le chef de projet commande à un autre fournisseur. Le fournisseur initial livre finalement et envoie une facture. Que doit faire le chef de projet ?",
    options: [
      "A. Retourner l'outil et refuser de payer.",
      "B. Conserver l'outil, payer avec la réserve et noter les leçons apprises.",
      "C. Consulter le contrat pour appliquer les termes de retard et informer le service juridique.",
      "D. Comparer les outils et choisir le meilleur."
    ],
    solution: "C. Consulter le contrat pour appliquer les termes de retard et informer le service juridique.",
    explication: "Le contrat définit les livrables et pénalités. Il est important de respecter le cadre légal avant toute action."
  },
  {
    id: 19,
    question: "Un manager fonctionnel questionne la conformité d'un projet avec ses objectifs. Quel document le chef de projet doit-il consulter ?",
    options: [
      "A. Statement of Work (SOW)",
      "B. Charte du projet",
      "C. Plan de management du projet",
      "D. PMIS"
    ],
    solution: "B. Charte du projet",
    explication: "La charte autorise officiellement le projet, définit les objectifs et contraintes, et donne au chef de projet l'autorité d'utiliser les ressources."
  },
  {
    id: 20,
    question: "Lors d'un sprint, l'équipe rencontre des complexités techniques imprévues. Quelle action est la plus appropriée ?",
    options: [
      "A. Demander des ressources supplémentaires.",
      "B. Analyser avec l'équipe la cause des problèmes et demander au product owner d'ajuster le backlog.",
      "C. Demander au sponsor de prolonger le sprint.",
      "D. Rencontrer le client pour demander une extension du délai."
    ],
    solution: "B. Analyser avec l'équipe la cause des problèmes et demander au product owner d'ajuster le backlog.",
    explication: "Il est essentiel de comprendre les causes profondes et de réajuster le backlog pour maintenir la valeur et l'adaptation."
  },
  {
    id: 21,
    question: "Un chef de projet est préoccupé par le fait que les membres de l'équipe passent trop de temps à assister le personnel des opérations et de maintenance avec un composant de projet récemment livré. Le chef de projet a consulté les documents sur les actifs des processus organisationnels pour valider que le composant a été signé et transféré.\n\nÀ quels autres documents le chef de projet devrait-il se référer ?",
    options: [
      "A. Déclaration de travail (SOW) et rapport de performance du travail",
      "B. Plan de gestion des exigences et plan de gestion des changements",
      "C. Plan de gestion des approvisionnements et charte de projet",
      "D. Rapport final et mises à jour des documents du projet",
    ],
    solution: "D. Rapport final et mises à jour des documents du projet",
    explication: "Lors de la clôture du projet, le chef de projet examine le plan de gestion du projet pour s'assurer que tout le travail est terminé et que le projet a atteint ses objectifs. Les documents du projet sont mis à jour en conséquence. Les autres documents comme le SOW, le rapport de performance, le plan de gestion des exigences, le plan de gestion des changements, le plan de gestion des approvisionnements ou la charte de projet sont des livrables utilisés plus tôt dans le projet et non lors de la clôture.",
  },
  {
    id: 22,
    question: "Un responsable d'équipe de projet rencontre le chef de projet avant une réunion de lancement prévue. Le responsable est préoccupé par le fait que les attentes concernant les livrables du projet pourraient ne pas être réalistes.\n\nQue devrait faire le chef de projet ?",
    options: [
      "A. Examiner le business case du projet et les résultats de l'étude de faisabilité",
      "B. Faciliter une réunion entre le sponsor du projet et le responsable pour discuter des préoccupations",
      "C. Rencontrer les parties prenantes pour discuter des préoccupations et enregistrer leurs conclusions dans le plan d'engagement des parties prenantes",
      "D. Identifier les risques et les réponses convenues et modifier le registre des risques en conséquence"
    ],
    solution: "A. Examiner le business case du projet et les résultats de l'étude de faisabilité",
    explication: "Pour s'assurer que les livrables sont réalistes, le chef de projet doit examiner l'étude de faisabilité et évaluer les résultats. Les objectifs du projet seront définis dans le business case. Cette analyse permet de décider si le projet peut être lancé ou non. Les autres options ne garantissent pas la faisabilité initiale avant de discuter avec le sponsor ou les parties prenantes.",
  },
  {
    id: 23,
    question: "Un projet est en phase d'exécution lorsque le chef de projet constate que les informations n'ont pas été envoyées aux parties prenantes avec le niveau de détail attendu.\n\nQuelle est la conséquence la plus probable d'une communication insuffisante avec les parties prenantes ?",
    options: [
      "A. Diminution de la confiance dans le projet",
      "B. Augmentation des coûts du projet",
      "C. Diminution de la qualité du projet",
      "D. Retard dans le calendrier du projet"
    ],
    solution: "A. Diminution de la confiance dans le projet",
    explication: "La conséquence la plus probable d'une mauvaise communication est que les parties prenantes perdent confiance dans le chef de projet et la capacité du projet à réussir. Les autres conséquences sont possibles mais moins directes.",
  },
  {
    id: 24,
    question: "Une ressource experte évite des missions incluant un sous-traitant étranger. Comment le chef de projet devrait-il gérer cette situation ?",
    options: [
      "A. Questionner l'expert en privé sur sa réticence ou ses préjugés et insister sur une attitude inclusive",
      "B. Émettre un avertissement disciplinaire et conseiller au responsable fonctionnel de l'envoyer à une formation sur la diversité",
      "C. Prévenir les retards et conflits en embauchant un consultant avec lequel l'expert est d'accord",
      "D. Réprimander l'expert lors d'une réunion d'équipe pour donner l'exemple"
    ],
    solution: "A. Questionner l'expert en privé sur sa réticence ou ses préjugés et insister sur une attitude inclusive",
    explication: "Le chef de projet doit comprendre la raison pour laquelle la ressource évite l'affectation avant d'entamer toute action disciplinaire ou de remplacement.",
  },
  {
    id: 25,
    question: "Lors d'une revue périodique, le sponsor demande comment le projet mesurera la satisfaction des livrables et comment ces mesures sont appliquées.\n\nOù le chef de projet peut-il trouver cette information ?",
    options: [
      "A. Plan de gestion du périmètre",
      "B. Plan de gestion des exigences",
      "C. Plan de gestion de la qualité",
      "D. Rapports de performance du travail"
    ],
    solution: "B. Plan de gestion des exigences",
    explication: "Le plan de gestion des exigences décrit comment les exigences seront analysées, documentées et gérées, ce qui inclut la façon dont la satisfaction des livrables est mesurée. Les autres documents ne traitent pas directement de cette question.",
  },
  {
    id: 26,
    question: "Après avoir terminé un contrat à long terme, le chef de projet confirme avec le responsable de la livraison que toutes les fonctionnalités prévues fonctionnent correctement. Le chef de projet informe le client et obtient l'approbation pour clôturer le projet.\n\nQue doit faire le chef de projet pour que les connaissances acquises soient disponibles pour l'avenir ?",
    options: [
      "A. Mettre à jour la base de connaissances des leçons apprises",
      "B. Mettre à jour le registre des risques avant d'informer l'équipe",
      "C. Mettre à jour et archiver le dossier final des approvisionnements",
      "D. Clore la documentation d'évaluation des fournisseurs"
    ],
    solution: "A. Mettre à jour la base de connaissances des leçons apprises",
    explication: "Lors de la clôture, les leçons apprises et connaissances acquises doivent être transférées dans le référentiel pour les projets futurs. Les autres actions concernent la gestion des risques ou des approvisionnements, mais pas la transmission des connaissances.",
  },
  {
    id: 27,
    question: "Un partie prenante clé demande un changement pour résoudre un problème critique. Le projet est presque terminé et le changement augmenterait le coût et retarderait la livraison.\n\nQue doit faire le chef de projet ?",
    options: [
      "A. Confier la décision à une partie prenante plus expérimentée",
      "B. Soumettre une demande de changement au comité de contrôle des changements (CCB)",
      "C. Réviser la WBS et le périmètre du projet pour inclure le changement",
      "D. Communiquer l'impact sur le budget et le calendrier au sponsor"
    ],
    solution: "B. Soumettre une demande de changement au comité de contrôle des changements (CCB)",
    explication: "Le plan de gestion du projet définit la procédure pour gérer les changements, qui doivent passer par le CCB. Les autres actions sont prématurées ou inappropriées avant approbation.",
  },
  {
    id: 28,
    question: "Le chef de projet dirige un projet d'infrastructure complexe vital pour l'entreprise. Un partie prenante influente est résistante mais son soutien est crucial. Comment le chef de projet doit-il gérer cela ?",
    options: [
      "A. Développer un plan d'engagement des parties prenantes incluant des stratégies pour adresser les préoccupations du résistant",
      "B. Exclure le partie prenante du projet pour éviter les perturbations",
      "C. Confier la gestion de cette partie prenante à un membre de l'équipe et se concentrer sur les autres",
      "D. Demander l'intervention de la direction pour convaincre le partie prenante"
    ],
    solution: "A. Développer un plan d'engagement des parties prenantes incluant des stratégies pour adresser les préoccupations du résistant",
    explication: "Créer un plan d'engagement permet de traiter directement les préoccupations et construire la confiance. Les autres options n'adressent pas le problème central ou peuvent créer des conflits.",
  },
  {
    id: 29,
    question: "Un chef de projet doit obtenir l'approbation d'un plan de gestion de projet complexe de multiples parties prenantes à l'international avec un temps limité.\n\nQue doit-il faire en premier ?",
    options: [
      "A. Planifier une réunion pour présenter le plan et obtenir l'approbation",
      "B. Distribuer le plan aux parties prenantes pour qu'elles le révisent avant la réunion",
      "C. Informer le sponsor que les approbations prendront plus de temps et ajuster le planning",
      "D. Obtenir des approbations partielles et suivre les approbations manquantes comme risque"
    ],
    solution: "B. Distribuer le plan aux parties prenantes pour qu'elles le révisent avant la réunion",
    explication: "Envoyer le plan à l'avance permet de rendre la réunion productive et de respecter le temps limité. Les autres options ne prennent pas en compte la contrainte de temps et la diversité des parties prenantes.",
  },
  {
    id: 30,
    question: "Une partie prenante apprend que l'équipement acheté pour le projet est de meilleure qualité que prévu et s'inquiète de l'impact sur le budget. Quelle action aurait dû prendre le chef de projet pour éviter ce problème ?",
    options: [
      "A. Mettre à jour le plan de communication",
      "B. Partager les résultats de l'analyse des risques pour l'équipement",
      "C. Effectuer les procédures de contrôle intégré des changements",
      "D. Effectuer des évaluations régulières de la qualité de l'équipement"
    ],
    solution: "C. Effectuer les procédures de contrôle intégré des changements",
    explication: "Le chef de projet aurait dû suivre les procédures de contrôle intégré pour approuver tout changement d'équipement avant l'achat. Cela aurait évité les inquiétudes de la partie prenante. Les autres options ne gèrent pas directement les changements non autorisés.",
  },
];
