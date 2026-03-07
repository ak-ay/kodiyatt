"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
    value: string;
    label: string;
    suffix?: string;
    delay?: number;
}

export default function AnimatedCounter({ value, label, suffix = "", delay = 0 }: AnimatedCounterProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [count, setCount] = useState(0);
    const numericValue = parseInt(value.replace(/\D/g, ""));

    useEffect(() => {
        if (!isInView) return;
        const timeout = setTimeout(() => {
            const duration = 2000;
            const steps = 60;
            const increment = numericValue / steps;
            let current = 0;
            const interval = setInterval(() => {
                current += increment;
                if (current >= numericValue) {
                    setCount(numericValue);
                    clearInterval(interval);
                } else {
                    setCount(Math.floor(current));
                }
            }, duration / steps);
            return () => clearInterval(interval);
        }, delay);
        return () => clearTimeout(timeout);
    }, [isInView, numericValue, delay]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: delay / 1000 }}
            className="text-center"
        >
            <div className="font-display text-4xl md:text-5xl lg:text-6xl text-gold font-semibold">
                {count}
                {value.includes("+") ? "+" : ""}
                {suffix}
            </div>
            <p className="text-muted text-sm tracking-wider uppercase mt-2">{label}</p>
        </motion.div>
    );
}
