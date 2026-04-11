import { Link, useLocation } from 'react-router-dom';
import { Menu, Moon, Sun, X, Home, Globe, LogOut, LogIn, Shield, BarChart3 } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { useAuth } from '../../contexts/AuthContext';
import { t } from '../../i18n';

export const Header = () => {
  const location = useLocation();
  const { isDarkMode, toggleDarkMode, isSidebarOpen, toggleSidebar, lang, setLanguage } = useStore();
  const { appUser, logout } = useAuth();

  const isHome = location.pathname === '/';

  const NavLink = ({ to, children, isActive }: { to: string; children: React.ReactNode; isActive: boolean }) => (
    <Link
      to={to}
      className={`relative px-3 lg:px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 group ${
        isActive
          ? 'text-primary-600 dark:text-primary-400'
          : 'text-dark-600 hover:text-primary-600 dark:text-dark-300 dark:hover:text-primary-400'
      }`}
    >
      {isActive && (
        <span className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-cyan-500/10 rounded-xl" />
      )}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full transition-all duration-300 ${isActive ? 'w-8' : 'group-hover:w-4'}`} />
    </Link>
  );

  return (
    <>
      {/* Top header bar */}
      <header className="sticky top-0 z-50 header-glass">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Left section */}
            <div className="flex items-center gap-2 sm:gap-4">
              {!isHome && (
                <button
                  onClick={toggleSidebar}
                  className="p-2 sm:p-2.5 rounded-xl hover:bg-dark-100/80 dark:hover:bg-dark-800/80 lg:hidden transition-all duration-300 hover:scale-105 active:scale-95"
                  aria-label="Toggle sidebar"
                >
                  {isSidebarOpen ? (
                    <X className="w-5 h-5 text-dark-600 dark:text-dark-300" />
                  ) : (
                    <Menu className="w-5 h-5 text-dark-600 dark:text-dark-300" />
                  )}
                </button>
              )}

              <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
                <div className="relative">
                  <div className="absolute inset-0 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300 bg-primary-500" />
                  <img
                    src="/bifa.png"
                    alt="BIFA Logo"
                    className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-xl object-contain shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  />
                </div>
                <div>
                  <h1 className="text-base sm:text-xl font-bold text-dark-900 dark:text-white flex items-center gap-1 sm:gap-2">
                    BIFA <span className="text-gradient">EXAM</span>
                    {/* <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 animate-pulse" /> */}
                  </h1>
                </div>
              </Link>
            </div>

            {/* Center navigation - desktop only */}
            <nav className="hidden md:flex items-center gap-0.5 lg:gap-1 bg-dark-100/50 dark:bg-dark-800/50 backdrop-blur-sm rounded-2xl p-1 lg:p-1.5">
              <NavLink to="/" isActive={location.pathname === '/'}>
                {t(lang, 'home')}
              </NavLink>
              {appUser && (
                <NavLink to="/dashboard" isActive={location.pathname === '/dashboard'}>
                  {t(lang, 'dashboard')}
                </NavLink>
              )}
              {appUser?.role === 'admin' && (
                <NavLink to="/admin" isActive={location.pathname === '/admin'}>
                  {t(lang, 'admin')}
                </NavLink>
              )}
            </nav>

            {/* Right section */}
            <div className="flex items-center gap-1.5 sm:gap-3">
              <button
                onClick={toggleDarkMode}
                className="relative p-2 rounded-xl hover:bg-dark-100/80 dark:hover:bg-dark-800/80 transition-all duration-300 hover:scale-105 active:scale-95 group"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 transition-transform duration-500 rotate-0 group-hover:rotate-90" />
                ) : (
                  <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-dark-600 transition-transform duration-500 rotate-0 group-hover:-rotate-12" />
                )}
              </button>

              <button
                onClick={() => setLanguage(lang === 'fr' ? 'en' : 'fr')}
                title={lang === 'fr' ? 'Français' : 'English'}
                aria-label="Toggle language"
                className="p-2 rounded-xl hover:bg-dark-100/80 dark:hover:bg-dark-800/80 transition-all duration-200"
              >
                <div className="flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-dark-600 dark:text-dark-300" />
                  <span className="font-medium text-xs text-dark-600 dark:text-dark-300">{lang.toUpperCase()}</span>
                </div>
              </button>

              {/* User info + logout - desktop */}
              {appUser ? (
                <div className="hidden md:flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                    {appUser.displayName?.charAt(0)?.toUpperCase() || '?'}
                  </div>
                  <span className="hidden lg:block text-sm font-medium text-dark-700 dark:text-dark-300 max-w-[100px] truncate">
                    {appUser.displayName}
                  </span>
                  <button
                    onClick={logout}
                    className="p-2 rounded-xl hover:bg-dark-100/80 dark:hover:bg-dark-800/80 transition-all duration-200"
                    title={t(lang, 'logout')}
                  >
                    <LogOut className="w-4 h-4 text-dark-500 dark:text-dark-400" />
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-primary-500 to-cyan-500 text-white text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  <LogIn className="w-4 h-4" />
                  {t(lang, 'login')}
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile bottom navigation bar - fixed at bottom */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-dark-900/90 backdrop-blur-lg border-t border-dark-200/50 dark:border-dark-700/50 safe-area-bottom">
        <div className="flex justify-around items-center px-1 py-1.5">
          <Link
            to="/"
            className={`flex flex-col items-center justify-center gap-0.5 py-1 rounded-lg flex-1 ${
              location.pathname === '/'
                ? 'text-primary-600 dark:text-primary-400'
                : 'text-dark-400 dark:text-dark-500'
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="text-[10px] font-medium leading-none">{t(lang, 'home')}</span>
          </Link>
          {appUser ? (
            <>
              <Link
                to="/dashboard"
                className={`flex flex-col items-center justify-center gap-0.5 py-1 rounded-lg flex-1 ${
                  location.pathname === '/dashboard'
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-dark-400 dark:text-dark-500'
                }`}
              >
                <BarChart3 className="w-5 h-5" />
                <span className="text-[10px] font-medium leading-none">{t(lang, 'dashboard')}</span>
              </Link>
              {appUser.role === 'admin' && (
                <Link
                  to="/admin"
                  className={`flex flex-col items-center justify-center gap-0.5 py-1 rounded-lg flex-1 ${
                    location.pathname === '/admin'
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-dark-400 dark:text-dark-500'
                  }`}
                >
                  <Shield className="w-5 h-5" />
                  <span className="text-[10px] font-medium leading-none">{t(lang, 'admin')}</span>
                </Link>
              )}
              <button
                onClick={logout}
                className="flex flex-col items-center justify-center gap-0.5 py-1 rounded-lg flex-1 text-dark-400 dark:text-dark-500 active:text-red-500"
              >
                <LogOut className="w-5 h-5" />
                <span className="text-[10px] font-medium leading-none">{t(lang, 'logout')}</span>
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className={`flex flex-col items-center justify-center gap-0.5 py-1 rounded-lg flex-1 ${
                location.pathname === '/login'
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-dark-400 dark:text-dark-500'
              }`}
            >
              <LogIn className="w-5 h-5" />
              <span className="text-[10px] font-medium leading-none">{t(lang, 'login')}</span>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};
