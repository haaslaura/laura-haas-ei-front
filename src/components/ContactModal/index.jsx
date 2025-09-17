import { useEffect, useRef } from 'react';
import { useContactModal } from '../../store/useContactModal';

const ContactModal = () => {
    const { isOpen, close } = useContactModal();
    const modalRef = useRef(null);
    const closeBtnRef = useRef(null);
    const openerBtnRef = useRef(null);

    // Empêche le scroll du body et gère le focus trap
    useEffect(() => {
        let lastActiveElement = null;
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            lastActiveElement = document.activeElement;
            if (closeBtnRef.current) {
                closeBtnRef.current.focus();
            }
            // Focus trap + Escape
            const handleKeyDown = (e) => {
                if (e.key === 'Tab') {
                    const focusable = modalRef.current.querySelectorAll(
                        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                    );
                    const focusableArray = Array.from(focusable).filter(el => !el.disabled && el.offsetParent !== null);
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
                    // Remet le focus sur le bouton qui a ouvert la modale
                    setTimeout(() => {
                        if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
                            lastActiveElement.focus();
                        }
                    }, 0);
                }
            };
            modalRef.current && modalRef.current.addEventListener('keydown', handleKeyDown);
            return () => {
                modalRef.current && modalRef.current.removeEventListener('keydown', handleKeyDown);
                document.body.style.overflow = '';
            };
        } else {
            document.body.style.overflow = '';
        }
    }, [isOpen, close]);

    // Validation email
    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // Validation téléphone (simple : 10 à 15 chiffres)
    const isValidPhone = (phone) => /^[0-9\s+()-]{10,15}$/.test(phone);

    // Gestion du submit
    const handleSubmit = async (e) => {
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

        // sending data form
        try {
            const response = await fetch(import.meta.env.VITE_API_MAIL_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error('Erreur serveur');
            alert('Votre message a été envoyé !');
            close();
        } catch (err) {
            alert('Une erreur est survenue, réessayez plus tard.');
            console.log(err);
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-dark-blue)]/80"
            onClick={close}
            role="dialog"
            aria-modal="true"
        >
            <div
                ref={modalRef}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-lg shadow-lg w-full max-w-md p-8"
            >
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-title text-[var(--color-dark-blue)]">Discutons de votre projet</h2>
                    <button
                        ref={closeBtnRef}
                        onClick={close}
                        className="text-(--color-dark-blue) hover:text-(--color-accent) text-2xl cursor-pointer"
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
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col gap-2 w-[45%]">
                            <label
                                className="text-black"
                                htmlFor="firstname"
                            >
                                Prénom
                            </label>
                            <input
                                type="text"
                                name="firstname"
                                id="firstname"
                                maxLength="50"
                                required
                                className="w-full p-2 rounded focus:outline-(--color-accent) bg-gray-200 text-black"
                            />
                        </div>
                        <div className="flex flex-col gap-2 w-[45%]">
                            <label
                                className="text-black"
                                htmlFor="lastname"
                            >
                                Nom
                            </label>
                            <input
                                type="text"
                                name="lastname"
                                id="lastname"
                                maxLength="50"
                                required
                                className="w-full p-2 rounded focus:outline-(--color-accent) bg-gray-200 text-black"
                            />
                        </div>
                    </div>

                    <label
                        className="text-black"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        maxLength="100"
                        required
                        className="w-full p-2 rounded focus:outline-(--color-accent) bg-gray-200 text-black"
                    />

                    <label
                        className="text-black"
                        htmlFor="phone"
                    >
                        Téléphone
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        maxLength="20"
                        required
                        className="w-full p-2 rounded focus:outline-(--color-accent) bg-gray-200 text-black"
                    />

                    <label
                        className="text-black"
                        htmlFor="phone"
                    >
                        Votre message
                    </label>
                    <textarea
                        name="message"
                        placeholder="Parlez moi de votre projet..."
                        maxLength="500"
                        required
                        rows="4"
                        className="w-full p-2 rounded focus:outline-(--color-accent) bg-gray-200 text-black"
                    ></textarea>

                    <button
                        type="submit"
                        className="w-full bg-[var(--color-accent)] text-(--color-dark-blue) font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-all cursor-pointer"
                    >
                        Envoyer
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactModal;
