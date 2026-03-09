"use client";

import { motion } from "framer-motion";

const businessSkills = [
    "Product Strategy",
    "Market Expansion",
    "Competitive Analysis",
    "Growth Strategy",
    "Market Research",
    "Brand Management",
    "Go-to-Market Planning",
    "KOL Engagement",
    "Business Development",
    "Consumer Insights",
];

const technicalSkills = [
    "Excel (Advanced)",
    "Data Analysis",
    "SEO",
    "CRM Platforms",
    "Google Analytics",
    "Digital Marketing",
    "IQVIA",
    "CMARC",
    "Tableau",
    "SPSS",
    "Power BI",
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
        <section className="w-full py-24 md:py-32 px-6 md:px-16 lg:px-28">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <p className="section-label mb-4">Expertise</p>
                    <div className="w-10 h-[2px] glow-line rounded-full mb-6" />
                    <h2 className="text-3xl md:text-4xl font-bold text-white/90">
                        Skills &amp; <span className="gradient-text">Arsenal</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    {/* Business */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/25 mb-5">Business</h3>
                        <div className="flex flex-wrap gap-2.5">
                            {businessSkills.map((skill, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: i * 0.03 }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="px-4 py-2 rounded-full text-xs font-medium tracking-wider border border-white/[0.06] bg-white/[0.02] text-white/45 hover:border-amber-500/30 hover:text-amber-300 hover:bg-amber-500/[0.04] transition-all duration-300 cursor-default"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Technical */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/25 mb-5">Technical</h3>
                        <div className="flex flex-wrap gap-2.5">
                            {technicalSkills.map((skill, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: i * 0.03 }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="px-4 py-2 rounded-full text-xs font-medium tracking-wider border border-white/[0.06] bg-white/[0.02] text-white/45 hover:border-cyan-500/30 hover:text-cyan-300 hover:bg-cyan-500/[0.04] transition-all duration-300 cursor-default"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Certifications */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/25 mb-5">Certifications</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {certifications.map((cert, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: i * 0.04 }}
                                className="glass-card glass-card-hover rounded-xl p-4"
                            >
                                <div className="flex items-start gap-2.5">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-500/50 shrink-0" />
                                    <p className="text-sm text-white/45 font-light leading-relaxed">{cert}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
