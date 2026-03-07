"use client";

import { motion } from "framer-motion";

interface ServiceCardProps {
    number: string;
    title: string;
    description: string;
    icon: string;
    index: number;
}

export default function ServiceCard({ number, title, description, icon, index }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative p-8 border border-card-border bg-card/30 hover:border-gold/40 transition-all duration-500 overflow-hidden"
        >
            {/* Background glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Number watermark */}
            <span className="absolute top-4 right-4 font-display text-6xl text-card-border/50 group-hover:text-gold/10 transition-colors duration-500 select-none">
                {number}
            </span>

            {/* Content */}
            <div className="relative z-10">
                <span className="text-2xl mb-4 block">{icon}</span>
                <h3 className="font-display text-xl text-cream font-semibold mb-3 group-hover:text-gold transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                    {description}
                </p>

                {/* Arrow */}
                <div className="flex items-center gap-2 text-gold opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    <span className="text-xs tracking-wider uppercase">Learn More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
            </div>
        </motion.div>
    );
}
