export const logEvent = async (userId, eventType) => {
    const response = await fetch('https://cjqzgsqgtyvjqbcdvafk.supabase.co/functions/v1/userActivity', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqcXpnc3FndHl2anFiY2R2YWZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg0NDg0NjEsImV4cCI6MjAzNDAyNDQ2MX0.5kHV0f0M4JUVHv3s29IKHe_3l6IbKuNpmy66kQFfSEk',
      },
      body: JSON.stringify({ user_id: userId, event_type: eventType }),
    });
  
    const data = await response.json();
    if (response.ok) {
      console.log(`Event ${eventType} logged successfully for user ${userId}`);
    } else {
      console.error('Error logging event:', data.error);
    }
  };

  export const SIGN_IN = 'signed in';
export const UPDATE_PASSWORD = 'changed password';
export const UPDATE_USERNAME = 'changed user name';
export const UPDATE_PHONE = 'changed phone number';
export const UPDATE_EMAIL = 'changed email address';
export const SIGN_OUT = 'signed out';