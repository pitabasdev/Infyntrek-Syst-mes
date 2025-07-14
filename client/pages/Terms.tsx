import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Scale,
  AlertTriangle,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: [
        "By accessing and using FinanceStream Solutions & Services' website and services, you accept and agree to be bound by these Terms of Service.",
        "If you do not agree to these terms, please do not use our services or website.",
        "These terms apply to all visitors, users, and customers of our services.",
        "Your continued use of our services constitutes acceptance of any updates to these terms.",
      ],
    },
    {
      title: "Description of Services",
      content: [
        "We provide financial technology software development services, including custom fintech applications, RBI-compliant solutions, and consulting services.",
        "Our services include but are not limited to: asset financing tools, lending platforms, KYC automation, mobile banking apps, and financial analytics.",
        "We offer training programs, career placement services, and technical support.",
        "Service availability may vary based on your location and applicable regulations.",
        "We reserve the right to modify, suspend, or discontinue any service at any time with notice.",
      ],
    },
    {
      title: "User Responsibilities",
      content: [
        "You must provide accurate, current, and complete information when using our services.",
        "You are responsible for maintaining the confidentiality of your account credentials.",
        "You agree not to use our services for any unlawful or prohibited activities.",
        "You must comply with all applicable laws and regulations when using our services.",
        "You are responsible for all activities that occur under your account.",
      ],
    },
    {
      title: "Intellectual Property Rights",
      content: [
        "All content, software, and materials provided by FinanceStream are protected by intellectual property laws.",
        "You may not copy, modify, distribute, or create derivative works from our proprietary content without written permission.",
        "Our trademarks, logos, and brand names are protected and may not be used without authorization.",
        "Customer-specific developments may be subject to separate intellectual property agreements.",
        "We respect third-party intellectual property rights and expect users to do the same.",
      ],
    },
    {
      title: "Payment Terms",
      content: [
        "Payment terms for services will be specified in individual service agreements or invoices.",
        "All fees are due within 30 days of invoice date unless otherwise specified.",
        "Late payments may be subject to interest charges as permitted by law.",
        "We reserve the right to suspend services for non-payment after appropriate notice.",
        "Refunds are subject to the terms specified in individual service agreements.",
      ],
    },
    {
      title: "Privacy and Data Protection",
      content: [
        "Your privacy and data protection are governed by our Privacy Policy, which is incorporated into these terms.",
        "We implement appropriate security measures to protect your personal and business information.",
        "Data processing activities comply with applicable data protection laws including GDPR where applicable.",
        "We may use aggregated, anonymized data for business improvement and research purposes.",
        "Customer data remains the property of the customer and is protected according to our data protection standards.",
      ],
    },
    {
      title: "Limitation of Liability",
      content: [
        "FinanceStream's liability is limited to the maximum extent permitted by applicable law.",
        "We are not liable for indirect, incidental, special, or consequential damages.",
        "Our total liability shall not exceed the amount paid by you for the specific service in question.",
        "We do not guarantee uninterrupted or error-free operation of our services.",
        "You acknowledge that software and technology services may have inherent limitations and risks.",
      ],
    },
    {
      title: "Indemnification",
      content: [
        "You agree to indemnify and hold FinanceStream harmless from claims arising from your use of our services.",
        "This includes claims related to your violation of these terms or applicable laws.",
        "You are responsible for defending against and paying damages for covered claims.",
        "We will provide reasonable cooperation in the defense of covered claims.",
        "This indemnification survives termination of your use of our services.",
      ],
    },
    {
      title: "Termination",
      content: [
        "Either party may terminate service agreements with appropriate notice as specified in individual contracts.",
        "We may immediately terminate access for violation of these terms or illegal activities.",
        "Upon termination, you must cease using our services and return any confidential information.",
        "Surviving provisions include intellectual property rights, limitation of liability, and indemnification.",
        "Data return or deletion procedures will follow the terms of individual service agreements.",
      ],
    },
    {
      title: "Dispute Resolution",
      content: [
        "Any disputes will first be addressed through good faith negotiations between the parties.",
        "If negotiations fail, disputes may be resolved through binding arbitration.",
        "Arbitration will be conducted according to the rules of the American Arbitration Association.",
        "The arbitration location will be Seattle, Washington, unless otherwise agreed.",
        "Each party bears their own costs unless the arbitrator determines otherwise.",
      ],
    },
    {
      title: "Governing Law",
      content: [
        "These terms are governed by the laws of the State of Washington, United States.",
        "Any legal proceedings will be subject to the jurisdiction of Washington state courts.",
        "International users may be subject to additional local laws and regulations.",
        "We make no representation that our services are appropriate for use in all jurisdictions.",
        "You are responsible for compliance with local laws in your jurisdiction.",
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
              Terms of Service
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Terms &
              <span className="bg-gradient-to-r from-finance-gold to-yellow-400 bg-clip-text text-transparent">
                {" "}
                Conditions
              </span>
              <br />
              of Service
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Please read these terms carefully before using our services. These
              terms govern your use of FinanceStream's services and establish
              the legal framework for our business relationship.
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
                  <Scale className="w-8 h-8 text-finance-blue flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-finance-navy mb-4">
                      Legal Agreement
                    </h2>
                    <p className="text-finance-gray leading-relaxed mb-4">
                      These Terms of Service ("Terms") constitute a legally
                      binding agreement between you and FinanceStream Solutions
                      & Services ("Company," "we," "us," or "our") regarding
                      your use of our website, services, and products.
                    </p>
                    <div className="bg-finance-light p-4 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <AlertTriangle className="w-5 h-5 text-finance-warning flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-finance-gray">
                          <strong>Important:</strong> By using our services, you
                          agree to be bound by these terms. If you disagree with
                          any part of these terms, you may not access or use our
                          services.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
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

      {/* Contact and Compliance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-2 border-finance-gold/30">
                <CardContent className="p-8 text-center">
                  <FileText className="w-12 h-12 text-finance-blue mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-finance-navy mb-4">
                    Questions About Terms?
                  </h3>
                  <p className="text-finance-gray mb-6">
                    If you have questions about these terms or need
                    clarification, please contact our legal team.
                  </p>
                  <div className="space-y-2 text-sm text-finance-gray mb-6">
                    <p>Email: legal@financestream.com</p>
                    <p>Phone: +1 (206) 555-0123</p>
                  </div>
                  <Button asChild>
                    <Link to="/contact">Contact Legal Team</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-finance-blue/30">
                <CardContent className="p-8 text-center">
                  <Scale className="w-12 h-12 text-finance-gold mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-finance-navy mb-4">
                    Compliance & Regulations
                  </h3>
                  <p className="text-finance-gray mb-6">
                    Our services comply with applicable financial regulations
                    including RBI guidelines and international standards.
                  </p>
                  <div className="space-y-2 text-sm text-finance-gray mb-6">
                    <p>• SOC 2 Type II Certified</p>
                    <p>• ISO 27001 Compliant</p>
                    <p>• PCI DSS Certified</p>
                    <p>• GDPR Compliant</p>
                  </div>
                  <Button variant="outline" asChild>
                    <Link to="/services">View Compliance</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Updates Notice */}
      <section className="py-16 bg-finance-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl font-bold text-finance-navy mb-4">
              Terms Updates
            </h2>
            <p className="text-finance-gray mb-6">
              We reserve the right to modify these terms at any time. Changes
              will be effective immediately upon posting. Continued use of our
              services after changes constitutes acceptance of the new terms. We
              will notify users of significant changes via email or website
              notice.
            </p>
            <div className="flex items-center justify-center space-x-6">
              <Badge className="bg-finance-blue/10 text-finance-blue border-finance-blue/20">
                Version 3.1 - Effective January 2025
              </Badge>
              <Button variant="outline" size="sm" asChild>
                <Link to="/privacy">Privacy Policy</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
