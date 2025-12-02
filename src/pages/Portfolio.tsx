import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform Redesign",
      client: "RetailCorp",
      category: "Web Development",
      description:
        "Complete redesign and development of a modern e-commerce platform handling 100K+ daily transactions.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      metrics: ["300% increase in conversion", "50% faster load times", "99.9% uptime"],
      outcome:
        "Successfully launched platform that tripled sales and improved customer satisfaction ratings by 85%.",
    },
    {
      title: "Mobile Banking Application",
      client: "FinanceBank",
      category: "Mobile Development",
      description:
        "Secure and intuitive mobile banking app for iOS and Android with biometric authentication.",
      technologies: ["React Native", "Node.js", "MongoDB", "Firebase"],
      metrics: ["500K+ downloads", "4.8 star rating", "99.99% security score"],
      outcome:
        "Delivered a secure banking solution trusted by half a million users with zero security incidents.",
    },
    {
      title: "Enterprise Resource Planning System",
      client: "ManufactureCo",
      category: "Java Consulting",
      description:
        "Custom ERP system to streamline manufacturing operations and supply chain management.",
      technologies: ["Spring Boot", "Java", "Oracle", "Docker"],
      metrics: ["40% cost reduction", "60% faster processing", "Real-time analytics"],
      outcome:
        "Integrated system reduced operational costs and improved efficiency across all departments.",
    },
    {
      title: "Healthcare Data Platform",
      client: "MediCare Systems",
      category: "Cloud Solutions",
      description:
        "HIPAA-compliant cloud infrastructure for managing patient data across multiple facilities.",
      technologies: ["AWS", "Kubernetes", "PostgreSQL", "Terraform"],
      metrics: ["10M+ records managed", "100% HIPAA compliance", "Zero downtime migration"],
      outcome:
        "Seamlessly migrated legacy systems to cloud with enhanced security and accessibility.",
    },
    {
      title: "Real Estate Marketplace",
      client: "PropertyHub",
      category: "Web Development",
      description:
        "Comprehensive property listing platform with advanced search, virtual tours, and CRM integration.",
      technologies: ["Vue.js", "Python", "MySQL", "Google Cloud"],
      metrics: ["50K+ listings", "200% user growth", "90% customer retention"],
      outcome:
        "Created market-leading platform that connected thousands of buyers with their dream properties.",
    },
    {
      title: "Logistics Tracking System",
      client: "ShipFast Logistics",
      category: "Mobile Development",
      description:
        "Real-time package tracking and fleet management system for logistics operations.",
      technologies: ["Flutter", "Firebase", "Node.js", "Google Maps API"],
      metrics: ["10K+ daily shipments", "Real-time tracking", "30% efficiency gain"],
      outcome:
        "Streamlined operations with real-time visibility across entire logistics network.",
    },
  ];

  const categoryColors: Record<string, string> = {
    "Website & Web Development": "bg-primary/10 text-primary",
    "Mobile Development": "bg-accent/10 text-accent",
    "Java Consulting": "bg-secondary text-secondary-foreground",
    "Cloud Solutions": "bg-primary/20 text-primary",
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-muted-foreground">
              Discover how we've helped businesses achieve their digital transformation goals
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary group"
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <Badge className={categoryColors[project.category] || ""}>{project.category}</Badge>
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>

                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary mb-4">Client: {project.client}</p>
                  <p className="text-muted-foreground mb-6">{project.description}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-2">Key Metrics:</h4>
                      <ul className="space-y-1">
                        {project.metrics.map((metric, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center">
                            <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                            {metric}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <h4 className="font-semibold text-sm mb-2">Outcome:</h4>
                      <p className="text-sm text-muted-foreground">{project.outcome}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
