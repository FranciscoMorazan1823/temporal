import { memo, SVGProps } from 'react';

const Arrow1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 24 42' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M13.06.94a1.5 1.5 0 0 0-2.12 0l-9.547 9.545a1.5 1.5 0 1 0 2.122 2.122L12 4.12l8.485 8.486a1.5 1.5 0 1 0 2.122-2.122L13.06.94ZM13.5 42V2h-3v40h3Z'
      fill='#fff'
    />
  </svg>
);

const Memo = memo(Arrow1Icon);
export { Memo as Arrow1Icon };
