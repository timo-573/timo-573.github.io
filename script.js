/**
 * Timo Mayer Wahlkampf Website
 * Statische Website mit HTML, CSS und JavaScript
 */

// ========================================
// THEMEN DATEN
// ========================================

const topics = [
    {
        id: "sport",
        title: "SPORT",
        icon: "⚽",
        description: "Bessere Infrastruktur und mehr Unterstützung für Forchheims Sportler",
        points: [
            "Sanierung und Modernisierung der Sportinsel",
            "Ausbau von Bolzplätzen und Basketballfeldern",
            "Neue Calisthenics-Anlagen für Fitness und Training",
            "Erhöhung der Hallenkapazitäten für Vereinstraining",
            "Erhalt und Sanierung des Königsbads",
            "Bessere Unterstützung für Sportvereine wie den 1. FC Burk"
        ]
    },
    {
        id: "kultur-jugend",
        title: "KULTUR & JUGEND",
        icon: "🎭",
        description: "Mehr Raum für kreative Entfaltung und Jugendbeteiligung",
        points: [
            "Mehr Feiermöglichkeiten für Jugend und junge Erwachsene",
            "Ausbau des Festplatzes Burk für Events und Veranstaltungen",
            "Proberäume für Musikvereine und lokale Künstler",
            "Unterstützung für Veranstaltungen wie FOstival und VERTIGO Nights",
            "Mehr Raum für Newcomer und lokale Künstler",
            "Kulturelle Vielfalt und Integration fördern"
        ]
    },
    {
        id: "digitalisierung",
        title: "DIGITALISIERUNG",
        icon: "💻",
        description: "Moderne Technologie für eine zukunftsfähige Stadt",
        points: [
            "Mehr digitale Bürgerdienste und Online-Verwaltung",
            "Entschlackung und Digitalisierung der Stadtverwaltung",
            "Kostenfreies öffentliches WLAN in der gesamten Stadt",
            "Smart-City-Projekte für effizientere Stadtentwicklung",
            "Künstliche Intelligenz für bessere Bürgerdienste nutzen",
            "Digitale Kompetenzen für alle Altersgruppen fördern"
        ]
    },
    {
        id: "wirtschaft",
        title: "WIRTSCHAFT & JOBS",
        icon: "💼",
        description: "Starke Wirtschaft und gute Arbeitsplätze in Forchheim",
        points: [
            "Start-Up Inkubator und Co-Working Spaces",
            "Hackathons und Innovationsprojekte fördern",
            "Investitionsfreundliche Kommunalpolitik",
            "Senkung des Gewerbesteuerhebesatzes",
            "Erweiterung der Gewerbegebiete",
            "Realisierung von Azubi- und Studentenwohnheimen"
        ]
    },
    {
        id: "nachhaltigkeit",
        title: "NACHHALTIGKEIT",
        icon: "🌱",
        description: "Grüne Zukunft für Forchheim – Klimaschutz und Umweltbewusstsein",
        points: [
            "Ausbau von Rad- und Fußwegen",
            "Mehr Grünflächen und Urban Gardening",
            "Erneuerbare Energien für städtische Gebäude",
            "Nachhaltige Beschaffung in der Stadtverwaltung",
            "Umweltbildung in Schulen und Kitas",
            "Förderung von Elektromobilität und ÖPNV"
        ]
    },
    {
        id: "jugend",
        title: "JUGEND & BETEILIGUNG",
        icon: "🚀",
        description: "Mehr Mitsprache für junge Menschen in Forchheim",
        points: [
            "Jugendrat mit echten Mitspracherechten",
            "Mehr Freizeitangebote und Treffpunkte für Jugendliche",
            "Bezahlbarer Wohnraum für junge Menschen",
            "Unterstützung für Startups und junge Unternehmer",
            "Mentorship-Programme und Karriere-Workshops",
            "Bessere Chancen für alle Kinder und Jugendlichen"
        ]
    }
];

// ========================================
// FUNKTIONEN
// ========================================

/**
 * Rendert die Themen auf der Themen-Seite
 */
function renderTopics() {
    const container = document.getElementById('topicsContainer');
    
    if (!container) return; // Nicht auf der Themen-Seite
    
    container.innerHTML = topics.map((topic, index) => `
        <div class="detailed-topic-card fade-in" style="animation-delay: ${index * 100}ms">
            <div class="detailed-topic-header">
                <div class="detailed-topic-icon">${topic.icon}</div>
                <div>
                    <h2 class="detailed-topic-title">${topic.title}</h2>
                    <p class="detailed-topic-description">${topic.description}</p>
                </div>
            </div>
            <div class="topic-divider"></div>
            <ul class="topic-points">
                ${topic.points.map(point => `<li>${point}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

/**
 * Setzt die aktive Navigation basierend auf der aktuellen Seite
 */
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * Smooth Scroll für interne Links
 */
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

/**
 * Intersection Observer für Animations-Trigger
 */
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in, .slide-in-right').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Mobile Menu Toggle (optional für zukünftige Erweiterungen)
 */
function setupMobileMenu() {
    // Placeholder für zukünftige Mobile-Navigation
}

// ========================================
// INITIALISIERUNG
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Themen rendern
    renderTopics();
    
    // Navigation aktualisieren
    setActiveNavLink();
    
    // Smooth Scroll
    setupSmoothScroll();
    
    // Intersection Observer
    setupIntersectionObserver();
    
    // Mobile Menu
    setupMobileMenu();
    
    console.log('✓ Website initialisiert');
});

// ========================================
// UTILITY FUNKTIONEN
// ========================================

/**
 * Scroll-Position speichern und wiederherstellen
 */
window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('scrollPosition', window.scrollY);
});

window.addEventListener('load', () => {
    const scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition));
        sessionStorage.removeItem('scrollPosition');
    }
});
