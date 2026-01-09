import { create } from 'zustand';

/**
 * Store Zustand pour gérer l'état du modal de contact.
 *
 * @typedef {Object} ContactModalStore
 * @property {boolean} isOpen - Indique si le modal est actuellement ouvert.
 * @property {() => void} open - Ouvre la modal (passe `isOpen` à true).
 * @property {() => void} close - Ferme la modal (passe `isOpen` à false).
 */

export const useContactModal = create((set, get) => ({
    isOpen: false,
    
    // Vue par défaut: 'contact' | 'schedule'
    defaultView: 'contact',

    // Ouvre la modale et permet de définir la vue par défaut pour cette ouverture
    // Usage: open({ defaultView: 'schedule' })
    open: (opts = {}) => {
        const nextDefault = opts.defaultView ?? get().defaultView;
        set({ isOpen: true, defaultView: nextDefault });
    },

    // Ferme la modale
    close: () => set({ isOpen: false }),

    // Configure la vue par défaut sans ouvrir la modale
    setDefaultView: (view) => set({ defaultView: view }),
}));
