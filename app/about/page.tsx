import { AboutBio } from "@/components/sections/about-bio";
import { Skills } from "@/components/sections/skills";

export const metadata = {
  title: "About — Derek Campbell",
  description: "About Derek Campbell: IT technician specializing in data center operations, network infrastructure, and cloud.",
};

export default function AboutPage() {
  return (
    <>
      <AboutBio />
      <Skills />
    </>
  );
}
