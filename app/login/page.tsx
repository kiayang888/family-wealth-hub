"use client";

import { useState } from "react";
import { SectionTitle } from "@/components/SectionTitle";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
  const [email, setEmail] = useState("");

  async function signIn(e: React.FormEvent) {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: window.location.origin,
      },
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Check your email for the login link.");
    }
  }

  return (
    <div className="centered-shell">
      <div className="card auth-card stack-md">
        <SectionTitle
          title="Member Login"
          subtitle="Sign in to access the family savings portal."
        />

        <form className="stack-sm" onSubmit={signIn}>
          <label className="field">
            <span>Email</span>
            <input
              type="email"
              placeholder="kiayang888@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <button className="button primary" type="submit">
            Send Login Link
          </button>
        </form>

        <p className="muted">
          A secure login link will be sent to your email.
        </p>
      </div>
    </div>
  );
}