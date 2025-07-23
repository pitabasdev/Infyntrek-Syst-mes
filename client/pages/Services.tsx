import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DollarSign,
  CreditCard,
  FileCheck,
  BarChart3,
  Shield,
  Smartphone,
  Globe,
  Database,
  Users,
  CheckCircle,
  ArrowRight,
  Code,
  Zap,
  Lock,
  Cloud,
  Settings,
  TrendingUp,
  Briefcase,
  Target,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const coreServices = [
    {
      icon: DollarSign,
      title: "Asset Financing Platforms",
      description: "Complete end-to-end asset financing management systems",
      features: [
        "Loan origination and processing",
        "Credit scoring and risk assessment",
        "Disbursement tracking and management",
        "Recovery and collection workflows",
        "Portfolio management dashboards",
        "Regulatory reporting automation",
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      deliveryTime: "12-16 weeks",
    },
    {
      icon: CreditCard,
      title: "Lending & Credit Management",
      description: "Advanced lending platforms with real-time decision making",
      features: [
        "Digital loan application processing",
        "Automated credit scoring algorithms",
        "Multi-channel loan management",
        "Risk analytics and monitoring",
        "Customer lifecycle management",
        "Integration with credit bureaus",
      ],
      technologies: ["Python", "Django", "MongoDB", "Azure"],
      deliveryTime: "10-14 weeks",
    },
    {
      icon: FileCheck,
      title: "KYC & Compliance Automation",
      description: "RBI-compliant KYC verification and compliance tools",
      features: [
        "Digital KYC document verification",
        "AML screening and monitoring",
        "Regulatory compliance tracking",
        "Automated reporting to RBI",
        "Risk-based customer profiling",
        "Audit trail management",
      ],
      technologies: ["Java", "Spring Boot", "Oracle", "GCP"],
      deliveryTime: "8-12 weeks",
    },
    {
      icon: BarChart3,
      title: "Financial Analytics & BI",
      description: "Real-time financial reporting and business intelligence",
      features: [
        "Executive dashboards and reporting",
        "Predictive analytics models",
        "Risk monitoring and alerts",
        "Performance benchmarking",
        "Regulatory reporting automation",
        "Custom analytics solutions",
      ],
      technologies: ["Power BI", "Tableau", "Python", "SQL Server"],
      deliveryTime: "6-10 weeks",
    },
  ];

  const additionalServices = [
    {
      icon: Smartphone,
      title: "Mobile Banking Solutions",
      description:
        "Secure mobile applications for banking and financial services",
      highlights: [
        "iOS and Android native apps",
        "Biometric authentication",
        "Real-time transaction processing",
        "Digital wallet integration",
      ],
    },
    {
      icon: Globe,
      title: "Payment Gateway Integration",
      description: "Seamless payment processing and gateway integrations",
      highlights: [
        "Multi-payment gateway support",
        "PCI DSS compliance",
        "Fraud detection systems",
        "Real-time transaction monitoring",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Migration & DevOps",
      description: "Cloud infrastructure and deployment automation",
      highlights: [
        "AWS/Azure/GCP migration",
        "CI/CD pipeline setup",
        "Infrastructure as Code",
        "24/7 monitoring and support",
      ],
    },
    {
      icon: Settings,
      title: "API Development & Integration",
      description: "RESTful APIs and third-party system integrations",
      highlights: [
        "Custom API development",
        "Third-party API integrations",
        "API security and rate limiting",
        "Documentation and testing",
      ],
    },
  ];

  const industries = [
    {
      title: "Banks & NBFCs",
      icon: Briefcase,
      description:
        "Core banking systems, lending platforms, and compliance tools",
    },
    {
      title: "Fintech Startups",
      icon: Zap,
      description:
        "MVP development, payment solutions, and scalable architectures",
    },
    {
      title: "Insurance Companies",
      icon: Shield,
      description: "Policy management systems and claims processing automation",
    },
    {
      title: "Investment Firms",
      icon: TrendingUp,
      description: "Portfolio management and trading platform development",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "Understanding requirements and regulatory compliance needs",
    },
    {
      step: "02",
      title: "Architecture Design",
      description: "Designing scalable and secure system architecture",
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "Agile development with continuous testing and quality assurance",
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Production deployment with ongoing maintenance and support",
    },
  ];

  const certifications = [
    "ISO 27001 Certified",
    "RBI Compliance Expertise",
    "PCI DSS Certified",
    "AWS Certified Solutions Architect",
    "Microsoft Azure Certified",
    "Google Cloud Certified",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-finance-navy to-slate-800 text-white py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)] opacity-70"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge className="bg-finance-gold/20 text-finance-gold border-finance-gold/30">
              Our Services
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Comprehensive
              <span className="bg-gradient-to-r from-finance-gold to-yellow-400 bg-clip-text text-transparent">
                {" "}
                Fintech
              </span>
              <br />
              Solutions & Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From RBI-compliant software development to custom enterprise
              solutions, we deliver cutting-edge financial technology that
              drives business growth and regulatory compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-finance-gold hover:bg-finance-gold/90 text-finance-navy font-semibold"
                asChild
              >
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/10 text-white hover:bg-white/10"
                asChild
              >
                <Link to="/careers/tech">View Tech Careers</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-finance-blue/10 text-finance-blue border-finance-blue/20">
              Core Services
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-finance-navy">
              Specialized Financial
              <span className="text-finance-blue"> Software Solutions</span>
            </h2>
            <p className="text-xl text-finance-gray max-w-3xl mx-auto">
              Our Finance Software Development Division creates custom solutions
              that meet the unique needs of financial institutions and fintech
              companies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coreServices.map((service, index) => {
              const Icon = service.icon;
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
                          {service.title}
                        </CardTitle>
                        <p className="text-finance-gray">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-finance-navy mb-3">
                        Key Features:
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle className="w-4 h-4 text-finance-success flex-shrink-0" />
                            <span className="text-finance-gray text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-finance-navy mb-2">
                          Technologies:
                        </h5>
                        <div className="flex flex-wrap gap-1">
                          {service.technologies.map((tech, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="font-medium text-finance-navy mb-2">
                          Delivery Time:
                        </h5>
                        <span className="text-finance-blue font-semibold">
                          {service.deliveryTime}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-finance-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-finance-gold/20 text-finance-gold border-finance-gold/30">
              Additional Services
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-finance-navy">
              Complete Technology
              <span className="text-finance-blue"> Ecosystem</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-finance-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-finance-gold" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-finance-navy">
                          {service.title}
                        </h3>
                        <p className="text-finance-gray">
                          {service.description}
                        </p>
                        <div className="space-y-2">
                          {service.highlights.map((highlight, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-2"
                            >
                              <CheckCircle className="w-4 h-4 text-finance-success flex-shrink-0" />
                              <span className="text-sm text-finance-gray">
                                {highlight}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-finance-blue/10 text-finance-blue border-finance-blue/20">
              Industries We Serve
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-finance-navy">
              Trusted by Leading
              <span className="text-finance-blue"> Financial Institutions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card
                  key={index}
                  className="text-center border-2 hover:border-finance-blue/30 transition-colors"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-finance-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-finance-blue" />
                    </div>
                    <h3 className="text-lg font-semibold text-finance-navy mb-3">
                      {industry.title}
                    </h3>
                    <p className="text-finance-gray text-sm">
                      {industry.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-finance-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-finance-gold/20 text-finance-gold border-finance-gold/30">
              Our Process
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-finance-navy">
              How We
              <span className="text-finance-blue"> Deliver Excellence</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg bg-white"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-finance-blue to-finance-navy text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-finance-navy mb-3">
                    {step.title}
                  </h3>
                  <p className="text-finance-gray text-sm">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-finance-blue/10 text-finance-blue border-finance-blue/20">
              Certifications & Compliance
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-finance-navy">
              Certified for
              <span className="text-finance-blue"> Trust & Security</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="text-center border-2 hover:border-finance-gold/30 transition-colors"
              >
                <CardContent className="p-6">
                  <Award className="w-8 h-8 text-finance-gold mx-auto mb-3" />
                  <span className="font-medium text-finance-navy">{cert}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-finance-navy to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Transform Your Financial Operations?
            </h2>
            <p className="text-xl text-gray-300">
              Let's discuss how our fintech solutions can help your business
              achieve compliance, scale efficiently, and serve customers better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-finance-gold hover:bg-finance-gold/90 text-finance-navy font-semibold"
                asChild
              >
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/10 text-white hover:bg-white/10"
                asChild
              >
                <Link to="/careers/tech">Join Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
