import EmailSection from './sections/EmailSection'
import AboutSection from './sections/AboutSection'
import HeroSection from './sections/HeroSection'
import Navbar from './sections/Navbar'
import ProjectsSection from './sections/ProjectsSection'
import Footer from './sections/Footer'
import SkillsSection from './sections/SkillsSection'

export default function App() {
  return (
    <main className='flex flex-col min-h-screen bg-[#121212] '>
      <Navbar />
      <div className='container mt-24 mx-auto px-12 py-4'>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  )
}
