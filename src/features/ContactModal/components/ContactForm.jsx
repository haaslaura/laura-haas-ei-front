import { useContactModal } from '../store/useContactModal';

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isValidPhone = (phone) => /^[0-9\s+()-]{10,15}$/.test(phone);

const ContactForm = () => {
	const { close } = useContactModal();

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

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<div className="flex flex-row justify-between">
				<div className="flex flex-col gap-2 w-[45%]">
					<label className="text-black" htmlFor="firstname">Prénom</label>
					<input type="text" name="firstname" id="firstname" maxLength="50" required className="w-full p-2 rounded focus:outline-(--color-accent) bg-gray-200 text-black" />
				</div>
				<div className="flex flex-col gap-2 w-[45%]">
					<label className="text-black" htmlFor="lastname">Nom</label>
					<input type="text" name="lastname" id="lastname" maxLength="50" required className="w-full p-2 rounded focus:outline-(--color-accent) bg-gray-200 text-black" />
				</div>
			</div>

			<label className="text-black" htmlFor="email">Email</label>
			<input type="email" name="email" maxLength="100" required className="w-full p-2 rounded focus:outline-(--color-accent) bg-gray-200 text-black" />

			<label className="text-black" htmlFor="phone">Téléphone</label>
			<input type="tel" name="phone" maxLength="20" required className="w-full p-2 rounded focus:outline-(--color-accent) bg-gray-200 text-black" />

			<label className="text-black" htmlFor="message">Votre message</label>
			<textarea name="message" placeholder="Parlez moi de votre projet..." maxLength="500" required rows="4" className="w-full p-2 rounded focus:outline-(--color-accent) bg-gray-200 text-black"></textarea>

			<button type="submit" className="w-full bg-[var(--color-accent)] text-(--color-dark-blue) font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-all cursor-pointer">Envoyer</button>
		</form>
	);
};

export default ContactForm;
