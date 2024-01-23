ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.title, .subtitle', { origin: 'top' });
ScrollReveal().reveal('.subtitle', { origin: 'left' });
ScrollReveal().reveal(' .work, .see-more ', { origin: 'bottom' });