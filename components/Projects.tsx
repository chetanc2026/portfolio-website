"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "E-Commerce Reimagined",
        category: "Web App • 3D",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Fintech Dashboard",
        category: "Data Visualization",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "AI Chat Interface",
        category: "Generative AI • UX",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Luxury Brand Site",
        category: "Creative Development",
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop",
    },
];

export default function Projects() {
    return (
        <section className="relative w-full min-h-screen bg-background text-white px-6 py-32 md:px-24">
            <div className="max-w-7xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
                        Selected Work
                    </h2>
                    <p className="text-xl text-white/60 font-light max-w-2xl">
                        A collection of recent projects focused on interactive design, performance, and user experience.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                            className="group relative rounded-2xl overflow-hidden glass cursor-pointer aspect-[4/3]"
                        >
                            {/* Image bg with zoom on hover */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                                style={{ backgroundImage: `url(${project.image})` }}
                            />

                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <p className="text-white/70 text-sm font-medium tracking-widest uppercase mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                    {project.category}
                                </p>
                                <h3 className="text-3xl font-bold text-white transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                                    {project.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
