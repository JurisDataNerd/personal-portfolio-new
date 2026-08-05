"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function PortraitDistortion({ src, alt }: { src: string; alt: string }) {
    const ref = useRef<HTMLDivElement>(null);

    // Mouse tracking untuk efek parallax ringan
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { damping: 40, stiffness: 100 });
    const mouseY = useSpring(y, { damping: 40, stiffness: 100 });

    // Bergerak tipis berlawanan arah mouse (-10px sampai 10px)
    const translateX = useTransform(mouseX, [-0.5, 0.5], ["-10px", "10px"]);
    const translateY = useTransform(mouseY, [-0.5, 0.5], ["-10px", "10px"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const xPct = (e.clientX - rect.left) / rect.width - 0.5;
        const yPct = (e.clientY - rect.top) / rect.height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            // overflow-visible agar foto bisa meluber
            className="group relative h-full w-full overflow-visible flex items-end justify-center"
        >
            <motion.img
                src={src}
                alt={alt}
                style={{ x: translateX, y: translateY }}
                // INI KUNCI UTAMA:
                // h-[70vh] sm:h-[80vh] md:h-[90vh] -> Tinggi gambar paksa gede, beda tiap ukuran layar
                // w-auto -> Lebar otomatis biar gak gepeng
                // origin-bottom -> Hover scale dari bawah ke atas
                // max-w-none -> Menghapus limit lebar bawaan gambar/browser
                className="h-[70vh] sm:h-[80vh] md:h-[90vh] w-auto max-w-none object-contain object-bottom origin-bottom transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
        </div>
    );
}