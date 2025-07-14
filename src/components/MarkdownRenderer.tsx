import React from 'react';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className = "" }) => {
  // Enhanced markdown parsing with better formatting support
  const parseMarkdown = (text: string): string => {
    return text
      // Headers (maintain hierarchy)
      .replace(/^#{1}\s*(.*?)$/gm, '<h1 class="text-3xl font-bold mt-8 mb-6 text-primary border-b border-primary/20 pb-2">$1</h1>')
      .replace(/^#{2}\s*(.*?)$/gm, '<h2 class="text-2xl font-bold mt-6 mb-4 text-primary">$1</h2>')
      .replace(/^#{3}\s*(.*?)$/gm, '<h3 class="text-xl font-semibold mt-4 mb-3 text-accent-pink">$1</h3>')
      .replace(/^#{4}\s*(.*?)$/gm, '<h4 class="text-lg font-semibold mt-3 mb-2 text-foreground">$1</h4>')
      
      // Bold and Italic
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-primary">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic text-accent-pink">$1</em>')
      
      // Code blocks and inline code
      .replace(/```([^`]+)```/g, '<pre class="bg-card border border-border rounded-lg p-4 my-4 overflow-x-auto"><code class="text-sm text-foreground">$1</code></pre>')
      .replace(/`([^`]+)`/g, '<code class="bg-muted text-primary px-2 py-0.5 rounded text-sm font-mono">$1</code>')
      
      // Lists
      .replace(/^- (.*?)$/gm, '<li class="ml-6 mb-1 list-disc list-inside text-foreground">$1</li>')
      .replace(/^\d+\. (.*?)$/gm, '<li class="ml-6 mb-1 list-decimal list-inside text-foreground">$1</li>')
      
      // Tables (improved styling)
      .replace(/^\|(.*?)\|$/gm, (match, content) => {
        const cells = content.split('|').map((cell: string) => cell.trim()).filter((cell: string) => cell);
        return `<tr class="border-b border-border">${cells.map((cell: string) => 
          `<td class="border-r border-border px-4 py-2 text-sm">${cell}</td>`
        ).join('')}</tr>`;
      })
      .replace(/^\|[-\s|]+\|$/gm, '') // Remove separator rows
      
      // Blockquotes
      .replace(/^> (.*?)$/gm, '<blockquote class="border-l-4 border-primary bg-muted/50 pl-4 py-2 my-4 italic text-muted-foreground">$1</blockquote>')
      
      // Horizontal rules
      .replace(/^---+$/gm, '<hr class="border-border my-6" />')
      
      // Line breaks
      .replace(/\n/g, '<br/>');
  };

  // Wrap tables properly
  const wrapTables = (html: string): string => {
    return html.replace(/(<tr.*?<\/tr>)+/g, (match) => {
      return `<div class="overflow-x-auto my-4"><table class="w-full border-collapse border border-border rounded-lg">${match}</table></div>`;
    });
  };

  // Wrap list items in proper ul/ol tags
  const wrapLists = (html: string): string => {
    return html
      .replace(/(<li class="[^"]*list-disc[^"]*".*?<\/li>)+/g, '<ul class="space-y-1 my-4">$&</ul>')
      .replace(/(<li class="[^"]*list-decimal[^"]*".*?<\/li>)+/g, '<ol class="space-y-1 my-4">$&</ol>');
  };

  const processedContent = wrapLists(wrapTables(parseMarkdown(content)));

  return (
    <div 
      className={`prose prose-lg max-w-none text-foreground ${className}`}
      dangerouslySetInnerHTML={{ __html: processedContent }}
    />
  );
};