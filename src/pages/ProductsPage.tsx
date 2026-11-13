import React, { useState, useMemo } from 'react';
import { useParams, useNavigate, useSearchParams, Link } from 'react-router-dom';
import { Search, X, ArrowRight } from 'lucide-react';
import {
  CATEGORIES,
  PRODUCTS,
  getCategoryBySlug,
} from '../data/catalog';
import { ProductCard } from '../components/ProductCard';
import { ResilientImage } from '../components/ResilientImage';

type SortOption = 'default' | 'az' | 'za';

export const ProductsPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug?: string }>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [sortOrder, setSortOrder] = useState<SortOption>('default');

  const activeCategory = getCategoryBySlug(categorySlug);
  const isInvalidSlug = Boolean(categorySlug && !activeCategory);

  const categoryCounts = useMemo(() => {
    const map: Record<string, number> = {};
    for (const p of PRODUCTS) {
      map[p.categorySlug] = (map[p.categorySlug] || 0) + 1;
    }
    return map;
  }, []);

  const filteredProducts = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    const list = PRODUCTS.filter((product) => {
      if (activeCategory && product.categorySlug !== activeCategory.slug) {
        return false;
      }
      if (!normalizedQuery) return true;

      return (
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.categoryName.toLowerCase().includes(normalizedQuery)
      );
    });

    if (sortOrder === 'az') {
      return [...list].sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sortOrder === 'za') {
      return [...list].sort((a, b) => b.name.localeCompare(a.name));
    }
    return list;
  }, [activeCategory, searchQuery, sortOrder]);

  const handleCategoryChange = (slug?: string) => {
    if (!slug) {
      navigate('/products');
    } else {
      navigate(`/products/${slug}`);
    }
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSortOrder('default');
    if (activeCategory) {
      navigate('/products');
    }
  };

  return (
    <div className="bg-[#F8FAFC] min-h-[75vh]">
      {/* Header Banner */}
      <section className="bg-[#0B192C] text-white py-12 sm:py-16 border-b border-white/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <span aria-hidden="true">/</span>
                <Link to="/products" className="hover:text-white transition-colors">
                  Products &amp; Categories
                </Link>
                {activeCategory && (
                  <>
                    <span aria-hidden="true">/</span>
                    <span className="text-[#E5BD67]">{activeCategory.name}</span>
                  </>
                )}
              </div>

              <h1 className="text-[clamp(1.85rem,3.5vw,3rem)] font-bold tracking-tight text-white">
                {activeCategory ? activeCategory.name : 'Products & Categories'}
              </h1>

              <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
                {activeCategory
                  ? activeCategory.description
                  : 'Explore all four commercial supply divisions and 46 catalog items offered by Royal Galaxy Trading and Contracting.'}
              </p>
            </div>

            {activeCategory && (
              <div className="lg:col-span-4">
                <div className="aspect-[16/10] rounded-lg overflow-hidden border border-white/15 bg-[#132642]">
                  <ResilientImage
                    src={activeCategory.image}
                    alt={activeCategory.name}
                    className="w-full h-full object-cover"
                    eager
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
        {isInvalidSlug && (
          <div className="p-4 rounded-lg border border-amber-300 bg-amber-50 text-sm text-amber-900 flex flex-wrap items-center justify-between gap-3">
            <span>
              The requested category route was not found. Showing all catalog products instead.
            </span>
            <button
              type="button"
              onClick={() => navigate('/products')}
              className="font-semibold underline hover:no-underline"
            >
              View All Categories
            </button>
          </div>
        )}

        {/* All Categories Overview Strip (when viewing all categories) */}
        {!activeCategory && (
          <section aria-label="Category Directory">
            <h2 className="text-lg font-bold text-[#0B192C] mb-4">All Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {CATEGORIES.map((category) => (
                <button
                  key={category.slug}
                  type="button"
                  onClick={() => handleCategoryChange(category.slug)}
                  className="group text-left bg-white border border-slate-200 hover:border-[#0B192C]/40 rounded-lg p-4 transition-all hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A]"
                >
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-mono tabular-nums">{category.code}</span>
                    <span className="tabular-nums">
                      {categoryCounts[category.slug] || 0} items
                    </span>
                  </div>
                  <p className="mt-2 text-base font-bold text-[#0B192C] group-hover:text-[#1D4ED8] transition-colors">
                    {category.name}
                  </p>
                  <p className="mt-1 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {category.tagline}
                  </p>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Search & Filter Toolbar */}
        <section
          aria-label="Filter and Search Products"
          className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 space-y-4"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Category Filter Tabs */}
            <div
              role="tablist"
              aria-label="Product Categories"
              className="flex flex-wrap items-center gap-1.5"
            >
              <button
                type="button"
                role="tab"
                aria-selected={!activeCategory}
                onClick={() => handleCategoryChange()}
                className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  !activeCategory
                    ? 'bg-[#0B192C] text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-[#0B192C]'
                }`}
              >
                All Categories <span className="tabular-nums opacity-80">({PRODUCTS.length})</span>
              </button>
              {CATEGORIES.map((cat) => {
                const isSelected = activeCategory?.slug === cat.slug;
                return (
                  <button
                    key={cat.slug}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => handleCategoryChange(cat.slug)}
                    className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                      isSelected
                        ? 'bg-[#0B192C] text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-[#0B192C]'
                    }`}
                  >
                    {cat.shortName}{' '}
                    <span className="tabular-nums opacity-80">
                      ({categoryCounts[cat.slug] || 0})
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search & Sort Controls */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 lg:min-w-[380px]">
              <div className="relative flex-1">
                <Search
                  className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products by name..."
                  aria-label="Search products"
                  className="w-full h-10 pl-9 pr-9 text-sm bg-[#F8FAFC] border border-slate-200 rounded-md text-[#0B192C] placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search query"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-700 rounded"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as SortOption)}
                aria-label="Sort products"
                className="h-10 px-3 text-sm bg-[#F8FAFC] border border-slate-200 rounded-md text-[#0B192C] focus:outline-none focus:bg-white focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]"
              >
                <option value="default">Sort: Catalog Order</option>
                <option value="az">Name: A to Z</option>
                <option value="za">Name: Z to A</option>
              </select>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
            <p className="tabular-nums">
              Showing <strong className="text-[#0B192C]">{filteredProducts.length}</strong>{' '}
              {filteredProducts.length === 1 ? 'product' : 'products'}
              {activeCategory ? ` in ${activeCategory.name}` : ' across all divisions'}
              {searchQuery.trim() ? ` matching "${searchQuery.trim()}"` : ''}
            </p>
            {(searchQuery.trim() || activeCategory || sortOrder !== 'default') && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="text-[#1D4ED8] hover:text-[#0B192C] font-medium transition-colors"
              >
                Reset all filters
              </button>
            )}
          </div>
        </section>

        {/* Product Listings Grid */}
        {filteredProducts.length > 0 ? (
          <section aria-label="Product Listings">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        ) : (
          <div className="bg-white border border-slate-200 rounded-xl p-12 text-center space-y-4">
            <h2 className="text-lg font-bold text-[#0B192C]">No matching products found</h2>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Try adjusting your search keywords or switching back to all categories to view our complete product catalog.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#0B192C] hover:bg-[#162C4A] rounded-md transition-colors"
              >
                Show All {PRODUCTS.length} Products
              </button>
            </div>
          </div>
        )}

        {/* Division Callout */}
        <section className="bg-[#0B192C] text-white rounded-xl p-7 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Need bulk supply coordination?
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Reach out to our commercial team for consolidated supply across all four divisions.
            </p>
          </div>
          <Link
            to={
              activeCategory
                ? `/contact?category=${encodeURIComponent(activeCategory.name)}`
                : '/contact'
            }
            className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#0B192C] bg-[#D4A646] hover:bg-[#E2B75B] rounded-md transition-colors whitespace-nowrap shrink-0"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </section>
      </div>
    </div>
  );
};
