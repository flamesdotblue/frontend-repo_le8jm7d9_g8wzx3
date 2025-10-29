import React from 'react';
import { Bell, Search, User, Menu } from 'lucide-react';

const TopNav = ({ onMenuClick }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Brand + Mobile Menu */}
          <div className="flex items-center gap-3">
            <button
              aria-label="Open sidebar"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:hidden"
              onClick={onMenuClick}
            >
              <Menu className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-blue-600"></div>
              <span className="font-semibold tracking-tight text-gray-900">HireHUB</span>
            </div>
          </div>

          {/* Center: Search */}
          <div className="hidden md:block md:flex-1 md:max-w-xl">
            <label htmlFor="global-search" className="sr-only">Search</label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Search className="h-4 w-4" />
              </div>
              <input
                id="global-search"
                type="text"
                placeholder="Search jobs, companies, candidates..."
                className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <button className="relative inline-flex items-center justify-center rounded-full p-2 text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <Bell className="h-5 w-5" />
              <span className="absolute -right-0 -top-0 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-semibold text-white ring-2 ring-white">3</span>
            </button>
            <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-2 py-1">
              <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600"></div>
              <span className="hidden text-sm font-medium text-gray-700 sm:block">Alex</span>
              <User className="hidden h-4 w-4 text-gray-400 sm:block" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
