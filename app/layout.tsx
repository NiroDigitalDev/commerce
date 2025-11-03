import { CartProvider } from 'components/cart/cart-context';
import { Navbar } from 'components/layout/navbar';
import Footer from 'components/layout/footer';
import { WelcomeToast } from 'components/welcome-toast';
import NewsletterSection from 'components/newsletter-section';
import { getCart, getCollections } from 'lib/shopify';
import { Bebas_Neue } from 'next/font/google';
import { ReactNode } from 'react';
import { Toaster } from 'sonner';
import './globals.css';
import { baseUrl } from 'lib/utils';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const { SITE_NAME } = process.env;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  }
};

export default async function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  // Fetch cart data for the cart context and collections for footer
  const cart = getCart();
  const collections = await getCollections();

  return (
    <html lang="en" className={bebasNeue.className}>
      <body className="bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">
        <CartProvider cartPromise={cart}>
          <Navbar />
          <main>
            {children}
          </main>
          <NewsletterSection />
          <Footer collections={collections} />
          <Toaster closeButton />
          <WelcomeToast />
        </CartProvider>
      </body>
    </html>
  );
}
