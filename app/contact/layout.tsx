import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with our matcha experts. Have questions about brewing, sourcing, or bulk orders? We\'re here to help you discover the perfect Japanese matcha.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

