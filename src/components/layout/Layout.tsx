import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

export const Layout = () => {
  const location = useLocation();
  const showSidebar = location.pathname.startsWith('/topics') || location.pathname.startsWith('/question');

  return (
    <div className="h-screen flex flex-col bg-dark-50 dark:bg-dark-950 overflow-hidden">
      {/* Fixed Header */}
      <Header />

      {/* Content area below header */}
      <div className="flex flex-1 overflow-hidden">
        {/* Fixed Sidebar */}
        {showSidebar && <Sidebar />}

        {/* Scrollable Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="pb-16 md:pb-0">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
