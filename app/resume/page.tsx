import { ResumeTimeline } from "@/components/sections/resume-timeline";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata = {
  title: "Resume — Derek Campbell",
  description: "Derek Campbell's experience, education, and technical skills in IT and infrastructure.",
};

export default function ResumePage() {
  return (
    <>
      <section className="pt-16 pb-4">
        <div className="mx-auto w-full max-w-[1280px] px-6">
          <SectionHeading
            eyebrow="Curriculum"
            title="Resume"
            subtitle="IT technician with hands-on experience across infrastructure, cloud, and support."
          />
        </div>
      </section>
      <ResumeTimeline />
    </>
  );
}
