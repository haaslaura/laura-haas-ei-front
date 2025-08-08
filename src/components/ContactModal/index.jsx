import { useEffect, useRef } from 'react';

export default function ContactModal({ isOpen, onClose }) {
    const modalRef = useRef(null);
    const closeBtnRef = useRef(null);

    // Empêche le scroll du body et gère le focus trap
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            if (closeBtnRef.current) {
                closeBtnRef.current.focus();
            }
        } else {
            document.body.style.overflow = '';
        }
    }, [isOpen]);

    // Fermer si clic à l'extérieur
    const handleClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose();
        }
    };

    // Validation email
    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // Validation téléphone (simple : 10 à 15 chiffres)
    const isValidPhone = (phone) => /^[0-9\s+()-]{10,15}$/.test(phone);

    // Gestion du submit
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const data = {
            firstname: formData.get('firstname').trim(),
            lastname: formData.get('lastname').trim(),
            email: formData.get('email').trim(),
            phone: formData.get('phone').trim(),
            message: formData.get('message').trim(),
        };

        if (!data.firstname || !data.lastname || !data.email || !data.phone || !data.message) {
            alert('Tous les champs sont requis.');
            return;
        }
        if (!isValidEmail(data.email)) {
            alert('Adresse email invalide.');
            return;
        }
        if (!isValidPhone(data.phone)) {
            alert('Numéro de téléphone invalide.');
            return;
        }

        console.log('Formulaire envoyé :', data);
        alert('Votre message a été envoyé !');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-dark-blue)]/80"
            onClick={handleClickOutside}
            role="dialog"
            aria-modal="true"
        >
            <div
                ref={modalRef}
                className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6"
            >
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-title text-[var(--color-dark-blue)]">Discutons de votre projet</h2>
                    <button
                        ref={closeBtnRef}
                        onClick={onClose}
                        className="text-[var(--color-dark-blue)] hover:text-[var(--color-accent)] text-2xl"
                        aria-label="Fermer la fenêtre de contact"
                    >
                        ✕
                    </button>
                </div>

                {/* Formulaire */}
                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >
                    <div className="flex gap-4">
                        <input
                            type="text"
                            name="firstname"
                            placeholder="Prénom"
                            maxLength="50"
                            required
                            className="flex-1 border p-2 rounded focus:outline-[var(--color-accent)]"
                        />
                        <input
                            type="text"
                            name="lastname"
                            placeholder="Nom"
                            maxLength="50"
                            required
                            className="flex-1 border p-2 rounded focus:outline-[var(--color-accent)]"
                        />
                    </div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        maxLength="100"
                        required
                        className="w-full border p-2 rounded focus:outline-[var(--color-accent)]"
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Téléphone"
                        maxLength="20"
                        required
                        className="w-full border p-2 rounded focus:outline-[var(--color-accent)]"
                    />
                    <textarea
                        name="message"
                        placeholder="Parlez de votre projet..."
                        maxLength="500"
                        required
                        rows="4"
                        className="w-full border p-2 rounded focus:outline-[var(--color-accent)]"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-[var(--color-accent)] text-[var(--color-dark-blue)] font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-all"
                    >
                        Envoyer
                    </button>
                </form>
            </div>
        </div>
    );
}
