"use client";

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section className="w-full py-24 md:py-32 px-6 md:px-16 lg:px-28 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/[0.02] via-transparent to-transparent pointer-events-none" />

            <div className="max-w-3xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-label mb-4">Contact</p>
                    <div className="w-10 h-[2px] glow-line rounded-full mx-auto mb-8" />

                    <h2 className="text-3xl md:text-5xl font-black mb-4">
                        Let&apos;s build
                        <br />
                        <span className="gradient-text">something great.</span>
                    </h2>
                    <p className="text-sm text-white/35 font-light max-w-md mx-auto mb-10 leading-relaxed">
                        Open to product strategy, product management, and consulting opportunities. Let&apos;s create impact together.
                    </p>

                    <div className="flex flex-wrap justify-center gap-3">
                        {/* Email — Primary amber CTA */}
                        <a
                            href="mailto:chetan.c2026@iimbg.ac.in"
                            className="group relative px-7 py-3 rounded-full overflow-hidden text-xs font-semibold tracking-wider uppercase"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-90 group-hover:opacity-100 transition-opacity" />
                            <span className="relative z-10 text-white flex items-center gap-2">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="20" height="16" x="2" y="4" rx="2" />
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                                Email Me
                            </span>
                        </a>

                        {/* LinkedIn — Blue hover */}
                        <a
                            href="https://www.linkedin.com/in/drchetanchoudhary/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-7 py-3 rounded-full border border-white/10 text-xs font-semibold tracking-wider uppercase text-white/60 hover:border-blue-500/30 hover:text-blue-300 hover:bg-blue-500/[0.04] transition-all duration-300 flex items-center gap-2"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            LinkedIn
                        </a>

                        {/* Instagram — Pink hover */}
                        <a
                            href="https://www.instagram.com/dr.chetanchoudhary_2027"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-7 py-3 rounded-full border border-white/10 text-xs font-semibold tracking-wider uppercase text-white/60 hover:border-pink-500/30 hover:text-pink-300 hover:bg-pink-500/[0.04] transition-all duration-300 flex items-center gap-2"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                            </svg>
                            Instagram
                        </a>
                    </div>

                    <div className="mt-10 flex flex-wrap justify-center gap-5 text-[11px] text-white/20 font-light tracking-wider">
                        <span>+91 8462950910</span>
                        <span className="w-0.5 h-0.5 rounded-full bg-white/15 self-center" />
                        <span>chetan.c2026@iimbg.ac.in</span>
                        <span className="w-0.5 h-0.5 rounded-full bg-white/15 self-center" />
                        <span>choudhary2027@gmail.com</span>
                        <span className="w-0.5 h-0.5 rounded-full bg-white/15 self-center" />
                        <span>IIM Bodh Gaya, Bihar</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
