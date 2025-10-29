import React from 'react';
import { TrendingUp, Users, Briefcase, CheckCircle2 } from 'lucide-react';

const StatCard = ({ title, value, delta, icon: Icon, accentBg, accentText, bubbleBg }) => (
  <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
    <div className={`absolute -right-6 -top-6 h-20 w-20 rounded-full ${bubbleBg} opacity-60`} />
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="mt-2 text-2xl font-semibold tracking-tight text-gray-900">{value}</p>
        <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700">
          <TrendingUp className="h-3.5 w-3.5" />
          <span>{delta}</span>
        </div>
      </div>
      <div className={`rounded-lg ${accentBg} p-2 ${accentText}`}> 
        <Icon className="h-5 w-5" />
      </div>
    </div>
  </div>
);

const DashboardCards = () => {
  return (
    <section aria-labelledby="quick-stats" className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <h2 id="quick-stats" className="sr-only">Quick Stats</h2>
      <StatCard title="Applications" value="128" delta="+12% this week" icon={Briefcase} accentBg="bg-blue-50" accentText="text-blue-600" bubbleBg="bg-blue-100" />
      <StatCard title="Shortlisted" value="42" delta="+5% this week" icon={CheckCircle2} accentBg="bg-emerald-50" accentText="text-emerald-600" bubbleBg="bg-emerald-100" />
      <StatCard title="Profile Views" value="3,482" delta="+18% this week" icon={Users} accentBg="bg-purple-50" accentText="text-purple-600" bubbleBg="bg-purple-100" />
      <StatCard title="Interviews" value="8" delta="+2 this week" icon={TrendingUp} accentBg="bg-amber-50" accentText="text-amber-600" bubbleBg="bg-amber-100" />
    </section>
  );
};

export default DashboardCards;
