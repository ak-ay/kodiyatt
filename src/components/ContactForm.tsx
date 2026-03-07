"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { useState } from "react";

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    email: z.string().email("Please enter a valid email"),
    projectType: z.string().min(1, "Please select a project type"),
    budget: z.string().min(1, "Please select a budget range"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Form data:", data);
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 5000);
    };

    const inputClasses =
        "w-full bg-charcoal/50 border border-card-border text-cream px-4 py-3.5 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30 transition-all duration-300 placeholder:text-muted/50 font-body";
    const labelClasses = "text-cream/80 text-xs tracking-wider uppercase font-semibold mb-2 block";
    const errorClasses = "text-red-400 text-xs mt-1";

    if (submitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
            >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="font-display text-2xl text-cream mb-2">Thank You</h3>
                <p className="text-muted">We&apos;ll get back to you shortly.</p>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className={labelClasses}>Full Name</label>
                    <input
                        {...register("name")}
                        className={inputClasses}
                        placeholder="Your full name"
                    />
                    {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
                </div>
                <div>
                    <label className={labelClasses}>Phone Number</label>
                    <input
                        {...register("phone")}
                        className={inputClasses}
                        placeholder="+91 XXXXX XXXXX"
                    />
                    {errors.phone && <p className={errorClasses}>{errors.phone.message}</p>}
                </div>
            </div>

            <div>
                <label className={labelClasses}>Email Address</label>
                <input
                    {...register("email")}
                    type="email"
                    className={inputClasses}
                    placeholder="your@email.com"
                />
                {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className={labelClasses}>Project Type</label>
                    <select {...register("projectType")} className={inputClasses}>
                        <option value="">Select project type</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="interior">Interior Design</option>
                        <option value="renovation">Renovation</option>
                        <option value="landscape">Landscape</option>
                        <option value="other">Other</option>
                    </select>
                    {errors.projectType && <p className={errorClasses}>{errors.projectType.message}</p>}
                </div>
                <div>
                    <label className={labelClasses}>Budget Range</label>
                    <select {...register("budget")} className={inputClasses}>
                        <option value="">Select budget range</option>
                        <option value="under-25l">Under ₹25 Lakhs</option>
                        <option value="25l-50l">₹25 - 50 Lakhs</option>
                        <option value="50l-1cr">₹50 Lakhs - 1 Crore</option>
                        <option value="1cr-2cr">₹1 - 2 Crore</option>
                        <option value="above-2cr">Above ₹2 Crore</option>
                    </select>
                    {errors.budget && <p className={errorClasses}>{errors.budget.message}</p>}
                </div>
            </div>

            <div>
                <label className={labelClasses}>Message</label>
                <textarea
                    {...register("message")}
                    className={`${inputClasses} resize-none`}
                    rows={5}
                    placeholder="Tell us about your project vision..."
                />
                {errors.message && <p className={errorClasses}>{errors.message.message}</p>}
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="btn-gold w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? (
                    <span className="flex items-center gap-2">
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                    </span>
                ) : (
                    "Send Message"
                )}
            </button>
        </form>
    );
}
