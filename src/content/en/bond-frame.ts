import type { RelationshipType } from "@/lib/numerology";
import type { BondFrame } from "../types";

/** Títulos del vínculo. El texto largo de cada par sigue en español hasta la traducción. */
export const BOND_FRAME_EN: Record<RelationshipType, BondFrame> = {
  pareja: {
    title: "In love",
    lead: "How they care for each other, how they miss each other, and how they make up.",
  },
  familia: {
    title: "In the family",
    lead: "How they treat each other when the bond was already there and is not chosen every day.",
  },
  amistad: {
    title: "Between friends",
    lead: "How they look for each other, how they drift apart, and how they come back.",
  },
  trabajo: {
    title: "At work",
    lead: "How they decide, how they share the credit, and how they hold each other to it.",
  },
};
