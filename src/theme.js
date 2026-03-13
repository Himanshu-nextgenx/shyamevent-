export function setTheme(themeName) {
  document.body.classList.remove('theme-warm', 'theme-dark');
  if (themeName === 'warm') document.body.classList.add('theme-warm');
  if (themeName === 'dark') document.body.classList.add('theme-dark');
  
  localStorage.setItem('wedding-theme', themeName);
}

export function getInitialTheme() {
  const saved = localStorage.getItem('wedding-theme');
  // Handle old key migration
  if (saved === 'champagne') return 'warm';
  if (saved === 'midnight') return 'dark';
  return saved || 'pearl';
}
