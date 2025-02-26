import React, { useState, useEffect } from 'react';
import emailjs from "@emailjs/browser";
import "../style/Contact.css";

function Contact() {
    const [formData, setFormData] = useState({
        email: '',
        message: '',
    });
    const [isSending, setIsSending] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);
        setSuccessMessage('');
        setErrorMessage('');

        emailjs.send('service_u748dti', 'template_djpym5g', formData, '7jdJciniDOYezsN8p')
            .then((response) => {
                console.log('Success!', response.status, response.text);
                setSuccessMessage('Message envoyé avec succès!');
                console.log('Sending data:', formData);
                setFormData({ email: '', message: '' });
            })
            .catch((err) => {
                console.error('Failed to send message', err);
                setErrorMessage('Une erreur est survenue, veuillez réessayer.');
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <div
            className="flex items-center justify-center h-screen p-8"
            style={{
                background: 'linear-gradient(180deg, rgba(87,86,86,1) 3%, rgba(87,86,86,1) 5%, rgba(1,5,2,1) 100%)',
            }}
        >
            <div 
                className={`contact-container bg-gray-800 rounded-lg shadow-2xl w-full max-w-xl md:max-w-2xl lg:max-w-3xl transform transition duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0 mt-12 md:mt-0 z-10' : 'opacity-0 translate-y-10'}`}
            >
                <h1 className="text-5xl font-bold text-center text-white">Contact</h1>

                {successMessage && <p className="text-green-500 text-center mt-4">{successMessage}</p>}
                {errorMessage && <p className="text-red-500 text-center mt-4">{errorMessage}</p>}

                <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-white mb-3 text-lg">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-white mb-3 text-lg">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="6"
                            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        disabled={isSending}
                        className={`w-full ${isSending ? 'bg-gray-500' : 'bg-blue-600 hover:bg-blue-700'} text-white font-bold py-4 rounded-lg transition duration-200 text-xl`}
                    >
                        {isSending ? 'Envoi...' : 'Envoyer'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
