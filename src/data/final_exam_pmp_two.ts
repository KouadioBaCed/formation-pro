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
    question:
      "Le chef de projet d’un projet agile remarque que de nombreux parties prenantes ne participent pas aux réunions de planification et de revue d’itération. Elles disent ne pas voir la valeur de ces réunions. Le projet risque de prendre du retard. Que doit faire le chef de projet en premier ?",
    options: [
      { key: "A", text: "Revoir et mettre à jour le plan de gestion des communications." },
      { key: "B", text: "Identifier les lacunes et accompagner les parties prenantes sur l’approche itérative." },
      { key: "C", text: "Enregistrer les revues d’itération et les partager." },
      { key: "D", text: "Créer une matrice RACI et un plan de formation." }
    ],
    correctAnswer: "B",
    explanation:
      "Les parties prenantes ne comprennent pas la valeur de l’approche itérative. Le chef de projet doit d’abord combler ces lacunes par du mentorat afin d’améliorer l’engagement."
  },
  {
    id: 2,
    question:
      "Un chef de projet agile supervise un projet Kanban et souhaite identifier les obstacles à l’achèvement des tâches avant une échéance importante. Que doit-il faire ?",
    options: [
      { key: "A", text: "Créer un indicateur de performance basé sur la limite WIP." },
      { key: "B", text: "Demander à un membre de confiance les problèmes rencontrés." },
      { key: "C", text: "Examiner les tâches bloquées avec l’équipe lors des stand-ups." },
      { key: "D", text: "Organiser une réunion avec les parties prenantes." }
    ],
    correctAnswer: "C",
    explanation:
      "Les stand-ups quotidiens permettent d’identifier rapidement les blocages visibles sur le tableau Kanban."
  },
  {
    id: 3,
    question:
      "Un chef de projet travaille pour la première fois avec une équipe virtuelle mondiale et constate des problèmes de participation aux réunions. Que doit-il faire ?",
    options: [
      { key: "A", text: "Autoriser uniquement des réunions asynchrones." },
      { key: "B", text: "Demander au sponsor d’imposer la participation." },
      { key: "C", text: "Analyser la culture et la structure organisationnelles." },
      { key: "D", text: "Changer systématiquement les horaires." }
    ],
    correctAnswer: "C",
    explanation:
      "Comprendre la culture et la structure permet d’organiser des réunions adaptées et acceptées par tous."
  },
  {
    id: 4,
    question:
      "Dans un projet agile, l’équipe n’est pas entièrement dédiée. Comment assurer une bonne vélocité ? (Choisir deux)",
    options: [
      { key: "A", text: "Imposer le suivi du temps." },
      { key: "B", text: "Demander des membres d’équipe transverses." },
      { key: "C", text: "Obtenir l’engagement pour des ressources à temps plein." },
      { key: "D", text: "Revoir le registre des ressources." },
      { key: "E", text: "Ajouter plus de membres sans analyse." }
    ],
    correctAnswer: "B et C",
    explanation:
      "Les équipes agiles fonctionnent mieux avec des membres transverses et dédiés à temps plein."
  },
  {
    id: 5,
    question:
      "Des membres de l’équipe signalent un problème qui pourrait impacter les délais du projet. Que doit faire le chef de projet ensuite ?",
    options: [
      { key: "A", text: "Analyser l’impact sur le chemin critique." },
      { key: "B", text: "Initier une demande de changement." },
      { key: "C", text: "Évaluer l’impact global avec l’équipe." },
      { key: "D", text: "Escalader immédiatement au sponsor." }
    ],
    correctAnswer: "C",
    explanation:
      "Avant toute escalade ou changement, il faut comprendre l’impact réel avec l’équipe."
  },
  {
    id: 6,
    question:
      "Après la clôture d’un projet, le client demande d’utiliser le budget restant pour des activités de team building. Que doit faire le chef de projet ?",
    options: [
      { key: "A", text: "Refuser et clôturer les finances du projet." },
      { key: "B", text: "Lancer un contrôle intégré des changements." },
      { key: "C", text: "Approuver pour satisfaire le client." },
      { key: "D", text: "Documenter dans les leçons apprises." }
    ],
    correctAnswer: "A",
    explanation:
      "Les réserves de contingence ne doivent pas être utilisées pour des activités opérationnelles après la clôture."
  },
  {
    id: 7,
    question:
      "Un membre de l’équipe se plaint de devoir assister physiquement aux stand-ups alors que le chef de projet est à distance. Que faire ?",
    options: [
      { key: "A", text: "Autoriser tout le monde à être à distance." },
      { key: "B", text: "Changer le lieu de réunion chaque jour." },
      { key: "C", text: "Revoir les règles de participation aux réunions." },
      { key: "D", text: "Expliquer uniquement les avantages du présentiel." }
    ],
    correctAnswer: "C",
    explanation:
      "Clarifier les règles et attentes permet d’éviter les frustrations et incompréhensions."
  },
  {
    id: 8,
    question:
      "Lors d’une démonstration produit, une partie prenante estime que le produit ne répond pas aux attentes. Quel artefact utiliser ?",
    options: [
      { key: "A", text: "Description du MVP." },
      { key: "B", text: "Definition of Done." },
      { key: "C", text: "Definition of Ready." },
      { key: "D", text: "Critères d’acceptation de la user story." }
    ],
    correctAnswer: "D",
    explanation:
      "Les critères d’acceptation définissent précisément ce qui est attendu pour valider une fonctionnalité."
  },
  {
    id: 9,
    question:
      "L’équipe n’est pas à l’aise avec certains processus agiles. Quand en discuter et ajuster ?",
    options: [
      { key: "A", text: "Daily meeting." },
      { key: "B", text: "Atelier de leçons apprises." },
      { key: "C", text: "Rétrospective." },
      { key: "D", text: "Planification d’itération." }
    ],
    correctAnswer: "C",
    explanation:
      "La rétrospective est dédiée à l’amélioration continue des pratiques."
  },
  {
    id: 10,
    question:
      "Un lead technique propose une nouvelle approche qui peut réduire le planning mais comporte un risque. Que doit faire le chef de projet ?",
    options: [
      { key: "A", text: "Initier un changement immédiatement." },
      { key: "B", text: "Refuser la proposition." },
      { key: "C", text: "Analyser la marge (float) dans le diagramme réseau." },
      { key: "D", text: "Informer le sponsor du risque." }
    ],
    correctAnswer: "C",
    explanation:
      "Le calcul de la marge permet de décider sans impacter la date finale du projet."
  },
  {
    id: 11,
    question:
      "Un changement réglementaire impose une refonte majeure du livrable avec surcoût. Que doit faire le chef de projet ?",
    options: [
      { key: "A", text: "Soumettre le changement sans analyse." },
      { key: "B", text: "Recommander le rejet du changement." },
      { key: "C", text: "Soumettre au CCB avec analyse d’impact des coûts." },
      { key: "D", text: "Procéder sans informer le CCB." }
    ],
    correctAnswer: "C",
    explanation:
      "Toute demande de changement doit être formellement analysée et soumise avec transparence."
  },
  {
    id: 12,
    question:
      "Une nouvelle équipe agile rencontre des conflits et ne respecte pas ses engagements. Que faire ?",
    options: [
      { key: "A", text: "Impliquer le management." },
      { key: "B", text: "Informer que les délais ne seront pas respectés." },
      { key: "C", text: "Attendre la rétrospective." },
      { key: "D", text: "Coacher l’équipe collectivement et individuellement." }
    ],
    correctAnswer: "D",
    explanation:
      "Le coaching est essentiel pour améliorer progressivement la performance de l’équipe agile."
  },
  {
    id: 13,
    question:
      "Une entreprise doit lancer un produit à une date fixe mais le périmètre est incertain. Que faire ?",
    options: [
      { key: "A", text: "Ajouter des ressources." },
      { key: "B", text: "Estimer les fonctionnalités du MVP avec l’équipe." },
      { key: "C", text: "Supprimer la documentation." },
      { key: "D", text: "Demander une nouvelle date." }
    ],
    correctAnswer: "B",
    explanation:
      "Identifier le MVP permet de garantir la livraison de la valeur essentielle à temps."
  },
  {
    id: 14,
    question:
      "Le chef de projet client n’a pas l’autorité financière, ce qui ralentit le projet. Que faire ?",
    options: [
      { key: "A", text: "Attendre le prochain rapport." },
      { key: "B", text: "Documenter pour les leçons apprises." },
      { key: "C", text: "Escalader au comité de pilotage." },
      { key: "D", text: "Discuter uniquement avec le chef de projet client." }
    ],
    correctAnswer: "C",
    explanation:
      "Le comité de pilotage est l’instance adaptée pour résoudre les problèmes d’autorité."
  },
  {
    id: 15,
    question:
      "Une équipe colocalisée a des horaires décalés et manque des réunions. Que faire ?",
    options: [
      { key: "A", text: "Imposer les mêmes horaires." },
      { key: "B", text: "Faire un compte rendu aux absents." },
      { key: "C", text: "Utiliser un tableau d’information." },
      { key: "D", text: "Planifier les réunions sur des heures communes." }
    ],
    correctAnswer: "D",
    explanation:
      "Les heures de chevauchement garantissent la participation de tous."
  },
  {
    id: 16,
    question:
      "Un équipement non prêt pourrait apporter un bénéfice marketing mais retarder le projet. Que faire ?",
    options: [
      { key: "A", text: "L’inclure directement." },
      { key: "B", text: "Refuser sans discussion." },
      { key: "C", text: "Consulter le comité de pilotage pour un consensus." },
      { key: "D", text: "Escalader au sponsor." }
    ],
    correctAnswer: "C",
    explanation:
      "Les décisions hors autorité de l’équipe doivent être prises collectivement par le comité."
  },
  {
    id: 17,
    question:
      "Un chef de projet aide l’équipe à réduire la lourdeur administrative imposée par la gouvernance. Quel type de leadership est illustré ?",
    options: [
      { key: "A", text: "Leadership serviteur." },
      { key: "B", text: "Leadership transactionnel." },
      { key: "C", text: "Leadership directif." },
      { key: "D", text: "Leadership constructif." }
    ],
    correctAnswer: "A",
    explanation:
      "Le leadership serviteur consiste à lever les obstacles pour aider l’équipe à réussir."
  },
  {
    id: 18,
    question:
      "Des conflits de conception apparaissent dans une équipe multidisciplinaire. Que doit faire le chef de projet ?",
    options: [
      { key: "A", text: "Identifier un risque." },
      { key: "B", text: "Informer le sponsor." },
      { key: "C", text: "Escalader aux managers fonctionnels." },
      { key: "D", text: "Faciliter les échanges entre les membres." }
    ],
    correctAnswer: "D",
    explanation:
      "Le chef de projet doit faciliter la collaboration et l’alignement autour de la vision."
  },
  {
    id: 19,
    question:
      "Un projet dépasse le budget car de nouveaux membres ne déclarent pas les matériaux utilisés. Que fallait-il faire ?",
    options: [
      { key: "A", text: "Documenter le risque." },
      { key: "B", text: "Former les membres aux procédures d’acquisition." },
      { key: "C", text: "Créer une réserve de contingence." },
      { key: "D", text: "Éviter d’intégrer de nouveaux ingénieurs." }
    ],
    correctAnswer: "B",
    explanation:
      "La formation garantit la compréhension des processus et évite les dérives de coûts."
  },
  {
    id: 20,
    question:
      "Une équipe colocalisée a des horaires décalés et manque des réunions. Que faire ?",
    options: [
      { key: "A", text: "Imposer les mêmes horaires." },
      { key: "B", text: "Faire un compte rendu aux absents." },
      { key: "C", text: "Utiliser un tableau d’information." },
      { key: "D", text: "Planifier les réunions sur des heures communes." }
    ],
    correctAnswer: "D",
    explanation:
      "Les heures de chevauchement garantissent la participation de tous."
  },
  {
    id: 21,
    question:
      "Un équipement critique du projet est fabriqué par un fournisseur à l’étranger. Un audit qualité révèle une non-conformité avec certaines spécifications du projet. Que doit faire le chef de projet ensuite ?",
    options: [
      { key: "A", text: "Affecter du personnel projet pour superviser l’usine du fournisseur." },
      { key: "B", text: "Revoir le contrat de production pour vérifier si les spécifications y figurent." },
      { key: "C", text: "Organiser un atelier avec le fournisseur pour expliquer les spécifications." },
      { key: "D", text: "Planifier des réunions régulières pour contrôler la situation." }
    ],
    correctAnswer: "B",
    explanation:
      "Le contrat est l’accord légal. Si les spécifications n’y figurent pas, le fournisseur ne peut pas être tenu responsable."
  },
  {
    id: 22,
    question:
      "Un nouveau chef de projet reprend un projet en cours et constate des problèmes de qualité et de planning. Quelle est la première action à entreprendre ?",
    options: [
      { key: "A", text: "Mettre à jour le plan de projet." },
      { key: "B", text: "Se concentrer sur le respect des délais et du budget." },
      { key: "C", text: "Rencontrer l’équipe pour comprendre la situation et définir un plan d’action." },
      { key: "D", text: "Demander des ressources supplémentaires au sponsor." }
    ],
    correctAnswer: "C",
    explanation:
      "L’équipe détient les informations clés. Il faut comprendre les causes avant toute décision."
  },
  {
    id: 23,
    question:
      "Une nouvelle réglementation est adoptée et le projet doit désormais s’y conformer. Ce risque était initialement faible. Que faire en premier ?",
    options: [
      { key: "A", text: "Mettre à jour le registre des risques." },
      { key: "B", text: "Mettre à jour le registre des problèmes." },
      { key: "C", text: "Réviser le plan de management du projet." },
      { key: "D", text: "Initier immédiatement une demande de changement." }
    ],
    correctAnswer: "A",
    explanation:
      "Le risque est désormais certain. Le registre des risques doit être mis à jour avant toute autre action."
  },
  {
    id: 24,
    question:
      "Un projet a un budget de 120 000 $. 15 % devait être terminé, mais seulement 12 % l’est réellement. Quel est le SPI ?",
    options: [
      { key: "A", text: "0,6" },
      { key: "B", text: "0,8" },
      { key: "C", text: "0,9" },
      { key: "D", text: "1,25" }
    ],
    correctAnswer: "B",
    explanation:
      "SPI = EV / PV = 14 400 / 18 000 = 0,8. Le projet est en retard."
  },
  {
    id: 25,
    question:
      "Pendant une itération agile, un risque majeur lié à une dépendance entre user stories est identifié. Que faire ensuite ?",
    options: [
      { key: "A", text: "Mettre à jour le backlog produit." },
      { key: "B", text: "Mettre à jour la charte du projet." },
      { key: "C", text: "Mettre à jour le registre des risques." },
      { key: "D", text: "Mettre à jour le registre des problèmes." }
    ],
    correctAnswer: "C",
    explanation:
      "Un risque identifié doit être documenté dans le registre des risques."
  },
  {
    id: 26,
    question:
      "Un projet de remplacement logiciel impacte toute l’organisation mais les ressources de formation sont limitées. Quelle est la meilleure action ?",
    options: [
      { key: "A", text: "Inclure la formation comme livrable du projet." },
      { key: "B", text: "Identifier les besoins par fonction." },
      { key: "C", text: "Recruter des formateurs supplémentaires." },
      { key: "D", text: "Prioriser uniquement les fonctionnalités clés." }
    ],
    correctAnswer: "A",
    explanation:
      "La formation doit faire partie intégrante du périmètre pour garantir la création de valeur."
  },
  {
    id: 27,
    question:
      "Un chef d’équipe communique directement avec le sponsor sans informer le chef de projet. Que faire ?",
    options: [
      { key: "A", text: "Rappeler la règle de communication convenue." },
      { key: "B", text: "Vérifier s’il existe un conflit personnel." },
      { key: "C", text: "Modifier formellement les règles." },
      { key: "D", text: "Demander au sponsor ce qui a été communiqué." }
    ],
    correctAnswer: "A",
    explanation:
      "Les règles d’équipe étaient déjà définies, il faut les rappeler."
  },
  {
    id: 28,
    question:
      "Un stakeholder remet en question l’objectif du projet et souhaite le suspendre. Quelle est la première action ?",
    options: [
      { key: "A", text: "Analyser son pouvoir et son intérêt." },
      { key: "B", text: "Consulter le sponsor." },
      { key: "C", text: "Reporter le changement." },
      { key: "D", text: "Revoir les critères d’acceptation." }
    ],
    correctAnswer: "A",
    explanation:
      "Il faut d’abord évaluer l’influence du stakeholder avant toute décision."
  },
  {
    id: 29,
    question:
      "Pour construire une vision commune du projet, qui faut-il engager ?",
    options: [
      { key: "A", text: "Le client et l’équipe de livraison." },
      { key: "B", text: "L’équipe et le sponsor." },
      { key: "C", text: "L’équipe projet et les parties prenantes." },
      { key: "D", text: "Le client et le propriétaire du produit." }
    ],
    correctAnswer: "C",
    explanation:
      "La vision doit être partagée par ceux qui réalisent le travail et ceux qui en bénéficient."
  },
  {
    id: 30,
    question:
      "L’équipe ne parvient pas à se mettre d’accord sur un processus technique. Que doit faire le chef de projet ?",
    options: [
      { key: "A", text: "Imposer sa décision." },
      { key: "B", text: "Mettre à jour la matrice RACI." },
      { key: "C", text: "Nommer un nouveau leader." },
      { key: "D", text: "Faciliter une réunion collaborative." }
    ],
    correctAnswer: "D",
    explanation:
      "La facilitation favorise la collaboration et l’adhésion de l’équipe."
  },
  {
    id: 31,
    question:
      "Une nouvelle technologie est nécessaire mais l’équipe ne la maîtrise pas. Que faire ?",
    options: [
      { key: "A", text: "Former l’équipe." },
      { key: "B", text: "Recruter de nouveaux membres." },
      { key: "C", text: "Ignorer l’évolution technologique." },
      { key: "D", text: "Contacter le concurrent." }
    ],
    correctAnswer: "A",
    explanation:
      "La formation permet de combler les écarts de compétences et de renforcer l’équipe."
  },
  {
    id: 32,
    question:
      "Un membre d’équipe choisit toujours les user stories les plus faciles. Comment gérer cela ?",
    options: [
      { key: "A", text: "Rappeler les priorités à toute l’équipe." },
      { key: "B", text: "L’obliger à prendre des stories complexes." },
      { key: "C", text: "Discuter avec lui pour comprendre la raison." },
      { key: "D", text: "Le reformer techniquement." }
    ],
    correctAnswer: "C",
    explanation:
      "Il faut comprendre la cause avant de proposer une solution."
  },
  {
    id: 33,
    question:
      "Une équipe prend trop de user stories et n’en termine aucune pendant le sprint. Que faire ?",
    options: [
      { key: "A", text: "Clarifier les priorités." },
      { key: "B", text: "Créer des stories plus petites." },
      { key: "C", text: "Revoir la Definition of Done." },
      { key: "D", text: "Mettre à jour le plan de release." }
    ],
    correctAnswer: "A",
    explanation:
      "Le problème principal est la priorisation et le focus."
  },
  {
    id: 34,
    question:
      "Un membre performant traverse une difficulté personnelle qui impacte le projet. Que faire ?",
    options: [
      { key: "A", text: "Le retirer des tâches critiques." },
      { key: "B", text: "Discuter en privé et définir un plan ensemble." },
      { key: "C", text: "Consigner le problème dans le registre des incidents." },
      { key: "D", text: "Confier le problème aux RH immédiatement." }
    ],
    correctAnswer: "B",
    explanation:
      "L’empathie et la communication directe sont essentielles au leadership."
  },
  {
    id: 35,
    question:
      "Le client manque de visibilité sur l’avancement du projet. Quelles actions prendre ? (3 choix)",
    options: [
      { key: "A", text: "Ajouter une réunion quotidienne." },
      { key: "B", text: "Partager uniquement le rapport mensuel." },
      { key: "C", text: "Créer des rapports hebdomadaires." },
      { key: "D", text: "Adapter les rapports existants." },
      { key: "E", text: "Demander des rapports aux fournisseurs." }
    ],
    correctAnswer: "A, C et D",
    explanation:
      "Une communication fréquente et adaptée améliore la transparence."
  },
  {
    id: 36,
    question:
      "La qualité du travail baisse malgré le respect des délais. Quelle action est la plus appropriée ?",
    options: [
      { key: "A", text: "Organiser un team building." },
      { key: "B", text: "Recruter de nouveaux membres." },
      { key: "C", text: "Analyser les écarts de compétences et former." },
      { key: "D", text: "Mettre en place une évaluation stricte." }
    ],
    correctAnswer: "C",
    explanation:
      "Une analyse des compétences permet d’identifier et corriger la cause racine."
  },
  {
    id: 37,
    question:
      "L’équipe a du mal à estimer la durée des activités. Quelle approche adopter ?",
    options: [
      { key: "A", text: "Demander à chaque membre d’estimer." },
      { key: "B", text: "Tenir compte uniquement des contraintes." },
      { key: "C", text: "Utiliser les données de projets similaires." },
      { key: "D", text: "Consulter d’autres chefs de projet." }
    ],
    correctAnswer: "C",
    explanation:
      "Les données historiques fournissent des estimations plus fiables."
  },
  {
    id: 38,
    question:
      "La performance d’un PMO virtuel est faible. Quelles actions amélioreront la situation ? (3 choix)",
    options: [
      { key: "A", text: "Former l’équipe aux outils." },
      { key: "B", text: "Recruter un manager senior." },
      { key: "C", text: "Dissoudre l’équipe virtuelle." },
      { key: "D", text: "Renforcer la collaboration régulière." },
      { key: "E", text: "Fournir de meilleurs outils de communication." }
    ],
    correctAnswer: "A, D et E",
    explanation:
      "La formation, la collaboration et les outils renforcent l’efficacité des équipes virtuelles."
  },
  {
    id: 39,
    question:
      "Un problème de compatibilité technique apparaît en phase d’initiation. Que faire en premier ?",
    options: [
      { key: "A", text: "Chercher une solution alternative." },
      { key: "B", text: "Escalader vers l’équipe technique." },
      { key: "C", text: "Consulter les leçons apprises." },
      { key: "D", text: "Informer le sponsor." }
    ],
    correctAnswer: "C",
    explanation:
      "Les leçons apprises peuvent contenir des solutions déjà éprouvées."
  },
  {
    id: 40,
    question:
      "La négociation avec un fournisseur bloque la planification finale du projet. Que faire ?",
    options: [
      { key: "A", text: "Partager les comptes rendus." },
      { key: "B", text: "Discuter avec le fournisseur et envisager une alternative." },
      { key: "C", text: "Demander au sponsor de remplacer le fournisseur." },
      { key: "D", text: "Faire pression sur le fournisseur." }
    ],
    correctAnswer: "B",
    explanation:
      "Le chef de projet doit chercher une solution tout en prévoyant une alternative."
  },
  {
    id: 41,
    question: "Un chef de projet est assigné à un nouveau projet. Les exigences évoluent encore, mais il faut livrer rapidement de la valeur métier. Quelle approche doit-il adopter ?",
    options: [
      "A. Développer des stratégies d'atténuation pour les risques liés aux exigences évolutives.",
      "B. Utiliser un backlog produit et compléter les exigences les plus prioritaires en premier.",
      "C. S'assurer que les changements de périmètre sont documentés dans la matrice de traçabilité des exigences.",
      "D. Développer un graphique burndown des fonctionnalités et montrer la progression des exigences."
    ],
    solution: "B. Utiliser un backlog produit et compléter les exigences les plus prioritaires en premier",
    rationale: "Le chef de projet doit adopter une approche itérative et incrémentale (Agile ou hybride) pour gérer les exigences évolutives. Le backlog produit permet de livrer en priorité les fonctionnalités les plus importantes et d'assurer une valeur métier rapide et continue."
  },
  {
    id: 42,
    question: "Pour réduire le temps d'approvisionnement lors d'un appel d'offres, un chef de projet a décidé de confier des travaux supplémentaires à un entrepreneur déjà en place. Les autres soumissionnaires se plaignent du manque de transparence et d'équité. Que devait faire le chef de projet pour éviter cela ?",
    options: [
      "A. Inviter tous les soumissionnaires potentiels à une réunion.",
      "B. Attribuer le contrat sans négociation.",
      "C. Suivre la procédure d'appel d'offres de l'entreprise.",
      "D. Partager les objectifs du projet avec tous les soumissionnaires."
    ],
    solution: "C. Suivre la procédure d'appel d'offres de l'entreprise",
    rationale: "Suivre la procédure établie garantit la transparence, l'équité et la cohérence. Les autres options peuvent compléter le processus mais ne garantissent pas le respect des règles."
  },
  {
    id: 43,
    question: "Une entreprise fait face à un dépassement de coût et a besoin de liquidités. Un projet critique est en cours et dépasse le budget. La direction demande un rapport sur l'alignement du projet avec les objectifs organisationnels. Que doit faire le chef de projet ?",
    options: [
      "A. Examiner et évaluer les documents pour extraire des informations significatives.",
      "B. Comparer les résultats réels avec ceux prévus en analysant les écarts entre performances réelles et budgetées.",
      "C. Identifier et analyser les tendances ou changements des données sur une période donnée.",
      "D. Évaluer la faisabilité économique du projet en comparant coûts et bénéfices attendus."
    ],
    solution: "B. Comparer les résultats réels avec ceux prévus en analysant les écarts",
    rationale: "Analyser les écarts entre performances réelles et prévues permet de comprendre les dépassements de coûts et de proposer des recommandations pour remettre le projet sur les rails."
  },
  {
    id: 44,
    question: "Un client demande des fonctionnalités supplémentaires non documentées. Les limites WIP sont déjà optimisées. Comment le chef de projet doit-il commencer à traiter ces nouvelles exigences ?",
    options: [
      "A. Construire le produit selon les exigences initiales convenues.",
      "B. Discuter de la faisabilité et de l'impact des nouvelles fonctionnalités avec le Product Owner.",
      "C. Décomposer les travaux supplémentaires avec les équipes existantes.",
      "D. Livrer des incréments des fonctionnalités supplémentaires pour validation par le client."
    ],
    solution: "B. Discuter de la faisabilité et de l'impact des nouvelles fonctionnalités avec le Product Owner",
    rationale: "Le Product Owner est responsable de maximiser la valeur du produit. Cette discussion permet d'évaluer, de prioriser et d'ajouter les nouvelles fonctionnalités au backlog de manière contrôlée."
  },
  {
    id: 45,
    question: "Un chef de projet travaille sur un projet interne et constate que les visions et objectifs d'autres responsables départementaux sont flous, ce qui crée de la confusion. Quel document doit-il consulter pour clarifier la situation ?",
    options: [
      "A. Charte du projet",
      "B. Plan de gestion des communications",
      "C. Registre des risques",
      "D. Plan de gestion des parties prenantes"
    ],
    solution: "A. Charte du projet",
    rationale: "La charte du projet définit officiellement la vision, les objectifs et le périmètre. La consulter permet d'assurer l'alignement et la clarté pour l'équipe."
  },
  {
    id: 46,
    question: "De nouveaux membres de l'équipe sont moins productifs que prévu. Le projet a un calendrier rigide. Quelle action le chef de projet doit-il entreprendre ?",
    options: [
      "A. Fournir une formation supplémentaire aux nouveaux membres.",
      "B. Mettre en place un accompagnement par immersion (job shadowing) au sein de l'équipe.",
      "C. Instaurer des primes pour la réalisation des jalons.",
      "D. Informer l'équipe que la productivité doit s'améliorer."
    ],
    solution: "B. Mettre en place un accompagnement par immersion (job shadowing)",
    rationale: "Le job shadowing permet aux nouveaux membres d'apprendre rapidement auprès des membres expérimentés, augmentant la productivité sans retarder le projet."
  },
  {
    id: 47,
    question: "Un chef de projet rencontre un problème avec le responsable fonctionnel qui assigne un membre de l'équipe à un travail de moindre priorité. Que doit faire le chef de projet ?",
    options: [
      "A. Escalader le problème à la direction.",
      "B. Communiquer l'importance du projet à l'équipe.",
      "C. Référer le responsable fonctionnel à la charte du projet.",
      "D. Demander des ressources supplémentaires pour le projet."
    ],
    solution: "A. Escalader le problème à la direction",
    rationale: "Dans une organisation matricielle, l'escalade est nécessaire pour résoudre les conflits de priorité et garantir que le membre de l'équipe puisse accomplir les tâches critiques."
  },
  {
    id: 48,
    question: "Un membre de l'équipe de projet informe le chef de projet qu'un système d'exploitation ne sera pas installé à temps à cause d'une mise à jour tardive du fournisseur. Que doit faire le chef de projet en premier ?",
    options: [
      "A. Déterminer l'impact de la situation.",
      "B. Modifier le calendrier pour refléter la situation.",
      "C. Informer les parties prenantes du problème.",
      "D. Faire un brainstorming avec l'équipe pour trouver une solution."
    ],
    solution: "A. Déterminer l'impact de la situation",
    rationale: "Le chef de projet doit d'abord quantifier l'impact afin de comprendre les ajustements nécessaires au projet (planning, budget, ressources). Les autres actions viennent après cette évaluation."
  },
  {
    id: 49,
    question: "Lors de la phase de conception, le chef de projet réalise que le projet bénéficiera d'outils adaptatifs, déjà efficaces dans d'autres projets. Que doit-il faire en premier ?",
    options: [
      "A. Confirmer les compétences de l'équipe avant d'introduire les outils adaptatifs.",
      "B. Contacter le sponsor pour demander des membres familiers avec les projets adaptatifs.",
      "C. Geler la phase de conception et chercher une ressource externe pour l'exécution itérative à coût supplémentaire.",
      "D. Mettre à jour les documents du projet pour inclure les outils adaptatifs et planifier la première session itérative."
    ],
    solution: "A. Confirmer les compétences de l'équipe avant d'introduire les outils adaptatifs",
    rationale: "Vérifier les compétences permet de s'assurer que l'équipe peut utiliser les outils adaptatifs efficacement. Introduire ces outils sans confirmation pourrait compromettre le projet."
  },
  {
    id: 50,
    question: "Un développeur a terminé un livrable pour une fonctionnalité. Le Product Owner ne sait pas comment évaluer la qualité du livrable dans un projet Agile. Quel outil ou technique doit-il utiliser ?",
    options: [
      "A. Jugement d'expert",
      "B. Prise de décision",
      "C. Démonstrations/revues",
      "D. Checklists"
    ],
    solution: "C. Démonstrations/revues",
    rationale: "Dans Agile, les démonstrations ou revues de sprint permettent au Product Owner d'évaluer l'avancement et de fournir un retour rapide. Les autres techniques sont plus adaptées aux approches prédictives."
  },
  {
    id: 51,
    question: "Lors d'un projet logiciel, plusieurs fonctionnalités ne respectent pas les exigences de qualité. Après instructions, un membre se plaint d'exigences floues, les autres pointent la négligence des tests, et les testeurs blâment le code. Que doit faire le chef de projet ?",
    options: [
      "A. Faciliter une rétrospective pour identifier la cause racine.",
      "B. Retirer le membre frustré de l'équipe.",
      "C. Effectuer un contrôle qualité à chaque étape.",
      "D. Discuter avec la direction pour améliorer la qualité."
    ],
    solution: "A. Faciliter une rétrospective pour identifier la cause racine",
    rationale: "La rétrospective permet à l'équipe d'analyser le processus et de résoudre les problèmes de qualité en collaboration. Les autres actions ne favorisent pas la même résolution collective."
  },
  {
    id: 52,
    question: "Lors de la clôture d'un projet, le client trouve des défauts dans le livrable. Quelle est la prochaine action du chef de projet ?",
    options: [
      "A. Vérifier le livrable par rapport aux critères d'acceptation.",
      "B. Prolonger le projet jusqu'à acceptation complète.",
      "C. Persuader le client d'accepter tel quel.",
      "D. Payer la pénalité pour le livrable défectueux."
    ],
    solution: "A. Vérifier le livrable par rapport aux critères d'acceptation",
    rationale: "Cette vérification confirme pourquoi le défaut n'a pas été détecté plus tôt et guide la résolution appropriée. Les autres options sont prématurées ou inappropriées."
  },
  {
    id: 53,
    question: "Une équipe est auditée de manière inattendue et des non-conformités sont relevées. Quelles actions aurait dû prendre le chef de projet pour éviter cela ? (Choisir 3)",
    options: [
      "A. Surveiller la conformité et les standards qualité.",
      "B. Anticiper les éléments potentiellement non conformes.",
      "C. Demander à l'équipe d'être prête pour l'audit.",
      "D. S'assurer que les auditeurs sont expérimentés.",
      "E. Rejeter la demande d'audit inattendue."
    ],
    solution: "A, B et C",
    rationale: "La préparation, la surveillance et l'anticipation permettent d'éviter ou de réduire les non-conformités lors des audits. Les autres options sont hors de portée du chef de projet."
  },
  {
    id: 54,
    question: "Une équipe de projet adaptative est répartie mondialement et parle différentes langues. Les réunions quotidiennes virtuelles posent des problèmes de compréhension. Que doit adapter le chef de projet ?",
    options: [
      "A. Résumer verbalement l'état d'avancement.",
      "B. Utiliser un tableau de tâches électronique pour visualiser l'avancement.",
      "C. Demander un budget pour un service de traduction.",
      "D. Demander à tous les membres de rapporter les travaux réalisés, à venir et les blocages."
    ],
    solution: "B. Utiliser un tableau de tâches électronique pour visualiser l'avancement",
    rationale: "La visualisation permet de surmonter les barrières linguistiques et culturelles, améliorant la compréhension et la communication lors des réunions."
  },
  {
    id: 55,
    question: "Dans une organisation matricielle, plusieurs ressources clés sont réaffectées. Le projet n'a plus les ressources nécessaires. Que doit faire le chef de projet ?",
    options: [
      "A. Refuser de libérer les ressources réaffectées.",
      "B. Examiner le plan de communication.",
      "C. Examiner les plans d'allocation et d'utilisation des ressources.",
      "D. Discuter des besoins en ressources avec le responsable fonctionnel."
    ],
    solution: "D. Discuter des besoins en ressources avec le responsable fonctionnel",
    rationale: "Dans une matrice, les ressources relèvent du responsable fonctionnel. Le chef de projet doit collaborer pour minimiser l'impact des réaffectations."
  },
  {
    id: 56,
    question: "Un chef de projet est assigné à une équipe Agile qui a été très performante. Un stakeholder souhaite réutiliser la gouvernance précédente. Que doit faire le chef de projet ?",
    options: [
      "A. Consulter le PMO pour avis sur la gouvernance.",
      "B. Collaborer avec l'équipe et le stakeholder pour adapter la gouvernance existante.",
      "C. Informer la direction que la gouvernance peut être réutilisée.",
      "D. Demander au stakeholder de discuter des questions de gouvernance avec le Product Owner."
    ],
    solution: "B. Collaborer avec l'équipe et le stakeholder pour adapter la gouvernance existante",
    rationale: "La collaboration permet de personnaliser la gouvernance aux besoins du nouveau projet tout en utilisant les éléments efficaces du précédent."
  },
  {
    id: 57,
    question: "En cours de projet, il apparaît qu'un ensemble de compétences est nécessaire mais aucun membre ne les possède. Quelle est la première action du chef de projet ?",
    options: [
      "A. Réorganiser l'équipe pour inclure des personnes compétentes.",
      "B. Revoir le calendrier et le budget pour envisager formation, sous-traitance ou alternatives.",
      "C. Organiser une formation pour l'équipe.",
      "D. Chercher une alternative pour atteindre les objectifs sans ces compétences."
    ],
    solution: "B. Revoir le calendrier et le budget pour envisager formation, sous-traitance ou alternatives",
    rationale: "Cela permet de déterminer la meilleure approche pour combler le manque de compétences sans compromettre le projet."
  },
  {
    id: 58,
    question: "Lors d'une réunion, un utilisateur final signale que les PC pour les tests ont des performances dégradées. Quelles actions immédiates le chef de projet doit-il prendre ? (Choisir 3)",
    options: [
      "A. Enregistrer le problème dans le registre des problèmes.",
      "B. Changer le périmètre du projet.",
      "C. Assigner la responsabilité du problème.",
      "D. Acheter de nouveaux PC.",
      "E. Mettre en œuvre une résolution du problème."
    ],
    solution: "A, C et E",
    rationale: "Enregistrer, assigner et résoudre le problème permet une gestion efficace et formalisée des incidents. Les autres options sont inappropriées ou prématurées."
  },
  {
    id: 59,
    question: "Lors d'une réunion de lancement, certains participants n'étaient pas nécessaires et un expert requis était absent. Que devait faire le chef de projet ?",
    options: [
      "A. Établir une plateforme de communication fixe pour informer tous les stakeholders.",
      "B. Gérer l'engagement des parties prenantes en impliquant les parties prenantes aux phases appropriées.",
      "C. Développer la charte du projet avec les rôles et responsabilités.",
      "D. Créer une matrice de responsabilités pour notifier les participants obligatoires."
    ],
    solution: "B. Gérer l'engagement des parties prenantes en impliquant les parties prenantes aux phases appropriées",
    rationale: "Une bonne gestion de l'engagement permet aux participants de savoir quand leur présence est requise ou facultative."
  },
  {
    id: 60,
    question: "L'équipe de projet constate que l'architecture du produit ne supporte pas le nombre croissant d'utilisateurs. Que doit faire le chef de projet ?",
    options: [
      "A. Assigner un membre à tester la performance.",
      "B. Engager des experts externes pour évaluer l'architecture.",
      "C. S'engager avec le Product Owner sur le nouveau développement et prioriser la solution dans le backlog produit.",
      "D. Négocier avec les parties prenantes pour ralentir le développement."
    ],
    solution: "C. S'engager avec le Product Owner sur le nouveau développement et prioriser la solution dans le backlog produit",
    rationale: "Partager l'information avec le Product Owner permet de réévaluer les priorités et d'assurer que les ajustements nécessaires sont pris en compte rapidement."
  },
  {
    id: 61,
    question: "Un chef de projet remarque que l'équipe a des difficultés à communiquer et collaborer. Quels outils ou techniques le chef de projet doit-il utiliser pour comprendre le comportement de chaque membre ? (Choisir deux)",
    options: [
      { key: "A", text: "Évaluations de personnalité" },
      { key: "B", text: "Téléconférences hebdomadaires" },
      { key: "C", text: "Coaching individuel" },
      { key: "D", text: "Évaluations techniques" },
      { key: "E", text: "Évaluations culturelles" },
    ],
    answer: "A et C",
    rationale: "Les évaluations de personnalité permettent de comprendre les comportements et préférences des membres. Le coaching individuel permet d'adapter le leadership à chaque membre. Les autres options n'adressent pas la compréhension des styles individuels."
  },
  {
    id: 62,
    question: "Lors d'une revue de sprint, les parties prenantes semblent mal informées et ne parviennent pas à s'entendre sur les prochaines étapes. Que doit faire le chef de projet en premier ?",
    options: [
      { key: "A", text: "Réviser le plan de gestion des communications" },
      { key: "B", text: "Effectuer une analyse systémique des parties prenantes" },
      { key: "C", text: "Inclure les parties prenantes aux réunions quotidiennes" },
      { key: "D", text: "Rapprocher l'équipe physiquement" },
    ],
    answer: "A",
    rationale: "Le plan de communication est conçu pour répondre aux besoins des parties prenantes. Si elles sont mal informées, il faut d'abord vérifier le plan avant d'agir."
  },
  {
    id: 63,
    question: "Un membre de l'équipe déclare que toutes les tâches de l'itération sont terminées, mais le tableau montre des éléments incomplets. Que devait faire le chef de projet ?",
    options: [
      { key: "A", text: "Valider les éléments du backlog avec la définition de terminé (DoD)" },
      { key: "B", text: "Programmer des délais plus longs pour les itérations" },
      { key: "C", text: "Demander des rapports d'avancement quotidiens" },
      { key: "D", text: "Demander aux membres de présenter leur travail dès qu'il est prêt" },
    ],
    answer: "A",
    rationale: "La validation avec le DoD permet de s'assurer que tous les critères sont respectés et évite les retards dans l'itération."
  },
  {
    id: 64,
    question: "Lors de la clôture d'un projet, une tâche a pris plus de temps que prévu. Quelle action doit entreprendre le chef de projet pour l'amélioration continue ?",
    options: [
      { key: "A", text: "Mettre à jour les données de performance dans le registre des leçons apprises" },
      { key: "B", text: "Mettre à jour le registre des risques" },
      { key: "C", text: "Mettre à jour le registre des problèmes" },
      { key: "D", text: "Mettre à jour le plan de communication" },
    ],
    answer: "A",
    rationale: "Les leçons apprises documentent les expériences pour améliorer les projets futurs. Les autres options sont surtout utilisées pendant l'exécution."
  },
  {
    id: 65,
    question: "Des utilisateurs sont inconfortables avec certaines fonctionnalités du produit de la dernière itération. Quelle action doit prendre le chef de projet ?",
    options: [
      { key: "A", text: "S'assurer que les affectations de l'équipe sont claires" },
      { key: "B", text: "Obtenir les retours des parties prenantes et de l'équipe" },
      { key: "C", text: "Communiquer les changements à l'équipe" },
      { key: "D", text: "Mettre à jour le journal des changements et des problèmes" },
    ],
    answer: "B",
    rationale: "Recueillir les feedbacks aligne les besoins des utilisateurs avec les objectifs du projet. Les autres options ne résolvent pas le problème de satisfaction utilisateur."
  },
  {
    id: 66,
    question: "Un membre senior de l'équipe effectue les tâches selon ses préférences sans informer le chef de projet. Que doit faire le chef de projet ?",
    options: [
      { key: "A", text: "Discuter avec la ressource puis mettre à jour le plan de gestion des ressources" },
      { key: "B", text: "Discuter avec le manager fonctionnel puis mettre à jour le plan de gestion des ressources" },
      { key: "C", text: "Discuter avec le manager fonctionnel puis mettre à jour la charte de l'équipe" },
      { key: "D", text: "Discuter avec la ressource puis mettre à jour la charte de l'équipe" },
    ],
    answer: "D",
    rationale: "Le chef de projet doit d'abord comprendre la situation avec la ressource. Si nécessaire, la charte de l'équipe peut être mise à jour pour refléter de nouvelles directives."
  },
  {
    id: 67,
    question: "Un membre de l'équipe demande plus de détails qu'indiqués dans le diagramme de Gantt. Que doit faire le chef de projet ?",
    options: [
      { key: "A", text: "Créer un nouveau canal de communication" },
      { key: "B", text: "S'assurer que le membre comprend comment obtenir les informations détaillées" },
      { key: "C", text: "Rappeler que le Gantt était le format convenu" },
      { key: "D", text: "Ignorer les demandes" },
    ],
    answer: "B",
    rationale: "Il faut expliquer au membre comment obtenir les détails sans créer de canaux supplémentaires, ce qui est plus efficace."
  },
  {
    id: 68,
    question: "Un risque identifié se matérialise mais la réserve de contingence est insuffisante. Que doit faire le chef de projet ?",
    options: [
      { key: "A", text: "Demander au sponsor d'utiliser la réserve de gestion" },
      { key: "B", text: "Demander un budget supplémentaire au sponsor" },
      { key: "C", text: "Soumettre une demande de changement pour ajuster le périmètre, le coût et le calendrier" },
      { key: "D", text: "Utiliser la réserve de contingence et réduire le budget" },
    ],
    answer: "C",
    rationale: "Un plan de réponse à un risque identifié nécessite un change request pour ajuster les baselines. La réserve de gestion est pour les risques non identifiés."
  },
  {
    id: 69,
    question: "Un projet a des problèmes de communication avec le client. Comment soutenir l'engagement client ?",
    options: [
      { key: "A", text: "Évaluer les styles de communication et mentorat de l'équipe" },
      { key: "B", text: "Clarifier les rôles et responsabilités" },
      { key: "C", text: "Évaluer les compétences techniques" },
      { key: "D", text: "Mettre à jour l'indice de performance du calendrier (SPI)" },
    ],
    answer: "A",
    rationale: "Mentorer l'équipe sur la communication permet un engagement efficace avec le client. Les autres options n'adressent pas ce problème."
  },
  {
    id: 70,
    question: "Des membres se plaignent du comportement d'un collègue dans un dortoir. Que doit faire le chef de projet ?",
    options: [
      { key: "A", text: "Appeler une réunion pour discuter" },
      { key: "B", text: "Planifier une session de team-building" },
      { key: "C", text: "Déplacer le membre dans un autre dortoir" },
      { key: "D", text: "Revoir les normes d'équipe et en discuter" },
    ],
    answer: "D",
    rationale: "Revoir les normes d'équipe et clarifier les comportements attendus permet de gérer l'impact sur la cohésion."
  },
  {
    id: 71,
    question: "Un membre clé perd de l'intérêt pour le projet. Que doit faire le chef de projet ?",
    options: [
      { key: "A", text: "Escalader à RH" },
      { key: "B", text: "Remplacer le membre" },
      { key: "C", text: "Programmer une réunion pour identifier la cause" },
      { key: "D", text: "Augmenter salaire et bonus" },
    ],
    answer: "C",
    rationale: "Identifier la cause du désintérêt permet de réengager le membre de manière appropriée."
  },
  {
    id: 72,
    question: "Deux parties prenantes clés partent et leurs remplaçants ne sont pas encore identifiés. Quelle est la prochaine action ?",
    options: [
      { key: "A", text: "Mettre le projet en pause" },
      { key: "B", text: "Impliquer la direction" },
      { key: "C", text: "Obtenir le soutien du sponsor" },
      { key: "D", text: "Réaliser une analyse d'impact des retards possibles" },
    ],
    answer: "D",
    rationale: "L'analyse d'impact permet de comprendre les risques liés au départ des parties prenantes avant d'agir."
  },
  {
    id: 73,
    question: "Les retards sont liés à la démission d'un membre expérimenté. Que devait faire le chef de projet ?",
    options: [
      { key: "A", text: "Assurer une voie de promotion définie" },
      { key: "B", text: "Fournir un guidage continu" },
      { key: "C", text: "Identifier les risques de compétence et préparer un plan de mitigation" },
      { key: "D", text: "Programmer des formations périodiques" },
    ],
    answer: "C",
    rationale: "Identifier les risques de compétence à l'avance permet de réduire l'impact du départ d'un membre clé."
  },
  {
    id: 74,
    question: "Le même entrepreneur doit réparer ses erreurs de construction. Que doit faire le chef de projet ?",
    options: [
      { key: "A", text: "Négocier l'annulation et indemnisation" },
      { key: "B", text: "Négocier la réparation sur base d'un partage risque/récompense" },
      { key: "C", text: "Procéder sans mentionner le problème" },
      { key: "D", text: "Procéder et déduire le montant payé précédemment" },
    ],
    answer: "B",
    rationale: "Une approche collaborative encourage l'entrepreneur à corriger efficacement le problème tout en partageant les risques et bénéfices."
  },
  {
    id: 75,
    question: "Équipe distribuée avec préférences différentes pour les rapports. Que doit faire le chef de projet ?",
    options: [
      { key: "A", text: "Demander à l'équipe de respecter le plan de communication" },
      { key: "B", text: "Escalader au sponsor" },
      { key: "C", text: "Demander à l'équipe de résoudre entre eux" },
      { key: "D", text: "Changer le modèle de rapport" },
    ],
    answer: "A",
    rationale: "Respecter le plan de communication garantit cohérence et standardisation dans les rapports."
  },
  {
    id: 76,
    question: "Lors de la planification, le chef de projet a du mal à identifier les parties prenantes. Que doit-il faire ?",
    options: [
      { key: "A", text: "Réviser le plan d'engagement des parties prenantes" },
      { key: "B", text: "Informer le sponsor" },
      { key: "C", text: "Se référer au charter du projet" },
      { key: "D", text: "Réviser le document de portée" },
    ],
    answer: "C",
    rationale: "Le project charter contient les parties prenantes critiques et est la source principale pour les identifier."
  },
  {
    id: 77,
    question: "Deux fournisseurs ont des offres différentes. Comment évaluer la situation ?",
    options: [
      { key: "A", text: "Forcer B à garder le prix initial" },
      { key: "B", text: "Acheter chez A pour réduire les coûts" },
      { key: "C", text: "Utiliser les métriques de A pour négocier avec B" },
      { key: "D", text: "Vérifier les performances des deux fournisseurs et contrats" },
    ],
    answer: "D",
    rationale: "Évaluer la performance et la conformité aux contrats est essentiel avant de choisir un fournisseur."
  },
  {
    id: 78,
    question: "Le sponsor demande d'ajouter une nouvelle technologie après approbation du plan de changement. Que doit faire le chef de projet ?",
    options: [
      { key: "A", text: "Ajouter la technologie comme risque" },
      { key: "B", text: "Soumettre une demande de changement au CCB" },
      { key: "C", text: "Mettre à jour le planning et le budget" },
      { key: "D", text: "Demander au sponsor de procurer la technologie" },
    ],
    answer: "B",
    rationale: "Tout changement de portée doit passer par le processus formel de contrôle des changements."
  },
  {
    id: 79,
    question: "Lors d'une inspection finale, un défaut majeur est découvert dans un livrable. Que doit faire le chef de projet ?",
    options: [
      { key: "A", text: "Lancer une investigation qualité et corrective" },
      { key: "B", text: "Utiliser la réserve de contingence" },
      { key: "C", text: "Rencontrer le client pour expliquer le défaut" },
      { key: "D", text: "Envoyer une lettre d'excuse au client" },
    ],
    answer: "A",
    rationale: "Identifier et corriger le défaut rapidement est prioritaire pour la sécurité, la qualité et le succès du projet."
  },
  {
    id: 80,
    question: "L'équipe de direction demande une mise à jour ad-hoc. Certaines informations manquent. Que devait faire le chef de projet ?",
    options: [
      { key: "A", text: "Demander à l'équipe de vérifier le dossier" },
      { key: "B", text: "Planifier une réunion pour discuter" },
      { key: "C", text: "Inspecter le dossier avant de le partager" },
      { key: "D", text: "Mettre régulièrement à jour le dossier projet" },
    ],
    answer: "D",
    rationale: "Mettre à jour le dossier projet régulièrement garantit que toutes les informations pertinentes sont disponibles et à jour."
  },
  {
    id: 81,
    question: "Un projet de construction d'autoroute sur cinq ans est dans sa troisième année lorsqu'un groupe communautaire local se plaint du changement de tracé, désormais plus proche de leurs habitations. Que devait faire le chef de projet pour éviter ce conflit ?",
    options: [
      { key: "A", text: "Créer un plan de contingence pour atténuer l'opposition de la communauté" },
      { key: "B", text: "Mettre en place un comité interne de contrôle qualité" },
      { key: "C", text: "Organiser des réunions communautaires pour informer les parties prenantes des changements" },
      { key: "D", text: "Assurer la confidentialité totale de la planification du projet" }
    ],
    answer: "C",
    rationale: "Une communication ouverte avec les parties prenantes externes est essentielle. Les réunions communautaires permettent d’informer, de réduire les conflits et de renforcer la confiance."
  },
  {
    id: 82,
    question: "Un projet de logiciel financier débute dans un environnement très concurrentiel. Les exigences sont floues mais le client veut des résultats rapides. Quelle approche doit choisir le chef de projet ?",
    options: [
      { key: "A", text: "Répéter et affiner les phases du projet en plusieurs itérations" },
      { key: "B", text: "Suivre une séquence linéaire stricte" },
      { key: "C", text: "Adopter le changement sans structure précise" },
      { key: "D", text: "Livrer le projet par incréments successifs" }
    ],
    answer: "D",
    rationale: "La livraison incrémentale permet d’apporter rapidement de la valeur, d’obtenir des retours précoces et d’adapter les exigences progressivement."
  },
  {
    id: 83,
    question: "Un projet respecte le planning, le budget et le périmètre, mais la satisfaction client est faible après la livraison. Que doit faire le chef de projet pour éviter cela à l’avenir ?",
    options: [
      { key: "A", text: "Organiser une réunion de lancement plus détaillée" },
      { key: "B", text: "Renforcer l’automatisation des tests" },
      { key: "C", text: "Augmenter l'implication du PMO" },
      { key: "D", text: "Effectuer des revues périodiques avec le client" }
    ],
    answer: "D",
    rationale: "L’implication régulière du client garantit que le produit correspond réellement à ses attentes."
  },
  {
    id: 84,
    question: "Plusieurs problèmes imprévus impactent le coût et le planning, nécessitant une résolution immédiate. Comment le chef de projet doit-il communiquer ?",
    options: [
      { key: "A", text: "Mettre à jour uniquement le registre des problèmes" },
      { key: "B", text: "Maintenir les rapports mensuels prévus" },
      { key: "C", text: "Augmenter immédiatement la communication avec les parties prenantes" },
      { key: "D", text: "Réviser le plan de communication avant d’informer" }
    ],
    answer: "C",
    rationale: "Les problèmes critiques doivent être communiqués immédiatement, indépendamment du plan de communication initial."
  },
  {
    id: 85,
    question: "Un prototype reçoit de nombreuses plaintes clients malgré un plan d’action. Quelle est la prochaine étape ?",
    options: [
      { key: "A", text: "Récompenser les meilleurs éléments de l’équipe" },
      { key: "B", text: "Former les membres en difficulté" },
      { key: "C", text: "Réévaluer les indicateurs clés de performance (KPI)" },
      { key: "D", text: "Escalader le problème à la direction" }
    ],
    answer: "C",
    rationale: "En agile, les KPI doivent être régulièrement revus pour vérifier l’efficacité des actions mises en place."
  },
  {
    id: 86,
    question: "Lors de plusieurs réunions quotidiennes, un membre reste vague sur son travail. Que doit faire le chef de projet ?",
    options: [
      { key: "A", text: "Rencontrer le membre pour clarifier les attentes" },
      { key: "B", text: "Attendre la rétrospective" },
      { key: "C", text: "Soulever le problème devant toutes les parties prenantes" },
      { key: "D", text: "Analyser uniquement les risques projet" }
    ],
    answer: "A",
    rationale: "Une discussion directe permet de clarifier les attentes et d’identifier les obstacles éventuels."
  },
  {
    id: 87,
    question: "Un PMO passe d’un modèle prédictif à agile, mais son responsable résiste par manque de compétences. Que faire ?",
    options: [
      { key: "A", text: "Demander l’intervention de la direction" },
      { key: "B", text: "Ignorer la résistance" },
      { key: "C", text: "Imposer une nouvelle gouvernance" },
      { key: "D", text: "Mettre en place une formation agile pour tous" }
    ],
    answer: "D",
    rationale: "La formation réduit la peur de l’incompétence et favorise l’adhésion au changement."
  },
  {
    id: 88,
    question: "Une organisation acquiert un produit similaire en cours de projet. Quelle est la prochaine action ?",
    options: [
      { key: "A", text: "Évaluer la faisabilité avec le product owner" },
      { key: "B", text: "Continuer sans changement" },
      { key: "C", text: "Informer uniquement l’équipe" },
      { key: "D", text: "Arrêter le projet" }
    ],
    answer: "A",
    rationale: "Le product owner est responsable de l’alignement produit et doit être impliqué en priorité."
  },
  {
    id: 89,
    question: "Pourquoi organiser une rétrospective finale même si le projet est terminé ?",
    options: [
      { key: "A", text: "Améliorer la vélocité future" },
      { key: "B", text: "Promouvoir les membres" },
      { key: "C", text: "Capitaliser des leçons pour de futurs projets" },
      { key: "D", text: "Préparer la prochaine équipe" }
    ],
    answer: "C",
    rationale: "Les rétrospectives permettent de conserver des enseignements utiles pour l’avenir."
  },
  {
    id: 90,
    question: "Une équipe mondiale travaille sur plusieurs fuseaux horaires. Quelle est la première action du chef de projet ?",
    options: [
      { key: "A", text: "Développer un plan de gestion des communications" },
      { key: "B", text: "Imposer des réunions quotidiennes" },
      { key: "C", text: "Utiliser un tableau de tâches en ligne" },
      { key: "D", text: "Aligner les horaires de travail" }
    ],
    answer: "A",
    rationale: "Le plan de communication définit les besoins et canaux adaptés à une équipe distribuée."
  },
  {
    id: 91,
    question: "Un client demande une nouvelle fonctionnalité alors que le budget est strict. Que faire ?",
    options: [
      { key: "A", text: "Évaluer la fonctionnalité avec le client" },
      { key: "B", text: "Refuser immédiatement" },
      { key: "C", text: "Ajouter au backlog sans analyse" },
      { key: "D", text: "Reprioriser automatiquement le backlog" }
    ],
    answer: "A",
    rationale: "L’évaluation permet de décider en connaissance de cause tout en respectant les contraintes."
  },
  {
    id: 92,
    question: "Dans un projet agile distribué, certains membres participent peu aux réunions quotidiennes. Que faire ?",
    options: [
      { key: "A", text: "Demander pourquoi ils ne participent pas" },
      { key: "B", text: "Encourager et guider la participation" },
      { key: "C", text: "Forcer la participation individuelle" },
      { key: "D", text: "Laisser l’équipe gérer seule" }
    ],
    answer: "B",
    rationale: "Le leadership agile favorise l’engagement et la participation active."
  },
  {
    id: 93,
    question: "Un sponsor impose une date finale à une équipe agile. Comment réagir ?",
    options: [
      { key: "A", text: "Nommer un chef d’équipe" },
      { key: "B", text: "Faire intervenir un manager fonctionnel" },
      { key: "C", text: "Rappeler que l’équipe gère son travail" },
      { key: "D", text: "Imposer le nouveau planning" }
    ],
    answer: "C",
    rationale: "En agile, l’équipe est responsable de l’estimation et de la planification."
  },
  {
    id: 94,
    question: "Un sponsor remplace un expert métier en cours de projet. Que doit faire le chef de projet ?",
    options: [
      { key: "A", text: "Refuser le remplacement" },
      { key: "B", text: "Assurer un transfert de connaissances" },
      { key: "C", text: "S’appuyer uniquement sur la base documentaire" },
      { key: "D", text: "Escalader immédiatement" }
    ],
    answer: "B",
    rationale: "Le transfert de connaissances est essentiel pour éviter la perte d’expertise."
  },
  {
    id: 95,
    question: "Un membre veut quitter le projet à cause d’un conflit avec le leader technique. Que faire ?",
    options: [
      { key: "A", text: "Accepter la démission" },
      { key: "B", text: "Interroger uniquement le membre" },
      { key: "C", text: "Interroger uniquement le leader" },
      { key: "D", text: "Médiation entre les deux parties" }
    ],
    answer: "D",
    rationale: "La médiation permet de résoudre le conflit de manière équilibrée."
  },
  {
    id: 96,
    question: "Un nouveau chef de projet rejoint un projet agile avec de forts conflits internes. Que doit-il faire ?",
    options: [
      { key: "A", text: "Encourager les échanges lors des revues" },
      { key: "B", text: "Organiser une sortie d’équipe" },
      { key: "C", text: "Laisser l’équipe s’auto-organiser" },
      { key: "D", text: "Faire intervenir les managers" }
    ],
    answer: "A",
    rationale: "Le leadership serviteur favorise le dialogue et la résolution de conflits."
  },
  {
    id: 97,
    question: "Un projet reprend avec de fortes variances négatives. Que devait faire l’ancien chef de projet ? (Deux réponses)",
    options: [
      { key: "A", text: "Documenter les hypothèses dans la charte" },
      { key: "B", text: "Ajouter une réserve excessive" },
      { key: "C", text: "Identifier les risques majeurs tôt" },
      { key: "D", text: "Formaliser le transfert de projet" },
      { key: "E", text: "Renforcer la gouvernance" }
    ],
    answer: "A et C",
    rationale: "Des hypothèses claires et une identification précoce des risques évitent les dérives."
  },
  {
    id: 98,
    question: "Une organisation prévoit une nouvelle installation R&D sur plusieurs années. Quelle est la première action ?",
    options: [
      { key: "A", text: "Développer un plan de gestion du périmètre" },
      { key: "B", text: "Créer un business case" },
      { key: "C", text: "Planifier les ressources" },
      { key: "D", text: "Élaborer un plan de communication" }
    ],
    answer: "A",
    rationale: "Le périmètre définit les objectifs et limites du projet."
  },
  {
    id: 99,
    question: "Un product owner exige une fonctionnalité majeure très tard dans le projet. Que faire ?",
    options: [
      { key: "A", text: "Consulter uniquement l’équipe" },
      { key: "B", text: "Discuter avec le PO et les parties prenantes" },
      { key: "C", text: "Soumettre au CCB" },
      { key: "D", text: "Refuser immédiatement" }
    ],
    answer: "B",
    rationale: "Les décisions majeures doivent être collaboratives et basées sur une analyse d’impact."
  },
  {
    id: 100,
    question: "Un projet respecte toutes les contraintes mais le sponsor est insatisfait. Que devait faire le chef de projet ?",
    options: [
      { key: "A", text: "Multiplier les contrôles" },
      { key: "B", text: "Aligner uniquement les objectifs" },
      { key: "C", text: "Communiquer régulièrement avec le sponsor" },
      { key: "D", text: "Renforcer la gestion des risques" }
    ],
    answer: "C",
    rationale: "Une communication continue avec le sponsor permet d’aligner attentes et réalité."
  },
  {
    id: 101,
    question: "Des membres d’une équipe agile viennent de terminer une formation en présentiel sur des processus organisationnels critiques et complexes. Le lendemain, plusieurs membres disent avoir du mal à se souvenir de ce qu’ils ont appris. Une autre session est disponible la semaine suivante, mais l’équipe est déjà en retard sur des tâches critiques. Que doit faire le chef de projet ?",
    options: [
      { key: "A", text: "Demander aux membres de travailler en binôme pour partager les informations" },
      { key: "B", text: "Créer un radiateur d’informations avec les points clés de la formation" },
      { key: "C", text: "Inviter les membres à suivre de nouveau la formation" },
      { key: "D", text: "Rediriger les membres vers les notes de révision de la formation" }
    ],
    answer: "B",
    rationale: "Un radiateur d’informations permet un partage visuel, rapide et continu des connaissances, idéal en contexte agile avec des contraintes de temps."
  },
  {
    id: 102,
    question: "Un membre quitte un projet applicatif santé et un nouveau reprend ses tâches. Celui-ci s’inquiète car certaines parties n’ont pas été testées malgré une validation préalable. Que doit faire le chef de projet ?",
    options: [
      { key: "A", text: "Faire confiance à la validation du membre sortant" },
      { key: "B", text: "Revoir entièrement les parties non testées" },
      { key: "C", text: "Reporter les tests à une phase ultérieure" },
      { key: "D", text: "Exiger un document de transfert de connaissances" }
    ],
    answer: "D",
    rationale: "Un transfert de connaissances formalisé réduit les risques et permet au nouveau membre de comprendre l’état réel du projet."
  },
  {
    id: 103,
    question: "Un chef de projet forme une équipe dont les membres ne se connaissent pas et sont répartis dans plusieurs pays. Quelles deux actions doit-il entreprendre ?",
    options: [
      { key: "A", text: "Identifier les différences culturelles et zones de conflit potentielles" },
      { key: "B", text: "Relocaliser temporairement les membres" },
      { key: "C", text: "Organiser des sessions de team building virtuelles" },
      { key: "D", text: "Sélectionner uniquement des membres ayant déjà travaillé ensemble" },
      { key: "E", text: "Mettre en place un système de mentorat" }
    ],
    answer: "A et C",
    rationale: "Identifier les différences culturelles et renforcer la cohésion par des activités virtuelles favorise la collaboration."
  },
  {
    id: 104,
    question: "Lors d’un daily meeting, un développeur bloque sur des tests automatisés, menaçant l’objectif du sprint. Que doit faire le chef de projet ?",
    options: [
      { key: "A", text: "Réassigner le travail plus tard" },
      { key: "B", text: "Former immédiatement le développeur" },
      { key: "C", text: "Demander à l’ingénieur QA d’aider immédiatement" },
      { key: "D", text: "Reporter les tests" }
    ],
    answer: "C",
    rationale: "Une aide immédiate maximise les chances d’atteindre l’objectif du sprint."
  },
  {
    id: 105,
    question: "Un rapport destiné au CEO ne respecte pas le format demandé. Que devait faire le chef de projet ?",
    options: [
      { key: "A", text: "Demander le rapport plus tôt" },
      { key: "B", text: "Demander plus de détails au CEO" },
      { key: "C", text: "Utiliser une communication interactive pour confirmer la compréhension" },
      { key: "D", text: "Modifier le plan de communication" }
    ],
    answer: "C",
    rationale: "La communication interactive garantit que le message est compris correctement."
  },
  {
    id: 106,
    question: "Avant le lancement d’un projet avec un bureau à l’étranger, quel doit être l’objectif principal de la réunion initiale ?",
    options: [
      { key: "A", text: "Présenter la valeur stratégique et les attentes" },
      { key: "B", text: "Choisir les stratégies d’approvisionnement" },
      { key: "C", text: "Former à la communication interne" },
      { key: "D", text: "Nommer un expert métier" }
    ],
    answer: "A",
    rationale: "Aligner toutes les parties prenantes avant le démarrage est essentiel."
  },
  {
    id: 107,
    question: "Dans une organisation sans pratiques formelles, certains refusent de prendre des responsabilités. Que doit faire le chef de projet ?",
    options: [
      { key: "A", text: "Rencontrer les membres individuellement" },
      { key: "B", text: "Créer un document explicatif" },
      { key: "C", text: "Convaincre la direction" },
      { key: "D", text: "Organiser une réunion collaborative de résolution de problèmes" }
    ],
    answer: "D",
    rationale: "La résolution collaborative favorise l’adhésion et l’engagement."
  },
  {
    id: 108,
    question: "Quelle modification favorise une meilleure adoption de l’agilité pour la planification des ressources ?",
    options: [
      { key: "A", text: "Demander des spécialistes à la demande" },
      { key: "B", text: "Former des équipes avec généralistes et spécialistes" },
      { key: "C", text: "Réduire l’implication du client" },
      { key: "D", text: "Décider uniquement côté PO" }
    ],
    answer: "B",
    rationale: "Les équipes agiles doivent être transverses et adaptables."
  },
  {
    id: 109,
    question: "Un retard de livraison dû à la douane affecte le chemin critique. Que faire en premier ?",
    options: [
      { key: "A", text: "Accélérer le dédouanement" },
      { key: "B", text: "Revoir le registre des risques et appliquer la réponse prévue" },
      { key: "C", text: "Ajouter le problème aux documents d’appel d’offres" },
      { key: "D", text: "Faire payer le fournisseur" }
    ],
    answer: "B",
    rationale: "Les réponses aux risques doivent être appliquées en priorité."
  },
  {
    id: 110,
    question: "Un conflit apparaît entre une équipe onsite et offshore au démarrage du projet. Que faire d’abord ?",
    options: [
      { key: "A", text: "Communiquer le périmètre" },
      { key: "B", text: "Organiser une réunion en présentiel" },
      { key: "C", text: "Identifier le conflit dans le registre des risques" },
      { key: "D", text: "L’enregistrer comme problème" }
    ],
    answer: "C",
    rationale: "Un conflit émergent est un risque qu’il faut anticiper."
  },
  {
    id: 111,
    question: "Un membre initialement dédié est réaffecté à un autre projet. Que faire ?",
    options: [
      { key: "A", text: "Discuter avec le manager fonctionnel" },
      { key: "B", text: "L’ajouter au registre des risques" },
      { key: "C", text: "Former toute l’équipe" },
      { key: "D", text: "Escalader au sponsor" }
    ],
    answer: "A",
    rationale: "Il faut d’abord comprendre l’impact et les raisons du changement."
  },
  {
    id: 112,
    question: "Une équipe a peur de faire des erreurs et cherche une reconnaissance individuelle. Comment améliorer la productivité ?",
    options: [
      { key: "A", text: "Suivre la performance individuelle" },
      { key: "B", text: "Favoriser la collaboration et les objectifs communs" },
      { key: "C", text: "Renforcer le contrôle individuel" },
      { key: "D", text: "Remplacer certains membres" }
    ],
    answer: "B",
    rationale: "La collaboration et les récompenses collectives améliorent la performance."
  },
  {
    id: 113,
    question: "Un projet est impacté par des changements réglementaires mais reste prioritaire. Quelle est la meilleure action ?",
    options: [
      { key: "A", text: "Arrêter le projet" },
      { key: "B", text: "Analyser les impacts et proposer un plan réaliste" },
      { key: "C", text: "Continuer sans ajustement" },
      { key: "D", text: "Négocier avec le gouvernement" }
    ],
    answer: "B",
    rationale: "Il faut se conformer aux nouvelles règles et ajuster le plan."
  },
  {
    id: 114,
    question: "Un écart apparaît entre les prévisions et le reporting à cause d’une nouvelle technique d’estimation. Que fallait-il faire ?",
    options: [
      { key: "A", text: "Revenir à l’ancienne méthode" },
      { key: "B", text: "Former le program manager" },
      { key: "C", text: "Aligner et partager les artefacts mis à jour" },
      { key: "D", text: "Vérifier les compétences du manager" }
    ],
    answer: "C",
    rationale: "Les artefacts doivent refléter la méthode d’estimation utilisée."
  },
  {
    id: 115,
    question: "Un retard de 5 mois est identifié sur un projet de remplacement d’équipements. Comment gérer les risques ?",
    options: [
      { key: "A", text: "Analyser l’impact métier et reprioriser" },
      { key: "B", text: "Négocier avec les fournisseurs" },
      { key: "C", text: "Commander immédiatement de nouveaux équipements" },
      { key: "D", text: "Accepter le retard" }
    ],
    answer: "A",
    rationale: "L’analyse d’impact permet une réponse aux risques adaptée."
  },
  {
    id: 116,
    question: "Un stakeholder se plaint de l’absence de documentation lors d’une démo MVP. Que faire ? (Choisir deux)",
    options: [
      { key: "A", text: "Dire que ce n’est pas agile" },
      { key: "B", text: "Rediriger vers le PO" },
      { key: "C", text: "Clarifier le besoin" },
      { key: "D", text: "Reconnaître la préoccupation" },
      { key: "E", text: "Fournir rapidement la documentation" }
    ],
    answer: "D et E",
    rationale: "Reconnaître le besoin et fournir la documentation renforce la satisfaction."
  },
  {
    id: 117,
    question: "Un développeur se plaint des cérémonies agiles. Que doit faire un leader serviteur ?",
    options: [
      { key: "A", text: "Demander comment gagner du temps" },
      { key: "B", text: "Réduire les interactions" },
      { key: "C", text: "Expliquer les radiateurs d’informations" },
      { key: "D", text: "Reconnaître la frustration et expliquer les bénéfices" }
    ],
    answer: "D",
    rationale: "Un leader serviteur accompagne et explique la valeur des pratiques."
  },
  {
    id: 118,
    question: "Un nouveau membre interrompt un daily pour parler du passé. Que faire ?",
    options: [
      { key: "A", text: "Le diriger vers le plan projet" },
      { key: "B", text: "Expliquer que ce n’est pas le bon moment" },
      { key: "C", text: "L’exclure de la réunion" },
      { key: "D", text: "Demander à tous de répondre" }
    ],
    answer: "B",
    rationale: "Le daily doit rester court et ciblé."
  },
  {
    id: 119,
    question: "Un prototype ne peut être livré à temps à cause de la complexité. Que faire ? (Choisir deux)",
    options: [
      { key: "A", text: "Évaluer l’impact sur le projet" },
      { key: "B", text: "Changer de développeur" },
      { key: "C", text: "Augmenter le budget" },
      { key: "D", text: "Ajouter des ressources" },
      { key: "E", text: "Prioriser les exigences clés" }
    ],
    answer: "A et E",
    rationale: "Comprendre l’impact et prioriser permet de livrer de la valeur."
  },
  {
    id: 120,
    question: "Un chef de projet ne sait pas quelles réglementations s’appliquent. Que doit-il faire ?",
    options: [
      { key: "A", text: "Demander à un supérieur" },
      { key: "B", text: "Consulter le PMO" },
      { key: "C", text: "Consulter les parties prenantes et experts métier" },
      { key: "D", text: "Demander une confirmation écrite du client" }
    ],
    answer: "C",
    rationale: "Le jugement d’experts est la meilleure approche."
  },
  {
    id: 121,
    question: "Pendant l’exécution du projet, un intervenant clé est remplacé par un nouveau membre disposant d’un pouvoir d’approbation. Ce dernier refuse les livrables car il n’a pas été informé des changements. Que devait faire le chef de projet pour éviter ce problème ?",
    options: [
      { key: "A", text: "Organiser une réunion avec le sponsor avant l’exécution" },
      { key: "B", text: "Mettre à jour le registre des parties prenantes" },
      { key: "C", text: "Demander à l’ancien intervenant de faire une passation" },
      { key: "D", text: "Mettre à jour la charte du projet pendant l’exécution" }
    ],
    answer: "B",
    rationale: "La mise à jour du registre des parties prenantes garantit une communication continue avec tous les acteurs clés."
  },
  {
    id: 122,
    question: "Un chef de projet s’inquiète de la valeur métier car le Product Owner n’est pas engagé. Que doit-il faire ?",
    options: [
      { key: "A", text: "Mettre à jour le plan de communication" },
      { key: "B", text: "Mettre à jour le plan d’engagement des parties prenantes" },
      { key: "C", text: "Mettre à jour le plan de gestion des ressources" },
      { key: "D", text: "Mettre à jour le plan de gestion des risques" }
    ],
    answer: "B",
    rationale: "Le désengagement d’un Product Owner impacte directement la valeur livrée."
  },
  {
    id: 123,
    question: "Un chef de projet gère une équipe mondiale. Quelle est la prochaine action clé à mener ?",
    options: [
      { key: "A", text: "Confier la technique à l’équipe IT locale" },
      { key: "B", text: "Analyser les CV des membres" },
      { key: "C", text: "Établir une charte d’équipe" },
      { key: "D", text: "Organiser des réunions hebdomadaires en présentiel" }
    ],
    answer: "C",
    rationale: "La charte d’équipe définit les règles, valeurs et modes de collaboration."
  },
  {
    id: 124,
    question: "Un projet produit passe d’une approche prédictive à itérative. Que doit faire le chef de projet ?",
    options: [
      { key: "A", text: "Organiser un atelier de planification des itérations" },
      { key: "B", text: "Créer un site projet" },
      { key: "C", text: "Analyser les user stories" },
      { key: "D", text: "Définir le nombre d’itérations seul" }
    ],
    answer: "A",
    rationale: "Un atelier permet d’aligner l’équipe sur la nouvelle approche."
  },
  {
    id: 125,
    question: "Un projet similaire a été réalisé il y a 3 ans. Quelle méthode garantit l’estimation la plus fiable ?",
    options: [
      { key: "A", text: "Estimation paramétrique" },
      { key: "B", text: "Facteur d’ajustement annuel" },
      { key: "C", text: "Estimation ascendante basée sur les coûts réels" },
      { key: "D", text: "Utilisation des prix du marché" }
    ],
    answer: "C",
    rationale: "L’estimation ascendante est la plus précise lorsqu’on dispose de données historiques."
  },
  {
    id: 126,
    question: "Quels éléments garantissent des user stories bien rédigées ? (Choisir deux)",
    options: [
      { key: "A", text: "Indépendantes, négociables, estimables" },
      { key: "B", text: "Applicables et réplicables" },
      { key: "C", text: "Subdivisibles" },
      { key: "D", text: "Concises et exécutables" },
      { key: "E", text: "À valeur, petites et testables" }
    ],
    answer: "A et E",
    rationale: "Les user stories efficaces suivent le principe INVEST."
  },
  {
    id: 127,
    question: "Un projet peut désormais être terminé en 3 semaines au lieu de 6. Que doit faire le chef de projet ?",
    options: [
      { key: "A", text: "Consulter les parties prenantes" },
      { key: "B", text: "Étendre le périmètre" },
      { key: "C", text: "Maintenir le planning initial" },
      { key: "D", text: "Réaffecter l’équipe" }
    ],
    answer: "A",
    rationale: "Les décisions majeures doivent être prises avec les parties prenantes."
  },
  {
    id: 128,
    question: "Lors d’une rétrospective, un conflit apparaît. Quelle est la première action ?",
    options: [
      { key: "A", text: "Revoir le backlog" },
      { key: "B", text: "Collecter toutes les informations" },
      { key: "C", text: "Convoquer certains membres" },
      { key: "D", text: "Parler au PO et Scrum Master" }
    ],
    answer: "B",
    rationale: "Comprendre la cause racine est essentiel avant toute action."
  },
  {
    id: 129,
    question: "40 % des livrables contiennent des défauts. Quelle est la première action ?",
    options: [
      { key: "A", text: "Évaluer le coût" },
      { key: "B", text: "Revoir le plan qualité" },
      { key: "C", text: "Analyser les user stories" },
      { key: "D", text: "Effectuer une analyse des causes racines" }
    ],
    answer: "D",
    rationale: "L’analyse des causes racines permet de prévenir les défauts futurs."
  },
  {
    id: 130,
    question: "Comment vérifier que la valeur métier prévue a été livrée ?",
    options: [
      { key: "A", text: "Comparer les spécifications techniques" },
      { key: "B", text: "Consulter l’équipe" },
      { key: "C", text: "Revoir la charte et le business case" },
      { key: "D", text: "Vérifier délais et budget" }
    ],
    answer: "C",
    rationale: "La valeur métier est définie dans la charte et le business case."
  },
  {
    id: 131,
    question: "Un intervenant veut modifier l’ordre des livrables en agile. Que faire ?",
    options: [
      { key: "A", text: "L’inclure dans la planification du sprint" },
      { key: "B", text: "Analyser les KPI" },
      { key: "C", text: "Passer par le CCB" },
      { key: "D", text: "Refuser le changement" }
    ],
    answer: "A",
    rationale: "En agile, les priorités évoluent via la planification."
  },
  {
    id: 132,
    question: "Des membres transférés vers l’agile se plaignent de la formation. Que faire ?",
    options: [
      { key: "A", text: "Ignorer les plaintes" },
      { key: "B", text: "Organiser une réunion d’échange" },
      { key: "C", text: "Supprimer la formation" },
      { key: "D", text: "Envoyer une note autoritaire" }
    ],
    answer: "B",
    rationale: "La communication ouverte favorise l’adhésion."
  },
  {
    id: 133,
    question: "Des tâches redondantes apparaissent après la création du WBS. Que fallait-il faire ?",
    options: [
      { key: "A", text: "Consulter des experts" },
      { key: "B", text: "Organiser des sessions de planification collective" },
      { key: "C", text: "Améliorer la communication" },
      { key: "D", text: "Créer une matrice RACI" }
    ],
    answer: "B",
    rationale: "Les sessions collectives réduisent les doublons."
  },
  {
    id: 134,
    question: "Un co-sponsor demande une nouvelle fonctionnalité en cours de projet. Que faire ?",
    options: [
      { key: "A", text: "Mettre à jour les risques" },
      { key: "B", text: "Finir le projet puis ajouter" },
      { key: "C", text: "Appliquer le contrôle intégré des changements" },
      { key: "D", text: "Refuser la demande" }
    ],
    answer: "C",
    rationale: "Toute modification doit suivre le processus de changement."
  },
  {
    id: 135,
    question: "Quelles actions doivent être faites au début pour mesurer la performance ? (Choisir deux)",
    options: [
      { key: "A", text: "Valider les paramètres avec les parties prenantes" },
      { key: "B", text: "Tenir des réunions régulières" },
      { key: "C", text: "Définir les exigences de suivi" },
      { key: "D", text: "Auditer l’administration" },
      { key: "E", text: "Simuler les performances" }
    ],
    answer: "A et C",
    rationale: "Les métriques doivent être validées et partagées dès le départ."
  },
  {
    id: 136,
    question: "Quel est le principal risque si des parties prenantes manquent une analyse stratégique ?",
    options: [
      { key: "A", text: "Retard d’approbation" },
      { key: "B", text: "Insatisfaction" },
      { key: "C", text: "Conflits" },
      { key: "D", text: "Incohérence sur les bénéfices" }
    ],
    answer: "D",
    rationale: "Une vision partielle entraîne un désalignement."
  },
  {
    id: 137,
    question: "Un nouveau chef de projet arrive après des tensions. Quelle approche adopter ?",
    options: [
      { key: "A", text: "Imposer une nouvelle organisation" },
      { key: "B", text: "Servir l’équipe immédiatement" },
      { key: "C", text: "Observer et comprendre la culture" },
      { key: "D", text: "Créer des rapports de suivi" }
    ],
    answer: "C",
    rationale: "Comprendre avant d’agir permet d’instaurer la confiance."
  },
  {
    id: 138,
    question: "Un intervenant externe a un fort pouvoir de décision. Quelle approche adopter ?",
    options: [
      { key: "A", text: "Suivre les plans de communication et d’engagement" },
      { key: "B", text: "Demander des retours fréquents" },
      { key: "C", text: "L’ajouter aux risques" },
      { key: "D", text: "Partager uniquement les bénéfices" }
    ],
    answer: "A",
    rationale: "Une gestion structurée des parties prenantes est essentielle."
  },
  {
    id: 139,
    question: "Un intervenant est conscient du projet mais opposé aux résultats. Quel est son type ?",
    options: [
      { key: "A", text: "Résistant" },
      { key: "B", text: "Leader" },
      { key: "C", text: "Neutre" },
      { key: "D", text: "Soutenant" }
    ],
    answer: "A",
    rationale: "Il est informé mais non favorable."
  },
  {
    id: 140,
    question: "Un conflit est signalé entre deux membres expérimentés. Que faire en réunion ?",
    options: [
      { key: "A", text: "Trouver une solution ensemble" },
      { key: "B", text: "Imposer une décision" },
      { key: "C", text: "Séparer les membres" },
      { key: "D", text: "Chercher un coupable" }
    ],
    answer: "A",
    rationale: "La résolution collaborative renforce l’équipe."
  },
  {
    id: 141,
    question: "Une équipe projet répartie dans trois pays différents a du mal à organiser des réunions. Les membres ne comprennent pas clairement les exigences et ont du mal à obtenir des réponses à leurs questions. Que faut-il faire pour augmenter les chances de succès du projet ?",
    options: [
      { key: "A", text: "Travailler de manière indépendante jusqu’à l’intégration finale" },
      { key: "B", text: "Revoir le plan de gestion des communications et augmenter le partage d’informations" },
      { key: "C", text: "Augmenter la fréquence des réunions d’équipe" },
      { key: "D", text: "Transmettre les questions aux responsables fonctionnels" }
    ],
    answer: "B",
    rationale: "Pour des équipes virtuelles, une communication structurée et documentée est essentielle afin d’assurer la compréhension des exigences."
  },
  {
    id: 142,
    question: "Un backlog agile contient des exigences avec ROI et des risques identifiés. Quel doit être l’ordre de priorité du backlog ajusté au risque ?",
    options: [
      { key: "A", text: "Exigence 3, Exigence 1, Exigence 2, Risque 3" },
      { key: "B", text: "Risque 3, Risque 1, Risque 2, Exigence 3, Exigence 1, Exigence 2" },
      { key: "C", text: "Exigence 3, Risque 3, Exigence 1, Exigence 2, Risque 2" },
      { key: "D", text: "Exigence 3, Exigence 1, Risque 3, Exigence 2, Risque 1, Risque 2" }
    ],
    answer: "D",
    rationale: "La priorisation doit se faire selon la valeur monétaire attendue (ROI et EMV)."
  },
  {
    id: 143,
    question: "Un membre clé accuse publiquement un autre membre de parler négativement de lui et menace de quitter le projet. Que doit faire le chef de projet en premier ?",
    options: [
      { key: "A", text: "Organiser une réunion d’équipe" },
      { key: "B", text: "Rencontrer le membre accusé pour comprendre sa version" },
      { key: "C", text: "Reporter la résolution du conflit" },
      { key: "D", text: "Retirer un des deux membres du projet" }
    ],
    answer: "B",
    rationale: "La résolution de conflit commence par la compréhension des faits auprès des parties concernées."
  },
  {
    id: 144,
    question: "Un chef de projet agile constate que les daily stand-ups ne sont pas productifs. Que doit-il faire ?",
    options: [
      { key: "A", text: "Analyser la dynamique, supprimer les obstacles et fournir du feedback" },
      { key: "B", text: "Demander des comptes rendus écrits" },
      { key: "C", text: "Assister à toutes les réunions quotidiennes" },
      { key: "D", text: "Déléguer l’animation au Product Owner" }
    ],
    answer: "A",
    rationale: "Le chef de projet agile agit comme un servant leader en aidant l’équipe à s’améliorer."
  },
  {
    id: 145,
    question: "Des fonctionnalités importantes ont été retirées du périmètre contractuel pour réduire les coûts. Que doit faire le chef de projet ?",
    options: [
      { key: "A", text: "Escalader immédiatement au sponsor" },
      { key: "B", text: "Négocier avec le client pour inclure les fonctionnalités manquantes" },
      { key: "C", text: "Continuer le projet tel quel" },
      { key: "D", text: "Documenter le problème dans les leçons apprises" }
    ],
    answer: "B",
    rationale: "La négociation proactive avec le client permet d’assurer la livraison de la valeur attendue."
  },
  {
    id: 146,
    question: "Lors d’un daily stand-up, l’équipe constate un désaccord sur les priorités. Que doit faire le chef de projet ?",
    options: [
      { key: "A", text: "Planifier une revue d’itération" },
      { key: "B", text: "Clarifier les priorités avec l’équipe et le Product Owner" },
      { key: "C", text: "Demander au sponsor de définir les priorités" },
      { key: "D", text: "Définir seul les priorités" }
    ],
    answer: "B",
    rationale: "Le Product Owner est responsable de la priorisation du backlog en agile."
  },
  {
    id: 147,
    question: "Une équipe passe d’une approche prédictive à agile. Quels sont les deux obstacles les plus probables ?",
    options: [
      { key: "A", text: "Autonomie totale accordée par la direction" },
      { key: "B", text: "Contrôle continu de la direction sur les livraisons" },
      { key: "C", text: "Volonté d’apprentissage de la direction" },
      { key: "D", text: "Manque de soutien pour l’autonomisation de l’équipe" },
      { key: "E", text: "Maintien du niveau de performance" }
    ],
    answer: "B et D",
    rationale: "La culture command-and-control et le manque d’autonomie freinent l’agilité."
  },
  {
    id: 148,
    question: "Un rapport montre que plusieurs contrats ne sont pas alignés avec les objectifs de l’entreprise. Quelle est la meilleure action ?",
    options: [
      { key: "A", text: "Conserver les contrats" },
      { key: "B", text: "Recommander la résiliation des contrats non alignés" },
      { key: "C", text: "Demander au sponsor de les réviser" },
      { key: "D", text: "Demander au client de les modifier" }
    ],
    answer: "B",
    rationale: "Les contrats non alignés gaspillent des ressources et nuisent aux objectifs."
  },
  {
    id: 149,
    question: "Des parties prenantes ont des attentes différentes et une forte influence. Que doit faire le chef de projet ?",
    options: [
      { key: "A", text: "Limiter leur influence" },
      { key: "B", text: "Imposer les attentes des plus influentes" },
      { key: "C", text: "Recueillir et négocier les exigences selon leur influence" },
      { key: "D", text: "Appliquer toutes les attentes" }
    ],
    answer: "C",
    rationale: "La négociation permet d’aligner les attentes avec les objectifs du projet."
  },
  {
    id: 150,
    question: "Un client donne des ordres directs aux sous-traitants. Que doit faire le chef de projet ?",
    options: [
      { key: "A", text: "Informer l’équipe" },
      { key: "B", text: "Inviter le client aux réunions" },
      { key: "C", text: "Demander à l’équipe d’éviter les conflits" },
      { key: "D", text: "Demander au client de passer par le chef de projet" }
    ],
    answer: "D",
    rationale: "Une chaîne de communication claire évite les conflits et les dérives."
  },
  {
    id: 151,
    question: "Un projet ferroviaire à grande échelle nécessite un partage équilibré des risques. Quelles techniques utiliser ?",
    options: [
      { key: "A", text: "Prix fixe par incréments" },
      { key: "B", text: "Durée maximale imposée" },
      { key: "C", text: "Option d’annulation anticipée" },
      { key: "D", text: "Périmètre dynamique" },
      { key: "E", text: "Temps et matériel progressifs" }
    ],
    answer: "A et E",
    rationale: "Ces contrats répartissent équitablement les risques entre les parties."
  },
  {
    id: 152,
    question: "Une entreprise annonce des licenciements imminents. Le moral de l’équipe chute. Que faire ?",
    options: [
      { key: "A", text: "Remplacer les membres peu performants" },
      { key: "B", text: "Communiquer régulièrement et avec transparence" },
      { key: "C", text: "Garder le silence" },
      { key: "D", text: "Garantir qu’il n’y aura aucun licenciement" }
    ],
    answer: "B",
    rationale: "La transparence et l’empathie renforcent la confiance et le moral."
  },
  {
    id: 153,
    question: "Une équipe internationale virtuelle démarre un projet. Que doit faire le chef de projet pour une communication efficace ?",
    options: [
      { key: "A", text: "Étudier l’impact des différences culturelles" },
      { key: "B", text: "Utiliser uniquement des emails" },
      { key: "C", text: "Créer un espace de stockage partagé" },
      { key: "D", text: "Nommer un responsable communication" }
    ],
    answer: "A",
    rationale: "La compréhension culturelle est essentielle à une communication efficace."
  },
  {
    id: 154,
    question: "Un client veut livrer deux modules rapidement sur cinq prévus. Que doit faire le chef de projet ?",
    options: [
      { key: "A", text: "Organiser un brainstorming" },
      { key: "B", text: "Utiliser la technique du groupe nominal" },
      { key: "C", text: "Organiser une réunion de planification de release" },
      { key: "D", text: "Créer des prototypes" }
    ],
    answer: "C",
    rationale: "La planification de release permet de re-prioriser efficacement."
  },
  {
    id: 155,
    question: "Un livrable intermédiaire est rejeté par le client. Que faire en premier ?",
    options: [
      { key: "A", text: "Vérifier les critères d’acceptation" },
      { key: "B", text: "Reprendre le livrable" },
      { key: "C", text: "Créer un plan d’amélioration" },
      { key: "D", text: "Documenter dans les leçons apprises" }
    ],
    answer: "A",
    rationale: "La validation du périmètre repose sur les critères d’acceptation."
  },
  {
    id: 156,
    question: "Des ressources vont être retirées du projet. Quelle est la meilleure action immédiate ?",
    options: [
      { key: "A", text: "Informer les parties prenantes" },
      { key: "B", text: "Attendre la prochaine revue" },
      { key: "C", text: "Mettre à jour le registre des risques" },
      { key: "D", text: "Identifier les ressources critiques et demander un lissage" }
    ],
    answer: "D",
    rationale: "Le lissage des ressources permet d’ajuster le planning efficacement."
  },
  {
    id: 157,
    question: "Un rapport de statut a été envoyé à des personnes non concernées. Que faire ?",
    options: [
      { key: "A", text: "Mettre à jour le plan de communication" },
      { key: "B", text: "Mettre à jour le planning" },
      { key: "C", text: "Mettre à jour la matrice RACI" },
      { key: "D", text: "Mettre à jour le plan de ressources" }
    ],
    answer: "A",
    rationale: "Le plan de communication définit les destinataires des rapports."
  },
  {
    id: 158,
    question: "Le client ne fournit pas de feedback dans un projet adaptatif. Quelle en est la cause probable ?",
    options: [
      { key: "A", text: "Manque d’expérience de l’équipe" },
      { key: "B", text: "Client non concerné" },
      { key: "C", text: "Client ne comprend pas son rôle" },
      { key: "D", text: "Absence de prototype" }
    ],
    answer: "C",
    rationale: "La participation active du client est essentielle en agile."
  },
  {
    id: 159,
    question: "Une équipe montre une faible motivation et efficacité. Quelle action entreprendre ?",
    options: [
      { key: "A", text: "Évaluer les compétences" },
      { key: "B", text: "Organiser un team building" },
      { key: "C", text: "Supprimer les obstacles" },
      { key: "D", text: "Évaluer la satisfaction de l’équipe" }
    ],
    answer: "D",
    rationale: "Identifier la cause est nécessaire avant toute action corrective."
  },
  {
    id: 160,
    question: "Le sponsor se plaint de ne pas recevoir les bons rapports. Que doit faire le chef de projet ?",
    options: [
      { key: "A", text: "Envoyer un résumé directement au sponsor" },
      { key: "B", text: "Organiser une réunion avec le sponsor et le contact" },
      { key: "C", text: "Expliquer la fréquence des rapports" },
      { key: "D", text: "Donner accès au tableau de bord" }
    ],
    answer: "B",
    rationale: "La clarification conjointe comble les lacunes de communication."
  },
  {
    id: 161,
    question: "Un chef de projet se rend compte qu’un e-mail destiné à un seul membre de l’équipe a été envoyé par erreur à toute l’équipe projet mondiale. L’e-mail contient des critiques importantes concernant un incident récent. Que doit faire le chef de projet ensuite ?",
    options: [
      { key: "A", text: "Ignorer l’erreur et supposer que l’équipe comprendra" },
      { key: "B", text: "Reconnaître l’erreur et présenter des excuses pour les conséquences involontaires" },
      { key: "C", text: "Demander aux destinataires de supprimer l’e-mail sans le lire" },
      { key: "D", text: "Envoyer un message privé au membre concerné pour s’excuser" }
    ],
    correctAnswer: "B",
    explanation: "Assumer la responsabilité, reconnaître l’erreur et s’excuser favorise la transparence, la confiance et démontre un leadership éthique."
  },
  {
    id: 162,
    question: "Une partie du projet a été livrée comme prévu, mais certaines exigences restantes sont floues et risquent d’impacter le délai final. Que doit faire le chef de projet ?",
    options: [
      { key: "A", text: "Prioriser les fonctionnalités les plus importantes et clarifier les exigences floues" },
      { key: "B", text: "Initier une demande de changement pour modifier le périmètre" },
      { key: "C", text: "Escalader le problème au comité de pilotage" },
      { key: "D", text: "Ajouter des ressources pour tout livrer à temps" }
    ],
    correctAnswer: "A",
    explanation: "La priorisation permet de livrer le maximum de valeur tout en respectant les délais malgré des exigences imprécises."
  },
  {
    id: 163,
    question: "Deux équipes estiment les user stories pour un projet agile. Quelle est la bonne approche pour confirmer une date de livraison ? (Choisissez deux réponses)",
    options: [
      { key: "A", text: "Expliquer que le projet prendra 10 sprints" },
      { key: "B", text: "Indiquer que l’équipe qui réalise le travail doit estimer" },
      { key: "C", text: "Organiser une réunion entre les équipes pour aligner les méthodes d’estimation" },
      { key: "D", text: "Imposer les estimations déjà réalisées" },
      { key: "E", text: "Forcer un planning sur cinq sprints" }
    ],
    correctAnswer: "B et C",
    explanation: "Les story points sont spécifiques à chaque équipe. L’alignement et l’auto-estimation sont essentiels."
  },
  {
    id: 164,
    question: "Les estimations initiales d’un projet étaient irréalistes. En attendant l’approbation de nouvelles exigences, que doit faire le chef de projet ?",
    options: [
      { key: "A", text: "Reprioriser les livrables pour livrer par incréments" },
      { key: "B", text: "Diviser l’équipe en sous-équipes" },
      { key: "C", text: "Demander aux membres de travailler en heures supplémentaires" },
      { key: "D", text: "Mettre à jour immédiatement la ligne de base du planning" }
    ],
    correctAnswer: "A",
    explanation: "La livraison incrémentale permet de continuer à produire de la valeur pendant les ajustements."
  },
  {
    id: 165,
    question: "L’équipe souhaite modifier le WBS sans changer le périmètre. Que doit faire le chef de projet ?",
    options: [
      { key: "A", text: "Décider seul des changements" },
      { key: "B", text: "Refuser et escalader au sponsor" },
      { key: "C", text: "Interdire toute modification" },
      { key: "D", text: "Discuter avec l’équipe et décider par consensus" }
    ],
    correctAnswer: "D",
    explanation: "L’implication de l’équipe renforce l’engagement et améliore la performance collective."
  },
  {
    id: 166,
    question: "Dans un projet hybride avec des équipes séparées pour la conception et l’exécution, que doit faire le chef de projet ?",
    options: [
      { key: "A", text: "Créer un référentiel centralisé de documentation" },
      { key: "B", text: "Fusionner les équipes" },
      { key: "C", text: "Informer le PMO que l’approche est risquée" },
      { key: "D", text: "Former l’équipe à un nouveau framework" }
    ],
    correctAnswer: "A",
    explanation: "Un référentiel partagé favorise la collaboration et le transfert de connaissances."
  },
  {
    id: 167,
    question: "Un nouveau chef de projet est submergé par le nombre de parties prenantes. Que doit-il faire en premier ?",
    options: [
      { key: "A", text: "Réaliser une analyse des parties prenantes" },
      { key: "B", text: "Mettre à jour le plan de communication" },
      { key: "C", text: "Classer les parties prenantes" },
      { key: "D", text: "Prioriser selon le registre" }
    ],
    correctAnswer: "A",
    explanation: "L’analyse permet de comprendre l’influence et l’intérêt de chaque partie prenante."
  },
  {
    id: 168,
    question: "Un client se montre agressif envers l’équipe lors de visites hebdomadaires. Que doit faire le chef de projet ?",
    options: [
      { key: "A", text: "Envoyer une lettre de plainte" },
      { key: "B", text: "Attendre puis se plaindre" },
      { key: "C", text: "Informer la direction" },
      { key: "D", text: "Comprendre la situation en parlant aux parties concernées" }
    ],
    correctAnswer: "D",
    explanation: "La résolution de conflit commence par la compréhension et l’analyse des faits."
  },
  {
    id: 169,
    question: "Certaines exigences des parties prenantes sont contradictoires. Que doit faire le chef de projet ?",
    options: [
      { key: "A", text: "Aider les parties prenantes à trouver un consensus" },
      { key: "B", text: "Suivre l’avis du consultant technique" },
      { key: "C", text: "Escalader au sponsor" },
      { key: "D", text: "Réunir uniquement les parties en conflit" }
    ],
    correctAnswer: "A",
    explanation: "Le consensus garantit un périmètre clair et partagé."
  },
  {
    id: 170,
    question: "Dans un environnement agile incertain, comment suivre efficacement les artefacts ? (Choisissez deux réponses)",
    options: [
      { key: "A", text: "Mettre à jour fréquemment les artefacts" },
      { key: "B", text: "Définir la technologie dans le PMP" },
      { key: "C", text: "Définir la technologie dans le plan de communication" },
      { key: "D", text: "Utiliser davantage d’outils collaboratifs" },
      { key: "E", text: "Utiliser les anciens projets comme modèles" }
    ],
    correctAnswer: "A et D",
    explanation: "La transparence et la collaboration sont clés en environnement agile."
  },
  {
    id: 171,
    question: "Avant d’adopter les story points dans une équipe Kanban, que faut-il faire en premier ?",
    options: [
      { key: "A", text: "Estimer seulement les nouveaux éléments" },
      { key: "B", text: "Estimer tout le backlog" },
      { key: "C", text: "Convertir le travail en cours (WIP) en story points" },
      { key: "D", text: "Mesurer les story points sur plusieurs sprints" }
    ],
    correctAnswer: "C",
    explanation: "Cela permet d’aligner la compréhension de l’effort avant l’adoption."
  },
  {
    id: 172,
    question: "Comment un chef de projet peut-il exploiter les idées de l’équipe lors d’une transition agile ?",
    options: [
      { key: "A", text: "Utiliser les rétrospectives" },
      { key: "B", text: "Les réunions de planification" },
      { key: "C", text: "Créer des guides de formation" },
      { key: "D", text: "Accélérer la transition" }
    ],
    correctAnswer: "A",
    explanation: "Les rétrospectives favorisent l’amélioration continue."
  },
  {
    id: 173,
    question: "Une demande de changement risque d’entraîner un retard plus important à cause de la chaîne logistique. Que faire ?",
    options: [
      { key: "A", text: "Implémenter le changement immédiatement" },
      { key: "B", text: "Mettre à jour la demande avec l’impact réel" },
      { key: "C", text: "Demander une approbation urgente" },
      { key: "D", text: "Escalader au PDG" }
    ],
    correctAnswer: "B",
    explanation: "Le CCB doit disposer de toutes les informations pour décider."
  },
  {
    id: 174,
    question: "Comment agir en tant que servant leader dans un projet agile ?",
    options: [
      { key: "A", text: "Contrôler strictement l’équipe" },
      { key: "B", text: "Servir de remplaçant" },
      { key: "C", text: "Imposer les processus" },
      { key: "D", text: "Identifier et éliminer les blocages" }
    ],
    correctAnswer: "D",
    explanation: "Le servant leader facilite le travail de l’équipe."
  },
  {
    id: 175,
    question: "Lors d’une rétrospective, un nouveau membre interrompt pour demander les rôles de chacun. Que faire ?",
    options: [
      { key: "A", text: "Répondre immédiatement" },
      { key: "B", text: "Reporter la discussion à une autre réunion" },
      { key: "C", text: "Faire expliquer chaque rôle" },
      { key: "D", text: "Organiser des réunions individuelles" }
    ],
    correctAnswer: "B",
    explanation: "La rétrospective doit rester focalisée sur l’amélioration des processus."
  }
]
