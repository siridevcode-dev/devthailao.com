'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface NavbarProps {
    lang: string;
    dictionary: {
        nav: {
            home: string;
            services: string;
            portfolio: string;
            about: string;
            contact: string;
        };
        language: {
            en: string;
            th: string;
            lo: string;
        };
    };
}

const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'th', name: 'ไทย', flag: '🇹🇭' },
    { code: 'lo', name: 'ລາວ', flag: '🇱🇦' },
];

export default function Navbar({ lang, dictionary }: NavbarProps) {
    const pathname = usePathname();
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const currentLang = languages.find((l) => l.code === lang) || languages[0];

    const switchLanguage = (newLang: string) => {
        const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
        window.location.href = newPath || `/${newLang}`;
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link href={`/${lang}`} className="logo">
                    <img src="/logo.png" alt="Devthailao Logo" className="logo-img" />
                    <span className="logo-text">Devthailao</span>
                </Link>

                <div className={`nav-links ${isMobileOpen ? 'active' : ''}`}>
                    <Link href={`/${lang}`} className="nav-link">{dictionary.nav.home}</Link>
                    <Link href={`/${lang}#services`} className="nav-link">{dictionary.nav.services}</Link>
                    <Link href={`/${lang}#skills`} className="nav-link">Skills</Link>
                    <Link href={`/${lang}#team`} className="nav-link">{dictionary.nav.about}</Link>
                    <Link href={`/${lang}#portfolio`} className="nav-link">{dictionary.nav.portfolio}</Link>
                </div>

                <div className="nav-actions">
                    <div className="language-switcher">
                        <button
                            className="lang-btn"
                            onClick={() => setIsLangOpen(!isLangOpen)}
                        >
                            <span>{currentLang.flag}</span>
                            <span>{currentLang.name}</span>
                            <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {isLangOpen && (
                            <div className="lang-dropdown">
                                {languages.map((language) => (
                                    <button
                                        key={language.code}
                                        className={`lang-option ${language.code === lang ? 'active' : ''}`}
                                        onClick={() => {
                                            switchLanguage(language.code);
                                            setIsLangOpen(false);
                                        }}
                                    >
                                        <span>{language.flag}</span>
                                        <span>{language.name}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <button
                        className="mobile-toggle"
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
