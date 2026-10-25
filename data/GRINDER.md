# Coffee Goose Mk 2 — 1Zpresso X-Ultra Grind Settings

**Equipment:** 1Zpresso X-Ultra · **Coverage:** 53 coffees × 3 brewing methods = 159 dial-in entries · **Snapshot:** 2026-10-25.

> **Important:** Every bean-specific click setting in this file is an editorial, untested starting estimate. Neither the three roasters nor 1Zpresso published these individual coffee settings. Keep the original grind descriptions separate from this document.

## Understanding the X-Ultra dial

- **60 clicks = 1 full rotation.** Ten clicks separate the numbered dial marks. Claimed burr travel is 12.5 µm per click; that is not a measured ground-particle size.
- Format **`R.N.C`** means full rotations (`R`), dial number (`N` from 0 to 5), and extra clicks (`C` from 0 to 9), measured clockwise from correctly calibrated zero.
- Example: **`2.1.5` = 2 × 60 + 1 × 10 + 5 = 135 clicks**.
- To find zero, turn counterclockwise gently toward finer just until slight resistance begins; **do not overtighten**. Follow the 1Zpresso manual to align zero after dismantling/reassembly.
- Clockwise = coarser / larger click total; counterclockwise = finer / smaller click total.

| Setting | Clicks |
| --- | ---: |
| `1.4.0` | 100 |
| `1.5.5` | 115 |
| `2.1.5` | 135 |
| `2.3.0` | 150 |
| `2.4.5` | 165 |

### Device starting zones (broad; not coffee-specific)

- **AeroPress:** The 1Zpresso chart puts AeroPress around 70–110 clicks; short paper-filter immersion recipes in this database generally start around `1.3.0`–`1.5.0`.
- **Hario V60 pour-over:** The maker’s pour-over chart is roughly 120–160 clicks; this database varies the starting recommendation with bean and recipe grind wording.
- **Hario Switch immersion:** No dedicated Switch setting appears on the manufacturer chart. Entries are editorial interpolations, usually around 140–160 clicks, with steep length taken into account.
- **Adjustment steps:** try ±4 clicks for V60 or AeroPress, ±5 for Switch, change one thing at a time, and privilege the taste in the cup over stopwatch targets.
- **Switch times:** usually refer to closed-valve steep time **before draining**, not elapsed time to a completely empty filter.
- **Switch capacity:** experimental 20 g / 320 g full-immersion recipes assume the Switch 03. Switch 02 adaptations at 12 g / 180 g appear in the coffee recipes.
- **Avoid a common trap:** The Barn’s published V60 house guide says “22 clicks” without identifying its grinder; **do not set an X-Ultra to 22 clicks** on that basis.

### Manufacturer references

