import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
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
  Play,
  Rocket,
  DollarSign,
  TrendingUp,
  Award,
  FileText,
  Star,
  Users,
  Zap,
  CheckCircle,
  ArrowRight,
  GraduationCap,
  Code,
  Heart,
  Target,
  Sparkles,
  Upload,
  Send,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CareersFreshers = () => {
  const [applicationData, setApplicationData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    course: "",
    graduationYear: "",
    skillLevel: "",
    preferredTech: "",
    resume: null,
    motivation: "",
  });

  const benefits = [
    {
      icon: Rocket,
      title: "Training + Internship Together",
      description:
        "One streamlined experience with live fintech projects from Day 1. No theory-only classes - you'll build real applications used by actual clients.",
      highlight: "Real Projects from Day 1",
    },
    {
      icon: DollarSign,
      title: "Performance-Based Rewards + Stipend",
      description:
        "Up to ₹7,000 INR / $81 USD per month + bonus rewards for excellence. Top performers receive additional project bonuses and recognition.",
      highlight: "Up to ₹7,000/month + Bonuses",
    },
    {
      icon: TrendingUp,
      title: "High ROI with Minimal Training Fee",
      description:
        "Affordable investment with strong placement and growth outcomes. Our graduates see 300%+ salary growth within 18 months of completion.",
      highlight: "300%+ Salary Growth",
    },
    {
      icon: Award,
      title: "Dual Certification",
      description:
        "Industry-recognized certificates for both training and internship. Validated by our partnerships with Amazon and AMEX leadership teams.",
      highlight: "Industry-Recognized Certificates",
    },
    {
      icon: FileText,
      title: "Letter of Recommendation (LOR)",
      description:
        "Personalized LORs based on performance from leadership or mentors. These carry significant weight with top-tier companies and startups.",
      highlight: "Personalized from Leadership",
    },
    {
      icon: Star,
      title: "Industry 5.0 Ready Training",
      description:
        "Cutting-edge curriculum designed with Amazon and AMEX leaders. Learn technologies and methodologies that will be industry standard in 2025+.",
      highlight: "Future-Proof Skills",
    },
  ];

  const programFeatures = [
    {
      icon: Code,
      title: "Live Project Experience",
      items: [
        "Work on real fintech applications",
        "Client interaction and feedback loops",
        "Agile development methodologies",
        "Code reviews with senior developers",
      ],
    },
    {
      icon: Users,
      title: "Mentorship Program",
      items: [
        "1:1 mentoring with industry experts",
        "Career guidance and planning",
        "Technical skill development",
        "Professional networking opportunities",
      ],
    },
    {
      icon: Target,
      title: "Placement Support",
      items: [
        "Interview preparation workshops",
        "Resume building assistance",
        "Mock interviews with real scenarios",
        "Direct placement opportunities",
      ],
    },
    {
      icon: Zap,
      title: "Fast-Track Learning",
      items: [
        "Intensive 6-month program",
        "Weekly assessments and feedback",
        "Project-based learning approach",
        "Industry-standard tools and practices",
      ],
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

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Application submitted:", applicationData);
    // Handle application submission
  };

  return (
    <div className="min-h-screen">
      {/* YouTube Video Section */}
      <section className="py-20 bg-gradient-to-br from-finance-navy via-finance-navy to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge className="bg-finance-gold/20 text-finance-gold border-finance-gold/30">
              🎥 Watch Our Success Stories
            </Badge>
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
              See How Infyntrek Systèmes Prepares
              <span className="bg-gradient-to-r from-finance-gold to-yellow-400 bg-clip-text text-transparent">
                {" "}
                Freshers
              </span>
              <br />
              for Fintech Excellence
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Watch how our training program transforms fresh graduates into
              industry-ready fintech professionals in just 6 months.
            </p>
          </div>

          {/* YouTube Embed */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Infyntrek Systèmes Training Program"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <Play className="w-16 h-16 text-white" />
              </div>
            </div>
            <div className="text-center mt-6">
              <p className="text-gray-300">
                🚀 Join 500+ freshers who transformed their careers with us
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Motivational Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-8">
              <Badge className="bg-finance-blue/10 text-finance-blue border-finance-blue/20">
                Why Choose Infyntrek Systèmes?
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-bold text-finance-navy leading-tight">
                Unlock Your Potential in
                <span className="text-finance-blue"> Fintech Innovation</span>
              </h2>
              <div className="bg-gradient-to-br from-finance-light to-white rounded-2xl p-8 lg:p-12 shadow-lg border-2 border-finance-blue/10">
                <div className="flex items-start space-x-4">
                  <Heart className="w-8 h-8 text-finance-gold flex-shrink-0 mt-1" />
                  <div className="text-left">
                    <p className="text-lg lg:text-xl text-finance-gray leading-relaxed mb-6">
                      At{" "}
                      <strong className="text-finance-navy">
                        Infyntrek Systèmes
                      </strong>
                      , we are passionate about unlocking the innovation and
                      energy of young minds. That's why we've collaborated with
                      industry leaders like{" "}
                      <strong className="text-finance-blue">
                        Amazon and AMEX
                      </strong>{" "}
                      to deliver world-class{" "}
                      <strong className="text-finance-gold">
                        Industry 5.0-ready training
                      </strong>{" "}
                      for the next generation of fintech developers.
                    </p>
                    <p className="text-lg lg:text-xl text-finance-gray leading-relaxed mb-6">
                      Our program isn't just theory—it's a blend of{" "}
                      <strong className="text-finance-blue">
                        real project experience
                      </strong>
                      ,{" "}
                      <strong className="text-finance-blue">mentorship</strong>,
                      and{" "}
                      <strong className="text-finance-blue">
                        rapid career launch
                      </strong>
                      . We don't just teach you code; we teach you how to think
                      like a fintech innovator, solve real-world problems, and
                      build solutions that matter.
                    </p>
                    <p className="text-xl lg:text-2xl font-semibold text-finance-navy">
                      If you're ready to stand out, we're ready to hire. 🚀
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-finance-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-finance-gold/20 text-finance-gold border-finance-gold/30">
              Program Benefits
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-finance-navy">
              Why Our Program
              <span className="text-finance-blue"> Changes Everything</span>
            </h2>
            <p className="text-xl text-finance-gray max-w-3xl mx-auto">
              We've designed every aspect of our program to give you maximum
              value, real experience, and a clear path to success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white group"
                >
                  <CardContent className="p-8">
                    <div className="text-center space-y-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-finance-blue to-finance-navy rounded-full flex items-center justify-center mx-auto group-hover:from-finance-gold group-hover:to-yellow-400 transition-all duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-finance-navy mb-3 group-hover:text-finance-blue transition-colors">
                          {benefit.title}
                        </h3>
                        <Badge className="bg-finance-gold/20 text-finance-gold border-finance-gold/30 mb-4">
                          {benefit.highlight}
                        </Badge>
                        <p className="text-finance-gray leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-finance-blue/10 text-finance-blue border-finance-blue/20">
              Program Features
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-finance-navy">
              What Makes Our Program
              <span className="text-finance-blue"> Unique</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="border-2 hover:border-finance-blue/30 transition-colors"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-finance-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-finance-blue" />
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-finance-navy">
                          {feature.title}
                        </h3>
                        <div className="space-y-2">
                          {feature.items.map((item, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-2"
                            >
                              <CheckCircle className="w-4 h-4 text-finance-success flex-shrink-0" />
                              <span className="text-finance-gray text-sm">
                                {item}
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

      {/* Success Stories */}
      <section className="py-20 bg-finance-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-finance-gold/20 text-finance-gold border-finance-gold/30">
              Success Stories
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-finance-navy">
              From Freshers to
              <span className="text-finance-blue"> Fintech Leaders</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-finance-light rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-finance-blue" />
                </div>
                <h3 className="font-bold text-finance-navy mb-2">
                  Priya Sharma
                </h3>
                <div className="text-finance-gold font-semibold mb-4">
                  Software Engineer @ Paytm
                </div>
                <p className="text-finance-gray text-sm italic">
                  "The training at Infyntrek was incredible. I went from zero
                  coding experience to landing a job at Paytm in just 8 months!"
                </p>
                <div className="flex justify-center mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 text-finance-gold fill-current"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-finance-light rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-finance-blue" />
                </div>
                <h3 className="font-bold text-finance-navy mb-2">
                  Rahul Kumar
                </h3>
                <div className="text-finance-gold font-semibold mb-4">
                  Full Stack Developer @ Razorpay
                </div>
                <p className="text-finance-gray text-sm italic">
                  "The mentorship and real project experience gave me confidence
                  to tackle any challenge. Now I'm building payment solutions!"
                </p>
                <div className="flex justify-center mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 text-finance-gold fill-current"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-finance-light rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-finance-blue" />
                </div>
                <h3 className="font-bold text-finance-navy mb-2">
                  Sneha Patel
                </h3>
                <div className="text-finance-gold font-semibold mb-4">
                  Product Manager @ Cred
                </div>
                <p className="text-finance-gray text-sm italic">
                  "The program taught me to think like a product owner. The LOR
                  from leadership helped me land my dream job!"
                </p>
                <div className="flex justify-center mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 text-finance-gold fill-current"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Big CTA Section */}
      <section className="py-20 bg-gradient-to-r from-finance-navy via-slate-800 to-finance-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Sparkles className="w-8 h-8 text-finance-gold" />
              <Badge className="bg-finance-gold/20 text-finance-gold border-finance-gold/30 text-lg px-6 py-3">
                Limited Seats Available - Apply Now
              </Badge>
              <Sparkles className="w-8 h-8 text-finance-gold" />
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Apply Now for Our
              <span className="bg-gradient-to-r from-finance-gold to-yellow-400 bg-clip-text text-transparent">
                {" "}
                Fintech Training
              </span>
              <br />+ Internship Program
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't wait! Join the next generation of fintech innovators. Only
              50 seats available for our next batch.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-finance-gold mb-2">
                    ₹7,000
                  </div>
                  <div className="text-white text-sm">Monthly Stipend</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-finance-gold mb-2">
                    6 Months
                  </div>
                  <div className="text-white text-sm">Intensive Training</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-finance-gold mb-2">
                    95%
                  </div>
                  <div className="text-white text-sm">Placement Rate</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="bg-finance-gold hover:bg-finance-gold/90 text-finance-navy font-bold text-lg px-12 py-6 rounded-xl shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    <GraduationCap className="mr-3 w-6 h-6" />
                    Apply Now - Limited Seats!
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-finance-navy text-xl">
                      Apply for Infyntrek Systèmes Training + Internship Program
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
                        <Label htmlFor="college">College/University *</Label>
                        <Input
                          id="college"
                          name="college"
                          value={applicationData.college}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="course">Course/Degree *</Label>
                        <Input
                          id="course"
                          name="course"
                          value={applicationData.course}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                          placeholder="e.g., B.Tech Computer Science"
                        />
                      </div>
                      <div>
                        <Label htmlFor="graduationYear">
                          Graduation Year *
                        </Label>
                        <Select
                          onValueChange={(value) =>
                            handleSelectChange("graduationYear", value)
                          }
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select year" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2024">2024</SelectItem>
                            <SelectItem value="2025">2025</SelectItem>
                            <SelectItem value="2026">2026</SelectItem>
                            <SelectItem value="2027">2027</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="skillLevel">
                          Programming Skill Level *
                        </Label>
                        <Select
                          onValueChange={(value) =>
                            handleSelectChange("skillLevel", value)
                          }
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select skill level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beginner">
                              Beginner (Little to no experience)
                            </SelectItem>
                            <SelectItem value="intermediate">
                              Intermediate (Some coding experience)
                            </SelectItem>
                            <SelectItem value="advanced">
                              Advanced (Strong programming background)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="preferredTech">
                          Preferred Technology *
                        </Label>
                        <Select
                          onValueChange={(value) =>
                            handleSelectChange("preferredTech", value)
                          }
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select technology" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="fullstack">
                              Full Stack Development
                            </SelectItem>
                            <SelectItem value="frontend">
                              Frontend Development
                            </SelectItem>
                            <SelectItem value="backend">
                              Backend Development
                            </SelectItem>
                            <SelectItem value="mobile">
                              Mobile App Development
                            </SelectItem>
                            <SelectItem value="data">
                              Data Science & Analytics
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="motivation">
                        Why do you want to join our program? *
                      </Label>
                      <Textarea
                        id="motivation"
                        name="motivation"
                        value={applicationData.motivation}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="mt-1"
                        placeholder="Tell us about your career goals and why you're excited about fintech..."
                      />
                    </div>

                    <div className="border-2 border-dashed border-finance-blue/20 rounded-lg p-6 text-center">
                      <Upload className="w-8 h-8 text-finance-blue mx-auto mb-3" />
                      <h4 className="font-semibold text-finance-navy mb-2">
                        Upload Resume
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
                      <Send className="mr-2 w-5 h-5" />
                      Submit Application
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>

              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-xl"
                asChild
              >
                <Link to="/contact">Have Questions? Contact Us</Link>
              </Button>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-300 text-sm">
                🔥 Join our WhatsApp group for instant updates:{" "}
                <a href="#" className="text-finance-gold hover:underline">
                  +91 98765 43210
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersFreshers;
