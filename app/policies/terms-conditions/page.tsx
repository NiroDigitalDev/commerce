import type { Metadata } from 'next';
import PageHero from 'components/page-hero';
import { Reveal } from '@/components/animations';
import ButtonLink from 'components/button-link';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and conditions governing the use of our website and services.'
};

export default function TermsConditionsPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <PageHero
        title="Terms & Conditions"
        heading="Terms & Conditions"
        link="/policies/terms-conditions"
      />
      
      <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[200px]">
        <div className="mx-auto max-w-4xl px-5">
          <Reveal delay={0.3}>
            <div className="space-y-3 mb-12">
              <h2 className="text-3xl font-bold">Terms & conditions</h2>
              <div className="space-y-7 text-neutral-600 dark:text-neutral-400">
                <p>
                  By accessing and using this website, you accept and agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you must not use our website.
                </p>
              </div>
            </div>
          </Reveal>

          <article className="space-y-12">
            <Reveal delay={0.4}>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">1. Use of Website</h3>
                <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
                  <p>You agree to use our website only for lawful purposes and in a way that:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Does not infringe on the rights of others</li>
                    <li>Does not violate any applicable laws or regulations</li>
                    <li>Does not harm or attempt to harm our website or systems</li>
                    <li>Does not transmit any malicious code or viruses</li>
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">2. Product Information</h3>
                <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
                  <p>
                    We strive to provide accurate product descriptions, images, and pricing. However, we reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">3. Pricing and Payment</h3>
                <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
                  <p>
                    All prices are displayed in the currency specified and are subject to change without notice. Payment must be made in full at the time of purchase. We accept various payment methods as displayed during checkout.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.7}>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">4. Orders</h3>
                <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
                  <p>
                    When you place an order, you are making an offer to purchase products at the prices listed. We reserve the right to accept or reject any order. Once we accept your order, you will receive a confirmation email.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.8}>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">5. Intellectual Property</h3>
                <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
                  <p>
                    All content on this website, including text, graphics, logos, images, and software, is the property of our company or its content suppliers and is protected by copyright and other intellectual property laws.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.9}>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">6. Limitation of Liability</h3>
                <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
                  <p>
                    To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our website or products.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={1.0}>
              <ButtonLink
                href="/policies/return-refund"
                size="lg"
              >
                Learn more about our refund policy
              </ButtonLink>
            </Reveal>
          </article>

          <div className="mt-16 text-sm italic text-neutral-500 dark:text-neutral-400">
            Last updated: {lastUpdated}
          </div>
        </div>
      </section>
    </>
  );
}

