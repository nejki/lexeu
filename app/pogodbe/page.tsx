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
  title: "Pogodbe po slovenskem pravu - Obligacijski zakonik",
  description:
    "Podjemna, najemna, kupoprodajna, darilna pogodba. Kaj določa Obligacijski zakonik in kdaj je pogodba neveljavna?",
  keywords: [
    "pogodbe",
    "obligacijski zakonik",
    "kupoprodajna pogodba",
    "najemna pogodba",
    "darilna pogodba",
    "podjemna pogodba",
    "pogodba o dosmrtnem preživljanju",
    "posojilna pogodba",
    "neveljavna pogodba",
    "OZ",
  ],
  alternates: {
    canonical: "https://www.aikrpan.com/pogodbe/",
  },
  openGraph: {
    title: "Pogodbe po slovenskem pravu - Obligacijski zakonik",
    description:
      "Podjemna, najemna, kupoprodajna, darilna pogodba. Kaj določa Obligacijski zakonik in kdaj je pogodba neveljavna?",
    url: "https://www.aikrpan.com/pogodbe/",
    type: "article",
  },
};

const faqs = [
  {
    question: "Ali je ustna pogodba veljavna?",
    answer:
      "Da, za večino vrst pogodb. OZ zahteva pisno obliko le tam, kjer je to izrecno določeno: pri prenosu nepremičnin, darilnih pogodbah za nepremičnine in pogodbah o dosmrtnem preživljanju. Za prodajo avtomobila ali posojilo med fizičnimi osebami pisna oblika ni zakonsko obvezna, a jo je priporočljivo imeti za dokazne namene.",
  },
  {
    question: "Kdaj lahko odstopim od pogodbe?",
    answer:
      "Odvisno od vrste in razloga. Pri nakupu od podjetja prek spleta ali po telefonu imate 14 dni za odstop brez navedbe razloga po Zakonu o varstvu potrošnikov. Pri pogodbi med fizičnimi osebami pravice do enostranskega odstopa ni, razen če je dogovorjena v sami pogodbi ali zakon to izrecno dopušča.",
  },
  {
    question: "Kaj se zgodi, če nasprotna stranka ne izpolni pogodbe?",
    answer:
      "Upnik ima pravico zahtevati izpolnitev, odstopiti od pogodbe in zahtevati povrnitev nastale škode. Postopek se praviloma začne s pisnim opominom z določitvijo razumnega roka za izpolnitev. Šele po neuspešnem opominu nastopi pravica do odstopa.",
  },
  {
    question: "Ali kupoprodajna pogodba za rabljeni avtomobil zahteva notarja?",
    answer:
      "Ne. Za premičnine, vključno z vozili, notarska overitev ni zakonsko predpisana. Priporoča se pisna pogodba z navedbo stanja vozila, kupnine, serijske številke (VIN) in datuma prevzema. Brez tega prodajalec v celoti odgovarja za stvarne napake.",
  },
  {
    question: "Kaj pomeni, da je pogodba v nasprotju z moralo?",
    answer:
      "OZ določa, da je pogodba nična, če je v nasprotju z ustavo, prisilnimi predpisi ali moralnimi načeli (OZ, 86. člen). Primeri: dogovor o izmikanju plačilu davkov, pogodba s prepovedano vsebino ali sporazum, ki eno stranko izkoriščevalsko postavi v podrejeni položaj.",
  },
];

const subPages = [
  {
    title: "Kupoprodajna pogodba",
    description:
      "Vse o kupoprodajni pogodbi, vključno s pogodbo za avto. Napake, garancije, roki.",
    href: "/pogodbe/kupoprodajna-pogodba/",
  },
  {
    title: "Darilna pogodba",
    description:
      "Davek na darilo, nujni delež, notarska overitev. Pravna varnost pri prenosu premoženja.",
    href: "/pogodbe/darilna-pogodba/",
  },
  {
    title: "Najemna pogodba",
    description:
      "Pravice najemnika in najemodajalca, odpovedni rok, stroški vzdrževanja.",
    href: "/pogodbe/najemna-pogodba/",
  },
  {
    title: "Podjemna pogodba",
    description:
      "Kdaj gre za podjemno pogodbo, pravice in obveznosti, kako se zaščititi pred spori.",
    href: "/pogodbe/podjemna-pogodba/",
  },
  {
    title: "Pogodba o dosmrtnem preživljanju",
    description:
      "Hiša za skrb: pogoji, tveganja in zaščita pri pogodbi o dosmrtnem preživljanju.",
    href: "/pogodbe/pogodba-o-dosmrtnem-prezivljanju/",
  },
];

