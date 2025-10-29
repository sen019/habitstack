import { useState, useEffect } from "react";
import { createClient } from "./utils/supabase/client";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import GoogleAnalytics from "./components/GoogleAnalytics";

export default function App() {
  const [accessToken, setAccessToken] = useState<string | null>(
    null,
  );
  const [loading, setLoading] = useState(true);
  
  // Google Analytics Measurement ID for HabitStack
  const GA_MEASUREMENT_ID = 'G-YHT01FY9WL';
  
  console.log("ORIGIN", window.location.origin);

  useEffect(() => {
    const supabase = createClient();

    // Listen for auth state changes - this will fire immediately with INITIAL_SESSION
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log(
          "Auth state changed:",
          event,
          session?.access_token
            ? "Session exists"
            : "No session",
        );

        if (event === "SIGNED_IN") {
          // User just signed in (including OAuth callback)
          if (session?.access_token) {
            console.log("User signed in, setting access token");
            setAccessToken(session.access_token);
            setLoading(false);
          }
        } else if (event === "SIGNED_OUT") {
          // User signed out
          console.log("User signed out");
          setAccessToken(null);
          setLoading(false);
        } else if (event === "INITIAL_SESSION") {
          // Initial session check on page load
          if (session?.access_token) {
            console.log(
              "Initial session found, setting access token",
            );
            setAccessToken(session.access_token);
          } else {
            console.log("No initial session found");
          }
          setLoading(false);
        } else if (event === "TOKEN_REFRESHED") {
          // Token was refreshed
          if (session?.access_token) {
            console.log("Token refreshed");
            setAccessToken(session.access_token);
          }
        }
      },
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const checkSession = async () => {
    try {
      const supabase = createClient();
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error) {
        console.log("Error checking session:", error);
        setAccessToken(null);
      } else if (session?.access_token) {
        setAccessToken(session.access_token);
      } else {
        setAccessToken(null);
      }
    } catch (error) {
      console.log("Error checking session:", error);
      setAccessToken(null);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signOut();

      if (error) {
        console.log("Error signing out:", error);
      }

      setAccessToken(null);
    } catch (error) {
      console.log("Error signing out:", error);
    }
  };

  if (loading) {
    return (
      <>
        <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
        <div className="flex items-center justify-center size-full bg-background">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </>
    );
  }

  if (!accessToken) {
    return (
      <>
        <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
        <LoginPage onLogin={checkSession} />
      </>
    );
  }

  return (
    <>
      <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
      <Dashboard
        accessToken={accessToken}
        onLogout={handleLogout}
      />
    </>
  );
}