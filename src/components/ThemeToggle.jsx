import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = ({ theme, toggleTheme }) => {
    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--accent-color)] transition-all duration-300"
            aria-label="Toggle Dark Mode"
        >
            {theme === 'light' ? (
                <FaMoon size={20} />
            ) : (
                <FaSun size={20} className="text-yellow-400" />
            )}
        </button>
    );
};

export default ThemeToggle;
