"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "Ozone Pharmaceuticals Product Strategy",
        description: "SKU prioritization framework for a cardio-diabetic portfolio using IQVIA data.",
        tools: ["IQVIA", "CMARC", "PMPR", "Excel"],
        accent: "from-indigo-500/15",
    },
    {
        title: "Dettol Brand Revitalization Strategy",
        description: "Brand repositioning for Tier-2 markets via consumer storytelling.",
        tools: ["Market Research", "Consumer Insights", "NPL"],
        accent: "from-emerald-500/15",
    },
    {
        title: "InsideKampus Growth Funnel",
        description: "4-segment growth funnel for an EdTech event platform.",
        tools: ["Segmentation", "Digital Marketing", "Analytics"],
        accent: "from-cyan-500/15",
    },
];

export default function ProjectCards() {
    return (
        <section id="projects" className="w-full py-24 md:py-32 px-6 md:px-16 lg:px-28">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <p className="section-label mb-4">Featured Projects</p>
                    <div className="w-10 h-[2px] glow-line rounded-full mb-6" />
                    <h2 className="text-3xl md:text-4xl font-bold text-white/90">
                        Selected <span className="gradient-text">Work</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="glass-card glass-card-hover rounded-xl p-6 flex flex-col relative overflow-hidden"
                        >
                            {/* Subtle gradient accent at top */}
                            <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent ${p.accent} to-transparent`} />

                            <h3 className="text-base font-semibold text-white/85 mb-2 leading-snug">{p.title}</h3>
                            <p className="text-sm text-white/35 font-light leading-relaxed mb-5 flex-1">{p.description}</p>

                            <div className="flex flex-wrap gap-2 mb-5">
                                {p.tools.map((t, ti) => (
                                    <span key={ti} className="px-2.5 py-1 text-[10px] font-medium tracking-wider uppercase rounded-full border border-indigo-500/10 bg-indigo-500/[0.03] text-indigo-300/40">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <a
                                href="#case-studies"
                                className="text-xs font-semibold tracking-wider uppercase text-indigo-400/50 hover:text-indigo-300 transition-colors duration-300 flex items-center gap-1.5"
                            >
                                View Case Study
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
