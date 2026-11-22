export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 44 44" className={className} role="img" aria-label="LearnCare Academy">
      <defs>
        <linearGradient id="lcg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4d84ff" />
          <stop offset="100%" stopColor="#ffb23f" />
        </linearGradient>
      </defs>
      <path
        d="M6 10.5C6 7.46 8.46 5 11.5 5h21C35.54 5 38 7.46 38 10.5v14c0 3.04-2.46 5.5-5.5 5.5H21.6l-7.2 6.1a1.2 1.2 0 0 1-1.94-.95V30h-.96C8.46 30 6 27.54 6 24.5z"
        fill="url(#lcg)"
      />
      <path
        d="M15 21.5c2.6-1.1 4.3-3.3 5.2-6.4.6 3.6 2.6 5.7 6 6.6-3.5.9-5.4 3-6.1 6.4-.8-3.2-2.5-5.5-5.1-6.6z"
        fill="#0a1224"
      />
      <circle cx="30.5" cy="13.5" r="2.6" fill="#0a1224" opacity="0.85" />
    </svg>
  );
}
