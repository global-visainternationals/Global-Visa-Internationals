import React from "react";
import Link from "next/link"; // For internal navigation
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <>
            {/* SEO Structured Data for Business */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Global Visa Internationals",
                        "url": "https://globalvisainternationals.com",
                        "logo": "https://globalvisainternationals.com/logo.png",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "G F9 Business Point, 137 Brigade Road, Next to Brigade Tower",
                            "addressLocality": "Bangalore",
                            "postalCode": "560025",
                            "addressCountry": "IN"
                        },
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+91-7022213466",
                            "contactType": "customer service"
                        },
                        "sameAs": [
                            "http://linkedin.com/company/globalvisainternationals",
                            "https://www.youtube.com/@GLOBALVISAINTERNATIONALS",
                            "https://x.com/GLOBALVISA1505",
                            "https://instagram.com/globalvisa_internationals/",
                            "https://facebook.com/globalvisa.globalvisa"
                        ]
                    }),
                }}
            />

            {/* Floating Icons */}
            <section>
                <a href="tel:+917022213466" aria-label="Call Global Visa">
                    <img src="/images/phone.png" alt="Call" className={styles.callIcon} />
                </a>
                <a href="https://wa.me/+917022213466" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Global Visa">
                    <img src="/images/whatsapp.png" alt="WhatsApp" className={styles.whatsappIcon} />
                </a>
            </section>

            {/* Footer Section */}
            <footer className={styles.Footer}>
                <div className={styles.footerContent}>
                    <p>&copy; {new Date().getFullYear()} Global Visa Internationals. All Rights Reserved.</p>

                    

                    {/* Contact and Address Info */}
                    <address className={styles.footerContact}>
                        <p>
                            <a
                                className={styles.text}
                                href="https://www.google.com/maps/dir//Global+Visa+Internationals+GF-9,+Business+Point+Brigade+Rd,+next+to+Brigade+Tower,+Shanthala+Nagar,+Ashok+Nagar+Bengaluru,+Karnataka+560025/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <strong>Address:</strong> G F9 Business Point, 137 Brigade Road, Next to Brigade Tower, Bangalore, 560025, Karnataka
                            </a>
                        </p>
                        <p>
                            <a className={styles.text} href="tel:080-4971-6272">
                                <strong>Land Line:</strong> ☎️ 080-4971-6272
                            </a> |{" "}
                            <a className={styles.text} href="tel:+917022213466">
                                <strong>Phone:</strong> 📞 +91-7022213466
                            </a>
                        </p>
                        <p>
                            <a className={styles.text} href="mailto:operations@globalvisa-internationals.com">
                                <strong>Mail:</strong> 📧 operations@globalvisa-internationals.com
                            </a>
                        </p>
                    </address>

                    {/* Policy Links */}
                    <div style={{ marginTop: "15px" }}>
                        <Link href="/privacy-policy" className={styles.text}>Privacy Policy</Link> |{" "}
                        <Link href="/terms-and-conditions" className={styles.text}>Terms & Conditions</Link>
                    </div>
                </div>
                <div className={styles.socialIcons}>
                        <a href="http://linkedin.com/company/globalvisainternationals" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <img className={styles.footerImg} src="/images/linkedInB.png" alt="LinkedIn" />
                        </a>
                        <a href="https://www.youtube.com/@GLOBALVISAINTERNATIONALS" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <img className={styles.footerImg} src="/images/youtube.png" alt="YouTube" />
                        </a>
                        <a href="https://x.com/GLOBALVISA1505" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <img className={styles.footerImg} src="/images/twitter.png" alt="Twitter" />
                        </a>
                        <a href="https://instagram.com/globalvisa_internationals/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <img className={styles.footerImg} src="/images/instagram.png" alt="Instagram" />
                        </a>
                        <a href="https://facebook.com/globalvisa.globalvisa" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <img className={styles.footerImg} src="/images/facebook.png" alt="Facebook" />
                        </a>
                    </div>
            </footer>
        </>
    );
}
