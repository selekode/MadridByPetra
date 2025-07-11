const toggleBtn = document.getElementById('lang-toggle');
const langMenu = document.getElementById('lang-menu');

toggleBtn.addEventListener('click', () => {
    langMenu.classList.toggle('hidden');
});

// Optional: update current language text
document.getElementById('lang-es').addEventListener('click', () => {
    document.getElementById('current-lang').textContent = 'ES';
    langMenu.classList.add('hidden');
    // add your language-switch logic here
});

document.getElementById('lang-en').addEventListener('click', () => {
    document.getElementById('current-lang').textContent = 'EN';
    langMenu.classList.add('hidden');
    // add your language-switch logic here
});

// Optional: close dropdown when clicking outside
window.addEventListener('click', (e) => {
    if (!toggleBtn.contains(e.target) && !langMenu.contains(e.target)) {
        langMenu.classList.add('hidden');
    }
});