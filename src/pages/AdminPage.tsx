import { useEffect, useState, useMemo } from 'react';
import { Users, Shield, Clock, BookOpen, Loader2, RefreshCw, Check, X, Search, ChevronLeft, ChevronRight, UserCheck, UserX, AlertTriangle } from 'lucide-react';
import { useStore } from '../store/useStore';
import { t } from '../i18n';
import type { AppUser, CertificationSlug } from '../types';
import { fetchAllUsers, updateUserActivation, updateUserCourses, updateUserRole, extendUserExpiration } from '../services/firestore';

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

  // Stats
  const stats = useMemo(() => {
    const total = users.length;
    const active = users.filter((u) => u.isActive && !isExpired(u)).length;
    const inactive = users.filter((u) => !u.isActive).length;
    const expired = users.filter((u) => isExpired(u)).length;
    return { total, active, inactive, expired };
  }, [users]);

  // Filtered + searched users
  const filteredUsers = useMemo(() => {
    let result = users;

    // Filter by status
    if (filterStatus === 'active') result = result.filter((u) => u.isActive && !isExpired(u));
    else if (filterStatus === 'inactive') result = result.filter((u) => !u.isActive);
    else if (filterStatus === 'expired') result = result.filter((u) => isExpired(u));

    // Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter((u) =>
        u.displayName?.toLowerCase().includes(q) || u.email.toLowerCase().includes(q)
      );
    }

    return result;
  }, [users, filterStatus, searchQuery]);

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filteredUsers.length / USERS_PER_PAGE));
  const paginatedUsers = filteredUsers.slice((currentPage - 1) * USERS_PER_PAGE, currentPage * USERS_PER_PAGE);

  // Reset page when filters change
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

  const handleToggleCourse = async (user: AppUser, courseSlug: CertificationSlug) => {
    setUpdatingId(user.uid);
    const newCourses = user.allowedCourses.includes(courseSlug)
      ? user.allowedCourses.filter((c) => c !== courseSlug)
      : [...user.allowedCourses, courseSlug];
    try {
      await updateUserCourses(user.uid, newCourses);
      setUsers((prev) => prev.map((u) => u.uid === user.uid ? { ...u, allowedCourses: newCourses } : u));
    } catch (err) {
      console.error('Error updating courses:', err);
    } finally {
      setUpdatingId(null);
    }
  };

  const handleExtend = async (user: AppUser) => {
    setUpdatingId(user.uid);
    try {
      await extendUserExpiration(user.uid);
      const newExpiry = new Date(user.expiresAt > new Date().toISOString() ? user.expiresAt : new Date().toISOString());
      newExpiry.setMonth(newExpiry.getMonth() + 1);
      setUsers((prev) => prev.map((u) => u.uid === user.uid ? { ...u, expiresAt: newExpiry.toISOString() } : u));
    } catch (err) {
      console.error('Error extending expiration:', err);
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

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-dark-50 dark:bg-dark-950 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary-600 to-cyan-500 flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="min-w-0">
              <h1 className="text-lg sm:text-2xl font-bold text-dark-900 dark:text-white truncate">
                {t(lang, 'admin')}
              </h1>
              <p className="text-xs sm:text-sm text-dark-500">
                {users.length} {t(lang, 'usersCount')}
              </p>
            </div>
          </div>
          <button onClick={loadUsers} className="btn-secondary text-xs sm:text-sm flex-shrink-0">
            <RefreshCw className="w-4 h-4" />
            <span className="hidden sm:inline">{t(lang, 'refresh')}</span>
          </button>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
          {statCards.map((stat) => (
            <button
              key={stat.filter}
              onClick={() => setFilterStatus(filterStatus === stat.filter ? 'all' : stat.filter)}
              className={`p-3 sm:p-4 rounded-xl border transition-all text-left ${
                filterStatus === stat.filter
                  ? 'bg-white dark:bg-dark-800 border-primary-300 dark:border-primary-700 shadow-md ring-2 ring-primary-500/20'
                  : 'bg-white dark:bg-dark-800 border-dark-200 dark:border-dark-700 hover:border-dark-300 dark:hover:border-dark-600'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center flex-shrink-0`}>
                  <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-dark-900 dark:text-white">{stat.value}</p>
                  <p className="text-xs text-dark-500">{stat.label}</p>
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
          <div className="hidden lg:grid lg:grid-cols-[2fr_1fr_2fr_1fr_1fr] gap-4 px-5 py-3 bg-dark-50 dark:bg-dark-900 border-b border-dark-200 dark:border-dark-700 text-xs font-semibold text-dark-500 uppercase tracking-wider">
            <span>{t(lang, 'name')}</span>
            <span>{t(lang, 'status')}</span>
            <span>{t(lang, 'courses')}</span>
            <span>{t(lang, 'expiration')}</span>
            <span>{t(lang, 'actions')}</span>
          </div>

          {/* Rows */}
          <div className="divide-y divide-dark-100 dark:divide-dark-700">
            {paginatedUsers.length === 0 ? (
              <div className="px-5 py-10 text-center text-dark-400 text-sm">
                {searchQuery ? (lang === 'fr' ? 'Aucun résultat' : 'No results') : (lang === 'fr' ? 'Aucun utilisateur' : 'No users')}
              </div>
            ) : (
              paginatedUsers.map((user) => (
                <div
                  key={user.uid}
                  className={`px-4 sm:px-5 py-3 sm:py-4 transition-colors hover:bg-dark-50/50 dark:hover:bg-dark-750/50 ${updatingId === user.uid ? 'opacity-60' : ''}`}
                >
                  {/* Desktop: grid row */}
                  <div className="hidden lg:grid lg:grid-cols-[2fr_1fr_2fr_1fr_1fr] gap-4 items-center">
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
                      {isExpired(user) && (
                        <span className="px-2 py-0.5 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-xs font-medium">
                          {t(lang, 'expired')}
                        </span>
                      )}
                    </div>

                    {/* Courses */}
                    <div className="flex flex-wrap gap-1">
                      {ALL_COURSES.map((course) => {
                        const isAllowed = user.allowedCourses.includes(course.slug);
                        return (
                          <button
                            key={course.slug}
                            onClick={() => handleToggleCourse(user, course.slug)}
                            disabled={updatingId === user.uid}
                            className={`text-[10px] px-2 py-1 rounded-md font-medium transition-colors border ${
                              isAllowed
                                ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 border-primary-300 dark:border-primary-700'
                                : 'bg-dark-50 dark:bg-dark-900 text-dark-400 border-dark-200 dark:border-dark-700 hover:bg-dark-100 dark:hover:bg-dark-800'
                            }`}
                          >
                            {course.label}
                          </button>
                        );
                      })}
                    </div>

                    {/* Expiration */}
                    <div className="flex items-center gap-2">
                      <span className={`text-xs ${isExpired(user) ? 'text-error font-medium' : 'text-dark-600 dark:text-dark-400'}`}>
                        {new Date(user.expiresAt).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US')}
                      </span>
                      <button
                        onClick={() => handleExtend(user)}
                        disabled={updatingId === user.uid}
                        className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 hover:bg-cyan-200 dark:hover:bg-cyan-900/50 font-medium"
                      >
                        +1
                      </button>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleToggleActive(user)}
                        disabled={updatingId === user.uid}
                        className={`text-[10px] px-2.5 py-1.5 rounded-lg font-medium transition-colors ${
                          user.isActive
                            ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 hover:bg-red-200'
                            : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 hover:bg-green-200'
                        }`}
                      >
                        {updatingId === user.uid ? (
                          <Loader2 className="w-3 h-3 animate-spin" />
                        ) : user.isActive ? t(lang, 'deactivate') : t(lang, 'activate')}
                      </button>
                      <button
                        onClick={() => handleToggleRole(user)}
                        disabled={updatingId === user.uid}
                        className="text-[10px] px-2.5 py-1.5 rounded-lg font-medium transition-colors bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-400 hover:bg-dark-200 dark:hover:bg-dark-600 flex items-center gap-1"
                      >
                        <Shield className="w-3 h-3" />
                        {user.role === 'admin' ? t(lang, 'setUser') : t(lang, 'setAdmin')}
                      </button>
                    </div>
                  </div>

                  {/* Mobile: card layout */}
                  <div className="lg:hidden space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          {user.displayName?.charAt(0)?.toUpperCase() || '?'}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="font-medium text-dark-900 dark:text-white text-sm truncate max-w-[140px]">{user.displayName}</span>
                            {user.role === 'admin' && (
                              <span className="px-1.5 py-0.5 rounded bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-[10px] font-semibold">Admin</span>
                            )}
                          </div>
                          <p className="text-xs text-dark-400 truncate">{user.email}</p>
                        </div>
                      </div>
                      <div className="flex gap-1.5 flex-shrink-0">
                        {user.isActive ? (
                          <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-medium">
                            <Check className="w-2.5 h-2.5" /> {t(lang, 'active')}
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-[10px] font-medium">
                            <X className="w-2.5 h-2.5" /> {t(lang, 'inactive')}
                          </span>
                        )}
                        {isExpired(user) && (
                          <span className="px-1.5 py-0.5 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-[10px] font-medium">
                            {t(lang, 'expired')}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Courses row */}
                    <div className="flex flex-wrap gap-1.5">
                      {ALL_COURSES.map((course) => {
                        const isAllowed = user.allowedCourses.includes(course.slug);
                        return (
                          <button
                            key={course.slug}
                            onClick={() => handleToggleCourse(user, course.slug)}
                            disabled={updatingId === user.uid}
                            className={`text-[10px] px-2 py-1 rounded-md font-medium transition-colors border ${
                              isAllowed
                                ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 border-primary-300 dark:border-primary-700'
                                : 'bg-dark-50 dark:bg-dark-900 text-dark-400 border-dark-200 dark:border-dark-700'
                            }`}
                          >
                            {course.label}
                          </button>
                        );
                      })}
                    </div>

                    {/* Bottom: expiration + actions */}
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3 text-dark-400" />
                        <span className={`text-xs ${isExpired(user) ? 'text-error font-medium' : 'text-dark-500'}`}>
                          {new Date(user.expiresAt).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US')}
                        </span>
                        <button
                          onClick={() => handleExtend(user)}
                          disabled={updatingId === user.uid}
                          className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 font-medium"
                        >
                          +1
                        </button>
                      </div>
                      <div className="flex gap-1.5">
                        <button
                          onClick={() => handleToggleActive(user)}
                          disabled={updatingId === user.uid}
                          className={`text-[10px] px-2 py-1 rounded-lg font-medium ${
                            user.isActive
                              ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                              : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                          }`}
                        >
                          {updatingId === user.uid ? (
                            <Loader2 className="w-3 h-3 animate-spin" />
                          ) : user.isActive ? t(lang, 'deactivate') : t(lang, 'activate')}
                        </button>
                        <button
                          onClick={() => handleToggleRole(user)}
                          disabled={updatingId === user.uid}
                          className="text-[10px] px-2 py-1 rounded-lg font-medium bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-400 flex items-center gap-0.5"
                        >
                          <Shield className="w-3 h-3" />
                          {user.role === 'admin' ? t(lang, 'setUser') : t(lang, 'setAdmin')}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-4 px-1">
            <p className="text-xs text-dark-500">
              {t(lang, 'page')} {currentPage} / {totalPages} ({filteredUsers.length} {t(lang, 'usersCount')})
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 text-dark-600 dark:text-dark-400 disabled:opacity-40 hover:bg-dark-50 dark:hover:bg-dark-700 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 text-dark-600 dark:text-dark-400 disabled:opacity-40 hover:bg-dark-50 dark:hover:bg-dark-700 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
