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
];

export default function Skills() {
    return (
        <section className="w-full py-24 md:py-32 px-6 md:px-16 lg:px-28">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <p className="section-label mb-4">Skills</p>
                    <div className="w-10 h-[1px] bg-white/15" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Business */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
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
                                    className="px-4 py-2 rounded-full text-xs font-medium tracking-wider border border-white/[0.06] bg-white/[0.02] text-white/45 hover:border-white/15 hover:text-white/65 transition-all duration-300 cursor-default"
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
                        transition={{ duration: 0.5, delay: 0.1 }}
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
                                    className="px-4 py-2 rounded-full text-xs font-medium tracking-wider border border-white/[0.06] bg-white/[0.02] text-white/45 hover:border-white/15 hover:text-white/65 transition-all duration-300 cursor-default"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
