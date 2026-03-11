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
  title: "Delovno pravo v Sloveniji - Vaše pravice po ZDR-1",
  description:
    "Odpoved, odpravnina, regres, dopust. Razumite svoje pravice po Zakonu o delovnih razmerjih. Preverite z AI KRPAN-om.",
  keywords: [
    "delovno pravo",
    "delovno pravo slovenija",
    "ZDR-1",
    "zakon o delovnih razmerjih",
    "odpoved pogodbe o zaposlitvi",
    "odpravnina",
    "regres 2026",
    "minimalna plača 2026",
    "odpovedni rok",
    "sporazumna odpoved",
    "bolniška odsotnost",
    "letni dopust",
    "šikaniranje na delovnem mestu",
    "brezplačna pravna pomoč",
  ],
  alternates: {
    canonical: "https://www.aikrpan.com/delovno-pravo/",
  },
  openGraph: {
    title: "Delovno pravo v Sloveniji - Vaše pravice po ZDR-1",
    description:
      "Odpoved, odpravnina, regres, dopust. Razumite svoje pravice po Zakonu o delovnih razmerjih. Preverite z AI KRPAN-om.",
    url: "https://www.aikrpan.com/delovno-pravo/",
    type: "article",
  },
};

const faqs = [
  {
    question: "Koliko znaša regres 2026?",
    answer:
      "Minimalni regres za letni dopust znaša toliko kot minimalna plača v tekočem letu. Točen znesek vlada potrdi z uredbo na začetku leta. Delodajalec ga mora izplačati do 1. julija 2026. Javni uslužbenci imajo pogosto višji regres, ki ga določajo kolektivne pogodbe za javni sektor.",
  },
  {
    question: "Kdaj se izplača odpravnina ob upokojitvi?",
    answer:
      "Ob prenehanju pogodbe o zaposlitvi zaradi upokojitve. Pripada vam ne glede na to, ali odpoved podate vi ali jo poda delodajalec. Višino določa ZDR-1 ali kolektivna pogodba, velja kar je za vas ugodneje. Izplačati jo mora delodajalec ob prenehanju delovnega razmerja.",
  },
  {
    question: "Kako dolga je bolniška na lastne stroške?",
    answer:
      "ZDR-1 tega izraza ne pozna. V praksi nekateri delodajalci dopuščajo do 3 dni odsotnosti brez bolniškega lista. To je interna ureditev, ne zakonska pravica. Za vsako bolniško odsotnost, ki traja dlje, potrebujete potrdilo zdravnika.",
  },
  {
    question: "Ali me lahko odpustijo med bolniško?",
    answer:
      "Z redno odpovedjo ne. ZDR-1 določa varstvo pred odpovedjo v času začasne nezmožnosti za delo. Toda izredna odpoved (na primer zaradi hujše kršitve obveznosti iz delovnega razmerja) je možna tudi med bolniško odsotnostjo. Varstvo ni absolutno.",
  },
  {
    question: "Koliko dni letnega dopusta mi pripada?",
    answer:
      "Zakonski minimum je 4 tedne (20 delovnih dni pri petdnevnem tednu). Dodatni dnevi pripadajo starejšim od 55 let, delavcem z invalidnostjo, staršem otrok do 15 let in delavcem z nižjo izobrazbo. Vaša pogodba o zaposlitvi ali kolektivna pogodba lahko določata več. Preverite in zahtevajte, kar vam pripada.",
  },
  {
    question: "Kaj je odpovedni rok za nedoločen čas?",
    answer:
      "Če odpovedujete vi: 15 dni v prvem letu zaposlitve, 30 dni po enem letu. Če odpoved poda delodajalec iz poslovnih razlogov, so roki daljši, od 15 dni do 80 dni, odvisno od dolžine vaše zaposlitve.",
  },
  {
    question: "Kaj storiti ob šikaniranju na delovnem mestu?",
    answer:
      "Pisno obvestite delodajalca. 47. člen ZDR-1 mu nalaga obveznost ukrepanja. Če ne ukrepa ali če je šikaniranje s strani nadrejenega, imate pravico do izredne odpovedi z odpravnino. Dokumentirajte vse: sporočila, datume, priče.",
  },
];

