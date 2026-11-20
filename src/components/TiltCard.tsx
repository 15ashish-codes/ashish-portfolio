"use client";

import { ReactNode, useState } from "react";
import { motion } from "framer-motion";

export default function TiltCard({
  children,
}: {
  children: ReactNode;
}) {
  const [rotation, setRotation] = useState({
    x: 0,
    y: 0,
  });

  const [spotlight, setSpotlight] = useState({
    x: 0,
    y: 0,
  });

  function handleMouseMove(
    event: React.MouseEvent<HTMLDivElement>
  ) {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 8;
    const rotateX = (0.5 - y / rect.height) * 8;

    setRotation({
      x: rotateX,
      y: rotateY,
    });

    setSpotlight({
      x,
      y,
    });
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setRotation({ x: 0, y: 0 });
        setSpotlight({ x: -500, y: -500 });
      }}
      animate={{
        rotateX: rotation.x,
        rotateY: rotation.y,
      }}
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
      style={{ transformPerspective: 1000 }}
      className="relative will-change-transform"
    >
      {children}

      <div
        className="pointer-events-none absolute inset-0 z-10 rounded-3xl"
        style={{
          background: `radial-gradient(350px circle at ${spotlight.x}px ${spotlight.y}px, rgba(198,255,77,0.12), transparent 70%)`,
        }}
      />
    </motion.div>
  );
}