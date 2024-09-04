import { useRef } from "react";

export const useTouchEvents = (onSwipe) => {
    const touchStartRef = useRef(null);

    const handleTouchStart = (event) => {
        touchStartRef.current = event.touches[0].clientX;
    };

    const handleTouchMove = (event) => {
        if (!touchStartRef.current) return;

        const diff = event.touches[0].clientX - touchStartRef.current;
        if (Math.abs(diff) > 50) {
            onSwipe(diff);
            touchStartRef.current = null;
        }
    };

    return { onTouchStart: handleTouchStart, onTouchMove: handleTouchMove };
};
