"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/company";

const categories = ["All", "Residential", "Commercial"];

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    return (
        <>
            {/* Hero */}
            <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 bg-deep">
                <div className="container-custom px-6 md:px-12">
                    <SectionHeader
                        tag="Our Portfolio"
                        title="Projects That Define Excellence"
                        description="Every project we undertake is a reflection of our passion for quality and design innovation. Explore our signature builds across Kerala."
                    />

                    {/* Filter buttons */}
                    <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 sm:mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 sm:px-6 py-2.5 text-[11px] sm:text-xs tracking-wider uppercase font-semibold transition-all duration-300 ${activeCategory === cat
                                        ? "bg-gold text-deep"
                                        : "border border-card-border text-muted hover:border-gold hover:text-gold"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Project Grid */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {filteredProjects.map((project) => (
                                <ProjectCard
                                    key={project.slug}
                                    {...project}
                                    image={project.images[0]}
                                    className="min-h-[260px] sm:min-h-[320px]"
                                />
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-muted text-lg">No projects found in this category.</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
