interface StatsProps {
    dictionary: {
        stats: {
            years: string;
            projects: string;
            clients: string;
        };
    };
}

const statsData = [
    { key: 'years', value: '17', suffix: '+' },
    { key: 'projects', value: '928', suffix: '+' },
    { key: 'clients', value: '1.8', suffix: 'K' },
];

export default function Stats({ dictionary }: StatsProps) {
    return (
        <section className="stats">
            <div className="container">
                <div className="stats-grid">
                    {statsData.map((stat) => (
                        <div key={stat.key} className="stat-item">
                            <div className="stat-value">
                                {stat.value}
                                <span className="stat-suffix">{stat.suffix}</span>
                            </div>
                            <div className="stat-label">
                                {dictionary.stats[stat.key as keyof typeof dictionary.stats]}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
