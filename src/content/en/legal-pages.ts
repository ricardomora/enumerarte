import type { LegalSection } from "../legal";
import { legalIdentity } from "../legal";

const googleDataUse = "https://policies.google.com/technologies/partner-sites";
const googleAdsSettings = "https://adssettings.google.com";
const aboutAds = "https://www.aboutads.info/choices";

export const updatedLabelEn = "October 21, 2026";

export const privacyPolicyEn = {
  title: "Privacy",
  description: "What Enumerarte stores, why, for how long, and how to ask for it to be deleted.",
  sections: [
    {
      id: "responsable",
      title: "Who is responsible",
      paragraphs: [
        `${legalIdentity.name}, a natural person, is responsible for ${legalIdentity.brand}. The site is ${legalIdentity.siteUrl} and is offered from ${legalIdentity.address}. To use your rights, write to ${legalIdentity.email}.`,
        `This version is ${legalIdentity.policyVersion}, published on ${updatedLabelEn}.`,
      ],
    },
    {
      id: "datos",
      title: "What data exists",
      paragraphs: [
        "If you subscribe, we store the email, the date you sent it, and the version of this policy you accepted. It is used to tell you about promotions and about when the circle can be saved.",
        "Your birth date and full name are used in your browser to build the reading. They are not sent to the server to calculate the map. If you share a link, that link carries the numbers and the first name you choose, not the date.",
        "Visits leave an anonymous identifier in the device's local storage, and events such as “opened the map” or “looked at a connection”. Those events include the path and numbers, not the name or the date. The host may record the IP address in its own operations logs.",
      ],
    },
    {
      id: "finalidad",
      title: "What it is used for",
      paragraphs: [
        "The email is used to write what you asked for when you subscribed, and to delete it if you ask. Events help us see which parts of the reading are opened. Email lists are not sold.",
      ],
    },
    {
      id: "encargados",
      title: "Who else handles it",
      paragraphs: [
        "The email stays in Convex. The site is published on Vercel, which processes the connection. Events, without the email, are forwarded to PostHog in the United States. If ads are added later, Google may process identifiers in order to show and measure them.",
      ],
    },
    {
      id: "anuncios",
      title: "Cookies and ads",
      paragraphs: [
        "Today the site does not load an ad script and does not store its own advertising cookie. The visit identifier lives in local storage, not in a cookie.",
        "If ads are turned on, third parties, including Google, may store and read cookies in the browser, or use identifiers and the IP address, to show ads based on visits to this site or to others. Google's advertising cookies allow Google and its partners to show ads based on those visits.",
        "You can opt out of personalized advertising in Google's ads settings, or at aboutads.info. The link about how Google uses data on partner sites is below.",
      ],
      links: [
        { href: googleDataUse, label: "How Google uses data on partner sites" },
        { href: googleAdsSettings, label: "Google ads settings" },
        { href: aboutAds, label: "aboutads.info choices" },
      ],
    },
    {
      id: "plazo",
      title: "How long it is kept",
      paragraphs: [
        "The email is kept until you ask for it to be removed. Usage events follow the analytics provider's retention period. Hosting logs follow that provider's retention period.",
      ],
    },
    {
      id: "derechos",
      title: "Your rights",
      paragraphs: [
        `You can access, update, correct, and delete your email, and withdraw your authorization, by writing to ${legalIdentity.email} from the same address. If the email is subscribed, we delete it from the subscription database. You can also contact the Superintendence of Industry and Commerce.`,
        "Authorization is requested with a checkbox before the email is stored. Sending it without that checkbox does not store it.",
      ],
    },
    {
      id: "edad",
      title: "Adults",
      paragraphs: [
        "The service is meant for adults. It is not directed at children and it is not set up as a site for kids. Do not request a reading for a child or subscribe their email.",
      ],
    },
  ] as const satisfies readonly LegalSection[],
};

export const termsOfUseEn = {
  title: "Terms",
  description: "What Enumerarte offers and what stays outside that offer.",
  sections: [
    {
      id: "que-es",
      title: "What this site is",
      paragraphs: [
        `${legalIdentity.brand} calculates numbers from a date and a name, and shows texts for talking about a person and their bonds. It is a shared vocabulary. What you do with it is your decision. The person responsible for the site is ${legalIdentity.name}.`,
      ],
    },
    {
      id: "que-no-es",
      title: "What it is not",
      paragraphs: [
        "It is not a clinical instrument, not therapy, and not medical, psychological, legal, or financial advice. It does not predict health, money, or the future of a couple, a family, or a job. There is no compatibility score.",
        "The texts for each number and each bond are communication advice. They stay useful even if the numbers mean nothing.",
      ],
    },
    {
      id: "tus-datos",
      title: "What you share",
      paragraphs: [
        "The date and the name stay in your browser for the reading. If you create a link, you choose the first name that travels with the numbers. The email is stored only if you check the box and send the form.",
        `The detail on processors, retention, and rights is in the privacy policy, version ${legalIdentity.policyVersion}.`,
      ],
    },
    {
      id: "circulo",
      title: "The circle that is not for sale yet",
      paragraphs: [
        "Saving more than two bonds is part of an offer that is not for sale yet. The button that mentions it does not charge and does not reserve a place. If you leave your email, it is so we can tell you when that option exists, not so you can buy something today.",
      ],
    },
    {
      id: "contacto",
      title: "Contact",
      paragraphs: [
        `For a question about these terms, write to ${legalIdentity.email}. ${legalIdentity.name} offers the service from ${legalIdentity.address}.`,
      ],
    },
  ] as const satisfies readonly LegalSection[],
};
