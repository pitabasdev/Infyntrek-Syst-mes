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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Briefcase,
  Users,
  TrendingUp,
  Heart,
  MessageSquare,
  Target,
  DollarSign,
  MapPin,
  Calendar,
  CheckCircle,
  ArrowRight,
  FileText,
  Upload,
  Clock,
  Globe,
  Award,
  BarChart3,
  Headphones,
  GraduationCap,
  UserCheck,
  Building2,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CareersNonTech = () => {
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [applicationData, setApplicationData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    currentLocation: "",
    expectedSalary: "",
    noticePeriod: "",
    linkedin: "",
    portfolio: "",
    coverLetter: "",
    role: "",
    education: "",
  });

  const nonTechRoles = [
    {
      id: "product-manager",
      title: "Senior Product Manager",
      department: "Product",
      type: "Full-time",
      location: "Remote (Global)",
      experience: "5+ years",
      salary: "$90,000 - $130,000",
      icon: Target,
      urgent: true,
      description:
        "Lead product strategy and development for our fintech solutions, working closely with engineering and design teams.",
      responsibilities: [
        "Define product roadmap and strategy for fintech applications",
        "Collaborate with stakeholders to gather and prioritize requirements",
        "Work with engineering teams to deliver product features",
        "Conduct market research and competitive analysis",
        "Analyze product metrics and user feedback for improvements",
        "Ensure regulatory compliance in product development",
      ],
      requirements: [
        "5+ years of product management experience in fintech or financial services",
        "Strong understanding of financial regulations and compliance",
        "Experience with agile development methodologies",
        "Excellent analytical and problem-solving skills",
        "Strong communication and leadership abilities",
        "MBA or equivalent experience preferred",
      ],
      skills: [
        "Product Strategy",
        "Agile/Scrum",
        "Analytics",
        "User Research",
        "Financial Services",
        "Compliance",
        "Roadmapping",
        "Stakeholder Management",
      ],
      benefits: [
        "Competitive salary with equity",
        "Remote work flexibility",
        "Health and dental insurance",
        "Professional development budget",
        "Product management certification",
        "Flexible PTO policy",
      ],
    },
    {
      id: "business-analyst",
      title: "Senior Business Analyst",
      department: "Business Operations",
      type: "Full-time",
      location: "Remote (Americas/Europe)",
      experience: "4+ years",
      salary: "$70,000 - $100,000",
      icon: BarChart3,
      urgent: false,
      description:
        "Analyze business processes and requirements to drive operational efficiency and support strategic decision-making.",
      responsibilities: [
        "Gather and document business requirements for new features",
        "Perform data analysis and create business intelligence reports",
        "Identify process improvement opportunities",
        "Support project management and implementation activities",
        "Collaborate with stakeholders across departments",
        "Create documentation and training materials",
      ],
      requirements: [
        "4+ years of business analysis experience",
        "Strong analytical and problem-solving skills",
        "Experience with data analysis tools (SQL, Excel, BI tools)",
        "Knowledge of business process modeling",
        "Understanding of financial services preferred",
        "Strong communication and documentation skills",
      ],
      skills: [
        "Business Analysis",
        "SQL",
        "Data Analysis",
        "Process Modeling",
        "Requirements Gathering",
        "Documentation",
        "Stakeholder Management",
        "Project Management",
      ],
      benefits: [
        "Competitive compensation package",
        "Remote-first work environment",
        "Health and wellness benefits",
        "Professional development opportunities",
        "Business analysis certifications",
        "Flexible working hours",
      ],
    },
    {
      id: "client-success-manager",
      title: "Client Success Manager",
      department: "Client Success",
      type: "Full-time",
      location: "Remote (Global)",
      experience: "3+ years",
      salary: "$60,000 - $85,000",
      icon: Heart,
      urgent: true,
      description:
        "Ensure client satisfaction and success by managing relationships and driving adoption of our fintech solutions.",
      responsibilities: [
        "Manage relationships with key enterprise clients",
        "Drive product adoption and ensure client success",
        "Conduct regular check-ins and business reviews",
        "Identify upsell and expansion opportunities",
        "Collaborate with support and engineering teams",
        "Develop client success strategies and best practices",
      ],
      requirements: [
        "3+ years of client success or account management experience",
        "Experience in B2B SaaS or fintech industry",
        "Strong relationship management and communication skills",
        "Understanding of financial services and compliance",
        "Customer-centric mindset with problem-solving abilities",
        "Experience with CRM and success platforms",
      ],
      skills: [
        "Client Relationship Management",
        "Account Management",
        "Customer Success",
        "SaaS Platforms",
        "Financial Services",
        "Communication",
        "Project Coordination",
        "CRM Tools",
      ],
      benefits: [
        "Base salary plus commission",
        "Remote work environment",
        "Health insurance coverage",
        "Professional development budget",
        "Client success training programs",
        "Performance bonuses",
      ],
    },
    {
      id: "hr-business-partner",
      title: "HR Business Partner",
      department: "Human Resources",
      type: "Full-time",
      location: "Remote (Americas)",
      experience: "5+ years",
      salary: "$75,000 - $105,000",
      icon: Users,
      urgent: false,
      description:
        "Partner with leadership to develop and execute HR strategies that support our rapid growth and remote-first culture.",
      responsibilities: [
        "Partner with leadership on talent acquisition and retention",
        "Develop and implement HR policies and procedures",
        "Support employee relations and performance management",
        "Lead diversity, equity, and inclusion initiatives",
        "Design and implement compensation and benefits programs",
        "Support remote team culture and engagement activities",
      ],
      requirements: [
        "5+ years of HR business partner or generalist experience",
        "Experience supporting remote and distributed teams",
        "Knowledge of employment law and compliance",
        "Strong interpersonal and communication skills",
        "Experience with HR technology and systems",
        "Bachelor's degree in HR, Business, or related field",
      ],
      skills: [
        "HR Strategy",
        "Talent Acquisition",
        "Employee Relations",
        "Performance Management",
        "Compensation & Benefits",
        "DEI Initiatives",
        "Remote Team Management",
        "HRIS Systems",
      ],
      benefits: [
        "Competitive salary package",
        "Comprehensive health benefits",
        "Remote work stipend",
        "HR certification support",
        "Professional development opportunities",
        "Unlimited PTO policy",
      ],
    },
    {
      id: "marketing-manager",
      title: "Digital Marketing Manager",
      department: "Marketing",
      type: "Full-time",
      location: "Remote (Global)",
      experience: "4+ years",
      salary: "$65,000 - $95,000",
      icon: TrendingUp,
      urgent: true,
      description:
        "Drive digital marketing strategies to increase brand awareness and generate qualified leads for our fintech solutions.",
      responsibilities: [
        "Develop and execute digital marketing campaigns",
        "Manage content marketing and SEO strategies",
        "Create and optimize marketing automation workflows",
        "Analyze marketing performance and ROI metrics",
        "Collaborate with sales team on lead generation",
        "Manage social media and thought leadership content",
      ],
      requirements: [
        "4+ years of digital marketing experience in B2B SaaS",
        "Experience with marketing automation platforms",
        "Strong analytical skills and data-driven approach",
        "Understanding of fintech or financial services industry",
        "Content creation and copywriting abilities",
        "Experience with SEO, SEM, and social media marketing",
      ],
      skills: [
        "Digital Marketing",
        "Content Marketing",
        "Marketing Automation",
        "SEO/SEM",
        "Analytics",
        "Lead Generation",
        "Social Media",
        "Copywriting",
      ],
      benefits: [
        "Competitive salary",
        "Marketing tool subscriptions",
        "Remote work flexibility",
        "Health benefits",
        "Conference and training budget",
        "Creative project opportunities",
      ],
    },
    {
      id: "sales-executive",
      title: "Enterprise Sales Executive",
      department: "Sales",
      type: "Full-time",
      location: "Remote (Americas/Europe)",
      experience: "5+ years",
      salary: "$80,000 - $120,000 + Commission",
      icon: DollarSign,
      urgent: true,
      description:
        "Drive revenue growth by selling our fintech solutions to enterprise clients and financial institutions.",
      responsibilities: [
        "Identify and qualify enterprise sales opportunities",
        "Conduct product demonstrations and presentations",
        "Negotiate contracts and close deals with enterprise clients",
        "Build relationships with key decision makers",
        "Collaborate with technical teams for solution design",
        "Achieve quarterly and annual sales targets",
      ],
      requirements: [
        "5+ years of enterprise B2B sales experience",
        "Experience selling to financial institutions or fintech",
        "Strong track record of meeting/exceeding sales targets",
        "Excellent presentation and negotiation skills",
        "Understanding of complex sales cycles and stakeholder management",
        "CRM experience and sales methodology knowledge",
      ],
      skills: [
        "Enterprise Sales",
        "B2B Sales",
        "Financial Services",
        "Negotiation",
        "Presentation",
        "CRM Tools",
        "Sales Methodologies",
        "Relationship Building",
      ],
      benefits: [
        "Base salary plus uncapped commission",
        "Sales performance bonuses",
        "Remote work setup",
        "Health and dental coverage",
        "Sales training and certification",
        "Travel opportunities",
      ],
    },
    {
      id: "training-coordinator",
      title: "Training Program Coordinator",
      department: "Learning & Development",
      type: "Full-time",
      location: "Remote (India/APAC)",
      experience: "2+ years",
      salary: "$35,000 - $55,000",
      icon: GraduationCap,
      urgent: false,
      description:
        "Coordinate and manage our fresher training programs and professional development initiatives.",
      responsibilities: [
        "Design and implement training programs for new hires",
        "Coordinate with subject matter experts for curriculum development",
        "Manage training schedules and participant progress",
        "Create training materials and documentation",
        "Support career development and mentorship programs",
        "Track training effectiveness and gather feedback",
      ],
      requirements: [
        "2+ years of training or learning & development experience",
        "Experience with curriculum design and delivery",
        "Strong organizational and project management skills",
        "Knowledge of adult learning principles",
        "Experience with learning management systems",
        "Bachelor's degree in Education, HR, or related field",
      ],
      skills: [
        "Training Design",
        "Curriculum Development",
        "Learning Management",
        "Project Coordination",
        "Instructional Design",
        "LMS Platforms",
        "Performance Tracking",
        "Communication",
      ],
      benefits: [
        "Competitive local market salary",
        "Professional development opportunities",
        "Remote work flexibility",
        "Health insurance",
        "Training and certification support",
        "Career growth pathways",
      ],
    },
    {
      id: "operations-manager",
      title: "Operations Manager",
      department: "Operations",
      type: "Full-time",
      location: "Remote (Global)",
      experience: "4+ years",
      salary: "$70,000 - $100,000",
      icon: Building2,
      urgent: false,
      description:
        "Oversee daily operations and drive process improvements to support our growing team and business objectives.",
      responsibilities: [
        "Manage day-to-day business operations and processes",
        "Identify and implement operational efficiency improvements",
        "Coordinate cross-functional projects and initiatives",
        "Develop and maintain operational policies and procedures",
        "Support budget planning and financial operations",
        "Ensure compliance with regulatory requirements",
      ],
      requirements: [
        "4+ years of operations management experience",
        "Strong project management and process improvement skills",
        "Experience with remote team coordination",
        "Knowledge of financial services operations preferred",
        "Excellent analytical and problem-solving abilities",
        "PMP or similar certification preferred",
      ],
      skills: [
        "Operations Management",
        "Process Improvement",
        "Project Management",
        "Financial Planning",
        "Compliance",
        "Team Coordination",
        "Analytics",
        "Policy Development",
      ],
      benefits: [
        "Competitive salary",
        "Operations management training",
        "Remote work environment",
        "Health benefits package",
        "Professional certification support",
        "Leadership development opportunities",
      ],
    },
  ];

  const applicationProcess = [
    {
      step: 1,
      title: "Application Review",
      description: "HR team reviews your application and background",
      duration: "2-3 days",
      icon: FileText,
    },
    {
      step: 2,
      title: "Phone Screening",
      description: "Initial conversation about your experience and fit",
      duration: "1 week",
      icon: Users,
    },
    {
      step: 3,
      title: "Case Study/Assessment",
      description: "Role-specific assessment or case study presentation",
      duration: "1 week",
      icon: Target,
    },
    {
      step: 4,
      title: "Panel Interview",
      description: "Meet with hiring manager and team members",
      duration: "1 week",
      icon: MessageSquare,
    },
    {
      step: 5,
      title: "Final Interview",
      description: "Leadership interview and cultural fit assessment",
      duration: "3-5 days",
      icon: UserCheck,
    },
    {
      step: 6,
      title: "Offer & Onboarding",
      description: "Reference check, offer, and remote onboarding",
      duration: "1 week",
      icon: CheckCircle,
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setApplicationData({ ...applicationData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setApplicationData({ ...applicationData, [name]: value });
  };

  const handleApply = (role: any) => {
    setSelectedJob(role);
    setApplicationData({ ...applicationData, role: role.title });
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Application submitted:", applicationData);
    // Handle application submission
  };

  const departments = [
    {
      name: "Product & Strategy",
      icon: Target,
      roles: ["Product Manager", "Business Analyst", "Strategy Consultant"],
    },
    {
      name: "Sales & Marketing",
      icon: TrendingUp,
      roles: ["Sales Executive", "Marketing Manager", "Growth Specialist"],
    },
    {
      name: "Client Success",
      icon: Heart,
      roles: ["Client Success Manager", "Account Manager", "Support Lead"],
    },
    {
      name: "Operations & HR",
      icon: Building2,
      roles: ["Operations Manager", "HR Business Partner", "Finance Manager"],
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
              Non-Technical Careers
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Drive Business Success in
              <span className="bg-gradient-to-r from-finance-gold to-yellow-400 bg-clip-text text-transparent">
                {" "}
                Fintech
              </span>
              <br />
              Innovation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our remote-first team in roles that shape strategy, drive
              growth, and deliver exceptional experiences in the financial
              technology space. Make an impact from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-finance-gold hover:bg-finance-gold/90 text-finance-navy font-semibold"
              >
                Explore Opportunities
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
                asChild
              >
                <Link to="/careers/freshers">Fresher Program</Link>
              </Button>
            </div>
          </div>

          {/* Department Overview */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <Card
                  key={index}
                  className="bg-white/10 border-white/20 text-white"
                >
                  <CardContent className="p-6 text-center">
                    <Icon className="w-8 h-8 text-finance-gold mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">{dept.name}</h3>
                    <div className="text-xs text-gray-300 space-y-1">
                      {dept.roles.map((role, idx) => (
                        <div key={idx}>• {role}</div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-finance-blue/10 text-finance-blue border-finance-blue/20">
              Open Positions
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-finance-navy">
              Business & Operations
              <span className="text-finance-blue"> Opportunities</span>
            </h2>
            <p className="text-xl text-finance-gray max-w-3xl mx-auto">
              Join our growing team in strategic roles that drive business
              growth, client success, and operational excellence.
            </p>
          </div>

          <div className="space-y-6">
            {nonTechRoles.map((role, index) => {
              const Icon = role.icon;
              return (
                <Card
                  key={index}
                  className="border-2 hover:border-finance-blue/30 transition-colors"
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="flex-1">
                        <div className="flex items-start space-x-4 mb-4">
                          <div className="w-12 h-12 bg-finance-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-finance-blue" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-xl font-bold text-finance-navy">
                                {role.title}
                              </h3>
                              {role.urgent && (
                                <Badge className="bg-red-100 text-red-800 border-red-200">
                                  Urgent
                                </Badge>
                              )}
                            </div>
                            <div className="flex flex-wrap gap-4 text-sm text-finance-gray mb-3">
                              <span className="flex items-center space-x-1">
                                <Briefcase className="w-4 h-4" />
                                <span>{role.department}</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <MapPin className="w-4 h-4" />
                                <span>{role.location}</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4" />
                                <span>{role.experience}</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <DollarSign className="w-4 h-4" />
                                <span>{role.salary}</span>
                              </span>
                            </div>
                            <p className="text-finance-gray mb-4">
                              {role.description}
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-finance-navy mb-2">
                              Key Skills:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {role.skills.slice(0, 4).map((skill, idx) => (
                                <Badge
                                  key={idx}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {skill}
                                </Badge>
                              ))}
                              {role.skills.length > 4 && (
                                <Badge
                                  variant="outline"
                                  className="text-xs text-finance-blue"
                                >
                                  +{role.skills.length - 4} more
                                </Badge>
                              )}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-finance-navy mb-2">
                              Key Benefits:
                            </h4>
                            <div className="space-y-1">
                              {role.benefits.slice(0, 3).map((benefit, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center space-x-2"
                                >
                                  <CheckCircle className="w-3 h-3 text-finance-success flex-shrink-0" />
                                  <span className="text-xs text-finance-gray">
                                    {benefit}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="lg:w-64 flex flex-col space-y-3">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              className="w-full bg-finance-gold hover:bg-finance-gold/90 text-finance-navy font-semibold"
                              onClick={() => handleApply(role)}
                            >
                              Apply Now
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle className="text-finance-navy">
                                Apply for {selectedJob?.title}
                              </DialogTitle>
                            </DialogHeader>
                            <form
                              onSubmit={handleSubmitApplication}
                              className="space-y-6"
                            >
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <Label htmlFor="name">Full Name *</Label>
                                  <Input
                                    id="name"
                                    name="name"
                                    value={applicationData.name}
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
                                    value={applicationData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-1"
                                  />
                                </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <Label htmlFor="phone">Phone Number *</Label>
                                  <Input
                                    id="phone"
                                    name="phone"
                                    value={applicationData.phone}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-1"
                                  />
                                </div>
                                <div>
                                  <Label htmlFor="experience">
                                    Years of Experience *
                                  </Label>
                                  <Select
                                    onValueChange={(value) =>
                                      handleSelectChange("experience", value)
                                    }
                                  >
                                    <SelectTrigger className="mt-1">
                                      <SelectValue placeholder="Select experience" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="1-2">
                                        1-2 years
                                      </SelectItem>
                                      <SelectItem value="3-5">
                                        3-5 years
                                      </SelectItem>
                                      <SelectItem value="6-8">
                                        6-8 years
                                      </SelectItem>
                                      <SelectItem value="9+">
                                        9+ years
                                      </SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <Label htmlFor="currentLocation">
                                    Current Location *
                                  </Label>
                                  <Input
                                    id="currentLocation"
                                    name="currentLocation"
                                    value={applicationData.currentLocation}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-1"
                                  />
                                </div>
                                <div>
                                  <Label htmlFor="expectedSalary">
                                    Expected Salary (USD)
                                  </Label>
                                  <Input
                                    id="expectedSalary"
                                    name="expectedSalary"
                                    value={applicationData.expectedSalary}
                                    onChange={handleInputChange}
                                    className="mt-1"
                                    placeholder="e.g., $70,000"
                                  />
                                </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <Label htmlFor="education">
                                    Highest Education
                                  </Label>
                                  <Select
                                    onValueChange={(value) =>
                                      handleSelectChange("education", value)
                                    }
                                  >
                                    <SelectTrigger className="mt-1">
                                      <SelectValue placeholder="Select education" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="bachelors">
                                        Bachelor's Degree
                                      </SelectItem>
                                      <SelectItem value="masters">
                                        Master's Degree
                                      </SelectItem>
                                      <SelectItem value="mba">MBA</SelectItem>
                                      <SelectItem value="phd">PhD</SelectItem>
                                      <SelectItem value="other">
                                        Other
                                      </SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                                <div>
                                  <Label htmlFor="noticePeriod">
                                    Notice Period
                                  </Label>
                                  <Select
                                    onValueChange={(value) =>
                                      handleSelectChange("noticePeriod", value)
                                    }
                                  >
                                    <SelectTrigger className="mt-1">
                                      <SelectValue placeholder="Select notice period" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="immediate">
                                        Immediate
                                      </SelectItem>
                                      <SelectItem value="2-weeks">
                                        2 weeks
                                      </SelectItem>
                                      <SelectItem value="1-month">
                                        1 month
                                      </SelectItem>
                                      <SelectItem value="2-months">
                                        2 months
                                      </SelectItem>
                                      <SelectItem value="3-months">
                                        3+ months
                                      </SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <Label htmlFor="linkedin">
                                    LinkedIn Profile
                                  </Label>
                                  <Input
                                    id="linkedin"
                                    name="linkedin"
                                    value={applicationData.linkedin}
                                    onChange={handleInputChange}
                                    className="mt-1"
                                  />
                                </div>
                                <div>
                                  <Label htmlFor="portfolio">
                                    Portfolio/Website
                                  </Label>
                                  <Input
                                    id="portfolio"
                                    name="portfolio"
                                    value={applicationData.portfolio}
                                    onChange={handleInputChange}
                                    className="mt-1"
                                  />
                                </div>
                              </div>

                              <div>
                                <Label htmlFor="coverLetter">
                                  Cover Letter *
                                </Label>
                                <Textarea
                                  id="coverLetter"
                                  name="coverLetter"
                                  value={applicationData.coverLetter}
                                  onChange={handleInputChange}
                                  required
                                  rows={4}
                                  className="mt-1"
                                  placeholder="Tell us why you're passionate about this role and how your experience makes you a great fit..."
                                />
                              </div>

                              <div className="border-2 border-dashed border-finance-blue/20 rounded-lg p-6 text-center">
                                <Upload className="w-8 h-8 text-finance-blue mx-auto mb-3" />
                                <h4 className="font-semibold text-finance-navy mb-2">
                                  Upload Resume *
                                </h4>
                                <p className="text-sm text-finance-gray mb-3">
                                  Drag and drop your resume or click to browse
                                </p>
                                <Button variant="outline" size="sm">
                                  Choose File
                                </Button>
                              </div>

                              <Button
                                type="submit"
                                size="lg"
                                className="w-full bg-finance-gold hover:bg-finance-gold/90 text-finance-navy font-semibold"
                              >
                                Submit Application
                              </Button>
                            </form>
                          </DialogContent>
                        </Dialog>

                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button variant="ghost" size="sm">
                          Save for Later
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-finance-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-finance-gold/20 text-finance-gold border-finance-gold/30">
              Application Process
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-finance-navy">
              Your Path to
              <span className="text-finance-blue"> Joining Our Team</span>
            </h2>
            <p className="text-xl text-finance-gray max-w-3xl mx-auto">
              Our comprehensive hiring process ensures we find the right fit for
              both you and our team, typically taking 3-4 weeks from application
              to offer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applicationProcess.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white text-center"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-finance-blue to-finance-navy text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                      {step.step}
                    </div>
                    <Icon className="w-8 h-8 text-finance-blue mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-finance-navy mb-3">
                      {step.title}
                    </h3>
                    <p className="text-finance-gray text-sm mb-4">
                      {step.description}
                    </p>
                    <div className="flex items-center justify-center space-x-1 text-xs text-finance-gold">
                      <Clock className="w-3 h-3" />
                      <span>{step.duration}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-finance-blue/10 text-finance-blue border-finance-blue/20">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-finance-navy">
              Build Your Career in
              <span className="text-finance-blue"> Financial Innovation</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-finance-blue/30 transition-colors">
              <CardContent className="p-8 text-center">
                <Globe className="w-12 h-12 text-finance-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-finance-navy mb-3">
                  Global Remote Team
                </h3>
                <p className="text-finance-gray">
                  Work with talented professionals from 12 countries in a
                  flexible, remote-first environment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-finance-blue/30 transition-colors">
              <CardContent className="p-8 text-center">
                <TrendingUp className="w-12 h-12 text-finance-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-finance-navy mb-3">
                  Rapid Growth
                </h3>
                <p className="text-finance-gray">
                  Join a company that reached ₹1 Crore+ turnover with 84+
                  employees and continues to scale rapidly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-finance-blue/30 transition-colors">
              <CardContent className="p-8 text-center">
                <Award className="w-12 h-12 text-finance-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-finance-navy mb-3">
                  Professional Growth
                </h3>
                <p className="text-finance-gray">
                  Continuous learning opportunities, certifications, and clear
                  career advancement paths in fintech.
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
              Ready to Drive Business Impact?
            </h2>
            <p className="text-xl text-gray-300">
              Join our growing team and help shape the future of financial
              technology while building a rewarding career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-finance-gold hover:bg-finance-gold/90 text-finance-navy font-semibold"
              >
                Apply for a Position
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
                asChild
              >
                <Link to="/contact">Have Questions?</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersNonTech;
