import { useState } from "react";
import AdminLogout from "../component/adminlogout";

export default function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen">
      <aside
        className={`bg-gray-800 text-white transition-all duration-300 ${
          isSidebarOpen ? "w-64" : "w-16"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
          <span className="text-lg font-semibold">
            {isSidebarOpen ? "Admin Panel" : "AP"}
          </span>
          <button
            className="text-gray-400 focus:outline-none"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            ☰
          </button>
        </div>
        <nav className="mt-4">
          <ul className="space-y-2 px-4">
            <li>
              <a href="#" className="block py-2 hover:text-blue-400">
                {isSidebarOpen ? "Dashboard" : "🏠"}
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-blue-400">
                {isSidebarOpen ? "Users" : "👥"}
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-blue-400">
                {isSidebarOpen ? "Reports" : "📄"}
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 bg-gray-100 min-h-screen">
        <nav className="flex items-center justify-between px-6 py-4 bg-white shadow">
          <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
          <AdminLogout />
        </nav>

        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome, Admin</h2>
          <p className="mb-6">This is the admin-only dashboard.</p>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="text-left py-3 px-4">#</th>
                  <th className="text-left py-3 px-4">Name</th>
                  <th className="text-left py-3 px-4">Email</th>
                  <th className="text-left py-3 px-4">Role</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="py-3 px-4">1</td>
                  <td className="py-3 px-4">John Doe</td>
                  <td className="py-3 px-4">john@example.com</td>
                  <td className="py-3 px-4">Admin</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">2</td>
                  <td className="py-3 px-4">Jane Smith</td>
                  <td className="py-3 px-4">jane@example.com</td>
                  <td className="py-3 px-4">Editor</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
