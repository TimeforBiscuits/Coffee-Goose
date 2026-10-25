# Coffee Goose Mk 2 · Data Schema (2.0)

The machine-readable canonical file is [`catalog.json`](catalog.json); `COFFEES.md` and `GRINDER.md` are generated, reader-friendly views of the same data. The Markdown is not YAML-frontmatter-based; there is **one** file for all 53 coffees and **one** file for all grinder settings.

## JSON root

| Key | Type | Semantics |
| --- | --- | --- |
| `schema_version` | string | Exact package schema: `"2.0"`. |
| `package` | string | Release name, `Coffee Goose Mk 2`. |
| `checked_on` | ISO date string | Roaster catalog snapshot date, **not** the brew or roast date. |
| `roasters` | string[] | Display order of included roasters. |
| `documents` | object | Relative paths to `readme`, `schema`, `coffees`, `grinder`. |
| `tasting_log_fields` | string[] | Suggested keys for a **separate** personal log entry. |
| `grinder_calibration` | object | X-Ultra physical click and notation assumptions plus maker references. |
| `coffees` | Coffee[] | Exactly 53 coffee entries in this snapshot. |

## Coffee object (`coffees[]`)

| Key | Type | Semantics |
| --- | --- | --- |
| `id` | string | Stable snapshot identifier, `<roaster-slug>--<coffee-slug>`; do not derive from an English title at runtime. |
| `name`, `roaster`, `category` | string | Display name, brand, coffee category. Category may contain compound tags separated by `;`. |
| `country`, `region`, `producer`, `farm`, `varietal`, `process`, `roast` | string | Product-page origin / production / roast information, not independently verified. |
| `altitude_m` | integer / string / null | Altitude in meters: ranges such as `"2000–2200"` are intentionally strings. |
| `tasting` | string[] | **Roaster-provided tasting descriptors**, not the user's review. |
| `bio` | string | Short coffee origin/processing/roast narrative. |
| `flavour_style`, `recommendation` | string | Editorial style classification and alternate-prep hypothesis. |
| `url` | URL string | Roaster product listing source. |
| `checked_on` | ISO date string | Date metadata was checked. |
| `availability` | string / null | Catalog status at capture; `null` means no special status recorded. |
| `warnings` | string[] | Any source contradictions or missing-information caveats. |
| `markdown_section` | string | Existing anchor into `COFFEES.md`, e.g. `COFFEES.md#coffee-mokuska--party-on`. |
| `grinder_section` | string | Existing anchor into `GRINDER.md`, e.g. `GRINDER.md#grind-mokuska--party-on`. |
| `personal_tasting_observation` | string / null | Preserved **prior user observation**, distinct from roaster tasting notes; only one such observation was present in the old Markdown set. |
| `recipes` | Recipe[] | Exactly three methods in this snapshot. |

**Migration note:** Old `relative_path` references were **removed**, because those 53 individual Markdown files do not exist in Mk 2. Use the two `*_section` pointers instead.

## Recipe object (`coffees[].recipes[]`)

| Key | Type | Semantics |
| --- | --- | --- |
| `method` | enum string | `v60_pour_over`, `v60_switch_immersion`, or `aeropress`. |
| `source_type` | enum string | One of the four credibility codes below. |
| `source_url` | URL string / null | Link to official recipe when one exists; `null` for editorial proposals. |
| `dose_g` | number / null | Coffee mass in grams; **null is meaningful** and must not be replaced invisibly. |
| `water_g` | number | Grams of water added (not drink yield). |
| `temperature_c` | number / null | Water temperature in Celsius; `null` if not stated. |
| `grind` | string | General grinder description in the recipe; may be editorial for an editorial recipe. |
| `target_time` | string | Human-oriented steep/drawdown goal; **do not parse as a duration without review**. |
| `steps` | string[] | Ordered brewing instructions. Preserve their sequence and wording. |
| `notes` | string | Recipe assumptions, alternative doses, sizing warnings and caveats. |
| `grind_x_ultra` | GrinderSetting | Detailed individual editorial X-Ultra recommendation. |

