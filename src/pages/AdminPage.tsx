import { useEffect, useState, useMemo, type FormEvent } from 'react';
import { Users, Shield, Clock, BookOpen, Loader2, RefreshCw, Check, X, Search, ChevronLeft, ChevronRight, UserCheck, UserX, AlertTriangle, Calendar, Zap } from 'lucide-react';
import { useStore } from '../store/useStore';
import { t } from '../i18n';
import type { Lang } from '../i18n';
import type { AppUser, CertificationSlug } from '../types';
import { fetchAllUsers, updateUserActivation, updateUserCourses, updateUserRole, setUserExpiration } from '../services/firestore';

const ALL_COURSES: { slug: CertificationSlug; label: string }[] = [
  { slug: 'cfe', label: 'CFE' },
  { slug: 'cia-1', label: 'CIA 1' },
  { slug: 'cia-2', label: 'CIA 2' },
  { slug: 'cia-3', label: 'CIA 3' },
  { slug: 'cisa', label: 'CISA' },
  { slug: 'pmp', label: 'PMP' },
  { slug: 'capm', label: 'CAPM' },
  { slug: 'pm4ngos', label: 'Project DPro' },
  { slug: 'social-good-dpro', label: 'Social Good DPro' },
  { slug: 'program-dpro', label: 'Program DPro' },
  { slug: 'finance-dpro', label: 'Finance DPro' },
  { slug: 'meal-dpro', label: 'MEAL DPro' },
  { slug: 'pl-300', label: 'Microsoft PowerBI' },
  { slug: 'mos-excel', label: 'MOS Excel' },
];

const USERS_PER_PAGE = 20;

type FilterStatus = 'all' | 'active' | 'inactive' | 'expired';

