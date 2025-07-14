import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Globe,
  Users,
  MessageSquare,
  Send,
  Building2,
  Headphones,
  Calendar,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    serviceType: "",
    projectBudget: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      primary: "hello@infyntrek.com",
      secondary: "support@infyntrek.com",
      description: "Get in touch for general inquiries or support",
      available: "24/7 Response",
    },
    {
      icon: Phone,
      title: "Call Us",
      primary: "+1 (206) 555-0123",
      secondary: "+91 98765 43210",
      description: "Speak directly with our team",
      available: "Mon-Fri, 9AM-6PM PST",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      primary: "Available on website",
      secondary: "Average response: 2 mins",
      description: "Quick support via our chat system",
      available: "Business hours",
    },
    {
      icon: Calendar,
      title: "Schedule Meeting",
      primary: "Book consultation",
      secondary: "15-60 minute slots",
      description: "Free consultation with our experts",
      available: "Flexible scheduling",
    },
  ];

  const offices = [
    {
      type: "Headquarters",
      city: "Seattle",
      country: "United States",
      address: "1201 3rd Avenue, Suite 3200, Seattle, WA 98101",
      timezone: "PST (UTC-8)",
      description: "Our global headquarters and main operations center",
      icon: Building2,
      highlights: [
        "Executive Leadership",
        "Business Development",
        "Client Relations",
        "Strategic Planning",
      ],
    },
    {
      type: "Development Hub",
      city: "Bangalore",
      country: "India",
      address: "Manyata Tech Park, Outer Ring Road, Bangalore 560045",
      timezone: "IST (UTC+5:30)",
      description: "Primary development center and technical operations",
      icon: Globe,
      highlights: [
        "Software Development",
        "Quality Assurance",
        "Technical Support",
        "DevOps Operations",
      ],
    },
    {
      type: "Regional Office",
      city: "Mumbai",
      country: "India",
      address: "BKC, Bandra East, Mumbai 400051",
      timezone: "IST (UTC+5:30)",
      description: "Compliance, risk management, and client services",
      icon: Shield,
      highlights: [
        "Compliance & Risk",
        "Client Services",
        "Business Operations",
        "Training Center",
      ],
    },
  ];

  const serviceTypes = [
    "Custom Fintech Development",
    "RBI Compliance Solutions",
    "Mobile Banking Apps",
    "Payment Gateway Integration",
    "KYC & AML Solutions",
    "Financial Analytics",
    "Cloud Migration",
    "Technical Consulting",
    "Training & Certification",
    "Other",
  ];

  const budgetRanges = [
    "Under $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000 - $250,000",
    "$250,000+",
    "Not sure / Consultation needed",
  ];

  const remoteFeatures = [
    {
      icon: Users,
      title: "Global Remote Team",
      description: "84+ professionals across 12 countries working seamlessly",
    },
    {
      icon: Clock,
      title: "24/7 Operations",
      description: "Round-the-clock development and support coverage",
    },
    {
      icon: Zap,
      title: "Agile Collaboration",
      description: "Advanced tools and processes for remote collaboration",
    },
    {
      icon: Shield,
      title: "Secure Infrastructure",
      description: "Enterprise-grade security for distributed teams",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-finance-navy to-slate-800 text-white py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)] opacity-70"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge className="bg-finance-gold/20 text-finance-gold border-finance-gold/30">
              Get in Touch
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Let's Build Something
              <span className="bg-gradient-to-r from-finance-gold to-yellow-400 bg-clip-text text-transparent">
                {" "}
                Amazing
              </span>
              <br />
              Together
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your financial operations? Our global remote
              team is here to help. Headquartered in Seattle with development
              centers worldwide, collaborating with Amazon & AMEX leaders.
            </p>
          </div>

          {/* Remote Work Highlight */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {remoteFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="bg-white/10 border-white/20 text-white"
                >
                  <CardContent className="p-6 text-center">
                    <Icon className="w-8 h-8 text-finance-gold mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-300">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-finance-blue/10 text-finance-blue border-finance-blue/20">
              Contact Methods
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-finance-navy">
              Multiple Ways to
              <span className="text-finance-blue"> Reach Us</span>
            </h2>
            <p className="text-xl text-finance-gray max-w-3xl mx-auto">
              Choose the communication method that works best for you. We're
              available across all time zones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card
                  key={index}
                  className="border-2 hover:border-finance-blue/30 transition-colors text-center"
                >
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-finance-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-finance-blue" />
                    </div>
                    <h3 className="text-lg font-semibold text-finance-navy mb-3">
                      {method.title}
                    </h3>
                    <div className="space-y-2 mb-4">
                      <div className="font-semibold text-finance-blue">
                        {method.primary}
                      </div>
                      <div className="text-sm text-finance-gray">
                        {method.secondary}
                      </div>
                    </div>
                    <p className="text-finance-gray text-sm mb-4">
                      {method.description}
                    </p>
                    <div className="text-xs text-finance-gold font-medium">
                      {method.available}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Offices */}
      <section className="py-20 bg-finance-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="space-y-4 mb-8">
                <Badge className="bg-finance-gold/20 text-finance-gold border-finance-gold/30">
                  Send us a Message
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-finance-navy">
                  Tell Us About Your
                  <span className="text-finance-blue"> Project</span>
                </h2>
                <p className="text-xl text-finance-gray">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>
              </div>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="serviceType">Service Type</Label>
                      <Select
                        onValueChange={(value) =>
                          handleSelectChange("serviceType", value)
                        }
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceTypes.map((service, index) => (
                            <SelectItem key={index} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="projectBudget">Project Budget</Label>
                      <Select
                        onValueChange={(value) =>
                          handleSelectChange("projectBudget", value)
                        }
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((range, index) => (
                            <SelectItem key={index} value={range}>
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="mt-1"
                        placeholder="Tell us about your project requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-finance-gold hover:bg-finance-gold/90 text-finance-navy font-semibold"
                    >
                      <Send className="mr-2 w-5 h-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Office Locations */}
            <div>
              <div className="space-y-4 mb-8">
                <Badge className="bg-finance-blue/10 text-finance-blue border-finance-blue/20">
                  Our Locations
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-finance-navy">
                  Global Presence,
                  <span className="text-finance-blue"> Local Expertise</span>
                </h2>
                <p className="text-xl text-finance-gray">
                  Our offices and remote teams span across time zones to serve
                  you better.
                </p>
              </div>

              <div className="space-y-6">
                {offices.map((office, index) => {
                  const Icon = office.icon;
                  return (
                    <Card
                      key={index}
                      className="border-2 hover:border-finance-blue/30 transition-colors"
                    >
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-finance-blue/10 rounded-lg flex items-center justify-center">
                            <Icon className="w-6 h-6 text-finance-blue" />
                          </div>
                          <div>
                            <CardTitle className="text-finance-navy">
                              {office.type}
                            </CardTitle>
                            <div className="text-finance-gold font-semibold">
                              {office.city}, {office.country}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-finance-gray">
                          {office.description}
                        </p>

                        <div className="space-y-2">
                          <div className="flex items-start space-x-2">
                            <MapPin className="w-4 h-4 text-finance-blue mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-finance-gray">
                              {office.address}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-finance-blue flex-shrink-0" />
                            <span className="text-sm text-finance-gray">
                              {office.timezone}
                            </span>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium text-finance-navy mb-2">
                            Key Functions:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {office.highlights.map((highlight, idx) => (
                              <Badge
                                key={idx}
                                variant="secondary"
                                className="text-xs"
                              >
                                {highlight}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-finance-gold/20 text-finance-gold border-finance-gold/30">
              Frequently Asked Questions
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-finance-navy">
              Quick
              <span className="text-finance-blue"> Answers</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 hover:border-finance-blue/30 transition-colors">
              <CardContent className="p-6">
                <h3 className="font-semibold text-finance-navy mb-3">
                  How do you handle remote collaboration?
                </h3>
                <p className="text-finance-gray text-sm">
                  We use advanced collaboration tools and agile methodologies to
                  ensure seamless communication across time zones. Our teams
                  follow strict protocols for project management and quality
                  assurance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-finance-blue/30 transition-colors">
              <CardContent className="p-6">
                <h3 className="font-semibold text-finance-navy mb-3">
                  What's your typical response time?
                </h3>
                <p className="text-finance-gray text-sm">
                  We respond to emails within 24 hours and live chat inquiries
                  within 2 minutes during business hours. Emergency support is
                  available 24/7 for critical issues.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-finance-blue/30 transition-colors">
              <CardContent className="p-6">
                <h3 className="font-semibold text-finance-navy mb-3">
                  Do you provide free consultations?
                </h3>
                <p className="text-finance-gray text-sm">
                  Yes! We offer free 30-minute consultations to understand your
                  requirements and provide initial recommendations. Schedule one
                  through our contact form or calendar link.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-finance-blue/30 transition-colors">
              <CardContent className="p-6">
                <h3 className="font-semibold text-finance-navy mb-3">
                  What security measures do you have?
                </h3>
                <p className="text-finance-gray text-sm">
                  We follow enterprise-grade security protocols including ISO
                  27001 certification, encrypted communications, VPN access, and
                  regular security audits for all remote operations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-finance-navy to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300">
              Join 500+ companies that trust us with their financial technology
              needs. Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-finance-gold hover:bg-finance-gold/90 text-finance-navy font-semibold"
                asChild
              >
                <a href="mailto:hello@financestream.com">
                  <Mail className="mr-2 w-5 h-5" />
                  Email Us Now
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
                asChild
              >
                <Link to="/careers/freshers">
                  Join Our Team
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
