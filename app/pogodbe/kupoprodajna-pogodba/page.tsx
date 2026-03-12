import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import FAQAccordion from "@/components/FAQAccordion";
import SchemaScript from "@/components/SchemaScript";
import {
  breadcrumbSchema,
  articleSchema,
  faqPageSchema,
} from "@/app/content-schema";

export const metadata: Metadata = {
  title: "Kupoprodajna pogodba - Za avto, nepremičnino in premičnino",
  description:
    "Kaj mora vsebovati kupoprodajna pogodba za avto ali nepremičnino? Vzorec, davek, notar - vse na enem mestu. Preverite z AI KRPAN-om.",
  keywords: [
    "kupoprodajna pogodba",
    "kupoprodajna pogodba za avto",
    "kupoprodajna pogodba vzorec",
    "kupoprodajna pogodba za nepremičnino",
    "davek na promet nepremičnin",
    "VIN pogodba",
    "napake stvari OZ",
    "jamčevanje za napake",
  ],
  alternates: {
    canonical: "https://www.aikrpan.com/pogodbe/kupoprodajna-pogodba/",
  },
  openGraph: {
    title: "Kupoprodajna pogodba - Za avto, nepremičnino in premičnino",
    description:
      "Kaj mora vsebovati kupoprodajna pogodba za avto ali nepremičnino? Vzorec, davek, notar - vse na enem mestu.",
    url: "https://www.aikrpan.com/pogodbe/kupoprodajna-pogodba/",
    type: "article",
  },
};

const faqs = [
  {
    question: "Ali mora biti kupoprodajna pogodba za avto overjena pri notarju?",
    answer:
      "Ne. Za premičnine, vključno z avtomobili, notarsko overitev ni zahtevano. Zadostuje pisna pogodba s podpisoma prodajalca in kupca. Priporočljivo je, da vsebuje VIN, km stanje, kupnino in popis znanih napak, da se izognete sporom.",
  },
  {
    question:
      "Kdo plača davek na promet nepremičnin pri prodaji stanovanja?",
    answer:
      "Davek na promet nepremičnin v višini 2 % plača prodajalec. Rok za oddajo napovedi pri FURS je 30 dni po sklenitvi pogodbe. Izjema velja, kadar podjetje prodaja novo nepremičnino - takrat se obračuna DDV (9,5 %) in ne DPN.",
  },
  {
    question: "Kaj je VIN in zakaj mora biti v kupoprodajni pogodbi za avto?",
    answer:
      "VIN je 17-mestna koda, ki enolično identificira posamezno vozilo skozi celotno življenjsko dobo. Registrska številka se menja - VIN ne. Iz VIN-a preverite zgodovino vozila (nesreče, štetec). V pogodbi mora biti naveden VIN, ne zgolj registrska oznaka.",
  },
  {
    question: "Ali je ustna kupoprodajna pogodba veljavna?",
    answer:
      "Za premičnine je ustna pogodba formalno veljavna po OZ. A dokazati jo pred sodiščem je izjemno težko. Za nepremičnine mora biti pogodba pisna in notarsko overjena - brez tega je absolutno nična in ne ustvari nobenih pravnih učinkov.",
  },
  {
    question: "Koliko časa imam, da reklamiram skrito napako na rabljenem avtu?",
    answer:
      "Skrito napako morate prodajalcu sporočiti v dveh mesecih od odkritja, sicer pravico do jamčevanja izgubite. Prodajalec pa za skrite napake odgovarja dve leti od dneva izročitve vozila.",
  },
];

