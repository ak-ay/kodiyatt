"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import TestimonialSlider from "@/components/TestimonialSlider";
import ContactForm from "@/components/ContactForm";
import { company, services, projects, processSteps } from "@/data/company";
import { serviceLandingPages } from "@/data/aeo";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeHeroImage, setActiveHeroImage] = useState(0);
  const heroImages = [
    "/projects/hedge/9.jpg",
    "/projects/wedge/9.jpg",
    "/projects/eclipse/9.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" as const },
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  };

  return (
    <>
      {/* ═══════════ HERO SECTION ═══════════ */}
      <section ref={heroRef} className="relative min-h-[100svh] md:h-screen overflow-hidden">
        {/* Parallax BG */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={heroImages[activeHeroImage]}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroImages[activeHeroImage]})` }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-deep/70 via-deep/50 to-deep" />
        </motion.div>

        {/* Hero content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 min-h-[100svh] flex flex-col justify-center items-center text-center px-5 sm:px-6 pt-28 pb-14 sm:pb-12"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-6"
          >
            <span className="w-8 sm:w-12 h-[1px] bg-gold" />
            <span className="text-gold text-[10px] sm:text-xs tracking-[0.22em] sm:tracking-[0.3em] uppercase font-semibold">
              Est. 2014 &middot; Kerala
            </span>
            <span className="w-8 sm:w-12 h-[1px] bg-gold" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-cream font-semibold leading-[1.12] max-w-5xl"
          >
            Building <span className="text-gradient-gold">Dreams</span>,
            <br />
            Crafting <span className="text-gradient-gold">Legacies</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-cream/90 text-sm sm:text-base md:text-lg max-w-xl mt-5 sm:mt-6 leading-relaxed"
          >
            Premium construction & interior solutions crafted with a decade of
            excellence in Kerala&apos;s architectural landscape.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-10 w-full sm:w-auto sm:justify-center"
          >
            <Link href="/projects" className="btn-gold justify-center w-full sm:w-auto">
              Explore Our Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/contact" className="btn-outline justify-center w-full sm:w-auto">
              Start Your Project
            </Link>
          </motion.div>

          {/* Floating stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="hidden sm:flex mt-10 w-full max-w-3xl justify-center gap-8 md:gap-16"
          >
            {company.stats.slice(0, 3).map((stat, i) => (
              <div key={i} className="text-center">
                <span className="font-display text-2xl md:text-3xl text-gold font-semibold">
                  {stat.value}{stat.suffix}
                </span>
                <span className="block text-cream/75 text-[10px] md:text-xs tracking-wider uppercase mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden sm:block absolute bottom-4 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-5 h-8 border border-cream/20 rounded-full flex justify-center pt-1.5"
            >
              <div className="w-1 h-2 bg-gold rounded-full" />
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.15 }}
            className="grid grid-cols-3 gap-3 sm:hidden mt-7 w-full max-w-sm"
          >
            {company.stats.slice(0, 3).map((stat, i) => (
              <div key={i} className="text-center">
                <span className="font-display text-xl text-gold font-semibold block">
                  {stat.value}{stat.suffix}
                </span>
                <span className="block text-cream/75 text-[10px] tracking-wide uppercase mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════ ABOUT PREVIEW ═══════════ */}
      <section className="section-padding bg-deep">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <SectionHeader
                tag="About Us"
                title="A Decade of Building Excellence"
              />
              <motion.p {...fadeUp} className="text-muted leading-relaxed text-base md:text-lg -mt-8 mb-6">
                {company.about.long}
              </motion.p>
              <motion.div {...fadeUp} className="flex flex-wrap gap-6 mb-8">
                {company.about.values.slice(0, 2).map((v) => (
                  <div key={v.title} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-gold rounded-full mt-2 shrink-0" />
                    <div>
                      <h4 className="text-cream font-semibold text-sm">{v.title}</h4>
                      <p className="text-muted text-sm mt-1">{v.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
              <motion.div {...fadeUp}>
                <Link href="/about" className="btn-outline text-xs">
                  Our Story
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url(/projects/georges-haven/1.png)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/60 to-transparent" />
              </div>
              {/* Floating card */}
              <div className="relative md:absolute mt-4 md:mt-0 md:-bottom-6 md:-left-12 bg-charcoal border border-card-border p-5 md:p-6 max-w-xs">
                <span className="text-gold font-display text-4xl font-semibold">{company.experience}</span>
                <span className="text-cream/85 text-xs tracking-wider uppercase block mt-1">Years of Excellence</span>
                <p className="text-muted text-sm mt-2">Partnering with leading architects across Kerala</p>
              </div>
              {/* Gold accent line */}
              <div className="absolute top-6 -right-3 w-[2px] h-24 bg-gold" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ STATS ═══════════ */}
      <section className="py-20 bg-charcoal border-y border-card-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {company.stats.map((stat, i) => (
              <AnimatedCounter
                key={i}
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
                delay={i * 200}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SERVICES ═══════════ */}
      <section id="services" className="section-padding bg-deep">
        <div className="container-custom">
          <SectionHeader
            tag="Our Services"
            title="Comprehensive Building Solutions"
            description="From concept to completion, we offer end-to-end construction and design services tailored to your vision."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.id} {...service} index={i} />
            ))}
          </div>
          <motion.div
            {...fadeUp}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10"
          >
            {serviceLandingPages.map((page) => (
              <Link
                key={page.slug}
                href={`/${page.slug}`}
                className="border border-card-border bg-charcoal/40 p-5 hover:border-gold/50 transition-colors"
              >
                <span className="text-gold text-xs tracking-[0.2em] uppercase font-semibold">
                  {page.serviceName}
                </span>
                <h3 className="font-display text-lg text-cream font-semibold mt-3">
                  {page.pageTitle}
                </h3>
                <p className="text-muted text-sm mt-3 leading-relaxed">
                  {page.description}
                </p>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ FEATURED PROJECTS (Bento Grid) ═══════════ */}
      <section className="section-padding bg-charcoal">
        <div className="container-custom">
          <SectionHeader
            tag="Featured Projects"
            title="Signature Works"
            description="Each project is a testament to our commitment to architectural excellence and meticulous craftsmanship."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Large card */}
            <div className="md:col-span-2 md:row-span-2">
              <ProjectCard
                {...projects[0]}
                image={projects[0].images[0]}
                className="h-full min-h-[360px] sm:min-h-[420px] md:min-h-[560px]"
              />
            </div>
            {/* Smaller cards */}
            {projects.slice(1, 3).map((p) => (
              <ProjectCard key={p.slug} {...p} image={p.images[0]} className="min-h-[240px] sm:min-h-[280px]" />
            ))}
            {projects.slice(3, 5).map((p) => (
              <ProjectCard key={p.slug} {...p} image={p.images[0]} className="min-h-[240px] sm:min-h-[280px]" />
            ))}
          </div>
          <motion.div {...fadeUp} className="text-center mt-12">
            <Link href="/projects" className="btn-outline">
              View All Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ PROCESS TIMELINE ═══════════ */}
      <section className="section-padding bg-deep">
        <div className="container-custom">
          <SectionHeader
            tag="Our Process"
            title="From Vision to Reality"
            description="A transparent, collaborative journey that turns your dream project into a built masterpiece."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative group"
              >
                {/* Connection line */}
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-40px)] h-[1px] bg-card-border" />
                )}
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-card-border group-hover:border-gold flex items-center justify-center transition-colors duration-500">
                    <span className="font-display text-xl text-gold">{step.number}</span>
                  </div>
                  <h3 className="font-display text-xl text-cream font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ TESTIMONIALS ═══════════ */}
      <section className="section-padding bg-charcoal">
        <div className="container-custom">
          <SectionHeader
            tag="Testimonials"
            title="What Our Clients Say"
            center
          />
          <TestimonialSlider />
        </div>
      </section>

      {/* ═══════════ CTA BANNER ═══════════ */}
      <section className="relative py-20 sm:py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{ backgroundImage: "url(/projects/wedge/1.jpg)" }}
        />
        <div className="absolute inset-0 bg-deep/85" />
        <div className="relative z-10 container-custom text-center">
          <motion.div {...fadeUp}>
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">
              Start Your Journey
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-cream font-semibold mt-4 mb-6 max-w-3xl mx-auto leading-tight">
              Ready to Build Your Dream Home?
            </h2>
            <p className="text-cream/90 max-w-xl mx-auto mb-10">
              Let&apos;s turn your vision into reality. Schedule a free consultation with our expert team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-gold">
                Schedule Consultation
              </Link>
              <a href={`tel:${company.contact.phones[0]}`} className="btn-outline">
                Call {company.contact.phones[0]}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ CONTACT SECTION ═══════════ */}
      <section className="section-padding bg-deep">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
            <div>
              <SectionHeader
                tag="Get in Touch"
                title="Let's Discuss Your Project"
              />
              <div className="space-y-6 -mt-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-cream font-semibold text-sm mb-1">Our Office</h4>
                    <p className="text-muted text-sm">{company.contact.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-cream font-semibold text-sm mb-1">Phone</h4>
                    {company.contact.phones.map((p) => (
                      <a key={p} href={`tel:${p}`} className="text-muted text-sm hover:text-gold transition-colors block">
                        {p}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-cream font-semibold text-sm mb-1">Email</h4>
                    {company.contact.emails.map((e) => (
                      <a key={e} href={`mailto:${e}`} className="text-muted text-sm hover:text-gold transition-colors block">
                        {e}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              {/* Map */}
              <div className="mt-8 aspect-video bg-charcoal border border-card-border overflow-hidden">
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
              </div>
            </div>
            <div>
              <div className="bg-charcoal border border-card-border p-6 sm:p-8 md:p-10 lg:sticky lg:top-28">
                <h3 className="font-display text-2xl text-cream font-semibold mb-2">Send Us a Message</h3>
                <p className="text-muted text-sm mb-8">Fill in the details below and we&apos;ll get back to you within 24 hours.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
