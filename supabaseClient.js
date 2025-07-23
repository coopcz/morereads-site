// Supabase Client Configuration
// Replace these with your actual Supabase credentials from your dashboard

const SUPABASE_CONFIG = {
    // Your Supabase project URL - looks like: https://your-project.supabase.co
    url: 'YOUR_SUPABASE_URL',
    
    // Your Supabase anon/public key - found in your project settings
    anonKey: 'YOUR_SUPABASE_ANON_KEY'
};

// Create and export the Supabase client
const supabaseClient = window.supabase?.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);

// Export for use in other files if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { supabaseClient, SUPABASE_CONFIG };
}

// Instructions for setup:
// 1. Go to your Supabase dashboard (supabase.com)
// 2. Select your project
// 3. Go to Settings > API
// 4. Copy your Project URL and replace 'YOUR_SUPABASE_URL' above
// 5. Copy your anon public key and replace 'YOUR_SUPABASE_ANON_KEY' above
// 6. Make sure you have configured Google OAuth in your Supabase Auth settings
// 7. Add your domain to the allowed redirect URLs in Supabase Auth settings

// For Google OAuth setup in Supabase:
// 1. Go to Authentication > Settings > Auth Providers
// 2. Enable Google provider
// 3. Add your Google OAuth client ID and secret
// 4. Add your website domain to the redirect URLs (e.g., https://morereadsapp.com)
// 5. The callback URL should be: https://your-project.supabase.co/auth/v1/callback 