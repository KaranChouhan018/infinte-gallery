'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap-trial';
import { Draggable } from 'gsap-trial/Draggable';
import { InertiaPlugin } from 'gsap-trial/InertiaPlugin';
import { motion } from 'framer-motion';

gsap.registerPlugin(Draggable, InertiaPlugin);

const images = [
  'https://images.unsplash.com/photo-1744208510307-9a21aad4726b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1744208510307-9a21aad4726b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1744208510307-9a21aad4726b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1744208510307-9a21aad4726b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1744208510307-9a21aad4726b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1744208510307-9a21aad4726b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1744208510307-9a21aad4726b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1744208510307-9a21aad4726b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1744208510307-9a21aad4726b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1744208510307-9a21aad4726b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1744208510307-9a21aad4726b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1744208510307-9a21aad4726b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1744208510307-9a21aad4726b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1744208510307-9a21aad4726b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1744208510307-9a21aad4726b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

export default function Home() {
  const containerRef = useRef(null);
  const proxyRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const proxy = proxyRef.current;

    if (!container || !proxy) return;

    let x = 0,
      y = 0;

    const updatePosition = () => {
      gsap.set(container, {
        x,
        y,
      });
    };

    Draggable.create(proxy, {
      type: 'x,y',
      inertia: true,
      onDrag: function () {
        x += this.deltaX;
        y += this.deltaY;
        updatePosition();
      },
      onThrowUpdate: function () {
        x += this.deltaX;
        y += this.deltaY;
        updatePosition();
      },
    });
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden bg-black relative">
      <div
        ref={proxyRef}
        className="absolute w-full h-full top-0 left-0 z-50 cursor-grab active:cursor-grabbing"
      />
      <div
        ref={containerRef}
        className="absolute w-max h-max grid grid-rows-3 gap-4 p-10 pointer-events-none"
      >
        {Array.from({ length: 5 }).map((_, rowIndex) => (
          <div key={rowIndex} className="flex gap-4">
            {images.map((src, i) => (
              <motion.img
                key={`${rowIndex}-${i}`}
                src={src}
                alt=""
                className="w-48 h-32 object-cover rounded-lg shadow-md pointer-events-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * i, duration: 0.5, ease: 'easeOut' }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
