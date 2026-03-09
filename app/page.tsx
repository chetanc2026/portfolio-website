import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import About from "@/components/About";
import Experience from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <main className="relative bg-[#0a0a0f] min-h-screen">
            {/* Fixed overlay with parallax text sections */}
            <Overlay />

            {/* Scroll-linked canvas animation (500vh) */}
            <ScrollyCanvas frameCount={120} />

            {/* Horizontal divider */}
            <div className="w-full flex justify-center py-4">
                <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
            </div>

            {/* About section with bio and animated stats */}
            <About />

            {/* Experience section with real project cards */}
            <Experience />

            {/* Skills and certifications */}
            <Skills />

            {/* Contact CTA */}
            <Contact />

            {/* Footer */}
            <footer className="relative py-12 border-t border-white/[0.05]">
                <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-white/25 font-light tracking-wider">
                        © {new Date().getFullYear()} Dr. Chetan Choudhary. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a
                            href="mailto:chetan.c2026@iimbg.ac.in"
                            className="text-xs text-white/25 hover:text-amber-400/60 transition-colors duration-300 tracking-wider"
                        >
                            Email
                        </a>
                        <a
                            href="https://www.linkedin.com/in/drchetanchoudhary/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-white/25 hover:text-blue-400/60 transition-colors duration-300 tracking-wider"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://www.instagram.com/dr.chetanchoudhary_2027"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-white/25 hover:text-pink-400/60 transition-colors duration-300 tracking-wider"
                        >
                            Instagram
                        </a>
                    </div>
                </div>
            </footer>
        </main>
    );
}
