'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const StackedCard = ({
                                children,
                                index,
                                total,
                            }: {
    children: React.ReactNode;
    index: number;
    total: number;
}) => {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });

    // Calcule combien de hauteur pour chaque section
    const translateY = useTransform(
        scrollYProgress,
        [0, 1],
        ['0%', `-${100 * index}%`] // Décalage uniquement quand on atteint le bas
    );

    return (
        <motion.div
            ref={ref}
            className="sticky top-0 h-screen w-full"
            style={{
                zIndex: total - index,
                y: translateY,
            }}
        >
            {children}
        </motion.div>
    );
};
