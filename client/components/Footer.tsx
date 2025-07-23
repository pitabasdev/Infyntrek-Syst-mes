import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github,Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-finance-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-finance-blue to-finance-gold rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">FS</span>
              </div>
              <div>
                <span className="text-xl font-bold">Infyntrek Systèmes</span>
                <div className="text-sm text-gray-300">Fintech Innovation</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Fast-growing fintech startup revolutionizing financial software
              development. We collaborate with industry leaders like Amazon and
              AMEX to deliver Industry 5.0-ready training and cutting-edge
              fintech solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/infyntrek-systemes/"
                className="w-10 h-10 bg-finance-blue/20 rounded-lg flex items-center justify-center hover:bg-finance-blue/30 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/infyntreksys"
                className="w-10 h-10 bg-finance-blue/20 rounded-lg flex items-center justify-center hover:bg-finance-blue/30 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-finance-blue/20 rounded-lg flex items-center justify-center hover:bg-finance-blue/30 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
                      <a
                href="#"
                className="w-10 h-10 bg-finance-blue/20 rounded-lg flex items-center justify-center hover:bg-finance-blue/30 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-finance-gold transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-finance-gold transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-gray-300 hover:text-finance-gold transition-colors"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="/careers/freshers"
                  className="text-gray-300 hover:text-finance-gold transition-colors"
                >
                  Training Program
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-finance-gold transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">RBI Compliance Solutions</li>
              <li className="text-gray-300">Fintech Development</li>
              <li className="text-gray-300">API Integration</li>
              <li className="text-gray-300">Mobile App Development</li>
              <li className="text-gray-300">Consulting Services</li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-finance-gold" />
              <div>
                <div className="text-sm text-gray-300">Email</div>
                <div className="font-medium">contact@infyntrek.in</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-finance-gold" />
              <div>
                <div className="text-sm text-gray-300">Phone</div>
                <div className="font-medium">+91 63719 76430</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-finance-gold" />
              <div>
                <div className="text-sm text-gray-300">Address</div>
                <div className="font-medium">Remote, India</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm">
            © 2024 Infyntrek Systèmes. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="/privacy"
              className="text-gray-300 hover:text-finance-gold text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-300 hover:text-finance-gold text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
