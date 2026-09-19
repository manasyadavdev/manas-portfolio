import { useTheme } from '@/hooks/useTheme';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import Background from '@/components/Background';
import Navbar from '@/components/Navbar';
import Hero from '@/sections/Hero';
import Capabilities from '@/sections/Capabilities';
import About from '@/sections/About';
import Skills from '@/sections/Skills';
import WPFlowCaseStudy from '@/sections/WPFlowCaseStudy';
import Projects from '@/sections/Projects';
import HowIBuild from '@/sections/HowIBuild';
import Learning from '@/sections/Learning';
import Services from '@/sections/Services';
import GitHubCTA from '@/sections/GitHubCTA';
import Opportunities from '@/sections/Opportunities';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const progress = useScrollProgress();

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed inset-x-0 top-0 z-[100] h-0.5 accent-bg"
        style={{
          transform: `scaleX(${progress})`,
          transformOrigin: 'left',
          transition: 'transform 0.1s linear',
        }}
        aria-hidden="true"
      />

      <Background />

      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero />
        <Capabilities />
        <About />
        <Skills />
        <WPFlowCaseStudy />
        <Projects />
        <HowIBuild />
        <Learning />
        <Services />
        <GitHubCTA />
        <Opportunities />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
