import React from 'react';
import { ProductItem } from '../data/catalog';
import { ResilientImage } from './ResilientImage';

interface ProductCardProps {
  product: ProductItem;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <article className="group flex flex-col bg-white border border-slate-200 rounded-lg overflow-hidden transition-[transform,box-shadow] duration-150 hover:-translate-y-0.5 hover:shadow-md">
      <div className="w-full aspect-[4/3] overflow-hidden bg-slate-100">
        <ResilientImage
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex items-center justify-between gap-3 px-4 py-3.5">
        <h3 className="text-base font-semibold text-[#0B192C] leading-snug truncate">
          {product.name}
        </h3>
        <span className="text-xs font-semibold text-emerald-700 whitespace-nowrap shrink-0">
          In Stock
        </span>
      </div>
    </article>
  );
};