export const AdminPage = () => {
  const { lang } = useStore();
  const [users, setUsers] = useState<AppUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<FilterStatus>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesUserId, setCoursesUserId] = useState<string | null>(null);
  const [expiryUserId, setExpiryUserId] = useState<string | null>(null);

  const loadUsers = async () => {
    setLoading(true);
    try {
      const data = await fetchAllUsers();
      setUsers(data);
    } catch (err) {
      console.error('Error fetching users:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadUsers(); }, []);

  const isExpired = (user: AppUser) => new Date(user.expiresAt) < new Date();

  const stats = useMemo(() => {
    const total = users.length;
    const active = users.filter((u) => u.isActive && !isExpired(u)).length;
    const inactive = users.filter((u) => !u.isActive).length;
    const expired = users.filter((u) => isExpired(u)).length;
    return { total, active, inactive, expired };
  }, [users]);

  const filteredUsers = useMemo(() => {
    let result = users;
    if (filterStatus === 'active') result = result.filter((u) => u.isActive && !isExpired(u));
    else if (filterStatus === 'inactive') result = result.filter((u) => !u.isActive);
    else if (filterStatus === 'expired') result = result.filter((u) => isExpired(u));

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter((u) =>
        u.displayName?.toLowerCase().includes(q) || u.email.toLowerCase().includes(q)
      );
    }
    return result;
  }, [users, filterStatus, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredUsers.length / USERS_PER_PAGE));
  const paginatedUsers = filteredUsers.slice((currentPage - 1) * USERS_PER_PAGE, currentPage * USERS_PER_PAGE);

  useEffect(() => { setCurrentPage(1); }, [searchQuery, filterStatus]);

  const handleToggleActive = async (user: AppUser) => {
    setUpdatingId(user.uid);
    try {
      await updateUserActivation(user.uid, !user.isActive);
      setUsers((prev) => prev.map((u) => u.uid === user.uid ? { ...u, isActive: !u.isActive } : u));
    } catch (err) {
      console.error('Error updating user:', err);
    } finally {
      setUpdatingId(null);
    }
  };

  const handleToggleRole = async (user: AppUser) => {
    setUpdatingId(user.uid);
    const newRole = user.role === 'admin' ? 'user' : 'admin';
    try {
      await updateUserRole(user.uid, newRole);
      setUsers((prev) => prev.map((u) => u.uid === user.uid ? { ...u, role: newRole } : u));
    } catch (err) {
      console.error('Error updating role:', err);
    } finally {
      setUpdatingId(null);
    }
  };

  const handleSetCourses = async (user: AppUser, newCourses: CertificationSlug[]) => {
    setUpdatingId(user.uid);
    try {
      await updateUserCourses(user.uid, newCourses);
      setUsers((prev) => prev.map((u) => u.uid === user.uid ? { ...u, allowedCourses: newCourses } : u));
    } catch (err) {
      console.error('Error updating courses:', err);
    } finally {
      setUpdatingId(null);
    }
  };

  const handleSetExpiry = async (user: AppUser, dateISO: string) => {
    setUpdatingId(user.uid);
    try {
      await setUserExpiration(user.uid, dateISO, true);
      setUsers((prev) => prev.map((u) => u.uid === user.uid ? { ...u, expiresAt: dateISO, isActive: true } : u));
    } catch (err) {
      console.error('Error updating expiration:', err);
    } finally {
      setUpdatingId(null);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-primary-500 animate-spin" />
      </div>
    );
  }

  const statCards: { label: string; value: number; icon: typeof Users; color: string; filter: FilterStatus }[] = [
    { label: t(lang, 'total'), value: stats.total, icon: Users, color: 'from-primary-500 to-cyan-500', filter: 'all' },
    { label: t(lang, 'active'), value: stats.active, icon: UserCheck, color: 'from-green-500 to-emerald-500', filter: 'active' },
    { label: t(lang, 'inactive'), value: stats.inactive, icon: UserX, color: 'from-red-500 to-rose-500', filter: 'inactive' },
    { label: t(lang, 'expired'), value: stats.expired, icon: AlertTriangle, color: 'from-orange-500 to-amber-500', filter: 'expired' },
  ];

  const coursesUser = coursesUserId ? users.find((u) => u.uid === coursesUserId) ?? null : null;
  const expiryUser = expiryUserId ? users.find((u) => u.uid === expiryUserId) ?? null : null;

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-dark-50 dark:bg-dark-950 py-4 sm:py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 sm:mb-6 gap-2 sm:gap-3">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary-600 to-cyan-500 flex items-center justify-center flex-shrink-0">
              <Shield className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="min-w-0">
              <h1 className="text-base sm:text-2xl font-bold text-dark-900 dark:text-white truncate">
                {t(lang, 'admin')}
              </h1>
              <p className="text-[11px] sm:text-sm text-dark-500">
                {users.length} {t(lang, 'usersCount')}
              </p>
            </div>
          </div>
          <button onClick={loadUsers} className="btn-secondary text-xs sm:text-sm flex-shrink-0 px-2.5 sm:px-3">
            <RefreshCw className="w-4 h-4" />
            <span className="hidden sm:inline">{t(lang, 'refresh')}</span>
          </button>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-4 sm:mb-6">
          {statCards.map((stat) => (
            <button
              key={stat.filter}
              onClick={() => setFilterStatus(filterStatus === stat.filter ? 'all' : stat.filter)}
              className={`p-2.5 sm:p-4 rounded-xl border transition-all text-left ${
                filterStatus === stat.filter
                  ? 'bg-white dark:bg-dark-800 border-primary-300 dark:border-primary-700 shadow-md ring-2 ring-primary-500/20'
                  : 'bg-white dark:bg-dark-800 border-dark-200 dark:border-dark-700 hover:border-dark-300 dark:hover:border-dark-600'
              }`}
            >
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center flex-shrink-0`}>
                  <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-lg sm:text-2xl font-bold text-dark-900 dark:text-white leading-tight">{stat.value}</p>
                  <p className="text-[11px] sm:text-xs text-dark-500 truncate">{stat.label}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t(lang, 'search')}
              className="input pl-10 py-2.5 w-full sm:max-w-md"
            />
          </div>
        </div>

        {/* Table */}
        <div className="bg-white dark:bg-dark-800 rounded-xl border border-dark-200 dark:border-dark-700 overflow-hidden">
          {/* Table header - desktop */}
          <div className="hidden xl:grid xl:grid-cols-[2fr_0.9fr_1fr_1.1fr_1.3fr] gap-4 px-5 py-3 bg-dark-50 dark:bg-dark-900 border-b border-dark-200 dark:border-dark-700 text-xs font-semibold text-dark-500 uppercase tracking-wider">
            <span>{t(lang, 'user')}</span>
            <span>{t(lang, 'status')}</span>
            <span>{t(lang, 'courses')}</span>
            <span>{t(lang, 'expiration')}</span>
            <span className="text-right">{t(lang, 'actions')}</span>
          </div>

          {/* Rows */}
          <div className="divide-y divide-dark-100 dark:divide-dark-700">
            {paginatedUsers.length === 0 ? (
              <div className="px-5 py-10 text-center text-dark-400 text-sm">
                {searchQuery ? (lang === 'fr' ? 'Aucun résultat' : 'No results') : (lang === 'fr' ? 'Aucun utilisateur' : 'No users')}
              </div>
            ) : (
              paginatedUsers.map((user) => {
                const allowedCount = user.allowedCourses.length;
                const totalCourses = ALL_COURSES.length;
                const expired = isExpired(user);
                const isUpdating = updatingId === user.uid;

                return (
                  <div
                    key={user.uid}
                    className={`px-3 sm:px-5 py-3 sm:py-4 transition-colors hover:bg-dark-50/50 dark:hover:bg-dark-750/50 ${isUpdating ? 'opacity-60' : ''}`}
                  >
                    {/* Desktop: grid row (xl+) */}
                    <div className="hidden xl:grid xl:grid-cols-[2fr_0.9fr_1fr_1.1fr_1.3fr] gap-4 items-center">
                      {/* Name + Email */}
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          {user.displayName?.charAt(0)?.toUpperCase() || '?'}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="font-medium text-dark-900 dark:text-white text-sm truncate">{user.displayName}</span>
                            {user.role === 'admin' && (
                              <span className="px-1.5 py-0.5 rounded bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-[10px] font-semibold">Admin</span>
                            )}
                          </div>
                          <p className="text-xs text-dark-400 truncate">{user.email}</p>
                        </div>
                      </div>

                      {/* Status */}
                      <div className="flex flex-wrap gap-1.5">
                        {user.isActive ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium">
                            <Check className="w-3 h-3" /> {t(lang, 'active')}
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs font-medium">
                            <X className="w-3 h-3" /> {t(lang, 'inactive')}
                          </span>
                        )}
                        {expired && (
                          <span className="px-2 py-0.5 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-xs font-medium">
                            {t(lang, 'expired')}
                          </span>
                        )}
                      </div>

                      {/* Courses → button to drawer */}
                      <button
                        onClick={() => setCoursesUserId(user.uid)}
                        disabled={isUpdating}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 border border-primary-200 dark:border-primary-800 hover:bg-primary-100 dark:hover:bg-primary-900/40 transition-colors w-fit"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>{allowedCount} / {totalCourses}</span>
                        <span className="text-dark-400 dark:text-dark-500">·</span>
                        <span>{t(lang, 'manageCourses')}</span>
                      </button>

                      {/* Expiration */}
                      <button
                        onClick={() => setExpiryUserId(user.uid)}
                        disabled={isUpdating}
                        className="flex items-center gap-2 px-2 py-1.5 -mx-2 rounded-lg hover:bg-dark-50 dark:hover:bg-dark-700/50 transition-colors group w-fit"
                        title={t(lang, 'editExpiration')}
                      >
                        <Clock className="w-3.5 h-3.5 text-dark-400 flex-shrink-0" />
                        <span className={`text-xs ${expired ? 'text-error font-medium' : 'text-dark-600 dark:text-dark-400'}`}>
                          {new Date(user.expiresAt).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US')}
                        </span>
                        <Calendar className="w-3.5 h-3.5 text-dark-400 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors flex-shrink-0" />
                      </button>

                      {/* Actions */}
                      <div className="flex items-center gap-1.5 justify-end">
                        <button
                          onClick={() => handleToggleActive(user)}
                          disabled={isUpdating}
                          className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors min-w-[88px] flex items-center justify-center ${
                            user.isActive
                              ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/50'
                              : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/50'
                          }`}
                        >
                          {isUpdating ? (
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          ) : user.isActive ? t(lang, 'deactivate') : t(lang, 'activate')}
                        </button>
                        <button
                          onClick={() => handleToggleRole(user)}
                          disabled={isUpdating}
                          className="text-xs px-3 py-1.5 rounded-lg font-medium transition-colors bg-dark-100 dark:bg-dark-700 text-dark-700 dark:text-dark-300 hover:bg-dark-200 dark:hover:bg-dark-600 flex items-center gap-1"
                          title={user.role === 'admin' ? t(lang, 'setUser') : t(lang, 'setAdmin')}
                        >
                          <Shield className="w-3.5 h-3.5" />
                          <span className="hidden xl:inline">{user.role === 'admin' ? t(lang, 'setUser') : t(lang, 'setAdmin')}</span>
                        </button>
                      </div>
                    </div>

                    {/* Mobile + tablet: card layout */}
                    <div className="xl:hidden space-y-2.5 sm:space-y-3">
                      {/* Top: avatar + name + status */}
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 flex-1">
                          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-primary-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                            {user.displayName?.charAt(0)?.toUpperCase() || '?'}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1.5">
                              <span className="font-medium text-dark-900 dark:text-white text-sm truncate">{user.displayName}</span>
                              {user.role === 'admin' && (
                                <span className="px-1.5 py-0.5 rounded bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-[10px] font-semibold flex-shrink-0">Admin</span>
                              )}
                            </div>
                            <p className="text-[11px] sm:text-xs text-dark-400 truncate">{user.email}</p>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-1 sm:gap-1.5 flex-shrink-0 items-end">
                          {user.isActive ? (
                            <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-medium">
                              <Check className="w-2.5 h-2.5" /> {t(lang, 'active')}
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-[10px] font-medium">
                              <X className="w-2.5 h-2.5" /> {t(lang, 'inactive')}
                            </span>
                          )}
                          {expired && (
                            <span className="px-1.5 py-0.5 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-[10px] font-medium">
                              {t(lang, 'expired')}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Courses + expiration row */}
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <button
                          onClick={() => setCoursesUserId(user.uid)}
                          disabled={isUpdating}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 border border-primary-200 dark:border-primary-800 hover:bg-primary-100 dark:hover:bg-primary-900/40 transition-colors"
                        >
                          <BookOpen className="w-3 h-3" />
                          <span>{allowedCount}/{totalCourses}</span>
                          <span className="text-dark-400 dark:text-dark-500">·</span>
                          <span>{t(lang, 'manageCourses')}</span>
                        </button>
                        <button
                          onClick={() => setExpiryUserId(user.uid)}
                          disabled={isUpdating}
                          className="inline-flex items-center gap-1.5 px-2 py-1.5 rounded-lg hover:bg-dark-50 dark:hover:bg-dark-700/50 transition-colors"
                          title={t(lang, 'editExpiration')}
                        >
                          <Clock className="w-3 h-3 text-dark-400 flex-shrink-0" />
                          <span className={`text-[11px] sm:text-xs ${expired ? 'text-error font-medium' : 'text-dark-500'}`}>
                            {new Date(user.expiresAt).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US')}
                          </span>
                          <Calendar className="w-3 h-3 text-primary-500 dark:text-primary-400 flex-shrink-0" />
                        </button>
                      </div>

                      {/* Actions row */}
                      <div className="flex gap-1.5">
                        <button
                          onClick={() => handleToggleActive(user)}
                          disabled={isUpdating}
                          className={`flex-1 text-xs px-2 py-2 rounded-lg font-medium flex items-center justify-center min-h-[34px] ${
                            user.isActive
                              ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/50'
                              : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/50'
                          }`}
                        >
                          {isUpdating ? (
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          ) : user.isActive ? t(lang, 'deactivate') : t(lang, 'activate')}
                        </button>
                        <button
                          onClick={() => handleToggleRole(user)}
                          disabled={isUpdating}
                          className="flex-1 text-xs px-2 py-2 rounded-lg font-medium bg-dark-100 dark:bg-dark-700 text-dark-700 dark:text-dark-300 hover:bg-dark-200 dark:hover:bg-dark-600 flex items-center justify-center gap-1 min-h-[34px]"
                        >
                          <Shield className="w-3.5 h-3.5 flex-shrink-0" />
                          <span className="truncate">{user.role === 'admin' ? t(lang, 'setUser') : t(lang, 'setAdmin')}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-4 px-1 gap-2">
            <p className="text-[11px] sm:text-xs text-dark-500 truncate">
              <span className="hidden sm:inline">{t(lang, 'page')} </span>
              {currentPage} / {totalPages}
              <span className="hidden sm:inline"> ({filteredUsers.length} {t(lang, 'usersCount')})</span>
            </p>
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 text-dark-600 dark:text-dark-400 disabled:opacity-40 hover:bg-dark-50 dark:hover:bg-dark-700 transition-colors"
                aria-label={t(lang, 'previous')}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 text-dark-600 dark:text-dark-400 disabled:opacity-40 hover:bg-dark-50 dark:hover:bg-dark-700 transition-colors"
                aria-label={t(lang, 'next')}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Courses drawer */}
      {coursesUser && (
        <CoursesDrawer
          user={coursesUser}
          onClose={() => setCoursesUserId(null)}
          onSave={handleSetCourses}
          isUpdating={updatingId === coursesUser.uid}
          lang={lang}
        />
      )}

      {/* Expiration editor */}
      {expiryUser && (
        <ExpiryEditor
          user={expiryUser}
          onClose={() => setExpiryUserId(null)}
          onSave={handleSetExpiry}
          isUpdating={updatingId === expiryUser.uid}
          lang={lang}
        />
      )}
    </div>
  );
};

type CoursesDrawerProps = {
  user: AppUser;
  onClose: () => void;
  onSave: (user: AppUser, courses: CertificationSlug[]) => Promise<void>;
  isUpdating: boolean;
  lang: Lang;
};

const CoursesDrawer = ({ user, onClose, onSave, isUpdating, lang }: CoursesDrawerProps) => {
  const [selected, setSelected] = useState<CertificationSlug[]>(user.allowedCourses);
  const [filter, setFilter] = useState('');

  useEffect(() => { setSelected(user.allowedCourses); }, [user.uid, user.allowedCourses]);

  const visibleCourses = useMemo(() => {
    if (!filter.trim()) return ALL_COURSES;
    const q = filter.toLowerCase();
    return ALL_COURSES.filter((c) => c.label.toLowerCase().includes(q));
  }, [filter]);

  const allSelected = ALL_COURSES.every((c) => selected.includes(c.slug));
  const dirty = selected.length !== user.allowedCourses.length
    || selected.some((s) => !user.allowedCourses.includes(s));

  const toggle = (slug: CertificationSlug) => {
    setSelected((prev) => prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]);
  };

  const toggleAll = () => {
    setSelected(allSelected ? [] : ALL_COURSES.map((c) => c.slug));
  };

  const handleSave = async () => {
    await onSave(user, selected);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <button
        aria-label={t(lang, 'close')}
        onClick={onClose}
        className="flex-1 bg-black/50 backdrop-blur-sm"
      />
      {/* Panel */}
      <div className="w-full sm:w-[440px] sm:max-w-[90vw] bg-white dark:bg-dark-900 shadow-2xl flex flex-col h-[100dvh]">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 p-4 sm:p-5 border-b border-dark-200 dark:border-dark-700">
          <div className="min-w-0">
            <h2 className="text-sm sm:text-base font-semibold text-dark-900 dark:text-white">{t(lang, 'coursesAccess')}</h2>
            <p className="text-[11px] sm:text-xs text-dark-500 truncate mt-0.5">{user.displayName} · {user.email}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-800 text-dark-500 flex-shrink-0"
            aria-label={t(lang, 'close')}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search + select all */}
        <div className="p-3 sm:p-4 space-y-2 border-b border-dark-200 dark:border-dark-700">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-400" />
            <input
              type="text"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder={t(lang, 'search')}
              className="input pl-10 py-2 w-full text-sm"
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs text-dark-500">
              {selected.length} / {ALL_COURSES.length}
            </span>
            <button
              onClick={toggleAll}
              className="text-xs font-medium text-primary-600 dark:text-primary-400 hover:underline"
            >
              {allSelected ? t(lang, 'unselectAll') : t(lang, 'selectAll')}
            </button>
          </div>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto p-2 min-h-0">
          {visibleCourses.length === 0 ? (
            <p className="text-center text-sm text-dark-400 py-8">
              {lang === 'fr' ? 'Aucun cours' : 'No courses'}
            </p>
          ) : (
            <ul className="space-y-1">
              {visibleCourses.map((course) => {
                const checked = selected.includes(course.slug);
                return (
                  <li key={course.slug}>
                    <label
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-colors border ${
                        checked
                          ? 'bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800'
                          : 'border-transparent hover:bg-dark-50 dark:hover:bg-dark-800'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggle(course.slug)}
                        className="w-4 h-4 rounded border-dark-300 dark:border-dark-600 text-primary-600 focus:ring-primary-500 focus:ring-offset-0 cursor-pointer flex-shrink-0"
                      />
                      <span className={`text-sm flex-1 truncate ${checked ? 'font-medium text-dark-900 dark:text-white' : 'text-dark-700 dark:text-dark-300'}`}>
                        {course.label}
                      </span>
                      {checked && <Check className="w-4 h-4 text-primary-600 dark:text-primary-400 flex-shrink-0" />}
                    </label>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 border-t border-dark-200 dark:border-dark-700 flex gap-2">
          <button
            onClick={onClose}
            disabled={isUpdating}
            className="flex-1 px-4 py-2 rounded-lg text-sm font-medium bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 hover:bg-dark-200 dark:hover:bg-dark-700 transition-colors"
          >
            {t(lang, 'close')}
          </button>
          <button
            onClick={handleSave}
            disabled={isUpdating || !dirty}
            className="flex-1 px-4 py-2 rounded-lg text-sm font-medium bg-primary-600 text-white hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
          >
            {isUpdating ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                ...
              </>
            ) : (
              <>
                <Check className="w-4 h-4" />
                {lang === 'fr' ? 'Enregistrer' : 'Save'}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

type ExpiryEditorProps = {
  user: AppUser;
  onClose: () => void;
  onSave: (user: AppUser, dateISO: string) => Promise<void>;
  isUpdating: boolean;
  lang: Lang;
};

const toDateInput = (iso: string): string => {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return '';
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

const addMonthsFromToday = (months: number): string => {
  const d = new Date();
  d.setMonth(d.getMonth() + months);
  return toDateInput(d.toISOString());
};

const todayInput = (): string => toDateInput(new Date().toISOString());

const ExpiryEditor = ({ user, onClose, onSave, isUpdating, lang }: ExpiryEditorProps) => {
  const currentExpiryInput = toDateInput(user.expiresAt);
  const isCurrentExpired = new Date(user.expiresAt) < new Date();
  const initialValue = isCurrentExpired ? addMonthsFromToday(12) : currentExpiryInput;
  const [date, setDate] = useState<string>(initialValue);

  const presets: { label: string; getValue: () => string }[] = [
    { label: `+1 ${t(lang, 'month')}`, getValue: () => addMonthsFromToday(1) },
    { label: `+3 ${t(lang, 'months')}`, getValue: () => addMonthsFromToday(3) },
    { label: `+6 ${t(lang, 'months')}`, getValue: () => addMonthsFromToday(6) },
    { label: `+1 ${t(lang, 'year')}`, getValue: () => addMonthsFromToday(12) },
  ];

  const dirty = date && date !== currentExpiryInput;
  const willActivate = !user.isActive || isCurrentExpired;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!date || !dirty) return;
    const iso = new Date(date + 'T23:59:59').toISOString();
    await onSave(user, iso);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
      {/* Backdrop */}
      <button
        aria-label={t(lang, 'close')}
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />
      {/* Modal */}
      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-md bg-white dark:bg-dark-900 rounded-2xl shadow-2xl flex flex-col max-h-[90dvh] overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-3 p-4 sm:p-5 border-b border-dark-200 dark:border-dark-700">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-primary-500 flex items-center justify-center flex-shrink-0">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div className="min-w-0">
              <h2 className="text-sm sm:text-base font-semibold text-dark-900 dark:text-white truncate">
                {t(lang, 'setExpirationDate')}
              </h2>
              <p className="text-[11px] sm:text-xs text-dark-500 truncate mt-0.5">
                {user.displayName} · {user.email}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-800 text-dark-500 flex-shrink-0"
            aria-label={t(lang, 'close')}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-5 space-y-4 overflow-y-auto">
          {/* Date input */}
          <div>
            <label className="block text-xs font-medium text-dark-600 dark:text-dark-400 mb-1.5">
              {t(lang, 'expiration')}
            </label>
            <input
              type="date"
              value={date}
              min={todayInput()}
              onChange={(e) => setDate(e.target.value)}
              className="input w-full text-sm"
              required
            />
          </div>

          {/* Presets */}
          <div>
            <label className="block text-xs font-medium text-dark-600 dark:text-dark-400 mb-1.5">
              {t(lang, 'quickPresets')}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {presets.map((p) => {
                const presetValue = p.getValue();
                const isSelected = date === presetValue;
                return (
                  <button
                    key={p.label}
                    type="button"
                    onClick={() => setDate(presetValue)}
                    className={`px-2 py-2 rounded-lg text-xs font-medium transition-colors border ${
                      isSelected
                        ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 border-primary-300 dark:border-primary-700'
                        : 'bg-dark-50 dark:bg-dark-800 text-dark-700 dark:text-dark-300 border-dark-200 dark:border-dark-700 hover:bg-dark-100 dark:hover:bg-dark-700'
                    }`}
                  >
                    {p.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Activation hint */}
          {willActivate && (
            <div className="flex items-start gap-2 p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
              <Zap className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-green-700 dark:text-green-300">
                {t(lang, 'userWillBeActivated')}
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 border-t border-dark-200 dark:border-dark-700 flex gap-2">
          <button
            type="button"
            onClick={onClose}
            disabled={isUpdating}
            className="flex-1 px-4 py-2 rounded-lg text-sm font-medium bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 hover:bg-dark-200 dark:hover:bg-dark-700 transition-colors"
          >
            {t(lang, 'cancel')}
          </button>
          <button
            type="submit"
            disabled={isUpdating || !dirty || !date}
            className="flex-1 px-4 py-2 rounded-lg text-sm font-medium bg-primary-600 text-white hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
          >
            {isUpdating ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                ...
              </>
            ) : (
              <>
                <Check className="w-4 h-4" />
                {t(lang, 'save')}
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
