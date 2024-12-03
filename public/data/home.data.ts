import {
  musicIcon,
  microphoneIcon,
  busIcon,
  calendarIcon,
  userIcon,
  cheersIcon,
  accessTimeIcon,
  emailIcon,
  locationDotIcon,
  phoneIcon,
} from "@/app/lib/icons";

export const ourServices = [
  {
    title: "Concert Promotion",
    img: "/images/concert-promo.png",
    text: "Boost attendance and visibility with expert concert marketing and planning.",
  },
  {
    title: "Artist Management",
    img: "/images/artist-management.png",
    text: "Comprehensive guidance to grow careers and achieve artistic success efficiently.",
  },
  {
    title: "Event Organization",
    img: "/images/event-organization.png",
    text: "Seamless planning for impactful events tailored to your unique needs.",
  },
  {
    title: "Tour Management",
    img: "/images/tour-management.png",
    text: "Expert coordination for smooth, successful tours that captivate audiences worldwide.",
  },
];

export const additionalServices = [
  "Music Licensing",
  "Brand Partnerships",
  "Marketing Strategy",
  "Merchandising Support",
  "Venue Coordination",
  "Sound and Stage Management",
];

export const additionalServicesCards = [
  {
    icon: musicIcon,
    title: "Live Event Planning",
    text: "Crafting unforgettable live events with precision, from logistics to execution.",
  },
  {
    icon: microphoneIcon,
    title: "Studio Support",
    text: "Providing tailored solutions to enhance recording sessions and studio management.",
  },
  {
    icon: busIcon,
    title: "Tour Logistics",
    text: "Coordinating transport, lodging, and on-the-road needs for seamless tours.",
  },
  {
    icon: calendarIcon,
    title: "Event Oversight",
    text: "Offering hands-on oversight for successful events that leave lasting impressions.",
  },
  {
    icon: userIcon,
    title: "Talent Scouting",
    text: "Identifying and recruiting exceptional talent to elevate your events.",
  },
  {
    icon: cheersIcon,
    title: "Private Event Management",
    text: "Specialized in organizing sophisticated events tailored to your unique needs.",
  },
];

export const ourStory = [
  {
    value: "10",
    text: "Years Experience",
  },
  {
    value: "50",
    text: "Successful Events",
  },
  {
    value: "200",
    text: "Satisfied Clients",
  },
  {
    value: "5",
    text: "Professional Team",
  },
];

export const events = [
  {
    date: "09 November 2024",
    monthDay: "11/09",
    year: "2024",
    eventTitle: "Deer Tick with Special Guests Other Brother Darryl",
    artist: "Deer Tick, Other Brother Darryl",
    ticketPrice: "Charity Event (Circle tickets available via Stu)",
    doorsOpen: "7:00 PM - 11:30 PM",
    eventStatus: "PAST",
    venue: "Abbott Hall, 188 Washington Street, Marblehead",
    img: "/images/deer-tick.png",
    description:
      "Charity show for Marblehead SEAPAC. Email Stu at platorum@aol.com for tickets or sponsorship opportunities. Circle tickets include an autographed poster, parking, and front-row seats.",
  },
  {
    date: "05 October 2024",
    monthDay: "10/05",
    year: "2024",
    eventTitle: "The Dreadnoughts, Hub City Stompers, & The Pourmen",
    artist: "The Dreadnoughts, Hub City Stompers, The Pourmen",
    ticketPrice: "$20.00",
    doorsOpen: "7:00 PM - 11:30 PM",
    eventStatus: "PAST",
    venue: "Sammy's Patio, 63 Revere Beach Blvd., Revere",
    img: "/images/dreadnoughts.png",
    description:
      "Beach party in October featuring The Dreadnoughts, with support from Hub City Stompers and local legends The Pourmen.",
  },
  {
    date: "04 October 2024",
    monthDay: "10/04",
    year: "2024",
    eventTitle: "The Dreadnoughts",
    artist: "The Dreadnoughts",
    ticketPrice: "$20.00",
    doorsOpen: "7:00 PM - 11:30 PM",
    eventStatus: "PAST",
    venue: "Fete, 103 Dike Street, Providence",
    img: "/images/dreadnoughts-2.png",
    description:
      "The Dreadnoughts bring their energy to Providence for an unforgettable night at Fete!",
  },
];

export const contactInfoBlockData = [
  {
    icon: phoneIcon,
    titleKey: "Phone",
    textKey: "(978) 304-5111",
    onClick: () => (window.location.href = "tel:+9783045111"),
    className: "cursor-pointer",
  },
  {
    icon: emailIcon,
    titleKey: "Email",
    textKey: "platorumpresents@gmail.com",
    onClick: () => (window.location.href = "mailto:platorumpresents@gmail.com"),
    className: "cursor-pointer",
  },
  {
    icon: locationDotIcon,
    titleKey: "Location",
    textKey: "Salem, MA",
  },
  {
    icon: accessTimeIcon,
    titleKey: "Opening Hours",
    textKey: "Every Day 09:00 AM - 06:00 PM",
  },
];
