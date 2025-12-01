import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Award } from "lucide-react";
import teamImage from "@/assets/about-team.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We constantly push boundaries to deliver cutting-edge solutions.",
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description: "Your success is our priority. We're committed to exceeding expectations.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do.",
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Open communication and honest relationships with our clients.",
    },
  ];

  const team = [
     { name: "Bazami Mateen", role: "Founder & Director", years: "5+ years experience" },

    { name: "Shabbir Ahmad", role: "CEO & CTO ", years: "10+ years experience" },
     { name: "Abhishek Raj", role: "Director", years: "5+ years experience" },

    // { name: "S", role: "CTO", years: "15+ years experience" },
  
    { name: "Md khursid Alam", role: "Project Manager", years: "10+ years experience" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About TechBM</h1>
            <p className="text-xl text-muted-foreground">
              Building digital excellence since 2025, one project at a time
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2025, TechBM began with a simple mission: to help businesses leverage technology
                  to achieve their goals. What started as a small team of passionate developers has grown into a
                  full-service IT consulting firm serving clients worldwide.
                </p>
                <p>
                  Over the years, we've completed more than 10+ projects, ranging from small business websites to
                  complex enterprise applications. Our commitment to quality, innovation, and client satisfaction has
                  earned us numerous awards and, more importantly, the trust of our clients.
                </p>
                <p>
                  Today, we continue to evolve with the ever-changing technology landscape, always staying ahead of the
                  curve to deliver the best solutions to our clients.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src={teamImage} alt="Our Team" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower businesses with innovative IT solutions that drive growth, efficiency, and competitive
                  advantage in the digital age. We strive to be a trusted partner in our clients' success journey.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-8">
                <Eye className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the leading IT solutions provider recognized globally for innovation, quality, and client
                  satisfaction. We envision a future where technology seamlessly transforms businesses.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-lg text-muted-foreground">Meet the experts driving our success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-2">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.years}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
