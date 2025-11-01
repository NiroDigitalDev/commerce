import type { Metadata } from 'next';
import PageHero from 'components/page-hero';
import { Reveal } from '@/components/animations';
import ButtonLink from 'components/button-link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Our privacy policy explains how we collect, use, and protect your personal information.'
};

export default function PrivacyPolicyPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <PageHero
        title="Privacy Policy"
        heading="Privacy Policy"
        link="/policies/privacy-policy"
      />
      
      <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[200px]">
        <div className="mx-auto max-w-4xl px-5">
          <Reveal delay={0.3}>
            <div className="space-y-3 mb-12">
              <h2 className="text-3xl font-bold">Privacy Policy</h2>
              <div className="space-y-7 text-neutral-600 dark:text-neutral-400">
                <p>
                  We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website and make purchases.
                </p>
              </div>
            </div>
          </Reveal>

          <article className="space-y-12">
            <Reveal delay={0.4}>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">1. Information We Collect</h3>
                <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
                  <p>We collect information that you provide directly to us, including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Name and contact information</li>
                    <li>Shipping and billing addresses</li>
                    <li>Payment information</li>
                    <li>Order history and preferences</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">2. How We Use Your Information</h3>
                <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Process and fulfill your orders</li>
                    <li>Communicate with you about your orders</li>
                    <li>Send you marketing communications (with your consent)</li>
                    <li>Improve our products and services</li>
                    <li>Prevent fraud and enhance security</li>
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">3. Information Sharing</h3>
                <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
                  <p>
                    We do not sell your personal information. We may share your information with trusted third parties who help us operate our business, such as payment processors and shipping partners, but only to the extent necessary to provide our services.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.7}>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">4. Data Security</h3>
                <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.8}>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">5. Your Rights</h3>
                <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
                  <p>You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access your personal data</li>
                    <li>Correct inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Object to processing of your data</li>
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.9}>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">6. Cookies and Tracking</h3>
                <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
                  <p>
                    We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie settings through your browser preferences.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={1.0}>
              <ButtonLink
                href="/policies/cookie-policy"
                size="lg"
              >
                Learn more about our cookie policy
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
