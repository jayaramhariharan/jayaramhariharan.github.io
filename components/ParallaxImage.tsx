import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';

type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  loading?: 'lazy' | 'eager';
  direction?: 'vertical' | 'horizontal';
  fit?: 'cover' | 'contain';
  intensity?: number;
  style?: React.CSSProperties;
  onError?: React.ReactEventHandler<HTMLImageElement>;
  children?: React.ReactNode;
};

const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  className = '',
  imgClassName = '',
  loading = 'lazy',
  direction = 'vertical',
  fit = 'cover',
  intensity = 8,
  style,
  onError,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const travel = `${intensity}%`;
  const y = useTransform(scrollYProgress, [0, 1], [`-${travel}`, travel]);
  const x = useTransform(scrollYProgress, [0, 1], [`-${travel}`, travel]);
  const isVertical = direction === 'vertical';
  const objectFit = fit === 'contain' ? 'object-contain' : 'object-cover';
  const parallaxSize = isVertical
    ? 'top-[-12%] left-0 h-[124%] w-full'
    : 'top-0 left-[-12%] h-full w-[124%]';

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`.trim()} style={style}>
      <motion.img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        onError={onError}
        className={`absolute ${parallaxSize} ${objectFit} ${prefersReducedMotion ? '' : 'will-change-transform'} ${imgClassName}`.trim()}
        style={isVertical ? { y } : { x }}
        whileHover={prefersReducedMotion ? undefined : { scale: 1.035 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        referrerPolicy="no-referrer"
      />
      {children}
    </div>
  );
};

export default ParallaxImage;
