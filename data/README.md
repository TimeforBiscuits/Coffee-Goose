# Coffee Goose Mk 2 · Recipe Database

**A condensed, five-file edition of the existing October 25, 2026 database.** All 53 coffees and 159 recipes from Mókuska (9), Leuchtfeuer (22), and The Barn (22) are retained; the original 59 Markdown files have become two content Markdown files, plus two documentation files and one JSON catalog.

## The five files

| File | Purpose |
| --- | --- |
| [`COFFEES.md`](COFFEES.md) | **All coffee information:** 53 profiles, origin and processing bios, roast details, published tasting descriptors, three recipes with complete steps each, alternate-prep suggestions, source URLs, caveats and personal tasting log placeholders. |
| [`GRINDER.md`](GRINDER.md) | **All grinder information:** X-Ultra calibration and notation, a 53-coffee three-method quick chart, plus complete click-level starting ranges and dial-in advice for all 159 recipes. |
| [`README.md`](README.md) | This installation / usage guide. |
| [`SCHEMA.md`](SCHEMA.md) | JSON shape, stable IDs, explicit Markdown section markers, units, nulls and recipe provenance. |
| [`catalog.json`](catalog.json) | **Canonical machine-readable source**, with complete profiles, every brewing step and per-recipe `grind_x_ultra` object. JSON version 2.0. |

## Developer quick start

1. **Use `catalog.json` as the app’s source of truth.** Its `coffees[]` array has 53 entries; each has three `recipes[]` entries. Read `coffees[].recipes[].grind_x_ultra` to display X-Ultra dial starting points.
2. Show recipe credibility using `source_type`: `roaster_coffee_specific`, `roaster_house_guide`, `roaster_house_guide_incomplete`, or `editorial_suggestion`.
3. Link to coffee narratives with `coffees[].markdown_section` (for example, `COFFEES.md#coffee-mokuska--party-on`), or to dial-in explanations via `grinder_section`.
4. **Retain null fields.** A missing roaster dose or temperature is not permission to label an editorial guess as official.
5. Keep new personal tasting notes in a **separate app data store**, keyed by `coffee.id` and `recipe.method`, so refreshing the source catalog cannot overwrite your observations.

## Quick sanity-check

- Coffees: **53** (9 Mókuska, 22 Leuchtfeuer, 22 The Barn).
- Methods per coffee: `v60_pour_over`, `v60_switch_immersion`, `aeropress`.
- Total recipes: **159**; each retains step-by-step instructions and an X-Ultra setting, range, and adjustment advice.
- Package archive: **exactly five files at the root**, no 53-entry directory tree and no dead links to old individual Markdown files.

## How reliable is each recipe?

**`roaster_coffee_specific`:** parameters were published with this coffee. Several Leuchtfeuer coffees share a formula; coffee-specific placement does not mean individually fine-tuned or personally tested.

**`roaster_house_guide`:** the roaster published a general brewing method; it was not adapted to that particular bean. The Barn provides this type for V60.

**`roaster_house_guide_incomplete`:** a published general guide leaves an important number blank. The Barn’s AeroPress recipe gives 230 g water and 94°C, but **does not state the coffee dose**; JSON `dose_g` is `null`. The Barn’s general V60 guide also does not publish a temperature; the corresponding JSON value is `null`.

**`editorial_suggestion`:** an experimental preparation proposed on the basis of processing, origin, roast, and expected sensory style. It is *not* a roaster-published recipe.

**All X-Ultra settings** are separately labeled, untested **editorial starting estimates** based on the maker’s reference chart. They are **not** roaster-published grind settings. See [`GRINDER.md`](GRINDER.md).

## Brewing and equipment notes

- **Hario Switch 02 vs 03:** Most editorial 20 g / 320 g immersion recipes need Switch **03 / 360 mL**. Switch **02 / 200 mL** adaptations use 12 g / 180 g, stated in the recipe notes. Mókuska’s published Party On 15 g / 250 g immersion may exceed Switch 02’s rated capacity.
- **Water mass** is water poured into the brewer, not beverage yield. Temperatures are Celsius.
- **The Barn “22 clicks”** in its general V60 text references no grinder model; it is **not** an instruction for the X-Ultra to use 22 clicks.
- **Coffee freshness:** roaster selection, harvest and availability can change. Dates and product links are kept per profile. This package does not live-sync websites.
- **Decafs and sold-out products:** included when relevant to the October 25 product-category snapshot. This is *not* an archive of every coffee these roasters have ever sold.

## Notes retained from the original package

- **Party On:** a previous personal observation—V60 seemed muted; five-minute Switch immersion brought more brightness and complexity—is retained in [`COFFEES.md`](COFFEES.md) and `catalog.json` under `personal_tasting_observation`. Personal notes are kept distinct from advertised roaster tasting descriptors.
- **Sitio Pañelao:** its source disagrees on variety (Arara versus Catuaí); no unsupported reconciliation was made.
- **Los Suyates:** the official bean-specific guidance is for espresso; the three filter/immersion recipes are editorial proposals.
- **San Felipe Decaf:** explicitly described as omniroast despite an espresso product title.
- **Leuchtfeuer:** many individual pages display matching V60 instructions; don't present the repetition as 22 independently calibrated recipes.
- **The Barn:** general V60/AeroPress guides lack an official temperature/dose respectively; see null values in JSON.

## Catalog sources

- [Mókuska filter selection](https://mokuska-caffe.de/collections/filterkaffee)
- [Leuchtfeuer filter selection](https://www.lf.coffee/en-eu/collections/filterkaffee-specialty-coffee)
- [Leuchtfeuer Premium Picks](https://www.lf.coffee/en-eu/collections/premium-picks-specialty-coffee)
- [The Barn filter selection](https://thebarn.de/collections/filter-coffee)
- [The Barn AeroPress guide](https://thebarn.de/blogs/the-barn-blog/aeropress)
- [1Zpresso X-Ultra setting reference](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg)

**Build:** Coffee Goose Mk 2 · snapshot 2026-10-25 · condensed from the existing X-Ultra edition without refreshing product listings.
