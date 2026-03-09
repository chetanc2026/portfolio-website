import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Highlights from "@/components/Highlights";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import ProjectCards from "@/components/ProjectCards";
import CaseStudies from "@/components/CaseStudies";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <main className="relative bg-[#121212] min-h-screen">
            {/* Hero overlay text */}
            <Overlay />

            {/* Canvas scroll animation */}
            <ScrollyCanvas frameCount={120} />

            {/* Divider */}
            <div className="w-full flex justify-center py-2">
                <div className="w-24 h-[1px] bg-white/[0.06]" />
            </div>

            {/* SCAN LAYER: Quick highlights */}
            <Highlights />

            {/* About */}
            <About />

            {/* Experience timeline */}
            <Timeline />

            {/* SCAN LAYER: Featured project cards */}
            <ProjectCards />

            {/* DEEP LAYER: Case studies */}
            <CaseStudies />

            {/* Skills */}
            <Skills />

            {/* Achievements + Publications + Leadership */}
            <Achievements />

            {/* Contact */}
            <Contact />

            {/* Footer */}
            <footer className="py-10 border-t border-white/[0.04]">
                <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-3">
                    <p className="text-[11px] text-white/20 font-light tracking-wider">
                        © {new Date().getFullYear()} Chetan Choudhary
                    </p>
                    <div className="flex items-center gap-5">
                        <a href="mailto:chetan.c2026@iimbg.ac.in" className="text-[11px] text-white/20 hover:text-white/50 transition-colors tracking-wider">Email</a>
                        <a href="https://www.linkedin.com/in/drchetanchoudhary/" target="_blank" rel="noopener noreferrer" className="text-[11px] text-white/20 hover:text-white/50 transition-colors tracking-wider">LinkedIn</a>
                        <a href="https://www.instagram.com/dr.chetanchoudhary_2027" target="_blank" rel="noopener noreferrer" className="text-[11px] text-white/20 hover:text-white/50 transition-colors tracking-wider">Instagram</a>
                    </div>
                </div>
            </footer>
        </main>
    );
}
