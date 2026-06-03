export const metadata = {
    title: "Impressum - PushQuantum",
    description: "Impressum und rechtliche Angaben von PushQuantum e.V.",
};

export default function ImprintPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative min-h-[220px] bg-pq-light-purple overflow-hidden pt-24">
                <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 lg:py-16">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl font-bold text-white sm:text-5xl">
                            Impressum
                        </h1>
                        <p className="mt-4 text-gray-400 text-base lg:text-lg">
                            Rechtliche Angaben gem. § 5 TMG
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 px-6 bg-white">
                <div className="mx-auto max-w-3xl">
                    {/* Address */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">
                            Angaben gem. § 5 TMG
                        </h2>
                        <div className="text-[#1a1a2e] leading-relaxed">
                            <p className="font-semibold">PushQuantum e.V.</p>
                            <p>Situlistraße 44</p>
                            <p>80939 München</p>
                        </div>
                        <div className="mt-4 text-[#1a1a2e] leading-relaxed">
                            <p className="font-semibold">Vertreten durch:</p>
                            <p>Felizia Braun</p>
                        </div>
                    </div>

                    {/* Kontakt */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">
                            Kontakt
                        </h2>
                        <p className="text-[#1a1a2e] leading-relaxed">
                            Telefon: +49 174 3815775
                            <br />
                            {"E-Mail: "}
                            <a
                                href="mailto:franz@pushquantum.tech"
                                className="text-[#e91e8c] hover:underline"
                            >
                                felizia@pushquantum.tech
                            </a>
                        </p>
                    </div>

                    {/* Haftungsausschluss */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6">
                            Haftungsausschluss
                        </h2>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">
                                    Haftung für Inhalte
                                </h3>
                                <p className="text-[#1a1a2e]/80 leading-relaxed">
                                    Die Inhalte dieser Website wurden mit größter Sorgfalt
                                    erstellt. Für die Richtigkeit, Vollständigkeit und
                                    Aktualität der Inhalte können wir jedoch keine Gewähr
                                    übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1
                                    TMG für eigene Inhalte auf diesen Seiten nach den
                                    allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG
                                    sind wir jedoch nicht verpflichtet, übermittelte oder
                                    gespeicherte fremde Informationen zu überwachen oder nach
                                    Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                                    hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
                                    Nutzung von Informationen nach den allgemeinen Gesetzen
                                    bleiben hiervon unberührt. Eine Haftung ist jedoch erst ab
                                    dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
                                    möglich. Bei Bekanntwerden von entsprechenden
                                    Rechtsverletzungen werden wir diese Inhalte umgehend
                                    entfernen.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">
                                    Haftung für Links
                                </h3>
                                <p className="text-[#1a1a2e]/80 leading-relaxed">
                                    Unser Angebot enthält Links zu externen Webseiten Dritter,
                                    auf deren Inhalte wir keinen Einfluss haben. Deshalb können
                                    wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                                    Für die Inhalte der verlinkten Seiten ist stets der
                                    jeweilige Anbieter oder Betreiber verantwortlich. Die
                                    verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
                                    mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
                                    waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
                                    permanente inhaltliche Kontrolle ist jedoch ohne konkrete
                                    Anhaltspunkte nicht zumutbar. Bei Bekanntwerden von
                                    Rechtsverletzungen werden wir entsprechende Links umgehend
                                    entfernen.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">
                                    Urheberrecht
                                </h3>
                                <p className="text-[#1a1a2e]/80 leading-relaxed">
                                    Die durch die Seitenbetreiber erstellten Inhalte und Werke
                                    auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                                    Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                                    der Verwertung außerhalb der Grenzen des Urheberrechtes
                                    bedürfen der schriftlichen Zustimmung des jeweiligen Autors
                                    bzw. Erstellers. Downloads und Kopien dieser Seite sind nur
                                    für den privaten, nicht kommerziellen Gebrauch gestattet.
                                    Soweit Inhalte nicht vom Betreiber erstellt wurden, werden
                                    die Urheberrechte Dritter beachtet. Sollten Sie trotzdem auf
                                    eine Urheberrechtsverletzung aufmerksam werden, bitten wir
                                    um einen entsprechenden Hinweis. Bei Bekanntwerden von
                                    Rechtsverletzungen werden wir derartige Inhalte umgehend
                                    entfernen.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">
                                    Datenschutz
                                </h3>
                                <p className="text-[#1a1a2e]/80 leading-relaxed">
                                    Die Nutzung der Webseite ist in der Regel ohne Angabe
                                    personenbezogener Daten möglich. Soweit personenbezogene
                                    Daten erhoben werden, erfolgt dies – soweit möglich – stets
                                    auf freiwilliger Basis und wird ohne ausdrückliche Zustimmung
                                    nicht an Dritte weitergegeben. Wir weisen darauf hin, dass
                                    die Datenübertragung im Internet Sicherheitslücken aufweisen
                                    kann. Ein lückenloser Schutz der Daten vor dem Zugriff
                                    Dritter ist nicht möglich. Der Nutzung der im Rahmen der
                                    Impressumspflicht veröffentlichten Kontaktdaten durch Dritte
                                    zur Übersendung nicht ausdrücklich angeforderter Werbung und
                                    Informationsmaterialien wird hiermit ausdrücklich
                                    widersprochen. Es werden rechtliche Schritte gegen die
                                    unverlangte Zusendung von Werbeinformationen (z. B.
                                    Spam-Mails) vorbehalten.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

