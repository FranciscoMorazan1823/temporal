import { memo, SVGProps } from 'react';

const Ellipse10Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 14 13' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={7} cy={6.5} rx={7} ry={6.5} fill='#fff' />
  </svg>
);

const Memo = memo(Ellipse10Icon);
export { Memo as Ellipse10Icon };
