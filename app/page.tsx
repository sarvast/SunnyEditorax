
import Navigation from "@/components/navigation"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import PortfolioSection from "@/components/sections/portfolio-section"
import ContactSection from "@/components/sections/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-soft-gradient text-indigo-950 font-sans selection:bg-pink-200 selection:text-pink-900">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />

      {/* Simple Footer */}
      <footer className="py-8 text-center text-indigo-900/40 text-sm font-sans border-t border-indigo-900/5">
        <p>© 2026 Sunny Editorax. Crafted with ❤️.</p>
      </footer>
    </main>
  )
}
