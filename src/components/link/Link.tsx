import * as React from 'react';
import TransitionLink from 'gatsby-plugin-transition-link'

interface ILinkProps {
  children: React.ReactNode;
  to: string;
  [key: string]: any;
}

export const Link = ({ children, to, ...props }: ILinkProps) => (
  <TransitionLink to={to} {...props} exit={{ length: 1 }} entry={{ delay: 1 }}>        
    {children}
  </TransitionLink>
);
