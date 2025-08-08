import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import AreaChartIcon from '@mui/icons-material/AreaChart';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';

const CardBack = ({ title, flipToFront, isFlipped, backBtnRef, objective, resultat, tech }) => {
    return (
        <div
            className="absolute inset-0 rounded-lg overflow-hidden shadow-xl bg-(--color-dark-blue) text-white flex flex-col items-center justify-center p-8"
            style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                WebkitTransform: 'rotateY(180deg)',
            }}
            aria-hidden={!isFlipped}
            role="region"
            aria-live="polite"
        >
            <div className="flex-1 flex flex-col justify-center gap-4 text-sm">
                <h3 className="text-xl font-title text-center mb-4">{title}</h3>
                <p className="text-[--color-slate] ">
                    <TrackChangesIcon fontSize='small' /> <span className="font-bold">Objectif : </span> {objective}
                </p>
                <p className="text-[--color-slate] ">
                    <AreaChartIcon fontSize='small' /> <span className="font-bold">Résultat : </span> {resultat}
                </p>
                <p className="text-left">
                    <AppShortcutIcon fontSize='small' /> <span className="font-bold">Technologies employées : </span>
                    {tech.join(', ')}
                </p>
            </div>
            <div className="text-center mt-6">
                <button
                    ref={backBtnRef}
                    onClick={flipToFront}
                    className="text-(--color-accent) hover:underline rounded focus:outline-2 focus:outline-offset-3 focus:outline-(--color-accent)"
                    aria-label="Retour au recto de la carte"
                    aria-expanded={isFlipped}
                    tabIndex={!isFlipped ? -1 : 0}
                >
                    Retour
                </button>
            </div>
        </div>
    );
};

export default CardBack;
