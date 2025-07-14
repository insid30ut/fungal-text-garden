import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  color: "blue" | "pink" | "green";
}

const FeatureCard = ({ icon, title, description, color }: FeatureCardProps) => {
  const colorClasses = {
    blue: "bg-accent-blue",
    pink: "bg-accent-pink", 
    green: "bg-accent-green"
  };

  return (
    <Card className="h-full transition-transform hover:scale-105 duration-300 shadow-lg">
      <CardContent className="p-6 text-center space-y-4">
        <div className={cn(
          "w-16 h-16 rounded-full flex items-center justify-center mx-auto text-white text-2xl",
          colorClasses[color]
        )}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;