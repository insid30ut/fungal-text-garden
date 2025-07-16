-- Add admin role for the user (run after creating the user account)
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'
FROM auth.users 
WHERE email = 'bmoses33l3d@gmail.com'
ON CONFLICT (user_id, role) DO NOTHING;