document.addEventListener("DOMContentLoaded", function() {
    const typewriter = document.querySelector('.typewriter h3');
    typewriter.addEventListener('animationend', () => {
        typewriter.parentElement.classList.add('finished');
    });
});
