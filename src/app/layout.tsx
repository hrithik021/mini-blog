import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Mini Blog',
  description: 'A tiny blog demo built with Next.js App Router, Tailwind and Axios',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Header />
        <main className="mx-auto max-w-5xl px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}