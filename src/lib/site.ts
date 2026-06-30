export const WA_NUMBER = "9198564965086";
export const TEL = "+918564965086";

export function wa(text: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const GENERAL_WA = wa(
  "Namaste, mujhe Local Marketing wala ke services ke bare me jankari chahiye.",
);

export type MediaKind = "audio" | "video";

export interface Plan {
  id: string;
  title: string;
  tagline: string;
  price: string;
  desc: string;
}

export const audioPlans: Plan[] = [
  {
    id: "Audio Plan 1",
    title: "Audio Plan 1",
    tagline: "Basic promotional audio for single offer",
    price: "₹499",
    desc: "Ek simple, clear audio jingle jo aapke dukaan ka naam, location aur ek main offer highlight karta hai. Local loudspeaker ya social media me use kar sakte hain.",
  },
  {
    id: "Audio Plan 2",
    title: "Audio Plan 2",
    tagline: "Multi-offer audio with branding tone",
    price: "₹649",
    desc: "Thoda detailed audio jingle jisme aapke brand ka tone, 2–3 offers aur frequent repeat ke liye suitable script hota hai. Local campaigns ke liye best.",
  },
  {
    id: "Audio Plan 3",
    title: "Audio Plan 3",
    tagline: "Premium audio with custom scripting",
    price: "₹999",
    desc: "High-quality audio jingle with custom script, professional tone aur clear call-to-action. Branding campaigns ke liye premium choice.",
  },
];

export const videoPlans: Plan[] = [
  {
    id: "Video Plan 1",
    title: "Video Plan 1",
    tagline: "Short promotional video for single offer",
    price: "₹599",
    desc: "Ek quick, attractive video jisme aapke brand ka naam, offer aur basic visuals honge. Social media aur status ke liye perfect.",
  },
  {
    id: "Video Plan 2",
    title: "Video Plan 2",
    tagline: "Multi-service branding video",
    price: "₹799",
    desc: "Thoda length wala video jisme multiple services, offers aur visuals cover kiye jaate hain. Detailed promotion ke liye ideal.",
  },
  {
    id: "Video Plan 3",
    title: "Video Plan 3",
    tagline: "Premium customized brand film",
    price: "₹1149",
    desc: "High-impact customized video, strong branding, clear messaging aur professional editing ke saath. Launch aur sale campaigns ke liye best.",
  },
];

export interface Pkg {
  title: string;
  price: string;
  subtitle: string;
  features: string[];
  popular?: boolean;
  bookText: string;
}

export const packages: Pkg[] = [
  {
    title: "Graphics 365 Days",
    price: "₹999",
    subtitle: "Approx. ₹3 per day",
    features: [
      "Simple daily / regular graphics for offers & updates",
      "Festival & seasonal creatives for your local audience",
      "Social media friendly designs (WhatsApp, Facebook, Instagram)",
    ],
    bookText: "Namaste, mujhe Graphics 365 Days package lena hai.",
  },
  {
    title: "Graphics 365 Days + 6 Customized Videos",
    price: "₹5999",
    subtitle: "Consistent graphics + 6 powerful video campaigns",
    popular: true,
    features: [
      "All benefits of Graphics 365 Days",
      "6 customized promotional videos spread across the year",
      "Festive, launch, sale & branding-focused video assets",
      "Local-market focused messaging for better conversion",
    ],
    bookText: "Namaste, mujhe 6 Customized Videos walā yearly package lena hai.",
  },
  {
    title: "Graphics 365 + 12 Videos + Marketing Platform Building",
    price: "₹12999",
    subtitle: "Advanced yearly branding & platform setup",
    features: [
      "365 days of graphics for regular branding",
      "12 customized promotional videos (monthly or campaign-wise)",
      "Basic marketing platform building (pages, profiles, content setup)",
      "Ideal for institutes, clinics, showrooms & agencies",
    ],
    bookText:
      "Namaste, mujhe Advanced Yearly Package (Graphics + 12 Videos + Platform Building) lena hai.",
  },
];

export const faqs = [
  {
    q: "Booking process kaise kaam karta hai?",
    a: "Aap WhatsApp par plan select karke message bhejiye. Ham details share karenge, requirement le kar script / concept finalize karenge, phir payment ke baad delivery timeline bata denge.",
  },
  {
    q: "Audio & video me language kya hogi?",
    a: "Mostly Hindi aur local-friendly tone use kiya jata hai, jisme aapki audience easily connect kar sake. Agar aap chaho to mix-language bhi possible hai.",
  },
  {
    q: "Yearly packages me kya-kya include hota hai?",
    a: "Selected package ke hisaab se graphics, videos aur basic marketing platform setup include hota hai. Exact scope WhatsApp discussion me clear kiya jata hai.",
  },
  {
    q: "Future services – website, software & performance marketing?",
    a: "Aage chal kar website, basic software solutions aur performance marketing bhi add kiye ja sakte hain, jisse aapke business ka digital presence aur strong ho.",
  },
];