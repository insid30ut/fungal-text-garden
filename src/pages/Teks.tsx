import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";

// Mock teks data with detailed instructions
const teksData = [
  {
    id: 1,
    title: "PF Tek: The Beginner's Method",
    difficulty: "Beginner",
    duration: "4-6 weeks",
    yield: "1-2 oz",
    category: "Substrate Preparation",
    excerpt: "The classic PF Tek method - perfect for beginners to learn the basics of mushroom cultivation.",
    content: `# PF Tek: The Beginner's Method

PF Tek (Psilocybe Fanaticus Technique) is the gold standard for beginners. It's forgiving, requires minimal equipment, and teaches all the fundamentals.

## Materials Needed

### Substrate Materials:
- **Brown rice flour** (BRF) - 2 cups
- **Vermiculite** (fine grade) - 4 cups  
- **Water** (distilled preferred) - 1 cup
- **Perlite** (chunky) - for humidity

### Equipment:
- Wide-mouth mason jars (12-16)
- Pressure cooker or large pot
- Mixing bowl
- Measuring cups
- Aluminum foil
- Rubber gloves
- 70% isopropyl alcohol

## Step-by-Step Instructions

### Phase 1: Substrate Preparation

1. **Mix the substrate:**
   - Combine 2 parts vermiculite + 1 part water in large bowl
   - Mix thoroughly until evenly moist
   - Add 1 part brown rice flour
   - Mix gently to avoid breaking vermiculite

2. **Fill jars:**
   - Pack substrate loosely into jars
   - Leave 1/2 inch space at top
   - Wipe jar rims clean
   - Cover with foil (create small hole for inoculation)

3. **Sterilize:**
   - Steam for 60-90 minutes in pressure cooker
   - Allow to cool completely (12-24 hours)

### Phase 2: Inoculation

**Critical**: Work in cleanest possible environment

1. **Prepare workspace:**
   - Clean all surfaces with alcohol
   - Wear gloves, sanitize frequently
   - Work quickly but carefully

2. **Inoculate jars:**
   - Insert needle through foil hole
   - Inject 1cc of spore solution per jar
   - Cover holes with tape
   - Label with date

### Phase 3: Incubation

- Store jars in dark, warm place (75-80°F)
- **Do not disturb** for first 2 weeks
- White mycelium should appear after 5-10 days
- Full colonization takes 3-4 weeks

**Red flags:** Green, black, or foul-smelling contamination = discard immediately

### Phase 4: Fruiting Setup

1. **Birth cakes:**
   - Remove fully white cakes from jars
   - Rinse under cold water
   - Roll in dry vermiculite

2. **Setup fruiting chamber:**
   - Clear plastic container with lid
   - Layer of wet perlite (4 inches deep)
   - Holes for air exchange (1/4 inch, every 2 inches)
   - Maintain 80-95% humidity

### Phase 5: Harvest

- **Harvest timing**: Just as caps begin to flatten
- Cut at base with sterile knife
- Expect 2-4 flushes total
- Dry immediately for preservation

## Success Tips

### Environmental Control
- **Temperature**: 70-75°F for fruiting
- **Humidity**: High but not stagnant
- **Light**: Indirect natural light
- **Air**: Fresh exchange crucial

### Common Mistakes
- **Over-misting**: Causes bacterial rot
- **Poor sterile technique**: Leads to contamination  
- **Impatience**: Disturbing during colonization
- **Ignoring contamination**: Can spread quickly

## Troubleshooting

| Problem | Cause | Solution |
|---------|-------|----------|
| Slow colonization | Too cold/old spores | Increase temperature, fresh spores |
| Green mold | Contamination | Discard immediately |
| No pins forming | Low humidity/poor FAE | Adjust fruiting conditions |
| Aborted pins | Environmental stress | Maintain consistent conditions |

## Expected Timeline

- **Week 1-2**: Initial mycelium growth
- **Week 3-4**: Full colonization
- **Week 5**: Birthing and setup
- **Week 6**: First harvest

*Remember: This hobby requires patience and attention to detail. Take your time and don't rush the process!*

---

**Safety Note**: Always research local laws and prioritize safety in all cultivation activities.`,
    tags: ["beginner", "pf-tek", "substrate"],
    lastUpdated: "2024-01-20"
  },
  {
    id: 2,
    title: "Monotub Technique: Scaling Up Production",
    difficulty: "Intermediate",
    duration: "3-4 weeks",
    yield: "4-8 oz",
    category: "Bulk Growing",
    excerpt: "Learn how to scale up your operation with monotub cultivation for larger yields.",
    content: `# Monotub Technique: Scaling Up Production

Once you've mastered PF Tek, monotubs offer a way to dramatically increase yields while maintaining relatively simple techniques.

## What is Monotub?

A monotub is a **single large container** used for bulk substrate cultivation. It allows for:
- Larger yields per grow
- More efficient use of space
- Better environmental control
- Multiple harvests from one setup

## Materials Required

### Container:
- **66-106 qt plastic tub** with tight lid
- Clear or translucent preferred
- Smooth interior walls

### Substrate Ingredients:
- **Coir** (coconut coir) - 5-7 lbs
- **Vermiculite** - 2-3 cups
- **Gypsum** - 1-2 cups (optional but recommended)
- **Spawned grain** - 3-5 lbs colonized

### Tools:
- Drill with hole saw attachment
- Micropore tape or polyfill
- Large mixing containers
- Pressure cooker
- pH strips

## Step-by-Step Process

### Step 1: Container Preparation

1. **Drill holes:**
   - 6 holes per long side, 4 per short side
   - 2 inches from bottom, spaced evenly
   - 1/4 to 3/8 inch diameter

2. **Cover holes:**
   - Use micropore tape or stuff with polyfill
   - Allows air exchange while filtering

### Step 2: Substrate Preparation (CVG Mix)

**CVG = Coir + Vermiculite + Gypsum**

1. **Hydrate coir:**
   - Use **bucket tek**: pour boiling water over coir brick
   - Cover and let steam for 2+ hours
   - Should be field capacity (no dripping when squeezed)

2. **Mix substrate:**
   - Combine cooled coir with vermiculite (10:1 ratio)
   - Add gypsum (2% by weight)
   - Aim for pH 7.5-8.5
   - Pasteurize if desired (optional but recommended)

### Step 3: Spawning

**This is the critical phase!**

1. **Prepare workspace:**
   - Maximum sterile technique required
   - Clean tub with alcohol
   - Sanitize all tools

2. **Layer method:**
   - Bottom layer: 2-3 inches substrate
   - Middle layer: Distribute spawn evenly
   - Top layer: 1-2 inches substrate
   - Gentle mixing optional

3. **Final setup:**
   - Smooth top surface
   - Secure lid
   - Place in incubation area

### Step 4: Colonization Phase

- **Temperature**: 75-80°F optimal
- **Duration**: 7-14 days typically
- **Signs of success**: White mycelium covering surface
- **Do not open** during this phase

### Step 5: Fruiting Conditions

1. **Introduction:**
   - Remove tape/polyfill from holes
   - Increase fresh air exchange
   - Introduce light cycle (12/12)

2. **Maintenance:**
   - Mist walls (not substrate directly)
   - Maintain high humidity (80-90%)
   - Ensure adequate air exchange

## Advanced Tips

### Maximizing Yields
- **Proper spawn ratio**: 1:1 to 1:2 spawn:substrate
- **Quality spawn**: Healthy, fully colonized
- **Environmental control**: Consistent conditions
- **Genetics**: Good spore/culture sources

### Preventing Contamination
- **Sterile technique**: Cannot be overstated
- **Quality ingredients**: Fresh, properly stored
- **pH management**: Higher pH inhibits contams
- **Air filtration**: Proper hole configuration

### Multiple Flushes
- After harvest, resume misting/FAE cycle
- Expect 2-4 productive flushes
- Diminishing returns after 4th flush
- Total timeline: 6-8 weeks

## Troubleshooting Guide

### Common Issues:

**Slow Colonization:**
- Too cold (increase temperature)
- Poor spawn quality
- Substrate too wet/dry

**Green Mold (Trichoderma):**
- Usually occurs early in colonization
- Often due to contaminated spawn
- *No recovery possible - start over*

**Overlay Formation:**
- Thick, leather-like mycelium on surface
- Caused by poor air exchange
- Fork tek or increase FAE

**Poor Pinning:**
- Insufficient humidity
- Poor air exchange
- Lack of evaporation

## Scaling Further

Once comfortable with monotubs, consider:
- **Martha tek**: Automated fruiting chamber
- **Bulk substrate variations**: Straw, manure mixes
- **Liquid culture**: Faster spawn production
- **Agar work**: Genetic isolation

---

**Remember**: Each grow teaches you something new. Keep detailed notes and continuously refine your technique!`,
    tags: ["intermediate", "monotub", "bulk", "scaling"],
    lastUpdated: "2024-02-05"
  }
];

