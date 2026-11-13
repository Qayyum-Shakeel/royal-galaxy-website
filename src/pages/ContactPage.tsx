import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Phone, Mail, Clock, Check } from 'lucide-react';
import { CATEGORIES, COMPANY_CONTACT_INFO } from '../data/catalog';

export const ContactPage: React.FC = () => {
  return (
    <div className="bg-[#F8FAFC] min-h-[75vh]">
      {/* Page Header */}
      <section className="bg-[#0B192C] text-white py-12 sm:py-16 border-b border-white/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <p className="text-sm font-medium text-[#E5BD67]">Contact Us</p>
            <h1 className="text-[clamp(2rem,3.5vw,3rem)] font-bold tracking-tight text-white">
              Royal Galaxy Trading and Contracting
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              Corporate office details, operating hours, and division overview for wholesale supply, construction materials, transportation, and cleaning products.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Corporate Contact Information */}
          <div className="lg:col-span-5">
            <section
              aria-labelledby="contact-info-heading"
              className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6"
            >
              <div>
                <h2 id="contact-info-heading" className="text-xl font-bold text-[#0B192C]">
                  Corporate Contact Information
                </h2>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Reach our commercial office during business hours across any of our four supply divisions.
                </p>
              </div>

              <dl className="divide-y divide-slate-200 border-t border-slate-200 text-sm">
                <div className="py-4 flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#B45309] shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="space-y-1">
                    <dt className="text-xs font-medium text-slate-500">Corporate Office</dt>
                    <dd className="font-medium text-[#0B192C]">{COMPANY_CONTACT_INFO.address}</dd>
                  </div>
                </div>

                <div className="py-4 flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#B45309] shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="space-y-1">
                    <dt className="text-xs font-medium text-slate-500">Office Telephone</dt>
                    <dd className="font-medium text-[#0B192C] font-mono tabular-nums">
                      {COMPANY_CONTACT_INFO.phone}
                    </dd>
                  </div>
                </div>

                <div className="py-4 flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-[#B45309] shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="space-y-1">
                    <dt className="text-xs font-medium text-slate-500">Email Address</dt>
                    <dd className="font-medium text-[#0B192C]">{COMPANY_CONTACT_INFO.email}</dd>
                  </div>
                </div>

                <div className="py-4 flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-[#B45309] shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="space-y-1">
                    <dt className="text-xs font-medium text-slate-500">Business Hours</dt>
                    <dd className="font-medium text-[#0B192C]">{COMPANY_CONTACT_INFO.hours}</dd>
                  </div>
                </div>
              </dl>
            </section>
          </div>

          {/* Right Column: Business Divisions Overview (View-Only) */}
          <div className="lg:col-span-7">
            <section
              aria-labelledby="divisions-directory-heading"
              className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6"
            >
              <div>
                <h2 id="divisions-directory-heading" className="text-xl font-bold text-[#0B192C]">
                  Commercial Divisions &amp; Supply Directory
                </h2>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                  Browse our active product categories to view available items across each operational sector.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CATEGORIES.map((category) => (
                  <Link
                    key={category.slug}
                    to={`/products/${category.slug}`}
                    className="group flex flex-col justify-between p-5 rounded-lg border border-slate-200 bg-[#F8FAFC] hover:bg-white hover:border-[#0B192C]/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A]"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span className="font-mono tabular-nums">{category.code}</span>
                        <ArrowRight
                          className="w-4 h-4 text-slate-400 group-hover:text-[#0B192C] transition-colors"
                          aria-hidden="true"
                        />
                      </div>
                      <h3 className="text-base font-bold text-[#0B192C] group-hover:text-[#1D4ED8] transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {category.tagline}
                      </p>
                    </div>

                    <ul className="mt-4 pt-3 border-t border-slate-200/80 space-y-1.5">
                      {category.highlights.slice(0, 2).map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-[#B45309] shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
