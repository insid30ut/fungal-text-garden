import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
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

const TekPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [tek, setTek] = useState<Tek | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchTek(id);
    }
  }, [id]);

  const fetchTek = async (tekId: string) => {
    try {
      const { data, error } = await supabase
        .from('teks')
        .select('*')
        .eq('id', tekId)
        .eq('published', true)
        .single();

      if (error) throw error;
      setTek(data);
    } catch (error) {
      console.error('Error fetching tek:', error);
      setError('Technique not found');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background pt-20 pb-16 px-4 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading technique...</p>
        </div>
      </div>
    );
  }

  if (error || !tek) {
    return (
      <div className="min-h-screen bg-background pt-20 pb-16 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Technique Not Found</h1>
          <p className="text-muted-foreground mb-6">The technique you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate('/teks')}>
            ← Back to Techniques
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <Button 
          variant="outline" 
          onClick={() => navigate('/teks')}
          className="mb-6"
        >
          ← Back to Techniques
        </Button>
        
        <article className="prose prose-lg max-w-none">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-primary mb-4">{tek.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
              <span>{new Date(tek.created_at).toLocaleDateString()}</span>
              {tek.updated_at !== tek.created_at && (
                <>
                  <span>•</span>
                  <span>Updated {new Date(tek.updated_at).toLocaleDateString()}</span>
                </>
              )}
            </div>
          </header>
          
          <MarkdownRenderer 
            content={tek.content}
            className="text-foreground"
          />
        </article>
      </div>
    </div>
  );
};

export default TekPost;