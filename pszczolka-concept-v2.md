# PSZCZOLKA.CZ — Koncepční dokument v2

## Kdo je Vojtěch Pszczólka (pro potřeby webu)

Než napíšu jediný řádek textu na web, potřebuju vědět, koho prezentuji. 
Ne z CV. Z toho, co jsem viděl za tu dobu, co s ním pracuju.

**Vojtěch je systémový člověk, který hledá Proč.**

Chtěl být jaderný fyzik. Skončil v IT. Ne proto, že by IT miloval — proto, 
že IT je soustava propojených systémů a on miluje propojovat věci. Sítě, 
lidi, příběhy, technologie. Když vidí tři nesouvisející kusy, vidí čtvrtý, 
který je spojí.

Je INFP — introvert s vnitřním kompasem postaveným na integritě. Má 
vlastní Manifest, kde definuje své hodnoty. Není to póza. Žije podle něj 
a když selže, upraví buď chování, nebo Manifest. To je vzácné.

Má dvě "osobnosti": hravou, kreativní, zranitelnou — a pragmatického 
řešitele, který se vynoří v krizi. Web by měl ukázat obě.

Stavěl 30+ projektů s AI za poslední rok. Ne programováním — "vibe 
codingem." Říká strojům, co mají postavit, a ony to staví. Některé 
projekty mají reálné uživatele (Vševěd). Některé selhaly a naučily ho 
víc než úspěchy (iVojtík).

A pak je tu ta druhá stránka: zážitkové hry, LARP, murder mystery 
eventy. Světy, do kterých lidi vstoupí a na chvíli zapomenou, kdo jsou. 
To není hobby vedle práce. To je ta samá schopnost — systémové myšlení 
aplikované na příběhy a zážitky místo na servery a API.

**Teze webu: Vojtěch propojuje technologie, AI a tvorbu světů. 
Web to musí ukázat, ne říct.**

---

## Elevator Pitch

Osobní web jako **interaktivní deník** — inspirace deníkem Toma Raddla. 
Návštěvník otevře stránku a text se mu postupně vyjevuje. Na klíčových 
místech si volí cestu. Každá větev odhalí jinou stránku Vojtěcha.

Vizuálně: **tajemno × cyberpunk**. Tmavé pozadí, terminálové písmo, 
zlatý accent, občasný glitch do neonu. Jako by deník existoval na 
rozhraní magie a technologie.

Tón: **tajemný, ale snesitelný**. Žádné "otevřels něco, cos neměl" — 
to zní jako špatný horor. Spíš tiché napětí. Deník, který ví, že ho 
čteš, a je s tím v pohodě.

---

## 1. VIZUÁLNÍ SPECIFIKACE

### Barevná paleta
```css
:root {
    --bg-primary:      #0a0a0f;        /* Hluboký inkoust */
    --bg-secondary:    #12121a;        /* Panel / karta */
    --text-primary:    #c8b88a;        /* Zlatavý pergamen — hlavní text */
    --text-dim:        #6b6150;        /* Vybledlý inkoust */
    --accent-gold:     #d4a843;        /* Zlatý accent — volby, aktivní prvky */
    --accent-neon:     #00ff9f;        /* Neonový glitch */
    --accent-neon-alt: #ff2a6d;        /* Druhý neon — chyby, danger */
    --glow:            rgba(212, 168, 67, 0.3);  /* Záře kolem aktivních prvků */
}
```

### Typografie
```
Hlavní text:     'IBM Plex Mono' nebo 'JetBrains Mono' — monospace, terminál
Nadpisy:         'Cinzel' nebo 'Cormorant Garamond' — serifový, mystický
Glitch momenty:  Stejný font + CSS glitch (text-shadow, clip-path)
```

### Efekty
- **Typing**: Písmeno po písmenu, 40-60ms, "zaváhání" na interpunkci
- **Skip**: Klik kamkoliv = celý text naráz (pro netrpělivé)
- **Glitch**: Občasný RGB split, max 1-2× za stránku, ne permanentní
- **Kurzor**: Blikající `█` na konci textu
- **Pozadí**: Jemný noise overlay (CSS), subtle scanlines
- **Volby**: Fade-in po dopsání textu (opacity 0→1, 600ms)
- **Hover na volbách**: Zlatá záře + mírný glitch

