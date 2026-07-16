"use client";
import { useEffect, useRef } from "react";

export default function ParticleBackground({ color, intensity = 3 }: { color?: string, intensity?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    let w = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
    
    // Set height to parent element's height or window height
    const parent = canvas.parentElement;
    let h = canvas.height = parent ? parent.clientHeight : window.innerHeight;

    const resizeListener = () => {
      w = canvas.width = parent ? parent.clientWidth : window.innerWidth;
      h = canvas.height = parent ? parent.clientHeight : window.innerHeight;
      init();
    };
    
    window.addEventListener("resize", resizeListener);

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      alpha: number;

      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        // Higher intensity = larger potential size
        this.size = Math.random() * (intensity * 0.8) + 0.5;
        // Higher intensity = faster drift
        this.speedX = (Math.random() - 0.5) * (intensity * 0.2); 
        this.speedY = Math.random() * (intensity * 0.3) + 0.2; // drift downwards (falling)
        // Colors from the theme
        const defaultColors = ["#00d4ff", "#5b0fbe", "#ffffff", "#0ea5e9", "#8b5cf6"];
        this.color = color || defaultColors[Math.floor(Math.random() * defaultColors.length)];
        // Higher intensity = more opaque
        this.alpha = Math.random() * (0.3 + intensity * 0.05) + 0.1;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Wrap around when floating off screen (falling down)
        if (this.y > h + 10) {
          this.y = -10;
          this.x = Math.random() * w;
        }
        if (this.x < -10) this.x = w + 10;
        if (this.x > w + 10) this.x = -10;
      }
      
      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        // Add a subtle glow to particles
        ctx.shadowBlur = intensity * 3;
        ctx.shadowColor = this.color;
        
        ctx.fill();
        ctx.restore();
      }
    }

    function init() {
      particlesArray = [];
      // Higher intensity = exponentially more particles
      const baseCount = Math.floor((w * h) / 10000);
      const intensityMultiplier = [0.2, 0.5, 1.0, 1.8, 3.0]; // 1 to 5 mapping
      const numberOfParticles = Math.floor(baseCount * intensityMultiplier[intensity - 1]);
      
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }

    let animationFrameId: number;
    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    }

    init();
    animate();
    
    return () => {
      window.removeEventListener("resize", resizeListener);
      cancelAnimationFrame(animationFrameId);
    };
  }, [intensity, color]);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.6
      }}
    />
  );
}
