import ProductCard from 'components/product-card';
import { defaultSort, sorting } from 'lib/constants';
import { getCollectionProducts, getProducts } from 'lib/shopify';
import { Product } from 'lib/shopify/types';

export const metadata = {
  title: 'Shop',
  description: 'Browse all products in our store.'
};

function filterProductsByPrice(products: Product[], minPrice?: number, maxPrice?: number): Product[] {
  if (!minPrice && !maxPrice) return products;
  
  return products.filter((product) => {
    const price = parseFloat(product.priceRange.minVariantPrice.amount);
    
    if (minPrice !== undefined && price < minPrice) return false;
    if (maxPrice !== undefined && price > maxPrice) return false;
    
    return true;
  });
}

export default async function ShopPage(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const { sort, q: searchValue, collections, minPrice, maxPrice } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

  // Fetch products based on collections (OR logic) or search query
  let products: Product[] = [];
  
  if (collections) {
    // Split comma-separated collection handles
    const collectionHandles = collections.split(',').filter(Boolean);
    
    // Fetch products from all selected collections (OR logic)
    const collectionProductsPromises = collectionHandles.map(handle => 
      getCollectionProducts({ 
        collection: handle, 
        sortKey, 
        reverse 
      })
    );
    
    const allCollectionProducts = await Promise.all(collectionProductsPromises);
    
    // Merge products from all collections and remove duplicates by ID
    const productMap = new Map<string, Product>();
    allCollectionProducts.flat().forEach(product => {
      productMap.set(product.id, product);
    });
    
    products = Array.from(productMap.values());
  } else {
    // Fetch all products or search results
    products = await getProducts({ 
      sortKey, 
      reverse, 
      query: searchValue 
    });
  }

  // Apply client-side price filtering
  const min = minPrice ? parseFloat(minPrice) : undefined;
  const max = maxPrice ? parseFloat(maxPrice) : undefined;
  const filteredProducts = filterProductsByPrice(products, min, max);

  const resultsText = filteredProducts.length > 1 ? 'results' : 'result';

  return (
    <section className="w-full">
      <div className="mb-4">
        {searchValue ? (
          <p className="mb-4">
            {filteredProducts.length === 0
              ? 'There are no products that match '
              : `Showing ${filteredProducts.length} ${resultsText} for `}
            <span className="font-bold">&quot;{searchValue}&quot;</span>
          </p>
        ) : (
          <p className="mb-4">
            {filteredProducts.length === 0
              ? 'No products found'
              : `Showing ${filteredProducts.length} ${resultsText}`}
          </p>
        )}
      </div>
      {filteredProducts.length > 0 ? (
        <div className="section-grid section-grid-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : null}
    </section>
  );
}

