"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";
import { company } from "@/data/company";

export default function ContactContent() {
    return (
        <>
            {/* Hero */}
            <section className="pt-28 sm:pt-32 pb-14 sm:pb-16 bg-deep">
                <div className="container-custom px-6 md:px-12">
                    <SectionHeader
                        tag="Contact Us"
                        title="Let's Start Building"
                        description="Have a project in mind? We'd love to hear from you. Reach out to us and let's create something extraordinary together."
                    />
                </div>
            </section>

            {/* Contact Content */}
            <section className="section-padding !pt-0 bg-deep">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12">
                        {/* Left side - Info + Map */}
                        <div className="lg:col-span-2">
                            <div className="space-y-8">
                                {/* Contact cards */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                className="p-5 sm:p-6 border border-card-border bg-charcoal/30 group hover:border-gold/30 transition-colors duration-500"
                                >
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="font-display text-lg text-cream font-semibold">Visit Us</h3>
                                    </div>
                                    <p className="text-muted text-sm leading-relaxed ml-14">{company.contact.address}</p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                className="p-5 sm:p-6 border border-card-border bg-charcoal/30 group hover:border-gold/30 transition-colors duration-500"
                                >
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <h3 className="font-display text-lg text-cream font-semibold">Call Us</h3>
                                    </div>
                                    <div className="ml-14 space-y-1">
                                        {company.contact.phones.map((phone) => (
                                            <a
                                                key={phone}
                                                href={`tel:${phone}`}
                                                className="text-muted text-sm hover:text-gold transition-colors block break-all"
                                            >
                                                {phone}
                                            </a>
                                        ))}
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                className="p-5 sm:p-6 border border-card-border bg-charcoal/30 group hover:border-gold/30 transition-colors duration-500"
                                >
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <h3 className="font-display text-lg text-cream font-semibold">Email Us</h3>
                                    </div>
                                    <div className="ml-14 space-y-1">
                                        {company.contact.emails.map((email) => (
                                            <a
                                                key={email}
                                                href={`mailto:${email}`}
                                                className="text-muted text-sm hover:text-gold transition-colors block break-all"
                                            >
                                                {email}
                                            </a>
                                        ))}
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                className="p-5 sm:p-6 border border-card-border bg-charcoal/30 group hover:border-gold/30 transition-colors duration-500"
                                >
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="font-display text-lg text-cream font-semibold">Working Hours</h3>
                                    </div>
                                    <div className="ml-14">
                                        <p className="text-muted text-sm">Monday – Saturday: 9:00 AM – 6:00 PM</p>
                                        <p className="text-muted text-sm">Sunday: Closed</p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Map */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="mt-8 aspect-video bg-charcoal border border-card-border overflow-hidden"
                            >
                                <iframe
                                    src={company.contact.mapEmbedUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Kodiyattu Builders Location"
                                />
                            </motion.div>
                        </div>

                        {/* Right side - Form */}
                        <div className="lg:col-span-3">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-charcoal border border-card-border p-6 sm:p-8 md:p-12 lg:sticky lg:top-28"
                            >
                                <h2 className="font-display text-2xl md:text-3xl text-cream font-semibold mb-2">
                                    Tell Us About Your Project
                                </h2>
                                <p className="text-muted text-sm mb-10">
                                    Fill in the details below and our team will reach out within 24 hours to discuss your vision.
                                </p>
                                <ContactForm />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
