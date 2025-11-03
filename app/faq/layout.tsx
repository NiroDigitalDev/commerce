import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQ)',
  description: 'Find answers to common questions about our products, shipping, payments, and policies. Get instant help with your queries.',
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

