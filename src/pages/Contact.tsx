import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  AlertTriangle,
  CheckCircle 
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

import Navigation from '@/components/Navigation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    urgency: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      urgency: 'general'
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Emergency Line',
      content: '1-800-SYMPTO-1',
      subtitle: 'Available 24/7 for urgent medical concerns',
      highlight: true
    },
    {
      icon: Mail,
      title: 'Email Support',
      content: 'support@symptowise.com',
      subtitle: 'General inquiries and feedback'
    },
    {
      icon: MapPin,
      title: 'Headquarters',
      content: '123 Medical Plaza, Suite 500',
      subtitle: 'San Francisco, CA 94102'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon-Fri: 8AM-8PM PST',
      subtitle: 'Weekend support available'
    }
  ];

  const urgencyOptions = [
    { value: 'emergency', label: 'Medical Emergency', color: 'bg-destructive' },
    { value: 'urgent', label: 'Urgent Question', color: 'bg-warning' },
    { value: 'general', label: 'General Inquiry', color: 'bg-healing' },
    { value: 'feedback', label: 'Feedback', color: 'bg-primary' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-background via-secondary/20 to-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <Badge className="medical-gradient text-white">Contact Us</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
              We're Here to 
              <span className="hero-gradient bg-clip-text text-transparent"> Help</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about your health or our services? Our medical support team 
              is available to provide guidance and assistance.
            </p>
          </div>
        </div>
      </div>

      {/* Emergency Notice */}
      <div className="bg-destructive/10 border-y border-destructive/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center space-x-3 text-center">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            <span className="text-destructive font-medium">
              If you're experiencing a medical emergency, call 911 or go to your nearest emergency room immediately.
            </span>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Get in Touch</h2>
                <p className="text-lg text-muted-foreground">
                  Our dedicated support team is ready to assist you with any questions 
                  about your health journey or our platform.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className={`p-6 card-shadow hover:elevation-shadow smooth-transition ${
                    info.highlight ? 'border-destructive/30 bg-destructive/5' : ''
                  }`}>
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${
                        info.highlight ? 'bg-destructive' : 'medical-gradient'
                      } rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold text-foreground">{info.title}</h3>
                        <p className={`font-medium ${
                          info.highlight ? 'text-destructive' : 'text-primary'
                        }`}>{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* FAQ Link */}
              <Card className="p-6 card-shadow">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 healing-gradient rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      Frequently Asked Questions
                    </h3>
                    <p className="text-muted-foreground">
                      Find quick answers to common questions about our services.
                    </p>
                  </div>
                  <Button variant="healing">View FAQ</Button>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-8 card-shadow">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">Send us a Message</h3>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Urgency Level</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {urgencyOptions.map((option) => (
                      <label
                        key={option.value}
                        className={`flex items-center space-x-2 p-3 rounded-lg border cursor-pointer smooth-transition ${
                          formData.urgency === option.value
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:bg-accent'
                        }`}
                      >
                        <input
                          type="radio"
                          name="urgency"
                          value={option.value}
                          checked={formData.urgency === option.value}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className={`w-3 h-3 ${option.color} rounded-full`}></div>
                        <span className="text-sm font-medium">{option.label}</span>
                        {formData.urgency === option.value && (
                          <CheckCircle className="w-4 h-4 text-primary ml-auto" />
                        )}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Please provide details about your inquiry or concern..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="medical"
                  disabled={isSubmitting}
                  className="w-full"
                  size="lg"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy. 
                  We'll never share your personal information with third parties.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;