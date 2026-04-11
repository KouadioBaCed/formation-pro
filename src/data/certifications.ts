import type { ProfessionalCategory, Certification, ProfessionalDomain } from '../types';
import { categories, allQuestions, allTopics } from './questions';

// Get subcategory count for a main category
const getSubcategoryTopicCount = (categorySlug: string): number => {
  const category = categories.find(c => c.slug === categorySlug);
  if (!category) return 0;

  const subcatTopics = category.subcategories?.flatMap(sub => sub.topics) || [];
  return subcatTopics.length + (category.topics?.length || 0);
};

// Certifications data
export const certifications: Certification[] = [
  {
    id: 'cert-cfe',
    name: 'CFE',
    fullName: 'Certified Fraud Examiner',
    slug: 'cfe',
    description: 'Master fraud prevention, detection, investigation techniques, and legal frameworks',
    detailedDescription: 'Devenez Certified Fraud Examiner (CFE), la certification de référence mondiale en matière de prévention, détection et investigation de la fraude.',
    examOverview: 'Le CFE certifie une expertise en prévention, détection et investigation de la fraude. Il est particulièrement stratégique dans les environnements à risques financiers élevés.\n\n👉 Très apprécié par les bailleurs, institutions publiques, banques et organismes de contrôle.',
    highlights: [
      'Maîtriser les techniques d\'investigation de la fraude',
      'Comprendre les mécanismes de la fraude financière',
      'Appliquer les cadres juridiques de lutte contre la fraude',
      'Mettre en place des programmes de prévention efficaces',
    ],
    icon: 'Shield',
    color: 'primary',
    badge: 'POPULAR',
    questionCount: (() => {
      const cfeCategory = categories.find(c => c.slug === 'cfe');
      if (!cfeCategory) return 0;
      const allCfeTopics = [
        ...cfeCategory.topics,
        ...(cfeCategory.subcategories?.flatMap(sub => sub.topics) || [])
      ];
      return allQuestions.filter(q => allCfeTopics.some(t => t.slug === q.topic)).length;
    })(),
    topicCount: getSubcategoryTopicCount('cfe'),
    subcategoryIds: ['cat-cfe-3-financial', 'cat-cfe-3-fraud-prevention', 'cat-cfe-3-law'],
    technicalInfo: {
      organization: 'ACFE (Association of Certified Fraud Examiners)',
      duration: '120 minutes par partie',
      questionCount: '4 parties de 100 questions chacune',
      language: 'Anglais uniquement',
      format: 'En ligne',
    },
  },
  {
    id: 'cert-cia-1',
    name: 'CIA 1',
    fullName: 'CIA® Part 1 – Essentials of Internal Auditing',
    slug: 'cia-1',
    description: 'CIA Part 1 - Essentials of Internal Auditing',
    detailedDescription: 'La Part 1 du CIA® valide les fondamentaux de l\'audit interne, de la gouvernance, de la gestion des risques et du contrôle interne. Elle pose les bases indispensables pour toute carrière en audit, contrôle interne et conformité.',
    examOverview: 'La Part 1 du CIA® valide les fondamentaux de l\'audit interne, de la gouvernance, de la gestion des risques et du contrôle interne.\nElle pose les bases indispensables pour toute carrière en audit, contrôle interne et conformité.\n\n👉 Très appréciée par les banques, institutions financières, grandes entreprises et cabinets d\'audit.',
    highlights: [
      'Maîtriser les fondamentaux de l\'audit interne',
      'Comprendre la gouvernance et la gestion des risques',
      'Appliquer les normes internationales d\'audit (IIA)',
      'Évaluer le contrôle interne',
    ],
    icon: 'Briefcase',
    color: 'success',
    questionCount: (() => {
      const cat = categories.find(c => c.slug === 'cia-1');
      if (!cat) return 0;
      const allTopics = [
        ...cat.topics,
        ...(cat.subcategories?.flatMap(sub => sub.topics) || [])
      ];
      return allQuestions.filter(q => allTopics.some(t => t.slug === q.topic)).length;
    })(),
    topicCount: getSubcategoryTopicCount('cia-1'),
    subcategoryIds: ['cat-cia-ue1', 'cat-cia-part1-eb1'],
    technicalInfo: {
      organization: 'Institute of Internal Auditors (IIA)',
      duration: '150 minutes (2 h 30)',
      questionCount: '125',
      language: 'Anglais (autres langues disponibles selon sessions)',
      format: 'Centre agréé / en ligne',
    },
  },
  {
    id: 'cert-cia-2',
    name: 'CIA 2',
    fullName: 'CIA® Part 2 – Practice of Internal Auditing',
    slug: 'cia-2',
    description: 'CIA Part 2 - Practice of Internal Auditing',
    detailedDescription: 'La Part 2 du CIA® est orientée mise en pratique. Elle évalue la capacité à planifier et conduire des missions d\'audit interne, analyser les processus et formuler des recommandations pertinentes.',
    examOverview: 'La Part 2 du CIA® est orientée mise en pratique.\nElle évalue la capacité à planifier et conduire des missions d\'audit interne, analyser les processus et formuler des recommandations pertinentes.\n\n👉 Elle distingue les profils capables de passer de la théorie à l\'action dans des environnements complexes.',
    highlights: [
      'Planifier et conduire des missions d\'audit interne',
      'Analyser les processus et formuler des recommandations',
      'Communiquer les résultats et assurer le suivi',
      'Passer de la théorie à l\'action en environnement complexe',
    ],
    icon: 'Briefcase',
    color: 'success',
    questionCount: (() => {
      const cat = categories.find(c => c.slug === 'cia-2');
      if (!cat) return 0;
      const allTopics = [
        ...cat.topics,
        ...(cat.subcategories?.flatMap(sub => sub.topics) || [])
      ];
      return allQuestions.filter(q => allTopics.some(t => t.slug === q.topic)).length;
    })(),
    topicCount: getSubcategoryTopicCount('cia-2'),
    subcategoryIds: ['cat-cia-part2-eb1'],
    technicalInfo: {
      organization: 'IIA (Institute of Internal Auditors)',
      duration: '120 minutes (2 heures)',
      questionCount: '100',
      language: 'Anglais (autres langues possibles)',
      format: 'Centre agréé / en ligne',
    },
  },
  {
    id: 'cert-cia-3',
    name: 'CIA 3',
    fullName: 'CIA® Part 3 – Business Knowledge for Internal Auditing',
    slug: 'cia-3',
    description: 'CIA Part 3 - Business Knowledge for Internal Auditing',
    detailedDescription: 'La Part 3 du CIA® valide une vision globale de l\'entreprise : IT, data, analyse financière, économie, gestion stratégique. Elle est essentielle pour les profils qui veulent évoluer vers des postes seniors, direction d\'audit ou fonctions managériales.',
    examOverview: 'La Part 3 du CIA® valide une vision globale de l\'entreprise : IT, data, analyse financière, économie, gestion stratégique.\n\n👉 Elle est essentielle pour les profils qui veulent évoluer vers des postes seniors, direction d\'audit ou fonctions managériales.',
    highlights: [
      'Maîtriser les connaissances business pour l\'audit',
      'Comprendre les systèmes d\'information et la technologie',
      'Analyser les données financières et économiques',
      'Évoluer vers des postes seniors et fonctions managériales',
    ],
    icon: 'Briefcase',
    color: 'success',
    questionCount: (() => {
      const cat = categories.find(c => c.slug === 'cia-3');
      if (!cat) return 0;
      const allTopics = [
        ...cat.topics,
        ...(cat.subcategories?.flatMap(sub => sub.topics) || [])
      ];
      return allQuestions.filter(q => allTopics.some(t => t.slug === q.topic)).length;
    })(),
    topicCount: getSubcategoryTopicCount('cia-3'),
    subcategoryIds: ['cat-cia-part3-eb1', 'cat-cia-part3-eb2'],
    technicalInfo: {
      organization: 'IIA (Institute of Internal Auditors)',
      duration: '120 minutes (2 heures)',
      questionCount: '100',
      language: 'Anglais (autres langues possibles)',
      format: 'Centre agréé / en ligne',
    },
  },
  {
    id: 'cert-cisa',
    name: 'CISA',
    fullName: 'Certified Information Systems Auditor',
    slug: 'cisa',
    description: 'La référence mondiale en audit et contrôle des systèmes d\'information',
    detailedDescription: 'Devenez Certified Information Systems Auditor (CISA), la certification de référence mondiale délivrée par l\'ISACA pour les professionnels de l\'audit, du contrôle et de la sécurité des systèmes d\'information.',
    examOverview: 'Le CISA® valide une expertise en audit, contrôle et gouvernance des systèmes d\'information. Il ne teste pas la technique pure, mais la capacité d\'analyse, de jugement et de prise de décision.\n\n👉 Fortement recherché dans les banques, institutions financières, cabinets d\'audit et grandes organisations.',
    highlights: [
      'Maîtriser l\'audit des systèmes d\'information',
      'Évaluer la gouvernance et la gestion des technologies de l\'information',
      'Assurer la protection des actifs informationnels',
      'Gérer les risques liés aux systèmes d\'information',
      'Superviser le développement, l\'acquisition et la maintenance des systèmes',
    ],
    icon: 'Monitor',
    color: 'primary',
    badge: 'NEW',
    questionCount: 1692,
    topicCount: 10,
    subcategoryIds: [],
    technicalInfo: {
      organization: 'ISACA',
      duration: '240 minutes (4 heures)',
      questionCount: '150',
      language: 'Anglais (autres langues selon sessions)',
      format: 'Centre agréé / en ligne',
    },
  },
  {
    id: 'cert-pmp',
    name: 'PMP',
    fullName: 'Project Management Professional',
    slug: 'pmp',
    description: 'The gold standard in project management certification by PMI',
    detailedDescription: 'Devenez Chef de projet certifié PMP®, la référence mondiale la plus respectée par les grandes institutions, pour exceller dans des environnements complexes et à hautes exigences organisationnelles.',
    examOverview: 'Le PMP® est la certification internationale de référence en management de projets. Elle atteste de votre capacité à diriger des projets complexes, à gérer les parties prenantes, les risques et la performance, selon des standards reconnus mondialement.\n\n👉 Très valorisé par les DG, DRH, PMO, cabinets de conseil et organisations internationales.',
    highlights: [
      'Diriger des projets complexes',
      'Encadrer des équipes avec succès',
      'Répondre aux exigences rigoureuses des organisations globales',
      'Maîtriser les standards internationaux de gestion de projet',
    ],
    icon: 'Target',
    color: 'warning',
    badge: 'NEW',
    questionCount: (() => {
      const pmpCategory = categories.find(c => c.slug === 'pmp');
      if (!pmpCategory) return 0;
      const allPmpTopics = [
        ...pmpCategory.topics,
        ...(pmpCategory.subcategories?.flatMap(sub => sub.topics) || [])
      ];
      return allQuestions.filter(q => allPmpTopics.some(t => t.slug === q.topic)).length;
    })(),
    topicCount: getSubcategoryTopicCount('pmp'),
    subcategoryIds: ['cat-pmp-exam'],
    technicalInfo: {
      organization: 'PMI (Project Management Institute)',
      duration: '230 minutes (3h50)',
      questionCount: '180',
      language: 'Anglais (français disponible)',
      format: 'En ligne ou centre Pearson VUE',
    },
  },
  {
    id: 'cert-capm',
    name: 'CAPM',
    fullName: 'Certified Associate in Project Management',
    slug: 'capm',
    description: 'PMI entry-level certification for project management fundamentals',
    detailedDescription: 'Devenez Certified Associate in Project Management (CAPM®), la certification d\'entrée du PMI® pour démontrer une compréhension structurée des fondamentaux du management de projet.',
    examOverview: 'Le CAPM® est la certification d\'entrée du Project Management Institute (PMI®). Elle est destinée aux profils débutants ou en transition qui souhaitent démontrer une compréhension structurée des fondamentaux du management de projet.\n\n👉 Très pertinent pour les jeunes professionnels, assistants projets, juniors PMO et organisations qui veulent standardiser les bases.',
    highlights: [
      'Maîtriser les fondamentaux du management de projet',
      'Comprendre le vocabulaire et les processus standards du PMI',
      'Démontrer une base solide pour évoluer vers le PMP',
      'Se positionner comme professionnel structuré en gestion de projet',
    ],
    icon: 'Target',
    color: 'warning',
    badge: 'NEW',
    questionCount: 0,
    topicCount: 0,
    subcategoryIds: [],
    technicalInfo: {
      organization: 'PMI (Project Management Institute)',
      duration: '180 minutes (3 heures)',
      questionCount: '150',
      language: 'Anglais (français disponible)',
      format: 'En ligne ou centre Pearson VUE',
    },
  },
  {
    id: 'cert-pm4ngos',
    name: 'Project DPro',
    fullName: 'Project Management for Development Professionals',
    slug: 'pm4ngos',
    description: 'Gestion de projets de développement - la certification phare de PM4NGOs',
    detailedDescription: 'Le Project DPro (anciennement PMD Pro) est la certification phare de PM4NGOs, destinée aux professionnels de la gestion de projets dans le secteur humanitaire et du développement. Elle valide les compétences en gestion de projets adaptées aux contextes ONG et organisations internationales.\n\nCette certification couvre l\'ensemble du cycle de vie des projets de développement, de l\'identification à la clôture, en passant par la planification, la mise en œuvre et le suivi.',
    examOverview: 'Le Project DPro® est conçu pour les projets de développement et humanitaires. Il valide la capacité à gérer un projet de bout en bout, dans des contextes complexes de terrain.\n\n👉 Très valorisé par les ONG, agences de coopération et bailleurs internationaux.',
    highlights: [
      'Maîtriser le cycle complet de gestion de projets de développement',
      'Appliquer les méthodologies adaptées au secteur humanitaire',
      'Gérer les parties prenantes dans des contextes multiculturels',
      'Assurer le suivi, l\'évaluation et l\'apprentissage des projets',
    ],
    icon: 'Users',
    color: 'success',
    badge: 'NEW',
    questionCount: 75,
    topicCount: 1,
    subcategoryIds: [],
    technicalInfo: {
      organization: 'PM4NGOs',
      duration: '120 minutes',
      questionCount: '75',
      language: 'Anglais',
      format: 'En ligne',
    },
  },
  {
    id: 'cert-social-good-dpro',
    name: 'Social Good DPro',
    fullName: 'Social Good for Development Professionals',
    slug: 'social-good-dpro',
    description: 'Certification PM4NGOs en impact social et développement durable',
    detailedDescription: 'Le Social Good DPro est une certification délivrée par PM4NGOs qui forme les professionnels du développement à maximiser l\'impact social de leurs interventions. Elle couvre les approches et méthodologies pour concevoir, mettre en œuvre et évaluer des programmes à fort impact social.',
    examOverview: 'Le Social Good DPro® met l\'accent sur la création d\'impact social mesurable. Il valorise les profils orientés résultats, bénéficiaires et durabilité.\n\n👉 Très pertinent pour le développement social et communautaire.',
    highlights: [
      'Comprendre les fondements de l\'impact social dans le développement',
      'Concevoir des programmes orientés vers le changement social',
      'Appliquer les principes de responsabilité et de durabilité',
      'Mesurer et communiquer l\'impact social des interventions',
    ],
    icon: 'Heart',
    color: 'success',
    badge: 'NEW',
    questionCount: 75,
    topicCount: 1,
    subcategoryIds: [],
    technicalInfo: {
      organization: 'PM4NGOs',
      duration: '120 minutes',
      questionCount: '75',
      language: 'Anglais',
      format: 'En ligne',
    },
  },
  {
    id: 'cert-program-dpro',
    name: 'Program DPro',
    fullName: 'Program Management for Development Professionals',
    slug: 'program-dpro',
    description: 'Certification PM4NGOs en gestion de programmes de développement',
    detailedDescription: 'Le Program DPro est une certification délivrée par PM4NGOs destinée aux professionnels qui gèrent des programmes (ensembles de projets liés) dans le secteur du développement international. Elle aborde la complexité de la gestion de programmes multi-projets dans des environnements humanitaires.',
    examOverview: 'Le Program DPro® s\'adresse aux profils qui pilotent plusieurs projets simultanément. Il valide une capacité de coordination, gouvernance et alignement stratégique.\n\n👉 Certification de niveau senior / direction de programmes.',
    highlights: [
      'Maîtriser la gestion de programmes multi-projets',
      'Coordonner des interventions complexes à grande échelle',
      'Assurer la cohérence stratégique entre projets d\'un même programme',
      'Gérer les risques et les ressources au niveau programmatique',
    ],
    icon: 'Layers',
    color: 'success',
    badge: 'NEW',
    questionCount: 75,
    topicCount: 1,
    subcategoryIds: [],
    technicalInfo: {
      organization: 'PM4NGOs',
      duration: '120 minutes',
      questionCount: '75',
      language: 'Anglais',
      format: 'En ligne',
    },
  },
  {
    id: 'cert-finance-dpro',
    name: 'Finance DPro',
    fullName: 'Financial Management for Development Professionals (FMD Pro)',
    slug: 'finance-dpro',
    description: 'Certification PM4NGOs en gestion financière pour le développement',
    detailedDescription: 'Le Finance DPro (FMD Pro) est une certification délivrée par PM4NGOs qui valide les compétences en gestion financière dans le contexte du développement international. Elle couvre la budgétisation, la comptabilité, le reporting financier et la conformité aux exigences des bailleurs de fonds.',
    examOverview: 'Le Finance DPro® certifie la capacité à prendre des décisions financières responsables dans les projets. Il est très apprécié pour renforcer transparence, conformité et redevabilité.\n\n👉 Clé pour les profils finance, contrôle de projets, audit.',
    highlights: [
      'Maîtriser la budgétisation et la planification financière de projets',
      'Assurer la conformité aux exigences des bailleurs de fonds',
      'Gérer les rapports financiers et les audits',
      'Appliquer les principes de gestion financière adaptés aux ONG',
    ],
    icon: 'Wallet',
    color: 'success',
    badge: 'NEW',
    questionCount: 25,
    topicCount: 1,
    subcategoryIds: [],
    technicalInfo: {
      organization: 'PM4NGOs',
      duration: '120 minutes',
      questionCount: '75',
      language: 'Français',
      format: 'En ligne',
    },
  },
  {
    id: 'cert-meal-dpro',
    name: 'MEAL DPro',
    fullName: 'Monitoring, Evaluation, Accountability & Learning DPro',
    slug: 'meal-dpro',
    description: 'Certification PM4NGOs en suivi, évaluation, redevabilité et apprentissage',
    detailedDescription: 'Le MEAL DPro est une certification délivrée par PM4NGOs qui valide les compétences en Monitoring, Evaluation, Accountability & Learning (MEAL) dans le secteur du développement. Elle couvre les méthodologies et outils pour assurer le suivi efficace des projets et programmes.',
    examOverview: 'Le MEAL DPro® valide la capacité à mesurer, analyser et améliorer la performance des projets. Il est central dans les projets financés par les bailleurs internationaux.\n\n👉 Très recherché pour les fonctions MEAL, suivi-évaluation, redevabilité.',
    highlights: [
      'Concevoir des systèmes de suivi et d\'évaluation performants',
      'Appliquer les principes de redevabilité envers les bénéficiaires',
      'Utiliser les données pour l\'apprentissage et l\'amélioration continue',
      'Maîtriser les outils et méthodologies MEAL standards du secteur',
    ],
    icon: 'LineChart',
    color: 'success',
    badge: 'NEW',
    questionCount: 75,
    topicCount: 1,
    subcategoryIds: [],
    technicalInfo: {
      organization: 'PM4NGOs',
      duration: '120 minutes',
      questionCount: '75',
      language: 'Français',
      format: 'En ligne',
    },
  },
  {
    id: 'cert-pl300',
    name: 'PL-300',
    fullName: 'Microsoft Power BI Data Analyst',
    slug: 'pl-300',
    description: 'Microsoft certification for Power BI data analysis and visualization',
    detailedDescription: 'Devenez Microsoft Power BI Data Analyst certifié, une référence reconnue à l\'échelle internationale pour les organisations qui placent la donnée au cœur de la performance, du pilotage stratégique et de la prise de décision.',
    examOverview: 'Le PL-300 valide la capacité à analyser les données et produire des tableaux de bord décisionnels fiables. Il est clé pour les organisations orientées pilotage par la donnée.\n\n👉 Très recherché pour les profils data, finance, contrôle de gestion, stratégie.',
    highlights: [
      'Préparer et consolider des données issues de sources multiples et hétérogènes',
      'Concevoir des modèles de données robustes et performants, conformes aux bonnes pratiques Microsoft',
      'Créer des rapports interactifs et des tableaux de bord avancés, adaptés aux besoins des parties prenantes',
      'Exploiter le langage DAX pour réaliser des analyses pertinentes et mesurables',
      'Publier, sécuriser et maintenir des solutions Power BI dans des environnements professionnels et collaboratifs',
      'Soutenir la prise de décision stratégique grâce à des analyses claires, cohérentes et maîtrisées',
    ],
    icon: 'BarChart',
    color: 'info',
    badge: 'NEW',
    questionCount: (() => {
      const pl300Category = categories.find(c => c.slug === 'pl-300');
      if (!pl300Category) return 0;
      const allPl300Topics = [
        ...pl300Category.topics,
        ...(pl300Category.subcategories?.flatMap(sub => sub.topics) || [])
      ];
      return allQuestions.filter(q => allPl300Topics.some(t => t.slug === q.topic)).length;
    })(),
    topicCount: getSubcategoryTopicCount('pl-300'),
    subcategoryIds: ['cat-pl300-exam'],
    technicalInfo: {
      organization: 'Microsoft',
      duration: 'Environ 120 minutes',
      questionCount: '40 à 60',
      language: 'Anglais (autres langues possibles)',
      format: 'En ligne / centre Pearson VUE',
    },
  },
  {
    id: 'cert-mos-excel',
    name: 'MOS Excel',
    fullName: 'Microsoft Office Specialist: Excel',
    slug: 'mos-excel',
    description: 'Certification Microsoft pour la maîtrise avancée d\'Excel',
    detailedDescription: 'La certification Microsoft Office Specialist Excel valide votre maîtrise des fonctionnalités avancées d\'Excel : formules, tableaux croisés dynamiques, mise en forme conditionnelle, graphiques et analyse de données.',
    examOverview: 'Le MOS Excel certifie une maîtrise opérationnelle d\'Excel : gestion de données, formules avancées, tableaux croisés dynamiques, graphiques et mise en forme professionnelle.\n\n👉 Très recherché pour les profils administratifs, financiers et de gestion.',
    highlights: [
      'Maîtriser les formules et fonctions avancées d\'Excel',
      'Créer et gérer des tableaux croisés dynamiques',
      'Produire des graphiques et visualisations professionnels',
      'Gérer et analyser des données complexes',
    ],
    icon: 'Table',
    color: 'info',
    badge: 'NEW',
    questionCount: 0,
    topicCount: 0,
    subcategoryIds: [],
    technicalInfo: {
      organization: 'Microsoft (Certiport)',
      duration: '50 minutes',
      questionCount: '35 à 45',
      language: 'Plusieurs langues disponibles',
      format: 'Centre agréé Certiport',
    },
  }
];

