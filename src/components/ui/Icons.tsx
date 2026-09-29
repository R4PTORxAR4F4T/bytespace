type P = { className?: string };

export const LogoMark = ({ className = "h-8 w-7" }: P) => (
  <svg viewBox="0 0 29 32" className={className} fill="none" aria-hidden>
    <path d="M0 0h7v11.5c2-2 4.6-3 7.6-3C22 8.5 27 13 27 20s-5 12-12.400 12C11 32 7.900 30.800 6.200 28.500L5.500 31.500H0V0Z" fill="#D4FB20" />
    <circle cx="14.500" cy="20" r="4.200" fill="#003BE2" />
  </svg>
);
export const Star = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="#D4FB20" stroke="#D4FB20" strokeWidth="1.500" strokeLinejoin="round" aria-hidden>
    <path d="m12 3 2.700 5.600 6.100.9-4.400 4.300 1 6.100L12 17l-5.400 2.900 1-6.100L3.200 9.500l6.100-.9L12 3Z" />
  </svg>
);
export const SignalBars = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="#4B4C53" aria-hidden>
    <rect x="5" y="14" width="3" height="5" rx="1" /><rect x="10.500" y="10" width="3" height="9" rx="1" /><rect x="16" y="5" width="3" height="14" rx="1" />
  </svg>
);
export const Search = ({ className = "h-6 w-6" }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#82868E" strokeWidth="2" strokeLinecap="round" aria-hidden>
    <circle cx="11" cy="11" r="7" /><path d="m20 20-3.500-3.500" />
  </svg>
);
export const Cart = ({ className = "h-6 w-6" }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M3 4h2l2.500 11h11L21 7H6" /><circle cx="9" cy="20" r="1.200" /><circle cx="17" cy="20" r="1.200" />
  </svg>
);
export const CheckCircle = ({ className = "h-6 w-6" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <circle cx="12" cy="12" r="11" fill="#003BE2" /><path d="m7 12.500 3.500 3.500L17 9" fill="none" stroke="#fff" strokeWidth="2.200" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
export const Facebook = ({ className = "h-10 w-10" }: P) => (
  <svg viewBox="0 0 40 40" className={className} aria-hidden><circle cx="20" cy="20" r="14" fill="#000" /><path d="M21.500 31v-9h3l.5-3.500h-3.500v-2.200c0-1 .3-1.700 1.800-1.700H25V11.500c-.3 0-1.400-.1-2.600-.1-2.700 0-4.400 1.600-4.400 4.500v2.600h-3V22h3v9h3.500Z" fill="#fff" /></svg>
);
export const Google = ({ className = "h-10 w-10" }: P) => (
  <svg viewBox="0 0 40 40" className={className} aria-hidden><path d="M31 20.300c0-.7-.1-1.300-.2-1.900H20v3.700h6.200a5.300 5.300 0 0 1-2.300 3.500v2.900h3.700c2.200-2 3.400-5 3.400-8.200Z" fill="#4285F4" /><path d="M20 31.500c3.100 0 5.700-1 7.600-2.800l-3.700-2.900c-1 .7-2.300 1.100-3.900 1.100-3 0-5.500-2-6.400-4.800H9.800v3A11.500 11.500 0 0 0 20 31.500Z" fill="#34A853" /><path d="M13.600 22.100a6.900 6.900 0 0 1 0-4.400v-3H9.800a11.500 11.500 0 0 0 0 10.400l3.800-3Z" fill="#FBBC05" /><path d="M20 12.700c1.700 0 3.200.6 4.400 1.700l3.300-3.300A11.500 11.500 0 0 0 9.800 14.700l3.800 3c.9-2.800 3.400-5 6.400-5Z" fill="#EA4335" /></svg>
);
