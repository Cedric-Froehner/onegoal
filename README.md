# one.gOal ⚽

Ein mobiler Torstand-Zähler für Tischkicker im **Race-to-21-Modus** – optimiert für den Einsatz auf dem Smartphone direkt am Tisch.

## Features

- **Race to 21** – Zählt Tore bis 21, aufgeteilt in 3 Paarungen (Milestone bei 7, 14 und 21 Toren)
- **Zwei Teams** – Heimteam (one.O) und Gastteam frei konfigurierbar
- **Timer** – Stoppuhr mit Start/Pause, startet automatisch beim ersten Tor
- **Dot-Anzeige** – Visuelle Fortschrittsanzeige der Tore als Punkte-Raster (3 × 7)
- **Tor-Protokoll** – Vollständiges Log aller Tore mit Zeitstempel und Spielstand
- **Rückgängig** – Letztes Tor kann per Knopfdruck korrigiert werden
- **Teamanpassung** – Name, Farbe und Logo (URL oder Dateiupload) für beide Teams einstellbar
- **Wake Lock** – Hält den Bildschirm während des Spiels aktiv
- **PWA-ready** – Kann als Web-App auf dem iPhone-Homescreen installiert werden

## Verwendung

Einfach `Goalcounter.html` im Browser öffnen – keine Installation, kein Build-Schritt, keine Abhängigkeiten.

```
open Goalcounter.html
```

Oder direkt unter [og1o.com](https://www.og1o.com) aufrufen.

### Spielablauf

1. Auf den Bereich des jeweiligen Teams tippen → Tor wird gezählt
2. Timer läuft automatisch mit
3. Bei 7 und 14 Toren erscheint ein Paarungswechsel-Hinweis
4. Bei 21 Toren wird der Gewinner angezeigt
5. „🔄 Neu starten" setzt alles zurück

## Vorkonfigurierte Teams

| Name        | Logo                  |
|-------------|-----------------------|
| one.O       | one.O SVG Logo        |
| Hermes      | Hermes Logo           |
| Risk.Ident  | Risk Ident Logo       |
| OTTO        | OTTO Logo             |
| mindline    | mindline Logo         |
| Eigenes     | URL oder Datei-Upload |

## Tech Stack

Reines HTML + CSS + Vanilla JavaScript – eine einzige Datei, keine Abhängigkeiten.
