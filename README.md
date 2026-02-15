# Timo Mayer - Wahlkampf Website

Moderne, statische Website für die Stadtratswahl in Forchheim 2026.

## 📁 Dateistruktur

```
timo-573.github.io/
├── index.html          # Startseite
├── themen.html         # Themen-Seite
├── styles.css          # Alle Styles (Dynamischer Brutalism Design)
├── script.js           # JavaScript für Interaktivität
└── README.md           # Diese Datei
```

## 🎨 Design-System

**Farben:**
- Primär: `#5d4f9c` (Violett)
- Akzent: `#ffc157` (Gold)
- Dark: `#1a1a1a` (Schwarz)
- Light: `#ffffff` (Weiß)

**Typografie:**
- Headlines: Bebas Neue (Google Fonts)
- Body: IBM Plex Sans (Google Fonts)

**Design-Philosophie:** Dynamischer Brutalism
- Große, kühne Typografie
- Diagonale Schnitte und asymmetrische Layouts
- Hohe Kontraste
- Energetische Animationen

## 📄 Seiten

### index.html (Startseite)
- Hero-Bereich mit Porträt-Platzhalter
- Über-mich Sektion mit Statistiken
- Themen-Vorschau (3 Themen)
- Social Media Links
- Footer

### themen.html (Themen-Seite)
- Alle 6 Wahlkampf-Themen
- Detaillierte Punkte für jedes Thema
- Call-to-Action für Kontakt
- Gleiche Navigation und Footer

## 🔧 Wie es funktioniert

### HTML
- Semantisches HTML5
- Keine Frameworks, keine Dependencies
- Einfache, verständliche Struktur

### CSS
- Reines CSS (keine Präprozessoren)
- CSS Variables für Farben und Spacing
- Responsive Design (Mobile First)
- Animationen mit `@keyframes`

### JavaScript
- Vanilla JavaScript (keine Libraries)
- Themen-Daten in `script.js`
- Dynamisches Rendern der Themen-Seite
- Intersection Observer für Animationen

## 🎯 Anpassungen

### 1. Porträtfoto hinzufügen

Ersetzen Sie in `index.html` (Zeile ~82) den Platzhalter:

```html
<!-- Vorher: -->
<div class="portrait-placeholder">Ihr Porträt hier</div>

<!-- Nachher: -->
<img src="your-photo.jpg" alt="Timo Mayer" style="width: 100%; height: 100%; object-fit: cover;">
```

### 2. Social Media Links aktualisieren

In `index.html` und `themen.html` die Links ersetzen:

```html
<!-- Instagram -->
<a href="https://instagram.com/YOUR_USERNAME" target="_blank">

<!-- Twitter -->
<a href="https://twitter.com/YOUR_USERNAME" target="_blank">

<!-- TikTok -->
<a href="https://tiktok.com/@YOUR_USERNAME" target="_blank">

<!-- GitHub -->
<a href="https://github.com/YOUR_USERNAME" target="_blank">
```

### 3. Kontakt-E-Mail ändern

Alle `mailto:contact@timomayer.de` Links ersetzen mit Ihrer E-Mail.

### 4. Neue Themen hinzufügen

In `script.js` im `topics` Array ein neues Thema hinzufügen:

```javascript
{
    id: "neues-thema",
    title: "NEUES THEMA",
    icon: "🎯",
    description: "Beschreibung des Themas",
    points: [
        "Punkt 1",
        "Punkt 2",
        "Punkt 3"
    ]
}
```

## 🚀 Deployment auf GitHub Pages

### Schritt 1: Code pushen
```bash
git add .
git commit -m "Update website"
git push origin main
```

### Schritt 2: GitHub Pages aktivieren
1. Gehen Sie zu: **Repository → Settings → Pages**
2. Wählen Sie:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main`
   - **Folder:** `/ (root)`
3. Klicken Sie **Save**

Die Website wird dann unter `https://timo-573.github.io` veröffentlicht! 🎉

## 📱 Responsive Design

Die Website ist vollständig responsive:
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## ⚡ Performance

- Keine externen Dependencies (außer Google Fonts)
- Schnelle Ladezeiten
- Optimiert für SEO
- Barrierefreiheit beachtet

## 🔒 Browser-Kompatibilität

Funktioniert in allen modernen Browsern:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## 📞 Support

Fragen zur Website? Kontaktieren Sie: contact@timomayer.de

---

**Wahlkampf Forchheim 2026 • Junge Liste**
