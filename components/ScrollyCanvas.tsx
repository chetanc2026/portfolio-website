"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

interface ScrollyCanvasProps {
    frameCount?: number;
}

export default function ScrollyCanvas({ frameCount = 120 }: ScrollyCanvasProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(frameCount).fill(null));
    const [firstFrameReady, setFirstFrameReady] = useState(false);
    const [loadProgress, setLoadProgress] = useState(0);
    const loadedCountRef = useRef(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Render a frame on canvas with cover logic
    const renderFrame = useCallback((index: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        const img = imagesRef.current[index];
        if (!canvas || !ctx || !img) return;

        const width = window.innerWidth;
        const height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const imgAspect = img.width / img.height;
        const canvasAspect = width / height;
        let rw, rh, x, y;

        if (canvasAspect > imgAspect) {
            rw = width; rh = width / imgAspect;
            x = 0; y = (height - rh) / 2;
        } else {
            rh = height; rw = height * imgAspect;
            y = 0; x = (width - rw) / 2;
        }

        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(img, x, y, rw, rh);
    }, []);

    // Progressive image loading
    useEffect(() => {
        const loadImage = (index: number): Promise<void> => {
            return new Promise((resolve) => {
                const img = new Image();
                const frameStr = String(index).padStart(3, "0");
                img.src = `/seq/${frameStr}.webp`;
                img.onload = () => {
                    imagesRef.current[index] = img;
                    loadedCountRef.current++;
                    setLoadProgress(Math.round((loadedCountRef.current / frameCount) * 100));

                    // Show first frame as soon as it's ready
                    if (index === 0) {
                        setFirstFrameReady(true);
                        renderFrame(0);
                    }
                    resolve();
                };
                img.onerror = () => resolve(); // Skip broken frames
            });
        };

        // Load in batches — first frame first, then in parallel batches
        const loadAll = async () => {
            // Load frame 0 immediately
            await loadImage(0);

            // Load rest in batches of 6
            const batchSize = 6;
            for (let i = 1; i < frameCount; i += batchSize) {
                const batch = [];
                for (let j = i; j < Math.min(i + batchSize, frameCount); j++) {
                    batch.push(loadImage(j));
                }
                await Promise.all(batch);
            }
        };

        loadAll();
    }, [frameCount, renderFrame]);

    // Draw initial frame + listen for resize
    useEffect(() => {
        if (firstFrameReady) {
            renderFrame(0);
        }

        const handleResize = () => {
            const idx = Math.round(scrollYProgress.get() * (frameCount - 1));
            if (imagesRef.current[idx]) renderFrame(idx);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [firstFrameReady]);

    // Scrub through frames — find nearest loaded frame if current isn't ready
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!firstFrameReady) return;
        const target = Math.min(frameCount - 1, Math.max(0, Math.round(latest * (frameCount - 1))));

        // Find the nearest loaded frame
        let frameIndex = target;
        if (!imagesRef.current[target]) {
            // Search nearby frames
            for (let offset = 1; offset < 10; offset++) {
                if (imagesRef.current[target - offset]) { frameIndex = target - offset; break; }
                if (imagesRef.current[target + offset]) { frameIndex = target + offset; break; }
            }
        }

        requestAnimationFrame(() => renderFrame(frameIndex));
    });

    return (
        <div ref={containerRef} className="relative w-full h-[500vh]">
            <div className="sticky top-0 w-full h-screen overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Loading overlay — disappears after first frame */}
                {!firstFrameReady && (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#121212] text-white/25 text-xs tracking-[0.25em] uppercase font-light">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-6 h-6 border border-white/15 border-t-white/40 rounded-full animate-spin" />
                            Loading...
                        </div>
                    </div>
                )}
                {/* Progress bar — shows while remaining frames load */}
                {firstFrameReady && loadProgress < 100 && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/[0.03]">
                        <div
                            className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-300 ease-out"
                            style={{ width: `${loadProgress}%` }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