export default function KupoprodajnaPogodbaPage() {
  return (
    <ContentLayout
      breadcrumbs={[
        { label: "Pogodbe", href: "/pogodbe/" },
        {
          label: "Kupoprodajna pogodba",
          href: "/pogodbe/kupoprodajna-pogodba/",
        },
      ]}
      title="Kupoprodajna pogodba: za avto, nepremičnino in premičnino"
      subtitle="Kaj mora pogodba vsebovati, kdaj je potreben notar, kakšen davek plačate in kdaj je pogodba neveljavna."
    >
      <SchemaScript
        schema={breadcrumbSchema([
          { name: "Pogodbe", url: "/pogodbe/" },
          {
            name: "Kupoprodajna pogodba",
            url: "/pogodbe/kupoprodajna-pogodba/",
          },
        ])}
      />
      <SchemaScript
        schema={articleSchema({
          title:
            "Kupoprodajna pogodba - Za avto, nepremičnino in premičnino",
          description:
            "Kaj mora vsebovati kupoprodajna pogodba za avto ali nepremičnino? Vzorec, davek, notar - vse na enem mestu.",
          url: "/pogodbe/kupoprodajna-pogodba/",
          datePublished: "2026-03-12",
          dateModified: "2026-03-12",
        })}
      />
      <SchemaScript schema={faqPageSchema(faqs)} />

      {/* Intro */}
      <div className="max-w-3xl mb-16">
        <p className="text-[17px] text-site-mid leading-[1.8] mb-5">
          Vsak dan se v Sloveniji sklene na tisoče kupoprodajnih pogodb. Večina
          za rabljene avtomobile, stanovanja, kmetijska zemljišča. Malo kdo pa
          prebere, kaj pogodba vsebuje, preden jo podpiše. Potem nastanejo
          težave: prodajalec zatrjuje, da je avto brez napak, kupec pa čez mesec
          dni odkrije razpokano glavo motorja. Ali pa prodajalec pozabi plačati
          davek in kupec se znajde v vlogi odgovornega pred FURS.
        </p>
        <p className="text-[17px] text-site-mid leading-[1.8]">
          Ta stran razlaga, kaj kupoprodajna pogodba mora vsebovati, kdaj jo
          morate overiti pri notarju, kakšen davek plačate in kdaj je pogodba
          neveljavna. Za vsak primer posebej.
        </p>
      </div>

      <div className="max-w-3xl">
        {/* OZ */}
        <h2 className="font-serif text-[clamp(28px,4vw,38px)] font-semibold leading-[1.15] text-site-text mb-8">
          Kaj je kupoprodajna pogodba in kaj določa OZ
        </h2>
        <section className="mb-14">
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            Obligacijski zakonik (OZ) ureja kupoprodajno pogodbo v 435. do 527.
            členu — to je eden obsežnejših odsekov zakona, kar že pove, da gre
            za kompleksno razmerje.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            Jedro po 435. členu OZ je preprosto: prodajalec izroči stvar in
            prenese lastninsko pravico, kupec pa plača kupnino. Toda zakon hkrati
            ureja, kdaj je pogodba neveljavna, kdaj prodajalec odgovarja za
            napake, kdaj ima kupec pravico zahtevati znižanje cene ali razvezo
            pogodbe.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8]">
            Za premičnine — pohištvo, avto, tehnika — zakon ne zahteva pisne
            oblike. Ustni dogovor formalno velja. Toda dokazovanje ustnega
            dogovora pred sodiščem je tvegano. Za nepremičnine je pisnost in
            notarska overitev obvezna brez izjem. Splošni pregled vseh pogodb po
            slovenskem pravu najdete na strani{" "}
            <a
              href="/pogodbe/"
              className="text-site-text underline underline-offset-2"
            >
              Pogodbe
            </a>
            .
          </p>
        </section>

        {/* Avto */}
        <h2 className="font-serif text-[clamp(28px,4vw,38px)] font-semibold leading-[1.15] text-site-text mb-8">
          Kupoprodajna pogodba za avto — kaj mora vsebovati
        </h2>
        <section className="mb-14">
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            Vsako leto se v Sloveniji proda okoli 40.000 rabljenih avtomobilov.
            In vsaj pri peščici teh prodaj pride do spora. Kupec trdi, da avto
            ni bil opisan pravilno. Prodajalec pravi, da je kupec videl vse. Brez
            prave pogodbe nimata nobenega od njiju trdnih temeljev.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-6">
            Kupoprodajna pogodba za avto ne zahteva notarskega overitve — to je
            prednost pred nepremičninami. Zadostuje pisna pogodba s podpisoma
            obeh strank. Toda vsebovati mora točno določene podatke, da vas v
            primeru spora dejansko zavaruje.
          </p>

          <div className="bg-site-white border border-site-border rounded-lg p-6 mb-6">
            <p className="text-[14px] font-medium text-site-text mb-4">
              Obvezni elementi kupoprodajne pogodbe za avto:
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Podatki o prodajalcu in kupcu — ime, priimek ali naziv podjetja, naslov, EMŠO ali davčna številka",
                "Identifikacija vozila — znamka, model, letnik, barva, registrska številka in VIN (številka šasije, 17 znakov)",
                "Cena in način plačila — točen znesek v evrih, ali gre za gotovino ali nakazilo, rok plačila",
                "Stanje vozila — km stanje ob prevzemu, veljavnost tehničnega pregleda, datum izteka zavarovanja",
                "Napake in garancija — seznam znanih napak; izrecna izjava o jamčevanju ali njegovem izključitvi",
                "Datum sklenitve in datum prevzema — kdaj pogodba začne veljati, kdaj kupec prevzame ključe in dokumentacijo",
                "Obveznosti pri prenosu — kdo plača odjavnino, registracijo, morebitne carinske dajatve",
              ].map((item) => (
                <li
                  key={item}
                  className="text-[15px] text-site-mid leading-[1.7] pl-4 border-l-2 border-sage-light"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            <strong className="text-site-text">VIN je ključen podatek.</strong>{" "}
            Ta 17-mestna alfanumerična koda je edini zanesljiv identifikator
            vozila. Registrska številka se menja — VIN ne. Preverite ga pred
            podpisom v sistemu EVA (Evidenca vozil) ali pri pooblaščenem
            serviserju. Iz VIN-a razberete, ali je vozilo kdaj utrpelo resno
            popravljeno škodo ali ali je bil štetec zavrnjen.
          </p>

          <div className="bg-site-white border border-site-border rounded-lg p-6 mb-6">
            <p className="text-[14px] font-medium text-site-text mb-2">
              Primer iz prakse
            </p>
            <p className="text-[15px] text-site-mid leading-[1.7]">
              Ana kupi rabljeni Golf za 8.500 €. V pogodbi je navedena le
              registrska številka, VIN manjka, popis stanja ni priložen. Čez tri
              mesece pri rednem servisu ugotovi nerazglašeno poškodbo šasije iz
              prejšnje nesreče. Prodajalec trdi, da ga o tem ni bil dolžan
              obvestiti. Brez konkretnega popisa stanja v pogodbi je njen
              zahtevek bistveno slabše podprt.
            </p>
          </div>

          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            Preden podpišete kupoprodajno pogodbo za avto, preverite svoje
            pravice z AI KRPAN-om. Zastavite konkretno vprašanje — kateri členi
            OZ veljajo za vaš primer — in dobite citiran odgovor v sekundah.
          </p>
          <a
            href="https://app.aikrpan.com"
            className="inline-flex items-center gap-2 bg-sage-dark text-white px-6 py-3 rounded-sm text-[13px] font-semibold tracking-[0.06em] uppercase hover:bg-sage transition-colors duration-200"
          >
            Preverite z AI KRPAN-om &rarr;
          </a>
        </section>

        {/* Vzorec */}
        <h2 className="font-serif text-[clamp(28px,4vw,38px)] font-semibold leading-[1.15] text-site-text mb-8">
          Kupoprodajna pogodba za avto: vzorec
        </h2>
        <section className="mb-14">
          <p className="text-[16px] text-site-mid leading-[1.8] mb-6">
            Vzorec kupoprodajne pogodbe za avto je med najpogosteje iskanimi
            dokumenti te vrste — in razumljivo, ker ga večina kar prenese in
            izpolni. Takšen obrazec je primeren kot izhodišče, ne kot dokončna
            rešitev za vsak primer.
          </p>

          <div className="flex flex-col gap-5 mb-6">
            {[
              {
                n: "1.",
                title: "Pogodbeni stranki",
                desc: "Prodajalec in kupec z vsemi identifikacijskimi podatki (osebni ali poslovni).",
              },
              {
                n: "2.",
                title: "Predmet pogodbe",
                desc: "Natančen opis vozila z VIN, km stanjem, navedbo tehničnega pregleda in servisne knjige.",
              },
              {
                n: "3.",
                title: "Kupnina",
                desc: "Znesek, valuta, rok in način plačila. Gotovinska plačila nad 4.000 € so v Sloveniji omejena po Zakonu o preprečevanju pranja denarja. Višji znesek plačajte bančno.",
              },
              {
                n: "4.",
                title: "Stanje in napake vozila",
                desc: "Seznam vseh znanih napak, ki jih prodajalec razkrije. Kupec z lastnoročnim podpisom potrdi, da je bil o tem obveščen. Te napake so nato izvzete iz jamčevanja.",
              },
              {
                n: "5.",
                title: "Izjava o jamčevanju",
                desc: 'Ali prodajalec daje garancijo za skrite napake ali ne. Klavzula "vozilo se prodaja brez garancije" ni samodejno veljavna — glejte sekcijo o napakah spodaj.',
              },
              {
                n: "6.",
                title: "Prenos dokumentacije",
                desc: "Prometno dovoljenje, zelena karta, servisna knjiga, ključi (koliko parov).",
              },
              {
                n: "7.",
                title: "Podpisi, datum, kraj.",
                desc: "",
              },
            ].map(({ n, title, desc }) => (
              <p key={n} className="text-[16px] text-site-mid leading-[1.8]">
                <strong className="text-site-text">
                  {n} {title}
                </strong>
                {desc ? ` — ${desc}` : ""}
              </p>
            ))}
          </div>

          <p className="text-[14px] text-site-mid leading-[1.7] italic">
            Ta opis je orientacijski vodič — ni pravni dokument in ne nadomešča
            strokovnega pregleda za kompleksnejše primere (npr. vozila s
            hipoteko, vozila iz tujine, poslovne flote).
          </p>
        </section>

        {/* Nepremičnina */}
        <h2 className="font-serif text-[clamp(28px,4vw,38px)] font-semibold leading-[1.15] text-site-text mb-8">
          Kupoprodajna pogodba za nepremičnino — posebnosti
        </h2>
        <section className="mb-14">
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            Prodaja stanovanja je v povprečju največji finančni posel, ki ga
            Slovenec sklene v življenju. In edina vrsta prodajne pogodbe, pri
            kateri zakon zahteva notarsko overitev.
          </p>

          <div className="flex flex-col gap-5 mb-6">
            <p className="text-[16px] text-site-mid leading-[1.8]">
              <strong className="text-site-text">Zakaj notar?</strong> Zakon o
              notariatu zahteva, da se kupoprodajna pogodba za nepremičnino
              sklene v obliki notarskega zapisa ali pa da notar overi podpise
              strank. Notar preveri identiteto, prostovoljnost podpisa in
              zakonitost pogodbe. Brez te overitve vpis lastninske pravice v
              zemljiško knjigo ni mogoč.
            </p>
            <p className="text-[16px] text-site-mid leading-[1.8]">
              <strong className="text-site-text">
                Vpis v zemljiško knjigo.
              </strong>{" "}
              Po Zakonu o zemljiški knjigi pridobite lastninsko pravico na
              nepremičnini šele z vpisom — ne s podpisom pogodbe. Pogodba je
              sklenjena, kupnina plačana, ključi izročeni — vi pa niste formalno
              lastnik, dokler okrajno sodišče ne potrdi vpisa. Vlogo vložite
              takoj po notarski overitvi, ne čakajte.
            </p>
            <p className="text-[16px] text-site-mid leading-[1.8]">
              <strong className="text-site-text">Predkupna pravica.</strong> OZ
              in posebni zakoni (npr. Zakon o kmetijskih zemljiščih) določajo
              predkupno pravico za solastnike, najemnike ali občino. Prodajalec
              mora pred prodajo tretji osebi predkupičarje pisno obvestiti in jim
              dati rok za uveljavitev te pravice. Pogodba, sklenjena brez tega
              postopka, je izpodbojna.
            </p>
            <p className="text-[16px] text-site-mid leading-[1.8]">
              <strong className="text-site-text">
                Kupoprodaja med sorodniki in nujni delež.
              </strong>{" "}
              Ko starši prodajo nepremičnino otroku po nižji ceni, ta posredna
              &ldquo;podaritev&rdquo; vpliva na obračun nujnega deleža pri
              kasnejšem dedovanju. Področje, kjer se kupoprodajna pogodba in
              dedno pravo tesno prepletata — podrobneje razloženo na strani o{" "}
              <a
                href="/dedovanje/"
                className="text-site-text underline underline-offset-2"
              >
                dedovanju
              </a>
              .
            </p>
          </div>
        </section>

        {/* Davek */}
        <h2 className="font-serif text-[clamp(28px,4vw,38px)] font-semibold leading-[1.15] text-site-text mb-8">
          Davek pri kupoprodaji — kdaj, koliko
        </h2>
        <section className="mb-14">
          <p className="text-[16px] text-site-mid leading-[1.8] mb-6">
            Večina kupcev stanovanja ne ve, ali bo plačala DDV ali davek na
            promet nepremičnin. Niso isti davek in ne plača ju vedno ista
            stranka.
          </p>

          <div className="flex flex-col gap-5 mb-6">
            <p className="text-[16px] text-site-mid leading-[1.8]">
              <strong className="text-site-text">
                Davek na promet nepremičnin (DPN)
              </strong>{" "}
              po Zakonu o davku na promet nepremičnin (ZDPN-2) znaša{" "}
              <strong className="text-site-text">2 % od prodajne cene</strong>.
              Plača ga prodajalec. Rok za oddajo napovedi pri FURS je 30 dni po
              sklenitvi pogodbe.
            </p>
            <p className="text-[16px] text-site-mid leading-[1.8]">
              <strong className="text-site-text">
                Izjema — DDV namesto DPN.
              </strong>{" "}
              Kadar nastopa prodajalec kot podjetje, zavezanec za DDV, in prodaja
              novo nepremičnino (zgrajeno v zadnjih dveh letih), se namesto DPN
              obračuna DDV po 9,5 % znižani stopnji (ZDDV-1). V tem primeru DPN
              ne nastane.
            </p>
            <p className="text-[16px] text-site-mid leading-[1.8]">
              <strong className="text-site-text">
                Prodaja rabljenega avta med fizičnimi osebami
              </strong>{" "}
              ne sproži davčne obveznosti — ni DPN, ni DDV. Enkratna prodaja
              zasebnemu kupcu je brez davkov. Pozor pa: kdor prodaja avtomobile
              redno in za zaslužek, ga FURS morda uvrsti med opravljanje
              dejavnosti.
            </p>
            <p className="text-[16px] text-site-mid leading-[1.8]">
              <strong className="text-site-text">
                Fiktivna prodajna cena ne reši davčne obveznosti.
              </strong>{" "}
              Če prodate nepremičnino sorodniku za simbolični znesek, FURS odmeri
              davek od tržne vrednosti, ne od navedene cene. Za brezplačne
              prenose lastnine med sorodniki je pravilnejši instrument darilna
              pogodba, ki ima svoja davčna pravila (davek na darilo z
              oprostitvami za bližnje sorodnike).
            </p>
          </div>
        </section>

        {/* Neveljavnost */}
        <h2 className="font-serif text-[clamp(28px,4vw,38px)] font-semibold leading-[1.15] text-site-text mb-8">
          Kdaj je kupoprodajna pogodba neveljavna
        </h2>
        <section className="mb-14">
          <p className="text-[16px] text-site-mid leading-[1.8] mb-6">
            Neveljavnost pogodbe ni odvisna od tega, ali ste jo podpisali ali
            ne. Pogodba je neveljavna, ko je sklenjena v nasprotju z zakonom,
            prisilnimi predpisi ali moralnimi načeli — in nekatere razloge
            stranke spoznajo šele mesece po podpisu.
          </p>

          <div className="flex flex-col gap-5 mb-6">
            <div>
              <p className="text-[16px] text-site-mid leading-[1.8] mb-3">
                <strong className="text-site-text">Absolutna ničnost</strong> —
                pogodba ne ustvari nobenih pravnih učinkov, ni je mogoče
                sanirati:
              </p>
              <ul className="flex flex-col gap-2 pl-4">
                {[
                  "Predmet pogodbe je ukradena ali drugače nezakonito pridobljena stvar",
                  "Pogodba sklenjena z namenom preprečiti izvršbo upnika",
                  "Kupoprodajna pogodba za nepremičnino brez notarske overitve",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-[15px] text-site-mid leading-[1.7] pl-4 border-l-2 border-sage-light"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[16px] text-site-mid leading-[1.8] mb-3">
                <strong className="text-site-text">Relativna izpodbojnost</strong>{" "}
                — stranka mora v roku zahtevati razvezo pred sodiščem:
              </p>
              <ul className="flex flex-col gap-2 pl-4">
                {[
                  "Grožnja ali prisila ob sklenitvi",
                  "Izkoriščanje neizkušenosti ali odvisnega položaja (laesio enormis, 5. člen OZ)",
                  "Bistvena zmota o lastnostih predmeta, ki je pri razumnem pregledu ni bilo mogoče odkriti",
                  "Sklenitev s posameznikom brez poslovne sposobnosti brez soglasja skrbnika",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-[15px] text-site-mid leading-[1.7] pl-4 border-l-2 border-sage-light"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-[16px] text-site-mid leading-[1.8]">
            Absolutna ničnost velja po uradni dolžnosti — uveljaviti jo lahko
            kdorkoli, kadar koli, brez roka. Izpodbojnost pa ima rok — navadno
            eno leto od odkritja razloga ali prenehanja prisile.
          </p>
        </section>

        {/* Napake */}
        <h2 className="font-serif text-[clamp(28px,4vw,38px)] font-semibold leading-[1.15] text-site-text mb-8">
          Napake stvari — odgovornost prodajalca po OZ
        </h2>
        <section className="mb-14">
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            Kupec je v avtu po dveh tednih opazil, da menjalnik trzlja.
            Prodajalec pravi, da tega ob prodaji ni vedel. Kdo odgovarja?
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            OZ razlikuje med <strong className="text-site-text">vidnimi</strong>{" "}
            in{" "}
            <strong className="text-site-text">skritimi napakami</strong>.
            Vidne napake mora kupec pregledati in reklamirati takoj ob prevzemu.
            Skrite napake — tiste, ki jih pri razumnem pregledu ob prevzemu ni
            bilo mogoče opaziti — mora kupec reklamirati v{" "}
            <strong className="text-site-text">dveh mesecih od odkritja</strong>
            , sicer izgubi pravico do jamčevanja. Prodajalec za skrite napake
            odgovarja{" "}
            <strong className="text-site-text">dve leti od izročitve</strong>.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-6">
            <strong className="text-site-text">Ključen člen: 459. čl. OZ.</strong>{" "}
            Prodajalec odgovarja za napake, ki so obstajale ob izročitvi, tudi
            če zanje ni vedel. Ni potrebno, da je napako zavestno prikrival.
            Dovolj je, da je napaka obstajala ob prodaji.
          </p>

          <div className="bg-site-white border border-site-border rounded-lg p-6 mb-6">
            <p className="text-[14px] font-medium text-site-text mb-3">
              Možnosti kupca pri napaki:
            </p>
            <ul className="flex flex-col gap-2">
              {[
                "Zahtevati odpravo napake (popravilo)",
                "Zahtevati zamenjavo s stvarjo brez napak",
                "Zahtevati sorazmerno znižanje kupnine",
                "Razveljaviti pogodbo in zahtevati vračilo kupnine",
              ].map((item, i) => (
                <li
                  key={item}
                  className="text-[15px] text-site-mid leading-[1.7] pl-4 border-l-2 border-sage-light"
                >
                  {i + 1}. {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-[16px] text-site-mid leading-[1.8]">
            <strong className="text-site-text">
              Pogodbena izključitev jamčevanja
            </strong>{" "}
            je dovoljena — ampak le, če prodajalec napake ni vedoma prikrival.
            Klavzula &ldquo;prodam kot videno, brez garancije&rdquo; prodajalca
            ne reši odgovornosti za napake, ki jih je zavestno zamolčal. Napiši
            v pogodbo seznam znanih napak in zahtevaj kupčev podpis pod
            potrditvijo, da je bil obveščen. Samo tako so te napake dejansko
            izvzete iz jamčevanja.
          </p>
        </section>

        {/* CTA */}
        <h2 className="font-serif text-[clamp(28px,4vw,38px)] font-semibold leading-[1.15] text-site-text mb-8">
          Zastavite vprašanje o kupoprodajni pogodbi
        </h2>
        <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
          Konkretna situacija zahteva konkreten odgovor. Kupujete avto z nejasno
          zgodovino? Prodajate stanovanje sorodniku? Ne veste, kateri davek
          velja?
        </p>
        <p className="text-[16px] text-site-mid leading-[1.8] mb-6">
          AI KRPAN analizira slovensko zakonodajo in sodno prakso ter vrne
          citiran odgovor — brezplačno, brez čakanja.
        </p>
        <a
          href="https://app.aikrpan.com"
          className="inline-flex items-center gap-2 bg-sage-dark text-white px-6 py-3 rounded-sm text-[13px] font-semibold tracking-[0.06em] uppercase hover:bg-sage transition-colors duration-200 mb-14"
        >
          Vprašajte AI KRPAN-a &rarr;
        </a>

        {/* FAQ */}
        <h2 className="font-serif text-[clamp(28px,4vw,38px)] font-semibold leading-[1.15] text-site-text mb-8">
          Pogosta vprašanja o kupoprodajni pogodbi
        </h2>
        <FAQAccordion
          items={faqs.map((faq) => ({ q: faq.question, a: faq.answer }))}
        />

        {/* Legal references */}
        <div className="mt-14 pt-8 border-t border-site-border">
          <p className="text-[13px] font-medium text-site-text mb-4">
            Pravne reference
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px] text-site-mid">
              <thead>
                <tr className="border-b border-site-border">
                  <th className="text-left pb-2 pr-6 font-medium text-site-text">
                    Predpis
                  </th>
                  <th className="text-left pb-2 font-medium text-site-text">
                    Vsebina
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-site-border">
                {[
                  [
                    "Obligacijski zakonik (OZ), 435.–527. člen",
                    "Splošne določbe prodajne pogodbe, jamčevanje za napake",
                  ],
                  [
                    "OZ, 459. člen",
                    "Odgovornost prodajalca za materialne napake stvari",
                  ],
                  [
                    "Zakon o davku na promet nepremičnin (ZDPN-2)",
                    "2 % davek na promet nepremičnin",
                  ],
                  [
                    "Zakon o DDV (ZDDV-1), 41. člen",
                    "DDV pri prodaji novih nepremičnin podjetij",
                  ],
                  [
                    "Zakon o notariatu",
                    "Obvezna oblika za nepremičninske pogodbe",
                  ],
                  [
                    "Zakon o zemljiški knjigi",
                    "Pridobitev lastninske pravice z vpisom",
                  ],
                  [
                    "Zakon o preprečevanju pranja denarja",
                    "Omejitev gotovinskih plačil (4.000 €)",
                  ],
                ].map(([predpis, vsebina]) => (
                  <tr key={predpis}>
                    <td className="py-2 pr-6 align-top">{predpis}</td>
                    <td className="py-2 align-top">{vsebina}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[12px] text-site-mid mt-6 italic">
            Stran vsebuje splošne pravne informacije na podlagi veljavne
            zakonodaje. Ne nadomešča pravnega nasveta za vaš konkretni primer.
          </p>
        </div>
      </div>
    </ContentLayout>
  );
}
