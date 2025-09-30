'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Pricing() {
  const router = useRouter();
  const [isAnnual, setIsAnnual] = useState(false);

  // ACTION_PLACEHOLDER_START
  const handleStarterAction = () => {
    router.push('/');
  };
  const handleProfessionalAction = () => {
    router.push('/');
  };
  const handleEnterpriseAction = () => {
    router.push('/');
  };
  const handleScheduleDemo = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const plans = [
    {
      name: 'Startup',
      description: 'Perfect for small teams getting started with SaaS automation',
      monthlyPrice: 0,
      annualPrice: 0,
      period: isAnnual ? '/year' : '/month',
      badge: null,
      features: [
        'Up to 5 team members',
        'Core automation workflows',
        'Email support',
        '10GB cloud storage',
        'Basic reporting dashboard',
      ],
      cta: 'Start Building Now',
      popular: false,
      action: handleStarterAction,
    },
    {
      name: 'Growth',
      description: 'Ideal for scaling businesses ready to optimize operations',
      monthlyPrice: 49,
      annualPrice: 34,
      period: isAnnual ? '/year' : '/month',
      badge: 'Most Popular',
      features: [
        'Up to 25 team members',
        'Advanced workflow automation',
        'Priority chat support',
        '100GB cloud storage',
        'Advanced analytics & insights',
        'Custom integrations',
        'Multi-workspace management',
        'API access & webhooks',
      ],
      cta: 'Start 14-Day Trial',
      popular: true,
      action: handleProfessionalAction,
    },
    {
      name: 'Enterprise',
      description: 'For large organizations requiring enterprise-grade solutions',
      monthlyPrice: null,
      annualPrice: null,
      period: '',
      badge: 'Custom Solution',
      features: [
        'Unlimited team members',
        'White-label customization',
        '24/7 dedicated support',
        'Unlimited cloud storage',
        'Enterprise security & compliance',
        '99.99% uptime SLA',
        'Dedicated success manager',
        'Custom onboarding & training',
      ],
      cta: 'Schedule Consultation',
      popular: false,
      action: handleEnterpriseAction,
    },
  ];

  const getDisplayPrice = plan => {
    if (plan.monthlyPrice === null) return 'Custom';
    if (plan.monthlyPrice === 0) return 'Free';

    const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
    return `$${price}`;
  };

  return (
    <section className="py-24 bg-gradient-to-br from-accent/20 via-background to-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20"
          >
            💰 Flexible Pricing
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Scale Your Success with
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Choose the perfect plan to accelerate your business growth. No hidden fees, cancel
            anytime, and upgrade as you scale.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-card rounded-lg border shadow-sm">
            <button
              onClick={() => setIsAnnual(false)}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-md transition-all',
                !isAnnual
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-md transition-all flex items-center gap-2',
                isAnnual
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              Annual
              <Badge variant="secondary" className="text-xs bg-accent/20 text-accent-foreground">
                Save 30% 🎉
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1',
                plan.popular
                  ? 'border-primary/50 shadow-lg shadow-primary/20 scale-105 bg-gradient-to-br from-primary/5 to-accent/5'
                  : 'border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm'
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-1 shadow-lg">
                    <Star className="size-3 mr-1 fill-current" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <CardHeader className="relative text-center pb-8">
                {plan.badge && !plan.popular && (
                  <Badge
                    variant="outline"
                    className="mb-4 mx-auto w-fit bg-accent/10 text-accent border-accent/20"
                  >
                    {plan.badge}
                  </Badge>
                )}

                <CardTitle className="text-2xl mb-2 text-foreground">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-6 text-muted-foreground">
                  {plan.description}
                </CardDescription>

                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">
                    {getDisplayPrice(plan)}
                  </span>
                  {plan.period && <span className="text-muted-foreground mb-1">{plan.period}</span>}
                </div>

                {isAnnual && plan.monthlyPrice > 0 && (
                  <p className="text-sm text-accent mt-2">
                    Save ${(plan.monthlyPrice - plan.annualPrice) * 12}/year! 🚀
                  </p>
                )}
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={plan.action}
                  className={cn(
                    'w-full text-base py-6 transition-all duration-300',
                    plan.popular
                      ? 'bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl'
                      : 'hover:bg-primary/10'
                  )}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.popular && <Zap className="size-4 mr-2" />}
                  {plan.cta}
                </Button>

                {plan.name === 'Growth' && (
                  <p className="text-center text-sm text-muted-foreground">
                    14-day free trial • No credit card required • Cancel anytime ✨
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-foreground">Need a custom solution? 🤝</h3>
          <p className="text-muted-foreground mb-6">
            We create tailored SaaS solutions for enterprises with unique requirements. Let's build
            something amazing together that perfectly fits your workflow.
          </p>
          <Button
            onClick={handleScheduleDemo}
            variant="outline"
            size="lg"
            className="hover:bg-accent/10 hover:border-accent/50 hover:text-accent transition-all duration-300"
          >
            Schedule Strategy Call 📞
          </Button>
        </div>
      </div>
    </section>
  );
}
