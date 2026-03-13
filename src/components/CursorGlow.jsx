import { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function CursorGlow() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursor) {
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
      }
    };

    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      if (follower) {
        follower.style.left = followerX + 'px';
        follower.style.top = followerY + 'px';
      }
      requestAnimationFrame(animateFollower);
    };

    document.addEventListener('mousemove', moveCursor);
    animateFollower();

    // Hover effects
    const handleMouseEnter = () => {
      if (follower) {
        follower.style.width = '60px';
        follower.style.height = '60px';
        follower.style.borderColor = 'var(--accent)';
        follower.style.backgroundColor = 'var(--accent-glow)';
      }
    };
    const handleMouseLeave = () => {
      if (follower) {
        follower.style.width = '40px';
        follower.style.height = '40px';
        follower.style.borderColor = 'var(--accent)';
        follower.style.backgroundColor = 'transparent';
      }
    };

    const interactiveElements = document.querySelectorAll('a, button, .glass-card');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" style={{ transform: 'translate(-50%, -50%)' }} />
      <div ref={followerRef} className="cursor-follower" style={{ transform: 'translate(-50%, -50%)' }} />
    </>
  );
}
