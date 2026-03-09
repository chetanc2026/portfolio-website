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
                {/* Tiny badge above name */}
                <div className="mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm">
                    <span className="text-xs font-medium tracking-[0.3em] uppercase text-indigo-300/80">
                        MBA @ IIM Bodh Gaya
                    </span>
                </div>

                <h1 className="text-6xl sm:text-7xl md:text-9xl font-black tracking-tight gradient-text leading-[0.9]">
                    Chetan
                    <br />
                    Choudhary
                </h1>

                <p className="mt-6 text-lg md:text-xl font-light text-white/60 tracking-wide max-w-lg">
                    Product Strategy &amp; Growth · Pharm.D. · CAT 97.04%
                </p>

                {/* Glowing accent line */}
                <div className="mt-8 w-20 h-[2px] glow-line rounded-full" />

                {/* Scroll hint */}
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="absolute bottom-12 flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Scroll</span>
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="text-white/20">
                        <path d="M8 4L8 20M8 20L2 14M8 20L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </motion.div>
            </motion.div>

            {/* Section 2: Left aligned tagline */}
            <motion.div
                style={{ opacity: section2Opacity, y: section2Y }}
                className="absolute inset-0 flex flex-col items-start justify-center p-8 md:p-20 lg:p-28"
            >
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold max-w-3xl leading-[1.1] text-white">
                    Bridging{" "}
                    <span className="gradient-text">Pharma,</span>
                    <br />
                    Strategy &amp; Growth.
                </h2>
                <div className="mt-8 w-24 h-[2px] glow-line rounded-full" />
                <p className="mt-6 text-base md:text-lg text-white/50 font-light max-w-xl leading-relaxed">
                    From clinical research to product management — turning IQVIA data into market-defining growth strategies.
                </p>
            </motion.div>

            {/* Section 3: Right aligned vision */}
            <motion.div
                style={{ opacity: section3Opacity, y: section3Y }}
                className="absolute inset-0 flex flex-col items-end justify-center text-right p-8 md:p-20 lg:p-28"
            >
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold max-w-3xl leading-[1.1] text-white">
                    Data-Driven.
                    <br />
                    <span className="gradient-text">Impact-Focused.</span>
                </h2>
                <p className="mt-6 text-base md:text-lg text-white/50 max-w-xl font-light leading-relaxed">
                    23+ SKUs analyzed. 6 high-growth states identified. Published researcher. Building the future of healthcare strategy.
                </p>
            </motion.div>
        </div>
    );
}
