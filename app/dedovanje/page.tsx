import type { Metadata } from "next";
import ContentLayout from "@/components/ContentLayout";
import FAQAccordion from "@/components/FAQAccordion";
import SchemaScript from "@/components/SchemaScript";
import { faqPageSchema } from "@/app/content-schema";

export const metadata: Metadata = {
  title: "Zakon o dedovanju - Nujni delež, oporoka, postopek",
  description:
    "Kako poteka dedovanje v Sloveniji? Dedni redi, nujni delež, veljavna oporoka in zapuščinski postopek - pojasnjeno.",
  keywords: [
    "dedovanje",
    "zakon o dedovanju",
    "dedno pravo",
    "oporoka",
    "zapuščina",
    "dedni red",
    "nujni delež",
    "zapuščinski postopek",
    "odpoved dediščini",
    "dedovanje dolgov",
    "razdedinjenje",
    "ZD",
  ],
  alternates: {
    canonical: "https://www.aikrpan.com/dedovanje/",
  },
  openGraph: {
    title: "Zakon o dedovanju - Nujni delež, oporoka, postopek",
    description:
      "Kako poteka dedovanje v Sloveniji? Dedni redi, nujni delež, veljavna oporoka in zapuščinski postopek - pojasnjeno.",
    url: "https://www.aikrpan.com/dedovanje/",
    type: "article",
  },
};

const faqs = [
  {
    question: "Kdo deduje, če ni oporoke?",
    answer:
      "Velja zakonito dedovanje po ZD. Najprej dedujeta potomci in zakonec skupaj (1. dedni red, 10. člen ZD) - vsak z enakim deležem. Šele ko ni nikogar v prvem redu, pridejo starši in zakonec (2. red, 15. člen ZD). Bratje in sestre so skupaj s starši uvrščeni v 2. dedni red.",
  },
  {
    question: "Koliko znaša nujni delež?",
    answer:
      "Potomci in zakonec dobijo 1/2 svojega zakonitega deleža kot nujni delež (33. člen ZD). Starši dobijo 1/3, a le kadar so edini dediči. Bratje, sestre in ostali nujnega deleža nimajo - oporoka jih lahko v celoti izključi.",
  },
  {
    question: "Ali podedujemo dolgove umrlega?",
    answer:
      "Da, a le do vrednosti podedovanega premoženja (139. člen ZD). Vaše lastno premoženje ni ogroženo. Kadar so dolgovi večji od vrednosti zapuščine, je odpoved dediščini edina razumna poteza.",
  },
  {
    question: "Kdaj je oporoka neveljavna?",
    answer:
      "Lastnoročna oporoka je neveljavna, kadar je tipkana namesto pisana z roko, ni datirana ali ni podpisana (67. člen ZD). Pisna oporoka pred pričami pade, kadar je priča hkrati dedič ali njen zakonec. Neveljavna je tudi oporoka, ki jo zapustnik naknadno uniči ali prekliče z novo.",
  },
  {
    question: "Do kdaj se lahko odpovem dediščini?",
    answer:
      "Odpoved je mogoča do konca zapuščinske razprave (132. člen ZD). Po sklepu sodišča odpovedi ni mogoče veljavno podati. Odločitev je dokončna - naknaden premislek nima pravnega učinka.",
  },
];

const subPages = [
  {
    title: "Oporoka",
    description: "Vrste, zahteve, veljavnost in izpodbijanje oporoke po ZD.",
    href: "/dedovanje/oporoka/",
  },
  {
    title: "Nujni delež",
    description:
      "Kdo je upravičen, koliko znaša in kako ga uveljavljate.",
    href: "/dedovanje/nujni-delez/",
  },
  {
    title: "Zapuščinski postopek",
    description: "Koraki, dokumenti, roki in pritožbe korak za korakom.",
    href: "/dedovanje/zapuscinski-postopek/",
  },
];

