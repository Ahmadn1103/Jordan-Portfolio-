import { ProjectsGrid } from "@/components/sections/projects-grid";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata = {
  title: "Projects — Derek Campbell",
  description: "Selected IT projects across infrastructure, cloud, and support.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="pt-16 pb-4">
        <div className="mx-auto w-full max-w-[1280px] px-6">
          <SectionHeading
            eyebrow="Library"
            title="Projects"
            subtitle="Browse the catalog. Filter by stack."
          />
        </div>
      </section>
      <ProjectsGrid />
    </>
  );
}
