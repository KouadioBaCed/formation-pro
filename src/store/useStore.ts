import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Question, FilterState, ExamResult, ExamSettings, QuestionStatus, CertificationFilterState, ProfessionalDomain } from '../types';
import { allQuestions } from '../data/questions';

interface AppState {
  // Theme
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  // Language
  lang: 'fr' | 'en';
  setLanguage: (lang: 'fr' | 'en') => void;

  // Questions
  questions: Question[];
  updateQuestionStatus: (id: string, status: QuestionStatus) => void;
  toggleQuestionMarked: (id: string) => void;

  // Filters
  filters: FilterState;
  setFilters: (filters: Partial<FilterState>) => void;
  resetFilters: () => void;

  // Exam Mode
  isExamMode: boolean;
  examSettings: ExamSettings;
  examQuestions: Question[];
  currentExamQuestionIndex: number;
  examAnswers: Record<string, string[]>;
  examTimeRemaining: number;
  examResult: ExamResult | null;
  startExam: (settings: ExamSettings, topicSlug?: string) => void;
  endExam: () => void;
  submitExamAnswer: (questionId: string, answerIds: string[]) => void;
  nextExamQuestion: () => void;
  prevExamQuestion: () => void;
  goToExamQuestion: (index: number) => void;
  setExamTimeRemaining: (time: number) => void;
  calculateExamResult: () => void;
  resetExam: () => void;

  // Sidebar
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;

  // Topics page tab state (shared between Sidebar and TopicsPage)
  topicsTab: string;
  topicsExamType: string;
  setTopicsTab: (tab: string) => void;
  setTopicsExamType: (type: string) => void;

  // Certification Filters (Homepage)
  certificationFilters: CertificationFilterState;
  setCertificationDomain: (domain: ProfessionalDomain | 'all') => void;
  setCertificationSearch: (search: string) => void;
  resetCertificationFilters: () => void;
}

const defaultFilters: FilterState = {
  difficulty: 'all',
  status: 'all',
  chapter: 'all',
  search: '',
};

const defaultExamSettings: ExamSettings = {
  questionCount: 10,
  timeLimit: 30,
  shuffleQuestions: true,
  shuffleAnswers: true,
  showFeedback: false,
};

const defaultCertificationFilters: CertificationFilterState = {
  domain: 'all',
  search: '',
};

