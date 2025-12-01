import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      // name: "",
      role: "CEO, RetailCorp",
      company: "E-Commerce Industry",
      rating: 5,
      text: "TechBM transformed our online presence completely. Their web development team built us a platform that not only looks amazing but handles massive traffic effortlessly. Our sales tripled within the first six months!",
      project: "E-Commerce Platform",
    },
    {
      // name: "Jennifer Lee",
      role: "CTO, FinanceBank",
      company: "Financial Services",
      rating: 5,
      text: "Security was our top priority, and TechSolutions delivered beyond our expectations. The mobile banking app they developed is both secure and user-friendly. Our customers love it, and we've had zero security incidents.",
      project: "Mobile Banking App",
    },
    {
      // name: "Robert Martinez",
      role: "Operations Director, ManufactureCo",
      company: "Manufacturing",
      rating: 5,
      text: "The ERP system TechBM built for us revolutionized our operations. Their Java consulting expertise helped us modernize our legacy systems and achieve a 40% reduction in operational costs.",
      project: "Enterprise ERP System",
    },
    {
      // name: "Dr. Sarah Williams",
      role: "IT Director, MediCare Systems",
      company: "Healthcare",
      rating: 5,
      text: "Moving our healthcare data to the cloud seemed daunting, but TechBM made it seamless. Their team ensured full HIPAA compliance while improving our data accessibility across all facilities.",
      project: "Cloud Migration",
    },
    {
      // name: "Michael Thompson",
      role: "Founder, PropertyHub",
      company: "Real Estate",
      rating: 5,
      text: "Our real estate marketplace couldn't have been built by a better team. TechBM understood our vision and created a platform that's both powerful and intuitive. User growth has been phenomenal!",
      project: "Marketplace Platform",
    },
    {
      // name: "Lisa Anderson",
      role: "Operations Manager, ShipFast Logistics",
      company: "Logistics",
      rating: 5,
      text: "The tracking system TechBM developed has been a game-changer for our logistics operations. Real-time visibility and automated workflows have increased our efficiency by 30%.",
      project: "Logistics System",
    },
    {
      // name: "James Wilson",
      role: "VP of Technology, TechStart Inc",
      company: "Technology Startup",
      rating: 5,
      text: "As a startup, we needed a reliable tech partner, and TechSolutions exceeded all expectations. Their agile approach and technical expertise helped us launch quickly and scale smoothly.",
      project: "SaaS Platform",
    },
    {
      // name: "Emily Carter",
      role: "Marketing Director, BrandBoost",
      company: "Digital Marketing",
      rating: 5,
      text: "The web application TechBM built for us is not only beautiful but also incredibly fast. It has significantly improved our client onboarding process and brand perception.",
      project: "Web Application",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it - hear what our satisfied clients have to say
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Retention</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary"
              >
                <CardContent className="p-8">
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />

                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>

                  <div className="border-t border-border pt-6">
                    <div className="flex items-start justify-between">
                      <div>
                        {/* <div className="font-semibold text-foreground">{testimonial.name}</div> */}
                        <div className="text-sm text-primary">{testimonial.role}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                      </div>
                      <div className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {testimonial.project}
                      </div>
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
            Become Our Next Success Story
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their business with our solutions
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
