import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";

interface Tek {
  id: string;
  title: string;
  content: string;
  published: boolean;
  created_at: string;
  updated_at: string;
  author_id: string;
}

const Teks = () => {
  const [teks, setTeks] = useState<Tek[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTeks();
  }, []);

  const fetchTeks = async () => {
    try {
      const { data, error } = await supabase
        .from('teks')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTeks(data || []);
    } catch (error) {
      console.error('Error fetching teks:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background pt-20 pb-16 px-4 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading techniques...</p>
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

        {teks.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No techniques available yet.</p>
            <p className="text-muted-foreground mt-2">Check back soon for new content!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {teks.map(tek => (
              <Card key={tek.id} className="hover:shadow-lg transition-all cursor-pointer group h-full">
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors text-xl">
                    {tek.title}
                  </CardTitle>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span>{new Date(tek.created_at).toLocaleDateString()}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4 flex-1">
                    {tek.content.substring(0, 150) + '...'}
                  </p>
                  <Button 
                    variant="mushroom" 
                    size="sm"
                    onClick={() => navigate(`/teks/${tek.id}`)}
                    className="w-fit"
                  >
                    Read Technique
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Teks;