import type { IconName } from "@/components/ui/AppIcon";
import { locations } from "@/lib/content";

export type LocationSlug = (typeof locations)[number]["slug"];

type Feature = {
  icon: IconName;
  label: string;
};

type Placement = {
  title: string;
  text: string;
  image: string;
  position?: string;
};

type UseCase = {
  title: string;
  text: string;
  image: string;
};

type Result = {
  icon: IconName;
  value: string;
  label: string;
};

export type LocationPageContent = {
  slug: LocationSlug;
  name: string;
  cardImage: string;
  heroImage: string;
  eyebrow: string;
  title: string;
  intro: string;
  highlights: readonly Feature[];
  whyTitle: string;
  whyText: string;
  reasons: readonly Feature[];
  promoEyebrow: string;
  promoTitle: string;
  promoText: string;
  promoImage: string;
  howTitle: string;
  howText: string;
  placementsTitle: string;
  placementsText: string;
  placements: readonly Placement[];
  useCasesTitle?: string;
  useCasesText?: string;
  useCases?: readonly UseCase[];
  resultsTitle: string;
  results: readonly Result[];
  quote: string;
  quoteBy: string;
  quoteImage: string;
  ctaTitle: string;
  ctaText: string;
  ctaPoints: readonly Feature[];
};

const howSteps = [
  {
    no: "1",
    title: "Scan",
    text: "Quick face scan to start",
    image: "/images/location-pages/step-scan.jpg",
    width: 1152,
    height: 864,
  },
  {
    no: "2",
    title: "Analyse",
    text: "AI analyses your skin in seconds",
    image: "/images/location-pages/step-analyse.jpg",
    width: 1152,
    height: 864,
  },
  {
    no: "3",
    title: "Recommend",
    text: "Get personalised product recommendations",
    image: "/images/location-pages/step-recommend.jpg",
    width: 1152,
    height: 864,
  },
  {
    no: "4",
    title: "Purchase",
    text: "Buy instantly from the vending machine",
    image: "/images/location-pages/step-purchase.jpg",
    width: 1152,
    height: 864,
  },
] as const;

export const locationHowSteps = howSteps;

function ctaPoints(last: string): Feature[] {
  return [
    { icon: "eco", label: "Flexible deployment options" },
    { icon: "sparkle", label: "Custom branding opportunities" },
    { icon: "support", label: "Supported by LeafWater team" },
    { icon: "chart", label: last },
  ];
}

