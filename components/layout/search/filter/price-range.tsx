'use client';

import { Slider } from '@/components/ui/slider';
import { createUrl } from '@/lib/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const DEFAULT_MIN_PRICE = 0;
const DEFAULT_MAX_PRICE = 1000;

export default function PriceRangeFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const minPrice = Number(searchParams.get('minPrice')) || DEFAULT_MIN_PRICE;
  const maxPrice = Number(searchParams.get('maxPrice')) || DEFAULT_MAX_PRICE;
  
  const [priceRange, setPriceRange] = useState<number[]>([minPrice, maxPrice]);
  const [isChanging, setIsChanging] = useState(false);

  // Update local state when URL params change
  useEffect(() => {
    if (!isChanging) {
      setPriceRange([minPrice, maxPrice]);
    }
  }, [minPrice, maxPrice, isChanging]);

  const handleValueChange = (value: number[]) => {
    setIsChanging(true);
    setPriceRange(value);
  };

  const handleValueCommit = (value: number[]) => {
    setIsChanging(false);
    const [min, max] = value;
    
    const newParams = new URLSearchParams(searchParams.toString());
    
    // Only add params if they differ from defaults
    if (min !== DEFAULT_MIN_PRICE) {
      newParams.set('minPrice', min.toString());
    } else {
      newParams.delete('minPrice');
    }
    
    if (max !== DEFAULT_MAX_PRICE) {
      newParams.set('maxPrice', max.toString());
    } else {
      newParams.delete('maxPrice');
    }
    
    const url = createUrl(pathname, newParams);
    router.push(url, { scroll: false });
  };

  const hasActiveFilter = minPrice !== DEFAULT_MIN_PRICE || maxPrice !== DEFAULT_MAX_PRICE;

  const resetFilter = () => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.delete('minPrice');
    newParams.delete('maxPrice');
    const url = createUrl(pathname, newParams);
    router.push(url, { scroll: false });
  };

  return (
    <div className="mt-4">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm text-neutral-500 dark:text-neutral-400">
          Price Range
        </h3>
        {hasActiveFilter && (
          <button
            onClick={resetFilter}
            className="text-xs text-neutral-500 underline hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
          >
            Reset
          </button>
        )}
      </div>
      
      <div className="px-2">
        <Slider
          min={DEFAULT_MIN_PRICE}
          max={DEFAULT_MAX_PRICE}
          step={10}
          value={priceRange}
          onValueChange={handleValueChange}
          onValueCommit={handleValueCommit}
          className="mb-6"
        />
      </div>
      
      <div className="flex items-center justify-between text-sm">
        <div className="flex flex-col">
          <span className="text-xs text-neutral-500 dark:text-neutral-400">Min</span>
          <span className="font-medium text-black dark:text-white">
            ${priceRange[0]}
          </span>
        </div>
        <div className="flex flex-col text-right">
          <span className="text-xs text-neutral-500 dark:text-neutral-400">Max</span>
          <span className="font-medium text-black dark:text-white">
            ${priceRange[1]}
          </span>
        </div>
      </div>
    </div>
  );
}

