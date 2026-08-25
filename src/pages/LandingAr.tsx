import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  Infinity as InfinityIcon,
  Flame,
  CalendarDays,
  Moon,
  Bell,
  BarChart3,
  CloudUpload,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Star,
  Quote,
  ClipboardList,
  Syringe,
  Activity,
  Stethoscope,
  ShieldCheck,
  ShieldPlus,
  Brain,
  Heart,
  ShieldAlert,
  Baby,
  Bone,
  Droplet,
  Zap,
  Sparkle,
  Dna,
  Pill,
  HeartPulse,
  Leaf,
  ChevronLeft,
  ChevronRight,
  Calendar,
  RefreshCw,
  Plus,
  X,
} from "lucide-react";
import heroBg from "@/assets/hero-bg-ar.jpg";
import heroBgMobile from "@/assets/hero-bg-mobile.jpg";
import shadowBg from "@/assets/shadow-bg.jpg";
import logo from "@/assets/logo.png";
import testimonialPoster from "@/assets/testimonial-poster.jpg";
import aliceThumbnail from "@/assets/alice-thumbnail.png";
import patient2 from "@/assets/patient-2.jpg";
import patient3 from "@/assets/patient-3.jpg";
import patient4 from "@/assets/patient-4.jpg";
import patient5 from "@/assets/patient-5.jpg";
import patient6 from "@/assets/patient-6.jpg";
import patient7 from "@/assets/patient-7.jpg";
import patient8 from "@/assets/patient-8.jpg";
import patient9 from "@/assets/patient-9.jpg";
import patient10 from "@/assets/patient-10.jpg";
import patient13 from "@/assets/patient-13.jpg";
import yaroslav from "@/assets/doctor_image/Yaroslav Myroshnykov.jpg";
import nino from "@/assets/doctor_image/Nino Kandelaki.jpg";
import mikhail from "@/assets/doctor_image/Mikhail Tsverava.jpg";
import eleonora from "@/assets/doctor_image/leonora Fiodorova.jpg";
import natia from "@/assets/doctor_image/Natia Alania.jpg";
import giorgi from "@/assets/doctor_image/Giorgi Archaia.jpg";
import lili from "@/assets/doctor_image/Lili Martashvili.jpg";
import mako from "@/assets/doctor_image/Mako Khachidze.jpg";
import mohammedMuwahed from "@/assets/doctor_image/Mohammed Muwahed.jpg";
import tbilisiClinic from "@/assets/tbilisi-clinic.jpg";
import tbilisiCity from "@/assets/tbilisi-city.jpg";
import tbilisiFood from "@/assets/tbilisi-food.jpg";
import tbilisiAirport from "@/assets/tbilisi-airport.jpg";
import { applyLocale, setMeta } from "@/lib/locale";

export default function LandingPageAr() {
  useEffect(() => {
    applyLocale("ar");
    setMeta({
      title: "ستيم بلس تبليسي — العلاج بالخلايا الجذعية في جورجيا",
      description:
        "ستيم بلس عيادة للعلاج بالخلايا الجذعية في تبليسي، جورجيا. علاجات لمرض السكري والحالات العصبية والتوحد وضعف الانتصاب ومكافحة الشيخوخة وأكثر. استشارة مجانية لمدة 30 دقيقة مع الدكتور ياروسلاف ميروشنيكوف.",
      ogDescription:
        "علاج عالي المستوى بالخلايا الجذعية في مستشفى ليدرميد في تبليسي، جورجيا. علاجات للحالات الطبية الخطيرة والتجديد المتقدم. استشارة مجانية متاحة.",
      twitterDescription:
        "علاج عالمي المستوى بالخلايا الجذعية في مستشفى ليدرميد في تبليسي، جورجيا. استشارة مجانية لمدة 30 دقيقة متاحة.",
      keywords:
        "العلاج بالخلايا الجذعية تبليسي، علاج الخلايا الجذعية جورجيا، الطب التجديدي تبليسي، الخلايا الجذعية لضعف الانتصاب، الخلايا الجذعية للتوحد، الخلايا الجذعية لمرض السكري، الخلايا الجذعية لمكافحة الشيخوخة، عيادة ستيم بلس",
      ogLocale: "ar_AR",
      canonical: "https://www.stemplusclinic.com/ar",
    });
  }, []);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <VideoTestimonial />
      <Features />
      <Reviews />
      <MedicalTeam />
      <Heritage />
      <WhyTbilisi />
      <HowItWorks />
      <FAQSection />
      <LocalAgent />
      <Footer />
    </div>
  );
}

/* ─── Video Testimonial Hub ─── */
type VideoItem = {
  id: string;
  src: string;
  poster: string;
  name: string;
  treatment: string;
  country: string;
  flag: string;
};

const VIDEO_TESTIMONIALS: VideoItem[] = [
  {
    id: "v2",
    src: "https://player.vimeo.com/video/1206931316",
    poster: aliceThumbnail,
    name: "Alice",
    treatment: "العلاج بالخلايا الجذعية",
    country: "Bournemouth, UK",
    flag: "🇬🇧",
  },
];

function VideoCard({
  item,
  onPlay,
  className = "",
  isMain = false,
}: {
  item: VideoItem;
  onPlay: (v: VideoItem) => void;
  className?: string;
  isMain?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={() => onPlay(item)}
      className={`group relative block w-full overflow-hidden rounded-2xl bg-black border border-black/[0.06] shadow-lg text-left ${className}`}
      aria-label={`تشغيل شهادة فيديو من ${item.name}`}
    >
      <img
        src={item.poster}
        alt={`${item.name} — ${item.treatment}`}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Play overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className={`flex items-center justify-center rounded-full shadow-2xl shadow-black/40 ring-1 ring-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 ${isMain ? "w-20 h-20" : "w-12 h-12"}`}
          style={{ backgroundColor: "#02C39A" }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="white"
            className={isMain ? "w-8 h-8 ml-1" : "w-5 h-5 ml-0.5"}
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </div>
      {/* Bottom typography — hidden on main card, shown on smaller cards */}
      {!isMain && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent p-4 sm:p-5">
          <p className="font-semibold text-white leading-tight text-base sm:text-lg">
            {item.name}
          </p>
          <p className="text-white/85 text-sm mt-0.5">
            {item.treatment}
          </p>
          <p className="text-white/70 flex items-center gap-1.5 text-sm mt-1">
            <span aria-hidden>{item.flag}</span>
            <span>{item.country}</span>
          </p>
        </div>
      )}
    </button>
  );
}