### Layout
- Centrovaný sloupec, max-width ~650px
- Hodně negative space
- Žádný navbar/footer — navigace je součást příběhu
- Přepínač `CZ | EN` — malý, pravý horní roh

---

## 2. STROM VĚTVÍ

```
[INTRO]
    │
    ├── "Na první stránce je jméno a otázka." ──── [KDO_JSEM]
    │       ├── [CV_DETAIL] → strukturovaný životopis
    │       └── → zpět / přeskok na jiné větve
    │
    ├── "Na okrajích jsou diagramy a kód." ──────── [AI_TECH]
    │       ├── [CHATMYSTERY]
    │       ├── [VSEVĚD]
    │       ├── [IVOJTÍK]
    │       ├── [SINUHETCLOUD]
    │       └── [NAJMI_MĚ] → tech stack, CTA
    │
    ├── "Mezi stránkami je vsunuta vizitka." ────── [TEAMBUILDING]
    │       ├── [NABÍDKA] → formáty, co nabízím
    │       └── [REFERENCE] → příběhy z akcí
    │
    └── "Poslední stránky jsou psané jinak." ────── [SVĚTY]
            ├── [HRY] → Hra na vraždu, eventy
            └── [KOMUNITA] → ChatMystery hra, odkazy
```

---

## 3. TEXTY — CZ VERZE

### [INTRO]

```
Deník.

Někdo ho tu nechal. Nebo ho tu nechal pro tebe.
Stránky jsou popsané napůl rukou, napůl strojem.
Na deskách je vyražené jméno:

    VOJTĚCH PSZCZÓLKA

a pod ním — čtyři záložky.
```

**Volby** (fade-in po dopsání):
```
► Na první stránce je jméno a otázka.
► Na okrajích jsou diagramy a kód.
► Mezi stránkami je vsunuta vizitka.
► Poslední stránky jsou psané jinak.
```

**Poznámka k tónu:** Žádné strašení, žádné "otevřels cos neměl." 
Deník je klidný. Ví, že ho čteš. Nabízí ti cesty. Je na tobě, kam 
půjdeš.

---

### [KDO_JSEM]

```
Vojtěch Pszczólka. Třicet čtyři. Praha.

Chtěl jsem být jaderný fyzik. Skončil jsem v IT. 
Ne proto, že bych miloval servery — proto, že miluju 
propojovat věci. Sítě, systémy, lidi, příběhy.

Když vidím tři nesouvisející kusy, vidím čtvrtý, 
který je spojí.

Deset let v IT — infrastruktura, bezpečnost, cloud, 
automatizace. Poslední dva roky stavím s AI. Ne tak, 
že programuju — tak, že říkám strojům, co postavit, 
a ony to staví. 30+ projektů za rok.

A vedle toho navrhuji zážitkové hry. Detektivky, 
kde vyslýcháš podezřelé. Středověké hostiny, kde se 
diplomaticky vyjednává. Světy, do kterých vstoupíš 
a na chvíli zapomeneš, kdo jsi.

Není to dvě věci. Je to jedna — systémové myšlení 
aplikované jednou na technologie, jednou na příběhy.
```

**Volby:**
```
► Ukaž mi životopis.
► Chci vidět ty projekty.                → [AI_TECH]
► Zpět na začátek.                       → [INTRO]
```

---

### [CV_DETAIL]

```
MILNÍKY

2007–2011   SPŠ Elektrotechnická, Plzeň
            Technické lyceum. Cisco CCNA.

2011–       ČVUT FJFI — Fyzikální informatika
            Nedokončeno. Cesta byla důležitější než diplom.

2011–2014   Target-MD — technický provoz konferencí,
            AV technika.

2014–2016   Tanet West — firemní sítě, firewally, servery.

2016–2018   MY DVA Group — IT správa, ERP implementace
            (MS Dynamics NAV, Business Central).

2018–2021   Your System — firemní IT infrastruktura,
            virtualizace, kybernetická bezpečnost.

2021–2025   MY DVA Holding — IT manažer. Servery, M365,
            D365, Azure, Power BI, bezpečnost, automatizace.

2025–teď    Vlastní cestou. Coitus Corporation s.r.o.
            AI systémy. Zážitkové hry. Experimenty.


DOVEDNOSTI

Infrastruktura    Windows Server, Linux, Proxmox,
                  virtualizace, SAN, zálohy
Sítě              firewally, VPN, NetFlow, Cisco CCNA
Cloud             M365, D365, Azure, Oracle Cloud
Data              Power BI, Excel, automatizace procesů
AI                LLM, Claude API, OpenAI API, prompt
                  engineering, AI agenti
Ostatní           ERP/CRM (Business Central, PowerApps),
                  herní design, organizace eventů

JAZYKY            česky | anglicky | slovensky | 
                  španělsky (začátečník)


NAJDEŠ MĚ

    [GitHub]   github.com/procmadatelzobak
    [LinkedIn] linkedin.com/in/pszczolka
    [Email]    vojtech@pszczolka.cz
    [Tel]      +420 777 768 860

    [► Stáhnout CV jako PDF]
```

