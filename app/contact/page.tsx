import { ContactForm } from "@/components/sections/contact-form";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata = {
  title: "Contact — Jordan",
  description: "Get in touch with Jordan about projects, roles, or collaborations.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-16 pb-4">
        <div className="mx-auto w-full max-w-[1280px] px-6">
          <SectionHeading
            eyebrow="Say Hi"
            title="Get in touch"
            subtitle="Open to consulting, full-time roles, and good data conversations."
          />
        </div>
      </section>
      <ContactForm />
    </>
  );
}
