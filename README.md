# Boden Meiske Website

## Struktur
- `index.html` – Inhalte und Seitenaufbau
- `css/site.css` – ein Stylesheet ohne Patch-Schichten: Tokens, Raster, Bausteine, Sektionen, Motion, Medienabfragen
- `legal.css` – Impressum und Datenschutz (gleiche Tokens)
- `js/site.js` – Header, Navigation, Einblendungen, Galerie/Lightbox, Formular
- `assets/` – Fotos, Logo (`logos/lockup.svg`, Quelle `01_Brand/01_Logo/Final_2026-11/build_relaunch_logo.py`), Favicons

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

## v70 – Motion-System & Header-Wortmarke (Branch `motion-v70`, Nov 2026)
- Leitmotiv „verlegen“: Headlines steigen Zeile für Zeile aus einer Maske, Bilder öffnen sich per Clip-Path und setzen sich (Scale), Bild-Pillen im Intro ploppen auf, Faktentabelle läuft gestaffelt ein
- Hero-Sequenz: Foto setzt sich, „Qualität, | die bleibt.“ steigt auf, Linie zeichnet sich, Meta-Zeile erscheint
- Scroll-Fortschritt (Orange), Header weicht beim Runterscrollen und kommt beim Hochscrollen
- Galerie-Cursor „Ansehen“ (nur Maus), Leistungs-Band als langsame Endlosschleife (pausiert bei Hover)
- Reduzierte Bewegung: alles sofort sichtbar, Band statisch
- Header-Logo: Wortmarke „Boden Meiske“ in Nunito Sans Light (OFL), gesperrt; erzeugt mit `01_Brand/01_Logo/Final_2026-11/build_header_nunito.py`

## v80 – Ruhig unter dem Hero (Branch `ruhig-v80`, Nov 2026)
Hero bleibt (mit langsamem Zoom aufs Foto, 18 s); darunter Prinzipien nach Framer-Template „Norfolk“ (nur Prinzipien, kein Code/Bilder):
- Eine Fläche: alles Off-White #FAFAFA, Sektionen nur durch feine Linien getrennt (Sand, Taupe, Orange, schwarzer Footer entfallen)
- Sektionsköpfe zentriert: kleines Label, Headline Figtree 500
- Große Kacheln: Leistungen 3 Bildkacheln, Materialien 2 Bildkacheln + breite Unterboden-Kachel, Ablauf 4 Rahmen-Kacheln
- Ecken 4 px statt 12 px, Buttons schwarz (Orange nur noch im Header-Button)
- Leiser: Leistungs-Band, Scroll-Fortschritt, Galerie-Cursor und Footer-Wasserzeichen entfernt; Masken und Bild-Zoom kürzer und kleiner

## v82–v90 – Einheitliche Typografie & finale Politur (Branch `proportionen-v82`, Nov 2026)
- Header: nur noch die Wortmarke aus dem finalen Kundenlogo, M-Symbol entfernt; Bone- und Dark-Variante als PNG (`assets/logos/wordmark-bone.png`, `wordmark-dark.png`), Hero-Meta auf „Lothar Meiske · Bodenleger · seit 1985“ gekürzt
- Eine Schrift: Figtree auf Startseite und Rechtsseiten; drei Rollen statt vieler Gewichte – 300 Display, 400 Text, 500 UI/Labels; keine 600/700 mehr
- Neue Skala: Hero `clamp(46px,6vw,92px)`, Sektion-H2 `clamp(36px,5vw,72px)`, Zitat `clamp(26px,3.4vw,46px)`, H3 `clamp(20px,2vw,28px)`, Body 17 px, Labels 12 px/0,14 em; `text-wrap: balance` für Headlines, `pretty` für Fließtext
- Rechtsseiten: gleiche Familie und Skala, heller Footer mit schwarzem CTA, Wortmarke `clamp(190px,17vw,260px)`
- Motion: Scroll-Fortschritt zurück, Hero-Parallax mit Scrim, wortweises Einlesen des Intro-Zitats; `prefers-reduced-motion` bleibt vollständig respektiert
- Feinschliff: 44-px-Navigation auf Mobil, keine 600er mehr in sichtbaren UI-Texten, `prefers-reduced-transparency` und `prefers-contrast: more` berücksichtigt
- Cache: `site.css?v=90`, `site.js?v=86`, `legal.css?v=62`


