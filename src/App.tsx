import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ContactPage } from './pages/ContactPage';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
};

const NotFoundPage: React.FC = () => (
  <section className="py-24 bg-[#F8FAFC]">
    <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
      <p className="text-sm font-mono text-[#B45309] font-medium">404</p>
      <h1 className="text-3xl font-bold text-[#0B192C]">Page Not Found</h1>
      <p className="text-base text-slate-600 max-w-md mx-auto">
        The requested page could not be located. Return to our corporate homepage or browse all product divisions.
      </p>
      <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#0B192C] hover:bg-[#162C4A] rounded-md transition-colors"
        >
          Back to Home
        </Link>
        <Link
          to="/products"
          className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-[#0B192C] bg-white border border-slate-200 hover:bg-slate-50 rounded-md transition-colors"
        >
          Browse Products
        </Link>
      </div>
    </div>
  </section>
);

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A]">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:categorySlug" element={<ProductsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
