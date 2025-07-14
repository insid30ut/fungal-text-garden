const About = () => {
  return (
    <div className="min-h-screen bg-background pt-20 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            About the FunGuy
          </h1>
          <div className="text-6xl mb-6">🍄</div>
        </div>

        <div className="prose prose-lg max-w-none text-foreground">
          <div className="bg-card rounded-lg p-8 mb-8 shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-4">Welcome to My Journey</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm just a curious individual fascinated by the incredible world of fungi. What started 
              as casual interest has grown into a passionate hobby that's taught me patience, precision, 
              and the joy of nurturing life from spore to harvest.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This site is my way of sharing what I've learned through trial, error, and lots of 
              experimentation. Every technique I share has been tested in my own growing setup, 
              and every story comes from real experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-card rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-primary mb-3">🔬 My Approach</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Evidence-based techniques</li>
                <li>• Detailed documentation</li>
                <li>• Safety-first mindset</li>
                <li>• Continuous learning</li>
              </ul>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-primary mb-3">🌱 What You'll Find</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Personal cultivation stories</li>
                <li>• Step-by-step techniques</li>
                <li>• Troubleshooting guides</li>
                <li>• Community discussions</li>
              </ul>
            </div>
          </div>

          <div className="bg-accent-green/10 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">Join the Community</h3>
            <p className="text-muted-foreground mb-4">
              Whether you're a beginner taking your first steps or an experienced cultivator 
              with knowledge to share, you're welcome here. Let's grow together!
            </p>
            <p className="text-sm text-muted-foreground font-semibold">
              Always remember to research and follow your local laws and regulations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;