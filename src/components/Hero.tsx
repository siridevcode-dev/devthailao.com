interface HeroProps {
    dictionary: {
        hero: {
            greeting: string;
            name: string;
            title: string;
            description: string;
            cta: string;
        };
    };
}

export default function Hero({ dictionary }: HeroProps) {
    return (
        <section className="hero">
            <div className="hero-background">
                <div className="hero-bg-img-wrapper">
                    <img src="/hero-main.jpg" alt="Background" className="hero-bg-img" />
                    <div className="hero-overlay"></div>
                </div>
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="grid-overlay"></div>
            </div>

            <div className="hero-content centered">
                <div className="hero-text">
                    <p className="hero-greeting">{dictionary.hero.greeting}</p>
                    <h1 className="hero-title">
                        <span className="hero-name">{dictionary.hero.name}</span>
                        <span className="hero-role gradient-text">{dictionary.hero.title}</span>
                    </h1>
                    <p className="hero-description">{dictionary.hero.description}</p>
                    <div className="hero-actions">
                        <a href="#portfolio" className="btn btn-primary">
                            {dictionary.hero.cta}
                            <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
