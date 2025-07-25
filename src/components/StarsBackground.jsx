import { useEffect, useRef } from 'react';

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
                });
            }
        };

        const drawStars = () => {
            time += 0.01;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            stars.forEach((star) => {
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
