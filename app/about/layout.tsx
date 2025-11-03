import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Discover our passion for authentic Japanese matcha. Learn about our heritage, commitment to quality, and partnerships with renowned tea farms in Uji, Kyoto, and beyond.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

