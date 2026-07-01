export const SITE_NAME = "Local Marketing Pro";
export const SERVICE_AREA = "Rampur, Jaunpur, Uttar Pradesh";
export const WA_NUMBER = "918564965086";
export const TEL = "+918564965086";

export function wa(text: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const GENERAL_WA = wa(
  "Hello, I would like to learn more about Local Marketing Pro services.",
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
    tagline: "Basic promotional audio for a single offer",
    price: "Rs. 499",
    desc: "A clear promotional audio message that highlights your business name, location, and primary offer. Suitable for local announcements, WhatsApp sharing, and social media campaigns.",
  },
  {
    id: "Audio Plan 2",
    title: "Audio Plan 2",
    tagline: "Multi-offer audio with a branded tone",
    price: "Rs. 649",
    desc: "A more detailed promotional audio message with your brand tone, two to three offers, and a script designed for repeated campaign use.",
  },
  {
    id: "Audio Plan 3",
    title: "Audio Plan 3",
    tagline: "Premium audio with custom scripting",
    price: "Rs. 999",
    desc: "A high-quality audio promotion with a custom script, professional delivery, and a clear call to action for brand-focused campaigns.",
  },
];

export const videoPlans: Plan[] = [
  {
    id: "Video Plan 1",
    title: "Video Plan 1",
    tagline: "Short promotional video for a single offer",
    price: "Rs. 599",
    desc: "A concise promotional video featuring your brand name, offer, and essential visuals. Ideal for social media posts and WhatsApp status updates.",
  },
  {
    id: "Video Plan 2",
    title: "Video Plan 2",
    tagline: "Multi-service branding video",
    price: "Rs. 799",
    desc: "A detailed promotional video that presents multiple services, offers, and visuals for stronger local brand communication.",
  },
  {
    id: "Video Plan 3",
    title: "Video Plan 3",
    tagline: "Premium customized brand video",
    price: "Rs. 1149",
    desc: "A high-impact customized video with strong branding, clear messaging, and professional editing for launches, sales, and awareness campaigns.",
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
    price: "Rs. 999",
    subtitle: "Approx. Rs. 3 per day",
    features: [
      "Regular graphics for offers, updates, and business announcements",
      "Festival and seasonal creatives for your local audience",
      "Social-media-ready designs for WhatsApp, Facebook, and Instagram",
    ],
    bookText: "Hello, I would like to book the Graphics 365 Days package.",
  },
  {
    title: "Graphics 365 Days + 6 Customized Videos",
    price: "Rs. 5999",
    subtitle: "Consistent graphics plus six focused video campaigns",
    popular: true,
    features: [
      "All benefits of the Graphics 365 Days package",
      "Six customized promotional videos scheduled across the year",
      "Festive, launch, sale, and brand-focused video assets",
      "Local-market messaging designed for stronger customer response",
    ],
    bookText: "Hello, I would like to book the yearly package with 6 customized videos.",
  },
  {
    title: "Graphics 365 + 12 Videos + Marketing Platform Setup",
    price: "Rs. 12999",
    subtitle: "Advanced yearly branding and platform setup",
    features: [
      "365 days of graphics for consistent brand presence",
      "Twelve customized promotional videos for monthly or campaign-based promotion",
      "Basic marketing platform setup, including pages, profiles, and content structure",
      "Ideal for institutes, clinics, showrooms, agencies, and service businesses",
    ],
    bookText:
      "Hello, I would like to book the advanced yearly package with graphics, 12 videos, and marketing platform setup.",
  },
];

export const faqs = [
  {
    q: "How does the booking process work?",
    a: "Select a plan and contact us on WhatsApp. We will collect your requirements, finalize the script or concept, confirm the payment process, and share the delivery timeline.",
  },
  {
    q: "What language is used for audio and video content?",
    a: "We create clear, professional content based on your target audience. English, Hindi, or bilingual messaging can be planned during the requirement discussion.",
  },
  {
    q: "What is included in the yearly packages?",
    a: "Depending on the selected package, yearly plans include graphics, videos, and basic marketing platform setup. The final scope is confirmed before production begins.",
  },
  {
    q: "Do you offer website, software, and performance marketing services?",
    a: "These services are planned as future offerings to help businesses strengthen their complete digital presence.",
  },
];
