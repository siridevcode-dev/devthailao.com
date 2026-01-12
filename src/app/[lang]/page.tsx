import { getDictionary } from '@/dictionaries';
import type { Locale } from '@/i18n-config';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Team from '@/components/Team';
import Portfolio from '@/components/Portfolio';
import Stats from '@/components/Stats';
import Footer from '@/components/Footer';
import HireMe from '@/components/HireMe';
import SkillsRoadmap from '@/components/SkillsRoadmap';

export default async function Home({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = (await params) as { lang: Locale };
    const dictionary = await getDictionary(lang);

    return (
        <main>
            <Navbar lang={lang} dictionary={dictionary} />
            <Hero dictionary={dictionary} />
            <Stats dictionary={dictionary} />
            <Services dictionary={dictionary} />
            <SkillsRoadmap dictionary={dictionary} />
            <Team dictionary={dictionary} />
            <Portfolio dictionary={dictionary} />
            <Footer dictionary={dictionary} />
            <HireMe dictionary={dictionary} />
        </main>
    );
}
