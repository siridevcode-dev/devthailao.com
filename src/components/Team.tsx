
interface TeamProps {
    dictionary: {
        about: {
            title: string;
            subtitle: string;
            team: {
                thai: {
                    name: string;
                    jobTitle: string;
                    role: string;
                    description: string;
                    image?: string;
                };
                lao: {
                    name: string;
                    jobTitle: string;
                    role: string;
                    description: string;
                    image?: string;
                };
            };

        };
    };
};

export default function Team({ dictionary }: TeamProps) {
    return (
        <section id="team" className="team-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title gradient-text">{dictionary.about.title}</h2>
                    <p className="section-subtitle">{dictionary.about.subtitle}</p>
                </div>

                <div className="team-grid">
                    {/* Thai Developer */}
                    <div className="team-card">
                        <div className="team-avatar thai-avatar">
                            {dictionary.about.team.thai.image && (
                                /* eslint-disable-next-line @next/next/no-img-element */
                                <img src={dictionary.about.team.thai.image} alt={dictionary.about.team.thai.name} className="avatar-img" />
                            )}
                            <div className="avatar-glow"></div>
                        </div>
                        <h3 className="team-name">{dictionary.about.team.thai.name}</h3>
                        <p className="team-role text-[var(--text-secondary)] mb-2 font-semibold">{dictionary.about.team.thai.jobTitle}</p>
                        <p className="team-role gradient-text">{dictionary.about.team.thai.role}</p>
                        <p className="team-description">{dictionary.about.team.thai.description}</p>
                    </div>

                    {/* Lao Developer */}
                    <div className="team-card">
                        <div className="team-avatar lao-avatar">
                            {dictionary.about.team.lao.image && (
                                /* eslint-disable-next-line @next/next/no-img-element */
                                <img src={dictionary.about.team.lao.image} alt={dictionary.about.team.lao.name} className="avatar-img" />
                            )}
                            <div className="avatar-glow"></div>
                        </div>
                        <h3 className="team-name">{dictionary.about.team.lao.name}</h3>
                        <p className="team-role text-[var(--text-secondary)] mb-2 font-semibold">{dictionary.about.team.lao.jobTitle}</p>
                        <p className="team-role gradient-text">{dictionary.about.team.lao.role}</p>
                        <p className="team-description">{dictionary.about.team.lao.description}</p>
                    </div>
                </div>


            </div>
        </section>
    );
}
