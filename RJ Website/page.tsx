"use client";

import { useState, type MouseEvent } from "react";
import { Barlow, Barlow_Condensed } from "next/font/google";
import {
  BatteryCharging,
  Clock,
  CookingPot,
  Cog,
  Fan,
  Mail,
  MapPin,
  Menu,
  Phone,
  Plug,
  WashingMachine,
  Wind,
  X,
  type LucideIcon,
} from "lucide-react";

const body = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});
const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

/* ---------- Business details (edit here) ---------- */
const PHONE_DISPLAY = "0912 650 9072";
const PHONE_HREF = "tel:+639126509072";
const EMAIL = "rjelectricalrepairshop@gmail.com";
const ADDRESS = "19 Martyr's Street, Kalibo, Aklan";
const LANDMARK = "Near Kalibo Pilot Elementary School";
const HOURS = "Monday to Saturday, 8:00 AM – 6:00 PM";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("19 Martyr's Street, Kalibo, Aklan");
// TODO: replace with the shop's official Facebook Page URL
const FACEBOOK_URL = "https://www.facebook.com/";

const ACCENT = "#00D2FF";
const COPPER = "#FF6B35";

const NAV = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "parts", label: "Parts" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const SERVICES: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Electric Fan Repair",
    text: "Stand, wall, and table fans: motors, capacitors, switches, and blades.",
    icon: Fan,
  },
  {
    title: "Washing Machine Repair",
    text: "Motor, timer, and capacitor faults on twin-tub and top-load machines.",
    icon: WashingMachine,
  },
  {
    title: "Small Appliance Care",
    text: "Flat irons, rice cookers, and other everyday household appliances.",
    icon: CookingPot,
  },
];

const PARTS: { title: string; spec: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Electric Fan Capacitors",
    spec: "1.0 to 2.0 UF",
    text: "Start-up capacitors for stand, wall, and table fans.",
    icon: BatteryCharging,
  },
  {
    title: "Washing Machine Capacitors",
    spec: "3 to 14 UF",
    text: "Run capacitors for washer and spinner motors.",
    icon: BatteryCharging,
  },
  {
    title: "Power Cords & Plugs",
    spec: "Replacement sets",
    text: "Swap out worn or damaged cords and plugs.",
    icon: Plug,
  },
  {
    title: "Cooling Fans",
    spec: "Spare units",
    text: "Replacement cooling fans for appliances and electronics.",
    icon: Wind,
  },
];

/* ---------- Logo placeholder ---------- */
function Logo({
  id,
  className = "",
  idleSpin = false,
}: {
  id: string;
  className?: string;
  idleSpin?: boolean;
}) {
  const ringSpin = idleSpin
    ? "animate-spin"
    : "group-hover:animate-spin";
  return (
    <span
      className={`group relative inline-block aspect-square ${className}`}
      role="img"
      aria-label="RJ Electrical emblem"
    >
      {/* Outer ring with curved typography */}
      <svg
        viewBox="0 0 200 200"
        className={`absolute inset-0 h-full w-full ${ringSpin} [animation-duration:8s] motion-reduce:animate-none`}
        aria-hidden="true"
      >
        <defs>
          <path
            id={`${id}-arc`}
            d="M 100 100 m -76 0 a 76 76 0 1 1 152 0 a 76 76 0 1 1 -152 0"
          />
        </defs>
        <circle cx="100" cy="100" r="96" fill="none" stroke={ACCENT} strokeWidth="3" />
        <circle
          cx="100"
          cy="100"
          r="58"
          fill="none"
          stroke="#FFFFFF"
          strokeOpacity="0.25"
          strokeWidth="1.5"
          strokeDasharray="3 6"
        />
        <text
          fill="#FFFFFF"
          fontSize="15"
          fontWeight="700"
          letterSpacing="3.2"
        >
          <textPath href={`#${id}-arc`}>
            RJ ELECTRICAL • SUPPLIES &amp; REPAIR • KALIBO •
          </textPath>
        </text>
      </svg>
      {/* Three-blade fan */}
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <g transform="translate(100 100)" fill={ACCENT}>
          {[0, 120, 240].map((angle) => (
            <ellipse
              key={angle}
              cx="0"
              cy="-27"
              rx="14"
              ry="26"
              transform={`rotate(${angle})`}
              fillOpacity="0.9"
            />
          ))}
          <circle r="9" fill="#0F0F11" stroke="#FFFFFF" strokeWidth="3" />
        </g>
      </svg>
    </span>
  );
}

