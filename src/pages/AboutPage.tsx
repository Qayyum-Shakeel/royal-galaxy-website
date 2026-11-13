import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { CATEGORIES, WHY_CHOOSE_US, PRODUCTS } from '../data/catalog';
import { ASSETS } from '../data/assets';
import { ResilientImage } from '../components/ResilientImage';

export const AboutPage: React.FC = () => {
  return (
    <div>
      {/* 1. Company Introduction */}
      <section className="bg-[#0B192C] text-white py-14 sm:py-20 border-b border-white/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-medium text-[#E5BD67]">About Us</p>
            <h1 className="text-[clamp(2rem,3.5vw,3.25rem)] font-bold tracking-tight leading-[1.1] text-white text-balance">
              Royal Galaxy Trading and Contracting
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              An integrated corporate trading, supply, and contracting enterprise structured to deliver reliable wholesale provisions, construction materials, freight transport, and institutional hygiene products.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Company Overview */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-6">
              <div className="h-full min-h-[280px] overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                <ResilientImage
                  src={ASSETS.aboutCorporateOperations}
                  alt="Royal Galaxy Trading and Contracting commercial distribution complex"
                  className="w-full h-full object-cover"
                  eager
                />
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <p className="text-sm font-semibold text-[#1D4ED8]">Company Overview</p>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0B192C] text-balance">
                  Connecting wholesale sourcing with active site execution
                </h2>
                <p className="text-base text-slate-600 leading-relaxed">
                  Commercial buyers and project contractors frequently face fragmented supply chains—managing separate vendors for daily food provisions, civil building materials, heavy vehicle tyres, and facility sanitation supplies.
                </p>
                <p className="text-base text-slate-600 leading-relaxed">
                  Royal Galaxy Trading and Contracting resolves that complexity by uniting four complementary divisions under one structured procurement operation. Our teams coordinate inventory sourcing, quality inspection, palletized staging, and scheduled road delivery so client projects stay supplied without interruption.
                </p>
              </div>

              <dl className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200">
                <div>
                  <dt className="text-xs font-medium text-slate-500">Operational Divisions</dt>
                  <dd className="mt-1 text-2xl font-bold text-[#0B192C] tabular-nums">
                    {CATEGORIES.length}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-slate-500">Catalog Products</dt>
                  <dd className="mt-1 text-2xl font-bold text-[#0B192C] tabular-nums">
                    {PRODUCTS.length}
                  </dd>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <dt className="text-xs font-medium text-slate-500">Supply Scope</dt>
                  <dd className="mt-1 text-base font-semibold text-[#0B192C]">
                    Wholesale &amp; B2B
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Business Areas */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-2 mb-10">
            <p className="text-sm font-semibold text-[#1D4ED8]">Business Areas</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0B192C]">
              Core Divisions &amp; Supply Scope
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {CATEGORIES.map((category) => (
              <div
                key={category.slug}
                className="bg-white border border-slate-200 rounded-xl p-7 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-mono tabular-nums text-slate-500">
                      {category.code}
                    </span>
                    <Link
                      to={`/products/${category.slug}`}
                      className="text-xs font-semibold text-[#1D4ED8] hover:text-[#0B192C] transition-colors whitespace-nowrap"
                    >
                      Explore Division →
                    </Link>
                  </div>
                  <h3 className="text-xl font-bold text-[#0B192C]">{category.name}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {category.description}
                  </p>
                  <ul className="space-y-2 pt-2">
                    {category.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <Check className="w-4 h-4 text-[#B45309] shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    to={`/products/${category.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B192C] hover:text-[#1D4ED8] transition-colors"
                  >
                    <span>Browse {category.shortName} Products</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Strengths */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-2 mb-10">
            <p className="text-sm font-semibold text-[#1D4ED8]">Our Strengths</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0B192C]">
              Operational Discipline Across Every Order
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((strength, idx) => (
              <div
                key={strength.title}
                className="p-6 rounded-xl border border-slate-200 bg-[#F8FAFC] space-y-3"
              >
                <p className="text-xs font-mono tabular-nums text-[#B45309] font-medium">
                  0{idx + 1}
                </p>
                <h3 className="text-base font-bold text-[#0B192C] leading-snug">
                  {strength.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Call To Action */}
      <section className="bg-[#0B192C] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Partner with Royal Galaxy Trading and Contracting
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Discuss recurring wholesale contracts, project material supply, or commercial transport requirements with our commercial team.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#0B192C] bg-[#D4A646] hover:bg-[#E2B75B] rounded-md transition-colors whitespace-nowrap shrink-0"
            >
              <span>Contact Our Team</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-white border border-white/25 hover:bg-white/10 rounded-md transition-colors whitespace-nowrap shrink-0"
            >
              View Product Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
