import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Github, Instagram, Mail, MessageCircle, Twitter } from "lucide-react";

/**
 * Design Philosophy: Dynamischer Brutalism
 * - Large, bold typography with Bebas Neue
 * - Diagonal cuts and asymmetric layouts
 * - High contrast: #5d4f9c (primary), #ffc157 (accent), white, black
 * - Energetic animations and hover effects
 * - No rounded corners, sharp geometric forms
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white border-b-4 border-black z-50">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-purple-700" style={{ backgroundColor: "#5d4f9c" }}></div>
            <span className="text-xl font-bold" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.1em" }}>
              TIMO MAYER
            </span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/" className="font-semibold hover:text-yellow-500" style={{ color: "#5d4f9c" }}>
              HOME
            </Link>
            <Link href="/themen" className="font-semibold hover:text-yellow-500" style={{ color: "#5d4f9c" }}>
              THEMEN
            </Link>
            <div className="flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-yellow-400 transition-colors">
                <Instagram size={20} color="#5d4f9c" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-yellow-400 transition-colors">
                <Twitter size={20} color="#5d4f9c" />
              </a>
              <a href="mailto:contact@timomayer.de" className="p-2 hover:bg-yellow-400 transition-colors">
                <Mail size={20} color="#5d4f9c" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Diagonal Cut */}
      <section className="pt-24 pb-32 relative overflow-hidden" style={{ backgroundColor: "#5d4f9c" }}>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "url('https://private-us-east-1.manuscdn.com/sessionFile/ZcCaeHDs5EnQ5Gcyv7TjE7/sandbox/AiIPgRw72VfkRuQ0sIC2uW-img-1_1771116133000_na1fn_aGVyby1iZy1wdXJwbGU.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWmNDYWVIRHM1RW5RNUdjeXY3VGpFNy9zYW5kYm94L0FpSVBnUnc3MlZma1J1UTBzSUMydVctaW1nLTFfMTc3MTExNjEzMzAwMF9uYTFmbl9hR1Z5YnkxaVp5MXdkWEp3YkdVLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=PX7gqZjJnp3MIak9UXmkAlBh2VIEO9pqL6OezeW8cqAfaAbVbDTqNCc7B2A3LeLfCX7LIfYMVnsJUgjOqwmesfV43WhlYdS53btBqYX6wATmggQL3Xlu71neFGw5c2KQhTCET7lskkZ-bhCFB-GHWHUjbLdv3KXtro6clk8tG~oGxj87TxKLNcDxkwguQbgsdyDvI9vdz~nGGBP4~LEFHXZJwfgezgGDUa6Fn0K17QutTFT-OseLO7JhhaDTkzzrlcR2g9xnyNjlfWbC1pvEdnbyBkc57byEJbruVVn~NLXkpeUvmgETZfGnamuGqd5ze2V0msBm9VQiQORMDaQzJg__')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}></div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="fade-in">
              <h1 className="text-6xl lg:text-7xl font-black text-white mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}>
                TIMO<br />MAYER
              </h1>
              <p className="text-xl text-white mb-4 font-light">
                Für eine junge, moderne und digitale Zukunft Forchheims
              </p>
              <p className="text-lg text-yellow-300 font-semibold mb-8" style={{ color: "#ffc157" }}>
                Stadtratswahl 08. März 2026 • Junge Liste
              </p>
              <div className="flex gap-4">
                <Link href="/themen">
                  <Button 
                    className="px-8 py-6 text-lg font-bold hover-scale"
                    style={{ backgroundColor: "#ffc157", color: "#1a1a1a" }}
                  >
                    MEINE THEMEN <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Button 
                  variant="outline"
                  className="px-8 py-6 text-lg font-bold border-4 border-white text-white hover:bg-white hover:text-purple-700 hover-scale"
                >
                  KONTAKT
                </Button>
              </div>
            </div>

            {/* Right: Portrait Placeholder */}
            <div className="slide-in-right">
              <div 
                className="aspect-square border-4 border-white flex items-center justify-center text-white text-center p-8"
                style={{
                  backgroundImage: "url('https://private-us-east-1.manuscdn.com/sessionFile/ZcCaeHDs5EnQ5Gcyv7TjE7/sandbox/AiIPgRw72VfkRuQ0sIC2uW-img-3_1771116133000_na1fn_cG9ydHJhaXQtYmctdGVjaA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWmNDYWVIRHM1RW5RNUdjeXY3VGpFNy9zYW5kYm94L0FpSVBnUnc3MlZma1J1UTBzSUMydVctaW1nLTNfMTc3MTExNjEzMzAwMF9uYTFmbl9jRzl5ZEhKaGFYUXRZbWN0ZEdWamFBLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=mSrtCgqY~uqRpNd6HhGCaBhzgAyXu-0waC39YXVFNpsdy0GgrvG9zzIQpXKSj94Er~Dc2bJK~7x05cAAj56DwLl~fiGGD2INOAFd1tRWmeteHRpmnoCIKjVSZ72TOSzKse~Y38qtrTugQiBWmmVLNlc4gVG63TSZ-kV4BYgPxyLtEp7OOoOcEaYYwGLkHpgnrL~tS7vECjB3FYJDG9E1X7rDWUSJ0aKCrSbzUslEIwbx9XVagKOeBQePDxUTxWbSVGQ7HAdn0MqgF10Jip5rLYysGoOjHp-oLks7Xc36mvasZNr2AOX2ECoN~JfuBFl8BPF76XUPaBuT1ujezCEe~Q__')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <span className="text-2xl font-bold">Ihr Porträt hier</span>
              </div>
            </div>
          </div>
        </div>

        {/* Diagonal Cut */}
        <div className="absolute bottom-0 left-0 right-0 h-24" style={{
          background: "white",
          clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)"
        }}></div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in">
              <h2 className="text-5xl font-black mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#5d4f9c", letterSpacing: "0.05em" }}>
                ÜBER MICH
              </h2>
              <div className="border-l-4 border-yellow-400 pl-6" style={{ borderLeftColor: "#ffc157" }}>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Ich bin Timo Mayer, 28 Jahre alt und Kandidat der Jungen Liste für die Stadtratswahl in Forchheim. Mit Leidenschaft für Digitalisierung, Nachhaltigkeit und Jugendbeteiligung möchte ich unsere Stadt zukunftsfähig gestalten.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Mein Fokus liegt auf modernen Lösungen für alte Probleme – von digitaler Infrastruktur bis hin zu mehr Mitsprache für junge Menschen in kommunalen Entscheidungen.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 slide-in-right">
              <div className="brutalist-border p-8 hover-scale" style={{ borderColor: "#5d4f9c" }}>
                <div className="text-4xl font-black mb-2" style={{ color: "#ffc157" }}>28</div>
                <div className="text-sm font-semibold text-gray-600">JAHRE ALT</div>
              </div>
              <div className="brutalist-border p-8 hover-scale" style={{ borderColor: "#5d4f9c" }}>
                <div className="text-4xl font-black mb-2" style={{ color: "#ffc157" }}>100%</div>
                <div className="text-sm font-semibold text-gray-600">ENGAGEMENT</div>
              </div>
              <div className="brutalist-border p-8 hover-scale" style={{ borderColor: "#5d4f9c" }}>
                <div className="text-4xl font-black mb-2" style={{ color: "#ffc157" }}>+10</div>
                <div className="text-sm font-semibold text-gray-600">PROJEKTE</div>
              </div>
              <div className="brutalist-border p-8 hover-scale" style={{ borderColor: "#5d4f9c" }}>
                <div className="text-4xl font-black mb-2" style={{ color: "#ffc157" }}>∞</div>
                <div className="text-sm font-semibold text-gray-600">IDEEN</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagonal Cut Accent */}
      <div className="h-20 diagonal-cut-bottom" style={{ backgroundColor: "#f5f5f5", marginBottom: "-5rem", paddingBottom: "8rem" }}></div>

      {/* Topics Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-5xl font-black mb-12 text-center" style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#5d4f9c", letterSpacing: "0.05em" }}>
            MEINE THEMEN
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { title: "DIGITALISIERUNG", icon: "💻", desc: "Moderne Infrastruktur für Forchheim" },
              { title: "NACHHALTIGKEIT", icon: "🌱", desc: "Grüne Zukunft für alle" },
              { title: "JUGEND", icon: "🚀", desc: "Mehr Mitsprache für junge Menschen" }
            ].map((topic, idx) => (
              <div 
                key={idx}
                className="brutalist-border p-8 hover-scale bg-white"
                style={{ borderColor: "#5d4f9c" }}
              >
                <div className="text-5xl mb-4">{topic.icon}</div>
                <h3 className="text-2xl font-black mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#5d4f9c", letterSpacing: "0.05em" }}>
                  {topic.title}
                </h3>
                <p className="text-gray-600">{topic.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/themen">
              <Button 
                className="px-8 py-6 text-lg font-bold hover-scale"
                style={{ backgroundColor: "#5d4f9c", color: "white" }}
              >
                ALLE THEMEN ENTDECKEN <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-white border-t-4 border-black">
        <div className="container text-center">
          <h2 className="text-4xl font-black mb-8" style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#5d4f9c", letterSpacing: "0.05em" }}>
            FOLGE MIR
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Bleib auf dem Laufenden über meine Kampagne und Ideen
          </p>
          
          <div className="flex justify-center gap-6 flex-wrap">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="brutalist-border p-6 hover-scale"
              style={{ borderColor: "#5d4f9c" }}
            >
              <Instagram size={32} color="#5d4f9c" />
              <p className="mt-2 font-semibold text-gray-700">Instagram</p>
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="brutalist-border p-6 hover-scale"
              style={{ borderColor: "#5d4f9c" }}
            >
              <Twitter size={32} color="#5d4f9c" />
              <p className="mt-2 font-semibold text-gray-700">Twitter</p>
            </a>
            <a 
              href="https://tiktok.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="brutalist-border p-6 hover-scale"
              style={{ borderColor: "#5d4f9c" }}
            >
              <MessageCircle size={32} color="#5d4f9c" />
              <p className="mt-2 font-semibold text-gray-700">TikTok</p>
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="brutalist-border p-6 hover-scale"
              style={{ borderColor: "#5d4f9c" }}
            >
              <Github size={32} color="#5d4f9c" />
              <p className="mt-2 font-semibold text-gray-700">GitHub</p>
            </a>
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
