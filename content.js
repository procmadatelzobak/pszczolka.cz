// content.js — All branch texts and choices for pszczolka.cz

const content = {
  cz: {
    INTRO: {
      lines: [
        { text: 'Deník.', class: '' },
        { text: '', class: '' },
        { text: 'Někdo ho tu nechal. Nebo ho tu nechal pro tebe.', class: '' },
        { text: 'Stránky jsou popsané napůl rukou, napůl strojem.', class: '' },
        { text: 'Na deskách je vyražené jméno:', class: '' },
        { text: '', class: '' },
        { text: '    VOJTĚCH PSZCZÓLKA', class: 'line-name' },
        { text: '', class: '' },
        { text: 'a pod ním — čtyři záložky.', class: '' }
      ],
      choices: [
        { label: '► Na první stránce je jméno a otázka.', target: 'KDO_JSEM' },
        { label: '► Na okrajích jsou diagramy a kód.', target: 'AI_TECH' },
        { label: '► Mezi stránkami je vsunuta vizitka.', target: 'TEAMBUILDING' },
        { label: '► Poslední stránky jsou psané jinak.', target: 'SVETY' }
      ]
    },

    KDO_JSEM: {
      lines: [
        { text: 'Vojtěch Pszczólka. Třicet čtyři. Praha.', class: '' },
        { text: '', class: '' },
        { text: 'Chtěl jsem být jaderný fyzik. Skončil jsem v IT.', class: '' },
        { text: 'Ne proto, že bych miloval servery — proto, že miluju', class: '' },
        { text: 'propojovat věci. Sítě, systémy, lidi, příběhy.', class: '' },
        { text: '', class: '' },
        { text: 'Když vidím tři nesouvisející kusy, vidím čtvrtý,', class: '' },
        { text: 'který je spojí.', class: '' },
        { text: '', class: '' },
        { text: 'Deset let v IT — infrastruktura, bezpečnost, cloud,', class: '' },
        { text: 'automatizace. Poslední dva roky stavím s AI. Ne tak,', class: '' },
        { text: 'že programuju — tak, že říkám strojům, co postavit,', class: '' },
        { text: 'a ony to staví. 30+ projektů za rok.', class: '' },
        { text: '', class: '' },
        { text: 'A vedle toho navrhuji zážitkové hry. Detektivky,', class: '' },
        { text: 'kde vyslýcháš podezřelé. Středověké hostiny, kde se', class: '' },
        { text: 'diplomaticky vyjednává. Světy, do kterých vstoupíš', class: '' },
        { text: 'a na chvíli zapomeneš, kdo jsi.', class: '' },
        { text: '', class: '' },
        { text: 'Není to dvě věci. Je to jedna — systémové myšlení', class: '' },
        { text: 'aplikované jednou na technologie, jednou na příběhy.', class: '' }
      ],
      choices: [
        { label: '► Ukaž mi životopis.', target: 'CV_DETAIL' },
        { label: '► Chci vidět ty projekty.', target: 'AI_TECH' },
        { label: '► Zpět na začátek.', target: 'INTRO' }
      ]
    },

    CV_DETAIL: {
      lines: [
        { text: 'MILNÍKY', class: 'line-name' },
        { text: '', class: '' },
        { text: '2007–2011   SPŠ Elektrotechnická, Plzeň', class: '' },
        { text: '            Technické lyceum. Cisco CCNA.', class: '' },
        { text: '', class: '' },
        { text: '2011–       ČVUT FJFI — Fyzikální informatika', class: '' },
        { text: '            Nedokončeno. Cesta byla důležitější než diplom.', class: '' },
        { text: '', class: '' },
        { text: '2011–2014   Target-MD — technický provoz konferencí,', class: '' },
        { text: '            AV technika.', class: '' },
        { text: '', class: '' },
        { text: '2014–2016   Tanet West — firemní sítě, firewally, servery.', class: '' },
        { text: '', class: '' },
        { text: '2016–2018   MY DVA Group — IT správa, ERP implementace', class: '' },
        { text: '            (MS Dynamics NAV, Business Central).', class: '' },
        { text: '', class: '' },
        { text: '2018–2021   Your System — firemní IT infrastruktura,', class: '' },
        { text: '            virtualizace, kybernetická bezpečnost.', class: '' },
        { text: '', class: '' },
        { text: '2021–2025   MY DVA Holding — IT manažer. Servery, M365,', class: '' },
        { text: '            D365, Azure, Power BI, bezpečnost, automatizace.', class: '' },
        { text: '', class: '' },
        { text: '2025–teď    Vlastní cestou. Coitus Corporation s.r.o.', class: '' },
        { text: '            AI systémy. Zážitkové hry. Experimenty.', class: '' },
        { text: '', class: '' },
        { text: '', class: '' },
        { text: 'DOVEDNOSTI', class: 'line-name' },
        { text: '', class: '' },
        { text: 'Infrastruktura    Windows Server, Linux, Proxmox,', class: '' },
        { text: '                  virtualizace, SAN, zálohy', class: '' },
        { text: 'Sítě              firewally, VPN, NetFlow, Cisco CCNA', class: '' },
        { text: 'Cloud             M365, D365, Azure, Oracle Cloud', class: '' },
        { text: 'Data              Power BI, Excel, automatizace procesů', class: '' },
        { text: 'AI                LLM, Claude API, OpenAI API, prompt', class: '' },
        { text: '                  engineering, AI agenti', class: '' },
        { text: 'Ostatní           ERP/CRM (Business Central, PowerApps),', class: '' },
        { text: '                  herní design, organizace eventů', class: '' },
        { text: '', class: '' },
        { text: 'JAZYKY            česky | anglicky | slovensky |', class: '' },
        { text: '                  španělsky (začátečník)', class: '' }
      ],
      choices: [
        { label: '► Chci vidět ty projekty.', target: 'AI_TECH' },
        { label: '► Zpět na začátek.', target: 'INTRO' }
      ],
      links: [
        { label: 'GitHub', url: 'https://github.com/procmadatelzobak' },
        { label: 'LinkedIn', url: 'https://linkedin.com/in/pszczolka' },
        { label: 'Email', url: 'mailto:vojtech@pszczolka.cz' }
      ]
    },

    AI_TECH: {
      lines: [
        { text: '> ACCESSING PAGES...', class: 'line-terminal' },
        { text: '> ████████████████████████ OK', class: 'line-terminal' },
        { text: '', class: '' },
        { text: 'Tyhle stránky nejsou psané rukou.', class: '' },
        { text: '', class: '' },
        { text: 'Jsou psané strojem — ale strojem, kterému někdo řekl,', class: '' },
        { text: 'co má napsat. A on to napsal. A občas to napsal líp,', class: '' },
        { text: 'než by to napsal člověk.', class: '' },
        { text: '', class: '' },
        { text: '30+ projektů za poslední rok. Kvízové aplikace.', class: '' },
        { text: 'Detektivní hry. Autonomní agenti. Cloudová infrastruktura.', class: '' },
        { text: '', class: '' },
        { text: 'Většinu z nich jsem "nenaprogramoval." Navrhl jsem je,', class: '' },
        { text: 'řídil jsem AI, které je postavilo, a iteroval, dokud', class: '' },
        { text: 'nefungovaly. Vibe coding. Funguje to. Většinou.', class: '' },
        { text: '', class: '' },
        { text: '> VYBRAT PROJEKT:', class: 'line-terminal' }
      ],
      choices: [
        { label: '► ChatMystery', target: 'CHATMYSTERY' },
        { label: '► Vševěd', target: 'VSEVED' },
        { label: '► iVojtík', target: 'IVOJTIK' },
        { label: '► sinuhetcloud', target: 'SINUHETCLOUD' },
        { label: '► Chci tech stack.', target: 'NAJMI_ME' },
        { label: '► Zpět.', target: 'INTRO' }
      ]
    },

    CHATMYSTERY: {
      lines: [
        { text: '> PROJECT: CHATMYSTERY', class: 'line-terminal' },
        { text: '> STATUS: LIVE — game.chatmystery.com', class: 'line-terminal' },
        { text: '', class: '' },
        { text: 'Detektivní hra, kde vyslýcháš AI.', class: '' },
        { text: '', class: '' },
        { text: 'Každý podezřelý má svůj příběh, osobnost, tajemství.', class: '' },
        { text: 'Všichni lžou. Někteří lžou líp než živí lidé.', class: '' },
        { text: '', class: '' },
        { text: 'Scénáře: viktoriánská Anglie, španělská galeona,', class: '' },
        { text: 'Kronika svaté Isabelly (trilogie).', class: '' },
        { text: '', class: '' },
        { text: 'Stack: Claude API, prompt engineering, web frontend.', class: '' }
      ],
      choices: [
        { label: '► Zpět na projekty', target: 'AI_TECH' },
        { label: '► Zpět na začátek.', target: 'INTRO' }
      ],
      links: [
        { label: 'Zkusit hru', url: 'https://game.chatmystery.com' },
        { label: 'GitHub', url: 'https://github.com/procmadatelzobak' }
      ]
    },

    VSEVED: {
      lines: [
        { text: '> PROJECT: VŠEVĚD', class: 'line-terminal' },
        { text: '> STATUS: ACTIVE — reální uživatelé', class: 'line-terminal' },
        { text: '', class: '' },
        { text: 'Kvízová aplikace, která generuje otázky pomocí AI.', class: '' },
        { text: 'Ne "kdo vyhraje milion." Otázky, které donutí přemýšlet.', class: '' },
        { text: '', class: '' },
        { text: 'Nasazeno na reálných akcích. Brand Kvíz pro firemní', class: '' },
        { text: 'eventy. Skuteční uživatelé. Funguje.', class: '' }
      ],
      choices: [
        { label: '► Zpět na projekty', target: 'AI_TECH' },
        { label: '► Zpět na začátek.', target: 'INTRO' }
      ],
      links: [
        { label: 'GitHub', url: 'https://github.com/procmadatelzobak' }
      ]
    },

    IVOJTIK: {
      lines: [
        { text: '> PROJECT: iVOJTÍK', class: 'line-terminal' },
        { text: '> STATUS: ARCHIVED — poučení zachováno', class: 'line-terminal' },
        { text: '', class: '' },
        { text: 'Autonomní AI agent. OODA smyčka. ReAct architektura.', class: '' },
        { text: 'Reflexion pattern. Git-based epizodická paměť.', class: '' },
        { text: '', class: '' },
        { text: 'Měl se učit. Měl vydělávat bitcoin. Nevydělal.', class: '' },
        { text: 'Lokální LLM byl příliš pomalý.', class: '' },
        { text: '', class: '' },
        { text: 'Ale naučil mě víc o architektuře AI agentů', class: '' },
        { text: 'než cokoliv jiného. Některé projekty musí selhat,', class: '' },
        { text: 'aby další uspěly.', class: '' }
      ],
      choices: [
        { label: '► Zpět na projekty', target: 'AI_TECH' },
        { label: '► Zpět na začátek.', target: 'INTRO' }
      ],
      links: [
        { label: 'GitHub', url: 'https://github.com/procmadatelzobak' }
      ]
    },

    SINUHETCLOUD: {
      lines: [
        { text: '> PROJECT: SINUHETCLOUD', class: 'line-terminal' },
        { text: '> STATUS: OPERATIONAL', class: 'line-terminal' },
        { text: '', class: '' },
        { text: '    ┌──────────┐    ┌──────────┐', class: '' },
        { text: '    │  ROMEO   │────│  JULIE   │', class: '' },
        { text: '    │  x86     │    │  ARM     │', class: '' },
        { text: '    └──────────┘    └──────────┘', class: '' },
        { text: '', class: '' },
        { text: 'Oracle Cloud free-tier. Romeo běží Claude Code CLI', class: '' },
        { text: 'jako autonomní orchestrátor. GitHub Actions integrace.', class: '' },
        { text: 'Doppler pro secrets.', class: '' },
        { text: '', class: '' },
        { text: 'Doma: HP DL380 G8, Proxmox, 2TB RAID6, 256GB RAM.', class: '' },
        { text: '', class: '' },
        { text: 'Vlastní cloud. Běží. Nespím dobře.', class: '' }
      ],
      choices: [
        { label: '► Zpět na projekty', target: 'AI_TECH' },
        { label: '► Zpět na začátek.', target: 'INTRO' }
      ],
      links: [
        { label: 'GitHub', url: 'https://github.com/procmadatelzobak' }
      ]
    },

    NAJMI_ME: {
      lines: [
        { text: 'Pokud hledáš někoho, kdo:', class: '' },
        { text: '', class: '' },
        { text: '    — rozumí infrastruktuře i AI,', class: '' },
        { text: '    — umí navrhnout systém a dohlédnout na jeho stavbu,', class: '' },
        { text: '    — vidí souvislosti mezi částmi, které spolu zdánlivě', class: '' },
        { text: '      nesouvisí,', class: '' },
        { text: '    — a nebojí se říct "tohle nedává smysl" —', class: '' },
        { text: '', class: '' },
        { text: 'tak se ozvi.', class: '' },
        { text: '', class: '' },
        { text: '    IT infrastruktura & správa    10+ let', class: '' },
        { text: '    Kybernetická bezpečnost       certifikace + praxe', class: '' },
        { text: '    Cloud (M365, Azure, Oracle)   denní práce', class: '' },
        { text: '    AI systémy & agenti           30+ projektů', class: '' },
        { text: '    Automatizace & data           Power BI, procesy', class: '' },
        { text: '    Herní design & eventy         LARP, mystery, teambuilding', class: '' },
        { text: '', class: '' },
        { text: 'Pracuji přes vlastní s.r.o. (Coitus Corporation).', class: '' },
        { text: 'Preferuji prostředí, kde se věci dělají pořádně', class: '' },
        { text: 'a mluví se o nich na rovinu.', class: '' }
      ],
      choices: [
        { label: '► Zpět na projekty', target: 'AI_TECH' },
        { label: '► Zpět na začátek.', target: 'INTRO' }
      ],
      links: [
        { label: 'Email', url: 'mailto:vojtech@pszczolka.cz' },
        { label: 'LinkedIn', url: 'https://linkedin.com/in/pszczolka' }
      ]
    },

    TEAMBUILDING: {
      lines: [
        { text: 'Vizitka. Datum a místo. Žádné jméno, jen symbol.', class: '' },
        { text: '', class: '' },
        { text: 'Na zadní straně:', class: '' },
        { text: '', class: '' },
        { text: '    "Někdo z vás tu dnes zemře. Ale ne doopravdy."', class: '' },
        { text: '', class: '' },
        { text: 'Zážitkové akce pro firmy. Ne padák a lano.', class: '' },
        { text: 'Akce, kde se vaši kolegové musí domluvit —', class: '' },
        { text: 'jinak to nevyřeší.', class: '' },
        { text: '', class: '' },
        { text: 'Detektivní večery. Hry na míru. LARP pro lidi,', class: '' },
        { text: 'kteří nikdy neslyšeli slovo LARP.', class: '' },
        { text: '', class: '' },
        { text: 'Funguje to. Protože nic neprolomí firemní hierarchii', class: '' },
        { text: 'rychleji než společný výslech podezřelého.', class: '' }
      ],
      choices: [
        { label: '► Co přesně nabízíš?', target: 'NABIDKA' },
        { label: '► Máš reference?', target: 'REFERENCE' },
        { label: '► Zpět.', target: 'INTRO' }
      ]
    },

    NABIDKA: {
      lines: [
        { text: 'FORMÁTY', class: 'line-name' },
        { text: '', class: '' },
        { text: '► Mystery evening (Hra na vraždu)', class: '' },
        { text: '  2–4 hodiny. 10–50 lidí. Scénář na míru.', class: '' },
        { text: '  Podezřelí, důkazy, zvraty. Vaši lidé vyšetřují.', class: '' },
        { text: '', class: '' },
        { text: '► Středověký teambuilding', class: '' },
        { text: '  Karel IV. vás pozval na hostinu. Ale má podmínky.', class: '' },
        { text: '  Historické kulisy, dobové úkoly, diplomatická jednání.', class: '' },
        { text: '', class: '' },
        { text: '► Vlastní formát', class: '' },
        { text: '  Sci-fi? Špionáž? Postapo? Navrhneme svět', class: '' },
        { text: '  přesně pro vás.', class: '' },
        { text: '', class: '' },
        { text: 'Bonus: každá akce může zahrnovat AI prvky —', class: '' },
        { text: 'inteligentní NPC, generované stopy, adaptivní příběh.', class: '' }
      ],
      choices: [
        { label: '► Zpět na teambuilding', target: 'TEAMBUILDING' },
        { label: '► Zpět na začátek.', target: 'INTRO' }
      ],
      links: [
        { label: 'Chci akci — napište mi', url: 'mailto:vojtech@pszczolka.cz' }
      ]
    },

    REFERENCE: {
      lines: [
        { text: '(Reference a příběhy z minulých akcí', class: '' },
        { text: 'budou doplněny.)', class: '' },
        { text: '', class: '' },
        { text: 'Mezitím — zeptejte se. Rád řeknu víc.', class: '' }
      ],
      choices: [
        { label: '► Zpět na teambuilding', target: 'TEAMBUILDING' },
        { label: '► Zpět na začátek.', target: 'INTRO' }
      ],
      links: [
        { label: 'Napište mi', url: 'mailto:vojtech@pszczolka.cz' }
      ]
    },

    SVETY: {
      lines: [
        { text: 'Poslední stránky.', class: '' },
        { text: '', class: '' },
        { text: 'Tady to přestává být o technologiích a začíná', class: '' },
        { text: 'to být osobní.', class: '' },
        { text: '', class: '' },
        { text: 'Stavím světy. Ne virtuální — fyzické.', class: '' },
        { text: 'Světy, do kterých vstoupíš a na pár hodin', class: '' },
        { text: 'zapomeneš, kdo jsi. A možná zjistíš, kdo bys chtěl být.', class: '' },
        { text: '', class: '' },
        { text: 'LARP není kostýmy a meče. Je to nejstarší forma', class: '' },
        { text: 'interaktivního příběhu. Starší než počítače.', class: '' },
        { text: 'A pořád nejsilnější.', class: '' }
      ],
      choices: [
        { label: '► Hry a projekty', target: 'HRY' },
        { label: '► Komunita', target: 'KOMUNITA' },
        { label: '► Zpět.', target: 'INTRO' }
      ]
    },

    HRY: {
      lines: [
        { text: '► Hra na vraždu', class: 'line-name' },
        { text: '  Detektivní LARPy. Fungují pro nováčky', class: '' },
        { text: '  i ostřílené hráče.', class: '' },
        { text: '', class: '' },
        { text: '► Středověké hostiny', class: 'line-name' },
        { text: '  Karel IV., intriky, diplomacie.', class: '' },
        { text: '  Teambuilding, co je zároveň LARP.', class: '' },
        { text: '', class: '' },
        { text: '► ChatMystery', class: 'line-name' },
        { text: '  Co když LARP nepotřebuje fyzický prostor?', class: '' },
        { text: '  AI detektivka. Hraj odkudkoliv.', class: '' }
      ],
      choices: [
        { label: '► Zpět na světy', target: 'SVETY' },
        { label: '► Zpět na začátek.', target: 'INTRO' }
      ],
      links: [
        { label: 'game.chatmystery.com', url: 'https://game.chatmystery.com' }
      ]
    },

    KOMUNITA: {
      lines: [
        { text: 'Pokud tě zajímá tvorba světů, AI v hrách,', class: '' },
        { text: 'nebo propojení technologií a zážitků —', class: '' },
        { text: '', class: '' },
        { text: 'jsme na stejné vlně.', class: '' }
      ],
      choices: [
        { label: '► Zpět na světy', target: 'SVETY' },
        { label: '► Zpět na začátek.', target: 'INTRO' }
      ],
      links: [
        { label: 'GitHub', url: 'https://github.com/procmadatelzobak' },
        { label: 'LinkedIn', url: 'https://linkedin.com/in/pszczolka' },
        { label: 'vojtech@pszczolka.cz', url: 'mailto:vojtech@pszczolka.cz' }
      ]
    }
  }
};
