// main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App.tsx";
import Header from "./components/header.tsx";
import Demo from "./pages/demo.tsx";
import MathAI from "./pages/math-ai.tsx";
import SignInPage from "./pages/sign-in-page.tsx";

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/sign-in" element={<SignInPage />} />

          <Route
            path="/demo"
            element={
              <>
                <SignedIn>
                  <Demo />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn redirectUrl="/demo" />
                </SignedOut>
              </>
            }
          />

          <Route
            path="/math-ai"
            element={
              <>
                <SignedIn>
                  <MathAI />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn redirectUrl="/math-ai" />
                </SignedOut>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </ClerkProvider>
  </StrictMode>
);
