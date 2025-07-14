import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import FeatureCard from "@/components/FeatureCard";
import heroImage from "@/assets/hero-mushrooms.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          {/* Hero Title */}
          <h1 className="text-6xl md:text-7xl font-bold text-primary mb-8 animate-fade-in">
            Mycelial FunGuy
          </h1>
          
          {/* Hero Image */}
          <div className="max-w-2xl mx-auto mb-8 rounded-3xl overflow-hidden shadow-2xl animate-scale-in">
            <img 
              src={heroImage} 
              alt="Psychedelic mushroom illustration" 
              className="w-full h-auto"
            />
          </div>

          {/* Hero Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Welcome to my personal journey through the fascinating world of mushroom 
            cultivation. Here I share my hands-on experiences, discoveries, and favorite 
            products that have transformed my growing practice. Whether you're a curious 
            beginner or seasoned cultivator, join me in exploring the magical realm of fungi.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="hero" size="lg" asChild>
              <Link to="/blog">
                📖 Explore the Blog
              </Link>
            </Button>
            <Button variant="mushroom" size="lg" asChild>
              <Link to="/teks">
                🔬 Learn Techniques
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="py-16 px-4 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard
              icon="📝"
              title="Personal Stories"
              description="Read about my cultivation adventures, successes, failures, and everything I've learned along the way."
              color="blue"
            />
            <FeatureCard
              icon="🧪"
              title="Proven Techniques"
              description="Step-by-step tutorials and techniques that I've tested and refined in my own growing practice."
              color="pink"
            />
            <FeatureCard
              icon="🌱"
              title="Growing Community"
              description="Connect with fellow cultivators and share your own experiences in this wonderful journey."
              color="green"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;