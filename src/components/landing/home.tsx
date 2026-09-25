import { Compare } from "@/components/landing/compare";
import { Faq } from "@/components/landing/faq";
import { Features } from "@/components/landing/features";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Join } from "@/components/landing/join";
import { MidCta } from "@/components/landing/mid-cta";
import { Nav } from "@/components/landing/nav";
import { Pricing } from "@/components/landing/pricing";
import { Proof } from "@/components/landing/proof";
import { ScanDemo } from "@/components/landing/scan-demo";
import { Testimonials } from "@/components/landing/testimonials";
import { MobileCta } from "@/components/landing/mobile-cta";

export function Home() {
  return (
    <div id="top" className="min-h-dvh bg-bg text-fg">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-fg"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Proof />
        <ScanDemo />
        <HowItWorks />
        <Compare />
        <Features />
        <MidCta />
        <Pricing />
        <Testimonials />
        <Faq />
        <Join />
      </main>
      <Footer />
      <MobileCta />
    </div>
  );
}
