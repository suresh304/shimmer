import { serve } from 'https://deno.land/std@0.136.0/http/server.ts';
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// Initialize Supabase client
const supabaseUrl = "https://cjqzgsqgtyvjqbcdvafk.supabase.co"
const supabaseServiceRoleKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqcXpnc3FndHl2anFiY2R2YWZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg0NDg0NjEsImV4cCI6MjAzNDAyNDQ2MX0.5kHV0f0M4JUVHv3s29IKHe_3l6IbKuNpmy66kQFfSEk"
const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: corsHeaders
    });
  }

  try {
    const currentTimestamp = new Date();

const localDate = currentTimestamp.toLocaleDateString();
    const { user_id, event_type } = await req.json();
    const { error } = await supabase
      .from('user_activity_logs')
      .insert([{ user_id, event_type, timestamp: localDate }]);

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ message: 'Event logged successfully' }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
