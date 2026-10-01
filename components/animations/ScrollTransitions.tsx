"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

/* ─── Shared Easing ─── */
const calmEase = [0.22, 1, 0.36, 1] as const;

/* ─── Fade Up ─── */
const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function FadeUpView({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: calmEase, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Slide In (Left or Right) ─── */
export function SlideInView({
  children,
  className,
  direction = "left",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right";
  delay?: number;
}) {
  const offset = direction === "left" ? -36 : 36;
  return (
    <motion.div
      initial={{ opacity: 0, x: offset }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: calmEase, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Scale In ─── */
export function ScaleInView({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: calmEase, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Stagger Container ─── */
const staggerParent: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const staggerChild: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: calmEase },
  },
};

export function StaggerContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={staggerParent}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={staggerChild} className={className}>
      {children}
    </motion.div>
  );
}
