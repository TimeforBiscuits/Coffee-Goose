# 🪿 Coffee Goose

A Windows 95–flavoured brew guide, from the same family as Cooked Goose. Pick a roaster, a bean and a brewer to get the recipe. Built mainly for iPhone, with a two-pane layout for iPad. It's a plain static site, hosted on GitHub Pages.

## What it does

- **Brew Station.** Pick one of eight roasters, then a bean, then a brewer (V60, Hario Switch, AeroPress).
  - On iPhone the recipe opens full-screen. On iPad it sits beside the bean list. In landscape, the recipe splits into two columns.
  - Each coffee has a card with the roaster's tasting notes, a short bio, and origin, process and producer details.
  - **Your best practice.** Once you've logged a coffee, its card says how you brew it best, e.g. *"AeroPress with grind 1.4.5, 15 g → 225 g, 198°F, about 2:10"*. It also shows why, with your star averages per brewer and your most glowing note quoted. The winning brewer gets a 🏆, and its recipe pre-fills your best grind. See [How best practice works](#how-best-practice-works).
- **Recipes.**
  - Big numbers for coffee, water, ratio, temperature, time and the 1Zpresso X-Ultra grind setting.
  - **Guided pours.** Every recipe is broken into one timed step per pour: *0:00 Bloom: pour to 40 g*, *0:30 Pour to 120 g*, and so on, ending with *Drawdown done*. Press ▶ Start as you begin the first pour.
    - The timer highlights the current step and scrolls to it. A bar counts down to the next pour ("Next: Pour to 180 g in 0:25").
    - It chimes at each step (🔔/🔕 to mute) and keeps the screen awake while it runs.
  - Where the roaster lists pour sizes but no times, or gives no schedule at all, Coffee Goose fills in the gaps and says so on the recipe.
    - The bloom gets 30 seconds, unless the roaster gives a different wait.
    - The last pour lands about a minute before drawdown.
    - When the roaster gives a time window ("2:30–3:30"), drawdown aims for its middle.
  - The roaster's original wording is kept underneath, under *Roaster's original wording*.
  - Temperatures are shown in °F, with the roaster's °C underneath.
  - Every recipe carries a badge saying where it came from: *Roaster recipe*, *Roaster house guide*, *House guide · gaps*, or *Goose suggestion* (editorial).
  - Numbers a roaster didn't publish show as **Not published**, never guessed. The Barn's AeroPress dose is one example.
- **Brew Log.** Every recipe has a log. Each entry records:
  - the date and a 1–5 star rating
  - your notes
  - an optional scorecard (acidity, sweetness, body, clarity)
  - the grind, brew time, dose, water and temperature you actually used. Brew time fills itself in from the timer.
  - flavours you tasted, the bag's roast date, and what to change next time

  The **Brew Log** tab shows one folder per bean, with the number of brews, the date you last brewed it (DD.MM.YYYY), your average stars and your best brewer. Tap a bean to open its brews, and tap a brew to jump back to that recipe.
- **Bean Picker.**
  - Tick boxes for roast, body, flavours (including *Earthy & spicy*), process, origin and plant (arabica, robusta, Geisha, decaf). Coffee Goose shows the four closest coffees with a match % and the reasons.
  - Origins, roasts, processes and plant types are either/or. Ticking Ethiopian *and* Colombian finds either.
  - Flavours and body add up. Ticking fruity *and* chocolatey favours coffees that are both.
  - Decafs only show up near the top if you tick *Decaf*.
  - Roasts sit on one light-to-dark scale, read from however the roaster wrote it ("Medium–strong filter", "Dark espresso (5/5)", "intensity 4/4"). *Dark roast* finds the dark espresso roasts from the canephora addendum.
  - Coffees sold as espresso roasts carry an **ESPRESSO** tag. Their filter recipes are Goose suggestions.
- **Extras.** A Tip of the Day at startup, which you can turn off. An X-Ultra cheat sheet with a clicks ↔ R.N.C converter. Start-menu backup and restore for the log.

## Your brew log stays on this device

