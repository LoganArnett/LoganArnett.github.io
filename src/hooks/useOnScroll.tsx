import { useEffect, useState } from 'react';

export function useOnScroll(topValue: number) {
  const [brokeThreshold, setBrokeThreshold] = useState<boolean>(false);

  const listenToScroll = () => {
    if (document.body.scrollTop > topValue || document.documentElement.scrollTop > topValue) {
      setBrokeThreshold(true)
    } else {
      setBrokeThreshold(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);

    return () => {
      window.removeEventListener('scroll', listenToScroll)
    }
  })

  return brokeThreshold;
}