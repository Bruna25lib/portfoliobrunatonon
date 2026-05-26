import { createFileRoute } from "@tanstack/react-router";
import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TabsSection from "@/components/TabsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Bruna Liborio Tonon — Founder & Consultora · IA & Automação" },
      { name: "description", content: "Founder & Consultora da Descomplica Ops. Engenheira, especialista em IA e Automação de Processos. Escalabilidade para operações comerciais e administrativas." },
      { property: "og:title", content: "Bruna Liborio Tonon — Founder & Consultora · IA & Automação" },
      { property: "og:description", content: "Founder & Consultora da Descomplica Ops. Engenheira, especialista em IA e Automação." },
    ],
  }),
});

function Index() {
  const [activeTab, setActiveTab] = useState("sobre");

  const handleTabChange = useCallback((tab: string) => {
    setActiveTab(tab);
    document.getElementById("tabs-section")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden md:cursor-none">
      <CustomCursor />
      <Navbar onTabChange={handleTabChange} />
      <HeroSection onTabChange={handleTabChange} />
      <TabsSection activeTab={activeTab} onTabChange={setActiveTab} />
      <ContactSection />
      <Footer />
    </div>
  );
}
