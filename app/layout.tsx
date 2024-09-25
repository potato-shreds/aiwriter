/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from 'next';
import '@/public/styles/globals.css';

interface CustomMetadata extends Metadata {
  appleItunesApp?: string;
}

export const metadata: CustomMetadata = {
  title: 'AI Writer - Write Emails, Essays and Articles in Seconds',
  description:
    'Experience the revolutionary new way to create content with our AI Writer. Powered by ChatGPT & GPT-4, GPT-3. Makes writing easier than ever before.',
  appleItunesApp: 'app-id=1639845219',
  keywords: 'AI Writer, Emails, Essays, Articles, AI, ChatGPT, GPT-4, GPT-3',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;600&family=Raleway:wght@400;500;700&display=swap"
        />
        <link rel="canonical" href="https://ai-writer.app" />
        <link rel="apple-touch-icon" href="/images/favicon-32x32.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
