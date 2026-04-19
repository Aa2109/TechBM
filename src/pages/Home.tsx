import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Briefcase,
  TrendingUp,
  Code,
  Smartphone,
  Cloud,
  Database,
  Zap,
  Target,
  Sparkles,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const stats = [
    { icon: Users, value: 10, label: "Happy Clients" },
    { icon: Briefcase, value: 10, label: "Projects Completed" },
    { icon: Award, value: 7, label: "Awards Won" },
    { icon: TrendingUp, value: 10, label: "Years Experience" },
  ];

  const Counter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({ triggerOnce: true });

    useEffect(() => {
      if (inView) {
        let start = 0;
        const increment = end / (duration / 50);
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 50);
      }
    }, [inView, end, duration]);

    return <span ref={ref}>{count}+</span>;
  };

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps for iOS and Android.",
    },
    {
      icon: Database,
      title: "Java Consulting",
      description: "Enterprise Java solutions and architecture consulting services.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services.",
    },
  ];

  const features = [
    "15+ years of industry experience",
    "Expert team of certified developers",
    "Agile development methodology",
    "24/7 technical support",
    "Competitive pricing",
    "On-time project delivery",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl"
            style={{ top: "-10%", left: "-5%" }}
            animate={{
              y: [0, 100, 0],
              x: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-96 h-96 bg-accent/10 rounded-full blur-3xl"
            style={{ bottom: "-10%", right: "-5%" }}
            animate={{
              y: [0, -100, 0],
              x: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-72 h-72 bg-primary/5 rounded-full blur-3xl"
            style={{ top: "50%", right: "10%" }}
            animate={{
              y: [0, -50, 0],
              x: [0, 30, 0],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Animated Badge */}
            <motion.div
              className="mb-8 flex justify-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary/70" />
                <span className="text-sm text-primary/80 font-medium">Welcome to the Future</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-shift">
                Transform Your
              </span>
              <br />
              <span className="text-foreground">Digital Future Today</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Cutting-edge IT solutions that empower your business to thrive in the digital age. Web development, mobile
              apps, and enterprise consulting.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(210, 100%, 56%, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-lg px-10 py-6">
                  <Link to="/services" className="flex items-center gap-2">
                    Explore Services
                    <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1, repeat: Infinity }}>
                      <ArrowRight className="h-5 w-5" />
                    </motion.div>
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" asChild className="text-lg px-10 py-6">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Floating Features */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                { icon: Zap, label: "Ultra Fast", delay: 0 },
                { icon: Target, label: "Precise", delay: 0.1 },
                { icon: Cloud, label: "Scalable", delay: 0.2 },
                { icon: Sparkles, label: "Modern", delay: 0.3 },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    className="text-center"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, delay: idx * 0.3 }}
                  >
                    <motion.div
                      className="p-4 bg-primary/10 rounded-xl w-fit mx-auto mb-2"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(210, 100%, 56%, 0.2)" }}
                    >
                      <Icon className="h-6 w-6 text-primary/70" />
                    </motion.div>
                    <p className="text-sm text-muted-foreground font-medium">{item.label}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center p-2">
            <motion.div className="w-1 h-2 bg-primary rounded-full" animate={{ opacity: [1, 0, 1] }} transition={{ duration: 2, repeat: Infinity }} />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-background to-accent/5 relative overflow-hidden border-y border-primary/10">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute w-full h-full"
            animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
            transition={{ duration: 20, repeat: Infinity }}
            style={{
              backgroundImage: "radial-gradient(circle at 20% 50%, hsl(var(--primary))/0.1 0%, transparent 50%)",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div key={index} className="text-center" variants={itemVariants}>
                  <motion.div
                    className="mb-4"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity }}
                  >
                    <div className="p-4 bg-primary/10 rounded-xl w-fit mx-auto">
                      <Icon className="h-8 w-8 text-primary/70" />
                    </div>
                  </motion.div>
                  <motion.h3 className="text-5xl md:text-6xl font-bold text-foreground mb-2">
                    <Counter end={stat.value} />
                  </motion.h3>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground">Comprehensive IT solutions tailored to your business needs</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    whileTap={{ scale: 0.98 }}
                    className="h-full"
                  >
                    <Card className="group relative h-full overflow-hidden border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 cursor-pointer bg-gradient-to-br from-card to-secondary/10">
                      {/* Animated background gradient */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-accent/0"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />

                      <CardContent className="p-8 relative z-10 h-full flex flex-col items-center text-center">
                        <motion.div
                          className="mb-6 p-4 bg-primary/10 rounded-xl"
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 2.5, repeat: Infinity }}
                          whileHover={{ scale: 1.1, backgroundColor: "rgba(210, 100%, 56%, 0.2)" }}
                        >
                          <Icon className="h-8 w-8 text-primary/70" />
                        </motion.div>
                        <h3 className="font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{service.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Button variant="default" size="lg" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Why Choose TechBM?</h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 p-5 rounded-xl bg-secondary/50 hover:bg-secondary/70 transition-all duration-300 group cursor-pointer"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                    className="flex-shrink-0"
                  >
                    <CheckCircle className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
                  </motion.div>
                  <span className="text-foreground font-medium">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-primary/15 via-background to-accent/15 border-y border-primary/10">
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our IT solutions can help you achieve your goals
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-6 transition-all" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
