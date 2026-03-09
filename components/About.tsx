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
    { value: 97.04, suffix: "%", label: "CAT Percentile" },
    { value: 23, suffix: "+", label: "SKUs Analyzed" },
    { value: 6, suffix: "", label: "High-Growth States" },
    { value: 3, suffix: "rd", label: "Pharm.D. Rank" },
];

export default function About() {
    return (
        <section className="relative w-full py-32 md:py-40 px-6 md:px-16 lg:px-28 overflow-hidden">
            {/* Background gradient orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Label */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <span className="text-xs font-medium tracking-[0.3em] uppercase text-indigo-400/70">About Me</span>
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
                        <div className="space-y-5 text-white/55 text-base md:text-lg font-light leading-relaxed">
                            <p>
                                I&apos;m an MBA candidate at <strong className="text-white/80 font-medium">IIM Bodh Gaya</strong> with a Doctor of Pharmacy background and hands-on experience in product strategy, go-to-market planning, and data-led decision-making.
                            </p>
                            <p>
                                During my product management internship at <strong className="text-white/80 font-medium">Ozone Pharmaceuticals</strong>, I worked on portfolio prioritization, digital rollout models, market expansion, and competitor benchmarking using IQVIA and CMARC insights.
                            </p>
                            <p>
                                I&apos;m actively exploring <strong className="text-white/80 font-medium">product management and strategy roles</strong> where I can drive growth, improve user experience, and solve business problems through data, design, and execution.
                            </p>
                        </div>

                        {/* Education pills */}
                        <div className="mt-10 flex flex-wrap gap-3">
                            {["IIM Bodh Gaya — MBA", "Pharm.D. — Geetanjali", "CAT 97.04%"].map((item, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                    className="px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase border border-white/10 bg-white/[0.03] text-white/60 hover:border-indigo-500/30 hover:text-indigo-300 transition-all duration-300"
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </div>
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
                                <div className="text-3xl md:text-4xl font-black gradient-text mb-2">
                                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                                </div>
                                <p className="text-sm text-white/40 font-medium tracking-wide">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
