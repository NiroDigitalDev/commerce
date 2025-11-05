import Collections from "components/layout/search/collections";
import FilterList from "components/layout/search/filter";
import PriceRangeFilter from "components/layout/search/filter/price-range";
import { sorting } from "lib/constants";
import { Suspense } from "react";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="mx-auto flex max-w-(--breakpoint-2xl) flex-col gap-6 md:gap-8 px-4 pb-4 text-black md:flex-row dark:text-white">
        <div className="order-first w-full flex-none md:sticky md:top-4 md:self-start md:max-w-[200px]">
          <Collections />
          <div className="mt-6 md:mt-8">
            <FilterList list={sorting} title="Sort by" />
          </div>
          <Suspense fallback={null}>
            <PriceRangeFilter />
          </Suspense>
        </div>
        <div className="order-last min-h-screen w-full md:order-none">
          <Suspense fallback={null}>{children}</Suspense>
        </div>
      </div>
    </>
  );
}
