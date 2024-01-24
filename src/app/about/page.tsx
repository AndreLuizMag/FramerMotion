import { Metadata } from "next";
import { AboutContent } from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description: "Because every story opens the door to a new one.",
};

export default function About() {
  return (
    <main>
      <AboutContent />
    </main>
  );
}