- [X-Ultra reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg)
- [1Zpresso grind-setting overview](https://1zpresso.coffee/grind-setting/)
- [X-Ultra user manual](https://1zpresso.coffee/jp/manual-xultra-en/)

## Quick reference · starting settings

Each setting is `rotations.dial-mark.extra-clicks`. Click a coffee to see its adjustment window, number of clicks, and dial-in rationale below; its complete brew recipe is in [COFFEES.md](COFFEES.md).

### Mókuska (9 coffees)

| Coffee | V60 | Switch | AeroPress |
| --- | :---: | :---: | :---: |
| [Adnan](#grind-mokuska--adnan) | `2.1.0` | `2.3.2` | `1.3.9` |
| [Gititu AA](#grind-mokuska--gititu-aa) | `2.1.0` | `2.2.5` | `1.3.9` |
| [Good Night](#grind-mokuska--good-night) | `2.0.7` | `2.3.3` | `1.4.0` |
| [Party On](#grind-mokuska--party-on) | `2.1.9` | `2.3.2` | `1.4.2` |
| [San Felipe](#grind-mokuska--san-felipe) | `2.1.9` | `2.3.5` | `1.4.2` |
| [Sitio Pañelao](#grind-mokuska--sitio-panelao) | `2.1.9` | `2.3.5` | `1.4.2` |
| [Vista Paraíso](#grind-mokuska--vista-paraiso) | `2.0.8` | `2.3.1` | `1.4.1` |
| [Los Suyates](#grind-mokuska--los-suyates) | `2.1.9` | `2.3.2` | `1.4.2` |
| [San Felipe Decaf](#grind-mokuska--san-felipe-decaf) | `2.1.9` | `2.3.5` | `1.4.2` |

### Leuchtfeuer (22 coffees)

| Coffee | V60 | Switch | AeroPress |
| --- | :---: | :---: | :---: |
| [Daily](#grind-leuchtfeuer--daily) | `2.3.4` | `2.3.5` | `1.4.2` |
| [Chapadão](#grind-leuchtfeuer--chapadao) | `2.3.4` | `2.3.5` | `1.4.2` |
| [Typica Mejorada · Finca Soledad](#grind-leuchtfeuer--typica-mejorada-finca-soledad) | `2.3.3` | `2.3.1` | `1.4.1` |
| [Kagere AA](#grind-leuchtfeuer--kagere-aa) | `2.3.1` | `2.2.5` | `1.3.9` |
| [Samii Lalesa](#grind-leuchtfeuer--samii-lalesa) | `2.3.1` | `2.3.2` | `1.3.9` |
| [Caballero Pedernal](#grind-leuchtfeuer--caballero-pedernal) | `2.3.1` | `2.2.9` | `1.3.9` |
| [Elixer · Savage Coffee](#grind-leuchtfeuer--elixer-savage-coffee) | `2.3.3` | `2.3.1` | `1.4.1` |
| [Sidra Purple Wave · Finca Soledad](#grind-leuchtfeuer--sidra-purple-wave-finca-soledad) | `2.3.3` | `2.3.1` | `1.4.1` |
| [Lérida Geisha Honey](#grind-leuchtfeuer--lerida-geisha-honey) | `2.3.1` | `2.2.5` | `1.3.9` |
| [Iridescence Geisha · Jamison Savage](#grind-leuchtfeuer--iridescence-geisha-jamison-savage) | `2.3.3` | `2.3.1` | `1.4.1` |
| [Elida Geisha Natural ASD · Lamastus](#grind-leuchtfeuer--elida-geisha-natural-asd-lamastus) | `2.3.3` | `2.3.1` | `1.4.1` |
| [Esmeralda Geisha · Buena Vista 3](#grind-leuchtfeuer--esmeralda-geisha-buena-vista-3) | `2.3.1` | `2.2.5` | `1.3.9` |
| [Soledad Geisha Washed](#grind-leuchtfeuer--soledad-geisha-washed) | `2.3.1` | `2.2.5` | `1.3.9` |
| [Indelible Geisha](#grind-leuchtfeuer--indelible-geisha) | `2.3.3` | `2.3.1` | `1.4.1` |
| [Umbra Geisha](#grind-leuchtfeuer--umbra-geisha) | `2.3.1` | `2.2.5` | `1.3.9` |
| [Echo Geisha](#grind-leuchtfeuer--echo-geisha) | `2.3.3` | `2.3.1` | `1.4.1` |
| [Interstellar Geisha](#grind-leuchtfeuer--interstellar-geisha) | `2.3.3` | `2.2.7` | `1.4.1` |
| [Horizon Geisha](#grind-leuchtfeuer--horizon-geisha) | `2.3.3` | `2.3.1` | `1.4.1` |
| [Terroir Geisha](#grind-leuchtfeuer--terroir-geisha) | `2.3.1` | `2.2.5` | `1.3.9` |
| [Symbiosis Geisha](#grind-leuchtfeuer--symbiosis-geisha) | `2.3.3` | `2.3.1` | `1.4.1` |
| [Nirvana Geisha](#grind-leuchtfeuer--nirvana-geisha) | `2.3.3` | `2.3.1` | `1.4.1` |
| [Aril Geisha](#grind-leuchtfeuer--aril-geisha) | `2.3.3` | `2.3.1` | `1.4.1` |

### The Barn (22 coffees)

| Coffee | V60 | Switch | AeroPress |
| --- | :---: | :---: | :---: |
| [Jairo Arcila](#grind-the-barn--jairo-arcila) | `2.1.2` | `2.3.1` | `1.4.3` |
| [Autumn Coffee](#grind-the-barn--autumn-coffee) | `2.1.0` | `2.3.2` | `1.4.1` |
| [Andres Ramirez](#grind-the-barn--andres-ramirez) | `2.1.0` | `2.3.2` | `1.4.1` |
| [Himalaya Maragogype](#grind-the-barn--himalaya-maragogype) | `2.1.0` | `2.3.2` | `1.4.1` |
| [Los Pirineos Anaerobic](#grind-the-barn--los-pirineos-anaerobic) | `2.1.2` | `2.3.1` | `1.4.3` |
| [Mohamed Ali](#grind-the-barn--mohamed-ali) | `2.1.0` | `2.2.5` | `1.4.1` |
| [La Colina Washed](#grind-the-barn--la-colina-washed) | `2.1.0` | `2.3.2` | `1.4.1` |
| [Volcan Azul Obatá](#grind-the-barn--volcan-azul-obata) | `2.1.2` | `2.3.1` | `1.4.3` |
| [Atlas Coffee](#grind-the-barn--atlas-coffee) | `2.1.0` | `2.3.2` | `1.4.1` |
| [Volcan Azul Caturra](#grind-the-barn--volcan-azul-caturra) | `2.1.0` | `2.2.9` | `1.4.1` |
| [Our Plot Daterra](#grind-the-barn--our-plot-daterra) | `2.1.0` | `2.2.9` | `1.4.1` |
| [Kayon Mountain](#grind-the-barn--kayon-mountain) | `2.1.0` | `2.2.5` | `1.4.1` |
| [Genesis Coffee](#grind-the-barn--genesis-coffee) | `2.1.0` | `2.2.5` | `1.4.1` |
| [Gatomboya AA](#grind-the-barn--gatomboya-aa) | `2.1.0` | `2.2.5` | `1.4.1` |
| [Elemental Coffee](#grind-the-barn--elemental-coffee) | `2.1.0` | `2.3.2` | `1.4.1` |
| [Bekele Kechara](#grind-the-barn--bekele-kechara) | `2.1.0` | `2.3.2` | `1.4.1` |
| [Guava Banana](#grind-the-barn--guava-banana) | `2.1.2` | `2.3.1` | `1.4.3` |
| [A Drop of Science](#grind-the-barn--a-drop-of-science) | `2.1.0` | `2.3.2` | `1.4.1` |
| [Decaf Balanced](#grind-the-barn--decaf-balanced) | `2.1.0` | `2.3.2` | `1.4.1` |
| [Decaf Funky](#grind-the-barn--decaf-funky) | `2.1.2` | `2.3.1` | `1.4.3` |
| [Sundrop](#grind-the-barn--sundrop) | `2.1.0` | `2.3.2` | `1.4.1` |
| [Bishan Wate](#grind-the-barn--bishan-wate) | `2.1.0` | `2.2.5` | `1.4.1` |

## Per-coffee grind settings, ranges and dial-in advice

Each range is exploratory rather than guaranteed. A starting point outside the range may be appropriate for different batch sizes, paper, water chemistry or roast freshness.

---

### Mókuska

<a id="grind-mokuska--adnan"></a>
<!-- BEGIN_GRINDER id=mokuska--adnan -->
#### Adnan

**Coffee ID:** `mokuska--adnan` · [Coffee bio and brew steps](COFFEES.md#coffee-mokuska--adnan)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.1.0` | 130 | `2.0.1`–`2.1.9` | 121–139 | ±4 clicks |
| Hario Switch immersion | `2.3.2` | 152 | `2.2.2`–`2.4.2` | 142–162 | ±5 clicks |
| AeroPress | `1.3.9` | 99 | `1.3.0`–`1.4.8` | 90–108 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.1.0`**, or **130 clicks** clockwise from zero.
- Exploratory range: `2.0.1`–`2.1.9` (121–139 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.3.2`**, or **152 clicks** clockwise from zero.
- Exploratory range: `2.2.2`–`2.4.2` (142–162 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.3.9`**, or **99 clicks** clockwise from zero.
- Exploratory range: `1.3.0`–`1.4.8` (90–108 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=mokuska--adnan -->

<a id="grind-mokuska--gititu-aa"></a>
<!-- BEGIN_GRINDER id=mokuska--gititu-aa -->
#### Gititu AA

**Coffee ID:** `mokuska--gititu-aa` · [Coffee bio and brew steps](COFFEES.md#coffee-mokuska--gititu-aa)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.1.0` | 130 | `2.0.1`–`2.1.9` | 121–139 | ±4 clicks |
| Hario Switch immersion | `2.2.5` | 145 | `2.1.5`–`2.3.5` | 135–155 | ±5 clicks |
| AeroPress | `1.3.9` | 99 | `1.3.0`–`1.4.8` | 90–108 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.1.0`**, or **130 clicks** clockwise from zero.
- Exploratory range: `2.0.1`–`2.1.9` (121–139 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.2.5`**, or **145 clicks** clockwise from zero.
- Exploratory range: `2.1.5`–`2.3.5` (135–155 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.3.9`**, or **99 clicks** clockwise from zero.
- Exploratory range: `1.3.0`–`1.4.8` (90–108 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=mokuska--gititu-aa -->

<a id="grind-mokuska--good-night"></a>
<!-- BEGIN_GRINDER id=mokuska--good-night -->
#### Good Night

**Coffee ID:** `mokuska--good-night` · [Coffee bio and brew steps](COFFEES.md#coffee-mokuska--good-night)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.0.7` | 127 | `1.5.9`–`2.1.6` | 119–136 | ±4 clicks |
| Hario Switch immersion | `2.3.3` | 153 | `2.2.3`–`2.4.3` | 143–163 | ±5 clicks |
| AeroPress | `1.4.0` | 100 | `1.3.1`–`1.4.9` | 91–109 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.0.7`**, or **127 clicks** clockwise from zero.
- Exploratory range: `1.5.9`–`2.1.6` (119–136 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **slightly finer than normal**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.3.3`**, or **153 clicks** clockwise from zero.
- Exploratory range: `2.2.3`–`2.4.3` (143–163 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.4.0`**, or **100 clicks** clockwise from zero.
- Exploratory range: `1.3.1`–`1.4.9` (91–109 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=mokuska--good-night -->

<a id="grind-mokuska--party-on"></a>
<!-- BEGIN_GRINDER id=mokuska--party-on -->
#### Party On

**Coffee ID:** `mokuska--party-on` · [Coffee bio and brew steps](COFFEES.md#coffee-mokuska--party-on)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.1.9` | 139 | `2.1.0`–`2.2.8` | 130–148 | ±4 clicks |
| Hario Switch immersion | `2.3.2` | 152 | `2.2.2`–`2.4.2` | 142–162 | ±5 clicks |
| AeroPress | `1.4.2` | 102 | `1.3.3`–`1.5.1` | 93–111 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.1.9`**, or **139 clicks** clockwise from zero.
- Exploratory range: `2.1.0`–`2.2.8` (130–148 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.3.2`**, or **152 clicks** clockwise from zero.
- Exploratory range: `2.2.2`–`2.4.2` (142–162 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.4.2`**, or **102 clicks** clockwise from zero.
- Exploratory range: `1.3.3`–`1.5.1` (93–111 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=mokuska--party-on -->

<a id="grind-mokuska--san-felipe"></a>
<!-- BEGIN_GRINDER id=mokuska--san-felipe -->
#### San Felipe

**Coffee ID:** `mokuska--san-felipe` · [Coffee bio and brew steps](COFFEES.md#coffee-mokuska--san-felipe)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.1.9` | 139 | `2.1.0`–`2.2.8` | 130–148 | ±4 clicks |
| Hario Switch immersion | `2.3.5` | 155 | `2.2.5`–`2.4.5` | 145–165 | ±5 clicks |
| AeroPress | `1.4.2` | 102 | `1.3.3`–`1.5.1` | 93–111 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.1.9`**, or **139 clicks** clockwise from zero.
- Exploratory range: `2.1.0`–`2.2.8` (130–148 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.3.5`**, or **155 clicks** clockwise from zero.
- Exploratory range: `2.2.5`–`2.4.5` (145–165 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.4.2`**, or **102 clicks** clockwise from zero.
- Exploratory range: `1.3.3`–`1.5.1` (93–111 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=mokuska--san-felipe -->

<a id="grind-mokuska--sitio-panelao"></a>
<!-- BEGIN_GRINDER id=mokuska--sitio-panelao -->
#### Sitio Pañelao

**Coffee ID:** `mokuska--sitio-panelao` · [Coffee bio and brew steps](COFFEES.md#coffee-mokuska--sitio-panelao)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.1.9` | 139 | `2.1.0`–`2.2.8` | 130–148 | ±4 clicks |
| Hario Switch immersion | `2.3.5` | 155 | `2.2.5`–`2.4.5` | 145–165 | ±5 clicks |
| AeroPress | `1.4.2` | 102 | `1.3.3`–`1.5.1` | 93–111 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.1.9`**, or **139 clicks** clockwise from zero.
- Exploratory range: `2.1.0`–`2.2.8` (130–148 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.3.5`**, or **155 clicks** clockwise from zero.
- Exploratory range: `2.2.5`–`2.4.5` (145–165 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.4.2`**, or **102 clicks** clockwise from zero.
- Exploratory range: `1.3.3`–`1.5.1` (93–111 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=mokuska--sitio-panelao -->

<a id="grind-mokuska--vista-paraiso"></a>
<!-- BEGIN_GRINDER id=mokuska--vista-paraiso -->
#### Vista Paraíso

**Coffee ID:** `mokuska--vista-paraiso` · [Coffee bio and brew steps](COFFEES.md#coffee-mokuska--vista-paraiso)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.0.8` | 128 | `1.5.9`–`2.1.7` | 119–137 | ±4 clicks |
| Hario Switch immersion | `2.3.1` | 151 | `2.2.1`–`2.4.1` | 141–161 | ±5 clicks |
| AeroPress | `1.4.1` | 101 | `1.3.2`–`1.5.0` | 92–110 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.0.8`**, or **128 clicks** clockwise from zero.
- Exploratory range: `1.5.9`–`2.1.7` (119–137 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **slightly finer than normal**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.3.1`**, or **151 clicks** clockwise from zero.
- Exploratory range: `2.2.1`–`2.4.1` (141–161 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.4.1`**, or **101 clicks** clockwise from zero.
- Exploratory range: `1.3.2`–`1.5.0` (92–110 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=mokuska--vista-paraiso -->

<a id="grind-mokuska--los-suyates"></a>
<!-- BEGIN_GRINDER id=mokuska--los-suyates -->
#### Los Suyates

**Coffee ID:** `mokuska--los-suyates` · [Coffee bio and brew steps](COFFEES.md#coffee-mokuska--los-suyates)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.1.9` | 139 | `2.1.0`–`2.2.8` | 130–148 | ±4 clicks |
| Hario Switch immersion | `2.3.2` | 152 | `2.2.2`–`2.4.2` | 142–162 | ±5 clicks |
| AeroPress | `1.4.2` | 102 | `1.3.3`–`1.5.1` | 93–111 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.1.9`**, or **139 clicks** clockwise from zero.
- Exploratory range: `2.1.0`–`2.2.8` (130–148 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.3.2`**, or **152 clicks** clockwise from zero.
- Exploratory range: `2.2.2`–`2.4.2` (142–162 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.4.2`**, or **102 clicks** clockwise from zero.
- Exploratory range: `1.3.3`–`1.5.1` (93–111 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=mokuska--los-suyates -->

<a id="grind-mokuska--san-felipe-decaf"></a>
<!-- BEGIN_GRINDER id=mokuska--san-felipe-decaf -->
#### San Felipe Decaf

**Coffee ID:** `mokuska--san-felipe-decaf` · [Coffee bio and brew steps](COFFEES.md#coffee-mokuska--san-felipe-decaf)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.1.9` | 139 | `2.1.0`–`2.2.8` | 130–148 | ±4 clicks |
| Hario Switch immersion | `2.3.5` | 155 | `2.2.5`–`2.4.5` | 145–165 | ±5 clicks |
| AeroPress | `1.4.2` | 102 | `1.3.3`–`1.5.1` | 93–111 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.1.9`**, or **139 clicks** clockwise from zero.
- Exploratory range: `2.1.0`–`2.2.8` (130–148 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.3.5`**, or **155 clicks** clockwise from zero.
- Exploratory range: `2.2.5`–`2.4.5` (145–165 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.4.2`**, or **102 clicks** clockwise from zero.
- Exploratory range: `1.3.3`–`1.5.1` (93–111 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=mokuska--san-felipe-decaf -->

---

### Leuchtfeuer

<a id="grind-leuchtfeuer--daily"></a>
<!-- BEGIN_GRINDER id=leuchtfeuer--daily -->
#### Daily

**Coffee ID:** `leuchtfeuer--daily` · [Coffee bio and brew steps](COFFEES.md#coffee-leuchtfeuer--daily)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.3.4` | 154 | `2.2.5`–`2.4.3` | 145–163 | ±4 clicks |
| Hario Switch immersion | `2.3.5` | 155 | `2.2.5`–`2.4.5` | 145–165 | ±5 clicks |
| AeroPress | `1.4.2` | 102 | `1.3.3`–`1.5.1` | 93–111 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.3.4`**, or **154 clicks** clockwise from zero.
- Exploratory range: `2.2.5`–`2.4.3` (145–163 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **coarse**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.3.5`**, or **155 clicks** clockwise from zero.
- Exploratory range: `2.2.5`–`2.4.5` (145–165 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.4.2`**, or **102 clicks** clockwise from zero.
- Exploratory range: `1.3.3`–`1.5.1` (93–111 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=leuchtfeuer--daily -->

<a id="grind-leuchtfeuer--chapadao"></a>
<!-- BEGIN_GRINDER id=leuchtfeuer--chapadao -->
#### Chapadão

**Coffee ID:** `leuchtfeuer--chapadao` · [Coffee bio and brew steps](COFFEES.md#coffee-leuchtfeuer--chapadao)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.3.4` | 154 | `2.2.5`–`2.4.3` | 145–163 | ±4 clicks |
| Hario Switch immersion | `2.3.5` | 155 | `2.2.5`–`2.4.5` | 145–165 | ±5 clicks |
| AeroPress | `1.4.2` | 102 | `1.3.3`–`1.5.1` | 93–111 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.3.4`**, or **154 clicks** clockwise from zero.
- Exploratory range: `2.2.5`–`2.4.3` (145–163 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **coarse**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.3.5`**, or **155 clicks** clockwise from zero.
- Exploratory range: `2.2.5`–`2.4.5` (145–165 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.4.2`**, or **102 clicks** clockwise from zero.
- Exploratory range: `1.3.3`–`1.5.1` (93–111 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=leuchtfeuer--chapadao -->

<a id="grind-leuchtfeuer--typica-mejorada-finca-soledad"></a>
<!-- BEGIN_GRINDER id=leuchtfeuer--typica-mejorada-finca-soledad -->
#### Typica Mejorada · Finca Soledad

**Coffee ID:** `leuchtfeuer--typica-mejorada-finca-soledad` · [Coffee bio and brew steps](COFFEES.md#coffee-leuchtfeuer--typica-mejorada-finca-soledad)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.3.3` | 153 | `2.2.4`–`2.4.2` | 144–162 | ±4 clicks |
| Hario Switch immersion | `2.3.1` | 151 | `2.2.1`–`2.4.1` | 141–161 | ±5 clicks |
| AeroPress | `1.4.1` | 101 | `1.3.2`–`1.5.0` | 92–110 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.3.3`**, or **153 clicks** clockwise from zero.
- Exploratory range: `2.2.4`–`2.4.2` (144–162 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **coarse**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.3.1`**, or **151 clicks** clockwise from zero.
- Exploratory range: `2.2.1`–`2.4.1` (141–161 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.4.1`**, or **101 clicks** clockwise from zero.
- Exploratory range: `1.3.2`–`1.5.0` (92–110 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=leuchtfeuer--typica-mejorada-finca-soledad -->

<a id="grind-leuchtfeuer--kagere-aa"></a>
<!-- BEGIN_GRINDER id=leuchtfeuer--kagere-aa -->
#### Kagere AA

**Coffee ID:** `leuchtfeuer--kagere-aa` · [Coffee bio and brew steps](COFFEES.md#coffee-leuchtfeuer--kagere-aa)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.3.1` | 151 | `2.2.2`–`2.4.0` | 142–160 | ±4 clicks |
| Hario Switch immersion | `2.2.5` | 145 | `2.1.5`–`2.3.5` | 135–155 | ±5 clicks |
| AeroPress | `1.3.9` | 99 | `1.3.0`–`1.4.8` | 90–108 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.3.1`**, or **151 clicks** clockwise from zero.
- Exploratory range: `2.2.2`–`2.4.0` (142–160 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **coarse**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.2.5`**, or **145 clicks** clockwise from zero.
- Exploratory range: `2.1.5`–`2.3.5` (135–155 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.3.9`**, or **99 clicks** clockwise from zero.
- Exploratory range: `1.3.0`–`1.4.8` (90–108 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=leuchtfeuer--kagere-aa -->

<a id="grind-leuchtfeuer--samii-lalesa"></a>
<!-- BEGIN_GRINDER id=leuchtfeuer--samii-lalesa -->
#### Samii Lalesa

**Coffee ID:** `leuchtfeuer--samii-lalesa` · [Coffee bio and brew steps](COFFEES.md#coffee-leuchtfeuer--samii-lalesa)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.3.1` | 151 | `2.2.2`–`2.4.0` | 142–160 | ±4 clicks |
| Hario Switch immersion | `2.3.2` | 152 | `2.2.2`–`2.4.2` | 142–162 | ±5 clicks |
| AeroPress | `1.3.9` | 99 | `1.3.0`–`1.4.8` | 90–108 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.3.1`**, or **151 clicks** clockwise from zero.
- Exploratory range: `2.2.2`–`2.4.0` (142–160 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **coarse**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.3.2`**, or **152 clicks** clockwise from zero.
- Exploratory range: `2.2.2`–`2.4.2` (142–162 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.3.9`**, or **99 clicks** clockwise from zero.
- Exploratory range: `1.3.0`–`1.4.8` (90–108 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=leuchtfeuer--samii-lalesa -->

<a id="grind-leuchtfeuer--caballero-pedernal"></a>
<!-- BEGIN_GRINDER id=leuchtfeuer--caballero-pedernal -->
#### Caballero Pedernal

**Coffee ID:** `leuchtfeuer--caballero-pedernal` · [Coffee bio and brew steps](COFFEES.md#coffee-leuchtfeuer--caballero-pedernal)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.3.1` | 151 | `2.2.2`–`2.4.0` | 142–160 | ±4 clicks |
| Hario Switch immersion | `2.2.9` | 149 | `2.1.9`–`2.3.9` | 139–159 | ±5 clicks |
| AeroPress | `1.3.9` | 99 | `1.3.0`–`1.4.8` | 90–108 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.3.1`**, or **151 clicks** clockwise from zero.
- Exploratory range: `2.2.2`–`2.4.0` (142–160 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **coarse**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.2.9`**, or **149 clicks** clockwise from zero.
- Exploratory range: `2.1.9`–`2.3.9` (139–159 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.3.9`**, or **99 clicks** clockwise from zero.
- Exploratory range: `1.3.0`–`1.4.8` (90–108 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=leuchtfeuer--caballero-pedernal -->

<a id="grind-leuchtfeuer--elixer-savage-coffee"></a>
<!-- BEGIN_GRINDER id=leuchtfeuer--elixer-savage-coffee -->
#### Elixer · Savage Coffee

**Coffee ID:** `leuchtfeuer--elixer-savage-coffee` · [Coffee bio and brew steps](COFFEES.md#coffee-leuchtfeuer--elixer-savage-coffee)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.3.3` | 153 | `2.2.4`–`2.4.2` | 144–162 | ±4 clicks |
| Hario Switch immersion | `2.3.1` | 151 | `2.2.1`–`2.4.1` | 141–161 | ±5 clicks |
| AeroPress | `1.4.1` | 101 | `1.3.2`–`1.5.0` | 92–110 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.3.3`**, or **153 clicks** clockwise from zero.
- Exploratory range: `2.2.4`–`2.4.2` (144–162 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **coarse**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.3.1`**, or **151 clicks** clockwise from zero.
- Exploratory range: `2.2.1`–`2.4.1` (141–161 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.4.1`**, or **101 clicks** clockwise from zero.
- Exploratory range: `1.3.2`–`1.5.0` (92–110 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=leuchtfeuer--elixer-savage-coffee -->

<a id="grind-leuchtfeuer--sidra-purple-wave-finca-soledad"></a>
<!-- BEGIN_GRINDER id=leuchtfeuer--sidra-purple-wave-finca-soledad -->
#### Sidra Purple Wave · Finca Soledad

**Coffee ID:** `leuchtfeuer--sidra-purple-wave-finca-soledad` · [Coffee bio and brew steps](COFFEES.md#coffee-leuchtfeuer--sidra-purple-wave-finca-soledad)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.3.3` | 153 | `2.2.4`–`2.4.2` | 144–162 | ±4 clicks |
| Hario Switch immersion | `2.3.1` | 151 | `2.2.1`–`2.4.1` | 141–161 | ±5 clicks |
| AeroPress | `1.4.1` | 101 | `1.3.2`–`1.5.0` | 92–110 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.3.3`**, or **153 clicks** clockwise from zero.
- Exploratory range: `2.2.4`–`2.4.2` (144–162 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **coarse**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.3.1`**, or **151 clicks** clockwise from zero.
- Exploratory range: `2.2.1`–`2.4.1` (141–161 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.4.1`**, or **101 clicks** clockwise from zero.
- Exploratory range: `1.3.2`–`1.5.0` (92–110 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=leuchtfeuer--sidra-purple-wave-finca-soledad -->

<a id="grind-leuchtfeuer--lerida-geisha-honey"></a>
<!-- BEGIN_GRINDER id=leuchtfeuer--lerida-geisha-honey -->
#### Lérida Geisha Honey

**Coffee ID:** `leuchtfeuer--lerida-geisha-honey` · [Coffee bio and brew steps](COFFEES.md#coffee-leuchtfeuer--lerida-geisha-honey)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.3.1` | 151 | `2.2.2`–`2.4.0` | 142–160 | ±4 clicks |
| Hario Switch immersion | `2.2.5` | 145 | `2.1.5`–`2.3.5` | 135–155 | ±5 clicks |
| AeroPress | `1.3.9` | 99 | `1.3.0`–`1.4.8` | 90–108 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.3.1`**, or **151 clicks** clockwise from zero.
- Exploratory range: `2.2.2`–`2.4.0` (142–160 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **coarse**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.2.5`**, or **145 clicks** clockwise from zero.
- Exploratory range: `2.1.5`–`2.3.5` (135–155 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.3.9`**, or **99 clicks** clockwise from zero.
- Exploratory range: `1.3.0`–`1.4.8` (90–108 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=leuchtfeuer--lerida-geisha-honey -->

<a id="grind-leuchtfeuer--iridescence-geisha-jamison-savage"></a>
<!-- BEGIN_GRINDER id=leuchtfeuer--iridescence-geisha-jamison-savage -->
#### Iridescence Geisha · Jamison Savage

**Coffee ID:** `leuchtfeuer--iridescence-geisha-jamison-savage` · [Coffee bio and brew steps](COFFEES.md#coffee-leuchtfeuer--iridescence-geisha-jamison-savage)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.3.3` | 153 | `2.2.4`–`2.4.2` | 144–162 | ±4 clicks |
| Hario Switch immersion | `2.3.1` | 151 | `2.2.1`–`2.4.1` | 141–161 | ±5 clicks |
| AeroPress | `1.4.1` | 101 | `1.3.2`–`1.5.0` | 92–110 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.3.3`**, or **153 clicks** clockwise from zero.
- Exploratory range: `2.2.4`–`2.4.2` (144–162 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **coarse**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.3.1`**, or **151 clicks** clockwise from zero.
- Exploratory range: `2.2.1`–`2.4.1` (141–161 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.4.1`**, or **101 clicks** clockwise from zero.
- Exploratory range: `1.3.2`–`1.5.0` (92–110 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=leuchtfeuer--iridescence-geisha-jamison-savage -->

<a id="grind-leuchtfeuer--elida-geisha-natural-asd-lamastus"></a>
<!-- BEGIN_GRINDER id=leuchtfeuer--elida-geisha-natural-asd-lamastus -->
#### Elida Geisha Natural ASD · Lamastus

**Coffee ID:** `leuchtfeuer--elida-geisha-natural-asd-lamastus` · [Coffee bio and brew steps](COFFEES.md#coffee-leuchtfeuer--elida-geisha-natural-asd-lamastus)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.3.3` | 153 | `2.2.4`–`2.4.2` | 144–162 | ±4 clicks |
| Hario Switch immersion | `2.3.1` | 151 | `2.2.1`–`2.4.1` | 141–161 | ±5 clicks |
| AeroPress | `1.4.1` | 101 | `1.3.2`–`1.5.0` | 92–110 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.3.3`**, or **153 clicks** clockwise from zero.
- Exploratory range: `2.2.4`–`2.4.2` (144–162 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **coarse**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.3.1`**, or **151 clicks** clockwise from zero.
- Exploratory range: `2.2.1`–`2.4.1` (141–161 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.4.1`**, or **101 clicks** clockwise from zero.
- Exploratory range: `1.3.2`–`1.5.0` (92–110 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=leuchtfeuer--elida-geisha-natural-asd-lamastus -->

<a id="grind-leuchtfeuer--esmeralda-geisha-buena-vista-3"></a>
<!-- BEGIN_GRINDER id=leuchtfeuer--esmeralda-geisha-buena-vista-3 -->
#### Esmeralda Geisha · Buena Vista 3

**Coffee ID:** `leuchtfeuer--esmeralda-geisha-buena-vista-3` · [Coffee bio and brew steps](COFFEES.md#coffee-leuchtfeuer--esmeralda-geisha-buena-vista-3)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.3.1` | 151 | `2.2.2`–`2.4.0` | 142–160 | ±4 clicks |
| Hario Switch immersion | `2.2.5` | 145 | `2.1.5`–`2.3.5` | 135–155 | ±5 clicks |
| AeroPress | `1.3.9` | 99 | `1.3.0`–`1.4.8` | 90–108 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.3.1`**, or **151 clicks** clockwise from zero.
- Exploratory range: `2.2.2`–`2.4.0` (142–160 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **coarse**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.2.5`**, or **145 clicks** clockwise from zero.
- Exploratory range: `2.1.5`–`2.3.5` (135–155 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.3.9`**, or **99 clicks** clockwise from zero.
- Exploratory range: `1.3.0`–`1.4.8` (90–108 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=leuchtfeuer--esmeralda-geisha-buena-vista-3 -->

<a id="grind-leuchtfeuer--soledad-geisha-washed"></a>
<!-- BEGIN_GRINDER id=leuchtfeuer--soledad-geisha-washed -->
#### Soledad Geisha Washed

**Coffee ID:** `leuchtfeuer--soledad-geisha-washed` · [Coffee bio and brew steps](COFFEES.md#coffee-leuchtfeuer--soledad-geisha-washed)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.3.1` | 151 | `2.2.2`–`2.4.0` | 142–160 | ±4 clicks |
| Hario Switch immersion | `2.2.5` | 145 | `2.1.5`–`2.3.5` | 135–155 | ±5 clicks |
| AeroPress | `1.3.9` | 99 | `1.3.0`–`1.4.8` | 90–108 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.3.1`**, or **151 clicks** clockwise from zero.
- Exploratory range: `2.2.2`–`2.4.0` (142–160 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **coarse**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.2.5`**, or **145 clicks** clockwise from zero.
- Exploratory range: `2.1.5`–`2.3.5` (135–155 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.3.9`**, or **99 clicks** clockwise from zero.
- Exploratory range: `1.3.0`–`1.4.8` (90–108 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=leuchtfeuer--soledad-geisha-washed -->

<a id="grind-leuchtfeuer--indelible-geisha"></a>
<!-- BEGIN_GRINDER id=leuchtfeuer--indelible-geisha -->
#### Indelible Geisha

**Coffee ID:** `leuchtfeuer--indelible-geisha` · [Coffee bio and brew steps](COFFEES.md#coffee-leuchtfeuer--indelible-geisha)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.3.3` | 153 | `2.2.4`–`2.4.2` | 144–162 | ±4 clicks |
| Hario Switch immersion | `2.3.1` | 151 | `2.2.1`–`2.4.1` | 141–161 | ±5 clicks |
| AeroPress | `1.4.1` | 101 | `1.3.2`–`1.5.0` | 92–110 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.3.3`**, or **153 clicks** clockwise from zero.
- Exploratory range: `2.2.4`–`2.4.2` (144–162 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **coarse**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.3.1`**, or **151 clicks** clockwise from zero.
- Exploratory range: `2.2.1`–`2.4.1` (141–161 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.4.1`**, or **101 clicks** clockwise from zero.
- Exploratory range: `1.3.2`–`1.5.0` (92–110 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=leuchtfeuer--indelible-geisha -->

<a id="grind-leuchtfeuer--umbra-geisha"></a>
<!-- BEGIN_GRINDER id=leuchtfeuer--umbra-geisha -->
#### Umbra Geisha

**Coffee ID:** `leuchtfeuer--umbra-geisha` · [Coffee bio and brew steps](COFFEES.md#coffee-leuchtfeuer--umbra-geisha)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.3.1` | 151 | `2.2.2`–`2.4.0` | 142–160 | ±4 clicks |
| Hario Switch immersion | `2.2.5` | 145 | `2.1.5`–`2.3.5` | 135–155 | ±5 clicks |
| AeroPress | `1.3.9` | 99 | `1.3.0`–`1.4.8` | 90–108 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.3.1`**, or **151 clicks** clockwise from zero.
- Exploratory range: `2.2.2`–`2.4.0` (142–160 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **coarse**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.2.5`**, or **145 clicks** clockwise from zero.
- Exploratory range: `2.1.5`–`2.3.5` (135–155 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.3.9`**, or **99 clicks** clockwise from zero.
- Exploratory range: `1.3.0`–`1.4.8` (90–108 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=leuchtfeuer--umbra-geisha -->

<a id="grind-leuchtfeuer--echo-geisha"></a>
<!-- BEGIN_GRINDER id=leuchtfeuer--echo-geisha -->
#### Echo Geisha

**Coffee ID:** `leuchtfeuer--echo-geisha` · [Coffee bio and brew steps](COFFEES.md#coffee-leuchtfeuer--echo-geisha)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.3.3` | 153 | `2.2.4`–`2.4.2` | 144–162 | ±4 clicks |
| Hario Switch immersion | `2.3.1` | 151 | `2.2.1`–`2.4.1` | 141–161 | ±5 clicks |
| AeroPress | `1.4.1` | 101 | `1.3.2`–`1.5.0` | 92–110 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.3.3`**, or **153 clicks** clockwise from zero.
- Exploratory range: `2.2.4`–`2.4.2` (144–162 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **coarse**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.3.1`**, or **151 clicks** clockwise from zero.
- Exploratory range: `2.2.1`–`2.4.1` (141–161 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.4.1`**, or **101 clicks** clockwise from zero.
- Exploratory range: `1.3.2`–`1.5.0` (92–110 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=leuchtfeuer--echo-geisha -->

<a id="grind-leuchtfeuer--interstellar-geisha"></a>
<!-- BEGIN_GRINDER id=leuchtfeuer--interstellar-geisha -->
#### Interstellar Geisha

**Coffee ID:** `leuchtfeuer--interstellar-geisha` · [Coffee bio and brew steps](COFFEES.md#coffee-leuchtfeuer--interstellar-geisha)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.3.3` | 153 | `2.2.4`–`2.4.2` | 144–162 | ±4 clicks |
| Hario Switch immersion | `2.2.7` | 147 | `2.1.7`–`2.3.7` | 137–157 | ±5 clicks |
| AeroPress | `1.4.1` | 101 | `1.3.2`–`1.5.0` | 92–110 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.3.3`**, or **153 clicks** clockwise from zero.
- Exploratory range: `2.2.4`–`2.4.2` (144–162 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **coarse**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.2.7`**, or **147 clicks** clockwise from zero.
- Exploratory range: `2.1.7`–`2.3.7` (137–157 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.4.1`**, or **101 clicks** clockwise from zero.
- Exploratory range: `1.3.2`–`1.5.0` (92–110 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=leuchtfeuer--interstellar-geisha -->

<a id="grind-leuchtfeuer--horizon-geisha"></a>
<!-- BEGIN_GRINDER id=leuchtfeuer--horizon-geisha -->
#### Horizon Geisha

**Coffee ID:** `leuchtfeuer--horizon-geisha` · [Coffee bio and brew steps](COFFEES.md#coffee-leuchtfeuer--horizon-geisha)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.3.3` | 153 | `2.2.4`–`2.4.2` | 144–162 | ±4 clicks |
| Hario Switch immersion | `2.3.1` | 151 | `2.2.1`–`2.4.1` | 141–161 | ±5 clicks |
| AeroPress | `1.4.1` | 101 | `1.3.2`–`1.5.0` | 92–110 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.3.3`**, or **153 clicks** clockwise from zero.
- Exploratory range: `2.2.4`–`2.4.2` (144–162 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **coarse**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.3.1`**, or **151 clicks** clockwise from zero.
- Exploratory range: `2.2.1`–`2.4.1` (141–161 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.4.1`**, or **101 clicks** clockwise from zero.
- Exploratory range: `1.3.2`–`1.5.0` (92–110 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=leuchtfeuer--horizon-geisha -->

<a id="grind-leuchtfeuer--terroir-geisha"></a>
<!-- BEGIN_GRINDER id=leuchtfeuer--terroir-geisha -->
#### Terroir Geisha

**Coffee ID:** `leuchtfeuer--terroir-geisha` · [Coffee bio and brew steps](COFFEES.md#coffee-leuchtfeuer--terroir-geisha)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.3.1` | 151 | `2.2.2`–`2.4.0` | 142–160 | ±4 clicks |
| Hario Switch immersion | `2.2.5` | 145 | `2.1.5`–`2.3.5` | 135–155 | ±5 clicks |
| AeroPress | `1.3.9` | 99 | `1.3.0`–`1.4.8` | 90–108 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.3.1`**, or **151 clicks** clockwise from zero.
- Exploratory range: `2.2.2`–`2.4.0` (142–160 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **coarse**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.2.5`**, or **145 clicks** clockwise from zero.
- Exploratory range: `2.1.5`–`2.3.5` (135–155 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.3.9`**, or **99 clicks** clockwise from zero.
- Exploratory range: `1.3.0`–`1.4.8` (90–108 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=leuchtfeuer--terroir-geisha -->

<a id="grind-leuchtfeuer--symbiosis-geisha"></a>
<!-- BEGIN_GRINDER id=leuchtfeuer--symbiosis-geisha -->
#### Symbiosis Geisha

**Coffee ID:** `leuchtfeuer--symbiosis-geisha` · [Coffee bio and brew steps](COFFEES.md#coffee-leuchtfeuer--symbiosis-geisha)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.3.3` | 153 | `2.2.4`–`2.4.2` | 144–162 | ±4 clicks |
| Hario Switch immersion | `2.3.1` | 151 | `2.2.1`–`2.4.1` | 141–161 | ±5 clicks |
| AeroPress | `1.4.1` | 101 | `1.3.2`–`1.5.0` | 92–110 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.3.3`**, or **153 clicks** clockwise from zero.
- Exploratory range: `2.2.4`–`2.4.2` (144–162 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **coarse**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.3.1`**, or **151 clicks** clockwise from zero.
- Exploratory range: `2.2.1`–`2.4.1` (141–161 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.4.1`**, or **101 clicks** clockwise from zero.
- Exploratory range: `1.3.2`–`1.5.0` (92–110 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=leuchtfeuer--symbiosis-geisha -->

<a id="grind-leuchtfeuer--nirvana-geisha"></a>
<!-- BEGIN_GRINDER id=leuchtfeuer--nirvana-geisha -->
#### Nirvana Geisha

**Coffee ID:** `leuchtfeuer--nirvana-geisha` · [Coffee bio and brew steps](COFFEES.md#coffee-leuchtfeuer--nirvana-geisha)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.3.3` | 153 | `2.2.4`–`2.4.2` | 144–162 | ±4 clicks |
| Hario Switch immersion | `2.3.1` | 151 | `2.2.1`–`2.4.1` | 141–161 | ±5 clicks |
| AeroPress | `1.4.1` | 101 | `1.3.2`–`1.5.0` | 92–110 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.3.3`**, or **153 clicks** clockwise from zero.
- Exploratory range: `2.2.4`–`2.4.2` (144–162 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **coarse**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.3.1`**, or **151 clicks** clockwise from zero.
- Exploratory range: `2.2.1`–`2.4.1` (141–161 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.4.1`**, or **101 clicks** clockwise from zero.
- Exploratory range: `1.3.2`–`1.5.0` (92–110 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=leuchtfeuer--nirvana-geisha -->

<a id="grind-leuchtfeuer--aril-geisha"></a>
<!-- BEGIN_GRINDER id=leuchtfeuer--aril-geisha -->
#### Aril Geisha

**Coffee ID:** `leuchtfeuer--aril-geisha` · [Coffee bio and brew steps](COFFEES.md#coffee-leuchtfeuer--aril-geisha)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.3.3` | 153 | `2.2.4`–`2.4.2` | 144–162 | ±4 clicks |
| Hario Switch immersion | `2.3.1` | 151 | `2.2.1`–`2.4.1` | 141–161 | ±5 clicks |
| AeroPress | `1.4.1` | 101 | `1.3.2`–`1.5.0` | 92–110 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.3.3`**, or **153 clicks** clockwise from zero.
- Exploratory range: `2.2.4`–`2.4.2` (144–162 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **coarse**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.3.1`**, or **151 clicks** clockwise from zero.
- Exploratory range: `2.2.1`–`2.4.1` (141–161 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.4.1`**, or **101 clicks** clockwise from zero.
- Exploratory range: `1.3.2`–`1.5.0` (92–110 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=leuchtfeuer--aril-geisha -->

---

### The Barn

<a id="grind-the-barn--jairo-arcila"></a>
<!-- BEGIN_GRINDER id=the-barn--jairo-arcila -->
#### Jairo Arcila

**Coffee ID:** `the-barn--jairo-arcila` · [Coffee bio and brew steps](COFFEES.md#coffee-the-barn--jairo-arcila)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.1.2` | 132 | `2.0.3`–`2.2.1` | 123–141 | ±4 clicks |
| Hario Switch immersion | `2.3.1` | 151 | `2.2.1`–`2.4.1` | 141–161 | ±5 clicks |
| AeroPress | `1.4.3` | 103 | `1.3.4`–`1.5.2` | 94–112 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.1.2`**, or **132 clicks** clockwise from zero.
- Exploratory range: `2.0.3`–`2.2.1` (123–141 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine (house guide: 22 clicks; grinder unspecified)**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process. The Barn’s 22-click note does NOT identify the grinder; it is not an X-Ultra setting.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.3.1`**, or **151 clicks** clockwise from zero.
- Exploratory range: `2.2.1`–`2.4.1` (141–161 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.4.3`**, or **103 clicks** clockwise from zero.
- Exploratory range: `1.3.4`–`1.5.2` (94–112 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=the-barn--jairo-arcila -->

<a id="grind-the-barn--autumn-coffee"></a>
<!-- BEGIN_GRINDER id=the-barn--autumn-coffee -->
#### Autumn Coffee

**Coffee ID:** `the-barn--autumn-coffee` · [Coffee bio and brew steps](COFFEES.md#coffee-the-barn--autumn-coffee)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.1.0` | 130 | `2.0.1`–`2.1.9` | 121–139 | ±4 clicks |
| Hario Switch immersion | `2.3.2` | 152 | `2.2.2`–`2.4.2` | 142–162 | ±5 clicks |
| AeroPress | `1.4.1` | 101 | `1.3.2`–`1.5.0` | 92–110 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.1.0`**, or **130 clicks** clockwise from zero.
- Exploratory range: `2.0.1`–`2.1.9` (121–139 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine (house guide: 22 clicks; grinder unspecified)**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process. The Barn’s 22-click note does NOT identify the grinder; it is not an X-Ultra setting.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.3.2`**, or **152 clicks** clockwise from zero.
- Exploratory range: `2.2.2`–`2.4.2` (142–162 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.4.1`**, or **101 clicks** clockwise from zero.
- Exploratory range: `1.3.2`–`1.5.0` (92–110 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=the-barn--autumn-coffee -->

<a id="grind-the-barn--andres-ramirez"></a>
<!-- BEGIN_GRINDER id=the-barn--andres-ramirez -->
#### Andres Ramirez

**Coffee ID:** `the-barn--andres-ramirez` · [Coffee bio and brew steps](COFFEES.md#coffee-the-barn--andres-ramirez)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.1.0` | 130 | `2.0.1`–`2.1.9` | 121–139 | ±4 clicks |
| Hario Switch immersion | `2.3.2` | 152 | `2.2.2`–`2.4.2` | 142–162 | ±5 clicks |
| AeroPress | `1.4.1` | 101 | `1.3.2`–`1.5.0` | 92–110 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.1.0`**, or **130 clicks** clockwise from zero.
- Exploratory range: `2.0.1`–`2.1.9` (121–139 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine (house guide: 22 clicks; grinder unspecified)**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process. The Barn’s 22-click note does NOT identify the grinder; it is not an X-Ultra setting.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.3.2`**, or **152 clicks** clockwise from zero.
- Exploratory range: `2.2.2`–`2.4.2` (142–162 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.4.1`**, or **101 clicks** clockwise from zero.
- Exploratory range: `1.3.2`–`1.5.0` (92–110 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=the-barn--andres-ramirez -->

<a id="grind-the-barn--himalaya-maragogype"></a>
<!-- BEGIN_GRINDER id=the-barn--himalaya-maragogype -->
#### Himalaya Maragogype

**Coffee ID:** `the-barn--himalaya-maragogype` · [Coffee bio and brew steps](COFFEES.md#coffee-the-barn--himalaya-maragogype)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.1.0` | 130 | `2.0.1`–`2.1.9` | 121–139 | ±4 clicks |
| Hario Switch immersion | `2.3.2` | 152 | `2.2.2`–`2.4.2` | 142–162 | ±5 clicks |
| AeroPress | `1.4.1` | 101 | `1.3.2`–`1.5.0` | 92–110 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.1.0`**, or **130 clicks** clockwise from zero.
- Exploratory range: `2.0.1`–`2.1.9` (121–139 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine (house guide: 22 clicks; grinder unspecified)**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process. The Barn’s 22-click note does NOT identify the grinder; it is not an X-Ultra setting.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.3.2`**, or **152 clicks** clockwise from zero.
- Exploratory range: `2.2.2`–`2.4.2` (142–162 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.4.1`**, or **101 clicks** clockwise from zero.
- Exploratory range: `1.3.2`–`1.5.0` (92–110 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=the-barn--himalaya-maragogype -->

<a id="grind-the-barn--los-pirineos-anaerobic"></a>
<!-- BEGIN_GRINDER id=the-barn--los-pirineos-anaerobic -->
#### Los Pirineos Anaerobic

**Coffee ID:** `the-barn--los-pirineos-anaerobic` · [Coffee bio and brew steps](COFFEES.md#coffee-the-barn--los-pirineos-anaerobic)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.1.2` | 132 | `2.0.3`–`2.2.1` | 123–141 | ±4 clicks |
| Hario Switch immersion | `2.3.1` | 151 | `2.2.1`–`2.4.1` | 141–161 | ±5 clicks |
| AeroPress | `1.4.3` | 103 | `1.3.4`–`1.5.2` | 94–112 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.1.2`**, or **132 clicks** clockwise from zero.
- Exploratory range: `2.0.3`–`2.2.1` (123–141 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine (house guide: 22 clicks; grinder unspecified)**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process. The Barn’s 22-click note does NOT identify the grinder; it is not an X-Ultra setting.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.3.1`**, or **151 clicks** clockwise from zero.
- Exploratory range: `2.2.1`–`2.4.1` (141–161 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.4.3`**, or **103 clicks** clockwise from zero.
- Exploratory range: `1.3.4`–`1.5.2` (94–112 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=the-barn--los-pirineos-anaerobic -->

<a id="grind-the-barn--mohamed-ali"></a>
<!-- BEGIN_GRINDER id=the-barn--mohamed-ali -->
#### Mohamed Ali

**Coffee ID:** `the-barn--mohamed-ali` · [Coffee bio and brew steps](COFFEES.md#coffee-the-barn--mohamed-ali)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.1.0` | 130 | `2.0.1`–`2.1.9` | 121–139 | ±4 clicks |
| Hario Switch immersion | `2.2.5` | 145 | `2.1.5`–`2.3.5` | 135–155 | ±5 clicks |
| AeroPress | `1.4.1` | 101 | `1.3.2`–`1.5.0` | 92–110 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.1.0`**, or **130 clicks** clockwise from zero.
- Exploratory range: `2.0.1`–`2.1.9` (121–139 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine (house guide: 22 clicks; grinder unspecified)**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process. The Barn’s 22-click note does NOT identify the grinder; it is not an X-Ultra setting.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.2.5`**, or **145 clicks** clockwise from zero.
- Exploratory range: `2.1.5`–`2.3.5` (135–155 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.4.1`**, or **101 clicks** clockwise from zero.
- Exploratory range: `1.3.2`–`1.5.0` (92–110 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=the-barn--mohamed-ali -->

<a id="grind-the-barn--la-colina-washed"></a>
<!-- BEGIN_GRINDER id=the-barn--la-colina-washed -->
#### La Colina Washed

**Coffee ID:** `the-barn--la-colina-washed` · [Coffee bio and brew steps](COFFEES.md#coffee-the-barn--la-colina-washed)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.1.0` | 130 | `2.0.1`–`2.1.9` | 121–139 | ±4 clicks |
| Hario Switch immersion | `2.3.2` | 152 | `2.2.2`–`2.4.2` | 142–162 | ±5 clicks |
| AeroPress | `1.4.1` | 101 | `1.3.2`–`1.5.0` | 92–110 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.1.0`**, or **130 clicks** clockwise from zero.
- Exploratory range: `2.0.1`–`2.1.9` (121–139 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine (house guide: 22 clicks; grinder unspecified)**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process. The Barn’s 22-click note does NOT identify the grinder; it is not an X-Ultra setting.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.3.2`**, or **152 clicks** clockwise from zero.
- Exploratory range: `2.2.2`–`2.4.2` (142–162 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.4.1`**, or **101 clicks** clockwise from zero.
- Exploratory range: `1.3.2`–`1.5.0` (92–110 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=the-barn--la-colina-washed -->

<a id="grind-the-barn--volcan-azul-obata"></a>
<!-- BEGIN_GRINDER id=the-barn--volcan-azul-obata -->
#### Volcan Azul Obatá

**Coffee ID:** `the-barn--volcan-azul-obata` · [Coffee bio and brew steps](COFFEES.md#coffee-the-barn--volcan-azul-obata)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.1.2` | 132 | `2.0.3`–`2.2.1` | 123–141 | ±4 clicks |
| Hario Switch immersion | `2.3.1` | 151 | `2.2.1`–`2.4.1` | 141–161 | ±5 clicks |
| AeroPress | `1.4.3` | 103 | `1.3.4`–`1.5.2` | 94–112 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.1.2`**, or **132 clicks** clockwise from zero.
- Exploratory range: `2.0.3`–`2.2.1` (123–141 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine (house guide: 22 clicks; grinder unspecified)**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process. The Barn’s 22-click note does NOT identify the grinder; it is not an X-Ultra setting.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.3.1`**, or **151 clicks** clockwise from zero.
- Exploratory range: `2.2.1`–`2.4.1` (141–161 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.4.3`**, or **103 clicks** clockwise from zero.
- Exploratory range: `1.3.4`–`1.5.2` (94–112 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=the-barn--volcan-azul-obata -->

<a id="grind-the-barn--atlas-coffee"></a>
<!-- BEGIN_GRINDER id=the-barn--atlas-coffee -->
#### Atlas Coffee

**Coffee ID:** `the-barn--atlas-coffee` · [Coffee bio and brew steps](COFFEES.md#coffee-the-barn--atlas-coffee)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.1.0` | 130 | `2.0.1`–`2.1.9` | 121–139 | ±4 clicks |
| Hario Switch immersion | `2.3.2` | 152 | `2.2.2`–`2.4.2` | 142–162 | ±5 clicks |
| AeroPress | `1.4.1` | 101 | `1.3.2`–`1.5.0` | 92–110 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.1.0`**, or **130 clicks** clockwise from zero.
- Exploratory range: `2.0.1`–`2.1.9` (121–139 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine (house guide: 22 clicks; grinder unspecified)**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process. The Barn’s 22-click note does NOT identify the grinder; it is not an X-Ultra setting.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.3.2`**, or **152 clicks** clockwise from zero.
- Exploratory range: `2.2.2`–`2.4.2` (142–162 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.4.1`**, or **101 clicks** clockwise from zero.
- Exploratory range: `1.3.2`–`1.5.0` (92–110 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=the-barn--atlas-coffee -->

<a id="grind-the-barn--volcan-azul-caturra"></a>
<!-- BEGIN_GRINDER id=the-barn--volcan-azul-caturra -->
#### Volcan Azul Caturra

**Coffee ID:** `the-barn--volcan-azul-caturra` · [Coffee bio and brew steps](COFFEES.md#coffee-the-barn--volcan-azul-caturra)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.1.0` | 130 | `2.0.1`–`2.1.9` | 121–139 | ±4 clicks |
| Hario Switch immersion | `2.2.9` | 149 | `2.1.9`–`2.3.9` | 139–159 | ±5 clicks |
| AeroPress | `1.4.1` | 101 | `1.3.2`–`1.5.0` | 92–110 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.1.0`**, or **130 clicks** clockwise from zero.
- Exploratory range: `2.0.1`–`2.1.9` (121–139 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine (house guide: 22 clicks; grinder unspecified)**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process. The Barn’s 22-click note does NOT identify the grinder; it is not an X-Ultra setting.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.2.9`**, or **149 clicks** clockwise from zero.
- Exploratory range: `2.1.9`–`2.3.9` (139–159 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.4.1`**, or **101 clicks** clockwise from zero.
- Exploratory range: `1.3.2`–`1.5.0` (92–110 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=the-barn--volcan-azul-caturra -->

<a id="grind-the-barn--our-plot-daterra"></a>
<!-- BEGIN_GRINDER id=the-barn--our-plot-daterra -->
#### Our Plot Daterra

**Coffee ID:** `the-barn--our-plot-daterra` · [Coffee bio and brew steps](COFFEES.md#coffee-the-barn--our-plot-daterra)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.1.0` | 130 | `2.0.1`–`2.1.9` | 121–139 | ±4 clicks |
| Hario Switch immersion | `2.2.9` | 149 | `2.1.9`–`2.3.9` | 139–159 | ±5 clicks |
| AeroPress | `1.4.1` | 101 | `1.3.2`–`1.5.0` | 92–110 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.1.0`**, or **130 clicks** clockwise from zero.
- Exploratory range: `2.0.1`–`2.1.9` (121–139 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine (house guide: 22 clicks; grinder unspecified)**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process. The Barn’s 22-click note does NOT identify the grinder; it is not an X-Ultra setting.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.2.9`**, or **149 clicks** clockwise from zero.
- Exploratory range: `2.1.9`–`2.3.9` (139–159 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.4.1`**, or **101 clicks** clockwise from zero.
- Exploratory range: `1.3.2`–`1.5.0` (92–110 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=the-barn--our-plot-daterra -->

<a id="grind-the-barn--kayon-mountain"></a>
<!-- BEGIN_GRINDER id=the-barn--kayon-mountain -->
#### Kayon Mountain

**Coffee ID:** `the-barn--kayon-mountain` · [Coffee bio and brew steps](COFFEES.md#coffee-the-barn--kayon-mountain)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.1.0` | 130 | `2.0.1`–`2.1.9` | 121–139 | ±4 clicks |
| Hario Switch immersion | `2.2.5` | 145 | `2.1.5`–`2.3.5` | 135–155 | ±5 clicks |
| AeroPress | `1.4.1` | 101 | `1.3.2`–`1.5.0` | 92–110 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.1.0`**, or **130 clicks** clockwise from zero.
- Exploratory range: `2.0.1`–`2.1.9` (121–139 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine (house guide: 22 clicks; grinder unspecified)**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process. The Barn’s 22-click note does NOT identify the grinder; it is not an X-Ultra setting.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.2.5`**, or **145 clicks** clockwise from zero.
- Exploratory range: `2.1.5`–`2.3.5` (135–155 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.4.1`**, or **101 clicks** clockwise from zero.
- Exploratory range: `1.3.2`–`1.5.0` (92–110 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=the-barn--kayon-mountain -->

<a id="grind-the-barn--genesis-coffee"></a>
<!-- BEGIN_GRINDER id=the-barn--genesis-coffee -->
#### Genesis Coffee

**Coffee ID:** `the-barn--genesis-coffee` · [Coffee bio and brew steps](COFFEES.md#coffee-the-barn--genesis-coffee)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.1.0` | 130 | `2.0.1`–`2.1.9` | 121–139 | ±4 clicks |
| Hario Switch immersion | `2.2.5` | 145 | `2.1.5`–`2.3.5` | 135–155 | ±5 clicks |
| AeroPress | `1.4.1` | 101 | `1.3.2`–`1.5.0` | 92–110 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.1.0`**, or **130 clicks** clockwise from zero.
- Exploratory range: `2.0.1`–`2.1.9` (121–139 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine (house guide: 22 clicks; grinder unspecified)**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process. The Barn’s 22-click note does NOT identify the grinder; it is not an X-Ultra setting.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.2.5`**, or **145 clicks** clockwise from zero.
- Exploratory range: `2.1.5`–`2.3.5` (135–155 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.4.1`**, or **101 clicks** clockwise from zero.
- Exploratory range: `1.3.2`–`1.5.0` (92–110 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=the-barn--genesis-coffee -->

<a id="grind-the-barn--gatomboya-aa"></a>
<!-- BEGIN_GRINDER id=the-barn--gatomboya-aa -->
#### Gatomboya AA

**Coffee ID:** `the-barn--gatomboya-aa` · [Coffee bio and brew steps](COFFEES.md#coffee-the-barn--gatomboya-aa)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.1.0` | 130 | `2.0.1`–`2.1.9` | 121–139 | ±4 clicks |
| Hario Switch immersion | `2.2.5` | 145 | `2.1.5`–`2.3.5` | 135–155 | ±5 clicks |
| AeroPress | `1.4.1` | 101 | `1.3.2`–`1.5.0` | 92–110 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.1.0`**, or **130 clicks** clockwise from zero.
- Exploratory range: `2.0.1`–`2.1.9` (121–139 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine (house guide: 22 clicks; grinder unspecified)**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process. The Barn’s 22-click note does NOT identify the grinder; it is not an X-Ultra setting.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.2.5`**, or **145 clicks** clockwise from zero.
- Exploratory range: `2.1.5`–`2.3.5` (135–155 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.4.1`**, or **101 clicks** clockwise from zero.
- Exploratory range: `1.3.2`–`1.5.0` (92–110 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=the-barn--gatomboya-aa -->

<a id="grind-the-barn--elemental-coffee"></a>
<!-- BEGIN_GRINDER id=the-barn--elemental-coffee -->
#### Elemental Coffee

**Coffee ID:** `the-barn--elemental-coffee` · [Coffee bio and brew steps](COFFEES.md#coffee-the-barn--elemental-coffee)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.1.0` | 130 | `2.0.1`–`2.1.9` | 121–139 | ±4 clicks |
| Hario Switch immersion | `2.3.2` | 152 | `2.2.2`–`2.4.2` | 142–162 | ±5 clicks |
| AeroPress | `1.4.1` | 101 | `1.3.2`–`1.5.0` | 92–110 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.1.0`**, or **130 clicks** clockwise from zero.
- Exploratory range: `2.0.1`–`2.1.9` (121–139 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine (house guide: 22 clicks; grinder unspecified)**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process. The Barn’s 22-click note does NOT identify the grinder; it is not an X-Ultra setting.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.3.2`**, or **152 clicks** clockwise from zero.
- Exploratory range: `2.2.2`–`2.4.2` (142–162 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.4.1`**, or **101 clicks** clockwise from zero.
- Exploratory range: `1.3.2`–`1.5.0` (92–110 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=the-barn--elemental-coffee -->

<a id="grind-the-barn--bekele-kechara"></a>
<!-- BEGIN_GRINDER id=the-barn--bekele-kechara -->
#### Bekele Kechara

**Coffee ID:** `the-barn--bekele-kechara` · [Coffee bio and brew steps](COFFEES.md#coffee-the-barn--bekele-kechara)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.1.0` | 130 | `2.0.1`–`2.1.9` | 121–139 | ±4 clicks |
| Hario Switch immersion | `2.3.2` | 152 | `2.2.2`–`2.4.2` | 142–162 | ±5 clicks |
| AeroPress | `1.4.1` | 101 | `1.3.2`–`1.5.0` | 92–110 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.1.0`**, or **130 clicks** clockwise from zero.
- Exploratory range: `2.0.1`–`2.1.9` (121–139 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine (house guide: 22 clicks; grinder unspecified)**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process. The Barn’s 22-click note does NOT identify the grinder; it is not an X-Ultra setting.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.3.2`**, or **152 clicks** clockwise from zero.
- Exploratory range: `2.2.2`–`2.4.2` (142–162 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.4.1`**, or **101 clicks** clockwise from zero.
- Exploratory range: `1.3.2`–`1.5.0` (92–110 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=the-barn--bekele-kechara -->

<a id="grind-the-barn--guava-banana"></a>
<!-- BEGIN_GRINDER id=the-barn--guava-banana -->
#### Guava Banana

**Coffee ID:** `the-barn--guava-banana` · [Coffee bio and brew steps](COFFEES.md#coffee-the-barn--guava-banana)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.1.2` | 132 | `2.0.3`–`2.2.1` | 123–141 | ±4 clicks |
| Hario Switch immersion | `2.3.1` | 151 | `2.2.1`–`2.4.1` | 141–161 | ±5 clicks |
| AeroPress | `1.4.3` | 103 | `1.3.4`–`1.5.2` | 94–112 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.1.2`**, or **132 clicks** clockwise from zero.
- Exploratory range: `2.0.3`–`2.2.1` (123–141 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine (house guide: 22 clicks; grinder unspecified)**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process. The Barn’s 22-click note does NOT identify the grinder; it is not an X-Ultra setting.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.3.1`**, or **151 clicks** clockwise from zero.
- Exploratory range: `2.2.1`–`2.4.1` (141–161 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.4.3`**, or **103 clicks** clockwise from zero.
- Exploratory range: `1.3.4`–`1.5.2` (94–112 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=the-barn--guava-banana -->

<a id="grind-the-barn--a-drop-of-science"></a>
<!-- BEGIN_GRINDER id=the-barn--a-drop-of-science -->
#### A Drop of Science

**Coffee ID:** `the-barn--a-drop-of-science` · [Coffee bio and brew steps](COFFEES.md#coffee-the-barn--a-drop-of-science)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.1.0` | 130 | `2.0.1`–`2.1.9` | 121–139 | ±4 clicks |
| Hario Switch immersion | `2.3.2` | 152 | `2.2.2`–`2.4.2` | 142–162 | ±5 clicks |
| AeroPress | `1.4.1` | 101 | `1.3.2`–`1.5.0` | 92–110 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.1.0`**, or **130 clicks** clockwise from zero.
- Exploratory range: `2.0.1`–`2.1.9` (121–139 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine (house guide: 22 clicks; grinder unspecified)**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process. The Barn’s 22-click note does NOT identify the grinder; it is not an X-Ultra setting.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.3.2`**, or **152 clicks** clockwise from zero.
- Exploratory range: `2.2.2`–`2.4.2` (142–162 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.4.1`**, or **101 clicks** clockwise from zero.
- Exploratory range: `1.3.2`–`1.5.0` (92–110 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=the-barn--a-drop-of-science -->

<a id="grind-the-barn--decaf-balanced"></a>
<!-- BEGIN_GRINDER id=the-barn--decaf-balanced -->
#### Decaf Balanced

**Coffee ID:** `the-barn--decaf-balanced` · [Coffee bio and brew steps](COFFEES.md#coffee-the-barn--decaf-balanced)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.1.0` | 130 | `2.0.1`–`2.1.9` | 121–139 | ±4 clicks |
| Hario Switch immersion | `2.3.2` | 152 | `2.2.2`–`2.4.2` | 142–162 | ±5 clicks |
| AeroPress | `1.4.1` | 101 | `1.3.2`–`1.5.0` | 92–110 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.1.0`**, or **130 clicks** clockwise from zero.
- Exploratory range: `2.0.1`–`2.1.9` (121–139 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine (house guide: 22 clicks; grinder unspecified)**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process. The Barn’s 22-click note does NOT identify the grinder; it is not an X-Ultra setting.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.3.2`**, or **152 clicks** clockwise from zero.
- Exploratory range: `2.2.2`–`2.4.2` (142–162 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.4.1`**, or **101 clicks** clockwise from zero.
- Exploratory range: `1.3.2`–`1.5.0` (92–110 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=the-barn--decaf-balanced -->

<a id="grind-the-barn--decaf-funky"></a>
<!-- BEGIN_GRINDER id=the-barn--decaf-funky -->
#### Decaf Funky

**Coffee ID:** `the-barn--decaf-funky` · [Coffee bio and brew steps](COFFEES.md#coffee-the-barn--decaf-funky)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.1.2` | 132 | `2.0.3`–`2.2.1` | 123–141 | ±4 clicks |
| Hario Switch immersion | `2.3.1` | 151 | `2.2.1`–`2.4.1` | 141–161 | ±5 clicks |
| AeroPress | `1.4.3` | 103 | `1.3.4`–`1.5.2` | 94–112 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.1.2`**, or **132 clicks** clockwise from zero.
- Exploratory range: `2.0.3`–`2.2.1` (123–141 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine (house guide: 22 clicks; grinder unspecified)**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process. The Barn’s 22-click note does NOT identify the grinder; it is not an X-Ultra setting.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.3.1`**, or **151 clicks** clockwise from zero.
- Exploratory range: `2.2.1`–`2.4.1` (141–161 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.4.3`**, or **103 clicks** clockwise from zero.
- Exploratory range: `1.3.4`–`1.5.2` (94–112 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=the-barn--decaf-funky -->

<a id="grind-the-barn--sundrop"></a>
<!-- BEGIN_GRINDER id=the-barn--sundrop -->
#### Sundrop

**Coffee ID:** `the-barn--sundrop` · [Coffee bio and brew steps](COFFEES.md#coffee-the-barn--sundrop)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.1.0` | 130 | `2.0.1`–`2.1.9` | 121–139 | ±4 clicks |
| Hario Switch immersion | `2.3.2` | 152 | `2.2.2`–`2.4.2` | 142–162 | ±5 clicks |
| AeroPress | `1.4.1` | 101 | `1.3.2`–`1.5.0` | 92–110 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.1.0`**, or **130 clicks** clockwise from zero.
- Exploratory range: `2.0.1`–`2.1.9` (121–139 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine (house guide: 22 clicks; grinder unspecified)**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process. The Barn’s 22-click note does NOT identify the grinder; it is not an X-Ultra setting.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.3.2`**, or **152 clicks** clockwise from zero.
- Exploratory range: `2.2.2`–`2.4.2` (142–162 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.4.1`**, or **101 clicks** clockwise from zero.
- Exploratory range: `1.3.2`–`1.5.0` (92–110 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=the-barn--sundrop -->

<a id="grind-the-barn--bishan-wate"></a>
<!-- BEGIN_GRINDER id=the-barn--bishan-wate -->
#### Bishan Wate

**Coffee ID:** `the-barn--bishan-wate` · [Coffee bio and brew steps](COFFEES.md#coffee-the-barn--bishan-wate)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.1.0` | 130 | `2.0.1`–`2.1.9` | 121–139 | ±4 clicks |
| Hario Switch immersion | `2.2.5` | 145 | `2.1.5`–`2.3.5` | 135–155 | ±5 clicks |
| AeroPress | `1.4.1` | 101 | `1.3.2`–`1.5.0` | 92–110 | ±4 clicks |

**Hario V60 pour-over**

- Starting setting: **`2.1.0`**, or **130 clicks** clockwise from zero.
- Exploratory range: `2.0.1`–`2.1.9` (121–139 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium-fine (house guide: 22 clicks; grinder unspecified)**.
- Dial-in advice: If the V60 is fast and tastes hollow, sour, or thin, go 4 clicks finer. If it stalls or tastes dry/astringent, go 4 clicks coarser. Compare with the existing recipe’s drawdown target; taste takes priority.
- Basis: Based on 1Zpresso pour-over band (approximately 120–160 clicks), original grind wording, and light editorial adjustment for roast/process. The Barn’s 22-click note does NOT identify the grinder; it is not an X-Ultra setting.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**Hario Switch immersion**

- Starting setting: **`2.2.5`**, or **145 clicks** clockwise from zero.
- Exploratory range: `2.1.5`–`2.3.5` (135–155 clicks).
- Change size: **5 clicks** at a time.
- General grind descriptor in recipe: **medium-coarse**.
- Dial-in advice: If the drained cup feels muddy, harsh, or the paper takes unusually long to empty, go 5 clicks coarser. If it is weak or underdeveloped, go 5 clicks finer or extend the steep. For immersion, the stated steep time is before opening the Switch; do not mistake it for total drawdown.
- Basis: Editorial estimate for paper-filter steep-and-release. 1Zpresso charts do not specify a Switch-only setting; numbers are interpolated from the maker’s pour-over and coarse-brew bands, with steep duration considered.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

**AeroPress**

- Starting setting: **`1.4.1`**, or **101 clicks** clockwise from zero.
- Exploratory range: `1.3.2`–`1.5.0` (92–110 clicks).
- Change size: **4 clicks** at a time.
- General grind descriptor in recipe: **medium**.
- Dial-in advice: If pressing is excessively hard or the cup is bitter/drying, go 4 clicks coarser. If it tastes sour or dilute and the press is easy, try 4 clicks finer. AeroPress times include immersion and press: pressure, stirring and recipe also affect extraction.
- Basis: Based on 1Zpresso’s approximately 70–110-click AeroPress band, the specified texture and steep time, and small editorial bean adjustments.
- Provenance: `editorial_estimate_not_roaster_published_or_brew_tested`; [manufacturer reference chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

<!-- END_GRINDER id=the-barn--bishan-wate -->

