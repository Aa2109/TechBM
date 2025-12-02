import { Link } from "react-router-dom";
import { Code, Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Code className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                TechBM
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Delivering innovative IT solutions for businesses worldwide since 2025.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Website & Web Development</li>
              <li className="text-sm text-muted-foreground">Mobile App Development</li>
              <li className="text-sm text-muted-foreground">Java Consulting</li>
              <li className="text-sm text-muted-foreground">Cloud Solutions</li>
              <li className="text-sm text-muted-foreground">UI/UX Design Services</li>
              <li className="text-sm text-muted-foreground">Software Development</li>
              <li className="text-sm text-muted-foreground">Cloud & DevOps Services</li>
              <li className="text-sm text-muted-foreground">Digital Marketing Services</li>
              <li className="text-sm text-muted-foreground">Cybersecurity Services</li>
              <li className="text-sm text-muted-foreground">AI & Automation</li>

              

            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>bazmimateen@techbm.in</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 9122730270</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>BTM 2nd stage Bengaluru</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} TechBM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
