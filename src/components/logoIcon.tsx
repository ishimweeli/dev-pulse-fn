import React from 'react';

interface props {
  className?: string;
}

function LogoIcon({ className = '' }: props) {
  return (
    <svg
      className={`w-full cursor-pointer mr-2 ${className}`}
      width="59"
      height="36"
      viewBox="0 0 59 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9.5" cy="18.5" r="5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M13.5 18.6112H18.2324C18.6625 18.6112 19.0444 18.3362 19.1808 17.9283L20.7981 13.0919C21.1151 12.1442 22.4728 12.1962 22.7164 13.1654L27.0802 30.5328C27.3478 31.5979 28.8876 31.5157 29.0403 30.4282L32.3788 6.64882C32.5367 5.52407 34.1498 5.49149 34.353 6.60894L38.013 26.7361C38.191 27.7149 39.5338 27.8616 39.9189 26.9442L43.1601 19.2241C43.316 18.8528 43.6794 18.6112 44.0821 18.6112H48.5"
        stroke="currentColor"
        strokeWidth="5"
      />
      <circle cx="52.5" cy="18.5" r="5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export default LogoIcon;
