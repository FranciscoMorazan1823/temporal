import { memo, SVGProps } from 'react';

const Polygon3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 13 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M6.5 12 .005.75h12.99L6.5 12Z' fill='#00487C' />
  </svg>
);

const Memo = memo(Polygon3Icon);
export { Memo as Polygon3Icon };
