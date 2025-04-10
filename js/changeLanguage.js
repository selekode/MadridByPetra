// Language Switcher Logic
document.getElementById("language-switcher").addEventListener("click", function () {
    const dropdown = document.getElementById("language-dropdown");
    dropdown.classList.toggle("hidden");
});

document.querySelectorAll("#language-dropdown button").forEach(button => {
    button.addEventListener("click", function () {
        const language = this.getAttribute("data-lang");
        changeLanguage(language);
    });
});

function changeLanguage(lang) {
    document.getElementById("current-language").textContent = lang === 'es' ? 'ES' : 'EN';
    translatePage(lang);
}

function translatePage(language) {
    const translations = {
        es: {
            title: "Madrid by Petra",
            services: "Servicios",
            testimonials: "Testimonials",
            contact: "Contacto",
            title-main: "Madrid by Petra",
            discover: "Descubre Madrid con una guía experta",
            explore: "Explora",
            our-services: "Nuestros Servicios",
            historic-tours: "Tours Históricos",
            historic-desc: "Explora la historia de Madrid con recorridos guiados únicos.",
            gastronomy-experience: "Experiencia Gastronómica",
            gastronomy-desc: "Disfruta de la auténtica cocina madrileña con expertos locales.",
            events-culture: "Eventos y Cultura",
            events-desc: "Descubre conciertos, festivales y espectáculos en Madrid.",
            testimonials-title: "Lo que dicen nuestros clientes",
            testimonial-1: "\"My daughter and I had an amazing tour with Petra...\"",
            testimonial-name-1: "Allegra Schorr",
            testimonial-location-1: "New York, USA",
            testimonial-2: "\"We had a great day with Petra...\"",
            testimonial-name-2: "Betsy Teutsch",
            testimonial-location-2: "Mount Airy, Pennsylvania",
            testimonial-3: "\"Our tour in Madrid far exceeded my expectations...\"",
            testimonial-name-3: "Rose Kelly",
            testimonial-location-3: "Philadelphia, Pennsylvania",
            discover-madrid: "Descubre Madrid",
            address: "Manuela Malasaña, Madrid, España",
            phone: "Teléfono: +34 617 90 92 80",
            email: "Email: petrapim@gmail.com",
        },
        en: {
            title: "Madrid by Petra",
            services: "Services",
            testimonials: "Testimonials",
            contact: "Contact",
            title-main: "Madrid by Petra",
            discover: "Discover Madrid with an expert guide",
            explore: "Explore",
            our-services: "Our Services",
            historic-tours: "Historic Tours",
            historic-desc: "Explore Madrid's history with unique guided tours.",
            gastronomy-experience: "Gastronomic Experience",
            gastronomy-desc: "Enjoy authentic Madrid cuisine with local experts.",
            events-culture: "Events & Culture",
            events-desc: "Discover concerts, festivals, and shows in Madrid.",
            testimonials-title: "What Our Clients Say",
            testimonial-1: "\"My daughter and I had an amazing tour with Petra...\"",
            testimonial-name-1: "Allegra Schorr",
            testimonial-location-1: "New York, USA",
            testimonial-2: "\"We had a great day with Petra...\"",
            testimonial-name-2: "Betsy Teutsch",
            testimonial-location-2: "Mount Airy, Pennsylvania",
            testimonial-3: "\"Our tour in Madrid far exceeded my expectations...\"",
            testimonial-name-3: "Rose Kelly",
            testimonial-location-3: "Philadelphia, Pennsylvania",
            discover-madrid: "Discover Madrid",
            address: "Manuela Malasaña, Madrid, Spain",
            phone: "Phone: +34 617 90 92 80",
            email: "Email: petrapim@gmail.com",
        }
    };

    // Apply translation to elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[language][key];
    });
}
