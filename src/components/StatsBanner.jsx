import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function StatsBanner() {
  const stats = [
    { value: "1000+", label: "Hospitals" },
    { value: "100%", label: "Digital" },
    { value: "0", label: "Hidden Cost" },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % stats.length);
    }, 2500); // 3 seconds each
    return () => clearInterval(timer);
  }, [stats.length]);

  return (
    <section id="stats">
      <div className="w-full bg-secondaryBlue flex justify-center items-center">
        <div className="h-20 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center text-white"
            >
              <h1 className="font-bold text-3xl md:text-4xl flex flex-col md:flex-row gap-4">
                <span>
                  {stats[index].value} {stats[index].label}
                </span>
                {stats[index].secondary && (
                  <span>· {stats[index].secondary}</span>
                )}
              </h1>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
