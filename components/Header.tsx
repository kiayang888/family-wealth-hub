const links = [
  { href: "/", label: "Dashboard" },
  { href: "/members", label: "Members" },
  { href: "/meetings", label: "Meetings" },
  { href: "/goals", label: "Goals" },
  { href: "/motivation", label: "Motivation" },
  { href: "/resources", label: "Resources" },
  { href: "/admin", label: "Admin" },
  { href: "/login", label: "Login" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a href="/" className="brand">
          <div className="brand-mark">FIG</div>
          <div className="brand-copy">
            <strong>Family Investment Group</strong>
            <span>Save, invest, and grow together</span>
          </div>
        </a>

        <nav className="nav" aria-label="Main Navigation">
          {links.map((link) => (
            <a key={link.href} className="nav-link" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
