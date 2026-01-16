'use client';

import { useState } from 'react';

interface SkillCategory {
    name: string;
    items: string[];
}

interface SkillRole {
    name: string;
    icon: string;
    color: string;
    categories: SkillCategory[];
}

interface SkillsRoadmapProps {
    dictionary: {
        skills: {
            title: string;
            subtitle: string;
            mainRole: string;
            roles: {
                frontend: {
                    name: string;
                    categories: {
                        basics: string;
                        frameworks: string;
                        styles: string;
                        stateManagement: string;
                        optimization: string;
                    };
                };
                backend: {
                    name: string;
                    categories: {
                        languageRuntime: string;
                        apiStandards: string;
                        architecture: string;
                        security: string;
                    };
                };
                database: {
                    name: string;
                    categories: {
                        rdbms: string;
                        nosql: string;
                        graph: string;
                        messageQueues: string;
                    };
                };
                devops: {
                    name: string;
                    categories: {
                        infrastructure: string;
                        automation: string;
                        virtualization: string;
                        monitoring: string;
                        strategy: string;
                    };
                };
                mobile: {
                    name: string;
                    categories: {
                        android: string;
                        ios: string;
                        crossPlatform: string;
                    };
                };
            };
        };
    };
}

const skillsData: SkillRole[] = [
    {
        name: 'frontend',
        icon: '🎨',
        color: '#3b82f6',
        categories: [
            { name: 'basics', items: ['HTML', 'CSS', 'CSS3', 'Responsive Design', 'Javascript', 'ES5', 'HTML DOM', 'JSON', 'XML', 'jQuery'] },
            { name: 'frameworks', items: ['React', 'Next.js', 'Vue', 'Angular', 'Svelte', 'SolidJS', 'Nuxt.js', 'SvelteKit', 'Webpack', 'Backbone.js', 'Ember.js', 'Meteor.js', 'GraphQL', 'Grunt', 'Gulp'] },
            { name: 'styles', items: ['Tailwind CSS', 'CSS-in JS', 'Bootstrap', 'Material UI', 'W3.CSS', 'Storybook'] },
            { name: 'stateManagement', items: ['Advanced state management', 'Redux', 'Redux Toolkit', 'Zustand', 'Signals'] },
            { name: 'optimization', items: ['Web performance optimization'] },
        ],
    },
    {
        name: 'backend',
        icon: '💻',
        color: '#f97316',
        categories: [
            { name: 'languageRuntime', items: ['Node.js', 'Javascript', 'Express', 'Fastify', 'NestJS', 'C#', 'C', 'C++', 'Python', 'Python', 'Django', 'FastAPI', 'Go', 'Fiber', 'PHP', 'Ruby on Rails', 'Java (Spring)', 'ASP.NET'] },
            { name: 'apiStandards', items: ['REST', 'GraphQL', 'gRPC'] },
            { name: 'architecture', items: ['Asynchronous processing', 'Message Queues', 'Caching', 'Redis', 'Microservices'] },
            { name: 'security', items: ['Security concepts', 'Authentication', 'JWT', 'OAuth2.1', 'API hardening'] },
        ],
    },
    {
        name: 'database',
        icon: '🗄️',
        color: '#8b5cf6',
        categories: [
            { name: 'rdbms', items: ['MSSQL', 'MySQL', 'Postgres'] },
            { name: 'nosql', items: ['NoSQL', 'Mongo', 'Redis', 'Cassandra', 'CouchDB', 'Elasticsearch', 'Jenkins'] },
            { name: 'graph', items: ['Neo4j', 'ArangoDB'] },
            { name: 'messageQueues', items: ['Kafka', 'SQS', 'ZeroMQ', 'RabbitMQ'] },
        ],
    },
    {
        name: 'devops',
        icon: '⚙️',
        color: '#eab308',
        categories: [
            { name: 'infrastructure', items: ['NGINX', 'Digital Ocean', 'Amazon Web Services (AWS)', 'Microsoft Azure', 'Google Cloud Platform', 'Cloudflare', 'ELK', 'Terraform', 'Serverless', 'Istio'] },
            { name: 'automation', items: ['Ansible', 'CHEF', 'Puppet', 'Jenkins', 'Git', 'Blue-Green Deployments', 'Continuous Deployment'] },
            { name: 'virtualization', items: ['Docker', 'Bladecenter', 'Kubernetes', 'Vagrant', 'VMWare'] },
            { name: 'monitoring', items: ['Prometheus', 'Elasticsearch', 'Performance Tuning'] },
            { name: 'strategy', items: ['Security & Compliance', 'Disaster Recovery', 'Continuous Improvement', 'DevOps Culture'] },
        ],
    },
    {
        name: 'mobile',
        icon: '📱',
        color: '#10b981',
        categories: [
            { name: 'android', items: ['Java', 'SDK'] },
            { name: 'ios', items: ['Objective C', 'Swift'] },
            { name: 'crossPlatform', items: ['React Native', 'Ionic', 'PWA', 'Xamarin', 'Unity'] },
        ],
    },
];

export default function SkillsRoadmap({ dictionary }: SkillsRoadmapProps) {
    const [activeRole, setActiveRole] = useState<string | null>(null);

    const getRoleName = (roleKey: string) => {
        const roleNames: Record<string, string> = {
            frontend: dictionary.skills.roles.frontend.name,
            backend: dictionary.skills.roles.backend.name,
            database: dictionary.skills.roles.database.name,
            devops: dictionary.skills.roles.devops.name,
            mobile: dictionary.skills.roles.mobile.name,
        };
        return roleNames[roleKey] || roleKey;
    };

    const getCategoryName = (roleKey: string, categoryKey: string) => {
        const role = dictionary.skills.roles[roleKey as keyof typeof dictionary.skills.roles];
        if (role && 'categories' in role) {
            const categories = role.categories as Record<string, string>;
            return categories[categoryKey] || categoryKey;
        }
        return categoryKey;
    };

    return (
        <section id="skills" className="skills-roadmap">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title gradient-text">{dictionary.skills.title}</h2>
                    <p className="section-subtitle">{dictionary.skills.subtitle}</p>
                </div>

                {/* Main Role Badge */}
                <div className="main-role-badge">
                    <div className="main-role-icon">🏔️</div>
                    <span className="main-role-text">{dictionary.skills.mainRole}</span>
                </div>

                {/* Connection Line */}
                <div className="roadmap-connector"></div>

                {/* Role Cards Grid */}
                <div className="roles-grid">
                    {skillsData.map((role) => (
                        <div
                            key={role.name}
                            className={`role-card${activeRole === role.name ? ' active' : ''}`}
                            style={{ '--role-color': role.color } as React.CSSProperties}
                            onClick={() => setActiveRole(activeRole === role.name ? null : role.name)}
                        >
                            <div className="role-header" style={{ background: role.color }}>
                                <span className="role-icon">{role.icon}</span>
                                <h3 className="role-name">{getRoleName(role.name)}</h3>
                            </div>
                            <div className="role-content">
                                {role.categories.map((category) => (
                                    <div key={category.name} className="skill-category">
                                        <h4 className="category-name">{getCategoryName(role.name, category.name)}</h4>
                                        <div className="skill-items">
                                            {category.items.map((item) => (
                                                <span key={item} className="skill-item">
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
