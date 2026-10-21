import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal-document";
import { privacyPolicy } from "@/content/legal";

export const metadata: Metadata = {
  title: privacyPolicy.title,
  description: privacyPolicy.description,
};

export default function PrivacyPage() {
  return <LegalDocument kind="privacy" />;
}
