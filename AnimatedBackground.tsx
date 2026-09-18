import React, { useEffect, useRef } from 'react';
import { ThemeMode, BackgroundSettings } from '../types';

interface AnimatedBackgroundProps {
  theme: ThemeMode;
  settings: BackgroundSettings;
  pulseTrigger?: number; // Incrementing counter to trigger manual shockwave burst
}

interface Ball {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  colorType: 'red' | 'white' | 'blue';
  layer: 'deep-bokeh' | 'mid' | 'foreground';
  orbitRadius: number;
  angle: number;
  angularSpeed: number;
  opacity: number;
  pulseSpeed: number;
  pulseOffset: number;
  glowBlur: number;
}

interface Stardust {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  speedY: number;
}

interface Shockwave {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
  color: string;
}

interface SparkParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  decay: number;
  color: string;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  theme,
  settings,
  pulseTrigger = 0,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{
    x: number;
    y: number;
    targetX: number;
    targetY: number;
    screenX: number;
    screenY: number;
    isHovering: boolean;
  }>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    screenX: -1000,
    screenY: -1000,
    isHovering: false,
  });

  const shockwavesRef = useRef<Shockwave[]>([]);
  const sparksRef = useRef<SparkParticle[]>([]);

  // Function to spawn shockwave and spark bursts
  const spawnBurst = (x: number, y: number, isMajor = false) => {
    // Shockwave ring
    shockwavesRef.current.push({
      x,
      y,
      radius: 5,
      maxRadius: isMajor ? 320 : 180,
      opacity: 0.8,
      color: Math.random() > 0.5 ? '#ef4444' : '#38bdf8',
    });

    // Particle sparks
    const sparkCount = isMajor ? 24 : 14;
    for (let i = 0; i < sparkCount; i++) {
      const angle = (Math.PI * 2 * i) / sparkCount + (Math.random() - 0.5) * 0.4;
      const speed = (isMajor ? 3.5 : 2.2) + Math.random() * 2.5;
      const isRed = Math.random() > 0.45;

      sparksRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: 1.5 + Math.random() * 2,
        opacity: 0.9,
        decay: 0.015 + Math.random() * 0.02,
        color: isRed ? '#ef4444' : Math.random() > 0.5 ? '#ffffff' : '#38bdf8',
      });
    }
  };

  // Trigger burst on pulseTrigger change
  useEffect(() => {
    if (pulseTrigger > 0 && canvasRef.current) {
      const w = window.innerWidth;
      const h = window.innerHeight;
      spawnBurst(w * 0.5, h * 0.4, true);
    }
  }, [pulseTrigger]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      initElements();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.screenX = e.clientX;
      mouseRef.current.screenY = e.clientY;
      mouseRef.current.isHovering = true;

      const normalizedX = (e.clientX / width - 0.5) * 45;
      const normalizedY = (e.clientY / height - 0.5) * 45;
      mouseRef.current.targetX = normalizedX;
      mouseRef.current.targetY = normalizedY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.isHovering = false;
      mouseRef.current.screenX = -1000;
      mouseRef.current.screenY = -1000;
    };

    const handlePointerDown = (e: PointerEvent) => {
      // Don't interfere with form inputs, let user click freely
      spawnBurst(e.clientX, e.clientY, false);
    };

    window.addEventListener('resize', resizeCanvas, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });

    let balls: Ball[] = [];
    let stardustList: Stardust[] = [];

    const initElements = () => {
      balls = [];
      stardustList = [];

      const isMobile = width < 768;

      // 1. Deep Large Glowing Bokeh Orbs (Heavily Blurred)
      const bokehCount = isMobile ? 5 : 8;
      for (let i = 0; i < bokehCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const roll = Math.random();
        const colorType = roll < 0.45 ? 'red' : roll < 0.85 ? 'blue' : 'white';

        balls.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          radius: (isMobile ? 70 : 120) + Math.random() * (isMobile ? 60 : 120),
          colorType,
          layer: 'deep-bokeh',
          orbitRadius: 40 + Math.random() * 80,
          angle: Math.random() * Math.PI * 2,
          angularSpeed: (Math.random() * 0.003 + 0.001) * (Math.random() > 0.5 ? 1 : -1),
          opacity: colorType === 'red' ? 0.22 : 0.18,
          pulseSpeed: 0.01 + Math.random() * 0.015,
          pulseOffset: Math.random() * Math.PI * 2,
          glowBlur: 45,
        });
      }

      // 2. Midground & Foreground Floating Spheres (Red & White)
      const particleCount = isMobile ? 24 : 45;
      for (let i = 0; i < particleCount; i++) {
        const roll = Math.random();
        let colorType: 'red' | 'white' | 'blue' = 'white';
        if (roll < 0.42) {
          colorType = 'red';
        } else if (roll > 0.88) {
          colorType = 'blue';
        }

        const isForeground = i % 2 === 0;
        const radius = isForeground
          ? 6 + Math.random() * 12 // Crisp medium-large
          : 3 + Math.random() * 4;  // Sharp small dots

        const x = Math.random() * width;
        const y = Math.random() * height;

        balls.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius,
          colorType,
          layer: isForeground ? 'foreground' : 'mid',
          orbitRadius: 25 + Math.random() * 65,
          angle: Math.random() * Math.PI * 2,
          angularSpeed: (Math.random() * 0.008 + 0.003) * (Math.random() > 0.5 ? 1 : -1),
          opacity: colorType === 'red' ? 0.65 : 0.75,
          pulseSpeed: 0.015 + Math.random() * 0.02,
          pulseOffset: Math.random() * Math.PI * 2,
          glowBlur: isForeground ? 12 : 6,
        });
      }

      // 3. Stardust micro-particles
      const stardustCount = isMobile ? 25 : 55;
      for (let i = 0; i < stardustCount; i++) {
        stardustList.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: 0.8 + Math.random() * 1.5,
          opacity: 0.2 + Math.random() * 0.6,
          twinkleSpeed: 0.02 + Math.random() * 0.04,
          twinkleOffset: Math.random() * Math.PI * 2,
          speedY: -0.15 - Math.random() * 0.2,
        });
      }
    };

    resizeCanvas();

    let tick = 0;

    const render = () => {
      tick++;

      // Speed multiplier from settings
      const speedMultiplier =
        settings.speed === 'dynamic' ? 1.75 : settings.speed === 'calm' ? 0.45 : 1.0;

      // Parallax lerping
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Deep atmospheric background gradients
      if (theme === 'dark') {
        const bgGrad = ctx.createRadialGradient(
          width * 0.5,
          height * 0.35,
          80,
          width * 0.5,
          height * 0.5,
          Math.max(width, height)
        );
        bgGrad.addColorStop(0, 'rgba(17, 32, 70, 0.6)');
        bgGrad.addColorStop(0.45, 'rgba(11, 20, 48, 0.45)');
        bgGrad.addColorStop(1, 'rgba(6, 12, 22, 0.95)');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, width, height);
      } else {
        const bgGrad = ctx.createRadialGradient(
          width * 0.5,
          height * 0.25,
          80,
          width * 0.5,
          height * 0.5,
          Math.max(width, height)
        );
        bgGrad.addColorStop(0, 'rgba(235, 243, 255, 0.7)');
        bgGrad.addColorStop(0.5, 'rgba(241, 245, 249, 0.85)');
        bgGrad.addColorStop(1, 'rgba(248, 250, 252, 0.98)');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, width, height);
      }

      // 1. Render Deep Giant Blurry Bokeh Orbs
      for (let i = 0; i < balls.length; i++) {
        const p = balls[i];
        if (p.layer !== 'deep-bokeh') continue;

        if (!prefersReducedMotion) {
          p.angle += p.angularSpeed * speedMultiplier;
          p.baseX += p.vx * speedMultiplier;
          p.baseY += p.vy * speedMultiplier;

          if (p.baseX < -p.radius) p.baseX = width + p.radius;
          if (p.baseX > width + p.radius) p.baseX = -p.radius;
          if (p.baseY < -p.radius) p.baseY = height + p.radius;
          if (p.baseY > height + p.radius) p.baseY = -p.radius;

          p.x = p.baseX + Math.cos(p.angle) * p.orbitRadius + mouseRef.current.x * 0.3;
          p.y = p.baseY + Math.sin(p.angle) * p.orbitRadius + mouseRef.current.y * 0.3;
        }

        const pulse = Math.sin(tick * p.pulseSpeed + p.pulseOffset);
        const dynamicRadius = Math.max(10, p.radius + pulse * 18);
        const dynamicOpacity = Math.max(0.05, p.opacity + pulse * 0.05);

        ctx.save();
        const orbGrad = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          dynamicRadius
        );

        if (p.colorType === 'red') {
          orbGrad.addColorStop(0, `rgba(239, 68, 68, ${dynamicOpacity * 0.9})`);
          orbGrad.addColorStop(0.4, `rgba(220, 38, 38, ${dynamicOpacity * 0.5})`);
          orbGrad.addColorStop(0.8, `rgba(153, 27, 27, ${dynamicOpacity * 0.15})`);
          orbGrad.addColorStop(1, 'rgba(239, 68, 68, 0)');
        } else if (p.colorType === 'white') {
          if (theme === 'dark') {
            orbGrad.addColorStop(0, `rgba(255, 255, 255, ${dynamicOpacity * 0.8})`);
            orbGrad.addColorStop(0.5, `rgba(226, 232, 240, ${dynamicOpacity * 0.35})`);
            orbGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
          } else {
            orbGrad.addColorStop(0, `rgba(191, 219, 254, ${dynamicOpacity * 0.8})`);
            orbGrad.addColorStop(0.6, `rgba(219, 234, 254, ${dynamicOpacity * 0.3})`);
            orbGrad.addColorStop(1, 'rgba(191, 219, 254, 0)');
          }
        } else {
          orbGrad.addColorStop(0, `rgba(56, 189, 248, ${dynamicOpacity * 0.8})`);
          orbGrad.addColorStop(0.5, `rgba(37, 99, 235, ${dynamicOpacity * 0.4})`);
          orbGrad.addColorStop(1, 'rgba(37, 99, 235, 0)');
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, dynamicRadius, 0, Math.PI * 2);
        ctx.fillStyle = orbGrad;
        ctx.fill();
        ctx.restore();
      }

      // 2. Render Cosmic Stardust Micro-particles
      if (settings.stardust) {
        ctx.save();
        for (let i = 0; i < stardustList.length; i++) {
          const s = stardustList[i];
          if (!prefersReducedMotion) {
            s.y += s.speedY * speedMultiplier;
            if (s.y < 0) {
              s.y = height;
              s.x = Math.random() * width;
            }
          }

          const twinkle = (Math.sin(tick * s.twinkleSpeed + s.twinkleOffset) + 1) * 0.5;
          const currentOpacity = Math.max(0.08, s.opacity * twinkle);

          ctx.beginPath();
          ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
          ctx.fillStyle =
            theme === 'dark'
              ? `rgba(255, 255, 255, ${currentOpacity})`
              : `rgba(59, 130, 246, ${currentOpacity * 0.7})`;
          ctx.fill();
        }
        ctx.restore();
      }

      // 3. Update & Render Mid & Foreground Spheres
      const foregroundBalls: Ball[] = [];
      for (let i = 0; i < balls.length; i++) {
        const p = balls[i];
        if (p.layer === 'deep-bokeh') continue;

        if (!prefersReducedMotion) {
          p.angle += p.angularSpeed * speedMultiplier;
          p.baseX += p.vx * speedMultiplier;
          p.baseY += p.vy * speedMultiplier;

          // Wrap boundaries smoothly
          if (p.baseX < -30) p.baseX = width + 30;
          if (p.baseX > width + 30) p.baseX = -30;
          if (p.baseY < -30) p.baseY = height + 30;
          if (p.baseY > height + 30) p.baseY = -30;

          // Parallax calculation
          const parallaxFactor = (p.radius / 18) * 1.4;
          let targetX = p.baseX + Math.cos(p.angle) * p.orbitRadius + mouseRef.current.x * parallaxFactor;
          let targetY = p.baseY + Math.sin(p.angle) * p.orbitRadius + mouseRef.current.y * parallaxFactor;

          // Interactive Mouse Physics (Repel / Attract)
          if (mouseRef.current.isHovering && settings.gravityMode !== 'float') {
            const dx = targetX - mouseRef.current.screenX;
            const dy = targetY - mouseRef.current.screenY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const influenceRadius = 160;

            if (dist < influenceRadius && dist > 1) {
              const force = (1 - dist / influenceRadius) * 45;
              const angle = Math.atan2(dy, dx);

              if (settings.gravityMode === 'repel') {
                targetX += Math.cos(angle) * force;
                targetY += Math.sin(angle) * force;
              } else if (settings.gravityMode === 'attract') {
                targetX -= Math.cos(angle) * (force * 0.6);
                targetY -= Math.sin(angle) * (force * 0.6);
              }
            }
          }

          p.x += (targetX - p.x) * 0.1;
          p.y += (targetY - p.y) * 0.1;
        }

        foregroundBalls.push(p);
      }

      // 4. Draw Constellation Laser Links Between Balls
      if (settings.constellations) {
        ctx.save();
        const maxLinkDist = 135;
        const ballCount = foregroundBalls.length;

        for (let i = 0; i < ballCount; i++) {
          const b1 = foregroundBalls[i];

          // Check links to nearby balls
          for (let j = i + 1; j < ballCount; j++) {
            const b2 = foregroundBalls[j];
            const dx = b1.x - b2.x;
            const dy = b1.y - b2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < maxLinkDist) {
              const linkOpacity = (1 - dist / maxLinkDist) * 0.35;
              ctx.beginPath();
              ctx.moveTo(b1.x, b1.y);
              ctx.lineTo(b2.x, b2.y);

              // Color gradient between ball types
              const lineGrad = ctx.createLinearGradient(b1.x, b1.y, b2.x, b2.y);
              if (b1.colorType === 'red') {
                lineGrad.addColorStop(0, `rgba(239, 68, 68, ${linkOpacity})`);
              } else {
                lineGrad.addColorStop(0, `rgba(59, 130, 246, ${linkOpacity})`);
              }

              if (b2.colorType === 'red') {
                lineGrad.addColorStop(1, `rgba(239, 68, 68, ${linkOpacity})`);
              } else {
                lineGrad.addColorStop(1, `rgba(255, 255, 255, ${linkOpacity})`);
              }

              ctx.strokeStyle = lineGrad;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }

          // Proximity link to mouse cursor if hovering
          if (mouseRef.current.isHovering) {
            const mdx = b1.x - mouseRef.current.screenX;
            const mdy = b1.y - mouseRef.current.screenY;
            const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

            if (mdist < 140) {
              const mOpacity = (1 - mdist / 140) * 0.45;
              ctx.beginPath();
              ctx.moveTo(b1.x, b1.y);
              ctx.lineTo(mouseRef.current.screenX, mouseRef.current.screenY);
              ctx.strokeStyle =
                b1.colorType === 'red'
                  ? `rgba(239, 68, 68, ${mOpacity})`
                  : `rgba(56, 189, 248, ${mOpacity})`;
              ctx.lineWidth = 1.2;
              ctx.stroke();
            }
          }
        }
        ctx.restore();
      }

      // 5. Draw 3D Spheres with Radial Glow & Specular Points
      for (let i = 0; i < foregroundBalls.length; i++) {
        const p = foregroundBalls[i];
        const pulse = Math.sin(tick * p.pulseSpeed + p.pulseOffset);
        const dynamicRadius = Math.max(1.5, p.radius + pulse * 1.5);
        const dynamicOpacity = Math.max(0.15, p.opacity + pulse * 0.1);

        ctx.save();

        // Soft outer glow halo
        ctx.shadowBlur = p.glowBlur;
        if (p.colorType === 'red') {
          ctx.shadowColor = 'rgba(239, 68, 68, 0.6)';
        } else if (p.colorType === 'white') {
          ctx.shadowColor =
            theme === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(59, 130, 246, 0.4)';
        } else {
          ctx.shadowColor = 'rgba(56, 189, 248, 0.6)';
        }

        // 3D Sphere Radial Gradient
        const grad = ctx.createRadialGradient(
          p.x - dynamicRadius * 0.32,
          p.y - dynamicRadius * 0.32,
          dynamicRadius * 0.08,
          p.x,
          p.y,
          dynamicRadius
        );

        if (p.colorType === 'red') {
          grad.addColorStop(0, '#fca5a5');
          grad.addColorStop(0.35, '#ef4444');
          grad.addColorStop(0.85, '#b91c1c');
          grad.addColorStop(1, '#7f1d1d');
        } else if (p.colorType === 'white') {
          if (theme === 'dark') {
            grad.addColorStop(0, '#ffffff');
            grad.addColorStop(0.55, '#e2e8f0');
            grad.addColorStop(0.9, '#94a3b8');
            grad.addColorStop(1, '#64748b');
          } else {
            grad.addColorStop(0, '#ffffff');
            grad.addColorStop(0.5, '#f1f5f9');
            grad.addColorStop(0.85, '#cbd5e1');
            grad.addColorStop(1, '#94a3b8');
          }
        } else {
          grad.addColorStop(0, '#bae6fd');
          grad.addColorStop(0.4, '#38bdf8');
          grad.addColorStop(0.8, '#1d4ed8');
          grad.addColorStop(1, '#1e3a8a');
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, dynamicRadius, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Specular highlight gleam on the top-left
        if (dynamicRadius > 4) {
          ctx.beginPath();
          ctx.arc(
            p.x - dynamicRadius * 0.3,
            p.y - dynamicRadius * 0.3,
            Math.max(0.8, dynamicRadius * 0.2),
            0,
            Math.PI * 2
          );
          ctx.fillStyle = `rgba(255, 255, 255, ${dynamicOpacity * 0.9})`;
          ctx.fill();
        }

        ctx.restore();
      }

      // 6. Render Expanding Shockwaves & Sparks
      const shockwaves = shockwavesRef.current;
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const sw = shockwaves[i];
        sw.radius += 4.5;
        sw.opacity *= 0.95;

        if (sw.radius >= sw.maxRadius || sw.opacity <= 0.02) {
          shockwaves.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.strokeStyle = sw.color;
        ctx.globalAlpha = sw.opacity;
        ctx.lineWidth = Math.max(1, 4 * (1 - sw.radius / sw.maxRadius));
        ctx.shadowBlur = 15;
        ctx.shadowColor = sw.color;
        ctx.stroke();
        ctx.restore();
      }

      const sparks = sparksRef.current;
      for (let i = sparks.length - 1; i >= 0; i--) {
        const sp = sparks[i];
        sp.x += sp.vx;
        sp.y += sp.vy;
        sp.vx *= 0.96;
        sp.vy *= 0.96;
        sp.opacity -= sp.decay;

        if (sp.opacity <= 0.02) {
          sparks.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(sp.x, sp.y, sp.radius, 0, Math.PI * 2);
        ctx.fillStyle = sp.color;
        ctx.globalAlpha = sp.opacity;
        ctx.shadowBlur = 8;
        ctx.shadowColor = sp.color;
        ctx.fill();
        ctx.restore();
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    if (prefersReducedMotion) {
      render();
    } else {
      animationFrameId = requestAnimationFrame(render);
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('pointerdown', handlePointerDown);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [theme, settings]);

  // Determine blur backdrop CSS filter based on user setting
  const blurBackdropClass =
    settings.blurIntensity === 'dreamy'
      ? 'backdrop-blur-[26px] bg-slate-950/25 dark:bg-slate-950/30 light:bg-white/20'
      : settings.blurIntensity === 'soft'
      ? 'backdrop-blur-[14px] bg-slate-950/15 dark:bg-slate-950/20 light:bg-white/10'
      : 'backdrop-blur-[6px] bg-transparent';

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Underlying Interactive Canvas */}
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Atmospheric Frosted Glass Blur Diffusion Layer */}
      <div
        className={`absolute inset-0 transition-all duration-500 pointer-events-none ${blurBackdropClass}`}
      />

      {/* Depth Vignette / Ambient Radial Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#060b14]/50 dark:to-[#060b14]/70 light:to-slate-200/30 pointer-events-none" />
    </div>
  );
};
