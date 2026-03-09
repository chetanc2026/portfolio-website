"use client";

import { motion } from "framer-motion";

const valueProps = [
    {
        icon: "🎯",
        title: "Product Strategy",
        desc: "SKU prioritization, portfolio management, and go-to-market planning using IQVIA and CMARC data.",
    },
    {
        icon: "📊",
        title: "Data-Driven Growth",
        desc: "Market expansion analysis with PMPR metrics, competitor benchmarking, and consumer segmentation.",
    },
    {
        icon: "💊",
        title: "Healthcare Expertise",
        desc: "PharmD background with clinical research experience and deep understanding of pharma value chains.",
    },
    {
        icon: "🚀",
        title: "Digital & Brand Strategy",
        desc: "Digital detailing models, SEO campaigns, WhatsApp-based KOL engagement, and NPL frameworks.",
    },
];

export default function ValueProp() {
    return (
        <section className="w-full py-20 px-6 md:px-16 lg:px-28">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <p className="section-label mb-4">What I Bring</p>
                    <div className="w-10 h-[2px] glow-line rounded-full mx-auto" />
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {valueProps.map((v, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -4 }}
                            className="glass-card glass-card-hover rounded-xl p-6 text-center group"
                        >
                            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{v.icon}</div>
                            <h3 className="text-sm font-semibold text-white/80 mb-2">{v.title}</h3>
                            <p className="text-xs text-white/30 font-light leading-relaxed">{v.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
