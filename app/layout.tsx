import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EZ Dental Care',
  description: 'Quality dental care with a gentle touch - serving Houston families with professional, affordable dental services and a 4.9-star patient satisfaction rating',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
