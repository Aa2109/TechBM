import { useParams, Link, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowLeft, Share2, BookmarkPlus } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import ReactMarkdown from "react-markdown";
import { useToast } from "@/hooks/use-toast";

const BlogPost = () => {
  const { slug } = useParams();
  const { toast } = useToast();

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link Copied!",
        description: "Article link has been copied to clipboard",
      });
    }
  };

  const handleBookmark = () => {
    toast({
      title: "Bookmarked!",
      description: "Article saved to your reading list",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Article Header */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog">
              <Button variant="ghost" size="sm" className="mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
              </Button>
            </Link>

            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
            <p className="text-xl text-muted-foreground mb-8">{post.excerpt}</p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-border mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent" />
                <div>
                  <div className="font-semibold text-sm">{post.author.name}</div>
                  <div className="text-xs text-muted-foreground">{post.author.role}</div>
                </div>
              </div>
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.publishedDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}</span>
              </div>
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="ml-auto flex space-x-2">
                <Button variant="outline" size="sm" onClick={handleShare}>
                  <Share2 className="h-4 w-4 mr-2" /> Share
                </Button>
                <Button variant="outline" size="sm" onClick={handleBookmark}>
                  <BookmarkPlus className="h-4 w-4 mr-2" /> Save
                </Button>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-12">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-xl font-semibold mt-6 mb-3">{children}</h3>,
                  p: ({ children }) => <p className="text-muted-foreground mb-4 leading-relaxed">{children}</p>,
                  ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
                  li: ({ children }) => <li className="text-muted-foreground">{children}</li>,
                  code: ({ children }) => (
                    <code className="bg-muted px-2 py-1 rounded text-sm font-mono">{children}</code>
                  ),
                  pre: ({ children }) => (
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">{children}</pre>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-12 pb-8 border-b border-border">
              <span className="text-sm font-semibold mr-2">Tags:</span>
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Author Bio */}
            <Card className="mb-12 border-2">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">{post.author.name}</h3>
                    <p className="text-sm text-primary mb-2">{post.author.role}</p>
                    <p className="text-sm text-muted-foreground">
                      Technology leader with extensive experience in software development, architecture, and digital
                      transformation. Passionate about sharing knowledge and helping businesses succeed.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Card
                      key={relatedPost.id}
                      className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary"
                    >
                      <CardContent className="p-6">
                        <Badge className="mb-3">{relatedPost.category}</Badge>
                        <h3 className="font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                        <Link to={`/blog/${relatedPost.slug}`}>
                          <Button variant="ghost" size="sm" className="w-full">
                            Read More
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
