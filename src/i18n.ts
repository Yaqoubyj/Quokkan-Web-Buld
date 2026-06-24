import { createContext, useContext } from "react";

export type Lang = "en" | "ar";

export const translations = {
  en: {
    nav: { about: "About", coffee: "Coffee", catering: "Catering", menu: "Menu", branches: "Branches", contact: "Contact" },
    hero: {
      eyebrow: "Specialty Coffee · Riyadh",
      title: "Crafted With Intention",
      text: "Exceptional coffee begins with attention to detail. From sourcing and roasting to every cup we serve, we focus on quality, consistency, and creating memorable experiences.",
      cta1: "View Menu", cta2: "Explore Branches",
    },
    about: {
      eyebrow: "About Quokka",
      title: "A Modern Coffee Experience",
      text: "Quokka Coffee Roasters is built around quality, craftsmanship, and thoughtful hospitality. Every detail, from our spaces to our coffee selection, is designed to create a warm and memorable experience.",
      stat1: "Single Origin", stat1l: "Carefully sourced beans",
      stat2: "Slow Roasted", stat2l: "In small, focused batches",
      stat3: "Two Locations", stat3l: "Granada & Al Muruj, Riyadh",
    },
    collection: {
      eyebrow: "Coffee Collection",
      title: "Coffee Collection",
      note: "Available at all Quokka branches.",
      text: "Single-origin beans, roasted in small batches and packed with care.",
    },
    catering: {
      eyebrow: "Quokka Catering",
      title: "Coffee Experiences Beyond The Café",
      p1: "From corporate meetings and workshops to private gatherings and special occasions, Quokka Catering delivers specialty coffee experiences designed with the same attention to quality, presentation, and hospitality found in every Quokka location.",
      p2: "Our catering service combines premium coffee, professional service, and thoughtfully designed setups to create memorable experiences for guests and teams alike.",
      suitable: "Suitable For",
      items: ["Corporate Events", "Meetings", "Workshops", "Launch Events", "Private Gatherings", "Special Occasions"],
      cta: "Request Catering",
    },
    menu: {
      eyebrow: "The Menu",
      title: "Carefully Selected",
      text: "A focused offering of espresso classics, filter coffee, cold creations, and pastries.",
      cats: ["Hot Coffee", "Cold Drinks", "Filter Coffee", "Desserts"],
    },
    branches: {
      eyebrow: "Locations",
      title: "Visit Our Branches",
      text: "Two spaces designed for slow mornings, focused work, and good conversation.",
      open: "Open in Maps",
    },
    contact: {
      eyebrow: "Contact",
      title: "Get In Touch",
      general: "General Inquiries", support: "Support", catering: "Catering & Events",
      whatsapp: "WhatsApp", instagram: "Instagram",
    },
    footer: {
      tag: "Crafted With Intention",
      rights: "© 2026 Quokka Coffee Roasters. All Rights Reserved.",
    },
  },
  ar: {
    nav: { about: "عن كواكا", coffee: "القهوة", catering: "الضيافة", menu: "القائمة", branches: "الفروع", contact: "تواصل" },
    hero: {
      eyebrow: "قهوة مختصة · الرياض",
      title: "صُنعت بإتقان",
      text: "تبدأ القهوة الاستثنائية بالاهتمام بأدق التفاصيل. من اختيار الحبوب والتحميص إلى كل فنجان نقدمه، نركّز على الجودة والاتساق وصنع تجارب لا تُنسى.",
      cta1: "تصفّح القائمة", cta2: "اكتشف الفروع",
    },
    about: {
      eyebrow: "عن كواكا",
      title: "تجربة قهوة عصرية",
      text: "كواكا لتحميص القهوة قائمة على الجودة والحرفية والضيافة المدروسة. كل تفصيل، من مساحاتنا إلى اختياراتنا، مصمم ليخلق تجربة دافئة لا تُنسى.",
      stat1: "أصل واحد", stat1l: "حبوب مختارة بعناية",
      stat2: "تحميص بطيء", stat2l: "بدفعات صغيرة ودقيقة",
      stat3: "فرعان", stat3l: "غرناطة والمروج، الرياض",
    },
    collection: {
      eyebrow: "مجموعة القهوة",
      title: "مجموعة القهوة",
      note: "متوفرة في جميع فروع كواكا.",
      text: "حبوب أحادية المصدر، محمصة بدفعات صغيرة ومعبّأة بعناية.",
    },
    catering: {
      eyebrow: "ضيافة كواكا",
      title: "تجارب قهوة تتجاوز المقهى",
      p1: "من اجتماعات الشركات وورش العمل إلى المناسبات الخاصة، تقدّم ضيافة كواكا تجارب قهوة مختصة بنفس عناية الجودة والتقديم التي تجدها في كل فرع.",
      p2: "تجمع خدمتنا بين قهوة مميزة، خدمة احترافية، وإعدادات مصممة بعناية لخلق تجربة لا تُنسى لضيوفك وفريقك.",
      suitable: "مناسبة لـ",
      items: ["فعاليات الشركات", "الاجتماعات", "ورش العمل", "حفلات الإطلاق", "التجمعات الخاصة", "المناسبات المميزة"],
      cta: "اطلب الضيافة",
    },
    menu: {
      eyebrow: "القائمة",
      title: "اختيارات مدروسة",
      text: "قائمة مركّزة من الإسبريسو الكلاسيكي، قهوة الفلتر، المشروبات الباردة، والمعجنات.",
      cats: ["قهوة ساخنة", "مشروبات باردة", "قهوة فلتر", "حلويات"],
    },
    branches: {
      eyebrow: "الفروع",
      title: "زر فروعنا",
      text: "مساحتان مصمّمتان للصباحات الهادئة، العمل المركّز، والحوارات الجميلة.",
      open: "افتح في الخرائط",
    },
    contact: {
      eyebrow: "تواصل",
      title: "تواصل معنا",
      general: "استفسارات عامة", support: "الدعم", catering: "الضيافة والفعاليات",
      whatsapp: "واتساب", instagram: "إنستقرام",
    },
    footer: {
      tag: "صُنعت بإتقان",
      rights: "© 2026 كواكا لتحميص القهوة. جميع الحقوق محفوظة.",
    },
  },
} as const;

export const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "en",
  setLang: () => {},
});
export const useLang = () => useContext(LangContext);
export const useT = () => translations[useLang().lang];
