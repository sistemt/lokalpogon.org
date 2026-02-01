---
title: Razvojni Plan Digitalne Tehnike
id: tehne
---

Trenutni dokument se bavi razradom [računalne komponente Tehničke fronte Operative](./operatio#racunalna) te spominje [proizvodnu komponentu](./operatio#proizvodna) u [Fazi n](#faza-n).  

Iako će navedena tematika biti razrađivana na sistemt.org, s obzirom da su ovo prvi i sržni konkretni koraci, gruba skica je iznesena i ovdje.

U sklopu osnivanja udruge kroz emailove sam skicira neki brzi "pogled u daljinu", malo ga uredova i ... sklepa ovaj "dokument". Sirovo je i u dijalektu, ali bar ste sigurni da čitate riči čovika :-)  Bar nešto da kažem za osjećaj ozbiljnosti i ludosti puta preda mnom/nama.  

### Poslovni potencijal Udruge kao tvrtke

Nadam se i radim na budućnosti di će ovo biti najveća tehnološka firma u okruženju i neprivatno srce šireg ekosistema u kojem će mnogi članovi imati svoje implementacijske/integratorske/itd firme, uključujući i mene. Oćeš li virovat američkim korporacijama i drugim privatnim zatvorenim firmama ili pak neprofitnoj Udruzi kojoj je kod otvoren i time javno provjeren da je odgovarajuće sigurnosne i ostale tehničke razine! Kompetitivna prednost koju imam(o) u poslovnom smislu je ogromna! A i u samom tehničkom smislu platforma će biti svemirski brod za sve ostalo šta postoji u HR, a i šire...  

*'Free as in Freedom'*,  
lipote slobode su već pristupačne u besplatnom softveru otvorenog koda...

### Razlog žurbe za otvorit prije objave samih stranica i prototipa koda?

Udrugu unaprid krećem otvarat da dobijem OIB i otvorim račun pa da mogu nastavit radit na ostalom dijelu infrastrukture. Razvijam sve ostale elemente platforme iz Faze 1 pa da to odma činim cjelovito. Fiskalizacija 2.0 koju ću implementirat izravno prema Poreznoj (ne triba mi posrednik, samo FINin aplikativni ključ i API/SDK), zatim payment procesori ka Stripe, derivirane kartice udruge za plaćanje kroz Aircash, osigurano čuvanje payment podataka, automatsko zavođenje uplata na relevantne račune označene pod gospodarske aktivnosti u Knjizi i Dnevniku...  
Zato otvaram udrugu "unaprid" jer dobit račun u banci je samo početak, ima tu i kopanja i posla... Al kad imam OIB i bankovni račun Udruge nemam nikakvih prepreka za odradit to, samo rad!

---

U svrhu potpunosti nastavljam se na predloženi Statut i Ugovore između mene i Udruge te ću u ovom mailu objasnit gospodarski dio aktivnosti Udruge, no **svi prihodi za razvoj otvorenog koda** se vode pod donacije. Imate i ka fizička osoba odbit 3% od poreza... Za detalje šta ide pod neprofitni dio vidi:

