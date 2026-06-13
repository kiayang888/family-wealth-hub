import { SectionTitle } from "@/components/SectionTitle";

export default function LoginPage() {
  return (
    <div className="centered-shell">
      <div className="card auth-card stack-md">
        <SectionTitle
          title="Member Login"
          subtitle="Starter login screen for your private family website."
        />
        <form className="stack-sm">
          <label className="field">
            <span>Email</span>
            <input type="email" placeholder="familymember@email.com" />
          </label>

          <label className="field">
            <span>Password</span>
            <input type="password" placeholder="••••••••" />
          </label>

          <button className="button primary" type="submit">
            Sign In
          </button>
        </form>
        <p className="muted">
          This is a starter UI only. Connect this page to Supabase Auth, Clerk,
          or NextAuth later.
        </p>
      </div>
    </div>
  );
}
