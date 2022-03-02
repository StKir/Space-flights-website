// ScrollReveal().reveal('.headline');
// ScrollReveal().reveal('.tagline', { delay: 500 });
// ScrollReveal().reveal('.punchline', { delay: 2000 });
const page = window.location.pathname.split("/").pop();

if(page === 'index.html' || page === 'About.html'){
    const divs = document.querySelectorAll('div');

    divs.forEach((el) => {
        ScrollReveal().reveal(`.${el.classList[0]}`);
    })
}