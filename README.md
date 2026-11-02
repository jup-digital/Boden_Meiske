# Boden Meiske Website

## Struktur
- `index.html` – Inhalte und Seitenaufbau
- `css/site.css` – Layout, Animationen, Footer und responsive Anpassungen
- `js/site.js` – Footer-Navigation und Zurück-nach-oben-Button
- `assets/` – Fotos und Logos
- `_ds/`, `ds-base.js`, `support.js` – Claude-Design-System; nicht löschen

## Kleine Änderungen
- Texte und Telefonnummer: `index.html`
- Abstände, Farben, Boxen: `css/site.css`
- Interaktionen: `js/site.js`

Vercel veröffentlicht nach jedem Commit auf dem `main`-Branch automatisch.


## Vor Livegang ergänzen
- erledigt in v29 (Registerdaten und USt-IdNr. im Impressum)

## Version 10
- Header-CTA abgerundet
- Dünne Sektionstrenner entfernt
- Zitatbereich auf helle Brandfarbe umgestellt
- Materialkacheln mit neuen fotorealistischen Materialmotiven ergänzt
- Impressum und Datenschutz auf Bodenleger Bergisch Land UG vorbereitet (fehlende Registerdaten bleiben markiert)


## Version 14 – Design review build
- supplied full logo enlarged in header
- standalone white symbol beside the unchanged hero headline
- small hero proof line removed
- reference image corners aligned with rounded card system
- project photo upload control added to contact area
- map and private street address removed outside the legal notice
- oversized low-opacity brand symbols and lightweight scroll motion added to light sections

## v20 Detailkorrekturen
- erste dünne Trennlinie im Footer unter dem CTA entfernt
- Zitat im oberen Bild-/Zitatbereich dauerhaft sichtbar gemacht
- Hero-Symbol höher positioniert und leicht verkleinert, damit es beim ersten Laden vollständig sichtbar ist

Version v21 – Editorial Finish
- Leistungsbezeichnung bleibt „Leistungen“.
- Referenzen als erweiterbare Projektgalerie mit Hover-Informationen.
- Materialsektionen mit großen Nummern, Sticky-Text und stärkerer Scroll-Dramaturgie.
- Hero und Animationen verfeinert.
- Header und Footer von Impressum/Datenschutz an das Startseiten-Design angepasst.

## v25 – Launch-Basis
- Schrift Inter lokal (`assets/fonts/`), keine Verbindung mehr zu Google Fonts; Datenschutz Punkt 7 angepasst
- Referenzfotos als WebP (8 × ~1 MB → ~200 KB), Hero-/Footer-Symbol 1,6 MB PNG → 256 KB WebP
- Bilder mit width/height, lazy loading; Favicon, Apple-Touch-Icon, Social-Vorschau (`assets/og-image.jpg`)
- SEO: Meta-Description, Canonical, Open Graph, LocalBusiness-JSON-LD, `robots.txt`, `sitemap.xml`
- Barrierefreiheit: Skip-Link, sichtbarer Tastaturfokus, Datei-Upload per Tastatur, Menü schließt mit Esc
- Kontaktformular: Pflichtfelder, Datenschutz-Einwilligung, Spam-Honeypot, Statusmeldungen
- `vercel.json`: Sicherheits-Header und Caching für `assets/`

## Kontaktformular
Ohne Formulardienst öffnet „Anfrage senden“ das E-Mail-Programm des Besuchers (Bilder müssen dort neu angehängt werden).
Für echten Versand mit Bildern: Formulardienst buchen (z. B. Formspree), dessen URL in `index.html` bei `data-endpoint=""` eintragen
und Datenschutz Punkt 6 auf den Dienst umschreiben.

## Vor Livegang offen
- Impressum: Registergericht und Handelsregisternummer (UG ist eintragungspflichtig), ggf. USt-ID
- Domain prüfen: Canonical, OG-Tags, `robots.txt` und `sitemap.xml` gehen von `https://boden-meiske.de` aus
- Formulardienst entscheiden (siehe oben)

