import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import DevFavicon from '@/components/DevFavicon';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Nikolay — Tech Lead / Front-end Architect',
  description:
    'Tech Lead & Front-end architect with strong product vision. Experienced in leading web teams, Smart TV ecosystem, high-load streaming, and full-cycle development.',
  icons: {
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen font-sans antialiased">
        <LanguageProvider>
          <DevFavicon />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
