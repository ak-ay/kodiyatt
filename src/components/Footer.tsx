import Link from "next/link";
import Image from "next/image";
import { bestConstructionCompanyPages } from "@/data/aeo";
import { company, navLinks } from "@/data/company";

export default function Footer() {
    return (
        <footer className="bg-deep border-t border-card-border">
            <div className="container-custom px-6 md:px-12 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 group mb-6">
                            <Image
                                src="/assets/logo.png"
                                alt="Kodiyattu Builders logo"
                                width={42}
                                height={42}
                                className="w-10 h-10 object-contain"
                            />
                            <div>
                                <span className="text-cream font-display text-lg font-semibold tracking-wide">KODIYATTU</span>
                                <span className="block text-gold text-[10px] tracking-[0.25em] uppercase -mt-1">Builders</span>
                            </div>
                        </Link>
                        <p className="text-muted text-sm leading-relaxed max-w-xs">
                            {company.about.short}
                        </p>
                        {/* Social icons */}
                        <div className="flex gap-4 mt-6">
                            <a href={company.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-card-border flex items-center justify-center text-muted hover:text-gold hover:border-gold transition-all duration-300">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                            <a href={company.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-card-border flex items-center justify-center text-muted hover:text-gold hover:border-gold transition-all duration-300">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.738-.9 10.125-5.864 10.125-11.854z" /></svg>
                            </a>
                            <a href={company.social.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-card-border flex items-center justify-center text-muted hover:text-gold hover:border-gold transition-all duration-300">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-gold text-xs tracking-[0.2em] uppercase font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-muted hover:text-cream text-sm transition-colors duration-300 hover-line">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-gold text-xs tracking-[0.2em] uppercase font-semibold mb-6">Services</h4>
                        <ul className="space-y-3">
                            {["Architectural Design", "Construction", "Interior Design", "Landscape Design", "Renovation", "Consultation"].map((s) => (
                                <li key={s}>
                                    <span className="text-muted text-sm">{s}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Location Searches */}
                    <div>
                        <h4 className="text-gold text-xs tracking-[0.2em] uppercase font-semibold mb-6">Kerala Locations</h4>
                        <ul className="space-y-3">
                            {bestConstructionCompanyPages.map((page) => (
                                <li key={page.slug}>
                                    <Link
                                        href={`/${page.slug}`}
                                        className="text-muted hover:text-cream text-sm transition-colors duration-300 hover-line"
                                    >
                                        {page.serviceName}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-gold text-xs tracking-[0.2em] uppercase font-semibold mb-6">Contact</h4>
                        <div className="space-y-4 text-sm text-muted">
                            <div>
                                <p className="text-cream/80 mb-1">Phone</p>
                                <a href="tel:+919447796385" className="hover:text-gold transition-colors break-all block">+91 9447796385</a>
                                <a href="tel:+919526450799" className="hover:text-gold transition-colors break-all block">+91 9526450799</a>
                            </div>
                            <div>
                                <p className="text-cream/80 mb-1">Email</p>
                                <a href={`mailto:${company.contact.emails[0]}`} className="hover:text-gold transition-colors break-all">{company.contact.emails[0]}</a>
                            </div>
                            <div>
                                <p className="text-cream/80 mb-1">Address</p>
                                <p>Puthencavu PO, Chengannur<br />Kerala, India</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-16 pt-8 border-t border-card-border flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-muted text-xs">
                        © {new Date().getFullYear()} Kodiyattu Builders. All rights reserved.
                    </p>
                    <p className="text-muted text-xs">
                        Crafted with precision in Kerala, India
                    </p>
                </div>
            </div>
        </footer>
    );
}
