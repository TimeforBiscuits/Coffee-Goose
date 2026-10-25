# 🪿 Coffee Goose

A Windows 95–flavoured brew guide, from the same family as Cooked Goose. Pick a roaster, a bean and a brewer to get the recipe. Built mainly for iPhone, with a two-pane layout for iPad. It's a plain static site, hosted on GitHub Pages.

## What it does

- **Brew Station.** Pick a roaster (Mókuska, Leuchtfeuer, The Barn), then a bean, then a brewer (V60, Hario Switch, AeroPress).
  - On iPhone the recipe opens full-screen. On iPad it sits beside the bean list. In landscape, the recipe splits into two columns.
  - Each coffee has a card with the roaster's tasting notes, a short bio, and origin, process and producer details.
- **Recipes.**
  - Big numbers for coffee, water, ratio, temperature, time and the 1Zpresso X-Ultra grind setting.
  - Numbered steps with a brew timer. It highlights the timed step you're on and keeps the screen awake while it runs.
  - Every recipe carries a badge saying where it came from: *Roaster recipe*, *Roaster house guide*, *House guide · gaps*, or *Goose suggestion* (editorial).
  - Numbers a roaster didn't publish show as **Not published**, never guessed. The Barn's AeroPress dose is one example.
- **Brew Log.** Every recipe has a log. Each entry records:
  - the date and a 1–5 star rating
  - your notes
  - an optional scorecard (acidity, sweetness, body, clarity)
  - the grind, dose, water and temperature you actually used
  - flavours you tasted, the bag's roast date, and what to change next time

  The **Brew Log** tab lists every entry. Tap one to jump back to that recipe.
- **Bean Picker.**
  - Tick boxes for roast, body, flavours, process, origin and plant (arabica, robusta, Geisha, decaf). Coffee Goose shows the four closest coffees with a match % and the reasons.
  - Origins, roasts, processes and plant types are either/or. Ticking Ethiopian *and* Colombian finds either.
  - Flavours and body add up. Ticking fruity *and* chocolatey favours coffees that are both.
  - Decafs only show up near the top if you tick *Decaf*.
  - None of the three roasters sells a truly dark filter roast. *Dark roast* therefore leans toward the most developed roasts available (medium and medium–strong), and the results say so.
- **Extras.** A Tip of the Day at startup, which you can turn off. An X-Ultra cheat sheet with a clicks ↔ R.N.C converter. Start-menu backup and restore for the log.

## Your brew log stays on this device

The log is saved in the browser's local storage on each device. It's kept apart from the coffee catalog, keyed by coffee ID and brew method, so updating the catalog never touches it.

Clearing Safari's website data deletes the log, and so can removing the home-screen app. Use **Start → Back Up Brew Log** now and then. On iPhone it opens the share sheet, so you can save the file to Files. **Restore** merges a backup in without duplicating entries.

## The catalog

`data/catalog.json` is the app's only data source: 53 coffees and 159 recipes, snapshot 2026-10-25. `data/SCHEMA.md` documents its shape. `COFFEES.md` and `GRINDER.md` are readable views of the same data, and the app doesn't load them.

To update the catalog, replace `data/catalog.json` and run `node tests/check.js`. New coffees appear automatically. A new roaster gets a fallback colour, so add one to `ROASTER_STYLE` in `js/app.js`. A new origin country needs a flag in `FLAGS` and a box in `GROUPS`, both in `js/match.js`.

The tests check the catalog and the matcher. Every X-Ultra `R.N.C` setting must match its click count, and each start setting must sit inside its range. The matcher must return sensible picks, for example *robusta* finding the canephora.

## Versioning

The version shows in the taskbar tray and in **Start → About**. Bump it in `js/version.js` with each release.

## Hosting

Every push to `main` runs the checks and deploys to GitHub Pages via `.github/workflows/pages.yml`. One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

To run it locally, run `python3 -m http.server` and open http://localhost:8000. The catalog is fetched, so opening `index.html` straight from disk won't work.

On iPhone/iPad, use **Share → Add to Home Screen** for a full-screen app icon.
