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
        description: "Bessere Infrastruktur für Forchheims Sportler",
        expertise: "Spieler, Jugendtrainer & Schiedsrichter für den 1. FC Burk",
        points: [
            "Modernisierung der Sportinsel",
            "Sanierung und Pflege von Bolzplätzen und Basketballfeldern",
            "Neue Outdoor Calisthenics-Anlagen für Fitness und Training",
            "Erhöhung der Hallenkapazitäten für Vereinstraining",
            "Erhalt und Sanierung des Königsbads"
        ]
    },
    {
        id: "kultur-jugend",
        title: "KULTUR & JUGEND",
        icon: "🎭",
        description: "Mehr Attraktive Veranstaltungen und Treffpunkte für junge Menschen",
        expertise: "1. Vorsitzender & Kassenwart Kulturverein STOW301 e.V., Organisation Jugendfestival FOstival, Partyreihe VERTIGO Nights und Newcomerevent Fachwerkfestival",
        points: [
            "Mehr Feiermöglichkeiten für Jugend und junge Erwachsene",
            "Ausbau des Festplatzes Burk für Events und Veranstaltungen",
            "Proberäume für Musikvereine und lokale Künstler",
            "Unterstützung von Veranstaltungen für Jugendliche und junge Erwachsene"
        ]
    },
    {
        id: "digitalisierung",
        title: "DIGITALISIERUNG",
        icon: "💻",
        description: "Moderne Technologie für eine zukunftsfähige Stadt",
        expertise: "Studium Wirtschaftsinformatik (M.Sc.), Wissenschaftlicher Mitarbeiter / Forscher Künstliche Intelligenz (KI) in Wirtschaft und Gesellschaft",
        points: [
            "Mehr digitale Bürgerdienste und Online-Verwaltung",
            "Entschlackung und Digitalisierung der Stadtverwaltung",
            "Potential von KI und Automatisierung für städtische Leistungen untersuchen",
        ]
    },
    {
        id: "wirtschaft",
        title: "WIRTSCHAFT & JOBS",
        icon: "💼",
        description: "Starke Wirtschaft und sichere Arbeitsplätze in Forchheim",
        expertise: "Studierter Wirtschaftswissenschaftler (B.A.) + 4 Jahre Praxiserfahrung in Industriekonzern",
        points: [
            "Start-Up Inkubator und Co-Working Spaces",
            "Hackathons und Innovationsprojekte fördern",
            "Investitionsfreundliche Kommunalpolitik",
            "Realisierung von Azubi- und Studentenwohnheimen"
        ]
    },
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
            ${topic.expertise ? `
            <div class="expertise-box">
                <div class="expertise-label">💡 MEINE KOMPETENZ</div>
                <p class="expertise-text">${topic.expertise}</p>
            </div>
            ` : ''}
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
 * Scroll-Position speichern und wiederherstellen
 */
function setupScrollBehavior() {
    // Beim Laden: Scroll zu Top
    window.addEventListener('load', () => {
        window.scrollTo(0, 0);
    });
    
    // Bei Link-Klicks: Scroll zu Top
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            // Nur externe Links oder neue Seiten
            if (this.hostname !== window.location.hostname || 
                this.pathname !== window.location.pathname) {
                // Scroll wird nach dem Laden der neuen Seite ausgeführt
                setTimeout(() => {
                    window.scrollTo(0, 0);
                }, 50);
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
    // Scroll zu Top
    window.scrollTo(0, 0);
    
    // Themen rendern
    renderTopics();
    
    // Navigation aktualisieren
    setActiveNavLink();
    
    // Smooth Scroll
    setupSmoothScroll();
    
    // Scroll Behavior
    setupScrollBehavior();
    
    // Intersection Observer
    setupIntersectionObserver();
    
    // Mobile Menu
    setupMobileMenu();
    
    console.log('✓ Website initialisiert');
});