The log is saved in the browser's local storage on each device. It's kept apart from the coffee catalog, keyed by coffee ID and brew method, so updating the catalog never touches it.

Clearing Safari's website data deletes the log, and so can removing the home-screen app. Use **Start → Back Up Brew Log** now and then. On iPhone it opens the share sheet, so you can save the file to Files. **Restore** merges a backup in without duplicating entries.

## How best practice works

Everything happens on the device, in `js/insights.js`. No network, no account, and nothing leaves the phone.

1. **Each brew gets a score.** Your stars count most. The words in your notes count too: "incredible", "sweet" and "clean" push it up, "sour", "muddy" and "bitter" pull it down, and "not bitter" reads as good. Sweetness and clarity on the scorecard count a little. Superlatives like "best cup I've had" get a bonus. A brew with no stars and no notes isn't counted.
2. **Brewers are compared fairly.** Each brewer's average is pulled toward your overall average, more strongly when it has few brews. Two outstanding AeroPress brews can still beat nine middling V60s, but one lucky brew can't beat a long run of great ones.
3. **Settings come from your best brews** with the winning brewer: the grind with the best record, then the dose, water, temperature and brew time you used most often in those cups.
4. **Confidence** is *Early days* under 3 scored brews, *Getting there* under 6, then *Confident*. If two brewers are neck and neck, the card says so.

The card shows your plain star average per brewer, while the ranking also weighs your notes. That's why a brewer with slightly fewer stars can still win, if your notes about it were glowing.

## Guided pour plans

`js/guide.js` builds each recipe's timed steps from the catalog at runtime. The catalog's own `steps` are never changed. It reads the roasters' phrasings ("Five pours of …", "three additional pours of 75 g each", "Pour 75 g, then 75 g, then 50 g", already-timed schedules). It also covers the Switch and AeroPress templates. `node tests/check.js` builds a plan for all 192 recipes and checks each one starts at 0:00, keeps adding water, and finishes at the recipe's full water weight. Every "N g total" the roaster published must also appear as a pour. If a new catalog uses wording it doesn't recognise, the tests fail rather than showing a broken plan.

The brew log still stores temperatures in °C, like the catalog, and converts to °F for display.

## The catalog

The app loads every file listed in `data/index.json` and merges them by coffee ID, in order:

- `data/catalog.json`: the base catalog, 53 coffees from Mókuska, Leuchtfeuer and The Barn.
- `data/canephora-addendum.json`: 11 canephora (robusta) coffees from Quijote Kaffee, Seekind Coffee, Aroma Hoch 3, Kaffeerösterei Laufenmühle, Mókuska and Südhang.

Together that's 64 coffees and 192 recipes, snapshot 2026-10-25. `data/SCHEMA.md` documents the shape. `COFFEES.md`, `GRINDER.md` and `CANEPHORA_ADDENDUM.md` are readable views of the same data, and the app doesn't load them.

To update a file, replace it and run `node tests/check.js`. To add another addendum, drop it in `data/` and add its name to `data/index.json`. New coffees appear automatically. A new roaster gets a fallback colour, so add one to `ROASTER_STYLE` in `js/app.js`. A new origin country needs a flag in `FLAGS` and a box in `GROUPS`, both in `js/match.js`.

The tests check the catalog and the matcher. Every X-Ultra `R.N.C` setting must match its click count, and each start setting must sit inside its range. The matcher must return sensible picks, for example *robusta* finding all 12 canephoras and *dark* finding dark roasts. The best-practice engine has tests too, including the "two great AeroPress brews beat nine average V60s" case.

## Versioning

The version shows in the taskbar tray and in **Start → About**. Bump it in `js/version.js` with each release.

## Hosting

Every push to `main` runs the checks and deploys to GitHub Pages via `.github/workflows/pages.yml`. One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

To run it locally, run `python3 -m http.server` and open http://localhost:8000. The catalog is fetched, so opening `index.html` straight from disk won't work.

On iPhone/iPad, use **Share → Add to Home Screen** for a full-screen app icon.
