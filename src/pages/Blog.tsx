import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Mock blog post data
const blogPosts = [
  {
    id: 1,
    title: "My First Successful Grow: Lessons from a Beginner",
    excerpt: "After months of research and failed attempts, I finally achieved my first successful mushroom cultivation. Here's what I learned...",
    content: `# My First Successful Grow: Lessons from a Beginner

After months of research and **failed attempts**, I finally achieved my first successful mushroom cultivation. Here's what I learned along the way.

## The Journey Begins

Starting out in mushroom cultivation can be overwhelming. There's so much information out there, and it's hard to know where to begin. I made several mistakes in my early attempts:

- Not maintaining proper sterile technique
- Incorrect moisture levels
- Poor air circulation
- Impatience with the process

## What Finally Worked

The breakthrough came when I simplified my approach and focused on the fundamentals:

### 1. Sterile Technique
This cannot be overstated. Every surface, every tool, every container needs to be properly sterilized. I invested in:
- Pressure cooker for sterilization
- 70% isopropyl alcohol
- Latex gloves
- Still-air box for inoculation

### 2. Environmental Control
Creating the right environment is crucial:
- **Temperature**: Maintained 75-80°F consistently
- **Humidity**: 80-90% during fruiting
- **Fresh Air Exchange**: Critical for healthy development

## Results and Reflection

My first successful harvest yielded about 2 ounces of beautiful mushrooms. The sense of accomplishment was incredible! 

*Remember: patience and attention to detail are your best friends in this hobby.*`,
    author: "FunGuy",
    date: "2024-01-15",
    tags: ["beginner", "personal-story", "tips"],
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Contamination Blues: How I Learned to Love Failure",
    excerpt: "Every cultivator faces contamination. Here's how I turned my biggest failures into learning experiences...",
    content: `# Contamination Blues: How I Learned to Love Failure

Every cultivator faces contamination at some point. Here's how I turned my biggest failures into valuable learning experiences.

## The Green Monster

Trichoderma (green mold) was my nemesis for months. It seemed like every project would get infected, and I was ready to give up. But failure taught me more than any success could.

## What Contamination Taught Me

### Sterile Technique Mastery
Each contaminated batch forced me to examine my process:
- Where did I make a mistake?
- What step did I rush?
- How could I improve next time?

### Environmental Awareness
Contamination helped me understand:
- Air flow patterns in my growing space
- Sources of contamination I hadn't considered
- The importance of cleaning protocols

## Turning Failure into Success

Now I see contamination as a teacher rather than an enemy. Each failure brought me closer to mastery.

**Key takeaway**: Don't fear failure - embrace it as part of the learning process!`,
    author: "FunGuy",
    date: "2024-02-02",
    tags: ["contamination", "learning", "mindset"],
    readTime: "4 min read"
  }
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  if (selectedPost !== null) {
    const post = blogPosts.find(p => p.id === selectedPost);
    if (!post) return null;

    return (
      <div className="min-h-screen bg-background pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Button 
            variant="outline" 
            onClick={() => setSelectedPost(null)}
            className="mb-6"
          >
            ← Back to Blog
          </Button>
          
          <article className="prose prose-lg max-w-none">
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-primary mb-4">{post.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                <span>By {post.author}</span>
                <span>•</span>
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map(tag => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </header>
            
            <div 
              className="text-foreground prose-headings:text-foreground prose-strong:text-foreground prose-code:text-foreground"
              dangerouslySetInnerHTML={{ 
                __html: post.content.replace(/\n/g, '<br/>').replace(/#+\s*(.*?)(<br\/>|$)/g, '<h2 class="text-2xl font-bold mt-6 mb-4 text-primary">$1</h2>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>') 
              }} 
            />
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Personal Stories & Experiences
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My cultivation journey, lessons learned, and adventures in the fascinating world of fungi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map(post => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {post.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Button 
                  variant="hero" 
                  size="sm"
                  onClick={() => setSelectedPost(post.id)}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;