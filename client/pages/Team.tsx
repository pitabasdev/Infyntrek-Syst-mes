import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  Linkedin,
  Mail,
  Github,
  Globe,
  Award,
  Code,
  Shield,
  BarChart3,
  Briefcase,
  GraduationCap,
  Heart,
  MapPin,
  Calendar,
  Target,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const Team = () => {
  const leadership = [
    {
      name: "Rajesh Kumar",
      position: "Founder & CEO",
      department: "Executive Leadership",
      location: "Seattle, WA (Remote)",
      experience: "15+ years",
      image: "/api/placeholder/200/200",
      bio: "Visionary leader with 15+ years in financial services and fintech. Previously served as VP of Digital Banking at HDFC Bank and led fintech initiatives at ICICI Bank. Founded FinanceStream with the mission to democratize financial technology.",
      expertise: [
        "Strategic Planning",
        "Financial Services",
        "RBI Regulations",
        "Business Development",
        "Team Leadership",
      ],
      education: "MBA Finance, IIM Bangalore | B.Tech, IIT Delhi",
      achievements: [
        "Led ₹1 Cr+ revenue growth",
        "Built team from 5 to 84 members",
        "RBI compliance expert",
      ],
      social: {
        linkedin: "#",
        email: "rajesh@financestream.com",
        twitter: "#",
      },
    },
    {
      name: "Priya Sharma",
      position: "Chief Technology Officer",
      department: "Technology",
      location: "Bangalore, India (Remote)",
      experience: "12+ years",
      image: "/api/placeholder/200/200",
      bio: "Technology leader with extensive experience in fintech architecture. Former Principal Engineer at Paytm and Senior Tech Lead at Razorpay. Expert in building scalable payment systems and financial APIs.",
      expertise: [
        "System Architecture",
        "Fintech Development",
        "API Design",
        "Cloud Infrastructure",
        "Team Management",
      ],
      education: "M.Tech Computer Science, IIT Bombay | B.E., VTU",
      achievements: [
        "Architected 50+ fintech solutions",
        "Led cloud migration initiatives",
        "AWS Certified Solutions Architect",
      ],
      social: {
        linkedin: "#",
        email: "priya@financestream.com",
        github: "#",
      },
    },
    {
      name: "Amit Patel",
      position: "Head of Compliance & Risk",
      department: "Compliance",
      location: "Mumbai, India (Remote)",
      experience: "18+ years",
      image: "/api/placeholder/200/200",
      bio: "Former RBI official with deep expertise in financial regulations and compliance frameworks. Specialized in NBFC regulations, AML policies, and risk management for financial institutions.",
      expertise: [
        "RBI Compliance",
        "Risk Management",
        "AML/KYC Frameworks",
        "Regulatory Affairs",
        "Audit & Assessment",
      ],
      education: "M.Com, Mumbai University | Chartered Accountant",
      achievements: [
        "15+ years at RBI",
        "Compliance framework architect",
        "Industry thought leader",
      ],
      social: {
        linkedin: "#",
        email: "amit@financestream.com",
      },
    },
  ];

  const departments = [
    {
      name: "Engineering Team",
      icon: Code,
      size: "32 members",
      description:
        "Full-stack developers, mobile engineers, and DevOps specialists",
      roles: [
        "Senior Full Stack Developers",
        "Frontend React Specialists",
        "Backend Node.js Engineers",
        "Mobile App Developers",
        "DevOps Engineers",
        "QA Automation Engineers",
      ],
    },
    {
      name: "Product & Design",
      icon: Target,
      size: "8 members",
      description: "Product managers, UX/UI designers, and business analysts",
      roles: [
        "Product Managers",
        "UX/UI Designers",
        "Business Analysts",
        "Technical Writers",
        "User Researchers",
      ],
    },
    {
      name: "Compliance & Security",
      icon: Shield,
      size: "6 members",
      description: "Compliance officers, security experts, and risk analysts",
      roles: [
        "Compliance Officers",
        "Security Engineers",
        "Risk Analysts",
        "Audit Specialists",
        "Legal Advisors",
      ],
    },
    {
      name: "Client Success & Support",
      icon: Heart,
      size: "12 members",
      description:
        "Customer success, technical support, and training specialists",
      roles: [
        "Client Success Managers",
        "Technical Support Engineers",
        "Training Coordinators",
        "Implementation Specialists",
        "Account Managers",
      ],
    },
    {
      name: "Operations & HR",
      icon: Briefcase,
      size: "8 members",
      description:
        "Operations managers, HR specialists, and administrative staff",
      roles: [
        "Operations Managers",
        "HR Business Partners",
        "Finance & Accounting",
        "Project Coordinators",
        "Administrative Staff",
      ],
    },
    {
      name: "Research & Innovation",
      icon: Zap,
      size: "6 members",
      description: "Data scientists, ML engineers, and innovation specialists",
      roles: [
        "Data Scientists",
        "ML Engineers",
        "Research Analysts",
        "Innovation Leads",
        "Technology Scouts",
      ],
    },
  ];

  const seniorTeam = [
    {
      name: "Sarah Chen",
      position: "VP of Engineering",
      department: "Technology",
      experience: "10+ years",
      expertise: [
        "Scalable Architecture",
        "Team Leadership",
        "Agile Development",
      ],
      location: "San Francisco, CA (Remote)",
    },
    {
      name: "Vikram Singh",
      position: "Senior Product Manager",
      department: "Product",
      experience: "8+ years",
      expertise: ["Product Strategy", "User Experience", "Market Research"],
      location: "Delhi, India (Remote)",
    },
    {
      name: "Jennifer Park",
      position: "Head of Design",
      department: "Design",
      experience: "9+ years",
      expertise: ["UX Design", "Design Systems", "User Research"],
      location: "Toronto, Canada (Remote)",
    },
    {
      name: "Mohammed Ali",
      position: "Senior DevOps Engineer",
      department: "Technology",
      experience: "7+ years",
      expertise: ["AWS", "Kubernetes", "CI/CD", "Infrastructure"],
      location: "Dubai, UAE (Remote)",
    },
    {
      name: "Lisa Rodriguez",
      position: "Head of People Operations",
      department: "HR",
      experience: "12+ years",
      expertise: [
        "Talent Acquisition",
        "Culture Building",
        "Performance Management",
      ],
      location: "Austin, TX (Remote)",
    },
    {
      name: "Arjun Krishnan",
      position: "Lead Data Scientist",
      department: "Analytics",
      experience: "6+ years",
      expertise: ["Machine Learning", "Financial Modeling", "Risk Analytics"],
      location: "Hyderabad, India (Remote)",
    },
  ];

  const stats = [
    { number: "84", label: "Team Members", icon: Users },
    { number: "12", label: "Countries", icon: Globe },
    { number: "6", label: "Departments", icon: Briefcase },
    { number: "95%", label: "Retention Rate", icon: Heart },
  ];

  const values = [
    {
      title: "Remote-First Culture",
      description:
        "We believe talent is everywhere, and we hire the best regardless of location.",
      icon: Globe,
    },
    {
      title: "Continuous Learning",
      description:
        "We invest in our team's growth with training, certifications, and conferences.",
      icon: GraduationCap,
    },
    {
      title: "Innovation Mindset",
      description:
        "We encourage experimentation and embrace new technologies and methodologies.",
      icon: Zap,
    },
    {
      title: "Work-Life Balance",
      description:
        "Flexible schedules and unlimited PTO ensure our team stays happy and productive.",
      icon: Heart,
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
              Our Team
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Meet the
              <span className="bg-gradient-to-r from-finance-gold to-yellow-400 bg-clip-text text-transparent">
                {" "}
                Experts
              </span>
              <br />
              Behind Our Success
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our diverse, remote-first team of 84 professionals spans 12
              countries, bringing together the best talent in fintech, finance,
              and technology.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="w-8 h-8 text-finance-gold mx-auto mb-3" />
                  <div className="text-3xl lg:text-4xl font-bold text-finance-gold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-finance-blue/10 text-finance-blue border-finance-blue/20">
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

          <div className="space-y-12">
            {leadership.map((leader, index) => (
              <Card
                key={index}
                className="border-2 hover:border-finance-blue/30 transition-colors"
              >
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="text-center lg:text-left">
                      <div className="w-32 h-32 bg-finance-light rounded-full mx-auto lg:mx-0 mb-4 flex items-center justify-center">
                        <Users className="w-16 h-16 text-finance-blue" />
                      </div>
                      <h3 className="text-xl font-bold text-finance-navy mb-1">
                        {leader.name}
                      </h3>
                      <div className="text-finance-gold font-semibold mb-2">
                        {leader.position}
                      </div>
                      <div className="space-y-1 text-sm text-finance-gray">
                        <div className="flex items-center justify-center lg:justify-start space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{leader.location}</span>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{leader.experience}</span>
                        </div>
                      </div>
                      <div className="flex justify-center lg:justify-start space-x-3 mt-4">
                        <Button variant="outline" size="sm" asChild>
                          <a href={leader.social.linkedin}>
                            <Linkedin className="w-4 h-4" />
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <a href={`mailto:${leader.social.email}`}>
                            <Mail className="w-4 h-4" />
                          </a>
                        </Button>
                        {leader.social.github && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={leader.social.github}>
                              <Github className="w-4 h-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>

                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h4 className="font-semibold text-finance-navy mb-3">
                          About
                        </h4>
                        <p className="text-finance-gray leading-relaxed">
                          {leader.bio}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-finance-navy mb-3">
                            Expertise
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {leader.expertise.map((skill, idx) => (
                              <Badge
                                key={idx}
                                variant="secondary"
                                className="text-xs"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-finance-navy mb-3">
                            Education
                          </h4>
                          <p className="text-finance-gray text-sm">
                            {leader.education}
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-finance-navy mb-3">
                          Key Achievements
                        </h4>
                        <div className="space-y-2">
                          {leader.achievements.map((achievement, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-2"
                            >
                              <Award className="w-4 h-4 text-finance-gold flex-shrink-0" />
                              <span className="text-finance-gray text-sm">
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-finance-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-finance-gold/20 text-finance-gold border-finance-gold/30">
              Our Departments
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-finance-navy">
              Specialized Teams for
              <span className="text-finance-blue"> Every Need</span>
            </h2>
            <p className="text-xl text-finance-gray max-w-3xl mx-auto">
              Our six specialized departments work together to deliver
              exceptional fintech solutions and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-finance-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-finance-blue" />
                    </div>
                    <h3 className="text-xl font-bold text-finance-navy mb-2">
                      {dept.name}
                    </h3>
                    <div className="text-finance-gold font-semibold mb-4">
                      {dept.size}
                    </div>
                    <p className="text-finance-gray mb-6">{dept.description}</p>
                    <div className="space-y-2">
                      {dept.roles.slice(0, 3).map((role, idx) => (
                        <div
                          key={idx}
                          className="text-sm text-finance-gray bg-finance-light px-3 py-1 rounded-full"
                        >
                          {role}
                        </div>
                      ))}
                      {dept.roles.length > 3 && (
                        <div className="text-xs text-finance-blue font-medium">
                          +{dept.roles.length - 3} more roles
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Senior Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-finance-blue/10 text-finance-blue border-finance-blue/20">
              Senior Team
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-finance-navy">
              Department
              <span className="text-finance-blue"> Leaders & Specialists</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seniorTeam.map((member, index) => (
              <Card
                key={index}
                className="border-2 hover:border-finance-blue/30 transition-colors"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-finance-light rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-finance-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-finance-navy mb-1">
                    {member.name}
                  </h3>
                  <div className="text-finance-gold font-semibold mb-2">
                    {member.position}
                  </div>
                  <div className="text-sm text-finance-gray mb-4">
                    {member.department} • {member.experience}
                  </div>
                  <div className="flex items-center justify-center space-x-1 text-xs text-finance-gray mb-4">
                    <MapPin className="w-3 h-3" />
                    <span>{member.location}</span>
                  </div>
                  <div className="space-y-1">
                    {member.expertise.slice(0, 2).map((skill, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="text-xs mx-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-finance-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-finance-gold/20 text-finance-gold border-finance-gold/30">
              Our Culture
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-finance-navy">
              What Makes Us
              <span className="text-finance-blue"> Special</span>
            </h2>
            <p className="text-xl text-finance-gray max-w-3xl mx-auto">
              Our values shape how we work, grow, and succeed together as a
              remote-first global team.
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
              Ready to Join Our Amazing Team?
            </h2>
            <p className="text-xl text-gray-300">
              We're always looking for talented individuals who share our
              passion for financial technology and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-finance-gold hover:bg-finance-gold/90 text-finance-navy font-semibold"
                asChild
              >
                <Link to="/careers/freshers">View Open Positions</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
                asChild
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
