import type { Question, Chapter, Topic, Category } from '../types';

export const question1: Question = {
  id: 'pbi-p1-eb1-q-1',
  number: 1,
  text: "Vous prévoyez de créer un rapport dans Power BI Desktop qui affichera les opportunités de vente par cinq étapes de vente, notamment prospect, qualifié, engagé et conclu. Vous devez identifier le type de visualisation qui affichera un processus linéaire avec des étapes connectées séquentiellement, une étape passant à la suivante. Quelle visualisation devez-vous utiliser ?",
  answers: [
    { id: 'a', text: "Entonnoir (Funnel)", isCorrect: true },
    { id: 'b', text: "Segment (Slicer)", isCorrect: false },
    { id: 'c', text: "Treemap", isCorrect: false },
    { id: 'd', text: "Cascade (Waterfall)", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Un entonnoir (funnel) est idéal pour afficher un processus linéaire avec des étapes connectées séquentiellement, montrant la progression d'une étape à l'autre, comme un pipeline de vente.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-1",
  chapter: "visualizations",
  status: "unseen",
};

export const question2: Question = {
  id: 'pbi-p1-eb1-q-2',
  number: 2,
  text: "Vous devez créer un signet qui bascule la visibilité d'un visuel. Ce signet doit uniquement basculer l'état de visibilité et n'effectuer aucune autre action. Quelles trois configurations devez-vous effectuer ?",
  answers: [
    { id: 'a', text: "Désactiver l'option Données (Data)", isCorrect: true },
    { id: 'b', text: "Désactiver l'option Page actuelle (Current Page)", isCorrect: true },
    { id: 'c', text: "Désactiver l'option Affichage (Display)", isCorrect: false },
    { id: 'd', text: "Activer l'option Page actuelle (Current Page)", isCorrect: false },
    { id: 'e', text: "Activer l'option Données (Data)", isCorrect: false },
    { id: 'f', text: "Activer l'option Affichage (Display)", isCorrect: true },
  ],
  answerType: "multiple",
  explanation: "La capture de page actuelle permet au signet de naviguer vers la page de capture. La capture de données met à jour les filtres et l'extraction qui ne doivent pas se produire pour ce signet. La capture d'affichage met à jour la visibilité des visuels sur la page du rapport.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "bookmarks-navigation",
  status: "unseen",
};

export const question3: Question = {
  id: 'pbi-p1-eb1-q-3',
  number: 3,
  text: "Vous devez créer un visuel qui affiche les ventes par employés, avec une tendance sur les mois. Le visuel doit clairement montrer comment les employés se comparent les uns aux autres et avoir un classement pour chaque période. Quel visuel devez-vous utiliser ?",
  answers: [
    { id: 'a', text: "Graphique à barres groupées (Clustered bar chart)", isCorrect: false },
    { id: 'b', text: "Graphique à ruban (Ribbon chart)", isCorrect: true },
    { id: 'c', text: "Nuage de points (Scatterplot)", isCorrect: false },
    { id: 'd', text: "Treemap", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Le graphique à ruban (ribbon chart) est idéal pour montrer les changements de classement au fil du temps, permettant de visualiser clairement comment les employés se comparent et leur position relative change d'une période à l'autre.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "visualizations",
  status: "unseen",
};

export const question4: Question = {
  id: 'pbi-p1-eb1-q-4',
  number: 4,
  text: "Depuis Power BI Desktop, vous ouvrez un rapport Power BI contenant trois pages : Main, Error Rate et On-time Rate. Vous ajoutez un bouton à la page Main pour la navigation. Vous devez implémenter une solution qui répond aux exigences suivantes : La destination de navigation doit changer en fonction de la sortie d'une mesure DAX nommée [Error Rate]. Si [Error Rate] est supérieur à 5%, le bouton doit afficher 'Error Rate' et naviguer vers la page Error Rate. Sinon, le bouton doit afficher 'On-time Rate' et naviguer vers la page On-Time Rate. Quelles trois actions devez-vous effectuer ?",
  answers: [
    { id: 'a', text: "Créer une mesure DAX qui renvoie le nom de page correct en fonction de la valeur de [Error Rate].", isCorrect: true },
    { id: 'b', text: "Définir le type de bouton sur Navigation de page et utiliser la mise en forme conditionnelle pour spécifier la destination.", isCorrect: true },
    { id: 'c', text: "Définir le type de bouton sur Signet et utiliser la mise en forme conditionnelle pour spécifier la destination.", isCorrect: false },
    { id: 'd', text: "Définir la destination de navigation sur la page Error Rate.", isCorrect: false },
    { id: 'e', text: "Utiliser la mise en forme conditionnelle pour définir le texte du bouton.", isCorrect: true },
  ],
  answerType: "multiple",
  explanation: "Pour configurer un bouton pour la navigation conditionnelle de page, vous devez créer une mesure DAX qui renvoie le nom de page de destination correct. Ensuite, configurez le bouton pour utiliser la navigation de page et utilisez la mesure DAX nouvellement créée pour spécifier la destination de navigation. Pour changer le texte du bouton pour correspondre au nom de la page, la mise en forme conditionnelle doit être utilisée.",
  difficulty: "hard",
  topic: "power-bi-exam-blanc-1",
  chapter: "bookmarks-navigation",
  status: "unseen",
};

export const question5: Question = {
  id: 'pbi-p1-eb1-q-5',
  number: 5,
  text: "Vous prévoyez d'ajouter des données à Power BI Desktop à partir d'une nouvelle source de données. Vous évaluez si vous devez utiliser le mode de stockage DirectQuery ou le mode de stockage Import. Quels sont les deux avantages de l'utilisation d'Import au lieu de DirectQuery ?",
  answers: [
    { id: 'a', text: "Prise en charge complète du service Q&A de Power BI", isCorrect: true },
    { id: 'b', text: "Prise en charge complète du service Quick Insights de Power BI", isCorrect: true },
    { id: 'c', text: "Utilisation minimisée de l'espace disque local", isCorrect: false },
    { id: 'd', text: "Pas besoin d'actualisation des données", isCorrect: false },
  ],
  answerType: "multiple",
  explanation: "Le mode de stockage Import est entièrement pris en charge avec les services Q&A et Quick Insights de Power BI. Le stockage Import, contrairement à DirectQuery, ne minimise pas l'utilisation de l'espace disque local et n'élimine pas le besoin d'actualisation des données.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "storage-modes",
  status: "unseen",
};

export const question6: Question = {
  id: 'pbi-p1-eb1-q-6',
  number: 6,
  text: "Vous avez une requête qui récupère des données d'une table contenant plus de 8 000 lignes de données. Dans Power Query Editor, vous remarquez que les statistiques de colonne pour chaque colonne affichent un nombre exact de 1 000. Vous devez vous assurer que les statistiques de colonne pour chaque colonne affichent les statistiques basées sur toutes les lignes renvoyées par la requête. Que devez-vous faire ?",
  answers: [
    { id: 'a', text: "Ajouter une étape appliquée Table.Buffer à la requête.", isCorrect: false },
    { id: 'b', text: "Recréer le mode de stockage en DirectQuery.", isCorrect: false },
    { id: 'c', text: "Créer un paramètre de nombre de lignes Top N pour la requête.", isCorrect: false },
    { id: 'd', text: "Depuis Power Query Editor, sélectionner le profilage de colonne basé sur l'ensemble de données entier.", isCorrect: true },
  ],
  answerType: "single",
  explanation: "Sélectionner le profilage de colonne pour l'ensemble de données entier changera le profileur de colonne pour analyser l'ensemble de données complet de la requête. Ajouter une étape Table.Buffer ne mettra en cache que la requête entière en mémoire pendant l'actualisation.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "power-query",
  status: "unseen",
};

export const question7: Question = {
  id: 'pbi-p1-eb1-q-7',
  number: 7,
  text: "Vous analysez des données de requête en utilisant Power Query Editor. Vous devez vous assurer que les statistiques de colonne sont basées sur une analyse de l'ensemble de données entier. Que devez-vous faire ?",
  answers: [
    { id: 'a', text: "Recréer le mode de stockage en DirectQuery.", isCorrect: false },
    { id: 'b', text: "Depuis la barre d'état, changer le statut de profilage en ensemble de données entier.", isCorrect: true },
    { id: 'c', text: "Dans Power Query Editor, activer le profilage de colonne depuis le ruban Affichage.", isCorrect: false },
    { id: 'd', text: "Charger les données dans le modèle de données.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Par défaut, le profilage de colonne est basé uniquement sur les 1000 premières lignes de l'aperçu. Changer le statut du profil de colonne en ensemble de données entier interrogera l'ensemble de données complet pour les informations de profilage de colonne.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-1",
  chapter: "power-query",
  status: "unseen",
};

export const question8: Question = {
  id: 'pbi-p1-eb1-q-8',
  number: 8,
  text: "Votre organisation utilise Microsoft Power BI pour analyser les données de vente, qui contiennent des valeurs nulles dans la colonne 'Montant des ventes' et des entrées de texte dans les champs numériques. Vous devez nettoyer les données pour résoudre ces incohérences. Quelles deux actions devez-vous entreprendre ?",
  answers: [
    { id: 'a', text: "Créer une mesure DAX pour ne renvoyer que des valeurs valides.", isCorrect: false },
    { id: 'b', text: "Utiliser Power Query pour filtrer les valeurs nulles.", isCorrect: true },
    { id: 'c', text: "Nettoyer manuellement les données dans Excel et les réimporter.", isCorrect: false },
    { id: 'd', text: "Utiliser Power Query pour remplacer le texte par des nombres.", isCorrect: true },
    { id: 'e', text: "Utiliser Power Query pour changer le type de données de la colonne en texte.", isCorrect: false },
  ],
  answerType: "multiple",
  explanation: "Utiliser Power Query pour filtrer les valeurs nulles et remplacer le texte par des nombres garantira que vous avez des données cohérentes. Changer le type de données ne résoudrait pas les valeurs incohérentes. Les mesures DAX n'affecteraient que la présentation des données, pas le modèle sémantique sous-jacent.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "power-query",
  status: "unseen",
};

export const question9: Question = {
  id: 'pbi-p1-eb1-q-9',
  number: 9,
  text: "Une organisation utilise Microsoft Power BI pour analyser les données de vente stockées dans une base de données relationnelle avec des tables pour les commandes, les produits et les clients. Vous devez exécuter des requêtes plus efficaces sans affecter le mode de connectivité. Quelle action devez-vous entreprendre ?",
  answers: [
    { id: 'a', text: "Ajouter des colonnes calculées au modèle.", isCorrect: false },
    { id: 'b', text: "Désactiver les interactions de segment dans les rapports.", isCorrect: false },
    { id: 'c', text: "Activer Assume Referential Integrity pour les relations applicables.", isCorrect: true },
    { id: 'd', text: "Passer en mode Import.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Activer Assume Referential Integrity améliore l'efficacité des requêtes en permettant des INNER JOINs au lieu d'OUTER JOINs, optimisant les performances de DirectQuery. Ajouter des colonnes calculées augmente la complexité du modèle. Passer en mode Import change entièrement la méthode de connectivité des données.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "performance-optimization",
  status: "unseen",
};

export const question10: Question = {
  id: 'pbi-p1-eb1-q-10',
  number: 10,
  text: "Vous avez une feuille de calcul Excel contenant trois colonnes intitulées Année, 2021 et 2012. Les entrées dans les lignes de la première colonne sont les noms des mois individuels de l'année, tandis que les deux autres colonnes contiennent le montant des ventes pour chaque mois pour l'année correspondante. Vous importez les données de la feuille de calcul Excel dans Power BI Desktop. Vous devez transformer les données pour qu'elles se composent de trois colonnes : la première contenant le mois, la deuxième contenant l'année et la troisième contenant le montant des ventes pour ce mois et cette année. Quelle transformation devez-vous utiliser en premier ?",
  answers: [
    { id: 'a', text: "Pivot", isCorrect: false },
    { id: 'b', text: "Supprimer les colonnes", isCorrect: false },
    { id: 'c', text: "Transposer la table", isCorrect: false },
    { id: 'd', text: "Unpivot (Supprimer le tableau croisé)", isCorrect: true },
  ],
  answerType: "single",
  explanation: "Sélectionner Unpivot vous permettra de façonner la table actuelle en une table avec les colonnes année, mois et montant des ventes, qui devront être renommées par la suite. Pivot serait applicable dans le scénario opposé. Transposer échangerait les lignes et les colonnes.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "power-query",
  status: "unseen",
};

export const question11: Question = {
  id: 'pbi-p1-eb1-q-11',
  number: 11,
  text: "Vous avez une requête avec une colonne nommée Pays et des colonnes pour chaque mois de données de vente. Les noms des colonnes de données de vente utilisent un format Mois Année, par exemple Janvier 2022. Les colonnes de mois contiennent les valeurs de Montant des ventes pour chaque mois. Vous devez remodeler la table pour avoir toutes les valeurs de montant des ventes dans une seule colonne. Une nouvelle colonne doit également être ajoutée et contenir le mois année pertinent pour chaque ligne de données. Que devez-vous faire depuis Power Query Editor ?",
  answers: [
    { id: 'a', text: "Sélectionner la colonne Pays puis sélectionner Colonne Pivot.", isCorrect: false },
    { id: 'b', text: "Sélectionner la colonne Pays puis sélectionner Unpivot Autres Colonnes.", isCorrect: true },
    { id: 'c', text: "Sélectionner la première colonne de données de vente puis sélectionner Unpivot Colonnes.", isCorrect: false },
    { id: 'd', text: "Sélectionner Transposer.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Sélectionner Unpivot Autres Colonnes va dépivotiser toutes les colonnes mois/année actuelles et futures dans une nouvelle colonne de données de vente. Transposer traite les lignes comme des colonnes et vice versa. Sélectionner Unpivot Colonnes sur la première colonne de données de vente ne dépivotiserait que cette colonne.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "power-query",
  status: "unseen",
};

export const question12: Question = {
  id: 'pbi-p1-eb1-q-12',
  number: 12,
  text: "Vous avez une table qui contient une colonne nommée ProductID. La colonne ProductID contient des valeurs qui ont un préfixe PD suivi de cinq chiffres. Par exemple : PD15332. Vous prévoyez de convertir les valeurs ProductID en nombres (entiers). Vous devez supprimer les deux lettres de début des valeurs ProductID actuelles. Quelles deux commandes pouvez-vous utiliser ?",
  answers: [
    { id: 'a', text: "Supprimer les lignes (Remove Rows)", isCorrect: false },
    { id: 'b', text: "Remplacer les erreurs (Replace Errors)", isCorrect: false },
    { id: 'c', text: "Remplacer les valeurs (Replace Values)", isCorrect: true },
    { id: 'd', text: "Trim (Supprimer les espaces)", isCorrect: true },
  ],
  answerType: "multiple",
  explanation: "Seule la commande Remplacer les valeurs permet la suppression des caractères de début, comme 'pd' des valeurs de colonne. Trim supprime les espaces blancs de début et de fin. Supprimer les lignes n'affecte pas les valeurs dans une colonne. Le préfixe PD n'est pas une erreur, donc Remplacer les erreurs ne peut pas supprimer la chaîne.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "power-query",
  status: "unseen",
};

export const question13: Question = {
  id: 'pbi-p1-eb1-q-13',
  number: 13,
  text: "Vous avez une source de données Power BI qui contient les tables suivantes : ProductCategory (liste l'ID de catégorie de produit et le nom de catégorie), ProductSubcategory (liste l'ID de sous-catégorie, le nom de sous-catégorie et l'ID de catégorie associé), ProductList (liste l'ID de produit, le nom et l'ID de sous-catégorie). Vous devez optimiser les données pour créer une dimension à utiliser dans un modèle de données en schéma étoile. Comment les tables doivent-elles être transformées avant le chargement dans le modèle ?",
  answers: [
    { id: 'a', text: "Importer les trois tables dans le modèle de données et les connecter en utilisant des relations.", isCorrect: false },
    { id: 'b', text: "Importer uniquement la table ProductName dans le modèle.", isCorrect: false },
    { id: 'c', text: "Fusionner les requêtes pour créer une seule table chargée pour Produit.", isCorrect: true },
    { id: 'd', text: "Utiliser la commande append pour créer une seule table chargée pour produit.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Un schéma étoile devrait avoir une seule table pour chaque dimension liée directement à la table de faits. Utiliser la commande de fusion pour créer une seule table de produit atteint cet objectif.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "data-modeling",
  status: "unseen",
};

export const question14: Question = {
  id: 'pbi-p1-eb1-q-14',
  number: 14,
  text: "Vous avez une feuille de calcul Excel contenant deux colonnes : Catégorie (contient les noms des catégories) et Sous-catégorie (contient les noms des sous-catégories pour chaque catégorie). Vous importez la feuille de calcul Excel dans Power BI Desktop. Vous devez transformer les données pour répondre aux exigences suivantes : Avoir plusieurs colonnes, où une colonne représente une catégorie. Avoir une seule ligne qui inclut le nombre total de sous-catégories pour chaque catégorie. Quelle transformation devez-vous utiliser ?",
  answers: [
    { id: 'a', text: "Colonnes Pivot", isCorrect: true },
    { id: 'b', text: "Renommer les colonnes", isCorrect: false },
    { id: 'c', text: "Transposer la table", isCorrect: false },
    { id: 'd', text: "Colonnes Unpivot", isCorrect: false },
  ],
  answerType: "single",
  explanation: "L'opération de colonne pivot convertit les données en une table en agrégeant les valeurs dans une colonne. Dans ce cas, vous pouvez pivoter les colonnes pour calculer le nombre de sous-catégories de produits dans chaque catégorie de produit. L'opération unpivot effectue la tâche opposée.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "power-query",
  status: "unseen",
};

export const question15: Question = {
  id: 'pbi-p1-eb1-q-15',
  number: 15,
  text: "Vous avez une table de faits qui contient des données de vente. La table de faits inclut une colonne SalesDate formatée comme un type de données Date. Le paramètre date/heure automatique est désactivé dans les options globales et du fichier actuel. Vous chargez la table de faits dans Power BI Desktop. Vous devez vous assurer que vous pouvez analyser les données sur une base annuelle, trimestrielle, mensuelle, hebdomadaire et quotidienne. Votre solution doit minimiser la taille du modèle et l'effort administratif. Que devez-vous faire ?",
  answers: [
    { id: 'a', text: "Ajouter une table de dimension de date séparée.", isCorrect: true },
    { id: 'b', text: "Ajouter des colonnes année, mois et semaine à la table de faits.", isCorrect: false },
    { id: 'c', text: "Activer l'option date/heure automatique du fichier actuel.", isCorrect: false },
    { id: 'd', text: "Activer l'option date/heure automatique globale.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Ajouter une table de dimension de date séparée qui inclut les informations année, mois et semaine est l'approche optimale qui fournit la fonctionnalité requise tout en minimisant la taille du modèle et l'effort administratif. Activer l'option date/heure automatique augmenterait la taille du modèle et ne fournirait pas la capacité de décrire les périodes hebdomadaires.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "data-modeling",
  status: "unseen",
};

export const question16: Question = {
  id: 'pbi-p1-eb1-q-16',
  number: 16,
  text: "Vous avez un rapport Power BI qui se connecte à un flux de données public. Les utilisateurs signalent que le rapport se charge lentement. Vous identifiez que la performance lente est causée par une requête dans le rapport. Vous devez réduire le temps de chargement. Où devez-vous configurer la mise en cache pour la requête ?",
  answers: [
    { id: 'a', text: "Dans un dataflow", isCorrect: true },
    { id: 'b', text: "Dans le rapport", isCorrect: false },
    { id: 'c', text: "Power BI Desktop", isCorrect: false },
    { id: 'd', text: "Le service Power BI", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Les dataflows Power BI prennent en charge la mise en cache des requêtes en persistant les résultats de la récupération et de la transformation des données dans le service Power BI, ce qui empêche la requête d'être réexécutée contre la source de données publique à chaque chargement de données et améliore les performances globales.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "performance-optimization",
  status: "unseen",
};

export const question17: Question = {
  id: 'pbi-p1-eb1-q-17',
  number: 17,
  text: "Vous avez un modèle de données Power BI contenant une table nommée Orders. Orders contient de nombreuses colonnes. Vous avez un rapport. Une page du rapport contient de nombreux visuels. Chaque visuel référence quatre champs de la table Orders. Lorsque vous tentez de publier le rapport sur le service Power BI, vous recevez un message d'erreur. Vous devez résoudre l'erreur et réduire la taille du modèle de données. La solution doit : Minimiser le nombre de requêtes exécutées pendant les actualisations planifiées. Empêcher les modifications des colonnes dans la table Orders originale. Que devez-vous faire ?",
  answers: [
    { id: 'a', text: "Dupliquer Orders, puis référencer le duplicat.", isCorrect: false },
    { id: 'b', text: "Déplacer les quatre colonnes requises vers une nouvelle table et mettre à jour les visuels pour utiliser la nouvelle table.", isCorrect: false },
    { id: 'c', text: "Référencer Orders, supprimer toutes les colonnes de la référence sauf les quatre utilisées sur la page du rapport, et désactiver le chargement pour Orders.", isCorrect: true },
    { id: 'd', text: "Diviser les requêtes pour que chaque visuel interroge uniquement les champs requis.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Créer une requête référencée permet à Orders de rester inchangée comme requête de staging tout en produisant une table réduite qui ne contient que les colonnes requises, ce qui réduit la taille du dataset. Désactiver le chargement pour Orders garantit que seule la référence optimisée est chargée dans le modèle.",
  difficulty: "hard",
  topic: "power-bi-exam-blanc-1",
  chapter: "power-query",
  status: "unseen",
};

export const question18: Question = {
  id: 'pbi-p1-eb1-q-18',
  number: 18,
  text: "Vous modifiez un rapport dans Power BI Desktop. Vous devez ajuster le comportement du rapport en modifiant les interactions. Quels deux types de comportement d'interaction pouvez-vous modifier entre les visuels ?",
  answers: [
    { id: 'a', text: "Extraction (Drillthrough)", isCorrect: false },
    { id: 'b', text: "Développer (Expand)", isCorrect: false },
    { id: 'c', text: "Filtrer", isCorrect: true },
    { id: 'd', text: "Mettre en surbrillance (Highlight)", isCorrect: true },
  ],
  answerType: "multiple",
  explanation: "Un filtre vous montrera les données filtrées dans ce visuel. La mise en surbrillance est l'interaction par défaut entre les visuels. Elle vous montre les valeurs filtrées et non filtrées dans le visuel, à des fins de comparaison. L'extraction est une expérience de navigation de page. Développer est une façon de naviguer vers un niveau inférieur en utilisant les contrôles de hiérarchie.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-1",
  chapter: "visualizations",
  status: "unseen",
};

export const question19: Question = {
  id: 'pbi-p1-eb1-q-19',
  number: 19,
  text: "Vous devez créer un signet qui bascule la visibilité d'un visuel. Ce signet doit uniquement basculer l'état de visibilité et n'effectuer aucune autre action. Quelles trois configurations devez-vous effectuer ?",
  answers: [
    { id: 'a', text: "Désactiver l'option Données (Data)", isCorrect: true },
    { id: 'b', text: "Désactiver l'option Page actuelle (Current Page)", isCorrect: true },
    { id: 'c', text: "Désactiver l'option Affichage (Display)", isCorrect: false },
    { id: 'd', text: "Activer l'option Page actuelle (Current Page)", isCorrect: false },
    { id: 'e', text: "Activer l'option Données (Data)", isCorrect: false },
    { id: 'f', text: "Activer l'option Affichage (Display)", isCorrect: true },
  ],
  answerType: "multiple",
  explanation: "La capture de page actuelle permet au signet de naviguer vers la page de capture. La capture de données met à jour les filtres et l'extraction qui ne doivent pas se produire pour ce signet. La capture d'affichage met à jour la visibilité des visuels sur la page du rapport.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "bookmarks-navigation",
  status: "unseen",
};

export const question20: Question = {
  id: 'pbi-p1-eb1-q-20',
  number: 20,
  text: "Vous prévoyez d'utiliser Power BI Desktop pour analyser les données de vente des produits vendus par votre entreprise. Vous devez créer une formule DAX qui listera les 10 produits les plus vendus triés par leurs ventes totales. Quelle fonction DAX devez-vous utiliser ?",
  answers: [
    { id: 'a', text: "MAXA", isCorrect: false },
    { id: 'b', text: "MAXX", isCorrect: false },
    { id: 'c', text: "RANKX", isCorrect: false },
    { id: 'd', text: "TOPN", isCorrect: true },
  ],
  answerType: "single",
  explanation: "La fonction TOPN renvoie les N premières lignes de la table spécifiée, comme par exemple les 10 produits les plus vendus triés par leurs ventes totales. MAXA renvoie la plus grande valeur dans une colonne. MAXX évalue une expression pour chaque ligne et renvoie la plus grande valeur. RANKX renvoie le classement d'un nombre dans une liste.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "dax",
  status: "unseen",
};

export const question21: Question = {
  id: 'pbi-p1-eb1-q-21',
  number: 21,
  text: "Vous devez ajouter un nouveau visuel à un tableau de bord Power BI. Ce visuel N'EXISTE PAS dans un rapport de l'espace de travail. Que devez-vous faire en premier ?",
  answers: [
    { id: 'a', text: "Ouvrir Voir le contenu associé.", isCorrect: false },
    { id: 'b', text: "Ouvrir le menu Fichier.", isCorrect: false },
    { id: 'c', text: "Sélectionner Ajouter une vignette.", isCorrect: false },
    { id: 'd', text: "Sélectionner Poser une question sur vos données.", isCorrect: true },
  ],
  answerType: "single",
  explanation: "La fonctionnalité Q&A vous permet de créer un visuel en tapant une question sur vos données. Ce nouveau visuel peut ensuite être épinglé au tableau de bord, sans l'ajouter à un rapport. Dans le menu fichier et le menu vignettes, il n'y a pas d'options 'visuel'. Voir le contenu associé affiche le contenu connexe comme les rapports, datasets, etc.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-1",
  chapter: "dashboards",
  status: "unseen",
};

export const question22: Question = {
  id: 'pbi-p1-eb1-q-22',
  number: 22,
  text: "Vous implémentez la fonctionnalité Q&A dans un rapport, afin que les utilisateurs puissent obtenir des réponses à leurs questions par eux-mêmes. Vous devez améliorer vos capacités de recherche Q&A pour les utilisateurs finaux. Quelles deux configurations pouvez-vous ajouter ?",
  answers: [
    { id: 'a', text: "Ajouter un schéma linguistique au dataset.", isCorrect: true },
    { id: 'b', text: "Ajouter des synonymes aux champs du modèle.", isCorrect: true },
    { id: 'c', text: "Configurer le dataset comme modèle composite.", isCorrect: false },
    { id: 'd', text: "Organiser les colonnes et mesures du dataset dans des dossiers logiques dans le volet Champs.", isCorrect: false },
  ],
  answerType: "multiple",
  explanation: "Ajouter des synonymes aux champs du modèle aidera les utilisateurs à les rechercher. Par exemple, vous pouvez donner un synonyme de (Réels) pour la mesure (Ventes). Un schéma linguistique décrit les termes et phrases que Q&A doit comprendre pour les objets dans un dataset. Les modèles composites ne sont pas pris en charge par Q&A aujourd'hui.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "ai-features",
  status: "unseen",
};

export const question23: Question = {
  id: 'pbi-p1-eb1-q-23',
  number: 23,
  text: "Vous modifiez un rapport dans Power BI Desktop. Le rapport contient une seule page de rapport avec trois visuels de carte et un graphique à barres groupées. Vous devez créer un signet qui affiche uniquement le graphique à barres groupées et masque les cartes. La solution doit minimiser l'effort de développement. Que devez-vous faire en premier ?",
  answers: [
    { id: 'a', text: "Ajouter un signet dans le volet Signets.", isCorrect: false },
    { id: 'b', text: "Masquer les trois cartes dans le volet Sélection.", isCorrect: true },
    { id: 'c', text: "Publier le rapport sur le service Power BI.", isCorrect: false },
    { id: 'd', text: "Sélectionner l'option Spotlight sur le graphique à barres groupées.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Avant de créer un signet, vous devez configurer la page du rapport pour afficher l'état que vous souhaitez capturer dans le signet. Les visuels sont visibles par défaut, vous devez donc les marquer comme masqués. Pour ajouter un signet, vous devez d'abord mettre à jour le signet après avoir masqué les visuels. Bien que spotlight se concentre sur le graphique à barres groupées, il ne masque pas complètement les cartes.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "bookmarks-navigation",
  status: "unseen",
};

export const question24: Question = {
  id: 'pbi-p1-eb1-q-24',
  number: 24,
  text: "Vous avez un visuel de graphique à barres et un visuel de graphique à colonnes sur une page de rapport. La sélection de n'importe quelle colonne du visuel de graphique à barres filtre les données du graphique à colonnes à moins de 1% de sa valeur non filtrée. Quel type d'interaction visuelle devrait être utilisé lorsque le graphique à barres filtre le graphique à colonnes pour vous assurer de pouvoir facilement voir les données ?",
  answers: [
    { id: 'a', text: "Développer (Expand)", isCorrect: false },
    { id: 'b', text: "Extraction (Drillthrough)", isCorrect: false },
    { id: 'c', text: "Filtrer", isCorrect: true },
    { id: 'd', text: "Mettre en surbrillance (Highlight)", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Filtrer vous montrera les données filtrées dans ce visuel. Donc même en affichant des données filtrées qui représentent moins de 1% de la valeur non filtrée, elles s'afficheront toujours bien dans le visuel de colonnes. La mise en surbrillance vous montre les valeurs filtrées et non filtrées dans le visuel, à des fins de comparaison.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "visualizations",
  status: "unseen",
};

export const question25: Question = {
  id: 'pbi-p1-eb1-q-25',
  number: 25,
  text: "Vous avez un visuel qui est en surbrillance croisée (cross-highlighted). Par défaut, quelles données seront affichées dans une info-bulle de rapport ?",
  answers: [
    { id: 'a', text: "Une info-bulle de page de rapport avec des données en surbrillance croisée", isCorrect: false },
    { id: 'b', text: "Les données non filtrées et filtrées (en surbrillance croisée)", isCorrect: false },
    { id: 'c', text: "Les données filtrées (en surbrillance croisée)", isCorrect: true },
    { id: 'd', text: "Les données totales non filtrées (non en surbrillance croisée)", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Par défaut, les info-bulles de rapport appliqueront le filtre des données en surbrillance croisée dans l'info-bulle. Les info-bulles de page de rapport doivent être créées manuellement et ne sont pas assignées à un visuel par défaut.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "visualizations",
  status: "unseen",
};

export const question26: Question = {
  id: 'pbi-p1-eb1-q-26',
  number: 26,
  text: "Vous devez créer un rôle de sécurité au niveau des lignes (RLS) pour un modèle sémantique. Que devez-vous faire en premier ?",
  answers: [
    { id: 'a', text: "Assigner les membres de l'espace de travail au groupe de sécurité dans le service Power BI.", isCorrect: false },
    { id: 'b', text: "Dans Power BI Desktop, ouvrir Gérer les rôles.", isCorrect: true },
    { id: 'c', text: "Dans Power BI Desktop, ouvrir l'Éditeur avancé dans Power Query Editor.", isCorrect: false },
    { id: 'd', text: "Dans le service Power BI, ouvrir les paramètres de sécurité pour le dataset.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Les rôles RLS sont créés ou modifiés depuis l'espace Gérer les rôles. Vous pouvez assigner des utilisateurs/groupes AD à un rôle existant dans les paramètres de sécurité, mais les nouveaux rôles RLS doivent être créés dans Power BI Desktop ou un autre outil externe de création de modèle. Les configurations RLS ne sont pas accessibles depuis aucune fenêtre Power Query.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "security",
  status: "unseen",
};

export const question27: Question = {
  id: 'pbi-p1-eb1-q-27',
  number: 27,
  text: "Une organisation utilise Microsoft Power BI pour analyser les données de vente. L'équipe a observé des pics inattendus de revenus à des dates spécifiques. Vous devez identifier et expliquer ces pics en utilisant un rapport Microsoft Power BI. Que devez-vous faire ?",
  answers: [
    { id: 'a', text: "Analyser les facteurs de revenus en utilisant le visuel Influenceurs clés.", isCorrect: false },
    { id: 'b', text: "Utiliser la détection d'anomalies sur un graphique en courbes.", isCorrect: true },
    { id: 'c', text: "Explorer les catégories de revenus en utilisant un arbre de décomposition.", isCorrect: false },
    { id: 'd', text: "Mettre en surbrillance les valeurs aberrantes en utilisant la mise en forme conditionnelle.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Activer la détection d'anomalies sur un graphique en courbes est l'approche la plus efficace car elle identifie les valeurs inattendues dans les données de séries temporelles et fournit des explications pour ces anomalies. La mise en surbrillance des valeurs aberrantes met uniquement en évidence les données visuellement sans fournir d'informations sur les raisons des anomalies.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "ai-features",
  status: "unseen",
};

export const question28: Question = {
  id: 'pbi-p1-eb1-q-28',
  number: 28,
  text: "Quel visuel IA natif aide à expliquer les corrélations pour une métrique dans le dataset ?",
  answers: [
    { id: 'a', text: "Visuel Arbre de décomposition", isCorrect: false },
    { id: 'b', text: "Visuel Influenceurs clés", isCorrect: true },
    { id: 'c', text: "Visuel Q&A", isCorrect: false },
    { id: 'd', text: "Visuel Narration intelligente", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Le visuel Influenceurs clés vous aide à comprendre les facteurs corrélés impactant une métrique particulière. Le visuel Q&A permet aux utilisateurs finaux de poser des questions en langage naturel pour créer des graphiques générés par IA. L'Arbre de décomposition vous permet de visualiser les données entre plusieurs dimensions. La Narration intelligente vous permet de combiner du texte en langage naturel avec des métriques.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-1",
  chapter: "ai-features",
  status: "unseen",
};

export const question29: Question = {
  id: 'pbi-p1-eb1-q-29',
  number: 29,
  text: "Vous devez ajouter une ligne analytique à un visuel. La valeur de la ligne doit être égale au résultat d'une mesure DAX qui renvoie toujours une valeur unique cohérente. La mesure DAX ne doit être utilisée que pour remplir la ligne analytique. Quel type de ligne analytique devez-vous utiliser ?",
  answers: [
    { id: 'a', text: "Ligne moyenne (Average line)", isCorrect: false },
    { id: 'b', text: "Ligne constante (Constant line)", isCorrect: true },
    { id: 'c', text: "Ligne max (Max line)", isCorrect: false },
    { id: 'd', text: "Ligne min (Min line)", isCorrect: false },
  ],
  answerType: "single",
  explanation: "La ligne constante sur l'axe X ou Y permet d'utiliser une mesure DAX pour fournir cette valeur pour le visuel. La ligne Min remplit la valeur minimale pour une série déjà présente dans le visuel. La ligne Max remplit la valeur maximale pour une série déjà présente. La ligne Moyenne remplit la valeur moyenne pour une série déjà présente.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "visualizations",
  status: "unseen",
};

export const question30: Question = {
  id: 'pbi-p1-eb1-q-30',
  number: 30,
  text: "Votre entreprise dispose d'un rapport Microsoft Power BI qui suit les KPI pour divers départements. Le rapport inclut un visuel KPI pour surveiller les revenus mensuels par rapport aux objectifs. Vous devez fournir une solution pour que les utilisateurs du rapport puissent identifier les facteurs entraînant des changements significatifs dans les valeurs KPI. Quelle action devez-vous effectuer ?",
  answers: [
    { id: 'a', text: "Ajouter une ligne de tendance à un graphique en courbes.", isCorrect: false },
    { id: 'b', text: "Explorer en utilisant l'arbre de décomposition.", isCorrect: false },
    { id: 'c', text: "Utiliser Quick Insights pour créer un tableau de bord.", isCorrect: false },
    { id: 'd', text: "Utiliser le visuel Influenceurs clés.", isCorrect: true },
  ],
  answerType: "single",
  explanation: "Pour identifier les facteurs influençant les changements significatifs dans les valeurs KPI, vous pouvez utiliser le visuel Influenceurs clés car il identifie les facteurs qui impactent significativement la métrique analysée. Ajouter une ligne de tendance ne répond pas à l'exigence car elle ne montre que les tendances générales sans expliquer les facteurs d'influence.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "ai-features",
  status: "unseen",
};

export const question31: Question = {
  id: 'pbi-p1-eb1-q-31',
  number: 31,
  text: "Vous évaluez si vous devez créer un tableau de bord dans Power BI. Dans quel scénario avez-vous besoin d'un tableau de bord au lieu d'un rapport dans Power BI ?",
  answers: [
    { id: 'a', text: "Vous devez ajouter des filtres.", isCorrect: false },
    { id: 'b', text: "Vous devez ajouter des segments.", isCorrect: false },
    { id: 'c', text: "Vous devez afficher des visuels sur plusieurs pages.", isCorrect: false },
    { id: 'd', text: "Vous devez afficher des visuels qui utilisent différents modèles sémantiques.", isCorrect: true },
  ],
  answerType: "single",
  explanation: "La capacité de combiner des données de plusieurs modèles sémantiques est l'une des fonctionnalités disponibles dans les tableaux de bord mais non prises en charge dans les rapports. Les tableaux de bord n'incluent pas les volets Filtre, Visualisation et Champs disponibles dans Power BI Desktop. Les tableaux de bord, contrairement aux rapports, ne contiennent qu'une seule page.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-1",
  chapter: "dashboards",
  status: "unseen",
};

export const question32: Question = {
  id: 'pbi-p1-eb1-q-32',
  number: 32,
  text: "Vous téléchargez des rapports sur le service Power BI et épinglez plusieurs visuels à un tableau de bord. Vous prévoyez de créer des règles d'alertes pour plusieurs visuels. Quels sont les deux emplacements où vous pouvez voir les alertes ?",
  answers: [
    { id: 'a', text: "Un rapport", isCorrect: false },
    { id: 'b', text: "Un e-mail", isCorrect: false },
    { id: 'c', text: "Microsoft Teams", isCorrect: true },
    { id: 'd', text: "Le Centre de notifications", isCorrect: true },
  ],
  answerType: "multiple",
  explanation: "Par défaut, les notifications sont disponibles dans le centre de notifications. Vous avez également la possibilité d'envoyer des notifications par e-mail. Un tableau de bord, un canal Microsoft Teams et un rapport ne sont pas disponibles comme emplacements d'alertes.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "dashboards",
  status: "unseen",
};

export const question33: Question = {
  id: 'pbi-p1-eb1-q-33',
  number: 33,
  text: "Votre entreprise dispose d'un serveur SharePoint situé dans un centre de données à Montréal. Vous prévoyez de créer un rapport dans le service Power BI qui utilisera des fichiers Microsoft Excel stockés sur le serveur SharePoint. Vous devez recommander une solution pour garantir que le dataset du rapport peut être actualisé automatiquement quotidiennement. Que devez-vous inclure dans la recommandation ?",
  answers: [
    { id: 'a', text: "Un réseau privé virtuel (VPN) Point à Site", isCorrect: false },
    { id: 'b', text: "Un réseau privé virtuel (VPN) Site à Site", isCorrect: false },
    { id: 'c', text: "Une passerelle de données locale", isCorrect: true },
    { id: 'd', text: "Azure Data Box", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Un serveur SharePoint local nécessite l'utilisation d'une passerelle Power BI car c'est une source de données locale. Les solutions basées sur VPN fourniraient une connectivité à un réseau virtuel Azure, mais pas au service Power BI. Azure Data Box est une solution pour migrer des données vers Azure, ce qui n'est pas applicable dans ce scénario.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "data-connectivity",
  status: "unseen",
};

export const question34: Question = {
  id: 'pbi-p1-eb1-q-34',
  number: 34,
  text: "Vous prévoyez de créer un espace de travail Power BI. Vous devez vous assurer que vous pourrez configurer un groupe Microsoft 365 dont la bibliothèque de documents SharePoint Online sera disponible pour les utilisateurs de l'espace de travail une fois l'espace de travail créé. Quel paramètre devez-vous configurer lors de la création de l'espace de travail ?",
  answers: [
    { id: 'a', text: "Autoriser les contributeurs à mettre à jour l'application", isCorrect: false },
    { id: 'b', text: "Développer une application modèle", isCorrect: false },
    { id: 'c', text: "Mode de licence", isCorrect: false },
    { id: 'd', text: "OneDrive de l'espace de travail", isCorrect: true },
  ],
  answerType: "single",
  explanation: "Le paramètre OneDrive de l'espace de travail vous permet de configurer un groupe Microsoft 365 dont la bibliothèque de documents SharePoint Online est disponible pour les utilisateurs de l'espace de travail une fois l'espace de travail créé. Le paramètre Autoriser les contributeurs à mettre à jour l'application est destiné à fournir des autorisations supplémentaires aux contributeurs de l'espace de travail.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "workspaces",
  status: "unseen",
};

export const question35: Question = {
  id: 'pbi-p1-eb1-q-35',
  number: 35,
  text: "Vous gérez un espace de travail Power BI en capacité partagée. L'espace de travail contient un modèle sémantique nommé DS1. Vous prévoyez de planifier l'actualisation de DS1. Quel est le nombre maximum d'actualisations de données par jour ?",
  answers: [
    { id: 'a', text: "1", isCorrect: false },
    { id: 'b', text: "4", isCorrect: false },
    { id: 'c', text: "8", isCorrect: true },
    { id: 'd', text: "24", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Le nombre maximum d'actualisations par jour pour un espace de travail Power BI en capacité partagée est de 8.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-1",
  chapter: "data-refresh",
  status: "unseen",
};

export const question36: Question = {
  id: 'pbi-p1-eb1-q-36',
  number: 36,
  text: "Vous avez une collection de modèles sémantiques et de rapports. Vous devez partager les modèles sémantiques et les rapports ensemble. Cette solution ne doit PAS envoyer de notifications par e-mail aux utilisateurs internes après le partage. Que devez-vous créer dans le service Power BI ?",
  answers: [
    { id: 'a', text: "Un pipeline de déploiement", isCorrect: false },
    { id: 'b', text: "Un espace de travail", isCorrect: false },
    { id: 'c', text: "Une application", isCorrect: true },
    { id: 'd', text: "Des métriques", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Les applications d'espace de travail peuvent être installées automatiquement pour n'importe quel utilisateur d'une organisation, et sans nécessiter de notifications d'installation. Les pipelines de déploiement sont utilisés pour déplacer des artefacts entre les environnements de test, de développement et de production. Vous pouvez ajouter des membres à un espace de travail, mais ils reçoivent une notification qu'ils ont été ajoutés.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "sharing-distribution",
  status: "unseen",
};

export const question37: Question = {
  id: 'pbi-p1-eb1-q-37',
  number: 37,
  text: "Vous gérez un espace de travail Power BI en capacité partagée. L'espace de travail contient un modèle sémantique nommé DS1. Vous prévoyez de planifier une actualisation de DS1. Quel est le nombre d'échecs d'actualisation consécutifs de DS1 qui désactivera automatiquement la planification d'actualisation ?",
  answers: [
    { id: 'a', text: "2", isCorrect: false },
    { id: 'b', text: "4", isCorrect: true },
    { id: 'c', text: "16", isCorrect: false },
    { id: 'd', text: "64", isCorrect: false },
  ],
  answerType: "single",
  explanation: "S'il y a 4 échecs consécutifs d'actualisation du modèle sémantique, la planification d'actualisation sera automatiquement désactivée.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-1",
  chapter: "data-refresh",
  status: "unseen",
};

export const question38: Question = {
  id: 'pbi-p1-eb1-q-38',
  number: 38,
  text: "Vous avez un rôle de sécurité au niveau des lignes (RLS) dans un dataset appelé Groupe de sécurité utilisateur. Ce rôle doit filtrer une table RLS qui contient une colonne avec les e-mails des utilisateurs au format suivant : nom@entreprise.com. Quelle fonction devrait être utilisée dans le code du rôle RLS pour faire correspondre les informations d'identification de connexion Microsoft Entra ID des utilisateurs avec les e-mails contenus dans la colonne de la table RLS ?",
  answers: [
    { id: 'a', text: "NAMEOF", isCorrect: false },
    { id: 'b', text: "TREATAS", isCorrect: false },
    { id: 'c', text: "USEROBJECTID", isCorrect: false },
    { id: 'd', text: "USERPRINCIPALNAME", isCorrect: true },
  ],
  answerType: "single",
  explanation: "USERPRINCIPALNAME retournerait la connexion Microsoft Entra ID au format 'nom@entreprise.com'. USEROBJECTID ne retournerait pas la connexion Microsoft Entra ID dans le même format. NAMEOF est une fonction utilisée pour les paramètres de champ. TREATAS est une fonction liée au filtrage de colonnes.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "security",
  status: "unseen",
};

export const question39: Question = {
  id: 'pbi-p1-eb1-q-39',
  number: 39,
  text: "Votre organisation utilise Microsoft Power BI pour analyser les données de vente. L'équipe commerciale s'inquiète que des utilisateurs non autorisés exportent des données sensibles. Vous devez vous assurer que seuls les utilisateurs autorisés peuvent exporter des données sensibles à partir des rapports Power BI. Que devez-vous faire ?",
  answers: [
    { id: 'a', text: "Appliquer des étiquettes de sensibilité.", isCorrect: true },
    { id: 'b', text: "Attribuer des rôles Contributeur.", isCorrect: false },
    { id: 'c', text: "Désactiver le partage de rapports.", isCorrect: false },
    { id: 'd', text: "Activer le mode DirectQuery.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "L'application d'étiquettes de sensibilité garantit que les restrictions d'exportation sont appliquées en fonction des autorisations spécifiques à l'utilisateur, répondant directement au souci d'exportation de données non autorisées. L'attribution de rôles Contributeur fournit des autorisations de création mais manque de mécanismes pour restreindre l'exportation de données.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "security",
  status: "unseen",
};

export const question40: Question = {
  id: 'pbi-p1-eb1-q-40',
  number: 40,
  text: "Vous avez la formule Power Query M suivante qui génère une plage de dates : = List.Dates(#date(2020,05,31), 365, #duration(1,0,0,0)). Quelle est la plage de dates résultante ?",
  answers: [
    { id: 'a', text: "Une liste de jours se terminant le 31 mai 2020 et commençant 365 jours plus tôt", isCorrect: false },
    { id: 'b', text: "Une liste de jours commençant le 31 mai 2020 et se terminant 365 jours plus tard", isCorrect: true },
    { id: 'c', text: "Une liste de mois se terminant en mai 2020 et commençant 12 mois plus tôt", isCorrect: false },
    { id: 'd', text: "Une liste de mois commençant en mai 2020 et se terminant 12 mois plus tard", isCorrect: false },
  ],
  answerType: "single",
  explanation: "L'élément #date désigne la date de début, 365 désigne le compteur de durée, et #duration(1,0,0,0) désigne l'intervalle de durée en jours, donc cette formule résulte en une liste de jours commençant le 31 mai 2020 et se terminant 365 jours plus tard.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "power-query",
  status: "unseen",
};

export const question41: Question = {
  id: 'pbi-p1-eb1-q-41',
  number: 41,
  text: "Vous devez empêcher les tables de date masquées d'être générées automatiquement par Power BI Desktop pour chaque colonne de type de données date ou datetime dans un dataset. Quelles deux tâches devez-vous effectuer ?",
  answers: [
    { id: 'a', text: "Activer Marquer comme table de dates pour la table Calendrier.", isCorrect: true },
    { id: 'b', text: "Depuis les options du fichier actuel dans Power BI Desktop, désactiver Date/Heure automatique.", isCorrect: true },
    { id: 'c', text: "Depuis les options globales dans Power BI Desktop, désactiver Date/Heure automatique pour les nouveaux fichiers.", isCorrect: false },
    { id: 'd', text: "Définir la catégorie de données sur Aucune pour tous les champs Date et DateTime.", isCorrect: false },
  ],
  answerType: "multiple",
  explanation: "Désactiver Date/Heure automatique pour les nouveaux fichiers depuis les options du fichier actuel désactivera toutes les tables Date/Heure automatiques dans ce dataset. Activer Marquer comme table de dates pour la table Calendrier désactivera également les tables datetime automatiques dans le dataset. Désactiver l'option globale signifie que les nouveaux fichiers n'auront plus Date/Heure automatique activé, mais le fichier actuel l'aura toujours activé.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "data-modeling",
  status: "unseen",
};

export const question42: Question = {
  id: 'pbi-p1-eb1-q-42',
  number: 42,
  text: "Vous avez une table de faits qui contient des données de vente et les deux colonnes de date suivantes : OrderDate et ShipDate. Les deux colonnes ont une relation avec la colonne Date dans la table Calendrier, et des mesures DAX ont été configurées pour utiliser ces relations pour les calculs liés aux dates de commande ou d'expédition. Vous devez vous assurer que par défaut, la table Calendrier NE filtre PAS la table de faits, sauf si elle utilise une mesure DAX qui utilise ces relations. Que devez-vous faire ?",
  answers: [
    { id: 'a', text: "Désactiver Rendre cette relation active pour les deux relations.", isCorrect: true },
    { id: 'b', text: "Activer Appliquer le filtre de sécurité dans les deux directions pour les deux relations.", isCorrect: false },
    { id: 'c', text: "Activer Rendre cette relation active pour les deux relations.", isCorrect: false },
    { id: 'd', text: "Définir la direction du filtre croisé sur les deux pour chaque relation.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Vous pouvez avoir plusieurs relations inactives entre deux tables dans les datasets Power BI. Les mesures DAX peuvent ensuite utiliser la fonction USERELATIONSHIP pour activer une relation pour les calculs. Une seule relation active peut exister entre deux tables dans un dataset Power BI.",
  difficulty: "hard",
  topic: "power-bi-exam-blanc-1",
  chapter: "data-modeling",
  status: "unseen",
};

export const question43: Question = {
  id: 'pbi-p1-eb1-q-43',
  number: 43,
  text: "Vous créez un modèle de données dans Power BI Desktop qui contient des colonnes calculées DAX et des mesures. Vous devez maintenant créer un rapport. Dans quels deux endroits une colonne calculée DAX peut-elle être utilisée, mais pas une mesure calculée DAX ?",
  answers: [
    { id: 'a', text: "Comme filtre dans la zone 'Filtres sur cette page' du volet Filtres", isCorrect: true },
    { id: 'b', text: "Comme filtre dans la zone 'Filtres sur ce visuel' du volet Filtres", isCorrect: false },
    { id: 'c', text: "Comme élément dans la zone 'Ajouter des champs d'extraction ici' du volet Visualisations", isCorrect: false },
    { id: 'd', text: "Comme élément dans la zone Champs d'un segment", isCorrect: true },
  ],
  answerType: "multiple",
  explanation: "Contrairement à une mesure, une colonne calculée peut être utilisée dans un segment pour placer des options de filtre sur la page du rapport. Les mesures DAX ne peuvent pas être placées dans la zone 'Filtres sur cette page'. Elles ne peuvent être placées que par visuel, dans la zone 'Filtres sur ce visuel' du volet Filtres.",
  difficulty: "hard",
  topic: "power-bi-exam-blanc-1",
  chapter: "dax",
  status: "unseen",
};

export const question44: Question = {
  id: 'pbi-p1-eb1-q-44',
  number: 44,
  text: "Vous devez développer une mesure rapide dans Power BI Desktop. Quels deux éléments pouvez-vous utiliser ?",
  answers: [
    { id: 'a', text: "Calculs", isCorrect: true },
    { id: 'b', text: "Colonnes conditionnelles", isCorrect: false },
    { id: 'c', text: "Requêtes DAX (Data Analysis Expression)", isCorrect: true },
    { id: 'd', text: "Champs", isCorrect: false },
    { id: 'e', text: "Fonctions Power Query M", isCorrect: false },
  ],
  answerType: "multiple",
  explanation: "Lors de la création d'une mesure rapide dans Power BI Desktop, vous appliquez des calculs aux champs. Vous ne créez pas explicitement une requête DAX, mais vous choisissez des calculs et des champs, ce qui entraîne la génération automatique d'une requête DAX. Les colonnes conditionnelles sont séparées des mesures rapides. Les fonctions Power Query M ne sont pas directement accessibles depuis l'interface Mesure rapide.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "dax",
  status: "unseen",
};

export const question45: Question = {
  id: 'pbi-p1-eb1-q-45',
  number: 45,
  text: "Vous devez utiliser les mesures rapides DAX pour générer des résultats à utiliser dans un rapport. Quel type de calculs de mesures rapides DAX NE fonctionnera PAS sur une table DirectQuery ?",
  answers: [
    { id: 'a', text: "Agrégat par catégorie", isCorrect: false },
    { id: 'b', text: "Opérations mathématiques", isCorrect: false },
    { id: 'c', text: "Intelligence temporelle", isCorrect: true },
    { id: 'd', text: "Fonctions X", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Les fonctions d'intelligence temporelle ont des implications de performance et sont désactivées pour les mesures rapides sur les tables DirectQuery. Les opérations mathématiques, l'agrégat par catégorie et les fonctions X sont tous pris en charge sur DirectQuery.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "dax",
  status: "unseen",
};

export const question46: Question = {
  id: 'pbi-p1-eb1-q-46',
  number: 46,
  text: "Vous avez un modèle sémantique Power BI Desktop qui inclut une table nommée Vendeur. La table inclut une colonne nommée UPN. UPN contient le nom principal d'utilisateur du compte Microsoft Entra ID du vendeur. Vous devez vous assurer que chaque vendeur ne pourra voir que les lignes dans la table Vendeur où la valeur de la colonne UPN correspond à son nom principal d'utilisateur. Quelles deux actions devez-vous effectuer ?",
  answers: [
    { id: 'a', text: "Ajouter une colonne calculée à la table Vendeur.", isCorrect: false },
    { id: 'b', text: "Ajouter une colonne conditionnelle à la table Vendeur.", isCorrect: false },
    { id: 'c', text: "Ajouter un filtre d'expression DAX à la table Vendeur.", isCorrect: true },
    { id: 'd', text: "Créer un rôle.", isCorrect: true },
    { id: 'e', text: "Créer un paramètre what-if.", isCorrect: false },
  ],
  answerType: "multiple",
  explanation: "Dans le cadre de la configuration de la sécurité au niveau des lignes, il est nécessaire de créer un rôle. De plus, il est nécessaire d'ajouter un filtre d'expression DAX à la table Vendeur. Cette expression vérifie une correspondance entre l'attribut Nom principal d'utilisateur du vendeur et la valeur dans la colonne UPN.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "security",
  status: "unseen",
};

export const question47: Question = {
  id: 'pbi-p1-eb1-q-47',
  number: 47,
  text: "Vous avez un modèle sémantique Power BI Desktop basé sur une source de données en schéma étoile. Vous devez utiliser DAX (Data Analysis Expression) pour créer une table de dates dans le dataset et remplir la table avec une plage de dates basée sur la date la plus ancienne et la plus récente dans le modèle sémantique. Quelle fonction devez-vous utiliser ?",
  answers: [
    { id: 'a', text: "CALENDAR", isCorrect: false },
    { id: 'b', text: "CALENDARAUTO", isCorrect: true },
    { id: 'c', text: "DATE", isCorrect: false },
    { id: 'd', text: "DATEDIFF", isCorrect: false },
  ],
  answerType: "single",
  explanation: "La fonction CALENDARAUTO génère une plage de dates basée sur la date la plus ancienne et la plus récente dans le dataset. La fonction CALENDAR génère une plage de dates, mais elle nécessite de fournir la date de début et de fin. La fonction DATE retourne la date spécifiée au format datetime. La fonction DATEDIFF retourne un intervalle entre deux dates.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "dax",
  status: "unseen",
};

export const question48: Question = {
  id: 'pbi-p1-eb1-q-48',
  number: 48,
  text: "Vous devez réduire la cardinalité d'une colonne dans un modèle sémantique Power BI. Que devez-vous faire ?",
  answers: [
    { id: 'a', text: "Ajouter un préfixe à chaque valeur dans la colonne.", isCorrect: false },
    { id: 'b', text: "Ajouter un suffixe à chaque valeur dans la colonne.", isCorrect: false },
    { id: 'c', text: "Remplacer les valeurs nulles par une valeur de 0.", isCorrect: false },
    { id: 'd', text: "Réduire le nombre de valeurs distinctes.", isCorrect: true },
  ],
  answerType: "single",
  explanation: "Une colonne qui a beaucoup de valeurs répétées et un faible nombre de valeurs distinctes aura une faible cardinalité. Réduire le nombre de valeurs distinctes réduit la cardinalité. Remplacer les nulls ne change pas le nombre de valeurs distinctes. Un préfixe ou suffixe statique ne change pas la cardinalité.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-1",
  chapter: "performance-optimization",
  status: "unseen",
};

export const question49: Question = {
  id: 'pbi-p1-eb1-q-49',
  number: 49,
  text: "Vous devez réduire la taille d'un modèle sémantique Power BI qui contient deux tables de dimension nommées Date et Location, et une table de faits nommée Temperatures. La table Temperatures contient les champs suivants : Reading Time (datetime), DateKey (date), LocationKey (nombre entier), Temp C (décimal). Vous avez une ligne pour chaque intervalle de 5 minutes pour chaque emplacement. La table Temperatures est liée aux dimensions Date et Location par des relations plusieurs-à-un. Vous devez réduire la cardinalité de la table. La solution doit garantir que le modèle sémantique prend en charge les rapports qui analysent la température moyenne par heure et emplacement. Quelles deux actions devez-vous effectuer ?",
  answers: [
    { id: 'a', text: "Créer une colonne qui contient les valeurs de temps pour le début de l'heure de la valeur Reading Time.", isCorrect: true },
    { id: 'b', text: "Désactiver le chargement de la requête Temperatures dans Power Query Editor.", isCorrect: false },
    { id: 'c', text: "Supprimer les lignes qui se produisent exactement à 0 minutes et 0 secondes de l'heure.", isCorrect: false },
    { id: 'd', text: "Utiliser la fonctionnalité Grouper par pour agréger les lignes par heure, DateKey et LocationKey puis créer une valeur Temp C moyenne par ligne.", isCorrect: true },
    { id: 'e', text: "Utiliser la fonctionnalité Grouper par pour agréger les lignes par DateKey, Reading Time et LocationKey puis créer une valeur Temp C max par ligne.", isCorrect: false },
  ],
  answerType: "multiple",
  explanation: "Créer une colonne qui affiche l'heure est nécessaire pour résumer par heure quand il n'y a pas de dimension Temps ou Heure. Résumer la table en utilisant la fonctionnalité Grouper par réduit le nombre de lignes. Les exigences de rapport dictent que la valeur de température agrégée doit être une moyenne.",
  difficulty: "hard",
  topic: "power-bi-exam-blanc-1",
  chapter: "performance-optimization",
  status: "unseen",
};

export const question50: Question = {
  id: 'pbi-p1-eb1-q-50',
  number: 50,
  text: "Vous prévoyez d'exécuter Power BI Desktop Performance Analyzer. Vous devez vous assurer que le cache du moteur de données N'impactera PAS les résultats du test sans redémarrer Power BI Desktop. Que devez-vous faire en premier ?",
  answers: [
    { id: 'a', text: "Ajouter une page vierge au fichier .pbix et la sélectionner.", isCorrect: false },
    { id: 'b', text: "Connecter DAX Studio au modèle de données.", isCorrect: true },
    { id: 'c', text: "Invoquer la fonction Vider le cache.", isCorrect: false },
    { id: 'd', text: "Invoquer la fonction Actualiser les métadonnées.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "DAX Studio, une fois connecté au modèle de données, peut être utilisé pour vider le cache du moteur de données. La fonction Vider le cache peut être invoquée depuis DAX Studio, une fois que vous le connectez au modèle de données. Ajouter une page vierge au fichier .pbix et la sélectionner est la première étape pour vider le cache visuel, pas le cache du moteur de données.",
  difficulty: "hard",
  topic: "power-bi-exam-blanc-1",
  chapter: "performance-optimization",
  status: "unseen",
};

export const question51: Question = {
  id: 'pbi-p1-eb1-q-51',
  number: 51,
  text: "Vous prévoyez d'optimiser les performances des requêtes Power BI Desktop contre une source de données distante. Vous devez désactiver le comportement par défaut qui applique automatiquement la surbrillance croisée et le filtrage des visuels dans le même rapport. Quelle option devez-vous configurer dans Power BI Desktop ?",
  answers: [
    { id: 'a', text: "Les paramètres de réduction de requêtes Filtres", isCorrect: false },
    { id: 'b', text: "Les filtres persistants des paramètres de rapport", isCorrect: false },
    { id: 'c', text: "Le paramètre Réduire le nombre de requêtes envoyées par réduction de requêtes", isCorrect: true },
    { id: 'd', text: "Les paramètres de réduction de requêtes Segments", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Le paramètre Réduire le nombre de requêtes envoyées par réduction de requêtes désactive le comportement par défaut qui applique automatiquement la surbrillance croisée et le filtrage des visuels dans le même rapport. Les paramètres de segments de réduction de requêtes vous permettent d'appliquer instantanément les changements de segment et d'ajouter un bouton Appliquer à chaque segment.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "performance-optimization",
  status: "unseen",
};

export const question52: Question = {
  id: 'pbi-p1-eb1-q-52',
  number: 52,
  text: "Vous décidez de supprimer les colonnes inutiles de votre modèle de données. Quels sont les deux avantages potentiels de performance de cette action ?",
  answers: [
    { id: 'a', text: "Diminution des temps de chargement des pages du rapport", isCorrect: false },
    { id: 'b', text: "Augmentation des performances DAX", isCorrect: false },
    { id: 'c', text: "Augmentation de la vitesse d'actualisation", isCorrect: true },
    { id: 'd', text: "Réduction de la taille du modèle de données", isCorrect: true },
  ],
  answerType: "multiple",
  explanation: "Moins de colonnes signifie qu'il y a moins de données à importer, ce qui réduira la taille du modèle et diminuera le temps nécessaire pour actualiser le modèle. Puisque le nombre de lignes ne change pas, la vitesse de calcul des mesures DAX existantes ne changera pas. Les temps de chargement des pages du rapport sont principalement déterminés par le nombre de visuels sur la page et les performances DAX.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-1",
  chapter: "performance-optimization",
  status: "unseen",
};

export const question53: Question = {
  id: 'pbi-p1-eb1-q-53',
  number: 53,
  text: "Vous décidez de commencer à utiliser des variables lors de la création de formules DAX. Quels sont les deux avantages de l'utilisation de variables dans les mesures DAX par rapport à l'utilisation d'expressions originales ?",
  answers: [
    { id: 'a', text: "Permet aux utilisateurs de changer la connexion à la source de données dans la mesure DAX", isCorrect: false },
    { id: 'b', text: "A des fonctions supplémentaires qui peuvent être utilisées dans la mesure DAX", isCorrect: false },
    { id: 'c', text: "Améliore les performances globales de la mesure DAX résultante", isCorrect: true },
    { id: 'd', text: "Améliore la lisibilité globale de la mesure DAX résultante", isCorrect: true },
  ],
  answerType: "multiple",
  explanation: "Les noms de variables sont souvent plus courts que les expressions originales, et la variable finale retournée à la fin de la mesure sera plus lisible avec les noms de variables inclus. Les variables mettent en cache le calcul défini, permettant de le référencer plusieurs fois sans impacts supplémentaires des recalculs. Les fonctions DAX sont universelles, il n'y a pas de fonctions spécifiques qui ne peuvent être utilisées que dans les variables.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "dax",
  status: "unseen",
};

export const question54: Question = {
  id: 'pbi-p1-eb1-q-54',
  number: 54,
  text: "Vous prévoyez d'utiliser Power BI Desktop pour créer un rapport avec plusieurs visualisations. Vous devez créer un visuel qui prend en charge les éléments suivants : filtre les autres visuels sur la même page du rapport, permet aux utilisateurs de rechercher des valeurs par lesquelles filtrer les autres visuels. Quel type de visualisation devez-vous utiliser ?",
  answers: [
    { id: 'a', text: "Entonnoir (Funnel)", isCorrect: false },
    { id: 'b', text: "Matrice", isCorrect: false },
    { id: 'c', text: "Nuage de points (Scatter chart)", isCorrect: false },
    { id: 'd', text: "Segment (Slicer)", isCorrect: true },
  ],
  answerType: "single",
  explanation: "La visualisation de segment peut être utilisée pour filtrer les autres visuels sur la page. Vous pouvez activer une zone de recherche dans un segment où les utilisateurs peuvent rechercher des valeurs à filtrer. Une visualisation entonnoir est un graphique avec des étapes connectées séquentiellement. Une visualisation matrice affiche des données en deux dimensions ou plus. Un nuage de points est un graphique avec un ensemble de données numériques le long des axes.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-1",
  chapter: "visualizations",
  status: "unseen",
};

export const question55: Question = {
  id: 'pbi-p1-eb1-q-55',
  number: 55,
  text: "Vous prévoyez de créer un rapport dans Power BI Desktop. Vous devez créer une visualisation qui affiche des données en deux dimensions ou plus et se met en surbrillance croisée avec d'autres visuels sur la même page du rapport. Quel type de visualisation devez-vous utiliser ?",
  answers: [
    { id: 'a', text: "Carte (Card)", isCorrect: false },
    { id: 'b', text: "Matrice", isCorrect: true },
    { id: 'c', text: "Nuage de points (Scatter)", isCorrect: false },
    { id: 'd', text: "Table", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Une visualisation matrice affiche des données en deux dimensions ou plus et se met en surbrillance croisée avec d'autres visuels sur la même page du rapport. Une visualisation carte affiche un seul point de données. Une visualisation nuage de points est un graphique, pas une grille. Une visualisation table est une grille qui contient des données connexes dans un format de grille, avec un support pour deux dimensions uniquement.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-1",
  chapter: "visualizations",
  status: "unseen",
};

export const question56: Question = {
  id: 'pbi-p1-eb1-q-56',
  number: 56,
  text: "Vous devez créer un visuel Python personnalisé en utilisant Power BI Desktop. Que devez-vous faire en premier ?",
  answers: [
    { id: 'a', text: "Configurer les options globales de script Python dans Power BI Desktop.", isCorrect: false },
    { id: 'b', text: "Activer les fonctionnalités de prévisualisation dans Power BI Desktop.", isCorrect: false },
    { id: 'c', text: "Activer l'option de visuels de script dans le volet Visualisation de Power BI Desktop.", isCorrect: false },
    { id: 'd', text: "Installer Python sur votre ordinateur.", isCorrect: true },
  ],
  answerType: "single",
  explanation: "Pour créer un visuel Python en utilisant Power BI Desktop, vous devez d'abord installer Python sur votre ordinateur. Une fois Python installé, vous devrez peut-être configurer les options globales de script Python dans Power BI Desktop. L'activation de l'option de visuels de script dans le volet Visualisation se fait une fois Python installé.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-1",
  chapter: "visualizations",
  status: "unseen",
};

export const question57: Question = {
  id: 'pbi-p1-eb1-q-57',
  number: 57,
  text: "Vous prévoyez de créer un rapport dans Power BI Desktop qui affichera la relation entre le nombre de commandes et le nombre de commandes expédiées par catégorie de produit. Vous devez identifier le visuel qui identifiera clairement les valeurs aberrantes dans l'ensemble de données en les affichant loin de la masse des données. Quel visuel devez-vous utiliser ?",
  answers: [
    { id: 'a', text: "Carte (Card)", isCorrect: false },
    { id: 'b', text: "Jauge (Gauge)", isCorrect: false },
    { id: 'c', text: "Nuage de points (Scatter)", isCorrect: true },
    { id: 'd', text: "Treemap", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Un visuel nuage de points affiche une relation entre les valeurs associées à deux axes : un ensemble de données numériques le long d'un axe horizontal et un autre ensemble de valeurs numériques le long d'un axe vertical. Il est particulièrement adapté pour identifier les valeurs aberrantes car il les affiche loin de la masse des données. Un visuel carte affiche un seul point de données. Un visuel treemap affiche des données comme un ensemble de rectangles imbriqués.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "visualizations",
  status: "unseen",
};

export const question58: Question = {
  id: 'pbi-p1-eb1-q-58',
  number: 58,
  text: "Vous devez ajouter un nouveau visuel à un tableau de bord Power BI. Ce visuel N'EXISTE PAS dans un rapport de l'espace de travail. Que devez-vous faire en premier ?",
  answers: [
    { id: 'a', text: "Ouvrir Voir le contenu associé.", isCorrect: false },
    { id: 'b', text: "Ouvrir le menu Fichier.", isCorrect: false },
    { id: 'c', text: "Sélectionner Ajouter une vignette.", isCorrect: false },
    { id: 'd', text: "Sélectionner Poser une question sur vos données.", isCorrect: true },
  ],
  answerType: "single",
  explanation: "La fonctionnalité Q&A vous permet de créer un visuel en tapant une question sur vos données. Ce nouveau visuel peut ensuite être épinglé au tableau de bord, sans l'ajouter à un rapport. Dans le menu fichier et le menu vignettes, il n'y a pas d'options 'visuel'. Voir le contenu associé affiche le contenu connexe comme les rapports, datasets, etc.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-1",
  chapter: "dashboards",
  status: "unseen",
};

export const question59: Question = {
  id: 'pbi-p1-eb1-q-59',
  number: 59,
  text: "Vous implémentez la fonctionnalité Q&A dans un rapport, afin que les utilisateurs puissent obtenir des réponses à leurs questions par eux-mêmes. Vous devez améliorer vos capacités de recherche Q&A pour les utilisateurs finaux. Quelles deux configurations pouvez-vous ajouter ?",
  answers: [
    { id: 'a', text: "Ajouter un schéma linguistique au dataset.", isCorrect: true },
    { id: 'b', text: "Ajouter des synonymes aux champs du modèle.", isCorrect: true },
    { id: 'c', text: "Configurer le dataset comme modèle composite.", isCorrect: false },
    { id: 'd', text: "Organiser les colonnes et mesures du dataset dans des dossiers logiques dans le volet Champs.", isCorrect: false },
  ],
  answerType: "multiple",
  explanation: "Ajouter des synonymes aux champs du modèle aidera les utilisateurs à les rechercher. Par exemple, vous pouvez donner un synonyme de (Réels) pour la mesure (Ventes). Un schéma linguistique décrit les termes et phrases que Q&A doit comprendre pour les objets dans un dataset. Les modèles composites ne sont pas pris en charge par Q&A aujourd'hui.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "ai-features",
  status: "unseen",
};

export const question60: Question = {
  id: 'pbi-p1-eb1-q-60',
  number: 60,
  text: "Vous modifiez un rapport dans Power BI Desktop. Le rapport contient une seule page de rapport avec trois visuels de carte et un graphique à barres groupées. Vous devez créer un signet qui affiche uniquement le graphique à barres groupées et masque les cartes. La solution doit minimiser l'effort de développement. Que devez-vous faire en premier ?",
  answers: [
    { id: 'a', text: "Ajouter un signet dans le volet Signets.", isCorrect: false },
    { id: 'b', text: "Masquer les trois cartes dans le volet Sélection.", isCorrect: true },
    { id: 'c', text: "Publier le rapport sur le service Power BI.", isCorrect: false },
    { id: 'd', text: "Sélectionner l'option Spotlight sur le graphique à barres groupées.", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Avant de créer un signet, vous devez configurer la page du rapport pour afficher l'état que vous souhaitez capturer dans le signet. Les visuels sont visibles par défaut, vous devez donc les marquer comme masqués. Pour ajouter un signet, vous devez d'abord mettre à jour le signet après avoir masqué les visuels. Bien que spotlight se concentre sur le graphique à barres groupées, il ne masque pas complètement les cartes.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "bookmarks-navigation",
  status: "unseen",
};


/* ===================== QUESTION 61 ===================== */
export const question61: Question = {
  id: 'pbi-p1-eb1-q-61',
  number: 61,
  text: "Vous devez apporter des modifications à vos sources de données. Quelles sont les trois modifications prises en charge par les paramètres de source de données dans l’éditeur Power Query ?",
  answers: [
    { id: 'a', text: "Ajouter une colonne", isCorrect: false },
    { id: 'b', text: "Effacer les autorisations", isCorrect: true },
    { id: 'c', text: "Modifier les autorisations", isCorrect: true },
    { id: 'd', text: "Modifier le chemin du fichier", isCorrect: true },
    { id: 'e', text: "Renommer une colonne", isCorrect: false },
  ],
  answerType: "multiple",
  explanation:
    "Les paramètres de source de données dans Power Query permettent d’effacer et de modifier les autorisations ainsi que de modifier le chemin du fichier. Les modifications structurelles comme l’ajout ou le renommage de colonnes ne sont pas prises en charge.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "power-query",
  status: "unseen",
};

/* ===================== QUESTION 62 ===================== */
export const question62: Question = {
  id: 'pbi-p1-eb1-q-62',
  number: 62,
  text: "Vous avez plusieurs fichiers Excel stockés dans un dossier synchronisé avec OneDrive for Business. Vous devez importer les données sans utiliser de passerelle de données. Quel connecteur devez-vous utiliser ?",
  answers: [
    { id: 'a', text: "Excel workbook", isCorrect: false },
    { id: 'b', text: "Folder", isCorrect: false },
    { id: 'c', text: "SharePoint folder", isCorrect: true },
    { id: 'd', text: "SharePoint list", isCorrect: false },
  ],
  answerType: "single",
  explanation:
    "Le connecteur SharePoint folder permet d’importer plusieurs fichiers Excel stockés dans OneDrive for Business sans nécessiter de passerelle de données.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "data-sources",
  status: "unseen",
};

/* ===================== QUESTION 63 ===================== */
export const question63: Question = {
  id: 'pbi-p1-eb1-q-63',
  number: 63,
  text: "Vous avez deux tables de faits : FactStoreSales (Import) et FactOnlineSales (DirectQuery), liées à une dimension DimCalendar. Quel mode de stockage devez-vous utiliser pour DimCalendar afin de minimiser le temps d’exécution des requêtes ?",
  answers: [
    { id: 'a', text: "DirectQuery", isCorrect: false },
    { id: 'b', text: "Dual", isCorrect: true },
    { id: 'c', text: "Import", isCorrect: false },
    { id: 'd', text: "Aucun", isCorrect: false },
  ],
  answerType: "single",
  explanation:
    "Le mode Dual permet à Power BI d’utiliser Import ou DirectQuery selon la table de faits interrogée, optimisant ainsi les performances.",
  difficulty: "hard",
  topic: "power-bi-exam-blanc-1",
  chapter: "data-modeling",
  status: "unseen",
};

/* ===================== QUESTION 64 ===================== */
export const question64: Question = {
  id: 'pbi-p1-eb1-q-64',
  number: 64,
  text: "Lors de l’importation d’un fichier Excel, vous obtenez l’erreur : « We couldn't find any data formatted as a table ». Que devez-vous faire ?",
  answers: [
    { id: 'a', text: "Utiliser la validation des données dans Excel", isCorrect: false },
    { id: 'b', text: "Créer un tableau dans Excel et enregistrer le fichier", isCorrect: true },
    { id: 'c', text: "Ajouter une application modèle dans Power BI", isCorrect: false },
    { id: 'd', text: "Ajouter une application organisationnelle", isCorrect: false },
  ],
  answerType: "single",
  explanation:
    "Power BI ne peut importer que des données structurées en table depuis Excel. Il faut sélectionner les données et créer un tableau (Ctrl+T).",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-1",
  chapter: "data-sources",
  status: "unseen",
};

/* ===================== QUESTION 65 ===================== */
export const question65: Question = {
  id: 'pbi-p1-eb1-q-65',
  number: 65,
  text: "Vous importez un fichier Excel contenant 10 000 lignes et souhaitez analyser toutes les lignes pour détecter les anomalies. Que devez-vous faire ?",
  answers: [
    { id: 'a', text: "Modifier les paramètres avancés de la source de données", isCorrect: false },
    { id: 'b', text: "Modifier les autorisations de la source de données", isCorrect: false },
    { id: 'c', text: "Activer l’affichage du profil de colonne dans Power Query", isCorrect: true },
    { id: 'd', text: "Modifier les paramètres de requête", isCorrect: false },
  ],
  answerType: "single",
  explanation:
    "Par défaut, Power BI profile seulement les 1 000 premières lignes. Activer le profil de colonne sur l’ensemble des données permet d’analyser toutes les lignes.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "power-query",
  status: "unseen",
};

/* ===================== QUESTION 66 ===================== */
export const question66: Question = {
  id: 'pbi-p1-eb1-q-66',
  number: 66,
  text: "Vous devez afficher toutes les catégories de produits dans un visuel, même si certaines n’ont aucune vente. Que devez-vous faire ?",
  answers: [
    { id: 'a', text: "Créer une colonne calculée", isCorrect: false },
    { id: 'b', text: "Activer l’option Afficher les éléments sans données", isCorrect: true },
    { id: 'c', text: "Exclure les valeurs vides", isCorrect: false },
    { id: 'd', text: "Effectuer un cross join", isCorrect: false },
  ],
  answerType: "single",
  explanation:
    "L’option « Afficher les éléments sans données » garantit que toutes les catégories apparaissent dans le visuel.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-1",
  chapter: "visualizations",
  status: "unseen",
};

/* ===================== QUESTION 67 ===================== */
export const question67: Question = {
  id: 'pbi-p1-eb1-q-67',
  number: 67,
  text: "Vous utilisez DirectQuery et souhaitez améliorer l’efficacité des requêtes sans changer le mode de connectivité. Que devez-vous faire ?",
  answers: [
    { id: 'a', text: "Ajouter des colonnes calculées", isCorrect: false },
    { id: 'b', text: "Désactiver les interactions de segment", isCorrect: false },
    { id: 'c', text: "Activer Assume Referential Integrity", isCorrect: true },
    { id: 'd', text: "Passer en mode Import", isCorrect: false },
  ],
  answerType: "single",
  explanation:
    "Assume Referential Integrity permet d’utiliser des INNER JOINs au lieu de OUTER JOINs, améliorant ainsi les performances en DirectQuery.",
  difficulty: "hard",
  topic: "power-bi-exam-blanc-1",
  chapter: "performance",
  status: "unseen",
};

/* ===================== QUESTION 68 ===================== */
export const question68: Question = {
  id: 'pbi-p1-eb1-q-68',
  number: 68,
  text: "Vous importez un fichier Excel avec les colonnes Année, 2021 et 2022. Vous devez transformer les données en colonnes Mois, Année et Montant. Quelle transformation devez-vous utiliser en premier ?",
  answers: [
    { id: 'a', text: "Pivot", isCorrect: false },
    { id: 'b', text: "Supprimer des colonnes", isCorrect: false },
    { id: 'c', text: "Transposer", isCorrect: false },
    { id: 'd', text: "Unpivot", isCorrect: true },
  ],
  answerType: "single",
  explanation:
    "L’opération Unpivot permet de transformer les colonnes d’années en lignes avec une colonne Année et une colonne Montant.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "power-query",
  status: "unseen",
};

/* ===================== QUESTION 69 ===================== */
export const question69: Question = {
  id: 'pbi-p1-eb1-q-69',
  number: 69,
  text: "Vous avez une table avec une colonne Country et plusieurs colonnes Mois Année. Vous devez regrouper toutes les ventes dans une seule colonne. Que devez-vous faire ?",
  answers: [
    { id: 'a', text: "Pivot Column", isCorrect: false },
    { id: 'b', text: "Unpivot Other Columns", isCorrect: true },
    { id: 'c', text: "Unpivot Columns", isCorrect: false },
    { id: 'd', text: "Transposer", isCorrect: false },
  ],
  answerType: "single",
  explanation:
    "Unpivot Other Columns permet de transformer toutes les colonnes de mois en une seule colonne de valeurs, y compris celles ajoutées ultérieurement.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "power-query",
  status: "unseen",
};

/* ===================== QUESTION 70 ===================== */
export const question70: Question = {
  id: 'pbi-p1-eb1-q-70',
  number: 70,
  text: "Vous avez une colonne ProductID avec des valeurs comme PD15332. Vous devez supprimer le préfixe PD. Quelles commandes pouvez-vous utiliser ?",
  answers: [
    { id: 'a', text: "Remove Rows", isCorrect: false },
    { id: 'b', text: "Replace Errors", isCorrect: false },
    { id: 'c', text: "Replace Values", isCorrect: true },
    { id: 'd', text: "Trim", isCorrect: true },
  ],
  answerType: "multiple",
  explanation:
    "Replace Values permet de supprimer le préfixe texte, et Trim supprime les espaces superflus. Les autres options ne modifient pas les valeurs de texte.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-1",
  chapter: "power-query",
  status: "unseen",
};

/* ===================== QUESTION 71 ===================== */
export const question71: Question = {
  id: 'pbi-p1-eb1-q-71',
  number: 71,
  text: "Vous disposez de plusieurs tables Produits et souhaitez créer une dimension optimisée pour un schéma en étoile. Que devez-vous faire ?",
  answers: [
    { id: 'a', text: "Importer toutes les tables séparément", isCorrect: false },
    { id: 'b', text: "Importer uniquement la table ProductName", isCorrect: false },
    { id: 'c', text: "Fusionner les tables pour créer une seule dimension Produit", isCorrect: true },
    { id: 'd', text: "Utiliser Append", isCorrect: false },
  ],
  answerType: "single",
  explanation:
    "Un schéma en étoile nécessite une seule table de dimension. La fusion (Merge) permet de créer une dimension Produit unique.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "data-modeling",
  status: "unseen",
};

/* ===================== QUESTION 72 ===================== */
export const question72: Question = {
  id: 'pbi-p1-eb1-q-72',
  number: 72,
  text: "Vous devez analyser des données par année, trimestre, mois, semaine et jour, tout en minimisant la taille du modèle. Que devez-vous faire ?",
  answers: [
    { id: 'a', text: "Ajouter une table de dates dédiée", isCorrect: true },
    { id: 'b', text: "Ajouter des colonnes dans la table de faits", isCorrect: false },
    { id: 'c', text: "Activer Auto date/time (fichier)", isCorrect: false },
    { id: 'd', text: "Activer Auto date/time (global)", isCorrect: false },
  ],
  answerType: "single",
  explanation:
    "Une table de dates dédiée offre une flexibilité maximale, réduit la taille du modèle et permet l’analyse hebdomadaire.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "time-intelligence",
  status: "unseen",
};

/* ===================== QUESTION 73 ===================== */
export const question73: Question = {
  id: 'pbi-p1-eb1-q-73',
  number: 73,
  text: "Un rapport Power BI connecté à un flux de données public est lent. Où devez-vous configurer la mise en cache de la requête ?",
  answers: [
    { id: 'a', text: "Dans un dataflow", isCorrect: true },
    { id: 'b', text: "Dans le rapport", isCorrect: false },
    { id: 'c', text: "Dans Power BI Desktop", isCorrect: false },
    { id: 'd', text: "Dans le service Power BI", isCorrect: false },
  ],
  answerType: "single",
  explanation:
    "Les dataflows permettent la mise en cache des requêtes et évitent leur réexécution à chaque chargement.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-1",
  chapter: "performance",
  status: "unseen",
};

/* ===================== QUESTION 74 ===================== */
export const question74: Question = {
  id: 'pbi-p1-eb1-q-74',
  number: 74,
  text: "Vous devez réduire la taille du modèle et minimiser les requêtes lors des actualisations, sans modifier la table Orders d’origine. Que devez-vous faire ?",
  answers: [
    { id: 'a', text: "Dupliquer Orders", isCorrect: false },
    { id: 'b', text: "Créer une nouvelle table avec les colonnes requises", isCorrect: false },
    { id: 'c', text: "Créer une requête référencée, supprimer les colonnes inutiles et désactiver le chargement de Orders", isCorrect: true },
    { id: 'd', text: "Créer une requête par visuel", isCorrect: false },
  ],
  answerType: "single",
  explanation:
    "Une requête référencée permet de conserver Orders comme table de staging tout en chargeant uniquement les colonnes nécessaires.",
  difficulty: "hard",
  topic: "power-bi-exam-blanc-1",
  chapter: "data-modeling",
  status: "unseen",
};

export const question75: Question = {
  id: 'pbi-p2-q-75',
  number: 75,
  text: "Votre entreprise utilise Power BI pour analyser les ventes. Le modèle de données contient une table de faits 'Sales' et une table de dimension 'Regions' avec des noms de régions uniques. Vous devez filtrer les ventes par région. Que devez-vous faire ?",
  answers: [
    { id: 'a', text: "Combiner les tables Sales et Regions dans une table calculée", isCorrect: false },
    { id: 'b', text: "Créer une relation un-à-plusieurs entre Regions et Sales", isCorrect: true },
    { id: 'c', text: "Activer le filtrage bidirectionnel", isCorrect: false },
    { id: 'd', text: "Définir la direction de filtrage sur simple", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Une relation un-à-plusieurs entre la table de dimension Regions et la table de faits Sales permet un filtrage efficace par région sans ambiguïté.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-2",
  chapter: "modeling",
  status: "unseen",
};

export const question76: Question = {
  id: 'pbi-p2-q-76',
  number: 76,
  text: "Vous créez un modèle sémantique Power BI à partir de plusieurs tables SQL Server. Vous devez modifier les relations entre les tables. Quelle interface devez-vous utiliser dans Power BI Desktop ?",
  answers: [
    { id: 'a', text: "Vue Table", isCorrect: false },
    { id: 'b', text: "Vue Modèle", isCorrect: true },
    { id: 'c', text: "Vue requête DAX", isCorrect: false },
    { id: 'd', text: "Vue Rapport", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Les relations entre tables sont configurées dans la vue Modèle de Power BI Desktop.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-2",
  chapter: "modeling",
  status: "unseen",
};

export const question77: Question = {
  id: 'pbi-p2-q-77',
  number: 77,
  text: "Votre organisation développe un rapport Power BI avec des dates de commande et de livraison mais sans table de dates. Quelles actions devez-vous effectuer pour créer une table de dates fonctionnelle pour les calculs de time intelligence ?",
  answers: [
    { id: 'a', text: "Ajouter des colonnes année, mois et jour", isCorrect: true },
    { id: 'b', text: "Créer une table avec DISTINCT sur la date de commande", isCorrect: false },
    { id: 'c', text: "Activer Auto date/time", isCorrect: false },
    { id: 'd', text: "Générer la table dans Power Query", isCorrect: false },
    { id: 'e', text: "Marquer la table comme table de dates", isCorrect: true },
    { id: 'f', text: "Utiliser CALENDARAUTO", isCorrect: true },
  ],
  answerType: "multiple",
  explanation: "Une table de dates efficace nécessite des colonnes temporelles, doit être marquée comme table de dates et peut être générée avec CALENDARAUTO pour couvrir toutes les années du modèle.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-2",
  chapter: "dax",
  status: "unseen",
};

export const question78: Question = {
  id: 'pbi-p2-q-78',
  number: 78,
  text: "Vous développez une mesure rapide (Quick Measure) dans Power BI Desktop. Quels éléments pouvez-vous utiliser ?",
  answers: [
    { id: 'a', text: "Calculs", isCorrect: true },
    { id: 'b', text: "Colonnes conditionnelles", isCorrect: false },
    { id: 'c', text: "Requêtes DAX", isCorrect: false },
    { id: 'd', text: "Champs", isCorrect: true },
    { id: 'e', text: "Fonctions Power Query M", isCorrect: false },
  ],
  answerType: "multiple",
  explanation: "Les Quick Measures reposent sur des calculs appliqués à des champs. Power BI génère automatiquement le DAX.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-2",
  chapter: "dax",
  status: "unseen",
};


export const question79: Question = {
  id: 'pbi-p2-q-79',
  number: 79,
  text: "Vous devez créer une mesure qui retourne toujours le total des ventes pour l'année 2022, quel que soit le contexte du rapport. Quelle fonction DAX devez-vous utiliser avec SUM ?",
  answers: [
    { id: 'a', text: "CALCULATE", isCorrect: true },
    { id: 'b', text: "FILTER", isCorrect: false },
    { id: 'c', text: "IGNORE", isCorrect: false },
    { id: 'd', text: "SUMX", isCorrect: false },
  ],
  answerType: "single",
  explanation: "CALCULATE permet de modifier le contexte de filtre et d'imposer une année spécifique.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-2",
  chapter: "dax",
  status: "unseen",
};


export const question80: Question = {
  id: 'pbi-p2-q-80',
  number: 80,
  text: "Quels éléments du modèle peuvent être créés à l’aide d’expressions DAX ?",
  answers: [
    { id: 'a', text: "Table calculée", isCorrect: true },
    { id: 'b', text: "Dossier d’affichage", isCorrect: false },
    { id: 'c', text: "Hiérarchies", isCorrect: false },
    { id: 'd', text: "Paramètre de plage numérique", isCorrect: true },
  ],
  answerType: "multiple",
  explanation: "Les tables calculées et les paramètres What-if sont générés à l’aide de DAX.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-2",
  chapter: "modeling",
  status: "unseen",
};


export const question81: Question = {
  id: 'pbi-p2-q-81',
  number: 81,
  text: "Vous devez réduire la taille d’un modèle Power BI. Quelle technique devez-vous utiliser ?",
  answers: [
    { id: 'a', text: "Configurer la réduction de requêtes (Filtres)", isCorrect: false },
    { id: 'b', text: "Configurer la réduction de requêtes (Slicers)", isCorrect: false },
    { id: 'c', text: "Définir le mode de stockage sur DirectQuery", isCorrect: true },
    { id: 'd', text: "Définir le mode de stockage sur Import", isCorrect: false },
  ],
  answerType: "single",
  explanation: "DirectQuery réduit la taille du modèle car seules les métadonnées sont stockées localement.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-2",
  chapter: "performance",
  status: "unseen",
};

export const question82: Question = {
  id: 'pbi-p2-q-82',
  number: 82,
  text: "Vous devez afficher le total des ventes et le pourcentage du total général dans un même visuel. Quelle fonction DAX devez-vous utiliser pour ignorer le contexte de filtre ?",
  answers: [
    { id: 'a', text: "ALL", isCorrect: true },
    { id: 'b', text: "FILTER", isCorrect: false },
    { id: 'c', text: "VALUES", isCorrect: false },
    { id: 'd', text: "KEEPFILTERS", isCorrect: false },
  ],
  answerType: "single",
  explanation: "La fonction ALL supprime le contexte de filtre pour calculer un total général.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-2",
  chapter: "dax",
  status: "unseen",
};


export const question83: Question = {
  id: 'pbi-p2-q-83',
  number: 83,
  text: "Quel visuel Power BI est le plus adapté pour comparer une valeur réelle à un objectif ?",
  answers: [
    { id: 'a', text: "Graphique en barres", isCorrect: false },
    { id: 'b', text: "Carte KPI", isCorrect: true },
    { id: 'c', text: "Table", isCorrect: false },
    { id: 'd', text: "Carte simple", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Le visuel KPI est conçu pour comparer une valeur réelle à une cible.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-2",
  chapter: "visualizations",
  status: "unseen",
};


export const question84: Question = {
  id: 'pbi-p2-q-84',
  number: 84,
  text: "Quelle fonctionnalité Power BI permet de limiter l’accès aux données selon l’utilisateur connecté ?",
  answers: [
    { id: 'a', text: "Sensibilité des données", isCorrect: false },
    { id: 'b', text: "RLS (Row-Level Security)", isCorrect: true },
    { id: 'c', text: "Audit log", isCorrect: false },
    { id: 'd', text: "Workspaces", isCorrect: false },
  ],
  answerType: "single",
  explanation: "La sécurité au niveau des lignes (RLS) restreint les données visibles selon l’utilisateur.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-2",
  chapter: "security",
  status: "unseen",
};


export const question85: Question = {
  id: 'pbi-p2-q-85',
  number: 85,
  text: "Vous souhaitez améliorer les performances d’un rapport Power BI. Quelle action est recommandée ?",
  answers: [
    { id: 'a', text: "Ajouter plus de visuels", isCorrect: false },
    { id: 'b', text: "Réduire le nombre de colonnes inutiles", isCorrect: true },
    { id: 'c', text: "Utiliser uniquement des tables calculées", isCorrect: false },
    { id: 'd', text: "Activer le filtrage bidirectionnel partout", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Réduire les colonnes inutiles diminue la taille du modèle et améliore les performances.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-2",
  chapter: "performance",
  status: "unseen",
};


export const question86: Question = {
  id: 'pbi-p2-q-86',
  number: 86,
  text: "Quelle fonction DAX permet de compter des lignes selon une condition ?",
  answers: [
    { id: 'a', text: "COUNT", isCorrect: false },
    { id: 'b', text: "COUNTX", isCorrect: true },
    { id: 'c', text: "SUM", isCorrect: false },
    { id: 'd', text: "DISTINCTCOUNT", isCorrect: false },
  ],
  answerType: "single",
  explanation: "COUNTX évalue une expression ligne par ligne selon un contexte.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-2",
  chapter: "dax",
  status: "unseen",
};


export const question87: Question = {
  id: 'pbi-p2-q-87',
  number: 87,
  text: "Quel type de filtre s’applique uniquement à une page spécifique du rapport ?",
  answers: [
    { id: 'a', text: "Filtre visuel", isCorrect: false },
    { id: 'b', text: "Filtre de page", isCorrect: true },
    { id: 'c', text: "Filtre de rapport", isCorrect: false },
    { id: 'd', text: "RLS", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Les filtres de page s’appliquent uniquement à la page courante.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-2",
  chapter: "visualizations",
  status: "unseen",
};


export const question88: Question = {
  id: 'pbi-p2-q-88',
  number: 88,
  text: "Quel est l’avantage principal de l’utilisation d’une table de dimensions ?",
  answers: [
    { id: 'a', text: "Augmenter la taille du modèle", isCorrect: false },
    { id: 'b', text: "Simplifier l’analyse et le filtrage", isCorrect: true },
    { id: 'c', text: "Créer plus de mesures", isCorrect: false },
    { id: 'd', text: "Remplacer Power Query", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Les tables de dimensions facilitent l’analyse et améliorent la lisibilité du modèle.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-2",
  chapter: "modeling",
  status: "unseen",
};


export const question89: Question = {
  id: 'pbi-p2-q-89',
  number: 89,
  text: "Quel format de données est le plus adapté pour stocker des identifiants uniques ?",
  answers: [
    { id: 'a', text: "Texte", isCorrect: false },
    { id: 'b', text: "Nombre entier", isCorrect: true },
    { id: 'c', text: "Date", isCorrect: false },
    { id: 'd', text: "Booléen", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Les identifiants uniques sont généralement stockés sous forme de nombres entiers.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-2",
  chapter: "modeling",
  status: "unseen",
};


export const question90: Question = {
  id: 'pbi-p2-q-90',
  number: 90,
  text: "Quelle fonctionnalité permet de synchroniser un slicer sur plusieurs pages ?",
  answers: [
    { id: 'a', text: "Bookmarks", isCorrect: false },
    { id: 'b', text: "Slicer Sync", isCorrect: true },
    { id: 'c', text: "Drillthrough", isCorrect: false },
    { id: 'd', text: "Tooltips", isCorrect: false },
  ],
  answerType: "single",
  explanation: "La synchronisation des slicers permet de conserver les mêmes filtres sur plusieurs pages.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-2",
  chapter: "visualizations",
  status: "unseen",
};


export const question91: Question = {
  id: 'pbi-p2-q-91',
  number: 91,
  text: "Quel type de relation est recommandé entre une table de faits et une table de dimensions dans un modèle en étoile ?",
  answers: [
    { id: 'a', text: "Plusieurs à plusieurs", isCorrect: false },
    { id: 'b', text: "Un à un", isCorrect: false },
    { id: 'c', text: "Un à plusieurs", isCorrect: true },
    { id: 'd', text: "Bidirectionnelle obligatoire", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Un modèle en étoile utilise des relations un-à-plusieurs entre dimensions et faits.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-2",
  chapter: "modeling",
  status: "unseen",
};


export const question92: Question = {
  id: 'pbi-p2-q-92',
  number: 92,
  text: "Quelle fonctionnalité permet d’afficher une page de rapport détaillée à partir d’un clic droit sur un visuel ?",
  answers: [
    { id: 'a', text: "Drillthrough", isCorrect: true },
    { id: 'b', text: "Bookmark", isCorrect: false },
    { id: 'c', text: "Tooltip", isCorrect: false },
    { id: 'd', text: "Focus mode", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Le Drillthrough permet de naviguer vers une page détaillée filtrée.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-2",
  chapter: "visualizations",
  status: "unseen",
};


export const question93: Question = {
  id: 'pbi-p2-q-93',
  number: 93,
  text: "Quel type de mesure DAX est recalculé dynamiquement selon le contexte de filtre ?",
  answers: [
    { id: 'a', text: "Colonne calculée", isCorrect: false },
    { id: 'b', text: "Mesure", isCorrect: true },
    { id: 'c', text: "Table calculée", isCorrect: false },
    { id: 'd', text: "Champ de hiérarchie", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Les mesures DAX sont évaluées dynamiquement selon le contexte.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-2",
  chapter: "dax",
  status: "unseen",
};

export const question94: Question = {
  id: 'pbi-p2-q-94',
  number: 94,
  text: "Quel est l’impact principal d’un filtrage bidirectionnel mal utilisé ?",
  answers: [
    { id: 'a', text: "Meilleure sécurité", isCorrect: false },
    { id: 'b', text: "Dégradation des performances", isCorrect: true },
    { id: 'c', text: "Réduction du modèle", isCorrect: false },
    { id: 'd', text: "Augmentation de la compression", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Un filtrage bidirectionnel excessif peut générer des requêtes coûteuses.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-2",
  chapter: "performance",
  status: "unseen",
};


export const question95: Question = {
  id: 'pbi-p2-q-95',
  number: 95,
  text: "Quelle option permet d’afficher un message personnalisé lors d’un survol de visuel ?",
  answers: [
    { id: 'a', text: "Drillthrough", isCorrect: false },
    { id: 'b', text: "Tooltip personnalisé", isCorrect: true },
    { id: 'c', text: "Slicer", isCorrect: false },
    { id: 'd', text: "Focus mode", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Les tooltips personnalisés affichent des informations enrichies au survol.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-2",
  chapter: "visualizations",
  status: "unseen",
};


export const question96: Question = {
  id: 'pbi-p2-q-96',
  number: 96,
  text: "Quelle fonction DAX permet d’itérer ligne par ligne sur une table ?",
  answers: [
    { id: 'a', text: "SUM", isCorrect: false },
    { id: 'b', text: "SUMX", isCorrect: true },
    { id: 'c', text: "COUNT", isCorrect: false },
    { id: 'd', text: "AVERAGE", isCorrect: false },
  ],
  answerType: "single",
  explanation: "SUMX parcourt une table ligne par ligne pour évaluer une expression.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-2",
  chapter: "dax",
  status: "unseen",
};



export const question97: Question = {
  id: 'pbi-p2-q-97',
  number: 97,
  text: "Quel visuel est le plus adapté pour afficher une hiérarchie temporelle ?",
  answers: [
    { id: 'a', text: "Carte", isCorrect: false },
    { id: 'b', text: "Graphique en courbes", isCorrect: true },
    { id: 'c', text: "Treemap", isCorrect: false },
    { id: 'd', text: "Table", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Les graphiques en courbes sont idéaux pour représenter l’évolution dans le temps.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-2",
  chapter: "visualizations",
  status: "unseen",
};



export const question98: Question = {
  id: 'pbi-p2-q-98',
  number: 98,
  text: "Quel type de filtre limite les données visibles pour tous les utilisateurs du rapport ?",
  answers: [
    { id: 'a', text: "Filtre visuel", isCorrect: false },
    { id: 'b', text: "Filtre de page", isCorrect: false },
    { id: 'c', text: "Filtre de rapport", isCorrect: true },
    { id: 'd', text: "Slicer", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Le filtre de rapport s’applique à toutes les pages du rapport.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-2",
  chapter: "visualizations",
  status: "unseen",
};


export const question99: Question = {
  id: 'pbi-p2-q-99',
  number: 99,
  text: "Quelle est la meilleure pratique pour nommer les mesures DAX ?",
  answers: [
    { id: 'a', text: "Utiliser des abréviations", isCorrect: false },
    { id: 'b', text: "Utiliser des noms explicites", isCorrect: true },
    { id: 'c', text: "Utiliser des numéros", isCorrect: false },
    { id: 'd', text: "Utiliser le nom de la table uniquement", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Des noms explicites facilitent la compréhension et la maintenance.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-2",
  chapter: "best-practices",
  status: "unseen",
};


export const question100: Question = {
  id: 'pbi-p2-q-100',
  number: 100,
  text: "Quelle option permet d’optimiser les requêtes DirectQuery ?",
  answers: [
    { id: 'a', text: "Désactiver les relations", isCorrect: false },
    { id: 'b', text: "Assume Referential Integrity", isCorrect: true },
    { id: 'c', text: "Ajouter des colonnes calculées", isCorrect: false },
    { id: 'd', text: "Utiliser des tables larges", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Assume Referential Integrity permet d’utiliser des INNER JOINs plus performants.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-2",
  chapter: "performance",
  status: "unseen",
};


export const question101: Question = {
  id: 'pbi-p2-q-101',
  number: 101,
  text: "Quelle fonctionnalité Power BI permet de créer une navigation interactive entre plusieurs pages de rapport ?",
  answers: [
    { id: 'a', text: "Drillthrough", isCorrect: false },
    { id: 'b', text: "Bookmarks", isCorrect: true },
    { id: 'c', text: "Tooltips", isCorrect: false },
    { id: 'd', text: "Slicers", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Les signets (Bookmarks) permettent de créer des scénarios de navigation interactive.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-2",
  chapter: "visualizations",
  status: "unseen",
};

export const question102: Question = {
  id: 'pbi-p2-q-102',
  number: 102,
  text: "Quel type de visuel permet d’afficher des indicateurs de performance avec une valeur cible ?",
  answers: [
    { id: 'a', text: "Carte simple", isCorrect: false },
    { id: 'b', text: "KPI", isCorrect: true },
    { id: 'c', text: "Table", isCorrect: false },
    { id: 'd', text: "Graphique en colonnes", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Le visuel KPI est conçu pour comparer une valeur à un objectif.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-2",
  chapter: "visualizations",
  status: "unseen",
};


export const question103: Question = {
  id: 'pbi-p2-q-103',
  number: 103,
  text: "Quelle fonction DAX est utilisée pour modifier le contexte de filtre dans un calcul ?",
  answers: [
    { id: 'a', text: "CALCULATE", isCorrect: true },
    { id: 'b', text: "SUMX", isCorrect: false },
    { id: 'c', text: "RELATED", isCorrect: false },
    { id: 'd', text: "LOOKUPVALUE", isCorrect: false },
  ],
  answerType: "single",
  explanation: "CALCULATE permet de modifier ou d’ajouter des filtres dans une expression DAX.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-2",
  chapter: "dax",
  status: "unseen",
};


export const question104: Question = {
  id: 'pbi-p2-q-104',
  number: 104,
  text: "Quel type de sécurité Power BI limite l’accès aux lignes de données selon l’utilisateur ?",
  answers: [
    { id: 'a', text: "Object-level security", isCorrect: false },
    { id: 'b', text: "Row-level security (RLS)", isCorrect: true },
    { id: 'c', text: "Workspace roles", isCorrect: false },
    { id: 'd', text: "Sensitivity labels", isCorrect: false },
  ],
  answerType: "single",
  explanation: "La sécurité au niveau des lignes permet de filtrer les données par utilisateur.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-2",
  chapter: "security",
  status: "unseen",
};


export const question105: Question = {
  id: 'pbi-p2-q-105',
  number: 105,
  text: "Quelle est la meilleure pratique pour réduire la taille d’un modèle Power BI ?",
  answers: [
    { id: 'a', text: "Utiliser des colonnes calculées", isCorrect: false },
    { id: 'b', text: "Supprimer les colonnes inutiles", isCorrect: true },
    { id: 'c', text: "Activer Auto Date/Time", isCorrect: false },
    { id: 'd', text: "Créer plus de relations", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Supprimer les colonnes inutiles réduit la mémoire consommée.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-2",
  chapter: "performance",
  status: "unseen",
};


export const question106: Question = {
  id: 'pbi-p2-q-106',
  number: 106,
  text: "Quel type de relation doit être évité dans un modèle en étoile performant ?",
  answers: [
    { id: 'a', text: "Un à plusieurs", isCorrect: false },
    { id: 'b', text: "Plusieurs à plusieurs", isCorrect: true },
    { id: 'c', text: "Relation active", isCorrect: false },
    { id: 'd', text: "Relation simple", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Les relations plusieurs-à-plusieurs augmentent la complexité et impactent les performances.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-2",
  chapter: "modeling",
  status: "unseen",
};


export const question107: Question = {
  id: 'pbi-p2-q-107',
  number: 107,
  text: "Quel outil permet d’analyser les performances d’un rapport Power BI Desktop ?",
  answers: [
    { id: 'a', text: "DAX Studio", isCorrect: false },
    { id: 'b', text: "Performance Analyzer", isCorrect: true },
    { id: 'c', text: "Power Query Editor", isCorrect: false },
    { id: 'd', text: "SQL Server Profiler", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Performance Analyzer mesure le temps d’exécution des visuels.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-2",
  chapter: "performance",
  status: "unseen",
};


export const question108: Question = {
  id: 'pbi-p2-q-108',
  number: 108,
  text: "Quelle transformation Power Query permet de transformer des colonnes en lignes ?",
  answers: [
    { id: 'a', text: "Pivot", isCorrect: false },
    { id: 'b', text: "Unpivot", isCorrect: true },
    { id: 'c', text: "Merge", isCorrect: false },
    { id: 'd', text: "Append", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Unpivot convertit des colonnes en lignes.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-2",
  chapter: "power-query",
  status: "unseen",
};


export const question109: Question = {
  id: 'pbi-p2-q-109',
  number: 109,
  text: "Quel type de champ doit être utilisé pour créer une hiérarchie Date → Année → Mois ?",
  answers: [
    { id: 'a', text: "Texte", isCorrect: false },
    { id: 'b', text: "Date", isCorrect: true },
    { id: 'c', text: "Booléen", isCorrect: false },
    { id: 'd', text: "Décimal", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Les hiérarchies temporelles nécessitent des champs de type Date.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-2",
  chapter: "modeling",
  status: "unseen",
};


export const question110: Question = {
  id: 'pbi-p2-q-110',
  number: 110,
  text: "Quelle fonctionnalité permet de filtrer un visuel en cliquant sur un autre visuel ?",
  answers: [
    { id: 'a', text: "Drillthrough", isCorrect: false },
    { id: 'b', text: "Cross-filtering", isCorrect: true },
    { id: 'c', text: "Bookmarks", isCorrect: false },
    { id: 'd', text: "Tooltips", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Le cross-filtering permet l’interaction entre visuels.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-2",
  chapter: "visualizations",
  status: "unseen",
};


export const question111: Question = {
  id: 'pbi-p2-q-111',
  number: 111,
  text: "Quel est le principal avantage d’utiliser des mesures plutôt que des colonnes calculées ?",
  answers: [
    { id: 'a', text: "Elles occupent plus de mémoire", isCorrect: false },
    { id: 'b', text: "Elles sont recalculées dynamiquement", isCorrect: true },
    { id: 'c', text: "Elles modifient les données sources", isCorrect: false },
    { id: 'd', text: "Elles ralentissent les rapports", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Les mesures sont calculées à la volée selon le contexte de filtre.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-2",
  chapter: "dax",
  status: "unseen",
};



export const question112: Question = {
  id: 'pbi-p2-q-112',
  number: 112,
  text: "Quel type de connexion permet de charger les données entièrement en mémoire ?",
  answers: [
    { id: 'a', text: "DirectQuery", isCorrect: false },
    { id: 'b', text: "Import", isCorrect: true },
    { id: 'c', text: "Live connection", isCorrect: false },
    { id: 'd', text: "Composite model", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Le mode Import charge les données dans le moteur VertiPaq.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-2",
  chapter: "modeling",
  status: "unseen",
};



export const question113: Question = {
  id: 'pbi-p2-q-113',
  number: 113,
  text: "Quel composant Power BI permet de réutiliser des données entre plusieurs rapports ?",
  answers: [
    { id: 'a', text: "Dataset partagé", isCorrect: true },
    { id: 'b', text: "Rapport paginé", isCorrect: false },
    { id: 'c', text: "Table calculée", isCorrect: false },
    { id: 'd', text: "Visuel personnalisé", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Les datasets partagés permettent la réutilisation de modèles.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-2",
  chapter: "service",
  status: "unseen",
};


export const question114: Question = {
  id: 'pbi-p2-q-114',
  number: 114,
  text: "Quel type de colonne Power Query est le plus optimisé pour la compression ?",
  answers: [
    { id: 'a', text: "Texte", isCorrect: false },
    { id: 'b', text: "Entier", isCorrect: true },
    { id: 'c', text: "DateTime", isCorrect: false },
    { id: 'd', text: "Décimal", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Les colonnes entières offrent une meilleure compression VertiPaq.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-2",
  chapter: "performance",
  status: "unseen",
};


export const question115: Question = {
  id: 'pbi-p2-q-115',
  number: 115,
  text: "Quelle fonctionnalité permet d’afficher un visuel détaillé au survol ?",
  answers: [
    { id: 'a', text: "Tooltip", isCorrect: true },
    { id: 'b', text: "Drillthrough", isCorrect: false },
    { id: 'c', text: "Bookmark", isCorrect: false },
    { id: 'd', text: "Focus mode", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Les tooltips affichent des informations supplémentaires au survol.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-2",
  chapter: "visualizations",
  status: "unseen",
};


export const question116: Question = {
  id: 'pbi-p2-q-116',
  number: 116,
  text: "Quel est le rôle principal d’un workspace Power BI ?",
  answers: [
    { id: 'a', text: "Créer des visualisations", isCorrect: false },
    { id: 'b', text: "Collaborer et gérer le contenu", isCorrect: true },
    { id: 'c', text: "Écrire du DAX", isCorrect: false },
    { id: 'd', text: "Transformer les données", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Les workspaces servent à collaborer et publier du contenu Power BI.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-2",
  chapter: "service",
  status: "unseen",
};


export const question117: Question = {
  id: 'pbi-p2-q-117',
  number: 117,
  text: "Quelle option empêche une interaction entre deux visuels ?",
  answers: [
    { id: 'a', text: "Edit interactions", isCorrect: true },
    { id: 'b', text: "Bookmarks", isCorrect: false },
    { id: 'c', text: "Drillthrough", isCorrect: false },
    { id: 'd', text: "Sync slicers", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Edit interactions permet de contrôler l’influence entre visuels.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-2",
  chapter: "visualizations",
  status: "unseen",
};


export const question118: Question = {
  id: 'pbi-p2-q-118',
  number: 118,
  text: "Quelle fonction DAX retourne une table filtrée ?",
  answers: [
    { id: 'a', text: "SUM", isCorrect: false },
    { id: 'b', text: "FILTER", isCorrect: true },
    { id: 'c', text: "COUNT", isCorrect: false },
    { id: 'd', text: "RELATED", isCorrect: false },
  ],
  answerType: "single",
  explanation: "FILTER retourne une table basée sur une condition.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-2",
  chapter: "dax",
  status: "unseen",
};


export const question119: Question = {
  id: 'pbi-p2-q-119',
  number: 119,
  text: "Quel type de rapport Power BI est optimisé pour l’impression ?",
  answers: [
    { id: 'a', text: "Rapport interactif", isCorrect: false },
    { id: 'b', text: "Rapport paginé", isCorrect: true },
    { id: 'c', text: "Dashboard", isCorrect: false },
    { id: 'd', text: "Dataset", isCorrect: false },
  ],
  answerType: "single",
  explanation: "Les rapports paginés sont conçus pour l’impression.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-2",
  chapter: "service",
  status: "unseen",
};


export const question120: Question = {
  id: 'pbi-p2-q-120',
  number: 120,
  text: "Quelle fonctionnalité Power BI permet de masquer une page du rapport aux utilisateurs ?",
  answers: [
    { id: 'a', text: "RLS", isCorrect: false },
    { id: 'b', text: "Hide page", isCorrect: true },
    { id: 'c', text: "Lock visuals", isCorrect: false },
    { id: 'd', text: "Sensitivity label", isCorrect: false },
  ],
  answerType: "single",
  explanation: "L’option Hide page masque la page sans la supprimer.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-2",
  chapter: "visualizations",
  status: "unseen",
};

export const question121: Question = {
  id: 'pbi-p2-q-121',
  number: 121,
  text: "Vous devez créer un tableau de bord Power BI. Quel outil devez-vous utiliser ?",
  answers: [
    { id: 'a', text: "Power BI Desktop", isCorrect: false },
    { id: 'b', text: "Power Query Editor", isCorrect: false },
    { id: 'c', text: "L'application mobile Power BI", isCorrect: false },
    { id: 'd', text: "Le service Power BI", isCorrect: true },
  ],
  answerType: "single",
  explanation:
    "Le service Power BI permet de créer des tableaux de bord. Power BI Desktop sert à créer des rapports, Power Query Editor à transformer les données, et l'application mobile est réservée à la consultation.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-2",
  chapter: "power-bi-service",
  status: "unseen",
};

export const question122: Question = {
  id: 'pbi-p2-q-122',
  number: 122,
  text: "Vous envisagez de certifier un modèle sémantique Power BI. À quel niveau les autorisations de certification sont-elles attribuées ?",
  answers: [
    { id: 'a', text: "Jeu de données (Dataset)", isCorrect: false },
    { id: 'b', text: "Locataire (Tenant)", isCorrect: true },
    { id: 'c', text: "Classeur (Workbook)", isCorrect: false },
    { id: 'd', text: "Espace de travail (Workspace)", isCorrect: false },
  ],
  answerType: "single",
  explanation:
    "Les autorisations de certification des modèles sémantiques sont configurées au niveau du locataire (tenant) via les paramètres d'administration de certification des jeux de données.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-2",
  chapter: "governance",
  status: "unseen",
};

export const question123: Question = {
  id: 'pbi-p2-q-123',
  number: 123,
  text: "Vous devez utiliser la sécurité au niveau des lignes (RLS) pour que les employés ne voient que les données de vente de leur département. Que devez-vous faire en premier ?",
  answers: [
    { id: 'a', text: "Déployer le rapport sur le service Power BI", isCorrect: false },
    { id: 'b', text: "Créer un rôle dans Power BI Desktop", isCorrect: true },
    { id: 'c', text: "Définir des paramètres de filtre", isCorrect: false },
    { id: 'd', text: "Mettre à niveau l'espace de travail vers Premium", isCorrect: false },
  ],
  answerType: "single",
  explanation:
    "La sécurité au niveau des lignes se configure en créant d'abord des rôles et en définissant des filtres DAX dans Power BI Desktop avant la publication.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-2",
  chapter: "security",
  status: "unseen",
};

export const question124: Question = {
  id: 'pbi-p2-q-124',
  number: 124,
  text: "Quelles deux configurations permettent de marquer un modèle sémantique Power BI comme découvrable ?",
  answers: [
    { id: 'a', text: "Certifier le modèle sémantique", isCorrect: true },
    { id: 'b', text: "Activer la sécurité au niveau des lignes (RLS) sur le modèle sémantique", isCorrect: false },
    { id: 'c', text: "Promouvoir le modèle sémantique", isCorrect: true },
    { id: 'd', text: "Publier le modèle sémantique dans un espace de travail Premium", isCorrect: false },
  ],
  answerType: "multiple",
  explanation:
    "Les modèles sémantiques deviennent découvrables lorsqu'ils sont promus ou certifiés. La sécurité au niveau des lignes (RLS) et la capacité Premium n'affectent pas la découvrabilité.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-2",
  chapter: "governance",
  status: "unseen",
};

export const question125: Question = {
  id: 'pbi-p2-q-125',
  number: 125,
  text: "Chaque utilisateur ne doit voir que ses propres enregistrements de ventes. Comment configurer la sécurité au niveau des lignes ?",
  answers: [
    { id: 'a', text: "Utiliser un filtre DAX dynamique basé sur l'e-mail de l'utilisateur", isCorrect: true },
    { id: 'b', text: "Créer des rôles statiques pour chaque utilisateur", isCorrect: false },
    { id: 'c', text: "Créer un rapport distinct pour chaque utilisateur", isCorrect: false },
    { id: 'd', text: "Restreindre l'accès à l'ensemble de la table", isCorrect: false },
  ],
  answerType: "single",
  explanation:
    "La RLS dynamique utilisant USERPRINCIPALNAME() filtre les données par utilisateur connecté et est évolutive et efficace.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-2",
  chapter: "security",
  status: "unseen",
};

export const question126: Question = {
  id: 'pbi-p2-q-126',
  number: 126,
  text: "Vous devez mettre en évidence les produits dont le niveau de stock est inférieur à un seuil critique dans un visuel de matrice. Que devez-vous faire ?",
  answers: [
    { id: 'a', text: "Ajouter une ligne de tendance", isCorrect: false },
    { id: 'b', text: "Appliquer une mise en forme conditionnelle avec des icônes", isCorrect: true },
    { id: 'c', text: "Activer la détection des anomalies", isCorrect: false },
    { id: 'd', text: "Utiliser un segment (slicer)", isCorrect: false },
  ],
  answerType: "single",
  explanation:
    "La mise en forme conditionnelle avec des icônes met visuellement en évidence les niveaux de stock faibles directement dans la matrice.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-2",
  chapter: "visualizations",
  status: "unseen",
};

export const question127: Question = {
  id: 'pbi-p2-q-127',
  number: 127,
  text: "Dans Power BI Desktop, quelles deux interfaces vous permettent de créer une mesure ?",
  answers: [
    { id: 'a', text: "Vue Table", isCorrect: true },
    { id: 'b', text: "Vue Page", isCorrect: false },
    { id: 'c', text: "Éditeur Power Query", isCorrect: false },
    { id: 'd', text: "Vue Rapport", isCorrect: true },
  ],
  answerType: "multiple",
  explanation:
    "Les mesures peuvent être créées à partir du ruban Calculs dans la vue Table et la vue Rapport.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-2",
  chapter: "modeling",
  status: "unseen",
};

export const question128: Question = {
  id: 'pbi-p2-q-128',
  number: 128,
  text: "Quels deux emplacements prennent en charge l'actualisation planifiée à l'aide des informations d'identification Microsoft 365 pour les fichiers plats ?",
  answers: [
    { id: 'a', text: "Fichier local", isCorrect: false },
    { id: 'b', text: "OneDrive Entreprise", isCorrect: true },
    { id: 'c', text: "Compte OneDrive personnel", isCorrect: false },
    { id: 'd', text: "Sites d'équipe SharePoint", isCorrect: true },
  ],
  answerType: "multiple",
  explanation:
    "OneDrive Entreprise et les sites d'équipe SharePoint utilisent les informations d'identification Microsoft Entra et prennent en charge l'actualisation planifiée.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-2",
  chapter: "data-sources",
  status: "unseen",
};

export const question129: Question = {
  id: 'pbi-p2-q-129',
  number: 129,
  text: "Vous devez fournir un accès sécurisé du service Power BI aux données SQL Server locales avec une configuration utilisateur minimale. Que devez-vous déployer ?",
  answers: [
    { id: 'a', text: "Passerelle de données de réseau virtuel", isCorrect: false },
    { id: 'b', text: "Connexion ExpressRoute", isCorrect: false },
    { id: 'c', text: "Passerelle de données locale", isCorrect: true },
    { id: 'd', text: "Passerelle de données locale (mode personnel)", isCorrect: false },
  ],
  answerType: "single",
  explanation:
    "La passerelle de données locale standard prend en charge plusieurs utilisateurs et sources de données de manière sécurisée.",
  difficulty: "medium",
  topic: "power-bi-exam-blanc-2",
  chapter: "data-gateway",
  status: "unseen",
};

export const question130: Question = {
  id: 'pbi-p2-q-130',
  number: 130,
  text: "Quel est l'avantage d'utiliser un seul modèle sémantique Power BI pour plusieurs rapports ?",
  answers: [
    { id: 'a', text: "Plus d'actualisations planifiées", isCorrect: false },
    { id: 'b', text: "Des visuels plus rapides", isCorrect: false },
    { id: 'c', text: "Empêche le partage de données sensibles", isCorrect: false },
    { id: 'd', text: "Moins de modèles, d'actualisations et de besoins en stockage", isCorrect: true },
  ],
  answerType: "single",
  explanation:
    "L'utilisation d'un seul modèle sémantique partagé réduit la duplication, la fréquence d'actualisation, l'utilisation du stockage et la charge administrative.",
  difficulty: "easy",
  topic: "power-bi-exam-blanc-2",
  chapter: "semantic-models",
  status: "unseen",
};


// PL-300 Chapters
export const powerBiExamChapters: Chapter[] = [
  { id: 'pbi-ch-1', name: 'Visualizations', slug: 'visualizations', questionCount: 29 },
  { id: 'pbi-ch-2', name: 'Bookmarks & Navigation', slug: 'bookmarks-navigation', questionCount: 5 },
  { id: 'pbi-ch-3', name: 'Storage Modes', slug: 'storage-modes', questionCount: 1 },
  { id: 'pbi-ch-4', name: 'Power Query', slug: 'power-query', questionCount: 16 },
  { id: 'pbi-ch-5', name: 'Performance Optimization', slug: 'performance-optimization', questionCount: 6 },
  { id: 'pbi-ch-6', name: 'Data Modeling', slug: 'data-modeling', questionCount: 6 },
  { id: 'pbi-ch-7', name: 'DAX', slug: 'dax', questionCount: 18 },
  { id: 'pbi-ch-8', name: 'Dashboards', slug: 'dashboards', questionCount: 4 },
  { id: 'pbi-ch-9', name: 'AI Features', slug: 'ai-features', questionCount: 5 },
  { id: 'pbi-ch-10', name: 'Security', slug: 'security', questionCount: 8 },
  { id: 'pbi-ch-11', name: 'Data Connectivity', slug: 'data-connectivity', questionCount: 1 },
  { id: 'pbi-ch-12', name: 'Workspaces', slug: 'workspaces', questionCount: 1 },
  { id: 'pbi-ch-13', name: 'Data Refresh', slug: 'data-refresh', questionCount: 2 },
  { id: 'pbi-ch-14', name: 'Sharing & Distribution', slug: 'sharing-distribution', questionCount: 1 },
  { id: 'pbi-ch-15', name: 'Data Sources', slug: 'data-sources', questionCount: 3 },
  { id: 'pbi-ch-16', name: 'Performance', slug: 'performance', questionCount: 10 },
  { id: 'pbi-ch-17', name: 'Time Intelligence', slug: 'time-intelligence', questionCount: 1 },
  { id: 'pbi-ch-18', name: 'Modeling', slug: 'modeling', questionCount: 11 },
  { id: 'pbi-ch-19', name: 'Best Practices', slug: 'best-practices', questionCount: 1 },
  { id: 'pbi-ch-20', name: 'Power BI Service', slug: 'power-bi-service', questionCount: 4 },
  { id: 'pbi-ch-21', name: 'Governance', slug: 'governance', questionCount: 2 },
  { id: 'pbi-ch-22', name: 'Data Gateway', slug: 'data-gateway', questionCount: 1 },
  { id: 'pbi-ch-23', name: 'Semantic Models', slug: 'semantic-models', questionCount: 1 },
];

// PL-300 Topics
export const powerBiExamTopics: Topic[] = [
  {
    id: 'pbi-topic-1',
    name: 'PL-300 Exam Blanc 1',
    slug: 'power-bi-exam-blanc-1',
    description: 'Microsoft Power BI Data Analyst certification exam practice - Part 1 with 74 questions.',
    icon: 'BarChart',
    questionCount: 74,
    chapters: powerBiExamChapters,
  },
  {
    id: 'pbi-topic-2',
    name: 'PL-300 Exam Blanc 2',
    slug: 'power-bi-exam-blanc-2',
    description: 'Microsoft Power BI Data Analyst certification exam practice - Part 2 with 56 questions.',
    icon: 'BarChart',
    questionCount: 56,
    chapters: powerBiExamChapters,
  },
];

// PL-300 Category
export const powerBiExamCategory: Category = {
  id: 'pbi-cat-1',
  name: 'PL-300 - Microsoft Power BI Data Analyst',
  slug: 'pl-300-exam',
  description: 'Microsoft PL-300 certification exam preparation covering data preparation, modeling, visualization, and deployment in Power BI.',
  icon: 'BarChart',
  color: 'info',
  topics: powerBiExamTopics,
};

// PL-300 Answer Key
export const powerBiExamAnswerKey: Record<number, string> = {
  1: 'A', 2: 'A,B,F', 3: 'B', 4: 'A,B,E', 5: 'A,B', 6: 'C', 7: 'A', 8: 'B', 9: 'C', 10: 'C',
  11: 'D', 12: 'B', 13: 'B', 14: 'C', 15: 'B', 16: 'B', 17: 'D', 18: 'C', 19: 'B,D,E', 20: 'B',
  21: 'C', 22: 'A', 23: 'B', 24: 'C,E', 25: 'A,C,D', 26: 'C', 27: 'A', 28: 'D', 29: 'A', 30: 'C',
  31: 'A', 32: 'A', 33: 'B', 34: 'B', 35: 'C', 36: 'A,B,C', 37: 'A', 38: 'A', 39: 'D', 40: 'A',
  41: 'A', 42: 'B', 43: 'B', 44: 'A', 45: 'A,C', 46: 'D', 47: 'C', 48: 'C', 49: 'A', 50: 'C',
  51: 'A', 52: 'B', 53: 'A', 54: 'A', 55: 'D', 56: 'B', 57: 'A', 58: 'D', 59: 'B', 60: 'B',
  61: 'B,C,D', 62: 'C', 63: 'B', 64: 'B', 65: 'C', 66: 'B', 67: 'C', 68: 'D', 69: 'B', 70: 'C,D',
  71: 'C', 72: 'A', 73: 'A', 74: 'C',
  75: 'B', 76: 'B', 77: 'A,E,F', 78: 'A,D', 79: 'A', 80: 'A,D', 81: 'C', 82: 'A', 83: 'B', 84: 'B',
  85: 'B', 86: 'B', 87: 'B', 88: 'B', 89: 'B', 90: 'B', 91: 'C', 92: 'A', 93: 'B', 94: 'B',
  95: 'B', 96: 'B', 97: 'B', 98: 'C', 99: 'B', 100: 'B', 101: 'B', 102: 'B', 103: 'A', 104: 'B',
  105: 'B', 106: 'B', 107: 'B', 108: 'B', 109: 'B', 110: 'B', 111: 'B', 112: 'B', 113: 'A', 114: 'B',
  115: 'A', 116: 'B', 117: 'A', 118: 'B', 119: 'B', 120: 'B',
  121: 'D', 122: 'B', 123: 'B', 124: 'A,C', 125: 'A', 126: 'B', 127: 'A,D', 128: 'B,D', 129: 'C', 130: 'D',
};

// Export all questions as an array
export const powerBiQuestions: Question[] = [
  question1, question2, question3, question4, question5,
  question6, question7, question8, question9, question10,
  question11, question12, question13, question14, question15,
  question16, question17, question18, question19, question20,
  question21, question22, question23, question24, question25,
  question26, question27, question28, question29, question30,
  question31, question32, question33, question34, question35,
  question36, question37, question38, question39, question40,
  question41, question42, question43, question44, question45,
  question46, question47, question48, question49, question50,
  question51, question52, question53, question54, question55,
  question56, question57, question58, question59, question60,
  question61, question62, question63, question64, question65,
  question66, question67, question68, question69, question70,
  question71, question72, question73, question74, question75,
    question76, question77, question78, question79, question80,
    question81, question82, question83, question84, question85,
    question86, question87, question88, question89, question90,
    question91, question92, question93, question94, question95,
    question96, question97, question98, question99, question100,
    question101, question102, question103, question104, question105,
    question106, question107, question108, question109, question110,
    question111, question112, question113, question114, question115,
    question116, question117, question118, question119, question120,
    question121, question122, question123, question124, question125,
    question126, question127, question128, question129, question130,
];

// Default export
export default {
  questions: powerBiQuestions,
  topics: powerBiExamTopics,
  chapters: powerBiExamChapters,
  category: powerBiExamCategory,
  answerKey: powerBiExamAnswerKey,
};