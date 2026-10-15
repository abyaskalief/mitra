import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  showSubtitle = false,
}) => {
  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Geometric architectural mark with roof trusses & foundation lines */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-[#16324F] text-white shadow-sm shrink-0 border border-slate-700/20">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          aria-hidden="true"
        >
          {/* Outer geometric roof gable */}
          <path
            d="M6 24L20 9L34 24"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Inner structural truss / drafting triangle */}
          <path
            d="M13 24L20 16L27 24"
            stroke="#F28C28"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Foundation horizontal tie beam */}
          <path
            d="M9 28H31"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Vertical central support axis */}
          <path
            d="M20 16V28"
            stroke="#F28C28"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Plinth ground line */}
          <circle cx="20" cy="32" r="1.5" fill="#F28C28" />
        </svg>
      </div>

      <div className="flex flex-col">
        <span
          className={`font-extrabold tracking-tight text-base sm:text-lg leading-none ${
            isLight ? 'text-white' : 'text-[#16324F]'
          }`}
        >
          MITRA KONSTRUKSI
        </span>
        {showSubtitle && (
          <span
            className={`text-[11px] font-medium tracking-wider uppercase mt-1 ${
              isLight ? 'text-slate-300' : 'text-[#245B86]'
            }`}
          >
            Konstruksi &amp; Interior Lampung
          </span>
        )}
      </div>
    </div>
  );
};
