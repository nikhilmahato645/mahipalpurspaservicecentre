export default function PageFooter() {
  return (
    <footer style={{ padding: "60px", background: "var(--dark-3)", borderTop: "1px solid rgba(201,168,76,0.15)", marginTop: "60px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Internal Links Section */}
        <div style={{ marginBottom: "50px" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", marginBottom: "20px", color: "var(--gold)", fontWeight: 300 }}>
            Explore Our Services & Locations
          </h3>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px" }}>
            {/* Main Pages */}
            <div>
              <h4 style={{ fontSize: "0.85rem", fontWeight: 600, marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--muted)" }}>
                Main Pages
              </h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ marginBottom: "8px" }}><a href="/services/" style={{ color: "var(--cream)", textDecoration: "none", fontSize: "0.9rem" }}>💆 Our Services</a></li>
                <li style={{ marginBottom: "8px" }}><a href="/pricing/" style={{ color: "var(--cream)", textDecoration: "none", fontSize: "0.9rem" }}>💰 Pricing & Packages</a></li>
                <li style={{ marginBottom: "8px" }}><a href="/about/" style={{ color: "var(--cream)", textDecoration: "none", fontSize: "0.9rem" }}>ℹ️ About Us</a></li>
                <li style={{ marginBottom: "8px" }}><a href="/locations/" style={{ color: "var(--cream)", textDecoration: "none", fontSize: "0.9rem" }}>📍 Our Locations</a></li>
                <li><a href="/contact/" style={{ color: "var(--cream)", textDecoration: "none", fontSize: "0.9rem" }}>📞 Contact Us</a></li>
              </ul>
            </div>

            {/* Spa in City Pages */}
            <div>
              <h4 style={{ fontSize: "0.85rem", fontWeight: 600, marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--muted)" }}>
                Spa Locations
              </h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ marginBottom: "8px" }}><a href="/spa-in-mahipalpur/" style={{ color: "var(--cream)", textDecoration: "none", fontSize: "0.9rem" }}>🏢 Spa in Mahipalpur</a></li>
                <li style={{ marginBottom: "8px" }}><a href="/spa-in-aerocity/" style={{ color: "var(--cream)", textDecoration: "none", fontSize: "0.9rem" }}>✈️ Spa in Aerocity</a></li>
                <li style={{ marginBottom: "8px" }}><a href="/spa-in-vasant-kunj/" style={{ color: "var(--cream)", textDecoration: "none", fontSize: "0.9rem" }}>🏙️ Spa in Vasant Kunj</a></li>
                <li><a href="/spa-in-delhi/" style={{ color: "var(--cream)", textDecoration: "none", fontSize: "0.9rem" }}>🗺️ Spa in Delhi</a></li>
              </ul>
            </div>

            {/* Russian Spa & Body Massage */}
            <div>
              <h4 style={{ fontSize: "0.85rem", fontWeight: 600, marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--muted)" }}>
                Specific Treatments
              </h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ marginBottom: "8px" }}><a href="/russian-spa-mahipalpur/" style={{ color: "var(--cream)", textDecoration: "none", fontSize: "0.9rem" }}>🇷🇺 Russian Spa Mahipalpur</a></li>
                <li style={{ marginBottom: "8px" }}><a href="/russian-spa-aerocity/" style={{ color: "var(--cream)", textDecoration: "none", fontSize: "0.9rem" }}>🇷🇺 Russian Spa Aerocity</a></li>
                <li style={{ marginBottom: "8px" }}><a href="/russian-banya-delhi/" style={{ color: "var(--cream)", textDecoration: "none", fontSize: "0.9rem" }}>🛁 Russian Banya Delhi</a></li>
                <li><a href="/couple-spa-delhi/" style={{ color: "var(--cream)", textDecoration: "none", fontSize: "0.9rem" }}>💑 Couples Spa Package</a></li>
              </ul>
            </div>

            {/* Body Massage Services */}
            <div>
              <h4 style={{ fontSize: "0.85rem", fontWeight: 600, marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--muted)" }}>
                Body Massage
              </h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ marginBottom: "8px" }}><a href="/body-massage-mahipalpur/" style={{ color: "var(--cream)", textDecoration: "none", fontSize: "0.9rem" }}>💆 Massage in Mahipalpur</a></li>
                <li style={{ marginBottom: "8px" }}><a href="/body-massage-aerocity/" style={{ color: "var(--cream)", textDecoration: "none", fontSize: "0.9rem" }}>💆 Massage in Aerocity</a></li>
                <li style={{ marginBottom: "8px" }}><a href="/body-massage-vasant-kunj/" style={{ color: "var(--cream)", textDecoration: "none", fontSize: "0.9rem" }}>💆 Massage in Vasant Kunj</a></li>
                <li><a href="/gallery/" style={{ color: "var(--cream)", textDecoration: "none", fontSize: "0.9rem" }}>📸 Gallery & Facilities</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(201,168,76,0.15)", paddingTop: "30px", marginBottom: "30px" }}></div>

        {/* Footer Bottom */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
          <div>
            <p style={{ fontSize: "0.85rem", color: "var(--muted)", marginBottom: "8px" }}>
              <strong>Russian Spa Centre</strong> - Premium Luxury Spa & Wellness Services
            </p>
            <p style={{ fontSize: "0.8rem", color: "var(--muted)" }}>
              📍 Office No. 118, Defence Enclave, Mahipalpur, New Delhi 110037
            </p>
            <p style={{ fontSize: "0.8rem", color: "var(--muted)" }}>
              📞 +91 8929979542 | Open 24/7
            </p>
          </div>
          <div style={{ textAlign: "right" }}>
            <p style={{ fontSize: "0.8rem", color: "var(--muted)", marginBottom: "8px" }}>
              © 2026 Russian Spa Centre. All Rights Reserved.
            </p>
            <p style={{ fontSize: "0.75rem", color: "var(--muted)" }}>
              Providing premium spa & wellness services across Delhi NCR
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