// Professional categories grouping certifications by domain
export const professionalCategories: ProfessionalCategory[] = [
  {
    id: 'pc-audit-compliance',
    name: 'Audit & Compliance',
    slug: 'audit-compliance',
    description: 'Certifications for internal audit, fraud examination, and compliance professionals',
    icon: 'Shield',
    color: 'primary',
    domain: 'audit-compliance',
    certifications: certifications.filter(c => ['cfe', 'cia-1', 'cia-2', 'cia-3', 'cisa'].includes(c.slug))
  },
  {
    id: 'pc-project-management',
    name: 'Project Management',
    slug: 'project-management',
    description: 'Project management certifications recognized worldwide',
    icon: 'Target',
    color: 'warning',
    domain: 'project-management',
    certifications: certifications.filter(c => ['pmp', 'capm', 'pm4ngos', 'social-good-dpro', 'program-dpro', 'finance-dpro', 'meal-dpro'].includes(c.slug))
  },
  {
    id: 'pc-data-analytics',
    name: 'Data Analytics',
    slug: 'data-analytics',
    description: 'Microsoft data analytics and business intelligence certifications',
    icon: 'BarChart',
    color: 'info',
    domain: 'data-analytics',
    certifications: certifications.filter(c => ['pl-300', 'mos-excel'].includes(c.slug))
  }
];

// Helper functions
export const getAllCertifications = (): Certification[] => certifications;

export const getCertificationBySlug = (slug: string): Certification | undefined =>
  certifications.find(cert => cert.slug === slug);

export const getCertificationsByDomain = (domain: ProfessionalDomain): Certification[] =>
  professionalCategories.find(cat => cat.domain === domain)?.certifications || [];

export const getProfessionalCategoryByDomain = (domain: ProfessionalDomain): ProfessionalCategory | undefined =>
  professionalCategories.find(cat => cat.domain === domain);

export const filterCertifications = (
  domain: ProfessionalDomain | 'all',
  search: string
): Certification[] => {
  let filtered = certifications;

  if (domain !== 'all') {
    filtered = getCertificationsByDomain(domain);
  }

  if (search.trim()) {
    const searchLower = search.toLowerCase().trim();
    filtered = filtered.filter(cert =>
      cert.name.toLowerCase().includes(searchLower) ||
      cert.fullName.toLowerCase().includes(searchLower) ||
      cert.description.toLowerCase().includes(searchLower)
    );
  }

  return filtered;
};

// Stats for homepage
export const getCertificationStats = () => ({
  totalQuestions: allQuestions.length,
  totalCertifications: certifications.length,
  totalTopics: allTopics.length
});