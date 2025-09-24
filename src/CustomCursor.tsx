// CustomCursor.tsx
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CustomCursorProps = {
  circleColor?: string;
  dotColor?: string;
  circleSize?: number;
  dotSize?: number;
  hoverCircleSize?: number;
  opacity?: number;
  clickScale?: number;
  borderWidth?: number; // New prop για consistent border width
};

export const CustomCursor = ({
  circleColor = "#646c88",
  dotColor = "#4f566d",
  circleSize = 25,
  dotSize = 4,
  hoverCircleSize = 46,
  opacity = 0.6,
  clickScale = 1.8, // Μεγαλύτερο scale όπως θέλεις
  borderWidth = 2, // Consistent border width
}: CustomCursorProps) => {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springX = useSpring(cursorX, { stiffness: 500, damping: 30 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 30 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsLeaving(false);
      setIsVisible(true);
    };

    const checkPointer = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsPointer(!!target.closest("a, button, [role='button'], .clickable"));
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleLeave = (e: MouseEvent) => {
      if (
        e.clientY <= 0 ||
        e.clientX <= 0 ||
        e.clientX >= window.innerWidth ||
        e.clientY >= window.innerHeight
      ) {
        setIsLeaving(true);
        setIsVisible(false);
        setIsClicking(false);
      }
    };

    const handleEnter = () => {
      setIsLeaving(false);
      setIsVisible(true);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousemove", checkPointer);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    cursorX.set(window.innerWidth / 2);
    cursorY.set(window.innerHeight / 2);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousemove", checkPointer);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, [cursorX, cursorY]);

  const getBaseScale = () => {
    if (isPointer) {
      return hoverCircleSize / circleSize;
    }
    return isLeaving ? 0.5 : 1;
  };

  const getFinalScale = () => {
    const base = getBaseScale();
    return isClicking ? base * clickScale : base;
  };

  return (
    <>
      {/* Main Cursor Circle - Τώρα χωρίς border */}
      <motion.div
        className="custom-cursor"
        style={{
          left: springX,
          top: springY,
          opacity: isVisible ? opacity : 0,
          width: circleSize,
          height: circleSize,
          marginLeft: -circleSize / 2,
          marginTop: -circleSize / 2,
          backgroundColor: "transparent",
        }}
        animate={{
          scale: getFinalScale(),
          backgroundColor: isPointer ? circleColor : "transparent",
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: isClicking ? 15 : 20,
          opacity: { duration: 0.3, ease: "easeOut" },
        }}
      >
        {!isPointer && (
          <motion.div
            className="cursor-dot"
            style={{
              backgroundColor: dotColor,
              width: dotSize,
              height: dotSize,
            }}
            animate={{
              scale: isPointer ? 0 : isClicking ? 0.6 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 15,
            }}
          />
        )}
      </motion.div>

      {/* Separate Border Element - Για consistent border width */}
      <motion.div
        className="cursor-border"
        style={{
          position: "fixed",
          left: springX,
          top: springY,
          opacity: isVisible ? (isPointer ? 0 : opacity) : 0,
          width: circleSize,
          height: circleSize,
          marginLeft: -circleSize / 2,
          marginTop: -circleSize / 2,
          border: `${borderWidth}px solid ${circleColor}`,
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
        }}
        animate={{
          scale: getFinalScale(),
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: isClicking ? 15 : 20,
        }}
      />

      {/* Optional ripple effect */}
      {isClicking && (
        <motion.div
          className="click-ripple"
          style={{
            position: "fixed",
            left: springX,
            top: springY,
            width: circleSize,
            height: circleSize,
            marginLeft: -circleSize / 2,
            marginTop: -circleSize / 2,
            borderRadius: "50%",
            border: `${borderWidth}px solid ${circleColor}`,
            pointerEvents: "none",
            zIndex: 9997,
          }}
          initial={{ scale: 1, opacity: 0.3 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        />
      )}
    </>
  );
};
