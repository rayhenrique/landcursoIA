import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import ProcessSection from './components/ProcessSection';
import WhatYouCanCreate from './components/WhatYouCanCreate';
import AuthorSection from './components/AuthorSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <ProcessSection />
        <WhatYouCanCreate />
        <AuthorSection />
      </main>
      <Footer />
    </div>
  );
}
