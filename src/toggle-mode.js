let darkMode = true;

const buttonToggle = document.getElementById('toggle-mode')


buttonToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('light')
    
    const mode = darkMode ? 'light': 'dark'
    event.currentTarget
    .queySelector('span').textContent = `${mode} mode ativado!`
    // o valor precisa ser o contrário da antiga
    darkMode = !darkMode
})