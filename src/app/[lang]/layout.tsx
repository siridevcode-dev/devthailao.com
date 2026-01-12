import type { Metadata } from 'next';
import { Outfit, Kanit, Noto_Sans_Lao } from 'next/font/google';
import '../globals.css';
import { i18n, type Locale } from '@/i18n-config';

const outfit = Outfit({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-outfit'
});

const kanit = Kanit({
    subsets: ['thai', 'latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-kanit'
});

const notoLaos = Noto_Sans_Lao({
    subsets: ['lao'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-noto-lao'
});

export const metadata: Metadata = {
    title: 'Devthailao - Expert Web Developer',
    description: 'Professional web development services. Building stunning, high-performance websites and applications.',
};

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}) {
    const { lang } = (await params) as { lang: Locale };

    return (
        <html lang={lang} className={`${outfit.variable} ${kanit.variable} ${notoLaos.variable}`}>
            <body>{children}</body>
        </html>
    );
}
