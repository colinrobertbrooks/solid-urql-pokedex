import { Accessor, createEffect, onCleanup } from 'solid-js';

const lock = (position: number) => {
  const scrollbarWidth = window.innerWidth - document.body.offsetWidth;
  document.body.style.position = 'fixed';
  document.body.style.top = `-${position}px`;
  document.body.style.width = `calc(100vw - ${scrollbarWidth}px)`;
};

const unlock = () => {
  const scrollY = Math.abs(parseInt(document.body.style.top || '0'));
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = `100%`;
  window.scrollTo(0, scrollY);
};

export const scrollLock = (isActive: Accessor<Boolean>) => {
  createEffect(() => {
    if (isActive()) lock(window.scrollY);
    else unlock();
  });
  onCleanup(unlock);
};
