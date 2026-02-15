# Timo Mayer - Wahlkampf Website

Moderne Website für die Stadtratswahl in Forchheim 2026 mit Dynamischem Brutalism Design.

## 🚀 Lokales Setup

### Voraussetzungen
- Node.js 22+
- pnpm

### Installation & Entwicklung

```bash
# Dependencies installieren
pnpm install

# Entwicklungsserver starten
pnpm run dev
```

Die Website läuft dann auf `http://localhost:5173`

## 🏗️ Bauen für Production

```bash
# Website bauen
pnpm run build

# Gebaut Dateien sind im `dist/` Ordner
```

## 📤 Deployment auf GitHub Pages

### Automatisches Deployment (Empfohlen)

1. **Bauen Sie lokal:**
   ```bash
   pnpm install
   pnpm run build
   ```

2. **Pushen Sie den `dist/` Ordner zu GitHub:**
   ```bash
   # Option A: Nur dist/ pushen
   git add dist/
   git commit -m "Build website"
   git push
   ```

3. **GitHub Pages konfigurieren:**
   - Gehen Sie zu Repository Settings → Pages
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/dist`
   - Save

### Manuelle Deployment

Sie können auch den `dist/` Ordner manuell auf jeden Webserver hochladen.

## 📝 Anpassungen

### Porträtfoto hinzufügen
Ersetzen Sie in `client/src/pages/Home.tsx` (Zeile ~85) den Platzhalter mit Ihrem Foto:

```tsx
backgroundImage: "url('YOUR_IMAGE_URL')"
```

### Social Media Links
Aktualisieren Sie die Links in `Home.tsx` und `Topics.tsx`:
- Instagram
- Twitter
- TikTok
- GitHub
- E-Mail

## 🎨 Design

Das Design folgt dem **Dynamischen Brutalism**-Stil:
- Farben: #5d4f9c (Violett), #ffc157 (Gold), Weiß, Schwarz
- Typografie: Bebas Neue (Headlines), IBM Plex Sans (Body)
- Diagonale Schnitte und energetische Animationen

## 📁 Struktur

```
client/
  src/
    pages/
      Home.tsx        # Startseite
      Topics.tsx      # Themen-Seite
    components/       # Wiederverwendbare Komponenten
    index.css         # Globale Styles
  index.html          # HTML Template
dist/                 # Gebaut Dateien (für GitHub Pages)
```

## 🔧 Weitere Befehle

```bash
# Type-Checking
pnpm run check

# Code formatieren
pnpm run format

# Preview der gebauten Website
pnpm run preview
```

## 📞 Kontakt

Für Fragen oder Änderungen: contact@timomayer.de

---

**Wahlkampf Forchheim 2026 • Junge Liste**
