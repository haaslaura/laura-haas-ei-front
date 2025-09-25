import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useContactModal } from '../store/useContactModal';

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { open } = useContactModal();

    const modalMenuRef = useRef(null);
    const closeMenuBtnRef = useRef(null);
    const openerMenuBtnRef = useRef(null);
    const prevFocusedMenuRef = useRef(null); // mémorise l'élément à restaurer

    // Écoute quel élément a ouvert la fenêtre modale (pour rétablir le focus)
    useEffect(() => {
        const handler = (e) => {
            openerMenuBtnRef.current = e.detail || null;
        };
        window.addEventListener('contactModalMenuOpener', handler);
        return () => window.removeEventListener('contactModalMenuOpener', handler);
    }, []);

    // Empêche le scroll du body et gère le focus trap
    useEffect(() => {
        if (isMobileMenuOpen) {
            // mémoriser l'élément à restaurer : priorité à l'élément envoyé via event, sinon élément actif
            prevFocusedMenuRef.current = openerMenuBtnRef.current ?? document.activeElement;
            document.body.style.overflow = 'hidden';
            if (closeMenuBtnRef.current) {
                closeMenuBtnRef.current.focus();
            }
            // Focus trap + Escape
            const handleKeyDown = (e) => {
                if (e.key === 'Tab') {
                    if (!modalMenuRef.current) return;
                    const focusable = modalMenuRef.current.querySelectorAll(
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
                    setIsMobileMenuOpen(false);
                    // restaurer le focus sur l'ouvreur
                    setTimeout(() => {
                        const toFocus = openerMenuBtnRef.current ?? prevFocusedMenuRef.current;
                        if (toFocus && typeof toFocus.focus === 'function') toFocus.focus();
                    }, 0);
                }
            };

            document.addEventListener('keydown', handleKeyDown);
            return () => {
                document.removeEventListener('keydown', handleKeyDown);
                document.body.style.overflow = '';
            };
        } else {
            document.body.style.overflow = '';
            const toFocus = openerMenuBtnRef.current ?? prevFocusedMenuRef.current;
            if (toFocus && typeof toFocus.focus === 'function') {
                setTimeout(() => toFocus.focus(), 0);
            }
        }
    }, [isMobileMenuOpen]);

    return (
        <header className="text-white shadow-md sticky top-0 z-50 bg-(--color-dark-blue)">
            <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link
                    to="/"
                    className="text-xl sm:text-2xl font-title whitespace-nowrap"
                >
                    Laura Haas Dev Web.
                </Link>

                {/* Menu principal (caché sur petits écrans) */}
                <ul className="hidden lg:flex items-center space-x-6 text-sm xl:text-base">
                    <li>
                        <NavLink
                            to="/projet-lancement"
                            className={({ isActive }) =>
                                `hover:text-(--color-accent) transition-all ${isActive ? 'text-(--color-accent)' : ''}`
                            }
                        >
                            Porteurs de projet
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/professionnel-independant"
                            className={({ isActive }) =>
                                `hover:text-(--color-accent) transition-all ${isActive ? 'text-(--color-accent)' : ''}`
                            }
                        >
                            Indépendants
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/entreprise-locale"
                            className={({ isActive }) =>
                                `hover:text-(--color-accent) transition-all ${isActive ? 'text-(--color-accent)' : ''}`
                            }
                        >
                            Entreprises locales
                        </NavLink>
                    </li>
                    <li>
                        <button
                            onClick={(e) => {
                                // transmet l'élément ouvreur à la modale via un CustomEvent
                                window.dispatchEvent(new CustomEvent('contactOpener', { detail: e.currentTarget }));
                                open();
                            }}
                            className="cursor-pointer bg-(--color-accent) text-(--color-dark-blue) font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-transform"
                        >
                            Discutons de votre projet
                        </button>
                    </li>
                </ul>

                {/* Menu mobile */}
                <button
                    className="lg:hidden text-2xl"
                    aria-label="Ouvrir le menu mobile"
                    onClick={(e) => {
                        // transmet l'élément ouvreur à la modale via un CustomEvent
                        window.dispatchEvent(new CustomEvent('contactModalMenuOpener', { detail: e.currentTarget }));
                        setIsMobileMenuOpen(true);
                    }}
                >
                    ☰
                </button>
            </nav>

            {/* Menu mobile plein écran */}
            {isMobileMenuOpen && (
                <div
                    ref={modalMenuRef}
                    className="
                        fixed inset-0 bg-[var(--color-dark-blue)] z-49 flex flex-col items-center justify-center text-white
                        animate-fade-slide
                    "
                >
                    {/* Bouton fermer */}
                    <button
                        ref={closeMenuBtnRef}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="absolute top-6 right-6 text-3xl font-bold hover:text-[var(--color-accent)]"
                        aria-label="Fermer le menu"
                    >
                        ✕
                    </button>

                    {/* Liens du menu */}
                    <ul className="space-y-10 text-2xl font-bold text-center">
                        <li>
                            <Link
                                onClick={() => setIsMobileMenuOpen(false)}
                                to="/projet-lancement"
                            >
                                Porteurs de projet
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => setIsMobileMenuOpen(false)}
                                to="/professionnel-independant"
                            >
                                Indépendants
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => setIsMobileMenuOpen(false)}
                                to="/entreprise-locale"
                            >
                                Entreprises locales
                            </Link>
                        </li>
                        <li>
                            <button
                                // onClick={open}
                                // className="bg-(--color-accent) text-(--color-dark-blue) py-2 px-4 mt-12 rounded-lg"

                                onClick={(e) => {
                                    // transmet l'élément ouvreur à la modale via un CustomEvent
                                    window.dispatchEvent(new CustomEvent('contactOpener', { detail: e.currentTarget }));
                                        open();
                                }}
                                className="cursor-pointer bg-(--color-accent) text-(--color-dark-blue) font-bold py-2 px-4 rounded-lg hover:opacity-90"
                            >
                                Discutons projet
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}

export default Header;
