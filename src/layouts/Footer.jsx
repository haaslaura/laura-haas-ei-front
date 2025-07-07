export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#020c1b] text-white py-8">
            <div className="container mx-auto px-6 flex flex-col items-center text-center">
                <p>&copy; {currentYear} Laura Haas. Tous droits réservés.</p>
                <p className="text-sm mt-2">Fait avec ♥ à Strasbourg, France.</p>
                <div className="mt-4 flex items-center justify-center space-x-4">
                    <a
                        href="https://www.linkedin.com/in/laurahaas-developpement/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--color-accent)] focus:text-[var(--color-accent)] transition-colors"
                    >
                        LinkedIn
                    </a>
                    <span className="text-[var(--color-slate)]">|</span>
                    <a
                        href="/mentions-legales"
                        className="hover:text-[var(--color-accent)] focus:text-[var(--color-accent)] transition-colors"
                    >
                        Mentions Légales
                    </a>
                </div>
            </div>
        </footer>
    );
}
