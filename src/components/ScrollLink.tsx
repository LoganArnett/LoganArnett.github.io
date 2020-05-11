import React, { FC, SyntheticEvent } from 'react'

interface ScrollLinkProps {
  offset?: any;
  onClick?: (e: SyntheticEvent<HTMLAnchorElement>) => void;
  href: string;
}

export const ScrollLink: FC<ScrollLinkProps> = ({ offset, onClick, children, ...props }) => {

  const smoothScroll = (e: SyntheticEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    let offset = () => 0
    if (typeof offset !== 'undefined') {
      if (!!(offset && offset.constructor && offset.apply)) {
        offset = offset
      } else {
        offset = () => parseInt(`${offset}`)
      }
    }
    const id = e.currentTarget.getAttribute('href').slice(1)
    const $anchor = document.getElementById(id);
    const offsetTop = $anchor.getBoundingClientRect().top + window.pageYOffset;
    window.scroll({
      top: offsetTop - offset(),
      behavior: 'smooth'
    })
    if (onClick) onClick(e)
  }

    return (
      <a {...props} onClick={smoothScroll}>{children}</a>
    )
}