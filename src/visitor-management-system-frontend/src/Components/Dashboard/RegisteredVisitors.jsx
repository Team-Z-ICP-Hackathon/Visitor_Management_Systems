import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar";

const RegisteredVisitors = () => {
  const [visitors, setVisitors] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchVisitors();
  }, []);

  const fetchVisitors = async () => {
    // Dummy data for testing
    const dummyVisitors = [
      { id: 1, name: "John Doe", email: "john.doe@example.com", phone: "123-456-7890", userid: "JD123", date: "23/11/2024" },
      { id: 2, name: "Jane Smith", email: "jane.smith@example.com", phone: "123-456-7891", userid: "JS456", date: "23/11/2024" },
      { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com", phone: "123-456-7892", userid: "AJ789", date: "22/11/2024" },
      { id: 4, name: "Bob Brown", email: "bob.brown@example.com", phone: "123-456-7893", userid: "BB012", date: "22/11/2024" },
      { id: 5, name: "Charlie Black", email: "charlie.black@example.com", phone: "123-456-7894", userid: "CB345", date: "21/11/2024"  },
    ];
    setVisitors(dummyVisitors);
  };

  const filteredVisitors = visitors.filter((visitor) =>
    visitor.name.toLowerCase().includes(search.toLowerCase()) ||
    visitor.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="p-4 flex-1">
        <h1 className="text-2xl font-bold mb-4">Registered Visitors</h1>
        <input
          type="text"
          placeholder="Search by name or email"
          className="border p-2 mb-4 w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">User ID</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredVisitors.map((visitor) => (
              <tr key={visitor.id} className="bg-gray-100">
                <td className="border px-4 py-2">{visitor.name}</td>
                <td className="border px-4 py-2">{visitor.userid}</td>
                <td className="border px-4 py-2">{visitor.email}</td>
                <td className="border px-4 py-2">{visitor.phone}</td>
                <td className="border px-4 py-2">{visitor.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegisteredVisitors;

