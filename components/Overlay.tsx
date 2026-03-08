"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
    // We want the overlay to track the same 500vh container.
    // We can achieve this by making the overlay a pointer-events-none layer sitting on top of the DOM.
    // Wait, actually it's easier to place the Overlay INSIDE the page alongside ScrollyCanvas and read document scroll.
    // For absolute precision, we'll just track window scroll since this is the main interaction of the page.

    const { scrollYProgress } = useScroll();

    // Opacity maps for each section
    const section1Opacity = useTransform(scrollYProgress, [0, 0.05, 0.15], [1, 1, 0]);
    const section1Y = useTransform(scrollYProgress, [0, 0.15], [0, -100]);

    const section2Opacity = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [0, 1, 0]);
    const section2Y = useTransform(scrollYProgress, [0.2, 0.4], [100, -100]);

    const section3Opacity = useTransform(scrollYProgress, [0.5, 0.6, 0.8], [0, 1, 0]);
    const section3Y = useTransform(scrollYProgress, [0.5, 0.8], [100, -100]);

    return (
        <div className="fixed inset-0 pointer-events-none z-10 flex flex-col justify-center">

            {/* Section 1: 0% scroll (Center) */}
            <motion.div
                style={{ opacity: section1Opacity, y: section1Y }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
            >
                <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white drop-shadow-2xl">
                    MY NAME
                </h1>
                <p className="mt-4 text-xl md:text-2xl font-light text-white/80 uppercase tracking-[0.2em]">
                    Creative Developer
                </p>
            </motion.div>

            {/* Section 2: 30% scroll (Left aligned) */}
            <motion.div
                style={{ opacity: section2Opacity, y: section2Y }}
                className="absolute inset-0 flex flex-col items-start justify-center p-8 md:p-24"
            >
                <h2 className="text-4xl md:text-7xl font-bold max-w-2xl leading-tight text-white drop-shadow-2xl">
                    I build digital experiences.
                </h2>
                <div className="w-24 h-1 bg-white mt-8 opacity-50 shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
            </motion.div>

            {/* Section 3: 60% scroll (Right aligned) */}
            <motion.div
                style={{ opacity: section3Opacity, y: section3Y }}
                className="absolute inset-0 flex flex-col items-end justify-center text-right p-8 md:p-24"
            >
                <h2 className="text-4xl md:text-7xl font-bold max-w-2xl leading-tight text-white drop-shadow-2xl">
                    Bridging design and engineering.
                </h2>
                <p className="mt-6 text-lg md:text-2xl text-white/70 max-w-xl font-light">
                    Crafting pixel-perfect, high-performance web applications that leave a lasting impression.
                </p>
            </motion.div>

        </div>
    );
}
