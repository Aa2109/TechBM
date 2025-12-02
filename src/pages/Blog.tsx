import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Calendar, Clock, User, ArrowRight } from "lucide-react";
import { blogPosts, categories } from "@/data/blogPosts";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const featuredPosts = blogPosts.filter((post) => post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Insights</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Expert insights on technology, development, and digital transformation
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search articles, topics, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-card border-b border-border sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === "All" && searchQuery === "" && (
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <div className="text-6xl font-bold text-primary/30">{post.id}</div>
                    </div>
                    <div className="p-6">
                      <Badge className="mb-3">{post.category}</Badge>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <Link to={`/blog/${post.slug}`}>
                        <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary/10">
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">
              {searchQuery || selectedCategory !== "All" ? "Search Results" : "All Articles"}
            </h2>
            <span className="text-muted-foreground">
              {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}
            </span>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground mb-4">No articles found</p>
              <p className="text-sm text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <div className="text-5xl font-bold text-primary/20">{post.id}</div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge>{post.category}</Badge>
                        {post.featured && (
                          <Badge variant="secondary" className="bg-accent/20 text-accent">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>

                      <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{post.author.name}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link to={`/blog/${post.slug}`}>
                        <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary/10">
                          Read Article <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Get the latest articles and insights delivered directly to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-background text-foreground flex-1"
            />
            <Button variant="outline" className="bg-background hover:bg-background/90">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
