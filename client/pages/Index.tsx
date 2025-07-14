import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Shield,
  TrendingUp,
  Users,
  Award,
  Building2,
  Smartphone,
  Code,
  CheckCircle,
  Star,
  Globe,
  Briefcase,
  DollarSign,
  BarChart3,
  FileCheck,
  CreditCard,
  Database,
  Calendar,
  Rocket,
  Target,
  Zap,
  Heart,
  UserPlus,
  GraduationCap,
  Quote,
  Megaphone,
  Sparkles,
  Trophy,
} from "lucide-react";

const Index = () => {
  const stats = [
    { number: "6+", label: "Years Experience", icon: Award },
    { number: "84", label: "Team Members", icon: Users },
    { number: "₹1Cr+", label: "Annual Turnover", icon: TrendingUp },
    { number: "100+", label: "Client Projects", icon: Building2 },
  ];

  const solutions = [
    {
      icon: DollarSign,
      title: "Asset Financing Tools",
      description:
        "Complete asset financing management systems with loan origination, disbursement tracking, and recovery workflows.",
    },
    {
      icon: CreditCard,
      title: "Lending & Credit Management",
      description:
        "Advanced credit scoring, loan management, and risk assessment platforms with real-time analytics.",
    },
    {
      icon: FileCheck,
      title: "KYC & Compliance Automation",
      description:
        "Automated KYC verification, AML screening, and regulatory compliance tools following RBI guidelines.",
    },
    {
      icon: BarChart3,
      title: "Financial Analytics Dashboards",
      description:
        "Real-time financial reporting, risk analytics, and business intelligence dashboards for decision makers.",
    },
  ];

  const hiringRoles = [
    {
      category: "Software Development",
      roles: [
        "Frontend Developers",
        "Backend Engineers",
        "Full Stack Developers",
        "Mobile App Developers",
      ],
      icon: Code,
    },
    {
      category: "DevOps & Testing",
      roles: [
        "DevOps Engineers",
        "QA Engineers",
        "Test Automation Specialists",
        "Cloud Architects",
      ],
      icon: Rocket,
    },
    {
      category: "Support & Training",
      roles: [
        "Technical Support",
        "Training Coordinators",
        "Documentation Specialists",
        "Client Success",
      ],
      icon: GraduationCap,
    },
    {
      category: "Operations",
      roles: [
        "Business Analysts",
        "Project Managers",
        "HR Specialists",
        "Finance Operations",
      ],
      icon: Briefcase,
    },
  ];

  const timeline = [
    {
      year: "2019",
      title: "Foundation",
      icon: Building2,
      description:
        "Founded as a small finance consultancy firm, offering business-focused financial services under RBI-compliant practices.",
      achievement: "Established RBI-compliant foundation",
    },
    {
      year: "2020",
      title: "Major Breakthrough",
      icon: Trophy,
      description:
        "Won large-scale project managing Asset Finance Systems for multiple MNC clients. Expanded team and began productizing solutions.",
      achievement: "MNC client partnerships secured",
    },
    {
      year: "2023",
      title: "Scale-Up Phase",
      icon: TrendingUp,
      description:
        "Reached ₹1 Crore turnover milestone. Grew to 84 employees under one roof. Became known for agile and compliant fintech solutions.",
      achievement: "₹1 Crore turnover achieved",
    },
    {
      year: "2025",
      title: "New Era",
      icon: Sparkles,
      description:
        "Launched Finance Software Development Division. Started training programs and internship pathways for freshers and entry-level professionals.",
      achievement: "Software Development Division launched",
    },
  ];

  const features = [
    "RBI-Compliant Financial Software",
    "Custom Enterprise Fintech Solutions",
    "Expert Team from Top Financial Institutions",
    "24/7 Technical Support & Maintenance",
    "Agile Development with Quick Turnaround",
    "ISO 27001 Certified Security Standards",
  ];

  const fresherBenefits = [
    "Real-world skills from domain experts",
    "Work on live fintech projects",
    "Monthly stipend during training",
    "Industry-recognized certification",
    "Performance-based absorption",
    "Mentorship from senior developers",
  ];

  return (
    <div className="min-h-screen">
      {/* Hiring Banner */}
      <div className="bg-gradient-to-r from-finance-gold to-yellow-400 text-finance-navy py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-3 text-center">
            <Megaphone className="w-5 h-5" />
            <span className="font-semibold">
              🚀 We're Hiring Aggressively – Join Our Growing Team of 84+
              Professionals!
            </span>
            <Button
              size="sm"
              variant="ghost"
              className="text-finance-navy hover:bg-finance-navy/10"
              asChild
            >
              <Link to="/careers/freshers">Apply Now</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-finance-navy via-finance-navy to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)] opacity-70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(245,158,11,0.1),transparent_50%)] opacity-70"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-finance-gold/20 text-finance-gold border-finance-gold/30">
                  🎉 New: Industry 5.0-Ready Fintech Training Program - 2025
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Fast-Growing Fintech
                  <span className="bg-gradient-to-r from-finance-gold to-yellow-400 bg-clip-text text-transparent">
                    {" "}
                    Innovation
                  </span>
                  <br />
                  Startup Excellence
                </h1>
                <p className="text-xl text-gray-300 max-w-lg">
                  Collaborating with Amazon & AMEX leaders to deliver
                  world-class fintech solutions and train the next generation of
                  developers. Join our aggressive hiring drive!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-finance-gold hover:bg-finance-gold/90 text-finance-navy font-semibold"
                  asChild
                >
                  <Link to="/careers/freshers">
                    <UserPlus className="mr-2 w-5 h-5" />
                    Join Our Team
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                  asChild
                >
                  <Link to="/contact">Get Custom Solution</Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Icon className="w-5 h-5 text-finance-gold" />
                        <span className="text-2xl font-bold">
                          {stat.number}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm">{stat.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="text-center">
                    <Badge className="bg-finance-gold/30 text-finance-gold border-finance-gold/50 mb-4">
                      Inspirational Journey
                    </Badge>
                    <Quote className="w-8 h-8 text-finance-gold mx-auto mb-4" />
                    <blockquote className="text-lg font-medium italic mb-4">
                      "Join a fast-growing fintech startup that's redefining
                      financial innovation with Industry 5.0-ready solutions.
                      Make your mark from Day One with Amazon & AMEX leaders."
                    </blockquote>
                    <div className="text-finance-gold font-semibold">
                      - Leadership Team
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-finance-gold/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-finance-blue/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-finance-blue/10 text-finance-blue border-finance-blue/20">
              Our Journey
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-finance-navy">
              6 Years of
              <span className="text-finance-blue"> Fintech Innovation</span>
            </h2>
            <p className="text-xl text-finance-gray max-w-3xl mx-auto">
              From startup to industry leader - collaborating with Amazon & AMEX
              to deliver cutting-edge fintech solutions and training
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-finance-blue/20 hidden lg:block"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`flex flex-col lg:flex-row items-center gap-8 ${
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    <div className="flex-1 lg:max-w-md">
                      <Card className="border-2 hover:border-finance-blue/30 transition-colors bg-white">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-3 mb-4">
                            <div className="w-12 h-12 bg-finance-blue/10 rounded-lg flex items-center justify-center">
                              <Icon className="w-6 h-6 text-finance-blue" />
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-finance-gold">
                                {item.year}
                              </div>
                              <div className="text-lg font-bold text-finance-navy">
                                {item.title}
                              </div>
                            </div>
                          </div>
                          <p className="text-finance-gray mb-4">
                            {item.description}
                          </p>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-finance-success" />
                            <span className="text-sm font-semibold text-finance-blue">
                              {item.achievement}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="hidden lg:flex w-16 h-16 bg-finance-blue rounded-full items-center justify-center z-10 border-4 border-white shadow-lg">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>

                    <div className="flex-1 lg:max-w-md"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-20 bg-finance-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-finance-gold/20 text-finance-gold border-finance-gold/30">
              What We Build
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-finance-navy">
              Custom Financial
              <span className="text-finance-blue"> Software Solutions</span>
            </h2>
            <p className="text-xl text-finance-gray max-w-3xl mx-auto">
              Our Finance Software Development Division creates cutting-edge
              applications following strict RBI compliance standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-finance-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-finance-blue" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-finance-navy">
                          {solution.title}
                        </h3>
                        <p className="text-finance-gray">
                          {solution.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/services">
                View All Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Aggressive Hiring Section */}
      <section className="py-20 bg-gradient-to-r from-finance-blue to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="flex items-center justify-center space-x-3">
              <Zap className="w-8 h-8 text-finance-gold" />
              <Badge className="bg-finance-gold/20 text-finance-gold border-finance-gold/30 text-lg px-4 py-2">
                We're Hiring Aggressively!
              </Badge>
              <Zap className="w-8 h-8 text-finance-gold" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Join Our Growing Team of
              <span className="text-finance-gold"> 84+ Professionals</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're expanding rapidly and looking for talented individuals
              across all departments. Be part of our journey from ₹1 Crore to
              the next milestone!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hiringRoles.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className="bg-white/10 border-white/20 text-white"
                >
                  <CardContent className="p-6">
                    <div className="text-center space-y-4">
                      <div className="w-12 h-12 bg-finance-gold rounded-lg flex items-center justify-center mx-auto">
                        <Icon className="w-6 h-6 text-finance-navy" />
                      </div>
                      <h3 className="font-semibold text-lg">
                        {category.category}
                      </h3>
                      <div className="space-y-2">
                        {category.roles.map((role, idx) => (
                          <div key={idx} className="text-sm text-blue-100">
                            • {role}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-finance-gold hover:bg-finance-gold/90 text-finance-navy font-semibold"
              asChild
            >
              <Link to="/careers/freshers">
                <UserPlus className="mr-2 w-5 h-5" />
                Apply for Open Positions
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Freshers Spotlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-finance-gold/20 text-finance-gold border-finance-gold/30">
                  Freshers Spotlight
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-finance-navy">
                  Launch Your Career in
                  <span className="text-finance-blue"> Fintech</span>
                </h2>
                <p className="text-xl text-finance-gray">
                  Our special training + internship program is designed for
                  young talent who want to make their mark in financial
                  technology from Day One.
                </p>
              </div>

              <div className="space-y-4">
                {fresherBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-finance-success flex-shrink-0" />
                    <span className="text-finance-gray">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-finance-gold hover:bg-finance-gold/90 text-finance-navy"
                  asChild
                >
                  <Link to="/careers/freshers">
                    <GraduationCap className="mr-2 w-5 h-5" />
                    Join Training Program
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <Card className="border-0 shadow-2xl">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="text-center">
                      <Quote className="w-8 h-8 text-finance-blue mx-auto mb-4" />
                      <blockquote className="text-lg font-medium italic text-finance-gray mb-4">
                        "Working here as a fresher has been incredible. I'm
                        building real fintech solutions while learning from
                        industry experts. The monthly stipend and mentorship
                        program made this the perfect start to my career."
                      </blockquote>
                      <div className="text-finance-navy font-semibold">
                        - Training Program Graduate
                      </div>
                      <div className="text-sm text-finance-gray">
                        Now Full-time Developer
                      </div>
                    </div>

                    <div className="bg-finance-light rounded-lg p-6 text-center">
                      <div className="text-2xl font-bold text-finance-navy mb-2">
                        Applications Open
                      </div>
                      <div className="text-finance-blue font-semibold">
                        Apply Now
                      </div>
                      <div className="text-sm text-finance-gray mt-2">
                        Limited seats available
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="absolute -top-6 -left-6 w-20 h-20 bg-finance-gold/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-finance-blue/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-finance-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-finance-blue/10 text-finance-blue border-finance-blue/20">
              Careers That Matter
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-finance-navy">
              Work on
              <span className="text-finance-blue"> Meaningful Projects</span>
            </h2>
            <p className="text-xl text-finance-gray max-w-3xl mx-auto">
              Join a company where your work directly impacts financial
              inclusion and business growth across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 hover:border-finance-blue/30 transition-colors bg-white"
              >
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-8 h-8 text-finance-success mx-auto mb-4" />
                  <span className="text-finance-gray font-medium">
                    {feature}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-finance-navy to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Sparkles className="w-8 h-8 text-finance-gold" />
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                Ready to Shape the Future of Fintech?
              </h2>
              <Sparkles className="w-8 h-8 text-finance-gold" />
            </div>
            <p className="text-xl text-gray-300">
              Whether you're a fresh graduate ready to start your career or an
              experienced professional looking for your next challenge, we have
              opportunities that matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-finance-gold hover:bg-finance-gold/90 text-finance-navy font-semibold"
                asChild
              >
                <Link to="/careers/freshers">
                  <Heart className="mr-2 w-5 h-5" />
                  Start Your Journey
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
                asChild
              >
                <Link to="/contact">Partner With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
