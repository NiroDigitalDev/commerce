import { Reveal } from '@/components/animations';
import ProductCard from 'components/product-card';
import { defaultSort, sorting } from 'lib/constants';
import { getProducts } from 'lib/shopify';

export const metadata = {
  title: 'Search',
  description: 'Search for products in the store.'
};

export default async function SearchPage(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

  const products = await getProducts({ sortKey, reverse, query: searchValue });
  const resultsText = products.length > 1 ? 'results' : 'result';

  return (
    <section className="section-wrapper section-bg-gray">
      <div className="section-container">
      {searchValue ? (
        <p className="mb-4">
          {products.length === 0
            ? 'There are no products that match '
            : `Showing ${products.length} ${resultsText} for `}
          <span className="font-bold">&quot;{searchValue}&quot;</span>
        </p>
      ) : null}
      {products.length > 0 ? (
          <div className="section-grid section-grid-3">
            {products.map((product, index) => (
              <Reveal delay={0.1 * index} direction="up" key={product.id}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
      ) : null}
      </div>
    </section>
  );
}