const Teks = () => {
  const [selectedTek, setSelectedTek] = useState<number | null>(null);

  if (selectedTek !== null) {
    const tek = teksData.find(t => t.id === selectedTek);
    if (!tek) return null;

    return (
      <div className="min-h-screen bg-background pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Button 
            variant="outline" 
            onClick={() => setSelectedTek(null)}
            className="mb-6"
          >
            ← Back to Techniques
          </Button>
          
          <article className="prose prose-lg max-w-none">
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-primary mb-4">{tek.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
                <Badge variant={tek.difficulty === 'Beginner' ? 'default' : tek.difficulty === 'Intermediate' ? 'secondary' : 'destructive'}>
                  {tek.difficulty}
                </Badge>
                <span className="text-muted-foreground">Duration: {tek.duration}</span>
                <span className="text-muted-foreground">Expected yield: {tek.yield}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {tek.tags.map(tag => (
                  <Badge key={tag} variant="outline">{tag}</Badge>
                ))}
              </div>
              <p className="text-muted-foreground">Last updated: {new Date(tek.lastUpdated).toLocaleDateString()}</p>
            </header>
            
            <MarkdownRenderer 
              content={tek.content}
              className="text-foreground"
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
            Techniques & Tutorials
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Step-by-step guides and techniques I've tested and refined in my own practice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {teksData.map(tek => (
            <Card key={tek.id} className="hover:shadow-lg transition-all cursor-pointer group h-full">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant={tek.difficulty === 'Beginner' ? 'default' : 'secondary'}>
                    {tek.difficulty}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {tek.category}
                  </Badge>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors text-xl">
                  {tek.title}
                </CardTitle>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span>⏱️ {tek.duration}</span>
                  <span>📊 {tek.yield}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-4 flex-1">{tek.excerpt}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {tek.tags.slice(0, 3).map(tag => (
                    <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                  ))}
                  {tek.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">+{tek.tags.length - 3} more</Badge>
                  )}
                </div>
                <Button 
                  variant="mushroom" 
                  size="sm"
                  onClick={() => setSelectedTek(tek.id)}
                  className="w-fit"
                >
                  Read Technique
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teks;