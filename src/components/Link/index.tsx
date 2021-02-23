import React from 'react';
import Link from 'next/link';

const link = ({ to, children }: { to: string, children: React.ReactNode }) => (
  <Link href={to}>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a>
      {children}
    </a>
  </Link>
);

export default link;