const subPages = [
  {
    title: "Odpoved pogodbe o zaposlitvi",
    description:
      "Redna in izredna odpoved, odpovedni roki, vzorci in predloge.",
    href: "/delovno-pravo/odpoved/",
  },
  {
    title: "Odpravnina",
    description: "Kdaj pripada, kako se izračuna, kalkulator odpravnine.",
    href: "/delovno-pravo/odpravnina/",
  },
  {
    title: "Regres za letni dopust",
    description:
      "Višina regresa, roki izplačila, davčna obravnava. Posodobljeno za 2026.",
    href: "/delovno-pravo/regres/",
  },
  {
    title: "Minimalna plača",
    description:
      "Aktualna minimalna plača, zgodovinski pregled, izračun neto zneska.",
    href: "/delovno-pravo/minimalna-placa/",
  },
];

export default function DelovnoPravoPage() {
  return (
    <ContentLayout
      breadcrumbs={[{ label: "Delovno pravo", href: "/delovno-pravo/" }]}
      title="Delovno pravo: kar morate vedeti, preden podpišete ali odpoveste"
      subtitle="Zakon o delovnih razmerjih (ZDR-1) ima preko 230 členov. Vi ne potrebujete vseh. Potrebujete tiste, ki se tičejo vaše situacije, zdaj, danes."
    >
      <SchemaScript
        schema={breadcrumbSchema([
          { name: "Delovno pravo", url: "/delovno-pravo/" },
        ])}
      />
      <SchemaScript
        schema={articleSchema({
          title: "Delovno pravo v Sloveniji - Vaše pravice po ZDR-1",
          description:
            "Odpoved, odpravnina, regres, dopust. Razumite svoje pravice po Zakonu o delovnih razmerjih.",
          url: "/delovno-pravo/",
          datePublished: "2026-03-10",
          dateModified: "2026-03-10",
        })}
      />
      <SchemaScript schema={faqPageSchema(faqs)} />

      {/* Intro */}
      <div className="max-w-3xl mb-16">
        <p className="text-[17px] text-site-mid leading-[1.8] mb-5">
          Delovno pravo v Sloveniji ureja skoraj vse, kar se vam lahko zgodi na
          delovnem mestu. Od prvega podpisa pogodbe do zadnjega dne odpovednega
          roka. Pa vendar večina zaposlenih ne pozna svojih pravic. Dokler ne
          dobijo odpovedi. Ali dokler ne ugotovijo, da jim delodajalec že dve
          leti krši pogodbo.
        </p>
        <p className="text-[17px] text-site-mid leading-[1.8]">
          Ta stran pokriva ključna področja delovnega prava, na katera naletite
          v praksi: odpoved pogodbe o zaposlitvi, odpravnino, regres, minimalno
          plačo, dopust in bolniško odsotnost. Za vsako področje najdete
          konkretne odgovore, ki temeljijo na veljavni zakonodaji.
        </p>
      </div>

      {/* Sub-page cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {subPages.map((page) => (
          <a
            key={page.href}
            href={page.href}
            className="group block bg-site-white border border-site-border rounded-lg p-6 hover:border-accent hover:shadow-sm transition-all duration-200"
          >
            <h2 className="font-serif text-[22px] font-semibold text-site-text group-hover:text-accent transition-colors duration-200 mb-2">
              {page.title}
            </h2>
            <p className="text-[15px] text-site-mid leading-[1.7]">
              {page.description}
            </p>
          </a>
        ))}
      </div>

      {/* ── Ključna področja ── */}
      <div className="max-w-3xl">
        <h2 className="font-serif text-[clamp(28px,4vw,38px)] font-semibold leading-[1.15] text-site-text mb-10">
          Ključna področja delovnega prava
        </h2>

        {/* Odpoved */}
        <section className="mb-14">
          <h3 className="font-serif text-[24px] font-semibold text-site-text mb-4">
            Odpoved pogodbe o zaposlitvi
          </h3>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            Odpoved pogodbe o zaposlitvi je verjetno najbolj stresen trenutek v
            karieri. In hkrati tisti, ko morate najbolje poznati svoje pravice.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            ZDR-1 razlikuje med redno in izredno odpovedjo. Redna odpoved s
            strani delodajalca zahteva utemeljen razlog: poslovni razlog, razlog
            nesposobnosti ali krivdni razlog. Vsak od teh ima drugačne
            posledice za odpovedni rok in odpravnino. Izredna odpoved velja
            takoj, brez odpovednega roka, ampak samo ob hudih kršitvah.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            Veliko zaposlenih ne ve, da tudi sami lahko podajo redno odpoved
            brez navajanja razloga. 15 ali 30 dni odpovednega roka, odvisno od
            trajanja zaposlitve. In to je to. Ampak pozor: če odpoveste sami,
            nimate pravice do odpravnine.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-5">
            Kako napisati odpoved? Zakon ne predpisuje obrazca, zahteva pa
            pisno obliko in vročitev. Vzorec odpovedi delovnega razmerja
            najdete na spletu, a ključno je, da vsebuje datum, vaše podatke in
            jasno izjavo volje. Sporazumna odpoved je druga možnost. Delodajalci
            jo pogosto ponudijo. Toda bodite previdni. Sporazum pomeni, da se
            odpovedujete določenim pravicam, vključno z nadomestilom za
            brezposelnost pri Zavodu za zaposlovanje.
          </p>
          <a
            href="/delovno-pravo/odpoved/"
            className="text-[15px] font-medium text-accent hover:text-accent-light transition-colors duration-200"
          >
            Več o odpovedi pogodbe &rarr;
          </a>
        </section>

        {/* Odpravnina */}
        <section className="mb-14">
          <h3 className="font-serif text-[24px] font-semibold text-site-text mb-4">
            Odpravnina
          </h3>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            Odpravnina ni univerzalna pravica. Pripada vam samo v primerih, ki
            jih taksativno našteva 108. člen ZDR-1.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            Ključno razlikovanje: odpravnino dobite ob odpovedi iz poslovnih
            razlogov ali razloga nesposobnosti. Ne dobite je ob krivdni
            odpovedi. Ne dobite je ob sporazumni prekinitvi, razen če se
            izrecno dogovorite drugače. To je ena najpogostejših pasti. Ljudje
            podpišejo sporazum, misleč da ohranjajo vse pravice. Ne ohranjajo
            jih.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            Koliko znaša odpravnina? Odvisno od let zaposlitve pri istem
            delodajalcu. Za prvih 1 do 10 let: ena tretjina povprečne mesečne
            plače za vsako leto. Od 10 do 20 let: ena četrtina. Nad 20 let: ena
            tretjina. Maksimum je 10-kratnik vaše mesečne plače.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-5">
            Odpravnina ob upokojitvi je poseben primer. Pripada vsakemu
            zaposlenemu ob izpolnitvi pogojev za upokojitev, ne glede na to, kdo
            poda odpoved. Višina je odvisna od kolektivne pogodbe ali ZDR-1,
            velja kar je ugodneje za delavca. Odpravnina iz poslovnih razlogov
            ima podobno formulo, a ne zamenjujte obeh. Gre za dva različna
            pravna temelja.
          </p>
          <a
            href="/delovno-pravo/odpravnina/"
            className="text-[15px] font-medium text-accent hover:text-accent-light transition-colors duration-200"
          >
            Več o odpravnini &rarr;
          </a>
        </section>

        {/* Regres */}
        <section className="mb-14">
          <h3 className="font-serif text-[24px] font-semibold text-site-text mb-4">
            Regres za letni dopust
          </h3>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            Regres 2026. Vsakoletno vprašanje, ki ga iskalniki zaznajo vsako
            pomlad. In upravičeno, ker se zneski spreminjajo.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            131. člen ZDR-1 je jasen: pravico do regresa ima vsak delavec, ki
            ima pravico do letnega dopusta. Tudi če delate krajši delovni čas.
            Tudi če ste zaposleni šele od marca. V tem primeru vam pripada
            sorazmerni del. Delodajalec vam mora izplačati regres najkasneje do
            1. julija tekočega leta, v višini najmanj minimalne plače.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            Koliko znaša regres 2026? Minimalni znesek je enak minimalni plači
            za tekoče leto, ki jo vlada potrdi z uredbo. Za javne uslužbence pa
            znesek določajo kolektivne pogodbe za javni sektor, ki se pogajajo
            vsako leto posebej. Pogosto so višji od zakonskega minimuma.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-5">
            Kaj če delodajalec zamuja? Zastaralni rok za terjatev regresa je 5
            let. To ni milost delodajalca. To je vaša zakonska pravica, vsako
            leto, brez izjeme. Če vam regres ni bil izplačan, imate podlago za
            zahtevek.
          </p>
          <a
            href="/delovno-pravo/regres/"
            className="text-[15px] font-medium text-accent hover:text-accent-light transition-colors duration-200"
          >
            Več o regresu &rarr;
          </a>
        </section>

        {/* Minimalna plača */}
        <section className="mb-14">
          <h3 className="font-serif text-[24px] font-semibold text-site-text mb-4">
            Minimalna plača
          </h3>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            Minimalna plača 2026 v Sloveniji. Znesek določi vlada vsako leto na
            podlagi Zakona o minimalni plači (ZMinP). Ne zamenjujte z ZDR-1.
            Minimalno plačo ureja poseben zakon.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            V zadnjih letih se je minimalna plača dvignila za več kot 30 %. A tu
            nastane past, ki jo spregleda večina zaposlenih. Če je vaša osnovna
            plača enaka minimalni plači, se morate prepričati, da delodajalec ne
            všteva dodatkov v ta znesek. Od leta 2020 vsi dodatki (za nočno
            delo, nadure, izmensko delo, delo ob nedeljah) ostajajo nad
            minimalno plačo, ne znotraj nje.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-5">
            Konkretno: če delate ponoči in dobivate minimalno plačo, mora biti
            vaše izplačilo višje od minimalne plače. Za celoten znesek nočnega
            dodatka. Kršitev te določbe je pogosta, a to ne pomeni, da je
            zakonita. Preverite svojo plačilno listo.
          </p>
          <a
            href="/delovno-pravo/minimalna-placa/"
            className="text-[15px] font-medium text-accent hover:text-accent-light transition-colors duration-200"
          >
            Več o minimalni plači &rarr;
          </a>
        </section>

        {/* Letni dopust */}
        <section className="mb-14">
          <h3 className="font-serif text-[24px] font-semibold text-site-text mb-4">
            Letni dopust
          </h3>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            Koliko dni letnega dopusta mi pripada? Minimum po ZDR-1 je 4 tedne.
            To pomeni 20 delovnih dni pri petdnevnem delovnem tednu. Ampak to je
            zakonski minimum. Kolektivne pogodbe in vaša pogodba o zaposlitvi
            pogosto določajo več.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            Zakon tudi določa kategorije delavcev, ki jim pripada dodatni
            dopust: delavci nad 55 let, delavci z invalidnostjo, delavci z
            otrokom do 15 let starosti, delavci z nižjo stopnjo izobrazbe. Te
            dneve morate zahtevati sami. Delodajalec vam jih ne bo avtomatično
            dodal.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8]">
            Roki za koriščenje: dva tedna morate koristiti strnjeno.
            Neizkoriščen dopust se prenese v naslednje leto, a ga morate
            izrabiti do 30. junija. Po tem datumu pravica ugasne, razen če ste
            bili odsotni zaradi bolezni ali materinstva.
          </p>
        </section>

        {/* Bolniška odsotnost */}
        <section className="mb-14">
          <h3 className="font-serif text-[24px] font-semibold text-site-text mb-4">
            Bolniška odsotnost
          </h3>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            Bolniška odsotnost deluje na dva nivoja. Prvih 30 delovnih dni
            stroške nosi delodajalec, nadomestilo znaša 80 % vaše plačne
            osnove. Izjema: poklicna bolezen ali poškodba pri delu, ko je
            nadomestilo 100 %. Po 30 dneh prevzame obveznost Zavod za
            zdravstveno zavarovanje Slovenije (ZZZS).
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            Bolniška na lastne stroške? Tega ZDR-1 formalno ne pozna. V praksi
            nekateri delodajalci dopuščajo kratko odsotnost (do 3 delovne dni)
            brez bolniškega lista. A to je interna praksa podjetja, ne zakonska
            pravica. Za daljše bolniške potrebujete potrdilo osebnega zdravnika
            od prvega dne.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8]">
            Ali me lahko odpustijo med bolniško? Kratek odgovor: z redno
            odpovedjo ne. ZDR-1 določa varstvo pred odpovedjo v času začasne
            nezmožnosti za delo. Toda izredna odpoved je možna tudi v tem
            obdobju, če obstajajo zakoniti razlogi. Varstvo ni absolutno. Ščiti
            vas pred redno odpovedjo, ne pred vsemi oblikami prenehanja pogodbe.
          </p>
        </section>

        {/* Šikaniranje */}
        <section className="mb-14">
          <h3 className="font-serif text-[24px] font-semibold text-site-text mb-4">
            Šikaniranje na delovnem mestu
          </h3>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            O trpinčenju na delovnem mestu ZDR-1 ne molči. 47. člen izrecno
            prepoveduje spolno in drugo nadlegovanje ter trpinčenje pri delu.
            Obveznost delodajalca je jasna: zagotoviti mora delovno okolje, v
            katerem delavec ni izpostavljen šikaniranju.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8]">
            Kaj lahko storite vi? Najprej pisno obvestite delodajalca. Če ne
            ukrepa, imate pravico do izredne odpovedi pogodbe, s polno
            odpravnino, kot da bi vas odpustili iz poslovnih razlogov.
            Dokumentirajte vse: elektronska sporočila, datume, priče. Vaša
            beseda proti besedi delodajalca brez dokazov ne zadošča.
          </p>
        </section>

        {/* ── Kdaj potrebujete odgovore ── */}
        <h2 className="font-serif text-[clamp(28px,4vw,38px)] font-semibold leading-[1.15] text-site-text mb-8 mt-20">
          Kdaj potrebujete odgovore iz delovnega prava
        </h2>
        <p className="text-[16px] text-site-mid leading-[1.8] mb-6">
          Teorija je fina. Ampak resnica je drugačna: večina ljudi poišče
          informacije šele, ko se jim nekaj zgodi. In takrat jih potrebujejo
          hitro.
        </p>

        <div className="flex flex-col gap-5 mb-6">
          <p className="text-[16px] text-site-mid leading-[1.8]">
            <strong className="text-site-text">Dobili ste odpoved.</strong>{" "}
            Delodajalec vam je vročil papir. Imate 30 dni za sodno varstvo,
            odpovedni rok teče. Morate vedeti: ali je odpoved zakonita, koliko
            odpravnine vam pripada, kaj bo z nadomestilom pri Zavodu za
            zaposlovanje.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8]">
            <strong className="text-site-text">
              Razmišljate o lastni odpovedi.
            </strong>{" "}
            Nova ponudba drugje, nevzdržne razmere, ali preprosto potreba po
            spremembi. Kaj je odpovedni rok za nedoločen čas? 15 dni v prvem
            letu, 30 dni po enem letu zaposlitve. Razen če pogodba ali
            kolektivna pogodba določata daljši rok.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8]">
            <strong className="text-site-text">
              Delodajalec zamuja z regresom.
            </strong>{" "}
            Rok je 1. julij. Če mineva in regresa ni na računu, to ni
            administrativna napaka. To je kršitev zakona.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8]">
            <strong className="text-site-text">
              Pogodba vam ponuja manj kot zakonski minimum.
            </strong>{" "}
            Minimalna plača pod pragom, dopust pod 20 dni, delovni čas brez
            odmora. Takšne klavzule so neveljavne, tudi če ste jih podpisali.
            ZDR-1 je prisilni predpis. Pogodba ne more odrekati pravic, ki jih
            zagotavlja zakon.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8]">
            <strong className="text-site-text">
              Na bolniški ste in vas skrbi za službo.
            </strong>{" "}
            Poznavanje pravic, konkretno kateri člen zakona vas ščiti, je
            najboljša obramba pred neupravičenim pritiskom delodajalca.
          </p>
        </div>
        <p className="text-[16px] text-site-mid leading-[1.8] mb-14">
          Skupno vsem tem situacijam: odgovori morajo biti hitri, natančni in
          utemeljeni na zakonu. Ne na mnenju soseda. Ne na forumskem komentarju
          iz leta 2019.
        </p>

        {/* ── AI KRPAN ── */}
        <h2 className="font-serif text-[clamp(28px,4vw,38px)] font-semibold leading-[1.15] text-site-text mb-8">
          Kako AI KRPAN pomaga pri vprašanjih iz delovnega prava
        </h2>
        <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
          AI KRPAN analizira celotno slovensko zakonodajo in sodno prakso.
          Zastavite vprašanje v naravnem jeziku. Odgovor dobite v sekundah, z
          navedbo konkretnih zakonskih členov.
        </p>
        <p className="text-[16px] text-site-mid leading-[1.8] mb-6">
          To ni generični jezikovni model, ki simulira pravno znanje. AI KRPAN
          dela izključno s slovensko zakonodajo. Šest specializiranih modelov
          pokriva različna pravna področja. Ko vprašate o odpovedi pogodbe o
          zaposlitvi, sistem poišče relevantne člene ZDR-1 in ustrezno sodno
          prakso, nato pa sestavi odgovor z natančnimi referencami.
        </p>

        <div className="bg-site-white border border-site-border rounded-lg p-6 mb-6">
          <p className="text-[14px] font-medium text-site-text mb-3">
            Primeri vprašanj, ki jih uporabniki zastavljajo:
          </p>
          <ul className="flex flex-col gap-2">
            {[
              "Koliko znaša moja odpravnina po 12 letih zaposlitve pri istem delodajalcu?",
              "Ali moram oddelati odpovedni rok, če dam odpoved sam?",
              "Kaj lahko naredim, če delodajalec zamuja z izplačilom regresa?",
              "Koliko dni dodatnega dopusta mi pripada kot materi dveh otrok?",
              "Kakšne so moje pravice pri sporazumni odpovedi?",
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

        <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
          Vsak odgovor vključuje navedbo členov zakona. Preverite lahko sami. Ni
          ugibanja, ni &ldquo;verjetno velja.&rdquo; Samo zakon in sodna
          praksa.
        </p>
        <p className="text-[16px] text-site-mid leading-[1.8] mb-6">
          Plačljive pravne platforme, kot sta TFL AI in LEXI, so namenjene
          odvetniškim pisarnam in večjim podjetjem. AI KRPAN pa je dostopen
          vsakomur. Zaposlenim, podjetnikom, kadrovikom, študentom prava.
          Brezplačna pravna pomoč v smislu prvega odgovora, ki vas usmeri v
          pravo smer, preden se odločite, ali potrebujete odvetnika.
        </p>
        <a
          href="https://app.aikrpan.com"
          className="inline-flex items-center gap-2 bg-sage-dark text-white px-6 py-3 rounded-sm text-[13px] font-semibold tracking-[0.06em] uppercase hover:bg-sage transition-colors duration-200 mb-14"
        >
          Zastavite vprašanje AI KRPAN-u &rarr;
        </a>

        {/* ── FAQ ── */}
        <h2 className="font-serif text-[clamp(28px,4vw,38px)] font-semibold leading-[1.15] text-site-text mb-8">
          Pogosta vprašanja o delovnem pravu
        </h2>
        <FAQAccordion items={faqs.map((faq) => ({ q: faq.question, a: faq.answer }))} />
      </div>
    </ContentLayout>
  );
}
