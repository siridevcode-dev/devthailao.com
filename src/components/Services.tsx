import type { Locale } from '@/i18n-config';

interface ServicesProps {
    dictionary: {
        services: {
            title: string;
            subtitle: string;
            items: {
                [key: string]: { title: string; description: string };
            };
        };
    };
}

const tabIcons = {
    webDesign: '🎨',
    mobileContent: '📱',
    appDevelop: '💻',
    customRequest: '🛠️',
};

export default function Services({ dictionary }: ServicesProps) {

    return (
        <section id="services" className="services">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title gradient-text">{dictionary.services.title}</h2>
                    <p className="section-subtitle">{dictionary.services.subtitle}</p>
                </div>

                <div className="services-grid">
                    {Object.entries(dictionary.services.items).map(([key, item]) => (
                        <div key={key} className="service-item">
                            <div className="service-icon">
                                {tabIcons[key as keyof typeof tabIcons]}
                            </div>
                            <div className="service-content">
                                <h3 className="service-title">{item.title}</h3>
                                <p className="service-description">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
