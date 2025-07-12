import { motion } from "framer-motion";
import React from "react";

const bees = [
  { top: "10%", left: "5%", delay: 0 },
  { top: "30%", left: "80%", delay: 2 },
  { top: "60%", left: "40%", delay: 4 },
];

const FlyingBees: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {bees.map((bee, index) => (
        <motion.img
          key={index}
          src="/bee-cover.png"
          alt="bee"
          className="absolute w-8 h-8"
          style={{ top: bee.top, left: bee.left }}
          animate={{ x: [0, 20, -20, 0], y: [0, -10, 10, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: bee.delay,
          }}
        />
      ))}
    </div>
  );
};

export default FlyingBees;
