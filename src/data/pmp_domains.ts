// src/data/pmp_domains.ts - Regroupement des domaines PMP
import { quizData as riskQuizData } from './pmp_domaine_one';
import { qualityQuizData } from './pmp_domaine_two';
import { closureQuizData } from './pmp_domaine_trois';
import { stakeholderQuizData } from './pmp_domaine_quatre';
import { projectRiskQuizData } from './pmp_domaine_cing';
import { valuePerformanceQuizData } from './pmp_domaine_six';
import { virtualTeamsQuizData } from './pmp_domaines_sept';

export interface PMPDomain {
  id: string;
  name: string;
  nameFr: string;
  description: string;
  descriptionFr: string;
  questionCount: number;
  icon: string;
  color: string;
  slug: string;
}

export const pmpDomains: PMPDomain[] = [
  {
    id: 'domain-1',
    name: 'Risk Management',
    nameFr: 'Gestion des Risques',
    description: 'Risk identification, assessment, response planning and monitoring',
    descriptionFr: 'Identification, évaluation, planification des réponses et surveillance des risques',
    questionCount: riskQuizData.length,
    icon: 'AlertTriangle',
    color: 'from-red-500 to-rose-600',
    slug: 'risk-management'
  },
  {
    id: 'domain-2',
    name: 'Quality Management',
    nameFr: 'Gestion de la Qualité',
    description: 'Quality planning, assurance, control and validation',
    descriptionFr: 'Planification, assurance, contrôle et validation de la qualité',
    questionCount: qualityQuizData.length,
    icon: 'CheckSquare',
    color: 'from-green-500 to-emerald-600',
    slug: 'quality-management'
  },
  {
    id: 'domain-3',
    name: 'Project Closure',
    nameFr: 'Clôture du Projet',
    description: 'Project/phase closure, procurement closure and lessons learned',
    descriptionFr: 'Clôture du projet/phase, clôture des approvisionnements et leçons apprises',
    questionCount: closureQuizData.length,
    icon: 'FolderCheck',
    color: 'from-purple-500 to-violet-600',
    slug: 'project-closure'
  },
  {
    id: 'domain-4',
    name: 'Stakeholder Management',
    nameFr: 'Gestion des Parties Prenantes',
    description: 'Stakeholder identification, engagement and communication',
    descriptionFr: 'Identification, engagement et communication avec les parties prenantes',
    questionCount: stakeholderQuizData.length,
    icon: 'Users',
    color: 'from-blue-500 to-cyan-600',
    slug: 'stakeholder-management'
  },
  {
    id: 'domain-5',
    name: 'Team & Conflict Management',
    nameFr: 'Gestion d\'Équipe et Conflits',
    description: 'Team building, conflict resolution and performance management',
    descriptionFr: 'Constitution d\'équipe, résolution de conflits et gestion de la performance',
    questionCount: projectRiskQuizData.length,
    icon: 'UserCheck',
    color: 'from-amber-500 to-orange-600',
    slug: 'team-conflict-management'
  },
  {
    id: 'domain-6',
    name: 'Value & Performance',
    nameFr: 'Valeur et Performance',
    description: 'Earned value management, KPIs and business value delivery',
    descriptionFr: 'Gestion de la valeur acquise, KPIs et livraison de la valeur métier',
    questionCount: valuePerformanceQuizData.length,
    icon: 'TrendingUp',
    color: 'from-indigo-500 to-purple-600',
    slug: 'value-performance'
  },
  {
    id: 'domain-7',
    name: 'Communication & Virtual Teams',
    nameFr: 'Communication et Équipes Virtuelles',
    description: 'Effective communication, virtual team leadership and collaboration',
    descriptionFr: 'Communication efficace, leadership d\'équipes virtuelles et collaboration',
    questionCount: virtualTeamsQuizData.length,
    icon: 'MessageCircle',
    color: 'from-teal-500 to-cyan-600',
    slug: 'communication-virtual-teams'
  }
];

// Export all quiz data for use in exam pages
export {
  riskQuizData,
  qualityQuizData,
  closureQuizData,
  stakeholderQuizData,
  projectRiskQuizData,
  valuePerformanceQuizData,
  virtualTeamsQuizData
};

// Get domain by slug
export const getDomainBySlug = (slug: string): PMPDomain | undefined => {
  return pmpDomains.find(d => d.slug === slug);
};

// Get questions by domain slug
export const getQuestionsByDomainSlug = (slug: string) => {
  switch (slug) {
    case 'risk-management':
      return riskQuizData;
    case 'quality-management':
      return qualityQuizData;
    case 'project-closure':
      return closureQuizData;
    case 'stakeholder-management':
      return stakeholderQuizData;
    case 'team-conflict-management':
      return projectRiskQuizData;
    case 'value-performance':
      return valuePerformanceQuizData;
    case 'communication-virtual-teams':
      return virtualTeamsQuizData;
    default:
      return [];
  }
};

// Get total question count
export const getTotalPMPQuestions = (): number => {
  return pmpDomains.reduce((sum, domain) => sum + domain.questionCount, 0);
};
