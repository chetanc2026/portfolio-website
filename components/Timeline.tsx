"use client";

import { motion } from "framer-motion";

const timeline = [
    {
        role: "Product Management Intern",
        org: "Ozone Pharmaceuticals",
        period: "Apr – Jul 2025",
        points: [
            "Portfolio prioritization for 23+ SKUs using IQVIA data",
            "Market expansion analysis using PMPR metrics",
            "Competitor pricing benchmarking",
            "Digital rollout strategy with TrueMeds partnerships",
            "WhatsApp-based digital detailing model",
        ],
    },
    {
        role: "Management Trainee · Luxury Real Estate",
        org: "Sriraj Infra",
        period: "Mar – Apr 2025",
        points: [
            "Brand activation and business development in Ahmedabad",
            "Managed 15+ client interactions, streamlined CRM pipeline",
            "SEO campaigns boosting organic reach ~25%",
        ],
    },
    {
        role: "Marketing Live Project · MSME Startup",
        org: "Decoral Studio",
        period: "Sep – Nov 2025",
        points: [
            "End-to-end outbound outreach and lead pipeline",
            "Conversion tracking and deal-closure coordination",
        ],
    },
    {
        role: "Clinical Pharmacy Intern",
        org: "Geetanjali Hospital",
        period: "Aug 2023 – Jul 2024",
        points: [
            "Medication therapy optimization with healthcare providers",
            "Patient counseling and medication review",
            "Clinical research on GAD patients (WHOQOL-BREF scale)",
        ],
    },
    {
        role: "MBA",
        org: "Indian Institute of Management, Bodh Gaya",
        period: "2024 – 2026",
        points: [],
    },
    {
        role: "Doctor of Pharmacy (Pharm.D.)",
        org: "Geetanjali Institute of Pharmacy",
        period: "2018 – 2024",
        points: [],
    },
];

export default function Timeline() {
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
                    <p className="section-label mb-4">Experience &amp; Education</p>
                    <div className="w-10 h-[2px] glow-line rounded-full" />
                </motion.div>

                <div className="relative">
                    {/* Vertical line with gradient */}
                    <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-amber-500/20 via-white/[0.06] to-transparent" />

                    <div className="space-y-10">
                        {timeline.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-30px" }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="relative pl-8"
                            >
                                {/* Amber dot */}
                                <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-amber-500/30 bg-[#121212]" />

                                <div>
                                    <h3 className="text-lg font-semibold text-white/90">{item.role}</h3>
                                    <p className="text-sm text-amber-400/50 font-light mt-0.5">{item.org}</p>
                                    <p className="text-xs text-white/25 font-light mt-1 tracking-wider">{item.period}</p>

                                    {item.points.length > 0 && (
                                        <ul className="mt-4 space-y-2">
                                            {item.points.map((point, pi) => (
                                                <li key={pi} className="flex items-start gap-2.5">
                                                    <div className="mt-1.5 w-1 h-1 rounded-full bg-amber-500/40 shrink-0" />
                                                    <p className="text-sm text-white/40 font-light leading-relaxed">{point}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
