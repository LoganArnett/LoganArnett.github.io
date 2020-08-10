import React, { FC, useEffect, useRef } from 'react';
import { useOnClickOutside } from 'hooks';

interface IModalProps {
  open: boolean;
  close: () => void;
  info: {
    title?: string;
    description?: string;
    techStack?: string;
  }
}

export const Modal: FC<IModalProps> = ({ open, close, info }) => {
  const { title, description, techStack } = info;
  const modalRef = useRef();

  useOnClickOutside(modalRef, close);

  useEffect(() => {
    if (open) {
      console.log(open)
      console.log(window.scrollY)
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.position = 'fixed';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [open])

  return (
  <div className={`modal ${open ? 'is-active' : ''}`}>
    <div className="modal-background"></div>
    <div className="modal-content" ref={modalRef}>
      <button className="modal-close is-large" aria-label="close" onClick={close}></button>
      <div className="box">
        <article className="media">
          <div className="media-content">
            <div className="content">
              {title ? <h2>{title}</h2> : null}
              {description ? (
                <p>
                  {description}
                </p>
              ) : null}
              {techStack ? (
                <>
                  <h3>Techstack Used:</h3>
                  <p>
                    {techStack}
                  </p>
                </>
              ) : null }
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
  )
}
