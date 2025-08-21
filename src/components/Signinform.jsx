'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!email || !password) {
      setError('Please fill in both fields.');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || 'Sign-in failed');
      }

      // ✅ Set login flag in localStorage
      localStorage.setItem('signedIn', 'true');

      // ✅ Trigger a storage event manually so Navbar updates
      window.dispatchEvent(new Event('storage'));

      // ✅ Redirect
      router.push('/docs');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded shadow-md max-w-md w-full mx-auto"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <label className="block mb-2 font-semibold" htmlFor="email">
        Email
      </label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        placeholder="you@example.com"
        required
      />

      <label className="block mb-2 font-semibold" htmlFor="password">
        Password
      </label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-6 border border-gray-300 rounded"
        placeholder="Your password"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:bg-blue-400"
      >
        {loading ? 'Signing in...' : 'Sign In'}
      </button>
    </form>
  );
}
