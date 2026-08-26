import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Landing from "@/pages/Landing";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import LandingAr from "@/pages/LandingAr";
import PrivacyAr from "@/pages/PrivacyAr";
import TermsAr from "@/pages/TermsAr";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/ar" element={<LandingAr />} />
        <Route path="/ar/privacy" element={<PrivacyAr />} />
        <Route path="/ar/terms" element={<TermsAr />} />
      </Routes>
      <Toaster position="top-center" />
    </BrowserRouter>
  </StrictMode>,
);
