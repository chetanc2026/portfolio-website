"use client";

import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        return scrollYProgress.on("change", (v) => setVisible(v > 0.15));
    }, [scrollYProgress]);

    return (
        <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white/70 hover:bg-white/[0.1] transition-all duration-300"
            aria-label="Scroll to top"
        >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 15l-6-6-6 6" />
            </svg>
        </motion.button>
    );
}
