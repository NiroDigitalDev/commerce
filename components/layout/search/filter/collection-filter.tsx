'use client';

import clsx from 'clsx';
import { createUrl } from 'lib/utils';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import type { Collection } from 'lib/shopify/types';
import { useState, useEffect, useRef } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function CollectionFilter({ collections }: { collections: Collection[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [openSelect, setOpenSelect] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  // Get current selected collections from URL params
  const selectedCollections = searchParams.get('collections')?.split(',').filter(Boolean) || [];
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpenSelect(false);
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);
  
  const handleCollectionToggle = (handle: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    
    // Toggle collection in array
    let updatedCollections = [...selectedCollections];
    
    if (handle === '') {
      // "All" clicked - clear all collections
      newParams.delete('collections');
    } else {
      if (updatedCollections.includes(handle)) {
        // Remove if already selected
        updatedCollections = updatedCollections.filter(h => h !== handle);
      } else {
        // Add if not selected
        updatedCollections.push(handle);
      }
      
      if (updatedCollections.length > 0) {
        newParams.set('collections', updatedCollections.join(','));
      } else {
        newParams.delete('collections');
      }
    }
    
    const url = createUrl(pathname, newParams);
    router.push(url, { scroll: false });
  };
  
  const isAllActive = selectedCollections.length === 0;
  
  const activeLabel = isAllActive 
    ? 'All' 
    : selectedCollections.length === 1
      ? collections.find(c => c.handle === selectedCollections[0])?.title || 'Collections'
      : `${selectedCollections.length} Collections`;
  
  return (
    <nav>
      <h3 className="hidden text-sm text-neutral-500 md:block dark:text-neutral-400">
        Collections
      </h3>
      
      {/* Desktop version */}
      <ul className="hidden md:block">
        {collections.map((collection) => {
          const isActive = collection.handle === '' 
            ? isAllActive 
            : selectedCollections.includes(collection.handle);
          
          return (
            <li className="mt-3 flex text-black dark:text-white" key={collection.handle || 'all'}>
              <button
                onClick={() => handleCollectionToggle(collection.handle)}
                className={clsx(
                  'w-full text-left text-base underline-offset-4 hover:underline dark:hover:text-neutral-100',
                  {
                    'font-semibold underline underline-offset-4': isActive
                  }
                )}
              >
                {collection.title}
                {isActive && collection.handle !== '' && (
                  <span className="ml-2 text-xs">✓</span>
                )}
              </button>
            </li>
          );
        })}
      </ul>
      
      {/* Mobile dropdown */}
      <div className="relative md:hidden" ref={ref}>
        <div
          onClick={() => setOpenSelect(!openSelect)}
          className="flex w-full items-center justify-between rounded-sm border border-black/30 px-6 py-4 text-base dark:border-white/30"
        >
          <div>{activeLabel}</div>
          <ChevronDownIcon className="h-6 w-6" />
        </div>
        {openSelect && (
          <div className="absolute z-40 w-full rounded-b-md bg-white p-6 shadow-md dark:bg-black">
            {collections.map((collection) => {
              const isActive = collection.handle === '' 
                ? isAllActive 
                : selectedCollections.includes(collection.handle);
              
              return (
                <button
                  key={collection.handle || 'all'}
                  onClick={() => handleCollectionToggle(collection.handle)}
                  className={clsx(
                    'mt-3 flex w-full text-left text-base text-black dark:text-white',
                    {
                      'font-semibold underline underline-offset-4': isActive
                    }
                  )}
                >
                  {collection.title}
                  {isActive && collection.handle !== '' && (
                    <span className="ml-2 text-xs">✓</span>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}

