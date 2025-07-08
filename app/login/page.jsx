"use client";
import { login } from "../actions/actions";
import { useActionState } from "react";

export default function LoginPage() {
  const [state, action, pending] = useActionState(login,undefined);

  return (
    <form action={action} className="max-w-md mt-4 mx-auto p-6 bg-white shadow rounded">
      {state?.error && <p className="text-red-600 mb-4">{state.error}</p>}
      <label>Email</label>
      <input name="email" type="email" className="w-full border p-2 rounded mb-4" />
      <label>Password</label>
      <input name="password" type="password" className="w-full border p-2 rounded mb-4" />
      <button
        type="submit"
        disabled={pending}
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {pending ? "Logging in…" : "Log In"}
      </button>
    </form>
  );
}
