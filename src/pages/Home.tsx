import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Users, Award, Briefcase, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-bg.jpg";
import webService from "@/assets/service-web.jpg";
import mobileService from "@/assets/service-mobile.jpg";
import javaService from "@/assets/service-java.jpg";
import cloudService from "@/assets/service-cloud.jpg";

const Home = () => {
  const stats = [
    { icon: Users, value: "10+", label: "Happy Clients" },
    { icon: Briefcase, value: "10+", label: "Projects Completed" },
    { icon: Award, value: "7+", label: "Awards Won" },
    { icon: TrendingUp, value: "10+", label: "Years Experience" },
  ];

  const services = [
    {
      image: webService,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
    },
    {
      image: mobileService,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps for iOS and Android.",
    },
    {
      image: javaService,
      title: "Java Consulting",
      description: "Enterprise Java solutions and architecture consulting services.",
    },
    {
      image: cloudService,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services.",
    },
    
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-background/90" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Innovative IT Solutions for Your{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Digital Future
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transform your business with cutting-edge technology solutions. We deliver excellence in web development,
              mobile apps, and enterprise consulting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/services">
                  Explore Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="text-3xl font-bold text-foreground mb-1">{stat.value}</h3>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary"
              >
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2 text-foreground">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="default" size="lg" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose TechBM?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "15+ years of industry experience",
                "Expert team of certified developers",
                "Agile development methodology",
                "24/7 technical support",
                "Competitive pricing",
                "On-time project delivery",
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our IT solutions can help you achieve your goals
          </p>
          <Button variant="outline" size="lg" className="bg-background hover:bg-background/90" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
