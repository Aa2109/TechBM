import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Code, Smartphone, Coffee, Cloud, Database, Shield } from "lucide-react";
import webService from "@/assets/service-web.jpg";
import mobileService from "@/assets/service-mobile.jpg";
import javaService from "@/assets/service-java.jpg";
import cloudService from "@/assets/service-cloud.jpg";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Website & Web Development",
      image: webService,
      description: "Custom web applications tailored to your business needs",
      features: [
        "Responsive website design",
        "E-commerce solutions",
        "Content Management Systems",
        "Progressive Web Apps (PWA)",
        "API development & integration",
        "Performance optimization",
      ],
      technologies: ["Java","React", "Vue.js", "Angular", "Node.js", "Python", "PHP"],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      image: mobileService,
      description: "Native and cross-platform mobile applications",
      features: [
        "iOS app development",
        "Android app development",
        "Cross-platform solutions",
        "UI/UX design",
        "App maintenance & support",
        "App Store optimization",
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic"],
    },
    {
      icon: Coffee,
      title: "Java Consulting",
      image: javaService,
      description: "Enterprise Java solutions and architecture",
      features: [
        "Java application development",
        "Spring Boot microservices",
        "Enterprise architecture",
        "Legacy system modernization",
        "Performance tuning",
        "Code review & best practices",
      ],
      technologies: ["Spring", "Hibernate", "Maven", "Jenkins", "Docker"],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      image: cloudService,
      description: "Scalable cloud infrastructure and services",
      features: [
        "Cloud migration strategy",
        "Infrastructure as Code",
        "Auto-scaling solutions",
        "Cost optimization",
        "Disaster recovery",
        "Cloud security",
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Terraform"],
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Efficient database design and optimization",
      features: [
        "Database design & architecture",
        "Performance optimization",
        "Data migration",
        "Backup & recovery solutions",
        "Database security",
        "NoSQL implementations",
      ],
      technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Oracle"],
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions for your business",
      features: [
        "Security audits",
        "Penetration testing",
        "Compliance consulting",
        "Security training",
        "Incident response",
        "Vulnerability assessments",
      ],
      technologies: ["OWASP", "SSL/TLS", "OAuth", "JWT", "Firewalls"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive IT solutions designed to help your business thrive in the digital age
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <Card key={index} className="overflow-hidden border-2 hover:border-primary transition-colors">
                  <div className={`grid grid-cols-1 ${service.image ? "lg:grid-cols-2" : ""} gap-0`}>
                    {service.image && (
                      <div className={`${isEven ? "lg:order-1" : "lg:order-2"} aspect-video lg:aspect-auto`}>
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className={`${service.image ? (isEven ? "lg:order-2" : "lg:order-1") : ""} p-8 lg:p-12`}>
                      <CardHeader className="p-0 mb-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <Icon className="h-8 w-8 text-primary" />
                          </div>
                        </div>
                        <CardTitle className="text-2xl md:text-3xl">{service.title}</CardTitle>
                        <p className="text-muted-foreground mt-2">{service.description}</p>
                      </CardHeader>
                      <CardContent className="p-0">
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold mb-3">Key Features:</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {service.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start space-x-2">
                                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                  <span className="text-sm text-muted-foreground">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3">Technologies:</h4>
                            <div className="flex flex-wrap gap-2">
                              {service.technologies.map((tech, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how our services can help your business grow
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