export default function DedovanjePage() {
  return (
    <ContentLayout
      breadcrumbs={[{ label: "Dedovanje", href: "/dedovanje/" }]}
      title="Dedovanje v Sloveniji: kaj se zgodi z zapuščino in kakšne so vaše pravice"
      subtitle="Zakon o dedovanju ureja vsak korak: dedne rede, oporoko, nujni delež in zapuščinski postopek. Ta stran pokriva bistvo."
      article={{
        title: "Zakon o dedovanju - Nujni delež, oporoka, postopek",
        description:
          "Kako poteka dedovanje v Sloveniji? Dedni redi, nujni delež, veljavna oporoka in zapuščinski postopek - pojasnjeno.",
        url: "/dedovanje/",
        datePublished: "2026-03-18",
        dateModified: "2026-03-18",
      }}
    >
      <SchemaScript schema={faqPageSchema(faqs)} />

      {/* Intro */}
      <div className="max-w-3xl mb-16">
        <p className="text-[17px] text-site-mid leading-[1.8] mb-5">
          Ko nekdo umre, ima preostalo delo dva obraza: čustveni in pravni.
          Pravni pogosto preseneča. Kdo dobi stanovanje? Kdo plača dolgove? Kaj,
          če oporoka nasprotuje zakonskim pravilom?
        </p>
        <p className="text-[17px] text-site-mid leading-[1.8]">
          Zakon o dedovanju (ZD) iz leta 1976 &ndash; s kasnejšimi dopolnitvami
          &ndash; ureja vsak korak tega postopka. Problem ni, da zakon ne
          obstaja. Problem je, da ga večina ne pozna, dokler ne stoji pred
          sodiščem.
        </p>
      </div>

      {/* Sub-page cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
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

      <div className="max-w-3xl">
        <h2 className="font-serif text-[clamp(28px,4vw,38px)] font-semibold leading-[1.15] text-site-text mb-10">
          Ključna področja dednega prava
        </h2>

        {/* Dedni redi */}
        <section className="mb-14">
          <h3 className="font-serif text-[24px] font-semibold text-site-text mb-4">
            Dedni redi po zakonu
          </h3>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-6">
            Zakon razporedi dediče v štiri dedne rede. Osnovno pravilo: višji
            red izključuje nižjega. Kadar so živi potomci, starši zapustnika nič
            ne dobijo.
          </p>
          <ul className="flex flex-col gap-4 mb-6">
            {[
              [
                "1. dedni red",
                "zajema potomce zapustnika in zakonca (10.–14. člen ZD). Vsak od njih dobi enak delež – otrok nič ne dobi pred zakoncem in obratno. Kadar so štirje dediči v prvem redu, vsak dobi četrtino.",
              ],
              [
                "2. dedni red",
                "nastopi, kadar zapustnik ni imel potomcev. Dedujejo starši in zakonec (15.–18. člen ZD). Zakonec dobi polovico zapuščine, starša skupaj drugo polovico. Brez zakonca starša dobita vse.",
              ],
              [
                "3. in 4. dedni red",
                "zajemata stare starše (19.–22. člen ZD) in prastare starše (23.–25. člen ZD). V praksi do tega pride redko. Kadar ni nobenega zakonitega dediča, celotna zapuščina preide na državo (30. člen ZD).",
              ],
            ].map(([title, desc]) => (
              <li
                key={title}
                className="text-[16px] text-site-mid leading-[1.8] pl-4 border-l-2 border-sage-light"
              >
                <strong className="text-site-text">{title}</strong> {desc}
              </li>
            ))}
          </ul>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            <strong className="text-site-text">Zunajzakonski partner</strong>{" "}
            ima enake dedne pravice kot zakonec &ndash; a mora biti skupnost
            trajna in resnična. Razvezani zakonec ne deduje. Pastorki brez
            posvojitve nimajo zakonite dedne pravice; za to je potrebna oporoka.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8]">
            Za vprašanja na stičišču dednega in{" "}
            <a
              href="/druzinsko-pravo/"
              className="text-accent hover:text-accent-light transition-colors duration-200"
            >
              družinskega prava
            </a>{" "}
            &ndash; na primer ali partner deduje po prenehanju skupnosti &ndash;{" "}
            <a
              href="https://app.aikrpan.com"
              className="text-accent hover:text-accent-light transition-colors duration-200"
            >
              AI KRPAN
            </a>{" "}
            pove, kateri zakonski pogoj mora biti izpolnjen.
          </p>
        </section>

        {/* Oporoka */}
        <section className="mb-14">
          <h3 className="font-serif text-[24px] font-semibold text-site-text mb-4">
            Oporoka ali zakonito dedovanje
          </h3>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            Brez oporoke velja zakonito dedovanje po dednih redih. Z oporoko
            zapustnik sam odloči, kdo dobi kaj &ndash; v mejah, ki jih postavlja
            zakon.
          </p>
          <p className="text-[15px] font-medium text-site-text mb-3">
            ZD pozna pet vrst oporok (59.–80. člen ZD):
          </p>
          <ul className="flex flex-col gap-3 mb-6">
            {[
              [
                "Lastnoročna oporoka:",
                "Celotno besedilo mora biti napisano z roko – tipkana ne velja. Zahtevata se datum in podpis. En sam manjkajoč datum jo postavi pod vprašaj.",
              ],
              [
                "Pisna oporoka pred pričami:",
                "Zapustnik podpiše pred dvema pričama, ki potrdita, da je to njegova volja. Priča ne sme biti dedič niti njen zakonec.",
              ],
              [
                "Notarska oporoka:",
                "Notar jo sestavi, overi in hrani. Najtrdnejša oblika, najmanj izpodbitna.",
              ],
              [
                "Sodna oporoka:",
                "Jo sestavi sodišče na zapustnikovo zahtevo.",
              ],
              [
                "Ustna oporoka:",
                "Veljavna le v izrednih razmerah – huda bolezen, neposredna nevarnost. Velja 30 dni po prenehanju razlogov (80. člen ZD).",
              ],
            ].map(([title, desc]) => (
              <li
                key={title}
                className="text-[15px] text-site-mid leading-[1.7] pl-4 border-l-2 border-sage-light"
              >
                <strong className="text-site-text">{title}</strong> {desc}
              </li>
            ))}
          </ul>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            Oporoka ne more vsega. Nujnih dedičev ne more povsem izključiti iz
            zapuščine &ndash; razen z zakonito razdedinjenjem, ki ima stroge
            pogoje.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            Imate lastnoročno oporoko in niste prepričani, ali izpolnjuje vse
            zahteve?{" "}
            <a
              href="https://app.aikrpan.com"
              className="text-accent hover:text-accent-light transition-colors duration-200"
            >
              AI KRPAN
            </a>{" "}
            prebere besedilo in označi, kateri pogoji so izpolnjeni in kateri
            morda ne. Kadar je namen premoženje prenesti za časa življenja, je
            bolj relevantna{" "}
            <a
              href="/pogodbe/"
              className="text-accent hover:text-accent-light transition-colors duration-200"
            >
              darilna ali izročilna pogodba
            </a>{" "}
            &ndash; ki ima drugačne davčne in dedne posledice kot oporoka.
          </p>
          <a
            href="/dedovanje/oporoka/"
            className="text-[15px] font-medium text-accent hover:text-accent-light transition-colors duration-200"
          >
            Oporoka &ndash; kdaj velja in kdaj ne &rarr;
          </a>
        </section>

        {/* Nujni delež */}
        <section className="mb-14">
          <h3 className="font-serif text-[24px] font-semibold text-site-text mb-4">
            Nujni delež
          </h3>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            Nujni delež je del zapuščine, ki ga določeni dediči dobijo vedno
            &ndash; ne glede na to, kaj piše v oporoki. Te pravice zapustnik ne
            more odvzeti.
          </p>
          <p className="text-[15px] font-medium text-site-text mb-3">
            Upravičenci do nujnega deleža (32. člen ZD):
          </p>
          <ul className="flex flex-col gap-2 mb-6">
            {[
              "Potomci (otroci, vnuki): 1/2 svojega zakonitega deleža",
              "Zakonec: 1/2 zakonitega deleža",
              "Starši: 1/3 – a samo kadar so edini dediči zapustnika",
            ].map((item) => (
              <li
                key={item}
                className="text-[15px] text-site-mid leading-[1.7] pl-4 border-l-2 border-sage-light"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            Bratje, sestre, stari starši &ndash; ti nujnega deleža nimajo.
            Oporoka jih lahko v celoti izključi.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            Nujni delež se izračuna iz vrednosti celotne zapuščine in
            upoštevnih daril, ki jih je zapustnik podaril za časa življenja
            (36.–40. člen ZD). To je pogosto vir sporov: ko je zapustnik hišo
            ali večjo vsoto denarja podaril enemu otroku, drugi otrok zahteva
            dopolnitev nujnega deleža iz preostalega premoženja.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            <strong className="text-site-text">Razdedinjenje</strong> je
            zakonita izključitev nujnega dediča &ndash; a ni enostavno
            (42.–44. člen ZD). Zakon predpisuje točno določene razloge: hud
            zločin proti zapustniku ali bližnjim, neplačevanje preživnine,
            zapustitev zapustnika v stiski. Brez zakonsko veljavnega razloga
            razdedinjenje ne drži in ga sodišče razveljavi.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-5">
            Konkretno vprašanje o vašem primeru? Zastavite ga{" "}
            <a
              href="https://app.aikrpan.com"
              className="text-accent hover:text-accent-light transition-colors duration-200"
            >
              AI KRPAN-u
            </a>{" "}
            &ndash; skupaj z vrednostjo premoženja in sestavo družine za
            natančnejši odgovor.
          </p>
          <a
            href="/dedovanje/nujni-delez/"
            className="text-[15px] font-medium text-accent hover:text-accent-light transition-colors duration-200"
          >
            Nujni delež &ndash; kaj vam pripada &rarr;
          </a>
        </section>

        {/* Zapuščinski postopek */}
        <section className="mb-14">
          <h3 className="font-serif text-[24px] font-semibold text-site-text mb-4">
            Zapuščinski postopek
          </h3>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-6">
            Ko nekdo umre, sodišče začne zapuščinski postopek po uradni
            dolžnosti &ndash; brez vloge s strani dedičev (128. člen ZD).
            Matičar pošlje obvestilo o smrti okrajnemu sodišču in postopek steče
            sam od sebe.
          </p>
          <ul className="flex flex-col gap-3 mb-6">
            {[
              "Sodišče prejme obvestilo o smrti.",
              "Določi datum zapuščinske razprave.",
              "Na razpravi se ugotovi sestava zapuščine in krog dedičev.",
              "Vsak dedič poda dedno izjavo – sprejme ali se odpove dediščini.",
              "Sodišče izda sklep o dedovanju.",
            ].map((item, i) => (
              <li
                key={i}
                className="text-[15px] text-site-mid leading-[1.7] pl-4 border-l-2 border-sage-light"
              >
                <strong className="text-site-text">{i + 1}.</strong> {item}
              </li>
            ))}
          </ul>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            Postopek traja od nekaj mesecev do več kot leto &ndash; odvisno od
            obremenjenosti sodišča in tega, ali so med dediči spori.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            Kadar zapuščina vključuje nepremičnine, podjetja ali vrednostne
            papirje, sodišče imenuje cenilca. Vrednotenje postopek podaljša in
            doda stroške &ndash; to je treba predvideti.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-5">
            Sklep o dedovanju je listina, ki jo potrebujete za vpis
            nepremičnine v zemljiško knjigo, za prenos bančnih računov in za
            vse, kar sledi. Brez njega ne morete ničesar urediti.
          </p>
          <a
            href="/dedovanje/zapuscinski-postopek/"
            className="text-[15px] font-medium text-accent hover:text-accent-light transition-colors duration-200"
          >
            Zapuščinski postopek &ndash; korak za korakom &rarr;
          </a>
        </section>

        {/* Odpoved dediščini */}
        <section className="mb-14">
          <h3 className="font-serif text-[24px] font-semibold text-site-text mb-4">
            Odpoved dediščini
          </h3>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            Dediščine ni treba sprejeti. Vsak dedič se ji lahko odpove do konca
            zapuščinske razprave (132. člen ZD). Po sklepu sodišča odpovedi ni
            mogoče veljavno podati.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            Odpoved je dokončna. Dedič, ki se odpove, se šteje, kot da nikoli
            ni bil dedič. Deleži preostalih dedičev se sorazmerno povečajo.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            <strong className="text-site-text">Kdaj je odpoved smiselna?</strong>{" "}
            Ko so dolgovi večji od premoženja. Podedovati stanovanje in hkrati
            120.000 EUR bančnega kredita ni bogastvo &ndash; je breme. V tem
            primeru odpoved zaščiti vaše lastno premoženje.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8]">
            Ena stvar, ki jo pogosto spregledamo: odpoved ne velja avtomatično
            za vaše otroke. Kadar se odpoveste, vaši potomci ne stopijo na vaše
            mesto &ndash; razen če to v izjavi izrecno določite (132. člen ZD).
            To preseneti marsikoga, ki misli, da ščiti tudi svojo družino.
          </p>
        </section>

        {/* Dedovanje dolgov */}
        <section className="mb-14">
          <h3 className="font-serif text-[24px] font-semibold text-site-text mb-4">
            Dedovanje dolgov
          </h3>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            Dediči odgovarjajo za zapustnikove dolgove &ndash; a ne brez
            omejitev. Odgovornost je omejena na vrednost podedovanega premoženja
            (139. člen ZD). To načelo se imenuje odgovornost{" "}
            <em>pro viribus hereditatis</em> &ndash; &ldquo;do vrednosti
            zapuščine.&rdquo;
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            Upniki ne morejo seči v vaš lastni žep. Samo v tisto, kar ste
            podedovali.
          </p>

          <div className="bg-site-white border border-site-border rounded-lg p-6 mb-6">
            <p className="text-[14px] font-medium text-site-text mb-2">
              Primer
            </p>
            <p className="text-[15px] text-site-mid leading-[1.7]">
              Podedujete stanovanje v vrednosti 85.000 EUR in dolgove 130.000
              EUR. Plačate do 85.000 EUR. Preostalih 45.000 EUR ostane upniku
              neporavnano &ndash; brez vaše osebne odgovornosti za razliko.
            </p>
          </div>

          <p className="text-[16px] text-site-mid leading-[1.8] mb-4">
            Kadar deduje več dedičev, vsak odgovarja sorazmerno s svojim dednim
            deležem (141. člen ZD). Upnik ne more vsega zahtevati od enega
            samega dediča.
          </p>
          <p className="text-[16px] text-site-mid leading-[1.8]">
            Posebej pazite na skupne bančne račune in poroštvene pogodbe &ndash;
            te se obravnavajo ločeno od zapuščine v klasičnem smislu in imajo
            lastna pravila. Za jasno sliko, katere dolgove morate poravnati in v
            kakšnem vrstnem redu, zastavite vprašanje{" "}
            <a
              href="https://app.aikrpan.com"
              className="text-accent hover:text-accent-light transition-colors duration-200"
            >
              AI KRPAN-u
            </a>
            .
          </p>
        </section>

        {/* AI KRPAN CTA */}
        <div className="bg-sage-dark/5 border border-sage-light rounded-lg p-6 mb-14">
          <p className="text-[16px] text-site-mid leading-[1.8] mb-3">
            Imate konkretno vprašanje o dedovanju? Opišite svojo situacijo{" "}
            <a
              href="https://app.aikrpan.com"
              className="text-accent hover:text-accent-light transition-colors duration-200"
            >
              AI KRPAN-u
            </a>{" "}
            in dobite odgovor z navedenimi členi zakona &ndash; brezplačno.
          </p>
          <a
            href="https://app.aikrpan.com"
            className="inline-flex items-center gap-2 bg-sage-dark text-white px-6 py-3 rounded-sm text-[13px] font-semibold tracking-[0.06em] uppercase hover:bg-sage transition-colors duration-200"
          >
            Zastavite vprašanje &rarr;
          </a>
        </div>

        {/* FAQ */}
        <h2 className="font-serif text-[clamp(28px,4vw,38px)] font-semibold leading-[1.15] text-site-text mb-8">
          Pogosta vprašanja o dedovanju
        </h2>
        <FAQAccordion
          items={faqs.map((faq) => ({ q: faq.question, a: faq.answer }))}
        />
      </div>
    </ContentLayout>
  );
}
