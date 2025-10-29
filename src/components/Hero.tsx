import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";
import heroImage from "@/assets/hero-voice-assistant.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[image:var(--gradient-subtle)]" />
      
      {/* Animated background orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                Next-Gen Voice AI
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Your Voice,
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Infinite Possibilities
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Experience the future of interaction. Control your world, boost productivity, and unlock accessibility with our advanced voice command assistant.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group">
                <Mic className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Try Voice Demo
              </Button>
              <Button variant="outline" size="lg">
                Watch How It Works
              </Button>
            </div>
            
            <div className="flex items-center gap-8 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span>Live & Ready</span>
              </div>
              <span>•</span>
              <span>50+ Languages</span>
              <span>•</span>
              <span>99.9% Uptime</span>
            </div>
          </div>
          
          {/* Right visual */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-3xl overflow-hidden shadow-[0_0_50px_hsl(240_80%_60%/0.3)]">
              <img 
                src={heroImage} 
                alt="Voice Assistant Interface"
                className="w-full h-auto"
              />
              
              {/* Overlay glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              {/* Floating mic indicator */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <div className="bg-accent/90 backdrop-blur-sm text-accent-foreground rounded-full p-4 shadow-[0_0_30px_hsl(200_90%_55%/0.6)] animate-pulse-glow">
                  <Mic className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
