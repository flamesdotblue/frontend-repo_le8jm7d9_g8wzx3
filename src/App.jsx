import React, { useState } from 'react';
import TopNav from './components/TopNav';
import Sidebar from './components/Sidebar';
import DashboardCards from './components/DashboardCards';
import ActivityTable from './components/ActivityTable';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Top Navigation */}
      <TopNav onMenuClick={() => setSidebarOpen(true)} />

      {/* Page */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 pb-10 pt-6 sm:px-6 lg:grid-cols-[18rem_1fr] lg:gap-8 lg:px-8">
        {/* Sidebar */}
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main Content */}
        <main className="space-y-6">
          {/* Page header */}
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight text-gray-900">Dashboard</h1>
              <p className="mt-1 text-sm text-gray-600">Welcome back! Here’s an overview of your placement journey.</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">Invite</button>
              <button className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">Post a job</button>
            </div>
          </div>

          {/* Quick stats */}
          <DashboardCards />

          {/* Activity table */}
          <ActivityTable />

          {/* Footer */}
          <footer className="pt-4 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} HireHUB. All rights reserved.
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
