"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
];

export default function FloatingNav() {
    const [visible, setVisible] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const { scrollYProgress } = useScroll();

    // Show nav after scrolling past hero
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setVisible(latest > 0.08);
    });

    // Track active section
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection("#" + entry.target.id);
                    }
                });
            },
            { rootMargin: "-40% 0px -40% 0px" }
        );

        const sections = document.querySelectorAll("section[id]");
        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={visible ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-1 py-1 rounded-full backdrop-blur-xl bg-white/[0.04] border border-white/[0.06] shadow-lg shadow-black/20"
        >
            <div className="flex items-center gap-0.5">
                {navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className={`px-4 py-2 rounded-full text-[11px] font-medium tracking-wider uppercase transition-all duration-300 ${activeSection === link.href
                                ? "bg-white/[0.08] text-white"
                                : "text-white/35 hover:text-white/60"
                            }`}
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </motion.nav>
    );
}
