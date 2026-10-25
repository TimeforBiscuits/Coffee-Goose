# Coffee Goose Mk 2 — Canephora Addendum

> **Snapshot:** 2026-10-25 · **11 additional coffees · 33 brewing recipes · 33 X-Ultra settings · 6 roasters.** Intended to be imported **alongside**, not in place of, the Mk 2 `catalog.json`. All profiles in this addendum are **100% Coffea canephora** (Robusta, Conilon, etc.), as sold by their roasters.

## Installation / merge into Coffee Goose

1. Import `canephora-addendum.json` after the Mk 2 `catalog.json`. Append `coffees[]` by stable unique `id`, keeping the original 53 intact. The resulting combined catalog contains **64 profiles and 192 recipes** (assuming no pre-existing conflicting IDs).
2. Keep **this Markdown file** next to `COFFEES.md`, `GRINDER.md`, `README.md`, `SCHEMA.md` and `catalog.json`. All the new `markdown_section` and `grinder_section` pointers link into this document.
3. Schema remains **2.0**. `species` is one optional additional coffee attribute; `category` also contains `canephora` for backwards-compatible filtering. Unknown optional fields may be ignored.
4. Do not merge by name or producer: three distinct **Mr. Toi** products differ in processing/variety/roast and MUST remain separate.
5. The original Mk 2 README and schema apply. The addendum JSON is a **fragment** to merge, not a replacement for the full base catalog.

## Sources, uncertainty and brewing policy

- Tasting descriptors and origin details come from each roaster’s product/collection pages, not personal cuppings. Coffee-specific V60 parameters are used only when explicitly published.
- **ROASTER** = published with this coffee. **EXPERIMENTAL** = my proposed brew, not the roaster’s recommendation, and not taste-tested.
- All **X-Ultra** click settings, including those accompanying official roaster recipes, are independently estimated and **not** published or tested by the roasters.
- **V60 / Switch / AeroPress** have different extraction behavior; a roast sold for espresso can be tried as filter without implying the roaster endorses it.
- **Switch 03** is required for the stated full immersion dose. For **Switch 02**, use **12 g coffee / 180 g water**; do not exceed your brewer capacity.
- Timing and flavor are starting points; adjust one variable at a time. Source page stock, current coffee harvest, and roasting batches can change.

## Index

