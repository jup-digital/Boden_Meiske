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

## v32 – Kundenwünsche November 2026 (siehe `05_Feedback_Kunde/2026-11_WhatsApp_Aenderungswuensche.md`)
- Ablauf 01 „Anfrage senden“ statt „Anfrage & Fotos“ (keine Raumgröße, keine Bilder)
- Formular: nur noch „Ort“ statt „Ort & Fläche“, Bild-Upload entfernt; Kontakttext und Datenschutz angepasst

## v33 – Neue Kundenfotos vom NAS (Nov 2026)
- Referenzen: komplett ersetzt durch 13 Fotos von Patricks NAS (`assets/photos/gallery/ref_nas01–13.webp`, Quelle `Assets/Bilder/Bilder Kunde/NAS_Patrick_2026-11/`)
- Intro: Flur mit Bogenfenster; Parkett: heller Fischgrät mit Sessel (`assets/photos/real/`); FAQ-Fischgrät durch bearbeitete Version ersetzt
- Alte Referenzfotos und ungenutzte Bilder aus dem Repo entfernt (Originale liegen weiter in `Assets/Bilder/`)

## v34 – Motion-Pass & Feinschliff (Branch `redesign-motion`, Impeccable-Kritik Nov 2026)
- Signatur: „Schichtaufbau“ im Intro (Estrich → Spachtelmasse → Belag baut sich einmal von unten auf)
- Hero-Symbol: einmaliges Einschwingen statt Endlos-Schweben; Scroll-Parallaxe funktioniert wieder (vorher von CSS-Animation überschrieben), Maus-Neigung entfernt
- Roter Vorhang nur noch am Intro-Bild; Material- und FAQ-Bilder schwingen ruhig ein
- Einblendungen 0,6 s statt bis 1,45 s, Staffel nur innerhalb einer Gruppe; ohne JavaScript bleibt alles sichtbar (`html.js`)
- Hover nur noch auf Klickbarem (Ablauf-Karten, Galerie-Lift, Material-Überschrift entfernt)
- Navigation in Seitenreihenfolge, aktueller Abschnitt rot unterstrichen
- Galerie: Zähler „01 / 13“ mit Fortschrittsbalken, Pfeile am Anfang/Ende deaktiviert
- FAQ klappt weich auf (`::details-content`, ältere Browser springen wie bisher)
- Material-Links füllen das Nachrichtenfeld vor („Anfrage zu: Parkett“)
- Formular: Zeile „Ich melde mich in der Regel innerhalb von 1–2 Werktagen.“ (Platzhalter, mit Lothar abstimmen)
- Datenschutz: Überschrift bricht auf Mobil um (vorher 589 px breit), Kontrast im Hinweiskasten

