"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectCardProps {
    slug: string;
    name: string;
    location: string;
    category: string;
    image?: string;
    imageIndex?: number;
    className?: string;
}

export default function ProjectCard({ slug, name, location, category, image, imageIndex = 0, className = "" }: ProjectCardProps) {
    const fallbackImage = `/projects/${slug}/${imageIndex + 1}.jpg`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className={`group relative overflow-hidden rounded-sm ${className}`}
        >
            <Link href={`/projects/${slug}`} className="block relative w-full h-full min-h-[260px] sm:min-h-[300px] md:min-h-[400px]">
                {/* Background image */}
                <div className="absolute inset-0 bg-charcoal">
                    <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{
                            backgroundImage: `url(${image || fallbackImage})`,
                            backgroundColor: '#2a2a2a',
                        }}
                    />
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep/95 via-deep/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Category badge */}
                <div className="absolute top-4 left-4 z-10">
                    <span className="text-gold text-[10px] tracking-[0.2em] uppercase font-semibold px-3 py-1.5 border border-gold/30 bg-deep/50 backdrop-blur-sm">
                        {category}
                    </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-10">
                    <h3 className="font-display text-xl md:text-2xl text-cream font-semibold mb-1 group-hover:text-gold transition-colors duration-300">
                        {name}
                    </h3>
                    <p className="text-muted text-sm flex items-center gap-2">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {location}
                    </p>

                    {/* Hover arrow */}
                    <div className="mt-4 flex items-center gap-2 text-gold text-sm opacity-100 md:opacity-0 translate-y-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500">
                        <span className="tracking-wider uppercase text-xs">View Project</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
