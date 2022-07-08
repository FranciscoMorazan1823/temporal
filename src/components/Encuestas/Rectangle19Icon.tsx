import { memo, SVGProps } from 'react';

const Rectangle19Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 458 181' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 10C0 4.477 4.477 0 10 0h438c5.523 0 10 4.477 10 10v161c0 5.523-4.477 10-10 10H10c-5.523 0-10-4.477-10-10V10Z'
      fill='#FFFBFB'
    />
  </svg>
);

const Memo = memo(Rectangle19Icon);
export { Memo as Rectangle19Icon };
