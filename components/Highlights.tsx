"use client";

import { motion } from "framer-motion";

const highlights = [
    { stat: "97.04%", label: "CAT Percentile" },
    { stat: "PM Intern", label: "Ozone Pharmaceuticals" },
    { stat: "23+", label: "SKUs Analyzed (IQVIA)" },
    { stat: "Published", label: "Research Author" },
    { stat: "Finalist", label: "XLRI Case Competitions" },
];

export default function Highlights() {
    return (
        <section className="w-full py-20 px-6 md:px-16 lg:px-28">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    {highlights.map((h, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                            className="glass-card glass-card-hover rounded-xl p-5 text-center cursor-default"
                        >
                            <p className="text-2xl md:text-3xl font-bold text-white mb-1">{h.stat}</p>
                            <p className="text-[11px] text-white/35 font-medium tracking-wide uppercase">{h.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
