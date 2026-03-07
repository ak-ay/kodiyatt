"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { company } from "@/data/company";

const timeline = [
    { year: "2014", title: "Founded", description: "Kodiyattu Builders was established in Chengannur with a vision to redefine construction quality in Kerala." },
    { year: "2016", title: "First Major Project", description: "Completed our first signature residential project, setting the standard for future builds." },
    { year: "2018", title: "Interior Division", description: "Expanded services to include full interior design solutions, offering end-to-end project delivery." },
    { year: "2020", title: "Architect Partnerships", description: "Partnered with Mindspark Architects and Ninan Philip & Associates for premium design collaboration." },
    { year: "2022", title: "Commercial Expansion", description: "Extended expertise to commercial projects including the Simhasana Palli church in Thiruvalla." },
    { year: "2024", title: "Portfolio Milestone", description: "Completed 50+ projects across Kerala, earning recognition for signature builds like HEDGE, WEDGE & ECLIPSE." },
];

const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" as const },
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
};

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 bg-deep overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/projects/hedge/1.jpg)" }} />
                </div>
                <div className="container-custom px-6 md:px-12 relative z-10">
                    <SectionHeader
                        tag="Our Story"
                        title="Building Kerala's Future, One Brick at a Time"
                        description="With a decade of dedication, we've grown from a small construction firm to one of Kerala's most trusted builders — driven by quality, innovation, and an unwavering client-first approach."
                    />
                </div>
            </section>

            {/* About Content */}
            <section className="section-padding bg-charcoal">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
                        <motion.div {...fadeUp}>
                            <h2 className="font-display text-3xl md:text-4xl text-cream font-semibold mb-6 leading-tight">
                                Who We Are
                            </h2>
                            <p className="text-muted leading-relaxed mb-6">{company.about.long}</p>
                            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-8">
                                {company.stats.map((stat, i) => (
                                    <div key={i} className="text-center p-4 sm:p-6 border border-card-border">
                                        <span className="font-display text-3xl text-gold font-semibold block">
                                            {stat.value}{stat.suffix}
                                        </span>
                                        <span className="text-muted text-xs tracking-wider uppercase mt-1 block">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="aspect-[4/5] overflow-hidden relative"
                        >
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/projects/eclipse/1.jpg)" }} />
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-padding bg-deep">
                <div className="container-custom">
                    <SectionHeader tag="Purpose" title="Mission & Vision" center />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto -mt-4">
                        <motion.div {...fadeUp} className="p-6 sm:p-8 border border-card-border bg-charcoal/30">
                            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="font-display text-xl text-cream font-semibold mb-3">Our Mission</h3>
                            <p className="text-muted text-sm leading-relaxed">{company.about.mission}</p>
                        </motion.div>
                        <motion.div {...fadeUp} className="p-6 sm:p-8 border border-card-border bg-charcoal/30">
                            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="font-display text-xl text-cream font-semibold mb-3">Our Vision</h3>
                            <p className="text-muted text-sm leading-relaxed">{company.about.vision}</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section-padding bg-charcoal">
                <div className="container-custom">
                    <SectionHeader tag="Values" title="What We Stand For" center />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {company.about.values.map((value, i) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="text-center p-6 sm:p-8 border border-card-border hover:border-gold/30 transition-colors duration-500 group"
                            >
                                <div className="w-3 h-3 bg-gold rounded-full mx-auto mb-6 group-hover:scale-125 transition-transform duration-300" />
                                <h4 className="font-display text-lg text-cream font-semibold mb-2">{value.title}</h4>
                                <p className="text-muted text-sm leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="section-padding bg-deep">
                <div className="container-custom">
                    <SectionHeader tag="Journey" title="Our Timeline" center />
                    <div className="max-w-3xl mx-auto">
                        {timeline.map((item, i) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="flex flex-col md:flex-row gap-3 md:gap-6 mb-10 md:mb-12 last:mb-0"
                            >
                                {/* Year */}
                                <div className="shrink-0 md:w-20 md:text-right">
                                    <span className="font-display text-lg text-gold font-semibold">{item.year}</span>
                                </div>
                                {/* Line */}
                                <div className="hidden md:flex flex-col items-center">
                                    <div className="w-3 h-3 bg-gold rounded-full shrink-0" />
                                    {i < timeline.length - 1 && <div className="w-[1px] h-full bg-card-border" />}
                                </div>
                                {/* Content */}
                                <div className="pb-2 md:pb-8">
                                    <h4 className="font-display text-lg text-cream font-semibold mb-2">{item.title}</h4>
                                    <p className="text-muted text-sm leading-relaxed">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners */}
            <section className="py-20 bg-charcoal border-y border-card-border">
                <div className="container-custom text-center">
                    <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">
                        Partner Architects
                    </span>
                    <div className="flex flex-wrap justify-center gap-12 mt-8">
                        {company.partners.map((partner) => (
                            <motion.div
                                key={partner}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-cream/40 hover:text-cream font-display text-xl md:text-2xl transition-colors duration-300 cursor-default"
                            >
                                {partner}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
