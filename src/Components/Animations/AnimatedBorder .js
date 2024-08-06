import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const AnimatedBorder = ({ children }) => {
  const divRef = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (!divRef.current) return;

    const { width, height } = divRef.current.getBoundingClientRect();
    setDimensions({ width, height });
  }, [children]); // Recalculate dimensions when children change

  const radius = Math.min(dimensions.width, dimensions.height) / 2 + 3;

  return (
    <div ref={divRef} className="relative inline-block">
      <motion.svg
        className="absolute top-0 left-0 pointer-events-none z-10 -left-4 -top-3"
        width={dimensions.width + 30}
        height={dimensions.height + 30}
        viewBox={`0 0 ${dimensions.width + 30} ${dimensions.height + 30}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter
            id="neon"
            filterUnits="userSpaceOnUse"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="5"
              result="blur5"
            />
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur10"
            />
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="20"
              result="blur20"
            />
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="30"
              result="blur30"
            />
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="50"
              result="blur50"
            />
            <feMerge result="blur-merged">
              <feMergeNode in="blur10" />
              <feMergeNode in="blur10" />
              <feMergeNode in="blur10" />
              <feMergeNode in="blur10" />
            </feMerge>
            <feColorMatrix
              result="red-blur"
              in="blur-merged"
              type="matrix"
              values="1 0 0 0 0 0 0.06 0 0 0 0 0 0 0.44 0 0 0 0 0 1 0"
            />
            <feMerge>
              <feMergeNode in="red-blur" />
              <feMergeNode in="blur5" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.circle
          cx={dimensions.width / 2 + 15}
          cy={dimensions.height / 2 + 15}
          r={radius}
          stroke="lime"
          strokeWidth="3"
          fill="none"
          filter="url(#neon)"
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{
            pathLength: 1,
            pathOffset: 0,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "loop",
          }}
        />
      </motion.svg>
      <div className="relative z-1 overflow-hidden rounded-full">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBorder;
