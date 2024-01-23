var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tab of tablinks) {
        tab.classList.remove("active-link");
    }
    for (tab of tabcontents) {
        tab.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

/*  sliding animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    })
})

const hiddenElement = document.querySelectorAll(".hidden");
hiddenElement.forEach((el) => observer.observe(el));
*/

/*function toggleMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    const button = document.querySelector('.toggle-button');
    const isDarkMode = body.classList.contains('dark-mode');

    button.textContent = isDarkMode ? 'Too Bright?' : 'Too Dark?';
}*/

document.getElementById('contactForm').addEventListener('submit', function (event) {
    setTimeout(() => {
        document.getElementById('contactForm').reset();
    }, 5000);
});

// ---scroll reveal---

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.header-text, .sub-title', { origin: 'top' });
ScrollReveal().reveal('.header-img, .work, .see-more, .contact-right, .about-col-2', { origin: 'bottom' });
ScrollReveal().reveal('.about-col-1 , .header-text h1, .contact-info', { origin: 'left' });

// -- typed text---

const typed = new Typed('.multiple-text', {
    strings:['FullStack Developer', 'Frontend Developer', 'Backend Developer' ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});


