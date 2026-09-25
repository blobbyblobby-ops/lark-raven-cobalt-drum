import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LensApp } from "@/components/lens/lens-app";
import "@/styles.css";

const root = document.getElementById("root");
if (!root) throw new Error("Missing root");

createRoot(root).render(
  <StrictMode>
    <LensApp />
  </StrictMode>,
);
