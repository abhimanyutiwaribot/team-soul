import nakulImg from "../assets/cards/nakul-card.png";
import legitImg from "../assets/cards/legit-card.png";
import jokerImg from "../assets/cards/joker-card.png";
import goblinImg from "../assets/cards/goblin-card.png";
import thunderImg from "../assets/cards/thunder-card.png";
import ayogiImg from "../assets/cards/ayogi-card.png";
import type { ImageMetadata } from "astro";

export interface Player {
  slug: string;
  ign: string;
  realName?: string;
  role: string;
  isIGL?: boolean;
  blurb?: string;
  traits: string[];
  cardImage: ImageMetadata;
}

export interface Staff {
  slug: string;
  ign: string;
  realName?: string;
  role: string;
  blurb?: string;
  traits: string[];
  cardImage: ImageMetadata;
}

export const PLAYERS: Player[] = [
  {
    slug: "nakul",
    ign: "Nakul",
    realName: "Nakul Sharma",
    role: "In-Game Leader (IGL)",
    isIGL: true,
    blurb: "Mastermind tactician leading Team SouL to back-to-back 2026 national titles and to the world stage.",
    traits: ["Zone Prediction", "Clutch Shotcalling", "Aggressive Rotations"],
    cardImage: nakulImg,
  },
  {
    slug: "legit",
    ign: "Legit",
    realName: "Yash Choudhary",
    role: "Assaulter / Entry Fragger",
    isIGL: false,
    blurb: "High-impact firepower, spearheading breakthroughs and securing crucial early-game advantages.",
    traits: ["First-Blood Specialist", "Close-Range Precision", "Rapid Reflexes"],
    cardImage: legitImg,
  },
  {
    slug: "joker",
    ign: "Joker",
    realName: "Khush Singh",
    role: "Assaulter / Support",
    isIGL: false,
    blurb: "Relentless combat presence offering both heavy frontline damage and flawless trade support.",
    traits: ["Utility Control", "Crossfire Mastery", "Consistency"],
    cardImage: jokerImg,
  },
  {
    slug: "goblin",
    ign: "Goblin",
    realName: "Harsh Paudwal",
    role: "Fragger / Finisher",
    isIGL: false,
    blurb: "Renowned marksman capable of single-handedly dismantling opposing squads in chaotic circles.",
    traits: ["Squad Wipe Threat", "Pistol & Spray Control", "Unpredictable Angles"],
    cardImage: goblinImg,
  },
  {
    slug: "thunder",
    ign: "Thunder",
    realName: "Aaryaman Seth",
    role: "Support / Scout",
    isIGL: false,
    blurb: "Anchor of the squad, gathering crucial intel and delivering clutch backline support in endgame circles.",
    traits: ["Flank Watch", "Info Gathering", "High Survival Rate"],
    cardImage: thunderImg,
  },
];

export const COACH: Staff = {
  slug: "ayogi",
  ign: "Ayogi",
  realName: "Rahul Sharma",
  role: "Head Coach",
  blurb: "Architect behind SouL's dominant 2026 strategies, scouting, and championship mindset.",
  traits: ["VOD Review", "Meta Analysis", "Mental Conditioning"],
  cardImage: ayogiImg,
};
