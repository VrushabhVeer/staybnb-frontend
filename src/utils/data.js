import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import youtube from "../assets/icons/youtube.png";
import twitterX from "../assets/icons/twitterX.png";
import whatsapp from "../assets/icons/whatsapp.png";
import telegram from "../assets/icons/telegram.png";
import logo from "../assets/icons/location.png";

import house from "../assets/icons/home.png";
import flatApartment from "../assets/icons/building.png";
import hotel from "../assets/icons/hotel.png";
import farmHouse from "../assets/icons/farmhouse.png";
import tent from "../assets/icons/camping-tent.png";
import treeHouse from "../assets/icons/tree-house.png";
import caravan from "../assets/icons/caravan.png";
import container from "../assets/icons/container.png";
import yachtBoat from "../assets/icons/yacht.png";

import wifi from "../assets/icons/wifi-signal.png";
import tv from "../assets/icons/television.png";
import washingMachine from "../assets/icons/washing-machine.png";
import kitchen from "../assets/icons/kitchen-set.png";
import airConditioning from "../assets/icons/air-conditioner.png";
import workspace from "../assets/icons/desk.png";
import pool from "../assets/icons/swim.png";
import bathTub from "../assets/icons/bath-tub.png";
import bbqGrill from "../assets/icons/grill.png";

import advise from "../assets/icons/advice.png";
import advertise from "../assets/icons/megaphone.png";
import home from "../assets/icons/color-home.png";
import security from "../assets/icons/security.png";

import peace from "../assets/icons/peace-of-mind.png";
import privacy from "../assets/icons/privacy.png";
import price from "../assets/icons/price-tag.png";
import heart from "../assets/icons/give-love.png";

import entirePlace from "../assets/icons/home.png";
import singleRoom from "../assets/icons/open-door.png";
import sharedRoom from "../assets/icons/sharing.png";

// servicesData
export const servicesData = [
  {
    image: peace,
    alt: "shield",
    title: "Peace of mind",
    description: "Our Book with Confidence guarantee gives you 24/7 support",
  },
  {
    image: privacy,
    alt: "teapot",
    title: "All the privacy of home",
    description: "Enjoy full kitchens, laundry, pools, yards and more",
  },
  {
    image: price,
    alt: "money",
    title: "More for less",
    description: "More space, more privacy, more amenities — more value",
  },
  {
    image: heart,
    alt: "heart",
    title: "A place for everyone",
    description: "We stand for diversity, inclusion and families everywhere.",
  },
];

// heroData
export const heroData = {
  tags: ["#escape", "#stays", "#travel"],
  title: "Find a perfect place to stay.",
  description: `Staybnb is an online marketplace that connects people who want to
                  rent out their property with people who are looking for
                  accommodations in specific locales. Staybnb offers people an easy,
                  relatively stress-free way to earn some income from their
                  property.`,
  buttonLabel: "Discover stays",
  heroImageAlt: "hero_image",
};

// BookingInfo Data
export const infoItems = [
  {
    icon: advise,
    title: "Cost-effective advertising",
    description:
      "With a free listing, you can advertise your rental with no upfront costs. Pay just 3% VAT on confirmed bookings and manage everything through our easy-to-use dashboard.",
  },
  {
    icon: advertise,
    title: "Reach millions with Tripadvisor",
    description:
      "Exposure to Tripadvisor’s global traveller audience comes free with your listing. Millions of people are searching for unique places to stay around the world. Why not add yours?",
  },
  {
    icon: home,
    title: "List your home",
    description:
      "Have a holiday rental, spare room or want to let out your own home while you’re away? Your ad can be online and ready to receive bookings in minutes. Give it a try.",
  },
  {
    icon: security,
    title: "Secure and simple",
    description:
      "A Holiday Lettings listing gives you a secure and easy way to take bookings and payments online. Plus, it’s simple to create and update your advert.",
  },
];

// footerData
export const footerData = {
  company: [
    "About Us",
    "Careers",
    "Partners",
    "Mission & Values",
    "Leadership Team",
  ],
  support: [
    "Help Center",
    "Safety Center",
    "Community Guidelines",
    "Privacy Policy",
    "Billing & Payments",
  ],
  address: {
    line1: "202 Viman Nagar, Pune, Maharashtra, India",
    phone: "+91 1800 3929 39",
    email: "staybnbinfo@gmail.com",
  },
  contactIcons: {
    whatsapp: whatsapp,
    telegram: telegram,
  },
  socialIcons: {
    facebook: facebook,
    instagram: instagram,
    youtube: youtube,
    twitterX: twitterX,
  },
  logo: logo,
};

// select type of place
export const placeTypes = [
  { src: house, alt: "house", label: "House" },
  { src: flatApartment, alt: "flatApartment", label: "Flat/Apartment" },
  { src: hotel, alt: "hotel", label: "Hotel" },
  { src: farmHouse, alt: "farmHouse", label: "Farm House" },
  { src: tent, alt: "tent", label: "Tent" },
  { src: treeHouse, alt: "treeHouse", label: "Tree House" },
  { src: caravan, alt: "caravan", label: "Caravan" },
  { src: container, alt: "container", label: "Container" },
  { src: yachtBoat, alt: "yachtBoat", label: "Yacht/Boat" },
];

// amenities data
export const amenities = [
  { src: wifi, alt: "wifi", label: "Wifi" },
  { src: tv, alt: "tv", label: "TV" },
  { src: washingMachine, alt: "washingMachine", label: "Washing Machine" },
  { src: kitchen, alt: "kitchen", label: "Kitchen" },
  { src: airConditioning, alt: "airConditioning", label: "Air conditioning" },
  { src: workspace, alt: "workspace", label: "Workspace" },
  { src: pool, alt: "pool", label: "Pool" },
  { src: bathTub, alt: "bathTub", label: "Bath tub" },
  { src: bbqGrill, alt: "bbqGrill", label: "BBQ Grill" },
];

//placeOptions data
export const placeOptions = [
  {
    label: "An entire place",
    description: "Guests have the whole place to themselves.",
    imageSrc: entirePlace,
    alt: "entirePlace",
  },
  {
    label: "A room",
    description:
      "Guests have their own room in a home, plus access to shared spaces.",
    imageSrc: singleRoom,
    alt: "singleRoom",
  },
  {
    label: "A shared room",
    description:
      "Guests sleep in a room or common area that may be shared with you or others.",
    imageSrc: sharedRoom,
    alt: "sharedRoom",
  },
];
