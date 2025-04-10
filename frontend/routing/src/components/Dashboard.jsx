import React from "react";

function Dashboard() {
  return (
    <div>
      {" "}
      <div className="min-h-screen bg-gray-100 flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
          <nav className="space-y-4">
            <a href="#" className="block text-gray-700 hover:text-blue-500">
              Home
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-500">
              Analytics
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-500">
              Settings
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-6">Welcome Back, Vivek 👋</h1>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold">Users</h3>
              <p className="text-2xl mt-2 font-bold text-blue-600">1,234</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold">Revenue</h3>
              <p className="text-2xl mt-2 font-bold text-green-600">$9,876</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold">Performance</h3>
              <p className="text-2xl mt-2 font-bold text-yellow-500">89%</p>
            </div>
          </div>

          {/* Placeholder for chart or table */}
          <div className="mt-10 bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-4">Activity Overview</h3>
            <p className="text-gray-500">
              This section can be replaced with a graph or a table.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
