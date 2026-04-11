import { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, User, BookOpen, Clock, Trophy, TrendingUp, Eye, Loader2, Award } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useStore } from '../store/useStore';
import { t } from '../i18n';
import { fetchUserExamResults } from '../services/firestore';
import type { StoredExamResult } from '../types';

export const DashboardPage = () => {
  const { appUser } = useAuth();
  const { lang } = useStore();
  const [results, setResults] = useState<StoredExamResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!appUser) return;
    fetchUserExamResults(appUser.uid)
      .then(setResults)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [appUser]);

  const stats = useMemo(() => {
    if (results.length === 0) return { total: 0, avgScore: 0, bestByCert: {} as Record<string, number> };
    const avgScore = Math.round(results.reduce((sum, r) => sum + r.score, 0) / results.length);
    const bestByCert: Record<string, number> = {};
    results.forEach(r => {
      if (!bestByCert[r.certification] || r.score > bestByCert[r.certification]) {
        bestByCert[r.certification] = r.score;
      }
    });
    return { total: results.length, avgScore, bestByCert };
  }, [results]);

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-primary-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-dark-50 dark:bg-dark-950 py-6 sm:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-600 to-cyan-500 flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-dark-900 dark:text-white">
              {t(lang, 'dashboard')}
            </h1>
            <p className="text-sm text-dark-500">{t(lang, 'dashboardSubtitle')}</p>
          </div>
        </div>

        {/* Profile Card */}
        {appUser && (
          <div className="card p-4 sm:p-6 mb-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-cyan-500 flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                {appUser.displayName?.charAt(0)?.toUpperCase() || '?'}
              </div>
              <div className="flex-1 min-w-0 text-center sm:text-left w-full">
                <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
                  <User className="w-4 h-4 text-dark-400" />
                  <span className="font-semibold text-dark-900 dark:text-white text-lg truncate">{appUser.displayName}</span>
                </div>
                <p className="text-sm text-dark-500 truncate">{appUser.email}</p>
                <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4 mt-2 text-sm text-dark-500">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5" />
                    {appUser.allowedCourses.length} {t(lang, 'courses')}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {t(lang, 'expiresOn')} {new Date(appUser.expiresAt).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US')}
                  </span>
                </div>
                {appUser.allowedCourses.length > 0 && (
                  <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 mt-2">
                    {appUser.allowedCourses.map(course => (
                      <span key={course} className="px-2 py-0.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-xs font-medium">
                        {course.toUpperCase()}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
          <div className="card p-3 sm:p-4 text-center">
            <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-primary-500 mx-auto mb-1.5 sm:mb-2" />
            <div className="text-xl sm:text-2xl font-bold text-dark-900 dark:text-white">{stats.total}</div>
            <div className="text-[10px] sm:text-xs text-dark-500">{t(lang, 'examsTaken')}</div>
          </div>
          <div className="card p-3 sm:p-4 text-center">
            <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-500 mx-auto mb-1.5 sm:mb-2" />
            <div className="text-xl sm:text-2xl font-bold text-dark-900 dark:text-white">{stats.avgScore}%</div>
            <div className="text-[10px] sm:text-xs text-dark-500">{t(lang, 'averageScore')}</div>
          </div>
          {Object.entries(stats.bestByCert).slice(0, 2).map(([cert, score]) => (
            <div key={cert} className="card p-3 sm:p-4 text-center">
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500 mx-auto mb-1.5 sm:mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-dark-900 dark:text-white">{score}%</div>
              <div className="text-[10px] sm:text-xs text-dark-500">{t(lang, 'bestScore')} {cert.toUpperCase()}</div>
            </div>
          ))}
        </div>

        {/* Exam History */}
        <div className="card overflow-hidden">
          <div className="p-4 sm:p-6 border-b border-dark-200 dark:border-dark-700">
            <h2 className="text-lg font-semibold text-dark-900 dark:text-white">
              {t(lang, 'examHistory')}
            </h2>
          </div>

          {results.length === 0 ? (
            <div className="p-8 text-center text-dark-500">
              <Trophy className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p>{t(lang, 'noExamsYet')}</p>
            </div>
          ) : (
            <>
              {/* Mobile card list */}
              <div className="sm:hidden divide-y divide-dark-200 dark:divide-dark-700">
                {results.map((result) => (
                  <div key={result.id} className="p-4 flex items-center gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-xs font-medium">
                          {result.certification.toUpperCase()}
                        </span>
                        <span className={`font-bold text-sm ${
                          result.score >= 80 ? 'text-success' :
                          result.score >= 60 ? 'text-warning' : 'text-error'
                        }`}>
                          {result.score}%
                        </span>
                      </div>
                      <p className="text-xs text-dark-500 truncate">
                        {result.examType} &middot; {result.correctAnswers}/{result.totalQuestions} &middot; {new Date(result.completedAt).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US')}
                      </p>
                    </div>
                    {result.answers && result.answers.length > 0 ? (
                      <Link
                        to={`/review/${result.id}`}
                        className="flex-shrink-0 p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>
                    ) : (
                      <span className="text-xs text-dark-400">-</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Desktop table */}
              <div className="hidden sm:block overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-dark-50 dark:bg-dark-800/50">
                    <tr>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-dark-500 uppercase">{t(lang, 'certification')}</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-dark-500 uppercase">{t(lang, 'type')}</th>
                      <th className="text-center px-4 py-3 text-xs font-semibold text-dark-500 uppercase">{t(lang, 'score')}</th>
                      <th className="text-center px-4 py-3 text-xs font-semibold text-dark-500 uppercase">Q</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-dark-500 uppercase hidden md:table-cell">{t(lang, 'date')}</th>
                      <th className="text-center px-4 py-3 text-xs font-semibold text-dark-500 uppercase">{t(lang, 'actions')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-dark-200 dark:divide-dark-700">
                    {results.map((result) => (
                      <tr key={result.id} className="hover:bg-dark-50 dark:hover:bg-dark-800/30 transition-colors">
                        <td className="px-4 py-3">
                          <span className="px-2 py-0.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-xs font-medium">
                            {result.certification.toUpperCase()}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-dark-600 dark:text-dark-400">
                          {result.examType}
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span className={`font-bold text-sm ${
                            result.score >= 80 ? 'text-success' :
                            result.score >= 60 ? 'text-warning' : 'text-error'
                          }`}>
                            {result.score}%
                          </span>
                        </td>
                        <td className="px-4 py-3 text-center text-sm text-dark-500">
                          {result.correctAnswers}/{result.totalQuestions}
                        </td>
                        <td className="px-4 py-3 text-sm text-dark-500 hidden md:table-cell">
                          {new Date(result.completedAt).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US')}
                        </td>
                        <td className="px-4 py-3 text-center">
                          {result.answers && result.answers.length > 0 ? (
                            <Link
                              to={`/review/${result.id}`}
                              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-xs font-medium hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors"
                            >
                              <Eye className="w-3.5 h-3.5" />
                              {t(lang, 'review')}
                            </Link>
                          ) : (
                            <span className="text-xs text-dark-400">-</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
