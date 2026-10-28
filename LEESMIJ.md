# SPA SPB SPC Rekenaar als app

Deze map is de rekenaar als web-app: met eigen icoon, in een eigen venster, en na de eerste keer openen ook zonder internet.

## Eenmalig online zetten (GitHub Pages, gratis)

1. Maak een gratis account op github.com en log in.
2. Klik rechtsboven op **+** en kies **New repository**.
   - Naam: bijvoorbeeld `spa-rekenaar`
   - Kies **Public** (GitHub Pages is gratis voor openbare repositories)
   - Klik **Create repository**
3. Klik op de lege pagina op **uploading an existing file**.
   Sleep de **inhoud** van deze map erin: `index.html`, `manifest.webmanifest`, `sw.js` en de map `icons`.
   Dus niet de map zelf: `index.html` moet bovenaan staan. Klik **Commit changes**.
4. Ga naar **Settings → Pages**. Kies bij *Source* **Deploy from a branch**, bij *Branch* **main** en **/ (root)**, en klik **Save**.
5. Na een minuut of twee staat bovenaan het adres, bijvoorbeeld
   `https://jouw-gebruikersnaam.github.io/spa-rekenaar/`

## Op de telefoon zetten

- **iPhone:** open het adres in Safari, tik op de deelknop en kies **Zet op beginscherm**.
- **Android:** open het adres in Chrome, tik op ⋮ en kies **App installeren** of **Toevoegen aan startscherm**.

Open de app één keer met internet. Daarna werkt hij ook offline.

## Op de pc

Open hetzelfde adres in Edge of Chrome en klik op het installeer-icoon in de adresbalk (of ⋯ → **Apps → Deze site als app installeren**).
Dan heb je een eigen venster en een snelkoppeling in het Startmenu, en hij werkt offline.

## Bijwerken

Krijg je een nieuwe versie van `index.html`, upload die dan in de repository via **Add file → Upload files** (het oude bestand wordt overschreven).
De app haalt de nieuwe versie op zodra je hem met internet opent.

## Goed om te weten

- Het adres is openbaar: iedereen die het kent, kan de rekenaar gebruiken. Je ingevulde metingen blijven alleen op je eigen apparaat.
- Telefoon en pc onthouden elk hun eigen waarden; die worden niet gedeeld.
