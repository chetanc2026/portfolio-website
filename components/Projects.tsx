"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        title: "Ozone Pharmaceuticals",
        role: "Product Management Intern",
        period: "Apr 2025 – Jul 2025",
        location: "Delhi, India",
        description: "Built 3-tier portfolio prioritization framework for 23+ SKUs using IQVIA & CMARC data. Identified 6 high-growth states, proposed bundling strategies, and launched a WhatsApp-based digital detailing model replacing field visits.",
        tags: ["IQVIA", "Product Strategy", "GTM", "NPL", "Digital Detailing"],
        accent: "from-amber-500/20 to-orange-500/20",
        borderAccent: "hover:border-amber-500/30",
        image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Sriraj Infra",
        role: "Management Trainee · Luxury Real Estate",
        period: "Mar 2025 – Apr 2025",
        location: "Ahmedabad, India",
        description: "Led on-ground brand activation and business development. Managed 15+ client interactions, streamlined CRM pipeline improving response time by ~20%, and executed SEO campaigns boosting organic reach by ~25%.",
        tags: ["CRM", "Brand Activation", "SEO", "Lead Gen", "Google Analytics"],
        accent: "from-cyan-500/20 to-blue-500/20",
        borderAccent: "hover:border-cyan-500/30",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Dettol — Capstone Project",
        role: "Brand Repositioning Strategy",
        period: "2025",
        location: "IIM Bodh Gaya",
        description: "Repositioned Dettol brand for tier-2 markets via consumer storytelling and a 3-phase bundled NPL strategy targeting 180M+ potential households across India.",
        tags: ["Brand Strategy", "Consumer Insights", "NPL", "FMCG"],
        accent: "from-emerald-500/20 to-teal-500/20",
        borderAccent: "hover:border-emerald-500/30",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Decoral Studio",
        role: "Marketing Live Project · MSME Startup",
        period: "Sep – Nov 2025",
        location: "Indore, India",
        description: "Executed end-to-end outbound outreach and lead pipeline — from identification to conversion tracking and deal-closure coordination for a premium interior design startup.",
        tags: ["Outbound Sales", "Lead Pipeline", "Brand Comms", "MSME"],
        accent: "from-violet-500/20 to-purple-500/20",
        borderAccent: "hover:border-violet-500/30",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    },
];

export default function Experience() {
    return (
        <section className="relative w-full py-32 md:py-40 px-6 md:px-16 lg:px-28 overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/[0.02] rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-6"
                >
                    <span className="text-xs font-semibold tracking-[0.3em] uppercase text-amber-400/80">Experience</span>
                    <div className="mt-3 w-12 h-[2px] glow-line rounded-full" />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-4xl md:text-6xl font-black tracking-tight mb-4"
                >
                    Where I&apos;ve Made <span className="gradient-text">Impact</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-white/40 font-light max-w-2xl mb-16"
                >
                    Real projects in product management, brand strategy, and growth — across pharma, luxury real estate, FMCG, and startups.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-30px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className={`group relative rounded-2xl overflow-hidden glass-card cursor-pointer aspect-[4/3] ${exp.borderAccent} hover-glow`}
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 opacity-30 group-hover:opacity-40"
                                style={{ backgroundImage: `url(${exp.image})` }}
                            />
                            <div className={`absolute inset-0 bg-gradient-to-t ${exp.accent} from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent`} />

                            <div className="absolute inset-0 p-7 md:p-8 flex flex-col justify-end relative z-10">
                                <div className="flex items-center gap-2 mb-3 transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/30">{exp.period}</span>
                                    <span className="w-1 h-1 rounded-full bg-white/20" />
                                    <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-white/25">{exp.location}</span>
                                </div>

                                <p className="text-xs font-semibold tracking-wider uppercase text-amber-300/70 mb-1.5 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                                    {exp.role}
                                </p>

                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 transform translate-y-1 group-hover:translate-y-0 transition-all duration-500">
                                    {exp.title}
                                </h3>

                                <p className="text-sm text-white/50 font-light leading-relaxed mb-4 max-h-0 overflow-hidden group-hover:max-h-28 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                                    {exp.tags.map((tag, ti) => (
                                        <span key={ti} className="px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase rounded-full border border-white/10 bg-white/[0.04] text-white/50">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
