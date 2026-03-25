import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function VideoDemo() {
  return (
    <section id="demo" className="bg-site-white border-t border-b border-site-border py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
          {/* Text */}
          <div>
            <SectionHeading
              label="Demo"
              title="See how LexEU"
              highlight="drafts a contract"
              headingClassName="text-heading-sm mb-6"
              description="From question to a full employment contract draft in 47 seconds — with every required clause grounded in EU and national law. No waiting. No lawyer needed for the first version."
              descriptionClassName="text-[15px] text-site-mid leading-[1.85] mb-8"
            />
            <Button href="https://app.lexeu.ai">
              TRY IT YOURSELF →
            </Button>
          </div>

          {/* Optimized video (WebM → MP4 → GIF fallback) */}
          <div className="rounded-xl overflow-hidden border border-site-border shadow-lg bg-stone-dark">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto block"
              aria-label="LexEU demo — legal question answered in seconds"
            >
              <source src="/demo.webm" type="video/webm" />
              <source src="/demo.mp4" type="video/mp4" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/demo.gif" alt="LexEU demo" />
            </video>
          </div>
        </div>
      </Container>
    </section>
  );
}
