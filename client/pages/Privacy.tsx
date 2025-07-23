import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Mail, Phone, Calendar, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "Personal Information: Name, email address, phone number, job title, and company information when you contact us or apply for positions.",
        "Technical Information: IP address, browser type, device information, and usage data when you visit our website.",
        "Professional Information: Resume, work experience, education, and skills when you apply for jobs or training programs.",
        "Communication Data: Records of your communications with us, including emails, support tickets, and consultation requests.",
      ],
    },
    {
      title: "How We Use Your Information",
      content: [
        "Service Delivery: To provide our fintech solutions, consulting services, and technical support.",
        "Communication: To respond to inquiries, send updates about our services, and provide customer support.",
        "Recruitment: To evaluate job applications, conduct interviews, and manage our hiring process.",
        "Improvement: To analyze website usage and improve our services and user experience.",
        "Legal Compliance: To comply with applicable laws, regulations, and legal processes.",
      ],
    },
    {
      title: "Information Sharing and Disclosure",
      content: [
        "We do not sell, trade, or rent your personal information to third parties.",
        "Service Providers: We may share information with trusted third-party service providers who assist us in operating our business.",
        "Legal Requirements: We may disclose information when required by law or to protect our rights and safety.",
        "Business Transfers: Information may be transferred in connection with mergers, acquisitions, or asset sales.",
        "Consent: We may share information with your explicit consent for specific purposes.",
      ],
    },
    {
      title: "Data Security",
      content: [
        "We implement industry-standard security measures to protect your personal information.",
        "All data transmission is encrypted using SSL/TLS protocols.",
        "Access to personal information is restricted to authorized personnel only.",
        "We regularly update our security practices and conduct security audits.",
        "Our systems are monitored 24/7 for potential security threats.",
      ],
    },
    {
      title: "Data Retention",
      content: [
        "Personal information is retained only as long as necessary for the purposes outlined in this policy.",
        "Job application data is retained for 2 years after the completion of the hiring process.",
        "Customer data is retained for the duration of our business relationship plus 7 years for legal compliance.",
        "Website usage data is typically retained for 2 years for analytics purposes.",
        "You may request deletion of your personal information subject to legal requirements.",
      ],
    },
    {
      title: "Your Rights",
      content: [
        "Access: You have the right to access the personal information we hold about you.",
        "Correction: You can request correction of inaccurate or incomplete information.",
        "Deletion: You may request deletion of your personal information in certain circumstances.",
        "Portability: You can request a copy of your data in a structured, machine-readable format.",
        "Objection: You may object to certain types of processing of your personal information.",
      ],
    },
    {
      title: "Cookies and Tracking",
      content: [
        "We use cookies and similar technologies to enhance your browsing experience.",
        "Essential cookies are necessary for website functionality and cannot be disabled.",
        "Analytics cookies help us understand how visitors interact with our website.",
        "You can control cookie preferences through your browser settings.",
        "Third-party services like Google Analytics may set their own cookies.",
      ],
    },
    {
      title: "International Data Transfers",
      content: [
        "Your information may be transferred to and processed in countries other than your own.",
        "We ensure appropriate safeguards are in place for international transfers.",
        "Data transfers comply with applicable data protection laws and regulations.",
        "We use standard contractual clauses and other approved transfer mechanisms.",
      ],
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
              Privacy Policy
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Your Privacy
              <span className="bg-gradient-to-r from-finance-gold to-yellow-400 bg-clip-text text-transparent">
                {" "}
                Matters
              </span>
              <br />
              to Us
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are committed to protecting your privacy and ensuring the
              security of your personal information. This policy explains how we
              collect, use, and safeguard your data.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-300">
              <Calendar className="w-4 h-4" />
              <span>Last Updated: January 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-finance-blue/20">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Shield className="w-8 h-8 text-finance-blue flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-finance-navy mb-4">
                      Our Commitment to Privacy
                    </h2>
                    <p className="text-finance-gray leading-relaxed">
                      Infyntrek Systèmes ("we," "our," or "us")
                      respects your privacy and is committed to protecting your
                      personal information. This Privacy Policy describes how we
                      collect, use, disclose, and safeguard your information
                      when you visit our website, use our services, or interact
                      with us. By using our services, you consent to the
                      practices described in this policy.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-20 bg-finance-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-finance-navy flex items-center space-x-2">
                    <span className="w-8 h-8 bg-finance-blue text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <span>{section.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {section.content.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-finance-success flex-shrink-0 mt-0.5" />
                        <p className="text-finance-gray leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-finance-gold/30">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-finance-navy mb-6 text-center">
                  Contact Us About Privacy
                </h2>
                <p className="text-finance-gray mb-6 text-center">
                  If you have any questions about this Privacy Policy or our
                  data practices, please contact us:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <Mail className="w-8 h-8 text-finance-blue mx-auto mb-3" />
                    <h3 className="font-semibold text-finance-navy mb-2">
                      Email Us
                    </h3>
                    <p className="text-finance-gray">
                      privacy@infyntrek.in
                    </p>
                  </div>
                  <div className="text-center">
                    <Phone className="w-8 h-8 text-finance-blue mx-auto mb-3" />
                    <h3 className="font-semibold text-finance-navy mb-2">
                      Call Us
                    </h3>
                    <p className="text-finance-gray">+91 63719 76430</p>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-sm text-finance-gray mb-4">
                    We will respond to privacy-related inquiries within 30 days.
                  </p>
                  <Button asChild>
                    <Link to="/contact">General Contact Form</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Updates Notice */}
      <section className="py-16 bg-finance-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl font-bold text-finance-navy mb-4">
              Policy Updates
            </h2>
            <p className="text-finance-gray mb-6">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the "Last Updated" date. We encourage you
              to review this policy periodically for any changes.
            </p>
            <Badge className="bg-finance-blue/10 text-finance-blue border-finance-blue/20">
              Version 2.0 - Effective January 2025
            </Badge>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
