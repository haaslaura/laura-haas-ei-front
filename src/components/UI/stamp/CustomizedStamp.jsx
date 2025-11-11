import { useEffect, useRef } from 'react';

/**
 * Tampon décoratif SVG avec effet de rotation:
 * - Survol/focus: accélère et tourne vite
 * - Sortie/blur: ralentit puis revient doucement à l'angle initial
 * - Respecte prefers-reduced-motion
 *
 * Props additionnelles:
 * - hoverSpeed (deg/s): vitesse en survol
 * - settleEase: réactivité du retour à l'angle initial
 */
const CustomizedStamp = ({
    text = 'SUR MESURE',
    size = 120,
    rotation = -8,
    innerColor = '#d45a5a', // rouge légèrement désaturé
    scallopColor = '#f07474', // liseret ondulant plus clair
    rightPosition = 'auto',
    topPosition = 'auto',
    leftPosition = 'auto',
    ariaLabel = 'Tampon décoratif',
    hoverSpeed = 540,
    settleEase = 6,
}) => {
    const scallopCount = 24;
    const scallopRadius = 6;
    const center = 50;
    const ringRadius = 42;

    // Supporte "\n" littéral et vrais retours à la ligne
    const lines = String(text).replace(/\\n/g, '\n').split('\n');

    const wrapperRef = useRef(null);
    const angleRef = useRef(rotation);
    const speedRef = useRef(0);
    const targetSpeedRef = useRef(0);
    const rafRef = useRef(0);
    const lastTsRef = useRef(0);
    const reduceMotionRef = useRef(false);
    const settlingRef = useRef(false);

    const norm360 = (a) => {
        let x = a % 360;
        if (x < 0) x += 360;
        return x;
    };
    const initialNormRef = useRef(norm360(rotation));

    useEffect(() => {
        initialNormRef.current = norm360(rotation);
        angleRef.current = rotation;
        if (wrapperRef.current) {
            wrapperRef.current.style.transform = `rotate(${rotation}deg)`;
        }
    }, [rotation]);

    useEffect(() => {
        reduceMotionRef.current =
            typeof window !== 'undefined' &&
            window.matchMedia &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (reduceMotionRef.current) {
            if (wrapperRef.current) {
                wrapperRef.current.style.transform = `rotate(${rotation}deg)`;
            }
            return;
        }

        const step = (ts) => {
            if (!lastTsRef.current) lastTsRef.current = ts;
            const dt = Math.min(0.05, (ts - lastTsRef.current) / 1000); // clamp dt
            lastTsRef.current = ts;

            if (!settlingRef.current) {
                // Easing vers la vitesse cible
                const accel = 8; // réactivité accélération
                speedRef.current += (targetSpeedRef.current - speedRef.current) * Math.min(1, accel * dt);
                angleRef.current += speedRef.current * dt;

                if (targetSpeedRef.current === 0 && Math.abs(speedRef.current) < 5) {
                    // Presque arrêté → enclenche la phase retour à l'angle initial
                    settlingRef.current = true;
                    speedRef.current = 0;
                }
            } else {
                // Retour à l'angle initial (chemin le plus court)
                const currentNorm = norm360(angleRef.current);
                let diff = initialNormRef.current - currentNorm;
                if (diff > 180) diff -= 360;
                if (diff < -180) diff += 360;

                angleRef.current += diff * Math.min(1, settleEase * dt);

                if (Math.abs(diff) < 0.2) {
                    angleRef.current = rotation;
                    settlingRef.current = false; // prêt pour un nouveau cycle
                    targetSpeedRef.current = 0;
                    speedRef.current = 0;
                }
            }

            if (wrapperRef.current) {
                wrapperRef.current.style.transform = `rotate(${angleRef.current}deg)`;
            }
            rafRef.current = requestAnimationFrame(step);
        };

        rafRef.current = requestAnimationFrame(step);
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = 0;
            lastTsRef.current = 0;
        };
    }, [rotation, hoverSpeed, settleEase]);

    const handleEnter = () => {
        if (reduceMotionRef.current) return;
        settlingRef.current = false;
        targetSpeedRef.current = hoverSpeed;
    };

    const handleLeave = () => {
        if (reduceMotionRef.current) return;
        targetSpeedRef.current = 0;
    };

    return (
        <div
            ref={wrapperRef}
            className="absolute z-49 inline-block select-none drop-shadow outline-none"
            style={{
                width: size,
                height: size,
                transform: `rotate(${rotation}deg)`,
                right: rightPosition,
                top: topPosition,
                left: leftPosition,
            }}
            role="img"
            aria-label={ariaLabel}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            onFocus={handleEnter}
            onBlur={handleLeave}
            tabIndex={0}
        >
            <svg viewBox="0 0 100 100" width="100%" height="100%">
                {/* Liseret ondulant (scallops) */}
                <g>
                    {Array.from({ length: scallopCount }).map((_, i) => {
                        const angle = (i / scallopCount) * Math.PI * 2;
                        const cx = center + ringRadius * Math.cos(angle);
                        const cy = center + ringRadius * Math.sin(angle);
                        return <circle key={i} cx={cx} cy={cy} r={scallopRadius} fill={scallopColor} />;
                    })}
                </g>

                {/* Rond central */}
                <circle cx="50" cy="50" r="38" fill={innerColor} />
                {/* Liseret intérieur pointillé */}
                <circle
                    cx="50"
                    cy="50"
                    r="36"
                    fill="none"
                    stroke="rgba(255,255,255,0.35)"
                    strokeWidth="1.5"
                    strokeDasharray="2 2"
                />

                {/* Texte central (multi-lignes) */}
                <g fill="white" fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI" fontWeight="700">
                    {lines.map((line, idx) => (
                        <text
                            key={idx}
                            x="50"
                            y={35 + idx * 10}
                            textAnchor="middle"
                            fontSize={line.length > 12 ? 7 : 8}
                            letterSpacing="0.5"
                        >
                            {line}
                        </text>
                    ))}
                </g>
            </svg>
        </div>
    );
};

export default CustomizedStamp;