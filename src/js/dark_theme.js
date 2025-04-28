document.addEventListener('DOMContentLoaded', function() {
    const switchButtons = document.querySelectorAll('.switch-btn');
    const bodyElement = document.body;
    const modalElement = document.querySelector('.modal');

    function initTheme() {
        bodyElement.classList.remove('dark-theme');
        modalElement.classList.remove('dark-theme');
        
        document.querySelectorAll('.switch-light-svg').forEach(function(element) {
            element.style.display = 'block';
        });
        
        document.querySelectorAll('.switch-dark-svg').forEach(function(element) {
            element.style.display = 'none';
        });
    }

    function toggleTextColors(isDark) {
        const elements = document.querySelectorAll('body, body *:not(script):not(.span-last-name):not(.logo-header)');
        const textColor = isDark ? 'var(--white)' : 'var(--black)';
        
        elements.forEach(element => {
            element.style.color = textColor;
        });
    }

    function toggleTheme() {
        const isDark = bodyElement.classList.contains('dark-theme');
        
        if (isDark) {
            bodyElement.classList.remove('dark-theme');
            modalElement.classList.remove('dark-theme');
            
            document.querySelectorAll('.switch-light-svg').forEach(function(element) {
                element.style.display = 'block';
            });
            
            document.querySelectorAll('.switch-dark-svg').forEach(function(element) {
                element.style.display = 'none';
            });
        } else {
            bodyElement.classList.add('dark-theme');
            modalElement.classList.add('dark-theme');
            
            document.querySelectorAll('.switch-light-svg').forEach(function(element) {
                element.style.display = 'none';
            });
            
            document.querySelectorAll('.switch-dark-svg').forEach(function(element) {
                element.style.display = 'block';
            });
        }
        toggleTextColors(!isDark);
    }

    initTheme();
    
    switchButtons.forEach(function(button) {
        button.addEventListener('click', toggleTheme);
    });
});