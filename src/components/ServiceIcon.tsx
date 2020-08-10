import React, { FC } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface IServiceIcon {
  content: string;
  icon: IconProp
}

export const ServiceIcon: FC<IServiceIcon> = ({ content, icon }) => (
  <div
    className="column is-4 has-text-centered"
    data-aos="fade-in"
    data-aos-easing="linear"
  >
    <FontAwesomeIcon className='fa-icon' icon={icon} size="3x" />
    <h2>
      {content}
    </h2>
  </div>
)
