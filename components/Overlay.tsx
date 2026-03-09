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

            {/* Section 1: Hero — smaller text, white, clean */}
            <motion.div
                style={{ opacity: section1Opacity, y: section1Y }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60 pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center max-w-2xl">
                    {/* Badge */}
                    <div className="mb-4 px-4 py-1.5 rounded-full border border-indigo-400/20 bg-indigo-500/[0.06] backdrop-blur-sm">
                        <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-indigo-300/80">
                            MBA @ IIM Bodh Gaya
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[0.95] text-white text-glow-white">
                        Dr. Chetan
                        <br />
                        Choudhary
                    </h1>

                    <p className="mt-4 text-base md:text-lg font-medium text-white/80 tracking-wide">
                        Product Strategy &amp; Growth
                    </p>

                    <p className="mt-2 text-xs md:text-sm text-white/45 font-light max-w-sm leading-relaxed">
                        MBA Candidate – IIM Bodh Gaya · PharmD · CAT 97.04%
                    </p>

                    <p className="mt-4 text-xs text-white/30 font-light max-w-md leading-relaxed">
                        I build data-driven healthcare and product growth strategies by combining pharmaceutical expertise, market intelligence, and analytical problem solving.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-6 flex flex-wrap justify-center gap-3 pointer-events-auto">
                        <a
                            href="/resume.pdf"
                            download="Chetan_Choudhary_Resume.pdf"
                            className="group relative px-5 py-2 rounded-full overflow-hidden text-[11px] font-semibold tracking-wider uppercase"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-90 group-hover:opacity-100 transition-opacity" />
                            <span className="relative z-10 text-white">Download Resume</span>
                        </a>
                        <a
                            href="#projects"
                            className="px-5 py-2 rounded-full border border-white/15 text-[11px] font-semibold tracking-wider uppercase text-white/60 hover:border-indigo-400/30 hover:text-indigo-300 transition-all duration-300"
                        >
                            View Projects
                        </a>
                        <a
                            href="https://www.linkedin.com/in/drchetanchoudhary/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2 rounded-full border border-white/15 text-[11px] font-semibold tracking-wider uppercase text-white/60 hover:border-blue-500/30 hover:text-blue-300 transition-all duration-300"
                        >
                            LinkedIn
                        </a>
                    </div>

                    {/* Glow line */}
                    <div className="mt-6 w-16 h-[2px] glow-line rounded-full" />
                </div>

                {/* Scroll hint */}
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                    className="absolute bottom-10 flex flex-col items-center gap-2 z-10"
                >
                    <span className="text-[9px] uppercase tracking-[0.25em] text-white/20">Scroll</span>
                    <svg width="12" height="16" viewBox="0 0 16 24" fill="none" className="text-indigo-400/25">
                        <path d="M8 4L8 20M8 20L2 14M8 20L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </motion.div>
            </motion.div>

            {/* Section 2: Left aligned */}
            <motion.div
                style={{ opacity: section2Opacity, y: section2Y }}
                className="absolute inset-0 flex flex-col items-start justify-center p-8 md:p-20 lg:p-28"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent pointer-events-none" />
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold max-w-xl leading-[1.1] text-white text-glow-white">
                        Data-Driven
                        <br />
                        <span className="gradient-text">Product Strategy.</span>
                    </h2>
                    <div className="mt-5 w-14 h-[2px] glow-line rounded-full" />
                    <p className="mt-4 text-sm text-white/50 font-light max-w-md leading-relaxed text-glow-white">
                        Combining IQVIA market intelligence with structured frameworks to prioritize portfolios and expand into high-growth markets.
                    </p>
                </div>
            </motion.div>

            {/* Section 3: Right aligned */}
            <motion.div
                style={{ opacity: section3Opacity, y: section3Y }}
                className="absolute inset-0 flex flex-col items-end justify-center text-right p-8 md:p-20 lg:p-28"
            >
                <div className="absolute inset-0 bg-gradient-to-l from-black/65 via-black/25 to-transparent pointer-events-none" />
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold max-w-xl leading-[1.1] text-white text-glow-white">
                        Healthcare Meets
                        <br />
                        <span className="gradient-text">Business Growth.</span>
                    </h2>
                    <p className="mt-4 text-sm text-white/50 max-w-md font-light leading-relaxed text-glow-white">
                        23+ SKUs analyzed. Published research author. Building the bridge between clinical insights and market strategy.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
