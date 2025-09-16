import { create } from 'zustand';

/**
 * Store Zustand pour gérer l'état du modal de contact.
 *
 * @typedef {Object} ContactModalStore
 * @property {boolean} isOpen - Indique si le modal est actuellement ouvert.
 * @property {() => void} open - Ouvre la modal (passe `isOpen` à true).
 * @property {() => void} close - Ferme la modal (passe `isOpen` à false).
 */

export const useContactModal = create((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
}));
