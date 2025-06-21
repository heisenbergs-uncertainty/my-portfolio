import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import Link from "@docusaurus/Link";

// Animation variants for enhanced interactions
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function EnhancedSection({ children, className = "" }: {
  children: ReactNode;
  className?: string;
}): ReactNode {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px',
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Enhanced button component with hover effects
export function AnimatedButton({
  children,
  to,
  href,
  className,
  variant = "primary",
}: {
  children: ReactNode;
  to?: string;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary";
}): ReactNode {
  const buttonClass = clsx(
    "button",
    `button--${variant}`,
    "button--lg",
    className
  );

  const MotionLink = motion(Link);

  if (to) {
    return (
      <MotionLink
        className={buttonClass}
        to={to}
        whileHover={{ scale: 1.05, y: -3 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </MotionLink>
    );
  }

  if (href) {
    return (
      <motion.a
        className={buttonClass}
        href={href}
        whileHover={{ scale: 1.05, y: -3 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={buttonClass}
      whileHover={{ scale: 1.05, y: -3 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.button>
  );
}

// Enhanced card component with hover animations
export function AnimatedCard({
  children,
  className = "",
  hoverScale = 1.03,
}: {
  children: ReactNode;
  className?: string;
  hoverScale?: number;
}): ReactNode {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{
        scale: hoverScale,
        y: -5,
        transition: { duration: 0.2 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
