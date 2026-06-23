'use client';

import { useEffect, useRef } from 'react';

function interpolateColor(a: string, b: string, t: number): string {
  const hex = (x: string) => parseInt(x, 16);
  const r = Math.round(hex(a.slice(1, 3)) * (1 - t) + hex(b.slice(1, 3)) * t);
  const g = Math.round(hex(a.slice(3, 5)) * (1 - t) + hex(b.slice(3, 5)) * t);
  const bl = Math.round(hex(a.slice(5, 7)) * (1 - t) + hex(b.slice(5, 7)) * t);
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${bl.toString(16).padStart(2, '0')}`;
}

export default function DevFavicon() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    canvasRef.current = canvas;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let link = document.querySelector<HTMLLinkElement>("link[rel*='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.type = 'image/png';

    let frame = 0;

    const darkBg = '#0a0a0a';
    const lightFg = '#f5f5f5';

    const draw = () => {
      // Smooth phase 0 -> 1 -> 0 over ~3 seconds
      const raw = Math.sin((frame * 100) / 3000 * Math.PI * 2);
      const phase = (raw + 1) / 2; // 0..1

      const bg = interpolateColor(darkBg, lightFg, phase);
      const fg = interpolateColor(lightFg, darkBg, phase);
      const border = interpolateColor('#262626', '#d4d4d4', phase);

      // Background
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, 64, 64);

      // Rounded border
      ctx.strokeStyle = border;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(4, 4, 56, 56, 12);
      ctx.stroke();

      // `</>` symbol
      ctx.fillStyle = fg;
      ctx.font = 'bold 28px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('</>', 32, 28);

      // Cursor (blue, fades out near white phase)
      const cursorOpacity = 1 - phase * 0.6;
      const r = Math.round(59 * cursorOpacity);
      const gVal = Math.round(130 * cursorOpacity);
      const b = Math.round(246 * cursorOpacity);
      ctx.fillStyle = `rgb(${r}, ${gVal}, ${b})`;
      ctx.beginPath();
      ctx.roundRect(20, 44, 24, 4, 2);
      ctx.fill();

      link!.href = canvas.toDataURL('image/png');
      frame++;
    };

    draw();
    const interval = setInterval(draw, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return null;
}
