"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

interface ScrollyCanvasProps {
    frameCount?: number;
}

export default function ScrollyCanvas({ frameCount = 120 }: ScrollyCanvasProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Store preloaded images
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    // Framer Motion scroll tracking
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const images: HTMLImageElement[] = [];

        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            // Format: frame_000_delay-0.066s.png
            const frameString = String(i).padStart(3, "0");
            img.src = `/sequence/frame_${frameString}_delay-0.066s.png`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === frameCount) {
                    setImagesLoaded(true);
                }
            };
            images.push(img);
        }
        imagesRef.current = images;
    }, [frameCount]);

    // Handle canvas rendering with object-fit: cover logic
    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        if (!canvas || !ctx || !imagesRef.current[index]) return;

        const img = imagesRef.current[index];

        // Ensure canvas matches screen size for pixel perfection
        const width = window.innerWidth;
        const height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        // Object-fit: cover logic
        const imgAspect = img.width / img.height;
        const canvasAspect = width / height;

        let renderWidth, renderHeight, x, y;

        if (canvasAspect > imgAspect) {
            // Canvas is wider than image
            renderWidth = width;
            renderHeight = width / imgAspect;
            x = 0;
            y = (height - renderHeight) / 2;
        } else {
            // Canvas is taller than image
            renderHeight = height;
            renderWidth = height * imgAspect;
            y = 0;
            x = (width - renderWidth) / 2;
        }

        // Clear and draw
        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(img, x, y, renderWidth, renderHeight);
    };

    // Draw initial frame once loaded
    useEffect(() => {
        if (imagesLoaded) {
            renderFrame(0);
        }

        // Handle resize
        const handleResize = () => {
            // Re-render current frame on resize
            const currentIndex = Math.round(scrollYProgress.get() * (frameCount - 1));
            renderFrame(currentIndex);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [imagesLoaded]);

    // Scrub through frames smoothly
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!imagesLoaded) return;
        const frameIndex = Math.min(
            frameCount - 1,
            Math.max(0, Math.round(latest * (frameCount - 1)))
        );
        // Use requestAnimationFrame to ensure smooth paint
        requestAnimationFrame(() => renderFrame(frameIndex));
    });

    return (
        // Parent container with large height to enable scrolling
        <div ref={containerRef} className="relative w-full h-[500vh]">
            {/* Sticky container that stays in view */}
            <div className="sticky top-0 w-full h-screen overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Loading skeleton */}
                {!imagesLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-background text-white/50 text-sm tracking-widest uppercase">
                        Loading Sequence...
                    </div>
                )}
            </div>
        </div>
    );
}
