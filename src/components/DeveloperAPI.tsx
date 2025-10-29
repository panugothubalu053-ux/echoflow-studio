import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code2, BookOpen, Terminal } from "lucide-react";

export const DeveloperAPI = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Info */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                For Developers
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
                Build With Our{" "}
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  Powerful API
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Integrate voice commands into your applications with our comprehensive API and SDKs. Full documentation, code samples, and developer support included.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">RESTful API</h3>
                  <p className="text-muted-foreground">
                    Simple HTTP endpoints for voice recognition, text-to-speech, and command processing
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Terminal className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">SDKs & Libraries</h3>
                  <p className="text-muted-foreground">
                    Official libraries for JavaScript, Python, Swift, and Kotlin
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Complete Documentation</h3>
                  <p className="text-muted-foreground">
                    Step-by-step guides, API reference, and interactive examples
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button variant="glow" size="lg">
                View Documentation
              </Button>
              <Button variant="outline" size="lg">
                Get API Key
              </Button>
            </div>
          </div>

          {/* Right - Code Example */}
          <Card className="p-6 bg-card/90 backdrop-blur-sm border-2 border-primary/20 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">Quick Start Example</span>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
              </div>
              
              <pre className="bg-background/50 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm font-mono text-foreground">
{`// Initialize the Voice SDK
import { VoiceAssistant } from '@voice-ai/sdk';

const assistant = new VoiceAssistant({
  apiKey: 'your_api_key_here',
  language: 'en-US'
});

// Listen for voice commands
assistant.on('command', (result) => {
  console.log('Command:', result.text);
  console.log('Intent:', result.intent);
  console.log('Confidence:', result.confidence);
});

// Start listening
await assistant.startListening();

// Execute a command
const response = await assistant.execute(
  'Turn on the living room lights'
);

console.log('Response:', response);`}
                </code>
              </pre>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span>Ready to integrate in minutes</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
