import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useStore } from '../../store/useStore';
import { t } from '../../i18n';
import { ShieldAlert, Clock, Loader2, Phone } from 'lucide-react';

const ADMIN_PHONE = '+225 0708916464';
const ADMIN_WHATSAPP_URL = 'https://wa.me/2250708916464';

export const ProtectedRoute = () => {
  const { firebaseUser, appUser, loading, logout } = useAuth();
  const { lang } = useStore();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-50 dark:bg-dark-950">
        <Loader2 className="w-8 h-8 text-primary-500 animate-spin" />
      </div>
    );
  }

  if (!firebaseUser) {
    return <Navigate to="/login" replace />;
  }

  if (!appUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-50 dark:bg-dark-950">
        <Loader2 className="w-8 h-8 text-primary-500 animate-spin" />
      </div>
    );
  }

  if (!appUser.isActive) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-50 dark:bg-dark-950 px-4">
        <div className="card p-8 max-w-md w-full text-center">
          <ShieldAlert className="w-16 h-16 text-warning mx-auto mb-4" />
          <h2 className="text-xl font-bold text-dark-900 dark:text-white mb-2">
            {t(lang, 'accountInactive')}
          </h2>
          <p className="text-dark-600 dark:text-dark-400 mb-4">
            {t(lang, 'accountInactiveDesc')}
          </p>

          {/* Contact admin */}
          <div className="p-4 rounded-xl bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 mb-6">
            <p className="text-sm font-medium text-primary-800 dark:text-primary-300 mb-3">
              {t(lang, 'contactAdminToActivate')}
            </p>
            <a
              href={ADMIN_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-green-500 hover:bg-green-600 text-white font-medium text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              WhatsApp : {ADMIN_PHONE}
            </a>
          </div>

          <button onClick={logout} className="btn-secondary">
            {t(lang, 'logout')}
          </button>
        </div>
      </div>
    );
  }

  const isExpired = new Date(appUser.expiresAt) < new Date();
  if (isExpired) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-50 dark:bg-dark-950 px-4">
        <div className="card p-8 max-w-md w-full text-center">
          <Clock className="w-16 h-16 text-error mx-auto mb-4" />
          <h2 className="text-xl font-bold text-dark-900 dark:text-white mb-2">
            {t(lang, 'accountExpired')}
          </h2>
          <p className="text-dark-600 dark:text-dark-400 mb-4">
            {t(lang, 'accountExpiredDesc')}
          </p>

          {/* Contact admin */}
          <div className="p-4 rounded-xl bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 mb-6">
            <p className="text-sm font-medium text-primary-800 dark:text-primary-300 mb-3">
              {t(lang, 'contactAdminToRenew')}
            </p>
            <a
              href={ADMIN_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-green-500 hover:bg-green-600 text-white font-medium text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              WhatsApp : {ADMIN_PHONE}
            </a>
          </div>

          <button onClick={logout} className="btn-secondary">
            {t(lang, 'logout')}
          </button>
        </div>
      </div>
    );
  }

  return <Outlet />;
};
