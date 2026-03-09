"use client";

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section className="w-full py-24 md:py-32 px-6 md:px-16 lg:px-28">
            <div className="max-w-3xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-label mb-4">Contact</p>
                    <div className="w-10 h-[1px] bg-white/15 mx-auto mb-8" />

                    <h2 className="text-3xl md:text-5xl font-bold text-white/90 mb-4">
                        Let&apos;s work together.
                    </h2>
                    <p className="text-sm text-white/35 font-light max-w-md mx-auto mb-10 leading-relaxed">
                        Open to product strategy, product management, and consulting opportunities.
                    </p>

                    <div className="flex flex-wrap justify-center gap-3">
                        <a
                            href="mailto:chetan.c2026@iimbg.ac.in"
                            className="px-6 py-3 rounded-full bg-white text-[#121212] text-xs font-semibold tracking-wider uppercase hover:bg-white/90 transition-all duration-300"
                        >
                            Email
                        </a>
                        <a
                            href="https://www.linkedin.com/in/drchetanchoudhary/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-full border border-white/15 text-xs font-semibold tracking-wider uppercase text-white/60 hover:border-white/30 hover:text-white/90 transition-all duration-300"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://www.instagram.com/dr.chetanchoudhary_2027"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-full border border-white/15 text-xs font-semibold tracking-wider uppercase text-white/60 hover:border-white/30 hover:text-white/90 transition-all duration-300"
                        >
                            Instagram
                        </a>
                    </div>

                    <div className="mt-10 flex flex-wrap justify-center gap-5 text-[11px] text-white/20 font-light tracking-wider">
                        <span>chetan.c2026@iimbg.ac.in</span>
                        <span className="w-0.5 h-0.5 rounded-full bg-white/15 self-center" />
                        <span>+91 8462950910</span>
                        <span className="w-0.5 h-0.5 rounded-full bg-white/15 self-center" />
                        <span>IIM Bodh Gaya, Bihar</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
