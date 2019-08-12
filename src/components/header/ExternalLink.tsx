import * as React from 'react';
import { Link as InternalLink } from 'components/link/Link';

import s from './ExternalLink.scss';

interface ILinkProps {
  name: string;
  to: string;
  icon?: React.ReactNode;
  children: React.ReactNode
}

export const ExternalLink = ({ className, name, to, icon, permanent, children, state, ...props }: ILinkProps) => {


  const content = () => (
    <>
      {children}
      {icon && React.cloneElement((icon as any), { className: `${s.link__icon} ${className}`})}
    </>
  );


    return (
      <a className={`${s.link} ${className}`} {...props} target="_blank" rel="noopener noreferrer" href={to}>
          {content()}
      </a>
    );



};
