import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Landing from "@/pages/Landing";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import "./styles.css";

// Arabic site (/ar, /ar/privacy, /ar/terms) is temporarily taken down at the
// clinic's request. Pages/routes are intentionally left in place so it can
// be restored by reverting this change.
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/ar" element={<Navigate to="/" replace />} />
        <Route path="/ar/privacy" element={<Navigate to="/" replace />} />
        <Route path="/ar/terms" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster position="top-center" />
    </BrowserRouter>
  </StrictMode>,
);