### Source type enumeration

| `source_type` | Interpret as |
| --- | --- |
| `roaster_coffee_specific` | Appears with the specific coffee; may repeat across roaster catalog pages. |
| `roaster_house_guide` | General roaster-published device recipe, not bean-specific. |
| `roaster_house_guide_incomplete` | General roaster-published recipe with essential value omitted; **leave null**. |
| `editorial_suggestion` | Experimental alternate recipe; not roaster published or verified by tasting. |

**Important:** Even if `source_type` is roaster-published, `grind_x_ultra` is always an **editorial estimate**. Do not present the grinder start clicks as official.

## GrinderSetting (`recipes[].grind_x_ultra`)

| Key | Type | Semantics |
| --- | --- | --- |
| `model` | string | `1Zpresso X-Ultra`. |
| `start_clicks` | integer | Click count clockwise from calibrated zero. |
| `start_setting` | string | X-Ultra three-part `R.N.C` representation. **Never parse as a decimal.** |
| `range_clicks` | integer[2] | Inclusive low–high click range. |
| `range_settings` | string[2] | Same range rendered as X-Ultra settings. |
| `adjustment_step_clicks` | integer | Suggested coarse/fine increment per tasting iteration. |
| `dial_in` | string | How to respond to taste, drawdown and pressing resistance. |
| `basis` | string | Rationale for editorial estimate; manufacturer chart is a broad band, not coffee-specific. |
| `provenance` | string | `editorial_estimate_not_roaster_published_or_brew_tested`. |
| `reference_url` | URL string | Manufacturer chart used as baseline. |

**Conversion:** 60 clicks per full rotation, 10 per dial mark. For `R.N.C`, total clicks are `60*R + 10*N + C`, with `N` in `[0,5]` and `C` in `[0,9]`. For example `2.1.5` = **135 clicks**.

**Data constraints:** all recipes must have unique `(coffee.id, method)` pairs; expected 159 keys. `range_clicks[0] <= start_clicks <= range_clicks[1]`, and each three-part setting must reproduce its paired click value. `dose_g` or `temperature_c` may be null, rather than guessed. Water, mass and temperature use metric units.

## Markdown layout and section markers

The large consolidated files contain explicit, stable HTML ID anchors and machine-detectable boundaries:

```markdown
<a id="coffee-mokuska--party-on"></a>
<!-- BEGIN_COFFEE id=mokuska--party-on -->
### Party On
...coffee bio, recipes, and tasting-log prompts...
<!-- END_COFFEE id=mokuska--party-on -->
```

The matching grinder block uses `id="grind-mokuska--party-on"` and `BEGIN_GRINDER` / `END_GRINDER`. The HTML comments are parsing hints, not instructions to execute. Apps can ignore the Markdown entirely and read only `catalog.json`.

## Personal tasting records (recommended app-owned model)

New tasting sessions **should not be appended to the upstream roaster catalog JSON** when syncing new snapshots. Instead store separate records with `coffee_id`, `method`, session date and the fields listed under `tasting_log_fields` (optionally an ID and notes). The legacy Party On observation is migrated under `personal_tasting_observation` for continuity, not as part of the roaster’s flavor claims.

## Refresh and provenance policy

- Product listings and harvests may change; don't assume `id` alone confirms that a new crop is chemically/organoleptically identical.
- Keep source product URL, checking date and provenance status together; version or review changed lots before overwriting an existing profile.
- Treat roaster-provided tasting words as *advertised expectations*, not measured flavor results.
- Distinguish a Hario **Switch** (closeable valve) from an ordinary V60 dripper (cannot perform closed-valve immersion).
- Missing roast dates, extraction yield data or published recipe values are absent, not inferred.

Source snapshot: **2026-10-25**. Mk 2 reorganizes existing material; it is **not** a new scrape of the roaster websites.
