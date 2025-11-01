import AboutStore from "components/about-store";
import Blog from "components/blog";
import CollectionsSection from "components/collections-section";
import Faq from "components/faq";
import HeroSection from "components/hero-section";
import NewsletterSection from "components/newsletter-section";
import ProductsSection from "components/products-section";
import VideoSectionsWrapper from "components/video-sections-wrapper";
import { COLLECTION_HANDLES } from "lib/constants";
import { getCollectionProducts, getCollections } from "lib/shopify";
import { Suspense } from "react";

export const metadata = {
  description:
    "High-performance ecommerce store built with Next.js, Vercel, and Shopify.",
  openGraph: {
    type: "website",
  },
};

export default async function HomePage() {
  // Fetch data using async/await for better error handling
  const [products, collections] = await Promise.all([
    getCollectionProducts({
      collection: COLLECTION_HANDLES.HOMEPAGE_FEATURED,
    }),
    getCollections(),
  ]);

  return (
    <>
      <HeroSection />
      <div className="relative z-10 bg-transparent dark:bg-transparent">
        <Suspense fallback={<div className="section-spacing" />}>
          <ProductsSection products={products} />
        </Suspense>
        <Suspense fallback={<div className="section-spacing" />}>
          <CollectionsSection collections={collections} />
        </Suspense>
        <VideoSectionsWrapper />
        <AboutStore />
        <Blog />
        <Faq />
        <NewsletterSection />
      </div>
    </>
  );
}
