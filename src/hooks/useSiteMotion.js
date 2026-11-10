import { useEffect } from 'react';
import Lenis from 'lenis';

function useSiteMotion() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const revealElements = Array.from(document.querySelectorAll('[data-reveal]'));
    const flyElements = Array.from(document.querySelectorAll('[data-fly]'));
    let rafId = 0;

    // Fast reveal helper
    const checkReveals = () => {
      const windowH = window.innerHeight;
      revealElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= windowH + 120 && rect.bottom >= -50) {
          const delay = element.getAttribute('data-delay');
          if (delay) {
            element.style.transitionDelay = `${delay}ms`;
          }
          element.classList.add('is-visible');
        }
      });
    };

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const delay = entry.target.getAttribute('data-delay');
          if (delay) {
            entry.target.style.transitionDelay = `${delay}ms`;
          }

          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0,
        rootMargin: '150px 0px 100px 0px',
      },
    );

    revealElements.forEach((element) => revealObserver.observe(element));

    // Run immediate check so visible elements never show blank space
    checkReveals();
    setTimeout(checkReveals, 100);
    setTimeout(checkReveals, 400);

    const updateFlyItems = () => {
      flyElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const speed = Number(element.getAttribute('data-speed') || 0.18);
        const rotate = Number(element.getAttribute('data-rotate') || 8);
        const direction = Number(element.getAttribute('data-direction') || 1);
        const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        const clamped = Math.max(0, Math.min(1, progress));
        const translateY = (0.5 - clamped) * 120 * speed;
        const translateX = Math.sin(clamped * Math.PI) * 34 * speed * direction;
        const rotation = (clamped - 0.5) * rotate;

        element.style.setProperty('--fly-x', `${translateX.toFixed(2)}px`);
        element.style.setProperty('--fly-y', `${translateY.toFixed(2)}px`);
        element.style.setProperty('--fly-r', `${rotation.toFixed(2)}deg`);
      });
    };

    if (prefersReducedMotion) {
      revealElements.forEach((element) => element.classList.add('is-visible'));
      updateFlyItems();
      return () => revealObserver.disconnect();
    }

    const lenis = new Lenis({
      duration: 1.0,
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.05,
      syncTouch: false,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });

    const onFrame = (time) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(onFrame);
    };

    const onScroll = () => {
      updateFlyItems();
      checkReveals();
    };

    lenis.on('scroll', onScroll);
    updateFlyItems();
    rafId = window.requestAnimationFrame(onFrame);

    window.addEventListener('resize', () => {
      updateFlyItems();
      checkReveals();
    });

    window.addEventListener('hashchange', () => {
      setTimeout(checkReveals, 50);
      setTimeout(checkReveals, 300);
    });

    return () => {
      revealObserver.disconnect();
      lenis.off('scroll', onScroll);
      lenis.destroy();
      window.removeEventListener('resize', updateFlyItems);
      window.cancelAnimationFrame(rafId);
    };
  }, []);
}

export default useSiteMotion;
