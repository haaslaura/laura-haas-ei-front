import { useEffect } from 'react';

const ScheduleForm = () => {
	useEffect(() => {
		// Purge l'état global Zcal pour forcer la réinitialisation à chaque montage
		try {
			if (typeof window !== 'undefined' && 'zcal' in window) {
				// Certaines plateformes empêchent delete, on fallback à undefined
				try { delete window.zcal; } catch (_) { window.zcal = undefined; }
			}
		} catch (_) { /* ignore */ }

		const src = 'https://static.zcal.co/embed/v1/embed.js';
		const script = document.createElement('script');
		script.type = 'text/javascript';
		script.async = true;
		script.src = src;
		document.body.appendChild(script);

		// Nettoyage à l'unmount pour éviter l'accumulation de scripts
		return () => {
			try {
				if (script && script.parentNode) {
					script.parentNode.removeChild(script);
				}
			} catch (_) {
				// ignore
			}
		};
	}, []);

	return (
		<div className="zcal-inline-widget">
			<a href="https://zcal.co/laurahaas">Schedule a meeting</a>
		</div>
	);
};

export default ScheduleForm;