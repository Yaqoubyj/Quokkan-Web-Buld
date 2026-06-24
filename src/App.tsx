import { useEffect, useState } from "react";
import { LangContext, type Lang, useLang, useT } from "./i18n";
import logoQ from "./assets/logo-q-brandmark.jpg";
import interiorLounge from "./assets/interior-lounge-seating.jpg";
import interiorRoastery from "./assets/interior-roastery-retail.jpg";
import quokkaCup from "./assets/croissant-espresso-table.jpg";
import espressoMarble from "./assets/espresso-ornate-cup.jpg";
import croissantCup from "./assets/hero-storefront-cup.jpg";
import cateringIllustration from "./assets/catering-cart-illustration.jpg";
import menuHot from "./assets/espresso-shot-overhead.jpg";
import menuCold from "./assets/drink-iced-matcha.jpg";
import menuFilter from "./assets/filter-coffee-pour.jpg";
import menuDessert from "./assets/dessert-pecan-cinnamon-roll.jpg";
import bagEthiopia from "./assets/bag-ethiopia-natural.jpg";
import bagColombia from "./assets/bag-colombia-natural.jpg";
import bagCostaRica from "./assets/bag-costarica-natural.jpg";
import bagSalvador from "./assets/bag-salvador.svg";

const WA = "https://wa.me/966531014213";
const IG = "https://instagram.com/quokka.sa";

export default function App() {
  const [lang, setLang] = useState<Lang>("en");
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <div className="min-h-screen bg-background text-foreground overflow-x-clip">
        <Nav />
        <Hero />
        <Marquee />
        <About />
        <Collection />
        <Catering />
        <Menu />
        <Branches />
        <Contact />
        <Footer />
      </div>
    </LangContext.Provider>
  );
}

