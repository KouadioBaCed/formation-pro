// src/data/questions.ts

export interface Question {
  id: number;
  question: string;
  options: { id: string; text: string }[];
  answer: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Quelle méthodologie utilise de nouvelles approches pour mettre en œuvre des solutions aux problèmes rencontrés quotidiennement ?",
    options: [
      { id: "A", text: "Idéation 2.0" },
      { id: "B", text: "Scrum" },
      { id: "C", text: "Kanban" },
      { id: "D", text: "Hybride" },
    ],
    answer: "A",
    explanation: "Idéation 2.0 consiste à utiliser de nouvelles approches pour générer des solutions aux problèmes rencontrés dans la routine quotidienne, permettant une conception collaborative tout en gardant à l'esprit les résultats nécessaires pour le prototype initial.",
  },
  {
    id: 2,
    question: "En raison de changements réglementaires, une agence gouvernementale est maintenant un acteur clé dans un projet complexe. L'agent demande au chef de projet comment les avantages du projet s'alignent sur les stratégies de l'agence. Que doit faire le chef de projet ?",
    options: [
      { id: "A", text: "Rencontrer les autres parties prenantes pour discuter des objectifs du projet" },
      { id: "B", text: "Revoir le journal des hypothèses" },
      { id: "C", text: "Mettre à jour le plan de gestion des parties prenantes" },
      { id: "D", text: "Se référer au plan de gestion des bénéfices" },
    ],
    answer: "D",
    explanation: "Le chef de projet doit se référer au plan de gestion des bénéfices pour montrer comment les avantages du projet s'alignent sur les stratégies de l'agence. Les autres options ne répondent pas spécifiquement à la question de l'agent.",
  },
  {
    id: 3,
    question: "Une équipe a adopté une nouvelle méthodologie de gestion de projet incluant des réunions de revue et rétrospectives toutes les deux semaines, ainsi que des réunions quotidiennes et l'utilisation de tableaux blancs. Quelle méthodologie a été adoptée ?",
    options: [
      { id: "A", text: "Traditionnelle" },
      { id: "B", text: "Agile" },
      { id: "C", text: "Waterfall" },
      { id: "D", text: "Itérative" },
    ],
    answer: "B",
    explanation: "Les réunions quotidiennes, les revues bi-hebdomadaires, les rétrospectives et la documentation légère sont caractéristiques de la méthodologie Agile.",
  },
  {
    id: 4,
    question: "Une équipe envisage la meilleure méthodologie à recommander pour un projet avec des changements fréquents de besoins, des évolutions incrémentales et itératives, un focus client et des étapes définies avec des documents réglementaires. Quelle méthodologie est préférable ?",
    options: [
      { id: "A", text: "Agile" },
      { id: "B", text: "Hybride" },
      { id: "C", text: "Prédictive" },
      { id: "D", text: "Waterfall" },
    ],
    answer: "B",
    explanation: "La méthodologie hybride est recommandée car elle combine les avantages d'Agile pour l'adaptabilité et du prédictif pour les étapes définies et les documents réglementaires.",
  },
  {
    id: 5,
    question: "Un projet utilise une subvention gouvernementale pour fournir des services de santé. Après le lancement, le gouvernement indique que le projet pourrait ne pas être éligible. Que doit faire le chef de projet ?",
    options: [
      { id: "A", text: "Escalader le risque du projet à un niveau supérieur" },
      { id: "B", text: "Rencontrer le sponsor pour redéfinir les bénéfices du projet" },
      { id: "C", text: "Informer les parties prenantes de la nécessité d'un plan de contingence" },
      { id: "D", text: "Soumettre une demande de changement au comité de contrôle des changements" },
    ],
    answer: "A",
    explanation: "Le risque doit être escaladé au niveau approprié pour éviter des conflits entre objectifs stratégiques et portefeuille de projets.",
  },
  {
    id: 6,
    question: "Un PMO utilise généralement la méthodologie waterfall. Une équipe considère que l'agilité serait bénéfique à cause de réglementations changeantes. Que doit faire le chef de projet ?",
    options: [
      { id: "A", text: "Utiliser le budget pour ajouter des fournisseurs experts en réglementation" },
      { id: "B", text: "Analyser l'impact de l'intégration de l'agilité sur le projet" },
      { id: "C", text: "Présenter la demande au PMO et au sponsor" },
      { id: "D", text: "Implémenter l'agilité et former l'équipe" },
    ],
    answer: "B",
    explanation: "Il faut d'abord analyser comment l'intégration des méthodologies agiles impactera le projet avant de changer l'approche.",
  },
  {
    id: 7,
    question: "Un chef de projet dans un environnement prédictif a suivi une formation Agile et commence à gérer des projets en Agile. Comment gagner le soutien des parties prenantes ?",
    options: [
      { id: "A", text: "Organiser une session avec les parties prenantes pour expliquer la valeur métier de la priorisation, mentalité Agile, responsabilité et qualité" },
      { id: "B", text: "Faire une analyse coût-bénéfice comparant prédictif et Agile" },
      { id: "C", text: "Inviter les parties prenantes à une session de grooming du backlog" },
      { id: "D", text: "Envoyer des vidéos expliquant l'Agile et des études de cas" },
    ],
    answer: "A",
    explanation: "Le chef de projet doit éduquer et engager les parties prenantes avec une session explicative sur les bénéfices de l'Agile.",
  },
  {
    id: 8,
    question: "Comment les organisations utilisent-elles les projets pour apporter de la valeur à l'entreprise ?",
    options: [
      { id: "A", text: "Pour développer de nouveaux produits, processus ou services" },
      { id: "B", text: "Pour modifier des produits, processus ou services existants" },
      { id: "C", text: "Pour livrer des activités quotidiennes" },
      { id: "D", text: "Pour développer et modifier des produits, processus ou services" },
    ],
    answer: "D",
    explanation: "La valeur est apportée par les projets qui développent ou modifient des produits, processus ou services. Les activités quotidiennes ne sont pas des projets.",
  },
  {
    id: 9,
    question: "En milieu de projet, le chef de projet tient une réunion avec les parties prenantes pour vérifier si les livrables génèrent de la valeur. Quel document est critique ?",
    options: [
      { id: "A", text: "Structure de découpage du travail (WBS)" },
      { id: "B", text: "Plan de gestion de projet" },
      { id: "C", text: "Énoncé de portée du projet" },
      { id: "D", text: "Business case" },
    ],
    answer: "D",
    explanation: "Le business case montre la justification initiale et la valeur métier prévue du projet.",
  },
  {
    id: 10,
    question: "Lors d'une évaluation de performance, l'indice de performance du calendrier (SPI) = 0,5 et l'indice de performance des coûts (CPI) = 1,5. Quelle est la valeur délivrée au client ?",
    options: [
      { id: "A", text: "Bonne valeur coûts et mauvaise valeur calendrier" },
      { id: "B", text: "Mauvaise valeur coûts et bonne valeur calendrier" },
      { id: "C", text: "Bonne valeur coûts et bonne valeur calendrier" },
      { id: "D", text: "Mauvaise valeur coûts et mauvaise valeur calendrier" },
    ],
    answer: "A",
    explanation: "SPI < 1 indique un retard sur le calendrier, CPI > 1 indique des coûts inférieurs au budget. Donc, bonne valeur coûts et mauvaise valeur calendrier.",
  },
  {
    id: 11,
    question: "Le sponsor veut une gouvernance informelle pour l'efficacité alors que le PMO exige une gouvernance formelle. Que doit faire le chef de projet ?",
    options: [
      { id: "A", text: "Implémenter une gouvernance informelle" },
      { id: "B", text: "Reporter la décision à la fin du plan" },
      { id: "C", text: "Demander au service juridique de trancher" },
      { id: "D", text: "Établir le cadre de gouvernance selon les standards de l'organisation" },
    ],
    answer: "D",
    explanation: "La gouvernance assure conformité, éthique et cohérence. Le chef de projet doit suivre les standards organisationnels pour protéger l'organisation.",
  },
  {
    id: 12,
    question: "Une équipe Agile classe les activités pour le prochain sprint. Quel critère utiliser pour prioriser ?",
    options: [
      { id: "A", text: "Taille de l'activité" },
      { id: "B", text: "Valeur de l'activité pour les parties prenantes" },
      { id: "C", text: "Coût de l'activité" },
      { id: "D", text: "Facilité d'exécution" },
    ],
    answer: "B",
    explanation: "En Agile, on priorise selon la valeur apportée aux parties prenantes pour maximiser le ROI et répondre à leurs besoins.",
  },
  {
    id: 13,
    question: "Un projet FFP rencontre des défis techniques inattendus. Quelle est la meilleure action ?",
    options: [
      { id: "A", text: "Résilier le contrat et rembourser l'avance" },
      { id: "B", text: "Continuer comme prévu et résoudre avec le budget existant" },
      { id: "C", text: "Notifier le client et demander un ordre de changement pour augmenter budget et délais" },
      { id: "D", text: "Résoudre avec les ressources existantes, même au détriment de la qualité" },
    ],
    answer: "C",
    explanation: "Il est important d'être transparent avec le client et de demander un changement de contrat pour couvrir le temps et les ressources supplémentaires.",
  },
  {
    id: 14,
    question: "Lors de l'examen de la charte du projet, quelle information est appropriée à demander au sponsor ?",
    options: [
      { id: "A", text: "Objectifs mesurables des facteurs de succès critiques" },
      { id: "B", text: "Description détaillée et exigences du livrable final" },
      { id: "C", text: "Structure de découpage du travail (WBS)" },
      { id: "D", text: "Base de référence de mesure de performance" },
    ],
    answer: "A",
    explanation: "Le sponsor fournit les objectifs pour le succès du projet ; les autres documents sont préparés par le chef de projet.",
  },
  {
    id: 15,
    question: "Un chef de projet Agile fait face à des parties prenantes non familières avec Agile. Comment résoudre ?",
    options: [
      { id: "A", text: "Organiser une session pour introduire l'agilité et expliquer la valeur métier" },
      { id: "B", text: "Faire une analyse coût-bénéfice comparant prédictif et Agile" },
      { id: "C", text: "Inviter les parties prenantes à un grooming du backlog" },
      { id: "D", text: "Envoyer des vidéos et études de cas Agile" },
    ],
    answer: "A",
    explanation: "Le chef de projet doit éduquer les parties prenantes via une session interactive pour expliquer les bénéfices de l'Agile.",
  },
  {
    id: 16,
    question: "Lors d'une réunion, le client refuse d'approuver les livrables à cause de problèmes de qualité. Que doit faire le chef de projet ?",
    options: [
      { id: "A", text: "Informer le sponsor de la fin du projet" },
      { id: "B", text: "Travailler avec l'équipe pour améliorer les livrables" },
      { id: "C", text: "Rencontrer les parties prenantes pour identifier comment résoudre les problèmes et avancer" },
      { id: "D", text: "Documenter les préoccupations et les envoyer au CCB" },
    ],
    answer: "C",
    explanation: "La première action doit être de rencontrer les parties prenantes pour comprendre les problèmes et planifier la suite.",
  },
  {
    id: 17,
    question: "Un conflit potentiel émerge entre un développeur distant et un testeur sur site. Que doit faire le chef de projet en premier ?",
    options: [
      { id: "A", text: "Catégoriser le conflit et laisser les membres le résoudre eux-mêmes" },
      { id: "B", text: "Discuter publiquement du conflit lors du standup" },
      { id: "C", text: "Planifier une réunion individuelle privée avec chaque membre pour comprendre leur point de vue" },
      { id: "D", text: "Ajouter le conflit au backlog et prioriser sa résolution" },
    ],
    answer: "C",
    explanation: "Une rencontre privée permet de comprendre la cause du conflit et de guider vers une solution appropriée.",
  },
  {
    id: 18,
    question: "Une organisation passe du prédictif à l'Agile. Les membres distants ne participent pas aux standups. Que faire ?",
    options: [
      { id: "A", text: "Remplacer les membres distants par des membres sur site" },
      { id: "B", text: "Attribuer des tâches de faible priorité aux membres distants" },
      { id: "C", text: "Utiliser des plateformes de réunion en ligne et tenir compte des fuseaux horaires" },
      { id: "D", text: "Former tous les membres distants à l'Agile" },
    ],
    answer: "C",
    explanation: "Il faut adapter les standups aux équipes distantes en utilisant des outils en ligne et en tenant compte des fuseaux horaires.",
  },
  {
    id: 19,
    question: "Dans Scrum, le chef de projet doit gérer le journal des obstacles. Quel est l'ordre correct des 5 étapes ?",
    options: [
      { id: "A", text: "Prioriser, enregistrer, publier, communiquer, résoudre" },
      { id: "B", text: "Enregistrer, publier, communiquer, prioriser, résoudre" },
      { id: "C", text: "Enregistrer, prioriser, publier, résoudre, communiquer" },
      { id: "D", text: "Prioriser, enregistrer, publier, résoudre, communiquer" },
    ],
    answer: "C",
    explanation: "L'ordre correct est : enregistrer, prioriser, publier, résoudre et communiquer.",
  },
  {
    id: 20,
    question: "Une organisation lance un produit critique. Les parties prenantes identifient trois facteurs clés : adaptation au marché, réponse rapide et agilité. Que doit faire le chef de projet ?",
    options: [
      { id: "A", text: "Travailler étroitement avec le marketing pour promouvoir le produit et s'adapter au marché" },
      { id: "B", text: "S'assurer que le projet a le budget et les ressources nécessaires" },
      { id: "C", text: "Être activement impliqué en surveillant, modifiant et collectant les données" },
      { id: "D", text: "Inviter les parties prenantes à tous les standups" },
    ],
    answer: "A",
    explanation: "L'adaptation au marché est critique ; le chef de projet doit collaborer avec le marketing pour adapter la stratégie.",
  },
  {
    id: 21,
    question: "Un chef de projet utilise une méthodologie prédictive lorsque l'organisation annonce une transition vers une approche hybride. Le sponsor demande de passer immédiatement à cette approche hybride alors que l'équipe n'a aucune expérience préalable.",
    options: [
      { id: "A", text: "Terminer le projet avec la méthodologie prédictive." },
      { id: "B", text: "Prolonger le délai du projet pour s'adapter au changement." },
      { id: "C", text: "Réévaluer le périmètre du projet et prioriser les tâches critiques." },
      { id: "D", text: "Demander une révision complète du plan de projet." }
    ],
    answer: "C",
    explanation: "Réévaluer le périmètre du projet est crucial pour incorporer les éléments adaptatifs de l'approche hybride et se concentrer sur les tâches critiques."
  },
  {
    id: 22,
    question: "Un chef de projet travaille avec un client très impliqué qui exige des mises à jour régulières sur le projet, y compris l'état actuel et les prochaines étapes prévues.",
    options: [
      { id: "A", text: "Envoyer des e-mails hebdomadaires contenant le registre des risques et les notes des stand-ups quotidiens." },
      { id: "B", text: "Documenter un résumé détaillé et la liste des parties prenantes et l'envoyer mensuellement." },
      { id: "C", text: "Planifier des réunions quotidiennes pour un résumé du projet et les tâches en cours." },
      { id: "D", text: "Planifier des réunions hebdomadaires pour présenter les mises à jour incrémentales et faire valider l'avancement par le client." }
    ],
    answer: "D",
    explanation: "La meilleure pratique est de planifier des réunions hebdomadaires pour présenter les mises à jour et permettre au client de valider l'avancement."
  },
  {
    id: 23,
    question: "Un chef de projet pour une équipe interfonctionnelle a du mal à planifier des réunions régulières avec tous les membres et parties prenantes en raison des différents fuseaux horaires.",
    options: [
      { id: "A", text: "Utiliser des outils de communication asynchrones." },
      { id: "B", text: "Planifier deux réunions adaptées à la majorité." },
      { id: "C", text: "Faire tourner l'heure des réunions chaque semaine." },
      { id: "D", text: "Rencontrer uniquement les membres dans le même fuseau horaire." }
    ],
    answer: "A",
    explanation: "Les outils de communication asynchrones permettent de collaborer efficacement sans nécessiter la présence simultanée de tous."
  },
  {
    id: 24,
    question: "Un projet est à mi-parcours lorsqu'une ressource externe devient soudainement indisponible, mettant en danger la réussite du projet dans les délais et le budget.",
    options: [
      { id: "A", text: "Mettre à jour le plan de gestion des ressources et enregistrer les compétences nécessaires dans le journal des problèmes." },
      { id: "B", text: "Engager les parties prenantes pour trouver un remplaçant qualifié." },
      { id: "C", text: "Former une ressource interne et lui assigner les tâches restantes." },
      { id: "D", text: "Réviser le calendrier et le budget et soumettre une demande de changement." }
    ],
    answer: "A",
    explanation: "La première étape consiste à évaluer l'impact et documenter les compétences requises afin de planifier correctement la suite."
  },
  {
    id: 25,
    question: "Un partie prenante inexpérimentée en agile exprime sa frustration par e-mail et demande des changements significatifs dans le périmètre et les livrables.",
    options: [
      { id: "A", text: "Demander à l'équipe lors du prochain stand-up pourquoi le stakeholder est mécontent." },
      { id: "B", text: "Mettre à jour le périmètre et le plan de projet pour répondre aux demandes." },
      { id: "C", text: "Communiquer avec le stakeholder et le Product Owner pour favoriser l'alignement." },
      { id: "D", text: "Rencontrer individuellement le stakeholder pour revoir le backlog." }
    ],
    answer: "C",
    explanation: "La communication avec le stakeholder et le Product Owner favorise l'alignement et évite des décisions unilatérales impactant le projet."
  },
  {
    id: 26,
    question: "Un chef de projet identifie un risque technique dans la proposition d'un fournisseur qui impacte les coûts opérationnels.",
    options: [
      { id: "A", text: "Consulter le manager fonctionnel." },
      { id: "B", text: "Accepter le risque et passer à autre chose." },
      { id: "C", text: "Mettre à jour le registre des risques du projet." },
      { id: "D", text: "Évaluer le risque lors d'un atelier." }
    ],
    answer: "C",
    explanation: "Le chef de projet doit d'abord documenter le risque dans le registre pour préparer une stratégie d'atténuation."
  },
  {
    id: 27,
    question: "Un projet suit un plan en cascade mais les livrables sont fournis de manière incrémentale au client avec une approche agile. L'équipe maîtrise la prise de décision en mode hybride.",
    options: [
      { id: "A", text: "Prendre le contrôle du processus de décision." },
      { id: "B", text: "Fournir à l'équipe un processus détaillé pour prendre des décisions." },
      { id: "C", text: "Soutenir les choix et décisions du projet par l'équipe." },
      { id: "D", text: "Former l'équipe aux techniques de prise de décision." }
    ],
    answer: "C",
    explanation: "L'équipe est capable de prendre des décisions alignées sur les objectifs, le PM doit soutenir ses choix."
  },
  {
    id: 28,
    question: "Un chef de projet planifie un lancement mondial de produit avec contraintes strictes de production et incertitudes sur les régulations locales d'étiquetage.",
    options: [
      { id: "A", text: "Utiliser une approche hybride en intégrant le travail prédictif de l'étiquetage dans un calendrier agile." },
      { id: "B", text: "Utiliser une approche hybride en intégrant un workflow agile pour l'étiquetage dans un calendrier prédictif." },
      { id: "C", text: "Appliquer une planification agile pour la production et l'étiquetage." },
      { id: "D", text: "Appliquer une planification prédictive pour l'étiquetage et simplifier le contrôle des changements." }
    ],
    answer: "B",
    explanation: "L'approche hybride permet un workflow agile pour l'étiquetage et un calendrier prédictif pour la production, combinant flexibilité et planification."
  },
  {
    id: 29,
    question: "Une entreprise remporte un projet de transformation digitale à prix fixe. Le client souhaite suivre régulièrement l'avancement.",
    options: [
      { id: "A", text: "Utiliser une approche prédictive et envoyer un rapport quotidien." },
      { id: "B", text: "Utiliser une approche agile et montrer chaque story terminée." },
      { id: "C", text: "Utiliser une approche hybride et montrer chaque module complété." },
      { id: "D", text: "Utiliser une approche prédictive et montrer chaque module complété." }
    ],
    answer: "C",
    explanation: "Pour un projet à prix fixe et suivi régulier par le client, l'approche hybride permet de montrer l'avancement module par module."
  },
  {
    id: 30,
    question: "Un chef de projet est assigné à un projet avec beaucoup de parties prenantes et des priorités concurrentes. Quel est l'objectif principal pour initier et conduire des négociations ?",
    options: [
      { id: "A", text: "Définir le périmètre." },
      { id: "B", text: "Résoudre les conflits." },
      { id: "C", text: "Minimiser les coûts." },
      { id: "D", text: "Réduire le délai de livraison." }
    ],
    answer: "B",
    explanation: "La conduite de négociations a pour objectif principal de résoudre les conflits entre parties prenantes."
  }
];
