import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface MotionConfig {
  animationPreset?: 'fadeUp' | 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleUp' | 'stagger' | 'parallax' | 'pinned';
  parallaxPreset?: 'none' | 'softBackgroundDrift' | 'layeredDepth' | 'foregroundFloat' | 'splitColumn' | 'pinnedStorytelling' | 'galleryStrip' | 'productSpotlight' | 'textOverMedia' | 'videoHero';
  hoverStyle?: 'lift' | 'glow' | 'tilt' | 'depth';
  transitionStyle?: 'smooth' | 'dramatic' | 'subtle';
  speed?: number;
  delay?: number;
}

export interface CarouselConfig {
  carouselType?: 'classic' | 'cinematic' | 'stackedCard' | 'centerMode' | 'splitContent' | 'vertical' | 'filmstrip' | 'logoMarquee' | 'testimonialQuote' | 'productRail' | 'editorialStory' | 'beforeAfter' | 'coverflow' | 'continuousRail' | 'thumbnailGallery';
  slidesPerView?: number;
  autoplay?: boolean;
  loop?: boolean;
  speed?: number;
  controlsStyle?: 'minimal' | 'bold' | 'hidden';
  paginationStyle?: 'dots' | 'numbers' | 'progress' | 'thumbnail';
  peekAmount?: number;
  direction?: 'horizontal' | 'vertical';
}

const defaultMotionConfig: MotionConfig = {
  animationPreset: 'fadeUp',
  parallaxPreset: 'none',
  hoverStyle: 'lift',
  transitionStyle: 'smooth',
  speed: 1,
  delay: 0,
};

const defaultCarouselConfig: CarouselConfig = {
  carouselType: 'classic',
  slidesPerView: 1,
  autoplay: true,
  loop: true,
  speed: 1,
  controlsStyle: 'minimal',
  paginationStyle: 'dots',
  direction: 'horizontal',
};

export function initMotion(element: Element, config: MotionConfig = {}): gsap.core.Tween | gsap.core.Timeline | null {
  const { animationPreset, speed, delay } = { ...defaultMotionConfig, ...config };
  const duration = 0.8 / speed;
  const delayAmount = delay || 0;

  switch (animationPreset) {
    case 'fadeUp':
      return gsap.fromTo(element,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration, delay: delayAmount, ease: 'power3.out' }
      );
    case 'fadeIn':
      return gsap.fromTo(element,
        { opacity: 0 },
        { opacity: 1, duration, delay: delayAmount, ease: 'power2.out' }
      );
    case 'slideUp':
      return gsap.fromTo(element,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration, delay: delayAmount, ease: 'power4.out' }
      );
    case 'slideLeft':
      return gsap.fromTo(element,
        { opacity: 0, x: 60 },
        { opacity: 1, x: 0, duration, delay: delayAmount, ease: 'power3.out' }
      );
    case 'slideRight':
      return gsap.fromTo(element,
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration, delay: delayAmount, ease: 'power3.out' }
      );
    case 'scaleUp':
      return gsap.fromTo(element,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration, delay: delayAmount, ease: 'power2.out' }
      );
    case 'stagger':
      return gsap.fromTo(element,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration, delay: delayAmount, stagger: 0.1, ease: 'power3.out' }
      );
    default:
      return null;
  }
}

