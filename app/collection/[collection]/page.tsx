import ProductCard from 'components/product-card';
import { getCollection, getCollectionProducts } from 'lib/shopify';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';

import { defaultSort, sorting } from 'lib/constants';

export async function generateMetadata(props: {
  params: Promise<{ collection: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const collection = await getCollection(params.collection);

  if (!collection) return notFound();

  return {
    title: collection.seo?.title || collection.title,
    description:
      collection.seo?.description || collection.description || `${collection.title} products`
  };
}

export default async function CollectionPage(props: {
  params: Promise<{ collection: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const { sort } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
  
  const collection = await getCollection(params.collection);
  if (!collection) return notFound();
  
  const products = await getCollectionProducts({ collection: params.collection, sortKey, reverse });

  return (
    <section className="w-full">
      {/* Collection Header */}
      <div className="mb-8">
        {collection.image && (
          <div className="relative mb-6 h-[200px] w-full overflow-hidden rounded-lg md:h-[300px]">
            <Image
              src={collection.image.url}
              alt={collection.image.altText || collection.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
        <h1 className="mb-4 text-3xl font-bold md:text-4xl">{collection.title}</h1>
        {collection.description && (
          <p className="max-w-3xl text-lg text-neutral-600 dark:text-neutral-400">
            {collection.description}
          </p>
        )}
      </div>

      {/* Products Grid */}
      {products.length === 0 ? (
        <p className="py-3 text-lg">{`No products found in this collection`}</p>
      ) : (
        <div className="section-grid section-grid-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}

