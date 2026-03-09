"use client";

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section className="relative w-full py-32 md:py-40 px-6 md:px-16 lg:px-28 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/[0.03] via-transparent to-transparent pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10 text-center">
                {/* Section Label */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <span className="text-xs font-medium tracking-[0.3em] uppercase text-indigo-400/70">Get in Touch</span>
                    <div className="mt-3 w-12 h-[2px] glow-line rounded-full mx-auto" />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6"
                >
                    Let&apos;s build
                    <br />
                    <span className="gradient-text">something great.</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-white/40 font-light max-w-xl mx-auto mb-12"
                >
                    Open to opportunities in product management, brand strategy, business development, and consulting. Let&apos;s connect.
                </motion.p>

                {/* CTA Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-5"
                >
                    {/* Email Button */}
                    <a
                        href="mailto:chetan.c2026@iimbg.ac.in"
                        className="group relative px-8 py-4 rounded-full overflow-hidden transition-all duration-500"
                    >
                        {/* Gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-cyan-600 opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-cyan-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                        <span className="relative z-10 text-sm font-semibold tracking-wider uppercase text-white flex items-center gap-2">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="20" height="16" x="2" y="4" rx="2" />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                            Email Me
                        </span>
                    </a>

                    {/* LinkedIn Button */}
                    <a
                        href="https://linkedin.com/in/drchetanchoudhary"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group px-8 py-4 rounded-full border border-white/10 bg-white/[0.03] hover:border-indigo-500/30 hover:bg-indigo-500/[0.05] transition-all duration-500"
                    >
                        <span className="text-sm font-semibold tracking-wider uppercase text-white/70 group-hover:text-indigo-300 flex items-center gap-2 transition-colors duration-300">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            LinkedIn
                        </span>
                    </a>
                </motion.div>

                {/* Contact info subtly below */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-white/25 font-light tracking-wider"
                >
                    <span>+91 8462950910</span>
                    <span className="w-1 h-1 rounded-full bg-white/15" />
                    <span>chetan.c2026@iimbg.ac.in</span>
                    <span className="w-1 h-1 rounded-full bg-white/15" />
                    <span>IIM Bodh Gaya, Bihar</span>
                </motion.div>
            </div>
        </section>
    );
}
