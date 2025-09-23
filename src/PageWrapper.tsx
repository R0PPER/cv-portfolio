import { type ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export const PageWrapper = ({ children, className = "", delay = 0 }: Props) => {
  let content = null;

  if (!className) {
    content = (
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.5, delay }}
        style={{ width: "100%", minHeight: "100vh" }}
      >
        {children}
      </motion.div>
    );
  } else {
    content = (
      <motion.div
        className={className}
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 50, opacity: 0 }}
        transition={{ duration: 0.4, delay }}
      >
        {children}
      </motion.div>
    );
  }

  return content;
};