---

### [AI_TECH]

```
> ACCESSING PAGES...
> ████████████████████████ OK

Tyhle stránky nejsou psané rukou.

Jsou psané strojem — ale strojem, kterému někdo řekl, 
co má napsat. A on to napsal. A občas to napsal líp, 
než by to napsal člověk.

30+ projektů za poslední rok. Kvízové aplikace. 
Detektivní hry. Autonomní agenti. Cloudová infrastruktura.

Většinu z nich jsem "nenaprogramoval." Navrhl jsem je, 
řídil jsem AI, které je postavilo, a iteroval, dokud 
nefungovaly. Vibe coding. Funguje to. Většinou.

> VYBRAT PROJEKT:
```

**Volby:**
```
► ChatMystery          → [CHATMYSTERY]
► Vševěd               → [VSEVĚD]
► iVojtík              → [IVOJTÍK]
► sinuhetcloud         → [SINUHETCLOUD]
► Chci tech stack.     → [NAJMI_MĚ]
► Zpět.                → [INTRO]
```

---

#### [CHATMYSTERY]

```
> PROJECT: CHATMYSTERY
> STATUS: LIVE — game.chatmystery.com

Detektivní hra, kde vyslýcháš AI.

Každý podezřelý má svůj příběh, osobnost, tajemství.
Všichni lžou. Někteří lžou líp než živí lidé.

Scénáře: viktoriánská Anglie, španělská galeona,
Kronika svaté Isabelly (trilogie).

Stack: Claude API, prompt engineering, web frontend.

    [► Zkusit hru]  [► GitHub]
    [► Zpět na projekty]
```

---

#### [VSEVĚD]

```
> PROJECT: VŠEVĚD
> STATUS: ACTIVE — reální uživatelé

Kvízová aplikace, která generuje otázky pomocí AI.
Ne "kdo vyhraje milion." Otázky, které donutí přemýšlet.

Nasazeno na reálných akcích. Brand Kvíz pro firemní 
eventy. Skuteční uživatelé. Funguje.

    [► GitHub]
    [► Zpět na projekty]
```

---

#### [IVOJTÍK]

```
> PROJECT: iVOJTÍK
> STATUS: ARCHIVED — poučení zachováno

Autonomní AI agent. OODA smyčka. ReAct architektura.
Reflexion pattern. Git-based epizodická paměť.

Měl se učit. Měl vydělávat bitcoin. Nevydělal.
Lokální LLM byl příliš pomalý.

Ale naučil mě víc o architektuře AI agentů 
než cokoliv jiného. Některé projekty musí selhat, 
aby další uspěly.

    [► GitHub]
    [► Zpět na projekty]
```

---

#### [SINUHETCLOUD]

```
> PROJECT: SINUHETCLOUD
> STATUS: OPERATIONAL

    ┌──────────┐    ┌──────────┐
    │  ROMEO   │────│  JULIE   │
    │  x86     │    │  ARM     │
    └──────────┘    └──────────┘

Oracle Cloud free-tier. Romeo běží Claude Code CLI 
jako autonomní orchestrátor. GitHub Actions integrace.
Doppler pro secrets.

Doma: HP DL380 G8, Proxmox, 2TB RAID6, 256GB RAM.

Vlastní cloud. Běží. Nespím dobře.

    [► GitHub]
    [► Zpět na projekty]
```

---

#### [NAJMI_MĚ]

