"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.1,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
        transform: "translateY(0px)", // Adds a slide-in effect
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.15), // Reduced stagger for a smoother flow
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="flex flex-wrap justify-center">
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="text-gray-900 font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight mx-auto"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-6">
        <div className="text-center">{renderWords()}</div>
      </div>
    </div>
  );
};
