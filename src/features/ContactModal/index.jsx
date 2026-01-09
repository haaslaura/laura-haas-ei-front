import { useEffect, useRef, useState } from 'react';
import { useContactModal } from './store/useContactModal';
import ContactForm from './components/ContactForm';
import ScheduleForm from './components/ScheduleForm';

const ContactModal = ({ defaultView}) => {
    const { isOpen, close, defaultView: storeDefaultView } = useContactModal();
    const modalRef = useRef(null);
    const closeBtnRef = useRef(null);
    const openerBtnRef = useRef(null);
    const prevFocusedRef = useRef(null); // mémorise l'élément à restaurer    

    // Écoute quel élément a ouvert la fenêtre modale (pour rétablir le focus)
    useEffect(() => {
        const handler = (e) => {
            openerBtnRef.current = e.detail || null;
        };
        window.addEventListener('contactOpener', handler);
        return () => window.removeEventListener('contactOpener', handler);
    }, []);

    // Empêche le scroll du body + gère le focus trap + restaure le focus
    useEffect(() => {
        if (isOpen) {
            // mémoriser l'élément à restaurer : priorité à l'élément envoyé via event, sinon élément actif
            prevFocusedRef.current = openerBtnRef.current ?? document.activeElement;
            document.body.style.overflow = 'hidden';
            if (closeBtnRef.current) {
                closeBtnRef.current.focus();
            }
            const handleKeyDown = (e) => {
                if (e.key === 'Tab') {
                    if (!modalRef.current) return;
                    const focusable = modalRef.current.querySelectorAll(
                        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
                    );
                    const focusableArray = Array.from(focusable).filter(
                        (el) => !el.disabled && el.offsetParent !== null,
                    );
                    if (focusableArray.length === 0) return;
                    const first = focusableArray[0];
                    const last = focusableArray[focusableArray.length - 1];
                    if (!e.shiftKey && document.activeElement === last) {
                        e.preventDefault();
                        first.focus();
                    } else if (e.shiftKey && document.activeElement === first) {
                        e.preventDefault();
                        last.focus();
                    }
                }
                if (e.key === 'Escape') {
                    e.preventDefault();
                    close();
                    // restaurer le focus sur l'ouvreur (openerBtnRef) si présent, sinon sur prevFocusedRef
                    setTimeout(() => {
                        const toFocus = openerBtnRef.current ?? prevFocusedRef.current;
                        if (toFocus && typeof toFocus.focus === 'function') toFocus.focus();
                    }, 0);
                }
            };

            // écoute sur document pour capter Escape même si le focus n'est pas sur le conteneur
            document.addEventListener('keydown', handleKeyDown);
            return () => {
                document.removeEventListener('keydown', handleKeyDown);
                document.body.style.overflow = '';
            };
        } else {
            document.body.style.overflow = '';
            // Au moment de la fermeture normale, restaurer le focus
            const toFocus = openerBtnRef.current ?? prevFocusedRef.current;
            if (toFocus && typeof toFocus.focus === 'function') {
                setTimeout(() => toFocus.focus(), 0);
            }
        }
    }, [isOpen, close]);

    // Source de vérité: prop (si fournie) sinon store
    const initialView = (defaultView ?? storeDefaultView) === 'schedule';
    const [showSchedule, setShowSchedule] = useState(initialView);

    // Réinitialise la vue affichée à chaque ouverture selon la prop
    useEffect(() => {
        if (isOpen) {
            const next = (defaultView ?? storeDefaultView) === 'schedule';
            setShowSchedule(next);
        }
    }, [isOpen, defaultView, storeDefaultView]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-(--color-dark-blue)/80"
            onClick={close}
            role="dialog"
            aria-modal="true"
        >
            <div
                ref={modalRef}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-lg shadow-lg w-full max-w-[calc(100%-4rem)] md:max-w-2xl p-4 md:p-8"
            >
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    
                    <h2 className="text-xl font-title text-(--color-dark-blue)">
                        {showSchedule ? "Réservez un créneau" : "Parlez moi de votre projet"}
                    </h2>
                    
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setShowSchedule((v) => !v)}
                            className="text-(--color-dark-blue) bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded cursor-pointer"
                            aria-pressed={showSchedule}
                            aria-label={showSchedule ? 'Afficher le formulaire de contact' : 'Afficher la réservation de créneau'}
                        >
                            {showSchedule ? "Vous préférez m'écrire ?" : "Vous préférez discuter ?"}
                        </button>
                        <button
                            ref={closeBtnRef}
                            onClick={close}
                            className="text-(--color-dark-blue) hover:text-(--color-accent) text-2xl cursor-pointer"
                            aria-label="Fermer la fenêtre de contact"
                        >
                            ✕
                        </button>
                    </div>
                </div>

                {showSchedule ? <ScheduleForm /> : <ContactForm />}
            </div>
        </div>
    );
};

export default ContactModal;