## v100 – Relaunch nach Master-Briefing (Branch `relaunch-briefing`, 22.11.2026)
- **CSS komplett neu aufgesetzt** (vorher ~1.060 Zeilen mit Patch-Schichten v17–v90). Jetzt: Tokens in `:root`, 12-Spalten-Raster, 4px-Ecken,
  eine Easing-Kurve `cubic-bezier(.2,.7,.2,1)`, drei Dauern (200 / 450 / 800 ms), `prefers-reduced-motion`, `prefers-contrast`, Druckansicht.
- **Hero:** Claim „Qualität, die bleibt.“ bleibt groß (jetzt `<p>`), SEO-H1 „Bodenleger in Wermelskirchen – vom Untergrund bis zum fertigen Boden“ dezent darüber,
  Unterzeile und zwei CTAs („Projekt besprechen“, „Leistungen entdecken“). Langsamer Zoom bleibt; Parallax nur noch mit Maus.
- **Logo:** Symbol aus „Logo rund“ vektorisiert (potrace) + Wortmarke Nunito Sans Light, Laufweite 0,14 em. Im Header als CSS-Maske (eine Datei, Farbe folgt dem Header).
  Favicon aus der Version mit schwarzen Flächen.
- **SEO:** neuer Title und Description, og/twitter-Texte, Schema mit Straße und Gründungsjahr 1985, FAQPage-Schema aus den sichtbaren FAQ.
- **Texte:** durchgehend „wir“; Platzhalter-Zusage „1–2 Werktage“ entfernt; Über-uns-Satz aus dem Briefing im Intro ergänzt (abzustimmen).
- **Aufgeräumt:** 16 ungenutzte Logo-Dateien, `premium.css`, `_ds/`, `ds-base.js`, `support.js`, Inter-Schrift samt Lizenz. Originale liegen in `01_Brand`.
- Anruf-Knopf erscheint nur noch mobil.

## v101 – Hero wieder schlicht (Branch `hero-v101`)
- Im Bild nur noch „Qualität, die bleibt.“, darunter Linie und eine Zeile: links die H1 „Bodenleger in Wermelskirchen – vom Untergrund bis zum fertigen Boden“, rechts „Lothar Meiske · seit 1985“.
- Unterzeile („Von der Estrichreparatur …“) und die Buttons „Projekt besprechen“ / „Leistungen entdecken“ stehen jetzt direkt unter dem Hero-Bild.
- Hero-Zoom läuft in Schleife: 18 s hinein, 18 s zurück (ease-in-out), bei reduzierter Bewegung aus.

## v103 – Kundenpalette Brick · Ivory · Steel (Branch `palette-v103`)
- Grundfläche Ivory `#EBEDF1`, Karten `#F6F7F9`, Text Steel `#22282F` (12,7:1).
- Brick `#9D563A` nur für Handlung: Buttons, Header-CTA, Scroll-Fortschritt, Auswahl (Ivory auf Brick 4,7:1).
- Footer als einzige dunkle Fläche in Steel. Hero-Verlauf und Lightbox in Steel statt Schwarz.
- Sekundärtext `#565B61` (5,9:1), Labels `#666B71` (4,6:1). Rechtsseiten mit denselben Tokens.
- v104: Hero-Zoom deutlicher – 100 % bis 116 %, 10 s hin und 10 s zurück.
- v105: Header- und Footer-Logo mit dem neuen Holzmaserungs-Symbol des Kunden (`Logo-Weiss-Transparent.svg`) + Nunito Sans Light. Quelle: `01_Brand/01_Logo/Final_2026-11/build_header_v105.py`. Das M-Symbol ist aus Header, Footer und Rechtsseiten raus; das Favicon zeigt noch das M.
- v106: Akzentfarbe Coral `#E8724A` statt Brick (Buttons, Header-CTA, Scroll-Fortschritt, Auswahl). Schrift auf Coral in Steel (4,9:1), Hover `#EC8360`.

## v107 – Motion „Verlegen“ (Branch `motion-v107`)
- Hero steht (sticky), die Seite legt sich beim Scrollen wie eine Diele darüber; Hero-Text blendet aus, Bild dunkelt ab.
- Überschriften erscheinen Wort für Wort aus einer Maske, von unscharf zu scharf. Fließtext blendet mit leichter Unschärfe ein.
- Bilder treiben beim Scrollen leicht im Rahmen (CSS-Scroll-Timeline; ohne Unterstützung bleiben sie ruhig).
- Ablauf: Coral-Linie füllt sich beim Scrollen, erreichte Schritte werden aktiv (mobil senkrecht).
- Kicker-Labels über den Überschriften und die Nummern 01–03 bei den Leistungen entfernt (Impeccable Craft-Floor).
- Reduced Motion: kein Sticky-Ausblenden, keine Wort-/Unschärfe-Animation, keine Bilddrift.
