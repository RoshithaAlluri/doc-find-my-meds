import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Award, Users, Shield, Stethoscope, Heart, Brain } from 'lucide-react';
import medicalSymbols from '@/assets/medical-symbols.jpg';

import Navigation from '@/components/Navigation';

const About = () => {
  const stats = [
    { label: 'Medical Reviews', value: '10,000+' },
    { label: 'Active Users', value: '500K+' },
    { label: 'Partner Doctors', value: '2,500+' },
    { label: 'Accuracy Rate', value: '94%' }
  ];

  const features = [
    {
      icon: Brain,
      title: 'Advanced AI Technology',
      description: 'Our symptom checker uses cutting-edge machine learning algorithms trained on millions of medical cases to provide accurate health insights.'
    },
    {
      icon: Shield,
      title: 'HIPAA Compliant & Secure',
      description: 'Your health data is protected with bank-level encryption and compliance with all major healthcare privacy regulations.'
    },
    {
      icon: Stethoscope,
      title: 'Medically Reviewed',
      description: 'All our content and algorithms are reviewed by board-certified physicians to ensure medical accuracy and safety.'
    },
    {
      icon: Users,
      title: 'Doctor Network',
      description: 'Connect with our network of verified healthcare providers for follow-up consultations and personalized care.'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Medical Officer',
      specialty: 'Internal Medicine',
      credentials: ['MD', 'FACP']
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Medical Director',
      specialty: 'Emergency Medicine',
      credentials: ['MD', 'FACEP']
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'AI Research Lead',
      specialty: 'Medical Informatics',
      credentials: ['MD', 'PhD']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-background via-secondary/20 to-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="medical-gradient text-white">About SymptoWise</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                  Empowering Health Decisions with 
                  <span className="hero-gradient bg-clip-text text-transparent"> AI Technology</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  We're on a mission to make quality healthcare accessible to everyone through 
                  intelligent symptom analysis and personalized medical guidance.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src={medicalSymbols}
                alt="Medical symbols and technology"
                className="w-full h-auto rounded-2xl elevation-shadow"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Why Choose SymptoWise?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our platform combines medical expertise with advanced technology to provide 
              reliable, accessible healthcare guidance when you need it most.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 card-shadow hover:elevation-shadow smooth-transition">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 medical-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Medical Team */}
      <div className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Our Medical Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Leading healthcare professionals ensuring the highest standards of medical accuracy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-6 text-center card-shadow hover:elevation-shadow smooth-transition">
                <div className="w-20 h-20 medical-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground mb-3">{member.specialty}</p>
                <div className="flex justify-center space-x-2">
                  {member.credentials.map((cred, credIndex) => (
                    <Badge key={credIndex} variant="outline">
                      {cred}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <div className="w-16 h-16 hero-gradient rounded-full flex items-center justify-center mx-auto">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To democratize healthcare by providing intelligent, accessible, and reliable medical 
              guidance that empowers individuals to make informed decisions about their health. 
              We believe everyone deserves quality healthcare information, regardless of location 
              or circumstances.
            </p>
            <div className="pt-6">
              <Button variant="medical" size="lg">
                Start Your Health Journey
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;