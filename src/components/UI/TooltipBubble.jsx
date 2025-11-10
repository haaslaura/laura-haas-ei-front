import { useId } from 'react';

/**
 * Tooltip en forme de bulle (style BD), accessible clavier.
 * - Affiché au survol (hover) et au focus clavier (focus-visible)
 * - Se place au-dessus de l’élément, avec une flèche centrée
 *
 * @param {object} props
 * @param {string} props.text - Texte à afficher dans la bulle.
 * @param {React.ReactNode} props.children - Élément déclencheur (wrap).
 */
const TooltipBubble = ({ text, children }) => {
  const bubbleId = useId();

  return (
    <div
      className="relative inline-flex group outline-none"
      tabIndex={0}
      aria-describedby={bubbleId}
    >
      {children}

      <div
        id={bubbleId}
        role="tooltip"
        className="
          pointer-events-none absolute z-50
          bottom-full left-1/2 -translate-x-1/2 mb-3
          opacity-0 translate-y-2
          duration-200 ease-out
          group-hover:opacity-100 group-hover:translate-y-0
          group-focus-visible:opacity-100 group-focus-visible:translate-y-0
          group-focus-within:opacity-100 group-focus-within:translate-y-0
        "
      >
        <div
          className="
            bg-white text-(--color-dark-blue) border border-slate-200 shadow-lg
            rounded-xl px-3 py-2 text-sm font-medium whitespace-nowrap
          "
        >
          {text}
        </div>
        {/* Flèche (carré roté) */}
        <div
          className="
            absolute left-1/2 -translate-x-1/2
            -bottom-1 w-3 h-3 rotate-45
            bg-white border-l border-t border-slate-200
          "
        />
      </div>
    </div>
  );
};

export default TooltipBubble;