## v26 – Design-Review Desktop
- Referenzen neu sortiert: fertige Räume zuerst, Baustellenfotos hinten
- Hero: Zeile „Bodenleger · Wermelskirchen & Bergisches Land“ + Telefonlink neben dem Button
- Doppelte Nummerierung entfernt (Hero „01“, Hintergrundzahlen 04/05); Nummern nur noch bei Materialien
- Sektion „Ablauf“ mit Anker `#ablauf` in Haupt- und Footer-Navigation
- Nach-oben-Button wird im Footer weiß und überdeckt den Footer-Text nicht mehr
- Kleine/blasse Texte vergrößert bzw. kontrastreicher (Upload-Hinweis, Galerie-Untertitel, Galerie-Notiz)

## v27 – Leistungen & Ablauf
- Leistungen: schmalere Nummernspalte, auf Desktop erscheint beim Hover ein Foto (`assets/photos/services/`: echte Projektfotos Estrich/Untergrund + Verlegen-Motiv)
- Ablauf: Titel einzeilig („Klares Angebot“, „Saubere Arbeit“), Karten und Sektion kompakter

## v28 – Mobil-Check (375px)
- Referenzen: Überschrift linksbündig, doppelter Bildtitel auf dem Foto ausgeblendet
- Überschriften fließen auf dem Handy frei (Leerzeichen vor `<br>`, sonst „unterIhren“ / Überbreite)
- Ablauf-Karten ohne Leerraum zwischen Nummer und Titel
- Tippflächen ≥ 44 px: Telefonlink im Hero, FAQ-Fragen, Footer-Links
- Nach-oben-Button blendet sich aus, solange „Anfrage senden“ im Bild ist

## v29 – Kundenwünsche August 2026 (WhatsApp, siehe `05_Feedback_Kunde/2026-08_WhatsApp_Aenderungswuensche.md`)
- Materialien neu geordnet: Designbelag & Vinyl, Textile Böden, Treppenstufen & Podeste, Parkett, Unterbodenvorbereitung (Linoleum/Kork/Kautschuk entfernt)
- Leistungen, FAQ und Meta-Description: Teppichboden/textile Böden statt Linoleum, Kork, Kautschuk
- FAQ: Schönox-/40-Jahre-Text, Hinweis Eigenleistung beim Entfernen, neue Frage „Ich habe schon Fußboden gekauft“
- Galerie: 5 neue Kundenfotos (WhatsApp-Qualität, später gegen Originale tauschen)
- Impressum: Amtsgericht Köln, HRB 66716, USt-IdNr. ergänzt, Warnhinweis entfernt

## v30 – Breite Bildschirme
- Ab 1500 px Fensterbreite skalieren Schriften, Textbreiten, Abstände und Bilder proportional mit (Referenz 1440 px, `--u` in `css/site.css` und `legal.css`)
- Hero-Symbol zusätzlich auf Fensterhöhe begrenzt
- CSS-/JS-Links mit `?v=…`, damit Browser nicht die alte Datei aus dem Cache nehmen (bei CSS-Änderungen hochzählen)

## v31 – Design-Polish (Impeccable-Kritik, Nov 2026)
- Hero: Eyebrow ersetzt durch Faktenzeile „Lothar Meiske · über 40 Jahre Erfahrung · Wermelskirchen“
- Echte Kundenfotos statt Stock: Intro (Eichendiele), FAQ (Fischgrät), Material 01 (Designbelag)
- Doppelte Nummerierung entfernt (Galerie-Overlay, „0X —“ in Material-Labels)
- Mobil: schwebender „Anrufen“-Button statt „nach oben“ (blendet sich am Formular und Footer aus)
- Unruhige Effekte entfernt: Glanz-Sweep auf Buttons, Hover-Verschiebungen, Laufweiten-Hover, Schräglage der Ablauf-Karten; Hero-Text sofort sichtbar
- Leistungs-Thumbnails immer sichtbar (vorher nur bei Hover)
- Kontrast: Footer-Labels, Formular-Platzhalter; sichtbarer Fokusrahmen in Formularfeldern; Textauswahl/Cursor in Markenrot
- Eine Stimme („ich“): Platzhalter und Formular-Erfolgsmeldung
- Fix: Breitbild-Regel überschrieb das 4-spaltige Leistungs-Raster