function VideoTestimonial() {
  const [active, setActive] = useState<VideoItem | null>(null);
  const [index, setIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  const goTo = (i: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.children[i] as HTMLElement | undefined;
    if (!card) return;
    el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
    setIndex(i);
  };

  const prev = () => goTo(Math.max(0, index - 1));
  const next = () => goTo(Math.min(VIDEO_TESTIMONIALS.length - 1, index + 1));

  return (
    <section id="video-testimonials" className="pt-24 pb-4 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            الشهادات
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground"
            style={{ lineHeight: "1.15" }}
          >
            استمع إلى تجارب مرضانا
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
          >
            {VIDEO_TESTIMONIALS.map((v) => (
              <div
                key={v.id}
                className="snap-start shrink-0 w-[90%] aspect-video"
              >
                <VideoCard item={v} onPlay={setActive} isMain className="h-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        {VIDEO_TESTIMONIALS.length > 1 && (
          <div className="flex justify-center gap-2 mt-5">
            {VIDEO_TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === index ? "bg-primary w-5" : "bg-slate-300 hover:bg-slate-400"}`}
                aria-label={`الانتقال إلى الفيديو ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md animate-in fade-in duration-200 p-4"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
            aria-label="إغلاق الفيديو"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-5 h-5"
            >
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>
          <div
            className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            {active.src.includes("vimeo.com") ? (
              <iframe
                key={active.id}
                src={`${active.src}?autoplay=1`}
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video
                key={active.id}
                className="w-full h-full object-contain bg-black"
                src={active.src}
                poster={active.poster}
                controls
                autoPlay
                playsInline
                preload="metadata"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}

/* ─── Heritage / About ─── */
const milestones = [
  {
    year: "1972",
    title: "تأسيس العلاج الخلوي",
    body: "يبدأ إرثنا العلمي في خاركيف، أوكرانيا، بتأسيس المعهد التاريخي لمشكلات علم الأحياء البردي والطب البردي بقيادة الأكاديمي ف. إ. غريشتشينكو، رائدًا الأبحاث العالمية حول سلامة الخلايا الجذعية وتطبيقاتها.",
  },
  {
    year: "2006",
    title: "التوسع السريري والقيادة",
    body: "استنادًا إلى هذه الإنجازات الأكاديمية التأسيسية، شغل الدكتور ياروسلاف ميروشنيكوف منصب المؤسس ورئيس شبكة فرع كييف البارزة، ثم انتقل ليعمل كباحث رئيسي في مركز تنسيق زراعة الأعضاء التابع لوزارة الصحة الأوكرانية.",
  },
  {
    year: "2022–2024",
    title: "الانتقال إلى أوروبا والتكيف",
    body: "بسبب الأعمال العسكرية في أوكرانيا، نجح فريقنا الطبي النخبوي في نقل العمليات السريرية دوليًا — حيث نفذ مشاريع علاج خلوي متخصصة عبر عيادات طبية متميزة في باتومي، جورجيا، وبلوفديف، بلغاريا.",
  },
  {
    year: "الوقت الحاضر",
    title: "إطلاق ستيم بلس تبليسي",
    body: "اليوم، يجتمع هذا التعاون الجورجي-الأوكراني المثمر بشكل دائم في قلب جورجيا. بقيادة الدكتور ميروشنيكوف، يعمل طاقمنا حصريًا من مستشفى ليدرميد الحديث متعدد التخصصات في تبليسي، مستخدمين أحدث المعدات التشخيصية والعلاجية المتوفرة في الطب التجديدي الحديث.",
  },
];

function Heritage() {
  return (
    <section id="heritage" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center lg:text-right mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#FDAA3E] mb-3">
            إرثنا
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 max-w-3xl lg:mr-0 lg:ml-auto"
            style={{ lineHeight: "1.1" }}
          >
            إرث ستيم بلس:
            <br />
            جسر بين عقود من علوم الخلايا
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Credo (appears on the right in RTL) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="relative">
              <span className="absolute -right-3 top-0 h-full w-[3px] bg-[#FDAA3E] rounded-full hidden lg:block" />
              <p
                className="text-xl sm:text-2xl font-medium text-slate-900 leading-relaxed lg:pr-6"
                style={{ textWrap: "pretty" }}
              >
                ستيم بلس ليس مجرد مركز علاجي حديث؛ بل هو ثمرة أكثر من{" "}
                <span className="text-[#FDAA3E] font-semibold">
                  50 عامًا من الأبحاث الرائدة
                </span>{" "}
                في علم الأحياء البردي والطب الخلوي.
              </p>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed lg:pr-6">
                من خلال الجمع بين الإنجازات العلمية الأوكرانية التاريخية وبيئة
                مستشفى متعدد التخصصات وحديث في تبليسي، جورجيا، نوفر للمرضى
                بوابة لا مثيل لها للتعافي التجديدي النخبوي القائم على الأدلة.
              </p>
            </div>
          </div>

          {/* Timeline (appears on the left in RTL) */}
          <div className="lg:col-span-7 relative">
            <div className="absolute right-[11px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#FDAA3E]/40 via-[#FDAA3E]/60 to-[#FDAA3E]/20" />
            <ol className="space-y-10">
              {milestones.map((m) => (
                <li key={m.year} className="relative pr-10">
                  <span className="absolute right-0 top-1.5 w-6 h-6 rounded-full bg-[#FDAA3E] ring-4 ring-white shadow-md shadow-[#FDAA3E]/30 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  </span>
                  <p className="text-sm font-bold uppercase tracking-widest text-[#FDAA3E] mb-1">
                    {m.year}
                  </p>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 leading-snug">
                    {m.title}
                  </h3>
                  <p className="text-[15px] text-slate-600 leading-relaxed">
                    {m.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

const NAV_LINKS = [
  { label: "الشهادات", href: "#video-testimonials" },
  { label: "العلاجات", href: "#treatments" },
  { label: "الفريق الطبي", href: "#medical-team" },
  { label: "الأسئلة الشائعة", href: "#faq" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.documentElement.style.scrollBehavior = "smooth";
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) =>
      document.querySelector(l.href)
    ).filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveHref(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
    <header className="sticky top-0 left-0 right-0 z-50 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800/40">
      <nav className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
        <Link to="/ar" className="flex items-center gap-2.5 shrink-0">
          <img
            src={logo}
            alt="Continuum"
            className="h-[52px] w-auto object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-9 text-base font-semibold tracking-wide text-slate-200">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`transition-colors duration-200 hover:text-[#00A896] ${
                activeHref === l.href ? "text-[#00A896]" : ""
              }`}
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/"
            className="text-sm font-semibold border border-slate-700 rounded-full px-3 py-1 text-slate-300 transition-colors duration-200 hover:text-[#00A896] hover:border-[#00A896]"
          >
            EN
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="فتح القائمة"
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-white hover:bg-white/10 transition-colors"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          </button>
        </div>
      </nav>
    </header>

    {/* Mobile drawer */}
    <div
      className={`md:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
        <div
          className="absolute inset-0 bg-black/75"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute top-0 left-0 h-full w-[82%] max-w-sm backdrop-blur-md border-r border-slate-800/60 shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{ backgroundColor: "rgba(2, 6, 23, 0.5)" }}
        >
          <div className="flex items-center justify-end h-16 px-5 border-b border-slate-800/60">
            <button
              type="button"
              aria-label="إغلاق القائمة"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-white hover:bg-white/10 transition-colors"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col px-6 py-8 gap-2">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-bold tracking-tight text-white py-3 drop-shadow-[0_2px_6px_rgba(0,0,0,0.75)] hover:text-[#00A896] transition-colors"
                style={{ textShadow: "0 2px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.8)" }}
              >
                {l.label}
              </a>
            ))}
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="mt-4 pt-4 border-t border-slate-700/60 text-lg font-semibold text-slate-300 drop-shadow-[0_2px_6px_rgba(0,0,0,0.75)] hover:text-[#00A896] transition-colors"
            >
              English (EN)
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}

/* ─── Hero (dark, full-bleed, with navbar) ─── */
function Hero() {
  return (
    <>
      <section
        className="relative pb-24 pt-0 lg:pb-32 lg:pt-8 xl:pb-40 xl:pt-12"
        style={{ background: "#050d0a" }}
      >
        {/* Background images — desktop and mobile */}
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="hidden sm:block absolute inset-0 w-full h-full object-cover object-right pointer-events-none select-none"
          aria-hidden="true"
        />
        <img
          src={heroBgMobile}
          alt=""
          width={1080}
          height={1920}
          className="block sm:hidden absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
          aria-hidden="true"
        />
        {/* Right-side gradient for text legibility (RTL) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(to left, rgba(5,13,10,0.5), rgba(5,13,10,0.13), transparent)`,
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(to bottom, rgba(0,0,0,0.26), transparent, rgba(5,13,10,0))`,
          }}
        />

        {/* Hero content — left aligned */}
        <div className="relative z-10 max-w-5xl mx-auto px-5 pt-8 sm:pt-24 pb-12 flex flex-col sm:block min-h-[85vh] sm:min-h-0">
          <div className="w-full sm:max-w-[45%] sm:ml-auto flex flex-col flex-1 sm:block">
            {/* H1 + subheadline — always together at top */}
            <div>
              <ScrollReveal delay={80}>
                <h1
                  className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white text-right"
                  style={{ lineHeight: "1.08" }}
                >
                  علاج بالخلايا الجذعية<br className="block sm:hidden" /> يحقق نتائج فعلية
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={160}>
                <p
                  className="mt-6 text-lg text-white text-right"
                  style={{ textWrap: "pretty", lineHeight: "1.6" }}
                >
                  نجمع بين 50 عامًا من علوم الخلايا والرعاية الطبية النخبوية — لعلاج الحالات الخطيرة وتحقيق حيوية طويلة الأمد.
                </p>
              </ScrollReveal>
            </div>

            {/* Trust strip — pushed to bottom on mobile */}
            <div className="mt-auto sm:mt-10">
              <ScrollReveal delay={240}>
                <div className="flex flex-col gap-3">
                  {[
                    "أكثر من 50 عامًا من الأبحاث الخلوية",
                    "مواد بيولوجية معتمدة وفق معايير GMP",
                    "التحقق من النتائج بناءً على الأدلة العلمية",
                  ].map((item) => (
                    <span key={item} className="flex items-center gap-2 text-base text-white/90 leading-none">
                      <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: "#02C39A" }} />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ─── Features ─── */
const features = [
  {
    icon: Flame,
    title: "Streak tracking",
    desc: "Watch your momentum build day by day. Never break the chain.",
  },
  {
    icon: CalendarDays,
    title: "Calendar heatmap",
    desc: "See your consistency at a glance with a beautiful 30-day view.",
  },
  {
    icon: BarChart3,
    title: "Smart insights",
    desc: "Current streak, longest streak, completion rate — all the stats that matter.",
  },
  {
    icon: Bell,
    title: "Gentle reminders",
    desc: "Set custom reminder times so you never forget your daily rituals.",
  },
  {
    icon: Moon,
    title: "Dark mode",
    desc: "Easy on the eyes, day or night. Follows your system or your choice.",
  },
  {
    icon: CloudUpload,
    title: "Cloud sync",
    desc: "Sign in to sync your habits across devices. Your data, always safe.",
  },
];

const treatCards = [
  {
    title: "ضعف الانتصاب والتعافي البولي",
    desc: "علاجات خلوية متقدمة تستهدف استعادة سلامة الأوعية الدموية، وتحسين تدفق الدم، وتحسين وظيفة الصحة الجنسية.",
    Icon: ShieldCheck,
    color: "#03045E",
  },
  {
    title: "الأعصاب والتعافي من السكتة الدماغية",
    desc: "بروتوكولات خلوية مصممة للدعم العصبي الهيكلي، وتحسين الإدراك، وإعادة التأهيل بعد السكتة الدماغية.",
    Icon: Brain,
    color: "#03045E",
  },
  {
    title: "بروتوكولات طيف التوحد",
    desc: "توجيه علاجي حيوي متخصص يركز على الدعم العصبي التطوري للأطفال وتحسين الخلايا في مرحلة الطفولة.",
    Icon: Activity,
    color: "#02C39A",
  },
  {
    title: "بروتوكولات المناعة الذاتية والتجديد الجهازي",
    desc: "علاجات مستهدفة لتعديل المناعة والتعافي بعد الصدمات لمعالجة الالتهابات المعقدة، ومرض كرون، وإصلاح الأنسجة الشامل.",
    Icon: ShieldAlert,
    color: "#00A896",
  },
  {
    title: "التجديد الخلوي وطول العمر",
    desc: "بروتوكولات متقدمة لتجديد الأنسجة ومكافحة الشيخوخة الجهازية مصممة خصيصًا للسياح الصحيين الدوليين.",
    Icon: Heart,
    color: "#02C39A",
  },
  {
    title: "السكري وإصلاح التمثيل الغذائي",
    desc: "توجيه أيضي شامل يركز على التنظيم المتقدم لمستوى الجلوكوز والدعم الغدد الصماء المنهجي.",
    Icon: RefreshCw,
    color: "#03045E",
  },
  {
    title: "تجديد العمود الفقري والمفاصل",
    desc: "العلاج بمواد حيوية متقدمة يهدف إلى استعادة حركة المفاصل ودعم التعافي المعقد للعمود الفقري.",
    Icon: Flame,
    color: "#00A896",
  },
];

function Features() {
  return (
    <section id="treatments" className="pt-12 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <ScrollReveal>
          <div className="mb-14 max-w-3xl">
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight text-[#03045E]"
              style={{ lineHeight: "1.15" }}
            >
              ما الذي نعالجه
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              علاجات تجديدية لتحسين الخلايا، والتعافي من الحالات المزمنة، والحيوية الوظيفية.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {treatCards.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 60}>
              <div className="group relative h-full rounded-2xl border border-slate-200/80 bg-white p-7 pb-14 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-100/50">
                <div className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center mb-5">
                  <c.Icon className="w-5 h-5" style={{ color: c.color }} />
                </div>
                <h3 className="text-lg font-semibold text-[#03045E] tracking-tight mb-2">
                  {c.title}
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  {c.desc}
                </p>
                <span className="absolute bottom-5 left-6 text-sm font-medium text-slate-400 transition-all duration-300 group-hover:text-[#02C39A] group-hover:-translate-x-1">
                  اعرف المزيد ←
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 5-Day Treatment Process Timeline ─── */
const treatmentDays = [
  {
    day: "اليوم 1",
    icon: ClipboardList,
    title: "التشخيص الشامل والاستقبال",
    points: [
      "استشارة طبية متعددة التخصصات ورسم تفصيلي للتاريخ الطبي",
      "سحب دم تشخيصي أساسي وتصوير بالموجات فوق الصوتية مستهدف",
      "صياغة خطة علاجية خلوية فردية تتناسب مع مؤشرات المريض",
    ],
  },
  {
    day: "اليوم 2",
    icon: Syringe,
    title: "مرحلة التسريب المخبري الأولي",
    points: [
      "بدأ العلاج الأساسي المعتمد مخبريًا للخلايا الجذعية الجنينية والإكسوسومات (يستغرق 3-4 ساعات)",
      "إعطاء ببتيدات تنظيمية متخصصة لاستهداف وتحسين وظيفة التمثيل الغذائي",
      "تنفيذ بروتوكولات حيوية مطابقة أساسية",
    ],
  },
  {
    day: "اليوم 3",
    icon: Sparkles,
    title: "الإعطاء الثانوي والتجميل المستهدف",
    points: [
      "إجراءات تعزيز ثانوية مستهدفة بالخلايا والإكسوسومات",
      "دمج اختياري لحقن الخلايا التجميلية الموضعية أو علاجات الأنسجة",
      "علاج تدليك طبي اختياري لتعظيم الامتصاص الدوري الشامل",
    ],
  },
  {
    day: "اليوم 4",
    icon: Activity,
    title: "التقييم الديناميكي ورسم خريطة الحساسية",
    points: [
      "تقييم شامل للتغيرات الديناميكية المبكرة في إشارات الجهاز العصبي",
      "اختبار دقيق لقياس الإحساس بالاهتزاز لرسم خريطة التغيرات في التوصيل العصبي والحساسية الموضعية",
      "التقاط بيانات سريرية دقيقة لمقارنتها بالمؤشرات الأساسية",
    ],
  },
  {
    day: "اليوم 5",
    icon: ShieldCheck,
    title: "ملخص الخروج وتخطيط معالم المتابعة",
    points: [
      "تقييم نهائي من فريق طبي متعدد التخصصات وملخص التعافي",
      "صياغة وصفة طبية للرعاية المنزلية الداعمة طويلة الأمد، أو الببتيدات، أو الأدوات الحيوية المطابقة",
      "تخطيط منظم لنقاط المراقبة عن بعد بعد الخروج ومعالم المتابعة",
    ],
  },
];

function HowItWorks() {
  return (
    <section id="process" className="py-24 bg-white border-y border-border/30">
      <div className="max-w-6xl mx-auto px-5">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#FDAA3E] mb-3">
              عملية العلاج
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900"
              style={{ lineHeight: "1.15" }}
            >
              خمس خطوات نحو تعافيك
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              بروتوكول سريري دقيق مدته 5 أيام — مصمم لتحقيق تجديد قابل للقياس وتعافٍ دائم.
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop: horizontal pipeline */}
        <div className="hidden lg:block relative">
          {/* Connector line */}
          <div className="absolute top-7 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#FDAA3E]/30 via-[#FDAA3E] to-[#FDAA3E]/30" />
          <div className="grid grid-cols-5 gap-5 relative">
            {treatmentDays.map((d, i) => (
              <ScrollReveal key={d.day} delay={i * 90}>
                <div className="flex flex-col items-center">
                  {/* Day marker */}
                  <div className="relative z-10 w-14 h-14 rounded-full bg-[#FDAA3E] text-white flex items-center justify-center shadow-lg shadow-[#FDAA3E]/30 ring-4 ring-white mb-5">
                    <d.icon className="w-6 h-6" strokeWidth={2.25} />
                  </div>
                  <div className="w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-[#FDAA3E]/40 transition-all duration-300 h-full">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-[#FDAA3E] mb-1.5">
                      {d.day}
                    </p>
                    <h3 className="font-semibold text-slate-900 text-lg mb-3 leading-snug">
                      {d.title}
                    </h3>
                    <ul className="space-y-2">
                      {d.points.map((p, j) => (
                        <li
                          key={j}
                          className="flex gap-2 text-[13px] text-slate-600 leading-relaxed"
                        >
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-[#FDAA3E] shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet: vertical timeline */}
        <div className="lg:hidden relative space-y-6">
          <div className="absolute right-7 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#FDAA3E]/30 via-[#FDAA3E] to-[#FDAA3E]/30" />
          {treatmentDays.map((d, i) => (
            <ScrollReveal key={d.day} delay={i * 70}>
              <div className="relative flex gap-5 items-start">
                <div className="relative z-10 w-14 h-14 rounded-full bg-[#FDAA3E] text-white flex items-center justify-center shadow-lg shadow-[#FDAA3E]/30 ring-4 ring-white shrink-0">
                  <d.icon className="w-6 h-6" strokeWidth={2.25} />
                </div>
                <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#FDAA3E] mb-1.5">
                    {d.day}
                  </p>
                  <h3 className="font-semibold text-slate-900 text-lg mb-3 leading-snug">
                    {d.title}
                  </h3>
                  <ul className="space-y-2">
                    {d.points.map((p, j) => (
                      <li
                        key={j}
                        className="flex gap-2 text-[13px] text-slate-600 leading-relaxed"
                      >
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-[#FDAA3E] shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Clinical Success Stories Carousel ─── */
const successStories = [
  {
    kind: "image" as const,
    image: patient10,
    badge: "استقرار وتعافٍ عصبي",
    text: "أقدّر بشدة الشفافية العلاجية المطلقة والنهج الشامل الذي قدمه الطاقم الطبي. تم شرح كل إجراء وخطوة وتحقق تشخيصي لي بوضوح تام. شعرت بفوائد هيكلية ملحوظة وارتفاع في الطاقة خلال 4 أيام فقط من الرعاية الخلوية.",
    author: "مريضة",
    location: "أوروبا الشرقية",
    flag: "🇪🇺",
  },
  {
    kind: "image" as const,
    image: patient2,
    badge: "إعادة التأهيل العصبي للتوحد لدى الأطفال",
    text: "سافرنا من العين لعلاج التوحد لدى ابني محمد. تعاملت العيادة مع كل شيء بسلاسة، من الوصول إلى المطار وحتى النقل اليومي. خلال برنامج تسريب خلوي مستهدف لمدة 3 أيام، شهدنا اختراقات سلوكية فورية — لقد اختفى اضطراب النوم الشديد لدى محمد تمامًا، وهو الآن ينام بعمق وهدوء.",
    author: "والد محمد",
    location: "الإمارات العربية المتحدة",
    flag: "🇦🇪",
  },
  {
    kind: "image" as const,
    image: patient3,
    badge: "التعافي من الشلل النصفي بعد السكتة الدماغية",
    text: "منذ ثلاث سنوات ونصف، تسببت لي سكتة دماغية بشلل نصفي شديد وشلل حركي في نصف جسدي. بعد وصولي إلى ستيم بلس تبليسي، تلقيت تسريبات مستهدفة وريدية وداخل القراب وعبر الأنف من الخلايا الجذعية الجنينية والمشيمة. كانت النتائج السريرية عميقة — أشهد استعادة تدريجية للتحكم الحركي الجسدي والإحساس اللمسي.",
    author: "كامل كامشاد",
    location: "العراق",
    flag: "🇮🇶",
  },
  {
    kind: "image" as const,
    image: patient4,
    badge: "بروتوكول مرض كرون المزمن",
    text: "بصفتي مريضًا بمرض كرون منذ أكثر من 20 عامًا، أمضيت السنوات الخمس الماضية في عذاب مطلق، وخضعت لعمليتين جراحيتين فاشلتين. بعد أن أوصاني صديق بهذا الفريق، سافرت إلى العيادة للحصول على علاج متخصص بالخلايا الجذعية. خلال الأيام الخمسة الأولى فقط من رعايتي البيولوجية الشخصية، بدأ ألمي الموضعي في التراجع بشكل كبير وارتفعت مستويات طاقتي الجسدية الأساسية.",
    author: "مصطفى",
    location: "مريض كرون المزمن",
    flag: "🌍",
  },
  {
    kind: "image" as const,
    image: patient5,
    badge: "التجديد الجهازي متعدد الأهداف",
    text: "أتيت إلى تبليسي لعلاج متعدد الأهداف يركز على مكافحة الشيخوخة الجهازية والتجديد. شرح الطاقم الطبي كل إجراء تشخيصي بشفافية تامة، مما أزال كل قلقي. خلال خطة علاج مخصصة لمدة 5 أيام شملت وجهي ورقبتي وبطني، ارتفعت حيويتي الجسدية بشكل كبير، وبدت بشرتي متجددة بشكل ملحوظ، واختفى ألم ظهري وخصري المزمن تمامًا.",
    author: "مريض دولي",
    location: "الصين",
    flag: "🇨🇳",
  },
  {
    kind: "image" as const,
    image: patient6,
    badge: "التطور الإدراكي لطيف التوحد",
    text: "هذه هي المرة الثانية التي نثق فيها بهذا الفريق الطبي النخبوي لإعادة التأهيل العصبي لابني سيف المصاب بالتوحد. العلاج الخلوي المخصص، إلى جانب بيئة المستشفى المتعددة التخصصات في تبليسي المنظمة بشكل استثنائي والنظيفة والداعمة بعمق، يمنحنا ثقة هائلة في تقدمه الإدراكي المستمر.",
    author: "والد سيف",
    location: "المملكة العربية السعودية",
    flag: "🇸🇦",
  },
  {
    kind: "image" as const,
    image: patient7,
    badge: "إصلاح الأعضاء المزمن وأنظمة التمثيل الغذائي",
    text: "عمل التنسيق الطبي للعيادة رائع وذو مصداقية عالية. لقد كنت أتابع هذا الفريق الطبي بالتحديد منذ ممارسته الأولية في أوكرانيا، والآن في تبليسي، تنفيذهم لا تشوبه شائبة. لكل من يبحث عن حلول متطورة للأعضاء الداخلية المعقدة أو الحالات الأيضية المتقدمة، يمكنني التأكيد على أن بروتوكولاتهم نخبوية.",
    author: "مراجع موثّق للعيادة",
    location: "منطقة الخليج",
    flag: "🇦🇪",
  },
  {
    kind: "image" as const,
    image: patient8,
    badge: "مكافحة الشيخوخة الجهازية وتنشيط الخلايا",
    text: "سافرت من مرسين لخطة علاج خلوي متعددة الأيام لمكافحة الشيخوخة وتنشيط النظام الكلي. خلال 6 إلى 7 أيام من الرعاية الخلوية الدقيقة تحت إشراف الدكتور ياروسلاف، أشعر بتحول كامل. أعاني من ارتفاع هائل في الطاقة الجسدية، وتجدد شبابي للبشرة، وتحسين جهازي كامل. التنفيذ السريري هنا مثالي.",
    author: "مريض مكافحة الشيخوخة",
    location: "تركيا",
    flag: "🇹🇷",
  },
  {
    kind: "image" as const,
    image: patient9,
    badge: "التعافي المنسق لطيف التوحد",
    text: "الرعاية والوضوح المطلق لعملية الاستشارة هنا رائعان. منذ لحظة وصولنا إلى المطار، تعامل فريق التنسيق مع كل التفاصيل اللوجستية بدعم لا يصدق. هذه الرعاية الشاملة منحتنا أملاً وأمانًا هائلين فيما يتعلق بخطط تتبع الإدراك والتواصل الاجتماعي المستمرة لابننا الصغير.",
    author: "والد المريض",
    location: "الإمارات العربية المتحدة",
    flag: "🇦🇪",
  },
  {
    kind: "graphic" as const,
    graphic: {
      bg: "#03045E",
      title: "-60%",
      subtitle: "انخفاض الجلوكوز بحلول اليوم 2",
      titleColor: "#FDAA3E",
    },
    badge: "بروتوكول السكري من النوع 2",
    text: "كافحت للسيطرة على مرض السكري من النوع 2 بجرعات عالية من الأنسولين والحبوب لمدة 14 عامًا. بعد برنامج مكثف مخصص لمدة 5 أيام من الخلايا الجذعية الجنينية والإكسوسومات تحت إشراف الدكتور ياروسلاف، انخفض مستوى الجلوكوز في دمي بشكل ملحوظ بنسبة 60% بحلول اليوم الثاني. وبحلول اليوم الخامس، انخفض تنميل ساقي وألم العصب الوركي الشديد بنسبة 90% تقريبًا.",
    author: "فواز",
    location: "الكويت",
    flag: "🌍",
  },

  {
    kind: "graphic" as const,
    graphic: { bg: "#02C39A", icon: Bone, label: "استعادة الحركة" },
    badge: "إعادة تأهيل القرص الفقري والعصب الحركي",
    text: "عانيت من فتق قرص فقري شديد وألم عصبي موضعي منتشر قيّد حركتي. أدت خطة العلاج المستهدفة بالخلايا والإكسوسومات إلى القضاء الكامل على التهاب المفاصل الموضعي وسرّعت تعافيي دون أي مخاطر جراحية. لقد استعدت حركتي الجسدية وراحتي بشكل كامل.",
    author: "مريض عظام",
    location: "منطقة الخليج",
    flag: "🇦🇪",
  },
  {
    kind: "graphic" as const,
    graphic: { bg: "#03045E", icon: Dna, label: "تجديد المفاصل" },
    badge: "إصلاح الأنسجة المعقدة والعظام",
    text: "الطاقة الإيجابية والاهتمام والدعم المستمر من منسقي العيادة جعلوا علاجي مريحًا للغاية. كل عضو من أعضاء الطاقم محترف للغاية، مما يضمن عملية علاجية لا تشوبها شائبة أعادت تنشيط حركة مفاصلي وقدرتي الجسدية العامة تمامًا.",
    author: "مريض دولي",
    location: "الشرق الأوسط",
    flag: "🌍",
  },
  {
    kind: "image" as const,
    image: patient13,
    badge: "التعويض الأيضي والحيوية",
    text: "كانت التغيرات الجسدية الديناميكية وتحسين الطاقة التي شهدتها بحلول اليوم الخامس مذهلة. أدى هذا البروتوكول الخلوي الجنيني متعدد القدرات إلى استعادة مستويات نشاطي البدني بالكامل، وموازنة مؤشراتي الأيضية، وتوفير جودة نوم عميقة ومريحة لم أحظَ بها منذ سنوات.",
    author: "سائح صحي",
    location: "المملكة العربية السعودية",
    flag: "🇸🇦",
  },
  {
    kind: "graphic" as const,
    graphic: { bg: "#00A896", icon: ShieldPlus, label: "التجديد الجهازي" },
    badge: "التجديد الجهازي بعد الصدمة",
    text: "تحالف طبي متطور للغاية. أدى الجمع بين خلايا Muse الجنينية المتخصصة والببتيدات المستهدفة إلى القضاء الكامل على ألمي المزمن، وتحسين مؤشرات تتبع أعضائي الداخلية، وسمح لي بالانتقال إلى نمط حياة مستقل تمامًا عن الأدوية. أشيد بشدة بعمل هذا الفريق.",
    author: "مريض العلاج الجهازي",
    location: "العراق",
    flag: "🇮🇶",
  },
];

function Reviews() {
  const [index, setIndex] = useState(0);
  const total = successStories.length;
  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);
  const story = successStories[index];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#FDAA3E] mb-3">
              نتائج المرضى
            </p>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900"
              style={{ lineHeight: "1.15" }}
            >
              قصص نجاح سريرية
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
              رحلات تعافٍ حقيقية لمرضى دوليين عولجوا في عيادتنا في تبليسي.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          {/* Mobile: native scroll-snap swipe carousel with peek */}
          <div className="md:hidden -mx-5">
            <div
              className="flex overflow-x-auto pb-2 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              style={{
                scrollPaddingLeft: "1.25rem",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {successStories.map((s, i) => (
                <div
                  key={i}
                  className="snap-start shrink-0 basis-[87%] pr-5 last:pl-5"
                  style={{ transform: "translateZ(0)" }}
                >
                  <div className="rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-[0_10px_40px_-15px_rgba(15,23,42,0.15)]">
                    <div
                      className="relative h-[300px] sm:h-[360px] flex items-center justify-center"
                      style={{
                        backgroundColor:
                          s.kind === "graphic" ? s.graphic.bg : "#0f172a",
                      }}
                    >
                      {s.kind === "image" ? (
                        <img
                          src={s.image}
                          alt={s.author}
                          className="absolute inset-0 w-full h-full object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                      ) : "title" in s.graphic ? (
                        <div className="relative px-6 text-center">
                          <div
                            className="text-6xl sm:text-7xl font-extrabold tracking-tight leading-none"
                            style={{ color: s.graphic.titleColor }}
                          >
                            {s.graphic.title}
                          </div>
                          <div className="mt-4 text-white text-lg sm:text-lg font-semibold uppercase tracking-wider">
                            {s.graphic.subtitle}
                          </div>
                        </div>
                      ) : (
                        <div className="relative flex flex-col items-center text-center px-6">
                          {(() => {
                            const I = s.graphic.icon;
                            return (
                              <I
                                className="w-24 h-24 sm:w-28 sm:h-28 text-white"
                                strokeWidth={1.25}
                              />
                            );
                          })()}
                          <div className="mt-4 text-white text-xl sm:text-2xl font-bold tracking-tight">
                            {s.graphic.label}
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-x-0 bottom-0 pt-16 pb-4 px-5 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent">
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-[#FDC987]/90 mb-1.5">
                          {s.badge}
                        </p>
                        <div className="flex items-end justify-between gap-3">
                          <p className="text-white text-lg font-bold tracking-tight leading-tight">
                            {s.author}
                          </p>
                          <span className="shrink-0 inline-flex items-center gap-1.5 text-white/90 text-sm font-medium">
                            <span className="text-lg leading-none">
                              {s.flag}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="relative p-6">
                      <Quote className="absolute top-4 right-4 w-12 h-12 text-[#FDAA3E]/15" />
                      <p
                        className="relative text-slate-700 text-lg leading-relaxed"
                        style={{ textWrap: "pretty" }}
                      >
                        "{s.text}"
                      </p>
                      <p className="relative mt-4 text-sm text-slate-400 font-medium">
                        {String(i + 1).padStart(2, "0")} /{" "}
                        {String(total).padStart(2, "0")}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop / tablet: 2-card view with side arrows */}
          <div className="relative hidden md:block">
            <div className="grid md:grid-cols-2 gap-5 md:gap-8 items-stretch">
              {/* Left: image OR typographic data graphic with overlayed metadata */}
              <div
                className="relative rounded-3xl overflow-hidden flex items-center justify-center h-[320px] sm:h-[380px] md:h-[460px] transition-colors duration-500"
                style={{
                  backgroundColor:
                    story.kind === "graphic" ? story.graphic.bg : "#0f172a",
                }}
              >
                {successStories.map((s, i) =>
                  s.kind === "image" ? (
                    <img
                      key={i}
                      src={s.image}
                      alt={s.author}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                        i === index ? "opacity-100" : "opacity-0"
                      }`}
                      loading="eager"
                      decoding="async"
                      fetchPriority={i === 0 ? "high" : "low"}
                      aria-hidden={i !== index}
                    />
                  ) : null,
                )}

                {story.kind === "graphic" &&
                  ("title" in story.graphic ? (
                    <div className="relative px-8 text-center">
                      <div
                        className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight leading-none"
                        style={{ color: story.graphic.titleColor }}
                      >
                        {story.graphic.title}
                      </div>
                      <div className="mt-4 text-white text-lg sm:text-lg md:text-xl font-semibold uppercase tracking-wider">
                        {story.graphic.subtitle}
                      </div>
                    </div>
                  ) : (
                    <div className="relative flex flex-col items-center text-center px-8">
                      {(() => {
                        const I = story.graphic.icon;
                        return (
                          <I
                            className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 text-white"
                            strokeWidth={1.25}
                          />
                        );
                      })()}
                      <div className="mt-5 text-white text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
                        {story.graphic.label}
                      </div>
                    </div>
                  ))}

                {/* Overlay: Name, Treatment, Country */}
                <div className="absolute inset-x-0 bottom-0 pt-16 pb-5 px-5 sm:px-6 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent">
                  <p className="text-[10px] sm:text-sm font-semibold uppercase tracking-wider text-[#FDC987]/90 mb-1.5">
                    {story.badge}
                  </p>
                  <div className="flex items-end justify-between gap-3">
                    <p className="text-white text-lg sm:text-xl md:text-2xl font-bold tracking-tight leading-tight">
                      {story.author}
                    </p>
                    <span className="shrink-0 inline-flex items-center gap-1.5 text-white/90 text-sm sm:text-base font-medium">
                      <span className="text-lg sm:text-lg leading-none">
                        {story.flag}
                      </span>
                      <span className="hidden sm:inline">{story.location}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: white quote card */}
              <div className="relative rounded-3xl bg-white border border-slate-200/80 shadow-[0_10px_40px_-15px_rgba(15,23,42,0.15)] p-6 sm:p-8 md:p-10 flex flex-col justify-center min-h-[260px] md:min-h-[460px]">
                <Quote className="absolute top-6 right-6 w-14 h-14 sm:w-20 sm:h-20 text-[#FDAA3E]/15" />
                <p
                  className="relative text-slate-700 text-lg sm:text-lg md:text-xl leading-relaxed"
                  style={{ textWrap: "pretty" }}
                >
                  "{story.text}"
                </p>
                <p className="relative mt-5 text-sm text-slate-400 font-medium">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(total).padStart(2, "0")}
                </p>
              </div>
            </div>

            {/* Absolute-positioned nav arrows on the carousel edges (desktop only) */}
            <button
              onClick={prev}
              aria-label="القصة السابقة"
              className="absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-slate-950/40 hover:bg-slate-950/70 text-white backdrop-blur-sm opacity-70 hover:opacity-100 active:scale-95 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="القصة التالية"
              className="absolute -left-3 md:-left-5 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-slate-950/40 hover:bg-slate-950/70 text-white backdrop-blur-sm opacity-70 hover:opacity-100 active:scale-95 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── Medical Team ─── */
const TEAM = [
  {
    img: yaroslav,
    name: "Dr. Yaroslav Myroshnykov, MD, PhD",
    role: "كبير الأطباء والمؤسس المشارك",
    badges: ["أكثر من 50 منشورًا علميًا", "7 براءات اختراع", "ترخيص دولي"],
    bio: [
      "المؤسس المشارك لستيم بلس ومرجعية معترف بها عالميًا في طب الخلايا الجذعية، أمضى الدكتور ياروسلاف ميروشنيكوف ما يقرب من ثلاثة عقود في ريادة العلاجات التجديدية عبر أوكرانيا والصين والآن جورجيا. وهو مؤلف لأكثر من 50 منشورًا علميًا، وحائز على 7 براءات اختراع، وحاصل على جائزة العالم الشاب من أكاديمية العلوم الطبية الأوكرانية.",
      "تخرج الدكتور ميروشنيكوف بمرتبة الشرف من جامعة كييف الوطنية الطبية باسم الأكاديمي أ.أ. بوغوموليتس في عام 1996، قبل أن يقضي ما يقرب من عقد من الزمن (1996-2005) في معهد المسالك البولية التابع لأكاديمية العلوم الطبية الأوكرانية، متخصصًا في الطب العام وعلم الأمراض الجنسية.",
      "في عام 2001، حصل على جائزة العالم الشاب من أكاديمية العلوم الطبية الأوكرانية، عقب أطروحته لدرجة مرشح العلوم الطبية حول تشخيص وعلاج ضعف الانتصاب ذي المنشأ الوعائي. ثم عمل كبير خبراء علم الأمراض الجنسية في إدارة الصحة بمدينة كييف (2006-2011)، حيث نظم سبعة مؤتمرات علمية وعملية، بينما كان يدير في الوقت نفسه الأبحاث في المركز العلمي الأوكراني لعلم الأحياء البردي والطب البردي (2006-2013). ومن 2009 إلى 2013، أسس وقاد معهد طب الخلايا الجذعية بلس، ومنذ عام 2010 عمل كباحث رئيسي في مركز علاج الخلايا الجذعية التابع لوزارة الصحة الأوكرانية.",
      "بين عامي 2017 و2019، مارس الدكتور ميروشنيكوف مهنته في مركز بوآو لايف كير في هاينان، الصين، متخصصًا في العلاج بالخلايا الجذعية وتحسين الوظيفة الجنسية بموجب ترخيص ممارسة طبية دولي. ومنذ الغزو الروسي لأوكرانيا، واصل عمله السريري في الخارج — أولاً في عيادة ريفايفال تكنولوجيز في باتومي (2022)، ثم عيادة فينيكس في بلوفديف، بلغاريا (2023-2024) — قبل الانضمام إلى ستيم بلس في تبليسي في مايو 2024، حيث يقود الآن برامج الطب الخلوي في العيادة لمكافحة الشيخوخة، وإدارة السكري، وإعادة تأهيل الوظيفة الجنسية.",
    ],
    credentials: [
      "دكتوراه في الطب، جامعة كييف الوطنية الطبية باسم أ.أ. بوغوموليتس (1996، بمرتبة الشرف)",
      "مرشح العلوم الطبية (المسالك البولية) — معهد المسالك البولية وأمراض الكلى، أكاديمية العلوم الطبية الأوكرانية",
      "فئة التأهيل العليا في المسالك البولية — وزارة الصحة الأوكرانية (مُنحت عام 2019)",
      "مؤهل تخصصي في تنظيم وإدارة الرعاية الصحية — وزارة الصحة الأوكرانية (مُنح عام 2021)",
      "ترخيص ممارسة طبية دولي (الصين)",
      "جائزة العالم الشاب، أكاديمية العلوم الطبية الأوكرانية (2001)",
    ],
  },
  {
    img: nino,
    name: "Dr. Nino Kandelaki, MD, PhD, Postdoctoral",
    role: "كبيرة أطباء الجلدية التجميلية",
    badges: [],
    bio: [
      "كبيرة أطباء الجلدية التجميلية في ستيم بلس، تتمتع الدكتورة نينو كانديلاكي بأكثر من 17 عامًا من الخبرة السريرية في طب الجلدية والطب التجميلي، مع تدريب دولي متقدم يمتد عبر كوريا وجورجيا وخارجهما.",
      "الدكتورة كانديلاكي طبيبة جلدية وأمراض تناسلية بخبرة سريرية تفوق سبعة عشر عامًا في الجلدية وعلم الشعر والطب التجميلي. عملت سابقًا كبيرة أخصائيي الحقن في عيادة سيتي لوكس، وكمدربة دولية لعلامة العناية بالبشرة الإسبانية PBSerum.",
      "يعكس تدريبها المستمر تخصصًا عميقًا في التقنيات التجميلية التجديدية طفيفة التوغل: أكملت دورة حول مستخلص المشيمة في الممارسة العلاجية والتجميلية تحت إشراف الدكتور دونغ-هوان كيم، مدير الأكاديمية الكورية لطب مكافحة الشيخوخة (باكو، 2018)؛ وتدريب التميز في تقنيات شد الخيوط Aptos تحت إشراف مبتكري هذه التقنية الجورجيين، الدكاترة ج. وم. وس. سولاماندزه؛ ودورة ماستر e.p.t.q. لحشوات حمض الهيالورونيك للخبراء، المعتمدة من JETEMA. كما شاركت في مؤتمرات دولية ودورات تنشيطية في برلين والولايات المتحدة وجمهورية التشيك.",
    ],
    credentials: [
      "دكتوراه في الطب، دكتوراه، ما بعد الدكتوراه — الجلدية والأمراض التناسلية",
      "مستخلص المشيمة في الممارسة العلاجية والطب التجميلي — الأكاديمية الكورية لطب مكافحة الشيخوخة (باكو، 2018)",
      "تقنيات شد الخيوط Aptos، تدريب التميز",
      "دورة ماستر e.p.t.q. لحشوات حمض الهيالورونيك — JETEMA",
    ],
  },
  {
    img: mikhail,
    name: "Dr. Mikhail Tsverava, MD, PhD",
    role: "كبير أطباء الأشعة وأخصائي التشخيص",
    badges: [],
    bio: [
      "كبير أطباء الأشعة بخبرة واسعة في رسم خرائط التشخيص الوظيفي والتصوير المتقدم. خبير في الاستهداف الخلوي الدقيق الموجه بالموجات فوق الصوتية المستخدم للتحقق من نتائج العلاج وتوثيقها. يقدم دعمًا تشخيصيًا قائمًا على الأدلة طوال كل مرحلة من مراحل بروتوكول ستيم بلس.",
    ],
    credentials: [],
  },
  {
    img: eleonora,
    name: "Dr. Eleonora Fiodorova, MD",
    role: "أخصائية الغدد الصماء السريرية والتغذية",
    badges: [],
    bio: [
      "أخصائية غدد صماء سريرية متخصصة في الأنظمة الغدية المتقدمة، والتوازن الهرموني، واستقرار التمثيل الغذائي. تلعب دورًا رئيسيًا في تصميم ومراقبة المكونات الهرمونية والأيضية لخطة علاج كل مريض. خبيرة في دمج البروتوكولات الغذائية مع العلاج الخلوي التجديدي لتحقيق نتائج مثلى.",
    ],
    credentials: [],
  },
  {
    img: natia,
    name: "Dr. Natia Alania, MD",
    role: "أخصائية الأعصاب السريرية والنمو العصبي",
    badges: [],
    bio: [
      "أخصائية أعصاب سريرية متخصصة في مسارات التعافي العصبي، ورسم خرائط الدماغ الوظيفية، واضطرابات النمو العصبي. خبيرة متخصصة في البروتوكولات الخلوية لاضطرابات طيف التوحد والحالات التنكسية العصبية. تعمل بشكل وثيق مع الدكتور أرشايا لتقديم رعاية عصبية شاملة ضمن فريق ستيم بلس متعدد التخصصات.",
    ],
    credentials: [
      "شهادة تأهيل من الفئة الأولى في طب الأعصاب — لجنة الاعتماد الطبي الحكومية الجورجية (رقم 022439، أغسطس 2025)",
    ],
  },
  {
    img: giorgi,
    name: "Dr. Giorgi Archaia, MD",
    role: "جراح أعصاب وأخصائي أعصاب وأخصائي فقريات",
    badges: [],
    bio: [
      "طبيب أعصاب متعدد التخصصات ومعالج بالتقويم وأخصائي إعادة تأهيل، يجمع الدكتور جورجي أرشايا بين أكثر من 12 عامًا من الخبرة العصبية وتقنيات العلاج اليدوي العملي المكتسبة في جورجيا وروسيا.",
      "الدكتور أرشايا أخصائي أعصاب ومعالج بالتقويم وإبر صينية وإعادة تأهيل بخبرة تفوق 12 عامًا في علاج الحالات العصبية والعضلية الهيكلية. خريج جامعة تبليسي التعليمية الطبية \"أبقراط\"، وتدرب كذلك في مؤسسات رائدة في الخارج، بما في ذلك عيادة أسوتا في إسرائيل وجامعة سيتشينوف الطبية في موسكو، روسيا.",
      "يشمل نهجه متعدد التخصصات طب الأعصاب والعلاج بالتقويم والإبر الصينية وأساليب إعادة التأهيل الحديثة. وهو ماهر في العلاج بالضغط، والعلاج اليدوي، والعلاج الطبيعي، والتمارين العلاجية، وحصارات الأدوية والوخز الدوائي، وتدليك الأحشاء — يجمع بين هذه التقنيات لتقديم رعاية شاملة تركز على المريض ضمن فريق ستيم بلس متعدد التخصصات.",
    ],
    credentials: [
      "خريج، جامعة تبليسي التعليمية الطبية \"أبقراط\"",
      "تدريب سريري، عيادة أسوتا (إسرائيل)",
      "تدريب سريري، جامعة سيتشينوف الطبية في موسكو (روسيا)",
    ],
  },
  {
    img: lili,
    name: "Lili Martashvili",
    role: "مديرة التمريض السريري والامتثال",
    badges: [],
    bio: [
      "مديرة التمريض السريري المشرفة على جميع بروتوكولات سلامة المرضى ومعايير الامتثال السريري في مستشفى ليدرميد. تدير أنظمة الفرز ومعايير الرعاية الصحية الخارجية التي تضمن حصول كل مريض على رعاية آمنة ومتسقة طوال بروتوكوله لمدة 5 أيام. الركيزة التشغيلية لفريق ستيم بلس السريري.",
    ],
    credentials: [],
  },
  {
    img: mako,
    name: "Mako Khachidze",
    role: "ممرضة تسريب سريري",
    badges: [],
    bio: [
      "ممرضة التخصص السريري في الإعطاء الدقيق ومراقبة بروتوكولات الخلايا الوريدية المتقدمة. تقدم رعاية عملية طوال كل إجراء تسريب للخلايا الجذعية لضمان الدقة والراحة والسلامة. حضور موثوق به لكل مريض دولي طوال فترة علاجه في ستيم بلس.",
    ],
    credentials: [],
  },
];


function MedicalTeam() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState<(typeof TEAM)[number] | null>(null);

  const scrollByDir = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-team-card]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  useEffect(() => {
    if (!active) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section id="medical-team" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            العقول وراء الطب
          </h2>
          <p className="mt-4 text-lg md:text-lg text-muted-foreground leading-relaxed">
            تعرف على النخبة من الطاقم السريري ورواد العلاج الحيوي الخلوي الذين يوجهون بروتوكولات تعافيك في ستيم بلس تبليسي.
          </p>
        </div>

        {/* Scrollable full team grid */}
        <div className="relative">
          <button
            type="button"
            aria-label="السابق"
            onClick={() => scrollByDir(-1)}
            className="hidden md:flex absolute right-0 md:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-white border border-border shadow-md text-foreground hover:bg-accent transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <button
            type="button"
            aria-label="التالي"
            onClick={() => scrollByDir(1)}
            className="hidden md:flex absolute left-0 md:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-white border border-border shadow-md text-foreground hover:bg-accent transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            ref={scrollerRef}
            className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-5 px-6 md:px-5 scroll-smooth [scroll-padding-left:1.5rem] md:[scroll-padding-left:1.25rem]"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {TEAM.map((m) => (
              <article
                key={m.name}
                data-team-card
                className="snap-start shrink-0 flex flex-col rounded-2xl overflow-hidden shadow-md bg-white basis-[85%] sm:basis-[60%] md:basis-[calc((100%-3rem)/3)] lg:basis-[calc((100%-4.5rem)/4)]"
              >
                {/* Photo section */}
                <div className="relative h-[380px] shrink-0 bg-muted">
                  <img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to bottom, transparent 45%, rgba(3,4,94,0.85) 100%)" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-bold text-base leading-tight">{m.name}</p>
                    <span className="inline-block bg-[#02C39A] text-white text-[10px] font-semibold px-2 py-0.5 rounded-full mt-1">
                      {m.role}
                    </span>
                    {m.badges.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-1">
                        {m.badges.map((b) => (
                          <span key={b} className="bg-white/20 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                            {b}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                {/* Bio section */}
                <div className="p-4 flex-1 flex flex-col">
                  <p className="text-slate-600 text-sm leading-relaxed">{m.bio[0]}</p>
                  {(m.bio.length > 1 || m.credentials.length > 0) && (
                    <button
                      type="button"
                      onClick={() => setActive(m)}
                      className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#02C39A] hover:text-[#029a7a] transition-colors self-start"
                    >
                      اقرأ المزيد
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Full bio modal */}
      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="إغلاق"
              className="absolute top-4 left-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-4 p-6 border-b border-slate-100">
              <img
                src={active.img}
                alt={active.name}
                className="w-16 h-16 rounded-full object-cover object-top shrink-0"
              />
              <div>
                <p className="font-bold text-lg text-[#03045E] leading-tight">{active.name}</p>
                <span className="inline-block bg-[#02C39A] text-white text-xs font-semibold px-2 py-0.5 rounded-full mt-1">
                  {active.role}
                </span>
              </div>
            </div>

            <div className="p-6 space-y-4">
              {active.bio.map((paragraph, i) => (
                <p key={i} className="text-slate-600 text-sm leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {active.credentials.length > 0 && (
                <div className="pt-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    المؤهلات والتدريب
                  </p>
                  <ul className="space-y-1.5">
                    {active.credentials.map((c, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-[#02C39A] shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  const mapSrc =
    "https://www.google.com/maps?q=" +
    encodeURIComponent("21 Nodar Bokhua I Ln, Tbilisi 0159, Georgia") +
    "&output=embed";
  return (
    <footer className="bg-slate-950 border-t border-slate-800/60 text-slate-400">
      <div className="max-w-6xl mx-auto px-5 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1: HQ */}
          <div>
            <span className="text-sm uppercase tracking-wider text-slate-500 mb-3 block">
              المقر الرئيسي للشركة
            </span>
            <address className="not-italic text-base leading-relaxed tracking-wide">
              <div className="font-semibold text-slate-100">ستيم بلس ذ.م.م.</div>
              <div>21 نودار بوخوا آي لين</div>
              <div>تبليسي، 0159</div>
              <div>جورجيا</div>
            </address>
          </div>

          {/* Column 2: Map */}
          <div>
            <span className="text-sm uppercase tracking-wider text-slate-500 mb-3 block">
              الموقع
            </span>
            <div
              className="rounded-xl overflow-hidden border border-slate-800"
              style={{ height: 180 }}
            >
              <iframe
                title="موقع ستيم بلس ذ.م.م."
                src={mapSrc}
                width="100%"
                height="180"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, display: "block" }}
              />
            </div>
          </div>

          {/* Column 3: Contacts */}
          <div>
            <span className="text-sm uppercase tracking-wider text-slate-500 mb-3 block">
              جهات الاتصال
            </span>
            <ul className="text-base space-y-3">
              <li>
                <a
                  href="tel:+995595069069"
                  className="inline-flex items-center gap-2 text-slate-300 transition-colors duration-200 hover:text-[#02C39A]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-slate-400">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  +995 595 069 069
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/995595069069"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-300 transition-colors duration-200 hover:text-[#25D366]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#25D366]">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  الدردشة عبر واتساب
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/+995595069069"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-300 transition-colors duration-200 hover:text-[#229ED9]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#229ED9]">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  راسلنا عبر تيليجرام
                </a>
              </li>
              <li>
                <a
                  href="mailto:stemplusclinic@gmail.com"
                  className="inline-flex items-center gap-2 text-slate-300 transition-colors duration-200 hover:text-[#02C39A]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-slate-400">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                  stemplusclinic@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-900/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © 2026 ستيم بلس ذ.م.م. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/ar/privacy"
              className="text-sm text-slate-400 transition-colors duration-200 hover:text-[#02C39A]"
            >
              سياسة الخصوصية
            </Link>
            <Link
              to="/ar/terms"
              className="text-sm text-slate-400 transition-colors duration-200 hover:text-[#02C39A]"
            >
              شروط الخدمة
            </Link>
            <Link
              to="/ar/terms"
              className="text-sm text-slate-400 transition-colors duration-200 hover:text-[#02C39A]"
            >
              إخلاء المسؤولية الطبية
            </Link>
            <Link
              to="/"
              className="text-sm text-slate-400 transition-colors duration-200 hover:text-[#02C39A]"
            >
              English (EN)
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── FAQ Section ─── */
const FAQ_ITEMS = [
  {
    q: "ما هو العلاج بالخلايا الجذعية وكيف يعمل؟",
    a: "العلاج بالخلايا الجذعية هو علاج في الطب التجديدي يستخدم آليات الإصلاح الطبيعية للجسم لمعالجة الأنسجة التالفة والأمراض المزمنة والتدهور الخلوي. في ستيم بلس، نستخدم نوعًا محددًا من الخلايا الجذعية يسمى خلايا Muse — وهي خلايا جذعية وسيطية متعددة القدرات مصدرها مختبرات معتمدة وفق معايير GMP بدرجات حيوية موثقة بشكل مستقل تتجاوز 98%. على عكس الخلايا الجذعية التقليدية، تبقى خلايا Muse نشطة في الجسم لمدة تتراوح بين 6 أشهر وعام واحد، مما يوفر تأثيرًا علاجيًا مستمرًا مع خطر انعدام تام للأورام. تُدمج هذه الخلايا مع الإكسوسومات والببتيدات والزرعات الحيوية المطابقة في بروتوكول شخصي مصمم حول نتائجك التشخيصية المحددة — وليس خطة علاج عامة.",
  },
  {
    q: "ما هي الحالات التي تعالجونها؟",
    a: "تعالج ستيم بلس مجموعة واسعة من الحالات. تشمل الحالات الطبية السكري من النوعين الأول والثاني، وأمراض الكبد بما فيها التليف والتشمع، والأمراض العصبية والتنكسية العصبية، وإعادة التأهيل بعد السكتة الدماغية، واضطراب طيف التوحد، وأمراض المناعة الذاتية، والحالات العظمية بما فيها التهاب المفاصل وإصابات الرياضة، وإعادة تأهيل القلب، وضعف الانتصاب والعقم عند الرجال، والعقم عند النساء وانخفاض احتياطي المبيض، واعتلال الشبكية، والحالات البولية والنسائية. أما على صعيد التجديد، فنقدم بروتوكولات شاملة لمكافحة الشيخوخة باستخدام الخلايا الجذعية الجنينية، واستعادة هرمون التستوستيرون وتحسينه الهرموني، والطب الخلوي التجميلي بما في ذلك تجديد الوجه واستعادة الشعر. يتم تقييم كل مريض بشكل فردي من قبل الدكتور ياروسلاف ميروشنيكوف قبل التوصية ببروتوكول.",
  },
  {
    q: "كم عدد الجلسات التي سأحتاجها؟",
    a: "يكمل معظم المرضى بروتوكول ستيم بلس لمدة 5 أيام في مستشفى ليدرميد في تبليسي. اليوم الأول هو فحص تشخيصي شامل — تحاليل دم، وموجات فوق صوتية، واستشارات متخصصة، ووضع خطة العلاج. يبدأ اليوم الثاني مرحلة التسريب الأولية، وهو إجراء وريدي يستغرق 3-4 ساعات مقترن بالببتيدات والأدوية الحيوية المشابهة. يشمل اليوم الثالث تسريبًا ثانويًا وحقنًا تجميلية اختيارية. اليوم الرابع هو تقييم ديناميكي وتعديل العلاج. اليوم الخامس هو ملخص الخروج وتخطيط معالم المتابعة. بعد مغادرة تبليسي، يحافظ المرضى على تواصل مستمر مع الفريق السريري لمراقبة فعالية العلاج.",
  },
  {
    q: "هل العلاج بالخلايا الجذعية آمن؟",
    a: "تستخدم ستيم بلس فقط خلايا Muse المصدرة من مختبرات معتمدة وفق معايير GMP، معتمدة بشكل مستقل بدرجات حيوية تتجاوز 98% ومختبرة سلبيًا لجميع المحتويات الفيروسية والبكتيرية. يخضع كل مريض لفحص تشخيصي كامل قبل بدء العلاج. نُحضر لك خلاياك فعليًا ونعرضها عليك قبل إعطائها. لدى الدكتور ميروشنيكوف أكثر من 50 بحثًا منشورًا و7 براءات اختراع في الطب الخلوي، وتستند بروتوكولاتنا إلى عقود من الأبحاث المُحكّمة الناشئة من معهد مشكلات علم الأحياء البردي في خاركيف، أوكرانيا.",
  },
  {
    q: "هل العلاج بالخلايا الجذعية تجريبي؟",
    a: "في بعض الدول، لا يزال العلاج بالخلايا الجذعية مصنفًا كعلاج تجريبي، ونحن شفافون بشأن ذلك. في ستيم بلس، تُقدم العلاجات بشكل قانوني داخل مستشفى ليدرميد — منشأة طبية مرخصة ومتعددة التخصصات ومجهزة بالكامل في تبليسي، جورجيا. يعود العلم الذي تستند إليه بروتوكولاتنا إلى عام 1972 ومعهد مشكلات علم الأحياء البردي في خاركيف. أظهر التحليل الإحصائي لنتائجنا نتائج موثوقة للغاية، بما في ذلك الاستعادة الكاملة لحمة الكبد في حالات التليف والتشمع، وزيادة بمقدار 2-3 أضعاف في احتياطي الأنسولين لدى مرضى السكري. نشجع جميع المرضى على استشارة طبيبهم الخاص قبل السفر.",
  },
  {
    q: "من هم الأطباء في ستيم بلس؟",
    a: "يقود فريق ستيم بلس السريري ثلاثة متخصصين. الدكتور ياروسلاف ميروشنيكوف هو كبير الأطباء وأخصائي الخلايا الجذعية — حاصل على الدكتوراه، ومؤلف لأكثر من 50 بحثًا منشورًا، وحائز على 7 براءات اختراع، وحاصل على جائزة العالم الشاب من أكاديمية العلوم الطبية الأوكرانية عام 2001، وحائز على ترخيص ممارسة طبية دولي مع خبرة سريرية في الصين. الدكتورة نينو كانديلاكي هي كبيرة أطباء الجلدية التجميلية بخبرة 17 عامًا، حاصلة على دكتوراه في الطب ودكتوراه مع تدريب ما بعد الدكتوراه، ومدربة دولية للعلامة الإسبانية PBSerum. الدكتور جورجي أرشايا هو جراح أعصاب وأخصائي أعصاب وأخصائي فقريات بخبرة 12 عامًا، تدرب في عيادة أسوتا في إسرائيل وجامعة سيتشينوف الطبية في موسكو، روسيا.",
  },
  {
    q: "ما الذي يميز ستيم بلس عن العيادات الأخرى؟",
    a: "ثلاثة أمور تميز ستيم بلس. أولاً، الخلايا: تستخدم ستيم بلس خلايا Muse من مختبرات معتمدة وفق معايير GMP بدرجات حيوية موثقة بشكل مستقل تتجاوز 98% — وليس بإمكان جميع العيادات قول الشيء نفسه. ثانيًا، العلم: تُبنى بروتوكولاتنا على أكثر من 50 عامًا من الأبحاث الخلوية مع دعم أكثر من 50 بحثًا منشورًا للدكتور ميروشنيكوف و7 براءات اختراع لكل قرار علاجي. ثالثًا، التحقق: تستخدم ستيم بلس أساليب قائمة على الأدلة لقياس النتائج — تصوير مرونة الأنسجة، وتقييم الببتيد السي، واختبار الهرمون المضاد لمولر، وتخطيط كهربية العضل العصبي — بحيث تكون النتائج موثقة وليست مفترضة.",
  },
  {
    q: "هل أحتاج إلى تأشيرة لزيارة جورجيا؟",
    a: "يمكن لمواطني أكثر من 90 دولة دخول جورجيا دون تأشيرة، بما في ذلك جميع دول الاتحاد الأوروبي، والمملكة المتحدة، والولايات المتحدة، وكندا، وأستراليا، ومعظم دول الشرق الأوسط. تتمتع جورجيا بواحدة من أكثر سياسات التأشيرات انفتاحًا في العالم. يمكنك التحقق من متطلبات بلدك على موقع وزارة الخارجية الجورجية قبل الحجز.",
  },
  {
    q: "كيف أصل إلى تبليسي؟",
    a: "يرتبط مطار تبليسي الدولي مباشرة بمعظم المدن الأوروبية الكبرى، والشرق الأوسط، وآسيا الوسطى. تستغرق أوقات الطيران المعتادة من 3 إلى 4 ساعات من أوروبا الغربية، وحوالي 5 ساعات من المملكة المتحدة، ومن 4 إلى 5 ساعات من دول الخليج. من المطار، يبعد مستشفى ليدرميد حوالي 20-25 دقيقة بسيارة الأجرة أو تطبيقات النقل التشاركي. نوصي بتطبيق Bolt لتوصيلات موثوقة ومعقولة السعر من وإلى المطار.",
  },
  {
    q: "هل يمكنني الجمع بين العلاج والسياحة؟",
    a: "بالتأكيد — ومعظم مرضانا يفعلون ذلك. يترك بروتوكول ستيم بلس لمدة 5 أيام أمسياتك حرة، وتبليسي تكافئ الاستكشاف. تتميز المدينة ببلدة قديمة من القرون الوسطى محفوظة بشكل رائع، وحمامات كبريتية عالمية الشهرة، ومطبخ جورجي استثنائي، ومناظر طبيعية جبلية خلابة تجذب الزوار من جميع أنحاء أوروبا. يصل معظم المرضى قبل يوم للاستقرار وتمديد إقامتهم بعد العلاج.",
  },
  {
    q: "ما هي اللغة التي يتحدث بها الأطباء؟",
    a: "يجيد الدكتور ميروشنيكوف وكبار الفريق السريري اللغات الإنجليزية والروسية والأوكرانية. تُجرى جميع الاستشارات للمرضى الدوليين باللغة الإنجليزية. فريق تنسيق المرضى لدينا متاح باللغة الإنجليزية طوال فترة إقامتك — من استشارتك الأولى عبر الفيديو وحتى مغادرتك تبليسي.",
  },
  {
    q: "كم تكلفة العلاج بالخلايا الجذعية في ستيم بلس؟",
    a: "تعتمد تكلفة العلاج على حالتك والبروتوكول الذي يوصي به الدكتور ميروشنيكوف. ستتضمن استشارتك المجانية لمدة 30 دقيقة تفصيلاً كاملاً للتكلفة قبل الالتزام بأي شيء. تكلفتنا لبروتوكول كامل لمدة 5 أيام في مستشفى ليدرميد أقل بكثير من العلاجات المماثلة باستخدام خلايا Muse المعتمدة وفق معايير GMP في ألمانيا أو سويسرا أو الولايات المتحدة، حيث يمكن أن تكون التكاليف أعلى بثلاث إلى خمس مرات.",
  },
  {
    q: "ماذا تتضمن باقة العلاج؟",
    a: "تتضمن باقة علاج ستيم بلس فحصك التشخيصي الكامل عند الوصول — تحاليل الدم، والاستشارات المتخصصة، والموجات فوق الصوتية وتصوير المرونة عند الحاجة — وجميع جلسات العلاج الخلوي الموصوفة، والمراقبة السريرية اليومية طوال إقامتك لمدة 5 أيام، وملخص خروج شامل مع توصيات المتابعة، والدعم عن بُعد المستمر من الفريق السريري بعد عودتك إلى منزلك. تُرتب الإقامة والرحلات الجوية بشكل مستقل.",
  },
  {
    q: "كيف أحجز استشارة؟",
    a: "تُحجز الاستشارات من خلال صفحة الحجز الخاصة بعيادتنا. سيُطلب منك اسمك وبريدك الإلكتروني، ثم تنتقل مباشرة إلى تقويم الحجز لاختيار الوقت الذي يناسبك. الاستشارة مجانية، وتستغرق 30 دقيقة، وتُجرى عبر مكالمة فيديو مع أحد أعضاء فريق الدكتور ميروشنيكوف السريري. لا يوجد أي التزام بالمتابعة.",
    cta: { label: "احجز استشارتك المجانية", href: "https://en.stemplusclinic.com/#admissions" },
  },
];

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section id="faq" aria-label="الأسئلة الشائعة" className="py-24 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#02C39A] mb-3">
            الأسئلة الشائعة
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-[#03045E]"
            style={{ lineHeight: "1.15" }}
          >
            كل ما تحتاج معرفته عن العلاج بالخلايا الجذعية في ستيم بلس
          </h2>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            إجابات على الأسئلة الأكثر شيوعًا من المرضى الدوليين الذين يفكرون في العلاج في تبليسي، جورجيا.
          </p>
        </div>

        <div className="border-t border-slate-100">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            const qId = `faq-q-${i}`;
            const aId = `faq-a-${i}`;
            return (
              <div key={i} className="border-b border-slate-100">
                <button
                  id={qId}
                  aria-expanded={isOpen}
                  aria-controls={aId}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-right"
                >
                  <span className="font-semibold text-base text-[#03045E]">{item.q}</span>
                  {isOpen
                    ? <X className="w-5 h-5 shrink-0" style={{ color: "#02C39A" }} />
                    : <Plus className="w-5 h-5 shrink-0" style={{ color: "#02C39A" }} />
                  }
                </button>
                <div
                  id={aId}
                  role="region"
                  aria-labelledby={qId}
                  style={{
                    maxHeight: isOpen ? "800px" : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.35s ease",
                  }}
                >
                  <div className="pb-5">
                    <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
                    {item.cta && (
                      <a
                        href={item.cta.href}
                        className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-[#02C39A] hover:text-[#029a7a] transition-colors"
                      >
                        {item.cta.label}
                        <ArrowLeft className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Local Agent (Arabic site only) ─── */
function LocalAgent() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-3xl mx-auto px-5">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#02C39A] mb-3">
            التواصل والدعم
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#03045E]">
            ممثلنا لمرضى دول الخليج والمنطقة العربية
          </h2>
        </div>

        <div className="rounded-2xl bg-white shadow-md p-8 sm:p-10">
          <div className="flex flex-col items-center text-center">
            <img
              src={mohammedMuwahed}
              alt="محمد موحد"
              loading="lazy"
              decoding="async"
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover object-top shadow-md ring-4 ring-white outline outline-1 outline-slate-100"
            />
            <h3 className="mt-5 text-2xl font-bold text-[#03045E]">محمد موحد</h3>
            <span className="inline-block bg-[#02C39A] text-white text-xs font-semibold px-3 py-1 rounded-full mt-3">
              شريك في عيادة ستيم بلس
            </span>
            <p className="mt-4 text-slate-600 leading-relaxed max-w-xl mx-auto">
              يتولى العمل مع المرضى القادمين من دول الخليج والمنطقة العربية.
            </p>
          </div>

          <div className="mt-10 space-y-6 text-right">
            <div>
              <p className="font-semibold text-[#03045E] mb-1.5">خبرته</p>
              <p className="text-slate-600 leading-relaxed text-sm">
                خبرته الواسعة في مجال العلاج التجديدي والخلوي تلعب دورًا مهمًا في تنظيم التواصل الفعال بين المرضى والعيادة. تشمل أنشطته العلاج، ومتابعة المرضى، وتنظيم العملية الطبية، وتقديم الدعم في جميع مراحل التعامل.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[#02C39A] mb-1.5">
                يعمل محمد موحد بشكل وثيق مع الفريق الطبي والمرضى الدوليين
              </p>
              <p className="text-slate-600 leading-relaxed text-sm">
                مما يضمن مستوى عالٍ من الخدمة والراحة والمتابعة المهنية — بدءًا من الاستشارة الأولية وتحليل البيانات الطبية وصولاً إلى تنظيم العلاج والمتابعة اللاحقة.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[#FDAA3E] mb-1.5">
                فهمه العميق للخصائص الثقافية واحتياجات المرضى من دول الخليج
              </p>
              <p className="text-slate-600 leading-relaxed text-sm">
                يسمح له بتوفير نهج فردي، وبناء الثقة، وتقديم خدمة طبية دولية عالية الجودة.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/380938009101"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] text-white px-5 py-3.5 font-semibold hover:bg-[#20bd5a] transition-colors"
              dir="ltr"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              +380 93 800 9101
            </a>
            <a
              href="mailto:muwahd@gmail.com"
              className="flex-1 inline-flex items-center justify-center gap-2.5 rounded-xl border border-slate-200 text-[#03045E] px-5 py-3.5 font-semibold hover:border-[#02C39A] hover:text-[#02C39A] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 shrink-0">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
              muwahd@gmail.com
            </a>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-center gap-6 text-sm text-slate-500">
            <a
              href="https://instagram.com/stemplusclinic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#02C39A] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              stemplusclinic@
            </a>
            <a
              href="https://stemplusclinic.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#02C39A] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              stemplusclinic.org
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Why Tbilisi ─── */
const TBILISI_CARDS = [
  {
    img: tbilisiClinic,
    title: "بنية تحتية طبية عالمية المستوى",
    desc: "تعمل ستيم بلس حصريًا داخل مستشفى ليدرميد — منشأة حديثة ومتعددة التخصصات ومجهزة بالكامل. هذه ليست عيادة في زقاق خلفي.",
  },
  {
    img: tbilisiCity,
    title: "واحدة من أجمل مدن أوروبا",
    desc: "قلاع من العصور الوسطى، وشرفات مزخرفة، وحمامات كبريتية، وأحد أكثر أشكال الضيافة دفئًا التي ستجدها في أي مكان. يمدد معظم المرضى إقامتهم.",
  },
  {
    img: tbilisiFood,
    title: "طعام وثقافة استثنائيان",
    desc: "تُعتبر جورجيا واحدة من أعظم الثقافات الغذائية في العالم. خينكالي، خاتشابوري، تشورتشخيلا — لن تكون أمسياتك خلال العلاج مملة على الإطلاق.",
  },
  {
    img: tbilisiAirport,
    title: "الوصول أسهل مما تعتقد",
    desc: "رحلات مباشرة من معظم المدن الأوروبية الكبرى، والشرق الأوسط، وآسيا الوسطى. من 3 إلى 5 ساعات من معظم المدن التي يقيم فيها مرضانا.",
  },
];

function WhyTbilisi() {
  return (
    <section id="why-tbilisi" className="py-24" style={{ background: "#03045E" }}>
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-12">
          <p className="text-base font-semibold uppercase tracking-widest text-[#02C39A] mb-3">
            لماذا تبليسي، جورجيا؟
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
            style={{ lineHeight: "1.15" }}
          >
            إذا لم تكن جورجيا على رادارك بعد، فيجب أن تكون كذلك.
          </h2>
          <p className="mt-4 text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
            يخبرنا معظم المرضى بالشيء نفسه عند وصولهم: «لم أتوقع أن تكون بهذا الشكل». نعتبر ذلك مجاملة.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
          {TBILISI_CARDS.map((card) => (
            <div
              key={card.title}
              className="relative rounded-2xl overflow-hidden group"
            >
              <div className="h-[260px] overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent pt-12 p-5">
                <p className="text-white font-bold text-lg leading-snug">{card.title}</p>
                <p className="text-white/90 text-base leading-relaxed mt-1">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-white/80 text-base italic text-center">
          دخول بدون تأشيرة لمواطني أكثر من 90 دولة، بما في ذلك الولايات المتحدة والمملكة المتحدة والاتحاد الأوروبي وكندا وأستراليا.
        </p>
      </div>
    </section>
  );
}

/* ─── Scroll reveal wrapper (animations removed) ─── */
function ScrollReveal({
  children,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return <>{children}</>;
}
