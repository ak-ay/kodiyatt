"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/company";

export default function TestimonialSlider() {
    const [current, setCurrent] = useState(0);

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [next]);

    return (
        <div className="relative max-w-3xl mx-auto text-center px-2 sm:px-0">
            {/* Gold quote mark */}
            <div className="text-gold/20 text-6xl sm:text-8xl font-display absolute -top-4 sm:-top-8 left-1/2 -translate-x-1/2 select-none">
                &ldquo;
            </div>

            <div className="min-h-[230px] sm:min-h-[200px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="px-6"
                    >
                        <p className="font-display text-lg sm:text-xl md:text-2xl text-cream/90 italic leading-relaxed mb-8">
                            &ldquo;{testimonials[current].text}&rdquo;
                        </p>
                        <div>
                            <p className="text-gold font-semibold tracking-wider uppercase text-sm">
                                {testimonials[current].name}
                            </p>
                            <p className="text-muted text-sm mt-1">{testimonials[current].location}</p>
                            {/* Star rating */}
                            <div className="flex justify-center gap-1 mt-3">
                                {[...Array(testimonials[current].rating)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`testimonial-dot ${i === current ? "active" : ""}`}
                        aria-label={`Go to testimonial ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
