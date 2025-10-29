import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { VoiceDemo } from "@/components/VoiceDemo";
import { Pricing } from "@/components/Pricing";
import { DeveloperAPI } from "@/components/DeveloperAPI";
import { CTA } from "@/components/CTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <VoiceDemo />
      <Pricing />
      <DeveloperAPI />
      <CTA />
    </main>
  );
};

export default Index;
