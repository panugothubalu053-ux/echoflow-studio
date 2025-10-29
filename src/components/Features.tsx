import { Home, Briefcase, Accessibility, Smartphone, Globe, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Home,
    title: "Smart Home Control",
    description: "Control lights, temperature, security, and entertainment systems with simple voice commands.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Briefcase,
    title: "Productivity Boost",
    description: "Schedule meetings, set reminders, manage tasks, and dictate emails hands-free.",
    gradient: "from-secondary to-accent",
  },
  {
    icon: Accessibility,
    title: "Universal Accessibility",
    description: "Empower everyone with voice navigation, screen reading, and adaptive controls.",
    gradient: "from-accent to-primary",
  },
  {
    icon: Smartphone,
    title: "Multi-Device Sync",
    description: "Seamlessly switch between phone, desktop, smart speakers, and wearables.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Globe,
    title: "50+ Languages",
    description: "Communicate naturally in your preferred language with accurate understanding.",
    gradient: "from-secondary to-primary",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Real-time response with advanced AI processing. No lag, just instant action.",
    gradient: "from-accent to-secondary",
  },
];

export const Features = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[image:var(--gradient-subtle)]" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Powerful Features
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Voice Commands for{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Every Moment
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From home automation to professional workflows, experience the versatility of voice-first interaction.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-[0_8px_30px_hsl(240_80%_60%/0.15)] transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
