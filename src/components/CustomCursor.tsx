import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement;
      const interactive =
        target.closest("a, button, [role='button'], input, textarea, select, [data-cursor='pointer']") !== null;
      setIsPointer(interactive);
    };

    const handleLeave = () => setIsVisible(false);
    const handleEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, []);

  return (
    <>
      {/* Outer ring - trails behind */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full border-2 border-accent-purple-light mix-blend-difference hidden md:block"
        animate={{
          x: position.x - (isPointer ? 24 : 16),
          y: position.y - (isPointer ? 24 : 16),
          width: isPointer ? 48 : 32,
          height: isPointer ? 48 : 32,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          mass: 0.3,
          opacity: { duration: 0.2 },
        }}
      />
      {/* Inner dot - follows precisely */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full bg-accent-purple-light shadow-[0_0_12px_oklch(0.6_0.25_295/80%)] hidden md:block"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 30,
          mass: 0.1,
          opacity: { duration: 0.2 },
        }}
      />
    </>
  );
}