const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Theme
      isDarkMode: false,
      toggleDarkMode: () => {
        set((state) => {
          const newDarkMode = !state.isDarkMode;
          if (newDarkMode) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
          return { isDarkMode: newDarkMode };
        });
      },
        // Language
        lang: 'fr',
        setLanguage: (lang) => {
          set({ lang });
          if (typeof document !== 'undefined') {
            document.documentElement.lang = lang;
          }
        },

      // Questions
      questions: allQuestions,
      updateQuestionStatus: (id, status) =>
        set((state) => ({
          questions: state.questions.map((q) =>
            q.id === id ? { ...q, status } : q
          ),
        })),
      toggleQuestionMarked: (id) =>
        set((state) => ({
          questions: state.questions.map((q) =>
            q.id === id
              ? { ...q, status: q.status === 'marked' ? 'seen' : 'marked' }
              : q
          ),
        })),

      // Filters
      filters: defaultFilters,
      setFilters: (newFilters) =>
        set((state) => ({
          filters: { ...state.filters, ...newFilters },
        })),
      resetFilters: () => set({ filters: defaultFilters }),

      // Exam Mode
      isExamMode: false,
      examSettings: defaultExamSettings,
      examQuestions: [],
      currentExamQuestionIndex: 0,
      examAnswers: {},
      examTimeRemaining: 0,
      examResult: null,

      startExam: (settings, topicSlug) => {
        console.log('=== useStore.startExam ===');
        console.log('Settings received:', settings);
        console.log('Topic slug:', topicSlug);
        console.log('Total allQuestions:', allQuestions.length);

        // Always use fresh questions from allQuestions, not from persisted state
        let availableQuestions = topicSlug
          ? allQuestions.filter((q) => q.topic === topicSlug)
          : [...allQuestions];

        console.log('Available questions after filter:', availableQuestions.length);

        if (settings.shuffleQuestions) {
          availableQuestions = shuffleArray(availableQuestions);
        }

        // Make sure we don't request more questions than available
        const questionCount = Math.min(settings.questionCount, availableQuestions.length);
        console.log('Final question count:', questionCount);

        const selectedExamQuestions = availableQuestions.slice(0, questionCount).map(q => ({
          ...q,
          // Create a deep copy of answers to avoid mutating the original
          answers: settings.shuffleAnswers ? shuffleArray([...q.answers]) : [...q.answers]
        }));

        console.log('Selected exam questions:', selectedExamQuestions.length);

        set({
          isExamMode: true,
          examSettings: { ...settings, questionCount }, // Utiliser le count réel
          examQuestions: selectedExamQuestions,
          currentExamQuestionIndex: 0,
          examAnswers: {},
          examTimeRemaining: settings.timeLimit * 60,
          examResult: null,
        });
      },

      endExam: () => {
        get().calculateExamResult();
        set({ isExamMode: false });
      },

      resetExam: () => {
        set({
          isExamMode: false,
          examSettings: defaultExamSettings,
          examQuestions: [],
          currentExamQuestionIndex: 0,
          examAnswers: {},
          examTimeRemaining: 0,
          examResult: null,
        });
      },

      submitExamAnswer: (questionId, answerIds) =>
        set((state) => ({
          examAnswers: { ...state.examAnswers, [questionId]: answerIds },
        })),

      nextExamQuestion: () =>
        set((state) => ({
          currentExamQuestionIndex: Math.min(
            state.currentExamQuestionIndex + 1,
            state.examQuestions.length - 1
          ),
        })),

      prevExamQuestion: () =>
        set((state) => ({
          currentExamQuestionIndex: Math.max(state.currentExamQuestionIndex - 1, 0),
        })),

      goToExamQuestion: (index) =>
        set((state) => ({
          currentExamQuestionIndex: Math.max(
            0,
            Math.min(index, state.examQuestions.length - 1)
          ),
        })),

      setExamTimeRemaining: (time) => set({ examTimeRemaining: time }),

      calculateExamResult: () => {
        const state = get();
        const results: ExamResult = {
          totalQuestions: state.examQuestions.length,
          correctAnswers: 0,
          incorrectAnswers: 0,
          unanswered: 0,
          score: 0,
          timeSpent: state.examSettings.timeLimit * 60 - state.examTimeRemaining,
          questions: [],
        };

        state.examQuestions.forEach((question) => {
          const selectedAnswers = state.examAnswers[question.id] || [];
          const correctAnswerIds = question.answers
            .filter((a) => a.isCorrect)
            .map((a) => a.id);

          const isCorrect =
            selectedAnswers.length === correctAnswerIds.length &&
            selectedAnswers.every((id) => correctAnswerIds.includes(id));

          if (selectedAnswers.length === 0) {
            results.unanswered++;
          } else if (isCorrect) {
            results.correctAnswers++;
          } else {
            results.incorrectAnswers++;
          }

          results.questions.push({
            questionId: question.id,
            selectedAnswers,
            isCorrect,
            timeSpent: 0,
          });
        });

        results.score = Math.round(
          (results.correctAnswers / results.totalQuestions) * 100
        );

        set({ examResult: results });
      },

      // Sidebar
      isSidebarOpen: true,
      toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
      setSidebarOpen: (open) => set({ isSidebarOpen: open }),

      // Topics page tabs
      topicsTab: 'info',
      topicsExamType: 'formulas',
      setTopicsTab: (tab) => set({ topicsTab: tab }),
      setTopicsExamType: (type) => set({ topicsExamType: type, topicsTab: 'exams' }),

      // Certification Filters
      certificationFilters: defaultCertificationFilters,
      setCertificationDomain: (domain) =>
        set((state) => ({
          certificationFilters: { ...state.certificationFilters, domain },
        })),
      setCertificationSearch: (search) =>
        set((state) => ({
          certificationFilters: { ...state.certificationFilters, search },
        })),
      resetCertificationFilters: () => set({ certificationFilters: defaultCertificationFilters }),
    }),
    {
      name: 'bifa-exam-storage',
      partialize: (state) => ({
        isDarkMode: state.isDarkMode,
        lang: state.lang,
        // Don't persist questions to avoid sync issues - always use fresh data
        // Only persist question status (marked, seen, answered)
        questionStatuses: state.questions.reduce((acc, q) => {
          if (q.status !== 'unseen') {
            acc[q.id] = q.status;
          }
          return acc;
        }, {} as Record<string, QuestionStatus>),
      }),
      onRehydrateStorage: () => (state) => {
        // When rehydrating, restore question statuses to fresh questions
        if (state) {
          const stored = localStorage.getItem('bifa-exam-storage');
          if (stored) {
            try {
              const parsed = JSON.parse(stored);
              const statuses = parsed.state?.questionStatuses || {};
              const lang = parsed.state?.lang;
              state.questions = allQuestions.map(q => ({
                ...q,
                status: statuses[q.id] || 'unseen'
              }));
              if (lang && typeof document !== 'undefined') {
                document.documentElement.lang = lang;
                state.lang = lang;
              }
            } catch {
              state.questions = allQuestions;
            }
          }
        }
      },
    }
  )
);

// Initialize dark mode on app load
if (typeof window !== 'undefined') {
  const stored = localStorage.getItem('bifa-exam-storage');
  if (stored) {
    const parsed = JSON.parse(stored);
    if (parsed.state?.isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }
}
