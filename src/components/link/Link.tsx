import * as React from 'react';
import TransitionLink from 'gatsby-plugin-transition-link'

interface ILinkProps {
  children: React.ReactNode;
  to: string;
  [key: string]: any;
}

export const Link = ({ children, state, ...props }: ILinkProps) => {

  return (


	  <TransitionLink {...props} exit={{ length: 1 }} entry={{ length: 1 }}>        
	    {children}
	  </TransitionLink>                      




  );
};

