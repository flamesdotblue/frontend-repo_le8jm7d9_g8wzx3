import React from 'react';

const Badge = ({ children, tone = 'info' }) => {
  const tones = {
    success: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
    warning: 'bg-amber-50 text-amber-700 ring-amber-200',
    error: 'bg-red-50 text-red-700 ring-red-200',
    info: 'bg-blue-50 text-blue-700 ring-blue-200',
    neutral: 'bg-gray-50 text-gray-700 ring-gray-200',
  };
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${tones[tone]}`}>
      {children}
    </span>
  );
};

const rows = [
  { role: 'Frontend Developer', company: 'TechNova', status: 'Under Review', tone: 'info', applied: 'Oct 20, 2025' },
  { role: 'Data Analyst', company: 'Insightly', status: 'Shortlisted', tone: 'success', applied: 'Oct 18, 2025' },
  { role: 'Product Manager', company: 'BluePeak', status: 'Interview', tone: 'warning', applied: 'Oct 16, 2025' },
  { role: 'Backend Engineer', company: 'CloudBase', status: 'Rejected', tone: 'error', applied: 'Oct 14, 2025' },
];

const ActivityTable = () => {
  return (
    <section className="mt-6 rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-gray-200 p-4">
        <div>
          <h3 className="text-sm font-semibold text-gray-900">Recent Applications</h3>
          <p className="mt-0.5 text-xs text-gray-500">Track the latest status updates</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-md border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50">Export</button>
          <button className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-700">View all</button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Role</th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Company</th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Applied</th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Status</th>
              <th scope="col" className="px-4 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {rows.map((r, idx) => (
              <tr key={idx} className="hover:bg-gray-50/60">
                <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-gray-900">{r.role}</td>
                <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-600">{r.company}</td>
                <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-600">{r.applied}</td>
                <td className="whitespace-nowrap px-4 py-3 text-sm">
                  <Badge tone={r.tone}>{r.status}</Badge>
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-right text-sm text-blue-600">
                  <button className="font-medium hover:underline">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3 text-sm text-gray-600">
        <p className="text-xs">Showing 4 of 24</p>
        <div className="inline-flex overflow-hidden rounded-md border border-gray-200">
          <button className="px-3 py-1.5 hover:bg-gray-50">Prev</button>
          <button className="border-l border-gray-200 px-3 py-1.5 hover:bg-gray-50">Next</button>
        </div>
      </div>
    </section>
  );
};

export default ActivityTable;
