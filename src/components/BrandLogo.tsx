import React from 'react';

interface BrandLogoProps {
  variant?: 'dark' | 'light';
  showFullText?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  showFullText = true,
  className = '',
}) => {
  const isLightText = variant === 'light';

  return (
    <span className={`inline-flex items-center gap-2.5 select-none whitespace-nowrap shrink-0 ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="w-8 h-8 shrink-0"
      >
        <rect
          width="64"
          height="64"
          rx="12"
          fill={isLightText ? '#132642' : '#0B192C'}
          stroke={isLightText ? 'rgba(255,255,255,0.16)' : 'rgba(11,25,44,0.12)'}
          strokeWidth="2"
        />
        <path
          d="M16 42L24 22L32 34L40 22L48 42H16Z"
          stroke="#D4A646"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        <circle cx="32" cy="16.5" r="3" fill="#D4A646" />
        <path d="M15 48.5H49" stroke="#F8FAFC" strokeWidth="2.5" strokeLinecap="round" />
      </svg>

      {showFullText && (
        <span
          className={`font-display font-bold tracking-tight text-base sm:text-lg whitespace-nowrap shrink-0 ${
            isLightText ? 'text-white' : 'text-[#0B192C]'
          }`}
        >
          Royal Galaxy
          <span className="hidden xl:inline font-semibold"> Trading and Contracting</span>
        </span>
      )}
    </span>
  );
};
