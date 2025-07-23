import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [careersOpen, setCareersOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Our Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  const careerItems = [
    { name: "Freshers Program", path: "/careers/freshers" },
    { name: "Tech Roles", path: "/careers/tech" },
    { name: "Non-Tech Roles", path: "/careers/non-tech" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10  from-finance-blue to-finance-navy rounded-lg flex items-center justify-center">
              <img src="/infotact logo.png" alt="logo" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-finance-navy">
                Infyntrek Systèmes
              </span>
              <div className="text-xs text-finance-gray">
                Fintech Innovation
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-finance-blue border-b-2 border-finance-blue"
                    : "text-finance-gray hover:text-finance-navy"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Careers Dropdown */}
            <div className="relative">
              <button
                onClick={() => setCareersOpen(!careersOpen)}
                className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-finance-gray hover:text-finance-navy transition-colors duration-200"
              >
                <span>Careers</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${careersOpen ? "rotate-180" : ""}`}
                />
              </button>

              {careersOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  {careerItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-finance-gray hover:text-finance-navy hover:bg-finance-light transition-colors duration-200"
                      onClick={() => setCareersOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link to="/contact">Get Consultation</Link>
            </Button>
            <Button
              size="sm"
              className="bg-finance-gold hover:bg-finance-gold/90 text-finance-navy"
              asChild
            >
              <Link to="/careers/freshers">Join Our Team</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-finance-gray hover:text-finance-navy hover:bg-finance-light"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                    isActive(item.path)
                      ? "text-finance-blue bg-finance-light"
                      : "text-finance-gray hover:text-finance-navy hover:bg-finance-light"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="border-t border-gray-200 pt-2 mt-2">
                <div className="px-3 py-2 text-sm font-semibold text-finance-navy">
                  Careers
                </div>
                {careerItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-6 py-2 text-sm text-finance-gray hover:text-finance-navy hover:bg-finance-light rounded-md transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 mt-4 space-y-2">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link to="/contact">Get Consultation</Link>
                </Button>
                <Button
                  size="sm"
                  className="w-full bg-finance-gold hover:bg-finance-gold/90 text-finance-navy"
                  asChild
                >
                  <Link to="/careers/freshers">Join Our Team</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
