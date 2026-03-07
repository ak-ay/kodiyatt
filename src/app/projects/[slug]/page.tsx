"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { projects } from "@/data/company";

export default function ProjectDetailPage() {
    const params = useParams();
    const slug = params.slug as string;
    const project = projects.find((p) => p.slug === slug);
    const [activeImage, setActiveImage] = useState(0);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-deep">
                <div className="text-center">
                    <h1 className="font-display text-4xl text-cream mb-4">Project Not Found</h1>
                    <Link href="/projects" className="btn-gold">Back to Projects</Link>
                </div>
            </div>
        );
    }

    const images = project.images;

    return (
        <>
            {/* Hero image */}
            <section className="relative h-[58svh] sm:h-[65svh] md:h-[70vh] overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeImage}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${images[activeImage]})` }}
                    />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/30 to-deep/50" />

                {/* Back button */}
                <div className="absolute top-24 sm:top-28 left-4 sm:left-6 md:left-12 z-10">
                    <Link
                        href="/projects"
                        className="flex items-center gap-2 text-cream/70 hover:text-gold text-sm transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                        Back to Projects
                    </Link>
                </div>

                {/* Project info */}
                <div className="absolute bottom-8 sm:bottom-12 left-4 sm:left-6 md:left-12 right-4 sm:right-6 md:right-12 z-10">
                    <span className="text-gold text-xs tracking-[0.2em] uppercase font-semibold px-3 py-1.5 border border-gold/30 bg-deep/50 backdrop-blur-sm inline-block mb-4">
                        {project.category}
                    </span>
                    <h1 className="font-display text-3xl sm:text-4xl md:text-6xl text-cream font-semibold mb-2">
                        {project.name}
                    </h1>
                    <p className="text-cream/80 flex items-center gap-2 text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {project.location}
                    </p>
                </div>
            </section>

            {/* Details */}
            <section className="section-padding bg-deep">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-16">
                        {/* Main content */}
                        <div className="lg:col-span-2">
                            <h2 className="font-display text-2xl text-cream font-semibold mb-6">About This Project</h2>
                            <p className="text-muted leading-relaxed text-base mb-12">
                                {project.description}
                            </p>

                            {/* Image Gallery */}
                            <h3 className="font-display text-xl text-cream font-semibold mb-6">Gallery</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {images.map((img, i) => (
                                    <motion.button
                                        key={i}
                                        whileHover={{ scale: 1.02 }}
                                        onClick={() => setActiveImage(i)}
                                        className={`aspect-[4/3] overflow-hidden border-2 transition-colors duration-300 ${activeImage === i ? "border-gold" : "border-transparent"
                                            }`}
                                    >
                                        <div
                                            className="w-full h-full bg-cover bg-center hover:scale-110 transition-transform duration-500"
                                            style={{ backgroundImage: `url(${img})`, backgroundColor: '#2a2a2a' }}
                                        />
                                    </motion.button>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div>
                            <div className="bg-charcoal border border-card-border p-6 sm:p-8 lg:sticky lg:top-28">
                                <h3 className="font-display text-lg text-cream font-semibold mb-6">Project Details</h3>
                                <div className="space-y-5">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 border-b border-card-border pb-4">
                                        <span className="text-muted text-sm">Location</span>
                                        <span className="text-cream text-sm font-medium">{project.location}</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 border-b border-card-border pb-4">
                                        <span className="text-muted text-sm">Category</span>
                                        <span className="text-cream text-sm font-medium">{project.category}</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 border-b border-card-border pb-4">
                                        <span className="text-muted text-sm">Architect</span>
                                        <span className="text-cream text-sm font-medium">{project.architect}</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 border-b border-card-border pb-4">
                                        <span className="text-muted text-sm">Year</span>
                                        <span className="text-cream text-sm font-medium">{project.year}</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                                        <span className="text-muted text-sm">Area</span>
                                        <span className="text-cream text-sm font-medium">{project.area}</span>
                                    </div>
                                </div>
                                <Link href="/contact" className="btn-gold w-full justify-center mt-8">
                                    Discuss Similar Project
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
