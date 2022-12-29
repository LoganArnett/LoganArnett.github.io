import React, { FC } from 'react'

import { ScrollLink } from 'components'

interface ScrollToTopProps { show: boolean }

export const ScrollToTop: FC<ScrollToTopProps> = ({ show }) => (
  <ScrollLink href="#home" id="toTop" title="Go to top" className={`scroll-to ${show ? `is-flex` : ''}`}>
    <svg className="svg-inline--fa fa-angle-up fa-w-10" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"></path></svg><i className="fas fa-angle-up"></i>
  </ScrollLink>
)