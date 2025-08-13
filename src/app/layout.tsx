import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Mini Blog',
  description:
    'A tiny blog demo built with Next.js App Router, Tailwind and Axios',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 flex flex-col min-h-screen">
        {/* Sticky Header */}
        <header className="border-b border-gray-200 bg-white">
          <div className="mx-auto max-w-6xl px-4">
            <Header />
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 mx-auto max-w-6xl px-4 py-12">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-white mt-12">
          <div className="mx-auto max-w-6xl px-4">
            <Footer />
          </div>
        </footer>
      </body>
    </html>
  );
}
