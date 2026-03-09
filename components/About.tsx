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
                    <div className="w-10 h-[1px] bg-white/15 mb-8" />

                    <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-8 text-white/90">
                        At the intersection of healthcare, strategy, and analytics.
                    </h2>

                    <div className="space-y-4 text-white/45 text-[15px] font-light leading-relaxed">
                        <p>
                            MBA candidate at <span className="text-white/70 font-medium">IIM Bodh Gaya</span> with a PharmD background and experience in product strategy, healthcare market analysis, and digital growth models.
                        </p>
                        <p>
                            My work focuses on combining pharmaceutical knowledge with analytics and market intelligence tools like <span className="text-white/70 font-medium">IQVIA</span> to drive strategic decision making and product growth.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
