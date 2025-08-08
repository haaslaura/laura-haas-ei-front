import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '../components/Button';
import ContactModal from '../components/ContactModal';

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <header className="text-white shadow-md sticky top-0 z-50 bg-[var(--color-dark-blue)]">
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
                                `hover:text-[var(--color-accent)] transition-all ${isActive ? 'text-[var(--color-accent)]' : ''}`
                            }
                        >
                            Porteurs de projet
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/professionnel-independant"
                            className={({ isActive }) =>
                                `hover:text-[var(--color-accent)] transition-all ${isActive ? 'text-[var(--color-accent)]' : ''}`
                            }
                        >
                            Indépendants
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/entreprise-locale"
                            className={({ isActive }) =>
                                `hover:text-[var(--color-accent)] transition-all ${isActive ? 'text-[var(--color-accent)]' : ''}`
                            }
                        >
                            Entreprises locales
                        </NavLink>
                    </li>
                    <li>
                        {/* <Button
                            text="Discutons projet"
                            link="/contact"
                        /> */}
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-[var(--color-accent)] text-[var(--color-dark-blue)] font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-all"
                        >
                            Discutons projet
                        </button>
                    </li>
                </ul>

                {/* Menu mobile */}
                <button
                    onClick={() => setIsMobileMenuOpen(true)}
                    className="lg:hidden text-2xl"
                    aria-label="Ouvrir le menu mobile"
                >
                    ☰
                </button>
            </nav>

            {/* Menu mobile plein écran */}
            {isMobileMenuOpen && (
                <div
                    className="
                        fixed inset-0 bg-[var(--color-dark-blue)] z-50 flex flex-col items-center justify-center text-white
                        animate-fade-slide
                    "
                >
                    {/* Bouton fermer */}
                    <button
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
                            <Link
                                onClick={() => setIsMobileMenuOpen(false)}
                                to="/contact"
                                className="bg-[var(--color-accent)] text-[var(--color-dark-blue)] py-2 px-4 mt-12 rounded-lg"
                            >
                                Discutons projet
                            </Link>
                        </li>
                    </ul>
                </div>
            )}

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </header>
    );
}

export default Header;
