# 📖 Anleitung: Website anpassen

Diese Anleitung zeigt dir, wie du deine Website ganz einfach anpasst.

## 1. 📷 Porträtfoto hinzufügen

### Schritt 1: Foto hochladen
1. Gehe zu deinem GitHub Repository: `https://github.com/timo-573/timo-573.github.io`
2. Klicke auf **"Add file"** → **"Upload files"**
3. Lade dein Porträtfoto hoch und nenne es: **`portrait.jpg`**
4. Klicke **"Commit changes"**

### Schritt 2: Fertig!
Die Website zeigt automatisch dein Foto im Hero-Bereich. Das ist alles! 🎉

**Tipps:**
- Verwende ein Hochformat-Foto (z.B. 600x800 Pixel)
- JPG oder PNG Format funktionieren
- Das Foto wird automatisch zugeschnitten

---

## 2. 📧 E-Mail und Links anpassen

Die Website ist bereits mit deinen Daten konfiguriert:
- ✅ E-Mail: `timomayer.jungelistefo@gmail.com`
- ✅ Instagram: `@timomayer.jl_fo` und `@jungelisteforchheim`
- ✅ Alle Links sind bereits richtig gesetzt

**Falls du etwas ändern möchtest:**

### E-Mail ändern
1. Öffne die Dateien: `index.html`, `themen.html`, `impressum.html`, `datenschutz.html`
2. Suche nach: `timomayer.jungelistefo@gmail.com`
3. Ersetze mit deiner E-Mail
4. Speichern und pushen

### Instagram Links ändern
1. Öffne `index.html`
2. Suche nach: `https://instagram.com/timomayer.jl_fo`
3. Ersetze mit deinem Link
4. Speichern und pushen

---

## 3. 📝 Impressum und Datenschutz ausfüllen

Die Seiten sind bereits vorhanden, aber du musst noch deine Daten eintragen:

### Impressum anpassen
1. Öffne `impressum.html`
2. Fülle folgende Felder aus:
   - `[Ihre Adresse]` → Deine Adresse
   - `[Ihre PLZ und Stadt]` → z.B. 91301 Forchheim
   - `[Ihre Telefonnummer]` → Deine Telefonnummer
3. Speichern und pushen

### Datenschutz anpassen
Die Datenschutzerklärung ist bereits komplett und braucht keine Änderungen. Falls nötig, kannst du sie in `datenschutz.html` anpassen.

---

## 4. 🎨 Inhalte bearbeiten

### Themen ändern
Die Themen sind in `script.js` gespeichert:

```javascript
const topics = [
    {
        id: "sport",
        title: "SPORT",
        icon: "⚽",
        description: "Bessere Infrastruktur...",
        points: [
            "Punkt 1",
            "Punkt 2",
            // ...
        ]
    },
    // Weitere Themen...
];
```

Um ein Thema zu ändern:
1. Öffne `script.js`
2. Suche das Thema (z.B. `id: "sport"`)
3. Ändere `title`, `description` oder `points`
4. Speichern und pushen

### Text auf der Startseite ändern
1. Öffne `index.html`
2. Suche den Text, den du ändern möchtest
3. Ändere ihn
4. Speichern und pushen

---

## 5. 🚀 Änderungen hochladen

### Option A: Über GitHub Web-Interface (einfach)
1. Öffne die Datei auf GitHub
2. Klicke auf den **Stift-Icon** (Edit)
3. Mache deine Änderungen
4. Klicke **"Commit changes"**

### Option B: Lokal am Computer (fortgeschritten)
```bash
# Repository klonen
git clone https://github.com/timo-573/timo-573.github.io.git
cd timo-573.github.io

# Dateien bearbeiten
# ...

# Änderungen hochladen
git add .
git commit -m "Update website"
git push origin main
```

---

## 6. 🔍 Website testen

Nach jeder Änderung:
1. Gehe zu: `https://timo-573.github.io`
2. Aktualisiere die Seite (Strg+F5 oder Cmd+Shift+R)
3. Überprüfe, ob alles richtig aussieht

**Hinweis:** Es kann 1-2 Minuten dauern, bis GitHub Pages die Änderungen anzeigt.

---

## 7. 📁 Dateistruktur

```
timo-573.github.io/
├── index.html           # Startseite
├── themen.html          # Themen-Seite
├── impressum.html       # Impressum
├── datenschutz.html     # Datenschutzerklärung
├── styles.css           # Alle Styles
├── script.js            # Themen-Daten und JavaScript
├── portrait.jpg         # Dein Porträtfoto (hochladen!)
└── README.md            # Diese Datei
```

---

## 8. ❓ Häufige Fragen

**F: Wie lange dauert es, bis Änderungen sichtbar sind?**
A: Normalerweise 1-2 Minuten. Manchmal auch sofort.

**F: Mein Foto wird nicht angezeigt?**
A: Stelle sicher, dass die Datei `portrait.jpg` heißt und im Root-Verzeichnis ist.

**F: Ich habe einen Fehler gemacht, wie kann ich das rückgängig machen?**
A: Auf GitHub kannst du frühere Versionen anschauen und wiederherstellen.

**F: Kann ich die Website lokal testen?**
A: Ja! Öffne einfach `index.html` im Browser.

---

## 9. 💡 Tipps & Tricks

- **Emojis verwenden:** Du kannst überall Emojis einfügen (z.B. in Themen-Icons)
- **Farben anpassen:** In `styles.css` kannst du die Farben ändern (`:root` Bereich)
- **Neue Seiten hinzufügen:** Kopiere `index.html` und passe es an
- **Bilder optimieren:** Nutze Online-Tools wie TinyPNG zum Komprimieren

---

## 10. 🆘 Support

Falls du Fragen hast oder etwas nicht funktioniert:
- Schreib eine E-Mail an: timomayer.jungelistefo@gmail.com
- Schau dir die Datei-Struktur an
- Überprüfe die Browser-Konsole (F12) auf Fehler

---

**Viel Erfolg bei deinem Wahlkampf! 🚀**

Zuletzt aktualisiert: Februar 2026
