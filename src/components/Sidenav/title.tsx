import { ReactNode } from 'react';

interface SidenavTitleInterface {
  children: ReactNode;
  href?: string;
}

export function SidenavTitle({ children, href }: SidenavTitleInterface) {
  return (
    <a className="flex items-center justify-center h-20 text-lg font-medium tracking-wider text-white focus:outline-none" href={href}>
      {children}
    </a>
  );
}

SidenavTitle.defaultProps = { href: '#' };
SidenavTitle.displayName = 'Sidenav.Title';