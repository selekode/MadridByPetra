// Define translations
const translations = {
    "inicio": {
        "es": "Inicio",
        "en": "Home"
    },
    "services": {
        "es": "Servicios",
        "en": "Services"
    },
    "testimonials": {
        "es": "Testimonios",
        "en": "Testimonials"
    },
    "contact": {
        "es": "Contacto",
        "en": "Contact Us"
    },
    "explore": {
        "es": "EXPLORA",
        "en": "EXPLORE"
    },
    "our-services": {
        "es": "Nuestros Servicios",
        "en": "Our Services"
    },
    "pinta-cata": {
        "es": "Pinta y Cata",
        "en": "Paint and Taste"
    },
    "pinta-cata-desc": {
        "es": "Lorem ipsum",
        "en": "Lorem ipsum"
    },
    "historic-tours": {
        "es": "Tours Históricos",
        "en": "Historic Tours"
    },
    "historic-desc": {
        "es": "Explora la historia de Madrid con recorridos guiados únicos.",
        "en": "Explore Madrid’s history with unique guided tours."
    },
    "gastronomy-experience": {
        "es": "Experiencia Gastronómica",
        "en": "Gastronomic Experience"
    },
    "pintaycata-paragraph-1": {
        "es": "Pinta & Cata es una actividad artística en la cual, los participantes, con las indicaciones de un profesor de pintura, son capaces de pintar una obra de arte en un breve espacio de tiempo, combinado con la degustación de exquisitos vinos y delicias gastronómicas en un ambiente agradable y divertido. No es necesario tener experiencia en artes plásticas, solamente las ganas de experimentar algo nuevo, constructivo y dinámico.",
        "en": "Paint and Taste is an artistic experience in which participants, guided step by step by a painting instructor, are able to create their own artwork in a short period of time, while enjoying a tasting of exquisite wines and gourmet delights in a relaxed, fun, and welcoming atmosphere. No previous artistic experience is required—just the desire to try something new, creative, and engaging."
    }
    ,
    "contact-title": {
        "es": "Contácto",
        "en": "Contact Us"
    },
    "name-label": {
        "es": "Nombre",
        "en": "Name"
    },
    "phone-label": {
        "es": "Teléfono",
        "en": "Phone"
    },
    "message-label": {
        "es": "Mensaje",
        "en": "Message"
    },
    "send-message": {
        "es": "Enviar mensaje",
        "en": "Send message"
    },
    "title-main": {
        "es": "Madrid by Petra",
        "en": "Madrid by Petra"
    },
    "description-paragraph-1": {
        "es": "Amplia experiencia en la organización de congresos médicos, encuentros internacionales y viajes de incentivos, cuidando cada detalle: recepción de visitantes, traslados desde el aeropuerto, cenas de gala y transporte privado.",
        "en": "Extensive experience in organizing medical congresses, international meetings and incentive trips, taking care of every detail: guest reception, airport transfers, gala dinners and private transportation."
    },
    "description-paragraph-2": {
        "es": "Experiencia como enlace oficial con la Presidencia de la Unión Europea, acompañando y asistiendo a delegaciones de ministros de Austria durante su estancia.",
        "en": "Experience as an official liaison with the Presidency of the European Union, accompanying and assisting delegations of Austrian ministers during their stay."
    },
    "description-paragraph-3": {
        "es": "Colaboración como consultora en proyectos internacionales para el mercado germanoparlante y delegaciones de Estados Unidos, en cooperación con Gedeth Network e IPEX (Gobierno de Castilla-La Mancha).",
        "en": "Collaboration as a consultant on international projects for the German-speaking market and United States delegations, in cooperation with Gedeth Network and IPEX (Government of Castilla-La Mancha)."
    },
    "description-paragraph-4": {
        "es": "Colaboración como correctora de alemán para la revista 'Muy Interesante Historia', aportando precisión cultural y lingüística.",
        "en": "Collaboration as a German-language proofreader for 'Muy Interesante Historia' magazine, providing cultural and linguistic accuracy."
    },
    "pintaycata-paragraph-2": {
        "es": "¡Despierta al artista que llevas dentro en un ambiente divertido y relajado! Este taller privado de pintura es una experiencia creativa única donde, de la mano de un instructor profesional, pintarás tu propia obra maestra, incluso si nunca antes has tomado un pincel. Mientras creas, disfruta de una degustación seleccionada de deliciosos bocadillos gourmet diseñados para despertar tus sentidos. No se requiere experiencia artística previa; solo las ganas de probar algo nuevo, estimulante e inolvidable.",
        "en": "Unleash your inner artist in a fun and relaxed atmosphere! This private painting workshop is a unique creative experience where, guided by a professional art instructor, you'll paint your own masterpiece, even if you've never picked up a brush before. As you create, enjoy a curated tasting of delicious gourmet bites that awaken the senses. No artistic experience needed, just a desire to try something new, engaging, and unforgettable."
    },
    "discover": {
        "es": "Descubre Madrid de la mano de una guía experta",
        "en": "Discover Madrid with an expert guide"
    }


};

function translatePage(language) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[key] && translations[key][language]) {
            element.textContent = translations[key][language];
        }
    });
}

// Set default language to Spanish
translatePage('es');

document.getElementById("lang-es").addEventListener("click", function () {
    translatePage('es');
});

document.getElementById("lang-en").addEventListener("click", function () {
    translatePage('en');
});

// Navbar sticky on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('opacity-100', 'translate-y-0');
    } else {
        navbar.classList.remove('opacity-100', 'translate-y-0');
    }
});

// Mobile menu toggle
document.getElementById('menu-btn').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.toggle('max-h-96');
    document.getElementById('mobile-menu').classList.toggle('max-h-0');
});