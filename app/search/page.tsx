import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Search',
  description: 'Search for products in the store.'
};

export default async function SearchPage(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const params = searchParams as { [key: string]: string };
  
  // Build query string for redirect - forward all params
  const queryParams = new URLSearchParams();
  if (params.q) queryParams.set('q', params.q);
  if (params.sort) queryParams.set('sort', params.sort);
  if (params.collections) queryParams.set('collections', params.collections);
  if (params.minPrice) queryParams.set('minPrice', params.minPrice);
  if (params.maxPrice) queryParams.set('maxPrice', params.maxPrice);
  
  const queryString = queryParams.toString();
  const redirectUrl = `/shop${queryString ? `?${queryString}` : ''}`;
  
  redirect(redirectUrl);
}
