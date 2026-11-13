import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import {
  CATEGORIES,
  PRODUCTS,
  SERVICES,
  WHY_CHOOSE_US,
  CategorySlug,
} from '../data/catalog';
import { ASSETS } from '../data/assets';
import { ResilientImage } from '../components/ResilientImage';
import { ProductCard } from '../components/ProductCard';

export const HomePage: React.FC = () => {
  const [featuredFilter, setFeaturedFilter] = useState<'all' | CategorySlug>('all');

  const featuredProducts = useMemo(() => {
    const base = PRODUCTS.filter((item) => item.featured);
    if (featuredFilter === 'all') return base;
    return PRODUCTS.filter((item) => item.categorySlug === featuredFilter).slice(0, 4);
  }, [featuredFilter]);

  const categoryCounts = useMemo(() => {
    const map: Record<string, number> = {};
    for (const p of PRODUCTS) {
      map[p.categorySlug] = (map[p.categorySlug] || 0) + 1;
    }
    return map;
  }, []);

  return (
    <div>
      {/* 1. Hero Section */}
      <section className="relative bg-[#0B192C] text-white overflow-hidden">
        <div className="absolute inset-0">
          <ResilientImage
            src={ASSETS.heroCorporateTrading}
            alt="International maritime port and commercial logistics operations"
            className="w-full h-full object-cover opacity-55"
            eager
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#0B192C]/95 via-[#0B192C]/82 to-[#0B192C]/45"
          />
        </div>

        <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14 sm:pt-24 sm:pb-20">
          <div className="max-w-2xl space-y-6">
            <p className="text-sm font-medium tracking-wide text-[#E5BD67]">
              Royal Galaxy Trading and Contracting
            </p>
            <h1 className="text-[clamp(2.25rem,4vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-white text-balance">
              Multi-Sector Supply, Contracting &amp; Commercial Logistics
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl">
              Dependable wholesale sourcing and project delivery across Food &amp; Grocery commodities, Building Materials, Transportation &amp; Fleet supplies, and Institutional Cleaning solutions.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#0B192C] bg-[#D4A646] hover:bg-[#E2B75B] rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B192C]"
              >
                <span>Explore Product Catalog</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-white border border-white/25 hover:bg-white/10 rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* 4-Column Division Strip */}
          <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                to={`/products/${cat.slug}`}
                className="group block py-2 pr-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A646] rounded-md"
              >
                <div className="flex items-center justify-between text-xs font-mono tabular-nums text-[#E5BD67]">
                  <span>{cat.code}</span>
                  <span>{categoryCounts[cat.slug] || 0} Products</span>
                </div>
                <p className="mt-1.5 text-base font-semibold text-white group-hover:text-[#E5BD67] transition-colors">
                  {cat.name}
                </p>
                <p className="mt-1 text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {cat.tagline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Company Introduction */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <p className="text-sm font-semibold text-[#1D4ED8]">Company Introduction</p>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0B192C] text-balance">
                  Structured procurement built for hospitality, construction, and commercial operations
                </h2>
                <p className="text-base text-slate-600 leading-relaxed">
                  Royal Galaxy Trading and Contracting operates as an integrated trade and supply partner connecting wholesale commodity markets, civil construction material yards, heavy commercial fleet logistics, and institutional hygiene distribution.
                </p>
                <p className="text-base text-slate-600 leading-relaxed">
                  By consolidating four high-demand supply divisions under one operational framework, we help contractors, catering teams, supermarkets, and facility operators streamline sourcing and receive coordinated deliveries.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-6 text-sm text-slate-700">
                  <span>
                    <strong className="font-semibold text-[#0B192C] tabular-nums">4</strong> Core Divisions
                  </span>
                  <span aria-hidden="true" className="text-slate-300">/</span>
                  <span>
                    <strong className="font-semibold text-[#0B192C] tabular-nums">{PRODUCTS.length}</strong> Catalog Lines
                  </span>
                </div>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B192C] hover:text-[#1D4ED8] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Read About Our Company</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="h-full min-h-[280px] aspect-[16/10] lg:aspect-auto overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                <ResilientImage
                  src={ASSETS.aboutCorporateOperations}
                  alt="Corporate headquarters and distribution warehouse facility"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Categories */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div className="space-y-2 max-w-2xl">
              <p className="text-sm font-semibold text-[#1D4ED8]">Our Categories</p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0B192C]">
                Four Specialized Trading &amp; Supply Divisions
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B192C] hover:text-[#1D4ED8] transition-colors whitespace-nowrap shrink-0"
            >
              <span>Browse Full Catalog</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {CATEGORIES.map((category) => (
              <article
                key={category.slug}
                className="group bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col sm:flex-row transition-[transform,box-shadow] duration-150 hover:-translate-y-0.5 hover:shadow-md"
              >
                <Link
                  to={`/products/${category.slug}`}
                  className="sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden bg-slate-100 shrink-0"
                >
                  <ResilientImage
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </Link>

                <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="font-mono tabular-nums">{category.code}</span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums">{categoryCounts[category.slug] || 0} Products</span>
                    </div>
                    <h3 className="mt-2 text-xl font-bold text-[#0B192C]">
                      <Link
                        to={`/products/${category.slug}`}
                        className="hover:text-[#1D4ED8] transition-colors"
                      >
                        {category.name}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {category.description}
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link
                      to={`/products/${category.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B192C] group-hover:text-[#1D4ED8] transition-colors whitespace-nowrap"
                    >
                      <span>View {category.shortName}</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Products */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div className="space-y-2 max-w-xl">
              <p className="text-sm font-semibold text-[#1D4ED8]">Featured Products</p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0B192C]">
                Core Commercial &amp; Contracting Lines
              </h2>
            </div>

            {/* Interactive Category Filter Buttons */}
            <div
              role="group"
              aria-label="Filter featured products by category"
              className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg border border-slate-200"
            >
              <button
                type="button"
                onClick={() => setFeaturedFilter('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  featuredFilter === 'all'
                    ? 'bg-white text-[#0B192C] shadow-xs'
                    : 'text-slate-600 hover:text-[#0B192C]'
                }`}
              >
                All Divisions
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.slug}
                  type="button"
                  onClick={() => setFeaturedFilter(cat.slug)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                    featuredFilter === cat.slug
                      ? 'bg-white text-[#0B192C] shadow-xs'
                      : 'text-slate-600 hover:text-[#0B192C]'
                  }`}
                >
                  {cat.shortName}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              to={featuredFilter === 'all' ? '/products' : `/products/${featuredFilter}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#0B192C] hover:bg-[#162C4A] rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] focus-visible:ring-offset-2"
            >
              <span>
                {featuredFilter === 'all'
                  ? `View All ${PRODUCTS.length} Products`
                  : 'View All Items in Division'}
              </span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Our Services */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-2 mb-10">
            <p className="text-sm font-semibold text-[#1D4ED8]">Our Services</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0B192C]">
              End-to-End Trading, Contracting &amp; Fulfillment
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.number}
                className="bg-white border border-slate-200 rounded-xl p-7 space-y-3"
              >
                <h3 className="text-lg font-bold text-[#0B192C]">
                  <span className="font-mono tabular-nums text-[#B45309] mr-2">
                    {service.number}.
                  </span>
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-2 mb-10">
            <p className="text-sm font-semibold text-[#1D4ED8]">Why Choose Us</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0B192C]">
              Built for Dependable Commercial Execution
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((pillar) => (
              <div
                key={pillar.title}
                className="p-6 rounded-xl border border-slate-200 bg-[#F8FAFC] space-y-3"
              >
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-[#0B192C] text-[#E5BD67]">
                  <Check className="w-4 h-4" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-[#0B192C] leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Call To Action */}
      <section className="bg-[#0B192C] text-white border-t border-white/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white text-balance">
              Ready to coordinate bulk supply or contracting procurement?
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Share your bill of quantities, product requirements, or freight schedule with our commercial team for supply coordination.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#0B192C] bg-[#D4A646] hover:bg-[#E2B75B] rounded-md transition-colors whitespace-nowrap shrink-0"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-white border border-white/25 hover:bg-white/10 rounded-md transition-colors whitespace-nowrap shrink-0"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