/* ---------- Page ---------- */
export default function Page() {
  const [open, setOpen] = useState(false);

  function goTo(e: MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault();
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const heading = "font-[family-name:var(--font-display)] font-bold tracking-tight";
  const focus =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00D2FF]";

  return (
    <div
      className={`${body.variable} ${display.variable} min-h-screen bg-[#0F0F11] font-[family-name:var(--font-body)] text-white antialiased`}
    >
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0F0F11]/90 backdrop-blur">
        <nav
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5"
          aria-label="Main"
        >
          <a
            href="#home"
            onClick={(e) => goTo(e, "home")}
            className={`flex items-center gap-3 ${focus}`}
          >
            <Logo id="nav" className="h-10 w-10" />
            <span className={`${heading} text-2xl`}>RJ Electrical</span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {NAV.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => goTo(e, item.id)}
                  className={`text-sm font-medium text-white/75 transition-colors hover:text-[#00D2FF] ${focus}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={PHONE_HREF}
              className={`inline-flex items-center gap-2 rounded-full bg-[#00D2FF] px-4 py-2 text-sm font-semibold text-[#0F0F11] transition-colors hover:bg-white ${focus}`}
            >
              <Phone size={16} aria-hidden="true" />
              Call Now
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className={`rounded-md p-2 text-white md:hidden ${focus}`}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {open && (
          <ul
            id="mobile-menu"
            className="border-t border-white/10 bg-[#0F0F11] px-5 py-3 md:hidden"
          >
            {NAV.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => goTo(e, item.id)}
                  className="block py-3 text-lg font-medium text-white/85 hover:text-[#00D2FF]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="scroll-mt-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h1 className={`${heading} text-5xl leading-[1.02] sm:text-6xl lg:text-7xl`}>
                Expert Appliance Repair &amp; Reliable Electrical Parts in Kalibo
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
                From specialized motor rewinding to everyday spare parts, we get
                your household electronics running like new.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#00D2FF] px-7 py-3.5 font-semibold text-[#0F0F11] transition-colors hover:bg-white ${focus}`}
                >
                  <MapPin size={18} aria-hidden="true" />
                  Get Directions
                </a>
                <a
                  href={PHONE_HREF}
                  className={`inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-semibold text-white transition-colors hover:border-[#00D2FF] hover:text-[#00D2FF] ${focus}`}
                >
                  <Phone size={18} aria-hidden="true" />
                  Call {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            {/* Logo placeholder area */}
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-6 rounded-full bg-[#00D2FF]/10 blur-3xl" aria-hidden="true" />
              <div className="relative flex aspect-square items-center justify-center rounded-3xl border border-dashed border-white/25 bg-white/[0.03] p-10">
                <Logo id="hero" className="w-full" idleSpin />
                <p className="absolute bottom-4 left-0 right-0 text-center text-sm text-white/50">
                  New emblem coming soon
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="scroll-mt-20 border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <h2 className={`${heading} text-4xl sm:text-5xl`}>Repair services</h2>
            <p className="mt-3 max-w-xl text-white/70">
              Bring in the appliance, and we will find the fault and fix it.
            </p>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {/* Core specialty */}
              <article className="rounded-3xl border border-[#FF6B35]/50 bg-gradient-to-br from-[#FF6B35]/15 to-transparent p-8 md:col-span-3 md:flex md:items-center md:gap-8">
                <div
                  className="mb-5 inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl md:mb-0"
                  style={{ backgroundColor: COPPER }}
                >
                  <Cog size={32} className="text-[#0F0F11]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className={`${heading} text-3xl sm:text-4xl`}>
                    Motor Rewinding
                  </h3>
                  <p className="mt-2 max-w-2xl text-white/75">
                    Our core specialty. When a motor burns out or loses power, we
                    rewind it with fresh copper coils so it can keep working
                    instead of being thrown away.
                  </p>
                </div>
              </article>

              {SERVICES.map(({ title, text, icon: Icon }) => (
                <article
                  key={title}
                  className="rounded-3xl border border-white/10 bg-[#0F0F11] p-7"
                >
                  <Icon size={30} color={ACCENT} aria-hidden="true" />
                  <h3 className={`${heading} mt-5 text-2xl`}>{title}</h3>
                  <p className="mt-2 text-white/70">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PARTS */}
        <section id="parts" className="scroll-mt-20 border-t border-white/10">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <h2 className={`${heading} text-4xl sm:text-5xl`}>Spare parts in stock</h2>
            <p className="mt-3 max-w-xl text-white/70">
              Walk in for common replacement parts. Call ahead to check
              availability.
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {PARTS.map(({ title, spec, text, icon: Icon }) => (
                <article
                  key={title}
                  className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-[#00D2FF]/60"
                >
                  <Icon size={28} color={ACCENT} aria-hidden="true" />
                  <h3 className={`${heading} mt-5 text-2xl leading-tight`}>{title}</h3>
                  <p className="mt-1 font-semibold text-[#00D2FF]">{spec}</p>
                  <p className="mt-3 text-sm text-white/70">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="scroll-mt-20 border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-2">
            <div>
              <h2 className={`${heading} text-4xl sm:text-5xl`}>
                A neighborhood repair shop in Kalibo
              </h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/75">
                RJ Electrical Supplies and Repair Shop fixes household
                appliances and sells the electrical parts you need to fix them
                yourself. Drop by during shop hours, or call first.
              </p>
            </div>

            {/* Business card */}
            <div className="rounded-3xl border border-white/15 bg-[#0F0F11] p-8 shadow-2xl shadow-black/50">
              <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                <Logo id="card" className="h-14 w-14" />
                <div>
                  <p className={`${heading} text-2xl`}>RJ Electrical</p>
                  <p className="text-sm text-white/60">Supplies and Repair Shop</p>
                </div>
              </div>
              <dl className="mt-6 space-y-5">
                <div className="flex gap-4">
                  <MapPin className="mt-1 shrink-0" size={20} color={ACCENT} aria-hidden="true" />
                  <div>
                    <dt className="text-sm text-white/55">Location</dt>
                    <dd>
                      {ADDRESS}
                      <span className="block text-sm text-white/60">{LANDMARK}</span>
                    </dd>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="mt-1 shrink-0" size={20} color={ACCENT} aria-hidden="true" />
                  <div>
                    <dt className="text-sm text-white/55">Hours</dt>
                    <dd>{HOURS}</dd>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="mt-1 shrink-0" size={20} color={ACCENT} aria-hidden="true" />
                  <div className="min-w-0">
                    <dt className="text-sm text-white/55">Email</dt>
                    <dd className="break-words">
                      <a
                        href={`mailto:${EMAIL}`}
                        className={`hover:text-[#00D2FF] ${focus}`}
                      >
                        {EMAIL}
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER & CONTACT */}
      <footer id="contact" className="scroll-mt-20 border-t border-white/10">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Logo id="foot" className="h-10 w-10" />
              <span className={`${heading} text-2xl`}>RJ Electrical</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-white/60">
              Appliance repair and electrical parts in Kalibo, Aklan.
            </p>
          </div>

          <div>
            <h2 className={`${heading} text-xl`}>Call us</h2>
            <a
              href={PHONE_HREF}
              className={`mt-3 inline-flex items-center gap-2 text-lg font-semibold text-[#00D2FF] hover:text-white ${focus}`}
            >
              <Phone size={18} aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
            <p className="mt-2 text-sm text-white/60">{HOURS}</p>
          </div>

          <div>
            <h2 className={`${heading} text-xl`}>Follow us</h2>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-3 inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-[#00D2FF] hover:text-[#00D2FF] ${focus}`}
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M13.5 22v-8.2h2.8l.5-3.3h-3.3V8.4c0-.9.4-1.7 1.8-1.7h1.6V3.8c-.3 0-1.3-.2-2.5-.2-2.6 0-4.3 1.6-4.3 4.4v2.5H7.3v3.3h2.8V22h3.4z" />
              </svg>
              Visit our Facebook Page
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 text-center text-xs text-white/45">
          © {new Date().getFullYear()} RJ Electrical Supplies and Repair Shop, Kalibo, Aklan
        </div>
      </footer>
    </div>
  );
}
