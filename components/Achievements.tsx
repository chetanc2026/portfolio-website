"use client";

import { motion } from "framer-motion";

const achievements = [
    { stat: "97.04%", label: "CAT Percentile", desc: "Top 3% nationally", icon: "📊" },
    { stat: "3rd Rank", label: "Pharm.D.", desc: "Geetanjali Institute of Pharmacy", icon: "🏆" },
    { stat: "Finalist", label: "XLRI Competitions", desc: "SAPPHIRE (Top 13/260) & TNGL", icon: "🎯" },
    { stat: "Published", label: "Research Author", desc: "Lead investigator, IJOCP Journal", icon: "📄" },
];

const publications = [
    {
        title: "Longitudinal Effects of Escitalopram on Quality of Life in Drug-Naïve GAD Patients",
        journal: "IJOCP Journal · 2022",
        role: "Lead Investigator & Author",
    },
    {
        title: "Digital Therapeutics: Catalyzing Personalized Medicine and Equitable Healthcare",
        journal: "Editorial · 2019",
        role: "Author",
    },
];

const leadership = [
    { role: "Alumni Relations Committee Representative", org: "IIM Bodh Gaya" },
    { role: "Member, STRACON", org: "Strategy & Consulting Club, IIM Bodh Gaya" },
    { role: "Member, MasQ", org: "Marketing Club, IIM Bodh Gaya" },
    { role: "NCC B-Certificate Holder", org: "National Cadet Corps" },
];

export default function Achievements() {
    return (
        <>
            {/* Achievements */}
            <section className="w-full py-24 md:py-32 px-6 md:px-16 lg:px-28">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <p className="section-label mb-4">Achievements</p>
                        <div className="w-10 h-[2px] glow-line rounded-full" />
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {achievements.map((a, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                className="glass-card glass-card-hover rounded-xl p-5"
                            >
                                <span className="text-xl mb-2 block">{a.icon}</span>
                                <p className="text-xl font-bold gradient-text mb-1">{a.stat}</p>
                                <p className="text-[10px] text-white/30 font-medium tracking-wider uppercase mb-2">{a.label}</p>
                                <p className="text-xs text-white/20 font-light">{a.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Publications */}
            <section className="w-full py-16 px-6 md:px-16 lg:px-28">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <p className="section-label mb-4">Publications</p>
                        <div className="w-10 h-[2px] glow-line rounded-full" />
                    </motion.div>

                    <div className="space-y-4">
                        {publications.map((pub, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                className="glass-card rounded-xl p-5 border-l-2 border-l-amber-500/20"
                            >
                                <h3 className="text-sm font-medium text-white/70 leading-relaxed mb-1">{pub.title}</h3>
                                <p className="text-xs text-white/30 font-light">{pub.journal} · {pub.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className="w-full py-16 px-6 md:px-16 lg:px-28">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <p className="section-label mb-4">Leadership &amp; Positions</p>
                        <div className="w-10 h-[2px] glow-line rounded-full" />
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {leadership.map((l, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                className="glass-card glass-card-hover rounded-xl p-5"
                            >
                                <h3 className="text-sm font-medium text-white/65 mb-1">{l.role}</h3>
                                <p className="text-xs text-amber-400/30 font-light">{l.org}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
