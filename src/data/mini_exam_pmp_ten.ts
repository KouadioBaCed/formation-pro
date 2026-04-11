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
    question: "Lors d'une réunion de lancement d'un projet critique, trois parties prenantes ayant des perspectives et des intérêts différents se sont engagées dans une discussion houleuse sur les objectifs du projet. Comment le chef de projet doit-il gérer cette situation ?",
    options: [
      "Interrompre la discussion et affirmer fermement son autorité pour maintenir l'ordre et le contrôle de la réunion.",
      "Faciliter une discussion structurée pour comprendre la perspective de chaque partie prenante et trouver un terrain d'entente.",
      "Conclure la réunion prématurément pour permettre aux parties prenantes de se calmer et la reprogrammer plus tard.",
      "Ignorer la discussion et poursuivre l'ordre du jour de la réunion, en abordant le conflit ultérieurement."
    ],
    solution: "Faciliter une discussion structurée pour comprendre la perspective de chaque partie prenante et trouver un terrain d'entente.",
    explication: "Faciliter une discussion structurée montre une approche proactive pour résoudre les conflits dès leur apparition et favorise la collaboration et la résolution de problèmes entre les parties prenantes. Les autres options sont incorrectes car elles peuvent aggraver la situation ou retarder la résolution du conflit."
  },
  {
    id: 2,
    question: "Un projet qui aurait dû être terminé à 75 % n'est achevé qu'à 65 %. Le budget total du projet est de 200 000 $ et le coût réel du travail effectué est de 110 000 $. Que peut-on déterminer à partir de ces informations ?",
    options: [
      "Le projet est en dessous du budget, a un SPI de 0,94 et un CPI de 1,04.",
      "Le projet est au-dessus du budget, a un SPI de 1,04 et un CPI de 0,94.",
      "Le projet est au-dessus du budget, a un SPI de 1,18 et un CPI de 0,87.",
      "Le projet est en dessous du budget, a un SPI de 0,87 et un CPI de 1,18."
    ],
    solution: "Le projet est en dessous du budget, a un SPI de 0,87 et un CPI de 1,18.",
    explication: "Le CPI (Cost Performance Index) mesure la performance des coûts : un CPI > 1 signifie que le projet est en dessous du budget. Le SPI (Schedule Performance Index) mesure la performance du calendrier : un SPI < 1 signifie que le projet est en retard sur le calendrier."
  },
  {
    id: 3,
    question: "Une équipe projet utilise la matrice influence/engagement pour identifier les parties prenantes clés et les prioriser pour un plan d'action spécifique. Pour un groupe donné, l'équipe prévoit de les tenir informés et de partager les 'petites victoires' du projet. Dans quel quadrant de la matrice se trouvent-ils ?",
    options: [
      "Faible influence / Faible engagement",
      "Faible influence / Fort engagement",
      "Forte influence / Faible engagement",
      "Forte influence / Fort engagement"
    ],
    solution: "Faible influence / Fort engagement",
    explication: "Ces parties prenantes sont engagées mais ont peu d'influence. Il est important de les tenir informées et de partager les bonnes nouvelles sans investir trop d'efforts."
  },
  {
    id: 4,
    question: "Un projet en phase d'exécution est sur la bonne voie et dans les limites du budget. Une partie prenante clé demande un changement de fréquence des communications : elle souhaite ne recevoir des notifications que lorsqu'un problème nécessite son attention. Que doit faire le chef de projet ?",
    options: [
      "Examiner le plan d'engagement des parties prenantes.",
      "Demander aux autres parties prenantes si elles souhaitent également moins de notifications.",
      "Réviser le plan de gestion des communications pour refléter la demande de la partie prenante.",
      "Rencontrer la partie prenante pour discuter du type et de la quantité d'informations à communiquer."
    ],
    solution: "Réviser le plan de gestion des communications pour refléter la demande de la partie prenante.",
    explication: "Le plan de gestion des communications doit être ajusté pour répondre aux besoins de la partie prenante. Les autres options ne changent pas la façon dont l'information est communiquée."
  },
  {
    id: 5,
    question: "Une entreprise se lance dans un nouveau marché sans expérience préalable. Le chef de projet a du mal à visualiser les exigences du projet. Quelle est la prochaine étape ?",
    options: [
      "Consulter la charte du projet.",
      "Réévaluer les objectifs de l'entreprise.",
      "Solliciter les avis des clients potentiels.",
      "Réaliser une étude de faisabilité."
    ],
    solution: "Solliciter les avis des clients potentiels.",
    explication: "Pour comprendre les exigences du projet, il est essentiel de consulter les futurs utilisateurs ou clients afin de connaître leurs besoins et attentes."
  },
  {
    id: 6,
    question: "Un chef de projet doit clôturer formellement un projet, mais un fournisseur affirme qu'une facture a été payée deux fois. Le chef de projet ne trouve aucune preuve de paiement en double. Que doit-il faire ?",
    options: [
      "Informer le fournisseur que le paiement a été effectué une seule fois et commencer la clôture du projet.",
      "Reporter la clôture du projet jusqu'à ce que le service comptable puisse documenter correctement le paiement.",
      "Compléter tous les documents finaux, retarder le nouveau projet et mettre à jour après vérification du paiement.",
      "Rencontrer le sponsor pour obtenir l'autorisation de commencer le nouveau projet avant la clôture."
    ],
    solution: "Reporter la clôture du projet jusqu'à ce que le service comptable puisse documenter correctement le paiement.",
    explication: "Le service financier est le seul à pouvoir confirmer le paiement. Le projet ne doit pas être clôturé tant que cela n'est pas vérifié."
  },
  {
    id: 7,
    question: "Deux parties prenantes informent le chef de projet qu'elles n'ont pas reçu d'information sur l'état d'une phase critique du projet. Que doit faire le chef de projet en premier ?",
    options: [
      "Examiner le plan de gestion des communications.",
      "Réaliser une analyse des parties prenantes et mettre à jour le registre.",
      "Identifier de nouvelles façons d'envoyer des rapports d'avancement.",
      "Planifier une réunion d'état et inviter les deux nouvelles parties prenantes."
    ],
    solution: "Réaliser une analyse des parties prenantes et mettre à jour le registre.",
    explication: "L'identification des parties prenantes est un processus continu. Toute nouvelle partie prenante doit être analysée et enregistrée dans le registre pour garantir une communication efficace."
  },
  {
    id: 8,
    question: "La veille du début de la construction, le chef de projet apprend que le plan de la structure n'a pas été accepté par le client. Que doit-il faire en premier pour respecter le calendrier ?",
    options: [
      "Rencontrer le client dès que possible pour discuter des modifications du plan.",
      "Commencer la construction tout en révisant le plan avec le client.",
      "Discuter du processus d'acceptation des livrables avec le client.",
      "Examiner le plan d'engagement des parties prenantes et leurs attentes."
    ],
    solution: "Rencontrer le client dès que possible pour discuter des modifications du plan.",
    explication: "Le plan est un document critique. Discuter immédiatement avec le client permet de comprendre les modifications nécessaires et de limiter l'impact sur le calendrier."
  },
  {
    id: 9,
    question: "Un projet avec des membres d'équipes répartis dans plusieurs pays. Le chef de projet pense que des risques n'ont pas été pris en compte. Comment doit-il enregistrer cette préoccupation ?",
    options: [
      "Documenter les risques dans le registre des risques.",
      "Réviser le plan d'engagement des parties prenantes.",
      "Enregistrer l'information dans le journal des problèmes.",
      "Mettre à jour le plan de gestion des ressources."
    ],
    solution: "Documenter les risques dans le registre des risques.",
    explication: "La dispersion de l'équipe comporte des risques qui doivent être identifiés et documentés pour un suivi et une gestion adéquats."
  },
  {
    id: 10,
    question: "Un chef de projet dirige un projet avec un calendrier agressif. L'équipe ne peut pas respecter la date de mise en production et il n'y a pas d'autres ressources internes. Comment réduire ce risque ?",
    options: [
      "Chercher des ressources externes pour aider à respecter la date.",
      "Demander à l'équipe de lever les obstacles eux-mêmes.",
      "Demander au sponsor de repousser la date de mise en production.",
      "Demander à l'équipe de se concentrer sur les fonctionnalités critiques uniquement."
    ],
    solution: "Chercher des ressources externes pour aider à respecter la date.",
    explication: "Aucune ressource interne disponible et une date critique nécessitent de mobiliser des ressources externes pour atténuer le risque."
  },
  {
    id: 11,
    question: "Une entreprise fabrique des équipements standards et doit assurer la cohérence des tâches d'assemblage. Que doit développer le chef de projet ?",
    options: [
      "Le processus d'estimation des ressources d'activité.",
      "Les directives Design for X (DfX).",
      "Des checklists qualité.",
      "Des entretiens avec des experts métiers."
    ],
    solution: "Des checklists qualité.",
    explication: "Les checklists qualité permettent de garantir que les tâches sont réalisées correctement et de manière cohérente."
  },
  {
    id: 12,
    question: "Un chef de projet prépare la charte d'un projet où 33 % de l'évaluation de l'interface utilisateur sera externalisée. Le responsable fonctionnel craint une réduction d'effectifs et refuse de coopérer. Que doit faire le chef de projet en premier ?",
    options: [
      "Rencontrer le responsable fonctionnel pour examiner le SOW (Statement of Work).",
      "Demander au sponsor d'expliquer la raison de l'évaluation externe.",
      "Fournir une analyse coût/bénéfice de l'évaluation externe.",
      "Expliquer l'objectif de l'évaluation de l'UI au responsable."
    ],
    solution: "Rencontrer le responsable fonctionnel pour examiner le SOW (Statement of Work).",
    explication: "Le SOW définit le travail requis. Examiner le SOW avec le responsable fonctionnel permet de clarifier les besoins et de résoudre les préoccupations tôt dans le projet."
  },
  {
    id: 13,
    question: "Un projet dépend de la fiabilité d'un composant. Le chef de projet propose de concevoir une redondance pour réduire l'impact d'une défaillance. Quel type de réponse au risque est démontré ?",
    options: [
      "Transférer",
      "Atténuer",
      "Accepter",
      "Éviter"
    ],
    solution: "Atténuer",
    explication: "Le chef de projet réduit l'impact potentiel d'un risque en introduisant des mesures préventives. Cela correspond à une stratégie d'atténuation."
  },
  {
    id: 14,
    question: "Un membre de l'équipe n'a pas terminé une tâche critique, mettant en péril un jalon. Que doit faire le chef de projet en rencontrant ce membre ?",
    options: [
      "Ordonner au membre de transférer la responsabilité à un autre.",
      "Identifier les obstacles et déterminer s'il a besoin d'aide.",
      "Demander au membre de travailler directement avec l'autre pour terminer la tâche.",
      "Demander au membre de proposer un remplaçant."
    ],
    solution: "Identifier les obstacles et déterminer s'il a besoin d'aide.",
    explication: "Le rôle du chef de projet est de comprendre les contraintes et d'aider à lever les obstacles pour atteindre le jalon."
  },
  {
    id: 15,
    question: "Plusieurs membres de l'équipe ont été remplacés depuis la formation initiale. La productivité a ralenti et le planning est en risque. Que doit faire le chef de projet ?",
    options: [
      "Réunir toute l'équipe et demander aux membres expérimentés de former les nouveaux.",
      "Négocier un budget supplémentaire pour former les nouveaux membres.",
      "Émettre une demande de changement pour remplacer les nouveaux membres par des formés.",
      "Organiser un atelier avec un expert pour familiariser les membres."
    ],
    solution: "Réunir toute l'équipe et demander aux membres expérimentés de former les nouveaux.",
    explication: "Le moyen le plus direct pour assurer la montée en compétence des nouveaux membres est le transfert de connaissances entre collègues."
  }
];
