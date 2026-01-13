'use client';

import { useEffect, useState, useRef } from 'react';

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
    { key: 'projects', value: '500', suffix: '+' },
    { key: 'clients', value: '1.5', suffix: 'K' },
];

const Counter = ({ value }: { value: string }) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    const target = parseFloat(value);
                    const duration = 2000; // 2 seconds
                    const steps = 60;
                    const increment = target / (duration / (1000 / steps));
                    let current = 0;

                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            setCount(target);
                            clearInterval(timer);
                        } else {
                            setCount(current);
                        }
                    }, 1000 / steps);
                }
            },
            { threshold: 0.5 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [value, mounted]);

    if (!mounted) {
        return (
            <span suppressHydrationWarning>
                {value.includes('.') ? "0.0" : "0"}
            </span>
        );
    }

    return (
        <span ref={elementRef} suppressHydrationWarning>
            {value.includes('.') ? count.toFixed(1) : Math.floor(count)}
        </span>
    );
};

export default function Stats({ dictionary }: StatsProps) {
    return (
        <section className="stats">
            <div className="container">
                <div className="stats-grid">
                    {statsData.map((stat) => (
                        <div key={stat.key} className="stat-item">
                            <div className="stat-value">
                                <Counter value={stat.value} />
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