> [EU Akt o kibernetičkoj otpornosti](https://eur-lex.europa.eu/eli/reg/2024/2847/oj/hrv), preambula, stavak 15, 18 i 20 te članak 3, stavak 48 

Ako vam je pojam besplatni softver otvorenog koda odnosno slobodni softver zvuči kao nešto loše kvalitete molim da prije nastavka čitanja ove skice:
- pročitate gore navedena 4 stavka, 
- shvatite da vi cijelo vrijeme koristite [Linux](https://wiki.archlinux.org/title/Kernel) makar na webu i mobitelu,
- primjer buduće uredske infrastrukture u razvoju Njemačke Vlade [openDesk](https://www.opendesk.eu/en).

Ovdje ću sažeto iznijeti i kratkoročni i dugoročni plan razvoja kroz 3 faze. Ovo nije poslovni plan nego razvojno-tehnički, al mislim da se operativno-poslovni da naslutit.

Prva faza (1a) je nešto razumljivije i ne-tehničkim ljudima te nešto čemu se pristupa priko weba, mobitela il laptopa. Zamjena za Microsoft Office i Google Workspace, ali i puno više ...

## FAZA 0: wiki

**sistemt.org** je doma tehničko-terenskog pokreta, wikipedia, dokumentacija, opis i sve ostalo. Ovdi nema komercijale osim par linkova na Platformu sistemt.net i s vrimenom na listu podržanih suradnika (udruge, zadruge, privatnici...) na sistemt.com. Aktivni i zaslužni članovi Udruge dobiju `@sistemt.org` email. Al svaki član ima pravo na besplatnu razinu na `@sistemt.net`.

## FAZA 1a: Uredska Platforma

(ovo meni osobno većim dijelom ne triba, terminal sam maksimalist, al eto navikli ste ...)


Projekt Njemačke vlade me nadahnija da idem do kraja: [openDesk](https://www.opendesk.eu/en). Moja verzija su malo vitkiji programi i lakše za primjenit jednoj firmi, manje komplikacija (openDesk ide standardnim putem [kuberneta](https://kubernetes.io/)), moj pristup je malo drukčiji, manje robusan za veliku platformu, ali robusniji za prebacit podatke firmi/zajednici da budu samodostatni sa svojim serverom. Neću ovu riječ ponavljat, ali praktički svaki od detalja šire Vizije je sam za sebe "Inovativan".

Ključna napomena: sve ovo doli će biti javan kod te će pojedine firme moći imati svoj server na svojoj domeni te koristiti platformu kao backup, a sa pojedinim članovima sa strane dogovore integraciju, deployment i održavanje. Udruga izričito podržaje da njeni članovi otvaraju svoje firme koje se oslanjaju na infrastrukturu koja se razvija kod nje. Sistemt.net je da moš uplatit pretplatu firmi i ne razmišljat o ovom, ali mogućnost je uvik tu da firma/zajednica bude neovisna i samodostatna, koliko se već kome da potrudit...

Ovo je popis ključnih aplikacija:

- **login.sistemt.net** - SSO (Single Sign On) i Portal. Logiraš se na jedno misto i sve ostale aplikacije se pokažu i jednostavno rade! Potiče se da za login postaviš i dodatno osiguranje: 2FA, passkey, hardver ključ ili eosobna, šta kome paše. Dakle nema zajebancije, stroga sigurnost, al ako baš ne želiš može sve i samo na lozinku, svakom njegovo... Za sad ću koristit [Authentik](https://goauthentik.io/), no ako bude potrebno dodatno uozbiljit ovaj segment onda ću zagrist zube i usvojit [Keycloak](https://www.keycloak.org/). No zasad je to overkill... možda dodam sa vrimenom i [Homarr](https://homarr.dev/) za fleksibilniji Portal, da možete dodat malo osobne note svom Portalu
- **mail.sistemt.net** - server za email, kalendar i kontakte. Moš ovde kroz web il na laptop i mobitel. Podržava i sinkroniziranje sa kalendarom i kontaktima na Androidu. Znači cjelovito rješenje. Kroz [Stalwart](https://stalw.art/)
- **git.sistemt.net** - za kod i modele, dakle spoj [GitHub](https://github.com/)-a i PLM-a. [Forgejo](https://forgejo.org/)
- **drive.sistemt.net** - ka Google Drive. Njemci su se oslonili na [Nextcloud Files](https://nextcloud.com/), no meni je to overkill te cu probrat pokoji go microservice iz [OpenClouda](https://opencloud.eu/en)
- **office.sistemt.net** - word, excel, powerpoint u web browseru i na laptopu (linux). [Collabora Online](https://collaboraonline.github.io/)
- **meet.sistemt.net** - video sastanci kroz [Jitsi](https://jitsi.org/). Neki koriste i matrix izravno, no skeptičan sam ... Zanimljiv mi je i projekt GNUa [Jami](https://jami.net/) jer je P2P
- **matrix.sistemt.net** - [Matrix](https://matrix.org/) messenger, al ovo je još u igri, najviše bi volija stari XMPP, al matrix je dosta prihvaćen, čak i u javnim servisima zemalja ka Francuska i Njemačka
- **pass.sistemt.net** - Password Manager kroz [Vaultwarden](https://github.com/dani-garcia/vaultwarden). Spajaš se kroz normalne [Bitwarden](https://bitwarden.com/) aplikacije: mobitel, browser, kompjuter, komand linija, ma sve i to sa službenim Bitwarden aplikacijama
- **plan.sistemt.net** - planiranje projekta, kanban i slično. Nije ozbiljno ka za pogon nego više ovako za tim [OpenProject](https://www.openproject.org/)
- **fx.sistemt.net** - račun za web browser, [Firefox](https://www.mozilla.org/firefox/)ov sync, dakle logiraš se u firefox sa ovim emailom i radi račun, bookmark i sve, na svim uređajima jedan povezani browser. Planiram podržat i [Brave](https://brave.com/), imaju već nešto. [Chromium](https://www.chromium.org/) za sad nije moguć, al pratim razvoj te čim bude razvijeno uklopim i njega. Al postoje i tu sad polu-alternative, npr samo bookmarks i history...
- **lit.sistemt.net** - ovo radi lokalno i sinkronizira literaturu kroz platformu, oslanja se na [Zotero](https://www.zotero.org/). Literatura integrirana i u web browser i u notes, radi na laptopu, webu i mobitelu. Za sad je i dalje potreban račun na zotero.org,
- **...** - biće još al o tom potom, već je ovo dobrano zahvatilo

Dakle ovo je nešto šta radi ne samo na laptopu nego i web i mobitel, al on u najmanjoj mjeri. Računalo ispred tebe, sa tipkovnicom, to je u prvom redu!  
S vrimenom izgraditi potpuno rješenje kroz sistemt.net platformu te sa nekim od članova il bilo kim drugim dogovoriš faturetu i bude ti naštelano tvoje računalo i tvoji serveri. Il najbolje od svega: učini si i sam(a)!  
S tim da i dalje moš koristit platformu ka backup no to su već komplikacije dalje budućnosti o kojima sada ne razmišljam nit sam dovoljno potkovan za smislit. Zasad...

*TEHNIČKA NAPOMENA:*  
(preskoči kome nije do tehničkih detalja ...)  
`lit.` i `fx.` zasad će tražiti napraviti račun sa istim emailom na zotero.org, odnosno Mozilla.org. Oba dvi su isto udruge. Firefox već ima otvoreni kod za imat i račune na platformi al overkill su pa ću se samo za taj dio u početku oslonit na njih. Literatura je slična priča: dokumenti su kroz platformu al nam triba metadata zasad ić kroz njih, samo metadata, tako da onih 300MB besplatno šta ti daju je dovoljno. Da, nažalost na prvu neće baš sve sve ić kroz platformu, komplicirano je vrtit njihove servise pa će ovo bit riješeno (nadamo se) s vrimenom kroz izravni sync [SQLite](https://www.sqlite.org/) baze ([Litestream](https://litestream.io/), [Turso](https://turso.tech/) il slično). Hm, ovaj dio će radit, al mi nije plan riješen do kraja, triba inovativni vic potez da se rješi pa se odma zapričam o detaljima. Ajmo mi dalje ...

## FAZA 1b: Infrastrukturna Platforma

Da budem potpun dodat ću još neke servise koji u biti nisu aplikacije al će bit općeniti i ključni, ne moraš se obazirat na ovu fazu sada al dovoljno da ubaciš ovo na ChatAI i pitaš šta te zanima. Brzo postane jasno da ovo nije samo zamjena za Office nego temelj za radno-proizvodnu platformu industrijske snage, čak i vojne, ne daj Bože, al nek je ona moćna:

- **dns.sistemt.net** - standardni, ali i jedan dodatni specifičan DNS za peer-to-peer (P2P) linkove i dodavanja, vidi intra pod-domenu
- **key.sistemt.net** - ovo je malo tehnički al da budem potpun: [PGP](https://www.openpgp.org/) ključevi i slično, ovo nije aplikacija nego server za šifre i potpisivanja
- **intra.sistemt.net** - koordinacijski server za povezat se izravno u VPN, podaci teku izravno između nas, nadahnuto sa [Tailscale](https://tailscale.com/), al izvedbu gradim na primjerima [Innernet](https://github.com/tonarino/innernet), [Iroh](https://github.com/n0-computer/iroh) (čisti HTTP3), [vopono](https://github.com/jamesmcm/vopono) i naravno [WireGuard](https://wiki.archlinux.org/title/WireGuard), ovisi koji tip aplikacije trenutno koristi intra pod-domenu
- **img.sistemt.net** - za povlačenje "image" diskova, virtualnih mašina, kontenjera, operativnih sistema, iso itd. Ukratko sve šta može koristiti [libvirt](https://www.virt-tools.org/)/[QEMU](https://wiki.archlinux.org/title/QEMU) za virtualke, [systemd](https://wiki.archlinux.org/title/Systemd)/[Podman](https://wiki.archlinux.org/title/Podman) za kontenjerizaciju il ka neka generička disk/FS slika
- **pkg.sistemt.net/*** - paketi aplikacija za OS /[ALPM](https://wiki.archlinux.org/title/Pacman), [Python](https://www.python.org/) /uv , [Rust](https://www.rust-lang.org/) /cargo , [Go](https://go.dev/) /go ...
- **obj.sistemt.net** - ka [Amazonov S3](https://aws.amazon.com/s3/). Inače bio bija [MinIO](https://min.io/) al su zastanili pa ću dizat na [Garage](https://garagehq.punkt.fr/). Ako ide na industrijsku cloud razinu onda bi valjalo [Ceph](https://ceph.io/) koristit za ovo. Zasad ne triba...
- **boxai.sistemt.net** - sandbox za AI agente u cloud-u, npr vidi firmi naših ljudi otvorenom u New Yorku [Daytona](https://www.daytona.io/), čiji slobodni softver isto se isto nadam iskoristit. Za prvu ruku daju pojedinom korisniku izdašnu količinu svojih servera za besplatno koristit...
- **...**

## FAZA 2: STROJ

(razvija se paralelno sa 1, ali će biti kasnije od nje gotova)

O ovom neću duljit. Ovo je srce i, tržišno govoreći, ultimativna kompetitivna prednost. Tehnički pogon čitave ove priče. Iskreno ovakvog nešto niti tipski nema na tržištu.
Svemu što dalje navodim primarno sučelje je terminal!
Dosta toga je već ucrtano i započeto, al kroz dogledno razdoblja triba(m) to isprogramirat industrijski jer nije slobodni softver dovoljno samo objavit ako želiš da koriste i drugi, triba to bit uredno i čvrsto. Biće ugl u jeziku Rust. Forma strukture podataka je većinom oformljena, sad samo zaronit i popunjavat elemente. Ovo je najnaporniji ali i najslađi dio. Za radit ovo mi ne triba novac, razlozi niti da itko drugi ih koristi, u prvu ruku sebi ih želim :-) Ovde smatram ubrati prve plodove nagrade za sebe, savjeti stručnijih od mene, naročito sistemski, zavrzlame Rusta i kernel sučelja, git metode, puniji 3D modeli i nacrti da ja to imam za testirat i kopat, šta triba, šta radi, kako najlakše i sa minimalno koda, kako najčvršće, di su opasnosti... ma poezija.

Ovo mi je dite :-) Tri su ključna programa:  
**`linuxt` -> `sistemtOS` -> `git cad`** . Ili u skraćenoj verziji: `lxt` -> `st` -> `gt` ...

- **linuxt** - kraće lxt, čitano 'elikst'. Low level izvršni program i što je bitno u ovoj priči: programska biblioteka. Pisana u programu [Rust](https://doc.rust-lang.org/stable/book/), dakle industrijski temelj. Većina neće imat dodira sa njom al ovo je srce sistema. Nastavlja se na [Linux](https://wiki.archlinux.org/title/Kernel) i okolni ekosistem, naročito [Git](https://git-scm.com/book/en/v2), [systemd](https://wiki.archlinux.org/title/Systemd), terminal te windowse virtualno upakirane ka samo još jedan od procesa te [spojene na grafičku karticu](https://looking-glass.io/) za svrhe CADa...  
Od svega ovoga na ovo sam najponosniji i najuživljeniji...

- **sistemtOS** -> sučelje u potpuni operativni sistem i ostale funkcionalnosti za rad, istraživanje i razvoj. `st os` je zapravo "nježnije prepakirani" `lxt`. Ovde ću samo spomenit neke od komandi:
    - `st os` - u biti zapakiran `linuxt` za one koji nisu sistemaški programeri ili programeri uopće
    - `st net` - mrežno sučelje
    - `st code` - sučelje za postavit stvari za programirat
    - `st notes` - sučelje za postavit i upravljat web browserom, literaturom i notesom (bilješke)
    - `st ai` - AI sučelje, ako ne znaš komandu ili bilo šta samo pozovi ovo i pitaj je. Ona dolazi opremljena da razumi kako je sistemt složen i di da te uputi. Ako baš želiš znat oslanja se na [OpenCode](https://opencode.ai/) za sučelje (terminal, web i desktop) te je postavljena da zna ti pomoć kroz [AgentSkills](https://agentskills.io)
    - `st projekt/rad` - ovo u biti pakira i sistemt code i gitcad. Ukratko rad i razvoj
    - `st $` - transakcije, računi i knjige. analize, projekcije i izrade izvještaja, naročito Skupštini i Poreznoj
    - `st mes` - sučelje u pojedine industrijske strojeve ili njih više kroz pristupne točke interneta strojeva (tzv Industrie4.0)
    - `st org` - digitalna kičma troosovinske firme: Razvoj - Pogon - Račun uklopljenih u vremenu kroz ured Operative (pogonski ured)
    - `...`
- **gitcad** - takav tip alata za inžinjeriju trenutno nemamo, naročito ne slobodni softver. Integrira [Git](https://git-scm.com/book/en/v2) kojeg koristi cili programerski svit i inžinjerske CAD alate za modele, nacrte i tablice. Kad sazrije dovoljno biće revolucija svima, od studenata inženjerstva pa nadalje. Uz sistemt daje potpuni paket, pošalješ link i komanda `git cad <url>` ili `st clone <url>` i povuče se zadnja verzija modela i hash projekta, ako imaš jedan jedini file koji odgovara tom broju, stvar se jednostavno otvori i upali, windowsi, 3D, sve, al zapakirano ka samo jedan od procesa na linuxu i dodatne benefite koje nam to nosi...

Napomena: uskoro cu predati na [Linux Foundation](https://www.linuxfoundation.org/) odobranje za trademark da mogu koristit linux u imenu stranice linuxt.org i samog programa. No to je formalnost, odobre oni svakom samo staviš na naslovnu stranicu 'Linux Trademark is owned by Linus Torvalds' što je jasna stvar. No ukoliko bude komplikacija ovaj dio će se zvati [archt](https://archt.org).

## FAZA 3: Digitalna Kičma Firme

Ovo je naravno dugoročni projekt kojem neće u biti nikad biti kraja. Trenutno ne radim na ovo, ali zbog potpunosti da je jasno di stvari idu:

- **[erp.sistemt.net](https://en.wikipedia.org/wiki/Enterprise_resource_planning)** - vođenje firme, knjige, transakcije, računi, isplate i njihovo sučelje prema ostalim dimenzijama firme, naročito pogon. Prve verzije kroz [Odoo](https://www.odoo.com/) uz transakcije kroz nešto kao [Formance](https://docs.formance.com/welcome). Makar kao "prepiska" za Dnevnik sa payment procesora. Pa po izvoru nastajanja probamo automatski nalijepiti klasifikaciju i razvrstavanje na Račune Knjiga. Njihovo sumiranje i sheme za ispunit Prezentaciju Knjiga Poreznoj maksimalno pripremiti da knjigovođa šta više radi sa Formom nego sa samom Materijom, a računovođa da ima urednije temelje za projekcije i ostale savjete...
    - u konačnici ovo bi evoluiralo u [**nrp.sistemt.net**](https://en.wikipedia.org/wiki/Network_resource_planning)
- **[aps.sistemt.net](https://en.wikipedia.org/wiki/Advanced_planning_and_scheduling)** - integrirano sa erp, spuštanje u pogon. Plan i Schedule radnika, stroja, materijala i vrimena/sljeda. Za početak kroz [frePPLe](https://frepple.com/) i [MQTT](https://mqtt.org/) nizova sa mes pod-domene
- **[plm.sistemt.net](https://en.wikipedia.org/wiki/Product_lifecycle)** - prilagođen baš za 3D i nacrte, al ideja je da u biti bude jedno sa git.sistemt.net
- **[mes.sistemt.net](https://en.wikipedia.org/wiki/Manufacturing_execution_system)** - u početku dosta sirovo, u biti samo terminal al lipi pogled na specijalno konfigurirano računalo sa sistemtMOS koji samo staviš u pogon i spojiš se na mašine. Zasad samo za povlačenje podataka sa mašina, a kako postane robusnije onda i za guranje na mašine sa vrimenom
- **[mos.sistemt.net](https://en.wikipedia.org/wiki/Programmable_logic_controller)** - današnjim terminom: OS za [PLC](https://en.wikipedia.org/wiki/Programmable_logic_controller). Vlastito računalo radnog stroja. ManuOS, sučelje čini cjelinu sa strojem. Ta šta bi mi linux značija bez terminala? Na prvu i ovo kao terminal.
Za detalje što znače kratice upišite ih na en.wikipedia.org...

Dakle,  
prodaješ, kupuješ i zavedeš kroz `erp`,  
inžinjerija metodologijom GitOps kroz `plm` razvija i isporučuje nužne artefakte na `aps` poslovnog ureda,  
oni kroz `mes` spuštaju i isprate u pogon ljudima i strojevima na njihova računala `mos`.  
`erp` cilo vrime sluša na osovini `aps` <-> `mes` te maksimalno automatizirano referira, sumira i zavodi nužne stavke u Dnevnik i dalje u Račune Knjiga metodom [REA](https://en.wikipedia.org/wiki/Resources,_Events,_Agents).  

Cilj:  
da društvene (i male osobne) tvrtke imaju najbolje ustrojenu **strukturu kapitalnih dobara u vremenu** te poraze sve druge tvrtke čistom tržišnom utakmicom !

## FAZA n

Daleka budućnost, ako Bog da i volja se ne pokoleba te gornje tri faze dovoljno sazriju ide se na potpunu Platformu koja će primarno gurati i pružati proizvodna kapitalna dobra (samo amortizacija kao nadoknada) ostalim Udrugama i Zadrugama. Za referencu ću stavit meni osobno najbolji znanstveni članak o tipovima novih proizvodnih platformi:
- [Platform-based Manufacturing](https://doi.org/10.1016/j.cirp.2023.04.091)
- probrani članci triju ključnih papinskih enciklika Socijalnog Nauka rimokatoličke Crkve: [Lokalizam](http://distributist.blogspot.com/2007/02/distributivism-and-catholic-social.html)

<br />

# ...

*Bože,*  
*nadahni glavu,*  
*potakni trud,*  
*blagoslovi plodove,*  
*daj nam Put!*
