import React from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';
import { CATEGORIES, DEMO_CONTACT_INFO } from '../data/catalog';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B192C] text-slate-300 border-t border-white/10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Summary */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A646] rounded-md">
              <BrandLogo variant="light" />
            </Link>
            <p className="text-sm font-semibold text-white">
              Royal Galaxy Trading and Contracting
            </p>
            <p className="text-sm text-slate-300/90 leading-relaxed max-w-sm">
              Corporate procurement, multi-category wholesale supply, freight logistics, and contracting material solutions across four integrated operational divisions.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-300 hover:text-white transition-colors">
                  Products &amp; Categories
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Category Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-semibold text-white">Product Divisions</h3>
            <ul className="space-y-2.5 text-sm">
              {CATEGORIES.map((category) => (
                <li key={category.slug}>
                  <Link
                    to={`/products/${category.slug}`}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Demo Contact Info */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-semibold text-white">Contact Desk</h3>
            <div className="space-y-2 text-sm text-slate-300/90">
              <p>{DEMO_CONTACT_INFO.address}</p>
              <p>{DEMO_CONTACT_INFO.phone}</p>
              <p>{DEMO_CONTACT_INFO.email}</p>
              <p className="text-xs text-slate-400 pt-1">{DEMO_CONTACT_INFO.hours}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Royal Galaxy Trading and Contracting. All rights reserved.
          </p>
          <p className="text-slate-400">
            Frontend demonstration catalog · Contact details shown are placeholder demo data.
          </p>
        </div>
      </div>
    </footer>
  );
};
