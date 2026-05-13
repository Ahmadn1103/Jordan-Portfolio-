import { CaseStudies } from "@/components/sections/case-studies";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata = {
  title: "Case Studies — Jordan",
  description: "Deep-dive case studies showing problem, approach, and outcome.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="pt-16 pb-4">
        <div className="mx-auto w-full max-w-[1280px] px-6">
          <SectionHeading
            eyebrow="Stories"
            title="Case Studies"
            subtitle="How I think — from problem definition to measurable outcome."
          />
        </div>
      </section>
      <CaseStudies />
    </>
  );
}
