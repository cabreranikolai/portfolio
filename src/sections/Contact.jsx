import { useState, useRef } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGithub, FaLinkedin, FaInstagram, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('idle'); // idle, sending, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        // Basic validation
        const formData = new FormData(form.current);
        const name = formData.get('user_name');
        const email = formData.get('user_email');
        const message = formData.get('message');

        if (!name || !email || !message) {
            setStatus('error');
            setErrorMessage('Please fill in all fields.');
            return;
        }

        setStatus('sending');

        // Note: You need to replace these with your own EmailJS IDs
        // Get them at https://www.emailjs.com/
        const SERVICE_ID = 'service_placeholder';
        const TEMPLATE_ID = 'template_placeholder';
        const PUBLIC_KEY = 'public_key_placeholder';

        if (SERVICE_ID === 'service_placeholder') {
            // Simulation mode if IDs are not set
            setTimeout(() => {
                console.log('Form submitted (simulation):', { name, email, message });
                setStatus('success');
                form.current.reset();
                setTimeout(() => setStatus('idle'), 5000);
            }, 1500);
            return;
        }

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                form.current.reset();
                setTimeout(() => setStatus('idle'), 5000);
            }, (error) => {
                console.log(error.text);
                setStatus('error');
                setErrorMessage('Something went wrong. Please try again later.');
            });
    };

    return (
        <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10 overflow-hidden">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
                >
                    Get In Touch
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-bold mb-6 text-[var(--accent-color)]">Let's Talk</h3>
                        <p className="mb-8 text-gray-300 text-lg">
                            I'm open to freelance opportunities and full-time roles.
                            If you have a project in mind or just want to say hi, feel free to reach out!
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-lg">
                                <FaEnvelope className="text-[var(--accent-color)]" />
                                <a href="mailto:nikolai.cabrera0569@gmail.com" className="hover:text-[var(--accent-color)] transition-colors">nikolai.cabrera0569@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-4 text-lg">
                                <FaPhone className="text-[var(--accent-color)]" />
                                <span>09616038653</span>
                            </div>
                            <div className="flex items-center gap-4 text-lg">
                                <FaMapMarkerAlt className="text-[var(--accent-color)]" />
                                <span>Aringay, La Union</span>
                            </div>
                        </div>

                        <div className="flex gap-6 mt-10 text-2xl">
                            <a href="https://github.com/cabreranikolai" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-color)] transition-colors"><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/cabreranikolai/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-color)] transition-colors"><FaLinkedin /></a>
                            <a href="https://www.instagram.com/diakosinikolai/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-color)] transition-colors"><FaInstagram /></a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        ref={form}
                        onSubmit={sendEmail}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10 relative"
                    >
                        <AnimatePresence>
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 bg-slate-900/90 flex flex-col items-center justify-center rounded-xl z-20 text-center p-6"
                                >
                                    <FaCheckCircle className="text-5xl text-green-400 mb-4" />
                                    <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                                    <p className="text-gray-300">Thanks for reaching out. I'll get back to you as soon as possible.</p>
                                    <button
                                        type="button"
                                        onClick={() => setStatus('idle')}
                                        className="mt-6 text-[var(--accent-color)] hover:underline font-medium"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="mb-6">
                            <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="user_name"
                                required
                                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--accent-color)] focus:bg-white/20 transition-all"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="user_email"
                                required
                                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--accent-color)] focus:bg-white/20 transition-all"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                required
                                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--accent-color)] focus:bg-white/20 transition-all"
                                placeholder="How can I help you?"
                            ></textarea>
                        </div>

                        {status === 'error' && (
                            <div className="mb-6 flex items-center gap-2 text-red-400 text-sm">
                                <FaExclamationCircle />
                                <span>{errorMessage}</span>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className={`w-full bg-[var(--accent-color)] hover:bg-[var(--accent-hover)] text-white font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2 ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {status === 'sending' ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    <span>Sending...</span>
                                </>
                            ) : (
                                'Send Message'
                            )}
                        </button>
                    </motion.form>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Nikolai Cabrera. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
