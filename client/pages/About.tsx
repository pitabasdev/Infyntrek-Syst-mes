import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Users,
  Award,
  TrendingUp,
  Code,
  Shield,
  Target,
  Eye,
  Heart,
  Linkedin,
  ArrowRight,
  CheckCircle,
  Calendar,
  Briefcase,
  Rocket,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const timeline = [
    {
      year: "2014",
      title: "Foundation",
      icon: Building2,
      description:
        "Founded as a traditional finance management firm providing accounting, tax planning, and advisory services to small and medium businesses in Mumbai.",
      achievements: [
        "Established office in Mumbai",
        "Onboarded first 25 clients",
        "Built team of 5 finance professionals",
      ],
    },
    {
      year: "2016",
      title: "Growth & Expansion",
      icon: TrendingUp,
      description:
        "Expanded service offerings to include financial consulting for startups and developed expertise in NBFC regulations and compliance.",
      achievements: [
        "Grew client base to 100+ companies",
        "Specialized in NBFC compliance",
        "Established partnerships with banks",
      ],
    },
    {
      year: "2018",
      title: "Digital Transformation",
      icon: Code,
      description:
        "Pivoted to fintech development, creating our first RBI-compliant software solutions for Non-Banking Financial Companies (NBFCs) and small banks.",
      achievements: [
        "Launched first fintech product",
        "Obtained RBI compliance certifications",
        "Built technology team of 15 developers",
      ],
    },
    {
      year: "2020",
      title: "Technology Leadership",
      icon: Rocket,
      description:
        "Became a recognized leader in fintech solutions, developing mobile banking apps, payment gateways, and API integration services.",
      achievements: [
        "50+ software solutions delivered",
        "Expanded to 3 major cities",
        "Team grew to 40+ professionals",
      ],
    },
    {
      year: "2022",
      title: "Innovation & Scale",
      icon: Globe,
      description:
        "Launched comprehensive training programs, expanded into consulting services, and developed AI-powered financial analytics tools.",
      achievements: [
        "Training program launched",
        "AI/ML capabilities added",
        "International client acquisitions",
      ],
    },
    {
      year: "2024",
      title: "Full-Scale IT Company",
      icon: Award,
      description:
        "Transformed into a complete IT solutions provider offering fintech development, training programs, recruitment services, and enterprise solutions.",
      achievements: [
        "500+ clients served",
        "Multi-location presence",
        "Industry recognition awards",
      ],
    },
  ];

  const leadership = [
    {
      name: "Rajesh Kumar",
      position: "Founder & CEO",
      image: "/api/placeholder/150/150",
      bio: "15+ years in financial services and fintech. Previously worked with HDFC Bank and ICICI Bank in senior positions.",
      linkedin: "#",
      expertise: [
        "Financial Services",
        "Strategic Planning",
        "RBI Regulations",
      ],
    },
    {
      name: "Priya Sharma",
      position: "CTO",
      image: "/api/placeholder/150/150",
      bio: "Former tech lead at Paytm and Razorpay. Expert in payment systems, blockchain, and financial APIs.",
      linkedin: "#",
      expertise: ["Fintech Development", "API Architecture", "Team Leadership"],
    },
    {
      name: "Amit Patel",
      position: "Head of Compliance",
      image: "/api/placeholder/150/150",
      bio: "Ex-RBI official with deep expertise in financial regulations, risk management, and compliance frameworks.",
      linkedin: "#",
      expertise: ["RBI Compliance", "Risk Management", "Regulatory Affairs"],
    },
  ];

  const values = [
    {
      icon: Shield,
      title: "Trust & Security",
      description:
        "We prioritize the highest levels of security and regulatory compliance in all our solutions.",
    },
    {
      icon: Users,
      title: "Client Success",
      description:
        "Our clients' success is our success. We build long-term partnerships based on delivered value.",
    },
    {
      icon: Code,
      title: "Innovation",
      description:
        "Continuous innovation drives us to create cutting-edge solutions for evolving financial needs.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description:
        "Transparent, ethical business practices form the foundation of everything we do.",
    },
  ];

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "500+", label: "Clients Served" },
    { number: "50+", label: "Projects Delivered" },
    { number: "60+", label: "Team Members" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-finance-navy to-slate-800 text-white py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)] opacity-70"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge className="bg-finance-gold/20 text-finance-gold border-finance-gold/30">
              About FinanceStream
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Our Journey from
              <span className="bg-gradient-to-r from-finance-gold to-yellow-400 bg-clip-text text-transparent">
                {" "}
                Finance Firm
              </span>
              <br />
              to Fintech Leader
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how we transformed from a traditional finance management
              company into a leading provider of innovative financial technology
              solutions and services.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-finance-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-2 border-finance-blue/20 hover:border-finance-blue/40 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-finance-blue rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-finance-navy">
                    Our Mission
                  </h2>
                </div>
                <p className="text-finance-gray text-lg leading-relaxed">
                  To democratize financial technology by providing cutting-edge,
                  RBI-compliant solutions that empower businesses of all sizes
                  to thrive in the digital economy. We bridge the gap between
                  traditional finance and modern technology through innovation,
                  training, and exceptional service delivery.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-finance-gold/20 hover:border-finance-gold/40 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-finance-gold rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-finance-navy" />
                  </div>
                  <h2 className="text-2xl font-bold text-finance-navy">
                    Our Vision
                  </h2>
                </div>
                <p className="text-finance-gray text-lg leading-relaxed">
                  To become India's most trusted fintech solutions provider,
                  recognized for transforming financial services through
                  innovative technology, comprehensive training programs, and
                  sustainable business practices that create lasting value for
                  our clients and communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Evolution Timeline */}
      <section className="py-20 bg-finance-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-finance-blue/10 text-finance-blue border-finance-blue/20">
              Our Evolution
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-finance-navy">
              A Decade of
              <span className="text-finance-blue"> Transformation</span>
            </h2>
            <p className="text-xl text-finance-gray max-w-3xl mx-auto">
              Trace our journey from a small finance firm to a comprehensive
              fintech solutions provider, marked by continuous innovation and
              client success.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
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
                    {/* Content */}
                    <div className="flex-1 lg:max-w-md">
                      <Card className="border-2 hover:border-finance-blue/30 transition-colors bg-white">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 bg-finance-blue/10 rounded-lg flex items-center justify-center">
                              <Icon className="w-5 h-5 text-finance-blue" />
                            </div>
                            <div>
                              <div className="text-sm text-finance-gold font-semibold">
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
                          <div className="space-y-2">
                            {item.achievements.map((achievement, idx) => (
                              <div
                                key={idx}
                                className="flex items-center space-x-2"
                              >
                                <CheckCircle className="w-4 h-4 text-finance-success flex-shrink-0" />
                                <span className="text-sm text-finance-gray">
                                  {achievement}
                                </span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Timeline Node */}
                    <div className="hidden lg:flex w-12 h-12 bg-finance-blue rounded-full items-center justify-center z-10 border-4 border-white shadow-lg">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>

                    {/* Spacer for even items */}
                    <div className="flex-1 lg:max-w-md"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-finance-gold/20 text-finance-gold border-finance-gold/30">
              Leadership Team
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-finance-navy">
              Experienced
              <span className="text-finance-blue"> Industry Leaders</span>
            </h2>
            <p className="text-xl text-finance-gray max-w-3xl mx-auto">
              Our leadership team brings decades of combined experience from
              leading financial institutions, fintech companies, and regulatory
              bodies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-finance-light rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-12 h-12 text-finance-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-finance-navy mb-1">
                    {leader.name}
                  </h3>
                  <div className="text-finance-gold font-semibold mb-4">
                    {leader.position}
                  </div>
                  <p className="text-finance-gray text-sm mb-4 leading-relaxed">
                    {leader.bio}
                  </p>
                  <div className="space-y-2 mb-4">
                    {leader.expertise.map((skill, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="text-xs mx-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href={leader.linkedin} target="_blank" rel="noopener">
                      <Linkedin className="w-4 h-4 mr-2" />
                      Connect
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-finance-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-finance-blue/10 text-finance-blue border-finance-blue/20">
              Our Values
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-finance-navy">
              What Drives
              <span className="text-finance-blue"> Our Success</span>
            </h2>
            <p className="text-xl text-finance-gray max-w-3xl mx-auto">
              Our core values guide every decision we make and every solution we
              deliver, ensuring consistent quality and ethical practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
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
                          {value.title}
                        </h3>
                        <p className="text-finance-gray">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-finance-navy to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Be Part of Our Journey?
            </h2>
            <p className="text-xl text-gray-300">
              Whether you're looking for fintech solutions, want to join our
              team, or need training in financial technology, we're here to help
              you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-finance-gold hover:bg-finance-gold/90 text-finance-navy font-semibold"
                asChild
              >
                <Link to="/careers/freshers">
                  Join Our Team
                  <ArrowRight className="ml-2 w-5 h-5" />
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

export default About;