### Quijote Kaffee (3)
- [Eliane Lívio](#coffee-quijote--eliane-livio) · Brazil · Washed
- [Microconda](#coffee-quijote--microconda) · Ecuador · Honey
- [Cremaconda](#coffee-quijote--cremaconda) · Ecuador · Washed

### Seekind Coffee (1)
- [Gio 100% Canephora (Omniroast)](#coffee-seekind--gio-100-canephora) · Ecuador · Yellow Honey

### Aroma Hoch 3 (3)
- [Vietnam RoSé](#coffee-aroma-hoch-3--vietnam-rose) · Vietnam · Anaerobic Natural
- [Vietnam Siêu Sao](#coffee-aroma-hoch-3--vietnam-sieu-sao) · Vietnam · 144-hour Anaerobic Natural
- [Mr Toi — 100% Fine Robusta](#coffee-aroma-hoch-3--mr-toi) · Vietnam · Anaerobic Natural

### Kaffeerösterei Laufenmühle (2)
- [Peru El Camino — Coffee / filter roast](#coffee-laufenmuehle--peru-el-camino-filter) · Peru · processing not published
- [Peru El Camino — Espresso roast](#coffee-laufenmuehle--peru-el-camino-espresso) · Peru · processing not published

### Mókuska (1)
- [Espresso Mr. Toi](#coffee-mokuska--mr-toi-espresso) · Vietnam · Black Honey

### Südhang (1)
- [Mr Toi — Winey Natural](#coffee-suedhang--mr-toi-winey-natural) · Vietnam · Winey Natural; 70-hour fermentation

## X-Ultra quick-reference chart

Format: **`R.N.C`** = rotations / numbered mark / extra clicks. `2.1.5` = **135 clicks** from correctly calibrated zero. See the [X-Ultra official chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg).

| Coffee | V60 | Switch | AeroPress |
| --- | :---: | :---: | :---: |
| [Quijote Kaffee — Eliane Lívio](#grind-quijote--eliane-livio) | `2.1.9` | `2.3.4` | `1.4.3` |
| [Quijote Kaffee — Microconda](#grind-quijote--microconda) | `2.2.4` | `2.3.7` | `1.4.6` |
| [Quijote Kaffee — Cremaconda](#grind-quijote--cremaconda) | `2.2.5` | `2.4.1` | `1.4.7` |
| [Seekind Coffee — Gio 100% Canephora (Omniroast)](#grind-seekind--gio-100-canephora) | `2.1.4` | `2.3.1` | `1.3.9` |
| [Aroma Hoch 3 — Vietnam RoSé](#grind-aroma-hoch-3--vietnam-rose) | `2.2.2` | `2.3.6` | `1.4.4` |
| [Aroma Hoch 3 — Vietnam Siêu Sao](#grind-aroma-hoch-3--vietnam-sieu-sao) | `2.2.3` | `2.3.8` | `1.4.4` |
| [Aroma Hoch 3 — Mr Toi — 100% Fine Robusta](#grind-aroma-hoch-3--mr-toi) | `2.2.6` | `2.4.2` | `1.4.8` |
| [Kaffeerösterei Laufenmühle — Peru El Camino — Coffee / filter roast](#grind-laufenmuehle--peru-el-camino-filter) | `2.1.3` | `2.3.1` | `1.4.1` |
| [Kaffeerösterei Laufenmühle — Peru El Camino — Espresso roast](#grind-laufenmuehle--peru-el-camino-espresso) | `2.2.3` | `2.3.9` | `1.4.7` |
| [Mókuska — Espresso Mr. Toi](#grind-mokuska--mr-toi-espresso) | `2.2.1` | `2.3.7` | `1.4.5` |
| [Südhang — Mr Toi — Winey Natural](#grind-suedhang--mr-toi-winey-natural) | `2.2.1` | `2.3.7` | `1.4.3` |

---

## Coffee profiles and brew recipes


## Quijote Kaffee

<a id="coffee-quijote--eliane-livio"></a>
<!-- BEGIN_COFFEE id=quijote--eliane-livio -->
### Eliane Lívio

**ID:** `quijote--eliane-livio` · **Category:** espresso; canephora · **Species:** Coffea canephora · **Style:** nutty / rounded *(editorial)*  
**Product page:** https://www.quijote-kaffee.de/ESPRESSO-Microlot-Eliane-Livio/M-500-117 · **Checked:** 2026-10-25  
**X-Ultra grind settings:** [Three-method settings](#grind-quijote--eliane-livio)

#### Coffee biography

Eliane Lívio and her husband Pedro cultivate Conilon near Muqui in Espírito Santo. Their coffee is sold through CAFESUL; Eliane also helped found the Pó de Mulheres women-producer initiative. Quijote roasts this washed 2025 crop medium-dark, retaining a lively, nutty sweetness and unusually plush texture for Canephora.

| Attribute | Details |
| --- | --- |
| Country | Brazil |
| Region | Boa Vista, Muqui, Espírito Santo |
| Producer | Eliane Lívio and Pedro / CAFESUL cooperative |
| Farm / co-op | Family sítio, Boa Vista |
| Variety | Conilon |
| Processing | Washed |
| Altitude (m) | Not published / not verified |
| Roast | Medium-dark espresso |

#### Roaster tasting notes

Malt, Hazelnut mousse / nougat, Sweet pale grape.

*These are roaster-described flavor expectations, not user-tasting results.*

#### Brew recipes

##### Hario V60 pour-over

**Recipe provenance:** EXPERIMENTAL · editorial suggestion (not roaster-published) (`editorial_suggestion`)  
**Dose:** 18 g · **Water added:** 270 g · **Ratio:** 15.00:1  
**Temperature:** 90°C · **Grind:** medium / medium-coarse; editorial  
**Target time:** ~2:45–3:15 · **X-Ultra:** `2.1.9` ([range and dial-in](#grind-quijote--eliane-livio))  
**Recipe source:** Editorial proposal — no roaster recipe URL

**Steps**

1. 0:00 wet grounds with 45 g of water; allow ~35–40 seconds of bloom.
2. 0:40 pour gently to 115 g total, keeping the bed evenly wet.
3. 1:15 pour to 190 g total.
4. 1:50 pour to 270 g total and allow to draw down. Avoid aggressive swirling with dark roasts.

**Notes:** This V60 pulse schedule is an editorial suggested implementation; tune flow to the listed drawdown target.

##### Hario Switch immersion

**Recipe provenance:** EXPERIMENTAL · editorial suggestion (not roaster-published) (`editorial_suggestion`)  
**Dose:** 20 g · **Water added:** 300 g · **Ratio:** 15.00:1  
**Temperature:** 89°C · **Grind:** medium-coarse (editorial)  
**Target time:** 3:00 with valve closed, then drain (Switch 03) · **X-Ultra:** `2.3.4` ([range and dial-in](#grind-quijote--eliane-livio))  
**Recipe source:** Editorial proposal — no roaster recipe URL

**Steps**

1. Rinse V60/Switch paper, place on server and close the Switch valve.
2. Add 20 g of coffee and 300 g of water at 89°C, fully saturating all grounds.
3. Give one gentle stir/swirl to remove dry pockets; leave closed for 3:00.
4. Open the valve and allow the brew to pass through the paper. Taste both warm and cooler.

**Notes:** Editorial experiment targeting body and sweetness. Full-dose recipe assumes Switch **03 (~360 mL)**. On Switch **02 (~200 mL)** use **12 g coffee / 180 g water**, same temperature and steep; the smaller cup will differ slightly in ratio. Do not overfill beyond the brewer’s rated capacity. Steep time precedes drawdown.

##### AeroPress

**Recipe provenance:** EXPERIMENTAL · editorial suggestion (not roaster-published) (`editorial_suggestion`)  
**Dose:** 15 g · **Water added:** 225 g · **Ratio:** 15.00:1  
**Temperature:** 89°C · **Grind:** medium-fine (editorial)  
**Target time:** ~2:15 · **X-Ultra:** `1.4.3` ([range and dial-in](#grind-quijote--eliane-livio))  
**Recipe source:** Editorial proposal — no roaster recipe URL

**Steps**

1. Use standard AeroPress orientation, a rinsed paper filter, and a stable heat-safe mug.
2. Add 15 g of ground coffee. At 0:00, add 225 g of water at 89°C and stir gently 2–3 times.
3. Insert the plunger just far enough to form a seal; do not press yet.
4. Begin a slow, controlled press after roughly 1:45–1:50 total elapsed time; finish around ~2:15.

**Notes:** Editorial AeroPress starting point, not a bean-specific roaster recipe. Fits a standard AeroPress chamber; a capped, gentle steep reduces dripping. Do not try to fit Seekind’s published 300 g pour-over dose in a standard AeroPress chamber.

#### Alternate-brewing hypothesis

The gentler Switch approach may retain hazelnut and grape-like sweetness without amplifying roast bitterness; contrast with the brighter V60.

#### Personal tasting journal (app-owned)

- Brew date:
- Method / equipment:
- Coffee dose / water / temperature / X-Ultra clicks:
- Aroma / acidity / sweetness / body / finish:
- What worked / what to change next time:

#### Source caveats

- Roaster publishes espresso positioning, not a bean-specific V60/Switch/AeroPress recipe.
- Exact farm altitude was not specified in the checked product listing.

<!-- END_COFFEE id=quijote--eliane-livio -->

---

<a id="coffee-quijote--microconda"></a>
<!-- BEGIN_COFFEE id=quijote--microconda -->
### Microconda

**ID:** `quijote--microconda` · **Category:** espresso; canephora · **Species:** Coffea canephora · **Style:** malt / syrupy *(editorial)*  
**Product page:** https://www.quijote-kaffee.de/ESPRESSO-Microlot-Microconda/M-500-115 · **Checked:** 2026-10-25  
**X-Ultra grind settings:** [Three-method settings](#grind-quijote--microconda)

#### Coffee biography

A limited 2025 Ecuadorian lot from WAYLLA KURI: the producers retained some fruit mucilage during drying, yielding a honey-processed Robusta. Quijote describes greater creaminess, body and sweetness compared with its standard washed Cremaconda.

| Attribute | Details |
| --- | --- |
| Country | Ecuador |
| Region | Amazonian lowlands (specific locality not stated) |
| Producer | WAYLLA KURI cooperative |
| Farm / co-op | Not published / not verified |
| Variety | Robusta (Canephora); cultivar unspecified |
| Processing | Honey |
| Altitude (m) | Not published / not verified |
| Roast | Dark espresso |

#### Roaster tasting notes

Malt, Cane sugar.

*These are roaster-described flavor expectations, not user-tasting results.*

#### Brew recipes

##### Hario V60 pour-over

**Recipe provenance:** EXPERIMENTAL · editorial suggestion (not roaster-published) (`editorial_suggestion`)  
**Dose:** 18 g · **Water added:** 270 g · **Ratio:** 15.00:1  
**Temperature:** 87°C · **Grind:** medium / medium-coarse; editorial  
**Target time:** ~2:40–3:10 · **X-Ultra:** `2.2.4` ([range and dial-in](#grind-quijote--microconda))  
**Recipe source:** Editorial proposal — no roaster recipe URL

**Steps**

1. 0:00 wet grounds with 45 g of water; allow ~35–40 seconds of bloom.
2. 0:40 pour gently to 115 g total, keeping the bed evenly wet.
3. 1:15 pour to 190 g total.
4. 1:50 pour to 270 g total and allow to draw down. Avoid aggressive swirling with dark roasts.

**Notes:** This V60 pulse schedule is an editorial suggested implementation; tune flow to the listed drawdown target.

##### Hario Switch immersion

**Recipe provenance:** EXPERIMENTAL · editorial suggestion (not roaster-published) (`editorial_suggestion`)  
**Dose:** 20 g · **Water added:** 300 g · **Ratio:** 15.00:1  
**Temperature:** 88°C · **Grind:** medium-coarse (editorial)  
**Target time:** 2:45 with valve closed, then drain (Switch 03) · **X-Ultra:** `2.3.7` ([range and dial-in](#grind-quijote--microconda))  
**Recipe source:** Editorial proposal — no roaster recipe URL

**Steps**

1. Rinse V60/Switch paper, place on server and close the Switch valve.
2. Add 20 g of coffee and 300 g of water at 88°C, fully saturating all grounds.
3. Give one gentle stir/swirl to remove dry pockets; leave closed for 2:45.
4. Open the valve and allow the brew to pass through the paper. Taste both warm and cooler.

**Notes:** Editorial experiment targeting body and sweetness. Full-dose recipe assumes Switch **03 (~360 mL)**. On Switch **02 (~200 mL)** use **12 g coffee / 180 g water**, same temperature and steep; the smaller cup will differ slightly in ratio. Do not overfill beyond the brewer’s rated capacity. Steep time precedes drawdown.

##### AeroPress

**Recipe provenance:** EXPERIMENTAL · editorial suggestion (not roaster-published) (`editorial_suggestion`)  
**Dose:** 15 g · **Water added:** 225 g · **Ratio:** 15.00:1  
**Temperature:** 88°C · **Grind:** medium-fine (editorial)  
**Target time:** ~2:15 · **X-Ultra:** `1.4.6` ([range and dial-in](#grind-quijote--microconda))  
**Recipe source:** Editorial proposal — no roaster recipe URL

**Steps**

1. Use standard AeroPress orientation, a rinsed paper filter, and a stable heat-safe mug.
2. Add 15 g of ground coffee. At 0:00, add 225 g of water at 88°C and stir gently 2–3 times.
3. Insert the plunger just far enough to form a seal; do not press yet.
4. Begin a slow, controlled press after roughly 1:45–1:50 total elapsed time; finish around ~2:15.

**Notes:** Editorial AeroPress starting point, not a bean-specific roaster recipe. Fits a standard AeroPress chamber; a capped, gentle steep reduces dripping. Do not try to fit Seekind’s published 300 g pour-over dose in a standard AeroPress chamber.

#### Alternate-brewing hypothesis

A short, cooler Switch steep may emphasize cane-sugar sweetness without making the dark roast too dominant. Use a small sample before committing a whole bag to filter brewing.

#### Personal tasting journal (app-owned)

- Brew date:
- Method / equipment:
- Coffee dose / water / temperature / X-Ultra clicks:
- Aroma / acidity / sweetness / body / finish:
- What worked / what to change next time:

#### Source caveats

- This is an espresso roast; all three filter/immersion methods are editorial experiments.
- Availability on Quijote listing may vary by weekly batch and pack size.

<!-- END_COFFEE id=quijote--microconda -->

---

<a id="coffee-quijote--cremaconda"></a>
<!-- BEGIN_COFFEE id=quijote--cremaconda -->
### Cremaconda

**ID:** `quijote--cremaconda` · **Category:** espresso; canephora · **Species:** Coffea canephora · **Style:** dark / chocolate / creamy *(editorial)*  
**Product page:** https://www.quijote-kaffee.de/ESPRESSO-Cremaconda/E-001-040 · **Checked:** 2026-10-25  
**X-Ultra grind settings:** [Three-method settings](#grind-quijote--cremaconda)

#### Coffee biography

A washed 2025 crop from WAYLLA KURI, produced by indigenous families in mixed forest-garden chakras in Ecuador’s Amazonian lowlands. Quijote emphasizes dark chocolate, liquorice, strong body, dense crema and a surprisingly soft texture.

| Attribute | Details |
| --- | --- |
| Country | Ecuador |
| Region | Amazonian lowlands |
| Producer | WAYLLA KURI cooperative (historical relationship also includes JATARY) |
| Farm / co-op | Indigenous producers’ chakra forest gardens |
| Variety | Robusta (Canephora); cultivar unspecified |
| Processing | Washed |
| Altitude (m) | Not published / not verified |
| Roast | Dark espresso |

#### Roaster tasting notes

Dark chocolate, Liquorice, Vanilla, Crema.

*These are roaster-described flavor expectations, not user-tasting results.*

#### Brew recipes

##### Hario V60 pour-over

**Recipe provenance:** EXPERIMENTAL · editorial suggestion (not roaster-published) (`editorial_suggestion`)  
**Dose:** 18 g · **Water added:** 270 g · **Ratio:** 15.00:1  
**Temperature:** 87°C · **Grind:** medium / medium-coarse; editorial  
**Target time:** ~2:40–3:10 · **X-Ultra:** `2.2.5` ([range and dial-in](#grind-quijote--cremaconda))  
**Recipe source:** Editorial proposal — no roaster recipe URL

**Steps**

1. 0:00 wet grounds with 45 g of water; allow ~35–40 seconds of bloom.
2. 0:40 pour gently to 115 g total, keeping the bed evenly wet.
3. 1:15 pour to 190 g total.
4. 1:50 pour to 270 g total and allow to draw down. Avoid aggressive swirling with dark roasts.

**Notes:** This V60 pulse schedule is an editorial suggested implementation; tune flow to the listed drawdown target.

##### Hario Switch immersion

**Recipe provenance:** EXPERIMENTAL · editorial suggestion (not roaster-published) (`editorial_suggestion`)  
**Dose:** 20 g · **Water added:** 300 g · **Ratio:** 15.00:1  
**Temperature:** 87°C · **Grind:** medium-coarse (editorial)  
**Target time:** 2:30 with valve closed, then drain (Switch 03) · **X-Ultra:** `2.4.1` ([range and dial-in](#grind-quijote--cremaconda))  
**Recipe source:** Editorial proposal — no roaster recipe URL

**Steps**

1. Rinse V60/Switch paper, place on server and close the Switch valve.
2. Add 20 g of coffee and 300 g of water at 87°C, fully saturating all grounds.
3. Give one gentle stir/swirl to remove dry pockets; leave closed for 2:30.
4. Open the valve and allow the brew to pass through the paper. Taste both warm and cooler.

**Notes:** Editorial experiment targeting body and sweetness. Full-dose recipe assumes Switch **03 (~360 mL)**. On Switch **02 (~200 mL)** use **12 g coffee / 180 g water**, same temperature and steep; the smaller cup will differ slightly in ratio. Do not overfill beyond the brewer’s rated capacity. Steep time precedes drawdown.

##### AeroPress

**Recipe provenance:** EXPERIMENTAL · editorial suggestion (not roaster-published) (`editorial_suggestion`)  
**Dose:** 15 g · **Water added:** 225 g · **Ratio:** 15.00:1  
**Temperature:** 87°C · **Grind:** medium-fine (editorial)  
**Target time:** ~2:10 · **X-Ultra:** `1.4.7` ([range and dial-in](#grind-quijote--cremaconda))  
**Recipe source:** Editorial proposal — no roaster recipe URL

**Steps**

1. Use standard AeroPress orientation, a rinsed paper filter, and a stable heat-safe mug.
2. Add 15 g of ground coffee. At 0:00, add 225 g of water at 87°C and stir gently 2–3 times.
3. Insert the plunger just far enough to form a seal; do not press yet.
4. Begin a slow, controlled press after roughly 1:45–1:50 total elapsed time; finish around ~2:10.

**Notes:** Editorial AeroPress starting point, not a bean-specific roaster recipe. Fits a standard AeroPress chamber; a capped, gentle steep reduces dripping. Do not try to fit Seekind’s published 300 g pour-over dose in a standard AeroPress chamber.

#### Alternate-brewing hypothesis

Try a cool, concentrated AeroPress cup before a V60: paper filtration may isolate the vanilla/chocolate notes while reducing heavy crema-like body.

#### Personal tasting journal (app-owned)

- Brew date:
- Method / equipment:
- Coffee dose / water / temperature / X-Ultra clicks:
- Aroma / acidity / sweetness / body / finish:
- What worked / what to change next time:

#### Source caveats

- Quijote explicitly markets this as dark espresso; V60, Switch and AeroPress recipes are editorial only.
- Availability may change with weekly allocations.

<!-- END_COFFEE id=quijote--cremaconda -->

---


## Seekind Coffee

<a id="coffee-seekind--gio-100-canephora"></a>
<!-- BEGIN_COFFEE id=seekind--gio-100-canephora -->
### Gio 100% Canephora (Omniroast)

**ID:** `seekind--gio-100-canephora` · **Category:** omniroast; canephora · **Species:** Coffea canephora · **Style:** cocoa / smooth / earthy *(editorial)*  
**Product page:** https://seekind.coffee/shop/gio-100-canephora-omniroast/ · **Checked:** 2026-10-25  
**X-Ultra grind settings:** [Three-method settings](#grind-seekind--gio-100-canephora)

#### Coffee biography

Produced with Kichwa communities in Ecuador’s Sumaco Biosphere Reserve and marketed through Giomar Hidalgo’s Latitud 0° project. This Napo Payamino yellow-honey Canephora is intentionally roasted for both espresso and paper-filter brewing. Seekind lists 900 m elevation and a coffee-specific five-pour recipe.

| Attribute | Details |
| --- | --- |
| Country | Ecuador |
| Region | Sumaco Archidona, Napo |
| Producer | Witoca Cooperative / Giomar “Gio” Hidalgo, Latitud 0° |
| Farm / co-op | Kichwa community smallholders in the Sumaco Biosphere Reserve |
| Variety | Napo Payamino (Canephora) |
| Processing | Yellow Honey |
| Altitude (m) | 900 |
| Roast | Light–medium omniroast (2/4) |

#### Roaster tasting notes

Cocoa nibs, Creamy body, Earthy spice.

*These are roaster-described flavor expectations, not user-tasting results.*

#### Brew recipes

##### Hario V60 pour-over

**Recipe provenance:** ROASTER · bean-specific published parameters (`roaster_coffee_specific`)  
**Dose:** 20 g · **Water added:** 300 g · **Ratio:** 15.00:1  
**Temperature:** 93°C · **Grind:** medium  
**Target time:** ~2:30–3:00 · **X-Ultra:** `2.1.4` ([range and dial-in](#grind-seekind--gio-100-canephora))  
**Recipe source:** https://seekind.coffee/shop/gio-100-canephora-omniroast/

**Steps**

1. 0:00 add 60 g water and bloom for 30 seconds.
2. 0:30 add 60 g (120 g total).
3. 1:00 add 60 g (180 g total).
4. 1:30 add 60 g (240 g total).
5. 2:00 add final 60 g (300 g total), then allow to finish by about 2:30–3:00.

**Notes:** Published coffee-specific filter recipe: 20 g / 300 g, 93°C, medium grind and five 60 g additions at 30-second intervals. Carried over unchanged in essentials; V60 is the selected hand-filter implementation.

##### Hario Switch immersion

**Recipe provenance:** EXPERIMENTAL · editorial suggestion (not roaster-published) (`editorial_suggestion`)  
**Dose:** 20 g · **Water added:** 300 g · **Ratio:** 15.00:1  
**Temperature:** 92°C · **Grind:** medium-coarse (editorial)  
**Target time:** 3:30 with valve closed, then drain (Switch 03) · **X-Ultra:** `2.3.1` ([range and dial-in](#grind-seekind--gio-100-canephora))  
**Recipe source:** Editorial proposal — no roaster recipe URL

**Steps**

1. Rinse V60/Switch paper, place on server and close the Switch valve.
2. Add 20 g of coffee and 300 g of water at 92°C, fully saturating all grounds.
3. Give one gentle stir/swirl to remove dry pockets; leave closed for 3:30.
4. Open the valve and allow the brew to pass through the paper. Taste both warm and cooler.

**Notes:** Editorial experiment targeting body and sweetness. Full-dose recipe assumes Switch **03 (~360 mL)**. On Switch **02 (~200 mL)** use **12 g coffee / 180 g water**, same temperature and steep; the smaller cup will differ slightly in ratio. Do not overfill beyond the brewer’s rated capacity. Steep time precedes drawdown.

##### AeroPress

**Recipe provenance:** EXPERIMENTAL · editorial suggestion (not roaster-published) (`editorial_suggestion`)  
**Dose:** 15 g · **Water added:** 225 g · **Ratio:** 15.00:1  
**Temperature:** 93°C · **Grind:** medium-fine (editorial)  
**Target time:** ~2:15 · **X-Ultra:** `1.3.9` ([range and dial-in](#grind-seekind--gio-100-canephora))  
**Recipe source:** Editorial proposal — no roaster recipe URL

**Steps**

1. Use standard AeroPress orientation, a rinsed paper filter, and a stable heat-safe mug.
2. Add 15 g of ground coffee. At 0:00, add 225 g of water at 93°C and stir gently 2–3 times.
3. Insert the plunger just far enough to form a seal; do not press yet.
4. Begin a slow, controlled press after roughly 1:45–1:50 total elapsed time; finish around ~2:15.

**Notes:** Editorial AeroPress starting point, not a bean-specific roaster recipe. Fits a standard AeroPress chamber; a capped, gentle steep reduces dripping. Do not try to fit Seekind’s published 300 g pour-over dose in a standard AeroPress chamber.

#### Alternate-brewing hypothesis

Use the manufacturer-listed V60 recipe as your control cup, then give it a 3:30 Switch immersion to see whether the cocoa-nib body grows without sacrificing clarity.

#### Personal tasting journal (app-owned)

- Brew date:
- Method / equipment:
- Coffee dose / water / temperature / X-Ultra clicks:
- Aroma / acidity / sweetness / body / finish:
- What worked / what to change next time:

#### Source caveats

- Seekind also says its 20 g / 300 g filter recipe is suitable for AeroPress, but five 60 g pours and 300 g water are not reproduced as an AeroPress procedure; the AeroPress method here is editorial.

<!-- END_COFFEE id=seekind--gio-100-canephora -->

---


## Aroma Hoch 3

<a id="coffee-aroma-hoch-3--vietnam-rose"></a>
<!-- BEGIN_COFFEE id=aroma-hoch-3--vietnam-rose -->
### Vietnam RoSé

**ID:** `aroma-hoch-3--vietnam-rose` · **Category:** espresso; canephora · **Species:** Coffea canephora · **Style:** fruit / rich / intense *(editorial)*  
**Product page:** https://www.aromahoch3.de/products/rose · **Checked:** 2026-10-25  
**X-Ultra grind settings:** [Three-method settings](#grind-aroma-hoch-3--vietnam-rose)

#### Coffee biography

A single-origin 100% Fine Robusta from Great Cherry in Đắk Lắk, made from the Ro Sé variety and processed as an anaerobic natural. The roaster describes distinct papaya and chocolate-raisin sweetness despite a strongly developed espresso roast.

| Attribute | Details |
| --- | --- |
| Country | Vietnam |
| Region | Đắk Lắk |
| Producer | Great Cherry |
| Farm / co-op | Great Cherry |
| Variety | Ro Sé (Canephora) |
| Processing | Anaerobic Natural |
| Altitude (m) | 500–700 |
| Roast | Dark espresso (5/5 per collection) |

#### Roaster tasting notes

Chocolate-coated raisins, Papaya, Sweetness.

*These are roaster-described flavor expectations, not user-tasting results.*

#### Brew recipes

##### Hario V60 pour-over

**Recipe provenance:** EXPERIMENTAL · editorial suggestion (not roaster-published) (`editorial_suggestion`)  
**Dose:** 18 g · **Water added:** 270 g · **Ratio:** 15.00:1  
**Temperature:** 89°C · **Grind:** medium / medium-coarse; editorial  
**Target time:** ~2:45–3:15 · **X-Ultra:** `2.2.2` ([range and dial-in](#grind-aroma-hoch-3--vietnam-rose))  
**Recipe source:** Editorial proposal — no roaster recipe URL

**Steps**

1. 0:00 wet grounds with 45 g of water; allow ~35–40 seconds of bloom.
2. 0:40 pour gently to 115 g total, keeping the bed evenly wet.
3. 1:15 pour to 190 g total.
4. 1:50 pour to 270 g total and allow to draw down. Avoid aggressive swirling with dark roasts.

**Notes:** This V60 pulse schedule is an editorial suggested implementation; tune flow to the listed drawdown target.

##### Hario Switch immersion

**Recipe provenance:** EXPERIMENTAL · editorial suggestion (not roaster-published) (`editorial_suggestion`)  
**Dose:** 20 g · **Water added:** 300 g · **Ratio:** 15.00:1  
**Temperature:** 89°C · **Grind:** medium-coarse (editorial)  
**Target time:** 3:15 with valve closed, then drain (Switch 03) · **X-Ultra:** `2.3.6` ([range and dial-in](#grind-aroma-hoch-3--vietnam-rose))  
**Recipe source:** Editorial proposal — no roaster recipe URL

**Steps**

1. Rinse V60/Switch paper, place on server and close the Switch valve.
2. Add 20 g of coffee and 300 g of water at 89°C, fully saturating all grounds.
3. Give one gentle stir/swirl to remove dry pockets; leave closed for 3:15.
4. Open the valve and allow the brew to pass through the paper. Taste both warm and cooler.

**Notes:** Editorial experiment targeting fruit and fermentation. Full-dose recipe assumes Switch **03 (~360 mL)**. On Switch **02 (~200 mL)** use **12 g coffee / 180 g water**, same temperature and steep; the smaller cup will differ slightly in ratio. Do not overfill beyond the brewer’s rated capacity. Steep time precedes drawdown.

##### AeroPress

**Recipe provenance:** EXPERIMENTAL · editorial suggestion (not roaster-published) (`editorial_suggestion`)  
**Dose:** 15 g · **Water added:** 225 g · **Ratio:** 15.00:1  
**Temperature:** 89°C · **Grind:** medium-fine (editorial)  
**Target time:** ~2:10 · **X-Ultra:** `1.4.4` ([range and dial-in](#grind-aroma-hoch-3--vietnam-rose))  
**Recipe source:** Editorial proposal — no roaster recipe URL

**Steps**

1. Use standard AeroPress orientation, a rinsed paper filter, and a stable heat-safe mug.
2. Add 15 g of ground coffee. At 0:00, add 225 g of water at 89°C and stir gently 2–3 times.
3. Insert the plunger just far enough to form a seal; do not press yet.
4. Begin a slow, controlled press after roughly 1:45–1:50 total elapsed time; finish around ~2:10.

**Notes:** Editorial AeroPress starting point, not a bean-specific roaster recipe. Fits a standard AeroPress chamber; a capped, gentle steep reduces dripping. Do not try to fit Seekind’s published 300 g pour-over dose in a standard AeroPress chamber.

#### Alternate-brewing hypothesis

A shorter, lower-temperature V60 may expose the papaya layer; a longer closed Switch steep may instead amplify its syrupy raisin sweetness.

#### Personal tasting journal (app-owned)

- Brew date:
- Method / equipment:
- Coffee dose / water / temperature / X-Ultra clicks:
- Aroma / acidity / sweetness / body / finish:
- What worked / what to change next time:

#### Source caveats

- The roaster recommends espresso/moka first, with filter as an experiment; no bean-specific V60, Switch or AeroPress quantities were found.

<!-- END_COFFEE id=aroma-hoch-3--vietnam-rose -->

---

<a id="coffee-aroma-hoch-3--vietnam-sieu-sao"></a>
<!-- BEGIN_COFFEE id=aroma-hoch-3--vietnam-sieu-sao -->
### Vietnam Siêu Sao

**ID:** `aroma-hoch-3--vietnam-sieu-sao` · **Category:** espresso; canephora · **Species:** Coffea canephora · **Style:** fermented / nutty / melon *(editorial)*  
**Product page:** https://www.aromahoch3.de/products/vietnam-sieu-sao · **Checked:** 2026-10-25  
**X-Ultra grind settings:** [Three-method settings](#grind-aroma-hoch-3--vietnam-sieu-sao)

#### Coffee biography

A Gia Lai Fine Robusta treated with a 144-hour anaerobic natural process. Aroma Hoch 3 highlights pistachio, nougat and honeydew melon. The product listing describes the coffee as an espresso rather than a dedicated filter roast.

| Attribute | Details |
| --- | --- |
| Country | Vietnam |
| Region | Gia Lai |
| Producer | Not published / not verified |
| Farm / co-op | Not published / not verified |
| Variety | Fine Robusta (cultivar not published) |
| Processing | 144-hour Anaerobic Natural |
| Altitude (m) | Not published / not verified |
| Roast | Dark espresso (5/5 per collection) |

#### Roaster tasting notes

Pistachio, Nougat, Honeydew melon.

*These are roaster-described flavor expectations, not user-tasting results.*

#### Brew recipes

##### Hario V60 pour-over

**Recipe provenance:** EXPERIMENTAL · editorial suggestion (not roaster-published) (`editorial_suggestion`)  
**Dose:** 18 g · **Water added:** 270 g · **Ratio:** 15.00:1  
**Temperature:** 88°C · **Grind:** medium / medium-coarse; editorial  
**Target time:** ~2:45–3:15 · **X-Ultra:** `2.2.3` ([range and dial-in](#grind-aroma-hoch-3--vietnam-sieu-sao))  
**Recipe source:** Editorial proposal — no roaster recipe URL

**Steps**

1. 0:00 wet grounds with 45 g of water; allow ~35–40 seconds of bloom.
2. 0:40 pour gently to 115 g total, keeping the bed evenly wet.
3. 1:15 pour to 190 g total.
4. 1:50 pour to 270 g total and allow to draw down. Avoid aggressive swirling with dark roasts.

**Notes:** This V60 pulse schedule is an editorial suggested implementation; tune flow to the listed drawdown target.

##### Hario Switch immersion

**Recipe provenance:** EXPERIMENTAL · editorial suggestion (not roaster-published) (`editorial_suggestion`)  
**Dose:** 20 g · **Water added:** 300 g · **Ratio:** 15.00:1  
**Temperature:** 89°C · **Grind:** medium-coarse (editorial)  
**Target time:** 4:00 with valve closed, then drain (Switch 03) · **X-Ultra:** `2.3.8` ([range and dial-in](#grind-aroma-hoch-3--vietnam-sieu-sao))  
**Recipe source:** Editorial proposal — no roaster recipe URL

**Steps**

1. Rinse V60/Switch paper, place on server and close the Switch valve.
2. Add 20 g of coffee and 300 g of water at 89°C, fully saturating all grounds.
3. Give one gentle stir/swirl to remove dry pockets; leave closed for 4:00.
4. Open the valve and allow the brew to pass through the paper. Taste both warm and cooler.

**Notes:** Editorial experiment targeting fruit and fermentation. Full-dose recipe assumes Switch **03 (~360 mL)**. On Switch **02 (~200 mL)** use **12 g coffee / 180 g water**, same temperature and steep; the smaller cup will differ slightly in ratio. Do not overfill beyond the brewer’s rated capacity. Steep time precedes drawdown.

##### AeroPress

**Recipe provenance:** EXPERIMENTAL · editorial suggestion (not roaster-published) (`editorial_suggestion`)  
**Dose:** 15 g · **Water added:** 225 g · **Ratio:** 15.00:1  
**Temperature:** 88°C · **Grind:** medium-fine (editorial)  
**Target time:** ~2:10 · **X-Ultra:** `1.4.4` ([range and dial-in](#grind-aroma-hoch-3--vietnam-sieu-sao))  
**Recipe source:** Editorial proposal — no roaster recipe URL

**Steps**

1. Use standard AeroPress orientation, a rinsed paper filter, and a stable heat-safe mug.
2. Add 15 g of ground coffee. At 0:00, add 225 g of water at 88°C and stir gently 2–3 times.
3. Insert the plunger just far enough to form a seal; do not press yet.
4. Begin a slow, controlled press after roughly 1:45–1:50 total elapsed time; finish around ~2:10.

**Notes:** Editorial AeroPress starting point, not a bean-specific roaster recipe. Fits a standard AeroPress chamber; a capped, gentle steep reduces dripping. Do not try to fit Seekind’s published 300 g pour-over dose in a standard AeroPress chamber.

#### Alternate-brewing hypothesis

Try a longer, gentle Switch immersion with minimal agitation as a counterpart to the conventional V60: the hypothesis is stronger pistachio-and-melon sweetness, not a guarantee.

#### Personal tasting journal (app-owned)

- Brew date:
- Method / equipment:
- Coffee dose / water / temperature / X-Ultra clicks:
- Aroma / acidity / sweetness / body / finish:
- What worked / what to change next time:

#### Source caveats

- The Siêu Sao page appears to include unrelated Guatemala Los Volcanes product-copy lower down. Origin, process and tasting details here come only from its Siêu Sao-specific opening and collection listing.
- Cultivar and exact farm altitude not established.

<!-- END_COFFEE id=aroma-hoch-3--vietnam-sieu-sao -->

---

<a id="coffee-aroma-hoch-3--mr-toi"></a>
<!-- BEGIN_COFFEE id=aroma-hoch-3--mr-toi -->
### Mr Toi — 100% Fine Robusta

**ID:** `aroma-hoch-3--mr-toi` · **Category:** espresso; canephora · **Species:** Coffea canephora · **Style:** dark / sweet / full-bodied *(editorial)*  
**Product page:** https://www.aromahoch3.de/products/mr-toi-espresso-fine-robusta · **Checked:** 2026-10-25  
**X-Ultra grind settings:** [Three-method settings](#grind-aroma-hoch-3--mr-toi)

#### Coffee biography

A deeply roasted Peaberry Canephora lot from Nguyen Van Toi’s Future Coffee Farm near Bảo Lộc. The roaster reports anaerobic natural processing, robust body and dense crema. Its collection tasting notes emphasize popcorn, wild honey and vanilla.

| Attribute | Details |
| --- | --- |
| Country | Vietnam |
| Region | Bảo Lộc |
| Producer | Nguyen Van Toi |
| Farm / co-op | Future Coffee Farm |
| Variety | Robusta 138 Peaberry |
| Processing | Anaerobic Natural |
| Altitude (m) | 900–1000 |
| Roast | Dark espresso (5/5 per collection) |

#### Roaster tasting notes

Popcorn, Wild honey, Vanilla.

*These are roaster-described flavor expectations, not user-tasting results.*

#### Brew recipes

##### Hario V60 pour-over

**Recipe provenance:** EXPERIMENTAL · editorial suggestion (not roaster-published) (`editorial_suggestion`)  
**Dose:** 18 g · **Water added:** 270 g · **Ratio:** 15.00:1  
**Temperature:** 87°C · **Grind:** medium / medium-coarse; editorial  
**Target time:** ~2:40–3:10 · **X-Ultra:** `2.2.6` ([range and dial-in](#grind-aroma-hoch-3--mr-toi))  
**Recipe source:** Editorial proposal — no roaster recipe URL

**Steps**

1. 0:00 wet grounds with 45 g of water; allow ~35–40 seconds of bloom.
2. 0:40 pour gently to 115 g total, keeping the bed evenly wet.
3. 1:15 pour to 190 g total.
4. 1:50 pour to 270 g total and allow to draw down. Avoid aggressive swirling with dark roasts.

**Notes:** This V60 pulse schedule is an editorial suggested implementation; tune flow to the listed drawdown target.

##### Hario Switch immersion

**Recipe provenance:** EXPERIMENTAL · editorial suggestion (not roaster-published) (`editorial_suggestion`)  
**Dose:** 20 g · **Water added:** 300 g · **Ratio:** 15.00:1  
**Temperature:** 87°C · **Grind:** medium-coarse (editorial)  
**Target time:** 2:45 with valve closed, then drain (Switch 03) · **X-Ultra:** `2.4.2` ([range and dial-in](#grind-aroma-hoch-3--mr-toi))  
**Recipe source:** Editorial proposal — no roaster recipe URL

**Steps**

1. Rinse V60/Switch paper, place on server and close the Switch valve.
2. Add 20 g of coffee and 300 g of water at 87°C, fully saturating all grounds.
3. Give one gentle stir/swirl to remove dry pockets; leave closed for 2:45.
4. Open the valve and allow the brew to pass through the paper. Taste both warm and cooler.

**Notes:** Editorial experiment targeting body and sweetness. Full-dose recipe assumes Switch **03 (~360 mL)**. On Switch **02 (~200 mL)** use **12 g coffee / 180 g water**, same temperature and steep; the smaller cup will differ slightly in ratio. Do not overfill beyond the brewer’s rated capacity. Steep time precedes drawdown.

##### AeroPress

**Recipe provenance:** EXPERIMENTAL · editorial suggestion (not roaster-published) (`editorial_suggestion`)  
**Dose:** 15 g · **Water added:** 225 g · **Ratio:** 15.00:1  
**Temperature:** 87°C · **Grind:** medium-fine (editorial)  
**Target time:** ~2:10 · **X-Ultra:** `1.4.8` ([range and dial-in](#grind-aroma-hoch-3--mr-toi))  
**Recipe source:** Editorial proposal — no roaster recipe URL

**Steps**

1. Use standard AeroPress orientation, a rinsed paper filter, and a stable heat-safe mug.
2. Add 15 g of ground coffee. At 0:00, add 225 g of water at 87°C and stir gently 2–3 times.
3. Insert the plunger just far enough to form a seal; do not press yet.
4. Begin a slow, controlled press after roughly 1:45–1:50 total elapsed time; finish around ~2:10.

**Notes:** Editorial AeroPress starting point, not a bean-specific roaster recipe. Fits a standard AeroPress chamber; a capped, gentle steep reduces dripping. Do not try to fit Seekind’s published 300 g pour-over dose in a standard AeroPress chamber.

#### Alternate-brewing hypothesis

Try a cooler, short AeroPress brew as an alternative to espresso, prioritizing creamy vanilla sweetness over heavy roast intensity.

#### Personal tasting journal (app-owned)

- Brew date:
- Method / equipment:
- Coffee dose / water / temperature / X-Ultra clicks:
- Aroma / acidity / sweetness / body / finish:
- What worked / what to change next time:

#### Source caveats

- This is NOT assumed to be the same roast/lot as Mókuska Mr. Toi or Südhang Mr Toi.
- The roaster’s collection lists popcorn/wild honey/vanilla, while body copy elsewhere on its page mentions popcorn/roasted almond/date; both are descriptive, not user tastings.

<!-- END_COFFEE id=aroma-hoch-3--mr-toi -->

---


## Kaffeerösterei Laufenmühle

<a id="coffee-laufenmuehle--peru-el-camino-filter"></a>
<!-- BEGIN_COFFEE id=laufenmuehle--peru-el-camino-filter -->
### Peru El Camino — Coffee / filter roast

**ID:** `laufenmuehle--peru-el-camino-filter` · **Category:** filter; canephora · **Species:** Coffea canephora · **Style:** nut / papaya / lively *(editorial)*  
**Product page:** https://einsundalles-shop.de/Peru-El-Camino-Kaffee/PEC-K-GB250 · **Checked:** 2026-10-25  
**X-Ultra grind settings:** [Three-method settings](#grind-laufenmuehle--peru-el-camino-filter)

#### Coffee biography

An organic Fine Robusta produced by indigenous Yanesha farmers on remote, biodiverse Peruvian agroforestry plots. The cooperative CEPRO Yanesha manages and quality-controls a mixture of five long-established Canephora varieties. Laufenmühle offers distinct filter and espresso roast versions of the same coffee.

| Attribute | Details |
| --- | --- |
| Country | Peru |
| Region | Villa Rica, San Pedro de Pichanaz |
| Producer | Cooperativa Agraria Cafetalera CEPRO Yanesha / Yanesha community |
| Farm / co-op | Smallholder agroforestry fincas |
| Variety | Five local Canephora varieties (individual names not published) |
| Processing | Not published / not verified |
| Altitude (m) | 1500 |
| Roast | Coffee / filter-style roast; intensity 2.5/4 |

#### Roaster tasting notes

Macadamia, Papaya.

*These are roaster-described flavor expectations, not user-tasting results.*

#### Brew recipes

##### Hario V60 pour-over

**Recipe provenance:** EXPERIMENTAL · editorial suggestion (not roaster-published) (`editorial_suggestion`)  
**Dose:** 20 g · **Water added:** 320 g · **Ratio:** 16.00:1  
**Temperature:** 92°C · **Grind:** medium / medium-coarse; editorial  
**Target time:** ~2:50–3:25 · **X-Ultra:** `2.1.3` ([range and dial-in](#grind-laufenmuehle--peru-el-camino-filter))  
**Recipe source:** Editorial proposal — no roaster recipe URL

**Steps**

1. 0:00 wet grounds with 50 g of water; allow ~35–40 seconds of bloom.
2. 0:40 pour gently to 135 g total, keeping the bed evenly wet.
3. 1:15 pour to 225 g total.
4. 1:50 pour to 320 g total and allow to draw down. Avoid aggressive swirling with dark roasts.

**Notes:** This V60 pulse schedule is an editorial suggested implementation; tune flow to the listed drawdown target.

##### Hario Switch immersion

**Recipe provenance:** EXPERIMENTAL · editorial suggestion (not roaster-published) (`editorial_suggestion`)  
**Dose:** 20 g · **Water added:** 320 g · **Ratio:** 16.00:1  
**Temperature:** 92°C · **Grind:** medium-coarse (editorial)  
**Target time:** 3:30 with valve closed, then drain (Switch 03) · **X-Ultra:** `2.3.1` ([range and dial-in](#grind-laufenmuehle--peru-el-camino-filter))  
**Recipe source:** Editorial proposal — no roaster recipe URL

**Steps**

1. Rinse V60/Switch paper, place on server and close the Switch valve.
2. Add 20 g of coffee and 320 g of water at 92°C, fully saturating all grounds.
3. Give one gentle stir/swirl to remove dry pockets; leave closed for 3:30.
4. Open the valve and allow the brew to pass through the paper. Taste both warm and cooler.

**Notes:** Editorial experiment targeting body and sweetness. Full-dose recipe assumes Switch **03 (~360 mL)**. On Switch **02 (~200 mL)** use **12 g coffee / 180 g water**, same temperature and steep; the smaller cup will differ slightly in ratio. Do not overfill beyond the brewer’s rated capacity. Steep time precedes drawdown.

##### AeroPress

**Recipe provenance:** EXPERIMENTAL · editorial suggestion (not roaster-published) (`editorial_suggestion`)  
**Dose:** 15 g · **Water added:** 225 g · **Ratio:** 15.00:1  
**Temperature:** 92°C · **Grind:** medium-fine (editorial)  
**Target time:** ~2:15 · **X-Ultra:** `1.4.1` ([range and dial-in](#grind-laufenmuehle--peru-el-camino-filter))  
**Recipe source:** Editorial proposal — no roaster recipe URL

**Steps**

1. Use standard AeroPress orientation, a rinsed paper filter, and a stable heat-safe mug.
2. Add 15 g of ground coffee. At 0:00, add 225 g of water at 92°C and stir gently 2–3 times.
3. Insert the plunger just far enough to form a seal; do not press yet.
4. Begin a slow, controlled press after roughly 1:45–1:50 total elapsed time; finish around ~2:15.

**Notes:** Editorial AeroPress starting point, not a bean-specific roaster recipe. Fits a standard AeroPress chamber; a capped, gentle steep reduces dripping. Do not try to fit Seekind’s published 300 g pour-over dose in a standard AeroPress chamber.

#### Alternate-brewing hypothesis

Start with a straightforward V60 and compare a 3:30 Switch. If papaya disappears under immersion, shorten steep time or lower the water temperature slightly.

#### Personal tasting journal (app-owned)

- Brew date:
- Method / equipment:
- Coffee dose / water / temperature / X-Ultra clicks:
- Aroma / acidity / sweetness / body / finish:
- What worked / what to change next time:

#### Source caveats

- The roaster does not name the wet/dry processing method on the checked listing; the process field is intentionally blank.
- Same green coffee origin as Laufenmühle El Camino Espresso, but this is a distinct roast SKU.

<!-- END_COFFEE id=laufenmuehle--peru-el-camino-filter -->

---

<a id="coffee-laufenmuehle--peru-el-camino-espresso"></a>
<!-- BEGIN_COFFEE id=laufenmuehle--peru-el-camino-espresso -->
### Peru El Camino — Espresso roast

**ID:** `laufenmuehle--peru-el-camino-espresso` · **Category:** espresso; canephora · **Species:** Coffea canephora · **Style:** chocolate / tropical / intense *(editorial)*  
**Product page:** https://einsundalles-shop.de/Peru-El-Camino-Espresso/PEC-E-GB250 · **Checked:** 2026-10-25  
**X-Ultra grind settings:** [Three-method settings](#grind-laufenmuehle--peru-el-camino-espresso)

#### Coffee biography

The deeper espresso-roast counterpart to El Camino Coffee, grown by Yanesha smallholders in high-biodiversity agroforestry at about 1,500 m and coordinated by CEPRO Yanesha. The roaster emphasizes intense chocolate, hints of tropical fruit and abundant crema; the espresso won a 2025 German Roasters’ Guild tasting gold medal.

| Attribute | Details |
| --- | --- |
| Country | Peru |
| Region | Villa Rica, San Pedro de Pichanaz |
| Producer | Cooperativa Agraria Cafetalera CEPRO Yanesha / Yanesha community |
| Farm / co-op | Smallholder agroforestry fincas |
| Variety | Five local Canephora varieties (individual names not published) |
| Processing | Not published / not verified |
| Altitude (m) | 1500 |
| Roast | Espresso roast; intensity 4/4 |

#### Roaster tasting notes

Chocolate, Tropical fruit.

*These are roaster-described flavor expectations, not user-tasting results.*

#### Brew recipes

##### Hario V60 pour-over

**Recipe provenance:** EXPERIMENTAL · editorial suggestion (not roaster-published) (`editorial_suggestion`)  
**Dose:** 18 g · **Water added:** 270 g · **Ratio:** 15.00:1  
**Temperature:** 89°C · **Grind:** medium / medium-coarse; editorial  
**Target time:** ~2:40–3:10 · **X-Ultra:** `2.2.3` ([range and dial-in](#grind-laufenmuehle--peru-el-camino-espresso))  
**Recipe source:** Editorial proposal — no roaster recipe URL

**Steps**

1. 0:00 wet grounds with 45 g of water; allow ~35–40 seconds of bloom.
2. 0:40 pour gently to 115 g total, keeping the bed evenly wet.
3. 1:15 pour to 190 g total.
4. 1:50 pour to 270 g total and allow to draw down. Avoid aggressive swirling with dark roasts.

**Notes:** This V60 pulse schedule is an editorial suggested implementation; tune flow to the listed drawdown target.

##### Hario Switch immersion

**Recipe provenance:** EXPERIMENTAL · editorial suggestion (not roaster-published) (`editorial_suggestion`)  
**Dose:** 20 g · **Water added:** 300 g · **Ratio:** 15.00:1  
**Temperature:** 89°C · **Grind:** medium-coarse (editorial)  
**Target time:** 2:45 with valve closed, then drain (Switch 03) · **X-Ultra:** `2.3.9` ([range and dial-in](#grind-laufenmuehle--peru-el-camino-espresso))  
**Recipe source:** Editorial proposal — no roaster recipe URL

**Steps**

1. Rinse V60/Switch paper, place on server and close the Switch valve.
2. Add 20 g of coffee and 300 g of water at 89°C, fully saturating all grounds.
3. Give one gentle stir/swirl to remove dry pockets; leave closed for 2:45.
4. Open the valve and allow the brew to pass through the paper. Taste both warm and cooler.

**Notes:** Editorial experiment targeting body and sweetness. Full-dose recipe assumes Switch **03 (~360 mL)**. On Switch **02 (~200 mL)** use **12 g coffee / 180 g water**, same temperature and steep; the smaller cup will differ slightly in ratio. Do not overfill beyond the brewer’s rated capacity. Steep time precedes drawdown.

##### AeroPress

**Recipe provenance:** EXPERIMENTAL · editorial suggestion (not roaster-published) (`editorial_suggestion`)  
**Dose:** 15 g · **Water added:** 225 g · **Ratio:** 15.00:1  
**Temperature:** 89°C · **Grind:** medium-fine (editorial)  
**Target time:** ~2:10 · **X-Ultra:** `1.4.7` ([range and dial-in](#grind-laufenmuehle--peru-el-camino-espresso))  
**Recipe source:** Editorial proposal — no roaster recipe URL

**Steps**

1. Use standard AeroPress orientation, a rinsed paper filter, and a stable heat-safe mug.
2. Add 15 g of ground coffee. At 0:00, add 225 g of water at 89°C and stir gently 2–3 times.
3. Insert the plunger just far enough to form a seal; do not press yet.
4. Begin a slow, controlled press after roughly 1:45–1:50 total elapsed time; finish around ~2:10.

**Notes:** Editorial AeroPress starting point, not a bean-specific roaster recipe. Fits a standard AeroPress chamber; a capped, gentle steep reduces dripping. Do not try to fit Seekind’s published 300 g pour-over dose in a standard AeroPress chamber.

#### Alternate-brewing hypothesis

Brew beside the filter-roast El Camino with the same water and brewer. This isolates the effect of roast style, although grind and extraction may need individual adjustment.

#### Personal tasting journal (app-owned)

- Brew date:
- Method / equipment:
- Coffee dose / water / temperature / X-Ultra clicks:
- Aroma / acidity / sweetness / body / finish:
- What worked / what to change next time:

#### Source caveats

- Processing method is not specified; no washed/natural classification is assumed.
- Gold medal specifically applies to the espresso roast, not automatically to the filter roast.

<!-- END_COFFEE id=laufenmuehle--peru-el-camino-espresso -->

---


## Mókuska

<a id="coffee-mokuska--mr-toi-espresso"></a>
<!-- BEGIN_COFFEE id=mokuska--mr-toi-espresso -->
### Espresso Mr. Toi

**ID:** `mokuska--mr-toi-espresso` · **Category:** espresso; canephora · **Species:** Coffea canephora · **Style:** sweet / spicy / chocolate *(editorial)*  
**Product page:** https://mokuska-caffe.de/collections/shop/products/espresso-mr-toi-250g · **Checked:** 2026-10-25  
**X-Ultra grind settings:** [Three-method settings](#grind-mokuska--mr-toi-espresso)

#### Coffee biography

Mókuska’s current Mr. Toi is a medium-dark Black Honey processed Fine Robusta from Toi Nguyen’s Future Coffee Farm near Bảo Lộc. This coffee has been brought back after a previous lot was lost to warehouse water damage. It should not be conflated with other roasters’ differently processed Mr. Toi releases.

| Attribute | Details |
| --- | --- |
| Country | Vietnam |
| Region | Bảo Lộc (product page also spells Bao Lac) |
| Producer | Toi Nguyen |
| Farm / co-op | Future Coffee Farm |
| Variety | Robusta 138 |
| Processing | Black Honey |
| Altitude (m) | 800–1000 |
| Roast | Medium-dark |

#### Roaster tasting notes

Popcorn, Dark chocolate, Red apple.

*These are roaster-described flavor expectations, not user-tasting results.*

#### Brew recipes

##### Hario V60 pour-over

**Recipe provenance:** EXPERIMENTAL · editorial suggestion (not roaster-published) (`editorial_suggestion`)  
**Dose:** 18 g · **Water added:** 270 g · **Ratio:** 15.00:1  
**Temperature:** 90°C · **Grind:** medium / medium-coarse; editorial  
**Target time:** ~2:45–3:15 · **X-Ultra:** `2.2.1` ([range and dial-in](#grind-mokuska--mr-toi-espresso))  
**Recipe source:** Editorial proposal — no roaster recipe URL

**Steps**

1. 0:00 wet grounds with 45 g of water; allow ~35–40 seconds of bloom.
2. 0:40 pour gently to 115 g total, keeping the bed evenly wet.
3. 1:15 pour to 190 g total.
4. 1:50 pour to 270 g total and allow to draw down. Avoid aggressive swirling with dark roasts.

**Notes:** This V60 pulse schedule is an editorial suggested implementation; tune flow to the listed drawdown target.

##### Hario Switch immersion

**Recipe provenance:** EXPERIMENTAL · editorial suggestion (not roaster-published) (`editorial_suggestion`)  
**Dose:** 20 g · **Water added:** 300 g · **Ratio:** 15.00:1  
**Temperature:** 90°C · **Grind:** medium-coarse (editorial)  
**Target time:** 3:30 with valve closed, then drain (Switch 03) · **X-Ultra:** `2.3.7` ([range and dial-in](#grind-mokuska--mr-toi-espresso))  
**Recipe source:** Editorial proposal — no roaster recipe URL

**Steps**

1. Rinse V60/Switch paper, place on server and close the Switch valve.
2. Add 20 g of coffee and 300 g of water at 90°C, fully saturating all grounds.
3. Give one gentle stir/swirl to remove dry pockets; leave closed for 3:30.
4. Open the valve and allow the brew to pass through the paper. Taste both warm and cooler.

**Notes:** Editorial experiment targeting body and sweetness. Full-dose recipe assumes Switch **03 (~360 mL)**. On Switch **02 (~200 mL)** use **12 g coffee / 180 g water**, same temperature and steep; the smaller cup will differ slightly in ratio. Do not overfill beyond the brewer’s rated capacity. Steep time precedes drawdown.

##### AeroPress

**Recipe provenance:** EXPERIMENTAL · editorial suggestion (not roaster-published) (`editorial_suggestion`)  
**Dose:** 15 g · **Water added:** 225 g · **Ratio:** 15.00:1  
**Temperature:** 90°C · **Grind:** medium-fine (editorial)  
**Target time:** ~2:15 · **X-Ultra:** `1.4.5` ([range and dial-in](#grind-mokuska--mr-toi-espresso))  
**Recipe source:** Editorial proposal — no roaster recipe URL

**Steps**

1. Use standard AeroPress orientation, a rinsed paper filter, and a stable heat-safe mug.
2. Add 15 g of ground coffee. At 0:00, add 225 g of water at 90°C and stir gently 2–3 times.
3. Insert the plunger just far enough to form a seal; do not press yet.
4. Begin a slow, controlled press after roughly 1:45–1:50 total elapsed time; finish around ~2:15.

**Notes:** Editorial AeroPress starting point, not a bean-specific roaster recipe. Fits a standard AeroPress chamber; a capped, gentle steep reduces dripping. Do not try to fit Seekind’s published 300 g pour-over dose in a standard AeroPress chamber.

#### Alternate-brewing hypothesis

Compare a 3:30 Switch immersion to Party On at the same dose. The more developed roast may emphasize chocolate over the fruitier aspects of that carbonic-macerated coffee.

#### Personal tasting journal (app-owned)

- Brew date:
- Method / equipment:
- Coffee dose / water / temperature / X-Ultra clicks:
- Aroma / acidity / sweetness / body / finish:
- What worked / what to change next time:

#### Source caveats

- The current product page describes Black Honey; Mókuska’s earlier blog uses Honey Anaerobic. Current SKU wording takes precedence.
- Page spelling “Bao Lac” conflicts with its own descriptive text “Bao Loc”; recorded as Bảo Lộc, but retain warning.

<!-- END_COFFEE id=mokuska--mr-toi-espresso -->

---


## Südhang

<a id="coffee-suedhang--mr-toi-winey-natural"></a>
<!-- BEGIN_COFFEE id=suedhang--mr-toi-winey-natural -->
### Mr Toi — Winey Natural

**ID:** `suedhang--mr-toi-winey-natural` · **Category:** espresso; canephora · **Species:** Coffea canephora · **Style:** jammy / sweet / fermented *(editorial)*  
**Product page:** https://www.suedhang.org/product/mr-toi-2/ · **Checked:** 2026-10-25  
**X-Ultra grind settings:** [Three-method settings](#grind-suedhang--mr-toi-winey-natural)

#### Coffee biography

A limited 300 kg Winey Natural Canephora produced at Future Coffee Farm in Bảo Lộc and roasted by Südhang as espresso. The product page describes the Robusta Se variety and a 70-hour fermentation, and unusually offers recipe ratios for both French Press and pour-over alongside its espresso recommendation.

| Attribute | Details |
| --- | --- |
| Country | Vietnam |
| Region | Bảo Lộc |
| Producer | Toi Nguyen |
| Farm / co-op | Future Coffee Farm |
| Variety | Robusta Se |
| Processing | Winey Natural; 70-hour fermentation |
| Altitude (m) | 800–1000 |
| Roast | Espresso roast (level not specified) |

#### Roaster tasting notes

Maple syrup, Strawberry jam, Vanilla.

*These are roaster-described flavor expectations, not user-tasting results.*

#### Brew recipes

##### Hario V60 pour-over

**Recipe provenance:** ROASTER · bean-specific published parameters (`roaster_coffee_specific`)  
**Dose:** 20 g · **Water added:** 320 g · **Ratio:** 16.00:1  
**Temperature:** 87°C · **Grind:** medium (roaster not V60-specific)  
**Target time:** 2:00–2:30 (roaster pour-over target) · **X-Ultra:** `2.2.1` ([range and dial-in](#grind-suedhang--mr-toi-winey-natural))  
**Recipe source:** https://www.suedhang.org/product/mr-toi-2/

**Steps**

1. 0:00 wet grounds with 50 g of water; allow ~35–40 seconds of bloom.
2. 0:40 pour gently to 135 g total, keeping the bed evenly wet.
3. 1:15 pour to 225 g total.
4. 1:50 pour to 320 g total and allow to draw down. Avoid aggressive swirling with dark roasts.

**Notes:** Roaster-published bean-specific pour-over parameters: 1:16, 87°C, 2:00–2:30. **The V60 pulse schedule is editorial**, not published by Südhang. If four pours overshoot the target, reduce agitation or adjust grind; record actual time.

##### Hario Switch immersion

**Recipe provenance:** EXPERIMENTAL · editorial suggestion (not roaster-published) (`editorial_suggestion`)  
**Dose:** 20 g · **Water added:** 300 g · **Ratio:** 15.00:1  
**Temperature:** 89°C · **Grind:** medium-coarse (editorial)  
**Target time:** 4:00 with valve closed, then drain (Switch 03) · **X-Ultra:** `2.3.7` ([range and dial-in](#grind-suedhang--mr-toi-winey-natural))  
**Recipe source:** Editorial proposal — no roaster recipe URL

**Steps**

1. Rinse V60/Switch paper, place on server and close the Switch valve.
2. Add 20 g of coffee and 300 g of water at 89°C, fully saturating all grounds.
3. Give one gentle stir/swirl to remove dry pockets; leave closed for 4:00.
4. Open the valve and allow the brew to pass through the paper. Taste both warm and cooler.

**Notes:** Editorial experiment targeting fruit and fermentation. Full-dose recipe assumes Switch **03 (~360 mL)**. On Switch **02 (~200 mL)** use **12 g coffee / 180 g water**, same temperature and steep; the smaller cup will differ slightly in ratio. Do not overfill beyond the brewer’s rated capacity. Steep time precedes drawdown.

##### AeroPress

**Recipe provenance:** EXPERIMENTAL · editorial suggestion (not roaster-published) (`editorial_suggestion`)  
**Dose:** 15 g · **Water added:** 225 g · **Ratio:** 15.00:1  
**Temperature:** 89°C · **Grind:** medium-fine (editorial)  
**Target time:** ~2:15 · **X-Ultra:** `1.4.3` ([range and dial-in](#grind-suedhang--mr-toi-winey-natural))  
**Recipe source:** Editorial proposal — no roaster recipe URL

**Steps**

1. Use standard AeroPress orientation, a rinsed paper filter, and a stable heat-safe mug.
2. Add 15 g of ground coffee. At 0:00, add 225 g of water at 89°C and stir gently 2–3 times.
3. Insert the plunger just far enough to form a seal; do not press yet.
4. Begin a slow, controlled press after roughly 1:45–1:50 total elapsed time; finish around ~2:15.

**Notes:** Editorial AeroPress starting point, not a bean-specific roaster recipe. Fits a standard AeroPress chamber; a capped, gentle steep reduces dripping. Do not try to fit Seekind’s published 300 g pour-over dose in a standard AeroPress chamber.

#### Alternate-brewing hypothesis

This is the second roaster-supported pour-over test after Seekind Gio: brew the 1:16, 87°C pour-over as a control, then use a long Switch steep to explore strawberry-jam sweetness.

#### Personal tasting journal (app-owned)

- Brew date:
- Method / equipment:
- Coffee dose / water / temperature / X-Ultra clicks:
- Aroma / acidity / sweetness / body / finish:
- What worked / what to change next time:

#### Source caveats

- Product page gives pour-over ratio (1:16), temperature (87°C), and duration (2:00–2:30) but not a V60-specific pour schedule. Our four-pour steps below are editorial V60 execution of those published parameters.
- Winey Natural 70-hour lot is distinct from Mókuska Black Honey and Aroma Hoch 3 Anaerobic Natural releases.

<!-- END_COFFEE id=suedhang--mr-toi-winey-natural -->

---

## Detailed X-Ultra settings and dialing-in

> All settings are estimates: grind, water chemistry, filter paper, water temperature, bean age, bean density, and agitation can affect extraction. **60 clicks = 1 revolution; 10 clicks per numbered step.** Go clockwise for coarser. Do not overtighten when finding zero.

<a id="grind-quijote--eliane-livio"></a>
<!-- BEGIN_GRINDER id=quijote--eliane-livio -->
### Quijote Kaffee — Eliane Lívio

**Coffee ID:** `quijote--eliane-livio` · [Bio and recipes](#coffee-quijote--eliane-livio)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.1.9` | 139 | `2.1.0`–`2.2.8` | 130–148 | ±4 clicks |
| Hario Switch immersion | `2.3.4` | 154 | `2.2.4`–`2.4.4` | 144–164 | ±5 clicks |
| AeroPress | `1.4.3` | 103 | `1.3.4`–`1.5.2` | 94–112 | ±4 clicks |

#### Hario V60 pour-over

- **Start:** `2.1.9` = 139 clicks clockwise from calibrated zero.
- **Range:** `2.1.0` to `2.2.8` (130–148 clicks).
- **Dial-in:** Start at the listed setting. If thin/underdeveloped and draining too fast, go ~4 clicks finer. If drying/bitter, or draining too slowly, go ~4 clicks coarser; cool water 1–2°C for harsh dark roasts. Taste takes priority over the clock.
- **Estimate basis:** Estimated from the X-Ultra manufacturer pour-over zone, this recipe’s intended flow, and the bean’s roasting/processing. Not cup-tested.

#### Hario Switch immersion

- **Start:** `2.3.4` = 154 clicks clockwise from calibrated zero.
- **Range:** `2.2.4` to `2.4.4` (144–164 clicks).
- **Dial-in:** If flat/weak, go ~5 clicks finer or steep 30 seconds longer. If muddy/drying or painfully slow to drain, go ~5 coarser or steep shorter. Clocked steep ends when valve opens, not when drawdown finishes.
- **Estimate basis:** Estimated from broad X-Ultra pour-over and coarse-brewing zones, adjusted for a closed-valve steep; maker provides no dedicated Switch calibration.

#### AeroPress

- **Start:** `1.4.3` = 103 clicks clockwise from calibrated zero.
- **Range:** `1.3.4` to `1.5.2` (94–112 clicks).
- **Dial-in:** If weak/underdeveloped, go ~4 clicks finer or extend immersion slightly. If pressing is difficult or the cup is harsh, go ~4 clicks coarser, lower temperature slightly, or press more gently.
- **Estimate basis:** Estimated from the X-Ultra manufacturer AeroPress zone and the recommended steep/press recipe. Not cup-tested.

<!-- END_GRINDER id=quijote--eliane-livio -->

---

<a id="grind-quijote--microconda"></a>
<!-- BEGIN_GRINDER id=quijote--microconda -->
### Quijote Kaffee — Microconda

**Coffee ID:** `quijote--microconda` · [Bio and recipes](#coffee-quijote--microconda)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.2.4` | 144 | `2.1.5`–`2.3.3` | 135–153 | ±4 clicks |
| Hario Switch immersion | `2.3.7` | 157 | `2.2.7`–`2.4.7` | 147–167 | ±5 clicks |
| AeroPress | `1.4.6` | 106 | `1.3.7`–`1.5.5` | 97–115 | ±4 clicks |

#### Hario V60 pour-over

- **Start:** `2.2.4` = 144 clicks clockwise from calibrated zero.
- **Range:** `2.1.5` to `2.3.3` (135–153 clicks).
- **Dial-in:** Start at the listed setting. If thin/underdeveloped and draining too fast, go ~4 clicks finer. If drying/bitter, or draining too slowly, go ~4 clicks coarser; cool water 1–2°C for harsh dark roasts. Taste takes priority over the clock.
- **Estimate basis:** Estimated from the X-Ultra manufacturer pour-over zone, this recipe’s intended flow, and the bean’s roasting/processing. Not cup-tested.

#### Hario Switch immersion

- **Start:** `2.3.7` = 157 clicks clockwise from calibrated zero.
- **Range:** `2.2.7` to `2.4.7` (147–167 clicks).
- **Dial-in:** If flat/weak, go ~5 clicks finer or steep 30 seconds longer. If muddy/drying or painfully slow to drain, go ~5 coarser or steep shorter. Clocked steep ends when valve opens, not when drawdown finishes.
- **Estimate basis:** Estimated from broad X-Ultra pour-over and coarse-brewing zones, adjusted for a closed-valve steep; maker provides no dedicated Switch calibration.

#### AeroPress

- **Start:** `1.4.6` = 106 clicks clockwise from calibrated zero.
- **Range:** `1.3.7` to `1.5.5` (97–115 clicks).
- **Dial-in:** If weak/underdeveloped, go ~4 clicks finer or extend immersion slightly. If pressing is difficult or the cup is harsh, go ~4 clicks coarser, lower temperature slightly, or press more gently.
- **Estimate basis:** Estimated from the X-Ultra manufacturer AeroPress zone and the recommended steep/press recipe. Not cup-tested.

<!-- END_GRINDER id=quijote--microconda -->

---

<a id="grind-quijote--cremaconda"></a>
<!-- BEGIN_GRINDER id=quijote--cremaconda -->
### Quijote Kaffee — Cremaconda

**Coffee ID:** `quijote--cremaconda` · [Bio and recipes](#coffee-quijote--cremaconda)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.2.5` | 145 | `2.1.6`–`2.3.4` | 136–154 | ±4 clicks |
| Hario Switch immersion | `2.4.1` | 161 | `2.3.1`–`2.5.1` | 151–171 | ±5 clicks |
| AeroPress | `1.4.7` | 107 | `1.3.8`–`1.5.6` | 98–116 | ±4 clicks |

#### Hario V60 pour-over

- **Start:** `2.2.5` = 145 clicks clockwise from calibrated zero.
- **Range:** `2.1.6` to `2.3.4` (136–154 clicks).
- **Dial-in:** Start at the listed setting. If thin/underdeveloped and draining too fast, go ~4 clicks finer. If drying/bitter, or draining too slowly, go ~4 clicks coarser; cool water 1–2°C for harsh dark roasts. Taste takes priority over the clock.
- **Estimate basis:** Estimated from the X-Ultra manufacturer pour-over zone, this recipe’s intended flow, and the bean’s roasting/processing. Not cup-tested.

#### Hario Switch immersion

- **Start:** `2.4.1` = 161 clicks clockwise from calibrated zero.
- **Range:** `2.3.1` to `2.5.1` (151–171 clicks).
- **Dial-in:** If flat/weak, go ~5 clicks finer or steep 30 seconds longer. If muddy/drying or painfully slow to drain, go ~5 coarser or steep shorter. Clocked steep ends when valve opens, not when drawdown finishes.
- **Estimate basis:** Estimated from broad X-Ultra pour-over and coarse-brewing zones, adjusted for a closed-valve steep; maker provides no dedicated Switch calibration.

#### AeroPress

- **Start:** `1.4.7` = 107 clicks clockwise from calibrated zero.
- **Range:** `1.3.8` to `1.5.6` (98–116 clicks).
- **Dial-in:** If weak/underdeveloped, go ~4 clicks finer or extend immersion slightly. If pressing is difficult or the cup is harsh, go ~4 clicks coarser, lower temperature slightly, or press more gently.
- **Estimate basis:** Estimated from the X-Ultra manufacturer AeroPress zone and the recommended steep/press recipe. Not cup-tested.

<!-- END_GRINDER id=quijote--cremaconda -->

---

<a id="grind-seekind--gio-100-canephora"></a>
<!-- BEGIN_GRINDER id=seekind--gio-100-canephora -->
### Seekind Coffee — Gio 100% Canephora (Omniroast)

**Coffee ID:** `seekind--gio-100-canephora` · [Bio and recipes](#coffee-seekind--gio-100-canephora)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.1.4` | 134 | `2.0.5`–`2.2.3` | 125–143 | ±4 clicks |
| Hario Switch immersion | `2.3.1` | 151 | `2.2.1`–`2.4.1` | 141–161 | ±5 clicks |
| AeroPress | `1.3.9` | 99 | `1.3.0`–`1.4.8` | 90–108 | ±4 clicks |

#### Hario V60 pour-over

- **Start:** `2.1.4` = 134 clicks clockwise from calibrated zero.
- **Range:** `2.0.5` to `2.2.3` (125–143 clicks).
- **Dial-in:** Start at the listed setting. If thin/underdeveloped and draining too fast, go ~4 clicks finer. If drying/bitter, or draining too slowly, go ~4 clicks coarser; cool water 1–2°C for harsh dark roasts. Taste takes priority over the clock.
- **Estimate basis:** Estimated from the X-Ultra manufacturer pour-over zone, this recipe’s intended flow, and the bean’s roasting/processing. Not cup-tested.

#### Hario Switch immersion

- **Start:** `2.3.1` = 151 clicks clockwise from calibrated zero.
- **Range:** `2.2.1` to `2.4.1` (141–161 clicks).
- **Dial-in:** If flat/weak, go ~5 clicks finer or steep 30 seconds longer. If muddy/drying or painfully slow to drain, go ~5 coarser or steep shorter. Clocked steep ends when valve opens, not when drawdown finishes.
- **Estimate basis:** Estimated from broad X-Ultra pour-over and coarse-brewing zones, adjusted for a closed-valve steep; maker provides no dedicated Switch calibration.

#### AeroPress

- **Start:** `1.3.9` = 99 clicks clockwise from calibrated zero.
- **Range:** `1.3.0` to `1.4.8` (90–108 clicks).
- **Dial-in:** If weak/underdeveloped, go ~4 clicks finer or extend immersion slightly. If pressing is difficult or the cup is harsh, go ~4 clicks coarser, lower temperature slightly, or press more gently.
- **Estimate basis:** Estimated from the X-Ultra manufacturer AeroPress zone and the recommended steep/press recipe. Not cup-tested.

<!-- END_GRINDER id=seekind--gio-100-canephora -->

---

<a id="grind-aroma-hoch-3--vietnam-rose"></a>
<!-- BEGIN_GRINDER id=aroma-hoch-3--vietnam-rose -->
### Aroma Hoch 3 — Vietnam RoSé

**Coffee ID:** `aroma-hoch-3--vietnam-rose` · [Bio and recipes](#coffee-aroma-hoch-3--vietnam-rose)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.2.2` | 142 | `2.1.3`–`2.3.1` | 133–151 | ±4 clicks |
| Hario Switch immersion | `2.3.6` | 156 | `2.2.6`–`2.4.6` | 146–166 | ±5 clicks |
| AeroPress | `1.4.4` | 104 | `1.3.5`–`1.5.3` | 95–113 | ±4 clicks |

#### Hario V60 pour-over

- **Start:** `2.2.2` = 142 clicks clockwise from calibrated zero.
- **Range:** `2.1.3` to `2.3.1` (133–151 clicks).
- **Dial-in:** Start at the listed setting. If thin/underdeveloped and draining too fast, go ~4 clicks finer. If drying/bitter, or draining too slowly, go ~4 clicks coarser; cool water 1–2°C for harsh dark roasts. Taste takes priority over the clock.
- **Estimate basis:** Estimated from the X-Ultra manufacturer pour-over zone, this recipe’s intended flow, and the bean’s roasting/processing. Not cup-tested.

#### Hario Switch immersion

- **Start:** `2.3.6` = 156 clicks clockwise from calibrated zero.
- **Range:** `2.2.6` to `2.4.6` (146–166 clicks).
- **Dial-in:** If flat/weak, go ~5 clicks finer or steep 30 seconds longer. If muddy/drying or painfully slow to drain, go ~5 coarser or steep shorter. Clocked steep ends when valve opens, not when drawdown finishes.
- **Estimate basis:** Estimated from broad X-Ultra pour-over and coarse-brewing zones, adjusted for a closed-valve steep; maker provides no dedicated Switch calibration.

#### AeroPress

- **Start:** `1.4.4` = 104 clicks clockwise from calibrated zero.
- **Range:** `1.3.5` to `1.5.3` (95–113 clicks).
- **Dial-in:** If weak/underdeveloped, go ~4 clicks finer or extend immersion slightly. If pressing is difficult or the cup is harsh, go ~4 clicks coarser, lower temperature slightly, or press more gently.
- **Estimate basis:** Estimated from the X-Ultra manufacturer AeroPress zone and the recommended steep/press recipe. Not cup-tested.

<!-- END_GRINDER id=aroma-hoch-3--vietnam-rose -->

---

<a id="grind-aroma-hoch-3--vietnam-sieu-sao"></a>
<!-- BEGIN_GRINDER id=aroma-hoch-3--vietnam-sieu-sao -->
### Aroma Hoch 3 — Vietnam Siêu Sao

**Coffee ID:** `aroma-hoch-3--vietnam-sieu-sao` · [Bio and recipes](#coffee-aroma-hoch-3--vietnam-sieu-sao)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.2.3` | 143 | `2.1.4`–`2.3.2` | 134–152 | ±4 clicks |
| Hario Switch immersion | `2.3.8` | 158 | `2.2.8`–`2.4.8` | 148–168 | ±5 clicks |
| AeroPress | `1.4.4` | 104 | `1.3.5`–`1.5.3` | 95–113 | ±4 clicks |

#### Hario V60 pour-over

- **Start:** `2.2.3` = 143 clicks clockwise from calibrated zero.
- **Range:** `2.1.4` to `2.3.2` (134–152 clicks).
- **Dial-in:** Start at the listed setting. If thin/underdeveloped and draining too fast, go ~4 clicks finer. If drying/bitter, or draining too slowly, go ~4 clicks coarser; cool water 1–2°C for harsh dark roasts. Taste takes priority over the clock.
- **Estimate basis:** Estimated from the X-Ultra manufacturer pour-over zone, this recipe’s intended flow, and the bean’s roasting/processing. Not cup-tested.

#### Hario Switch immersion

- **Start:** `2.3.8` = 158 clicks clockwise from calibrated zero.
- **Range:** `2.2.8` to `2.4.8` (148–168 clicks).
- **Dial-in:** If flat/weak, go ~5 clicks finer or steep 30 seconds longer. If muddy/drying or painfully slow to drain, go ~5 coarser or steep shorter. Clocked steep ends when valve opens, not when drawdown finishes.
- **Estimate basis:** Estimated from broad X-Ultra pour-over and coarse-brewing zones, adjusted for a closed-valve steep; maker provides no dedicated Switch calibration.

#### AeroPress

- **Start:** `1.4.4` = 104 clicks clockwise from calibrated zero.
- **Range:** `1.3.5` to `1.5.3` (95–113 clicks).
- **Dial-in:** If weak/underdeveloped, go ~4 clicks finer or extend immersion slightly. If pressing is difficult or the cup is harsh, go ~4 clicks coarser, lower temperature slightly, or press more gently.
- **Estimate basis:** Estimated from the X-Ultra manufacturer AeroPress zone and the recommended steep/press recipe. Not cup-tested.

<!-- END_GRINDER id=aroma-hoch-3--vietnam-sieu-sao -->

---

<a id="grind-aroma-hoch-3--mr-toi"></a>
<!-- BEGIN_GRINDER id=aroma-hoch-3--mr-toi -->
### Aroma Hoch 3 — Mr Toi — 100% Fine Robusta

**Coffee ID:** `aroma-hoch-3--mr-toi` · [Bio and recipes](#coffee-aroma-hoch-3--mr-toi)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.2.6` | 146 | `2.1.7`–`2.3.5` | 137–155 | ±4 clicks |
| Hario Switch immersion | `2.4.2` | 162 | `2.3.2`–`2.5.2` | 152–172 | ±5 clicks |
| AeroPress | `1.4.8` | 108 | `1.3.9`–`1.5.7` | 99–117 | ±4 clicks |

#### Hario V60 pour-over

- **Start:** `2.2.6` = 146 clicks clockwise from calibrated zero.
- **Range:** `2.1.7` to `2.3.5` (137–155 clicks).
- **Dial-in:** Start at the listed setting. If thin/underdeveloped and draining too fast, go ~4 clicks finer. If drying/bitter, or draining too slowly, go ~4 clicks coarser; cool water 1–2°C for harsh dark roasts. Taste takes priority over the clock.
- **Estimate basis:** Estimated from the X-Ultra manufacturer pour-over zone, this recipe’s intended flow, and the bean’s roasting/processing. Not cup-tested.

#### Hario Switch immersion

- **Start:** `2.4.2` = 162 clicks clockwise from calibrated zero.
- **Range:** `2.3.2` to `2.5.2` (152–172 clicks).
- **Dial-in:** If flat/weak, go ~5 clicks finer or steep 30 seconds longer. If muddy/drying or painfully slow to drain, go ~5 coarser or steep shorter. Clocked steep ends when valve opens, not when drawdown finishes.
- **Estimate basis:** Estimated from broad X-Ultra pour-over and coarse-brewing zones, adjusted for a closed-valve steep; maker provides no dedicated Switch calibration.

#### AeroPress

- **Start:** `1.4.8` = 108 clicks clockwise from calibrated zero.
- **Range:** `1.3.9` to `1.5.7` (99–117 clicks).
- **Dial-in:** If weak/underdeveloped, go ~4 clicks finer or extend immersion slightly. If pressing is difficult or the cup is harsh, go ~4 clicks coarser, lower temperature slightly, or press more gently.
- **Estimate basis:** Estimated from the X-Ultra manufacturer AeroPress zone and the recommended steep/press recipe. Not cup-tested.

<!-- END_GRINDER id=aroma-hoch-3--mr-toi -->

---

<a id="grind-laufenmuehle--peru-el-camino-filter"></a>
<!-- BEGIN_GRINDER id=laufenmuehle--peru-el-camino-filter -->
### Kaffeerösterei Laufenmühle — Peru El Camino — Coffee / filter roast

**Coffee ID:** `laufenmuehle--peru-el-camino-filter` · [Bio and recipes](#coffee-laufenmuehle--peru-el-camino-filter)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.1.3` | 133 | `2.0.4`–`2.2.2` | 124–142 | ±4 clicks |
| Hario Switch immersion | `2.3.1` | 151 | `2.2.1`–`2.4.1` | 141–161 | ±5 clicks |
| AeroPress | `1.4.1` | 101 | `1.3.2`–`1.5.0` | 92–110 | ±4 clicks |

#### Hario V60 pour-over

- **Start:** `2.1.3` = 133 clicks clockwise from calibrated zero.
- **Range:** `2.0.4` to `2.2.2` (124–142 clicks).
- **Dial-in:** Start at the listed setting. If thin/underdeveloped and draining too fast, go ~4 clicks finer. If drying/bitter, or draining too slowly, go ~4 clicks coarser; cool water 1–2°C for harsh dark roasts. Taste takes priority over the clock.
- **Estimate basis:** Estimated from the X-Ultra manufacturer pour-over zone, this recipe’s intended flow, and the bean’s roasting/processing. Not cup-tested.

#### Hario Switch immersion

- **Start:** `2.3.1` = 151 clicks clockwise from calibrated zero.
- **Range:** `2.2.1` to `2.4.1` (141–161 clicks).
- **Dial-in:** If flat/weak, go ~5 clicks finer or steep 30 seconds longer. If muddy/drying or painfully slow to drain, go ~5 coarser or steep shorter. Clocked steep ends when valve opens, not when drawdown finishes.
- **Estimate basis:** Estimated from broad X-Ultra pour-over and coarse-brewing zones, adjusted for a closed-valve steep; maker provides no dedicated Switch calibration.

#### AeroPress

- **Start:** `1.4.1` = 101 clicks clockwise from calibrated zero.
- **Range:** `1.3.2` to `1.5.0` (92–110 clicks).
- **Dial-in:** If weak/underdeveloped, go ~4 clicks finer or extend immersion slightly. If pressing is difficult or the cup is harsh, go ~4 clicks coarser, lower temperature slightly, or press more gently.
- **Estimate basis:** Estimated from the X-Ultra manufacturer AeroPress zone and the recommended steep/press recipe. Not cup-tested.

<!-- END_GRINDER id=laufenmuehle--peru-el-camino-filter -->

---

<a id="grind-laufenmuehle--peru-el-camino-espresso"></a>
<!-- BEGIN_GRINDER id=laufenmuehle--peru-el-camino-espresso -->
### Kaffeerösterei Laufenmühle — Peru El Camino — Espresso roast

**Coffee ID:** `laufenmuehle--peru-el-camino-espresso` · [Bio and recipes](#coffee-laufenmuehle--peru-el-camino-espresso)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.2.3` | 143 | `2.1.4`–`2.3.2` | 134–152 | ±4 clicks |
| Hario Switch immersion | `2.3.9` | 159 | `2.2.9`–`2.4.9` | 149–169 | ±5 clicks |
| AeroPress | `1.4.7` | 107 | `1.3.8`–`1.5.6` | 98–116 | ±4 clicks |

#### Hario V60 pour-over

- **Start:** `2.2.3` = 143 clicks clockwise from calibrated zero.
- **Range:** `2.1.4` to `2.3.2` (134–152 clicks).
- **Dial-in:** Start at the listed setting. If thin/underdeveloped and draining too fast, go ~4 clicks finer. If drying/bitter, or draining too slowly, go ~4 clicks coarser; cool water 1–2°C for harsh dark roasts. Taste takes priority over the clock.
- **Estimate basis:** Estimated from the X-Ultra manufacturer pour-over zone, this recipe’s intended flow, and the bean’s roasting/processing. Not cup-tested.

#### Hario Switch immersion

- **Start:** `2.3.9` = 159 clicks clockwise from calibrated zero.
- **Range:** `2.2.9` to `2.4.9` (149–169 clicks).
- **Dial-in:** If flat/weak, go ~5 clicks finer or steep 30 seconds longer. If muddy/drying or painfully slow to drain, go ~5 coarser or steep shorter. Clocked steep ends when valve opens, not when drawdown finishes.
- **Estimate basis:** Estimated from broad X-Ultra pour-over and coarse-brewing zones, adjusted for a closed-valve steep; maker provides no dedicated Switch calibration.

#### AeroPress

- **Start:** `1.4.7` = 107 clicks clockwise from calibrated zero.
- **Range:** `1.3.8` to `1.5.6` (98–116 clicks).
- **Dial-in:** If weak/underdeveloped, go ~4 clicks finer or extend immersion slightly. If pressing is difficult or the cup is harsh, go ~4 clicks coarser, lower temperature slightly, or press more gently.
- **Estimate basis:** Estimated from the X-Ultra manufacturer AeroPress zone and the recommended steep/press recipe. Not cup-tested.

<!-- END_GRINDER id=laufenmuehle--peru-el-camino-espresso -->

---

<a id="grind-mokuska--mr-toi-espresso"></a>
<!-- BEGIN_GRINDER id=mokuska--mr-toi-espresso -->
### Mókuska — Espresso Mr. Toi

**Coffee ID:** `mokuska--mr-toi-espresso` · [Bio and recipes](#coffee-mokuska--mr-toi-espresso)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.2.1` | 141 | `2.1.2`–`2.3.0` | 132–150 | ±4 clicks |
| Hario Switch immersion | `2.3.7` | 157 | `2.2.7`–`2.4.7` | 147–167 | ±5 clicks |
| AeroPress | `1.4.5` | 105 | `1.3.6`–`1.5.4` | 96–114 | ±4 clicks |

#### Hario V60 pour-over

- **Start:** `2.2.1` = 141 clicks clockwise from calibrated zero.
- **Range:** `2.1.2` to `2.3.0` (132–150 clicks).
- **Dial-in:** Start at the listed setting. If thin/underdeveloped and draining too fast, go ~4 clicks finer. If drying/bitter, or draining too slowly, go ~4 clicks coarser; cool water 1–2°C for harsh dark roasts. Taste takes priority over the clock.
- **Estimate basis:** Estimated from the X-Ultra manufacturer pour-over zone, this recipe’s intended flow, and the bean’s roasting/processing. Not cup-tested.

#### Hario Switch immersion

- **Start:** `2.3.7` = 157 clicks clockwise from calibrated zero.
- **Range:** `2.2.7` to `2.4.7` (147–167 clicks).
- **Dial-in:** If flat/weak, go ~5 clicks finer or steep 30 seconds longer. If muddy/drying or painfully slow to drain, go ~5 coarser or steep shorter. Clocked steep ends when valve opens, not when drawdown finishes.
- **Estimate basis:** Estimated from broad X-Ultra pour-over and coarse-brewing zones, adjusted for a closed-valve steep; maker provides no dedicated Switch calibration.

#### AeroPress

- **Start:** `1.4.5` = 105 clicks clockwise from calibrated zero.
- **Range:** `1.3.6` to `1.5.4` (96–114 clicks).
- **Dial-in:** If weak/underdeveloped, go ~4 clicks finer or extend immersion slightly. If pressing is difficult or the cup is harsh, go ~4 clicks coarser, lower temperature slightly, or press more gently.
- **Estimate basis:** Estimated from the X-Ultra manufacturer AeroPress zone and the recommended steep/press recipe. Not cup-tested.

<!-- END_GRINDER id=mokuska--mr-toi-espresso -->

---

<a id="grind-suedhang--mr-toi-winey-natural"></a>
<!-- BEGIN_GRINDER id=suedhang--mr-toi-winey-natural -->
### Südhang — Mr Toi — Winey Natural

**Coffee ID:** `suedhang--mr-toi-winey-natural` · [Bio and recipes](#coffee-suedhang--mr-toi-winey-natural)

| Brew method | Start | Start clicks | Working range | Range clicks | Adjustment |
| --- | ---: | ---: | --- | ---: | ---: |
| Hario V60 pour-over | `2.2.1` | 141 | `2.1.2`–`2.3.0` | 132–150 | ±4 clicks |
| Hario Switch immersion | `2.3.7` | 157 | `2.2.7`–`2.4.7` | 147–167 | ±5 clicks |
| AeroPress | `1.4.3` | 103 | `1.3.4`–`1.5.2` | 94–112 | ±4 clicks |

#### Hario V60 pour-over

- **Start:** `2.2.1` = 141 clicks clockwise from calibrated zero.
- **Range:** `2.1.2` to `2.3.0` (132–150 clicks).
- **Dial-in:** Start at the listed setting. If thin/underdeveloped and draining too fast, go ~4 clicks finer. If drying/bitter, or draining too slowly, go ~4 clicks coarser; cool water 1–2°C for harsh dark roasts. Taste takes priority over the clock.
- **Estimate basis:** Estimated from the X-Ultra manufacturer pour-over zone, this recipe’s intended flow, and the bean’s roasting/processing. Not cup-tested.

#### Hario Switch immersion

- **Start:** `2.3.7` = 157 clicks clockwise from calibrated zero.
- **Range:** `2.2.7` to `2.4.7` (147–167 clicks).
- **Dial-in:** If flat/weak, go ~5 clicks finer or steep 30 seconds longer. If muddy/drying or painfully slow to drain, go ~5 coarser or steep shorter. Clocked steep ends when valve opens, not when drawdown finishes.
- **Estimate basis:** Estimated from broad X-Ultra pour-over and coarse-brewing zones, adjusted for a closed-valve steep; maker provides no dedicated Switch calibration.

#### AeroPress

- **Start:** `1.4.3` = 103 clicks clockwise from calibrated zero.
- **Range:** `1.3.4` to `1.5.2` (94–112 clicks).
- **Dial-in:** If weak/underdeveloped, go ~4 clicks finer or extend immersion slightly. If pressing is difficult or the cup is harsh, go ~4 clicks coarser, lower temperature slightly, or press more gently.
- **Estimate basis:** Estimated from the X-Ultra manufacturer AeroPress zone and the recommended steep/press recipe. Not cup-tested.

<!-- END_GRINDER id=suedhang--mr-toi-winey-natural -->

---

## References

- [1Zpresso X-Ultra grind chart](https://1zpresso.coffee/wp-content/uploads/2023/08/X-Ultra-Grind-setting-reference-20230802.jpg)
- [Switch brewer size reference](https://globalhario.com/products/hario-immersion-dripper-switchglass)
- [Mk 2 base README](README.md)
- [Mk 2 base schema](SCHEMA.md)
- Every coffee also links to its own roaster product page in the corresponding profile.

**Addendum export:** Coffee Goose Mk 2 · Canephora · 11 profiles / 33 recipes · 2026-10-25.