## v35 – Hero mit Foto (Branch `hero-foto`)
- 3D-Symbol im Hero ersetzt durch Foto „Sonnenlicht auf Holzdielen“ von Franco Debartolo, Unsplash (https://unsplash.com/de/fotos/sonnenlicht-auf-holzdielen-Q9ttGXgFYFk, Unsplash-Lizenz, keine Nennung nötig). Original: `Assets/Bilder/Unsplash/unsplash-Q9ttGXgFYFk-sonnenlicht-holzdielen.jpg`
- Foto läuft bis zum rechten Rand, öffnet sich beim Laden einmal von unten, leichte Scroll-Parallaxe; auf Mobil unter dem Text
- WebP in 1100 und 2000 px (`srcset`), Symbol bleibt im Footer

## v36 – Premium-Refinement (Branch `premium-refinement`, Nov 2026)
- Positionierung: Hero-Headline „Ein guter Boden beginnt darunter.“, Markenclaim „Qualität, die bleibt.“ bleibt als Schlusssatz im Footer; Faktenzeile „Lothar Meiske · über 40 Jahre Erfahrung · Wermelskirchen & Bergisches Land“
- Title/Meta/OG auf lokale Suche ausgerichtet (Bodenleger Wermelskirchen, Estrich, Untergrund, Beläge); JSON-LD um Leistungen, Beläge und Einsatzgebiet erweitert; Hero-Bild per `preload`
- Referenzen: kuratiertes Mosaik (große/kleine Bilder im Wechsel) statt Slider, erst 5 Bilder, „Alle 13 Referenzen ansehen“, Lightbox mit Pfeiltasten/Esc
- Leistungen: Hinweis „Auch einzeln möglich“ (nur Untergrund / eigenes Material verlegen)
- Materialien: kompakte Zwei-Spalten-Liste statt fünf Vollbild-Abschnitte, Überschriften jetzt h3; Unterbodenvorbereitung hervorgehoben
- Kontakt: Block „Lothar Meiske – Ihr Ansprechpartner“
- Seite ca. 22 % kürzer (Desktop 13.070 → 10.150 px)

## v40 – Finales Logo & Farbpalette (Branch `brand-final`, Nov 2026)
- Logo: finales Holz-M mit Wortmarke, vektorisiert (potrace). Varianten in `01_Brand/01_Logo/Final_2026-11/svg/` (Symbol, horizontal, horizontal mit Claim, gestapelt, gestapelt „Seit 1985“, Wortmarke, Wortmarke mit Claim – je Shadow/Red/Bone/Weiß), Übersicht `logo-varianten.html`, Bauskripte `trace_parts.py`, `build_variants.py`
- Website: Header-Logo `assets/logos/logo-horizontal.svg`, Footer-Symbol `symbol-white.svg`, Favicon SVG + PNG, Apple-Touch-Icon, neues OG-Bild
- Palette: Old Red #AB3620 (Akzent, Buttons, Footer) · Soft Bone #D8DAD8 (Seitengrund) · Shadow #181A18 (Text, Ablauf-Block); Fließtext #4A4C4A (6,2:1 auf Bone)

## v50 – Understorey-Prinzipien (Branch `understorey`, Nov 2026)
Gestaltungsprinzipien des Framer-Templates „Understorey“ übertragen (kein Code, keine Texte/Bilder des Templates; Template ist kostenpflichtig, Single-Use-Lizenz):
- Hero: Vollbild-Kundenfoto (Fischgrätparkett), Headline „Qualität, | die bleibt.“ links/rechts geteilt, Meta-Zeile mit Haarlinie; Header hell über dem Hero, dunkel nach dem Scrollen
- Schrift Figtree (OFL, lokal), leichte Schnitte; kleinere Radien
- Sektionslabels als nummerierte Pillen (CSS-Counter)
- Intro: Lothars Satz groß mit eingebetteten Bild-Pillen, Bogenfenster-Foto, Lead, Faktentabelle (nur bestehende Fakten)
- Vollton-Sektionen: Referenzen Shadow, Ablauf Old Red, Footer Shadow
- Schichtaufbau-Grafik entfernt

## v61 – Template-Typo, neue Palette hell (Branch `template-farben`, Nov 2026)
- Typo-Skala nach „Understorey“: Figtree 300, Headlines 63–78 px mit −2 % Laufweite, Labels 12 px Versalien 0,22 em, Creme-/Schwarz-Pillen, Bilder 12 px Radius
- Palette: Off-White #FAFAFA (Hauptfarbe), Grey Sand #E6E1D8/#D5D1C8, Deep Taupe #675845, Vibrant Orange #FA5C01 (nur als Fläche mit schwarzer Schrift, 6,6:1), Pitch Black #000
- Sektionen: Hero Foto/Schwarz · Intro Off-White · Referenzen Sand · Leistungen Off-White · Materialien Sand · Ablauf Taupe · FAQ Off-White · Kontakt Orange · Footer Schwarz
- Vordergrundfarbe per `--fg-rgb` je Fläche umschaltbar (hell/dunkel)
- Fix: Leistungen-Sektion war seit v36 nicht mehr eigenständig (Anker `#leistungen` fehlte) – wiederhergestellt
