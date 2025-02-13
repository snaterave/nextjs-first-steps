import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO About",
  description: "SEO description",
  keywords: ["About page", "Silma natera", "información"],
};

export default function AboutPage() {
  return <span className="text-7xl">About page</span>;
}
