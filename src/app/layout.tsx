// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider"
import { MessageSquare, Settings, Send } from 'lucide-react';

// Importing the Inter font with desired weights
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Optional: for CSS variable usage
});

export const metadata: Metadata = {
  title: 'ChatApp',
  description: 'A mobile-friendly chat application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans`}>
        {/* If using a ThemeProvider */}
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
