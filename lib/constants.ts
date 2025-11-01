/* =========================
   Application Constants
   =========================
   
   Centralized constants with proper TypeScript typing.
   Uses 'as const' for literal type inference.
   ========================= */

export type SortFilterItem = {
  title: string;
  slug: string | null;
  sortKey: 'RELEVANCE' | 'BEST_SELLING' | 'CREATED_AT' | 'PRICE';
  reverse: boolean;
};

export const defaultSort = {
  title: 'Relevance',
  slug: null,
  sortKey: 'RELEVANCE',
  reverse: false
} as const satisfies SortFilterItem;

export const sorting = [
  defaultSort,
  { title: 'Trending', slug: 'trending-desc', sortKey: 'BEST_SELLING', reverse: false },
  { title: 'Latest arrivals', slug: 'latest-desc', sortKey: 'CREATED_AT', reverse: true },
  { title: 'Price: Low to high', slug: 'price-asc', sortKey: 'PRICE', reverse: false },
  { title: 'Price: High to low', slug: 'price-desc', sortKey: 'PRICE', reverse: true }
] as const satisfies readonly SortFilterItem[];

export const TAGS = {
  collections: 'collections',
  products: 'products',
  cart: 'cart'
} as const;

export type TagKey = keyof typeof TAGS;
export type TagValue = typeof TAGS[TagKey];

export const HIDDEN_PRODUCT_TAG = 'nextjs-frontend-hidden' as const;
export const DEFAULT_OPTION = 'Default Title' as const;
export const SHOPIFY_GRAPHQL_API_ENDPOINT = '/api/2023-01/graphql.json' as const;

/* Collection Handles */
export const COLLECTION_HANDLES = {
  HOMEPAGE_FEATURED: 'hidden-homepage-featured-items',
  ALL: '',
} as const;

export type CollectionHandle = typeof COLLECTION_HANDLES[keyof typeof COLLECTION_HANDLES];

/* Animation Timing (milliseconds) */
export const ANIMATION_TIMING = {
  INSTANT: 0,
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
  SLOWER: 700,
  SLOWEST: 1000,
} as const;

export type AnimationTiming = typeof ANIMATION_TIMING[keyof typeof ANIMATION_TIMING];

/* Delay Increments (milliseconds) */
export const ANIMATION_DELAYS = {
  NONE: 0,
  XS: 50,
  SM: 100,
  MD: 200,
  LG: 300,
  XL: 500,
} as const;

export type AnimationDelay = typeof ANIMATION_DELAYS[keyof typeof ANIMATION_DELAYS];