export const locationPages: Record<LocationSlug, LocationPageContent> = {
  airports: {
    slug: "airports",
    name: "Airports",
    cardImage: "/images/airport.jpg",
    heroImage: "/images/location-pages/airport-hero.jpg",
    eyebrow: "For Airports",
    title: "Elevate Passenger Experience with BeautyPod",
    intro:
      "Bring an innovative, AI-powered skincare kiosk to your airport and offer travellers a personalised beauty experience. Drive engagement, boost non-aeronautical revenue and enhance your airport's retail offerings.",
    highlights: [
      { icon: "chart", label: "Increases passenger spending" },
      { icon: "bag", label: "Enhances traveller experience" },
      { icon: "users", label: "Drives retail revenue" },
      { icon: "gem", label: "Premium airport retail solution" },
    ],
    whyTitle: "Why Airports Choose BeautyPod",
    whyText:
      "BeautyPod creates a unique, value-added retail experience for travellers while helping airport operators increase non-aeronautical revenue.",
    reasons: [
      { icon: "plane", label: "Enhances passenger experience" },
      { icon: "bag", label: "Generates additional retail revenue" },
      { icon: "users", label: "Attracts international travellers" },
      { icon: "clock", label: "24/7 automated retail" },
      { icon: "support", label: "Low maintenance & easy deployment" },
    ],
    promoEyebrow: "A smarter",
    promoTitle: "Skincare Destination for Modern Airports",
    promoText:
      "Give your passengers access to premium skincare brands with AI-powered recommendations — right at the terminal.",
    promoImage: "/images/location-pages/airport-case-study.jpg",
    howTitle: "How BeautyPod Works for Travellers",
    howText: "A quick, engaging and personalised experience in just a few simple steps.",
    placementsTitle: "Ideal Placement Locations in Airports",
    placementsText:
      "BeautyPod can be easily installed in high-visibility areas across airport terminals.",
    placements: [
      {
        title: "Departure Terminals",
        text: "Engage passengers while they wait",
        image: "/images/location-pages/place-departure.jpg",
      },
      {
        title: "Arrival Halls",
        text: "Welcome passengers with a premium experience",
        image: "/images/location-pages/place-arrival.jpg",
      },
      {
        title: "Transit & Duty Free Areas",
        text: "Capture high-spending international travellers",
        image: "/images/location-pages/place-dutyfree.jpg",
      },
      {
        title: "Premium Lounge Areas",
        text: "A quieter stop for travellers between flights",
        image: "/images/location-pages/place-lounge.jpg",
      },
    ],
    useCasesTitle: "Skincare for Every Kind of Journey",
    useCasesText: "Stock BeautyPod for the way passengers actually shop, from travel minis to premium sets.",
    useCases: [
      {
        title: "Travel Essentials",
        text: "Compact routines that fit a carry-on",
        image: "/images/location-pages/usecase-travel.jpg",
      },
      {
        title: "Seasonal Campaigns",
        text: "Fresh edits for holidays and peak travel",
        image: "/images/location-pages/usecase-seasonal.jpg",
      },
      {
        title: "Luxury & Premium Brands",
        text: "Elevated products for international travellers",
        image: "/images/location-pages/usecase-luxury.jpg",
      },
      {
        title: "Gift Kits & Combos",
        text: "Ready-to-give sets for the journey home",
        image: "/images/location-pages/usecase-gifts.jpg",
      },
    ],
    resultsTitle: "Deliver Real Results for Airport Partners",
    results: [
      { icon: "users", value: "+35%", label: "Increase in retail revenue" },
      { icon: "chart", value: "+50%", label: "Passenger engagement" },
      { icon: "bag", value: "Premium", label: "Non-aeronautical revenue source" },
      { icon: "gem", value: "Unique", label: "& innovative airport retail solution" },
    ],
    quote:
      "BeautyPod has been a great addition to our airport. It creates a unique offering for our passengers and enhances the overall travel experience.",
    quoteBy: "— Airport Operations Manager, International Airport, India",
    quoteImage: "/images/location-pages/airport-case-study.jpg",
    ctaTitle: "Bring BeautyPod to Your Airport",
    ctaText:
      "Join leading airports in offering an innovative AI skincare retail experience. Book a demo today and see how BeautyPod can add value to your terminal.",
    ctaPoints: ctaPoints("Proven results in high-traffic locations"),
  },
  malls: {
    slug: "malls",
    name: "Malls",
    cardImage: "/images/mall.jpg",
    heroImage: "/images/hero-mall.jpg",
    eyebrow: "For Malls",
    title: "Turn Footfall into a Personalised Beauty Experience",
    intro:
      "Place BeautyPod in your mall and give shoppers a quick AI skin scan, tailored product picks and an instant purchase. Increase dwell time, add a premium retail moment and open a new revenue stream on the shop floor.",
    highlights: [
      { icon: "users", label: "Captures high footfall" },
      { icon: "bag", label: "Drives impulse purchase" },
      { icon: "chart", label: "Adds retail revenue" },
      { icon: "gem", label: "Premium mall experience" },
    ],
    whyTitle: "Why Malls Choose BeautyPod",
    whyText:
      "BeautyPod gives malls a compact, self-serve beauty destination that keeps shoppers engaged and turns browsing into a sale.",
    reasons: [
      { icon: "mall", label: "Engages shoppers between stores" },
      { icon: "bag", label: "Converts footfall into sales" },
      { icon: "users", label: "Appeals to a wide audience" },
      { icon: "clock", label: "24/7 automated retail" },
      { icon: "support", label: "Low maintenance & easy deployment" },
      { icon: "gem", label: "Premium brand experience" },
    ],
    promoEyebrow: "A smarter",
    promoTitle: "Beauty Stop for Modern Malls",
    promoText:
      "Give shoppers access to premium skincare brands with AI-powered recommendations — right on the mall floor.",
    promoImage: "/images/mall.jpg",
    howTitle: "How BeautyPod Works for Shoppers",
    howText: "A quick, engaging and personalised experience in just a few simple steps.",
    placementsTitle: "Ideal Placement Locations in Malls",
    placementsText: "BeautyPod can be installed in the highest-visibility points across the mall.",
    placements: [
      {
        title: "Main Atrium",
        text: "Maximum visibility at the heart of the mall",
        image: "/images/location-pages/mall-atrium.jpg",
      },
      {
        title: "Near Beauty & Fashion Anchors",
        text: "Capture shoppers already in a buying mood",
        image: "/images/location-pages/mall-beauty.jpg",
      },
      {
        title: "Food Court Edges",
        text: "Engage guests while they wait",
        image: "/images/location-pages/mall-foodcourt.jpg",
      },
      {
        title: "Entrance Plazas",
        text: "A memorable first stop for visitors",
        image: "/images/location-pages/mall-entrance.jpg",
      },
      {
        title: "Family & Entertainment Zones",
        text: "Reach shoppers during longer visits",
        image: "/images/location-pages/mall-family.jpg",
      },
    ],
    resultsTitle: "Deliver Real Results for Mall Partners",
    results: [
      { icon: "users", value: "Higher", label: "Shopper engagement" },
      { icon: "chart", value: "New", label: "Non-store revenue" },
      { icon: "bag", value: "Premium", label: "Beauty destination on the floor" },
      { icon: "gem", value: "Compact", label: "Footprint with high visibility" },
    ],
    quote:
      "BeautyPod gives our visitors something they cannot get in a regular store — a personal recommendation and the product in the same moment.",
    quoteBy: "— Mall Retail Manager",
    quoteImage: "/images/cta-woman.jpg",
    ctaTitle: "Bring BeautyPod to Your Mall",
    ctaText:
      "Join malls that want a smarter beauty stop for their shoppers. Book a demo today and see how BeautyPod can add value to your floor.",
    ctaPoints: ctaPoints("Proven results in high-footfall retail"),
  },
  hotels: {
    slug: "hotels",
    name: "Hotels",
    cardImage: "/images/hotel.jpg",
    heroImage: "/images/hotel.jpg",
    eyebrow: "For Hotels & Resorts",
    title: "Premium Skincare Experience for Your Guests",
    intro:
      "Bring BeautyPod to your hotel or resort and offer your guests a personalised skincare experience with AI skin analysis, premium products and convenient, contactless shopping.",
    highlights: [
      { icon: "gem", label: "Enhances guest experience" },
      { icon: "chart", label: "Generates additional revenue" },
      { icon: "users", label: "Builds brand image" },
      { icon: "star", label: "Perfect for luxury and business hotels" },
    ],
    whyTitle: "Why Hotels Choose BeautyPod",
    whyText:
      "BeautyPod helps hotels and resorts create a unique and memorable experience for their guests while generating additional revenue and enhancing their brand image.",
    reasons: [
      { icon: "hotel", label: "Delights your guests" },
      { icon: "chart", label: "Creates new revenue opportunities" },
      { icon: "heart", label: "Enhances brand value" },
      { icon: "users", label: "Attracts domestic & international guests" },
      { icon: "clock", label: "24/7 automated retail" },
      { icon: "gem", label: "Perfect for luxury & business hotels" },
    ],
    promoEyebrow: "A premium",
    promoTitle: "Skincare Experience for Your Guests",
    promoText:
      "Give your guests access to premium skincare brands with AI-powered recommendations — anytime during their stay.",
    promoImage: "/images/hotel.jpg",
    howTitle: "How BeautyPod Works in Hotels",
    howText: "A simple, engaging and personalised experience for every guest.",
    placementsTitle: "Ideal Placement Locations in Hotels",
    placementsText:
      "BeautyPod can be installed in high-visibility areas across your hotel or resort.",
    placements: [
      {
        title: "Hotel Lobby",
        text: "Welcome guests with a premium experience",
        image: "/images/location-pages/hotel-lobby.jpg",
      },
      {
        title: "Spa & Wellness Centre",
        text: "Complement wellness and self-care services",
        image: "/images/location-pages/hotel-spa.jpg",
      },
      {
        title: "Pool Area",
        text: "Perfect for resort and vacation guests",
        image: "/images/location-pages/hotel-pool.jpg",
      },
      {
        title: "Conference & Event Areas",
        text: "Ideal for business travellers and event attendees",
        image: "/images/location-pages/hotel-conference.jpg",
      },
      {
        title: "Executive Lounge",
        text: "Exclusive access for premium guests",
        image: "/images/location-pages/hotel-lounge.jpg",
      },
    ],
    resultsTitle: "Deliver Real Business Impact",
    results: [
      { icon: "users", value: "+40%", label: "Guest satisfaction" },
      { icon: "chart", value: "+25%", label: "Additional revenue" },
      { icon: "gem", value: "Premium", label: "Brand positioning" },
      { icon: "star", value: "Unique", label: "Differentiation among hotels" },
    ],
    quote:
      "BeautyPod has been a fantastic addition to our hotel. Our guests love the personalised skincare experience, and it has created a new revenue stream for us.",
    quoteBy: "— Hotel General Manager, Luxury Resort, Goa",
    quoteImage: "/images/cta-woman.jpg",
    ctaTitle: "Let's Bring BeautyPod to Your Hotel",
    ctaText:
      "Join leading hotels and resorts in offering an innovative AI skincare experience. Book a demo today and see how BeautyPod can add value to your property.",
    ctaPoints: ctaPoints("Proven results in guest satisfaction"),
  },
  "retail-stores": {
    slug: "retail-stores",
    name: "Retail Stores",
    cardImage: "/images/retail-store.jpg",
    heroImage: "/images/retail-store.jpg",
    eyebrow: "For Retail Stores",
    title: "A Smarter Beauty Counter Inside Your Store",
    intro:
      "Add BeautyPod to your retail floor and let customers scan, get a personalised routine and buy immediately. It works as a self-serve beauty advisor that lifts basket size without extra staff.",
    highlights: [
      { icon: "bag", label: "Increases basket size" },
      { icon: "sparkle", label: "Personalised advice" },
      { icon: "chart", label: "More product sales" },
      { icon: "gem", label: "Premium in-store experience" },
    ],
    whyTitle: "Why Retail Stores Choose BeautyPod",
    whyText:
      "BeautyPod helps stores offer guided skincare without a staffed counter, while keeping genuine branded products ready to vend.",
    reasons: [
      { icon: "store", label: "Fits beside existing beauty aisles" },
      { icon: "sparkle", label: "Guides unsure shoppers" },
      { icon: "bag", label: "Turns advice into a sale" },
      { icon: "clock", label: "Serves customers all day" },
      { icon: "support", label: "Easy to restock and support" },
      { icon: "gem", label: "Elevates the store experience" },
    ],
    promoEyebrow: "A smarter",
    promoTitle: "Beauty Counter for Modern Stores",
    promoText:
      "Give shoppers a personalised routine and the products to match — without adding a staffed beauty desk.",
    promoImage: "/images/retail-store.jpg",
    howTitle: "How BeautyPod Works in Retail Stores",
    howText: "A simple, guided path from skin scan to purchase on the shop floor.",
    placementsTitle: "Ideal Placement Locations in Retail Stores",
    placementsText: "BeautyPod sits neatly in the parts of the store where beauty decisions happen.",
    placements: [
      {
        title: "Beauty Aisle End",
        text: "Meet shoppers where they already browse",
        image: "/images/location-pages/retail-aisle.jpg",
      },
      {
        title: "Store Entrance",
        text: "A high-visibility welcome moment",
        image: "/images/location-pages/retail-entrance.jpg",
      },
      {
        title: "Checkout Zone",
        text: "Capture last-minute self-care buys",
        image: "/images/location-pages/retail-checkout.jpg",
      },
      {
        title: "Wellness Corner",
        text: "Pair skincare with health retail",
        image: "/images/location-pages/retail-wellness.jpg",
      },
      {
        title: "Promotional Bay",
        text: "Feature seasonal brand campaigns",
        image: "/images/location-pages/retail-promo.jpg",
      },
    ],
    resultsTitle: "Deliver Real Results for Retail Partners",
    results: [
      { icon: "bag", value: "Higher", label: "Skincare conversion" },
      { icon: "users", value: "Less", label: "Dependence on counter staff" },
      { icon: "gem", value: "Premium", label: "Brand presentation" },
      { icon: "store", value: "New", label: "Reason to visit the store" },
    ],
    quote:
      "Customers who used to walk past the beauty shelf now stop, scan and leave with the right product.",
    quoteBy: "— Store Operations Lead",
    quoteImage: "/images/hero-woman.jpg",
    ctaTitle: "Bring BeautyPod to Your Store",
    ctaText:
      "Give your floor a self-serve beauty advisor. Book a demo today and see how BeautyPod fits beside the brands you already sell.",
    ctaPoints: ctaPoints("Proven results in retail conversion"),
  },
  pharmacies: {
    slug: "pharmacies",
    name: "Pharmacies",
    cardImage: "/images/pharmacy.jpg",
    heroImage: "/images/pharmacy.jpg",
    eyebrow: "For Pharmacies",
    title: "Trusted Skincare Advice at the Pharmacy",
    intro:
      "Bring BeautyPod into your pharmacy so customers can check their skin, see suitable products and buy them on the spot. It adds a modern wellness service next to the products people already trust you for.",
    highlights: [
      { icon: "pharmacy", label: "Trusted wellness setting" },
      { icon: "sparkle", label: "Guided product choice" },
      { icon: "bag", label: "Instant pickup" },
      { icon: "chart", label: "Extra front-of-store revenue" },
    ],
    whyTitle: "Why Pharmacies Choose BeautyPod",
    whyText:
      "BeautyPod helps pharmacies offer personalised skincare with a clear, self-serve experience that sits naturally beside health and beauty.",
    reasons: [
      { icon: "pharmacy", label: "Complements health retail" },
      { icon: "sparkle", label: "Helps customers choose with confidence" },
      { icon: "bag", label: "Sells the recommended product immediately" },
      { icon: "clock", label: "Available beyond counselling hours" },
      { icon: "support", label: "Low maintenance & easy deployment" },
      { icon: "users", label: "Serves a wide range of skin needs" },
    ],
    promoEyebrow: "A clearer",
    promoTitle: "Way to Choose Skincare",
    promoText:
      "Give customers a personalised starting point and the product in the same visit — right inside the pharmacy.",
    promoImage: "/images/pharmacy.jpg",
    howTitle: "How BeautyPod Works in Pharmacies",
    howText: "A simple, private and personalised experience beside the health and beauty aisle.",
    placementsTitle: "Ideal Placement Locations in Pharmacies",
    placementsText: "BeautyPod fits the spots where customers already pause to choose care products.",
    placements: [
      {
        title: "Health & Beauty Aisle",
        text: "Next to the products customers compare",
        image: "/images/location-pages/pharmacy-aisle.jpg",
      },
      {
        title: "Front of Store",
        text: "High visibility for walk-in traffic",
        image: "/images/location-pages/pharmacy-front.jpg",
      },
      {
        title: "Waiting Area",
        text: "Useful while prescriptions are prepared",
        image: "/images/location-pages/pharmacy-waiting.jpg",
      },
      {
        title: "Wellness Corner",
        text: "Part of a broader self-care zone",
        image: "/images/location-pages/pharmacy-wellness.jpg",
      },
      {
        title: "Consultation Desk Edge",
        text: "A guided first step before they ask for help",
        image: "/images/location-pages/pharmacy-consult.jpg",
      },
    ],
    resultsTitle: "Deliver Real Results for Pharmacy Partners",
    results: [
      { icon: "sparkle", value: "Clearer", label: "Product choices" },
      { icon: "bag", value: "Higher", label: "Skincare attachment" },
      { icon: "pharmacy", value: "Modern", label: "Pharmacy service" },
      { icon: "support", value: "Staff-light", label: "Compact deployment" },
    ],
    quote:
      "BeautyPod gives our customers a clear starting point for skincare, then lets them take the product home the same day.",
    quoteBy: "— Pharmacy Owner",
    quoteImage: "/images/cta-woman.jpg",
    ctaTitle: "Bring BeautyPod to Your Pharmacy",
    ctaText:
      "Add a modern skincare service your customers can use on their own. Book a demo today and see how BeautyPod fits your store.",
    ctaPoints: ctaPoints("Proven results in health retail"),
  },
  "corporate-campuses": {
    slug: "corporate-campuses",
    name: "Corporate Campuses",
    cardImage: "/images/corporate.jpg",
    heroImage: "/images/corporate.jpg",
    eyebrow: "For Corporates",
    title: "Wellness at Work with BeautyPod",
    intro:
      "Bring BeautyPod to your corporate office and offer your employees a personalised skincare experience with AI skin analysis, product recommendations and instant purchases. Boost employee wellness, engagement and create a healthier, more productive workplace.",
    highlights: [
      { icon: "chart", label: "Enhances employee wellness" },
      { icon: "bag", label: "Increases workplace engagement" },
      { icon: "heart", label: "Builds a healthier workforce" },
      { icon: "gem", label: "Premium workplace amenity" },
    ],
    whyTitle: "Why Corporates Choose BeautyPod",
    whyText:
      "BeautyPod helps organisations create a unique employee wellness experience while generating additional revenue and promoting a healthy, confident workforce.",
    reasons: [
      { icon: "heart", label: "Supports employee wellness" },
      { icon: "chart", label: "Increase workplace engagement" },
      { icon: "users", label: "Attracts & retains talent" },
      { icon: "clock", label: "24/7 automated retail" },
      { icon: "support", label: "Low maintenance & easy deployment" },
      { icon: "gift", label: "Perfect for modern workplaces" },
    ],
    promoEyebrow: "A healthier,",
    promoTitle: "Happier Workplace",
    promoText:
      "Give your employees access to premium skincare brands with AI-powered recommendations — right at your office.",
    promoImage: "/images/corporate.jpg",
    howTitle: "How BeautyPod Works in Corporates",
    howText: "A simple, quick and personalised experience for every employee.",
    placementsTitle: "Ideal Placement Locations in Corporates",
    placementsText:
      "BeautyPod can be easily installed in key areas across your office premises.",
    placements: [
      {
        title: "Reception Area",
        text: "Create a great first impression for visitors and employees",
        image: "/images/location-pages/corp-reception.jpg",
      },
      {
        title: "Breakout Zones",
        text: "Engage employees during their breaks",
        image: "/images/location-pages/corp-breakout.jpg",
      },
      {
        title: "Cafeteria",
        text: "High visibility and maximum employee footfall",
        image: "/images/location-pages/corp-cafeteria.jpg",
      },
      {
        title: "Wellness Room",
        text: "Complement your health & wellness initiatives",
        image: "/images/location-pages/corp-wellness.jpg",
      },
      {
        title: "Fitness Centre",
        text: "Support employee wellness and self-care",
        image: "/images/location-pages/corp-fitness.jpg",
      },
    ],
    resultsTitle: "Deliver Real Business Impact",
    results: [
      { icon: "users", value: "+40%", label: "Employee engagement" },
      { icon: "chart", value: "+25%", label: "Wellness program participation" },
      { icon: "heart", value: "Healthier", label: "& happier workforce" },
      { icon: "gem", value: "Premium", label: "Workplace amenity" },
    ],
    quote:
      "BeautyPod has been a fantastic addition to our office. Our employees love the personalised skin analysis and convenient access to premium skincare products. It has truly enhanced our wellness initiatives.",
    quoteBy: "— HR Manager, Leading IT Company, Hyderabad",
    quoteImage: "/images/hero-woman.jpg",
    ctaTitle: "Bring BeautyPod to Your Corporate Office",
    ctaText:
      "Join leading organisations in offering an innovative AI skincare experience. Book a demo today and see how BeautyPod can add value to your workplace.",
    ctaPoints: ctaPoints("Proven results in workplace wellness"),
  },
  "gyms-wellness": {
    slug: "gyms-wellness",
    name: "Gyms & Wellness Centres",
    cardImage: "/images/gym.jpg",
    heroImage: "/images/gym.jpg",
    eyebrow: "For Gyms & Wellness Centres",
    title: "Skincare That Fits a Wellness Routine",
    intro:
      "Place BeautyPod in your gym or wellness centre so members can scan after a workout, get a routine for their skin and buy what they need before they leave. It extends self-care beyond the training floor.",
    highlights: [
      { icon: "gym", label: "Fits a wellness routine" },
      { icon: "heart", label: "Supports member self-care" },
      { icon: "bag", label: "Convenient post-workout buy" },
      { icon: "gem", label: "Premium member amenity" },
    ],
    whyTitle: "Why Gyms & Wellness Centres Choose BeautyPod",
    whyText:
      "BeautyPod adds a personalised skincare moment to spaces members already use for health, recovery and confidence.",
    reasons: [
      { icon: "gym", label: "Meets members where they train" },
      { icon: "heart", label: "Complements wellness programmes" },
      { icon: "bag", label: "A useful add-on before they leave" },
      { icon: "clock", label: "Open whenever the centre is open" },
      { icon: "support", label: "Low maintenance & easy deployment" },
      { icon: "gem", label: "A premium member benefit" },
    ],
    promoEyebrow: "A healthier routine",
    promoTitle: "Self-Care After the Workout",
    promoText:
      "Give members premium skincare with AI-powered recommendations — before they head home.",
    promoImage: "/images/gym.jpg",
    howTitle: "How BeautyPod Works in Wellness Centres",
    howText: "A quick, personalised stop that fits around a class, a session or a recovery visit.",
    placementsTitle: "Ideal Placement Locations in Gyms & Wellness Centres",
    placementsText: "BeautyPod belongs where members already pause between training and leaving.",
    placements: [
      {
        title: "Reception",
        text: "A visible welcome for every member",
        image: "/images/location-pages/gym-reception.jpg",
      },
      {
        title: "Changing Room Approach",
        text: "Right after a session",
        image: "/images/location-pages/gym-changing.jpg",
      },
      {
        title: "Juice & Recovery Bar",
        text: "While members cool down",
        image: "/images/location-pages/gym-juice.jpg",
      },
      {
        title: "Studio Lobby",
        text: "Between classes",
        image: "/images/location-pages/gym-studio.jpg",
      },
      {
        title: "Wellness Suite",
        text: "Alongside spa and recovery services",
        image: "/images/location-pages/gym-suite.jpg",
      },
    ],
    resultsTitle: "Deliver Real Results for Wellness Partners",
    results: [
      { icon: "users", value: "Higher", label: "Member engagement" },
      { icon: "bag", value: "New", label: "Retail amenity" },
      { icon: "heart", value: "Stronger", label: "Wellness positioning" },
      { icon: "gym", value: "Self-serve", label: "No extra trainers needed" },
    ],
    quote:
      "Members treat it as part of their routine — a quick scan, then the products that match how their skin actually feels.",
    quoteBy: "— Wellness Centre Manager",
    quoteImage: "/images/cta-woman.jpg",
    ctaTitle: "Bring BeautyPod to Your Wellness Centre",
    ctaText:
      "Add a skincare moment members can use on their way out. Book a demo today and see how BeautyPod fits your space.",
    ctaPoints: ctaPoints("Proven results in member wellness"),
  },
  universities: {
    slug: "universities",
    name: "Universities",
    cardImage: "/images/university.jpg",
    heroImage: "/images/university.jpg",
    eyebrow: "For Universities",
    title: "Personalised Skincare for Campus Life",
    intro:
      "Bring BeautyPod to campus so students and staff can get a quick skin read, a simple routine and the products in one stop. It is built for busy, high-footfall spaces between classes.",
    highlights: [
      { icon: "university", label: "Built for campus life" },
      { icon: "sparkle", label: "Simple, personal advice" },
      { icon: "bag", label: "Instant pickup" },
      { icon: "users", label: "Reaches students and staff" },
    ],
    whyTitle: "Why Universities Choose BeautyPod",
    whyText:
      "BeautyPod gives campuses a modern self-care service that is easy to find, quick to use and relevant to everyday student life.",
    reasons: [
      { icon: "university", label: "Lives where students already are" },
      { icon: "sparkle", label: "Makes skincare easy to start" },
      { icon: "bag", label: "Buy without a trip off campus" },
      { icon: "clock", label: "Available through the day" },
      { icon: "support", label: "Low maintenance & easy deployment" },
      { icon: "users", label: "Useful for students and staff" },
    ],
    promoEyebrow: "A campus essential",
    promoTitle: "Skincare Between Classes",
    promoText:
      "Give students and staff premium skincare with AI-powered recommendations — without leaving campus.",
    promoImage: "/images/university.jpg",
    howTitle: "How BeautyPod Works on Campus",
    howText: "A quick, personalised stop that fits between lectures, study and sport.",
    placementsTitle: "Ideal Placement Locations on Campus",
    placementsText: "BeautyPod works best in the shared spaces students already pass through every day.",
    placements: [
      {
        title: "Student Union",
        text: "The busiest shared space on campus",
        image: "/images/location-pages/uni-union.jpg",
      },
      {
        title: "Library Entrance",
        text: "Capture people between study sessions",
        image: "/images/location-pages/uni-library.jpg",
      },
      {
        title: "Hostel Common Areas",
        text: "Convenient for everyday routines",
        image: "/images/location-pages/uni-hostel.jpg",
      },
      {
        title: "Sports Complex",
        text: "After training and activity",
        image: "/images/location-pages/uni-sports.jpg",
      },
      {
        title: "Health Centre Approach",
        text: "A natural self-care companion",
        image: "/images/location-pages/uni-health.jpg",
      },
    ],
    resultsTitle: "Deliver Real Results for Campus Partners",
    results: [
      { icon: "users", value: "Everyday", label: "Student engagement" },
      { icon: "university", value: "Useful", label: "Campus amenity" },
      { icon: "bag", value: "Compact", label: "Footprint on busy sites" },
      { icon: "support", value: "Self-serve", label: "Retail with no extra staff" },
    ],
    quote:
      "Students use it between classes. It is quick, clear and the product is right there.",
    quoteBy: "— Campus Services Lead",
    quoteImage: "/images/hero-woman.jpg",
    ctaTitle: "Bring BeautyPod to Your Campus",
    ctaText:
      "Give students and staff a simple way to start a skincare routine on campus. Book a demo today and see how BeautyPod fits your site.",
    ctaPoints: ctaPoints("Proven results in campus engagement"),
  },
};

export function getLocationPage(slug: string) {
  if (!Object.prototype.hasOwnProperty.call(locationPages, slug)) return undefined;
  return locationPages[slug as LocationSlug];
}