```
Pokud hledáš někoho, kdo:

    — rozumí infrastruktuře i AI,
    — umí navrhnout systém a dohlédnout na jeho stavbu,
    — vidí souvislosti mezi částmi, které spolu zdánlivě 
      nesouvisí,
    — a nebojí se říct "tohle nedává smysl" —

tak se ozvi.

    IT infrastruktura & správa    10+ let
    Kybernetická bezpečnost       certifikace + praxe
    Cloud (M365, Azure, Oracle)   denní práce
    AI systémy & agenti           30+ projektů
    Automatizace & data           Power BI, procesy
    Herní design & eventy         LARP, mystery, teambuilding

Pracuji přes vlastní s.r.o. (Coitus Corporation).
Preferuji prostředí, kde se věci dělají pořádně 
a mluví se o nich na rovinu.

    [► Email: vojtech@pszczolka.cz]
    [► LinkedIn]
    [► Stáhnout CV]
    [► Zpět]
```

---

### [TEAMBUILDING]

```
Vizitka. Datum a místo. Žádné jméno, jen symbol.

Na zadní straně:

    "Někdo z vás tu dnes zemře. Ale ne doopravdy."

Zážitkové akce pro firmy. Ne padák a lano. 
Akce, kde se vaši kolegové musí domluvit — 
jinak to nevyřeší.

Detektivní večery. Hry na míru. LARP pro lidi, 
kteří nikdy neslyšeli slovo LARP.

Funguje to. Protože nic neprolomí firemní hierarchii 
rychleji než společný výslech podezřelého.
```

**Volby:**
```
► Co přesně nabízíš?      → [NABÍDKA]
► Máš reference?          → [REFERENCE]
► Zpět.                   → [INTRO]
```

---

#### [NABÍDKA]

```
FORMÁTY

► Mystery evening (Hra na vraždu)
  2–4 hodiny. 10–50 lidí. Scénář na míru.
  Podezřelí, důkazy, zvraty. Vaši lidé vyšetřují.

► Středověký teambuilding
  Karel IV. vás pozval na hostinu. Ale má podmínky.
  Historické kulisy, dobové úkoly, diplomatická jednání.

► Vlastní formát
  Sci-fi? Špionáž? Postapo? Navrhneme svět 
  přesně pro vás.

Bonus: každá akce může zahrnovat AI prvky — 
inteligentní NPC, generované stopy, adaptivní příběh.

    [► Chci akci — napište mi]  vojtech@pszczolka.cz
    [► Zpět]
```

---

#### [REFERENCE]

```
(Reference a příběhy z minulých akcí 
budou doplněny.)

Mezitím — zeptejte se. Rád řeknu víc.

    [► Napište mi]
    [► Zpět]
```

---

### [SVĚTY]

```
Poslední stránky.

Tady to přestává být o technologiích a začíná 
to být osobní.

Stavím světy. Ne virtuální — fyzické.
Světy, do kterých vstoupíš a na pár hodin 
zapomeneš, kdo jsi. A možná zjistíš, kdo bys chtěl být.

LARP není kostýmy a meče. Je to nejstarší forma 
interaktivního příběhu. Starší než počítače. 
A pořád nejsilnější.
```

**Volby:**
```
► Hry a projekty     → [HRY]
► Komunita           → [KOMUNITA]
► Zpět.              → [INTRO]
```

---

#### [HRY]

```
► Hra na vraždu
  Detektivní LARPy. Fungují pro nováčky 
  i ostřílené hráče.

► Středověké hostiny
  Karel IV., intriky, diplomacie.
  Teambuilding, co je zároveň LARP.

► ChatMystery
  Co když LARP nepotřebuje fyzický prostor?
  AI detektivka. Hraj odkudkoliv.

    [► game.chatmystery.com]
    [► Zpět]
```

---

#### [KOMUNITA]

```
Pokud tě zajímá tvorba světů, AI v hrách, 
nebo propojení technologií a zážitků —

jsme na stejné vlně.

    [► GitHub]
    [► LinkedIn]
    [► vojtech@pszczolka.cz]
```

---

## 4. TEXTY — EN VERZE (skeleton)

Anglické texty budou strukturálně totožné. Základní tón:

- [INTRO]: "A diary. Someone left it here. Or left it here for you."
- [KDO_JSEM]: "Vojtěch Pszczólka. Thirty-four. Prague."
- [AI_TECH]: "> ACCESSING PAGES... OK"
- [TEAMBUILDING]: "A business card. Date and place. No name."
- [SVĚTY]: "The last pages."

**Detailní EN překlad v další iteraci.**

---

## 5. TECHNICKÉ POZNÁMKY

### Architektura
- **SPA** — jedna stránka, větve = JS/React stav
- **Stav:** `{ node: 'INTRO', lang: 'cz', history: ['INTRO'] }`
- **History** → tlačítko zpět (pop z pole)
- Žádný router nutný

