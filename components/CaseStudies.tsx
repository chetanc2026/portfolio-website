"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const caseStudies = [
    {
        id: "ozone",
        title: "Ozone Pharmaceuticals Product Strategy",
        problem: "Large cardio-diabetic portfolio with no SKU prioritization framework. Resources were spread thin across underperforming and high-potential products alike, leading to suboptimal market capture.",
        analysis: "Analyzed 23+ SKUs using IQVIA market share data and CMARC prescriber trends. Conducted competitor pricing benchmarking across 5+ brands. Used PMPR (Per Month Per Representative) growth metrics to identify 6 high-growth states.",
        strategy: "Developed a 3-tier SKU prioritization framework (Star, Optimize, Sunset) for data-driven resource allocation. Recommended market expansion into 3 key regions projecting 15%+ incremental revenue. Designed a digital rollout model with TrueMeds tie-ups and a MR-lite KOL engagement model via WhatsApp-based detailing.",
        outcome: "Improved organizational focus on high-growth SKUs and markets. Replaced traditional field visits with scalable digital detailing in public hospital zones. Framework adopted for ongoing portfolio reviews.",
    },
    {
        id: "dettol",
        title: "Dettol Brand Revitalization Strategy",
        problem: "Declining brand engagement in Tier-2 markets. Dettol's messaging and product positioning were optimized for urban consumers, leaving a gap in underserved but high-potential markets.",
        analysis: "Conducted consumer behavior study across Tier-2 demographics. Analyzed competitive positioning of alternatives. Studied purchase triggers, awareness gaps, and channel preferences in target markets.",
        strategy: "Repositioned the brand through consumer storytelling that resonated with Tier-2 values (family health, affordability, trust). Designed a three-phase bundled NPL strategy targeting 180M+ potential households.",
        outcome: "Created stronger differentiation in Tier-2 markets. Bundled product approach increased perceived value. Storytelling framework provided a template for future market entry in similar demographics.",
    },
    {
        id: "insidekampus",
        title: "InsideKampus Growth Funnel",
        problem: "Low engagement and poor conversion rates in event promotion. Marketing efforts were broad and undifferentiated, leading to low ROI on outreach campaigns.",
        analysis: "Performed user segmentation across the platform's user base. Analyzed the marketing funnel to identify drop-off points. Mapped content engagement to conversion events.",
        strategy: "Designed a 4-segment growth funnel with precision targeting for each segment. Optimized digital channel mix based on engagement data. Created segment-specific messaging and content strategies.",
        outcome: "Improved targeting accuracy and overall reach. Higher engagement rates through personalized outreach. Established a repeatable framework for future campaign optimization.",
    },
];

export default function CaseStudies() {
    const [openId, setOpenId] = useState<string | null>(null);

    return (
        <section id="case-studies" className="w-full py-24 md:py-32 px-6 md:px-16 lg:px-28">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <p className="section-label mb-4">Case Studies</p>
                    <div className="w-10 h-[2px] glow-line rounded-full mb-6" />
                    <h2 className="text-3xl md:text-4xl font-bold text-white/90">
                        Deep <span className="gradient-text">Dive</span>
                    </h2>
                    <p className="mt-3 text-sm text-white/35 font-light">Click a project to explore the consulting-style breakdown.</p>
                </motion.div>

                <div className="space-y-4">
                    {caseStudies.map((cs, i) => {
                        const isOpen = openId === cs.id;

                        return (
                            <motion.div
                                key={cs.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                className={`glass-card rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? "border-indigo-500/15" : ""}`}
                            >
                                <button
                                    onClick={() => setOpenId(isOpen ? null : cs.id)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors duration-300"
                                >
                                    <h3 className="text-base font-semibold text-white/80">{cs.title}</h3>
                                    <motion.svg
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400/30 shrink-0 ml-4"
                                    >
                                        <path d="M6 9l6 6 6-6" />
                                    </motion.svg>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 border-t border-indigo-500/[0.08]">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-5">
                                                    {[
                                                        { label: "Problem", content: cs.problem },
                                                        { label: "Analysis", content: cs.analysis },
                                                        { label: "Strategy", content: cs.strategy },
                                                        { label: "Outcome", content: cs.outcome },
                                                    ].map((block, bi) => (
                                                        <div key={bi}>
                                                            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-indigo-400/40 mb-2">{block.label}</p>
                                                            <p className="text-sm text-white/45 font-light leading-relaxed">{block.content}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
