export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const getSectionIdFromHash = (hash: string) => {
  const rawHash = hash.startsWith('#') ? hash.slice(1) : hash;
  return decodeURIComponent(rawHash);
};

export const scrollToSectionId = (id: string, behavior?: ScrollBehavior) => {
  const target = document.getElementById(id);

  if (!target) {
    return false;
  }

  target.scrollIntoView({
    behavior: behavior ?? (prefersReducedMotion() ? 'auto' : 'smooth'),
    block: 'start',
  });

  return true;
};