export default function PogodbePage() {
  return (
    <ContentLayout
      breadcrumbs={[{ label: "Pogodbe", href: "/pogodbe/" }]}
      title="Pogodbe v Sloveniji: kaj pravi Obligacijski zakonik o vaših pravicah"
      subtitle="Vsak dan v Sloveniji podpišemo na tisoče pogodb. Večina podpisovalcev ne prebere niti ene vrstice. Šele ko nastane spor, se pojavijo vprašanja."
    >
      <SchemaScript
        schema={breadcrumbSchema([{ name: "Pogodbe", url: "/pogodbe/" }])}
      />
      <SchemaScript
        schema={articleSchema({
          title: "Pogodbe po slovenskem pravu - Obligacijski zakonik",
          description:
            "Podjemna, najemna, kupoprodajna, darilna pogodba. Kaj določa Obligacijski zakonik in kdaj je pogodba neveljavna?",
          url: "/pogodbe/",
          datePublished: "2026-03-12",
          dateModified: "2026-03-12",
        })}
      />
      <SchemaScript schema={faqPageSchema(faqs)} />

      {/* Intro */}
      <div className="max-w-3xl mb-16">
        <p className="text-[17px] text-site-mid leading-[1.8] mb-5">
          Vsak dan v Sloveniji podpišemo na tisoče pogodb: najemnih,
          kupoprodajnih, posojilnih. Večina podpisovalcev ne prebere niti ene
          vrstice. Šele ko nastane spor, se pojavijo vprašanja: Ali je pogodba
          sploh veljavna? Kakšne so vaše pravice? Kaj zakon dejansko zagotavlja?
        </p>
        <p className="text-[17px] text-site-mid leading-[1.8]">
          Odgovore daje Obligacijski zakonik (OZ), temeljni zakon slovenskega
          pogodbenega prava. Ureja vse od preprostega nakupa avtomobila do
          zapletenih razmerij med podjetji. Morda ga niste nikoli prebrali, a
          vpliva na skoraj vsako pogodbo, ki jo sklenete v življenju.
        </p>
      </div>

      {/* Sub-page cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {subPages.map((page) => (
          <div
            key={page.href}
            className="block bg-site-white border border-site-border rounded-lg p-6"
          >
            <h2 className="font-serif text-[22px] font-semibold text-site-text mb-2">
              {page.title}
            </h2>
            <p className="text-[15px] text-site-mid leading-[1.7]">
              {page.description}
            </p>
          </div>
        ))}
      </div>

      {/* ── Vsebina ── */}
      <div className="max-w-3xl">
        <h2 className="font-serif text-[clamp(28px,4vw,38px)] font-semibold leading-[1.15] text-site-text mb-10">
          Katere pogodbe ureja Obligacijski zakonik
        </h2>

        <section className="mb-14">
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            OZ ne ureja vseh pogodb. Delovna razmerja ureja Zakon o delovnih
            razmerjih (ZDR-1), o tem več na naši strani o{" "}
            <a
              href="/delovno-pravo/"
              className="text-site-text underline underline-offset-2"
            >
              delovnem pravu
            </a>
            . Dedovanje in pogodbe z učinkom ob smrti ureja Zakon o dedovanju,
            glejte stran o{" "}
            <a
              href="/dedovanje/"
              className="text-site-text underline underline-offset-2"
            >
              dedovanju
            </a>
            . OZ ureja pogodbe civilnega prava: prodajne, najemne, darilne,
            posojilne, podjemne in številne druge.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            Posebej omenimo: kolektivna pogodba, kolektivna pogodba za javni
            sektor in kolektivna pogodba za kovinsko industrijo niso pogodbe
            civilnega prava v smislu OZ. Gre za sporazume med sindikati in
            delodajalci, ki urejajo delovne pogoje za celotne panoge. Vaša
            individualna najemna ali kupoprodajna pogodba z njimi nima nobene
            zveze.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8]">
            Za veljavnost vsake pogodbe po OZ morajo biti izpolnjeni štirje
            pogoji: poslovna sposobnost strank, svobodna volja brez sile ali
            prevare, dopusten predmet, ki ni v nasprotju z zakonom ali moralo,
            in ustrezna oblika, kadar jo zakon izrecno zahteva. Kadar kateri
            koli pogoj manjka, pogodba ni veljavna, ne glede na to, da ste jo
            podpisali.
          </p>
        </section>

        {/* Kupoprodajna */}
        <section className="mb-14">
          <h3 className="font-serif text-[24px] font-semibold text-site-text mb-4">
            Kupoprodajna pogodba: ko stvar zamenja lastnika
          </h3>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            Vsak nakup avtomobila od zasebnika je kupoprodajna pogodba. Enako
            velja za prodajo stanovanja, kolesarja na bolšjem sejmu ali gradbene
            opreme med podjetji.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            Po OZ mora prodajalec kupcu prenesti lastninsko pravico na stvari,
            kupec pa plačati dogovorjeno ceno (OZ, 435. člen). Zveni preprosto,
            težave nastanejo pri skritih napakah, garancijah in rokih.
            Prodajalec odgovarja za stvarne napake, ki so obstajale v trenutku
            prehoda nevarnosti na kupca, tudi če zanje ni vedel.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-5">
            Kupoprodajna pogodba za nepremičnine mora biti sklenjena v pisni
            obliki in overjena pri notarju, sicer je nična. Za premičnine, na
            primer rabljeni avtomobil med dvema fizičnima osebama, pisna oblika
            ni zakonsko obvezna. Brez nje boste v sporu brez dokazov.
          </p>
          <p className="text-[15px] text-site-mid leading-[1.7]">
            <a
              href="/pogodbe/kupoprodajna-pogodba/"
              className="text-site-text underline underline-offset-2"
            >
              Vse o kupoprodajni pogodbi, vključno s pogodbo za avto →
            </a>
          </p>
        </section>

        {/* Podjemna */}
        <section className="mb-14">
          <h3 className="font-serif text-[24px] font-semibold text-site-text mb-4">
            Podjemna pogodba: kdaj, zakaj in kje so pasti
          </h3>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            Naročite zidarsko ekipo za adaptacijo kopalnice. Dogovor je ustni,
            cena okvirna, rok nedoločen. Čez tri mesece ekipe še ni, kaj
            storiti?
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            Podjemna pogodba (OZ, 619. člen) je pogodba, s katero se izvajalec
            zaveže opraviti določeno delo, naročnik pa plačati za rezultat, ne
            za ure. Ključna razlika od pogodbe o zaposlitvi: tveganje napake in
            zamude nosi izvajalec, ne naročnik.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8]">
            Najpogostejša past je ustni dogovor brez pisnega popisa del in roka.
            Ko se izvajalec in naročnik ne strinjata glede obsega, dokazov ni.
            Sodna praksa je polna primerov gradbenih sporov, kjer nihče ni imel
            pisnega dokaza za to, kaj je bilo dogovorjeno.
          </p>
        </section>

        {/* Najemna */}
        <section className="mb-14">
          <h3 className="font-serif text-[24px] font-semibold text-site-text mb-4">
            Najemna pogodba: pravice najemnika in najemodajalca
          </h3>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            Najemodajalec vam je junija sporočil, da bo od septembra najemnina
            višja za 20 %. Ali sme? Odvisno od tega, kaj piše v vaši pogodbi.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            Najemna pogodba ureja razmerje med najemodajalcem in najemnikom
            stanovanja, poslovnih prostorov ali opreme. OZ določa, da mora
            najemodajalec stvar izročiti v stanju, primernem za pogodbeno
            dogovorjeno rabo, in jo v tem stanju vzdrževati. Stroškov rednega
            vzdrževanja ne more prevaliti na najemnika brez pogodbenega temelja.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8]">
            Pisna oblika za najemne pogodbe ni zakonsko obvezna, a v praksi brez
            pisne pogodbe ne morete dokazati ničesar: ne višine najemnine, ne
            roka, ne tega, kdo plača komunalne stroške. Posebna pozornost velja
            pri najemnih pogodbah za nedoločen čas: odpoved ni možna čez noč.
          </p>
        </section>

        {/* Darilna */}
        <section className="mb-14">
          <h3 className="font-serif text-[24px] font-semibold text-site-text mb-4">
            Darilna pogodba: davek, nujni delež in neprijetna presenečenja
          </h3>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            Ko dedek vnuku podari avtomobil ali ko starši otroku prenesejo
            stanovanje brez plačila, v obeh primerih gre za darilno pogodbo.
            Obe imata davčne in dedne posledice, ki jih večina darilcev ne
            predvidi.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            Darilna pogodba (OZ, 534. člen in naslednji) je enostransko
            zavezujoča: darovalec se zaveže prenesti premoženje, obdarjenec pa
            ne da ničesar v zameno. Za darila med bližnjimi sorodniki velja
            davčna oprostitev. Za oddaljene sorodnike ali nepovezane osebe
            nastane davek na darilo.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8]">
            Darilo ni nedotakljivo. Nujni dediči lahko v dednem postopku
            uveljavljajo zmanjšanje daril, ki posegajo v njihov nujni delež. O
            tem več na strani o{" "}
            <a
              href="/dedovanje/"
              className="text-site-text underline underline-offset-2"
            >
              dedovanju
            </a>
            . Darila nepremičnin morajo biti sklenjena v pisni obliki in
            overjena pri notarju, sicer so nična.
          </p>
        </section>

        {/* Dosmrtno preživljanje */}
        <section className="mb-14">
          <h3 className="font-serif text-[24px] font-semibold text-site-text mb-4">
            Pogodba o dosmrtnem preživljanju: hiša za skrb
          </h3>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            Upokojeni oče živi sam, hiše ne more vzdrževati, otrok ga redno
            obiskuje in skrbi zanj. Dogovorita se: otrok prevzame polno skrb za
            starša, starš pa mu prenese lastninsko pravico na hiši.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            To je pogodba o dosmrtnem preživljanju, eno najtanejših področij
            slovenskega pogodbenega prava. Preživljalec se zaveže zagotavljati
            preživovancu vse do njegove smrti, preživovanec pa nanj prenese
            lastnino. Notarska overitev in vpis v zemljiško knjigo sta obvezna.
            Brez tega pogodba ne velja proti tretjim osebam in je nična.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8]">
            Pogodba o dosmrtnem preživljanju se pogosto meša s pogodbo o
            preužitku. Pri dosmrtnem preživljanju prenesete lastnino takoj in
            prejmete celotno oskrbo. Pri preužitku obdržite pravico do uživanja
            premoženja za čas življenja, lastninska pravica pa preide na drugo
            osebo.
          </p>
        </section>

        {/* Posojilna */}
        <section className="mb-14">
          <h3 className="font-serif text-[24px] font-semibold text-site-text mb-4">
            Posojilna pogodba med fizičnimi osebami: pasti ustnega dogovora
          </h3>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            Sosed vam posodi 8.000 €. Brez pisne pogodbe, brez dogovorjenega
            roka. Čez dve leti ne vrne ničesar in zatrjuje, da je bil znesek
            manjši. Kaj dokažete na sodišču?
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            Posojilna pogodba med fizičnimi osebami je zakonsko urejena z OZ.
            Posojilodajalec prenese denar, posojilojemalec pa vrne enak znesek v
            dogovorjenem roku, z obrestmi ali brez. Ustna posojilna pogodba je
            za manjše zneske veljavna, a skoraj neizvršljiva brez pisnega dokaza
            ali priče.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8]">
            Pozorni bodite na dogovorjene obresti: OZ prepoveduje oderuške
            obresti. Zakonita zamudna obrestna mera se določi vsako leto
            posebej. Pri posojilih med fizičnimi osebami je priporočljivo obresti
            izrecno dogovoriti ali jasno zapisati, da se posoja brezobrestno.
          </p>
        </section>

        {/* Neveljavnost */}
        <h2 className="font-serif text-[clamp(28px,4vw,38px)] font-semibold leading-[1.15] text-site-text mb-8 mt-20">
          Kdaj je pogodba neveljavna
        </h2>
        <p className="text-[16px] text-site-mid leading-[1.8] mb-6">
          &ldquo;Podpisal sem, a niso mi povedali vsega.&rdquo; Podpis sam po
          sebi ni dovolj za veljavno pogodbo.
        </p>
        <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
          OZ ločuje dve obliki neveljavnosti, ki se bistveno razlikujeta po
          posledicah in rokih.
        </p>

        <div className="flex flex-col gap-5 mb-6">
          <p className="text-[16px] text-site-mid leading-[1.8]">
            <strong className="text-site-text">Ničnost (OZ, 86. člen):</strong>{" "}
            pogodba je nična od samega začetka in ne ustvari nobenih pravnih
            učinkov. Razlogi so: nedopusten predmet, kršitev prisilnih predpisov,
            nemoralna vsebina ali pomanjkanje zahtevane pisne oblike. Ničnosti se
            lahko sklicuje kdorkoli in kadarkoli, ni zastaralnega roka.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8]">
            <strong className="text-site-text">
              Izpodbojnost (OZ, 94. člen):
            </strong>{" "}
            pogodba je veljavna in ustvarja pravne učinke, dokler sodišče ne
            odloči drugače. Razlogi za izpodbijanje so zmota o bistvenih
            okoliščinah, prevara, sila ali grožnja in bistveno nesorazmerje
            vzajemnih dajatev. Rok za izpodbijanje je praviloma eno leto od
            odkritja napake ali prenehanja sile. Po tem roku pravica ugasne.
          </p>
        </div>

        <p className="text-[16px] text-site-mid leading-[1.8] mb-14">
          Praksa kaže, da je največ sporov pri pogodbah brez pisnih dokazov in
          pri tistih, kjer je ena stranka zamolčala bistveno informacijo.
          Sodišče ne more ugotoviti, kaj je bilo ustno dogovorjeno, če ni
          nobenih materialnih sledov.
        </p>

        {/* ── AI KRPAN ── */}
        <h2 className="font-serif text-[clamp(28px,4vw,38px)] font-semibold leading-[1.15] text-site-text mb-8">
          Preverite pogodbo z AI KRPAN-om
        </h2>
        <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
          Imate konkretno vprašanje o pogodbi: ali je veljavna, kaj so vaše
          pravice, kdaj in kako jo izpodbiti?
        </p>
        <p className="text-[16px] text-site-mid leading-[1.8] mb-6">
          AI KRPAN analizira slovensko zakonodajo in sodno prakso ter vrne
          odgovor s sklicevanjem na konkretne člene OZ. Brezplačno, brez
          registracije, v slovenščini.
        </p>

        <div className="bg-site-white border border-site-border rounded-lg p-6 mb-6">
          <p className="text-[14px] font-medium text-site-text mb-3">
            Primeri vprašanj, ki jih uporabniki zastavljajo:
          </p>
          <ul className="flex flex-col gap-2">
            {[
              "Ali je kupoprodajna pogodba za avto veljavna brez notarja?",
              "Kdaj lahko zahtevam vrnitev denarja od podjemnika, ki ni dokončal dela?",
              "Najemodajalec mi dviga najemnino brez pogodbenega temelja. Kaj lahko storim?",
              "Ali darilo staršev vpliva na moj dedni delež?",
              "Posodil sem denar sosedu brez pogodbe. Kako ga terjam?",
            ].map((q) => (
              <li
                key={q}
                className="text-[15px] text-site-mid leading-[1.7] pl-4 border-l-2 border-sage-light"
              >
                &ldquo;{q}&rdquo;
              </li>
            ))}
          </ul>
        </div>

        <a
          href="https://app.aikrpan.com"
          className="inline-flex items-center gap-2 bg-sage-dark text-white px-6 py-3 rounded-sm text-[13px] font-semibold tracking-[0.06em] uppercase hover:bg-sage transition-colors duration-200 mb-14"
        >
          Zastavite vprašanje AI KRPAN-u &rarr;
        </a>

        {/* ── FAQ ── */}
        <h2 className="font-serif text-[clamp(28px,4vw,38px)] font-semibold leading-[1.15] text-site-text mb-8">
          Pogosta vprašanja o pogodbah
        </h2>
        <FAQAccordion
          items={faqs.map((faq) => ({ q: faq.question, a: faq.answer }))}
        />
      </div>
    </ContentLayout>
  );
}
