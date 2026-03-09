"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
    const { scrollYProgress } = useScroll();

    const section1Opacity = useTransform(scrollYProgress, [0, 0.04, 0.12], [1, 1, 0]);
    const section1Y = useTransform(scrollYProgress, [0, 0.12], [0, -60]);

    const section2Opacity = useTransform(scrollYProgress, [0.15, 0.22, 0.35], [0, 1, 0]);
    const section2Y = useTransform(scrollYProgress, [0.15, 0.35], [60, -60]);

    const section3Opacity = useTransform(scrollYProgress, [0.4, 0.5, 0.65], [0, 1, 0]);
    const section3Y = useTransform(scrollYProgress, [0.4, 0.65], [60, -60]);

    return (
        <div className="fixed inset-0 pointer-events-none z-10">

            {/* Section 1: Hero */}
            <motion.div
                style={{ opacity: section1Opacity, y: section1Y }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/50 pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center max-w-3xl">
                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight text-white leading-[0.95]">
                        Chetan
                        <br />
                        Choudhary
                    </h1>

                    <p className="mt-5 text-lg md:text-xl font-medium text-white/80 tracking-wide">
                        Product Strategy &amp; Growth
                    </p>

                    <p className="mt-3 text-sm md:text-base text-white/50 font-light max-w-md leading-relaxed">
                        MBA Candidate – IIM Bodh Gaya · PharmD · CAT 97.04%
                    </p>

                    <p className="mt-6 text-sm text-white/40 font-light max-w-lg leading-relaxed">
                        I build data-driven healthcare and product growth strategies by combining pharmaceutical expertise, market intelligence, and analytical problem solving.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-wrap justify-center gap-3 pointer-events-auto">
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            className="px-5 py-2.5 rounded-full bg-white text-[#121212] text-xs font-semibold tracking-wider uppercase hover:bg-white/90 transition-all duration-300"
                        >
                            Download Resume
                        </a>
                        <a
                            href="#projects"
                            className="px-5 py-2.5 rounded-full border border-white/15 text-xs font-semibold tracking-wider uppercase text-white/70 hover:border-white/30 hover:text-white transition-all duration-300"
                        >
                            View Projects
                        </a>
                        <a
                            href="https://www.linkedin.com/in/drchetanchoudhary/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 rounded-full border border-white/15 text-xs font-semibold tracking-wider uppercase text-white/70 hover:border-white/30 hover:text-white transition-all duration-300"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

                {/* Scroll hint */}
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                    className="absolute bottom-10 flex flex-col items-center gap-2 z-10"
                >
                    <span className="text-[10px] uppercase tracking-[0.25em] text-white/25">Scroll</span>
                    <svg width="14" height="20" viewBox="0 0 16 24" fill="none" className="text-white/20">
                        <path d="M8 4L8 20M8 20L2 14M8 20L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </motion.div>
            </motion.div>

            {/* Section 2: Left aligned */}
            <motion.div
                style={{ opacity: section2Opacity, y: section2Y }}
                className="absolute inset-0 flex flex-col items-start justify-center p-8 md:p-20 lg:p-28"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent pointer-events-none" />
                <div className="relative z-10">
                    <h2 className="text-4xl md:text-6xl font-bold max-w-2xl leading-[1.1] text-white">
                        Data-Driven
                        <br />
                        Product Strategy.
                    </h2>
                    <div className="mt-6 w-16 h-[1px] bg-white/20" />
                    <p className="mt-5 text-sm md:text-base text-white/50 font-light max-w-md leading-relaxed">
                        Combining IQVIA market intelligence with structured frameworks to prioritize portfolios and expand into high-growth markets.
                    </p>
                </div>
            </motion.div>

            {/* Section 3: Right aligned */}
            <motion.div
                style={{ opacity: section3Opacity, y: section3Y }}
                className="absolute inset-0 flex flex-col items-end justify-center text-right p-8 md:p-20 lg:p-28"
            >
                <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/25 to-transparent pointer-events-none" />
                <div className="relative z-10">
                    <h2 className="text-4xl md:text-6xl font-bold max-w-2xl leading-[1.1] text-white">
                        Healthcare Meets
                        <br />
                        Business Growth.
                    </h2>
                    <p className="mt-5 text-sm md:text-base text-white/50 max-w-md font-light leading-relaxed">
                        23+ SKUs analyzed. Published research author. Building the bridge between clinical insights and market strategy.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
