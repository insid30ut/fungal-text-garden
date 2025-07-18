-- Create storage buckets for blog and tek images
INSERT INTO storage.buckets (id, name, public) VALUES ('blog-images', 'blog-images', true);
INSERT INTO storage.buckets (id, name, public) VALUES ('tek-images', 'tek-images', true);

-- Create policies for blog image uploads
CREATE POLICY "Blog images are publicly accessible"
ON storage.objects
FOR SELECT
USING (bucket_id = 'blog-images');

CREATE POLICY "Admins can upload blog images"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'blog-images' AND public.is_admin(auth.uid()));

CREATE POLICY "Admins can update blog images"
ON storage.objects
FOR UPDATE
USING (bucket_id = 'blog-images' AND public.is_admin(auth.uid()));

CREATE POLICY "Admins can delete blog images"
ON storage.objects
FOR DELETE
USING (bucket_id = 'blog-images' AND public.is_admin(auth.uid()));

-- Create policies for tek image uploads
CREATE POLICY "Tek images are publicly accessible"
ON storage.objects
FOR SELECT
USING (bucket_id = 'tek-images');

CREATE POLICY "Admins can upload tek images"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'tek-images' AND public.is_admin(auth.uid()));

CREATE POLICY "Admins can update tek images"
ON storage.objects
FOR UPDATE
USING (bucket_id = 'tek-images' AND public.is_admin(auth.uid()));

CREATE POLICY "Admins can delete tek images"
ON storage.objects
FOR DELETE
USING (bucket_id = 'tek-images' AND public.is_admin(auth.uid()));