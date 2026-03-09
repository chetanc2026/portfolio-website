"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
    const { scrollYProgress } = useScroll();

    // Section 1: Hero — 0% to 15%
    const section1Opacity = useTransform(scrollYProgress, [0, 0.04, 0.12], [1, 1, 0]);
    const section1Y = useTransform(scrollYProgress, [0, 0.12], [0, -80]);
    const section1Scale = useTransform(scrollYProgress, [0, 0.12], [1, 0.95]);

    // Section 2: Tagline — 20% to 35%
    const section2Opacity = useTransform(scrollYProgress, [0.15, 0.22, 0.35], [0, 1, 0]);
    const section2Y = useTransform(scrollYProgress, [0.15, 0.35], [80, -80]);

    // Section 3: Vision — 45% to 65%
    const section3Opacity = useTransform(scrollYProgress, [0.4, 0.5, 0.65], [0, 1, 0]);
    const section3Y = useTransform(scrollYProgress, [0.4, 0.65], [80, -80]);

    return (
        <div className="fixed inset-0 pointer-events-none z-10">

            {/* Section 1: Hero (Center) */}
            <motion.div
                style={{ opacity: section1Opacity, y: section1Y, scale: section1Scale }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
            >
                {/* Subtle dark overlay behind text for readability over images */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center">
                    {/* Badge */}
                    <div className="mb-6 px-5 py-2 rounded-full border border-amber-500/20 bg-amber-500/[0.06] backdrop-blur-sm">
                        <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-amber-300/90">
                            MBA @ IIM Bodh Gaya
                        </span>
                    </div>

                    <h1 className="text-6xl sm:text-7xl md:text-9xl font-black tracking-tight gradient-text leading-[0.9] text-glow">
                        Dr. Chetan
                        <br />
                        Choudhary
                    </h1>

                    <p className="mt-6 text-lg md:text-xl font-medium text-white/90 tracking-wide max-w-lg text-glow-white">
                        Product Strategy &amp; Growth · Pharm.D. · CAT 97.04%
                    </p>

                    {/* Quick value props */}
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        {["Product Management", "Brand Strategy", "Business Development"].map((tag, i) => (
                            <span key={i} className="px-3 py-1.5 rounded-full text-[10px] font-semibold tracking-[0.15em] uppercase border border-white/10 bg-white/[0.05] text-white/70 backdrop-blur-sm">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Glowing accent line */}
                    <div className="mt-8 w-24 h-[2px] glow-line rounded-full" />
                </div>

                {/* Scroll hint */}
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="absolute bottom-10 flex flex-col items-center gap-2 z-10"
                >
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-medium">Scroll to explore</span>
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="text-amber-400/40">
                        <path d="M8 4L8 20M8 20L2 14M8 20L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </motion.div>
            </motion.div>

            {/* Section 2: Left aligned — Positioning Statement */}
            <motion.div
                style={{ opacity: section2Opacity, y: section2Y }}
                className="absolute inset-0 flex flex-col items-start justify-center p-8 md:p-20 lg:p-28"
            >
                {/* Dark scrim for readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent pointer-events-none" />

                <div className="relative z-10">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold max-w-3xl leading-[1.1] text-white text-glow-white">
                        Bridging{" "}
                        <span className="gradient-text">Pharma,</span>
                        <br />
                        Strategy &amp; Growth.
                    </h2>
                    <div className="mt-8 w-24 h-[2px] glow-line rounded-full" />
                    <p className="mt-6 text-base md:text-lg text-white/80 font-medium max-w-xl leading-relaxed text-glow-white">
                        Turning IQVIA data into market-defining growth strategies. From product lifecycle to go-to-market execution.
                    </p>
                </div>
            </motion.div>

            {/* Section 3: Right aligned — Impact Statement */}
            <motion.div
                style={{ opacity: section3Opacity, y: section3Y }}
                className="absolute inset-0 flex flex-col items-end justify-center text-right p-8 md:p-20 lg:p-28"
            >
                {/* Dark scrim for readability */}
                <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/30 to-transparent pointer-events-none" />

                <div className="relative z-10">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold max-w-3xl leading-[1.1] text-white text-glow-white">
                        Data-Driven.
                        <br />
                        <span className="gradient-text">Impact-Focused.</span>
                    </h2>
                    <p className="mt-6 text-base md:text-lg text-white/80 max-w-xl font-medium leading-relaxed text-glow-white">
                        23+ SKUs analyzed. 6 high-growth states identified. Published clinical researcher. Ready to drive your next product launch.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
