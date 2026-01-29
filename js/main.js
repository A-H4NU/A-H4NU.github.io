// Tailwind Configuration
tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                cat: {
                    bg: 'var(--ctp-bg)',
                    card: 'var(--ctp-card)',
                    border: 'var(--ctp-border)',
                    text: 'var(--ctp-text)',
                    subtext: 'var(--ctp-subtext)',
                    accent: 'var(--ctp-accent)',
                    hover: 'var(--ctp-hover)',
                }
            }
        }
    }
};

// Theme Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

function updateIcons() {
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
        themeToggleLightIcon.classList.remove('hidden');
        themeToggleDarkIcon.classList.add('hidden');
    } else {
        themeToggleLightIcon.classList.add('hidden');
        themeToggleDarkIcon.classList.remove('hidden');
    }
}

// Initial Icon State
updateIcons();

themeToggleBtn.addEventListener('click', function() {
    // Toggle class
    document.documentElement.classList.toggle('dark');
    
    // Save preference
    if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
    
    updateIcons();
});