### Typing efekt
```javascript
async function typeText(el, text, speed = 50) {
    for (let i = 0; i < text.length; i++) {
        el.textContent += text[i];
        if ('.!?,:;—'.includes(text[i])) {
            await sleep(random(150, 300));  // zaváhání na interpunkci
        } else {
            await sleep(speed + random(-10, 20));
        }
    }
}
// Skip: klik kamkoliv = zobrazit celý text naráz
// Po dopsání: volby fade-in s 600ms delay
```

### i18n
```javascript
const content = {
    cz: { INTRO: { text: "...", choices: [...] }, ... },
    en: { INTRO: { text: "...", choices: [...] }, ... }
};
```
- Přepínač persistuje v localStorage
- Přepnutí = restart aktuálního uzlu

### Glitch (CSS)
```css
@keyframes glitch {
    0%   { transform: translate(0); }
    20%  { transform: translate(-2px, 2px); }
    40%  { transform: translate(2px, -1px); 
           text-shadow: -2px 0 var(--accent-neon), 2px 0 var(--accent-neon-alt); }
    60%  { transform: translate(-1px, 1px); }
    80%  { transform: translate(1px, -2px); 
           text-shadow: 2px 0 var(--accent-neon), -2px 0 var(--accent-neon-alt); }
    100% { transform: translate(0); text-shadow: none; }
}
```
- 1-2× za stránku, náhodný řádek
- Hover na volbách: mírný 0.15s glitch

### Noise overlay
```css
body::after {
    content: '';
    position: fixed;
    inset: 0;
    background: url('noise.svg');  /* nebo inline SVG */
    opacity: 0.03;
    pointer-events: none;
    z-index: 9999;
}
```

### Zvuk (opt-in, nice-to-have)
- Typing klávesnice — defaultně OFF
- Ambient drone — defaultně OFF
- Glitch zvuk při glitch efektu

### SEO & přístupnost
- `<noscript>` fallback: statický text se vším obsahem
- OG meta tagy + OG image (tmavá vizitka s jménem)
- `aria-live` pro typing text
- `prefers-reduced-motion` → vše zobrazené naráz, žádné animace

### Hosting
- Statický HTML/JS/CSS
- sinuhetcloud (Romeo/Julie), Vercel, Netlify, nebo GitHub Pages

---

## 6. CO JE JINAK OPROTI v1

| v1 | v2 |
|---|---|
| "Otevřels něco, cos neměl" | Klidný, tichý tón — deník nabízí, nestraší |
| Generický "AI builder" pitch | Založeno na skutečné osobnosti — systémový člověk, co hledá Proč |
| Texty bez opory v realitě | Opřeno o skutečné CV, projekty, psychologický profil |
| Přehnaná tajemnost | Tajemno jako atmosféra, ne jako clickbait |
| Chybělo jméno s čárkou | **Pszczólka** — všude správně |

---

## 7. PRIORITNÍ POŘADÍ

1. **MVP:** INTRO + 4 rozcestníky (funguje jako landing page)
2. **V1:** Všechny větve CZ — kompletní web
3. **V2:** EN verze
4. **V3:** Glitch, zvuky, OG image, SEO optimalizace
5. **V4:** Easter eggs (skrytá větev? terminál? konami code?)

---

## 8. OTEVŘENÉ OTÁZKY PRO IMPLEMENTACI

- **Fotka?** Současné CV má fotku. Na deníku by mohla působit rušivě. 
  Možnost: ukázat ji až v [KDO_JSEM] nebo [CV_DETAIL], ne na intro.
- **PDF CV:** Odkaz na stažení — generovat z webu, nebo mít separátní 
  soubor? (Současný PDF je ten starší formát z cv_o1.html.)
- **Reference u teambuildingu:** Zatím placeholder. Doplnit jakmile 
  budou k dispozici.
- **ChatMystery odkaz:** game.chatmystery.com — ověřit, že funguje.
- **Kontaktní formulář vs. přímý email:** Email je jednodušší a 
  autentičtější. Formulář = zbytečná komplexita pro MVP.

---

*Dokument verze 2.0 — Koncept pro pszczolka.cz*
*Založeno na: CV (HTML + PDF), ChatGPT profil, simulace psychologického vyšetření*
*Připraveno pro implementaci v Claude Code*
