import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Stethoscope, Shield, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import medicalHero from '@/assets/medical-hero.jpg';

const HeroSection = () => {
  const features = [
    {
      icon: Stethoscope,
      title: "AI-Powered Diagnosis",
      description: "Advanced symptom analysis using medical AI"
    },
    {
      icon: Shield,
      title: "Trusted & Secure",
      description: "HIPAA-compliant and medically reviewed"
    },
    {
      icon: Clock,
      title: "24/7 Available",
      description: "Get instant health insights anytime"
    },
    {
      icon: Users,
      title: "Doctor Network",
      description: "Connect with certified healthcare providers"
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-primary/5">
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Your Health,
                <br />
                <span className="hero-gradient bg-clip-text text-transparent">
                  Simplified
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Get instant, reliable health insights with our AI-powered symptom checker. 
                Understand your symptoms, find nearby doctors, and take control of your health journey.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/symptoms">
                <Button variant="medical" size="xl" className="w-full sm:w-auto">
                  Check Your Symptoms
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Button variant="outline" size="xl" className="w-full sm:w-auto">
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-healing" />
                <span>Medically Reviewed</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-healing" />
                <span>500K+ Users</span>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={medicalHero}
                alt="Professional healthcare consultation"
                className="w-full h-auto rounded-2xl elevation-shadow"
              />
            </div>
            {/* Background Elements */}
            <div className="absolute top-6 right-6 w-32 h-32 hero-gradient rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-6 left-6 w-24 h-24 healing-gradient rounded-full opacity-30 blur-2xl"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center card-shadow hover:elevation-shadow smooth-transition">
              <div className="w-12 h-12 medical-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;