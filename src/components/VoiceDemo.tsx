import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mic, Volume2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const exampleCommands = [
  "Turn on the living room lights",
  "Schedule a meeting for tomorrow at 2 PM",
  "What's the weather like today?",
  "Play my focus playlist",
  "Set a timer for 10 minutes",
];

export const VoiceDemo = () => {
  const [isListening, setIsListening] = useState(false);
  const [currentCommand, setCurrentCommand] = useState("");

  const handleMicClick = () => {
    setIsListening(!isListening);
    if (!isListening) {
      // Simulate command detection
      const randomCommand = exampleCommands[Math.floor(Math.random() * exampleCommands.length)];
      setTimeout(() => {
        setCurrentCommand(randomCommand);
      }, 500);
      
      setTimeout(() => {
        setIsListening(false);
      }, 2000);
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Try It Live
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Experience Voice Commands{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              In Action
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Click the microphone and see how natural voice interaction works
          </p>
        </div>

        <Card className="p-8 sm:p-12 bg-[image:var(--gradient-card)] border-2 border-primary/20 shadow-[0_0_50px_hsl(240_80%_60%/0.2)] animate-fade-in">
          <div className="flex flex-col items-center space-y-8">
            {/* Microphone button */}
            <div className="relative">
              {isListening && (
                <>
                  <div className="absolute inset-0 rounded-full bg-accent/30 animate-ping" />
                  <div className="absolute inset-0 rounded-full bg-accent/20 animate-pulse" />
                </>
              )}
              <Button
                variant={isListening ? "hero" : "glow"}
                size="lg"
                className={`relative w-24 h-24 rounded-full transition-all duration-300 ${
                  isListening ? "scale-110" : ""
                }`}
                onClick={handleMicClick}
              >
                <Mic className="h-10 w-10" />
              </Button>
            </div>

            {/* Status and command display */}
            <div className="text-center space-y-4 min-h-[100px]">
              {isListening ? (
                <>
                  <div className="flex items-center justify-center gap-2 text-accent">
                    <Volume2 className="h-5 w-5 animate-pulse" />
                    <span className="text-lg font-medium">Listening...</span>
                  </div>
                  <div className="flex gap-2 justify-center">
                    <div className="w-2 h-8 bg-accent rounded-full animate-pulse" style={{ animationDelay: "0s" }} />
                    <div className="w-2 h-12 bg-accent rounded-full animate-pulse" style={{ animationDelay: "0.1s" }} />
                    <div className="w-2 h-6 bg-accent rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
                    <div className="w-2 h-10 bg-accent rounded-full animate-pulse" style={{ animationDelay: "0.3s" }} />
                    <div className="w-2 h-8 bg-accent rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
                  </div>
                </>
              ) : currentCommand ? (
                <div className="space-y-2">
                  <p className="text-muted-foreground text-sm">You said:</p>
                  <p className="text-xl font-semibold text-foreground">{currentCommand}</p>
                  <p className="text-accent text-sm">✓ Command executed</p>
                </div>
              ) : (
                <div className="space-y-2">
                  <p className="text-muted-foreground">Click the microphone to start</p>
                  <p className="text-sm text-muted-foreground">Try saying something like:</p>
                </div>
              )}
            </div>

            {/* Example commands */}
            {!isListening && !currentCommand && (
              <div className="flex flex-wrap gap-2 justify-center max-w-2xl">
                {exampleCommands.map((cmd, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCommand(cmd)}
                    className="px-4 py-2 bg-muted hover:bg-muted/80 text-muted-foreground rounded-full text-sm transition-colors duration-200"
                  >
                    {cmd}
                  </button>
                ))}
              </div>
            )}

            {currentCommand && !isListening && (
              <Button variant="outline" onClick={() => setCurrentCommand("")}>
                Try Another Command
              </Button>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
};