function Nav() {
  const { lang, setLang } = useLang();
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  const links: [string, string][] = [
    ["#about", t.nav.about], ["#coffee", t.nav.coffee], ["#catering", t.nav.catering],
    ["#menu", t.nav.menu], ["#branches", t.nav.branches], ["#contact", t.nav.contact],
  ];
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : ""}`}>
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={logoQ} alt="Quokka" className="h-9 w-9 rounded-full object-cover" />
          <span className="font-display text-lg tracking-wide">QUOKKA</span>
        </a>
        <nav className="hidden lg:flex items-center gap-8 text-sm">
          {links.map(([h, l]) => (
            <a key={h} href={h} className="text-muted-foreground hover:text-foreground transition-colors">{l}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="text-xs tracking-[0.2em] uppercase border border-border rounded-full px-3 py-1.5 hover:bg-secondary transition-colors"
            aria-label="Switch language"
          >
            {lang === "en" ? "العربية" : "EN"}
          </button>
          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            <div className="w-5 h-px bg-foreground mb-1.5" />
            <div className="w-5 h-px bg-foreground" />
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container-x py-6 flex flex-col gap-4">
            {links.map(([h, l]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="text-base">{l}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const t = useT();
  return (
    <section id="top" className="relative min-h-[100svh] flex items-end pt-24 pb-12 md:pb-20">
      <img src={interiorLounge} alt="Quokka Interior" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-charcoal/40" />
      <div className="relative container-x w-full grid md:grid-cols-12 gap-8 items-end text-[oklch(0.985_0.006_80)]">
        <div className="md:col-span-8 fade-up">
          <div className="text-[11px] tracking-[0.35em] uppercase opacity-80 mb-6">{t.hero.eyebrow}</div>
          <h1 className="font-display text-[clamp(2.75rem,8vw,7rem)] leading-[0.95] text-balance">{t.hero.title}</h1>
          <p className="mt-6 max-w-xl text-base md:text-lg opacity-90 leading-relaxed text-balance">{t.hero.text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#menu" className="inline-flex items-center justify-center bg-[oklch(0.985_0.006_80)] text-charcoal rounded-full px-6 py-3 text-sm tracking-wider hover:opacity-90 transition">
              {t.hero.cta1}
            </a>
            <a href="#branches" className="inline-flex items-center justify-center border border-white/40 text-white rounded-full px-6 py-3 text-sm tracking-wider hover:bg-white/10 transition">
              {t.hero.cta2}
            </a>
          </div>
        </div>
        <div className="md:col-span-4 hidden md:flex justify-end">
          <div className="text-right text-xs tracking-[0.3em] uppercase opacity-80 fade-in delay-300">
            <div>Smile Like A</div>
            <div className="font-display text-2xl tracking-wider opacity-100 mt-1">Quokka</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const words = ["Chemix", "Slow Roasted", "Specialty Coffee", "Crafted With Intention", "Riyadh"];
  return (
    <div className="border-y border-border bg-secondary/40 py-5 overflow-hidden">
      <div className="flex gap-12 whitespace-nowrap" style={{ animation: "scroll 40s linear infinite" }}>
        {[...words, ...words, ...words].map((w, i) => (
          <span key={i} className="font-display text-xl text-muted-foreground tracking-wide">
            {w} <span className="text-rose mx-6">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  const t = useT();
  return (
    <section id="about" className="py-24 md:py-40 container-x">
      <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
        <div className="md:col-span-5 order-2 md:order-1">
          <div className="text-[11px] tracking-[0.35em] uppercase text-rose mb-5">{t.about.eyebrow}</div>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.02] text-balance">{t.about.title}</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-lg">{t.about.text}</p>
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
            {[
              [t.about.stat1, t.about.stat1l],
              [t.about.stat2, t.about.stat2l],
              [t.about.stat3, t.about.stat3l],
            ].map(([k, v]) => (
              <div key={k} className="border-t border-border pt-4">
                <div className="font-display text-lg">{k}</div>
                <div className="text-xs text-muted-foreground mt-1">{v}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-7 order-1 md:order-2 grid grid-cols-6 gap-3 md:gap-4">
          <div className="col-span-4 img-zoom rounded-sm">
            <img src={quokkaCup} alt="Quokka Coffee Cup" className="aspect-[4/5] w-full object-cover" />
          </div>
          <div className="col-span-2 flex flex-col gap-3 md:gap-4">
            <div className="img-zoom rounded-sm">
              <img src={espressoMarble} alt="Espresso" className="aspect-square w-full object-cover" />
            </div>
            <div className="img-zoom rounded-sm">
              <img src={croissantCup} alt="Croissant" className="aspect-square w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const products = [
  { name: { en: "Ethiopia Idido", ar: "إثيوبيا إيديدو" }, origin: { en: "Ethiopia", ar: "إثيوبيا" }, weight: "250g", price: 55, label: "Ethiopia Bag", image: bagEthiopia },
  { name: { en: "Colombia", ar: "كولومبيا" }, origin: { en: "Colombia", ar: "كولومبيا" }, weight: "250g", price: 55, label: "Colombia Bag", image: bagColombia },
  { name: { en: "Costa Rica", ar: "كوستاريكا" }, origin: { en: "Costa Rica", ar: "كوستاريكا" }, weight: "250g", price: 55, label: "Costa Rica Bag", image: bagCostaRica },
  { name: { en: "Salvador", ar: "السلفادور" }, origin: { en: "El Salvador", ar: "السلفادور" }, weight: "250g", price: 55, label: "Salvador Bag", image: bagSalvador },
];

function Collection() {
  const t = useT();
  const { lang } = useLang();
  return (
    <section id="coffee" className="py-24 md:py-32 bg-secondary/40">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="text-[11px] tracking-[0.35em] uppercase text-rose mb-4">{t.collection.eyebrow}</div>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.02]">{t.collection.title}</h2>
            <div className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mt-3">{t.collection.note}</div>
          </div>
          <p className="max-w-sm text-muted-foreground">{t.collection.text}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((p) => (
            <div key={p.name.en} className="group flex flex-col hover-rise">
              <div className="img-zoom bg-background aspect-[4/5] border border-border">
                <img src={p.image} alt={p.label} className="w-full h-full object-contain" />
              </div>
              <div className="pt-5 flex-1 flex flex-col">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl">{p.name[lang]}</h3>
                  <div className="text-sm text-muted-foreground">{p.price} {lang === "en" ? "SAR" : "ر.س"}</div>
                </div>
                <div className="mt-1 text-xs text-muted-foreground tracking-wider uppercase">{p.origin[lang]} · {p.weight}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Catering() {
  const t = useT();
  const cateringWA = "https://wa.me/966531014213?text=" + encodeURIComponent("مرحباً، أرغب بالاستفسار عن خدمة الكيترنق لدى قهوة كواكا.");
  return (
    <section id="catering" className="py-24 md:py-32 container-x">
      <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
        <div className="md:col-span-7 rounded-sm bg-[oklch(0.985_0.006_80)] p-6 md:p-10">
          <img src={cateringIllustration} alt="Catering Setup" className="w-full h-auto max-h-[520px] object-contain" />
        </div>
        <div className="md:col-span-5">
          <div className="text-[11px] tracking-[0.35em] uppercase text-rose mb-5">{t.catering.eyebrow}</div>
          <h2 className="font-display text-[clamp(1.85rem,4.2vw,3.4rem)] leading-[1.05] text-balance">{t.catering.title}</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">{t.catering.p1}</p>
          <p className="mt-3 text-muted-foreground leading-relaxed">{t.catering.p2}</p>
          <div className="mt-8">
            <div className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3">{t.catering.suitable}</div>
            <div className="flex flex-wrap gap-2">
              {t.catering.items.map((i) => (
                <span key={i} className="text-xs px-3 py-1.5 rounded-full border border-border bg-background">{i}</span>
              ))}
            </div>
          </div>
          <a href={cateringWA} target="_blank" rel="noreferrer"
             className="mt-10 inline-flex items-center bg-primary text-primary-foreground rounded-full px-7 py-3.5 text-sm tracking-[0.15em] uppercase hover:opacity-90 transition">
            {t.catering.cta}
          </a>
        </div>
      </div>
    </section>
  );
}

function Menu() {
  const t = useT();
  const { lang } = useLang();
  const items = [
    { cat: t.menu.cats[0], label: "Hot Coffee", image: menuHot, names: { en: ["Espresso", "Americano", "Flat White", "Cortado"], ar: ["إسبريسو", "أمريكانو", "فلات وايت", "كورتادو"] } },
    { cat: t.menu.cats[1], label: "Cold Drinks", image: menuCold, names: { en: ["Iced Latte", "Iced Matcha", "Iced Carcade", "Iced Spanish"], ar: ["لاتيه بارد", "ماتشا بارد", "كركديه بارد", "سبانش بارد"] } },
    { cat: t.menu.cats[2], label: "Filter Coffee", image: menuFilter, names: { en: ["V60", "Coffee Day", "Cold Brew", "Chemix"], ar: ["V60", "قهوة اليوم", "كولد برو", "كيمكس"] } },
    { cat: t.menu.cats[3], label: "Desserts", image: menuDessert, names: { en: ["Quokka Bites", "Cinamon", "Qchoc", "Qbarry"], ar: ["كواكا بايتس", "سينامون", "كيو تشوك", "كيو بيري"] } },
  ];
  return (
    <section id="menu" className="py-24 md:py-32 bg-secondary/40">
      <div className="container-x">
        <div className="max-w-2xl mb-14">
          <div className="text-[11px] tracking-[0.35em] uppercase text-rose mb-4">{t.menu.eyebrow}</div>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.02]">{t.menu.title}</h2>
          <p className="mt-4 text-muted-foreground">{t.menu.text}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {items.map((c) => (
            <article key={c.cat} className="bg-background border border-border p-6 md:p-8 flex gap-6 hover-rise">
              <div className="img-zoom w-28 h-28 md:w-36 md:h-36 shrink-0 rounded-sm">
                <img src={c.image} alt={c.label} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground">{c.cat}</div>
                <ul className="mt-3 space-y-2">
                  {c.names[lang].map((n) => (
                    <li key={n} className="flex items-baseline justify-between gap-3 text-sm">
                      <span className="font-display text-lg">{n}</span>
                      <span className="flex-1 mx-2 border-b border-dashed border-border/70" />
                      <span className="text-muted-foreground text-xs">—</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Branches() {
  const t = useT();
  const { lang } = useLang();
  const branches = [
    {
      name: { en: "Granada Branch", ar: "فرع غرناطة" },
      desc: { en: "A bright, arched-window space with long sunlight and warm wood. Ideal for slow mornings and quiet focus.", ar: "مساحة مضيئة بنوافذ مقوسة وأخشاب دافئة. مثالية للصباحات الهادئة والتركيز." },
      label: "Granada Branch",
      image: interiorRoastery,
      map: "https://maps.app.goo.gl/fBsTA2ewzGnkxK43A",
    },
    {
      name: { en: "Al Muruj Branch", ar: "فرع المروج" },
      desc: { en: "A sculpted central island lined with our coffee bags — a curated, lifestyle-led café experience.", ar: "جزيرة مركزية منحوتة محاطة بأكياس قهوتنا — تجربة مقهى راقية مدروسة." },
      label: "Al Muruj Branch",
      image: interiorLounge,
      map: "https://maps.app.goo.gl/zi8R5kqVEwKcySAW9",
    },
  ];
  return (
    <section id="branches" className="py-24 md:py-32 container-x">
      <div className="max-w-2xl mb-14">
        <div className="text-[11px] tracking-[0.35em] uppercase text-rose mb-4">{t.branches.eyebrow}</div>
        <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.02]">{t.branches.title}</h2>
        <p className="mt-4 text-muted-foreground">{t.branches.text}</p>
      </div>
      <div className="space-y-20 md:space-y-28">
        {branches.map((b, idx) => (
          <article key={b.name.en} className="grid md:grid-cols-12 gap-6 md:gap-10 items-center">
            <div className={`md:col-span-7 img-zoom rounded-sm ${idx % 2 ? "md:order-2" : ""}`}>
              <img src={b.image} alt={b.label} className="w-full aspect-[5/4] object-cover" />
            </div>
            <div className={`md:col-span-5 ${idx % 2 ? "md:order-1" : ""}`}>
              <h3 className="font-display text-3xl md:text-4xl">{b.name[lang]}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{b.desc[lang]}</p>
              <a href={b.map} target="_blank" rel="noreferrer"
                 className="mt-8 inline-flex items-center text-xs tracking-[0.2em] uppercase border border-foreground rounded-full px-5 py-3 hover:bg-foreground hover:text-background transition">
                {t.branches.open} →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const t = useT();
  const rows: [string, string, string][] = [
    [t.contact.general, "info@quokka.cafe", "mailto:info@quokka.cafe"],
    [t.contact.support, "support@quokka.cafe", "mailto:support@quokka.cafe"],
    [t.contact.catering, "catering@quokka.cafe", "mailto:catering@quokka.cafe"],
    [t.contact.whatsapp, "+966 53 101 4213", WA],
    [t.contact.instagram, "@quokka.sa", IG],
  ];
  return (
    <section id="contact" className="py-24 md:py-32 bg-walnut text-[oklch(0.97_0.012_75)]">
      <div className="container-x grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="text-[11px] tracking-[0.35em] uppercase text-rose mb-4">{t.contact.eyebrow}</div>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.02]">{t.contact.title}</h2>
          <img src={logoQ} alt="Quokka" className="mt-10 w-28 h-28 rounded-full object-cover opacity-90" />
        </div>
        <div className="md:col-span-7 divide-y divide-white/15 border-t border-white/15">
          {rows.map(([label, value, href]) => (
            <a key={label} href={href} target="_blank" rel="noreferrer"
               className="group flex items-center justify-between py-6 hover:opacity-80 transition">
              <span className="text-[11px] tracking-[0.3em] uppercase opacity-70">{label}</span>
              <span className="font-display text-xl md:text-2xl">{value} <span className="opacity-60 group-hover:translate-x-1 inline-block transition">→</span></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const t = useT();
  return (
    <footer className="bg-background border-t border-border">
      <div className="container-x py-16 grid md:grid-cols-3 gap-10 items-start">
        <div>
          <div className="flex items-center gap-3">
            <img src={logoQ} alt="Quokka" className="h-10 w-10 rounded-full object-cover" />
            <div>
              <div className="font-display text-lg tracking-wide">QUOKKA COFFEE ROASTERS</div>
              <div className="text-xs text-muted-foreground italic mt-0.5">{t.footer.tag}</div>
            </div>
          </div>
        </div>
        <div className="text-sm space-y-2">
          <a href={IG} target="_blank" rel="noreferrer" className="block text-muted-foreground hover:text-foreground">Instagram · @quokka.sa</a>
          <a href={WA} target="_blank" rel="noreferrer" className="block text-muted-foreground hover:text-foreground">WhatsApp · +966 53 101 4213</a>
          <a href="mailto:info@quokka.cafe" className="block text-muted-foreground hover:text-foreground">info@quokka.cafe</a>
        </div>
        <div className="text-xs text-muted-foreground md:text-right">{t.footer.rights}</div>
      </div>
    </footer>
  );
}
