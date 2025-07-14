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
  Code,
  Smartphone,
  Database,
  Cloud,
  Shield,
  BarChart3,
  Zap,
  Users,
  MapPin,
  Calendar,
  DollarSign,
  CheckCircle,
  ArrowRight,
  FileText,
  Upload,
  Clock,
  Globe,
  Award,
  Briefcase,
  Settings,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CareersTech = () => {
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [applicationData, setApplicationData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    currentLocation: "",
    expectedSalary: "",
    noticePeriod: "",
    portfolio: "",
    linkedin: "",
    coverLetter: "",
    role: "",
  });

  const techRoles = [
    {
      id: "senior-fullstack",
      title: "Senior Full Stack Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote (Global)",
      experience: "5+ years",
      salary: "$80,000 - $120,000",
      icon: Code,
      urgent: true,
      description:
        "Join our core development team to build scalable fintech solutions using modern web technologies.",
      responsibilities: [
        "Develop and maintain fintech applications using React, Node.js, and TypeScript",
        "Design and implement RESTful APIs and microservices architecture",
        "Collaborate with product managers and designers on feature development",
        "Ensure code quality through testing and code reviews",
        "Mentor junior developers and contribute to technical decisions",
        "Implement security best practices for financial applications",
      ],
      requirements: [
        "5+ years of experience in full-stack development",
        "Strong proficiency in React, Node.js, TypeScript, and PostgreSQL",
        "Experience with cloud platforms (AWS, Azure, or GCP)",
        "Knowledge of financial services or fintech domain",
        "Understanding of security best practices and compliance",
        "Experience with agile development methodologies",
      ],
      skills: [
        "React",
        "Node.js",
        "TypeScript",
        "PostgreSQL",
        "AWS",
        "Docker",
        "Kubernetes",
        "Jest",
      ],
      benefits: [
        "Competitive salary with equity options",
        "Remote work flexibility",
        "Health and dental insurance",
        "Professional development budget",
        "Flexible PTO policy",
        "Latest tech equipment",
      ],
    },
    {
      id: "mobile-developer",
      title: "Senior Mobile Developer (React Native)",
      department: "Engineering",
      type: "Full-time",
      location: "Remote (Americas/Europe)",
      experience: "4+ years",
      salary: "$75,000 - $110,000",
      icon: Smartphone,
      urgent: false,
      description:
        "Build secure and user-friendly mobile banking applications for iOS and Android platforms.",
      responsibilities: [
        "Develop cross-platform mobile apps using React Native",
        "Implement biometric authentication and security features",
        "Integrate with banking APIs and payment gateways",
        "Optimize app performance and user experience",
        "Collaborate with UX/UI designers on mobile interfaces",
        "Ensure compliance with mobile security standards",
      ],
      requirements: [
        "4+ years of mobile development experience",
        "Strong expertise in React Native and native mobile development",
        "Experience with mobile security and payment integrations",
        "Knowledge of app store submission processes",
        "Understanding of mobile UX/UI best practices",
        "Experience with mobile testing frameworks",
      ],
      skills: [
        "React Native",
        "iOS",
        "Android",
        "JavaScript",
        "Firebase",
        "Payment APIs",
        "Biometric Auth",
        "Jest",
      ],
      benefits: [
        "Competitive salary package",
        "Remote-first culture",
        "Health benefits",
        "Professional growth opportunities",
        "Conference attendance budget",
        "Flexible working hours",
      ],
    },
    {
      id: "devops-engineer",
      title: "DevOps Engineer",
      department: "Infrastructure",
      type: "Full-time",
      location: "Remote (Global)",
      experience: "3+ years",
      salary: "$70,000 - $100,000",
      icon: Cloud,
      urgent: true,
      description:
        "Build and maintain scalable infrastructure for our fintech applications with focus on security and compliance.",
      responsibilities: [
        "Design and implement CI/CD pipelines for automated deployments",
        "Manage cloud infrastructure using Infrastructure as Code",
        "Monitor system performance and implement alerting systems",
        "Ensure security compliance and implement best practices",
        "Optimize costs and performance of cloud resources",
        "Support development teams with infrastructure needs",
      ],
      requirements: [
        "3+ years of DevOps or infrastructure experience",
        "Strong experience with AWS, Docker, and Kubernetes",
        "Proficiency in Infrastructure as Code (Terraform, CloudFormation)",
        "Experience with CI/CD tools (Jenkins, GitLab CI, GitHub Actions)",
        "Knowledge of monitoring tools (Prometheus, Grafana, DataDog)",
        "Understanding of security and compliance requirements",
      ],
      skills: [
        "AWS",
        "Docker",
        "Kubernetes",
        "Terraform",
        "Jenkins",
        "Prometheus",
        "Grafana",
        "Python",
      ],
      benefits: [
        "Competitive salary",
        "Remote work flexibility",
        "Health and wellness benefits",
        "Learning and development budget",
        "Stock options",
        "Flexible time off",
      ],
    },
    {
      id: "qa-engineer",
      title: "QA Automation Engineer",
      department: "Quality Assurance",
      type: "Full-time",
      location: "Remote (India/APAC)",
      experience: "3+ years",
      salary: "$45,000 - $70,000",
      icon: Shield,
      urgent: false,
      description:
        "Ensure the quality and reliability of our fintech applications through comprehensive testing strategies.",
      responsibilities: [
        "Design and implement automated testing frameworks",
        "Develop test cases for functional, integration, and performance testing",
        "Collaborate with development teams on testing strategies",
        "Perform security testing for financial applications",
        "Maintain and improve test automation infrastructure",
        "Report and track defects throughout the development lifecycle",
      ],
      requirements: [
        "3+ years of QA automation experience",
        "Strong programming skills in JavaScript, Python, or Java",
        "Experience with testing frameworks (Selenium, Cypress, Jest)",
        "Knowledge of API testing tools (Postman, REST Assured)",
        "Understanding of CI/CD integration for automated testing",
        "Experience with performance and security testing",
      ],
      skills: [
        "Selenium",
        "Cypress",
        "JavaScript",
        "Python",
        "API Testing",
        "Performance Testing",
        "Security Testing",
        "Jenkins",
      ],
      benefits: [
        "Competitive compensation",
        "Remote work environment",
        "Health insurance",
        "Professional development opportunities",
        "Flexible schedule",
        "Team building activities",
      ],
    },
    {
      id: "data-engineer",
      title: "Senior Data Engineer",
      department: "Data & Analytics",
      type: "Full-time",
      location: "Remote (Global)",
      experience: "4+ years",
      salary: "$85,000 - $115,000",
      icon: Database,
      urgent: true,
      description:
        "Build and maintain data pipelines and analytics infrastructure for financial data processing.",
      responsibilities: [
        "Design and implement scalable data pipelines",
        "Build data warehouses and analytics platforms",
        "Ensure data quality and implement monitoring systems",
        "Collaborate with data scientists and analysts",
        "Optimize data processing performance and costs",
        "Implement data security and compliance measures",
      ],
      requirements: [
        "4+ years of data engineering experience",
        "Strong proficiency in Python, SQL, and big data technologies",
        "Experience with cloud data platforms (AWS Redshift, Snowflake, BigQuery)",
        "Knowledge of data pipeline tools (Airflow, Kafka, Spark)",
        "Understanding of data modeling and warehouse design",
        "Experience with financial data and regulations",
      ],
      skills: [
        "Python",
        "SQL",
        "Apache Spark",
        "Airflow",
        "Snowflake",
        "Kafka",
        "AWS",
        "Data Modeling",
      ],
      benefits: [
        "Competitive salary with bonuses",
        "Remote-first approach",
        "Comprehensive health benefits",
        "Professional growth budget",
        "Equity participation",
        "Unlimited PTO",
      ],
    },
    {
      id: "security-engineer",
      title: "Cybersecurity Engineer",
      department: "Security",
      type: "Full-time",
      location: "Remote (Americas/Europe)",
      experience: "5+ years",
      salary: "$90,000 - $130,000",
      icon: Shield,
      urgent: true,
      description:
        "Protect our fintech infrastructure and ensure compliance with financial security regulations.",
      responsibilities: [
        "Implement and maintain security controls and frameworks",
        "Conduct security assessments and penetration testing",
        "Monitor security incidents and implement response procedures",
        "Ensure compliance with financial regulations (PCI DSS, SOX, etc.)",
        "Develop security policies and training programs",
        "Collaborate with development teams on secure coding practices",
      ],
      requirements: [
        "5+ years of cybersecurity experience in financial services",
        "Strong knowledge of security frameworks and compliance standards",
        "Experience with security tools (SIEM, vulnerability scanners, etc.)",
        "Understanding of cloud security best practices",
        "Relevant certifications (CISSP, CISM, CEH) preferred",
        "Experience with incident response and forensics",
      ],
      skills: [
        "Security Frameworks",
        "Penetration Testing",
        "SIEM",
        "Cloud Security",
        "Compliance",
        "Incident Response",
        "Risk Assessment",
        "Python",
      ],
      benefits: [
        "Competitive salary package",
        "Remote work flexibility",
        "Premium health coverage",
        "Certification reimbursement",
        "Professional development",
        "Flexible work arrangements",
      ],
    },
  ];

  const applicationProcess = [
    {
      step: 1,
      title: "Application Submission",
      description: "Submit your application with resume and cover letter",
      duration: "Same day",
      icon: FileText,
    },
    {
      step: 2,
      title: "Initial Screening",
      description: "HR team reviews your application and conducts initial call",
      duration: "2-3 days",
      icon: Users,
    },
    {
      step: 3,
      title: "Technical Assessment",
      description: "Complete coding challenge or technical evaluation",
      duration: "3-5 days",
      icon: Code,
    },
    {
      step: 4,
      title: "Technical Interview",
      description: "Deep-dive technical discussion with senior engineers",
      duration: "1 week",
      icon: Settings,
    },
    {
      step: 5,
      title: "Final Interview",
      description: "Cultural fit and leadership discussion",
      duration: "1 week",
      icon: Briefcase,
    },
    {
      step: 6,
      title: "Offer & Onboarding",
      description: "Offer discussion and remote onboarding process",
      duration: "2-3 days",
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

  const techStack = [
    "React",
    "Node.js",
    "TypeScript",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Kubernetes",
    "Microservices",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-finance-navy to-slate-800 text-white py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)] opacity-70"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge className="bg-finance-gold/20 text-finance-gold border-finance-gold/30">
              Technology Careers
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Build the Future of
              <span className="bg-gradient-to-r from-finance-gold to-yellow-400 bg-clip-text text-transparent">
                {" "}
                Fintech
              </span>
              <br />
              Technology
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our global remote team of 84+ professionals building
              cutting-edge financial technology solutions. Work with modern tech
              stack and make a real impact in the financial services industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-finance-gold hover:bg-finance-gold/90 text-finance-navy font-semibold"
              >
                View Open Positions
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

          {/* Tech Stack */}
          <div className="mt-16 text-center">
            <p className="text-gray-300 mb-6">Technologies we work with:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <Badge
                  key={index}
                  className="bg-white/10 text-white border-white/20 px-4 py-2"
                >
                  {tech}
                </Badge>
              ))}
            </div>
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
              Current Tech
              <span className="text-finance-blue"> Opportunities</span>
            </h2>
            <p className="text-xl text-finance-gray max-w-3xl mx-auto">
              We're actively hiring for these technology roles. All positions
              are remote-first with competitive compensation.
            </p>
          </div>

          <div className="space-y-6">
            {techRoles.map((role, index) => {
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
                                    placeholder="e.g., $80,000"
                                  />
                                </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                <div>
                                  <Label htmlFor="portfolio">
                                    Portfolio/GitHub URL
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
                                  placeholder="Tell us why you're interested in this role and how your experience aligns with our requirements..."
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
              Your Journey to
              <span className="text-finance-blue"> Joining Our Team</span>
            </h2>
            <p className="text-xl text-finance-gray max-w-3xl mx-auto">
              Our streamlined hiring process is designed to be efficient and
              transparent, typically taking 2-3 weeks from application to offer.
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-finance-navy to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Shape the Future of Finance?
            </h2>
            <p className="text-xl text-gray-300">
              Join our innovative team and work on cutting-edge fintech
              solutions that impact millions of users worldwide.
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

export default CareersTech;
