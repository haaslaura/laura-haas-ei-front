import { useEffect, useRef } from 'react';

/**
 * StarsBackground
 * ----------------
 * React component that renders an animated `<canvas>` displaying a starry sky.
 * The stars are generated as a function of the canvas surface, each with a random size, flash rate and offset.
 *
 * The component manages :
 * - resizing the canvas to the window's resize
 * - continuous animation via `requestAnimationFrame`.
 * - cleaning the listeners and the animation on dismantling
 *
 */
function StarsBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let stars = [];
        let time = 0;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            // canvas.height = window.offsetHeight;
            initStars();
        };

        const initStars = () => {
            stars = [];
            const starCount = Math.floor((canvas.width * canvas.height) / 1000);

            for (let i = 0; i < starCount; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2 + 0.5,
                    blinkSpeed: Math.random() * 0.05 + 0.01,
                    blinkOffset: Math.random() * Math.PI * 2,
                    // slow drift velocity for subtle background movement
                    vx: (Math.random() - 0.5) * 0.06,
                    vy: (Math.random() - 0.5) * 0.02,
                });
            }
        };

        const drawStars = () => {
            time += 0.01;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            stars.forEach((star) => {
                // Update position slowly (drift)
                star.x += star.vx;
                star.y += star.vy;
                // Wrap-around when exiting viewport
                if (star.x < 0) star.x += canvas.width;
                if (star.x > canvas.width) star.x -= canvas.width;
                if (star.y < 0) star.y += canvas.height;
                if (star.y > canvas.height) star.y -= canvas.height;

                // Calculate blinking effect
                const brightness = 0.5 + 0.5 * Math.sin(time * star.blinkSpeed + star.blinkOffset);

                // Draw star
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`;
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(drawStars);
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        drawStars();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="stars-canvas w-full h-full bg-[var(--color-dark-blue)]"
        ></canvas>
    );
}

export default StarsBackground;
