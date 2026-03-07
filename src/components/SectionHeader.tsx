"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
    tag: string;
    title: string;
    description?: string;
    center?: boolean;
    light?: boolean;
}

export default function SectionHeader({ tag, title, description, center = false, light = false }: SectionHeaderProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className={`mb-16 ${center ? "text-center" : ""}`}
        >
            <div className={`flex items-center gap-4 mb-4 ${center ? "justify-center" : ""}`}>
                <span className="block w-12 h-[2px] bg-gold" />
                <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">
                    {tag}
                </span>
            </div>
            <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-semibold ${light ? "text-charcoal" : "text-cream"} leading-tight`}>
                {title}
            </h2>
            {description && (
                <p className={`mt-4 text-base md:text-lg max-w-2xl leading-relaxed ${light ? "text-charcoal/60" : "text-muted"} ${center ? "mx-auto" : ""}`}>
                    {description}
                </p>
            )}
        </motion.div>
    );
}
