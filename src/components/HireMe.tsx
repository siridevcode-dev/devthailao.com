'use client';

import { useState } from 'react';

interface HireMeProps {
    dictionary: {
        contact: {
            title: string;
            subtitle: string;
            cta: string;
            phone: string;
            line: string;
            email: string;
            close: string;
        };
    };
}

export default function HireMe({ dictionary }: HireMeProps) {
    const [isOpen, setIsOpen] = useState(false);

    const contactInfo = {
        whatsapp: 'https://wa.me/8562059559875',
        line: 'https://line.me/ti/p/BU6WjCUBRG',
        lineId: 'BU6WjCUBRG'
    };

    return (
        <>
            {/* Floating Hire Me Button */}
            <button
                className="hire-me-btn"
                onClick={() => setIsOpen(true)}
                aria-label="Hire Me"
            >
                <span className="hire-me-icon">💼</span>
                <span className="hire-me-text">{dictionary.contact.cta}</span>
            </button>

            {/* Contact Modal */}
            {isOpen && (
                <div className="modal-overlay" onClick={() => setIsOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="modal-close"
                            onClick={() => setIsOpen(false)}
                            aria-label={dictionary.contact.close}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="modal-header">
                            <h2 className="modal-title gradient-text">{dictionary.contact.title}</h2>
                            <p className="modal-subtitle">{dictionary.contact.subtitle}</p>
                        </div>

                        <div className="contact-cards">
                            <a href={contactInfo.line} target="_blank" rel="noopener noreferrer" className="contact-card">
                                <div className="contact-icon line-icon">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                                    </svg>
                                </div>
                                <div className="contact-info">
                                    <span className="contact-label">{dictionary.contact.line}</span>
                                    <span className="contact-value">DevThaiLao</span>
                                </div>
                            </a>

                            <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="contact-card">
                                <div className="contact-icon phone-icon">📞</div>
                                <div className="contact-info">
                                    <span className="contact-label">{dictionary.contact.phone}</span>
                                    <span className="contact-value">WhatsApp</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
