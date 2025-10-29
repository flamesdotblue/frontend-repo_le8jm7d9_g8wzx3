import React from 'react';
import { Home, Briefcase, BarChart3, Settings } from 'lucide-react';

const NavItem = ({ icon: Icon, label, active = false }) => (
  <a
    href="#"
    className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
      active
        ? 'bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-200'
        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
    }`}
  >
    <Icon className="h-4 w-4" />
    <span>{label}</span>
  </a>
);

const Sidebar = ({ open, onClose }) => {
  return (
    <>
      {/* Backdrop for mobile */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
          aria-hidden="true"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 transform border-r border-gray-200 bg-white p-4 shadow-sm transition-transform duration-200 ease-out lg:static lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="mb-6 mt-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Main</p>
          <div className="mt-2 space-y-1">
            <NavItem icon={Home} label="Overview" active />
            <NavItem icon={Briefcase} label="Jobs" />
            <NavItem icon={BarChart3} label="Analytics" />
            <NavItem icon={Settings} label="Settings" />
          </div>
        </div>

        <div className="mt-auto rounded-lg bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-500 p-4 text-white">
          <p className="text-sm font-medium">Boost your visibility</p>
          <p className="mt-1 text-xs text-white/80">Complete your profile to match with more roles.</p>
          <button className="mt-3 inline-flex items-center justify-center rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-gray-900 shadow-sm hover:bg-gray-50">Update Profile</button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
