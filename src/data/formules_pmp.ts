export interface FormulaItem {
  abbreviation: string; // Abréviation (PV, EV, AC…)
  name: string; // Nom complet
  definition: string; // Définition dans le lexique
  usage: string; // Utilisation dans le projet
  formula?: string; // Formule mathématique
  interpretation?: string; // Interprétation du résultat
}

export const formulas: FormulaItem[] = [
  {
    abbreviation: "PV",
    name: "Planned Value / Valeur planifiée",
    definition: "Le budget autorisé alloué au travail prévu.",
    usage: "Valeur du travail planifié à achever à un moment donné, souvent la date des données ou l'achèvement du projet.",
    formula: "PV = budget planifié × % de travail prévu",
    interpretation: "Indique combien de budget aurait dû être dépensé pour le travail prévu."
  },
  {
    abbreviation: "EV",
    name: "Earned Value / Valeur acquise",
    definition: "La mesure du travail effectué exprimée en termes de budget autorisé pour ce travail.",
    usage: "Valeur planifiée de tout le travail achevé à un moment donné, sans référence aux coûts réels.",
    formula: "EV = somme de la valeur planifiée du travail achevé",
    interpretation: "Permet de comparer le travail réellement accompli par rapport à ce qui était planifié."
  },
  {
    abbreviation: "AC",
    name: "Actual Cost / Coût réel",
    definition: "Coût réel encouru pour le travail effectué jusqu'à une date donnée.",
    usage: "Somme des dépenses réelles pour le travail accompli.",
    formula: "AC = somme des coûts réels dépensés",
    interpretation: "Indique combien a été réellement dépensé pour le travail accompli."
  },
  {
    abbreviation: "CPI",
    name: "Cost Performance Index / Indice de performance des coûts",
    definition: "Mesure d’efficience du coût des ressources budgétisées.",
    usage: "Comparaison entre la valeur acquise et le coût réel.",
    formula: "CPI = EV / AC",
    interpretation: "CPI > 1 → projet sous budget, CPI < 1 → projet sur budget"
  },
  {
    abbreviation: "SPI",
    name: "Schedule Performance Index / Indice de performance des délais",
    definition: "Mesure de rendement de l’échéancier.",
    usage: "Comparaison entre la valeur acquise et la valeur planifiée.",
    formula: "SPI = EV / PV",
    interpretation: "SPI > 1 → projet en avance, SPI < 1 → projet en retard"
  },
  {
    abbreviation: "BAC",
    name: "Budget at Completion / Budget à l'achèvement",
    definition: "Budget total autorisé pour l’ensemble du projet.",
    usage: "Prévision du coût total pour terminer le projet.",
    formula: "BAC = somme des PV de toutes les activités",
    interpretation: "Représente le budget total prévu pour le projet."
  },
  {
    abbreviation: "EAC",
    name: "Estimate at Completion / Estimation à l’achèvement",
    definition: "Estimation du coût total du projet à son achèvement.",
    usage: "Prend en compte la performance actuelle du projet.",
    formula: "EAC = BAC / CPI",
    interpretation: "Prédit le coût total final du projet basé sur la performance actuelle."
  },
  {
    abbreviation: "ETC",
    name: "Estimate to Complete / Estimation du coût restant",
    definition: "Estimation du coût restant pour terminer le projet.",
    usage: "Différence entre le coût total estimé et le coût réel jusqu’à maintenant.",
    formula: "ETC = EAC - AC",
    interpretation: "Indique combien il reste à dépenser pour finir le projet."
  },
  {
    abbreviation: "VAC",
    name: "Variance at Completion / Écart à l’achèvement",
    definition: "Différence entre le budget prévu et le coût estimé à l’achèvement.",
    usage: "Mesure de l’écart budgétaire projeté.",
    formula: "VAC = BAC - EAC",
    interpretation: "VAC > 0 → économie prévue, VAC < 0 → dépassement prévu"
  }
];

