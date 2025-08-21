'use client';

import ProtectedRoute from '@/components/ProtectedRoute';

import { useEffect, useState } from 'react';

export default function ViewLogsClient() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleting, setDeleting] = useState(false);

  async function fetchLogs() {
    try {
      const res = await fetch('/api/view-log');
      if (!res.ok) throw new Error('Failed to fetch logs');
      const data = await res.json();
      setLogs(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  async function handleRemoveLogs() {
    if (!confirm('Are you sure you want to delete all logs?')) return;

    setDeleting(true);
    try {
      const res = await fetch('/api/remove-log', {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('Failed to delete logs');
      setLogs([]); // Clear logs from UI
    } catch (err) {
      alert('Error deleting logs: ' + err.message);
    } finally {
      setDeleting(false);
    }
  }

  useEffect(() => {
    fetchLogs();

    const interval = setInterval(() => {
      fetchLogs();
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  if (loading) return <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col items-center space-y-4">
        <svg
          className="animate-spin h-12 w-12 text-blue-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
        <p className="text-blue-600 text-lg font-semibold">Loading, please wait...</p>
      </div>
    </div>;
  if (error) return <p className="p-4 text-red-500">Error: {error}</p>;

  return (
    <ProtectedRoute>
    <div className="overflow-x-auto max-w-6xl mx-auto p-6 relative">
        <div className='float-right mb-6'>
            {logs.length > 0 && (
  <button
    onClick={handleRemoveLogs}
    disabled={deleting}
    className="text-blue-500 hover:text-blue-900 disabled:text-gray-400"
  >
    {deleting ? 'Deleting...' : 'Delete Logs'}
  </button>
)}


        </div>
      
      {logs.length === 0 ? (
        <p className="text-gray-500">No logs found.</p>
      ) : (
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">Timestamp</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Code Generated</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Email Sent</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Disabled Ports</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Enabled Ports</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Video Recorded</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => (
              <tr key={index} className="even:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{log.timestamp}</td>
                <td className="border border-gray-300 px-4 py-2">{log.code_generated}</td>
                <td className="border border-gray-300 px-4 py-2">{log.email_sent}</td>
                <td className="border border-gray-300 px-4 py-2">{log.disabled_ports}</td>
                <td className="border border-gray-300 px-4 py-2">{log.enabled_ports}</td>
                <td className="border border-gray-300 px-4 py-2">{log.video_recorded}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </ProtectedRoute>
  );
}
