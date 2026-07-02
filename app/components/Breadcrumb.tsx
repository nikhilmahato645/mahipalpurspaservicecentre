export default function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav
      style={{
        padding: "12px 24px",
        background: "rgba(201,168,76,0.04)",
        borderBottom: "1px solid rgba(201,168,76,0.1)",
        fontSize: "0.85rem",
      }}
      aria-label="Breadcrumb"
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", gap: "8px", flexWrap: "wrap" }}>
        <a href="/" style={{ color: "var(--gold)", textDecoration: "none" }}>
          🏠 Home
        </a>
        {items.map((item, index) => (
          <div key={index} style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <span style={{ color: "var(--muted)" }}>/</span>
            {item.href ? (
              <a href={item.href} style={{ color: "var(--cream)", textDecoration: "none" }}>
                {item.label}
              </a>
            ) : (
              <span style={{ color: "var(--muted)" }}>{item.label}</span>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
