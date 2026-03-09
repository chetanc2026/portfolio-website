"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({ target, suffix = "", duration = 2 }: { target: number; suffix?: string; duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (!isInView) return;
        let start = 0;
        const step = target / (duration * 60);
        const timer = setInterval(() => {
            start += step;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 1000 / 60);
        return () => clearInterval(timer);
    }, [isInView, target, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
    { value: 97.04, suffix: "%", label: "CAT Percentile", icon: "📊" },
    { value: 23, suffix: "+", label: "SKUs Analyzed", icon: "💊" },
    { value: 6, suffix: "", label: "High-Growth States", icon: "📍" },
    { value: 3, suffix: "rd", label: "Pharm.D. Rank", icon: "🏆" },
];

export default function About() {
    return (
        <section className="relative w-full py-32 md:py-40 px-6 md:px-16 lg:px-28 overflow-hidden">
            {/* Background gradient orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Label */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <span className="text-xs font-semibold tracking-[0.3em] uppercase text-amber-400/80">Who I Am</span>
                    <div className="mt-3 w-12 h-[2px] glow-line rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Left: Bio */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                            From <span className="gradient-text">clinical wards</span> to{" "}
                            <span className="gradient-text">boardrooms</span>.
                        </h2>
                        <div className="space-y-5 text-white/60 text-base md:text-lg font-light leading-relaxed">
                            <p>
                                I&apos;m <strong className="text-amber-300/90 font-semibold">Dr. Chetan Choudhary</strong>, an MBA candidate at <strong className="text-white/90 font-medium">IIM Bodh Gaya</strong> with a Doctor of Pharmacy background and hands-on experience in product strategy, go-to-market planning, and data-led decision-making.
                            </p>
                            <p>
                                During my product management internship at <strong className="text-white/90 font-medium">Ozone Pharmaceuticals</strong>, I worked on portfolio prioritization, digital rollout models, market expansion, and competitor benchmarking using IQVIA and CMARC insights.
                            </p>
                            <p>
                                I bring a unique blend of <strong className="text-white/90 font-medium">clinical expertise and business acumen</strong> — enabling me to understand products from both the science and the strategy side. I&apos;m actively exploring roles in product management, brand strategy, and business development.
                            </p>
                        </div>

                        {/* Education pills */}
                        <div className="mt-10 flex flex-wrap gap-3">
                            {["IIM Bodh Gaya — MBA (81.76%)", "Pharm.D. — Geetanjali University", "CAT 97.04 Percentile"].map((item, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                    className="px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase border border-amber-500/15 bg-amber-500/[0.04] text-amber-300/70 hover:border-amber-500/30 hover:text-amber-300 transition-all duration-300"
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </div>

                        {/* Publications callout */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-8 glass-card rounded-xl p-5 border-l-2 border-l-amber-500/40"
                        >
                            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-400/70 mb-2">📄 Published Research</p>
                            <p className="text-sm text-white/50 font-light leading-relaxed">
                                &ldquo;Longitudinal Effects of Escitalopram on Quality of Life in Drug-Naïve GAD Patients&rdquo; — IJOCP Journal (Lead Investigator &amp; Author)
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Right: Animated Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -4, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="glass-card rounded-2xl p-6 md:p-8 hover-glow"
                            >
                                <span className="text-2xl mb-3 block">{stat.icon}</span>
                                <div className="text-3xl md:text-4xl font-black gradient-text mb-2">
                                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                                </div>
                                <p className="text-sm text-white/40 font-medium tracking-wide">{stat.label}</p>
                            </motion.div>
                        ))}

                        {/* Extra card: Achievements */}
                        <motion.div
                            whileHover={{ y: -4, scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="col-span-2 glass-card rounded-2xl p-6 hover-glow"
                        >
                            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-400/60 mb-3">🎯 Key Achievements</p>
                            <div className="space-y-2.5">
                                {[
                                    "National Finalist — HR Nexus, SAPPHIRE @ XLRI Jamshedpur (Top 13/260 teams)",
                                    "National Finalist — Ensemble Valhalla, TNGL @ XLRI Jamshedpur",
                                    "NCC B-Certificate Holder · 6th Indo-US Global Pharma Conference",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-2.5">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500/50 shrink-0" />
                                        <p className="text-sm text-white/50 font-light leading-relaxed">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
