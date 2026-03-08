import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";

export default function Home() {
    return (
        <main className="relative bg-background min-h-screen">
            {/* 
        The overlay handles the parallax text sections 
        (it's fixed and pointer-events-none, reading window scroll) 
      */}
            <Overlay />

            {/* 
        The ScrollyCanvas contains the 500vh container and sticky canvas 
      */}
            <ScrollyCanvas frameCount={120} />

            {/* 
        The Projects grid, sitting naturally in document flow 
        after the 500vh container finishes scrolling.
      */}
            <Projects />

            {/* Simple footer */}
            <footer className="py-12 border-t border-white/10 text-center text-white/40 text-sm font-light">
                <p>© {new Date().getFullYear()} My Name. All rights reserved.</p>
                <p className="mt-2 uppercase tracking-widest text-xs">Awwwards inspired.</p>
            </footer>
        </main>
    );
}
