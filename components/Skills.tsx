"use client";

import { motion } from "framer-motion";

const domainSkills = [
    "Pharma Product Management",
    "Brand Management",
    "Go-to-Market Strategy",
    "Product Lifecycle & NPL",
    "Market Access",
    "B2D Marketing",
    "KOL Engagement",
    "Competitive Benchmarking",
    "Business Development",
    "Digital Therapeutics",
    "Consumer Insights",
    "Growth Funnels",
    "SEO & Content Strategy",
    "CRM Strategy",
];

const technicalSkills = [
    "IQVIA",
    "CMARC",
    "MS Excel (Advanced)",
    "Google Analytics",
    "PowerPoint",
    "CRM Platforms",
    "SEO Tools",
    "SPSS",
    "Power BI",
    "WHOQOL-BREF",
];

const certifications = [
    "Lean Six Sigma Green Belt — Grant Thornton",
    "Good Clinical Practice (GCP)",
    "Digital Marketing (40+ hrs)",
    "Project Management",
    "Excel Visualization — J.P. Morgan (Forage)",
    "CRM — Starweaver",
    "Antibiotic Stewardship",
];

export default function Skills() {
    return (
        <section className="relative w-full py-32 md:py-40 px-6 md:px-16 lg:px-28 overflow-hidden">
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/[0.02] rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <span className="text-xs font-semibold tracking-[0.3em] uppercase text-amber-400/80">Expertise</span>
                    <div className="mt-3 w-12 h-[2px] glow-line rounded-full" />
                    <h2 className="mt-6 text-4xl md:text-6xl font-black tracking-tight">
                        Skills &amp; <span className="gradient-text">Arsenal</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
                    {/* Domain Skills */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2"
                    >
                        <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-white/30 mb-6">Domain</h3>
                        <div className="flex flex-wrap gap-3">
                            {domainSkills.map((skill, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: i * 0.03 }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="px-4 py-2 rounded-full text-xs font-medium tracking-wider border border-white/[0.08] bg-white/[0.02] text-white/60 hover:border-amber-500/40 hover:text-amber-300 hover:bg-amber-500/[0.06] transition-all duration-300 cursor-default"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Technical Skills */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-white/30 mb-6">Tools</h3>
                        <div className="flex flex-wrap gap-3">
                            {technicalSkills.map((skill, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: i * 0.04 }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="px-4 py-2 rounded-full text-xs font-medium tracking-wider border border-white/[0.08] bg-white/[0.02] text-white/50 hover:border-cyan-500/40 hover:text-cyan-300 hover:bg-cyan-500/[0.06] transition-all duration-300 cursor-default"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Certifications */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-16"
                >
                    <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-white/30 mb-6">Certifications</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {certifications.map((cert, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                className="glass-card rounded-xl p-4 hover-glow hover:border-amber-500/20"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-500/60 shrink-0" />
                                    <p className="text-sm text-white/50 font-light leading-relaxed">{cert}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Languages */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-12 flex items-center gap-6"
                >
                    <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-white/30">Languages</h3>
                    <div className="flex gap-3">
                        {["English (Professional)", "Hindi (Professional)"].map((lang, i) => (
                            <span key={i} className="px-3 py-1.5 rounded-full text-[11px] font-medium tracking-wider border border-white/[0.08] bg-white/[0.02] text-white/45">
                                {lang}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
