import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle } from "lucide-react";

/**
 * Design Philosophy: Dynamischer Brutalism
 * - Large, bold typography with Bebas Neue
 * - Diagonal cuts and asymmetric layouts
 * - High contrast: #5d4f9c (primary), #ffc157 (accent), white, black
 * - Energetic animations and hover effects
 */

const topics = [
  {
    id: "digitalisierung",
    title: "DIGITALISIERUNG",
    icon: "💻",
    color: "#5d4f9c",
    description: "Forchheim braucht eine moderne digitale Infrastruktur für die Zukunft",
    points: [
      "Kostenfreies öffentliches WLAN in der gesamten Stadt",
      "Digitale Verwaltung: Online-Anträge und E-Services",
      "Smart-City-Projekte für effizientere Stadtentwicklung",
      "Digitale Kompetenzen für alle Altersgruppen fördern",
      "Cybersecurity und Datenschutz als Priorität"
    ]
  },
  {
    id: "nachhaltigkeit",
    title: "NACHHALTIGKEIT",
    icon: "🌱",
    color: "#ffc157",
    description: "Grüne Zukunft für Forchheim – Klimaschutz und Umweltbewusstsein",
    points: [
      "Ausbau von Rad- und Fußwegen",
      "Mehr Grünflächen und Urban Gardening",
      "Erneuerbare Energien für städtische Gebäude",
      "Nachhaltige Beschaffung in der Stadtverwaltung",
      "Umweltbildung in Schulen und Kitas"
    ]
  },
  {
    id: "jugend",
    title: "JUGEND & BETEILIGUNG",
    icon: "🚀",
    color: "#5d4f9c",
    description: "Mehr Mitsprache für junge Menschen in Forchheim",
    points: [
      "Jugendrat mit echten Mitspracherechten",
      "Mehr Freizeitangebote und Treffpunkte für Jugendliche",
      "Bezahlbarer Wohnraum für junge Menschen",
      "Unterstützung für Startups und junge Unternehmer",
      "Mentorship-Programme und Karriere-Workshops"
    ]
  },
  {
    id: "bildung",
    title: "BILDUNG & ZUKUNFT",
    icon: "📚",
    color: "#ffc157",
    description: "Beste Chancen für alle Kinder und Jugendlichen",
    points: [
      "Moderne Schulausstattung und digitale Lernmittel",
      "Mehr Lehrkräfte und kleinere Klassen",
      "Berufsorienterung und Praktikumsmöglichkeiten",
      "Sprachförderung und Inklusion",
      "Kostenlose Schulmahlzeiten für alle"
    ]
  },
  {
    id: "wirtschaft",
    title: "WIRTSCHAFT & JOBS",
    icon: "💼",
    color: "#5d4f9c",
    description: "Starke Wirtschaft und gute Arbeitsplätze in Forchheim",
    points: [
      "Unterstützung für lokale Unternehmen und Handwerk",
      "Gründerzentrum für innovative Startups",
      "Fachkräfteentwicklung und Umschulung",
      "Attraktive Arbeitsbedingungen und faire Löhne",
      "Zusammenarbeit mit regionalen Partnern"
    ]
  },
  {
    id: "kultur",
    title: "KULTUR & GESELLSCHAFT",
    icon: "🎭",
    color: "#ffc157",
    description: "Lebendige Kultur und starker Zusammenhalt in Forchheim",
    points: [
      "Unterstützung für Künstler und Kulturschaffende",
      "Regelmäßige Veranstaltungen und Festivals",
      "Kulturelle Vielfalt und Integration fördern",
      "Historisches Erbe bewahren und modernisieren",
      "Bürgerbeteiligung bei Kulturprojekten"
    ]
  }
];

export default function Topics() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white border-b-4 border-black z-50">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2 hover:opacity-70">
            <div className="w-10 h-10 bg-purple-700" style={{ backgroundColor: "#5d4f9c" }}></div>
            <span className="text-xl font-bold" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.1em" }}>
              TIMO MAYER
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="font-semibold hover:text-yellow-500" style={{ color: "#5d4f9c" }}>
              HOME
            </Link>
            <Link href="/themen" className="font-semibold border-b-4 border-yellow-400" style={{ color: "#5d4f9c", borderBottomColor: "#ffc157" }}>
              THEMEN
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-white">
        <div className="container">
          <Link href="/" className="inline-flex items-center gap-2 mb-8 hover:text-yellow-500 transition-colors" style={{ color: "#5d4f9c" }}>
            <ArrowLeft size={20} />
            <span className="font-semibold">Zurück zur Startseite</span>
          </Link>
          
          <h1 className="text-6xl lg:text-7xl font-black mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#5d4f9c", letterSpacing: "0.05em" }}>
            MEINE THEMEN
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Das sind die Themen, die mir am Herzen liegen und für die ich mich als Stadtrat einsetzen werde. Jedes Thema hat konkrete Ziele und Maßnahmen.
          </p>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {topics.map((topic, idx) => (
              <div 
                key={topic.id}
                className={`fade-in ${idx % 2 === 1 ? 'lg:translate-y-12' : ''}`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div 
                  className="brutalist-border p-8 h-full hover-scale"
                  style={{ borderColor: topic.color }}
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-5xl">{topic.icon}</div>
                    <div className="flex-1">
                      <h2 
                        className="text-3xl font-black mb-2" 
                        style={{ fontFamily: "'Bebas Neue', sans-serif", color: topic.color, letterSpacing: "0.05em" }}
                      >
                        {topic.title}
                      </h2>
                      <p className="text-gray-600 font-medium">{topic.description}</p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-1 mb-6" style={{ backgroundColor: topic.color }}></div>

                  {/* Points */}
                  <ul className="space-y-3">
                    {topic.points.map((point, pidx) => (
                      <li key={pidx} className="flex items-start gap-3">
                        <CheckCircle size={20} color={topic.color} className="mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gray-50 border-t-4 border-black">
        <div className="container text-center">
          <h2 className="text-5xl font-black mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#5d4f9c", letterSpacing: "0.05em" }}>
            HAST DU FRAGEN?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Kontaktiere mich direkt, wenn du mehr über meine Positionen erfahren möchtest oder Vorschläge hast.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:contact@timomayer.de">
              <Button 
                className="px-8 py-6 text-lg font-bold hover-scale w-full sm:w-auto"
                style={{ backgroundColor: "#5d4f9c", color: "white" }}
              >
                E-MAIL SCHREIBEN
              </Button>
            </a>
            <Link href="/">
              <Button 
                variant="outline"
                className="px-8 py-6 text-lg font-bold border-4 hover-scale w-full sm:w-auto"
                style={{ borderColor: "#5d4f9c", color: "#5d4f9c" }}
              >
                ZURÜCK ZUR STARTSEITE
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t-4" style={{ borderTopColor: "#ffc157" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-black mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}>
                TIMO MAYER
              </h3>
              <p className="text-gray-400">Kandidat der Jungen Liste für die Stadtratswahl Forchheim 2026</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">NAVIGATION</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/themen">Themen</Link></li>
                <li><a href="mailto:contact@timomayer.de">Kontakt</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">KONTAKT</h4>
              <p className="text-gray-400 mb-2">📧 contact@timomayer.de</p>
              <p className="text-gray-400">📍 Forchheim, Bayern</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Timo Mayer. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
