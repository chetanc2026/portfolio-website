"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="w-full py-24 md:py-32 px-6 md:px-16 lg:px-28">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-label mb-4">About</p>
                    <div className="w-10 h-[2px] glow-line rounded-full mb-8" />

                    <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-8 text-white/90">
                        At the intersection of <span className="gradient-text">healthcare</span>, strategy, and analytics.
                    </h2>

                    <div className="space-y-4 text-white/45 text-[15px] font-light leading-relaxed">
                        <p>
                            MBA candidate at <strong className="text-indigo-300/80 font-medium">IIM Bodh Gaya</strong> with a PharmD background and experience in product strategy, healthcare market analysis, and digital growth models.
                        </p>
                        <p>
                            My work focuses on combining pharmaceutical knowledge with analytics and market intelligence tools like <strong className="text-white/70 font-medium">IQVIA</strong> to drive strategic decision making and product growth.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
