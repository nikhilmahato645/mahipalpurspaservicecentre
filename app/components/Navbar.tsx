"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Menu,
  X,
  Home as HomeIcon,
  Sparkles,
  Gem,
  Info,
  MessageCircle,
  PhoneCall,
  ChevronDown,
  Images,
  MapPin,
  Search,
} from "lucide-react";
import styles from "./Navbar.module.css";
import { SECTOR_REGISTRY } from "../data/sectorRegistry";

const DESKTOP_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/about/", label: "About Us" },
  { href: "/contact/", label: "Contact" },
];

const MAIN_LINKS = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/services/", label: "Services", icon: Sparkles },
  { href: "/pricing/", label: "Pricing", icon: Gem },
];

const SECONDARY_LINKS = [
  { href: "/gallery/", label: "Gallery", icon: Images },
  { href: "/about/", label: "About Us", icon: Info },
  { href: "/contact/", label: "Contact", icon: MessageCircle },
];

const LOCATIONS = [
  { href: "/locations/", label: "All Locations" },
  { href: "/spa-in-mahipalpur/", label: "Spa in Mahipalpur" },
  { href: "/russian-spa-mahipalpur/", label: "Russian Spa Mahipalpur" },
  { href: "/body-massage-mahipalpur/", label: "Body Massage Mahipalpur" },
  { href: "/spa-in-aerocity/", label: "Spa in Aerocity" },
  { href: "/russian-spa-aerocity/", label: "Russian Spa Aerocity" },
  { href: "/body-massage-aerocity/", label: "Body Massage Aerocity" },
  { href: "/spa-in-vasant-kunj/", label: "Spa in Vasant Kunj" },
  { href: "/body-massage-vasant-kunj/", label: "Body Massage Vasant Kunj" },
  { href: "/spa-in-dwarka/", label: "Spa in Dwarka" },
  { href: "/spa-in-karol-bagh/", label: "Spa in Karol Bagh" },
  { href: "/spa-in-delhi/", label: "Spa in Delhi" },
  { href: "/russian-banya-delhi/", label: "Russian Banya Delhi" },
  { href: "/couple-spa-delhi/", label: "Couples Spa Delhi" },
  { href: "/spa-in-gurugram/", label: "Spa in Gurugram" },
  ...SECTOR_REGISTRY.map((entry) => ({
    href: `/${entry.slug}/`,
    label: `Spa in ${entry.displayName}`,
  })),
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [locationQuery, setLocationQuery] = useState("");

  const closeDrawer = () => {
    setOpen(false);
    setLocationsOpen(false);
    setLocationQuery("");
  };

  const filteredLocations = useMemo(() => {
    const q = locationQuery.trim().toLowerCase();
    if (!q) return LOCATIONS;
    return LOCATIONS.filter((l) => l.label.toLowerCase().includes(q));
  }, [locationQuery]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeDrawer();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navAccent} />
        <a href="/" className={styles.logo}>
          <img src="/logo.svg" alt="Russian Spa Centre Logo" />
          <span className={styles.logoText}>
            Russian Spa Centre
            <span>Mahipalpur · Aerocity · Delhi NCR</span>
          </span>
        </a>

        <div className={styles.links}>
          {DESKTOP_LINKS.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <div className={styles.navRight}>
          <a href="tel:+918929979542" className={styles.bookBtn}>
            <PhoneCall size={14} strokeWidth={2.2} />
            Book Now
          </a>
          <button
            type="button"
            className={styles.menuToggle}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} strokeWidth={2} />
          </button>
        </div>
      </nav>

      <div
        className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      <aside className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`}>
        <div className={styles.drawerBody}>
          <div className={styles.drawerHeader}>
            <span className={styles.drawerBrand}>
              Russian Spa Centre
              <span>Mahipalpur · Aerocity</span>
            </span>
            <button
              type="button"
              className={styles.closeBtn}
              onClick={closeDrawer}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <div className={styles.drawerLabel}>Explore</div>
          <div className={styles.drawerList}>
          {MAIN_LINKS.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                className={styles.drawerItem}
                onClick={closeDrawer}
              >
                <span className={styles.drawerItemLeft}>
                  <Icon size={18} strokeWidth={1.8} />
                  <span>{item.label}</span>
                </span>
              </a>
            );
          })}

          <button
            type="button"
            className={`${styles.drawerItem} ${styles.drawerItemButton}`}
            onClick={() => setLocationsOpen((o) => !o)}
            aria-expanded={locationsOpen}
          >
            <span className={styles.drawerItemLeft}>
              <MapPin size={18} strokeWidth={1.8} />
              <span>Locations</span>
            </span>
            <ChevronDown
              size={16}
              strokeWidth={1.8}
              className={locationsOpen ? styles.chevronOpen : styles.chevron}
            />
          </button>

          <div className={`${styles.locationsPanel} ${locationsOpen ? styles.locationsPanelOpen : ""}`}>
            <div className={styles.locationsSearch}>
              <Search size={15} strokeWidth={2} />
              <input
                type="text"
                inputMode="search"
                placeholder="Search a location..."
                value={locationQuery}
                onChange={(e) => setLocationQuery(e.target.value)}
              />
            </div>
            <div className={styles.locationsList}>
              {filteredLocations.length === 0 && (
                <div className={styles.locationsEmpty}>No locations match &ldquo;{locationQuery}&rdquo;</div>
              )}
              {filteredLocations.map((loc) => (
                <a key={loc.href} href={loc.href} className={styles.locationItem} onClick={closeDrawer}>
                  <MapPin size={13} strokeWidth={1.8} />
                  {loc.label}
                </a>
              ))}
            </div>
          </div>

          {!locationsOpen && SECONDARY_LINKS.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                className={styles.drawerItem}
                onClick={closeDrawer}
              >
                <span className={styles.drawerItemLeft}>
                  <Icon size={18} strokeWidth={1.8} />
                  <span>{item.label}</span>
                </span>
              </a>
            );
          })}
          </div>
        </div>

        <div className={styles.drawerFooter}>
          <a href="tel:+918929979542" className={styles.drawerCta}>
            <PhoneCall size={16} /> Call &amp; Book Now
          </a>
          <a
            href="https://wa.me/918929979542?text=Hello%2C%20I%20want%20to%20book%20a%20spa%20appointment"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.drawerCtaOutline}
          >
            <MessageCircle size={16} /> WhatsApp Us
          </a>
        </div>
      </aside>
    </>
  );
}
