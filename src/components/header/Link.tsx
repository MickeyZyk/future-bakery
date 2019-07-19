import * as React from 'react';
import { Link as InternalLink } from 'components/link/Link';

import s from './Link.scss';

interface ILinkProps {
  name: string;
  to: string;
  icon?: React.ReactNode;
  children: React.ReactNode
}

export const Link = ({ className, name, to, icon, permanent, children, state, ...props }: ILinkProps) => {
  const isLink = (typeof to !== 'undefined');
  const isExternal = isLink && /^((https?:)?\/\/|[0-9a-zA-Z]+:)/.test(to || '');

  const content = () => (
    <>
      {children}
      {icon && React.cloneElement((icon as any), { className: `${s.link__icon} ${className}`})}
    </>
  );

  if (isExternal) {
    return (
      <a className={s.link} {...props} target="_blank" rel="noopener noreferrer" href={to}>
          {content()}
      }
      </a>
    );
  }

  return (

 
      <InternalLink className={permanent ? `${s.permanent} ${className}`: `${s.link} ${className}`} activeClassName={s.link__active} to={to} {...props} >
          {content()}
      </InternalLink>

    
 
  );
};