export function initParallax(element: Element, config: MotionConfig = {}): void {
  const { parallaxPreset, speed } = { ...defaultMotionConfig, ...config };

  switch (parallaxPreset) {
    case 'softBackgroundDrift':
      gsap.to(element, {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
      break;

    case 'layeredDepth':
      gsap.to(element, {
        yPercent: -30,
        scale: 1.1,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
      break;

    case 'foregroundFloat':
      gsap.to(element, {
        y: -20,
        rotation: 2,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'top top',
          scrub: true,
        },
      });
      break;

    case 'pinnedStorytelling':
      ScrollTrigger.create({
        trigger: element,
        start: 'top top',
        end: '+=100%',
        pin: true,
        scrub: 1,
      });
      break;

    case 'textOverMedia':
      gsap.fromTo(element.querySelector('.parallax-text'),
        { y: 50 },
        {
          y: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
      break;

    case 'videoHero':
      gsap.to(element, {
        scale: 1.2,
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
      break;
  }
}

export function initStaggerReveal(elements: NodeListOf<Element> | Element[], config: MotionConfig = {}): gsap.core.Tween {
  const { speed, delay } = { ...defaultMotionConfig, ...config };
  return gsap.fromTo(elements,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8 / speed,
      delay: delay || 0,
      stagger: 0.12,
      ease: 'power3.out',
    }
  );
}

export function initCounter(element: Element, endValue: number, config: { duration?: number; prefix?: string; suffix?: string } = {}): gsap.core.Tween {
  const { duration = 2, prefix = '', suffix = '' } = config;
  const obj = { value: 0 };

  return gsap.to(obj, {
    value: endValue,
    duration,
    ease: 'power2.out',
    onUpdate: () => {
      element.textContent = prefix + Math.round(obj.value).toLocaleString() + suffix;
    },
  });
}

export function initTestimonialCarousel(container: Element, config: CarouselConfig = {}): void {
  const { autoplay, speed } = { ...defaultCarouselConfig, ...config };
  const testimonials = container.querySelectorAll('.testimonial-card');
  let currentIndex = 0;

  function showTestimonial(index: number) {
    gsap.to(testimonials, {
      opacity: 0,
      scale: 0.95,
      duration: 0.4,
      ease: 'power2.out',
      onComplete: () => {
        testimonials.forEach((t, i) => {
          gsap.set(t, { display: i === index ? 'block' : 'none' });
        });
        gsap.fromTo(testimonials[index],
          { opacity: 0, scale: 1.05, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: 'power3.out' }
        );
      },
    });
  }

  if (autoplay) {
    setInterval(() => {
      currentIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(currentIndex);
    }, (6000 / speed!));
  }
}

export function initProductRail(container: Element, config: CarouselConfig = {}): gsap.core.Tween {
  const { direction } = { ...defaultCarouselConfig, ...config };
  const rail = container.querySelector('.product-rail');
  if (!rail) return gsap.timeline();

  const movement = direction === 'vertical' ? { y: -200 } : { x: -200 };

  return gsap.to(rail, {
    ...movement,
    duration: 8,
    ease: 'none',
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize((x: number) => parseFloat(x) % 1600 - 1600),
    },
  });
}

export function initCoverflowCarousel(container: Element, config: CarouselConfig = {}): void {
  const { slidesPerView = 5 } = { ...defaultCarouselConfig, ...config };
  const slides = container.querySelectorAll('.coverflow-slide');

  slides.forEach((slide, i) => {
    const offset = i - Math.floor(slides.length / 2);
    gsap.set(slide, {
      x: offset * 180,
      z: -Math.abs(offset) * 100,
      rotateY: offset * 15,
      scale: 1 - Math.abs(offset) * 0.15,
      opacity: 1 - Math.abs(offset) * 0.2,
    });
  });
}

export function initBeforeAfterComparison(container: Element): void {
  const slider = container.querySelector('.comparison-slider') as HTMLElement;
  const beforeEl = container.querySelector('.before-image');
  const afterEl = container.querySelector('.after-image');

  if (!slider || !beforeEl || !afterEl) return;

  const handleDrag = (clientX: number) => {
    const rect = container.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = x / rect.width;

    slider.style.left = `${percent * 100}%`;
    (beforeEl as HTMLElement).style.clipPath = `inset(0 ${100 - percent * 100}% 0 0)`;
  };

  slider.addEventListener('mousedown', (e) => {
    handleDrag(e.clientX);
    const onMove = (e: MouseEvent) => handleDrag(e.clientX);
    const onUp = () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  });
}

export function initMaskedReveal(element: Element): gsap.core.Tween {
  return gsap.fromTo(element,
    { clipPath: 'inset(100% 0 0 0)' },
    { clipPath: 'inset(0% 0 0 0)', duration: 1.2, ease: 'power4.inOut' }
  );
}

export function initCinematicZoom(element: Element): gsap.core.Timeline {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'center center',
      scrub: 1,
    },
  });

  tl.fromTo(element,
    { scale: 1.5, opacity: 0 },
    { scale: 1, opacity: 1, ease: 'none' }
  );

  return tl;
}

export function initHorizontalScroll(container: Element): ScrollTrigger {
  const sections = container.querySelectorAll('.horizontal-section');
  const totalWidth = sections.length * 100;

  return ScrollTrigger.create({
    trigger: container,
    start: 'top top',
    end: () => `+=${totalWidth}%`,
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    animation: gsap.to(sections, {
      x: () => -(totalWidth - window.innerWidth),
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
    }),
  });
}

export function initDepthHover(element: Element): void {
  element.addEventListener('mousemove', (e) => {
    const rect = element.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(element, {
      rotateY: x * 15,
      rotateX: -y * 15,
      duration: 0.3,
      ease: 'power2.out',
    });
  });

  element.addEventListener('mouseleave', () => {
    gsap.to(element, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.5,
      ease: 'power2.out',
    });
  });
}

export { gsap, ScrollTrigger };
export default gsap;