"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        title: "Ozone Pharmaceuticals",
        role: "Product Management Intern",
        period: "Apr 2025 – Jul 2025",
        description: "Built 3-tier portfolio prioritization framework for 23+ SKUs using IQVIA & CMARC data. Identified 6 high-growth states, proposed bundling strategies, and launched a WhatsApp-based digital detailing model.",
        tags: ["IQVIA", "Product Strategy", "GTM", "NPL"],
        accent: "from-indigo-500/20 to-violet-500/20",
        borderAccent: "hover:border-indigo-500/30",
        image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Sriraj Infra",
        role: "Management Trainee · Luxury Real Estate",
        period: "Mar 2025 – Apr 2025",
        description: "Led brand activation and business development in Ahmedabad's luxury residential market. Streamlined CRM pipeline, improving response time by ~20% and boosting qualified lead conversions.",
        tags: ["CRM", "Brand Activation", "SEO", "Lead Gen"],
        accent: "from-cyan-500/20 to-blue-500/20",
        borderAccent: "hover:border-cyan-500/30",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Dettol — Capstone Project",
        role: "Brand Repositioning Strategy",
        period: "2025",
        description: "Repositioned Dettol for tier-2 markets via consumer storytelling and a 3-phase bundled NPL strategy targeting 180M+ potential households across India.",
        tags: ["Brand Strategy", "Consumer Insights", "NPL"],
        accent: "from-emerald-500/20 to-teal-500/20",
        borderAccent: "hover:border-emerald-500/30",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "InsideKampus",
        role: "Growth Strategy · Live Project",
        period: "2025",
        description: "Built a 4-segment growth funnel driving reach improvement via precision segmentation, targeting, and digital channel optimization for an EdTech platform.",
        tags: ["Growth", "Segmentation", "Digital Marketing"],
        accent: "from-amber-500/20 to-orange-500/20",
        borderAccent: "hover:border-amber-500/30",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    },
];

export default function Experience() {
    return (
        <section className="relative w-full py-32 md:py-40 px-6 md:px-16 lg:px-28 overflow-hidden">
            {/* Background orb */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/[0.03] rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Label */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-6"
                >
                    <span className="text-xs font-medium tracking-[0.3em] uppercase text-indigo-400/70">Experience</span>
                    <div className="mt-3 w-12 h-[2px] glow-line rounded-full" />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-4xl md:text-6xl font-black tracking-tight mb-4"
                >
                    Selected <span className="gradient-text">Work</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-white/40 font-light max-w-2xl mb-16"
                >
                    Real projects in product management, brand strategy, and growth — across pharma, real estate, and FMCG.
                </motion.p>

                {/* Grid */}
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
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 opacity-40 group-hover:opacity-50"
                                style={{ backgroundImage: `url(${exp.image})` }}
                            />

                            {/* Gradient overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-t ${exp.accent} from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent`} />

                            {/* Content */}
                            <div className="absolute inset-0 p-7 md:p-8 flex flex-col justify-end relative z-10">
                                {/* Period badge */}
                                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/30 mb-3 transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    {exp.period}
                                </span>

                                {/* Role */}
                                <p className="text-xs font-medium tracking-wider uppercase text-indigo-300/70 mb-1.5 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                                    {exp.role}
                                </p>

                                {/* Title */}
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 transform translate-y-1 group-hover:translate-y-0 transition-all duration-500">
                                    {exp.title}
                                </h3>

                                {/* Description - shows on hover */}
                                <p className="text-sm text-white/50 font-light leading-relaxed mb-4 max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
                                    {exp.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                                    {exp.tags.map((tag, ti) => (
                                        <span key={ti} className="px-2.5 py-1 text-[10px] font-medium tracking-wider uppercase rounded-full border border-white/10 bg-white/[0.03] text-white/50">
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
