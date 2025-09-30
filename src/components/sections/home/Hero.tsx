'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Star, Users, Zap, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Hero() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/'); // Navigate to pricing section
  };

  const handleSecondaryAction = () => {
    setIsModalOpen(true); // Open demo video modal
  };

  const handleBadgeAction = () => {
    router.push('/'); // Navigate to features
  };
  // ACTION_PLACEHOLDER_END

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-accent/5 to-primary/10">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-20 size-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 size-96 bg-accent/30 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 size-64 bg-secondary/20 rounded-full blur-2xl animate-pulse delay-500" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <button
              onClick={handleBadgeAction}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-full text-sm font-medium text-primary hover:from-primary/30 hover:to-accent/30 transition-all duration-300 cursor-pointer shadow-lg"
              data-action-type="badge-link"
            >
              <Sparkles className="size-4 mr-2 animate-spin" />
              🎉 Save 30% on Annual Plans - Limited Time!
              <ArrowRight className="ml-2 size-4" />
            </button>
          </div>

          {/* Main Content */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Transform Your Business with
              <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-pulse">
                Acme SaaS
              </span>
              The Joyful Way! ✨
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              🚀 Supercharge your productivity with our delightfully simple SaaS platform. Built for
              SMBs who want powerful features without the complexity. Join thousands of happy
              customers! 😊
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="group text-base px-8 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={handlePrimaryAction}
                data-action-type="primary-cta"
              >
                🎯 Start Your Success Story
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group text-base px-8 border-primary/30 hover:bg-primary/10 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={handleSecondaryAction}
                data-action-type="secondary-cta"
              >
                <Play className="mr-2 size-5 transition-transform group-hover:scale-110" />
                🎬 See the Magic in Action
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="size-8 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background animate-bounce" />
                  <div className="size-8 rounded-full bg-gradient-to-br from-accent to-secondary border-2 border-background animate-bounce delay-100" />
                  <div className="size-8 rounded-full bg-gradient-to-br from-secondary to-primary border-2 border-background animate-bounce delay-200" />
                </div>
                <span className="ml-2 font-medium">
                  <Users className="inline size-4 mr-1" />
                  25,000+ Happy Customers 😄
                </span>
              </div>

              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-primary text-primary animate-pulse"
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
                <span className="ml-2 font-medium">4.9/5 ⭐ Amazing Reviews</span>
              </div>
            </div>
          </div>

          {/* Hero Image/Mockup */}
          <div className="mt-16 relative">
            <div className="relative mx-auto max-w-4xl">
              <div className="rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-card to-accent/5 p-4 shadow-2xl hover:shadow-3xl transition-all duration-500">
                <div className="rounded-xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 aspect-video flex items-center justify-center relative overflow-hidden">
                  <div className="text-center z-10">
                    <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center animate-pulse shadow-lg">
                      <Play className="size-10 text-primary ml-1" />
                    </div>
                    <p className="text-muted-foreground font-medium">
                      🎥 Watch Acme SaaS Transform Businesses
                    </p>
                    <p className="text-sm text-muted-foreground/80 mt-2">
                      See real results in under 2 minutes! 🚀
                    </p>
                  </div>

                  {/* Animated background elements */}
                  <div className="absolute top-4 left-4 size-3 bg-primary rounded-full animate-ping" />
                  <div className="absolute top-8 right-8 size-2 bg-accent rounded-full animate-ping delay-300" />
                  <div className="absolute bottom-6 left-8 size-4 bg-secondary rounded-full animate-ping delay-700" />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 size-12 bg-gradient-to-br from-primary to-accent rounded-full animate-bounce shadow-lg flex items-center justify-center">
                <Zap className="size-6 text-background" />
              </div>
              <div className="absolute -bottom-6 -right-6 size-10 bg-gradient-to-br from-accent to-secondary rounded-full animate-bounce delay-1000 shadow-lg flex items-center justify-center">
                <Sparkles className="size-5 text-background" />
              </div>
              <div className="absolute top-1/2 -right-8 size-8 bg-gradient-to-br from-secondary to-primary rounded-full animate-bounce delay-500 shadow-lg" />
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground mb-6">
              🏆 Trusted by industry leaders worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="px-4 py-2 bg-muted/30 rounded-lg font-medium text-muted-foreground">
                TechCorp
              </div>
              <div className="px-4 py-2 bg-muted/30 rounded-lg font-medium text-muted-foreground">
                InnovateCo
              </div>
              <div className="px-4 py-2 bg-muted/30 rounded-lg font-medium text-muted-foreground">
                GrowthLabs
              </div>
              <div className="px-4 py-2 bg-muted/30 rounded-lg font-medium text-muted-foreground">
                ScaleUp Inc
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
