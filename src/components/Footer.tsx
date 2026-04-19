import { Link } from "react-router-dom";
import { Code, Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowRight, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
    hover: {
      x: 5,
      color: "rgb(210, 180, 140)",
      transition: { duration: 0.2 },
    },
  };

  const socialLinks = [
    { icon: Linkedin, url: "https://www.linkedin.com/in/bazami-mateen-78ba21214/", label: "LinkedIn" },
    { icon: Twitter, url: "#", label: "Twitter" },
    { icon: Github, url: "#", label: "GitHub" },
  ];

  return (
    <footer className="relative bg-background border-t border-primary/10 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10">
        {/* Main Content */}
        <motion.div
          className="container mx-auto px-4 py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-4">
              <Link to="/" className="flex items-center space-x-2 group">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors"
                >
                  <Code className="h-6 w-6 text-primary" />
                </motion.div>
                <span className="font-bold text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  TechBM
                </span>
              </Link>
              <p className="text-muted-foreground leading-relaxed max-w-sm">
                Delivering innovative IT solutions for businesses worldwide since 2025. We transform ideas into digital excellence.
              </p>

              {/* Newsletter Signup */}
              <form onSubmit={handleSubscribe} className="mt-6 space-y-2">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider">Stay Updated</p>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email..."
                    className="w-full px-4 py-3 bg-primary/10 border border-primary/20 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:bg-primary/20 transition-all"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1/2 -translate-y-1/2 p-2 bg-primary hover:bg-primary/90 rounded-md transition-colors"
                  >
                    <Send className="h-4 w-4 text-background" />
                  </button>
                </div>
                {subscribed && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-primary">
                    ✓ Thanks for subscribing!
                  </motion.p>
                )}
              </form>

              {/* Social Links */}
              <div className="flex gap-3 pt-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-primary/10 hover:bg-primary/20 rounded-lg text-primary hover:text-primary transition-colors"
                      title={social.label}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="font-semibold text-foreground text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { label: "About Us", to: "/about" },
                  { label: "Services", to: "/services" },
                  { label: "Portfolio", to: "/portfolio" },
                  { label: "Blog", to: "/blog" },
                ].map((link, index) => (
                  <motion.li key={index} variants={linkVariants}>
                    <Link
                      to={link.to}
                      className="text-muted-foreground hover:text-primary inline-flex items-center gap-2 group transition-colors"
                    >
                      {link.label}
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="font-semibold text-foreground text-lg mb-6">Services</h3>
              <ul className="space-y-2 text-sm">
                {[
                  "Web Development",
                  "Mobile Apps",
                  "Cloud Solutions",
                  "UI/UX Design",
                  "DevOps Services",
                  "AI & Automation",
                ].map((service, index) => (
                  <motion.li
                    key={index}
                    variants={linkVariants}
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    {service}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="font-semibold text-foreground text-lg mb-6">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group cursor-pointer">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors mt-1"
                  >
                    <Mail className="h-4 w-4 text-primary" />
                  </motion.div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                    <a href="mailto:bazmimateen@techbm.in" className="text-sm text-foreground hover:text-primary transition-colors">
                      bazmimateen@techbm.in
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3 group cursor-pointer">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors mt-1"
                  >
                    <Phone className="h-4 w-4 text-primary" />
                  </motion.div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Phone</p>
                    <a href="tel:+919122730270" className="text-sm text-foreground hover:text-primary transition-colors">
                      +91 9122730270
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3 group cursor-pointer">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors mt-1"
                  >
                    <MapPin className="h-4 w-4 text-primary" />
                  </motion.div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Location</p>
                    <p className="text-sm text-foreground">BTM 2nd Stage, Bengaluru</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Divider with gradient */}
          <div className="relative my-8">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent h-px" />
          </div>

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
          >
            <p>&copy; {new Date().getFullYear()} TechBM. All rights reserved.</p>
            <div className="flex gap-6">
              <motion.a
                whileHover={{ color: "rgb(210, 180, 140)" }}
                href="#"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                whileHover={{ color: "rgb(210, 180, 140)" }}
                href="#"
                className="hover:text-primary transition-colors"
              >
                Terms of Service
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
