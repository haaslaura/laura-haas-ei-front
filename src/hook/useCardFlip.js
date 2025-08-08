// Hook pour gérer l’état et l’accessibilité

import { useState, useEffect, useRef } from 'react';

export function useCardFlip() {
    const [isFlipped, setIsFlipped] = useState(false);
    const backBtnRef = useRef(null);

    // Focus automatique sur "Retour" quand la carte est retournée
    useEffect(() => {
        if (isFlipped && backBtnRef.current) {
            backBtnRef.current.focus();
        }
    }, [isFlipped]);

    const flipToBack = () => setIsFlipped(true);
    const flipToFront = () => setIsFlipped(false);

    return {
        isFlipped,
        flipToBack,
        flipToFront,
        backBtnRef,
    };
}
