
import { useEffect } from "react";
import { Youtube, MessageSquare, Video, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-up");
          entry.target.classList.remove("opacity-0");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll(".fade-up-element").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-pattern min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Transform YouTube Videos into
            <span className="text-primary block mt-2">Intelligent Conversations</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in delay-100">
            Summarize videos, chat with content, and extract key insights using advanced AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-200">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 fade-up-element opacity-0">
            Powerful Features for Video Understanding
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="glass-card rounded-xl p-6 fade-up-element opacity-0">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Youtube className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Video Summarization</h3>
              <p className="text-gray-600">
                Get concise summaries of any YouTube video in seconds, saving hours of watching time
              </p>
            </div>

            {/* Feature 2 */}
            <div className="glass-card rounded-xl p-6 fade-up-element opacity-0">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Interactive Chat</h3>
              <p className="text-gray-600">
                Ask questions and get instant answers about any part of the video content
              </p>
            </div>

            {/* Feature 3 */}
            <div className="glass-card rounded-xl p-6 fade-up-element opacity-0">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Video className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Key Insights</h3>
              <p className="text-gray-600">
                Extract important points, timestamps, and actionable insights automatically
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 fade-up-element opacity-0">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center fade-up-element opacity-0">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Paste YouTube URL</h3>
              <p className="text-gray-600">Simply paste any YouTube video link to get started</p>
            </div>
            
            <div className="text-center fade-up-element opacity-0">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. AI Processing</h3>
              <p className="text-gray-600">Our AI analyzes the video content in real-time</p>
            </div>
            
            <div className="text-center fade-up-element opacity-0">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Interact & Learn</h3>
              <p className="text-gray-600">Get summaries and chat with the video content instantly</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 fade-up-element opacity-0">
            Ready to Transform Your Video Learning?
          </h2>
          <p className="text-xl mb-8 opacity-90 fade-up-element opacity-0">
            Join thousands of users who are already saving time and learning more efficiently
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 fade-up-element opacity-0"
          >
            Start Free Trial
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
