"use client";
import { login } from "../actions/actions";
import { useActionState } from "react";

export default function LoginPage() {
  const [state, action, pending] = useActionState(login, undefined);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        action={action}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
          Admin Login
        </h2>

        {state?.error && (
          <p className="text-red-600 bg-red-100 p-2 rounded mb-4 text-sm">
            {state.error}
          </p>
        )}

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 text-gray-700 font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-md px-4 py-2 transition"
            
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block mb-1 text-gray-700 font-medium">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="w-full border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-md px-4 py-2 transition"
            
          />
        </div>

        <button
          type="submit"
          disabled={pending}
          className="w-full bg-blue-600 text-white font-semibold py-2.5 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
        >
          {pending ? "Logging in…" : "Log In"}
        </button>
      </form>
    </div>
  );
}
