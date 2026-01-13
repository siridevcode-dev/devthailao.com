'use client';

interface PortfolioProps {
    dictionary: {
        portfolio: {
            title: string;
            subtitle: string;
            viewProject: string;
        };
    };
}

const projects = [
    {
        "id": 1,
        "title": "mango-eng.com",
        "image": "/images/033f78e3c8588c67.png",
        "color": "#8b5cf6"
    },
    {
        "id": 2,
        "title": "natchafarm2019.com",
        "image": "/images/0d9827f8a53c786b.png",
        "color": "#06b6d4"
    },
    {
        "id": 3,
        "title": "findhomepattaya.com",
        "image": "/images/11968f04cfe118c5.png",
        "color": "#f43f5e"
    },
    {
        "id": 4,
        "title": "pharmanun.com",
        "image": "/images/1a032a2ca689571a.png",
        "color": "#10b981"
    },
    {
        "id": 5,
        "title": "bigzweb.com/rubber",
        "image": "/images/1af3ab12895b4814.png",
        "color": "#f59e0b"
    },
    {
        "id": 6,
        "title": "akmcargo.com",
        "image": "/images/2c4b5d249a6e100b.png",
        "color": "#6366f1"
    },
    {
        "id": 7,
        "title": "pksupplychain.com",
        "image": "/images/2e7cb5df84c3fe6f.png",
        "color": "#ec4899"
    },
    {
        "id": 8,
        "title": "tangpanitanonfoundation.org",
        "image": "/images/31a6b38c02d69b86.png",
        "color": "#14b8a6"
    },
    {
        "id": 9,
        "title": "vistapai.com",
        "image": "/images/3d98d53084b1bec8.png",
        "color": "#f97316"
    },
    {
        "id": 10,
        "title": "samuiweekend.com",
        "image": "/images/4a1db56e521d4ec4.png",
        "color": "#a855f7"
    },
    {
        "id": 11,
        "title": "cdc.dental",
        "image": "/images/4c1b1798612ad09e.png",
        "color": "#8b5cf6"
    },
    {
        "id": 12,
        "title": "docdao.io",
        "image": "/images/4d438d172755f6a2.png",
        "color": "#06b6d4"
    },
    {
        "id": 13,
        "title": "pearlywhite-dental.com",
        "image": "/images/4ef84642e0005307.png",
        "color": "#f43f5e"
    },
    {
        "id": 14,
        "title": "Forbest.co.th",
        "image": "/images/55aabefa3533a35f.png",
        "color": "#10b981"
    },
    {
        "id": 15,
        "title": "w-sathaworn.com",
        "image": "/images/5aec6dcf410e9a38.png",
        "color": "#f59e0b"
    },
    {
        "id": 16,
        "title": "tadathailand.com",
        "image": "/images/5d763ec76fe147c1.png",
        "color": "#6366f1"
    },
    {
        "id": 17,
        "title": "phairohsakool.com",
        "image": "/images/631c60fa6f9b2a62.png",
        "color": "#ec4899"
    },
    {
        "id": 18,
        "title": "vrus.co.th",
        "image": "/images/65c0faa3d72d1219.png",
        "color": "#14b8a6"
    },
    {
        "id": 19,
        "title": "jitpisutgroup.co.th",
        "image": "/images/6bab87c4f9c6b5f0.png",
        "color": "#f97316"
    },
    {
        "id": 20,
        "title": "tpwauditservices.com",
        "image": "/images/6e9fb8a3f51b11d8.png",
        "color": "#a855f7"
    },
    {
        "id": 21,
        "title": "thaitabien.com",
        "image": "/images/70e5c4bf0d6942a2.png",
        "color": "#8b5cf6"
    },
    {
        "id": 22,
        "title": "ittis.company",
        "image": "/images/7d2a61f66527148d.png",
        "color": "#06b6d4"
    },
    {
        "id": 23,
        "title": "doctorapichartjd.com",
        "image": "/images/844b63dff23b8a5d.png",
        "color": "#f43f5e"
    },
    {
        "id": 24,
        "title": "growvertex.co.th",
        "image": "/images/8e3b61dafd7c3cd7.png",
        "color": "#10b981"
    },
    {
        "id": 25,
        "title": "ttethai.com",
        "image": "/images/95e897c7eb2d9845.png",
        "color": "#f59e0b"
    },
    {
        "id": 26,
        "title": "อิ่มท้อง พร้อมฝัน",
        "image": "/images/965929072caf5496.png",
        "color": "#6366f1"
    },
    {
        "id": 27,
        "title": "อิ่มท้อง พร้อมฝัน",
        "image": "/images/980a0827b90a1b46.png",
        "color": "#ec4899"
    },
    {
        "id": 28,
        "title": "starinkthai.com",
        "image": "/images/986d500ca5f7f4e9.png",
        "color": "#14b8a6"
    },
    {
        "id": 29,
        "title": "select.ortorkor.com",
        "image": "/images/9b790f286046230e.png",
        "color": "#f97316"
    },
    {
        "id": 30,
        "title": "best8.co.th",
        "image": "/images/9d80e4a969c80286.png",
        "color": "#a855f7"
    },
    {
        "id": 31,
        "title": "สยามล้อมรั้ว.com",
        "image": "/images/9f53c870b73057b8.png",
        "color": "#8b5cf6"
    },
    {
        "id": 32,
        "title": "aromethaisemassage.nl",
        "image": "/images/9ffc38b77efc6ef4.png",
        "color": "#06b6d4"
    },
    {
        "id": 33,
        "title": "ex-cargologistics.com",
        "image": "/images/a1413712952ba2a1.png",
        "color": "#f43f5e"
    },
    {
        "id": 34,
        "title": "mellowfurniturestore.com",
        "image": "/images/a526818182c9dd02.png",
        "color": "#10b981"
    },
    {
        "id": 35,
        "title": "exformaarch.com",
        "image": "/images/aea79ff594b13e20.png",
        "color": "#f59e0b"
    },
    {
        "id": 36,
        "title": "myticket.travel",
        "image": "/images/afcfd65a5fd748b6.png",
        "color": "#6366f1"
    },
    {
        "id": 37,
        "title": "exformaarch.com",
        "image": "/images/b0e48cb3e4f817ba.png",
        "color": "#ec4899"
    },
    {
        "id": 38,
        "title": "exformaarch.com",
        "image": "/images/ca8b1a38eae5b53d.png",
        "color": "#14b8a6"
    },
    {
        "id": 39,
        "title": "lalamoverthailand.com",
        "image": "/images/cad09f0abc413d16.png",
        "color": "#f97316"
    },
    {
        "id": 40,
        "title": "area340.net",
        "image": "/images/cbf014018fb42f0c.png",
        "color": "#a855f7"
    },
    {
        "id": 41,
        "title": "devano-design.com",
        "image": "/images/cce9c5fa77ca6da0.png",
        "color": "#8b5cf6"
    },
    {
        "id": 42,
        "title": "wilertsvision.com",
        "image": "/images/cdae16908f1d5adb.png",
        "color": "#06b6d4"
    },
    {
        "id": 43,
        "title": "saoservice.com",
        "image": "/images/d0c3cdd2d22429a2.png",
        "color": "#f43f5e"
    },
    {
        "id": 44,
        "title": "moon2mar.com",
        "image": "/images/de91f5de66686cba.png",
        "color": "#10b981"
    },
    {
        "id": 45,
        "title": "lanternchiangmaiyipeng.com",
        "image": "/images/e3be2fad85fba354.png",
        "color": "#f59e0b"
    },
    {
        "id": 46,
        "title": "tokyojapanesemassage.com",
        "image": "/images/e7d98c4cc3d9253b.png",
        "color": "#6366f1"
    },
    {
        "id": 47,
        "title": "liberpath.com",
        "image": "/images/e7fb2adb82e75bac.png",
        "color": "#ec4899"
    },
    {
        "id": 48,
        "title": "liberpath.com",
        "image": "/images/e99b1516272a2619.png",
        "color": "#14b8a6"
    },
    {
        "id": 49,
        "title": "mediverse.co.th",
        "image": "/images/e9b3f1032919ecfc.png",
        "color": "#f97316"
    },
    {
        "id": 50,
        "title": "muaycarrent.com",
        "image": "/images/eab46ebf161f526b.png",
        "color": "#a855f7"
    },
    {
        "id": 51,
        "title": "casshunger.com",
        "image": "/images/ec7ab1dbdc649f18.png",
        "color": "#8b5cf6"
    },
    {
        "id": 52,
        "title": "punboonunion.com",
        "image": "/images/f06a879c6c9e87b5.png",
        "color": "#06b6d4"
    },
    {
        "id": 53,
        "title": "infinity4289.com",
        "image": "/images/f074a222f9ab52e9.png",
        "color": "#f43f5e"
    },
    {
        "id": 54,
        "title": "arnajakbaan",
        "image": "/images/f4ff1b465810b5c2.png",
        "color": "#10b981"
    },
    {
        "id": 55,
        "title": "ppyasothon.com",
        "image": "/images/f61a44f9fe9dbee0.png",
        "color": "#f59e0b"
    },
    {
        "id": 56,
        "title": "phruksathum.com",
        "image": "/images/ff9340ae2e625bff.png",
        "color": "#6366f1"
    },
    {
        "id": 57,
        "title": "dansavanh.com",
        "image": "/images/dansavanh-resort-1.png",
        "color": "#10b981"
    },
    {
        "id": 58,
        "title": "dansavanh.net",
        "image": "/images/dansavanh-resort-2.jpg",
        "color": "#06b6d4"
    }
];

export default function Portfolio({ dictionary }: PortfolioProps) {
    return (
        <section id="portfolio" className="portfolio">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title gradient-text">{dictionary.portfolio.title}</h2>
                    <p className="section-subtitle">{dictionary.portfolio.subtitle}</p>
                </div>

                <div className="portfolio-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="portfolio-card">
                            <div
                                className="portfolio-image"
                                style={{ background: `linear-gradient(135deg, ${project.color}40, ${project.color}20)` }}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
                                />
                                <div className="portfolio-overlay">
                                </div>
                            </div>
                            <div className="portfolio-info">
                                <h3 className="portfolio-title">{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
